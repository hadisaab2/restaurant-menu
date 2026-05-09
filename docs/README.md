# Restaurant Menu — project documentation

This document summarizes the **restaurant-menu** frontend so another assistant (for example Claude) can work productively without re-discovering the codebase.

---

## What this repo is

- **Menugic** digital menu / storefront for restaurants: customer-facing themed menus (`theme1`–`theme6`), plus **Restaurant admin dashboard** (`/restaurant/admin`) and **Super admin** (`/superadmin`).
- **Stack:** React 18, Create React App (`react-scripts` 5), React Router v6, Redux + `redux-thunk` + **`redux-persist`** (cart + restaurant slices), TanStack React Query (`@tanstack/react-query`).
- **UI:** Material UI v5 (`@mui/material`), Emotion, **styled-components** (themes inject JSON `theme` from API), TailwindCSS 3.x, Framer Motion, TipTap editor, charts (Recharts), Swiper.

---

## Quick start

1. **`npm install`** — runs **`postinstall`**: `node scripts/fix-react-select.js` (patches/workaround for `react-select` browser ESM in CRA if needed).

2. **`.env`** in repo root (**required**):

   ```env
   REACT_APP_BASE_URL=<your-backend-base-url-no-trailing-slash>
   ```

   Example (local): `http://localhost:4000`.

   **`src/apis/URLs.js`** logs `REACT_APP_BASE_URL` at runtime and warns if unset. All REST paths are composed from `REACT_APP_BASE_URL`.

3. **`npm start`** — dev server (default CRA port **3000**). Scripts use **`--max_old_space_size=4096`** for memory.

4. **`npm run build`** — production build → `build/`.

5. **`npm test`** — Jest (`react-scripts test`).

---

## Entry and global shell

| File | Role |
|------|------|
| `src/index.js` | Renders `<App />` in StrictMode; **ResizeObserver** wrapper to reduce benign dev console noise |
| `src/App.jsx` | Redux `Provider`, `PersistGate`, `QueryClientProvider`, `<ApplicationRoutes />`, `ToastContainer` (bottom-center) |
| `src/routes/index.jsx` | **`BrowserRouter` + routing** |

---

## Routing model

Defined in **`src/routes/index.jsx`** and **`src/routes/URLs.js`**.

### Subdomain routing (production-style)

First label of **`window.location.hostname`** is treated as the restaurant subdomain **unless** it is **`www`**, **`menugic`**, or **`localhost`**.

Then a **single** route renders:

`/` → **`SubDomainTemplate`** with `restaurantName={subdomain}`.

Otherwise the normal route table applies:

| Path | Component / behavior |
|------|----------------------|
| `/` | Marketing **Home** |
| `/v2` | Redirects to `/` |
| `/:restaurantName` | **`Template`** — loads restaurant by path param, picks customer **theme** |
| `/error/notfound` | Not found |
| `/notsubscribed` | Not subscribed |
| `/login` | Admin sign-in (wrapped with `withRedirection`) |
| `/restaurant/admin` | **Restaurant dashboard** — `AdminLayout(RestaurantDash, role 2)` |
| `/superadmin` | **Super admin** — `AdminLayout(SuperAdmin, role 1)` |

**`AdminLayout`** wraps with **`ProtectedRoute`**: requires `accessToken` cookie; optional **role** check (`role_id` in `userInfo` cookie must match `1` = superadmin, `2` = restaurant).

Cookies are managed via **`src/utilities/manageCookies.js`** (`js-cookie`).

---

## Customer menus: Template HOC (orchestration)

**`src/HOC/Template/index.jsx`** (path route `/:restaurantName`) and **`src/HOC/SubDomainTemplate/index.jsx`** (subdomain host) share the same flow:

1. **`useGetRestaurant({ restaurantName })`** — on error → `/error/notfound`.
2. Success → **`dispatch(addmenu(...))`**, `document.title`, favicon from  
   `https://storage.googleapis.com/ecommerce-bucket-testing/` + **`logoURL`**, **`changelanuage`** (`default_language` or legacy `languages` string).
3. **Subscription validity (`is_valid` / `IsValid`):**
   - **Invalid + theme 3:** in-menu **`Theme3NotSubscribed`** (see `pages/theme3/NotSubscribed`).
   - **Redirect to `/notsubscribed`:** `SubDomainTemplate` **does not** redirect when `template_id` is **3 or 5**; **`Template`** only exempts **3** — compare both files before changing behavior.
   - Otherwise invalid → **`null`** or redirect per branch.
