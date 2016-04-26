(ns audio-utils.devcards.audio-chunker
  (:require [devcards.core :refer-macros [defcard deftest dom-node]]
            [sablono.core :refer-macros [html]]
            [audio-utils.audio-chunker :as c]
            [audio-utils.web-audio :as a]
            [audio-utils.viz :refer [linear-distribution
                                     plot-buffers]]))

(def state1 (atom {}))

(let [ctx          (a/audio-context)
      sample-rate  (.-sampleRate ctx)
      _            (swap! state1 assoc :sample-rate sample-rate)
      input-data   (linear-distribution [-1.0 1.0] sample-rate)
                   #_(into [] (repeat sample-rate 0.0))
      _            (js/console.log "INPUT DATA"
                                   (count input-data)
                                   (into-array input-data))
      _            (swap! state1 assoc :input-data input-data)
      input-buffer (.createBuffer ctx 1 sample-rate sample-rate)
      _            (let [data (.getChannelData input-buffer 0)]
                     (doseq [[i x] (map-indexed vector input-data)]
                       (aset data i x)))
      source       (let [source (.createBufferSource ctx)]
                     (set! (.-buffer source) input-buffer)
                     source)
      chunker      (c/audio-chunker {:ctx     ctx
                                     :samples 4096
                                     :on-chunk-ready
                                     (fn [channel chunk]
                                       (when (= 1 channel)
                                         (swap! state1 update
                                                :chunks
                                                (comp vec concat)
                                                chunk)))})
      dest         (.createMediaStreamDestination ctx)]
  (c/connect-source chunker source)
  (c/connect-destination chunker dest)
  (set! (.-onended source)
        (fn [e]
          (js/console.log "ENDED")
          (.disconnect source)
          (c/disconnect chunker)
          (c/flush chunker)
          (swap! state1 assoc :finished? true)))
  (.start source 0 0 1))

(defcard
  "An audio chunker with a chunk size of 4410 samples, fed with a
   stream of 44100 samples linearly distributed from -1.0 to 1.0. The
   resulting plot shows the original stream and the result of
   concatenating all chunks, which, if the audio chunker works correctly,
   should be exactly the same."
  (fn [state owner]
    (let [{:keys [finished? sample-rate input-data chunks]
           :or   {input-data []
                  chunks     []}} @state]
      (if finished?
        (plot-buffers sample-rate
                      "Input Data" input-data
                      (str "Individual Chunks ("
                           (count chunks)
                           " samples)") chunks)
        (html [:div "Processing..."]))))
  state1)
