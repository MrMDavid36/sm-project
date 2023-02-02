import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../api/user";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {
      token: JSON.parse(localStorage.getItem("token")) || null,
      userInfo: JSON.parse(localStorage.getItem("profile")) || null,
    },
  },
  reducers: {
    setAuth(state, action) {
      localStorage.setItem("token", JSON.stringify({ ...action.payload }));
      state.auth = { ...state.auth, token: action.payload };
    },
    logout(state, action) {
      localStorage.clear();
      state.auth = { token: null, profile: null };
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.auth.userInfo = { ...action.payload };
    });
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
