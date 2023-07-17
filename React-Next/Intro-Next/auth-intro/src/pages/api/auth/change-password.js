import {
  connectDatabase,
  findSpecificUser,
  updatePasswordSpecific,
} from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";
import { hashPassword, verifyPassword } from "@/lib/auth";

// Note that the file does not have to be located inside the auth folder
export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const passwordData = req.body;
  const newPassword = passwordData.newPassword;
  const oldPassword = passwordData.oldPassword;

  const client = await connectDatabase();
  if (!client) {
    res.status(404).json({ message: "cannot connect to database" });
    return;
  }

  const user = await findSpecificUser(client, session.user.email);
  if (!user) {
    res.status(404).json({ message: "Cannot find user in database" });
    client.close();
    return;
  }

  const passwordMatch = await verifyPassword(
    oldPassword,
    user.encryptedPassword
  );
  if (!passwordMatch) {
    res.status(422).json({ message: "Invalid password" });
    client.close();
    return;
  }

  const newEncryptedPassword = await hashPassword(newPassword);
  const result = await updatePasswordSpecific(
    client,
    session.user.email,
    newEncryptedPassword
  );
  if (!result) {
    res.status(404).json({ message: "Operation failed" });
  }

  res.status(201).json({ message: "success in updating" });
  client.close();
}
