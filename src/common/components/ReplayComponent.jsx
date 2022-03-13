import React from "react";
import { useSelector } from "react-redux";
import { MDBIcon, MDBTypography } from 'mdbreact';
import _ from 'lodash'

export const ReplayComponent = () => {


    const selectGameState = state => state.wsReducer['game:update_state']
    const selectGoalState = state => state.wsReducer['game:goal_scored']
    const gaming = useSelector(state => selectGameState(state))
    const goal = useSelector(state => selectGoalState(state))

    let gCheck = gaming == undefined ? false : gaming.game.isReplay

    let wCheck = gaming == undefined ? false : gaming.game.hasWinner

    let replayDisplay = gCheck == true ? 'w-100 fixed-bottom text-light p-2 d-flex align-items-center' : 'd-none'

    let winnerHide = wCheck == true ? 'd-none' : ''

    let goalspeed = _.isUndefined(goal) ? '0' : _.round(goal.goalspeed * 0.62)

    let assister = _.isUndefined(goal) ? '' : goal.assister.name

    //let goalColor = _.isUndefined(goal) ? 'FFF' : gaming.game.teams[goal.scorer.teamnum].color_primary
    //let goalColorGrad = `linear-gradient(0deg, #`+goalColor+` -50%, rgba(0,0,0,.80) 75%)`

    let assistDisplay = assister == '' ? 'd-none' : 'mx-4'
    
    console.log(winnerHide)
    
    let scorer = _.isUndefined(goal) ? '' : goal.scorer.name

    return (
        <>
            <div className={winnerHide}>
                <div className={replayDisplay} style={{background:  '#fff'}}>
                    <MDBTypography tag='div' className='text-danger flex-grow-1' style={{fontSize:'3vw', paddingLeft: '.75vw'}}>
                        <MDBIcon fas icon="circle" /> Replay
                    </MDBTypography>
                    <div style={{ fontSize: `3vw` }}>
                        <span className="mx-4">
                            <MDBIcon fas icon="futbol" /> {scorer}
                        </span>
                        <span className={assistDisplay}>
                            <MDBIcon fas icon="hands-helping" /> {assister}
                        </span>
                        <span className="mx-4">
                            <MDBIcon fas icon="wind" /> {goalspeed} KPH
                        </span>
                    </div>
                </div>
        </div>
        </>
    )
}