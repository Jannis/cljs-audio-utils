(ns audio-utils.triggered-chunker
  (:require [audio-utils.util :as u :refer [aatom aswap! << >>]]
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
      (let [n-channels (u/acount data)
            n-samples  (u/acount (u/afirst data))]
        (dotimes [n n-samples]
          (let [samples (u/amap #(u/anth % n) data)]
            (process-samples this samples))))))

  ITriggeredChunker
  (process-samples [this samples]
    (dotimes [channel (u/acount samples)]
      (let [sample (u/anth samples channel)]
        (aswap! chunks u/aupdate channel u/aconj sample))))

  (deliver-chunks [this]
    (some-> @next (w/process-audio (<< chunks))))

  (reset-chunks [this]
    (let [n-channels   (count (<< chunks))
          empty-chunks (into-array (repeat n-channels (array)))]
      (>> chunks empty-chunks)))

  (trigger [this capture?]
    (when-not capture?
      (deliver-chunks this)
      (reset-chunks this))
    (>> capturing? capture?)))

(defn triggered-chunker
  []
  (map->TriggeredChunker {:next       (atom nil)
                          :chunks     (aatom #js [])
                          :capturing? (aatom false)}))
