(ns audio-utils.web-audio)

(defn audio-context []
  (or (new js/window.AudioContext)
      (new js/window.webkitAudioContext)))

(defn create-buffer
  [ctx n-channels size sample-rate]
  (.createBuffer ctx n-channels size sample-rate))

(defn create-buffer-source
  ([ctx]
   (.createBufferSource ctx))
  ([ctx n-channels sample-rate data]
   (let [buf (create-buffer ctx n-channels
                            (count (cond-> data
                                     (> n-channels 1)
                                     first))
                            sample-rate)
         src (create-buffer-source ctx)]
     (doseq [channel (range 0 n-channels)
             :let [channel-data (.getChannelData buf channel)
                   input-data   (cond-> data
                                  (> n-channels 1)
                                  (get channel))]]
       (doseq [[i x] (map-indexed vector input-data)]
         (aset channel-data i x)))
     (set! (.-buffer src) buf)
     src)))
