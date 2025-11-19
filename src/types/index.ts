import { Url } from "next/dist/shared/lib/router/router";

export enum Color {
  Aqua = "aqua",
  BlueAqua = "blue"
}

export type Size = "s" | "m" | "l"; 

export interface Product {
  id: string;
  brand: string;
  model: string;
  price: string;
  imgSrc: string;
  productParams?: {[key:string]: string};
}