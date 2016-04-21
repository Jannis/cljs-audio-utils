(ns audio-utils.devcards.ring-buffer
  (:require [devcards.core :refer-macros [defcard deftest dom-node]]
            [sablono.core :as sab :refer-macros [html]]
            [thi.ng.geom.viz.core :as viz]
            [thi.ng.geom.svg.core :as svg]
            [audio-utils.ring-buffer :refer [ring-buffer]]))

(defn linear-distribution
  [domain n]
  (mapv #((viz/linear-scale [0 n] domain) %) (range 0 n)))

(defn plot-data
  [n buffer width height]
  {:x-axis (viz/linear-axis
            {:domain      [0 n]
             :range       [50 (- width 10)]
             :major       100
             :minor       10
             :pos         (- height 50)})
   :y-axis (viz/linear-axis
            {:domain      [-1.0 1.0]
             :range       [(- height 50) 10]
             :major       0.25
             :pos         50})
   :grid   {:attribs      {:stroke "#ddd"}
            :minor-x      true
            :minor-y      false}
   :data   [{:values      (map-indexed #(-> [%1 0]) (repeat n 0))
             :attribs     {:fill "none" :stroke "#ccc"}
             :layout      viz/svg-line-plot}
            {:values      (map-indexed #(-> [%1 %2]) (take n buffer))
             :attribs     {:fill "none" :stroke "#0af"}
             :layout      viz/svg-line-plot}]})

(defn plot-n
  [n buffer width height]
  (->> (plot-data n buffer width height)
       (viz/svg-plot2d-cartesian)
       (svg/svg {:width width :height height})))

(defn plot-buffer
  [n expected buffer]
  (let [width 400 height 400]
    (sab/html
     [:table
      [:tbody
       [:tr
        [:td (plot-n n expected width height)
         [:div {:style {:text-align "center"}} "Expected"]]
        [:td (plot-n n buffer   width height)
         [:div {:style {:text-align "center"}} "Actual"]]]]])))

(defcard
  "100 zeroes in a ring buffer of size 100. Taking 100 values
   out of it results in 100 values of 0.0."
  (let [data (repeat 100 0.0)]
    (plot-buffer 100 data (into (ring-buffer 100) data))))

(defcard
  "100 zeroes in a ring buffer of size 100. Taking 200 values
   out of it results in 100 values of 0.0, followed by 100
   nils."
  (let [data (repeat 100 0.0)]
    (plot-buffer 200 data (into (ring-buffer 100) data))))

(defcard
  "100 zeroes and 100 ones in a ring buffer of size 100.
   Taking 100 values out of results in 100 values of 1.0."
  (let [data (concat (repeat 100 0.0) (repeat 100 1.0))]
    (plot-buffer 100
                 (drop 100 data)
                 (into (ring-buffer 100) data))))

(defcard
  "100 values linearly distributed between -1.0 and 1.0
   in ring buffer of size 100. Taking 10 values out of
   it results in 10 values starting at -1.0."
  (let [data (linear-distribution [-1.0 1.0] 100)]
    (plot-buffer 10
                 (take 10 data)
                 (into (ring-buffer 100) data))))

(defcard
  "100 values linearly distributed between -1.0 and 1.0
   in ring buffer of size 100. Taking 100 values out of
   it results in 100 values from -1.0 to 1.0."
  (let [data (linear-distribution [-1.0 1.0] 100)]
    (plot-buffer 100
                 (take 100 data)
                 (into (ring-buffer 100) data))))

(defcard
  "100 values linearly distributed between -1.0 and 1.0
   in ring buffer of size 100. Taking 200 values out of
   it results in 100 values from -1.0 and 1.0, followed
   by 100 nils."
  (let [data (linear-distribution [-1.0 1.0] 100)]
    (plot-buffer 200
                 (take 100 data)
                 (into (ring-buffer 100) data))))

(defcard
  "200 values linearly distributed between -1.0 and 1.0
   in ring buffer of size 100. Adding the 200 values into
   the smaller buffer means that the first 100 values from
   -1.0 to 0.0 are replaced with the second 100 values from
   0.0 to 1.0. Taking 200 values out results in 100 values
   from 0.0 to 1.0, followed by 100 nils."
  (let [data (linear-distribution [-1.0 1.0] 200)]
    (plot-buffer 200
                 (drop 100 data)
                 (into (ring-buffer 100) data))))

(defcard
  "300 values linearly distributed between -1.0 and 1.0
   in ring buffer of size 100. Adding the 300 values into
   the smaller buffer means that the first 100 values from
   -1.0 to -0.33 are replaced with the second 100 values from
   -0.33 to 0.33 and then replaced with the third 100 values
   from 0.33 to 1.0. Taking 200 values out results in 100
   values from 0.33 to 1.0, followed by 100 nils."
  (let [data (linear-distribution [-1.0 1.0] 300)]
    (plot-buffer 200
                 (drop 200 data)
                 (into (ring-buffer 100) data))))
