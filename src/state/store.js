import { createStore, applyMiddleware, compose } from 'redux'
import reduxWebsocket from '@giantmachines/redux-websocket';

import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer'
import * as gdActions from './ws/ActionTypes'
import * as bcActions from './ballchasing/ActionTypes'

const reduxWebsocketMiddleware = reduxWebsocket();

let middle = applyMiddleware(reduxWebsocketMiddleware)

const composedEnhancer = composeWithDevTools(
  {gdActions, bcActions, trace: true, traceLimit: 25}
  
  // other store enhancers if any
)



const store = createStore(rootReducer, composedEnhancer(
  applyMiddleware(reduxWebsocketMiddleware)
  ))
export default store