import dotenv from "dotenv";
import path from "path";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { client, db } from "./drizzle";
import { sql } from "drizzle-orm";

dotenv.config();

async function main() {
  await db.execute(sql`show databases`);
  await migrate(db, {
    migrationsFolder: path.join(process.cwd(), "./lib/db/migrations"),
  });
  console.log(`Migrations complete`);
  await client.end();
}

main();
