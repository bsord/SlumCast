import React, { useState } from 'react';
import { MDBBadge, MDBRow, MDBCard, MDBCardBody, MDBCardHeader, MDBSwitch, MDBBtnGroup, MDBBtn } from 'mdb-react-ui-kit';
import { Connect, Disconnect, SeriesConfig, ResestSeries } from '../../../state/control/controlActions'
import { useSelector } from 'react-redux'

export const Status = () => {

    const getConnection = state => state.wsReducer.connected

    const connection = useSelector(state => state.wsReducer.connected)


    const customSelect = { width: `auto`, height: `calc(1.5em + 0.5rem + 2px)`, paddingTop: `.25rem`, paddingBottom: `.25rem`, paddingLeft: `.5rem`, fontSize: `.875rem` }
    return (

        <div>

            <MDBCard border='light' className='text-center' style={{ backgroundColor: '#BDBDBD' }}>
                <MDBCardHeader>
                    Status Controls
                </MDBCardHeader>
                <MDBCardBody>

                    <div className="mb-3">Status: <MDBBadge pill color={connection ? 'success' : 'danger'}>{connection ? 'Connected' : 'Disconnected'}</MDBBadge></div>
                    <MDBRow>
                        <div className="d-grid gap-2 col-12 mx-auto">
                            < Connect />
                            < Disconnect />
                        </div>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        < SeriesConfig />
                        < ResestSeries />
                    </MDBRow>

                </MDBCardBody>
            </MDBCard>


        </div>

    );
}