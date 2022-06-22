import { createSlice } from "@reduxjs/toolkit";
import { changeLanguage as changeLanguageI18n } from "i18next";

const initialState = {
  language: "en",
  dir: "ltr",
  user: {},
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {},
});

export const selectDir = (state) => state.appReducer.dir;

export default appSlice.reducer;
