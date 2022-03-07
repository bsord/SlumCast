import React, { Component } from "react";
import {
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBIcon
} from 'mdbreact';
import { useSelector } from 'react-redux'
import Color from 'color';
import { SeriesScore } from './SeriesScore'
import { Team0lights, Team1lights } from './SeriesLights'
import _ from 'lodash'

const teambox = {
  boxShadow: `5px 0px 3px -2px rgba(33, 33, 33, 0.55)`,
};
const lightbox = {
  borderRadius: `50%`,
  width: `20px`,
  height: `20px`
}

const light = {}

const scoreBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`

let dot = {
  height: `25px`,
  width: `25px`,
  backgroundColor: `#bbb`,
  borderRadius: `50%`,
  display: `inline-block`
}

export const ScoreBugComponent = () => {

  const selectGameState = state => state.wsReducer['game:update_state']
  const gaming = useSelector(state => selectGameState(state))

  const series = useSelector(state => state.gamedata.series)


  let teamData
  let time
  let isOT = false
  let teamColors = {
    team0: { primary: 'rgba(0,212,255,1)', secondary: 'rgba(9,9,121,1)' },
    team1: { primary: 'Orange', secondary: 'DarkOrange' },
  }
  let team0NameSize = 2
  let team1NameSize = 2


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


    const scoreColor = (e, b) => {
      let color = Color('#' + b)

      return e === 'E5E5E5' ? color.darken(0.5).hex() : e
    }

    teamColors = {
      team0: { primary: '#' + teamData[0].color_primary, secondary: scoreColor(teamData[0].color_secondary, teamData[0].color_primary) },
      team1: { primary: '#' + teamData[1].color_primary, secondary: scoreColor(teamData[1].color_secondary, teamData[1].color_primary) },
    }



    team0NameSize = teamData[0].name.length > 11? 1.6 : 2
    team1NameSize = teamData[1].name.length > 11? 1.6 : 2
    console.log(teamData[1].name.length)
  }
  let team0grad = `linear-gradient(-175deg, rgba(0,0,0,1) -25%,` +  teamColors.team0.primary + ` 125%)`
  let team0gradinv = `linear-gradient(-25deg, rgba(255,255,255,1) -30%,` +  teamColors.team0.primary + ` 20%)`
  let team1grad = `linear-gradient(175deg, rgba(0,0,0,1) 0%,` + teamColors.team1.primary + ` 125%)`
  let team1gradinv = `linear-gradient(25deg, rgba(255,255,255,1) -30%,` + teamColors.team1.primary + ` 20%)`
  let timebuggrad = `linear-gradient(0deg, rgba(75,75,75,1) -50%, rgba(0,0,0,1) 120%)`
  let scoregrad = `linear-gradient(0deg, rgba(75,75,75,1) 0%, rgba(0,0,0,1) 200%)`

  let lightsActive0 = series.lights ? 'mb-1' : 'd-none'
  let lightsActive1 = series.lights ? 'mt-1' : 'd-none'
 

  return (
    <MDBRow top>
      <MDBCol size="4">
      </MDBCol>

      {/* Score Bug Component */}
      <MDBCol size="4" className="text-light clipped" >
        <MDBContainer className="p-0">
          <MDBRow style={{ padding: `0px`, background: timebuggrad}}>

            {/* team 0 bug */}
            <MDBCol className="p-0 team-name" >
              <MDBContainer className="m-0 p-0 h-100 clipped-left" style={{background: team0gradinv}}>
                <MDBRow className="m-0" style={{}}>
                  <MDBCol size="10" className="mt-1 pt-0 pb-0 text-center text-light clipped-left" style={{ teambox, fontSize: team0NameSize +`vw`, fontWeight: `800`, lineHeight: team0NameSize +`vw`, background: team0grad  }}>
                    <div className="h-100 d-flex align-items-center justify-content-center ">
                      <div className="">
                        <strong style={{letterSpacing:'.05em'}}>
                          {teamData != undefined ? teamData[0].name : 'BLUE'}
                        </strong>
                      </div>

                    </div>
                  </MDBCol>
                  <MDBCol size='2' className=" text-center d-flex align-items-center justify-content-center" style={{paddingRight:"1vw", paddingTop: '.2vw'}}>
                    <span style={{ fontSize: `2.5vw`, lineHeight: 1, fontWeight: `800` }}>
                      <strong>{teamData != undefined ? teamData[0].score : '0'}
                      </strong>
                    </span>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCol>

            {/* series score +  time bug */}
            <MDBCol size="2" className=" text-light text-center">
              <div className="" style={{ marginTop: `-.5vw`, marginBottom: `-2vw` }} >
                <span id="overtime" className={isOT ? "" : "d-none"} style={{ fontSize: `2.4vw`, fontWeight: `800` }}>+ </span>
                <span id="time" style={{ fontSize: `2.4vw`, fontWeight: `800` }}>{time}</span>
              </div>
            </MDBCol>

            {/* team 1 bug */}
            <MDBCol className="p-0">
              <MDBContainer className="m-0 p-0 h-100 clipped-right" style={{ background: team1gradinv }}>
                <MDBRow className="m-0">

                  <MDBCol size="2" className="text-center d-flex align-items-center justify-content-center" style={{paddingLeft:"1vw", paddingTop: '.2vw'}}>
                    <span style={{ fontSize: `2.5vw`, lineHeight: 1, fontWeight: `800` }}><strong>{teamData != undefined ? teamData[1].score : '0'}</strong></span>
                  </MDBCol>
                  <MDBCol size="10" className="mt-1 pt-0 pb-0 p-1 text-center text-light clipped-right" style={{ teambox, fontSize: team1NameSize +`vw`, fontWeight: `800`, lineHeight: team0NameSize +`vw`, background: team1grad  }}>

                    <div className="h-100 d-flex align-items-center justify-content-center">
                      <div className="">
                        <strong style={{letterSpacing:'.05em'}}>
                          {teamData != undefined ? teamData[1].name : 'ORANGE'}
                        </strong>
                      </div>
                    </div>

                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCol>
          </MDBRow>


          <MDBRow >
            <MDBCol size="1">
            </MDBCol>
            {/* team 0 bug */}
            <MDBCol className="clipped-left-score" style={{ padding: `0px`, background: scoregrad, paddingRight:'1em'}}>
              <MDBContainer className="m-0 p-1">
                <Team0lights />
              </MDBContainer>
            </MDBCol>

            {/* series score +  time bug */}
            
            <MDBCol size="3" className=" text-light text-center p-0 m-0" style={{ teambox, fontSize: `.75vw`, fontWeight: `800`, lineHeight: `.82vw`, background: scoregrad }}>
              <div className={series.text && series.active ? "" : "d-none"}>
                <SeriesScore />
              </div>
            </MDBCol>

            {/* team 1 bug */}
            <MDBCol className="clipped-right-score"  style={{ padding: `0px`, background: scoregrad, paddingLeft:'1em'}}>
              <MDBContainer className="m-0 p-1" >
                <Team1lights />
              </MDBContainer>
            </MDBCol>
            <MDBCol size="1">
            </MDBCol>
          </MDBRow>

        </MDBContainer>
      </MDBCol>
    </MDBRow>
  )
}