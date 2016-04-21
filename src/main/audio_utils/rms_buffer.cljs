(ns audio-utils.rms-buffer)

(defprotocol IRMSBuffer
  "Interface for implementations of RMS volume computation buffers."
  (rms-push      [this sample]  "Adds a single sample to the RMS buffer")
  (rms-push-many [this samples] "Adds many samples to the RMS buffer")
  (rms           [this]         "Computes the RMS volume level based on
                                 the samples in the buffer"))

(defrecord RMSBuffer [size samples squared-sum]
  IRMSBuffer
  (rms-push [this sample]
    (let [n-samples (count samples)
          oldest    (if (>= n-samples size)
                      (first samples)
                      0)]
      (-> this
          ;; Add the new sample at the end and drop the oldest
          ;; sample from the beginning if the RMS window size
          ;; has been reached
          (assoc :samples
                 (conj (cond-> samples
                         (>= n-samples size) (subvec 1))
                       sample))
          ;; Update the sum of squares: x_1² + x_2² + ... + x_n²
          ;; by removing the oldest sample square (if present)
          ;; and adding the square of the new sample
          (assoc :squared-sum
                 (-> squared-sum
                     (- (* oldest oldest))
                     (+ (* sample sample)))))))

  (rms-push-many [this samples]
    (loop [buf this xs samples]
      (if (empty? xs)
        buf
        (recur (rms-push buf (first xs))
               (rest xs)))))

  (rms [this]
    ;; The RMS is the square root of the sum of squares of all
    ;; samples divided by the number of samples
    (if (empty? samples)
      0
      (let [sum-by-n (/ squared-sum (count samples))]
        (js/Math.sqrt sum-by-n)))))


(defn rms-buffer
  "Allocates a new buffer for RMS computations"
  [size]
  (map->RMSBuffer {:size        size
                   :samples     []
                   :squared-sum 0}))
