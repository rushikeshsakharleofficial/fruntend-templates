# Free July 8 Run 9 Template Design Profiles

Source policy: use only free/public/open-source template references. Do not use paid, Pro, premium, gated, login-required, marketplace-only, subscription-only, trial-only, or unclear-access UI assets.

## Shadcn Next.js Dashboard

- Source: `NaveenDA/shadcn-nextjs-dashboard`
- URL: https://github.com/NaveenDA/shadcn-nextjs-dashboard
- License: MIT verified from upstream `LICENSE`.
- Framework/style: Next.js 15, React 19, TypeScript, Tailwind CSS v4, Radix UI, shadcn-style primitives, next-themes, Sonner.
- Color tokens: neutral zinc/slate backgrounds, high-contrast foreground, muted borders, primary CTA token, success/warning/destructive form feedback tokens.
- Typography rules: compact app labels, clear form headings, readable helper/error text, numeric/auth codes with strong visual grouping.
- Button styles: primary submit buttons with loading states, ghost icon buttons for navigation, outline secondary actions, destructive actions separated.
- Card styles: auth cards, settings panels, compact stat cards, rounded-xl shells with border-first elevation.
- Layout rules: auth-first protected app shell, sidebar/topbar separation, mobile-first stacked forms, keep validation near controls.
- Spacing: 4/6/8 Tailwind rhythm, compact dashboard gutters, slightly wider spacing for auth cards.
- Shadows/radius: border-first surfaces, rounded-lg/rounded-xl, minimal shadow.
- Dark/light notes: preserve form contrast, OTP/input focus rings, and toast readability in both modes.
- Component rules: use Radix primitives for dialogs/dropdowns/selects/tabs, add Zod validation, toast feedback, empty/loading states, and theme toggle.
- Prompt pattern: "Create a shadcn-style Next.js dashboard with protected auth pages, Radix forms, OTP input, settings panels, theme toggle, toast feedback, and production validation states."

## Shadcn CRM Dashboard

- Source: `Harisaki/shadcn-crm-dashboard`
- URL: https://github.com/Harisaki/shadcn-crm-dashboard
- License: MIT verified from upstream `LICENSE`.
- Framework/style: Next.js 15, React 19, TypeScript, Tailwind CSS v4, Radix UI, TanStack Table/Query, Recharts, Neon/Postgres-ready dependencies.
- Color tokens: CRM neutral base, blue/green success accents, amber warning states, red destructive states, muted table row separators.
- Typography rules: dense table text, clear customer names/statuses, strong chart headings, small metadata labels for lifecycle stage and timestamps.
- Button styles: table row action buttons, filter chips, primary add/create actions, ghost icon menus, destructive archive/delete actions.
- Card styles: CRM stat cards, chart cards, customer profile panels, pipeline sections, resizable split-panel cards.
- Layout rules: dashboard overview first, tables below KPIs, filters pinned above records, details in side/resizable panels.
- Spacing: dense operational dashboard spacing with 3/4/6 rhythm; avoid oversized marketing whitespace.
- Shadows/radius: border-led cards, rounded-lg, only subtle elevation for floating action menus.
- Dark/light notes: table hover, selected rows, charts, and status badges must remain readable in both modes.
- Component rules: include TanStack sorting/filtering/pagination, React Query data states, Recharts responsive wrappers, date filters, and toasts.
- Prompt pattern: "Create a CRM dashboard with shadcn UI, TanStack data table, customer filters, KPI cards, Recharts analytics, resizable detail panel, dark mode, and loading/error/empty states."

## Shadcn ECharts Demo

