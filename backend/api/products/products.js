import {db }from "../../db_configuration.js";


export const getAllProducts = () => {
    const productCollection = db.collection("products");
    const products = productCollection.find();
    // const collecttion = db.dbConfiguration();
    // collecttion.dbConfiguration.
    // return p.find();
    return products;
}

