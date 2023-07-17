import { verifyPassword } from "@/lib/auth";
import { connectDatabase, findSpecificUser } from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // define the function to define whether the credentials are correct and whether we should
      // give the authorization to the user
      async authorize(credentials) {
        const client = await connectDatabase();
        const user = await findSpecificUser(client, credentials.email);

        if (!user) {
          client.close();
          throw new Error("User do not exist");
        }
        const match = await verifyPassword(
          credentials.password,
          user.encryptedPassword
        );
        if (!match) {
          client.close();
          throw new Error("Wrong username or password");
        }

        client.close();
        return { email: user.email };
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
