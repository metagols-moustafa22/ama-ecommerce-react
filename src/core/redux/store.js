import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import appReducer from "./app/appSlice";

export const store = configureStore({
  reducer: {
    appReducer,
  },
});
