import React from "react";
import { useSelector } from "react-redux";
import { MDBIcon, MDBTypography, MDBRow, MDBCol } from 'mdbreact';
import _ from 'lodash'

export const ReplayComponent = () => {


    const selectGameState = state => state.wsReducer['game:update_state']
    const selectGoalState = state => state.wsReducer['game:goal_scored']
    const gaming = useSelector(state => selectGameState(state))
    const goal = useSelector(state => selectGoalState(state))

    let gCheck = gaming == undefined ? false : gaming.game.isReplay

    let wCheck = gaming == undefined ? false : gaming.game.hasWinner

    let replayDisplay = gCheck == true ? '' : 'd-none'

    let winnerHide = wCheck == true ? 'd-none' : 'justify-content-center fixed-bottom text-light'

    let goalspeed = _.isUndefined(goal) ? '0' : _.round(goal.goalspeed * 0.62)

    let assister = _.isUndefined(goal) ? '' : goal.assister.name

    let goalColor = _.isUndefined(goal) ? 'FFF' : gaming.game.teams[goal.scorer.teamnum].color_primary

    let goalColorGrad = `linear-gradient(0deg, #`+goalColor+` -50%, rgba(0,0,0,.80) 75%)`

    let assistDisplay = assister == '' ? 'd-none' : ''
    
    //console.log(winnerHide)
    
    let scorer = _.isUndefined(goal) ? '' : goal.scorer.name

    return (
        <>
        <MDBRow className={winnerHide} style={{marginBottom: '5vw'}} >
            <MDBCol size="4" className={replayDisplay} style={{ background: '#000000DD',borderRadius: '.25vw .25vw .25vw .25vw'}}>
                <MDBRow >
                    <MDBCol size='2' className='p-0' style={{}}>
                        <MDBTypography tag='div' className='text-danger flex-grow-1' style={{fontSize:'1.5vw', lineHeight: '2vw', textAlign: 'center'}}>
                            <MDBIcon fas icon="circle" style={{fontSize:'1.25vw', lineHeight: '1'}}/> Replay
                        </MDBTypography>
                    </MDBCol>

                    <MDBCol style={{fontSize:'1.5vw', lineHeight: '2vw', textAlign: 'center'}}>
                        <div style={{ marginRight: '.25vw', background: `#` + goalColor}}>
                        {scorer}
                        </div>   
                    </MDBCol>

                    <MDBCol className={assistDisplay} style={{fontSize:'1.5vw', lineHeight: '2vw', textAlign: 'center'}}>
                        <div style={{display:'inline-block', marginRight: '.25vw'}}>
                            <MDBIcon fas icon="hands-helping" style={{fontSize:'1.25vw', lineHeight: '1'}}/>
                        </div>
                        <div style={{letterSpacing: '.05vw', textAlign: 'left', fontSize:'1.5vw', lineHeight: '2vw', display:'inline-block',}} >
                            {assister}
                        </div>
                    </MDBCol>

                    <MDBCol size="2" style={{fontSize:'1.5vw', lineHeight: '2vw', textAlign: 'right'}}>
                        {goalspeed} MPH
                    </MDBCol>
                
                    
                    

                </MDBRow>
            </MDBCol>
        </MDBRow>
        </>
    )
}