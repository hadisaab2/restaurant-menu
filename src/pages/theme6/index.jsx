import React, { useCallback, useEffect, useState } from "react";
import {
  BlurOverlay,
  Container,
  MenuWrapper,
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
import BottomTabBar from "./BottomTabBar";
import { trackVisit, trackPageView } from "../../utilities/analyticsTracking";

export default function Theme2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const categoryId = searchParams.get("categoryId");
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

  const [showPopup, setshowPopup] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [showSidebar, setshowSidebar] = useState(null);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPopup, setShowInstallPopup] = useState(true);
  const [activeTab, setActiveTab] = useState("menu");

  const showAllItemsCategory =
    (Number(restaurant?.template_id) === 2 ||
      Number(restaurant?.template_id) === 6) &&
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
    const items = state.cart[restaurantName] || [];
    return items.reduce((total, item) => total + item.quantity, 0);
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
      popupHandler(null);
    }
  };

  useEffect(() => {
    if (restaurant?.id) {
      const branchId = restaurant?.branches?.[0]?.id || null;
      trackVisit(restaurant.id, branchId);
      trackPageView(restaurant.id, branchId);
    }
  }, [restaurant?.id]);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowInstallPopup(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

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

  const handleMenuTab = () => {
    setActiveTab("menu");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchTab = () => {
    setActiveTab("search");
    const searchEl = document.getElementById("theme6-search-input");
    if (searchEl) {
      searchEl.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => searchEl.focus(), 300);
    }
  };

  const handleCartTab = () => {
    if (!features?.cart) return;
    setActiveTab("cart");
    window.history.pushState({}, "");
    popupHandler("cart");
  };

  const handleMoreTab = () => {
    setActiveTab("more");
    window.history.pushState({}, "");
    popupHandler("location");
  };

  return (
    <Container id="wrapper">
      <MenuWrapper onClick={handleClickOutside}>
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
          showMenuSlider={showMenuSlider}
          sliderImages={sliderImages}
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
        activeTab={activeTab}
        activeLanguage={activeLanguage}
        cartEnabled={!!features?.cart}
        cartCount={itemCount}
        onMenuClick={handleMenuTab}
        onSearchClick={handleSearchTab}
        onCartClick={handleCartTab}
        onMoreClick={handleMoreTab}
      />
    </Container>
  );
}
