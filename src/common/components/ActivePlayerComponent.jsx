import React, { Component } from "react";
import { MDBRow, MDBCol, MDBTypography, MDBTable, MDBTableBody,
} from 'mdb-react-ui-kit';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren,
} from "react-circular-progressbar";

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
};
const scorebug = {
    height: 600,
    width: 200,
    marginTop: `20px`,
    position: `absolute`,
};
const teambox = {
    boxShadow: `5px 0px 3px -2px rgba(33, 33, 33, 0.55)`,
};
const lightbox = {
    marginTop: `-5px`,
    width: `15%`,
    height: `8px`,
    bottom: 0
}
const flip = {
    transform: `rotate(0.5turn)`,
    position: `absolute`,
    height: `100%`,
};
const newStyle = {
    padding: 0,
    margin: 0,
    paddingTop: `1px`,
};
const team1BG = {
    backgroundColor: `rgba(66, 133, 244, 0.6)`,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
}
const team2BG = {
    backgroundColor: `rgba(255, 187, 51, 0.6)`,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
}
const pageBG = {
    width: `100%`,
    height: `100vh`,
    backgroundColor: `#a7a7a7`,
    backgroundImage: `url("https://rustdeez.com/img/screen.png")`,
};

import { BrowserRouter as Router } from "react-router-dom";






export const ActivePlayerComponent = () => {


    return (
    <MDBRow bottom className="fixed-bottom">
        <MDBCol size="4"></MDBCol>
        <MDBCol size="4"></MDBCol>
        <MDBCol size="4">
            <MDBRow
                dark
                bottom
                className={typeof this.props.parentState.activePlayerData !== "undefined" && typeof this.props.parentState.activePlayerData.name !== "undefined" ? "border border-dark white-text" : "d-none"}
                style={divStyle}>
                <MDBCol size="6" className="px-4 pt-2">
                    <MDBTypography tag="h2" variant="h2 text-center">
                        {typeof this.props.parentState.activePlayerData !== "undefined" && typeof this.props.parentState.activePlayerData.name !== "undefined" ? this.props.parentState.activePlayerData.name : 'None'}
                    </MDBTypography>
                    <MDBTable small>
                        <MDBTableBody>
                            <tr>
                                <td>
                                    <strong class="white-text">Score</strong>
                                </td>
                                <td className="text-right white-text">
                                    <strong>{typeof this.props.parentState.activePlayerData !== "undefined" && typeof this.props.parentState.activePlayerData.score !== "undefined" ? this.props.parentState.activePlayerData.score : '0'}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong class="white-text">Goals</strong>
                                </td>
                                <td className="text-right white-text">
                                    <strong>{typeof this.props.parentState.activePlayerData !== "undefined" && typeof this.props.parentState.activePlayerData.goals !== "undefined" ? this.props.parentState.activePlayerData.goals : '0'}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong class="white-text">Shots</strong>
                                </td>
                                <td className="text-right white-text">
                                    <strong>{typeof this.props.parentState.activePlayerData !== "undefined" && typeof this.props.parentState.activePlayerData.shots !== "undefined" ? this.props.parentState.activePlayerData.shots : '0'}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong class="white-text">Assists</strong>
                                </td>
                                <td className="text-right white-text">
                                    <strong>{typeof this.props.parentState.activePlayerData !== "undefined" && typeof this.props.parentState.activePlayerData.assists !== "undefined" ? this.props.parentState.activePlayerData.assists : '0'}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong class="white-text">Saves</strong>
                                </td>
                                <td className="text-right white-text">
                                    <strong>{typeof this.props.parentState.activePlayerData !== "undefined" && typeof this.props.parentState.activePlayerData.saves !== "undefined" ? this.props.parentState.activePlayerData.saves : '0'}</strong>
                                </td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </MDBCol>
                <MDBCol size="6" style={newStyle}>
                    <CircularProgressbarWithChildren
                        value={typeof this.props.parentState.activePlayerData !== "undefined" && typeof this.props.parentState.activePlayerData.boost !== "undefined" ? this.props.parentState.activePlayerData.boost : 0}
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
                            pathColor: `rgb(214, 118, 22)`,
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
                            <strong>{typeof this.props.parentState.activePlayerData !== "undefined" && typeof this.props.parentState.activePlayerData.boost !== "undefined" ? this.props.parentState.activePlayerData.boost : '0'}</strong>
                        </div>
                        <div style={{ fontSize: 25, marginTop: -5 }}>
                            <strong>{typeof this.props.parentState.activePlayerData !== "undefined" && typeof this.props.parentState.activePlayerData.speed !== "undefined" ? this.props.parentState.activePlayerData.speed : '0'}</strong> mph
                        </div>
                    </CircularProgressbarWithChildren>
                </MDBCol>
            </MDBRow>
        </MDBCol>
    </MDBRow>
    )
}