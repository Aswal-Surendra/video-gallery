import { configureStore } from "@reduxjs/toolkit";
import userReduccer from "./userSlice";
import moviesReducer from "./moviesSlice";


const appStore = configureStore({
  reducer: {
    user: userReduccer,
    movies : moviesReducer,
  },
});

export default appStore;
