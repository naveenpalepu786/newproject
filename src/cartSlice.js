// cartSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],   // MUST be an array
    totalPrice: 0,
    totalItems: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // check item exist
      const exist = state.cartItems.find((x) => x.id === item.id);

      if (exist) {
        exist.quantity += 1; // increase qty
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      // Update totals
      state.totalItems = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      // Update totals
      state.totalItems = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    decreaseQuantity: (state, action) => {
      const single = state.cartItems.find((x) => x.id === action.payload);

      if (single.quantity > 1) {
        single.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }

      // Update totals
      state.totalItems = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalItems = 0;
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((x) => x.id === id);

      if (item) {
        if (quantity > 0) {
          item.quantity = quantity;
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        }
      }

      // Update totals
      state.totalItems = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
