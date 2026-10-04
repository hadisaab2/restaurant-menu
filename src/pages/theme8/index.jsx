import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Container, Theme8GlobalStyle, MenuLayout, ProductsArea, SectionTitle, PageContainer } from "./styles";
import Header from "./Header";
import CategoryNav from "./CategoryNav";
import CategorySidebar from "./CategorySidebar";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import BottomNav from "./BottomNav";
import StickyCartBar from "./StickyCartBar";
import SearchOverlay from "./SearchOverlay";
import MoreSheet from "./MoreSheet";
import RestaurantInfoSheet from "./RestaurantInfoSheet";
import PromotionsCarousel from "./PromotionsCarousel";
import Footer from "./Footer";
import CartPopup from "./popup/cart";
import LocationPopup from "./popup/location";
import Share from "./popup/share";
import FeedbackPopup from "../theme3/popup/feedback";
import ContactFormPopup from "../theme3/popup/contactForm";
import AboutUsPopup from "../theme4/popup/aboutUs";
import ProductParam from "./ProductParam";
import { InstallPrompt } from "./installPrompt";
import { addToCart } from "../../redux/cart/cartActions";
import { changelanuage } from "../../redux/restaurant/restaurantActions";
import { trackVisit, trackPageView, trackAddToCart as trackAddToCartAnalytics } from "../../utilities/analyticsTracking";
import { getCurrencySymbol } from "../../utilities/getCurrencySymbol";
import { convertPrice } from "../../utilities/convertPrice";
import { t } from "./i18n";
import { getImageUrl } from "../../utilities/imageUrl";
import styled from "styled-components";

/* ── Extra styled components for the page ── */
const RestoSection = styled.section`
  padding: var(--sp-5) 0 var(--sp-4);
`;

const RestoCard = styled.div`
  display: flex;
  gap: var(--sp-4);
  align-items: flex-start;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--sp-4);
`;

const RestoAvatar = styled.div`
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
`;

const RestoBody = styled.div`
  flex: 1;
  min-width: 0;
`;

const RestoName = styled.h1`
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--sp-1);
  [dir="rtl"] & { font-family: var(--font-ar); }
`;

const RestoTagline = styled.p`
  font-size: var(--text-sm);
  color: var(--c-text-2);
  margin-bottom: var(--sp-3);
`;

const ProductSection = styled.section`
  margin-bottom: var(--sp-8);
`;

const ProductSectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--sp-4);
`;

const ProductSectionCount = styled.span`
  font-size: var(--text-xs);
  color: var(--c-text-3);
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--sp-3);
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Spacer = styled.div`
  height: calc(var(--bnav-h) + var(--cart-bar-h) + var(--sp-4));
  @media (min-width: 768px) { height: var(--sp-8); }
`;

