import "dotenv/config";
import { defineConfig } from "drizzle-kit";

console.log("config running")

export default defineConfig({
  schema: "./src/db/schema/*",
  dialect: "sqlite",
  driver: 'turso',  
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  out: "./drizzle",
  verbose: true,
  strict: true,
});
