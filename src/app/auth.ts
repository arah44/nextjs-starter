import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";
import { users } from "@/db/schema/user";
import { accounts, sessions, verificationTokens } from "@/db/schema/auth";
import { signInSchema } from "@/lib/zod"

import Credentials from "next-auth/providers/credentials";
import { Adapter } from "next-auth/adapters";
import { saltAndHashPassword, verifyPassword } from "@/lib/auth/password-helpers";
import { getUserByEmail } from "@/db/users/read";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null

        const { email, password } = await signInSchema.parseAsync(credentials)

 
        // logic to salt and hash password
        const pwHash = await saltAndHashPassword(password)
 
        // logic to verify if the user exists
        user = await getUserByEmail(email)
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }
        
        // Return user object without the password
 
        // return user object with their profile data
        return user
      },
    }),
  ],
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }) as Adapter,
  debug: true
});
