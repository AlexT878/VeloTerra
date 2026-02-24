import { configureStore } from '@reduxjs/toolkit'
import bikeReducer from "./services/bikeSlice"
import cartReducer from "./services/cartSlice"

export default configureStore({
  reducer: {
    bikes: bikeReducer,
    cart: cartReducer,
  },
})