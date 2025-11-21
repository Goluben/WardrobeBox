import {useEffect, useState} from "react";

import { API } from "../constants";
import { Product } from "../types";


export function useProducts() {
  const [products, setProducts] = useState<Product[]>();

  const fetchProducts = async () => {
    const data = await fetch(API.PRODUCTS);
    const p = await data.json();
    setProducts(p as Product[]);
  }

  useEffect(() => {fetchProducts()}, []);

  return products;

}