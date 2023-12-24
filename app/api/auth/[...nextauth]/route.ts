import { Account, User, AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { authOptions } from "./authOptions";

type SignInProps = {
  user: User;
  account: Account;
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
