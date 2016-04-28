(ns audio-utils.devcards.gate
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [devcards.core :refer-macros [defcard deftest dom-node]]
            [goog.string :as gstring]
            [goog.string.format]
            [sablono.core :refer-macros [html]]
            [audio-utils.audio-chunker :as c]
            [audio-utils.gate :as g]
            [audio-utils.web-audio :as a]
            [audio-utils.viz :refer [linear-distribution
                                     plot-buffers
                                     sine-wave]]
            [cljs.core.async :refer [<! timeout]]))

(defn run-test
  [state]
  (swap! state assoc :processing? true)
  (let [ctx         (a/audio-context)
        sample-rate (.-sampleRate ctx)
        buffer-size (:buffer-size @state)
        input-data  ((:data-fn @state) sample-rate)
        source      (a/create-buffer-source ctx 1 sample-rate
                                            input-data)
        gate        (g/gate
                     {:ctx         ctx
                      :buffer-size buffer-size
                      :threshold   (:threshold @state)
                      :look-ahead  (:look-ahead @state)
                      :hold        (:hold @state)
                      :rms-window  (:rms-window @state)})
        output      #js []
        recorder    (doto (.createScriptProcessor ctx buffer-size 1 1)
                      (aset "onaudioprocess"
                            (fn [event]
                              (let [in-buf  (.-inputBuffer event)
                                    in-data (.getChannelData in-buf 0)]
                                (dotimes [n (.-length in-data)]
                                  (.push output (aget in-data n)))))))
        dest        (.createMediaStreamDestination ctx)]
    (g/connect-source gate source)
    (.connect (:node gate) recorder)
    (.connect recorder dest)
    (set! (.-onended source)
          (fn [e]
            (.disconnect recorder)
            (g/disconnect gate)
            (.disconnect source)
            (go
              (<! (timeout 1000))
              (swap! state assoc
                     :finished?   true
                     :sample-rate sample-rate
                     :input-data  input-data
                     :output-data (js->clj output)))))
    (.start source 0 0 3)))

(defn gate-test
  [state]
  (let [{:keys [processing?
                finished?
                sample-rate
                input-data
                output-data]} @state]
    (cond
      finished?   (plot-buffers sample-rate
                                (gstring/format "Input (%d samples)"
                                                (count input-data))
                                input-data
                                (gstring/format "Output (%d samples)"
                                                (count output-data))
                                output-data)
      processing? (html [:p "Processing..."])
      :else       (html [:button {:on-click #(run-test state)}
                         "Run test"]))))

(defcard
  "A look-ahead gate with the following parameters, fed with a
   stream of 32768 samples linearly distributed from -1.0 to 1.0.
   Threshold -32dB, look-ahead 0ms, hold 0ms, RMS window 10ms."
  (fn [state owner]
    (gate-test state))
  {:threshold   -32.0
   :buffer-size 4096
   :look-ahead  0
   :hold        0
   :rms-window  100
   :chunks      []
   :data-fn     (fn [sample-rate]
                  (into [] (repeat sample-rate 1.0)))})
