// Server/CLI scaffold only. Not imported by any page, browser component or API route.
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export function createDatabaseClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString)
    throw new Error("Set DATABASE_URL before connecting PostgreSQL.");
  const parsed = new URL(connectionString);
  if (!["postgresql:", "postgres:"].includes(parsed.protocol)) {
    throw new Error("DATABASE_URL must use postgresql:// or postgres://.");
  }
  // No SSL bypass. Production connections should use a verified TLS connection.
  const adapter = new PrismaPg({
    connectionString,
    max: 2,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 10000,
  });
  return new PrismaClient({ adapter, log: [] });
}
