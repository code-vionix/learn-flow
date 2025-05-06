import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slice/searchSlice";
import filterReducer from "./slice/filterSlice"
import authReducer from "./slice/authSlice"
import {apiSlice} from "./api/apiSlice";

export const store = configureStore({
    reducer:{
        search: searchReducer,
        filter: filterReducer,
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
})