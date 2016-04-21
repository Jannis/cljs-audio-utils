(ns audio-utils.devcards.core
  (:require [devcards.core :refer-macros [defcard start-devcard-ui!]]
            [audio-utils.devcards.ring-buffer]
            [audio-utils.devcards.rms-buffer]
            [audio-utils.devcards.gate]
            [audio-utils.devcards.audio-chunker]
            [audio-utils.devcards.audio-encoder]))

(enable-console-print!)

(defn init
  []
  (start-devcard-ui!))

(defn reload
  [])

(defcard
  "# ClojureScript Audio Utils

   Audio utilities for ClojureScript web applications.")
