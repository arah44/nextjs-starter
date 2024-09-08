import { db } from "@/db";
import { User, users } from "../schema/user";
import { eq } from "drizzle-orm";
import { returnOneOrThrow } from "../db-helpers";

export async function getUserByEmail(
  email: string,
): Promise<User> {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email));
  return returnOneOrThrow(user)
}
