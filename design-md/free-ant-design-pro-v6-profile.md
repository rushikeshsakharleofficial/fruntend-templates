# Free Ant Design Pro v6 Enterprise Profile

Source: https://github.com/ant-design/ant-design-pro  
Preview: https://preview.pro.ant.design  
License: MIT

## Color tokens

- Use semantic tokens instead of page-specific hex values: `colorPrimary`, `colorSuccess`, `colorWarning`, `colorError`, `colorInfo`, `colorText`, `colorTextSecondary`, `colorBgLayout`, `colorBgContainer`, and `colorBorderSecondary`.
- Default enterprise accent: clear medium blue with restrained saturation.
- Status colors must carry consistent meaning across charts, badges, alerts, tables, and monitoring panels.
- Keep neutral surfaces dominant; reserve accent colors for actions, selection, status, and data emphasis.

## Typography rules

- Use a modern system sans-serif stack with compact enterprise density.
- Page title: 24–30px, semibold, tight line height.
- Section title: 16–20px, semibold.
- Body and table text: 13–14px.
- Labels, metadata, timestamps, and helper text: 12–13px with secondary text color.
- Use tabular numerals for KPIs, queue counts, latency, percentages, IP totals, and financial values.

## Button styles

- Primary buttons: solid primary token, medium radius, concise verb-first labels.
- Secondary buttons: neutral border or low-emphasis fill.
- Destructive actions: danger token and confirmation flow.
- Icon-only actions require tooltips and accessible labels.
- Keep toolbars compact; place the main action at the right edge of page headers or table toolbars.

## Card styles

- Use container background tokens, subtle borders, 8–12px radius, and low-elevation shadows.
- KPI cards should contain label, primary value, trend, comparison period, and optional compact chart.
- Monitoring cards should expose status, last update time, threshold, and drill-down action.
- Avoid decorative gradients unless the product domain explicitly needs them.

## Layout rules

- Use a persistent responsive sidebar, top header, breadcrumb, page header, and content canvas.
- Desktop content width should support dense tables and charts without excessive empty space.
- Group filters above tables or inside collapsible search panels.
- Use 12- or 24-column responsive grids for KPI and chart sections.
- Keep destructive or irreversible actions separated from routine controls.
- For mobile, collapse navigation and stack filters, cards, and form sections without hiding essential status data.

## Spacing

- Base spacing unit: 4px.
- Common gaps: 8px, 12px, 16px, 24px, and 32px.
- Card padding: 16–24px.
- Dense table rows: 40–48px.
- Form field vertical gaps: 16–24px.
- Page section gaps: 24–32px.

## Shadows

- Use subtle elevation only for floating headers, dropdowns, modals, drawers, and important cards.
- Standard cards should rely mainly on border and surface contrast.
- Dark mode shadows should be weaker and supported by borders.

## Radius

- Buttons and inputs: 6–8px.
- Cards and panels: 8–12px.
- Tags and status pills: fully rounded only for compact metadata.
- Avoid excessive pill-shaped controls in dense enterprise screens.

## Dark and light mode

- Light mode: soft gray layout background with white content containers.
- Dark mode: near-black or deep charcoal layout with raised dark containers and visible neutral borders.
- Preserve semantic status contrast in both modes.
- Charts, tables, code snippets, selected rows, hover states, and disabled states must be independently tested in both modes.

## Component usage rules

- Use `ProTable`-style patterns for remote data, filters, pagination, column settings, bulk actions, and export.
- Use step forms for migrations, provisioning, DNS changes, onboarding, and deployment workflows.
- Use advanced forms for multi-section infrastructure or IAM configuration.
- Use result pages for successful imports, failed deployments, partial syncs, and permission errors.
- Use account settings patterns for profile, security, notification, API key, and preference screens.
- Use monitor dashboard patterns for server health, SMTP queues, proxies, DNS jobs, cloud resources, and audit events.
- Always include loading, empty, error, stale-data, permission-denied, and partial-success states.
- Use AI Assistant patterns only where the assistant has a clear operational purpose and visible action boundaries.

## Prompt patterns

### Enterprise admin dashboard

Create a responsive enterprise admin dashboard inspired by Ant Design Pro v6. Use React 19, TypeScript, Ant Design 6 patterns, semantic design tokens, compact responsive navigation, KPI cards, filterable remote tables, charts, account settings, exception states, and full light/dark support. Keep the design professional, dense, and operational rather than decorative.

### Infrastructure monitoring

Create an Ant Design Pro-style infrastructure monitoring dashboard with health KPIs, uptime trends, incident status, server inventory, CPU/RAM/storage charts, latency panels, filterable alerts, maintenance actions, stale-data indicators, and drill-down drawers. Include loading, empty, error, degraded, and permission-denied states.

### Cloud inventory and IAM

Create an enterprise cloud inventory and RBAC dashboard using Ant Design Pro patterns. Include provider summaries, searchable server tables, credential status, role and permission matrices, user activity audit logs, bulk actions, approval workflows, account security settings, and destructive-action confirmations.

### Email queue and proxy monitoring

Create a dense operations dashboard for SMTP queues and proxy/IP fleets. Include queue depth, delivery rates, bounce trends, worker health, subnet utilization, failed endpoint tables, filters, bulk retry actions, detail drawers, thresholds, status tags, and responsive dark/light themes using Ant Design semantic tokens.
