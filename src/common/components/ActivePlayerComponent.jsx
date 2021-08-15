import React, { Component } from "react";
import { MDBRow, MDBCol, MDBTypography, MDBTable, MDBTableBody } from 'mdbreact';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useSelector } from "react-redux";
import _ from 'lodash'

import RadialSeparators from "./RadialSeparators";

const percentage = 100;
const divStyle = {
    transform: `
        skewX(-1deg)
        skewY(2deg)
      `,
    width: 512,
    height: 260,
    backgroundColor: `rgba(0, 0, 0, 0.55)`,
    borderRadius: `5px 300px 300px 5px`,
    marginBottom: `40px`,
    marginLeft: `80px`,
}
const flip = {
    transform: `rotate(0.5turn)`,
    position: `absolute`,
    height: `100%`,
}
const newStyle = {
    padding: 0,
    margin: 0,
    paddingTop: `1px`,
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

    
    return (
    <MDBRow bottom className="fixed-bottom text-light">
        <MDBCol size="4"></MDBCol>
        <MDBCol size="4"></MDBCol>
        <MDBCol size="4">
            <MDBRow
                dark
                bottom
                className={typeof activePlayerData !== "undefined" && typeof activePlayerData.name !== "undefined" && isReplay == false ? "border border-dark text-light" : "d-none"}
                style={divStyle}>
                <MDBCol size="6" className="px-4 pt-2">
                    <MDBTypography tag="h2" variant="h2 text-center">
                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.name !== "undefined" ? activePlayerData.name : 'None'}
                    </MDBTypography>
                    <MDBTable small>
                        <MDBTableBody>
                            <tr>
                                <td>
                                    <strong className="text-light">Score</strong>
                                </td>
                                <td className="text-right text-light">
                                    <strong>{typeof activePlayerData !== "undefined" && typeof activePlayerData.score !== "undefined" ? activePlayerData.score : '0'}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong className="text-light">Goals</strong>
                                </td>
                                <td className="text-right text-light">
                                    <strong>{typeof activePlayerData !== "undefined" && typeof activePlayerData.goals !== "undefined" ? activePlayerData.goals : '0'}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong className="text-light">Shots</strong>
                                </td>
                                <td className="text-right text-light">
                                    <strong>{typeof activePlayerData !== "undefined" && typeof activePlayerData.shots !== "undefined" ? activePlayerData.shots : '0'}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong className="text-light">Assists</strong>
                                </td>
                                <td className="text-right text-light">
                                    <strong>{typeof activePlayerData !== "undefined" && typeof activePlayerData.assists !== "undefined" ? activePlayerData.assists : '0'}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong className="text-light">Saves</strong>
                                </td>
                                <td className="text-right text-light">
                                    <strong>{typeof activePlayerData !== "undefined" && typeof activePlayerData.saves !== "undefined" ? activePlayerData.saves : '0'}</strong>
                                </td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </MDBCol>
                <MDBCol size="6" style={newStyle}>
                    
                    <CircularProgressbarWithChildren
                        value={typeof activePlayerData !== "undefined" && typeof activePlayerData.boost !== "undefined" ? activePlayerData.boost : 0}
                        circleRatio={0.75}
                        styles={buildStyles({
                            rotation: 1 / 2,
                            strokeLinecap: "round",

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
                                    background: "#fff",
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
    )
}