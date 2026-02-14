import React, { useEffect, useRef, useState } from "react";
import {
  BlurOverlay,
  Container,
  MenuWrapper,
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
import BottomTabBar from "./BottomTabBar";
import CartAnimation from "./CartAnimation";
import { trackVisit, trackPageView } from "../../utilities/analyticsTracking";

export default function Theme3() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId"); // Get productId from URL
  const categoryId = searchParams.get("categoryId"); // Get productId from URL
  const page = searchParams.get("page");
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
  // Sort categories by priority DESC, then id ASC
  const sortedCategories = [...(restaurant?.categories || [])].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0) || (a.id || 0) - (b.id || 0)
  );
  const theme3Categories = showAllItemsCategory
    ? [allItemsCategory, ...sortedCategories]
    : sortedCategories;

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
  const [cartAnimationTrigger, setCartAnimationTrigger] = useState(0);
  const [cartAnimationSource, setCartAnimationSource] = useState(null);

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

    // Track visit when restaurant is loaded
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

  // Close popups when navigating (productId or categoryId changes)
  useEffect(() => {
    if ((productId || categoryId) && showPopup && (showPopup === "feedback" || showPopup === "contactForm")) {
      popupHandler(null);
    }
  }, [productId, categoryId]);

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
        // Close any opened popup when opening sidebar
        popupHandler(null);
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
      {/* Navigation Bar - Smooth transition when viewing product details */}
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
        popupHandler={popupHandler}
        isProductDetailsOpen={isProductDetailsOpen}
      />
      
      <MenuWrapper onClick={handleClickOutside} >
        <BlurOverlay showPopup={showPopup} />

        {viewMode === "home" && (
          <HomePage
            onExploreClick={handleExploreClick}
            setSearchParams={setSearchParams}
            searchParams={searchParams}
            categories={theme3Categories}
          />
        )}

        {/* Show HeaderTop only (logo and menu) */}
        {viewMode === "categories" && (
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
        {viewMode === "products" && activeCategory && !productId && (
          <CategoryHeader
            categoryId={activeCategory}
            categories={theme3Categories}
            onBack={handleBackToCategories}
            searchText={searchText}
            setSearchText={setSearchText}
            popupHandler={popupHandler}
            setshowSidebar={setshowSidebar}
            showSidebar={showSidebar}
          />
        )}

        {/* Show Categories Grid initially */}
        {viewMode === "categories" && (
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
        {viewMode === "products" && activeCategory && (
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
        onBranchesClick={() => {
          window.history.pushState({}, "");
          popupHandler("location");
        }}
        branches={restaurant?.branches || []}
      />
      {productId &&<ProductParam productId={productId} searchParams={searchParams} setSearchParams={setSearchParams} />}
      {features?.install_app && <InstallPrompt showInstallPopup={showInstallPopup} onInstall={handleInstallClick} restaurantName={restaurantName} onDismiss={() => setShowInstallPopup(false)} />}
      
      {/* Bottom Tab Bar - Always visible except when product details are open */}
      <BottomTabBar
        isProductDetailsOpen={isProductDetailsOpen}
        activeView={viewMode}
        onHomeClick={handleBackToHome}
        onCategoriesClick={() => {
          if (viewMode === "products") {
            handleBackToCategories();
          } else {
            setViewMode("categories");
            setactiveCategory(null);
            const newParams = new URLSearchParams(searchParams);
            newParams.delete("categoryId");
            setSearchParams(newParams);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onCartClick={() => {
          if (features?.cart) {
            popupHandler("cart");
          }
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

      {/* Cart Animation */}
      <CartAnimation
        trigger={cartAnimationTrigger}
        sourceElement={cartAnimationSource}
        onComplete={() => {
          setCartAnimationSource(null);
        }}
      />

    </Container>
  );
}
