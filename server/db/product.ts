import { pool } from "../config/db.ts";

export async function getProducts() {
  const data = await pool.query("SELECT * FROM products");
  return data.rows;
}

export async function deleteProduct(id: string) {}
