# Free July 10 Run 10 SaaS/Auth Design Profiles

Free-only design profiles discovered from public frontend template sources. Copy implementation code only from entries with verified compatible open-source licenses. Metadata-only entries can be used for prompting, structure, and visual planning, but not for direct code reuse until license verification is complete.

## Next.js SaaS Starter by 0xmattthemii

- **Design family:** Vercel/Tailwind Modern + shadcn SaaS shell.
- **Color tokens:** neutral zinc/slate base, high-contrast foreground, muted card surfaces, accent tokens for workspace state, destructive state, and AI chat activity.
- **Typography rules:** use Geist/Inter-style sans, medium-weight section headings, compact metadata labels, tabular numbers for counts and settings summaries.
- **Button styles:** shadcn button hierarchy with primary actions for create/invite/save, secondary outline actions for navigation, ghost buttons for sidebar items, destructive buttons for risky account or organization actions.
- **Card styles:** inset dashboard cards with subtle border, rounded-xl/2xl corners, compact inner spacing, skeleton-ready loading regions, and clear card header/action separation.
- **Layout rules:** server-first app shell, inset sidebar, workspace switcher in navigation, settings routes grouped under account/organization, CRUD pages with list/detail/new flows, chat page as a focused assistant surface.
- **Spacing:** 4/6/8 step rhythm, dense admin lists, wider page gutters for SaaS settings pages, no oversized marketing whitespace inside authenticated areas.
- **Shadows:** minimal or none; prefer border and surface contrast over heavy shadow.
- **Radius:** rounded-md controls, rounded-xl cards, rounded-2xl page panels.
- **Dark/light notes:** support light/dark/system mode; keep form borders visible in dark mode; AI chat bubbles should preserve contrast without saturated backgrounds.
- **Component usage rules:** use shadcn primitives for forms/dialogs/dropdowns/tables; use Suspense skeletons per slow section; keep tenant/org context visible in every protected page.
- **Prompt pattern:** "Create a lean multi-tenant SaaS dashboard using Next.js 16, Tailwind v4, shadcn/ui, Better Auth organizations, Drizzle/Postgres, an inset sidebar, workspace switcher, account/org settings, invite flow, CRUD example pages, and an optional AI chat page. Keep it server-first with granular loading skeletons."

## Next WorkOS Convex Starter

- **Design family:** Enterprise SaaS admin + identity management dashboard.
- **Color tokens:** neutral enterprise base, blue/indigo accent for identity/admin actions, amber warning for SSO/configuration gaps, green success for connected org/auth state, red destructive for user/session actions.
- **Typography rules:** clear page titles, compact admin labels, readable widget headings, small helper text for auth/SSO configuration states.
- **Button styles:** primary for launch/connect/create workspace, outline for admin portal actions, ghost for settings navigation, destructive for revoke/remove flows.
- **Card styles:** organization cards, project cards, user-management panels, SSO status panels, widget containers with explicit loading/error states.
- **Layout rules:** public marketing page, hosted auth routes, protected `/app`, org-scoped `/w/[slug]`, onboarding route, settings/profile route, admin/users and admin/sso sections.
- **Spacing:** enterprise dashboard density; keep widget cards separated by 6/8 spacing and maintain full-width admin surfaces for tables/widgets.
- **Shadows:** restrained; prefer borders and status badges.
- **Radius:** medium controls, xl panels, consistent sidebar active-item radius.
- **Dark/light notes:** dark mode must keep identity widgets legible; avoid low-contrast muted text in admin/security pages.
- **Component usage rules:** make auth boundaries explicit; navigation should hide unauthorized admin routes and server routes should enforce protection; SSO and user-management widgets need clear empty/error states.
- **Prompt pattern:** "Build an enterprise auth dashboard with Next.js 16, Tailwind v4, shadcn/ui, WorkOS AuthKit, Convex, org-scoped workspaces, first-login onboarding, profile settings, user management, SSO setup, protected admin routes, and server-issued widget token flows."

## SupaNext Starter Kit 2 Metadata Profile

- **Design family:** Supabase SaaS starter with landing + protected dashboard shell.
- **License caution:** metadata-only until a license file is verified.
- **Color tokens:** Supabase-inspired green accent on neutral surfaces, soft dark-mode panels, clear auth-state badges.
- **Typography rules:** friendly SaaS landing headings, compact dashboard labels, form-first auth typography, visible helper text on password and profile forms.
- **Button styles:** primary green/brand actions for sign-up/save/create, outline for secondary navigation, ghost for sidebar and profile dropdown items.
- **Card styles:** bento landing feature cards, dashboard shell cards, profile settings cards, CRUD project table panels.
- **Layout rules:** public landing route, sign-in/sign-up/forgot/update password pages, protected dashboard redirect, profile settings, project CRUD table, middleware-auth route groups.
- **Spacing:** airy landing sections; compact authenticated dashboard with predictable 4/6/8 rhythm.
- **Shadows:** soft landing shadows; minimal dashboard shadows.
- **Radius:** rounded-xl feature cards and dashboard panels; rounded-md controls.
- **Dark/light notes:** use next-themes style toggling; auth pages must remain readable without Supabase env vars.
- **Component usage rules:** use this only for prompt/design guidance until license verification; do not copy source code. Preserve SSR Supabase auth, middleware redirects, and route protection patterns conceptually.
- **Prompt pattern:** "Create a Supabase-backed SaaS starter with a public landing page, Tailwind v4 shadcn UI, sign-in/sign-up/forgot/update-password pages, SSR auth middleware, protected dashboard, profile settings, project CRUD table, dark mode, and safe empty states when Supabase env vars are missing."
