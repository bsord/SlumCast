import React, { Component, setState } from "react";
import { MDBRow, MDBCol, MDBProgress } from 'mdbreact';
import _ from 'lodash'
import { useSelector, } from 'react-redux'
import { ProgressBar } from "./ProgressBar";
//'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,85,0,1) 15%, rgba(255,166,0,1) 50%, rgba(254,255,0,1) 85%, rgba(255,255,255,1) 100%)'



export const ScoreboardComponent = () => {

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
    if (gaming != undefined) {


        teamData = gaming.game.teams
        hasWinner = gaming.game.hasWinner
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
            <MDBRow style={{position: 'absolute', bottom: '10vw', marginLeft: '0', width: '15vw', fontSize:'1.5vw', lineHeight:'1'}} className={ hasWinner == false ? "p-0 text-light" : "d-none"} >
            <MDBCol className="p-0">
                    {team0.map(player=>(
                        <div style={{marginBottom: '.5vw'}}>
                            <div style={{padding:'.25vw',  background: teamColors.team0.primary, borderRadius: ' 0 .25vw 0 0'}}>
                                {player.name}
                            </div>
                            <div style={{  overflow: 'hidden',borderRadius: '0 0 .25vw 0'}}>
                                <ProgressBar valuePercentage={player.boost} />
                            </div>
                        </div>
                    ))}
                </MDBCol>
            </MDBRow>
            <MDBRow  style={{position: 'absolute', bottom: '10vw', right: '0', marginRight: '0', width: '15vw', fontSize:'1.5vw', lineHeight:'1'}} className='text-light'>
                <MDBCol className="p-0" style={{}} >
                    {team1.map(player=>(
                        <div style={{marginBottom: '.5vw'}}>
                            <div style={{padding:'.25vw',  background: teamColors.team1.primary, borderRadius: '.25vw 0 0 0'}}>
                                {player.name}
                            </div>
                            <div style={{  overflow: 'hidden', borderRadius: '0 0 0 .25vw'}}>
                                <ProgressBar valuePercentage={player.boost}  />
                            </div>
                        </div>
                    ))}
                </MDBCol>
            </MDBRow>
        </>
    )

}

