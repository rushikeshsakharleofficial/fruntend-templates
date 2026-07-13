# Free Spree Storefront Design Profile

Source: https://github.com/spree/storefront  
License: MIT  
Use: ecommerce storefronts, product catalogs, carts, checkout, account/order pages, and multi-region commerce.

## Color tokens

```css
--background: 0 0% 100%;
--foreground: 222 47% 11%;
--surface: 210 40% 98%;
--surface-strong: 214 32% 91%;
--primary: 222 47% 11%;
--primary-foreground: 0 0% 100%;
--accent: 221 83% 53%;
--accent-foreground: 0 0% 100%;
--muted: 215 16% 47%;
--border: 214 32% 91%;
--success: 142 71% 45%;
--warning: 38 92% 50%;
--danger: 0 72% 51%;
```

Dark mode: invert background/surface hierarchy, keep product imagery bright, reduce border contrast, and preserve WCAG-readable price, stock, and checkout states.

## Typography rules

- Use a neutral sans-serif stack such as Geist, Inter, or system UI.
- Product titles: 18–24 px, semibold, compact line height.
- Prices: 20–30 px, bold; sale price first, crossed original price secondary.
- Body copy: 14–16 px with 1.5–1.65 line height.
- Labels, stock status, filters, and metadata: 12–14 px, medium weight.
- Avoid decorative fonts in checkout, account, and order-management screens.

## Button styles

- Primary: solid dark or brand accent, 40–48 px height, medium weight.
- Secondary: neutral outline with visible hover background.
- Destructive: red only for remove/cancel actions.
- Add-to-cart and checkout buttons must remain full-width on mobile.
- Loading actions must show progress and prevent duplicate submission.
- Disabled states must remain readable and clearly non-interactive.

## Card styles

- Product cards use image-first composition, restrained borders, and minimal shadow.
- Radius: 10–16 px for cards; 8–12 px for controls.
- Keep price, title, rating, stock, and variant state visually separated.
- Cart and order cards should prioritize quantity, subtotal, delivery, and status.
- Avoid heavy glassmorphism or decorative gradients that reduce catalog clarity.

## Layout rules

- Desktop catalog: 3–5 product columns depending on viewport.
- Tablet: 2–3 columns. Mobile: 1–2 columns.
- Use a sticky filter/sidebar only when it does not block product browsing.
- Product detail pages: gallery first, purchase panel second; stack vertically on mobile.
- Checkout: one-page flow with clear sections for contact, address, delivery, payment, and review.
- Account area: persistent side navigation on desktop, compact tabs or drawer on mobile.
- Keep cart summary and final total visible near the primary action.

## Spacing

- Base unit: 4 px.
- Control gaps: 8–12 px.
- Card padding: 16–24 px.
- Section spacing: 32–64 px.
- Checkout groups: 20–32 px.
- Product grids: 16–28 px gaps based on density.

## Shadows

- Default cards: none or subtle `0 1px 3px rgb(0 0 0 / 0.08)`.
- Floating cart, dropdown, and modal: `0 12px 32px rgb(0 0 0 / 0.14)`.
- Do not use strong shadows around every product card.

## Radius

- Inputs/buttons: 8–12 px.
- Product cards: 12–16 px.
- Modals/drawers: 16–20 px.
- Pills/badges: fully rounded only for compact status and category labels.

## Dark/light mode notes

- Product photos should not be tinted by theme surfaces.
- Keep payment, coupon, stock, validation, and order-status colors semantically stable.
- Use light mode as default for image-heavy retail catalogs unless brand direction requires otherwise.
- Ensure browser-native autofill remains readable in checkout fields.

## Component usage rules

- Product grid: expose responsive columns, skeleton loading, empty state, and pagination/infinite-scroll mode.
- Filters: support categories, price, variants, availability, and clear-all behavior.
- Variant selector: disable unavailable combinations immediately.
- Cart: use optimistic quantity updates with server reconciliation.
- Checkout: preserve entered data after validation errors.
- Region/language selector: show current market clearly and avoid resetting the cart silently.
- Account/order tables: collapse into cards on small screens.
- Policy/consent text: explicit, readable, and placed next to required controls.
- Always include keyboard focus, labels, error messages, and accessible dialog behavior.

## Prompt patterns

### Ecommerce storefront

Create a production-grade Next.js ecommerce storefront inspired by the free MIT Spree Storefront. Use a mobile-first product catalog, responsive filters, product gallery, variant selection, cart drawer, one-page checkout, account pages, order history, region/language switching, SEO-ready product metadata, and accessible loading/error/empty states. Use Tailwind CSS 4 with restrained borders, neutral surfaces, clear prices, strong purchase actions, and no premium or gated assets.

### Service business with products

Create a clean local-service storefront using the Spree Storefront interaction model: category browsing, product/service detail pages, quantity selection, delivery-area selector, cart, checkout, customer account, order tracking, and responsive mobile purchase flow. Keep the interface simple, fast, and usable on low-end phones.

### Headless commerce adaptation

Build only reusable frontend patterns from Spree Storefront: catalog grid, search and facets, product details, cart, checkout sections, account navigation, order status, and regional selectors. Keep the commerce backend adapter abstract so the UI can connect to Spree, WooCommerce, Shopify, Medusa, or a custom API.
