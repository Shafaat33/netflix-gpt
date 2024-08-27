import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesReducer";
import userSlice from "./userReducer";

export const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesReducer,
  },
});