4. **`ThemeProvider`** (styled-components): `theme={{ ...JSON.parse(response.data.theme), font }}`.
5. Renders **`Theme1`…`Theme6`** when **`restaurant.template_id`** is **1–6**. **`HOC/*/loading`** ~3s + waits for categories before showing the theme.

---

## Customer themes (`theme1`–`theme6`) — detailed

Themes live under **`src/pages/themeN/`**. The API **`template_id`** (`1`…`6`) selects which root mounts inside **`Template`** / **`SubDomainTemplate`**.

### Naming, routing, and data (all themes)

| Concern | Behavior |
|--------|-----------|
| **Restaurant key** | `useParams().restaurantName` on `/slug` URLs, **or** first DNS label on tenant subdomains (excluding `www`, `menugic`, `localhost`). |
| **Deep links** | **`?productId=`** — opens **`ProductParam`** (or theme’s inline details) for that product. **`?categoryId=`** — active category / browse state. Some themes also use **`?page=`** for list pagination. |
| **Redux** | `state.restaurant[restaurantName]` — full menu payload from `addmenu`. `state.cart[restaurantName]` — cart lines (per-slug). Language: `activeLanguage` on the same slice (`en` / `ar`). |
| **Feature flags** | Parse **`restaurant.features`** JSON. Common keys: **`cart`**, **`install_app`**, plus slider and other toggles. Gates buttons and modals. |
| **`show_all_items_category`** | Synthetic category **`all-items`** (**All Items** / **كل الأصناف**) prepended when enabled; **each theme file encodes which `template_id` may use it** — see per-theme notes. |
| **Category sort** | Usually **`priority`** DESC, **`id`** ASC. |
| **RTL** | Themes **1, 3, 4, 5** set **`document.documentElement.dir`** to **`rtl`** when language is Arabic. |
| **Media URLs** | Category/product images often use `https://storage.googleapis.com/ecommerce-bucket-testing/` + path from API. |

### Product catalog features (where implemented)

Across themes, browsing generally supports:

- **Category navigation** (tabs, chips, sidebar, carousel index, or split view).
- **Text search** over products (header or dedicated search bar).
- **Optional slider** when **`show_slider_image`** and **`sliderImages`** exist.
- **Localized labels** from `en_*` / `ar_*` fields and `activeLanguage`.

**Product detail surfaces**

- **URL-driven overlay:** **`ProductParam`** under each theme (themes **1, 2, 5, 6** import **theme2**’s `ProductParam`; **3** and **4** use their own copies). Handles carousel, **`form_json`** / legacy options, discounts, out-of-stock, add-to-cart hooks, product view logging where wired.
- **Inline details:** **`products/productDetails/`** exists in several themes (e.g. **theme2**) for opening details from the grid without leaving the list context (in addition to **`?productId`**).

**Cart and checkout (themes with `features.cart`)**

- **Cart UI:** `popup/cart` — line items, qty, options display; often uses **`product-options/cartLabels`** for readable option text.
- **Checkout wizard** (e.g. **`theme3/popup/cart/Wizard/index.jsx`**, reused conceptually where the same popup is imported): **4 steps** — **Cart → Order type → Details → Review**, with progress UI. **`LocationSelector`**, **branch** / **region** selection under `popup/cart/order/` when the restaurant configures them.
- **Customer account:** Wizard can prefill from **`CUSTOMER_ME_URL`** when a customer token exists (`utilities/customerAuthStorage`).
- **Submit order:** **`useAddOrderQuery`** / **`ADD_ORDER_URL`**; clears cart on success; **analytics** **`trackCheckoutStart`**, **`trackOrderPlaced`** (see `utilities/analyticsTracking.js`).

Canonical **behavior checklist** for “classic” menu + cart is written in **`src/pages/theme2/README.md`** (duplicate text also appears in **`src/pages/theme6/README.md`** as a prompt-ready spec).

### High-level feature coverage by theme

Legend: **●** = implemented in that theme’s **`index.jsx` / obvious wiring; **–** = not surfaced in that shell (may still exist in copied folders unused by root).

