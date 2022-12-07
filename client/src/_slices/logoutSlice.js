import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { USER_SERVER } from "../components/Config";


const initialState = {}

export const logoutUser = createAsyncThunk(
  "LOGOUT_USER",
  async() => {
    const request = axios.get(`${USER_SERVER}/logout`)
    .then(response => response.data);
    return request
  }
)


const logoutSlice = createSlice({
  name : "login",
  initialState,
  reducers : {},
  extraReducers: (builder) => {
    builder.addCase(logoutUser.pending,(state, action) => {
      return state
    })
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      return state
    })
    builder.addCase(logoutUser.rejected, (state,action) => {
      return state
    })
  }
})

export default logoutSlice