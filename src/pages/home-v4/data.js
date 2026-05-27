import {
  FiArrowRight,
  FiCheck,
  FiGrid,
  FiLayout,
  FiMessageCircle,
  FiMonitor,
  FiPackage,
  FiSettings,
  FiShoppingCart,
  FiStar,
  FiUsers,
  FiBarChart2,
  FiGlobe,
  FiAlignLeft,
  FiCamera,
  FiLayers,
  FiMapPin,
  FiSliders,
  FiDroplet,
  FiFeather,
  FiSmartphone,
  FiCoffee,
  FiShoppingBag,
} from "react-icons/fi";
import heroAllScreens from "../home-v2/images/all-screens.png";
import templateVideo1 from "../home-v2/videos/template1.mp4";
import templateVideo2 from "../home-v2/videos/template2.mp4";
import templateVideo3 from "../home-v2/videos/template3.mp4";
import templateVideo4 from "../home-v2/videos/template4.mp4";
import templatePoster1 from "../home-v2/images/template1.png";
import templatePoster2 from "../home-v2/images/template2.png";
import mainLogo from "../home-v2/images/main-logo.png";

export { heroAllScreens, mainLogo };

export const NAV_SECTION_LINKS = [
  { label: "Features", id: "features" },
  { label: "Templates", id: "templates" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export const BUSINESS_TYPES_QUICK = [
  { label: "Restaurants", icon: FiCoffee },
  { label: "Cafés", icon: FiGrid },
  { label: "Cosmetics", icon: FiDroplet },
  { label: "Flower Shops", icon: FiFeather },
  { label: "Grocery Stores", icon: FiShoppingCart },
  { label: "Retail Stores", icon: FiShoppingBag },
  { label: "Bakeries", icon: FiStar },
  { label: "Specialty Shops", icon: FiPackage },
];

export const TEMPLATES = [
  {
    id: "classic-elegant",
    name: "Classic Elegant",
    desc: "Refined, timeless layout with warm typography and a premium storefront feel.",
    bestFor: "Restaurants & fine dining",
    accent: "#8B6F47",
    theme: "warm",
    highlights: ["Elegant spacing", "Luxury presentation", "Smooth ordering flow"],
    videoSrc: templateVideo2,
    posterSrc: templatePoster2,
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    desc: "Clean, modern layout built for sleek brands and effortless browsing.",
    bestFor: "Cafés & premium brands",
    accent: "#2d2d2d",
    theme: "minimal",
    highlights: ["Minimal interface", "Smooth browsing", "Clean product focus"],
    videoSrc: templateVideo1,
    posterSrc: heroAllScreens,
  },
  {
    id: "fresh-storefront",
    name: "Fresh Storefront",
    desc: "Bright, approachable layout designed for everyday shopping and discovery.",
    bestFor: "Grocery stores & specialty shops",
    accent: "#3a7d44",
    theme: "fresh",
    highlights: ["Easy navigation", "Clear categories", "Friendly shopping flow"],
    videoSrc: templateVideo3,
    posterSrc: templatePoster1,
  },
  {
    id: "bold-contemporary",
    name: "Bold Contemporary",
    desc: "Trend-driven layout with energetic visuals for modern standout brands.",
    bestFor: "Dessert shops & trendy concepts",
    accent: "#c2185b",
    theme: "bold",
    highlights: ["Bold visual identity", "Dynamic presentation", "Engaging storefront feel"],
    videoSrc: templateVideo4,
    posterSrc: heroAllScreens,
  },
];

export const TEMPLATE_DEMO_URLS = {
  "modern-minimal": "https://lafleur-doree.menugic.com/",
  "classic-elegant": "https://lcafe.menugic.com/",
  "fresh-storefront": "https://bysara.menugic.com/",
  "bold-contemporary": "https://reflex.menugic.com/",
};

export const STATS = [
  { target: 100, suffix: "+", label: "Businesses" },
  { target: 500, suffix: "K+", label: "Menu views" },
  { target: 4, suffix: "", label: "Premium templates" },
];

export const FEATURE_CARDS = [
  { icon: FiShoppingCart, title: "Flexible ordering", description: "WhatsApp, add to cart, delivery, takeaway, and pickup — one system for any business type.", size: "large", tags: ["Ordering", "WhatsApp"], status: "Live" },
  { icon: FiLayout, title: "Digital storefront builder", description: "Build a polished storefront, product catalog, or ordering page — whether you sell food, flowers, cosmetics, or anything else.", size: "large", tags: ["Builder", "Design"], status: "Live" },
  { icon: FiBarChart2, title: "Reports & analytics", description: "Track page views, orders, and customer activity across all your business channels.", size: "large", tags: ["Analytics", "Reports"], status: "Live" },
  { icon: FiSettings, title: "Simple management", description: "Manage categories, products, branches, and business settings from one clean dashboard.", size: "large", tags: ["Admin", "Management"], status: "Live" },
  { icon: FiGrid, title: "QR catalog", description: "Let customers scan and browse your full catalog or menu instantly from any device.", tags: ["QR", "Catalog"] },
  { icon: FiAlignLeft, title: "Category management", description: "Organize products into sections — whether it's menu items, skincare products, or bouquets.", tags: ["Categories"] },
  { icon: FiCamera, title: "Product images & prices", description: "Showcase your products beautifully with high-quality images, pricing, and details.", tags: ["Products"] },
  { icon: FiLayers, title: "Branch support", description: "Manage multiple locations or branches with independent settings and catalogs.", tags: ["Branches"] },
  { icon: FiSliders, title: "Template selection", description: "Choose from premium templates designed for restaurants, retail, beauty, and more.", tags: ["Templates"] },
  { icon: FiMessageCircle, title: "Special instructions", description: "Allow customers to add notes, custom requests, or special preferences to orders.", tags: ["Orders"] },
  { icon: FiPackage, title: "Flexible business settings", description: "Configure ordering flows, delivery zones, business hours, and preferences your way.", tags: ["Settings"] },
  { icon: FiUsers, title: "Customer management", description: "Track customer info, order history, and preferences for personalized service.", tags: ["CRM"] },
];

export const WHY_CARDS = [
  { icon: FiMonitor, title: "Premium digital storefronts", text: "Launch a polished menu, catalog, or ordering website your customers will love.", tag: "Design" },
  { icon: FiShoppingCart, title: "Flexible ordering", text: "Accept orders through WhatsApp, cart, delivery, takeaway, or dine-in — your way.", tag: "Orders" },
  { icon: FiGrid, title: "Built for every business type", text: "Designed for restaurants, florists, beauty brands, grocery stores, retail shops, and more.", tag: "Universal" },
  { icon: FiSettings, title: "Simple management dashboard", text: "Manage products, categories, orders, reporting, and settings from one clean dashboard.", tag: "Admin" },
  { icon: FiBarChart2, title: "Built-in reporting", text: "Track views, orders, and customer activity with clear business insights.", tag: "Analytics" },
];

export const HOW_IT_WORKS = [
  { step: "01", title: "Choose your template", text: "Pick from four premium templates designed for different business styles." },
  { step: "02", title: "Add your products", text: "Upload images, set prices, create categories, and organize your catalog." },
  { step: "03", title: "Customize your page", text: "Add your brand colors, logo, business info, and configure ordering." },
  { step: "04", title: "Publish and receive orders", text: "Go live instantly. Share your link, QR, or website address." },
];

export const VIP_EXCLUSIVE_FEATURES = [
  "Full admin dashboard & operations",
  "Order management workspace",
  "Analytics & reporting",
  "Registered customer management",
  "Customer threads & admin chat",
  "Advanced customization & branding",
];

export const PLANS = [
  {
    name: "Premium",
    tagline: "For businesses starting professionally",
    price: 100,
    color: "indigo",
    features: [
      "Digital menu or website",
      "QR menu support",
      "Category & item management",
      "WhatsApp ordering",
      "One template",
    ],
  },
  {
    name: "VIP",
    tagline: "Best for businesses that need full operations and customer management",
    price: 200,
    color: "rose",
    recommended: true,
    supportingLine: "VIP unlocks the full operations stack: orders, users, analytics, and customer conversations from one admin.",
    features: ["Everything in Premium", "Full admin dashboard & operations", "Order management workspace", "Analytics & reporting", "Registered customer management", "Customer threads & admin chat", "Advanced customization & branding"],
  },
];

export const FAQS = [
  { q: "Is Menugic only for restaurants?", a: "No. Menugic is built for restaurants, cafés, florists, beauty brands, grocery stores, specialty shops, and other businesses that want to display or sell products online beautifully." },
  { q: "Can I use Menugic for a store or product catalog?", a: "Yes. Menugic can be used for digital catalogs, storefronts, and product-based websites, not only menus." },
  { q: "Can I choose between different templates?", a: "Yes. Menugic includes multiple premium templates, so you can choose the layout that best matches your brand and business style." },
  { q: "Can customers order through WhatsApp?", a: "Yes. Menugic supports WhatsApp ordering, making it easy for customers to contact you and place orders directly." },
  { q: "Does Menugic support delivery, takeaway, and dine-in?", a: "Yes. Depending on your setup, Menugic can support delivery, takeaway, and dine-in ordering flows." },
  { q: "Can I manage products, categories, and branches myself?", a: "Yes. Menugic gives you an admin dashboard where you can manage products, categories, settings, and branches easily." },
  { q: "Does Menugic include analytics and reporting?", a: "Yes. Menugic includes reporting tools to help you track views, orders, and customer activity." },
  { q: "What is the difference between Premium and VIP?", a: "Premium is ideal for businesses starting professionally, while VIP is built for brands that need advanced operations like analytics, customer management, and more powerful admin tools." },
];

export const CONTACT_BUSINESS_TYPES = [
  "Restaurant", "Café", "Bakery", "Dessert Shop", "Grocery Store", "Flower Shop", "Cosmetics", "Specialty Store", "Other",
];

export const CONTACT_DETAILS = {
  phoneDisplay: "+961 78 911 634",
  phoneTel: "+96178911634",
  phoneWhatsappDigits: "96178911634",
  email: "menugic@gmail.com",
};

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Templates", href: "#templates" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Business Types",
    links: [
      { label: "Restaurants", href: "#businesses" },
      { label: "Florists", href: "#businesses" },
      { label: "Beauty & Cosmetics", href: "#businesses" },
      { label: "Grocery Stores", href: "#businesses" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQ", href: "#faq" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export const FOOTER_SOCIAL_KEYS = ["Instagram", "Facebook", "LinkedIn"];
