import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useDispatch } from 'react-redux';

const dispatch = useDispatch



const initialState = {
    connected: false,
    events: {
        update_state: {}
    }
}



export const gamedataSlice = createSlice({
    name: 'gamedata',
    initialState: initialState,
    reducers: {
        dfetcher: (state) => {



            let sosData = initialState.events.update_state
            state.events.update_state = sosData

            console.log(state.events)

            //state.events.update_state = newData

            /*let deez = _.toString(req)
            console.log(req)
            state.value = JSON.stringify(req)*/


        },
        update: (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                update_state: action.payload
            }

        },
        connect: (state) => {
            const client = new W3CWebSocket('ws://localhost:49122');

            console.log('connect fired')

            state = {}

            function returnState(state) {return state}

            client.onopen = () => {
                console.log('WebSocket Client Connected');
            };
            
            client.onmessage = (message) => {
                let sosEvent = JSON.parse(message.data)
                let sosData = sosEvent.data
                //console.log(message)
                if (sosEvent.event == "game:update_state") {
                    console.log('update')
                    returnState(sosData)
                    
                }
            }

            return state

        },
    },
})

// Action creators are generated for each case reducer function
export const { dfetcher, connect, update } = gamedataSlice.actions

export default gamedataSlice.reducer