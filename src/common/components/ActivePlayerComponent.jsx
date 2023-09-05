import React, { Component} from "react";
import { MDBRow, MDBCol, MDBTypography, MDBTable, MDBTableBody } from 'mdbreact';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useSelector } from "react-redux";
import _ from 'lodash'
import { ProgressBar } from "./ProgressBar";
import { BoostCircle } from "./BoostCircle";


import { Transition } from 'react-transition-group';
import { useRef } from 'react';

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, margin ${duration}ms ease-in-out`,
  marginBottom: '-2vw',
  marginLeft: '1vw',
  opacity: 0,
  right: '0',
  maxWidth: '55vw'
}

const transitionStyles = {
  entering: { opacity: 1, marginBottom: '1vw' },
  entered:  { opacity: 1, marginBottom: '1vw' },
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

    return (
        <>


            <Transition nodeRef={nodeRef} in={typeof activePlayerData !== "undefined" && typeof activePlayerData.name !== "undefined" && isReplay == false} timeout={duration}>
                {state => (

                    <MDBRow 
                        className="fixed-bottom text-light"
                        ref={nodeRef}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                            
                        }}
                        
                    >
                        <MDBCol className="justify-content-center text-light">
                            <MDBRow >
                                <MDBCol size='4' className='p-0 m-auto' style={{background: '#000000DD', borderRadius: '.25vw 0 0 .25vw', borderRight: `1vw solid ${activeColor}`}}>
                                    <MDBTypography  className="p-0 m-0  text-center center" style={{fontSize:'2vw'}} >
                                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.name !== "undefined" ? activePlayerData.name : 'None'}
                                    </MDBTypography>
                                </MDBCol>

                                <MDBCol  style={{fontSize:'2vw', textAlign: 'right', paddingRight:'.2vw', background: '#000000DD'}} >
                                    <div style={{float: 'left', marginRight: '.25vw'}}>
                                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.shots !== "undefined" ? activePlayerData.score : '0'}
                                    </div>
                                    <div style={{letterSpacing: '.05vw', textAlign: 'left', fontSize:'1vw', lineHeight: '2.75vw'}} >
                                        Score
                                    </div>
                                </MDBCol>

                                <MDBCol  style={{fontSize:'2vw', textAlign: 'right', paddingRight:'.2vw', background: '#000000DD'}} >
                                    <div style={{float: 'left', marginRight: '.25vw'}}>
                                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.shots !== "undefined" ? activePlayerData.goals : '0'}
                                    </div>
                                    <div style={{letterSpacing: '.05vw', textAlign: 'left', fontSize:'1vw', lineHeight: '2.75vw'}} >
                                        Goals
                                    </div>
                                </MDBCol>

                                <MDBCol style={{fontSize:'2vw', textAlign: 'right', paddingRight:'.2vw', background: '#000000DD'}}>
                                    <div style={{float: 'left', marginRight: '.25vw'}}>
                                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.shots !== "undefined" ? activePlayerData.shots : '0'}
                                    </div>

                                    <div style={{letterSpacing: '.05vw', textAlign: 'left', fontSize:'1vw', lineHeight: '2.75vw'}} >
                                        Shots
                                    </div>
                                </MDBCol>

                                <MDBCol  style={{fontSize:'2vw', textAlign: 'right', paddingRight:'.2vw', background: '#000000DD'}}>
                                    <div style={{float: 'left', marginRight: '.25vw'}}>
                                    {typeof activePlayerData !== "undefined" && typeof activePlayerData.assists !== "undefined" ? activePlayerData.assists : '0'}
                                    </div>
                                    <div style={{letterSpacing: '.05vw', textAlign: 'left', fontSize:'1vw', lineHeight: '2.75vw'}} >
                                        Asst.
                                    </div>
                                </MDBCol>

                                <MDBCol  style={{fontSize:'2vw', textAlign: 'right', paddingRight:'.2vw', background: '#000000DD', borderRadius: '0 .25vw .25vw 0'}}>
                                    <div style={{float: 'left', marginRight: '.25vw'}}>
                                        {typeof activePlayerData !== "undefined" && typeof activePlayerData.saves !== "undefined" ? activePlayerData.saves : '0'}
                                    </div>

                                    <div style={{letterSpacing: '.05vw', textAlign: 'left', fontSize:'1vw', lineHeight: '2.75vw'}} >
                                        Saves
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        
                                
                    </MDBRow>
    
            )}
        </Transition>


        <MDBRow 
            className="text-light"
            style={{
                transition: `opacity 3000ms ease-in-out, margin 3000ms ease-in-out`,
                opacity: 1,
                position: 'absolute',
                bottom: '0',
                right: '0',
                marginRight: '3vw',
                marginBottom: '3vw',
                height: '10vw',
                width: '10vw'
                
            }}
        >
            <MDBCol>
                <BoostCircle color={activeColor} valuePercentage={typeof activePlayerData !== "undefined" && typeof activePlayerData.boost !== "undefined" ? activePlayerData.boost : 0}/>   
            </MDBCol>
        </MDBRow>
        
    </>
    )
}