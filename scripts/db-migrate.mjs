import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
if (!process.env.DATABASE_URL) {
  console.error(
    "No database connected. Set DATABASE_URL in .env.local or the environment before running db:migrate. No changes were made.",
  );
  process.exit(1);
}
const cli = fileURLToPath(
  new URL("../node_modules/prisma/build/index.js", import.meta.url),
);
const result = spawnSync(process.execPath, [cli, "migrate", "deploy"], {
  stdio: "inherit",
});
process.exit(result.status ?? 1);
