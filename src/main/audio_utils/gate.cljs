(ns audio-utils.gate
  (:require [audio-utils.util :refer [aatom aderef aswap!]]))

(defprotocol IGate)

(deftype Gate []
  IGate)

(defn gate
  []
  (Gate.))
