# DashboardKit Free Admin Design Profile

Source: `https://github.com/codedthemes/dashboardkit-free-admin-template`

Use this profile only with the free MIT-licensed Bootstrap and React folders. Do not use linked premium products, demos, or assets.

## Color tokens

- `--bg-app`: `#f4f7fb`
- `--bg-surface`: `#ffffff`
- `--bg-muted`: `#eef2f7`
- `--text-primary`: `#1f2937`
- `--text-secondary`: `#64748b`
- `--border`: `#e2e8f0`
- `--primary`: `#4680ff`
- `--primary-hover`: `#3367d6`
- `--success`: `#2ed8b6`
- `--warning`: `#ffb64d`
- `--danger`: `#ff5370`
- `--info`: `#00bcd4`

For dark mode, use a deep slate application background, slightly lighter card surfaces, low-contrast borders, and preserve semantic status colors.

## Typography rules

- Use a neutral sans-serif stack such as Inter, Roboto, or system UI.
- Page titles: 24–28px, semibold.
- Section titles: 18–20px, semibold.
- Card titles: 14–16px, semibold.
- Body and table text: 13–15px.
- Metadata and helper text: 12–13px with muted contrast.
- Use tabular numerals for KPI values, queue counts, bandwidth, IP totals, and resource usage.

## Button styles

- Primary buttons: solid primary background, white text, 6px radius, medium weight.
- Secondary buttons: white or muted surface with border and primary text.
- Destructive buttons: danger color with explicit label and confirmation for irreversible actions.
- Icon-only controls: 32–36px square, visible tooltip, clear hover state.
- Copy controls: compact outline or ghost button beside credentials, IPs, tokens, hostnames, and record values.

## Card styles

- White or dark elevated surfaces with 8px radius.
- Use subtle borders and restrained shadows rather than heavy gradients.
- KPI cards should include label, dominant value, optional trend, and a small contextual icon.
- Monitoring cards should reserve semantic colors for state, not decoration.
- Keep chart cards aligned to a common header/body/footer structure.

## Layout rules

- Desktop shell: fixed or sticky left sidebar, top header, scrollable main content.
- Collapse the sidebar to an icon rail on medium widths.
- Use a 12-column grid for dashboard composition.
- Place urgent operational metrics above charts and long tables.
- Keep filters, date ranges, refresh controls, and export actions in a consistent toolbar.
- Tables must support responsive overflow, pagination, empty states, loading states, and row actions.

## Spacing

- Base spacing unit: 4px.
- Compact controls: 8px gaps.
- Card padding: 16–24px.
- Section gaps: 24–32px.
- Table row height: 44–52px depending on density.
- Avoid excessive vertical whitespace in operational dashboards.

## Shadows

- Default card shadow: very subtle, equivalent to `0 1px 3px rgba(15, 23, 42, 0.08)`.
- Dropdowns and modals may use a stronger layered shadow.
- Do not use glow effects except for explicit cyber/monitoring variants.

## Radius

- Buttons and inputs: 6px.
- Cards and panels: 8px.
- Modals and large overlays: 10–12px.
- Status pills: full radius.

## Dark and light mode notes

- Light mode should emphasize clean white surfaces over a pale blue-gray background.
- Dark mode should use slate rather than pure black.
- Maintain WCAG-readable contrast for table text, chart labels, and form placeholders.
- Chart gridlines and borders should be reduced in contrast in dark mode.

## Component usage rules

- Use ApexCharts-style line, area, bar, and donut charts for KPI and trend views.
- Use Bootstrap tables for queue, server, IP, DNS, and user activity datasets.
- Use badges for compact status labels only; do not encode state by color alone.
- Use validated forms with visible field-level errors.
- Use copy-to-clipboard controls for inventory and infrastructure identifiers.
- Include skeleton, empty, error, and stale-data states for every async dashboard block.
- Preserve the free repository's MIT notice when copying substantial code.

## Prompt patterns

### Infrastructure monitoring dashboard

Create a responsive Bootstrap 5 and React admin dashboard inspired by the free DashboardKit structure. Use a compact collapsible sidebar, top header, KPI cards, ApexCharts trend panels, responsive tables, semantic status badges, copy-to-clipboard controls, and light/dark themes. Include loading, empty, error, stale-data, and mobile states. Keep the visual style operational, dense, and readable.

### Cloud inventory dashboard

Build a cloud inventory page with provider filters, searchable server table, CPU/RAM/storage/IP columns, credential copy controls, sync status, pagination, row actions, and responsive overflow. Use neutral cards, subtle shadows, 8px radii, Bootstrap form controls, and a compact admin layout.

### Email queue monitoring dashboard

Design an email queue monitoring interface with total queue, deferred, active, bounced, and throughput KPI cards; time-series and provider charts; a filterable queue table; retry and inspect actions; and clear warning/error states. Use restrained semantic colors and tabular numerals.

### Proxy and IP monitoring dashboard

Create a proxy/IP health dashboard with healthy, timeout, blocked, and unassigned KPI cards; subnet and server filters; latency charts; bulk actions; copy buttons; and a dense responsive table. Prioritize operational clarity over decorative effects.
