# Free Polymarket UI Kit Design Profile

Source: https://github.com/horn111/polymarket-ui-kit

License: MIT. Retain the copyright and license notice when copying or substantially reusing code.

## Best fit

Use this profile for analytics dashboards, market monitoring, financial or infrastructure telemetry, real-time KPI surfaces, orderbook-style depth views, ranked tables, research portals, embed builders, and mobile data-detail panels.

Do not copy Polymarket branding into unrelated products. Reuse the structural patterns: dense data hierarchy, explicit status, compact charts, evidence rails, disclosures, ranked tables, share cards, and mobile drawers.

## Color tokens

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --surface: 210 40% 98%;
  --surface-elevated: 0 0% 100%;
  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;
  --border: 214 32% 91%;
  --primary: 173 80% 30%;
  --primary-foreground: 0 0% 100%;
  --positive: 142 71% 35%;
  --negative: 0 72% 51%;
  --warning: 38 92% 50%;
  --info: 199 89% 48%;
  --chart-1: 173 80% 30%;
  --chart-2: 217 91% 60%;
  --chart-3: 38 92% 50%;
  --chart-4: 262 83% 58%;
}

.dark {
  --background: 222 47% 7%;
  --foreground: 210 40% 98%;
  --surface: 222 38% 10%;
  --surface-elevated: 222 32% 13%;
  --muted: 217 33% 17%;
  --muted-foreground: 215 20% 65%;
  --border: 217 33% 20%;
  --primary: 172 66% 50%;
  --primary-foreground: 222 47% 7%;
}
```

Use semantic colors consistently. Green means positive or healthy, red means negative or failed, amber means warning or delayed, and blue means informational. Never use color alone; pair it with labels, icons, arrows, or values.

## Typography rules

- Use Inter, Geist, or another neutral grotesk sans-serif.
- Page title: 28-32px, 650-700 weight.
- Section title: 18-20px, 600-650 weight.
- Card title: 14-16px, 600 weight.
- KPI value: 24-36px, 650-750 weight, tabular numerals.
- Table text: 12-14px with 1.35-1.5 line height.
- Metadata and timestamps: 11-12px, muted color, tabular numerals.
- Use monospace only for IDs, hashes, IP addresses, ports, code, and exact market symbols.
- Keep labels short and sentence case.

## Button styles

- Primary: solid semantic-primary background, high-contrast text, 36-40px height.
- Secondary: surface background with 1px border.
- Ghost: transparent until hover; use for low-priority table and card actions.
- Destructive: reserved for irreversible actions and must include a confirmation step.
- Icon button: 32-36px square with tooltip and accessible label.
- Use 8px radius for controls; avoid pill buttons except compact filters, status chips, and segmented selectors.
- Disabled buttons must remain readable and explain unavailable actions through nearby helper text or tooltip.

## Card styles

- Use a 1px border, restrained shadow, 10-12px radius, and 16-20px internal padding.
- KPI cards should contain label, current value, delta, time range, and optional sparkline.
- Market/detail cards should contain title, status, category, key metric, expiry or timestamp, and one clear action.
- Evidence cards should separate source type, source name, recency, confidence, and external-link action.
- Avoid decorative gradients behind dense data.
- Use elevated cards sparingly; data hierarchy should come mostly from grouping and spacing.

## Layout rules

- Desktop shell: 240-280px sidebar, sticky top bar, fluid content width.
- Dense analytics pages: 12-column grid with KPI row, primary chart area, supporting cards, and tables below.
- Prefer 2:1 chart-to-context ratio for monitoring pages.
- Use sticky table headers and optional sticky first column for wide datasets.
- Keep primary actions in the page header; keep row actions inside the row overflow menu.
- For detail pages, use a summary header followed by tabs for overview, activity, comments, evidence, and settings.
- Mobile: collapse sidebar into drawer, stack cards, move filters into a sheet, and use bottom drawers for contextual actions.

## Spacing

- Base spacing unit: 4px.
- Control gaps: 8px.
- Card internal gaps: 12-16px.
- Grid gaps: 16-20px.
- Section gaps: 24-32px.
- Page padding: 16px mobile, 24px tablet, 28-32px desktop.
- Dense tables may use 40-44px rows; standard tables should use 48-52px rows.

## Shadows

```css
--shadow-sm: 0 1px 2px rgb(15 23 42 / 0.05);
--shadow-md: 0 8px 24px rgb(15 23 42 / 0.08);
--shadow-overlay: 0 20px 50px rgb(15 23 42 / 0.18);
```

Use `shadow-sm` for cards, `shadow-md` for dropdowns and floating panels, and `shadow-overlay` only for dialogs and mobile drawers.

## Radius

- Inputs and buttons: 8px.
- Cards: 10-12px.
- Dialogs and sheets: 14-16px.
- Chips and compact status badges: fully rounded.
- Charts and tables should align to the containing card radius rather than applying excessive nested rounding.

## Dark and light mode

- Both modes must preserve identical information hierarchy and component behavior.
- Dark mode should use layered near-black/navy surfaces, not pure black.
- Borders must remain visible in dark mode without becoming bright outlines.
- Chart lines, fills, grid lines, and tooltips need separate dark-mode tokens.
- Positive and negative colors must meet contrast requirements in both modes.
- Persist the user preference and support system mode.

## Component usage rules

- `MarketCard` pattern: use for compact monitored entities such as servers, domains, queues, proxies, or cloud resources.
- `ProbabilityChart` pattern: use for time-series health, delivery rate, queue depth, utilization, latency, or success probability.
- `OrderbookPanel` pattern: adapt for dual-sided capacity, inbound/outbound queues, healthy/unhealthy counts, or request/error depth.
- `LeaderboardTable` pattern: use for top consumers, busiest servers, highest-error domains, or highest-volume queues.
- `EvidenceRail` pattern: use for audit evidence, DNS checks, health probes, incident context, or external verification sources.
- `EmbedSnippetPanel` pattern: use for copyable commands, API samples, iframe snippets, agent config, or generated integration code.
- `ShareCard` pattern: use for exportable incident summaries, KPI snapshots, or status-page images.
- `MobileTradeDrawer` pattern: use for mobile detail actions, filters, remediation choices, or task handoff.
- Always include loading, empty, partial-data, stale-data, error, and permission-denied states.
- Tables must support keyboard navigation, sorting, filtering, pagination, and responsive overflow.
- Charts must include accessible summaries and precise tooltips.

## Prompt patterns

### Analytics dashboard

```text
Create a production-ready analytics dashboard using the Free Polymarket UI Kit design profile. Use a restrained light/dark data-dense visual system, KPI cards with deltas and sparklines, one dominant time-series chart, ranked tables, explicit freshness timestamps, compact filters, loading/empty/error/stale states, and responsive mobile drawers. Do not use Polymarket branding. Use the structural patterns only.
```

### Infrastructure monitoring

```text
Design an infrastructure monitoring dashboard using MarketCard-style resource cards, ProbabilityChart-style latency and availability charts, OrderbookPanel-style healthy-versus-failed capacity panels, LeaderboardTable-style top resource tables, and EvidenceRail-style probe evidence. Include server state, IP, region, uptime, CPU, RAM, disk, traffic, last check, alert severity, and remediation actions.
```

### Email queue monitoring

```text
Build an email queue monitoring dashboard with KPI cards for queued, deferred, bounced, delivered, and delivery rate; time-series queue charts; ranked sender/domain tables; dual-sided inbound/outbound depth panels; evidence rows for SMTP responses; filters for server, campaign, domain, status, and time range; and exportable incident summary cards.
```

### Proxy and IP monitoring

```text
Create a proxy and IP monitoring dashboard with dense resource cards, success-rate sparklines, latency charts, working-versus-failed depth panels, ranked subnet and server tables, exact IPv4/IPv6 monospace values, last-tested timestamps, batch actions, responsive filters, and explicit partial-data and timeout states.
```

### Cloud inventory and RBAC

```text
Create a cloud inventory and RBAC admin dashboard using compact summary cards, advanced searchable tables, provider and region filters, activity evidence rails, permission badges, role matrices, audit timestamps, copyable credentials references without exposing secrets, and mobile detail drawers. Include loading, empty, unauthorized, stale, and destructive-confirmation states.
```
