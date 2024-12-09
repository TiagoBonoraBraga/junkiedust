import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MYSQL_URL) {
  throw new Error("MYSQL_URL environment variable is not set");
}

export const client = await mysql.createConnection(process.env.MYSQL_URL);
export const db = drizzle(client, { schema });
