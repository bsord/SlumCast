import { createSlice } from '@reduxjs/toolkit';

import _ from 'lodash';
import axios from 'axios';


const token = process.env.REACT_APP_BCTOKEN
const url = 'http://localhost:8080/https://ballchasing.com/api/replays/30340ed2-eebe-47d7-b454-53f3c8985de6'


const options = {
  headers: {
    'Authorization': token
  },
  method: 'get'
};

let req = {}

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
    console.log(req)
  })
  .catch((error) => {
    console.error(error)
  })




export const chasingSlice = createSlice({
  name: 'chasing',
  initialState: {
    value: '',
  },
  reducers: {
    fetcher: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      let deez = _.toString(req)
      console.log(req)
      state.value = JSON.stringify(req)


    }
  },
})

// Action creators are generated for each case reducer function
export const { fetcher } = chasingSlice.actions

export default chasingSlice.reducer