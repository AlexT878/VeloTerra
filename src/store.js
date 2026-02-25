import { configureStore } from "@reduxjs/toolkit";
import bikeReducer from "./services/bikeSlice";
import cartReducer from "./services/cartSlice";
import themeReducer from "./services/themeSlice";
import authReducer from "./services/authSlice";

export default configureStore({
  reducer: {
    bikes: bikeReducer,
    cart: cartReducer,
    theme: themeReducer,
    auth: authReducer,
  },
});
