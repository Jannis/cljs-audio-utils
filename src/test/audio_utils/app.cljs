(ns audio-utils.app
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [audio-utils.recorder :refer [Recorder recorder]]))

(enable-console-print!)

(defonce initial-state
  {:app/record? false})

(defmulti read om/dispatch)

(defmethod read :app/record?
  [{:keys [state]} key params]
  {:value (get @state key)})

(defmulti mutate om/dispatch)

(defmethod mutate 'app/toggle-recording
  [{:keys [state]} key {:keys [record?]}]
  {:action #(swap! state assoc :app/record? record?)})

(defonce parser
  (om/parser {:read read :mutate mutate}))

(defonce reconciler
  (om/reconciler {:state  initial-state
                  :parser parser}))

(defui App
  static om/IQuery
  (query [_]
    [:app/record?])

  Object
  (toggle-recording [this record?]
    (om/transact! this `[(app/toggle-recording {:record? ~record?})]))

  (render [this]
    (let [{:keys [app/record?]} (om/props this)]
      (println "Record?" (:app/record? (om/props this)))
      (dom/div nil
        (dom/h1 nil "Audio Recorder Test")
        (recorder {:record? record?})
        (dom/h2 nil "Recorded Audio Info")
        (dom/div nil "...")
        (dom/p nil
          (if record?
            (dom/button #js {:onClick #(.toggle-recording this false)}
              "Stop recording")
            (dom/button #js {:onClick #(.toggle-recording this true)}
              "Start recording")))))))

(defonce root (atom nil))

(defn render-to-dom! []
  (if (nil? @root)
    (let [target (js/document.getElementById "app")]
      (om/add-root! reconciler App target)
      (reset! root App))
    (om/force-root-render! reconciler)))

(defn init []
  (println "Starting the app")
  (render-to-dom!))

(defn reload []
  (println "Reloading the app")
  (render-to-dom!))
