(ns audio-utils.gate
  (:require [audio-utils.ring-buffer :as rb]
            [audio-utils.rms-buffer :as rms]
            [audio-utils.util :refer [aatom aderef areset! aswap!
                                      db->amplitude time->samples]]))

(defprotocol IGate
  (connect-source [this source])
  (connect-destination [this destination])
  (disconnect [this]))

;;sample-rate        (.-sampleRate ctx)
;;threshold'         (db->amplitude threshold)
;;rms-samples        (max 1 (time->samples rms-window sample-rate))
;;rms-buffers        (aatom [])
;;hold-samples       (time->samples hold sample-rate)
;;look-ahead-samples (max 1 (time->samples look-ahead sample-rate))
;;look-ahead-buffer  (rb/ring-buffer look-ahead-samples)

(defrecord Gate [config node rms-buffers]
  IGate
  (connect-source [this source]
    (let [sample-rate (.-sampleRate (:ctx config))
          rms-window  (:rms-window config)
          rms-samples (max 1 (time->samples rms-window sample-rate))]
      (areset! rms-buffers
               (into [] (repeat (.-channelCount source)
                                (rms/rms-buffer rms-samples)))))
    (.connect source node))

  (connect-destination [this destination]
    (.connect node destination))

  (disconnect [this]
    (.disconnect node))

  Object
  (generate-output-sample [this channel sample]
    sample)

  (process-audio [this event]
    (let [input-buffer  (.-inputBuffer event)
          output-buffer (.-outputBuffer event)
          n-channels    (.-numberOfChannels output-buffer)]
      (dotimes [channel n-channels]
        (let [input-data  (.. input-buffer  (getChannelData channel))
              output-data (.. output-buffer (getChannelData channel))]
          (dotimes [n (.-length input-data)]
            (let [input-sample  (aget input-data n)
                  output-sample (.generate-output-sample this channel
                                                         input-sample)]
              (aset output-data n output-sample))))))))

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
  (let [node   (.createScriptProcessor ctx buffer-size 1 1)
        config {:ctx        ctx
                :threshold  threshold
                :look-ahead look-ahead
                :hold       hold
                :rms-window rms-window
                :trigger    trigger}
        gate   (map->Gate {:config      config
                           :node        node
                           :rms-buffers (aatom [])})]
    (set! (.-onaudioprocess node)
          #(.process-audio gate %))
    gate))
