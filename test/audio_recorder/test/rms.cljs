(ns audio-recorder.test.rms
  (:require [cljs.test :refer-macros [deftest testing is run-tests]]
            [audio-recorder.rms :refer :all]))

(deftest rms-test
  (testing "rms-no-samples"
    (is (= 0 (-> (rms-buffer 100)
                 (rms)))))
  (testing "rms-one-negative-sample"
    (is (= 1.0 (-> (rms-buffer 100)
                   (rms-push -1.0)
                   (rms)))))
  (testing "rms-one-zero-sample"
    (is (= 0.0 (-> (rms-buffer 100)
                   (rms-push 0.0)
                   (rms)))))
  (testing "rms-one-positive-sample"
    (is (= 1.0 (-> (rms-buffer 100)
                   (rms-push 1.0)
                   (rms)))))
  (testing "rms-100-samples"
    (let [samples (repeatedly 100 (constantly 0.5))]
      (is (= 0.5 (-> (rms-buffer 100)
                     (rms-push-many samples)
                     (rms))))))
  (testing "rms-3-samples-with-1-size-buffer"
    (let [samples [0.0 0.5 1.0]]
      (is (= 1.0 (-> (rms-buffer 1)
                     (rms-push-many samples)
                     (rms))))))
  (testing "rms-3-samples-with-2-size-buffer"
    (let [samples [0.0 0.5 1.0]]
      (is (= 0.7905694150420949
             (-> (rms-buffer 2)
                 (rms-push-many samples)
                 (rms))))))
  (testing "rms-3-samples-with-3-size-buffer"
    (let [samples [0.0 0.5 1.0]]
      (is (= 0.6454972243679028
             (-> (rms-buffer 3)
                 (rms-push-many samples)
                 (rms))))))
  (testing "rms-300-samples-with-300-size-buffer"
    (let [samples (concat (repeatedly 100 (constantly 0.0))
                          (repeatedly 100 (constantly 0.5))
                          (repeatedly 100 (constantly 1.0)))]
      (is (= 0.6454972243679028
             (-> (rms-buffer 300)
                 (rms-push-many samples)
                 (rms)))))))
