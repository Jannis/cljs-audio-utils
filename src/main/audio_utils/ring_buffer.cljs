(ns audio-utils.ring-buffer
  (:require [audio-utils.util :refer [aatom aswap! aderef]]))

(defprotocol IBufferSize
  (buffer-size [this]))

(deftype RingBuffer [start length samples meta]
  IBufferSize
  (buffer-size [this]
    (alength samples))

  ICounted
  (-count [this]
    (aderef length))

  ISequential

  IWithMeta
  (-with-meta [this m]
    (RingBuffer. start length samples m))

  IEmptyableCollection
  (-empty [this]
    (RingBuffer. (aatom 0)
                 (aatom 0)
                 (double-array (buffer-size this))
                 meta))

  IEquiv
  (-equiv [this other]
    (and (sequential? other)
         (or (not (counted? other))
             (= (count this) (count other)))
         (= (seq this) (seq other))))

  IStack
  (-peek [this]
    (if (= 0 (aderef length))
      nil
      (aget samples (aderef start))))
  (-pop [this]
    (when-not (= 0 (aderef length))
      (aswap! start #(mod (inc %) (buffer-size this)))
      (aswap! length dec))
    this)

  ICollection
  (-conj [this x]
    (if (>= (aderef length) (buffer-size this))
      (do
        (aset samples (aderef start) x)
        (aswap! start #(rem (inc %) (buffer-size this))))
      (do
        (aset samples
              (rem (+ (aderef start) (aderef length))
                   (buffer-size this))
              x)
        (aswap! length inc)))
    this)

  ISeqable
  (-seq [this]
    (seq (for [i (range (aderef length))]
           (aget samples (rem (+ (aderef start) i)
                              (buffer-size this)))))))

(defn ring-buffer
  [size]
  {:pre [(> size 1)]}
  (RingBuffer. (aatom 0)
               (aatom 0)
               (double-array size 0.0)
               nil))
