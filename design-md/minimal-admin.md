# Minimal Admin Design Profile

## Best use cases

Admin panels, RBAC/IAM pages, settings pages, billing consoles, audit dashboards, inventory tables, CRUD screens, lightweight SaaS back offices, and low-resource internal tools.

## Color tokens

- Background light: `#ffffff`
- Background muted light: `#f8fafc`
- Surface light: `#ffffff`
- Background dark: `#0f172a`
- Background muted dark: `#111827`
- Surface dark: `#1f2937`
- Text primary light: `#0f172a`
- Text secondary light: `#475569`
- Text primary dark: `#f8fafc`
- Text secondary dark: `#cbd5e1`
- Border light: `#e2e8f0`
- Border dark: `#334155`
- Accent: `#2563eb`
- Success: `#16a34a`
- Warning: `#d97706`
- Danger: `#dc2626`
- Info: `#0891b2`

## Typography rules

- Use a clean system sans stack: Inter, ui-sans-serif, system-ui, sans-serif.
- Headings should be compact, semibold, and direct.
- Body text should stay readable at 14-16px.
- Use tabular numbers for metrics, counts, billing values, queue depth, uptime, and inventory totals.
- Use monospace only for IDs, API keys, IP addresses, DNS records, server names, paths, log lines, and audit event IDs.

## Button styles

- Primary: solid accent background, white text, 8-10px radius, medium weight.
- Secondary: white or dark-surface background, subtle border, neutral text.
- Ghost: transparent, low visual weight, hover background only.
- Destructive: red text or red solid background only for final confirmations.
- Icon buttons should be 32-40px square with visible focus ring.
- Loading state should preserve width and show spinner or progress label.

## Card styles

- Use flat cards with 1px borders and minimal shadows.
- Radius: 10-14px for cards, 8-10px for controls.
- KPI cards should show label, value, small delta, and status badge.
- Tables should live in bordered cards with sticky headers when long.
- Avoid heavy gradients unless the page needs a single hero or summary card.

## Layout rules

- Use a persistent sidebar for desktop admin apps.
- Collapse sidebar into drawer or icon rail on smaller screens.
- Keep a top action bar with search, filters, date range, export, and create action.
- Prefer 12-column responsive grid.
- Use compact density for ops dashboards and comfortable density for billing/settings pages.
- Important actions should appear near page title; destructive actions should be isolated.
- Tables need search, filters, sort, pagination, bulk selection, empty state, and export hooks.

## Spacing

- Page padding: 24-32px desktop, 16px mobile.
- Section gap: 24px.
- Card padding: 16-24px.
- Control height: 36-44px.
- Table row height: 44-56px depending on density.

## Shadows

- Default card shadow: none or very soft.
- Popovers/dropdowns: medium shadow with strong border.
- Modals: larger shadow with overlay.
- Avoid glossy/neumorphic effects.

## Radius

- Controls: 8px.
- Cards: 12px.
- Modals: 16px.
- Badges: full pill for statuses, 6px for squared labels.

## Dark/light mode notes

- Keep dark mode neutral, not pure black, unless using a Vercel-like profile.
- Increase border contrast in dark mode.
- Avoid low-contrast gray text on dark surfaces.
- Status colors should use tinted backgrounds plus readable foreground text.
- Charts should use accessible contrast and labels, not color alone.

## Component usage rules

- Use badges for role, status, severity, payment state, sync state, and incident state.
- Use drawers for edit/details workflows when the user should not lose table context.
- Use modals only for creation, confirmations, and focused forms.
- Use tabs for settings groups and billing sections.
- Use accordions for advanced filters or low-priority metadata.
- Use timelines for audit logs, deployments, migrations, and incident history.
- Every table row should have clear primary identity, secondary metadata, and action menu.

## Prompt patterns

- Generate a minimal admin dashboard with a compact sidebar, top filter/action bar, KPI cards, searchable data table, status badges, row actions, and responsive dark/light mode.
- Generate an RBAC admin IAM page with user table, role badges, active/inactive toggles, MFA status, audit drawer, create-user modal, destructive confirmations, and admin-safe constraints.
- Generate a billing settings page with plan cards, invoice table, payment method card, usage meter, subscription state badge, and cancellation confirmation flow.
- Generate a cloud inventory dashboard with provider filters, region filters, resource table, cost KPIs, stale resource warnings, and export action.
