import React, { useState } from "react";
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
} from "./styles";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { convertPrice } from "../../../../utilities/convertPrice";
const _ = require('lodash');

const Product = React.forwardRef(
  ({ plate, setactivePlate, activePlate, index, showPopup, setSearchParams, searchParams, activeCategoryId, categories }, ref) => {
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
        setactivePlate(index);
        // window.history.pushState({ isZoomed: true }, "");
        const newParams = new URLSearchParams(searchParams);
        newParams.set("productId", plate?.id);
        // Push updated URL without reloading or navigating
        window.history.pushState({}, "", `?${newParams.toString()}`);

        document.body.style.overflow = "hidden";
      }
    };
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
    const truncateText = (text, maxLength) => {
      if (text.length <= maxLength) {
        return text;
      }
      return text.slice(0, maxLength) + "...";
    };
    const activeCategory = categories.find((category) => category.id == activeCategoryId)

    let finalDiscount;

    if (parseFloat(activeCategory.discount) === 0.00) {
      finalDiscount = parseFloat(plate.discount);
    } else {
      finalDiscount = parseFloat(activeCategory.discount);
    }

    return (
      <Container index={index} activePlate={activePlate} className="lazy-load">
        <Wrapper>
          {!imageLoaded && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
          <ImageContainer onClick={plateHandle}>
            <Image
              ref={ref}
              onLoad={handleImageLoaded}
              src={
                plate.images.length == 0
                  ? `https://storage.googleapis.com/ecommerce-bucket-testing/${plate.images[0]}`
                  : `https://storage.googleapis.com/ecommerce-bucket-testing/${plate.images.find((image) =>
                    image.url.includes(plate.cover_id)
                  ).url
                  }`
              }
              imageLoaded={imageLoaded}
            />
          </ImageContainer>
          <TextContainer activeLanuguage={restaurant?.activeLanguage}>
            {plate.new && <NEW activeLanuguage={restaurant?.activeLanguage}>{restaurant?.activeLanguage === 'en' ? "NEW !" : "! جديد"} </NEW>}
            <PlateName>
              {/* {restaurant?.activeLanguage === "en"
                ? truncateText(plate.en_name, 30)
                : truncateText(plate.ar_name, 30)} */}
              {restaurant?.activeLanguage === 'en' ? plate.en_name : plate.ar_name}
            </PlateName>
            {!_.isEmpty(plate.en_price) && (
              <PriceContainer>
                <PlatePrice discounted={finalDiscount != 0.00}>
                  {/* {plate.en_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {currencySymbol} */}
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
