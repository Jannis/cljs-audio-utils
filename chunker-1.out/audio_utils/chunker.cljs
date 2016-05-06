(ns audio-utils.chunker
  (:require [audio-utils.worker :as w]))

(defprotocol IChunker
  (process-samples [this samples])
  (deliver-chunks [this])
  (reset-chunks [this n-channels]))

(defrecord Chunker [samples-per-chunk next chunks]
  w/IWorkerAudioNode
  (connect [this destination]
    (reset! next destination))

  (disconnect [this]
    (reset! next nil))

  (process-audio [this data]
    (let [n-samples  (count (first data))
          n-channels (count data)]
      (dotimes [n n-samples]
        (let [samples (mapv #((data %) n) (range 0 n-channels))]
          (process-samples this samples)))))

  IChunker
  (process-samples [this samples]
    (dotimes [channel (count samples)]
      (let [sample (samples channel)]
        (swap! chunks update channel conj sample)))
    (when (>= (count (first @chunks)) samples-per-chunk)
      (deliver-chunks this)
      (reset-chunks this (count samples))))

  (deliver-chunks [this]
    (some-> @next (w/process-audio @chunks)))

  (reset-chunks [this n-channels]
    (let [empty-chunks (into [] (repeat n-channels []))]
      (reset! chunks empty-chunks))))

(defn chunker
  [{:keys [samples-per-chunk]
    :or {samples-per-chunk 4410}}]
  (map->Chunker {:samples-per-chunk samples-per-chunk
                 :next              (atom nil)
                 :chunks            (atom [[] []])}))
