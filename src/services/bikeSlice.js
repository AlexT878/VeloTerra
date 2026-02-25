import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBikes, deleteBikeFromDB, insertBikeInDB } from "./bikeService";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getBikes = createAsyncThunk("bikes/fetchAll", async () => {
  await delay(1000); // Simulate loading
  return await fetchBikes();
});

export const removeBike = createAsyncThunk("bikes/remove", async (id) => {
  await deleteBikeFromDB(id);
  return id;
});

export const addBike = createAsyncThunk("bikes/add", async (bikeData) => {
  return await insertBikeInDB(bikeData);
});

const bikeSlice = createSlice({
  name: "bikes",
  initialState: {
    items: [],
    status: "idle", // 'idle' / 'loading' / 'succeeded' / 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBikes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBikes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(getBikes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeBike.fulfilled, (state, action) => {
        state.items = state.items.filter((bike) => bike.id !== action.payload);
      })
      .addCase(addBike.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default bikeSlice.reducer;
