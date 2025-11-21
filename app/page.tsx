"use client";

import { useCallback } from "react";

import Listing from "@/src/components/listing";
import { data } from "@/src/constants";
import MyButton from "@/src/components/my-button";

export default function App() {
  const handleClick = useCallback(
    () => window.open("https://www.kufar.by/l", "_blank"),
    []
  );

  return (
    <div>
      <Listing list={data} onClick={handleClick} />
    </div>
  );
}
