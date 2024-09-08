import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
  password: text("password"), // Hashed password
  createdAt: integer("created_at", { mode: "timestamp_ms" }).$defaultFn(
    () => new Date()
  ),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).$defaultFn(
    () => new Date()
  ),
});

export type User = typeof users.$inferSelect;
export type UserInsert = typeof users.$inferInsert;
