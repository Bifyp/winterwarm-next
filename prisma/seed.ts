import { createDatabaseClient } from "../lib/database";
import { categories, products } from "./seed-data";

async function main() {
  if (process.argv.includes("--dry-run")) {
    console.log(
      `DEMO PREVIEW ONLY: ${categories.length} categories, ${products.length} products, 0 inquiries. No connection or writes.`,
    );
    return;
  }
  if (process.env.SEED_DEMO_DATA !== "true") {
    throw new Error(
      "Demo seeding disabled. Use a test database and explicitly set SEED_DEMO_DATA=true.",
    );
  }
  const db = createDatabaseClient();
  try {
    await db.$transaction(async (tx) => {
      await tx.category.createMany({ data: categories, skipDuplicates: true });
      await tx.product.createMany({ data: products, skipDuplicates: true });
    });
    console.log(
      `Demo seed completed (${categories.length} category candidates and ${products.length} product candidates). Existing IDs were not overwritten. No inquiry records were created.`,
    );
  } finally {
    await db.$disconnect();
  }
}
main().catch(() => {
  // Do not echo database URLs, credentials or raw adapter errors into build logs.
  console.error(
    "Seed was not completed. Check DATABASE_URL, applied migrations and SEED_DEMO_DATA=true. Use db:seed:preview for a connection-free preview.",
  );
  process.exitCode = 1;
});
