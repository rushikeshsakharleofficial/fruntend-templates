# Frontend Templates

Offline-first frontend component repository for generating SaaS-grade websites, dashboards, pages, prompt recipes, and reusable design profiles.

## Supported targets

- HTML, CSS, JavaScript, TypeScript
- React / TSX
- Node.js tooling
- PHP frontend rendering and Blade-style templates
- Vue, Svelte, Angular, Astro adapter guidance
- Utility CSS, CSS Modules, SCSS/Sass

React is treated as a UI library. Node.js is treated as runtime/tooling. PHP is supported for server-rendered frontend templates.

## Main folders

```txt
design-md/       Design profiles for SaaS styles
templates/       Website, dashboard, auth, billing, monitoring templates
ui/              Reusable UI block notes
prompts/         Prompt recipes
registry/        Template/source/score metadata
collectors/      Daily discovery scripts
scripts/         Local cron helpers
.github/workflows/daily-template-discovery.yml
```

## Daily automation

The repository includes a GitHub Actions workflow at:

```txt
.github/workflows/daily-template-discovery.yml
```

It runs daily at **12:00 AM Asia/Kolkata** and commits updates directly to `main` for testing.

The ChatGPT scheduled task is also configured daily at 12:00 AM IST with the same rule: add only new templates, do not remove old templates, and update `main` directly.

## Use locally

```bash
npm install
npm run discover
```

## Optional local cron

```bash
bash scripts/install-cron.sh
```

## License and source rule

Copy source code only when the upstream license is clearly compatible, such as MIT, Apache-2.0, BSD, ISC, or CC0. For unclear, paid, gated, or proprietary sources, store metadata and prompt notes only.

## Safety rule

The collector must not collect private project files, secrets, credentials, private repositories, or proprietary source code.
