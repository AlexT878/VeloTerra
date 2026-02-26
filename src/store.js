import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./services/productSlice";
import cartReducer from "./services/cartSlice";
import themeReducer from "./services/themeSlice";
import authReducer from "./services/authSlice";

export default configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    theme: themeReducer,
    auth: authReducer,
  },
});
