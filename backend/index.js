import express from "express";
import cors from "cors";
import { getAllProducts, seedProducts } from "./api/products/products.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// Test api
app.get("/api", (req, res) => {
  res.send({message: "Hello there! Where is my React app??"}).end();
});

// Get all products from db
app.get("/api/products",async (req, res) => {
  const test = await getAllProducts();
  console.log("test", test)
  res.send(test).end();
});

// Post products to db
app.post("/api/products",async (req, res) => {
  const products = await getAllProducts();
  if (products && products.length === 0) {
    try {
      await seedProducts();
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
  res.sendStatus(200);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:3001`);
});