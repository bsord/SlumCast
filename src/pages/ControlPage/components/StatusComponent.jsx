import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBTabs, MDBTabsItem, MDBTabsLink } from 'mdb-react-ui-kit';
import { Connect, Disconnect } from '../../../state/gamedata/gamedataActions'
import { useSelector } from 'react-redux'

export const Status = () => {

    const getConnection = state => state.wsReducer.connected

    const connection = useSelector(state => state.wsReducer.connected)
    //console.log(connection)
    return (

        <div>

            <MDBCard className='text-center'>
                <MDBCardHeader>
                    Status Controls
                </MDBCardHeader>
                <MDBCardBody className="">
                    <div className="mb-3">Status: {connection ? 'Connected' : 'Disconnected'}</div>
                <MDBRow>
                <MDBCol size="6">
                    < Connect />
                </MDBCol>
                <MDBCol size="6">
                    < Disconnect />
                </MDBCol>
                </MDBRow>
                
                </MDBCardBody>
            </MDBCard>


        </div>

    );
}