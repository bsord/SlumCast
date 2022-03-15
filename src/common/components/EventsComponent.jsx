import React, { Component, useEffect, useRef, useState } from "react";
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

let gameEvents = []
let lastEvent = ''

export const EventsComponent = () => {
  
  
  const selectTestState = state => state.wsReducer['game:statfeed_event']
  const testEvent = useSelector(state => selectTestState(state))
  
  const selectGameState = state => state.wsReducer['game:update_state']
  const gaming = useSelector(state => selectGameState(state))

  const [eventLength, setEventLength] = useState(0);

  let hasWinner = false
  if (gaming != undefined) {
    hasWinner = gaming.game.hasWinner
  }
  
  if(testEvent && !hasWinner){

    let eventId = testEvent.event_name + testEvent.main_target.id
    testEvent['id'] = eventId
    if(testEvent.type !== "WIN" && testEvent.type !== "MVP") {
      if (!gameEvents.some(e => e.id === eventId)) {
        // dont' add the same event over and over.
        if(eventId !== lastEvent){
          gameEvents.push(testEvent)
          lastEvent = eventId
          setTimeout(()=>{
            deleteEvent(eventId);
          }, 5000)
        }
      }
    }
  }

  const deleteEvent = (eventId) => {
    for (var i = gameEvents.length - 1; i >= 0; --i) {
      
      if (gameEvents[i].id == eventId) {
        gameEvents.splice(i,1);
      }
    }
  }

  

  const series = useSelector(state => state.gamedata.series)

  let teamData
  let time
  let isOT = false
  let teamColors = {
    team0: { primary: 'rgba(0,212,255,1)', secondary: 'rgba(9,9,121,1)' },
    team1: { primary: 'Orange', secondary: 'DarkOrange' },
  }
  let team0NameSize = 3.5
  let team1NameSize = 3.5


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



    team0NameSize = teamData[0].name.length > 11? 2.8 : 3.5
    team1NameSize = teamData[1].name.length > 11? 2.8 : 3.5
    //console.log(teamData[1].name.length)
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
    <MDBRow style={{position: 'absolute', top: '.75vw', right: '0vw', width: '18vw', fontSize:'1.5vw', lineHeight: '2vw', marginRight: '0'}}>


      {/* Events Component */}
      <MDBCol>
        <div>
          <div className="text-light">
            
              {gameEvents.map(event => {
                return (
                  <div style={{marginBottom: '.5vw', float: 'right', clear:'both'}}>
                    <div className="px-2 py-0" style={{borderRadius: '.25vw 0 0 .25vw ', background: event.main_target.team_num === 0? teamColors.team0.primary: teamColors.team1.primary, display: "inline-block"}}>
                      {event.main_target.name} 
                    </div>
                    <div className="px-2 py-0" style={{borderRadius: '0 .25vw .25vw 0',background: '#000000DD', display: "inline-block"}}>
                      {event.event_name}
                    </div>
                  </div>
                )
              })}
            
          </div>
        </div>
      </MDBCol>
      
    </MDBRow>
  )
}