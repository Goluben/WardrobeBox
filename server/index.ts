import express from "express";
import {data} from "./constants/index.ts";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api/v1/products", (req, res) => {
  res.json(data);
});

app.post("/", () => {

})

app.listen(8080, () => {console.log("Listening on port 8080")});