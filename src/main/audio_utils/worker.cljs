(ns audio-utils.worker
  (:require [audio-utils.util :as util]))

;;;; General interface for audio processing nodes in web workers

(defprotocol IWorkerAudioNode
  (connect [this destination])
  (disconnect [this])
  (process-audio [this data]))

(defn main-entry-node
  "Creates a ScriptProcessorNode in the main UI thread that
   forwards audio to a worker by posting a :worker-process-audio
   message to it whenever there is new audio to be processed."
  [worker ctx {:keys [buffer-size input-channels output-channels]
               :or   {buffer-size     4096
                      input-channels  1
                      output-channels 1}}]
  (doto (.createScriptProcessor ctx buffer-size
                                input-channels
                                output-channels)
    (aset "onaudioprocess"
          (fn [event]
            (let [time          (util/now)
                  input-buffer  (.-inputBuffer event)
                  output-buffer (.-outputBuffer event)
                  n-channels    (.-numberOfChannels input-buffer)
                  worker-buffer (.createBuffer ctx n-channels
                                               (.-length input-buffer)
                                               (.-sampleRate ctx))]
              (dotimes [channel n-channels]
                (let [input-data  (.getChannelData input-buffer channel)
                      output-data (.getChannelData output-buffer channel)
                      worker-data (.getChannelData worker-buffer channel)]
                  (dotimes [n (.-length input-data)]
                    (let [sample (aget input-data n)]
                      (aset output-data n sample)
                      (aset worker-data n sample)))))
              (let [data          (->> (range 0 n-channels)
                                       (map #(.getChannelData
                                              worker-buffer %))
                                       (into-array))
                    transferables (->> (array-seq data)
                                       (map #(.-buffer %))
                                       (into-array))
                    msg-data      (doto #js []
                                    (aset "name" "worker-process-audio")
                                    (aset "time" time)
                                    (aset "data" data))]
                (.postMessage worker msg-data transferables)))))))

(defn worker-entry-node
  "Creates an IWorkerAudioNode in a worker that receives its audio
   data from the main UI thread via a :worker-process-audio message.
   It then forwards the audio to the next IWorkerAudioNode if
   there is one."
  []
  (let [next (atom nil)
        node (reify IWorkerAudioNode
               (connect [this destination]
                 (reset! next destination))
               (disconnect [this]
                 (reset! next nil))
               (process-audio [this data]
                 (when @next
                   (process-audio @next data))))]
    (set! (.-onmessage js/self)
          (fn [msg]
            (let [name         (aget (.-data msg) "name")
                  source-time  (aget (.-data msg) "time")
                  data         (aget (.-data msg) "data")
                  clj-data     (mapv #(into [] (array-seq %))
                                     (array-seq data))
                  time         (util/now)]
              (js/console.log "WORKER ENTRY NODE / ONMESSAGE")
              (js/console.log "SOURCE TIME" source-time)
              (js/console.log "TIME" time)
              (js/console.log "LATENCY" (- time source-time))
              (when (= name "worker-process-audio")
                (process-audio node clj-data)))))
    node))

(defn worker-exit-node
  "Creates an IWorkerAudioNode that takes audio data from a previous
   IWorkerAudioNode and forwards it to the main UI thread via a
   :main-process-audio message."
  []
  (reify IWorkerAudioNode
    (connect [this destination])
    (disconnect [this])
    (process-audio [this data]
      (let [convert? (not (array? data))]
        (.postMessage js/self (doto #js []
                                (aset "name" "main-process-audio")
                                (aset "converted?" convert?)
                                (aset "data" (cond-> data
                                               convert?
                                               clj->js))))))))

(defn main-exit-node
  [worker data-fn]
  (set! (.-onmessage worker)
        (fn [msg]
          (let [name       (aget (.-data msg) "name")
                converted? (aget (.-data msg) "converted?")
                data       (aget (.-data msg) "data")]
            (when (= name "main-process-audio")
              (when data-fn
                (data-fn (cond-> data
                           converted?
                           js->clj))))))))
