// ── Color Groups ──
// Each group is an array of { key, label } objects
// Groups are shown based on which groups the selected template supports

export const colorGroups = {
  general: {
    title: "General Colors",
    colors: [
      { key: "mainColor", label: "Main / Accent Color" },
      { key: "backgroundColor", label: "Background Color" },
      { key: "textColor", label: "Text Color" },
    ],
  },
  categories: {
    title: "Category Colors",
    colors: [
      { key: "categoryActive", label: "Active Category Background" },
      { key: "categoryActiveText", label: "Active Category Text" },
      { key: "categoryActiveIcon", label: "Active Category Icon" },
      { key: "categoryUnActive", label: "Inactive Category Background" },
      { key: "categoryUnactiveText", label: "Inactive Category Text" },
      { key: "categoryUnactiveIcon", label: "Inactive Category Icon" },
      { key: "homepageCategoriesBackgroundColor", label: "Categories Section Background" },
    ],
  },
  products: {
    title: "Product Card Colors",
    colors: [
      { key: "BoxColor", label: "Card Background" },
      { key: "BoxTextColor", label: "Card Text" },
      { key: "BoxPriceColor", label: "Card Price" },
    ],
  },
  navigation: {
    title: "Navigation & Search",
    colors: [
      { key: "searchbackground", label: "Search Background" },
      { key: "searchTextColor", label: "Search Text" },
      { key: "languagebackground", label: "Language Button Background" },
      { key: "languageTextColor", label: "Language Button Text" },
      { key: "sidebarbackground", label: "Sidebar Background" },
      { key: "sidebartext", label: "Sidebar Text" },
      { key: "sidebarsearch", label: "Sidebar Search Background" },
      { key: "sidebarsearchText", label: "Sidebar Search Text" },
    ],
  },
  popups: {
    title: "Popup & Form Colors",
    colors: [
      { key: "popupbackgroundColor", label: "Popup Background" },
      { key: "popupTextColor", label: "Popup Text" },
      { key: "popupbuttonText", label: "Popup Button Text" },
      { key: "formColor", label: "Form Text / Options Color" },
    ],
  },
  bottomBar: {
    title: "Bottom Bar",
    colors: [
      { key: "bottomTabBarBackgroundColor", label: "Bottom Tab Bar Background" },
    ],
  },
  theme34Extra: {
    title: "Homepage & Navigation (Theme 3/4)",
    colors: [
      { key: "borderColor", label: "Border Color" },
      { key: "homepageBackgroundColor", label: "Homepage Background" },
      { key: "navigationBarBackgroundColor", label: "Navigation Bar Background" },
      { key: "slidingButtonBackgroundColor", label: "Sliding Button Background" },
      { key: "slidingButtonTextColor", label: "Sliding Button Text" },
      { key: "hplocationBackgroundColor", label: "Location Section Background" },
      { key: "hplocationTextColor", label: "Location Section Text" },
    ],
  },
  theme4Sections: {
    title: "Section Backgrounds (Theme 4)",
    colors: [
      { key: "heroSectionBackgroundColor", label: "Hero Section Background" },
      { key: "welcomeSectionBackgroundColor", label: "Welcome Section Background" },
      { key: "valueCardsSectionBackgroundColor", label: "Value Cards Section Background" },
      { key: "valueCardBackgroundColor", label: "Value Card Background" },
      { key: "categoriesSectionBackgroundColor", label: "Categories Section Background" },
      { key: "featuredProductsSectionBackgroundColor", label: "Featured Products Section Background" },
      { key: "locationsSectionBackgroundColor", label: "Locations Section Background" },
      { key: "socialSectionBackgroundColor", label: "Social Section Background" },
      { key: "howItWorksSectionBackgroundColor", label: "How It Works Section Background" },
      { key: "howItWorksStepIconBackgroundColor", label: "How It Works Step Icon Background" },
      { key: "howItWorksStepIconColor", label: "How It Works Step Icon Color" },
      { key: "footerSectionBackgroundColor", label: "Footer Section Background" },
      { key: "footerTextColor", label: "Footer Text Color" },
    ],
  },
};

// ── Features ──
// All features with their defaults (most ON by default)

