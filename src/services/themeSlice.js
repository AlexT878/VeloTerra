import { createSlice } from "@reduxjs/toolkit";

const loadThemeFromStorage = () => {
  const data = localStorage.getItem("theme");
  return data ? data : "light";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: loadThemeFromStorage(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
      document.documentElement.setAttribute("data-theme", state.theme);
    },
  },
});

export const { toggleTheme, syncTheme } = themeSlice.actions;
export default themeSlice.reducer;
