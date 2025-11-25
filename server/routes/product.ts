import { Router } from "express";

import * as dao from "../db/product.ts";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(async (req, res) => {
    const products = await dao.getProducts();
    res.json(products);
  })
  .post(async (req, res) => {
    const product = req.body;
    console.log(product);
    const result = await dao.addProduct(product);
    console.log(result);
    res.json(result);
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const id = req.params.id;
    const product = await dao.getProduct(id);
    console.log(product);
    res.json(product);
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    const result = await dao.deleteProduct(id);
    if (result.rowCount === 1) {
      res.send(true);
    } else {
      res.send(false);
    }
  });

export default router;
