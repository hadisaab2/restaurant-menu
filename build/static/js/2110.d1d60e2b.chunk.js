"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[2110],{41785:(e,t,o)=>{o.r(t),o.d(t,{default:()=>fl});var r=o(82483),i=o(99891),n=o(93376),a=o(91965),l=o(73422),s=o(41190),d=o(42751),c=o(22829);const p=s.DU`
  @import url('https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Literata:opsz,wght@7..72,400;7..72,600;7..72,700&display=swap');

  :root {
    --c-primary: ${e=>e.$mainColor||"#1A1816"};
    --c-primary-hover: ${e=>e.$mainColorHover||"#2E2C29"};
    --c-accent: #9E7C0C;
    --c-accent-hover: #7A6009;
    --c-accent-light: #F7F1DC;
    --c-accent-lighter: #FBF8EE;
    --c-bg: ${e=>e.$bgColor||"#FAFAF8"};
    --c-surface: #FFFFFF;
    --c-surface-alt: #F4F2ED;
    --c-surface-raised: #FFFFFF;
    --c-text: ${e=>e.$textColor||"#1A1816"};
    --c-text-2: #5C5752;
    --c-text-3: #918C86;
    --c-text-inv: #FFFFFF;
    --c-border: #E5E2DB;
    --c-border-light: #F0EDE7;
    --c-success: #1B7A3A;
    --c-success-light: #E8F5EC;
    --c-warning: #C67F17;
    --c-warning-light: #FEF3D6;
    --c-error: #B5342A;
    --c-error-light: #FDE8E6;
    --c-sale: #B5342A;
    --c-overlay: rgba(0, 0, 0, 0.45);
    --font-display: 'Literata', Georgia, 'Times New Roman', serif;
    --font-body: 'DM Sans', system-ui, -apple-system, sans-serif;
    --font-ar: 'Almarai', 'Segoe UI', Tahoma, sans-serif;
    --text-xs: 0.6875rem;
    --text-sm: 0.75rem;
    --text-base: 0.875rem;
    --text-md: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.375rem;
    --text-2xl: 1.625rem;
    --text-3xl: 2rem;
    --sp-1: 4px; --sp-2: 8px; --sp-3: 12px; --sp-4: 16px;
    --sp-5: 20px; --sp-6: 24px; --sp-8: 32px; --sp-10: 40px;
    --sp-12: 48px; --sp-16: 64px;
    --r-sm: 6px; --r-md: 10px; --r-lg: 14px; --r-xl: 20px; --r-full: 999px;
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
    --shadow-md: 0 4px 16px rgba(0,0,0,0.07);
    --shadow-lg: 0 8px 30px rgba(0,0,0,0.1);
    --shadow-xl: 0 20px 50px rgba(0,0,0,0.15);
    --header-h: 56px;
    --cat-nav-h: 44px;
    --bnav-h: 56px;
    --cart-bar-h: 52px;
    --container-max: 1200px;
    --sidebar-w: 200px;
    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --dur-fast: 150ms;
    --dur-normal: 250ms;
    --dur-slow: 400ms;
    --safe-bottom: env(safe-area-inset-bottom, 0px);
  }

  body.no-scroll { overflow: hidden; }
`,h=s.i7`
  from { opacity: 0; }
  to { opacity: 1; }
`,u=(s.i7`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,s.i7`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`,s.Ay.div`
  min-height: 100vh;
  width: 100%;
  background: var(--c-bg);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.5;
  color: var(--c-text);
  -webkit-font-smoothing: antialiased;
  [dir="rtl"] & { font-family: var(--font-ar); }
`),x=(s.Ay.div`
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--sp-4);
`,s.Ay.div`
  display: flex;
  gap: var(--sp-6);
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--sp-4);
`),m=s.Ay.div`
  flex: 1;
  min-width: 0;
  padding-block: var(--sp-4);
`,f=(s.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: ${e=>e.$show?"flex":"none"};
  align-items: flex-end;
  justify-content: center;
`,s.Ay.div`
  position: absolute;
  inset: 0;
  background: var(--c-overlay);
  animation: ${h} var(--dur-normal) var(--ease-out);
`),g=s.Ay.h2`
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--c-text);
  margin-bottom: var(--sp-4);
  [dir="rtl"] & { font-family: var(--font-ar); }
`;s.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`,s.Ay.div`
  position: fixed;
  z-index: 4;
  top: 0; left: 0;
  width: 100%; height: 100%;
  backdrop-filter: ${e=>e.showPopup?"blur(5px)":"blur(0px)"};
  -webkit-backdrop-filter: ${e=>e.showPopup?"blur(5px)":"blur(0px)"};
  transition: all 1s ease-in-out;
  pointer-events: none;
`,s.Ay.div`
  position: fixed; bottom: 20px; right: 20px;
  width: 40px; height: 40px;
  background-color: ${e=>e.theme.mainColor};
  border-radius: 50%;
  display: flex; align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  justify-content: center;
  color: white; font-size: 25px; cursor: pointer;
`,s.Ay.div`
  position: fixed; bottom: 70px; right: 20px;
  width: 40px; height: 40px;
  background-color: ${e=>e.theme.mainColor};
  border-radius: 50%;
  display: flex; align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  justify-content: center;
  color: white; font-size: 25px; cursor: pointer;
`,s.Ay.div`
  position: absolute; left: -5px; top: -5px;
  width: 20px; height: 20px; border-radius: 50%;
  font-size: 10px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 6px rgba(0,0,0,0.5);
  color: ${e=>e.theme.textColor};
  background-color: ${e=>e.theme.backgroundColor};
`,(0,s.Ay)(c.vlb)`width: 20px; height: 20px;`,(0,s.Ay)(d.meu)`transform: rotate(270deg); width: 20px; height: 20px;`,s.Ay.div`
  position: fixed; height: 100vh; width: 100%;
  display: flex; align-items: center; justify-content: center;
  color: ${e=>e.theme.textColor};
  background-color: ${e=>e.theme.backgroundColor};
`;var v=o(58821);const b=s.Ay.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--c-surface);
  border-bottom: 1px solid var(--c-border);
  height: var(--header-h);
  transition: box-shadow var(--dur-normal) var(--ease-in-out);
  &.scrolled { box-shadow: var(--shadow-sm); }
`,y=s.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  height: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--sp-4);
`,w=s.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  min-width: 0;
  flex-shrink: 0;
`,j=s.Ay.a`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  text-decoration: none;
  min-width: 0;
  cursor: pointer;
`,C=s.Ay.div`
  width: 32px;
  height: 32px;
  border-radius: var(--r-sm);
  background: var(--c-accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  color: var(--c-accent);
  flex-shrink: 0;
  overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`,k=s.Ay.span`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-md);
  color: var(--c-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  [dir="rtl"] & { font-family: var(--font-ar); }
`,A=s.Ay.div`
  flex: 1;
  max-width: 400px;
  position: relative;
  display: none;
  @media (min-width: 768px) { display: flex; align-items: center; }
`,$=s.Ay.div`
  position: absolute;
  inset-inline-start: var(--sp-3);
  top: 50%;
  transform: translateY(-50%);
  color: var(--c-text-3);
  pointer-events: none;
  display: flex;
`,z=s.Ay.input`
  width: 100%;
  height: 36px;
  padding: 0 var(--sp-8) 0 var(--sp-10);
  border: 1px solid var(--c-border);
  border-radius: var(--r-full);
  background: var(--c-bg);
  font-size: var(--text-sm);
  color: var(--c-text);
  font-family: inherit;
  transition: border-color var(--dur-fast), background var(--dur-fast);
  &::placeholder { color: var(--c-text-3); }
  &:focus { outline: none; border-color: var(--c-accent); background: var(--c-surface); }
`,_=s.Ay.button`
  position: absolute;
  inset-inline-end: var(--sp-2);
  top: 50%;
  transform: translateY(-50%);
  color: var(--c-text-3);
  padding: var(--sp-1);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
`,T=s.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--sp-1);
  margin-inline-start: auto;
`,S=s.Ay.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--r-full);
  color: var(--c-text);
  transition: background var(--dur-fast);
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-size: var(--text-sm);
  font-weight: 700;
  &:hover { background: var(--c-surface-alt); }
`,L=(0,s.Ay)(S)`
  display: flex;
  @media (min-width: 768px) { display: none; }
`,E=(0,s.Ay)(S)``,N=s.Ay.span`
  position: absolute;
  top: 2px;
  inset-inline-end: 2px;
  min-width: 16px;
  height: 16px;
  border-radius: var(--r-full);
  background: var(--c-accent);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  line-height: 1;
`;var F=o(56723);function I(e){let{restaurant:t,restaurantName:o,activeLanguage:i,cartCount:n,onCartClick:a,onLanguageToggle:l,onSearchChange:s,searchText:d,onMobileSearchOpen:c,onLogoClick:p}=e;const h=(null===t||void 0===t?void 0:t.name)||o||"",[u,x]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=()=>x(window.scrollY>10);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[]),(0,F.jsx)(b,{className:u?"scrolled":"",children:(0,F.jsxs)(y,{children:[(0,F.jsx)(w,{children:(0,F.jsxs)(j,{onClick:p,children:[(0,F.jsx)(C,{children:null!==t&&void 0!==t&&t.logoURL?(0,F.jsx)("img",{src:(0,v.V)(t.logoURL),alt:""}):h.charAt(0).toUpperCase()}),(0,F.jsx)(k,{children:h})]})}),(0,F.jsxs)(A,{children:[(0,F.jsx)($,{children:(0,F.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,F.jsx)("path",{d:"m21 21-4.3-4.3"})]})}),(0,F.jsx)(z,{type:"search",placeholder:"ar"===i?"\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629...":"Search menu...",value:d,onChange:e=>null===s||void 0===s?void 0:s(e.target.value)}),d&&(0,F.jsx)(_,{onClick:()=>null===s||void 0===s?void 0:s(""),children:(0,F.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,F.jsx)("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),(0,F.jsxs)(T,{children:[(0,F.jsx)(L,{onClick:c,"aria-label":"Search",children:(0,F.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,F.jsx)("path",{d:"m21 21-4.3-4.3"})]})}),(0,F.jsx)(S,{onClick:l,"aria-label":"Switch language",children:"ar"===i?"EN":"\u0639"}),(0,F.jsxs)(E,{onClick:a,"aria-label":"Cart",children:[(0,F.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("path",{d:"M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18"}),(0,F.jsx)("path",{d:"M16 10a4 4 0 01-8 0"})]}),n>0&&(0,F.jsx)(N,{children:n})]})]})]})})}const B=s.Ay.nav`
  position: sticky;
  top: var(--header-h);
  z-index: 40;
  background: var(--c-surface);
  border-bottom: 1px solid var(--c-border);
  @media (min-width: 768px) { display: none; }
`,P=s.Ay.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 var(--sp-4);
  &::-webkit-scrollbar { display: none; }
`,D=s.Ay.ul`
  display: flex;
  gap: var(--sp-1);
  padding: var(--sp-2) 0;
  width: max-content;
  list-style: none;
  margin: 0;
`,M=s.Ay.button`
  padding: var(--sp-2) var(--sp-3);
  border-radius: var(--r-full);
  font-size: var(--text-sm);
  font-weight: ${e=>e.$active?600:500};
  color: ${e=>e.$active?"var(--c-text-inv)":"var(--c-text-2)"};
  background: ${e=>e.$active?"var(--c-primary)":"none"};
  white-space: nowrap;
  cursor: pointer;
  transition: all var(--dur-fast);
  border: none;
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    color: ${e=>e.$active?"var(--c-text-inv)":"var(--c-text)"};
    background: ${e=>e.$active?"var(--c-primary)":"var(--c-surface-alt)"};
  }
`;function R(e){let{categories:t,activeCategory:o,onCategoryClick:i,activeLanguage:n}=e;const a=(0,r.useRef)(null),l=(0,r.useRef)({});return(0,r.useEffect)((()=>{const e=l.current[o];e&&e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}),[o]),(0,F.jsx)(B,{"aria-label":"Categories",children:(0,F.jsx)(P,{children:(0,F.jsx)(D,{ref:a,role:"tablist",children:null===t||void 0===t?void 0:t.map((e=>{const t="ar"===n?e.ar_category:e.en_category;return(0,F.jsx)("li",{ref:t=>{l.current[e.id]=t},children:(0,F.jsx)(M,{$active:o===e.id,onClick:()=>i(e.id),role:"tab","aria-selected":o===e.id,children:t})},e.id)}))})})})}const U=s.Ay.aside`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: sticky;
    top: calc(var(--header-h) + var(--sp-4));
    align-self: flex-start;
    width: var(--sidebar-w);
    flex-shrink: 0;
    padding-top: var(--sp-4);
    max-height: calc(100vh - var(--header-h) - var(--sp-8));
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`,W=s.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: var(--sp-1);
  list-style: none;
  margin: 0;
  padding: 0;
`,q=s.Ay.button`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  padding: var(--sp-2) var(--sp-3);
  border-radius: var(--r-sm);
  font-size: var(--text-sm);
  color: ${e=>e.$active?"var(--c-text)":"var(--c-text-2)"};
  font-weight: ${e=>e.$active?600:400};
  cursor: pointer;
  transition: all var(--dur-fast);
  border: none;
  background: ${e=>e.$active?"var(--c-accent-lighter)":"none"};
  text-align: start;
  width: 100%;
  border-inline-start: 2px solid ${e=>e.$active?"var(--c-accent)":"transparent"};
  font-family: inherit;
  &:hover {
    color: var(--c-text);
    background: var(--c-surface-alt);
  }
`,O=s.Ay.span`
  margin-inline-start: auto;
  font-size: var(--text-xs);
  color: var(--c-text-3);
  font-weight: 400;
`;function Y(e){let{categories:t,activeCategory:o,onCategoryClick:r,activeLanguage:i}=e;return(0,F.jsx)(U,{"aria-label":"Categories",children:(0,F.jsx)(W,{children:null===t||void 0===t?void 0:t.map((e=>{var t;const n="ar"===i?e.ar_category:e.en_category,a=(null===(t=e.products)||void 0===t?void 0:t.length)||0;return(0,F.jsx)("li",{children:(0,F.jsxs)(q,{$active:o===e.id,onClick:()=>r(e.id),children:[(0,F.jsx)("span",{children:n}),a>0&&(0,F.jsx)(O,{children:a})]})},e.id)}))})})}const V={en:{"search.placeholder":"Search menu...","search.cancel":"Cancel","search.no_results":"No results found","search.no_results_sub":"Try a different search term","nav.home":"Home","nav.menu":"Menu","nav.search":"Search","nav.cart":"Cart","nav.more":"More","promos.title":"Today's Specials","filter.all":"All","filter.best_seller":"Best Sellers","filter.new":"New","filter.offers":"Offers","filter.popular":"Popular","sort.label":"Sort","sort.recommended":"Recommended","sort.popular":"Most Popular","sort.price_low":"Price: Low to High","sort.price_high":"Price: High to Low","sort.newest":"Newest","product.from":"From","product.add":"Add","product.unavailable":"Unavailable","product.quick_add":"Added!","product.cal":"cal","product.best_seller":"Best Seller","product.new_badge":"New","product.offer_badge":"Offer","product.customize":"Customizable","pd.required":"Required","pd.optional":"Optional","pd.max":"Choose up to {n}","pd.add_to_cart":"Add to Cart","pd.update_cart":"Update Cart","pd.notes":"Special Instructions","pd.notes_placeholder":"Any allergies or preferences...","pd.select_required":"Please select all required options","pd.allergen":"Allergen Information","pd.allergen_note":"Please inform our staff of any allergies.","pd.related":"You Might Also Like","cart.title":"Your Cart","cart.empty_title":"Your cart is empty","cart.empty_text":"Browse our menu and discover something delicious.","cart.browse":"Browse Menu","cart.subtotal":"Subtotal","cart.total":"Total","cart.checkout":"Checkout","cart.view":"View Cart","checkout.title":"Checkout","checkout.contact":"Contact Details","checkout.name":"Full Name","checkout.phone":"Phone Number","checkout.delivery_info":"Delivery Address","checkout.address":"Street Address","checkout.building":"Building","checkout.floor":"Floor","checkout.notes":"Delivery Notes","checkout.pickup_info":"Pickup Details","checkout.branch":"Pickup Branch","checkout.table_info":"Dine-in Details","checkout.table":"Table Number","checkout.payment":"Payment Method","checkout.pay_cash":"Cash on Delivery","checkout.pay_card":"Card on Delivery","checkout.place_order":"Place Order","checkout.whatsapp":"Order via WhatsApp","checkout.success_title":"Order Placed!","checkout.success_text":"Your order has been received.","checkout.back_to_menu":"Back to Menu","more.info":"Restaurant Info","more.hours":"Working Hours","more.branches":"Branches","more.contact":"Contact Us","more.share":"Share","more.about":"About Us","more.feedback":"Feedback","info.title":"About","info.hours":"Working Hours","info.contact":"Contact","info.branches":"Our Branches","info.allergy_title":"Allergy Notice","info.allergy_text":"Our kitchen handles common allergens including nuts, dairy, gluten, sesame and eggs. Please inform staff of any allergies before ordering.","branch.title":"Select Branch","recently.title":"Recently Viewed","footer.contact":"Contact","footer.hours":"Hours",items:"items",item:"item"},ar:{"search.placeholder":"\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629...","search.cancel":"\u0625\u0644\u063a\u0627\u0621","search.no_results":"\u0644\u0627 \u062a\u0648\u062c\u062f \u0646\u062a\u0627\u0626\u062c","search.no_results_sub":"\u062c\u0631\u0651\u0628 \u0643\u0644\u0645\u0629 \u0628\u062d\u062b \u0623\u062e\u0631\u0649","nav.home":"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629","nav.menu":"\u0627\u0644\u0642\u0627\u0626\u0645\u0629","nav.search":"\u0628\u062d\u062b","nav.cart":"\u0627\u0644\u0633\u0644\u0629","nav.more":"\u0627\u0644\u0645\u0632\u064a\u062f","promos.title":"\u0639\u0631\u0648\u0636 \u0627\u0644\u064a\u0648\u0645","filter.all":"\u0627\u0644\u0643\u0644","filter.best_seller":"\u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b","filter.new":"\u062c\u062f\u064a\u062f","filter.offers":"\u0639\u0631\u0648\u0636","filter.popular":"\u0627\u0644\u0623\u0643\u062b\u0631 \u0637\u0644\u0628\u0627\u064b","sort.label":"\u062a\u0631\u062a\u064a\u0628","sort.recommended":"\u0645\u0648\u0635\u0649 \u0628\u0647","sort.popular":"\u0627\u0644\u0623\u0643\u062b\u0631 \u0634\u0639\u0628\u064a\u0629","sort.price_low":"\u0627\u0644\u0633\u0639\u0631: \u0645\u0646 \u0627\u0644\u0623\u0642\u0644","sort.price_high":"\u0627\u0644\u0633\u0639\u0631: \u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649","sort.newest":"\u0627\u0644\u0623\u062d\u062f\u062b","product.from":"\u0645\u0646","product.add":"\u0623\u0636\u0641","product.unavailable":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631","product.quick_add":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629!","product.cal":"\u0633\u0639\u0631\u0629","product.best_seller":"\u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b","product.new_badge":"\u062c\u062f\u064a\u062f","product.offer_badge":"\u0639\u0631\u0636","product.customize":"\u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u062e\u0635\u064a\u0635","pd.required":"\u0645\u0637\u0644\u0648\u0628","pd.optional":"\u0627\u062e\u062a\u064a\u0627\u0631\u064a","pd.max":"\u0627\u062e\u062a\u0631 \u062d\u062a\u0649 {n}","pd.add_to_cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629","pd.update_cart":"\u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0633\u0644\u0629","pd.notes":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629","pd.notes_placeholder":"\u0623\u064a \u062d\u0633\u0627\u0633\u064a\u0629 \u0623\u0648 \u062a\u0641\u0636\u064a\u0644\u0627\u062a...","pd.select_required":"\u064a\u0631\u062c\u0649 \u0627\u062e\u062a\u064a\u0627\u0631 \u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629","pd.allergen":"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062d\u0633\u0627\u0633\u064a\u0629","pd.allergen_note":"\u064a\u0631\u062c\u0649 \u0625\u0628\u0644\u0627\u063a \u0627\u0644\u0637\u0627\u0642\u0645 \u0628\u0623\u064a \u062d\u0633\u0627\u0633\u064a\u0629.","pd.related":"\u0642\u062f \u064a\u0639\u062c\u0628\u0643 \u0623\u064a\u0636\u0627\u064b","cart.title":"\u0633\u0644\u062a\u0643","cart.empty_title":"\u0633\u0644\u062a\u0643 \u0641\u0627\u0631\u063a\u0629","cart.empty_text":"\u062a\u0635\u0641\u062d \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0648\u0627\u0643\u062a\u0634\u0641 \u0634\u064a\u0626\u0627\u064b \u0644\u0630\u064a\u0630\u0627\u064b.","cart.browse":"\u062a\u0635\u0641\u062d \u0627\u0644\u0642\u0627\u0626\u0645\u0629","cart.subtotal":"\u0627\u0644\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0641\u0631\u0639\u064a","cart.total":"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a","cart.checkout":"\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628","cart.view":"\u0639\u0631\u0636 \u0627\u0644\u0633\u0644\u0629","checkout.title":"\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628","checkout.contact":"\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644","checkout.name":"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644","checkout.phone":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641","checkout.delivery_info":"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644","checkout.address":"\u0627\u0644\u0639\u0646\u0648\u0627\u0646","checkout.building":"\u0627\u0644\u0645\u0628\u0646\u0649","checkout.floor":"\u0627\u0644\u0637\u0627\u0628\u0642","checkout.notes":"\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u062a\u0648\u0635\u064a\u0644","checkout.pickup_info":"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645","checkout.branch":"\u0641\u0631\u0639 \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645","checkout.table_info":"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0637\u0639\u0627\u0645 \u0628\u0627\u0644\u0645\u062d\u0644","checkout.table":"\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629","checkout.payment":"\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062f\u0641\u0639","checkout.pay_cash":"\u0646\u0642\u062f\u0627\u064b \u0639\u0646\u062f \u0627\u0644\u062a\u0648\u0635\u064a\u0644","checkout.pay_card":"\u0628\u0637\u0627\u0642\u0629 \u0639\u0646\u062f \u0627\u0644\u062a\u0648\u0635\u064a\u0644","checkout.place_order":"\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0637\u0644\u0628","checkout.whatsapp":"\u0627\u0637\u0644\u0628 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628","checkout.success_title":"\u062a\u0645 \u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0637\u0644\u0628!","checkout.success_text":"\u062a\u0645 \u0627\u0633\u062a\u0644\u0627\u0645 \u0637\u0644\u0628\u0643.","checkout.back_to_menu":"\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0642\u0627\u0626\u0645\u0629","more.info":"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0637\u0639\u0645","more.hours":"\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644","more.branches":"\u0627\u0644\u0641\u0631\u0648\u0639","more.contact":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627","more.share":"\u0645\u0634\u0627\u0631\u0643\u0629","more.about":"\u0645\u0646 \u0646\u062d\u0646","more.feedback":"\u062a\u0642\u064a\u064a\u0645","info.title":"\u0639\u0646 \u0627\u0644\u0645\u0637\u0639\u0645","info.hours":"\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644","info.contact":"\u0627\u0644\u0627\u062a\u0635\u0627\u0644","info.branches":"\u0641\u0631\u0648\u0639\u0646\u0627","info.allergy_title":"\u062a\u0646\u0628\u064a\u0647 \u0627\u0644\u062d\u0633\u0627\u0633\u064a\u0629","info.allergy_text":"\u0645\u0637\u0628\u062e\u0646\u0627 \u064a\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u0645\u0633\u0628\u0628\u0629 \u0644\u0644\u062d\u0633\u0627\u0633\u064a\u0629 \u0628\u0645\u0627 \u0641\u064a\u0647\u0627 \u0627\u0644\u0645\u0643\u0633\u0631\u0627\u062a \u0648\u0627\u0644\u0623\u0644\u0628\u0627\u0646 \u0648\u0627\u0644\u063a\u0644\u0648\u062a\u064a\u0646 \u0648\u0627\u0644\u0633\u0645\u0633\u0645 \u0648\u0627\u0644\u0628\u064a\u0636. \u064a\u0631\u062c\u0649 \u0625\u0628\u0644\u0627\u063a \u0627\u0644\u0637\u0627\u0642\u0645 \u0628\u0623\u064a \u062d\u0633\u0627\u0633\u064a\u0629 \u0642\u0628\u0644 \u0627\u0644\u0637\u0644\u0628.","branch.title":"\u0627\u062e\u062a\u0631 \u0627\u0644\u0641\u0631\u0639","recently.title":"\u0634\u0648\u0647\u062f \u0645\u0624\u062e\u0631\u0627\u064b","footer.contact":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627","footer.hours":"\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644",items:"\u0639\u0646\u0627\u0635\u0631",item:"\u0639\u0646\u0635\u0631"}},H=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=V[t]&&V[t][e]||e;return o&&Object.entries(o).forEach((e=>{let[t,o]=e;r=r.replace(`{${t}}`,o)})),r},K=s.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  margin-bottom: var(--sp-4);
  overflow: hidden;
`,X=s.Ay.div`
  display: flex;
  gap: var(--sp-2);
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
  &::-webkit-scrollbar { display: none; }
`,J=s.Ay.button`
  display: flex;
  align-items: center;
  gap: var(--sp-1);
  padding: var(--sp-1) var(--sp-3);
  border: 1px solid ${e=>e.$active?"var(--c-accent)":"var(--c-border)"};
  border-radius: var(--r-full);
  font-size: var(--text-xs);
  font-weight: 500;
  color: ${e=>e.$active?"var(--c-accent-hover)":"var(--c-text-2)"};
  background: ${e=>e.$active?"var(--c-accent-light)":"none"};
  white-space: nowrap;
  cursor: pointer;
  transition: all var(--dur-fast);
  font-family: inherit;
  &:hover { border-color: var(--c-text-3); color: var(--c-text); }
`,Q=s.Ay.button`
  display: flex;
  align-items: center;
  gap: var(--sp-1);
  padding: var(--sp-1) var(--sp-3);
  border: 1px solid var(--c-border);
  border-radius: var(--r-full);
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--c-text-2);
  white-space: nowrap;
  flex-shrink: 0;
  transition: all var(--dur-fast);
  background: none;
  cursor: pointer;
  font-family: inherit;
  &:hover { border-color: var(--c-text-3); color: var(--c-text); }
`,G=s.Ay.div`
  position: absolute;
  z-index: 100;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--r-md);
  box-shadow: var(--shadow-md);
  min-width: 180px;
  padding: var(--sp-1);
  right: var(--sp-4);
  margin-top: var(--sp-1);
`,Z=s.Ay.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--sp-2) var(--sp-3);
  border-radius: var(--r-sm);
  font-size: var(--text-sm);
  color: ${e=>e.$active?"var(--c-accent)":"var(--c-text-2)"};
  font-weight: ${e=>e.$active?600:400};
  cursor: pointer;
  transition: background var(--dur-fast);
  border: none;
  background: none;
  text-align: start;
  font-family: inherit;
  &:hover { background: var(--c-surface-alt); }
