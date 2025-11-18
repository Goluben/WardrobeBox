"use client";

import { useCallback } from "react";

import Button from "../src/components/my-button";
import { Color } from "../src/types";

export default function App() {
  const handleClick = useCallback(
    () => window.open("https://www.kufar.by/l", "_blank"),
    []
  );

  return (
    <div>
      <Button color={Color.Aqua} size="m" onClick={handleClick}>
        Кнопочка
      </Button>
    </div>
  );
}
