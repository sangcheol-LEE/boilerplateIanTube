import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { USER_SERVER } from "../components/Config";

const initialState = {}


export const registerUser = createAsyncThunk(
  "REGISTER_USER",
  async(dataToSubmit) => {
    const request = axios.post(`${USER_SERVER}/register`,dataToSubmit)
    .then(response => response.data);
    return request
  }
)



const registerSlice = createSlice({
  name : "auth",
  initialState,
  reducers : {},

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending,(state, action) => {
      return state.register = "pending"
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      return state.register = action.payload
    })
    builder.addCase(registerUser.rejected, (state,action) => {
      return state.register = "rejected"
    })
  }
})

export default registerSlice
