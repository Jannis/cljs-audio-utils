(ns audio-utils.util)

;;;; Pseudo atom based on a JS array

(defn aatom
  [x]
  (to-array [x]))

(defn areset!
  [x v]
  (aset x 0 v))

(defn aswap!
  [x f & args]
  (let [v (aget x 0)]
    (aset x 0 (apply f (into [v] args)))))

(defn aderef
  [x]
  (aget x 0))

;;;; Web audio polyfills

(defn audio-context []
  (let [constructor (or js/window.AudioContext
                        js/window.webkitAudioContext)]
    (constructor.)))

(defn get-user-media
  [constraints cb log]
  (let [media-fn (or js/navigator.getUserMedia
                     js/navigator.webkitGetUserMedia
                     js/navigator.mozGetUserMedia
                     js/navigator.msGetUserMedia)]
    ((.bind media-fn js/navigator) (clj->js constraints) cb log)))

;;;; Time/samples and dB/amplitude conversion

(defn db->amplitude
  "Convert a dB value such as -6.0 to an amplitude value between 0.0
   and 1.0, such as 0.5011872336272722."
  [x]
  (Math/pow 10 (/ x 20)))

(defn amplitude->db
  "Convert an amplitude value between -1.0 and 1.0, such as
   0.5011872336272722, to a dB value like -6.0."
  [x]
  (* 20 (Math/log10 x)))

(defn time->samples
  "Converts a time in milliseconds to the corresponding number of
   samples given a sample rate."
  [x sample-rate]
  (long (* (/ x 1000) sample-rate)))
