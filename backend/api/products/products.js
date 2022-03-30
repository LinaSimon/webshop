import database from "../../db_configuration.js";
import stuffedAnimals from "./stuffed-animals.js";

const productCollection = database.collection("products");

export const getAllProducts = () => {
    return productCollection.find({}).toArray();
};

export const seedProducts = () => {
    const animals = stuffedAnimals;
    console.log("seed")
    productCollection.insertMany(animals);
    console.log("hello", animals);

}

