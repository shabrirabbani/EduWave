import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    username: localStorage.getItem("username") || null,
    token: localStorage.getItem("token"),
    status: "idle",
    error: null,
    roles: [],
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.status = "loading";
      state.error = null;
    },
    loginSuccess(state, action) {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.roles = action.payload.roles;
      localStorage.setItem("username", action.payload.username);
      state.status = "succeeded";
    },
    logout(state) {
      state.username = null;
      state.token = null;
      state.roles = null;
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      state.status = "idle";
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoginData(state, action) {
      state.roles = action.payload.roles;
    },
  },
});

export const { loginSuccess, logout, setError, setLoginData } = authSlice.actions

export const selectCurrentUser = (state) => state.auth.username;
export const selectAuthToken = (state) => state.auth.token;
export const selectAuthRole = (state) => state.auth.roles;

export default authSlice.reducer