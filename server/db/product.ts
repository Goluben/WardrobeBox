import { pool } from "../config/db.ts";

export async function getProducts() {
  const products = await pool.query("SELECT * FROM products");
  return products.rows;
}

export async function getProduct(id: string) {
  const product = await pool.query(`SELECT * FROM products WHERE id = '${id}'`);
  return product.rows[0];
}

export async function addProduct(payload: any) {
  const product =
    await pool.query(`INSERT INTO products (brand, model, price, img_src, product_params) values ('${payload.brand}', '${payload.model}', '${payload.price}','${payload.img_src}', '${payload.product_params}') RETURNING *
  `);
  return product;
}

export async function updateProduct(id: string, payload: any) {
  const uProduct = await pool.query(
    `UPDATE products SET brand = '${payload.brand}', model = '${payload.model}', price = '${payload.price}', img_src = '${payload.img_src}', product_params = '${payload.product_params}' WHERE id = '${id}' RETURNING *`
  );
  return uProduct;
}

export async function deleteProduct(id: string) {
  const isDeleted = await pool.query(`DELETE FROM products WHERE id = '${id}'`);
  return isDeleted;
}
