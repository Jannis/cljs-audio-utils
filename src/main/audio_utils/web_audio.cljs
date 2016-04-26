(ns audio-utils.web-audio)

(defn audio-context []
  (or (new js/window.AudioContext)
      (new js/window.webkitAudioContext)))
