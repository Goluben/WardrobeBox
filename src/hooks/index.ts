import { useEffect, useState } from "react";

import { API } from "../constants";
import { Product } from "../types";
import { fetchProducts, fetchProduct } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getProducts, getProduct } from "../redux/selectors";

export function useProducts() {
  const dispatch = useAppDispatch();

  const products = useAppSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return products;
}

export function useProduct(id: string) {
  const dispatch = useAppDispatch();

  const product = useAppSelector(getProduct);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  return product;
}
