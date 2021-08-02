import React, { Component } from "react";
import {
  MDBRow,
  MDBContainer,
  MDBCol
} from 'mdbreact';

import { useSelector } from 'react-redux'

const teambox = {
  boxShadow: `5px 0px 3px -2px rgba(33, 33, 33, 0.55)`,
};
const lightbox = {
  marginTop: `-5px`,
  width: `15%`,
  height: `8px`,
  bottom: 0
}

const team1BG = {
  backgroundColor: `rgba(66, 133, 244, 0.6)`,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
}
const team2BG = {
  backgroundColor: `rgba(255, 187, 51, 0.6)`,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
}

export const ScoreBugComponent = () => {

  const selectGameState = state => state.wsReducer['game:update_state']
  const gaming = useSelector(state => selectGameState(state))


  let teamData
  let time
  let isOT = false
  let teamColors = {
    team0: { primary: 'bg-primary', secondary: '#000' },
    team1: { primary: 'bg-warning', secondary: '#000' },
    }

  if (gaming != undefined) {
    teamData = gaming.game.teams
    isOT = gaming.game.isOT
    let gameTime = gaming.game.time_seconds
    let round = Math.ceil(gameTime)
    function myTime(time) {
      var min = ~~((time % 3600) / 60);
      var sec = time % 60;
      var sec_min = "";
      sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
      sec_min += "" + sec;
      return sec_min;
    }
    time = myTime(round)
    teamColors = {
      team0: { primary: '#' + teamData[0].color_primary, secondary: '#' + teamData[0].color_secondary },
      team1: { primary: '#' + teamData[1].color_primary, secondary: '#' + teamData[1].color_secondary },
      }
    
  }

  return (
    <MDBRow top>

      {/* Score Bug Component */}
      <MDBCol size="2" className="text-light" style={{ padding: `1px`, backgroundColor: `rgba(0, 0, 0, 0.58)` }}>
        <MDBContainer className="p-0">
          <MDBRow>
            <MDBCol size="12" className="">
              <MDBContainer className="m-0 p-0">

                <MDBRow className="m-0">

                  <MDBCol size="3" className="d-none p-0 primary-color-dark">
                    {/* <img src="https://rustdeez.com/img/logos/cropped/POR.png" alt="" className="img-fluid" style={{ width: `100%`, opacity: `88%` }} /> */}
                  </MDBCol>
                  <MDBCol size="9" className="p-0 text-center primary-color-dark text-light" style={{teambox, backgroundColor: teamColors.team0.primary}}>
                    <span id="team-1-name" style={{ fontSize: `3.0em`, fontWeight: `800` }}><stong>{teamData != undefined ? teamData[0].name : 'Blue'}</stong></span>
                    <MDBContainer >
                      <MDBRow center>
                        <div className="mx-2 position-relative border border-dark bg-primary" style={lightbox}></div>
                        <div className="mx-2 position-relative border border-dark bg-primary" style={lightbox}></div>
                        <div className="mx-2 position-relative border border-dark bg-primary" style={lightbox}></div>
                      </MDBRow>
                    </MDBContainer>
                  </MDBCol>
                  <MDBCol size="3" className="p-0 pt-1 text-center" style={team1BG}>
                    <span style={{ fontSize: `3.2em`, fontWeight: `800` }}><strong>{teamData != undefined ? teamData[0].score : '0'}</strong></span>
                  </MDBCol>
                </MDBRow>

              </MDBContainer>
            </MDBCol>

            <MDBCol size="12" className="">
              <MDBContainer className="m-0 p-0">

                <MDBRow className="m-0">

                  <MDBCol size="3" className="d-none p-0 warning-color-dark">
                    {/* <img src="https://rustdeez.com/img/logos/cropped/ATL.png" alt="" className=" img-fluid" style={{ width: `100%`, opacity: `88%` }} /> */}
                  </MDBCol>
                  <MDBCol size="9" className="p-0 text-center warning-color-dark text-light" style={{teambox, backgroundColor: teamColors.team1.primary}}>
                    <span id="team-1-name"  style={{ fontSize: `3.0em`, fontWeight: `800` }}><stong>{teamData != undefined ? teamData[1].name : 'Orange'}</stong></span>
                    <MDBContainer>
                      <MDBRow center>
                        <div className="mx-2 position-relative border border-dark bg-warning" style={lightbox}></div>
                        <div className="mx-2 position-relative border border-dark bg-warning" style={lightbox}></div>
                        <div className="mx-2 position-relative border border-dark bg-warning" style={lightbox}></div>
                      </MDBRow>
                    </MDBContainer>
                  </MDBCol>
                  <MDBCol size="3" className="p-0 pt-1 text-center" style={team2BG}>
                    <span style={{ fontSize: `3.2em`, fontWeight: `800` }}><strong>{teamData != undefined ? teamData[1].score : '0'}</strong></span>
                  </MDBCol>
                </MDBRow>

              </MDBContainer>
            </MDBCol>
            <MDBCol size="12" className=" text-light">
              <div className="text-center" >
                <span id="overtime" className={isOT ? "" : "d-none"} style={{ fontSize: `3.3em`, fontWeight: `800` }}>+</span>
                <span id="time" style={{ fontSize: `3.3em`, fontWeight: `800` }}>{time}</span>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBCol>
    </MDBRow>
  )
}