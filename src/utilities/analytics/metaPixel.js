/**
 * Meta Pixel Integration for Menugic
 *
 * Supports:
 * - A platform-level (Menugic) pixel from env var
 * - Per-restaurant pixels from restaurant.meta_pixel_id
 *
 * Both fire simultaneously when configured — the Menugic pixel
 * gives platform-wide analytics, and the restaurant pixel gives
 * each business owner their own data in Meta Ads Manager.
 */

const MENUGIC_PIXEL_ID = process.env.REACT_APP_MENUGIC_PIXEL_ID;

let baseInitialized = false;
const initializedPixels = new Set();

/**
 * Load the fbevents.js script (once).
 */
const loadFbScript = () => {
  if (typeof window === "undefined") return;
  if (window.fbq) return;

  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
};

/**
 * Initialize the global Menugic pixel.
 * Called once on app mount from App.jsx.
 */
export const initMetaPixel = () => {
  if (baseInitialized || !MENUGIC_PIXEL_ID) return;
  if (typeof window === "undefined") return;

  loadFbScript();
  window.fbq("init", MENUGIC_PIXEL_ID);
  window.fbq("track", "PageView");

  initializedPixels.add(MENUGIC_PIXEL_ID);
  baseInitialized = true;
};

/**
 * Initialize a restaurant-specific pixel.
 * Called when the restaurant data loads (from the theme/Template HOC).
 * Safe to call multiple times — only inits each pixel once.
 */
export const initRestaurantPixel = (pixelId) => {
  if (!pixelId || initializedPixels.has(pixelId)) return;
  if (typeof window === "undefined") return;

  loadFbScript();

  // Init the restaurant's pixel alongside the global one
  window.fbq("init", pixelId);
  window.fbq("trackSingle", pixelId, "PageView");

  initializedPixels.add(pixelId);
};

/**
 * Fire a standard Meta event on ALL initialized pixels.
 */
const fbqTrack = (eventName, params = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
};

/**
 * Fire a custom Meta event on ALL initialized pixels.
 */
const fbqCustom = (eventName, params = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, params);
  }
};

// ── Standard e-commerce events ──

export const metaPageView = () => fbqTrack("PageView");

export const metaViewContent = ({ productId, productName, price, category, currency = "USD" }) => {
  fbqTrack("ViewContent", {
    content_ids: [productId],
    content_name: productName,
    content_category: category,
    content_type: "product",
    value: price,
    currency,
  });
};

export const metaAddToCart = ({ productId, productName, price, quantity = 1, currency = "USD" }) => {
  fbqTrack("AddToCart", {
    content_ids: [productId],
    content_name: productName,
    content_type: "product",
    value: price * quantity,
    currency,
    num_items: quantity,
  });
};

export const metaInitiateCheckout = ({ items = [], totalValue = 0, currency = "USD" }) => {
  fbqTrack("InitiateCheckout", {
    content_ids: items.map((i) => i.product_id || i.id),
    content_type: "product",
    value: totalValue,
    currency,
    num_items: items.length,
  });
};

export const metaPurchase = ({ orderId, items = [], totalValue = 0, currency = "USD" }) => {
  fbqTrack("Purchase", {
    content_ids: items.map((i) => i.product_id || i.id),
    content_type: "product",
    value: totalValue,
    currency,
    num_items: items.length,
    order_id: orderId,
  });
};

export const metaSearch = ({ searchQuery, restaurantId }) => {
  fbqTrack("Search", {
    search_string: searchQuery,
    content_category: restaurantId,
  });
};

export const metaLead = ({ restaurantId }) => {
  fbqTrack("Lead", {
    content_category: restaurantId,
  });
};

// ── Custom Menugic events ──

export const metaCategoryView = ({ categoryId, categoryName, restaurantId }) => {
  fbqCustom("CategoryView", {
    category_id: categoryId,
    category_name: categoryName,
    restaurant_id: restaurantId,
  });
};