`,ee=s.Ay.div`
  position: relative;
`,te=[{key:"all",i18nKey:"filter.all"},{key:"best_seller",i18nKey:"filter.best_seller"},{key:"new",i18nKey:"filter.new"},{key:"offers",i18nKey:"filter.offers"},{key:"popular",i18nKey:"filter.popular"}],oe=[{key:"recommended",i18nKey:"sort.recommended"},{key:"popular",i18nKey:"sort.popular"},{key:"price_low",i18nKey:"sort.price_low"},{key:"price_high",i18nKey:"sort.price_high"},{key:"newest",i18nKey:"sort.newest"}];function re(e){let{activeFilter:t,onFilterChange:o,sortBy:i,onSortChange:n,activeLanguage:a}=e;const[l,s]=(0,r.useState)(!1),d=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=e=>{d.current&&!d.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]),(0,F.jsxs)(K,{children:[(0,F.jsx)(X,{children:te.map((e=>(0,F.jsx)(J,{$active:t===e.key,onClick:()=>o(e.key),children:H(e.i18nKey,a)},e.key)))}),(0,F.jsxs)(ee,{ref:d,children:[(0,F.jsxs)(Q,{onClick:()=>s(!l),children:[(0,F.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,F.jsx)("path",{d:"M3 6h18M6 12h12M9 18h6"})}),(0,F.jsx)("span",{children:H("sort.label",a)})]}),l&&(0,F.jsx)(G,{children:oe.map((e=>(0,F.jsxs)(Z,{$active:i===e.key,onClick:()=>{n(e.key),s(!1)},children:[(0,F.jsx)("span",{children:H(e.i18nKey,a)}),i===e.key&&(0,F.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,F.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},e.key)))})]})]})}var ie=o(2200),ne=o(18907);const ae=s.Ay.div`
  display: flex;
  flex-direction: ${e=>e.$vertical?"column":"row"};
  background: var(--c-surface);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  overflow: hidden;
  cursor: pointer;
  transition: border-color var(--dur-normal);
  position: relative;
  opacity: ${e=>e.$unavailable?.5:1};
  pointer-events: ${e=>e.$unavailable?"none":"auto"};
  &:hover { border-color: var(--c-border); }
  &:hover .accent-line { opacity: 1; }
`,le=s.Ay.div`
  background: var(--c-surface-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  ${e=>e.$vertical?"\n    width: 100%;\n    height: 0;\n    padding-bottom: 75%;\n  ":"\n    width: 110px;\n    min-height: 110px;\n  "}
`,se=s.Ay.div`
  ${e=>e.$vertical?"position: absolute; inset: 0;":"width: 100%; height: 100%;"}
  display: flex;
  align-items: center;
  justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; }
`,de=s.Ay.div`
  position: absolute;
  top: var(--sp-2);
  inset-inline-start: var(--sp-2);
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 1;
`,ce=s.Ay.span`
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 6px;
  border-radius: 3px;
  line-height: 1.3;
  color: #fff;
  background: ${e=>"best_seller"===e.$type?"var(--c-accent)":"new"===e.$type?"var(--c-primary)":"offer"===e.$type?"var(--c-sale)":"var(--c-text-3)"};
`,pe=s.Ay.div`
  flex: 1;
  min-width: 0;
  padding: var(--sp-3);
  display: flex;
  flex-direction: column;
`,he=s.Ay.div`
  font-weight: 600;
  font-size: var(--text-sm);
  line-height: 1.3;
  margin-bottom: var(--sp-1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ue=s.Ay.div`
  font-size: var(--text-xs);
  color: var(--c-text-3);
  line-height: 1.4;
  margin-bottom: var(--sp-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,xe=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-2);
  margin-top: auto;
`,me=s.Ay.div`
  display: flex;
  align-items: baseline;
  gap: var(--sp-1);
  flex-wrap: wrap;
`,fe=s.Ay.span`
  font-weight: 700;
  font-size: var(--text-sm);
  ${e=>e.$sale&&"color: var(--c-sale);"}
`,ge=s.Ay.span`
  font-weight: 400;
  font-size: var(--text-xs);
  color: var(--c-text-3);
  text-decoration: line-through;
`,ve=s.Ay.span`
  font-weight: 400;
  font-size: var(--text-xs);
  color: var(--c-text-3);
`,be=s.Ay.button`
  width: 30px;
  height: 30px;
  border-radius: var(--r-full);
  background: var(--c-primary);
  color: var(--c-text-inv);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background var(--dur-fast), transform var(--dur-fast);
  border: none;
  cursor: pointer;
  &:hover { background: var(--c-primary-hover); }
  &:active { transform: scale(0.9); }
`,ye=s.Ay.span`
  font-size: var(--text-xs);
  color: var(--c-error);
  font-weight: 500;
`,we=s.Ay.span`
  font-size: 9px;
  color: var(--c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,je=s.Ay.span`
  font-size: var(--text-xs);
  color: var(--c-text-3);
`,Ce=s.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
`,ke=s.Ay.div`
  position: absolute;
  bottom: 0;
  inset-inline: 0;
  height: 2px;
  background: var(--c-accent);
  opacity: 0;
  transition: opacity var(--dur-normal);
`;function Ae(e){let{product:t,activeLanguage:o,currency:i,onProductClick:n,onQuickAdd:a,layout:l="horizontal"}=e;const s=o||"en",d="ar"===s&&t.ar_name||t.en_name,c="ar"===s&&t.ar_description||t.en_description,p=(0,ie.Q)(i),h="vertical"===l,u=(0,r.useMemo)((()=>{if(!t.form_json)return!1;try{const e="string"===typeof t.form_json?JSON.parse(t.form_json):t.form_json;return e&&(Array.isArray(e)&&e.length>0||e.groups&&e.groups.length>0)}catch{return!1}}),[t.form_json]),x=t.out_of_stock||t.hide,m=t.discount&&t.discount>0,f=parseFloat(t.en_price)||0,g=m?f*(1-t.discount/100):f,b=(0,r.useMemo)((()=>{var e;return(null===(e=t.images)||void 0===e?void 0:e.length)>0?(0,v.V)(t.images[0].url):t.new_cover_id_url?(0,v.V)(t.new_cover_id_url):null}),[t]),y=(0,r.useMemo)((()=>{if(!t.macros)return null;try{const e="string"===typeof t.macros?JSON.parse(t.macros):t.macros;return(null===e||void 0===e?void 0:e.calories)||(null===e||void 0===e?void 0:e.cal)||null}catch{return null}}),[t.macros]),w=[];t.is_best_seller&&w.push({type:"best_seller",label:H("product.best_seller",s)}),t.new&&w.push({type:"new",label:H("product.new_badge",s)}),m&&w.push({type:"offer",label:H("product.offer_badge",s)});return(0,F.jsxs)(ae,{$vertical:h,$unavailable:x,onClick:()=>{x||null===n||void 0===n||n(t)},children:[(0,F.jsxs)(le,{$vertical:h,children:[(0,F.jsx)(se,{$vertical:h,children:b?(0,F.jsx)("img",{src:b,alt:d,loading:"lazy"}):(0,F.jsx)("span",{children:"\ud83c\udf7d\ufe0f"})}),w.length>0&&(0,F.jsx)(de,{children:w.map((e=>(0,F.jsx)(ce,{$type:e.type,children:e.label},e.type)))})]}),(0,F.jsxs)(pe,{children:[(0,F.jsx)(he,{children:d}),(0,F.jsx)(ue,{children:c}),(0,F.jsxs)(xe,{children:[(0,F.jsxs)("div",{children:[(0,F.jsxs)(me,{children:[u&&(0,F.jsx)(ve,{children:H("product.from",s)}),m&&(0,F.jsxs)(ge,{children:[p,(0,ne.T)(f)]}),(0,F.jsxs)(fe,{$sale:m,children:[p,(0,ne.T)(m?g:f)]})]}),(0,F.jsxs)(Ce,{children:[u&&(0,F.jsx)(we,{children:H("product.customize",s)}),y&&(0,F.jsxs)(je,{children:[y," ",H("product.cal",s)]})]})]}),x?(0,F.jsx)(ye,{children:H("product.unavailable",s)}):(0,F.jsx)(be,{onClick:e=>{e.stopPropagation(),u?null===n||void 0===n||n(t):null===a||void 0===a||a(t,e)},"aria-label":H("product.add",s),children:(0,F.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,F.jsx)("path",{d:"M12 5v14M5 12h14"})})})]})]}),(0,F.jsx)(ke,{className:"accent-line"})]})}const $e=s.Ay.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
  background: var(--c-surface);
  border-top: 1px solid var(--c-border);
  height: var(--bnav-h);
  padding-bottom: var(--safe-bottom);
  display: flex;
  @media (min-width: 768px) { display: none; }
`,ze=s.Ay.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>e.$active?"var(--c-accent)":"var(--c-text-3)"};
  position: relative;
  -webkit-tap-highlight-color: transparent;
  svg { stroke: currentColor; }
`,_e=s.Ay.span`
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
`,Te=s.Ay.span`
  position: absolute;
  top: 4px;
  inset-inline-end: calc(50% - 18px);
  min-width: 14px;
  height: 14px;
  border-radius: var(--r-full);
  background: var(--c-accent);
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
`,Se={home:(0,F.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.8",children:[(0,F.jsx)("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,F.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]}),menu:(0,F.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.8",children:[(0,F.jsx)("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),(0,F.jsx)("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),(0,F.jsx)("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),(0,F.jsx)("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]}),search:(0,F.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.8",children:[(0,F.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,F.jsx)("path",{d:"m21 21-4.3-4.3"})]}),cart:(0,F.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.8",children:[(0,F.jsx)("path",{d:"M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18"}),(0,F.jsx)("path",{d:"M16 10a4 4 0 01-8 0"})]}),more:(0,F.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.8",children:[(0,F.jsx)("circle",{cx:"12",cy:"12",r:"1"}),(0,F.jsx)("circle",{cx:"19",cy:"12",r:"1"}),(0,F.jsx)("circle",{cx:"5",cy:"12",r:"1"})]})},Le=["home","menu","search","cart","more"];function Ee(e){let{activeTab:t,onTabChange:o,cartCount:r=0,activeLanguage:i="en"}=e;return(0,F.jsx)($e,{"aria-label":"Navigation",children:Le.map((e=>(0,F.jsxs)(ze,{$active:t===e,onClick:()=>o(e),"aria-label":H(`nav.${e}`,i),children:[Se[e],(0,F.jsx)(_e,{children:H(`nav.${e}`,i)}),"cart"===e&&r>0&&(0,F.jsx)(Te,{children:r})]},e)))})}const Ne=s.Ay.div`
  position: fixed;
  bottom: var(--bnav-h);
  left: 0;
  right: 0;
  z-index: 85;
  height: var(--cart-bar-h);
  padding: 0 var(--sp-4);
  background: var(--c-primary);
  border-radius: var(--r-lg) var(--r-lg) 0 0;
  display: ${e=>e.$show?"flex":"none"};
  align-items: center;
  @media (min-width: 768px) { display: none; }
`,Fe=s.Ay.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  color: var(--c-text-inv);
  cursor: pointer;
  font-family: inherit;
`,Ie=s.Ay.span`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
`,Be=s.Ay.span`
  width: 24px;
  height: 24px;
  border-radius: var(--r-full);
  background: rgba(255,255,255,0.2);
  font-size: var(--text-xs);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`,Pe=s.Ay.span`
  font-size: var(--text-base);
  font-weight: 700;
`,De=s.Ay.span`
  font-size: var(--text-base);
  font-weight: 700;
`;function Me(e){let{cartCount:t,cartTotal:o,currency:r,onViewCart:i,activeLanguage:n}=e;const a=(0,ie.Q)(r);return(0,F.jsx)(Ne,{$show:t>0,children:(0,F.jsxs)(Fe,{onClick:i,children:[(0,F.jsxs)(Ie,{children:[(0,F.jsx)(Be,{children:t}),(0,F.jsx)(Pe,{children:H("cart.view",n)})]}),(0,F.jsxs)(De,{children:[a,null===o||void 0===o?void 0:o.toFixed(2)]})]})})}const Re=s.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--c-surface);
  display: ${e=>e.$show?"flex":"none"};
  flex-direction: column;
`,Ue=s.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  padding: var(--sp-3) var(--sp-4);
  border-bottom: 1px solid var(--c-border);
`,We=s.Ay.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  svg { position: absolute; inset-inline-start: var(--sp-3); color: var(--c-text-3); pointer-events: none; }
`,qe=s.Ay.input`
  width: 100%;
  height: 40px;
  padding: 0 var(--sp-8) 0 var(--sp-10);
  border: 1px solid var(--c-border);
  border-radius: var(--r-full);
  background: var(--c-bg);
  font-size: var(--text-base);
  font-family: inherit;
  &:focus { outline: none; border-color: var(--c-accent); background: var(--c-surface); }
`,Oe=s.Ay.button`
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--c-accent);
  white-space: nowrap;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
`,Ye=s.Ay.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--sp-4);
`,Ve=s.Ay.div`
  display: flex;
  gap: var(--sp-3);
  align-items: center;
  padding: var(--sp-3) 0;
  border-bottom: 1px solid var(--c-border-light);
  cursor: pointer;
  &:last-child { border: none; }
`,He=s.Ay.div`
  width: 48px;
  height: 48px;
  border-radius: var(--r-sm);
  background: var(--c-surface-alt);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`,Ke=s.Ay.div`
  flex: 1;
  min-width: 0;
`,Xe=s.Ay.div`
  font-weight: 600;
  font-size: var(--text-sm);
`,Je=s.Ay.div`
  font-size: var(--text-xs);
  color: var(--c-text-3);
`,Qe=s.Ay.div`
  font-weight: 600;
  font-size: var(--text-sm);
  white-space: nowrap;
`,Ge=s.Ay.div`
  text-align: center;
  padding: var(--sp-12) 0;
  color: var(--c-text-3);
`,Ze=s.Ay.div`
  font-size: 2rem;
  margin-bottom: var(--sp-3);
