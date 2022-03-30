import mongodb from "mongodb";

    const mongoClient = new mongodb.MongoClient("mongodb://localhost:27017");
    mongoClient.connect();
    mongoClient.db("webshop");

    export const connection = mongoClient;

// export default connection;