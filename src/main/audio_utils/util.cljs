(ns audio-utils.util
  (:refer-clojure :exclude [amap]))

;;;; Pseudo atom based on a JS array

(defn aatom
  [x]
  (to-array [x]))

(defn areset!
  [x v]
  (aset x 0 v))

(defn aswap!
  [x f & args]
  (let [v (aget x 0)]
    (aset x 0 (apply f (into [v] args)))))

(defn aderef
  [x]
  (aget x 0))

(def << aderef)
(def >> areset!)

;;;; Array utilities to make using arrays more like using vectors

(defn acount
  [array]
  (.-length array))

(defn afirst
  [array]
  (aget array 0))

(defn anth
  [array n]
  (aget array n))

(defn amap
  [f array]
  (into-array (map f (array-seq array))))

(defn aconj
  [arr x]
  (doto (or arr (array))
    (.push x)))

(defn aassoc
  [array n v]
  (aset array n v)
  array)

(defn aupdate
  [array n f & args]
  (aassoc array n (apply f (into [(anth array n)] args))))

;;;; Time/samples and dB/amplitude conversion

(defn db->amplitude
  "Convert a dB value such as -6.0 to an amplitude value between 0.0
   and 1.0, such as 0.5011872336272722."
  [x]
  (Math/pow 10 (/ x 20)))

(defn amplitude->db
  "Convert an amplitude value between -1.0 and 1.0, such as
   0.5011872336272722, to a dB value like -6.0."
  [x]
  (* 20 (Math/log10 x)))

(defn time->samples
  "Converts a time in milliseconds to the corresponding number of
   samples given a sample rate."
  [x sample-rate]
  (long (* (/ x 1000) sample-rate)))

(defn amplify-sample
  "Amplifies or attentuates a sample by a given amount of dB."
  [sample db]
  (* sample (db->amplitude db)))

(defn amplify
  "Amplifies all samples in the input collection by a given amount
   of dB."
  [coll db]
  (map #(amplify-sample % db) coll))
