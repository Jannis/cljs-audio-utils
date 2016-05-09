(ns audio-utils.devcards.core
  (:require [devcards.core :refer-macros [defcard start-devcard-ui!]]
            [devtools.core :as devtools]
            [audio-utils.devcards.ring-buffer]
            [audio-utils.devcards.rms-buffer]
            [audio-utils.devcards.gate]
            [audio-utils.devcards.chunker]
            [audio-utils.devcards.mp3-encoder]))

(enable-console-print!)


;;;; Better CLJS integration in Chrome dev tools

(devtools/enable-feature! :sanity-hints :dirac)
(devtools/install!)

(defn init
  []
  (start-devcard-ui!))

(defn reload
  [])

(defcard
  "# ClojureScript Audio Utils

   Audio utilities for ClojureScript web applications.")
