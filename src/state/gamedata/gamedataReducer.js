import { createSlice } from '@reduxjs/toolkit';

import _ from 'lodash';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:49122');






/* Code
const token = ''
const url = 'http://localhost:8080/https://ballgamedata.com/api/replays/30340ed2-eebe-47d7-b454-53f3c8985de6'

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
    'Target-URL': 'https://ballgamedata.com/api/',
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
  }) */

let newData = {}

client.onopen = () => {
    //console.log('WebSocket Client Connected');
};
client.onclose = () => {
    //this.setState({ isConnected: false});
};
client.onmessage = (message) => {
    let sosEvent = JSON.parse(message.data)
    //console.log(message)
    if (sosEvent.event == "game:update_state") {
        newData = sosEvent.data
        //console.log(sosEvent.data)
    }
}


export const gamedataSlice = createSlice({
    name: 'gamedata',
    initialState: {
        events: {
            update_state: {}
        },
    },
    reducers: {
        dfetcher: (state) => {

            state.events.update_state = newData

            /*let deez = _.toString(req)
            console.log(req)
            state.value = JSON.stringify(req)*/


        }
    },
})

// Action creators are generated for each case reducer function
export const { dfetcher } = gamedataSlice.actions

export default gamedataSlice.reducer