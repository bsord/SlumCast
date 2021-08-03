import React, { useState } from 'react';
import { MDBBadge, MDBRow, MDBCard, MDBCardBody, MDBCardHeader, MDBSwitch, MDBBtnGroup, MDBBtn } from 'mdb-react-ui-kit';
import { Connect, Disconnect } from '../../../state/control/controlActions'
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
                        <div className="d-grid gap-2 col-12 mx-auto">
                            <h3>Series Config <MDBSwitch id='flexSwitchCheckDefault' /></h3>
                            
                            <label for="series">Series Type:</label>
                            <MDBBtnGroup>
                                <MDBBtn btn className="p-1" value="1" color='dark' id='btn-radio1' name='options' label='1' >BO3</MDBBtn>
                                <MDBBtn btn className="p-1" value="2" color='dark' id='btn-radio2' name='options' label='2' active defaultChecked>BO5</MDBBtn>
                                <MDBBtn btn className="p-1" value="3" color='dark' id='btn-radio3' name='options' label='3'>BO7</MDBBtn>
                            </MDBBtnGroup>
                            
                            <label for="team0">Team 0 Score</label>
                            <MDBBtnGroup>
                                <MDBBtn btn className="p-1" value="0" color='primary' id='btn-radio' name='options' label='0' active defaultChecked>0</MDBBtn>
                                <MDBBtn btn className="p-1" value="1" color='primary' id='btn-radio1' name='options' label='1'>1</MDBBtn>
                                <MDBBtn btn className="p-1" value="2" color='primary' id='btn-radio2' name='options' label='2'>2</MDBBtn>
                                <MDBBtn btn className="p-1" value="3" color='primary' id='btn-radio3' name='options' label='3'>3</MDBBtn>
                                <MDBBtn btn className="p-1" value="4" color='primary' id='btn-radio4' name='options' label='4'>4</MDBBtn>
                                <MDBBtn btn className="p-1" value="5" color='primary' id='btn-radio5' name='options' label='5'>5</MDBBtn>
                            </MDBBtnGroup>

                            <label for="team1">Team 1 Score</label>
                            <MDBBtnGroup>
                                <MDBBtn btn color='warning' className="p-1" value="0" id='btn-radio' name='options' label='0' active defaultChecked>0</MDBBtn>
                                <MDBBtn btn color='warning' className="p-1" value="1" id='btn-radio1' name='options' label='1'>1</MDBBtn>
                                <MDBBtn btn color='warning' className="p-1" value="2" id='btn-radio2' name='options' label='2'>2</MDBBtn>
                                <MDBBtn btn color='warning' className="p-1" value="3" id='btn-radio3' name='options' label='3'>3</MDBBtn>
                                <MDBBtn btn color='warning' className="p-1" value="4" id='btn-radio4' name='options' label='4'>4</MDBBtn>
                                <MDBBtn btn color='warning' className="p-1" value="5" id='btn-radio5' name='options' label='5'>5</MDBBtn>
                            </MDBBtnGroup>


                        </div>
                    </MDBRow>

                </MDBCardBody>
            </MDBCard>


        </div>

    );
}