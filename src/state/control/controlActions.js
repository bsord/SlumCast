import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { seriesUpdate } from './controlSlice'
import { connect, disconnect } from '@giantmachines/redux-websocket';
import { MDBSwitch, MDBBtnGroup, MDBBtn, MDBCheckbox, MDBCol } from 'mdb-react-ui-kit';
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

    const seriesActive = (e) => {
        dispatch(seriesUpdate({
            series: {
                active: e
            }
        }))
    }

    const seriesType = (e) => {
        dispatch(seriesUpdate({
            series: {
                type: e
            }
        }))
    }

    const team0Score = (e) => {
        dispatch(seriesUpdate({
            series: {
                score: {
                    team0: e
                }
            }
        }))
    }
    const team1Score = (e) => {
        dispatch(seriesUpdate({
            series: {
                score: {
                    team1: e
                }
            }
        }))
    }
    let team0button3 = series.type == 5 || series.type == 7 ? <MDBBtn btn className={series.score.team0 == 3 ? "p-1 btn-outline-dark active" : "p-1"} value="3" color='dark' id='team-0-score-3' name='options' label='3' onClick={(event) => team0Score(event.target.value)}>3</MDBBtn> : null
    let team0button4 = series.type == 7 ? <MDBBtn btn className={series.score.team0 == 4 ? "p-1 btn-outline-dark active" : "p-1"} value="4" color='dark' id='team-0-score-4' name='options' label='4' onClick={(event) => team0Score(event.target.value)}>4</MDBBtn> : null
    
    let team1button3 = series.type == 5 || series.type == 7 ? <MDBBtn btn className={series.score.team1 == 3 ? "p-1 btn-outline-dark active" : "p-1"} value="3" color='dark' id='team-1-score-3' name='options' label='3' onClick={(event) => team1Score(event.target.value)}>3</MDBBtn> : null
    let team1button4 = series.type == 7 ? <MDBBtn btn className={series.score.team1 == 4 ? "p-1 btn-outline-dark active" : "p-1"} value="4" color='dark' id='team-1-score-4' name='options' label='4' onClick={(event) => team1Score(event.target.value)}>4</MDBBtn> : null

    return (
        <>
            <MDBCol md='8' offsetMd='2'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Series Config' onChange={(event) => seriesActive(event.target.checked)} />
            </MDBCol>
            <div className={series.active ? '' : 'd-none'}>
                <div className="d-grid gap-2 col-12 mx-auto">
                    <label for="series">Series Type:</label>
                    <MDBBtnGroup>
                        <MDBBtn btn className={series.type == 3 ? "p-1 btn-outline-dark active" : "p-1"} value="3" color='dark' id='series-type-bo3' name='options' label='3' onClick={(event) => seriesType(event.target.value)}>BO3</MDBBtn>
                        <MDBBtn btn className={series.type == 5 ? "p-1 btn-outline-dark active" : "p-1"} value="5" color='dark' id='series-type-bo5' name='options' label='5' onClick={(event) => seriesType(event.target.value)}>BO5</MDBBtn>
                        <MDBBtn btn className={series.type == 7 ? "p-1 btn-outline-dark active" : "p-1"} value="7" color='dark' id='series-type-bo7' name='options' label='7' onClick={(event) => seriesType(event.target.value)}>BO7</MDBBtn>
                    </MDBBtnGroup>

                    <label for="team0">Team 0 Score</label>
                    <MDBBtnGroup>
                        <MDBBtn btn className={series.score.team0 == 0 ? "p-1 btn-outline-dark active" : "p-1"} value="0" color='dark' id='team-0-score-0' name='options' label='0' onClick={(event) => team0Score(event.target.value)}>0</MDBBtn>
                        <MDBBtn btn className={series.score.team0 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="1" color='dark' id='team-0-score-1' name='options' label='1' onClick={(event) => team0Score(event.target.value)}>1</MDBBtn>
                        <MDBBtn btn className={series.score.team0 == 2 ? "p-1 btn-outline-dark active" : "p-1"} value="2" color='dark' id='team-0-score-2' name='options' label='2' onClick={(event) => team0Score(event.target.value)}>2</MDBBtn>
                        {team0button3}
                        {team0button4}
                    </MDBBtnGroup>

                    <label for="team1">Team 1 Score</label>
                    <MDBBtnGroup>
                        <MDBBtn btn className={series.score.team1 == 0 ? "p-1 btn-outline-dark active" : "p-1"} value="0" color='dark' id='team-1-score-0' name='options' label='0' onClick={(event) => team1Score(event.target.value)}>0</MDBBtn>
                        <MDBBtn btn className={series.score.team1 == 1 ? "p-1 btn-outline-dark active" : "p-1"} value="1" color='dark' id='team-1-score-1' name='options' label='1' onClick={(event) => team1Score(event.target.value)}>1</MDBBtn>
                        <MDBBtn btn className={series.score.team1 == 2 ? "p-1 btn-outline-dark active" : "p-1"} value="2" color='dark' id='team-1-score-2' name='options' label='2' onClick={(event) => team1Score(event.target.value)}>2</MDBBtn>
                        {team1button3}
                        {team1button4}
                    </MDBBtnGroup>
                </div>
            </div>
        </>
    )
}