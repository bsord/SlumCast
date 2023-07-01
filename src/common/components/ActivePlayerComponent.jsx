import React, { Component} from "react";
import { MDBRow, MDBCol, MDBTypography, MDBTable, MDBTableBody } from 'mdbreact';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useSelector } from "react-redux";
import _ from 'lodash'
import { ProgressBar } from "./ProgressBar";


import { Transition } from 'react-transition-group';
import { useRef } from 'react';

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, margin ${duration}ms ease-in-out`,
  marginBottom: '-2vw',
  opacity: 0,
  
}

const transitionStyles = {
  entering: { opacity: 1, marginBottom: '3vw' },
  entered:  { opacity: 1, marginBottom: '3vw' },
  exiting:  { opacity: 0, marginBottom: '-2vw' },
  exited:  { opacity: 0, marginBottom: '-2vw' },
};


export const ActivePlayerComponent = () => {
    const nodeRef = useRef(null);
    const progressRef = useRef(null)
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


            <Transition nodeRef={nodeRef} in={typeof activePlayerData !== "undefined" && typeof activePlayerData.name !== "undefined" && isReplay == false} timeout={duration}>
                {state => (

                    <MDBRow 
                        className="justify-content-center fixed-bottom text-light"
                        ref={nodeRef}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                            
                        }}
                    >
                        <MDBCol size="3" >
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
                                    <ProgressBar ref={progressRef} valuePercentage={typeof activePlayerData !== "undefined" && typeof activePlayerData.boost !== "undefined" ? activePlayerData.boost : 0}/>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
    
            )}
        </Transition>
    </>
    )
}