import React, { Component, setState } from "react";
import { MDBRow, MDBCol, MDBProgress } from 'mdbreact';
import _ from 'lodash'
import { useSelector, } from 'react-redux'
import { ProgressBar } from "./ProgressBar";
//'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,85,0,1) 15%, rgba(255,166,0,1) 50%, rgba(254,255,0,1) 85%, rgba(255,255,255,1) 100%)'
import { Transition } from 'react-transition-group';
import { useRef } from 'react';

const duration = 500;

const defaultStyleLeft = {
  transition: `opacity ${duration}ms ease-in-out, margin ${duration}ms ease-in-out`,
  marginLeft: '-5vw',
  opacity: 0,
  position: 'absolute', top: '12vw', marginLeft: '0', width: '15vw', fontSize:'1.5vw', lineHeight:'1'
}

const transitionStylesLeft = {
  entering: { opacity: 1, marginLeft: '1vw' },
  entered:  { opacity: 1, marginLeft: '1vw' },
  exiting:  { opacity: 0, marginLeft: '-5vw' },
  exited:  { opacity: 0, marginLeft: '-5vw' },
};

const defaultStyleRight = {
    transition: `opacity ${duration}ms ease-in-out, margin ${duration}ms ease-in-out`,
    marginRight: '-5vw',
    opacity: 0,
    position: 'absolute', top: '12vw', right: '0', marginRight: '0', width: '15vw', fontSize:'1.5vw', lineHeight:'1'
  }
  
  const transitionStylesRight = {
    entering: { opacity: 1, marginRight: '1vw' },
    entered:  { opacity: 1, marginRight: '1vw' },
    exiting:  { opacity: 0, marginRight: '-5vw' },
    exited:  { opacity: 0, marginRight: '-5vw' },
  };


export const ScoreboardComponent = () => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const series = useSelector(state => state.gamedata.series)
    const selectGameState = state => state.wsReducer['game:update_state']

    const gaming = useSelector(state => selectGameState(state))
    //console.log(gaming)


    let teamData = [{ name: 'team 0' }, { name: 'team 1' }]
    
    let teamColors = {
        team0: { primary: '#fff', secondary: '#fff' },
        team1: { primary: '#fff', secondary: '#fff' },
    }

    let team0 = []
    let team1 = []
    let hasWinner = false
    let hasTarget = false
    let isReplay = false
    if (gaming != undefined) {


        teamData = gaming.game.teams
        hasWinner = gaming.game.hasWinner
        hasTarget = gaming.game.hasTarget
        isReplay = gaming.game.isReplay
        let playerList = _.map(gaming.players)
        team0 = playerList.filter(player => player.team === 0)
        team1 = playerList.filter(player => player.team === 1)
        teamColors = {
            team0: { primary: '#' + teamData[0].color_primary, secondary: '#' + teamData[0].color_secondary },
            team1: { primary: '#' + teamData[1].color_primary, secondary: '#' + teamData[1].color_secondary },
        }

    }

    return (
        <>
            <Transition nodeRef={leftRef} in={!hasWinner && !isReplay && hasTarget} timeout={duration}>
                {state => (
                    <MDBRow ref={leftRef}
                        style={{
                            ...defaultStyleLeft,
                            ...transitionStylesLeft[state],
                            
                        }}
                        
                    >
                        <MDBCol className="p-0 ">
                            {team0.map(player=>(
                                <div style={{marginBottom: '.5vw'}} className={"p-0 text-light"}>
                                    <div style={{padding:'.25vw',  background:  "#000000EE", borderRadius: ' 0 .25vw 0 0'}}>
                                        
                                        <div style={{
                                            color: 'white',
                                            fontSize: '1.5vw',
                                            marginRight: '.5vw',
                                            position: 'absolute',
                                            right: 0,
                                            lineHeight: 1,
                                            }}
                                        >
                                            {player.boost}
                                        </div>
                                        <div style={{
                                        marginLeft: '.3vw'
                                    }}>
                                        {player.name}
                                    </div>
                                        
                                    </div>
                                    
                                    <div style={{  overflow: 'hidden',borderRadius: '0 0 .25vw 0'}}>
                                        
                                        <ProgressBar valuePercentage={player.boost}  color={teamColors.team0.primary} />
                                    </div>
                                </div>
                            ))}
                        </MDBCol>
                    </MDBRow>

                )}
            </Transition>

            <Transition nodeRef={leftRef} in={!hasWinner && !isReplay && hasTarget} timeout={duration}>
                {state => (
                    <MDBRow ref={leftRef}
                        style={{
                            ...defaultStyleRight,
                            ...transitionStylesRight[state],
                            
                        }}
                        
                    >
                        <MDBCol className="p-0"  >
                            {team1.map(player=>(
                                <div style={{marginBottom: '.5vw'}}  className={"p-0 text-light"}>
                                    <div style={{padding:'.25vw',  background: "#000000EE", borderRadius: '.25vw 0 0 0'}}>
                                    <div style={{
                                        color: 'white',
                                        fontSize: '1.5vw',
                                        marginRight: '.5vw',
                                        position: 'absolute',
                                        right: 0,
                                        lineHeight: 1,
                                        }}
                                    >
                                        {player.name}
                                    </div>
                                    <div style={{
                                        marginLeft: '.3vw'
                                    }}>
                                        {player.boost}
                                    </div>
                                    
                                    </div>
                                    <div style={{  overflow: 'hidden', borderRadius: '0 0 0 .25vw'}}>
                                        <ProgressBar valuePercentage={player.boost} color={teamColors.team1.primary}  />
                                    </div>
                                </div>
                            ))}
                        </MDBCol>
                    </MDBRow>
                )}
            </Transition>
        </>
    )

}

