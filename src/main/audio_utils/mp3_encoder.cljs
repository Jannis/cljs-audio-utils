(ns audio-utils.mp3-encoder
  (:require [cljsjs.lamejs]
            [audio-utils.worker :as w]))

(defrecord MP3Encoder [bit-rate sample-rate next]
  w/IWorkerAudioNode
  (connect [this destination]
    (reset! next destination))

  (disconnect [this]
    (reset! next nil))

  (process-audio [this data]
    (js/console.log "MP3 ENCODER PROCESS AUDIO"
                    data
                    (type data)
                    (count data)
                    (type (data 0))
                    (count (data 0)))
    (let [encoder (js/lamejs.Mp3Encoder. 1 sample-rate bit-rate)
          samples (mapv (fn [channel-data]
                          (js/Float32Array. (into-array channel-data)))
                        data)
          encoded #js []]
      (js/console.log "SAMPLES" samples (samples 0))
      (doto encoded
        (.push (.encodeBuffer encoder (samples 0)))
        (.push (.flush encoder)))
      (some-> @next (w/process-audio encoded)))))

(defn mp3-encoder
  [{:keys [bit-rate
           sample-rate]
    :or   {bit-rate    128
           sample-rate 44100}}]
  (map->MP3Encoder {:bit-rate    bit-rate
                    :sample-rate sample-rate
                    :next        (atom nil)}))
