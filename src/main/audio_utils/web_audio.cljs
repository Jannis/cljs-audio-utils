(ns audio-utils.web-audio)

(defn audio-context []
  (let [constructor (or js/window.AudioContext
                        js/window.webkitAudioContext)]
    (constructor.)))

(defn user-media
  [constraints success-fn error-fn]
  (.webkitGetUserMedia js/navigator
                       (clj->js constraints)
                       success-fn
                       error-fn))

(defn create-buffer
  ([ctx n-channels size sample-rate]
   (.createBuffer ctx n-channels size sample-rate)))

(defn create-buffer-from-data
  [ctx n-channels sample-rate data]
  (let [buf (create-buffer ctx n-channels
                           (count (cond-> data
                                    (> n-channels 1)
                                    first))
                           sample-rate)]
    (doseq [channel (range 0 n-channels)
            :let [channel-data (.getChannelData buf channel)
                  input-data   (cond-> data
                                 (> n-channels 1)
                                 (get channel))]]
      (doseq [[i x] (map-indexed vector input-data)]
        (aset channel-data i x)))
    buf))

(defn create-buffer-source
  ([ctx]
   (.createBufferSource ctx))
  ([ctx n-channels sample-rate data]
   (doto (create-buffer-source ctx)
     (aset "buffer"
           (create-buffer-from-data ctx n-channels
                                    sample-rate data)))))
