# Theme 2 Feature Specification (Prompt-Ready)

This document describes the full behavior and feature set of `theme2` so it can be used as a source spec to generate a **new theme design with the same functionality**.

Use this as the implementation contract: preserve all features and flows, change only visual design and layout style.

---

## Goal

Create a new theme inspired by Theme 2 with:

- the same user capabilities and flows
- the same integrations and data behavior
- a different visual language (new UI design)
- improved modern styling if desired

Do **not** remove existing functionality.

---

## Core Theme 2 Architecture

Main entry component:

- `restaurant-menu/src/pages/theme2/index.jsx`

Primary sections:

- `Header` with categories + search + controls
- `Products` listing and category filtering
- Product details modal flow:
  - inline product details (`products/productDetails`)
  - URL-driven product details (`ProductParam`)
- Popups:
  - Cart
  - Location/details
  - Share
- Sidebar categories
- Install app prompt (PWA flow)

---

## Mandatory Features to Preserve

### 1) Product browsing and filtering

- Category-based browsing
- Optional "All Items" synthetic category support
- Category ordering by priority
- Product search support
- Active category reflected in URL query (`categoryId`)

### 2) Product details and options

- Open product details from product list
- Open product details from URL query parameter (`productId`)
- Full product info:
  - image carousel
  - name/description
  - localized content (EN/AR)
  - dynamic pricing with discounts
- Product options/customizations:
  - size
  - add-ons
  - removals
  - legacy form option compatibility
- Special instructions/note support
- Out-of-stock handling

### 3) Cart system

- Add to cart with quantity
- Unique cart line identity based on product + selected options
- Increment/decrement quantity
- Remove line item
- Clear and recalculate totals correctly
- Cart should support mixed customizations and display them clearly

### 4) Cart checkout modal flow

- Keep existing cart popup flow architecture
- Keep wizard/order flow behavior currently used in Theme 2
- Preserve all step logic and validations
- Preserve cart review with totals
- Keep compatibility with branch/region/location dependent ordering when configured

### 5) Location and branch behavior

- Location popup availability
- Branch and region selection flow where enabled
- Integration with ordering details flow (wizard/order)

### 6) Share functionality

- Keep share popup and deep-link support
- Preserve product/category URL behavior

### 7) Internationalization and RTL support

- Full EN/AR support
- Direction-aware layout for Arabic
- Language-sensitive labels for categories, products, and options

### 8) Restaurant feature toggles

Theme must still honor feature flags from restaurant config, including (but not limited to):

- cart enable/disable
- install app prompt enable/disable
- slider visibility settings
- any existing feature-dependent UI visibility

### 9) Analytics and logging behavior

- Preserve product view logging and cart action tracking behavior already present in flows
- No regression in existing API calls and event flows

### 10) Performance and compatibility

- Mobile-first and responsive behavior
- Keep lazy/loading behavior where already present
- Avoid heavy rendering regressions in product list and cart

---

## Cart UI Requirements for the New Theme

Keep the same logic but redesign visuals.

Cart item area must support:

- product thumbnail
- product title
- line price
- compact quantity controls
- remove action
- customization display:
  - size
  - add-ons
  - removals
  - optional note/instruction
- clear subtotal/total section

Customization display should remain structured (not raw dumped text).

---

## Non-Negotiable Requirement: Bottom Tab Bar

The new theme **must include a Bottom Tab Bar**.

Bottom Tab Bar requirements:

- Always available on mobile viewport
- Fixed to bottom
- Safe-area aware (iOS notch/home indicator)
- Includes quick actions at minimum:
  - Home/Menu
  - Search (or category navigation shortcut)
  - Cart (with live item count badge)
  - More/Details (or equivalent)
- Active tab visual state must be clear
- Must not block core content or modal interactions
- Must integrate with existing cart popup behavior

This is mandatory even if Theme 2 currently uses floating action buttons in some places.

---

## Data and API Compatibility Rules

Do not break:

- existing Redux cart structure and actions
- product option serialization/parsing (`form_json`, v2 + legacy compatibility)
- route query behavior (`productId`, `categoryId`)
- existing API contracts for products/categories/restaurant data

No backend contract changes should be required for the new theme.

---

## UX Quality Targets

- Premium, clean, modern visual style
- Fast scanning of products and cart lines
- Consistent spacing, typography, and hierarchy
- Smooth transitions and touch-friendly controls
- Accessible tap targets and contrast

---

## Implementation Guardrails

- Reuse existing business logic where possible
- Prefer UI-layer refactor over logic rewrites
- Keep components modular and themeable
- Avoid duplicating logic already solved in Theme 2 flows
- Maintain parity tests/checks for critical flows:
  - browse category -> open product -> select options -> add to cart -> edit quantity -> checkout step

---

## Prompt Template (Copy/Paste)

Use this template when asking an AI/code assistant to build a new theme:

1. Build a new restaurant menu theme with the same features and behavior as Theme 2.
2. Keep all data contracts, cart logic, option logic, and query-param deep-link behavior unchanged.
3. Redesign only the UI/UX style (modern, premium, clean, mobile-first).
4. Preserve support for EN/AR and RTL.
5. Preserve cart, product customizations, location/share/install-prompt flows.
6. Add a mandatory bottom tab bar with cart badge and core navigation actions.
7. Ensure responsive performance and no regressions in existing flows.

