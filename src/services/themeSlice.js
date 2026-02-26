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
    console.log("Error getting theme from localStorage: ", error);
    return DEFAULT_THEME;
  }
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: loadThemeFromStorage(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      try {
        localStorage.setItem("theme", state.theme);
      } catch (error) {
        console.warn("Could not save theme to localStorage", error);
      }

      document.documentElement.setAttribute("data-theme", state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
