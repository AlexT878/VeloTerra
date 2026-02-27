import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_THEME } from "../constants/values";

const loadThemeFromStorage = () => {
  try {
    const theme = localStorage.getItem("theme");
    if (theme !== "light" && theme !== "dark") {
      return DEFAULT_THEME;
    }
    return theme;
  } catch (error) {
    console.warn(error);
    return DEFAULT_THEME;
  }
};

export const toggleTheme = () => (dispatch, getState) => {
  const currentTheme = getState().theme.theme;
  const newTheme = currentTheme === "light" ? "dark" : "light";

  try {
    localStorage.setItem("theme", newTheme);
  } catch (error) {
    console.warn(error);
  }

  document.documentElement.setAttribute("data-theme", newTheme);
  dispatch(setThemeMode(newTheme));
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: loadThemeFromStorage(),
  },
  reducers: {
    setThemeMode: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
