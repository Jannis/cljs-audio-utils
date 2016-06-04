(ns audio-utils.triggered-chunker
  (:require [audio-utils.util :refer [aatom aswap! << >>]]
            [audio-utils.worker :as w]))

(defprotocol ITriggeredChunker
  (process-samples [this samples])
  (deliver-chunks [this])
  (reset-chunks [this])
  (trigger [this capture?]))

(defrecord TriggeredChunker [next chunks capturing?]
  w/IWorkerAudioNode
  (connect [this destination]
    (reset! next destination))

  (disconnect [this]
    (reset! next nil))

  (process-audio [this data]
    (when (<< capturing?)
      (let [n-channels (count data)
            n-samples  (count (first data))]
        (dotimes [n n-samples]
          (let [samples (mapv #(nth % n) data)]
            (process-samples this samples))))))

  ITriggeredChunker
  (process-samples [this samples]
    (dotimes [channel (count samples)]
      (let [sample (samples channel)]
        (aswap! chunks update channel conj sample))))

  (deliver-chunks [this]
    (some-> @next (w/process-audio (<< chunks))))

  (reset-chunks [this]
    (let [n-channels   (count (<< chunks))
          empty-chunks (into [] (repeat n-channels []))]
      (>> chunks empty-chunks)))

  (trigger [this capture?]
    (when-not capture?
      (deliver-chunks this)
      (reset-chunks this))
    (>> capturing? capture?)))

(defn triggered-chunker
  []
  (map->TriggeredChunker {:next       (atom nil)
                          :chunks     (aatom [])
                          :capturing? (aatom false)}))
