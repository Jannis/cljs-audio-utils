(ns audio-utils.ring-buffer-test
  (:require [cljs.test :refer-macros [deftest testing is run-tests]]
            [audio-utils.ring-buffer :as b]))

(deftest ring-buffer-with-size-zero-or-one
  (testing "buffer requires a size > 1"
    (and (is (thrown? js/Error (b/ring-buffer -1)))
         (is (thrown? js/Error (b/ring-buffer 0)))
         (is (thrown? js/Error (b/ring-buffer 1))))))

(deftest ring-buffer-with-size-two
 (testing "buffer is created correctly"
   (let [buf (b/ring-buffer 2)]
     (and (is (= 2 (b/buffer-size buf)))
          (is (= 0 (count buf)))
          (is (= nil (seq buf))))))

 (testing "adding one sample works"
   (let [buf (-> (b/ring-buffer 2)
                 (conj 1.0))]
     (and (is (= 2 (b/buffer-size buf)))
          (is (= 1 (count buf)))
          (is (= '(1.0) (seq buf))))))

 (testing "adding two samples works"
   (let [buf (-> (b/ring-buffer 2)
                 (conj 1.0)
                 (conj 2.0))]
     (and (is (= 2 (b/buffer-size buf)))
          (is (= 2 (count buf)))
          (is (= '(1.0 2.0) (seq buf))))))

 (testing "adding three samples works"
   (let [buf (-> (b/ring-buffer 2)
                 (conj 1.0)
                 (conj 2.0)
                 (conj 3.0))]
     (and (is (= 2 (b/buffer-size buf)))
          (is (= 2 (count buf)))
          (is (= '(2.0 3.0) (seq buf))))))

  (testing "adding four samples works"
    (let [buf (-> (b/ring-buffer 2)
                  (conj 1.0)
                  (conj 2.0)
                  (conj 3.0)
                  (conj 4.0))]
      (and (is (= 2 (b/buffer-size buf)))
           (is (= 2 (count buf)))
           (is (= '(3.0 4.0) (seq buf))))))

  (testing "adding five samples works"
    (let [buf (-> (b/ring-buffer 2)
                  (conj 1.0)
                  (conj 2.0)
                  (conj 3.0)
                  (conj 4.0)
                  (conj 5.0))]
      (and (is (= 2 (b/buffer-size buf)))
           (is (= 2 (count buf)))
           (is (= '(4.0 5.0) (seq buf)))))))

(deftest ring-buffer-with-size-one-hundred
 (testing "buffer is created correctly"
   (let [buf (b/ring-buffer 100)]
     (and (is (= 100 (b/buffer-size buf)))
          (is (= 0   (count buf)))
          (is (= nil (peek buf)))
          (is (= nil (seq buf)))
          (is (= nil (seq (pop buf)))))))

 (testing "adding one sample works"
   (let [buf (-> (b/ring-buffer 100)
                 (conj 1.0))]
     (and (is (= 100    (b/buffer-size buf)))
          (is (= 1      (count buf)))
          (is (= 1.0    (peek buf)))
          (is (= '(1.0) (seq buf)))
          (is (= nil    (seq (pop buf)))))))

 (testing "adding 50 samples works"
   (let [buf (into (b/ring-buffer 100) (range 1.0 51.0))]
     (and (is (= 100              (b/buffer-size buf)))
          (is (= 50               (count buf)))
          (is (= 1.0              (peek buf)))
          (is (= (range 1.0 51.0) (seq buf)))
          (is (= (range 2.0 51.0) (seq (pop buf)))))))

 (testing "adding and popping 150 samples one by one works"
   (is (= (into [] (concat (range 1.0 151.0)
                           (repeat 100 0.0)))
          (loop [buf   (b/ring-buffer 100)
                 times 0
                 out   []
                 in    (range 1.0 151.0)]
            (if (>= times 250)
              out
              (let [next-buf (cond
                               (not (empty? in)) (conj buf (first in))
                               :else             (conj buf 0.0))
                    next-out (conj out (peek buf))
                    next-in  (rest in)
                    next-buf (pop buf)]
                (recur next-buf
                       (inc times)
                       next-out
                       next-in))))))))
