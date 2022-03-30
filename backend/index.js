import express from "express";
import cors from "cors";
import { getAllProducts } from "./api/products/products.js";


// import dbConfiguration from "./db_configuration";

// const mongoClient = new mongodb.MongoClient("mongodb://localhost:27017");
// mongoClient.connect();
// const db = mongoClient.db("webshop");
// const collectionProducts = db.Collection("products");
// const collectionCart = db.Collection("cart");
// const collectionOrder = db.Collection("order");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.get("/api", (req, res) => {
  res.send({message: "Hello there! Where is my React app??"}).end();
});

app.get("/api/products",async (req, res) => {
  const test = await getAllProducts();
  res.send({message: test}).end();
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:3001`);
});