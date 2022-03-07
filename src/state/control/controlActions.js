import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { seriesUpdate, resetSeries } from './controlSlice'
import { connect, disconnect } from '@giantmachines/redux-websocket';
import { MDBRow, MDBBtnGroup, MDBBtn, MDBCheckbox, MDBCol, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBContainer } from 'mdb-react-ui-kit';
import _ from 'lodash'
import store from '../store'




export function Connect() {
    //store.dispatch(connect(''));
    /*const connect = (url = 'ws://localhost:49122') => {
        type: 'WEBSOCKET:CONNECT',
        payload; { url }
    }*/
    return (
        <MDBBtn block onClick={() => store.dispatch(connect('ws://localhost:49122'))}>
            Connect
        </MDBBtn>
    )
}


export function Disconnect() {
    //const wsDisconnect = () => store.dispatch(disconnect()); 
    //console.log('wsDisconnect') 
    return (
        <MDBBtn block onClick={() => store.dispatch(disconnect())}>
            Disconnect
        </MDBBtn>
    )
}


export function SeriesConfig() {

    const dispatch = useDispatch()
    const series = useSelector(state => state.gamedata.series)

    const selectGameState = state => state.wsReducer['game:update_state']
    const gaming = useSelector(state => selectGameState(state))

    let team0name = _.isUndefined(gaming) ? 'Team 0' : gaming.game.teams[0].name
    let team1name = _.isUndefined(gaming) ? 'Team 1' : gaming.game.teams[1].name

    let update = load => dispatch(seriesUpdate({ series: load }))

    const scoreUpdate = (team, gamenumber) => {

        let payload = {
            games: {
            }
        }

        if (team == 0) {

            let score = { team0: 1, team1: 0 }

            update({ games: _.set(payload.games, 'game' + gamenumber, score, Object) })


        } else if (team == 1) {

            let score = { team0: 0, team1: 1 }

            update({ games: _.set(payload.games, 'game' + gamenumber, score, Object) })

        } else {
            console.log('score update error')
            console.log('team: ' + team)
            console.log('gamenumber: ' + gamenumber)

        }

    }

    const all = series.type == 3 || series.type == 5 || series.type == 7
    const fiveSeven = series.type == 5 || series.type == 7
    const seven = series.type == 7


    let team0button3 = all ? <MDBBtn btn className={series.games.game3.team0 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="3" color='dark' id='team-0-score-3' name='options' label='3' onClick={(e) => scoreUpdate(0, e.target.value)}>3</MDBBtn> : null
    let team0button4 = fiveSeven ? <MDBBtn btn className={series.games.game4.team0 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="4" color='dark' id='team-0-score-4' name='options' label='4' onClick={(e) => scoreUpdate(0, e.target.value)}>4</MDBBtn> : null
    let team0button5 = fiveSeven ? <MDBBtn btn className={series.games.game5.team0 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="5" color='dark' id='team-0-score-5' name='options' label='5' onClick={(e) => scoreUpdate(0, e.target.value)}>5</MDBBtn> : null
    let team0button6 = seven ? <MDBBtn btn className={series.games.game6.team0 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="6" color='dark' id='team-0-score-6' name='options' label='6' onClick={(e) => scoreUpdate(0, e.target.value)}>6</MDBBtn> : null
    let team0button7 = seven ? <MDBBtn btn className={series.games.game7.team0 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="7" color='dark' id='team-0-score-7' name='options' label='7' onClick={(e) => scoreUpdate(0, e.target.value)}>7</MDBBtn> : null


    let team1button3 = all ? <MDBBtn btn className={series.games.game3.team1 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="3" color='dark' id='team-1-score-3' name='options' label='3' onClick={(e) => scoreUpdate(1, e.target.value)}>3</MDBBtn> : null
    let team1button4 = fiveSeven ? <MDBBtn btn className={series.games.game4.team1 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="4" color='dark' id='team-1-score-4' name='options' label='4' onClick={(e) => scoreUpdate(1, e.target.value)}>4</MDBBtn> : null
    let team1button5 = fiveSeven ? <MDBBtn btn className={series.games.game5.team1 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="5" color='dark' id='team-1-score-5' name='options' label='5' onClick={(e) => scoreUpdate(1, e.target.value)}>5</MDBBtn> : null
    let team1button6 = seven ? <MDBBtn btn className={series.games.game6.team1 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="6" color='dark' id='team-1-score-6' name='options' label='6' onClick={(e) => scoreUpdate(1, e.target.value)}>6</MDBBtn> : null
    let team1button7 = seven ? <MDBBtn btn className={series.games.game7.team1 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="7" color='dark' id='team-1-score-7' name='options' label='7' onClick={(e) => scoreUpdate(1, e.target.value)}>7</MDBBtn> : null


    return (
        <>
            <MDBCol md='8' offsetMd='2'>
                <MDBCheckbox name='flexCheck' value='' id='SeriesActive' label='Series Active' onChange={(e) => update({ active: e.target.checked })} />
            </MDBCol>
            <MDBCol md='8' offsetMd='2' className={series.active ? '' : 'd-none'}>
                <MDBCheckbox name='flexCheck' value='' id='SeriesText' label='Series as text' onChange={(e) => update({ text: e.target.checked })} />
            </MDBCol>
            <MDBCol md='8' offsetMd='2' className={series.active ? '' : 'd-none'}>
                <MDBCheckbox name='flexCheck' value='' id='SeriesLights' label='Series as lights' onChange={(e) => update({ lights: e.target.checked })} />
            </MDBCol>

            <div className={series.active ? '' : 'd-none'}>
                <div className="d-grid gap-2 col-12 mx-auto">
                    <hr />
                    <label for="series">Series Type:</label>
                    <MDBCol md='8' offsetMd='2' className={series.active ? '' : 'd-none'}>
                        <MDBCheckbox name='flexCheck' value='' id='BestOf' label='Best Of' onChange={(e) => update({ bestof: e.target.checked })} />
                    </MDBCol>
                    <MDBBtnGroup>
                        <MDBBtn btn className={series.type == 3 ? "p-1 btn-outline-dark active" : "p-1"} value="3" color='dark' id='series-type-bo3' name='options' label='3' onClick={(e) => update({ type: e.target.value })}>3 Games</MDBBtn>
                        <MDBBtn btn className={series.type == 5 ? "p-1 btn-outline-dark active" : "p-1"} value="5" color='dark' id='series-type-bo5' name='options' label='5' onClick={(e) => update({ type: e.target.value })}>5 Games</MDBBtn>
                        <MDBBtn btn className={series.type == 7 ? "p-1 btn-outline-dark active" : "p-1"} value="7" color='dark' id='series-type-bo7' name='options' label='7' onClick={(e) => update({ type: e.target.value })}>7 Games</MDBBtn>
                    </MDBBtnGroup>

                    <label for="team0">{team0name} Score</label>
                    <MDBBtnGroup>
                        <MDBBtn btn className={series.games.game1.team0 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="1" color='dark' id='team-0-score-1' name='options' label='1' onClick={(e) => scoreUpdate(0, e.target.value)}>1</MDBBtn>
                        <MDBBtn btn className={series.games.game2.team0 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="2" color='dark' id='team-0-score-2' name='options' label='2' onClick={(e) => scoreUpdate(0, e.target.value)}>2</MDBBtn>
                        {team0button3}
                        {team0button4}
                        {team0button5}
                        {team0button6}
                        {team0button7}
                    </MDBBtnGroup>

                    <label for="team1">{team1name} Score</label>
                    <MDBBtnGroup>
                        <MDBBtn btn className={series.games.game1.team1 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="1" color='dark' id='team-1-score-1' name='options' label='1' onClick={(e) => scoreUpdate(1, e.target.value)}>1</MDBBtn>
                        <MDBBtn btn className={series.games.game2.team1 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="2" color='dark' id='team-1-score-2' name='options' label='2' onClick={(e) => scoreUpdate(1, e.target.value)}>2</MDBBtn>
                        {team1button3}
                        {team1button4}
                        {team1button5}
                        {team1button6}
                        {team1button7}
                    </MDBBtnGroup>

                </div>
            </div>
        </>
    )
}

export function ResestSeries() {
    const dispatch = useDispatch()

    

    const [optSmModal, setOptSmModal] = useState(false);
    const series = useSelector(state => state.gamedata.series)
    const toggleShow = () => setOptSmModal(!optSmModal);

    const reset = () => { 
        dispatch(resetSeries())
        toggleShow()
    }

    return (
        <div className={series.active ? '' : 'd-none'}>
            <hr className="mt-3" />
            <MDBBtn color='dark' onClick={toggleShow}>Reset Series</MDBBtn>
            <MDBModal show={optSmModal} tabIndex='-1' getOpenState={(e: any) => setOptSmModal(e)}>
                <MDBModalDialog size='sm'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Reset Series</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>Are you sure?</MDBModalBody>
                        <MDBModalFooter>
                            <MDBContainer fluid>
                                <MDBRow>
                                <MDBCol size="6"><MDBBtn btn className="" color='dark' id='resetSeries' onClick={toggleShow}>No</MDBBtn></MDBCol>
                                <MDBCol size="6"><MDBBtn btn className="" outline color='dark' id='resetSeries' onClick={reset}>Yes</MDBBtn></MDBCol></MDBRow>
                                </MDBContainer>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>


        </div>
    )
}