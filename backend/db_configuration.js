import mongodb from "mongodb";

// const client = () => {
    // export const mongoClient = new mongodb.MongoClient("mongodb://localhost:27017");
    // // client.connect();
    // client.db("webshop");
    // const connection = client.connect();
    // connection.db
    // const db = connection.db("webshop");
    // const db = client;

    // export default db;
    // const dbConnection = client;

    const client = mongodb.MongoClient;
    const database = client.connect("mongodb://localhost:27017");


    // db.Collection("products");

    // });
    // const db = mongoClient.db("webshop");
    // const collectionProducts = db.Collection("products");

    // const p = collectionProducts.find({});

    // console.log('res', p)

    export default database;
// export default connection;
    // return dbConnection;
// }
// export default client;