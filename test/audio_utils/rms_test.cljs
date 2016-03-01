(ns audio-utils.rms-test
  (:require [cljs.test :refer-macros [deftest testing is run-tests]]
            [audio-utils.rms :as r]))

(deftest rms-test
  (testing "rms-no-samples"
    (is (= 0 (-> (r/rms-buffer 100)
                 (r/rms)))))
  (testing "rms-one-negative-sample"
    (is (= 1.0 (-> (r/rms-buffer 100)
                   (r/rms-push -1.0)
                   (r/rms)))))
  (testing "rms-one-zero-sample"
    (is (= 0.0 (-> (r/rms-buffer 100)
                   (r/rms-push 0.0)
                   (r/rms)))))
  (testing "rms-one-positive-sample"
    (is (= 1.0 (-> (r/rms-buffer 100)
                   (r/rms-push 1.0)
                   (r/rms)))))
  (testing "rms-100-samples"
    (let [samples (repeatedly 100 (constantly 0.5))]
      (is (= 0.5 (-> (r/rms-buffer 100)
                     (r/rms-push-many samples)
                     (r/rms))))))
  (testing "rms-3-samples-with-1-size-buffer"
    (let [samples [0.0 0.5 1.0]]
      (is (= 1.0 (-> (r/rms-buffer 1)
                     (r/rms-push-many samples)
                     (r/rms))))))
  (testing "rms-3-samples-with-2-size-buffer"
    (let [samples [0.0 0.5 1.0]]
      (is (= 0.7905694150420949
             (-> (r/rms-buffer 2)
                 (r/rms-push-many samples)
                 (r/rms))))))
  (testing "rms-3-samples-with-3-size-buffer"
    (let [samples [0.0 0.5 1.0]]
      (is (= 0.6454972243679028
             (-> (r/rms-buffer 3)
                 (r/rms-push-many samples)
                 (r/rms))))))
  (testing "rms-300-samples-with-300-size-buffer"
    (let [samples (concat (repeatedly 100 (constantly 0.0))
                          (repeatedly 100 (constantly 0.5))
                          (repeatedly 100 (constantly 1.0)))]
      (is (= 0.6454972243679028
             (-> (r/rms-buffer 300)
                 (r/rms-push-many samples)
                 (r/rms)))))))
