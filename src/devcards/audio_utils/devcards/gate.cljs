(ns audio-utils.devcards.gate
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [devcards.core :refer-macros [defcard deftest dom-node]]
            [goog.string :as gstring]
            [goog.string.format]
            [sablono.core :refer-macros [html]]
            [audio-utils.gate :as g]
            [audio-utils.viz :refer [linear-distribution
                                     plot-buffers
                                     sine-wave]]
            [audio-utils.web-audio :as a]
            [audio-utils.worker :as w]
            [cljs.core.async :refer [<! timeout]]))

(defn run-test
  [state]
  (swap! state assoc :processing? true)
  (let [ctx         (a/audio-context)
        sample-rate (.-sampleRate ctx)
        input-data  ((:data-fn @state) sample-rate)
        source      (a/create-buffer-source ctx 1 sample-rate
                                            input-data)
        worker      (new js/Worker (:worker @state))
        entry-node  (w/main-entry-node worker ctx
                                       {:buffer-size     2048
                                        :input-channels  1
                                        :output-channels 1})
        output-data (volatile! [])
        exit-node   (w/main-exit-node worker
                                      (fn [channel-data]
                                        (vswap! output-data concat
                                                (first channel-data))))
        dest        (.createMediaStreamDestination ctx)]
    (.connect source entry-node)
    (.connect entry-node dest)
    (set! (.-onended source)
          (fn [e]
            (.disconnect source)
            (.disconnect dest)
            (go
              (<! (timeout 1000))
              (.disconnect entry-node)
              (.terminate worker)
              (swap! state assoc
                     :processing? false
                     :finished?   true
                     :sample-rate sample-rate
                     :input-data  input-data
                     :output-data @output-data))))
    (.start source)))

(defn gate-test
  [state]
  (let [{:keys [processing?
                finished?
                sample-rate
                input-data
                output-data]} @state]
    (cond
      finished?   (plot-buffers (count input-data)
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
   Threshold -12dB, look-ahead 0ms, hold 0ms, RMS window 10ms."
  (fn [state owner]
    (gate-test state))
  {:worker  "gate-1.js"
   :data-fn (fn [sample-rate]
              (linear-distribution [-1.0 1.0] 32768))})
