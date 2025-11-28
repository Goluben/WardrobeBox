"use client";

import { useCallback } from "react";

import Listing from "@/src/components/listing";
import { useProducts } from "@/src/hooks";
import { Product } from "@/src/types";

import AddPage from "@/src/components/add-page";

export default function App() {
  return (
    <div>
      <AddPage />
    </div>
  );
}
