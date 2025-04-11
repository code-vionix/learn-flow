import {createSlice} from "@reduxjs/toolkit";

const initialState = 'filter ...'

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setfilter:(state, action)=>{
            return action.payload;
        }
    }
})


export const {setfilter} = filterSlice.actions
export default filterSlice.reducer
