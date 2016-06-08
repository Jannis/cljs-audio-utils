(ns audio-utils.chunker
  (:require [audio-utils.util :as u]
            [audio-utils.worker :as w]))

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
    (let [n-channels (u/acount data)
          n-samples  (u/acount (u/afirst data))]
      (dotimes [n n-samples]
        (let [samples (u/amap #(u/anth % n) data)]
          (process-samples this samples)))))

  IChunker
  (process-samples [this samples]
    (dotimes [channel (u/acount samples)]
      (let [sample (u/anth samples channel)]
        (u/aswap! chunks u/aupdate channel
                  (fn [arr]
                    (doto (or arr (array))
                      (u/aconj sample))))))
    (when (>= (u/acount (u/afirst (u/<< chunks)))
              samples-per-chunk)
      (deliver-chunks this)
      (reset-chunks this (u/acount samples))))

  (deliver-chunks [this]
    (some-> @next (w/process-audio (u/<< chunks))))

  (reset-chunks [this n-channels]
    (let [empty-chunks (into-array (repeat n-channels #js []))]
      (u/areset! chunks empty-chunks))))

(defn chunker
  [{:keys [samples-per-chunk]
    :or {samples-per-chunk 4410}}]
  (map->Chunker {:samples-per-chunk samples-per-chunk
                 :next              (atom nil)
                 :chunks            (u/aatom #js [])}))