| Capability | T1 | T2 | T3 | T4 | T5 | T6 |
|------------|:--:|:--:|:--:|:--:|:--:|:--:|
| Dedicated **marketing home** (hero, explore flow) | – | – | ● | ● | ● (after welcome) | – |
| **Bottom tab bar** (mobile primary nav) | ● | – | ● | ● | ● | ● |
| **Sidebar** category drawer | ● | ● | ● | ● | – | ● |
| **Feedback** popup | ● | – | ● | ● | – | – |
| **Contact** + **contact form** popups | ● | – | ● | ● | – | – |
| **About us** popup | ● | – | ● | ● | – | – |
| **Branches / location** popup | ● | ● | ● | ● | ● | ● |
| **Share** menu link | ● | ● | ● | ● | ● | ● (header) |
| **PWA install** prompt | ● | ● | ● | ● | ● | ● |
| **`CustomerAccountNav`** (customer wishlist/account entry) | ● (in shared `NavigationBar`) | – | ● | ● | – | – |

---

### Theme 1 — `src/pages/theme1/` (split menu + full engagement)

**Role:** Single-focus **menu experience** (no separate marketing homepage — “home” actions return to the menu / first category).

**Layout & navigation**

- **Top:** Shared **`NavigationBar`** (`theme3/NavigationBar`) — logo, mobile menu, categories, **wishlist/customer** (`CustomerAccountNav`), language, links to **feedback**, **contact form**, **branches** → location, **cart** if enabled, **About** when `restaurant.show_about_us !== false`.
- **Optional slider:** **`Theme12MenuSlider`** (`src/components/Theme12MenuSlider.jsx`) when slider flag + images.
- **Main content:** **`MenuSplitView`** — split category / product browsing with search inside that layout.
- **Bottom:** **`BottomTabBar`** (`theme3`) with **`hideHome`** — tabs behave as **categories** (backs to menu), **cart** (badge), **branches** (if any), **feedback**, **contact**; aligns with “no home” UX.
- **Sidebar:** **`theme3/Sidebar`** — category list + same actions as desktop/mobile menu.

**Modules reused from other themes**

- **Cart:** **`theme3/popup/cart`** (full wizard).
- **Product overlay:** **`theme2/ProductParam`**.
- **About:** **`theme4/popup/aboutUs`**.
- **Location / share / feedback / contact:** **`theme3/popup/*`**.

**Other behavior**

- **`show_all_items_category`:** Enabled when **`template_id === 1`** (and flag true).
- **Analytics:** **`trackVisit`**, **`trackPageView`** on restaurant load.
- **History UX:** **`pushState`** when opening popups/sidebar; **`popstate`** closes overlays; **`productId`** open state tracked with wrapped `history.pushState`/`replaceState`.

**Files to start from:** `theme1/index.jsx`, `theme1/MenuSplitView/`.

---

### Theme 2 — `src/pages/theme2/` (classic header + sidebar)

**Role:** Reference “full menu” chrome: **header carousel** for categories, search, optional header slider, **`Products`** grid with local **`products/productDetails`** + **`ProductParam`** for **`?productId`**.

**Features**

- **Header:** Category strip / carousel alignment, **`headertop`**, **`show_slider_image`** in header area when configured.
- **Sidebar:** Drawer category list synced with **`categoryId`** (except **`all-items`** clears `categoryId` from URL — same pattern as **theme 6**).
- **Popups:** **Location**, **cart** (local `popup/cart` with wizard under `Wizard/`), **share** — **no** feedback / contact / about in root **`index.jsx`**.
- **PWA:** **`beforeinstallprompt`** captured; **`InstallPrompt`** when **`install_app`**.
- **ProductParam:** Own copy under **`theme2/ProductParam/`**.

**`show_all_items_category`:** Applies when **`template_id === 2`** (and flag true).

**Spec doc:** **`src/pages/theme2/README.md`** lists mandatory behaviors for clones (EN/AR, cart wizard parity, analytics, etc.).

---

### Theme 3 — `src/pages/theme3/` (home → categories → products)

**Role:** Strong **onboarding/marketing**: **`HomePage`** (slider, sections, **`#social-media-section`** scroll target), then **`CategoriesGrid`** / **`CategoryHeader`**, then product list; driven by **`viewMode`** (`home` | `categories` | `products`).

**Features**

