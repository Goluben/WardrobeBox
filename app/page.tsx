"use client";

import { Suspense, useCallback } from "react";

import Listing from "@/src/components/listing";
import { useProducts } from "@/src/hooks";
import { Product } from "@/src/types";

export default function App() {
  const handleClick = useCallback(
    () => window.open("https://www.kufar.by/l", "_blank"),
    []
  );

  const products = useProducts();
  if (!products) return "loading";
  console.log(products);

  return (
    <div>
      <Listing list={products} onClick={handleClick} />
    </div>
  );
}
