import { createSlice } from "@reduxjs/toolkit";
import { isValidProductPayload } from "../utils/productValidator";

const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    if (!data) return [];

    const parsedData = JSON.parse(data);
    if (!Array.isArray(parsedData)) return [];

    return parsedData.filter((item) => isValidProductPayload(item, true));
  } catch (error) {
    console.warn("Error getting cart from localStorage: ", error);
    return [];
  }
};

const saveCartToStorage = (items) => {
  try {
    localStorage.setItem("cart", JSON.stringify(items));
  } catch (error) {
    console.warn("Error saving cart to localStorage: ", error);
  }
};

export const addToCart = (product) => (dispatch, getState) => {
  dispatch(_addToCart(product));
  saveCartToStorage(getState().cart.items);
};

export const removeFromCart = (idToRemove) => (dispatch, getState) => {
  dispatch(_removeFromCart(idToRemove));
  saveCartToStorage(getState().cart.items);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(),
  },
  reducers: {
    _addToCart: (state, action) => {
      const product = action.payload;
      const exists = state.items.find((item) => item.id === product.id);
      if (!exists) {
        state.items.push(product);
      }
    },
    _removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idToRemove);
    },
  },
});

const { _addToCart, _removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
