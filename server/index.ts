import express from "express";
import cors from "cors";

import { data } from "./constants/index.ts";
import router from "./routes/product.ts";

const app = express();

app.use(cors());

// app.get("/api/v1/products", (req, res) => {
//   res.json(data);
// });

app.use("/api/v1/products", router);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
