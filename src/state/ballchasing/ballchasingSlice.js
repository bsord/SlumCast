import {
  createSlice
} from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

import _ from 'lodash';
import axios from 'axios';

import {
  bcPull,
  BC_PULL,
  BC_PUSH,
  bcPush,
  TEST_TYPE
} from './ActionTypes';
import store from '../store';

const dispatch = useDispatch

const token = process.env.REACT_APP_BCTOKEN
const url = 'http://localhost:8080/https://ballchasing.com/api/groups/macaroni-league-0p6avqc0gv'
const baseurl = 'http://localhost:8080/https://ballchasing.com/api/groups/'

const options = {
  headers: {
    'Authorization': token
  },
  method: 'get'
};


const initialState = {
  value: '',
  groupId: 'fettuccine-league-2blw98c6pp',
  apiKey: '',
  players: [],
  playerRows: [],
  isBroken: false
}
/*
axios.get(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Target-URL': 'https://ballchasing.com/api/',
      'crossorigin': true,
      'Authorization': token,
    }
  })
  .then((res) => {
    req = res.data,
      console.log('func' + req)
  })
  .catch((error) => {
    console.error(error)
  })
*/


const apiGrab = (groupid, key) => {
  const baseurl = 'http://localhost:8080/https://ballchasing.com/api/groups/'
  axios.get(baseurl + groupid, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Target-URL': 'https://ballchasing.com/api/',
        'crossorigin': true,
        'Authorization': key,
      }
    })
    .then((res) => {
      let req = res.data
      const rth = (e) => {
        return _.round(e, 3)
      }
      const mvpr = (goals, assists, saves, shots) => {
        let e = ((goals * 1) + (assists * 0.75) + (saves * 0.6) + (shots / 3))
        return rth(e)
      }
      let pMap = req.players.map(player => ({
        name: player.name,
        mvpr: mvpr(player.game_average.core.goals, player.game_average.core.assists, player.game_average.core.saves, player.game_average.core.shots),
        score: rth(player.game_average.core.score),
        goals: rth(player.game_average.core.goals),
        assists: rth(player.game_average.core.assists),
        saves: rth(player.game_average.core.saves),
        shots: rth(player.game_average.core.shots)
      }))

      let result = {
        value: req,
        playerRows: pMap
      }
      console.log(result)
      return result
    })
    .catch((error) => {
      console.log(key)
      console.error(error)
      return error
    })
}



export const chasingSlice = createSlice({
  name: 'chasing',
  initialState: initialState,
  reducers: {
    apiPush: (state, action) => {

      console.log('apiPush action:')
      console.log(action)

      return {
        ...state,
        value: action.payload.value,
        playerRows: action.payload.playerRows,
        players: action.payload.players
      }

    },
    testReducer: (state, action) => {
      //console.log('reducer fired')
      //console.log(state)
      //console.log('testReducer action:')
      //console.log(action)

      let req
      let pMap
      let groupId = action.payload.groupId
      let apiKey = action.payload.apiKey

      const rth = (e) => {
        return _.round(e, 3)
      }
      const mvpr = (goals, assists, saves, shots) => {
        let e = ((goals * 1) + (assists * 0.75) + (saves * 0.6) + (shots / 3))
        return rth(e)
      }


      axios.get(baseurl + groupId, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Target-URL': 'https://ballchasing.com/api/',
          'crossorigin': true,
          'Authorization': apiKey,
        }
      })
      .then((res) => {
        console.log(res)
        req = res.data
        pMap = req.players.map(player => ({
          name: player.name,
          mvpr: mvpr(player.game_average.core.goals, player.game_average.core.assists, player.game_average.core.saves, player.game_average.core.shots),
          gp: player.cumulative.games,
          score: rth(player.game_average.core.score),
          goals: rth(player.game_average.core.goals),
          assists: rth(player.game_average.core.assists),
          saves: rth(player.game_average.core.saves),
          shots: rth(player.game_average.core.shots)
        }))

        store.dispatch(apiPush({value: req, players: req.players, playerRows: pMap}))

      })
      .catch((error) => {
        console.log(apiKey)
        console.error(error)
        return error
      })

      return {
        ...state,
        groupId: groupId,
        apiKey: apiKey,
      }

    //ohBoy(sug, ma)
    //console.log('req check: ' + req)
      /*if(req != undefined) {
      return {
        ...state,
        value: req,
        players: req.players,
        playerRows: pMap
      }
    } else {
      return {...state,
      isBroken: true
    }*/
    },
    fetcher: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes


      let deez = JSON.stringify(req)
      const rth = (e) => {
        return _.round(e, 3)
      }
      const mvpr = (goals, assists, saves, shots) => {
        let e = ((goals * 1) + (assists * 0.75) + (saves * 0.6) + (shots / 3))
        return rth(e)
      }
      let pMap = req.players.map(player => ({
        name: player.name,
        mvpr: mvpr(player.game_average.core.goals, player.game_average.core.assists, player.game_average.core.saves, player.game_average.core.shots),
        score: rth(player.game_average.core.score),
        goals: rth(player.game_average.core.goals),
        assists: rth(player.game_average.core.assists),
        saves: rth(player.game_average.core.saves),
        shots: rth(player.game_average.core.shots)
      }))
      //console.log(pMap)
      //state.value = req
      //state.players = req.players
      //state.playerRows = pMap
      return {
        ...state,
        value: req,
        players: req.players,
        playerRows: pMap
      }

    }
  },
})

// Action creators are generated for each case reducer function
export const {
  fetcher,
  testReducer,
  apiPush
} = chasingSlice.actions

export default chasingSlice.reducer