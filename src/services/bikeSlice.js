import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBikes } from './bikeService';

export const getBikes = createAsyncThunk('bikes/fetchAll', async () => {
  return await fetchBikes();
})

const bikeSlice = createSlice({
  name: 'bikes',
  initialState: {
    items: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBikes.fulfilled, (state, action) => {
        state.items = action.payload;
    })
  }
});

export default bikeSlice.reducer;