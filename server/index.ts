import express from "express";
import cors from "cors";

import router from "./routes/product.ts";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/products", router);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
