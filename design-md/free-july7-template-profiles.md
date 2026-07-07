# Free July 7 Template Design Profiles

Source policy: use only free/public/open-source template references. Do not use paid, Pro, premium, gated, login-required, marketplace-only, subscription-only, trial-only, or unclear-access UI assets.

## Next 16 Chart Dashboard

- Source: `aurorascharff/next16-chart-dashboard`
- URL: https://github.com/aurorascharff/next16-chart-dashboard
- License: MIT verified from upstream `LICENSE`.
- Framework/style: Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Base UI, Recharts.
- Color tokens: neutral zinc/slate surfaces, high-contrast foreground, subtle border tokens, muted chart backgrounds, accent-driven KPI states.
- Typography rules: Geist-style sans font, compact dashboard labels, clear numeric hierarchy, small muted metadata for deltas/time ranges.
- Button styles: shadcn-style variants with rounded-md/rounded-lg, compact icon buttons for filters/actions, ghost buttons in toolbar zones.
- Card styles: KPI cards with light border, restrained shadow, rounded-xl, chart cards with toolbar header and responsive content area.
- Layout rules: responsive dashboard shell, grid-based cards, chart-first content regions, keep filters near the chart header.
- Spacing: 4/6/8 Tailwind rhythm, dense but readable dashboard gutters, avoid oversized marketing spacing inside data views.
- Shadows/radius: low elevation, mostly border-first cards, rounded-lg to rounded-xl.
- Dark/light notes: preserve contrast in charts, use muted gridlines, avoid saturated chart backgrounds.
- Component rules: use error boundaries around chart-heavy views, add empty/error/loading states, keep Sonner/toast feedback for user actions.
- Prompt pattern: "Create a Next.js analytics dashboard with shadcn cards, Recharts KPI panels, compact filters, responsive grid, dark mode, and production loading/error states."

## CTI Platform Cyber Dashboard

- Source: `rinjanianalytics/cti-platform-dashboard`
- URL: https://github.com/rinjanianalytics/cti-platform-dashboard
- License: MIT verified from upstream `LICENSE`.
- Framework/style: Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Base UI, command palette, force graph.
- Color tokens: dark cyber surfaces, slate/zinc panels, amber/red severity accents, blue/green trust/status accents, muted borders.
- Typography rules: compact operational labels, monospace-friendly indicators for hashes/IPs/IOCs, bold severity headings.
- Button styles: command-oriented ghost buttons, icon actions, severity filters, destructive actions clearly separated.
- Card styles: threat cards, severity summary tiles, relationship graph panels, markdown intelligence report cards.
- Layout rules: SOC-style side navigation, overview-first dashboard, graph + detail split panels, filters pinned above incident lists.
- Spacing: dense monitoring layout with 3/4/6 unit rhythm; avoid overly spacious SaaS landing layouts.
- Shadows/radius: low-glow cyber feel only when useful; default to border-first panels with rounded-lg.
- Dark/light notes: dark mode should be first-class; severity colors must remain readable against dark surfaces.
- Component rules: use command palette for navigation/search, date filters for incidents, markdown renderers for intelligence summaries, graph panels for threat relationships.
- Prompt pattern: "Create a cyber threat intelligence dashboard with CTI overview cards, severity filters, relationship graph, markdown intel summaries, command palette, dark SOC theme, and responsive incident detail panels."

## Next.js Nextra Docs Starter

- Source: `pdsuwwz/nextjs-nextra-starter`
- URL: https://github.com/pdsuwwz/nextjs-nextra-starter
- License: MIT verified from upstream `LICENSE` and `package.json`.
- Framework/style: Next.js 16, Nextra 4, React 19, Tailwind CSS v4, Radix UI, docs theme.
- Color tokens: document-first neutral backgrounds, readable prose foreground, subtle callout colors, primary accent for links/sidebar active states.
- Typography rules: prose-optimized headings, strong H1/H2 hierarchy, compact code block labels, readable long-form line length.
- Button styles: minimal docs nav buttons, copy buttons for code blocks, pill links for next/previous navigation.
- Card styles: docs cards, feature callouts, API reference panels, changelog blocks, searchable knowledge-base cards.
- Layout rules: persistent docs sidebar, table of contents on desktop, single-column readable mobile flow, search prominent in header.
- Spacing: prose rhythm over dashboard density; use generous heading margins and compact list spacing.
- Shadows/radius: minimal shadows; cards use borders and rounded-lg.
- Dark/light notes: code blocks, callouts, and sidebar active states must be legible in both modes.
- Component rules: include search index/pagefind notes, sitemap/SEO readiness, copyable examples, and accessible anchors.
- Prompt pattern: "Create a product documentation portal using Nextra-style layout with sidebar navigation, searchable docs, prose pages, code examples with copy buttons, dark mode, and SEO-ready metadata."

## OpenStarterKit Next.js SaaS Starter Kit

- Source: `openstarterkit/nextjs-saas-starter-kit`
- URL: https://github.com/openstarterkit/nextjs-saas-starter-kit
- License: MIT verified from upstream `LICENSE`.
- Framework/style: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Radix UI, NextAuth, Prisma/Postgres, Stripe, Resend.
- Color tokens: modern SaaS neutrals, strong primary CTA, muted dashboard surfaces, success/warning/destructive tokens for billing and auth states.
- Typography rules: marketing headline hierarchy for landing pages, compact app-shell text for authenticated dashboards, readable form labels and helper text.
- Button styles: primary CTA for onboarding/billing, secondary outline actions, destructive account/billing actions, loading states for async forms.
- Card styles: pricing cards, auth cards, settings panels, subscription status cards, seed/demo data cards.
- Layout rules: split marketing/app shell structure, auth-first protected pages, settings and billing sections grouped by task.
- Spacing: landing pages use 12/16 section spacing; dashboards/settings use 4/6/8 spacing.
- Shadows/radius: rounded-xl cards with subtle shadows on marketing pages; border-first panels in app views.
- Dark/light notes: billing and auth states must be visually distinct in both modes; CTAs should keep high contrast.
- Component rules: include validation, toast feedback, loading states, empty states, seeded demo states, and safe destructive confirmations.
- Prompt pattern: "Create a fullstack SaaS starter UI with landing page, auth flow, protected dashboard, billing/settings pages, Stripe subscription cards, Prisma-backed data states, and Radix/Tailwind dark-mode components."