`;function et(e){let{show:t,onClose:o,categories:i,activeLanguage:n,currency:a,onProductClick:l}=e;const[s,d]=(0,r.useState)(""),c=(0,r.useRef)(null),p=n||"en",h=(0,ie.Q)(a);(0,r.useEffect)((()=>{t&&c.current&&setTimeout((()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.focus()}),100),t||d("")}),[t]);const u=(i||[]).flatMap((e=>(e.products||[]).filter((e=>!e.hide)).map((t=>({...t,categoryName:"ar"===p?e.ar_category:e.en_category}))))),x=s.trim().length>0?u.filter((e=>{const t="ar"===p&&e.ar_name||e.en_name,o="ar"===p&&e.ar_description||e.en_description,r=s.toLowerCase();return(null===t||void 0===t?void 0:t.toLowerCase().includes(r))||(null===o||void 0===o?void 0:o.toLowerCase().includes(r))})):[];return(0,F.jsxs)(Re,{$show:t,children:[(0,F.jsxs)(Ue,{children:[(0,F.jsxs)(We,{children:[(0,F.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,F.jsx)("path",{d:"m21 21-4.3-4.3"})]}),(0,F.jsx)(qe,{ref:c,type:"search",placeholder:H("search.placeholder",p),value:s,onChange:e=>d(e.target.value)})]}),(0,F.jsx)(Oe,{onClick:o,children:H("search.cancel",p)})]}),(0,F.jsx)(Ye,{children:0===s.trim().length?null:0===x.length?(0,F.jsxs)(Ge,{children:[(0,F.jsx)(Ze,{children:"\ud83d\udd0d"}),(0,F.jsx)("div",{style:{fontWeight:600,marginBottom:4},children:H("search.no_results",p)}),(0,F.jsx)("div",{style:{fontSize:"var(--text-sm)"},children:H("search.no_results_sub",p)})]}):x.map((e=>{var t,r;const i="ar"===p&&e.ar_name||e.en_name,n=null!==(t=e.images)&&void 0!==t&&null!==(r=t[0])&&void 0!==r&&r.url?(0,v.V)(e.images[0].url):null,a=parseFloat(e.en_price)||0;return(0,F.jsxs)(Ve,{onClick:()=>{l(e),o()},children:[(0,F.jsx)(He,{children:n?(0,F.jsx)("img",{src:n,alt:""}):(0,F.jsx)("span",{children:"\ud83c\udf7d\ufe0f"})}),(0,F.jsxs)(Ke,{children:[(0,F.jsx)(Xe,{children:i}),(0,F.jsx)(Je,{children:e.categoryName})]}),(0,F.jsxs)(Qe,{children:[h,(0,ne.T)(a)]})]},e.id)}))})]})}const tt=s.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: ${e=>e.$show?"flex":"none"};
  align-items: flex-end;
  justify-content: center;
`,ot=s.Ay.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 480px;
  background: var(--c-surface);
  border-radius: var(--r-xl) var(--r-xl) 0 0;
  padding-bottom: var(--safe-bottom);
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
`,rt=s.Ay.div`
  display: flex;
  justify-content: center;
  padding: var(--sp-3) 0 var(--sp-1);
  span {
    width: 36px;
    height: 4px;
    border-radius: 2px;
    background: var(--c-border);
  }
`,it=s.Ay.div`
  padding: var(--sp-2) var(--sp-4) var(--sp-6);
`,nt=s.Ay.button`
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  width: 100%;
  padding: var(--sp-3) var(--sp-3);
  border-radius: var(--r-md);
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--c-text);
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: background var(--dur-fast);
  text-align: start;
  &:hover { background: var(--c-surface-alt); }
  svg { width: 20px; height: 20px; color: var(--c-text-2); flex-shrink: 0; }
`,at=[{key:"info",icon:(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[(0,F.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,F.jsx)("path",{d:"M12 16v-4M12 8h.01"})]})},{key:"hours",icon:(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[(0,F.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,F.jsx)("polyline",{points:"12 6 12 12 16 14"})]})},{key:"branches",icon:(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[(0,F.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),(0,F.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})},{key:"contact",icon:(0,F.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:(0,F.jsx)("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})})},{key:"about",icon:(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[(0,F.jsx)("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),(0,F.jsx)("circle",{cx:"9",cy:"7",r:"4"}),(0,F.jsx)("path",{d:"M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"})]})},{key:"share",icon:(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[(0,F.jsx)("circle",{cx:"18",cy:"5",r:"3"}),(0,F.jsx)("circle",{cx:"6",cy:"12",r:"3"}),(0,F.jsx)("circle",{cx:"18",cy:"19",r:"3"}),(0,F.jsx)("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),(0,F.jsx)("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})},{key:"feedback",icon:(0,F.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:(0,F.jsx)("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})})}];function lt(e){let{show:t,onClose:o,onAction:r,activeLanguage:i}=e;const n=i||"en";return(0,F.jsxs)(tt,{$show:t,children:[(0,F.jsx)(f,{onClick:o}),(0,F.jsxs)(ot,{children:[(0,F.jsx)(rt,{children:(0,F.jsx)("span",{})}),(0,F.jsx)(it,{children:at.map((e=>(0,F.jsxs)(nt,{onClick:()=>{r(e.key),o()},children:[e.icon,(0,F.jsx)("span",{children:H(`more.${e.key}`,n)})]},e.key)))})]})]})}const st=s.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: ${e=>e.$show?"flex":"none"};
  align-items: flex-end;
  justify-content: center;
`,dt=s.Ay.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 520px;
  max-height: 85vh;
  background: var(--c-surface);
  border-radius: var(--r-xl) var(--r-xl) 0 0;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
`,ct=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--sp-4);
  border-bottom: 1px solid var(--c-border-light);
`,pt=s.Ay.h3`
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 700;
  [dir="rtl"] & { font-family: var(--font-ar); }
`,ht=s.Ay.button`
  width: 32px;
  height: 32px;
  border-radius: var(--r-full);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--c-border);
  background: none;
  cursor: pointer;
  color: var(--c-text);
  &:hover { background: var(--c-surface-alt); }
`,ut=s.Ay.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--sp-4);
`,xt=s.Ay.div`
  margin-bottom: var(--sp-5);
  &:last-child { margin-bottom: 0; }
`,mt=s.Ay.h4`
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--c-text-3);
  margin-bottom: var(--sp-3);
`,ft=s.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: var(--sp-2);
  padding: var(--sp-2) 0;
  font-size: var(--text-sm);
  color: var(--c-text-2);
  svg { width: 16px; height: 16px; color: var(--c-text-3); flex-shrink: 0; margin-top: 2px; }
`,gt=s.Ay.div`
  padding: var(--sp-3);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  margin-bottom: var(--sp-2);
`,vt=s.Ay.div`
  font-weight: 600;
  font-size: var(--text-sm);
  margin-bottom: var(--sp-1);
`,bt=s.Ay.div`
  font-size: var(--text-xs);
  color: var(--c-text-3);
`,yt=s.Ay.div`
  padding: var(--sp-3);
  background: var(--c-warning-light);
  border-radius: var(--r-md);
  font-size: var(--text-sm);
  color: var(--c-warning);
  line-height: 1.5;
`;function wt(e){var t;let{show:o,onClose:r,restaurant:i,activeLanguage:n}=e;const a=n||"en";if(!i)return null;const l=i.branches||[],s=i.workingHours||[],d=(null===(t=l[0])||void 0===t?void 0:t.phone_number)||"";return(0,F.jsxs)(st,{$show:o,children:[(0,F.jsx)(f,{onClick:r}),(0,F.jsxs)(dt,{children:[(0,F.jsxs)(ct,{children:[(0,F.jsx)(pt,{children:H("info.title",a)}),(0,F.jsx)(ht,{onClick:r,"aria-label":"Close",children:(0,F.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,F.jsx)("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),(0,F.jsxs)(ut,{children:[s.length>0&&(0,F.jsxs)(xt,{children:[(0,F.jsx)(mt,{children:H("info.hours",a)}),s.map(((e,t)=>{return(0,F.jsxs)(ft,{children:[(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,F.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("div",{style:{fontWeight:500},children:(o=e.days,o?o.split(",").map((e=>e.trim().charAt(0).toUpperCase()+e.trim().slice(1))).join(", "):"")}),(0,F.jsxs)("div",{style:{color:"var(--c-text-3)"},children:[e.start_time," - ",e.end_time]})]})]},t);var o}))]}),d&&(0,F.jsxs)(xt,{children:[(0,F.jsx)(mt,{children:H("info.contact",a)}),(0,F.jsxs)(ft,{children:[(0,F.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,F.jsx)("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),(0,F.jsx)("a",{href:`tel:${d}`,style:{color:"var(--c-accent)"},children:d})]})]}),l.length>0&&(0,F.jsxs)(xt,{children:[(0,F.jsx)(mt,{children:H("info.branches",a)}),l.map((e=>(0,F.jsxs)(gt,{children:[(0,F.jsx)(vt,{children:"ar"===a?e.ar_name||e.en_name||e.name:e.en_name||e.name}),e.address&&(0,F.jsx)(bt,{children:e.address})]},e.id)))]}),(0,F.jsxs)(xt,{children:[(0,F.jsx)(mt,{children:H("info.allergy_title",a)}),(0,F.jsx)(yt,{children:H("info.allergy_text",a)})]})]})]})]})}const jt=s.Ay.section`
  padding: var(--sp-5) 0;
`,Ct=s.Ay.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--sp-4);
`,kt=s.Ay.h2`
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--c-text);
  margin-bottom: var(--sp-3);
  [dir="rtl"] & { font-family: var(--font-ar); }
`,At=s.Ay.div`
  display: flex;
  gap: var(--sp-3);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: var(--sp-2);
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,$t=s.Ay.div`
  flex: 0 0 280px;
  scroll-snap-align: start;
  border-radius: var(--r-lg);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform var(--dur-normal) var(--ease-out);
  &:hover { transform: translateY(-2px); }
`,zt=s.Ay.div`
  height: 140px;
  position: relative;
  overflow: hidden;
  background: var(--c-surface-alt);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%);
  }
`,_t=s.Ay.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--sp-4);
  color: #fff;
  z-index: 1;
`,Tt=s.Ay.div`
  font-family: var(--font-display);
  font-size: var(--text-md);
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
  [dir="rtl"] & { font-family: var(--font-ar); }
`,St=s.Ay.div`
  font-size: var(--text-xs);
  opacity: 0.9;
  margin-top: 2px;
`;function Lt(e){let{sliderImages:t,activeLanguage:o}=e;const r=o||"en";return t&&0!==t.length?(0,F.jsx)(jt,{"aria-label":"Promotions",children:(0,F.jsxs)(Ct,{children:[(0,F.jsx)(kt,{children:H("promos.title",r)}),(0,F.jsx)(At,{children:t.map(((e,t)=>{const o=e.url||e.image_url,i="ar"===r?e.ar_title||e.en_title:e.en_title||"",n="ar"===r?e.ar_subtitle||e.en_subtitle:e.en_subtitle||"";return(0,F.jsxs)($t,{children:[(0,F.jsx)(zt,{children:o&&(0,F.jsx)("img",{src:(0,v.V)(o),alt:i||"",loading:"lazy"})}),(i||n)&&(0,F.jsxs)(_t,{children:[i&&(0,F.jsx)(Tt,{children:i}),n&&(0,F.jsx)(St,{children:n})]})]},e.id||t)}))})]})}):null}var Et=o(71481);const Nt=s.Ay.footer`
  width: 100%;
  padding: 40px 16px 20px;
  margin-top: auto;
  background: ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.footerSectionBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.textColor)||"#1a1a1a"}};
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.footerTextColor)||"#fff"}};
  direction: ${e=>e.$rtl?"rtl":"ltr"};
  @media (min-width: 768px) {
    padding: 48px 24px 24px;
  }
`,Ft=s.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`,It=s.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 40px;
  }
`,Bt=s.Ay.div`
  text-align: start;
`,Pt=s.Ay.span`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: inherit;
  display: inline-block;
`,Dt=s.Ay.img`
  max-width: 140px;
  max-height: 56px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
`,Mt=s.Ay.span`
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
`,Rt=s.Ay.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.7;
  margin: 12px 0 0 0;
  text-align: start;
`,Ut=s.Ay.div`
  text-align: start;
`,Wt=s.Ay.h4`
  font-size: 18px;
  font-weight: 600;
  color: inherit;
  margin: 0 0 16px 0;
  text-align: start;
`,qt=s.Ay.a`
  display: block;
  font-size: 14px;
  opacity: 0.7;
  text-decoration: none;
  margin-bottom: 10px;
  transition: opacity 0.2s ease;
  cursor: pointer;
  border: none;
  background: none;
  font: inherit;
  text-align: start;
  color: inherit;
  padding: 0;
  &:hover {
    opacity: 1;
  }
  &:last-child {
    margin-bottom: 0;
  }
`,Ot=s.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
`,Yt=s.Ay.div`
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  &:last-child {
    border-bottom: none;
  }
`,Vt=s.Ay.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: inherit;
`,Ht=s.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 10px;
  line-height: 1.5;
  a {
    color: inherit;
    text-decoration: none;
  }
  &:last-child {
    margin-bottom: 0;
  }
`,Kt=s.Ay.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`,Xt=s.Ay.p`
  font-size: 14px;
  opacity: 0.7;
  margin: 0 0 8px 0;
  line-height: 1.5;
  text-align: start;
  &:last-child {
    margin-bottom: 0;
  }
`,Jt=s.Ay.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
  flex-wrap: wrap;
`,Qt=s.Ay.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,Gt=s.Ay.div`
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`,Zt=s.Ay.p`
  font-size: 12px;
  opacity: 0.5;
  margin: 0;
`,eo="https://storage.googleapis.com/menugic-images/",to=e=>{const t=(null===e||void 0===e?void 0:e.toLowerCase())||"";return t.includes("facebook")?(0,F.jsx)(Et.iYk,{}):t.includes("instagram")?(0,F.jsx)(Et.ao$,{}):t.includes("tiktok")?(0,F.jsx)(Et.kkU,{}):t.includes("whatsapp")?(0,F.jsx)(Et.EcP,{}):(0,F.jsx)(Et.f35,{})},oo=e=>e?e.replace(/\s/g,""):"";function ro(e){var t;let{restaurant:o,restaurantName:r,activeLanguage:i,onExploreClick:n}=e;const a=(null===o||void 0===o?void 0:o.branches)||[],l=(null===o||void 0===o?void 0:o.socialMedia)||[],s="ar"===i;return(0,F.jsx)(Nt,{$rtl:s,children:(0,F.jsxs)(Ft,{children:[(0,F.jsxs)(It,{children:[(0,F.jsxs)(Bt,{children:[null!==o&&void 0!==o&&o.logoURL?(0,F.jsx)(Dt,{src:`${eo}${o.logoURL}`,alt:(null===o||void 0===o?void 0:o.name)||r}):(0,F.jsx)(Pt,{children:((null===o||void 0===o?void 0:o.name)||r||"").length>0?(0,F.jsxs)(F.Fragment,{children:[((null===o||void 0===o?void 0:o.name)||r).slice(0,1),(0,F.jsx)(Mt,{children:((null===o||void 0===o?void 0:o.name)||r).slice(1)})]}):(0,F.jsx)(Mt,{children:r})}),(0,F.jsx)(Rt,{children:s?(null===o||void 0===o?void 0:o.ar_slogan)||(null===o||void 0===o?void 0:o.en_slogan)||"\u0637\u0639\u0627\u0645 \u0630\u0648 \u062c\u0648\u062f\u0629\u060c \u0646\u0648\u0635\u0644\u0647 \u0625\u0644\u064a\u0643.":(null===o||void 0===o?void 0:o.en_slogan)||(null===o||void 0===o?void 0:o.ar_slogan)||"Quality food, delivered."})]}),(0,F.jsxs)(Ut,{children:[(0,F.jsx)(Wt,{children:s?"\u062a\u0633\u0648\u0642":"Shop"}),(0,F.jsx)(qt,{as:"button",type:"button",onClick:()=>null===n||void 0===n?void 0:n(),children:s?"\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a":"All Products"}),(0,F.jsx)(qt,{as:"button",type:"button",onClick:()=>null===n||void 0===n?void 0:n(),children:s?"\u062a\u0635\u0641\u062d \u0627\u0644\u0641\u0626\u0627\u062a":"Browse Categories"})]}),(0,F.jsxs)(Ut,{children:[(0,F.jsx)(Wt,{children:s?a.length>1?"\u0627\u0644\u0641\u0631\u0648\u0639":"\u062a\u0648\u0627\u0635\u0644":a.length>1?"Branches":"Contact"}),a.length>0?(0,F.jsx)(Ot,{children:a.map((e=>(0,F.jsxs)(Yt,{children:[a.length>1&&(0,F.jsx)(Vt,{children:e.name||(s?"\u0641\u0631\u0639":"Branch")}),e.phone_number&&(0,F.jsxs)(Ht,{children:[(0,F.jsx)(Kt,{children:(0,F.jsx)(Et.Cab,{size:14})}),(0,F.jsx)("a",{href:`tel:${oo(e.phone_number)}`,children:e.phone_number})]}),e.whatsapp_number&&(0,F.jsxs)(Ht,{children:[(0,F.jsx)(Kt,{children:(0,F.jsx)(Et.EcP,{size:14})}),(0,F.jsx)("a",{href:`https://wa.me/${oo(e.whatsapp_number)}`,target:"_blank",rel:"noopener noreferrer",children:e.whatsapp_number})]}),(e.location||e.address)&&(0,F.jsxs)(Ht,{children:[(0,F.jsx)(Kt,{children:(0,F.jsx)(Et.vq8,{size:14})}),(0,F.jsx)("span",{children:e.location||e.address})]}),(e.mapLink||e.map_link)&&(0,F.jsxs)(Ht,{children:[(0,F.jsx)(Kt,{children:(0,F.jsx)(Et.vq8,{size:14})}),(0,F.jsx)("a",{href:(e.mapLink||e.map_link||"").startsWith("http")?e.mapLink||e.map_link:`https://${e.mapLink||e.map_link}`,target:"_blank",rel:"noopener noreferrer",children:s?"\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629":"View on map"})]})]},e.id||e.name)))}):(0,F.jsxs)(Ht,{children:[(0,F.jsx)(Kt,{children:(0,F.jsx)(Et.Cab,{size:14})}),(0,F.jsx)("span",{children:s?"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627":"Contact us"})]})]}),(0,F.jsxs)(Ut,{children:[(0,F.jsx)(Wt,{children:s?"\u0623\u0648\u0642\u0627\u062a \u0627\u0644\u0639\u0645\u0644":"Working Hours"}),(null===o||void 0===o||null===(t=o.workingHours)||void 0===t?void 0:t.length)>0?o.workingHours.map(((e,t)=>{const o={monday:"Mon",tuesday:"Tue",wednesday:"Wed",thursday:"Thu",friday:"Fri",saturday:"Sat",sunday:"Sun"},r=e.days?e.days.split(",").map((e=>o[e.trim().toLowerCase()]||e.trim())).join(", "):"",i=String(e.start_time||"").slice(0,5),n=String(e.end_time||"").slice(0,5);return(0,F.jsxs)(Xt,{children:[r,": ",i," \u2013 ",n]},t)})):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Xt,{children:s?"\u0627\u0644\u0625\u062b\u0646\u064a\u0646 \u2013 \u0627\u0644\u062c\u0645\u0639\u0629: 9 \u0635 \u2013 8 \u0645":"Mon \u2013 Fri: 9AM \u2013 8PM"}),(0,F.jsx)(Xt,{children:s?"\u0627\u0644\u0633\u0628\u062a: 9 \u0635 \u2013 6 \u0645":"Saturday: 9AM \u2013 6PM"}),(0,F.jsx)(Xt,{children:s?"\u0627\u0644\u0623\u062d\u062f: 10 \u0635 \u2013 4 \u0645":"Sunday: 10AM \u2013 4PM"})]})]}),(0,F.jsxs)(Ut,{children:[(0,F.jsx)(Wt,{children:s?"\u062a\u0627\u0628\u0639\u0646\u0627":"Follow us"}),l.length>0?(0,F.jsx)(Jt,{children:l.slice(0,6).map(((e,t)=>{const o=e.link||e.url||"",r=o.startsWith("http")?o:`https://${o}`;return(0,F.jsx)(Qt,{href:r,target:"_blank",rel:"noopener noreferrer",children:to(e.platform||e.name)},t)}))}):(0,F.jsx)(Xt,{style:{opacity:.7},children:s?"\u0644\u0627 \u062a\u0648\u062c\u062f \u0631\u0648\u0627\u0628\u0637":"No social links"})]})]}),(0,F.jsx)(Gt,{children:(0,F.jsxs)(Zt,{children:["\xa9 ",(new Date).getFullYear()," Menugic. ",s?"\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.":"All rights reserved."]})})]})})}var io=o(10448),no=o(1901);const ao=s.Ay.div`
position: fixed;
bottom: 0;
left: 0;
right: 0;
min-height: 45vh;
max-height: 95vh;
overflow-y: auto;
background-color: ${e=>e.theme.popupbackgroundColor};
width: 100%;
transition: transform 0.8s ease-in-out;
transform: translateY(${e=>"cart"==e.showPopup?"0%":"100%"});
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 1500;
padding-bottom: 20px;
`,lo=((0,s.Ay)(io.WQq)`
font-size: 20px;
position: fixed;
top: 24px;
right: 24px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}
z-index: 20000;
pointer-events: auto;
background: transparent;
border: none;
padding: 4px;
line-height: 1;
width: 36px;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 18px;

&:hover {
  background: rgba(0, 0, 0, 0.05);
}

`,s.Ay.div`
width: 90%;
display: flex;
flex-direction: column;
`,s.Ay.div`
font-size: 25px;
font-weight:600;
margin-top:40px;
color: ${e=>e.theme.popupTextColor};

