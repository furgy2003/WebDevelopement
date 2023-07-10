import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const url =
    "mongodb+srv://furgy2003:Furgy2003@cluster0.vfsf9wx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(url);
  await client.connect();
  return client;
}

export async function insertDocument(client, connection, insertObj) {
  const collection = client.db().collection(connection);

  // if (collection.find({ email: email })) {
  //   res.status(200).json({ message: "exist" });
  //   return;
  // }

  const result = await collection.insertOne(insertObj);
  return result;
}

export async function getAllDocuments(connection, sortReq) {
  const client = await connectDatabase();
  const collection = client.db().collection(connection);

  const documents = await collection.find().sort(sortReq).toArray();
  return documents;
}
