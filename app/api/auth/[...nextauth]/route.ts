import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "",
  callbacks: {
    signIn: async ({ user, account }: any) => {
      console.log(user);
      if (account.provider === "google") {
        try {
          await fetch("http://localhost:3000/api/user", {
            method: "POST",
            body: JSON.stringify({ name: user.name, email: user.email }),
          });
        } catch (error) {
          console.log(error);
        }
      }
      console.log("first");
      return user;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
