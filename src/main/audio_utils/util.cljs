(ns audio-utils.util)

(defn aatom
  [x]
  (to-array [x]))

(defn aswap!
  [x v]
  (aset x 0 v))

(defn aderef
  [x]
  (aget x 0))
