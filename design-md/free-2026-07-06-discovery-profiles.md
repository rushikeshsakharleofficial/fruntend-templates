# Free 2026-07-06 Discovery Design Profiles

Purpose: reusable design notes for newly discovered free/MIT frontend templates. Use these as UI direction references and only copy code from the verified MIT repositories.

## Shared free-only guardrails

- Use only public free/open-source repository code with verified compatible license files.
- Do not import paid, Pro, premium, marketplace, gated, login-required, subscription-only, trial-only, or unclear-access assets.
- If a template advertises paid variants elsewhere, use only the verified free repository.
- Preserve license notices when copying compatible code.

## Free MTVerse Next.js Admin Dashboard

- Color tokens: Tailwind v4 CSS variables, neutral dashboard surfaces, blue/product primary, green success, amber warning, red destructive, dark-mode-friendly border tokens.
- Typography: compact admin labels, strong KPI numbers, readable table text, monospace for record IDs and infrastructure metadata.
- Buttons: primary dashboard actions, outline table actions, icon dropdowns, auth form buttons, destructive confirmations.
- Cards: analytics KPI cards, ecommerce/CRM summary cards, chart cards, auth panels, Prisma-backed record panels.
- Layout: Next.js admin shell with sidebar/topbar, dashboard variants, auth pages, ecommerce/CRM/analytics sections, table-first operational pages.
- Spacing: medium-density admin dashboard spacing; keep charts and tables readable at laptop zoom levels.
- Radius/shadow: medium rounded cards, soft shadows in light mode, border-first dark mode.
- Dark/light: next-themes-compatible token approach; avoid hardcoded chart colors without dark-mode contrast checks.
- Components: Better Auth screens, Prisma/Postgres-backed pages, ApexCharts panels, ecommerce dashboard, CRM dashboard, analytics tables, settings/profile pages.
- Prompt pattern: "Generate a free MTVerse-style Next.js admin dashboard with sidebar/topbar shell, ecommerce/CRM/analytics pages, Better Auth login flow, Prisma-backed tables, ApexCharts cards, settings/profile screens, and accessible Tailwind v4 dark/light themes."

## Free Ant Design React Template Admin

- Color tokens: Ant Design 5 token system, blue primary, neutral enterprise surfaces, status colors for tables/forms/workflows.
- Typography: enterprise-readable labels, clear route titles, compact table and form labels.
- Buttons: Ant Design primary/default/dashed/text/link/danger variants with consistent toolbar grouping.
- Cards: Pro Components page containers, chart cards, CRUD cards, filter panels, summary cards.
- Layout: React Router admin shell with Ant Design navigation, dashboard content area, charts, forms, tables, and CRUD routes.
- Spacing: Ant Design 8px scale; favor dense enterprise admin pages.
- Radius/shadow: Ant Design token radius/elevation; avoid custom heavy shadows.
- Dark/light: token-driven where supported; keep charts and table status tags readable.
- Components: Ant Design Pro Components, charts, forms, tables, Axios data flows, Zustand state examples, route-level admin pages.
- Prompt pattern: "Generate a free Ant Design React admin dashboard with enterprise navigation, Pro Components page containers, chart cards, CRUD tables, filter forms, Zustand-backed UI state, and Vite/React Router page structure."

## Free Mantine Analytics Dashboard

- Color tokens: Mantine color tokens, neutral app surfaces, blue/teal analytics accents, semantic status colors, dark/light variables.
- Typography: Mantine readable dashboard text, strong chart labels, compact table and form typography.
- Buttons: Mantine primary/outline/subtle/light variants, action icons, segmented controls, spotlight actions.
- Cards: analytics KPI panels, chart cards, calendar cards, map panels, editor/form cards.
- Layout: Next.js/Mantine dashboard shell with responsive grid, data tables, calendar views, map/chart sections, rich text/editor pages, and notification/modals layer.
- Spacing: Mantine spacing scale; balance analytics density with readable charts.
- Radius/shadow: Mantine radius tokens, subtle card shadows, clean borders for dense dashboard sections.
- Dark/light: Mantine color scheme support; ensure Recharts and maps remain readable in both modes.
- Components: Mantine DataTable, Recharts, FullCalendar, Spotlight, Modals, Notifications, Dropzone, TipTap editor, Tabler icons, draggable/sortable dashboard widgets.
- Prompt pattern: "Generate a free Mantine analytics dashboard with responsive KPI cards, Recharts panels, Mantine DataTable, FullCalendar views, Spotlight search, modals/notifications, rich text editor pages, and clean dark/light Mantine theming."
