import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dfetcher } from './gamedataSlice'
import { connect, disconnect } from '@giantmachines/redux-websocket';
import { MDBBtn } from 'mdb-react-ui-kit';
import _ from 'lodash'
import store from '../store'



export function Connect() {
    //store.dispatch(connect(''));
    /*const connect = (url = 'ws://localhost:49122') => {
        type: 'WEBSOCKET:CONNECT',
        payload; { url }
    }*/
    return (
        <div>
            <MDBBtn className="" onClick={() => store.dispatch(connect('ws://localhost:49122'))}>
                Connect
            </MDBBtn>
        </div>
    )
}




export function Disconnect() {
    //const wsDisconnect = () => store.dispatch(disconnect()); 
    //console.log('wsDisconnect') 
    return (
        <div>
            <MDBBtn className="" onClick={() => store.dispatch(disconnect())}>
                Disconnect
            </MDBBtn>
        </div>
    )
}





export function Gamedata() {
    const dfetch = useSelector((state) => state)
    const dispatch = useDispatch()
    let gData = dfetch.wsReducer.data
    //console.log(gData)
    return (
        <div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">API Key</label>
            </div>
            <MDBBtn className="my-4"
                onClick={() => dispatch(dfetcher())}
            >
                Fetcher
            </MDBBtn>
            <span>{ }</span>
        </div>
    )
}