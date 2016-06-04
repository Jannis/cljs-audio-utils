(ns audio-utils.devcards.mp3-encoder
  (:refer-clojure :exclude [load-file])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! timeout]]
            [devcards.core :refer-macros [defcard defcard-doc]]
            [sablono.core :refer-macros [html]]
            [audio-utils.util :refer [amplify]]
            [audio-utils.viz :refer [sine-wave]]
            [audio-utils.web-audio :as a]
            [audio-utils.worker :as w]))

(defn mp3-blob
  [data]
  (js/Blob. data #js {:type "audio/mp3"}))

(defn play-audio
  [ctx buffer]
  (js/console.log "PLAY AUDIO BUFFER" "\n"
                  "length" (.-length buffer))
  (let [source (a/create-buffer-source ctx)]
    (doto source
      (aset "buffer" buffer)
      (aset "onended"
            (fn []
              (.disconnect source)
              (.close ctx)))
      (.connect (.-destination ctx))
      (.start))))

(defn load-file
  [file ready-fn]
  (doto (js/FileReader.)
    (aset "onload" #(this-as this (ready-fn (.-result this))))
    (.readAsArrayBuffer file)))

(defn decode-buffer
  [ctx buffer ready-fn error-fn]
  (js/console.log "DECODE BUFFER" buffer)
  (.decodeAudioData ctx buffer ready-fn error-fn))

(defn play-file
  [data]
  (let [ctx       (a/audio-context)
        blob      (mp3-blob data)
        play      (fn [buffer] (play-audio ctx buffer))
        error     (fn [err] (js/console.warn "ERROR" err))]
    (load-file blob #(decode-buffer ctx % play error))))

(defn load-files
  [ctx files ready-fn]
  (js/console.log "LOAD FILES" files)
  (let [buffers (volatile! (vector (repeat (count files) nil)))]
    (doseq [[n file] (map-indexed vector files)]
      (load-file (mp3-blob file)
                 (fn [buffer]
                   (decode-buffer ctx buffer
                                  (fn [buffer]
                                    (vswap! buffers assoc n buffer)
                                    (js/console.log "BUFFER DECODED"
                                                    (type buffer)
                                                    (count files)
                                                    (count @buffers))
                                    (when (= (count files)
                                             (count @buffers))
                                      (ready-fn @buffers)))
                                  (fn [error]
                                    (js/console.error error))))))))

(defn concat-buffers
  [ctx buffers]
  (let [total-length (transduce (map #(.-length %)) + 0 buffers)
        n-channels   (.-numberOfChannels (first buffers))
        buffer       (a/create-buffer ctx n-channels total-length
                                      (.-sampleRate ctx))]
    (reduce (fn [length-so-far buf]
              (doseq [channel (range 0 (.-numberOfChannels buffer))]
                (let [in-chan  (.getChannelData buf channel)
                      out-chan (.getChannelData buffer channel)]
                  (doseq [n (range 0 (.-length in-chan))]
                    (aset out-chan (+ length-so-far n)
                          (aget in-chan n)))))
              (+ length-so-far (.-length buf)))
            0 buffers)
    buffer))

(defn play-files
  [files]
  (js/console.log "PLAY FILES" files)
  (let [ctx (a/audio-context)]
    (load-files ctx files
                (fn [buffers]
                  (js/console.log "BUFFERS LOADED" buffers)
                  (let [combined-buffer (concat-buffers ctx buffers)]
                    (js/console.log "COMBINED BUFFER" combined-buffer)
                    (play-audio ctx combined-buffer))))))

(defn plot-files
  [files]
  (html
   `[:div
     ~@(for [[i file] (map-indexed vector files)]
         (do
           (js/console.log "FILE" file (type file))
           (let [id (str "audio-file-" i)]
             [:button
              {:key      id
               :on-click #(play-file file)}
              (str "Play file " i)])))
     [:button ~{:key      "files"
                :on-click #(play-files files)}
      "Play concatenated"]]))

(defn run-test
  [state]
  (swap! state assoc :processing? true)
  (let [{:keys [data-fn source worker samples-per-mp3]} @state]
    (letfn [(encode-audio-data [ctx buffer]
              (let [n-channels (.-numberOfChannels buffer)
                    source     (doto (a/create-buffer-source ctx)
                                 (aset "buffer" buffer))
                    worker     (new js/Worker worker)
                    config     {:buffer-size     16384
                                :input-channels  n-channels
                                :output-channels n-channels}
                    entry-node (w/main-entry-node worker ctx config)
                    mp3s       (atom [])
                    exit-node  (w/main-exit-node
                                worker (fn [mp3] (swap! mp3s conj mp3)))
                    dest       (.createMediaStreamDestination ctx)]
                (.connect source entry-node)
                (.connect entry-node (.-destination ctx))
                (set! (.-onended source)
                      (fn [e]
                        (.disconnect source)
                        (.disconnect dest)
                        (go
                          (<! (timeout 10000))
                          (.disconnect entry-node)
                          (.terminate worker)
                          (.close ctx)
                          (swap! state assoc
                                 :processing? false
                                 :finished?   true
                                 :mp3s        @mp3s))))
                (.start source 0 0 40.0)))
            (log-error [ctx err]
              (js/console.warn "ERROR" ctx err)
              (js/alert err)
              (swap! state assoc
                     :processing? false
                     :finished    true)
              (.close ctx))
            (load-file [data]
              (let [ctx (a/audio-context)]
                (doto ctx
                  (.decodeAudioData data
                                    (partial encode-audio-data ctx)
                                    (partial log-error ctx)))))
            (load-data []
              (let [ctx         (a/audio-context)
                    sample-rate (.-sampleRate ctx)
                    data        (data-fn sample-rate)
                    buf         (a/create-buffer-from-data ctx 1
                                                           sample-rate
                                                           data)]
                (encode-audio-data ctx buf)))]
      (cond
        source  (let [req (js/XMLHttpRequest.)]
                  (doto req
                    (.open "GET" (str "/" source) true)
                    (aset "responseType" "arraybuffer")
                    (aset "onload" #(load-file (.-response req)))
                    (.send)))
        data-fn (load-data)))))

(defn encoder-test
  [state]
  (let [{:keys [finished?
                mp3s
                processing?]} @state]
    (cond
      finished?   (plot-files mp3s)
      processing? (html [:p "Processing..."])
      :else       (html [:button {:on-click #(run-test state)}
                         "Run test"]))))

(defcard
  "An OGG played back, chunked and encoded into 5s long MP3s with
   a 160kb/s bit rate and a sample rate of 44100. The concatenated
   result shows notable audio glitches where the MP3s are stitched
   together, likely resulting from encoding and decoding slightly
   altering the waveforms."
  (fn [state owner]
    (encoder-test state))
  {:worker "mp3-encoder-1.js"
   :source "public/viper.ogg"})

(defcard
  "A 1000Hz sine wave, played back at -30dB for 2 seconds, -3dB for
   2 seconds, -30dB for 2 seconds, -6dB for 2 seconds and -30dB for
   2 seconds. It is processed using a gate (threshold -16dB, look-ahead
   500ms, hold time 1000ms, RMS window 100ms) and is chunked using a
   triggered chunker controlled by the gate. The result are two MP3s
   for the -3dB and -6dB periods, with a 500ms and 1000ms of the quieter
   audio signal at the beginning and end, respectively."
  (fn [state owner]
    (encoder-test state))
  {:worker "mp3-encoder-2.js"
   :data-fn
   (fn [sample-rate]
     (let [sines (sine-wave 1000 sample-rate 441000)]
       (into []
             (concat (amplify (take 88200 sines) -30)
                     (amplify (take 88200 sines) -3)
                     (amplify (take 88200 sines) -30)
                     (amplify (take 88200 sines) -6)
                     (amplify (take 88200 sines) -30)))))})
