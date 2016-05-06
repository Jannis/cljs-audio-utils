(ns audio-utils.devcards.workers.gate-5
  (:require [audio-utils.gate :as g]
            [audio-utils.worker :as w]))

(defn init []
  (let [entry-node (w/worker-entry-node)
        gate       (g/gate {:threshold   -16
                            :sample-rate 44100
                            :buffer-size 4096
                            :look-ahead  0
                            :hold        0
                            :rms-window  100})
        exit-node  (w/worker-exit-node)]
    (w/connect entry-node gate)
    (w/connect gate exit-node)))
