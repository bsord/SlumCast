import { combineReducers } from 'redux'

import chasingReducer from './ballchasing/ballchasingSlice'
import gamedataReducer from './gamedata/gamedataSlice'
import  wsReducer  from './test/testSlice'


const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  gamedata: gamedataReducer,
  chasing: chasingReducer,
  wsReducer: wsReducer
})

export default rootReducer