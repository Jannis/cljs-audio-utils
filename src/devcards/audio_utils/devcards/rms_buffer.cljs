(ns audio-utils.devcards.rms-buffer
  (:require [devcards.core :refer-macros [defcard deftest dom-node]]
            [audio-utils.rms-buffer :as rms :refer [rms-buffer]]
            [audio-utils.viz :refer [linear-distribution
                                     plot-buffers]]))

(defn run-rms
  [rms-size samples]
  (reduce (fn [{:keys [rms-buf rms-values rms-samples]} sample]
            (let [next-buf (rms/rms-push rms-buf sample)
                  next-val (rms/rms rms-buf)]
              {:rms-buf     next-buf
               :rms-values  (conj rms-values next-val)
               :rms-samples (conj rms-samples
                                  (into [] (:samples next-buf)))}))
          {:rms-buf         (rms-buffer rms-size)
           :rms-values      []
           :rms-samples     []}
          samples))

(defn compute-rms-values
  [rms-size samples]
  (:rms-values (run-rms rms-size samples)))

(defn compute-rms-samples
  [rms-size samples]
  (:rms-samples (run-rms rms-size samples)))

(defcard
  "500 zeros along with RMS values calculated after adding each
   individual sample to an RMS buffer with size 100. Since the
   input consists entirely of zeros, all RMS values are 0.0."
  (let [data       (repeat 500 0.0)
        rms-values (compute-rms-values 100 data)]
    (plot-buffers 500 "Input" data "RMS Values" rms-values)))

(defcard
  "500 -1.0s along with RMS values calculated after adding each
   individual sample to an RMS buffer with size 100. Since the
   input is constantly max-ed out at 0dB (-1.0 or 1.0), the
   RMS values are all 1.0."
  (let [data       (repeat 500 -1.0)
        rms-values (compute-rms-values 100 data)]
    (plot-buffers 500 "Input" data "RMS Values" rms-values)))

(defcard
  "250 -1.0s and 250 1.0s along with RMS values calculated after
   adding each individual sample to an RMS buffer with size 100.
   Since the input is constantly max-ed out at 0dB (-1.0 or 1.0),
   the RMS values are all 1.0."
  (let [data       (concat (repeat 250 -1.0)
                           (repeat 250 1.0))
        rms-values (compute-rms-values 100 data)]
    (plot-buffers 500 "Input" data "RMS Values" rms-values)))

(defcard
  "500 0.0s and 500 1.0s along with RMS values calculated after
   adding each individual sample to an RMS buffer with size 100.
   It takes exactly 100 samples with the value 1.0 until the RMS
   value also reaches 1.0.
   "
  (let [data       (concat (repeat 500 0.0) (repeat 500 1.0))
        rms-values (compute-rms-values 100 data)]
    (plot-buffers 1000 "Input" data "RMS Values" rms-values)))

(defcard
  "500 0.0s and 500 1.0s along with RMS values calculated after
   adding each individual sample to an RMS buffer with size 250.
   It takes exactly 250 samples with the value 1.0 until the RMS
   value also reaches 1.0."
  (let [data       (concat (repeat 500 0.0) (repeat 500 1.0))
        rms-values (compute-rms-values 250 data)]
    (plot-buffers 1000 "Input" data "RMS Values" rms-values)))

(defcard
  "500 zeros, 250 ones and 500 zeros along with RMS values
   calculated after adding each individual sample to an RMS
   buffer with size 250. It takes exactly 250 1.0s until the
   RMS value also reaches 1.0. It then takes another 250
   0.0s until the RMS value is back at 0.0."
  (let [data       (concat (repeat 500 0.0)
                           (repeat 250 1.0)
                           (repeat 500 0.0))
        rms-values (compute-rms-values 250 data)]
    (plot-buffers 1250 "Input" data "RMS Values" rms-values)))

(defcard
  "500 zeros, 250 -1.0s and 500 zeros along with RMS values
   calculated after adding each individual sample to an RMS
   buffer with size 250. The RMS values are exactly the same
   as with 1.0s instead of -1.0s."
  (let [data       (concat (repeat 500 0.0)
                           (repeat 250 -1.0)
                           (repeat 500 0.0))
        rms-values (compute-rms-values 250 data)]
    (plot-buffers 1250 "Input" data "RMS Values" rms-values)))

(defcard
  "500 zeros, 100 1.0s and 1400 zeros along with RMS values
   calculated after adding each individual sample to an RMS
   buffer with a window size of 1000 samples.

   Starting with the 1.0s, the RMS value quickly rises but
   never reaches 1.0s due to the large RMS buffer window size.
   After the 1.0s it slowly decreases again until the RMS buffer
   is full. From this point, the ratio of 0.0s to 1.0s in the RMS
   window remains the same (resulting in a constant RMS value)
   until the RMS window slides out of the 100 1.0s, resulting in
   a decrease down to an RMS value of 0.0. This final decrease
   takes exactly 100 samples (corresponding to the 1.0s)."
  (let [data        (concat (repeat 500 0.0)
                            (repeat 100 1.0)
                            (repeat 1400 0.0))
        rms-values  (compute-rms-values 1000 data)
        rms-samples (map (comp #(/ % 1000) count)
                         (compute-rms-samples 1000 data))]
    (plot-buffers 2000
                  "Input" data
                  "RMS Values" rms-values
                  "RMS Buffer Fill %" rms-samples)))
