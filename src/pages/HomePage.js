import React from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
//import './HomePage.css';

class HomePage extends React.Component {

    render() {
        return (
            <MDBContainer fluid>
                <div
                    className='d-flex justify-content-center align-items-center'
                    style={{ height: '100vh' }}
                >
                    <MDBRow>
                        <MDBCol sm='6'>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>Control Panel</MDBCardTitle>
                                    <MDBCardText>
                                        It controls the overlay and analysis pages. <br/>
                                        You'll get shorter bits of information here.
                                    </MDBCardText>
                                    <MDBBtn href='/control'>Control Page</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>Overlay</MDBCardTitle>
                                    <MDBCardText>
                                        This is the page you'll use in your broadcasting software.
                                    </MDBCardText>
                                    <MDBBtn href='/overlay'>Overlay Page</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        {/*<MDBCol sm='4'>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>Analysis</MDBCardTitle>
                                    <MDBCardText>
                                        Analysis page used to breakdown BallChasing stats.
                                    </MDBCardText>
                                    <MDBBtn href='/analysis'>Analysis Page</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>*/}
                    </MDBRow>
                </div>
            </MDBContainer>
        );
    }
}

export default HomePage;
