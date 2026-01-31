import React, { useEffect, useState } from "react";
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
import { InstallPrompt } from "./installPrompt";

export default function Theme2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId"); // Get productId from URL
  const categoryId = searchParams.get("categoryId"); // Get productId from URL
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);

  const [showPopup, setshowPopup] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [showSidebar, setshowSidebar] = useState(null);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPopup, setShowInstallPopup] = useState(true);

  const showAllItemsCategory =
    Number(restaurant?.template_id) === 2 &&
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
  
  let features=JSON.parse(restaurant.features)
  return (
    <Container id="wrapper">
      <MenuWrapper onClick={handleClickOutside} >
        <BlurOverlay showPopup={showPopup} />
        <Header
          categories={theme2Categories}
          activeCategory={activeCategory}
          setactiveCategory={setactiveCategory}
          setSearchText={setSearchText}
          searchText={searchText}
          setshowSidebar={setshowSidebar}
          showSidebar={showSidebar}
          carouselPosition={carouselPosition}
          setcarouselPosition={setcarouselPosition}
          popupHandler={popupHandler}
        />
        <Products
          menu={restaurant.categories}
          activeCategory={activeCategory}
          showPopup={showPopup}
          searchText={searchText}
          setactiveCategory={setactiveCategory}
          setcarouselPosition={setcarouselPosition}
          carouselPosition={carouselPosition}
          categories={theme2Categories}
        />
      </MenuWrapper>
      <DetailsBtn onClick={() => {
        window.history.pushState({}, ""); // Add a history entry
        popupHandler("location")
      }}>
        <Location />
      </DetailsBtn>
      {features?.cart &&<CartBtn onClick={() => {
        window.history.pushState({}, ""); // Add a history entry
        popupHandler("cart")
      }}>
        <CartCount>{itemCount}</CartCount>
        <Cart />
      </CartBtn>}
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
      <SideBar
        categories={theme2Categories}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        setshowSidebar={setshowSidebar}
        showSidebar={showSidebar}
        setcarouselPosition={setcarouselPosition}

      />
      {productId &&<ProductParam productId={productId} searchParams={searchParams} setSearchParams={setSearchParams} />}
      {features?.install_app && <InstallPrompt showInstallPopup={showInstallPopup} onInstall={handleInstallClick} restaurantName={restaurantName} onDismiss={() => setShowInstallPopup(false)} />}

    </Container>
  );
}
