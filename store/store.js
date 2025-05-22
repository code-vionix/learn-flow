import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./slice/searchSlice";
import filterReducer from "./slice/filterSlice";
import courseReducer from "./slice/courseCreateSlice";
import { apiSlice } from "./api/apiSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  blacklist: [apiSlice.reducerPath],
};

// Combine reducers
const rootReducer = combineReducers({
  search: searchReducer,
  filter: filterReducer,
  course: courseReducer,
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