- **NavigationBar** — same shell as theme 1/4 incl. **`CustomerAccountNav`** when used.
- **BottomTabBar** — **Home**, **Categories**, **Cart** (badge), **Branches** (if branches exist), **Feedback**; language row when **`languages === 'en&ar'`** (see component).
- **Popups:** **feedback**, **contact**, **contactForm**, **about** (`../theme4/popup/aboutUs` import path), **location**, **cart**, **share**.
- **Cart animation:** **`CartAnimation`** wired from add-to-cart events in product flows.
- **Invalid subscription:** **`NotSubscribed`** component; **`Template`** HOC uses it for invalid **template 3** tenants.
- **Analytics:** **`trackVisit`**, **`trackPageView`**.

**`show_all_items_category`:** When **`template_id === 3`** and flag true.

**Admin dashboard coupling:** Restaurants on **template 3 or 4** hit restricted sidebar sections in **`restaurantdash`** (feedbacks, questions, orders, customers, analytics) — see [Restaurant dashboard](#restaurant-dashboard) below.

---

### Theme 4 — `src/pages/theme4/` (theme 3 + shop mode)

**Role:** Almost the same feature set as **theme 3** (same **`HomePage`**, **`CategoriesGrid`**, **`BottomTabBar`**, engagement popups, **`CartAnimation`**, **`ProductParam`**, **`NotSubscribed`** copy lives under **`theme4/NotSubscribed`** too).

**Theme-4-specific**

- **`ShopPage`** — When parsed **`theme.categoryDisplayMode === 'shop'`** **and** **`template_id === 4`**, shows a **single scroll “shop”** layout: configurable **`shopPageTitle`** / **`shopPageSubtitle`** from theme JSON, **category pills**, sticky search, and embedded **`products`** list.
- **About popup:** **`theme4/popup/aboutUs`** (local), not cross-imported like theme 3.

**Code quirk:** Default export still named **`Theme3`** in `theme4/index.jsx`. **`show_all_items_category`** guard still compares **`template_id === 3`** — verify for real **template 4-only** rows.

---

### Theme 5 — `src/pages/theme5/` (“Elegant” UI)

**Role:** Opinionated **premium mobile layout** using **`components/`** only (small footprint vs other themes).

**Features**

- **Welcome gate:** **`WelcomeScreen`** on first entry; **skipped** if URL already has **`productId`** or **`categoryId`** (deep link).
- **Sticky **`ElegantHeader`**** — logo + name, EN/Ar pill when bilingual, **share** button → share popup.
- **`ElegantHero`** — hero + **Swiper** when slider enabled (same flags as theme 2).
- **Search** (`ElegantSearchBar`), **horizontal category chips** (`ElegantCategoryNav`), **two-column product grid** (`ElegantProductGrid`, skeletons, empty states).
- **`ElegantBottomTabBar`:** **Menu** (scroll top), **Search** (focus + scroll input), **Cart** (if `features.cart`), **More** → **`ElegantMoreSheet`**: branches/contact (location popup), share, optional **install**, language section when `en&ar`.
- **Theming:** Admin palette → **`--theme-*` CSS variables** via **`utils/colorUtils.js`** (no duplicated color math in leaf components).
- **Reuse:** **`theme2`**: **`LocationPopup`**, **`Share`**, **`InstallPrompt`**, **`ProductParam`**. **`theme3`**: **`CartPopup`** (wizard + analytics parity).
- **All-items pseudo-category:** **No `template_id` filter** — any restaurant on theme **5** with the flag gets **`all-items`** (differs from themes 2/6).

**Not in shell:** Dedicated **feedback / contact / about** modals like theme 3 (engagement is **share + branches + cart**).

---

### Theme 6 — `src/pages/theme6/` (theme 2 + bottom tabs)

**Role:** Same **mental model as theme 2** (header, sidebar, **theme6-local** `products`, **`ProductParam`**, cart wizard, location, share from **header**) with a **persistent `BottomTabBar`**.

**Tab bar**

- **Menu** — scroll to top.
- **Search** — focuses **`#theme6-search-input`** in header area.
- **Cart** — opens cart popup (`features.cart`).
- **More** — opens **`location`** (branches / contact context), **not** share (share stays on header control).

**`show_all_items_category`:** Applies when **`template_id` is 2 or 6** (condition in **`theme6/index.jsx`**).

**Note:** **`src/pages/theme6/README.md`** is the **same Theme 2 feature specification** as **`theme2/README.md`** — useful for parity checks, **not** a theme6-exclusive doc.

---

### Cross-theme checklist for contributors

1. Decide whether the feature belongs in **every** shell or only themes that **import** a given popup (e.g. cart wizard changes may require syncing **theme2** vs **theme3** cart trees).
2. Preserve **cart line identity**, **`form_json`**, and **`product-options/`** serialization when touching checkout.
3. Test **`/:restaurantName`** and **tenant subdomain** hostname resolution.
4. After edits to **`Template` / `SubDomainTemplate`**, re-validate **invalid** UX for **`template_id` 3 vs 5** on subdomain vs path.

---

## Redux

**`src/redux/store.js`:**

- **`restaurant`** + **`cart`** reducers combined.
- **Persist** entire root with **`redux-persist`** + **localStorage**.
- **`cartExpireTransform`:** persisted cart dropped if older than **24h** from `state.__cartMeta.updatedAt`.

---

## API layer

- **Central URL catalog:** **`src/apis/URLs.js`** — exports constants like `GET_RESTAURANT_URL(restaurantname)`, product/category CRUD URLs, orders, branches, media, slider, badges, value-cards, about-us, working hours, stats section, **threads** (admin + public), **feedback**, **customer auth** (`/auth/customer/...`), visit analytics under **`/restaurants/logs/...`**, etc.
- **Per-domain modules:** **`src/apis/<domain>/`** — many small files (`getRestaurant.js`, `addProduct.js`, …) — typically used with React Query hooks or direct `axios` calls (follow existing file when adding endpoints).

Add new backend routes by extending **`URLs.js`** and mirroring the existing hook/module pattern beside related files.

---

## Restaurant dashboard

**`src/pages/restaurantdash/index.jsx`** — sidebar-driven sections (state `section`), including **Dashboard**, **Products**, **Categories**, **Settings** (branches, logo, QR, slider, social, working hours, etc.), **Report**, **Feedbacks**, **QuestionsSuggestions**, **Orders**, **Customers**, **RegisteredCustomers**, **Analytics**.

**Access note:** For restaurants with **`template_id` 3 or 4**, several sections (feedbacks, questions, orders, customers, registered customers, analytics) are **restricted** in UI — see `isTheme3Or4` and `isRestrictedSection` logic in the same file.

---

## Super admin

**`src/pages/superadmin/`** — platform-level management (restaurants, themes, etc. — explore under that folder for screens).

---

## Other notable areas

- **Marketing site:** `src/pages/home/`, `src/pages/home-v2/`
- **Auth:** `src/pages/adminauth/`, `src/apis/users/sign-in.js`, `validateToken.js`
- **Product options / Form.io legacy:** `src/product-options/` (migration helpers)
- **Global styles:** `src/index.css`, Tailwind + PostCSS (`tailwind.config.js`, `postcss.config.js`)

---

## Environment and operations

- **CORS:** Backend must allow the frontend origin (e.g. `http://localhost:3000` in dev).
- **After `.env` change:** restart `npm start` (CRA embeds `REACT_APP_*` at build time).
- **Committed `build/`:** This repo may contain a prebuilt `build/` output; treat as deploy artifact, not source of truth.

---

## Conventions for contributors

- Match existing patterns: **JSX** files, **styled-components** `styles.js` beside components in many areas, **MUI** in dashboard.
- Keep API paths in **`src/apis/URLs.js`**.
- Subdomain vs path routing is **hostname-sensitive**; test `localhost` path routes vs real subdomain hosting separately.

---

## File map (high level)

```
src/
  App.jsx                 # Root providers
  index.js
  routes/                 # ApplicationRoutes, URL constants, ProtectedRoute
  HOC/                    # Template, SubDomainTemplate, AdminLayout, sign-in
  apis/                   # URLs.js + domain-specific API modules
  redux/                  # store, reducers, actions
  pages/
    theme1/ … theme6/     # Customer menu themes
    restaurantdash/       # Restaurant admin
    superadmin/           # Platform admin
    home/, home-v2/       # Marketing
    adminauth/            # Login
  components/             # Shared UI
  utilities/              # Cookies, helpers
scripts/
  fix-react-select.js    # postinstall hook
```

---

*Generated for handoff — align with **`README.md`** in the repo root for minimal setup steps; extend this doc when architecture or routing rules change.*
