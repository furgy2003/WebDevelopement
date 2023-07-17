import { hashPassword } from "@/lib/auth";
import { connectDatabase, findSpecificUser } from "@/lib/db";

export default async function handler(req, res) {
  const { email, password } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim() === "" ||
    password.length < 7
  ) {
    res.status(422).json({ message: "Invalid inputs" });
    return;
  }

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to database" });
    client.close();
    return;
  }

  const existingUser = await findSpecificUser(client, email);

  if (existingUser) {
    res.status(422).json({ message: "Username existed" });
    client.close();
    return;
  }

  let encryptedPassword;
  try {
    encryptedPassword = await hashPassword(password);
  } catch (error) {
    res.status(500).json({ message: "Failed to encrypt message" });
    client.close();
    return;
  }

  const newUser = {
    email,
    encryptedPassword,
  };
  const userCollection = client.db().collection("users");
  await userCollection.insertOne(newUser);

  res.status(201).json({ message: "Created user" });
  client.close();
}
