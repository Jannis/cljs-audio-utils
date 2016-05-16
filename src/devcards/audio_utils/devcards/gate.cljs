(ns audio-utils.devcards.gate
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! timeout]]
            [devcards.core :refer-macros [defcard
                                          defcard-doc
                                          deftest
                                          dom-node]]
            [goog.string :as gstring]
            [goog.string.format]
            [sablono.core :refer-macros [html]]
            [audio-utils.gate :as g]
            [audio-utils.util :refer [amplify
                                      db->amplitude]]
            [audio-utils.viz :refer [linear-distribution
                                     plot-buffers
                                     sine-wave]]
            [audio-utils.web-audio :as a]
            [audio-utils.worker :as w]))

(defn run-test
  [state]
  (swap! state assoc :processing? true)
  (let [ctx         (a/audio-context)
        sample-rate (.-sampleRate ctx)
        input-data  ((:data-fn @state) sample-rate)
        source      (a/create-buffer-source ctx 1 sample-rate
                                            input-data)
        worker      (new js/Worker (:worker @state))
        entry-node  (w/main-entry-node worker ctx
                                       {:buffer-size     2048
                                        :input-channels  1
                                        :output-channels 1})
        output-data (volatile! [])
        exit-node   (w/main-exit-node worker
                                      (fn [channel-data]
                                        (vswap! output-data concat
                                                (first channel-data))))
        dest        (.createMediaStreamDestination ctx)]
    (.connect source entry-node)
    (.connect entry-node dest)
    (set! (.-onended source)
          (fn [e]
            (.disconnect source)
            (.disconnect dest)
            (go
              (<! (timeout 5000))
              (.disconnect entry-node)
              (.terminate worker)
              (.close ctx)
              (swap! state assoc
                     :processing? false
                     :finished?   true
                     :sample-rate sample-rate
                     :input-data  input-data
                     :output-data @output-data))))
    (.start source)))

