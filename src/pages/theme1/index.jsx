import React, { useEffect, useState } from "react";
import {
  BlurOverlay,
  Cart,
  CartBtn,
  Container,
  DetailsBtn,
  Location,
  MenuWrapper,
  Number,
  ParamProductContainer,
  LanguageNavigator,
  LanguageButton,
} from "./styles";
import { FaGlobe } from "react-icons/fa";
import Header from "./Header";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changelanuage } from "../../redux/restaurant/restaurantActions";
import Products from "./products";
import LocationPopup from "./popup/location";
import CartPopup from "./popup/cart";
import SideBar from "./Sidebar";
import ProductParam from "./ProductParam";
import Share from "./popup/share";
import { InstallPrompt } from "./installPrompt";
import CategoriesGrid from "./CategoriesGrid";
import CategoryHeader from "./CategoryHeader";
import HomePage from "./HomePage";

export default function Theme3() {
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
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const dispatch = useDispatch();

  const handleLanguage = (lang) => {
    dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));
  };

  const [showPopup, setshowPopup] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [showSidebar, setshowSidebar] = useState(null);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPopup, setShowInstallPopup] = useState(true);

  const [carouselPosition, setcarouselPosition] = useState(!categoryId?0:restaurant?.categories?.findIndex(category => category.id == categoryId) || 0);
 
  // State to track if we're viewing home, categories, or products
  const [viewMode, setViewMode] = useState(categoryId ? "products" : "home");

  const itemCount = useSelector((state) => {
    const items = state.cart[restaurantName] || []; // Access cart by restaurant name, default to empty array if not found
    return items.reduce((total, item) => total + item.quantity, 0); // Sum up all quantities in the restaurant's cart
  });
  const [activeCategory, setactiveCategory] = useState(
    categoryId ? categoryId : null
  );

  // Handle explore click - switch from home to categories view
  const handleExploreClick = (categoryId = null) => {
    if (categoryId) {
      // Direct category click from home page
      handleCategoryClick(categoryId);
    } else {
      // General explore button - go to categories
      setViewMode("categories");
    }
  };

  // Handle category click - switch to products view
  const handleCategoryClick = (categoryId) => {
    setactiveCategory(categoryId);
    setViewMode("products");
    // Update URL with categoryId
    const newParams = new URLSearchParams(searchParams);
    newParams.set("categoryId", categoryId);
    setSearchParams(newParams);
  };

  // Handle back button - return to categories view
  const handleBackToCategories = () => {
    setViewMode("categories");
    setactiveCategory(null);
    // Remove categoryId from URL
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("categoryId");
    setSearchParams(newParams);
  };

  // Handle back to home
  const handleBackToHome = () => {
    setViewMode("home");
    setactiveCategory(null);
    // Clear all URL params
    setSearchParams({});
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
  
  let features=JSON.parse(restaurant?.features || "{}")
  
  // Handle URL categoryId changes
  useEffect(() => {
    if (categoryId) {
      setactiveCategory(categoryId);
      setViewMode("products");
    } else if (searchParams.toString() === "") {
      // Only show home if no URL params
      setViewMode("home");
      setactiveCategory(null);
    } else {
      setViewMode("categories");
      setactiveCategory(null);
    }
  }, [categoryId, searchParams]);

  return (
    <Container id="wrapper">
      <MenuWrapper onClick={handleClickOutside} >
        <BlurOverlay showPopup={showPopup} />
        
        {/* Show Home Page */}
        {viewMode === "home" && (
          <HomePage
            onExploreClick={handleExploreClick}
            onToggleSidebar={() => setshowSidebar(!showSidebar)}
            onOrdersClick={() => {
              window.history.pushState({}, ""); // Add a history entry
              popupHandler("cart");
            }}
          />
        )}

        {/* Show HeaderTop only (logo and menu) */}
        {viewMode === "categories" && (
          <Header
            categories={restaurant?.categories || []}
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
        )}

        {/* Show Category Header when viewing products, but not when viewing a product directly */}
        {viewMode === "products" && activeCategory && !productId && (
          <CategoryHeader
            categoryId={activeCategory}
            categories={restaurant?.categories || []}
            onBack={handleBackToCategories}
            searchText={searchText}
            setSearchText={setSearchText}
            setshowSidebar={setshowSidebar}
            showSidebar={showSidebar}
          />
        )}

        {/* Show Categories Grid initially */}
        {viewMode === "categories" && (
          <CategoriesGrid
            categories={
              searchText
                ? (restaurant?.categories || []).filter((cat) =>
                    activeLanguage === "en"
                      ? cat.en_category.toLowerCase().includes(searchText.toLowerCase())
                      : cat.ar_category.toLowerCase().includes(searchText.toLowerCase())
                  )
                : restaurant?.categories || []
            }
            onCategoryClick={handleCategoryClick}
          />
        )}

        {/* Show Products when a category is selected */}
        {viewMode === "products" && activeCategory && (
          <Products
            menu={restaurant?.categories || []}
            activeCategory={activeCategory}
            showPopup={showPopup}
            searchText={searchText}
            setactiveCategory={setactiveCategory}
            setcarouselPosition={setcarouselPosition}
            carouselPosition={carouselPosition}
            categories={restaurant?.categories || []}
          />
        )}
      </MenuWrapper>
      {viewMode !== "home" && (
        <DetailsBtn onClick={() => {
          window.history.pushState({}, ""); // Add a history entry
          popupHandler("location")
        }}>
          <Location />
        </DetailsBtn>
      )}
      {viewMode !== "home" && features?.cart && (
        <CartBtn onClick={() => {
          window.history.pushState({}, ""); // Add a history entry
          popupHandler("cart")
        }}>
          <Number>{itemCount}</Number>
          <Cart />
        </CartBtn>
      )}
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
        categories={restaurant?.categories || []}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        setshowSidebar={setshowSidebar}
        showSidebar={showSidebar}
        setcarouselPosition={setcarouselPosition}
        onHomeClick={handleBackToHome}
        onCategoryClick={handleCategoryClick}
      />
      {productId &&<ProductParam productId={productId} searchParams={searchParams} setSearchParams={setSearchParams} />}
      {features?.install_app && <InstallPrompt showInstallPopup={showInstallPopup} onInstall={handleInstallClick} restaurantName={restaurantName} onDismiss={() => setShowInstallPopup(false)} />}

    </Container>
  );
}
