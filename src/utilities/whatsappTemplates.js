import { convertPrice } from "./convertPrice";
import { formatCartItemOptionsForOrderMessage } from "../product-options/cartLabels";

/**
 * Format cart items into a text block for WhatsApp messages.
 */
function formatItems(cart, currencySymbol, activeLanguage) {
  let text = "";
  cart.forEach((item, idx) => {
    const modeLabel =
      item.menuMode === "dine_in"
        ? " [Dine In]"
        : item.menuMode === "delivery"
        ? " [Delivery]"
        : "";
    const name = (
      activeLanguage === "ar" ? item.ar_name : item.en_name || ""
    ).trim();
    const category = item.category
      ? (
          activeLanguage === "ar"
            ? item.category.ar_category
            : item.category.en_category || ""
        ).trim()
      : "";
    const itemTotal = item.price * item.quantity;

    text += `${idx + 1}. *${name}*${modeLabel}\n`;
    if (category) text += `    ${category}\n`;
    text += `    ${item.quantity}x ${convertPrice(item.price, currencySymbol)} = *${convertPrice(itemTotal, currencySymbol)}*\n`;

    if (item.formData) {
      const optionsText = formatCartItemOptionsForOrderMessage(
        item,
        activeLanguage === "ar" ? "ar" : "en"
      );
      if (optionsText) text += optionsText;
    }
    if (item.instruction) {
      text += `    > _${item.instruction}_\n`;
    }
    text += `\n`;
  });
  return text.trimEnd();
}

/**
 * Build conditional blocks that only appear when relevant.
 */
function buildBlocks(data) {
  const { deliveryType, fullAddress, selectedLocation, tableNumber, note } = data;

  let addressBlock = "";
  if (deliveryType === "Delivery" && fullAddress) {
    addressBlock = `\n*Delivery Address:*\n${fullAddress}`;
  }

  let mapLink = "";
  if (deliveryType === "Delivery" && selectedLocation) {
    mapLink = `https://www.google.com/maps?q=${selectedLocation.latitude},${selectedLocation.longitude}`;
  }

  let tableBlock = "";
  if (deliveryType === "DineIn" && tableNumber) {
    tableBlock = `*Table:* #${tableNumber}`;
  }

  let noteBlock = "";
  if (note) {
    noteBlock = `*Note:* _${note}_`;
  }

  return { addressBlock, mapLink, tableBlock, noteBlock };
}

