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

app.get("/api", (req, res) => {
  res.send({message: "Hello there! Where is my React app??"}).end();
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:3001`);
});