
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: AuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET || "",
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        console.log(user);
        if (account?.provider === "google") {
          try {
            await fetch("http://localhost:3000/api/user", {
              method: "POST",
              body: JSON.stringify({ name: user.name, email: user.email }),
            });
            // return "";
          } catch (error) {
            console.log(error);
          }
        }
        console.log("first");
        return true;
      },
    },
  };
  