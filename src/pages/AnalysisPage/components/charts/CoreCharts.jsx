import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol,
    MDBContainer
  } from 'mdb-react-ui-kit';
import { useSelector } from "react-redux";
import _ from 'lodash'




export const CoreCharts = () => {

    const chasing = useSelector(state => state.chasing)
    let huh = _.isUndefined(chasing)
    const rth = (e) => {
        return _.round(e, 3)
    }
    const mvpr = (goals, assists, saves, shots) => {
        let e = ((goals * 1) + (assists * 0.75) + (saves * 0.6) + (shots / 3))
        return rth(e)
    }

    const empty = {
        label: 'no data',
        data: {
            goals: 0,
            assists: 0,
            saves: 0
        }
    }

    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.5 + ')';
    }

    let pMap = huh ? empty : chasing.players.map(player => ({
        label: player.name,
        data: [
            rth(player.game_average.core.goals),
            rth(player.game_average.core.assists),
            rth(player.game_average.core.saves),
        ],
        backgroundColor: random_rgba(),
        borderColor: random_rgba(),
        borderWidth: 1
    }))

    console.log(pMap)

    const GasData = {
        labels: ['goals', 'assists', 'saves'],
        datasets: pMap,
    };

    const options = {
        scale: {
            ticks: { beginAtZero: true },
        }
    };

    return (
        <>
        <MDBRow>
            <MDBCol md='6' className='text-center'>
                <h2>Goals, Assists, Saves</h2>
                <Radar redraw={true} data={GasData} options={options} />
            </MDBCol>
        </MDBRow>
        </>

    )
}