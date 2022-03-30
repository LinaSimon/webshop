import database from "../../db_configuration.js";


export const getAllProducts = async () => {
    const test = (await database).db("webshop");
    const productDb = test.collection("products");

    const res = productDb.findOne({});
    // const result = collectionProducts.find()
    // const test = db.collection("products");
    // client.collection("products");
    // const c = mongoClient.connect();
    // const d = c.connect();
    // const p = d.Collection("products");
    // const test = mongoClient.db("webshop");
    // const p = test.Collection("products");
    // const result = await test.find({});

    // console.log('mongo', result)
    // const productCollection = test.connection("products");
    // const products = productCollection.find();
    // const collecttion = db.dbConfiguration();
    // collecttion.dbConfiguration.
    return res;
    // return products;
}

