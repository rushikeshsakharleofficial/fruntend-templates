# SmartApp AI Dashboard Profile

Source: https://github.com/TerapakSolutions/smartapp-ui-kit-template

License: MIT. Retain the copyright and license notice when copying substantial code.

## Color tokens

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --surface: 210 40% 98%;
  --surface-strong: 214 32% 91%;
  --muted: 215 16% 47%;
  --primary: 239 84% 67%;
  --primary-hover: 239 84% 60%;
  --success: 160 84% 39%;
  --warning: 38 92% 50%;
  --danger: 0 84% 60%;
  --border: 214 32% 91%;
  --ring: 239 84% 67%;
}

.dark {
  --background: 222 47% 7%;
  --foreground: 210 40% 98%;
  --surface: 222 38% 11%;
  --surface-strong: 217 33% 18%;
  --muted: 215 20% 65%;
  --primary: 239 84% 72%;
  --primary-hover: 239 84% 78%;
  --border: 217 33% 18%;
  --ring: 239 84% 72%;
}
```

Use one restrained accent family for primary actions. Reserve green, amber, and red for semantic states, not decoration.

## Typography rules

- Use Inter, Geist, or another neutral sans-serif.
- Body: 14–16px, line-height 1.5–1.65.
- Dashboard labels: 12–13px, medium weight, muted foreground.
- Card titles: 14–16px, semibold.
- Page titles: 24–32px, semibold, tight tracking.
- KPI values: 28–40px, semibold or bold, tabular numerals.
- Avoid oversized marketing typography inside application views.

## Button styles

- Primary: solid accent background, white text, 8–10px radius, medium weight.
- Secondary: surface background with visible border.
- Ghost: transparent background, subtle hover surface.
- Destructive: red only for irreversible actions.
- Standard height: 36–40px; compact table actions: 30–32px.
- Always include focus-visible rings and disabled states.

## Card styles

- Use flat or lightly elevated surfaces with 1px borders.
- Radius: 10–14px.
- Padding: 16px compact, 20–24px standard.
- Keep shadows subtle: `0 1px 2px rgb(0 0 0 / 0.05)` or none in dense dashboards.
- KPI cards should contain label, value, delta, time range, and optional mini-chart.
- Use skeleton states instead of blank cards during loading.

## Layout rules

- Desktop shell: collapsible left sidebar, top utility bar, scrollable content area.
- Content max width: 1440–1600px for analytics; fluid width for dense tables.
- Use a 12-column grid for dashboard composition.
- Mobile: convert sidebar to drawer and stack cards vertically.
- Keep primary page actions in the page header, not buried inside cards.
- Filters should sit above tables and charts with clear reset behavior.

## Spacing

- Base unit: 4px.
- Common spacing: 8, 12, 16, 20, 24, 32px.
- Page gutters: 16px mobile, 24px tablet, 32px desktop.
- Card gaps: 16–24px.
- Dense table row height: 40–44px; standard row height: 48–52px.

## Shadows

- Prefer borders over heavy shadows.
- Dropdowns and floating panels: medium shadow with clear border.
- Modals: stronger shadow plus backdrop.
- Do not apply shadows to every card.

## Radius

- Inputs and buttons: 8–10px.
- Cards: 10–14px.
- Pills and status badges: full radius.
- Charts and table containers should match the card radius.

## Dark and light mode notes

- Maintain equivalent hierarchy in both modes rather than simple color inversion.
- Increase border visibility slightly in dark mode.
- Avoid pure black backgrounds; use deep blue-gray surfaces.
- Validate chart series, grid lines, tooltips, and semantic colors independently in both modes.
- Persist theme preference and respect `prefers-color-scheme` on first visit.

## Component usage rules

- Use Framer Motion only for purposeful transitions: sidebar collapse, panel entry, route changes, and state feedback.
- Keep most motion between 150–240ms with reduced-motion support.
- Use Zustand for cross-page UI or session state; keep local component state local.
- Every async page needs loading, empty, error, and populated states.
- Tables need sorting, filtering, pagination, column visibility, responsive overflow, and keyboard-accessible controls.
- Monitoring dashboards should expose status, severity, timestamp, owner, and next action.
- Audit views should make actor, action, target, source IP, timestamp, and result easy to scan.
- AI dashboards should show model/provider, token use, latency, cost, errors, and request volume without decorative noise.
- Preserve the repository's TypeScript-only application-code rule.
- Reuse its Jest, React Testing Library, and Cypress structure when generating components or flows.

## Prompt patterns

### AI operations dashboard

> Build a responsive AI operations dashboard using React, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router, and Zustand. Use a compact collapsible sidebar, page header actions, KPI cards for requests, tokens, cost, latency, and error rate, plus model/provider tables and time-series charts. Include loading, empty, error, and populated states, keyboard navigation, reduced-motion support, dark/light themes, Jest component tests, and Cypress tests for the main navigation and filtering flow.

### Infrastructure monitoring dashboard

> Create a production infrastructure monitoring dashboard inspired by the SmartApp shell. Include fleet health KPIs, server status cards, incident timeline, resource charts, service filters, sortable tables, severity badges, and responsive mobile drawers. Use restrained motion, semantic status colors, accessible focus states, persistent theme selection, and complete loading/error/empty states.

### Cloud inventory and RBAC admin

> Generate a compact cloud inventory and RBAC admin UI with a collapsible navigation shell, provider summary cards, advanced server tables, credential status, role and permission matrices, user activity logs, and audit detail drawers. Use TypeScript-only React code, Tailwind design tokens, Zustand only for shared state, and Jest plus Cypress coverage for role filtering, table interactions, and navigation.
