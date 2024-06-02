import { integer, sqliteTable, text, primaryKey } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("user", {
  id: text("id")
    .primaryKey()
})