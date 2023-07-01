import React, { Component, setState } from "react";
import { MDBRow, MDBCol, MDBProgress } from 'mdbreact';
import _ from 'lodash'
import { useSelector, } from 'react-redux'
import { ProgressBar } from "./ProgressBar";
//'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,85,0,1) 15%, rgba(255,166,0,1) 50%, rgba(254,255,0,1) 85%, rgba(255,255,255,1) 100%)'

let showEndScreen = false
let triggeredEndScreen = false

export const ScoreboardComponent3 = () => {

    const series = useSelector(state => state.gamedata.series)
    const selectGameState = state => state.wsReducer['game:update_state']

    const selectInitializedState = state => state.wsReducer['game:initialized']
    const initialized = useSelector(state => selectInitializedState(state))

    const selectEndedState = state => state.wsReducer['game:match_ended']
    const ended = useSelector(state => selectEndedState(state))

    const selectCreatedState = state => state.wsReducer['game:match_created']
    const created = useSelector(state => selectCreatedState(state))

    const gaming = useSelector(state => selectGameState(state))



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
    let isKickOff = false
    let isBeginning = false
    let bgGrad = `linear-gradient(135deg, ` +  teamColors.team0.primary + ` -25%,` +  teamColors.team1.primary + ` 125%)`
    if (gaming != undefined) {


        teamData = gaming.game.teams
        hasWinner = gaming.game.hasWinner
        hasTarget = gaming.game.hasTarget
        isReplay = gaming.game.isReplay
        isKickOff = !hasTarget && !hasWinner && !isReplay && initialized && initialized.match_guid === gaming.match_guid
        isBeginning = initialized && initialized.match_guid !== gaming.match_guid
        let playerList = _.map(gaming.players)
        team0 = playerList.filter(player => player.team === 0)
        team1 = playerList.filter(player => player.team === 1)
        teamColors = {
            team0: { primary: '#' + teamData[0].color_primary, secondary: '#' + teamData[0].color_secondary },
            team1: { primary: '#' + teamData[1].color_primary, secondary: '#' + teamData[1].color_secondary },
        }
        bgGrad = `linear-gradient(135deg, ` +  teamColors.team0.primary + ` -25%,` +  teamColors.team1.primary + ` 125%)`

        if(!triggeredEndScreen && ended && ended.match_guid === gaming.match_guid){
            triggeredEndScreen = true
            setTimeout(()=>{
                showEndScreen = true
            }, 7000)
        }
        if(ended && ended.match_guid !== gaming.match_guid){
            triggeredEndScreen = false
            showEndScreen = false
        }
    
}

    return (
        <>
            <MDBRow style={{position: 'absolute', bottom: '25vw', marginLeft: '0', width: '15vw', fontSize:'1.5vw', lineHeight:'1'}} className={ isBeginning  ? "p-0 text-light" : "d-none"} >
                <MDBCol className="p-0" style={{background: 'green'}}>
                    Match is about to begin
                </MDBCol>
            </MDBRow>
            <MDBRow style={{position: 'absolute', bottom: '25vw', marginLeft: '0', width: '15vw', fontSize:'1.5vw', lineHeight:'1'}} className={ isKickOff  ? "d-none" : "d-none"} >
                <MDBCol className="p-0" style={{background: 'green'}}>
                    Kickoff
                </MDBCol>
            </MDBRow>
            <MDBRow style={{position: 'absolute', top: '0', zIndex: -200, left: '0', width: '100%', fontSize:'1.5vw', lineHeight:'1', background: bgGrad}} className={ showEndScreen ? "p-0 m-0 text-light h-100 justify-content-center" : "d-none"} >
                <MDBCol className="p-0" size='8' style={{position: 'absolute', top: '10vw', fontSize:'4vw'}}>
                    <MDBRow style={{textAlign: 'center', marginBottom: '1vw', fontSize:'2.5vw', borderBottom: '6px solid #00000088'}}>
                        {team0.map(player=>(<MDBCol>{player.name}</MDBCol>))}
                        <MDBCol></MDBCol>
                        {team1.map(player=>(<MDBCol>{player.name}</MDBCol>))}
                    </MDBRow>
                    <MDBRow style={{textAlign: 'center', marginBottom: '1vw', borderBottom: '2px solid #00000088'}}>
                        {team0.map(player=>(<MDBCol>{player.score}</MDBCol>))}
                        <MDBCol style={{textAlign: 'center', fontSize:'2vw', lineHeight: '4vw'}}>
                            score
                        </MDBCol>
                        {team1.map(player=>(<MDBCol>{player.score}</MDBCol>))}
                    </MDBRow>
                    <MDBRow style={{textAlign: 'center', marginBottom: '1vw', borderBottom: '2px solid #00000088'}}>
                        {team0.map(player=>(<MDBCol>{player.goals}</MDBCol>))}
                        <MDBCol style={{textAlign: 'center', fontSize:'2vw', lineHeight: '4vw'}}>
                            goals
                        </MDBCol>
                        {team1.map(player=>(<MDBCol>{player.goals}</MDBCol>))}
                    </MDBRow>
                    <MDBRow style={{textAlign: 'center', marginBottom: '1vw', borderBottom: '2px solid #00000088'}}>
                        {team0.map(player=>(<MDBCol>{player.assists}</MDBCol>))}
                        <MDBCol style={{textAlign: 'center', fontSize:'2vw', lineHeight: '4vw'}}>
                            assists
                        </MDBCol>
                        {team1.map(player=>(<MDBCol>{player.assists}</MDBCol>))}
                    </MDBRow>
                    <MDBRow style={{textAlign: 'center', marginBottom: '1vw', borderBottom: '2px solid #00000088'}}>
                        {team0.map(player=>(<MDBCol>{player.saves}</MDBCol>))}
                        <MDBCol style={{textAlign: 'center', fontSize:'2vw', lineHeight: '4vw'}}>
                            saves
                        </MDBCol>
                        {team1.map(player=>(<MDBCol>{player.saves}</MDBCol>))}
                    </MDBRow>
                    <MDBRow style={{textAlign: 'center', marginBottom: '1vw', borderBottom: '2px solid #00000088'}}>
                        {team0.map(player=>(<MDBCol>{player.shots}</MDBCol>))}
                        <MDBCol style={{textAlign: 'center', fontSize:'2vw', lineHeight: '4vw'}}>
                            shots
                        </MDBCol>
                        {team1.map(player=>(<MDBCol>{player.shots}</MDBCol>))}
                    </MDBRow>
                    <MDBRow style={{textAlign: 'center', marginBottom: '1vw', borderBottom: '2px solid #00000088'}}>
                        {team0.map(player=>(<MDBCol>{player.demos}</MDBCol>))}
                        <MDBCol style={{textAlign: 'center',fontSize:'2vw', lineHeight: '4vw'}}>
                            demos
                        </MDBCol>
                        {team1.map(player=>(<MDBCol>{player.demos}</MDBCol>))}
                    </MDBRow>
                    <MDBRow style={{textAlign: 'center', marginBottom: '1vw', borderBottom: '2px solid #00000088'}}>
                        {team0.map(player=>(<MDBCol>{player.touches}</MDBCol>))}
                        <MDBCol style={{textAlign: 'center',  fontSize:'2vw', lineHeight: '4vw'}}>
                            touches
                        </MDBCol>
                        {team1.map(player=>(<MDBCol>{player.touches}</MDBCol>))}
                    </MDBRow>
                    
                </MDBCol>
            </MDBRow>

        </>
    )

}

