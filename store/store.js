import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slice/searchSlice";
import filterReducer from "./slice/filterSlice";
import courseReducer from "./slice/courseCreateSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    filter: filterReducer,
    course: courseReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // turns off this warning
    }),
});
