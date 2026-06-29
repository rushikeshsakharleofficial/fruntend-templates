import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const file = "registry/discovered.json";
const items = existsSync(file) ? JSON.parse(await readFile(file, "utf8")) : [];

const scored = items.map((item: any) => {
  let score = 50;
  if (item.copyPolicy === "copy-code") score += 25;
  if ((item.tags || []).includes("dashboard")) score += 10;
  if ((item.tags || []).includes("saas")) score += 10;
  if ((item.tags || []).includes("monitoring")) score += 10;
  return { ...item, score };
}).sort((a: any, b: any) => (b.score || 0) - (a.score || 0));

await writeFile(file, JSON.stringify(scored, null, 2) + "\n");
console.log(`Scored ${scored.length} item(s).`);
