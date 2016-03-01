(ns audio-utils.gate
  (:require [audio-utils.ring-buffer :as rb]
            [audio-utils.rms-buffer :as rms]
            [audio-utils.util :refer [db->amplitude time->samples]]))

(defprotocol IGate)

(defn default-trigger
  [gate state])

(defn gate
  [{:keys [audio-ctx size threshold look-ahead hold rms-window trigger]
    :or   {size       8192
           threshold  -32.0
           look-ahead 0.5
           hold       0.1
           rms-window 0.1
           trigger    default-trigger}}]
  (let [processor          (.createScriptProcessor audio-ctx size 1 1)
        sample-rate        (.-sampleRate audio-ctx)
        threshold'         (db->amplitude threshold)
        rms-samples        (time->samples rms-window sample-rate)
        hold-samples       (time->samples hold sample-rate)
        look-ahead-samples (time->samples look-ahead sample-rate)
        rms-buffer         (rms/rms-buffer rms-samples)
        look-ahead-buffer  (rb/ring-buffer look-ahead-samples)]
    (specify! processor
      IGate)))
