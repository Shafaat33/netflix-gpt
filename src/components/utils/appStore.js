import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesReducer";
import userSlice from "./userReducer";
import gptReducer from "./gptReducer";

export const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});
