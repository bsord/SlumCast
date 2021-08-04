import { createSlice, current } from '@reduxjs/toolkit';
import _ from 'lodash';
import { useDispatch } from 'react-redux';

const dispatch = useDispatch



const initialState = {
    series: {
        active: false,
        type: 5,
        score: {
            team0: 0,
            team1: 0,
        }
    }
}



export const gamedataSlice = createSlice({
    name: 'gamedata',
    initialState: initialState,
    reducers: {
        seriesUpdate: (state, action) =>{
            
            let series = action.payload
            console.log(current(_.merge(state, series)))

            return state
            
        },
        dfetcher: (state) => {



            let sosData = initialState.events.update_state
            state.events.update_state = sosData

            console.log(state.events)

            //state.events.update_state = newData

            /*let deez = _.toString(req)
            console.log(req)
            state.value = JSON.stringify(req)*/


        }
    },
})

// Action creators are generated for each case reducer function
export const { dfetcher, seriesUpdate } = gamedataSlice.actions

export default gamedataSlice.reducer