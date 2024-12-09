import { exec } from "node:child_process";
import { promises as fs } from "node:fs";
import { promisify } from "node:util";
import readline from "node:readline";
import path from "node:path";

const execAsync = promisify(exec);

function question(query: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

async function getMySQLURL(): Promise<string> {
  console.log("Step 1: Setting up MySQL");
  const dbChoice = await question(
    "Do you want to use a local MySQL instance with Docker (L) or a remote MySQL instance (R)? (L/R): "
  );

  if (dbChoice.toLowerCase() === "l") {
    console.log("Setting up local MySQL instance with Docker...");
    await setupLocalMySQL();
    return "mysql://root:password@localhost:3306/mysql";
  } else {
    console.log(
      "You can find MySQL databases at: https://vercel.com/marketplace?category=databases"
    );
    return await question("Enter your MYSQL_URL: ");
  }
}

async function setupLocalMySQL() {
  console.log("Checking if Docker is installed...");
  try {
    await execAsync("docker --version");
    console.log("Docker is installed.");
  } catch (error) {
    console.error(
      "Docker is not installed. Please install Docker and try again."
    );
    console.log(
      "To install Docker, visit: https://docs.docker.com/get-docker/"
    );
    process.exit(1);
  }

  console.log("Creating docker-compose.yml file...");
  const dockerComposeContent = `
services:
  mysql:
    image: mysql:8.0
    container_name: music_player_mysql
    environment:
      MYSQL_DATABASE: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: password
      MYSQL_ROOT_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
`;

  await fs.writeFile(
    path.join(process.cwd(), "docker-compose.yml"),
    dockerComposeContent
  );
  console.log("docker-compose.yml file created.");

  console.log("Starting Docker container with `docker compose up -d`...");
  try {
    await execAsync("docker compose up -d");
    console.log("Docker container started successfully.");
  } catch (error) {
    console.error(
      "Failed to start Docker container. Please check your Docker installation and try again."
    );
    process.exit(1);
  }
}

async function getVercelBlobToken(): Promise<string> {
  console.log("Step 2: Setting up Vercel Blob");
  console.log(
    "You can find or create a Vercel Blob store at: https://vercel.com/docs/storage/vercel-blob"
  );
  return await question("Enter your BLOB_READ_WRITE_TOKEN: ");
}

async function writeEnvFile(envVars: Record<string, string>) {
  console.log("Step 3: Writing environment variables to .env");
  const envContent = Object.entries(envVars)
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

  await fs.writeFile(path.join(process.cwd(), ".env"), envContent);
  console.log(".env file created with the necessary variables.");
}

async function main() {
  const MYSQL_URL = await getMySQLURL();
  const BLOB_READ_WRITE_TOKEN = await getVercelBlobToken();

  await writeEnvFile({
    MYSQL_URL,
    BLOB_READ_WRITE_TOKEN,
  });

  console.log("🎉 Setup completed successfully!");
}

main().catch(console.error);
