# Free Studio Admin Shadcn Design Profile

Source: `https://github.com/arhamkhnz/next-shadcn-admin-dashboard`
License: MIT
Reuse: Code reuse is allowed with MIT copyright and license notice retention.

## Color tokens

- Base neutral: use low-chroma gray or zinc surfaces for the default theme.
- Background: `hsl(0 0% 100%)` light and near-black neutral in dark mode.
- Foreground: high-contrast neutral text; avoid pure gray for primary body copy.
- Muted surface: subtle neutral fill for secondary cards, filters, empty states, and grouped controls.
- Border: low-contrast neutral border that remains visible in both modes.
- Primary: theme-preset driven; support neutral, tangerine, neo-brutalist, and soft-pop variants without changing component structure.
- Success, warning, danger, and info: reserve semantic colors for status, alerts, KPI deltas, and monitoring severity.

## Typography rules

- Use a modern sans-serif system stack or Geist-like type family.
- Keep page titles compact and semibold rather than oversized.
- Use 14–16px body text for dashboard readability.
- Use tabular numerals for metrics, invoices, infrastructure values, and financial tables.
- Use restrained uppercase labels only for small metadata and status group headings.

## Button styles

- Primary buttons: solid theme color, medium radius, compact height, clear focus ring.
- Secondary buttons: neutral surface with border.
- Ghost buttons: icon actions, table row menus, toolbar controls, and sidebar actions.
- Destructive buttons: semantic red only for irreversible operations.
- Keep icon-only buttons square with accessible labels and tooltips.

## Card styles

- Use flat or lightly elevated cards with a thin border.
- KPI cards should show label, primary value, trend, comparison period, and optional micro-chart.
- Avoid excessive nested cards; use separators and grouped sections instead.
- Monitoring cards should support severity badges, last-check timestamps, and compact action menus.
- Tables should live in full-width cards with toolbar, filters, search, pagination, and column controls.

## Layout rules

- Use a collapsible left sidebar and a persistent top header.
- Support variable content widths: constrained for forms/settings and fluid for analytics/tables.
- Keep desktop dashboard grids responsive and collapse predictably on tablet/mobile.
- Use colocated route-level features so each dashboard/page owns its components and logic.
- Preserve consistent page anatomy: breadcrumb or context label, title, description, actions, filters, content.
- For infrastructure and operations pages, prioritize data density without reducing legibility.

## Spacing

- Base spacing unit: 4px.
- Common gaps: 8px for inline controls, 12–16px inside compact components, 20–24px inside cards, 24–32px between page sections.
- Keep form fields vertically consistent and use grouped spacing for related settings.
- Reduce padding on dense monitoring tables while retaining at least 40px row height.

## Shadows

- Prefer borders over strong shadows.
- Use subtle low-blur shadows for floating menus, dialogs, command palettes, and sticky overlays.
- Avoid decorative glow except in optional cyber/infrastructure theme variants.

## Radius

- Default component radius: 8–12px.
- Inputs and compact controls: 6–8px.
- Cards and dialogs: 10–14px.
- Neo-brutalist preset may reduce radius and increase border emphasis.

## Dark and light mode notes

- Build all semantic tokens as CSS variables so presets work in both modes.
- Dark mode should use layered neutral surfaces rather than one flat black background.
- Maintain visible borders, chart grids, disabled controls, and table hover states in dark mode.
- Do not invert semantic status meaning between modes.
- Persist theme and layout preferences where appropriate.

## Component usage rules

- Use TanStack Table for advanced data grids with sorting, filtering, visibility, pagination, and row actions.
- Use React Hook Form with Zod for auth, settings, billing, user, and role forms.
- Use Zustand only for shared client state that does not belong in URL or server state.
- Use shadcn/ui primitives as accessible foundations; avoid unnecessary wrappers.
- Include empty, loading, skeleton, error, permission-denied, and offline states for every data-heavy page.
- RBAC screens should clearly separate users, roles, permissions, scopes, and tenant/workspace context.
- Infrastructure dashboards should include health, utilization, incidents, uptime, queue depth, latency, and recent events.
- Email queue dashboards should include queued, deferred, bounced, delivered, retry status, sender/domain filters, and time-range controls.

## Prompt patterns

### General admin dashboard

Create a production-ready Next.js 16 admin dashboard using TypeScript, Tailwind CSS v4, and shadcn/ui. Use a collapsible sidebar, compact top header, responsive content grid, light/dark mode, theme presets, accessible keyboard navigation, loading/error/empty states, and TanStack Table for data-heavy pages. Follow a clean Studio Admin visual language with neutral surfaces, thin borders, restrained shadows, 8–12px radii, and dense but readable spacing.

### Infrastructure monitoring dashboard

Create an infrastructure monitoring dashboard in the Studio Admin style. Include KPI cards for availability, CPU, memory, disk, network, active alerts, and incident count; a server health table with filters and row actions; utilization charts; an incident timeline; severity badges; last-check timestamps; and responsive mobile behavior. Add loading, stale-data, permission, empty, and error states.

### Email queue monitoring dashboard

Create an email queue operations dashboard using the Studio Admin system. Include queued, deferred, bounced, delivered, retrying, and failed KPIs; queue growth and delivery-rate charts; searchable message and domain tables; sender, status, server, campaign, and time filters; retry and inspect actions; RBAC-aware controls; and a detailed message drawer. Use dense tables, tabular numerals, semantic status tokens, and accessible confirmation dialogs.

### RBAC administration

Create users, roles, and permissions pages using the Studio Admin pattern. Include tenant-aware user tables, role assignment, permission matrices, invite flow, status filters, activity history, destructive-action confirmation, audit metadata, and clear inherited-versus-explicit permission indicators. Use React Hook Form, Zod validation, TanStack Table, and shadcn dialogs/dropdowns.
