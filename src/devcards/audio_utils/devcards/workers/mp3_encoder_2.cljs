(ns audio-utils.devcards.workers.mp3-encoder-2
  (:require [audio-utils.gate :as g]
            [audio-utils.mp3-encoder :as e]
            [audio-utils.triggered-chunker :as tc]
            [audio-utils.worker :as w]))

(defn init []
  (let [entry-node (w/worker-entry-node)
        chunker    (tc/triggered-chunker)
        gate       (g/gate {:threshold   -16.0
                            :sample-rate 44100
                            :buffer-size 16384
                            :look-ahead  500
                            :hold        1000
                            :rms-window  100
                            :trigger
                            (fn [state]
                              (tc/trigger chunker (= state :open)))})
        encoder    (e/mp3-encoder {:bit-rate    160
                                   :sample-rate 44100})
        exit-node  (w/worker-exit-node)]
    (w/connect entry-node gate)
    (w/connect gate chunker)
    (w/connect chunker encoder)
    (w/connect encoder exit-node)))
