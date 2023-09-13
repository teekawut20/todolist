import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import productSlice from "./slices/product";
import storage from "./storage";

const reducers = combineReducers({
  product: productSlice,
});

const persistConfig = {
  key: "nitmx",
  storage,
  whitelist: ["product"],
  timeout: 100,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
      immutableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
