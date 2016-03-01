(ns audio-utils.app
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(defonce initial-state
  {:app/recording? false})

(defmulti read om/dispatch)

(defmethod read :app/recording?
  [{:keys [state]} key params]
  {:value (get @state key)})

(defmulti mutate om/dispatch)

(defmethod mutate 'app/enable-recording
  [{:keys [state]} key {:keys [enable?]}]
  {:action #(swap! state assoc :app/recording? enable?)})

(defonce parser
  (om/parser {:read read :mutate mutate}))

(defonce reconciler
  (om/reconciler {:state  initial-state
                  :parser parser}))

(defui App
  static om/IQuery
  (query [_]
    [:app/recording?])

  Object
  (enable-recording [this enable]
    (om/transact! this `[(app/enable-recording {:enable? ~enable})]))

  (render [this]
    (let [{:keys [app/recording?]} (om/props this)]
      (println "Recording?" (:app/recording? (om/props this)))
      (dom/div nil
        (dom/h1 nil "Audio Recorder Test")
        (dom/h2 nil "Recorded Audio Info")
        (dom/div nil "...")
        (dom/p nil
          (if recording?
            (dom/button #js {:onClick #(.enable-recording this false)}
              "Disable recording")
            (dom/button #js {:onClick #(.enable-recording this true)}
              "Enable recording")))))))

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
