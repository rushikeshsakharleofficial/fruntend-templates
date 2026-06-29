# Frontend Templates

Offline-first frontend component skill for generating SaaS-grade UI components, pages, layouts, prompts, and reusable templates.

> Repository bootstrapped by the `frontend-components` skill generator.

## Purpose

This repository stores reusable frontend templates and prompt recipes for building high-quality SaaS interfaces without depending on live design tools at generation time.

It supports:

- HTML, CSS, JavaScript, TypeScript
- React / TSX
- Node.js tooling
- PHP frontend rendering and Laravel Blade-style templates
- Vue, Svelte, Angular, Astro adapters
- Tailwind CSS, CSS Modules, SCSS/Sass
- SaaS design profiles inspired by Cloudflare, Vercel, Supabase, Notion, Google Material, Atlassian, Linear, Stripe, GitHub, Slack, and Shopify-style interfaces

## What is included

```txt
frontend-components/
  SKILL.md
  PRIVACY.md
  package.json
  tsconfig.json
  registry/
  design-md/
  prompts/
  templates/
  components/
  collectors/
  scripts/
  .github/workflows/
```

## Offline-first model

The skill works from local files:

1. Pick a design profile from `design-md/`.
2. Pick a component or page template from `components/` or `templates/`.
3. Use a prompt recipe from `prompts/`.
4. Generate framework-specific output using `adapters/`.

## Daily update flow

This repository includes two update paths:

### GitHub Actions

`.github/workflows/daily-component-scan.yml` runs daily and creates an `auto/component-discovery` branch with newly discovered metadata.

### Local cron

Run:

```bash
bash scripts/install-cron.sh
```

The cron is opt-in. It does not run unless installed manually.

## Licensing rule

Only copy source code when the upstream license is clearly compatible, such as MIT, Apache-2.0, BSD, ISC, or CC0. For unclear, gated, or paid sources, store only metadata, design notes, and prompt patterns.

## Safety rule

The collector never uploads private user projects. It only reads configured public sources from `collectors/sources.yaml`.
