import type { Config } from "drizzle-kit";
console.log("Hello, Drizzle!", process.env.MYSQL_URL!, process.env.MYSQL_URL);
export default {
  schema: "./lib/db/schema.ts",
  out: "./lib/db/migrations",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.MYSQL_URL!,
  },
} satisfies Config;
