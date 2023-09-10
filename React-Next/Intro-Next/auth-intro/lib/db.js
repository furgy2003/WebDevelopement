import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.vfsf9wx.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  await client.connect();
  return client;
}

export async function findSpecificUser(client, email) {
  const userCollection = client.db().collection("users");
  const user = await userCollection.findOne({ email: email });
  return user;
}

export async function updatePasswordSpecific(client, email, newPassword) {
  const userCollection = client.db().collection("users");
  const result = await userCollection.updateOne(
    { email: email },
    { $set: { encryptedPassword: newPassword } }
  );
  return result;
}
