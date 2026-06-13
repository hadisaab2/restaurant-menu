import React, { useState, useCallback } from "react";
import {
  Container,
  DiscountPrice,
  Image,
  ImageContainer,
  Loader,
  LoaderWrapper,
  NEW,
  PlateName,
  PlatePrice,
  PriceContainer,
  TextContainer,
  Wrapper,
  QuickAddButton,
  OutOfStockBadge,
} from "./styles";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { convertPrice } from "../../../../utilities/convertPrice";
import { getImageUrl } from "../../../../utilities/imageUrl";
import { addToCart } from "../../../../redux/cart/cartActions";
import { trackAddToCart } from "../../../../utilities/analyticsTracking";
import { FaCartPlus } from "react-icons/fa";
import { getCurrencySymbol } from "../../../../utilities/getCurrencySymbol";
const _ = require('lodash');

const Product = React.forwardRef(
  ({ plate, setactivePlate, activePlate, index, showPopup, setSearchParams, searchParams, activeCategoryId, categories, disableDetails }, ref) => {
    const { restaurantName: paramRestaurantName } = useParams();

    const hostname = window.location.hostname;
    const subdomain = hostname.split(".")[0];

    // Determine the restaurant name to use
    const restaurantName =
      subdomain !== "menugic" &&
        subdomain !== "localhost" &&
        subdomain !== "www"
        ? subdomain
        : paramRestaurantName;

    const restaurant = useSelector(
      (state) => state.restaurant?.[restaurantName]
    );
    const activeLanguage = useSelector(
      (state) => state.restaurant?.[restaurantName].activeLanguage
    );
    const dispatch = useDispatch();
    const [imageLoaded, setimageLoaded] = useState(false);
    const handleImageLoaded = () => {
      setimageLoaded(true);
    };

    let features = {};
    try { features = JSON.parse(restaurant?.features || "{}"); } catch (_) {}

    const isOutOfStock = Boolean(plate?.out_of_stock) || Number(plate?.out_of_stock) === 1;
    const activeCategory = categories?.find((category) => category.id == activeCategoryId);

    const hasForm = (() => {
      try {
        const fj = plate?.form_json ? JSON.parse(plate.form_json) : null;
        return fj && (fj.components?.length > 0 || (fj.version === 2 && (fj.sizes?.length > 0 || fj.addons?.length > 0 || fj.removals?.length > 0)));
      } catch { return false; }
    })();

    const flyToCart = useCallback((evt) => {
      const cartEl = document.getElementById("cart-tab-icon");
      if (!cartEl) return;

      const btn = evt?.currentTarget || evt?.target;
      const startRect = btn ? btn.getBoundingClientRect() : null;
      const endRect = cartEl.getBoundingClientRect();
      if (!startRect) return;

      const mainColor = restaurant?.mainColor || restaurant?.maincolor || "#a6ce39";
      const startX = startRect.left + startRect.width / 2;
      const startY = startRect.top + startRect.height / 2;
      const endX = endRect.left + endRect.width / 2;
      const endY = endRect.top + endRect.height / 2;

      // Create the flying circle
      const circle = document.createElement("div");
      circle.style.cssText = `
        position: fixed;
        left: ${startX - 14}px;
        top: ${startY - 14}px;
        width: 28px; height: 28px;
        border-radius: 50%;
        background: ${mainColor};
        box-shadow: 0 4px 15px ${mainColor}88, 0 2px 6px rgba(0,0,0,0.3);
        z-index: 99999;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
      // Add a cart icon inside
      circle.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>';
      document.body.appendChild(circle);

      // Also create a trail effect
      const trail = document.createElement("div");
      trail.style.cssText = `
        position: fixed;
        left: ${startX - 10}px;
        top: ${startY - 10}px;
        width: 20px; height: 20px;
        border-radius: 50%;
        background: ${mainColor}55;
        z-index: 99998;
        pointer-events: none;
      `;
      document.body.appendChild(trail);

      const midX = (startX + endX) / 2 + (startX > endX ? 60 : -60);
      const midY = Math.min(startY, endY) - 120;

      // Main circle animation — curved arc
      const anim = circle.animate([
        { left: `${startX - 14}px`, top: `${startY - 14}px`, width: "28px", height: "28px", opacity: 1, transform: "scale(1)" },
        { left: `${midX - 12}px`, top: `${midY - 12}px`, width: "24px", height: "24px", opacity: 1, transform: "scale(1.1)", offset: 0.35 },
        { left: `${endX - 8}px`, top: `${endY - 8}px`, width: "16px", height: "16px", opacity: 0.6, transform: "scale(0.6)" },
      ], { duration: 650, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)", fill: "forwards" });

      // Trail follows slightly behind
      trail.animate([
        { left: `${startX - 10}px`, top: `${startY - 10}px`, width: "20px", height: "20px", opacity: 0.5 },
        { left: `${midX - 8}px`, top: `${midY - 8}px`, width: "16px", height: "16px", opacity: 0.3, offset: 0.4 },
        { left: `${endX - 4}px`, top: `${endY - 4}px`, width: "8px", height: "8px", opacity: 0 },
      ], { duration: 700, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)", fill: "forwards" });

      anim.onfinish = () => {
        circle.remove();
        trail.remove();
        // Zoom in/out bounce on the whole cart tab
        const tabEl = cartEl.closest("[data-tab]") || cartEl.parentElement;
        (tabEl || cartEl).animate([
          { transform: "scale(1)" },
          { transform: "scale(1.35)", offset: 0.25 },
          { transform: "scale(0.85)", offset: 0.5 },
          { transform: "scale(1.15)", offset: 0.75 },
          { transform: "scale(1)" },
        ], { duration: 500, easing: "ease-out" });
      };
    }, [restaurant]);

    const handleQuickAdd = (e) => {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      if (features?.cart === false || isOutOfStock) return;
      if (features?.quick_add_requires_options === true && hasForm) {
        if (activePlate == null && !showPopup) {
          if (!disableDetails) setactivePlate(index);
          const newParams = new URLSearchParams(searchParams);
          newParams.set("productId", plate?.id);
          if (activeCategoryId) newParams.set("categoryId", activeCategoryId);
          setSearchParams(newParams);
          window.history.pushState({}, "", `?${newParams.toString()}`);
          document.body.style.overflow = "hidden";
        }
        return;
      }
      const basePrice = parseFloat(plate?.en_price || "0") || 0;
      const disc = parseFloat(activeCategory?.discount) === 0 ? parseFloat(plate?.discount || 0) : parseFloat(activeCategory?.discount || 0);
      const discountedPrice = basePrice * (1 - disc / 100);
      dispatch(addToCart(restaurantName, plate, 1, {}, discountedPrice, ""));
      if (restaurant?.id && plate?.id) {
        trackAddToCart(restaurant.id, plate.id, activeCategoryId, 1, restaurant?.branches?.[0]?.id || null);
      }
      flyToCart(e);
    };

    const plateHandle = () => {
      if (activePlate == null && imageLoaded && !showPopup) {
        if (!disableDetails) {
          setactivePlate(index);
        }
        const newParams = new URLSearchParams(searchParams);
        newParams.set("productId", plate?.id);
        if (activeCategoryId) newParams.set("categoryId", activeCategoryId);
        setSearchParams(newParams);
        window.history.pushState({}, "", `?${newParams.toString()}`);

        document.body.style.overflow = "hidden";
      }
    };
    const currencySymbol = getCurrencySymbol(restaurant?.currency);

    let finalDiscount;

    if (parseFloat(activeCategory?.discount) === 0.00) {
      finalDiscount = parseFloat(plate.discount);
    } else {
      finalDiscount = parseFloat(activeCategory.discount);
    }

const coverIndex = plate.images?.findIndex((image) => image.id === plate.new_cover_id) ?? -1;
const hasValidImage = coverIndex >= 0 && plate.images?.[coverIndex]?.url;
const restaurantLogoUrl = restaurant?.logoURL
  ? getImageUrl(restaurant.logoURL)
  : null;
const imageSrc = hasValidImage 
  ? getImageUrl(plate.images[coverIndex].url)
  : restaurantLogoUrl || "";

    return (
      <Container index={index} activePlate={activePlate} className="lazy-load">
        <Wrapper>
          {!imageLoaded && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
          <ImageContainer onClick={plateHandle}>
            {plate.new && (
              <NEW>{restaurant?.activeLanguage === "en" ? "NEW !" : "! جديد"}</NEW>
            )}
            <Image
              ref={ref}
              onLoad={handleImageLoaded}
              src={imageSrc}
              imageLoaded={imageLoaded}
            />
            {features?.cart !== false && (
              isOutOfStock ? (
                <OutOfStockBadge activeLanuguage={activeLanguage}>
                  {activeLanguage === "en" ? "Out of stock" : "غير متوفر"}
                </OutOfStockBadge>
              ) : (
                <QuickAddButton
                  onClick={handleQuickAdd}
                  onMouseDown={(e) => e.stopPropagation()}
                  activeLanuguage={activeLanguage}
                >
                  <FaCartPlus size={12} />
                </QuickAddButton>
              )
            )}
          </ImageContainer>
          <TextContainer activeLanuguage={restaurant?.activeLanguage}>
            <PlateName fontSize={restaurant?.font_size}>
              
              {restaurant?.activeLanguage === 'en' ? (plate.en_name || plate.ar_name) : (plate.ar_name || plate.en_name)}
            </PlateName>
            {!_.isEmpty(plate.en_price) && (
              <PriceContainer>
                <PlatePrice discounted={finalDiscount != 0.00}>
                  {convertPrice(parseFloat(plate.en_price),currencySymbol)}
                </PlatePrice>
                <DiscountPrice>
                  {finalDiscount != 0.00 && convertPrice(parseFloat(plate.en_price) * (1 - parseFloat(finalDiscount) / 100),currencySymbol)}
                </DiscountPrice>
              </PriceContainer>
            )}
          </TextContainer>
        </Wrapper>
      </Container>
    );
  }
);

export default Product;
