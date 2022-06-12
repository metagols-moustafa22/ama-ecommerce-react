import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import appSlice from "./app/appSlice";

export const store = configureStore({
  reducer: {
    appSlice,
  },
});
