import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {},
});

export default appSlice.reducer;
