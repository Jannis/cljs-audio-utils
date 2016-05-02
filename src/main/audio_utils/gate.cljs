(ns audio-utils.gate
  (:require [audio-utils.ring-buffer :as rb]
            [audio-utils.rms-buffer :as rms]
            [audio-utils.util :refer [aatom aderef areset! aswap!
                                      db->amplitude time->samples]]
            [audio-utils.worker :as w]))

;;sample-rate        (.-sampleRate ctx)
;;threshold'         (db->amplitude threshold)
;;rms-samples        (max 1 (time->samples rms-window sample-rate))
;;rms-buffers        (aatom [])
;;hold-samples       (time->samples hold sample-rate)
;;look-ahead-samples (max 1 (time->samples look-ahead sample-rate))
;;look-ahead-buffer  (rb/ring-buffer look-ahead-samples)

;;(let [sample-rate (.-sampleRate (:ctx config))
;;      rms-window  (:rms-window config)
;;      rms-samples (max 1 (time->samples rms-window sample-rate))]
;;  (areset! rms-buffers
;;           (into [] (repeat (.-channelCount source)
;;                            (rms/rms-buffer rms-samples)))))

(defprotocol IGate
  (generate-output-sample [this channel input-sample]))

(defrecord Gate [config next rms-buffers]
  w/IWorkerAudioNode
  (connect [this destination]
    (reset! next destination))

  (disconnect [this]
    (reset! next nil))

  (process-audio [this data]
    (let [n-samples  (count (first data))
          n-channels (count data)
          output     (volatile! (into [] (repeat n-channels [])))]
      (dotimes [n n-samples]
        (dotimes [channel n-channels]
          (let [input-sample  ((data channel) n)
                output-sample (generate-output-sample this channel
                                                      input-sample)]
            (vswap! output update channel conj output-sample))))
      (some-> @next (w/process-audio @output))))

  IGate
  (generate-output-sample [this channel input-sample]
    (if (>= (Math/abs input-sample)
            (db->amplitude (:threshold config)))
      input-sample
      0.0)))

(defn default-trigger
  [gate state])

(defn gate
  [{:keys [ctx
           buffer-size
           threshold
           look-ahead
           hold
           rms-window
           trigger]
    :or   {buffer-size 4096
           threshold   -32.0
           look-ahead  500
           hold        100
           rms-window  100
           trigger     default-trigger}}]
  (let [config {:ctx        ctx
                :threshold  threshold
                :look-ahead look-ahead
                :hold       hold
                :rms-window rms-window
                :trigger    trigger}]
    (map->Gate {:config      config
                :next        (atom nil)
                :rms-buffers (aatom [])})))
