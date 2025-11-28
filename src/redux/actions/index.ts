import { createAsyncThunk } from "@reduxjs/toolkit";

import { Product } from "@/src/types";
import { API } from "../../constants";

export enum ActionTypes {
  GetProducts = "GET_PRODUCTS",
  UpdateProduct = "UPDATE_PRODUCT",
  DeleteProduct = "DELETE_PRODUCT",
  AddProduct = "ADD_PRODUCT",
  GetProduct = "GET_PRODUCT",
}

export const fetchProducts = createAsyncThunk<Product[]>(
  ActionTypes.GetProducts,
  async () => {
    const data = await fetch(API.PRODUCTS).then((res) => res.json());
    return data;
  }
);

export const fetchProduct = createAsyncThunk<Product, string>(
  ActionTypes.GetProduct,
  async (id) => {
    const data = await fetch(`${API.PRODUCTS}/${id}`).then((res) => res.json());
    return data;
  }
);
