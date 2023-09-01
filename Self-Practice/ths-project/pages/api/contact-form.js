import { connectDatabase, insertOneToDatabase } from "@/lib/helpers/db-util";

export default async function handler(req, res) {
  const customer = req.body;
  const { name, email, tel } = customer;
  if (
    !name ||
    name.trim() === "" ||
    !email ||
    !email.includes("@") ||
    !tel ||
    !/^\d+$/.test(tel)
  ) {
    res.status(422).json({ message: "invalid inputs" });
    return;
  }

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "cannot connect to database" });
    return;
  }

  try {
    await insertOneToDatabase(client, customer);
  } catch (error) {
    res.status(500).json({ message: "error updating the database" });
    client.close();
    return;
  }

  res.status(200).json({ message: "success" });
  client.close();
}
