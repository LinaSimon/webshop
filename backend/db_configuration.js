import mongodb from "mongodb";

    const client = mongodb.MongoClient;
    const connect = await client.connect("mongodb://localhost:27017");
    const database = connect.db("webshop");

    export default database;