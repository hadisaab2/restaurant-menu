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
import ProductParam from "../theme3/ProductParam";
import Share from "../theme3/popup/share";
import { InstallPrompt } from "./installPrompt";
import NavigationBar from "../theme3/NavigationBar";
import BottomTabBar from "../theme3/BottomTabBar";
import CartAnimation from "../theme3/CartAnimation";
import MenuSplitView from "./MenuSplitView";
import { trackVisit, trackPageView } from "../../utilities/analyticsTracking";

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
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );

  let features = {};
  try {
    features = JSON.parse(restaurant?.features || "{}");
  } catch (_) {
    features = {};
  }

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
    window.history.pushState({}, "");
    popupHandler("location");
  };

  const handleFeedbackClick = () => {
    window.history.pushState({}, "");
    popupHandler("feedback");
  };

  const handleContactClick = () => {
    window.history.pushState({}, "");
    popupHandler("contactForm");
  };

  const handleAboutClick = () => {
    window.history.pushState({}, "");
    popupHandler("about");
  };

  const handleOrderClick = () => {
    if (features?.cart) popupHandler("cart");
  };

  const [showPopup, setshowPopup] = useState(null);
  const [searchText, setSearchText] = useState("");
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
  };

  const popupHandler = (type) => {
    if (type == null) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setshowPopup(type);
  };

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
    const checkProductDetails = () => {
      const urlParams = new URLSearchParams(window.location.search);
      setIsProductDetailsOpen(urlParams.get("productId") !== null);
    };
    checkProductDetails();
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      setTimeout(checkProductDetails, 0);
    };
    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args);
      setTimeout(checkProductDetails, 0);
    };
    window.addEventListener("popstate", checkProductDetails);
    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener("popstate", checkProductDetails);
    };
  }, [searchParams]);

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

  return (
    <Container id="wrapper">
      <NavigationBar
        onProductsClick={handleProductsClick}
        onSocialMediaClick={handleSocialMediaClick}
        onBranchesClick={handleBranchesClick}
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

      <MenuWrapper onClick={handleClickOutside}>
        <BlurOverlay showPopup={showPopup} />

        {activeCategory && theme1Categories.length > 0 && (
          <MenuSplitView
            categories={theme1Categories}
            activeCategory={activeCategory}
            onCategoryChange={setactiveCategoryWithUrl}
            searchText={searchText}
            setSearchText={setSearchText}
            menu={restaurant?.categories || []}
            showPopup={showPopup}
          />
        )}
      </MenuWrapper>

      <LocationPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
      />
      {features?.cart && (
        <CartPopup
          restaurant={restaurant}
          showPopup={showPopup}
          popupHandler={popupHandler}
        />
      )}
      <Share
        showPopup={showPopup}
        popupHandler={popupHandler}
        activeCategory={activeCategory}
      />
      <ContactPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
      />
      <FeedbackPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
        isPage={false}
      />
      <ContactFormPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
        isPage={false}
      />
      <AboutUsPopup showPopup={showPopup} popupHandler={popupHandler} />
      <SideBar
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
          window.history.pushState({}, "");
          popupHandler("location");
        }}
        branches={restaurant?.branches || []}
      />
      {productId && (
        <ProductParam
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

      <BottomTabBar
        isProductDetailsOpen={isProductDetailsOpen || showPopup === "about"}
        activeView={"products"}
        showPopup={showPopup}
        onHomeClick={handleBackToHome}
        hideHome
        onCategoriesClick={() => {
          // Theme1 does not have a separate categories page.
          handleBackToHome();
        }}
        onCartClick={() => {
          if (features?.cart) popupHandler("cart");
        }}
        onBranchesClick={() => {
          window.history.pushState({}, "");
          popupHandler("location");
        }}
        onContactClick={handleContactClick}
        onFeedbackClick={handleFeedbackClick}
        restaurantName={restaurantName}
        branches={restaurant?.branches || []}
      />

      <CartAnimation
        trigger={cartAnimationTrigger}
        sourceElement={cartAnimationSource}
        onComplete={() => {}}
      />
    </Container>
  );
}
