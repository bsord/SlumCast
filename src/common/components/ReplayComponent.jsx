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

    let assistDisplay = assister == '' ? 'd-none' : 'mx-4'

    console.log(winnerHide)
    const style = { height: `100px`, background: `linear-gradient(0deg, rgba(75,75,75,.85) -50%, rgba(0,0,0,.85) 120%)` }
    let scorer = _.isUndefined(goal) ? '' : goal.scorer.name

    return (
        <>
            <div className={winnerHide}>
                <div className={replayDisplay} style={style}>
                    <MDBTypography tag='div' className='display-1 text-danger flex-grow-1'>
                        <MDBIcon fas icon="circle" /> Replay
                    </MDBTypography>
                    <div style={{ fontSize: `2.5vw` }}>
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