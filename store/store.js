import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import courseReducer from "./slice/courseCreateSlice";
import coursePlayerReducer from "./slice/coursePlayerSlice"; // নতুন slice import
import courseUpdateReducer from "./slice/courseUpdateSlice";
import filterReducer from "./slice/filterSlice";
import searchReducer from "./slice/searchSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  blacklist: [apiSlice.reducerPath, "courseUpdate"], // blacklist-এ apiSlice আর courseUpdate আছে, ঠিক আছে
};

// Combine reducers - এখানে নতুন reducer যোগ করলাম
const rootReducer = combineReducers({
  search: searchReducer,
  filter: filterReducer,
  course: courseReducer,
  courseUpdate: courseUpdateReducer,
  coursePlayer: coursePlayerReducer, // এখানে যোগ করো
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
