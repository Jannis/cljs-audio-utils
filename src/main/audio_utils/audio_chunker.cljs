(ns audio-utils.audio-chunker
  (:refer-clojure :exclude [flush])
  (:require [audio-utils.util :as util]))

(defprotocol IAudioChunker
  (connect-source [this source])
  (connect-destination [this destination])
  (disconnect [this])
  (flush [this]))

(defrecord AudioChunker [config node buffers]
  IAudioChunker
  (connect-source [this source]
    (.connect source node))

  (connect-destination [this destination]
    (.connect node destination))

  (disconnect [this]
    (.disconnect node))

  (flush [this]
    (doseq [[channel data] (map-indexed vector (util/aderef buffers))]
      (if (> (.-length data) 0)
        (.deliver-chunk this channel data))))

  Object
  (deliver-chunk [this channel data]
    (when (:on-chunk-ready config)
      ((:on-chunk-ready config) channel (js->clj data))))

  (process-sample [this channel sample]
    (let [buffer (doto (get (util/aderef buffers) channel)
                   (.push sample))]
      (when (>= (.-length buffer) (:samples config))
        (do
          (.deliver-chunk this channel buffer)
          (util/aswap! buffers assoc channel #js []))
        (util/aswap! buffers assoc channel #js []))))

  (process-audio [this event]
    (let [input-buffer  (.-inputBuffer event)
          output-buffer (.-outputBuffer event)
          n-channels    (.-numberOfChannels output-buffer)]
      (doseq [channel (range 0 n-channels)]
        (let [input-data  (.getChannelData input-buffer channel)
              output-data (.getChannelData output-buffer channel)]
          (doseq [sample (range 0 (.-length input-buffer))
                  :let [sample-val (aget input-data sample)]]
            (aset output-data sample sample-val)
            (.process-sample this channel sample-val)))))))

(defn audio-chunker
  [{:keys [ctx
           buffer-size
           samples
           on-chunk-ready]
    :or   {buffer-size 4096
           samples     4410}}]
  (let [node    (.createScriptProcessor ctx buffer-size 1 1)
        config  {:ctx            ctx
                 :samples        samples
                 :on-chunk-ready on-chunk-ready}
        chunker (map->AudioChunker {:config  config
                                    :node    node
                                    :buffers (util/aatom [#js []
                                                          #js []])})]
    (set! (.-onaudioprocess node)
          #(.process-audio chunker %))
    chunker))