/* ── Main Theme8 Component ── */
export default function Theme8() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www" && subdomain !== "api" && subdomain !== "staging-api"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const cartItems = useSelector((state) => state.cart[restaurantName] || []);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // State
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showPopup, setShowPopup] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  const [activeTab, setActiveTab] = useState("home");
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPopup, setShowInstallPopup] = useState(true);
  const sectionRefs = useRef({});

  // RTL
  useEffect(() => {
    document.documentElement.setAttribute("dir", activeLanguage === "ar" ? "rtl" : "ltr");
    return () => document.documentElement.removeAttribute("dir");
  }, [activeLanguage]);

  // Analytics
  useEffect(() => {
    if (restaurant?.id) {
      const branchId = restaurant?.branches?.[0]?.id || null;
      trackVisit(restaurant.id, branchId);
      trackPageView(restaurant.id, branchId);
    }
  }, [restaurant?.id]);

  // PWA
  useEffect(() => {
    const handler = (e) => { e.preventDefault(); setDeferredPrompt(e); setShowInstallPopup(true); };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShowInstallPopup(false);
  };

  // Features
  let features = {};
  try { features = JSON.parse(restaurant?.features || "{}"); } catch { features = {}; }

  // Categories
  const sortedCategories = useMemo(() => {
    const cats = [...(restaurant?.categories || [])].sort(
      (a, b) => (b.priority || 0) - (a.priority || 0) || (a.id || 0) - (b.id || 0)
    );
    return cats;
  }, [restaurant?.categories]);

  // Set initial active category
  useEffect(() => {
    if (!activeCategory && sortedCategories.length > 0) {
      setActiveCategory(sortedCategories[0].id);
    }
  }, [sortedCategories, activeCategory]);

  // All products flat
  const allProducts = useMemo(() => {
    return sortedCategories.flatMap(cat =>
      (cat.products || []).filter(p => !p.hide).map(p => ({ ...p, _categoryId: cat.id }))
    );
  }, [sortedCategories]);

  // Filtered products
  const filteredCategories = useMemo(() => {
    return sortedCategories.map(cat => {
      let products = (cat.products || []).filter(p => !p.hide);

      // Apply filter
      if (activeFilter === "best_seller") products = products.filter(p => p.is_best_seller);
      else if (activeFilter === "new") products = products.filter(p => p.new);
      else if (activeFilter === "offers") products = products.filter(p => p.discount && p.discount > 0);
      else if (activeFilter === "popular") products = products.filter(p => p.featured);

      // Apply search
      if (searchText.trim()) {
        const q = searchText.toLowerCase();
        products = products.filter(p => {
          const name = activeLanguage === "ar" ? (p.ar_name || p.en_name) : p.en_name;
          return name?.toLowerCase().includes(q);
        });
      }

      // Apply sort
      if (sortBy === "popular") products = [...products].sort((a, b) => (b.is_best_seller ? 1 : 0) - (a.is_best_seller ? 1 : 0));
      else if (sortBy === "price_low") products = [...products].sort((a, b) => (parseFloat(a.en_price) || 0) - (parseFloat(b.en_price) || 0));
      else if (sortBy === "price_high") products = [...products].sort((a, b) => (parseFloat(b.en_price) || 0) - (parseFloat(a.en_price) || 0));
      else if (sortBy === "newest") products = [...products].sort((a, b) => (b.id || 0) - (a.id || 0));

      return { ...cat, filteredProducts: products };
    }).filter(cat => cat.filteredProducts.length > 0);
  }, [sortedCategories, activeFilter, sortBy, searchText, activeLanguage]);

  // Scroll spy for category nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.dataset.categoryId);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [filteredCategories]);

  // Handlers
  const popupHandler = (type) => {
    if (type == null) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";
    setShowPopup(type);
  };

  useEffect(() => {
    const popup = searchParams.get("popup");
    if (popup === "feedback" || popup === "contactForm") {
      popupHandler(popup);
      const next = new URLSearchParams(searchParams);
      next.delete("popup");
      setSearchParams(next, { replace: true });
    }
  }, []);

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    const el = sectionRefs.current[catId];
    if (el) {
      const headerOffset = 56 + 44 + 16; // header + catNav + gap
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleProductClick = (product) => {
    const next = new URLSearchParams(searchParams);
    next.set("productId", product.id);
    setSearchParams(next);
  };

  const handleQuickAdd = (product, e) => {
    dispatch(addToCart(restaurantName, product, 1, {}, parseFloat(product.en_price) || 0, "", "both"));
    trackAddToCartAnalytics(restaurant?.id, product.id, 1);
    toast.success(activeLanguage === "ar" ? "تمت الإضافة!" : "Added to cart!", { position: "bottom-center", autoClose: 1500 });
  };

  const handleLanguageToggle = () => {
    const newLang = activeLanguage === "ar" ? "en" : "ar";
    dispatch(changelanuage({ name: restaurantName, activeLanguage: newLang }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    else if (tab === "menu") {
      const firstSection = document.querySelector("[data-category-id]");
      if (firstSection) {
        const top = firstSection.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    else if (tab === "search") setShowSearch(true);
    else if (tab === "cart") {
      if (features?.cart) { window.history.pushState({}, ""); popupHandler("cart"); }
    }
    else if (tab === "more") setShowMore(true);
  };

  const handleMoreAction = (action) => {
    switch (action) {
      case "info": setShowInfo(true); break;
      case "hours": setShowInfo(true); break;
      case "branches": window.history.pushState({}, ""); popupHandler("location"); break;
      case "contact": window.history.pushState({}, ""); popupHandler("contactForm"); break;
      case "about": window.history.pushState({}, ""); popupHandler("about"); break;
      case "share": window.history.pushState({}, ""); popupHandler("share"); break;
      case "feedback": window.history.pushState({}, ""); popupHandler("feedback"); break;
    }
  };

  // Theme colors
  let themeObj = {};
  try { themeObj = typeof restaurant?.theme === "string" ? JSON.parse(restaurant.theme) : (restaurant?.theme || {}); } catch { themeObj = {}; }

  const sliderImages = restaurant?.sliderImages || [];
  const showSlider = (restaurant?.show_slider_image === true || restaurant?.show_slider_image === 1 || restaurant?.show_slider_image === "1") && sliderImages.length > 0;
  const slogan = activeLanguage === "ar" ? (restaurant?.ar_slogan || restaurant?.en_slogan) : (restaurant?.en_slogan || "");
  const sloganSub = activeLanguage === "ar" ? (restaurant?.ar_slogan_subtext || restaurant?.en_slogan_subtext) : (restaurant?.en_slogan_subtext || "");

  return (
    <Container>
      <Theme8GlobalStyle
        $mainColor={themeObj.mainColor}
        $bgColor={themeObj.backgroundColor}
        $textColor={themeObj.textColor}
        $mainColorHover={themeObj.mainColor ? themeObj.mainColor + "dd" : undefined}
      />

      {/* Header */}
      <Header
        restaurant={restaurant}
        restaurantName={restaurantName}
        activeLanguage={activeLanguage}
        cartCount={cartCount}
        onCartClick={() => { if (features?.cart) { window.history.pushState({}, ""); popupHandler("cart"); } }}
        onLanguageToggle={handleLanguageToggle}
        onSearchChange={setSearchText}
        searchText={searchText}
        onMobileSearchOpen={() => setShowSearch(true)}
        onLogoClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      {/* Restaurant Info */}
      <RestoSection>
        <RestoCard>
          <RestoAvatar>
            {restaurant?.logoURL ? (
              <img src={getImageUrl(restaurant.logoURL)} alt="" />
            ) : (restaurant?.name || "M").charAt(0).toUpperCase()}
          </RestoAvatar>
          <RestoBody>
            <RestoName>{restaurant?.name || restaurantName}</RestoName>
            {(slogan || sloganSub) && <RestoTagline>{slogan || sloganSub}</RestoTagline>}
          </RestoBody>
        </RestoCard>
      </RestoSection>

      {/* Promotions — slider images */}
      {showSlider && (
        <PromotionsCarousel sliderImages={sliderImages} activeLanguage={activeLanguage} />
      )}

      {/* Category Nav (mobile) */}
      <CategoryNav
        categories={sortedCategories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
        activeLanguage={activeLanguage}
      />

      {/* Menu Layout */}
      <MenuLayout>
        {/* Category Sidebar (desktop) */}
        <CategorySidebar
          categories={sortedCategories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
          activeLanguage={activeLanguage}
        />

        {/* Products Area */}
        <ProductsArea>
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            sortBy={sortBy}
            onSortChange={setSortBy}
            activeLanguage={activeLanguage}
          />

          {filteredCategories.map((cat) => {
            const catName = activeLanguage === "ar" ? cat.ar_category : cat.en_category;
            return (
              <ProductSection
                key={cat.id}
                ref={(el) => { sectionRefs.current[cat.id] = el; }}
                data-category-id={cat.id}
              >
                <ProductSectionHeader>
                  <SectionTitle>{catName}</SectionTitle>
                  <ProductSectionCount>
                    {cat.filteredProducts.length} {cat.filteredProducts.length === 1 ? t("item", activeLanguage) : t("items", activeLanguage)}
                  </ProductSectionCount>
                </ProductSectionHeader>
                <ProductGrid>
                  {cat.filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      activeLanguage={activeLanguage}
                      currency={restaurant?.currency}
                      onProductClick={handleProductClick}
                      onQuickAdd={handleQuickAdd}
                      layout="horizontal"
                    />
                  ))}
                </ProductGrid>
              </ProductSection>
            );
          })}
        </ProductsArea>
      </MenuLayout>

      {/* Footer */}
      <Footer restaurant={restaurant} activeLanguage={activeLanguage} />

      {/* Bottom spacer for mobile nav */}
      <Spacer />

      {/* Bottom Nav (mobile) */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={handleTabChange}
        cartCount={cartCount}
        activeLanguage={activeLanguage}
      />

      {/* Sticky Cart Bar (mobile) */}
      <StickyCartBar
        cartCount={cartCount}
        cartTotal={cartTotal}
        currency={restaurant?.currency}
        onViewCart={() => { if (features?.cart) { window.history.pushState({}, ""); popupHandler("cart"); } }}
        activeLanguage={activeLanguage}
      />

      {/* Search Overlay (mobile) */}
      <SearchOverlay
        show={showSearch}
        onClose={() => setShowSearch(false)}
        categories={sortedCategories}
        activeLanguage={activeLanguage}
        currency={restaurant?.currency}
        onProductClick={handleProductClick}
      />

      {/* More Sheet */}
      <MoreSheet
        show={showMore}
        onClose={() => setShowMore(false)}
        onAction={handleMoreAction}
        activeLanguage={activeLanguage}
      />

      {/* Restaurant Info Sheet */}
      <RestaurantInfoSheet
        show={showInfo}
        onClose={() => setShowInfo(false)}
        restaurant={restaurant}
        activeLanguage={activeLanguage}
      />

      {/* Popups from existing theme8 */}
      <LocationPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />
      {features?.cart && <CartPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />}
      <Share showPopup={showPopup} popupHandler={popupHandler} activeCategory={activeCategory} />
      <FeedbackPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />
      <ContactFormPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />
      <AboutUsPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />

      {/* Product Detail */}
      {productId && <ProductParam productId={productId} searchParams={searchParams} setSearchParams={setSearchParams} />}

      {/* PWA Install */}
      {features?.install_app && (
        <InstallPrompt
          showInstallPopup={showInstallPopup}
          onInstall={handleInstallClick}
          restaurantName={restaurantName}
          onDismiss={() => setShowInstallPopup(false)}
        />
      )}
    </Container>
  );
}
