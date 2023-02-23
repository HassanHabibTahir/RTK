import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./apiSlice";
const store = configureStore({
  reducer: {
    // [productsApi.reducerPath]: productsApi.reducer,
  },
});

export default store;
