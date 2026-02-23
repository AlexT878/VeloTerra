import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBikes } from './bikeService';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const getBikes = createAsyncThunk('bikes/fetchAll', async () => {
  await delay(1000);    // Simulate loading
  return await fetchBikes();
})

const bikeSlice = createSlice({
  name: 'bikes',
  initialState: {
    items: [],
    status: "idle", // 'idle' / 'loading' / 'succeeded' / 'failed'
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBikes.pending, (state) => {
        state.status = "loading";
    })
    builder.addCase(getBikes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
    })
    builder.addCase(getBikes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
    })
  }
});

export default bikeSlice.reducer;