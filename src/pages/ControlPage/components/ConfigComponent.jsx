import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader } from 'mdb-react-ui-kit';
import { Chasing } from '../../../state/ballchasing/ballchasingActions'

export const Config = () => {

    return (

        <div>
            <MDBCard className="m-4" style={{ maxWidth: '22rem' }}>
                <MDBCardHeader color="elegant-color lighten-1">Status and Config</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText><div className="py-4">


                        <select className="browser-default custom-select">
                            <option>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                    <Chasing />

                </MDBCardBody>

            </MDBCard>
        </div>

    );
}