/**
 * Analytics Tracking Utility
 * Tracks anonymous visits and events for the Menugic Reporting Dashboard
 */

const BASE_URL = process.env.REACT_APP_BASE_URL;

// Generate or retrieve visitor ID (stored in localStorage)
const getVisitorId = () => {
  let visitorId = localStorage.getItem("menugic_visitor_id");
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem("menugic_visitor_id", visitorId);
  }
  return visitorId;
};

// Generate session ID (stored in sessionStorage)
const getSessionId = () => {
  let sessionId = sessionStorage.getItem("menugic_session_id");
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem("menugic_session_id", sessionId);
  }
  return sessionId;
};

// Detect source from URL parameters or referrer
const detectSource = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source");
  const utmMedium = urlParams.get("utm_medium");
  const utmCampaign = urlParams.get("utm_campaign");

  // Check for QR code parameter
  if (urlParams.get("qr") === "true" || urlParams.get("source") === "qr") {
    return {
      source: "QR",
      medium: utmMedium || null,
      campaign: utmCampaign || null,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
    };
  }

  // Check referrer
  const referrer = document.referrer;
  if (referrer) {
    try {
      const referrerUrl = new URL(referrer);
      const hostname = referrerUrl.hostname.toLowerCase();

      if (hostname.includes("instagram.com")) {
        return {
          source: "Instagram",
          medium: utmMedium || "social",
          campaign: utmCampaign || null,
          utm_source: utmSource || "instagram",
          utm_medium: utmMedium || "social",
          utm_campaign: utmCampaign,
        };
      }
      if (hostname.includes("facebook.com")) {
        return {
          source: "Facebook",
          medium: utmMedium || "social",
          campaign: utmCampaign || null,
          utm_source: utmSource || "facebook",
          utm_medium: utmMedium || "social",
          utm_campaign: utmCampaign,
        };
      }
      if (hostname.includes("tiktok.com")) {
        return {
          source: "TikTok",
          medium: utmMedium || "social",
          campaign: utmCampaign || null,
          utm_source: utmSource || "tiktok",
          utm_medium: utmMedium || "social",
          utm_campaign: utmCampaign,
        };
      }
      if (hostname.includes("google.com") || hostname.includes("google.")) {
        return {
          source: "Google",
          medium: utmMedium || "organic",
          campaign: utmCampaign || null,
          utm_source: utmSource || "google",
          utm_medium: utmMedium || "organic",
          utm_campaign: utmCampaign,
        };
      }
      if (hostname.includes("whatsapp.com") || hostname.includes("wa.me")) {
        return {
          source: "WhatsApp",
          medium: utmMedium || "messaging",
          campaign: utmCampaign || null,
          utm_source: utmSource || "whatsapp",
          utm_medium: utmMedium || "messaging",
          utm_campaign: utmCampaign,
        };
      }
    } catch (e) {
      // Invalid referrer URL
    }
  }

  // Default to Direct
  return {
    source: utmSource || "Direct",
    medium: utmMedium || null,
    campaign: utmCampaign || null,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
  };
};

// Detect device type
const detectDevice = () => {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

// Detect language
const detectLanguage = () => {
  return navigator.language || navigator.userLanguage || "en";
};

/**
 * Track a visit
 */
export const trackVisit = async (restaurantId, branchId = null) => {
  try {
    const sourceData = detectSource();
    const visitorId = getVisitorId();
    const sessionId = getSessionId();

    const visitData = {
      restaurant_id: restaurantId,
      branch_id: branchId,
      session_id: sessionId,
      visitor_id: visitorId,
      source: sourceData.source,
      medium: sourceData.medium,
      campaign: sourceData.campaign,
      utm_source: sourceData.utm_source,
      utm_medium: sourceData.utm_medium,
      utm_campaign: sourceData.utm_campaign,
      landing_page: window.location.pathname,
      device_type: detectDevice(),
      language: detectLanguage(),
      referrer: document.referrer || null,
    };

    // Send tracking request (fire and forget)
    fetch(`${BASE_URL}/analytics/track/visit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visitData),
    }).catch((err) => {
      console.error("Error tracking visit:", err);
    });
  } catch (error) {
    console.error("Error in trackVisit:", error);
  }
};

/**
 * Track an event
 */
export const trackEvent = async (
  restaurantId,
  eventType,
  {
    branchId = null,
    productId = null,
    categoryId = null,
    orderId = null,
    orderType = null,
    revenue = null,
    quantity = null,
    metadata = null,
  } = {}
) => {
  try {
    const visitorId = getVisitorId();
    const sessionId = getSessionId();

    const eventData = {
      restaurant_id: restaurantId,
      branch_id: branchId,
      session_id: sessionId,
      visitor_id: visitorId,
      event_type: eventType,
      product_id: productId,
      category_id: categoryId,
      order_id: orderId,
      order_type: orderType,
      revenue,
      quantity,
      metadata,
    };

    // Send tracking request (fire and forget)
    fetch(`${BASE_URL}/analytics/track/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).catch((err) => {
      console.error("Error tracking event:", err);
    });
  } catch (error) {
    console.error("Error in trackEvent:", error);
  }
};

/**
 * Helper functions for common events
 */
export const trackPageView = (restaurantId, branchId = null) => {
  trackEvent(restaurantId, "page_view", { branchId });
};

export const trackItemView = (restaurantId, productId, categoryId, branchId = null) => {
  trackEvent(restaurantId, "item_view", {
    branchId,
    productId,
    categoryId,
  });
};

export const trackAddToCart = (
  restaurantId,
  productId,
  categoryId,
  quantity = 1,
  branchId = null
) => {
  trackEvent(restaurantId, "add_to_cart", {
    branchId,
    productId,
    categoryId,
    quantity,
  });
};

export const trackCheckoutStart = (restaurantId, branchId = null, orderType = null) => {
  trackEvent(restaurantId, "checkout_start", {
    branchId,
    orderType,
  });
};

export const trackOrderPlaced = (
  restaurantId,
  orderId,
  orderType,
  revenue,
  branchId = null,
  metadata = null
) => {
  trackEvent(restaurantId, "order_placed", {
    branchId,
    orderId,
    orderType,
    revenue,
    metadata,
  });
};
