import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBTabs, MDBTabsItem, MDBTabsLink } from 'mdb-react-ui-kit';



export const Config = () => {

    return (

        <div>

            <MDBContainer>
                <MDBRow>
                    <MDBCol sm='6'>
                        <MDBCard className='text-center'>
                            <MDBCardHeader>
                                Overlay Controller
                            </MDBCardHeader>
                            <MDBCardBody className="">
                                <MDBCardTitle>Special title treatment</MDBCardTitle>
                                <MDBCardText>
                                
                                </MDBCardText>
                                
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol sm='6'>
                        <MDBCard className='text-center'>
                            <MDBCardHeader>
                                Analysis Controller
                            </MDBCardHeader>
                            <MDBCardBody className="">
                                <MDBCardTitle>Ballchasing API Data Config</MDBCardTitle>
                                <MDBCardText>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>

    );
}