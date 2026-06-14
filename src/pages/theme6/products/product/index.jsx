import React, { useState } from "react";
import axios from "axios";
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
  WishlistHeartBtn,
} from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { convertPrice } from "../../../../utilities/convertPrice";
import { getImageUrl } from "../../../../utilities/imageUrl";
import { CUSTOMER_WISHLIST_URL, CUSTOMER_WISHLIST_PRODUCT_URL } from "../../../../apis/URLs";
import { getCustomerAccessToken } from "../../../../utilities/customerAuthStorage";
import { IoHeartOutline } from "react-icons/io5";
import { getCurrencySymbol } from "../../../../utilities/getCurrencySymbol";
const _ = require('lodash');

const Product = React.forwardRef(
  ({ plate, setactivePlate, activePlate, index, showPopup, setSearchParams, searchParams, activeCategoryId, categories, disableDetails, wishlistIds, onWishlistChange }, ref) => {
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
    const handleImageLoaded = () => {
      setimageLoaded(true);
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
    const customerToken = getCustomerAccessToken(restaurantName);
    const inWishlist = wishlistIds && typeof wishlistIds.has === "function" && wishlistIds.has(plate.id);

    const handleWishlistClick = (event) => {
      if (event) { event.preventDefault(); event.stopPropagation(); }
      if (!customerToken || !plate?.id) return;
      (async () => {
        try {
          if (inWishlist) {
            await axios.delete(CUSTOMER_WISHLIST_PRODUCT_URL(plate.id), {
              headers: { Authorization: `Bearer ${customerToken}` },
            });
          } else {
            await axios.post(CUSTOMER_WISHLIST_URL, { product_id: plate.id }, {
              headers: { Authorization: `Bearer ${customerToken}` },
            });
          }
          onWishlistChange?.();
        } catch (err) {
          console.error("Wishlist error:", err);
        }
      })();
    };

    const activeCategory = categories.find((category) => category.id == activeCategoryId)

    let finalDiscount;

    if (parseFloat(activeCategory.discount) === 0.00) {
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
            {customerToken && (
              <WishlistHeartBtn
                type="button"
                activeLanuguage={restaurant?.activeLanguage}
                $filled={inWishlist}
                onClick={handleWishlistClick}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); }}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <IoHeartOutline size={16} />
              </WishlistHeartBtn>
            )}
          </ImageContainer>
          <TextContainer activeLanuguage={restaurant?.activeLanguage}>
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