`,s.Ay.div`
height: 0.25px;
width: 100%;
background-color: ${e=>e.theme.popupTextColor};
opacity: 0.1;
margin-top:10px;

`,s.Ay.div`
max-height: 35vh;
width: 100%;
overflow: scroll;
margin-top: 20px;

`,s.Ay.div`
height: 35vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color:${e=>e.theme.popupTextColor};
font-size: 18px;
`);s.Ay.div`
width: 100%;
display: flex;
flex-direction: row;
height: 11vh;
margin-top: 1vh;
position: relative;

`,s.Ay.div`
flex: 1;
display: flex;
justify-content: center;
`,s.Ay.img`
width: 70%;
height: 100%;
object-fit: cover;
border-radius: 3px;
`,s.Ay.div`
flex: 1;
display: flex;
flex-direction: column;
gap:2px;
`,s.Ay.div`
flex: 1;
display: flex;
align-items: flex-end;
justify-content: flex-end;


`,s.Ay.div`
width: 50%;
display: flex;
flex-direction: row;
height: 20px;
background-color:${e=>e.theme.mainColor};
color:${e=>e.theme.popupbackgroundColor};
border-radius: 20px;
margin-right: 20px;
margin-bottom: 10px;

`,s.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,s.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,s.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,s.Ay.span`
font-size: 13px;
font-weight: 500;
color:${e=>e.theme.popupTextColor};

`,s.Ay.span`
color:${e=>e.theme.popupTextColor};
font-size: 13px;


`,s.Ay.span`
color:${e=>e.theme.popupTextColor};
font-size: 13px;
margin-top: 30px;


`,s.Ay.button`
outline: none;
border: 0;
cursor: pointer;
color: ${e=>e.theme.backgroundColor};
width: 100%;
margin-top: 10px;
background-color: ${e=>e.theme.mainColor};
border-radius: 20px;
padding-top: 8px;
padding-bottom: 8px;

`,(0,s.Ay)(no.pS_)`
font-size: 15px;
position: absolute;
top: 0px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`;var so=o(11222),co=o(86001),po=o(29334),ho=o(81132),uo=o(70268),xo=o(67059),mo=o(81926),fo=o(3454);const go=s.i7`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,vo=s.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,bo=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 380px;
  overflow-y: auto;
  padding-bottom: 12px;
  flex: 1;
  min-height: 0;
  padding-right: 4px;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
    border-radius: 4px;
  }
`,yo=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  background: ${e=>e.theme.popupbackgroundColor||"#ffffff"};
  border-radius: 14px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  animation: ${go} 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`,wo=s.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`,jo=s.Ay.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Co=s.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`,ko=s.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ao=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`,$o=s.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  white-space: nowrap;
`,zo=s.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}12`};
  padding: 3px 5px;
  border-radius: 20px;
`,_o=s.Ay.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  color: ${e=>e.theme.popupbackgroundColor||"#ffffff"};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  line-height: 1;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.9);
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,To=s.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  min-width: 20px;
  text-align: center;
`,So=s.Ay.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.45;
  transition: opacity 0.2s ease, color 0.2s ease, transform 0.2s ease;

  svg { font-size: 11px; }

  &:hover {
    opacity: 1;
    color: #e53935;
    transform: scale(1.15);
  }
  &:active {
    transform: scale(0.9);
  }
`,Lo=s.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,Eo="\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 2px 8px;\n  line-height: 1.5;\n  white-space: nowrap;\n",No=s.Ay.span`
  ${Eo}
  border: 1px solid ${e=>`${e.theme.popupTextColor||"#1a1a1a"}50`};
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  background: transparent;
`,Fo=s.Ay.span`
  ${Eo}
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}18`};
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}35`};
`,Io=s.Ay.span`
  ${Eo}
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  border: 1px dashed ${e=>`${e.theme.popupTextColor||"#999"}40`};
  opacity: 0.65;
  text-decoration: line-through;
`,Bo=s.Ay.div`
  font-size: 10px;
  font-style: italic;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Po=s.Ay.div`
  font-size: 10px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.75;
  line-height: 1.5;
`,Do=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}10`};
  border-radius: 12px;
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  margin-top: 4px;
`,Mo=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ro=s.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  opacity: 0.75;
`,Uo=s.Ay.div`
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
`,Wo=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.6;
  text-align: center;
`;var qo=o(50074);const Oo=["Size:","\u0627\u0644\u062d\u062c\u0645:"],Yo=["Add ons:","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:"],Vo=["Remove:","\u0628\u062f\u0648\u0646:"];function Ho(e){let{restaurant:t,activeLanguage:o}=e;const r=(0,a.wA)(),{restaurantName:i}=(0,n.g)(),l=window.location.hostname.split(".")[0],s="menugic"!==l&&"localhost"!==l&&"www"!==l&&"api"!==l&&"staging-api"!==l?l:i,d=(0,a.d4)((e=>e.cart[s]||[])),c=d.reduce(((e,t)=>e+t.price*t.quantity),0),p="ar"===o?"ar":"en",h=e=>{const t=(0,qo.qh)(e,p);if(!t.length)return null;const{sizeLabel:o,addonLabels:r,removalLabels:i,legacyLines:n}=function(e){const t={sizeLabel:null,addonLabels:[],removalLabels:[],legacyLines:[]};let o=null;for(const r of e)"heading"===r.type?o=Oo.includes(r.text)?"size":Yo.includes(r.text)?"addons":Vo.includes(r.text)?"removals":"legacy":"size"===o?t.sizeLabel=r.text:"addons"===o?t.addonLabels.push(r.text):"removals"===o?t.removalLabels.push(r.text):t.legacyLines.push(r.text);return t}(t),a=o||r.length||i.length;return(0,F.jsxs)(F.Fragment,{children:[a&&(0,F.jsxs)(Lo,{children:[o&&(0,F.jsx)(No,{children:"ar"===p?`\u0627\u0644\u062d\u062c\u0645: ${o}`:`Size: ${o}`}),r.map((e=>(0,F.jsxs)(Fo,{children:["+ ",e]},e))),i.map((e=>(0,F.jsx)(Io,{children:e},e)))]}),n.map(((e,t)=>(0,F.jsx)(Po,{children:e},t)))]})},u=(0,ie.Q)(null===t||void 0===t?void 0:t.currency);if(0===d.length)return(0,F.jsx)(vo,{children:(0,F.jsx)(Wo,{children:"ar"===p?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"})});const x=e=>{var t;const o=null===(t=e.images)||void 0===t?void 0:t[0];return o&&o.url?(0,v.V)(o.url):""};return(0,F.jsx)(vo,{children:(0,F.jsxs)(bo,{children:[d.map((e=>{const t="ar"===p?e.ar_name:e.en_name,o=(0,ne.T)(e.price*e.quantity,u);return(0,F.jsx)(yo,{children:(0,F.jsxs)(wo,{children:[(0,F.jsx)(jo,{src:x(e),alt:t}),(0,F.jsxs)(Co,{children:[(0,F.jsx)(ko,{title:t,children:t}),h(e),e.instruction&&(0,F.jsxs)(Bo,{children:["\ud83d\udcdd ",e.instruction]})]}),(0,F.jsxs)(Ao,{children:[(0,F.jsx)($o,{children:o}),(0,F.jsxs)(zo,{children:[(0,F.jsx)(_o,{onClick:()=>{return t=e.uniqueId,void((o=e.quantity)>1&&r((0,co.v)(s,t,o-1)));var t,o},disabled:e.quantity<=1,"aria-label":"decrease quantity",children:"\u2212"}),(0,F.jsx)(To,{children:e.quantity}),(0,F.jsx)(_o,{onClick:()=>{return t=e.uniqueId,o=e.quantity,r((0,co.v)(s,t,o+1));var t,o},"aria-label":"increase quantity",children:"+"})]}),(0,F.jsx)(So,{onClick:()=>{return t=e.uniqueId,r((0,co.dt)(s,t));var t},"aria-label":"remove item",children:(0,F.jsx)(Et.qbC,{})})]})]})},e.uniqueId)})),(0,F.jsx)(Do,{children:(0,F.jsxs)(Mo,{children:[(0,F.jsx)(Ro,{children:"ar"===p?"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a":"Total"}),(0,F.jsx)(Uo,{children:(0,ne.T)(c,u)})]})})]})})}var Ko=o(13491),Xo=o(34304),Jo=o.n(Xo);const Qo=s.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`;s.Ay.div`
  padding: 14px 16px;
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border: 2px solid ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  font-size: 16px;
  transition: all 0.2s ease;

`,s.Ay.ul`
  position: absolute;
  top: 135%;
  left: 0;
  width: 100%;
  max-height: ${e=>e.isOpen?"200px":"0px"};
  overflow-y: auto;
  border-radius: 10px;
  border: none;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: all  0.2s ease-in-out ;
  z-index: 16;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
  background-color:${e=>e.theme.categoryUnActive||"#ffffff"}; 

`,s.Ay.li`
  height: 50px;
  cursor: pointer;
  padding-left: 7px;
  padding-right: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s;
  background-color: ${e=>e.branchName==e.selectedBranch?e.theme.categoryUnActive||"#ffffff":e.disable?"rgba(0, 0, 0, 0.08)":"transparent"};
  color: ${e=>e.branchName==e.selectedBranch?e.theme.popupTextColor||"#00112b":e.disable?"#999":e.theme.popupTextColor||"#00112b"};

`,s.Ay.span`

`,s.Ay.span`
  border: solid ${e=>e.theme.popupTextColor||"#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.open?"rotate(-135deg)":"rotate(45deg)"};
  margin-left: 10px;
  transition: transform 0.3s;

`;function Go(e){let{deliveryType:t,branches:o,selectedBranch:r,setSelectedBranch:i,setErrors:n,errors:a}=e;const l=(0,s.DP)(),d=(o||[]).map((e=>({value:e.id,label:e.name,branch:e,isDisabled:!e.has_delivery&&"Delivery"===t}))),c={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==a&&void 0!==a&&a.branch?"#ff4444":l.mainColor||l.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(null!==a&&void 0!==a&&a.branch?"rgba(255, 68, 68, 0.1)":l.mainColor?`${l.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:l.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==a&&void 0!==a&&a.branch?"#ff4444":l.mainColor||l.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:l.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:l.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:l.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:l.categoryUnActive||"#ffffff",border:`1px solid ${l.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:t.isDisabled?"#999":l.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?l.categoryUnActive||"#ffffff":t.isFocused?l.popupbackgroundColor||"#f5f5f5":"transparent",cursor:t.isDisabled?"not-allowed":"pointer",display:"flex",justifyContent:"space-between"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,F.jsx)(Qo,{children:(0,F.jsx)(Ko.Ay,{value:d.find((e=>{var t;return(null===(t=e.branch)||void 0===t?void 0:t.id)===(null===r||void 0===r?void 0:r.id)})),onChange:e=>{e&&!e.isDisabled&&(i(e.branch),n({...a,branch:""}))},options:d,placeholder:"Select Branch",isOptionDisabled:e=>e.isDisabled,styles:c,formatOptionLabel:e=>(0,F.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,F.jsx)("span",{children:e.label}),e.isDisabled&&"Delivery"===t&&(0,F.jsx)("span",{style:{fontSize:12,color:"#999"},children:"No Delivery"})]}),menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})})}var Zo=o(27320);const er=s.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`,tr=(s.Ay.div`
  padding: 14px 16px;
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border: 2px solid ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  font-size: 16px;
  transition: all 0.2s ease;

`,s.Ay.ul`
  position: absolute;
  top: 130%;
  left: 0;
  width: 100%;
  max-height: ${e=>e.isOpen?"220px":"0px"};
  overflow-y: auto;
  border-radius: 10px;
  border: none;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: all  0.2s ease-in-out ;
  z-index: 10;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
  background-color:${e=>e.theme.categoryUnActive||"#ffffff"}; 

`,s.Ay.li`
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  background-color: ${e=>e.regionName==e.selectedRegion?e.theme.categoryUnActive||"#ffffff":"transparent"};
  color: ${e=>(e.regionName,e.selectedRegion,e.theme.popupTextColor||"#00112b")};
  &:hover {
    background-color: ${e=>e.theme.popupbackgroundColor||"#ffffff"};
  }
`,s.Ay.span`
width: 90%;
`,s.Ay.span`
  border: solid ${e=>e.theme.popupTextColor||"#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.open?"rotate(-135deg)":"rotate(45deg)"};
  margin-left: 10px;
  transition: transform 0.3s;

`,s.Ay.div`
height: 70px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(0,0,0,0.2);
`),or=s.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`,rr=s.Ay.input`
width: 100%;
  padding-left: 10px;
  border-radius: 5px;
  height: 60%;
  background-color:${e=>e.theme.popupbackgroundColor}; ;
  color: ${e=>e.theme.mainColor};
  border: 0;
  
  &:focus{
    outline: none;
  }
  &::placeholder{
    color: ${e=>e.theme.mainColor};
    font-size: 13px;

  }
`,ir=(0,s.Ay)(Zo.Xj1)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.mainColor};

`,nr=s.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;s.Ay.div`
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`,s.Ay.div`
  border: 3px solid ${e=>e.theme.popupbackgroundColor};
  border-left-color:${e=>e.theme.popupTextColor};; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${nr} 1s linear infinite; /* Apply animation */
`;var ar=o(89993);function lr(e){var t;let{selectedBranch:o,selectedRegion:i,onRegionChange:n,setErrors:a,errors:l,onRegionsChange:d}=e;const c=(0,s.DP)(),[p,h]=(0,r.useState)(!1),[u,x]=(0,r.useState)(""),{response:m,isLoading:f}=(0,ar.w)({branch_id:o.id,onSuccess:()=>{}});(0,r.useEffect)((()=>{var e;f||d((null===m||void 0===m||null===(e=m.data)||void 0===e?void 0:e.regions)||[])}),[f,m,d]),(0,r.useEffect)((()=>{n("")}),[o,n]);const g=((null===m||void 0===m||null===(t=m.data)||void 0===t?void 0:t.regions)||[]).map((e=>({value:e.region_name,label:e.region_name}))),v=g.filter((e=>e.label.toLowerCase().includes(u.toLowerCase()))),b={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==l&&void 0!==l&&l.region?"#ff4444":c.mainColor||c.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(null!==l&&void 0!==l&&l.region?"rgba(255, 68, 68, 0.1)":c.mainColor?`${c.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:c.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==l&&void 0!==l&&l.region?"#ff4444":c.mainColor||c.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:c.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:c.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:c.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:c.categoryUnActive||"#ffffff",border:`1px solid ${c.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:c.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?c.categoryUnActive||"#ffffff":t.isFocused?c.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return!f&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(er,{children:(0,F.jsx)(Ko.Ay,{value:g.find((e=>e.value===i)),onMenuOpen:()=>h(!0),onMenuClose:()=>h(!1),onChange:e=>{n((null===e||void 0===e?void 0:e.value)||""),x(""),a({...l,region:""})},options:v,placeholder:"Select Region",styles:b,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})}),p&&(0,F.jsx)(tr,{children:(0,F.jsxs)(or,{children:[(0,F.jsx)(rr,{placeholder:"Search",value:u,onChange:e=>{x(e.target.value)}}),(0,F.jsx)(ir,{})]})})]})}const sr=s.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,dr=s.Ay.div`
  width: 100%;
  
  /* Override SelectWrapper width for BranchSelect and RegionSelect */
  > div[class*="SelectWrapper"],
  div[class*="SelectWrapper"] {
    width: 100% !important;
    max-width: 100% !important;
  }
  
  /* Enhance SelectWrapper styling */
  [class*="SelectWrapper"] {
    height: 44px !important;
    margin-top: 0 !important;
  }
  
  /* Enhance SelectedValue styling */
  [class*="SelectedValue"] {
    padding: 12px 14px !important;
    border-radius: 10px !important;
    border: 2px solid ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"} !important;
    background-color: ${e=>e.theme.categoryUnActive||"#ffffff"} !important;
    color: ${e=>e.theme.popupTextColor||"#00112b"} !important;
    font-size: 14px !important;
    transition: all 0.2s ease !important;
    
    &:hover {
      border-color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"} !important;
      box-shadow: 0 0 0 3px ${e=>e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.1)"} !important;
    }
  }
  
  /* Enhance OptionsList styling */
  [class*="OptionsList"] {
    border-radius: 10px !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) !important;
    border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"} !important;
  }
`,cr=s.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,pr=s.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,hr=(s.Ay.select`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid
    ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 12px;
  padding-right: 36px;

  &:focus {
    box-shadow: 0 0 0 3px
      ${e=>e.hasError?"rgba(255, 68, 68, 0.1)":e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.1)"};
    border-color: ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
  }

  &:hover {
    border-color: ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
  }

  option {
    padding: 10px;
    background: ${e=>e.theme.categoryUnActive||"#ffffff"};
    color: ${e=>e.theme.popupTextColor||"#00112b"};
    font-size: 14px;
  }
