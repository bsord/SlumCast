import React, { Component } from "react";
import { MDBRow, MDBContainer, MDBCol
} from 'mdb-react-ui-kit';






export const ActivePlayersComponent = () => {

  <MDBRow top>

    {/* Score Bug Component */}
    <MDBCol size="2" className="text-light" style={{ padding: `1px`, backgroundColor: `rgba(0, 0, 0, 0.58)` }}>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12" className="p-0">
            <MDBContainer className="m-0 p-0">

              <MDBRow className="m-0">

                <MDBCol size="3" className="d-none p-0 primary-color-dark">
                  <img src="https://rustdeez.com/img/logos/cropped/POR.png" alt="" className="img-fluid" style={{ width: `100%`, opacity: `88%` }} />
                </MDBCol>
                <MDBCol size="9" className="p-0 text-center primary-color-dark text-light" style={teambox}>
                  <span id="team-1-name" class="" style={{ fontSize: `3.0em`, fontWeight: `800` }}><stong>{this.props.parentState.teamData[0] && this.props.parentState.teamData[0].name ? this.props.parentState.teamData[0].name : 'Blue'}</stong></span>
                  <MDBContainer >
                    <MDBRow center>
                      <div className="mx-2 position-relative border border-dark bg-primary" style={lightbox}></div>
                      <div className="mx-2 position-relative border border-dark bg-primary" style={lightbox}></div>
                      <div className="mx-2 position-relative border border-dark bg-primary" style={lightbox}></div>
                    </MDBRow>
                  </MDBContainer>
                </MDBCol>
                <MDBCol size="3" className="p-0 pt-1 text-center" style={team1BG}>
                  <span style={{ fontSize: `3.2em`, fontWeight: `800` }}><strong>{this.props.parentState.teamData[0] && this.props.parentState.teamData[0].score}</strong></span>
                </MDBCol>
              </MDBRow>

            </MDBContainer>
          </MDBCol>

          <MDBCol size="12" className="p-0">
            <MDBContainer className="m-0 p-0">

              <MDBRow className="m-0">

                <MDBCol size="3" className="d-none p-0 warning-color-dark">
                  <img src="https://rustdeez.com/img/logos/cropped/ATL.png" alt="" className=" img-fluid" style={{ width: `100%`, opacity: `88%` }} />
                </MDBCol>
                <MDBCol size="9" className="p-0 text-center warning-color-dark text-light" style={teambox}>
                  <span id="team-1-name" class="" style={{ fontSize: `3.0em`, fontWeight: `800` }}><stong>{this.props.parentState.teamData[1] && this.props.parentState.teamData[1].name ? this.props.parentState.teamData[1].name : 'Orange'}</stong></span>
                  <MDBContainer>
                    <MDBRow center>
                      <div className="mx-2 position-relative border border-dark bg-warning" style={lightbox}></div>
                      <div className="mx-2 position-relative border border-dark bg-warning" style={lightbox}></div>
                      <div className="mx-2 position-relative border border-dark bg-warning" style={lightbox}></div>
                    </MDBRow>
                  </MDBContainer>
                </MDBCol>
                <MDBCol size="3" className="p-0 pt-1 text-center" style={team2BG}>
                  <span style={{ fontSize: `3.2em`, fontWeight: `800` }}><strong>{this.props.parentState.teamData[1] && this.props.parentState.teamData[1].score}</strong></span>
                </MDBCol>
              </MDBRow>

            </MDBContainer>
          </MDBCol>
          <MDBCol size="12" className="p-0 text-light">
            <div class="text-center" >
              <span id="overtime" className={this.props.parentState.isOT ? "" : "d-none"} style={{ fontSize: `3.3em`, fontWeight: `800` }}>+</span>
              <span id="time" class="" style={{ fontSize: `3.3em`, fontWeight: `800` }}>{this.props.parentState.time}</span>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBCol>
  </MDBRow>

}