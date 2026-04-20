import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import _ from "lodash";
import {
  T1ProductOuter,
  T1ProductWrapper,
  T1Loader,
  T1LoaderWrap,
  T1ImageContainer,
  T1Image,
  T1TextContainer,
  T1NEW,
  T1PlateName,
  T1PriceAndActionsRow,
  T1PriceBlock,
  T1PriceRow,
  T1PlatePrice,
  T1DiscountPrice,
  T1Actions,
  T1AddBtn,
  T1Stepper,
  T1StepBtn,
  T1StepQty,
  T1OutStock,
} from "./styles";
import { convertPrice } from "../../../utilities/convertPrice";
import { addToCart, adjustQuantity, removeFromCart } from "../../../redux/cart/cartActions";
import { getProduct, PRODUCT_QUERY_KEY } from "../../../apis/products/getProduct";
import { useQueryClient } from "@tanstack/react-query";
import { trackItemView, trackAddToCart } from "../../../utilities/analyticsTracking";
import { productNeedsOptionsDialog } from "../../../product-options/resolveOptions";

const BUCKET = "https://storage.googleapis.com/ecommerce-bucket-testing/";

function Theme1ProductCard({
  plate,
  activeCategoryId,
  categories,
  restaurantName,
  restaurant,
  features,
}) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const [imageLoaded, setImageLoaded] = useState(false);
  const activeLanguage = useSelector(
    (s) => s.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const isEn = activeLanguage === "en";
  const cart = useSelector((s) => s.cart?.[restaurantName] || []);

  const categoryIdToUse =
    activeCategoryId === "all-items" ? plate.category_id : activeCategoryId;
  const activeCat = categories.find((c) => String(c.id) === String(categoryIdToUse));

  /* Match theme2 discount rule */
  let finalDiscount = 0;
  if (activeCat && parseFloat(activeCat.discount || 0) === 0) {
    finalDiscount = parseFloat(plate.discount || 0);
  } else if (activeCat) {
    finalDiscount = parseFloat(activeCat.discount || 0);
  } else {
    finalDiscount = parseFloat(plate.discount || 0);
  }

  let currencySymbol = "";
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
      currencySymbol = "";
  }

  const isOutOfStock =
    Boolean(plate?.out_of_stock) || Number(plate?.out_of_stock) === 1;
  const coverIndex =
    plate.images?.findIndex((img) => img.id === plate.new_cover_id) ?? -1;
  const hasImg = coverIndex >= 0 && plate.images?.[coverIndex]?.url;
  const logoFallback = restaurant?.logoURL
    ? `${BUCKET}${restaurant.logoURL}`
    : "";
  const imageSrc = hasImg ? `${BUCKET}${plate.images[coverIndex].url}` : logoFallback;

  const hasForm = productNeedsOptionsDialog(plate?.form_json, activeCat?.form_json);

  const basePrice = parseFloat(plate?.en_price || "0");
  const discounted = basePrice * (1 - finalDiscount / 100);

  const cartLine = cart.find(
    (i) =>
      String(i.id) === String(plate.id) &&
      (!i.formData || Object.keys(i.formData).length === 0)
  );
  const qty = cartLine?.quantity || 0;
  const cartEnabled = features?.cart !== false;

  useEffect(() => {
    if (!imageSrc) setImageLoaded(true);
  }, [imageSrc]);

  const openDetails = useCallback(() => {
    if (imageSrc && !imageLoaded) return;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("productId", plate.id);
    if (activeCategoryId === "all-items") {
      newParams.set("categoryId", "all-items");
    } else if (activeCategoryId) {
      newParams.set("categoryId", String(activeCategoryId));
    }
    setSearchParams(newParams);
    window.history.pushState({}, "", `?${newParams.toString()}`);
    document.body.style.overflow = "hidden";
    if (restaurant?.id && plate?.id) {
      const cid =
        activeCategoryId === "all-items" ? plate.category_id : activeCategoryId;
      trackItemView(
        restaurant.id,
        plate.id,
        cid,
        restaurant?.branches?.[0]?.id || null
      );
    }
  }, [
    plate,
    activeCategoryId,
    searchParams,
    setSearchParams,
    restaurant,
    imageLoaded,
    imageSrc,
  ]);

  const prefetch = useCallback(() => {
    if (plate?.id) {
      queryClient.prefetchQuery({
        queryKey: PRODUCT_QUERY_KEY(plate.id),
        queryFn: () => getProduct(plate.id),
        staleTime: 5 * 60 * 1000,
      });
    }
  }, [plate?.id, queryClient]);

  const handleAdd = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    if (!cartEnabled || isOutOfStock) return;
    if (hasForm) {
      openDetails();
      return;
    }
    dispatch(addToCart(restaurantName, plate, 1, {}, discounted, ""));
    if (restaurant?.id && plate?.id) {
      const cid =
        activeCategoryId === "all-items" ? plate.category_id : activeCategoryId;
      trackAddToCart(
        restaurant.id,
        plate.id,
        cid,
        1,
        restaurant?.branches?.[0]?.id || null
      );
    }
    toast.success(
      activeLanguage === "en" ? "Added to cart" : "تمت الإضافة إلى السلة"
    );
  };

  const inc = (e) => {
    e?.stopPropagation();
    if (!cartLine) return;
    dispatch(
      adjustQuantity(restaurantName, cartLine.uniqueId, cartLine.quantity + 1)
    );
  };

  const dec = (e) => {
    e?.stopPropagation();
    if (!cartLine) return;
    if (cartLine.quantity <= 1) {
      dispatch(removeFromCart(restaurantName, cartLine.uniqueId));
    } else {
      dispatch(
        adjustQuantity(
          restaurantName,
          cartLine.uniqueId,
          cartLine.quantity - 1
        )
      );
    }
  };

  const name =
    activeLanguage === "en" ? plate.en_name : plate.ar_name;
  const nameFont =
    restaurant?.font_size && String(restaurant.font_size).trim()
      ? restaurant.font_size
      : "12px";

  const showPrice = !_.isEmpty(plate.en_price);
  const hasDiscount = finalDiscount !== 0;

  return (
    <T1ProductOuter>
      <T1ProductWrapper>
        {!imageLoaded && imageSrc && (
          <T1LoaderWrap>
            <T1Loader />
          </T1LoaderWrap>
        )}
        <T1ImageContainer
          onClick={openDetails}
          onMouseEnter={prefetch}
          onTouchStart={prefetch}
        >
          {plate.new && (
            <T1NEW>
              {activeLanguage === "en" ? "NEW !" : "! جديد"}
            </T1NEW>
          )}
          {imageSrc && (
            <T1Image
              src={imageSrc}
              alt={name}
              loading="lazy"
              $loaded={imageLoaded}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          )}
        </T1ImageContainer>
        <T1TextContainer $en={isEn}>
          <T1PlateName
            $fs={nameFont}
            onClick={() => imageLoaded && openDetails()}
          >
            {name}
          </T1PlateName>
          {(showPrice || cartEnabled) && (
            <T1PriceAndActionsRow $en={isEn}>
              <T1PriceBlock $en={isEn}>
                {showPrice && (
                  <T1PriceRow>
                    <T1PlatePrice $discounted={hasDiscount}>
                      {convertPrice(basePrice, currencySymbol)}
                    </T1PlatePrice>
                    {hasDiscount && (
                      <T1DiscountPrice>
                        {convertPrice(discounted, currencySymbol)}
                      </T1DiscountPrice>
                    )}
                  </T1PriceRow>
                )}
              </T1PriceBlock>
              {cartEnabled && (
                <T1Actions>
                  {isOutOfStock ? (
                    <T1OutStock>
                      {activeLanguage === "en"
                        ? "Out of stock"
                        : "غير متوفر"}
                    </T1OutStock>
                  ) : qty > 0 ? (
                    <T1Stepper>
                      <T1StepBtn type="button" onClick={dec}>
                        −
                      </T1StepBtn>
                      <T1StepQty>{qty}</T1StepQty>
                      <T1StepBtn type="button" onClick={inc}>
                        +
                      </T1StepBtn>
                    </T1Stepper>
                  ) : (
                    <T1AddBtn
                      type="button"
                      onClick={handleAdd}
                      onMouseDown={(e) => e.stopPropagation()}
                      title={
                        activeLanguage === "en"
                          ? "Add to cart"
                          : "أضف إلى السلة"
                      }
                    >
                      <FaCartPlus size={11} />
                    </T1AddBtn>
                  )}
                </T1Actions>
              )}
            </T1PriceAndActionsRow>
          )}
        </T1TextContainer>
      </T1ProductWrapper>
    </T1ProductOuter>
  );
}

export default Theme1ProductCard;
