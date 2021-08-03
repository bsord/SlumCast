import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBRow, MDBContainer, MDBCol, MDBBadge, MDBInput } from "mdbreact";
import _ from 'lodash'




export const ScorebugConrollerComponent = () => {
    <MDBCol size="3">
        <MDBCard>
            <MDBCardHeader color="elegant-color lighten-1">Status and Config</MDBCardHeader>
            <MDBCardBody>
                <MDBCardTitle>SOS Status</MDBCardTitle>
                <MDBCardText>
                    <p>Connection: <MDBBadge color={this.state.isConnected ? 'success-color-dark' : 'danger-color-dark'} pill>{this.state.isConnected ? 'Success' : 'Failed'}</MDBBadge></p>
                    <hr />

                    <h3>Scorebug Config</h3>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol size="6">
                                <h4>Orientation</h4>
                                <select className="browser-default custom-select">
                                    <option value="1">Vertical Stacked</option>
                                    <option value="2">Horizontal Flat</option>
                                </select>
                            </MDBCol>
                            <MDBCol size="6">
                                <h4>Position</h4>
                                <select className="browser-default custom-select">
                                    <option value="1">Left</option>
                                    <option value="2">Middle</option>
                                    <option value="3">Right</option>
                                </select>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <br />


                    <h3>Teams</h3>
                    <div className='custom-control custom-switch m-1'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customSwitches'
                            readOnly
                            checked={this.state.custom1}
                            onChange={this.handleSwitchChange(1)}
                        />
                        <label className='custom-control-label' htmlFor='customSwitches'>
                            Custom teams {/*_.toString(this.state.custom3)*/}
                        </label>
                    </div>
                    <MDBRow className={this.state.custom1 ? "" : "d-none"}>
                        <MDBCol size="6">
                            <div className="input-group">
                                <div className="input-group-prepend pt-0">
                                    <span className="input-group-text pt-0" id="basic-addon">
                                        <MDBInput type="checkbox" id="checkbox2" className="pt-0" onChange={this.handleSwitchChange(2)} />
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Team 1 Name " aria-label="Team 1" aria-describedby="basic-addon" />
                            </div><br />
                            <select className="browser-default custom-select">
                                <option value="1">Default</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </MDBCol>
                        <MDBCol size="6">
                            <div className="input-group">
                                <div className="input-group-prepend pt-0">
                                    <span className="input-group-text pt-0" id="basic-addon">
                                        <MDBInput type="checkbox" id="checkbox2" className="pt-0" onChange={this.handleSwitchChange(3)} />
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Team 2 Name" aria-label="Team 2" aria-describedby="basic-addon" />
                            </div><br />
                            <select className="browser-default custom-select">
                                <option value="1">Default</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </MDBCol>
                    </MDBRow>
                    {/*
                      sosEvent.length > 0 &&
                      <p> {sosEvent}</p>
                      */}
                </MDBCardText>
                <MDBBtn color="elegant" className="btn-block">go somewhere</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>
}