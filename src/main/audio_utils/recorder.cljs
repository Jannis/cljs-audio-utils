(ns audio-utils.recorder
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [audio-utils.util :refer [audio-context get-user-media]]
            [audio-utils.gate :as g]))

(defui Recorder
  Object
  (start [this]
    (let [audio-ctx (audio-context)
          gate      (g/gate {:audio-ctx audio-ctx})]
      (om/update-state! this assoc
                        :audio-ctx audio-ctx
                        :gate gate)
      (get-user-media {:audio true}
                      #(.connect-audio-nodes this %)
                      js/console.warn)))

  (connect-audio-nodes [this stream]
    (let [{:keys [audio-ctx gate]} (om/get-state this)
          source                   (.createMediaStreamSource audio-ctx
                                                             stream)]
      (.connect source gate)
      (.connect gate (.-destination audio-ctx))))

  (stop [this]
    (let [audio-ctx (:audio-ctx (om/get-state this))]
      (.close audio-ctx)
      (om/update-state! this dissoc :audio-ctx)))

  (componentWillReceiveProps [this new-props]
    (when (not= (:record? (om/props this))
                (:record? new-props))
      (if (:record? new-props)
        (.start this)
        (.stop this))))

  (render [this]
    (dom/div nil)))

(def recorder (om/factory Recorder))
