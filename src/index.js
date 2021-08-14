import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './state/store'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/integration/react'
import crossBrowserListener from './utils/reduxpersist-listener'
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { hardSet } from 'redux-persist/lib/stateReconciler/hardSet'
let persistor = persistStore(store)
const persistConfig = {
   key: 'root',
   storage,
   stateReconciler: hardSet
}

window.addEventListener('storage', crossBrowserListener(store, persistConfig))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerServiceWorker();