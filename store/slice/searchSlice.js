import {createSlice} from "@reduxjs/toolkit";

const initialState = 'search ...'

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch:(state, action)=>{
            return action.payload;
        }
    }
})


export const {setSearch} = searchSlice.actions
export default searchSlice.reducer
