// Code from Iwana to get Nodemon dependency
const mongoClient = new mongodb.MongoClient("mongodb://localhost:27017");
mongoClient.connect();
const db = mongoClient.db("webshop");
const collectionProducts = db.Collection("products");
const collectionCart = db.Collection("cart");
const collectionOrder = db.Collection("order");

// Creating webserver with node.js and express

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});







