#!/usr/bin/env boot

(set-env!
 :source-paths #{"src/test" "test" "src/devcards"}
 :resource-paths #{"resources" "src/main"}
 :dependencies '[;; Boot
                 [adzerk/boot-cljs "1.7.228-1" :scope "test"]
                 [adzerk/boot-reload "0.4.5" :scope "test"]
                 [adzerk/boot-test "1.1.0" :scope "test"]
                 [pandeiro/boot-http "0.7.2" :scope "test"]
                 [adzerk/bootlaces "0.1.13" :scope "test"]
                 [crisptrutski/boot-cljs-test "0.2.2-SNAPSHOT" :scope "test"]

                 ;; Language libraries
                 [org.clojure/clojurescript "1.7.228"]

                 ;; Other dependencies
                 [cljsjs/lamejs "1.1.0-0"]

                 ;; Test app
                 [binaryage/devtools "0.5.2"]
                 [devcards "0.2.1-6"]
                 [org.omcljs/om "1.0.0-alpha30"]
                 [thi.ng/geom "0.0.908"]])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-reload :refer [reload]]
         '[adzerk.boot-test :refer :all]
         '[adzerk.bootlaces :refer :all]
         '[boot.git :refer [last-commit]]
         '[crisptrutski.boot-cljs-test :refer [test-cljs exit!]]
         '[pandeiro.boot-http :refer [serve]])

(def +project+ 'cljs-audio-utils)
(def +version+ "0.1.1")

(bootlaces! +version+ :dont-modify-paths? true)

(task-options!
 test-cljs {:js-env :phantom
            :update-fs? true
            :optimizations :none}
 push      {:repo "deploy-clojars"
            :ensure-branch "master"
            :ensure-clean true
            :ensure-tag (last-commit)
            :ensure-version +version+}
 pom       {:project 'cljs-audio-utils
            :version +version+
            :description "Audio utilities for ClojureScript web apps"
            :url "https://github.com/jannis/cljs-audio-utils"
            :scm {:url "https://github.com/jannis/cljs-audio-utils"}
            :license {"MIT License"
                      "https://opensource.org/licenses/MIT"}})

(deftask build-dev
  []
  (comp
   (cljs :source-map true
         :optimizations :none
         :compiler-options {:devcards true
                            :parallel-build true})))

(deftask dev
  []
  (comp
   (watch)
   (reload :ids       #{"devcards"}
           :on-jsload 'audio-utils.devcards.core/reload)
   (build-dev)
   (serve)))

(deftask test-once
  []
  (comp
   (test-cljs)))

(deftask test-auto
  []
  (comp
   (watch)
   (test-cljs)))

(deftask install-local
  []
  (comp
   (pom)
   (jar)
   (install)))

(deftask deploy-snapshot
  []
  (comp
   (pom)
   (jar)
   (build-jar)
   (push-snapshot)))

(deftask deploy-release
  []
  (comp
   (pom)
   (jar)
   (build-jar)
   (push-release)))
