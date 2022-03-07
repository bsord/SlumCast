import React, { Component, setState } from "react";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader, MDBRow, MDBContainer, MDBCol, MDBDataTable, } from 'mdbreact';
import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import { connect, disconnect } from '@giantmachines/redux-websocket';
import store from "../../../state/store";
import { createSelector } from 'reselect'
import { SeriesScore } from '../../../common/components/SeriesScore'
import { Team0lights, Team1lights } from '../../../common/components/SeriesLights'




export const ScoreboardComponent = () => {

    const series = useSelector(state => state.gamedata.series)
    const selectGameState = state => state.wsReducer['game:update_state']

    const gaming = useSelector(state => selectGameState(state))
    //console.log(gaming)


    let teamData = [{ name: 'team 0' }, { name: 'team 1' }]
    let time = '00:00'
    let sbData = {
        columns: [
            {
                label: 'Team Name',
                field: 'teamname',
                sort: `asc`
            },
            {
                label: 'Name',
                field: 'name',
                sort: `asc`
            },
            {
                label: 'Score',
                field: 'score',
                sort: `asc`
            },
            {
                label: 'MVPR',
                field: 'mvpr',
            },
            {
                label: 'Goals',
                field: 'goals'
            },
            {
                label: 'Assists',
                field: 'assists'
            },
            {
                label: 'Saves',
                field: 'saves'
            },
            {
                label: 'Shots',
                field: 'shots'
            },
        ]
    }
    let teamColors = {
        team0: { primary: '#fff', secondary: '#fff' },
        team1: { primary: '#fff', secondary: '#fff' },
    }

    //console.log(teamColors)

    //const updateThangs = (e) => {}

    if (gaming != undefined) {


        teamData = gaming.game.teams
        //console.log(teamData)

        let gameTime = gaming.game.time_seconds
        let round = Math.ceil(gameTime)
        function myTime(time) {
            var min = ~~((time % 3600) / 60);
            var sec = time % 60;
            var sec_min = "";
            sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
            sec_min += "" + sec;
            return sec_min;
        }

        time = myTime(round)
        let blueName = _.get(teamData, '[0].name')
        let orangeName = _.get(teamData, '[1].name')

        let playerList = _.map(gaming.players)

        const rth = (e) => {
            return _.round(e, 3)
        }
        const mvpr = (goals, assists, saves, shots) => {
            let e = ((goals * 1) + (assists * 0.75) + (saves * 0.6) + (shots / 3))
            return rth(e)
        }



        teamColors = {
            team0: { primary: '#' + teamData[0].color_primary, secondary: '#' + teamData[0].color_secondary },
            team1: { primary: '#' + teamData[1].color_primary, secondary: '#' + teamData[1].color_secondary },
        }

        //console.log(teamColors)

        let result = playerList.map(player => (
            {
                //teamname: [<span pill className={player.team > 0 ? "badge warning badge-warning badge-pill" : "badge primary badge-primary badge-pill"}>Team {player.team} </span>],
                teamname: player.team < 1 ? blueName : orangeName,
                name: player.name,
                score: player.score,
                mvpr: mvpr(player.goals, player.assists, player.saves, player.shots),
                goals: player.goals,
                assists: player.assists,
                saves: player.saves,
                shots: player.shots
            }
        ))

        sbData = {
            columns: [
                {
                    label: 'Team Name',
                    field: 'teamname',
                    sort: `asc`
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: `asc`
                },
                {
                    label: 'Score',
                    field: 'score',
                    sort: `asc`
                },
                {
                    label: 'MVPR',
                    field: 'mvpr',
                },
                {
                    label: 'Goals',
                    field: 'goals'
                },
                {
                    label: 'Assists',
                    field: 'assists'
                },
                {
                    label: 'Saves',
                    field: 'saves'
                },
                {
                    label: 'Shots',
                    field: 'shots'
                },
            ],
            rows: _.sortBy(result, 'teamname')
        }


    }
    else {
        //console.log(dfetch)
        //console.log(teamData)
        //console.log(time)
        //console.log(sbData)
    }
    return (

        <MDBCol size="">
            <MDBCard border='light' style={{ backgroundColor: '#BDBDBD' }}>
                <MDBCardHeader color="elegant-color lighten-1">Current Game Info</MDBCardHeader>
                <MDBCardBody>

                    <MDBCol size="12" className={series.active ? "mb-1" : "d-none"} >
                        <SeriesScore /> {series.text ? "(showing)" : "(not showing)"}
                        <hr className="p-0 m-1"/>


                        <MDBRow>
                            <MDBCol size="5">
                                <Team0lights />
                            </MDBCol>
                            <MDBCol size="2"></MDBCol>
                            <MDBCol size="5">
                                <Team1lights />
                            </MDBCol>
                        </MDBRow>


                    </MDBCol>

                    <div className="border border-dark mb-1">
                        <MDBContainer className="text-center m-0 p-0">
                            <MDBRow className="m-0 p-0">
                                <MDBCol size="5" className="m-0 p-0">
                                    <MDBRow className="m-0 p-0">
                                        <MDBCol size="9" className="m-0 p-0 " style={{ backgroundColor: teamColors.team0.primary }}>{typeof teamData[0] && teamData[0].name ? teamData[0].name : '0'}  </MDBCol>
                                        <MDBCol size="3" className="m-0 p-0 bg-primary-dark" style={{ backgroundColor: teamColors.team0.secondary }} >{typeof teamData[0] && teamData[0].score ? teamData[0].score : '0'}</MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol size="2">{typeof time ? time : 'no'}</MDBCol>
                                <MDBCol size="5" className="m-0 p-0">
                                    <MDBRow className="m-0 p-0">
                                        <MDBCol size="3" className="m-0 p-0 warning-color-dark" style={{ backgroundColor: teamColors.team1.secondary }}>{typeof teamData[1] && teamData[1].score ? teamData[1].score : '0'}</MDBCol>
                                        <MDBCol size="9" className="m-0 p-0 warning-color" style={{ backgroundColor: teamColors.team1.primary }}>{typeof teamData[1] && teamData[1].name ? teamData[1].name : '0'}</MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                    <MDBCardText>
                        <MDBDataTable
                            striped
                            bordered
                            small
                            data={typeof sbData ? sbData : 'no'}
                            paging={false}
                            responsive
                        ></MDBDataTable>
                    </MDBCardText>
                    {/*  <MDBBtn color="elegant">go somewhere</MDBBtn>*/}
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )

}

