(ns audio-utils.devcards.mp3-encoder
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! timeout]]
            [devcards.core :refer-macros [defcard defcard-doc]]
            [sablono.core :refer-macros [html]]
            [audio-utils.web-audio :as a]
            [audio-utils.worker :as w]))

(defn mp3-blob
  [data]
  (js/Blob. data #js {:type "audio/mp3"}))

(defn play-file
  [data]
  (letfn [(play-audio [ctx buffer]
            (js/console.log "BLOB DECODED, PLAY AUDIO" "\n"
                            "length" (.-length buffer) "\n"
                            "duration" (.-duration buffer) "\n"
                            "channels" (.-numberOfChannels buffer) "\n"
                            "sample rate" (.-sampleRate buffer) "\n"
                            "channel 0" (.getChannelData buffer 0))
            (let [source (a/create-buffer-source ctx)]
              (doto source
                (aset "buffer" buffer)
                (aset "onended"
                      (fn []
                        (js/console.log "PLAY AUDIO ENDED")
                        (.disconnect source)
                        (.close ctx)))
                (.connect (.-destination ctx))
                (.start))))
          (log-error [err]
            (js/console.warn "ERROR" err))]
    (let [ctx  (a/audio-context)
          blob (mp3-blob data)]
      (doto (js/FileReader.)
        (aset "onload"
              (fn []
                (js/console.log "BLOB LOADED")
                (this-as this
                  (let [array-buffer (.-result this)]
                    (.decodeAudioData ctx array-buffer
                                      (partial play-audio ctx)
                                      log-error)))))
        (.readAsArrayBuffer blob)))))

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
             (str "Play file " i)])))]))

(defn run-test
  [state]
  (swap! state assoc :processing? true)
  (let [{:keys [source worker samples-per-mp3]} @state]
    (letfn [(encode-audio-data [ctx buffer]
              (js/console.log "ENCODE AUDIO DATA" ctx buffer)
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
                                worker (fn [mp3]
                                         (js/console.log "MP3"
                                                         (count @mp3s)
                                                         mp3)
                                         (swap! mp3s conj mp3)))
                    dest       (.createMediaStreamDestination ctx)]
                (.connect source entry-node)
                (.connect entry-node (.-destination ctx))
                (set! (.-onended source)
                      (fn [e]
                        (js/console.log "ENDED")
                        (.disconnect source)
                        (.disconnect dest)
                        (go
                          (<! (timeout 5000))
                          (js/console.log "TERMINATE")
                          (.disconnect entry-node)
                          (.terminate worker)
                          (.close ctx)
                          (swap! state assoc
                                 :processing? false
                                 :finished?   true
                                 :mp3s        @mp3s))))
                (.start source 0 0 20.0)))
            (log-error [ctx err]
              (js/console.warn "ERROR" ctx err)
              (js/alert err)
              (swap! state assoc
                     :processing? false
                     :finished    true)
              (.close ctx))
            (load-file [data]
              (js/console.log "LOAD FILE" data)
              (let [ctx (a/audio-context)]
                (doto ctx
                  (.decodeAudioData data
                                    (partial encode-audio-data ctx)
                                    (partial log-error ctx)))))]
      (let [req (js/XMLHttpRequest.)]
        (doto req
          (.open "GET" (str "/" source) true)
          (aset "responseType" "arraybuffer")
          (aset "onload" #(load-file (.-response req)))
          (.send))))))

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
  ""
  (fn [state owner]
    (encoder-test state))
  {:worker "mp3-encoder-1.js"
   :source "public/viper.ogg"})
