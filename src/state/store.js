import { configureStore } from '@reduxjs/toolkit'
import chasingReducer from './ballchasing/ballchasingReducer'
import gamedataReducer from './gamedata/gamedataReducer'

export default configureStore({
  reducer: {
    chasing: chasingReducer,
    gamedata: gamedataReducer,
  },
})