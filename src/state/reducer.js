import { combineReducers } from 'redux'

import { persistReducer } from 'redux-persist'
import { autoMergeLevel1 } from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

import chasingReducer from './ballchasing/ballchasingSlice'
import gamedataReducer from './control/controlSlice'
import  wsReducer  from './ws/wsSlice'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1
  //whitelist: ['gamedata', 'series', 'score', 'games'] // only gamedata will be persisted
};

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  gamedata: persistReducer(persistConfig, gamedataReducer),
  chasing: chasingReducer,
  wsReducer: wsReducer
})

export default rootReducer