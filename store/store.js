import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slice/searchSlice";
import filterReducer from "./slice/filterSlice"
import {apiSlice} from "./api/apiSlice";

export const store = configureStore({
    reducer:{
        search: searchReducer,
        filter: filterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
})