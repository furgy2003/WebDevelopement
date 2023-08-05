import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vfsf9wx.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  await client.connect();
  return client;
}

export async function insertOneToDatabase(client, object) {
  const dbName = "ths-project";
  const collection = client.db(dbName).collection("contact-form");
  await collection.insertOne(object);
}
