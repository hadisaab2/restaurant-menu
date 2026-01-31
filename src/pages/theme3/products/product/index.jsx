import React, { useState, useRef } from "react";
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
import { convertPrice } from "../../../../utilities/convertPrice";
import { addToCart } from "../../../../redux/cart/cartActions";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
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
    const coverIndex = plate.images.findIndex((image) => image.id === plate.new_cover_id);
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
      if (!features?.cart || isOutOfStock) return;
      if (hasForm) {
        plateHandle();
        return;
      }
      const basePrice = parseFloat(plate?.en_price || "0");
      const discountedPrice = basePrice * (1 - parseFloat(finalDiscount) / 100);
      dispatch(addToCart(restaurantName, plate, 1, {}, discountedPrice, ""));
      
      // Trigger cart animation
      if (onAddToCart && containerRef.current) {
        onAddToCart(containerRef.current);
      }
      
      toast.success(
        restaurant?.activeLanguage === "en"
          ? "Added to cart"
          : "تمت الإضافة إلى السلة"
      );
    };
    console.log(coverIndex + "coveerrrrindexx")
    return (
      <Container ref={containerRef} data-product-container index={index} activePlate={activePlate} className="lazy-load" $isFeatured={$isFeatured}>
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
                `https://storage.googleapis.com/ecommerce-bucket-testing/${plate.images[coverIndex].url}`
              }
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
