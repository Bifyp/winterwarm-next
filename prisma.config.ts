import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "node --import tsx prisma/seed.ts",
  },
  // This intentionally non-working local example allows validate/generate without a DB.
  // scripts/db-migrate.mjs refuses to run deploy unless DATABASE_URL was explicitly set.
  datasource: {
    url:
      process.env.DATABASE_URL ||
      "postgresql://demo:demo@127.0.0.1:5432/winterwarm_demo",
  },
});
