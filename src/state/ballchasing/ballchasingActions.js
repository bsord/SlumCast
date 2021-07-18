import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetcher } from './ballchasingReducer'
import { MDBBtn } from 'mdb-react-ui-kit';


export function Chasing() {
    const fetch = useSelector((state) => state.chasing.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">API Key</label>
                <input
                    type="text"
                    className="form-control"
                    id="API Key"
                />
            </div>
            <MDBBtn className="my-4"
                onClick={() => dispatch(fetcher())}
            >
                Fetcher
            </MDBBtn>
            <span>{console.log(fetch)}</span>
        </div>
    )
}