import React, { useCallback, useEffect, useState } from "react";
import {
  BlurOverlay,
  Cart,
  CartBtn,
  Container,
  DetailsBtn,
  Location,
  MenuWrapper,
  CartCount,
  ParamProductContainer,
} from "./styles";
import Header from "./Header";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Products from "./products";
import LocationPopup from "./popup/location";
import CartPopup from "./popup/cart";
import SideBar from "./Sidebar";
import ProductParam from "./ProductParam";
import Share from "./popup/share";
import FeedbackPopup from "../theme3/popup/feedback";
import ContactFormPopup from "../theme3/popup/contactForm";
import AboutUsPopup from "../theme4/popup/aboutUs";
import { InstallPrompt } from "./installPrompt";
import BottomTabBar from "../theme3/BottomTabBar";
import NavigationBar from "../theme3/NavigationBar";
import { trackVisit, trackPageView } from "../../utilities/analyticsTracking";
import LandingPage from "./LandingPage";
import { IoArrowBack } from "react-icons/io5";

export default function Theme8() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const categoryId = searchParams.get("categoryId");
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );

  // Set document direction for RTL when Arabic
  useEffect(() => {
    document.documentElement.setAttribute("dir", activeLanguage === "ar" ? "rtl" : "ltr");
    return () => document.documentElement.removeAttribute("dir");
  }, [activeLanguage]);

  const [showPopup, setshowPopup] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [showSidebar, setshowSidebar] = useState(null);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPopup, setShowInstallPopup] = useState(true);
  const [showLanding, setShowLanding] = useState(() => {
    if (productId || categoryId) return false;
    return true;
  });

  const showAllItemsCategory =
    (Number(restaurant?.template_id) === 2 || Number(restaurant?.template_id) === 8) &&
    (restaurant?.show_all_items_category === true ||
      restaurant?.show_all_items_category === 1 ||
      restaurant?.show_all_items_category === "1");
  const allItemsCategory = {
    id: "all-items",
    en_category: "All Items",
    ar_category: "كل الأصناف",
    isAllItems: true,
    priority: 999999,
    image_url: restaurant?.logoURL || restaurant?.cover_url || null,
  };
  // Sort categories by priority DESC, then id ASC to match display order
  const sortedCategories = [...(restaurant?.categories || [])].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0) || (a.id || 0) - (b.id || 0)
  );
  const theme2Categories = showAllItemsCategory
    ? [allItemsCategory, ...sortedCategories]
    : sortedCategories;
  const [carouselPosition, setcarouselPosition] = useState(
    !categoryId
      ? 0
      : theme2Categories.findIndex((category) => category.id == categoryId)
  );
 

  const itemCount = useSelector((state) => {
    const items = state.cart[restaurantName] || []; // Access cart by restaurant name, default to empty array if not found
    return items.reduce((total, item) => total + item.quantity, 0); // Sum up all quantities in the restaurant's cart
  });
  const [activeCategory, setactiveCategory] = useState(
    categoryId ? categoryId : theme2Categories?.[0]?.id
  );

  const setactiveCategoryWithUrl = useCallback(
    (id) => {
      setactiveCategory(id);
      const next = new URLSearchParams(searchParams);
      if (id === "all-items") next.delete("categoryId");
      else next.set("categoryId", id);
      setSearchParams(next);
    },
    [searchParams, setSearchParams]
  );

  const popupHandler = (type) => {
    if (type == null) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setshowPopup(type);
  };

  const handleClickOutside = () => {
    if (showPopup != null) {
      popupHandler(null)
    }
  }
  
  

  
    useEffect(() => {
      if (restaurant?.id) {
        const branchId = restaurant?.branches?.[0]?.id || null;
        trackVisit(restaurant.id, branchId);
        trackPageView(restaurant.id, branchId);
      }
    }, [restaurant?.id]);

    useEffect(() => {
      // Log PWA requirements
      console.log('🔍 PWA Debug Info:');
      console.log('- Protocol:', window.location.protocol);
      console.log('- Host:', window.location.hostname);
      console.log('- Navigator:', navigator.userAgent);

      const handleBeforeInstallPrompt = (event) => {
        event.preventDefault();
        console.log('✅ Install prompt event captured!');
        setDeferredPrompt(event);
        setShowInstallPopup(true);
      };
  
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  
      // Check if app is already installed
      window.addEventListener('appinstalled', (event) => {
        console.log('🎉 Application installed successfully!');
      });
  
      return () => {
        window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      };
    }, []);
  
    const handleInstallClick = async () => {
      if (!deferredPrompt) return;
  
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
  
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install");
      } else {
        console.log("User dismissed the install");
      }
  
      setDeferredPrompt(null);
      setShowInstallPopup(false);
    };
  
  let features = {};
  try {
    features = JSON.parse(restaurant?.features || "{}");
  } catch (_) {
    features = {};
  }
  const sliderImages = restaurant?.sliderImages || [];
  const showMenuSlider =
    (restaurant?.show_slider_image === true ||
      restaurant?.show_slider_image === 1 ||
      restaurant?.show_slider_image === "1") &&
    sliderImages.length > 0;
  const handleCategorySelect = (catId) => {
    setShowLanding(false);
    setactiveCategory(catId);
    const idx = theme2Categories.findIndex((c) => c.id === catId);
    if (idx >= 0) setcarouselPosition(idx);
    const next = new URLSearchParams(searchParams);
    next.set("categoryId", catId);
    setSearchParams(next);
  };

  const handleBackToLanding = () => {
    setShowLanding(true);
    const next = new URLSearchParams(searchParams);
    next.delete("categoryId");
    next.delete("productId");
    setSearchParams(next);
  };

  // Landing page view
  if (showLanding && !productId) {
    return (
      <>
        <LandingPage
          restaurant={restaurant}
          restaurantName={restaurantName}
          categories={theme2Categories}
          sliderImages={restaurant?.sliderImages || []}
          activeLanguage={activeLanguage}
          showPopup={showPopup}
          onCategorySelect={handleCategorySelect}
          onSidebarOpen={() => setshowSidebar(true)}
          onCartClick={() => { if (features?.cart) { window.history.pushState({}, ""); popupHandler("cart"); } }}
          onBranchesClick={() => { window.history.pushState({}, ""); popupHandler("location"); }}
          onFeedbackClick={() => { window.history.pushState({}, ""); popupHandler("feedback"); }}
          popupHandler={popupHandler}
          setshowSidebar={setshowSidebar}
          showSidebar={showSidebar}
        />
        <LocationPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />
        {features?.cart && <CartPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />}
        <FeedbackPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />
        <ContactFormPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />
        <AboutUsPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />
        <SideBar
          categories={theme2Categories}
          activeCategory={activeCategory}
          setactiveCategory={(id) => handleCategorySelect(id)}
          setshowSidebar={setshowSidebar}
          showSidebar={showSidebar}
          setcarouselPosition={setcarouselPosition}
          onFeedbackClick={() => { window.history.pushState({}, ""); popupHandler("feedback"); }}
          onContactClick={() => { window.history.pushState({}, ""); popupHandler("contactForm"); }}
          onBranchesClick={() => { window.history.pushState({}, ""); popupHandler("location"); }}
          onAboutClick={() => { window.history.pushState({}, ""); popupHandler("about"); }}
          onShareClick={() => { window.history.pushState({}, ""); popupHandler("share"); }}
          branches={restaurant?.branches}
        />
      </>
    );
  }

  // Menu view (Theme2 layout with back button)
  return (
    <Container id="wrapper">
      <NavigationBar
        onProductsClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onBranchesClick={() => { window.history.pushState({}, ""); popupHandler("location"); }}
        onContactFormClick={() => { window.history.pushState({}, ""); popupHandler("contactForm"); }}
        onFeedbackClick={() => { window.history.pushState({}, ""); popupHandler("feedback"); }}
        onAboutClick={() => { window.history.pushState({}, ""); popupHandler("about"); }}
        onOrderClick={() => { if (features?.cart) { window.history.pushState({}, ""); popupHandler("cart"); } }}
        onHomeClick={undefined}
        onCategoryClick={(id) => {
          setactiveCategoryWithUrl(id);
          const idx = theme2Categories.findIndex(c => c.id === id);
          if (idx >= 0) setcarouselPosition(idx);
        }}
        onContactClick={() => { window.history.pushState({}, ""); popupHandler("contactForm"); }}
        categories={theme2Categories}
        activeCategory={activeCategory}
        setshowSidebar={setshowSidebar}
        showSidebar={showSidebar}
        popupHandler={popupHandler}
        isProductDetailsOpen={!!productId}
      />
      <MenuWrapper onClick={handleClickOutside} >
        <BlurOverlay showPopup={showPopup} />
        <Header
          categories={theme2Categories}
          activeCategory={activeCategory}
          setactiveCategory={setactiveCategoryWithUrl}
          setSearchText={setSearchText}
          searchText={searchText}
          setshowSidebar={setshowSidebar}
          showSidebar={showSidebar}
          carouselPosition={carouselPosition}
          setcarouselPosition={setcarouselPosition}
          popupHandler={popupHandler}
          showMenuSlider={false}
          sliderImages={[]}
          hideHeaderTop={true}
        />
        <Products
          menu={restaurant.categories}
          activeCategory={activeCategory}
          showPopup={showPopup}
          searchText={searchText}
          setactiveCategory={setactiveCategoryWithUrl}
          setcarouselPosition={setcarouselPosition}
          carouselPosition={carouselPosition}
          categories={theme2Categories}
        />
      </MenuWrapper>
      <LocationPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
      />
      {features?.cart && <CartPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
      />}
      <Share
        showPopup={showPopup}
        popupHandler={popupHandler}
        activeCategory={activeCategory}
      />
      <FeedbackPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
      />
      <ContactFormPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
      />
      <AboutUsPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
      />
      <SideBar
        categories={theme2Categories}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategoryWithUrl}
        setshowSidebar={setshowSidebar}
        showSidebar={showSidebar}
        setcarouselPosition={setcarouselPosition}
        onFeedbackClick={() => { window.history.pushState({}, ""); popupHandler("feedback"); }}
        onContactClick={() => { window.history.pushState({}, ""); popupHandler("contactForm"); }}
        onBranchesClick={() => { window.history.pushState({}, ""); popupHandler("location"); }}
        onAboutClick={() => { window.history.pushState({}, ""); popupHandler("about"); }}
        onShareClick={() => { window.history.pushState({}, ""); popupHandler("share"); }}
        branches={restaurant?.branches}
      />
      {productId &&<ProductParam productId={productId} searchParams={searchParams} setSearchParams={setSearchParams} />}
      {features?.install_app && <InstallPrompt showInstallPopup={showInstallPopup} onInstall={handleInstallClick} restaurantName={restaurantName} onDismiss={() => setShowInstallPopup(false)} />}

      {/* Bottom Tab Bar */}
      <BottomTabBar
        hideHome={false}
        hideCategories={true}
        activeView="products"
        showPopup={showPopup}
        onHomeClick={handleBackToLanding}
        onCategoriesClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onCartClick={() => { if (features?.cart) { window.history.pushState({}, ""); popupHandler("cart"); } }}
        onFeedbackClick={() => { window.history.pushState({}, ""); popupHandler("feedback"); }}
        onBranchesClick={() => { window.history.pushState({}, ""); popupHandler("location"); }}
        restaurantName={restaurantName}
        branches={restaurant?.branches}
      />
    </Container>
  );
}
