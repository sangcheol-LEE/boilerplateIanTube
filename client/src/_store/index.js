import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../_slices/registerSlice";
import loginSlice from "../_slices/loginSlice";
import logoutSlice from "../_slices/logoutSlice";

const store = configureStore({
  reducer: {
    register : registerSlice.reducer,
    login : loginSlice.reducer,
    logout : logoutSlice.reducer
  }
})

export default store