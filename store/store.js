import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./slice/searchSlice";
import filterReducer from "./slice/filterSlice";
import courseReducer from "./slice/courseCreateSlice";
import courseUpdateReducer from "./slice/courseUpdateSlice";
import { apiSlice } from "./api/apiSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  blacklist: [apiSlice.reducerPath, "courseUpdate"],
};

// Combine reducers
const rootReducer = combineReducers({
  search: searchReducer,
  filter: filterReducer,
  course: courseReducer,
  courseUpdate: courseUpdateReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

// Create persistor
export const persistor = persistStore(store);
