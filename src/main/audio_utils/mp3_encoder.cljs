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
    (let [encoder (js/lamejs.Mp3Encoder. (count data) sample-rate
                                         bit-rate)
          samples (into-array (map into-array data))
          encoded (.encodeBuffer encoder samples)]
      (some-> @next (w/process-audio (js->clj encoded))))))

(defn mp3-encoder
  [{:keys [bit-rate
           sample-rate]
    :or   {bit-rate    128
           sample-rate 44100}}]
  (map->MP3Encoder {:bit-rate    bit-rate
                    :sample-rate sample-rate
                    :next        (atom nil)}))
