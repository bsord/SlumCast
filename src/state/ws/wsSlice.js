import defaultState, { State } from './defaultState.ts';
import _ from 'lodash'
import {
    REDUX_WEBSOCKET_BROKEN,
    REDUX_WEBSOCKET_CLOSED,
    REDUX_WEBSOCKET_CONNECT,
    REDUX_WEBSOCKET_MESSAGE,
    REDUX_WEBSOCKET_OPEN,
    REDUX_WEBSOCKET_SEND,
  } from './ActionTypes';


const wsReducer = (state = defaultState, action): State => {
    switch (action.type) {
      case 'INTERNAL::CLEAR_MESSAGE_LOG':
        return {
          ...state,
          messages: [],
        };
  
      case REDUX_WEBSOCKET_CONNECT:
        return {
          ...state,
          url: action.payload.url,
        };
  
      case REDUX_WEBSOCKET_OPEN:
        return {
          ...state,
          connected: true,
        };
  
      case REDUX_WEBSOCKET_BROKEN:
      case REDUX_WEBSOCKET_CLOSED:
        return {
          ...state,
          connected: false,
        };
  
      case REDUX_WEBSOCKET_MESSAGE:
        let wsData = JSON.parse(action.payload.message)
        //console.log(wsData.data)
        return {
          ...state,
          //data: wsData.data,
          gamestate: {...wsData.data},
          //newData: {...gData(wsData)},
          [wsData.event]: {...wsData.data},
          messages: [
            //...state.messages,
            {
              //data: action.payload.message,
              origin: action.payload.origin,
              timestamp: action.meta.timestamp,
              type: 'INCOMING',
            },
          ],
        };
  
      case REDUX_WEBSOCKET_SEND:
        return {
          ...state,
          messages: [
            ...state.messages,
            {
              data: action.payload,
              origin: window.location.origin,
              timestamp: new Date().toISOString(),
              type: 'OUTGOING',
            },
          ],
        };
  
      default:
        return state;
    }
  };


  export default wsReducer