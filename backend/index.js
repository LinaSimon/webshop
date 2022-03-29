import express from "express";
import cors from "cors";
import mongodb from "mongodb";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

const mongoDbClient = new mongodb.MongoClient("mongodb://localhost:27017");
mongoDbClient.connect();
const db = mongoDbClient.db("webshop");
const products = db.collection("products");
const cart = db.collection("cart");

try {
  products.insertMany([
      {
        _id: 1,
        url: "/images/cat2.png",
        title: "Cat",
        description: "Curious cat with bow",
        price: 100,
        color: "black",
        bow: true,
        stock: 12,
      },
      {
        _id: 2,
        url: "/images/dog2.jpg",
        title: "Dog",
        description: "Best friend ever",
        price: 110,
        color: "brown",
        bow: false,
        stock: 5,
      },
      {
        _id: 3,
        url: "/images/dino.png",
        title: "Dino",
        description: "Green and cuddly herbivore",
        price: 80,
        color: "green",
        bow: false,
        stock: 8,
      },
      {
        _id: 4,
        url: "/images/unicorn.png",
        title: "Unicorn",
        description: "Magic uni in the colors of the rainbow!",
        price: 120,
        color: "rainbow",
        bow: false,
        stock: 20,
      },
      {
        _id: 5,
        url: "/images/blobfish.png",
        title: "Blobfish",
        description: "Magic uni in the colors of the rainbow!",
        price: 120,
        color: "rainbow",
        bow: false,
        stock: 20,
      },
      {
        _id: 6,
        url: "/images/jordsvin.png",
        title: "Groundhog",
        description: "Magic uni in the colors of the rainbow!",
        price: 120,
        color: "rainbow",
        bow: false,
        stock: 20,
      },
      {
        _id: 7,
        url: "/images/koala.png",
        title: "Koala",
        description: "Magic uni in the colors of the rainbow!",
        price: 120,
        color: "rainbow",
        bow: false,
        stock: 20,
      },
      {
        _id: 8,
        url: "/images/narwhale.png",
        title: "Narwhale",
        description: "Magic uni in the colors of the rainbow!",
        price: 120,
        color: "rainbow",
        bow: false,
        stock: 20,
      },
      {
        _id: 9,
        url: "/images/unicorn_white.png",
        title: "White unicorn",
        description: "Magic uni in the colors of the rainbow!",
        price: 120,
        color: "rainbow",
        bow: false,
        stock: 20,
      },
      {
        _id: 10,
        url: "/images/rabbit_sad.png",
        title: "Sad rabbit",
        description: "Magic uni in the colors of the rainbow!",
        price: 120,
        color: "rainbow",
        bow: false,
        stock: 20,
      },
      {
        _id: 11,
        url: "/images/seahorse.png",
        title: "Seahorse",
        description: "Magic uni in the colors of the rainbow!",
        price: 120,
        color: "rainbow",
        bow: false,
        stock: 20,
      },
    ]
  );

} catch (error) {
  console.log('error', error)
}




app.get("/api", (req, res) => {
  res.send({message: "Hello there! Where is my React app??"}).end();
});

app.get("api/products/getAll", (req, res) => {
  // const result = products.find({})

  // console.log('res', result)
  res.send({message: "test"});
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:3001`);
});