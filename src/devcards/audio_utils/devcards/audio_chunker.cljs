(ns audio-utils.devcards.audio-chunker
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [devcards.core :refer-macros [defcard deftest dom-node]]
            [sablono.core :refer-macros [html]]
            [audio-utils.audio-chunker :as c]
            [audio-utils.web-audio :as a]
            [audio-utils.viz :refer [linear-distribution
                                     plot-buffers
                                     sine-wave]]
            [cljs.core.async :refer [<! timeout]]))

(defn run-test
  [state]
  (swap! state assoc :processing? true)
  (let [ctx          (a/audio-context)
        sample-rate  (.-sampleRate ctx)
        input-data   ((:data-fn @state) sample-rate)
        input-buffer (let [buffer (.createBuffer ctx 1
                                                 (count input-data)
                                                 sample-rate)
                           data   (.getChannelData buffer 0)]
                       (doseq [[i x] (map-indexed vector input-data)]
                         (aset data i x))
                       buffer)
        source       (doto (.createBufferSource ctx)
                       (aset "buffer" input-buffer))
        chunks       #js []
        chunker      (c/audio-chunker {:ctx     ctx
                                       :samples 4410
                                       :on-chunk-ready
                                       (fn [channel chunk]
                                         (when (= 0 channel)
                                           (.push chunks chunk)))})
        dest         (.createMediaStreamDestination ctx)]
    (c/connect-source chunker source)
    (c/connect-destination chunker dest)
    (set! (.-onended source)
          (fn [e]
            (.disconnect source)
            (c/disconnect chunker)
            (go
              (<! (timeout 1000))
              (c/flush chunker)
              (swap! state assoc
                     :processing? false
                     :finished?   true
                     :sample-rate sample-rate
                     :input-data  input-data
                     :chunks      (apply concat (js->clj chunks))))))
    (.start source)))

(defn plot-chunker-test
  [state]
  (let [{:keys [processing?
                finished?
                sample-rate
                input-data
                chunks]} @state]
    (cond
      finished?   (plot-buffers (count input-data)
                                (str "Input Data "
                                     "(" (count input-data) " samples)")
                                input-data
                                (str "Concatenated Chunks "
                                     "(" (count chunks) " samples)")
                                chunks)
      processing? (html [:p "Processing..."])
      :else       (html [:button {:on-click #(run-test state)}
                         "Run test"]))))

(defcard
  "An audio chunker with a chunk size of 4410 samples, fed with a
   stream of 32768 samples linearly distributed from -1.0 to 1.0. The
   resulting plot shows the original stream and the result of
   concatenating all chunks, which, if the audio chunker works correctly,
   should be exactly the same."
  (fn [state owner]
    (plot-chunker-test state))
  {:processing? false
   :finished?   false
   :chunk-size  4410
   :chunks      []
   :input-data  []
   :sample-rate 0
   :data-fn     (fn [sample-rate]
                  (linear-distribution [-1.0 1.0] 32768))})

(defcard
  "An audio chunker with a chunk size of 1000 samples, fed with a
   stream of 32768 samples from a 10Hz sine wave with values between
   -1.0 and 1.0. The resulting plot shows the original stream and the
   result of concatenating all chunks, which, if the audio chunker
   works correctly, should be exactly the same."
  (fn [state owner]
    (plot-chunker-test state))
  {:processing? false
   :finished?   false
   :chunk-size  1000
   :chunks      []
   :input-data  []
   :sample-rate 0
   :data-fn     (fn [sample-rate]
                  (sine-wave 10 sample-rate 32768))})
