(ns audio-utils.devcards.ring-buffer
  (:require [devcards.core :refer-macros [defcard deftest dom-node]]
            [audio-utils.ring-buffer :refer [ring-buffer]]
            [audio-utils.viz :refer [linear-distribution
                                     plot-buffers]]))

(defcard
  "100 zeroes in a ring buffer of size 100. Taking 100 values
   out of it results in 100 values of 0.0."
  (let [data (repeat 100 0.0)]
    (plot-buffers 100 25
                  "Expected" data
                  "Actual"   (into (ring-buffer 100) data))))

(defcard
  "100 zeroes in a ring buffer of size 100. Taking 200 values
   out of it results in 100 values of 0.0, followed by 100
   nils."
  (let [data (repeat 100 0.0)]
    (plot-buffers 200 25
                  "Expected" data
                  "Actual"   (into (ring-buffer 100) data))))

(defcard
  "100 zeroes and 100 ones in a ring buffer of size 100.
   Taking 100 values out of results in 100 values of 1.0."
  (let [data (concat (repeat 100 0.0) (repeat 100 1.0))]
    (plot-buffers 100 25
                  "Expected" (drop 100 data)
                  "Actual"   (into (ring-buffer 100) data))))

(defcard
  "100 values linearly distributed between -1.0 and 1.0
   in ring buffer of size 100. Taking 10 values out of
   it results in 10 values starting at -1.0."
  (let [data (linear-distribution [-1.0 1.0] 100)]
    (plot-buffers 10 5
                  "Expected" (take 10 data)
                  "Actual"   (into (ring-buffer 100) data))))

(defcard
  "100 values linearly distributed between -1.0 and 1.0
   in ring buffer of size 100. Taking 100 values out of
   it results in 100 values from -1.0 to 1.0."
  (let [data (linear-distribution [-1.0 1.0] 100)]
    (plot-buffers 100 25
                  "Expected" (take 100 data)
                  "Actual"   (into (ring-buffer 100) data))))

(defcard
  "100 values linearly distributed between -1.0 and 1.0
   in ring buffer of size 100. Taking 200 values out of
   it results in 100 values from -1.0 and 1.0, followed
   by 100 nils."
  (let [data (linear-distribution [-1.0 1.0] 100)]
    (plot-buffers 200 25
                  "Expected" (take 100 data)
                  "Actual"   (into (ring-buffer 100) data))))

(defcard
  "200 values linearly distributed between -1.0 and 1.0
   in ring buffer of size 100. Adding the 200 values into
   the smaller buffer means that the first 100 values from
   -1.0 to 0.0 are replaced with the second 100 values from
   0.0 to 1.0. Taking 200 values out results in 100 values
   from 0.0 to 1.0, followed by 100 nils."
  (let [data (linear-distribution [-1.0 1.0] 200)]
    (plot-buffers 200 25
                  "Expected" (drop 100 data)
                  "Actual"   (into (ring-buffer 100) data))))

(defcard
  "300 values linearly distributed between -1.0 and 1.0
   in ring buffer of size 100. Adding the 300 values into
   the smaller buffer means that the first 100 values from
   -1.0 to -0.33 are replaced with the second 100 values from
   -0.33 to 0.33 and then replaced with the third 100 values
   from 0.33 to 1.0. Taking 200 values out results in 100
   values from 0.33 to 1.0, followed by 100 nils."
  (let [data (linear-distribution [-1.0 1.0] 300)]
    (plot-buffers 200 25
                  "Expected" (drop 200 data)
                  "Actual"   (into (ring-buffer 100) data))))