`,s.Ay.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`);function ur(e){var t,o;let{formData:r,updateFormData:i,restaurant:n,errors:a,setErrors:l}=e;const d=(0,s.DP)();let c={};try{c=JSON.parse((null===n||void 0===n?void 0:n.features)||"{}")}catch(u){c={}}const p=[c.delivery_order&&{value:"Delivery",label:"Delivery"},c.takeaway_order&&{value:"TakeAway",label:"Take Away"},c.dinein_order&&{value:"DineIn",label:"Dine In"}].filter(Boolean),h={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:a.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(a.deliveryType?"rgba(255, 68, 68, 0.1)":d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:a.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?d.categoryUnActive||"#ffffff":t.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,F.jsxs)(sr,{children:[(0,F.jsx)(cr,{children:"Select Order Type"}),(0,F.jsx)(pr,{children:"Choose how you would like to receive your order"}),(0,F.jsxs)(dr,{children:[(0,F.jsx)(Ko.Ay,{value:p.find((e=>e.value===r.deliveryType)),onChange:e=>{var t;i({deliveryType:(null===e||void 0===e?void 0:e.value)||"",selectedBranch:(null===n||void 0===n||null===(t=n.branches)||void 0===t?void 0:t[0])||null,selectedRegion:""}),l({})},options:p,placeholder:"Select Order Type",isSearchable:!1,styles:h,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"}),a.deliveryType&&(0,F.jsx)(hr,{children:a.deliveryType})]}),(null===n||void 0===n||null===(t=n.branches)||void 0===t?void 0:t.length)>1&&!(()=>{var e;return null===n||void 0===n||null===(e=n.branches)||void 0===e?void 0:e.some((e=>e.is_online))})()&&(0,F.jsxs)(dr,{children:[(0,F.jsx)(Go,{deliveryType:r.deliveryType,branches:null===n||void 0===n?void 0:n.branches,selectedBranch:r.selectedBranch,setSelectedBranch:e=>i({selectedBranch:e,selectedRegion:""}),setErrors:l,errors:a}),a.branch&&(0,F.jsx)(hr,{children:a.branch})]}),r.selectedBranch&&"Delivery"===r.deliveryType&&Array.isArray(r.regions)&&r.regions.length>0&&(0,F.jsxs)(dr,{children:[(0,F.jsx)(lr,{selectedRegion:r.selectedRegion,onRegionChange:e=>i({selectedRegion:e}),selectedBranch:1===(null===n||void 0===n||null===(o=n.branches)||void 0===o?void 0:o.length)?null===n||void 0===n?void 0:n.branches[0]:r.selectedBranch,setErrors:l,errors:a,onRegionsChange:e=>i({regions:e})}),a.region&&(0,F.jsx)(hr,{children:a.region})]})]})}var xr=o(16106);const mr=s.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,fr=s.Ay.button`
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid
    ${e=>"current"===e.variant?e.theme.mainColor||e.theme.maincolor||"#007bff":e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  background: ${e=>"current"===e.variant?e.theme.mainColor||e.theme.maincolor||"#007bff":e.theme.categoryUnActive||"#ffffff"};
  color: ${e=>"current"===e.variant?"#ffffff":e.theme.popupTextColor||"#00112b"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  outline: none;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px
      ${e=>"current"===e.variant?"rgba(0, 123, 255, 0.3)":"rgba(0, 0, 0, 0.1)"};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    font-size: 18px;
  }
`,gr=s.Ay.div`
  padding: 16px;
  background: ${e=>e.theme.categoryUnActive||"#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,vr=s.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,br=s.Ay.div`
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  word-break: break-all;
`,yr=s.Ay.a`
  font-size: 14px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-decoration: none;
  font-weight: 600;
  margin-top: 4px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`,wr=s.Ay.div`
  color: #ff4444;
  font-size: 13px;
  margin-top: -8px;
`;function jr(e){let{onLocationSelect:t,selectedLocation:o,hasError:r,googleMapsApiKey:i,activeLanguage:n="en"}=e;const a=(0,s.DP)();return i?(0,F.jsx)(xr.A,{apiKey:i,onLocationConfirm:t,selectedLocation:o,hasError:r,theme:a,activeLanguage:n}):(0,F.jsx)(Cr,{onLocationSelect:t,selectedLocation:o,hasError:r})}function Cr(e){let{onLocationSelect:t,selectedLocation:o,hasError:i}=e;const[n,a]=(0,r.useState)(!1),[l,s]=(0,r.useState)("");return(0,F.jsxs)(mr,{children:[(0,F.jsxs)(fr,{type:"button",onClick:()=>{navigator.geolocation?(a(!0),s(""),navigator.geolocation.getCurrentPosition((e=>{const{latitude:o,longitude:r}=e.coords,i={latitude:o,longitude:r,address:`${o.toFixed(6)}, ${r.toFixed(6)}`};t(i),a(!1)}),(()=>{s("Unable to retrieve your location. Please try again."),a(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):s("Geolocation is not supported by your browser")},disabled:n,variant:"current",children:[(0,F.jsx)(Et.hO$,{}),n?"Getting Location...":"Use Current Location"]}),(0,F.jsxs)(fr,{type:"button",onClick:()=>{if(o){const e=`https://www.google.com/maps?q=${o.latitude},${o.longitude}`;window.open(e,"_blank")}else{const e="https://www.google.com/maps/search/?api=1";window.open(e,"_blank")}},variant:"select",children:[(0,F.jsx)(Et.vq8,{}),o?"View on Map":"Select on Map"]}),o&&(0,F.jsxs)(gr,{children:[(0,F.jsx)(vr,{children:"Selected Location:"}),(0,F.jsx)(br,{children:o.address||`${o.latitude}, ${o.longitude}`}),o.latitude&&o.longitude&&(0,F.jsx)(yr,{href:`https://www.google.com/maps?q=${o.latitude},${o.longitude}`,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]}),l&&(0,F.jsx)(wr,{children:l}),i&&!o&&(0,F.jsx)(wr,{children:"Please select a location"})]})}const kr=s.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`,Ar=s.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,$r=s.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,zr=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 0;
  position: relative;
`,_r=s.Ay.label`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Tr=s.Ay.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  border: 2px solid
    ${e=>e.hasError?"#ff4444":e.theme.mainColor||"rgba(0, 0, 0, 0.1)"};
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
    box-shadow: 0 0 0 3px
      ${e=>e.hasError?"rgba(255, 68, 68, 0.1)":e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.1)"};
  }

  &::placeholder {
    color: ${e=>e.theme.popupTextColor||"#999"};
    opacity: 0.6;
  }
`,Sr=s.Ay.textarea`
  width: 100%;
  min-width: 100%;
  min-height: 80px;
  height: ${e=>18*(e.rows||3)+24+4+"px"};
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.5;
  border: 2px solid
    ${e=>e.hasError?"#ff4444":e.theme.mainColor||"rgba(0, 0, 0, 0.1)"};
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  transition: all 0.2s ease;
  outline: none;
  resize: vertical;
  font-family: inherit;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: auto;

  &:focus {
    border-color: ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
    box-shadow: 0 0 0 3px
      ${e=>e.hasError?"rgba(255, 68, 68, 0.1)":e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.1)"};
  }

  &::placeholder {
    color: ${e=>e.theme.popupTextColor||"#999"};
    opacity: 0.6;
  }

  /* Ensure visibility on Android/Samsung devices */
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    -webkit-appearance: textarea;
    display: block !important;
  }
`,Lr=s.Ay.span`
  color: #ff4444;
  font-size: 12px;
  display: block;
`,Er=s.Ay.p`
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.85;
`;function Nr(e){let{formData:t,updateFormData:o,errors:i,restaurantName:n,restaurant:a,activeLanguage:l="en"}=e;const d=(0,s.DP)(),[c,p]=(0,r.useState)([]),[h,u]=(0,r.useState)(!1),x=(0,r.useRef)(!1),m=(e,t)=>"ar"===l?t:e,f=(0,r.useMemo)((()=>{try{return null!==a&&void 0!==a&&a.features?JSON.parse(a.features):{}}catch{return{}}}),[null===a||void 0===a?void 0:a.features]).google_maps_integrated&&(null===a||void 0===a?void 0:a.google_maps_api_key)||null,g=(0,r.useMemo)((()=>({control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:d.mainColor||d.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?d.categoryUnActive||"#ffffff":t.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})})),[d]),v=(0,r.useMemo)((()=>[{value:"__manual__",label:0===c.length?m("No saved addresses \u2014 type below","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u2014 \u0627\u0643\u062a\u0628 \u0623\u062f\u0646\u0627\u0647"):m("Type address manually","\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u062f\u0648\u064a\u0627\u064b")},...c.map((e=>({value:String(e.id),label:`${e.label||m("Address","\u0639\u0646\u0648\u0627\u0646")}${e.is_default?` (${m("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")})`:""} \u2014 ${e.full_address.length>56?`${e.full_address.slice(0,56)}\u2026`:e.full_address}`})))]),[c,l]),b=(0,r.useMemo)((()=>{if(null==t.selectedAddressId)return v[0]||null;const e=String(t.selectedAddressId);return v.find((t=>t.value===e))||v[0]||null}),[v,t.selectedAddressId]);(0,r.useEffect)((()=>{if("Delivery"!==t.deliveryType||!n)return void p([]);const e=(0,uo.wU)(n);if(!e)return void p([]);let o=!1;return u(!0),so.A.get(ho.Qf,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:t}=e;o||p(t.addresses||[])})).catch((()=>{o||p([])})).finally((()=>{o||u(!1)})),()=>{o=!0}}),[t.deliveryType,n]),(0,r.useEffect)((()=>{"Delivery"!==t.deliveryType&&(x.current=!1)}),[t.deliveryType]),(0,r.useEffect)((()=>{if("Delivery"!==t.deliveryType)return;if(!c.length||x.current)return;const e=c.find((e=>e.is_default));e&&!String(t.fullAddress||"").trim()&&(x.current=!0,o({selectedAddressId:e.id,fullAddress:e.full_address}))}),[c,t.deliveryType,t.fullAddress,o]);const y=e=>{const{name:t,value:r}=e.target;o("fullAddress"!==t?{[t]:r}:{[t]:r,selectedAddressId:null})};return(0,F.jsxs)(kr,{children:[(0,F.jsx)(Ar,{children:m("Your Information","\u0628\u064a\u0627\u0646\u0627\u062a\u0643")}),(0,F.jsx)($r,{children:m("Please provide your contact details to complete the order","\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628")}),(0,F.jsxs)(zr,{children:[(0,F.jsx)(_r,{children:m("Full Name *","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,F.jsx)(Tr,{type:"text",name:"fullName",value:t.fullName,onChange:y,placeholder:m("Enter your full name","\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644"),hasError:!!i.fullName}),i.fullName&&(0,F.jsx)(Lr,{children:i.fullName})]}),(0,F.jsxs)(zr,{children:[(0,F.jsx)(_r,{children:m("Phone Number *","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 *")}),(0,F.jsx)(Tr,{type:"tel",name:"phoneNumber",value:t.phoneNumber,onChange:y,placeholder:m("Enter your phone number","\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643"),hasError:!!i.phoneNumber}),i.phoneNumber&&(0,F.jsx)(Lr,{children:i.phoneNumber})]}),"Delivery"===t.deliveryType&&(0,F.jsxs)(F.Fragment,{children:[(0,uo.wU)(n)&&(0,F.jsxs)(zr,{children:[(0,F.jsxs)(_r,{children:[m("Saved address","\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0641\u0648\u0638"),h?` (${m("loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")})`:""]}),(0,F.jsx)(dr,{children:(0,F.jsx)(Ko.Ay,{value:b,onChange:e=>{if(!e||"__manual__"===e.value)return void o({selectedAddressId:null});const t=parseInt(e.value,10),r=c.find((e=>e.id===t));r&&o({selectedAddressId:t,fullAddress:r.full_address})},options:v,isSearchable:!1,isDisabled:h,styles:g,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed",isRtl:"ar"===l})}),(0,F.jsx)(Er,{children:m("Add or edit addresses from the account menu (person icon) \u2192 Addresses.","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062d\u0633\u0627\u0628 (\u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0634\u062e\u0635) \u2190 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646.")})]}),f&&(0,F.jsxs)(zr,{children:[(0,F.jsx)(_r,{children:m("Delivery Location *","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 *")}),(0,F.jsx)(jr,{onLocationSelect:e=>{o({selectedLocation:e,fullAddress:e.address||`${e.latitude}, ${e.longitude}`})},selectedLocation:t.selectedLocation,hasError:!!i.fullAddress&&!t.selectedLocation,googleMapsApiKey:f,activeLanguage:l})]}),(0,F.jsxs)(zr,{children:[(0,F.jsx)(_r,{children:m("Full Address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,F.jsx)(Sr,{name:"fullAddress",value:t.fullAddress,onChange:y,placeholder:m("Enter your delivery address","\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),hasError:!!i.fullAddress,rows:"3"}),i.fullAddress&&(0,F.jsx)(Lr,{children:i.fullAddress})]})]}),"DineIn"===t.deliveryType&&(0,F.jsxs)(zr,{children:[(0,F.jsx)(_r,{children:m("Table Number *","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 *")}),(0,F.jsx)(Tr,{type:"number",name:"tableNumber",value:t.tableNumber,onChange:y,placeholder:m("Enter table number","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629"),hasError:!!i.tableNumber}),i.tableNumber&&(0,F.jsx)(Lr,{children:i.tableNumber})]}),(0,F.jsxs)(zr,{children:[(0,F.jsx)(_r,{children:m("Special Notes (Optional)","\u0645\u0644\u0627\u062d\u0638\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,F.jsx)(Sr,{name:"note",value:t.note,onChange:y,placeholder:m("Any special instructions or notes\u2026","\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u2026"),rows:"3"})]})]})}const Fr=s.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 440px;
  overflow-y: auto;
  padding-right: 5px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${e=>e.theme.categoryUnActive||"#f5f5f5"};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
    border-radius: 3px;
  }
`,Ir=s.Ay.div`
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,Br=s.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 12px;
`,Pr=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  gap: 12px;
`,Dr=s.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#666"};
  flex: 1;
`,Mr=s.Ay.div`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  text-align: right;
  flex: 1;
  word-break: break-word;
`,Rr=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,Ur=s.Ay.div`
  padding: 8px 0;
`,Wr=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,qr=s.Ay.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`,Or=s.Ay.div`
  height: 1px;
  background: ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  margin: 12px 0;
`,Yr=s.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-align: right;
`;function Vr(e){let{formData:t,restaurant:o,activeLanguage:r}=e;const{restaurantName:i}=(0,n.g)(),l=window.location.hostname.split(".")[0],s="menugic"!==l&&"localhost"!==l&&"www"!==l&&"api"!==l&&"staging-api"!==l?l:i,d=(0,a.d4)((e=>e.cart[s]||[])),c=d.reduce(((e,t)=>e+t.price*t.quantity),0),p=(0,ie.Q)(null===o||void 0===o?void 0:o.currency);return(0,F.jsxs)(Fr,{children:[(0,F.jsx)(Br,{children:"Review Your Order"}),(0,F.jsxs)(Ir,{children:[(0,F.jsx)(Br,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Items"}),(0,F.jsx)(Rr,{children:d.map((e=>{var t,o;return(0,F.jsx)(Ur,{children:(0,F.jsxs)(Wr,{children:[(0,F.jsx)(qr,{src:(0,v.V)(null===(t=e.images)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.url),alt:"en"===r?e.en_name:e.ar_name}),(0,F.jsxs)(Mr,{style:{flex:2},children:[e.quantity,"x"," ",(0,F.jsx)("strong",{children:"en"===r?e.en_name:e.ar_name})]}),(0,F.jsx)(Mr,{children:(0,ne.T)(e.price*e.quantity,p)})]})},e.uniqueId)}))}),(0,F.jsx)(Or,{}),(0,F.jsxs)(Pr,{children:[(0,F.jsx)(Dr,{children:"Total:"}),(0,F.jsx)(Yr,{children:(0,ne.T)(c,p)})]})]}),(0,F.jsxs)(Ir,{children:[(0,F.jsx)(Br,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Details"}),(0,F.jsxs)(Pr,{children:[(0,F.jsx)(Dr,{children:"Order Type:"}),(0,F.jsx)(Mr,{children:t.deliveryType})]}),t.selectedBranch&&(0,F.jsxs)(Pr,{children:[(0,F.jsx)(Dr,{children:"Branch:"}),(0,F.jsx)(Mr,{children:t.selectedBranch.name})]}),t.selectedRegion&&(0,F.jsxs)(Pr,{children:[(0,F.jsx)(Dr,{children:"Region:"}),(0,F.jsx)(Mr,{children:t.selectedRegion})]})]}),(0,F.jsxs)(Ir,{children:[(0,F.jsx)(Br,{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact Information"}),(0,F.jsxs)(Pr,{children:[(0,F.jsx)(Dr,{children:"Name:"}),(0,F.jsx)(Mr,{children:t.fullName})]}),(0,F.jsxs)(Pr,{children:[(0,F.jsx)(Dr,{children:"Phone:"}),(0,F.jsx)(Mr,{children:t.phoneNumber})]}),"Delivery"===t.deliveryType&&t.fullAddress&&(0,F.jsxs)(Pr,{children:[(0,F.jsx)(Dr,{children:"Address:"}),(0,F.jsx)(Mr,{children:t.fullAddress})]}),"DineIn"===t.deliveryType&&t.tableNumber&&(0,F.jsxs)(Pr,{children:[(0,F.jsx)(Dr,{children:"Table Number:"}),(0,F.jsx)(Mr,{children:t.tableNumber})]}),t.note&&(0,F.jsxs)(Pr,{children:[(0,F.jsx)(Dr,{children:"Notes:"}),(0,F.jsx)(Mr,{children:t.note})]})]})]})}const Hr=s.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  min-height: 60vh;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
      margin-bottom: 50px;
`,Kr=s.Ay.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,Xr=s.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`,Jr=(0,s.Ay)(Kr)`
  margin-bottom: 0;
  flex: 1;
`,Qr=s.Ay.button`
  border: none;
  background: transparent;
  color: ${e=>e.theme.mainColor||"#00112b"};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 3px 6px;
  line-height: 1;
  border-radius: 8px;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`,Gr=s.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${e=>e.theme.mainColor||"rgba(0, 0, 0, 0.1)"};
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`,Zr=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  z-index: 1;
  
  span {
    font-size: 11px;
    color: ${e=>e.active?e.theme.mainColor||e.theme.maincolor||"#007bff":"#999"};
    margin-top: 6px;
    font-weight: ${e=>e.active?"600":"400"};
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 9px;
    }
  }
`,ei=s.Ay.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  background: ${e=>e.completed||e.active?e.theme.mainColor||e.theme.maincolor||"#007bff":e.theme.categoryUnActive||"#e0e0e0"};
  color: ${e=>e.completed||e.active?"#ffffff":"#999"};
  border: 2px solid
    ${e=>e.active||e.completed?e.theme.mainColor||e.theme.maincolor||"#007bff":"transparent"};
  transition: all 0.3s ease;
  box-shadow: ${e=>e.active||e.completed?"0 4px 12px rgba(0, 123, 255, 0.3)":"none"};
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
`,ti=s.Ay.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  min-height: 260px;
  overflow-y: auto;
  max-height: calc(85vh - 230px);
  
  @media (max-width: 768px) {
    padding: 12px 0;
    min-height: 220px;
    max-height: calc(85vh - 200px);
  }
`,oi=s.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 16px;
  position: sticky;
  bottom: 0;
  background: ${e=>e.theme.popupbackgroundColor||"#ffffff"};
  z-index: 10;
  
  @media (max-width: 768px) {
    padding-top: 12px;
  }
`,ri=s.Ay.button`
  flex: ${e=>"primary"===e.variant?"1.5":"1"};
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  ${e=>"primary"===e.variant?`\n    background: ${e.theme.mainColor||e.theme.maincolor||"#007bff"};\n    color: white;\n    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);\n    \n    &:hover:not(:disabled) {\n      transform: translateY(-2px);\n      box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);\n    }\n    \n    &:active:not(:disabled) {\n      transform: translateY(0);\n    }\n    \n    &:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n  `:`\n    background: ${e.theme.categoryUnActive||"#f5f5f5"};\n    color: ${e.theme.textColor||"#333"};\n    border: 1px solid ${e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};\n    \n    &:hover {\n      background: ${e.theme.categoryUnActive||"#e0e0e0"};\n      transform: translateY(-1px);\n    }\n    \n    &:active {\n      background: ${e.theme.categoryUnActive||"#f5f5f5"};\n      color: ${e.theme.textColor||"#333"};\n      transform: translateY(0);\n    }\n  `}
  
  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 13px;
  }
`,ii=[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"review",label:"Review",number:4}];function ni(e){var t;let{popupHandler:o,restaurant:i}=e;const{restaurantName:l}=(0,n.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s&&"api"!==s&&"staging-api"!==s?s:l,c=(0,a.d4)((e=>e.cart[d]||[])),p=(0,a.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[d])||void 0===o?void 0:o.activeLanguage)||"en"})),h=(0,a.wA)(),[u,x]=(0,r.useState)(0),[m,f]=(0,r.useState)({deliveryType:"",selectedBranch:(null===i||void 0===i||null===(t=i.branches)||void 0===t?void 0:t[0])||null,selectedRegion:"",regions:[],fullName:"",phoneNumber:"",fullAddress:"",selectedAddressId:null,selectedLocation:null,tableNumber:"",note:""}),[g,v]=(0,r.useState)({}),{handleApiCallAsync:b,isPending:y}=(0,po.h)({onSuccess:()=>{}});(0,r.useEffect)((()=>{(async()=>{const e=(0,uo.wU)(d);if(e)try{const{data:t}=await so.A.get(ho.EY,{headers:{Authorization:`Bearer ${e}`}});f((e=>({...e,fullName:t.full_name||e.fullName,phoneNumber:t.phone_number||e.phoneNumber})))}catch{}})()}),[d]),(0,r.useEffect)((()=>{if(null!==i&&void 0!==i&&i.features){const e=JSON.parse(i.features),t=Object.entries(e).filter((e=>{let[t,o]=e;return!0===o})).map((e=>{let[t]=e;return"delivery_order"===t?"Delivery":"takeaway_order"===t?"TakeAway":"dinein_order"===t?"DineIn":null})).filter(Boolean);1===t.length&&f((e=>({...e,deliveryType:t[0]})))}}),[i]);const w=e=>{f((t=>({...t,...e})));const t=Object.keys(e);v((e=>{const o={...e};return t.forEach((e=>{o[e]&&delete o[e]})),o}))},j=e=>{const t={};if(1===e){var o;if(m.deliveryType||(t.deliveryType="Order Type is required."),!m.selectedBranch&&(null===i||void 0===i||null===(o=i.branches)||void 0===o?void 0:o.length)>1){var r;(null===i||void 0===i||null===(r=i.branches)||void 0===r?void 0:r.some((e=>e.is_online)))||(t.branch="Branch is required.")}"Delivery"===m.deliveryType&&m.selectedBranch&&Array.isArray(m.regions)&&m.regions.length>0&&!m.selectedRegion&&(t.region="Region is required.")}else 2===e&&(m.fullName||(t.fullName="Full Name is required."),m.phoneNumber||(t.phoneNumber="Phone Number is required."),"Delivery"!==m.deliveryType||m.fullAddress||(t.fullAddress="Full Address is required for delivery."),"DineIn"!==m.deliveryType||m.tableNumber||(t.tableNumber="Table Number is required."));return v(t),0===Object.keys(t).length};return(0,F.jsxs)(Hr,{children:[(0,F.jsxs)(Xr,{children:[(0,F.jsx)(Jr,{children:ii[u].label}),(0,F.jsx)(Qr,{onClick:()=>o(null),"aria-label":"Close cart",children:"\u2715"})]}),(0,F.jsx)(Gr,{children:ii.map(((e,t)=>(0,F.jsxs)(Zr,{active:t<=u,children:[(0,F.jsx)(ei,{active:t<=u,completed:t<u,children:t<u?"\u2713":e.number}),(0,F.jsx)("span",{children:e.label})]},e.id)))}),(0,F.jsx)(ti,{children:(()=>{switch(u){case 0:return(0,F.jsx)(Ho,{formData:m,updateFormData:w,restaurant:i,activeLanguage:p});case 1:return(0,F.jsx)(ur,{formData:m,updateFormData:w,restaurant:i,errors:g,setErrors:v});case 2:return(0,F.jsx)(Nr,{formData:m,updateFormData:w,restaurant:i,errors:g,restaurantName:d,activeLanguage:p});case 3:return(0,F.jsx)(Vr,{formData:m,restaurant:i,activeLanguage:p});default:return null}})()}),(0,F.jsxs)(oi,{children:[u>0&&(0,F.jsx)(ri,{onClick:()=>{u>0&&x(u-1)},variant:"secondary",children:"Back"}),u<ii.length-1?(0,F.jsx)(ri,{onClick:()=>{if(j(u)){if(0===u&&null!==i&&void 0!==i&&i.id){var e;const t=(null===(e=m.selectedBranch)||void 0===e?void 0:e.id)||null;(0,mo.trackCheckoutStart)(i.id,t,m.deliveryType||null)}u<ii.length-1&&x(u+1)}},variant:"primary",children:"Next"}):(0,F.jsx)(ri,{onClick:async()=>{var e,t,r,n;if(!j(2))return;const a=(0,ie.Q)(null===i||void 0===i?void 0:i.currency),l=(()=>{try{return JSON.parse(i.features||"{}")}catch{return{}}})(),s=(0,fo.fy)(null===i||void 0===i?void 0:i.whatsapp_template_id,{restaurantName:(null===i||void 0===i?void 0:i.en_slogan)||d,orderType:m.deliveryType,cart:c,currencySymbol:a,activeLanguage:p,customerName:m.fullName,customerPhone:m.phoneNumber,fullAddress:"Delivery"===m.deliveryType?m.fullAddress:null,selectedLocation:m.selectedLocation,tableNumber:"DineIn"===m.deliveryType?m.tableNumber:null,note:m.note,selectedRegion:m.selectedRegion,customWhatsappTemplate:l.custom_whatsapp_template||"",itemFormat:l.whatsapp_item_format||"default"});let u=0;c.forEach((e=>{u+=e.price*e.quantity}));const x=null!==(e=m.selectedBranch)&&void 0!==e&&e.whatsapp_number?(0,xo.JW)(m.selectedBranch.whatsapp_number,null===i||void 0===i?void 0:i.country_code):i.phone_number,f=[...c.map((e=>{var t;return{id:e.id,quantity:e.quantity,branch_id:null===(t=m.selectedBranch)||void 0===t?void 0:t.id,restaurant_id:i.id}}))],g=[...c.map((e=>({product_id:e.id,product_name:"en"===p?e.en_name:e.ar_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];b({products:f,restaurant_id:i.id,branch_id:null===(t=m.selectedBranch)||void 0===t?void 0:t.id,delivery_type:m.deliveryType,customer_name:m.fullName,customer_phone:m.phoneNumber,customer_address:"Delivery"===m.deliveryType?m.fullAddress:null,customer_latitude:(null===(r=m.selectedLocation)||void 0===r?void 0:r.latitude)||null,customer_longitude:(null===(n=m.selectedLocation)||void 0===n?void 0:n.longitude)||null,table_number:"DineIn"===m.deliveryType?m.tableNumber:null,note:m.note,items:g,subtotal:u,total:u,currency:i.currency},d).then((e=>{if(null!==i&&void 0!==i&&i.id){var t,o,r;const n=(null===(t=m.selectedBranch)||void 0===t?void 0:t.id)||null;(0,mo.trackOrderPlaced)(i.id,(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(r=o.order)||void 0===r?void 0:r.id)||null,m.deliveryType,u,n,{items:g,customerName:m.fullName})}})).catch((e=>console.error("Order creation failed:",e))),(0,xo.JT)(x,s),h((0,co.sX)(d)),o(null)},variant:"primary",disabled:y,children:y?"Submitting...":"Submit Order"})]})]})}function ai(e){let{restaurant:t,showPopup:o,popupHandler:i=(()=>{})}=e;const{restaurantName:l}=(0,n.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s&&"api"!==s&&"staging-api"!==s?s:l,c=(0,a.d4)((e=>e.cart[d]||[])),p=(0,a.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[d])||void 0===o?void 0:o.activeLanguage)||"en"})),h=0===c.length;(0,r.useEffect)((()=>{const e=()=>{i(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);return(0,F.jsx)(ao,{showPopup:o,children:h?(0,F.jsx)(lo,{children:"en"===p?"Your cart is empty":"\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0641\u0627\u0631\u063a\u0629"}):(0,F.jsx)(ni,{popupHandler:i,restaurant:t})})}var li=o(76143);const si=s.Ay.div`
position: fixed;
bottom: ${e=>"location"==e.showPopup?"0%":"-100%"};
background-color: ${e=>e.theme.popupbackgroundColor};
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 5;
padding-bottom: 10vh;
`,di=(s.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`,s.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`),ci=s.Ay.span`
width: 90%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 10vh;
`,pi=s.Ay.div`
  margin-top: 30px;
width: 90%;
  display: flex;
  flex-direction: column;
`,hi=(s.Ay.div`
display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
  

`,s.Ay.a`
font-size:16px;
 font-weight: 620;
 color:${e=>e.theme.popupTextColor}

`,s.Ay.a`
font-size:16px;
 font-weight: 620;
 color:${e=>e.theme.popupTextColor};
 text-decoration: none;


`,(0,s.Ay)(d.meu)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}
`,(0,s.Ay)(io.IW4)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,s.Ay)(no.gwi)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,s.Ay)(io.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`),ui=s.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
font-weight: bold;

`,xi=s.Ay.div`
width: 90%;
margin-top: 10px;

`,mi=s.Ay.div`
margin-top: 10px;
display: flex;
flex-direction: row;
width: 90%;
align-items: center;
gap:10px;
`,fi=s.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,gi=(s.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;

`,s.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`),vi=s.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,bi=(0,s.Ay)(Et.ok6)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};
`,yi=((0,s.Ay)(io._8j)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};


`,(0,s.Ay)(Et.ao$)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`),wi=(0,s.Ay)(li.mk3)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`,ji=s.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,Ci=s.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,ki=(0,s.Ay)(no.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`,Ai=s.Ay.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 90%;
height: 50px;
gap:25px;
margin-top: 30px;
`,$i=s.Ay.button`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
background-color:${e=>e.theme.mainColor} ;
width:${e=>"Call"==e.activeButton?"80%":"50%"};
height: 100%;
border:0;
color: ${e=>e.theme.popupbackgroundColor};
border-radius: 10px;
font-size: 18px;
gap:15px;
position: relative;
&:focus{
  outline: none;
}
/* overflow: hidden; */
transition: all 0.2s ease-in-out;
`,zi=s.i7`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,_i=s.Ay.div`
position: absolute;
width:10%;
height: 50%;
background-color:${e=>"Call"==e.activeButton?e.theme.mainColor:e.theme.popupbackgroundColor} ;
 left: 0;
 z-index: 5;

 `,Ti=s.Ay.div`
position: absolute;
width:1px;
height: 100%;
background-color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 right: 0;
 animation: ${zi} 0.5s ease-in-out infinite; /* Infinite animation */

 `,Si=s.i7`
  0% {
opacity: 0;
left: -10%;
  }
  100% {
opacity: 1;
left: 16%;

  }

`,Li=s.Ay.span`
position: absolute;
 left: 16%;
 color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 animation: ${Si} 0.5s ease-in-out;
 z-index: 4;

 `,Ei=s.i7`
  0% {
    opacity: 0;
    rotate: calc(180deg);
  }
  1000% {
    opacity: 1;
    rotate: calc(0deg);

  }
 
`,Ni=(0,s.Ay)(io.pte)`
color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
font-size: 15px;
position: absolute;
right: 5%;
animation: ${Ei} 0.7s ease-in-out;

`,Fi=s.i7`
  0% {
    max-height: 0px;
  }
  1000% {
    max-height: 300px;


  }
 
`,Ii=s.Ay.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  border-radius: 4px;
  /* overflow-y: auto; */
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 300px;
  background-color:${e=>e.theme.mainColor} ;
  color:${e=>e.theme.popupbackgroundColor};
  width: 100%;
  animation: ${Fi} 1s ease-in-out;
  overflow: hidden;

`,Bi=s.Ay.li`
  cursor: pointer;
  transition: background 0.2s;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;

`,Pi=s.Ay.button`
display: flex;
justify-content: center;
flex-direction: row;
gap:15px;
align-items: center;
flex-direction: row;
background-color:transparent ;
width:${e=>"Message"==e.activeButton?"80%":"50%"};
height: 100%;
border:1px solid ${e=>e.theme.mainColor} ;
color: ${e=>e.theme.popupTextColor};
border-radius: 10px;
font-size: 18px;
&:focus{
  outline: none;
};
position: relative;
`,Di=s.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 18px;
font-weight: bold;

`,Mi=s.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`,Ri=s.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
`,Ui=s.Ay.div`
  display: flex;
  flex-direction: row;
  width: 15px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${e=>e.theme.mainColor};
`,Wi=(s.Ay.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${e=>e.theme.mainColor};
`,s.Ay.div`
  width: 5px;
  height: 5px;
  position: absolute;
  border-radius: 50%;
  background-color: ${e=>e.theme.popupbackgroundColor};
`,s.Ay.a`
 font-size:15px;
 font-weight: 300;
 flex: 1;
 color: ${e=>e.theme.popupTextColor};
 display: flex;
 align-items: center;
 margin-left: 20px;
 height: 100%;

 `),qi=s.Ay.div`
 width: 15px;
 height: 45px;
 top: 25px;
 position: absolute;
 left: 0;
 display: flex;
 justify-content: center;
 `,Oi=s.Ay.div`
 width: 2px;
 height: 100%;
 background-color: ${e=>e.theme.popupTextColor};
 opacity: 0.5;
 `;var Yi=o(72599);function Vi(e){var t,o,i,l;let{restaurant:s,showPopup:c,popupHandler:p}=e;const{restaurantName:h}=(0,n.g)(),u=window.location.hostname.split(".")[0],x="menugic"!==u&&"localhost"!==u&&"www"!==u&&"api"!==u&&"staging-api"!==u?u:h,m=(0,a.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x].activeLanguage})),[f,g]=(0,r.useState)("");return(0,r.useEffect)((()=>{const e=()=>{p(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,F.jsxs)(si,{showPopup:c,children:[(0,F.jsx)(hi,{onClick:()=>{p(null)}}),(0,F.jsx)(ci,{children:(0,F.jsx)(di,{children:(v=null===s||void 0===s?void 0:s.name,v.replace(/\b\w/g,(function(e){return e.toUpperCase()})))})}),(0,F.jsxs)(Ai,{children:[(0,F.jsx)($i,{activeButton:f,onClick:()=>{g("Call"==f?"":"Call")},children:"Call"!==f?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Yi._Xz,{size:"25px"}),"en"==m?"Call Now":"\u0627\u062a\u0635\u0644 \u0627\u0644\u0627\u0646"]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ii,{activeButton:f,children:null===s||void 0===s||null===(t=s.branches)||void 0===t?void 0:t.flatMap((e=>e.phone_number.split(" ").map(((t,o)=>(0,F.jsx)(Bi,{children:(0,F.jsxs)("a",{href:`tel:${t}`,style:{textDecoration:"none",color:"inherit"},children:[t,"  ",e.location&&(0,F.jsxs)("span",{children:["- ",e.name," "]})]})})))))}),(0,F.jsx)(_i,{activeButton:f,children:(0,F.jsx)(Ti,{activeButton:f})}),(0,F.jsx)(Li,{activeButton:f,children:"en"==m?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,F.jsx)(Ni,{activeButton:f})]})}),(0,F.jsx)(Pi,{activeButton:f,onClick:()=>{g("Message"==f?"":"Message")},children:"Message"!==f?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Et.EcP,{size:"25px"}),"en"==m?"Message":"\u0631\u0633\u0627\u0644\u0629","            "]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ii,{activeButton:f,children:null===s||void 0===s||null===(o=s.branches)||void 0===o?void 0:o.map((e=>(0,F.jsx)(Bi,{children:(0,F.jsxs)("a",{href:`https://wa.me/${(0,xo.JW)(null===e||void 0===e?void 0:e.whatsapp_number,null===s||void 0===s?void 0:s.country_code)}`,style:{textDecoration:"none",color:"inherit"},children:[null===e||void 0===e?void 0:e.whatsapp_number,"-",null===e||void 0===e?void 0:e.name]})})))}),(0,F.jsx)(_i,{activeButton:f,children:(0,F.jsx)(Ti,{activeButton:f})}),(0,F.jsx)(Li,{activeButton:f,children:"en"==m?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,F.jsx)(Ni,{activeButton:f})]})})]}),(0,F.jsxs)(pi,{children:[(null===s||void 0===s||null===(i=s.branches)||void 0===i?void 0:i.name)&&(0,F.jsx)(Di,{children:"Branches"}),(0,F.jsx)(Mi,{children:null===s||void 0===s||null===(l=s.branches)||void 0===l?void 0:l.map(((e,t)=>{var o;return e.name&&(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(Ri,{children:[t!==(null===s||void 0===s||null===(o=s.branches)||void 0===o?void 0:o.length)-1&&(0,F.jsx)(qi,{index:t,children:(0,F.jsx)(Oi,{})}),(0,F.jsx)(Ui,{children:(0,F.jsx)(d.sIY,{})}),(0,F.jsx)(Wi,{href:`https://${null===e||void 0===e?void 0:e.mapLink}`,children:e.location})]})})}))})]}),(0,F.jsx)(xi,{children:(0,F.jsx)(ui,{children:"en"==m?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"})}),(0,F.jsxs)(mi,{children:[s.socialMedia.find((e=>"Instagram"==e.platform))&&(0,F.jsx)(fi,{href:`https://${s.socialMedia.find((e=>"Instagram"==e.platform)).link}`,children:(0,F.jsx)(yi,{})}),s.socialMedia.find((e=>"Facebook"==e.platform))&&(0,F.jsx)(vi,{href:`https://${s.socialMedia.find((e=>"Facebook"==e.platform)).link}`,children:(0,F.jsx)(bi,{})}),s.socialMedia.find((e=>"Tiktok"==e.platform))&&(0,F.jsx)(gi,{href:`https://${s.socialMedia.find((e=>"Tiktok"==e.platform)).link}`,children:(0,F.jsx)(wi,{})})]}),(0,F.jsxs)(ji,{children:["Copyright",(0,F.jsx)(ki,{})," ",(new Date).getFullYear()," "," ",(0,F.jsx)(Ci,{href:"https://www.menugic.com",children:"menugic.com"})]})]});var v}var Hi=o(41235);const Ki=s.Ay.div`
position: fixed;
bottom: ${e=>"share"==e.showPopup?"0%":"-100%"};
background-color: ${e=>e.theme.popupbackgroundColor};
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 5;
padding-bottom: 10vh;
`,Xi=s.Ay.div`
width: 80%;
display: flex;
flex-direction: column;
padding-top:40px;
`,Ji=s.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,Qi=(s.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,(0,s.Ay)(no.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`),Gi=(0,s.Ay)(io.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`,Zi=s.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor}

`,en=s.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor};
margin-top: 20px;
`,tn=s.Ay.div`
display: flex;
flex-direction: row;
gap:15px;
margin-top: 20px;


`,on=s.Ay.div`
display: flex;
flex-direction: column;
gap:5px;
align-items: center;
justify-content: center;

`,rn=s.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #8bffb83d;
`,nn=(0,s.Ay)(d.EcP)`
font-size: 24px;
color:#51C288;
`,an=s.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background: linear-gradient(45deg, 
    rgba(254, 218, 117, 0.2),  /* Light Yellow */
    rgba(250, 126, 30, 0.2),   /* Orange */
    rgba(214, 41, 118, 0.2),   /* Pink */
    rgba(150, 47, 191, 0.2),   /* Purple */
    rgba(79, 91, 213, 0.2)     /* Blue */
  );

background-size: 300% 300%; /* Creates a smooth animated effect */`,ln=(0,s.Ay)(d.ao$)`
font-size: 24px;
/* color:#51C288; */
color:#5c595b;



`,sn=s.Ay.span`
font-size: 10px;
color:${e=>e.theme.popupTextColor}

`,dn=s.Ay.div`
width: 100%;
margin-top: 20px;
background-color: ${e=>e.theme.mainColor};
display: flex;
align-items: center;
position: relative;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 5px;
border-radius: 5px;

`,cn=s.Ay.div`
width: 85%;
overflow: hidden;

`,pn=s.Ay.span`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
white-space: nowrap;
`,hn=(0,s.Ay)(d.zU_)`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`,un=(0,s.Ay)(Hi.RXm)`
font-size: 18px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`;function xn(e){let{showPopup:t,popupHandler:o,activeCategory:l}=e;const{restaurantName:s}=(0,n.g)(),d=window.location.hostname.split(".")[0],c="menugic"!==d&&"localhost"!==d&&"www"!==d&&"api"!==d&&"staging-api"!==d?d:s;(0,a.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[c].activeLanguage}));(0,r.useEffect)((()=>{const e=()=>{o(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const[p,h]=(0,r.useState)(!1);return(0,F.jsxs)(Ki,{showPopup:t,children:[(0,F.jsx)(Gi,{onClick:()=>{o(null)}}),(0,F.jsxs)(Xi,{children:[(0,F.jsx)(Zi,{children:"Share Category"}),(0,F.jsxs)(tn,{children:[(0,F.jsxs)(on,{children:[(0,F.jsx)(rn,{onClick:()=>(e=>{const t=window.location.origin+window.location.pathname,o=`https://api.whatsapp.com/send?text=${encodeURIComponent(t+"?categoryId="+e)}`;window.open(o,"_blank")})(l),children:(0,F.jsx)(nn,{})}),(0,F.jsx)(sn,{children:"Whatsapp"})]}),(0,F.jsxs)(on,{children:[(0,F.jsx)(an,{onClick:()=>{window.open("https://www.instagram.com/direct/inbox/","_blank")},children:(0,F.jsx)(ln,{})}),(0,F.jsx)(sn,{children:"Instagram"})]})]}),(0,F.jsx)(en,{children:"Get Link"}),(0,F.jsxs)(dn,{children:[(0,F.jsx)(cn,{children:(0,F.jsx)(pn,{children:(e=>{if(e){return window.location.origin+window.location.pathname+"?categoryId="+e}})(l)})}),p?(0,F.jsx)(un,{}):(0,F.jsx)(hn,{onClick:()=>(e=>{const t=window.location.origin+window.location.pathname;navigator.clipboard.writeText(t+"?categoryId="+e),h(!0),setTimeout((()=>{h(!1)}),4e3)})(l)})]})]}),(0,F.jsxs)(Ji,{children:["Copyright",(0,F.jsx)(Qi,{}),"2024 ",(0,F.jsx)(i.N_,{href:"https://www.menugic.com",children:"menugic.com"})]})]})}var mn=o(31088),fn=o(5677),gn=o(38495),vn=o(72929),bn=o(58169);s.Ay.div`

position: fixed;
height: 100vh;
width: 100%;
align-items: center;
justify-content: center;
top:0;
right: ${e=>e.CloseAnimation?0:"-100%"};
color:${e=>e.theme.textColor};
background-color:${e=>e.theme.backgroundColor};
padding-bottom:150px;

  overflow-x: hidden;
  overflow-y: auto;
  transition: all 1s;
  animation: ${(e,t,o)=>s.i7`
 0% { 
    right: -100%;
    
}
 100% { 
    right: 0;

}
`} 1.1s;
  z-index: 6;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1024px) {
    /* animation: ${e=>{let{x:t,y:o,width:r}=e;return((e,t,o)=>s.i7`
 0% { 
    left: ${e}px;
    top:${t}px;
    width:${o}px;
    height:30vh;
    border-radius: 10px;
    
}
 100% { 
    left: 0;
    top:0;
    width:100%;
    height: 100vh;
    border-radius: 0px;

}
`)(t,o,r)}} 0.8s;
    height: ${e=>e.CloseAnimation?"100vh":"30vh"}; */

    }

`;const yn=s.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,wn=(s.i7`
 0% { 
    height:30vh;
    top:0px;
}

 100% { 
    height:70vh;
    top:80px;

    }
`,s.Ay.div`
  width: 100%;
  height: ${e=>e.isNormalCarousel?"auto":e.squareDimension?"55vh":"70vh"};
  min-height: ${e=>e.isNormalCarousel?e.squareDimension?"45vh":"60vh":"unset"};
  margin-top: ${e=>e.isNormalCarousel?"80px":"65px"};
  padding: ${e=>e.isNormalCarousel?"0 5%":"10px 0"};
  transition: all 0.8s;
  display: flex;
  flex-direction: ${e=>e.isNormalCarousel?"column":"row"};
  justify-content: center;
  align-items: center;
  overflow: visible;
  position: relative;
  @media (min-width: 1024px) {
    min-height: ${e=>e.isNormalCarousel?e.squareDimension?"50vh":"65vh":"unset"};
    margin-top: ${e=>e.isNormalCarousel?"90px":"65px"};
  }
`),jn=s.Ay.div`
  width: 85%;
  height: 100%;
  .swiper {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: none !important;
  }
`,Cn=s.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position:relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
`,kn=s.Ay.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  vertical-align: top;

`,An=s.Ay.div`
  height: 100%;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;

`,$n=s.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,zn=s.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${$n} 1s linear infinite; /* Apply animation */
`,_n=s.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,Tn=s.Ay.img`
  height: 100%;
  object-fit: cover;
  border-radius: ${e=>e.$cardSlide?"0":e.CloseAnimation?"40px":"10px"};
  width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"90%":"100%"};
  display: ${e=>e.Loaded?"block":"none"};
  transition: all 0.8s;
  @media (min-width: 1024px) {
    width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"50%":"100%"};
  }
`,Sn=s.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,Ln=((0,s.Ay)(io.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,(0,s.Ay)(io.m6W)`
  font-size: 26px;
  padding: 8px;
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  color: ${e=>e.theme.backgroundColor||"#fff"};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  left: 4%;
  top: 45%;
  z-index: 20;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    left: 27%;
  }
`),En=(0,s.Ay)(io.OQo)`
  font-size: 26px;
  padding: 8px;
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  color: ${e=>e.theme.backgroundColor||"#fff"};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 4%;
  top: 45%;
  z-index: 20;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    right: 27%;
  }
`,Nn=(s.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${Sn} 0.8s ease-in-out;
`,s.Ay.div`
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
`,s.i7`
 0% { 
    margin-top: -50px;
    opacity: 0;
}
50%{
  margin-top: -50px;
    opacity: 0;
}
 100% { 
    margin-top: 0px;
    opacity: 1;

}
`),Fn=(s.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${Nn} 1.8s ease-in-out;
`,s.Ay.div`
  width:90%;
  height: 45vh;
  margin-top: 80px;
  display: flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${yn} 0.8s;
  @media (min-width: 1024px) {
    height: ${e=>e.CloseAnimation?"70vh":"30vh"};
    }
`,s.i7`
 0% { 
  margin-top: -20px;
  opacity: 0;
}
100% { 
  margin-top: 10px;
  opacity: 1;
}
`),In=s.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Bn=s.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${Fn} 1.8s ease-in-out;

`,Pn=s.Ay.div`
  width: 90%;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  padding-bottom: 24px;
  color: ${e=>e.theme.textColor};
  @media (min-width: 1024px) {
        width: 50%;
    }
`,Dn=s.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:center;
  opacity: 1;
  margin-top: 5px;
`,Mn=s.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,Rn=s.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,Un=s.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,Wn=s.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,qn=s.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,On=s.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,Yn=s.Ay.div`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${On} 0.7s ease-in-out;
  background-color: ${e=>e.theme.backgroundColor};
  z-index: 301;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  box-shadow: 0px -3px 5px rgba(180, 180, 180, 0.1);
  padding-bottom: 10px;
  padding-top: 10px;
  opacity: ${e=>e.CloseAnimation?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.CloseAnimation?"auto":"none"};
  @media (min-width: 1024px) {
    width: 50%;
  }
`,Vn=s.Ay.button`
  outline: none;
  border: 0;
  position: relative;
  cursor: pointer;
    width: 90%;
    border-radius: 10px;
    height: 40px;
  color: ${e=>e.theme.popupbuttonText};
  font-weight: 400;
  background-color: ${e=>e.theme.mainColor};
  font-size: 12px;
`,Hn=s.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,Kn=s.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,Xn=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Jn=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Qn=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,Gn=s.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,Zn=(s.Ay.div`
  display: flex;
 align-items: center;
 justify-content: center;
 height: 27px;
 width: 27px;
 border-radius: 50%;
 position: fixed;
  z-index: 8;
  top: 30px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};
  right: 30px;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${Gn} 0.8s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,s.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`),ea=s.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,ta=s.Ay.input`
background-color: transparent;
border: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.8)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.8)`)):o}};
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
&:focus{
  outline: none;
}
&::placeholder{
  color:${e=>e.theme.formColor};
  opacity: 0.5;
}
font-size: 13px;
color:${e=>e.theme.formColor};
width: 100%;
padding: 10px;
border-radius: 10px;

`,oa=s.Ay.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 25;
  background: rgba(0, 0, 0, 0.45);
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  backdrop-filter: blur(4px);
  transition: background 0.2s;
  &:active {
    background: rgba(0, 0, 0, 0.65);
  }
`,ra=s.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
  user-select: none;
  -webkit-user-drag: none;
`,ia=s.Ay.button`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 10000;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 26px;
  cursor: pointer;
  backdrop-filter: blur(4px);
`,na=s.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`;var aa=o(88282);const la=s.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display:flex;
`,sa=s.Ay.div`
display: flex;
flex-direction: row;
`,da=s.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,ca=s.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,pa=s.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,ha=s.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,ua=s.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,xa=s.Ay.span`
position: absolute;
left: 0;

`,ma=s.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,fa=(0,s.Ay)(d.Z0P)`
    animation:1.2s ${ma}  linear infinite ;
    position: absolute;
`;function ga(e){let{carouselIndex:t,images:o,CloseAnimation:r,carouselSwiped:i}=e;return(0,F.jsxs)(la,{CloseAnimation:r,children:[(0,F.jsxs)(sa,{children:[(0,F.jsx)(da,{carouselIndex:t,children:(0,F.jsx)(ca,{})}),o.map((e=>(0,F.jsx)(pa,{children:(0,F.jsx)(ha,{})})))]}),!i&&(0,F.jsxs)(ua,{children:[(0,F.jsx)(xa,{children:"Swipe"}),(0,F.jsx)(fa,{})]})]})}s.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const va=s.Ay.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,ba=(s.Ay.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input[type="checkbox"] {
    margin-right: 8px;
    accent-color: ${e=>e.theme.mainColor}; /* Change this color to your desired checkbox color */
  }
`,s.Ay.select`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  color: ${e=>e.theme.backgroundColor};
  background-color: ${e=>e.theme.mainColor};
  &:active{
    outline: none;
    border: 0px;

  }
  `,s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,s.Ay.label`
  display: flex;
  align-items: center;
  input[type="radio"] {
    margin-right: 8px;
    accent-color:${e=>e.theme.mainColor}; /* Change this color to your desired radio button color */
  }
`,s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(Jo().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`),ya=s.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,wa=s.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,ja=s.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let t=e.theme.formColor;if(Jo().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.3)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.3)`)):t}};
  font-size:10px;

`,Ca=s.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,ka=(s.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};

`,s.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Aa(e){let{component:t,formData:o,handleChange:i,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,r.useState)(o[t.key]||[]);return(0,F.jsxs)(ba,{index:n,children:[(0,F.jsx)(va,{children:t.label}),t.values.map((e=>(0,F.jsxs)(wa,{children:[s.some((t=>t===e.label))?(0,F.jsx)(Ca,{onClick:()=>{(e=>{let o=s.filter((t=>t!==e.label));d(o),i(t.key,o)})(e)},children:(0,F.jsx)(Hi.RXm,{size:"15px"})}):(0,F.jsx)(ja,{onClick:()=>{(e=>{d([...s,e.label]),i(t.key,[...s,e.label])})(e)},children:(0,F.jsx)(Et.OiG,{})}),(0,F.jsx)(ya,{children:e.label})]}))),(c=a,c in l?(0,F.jsx)(ka,{children:"This field is required"}):null)]});var c}const $a=s.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};

  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(Jo().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,za=s.Ay.div`
  padding: 7px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color:transparent;
  color:${e=>e.theme.formColor};
  width: 70%;
  border: 1px solid ${e=>e.theme.formColor};

font-size: 13px;
`,_a=s.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,Ta=s.Ay.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  border-radius: 4px;
  overflow-y: auto;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${e=>e.isOpen?"200px":"0px"};
  transition: 0.2s all ease-in-out;
  background-color:${e=>e.theme.mainColor};
  color:${e=>e.theme.popupbuttonText};
  width: 70%;

`,Sa=s.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,La=s.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,Ea=s.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,Na=s.Ay.div`
  display: flex;
  justify-content: center;
  width: 90%;
  align-items: center;
  border-radius:30px;
  border: 1px solid ${e=>e.theme.mainColor};
  background-color: ${e=>e.selected?e.theme.mainColor:"transparent"};
  font-size: 12px;
  color: ${e=>e.selected?e.theme.popupbackgroundColor:e.theme.formColor};
  height: 40px;
  text-align: center;
  padding: 3px;
  margin-top: 10px;
`,Fa=(s.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  margin-top: 20px;
  font-size: 14px;

`,s.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Ia(e){var t;let{component:o,formData:i,handleChange:n,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;const[c,p]=(0,r.useState)(!1),[h,u]=(0,r.useState)((null===(t=i[o.key])||void 0===t?void 0:t.value)||""),x=(0,r.useRef)(null),m=e=>{u(e.label),p(!1),n(o.key,e)},f=e=>{x.current&&!x.current.contains(e.target)&&p(!1)};return(0,r.useEffect)((()=>(document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f))),[]),(0,F.jsxs)($a,{ref:x,index:l,children:[(0,F.jsx)(va,{children:o.label}),o.data.values.length>8?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(za,{onClick:()=>p((e=>!e)),children:[h||a,(0,F.jsx)(_a,{className:c?"up":"",children:"\u25bc"})]}),(0,F.jsx)(Ta,{isOpen:c,children:o.data.values.map(((e,t)=>(0,F.jsx)(Sa,{className:h===e.label?"selected":"",onClick:()=>m(e),children:e.label},t)))})]}):(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(La,{children:o.data.values.map(((e,t)=>(0,F.jsx)(Ea,{children:(0,F.jsx)(Na,{selected:h===e.label,onClick:()=>m(e),children:e.label})})))})}),(g=s,g in d?(0,F.jsx)(Fa,{children:"This field is required"}):null)]});var g}const Ba=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(Jo().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,Pa=s.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,Da=s.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Ma=s.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,Ra=s.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,Ua=(s.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,s.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Wa(e){let{component:t,formData:o,handleChange:i,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,r.useState)(o[t.key]||"");return(0,F.jsxs)(Ba,{index:n,children:[(0,F.jsx)(va,{children:t.label}),t.values.map((e=>(0,F.jsxs)(Da,{children:[(0,F.jsx)(Ma,{onClick:()=>{(e=>{d(e),i(t.key,e)})(e)},children:(0,F.jsx)(Ra,{selected:s.label==e.label})}),(0,F.jsx)(Pa,{children:e.label})]}))),(c=a,c in l?(0,F.jsx)(Ua,{children:"This field is required"}):null)]});var c}function qa(e){let{formSchema:t,onPriceChange:o,basePrice:i,formData:n,setFormData:a,formErrors:l}=e;(0,r.useEffect)((()=>{d(n)}),[n]);const s=(e,t)=>{a((o=>({...o,[e]:t})))},d=e=>{let r=parseFloat(i)||0,n=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const o=t.values.find((t=>t.label===e)),r=!isNaN(Number(o.value));o&&o.value&&r&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")&&(n-=parseFloat(o.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const o=t.data.values.find((o=>{var r;return o.value===(null===(r=e[t.key])||void 0===r?void 0:r.value)})),i=!isNaN(Number(o.value));o&&i&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?n-=parseFloat(o.value.slice(1)):r=parseFloat(o.value))}else if("radio"===t.type&&t.values){const o=t.values.find((o=>{var r;return o.value===(null===(r=e[t.key])||void 0===r?void 0:r.value)})),i=!isNaN(Number(o.value));o&&i&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?n-=parseFloat(o.value.slice(1)):r=parseFloat(o.value))}}));const a=r+n,l=a%1!==0?a.toFixed(2):a.toFixed(0);o(l)};return(0,F.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return(0,F.jsx)(Aa,{component:e,formData:n,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"select":return(0,F.jsx)(Ia,{component:e,formData:n,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"radio":return(0,F.jsx)(Wa,{component:e,formData:n,handleChange:s,index:t,componentKey:e.key,formErrors:l});default:return null}})(e,t)))})}var Oa=o(59162),Ya=o(5633),Va=o(73556),Ha=o(16104),Ka=o(88620),Xa=o(57526);o(44014),o(70045),o(5084);function Ja(e){var t,o,i;let{productId:l,setSearchParams:s,searchParams:p}=e;const{restaurantName:h}=(0,n.g)(),u=window.location.hostname.split(".")[0],x="menugic"!==u&&"localhost"!==u&&"www"!==u&&"api"!==u&&"staging-api"!==u?u:h,m=(0,a.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]}));let f=null;const{response:g,isLoading:b}=(0,aa.VL)({productId:l,onSuccess:()=>{}}),{response:y}=(0,Ha.$)({productId:l});var w;((0,r.useEffect)((()=>{if(!b&&g){var e;H(parseFloat(null===g||void 0===g?void 0:g.en_price)||0),X(parseFloat(null===g||void 0===g?void 0:g.en_price)||0);const r=parseFloat(null===g||void 0===g||null===(e=g.category)||void 0===e?void 0:e.discount)||0,i=parseFloat(null===g||void 0===g?void 0:g.discount)||0;if(Z(0===r?i:r),null!==m&&void 0!==m&&m.id&&null!==g&&void 0!==g&&g.id){var t,o;const e=(null===m||void 0===m||null===(t=m.branches)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.id)||null;(0,mo.trackItemView)(m.id,g.id,g.category_id,e,{name:g.en_name,price:parseFloat(g.en_price)||0})}}}),[b]),Jo().isEmpty(null===g||void 0===g?void 0:g.form_json))||(f=Jo().isEmpty(JSON.parse(null===g||void 0===g?void 0:g.form_json))?null===g||void 0===g||null===(w=g.category)||void 0===w?void 0:w.form_json:null===g||void 0===g?void 0:g.form_json);const[j,C]=(0,r.useState)({});(0,r.useEffect)((()=>{if(!Jo().isEmpty(f)){var e;const t=JSON.parse(f);if(C(t),2===(null===t||void 0===t?void 0:t.version)&&(null===t||void 0===t||null===(e=t.sizes)||void 0===e?void 0:e.length)>0){const e=parseFloat(null===g||void 0===g?void 0:g.en_price)||0,o=t.sizes.find((t=>"absolute"===t.priceMode&&Number(t.priceModifier)===e));A((()=>({...(0,Va.KE)(),sizeId:o?o.id:t.sizes[0].id})))}}}),[f]);const[k,A]=(0,r.useState)({}),[$,z]=(0,r.useState)({}),_=(0,a.wA)(),[T,S]=(0,r.useState)(1),[L,E]=(0,r.useState)(!1),N=(0,r.useRef)(null),[I,B]=(0,r.useState)(!1),[P,D]=(0,r.useState)(1),[M,R]=(0,r.useState)({x:0,y:0}),[U,W]=(0,r.useState)(!1),q=(0,r.useRef)(null),O=(0,r.useRef)(null),Y=(0,r.useRef)(0),[V,H]=(0,r.useState)(parseFloat(null===g||void 0===g?void 0:g.en_price)||0),[K,X]=(0,r.useState)(parseFloat(null===g||void 0===g?void 0:g.en_price)||0),[J,Q]=(0,r.useState)(""),[G,Z]=(0,r.useState)(0),ee=Boolean(null===g||void 0===g?void 0:g.out_of_stock)||1===Number(null===g||void 0===g?void 0:g.out_of_stock),te=e=>{X(parseFloat(e)||0)},[oe,re]=(0,r.useState)(!0),[ae,le]=(0,r.useState)(0),se=()=>{re(!1),le(0),setTimeout((()=>{const e=new URLSearchParams(p);e.delete("productId"),s(e),document.body.style.overflow="auto"}),800)},[de,ce]=(0,r.useState)(!1),pe=()=>{E(!0),le(ae+1)},he=()=>{E(!0),le(ae-1)},ue=(0,r.useRef)(null),[xe,me]=(0,r.useState)(null),fe=null!==m&&void 0!==m&&m.logoURL?`https://storage.googleapis.com/menugic-images/${m.logoURL}`:null,ge=()=>{D(1),R({x:0,y:0}),B(!0)};(0,r.useEffect)((()=>{const e=()=>{se()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const ve=2===(null===j||void 0===j?void 0:j.version)&&Array.isArray(null===j||void 0===j?void 0:j.sizes);let be=[...null!==(t=null===g||void 0===g?void 0:g.images)&&void 0!==t?t:[]];const ye=be.findIndex((e=>e.id===g.new_cover_id));if(ye>0){const[e]=be.splice(ye,1);be.unshift(e)}const[we,je]=(0,r.useState)({}),Ce=e=>{je((t=>({...t,[e]:!0})))},ke="en"===(null===m||void 0===m?void 0:m.activeLanguage)?null===g||void 0===g?void 0:g.en_description:null===g||void 0===g?void 0:g.ar_description,Ae=(0,ie.Q)(null===m||void 0===m?void 0:m.currency),$e=(null===m||void 0===m?void 0:m.product_details_carousel_style)||"normal";return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(vn.z,{CloseAnimation:oe,onClick:se}),(0,F.jsx)(vn.Z,{CloseAnimation:oe,$premiumMobile:!b,children:!b&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(bn.Tn,{CloseAnimation:oe,children:[(0,F.jsx)(bn.k8,{onClick:se,CloseAnimation:oe,type:"button",children:(0,F.jsx)(bn.Z3,{})}),(0,F.jsx)(bn.N0,{activeLanguage:null===m||void 0===m?void 0:m.activeLanguage,children:"en"==m.activeLanguage?null===g||void 0===g||null===(o=g.category)||void 0===o?void 0:o.en_category:null===g||void 0===g||null===(i=g.category)||void 0===i?void 0:i.ar_category}),(0,F.jsx)(bn.i8,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),ce(!0),setTimeout((()=>{ce(!1)}),4e3)},CloseAnimation:oe,children:de?(0,F.jsx)(Hi.RXm,{}):(0,F.jsx)(d.zU_,{})})]}),(0,F.jsx)(wn,{squareDimension:null===g||void 0===g?void 0:g.square_dimension,CloseAnimation:oe,isNormalCarousel:"normal"===$e,children:1===be.length?(0,F.jsx)(Cn,{carouselIndex:0,children:(0,F.jsx)(kn,{children:(0,F.jsxs)(An,{children:[!we[0]&&(0,F.jsx)(_n,{children:(0,F.jsx)(zn,{})}),(0,F.jsx)(Tn,{src:be[0].url?(0,v.V)(be[0].url):fe||"",onLoad:()=>Ce(0),onError:e=>{fe&&e.target.src!==fe&&(e.target.src=fe)},CloseAnimation:oe,Loaded:we[0],alt:"Image 0"}),(0,F.jsx)(oa,{onClick:ge,children:(0,F.jsx)(no.gff,{})})]})})}):"normal"===$e?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ln,{CloseAnimation:oe,onClick:()=>{E(!0),0!==ae&&he()}}),(0,F.jsx)(En,{CloseAnimation:oe,onClick:()=>{E(!0),be.length>ae+1&&pe()}}),(0,F.jsx)(Cn,{carouselIndex:ae,ref:ue,onTouchStart:e=>{me(e.touches[0].clientX)},onTouchMove:e=>{if(xe){const t=e.touches[0].clientX-xe;t>5?0!==ae&&he():t<-5&&g.images.length>ae+1&&pe(),me(null)}},children:be.map(((e,t)=>(0,F.jsx)(kn,{children:(0,F.jsxs)(An,{children:[!we[t]&&(0,F.jsx)(_n,{children:(0,F.jsx)(zn,{})}),(0,F.jsx)(Tn,{src:we[t]||t===ae?null!==e&&void 0!==e&&e.url?(0,v.V)(e.url):fe||"":"",onLoad:()=>Ce(t),onError:e=>{fe&&e.target.src!==fe&&(e.target.src=fe)},CloseAnimation:oe,Loaded:we[t],alt:`Image ${t}`}),ae===t&&(0,F.jsx)(oa,{onClick:ge,children:(0,F.jsx)(no.gff,{})})]})},e.id||t)))})]}):"effect-cards"===$e?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ln,{CloseAnimation:oe,onClick:()=>N.current&&N.current.slidePrev()}),(0,F.jsx)(jn,{children:(0,F.jsx)(Ka.RC,{modules:[Xa.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{N.current=e},onSlideChange:e=>{le(e.realIndex),E(!0)},children:be.map(((e,t)=>(0,F.jsx)(Ka.qr,{children:(0,F.jsxs)(An,{children:[!we[t]&&(0,F.jsx)(_n,{children:(0,F.jsx)(zn,{})}),(0,F.jsx)(Tn,{src:we[t]||t===ae?null!==e&&void 0!==e&&e.url?(0,v.V)(e.url):fe||"":"",onLoad:()=>Ce(t),onError:e=>{fe&&e.target.src!==fe&&(e.target.src=fe)},CloseAnimation:oe,Loaded:we[t],$cardSlide:!0,alt:`Image ${t}`}),ae===t&&(0,F.jsx)(oa,{onClick:ge,children:(0,F.jsx)(no.gff,{})})]})},e.id||t)))},null===g||void 0===g?void 0:g.id)}),(0,F.jsx)(En,{CloseAnimation:oe,onClick:()=>N.current&&N.current.slideNext()})]}):(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(jn,{children:(0,F.jsx)(Ka.RC,{onSwiper:e=>{N.current=e},onSlideChange:e=>{le(e.realIndex),E(!0)},modules:[Xa.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:be.map(((e,t)=>(0,F.jsx)(Ka.qr,{children:(0,F.jsxs)(An,{children:[!we[t]&&(0,F.jsx)(_n,{children:(0,F.jsx)(zn,{})}),(0,F.jsx)(Tn,{src:we[t]||t===ae?null!==e&&void 0!==e&&e.url?(0,v.V)(e.url):fe||"":"",onLoad:()=>Ce(t),onError:e=>{fe&&e.target.src!==fe&&(e.target.src=fe)},CloseAnimation:oe,Loaded:we[t],$cardSlide:!0,alt:`Image ${t}`}),ae===t&&(0,F.jsx)(oa,{onClick:ge,children:(0,F.jsx)(no.gff,{})})]})},e.id||t)))},null===g||void 0===g?void 0:g.id)})})}),1!==be.length&&"normal"!==$e&&(0,F.jsx)(ga,{images:be,carouselIndex:ae,CloseAnimation:oe,carouselSwiped:L}),(0,F.jsx)(In,{children:(0,F.jsx)(Bn,{children:(0,F.jsxs)(Pn,{CloseAnimation:oe,activeLanguage:m.activeLanguage,children:[(0,F.jsx)(Dn,{activeLanguage:m.activeLanguage,children:"en"==m.activeLanguage?null===g||void 0===g?void 0:g.en_name:null===g||void 0===g?void 0:g.ar_name}),!Jo().isEmpty(null===g||void 0===g?void 0:g.en_price)&&(0,F.jsxs)(Un,{children:[(0,F.jsx)(Wn,{activeLanguage:m.activeLanguage,discounted:0!=G,children:(0,ne.T)(K,Ae)}),0!=G&&(0,F.jsx)(qn,{activeLanguage:m.activeLanguage,children:(0,ne.T)(K*(1-parseFloat(G)/100),Ae)})]}),(0,F.jsx)(Mn,{activeLanguage:m.activeLanguage,dangerouslySetInnerHTML:{__html:ke}}),ee&&(0,F.jsx)(Rn,{children:"en"===m.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),(0,F.jsx)(Ya.A,{macros:null===g||void 0===g?void 0:g.macros,activeLanguage:null===m||void 0===m?void 0:m.activeLanguage}),ve&&(0,F.jsx)(Oa.A,{options:j,formData:k,setFormData:A,formErrors:$,activeLanguage:m.activeLanguage,basePrice:null===g||void 0===g?void 0:g.en_price,onPriceChange:te}),!ve&&(null===j||void 0===j?void 0:j.components)&&(0,F.jsx)(qa,{formSchema:j,onPriceChange:te,formData:k,setFormData:A,basePrice:null===g||void 0===g?void 0:g.en_price,formErrors:$}),(0,F.jsxs)(Zn,{activeLanguage:m.activeLanguage,children:[(0,F.jsx)(ea,{children:"en"==m.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,F.jsx)(ta,{activeLanguage:m.activeLanguage,onChange:e=>Q(e.target.value),placeholder:"en"==m.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),!ee&&(0,F.jsxs)(Yn,{CloseAnimation:oe,children:[(0,F.jsxs)(Kn,{CloseAnimation:oe,children:[(0,F.jsx)(Xn,{onClick:()=>{S(T+1)},children:"+"}),(0,F.jsx)(Qn,{children:T}),(0,F.jsx)(Jn,{onClick:()=>{T>1&&S(T-1)},children:"-"})]}),(0,F.jsxs)(Vn,{onClick:()=>{if(ve){var e;const t={};if((null===(e=j.sizes)||void 0===e?void 0:e.length)>0&&(null===k||void 0===k||!k.sizeId)&&(t.size="Please select a size."),Object.keys(t).length>0)return void z(t)}else if("{}"!==JSON.stringify(j)){const e=function(e,t){const o={},r=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return r.forEach((e=>{var r;e in t&&0!==(null===(r=t[e])||void 0===r?void 0:r.length)&&"{}"!==JSON.stringify(t[e])||(o[e]="This field is required.")})),o}(j,k);if(Object.keys(e).length>0)return void z(e)}let t=K*(1-parseFloat(G)/100);if(setTimeout((()=>{const e=new URLSearchParams(p);e.delete("productId"),s(e),document.body.style.overflow="auto"}),800),null!==m&&void 0!==m&&m.id&&null!==g&&void 0!==g&&g.id){var o,r;const e=(null===m||void 0===m||null===(o=m.branches)||void 0===o||null===(r=o[0])||void 0===r?void 0:r.id)||null;(0,mo.trackAddToCart)(m.id,g.id,g.category_id,T,e,{name:g.en_name,price:t})}_((0,co.bE)(x,g,T,k,t,J)),re(!1),S(1)},children:["en"==m.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",K>0&&(0,F.jsx)(Hn,{children:(0,ne.T)(T*(K*(1-G/100)),Ae)})]})]})]})}),I&&(0,F.jsxs)(ra,{onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY;O.current=Math.hypot(t,o)}else if(1===e.touches.length){const t=Date.now();t-Y.current<300&&(D((e=>e>1?1:2.5)),R({x:0,y:0})),Y.current=t,q.current={x:e.touches[0].clientX,y:e.touches[0].clientY},W(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY,r=Math.hypot(t,o);if(O.current){const e=r/O.current;D((t=>Math.min(Math.max(t*e,1),5)))}O.current=r}else if(1===e.touches.length&&U&&P>1){const t=e.touches[0].clientX-q.current.x,o=e.touches[0].clientY-q.current.y;R((e=>({x:e.x+t,y:e.y+o}))),q.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{O.current=null,W(!1)},children:[(0,F.jsx)(ia,{onClick:()=>B(!1),children:(0,F.jsx)(c.$8F,{})}),(0,F.jsx)(na,{src:(()=>{const e=be[ae];return e?e.url?(0,v.V)(e.url):fe||"":""})(),style:{transform:`scale(${P}) translate(${M.x/P}px, ${M.y/P}px)`},alt:"Zoom"})]})]})}const Qa=s.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,Ga=s.Ay.div`
  position: fixed;
  top: ${e=>e.showInstallPopup?"20px":"-100%"};
  left: 50%;
  transform: translateX(-50%);
  background: ${e=>e.theme.popupbackgroundColor};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2000;
  animation: ${Qa} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,Za=s.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,el=s.Ay.div`
  display: flex;
  gap: 10px;
