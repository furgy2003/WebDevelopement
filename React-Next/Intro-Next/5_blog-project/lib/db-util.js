import { MongoClient } from "mongodb";

export async function connectDatabase() {
  // allow us to create dynamic url based on the env variables specified inside the
  // next.config.js file
  const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.vfsf9wx.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  await client.connect();
  return client;
}

export async function insertToDatabase(client, collection_name, insertObj) {
  const collection = client.db().collection(collection_name);
  await collection.insertOne(insertObj);
  return collection;
}
