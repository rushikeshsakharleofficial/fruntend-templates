# Free Template Design Profiles

Purpose: reusable style profiles for generating free/open-source UI templates without copying proprietary assets. Use these as design direction notes, not as exact brand clones.

## Shared rules

- Build with accessible contrast, keyboard navigation, semantic landmarks, and responsive layouts.
- Prefer CSS variables for color tokens and spacing.
- Use open-source icon sets and avoid proprietary logos unless the user provides rights.
- Use free/open-source components first; do not import paid/pro UI blocks.
- Treat missing license files, gated downloads, Pro comparisons, or unclear redistribution terms as metadata-only references.

---

## Vercel-style SaaS

- Color tokens: near-black background, white cards, neutral gray borders, subtle blue/violet accent.
- Typography: compact sans-serif, tight headings, strong hierarchy, mono labels for technical metadata.
- Buttons: pill or soft-radius primary, black/white contrast, thin-border secondary.
- Cards: minimal border, low shadow, high whitespace, status chips.
- Layout: centered hero, split feature grids, deployment/status panels, command snippets.
- Spacing: generous section padding, compact app-dashboard density.
- Radius/shadow: medium radius, nearly flat shadow.
- Dark/light: first-class dark mode, neutral surfaces.
- Components: deployment cards, usage charts, project list, environment-variable table.
- Prompt pattern: "Generate a minimal SaaS dashboard with Vercel-like neutral surfaces, deployment status cards, usage metrics, command snippets, and clean project navigation."

## Supabase-style Product Dashboard

- Color tokens: dark slate, emerald accent, muted gray panels, soft green success states.
- Typography: practical developer UI, readable dashboard labels.
- Buttons: emerald primary, outline secondary, icon buttons for table actions.
- Cards: dark panels with thin borders and clear status indicators.
- Layout: database/app dashboard, side nav, auth/settings screens, table-first UI.
- Spacing: medium density for CRUD/admin workflows.
- Radius/shadow: medium radius, low shadow.
- Dark/light: dark-friendly with emerald focus rings.
- Components: auth panels, database table, API key list, project health cards.
- Prompt pattern: "Generate a Supabase-inspired admin dashboard with auth, database tables, API keys, project health, and emerald-accented dark mode."

## Cloudflare-style Infra Console

- Color tokens: warm orange accent, dark/white neutral surfaces, amber warning states.
- Typography: dense admin console labels, strong table readability.
- Buttons: orange primary, gray secondary, compact danger actions.
- Cards: stat cards, request/security panels, traffic charts.
- Layout: left nav, top filters, zone/site selector, security and DNS sections.
- Spacing: compact enterprise density.
- Radius/shadow: small radius, mostly border-based.
- Dark/light: both modes with warning/status tokens.
- Components: DNS table, firewall rules, traffic analytics, cache status, proxy/IP monitors.
- Prompt pattern: "Generate a Cloudflare-inspired infra dashboard with DNS records, proxy status, traffic analytics, firewall events, and compact admin tables."

## Notion-style Workspace

- Color tokens: off-white canvas, soft gray borders, muted accent chips.
- Typography: document-first hierarchy, large page title, readable body text.
- Buttons: ghost buttons, inline action menus, subtle hover states.
- Cards: page cards, database views, checklist items.
- Layout: document canvas, sidebar tree, kanban/table/calendar modes.
- Spacing: calm whitespace, low visual noise.
- Radius/shadow: small radius, no heavy shadows.
- Dark/light: soft dark mode, muted borders.
- Components: task database, docs layout, property panel, comments, changelog.
- Prompt pattern: "Generate a Notion-like project workspace with sidebar pages, database table, kanban cards, document editor, and quiet minimal styling."

## Linear-style Issue Tracker

- Color tokens: charcoal/dark surfaces, purple/blue accent, crisp border tokens.
- Typography: compact UI labels, sharp issue title hierarchy.
- Buttons: small rounded buttons, command-menu actions, status chips.
- Cards: issue rows, cycle cards, roadmap cards.
- Layout: keyboard-first app shell, sidebar, issue list, detail panel.
- Spacing: dense but readable.
- Radius/shadow: small/medium radius, subtle elevation.
- Dark/light: dark mode preferred, light mode neutral.
- Components: issue list, command palette, status filters, roadmap board, activity feed.
- Prompt pattern: "Generate a Linear-inspired issue tracker with command palette, compact issue rows, status chips, roadmap board, and dark productivity UI."

## Stripe-style Billing Console

