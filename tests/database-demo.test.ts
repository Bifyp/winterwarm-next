import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { categories, products } from "../prisma/seed-data";
import { createDatabaseClient } from "../lib/database";

test("demo fixtures contain three categories and 22 unique products", () => {
  assert.equal(categories.length, 3);
  assert.equal(products.length, 22);
  assert.equal(new Set(products.map((p) => p.id)).size, 22);
  const slugs = new Set(categories.map((c) => c.slug));
  for (const p of products) {
    assert.ok(slugs.has(p.categorySlug));
    assert.ok(p.name.length > 0);
    assert.ok(p.imagePath.startsWith("/assets/"));
    assert.ok(
      p.destinationUrl.startsWith("/") ||
        p.destinationUrl.startsWith("https://winterwarm.pl/"),
    );
  }
});
test("generated migration defines planned tables, relation and statuses", () => {
  const sql = readFileSync(
    "prisma/migrations/0001_initial/migration.sql",
    "utf8",
  );
  for (const name of ["categories", "products", "inquiries"])
    assert.ok(sql.includes(`CREATE TABLE "${name}"`));
  assert.ok(sql.includes('REFERENCES "categories"'));
  assert.ok(sql.includes("EMAIL_ACCEPTED"));
  assert.ok(!/INSERT INTO/i.test(sql));
});
test("client refuses absent or non-PostgreSQL URL before connecting", () => {
  const before = process.env.DATABASE_URL;
  try {
    delete process.env.DATABASE_URL;
    assert.throws(() => createDatabaseClient(), /Set DATABASE_URL/);
    process.env.DATABASE_URL = "mysql://example.invalid/db";
    assert.throws(() => createDatabaseClient(), /postgresql/);
  } finally {
    if (before === undefined) delete process.env.DATABASE_URL;
    else process.env.DATABASE_URL = before;
  }
});
test("seed preview requires no credentials and makes no writes", () => {
  const env = { ...process.env };
  delete env.DATABASE_URL;
  delete env.SEED_DEMO_DATA;
  const result = spawnSync(
    process.execPath,
    ["--import", "tsx", "prisma/seed.ts", "--dry-run"],
    { env, encoding: "utf8" },
  );
  assert.equal(result.status, 0);
  assert.match(result.stdout, /3 categories, 22 products, 0 inquiries/);
  assert.match(result.stdout, /No connection or writes/);
});
test("migration execution is blocked without explicit connection URL", () => {
  const env = { ...process.env };
  delete env.DATABASE_URL;
  const result = spawnSync(process.execPath, ["scripts/db-migrate.mjs"], {
    env,
    encoding: "utf8",
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /No database connected/);
});
test("demo seed cannot run accidentally without the opt-in flag", () => {
  const env = { ...process.env };
  delete env.SEED_DEMO_DATA;
  delete env.DATABASE_URL;
  const result = spawnSync(
    process.execPath,
    ["--import", "tsx", "prisma/seed.ts"],
    { env, encoding: "utf8" },
  );
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Seed was not completed/);
});

test("server-only Supabase migration closes anonymous access to every application table", () => {
  const sql = readFileSync(
    "prisma/migrations/0002_server_only_access/migration.sql",
    "utf8",
  );
  for (const table of ["categories", "products", "inquiries"]) {
    assert.ok(
      sql.includes(`ALTER TABLE public.${table} ENABLE ROW LEVEL SECURITY`),
    );
  }
  assert.ok(sql.includes("FROM PUBLIC, anon, authenticated"));
  assert.ok(!/CREATE POLICY/i.test(sql));
});