`,tl=s.Ay.button`
  background:${e=>e.theme.mainColor};;
  color: ${e=>e.theme.popupbackgroundColor};
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  &:focus{
    outline: none;
  }
`,ol=s.Ay.button`
  background:${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbackgroundColor};
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  &:focus{
    outline: none;
  }

`,rl=e=>{let{onInstall:t,onDismiss:o,restaurantName:r,showInstallPopup:i}=e;return(0,F.jsxs)(Ga,{showInstallPopup:i,children:[(0,F.jsxs)(Za,{children:["Access ",(0,F.jsx)("b",{children:r})," anytime with one tap ",(0,F.jsx)("b",{children:"Install The App!"})]}),(0,F.jsxs)(el,{children:[(0,F.jsx)(tl,{onClick:t,children:"Install"}),(0,F.jsx)(ol,{onClick:o,children:"Dismiss"})]})]})};var il=o(17123);const nl=s.Ay.section`
  padding: var(--sp-5) 0 var(--sp-4);
`,al=s.Ay.div`
  display: flex;
  gap: var(--sp-4);
  align-items: flex-start;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--sp-4);
`,ll=s.Ay.div`
  width: 64px;
  height: 64px;
  border-radius: var(--r-md);
  background: var(--c-accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--c-accent);
  flex-shrink: 0;
  overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`,sl=s.Ay.div`
  flex: 1;
  min-width: 0;
