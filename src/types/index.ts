export enum Color {
  Aqua = "aqua",
  BlueAqua = "blue",
}

export type Size = "s" | "m" | "l";

export interface Product {
  id: string;
  brand: string;
  model: string;
  price: string;
  img_src: string;
  product_params?: { [key: string]: string };
}
