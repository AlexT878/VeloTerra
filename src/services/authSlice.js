import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAdmin: false,
    profileName: "Log in",
  },
  reducers: {
    loginAsAdmin: (state) => {
      state.isAdmin = true;
      state.profileName = "Admin";
    },
    logout: (state) => {
      state.isAdmin = false;
      state.profileName = "Log in";
    },
  },
});

export const { loginAsAdmin, logout } = authSlice.actions;
export default authSlice.reducer;
