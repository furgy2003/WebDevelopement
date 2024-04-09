import bcrypt from "bcrypt";

export async function hashPassword(password) {
  const saltRounds = 1;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  return encryptedPassword;
}

export async function verifyPassword(enteredPassword, hashPassword) {
  const match = await bcrypt.compare(enteredPassword, hashPassword);
  return match;
}
