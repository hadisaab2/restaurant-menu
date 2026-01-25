import React, { useEffect, useRef, useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { changelanuage } from "../../redux/restaurant/restaurantActions";
import Products from "./products";
import LocationPopup from "./popup/location";
import CartPopup from "./popup/cart";
import FeedbackPopup from "./popup/feedback";
import ContactPopup from "./popup/contact";
import ContactFormPopup from "./popup/contactForm";
import SideBar from "./Sidebar";
import ProductParam from "./ProductParam";
import Share from "./popup/share";
import { InstallPrompt } from "./installPrompt";
import CategoriesGrid from "./CategoriesGrid";
import CategoryHeader from "./CategoryHeader";
import HomePage from "./HomePage";
import NavigationBar from "./NavigationBar";

export default function Theme3() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId"); // Get productId from URL
  const categoryId = searchParams.get("categoryId"); // Get productId from URL
  const page = searchParams.get("page");
  const isFeedbackPage = page === "feedback";
  const isContactPage = page === "contact";
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
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
  const showAllItemsCategory =
    Number(restaurant?.template_id) === 3 &&
    (restaurant?.show_all_items_category === true ||
      restaurant?.show_all_items_category === 1 ||
      restaurant?.show_all_items_category === "1");
  const allItemsCategory = {
    id: "all-items",
    en_category: "All Items",
    ar_category: "كل الأصناف",
    isAllItems: true,
    priority: 999999,
  };
  const theme3Categories = showAllItemsCategory
    ? [allItemsCategory, ...(restaurant?.categories || [])]
    : restaurant?.categories || [];

  const handleLanguage = (lang) => {
    dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));
  };

  // Navigation handlers
  const handleProductsClick = () => {
    if (viewMode === "home") {
      handleExploreClick();
    } else if (viewMode === "products") {
      handleBackToCategories();
    } else {
      // Already in categories view
      setViewMode("categories");
    }
  };

  const handleSocialMediaClick = () => {
    // Scroll to social media section on home page, or go to home if not there
    if (viewMode !== "home") {
      handleBackToHome();
      // Wait for home to render, then scroll
      setTimeout(() => {
        const socialSection = document.getElementById("social-media-section");
        if (socialSection) {
          socialSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const socialSection = document.getElementById("social-media-section");
      if (socialSection) {
        socialSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleBranchesClick = () => {
    window.history.pushState({}, "");
    popupHandler("contact");
  };

  const handleFeedbackClick = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "feedback");
    newParams.delete("productId");
    newParams.delete("categoryId");
    setSearchParams(newParams);
    popupHandler(null);
    setViewMode("home");
  };

  const handleContactClick = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "contact");
    newParams.delete("productId");
    newParams.delete("categoryId");
    setSearchParams(newParams);
    popupHandler(null);
    setViewMode("home");
  };

  const handleOrderClick = () => {
    // Open cart popup
    if (features?.cart) {
      popupHandler("cart");
    }
  };

  const [showPopup, setshowPopup] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [showSidebar, setshowSidebar] = useState(null);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPopup, setShowInstallPopup] = useState(true);

  const initialCarouselIndex = (() => {
    if (!categoryId) return 0;
    const index = theme3Categories.findIndex((category) => category.id == categoryId);
    return index >= 0 ? index : 0;
  })();
  const [carouselPosition, setcarouselPosition] = useState(initialCarouselIndex);
 
  // State to track if we're viewing home, categories, or products
  const [viewMode, setViewMode] = useState(categoryId ? "products" : "home");
  const prevViewModeRef = useRef(viewMode);
  const prevPopupRef = useRef(showPopup);
  const prevSidebarRef = useRef(showSidebar);

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
      // Scroll to top when navigating to categories
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    // Set viewMode first before URL change
    setViewMode("categories");
    setactiveCategory(null);
    // Remove categoryId from URL
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("categoryId");
    setSearchParams(newParams);
    // Scroll to top when returning to categories
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const handleClosePage = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("page");
    setSearchParams(newParams);
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
    }
    // Don't automatically change viewMode when categoryId is removed
    // Let handleBackToCategories control the viewMode change
  }, [categoryId]);

  // Scroll to top when switching to categories view
  useEffect(() => {
    if (viewMode === "categories") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [viewMode]);

  // Add history entries for view modes/popup states that don't change the URL,
  // so the phone back button can step back inside the app.
  useEffect(() => {
    const prevView = prevViewModeRef.current;
    if (prevView !== viewMode) {
      if (
        viewMode === "categories" &&
        !categoryId &&
        !productId &&
        !page
      ) {
        window.history.pushState({ viewMode: "categories" }, "", window.location.href);
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
        window.history.pushState({ sidebar: true }, "", window.location.href);
      }
      prevSidebarRef.current = showSidebar;
    }
  }, [showSidebar]);

  // Check if product details are open by checking URL directly
  // This handles both direct URL access and clicking from product list
  useEffect(() => {
    const checkProductDetails = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const hasProductId = urlParams.get("productId") !== null;
      setIsProductDetailsOpen(hasProductId);
    };
    
    // Check immediately
    checkProductDetails();
    
    // Listen for URL changes (including pushState)
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      setTimeout(checkProductDetails, 0);
    };
    
    // Also check on popstate (back/forward navigation)
    window.addEventListener("popstate", checkProductDetails);
    
    return () => {
      window.history.pushState = originalPushState;
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

      if (hasProductId || hasPage || hasCategoryId) {
        return;
      }

      const nextViewMode = event?.state?.viewMode === "categories" ? "categories" : "home";
      setViewMode(nextViewMode);
      setactiveCategory(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [showPopup]);

  return (
    <Container id="wrapper">
      {/* Navigation Bar - Hide when viewing product details */}
      {!isProductDetailsOpen && (
        <NavigationBar
          onProductsClick={handleProductsClick}
          onSocialMediaClick={handleSocialMediaClick}
          onBranchesClick={handleBranchesClick}
          onContactFormClick={handleContactClick}
          onFeedbackClick={handleFeedbackClick}
          onOrderClick={handleOrderClick}
          onHomeClick={handleBackToHome}
          onCategoryClick={handleCategoryClick}
          onContactClick={handleContactClick}
          categories={theme3Categories}
          activeCategory={activeCategory}
          setshowSidebar={setshowSidebar}
          showSidebar={showSidebar}
        />
      )}
      
      <MenuWrapper onClick={handleClickOutside} >
        <BlurOverlay showPopup={showPopup} />

        {isFeedbackPage && (
          <FeedbackPopup
            restaurant={restaurant}
            showPopup="feedback"
            popupHandler={popupHandler}
            isPage
            onClose={handleClosePage}
          />
        )}

        {isContactPage && (
          <ContactFormPopup
            restaurant={restaurant}
            showPopup="contactForm"
            popupHandler={popupHandler}
            isPage
            onClose={handleClosePage}
          />
        )}
        
        {!isFeedbackPage && !isContactPage && viewMode === "home" && (
          <HomePage
            onExploreClick={handleExploreClick}
            categories={theme3Categories}
          />
        )}

        {/* Show HeaderTop only (logo and menu) */}
        {!isFeedbackPage && !isContactPage && viewMode === "categories" && (
          <Header
            categories={theme3Categories}
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
        {!isFeedbackPage && !isContactPage && viewMode === "products" && activeCategory && !productId && (
          <CategoryHeader
            categoryId={activeCategory}
            categories={theme3Categories}
            onBack={handleBackToCategories}
            searchText={searchText}
            setSearchText={setSearchText}
            setshowSidebar={setshowSidebar}
            showSidebar={showSidebar}
          />
        )}

        {/* Show Categories Grid initially */}
        {!isFeedbackPage && !isContactPage && viewMode === "categories" && (
          <CategoriesGrid
            categories={
              searchText
                ? theme3Categories.filter((cat) =>
                    activeLanguage === "en"
                      ? cat.en_category.toLowerCase().includes(searchText.toLowerCase())
                      : cat.ar_category.toLowerCase().includes(searchText.toLowerCase())
                  )
                : theme3Categories
            }
            onCategoryClick={handleCategoryClick}
          />
        )}

        {/* Show Products when a category is selected */}
        {!isFeedbackPage && !isContactPage && viewMode === "products" && activeCategory && (
          <Products
            menu={restaurant?.categories || []}
            activeCategory={activeCategory}
            showPopup={showPopup}
            searchText={searchText}
            setactiveCategory={setactiveCategory}
            setcarouselPosition={setcarouselPosition}
            carouselPosition={carouselPosition}
            categories={theme3Categories}
          />
        )}
      </MenuWrapper>
      {!isFeedbackPage && !isContactPage && viewMode !== "home" && (
        <>
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
        </>
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
      <ContactPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
      />
      <SideBar
        categories={theme3Categories}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        setshowSidebar={setshowSidebar}
        showSidebar={showSidebar}
        setcarouselPosition={setcarouselPosition}
        onHomeClick={handleBackToHome}
        onCategoryClick={handleCategoryClick}
        onFeedbackClick={handleFeedbackClick}
        onContactClick={handleContactClick}
      />
      {productId &&<ProductParam productId={productId} searchParams={searchParams} setSearchParams={setSearchParams} />}
      {features?.install_app && <InstallPrompt showInstallPopup={showInstallPopup} onInstall={handleInstallClick} restaurantName={restaurantName} onDismiss={() => setShowInstallPopup(false)} />}

    </Container>
  );
}
