import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const file = "registry/discovered.json";
const items = existsSync(file) ? JSON.parse(await readFile(file, "utf8")) : [];

const normalized = items.map((item: any) => ({
  ...item,
  name: String(item.name || "").trim(),
  category: String(item.category || "unknown").toLowerCase().trim(),
  framework: item.framework || "all",
  language: item.language || "markdown",
  tags: Array.from(new Set((item.tags || []).map((tag: string) => tag.toLowerCase().trim()))).sort()
}));

await writeFile(file, JSON.stringify(normalized, null, 2) + "\n");
console.log(`Normalized ${normalized.length} item(s).`);
