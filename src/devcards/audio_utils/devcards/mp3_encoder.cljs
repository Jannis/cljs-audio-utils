(ns audio-utils.devcards.mp3-encoder
  (:require [devcards.core :refer-macros [defcard defcard-doc]]
            [audio-utils.mp3-encoder]))

(defcard-doc
  "# Foo")

(js/console.log js/lamejs)
(js/console.log js/lamejs.Mp3Encoder)
(js/console.log (js/lamejs.Mp3Encoder. 1 44100 128))