export const ALL_FEATURES = [
  { key: "cart", label: "Cart / WhatsApp Ordering", defaultValue: true },
  { key: "delivery_order", label: "Delivery Orders", defaultValue: true },
  { key: "takeaway_order", label: "Takeaway Orders", defaultValue: true },
  { key: "dinein_order", label: "Dine-in Orders", defaultValue: true },
  { key: "feedback", label: "Feedback Form", defaultValue: true },
  { key: "contact_info", label: "Contact Info", defaultValue: true },
  { key: "about_us", label: "About Us", defaultValue: true },
  { key: "social_media", label: "Social Media Links", defaultValue: true },
  { key: "share", label: "Share Button", defaultValue: true },
  { key: "search", label: "Search", defaultValue: true },
  { key: "install_app", label: "PWA / Install App", defaultValue: false },
  { key: "user_registration", label: "Customer Registration", defaultValue: true },
  { key: "reports", label: "Reports & Analytics", defaultValue: true },
  { key: "google_maps_integrated", label: "Google Maps", defaultValue: false, showsField: "google_maps_api_key" },
  { key: "meta_pixel", label: "Meta Pixel", defaultValue: false, showsField: "meta_pixel_id" },
  { key: "quick_add_requires_options", label: "Quick Add Opens Options (if available)", defaultValue: false },
];

export const DEFAULT_FEATURES = Object.fromEntries(
  ALL_FEATURES.map((f) => [f.key, f.defaultValue])
);

// ── Templates ──

export const templates = [
  {
    id: 1,
    name: "Classic Split View",
    description: "Sidebar + content split layout with inline products",
    colorGroups: ["general", "categories", "products", "navigation", "popups", "bottomBar"],
    hasHomePage: false,
    hasShopMode: false,
    hasSections: false,
  },
  {
    id: 2,
    name: "Carousel Header",
    description: "Carousel header with vertical product list",
    colorGroups: ["general", "categories", "products", "navigation", "popups"],
    hasHomePage: false,
    hasShopMode: false,
    hasSections: false,
  },
  {
    id: 3,
    name: "Multi-View with Home",
    description: "Homepage + categories grid + products with bottom tabs",
    colorGroups: ["general", "categories", "products", "navigation", "popups", "bottomBar", "theme34Extra"],
    hasHomePage: true,
    hasShopMode: false,
    hasSections: true,
  },
  {
    id: 4,
    name: "Shop Mode",
    description: "Theme 3 + optional single-page shop mode",
    colorGroups: ["general", "categories", "products", "navigation", "popups", "bottomBar", "theme34Extra", "theme4Sections"],
    hasHomePage: true,
    hasShopMode: true,
    hasSections: true,
  },
  {
    id: 5,
    name: "Menu Mode (Dine-in/Delivery)",
    description: "Landing page with dine-in vs delivery mode selection",
    colorGroups: ["general", "categories", "products", "navigation", "popups"],
    hasHomePage: false,
    hasShopMode: false,
    hasSections: false,
  },
  {
    id: 6,
    name: "Multi-Branch",
    description: "Branch landing page with slider, then menu per branch",
    colorGroups: ["general", "categories", "products", "navigation", "popups", "bottomBar"],
    hasHomePage: false,
    hasShopMode: false,
    hasSections: false,
  },
  {
    id: 7,
    name: "Luxury Dark",
    description: "Dark editorial single-page scroll with hero cover",
    colorGroups: ["general", "categories", "products", "popups"],
    hasHomePage: false,
    hasShopMode: false,
    hasSections: false,
  },
  {
    id: 8,
    name: "Landing + Categories",
    description: "Landing page with slider, category grid, then product browsing",
    colorGroups: ["general", "categories", "products", "navigation", "popups", "bottomBar"],
    hasHomePage: false,
    hasShopMode: false,
    hasSections: false,
  },
];

// ── Helpers ──

// Get all color keys for a template (flat array)
export const getColorKeysForTemplate = (templateId) => {
  const template = templates.find((t) => t.id === templateId);
  if (!template) return [];
  return template.colorGroups.flatMap((groupKey) => {
    const group = colorGroups[groupKey];
    return group ? group.colors.map((c) => c.key) : [];
  });
};

// Get color groups with their colors for a template
export const getColorGroupsForTemplate = (templateId) => {
  const template = templates.find((t) => t.id === templateId);
  if (!template) return [];
  return template.colorGroups
    .map((groupKey) => ({
      key: groupKey,
      ...colorGroups[groupKey],
    }))
    .filter((g) => g.colors);
};

// ── Color Presets ──
// Each preset is designed so all colors harmonize:
// - formColor matches popupbackgroundColor tint for consistent input look
// - sidebar matches main bg for seamless feel
// - search/language bars use a subtle tint of the accent
// - product cards (Box) contrast properly against the page bg
// - borders are a muted version of the text color

