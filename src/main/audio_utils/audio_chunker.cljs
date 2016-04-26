(ns audio-utils.audio-chunker
  (:refer-clojure :exclude [flush]))

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
    (doseq [[channel data] (map-indexed vector @buffers)]
      (if (> (.-length data) 0)
        (.deliver-chunk this channel data))))

  Object
  (deliver-chunk [this channel data]
    (js/console.log "deliver chunk" this channel data)
    (when (:on-chunk-ready config)
      ((:on-chunk-ready config) channel (js->clj data))))

  (process-sample [this channel sample]
    (let [buffer (doto (get @buffers channel)
                   (.push sample))]
      (when (>= (.-length buffer) (:samples config))
        (do
          (.deliver-chunk this channel buffer)
          (swap! buffers assoc channel #js []))
        (swap! buffers assoc channel #js []))))

  (process-audio [this event]
    (let [input-buffer  (.-inputBuffer event)
          output-buffer (.-outputBuffer event)
          n-channels    (.-numberOfChannels output-buffer)]
      (doseq [channel (range 0 n-channels)]
        (let [input-data  (.getChannelData input-buffer channel)
              output-data (.getChannelData output-buffer channel)]
          (js/console.log "in" input-data)
          (doseq [sample (range 0 (.-length input-buffer))
                  :let [sample-val (aget input-data sample)]]
            (aset output-data sample sample-val)
            (.process-sample this channel sample-val)))))))

(defn audio-chunker
  [{:keys [ctx samples on-chunk-ready] :as config}]
  (let [node    (.createScriptProcessor ctx 4096)
        chunker (map->AudioChunker {:config  config
                                    :node    node
                                    :buffers (atom [#js []
                                                    #js []])})]
    (set! (.-onaudioprocess node)
          #(.process-audio chunker %))
    chunker))
