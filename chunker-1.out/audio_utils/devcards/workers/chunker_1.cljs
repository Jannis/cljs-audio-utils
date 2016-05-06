(ns audio-utils.devcards.workers.chunker-1
  (:require [audio-utils.chunker :as c]
            [audio-utils.worker :as w]))

(defn init []
  (let [entry-node (w/worker-entry-node)
        chunker    (c/chunker {:samples-per-chunk 4410})
        exit-node  (w/worker-exit-node)]
    (w/connect entry-node chunker)
    (w/connect chunker exit-node)))
