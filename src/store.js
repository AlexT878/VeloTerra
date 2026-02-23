import { configureStore } from '@reduxjs/toolkit'
import bikeReducer from "./services/bikeSlice"

export default configureStore({
  reducer: {
    bikes: bikeReducer
  },
})