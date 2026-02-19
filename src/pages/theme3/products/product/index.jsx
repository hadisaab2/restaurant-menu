import React, { useState, useRef, useCallback } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { getProduct, PRODUCT_QUERY_KEY } from "../../../../apis/products/getProduct";
import { convertPrice } from "../../../../utilities/convertPrice";
import { addToCart } from "../../../../redux/cart/cartActions";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { trackItemView, trackAddToCart } from "../../../../utilities/analyticsTracking";
const _ = require('lodash');

const Product = React.forwardRef(
  ({ plate, setactivePlate, activePlate, index, showPopup, setSearchParams, searchParams, activeCategoryId, categories, disableDetails, $isFeatured, onAddToCart }, ref) => {
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
    let currencySymbol;
    switch (restaurant?.currency) {
      case "dollar":
        currencySymbol = "$";
        break;
      case "lb":
        currencySymbol = "L.L.";
        break;
      case "gram":
        currencySymbol = "g";
        break;
      case "kilogram":
        currencySymbol = "kg";
        break;
      default:
        currencySymbol = ""; // No currency or unsupported currency
    }

    // If activeCategoryId is "all-items", use the product's actual category_id
    const categoryIdToUse = activeCategoryId === "all-items" ? plate.category_id : activeCategoryId;
    const activeCategory = categories.find((category) => category.id == categoryIdToUse);

    let finalDiscount;

    if (activeCategory && parseFloat(activeCategory.discount || 0) !== 0.00) {
      finalDiscount = parseFloat(activeCategory.discount || 0);
    } else {
      finalDiscount = parseFloat(plate.discount || 0);
    }

    const features = JSON.parse(restaurant?.features || "{}");
    const isOutOfStock =
      Boolean(plate?.out_of_stock) || Number(plate?.out_of_stock) === 1;
    const coverIndex = plate.images?.findIndex((image) => image.id === plate.new_cover_id) ?? -1;
    const hasValidImage = coverIndex >= 0 && plate.images?.[coverIndex]?.url;
    const restaurantLogoUrl = restaurant?.logoURL 
      ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
      : null;
    const imageSrc = hasValidImage 
      ? `https://storage.googleapis.com/ecommerce-bucket-testing/${plate.images[coverIndex].url}`
      : restaurantLogoUrl || "";
    const hasProductForm =
      !_.isEmpty(plate?.form_json) &&
      !_.isEmpty(JSON.parse(plate?.form_json || "{}"));
    const hasCategoryForm =
      !_.isEmpty(activeCategory?.form_json) &&
      !_.isEmpty(JSON.parse(activeCategory?.form_json || "{}"));
    const hasForm = hasProductForm || hasCategoryForm;

    const handleQuickAdd = (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      
      console.log("QuickAddButton clicked", {
        hasCart: features?.cart,
        isOutOfStock,
        hasForm,
        plateId: plate?.id,
        plateName: plate?.en_name
      });
      
      if (!features?.cart) {
        console.log("Cart feature is disabled");
        return;
      }
      
      if (isOutOfStock) {
        console.log("Product is out of stock");
        return;
      }
      
      if (hasForm) {
        console.log("Product has form, opening details");
        plateHandle();
        return;
      }
      
      console.log("Adding product to cart");
      const basePrice = parseFloat(plate?.en_price || "0");
      const discountedPrice = basePrice * (1 - parseFloat(finalDiscount) / 100);
      
      try {
        dispatch(addToCart(restaurantName, plate, 1, {}, discountedPrice, ""));
        console.log("Product added to cart successfully");
        
        // Track add to cart
        if (restaurant?.id && plate?.id) {
          const categoryIdToUse = activeCategoryId === "all-items" ? plate.category_id : activeCategoryId;
          const branchId = restaurant?.branches?.[0]?.id || null;
          trackAddToCart(restaurant.id, plate.id, categoryIdToUse, 1, branchId);
        }
        
        // Trigger cart animation
        if (onAddToCart && containerRef.current) {
          onAddToCart(containerRef.current);
        }
        
        toast.success(
          restaurant?.activeLanguage === "en"
            ? "Added to cart"
            : "تمت الإضافة إلى السلة"
        );
      } catch (error) {
        console.error("Error adding to cart:", error);
        toast.error(
          restaurant?.activeLanguage === "en"
            ? "Failed to add to cart"
            : "فشلت الإضافة إلى السلة"
        );
      }
    };
    return (
      <Container ref={containerRef} data-product-container index={index} activePlate={activePlate} className="lazy-load" $isFeatured={$isFeatured}>
        <Wrapper>
          {!imageLoaded && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
          <ImageContainer onClick={plateHandle} onMouseEnter={prefetchProduct} onTouchStart={prefetchProduct}>
            <Image
              ref={ref}
              onLoad={handleImageLoaded}
              src={imageSrc}
              imageLoaded={imageLoaded}
            />
          </ImageContainer>
          {features?.cart &&
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
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                onTouchStart={(e) => {
                  e.stopPropagation();
                }}
                onPointerDown={(e) => {
                  e.stopPropagation();
                }}
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
            {plate.new && <NEW activeLanuguage={restaurant?.activeLanguage}>{restaurant?.activeLanguage === 'en' ? "NEW !" : "! جديد"} </NEW>}
            <PlateName fontSize={restaurant?.font_size}>
              
              {restaurant?.activeLanguage === 'en' ? plate.en_name : plate.ar_name}
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
