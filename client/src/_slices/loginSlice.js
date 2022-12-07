import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { USER_SERVER } from "../components/Config";


const initialState = {}

export const loginUser = createAsyncThunk(
  "LOGIN_USER",
  async(dataToSubmit) => {
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
    .then(response => response.data);
    return request
  }
)




const loginSlice = createSlice({
  name : "login",
  initialState,
  reducers : {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending,(state, action) => {
      return state.loginSucces = "pending"
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      return state.loginSucces = action.payload
    })
    builder.addCase(loginUser.rejected, (state,action) => {
      return state.loginSucces = "rejected"
    })
  }
})

export default loginSlice