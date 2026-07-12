# CatAdmin / HeroUI Admin Design Profile

Source: https://github.com/MonogatariOST/cat-admin
License: MIT
Use: Free/open-source admin, RBAC, audit, analytics, CMS, and advanced-table interfaces.

## Color tokens

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --surface: 210 40% 98%;
  --surface-elevated: 0 0% 100%;
  --muted: 215 20% 65%;
  --border: 214 32% 91%;
  --primary: 221 83% 53%;
  --primary-foreground: 0 0% 100%;
  --success: 142 71% 45%;
  --warning: 38 92% 50%;
  --danger: 0 84% 60%;
  --info: 199 89% 48%;
}

.dark {
  --background: 222 47% 7%;
  --foreground: 210 40% 96%;
  --surface: 222 36% 11%;
  --surface-elevated: 222 32% 14%;
  --muted: 215 16% 57%;
  --border: 217 25% 20%;
  --primary: 217 91% 60%;
  --primary-foreground: 222 47% 8%;
}
```

## Typography rules

- Use a neutral sans-serif family such as Inter, Noto Sans, or system UI.
- Page title: 24–30px, 650–700 weight, tight line height.
- Section title: 16–20px, 600 weight.
- Body: 14px, 400–500 weight, 1.5 line height.
- Table and metadata text: 12–14px.
- Use tabular numerals for KPI values, timestamps, quotas, ports, IPs, and monetary values.
- Avoid oversized display typography inside operational dashboards.

## Button styles

- Primary actions: solid primary background, high-contrast text, medium radius.
- Secondary actions: neutral surface with border.
- Destructive actions: danger color, confirmation required.
- Table-row actions: compact icon buttons or overflow menu.
- Keep button height between 32px and 40px for dense admin interfaces.
- Always include hover, focus-visible, disabled, loading, and destructive states.

## Card styles

- Use subtle borders before heavy shadows.
- Standard card radius: 10–14px.
- KPI cards contain label, value, delta, and optional compact visualization.
- Operational cards should expose status and last-updated time.
- Avoid decorative glass effects where data readability matters.
- Keep card padding between 16px and 24px.

## Layout rules

- Desktop: persistent collapsible sidebar, compact top header, fluid content area.
- Mobile: replace sidebar with an accessible drawer.
- Use a 12-column responsive grid for dashboard composition.
- Keep primary content width fluid for tables and charts.
- Use breadcrumbs only for nested management screens.
- Place filters and search above tables; place bulk actions near row selection state.
- Keep page title, description, and primary action in one consistent header band.

## Spacing

- Base spacing unit: 4px.
- Common gaps: 8, 12, 16, 24, and 32px.
- Dense table cells: 10–12px vertical padding.
- Form field groups: 16px vertical spacing.
- Major dashboard sections: 24–32px separation.

## Shadows

- Default card: none or `0 1px 2px rgb(0 0 0 / 0.05)`.
- Popover/dropdown: `0 8px 24px rgb(0 0 0 / 0.12)`.
- Modal: `0 20px 48px rgb(0 0 0 / 0.18)`.
- Do not use multiple heavy shadows on dense dashboards.

## Radius

- Inputs and buttons: 8–10px.
- Cards: 10–14px.
- Dialogs and drawers: 14–18px.
- Status badges: pill radius.
- Keep radius consistent across all management screens.

## Dark and light mode notes

- Preserve semantic status colors in both modes.
- Reduce border brightness in dark mode; do not rely only on shadows.
- Charts need explicit dark-mode axis, grid, tooltip, and legend colors.
- Tables require visible hover, selected, focused, and expanded-row states in both modes.
- Persist theme preference and respect system mode on first load.

## Component usage rules

- Advanced tables must support sorting, search, filters, pagination, selection, column visibility, empty states, loading states, errors, and export where relevant.
- RBAC screens should separate roles, permissions, users, inheritance, and effective-access views.
- Audit logs must include actor, action, resource, timestamp, source/IP, status, and expandable details.
- Authentication pages must include validation, loading, error, password visibility, and accessible focus order.
- Forms need inline validation, unsaved-change protection, disabled states, and clear success/error feedback.
- Charts must include accessible labels, meaningful units, time range, and no-data states.
- Dangerous bulk operations require confirmation and affected-item counts.
- Never hide critical operational state behind hover-only interaction.

## Prompt patterns

### General admin dashboard

```text
Create a production-ready React 19 admin dashboard using TypeScript, Vite, Tailwind CSS v4, and HeroUI-style components. Use a collapsible desktop sidebar, accessible mobile drawer, compact header, responsive KPI grid, analytics charts, advanced data table, dark/light mode, loading/error/empty states, and dense but readable spacing. Keep the visual system neutral, border-led, and suitable for enterprise internal tools.
```

### RBAC and IAM dashboard

```text
Create an RBAC administration interface with Users, Roles, Permissions, Groups, and Audit Log sections. Include searchable advanced tables, multi-select bulk actions, role assignment dialogs, permission matrices, effective-access summaries, destructive-action confirmation, pagination, column visibility, export, dark/light mode, and full loading/error/empty states.
```

### Infrastructure monitoring dashboard

```text
Create an infrastructure monitoring dashboard using the CatAdmin/HeroUI pattern. Include KPI cards for healthy, warning, critical, and offline systems; time-series charts; service-status cards; an advanced server table with hostname, provider, region, IP, CPU, RAM, disk, uptime, owner, and status; filter chips; saved views; export; incident timeline; and dark/light mode.
```

### Audit dashboard

```text
Create a user-activity audit dashboard with actor, action, resource, source IP, device, timestamp, result, and risk level. Include date-range filters, event-type filters, search, sortable columns, expandable JSON details, export, pagination, suspicious-event highlighting, and accessible dark/light themes.
```
