"use client";

import { useCallback } from "react";

import Button from "../src/components/my-button";
import Card from "../src/components/card";
import { Color, Product } from "../src/types";

export default function App() {
  const handleClick = useCallback(
    () => window.open("https://www.kufar.by/l", "_blank"),
    []
  );

  const item: Product = {
    id: "123",
    brand: "NewBalance",
    model: "2002 NR",
    price: "135",
    imgSrc: "https://a.lmcdn.ru/product/R/T/RTLADV243701_24945579_3_v1.jpg",
  };

  return (
    <div>
      <Card item={item} onClick={handleClick}></Card>
    </div>
  );
}
