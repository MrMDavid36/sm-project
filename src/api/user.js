import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const googleApi = "https://www.googleapis.com/oauth2/v1/userinfo?access_token=";

// Action Creators
export const getUserInfo = createAsyncThunk(
  "auth/getUserInfo",
  async ({ response }) => {
    try {
      console.log("UserResponse", response);
      const { data } = await axios.get(`${googleApi}${response.access_token}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