`,dl=s.Ay.h1`
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--sp-1);
  [dir="rtl"] & { font-family: var(--font-ar); }
`,cl=s.Ay.p`
  font-size: var(--text-sm);
  color: var(--c-text-2);
  margin-bottom: var(--sp-3);
`,pl=s.Ay.section`
  margin-bottom: var(--sp-8);
`,hl=s.Ay.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--sp-4);
`,ul=s.Ay.span`
  font-size: var(--text-xs);
  color: var(--c-text-3);
`,xl=s.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--sp-3);
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,ml=s.Ay.div`
  height: calc(var(--bnav-h) + var(--cart-bar-h) + var(--sp-4));
  @media (min-width: 768px) { height: var(--sp-8); }
`;function fl(){var e,t;const o=(0,a.wA)(),[s,d]=(0,i.ok)(),c=s.get("productId"),{restaurantName:h}=(0,n.g)(),f=window.location.hostname.split(".")[0],b="menugic"!==f&&"localhost"!==f&&"www"!==f&&"api"!==f&&"staging-api"!==f?f:h,y=(0,a.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[b]})),w=(0,a.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[b])||void 0===o?void 0:o.activeLanguage)||"en"})),j=(0,a.d4)((e=>e.cart[b]||[])),C=j.reduce(((e,t)=>e+t.quantity),0),k=j.reduce(((e,t)=>e+t.price*t.quantity),0),[A,$]=(0,r.useState)(""),[z,_]=(0,r.useState)(!1),[T,S]=(0,r.useState)(null),[L,E]=(0,r.useState)(!1),[N,B]=(0,r.useState)(!1),[P,D]=(0,r.useState)(null),[M,U]=(0,r.useState)("all"),[W,q]=(0,r.useState)("recommended"),[O,V]=(0,r.useState)("home"),[K,X]=(0,r.useState)(null),[J,Q]=(0,r.useState)(!0),G=(0,r.useRef)({});(0,r.useEffect)((()=>(document.documentElement.setAttribute("dir","ar"===w?"rtl":"ltr"),()=>document.documentElement.removeAttribute("dir"))),[w]),(0,r.useEffect)((()=>{if(null!==y&&void 0!==y&&y.id){var e,t;const o=(null===y||void 0===y||null===(e=y.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,mo.trackVisit)(y.id,o),(0,mo.trackPageView)(y.id,o)}}),[null===y||void 0===y?void 0:y.id]),(0,r.useEffect)((()=>{const e=e=>{e.preventDefault(),X(e),Q(!0)};return window.addEventListener("beforeinstallprompt",e),()=>window.removeEventListener("beforeinstallprompt",e)}),[]);let Z={};try{Z=JSON.parse((null===y||void 0===y?void 0:y.features)||"{}")}catch{Z={}}const ee=(0,r.useMemo)((()=>[...(null===y||void 0===y?void 0:y.categories)||[]].sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0)))),[null===y||void 0===y?void 0:y.categories]);(0,r.useEffect)((()=>{!P&&ee.length>0&&D(ee[0].id)}),[ee,P]);(0,r.useMemo)((()=>ee.flatMap((e=>(e.products||[]).filter((e=>!e.hide)).map((t=>({...t,_categoryId:e.id})))))),[ee]);const te=(0,r.useMemo)((()=>ee.map((e=>{let t=(e.products||[]).filter((e=>!e.hide));if("best_seller"===M?t=t.filter((e=>e.is_best_seller)):"new"===M?t=t.filter((e=>e.new)):"offers"===M?t=t.filter((e=>e.discount&&e.discount>0)):"popular"===M&&(t=t.filter((e=>e.featured))),A.trim()){const e=A.toLowerCase();t=t.filter((t=>{const o="ar"===w&&t.ar_name||t.en_name;return null===o||void 0===o?void 0:o.toLowerCase().includes(e)}))}return"popular"===W?t=[...t].sort(((e,t)=>(t.is_best_seller?1:0)-(e.is_best_seller?1:0))):"price_low"===W?t=[...t].sort(((e,t)=>(parseFloat(e.en_price)||0)-(parseFloat(t.en_price)||0))):"price_high"===W?t=[...t].sort(((e,t)=>(parseFloat(t.en_price)||0)-(parseFloat(e.en_price)||0))):"newest"===W&&(t=[...t].sort(((e,t)=>(t.id||0)-(e.id||0)))),{...e,filteredProducts:t}})).filter((e=>e.filteredProducts.length>0))),[ee,M,W,A,w]);(0,r.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&D(e.target.dataset.categoryId)}))}),{rootMargin:"-100px 0px -60% 0px",threshold:0});return Object.values(G.current).forEach((t=>{t&&e.observe(t)})),()=>e.disconnect()}),[te]);const oe=e=>{document.body.style.overflow=null==e?"auto":"hidden",S(e)};(0,r.useEffect)((()=>{const e=s.get("popup");if("feedback"===e||"contactForm"===e){oe(e);const t=new URLSearchParams(s);t.delete("popup"),d(t,{replace:!0})}}),[]);const ie=e=>{D(e);const t=G.current[e];if(t){const e=116,o=t.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:o,behavior:"smooth"})}},ne=e=>{const t=new URLSearchParams(s);t.set("productId",e.id),d(t)},ae=(e,t)=>{o((0,co.bE)(b,e,1,{},parseFloat(e.en_price)||0,"","both")),(0,mo.trackAddToCart)(null===y||void 0===y?void 0:y.id,e.id,1),l.oR.success("ar"===w?"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629!":"Added to cart!",{position:"bottom-center",autoClose:1500})};let le={};try{le="string"===typeof(null===y||void 0===y?void 0:y.theme)?JSON.parse(y.theme):(null===y||void 0===y?void 0:y.theme)||{}}catch{le={}}const se=(null===y||void 0===y?void 0:y.sliderImages)||[],de=(!0===(null===y||void 0===y?void 0:y.show_slider_image)||1===(null===y||void 0===y?void 0:y.show_slider_image)||"1"===(null===y||void 0===y?void 0:y.show_slider_image))&&se.length>0,ce="ar"===w?(null===y||void 0===y?void 0:y.ar_slogan)||(null===y||void 0===y?void 0:y.en_slogan):(null===y||void 0===y?void 0:y.en_slogan)||"",pe="ar"===w?(null===y||void 0===y?void 0:y.ar_slogan_subtext)||(null===y||void 0===y?void 0:y.en_slogan_subtext):(null===y||void 0===y?void 0:y.en_slogan_subtext)||"";return(0,F.jsxs)(u,{children:[(0,F.jsx)(p,{$mainColor:le.mainColor,$bgColor:le.backgroundColor,$textColor:le.textColor,$mainColorHover:le.mainColor?le.mainColor+"dd":void 0}),(0,F.jsx)(I,{restaurant:y,restaurantName:b,activeLanguage:w,cartCount:C,onCartClick:()=>{var e;null!==(e=Z)&&void 0!==e&&e.cart&&(window.history.pushState({},""),oe("cart"))},onLanguageToggle:()=>{const e="ar"===w?"en":"ar";o((0,il.y)({name:b,activeLanguage:e}))},onSearchChange:$,searchText:A,onMobileSearchOpen:()=>_(!0),onLogoClick:()=>window.scrollTo({top:0,behavior:"smooth"})}),(0,F.jsx)(nl,{children:(0,F.jsxs)(al,{children:[(0,F.jsx)(ll,{children:null!==y&&void 0!==y&&y.logoURL?(0,F.jsx)("img",{src:(0,v.V)(y.logoURL),alt:""}):((null===y||void 0===y?void 0:y.name)||"M").charAt(0).toUpperCase()}),(0,F.jsxs)(sl,{children:[(0,F.jsx)(dl,{children:(null===y||void 0===y?void 0:y.name)||b}),(ce||pe)&&(0,F.jsx)(cl,{children:ce||pe})]})]})}),de&&(0,F.jsx)(Lt,{sliderImages:se,activeLanguage:w}),(0,F.jsx)(R,{categories:ee,activeCategory:P,onCategoryClick:ie,activeLanguage:w}),(0,F.jsxs)(x,{children:[(0,F.jsx)(Y,{categories:ee,activeCategory:P,onCategoryClick:ie,activeLanguage:w}),(0,F.jsxs)(m,{children:[(0,F.jsx)(re,{activeFilter:M,onFilterChange:U,sortBy:W,onSortChange:q,activeLanguage:w}),te.map((e=>{const t="ar"===w?e.ar_category:e.en_category;return(0,F.jsxs)(pl,{ref:t=>{G.current[e.id]=t},"data-category-id":e.id,children:[(0,F.jsxs)(hl,{children:[(0,F.jsx)(g,{children:t}),(0,F.jsxs)(ul,{children:[e.filteredProducts.length," ",1===e.filteredProducts.length?H("item",w):H("items",w)]})]}),(0,F.jsx)(xl,{children:e.filteredProducts.map((e=>(0,F.jsx)(Ae,{product:e,activeLanguage:w,currency:null===y||void 0===y?void 0:y.currency,onProductClick:ne,onQuickAdd:ae,layout:"horizontal"},e.id)))})]},e.id)}))]})]}),(0,F.jsx)(ro,{restaurant:y,activeLanguage:w}),(0,F.jsx)(ml,{}),(0,F.jsx)(Ee,{activeTab:O,onTabChange:e=>{if(V(e),"home"===e)window.scrollTo({top:0,behavior:"smooth"});else if("menu"===e){const e=document.querySelector("[data-category-id]");if(e){const t=e.getBoundingClientRect().top+window.scrollY-120;window.scrollTo({top:t,behavior:"smooth"})}}else if("search"===e)_(!0);else if("cart"===e){var t;null!==(t=Z)&&void 0!==t&&t.cart&&(window.history.pushState({},""),oe("cart"))}else"more"===e&&E(!0)},cartCount:C,activeLanguage:w}),(0,F.jsx)(Me,{cartCount:C,cartTotal:k,currency:null===y||void 0===y?void 0:y.currency,onViewCart:()=>{var e;null!==(e=Z)&&void 0!==e&&e.cart&&(window.history.pushState({},""),oe("cart"))},activeLanguage:w}),(0,F.jsx)(et,{show:z,onClose:()=>_(!1),categories:ee,activeLanguage:w,currency:null===y||void 0===y?void 0:y.currency,onProductClick:ne}),(0,F.jsx)(lt,{show:L,onClose:()=>E(!1),onAction:e=>{switch(e){case"info":case"hours":B(!0);break;case"branches":window.history.pushState({},""),oe("location");break;case"contact":window.history.pushState({},""),oe("contactForm");break;case"about":window.history.pushState({},""),oe("about");break;case"share":window.history.pushState({},""),oe("share");break;case"feedback":window.history.pushState({},""),oe("feedback")}},activeLanguage:w}),(0,F.jsx)(wt,{show:N,onClose:()=>B(!1),restaurant:y,activeLanguage:w}),(0,F.jsx)(Vi,{restaurant:y,showPopup:T,popupHandler:oe}),(null===(e=Z)||void 0===e?void 0:e.cart)&&(0,F.jsx)(ai,{restaurant:y,showPopup:T,popupHandler:oe}),(0,F.jsx)(xn,{showPopup:T,popupHandler:oe,activeCategory:P}),(0,F.jsx)(mn.A,{restaurant:y,showPopup:T,popupHandler:oe}),(0,F.jsx)(fn.A,{restaurant:y,showPopup:T,popupHandler:oe}),(0,F.jsx)(gn.A,{restaurant:y,showPopup:T,popupHandler:oe}),c&&(0,F.jsx)(Ja,{productId:c,searchParams:s,setSearchParams:d}),(null===(t=Z)||void 0===t?void 0:t.install_app)&&(0,F.jsx)(rl,{showInstallPopup:J,onInstall:async()=>{if(!K)return;K.prompt();await K.userChoice;X(null),Q(!1)},restaurantName:b,onDismiss:()=>Q(!1)})]})}},72929:(e,t,o)=>{o.d(t,{Z:()=>s,z:()=>l});var r=o(41190);const i=r.i7`
  0% {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
`,n=r.i7`
  0% {
    width: 0%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    border-radius: 0px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  40% {
    width: 92%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
  }
  100% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }

  @media (min-width: 768px) {
    40% {
      width: 88%;
      border-radius: 28px;
    }
    100% {
      width: 88%;
      border-radius: 28px;
    }
  }

  @media (min-width: 1024px) {
    40% {
      width: 85%;
      border-radius: 32px;
    }
    100% {
      width: 85%;
      border-radius: 32px;
    }
  }
`,a=r.i7`
  0% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }
  60% {
    width: 92%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 0.5;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    width: 0%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    border-radius: 0px;
    opacity: 0;
  }

  @media (min-width: 768px) {
    0% {
      width: 88%;
      border-radius: 28px;
    }
    60% {
      width: 88%;
      border-radius: 28px;
    }
  }

  @media (min-width: 1024px) {
    0% {
      width: 85%;
      border-radius: 32px;
    }
    60% {
      width: 85%;
      border-radius: 32px;
    }
  }
`,l=r.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 299;
  opacity: ${e=>e.CloseAnimation?1:0};
  animation: ${e=>e.CloseAnimation?i:"none"}
    0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: auto;
`,s=r.Ay.div`
  position: fixed;
  width: 92%;
  height: calc(
    100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px
  );
  max-height: calc(
    100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${e=>e.theme.textColor};
  background-color: ${e=>e.theme.backgroundColor};
  padding-bottom: 0;
  overflow-y: ${e=>e.CloseAnimation?"auto":"hidden"};
  overflow-x: hidden;
  z-index: 300;
  border-radius: 24px;
  box-shadow: ${e=>e.CloseAnimation?"0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.05)":"none"};

  animation: ${e=>e.CloseAnimation?n:a}
    0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: forwards;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mainColor||"#007bff"}40;
    border-radius: 3px;
  }

  @media (min-width: 768px) {
    width: 88%;
    border-radius: 28px;
  }

  @media (min-width: 1024px) {
    width: 85%;
    border-radius: 32px;
  }
`}}]);
//# sourceMappingURL=2110.d1d60e2b.chunk.js.map