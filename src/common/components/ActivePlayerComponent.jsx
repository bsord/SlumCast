import React, { Component } from "react";
import { MDBRow, MDBCol, MDBTypography, MDBTable, MDBTableBody } from 'mdbreact';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useSelector } from "react-redux";
import _ from 'lodash'
import { ProgressBar } from "./ProgressBar";

import RadialSeparators from "./RadialSeparators";

const percentage = 100;
const boostStyle = {

    width: '12vw',
    height: '12vw',
    background: `linear-gradient(0deg, rgba(75,75,75,1) -50%, rgba(0,0,0,1) 120%)`,
    borderRadius: `300px 300px 300px 300px`,
    marginBottom: `1vw`,
    position: 'fixed',
    right: '2vw',
    bottom: 0
}
const flip = {
    transform: `rotate(0.5turn)`,
    position: `absolute`,
    height: `100%`,
}
const newStyle = {
    padding: '.5em',
    margin: 0,
}





export const ActivePlayerComponent = () => {

    const selectGameState = state => state.wsReducer['game:update_state']
    const gaming = useSelector(state => selectGameState(state))

    let activeTarget
    let playerList
    let activePlayerData
    let activeColor = 'yellow'
    let isReplay = false

    if (gaming != undefined) {
        let teamData = gaming.game.teams
        activeTarget = gaming.game.target
        playerList = gaming.players
        isReplay = gaming.game.isReplay
        activePlayerData = _.get(playerList, activeTarget)
        activeColor = gaming.game.hasTarget  ? '#' + _.toString(teamData[activePlayerData.team].color_primary) : 'yellow'
        //console.log(isReplay)
    }

    let statsNamegrad = `linear-gradient(-175deg, rgba(0,0,0,1) 0%,` +  activeColor + ` 200%)`
    let statsgrad = `linear-gradient(0deg, rgba(75,75,75,1) -50%, rgba(0,0,0,1) 120%)`

    return (
        <>
    <MDBRow className="justify-content-center fixed-bottom text-light" style={{marginBottom: '3vw'}} >
        <MDBCol size="3" className={typeof activePlayerData !== "undefined" && typeof activePlayerData.name !== "undefined" && isReplay == false ? "" : "d-none"} >
            <MDBRow >
                <MDBCol size="4" className='p-0' style={{background: activeColor, borderRadius: '.25vw 0 0 0'}}>
                    <MDBTypography  className="p-0 mb-0 overflow-hidden" style={{fontSize:'1.5vw', lineHeight: '2vw', marginLeft: '.25vw'}} >
                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.name !== "undefined" ? activePlayerData.name : 'None'}
                    </MDBTypography>
                </MDBCol>

                <MDBCol  style={{fontSize:'1.5vw', lineHeight: '2vw', textAlign: 'right', paddingRight:'.2vw', background: '#000000DD'}}>
                    <div style={{float: 'left', marginRight: '.25vw'}}>
                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.shots !== "undefined" ? activePlayerData.goals : '0'}
                    </div>
                    <div style={{letterSpacing: '.05vw', textAlign: 'left', fontSize:'1vw', lineHeight: '2vw'}} >
                        Goals
                    </div>
                </MDBCol>

                <MDBCol  style={{fontSize:'1.5vw', lineHeight: '2vw', textAlign: 'right', paddingRight:'.2vw', background: '#000000DD'}}>
                    <div style={{float: 'left', marginRight: '.25vw'}}>
                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.shots !== "undefined" ? activePlayerData.shots : '0'}
                    </div>

                    <div style={{letterSpacing: '.05vw', textAlign: 'left', fontSize:'1vw', lineHeight: '2vw'}} >
                        Shots
                    </div>
                </MDBCol>

                <MDBCol  style={{fontSize:'1.5vw', lineHeight: '2vw', textAlign: 'right', paddingRight:'.2vw', background: '#000000DD'}}>
                    <div style={{float: 'left', marginRight: '.25vw'}}>
                    {typeof activePlayerData !== "undefined" && typeof activePlayerData.assists !== "undefined" ? activePlayerData.assists : '0'}
                    </div>
                    <div style={{letterSpacing: '.05vw', textAlign: 'left', fontSize:'1vw', lineHeight: '2vw'}} >
                        Asst.
                    </div>
                </MDBCol>

                <MDBCol  style={{fontSize:'1.5vw', lineHeight: '2vw', textAlign: 'right', paddingRight:'.2vw', background: '#000000DD', borderRadius: '0 .25vw 0 0'}}>
                    <div style={{float: 'left', marginRight: '.25vw'}}>
                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.saves !== "undefined" ? activePlayerData.saves : '0'}
                    </div>

                    <div style={{letterSpacing: '.05vw', textAlign: 'left', fontSize:'1vw', lineHeight: '2vw'}} >
                        Saves
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow >
                <MDBCol className='p-0' style={{position: 'relative', borderRadius: '0 0 .25vw .25vw', overflow: 'hidden'}}>
                    <ProgressBar valuePercentage={typeof activePlayerData !== "undefined" && typeof activePlayerData.boost !== "undefined" ? activePlayerData.boost : 0}/>
                </MDBCol>
            </MDBRow>
        </MDBCol>
    </MDBRow>
    
        
    </>
    )
}