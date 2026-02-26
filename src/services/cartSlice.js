import { createSlice } from "@reduxjs/toolkit";
import { isValidProductPayload } from "./validator";

const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    if (!data) return [];

    const parsedData = JSON.parse(data);
    if (!Array.isArray(parsedData)) return [];

    return parsedData.filter((item) => isValidProductPayload(item, true));
  } catch (error) {
    console.log("Error getting cart from localStorage: ", error);
    return [];
  }
};

const saveCartToStorage = (items) => {
  try {
    localStorage.setItem("cart", JSON.stringify(items));
  } catch (error) {
    console.log("Error saving cart to localStorage: ", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exists = state.items.find((item) => item.id === product.id);

      if (!exists) {
        state.items.push(product);
        saveCartToStorage(state.items);
      }
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idToRemove);
      saveCartToStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
