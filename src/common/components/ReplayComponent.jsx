import React from "react";
import { useSelector } from "react-redux";
import { MDBIcon } from 'mdbreact';
import _ from 'lodash'

export const ReplayComponent = () => {


    const selectGameState = state => state.wsReducer['game:update_state']
    const gaming = useSelector(state => selectGameState(state))

    let ot = _.isUndefined(gaming) ? undefined : gaming.isOT

    console.log(ot)
    const style = { height: `150px`, background: `radial-gradient(circle, rgba(0,146,163,0.33) 0%, rgba(4,4,57,0.33) 100%)` }

    return (
        <>
        <div className='w-100 fixed-bottom text-light' style={style}>
            <MDBIcon fas icon="futbol" /> Nuts <MDBIcon fas icon="hands-helping" /> Deez
        </div>
        </>
    )
}