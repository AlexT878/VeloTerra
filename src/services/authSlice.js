import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAdmin: false,
    profileName: "Admin",
  },
  reducers: {
    loginAsAdmin: (state) => {
      state.isAdmin = true;
    },
    logout: (state) => {
      state.isAdmin = false;
    },
  },
});

export const { loginAsAdmin, logout } = authSlice.actions;
export default authSlice.reducer;
