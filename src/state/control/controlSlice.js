import { createSlice, current } from '@reduxjs/toolkit';
import _ from 'lodash';
import { useDispatch } from 'react-redux';

const dispatch = useDispatch



const initialState = {
    series: {
        active: false,
        text: false,
        lights: false,
        bestof: true,
        type: 5,
        score: {
            team0: 0,
            team1: 0,
        },
        games: {
            game1:{
                team0: 0,
                team1: 0
            },
            game2:{
                team0: 0,
                team1: 0
            },
            game3:{
                team0: 0,
                team1: 0
            },
            game4:{
                team0: 0,
                team1: 0
            },
            game5:{
                team0: 0,
                team1: 0
            },
            game6:{
                team0: 0,
                team1: 0
            },
            game7:{
                team0: 0,
                team1: 0
            },
        }
    }
}

const fresh = {
    series: {
        games: {
            game1:{
                team0: 0,
                team1: 0
            },
            game2:{
                team0: 0,
                team1: 0
            },
            game3:{
                team0: 0,
                team1: 0
            },
            game4:{
                team0: 0,
                team1: 0
            },
            game5:{
                team0: 0,
                team1: 0
            },
            game6:{
                team0: 0,
                team1: 0
            },
            game7:{
                team0: 0,
                team1: 0
            },
        }
    }
}


export const gamedataSlice = createSlice({
    name: 'gamedata',
    initialState: initialState,
    reducers: {
        seriesUpdate: (state, action) =>{
            
            let series = action.payload
            _.merge(state, series)

            return state
            
        },
        resetSeries: (state) => {
            //console.log('fire')

            _.merge(state, initialState)

            return state
        },
    }
})

// Action creators are generated for each case reducer function
export const {  seriesUpdate, resetSeries } = gamedataSlice.actions

export default gamedataSlice.reducer