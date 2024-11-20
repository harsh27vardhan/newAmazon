import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // theme: themeReducer,
  },
});

export default store;