- Source: `devs-tool/shadcn-echarts-demo`
- URL: https://github.com/devs-tool/shadcn-echarts-demo
- License: MIT verified from upstream `LICENSE`.
- Framework/style: Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn, Base UI, ECharts 6, Number Flow.
- Color tokens: chart-friendly neutrals, dashboard slate/zinc surfaces, distinct semantic chart accents, muted gridline and axis colors.
- Typography rules: large animated KPI numerals, compact chart legends, clear axis labels, small muted comparison captions.
- Button styles: compact range filters, chart type toggles, export/action icon buttons, ghost toolbar buttons.
- Card styles: chart cards with header/toolbar/content split, KPI cards with animated values, monitoring panels with dense metadata.
- Layout rules: responsive analytics grid, chart groups by function, keep chart controls inside card headers, use mobile stacked chart cards.
- Spacing: chart cards use 4/6 internal rhythm; page grid uses 6/8 dashboard gutters.
- Shadows/radius: rounded-xl cards, border-first surfaces, no heavy shadows around charts.
- Dark/light notes: chart palettes, gridlines, tooltip surfaces, and legend text must be explicitly checked in both modes.
- Component rules: use responsive chart wrappers, skeleton states, empty-data states, accessible chart summaries, and number animation only where it improves scanability.
- Prompt pattern: "Create a shadcn analytics dashboard with ECharts cards, animated KPI numbers, time-range filters, responsive chart grid, dark mode, tooltips, legends, and empty/loading states."

## Syncta SaaS Kit

- Source: `antoine-lbo/syncta-saas-kit`
- URL: https://github.com/antoine-lbo/syncta-saas-kit
- License: MIT verified from upstream `LICENSE`.
- Framework/style: Next.js 14, React 18, TypeScript, Tailwind CSS v3, Supabase client/SSR, Stripe, Recharts, Zod.
- Color tokens: SaaS primary CTA, neutral landing backgrounds, muted app shell panels, success/warning/destructive billing/auth states.
- Typography rules: strong landing headline hierarchy, compact dashboard labels, readable pricing/billing metadata, helper text for forms.
- Button styles: primary onboarding/billing CTAs, secondary outline actions, checkout/subscription action buttons, loading states for async billing/auth.
- Card styles: pricing cards, subscription status cards, auth cards, metrics cards, settings forms.
- Layout rules: split marketing and app shell, auth pages before dashboard, billing/settings grouped by task, metrics near subscription data.
- Spacing: landing sections use 12/16 spacing; dashboard/settings use 4/6/8 rhythm.
- Shadows/radius: rounded-xl SaaS cards, subtle landing shadows, border-first app panels.
- Dark/light notes: billing state badges and Stripe/Supabase auth states must stay high-contrast in both modes.
- Component rules: include Zod validation, Stripe loading/error/success states, Supabase session states, email workflow states, and Recharts metric cards.
- Prompt pattern: "Create a Supabase and Stripe SaaS starter UI with landing page, auth flow, subscription billing cards, settings pages, email workflow status, Recharts metrics, and validated forms."

## Adminex React Free

- Source: `devcraftify/adminex-react-free`
- URL: https://github.com/devcraftify/adminex-react-free
- License: MIT verified from upstream `LICENSE` and `package.json`.
- Framework/style: React 19, Vite 8, TypeScript, Tailwind CSS v4, Chart.js, React Router, Swiper, Iconify.
- Color tokens: admin neutral surfaces, primary navigation accent, chart series accents, success/warning/destructive badges, muted sidebar separators.
- Typography rules: compact route labels, bold dashboard metrics, readable chart labels, clear card titles.
- Button styles: sidebar nav buttons, compact chart actions, primary dashboard CTAs, ghost icon controls, mobile menu toggles.
- Card styles: KPI cards, chart widgets, content panels, carousel/slider panels, responsive admin cards.
- Layout rules: Vite SPA app shell, persistent sidebar, route-based pages, responsive collapse on mobile, chart grid below top metrics.
- Spacing: 4/6/8 admin rhythm, compact sidebar spacing, card grids with consistent gutters.
- Shadows/radius: rounded-lg cards, subtle dashboard shadows, border-first dividers.
- Dark/light notes: charts, sidebar active states, and icon-only buttons need contrast checks in both modes.
- Component rules: keep routing simple, use Chart.js responsive options, add empty/error/loading states, and make Iconify icons decorative unless meaningful labels are present.
- Prompt pattern: "Create a React/Vite admin dashboard with Tailwind v4, sidebar routes, Chart.js widgets, KPI cards, icon navigation, responsive layout, and production empty/loading/error states."
