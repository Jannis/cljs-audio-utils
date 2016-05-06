(ns audio-utils.devcards.chunker
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [devcards.core :refer-macros [defcard deftest dom-node]]
            [goog.string :as gstring]
            [goog.string.format]
            [sablono.core :refer-macros [html]]
            [audio-utils.chunker :as c]
            [audio-utils.web-audio :as a]
            [audio-utils.viz :refer [linear-distribution
                                     plot-buffers
                                     sine-wave]]
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
        chunks      #js []
        exit-node   (w/main-exit-node worker
                                      (fn [channel-chunks]
                                        (let [chunk (channel-chunks 0)]
                                          (.push chunks chunk))))
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
              (.close ctx)
              (swap! state assoc
                     :processing? false
                     :finished?   true
                     :sample-rate sample-rate
                     :input-data  input-data
                     :chunks      chunks))))
    (.start source)))

(defn chunker-test
  [state]
  (let [{:keys [processing?
                finished?
                sample-rate
                input-data
                chunks]} @state
        combined-chunks  (apply concat chunks)]
    (cond
      finished?   (plot-buffers (count input-data) 2000
                                (gstring/format "Input Data (%d samples)"
                                                (count input-data))
                                input-data
                                (gstring/format "%d Chunks (%d samples)"
                                                (count chunks)
                                                (count combined-chunks))
                                combined-chunks)
      processing? (html [:p "Processing..."])
      :else       (html [:button {:on-click #(run-test state)}
                         "Run test"]))))

(defcard
  "An audio chunker with a chunk size of 4410 samples, fed with a
   stream of 32768 samples linearly distributed from -1.0 to 1.0. The
   resulting plot shows the original stream and the result of
   concatenating all chunks and collecting the first 32768 samples from
   them, which, if the audio chunker works correctly, should be exactly
   the same as the input data."
  (fn [state owner]
    (chunker-test state))
  {:worker  "chunker-1.js"
   :data-fn (fn [sample-rate]
              (linear-distribution [-1.0 1.0] 32768))})

(defcard
  "An audio chunker with a chunk size of 4410 samples, fed with a
   stream of 441000 samples of a 10Hz sine wave with amplitude 1.0.
   The resulting plot shows the original stream and the result of
   concatenating all chunks and collecting the first 441000 samples
   from them, which, if the audio chunker works correctly, should
   be exactly the same as the input data."
  (fn [state owner]
    (chunker-test state))
  {:worker  "chunker-2.js"
   :data-fn (fn [sample-rate]
              (sine-wave 2 44100 441000))})
