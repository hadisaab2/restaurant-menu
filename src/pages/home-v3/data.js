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
  { label: "Restaurants", icon: FiCoffee, desc: "Menus, QR ordering, online sales" },
  { label: "Cafés", icon: FiGrid, desc: "Stylish menus, seamless ordering" },
  { label: "Cosmetics", icon: FiDroplet, desc: "Premium catalogs and storefronts" },
  { label: "Flower Shops", icon: FiFeather, desc: "Beautiful displays, easy orders" },
  { label: "Grocery Stores", icon: FiShoppingCart, desc: "Organized catalogs, quick shopping" },
  { label: "Retail Stores", icon: FiShoppingBag, desc: "Modern browsing and checkout" },
  { label: "Bakeries", icon: FiStar, desc: "Showcase products, accept orders" },
  { label: "Specialty Shops", icon: FiPackage, desc: "Flexible catalogs for unique products" },
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
  { icon: FiShoppingCart, title: "Flexible ordering", description: "WhatsApp, add to cart, delivery, takeaway, and dine-in — all from one system.", size: "large" },
  { icon: FiLayout, title: "Digital menu & website builder", description: "Build a polished menu, catalog, or storefront for your business.", size: "large" },
  { icon: FiBarChart2, title: "Reports & analytics", description: "Track views, orders, and customer activity with clear insights.", size: "large" },
  { icon: FiSettings, title: "Simple management", description: "Manage categories, products, branches, and settings in one place.", size: "large" },
  { icon: FiGrid, title: "QR menu", description: "Let customers scan and browse your menu instantly." },
  { icon: FiAlignLeft, title: "Category management", description: "Organize sections and products clearly for easy browsing." },
  { icon: FiCamera, title: "Product images & prices", description: "Show products beautifully with images, pricing, and details." },
  { icon: FiLayers, title: "Branch support", description: "Manage multiple branches with flexibility and control." },
  { icon: FiSliders, title: "Template selection", description: "Choose the layout that best matches your brand style." },
  { icon: FiMessageCircle, title: "Special instructions", description: "Allow customers to add notes and custom requests easily." },
  { icon: FiPackage, title: "Flexible business settings", description: "Adjust features, ordering options, and business preferences." },
  { icon: FiUsers, title: "Customer management", description: "Keep customer information organized for smoother service." },
];

export const WHY_CARDS = [
  { icon: FiMonitor, title: "Premium digital storefronts", text: "Launch a polished menu, catalog, or ordering website your customers will love." },
  { icon: FiShoppingCart, title: "Flexible ordering", text: "Accept orders through WhatsApp, cart, delivery, takeaway, or dine-in — your way." },
  { icon: FiGrid, title: "Built for every business type", text: "Designed for restaurants, florists, beauty brands, grocery stores, retail shops, and more." },
  { icon: FiSettings, title: "Simple management dashboard", text: "Manage products, categories, orders, reporting, and settings from one clean dashboard." },
  { icon: FiBarChart2, title: "Built-in reporting", text: "Track views, orders, and customer activity with clear business insights." },
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
    recommended: true,
    supportingLine: "VIP unlocks the full operations stack: orders, users, analytics, and customer conversations from one admin.",
    features: ["Everything in Premium", "Full admin dashboard & operations", "Order management workspace", "Analytics & reporting", "Registered customer management", "Customer threads & admin chat", "Advanced customization & branding"],
  },
];

export const BUSINESS_CARDS = [
  { name: "Restaurants", icon: FiGrid, desc: "Menus, QR ordering, dine-in, and WhatsApp orders." },
  { name: "Cafés", icon: FiCoffee, desc: "Branded menus with smooth ordering and daily specials." },
  { name: "Bakeries", icon: FiLayers, desc: "Beautiful product catalogs with pre-orders and notes." },
  { name: "Dessert Shops", icon: FiStar, desc: "Visual product displays with cart and WhatsApp checkout." },
  { name: "Grocery Stores", icon: FiShoppingCart, desc: "Organized catalogs with categories and easy browsing." },
  { name: "Flower Shops", icon: FiFeather, desc: "Elegant displays for bouquets, gifts, and custom orders." },
  { name: "Cosmetics", icon: FiDroplet, desc: "Premium product catalogs for beauty and skincare brands." },
  { name: "Specialty Stores", icon: FiShoppingBag, desc: "Flexible storefronts for niche products and unique brands." },
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

export const HERO_CHIPS = [
  "Restaurants", "Cosmetics", "Flower Shops", "Retail Stores", "Grocery Stores", "Bakeries", "Specialty Shops",
];

export const HERO_TRUST_ITEMS = ["WhatsApp Ordering", "Customer Insights", "Easy Dashboard Management"];

export const HERO_ICON_MARKERS = [
  { icon: FiMessageCircle, label: "WhatsApp Orders", pos: { top: "12%", left: "5%" }, delay: 0.46, floatY: -4, dur: 4.1 },
  { icon: FiBarChart2, label: "Customer Insights", pos: { top: "14%", right: "5%" }, delay: 0.62, floatY: -3, dur: 4.4 },
  { icon: FiSettings, label: "Easy Management", pos: { bottom: "20%", left: "4%" }, delay: 0.80, floatY: 4, dur: 4.0 },
  { icon: FiGrid, label: "QR Catalog", pos: { bottom: "14%", right: "5%" }, delay: 0.94, floatY: 4, dur: 3.8 },
];

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
