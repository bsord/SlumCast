import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dfetcher } from './gamedataReducer'
import { MDBBtn } from 'mdb-react-ui-kit';
import _ from 'lodash'


export function Gamedata() {
    const dfetch = useSelector((state) => state.gamedata.events)
    const dispatch = useDispatch()
    let text = JSON.stringify(dfetch)
    console.log(text)
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
            <span>{}</span>
        </div>
    )
}