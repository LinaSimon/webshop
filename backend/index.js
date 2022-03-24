import express from "express";
import mongodb from "mongodb";
import cors from "cors";


const app = express();

app.get("/api", (req, res) => {
  res.send("Hello there! Where is my React app??").end();
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:3001`);
});