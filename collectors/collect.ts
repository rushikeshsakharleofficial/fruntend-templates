import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const file = "registry/discovered.json";
await mkdir("registry", { recursive: true });

const existing = existsSync(file) ? JSON.parse(await readFile(file, "utf8")) : [];
const now = new Date().toISOString();

const seeds = [
  { name: "SaaS Landing Page Kit", source: "local-seed", url: "templates/website/saas-landing-page.md", category: "website", license: "MIT", copyPolicy: "copy-code", tags: ["saas", "landing"], discoveredAt: now },
  { name: "Admin Dashboard Shell", source: "local-seed", url: "templates/dashboard/admin-dashboard-shell.md", category: "dashboard", license: "MIT", copyPolicy: "copy-code", tags: ["dashboard", "admin"], discoveredAt: now },
  { name: "Infra Monitoring Dashboard", source: "local-seed", url: "templates/monitoring/infra-monitoring-dashboard.md", category: "monitoring", license: "MIT", copyPolicy: "copy-code", tags: ["monitoring", "servers"], discoveredAt: now }
];

const keys = new Set(existing.map((x: any) => `${x.source}:${x.url}`));
for (const item of seeds) {
  const key = `${item.source}:${item.url}`;
  if (!keys.has(key)) existing.push(item);
}

await writeFile(file, JSON.stringify(existing, null, 2) + "\n");
console.log(`Collected ${existing.length} item(s).`);