(defn gate-test
  [state]
  (let [{:keys [processing?
                finished?
                sample-rate
                input-data
                output-data]} @state]
    (cond
      finished?   (plot-buffers (count input-data) 5000
                                (gstring/format "Input (%d samples)"
                                                (count input-data))
                                input-data
                                (gstring/format "Output (%d samples)"
                                                (count output-data))
                                output-data)
      processing? (html [:p "Processing..."])
      :else       (html [:button {:on-click #(run-test state)}
                         "Run test"]))))

;;;; Peak level detection

(defcard-doc
  "## Peak level detection (no RMS)")

(defcard
  "A look-ahead gate, fed with a stream of 11025 samples at -20dB,
   1000 samples at -10dB, and 21050 samples at -11dB. The gate
   parameters are: threshold -16dB, look-ahead 0ms (disabled),
   hold 0ms (disabled), RMS window 0ms (disabled).

   With the RMS window being set to 0ms, the gate effectively uses
   peak level detection. The output plot demonstrates that the gate
   opens immediately as the input amplitude passes the threshold.
   While this is fine for artificial input signals like the one
   used in this example, it adds significant distortion to real-world
   signals, as demonstrated by the next example."
  (fn [state owner]
    (gate-test state))
  {:worker  "gate-1.js"
   :data-fn (fn [sample-rate]
              (into []
                    (concat (repeat (/ 11025 2) (db->amplitude -20))
                            (repeat 1000 (db->amplitude -10))
                            (repeat (/ 21050 2) (db->amplitude -11)))))})

(defcard
  "A look-ahead gate, fed with a stream of 11025 samples of a -20dB
   sine wave, 1000 samples of a sine wave at -10dB and 21050 samples
   of a sine wave at -11dB. The gate parameters are: threshold -16dB,
   look-ahead 0ms (disabled), hold 0ms (disabled), RMS window 0ms
   (disabled).

   This example illustrates how the input signal is significantly
   distorted with the gate responding to individual sample amplitudes
   due to peak level detection."
  (fn [state owner]
    (gate-test state))
  {:worker  "gate-1.js"
   :data-fn
   (fn [sample-rate]
     (let [sines (sine-wave 20 sample-rate 33075)]
       (into []
             (concat (amplify (take 11025 sines) -20)
                     (amplify (take 1000 (drop 11025 sines)) -10)
                     (amplify (drop 12025 sines) -11)))))})

(defcard-doc
  "## RMS level detection")

(defcard
  "A look-ahead gate, fed with a stream of 11025 samples of -20dB
   sine wave, 1000 samples of a sine wave at -10dB and 21050 samples
   of a sine wave at -11dB. The gate parameters are: threshold -16dB,
   look-ahead 0ms (disabled), hold 0ms (disabled), RMS window 100ms.

   Due to the RMS based level detection, the gate now opens with a
   delay. As long as the RMS level is below the threshold, samples are
   dropped, even if they are above the threshold. This can be seen by
   the beginning of the -10dB period being cut off. With artificial
   signals like this one, this appears worse. However, the next example
   demonstrates how RMS based level detection prevents distortion."
  (fn [state owner]
    (gate-test state))
  {:worker  "gate-2.js"
   :data-fn
   (fn [sample-rate]
     (into []
           (concat (repeat (/ 11025 2) (db->amplitude -20))
                   (repeat 1000 (db->amplitude -10))
                   (repeat (/ 21050 2) (db->amplitude -11)))))})

(defcard
  "A look-ahead gate, fed with a stream of 11025 samples of -20dB
   sine wave, 1000 samples of a sine wave at -10dB and 21050 samples
   of a sine wave at -11dB. The gate parameters are: threshold -16dB,
   look-ahead 0ms (disabled), hold 0ms (disabled), RMS window 100ms.

   Due to the RMS based level detection, the gate now opens with a
   delay. As long as the RMS level is below the threshold, samples are
   dropped, even if they are above the threshold. However, unlike with
   peak level detection, the input signal is no longer distorted when
   processed by the gate.

   What is missing to avoid cutting off the beginning of the -10dB
   and -11dB periods is the look-ahead feature."
  (fn [state owner]
    (gate-test state))
  {:worker  "gate-2.js"
   :data-fn
   (fn [sample-rate]
     (let [sines (sine-wave 20 sample-rate 33075)]
       (into []
             (concat (amplify (take 11025 sines) -20)
                     (amplify (take 1000 (drop 11025 sines)) -10)
                     (amplify (drop 12025 sines) -11)))))})

(defcard-doc
  "## RMS with look-ahead")

(defcard
  "A look-ahead gate, fed with a stream of 11025 samples at -20dB,
   1000 samples at -10dB, and 21050 samples at -11dB. The gate
   parameters are: threshold -16dB, look-ahead 0ms (disabled),
   hold 0ms (disabled), RMS window 0ms (disabled).

   Compared to the example without look-ahead, this configuration
   clearly shows how the rise in volume is captured instead of being
   cut off. A minor trade-off that becomes apparent at the same time
   is that a small window of samples below the threshold also makes
   it through the gate."
  (fn [state owner]
    (gate-test state))
  {:worker  "gate-3.js"
   :data-fn
   (fn [sample-rate]
     (into []
           (concat (repeat (/ 11025 2) (db->amplitude -20))
                   (repeat 1000 (db->amplitude -10))
                   (repeat (/ 21050 2) (db->amplitude -11)))))})

(defcard
  "A look-ahead gate, fed with a stream of 11025 samples of a -20dB
   sine wave, 1000 samples of a -10dB sine wave and 21050 samples
   of a -11dB sine wave. The gate parameters are: threshold -16dB,
   look-ahead 100ms, hold 0ms (disabled), RMS window 100ms.

   Compared to the example without look-ahead, this configuration
   clearly shows how the rise in volume is captured instead of being
   cut off. A minor trade-off that becomes apparent at the same time
   is that a small window of samples below the threshold also makes
   it through the gate."
  (fn [state owner]
    (gate-test state))
  {:worker  "gate-3.js"
   :data-fn
   (fn [sample-rate]
     (let [sines (sine-wave 20 sample-rate 33075)]
       (into []
             (concat (amplify (take 11025 sines) -20)
                     (amplify (take 1000 (drop 11025 sines)) -10)
                     (amplify (drop 12025 sines) -11)))))})

(defcard-doc
  "## No hold time")

(defcard
  "A look-ahead gate, fed with a stream of 11025 samples at -20dB,
   1000 samples at -10dB, and 21050 samples at -11dB. The gate
   parameters are: threshold -16dB, look-ahead 0ms (disabled),
   hold 0ms (disabled), RMS window 0ms (disabled).

   With this configuration, the gate closes as soon as the level
   drops below the threshold of -16dB."
  (fn [state owner]
    (gate-test state))
  {:worker  "gate-4.js"
   :data-fn
   (fn [sample-rate]
     (into []
           (concat (repeat (/ 11025 2) (db->amplitude -10))
                   (repeat (/ 22050 2) (db->amplitude -20)))))})

(defcard
  "A look-ahead gate, fed with a stream of 11025 samples of a -20dB
   sine wave, 1000 samples of a -10dB sine wave and 21050 samples
   of a -11dB sine wave. The gate parameters are: threshold -16dB,
   look-ahead 0ms (disabled), hold 0ms (disabled), RMS window 100ms.

   With this configuration, the gate closes as soon as the sine
   wave's RMS level drops below the threshold."
  (fn [state owner]
    (gate-test state))
  {:worker  "gate-5.js"
   :data-fn
   (fn [sample-rate]
     (let [sines (sine-wave 20 sample-rate 33075)]
       (into []
             (concat (amplify (take 11025 sines) -10)
                     (amplify (drop 22025 sines) -20)))))})

(defcard-doc
  "## Hold time")

(defcard
  "A look-ahead gate, fed with a stream of 11025 samples at -20dB,
   1000 samples at -10dB, and 21050 samples at -11dB. The gate
   parameters are: threshold -16dB, look-ahead 0ms (disabled),
   hold 100ms, RMS window 0ms (disabled).

   Compared to the previous examples with the hold time disabled,
   this configuration demonstrates how the gate remains open for
   100ms (4410 samples) after the input level has dropped below the
   threshold."
  (fn [state owner]
    (gate-test state))
  {:worker  "gate-6.js"
   :data-fn
   (fn [sample-rate]
     (into []
           (concat (repeat (/ 11025 2) (db->amplitude -10))
                   (repeat (/ 22050 2) (db->amplitude -20)))))})

(defcard
  "A look-ahead gate, fed with a stream of 11025 samples of a -20dB
   sine wave, 1000 samples of a -10dB sine wave and 21050 samples
   of a -11dB sine wave. The gate parameters are: threshold -16dB,
   look-ahead 0ms (disabled), hold 100ms, RMS window 100ms.

   Compared to the previous examples with the hold time disabled,
   this configuration demonstrates how the gate remains open for
   100ms (4410 samples) after the RMS level of the sine wave has
   dropped below the threshold."
  (fn [state owner]
    (gate-test state))
  {:worker  "gate-7.js"
   :data-fn
   (fn [sample-rate]
     (let [sines (sine-wave 20 sample-rate 33075)]
       (into []
             (concat (amplify (take 11025 sines) -10)
                     (amplify (drop 22025 sines) -20)))))})
