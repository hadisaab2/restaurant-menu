import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Container, BlurOverlay } from "./styles";
import Header from "./Header";
import HeroSection from "./HeroSection";
import CategoryNav from "./CategoryNav";
import CategorySection from "./CategorySection";
import ProductCard from "./ProductCard";
import ProductParam from "./ProductParam";
import CartPopup from "./popup/cart";
import LocationPopup from "./popup/location";
import FeedbackPopup from "./popup/feedback";
import ContactPopup from "./popup/contact";
import SharePopup from "./popup/share";
import AboutUsPopup from "../theme4/popup/aboutUs";
import Footer from "./Footer";
import BottomBar from "./BottomBar";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changelanuage } from "../../redux/restaurant/restaurantActions";
import { trackVisit, trackPageView } from "../../utilities/analyticsTracking";

export default function Theme7() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId");
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
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart[restaurantName] || []);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const features = useMemo(
    () => JSON.parse(restaurant?.features || "{}"),
    [restaurant?.features]
  );
  const theme = useMemo(
    () => JSON.parse(restaurant?.theme || "{}"),
    [restaurant?.theme]
  );

  // Sort categories by priority
  const categories = useMemo(() => {
    return [...(restaurant?.categories || [])].sort(
      (a, b) => (b.priority || 0) - (a.priority || 0) || (a.id || 0) - (b.id || 0)
    );
  }, [restaurant?.categories]);

  // Popup state
  const [showPopup, setShowPopup] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  // RTL
  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      activeLanguage === "ar" ? "rtl" : "ltr"
    );
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

  const handleLanguage = useCallback(
    (lang) => {
      dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));
    },
    [dispatch, restaurantName]
  );

  const popupHandler = useCallback((type) => {
    if (type == null) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setShowPopup(type);
  }, []);

  const openProduct = useCallback(
    (id) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("productId", id);
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams]
  );

  const closeProduct = useCallback(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("productId");
    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  const getCategoryName = useCallback(
    (cat) => (activeLanguage === "ar" && cat.ar_category ? cat.ar_category : cat.en_category),
    [activeLanguage]
  );

  const getProductName = useCallback(
    (prod) => (activeLanguage === "ar" && prod.ar_name ? prod.ar_name : prod.en_name),
    [activeLanguage]
  );

  // Find current product for modal
  const currentProduct = useMemo(() => {
    if (!productId) return null;
    for (const cat of categories) {
      const found = cat.products?.find((p) => String(p.id) === String(productId));
      if (found) return found;
    }
    return null;
  }, [productId, categories]);

  const accentColor = theme.mainColor || "#c9a96e";
  const currencySymbol = restaurant?.branches?.[0]?.currency_symbol || "$";

  return (
    <Container>
      <Header
        restaurant={restaurant}
        activeLanguage={activeLanguage}
        handleLanguage={handleLanguage}
        itemCount={itemCount}
        accentColor={accentColor}
        popupHandler={popupHandler}
        features={features}
      />

      <HeroSection
        restaurant={restaurant}
        activeLanguage={activeLanguage}
        accentColor={accentColor}
      />

      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        getCategoryName={getCategoryName}
        accentColor={accentColor}
      />

      {/* Category sections */}
      <div style={{ paddingBottom: itemCount > 0 ? 80 : 0 }}>
        {categories.map((cat) => (
          <CategorySection
            key={cat.id}
            category={cat}
            getCategoryName={getCategoryName}
            getProductName={getProductName}
            accentColor={accentColor}
            currencySymbol={currencySymbol}
            activeLanguage={activeLanguage}
            openProduct={openProduct}
            restaurantName={restaurantName}
            features={features}
          />
        ))}
      </div>

      <Footer
        restaurant={restaurant}
        accentColor={accentColor}
        activeLanguage={activeLanguage}
        popupHandler={popupHandler}
      />

      {/* Bottom bar */}
      {features?.cart && itemCount > 0 && (
        <BottomBar
          itemCount={itemCount}
          cart={cart}
          currencySymbol={currencySymbol}
          accentColor={accentColor}
          popupHandler={popupHandler}
        />
      )}

      {/* Product detail modal */}
      {currentProduct && (
        <>
          <BlurOverlay onClick={closeProduct} />
          <ProductParam
            product={currentProduct}
            restaurant={restaurant}
            restaurantName={restaurantName}
            activeLanguage={activeLanguage}
            accentColor={accentColor}
            currencySymbol={currencySymbol}
            features={features}
            onClose={closeProduct}
          />
        </>
      )}

      {/* Popups */}
      {showPopup && <BlurOverlay onClick={() => popupHandler(null)} />}
      {showPopup === "cart" && (
        <CartPopup
          restaurant={restaurant}
          restaurantName={restaurantName}
          activeLanguage={activeLanguage}
          accentColor={accentColor}
          currencySymbol={currencySymbol}
          features={features}
          cart={cart}
          popupHandler={popupHandler}
        />
      )}
      {showPopup === "location" && (
        <LocationPopup
          restaurant={restaurant}
          activeLanguage={activeLanguage}
          accentColor={accentColor}
          popupHandler={popupHandler}
        />
      )}
      {showPopup === "feedback" && (
        <FeedbackPopup
          restaurant={restaurant}
          restaurantName={restaurantName}
          activeLanguage={activeLanguage}
          accentColor={accentColor}
          popupHandler={popupHandler}
        />
      )}
      {showPopup === "contact" && (
        <ContactPopup
          restaurant={restaurant}
          activeLanguage={activeLanguage}
          accentColor={accentColor}
          popupHandler={popupHandler}
        />
      )}
      {showPopup === "share" && (
        <SharePopup
          restaurant={restaurant}
          accentColor={accentColor}
          popupHandler={popupHandler}
        />
      )}
      {showPopup === "about" && (
        <AboutUsPopup
          restaurant={restaurant}
          showPopup={showPopup}
          popupHandler={popupHandler}
        />
      )}
    </Container>
  );
}
