import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProducts,
  deleteProductFromDB,
  insertProductInDB,
} from "./productService";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getProducts = createAsyncThunk("products/fetchAll", async () => {
  await delay(1000); // Simulate loading
  return await fetchProducts();
});

export const removeProduct = createAsyncThunk("products/remove", async (id) => {
  await deleteProductFromDB(id);
  return id;
});

export const addProduct = createAsyncThunk("products/add", async (bikeData) => {
  return await insertProductInDB(bikeData);
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // 'idle' / 'loading' / 'succeeded' / 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((bike) => bike.id !== action.payload);
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default productsSlice.reducer;
