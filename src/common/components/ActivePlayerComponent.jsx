import React, { Component } from "react";
import { MDBRow, MDBCol, MDBTypography, MDBTable, MDBTableBody } from 'mdbreact';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useSelector } from "react-redux";
import _ from 'lodash'

import RadialSeparators from "./RadialSeparators";

const percentage = 100;
const boostStyle = {

    width: 256,
    height: 256,
    background: `linear-gradient(0deg, rgba(75,75,75,1) -50%, rgba(0,0,0,1) 120%)`,
    borderRadius: `300px 300px 300px 300px`,
    marginBottom: `40px`,
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
    <MDBRow className="fixed-bottom text-light">
        <MDBCol size="6" className={typeof activePlayerData !== "undefined" && typeof activePlayerData.name !== "undefined" && isReplay == false ? "" : "d-none"} >
            <MDBRow  style={{background: '#333', borderBottom: '5px solid ' + activeColor, fontSize:'1.5em', lineHeight: '2.5em' }} className="clipped-left">
                <MDBCol size="3" className='p-0'>
                    <MDBTypography  className="px-5 p-0 mb-0" style={{fontSize:'2em', lineHeight: '1.25em', background: statsNamegrad}} >
                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.name !== "undefined" ? activePlayerData.name : 'None'}
                    </MDBTypography>
                </MDBCol>
                <MDBCol size="9" style={{background: statsgrad}} className='px-3' >
                    <MDBRow>
                        <MDBCol size="2">
                            <MDBRow>
                                <MDBCol  style={{fontSize:'2em', lineHeight: '1.25em', textAlign: 'right', paddingRight:'.1em'}}>
                                    <strong>
                                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.score !== "undefined" ? activePlayerData.score : '0'}
                                    </strong>
                                </MDBCol>
                                <MDBCol style={{textAlign: 'left', paddingLeft:'.1em'}}>
                                    <div style={{}} >
                                        Score
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol size="2">
                            <MDBRow>
                                <MDBCol size='4' style={{fontSize:'2em', lineHeight: '1.25em', textAlign: 'right', paddingRight:'.1em'}}>
                                    <strong>
                                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.shots !== "undefined" ? activePlayerData.shots : '0'}
                                    </strong>
                                </MDBCol>
                                <MDBCol style={{textAlign: 'left', paddingLeft:'.1em'}}>
                                    <div style={{}} >
                                        Goals
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol size="2">
                            <MDBRow>
                                <MDBCol size='4' style={{fontSize:'2em', lineHeight: '1.25em', textAlign: 'right', paddingRight:'.1em'}}>
                                    <strong>
                                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.shots !== "undefined" ? activePlayerData.shots : '0'}
                                    </strong>
                                </MDBCol>
                                <MDBCol style={{textAlign: 'left', paddingLeft:'.1em'}}>
                                    <div style={{}} >
                                        Shots
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol size="2">
                            <MDBRow>
                                <MDBCol size='4' style={{fontSize:'2em', lineHeight: '1.25em', textAlign: 'right', paddingRight:'.1em'}}>
                                    <strong>
                                    {typeof activePlayerData !== "undefined" && typeof activePlayerData.assists !== "undefined" ? activePlayerData.assists : '0'}
                                    </strong>
                                </MDBCol>
                                <MDBCol style={{textAlign: 'left', paddingLeft:'.1em'}}>
                                    <div style={{}} >
                                        Assists
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol size="2">
                            <MDBRow>
                                <MDBCol size='4' style={{fontSize:'2em', lineHeight: '1.25em', textAlign: 'right', paddingRight:'.1em'}}>
                                    <strong>
                                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.saves !== "undefined" ? activePlayerData.saves : '0'}
                                    </strong>
                                </MDBCol>
                                <MDBCol style={{textAlign: 'left', paddingLeft:'.1em'}}>
                                    <div style={{}} >
                                        Saves
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBCol>
    </MDBRow>
    <MDBRow className="fixed-bottom text-light">
        <MDBCol size="10"></MDBCol>
        
        <MDBCol size="2">
            <MDBRow
                dark
                bottom
                className={typeof activePlayerData !== "undefined" && typeof activePlayerData.name !== "undefined" && isReplay == false ? "border border-dark text-light" : "d-none"}
                style={boostStyle}>
                
                <MDBCol size="12" style={newStyle}>
                    
                    <CircularProgressbarWithChildren
                        value={typeof activePlayerData !== "undefined" && typeof activePlayerData.boost !== "undefined" ? activePlayerData.boost : 0}
                        circleRatio={0.75}
                        styles={buildStyles({
                            rotation: 1 / 2,
                            strokeLinecap: "butt",

                            // Text size
                            textSize: "25px",

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.1,

                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',

                            // Colors
                            pathColor: activeColor, //CHANGE TO TEAM COLOR
                            textColor: "#FFF",
                            trailColor: "#9b9b9b",
                            backgroundColor: "#3e98c7",
                        })}
                    >
                        <div style={flip}>
                            <RadialSeparators
                                count={10}
                                style={{
                                    background: "rgba(0,0,0,.5)",
                                    width: "2px",
                                    // This needs to be equal to props.strokeWidth
                                    height: `${8}%`,
                                }}
                            />
                        </div>
                        <div
                            style={{ fontSize: 80, fontWeight: 300, marginTop: -5 }}
                        >
                            <strong>{typeof activePlayerData !== "undefined" && typeof activePlayerData.boost !== "undefined" ? activePlayerData.boost : '0'}</strong>
                        </div>
                        <div style={{ fontSize: 25, marginTop: -5 }}>
                            <strong>{typeof activePlayerData !== "undefined" && typeof activePlayerData.speed !== "undefined" ? activePlayerData.speed : '0'}</strong> mph
                        </div>
                    </CircularProgressbarWithChildren>
                </MDBCol>
            </MDBRow>
        </MDBCol>
    </MDBRow>
    </>
    )
}