- Color tokens: white/indigo/blue, subtle gradients, soft gray surfaces.
- Typography: polished business UI, clear numeric hierarchy.
- Buttons: blue/indigo primary, clear destructive states.
- Cards: billing cards, invoice cards, subscription panels.
- Layout: billing console, customer table, invoice details, settings sidebar.
- Spacing: balanced SaaS/admin density.
- Radius/shadow: medium radius, soft elevation.
- Dark/light: light mode primary, dark mode available.
- Components: plans, invoices, payments table, subscription details, revenue cards.
- Prompt pattern: "Generate a Stripe-inspired billing dashboard with revenue KPIs, customer table, invoices, subscription plans, and polished financial forms."

## GitHub-style Developer Portal

- Color tokens: neutral gray, blue links, green success, red danger, dark code panels.
- Typography: system sans for UI, monospace for code and IDs.
- Buttons: compact primary/secondary, outline buttons, icon actions.
- Cards: repo cards, PR panels, code blocks, issue rows.
- Layout: repo-style navigation, tabs, activity feed, settings pages.
- Spacing: compact technical density.
- Radius/shadow: small radius, border-first.
- Dark/light: both modes, readable code surfaces.
- Components: repository list, CI status, commit feed, issue tracker, file tree.
- Prompt pattern: "Generate a GitHub-inspired developer portal with repo cards, file tree, CI status, issue list, pull request activity, and monospace metadata."

## Google Material Admin

- Color tokens: Material primary, secondary, surface, error, outline, and container variables.
- Typography: Material type scale, clear labels, accessible forms.
- Buttons: filled, tonal, outlined, text buttons.
- Cards: elevated/filled cards with proper state layers.
- Layout: app bar, navigation rail/drawer, responsive grids.
- Spacing: 8px grid.
- Radius/shadow: Material elevation tokens.
- Dark/light: Material dark/light tokens.
- Components: forms, data tables, dialogs, snackbars, navigation rail.
- Prompt pattern: "Generate a Material-style admin dashboard with navigation rail, data table, settings forms, dialogs, and clear elevation/state layers."

## Atlassian-style Work Management

- Color tokens: blue primary, neutral gray surfaces, status colors for work items.
- Typography: enterprise-readable, clear labels and breadcrumbs.
- Buttons: blue primary, subtle secondary, status dropdowns.
- Cards: issue/project cards, sprint summaries, audit cards.
- Layout: top product nav, left project nav, work item panels.
- Spacing: compact enterprise density.
- Radius/shadow: small radius, border-driven.
- Dark/light: light-first with dark option.
- Components: project board, backlog list, audit log, permissions table.
- Prompt pattern: "Generate an Atlassian-inspired project admin with backlog, sprint board, audit log, permissions table, and enterprise navigation."

## Slack-style Collaboration App

- Color tokens: deep purple sidebar, neutral message surface, colorful channel/status accents.
- Typography: readable chat UI, strong sender/message hierarchy.
- Buttons: compact icon buttons, reaction pills, composer actions.
- Cards: message cards, thread panels, app notification cards.
- Layout: workspace sidebar, channel list, message timeline, thread drawer.
- Spacing: compact chat density.
- Radius/shadow: small radius, subtle panels.
- Dark/light: both modes with strong sidebar contrast.
- Components: channels, message composer, mentions, threads, notifications.
- Prompt pattern: "Generate a Slack-inspired collaboration dashboard with workspace sidebar, channel list, message timeline, thread panel, and compact composer."

## Shopify-style Commerce Admin

- Color tokens: green accent, neutral surfaces, success/warning/error commerce states.
- Typography: merchant-friendly labels, readable tables.
- Buttons: green/black primary, outline secondary, clear bulk actions.
- Cards: order cards, product cards, analytics panels.
- Layout: commerce admin shell, product list, order details, inventory screens.
- Spacing: medium dashboard density.
- Radius/shadow: medium radius, soft shadows.
- Dark/light: light mode primary, dark optional.
- Components: product table, order workflow, inventory cards, customer profile, sales KPIs.
- Prompt pattern: "Generate a Shopify-inspired commerce admin with product table, order workflow, inventory cards, sales metrics, and customer profile panels."

## Tailwind Modern

- Color tokens: Tailwind neutral palette, one vivid accent, semantic status colors.
- Typography: modern sans, large hero headings, compact labels.
- Buttons: rounded-lg primary, outline/ghost variants, strong focus rings.
- Cards: gradient borders, soft shadows, glass/solid variants.
- Layout: responsive marketing + app shell, bento grids, dashboard sections.
- Spacing: 4px/8px Tailwind scale.
- Radius/shadow: lg/xl radius, soft shadows.
- Dark/light: CSS variables for both.
- Components: bento grid, pricing cards, testimonials, dashboard KPIs.
- Prompt pattern: "Generate a modern Tailwind SaaS landing page with bento features, pricing, testimonials, dashboard preview, and clean responsive sections."

