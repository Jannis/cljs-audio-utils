(ns audio-utils.worker)

;;;; General interface for audio processing nodes in web workers

(defprotocol IWorkerAudioNode
  (connect [this destination])
  (disconnect [this])
  (process-audio [this data]))

(defn caller-entry-node
  "Creates a ScriptProcessorNode in the main UI thread that forwards
   audio to a worker by posting a :process-audio message to it whenever
   there is new audio to be processed."
  [worker ctx {:keys [buffer-size input-channels output-channels]}]
  (doto (.createScriptProcessor ctx buffer-size
                                input-channels
                                output-channels)
    (set "onaudioprocess"
         (fn [event]
           (let [input-buffer (.-inputBuffer event)
                 n-channels   (.-numberOfChannels input-buffer)
                 data         (make-array n-channels)]
             (dotimes [channel n-channels]
               (aset data channel (.getChannelData input-buffer channel)))
             (.postMessage worker #js {:name :process-audio
                                       :data data}))))))

(defn worker-entry-node
  "Creates an IWorkerAudioNode in a worker that receives its audio
   data from the main UI thread via a :process-audio message. It then
   forwards the audio to the next IWorkerAudioNode if there is one."
  []
  (let [next (atom nil)
        node (reify IWorkerAudioNode
               (connect [this destination]
                 (reset! next destination))
               (disconnect [this]
                 (reset! next nil))
               (process-audio [this data]
                 (when next
                   (process-audio next data))))]
    (set! (.-onmessage js/this)
          (fn [msg]
            (let [{:keys [name data]} (js->clj (.-data msg))]
              (when (= name :process-audio)
                (process-audio node data)))))
    node))

(defn worker-encoded-exit-node
  "Creates an IWorkerAudioNode that takes encoded (!) audio data from
   a previous IWorkerAudioNode and forwards it to the main UI thread
   via a :process-encoded-data message."
  []
  (reify IWorkerAudioNode
    (connect [this destination])
    (disconnect [this])
    (process-audio [this data]
      (.postMessage js/this #js {:name :process-encoded-data
                                 :data data}))))

(defn caller-encoded-exit-node
  [worker encoded-data-fn]
  (set! (.-onmessage worker)
        (fn [msg]
          (let [{:keys [name data]} (js->clj msg)]
            (when (= name :process-encoded-data)
              (when encoded-data-fn
                (encoded-data-fn data)))))))
