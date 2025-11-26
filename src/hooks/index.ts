import {useEffect, useState} from "react";

import { API } from "../constants";
import { Product } from "../types";


export function useProducts() {
  const [products, setProducts] = useState<Product[]>();

  const fetchProducts = async () => {
    const data = await fetch(API.PRODUCTS).then((res) => res.json());
    setProducts(data as Product[]);
  }

  useEffect(() => {fetchProducts()}, []);

  return products;

}