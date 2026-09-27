import React, { useEffect, useRef, useState } from "react";
import {
  BlurOverlay,
  Container,
  MenuWrapper,
} from "./styles";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import LocationPopup from "../theme3/popup/location";
import CartPopup from "../theme3/popup/cart";
import FeedbackPopup from "../theme3/popup/feedback";
import ContactPopup from "../theme3/popup/contact";
import ContactFormPopup from "../theme3/popup/contactForm";
import AboutUsPopup from "../theme4/popup/aboutUs";
import SideBar from "../theme3/Sidebar";
import ProductParam from "../theme2/ProductParam";
import Share from "../theme3/popup/share";
import { InstallPrompt } from "./installPrompt";
import NavigationBar from "../theme3/NavigationBar";
import CartAnimation from "../theme3/CartAnimation";
import MenuSplitView from "./MenuSplitView";
import Theme12MenuSlider from "../../components/Theme12MenuSlider";
import { enabled, parseFeatures } from "./menuHelpers";
import { Theme1Polish } from "./polish.styles";
import Theme1BottomNav from "./BottomNav";
import { trackVisit, trackPageView, trackSearch } from "../../utilities/analyticsTracking";

export default function Theme1() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const categoryId = searchParams.get("categoryId");
  const page = searchParams.get("page");
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
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

  const rawFeatures = parseFeatures(restaurant?.features);
  const features = Object.fromEntries(Object.entries(rawFeatures).map(([key, value]) => [key, enabled(value)]));

  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      activeLanguage === "ar" ? "rtl" : "ltr"
    );
    return () => document.documentElement.removeAttribute("dir");
  }, [activeLanguage]);

  const showAllItemsCategory =
    Number(restaurant?.template_id) === 1 &&
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
  const sortedCategories = [...(restaurant?.categories || [])].sort(
    (a, b) =>
      (b.priority || 0) - (a.priority || 0) || (a.id || 0) - (b.id || 0)
  );
  const theme1Categories = showAllItemsCategory
    ? [allItemsCategory, ...sortedCategories]
    : sortedCategories;

  const handleExploreClick = (catId = null) => {
    const first = theme1Categories[0]?.id;
    const id = catId ?? first;
    if (!id) return;
    setactiveCategory(id);
    setViewMode("menu");
    setSearchText("");
    const newParams = new URLSearchParams(searchParams);
    newParams.set("categoryId", String(id));
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    // Theme1 does not have a homepage. Always return to menu view.
    setViewMode("menu");
    const first = theme1Categories?.[0]?.id;
    if (first) {
      setactiveCategory(first);
      setSearchText("");
      const next = new URLSearchParams(searchParams);
      next.set("categoryId", String(first));
      setSearchParams(next);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleProductsClick = () => {
    // "Products" behaves like going to the menu top.
    handleBackToHome();
  };

  const handleSocialMediaClick = () => {
    // No homepage in theme1; just return to menu.
    handleBackToHome();
  };

  const handleBranchesClick = () => {
    popupHandler("location");
  };

  const handleFeedbackClick = () => {
    popupHandler("feedback");
  };

  const handleContactClick = () => {
    popupHandler("contactForm");
  };

  const handleAboutClick = () => {
    popupHandler("about");
  };

  const handleOrderClick = () => {
    if (features?.cart) popupHandler("cart");
  };

  const [showPopup, setshowPopup] = useState(null);
  const [searchText, setSearchText] = useState("");

  // Track search queries (debounced)
  useEffect(() => {
    if (!searchText || searchText.length < 2 || !restaurant?.id) return;
    const timer = setTimeout(() => {
      trackSearch(restaurant.id, searchText);
    }, 1500);
    return () => clearTimeout(timer);
  }, [searchText, restaurant?.id]);

  const [showSidebar, setshowSidebar] = useState(null);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPopup, setShowInstallPopup] = useState(true);
  const [carouselPosition, setcarouselPosition] = useState(0);
  const [viewMode, setViewMode] = useState("menu");
  const prevViewModeRef = useRef(viewMode);
  const prevPopupRef = useRef(showPopup);
  const prevSidebarRef = useRef(showSidebar);
  const [cartAnimationTrigger] = useState(0);
  const [cartAnimationSource] = useState(null);

  const [activeCategory, setactiveCategory] = useState(
    categoryId ? categoryId : null
  );

  const setactiveCategoryWithUrl = (id) => {
    setactiveCategory(id);
    const next = new URLSearchParams(searchParams);
    next.set("categoryId", String(id));
    setSearchParams(next);
    requestAnimationFrame(() => document.getElementById("theme1-menu")?.scrollIntoView({ block: "start" }));
  };

  const popupHandler = (type) => setshowPopup(type);

  const handleClickOutside = () => {
    if (showPopup != null) popupHandler(null);
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowInstallPopup(true);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);

  useEffect(() => {
    if (restaurant?.id) {
      const branchId = restaurant?.branches?.[0]?.id || null;
      trackVisit(restaurant.id, branchId);
      trackPageView(restaurant.id, branchId);
    }
  }, [restaurant?.id]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShowInstallPopup(false);
  };

  useEffect(() => {
    if (categoryId) {
      setactiveCategory(categoryId);
      setViewMode("menu");
    }
  }, [categoryId]);

  // If no categoryId exists in URL, default to the first available category.
  useEffect(() => {
    if (!restaurant?.id) return;
    if (categoryId) return;
    if (activeCategory) return;
    const first = theme1Categories?.[0]?.id;
    if (!first) return;
    setactiveCategory(first);
    setSearchText("");
    const next = new URLSearchParams(searchParams);
    next.set("categoryId", String(first));
    setSearchParams(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [restaurant?.id, categoryId, activeCategory, theme1Categories, searchParams, setSearchParams]);

  useEffect(() => {
    if (
      (productId || categoryId) &&
      showPopup &&
      (showPopup === "feedback" || showPopup === "contactForm")
    ) {
      popupHandler(null);
    }
  }, [productId, categoryId]);

  useEffect(() => {
    const prevView = prevViewModeRef.current;
    if (prevView !== viewMode) {
      if (viewMode === "menu" && !categoryId && !productId && !page) {
        window.history.pushState(
          { viewMode: "menu" },
          "",
          window.location.href
        );
      }
      prevViewModeRef.current = viewMode;
    }
  }, [viewMode, categoryId, productId, page]);

  useEffect(() => {
    const prevPopup = prevPopupRef.current;
    if (prevPopup !== showPopup) {
      if (showPopup) {
        window.history.pushState({ popup: showPopup }, "", window.location.href);
      }
      prevPopupRef.current = showPopup;
    }
  }, [showPopup]);

  useEffect(() => {
    const prevSidebar = prevSidebarRef.current;
    if (prevSidebar !== showSidebar) {
      if (showSidebar) {
        popupHandler(null);
        window.history.pushState({ sidebar: true }, "", window.location.href);
      }
      prevSidebarRef.current = showSidebar;
    }
  }, [showSidebar]);

  useEffect(() => {
    setIsProductDetailsOpen(Boolean(productId));
  }, [productId]);

  useEffect(() => {
    if (!productId && !showPopup && !showSidebar) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [productId, showPopup, showSidebar]);

  useEffect(() => {
    const handlePopState = (event) => {
      const urlParams = new URLSearchParams(window.location.search);
      const hasProductId = urlParams.get("productId");
      const hasCategoryId = urlParams.get("categoryId");
      const hasPage = urlParams.get("page");

      if (showSidebar) {
        setshowSidebar(false);
        return;
      }
      if (showPopup) {
        popupHandler(null);
        return;
      }
      if (hasProductId || hasPage || hasCategoryId) return;

      // Theme1 has no homepage: always keep on menu view.
      setViewMode("menu");
      setactiveCategory(null);
      setSearchText("");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [showPopup, showSidebar]);

  if (!restaurant) return null;

  const sliderImages = restaurant?.sliderImages || [];
  const showMenuSlider = enabled(restaurant?.show_slider_image) && sliderImages.length > 0;

  return (
    <Container id="wrapper" data-theme-one dir={activeLanguage === "ar" ? "rtl" : "ltr"}>
      <Theme1Polish />
      <NavigationBar
        variant="theme1"
        onProductsClick={handleProductsClick}
        onSocialMediaClick={handleSocialMediaClick}
        onBranchesClick={restaurant?.branches?.length ? handleBranchesClick : undefined}
        onContactFormClick={handleContactClick}
        onFeedbackClick={handleFeedbackClick}
        onAboutClick={
          restaurant?.show_about_us !== false ? handleAboutClick : undefined
        }
        onOrderClick={handleOrderClick}
        onHomeClick={undefined}
        onCategoryClick={(id) => {
          handleExploreClick(id);
        }}
        onContactClick={handleContactClick}
        categories={theme1Categories}
        activeCategory={activeCategory}
        setshowSidebar={setshowSidebar}
        showSidebar={showSidebar}
        popupHandler={popupHandler}
        isProductDetailsOpen={isProductDetailsOpen || showPopup === "about"}
      />
      {showMenuSlider && (
        <Theme12MenuSlider
          images={sliderImages}
          activeLanguage={activeLanguage}
          variant="theme1"
        />
      )}

      <MenuWrapper onClick={handleClickOutside}>
        <BlurOverlay showPopup={showPopup} />
        {(
          <MenuSplitView
            categories={theme1Categories}
            activeCategory={activeCategory}
            onCategoryChange={setactiveCategoryWithUrl}
            searchText={searchText}
            setSearchText={setSearchText}
            restaurant={restaurant}
            restaurantName={restaurantName}
            showPopup={showPopup}
          />
        )}
      </MenuWrapper>

      {showPopup === "location" && (
      <LocationPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
      />
      )}
      {features?.cart && showPopup === "cart" && (
        <CartPopup
          restaurant={restaurant}
          showPopup={showPopup}
          popupHandler={popupHandler}
          variant="theme1"
        />
      )}
      {showPopup === "share" && (
      <Share
        showPopup={showPopup}
        popupHandler={popupHandler}
        activeCategory={activeCategory}
      />
      )}
      {showPopup === "contact" && (
      <ContactPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
      />
      )}
      {showPopup === "feedback" && (
      <FeedbackPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
        isPage={false}
      />
      )}
      {showPopup === "contactForm" && (
      <ContactFormPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
        isPage={false}
      />
      )}
      {showPopup === "about" && <AboutUsPopup showPopup={showPopup} popupHandler={popupHandler} />}
      {showSidebar && <SideBar
        categories={theme1Categories}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        setshowSidebar={setshowSidebar}
        showSidebar={showSidebar}
        setcarouselPosition={setcarouselPosition}
        onHomeClick={handleBackToHome}
        onCategoryClick={(id) => {
          handleExploreClick(id);
        }}
        onFeedbackClick={handleFeedbackClick}
        onContactClick={handleContactClick}
        onBranchesClick={() => {
          popupHandler("location");
        }}
        branches={restaurant?.branches || []}
      />}
      {productId && (
        <ProductParam
          variant="theme1"
          productId={productId}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      )}
      {features?.install_app && (
        <InstallPrompt
          showInstallPopup={showInstallPopup}
          onInstall={handleInstallClick}
          restaurantName={restaurantName}
          onDismiss={() => setShowInstallPopup(false)}
        />
      )}

      <Theme1BottomNav
        hidden={Boolean(productId) || Boolean(showPopup)}
        restaurant={restaurant}
        restaurantName={restaurantName}
        onMenu={handleBackToHome}
        onCart={() => popupHandler("cart")}
        onBranches={() => popupHandler("location")}
        onFeedback={() => popupHandler("feedback")}
      />

      <CartAnimation
        trigger={cartAnimationTrigger}
        sourceElement={cartAnimationSource}
        onComplete={() => {}}
      />
    </Container>
  );
}
