import React, { useState, useRef, useCallback } from "react";
import axios from "axios";
import {
  Container,
  DiscountPrice,
  Image,
  ImageContainer,
  Loader,
  LoaderWrapper,
  NEW,
  BestSellerBadge,
  PlateName,
  PlatePrice,
  PriceContainer,
  TextContainer,
  Wrapper,
  QuickAddButton,
  WishlistHeartBtn,
  OutOfStockBadge,
} from "./styles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { getProduct, PRODUCT_QUERY_KEY } from "../../../../apis/products/getProduct";
import { convertPrice } from "../../../../utilities/convertPrice";
import { getImageUrl } from "../../../../utilities/imageUrl";
import { addToCart } from "../../../../redux/cart/cartActions";
import { CUSTOMER_WISHLIST_URL, CUSTOMER_WISHLIST_PRODUCT_URL } from "../../../../apis/URLs";
import { getCustomerAccessToken } from "../../../../utilities/customerAuthStorage";
import { IoHeartOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { trackItemView, trackAddToCart } from "../../../../utilities/analyticsTracking";
import { getCurrencySymbol } from "../../../../utilities/getCurrencySymbol";
const _ = require('lodash');

const WishlistHeartIcon = IoHeartOutline;

const Product = React.forwardRef(
  ({ plate, setactivePlate, activePlate, index, showPopup, setSearchParams, searchParams, activeCategoryId, categories, disableDetails, $isFeatured, onAddToCart, wishlistIds, onWishlistChange }, ref) => {
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
    const [imageLoaded, setimageLoaded] = useState(false);
    const containerRef = useRef(null);
    const queryClient = useQueryClient();
    const prefetchProduct = useCallback(() => {
      if (!disableDetails && plate?.id) {
        queryClient.prefetchQuery({
          queryKey: PRODUCT_QUERY_KEY(plate.id),
          queryFn: () => getProduct(plate.id),
          staleTime: 5 * 60 * 1000,
        });
      }
    }, [disableDetails, plate?.id, queryClient]);
    const handleImageLoaded = () => {
      setimageLoaded(true);
    };
    const plateHandle = () => {
      // Prevent opening if productId is already in URL (to avoid duplication with ProductParam)
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("productId")) {
        return;
      }
      // Prevent opening if activePlate is already set (popup is open)
      if (activePlate !== null) {
        return;
      }
      if (imageLoaded && !showPopup) {
        if (!disableDetails) {
          setactivePlate(index);
        }
        const newParams = new URLSearchParams(searchParams);
        newParams.set("productId", plate?.id);
        // Preserve the categoryId we came from (either "all-items" or the specific category)
        // This ensures the back button returns to the correct view
        if (activeCategoryId === "all-items") {
          newParams.set("categoryId", "all-items");
        } else if (activeCategoryId && activeCategoryId !== "all-items") {
          newParams.set("categoryId", activeCategoryId);
        }
        // Update React state first, then push to history
        setSearchParams(newParams);
        window.history.pushState({}, "", `?${newParams.toString()}`);

        // Track product view
        if (restaurant?.id && plate?.id) {
          const categoryIdToUse = activeCategoryId === "all-items" ? plate.category_id : activeCategoryId;
          const branchId = restaurant?.branches?.[0]?.id || null;
          trackItemView(restaurant.id, plate.id, categoryIdToUse, branchId);
        }

        document.body.style.overflow = "hidden";
      }
    };
    const dispatch = useDispatch();
    const customerToken = getCustomerAccessToken(restaurantName);
    const inWishlist =
      wishlistIds && typeof wishlistIds.has === "function" && wishlistIds.has(plate.id);
    const currencySymbol = getCurrencySymbol(restaurant?.currency);

    // If activeCategoryId is "all-items", use the product's actual category_id
    const categoryIdToUse = activeCategoryId === "all-items" ? plate.category_id : activeCategoryId;
    const activeCategory = categories.find((category) => category.id == categoryIdToUse);

    let finalDiscount;

    if (activeCategory && parseFloat(activeCategory.discount || 0) !== 0.00) {
      finalDiscount = parseFloat(activeCategory.discount || 0);
    } else {
      finalDiscount = parseFloat(plate.discount || 0);
    }

    let features = {};
    try {
      features = typeof restaurant?.features === "string" ? JSON.parse(restaurant.features || "{}") : (restaurant?.features || {});
    } catch (_) {
      features = {};
    }
    const isOutOfStock =
      Boolean(plate?.out_of_stock) || Number(plate?.out_of_stock) === 1;
    const coverIndex = plate.images?.findIndex((image) => image.id === plate.new_cover_id) ?? -1;
    const hasValidImage = coverIndex >= 0 && plate.images?.[coverIndex]?.url;
    const restaurantLogoUrl = restaurant?.logoURL
      ? getImageUrl(restaurant.logoURL)
      : null;
    const imageSrc = hasValidImage 
      ? getImageUrl(plate.images[coverIndex].url)
      : restaurantLogoUrl || "";
    const hasProductForm =
      !_.isEmpty(plate?.form_json) &&
      !_.isEmpty(JSON.parse(plate?.form_json || "{}"));
    const hasCategoryForm =
      !_.isEmpty(activeCategory?.form_json) &&
      !_.isEmpty(JSON.parse(activeCategory?.form_json || "{}"));
    const hasForm = hasProductForm || hasCategoryForm;

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
      circle.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>';
      document.body.appendChild(circle);

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

      const anim = circle.animate([
        { left: `${startX - 14}px`, top: `${startY - 14}px`, width: "28px", height: "28px", opacity: 1, transform: "scale(1)" },
        { left: `${midX - 12}px`, top: `${midY - 12}px`, width: "24px", height: "24px", opacity: 1, transform: "scale(1.1)", offset: 0.35 },
        { left: `${endX - 8}px`, top: `${endY - 8}px`, width: "16px", height: "16px", opacity: 0.6, transform: "scale(0.6)" },
      ], { duration: 650, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)", fill: "forwards" });

      trail.animate([
        { left: `${startX - 10}px`, top: `${startY - 10}px`, width: "20px", height: "20px", opacity: 0.5 },
        { left: `${midX - 8}px`, top: `${midY - 8}px`, width: "16px", height: "16px", opacity: 0.3, offset: 0.4 },
        { left: `${endX - 4}px`, top: `${endY - 4}px`, width: "8px", height: "8px", opacity: 0 },
      ], { duration: 700, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)", fill: "forwards" });

      anim.onfinish = () => {
        circle.remove();
        trail.remove();
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

    const handleQuickAdd = (event) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.nativeEvent?.stopImmediatePropagation) event.nativeEvent.stopImmediatePropagation();
      }
      if (features && features.cart === false) return;
      if (isOutOfStock) return;
      if (features?.quick_add_requires_options === true && hasForm) {
        plateHandle();
        return;
      }
      const basePrice = parseFloat(plate?.en_price || "0");
      const discountedPrice = basePrice * (1 - parseFloat(finalDiscount) / 100);

      dispatch(addToCart(restaurantName, plate, 1, {}, discountedPrice, ""));
      if (restaurant?.id && plate?.id) {
        const categoryIdToUse = activeCategoryId === "all-items" ? plate.category_id : activeCategoryId;
        const branchId = restaurant?.branches?.[0]?.id || null;
        trackAddToCart(restaurant.id, plate.id, categoryIdToUse, 1, branchId);
      }
      flyToCart(event);
    };

    const handleWishlistClick = (event) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.nativeEvent?.stopImmediatePropagation) {
          event.nativeEvent.stopImmediatePropagation();
        }
      }
      if (!customerToken || !plate?.id) return;
      (async () => {
        try {
          if (inWishlist) {
            await axios.delete(CUSTOMER_WISHLIST_PRODUCT_URL(plate.id), {
              headers: { Authorization: `Bearer ${customerToken}` },
            });
          } else {
            await axios.post(
              CUSTOMER_WISHLIST_URL,
              { product_id: plate.id },
              { headers: { Authorization: `Bearer ${customerToken}` } }
            );
          }
          onWishlistChange?.();
          toast.success(
            restaurant?.activeLanguage === "en"
              ? inWishlist
                ? "Removed from wishlist"
                : "Saved to wishlist"
              : inWishlist
                ? "أُزيلت من المفضلة"
                : "أُضيفت إلى المفضلة"
          );
        } catch {
          toast.error(
            restaurant?.activeLanguage === "en"
              ? "Could not update wishlist"
              : "تعذر تحديث المفضلة"
          );
        }
      })();
    };

    return (
      <Container ref={containerRef} data-product-container index={index} activePlate={activePlate} className="lazy-load" $isFeatured={$isFeatured}>
        <Wrapper>
          {(plate.is_best_seller || plate.isBestSeller) && (
            <BestSellerBadge activeLanuguage={restaurant?.activeLanguage}>
              {restaurant?.activeLanguage === "en" ? "Bestseller" : "الأكثر مبيعاً"}
            </BestSellerBadge>
          )}
          {!imageLoaded && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
          <ImageContainer onClick={plateHandle} onMouseEnter={prefetchProduct} onTouchStart={prefetchProduct}>
            {plate.new && (
              <NEW>{restaurant?.activeLanguage === "en" ? "NEW !" : "! جديد"}</NEW>
            )}
            <Image
              ref={ref}
              onLoad={handleImageLoaded}
              src={imageSrc}
              imageLoaded={imageLoaded}
              $isLogoFallback={!hasValidImage}
            />
            {customerToken && (
              <WishlistHeartBtn
                type="button"
                activeLanuguage={restaurant?.activeLanguage}
                $filled={inWishlist}
                title={
                  restaurant?.activeLanguage === "en"
                    ? inWishlist
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                    : inWishlist
                      ? "إزالة من المفضلة"
                      : "أضف للمفضلة"
                }
                onClick={handleWishlistClick}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                onTouchStart={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
              >
                <WishlistHeartIcon size={18} />
              </WishlistHeartBtn>
            )}
          </ImageContainer>
          {(features?.cart !== false) &&
            (isOutOfStock ? (
              <OutOfStockBadge activeLanuguage={restaurant?.activeLanguage}>
                {restaurant?.activeLanguage === "en"
                  ? "Out of stock"
                  : "غير متوفر حالياً"}
              </OutOfStockBadge>
            ) : (
              <QuickAddButton
                type="button"
                onClick={handleQuickAdd}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); }}
                onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); handleQuickAdd(e); }}
                onTouchStart={(e) => { e.stopPropagation(); }}
                onPointerDown={(e) => { e.stopPropagation(); }}
                activeLanuguage={restaurant?.activeLanguage}
                title={
                  restaurant?.activeLanguage === "en"
                    ? "Add to cart"
                    : "أضف إلى السلة"
                }
              >
                <FaCartPlus size={12} />
              </QuickAddButton>
            ))}
          <TextContainer activeLanuguage={restaurant?.activeLanguage}>
            <PlateName fontSize={restaurant?.font_size}>
              
              {restaurant?.activeLanguage === 'en' ? plate.en_name : plate.ar_name}
            </PlateName>
            {!_.isEmpty(plate.en_price) && (
              <PriceContainer $isRtl={restaurant?.activeLanguage === "ar"}>
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