export const COLOR_PRESETS = [
  {
    // LIGHT: tinted bg #f4f9f9, pure white cards, very dark text #111
    name: "Clean Teal",
    description: "Tinted background, white cards, teal accent",
    colors: {
      mainColor: "#5eabb1", backgroundColor: "#f0f6f6", textColor: "#111111",
      categoryActive: "#5eabb1", categoryActiveText: "#ffffff", categoryActiveIcon: "#ffffff",
      categoryUnActive: "#e0eded", categoryUnactiveText: "#6b8a8d", categoryUnactiveIcon: "#6b8a8d", homepageCategoriesBackgroundColor: "#e8f1f1",
      BoxColor: "#ffffff", BoxTextColor: "#111111", BoxPriceColor: "#3d8f95",
      searchbackground: "#dfeaea", searchTextColor: "#111111",
      languagebackground: "#dfeaea", languageTextColor: "#333333",
      sidebarbackground: "#f0f6f6", sidebartext: "#111111", sidebarsearch: "#dfeaea", sidebarsearchText: "#333333",
      popupbackgroundColor: "#f7fafa", popupTextColor: "#111111", popupbuttonText: "#ffffff", formColor: "#3a5a5d",
      bottomTabBarBackgroundColor: "#f0f6f6",
      borderColor: "#c5d8da", homepageBackgroundColor: "#f0f6f6", navigationBarBackgroundColor: "#f0f6f6",
      slidingButtonBackgroundColor: "#5eabb1", slidingButtonTextColor: "#ffffff",
      hplocationBackgroundColor: "#e0eded", hplocationTextColor: "#111111",
    },
  },
  {
    // LIGHT: warm cream bg #faf5ed, pure white cards, dark brown text #1a1207
    name: "Warm Gold",
    description: "Cream background, white cards, gold accent",
    colors: {
      mainColor: "#b8943d", backgroundColor: "#f7f1e6", textColor: "#1a1207",
      categoryActive: "#b8943d", categoryActiveText: "#ffffff", categoryActiveIcon: "#ffffff",
      categoryUnActive: "#ede4d2", categoryUnactiveText: "#8a7555", categoryUnactiveIcon: "#8a7555", homepageCategoriesBackgroundColor: "#f0e8d8",
      BoxColor: "#ffffff", BoxTextColor: "#1a1207", BoxPriceColor: "#9a7a20",
      searchbackground: "#ede4d2", searchTextColor: "#1a1207",
      languagebackground: "#ede4d2", languageTextColor: "#3d2e14",
      sidebarbackground: "#f7f1e6", sidebartext: "#1a1207", sidebarsearch: "#ede4d2", sidebarsearchText: "#3d2e14",
      popupbackgroundColor: "#faf6ee", popupTextColor: "#1a1207", popupbuttonText: "#ffffff", formColor: "#5a4428",
      bottomTabBarBackgroundColor: "#f7f1e6",
      borderColor: "#d6c9ae", homepageBackgroundColor: "#f7f1e6", navigationBarBackgroundColor: "#f7f1e6",
      slidingButtonBackgroundColor: "#b8943d", slidingButtonTextColor: "#ffffff",
      hplocationBackgroundColor: "#ede4d2", hplocationTextColor: "#1a1207",
    },
  },
  {
    // DARK: navy bg #0f1a2e, elevated card #1c2a45, white text #f5f5f5
    name: "Dark Coral",
    description: "Navy background, dark cards, coral accent",
    colors: {
      mainColor: "#e85d5d", backgroundColor: "#0f1a2e", textColor: "#f5f5f5",
      categoryActive: "#e85d5d", categoryActiveText: "#ffffff", categoryActiveIcon: "#ffffff",
      categoryUnActive: "#182640", categoryUnactiveText: "#8899aa", categoryUnactiveIcon: "#8899aa", homepageCategoriesBackgroundColor: "#142035",
      BoxColor: "#1c2a45", BoxTextColor: "#f5f5f5", BoxPriceColor: "#ff7070",
      searchbackground: "#1c2a45", searchTextColor: "#e0e0e0",
      languagebackground: "#1c2a45", languageTextColor: "#b0c0d0",
      sidebarbackground: "#0f1a2e", sidebartext: "#f5f5f5", sidebarsearch: "#1c2a45", sidebarsearchText: "#b0c0d0",
      popupbackgroundColor: "#162238", popupTextColor: "#f5f5f5", popupbuttonText: "#ffffff", formColor: "#c0d0e0",
      bottomTabBarBackgroundColor: "#0f1a2e",
      borderColor: "#2a3d5c", homepageBackgroundColor: "#0f1a2e", navigationBarBackgroundColor: "#0f1a2e",
      slidingButtonBackgroundColor: "#e85d5d", slidingButtonTextColor: "#ffffff",
      hplocationBackgroundColor: "#1c2a45", hplocationTextColor: "#f5f5f5",
    },
  },
  {
    // LIGHT: soft green bg #f2f8f2, white cards, dark green text #0d1f0d
    name: "Fresh Green",
    description: "Green-tinted background, white cards, green accent",
    colors: {
      mainColor: "#388e3c", backgroundColor: "#f0f7f0", textColor: "#0d1f0d",
      categoryActive: "#388e3c", categoryActiveText: "#ffffff", categoryActiveIcon: "#ffffff",
      categoryUnActive: "#dceadc", categoryUnactiveText: "#5a7a5a", categoryUnactiveIcon: "#5a7a5a", homepageCategoriesBackgroundColor: "#e5f0e5",
      BoxColor: "#ffffff", BoxTextColor: "#0d1f0d", BoxPriceColor: "#2e7d32",
      searchbackground: "#dceadc", searchTextColor: "#0d1f0d",
      languagebackground: "#dceadc", languageTextColor: "#2a3d2a",
      sidebarbackground: "#f0f7f0", sidebartext: "#0d1f0d", sidebarsearch: "#dceadc", sidebarsearchText: "#2a3d2a",
      popupbackgroundColor: "#f5faf5", popupTextColor: "#0d1f0d", popupbuttonText: "#ffffff", formColor: "#2a4a2a",
      bottomTabBarBackgroundColor: "#f0f7f0",
      borderColor: "#b8d4b8", homepageBackgroundColor: "#f0f7f0", navigationBarBackgroundColor: "#f0f7f0",
      slidingButtonBackgroundColor: "#388e3c", slidingButtonTextColor: "#ffffff",
      hplocationBackgroundColor: "#dceadc", hplocationTextColor: "#0d1f0d",
    },
  },
  {
    // LIGHT: lavender bg #f5f0fa, white cards, dark purple text #1a0f2e
    name: "Royal Purple",
    description: "Lavender background, white cards, purple accent",
    colors: {
      mainColor: "#6a3de8", backgroundColor: "#f2edfa", textColor: "#1a0f2e",
      categoryActive: "#6a3de8", categoryActiveText: "#ffffff", categoryActiveIcon: "#ffffff",
      categoryUnActive: "#e2d9f0", categoryUnactiveText: "#7a60a0", categoryUnactiveIcon: "#7a60a0", homepageCategoriesBackgroundColor: "#eae3f4",
      BoxColor: "#ffffff", BoxTextColor: "#1a0f2e", BoxPriceColor: "#5a2dc8",
      searchbackground: "#e2d9f0", searchTextColor: "#1a0f2e",
      languagebackground: "#e2d9f0", languageTextColor: "#2e1a50",
      sidebarbackground: "#f2edfa", sidebartext: "#1a0f2e", sidebarsearch: "#e2d9f0", sidebarsearchText: "#2e1a50",
      popupbackgroundColor: "#f7f3fc", popupTextColor: "#1a0f2e", popupbuttonText: "#ffffff", formColor: "#3a2860",
      bottomTabBarBackgroundColor: "#f2edfa",
      borderColor: "#c8b8e0", homepageBackgroundColor: "#f2edfa", navigationBarBackgroundColor: "#f2edfa",
      slidingButtonBackgroundColor: "#6a3de8", slidingButtonTextColor: "#ffffff",
      hplocationBackgroundColor: "#e2d9f0", hplocationTextColor: "#1a0f2e",
    },
  },
  {
    // LIGHT: warm peach bg #fff5ed, white cards, dark brown text #2a1608
    name: "Sunset Orange",
    description: "Peach background, white cards, orange accent",
    colors: {
      mainColor: "#e65100", backgroundColor: "#fef2e8", textColor: "#2a1608",
      categoryActive: "#e65100", categoryActiveText: "#ffffff", categoryActiveIcon: "#ffffff",
      categoryUnActive: "#f5e0cc", categoryUnactiveText: "#9a7050", categoryUnactiveIcon: "#9a7050", homepageCategoriesBackgroundColor: "#f8e8d8",
      BoxColor: "#ffffff", BoxTextColor: "#2a1608", BoxPriceColor: "#d84800",
      searchbackground: "#f5e0cc", searchTextColor: "#2a1608",
      languagebackground: "#f5e0cc", languageTextColor: "#4a2a10",
      sidebarbackground: "#fef2e8", sidebartext: "#2a1608", sidebarsearch: "#f5e0cc", sidebarsearchText: "#4a2a10",
      popupbackgroundColor: "#fdf6f0", popupTextColor: "#2a1608", popupbuttonText: "#ffffff", formColor: "#5a3018",
      bottomTabBarBackgroundColor: "#fef2e8",
      borderColor: "#e0c8aa", homepageBackgroundColor: "#fef2e8", navigationBarBackgroundColor: "#fef2e8",
      slidingButtonBackgroundColor: "#e65100", slidingButtonTextColor: "#ffffff",
      hplocationBackgroundColor: "#f5e0cc", hplocationTextColor: "#2a1608",
    },
  },
  {
    // LIGHT: cool blue bg #eef3fb, white cards, dark navy text #0a1628
    name: "Ocean Blue",
    description: "Blue-tinted background, white cards, blue accent",
    colors: {
      mainColor: "#1565c0", backgroundColor: "#edf2fa", textColor: "#0a1628",
      categoryActive: "#1565c0", categoryActiveText: "#ffffff", categoryActiveIcon: "#ffffff",
      categoryUnActive: "#d8e4f4", categoryUnactiveText: "#5a7aa0", categoryUnactiveIcon: "#5a7aa0", homepageCategoriesBackgroundColor: "#e2ebf6",
      BoxColor: "#ffffff", BoxTextColor: "#0a1628", BoxPriceColor: "#0d47a1",
      searchbackground: "#d8e4f4", searchTextColor: "#0a1628",
      languagebackground: "#d8e4f4", languageTextColor: "#1a3050",
      sidebarbackground: "#edf2fa", sidebartext: "#0a1628", sidebarsearch: "#d8e4f4", sidebarsearchText: "#1a3050",
      popupbackgroundColor: "#f2f6fc", popupTextColor: "#0a1628", popupbuttonText: "#ffffff", formColor: "#1a3560",
      bottomTabBarBackgroundColor: "#edf2fa",
      borderColor: "#b8cce4", homepageBackgroundColor: "#edf2fa", navigationBarBackgroundColor: "#edf2fa",
      slidingButtonBackgroundColor: "#1565c0", slidingButtonTextColor: "#ffffff",
      hplocationBackgroundColor: "#d8e4f4", hplocationTextColor: "#0a1628",
    },
  },
  {
    // LIGHT: blush pink bg #fdf0f2, white cards, dark text #2a0f18
    name: "Rose Pink",
    description: "Blush background, white cards, rose accent",
    colors: {
      mainColor: "#c2185b", backgroundColor: "#fbeff2", textColor: "#2a0f18",
      categoryActive: "#c2185b", categoryActiveText: "#ffffff", categoryActiveIcon: "#ffffff",
      categoryUnActive: "#f0d4dc", categoryUnactiveText: "#a06070", categoryUnactiveIcon: "#a06070", homepageCategoriesBackgroundColor: "#f5e0e6",
      BoxColor: "#ffffff", BoxTextColor: "#2a0f18", BoxPriceColor: "#ad1457",
      searchbackground: "#f0d4dc", searchTextColor: "#2a0f18",
      languagebackground: "#f0d4dc", languageTextColor: "#4a1828",
      sidebarbackground: "#fbeff2", sidebartext: "#2a0f18", sidebarsearch: "#f0d4dc", sidebarsearchText: "#4a1828",
      popupbackgroundColor: "#fdf4f6", popupTextColor: "#2a0f18", popupbuttonText: "#ffffff", formColor: "#5a1830",
      bottomTabBarBackgroundColor: "#fbeff2",
      borderColor: "#e0b8c4", homepageBackgroundColor: "#fbeff2", navigationBarBackgroundColor: "#fbeff2",
      slidingButtonBackgroundColor: "#c2185b", slidingButtonTextColor: "#ffffff",
      hplocationBackgroundColor: "#f0d4dc", hplocationTextColor: "#2a0f18",
    },
  },
];