function getTimestamp() {
  const now = new Date();
  return now.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

// ─── Template Definitions ────────────────────────────────────

function classicClear(data) {
  const { restaurantName, orderType, items, total, customerName, customerPhone } = data;
  const { addressBlock, mapLink, tableBlock, noteBlock } = buildBlocks(data);
  const ts = getTimestamp();

  let msg = "";
  msg += `\u{1F4CB} *${restaurantName} \u2014 New Order*\n`;
  msg += `\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`;
  msg += `\u{1F4CC} *Type:* ${orderType}\n`;
  msg += `\u{1F550} *Time:* ${ts}\n\n`;
  msg += `*Items:*\n`;
  msg += `${items}\n\n`;
  msg += `\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n`;
  msg += `\u{1F4B0} *Total: ${total}*\n\n`;
  msg += `*Customer:*\n`;
  msg += `\u{1F464} ${customerName}\n`;
  msg += `\u{1F4DE} ${customerPhone}\n`;
  if (addressBlock) msg += `${addressBlock}\n`;
  if (tableBlock) msg += `${tableBlock}\n`;
  if (noteBlock) msg += `\n${noteBlock}\n`;
  if (mapLink) msg += `\n${mapLink}\n`;

  return msg;
}

function compactPOS(data) {
  const { orderType, items, total, customerName, customerPhone } = data;
  const { addressBlock, tableBlock, noteBlock } = buildBlocks(data);

  let msg = "";
  msg += `*${orderType}*\n\n`;
  msg += `${items}\n\n`;
  msg += `\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\n`;
  msg += `*Total: ${total}*\n\n`;
  msg += `${customerName} \u00B7 ${customerPhone}\n`;
  if (addressBlock) msg += `${addressBlock}\n`;
  if (tableBlock) msg += `${tableBlock}\n`;
  if (noteBlock) msg += `${noteBlock}\n`;

  return msg;
}

function detailedOrganized(data) {
  const { restaurantName, orderType, items, total, customerName, customerPhone } = data;
  const { addressBlock, mapLink, tableBlock, noteBlock } = buildBlocks(data);
  const ts = getTimestamp();

  let msg = "";
  msg += `\u{1F514} *New Order Received*\n`;
  msg += `\u{1F4CD} *${restaurantName}*\n\n`;
  msg += `\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n`;
  msg += `  \u{1F4CC} *${orderType}*\n`;
  msg += `  \u{1F550} ${ts}\n`;
  msg += `\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n`;
  msg += `\u{1F9FE} *Order Items:*\n`;
  msg += `${items}\n\n`;
  msg += `\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n`;
  msg += `\u{1F4B0} *Total: ${total}*\n`;
  msg += `\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`;
  msg += `\u{1F464} *Customer Details:*\n`;
  msg += `   Name: ${customerName}\n`;
  msg += `   Phone: ${customerPhone}\n`;
  if (addressBlock) msg += `   ${addressBlock}\n`;
  if (tableBlock) msg += `   ${tableBlock}\n`;
  if (noteBlock) msg += `\n${noteBlock}\n`;
  if (mapLink) msg += `\n${mapLink}\n`;

  return msg;
}

function friendly(data) {
  const { orderType, items, total, customerName, customerPhone } = data;
  const { addressBlock, mapLink, tableBlock, noteBlock } = buildBlocks(data);

  let msg = "";
  msg += `Hey! \u{1F44B} New order just in!\n\n`;
  msg += `\u{1F37D}\uFE0F *${orderType}*\n\n`;
  msg += `${items}\n\n`;
  msg += `\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n`;
  msg += `*Total: ${total}* \u2728\n`;
  msg += `\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n`;
  msg += `\u{1F464} ${customerName}\n`;
  msg += `\u{1F4F1} ${customerPhone}\n`;
  if (addressBlock) msg += `${addressBlock}\n`;
  if (tableBlock) msg += `${tableBlock}\n`;
  if (noteBlock) msg += `\n${noteBlock}\n`;
  if (mapLink) msg += `\n${mapLink}\n`;

  return msg;
}

function bilingualArabicEnglish(data) {
  const { restaurantName, orderType, items, total, customerName, customerPhone } = data;
  const { addressBlock, mapLink, tableBlock, noteBlock } = buildBlocks(data);

  let msg = "";
  msg += `\u{1F514} *\u0637\u0644\u0628 \u062C\u062F\u064A\u062F | New Order*\n`;
  msg += `\u{1F4CD} *${restaurantName}*\n\n`;
  msg += `\u25C7 *\u0627\u0644\u0646\u0648\u0639 | Type:* ${orderType}\n\n`;
  msg += `${items}\n\n`;
  msg += `\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\n`;
  msg += `*\u0627\u0644\u0645\u062C\u0645\u0648\u0639 | Total: ${total}*\n\n`;
  msg += `\u{1F464} *\u0627\u0644\u0632\u0628\u0648\u0646 | Customer:*\n`;
  msg += `   ${customerName}\n`;
  msg += `   \u{1F4DE} ${customerPhone}\n`;
  if (addressBlock) msg += `   ${addressBlock}\n`;
  if (tableBlock) msg += `   ${tableBlock}\n`;
  if (noteBlock) msg += `\n${noteBlock}\n`;
  if (mapLink) msg += `\n${mapLink}\n`;

  return msg;
}

// ─── Template Registry ───────────────────────────────────────

export const WHATSAPP_TEMPLATES = [
  {
    id: "classic",
    name: "Classic Clear",
    description: "Structured and easy to read \u2014 great default for most restaurants",
    build: classicClear,
  },
  {
    id: "compact",
    name: "Compact POS",
    description: "Minimal and fast to scan \u2014 ideal for busy kitchens",
    build: compactPOS,
  },
  {
    id: "detailed",
    name: "Detailed & Organized",
    description: "Every section clearly labeled with borders",
    build: detailedOrganized,
  },
  {
    id: "friendly",
    name: "Friendly",
    description: "Warm and casual tone \u2014 perfect for cafes & small shops",
    build: friendly,
  },
  {
    id: "bilingual",
    name: "Bilingual AR/EN",
    description: "Dual Arabic/English labels \u2014 for bilingual teams",
    build: bilingualArabicEnglish,
  },
];

/**
 * Build a message from a custom template string by replacing {{variables}}.
 */
function buildCustomMessage(templateStr, data) {
  const { addressBlock, mapLink, tableBlock, noteBlock } = buildBlocks(data);
  const ts = getTimestamp();

  let msg = templateStr;
  msg = msg.replace(/\{\{restaurantName\}\}/g, data.restaurantName || "");
  msg = msg.replace(/\{\{orderType\}\}/g, data.orderType || "");
  msg = msg.replace(/\{\{timestamp\}\}/g, ts);
  msg = msg.replace(/\{\{items\}\}/g, data.items || "");
  msg = msg.replace(/\{\{total\}\}/g, data.total || "");
  msg = msg.replace(/\{\{customerName\}\}/g, data.customerName || "");
  msg = msg.replace(/\{\{customerPhone\}\}/g, data.customerPhone || "");
  msg = msg.replace(/\{\{addressBlock\}\}/g, addressBlock);
  msg = msg.replace(/\{\{mapLink\}\}/g, mapLink);
  msg = msg.replace(/\{\{tableBlock\}\}/g, tableBlock);
  msg = msg.replace(/\{\{noteBlock\}\}/g, noteBlock);

  // Clean up empty lines from conditional blocks that didn't render
  msg = msg.replace(/\n{3,}/g, "\n\n");
  return msg.trim();
}

/**
 * Available template variables for the custom template builder.
 */
export const TEMPLATE_VARIABLES = [
  { key: "{{restaurantName}}", label: "Restaurant Name" },
  { key: "{{orderType}}", label: "Order Type (Delivery/TakeAway/DineIn)" },
  { key: "{{timestamp}}", label: "Order Time" },
  { key: "{{items}}", label: "Order Items (auto-formatted list)" },
  { key: "{{total}}", label: "Total Price" },
  { key: "{{customerName}}", label: "Customer Name" },
  { key: "{{customerPhone}}", label: "Customer Phone" },
  { key: "{{addressBlock}}", label: "Delivery Address (only shows for Delivery)" },
  { key: "{{mapLink}}", label: "Google Maps Link (only shows for Delivery)" },
  { key: "{{tableBlock}}", label: "Table Number (only shows for DineIn)" },
  { key: "{{noteBlock}}", label: "Customer Note (only shows if provided)" },
];

/**
 * Build a styled WhatsApp order message using the selected template.
 *
 * @param {string|null} templateId - Template ID from restaurant settings (null = classic)
 * @param {object} params
 * @param {string} params.restaurantName
 * @param {string} params.orderType - "Delivery" | "TakeAway" | "DineIn"
 * @param {Array} params.cart - Cart items array
 * @param {string} params.currencySymbol
 * @param {string} params.activeLanguage - "en" | "ar"
 * @param {string} params.customerName
 * @param {string} params.customerPhone
 * @param {string} [params.fullAddress]
 * @param {object} [params.selectedLocation] - { latitude, longitude }
 * @param {string} [params.tableNumber]
 * @param {string} [params.note]
 * @param {string} [params.selectedRegion]
 * @param {string} [params.customWhatsappTemplate] - Custom template string
 * @returns {string} Formatted WhatsApp message
 */
export function buildStyledMessage(templateId, params) {
  const {
    cart,
    currencySymbol,
    activeLanguage,
    customWhatsappTemplate,
    ...rest
  } = params;

  const items = formatItems(cart, currencySymbol, activeLanguage);
  const totalNum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = convertPrice(totalNum, currencySymbol);

  const data = {
    ...rest,
    items,
    total,
    deliveryType: rest.orderType,
  };

  if (templateId === "custom" && customWhatsappTemplate) {
    return buildCustomMessage(customWhatsappTemplate, data);
  }

  const template = WHATSAPP_TEMPLATES.find((t) => t.id === templateId);
  const buildFn = template ? template.build : classicClear;
  return buildFn(data);
}

/**
 * Sample data used for previews.
 */
export const SAMPLE_PREVIEW_DATA = {
  restaurantName: "My Restaurant",
  orderType: "Delivery",
  items:
    `1. *Chicken Burger*\n    Burgers\n    2x 12.00$ = *24.00$*\n\n` +
    `2. *Caesar Salad*\n    Salads\n    1x 8.50$ = *8.50$*`,
  total: "32.50$",
  customerName: "John Doe",
  customerPhone: "+961 71 123 456",
  deliveryType: "Delivery",
  fullAddress: "Beirut, Hamra Street, Building 42",
  selectedLocation: { latitude: 33.8938, longitude: 35.5018 },
  note: "Extra sauce please",
};

/**
 * Generate a preview message with sample data for superadmin template selector.
 */
export function buildTemplatePreview(templateId, restaurantName = "My Restaurant", customTemplateStr = "") {
  const data = { ...SAMPLE_PREVIEW_DATA, restaurantName };

  if (templateId === "custom" && customTemplateStr) {
    return buildCustomMessage(customTemplateStr, data);
  }

  const template = WHATSAPP_TEMPLATES.find((t) => t.id === templateId);
  const buildFn = template ? template.build : classicClear;
  return buildFn(data);
}
