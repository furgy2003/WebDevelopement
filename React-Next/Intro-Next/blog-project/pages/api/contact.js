import { connectDatabase, insertToDatabase } from "@/lib/db-util";

export default async function handler(req, res) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "cannot connect to the database" });
    return;
  }

  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const message = req.body.message;
    const contact = { email: email, name: name, message: message };

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid inputs" });
    }

    try {
      const collection = await insertToDatabase(client, "contacts", contact);
    } catch (error) {
      res.status(500).json({ message: "failed to add to database" });
      return;
    }
    res.status(201).json({ message: "success in sending the contact detail" });
  } else {
    res.status(200).json({ message: "action is not post" });
  }
}
