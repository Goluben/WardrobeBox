import { RootState } from "../store";

export const getProducts = (state: RootState) => state.products.products;

export const getProduct = (state: RootState) => state.products.product;
