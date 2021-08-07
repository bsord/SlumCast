import React, { Component } from "react";
import {
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBBtn,
  MDBBtnGroup,
  MDBBadge,
  MDBIcon
} from 'mdbreact';
import { useSelector } from 'react-redux'
import Color from 'color';
import { SeriesScore } from './SeriesScore'
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


    //console.log(teamColors)

  }
  let team0grad = `linear-gradient(270deg, rgba(0,0,0,1) 0%,` + teamColors.team0.secondary + ` 35%, ` + teamColors.team0.primary + ` 100%)`
  let team1grad = `linear-gradient(270deg, rgba(0,0,0,1) 0%,` + teamColors.team1.secondary + ` 35%, ` + teamColors.team1.primary + ` 100%)` 

  let lightsActive0 = series.lights ? 'mb-1' : 'd-none'
  let lightsActive1 = series.lights ? 'mt-1' : 'd-none'

  const all = series.type == 3 || series.type == 5 || series.type == 7
  const fiveSeven = series.type == 5 || series.type == 7
  const seven = series.type == 7

  let team0g1 = series.games.game1.team0 == 0 ? <MDBIcon far icon="circle" /> : <MDBIcon fas icon="circle" />
  let team0g2 = series.games.game2.team0 == 0 ? <MDBIcon far icon="circle" /> : <MDBIcon fas icon="circle" />
  let team0g3 = series.games.game3.team0 == 0 ? <MDBIcon far icon="circle" /> : <MDBIcon fas icon="circle" />
  let team0g4 = series.games.game4.team0 == 0 ? <MDBIcon far icon="circle" className={fiveSeven ? '' : 'd-none'} /> : <MDBIcon fas icon="circle" className={fiveSeven ? '' : 'd-none'} />
  let team0g5 = series.games.game5.team0 == 0 ? <MDBIcon far icon="circle" className={fiveSeven ? '' : 'd-none'} /> : <MDBIcon fas icon="circle" className={fiveSeven ? '' : 'd-none'} />
  let team0g6 = series.games.game6.team0 == 0 ? <MDBIcon far icon="circle" className={seven ? '' : 'd-none'} /> : <MDBIcon fas icon="circle" className={seven ? '' : 'd-none'} />
  let team0g7 = series.games.game7.team0 == 0 ? <MDBIcon far icon="circle" className={seven ? '' : 'd-none'} /> : <MDBIcon fas icon="circle" className={seven ? '' : 'd-none'} />

  let team1g1 = series.games.game1.team1 == 0 ? <MDBIcon far icon="circle" /> : <MDBIcon fas icon="circle" />
  let team1g2 = series.games.game2.team1 == 0 ? <MDBIcon far icon="circle" /> : <MDBIcon fas icon="circle" />
  let team1g3 = series.games.game3.team1 == 0 ? <MDBIcon far icon="circle" /> : <MDBIcon fas icon="circle" />
  let team1g4 = series.games.game4.team1 == 0 ? <MDBIcon far icon="circle" className={fiveSeven ? '' : 'd-none'} /> : <MDBIcon fas icon="circle" className={fiveSeven ? '' : 'd-none'} />
  let team1g5 = series.games.game5.team1 == 0 ? <MDBIcon far icon="circle" className={fiveSeven ? '' : 'd-none'} /> : <MDBIcon fas icon="circle" className={fiveSeven ? '' : 'd-none'} />
  let team1g6 = series.games.game6.team1 == 0 ? <MDBIcon far icon="circle" className={seven ? '' : 'd-none'} /> : <MDBIcon fas icon="circle" className={seven ? '' : 'd-none'} />
  let team1g7 = series.games.game7.team1 == 0 ? <MDBIcon far icon="circle" className={seven ? '' : 'd-none'} /> : <MDBIcon fas icon="circle" className={seven ? '' : 'd-none'} />



  return (
    <MDBRow top>

      {/* Score Bug Component */}
      <MDBCol size="2" className="text-light" style={{ padding: `1px`, backgroundColor: `rgba(0, 0, 0, 0.58)` }}>
        <MDBContainer className="p-0">
          <MDBRow>
            {/* team 0 bug */}
            <MDBCol size="12" className="" >
              <MDBContainer className="m-0 p-0" style={{ background: team0grad }}>

                <MDBRow className="m-0" style={{}}>

                  <MDBCol size="3" className="d-none p-0 ">
                    {/* <img src="https://rustdeez.com/img/logos/cropped/POR.png" alt="" className="img-fluid" style={{ width: `100%`, opacity: `88%` }} /> */}
                  </MDBCol>
                  <MDBCol size="9" className="p-1 text-center text-light" style={{ teambox, fontSize: `2.0vw`, fontWeight: `800`, lineHeight: `2vw` }}>




                    <div className="h-100 d-flex align-items-center justify-content-center">
                      <div className="pt-1">
                        <strong>
                          {teamData != undefined ? teamData[0].name : 'Blue'}
                        </strong>
                      </div>

                    </div>
                  </MDBCol>
                  <MDBCol size="3" className="p-0 text-center d-flex align-items-center justify-content-center">
                    <span style={{ fontSize: `3.2em`, fontWeight: `800` }}>
                      <strong>{teamData != undefined ? teamData[0].score : '0'}
                      </strong>
                    </span>
                  </MDBCol>
                  <MDBCol size='12' className={lightsActive0}>
                    <div className="d-flex justify-content-evenly">
                      {team0g1}
                      {team0g2}
                      {team0g3}
                      {team0g4}
                      {team0g5}
                      {team0g6}
                      {team0g7}
                    </div>
                  </MDBCol>
                </MDBRow>

              </MDBContainer>
            </MDBCol>
            {/* team 1 bug */}
            <MDBCol size="12" className="">
              <MDBContainer className="m-0 p-0" style={{ background: team1grad }}>

                <MDBRow className="m-0">

                  <MDBCol size='12' className={lightsActive1}>
                  <div className="d-flex justify-content-evenly">
                      {team1g1}
                      {team1g2}
                      {team1g3}
                      {team1g4}
                      {team1g5}
                      {team1g6}
                      {team1g7}
                    </div>
                  </MDBCol>

                  <MDBCol size="3" className="d-none p-0">
                    {/* <img src="https://rustdeez.com/img/logos/cropped/ATL.png" alt="" className=" img-fluid" style={{ width: `100%`, opacity: `88%` }} /> */}
                  </MDBCol>
                  <MDBCol size="9" className="p-1 text-center text-light" style={{ teambox, fontSize: `2.0vw`, fontWeight: `800`, lineHeight: `2vw` }}>

                    <div className="h-100 d-flex align-items-center justify-content-center">
                      <div className="">
                        <strong>
                          {teamData != undefined ? teamData[1].name : 'Orange'}
                        </strong>
                      </div>
                    </div>

                  </MDBCol>
                  <MDBCol size="3" className="p-0 pt-1 text-center d-flex align-items-center justify-content-center" >
                    <span style={{ fontSize: `3.2em`, fontWeight: `800` }}><strong>{teamData != undefined ? teamData[1].score : '0'}</strong></span>
                  </MDBCol>
                </MDBRow>

              </MDBContainer>
            </MDBCol>

            <MDBCol size="12" className={series.text && series.active ? "p-0 text-center text-light" : "d-none"} style={{ fontSize: `1.2vw`, fontWeight: `500` }}>
              <SeriesScore />
            </MDBCol>

            {/* time bug */}
            <MDBCol size="12" className=" text-light">
              <hr className={series.text && series.active ? "p-0 m-0" : "d-none"} />
              <div className="text-center" >
                <span id="overtime" className={isOT ? "" : "d-none"} style={{ fontSize: `3.3vw`, fontWeight: `800` }}>+</span>
                <span id="time" style={{ fontSize: `3.3vw`, fontWeight: `800` }}>{time}</span>
              </div>

            </MDBCol>


          </MDBRow>
        </MDBContainer>
      </MDBCol>
    </MDBRow>
  )
}