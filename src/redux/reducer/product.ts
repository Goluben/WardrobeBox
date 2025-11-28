import { createSlice } from "@reduxjs/toolkit";

import { Product, State } from "@/src/types";
import { ActionTypes, fetchProducts, fetchProduct } from "../actions";

const initialState: State = {
  products: [],
  product: null,
  isProductsPending: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isProductsPending = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isProductsPending = false;
        state.products = action.payload;
      })
      .addCase(fetchProduct.pending, (state) => {
        state.isProductsPending = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isProductsPending = false;
        state.product = action.payload;
      });
  },
});