## Cyber Dashboard

- Color tokens: dark navy/black, cyan/lime/purple accents, red critical states.
- Typography: mono labels for IDs/logs, strong numeric KPIs.
- Buttons: sharp/medium radius, glowing focus only when useful.
- Cards: terminal panels, event cards, anomaly cards.
- Layout: SOC-style dashboard, event streams, map/chart panels, severity filters.
- Spacing: dense monitoring UI.
- Radius/shadow: small radius, neon borders used sparingly.
- Dark/light: dark mode primary.
- Components: security alerts, log stream, incident timeline, IP reputation table.
- Prompt pattern: "Generate a cyber monitoring dashboard with alert severity filters, live log stream, incident timeline, IP reputation table, and dark high-contrast panels."

## Infra Monitoring

- Color tokens: neutral dark/light, blue info, green healthy, amber warning, red critical.
- Typography: high-readability metrics, monospace for hostnames/IPs.
- Buttons: compact filters, grouped actions, danger confirmations.
- Cards: KPI tiles, host cards, queue cards, SLA panels.
- Layout: monitoring grid, service tables, alert side panel, topology summary.
- Spacing: compact operations density.
- Radius/shadow: small radius, border-first.
- Dark/light: both modes; dark mode preferred for NOC screens.
- Components: server health, queue depth, proxy/IP status, DNS migration progress, audit logs.
- Prompt pattern: "Generate an infra monitoring dashboard with server health KPIs, alert table, queue depth charts, proxy/IP status, DNS migration tracker, and audit log panels."

## Minimal Admin

- Color tokens: white/gray/black, one accent, clear semantic states.
- Typography: simple sans-serif, strong section headings, compact table text.
- Buttons: plain primary/secondary/destructive variants.
- Cards: flat cards with thin borders.
- Layout: sidebar + header + content, tables first, modals for CRUD.
- Spacing: consistent 8px scale.
- Radius/shadow: medium radius, almost no shadow.
- Dark/light: both modes using variables.
- Components: data table, filters, create/edit modal, empty states, audit timeline.
- Prompt pattern: "Generate a minimal admin UI with sidebar navigation, data table, filters, CRUD modal, empty state, audit timeline, and clean neutral styling."

## Free shadcn SaaS Admin

- Color tokens: CSS-variable driven neutrals, subtle primary accent, muted borders, semantic success/warning/destructive states.
- Typography: compact app UI labels, clear route/page titles, mono metadata for IDs and API values.
- Buttons: shadcn-style default/secondary/ghost/destructive variants with strong focus rings.
- Cards: KPI cards, chart cards, billing cards, notification cards, workspace/team cards.
- Layout: collapsible sidebar + sticky header + route groups for dashboard, auth, billing, settings, chat, kanban, and tables.
- Spacing: medium dashboard density with consistent 4px/8px Tailwind scale.
- Radius/shadow: variable radius, border-first cards, limited shadows.
- Dark/light: theme switcher, tweakcn-compatible token mapping, avoid hardcoded colors.
- Components: React Query data tables, filters, pagination, command palette, kanban, chat, notifications, billing/subscription page, team/workspace management.
- Prompt pattern: "Generate a free shadcn SaaS admin dashboard with collapsible sidebar, analytics cards, React Query data table, kanban, chat, notifications, billing, settings, workspace/team management, and token-based dark/light themes."

## Free TailAdmin-style Next Dashboard

- Color tokens: clean light surfaces, dark-mode variables, blue primary accent, green/red/amber status tokens.
- Typography: practical admin labels, strong KPI numbers, readable table and chart legends.
- Buttons: compact primary actions, outline table actions, grouped filters, icon dropdowns.
- Cards: dashboard KPI widgets, line/bar chart panels, profile cards, auth cards, alert cards.
- Layout: stable admin shell with sidebar, topbar, dashboard content grid, charts/tables, auth/profile/error pages.
- Spacing: balanced dashboard density for operations/admin screens.
- Radius/shadow: medium radius, soft shadows on cards, clear borders in dark mode.
- Dark/light: built-in dark mode; keep chart colors accessible in both modes.
- Components: 30+ free dashboard components, forms, inputs, alerts, dropdowns, modals, charts, tables, profile, 404, and auth screens.
- Prompt pattern: "Generate a free TailAdmin-style Next.js dashboard with sidebar, topbar, KPI widgets, chart panels, auth forms, profile page, tables, alerts, modals, and accessible dark mode."
