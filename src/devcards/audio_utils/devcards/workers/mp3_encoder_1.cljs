(ns audio-utils.devcards.workers.mp3-encoder-1
  (:require [audio-utils.chunker :as c]
            [audio-utils.mp3-encoder :as e]
            [audio-utils.worker :as w]))

(defn init []
  (let [entry-node (w/worker-entry-node)
        chunker    (c/chunker {:samples-per-chunk 220500})
        encoder    (e/mp3-encoder {:bit-rate    160
                                   :sample-rate 44100})
        exit-node  (w/worker-exit-node)]
    (w/connect entry-node chunker)
    (w/connect chunker encoder)
    (w/connect encoder exit-node)))
