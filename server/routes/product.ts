import { Router } from "express";

import * as dao from "../db/product.ts";

const router = Router({ mergeParams: true });

router.route("/").get(async (req, res) => {
  const products = await dao.getProducts();
  res.json(products);
});

export default router;
