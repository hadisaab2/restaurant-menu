import React, { useEffect, useState, useRef } from "react";
import {
  AddToCart,
  BackBtn,
  BackIcon,
  Backdrop,
  ButtonWrapper,
  Category,
  FakeContainer,
  Image,
  ImagesContainer,
  ItemCategory,
  ItemDescription,
  ItemInfo,
  ItemInfoWrapper,
  ItemName,
  ItemPrice,
  Minus,
  Plus,
  Quantity,
  QuantityWrapper,
  Wrapper,
  Carousel,
  ImageWrapper,
  CarouselItem,
  CarouselBack,
  CarouselForward,
  LoaderWrapper,
  Loader,
  CopyButton,
  InfoContainer,
  InstructionLabel,
  Instruction,
  InstructionContainer,
  QuantityPrice,
  DiscountPrice,
  PriceContainer,
  ThumbnailGallery,
  ThumbnailItem,
  ThumbnailImage,
  ImageCounter,
  ProductHeader,
  ProductHeaderTitle,
  OutOfStockNotice,
} from "./styles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/cart/cartActions";
import { trackAddToCart, trackItemView } from "../../../../utilities/analyticsTracking";
import CarouselLoader from "./carouselLoader";
import "formiojs/dist/formio.full.css";
import ProductForm from "./Form";
import { FaRegCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { translateForm } from "../../../../utilities/translate";
import { useLogProduct } from "../../../../apis/products/logProduct";
import { convertPrice } from "../../../../utilities/convertPrice";
import { toast } from "react-toastify";

const _ = require('lodash');

export default function ProductDetails({
  activePlate,
  setactivePlate,
  menu,
  plates,
  productPositions,
  categories,
  activeCategoryId,
  setSearchParams,
  searchParams
}) {
  const { restaurantName: paramRestaurantName } = useParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const activeCategory = categories.find((category) => category.id == activeCategoryId)


  const { response } = useLogProduct({
    productId: plates[activePlate]?.id,
  });


  useEffect(() => {
    let formJson = null;
    //if product have a form than we'll take the form of it else we take form of category
    if (!_.isEmpty(plates[activePlate]?.form_json)) {//la etjanab json.parse la undefined
      if (!_.isEmpty(JSON.parse(plates[activePlate]?.form_json))) {
        formJson = plates[activePlate]?.form_json
      } else {
        formJson = activeCategory?.form_json
      }
    }
    !_.isEmpty(formJson) ? setFormSchema(JSON.parse(formJson)) : setFormSchema({})



  }, [restaurant.activeLanguage]);

  // Track product view when product details open
  useEffect(() => {
    if (plates[activePlate]?.id && restaurant?.id) {
      const branchId = restaurant?.branches?.[0]?.id || null;
      trackItemView(
        restaurant.id,
        plates[activePlate].id,
        plates[activePlate].category_id,
        branchId
      );
    }
  }, [activePlate, plates, restaurant?.id]);

  const [formSchema, setFormSchema] = useState({});

  const [formData, setFormData] = useState({});

  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [carouselSwiped, setCarouselSwiped] = useState(false);

  let finalDiscount;

  if (parseFloat(activeCategory.discount) === 0.00) {
    finalDiscount = parseFloat(plates[activePlate].discount);
  } else {
    finalDiscount = parseFloat(activeCategory.discount);
  }

  const enPrice = plates[activePlate]?.en_price || "0";
  const basePrice = enPrice.includes(".") ? parseFloat(enPrice).toFixed(2) : parseFloat(enPrice).toFixed(0);
  const [totalPrice, setTotalPrice] = useState(basePrice); // Example base price
  const [instruction, setInstruction] = useState("");

  const handlePriceChange = (newPrice) => {
    setTotalPrice(newPrice);
  };

  const [CloseAnimation, setCloseAnimation] = useState(true);
  const [carouselIndex, setcarouselIndex] = useState(0);
  const CLOSE_ANIMATION_MS = 450;
  
  // Prevent body scroll when popup is open
  useEffect(() => {
    if (CloseAnimation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [CloseAnimation]);
  
  const closeDetails = () => {
    setCloseAnimation(false);
    setTimeout(() => {
      setactivePlate(null);
      document.body.style.overflow = "auto";
    }, CLOSE_ANIMATION_MS);
  };
  const handleBack = () => {
    // Remove only productId, keep categoryId to stay on the products page
    searchParams.delete("productId");
    setSearchParams(searchParams);
    // Ensure we stay on the products page by keeping categoryId in URL
    if (activeCategoryId && !searchParams.get("categoryId")) {
      searchParams.set("categoryId", activeCategoryId);
      setSearchParams(searchParams);
    }
    closeDetails();
  };
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullUrl = window.location.href; // Copies full URL including pathname and search params
    navigator.clipboard.writeText(fullUrl)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 4000);

  }
  const handleright = () => {
    setCarouselSwiped(true);
    setcarouselIndex(carouselIndex + 1);
  };
  const handleleft = () => {
    setCarouselSwiped(true);
    setcarouselIndex(carouselIndex - 1);
  };

  const divRef = useRef(null);
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (startX) {
      const currentX = event.touches[0].clientX;
      const deltaX = currentX - startX;

      if (deltaX > 5) {
        if (carouselIndex !== 0) handleleft();
      } else if (deltaX < -5) {
        if (plates[activePlate].images.length > carouselIndex + 1)
          handleright();
      }

      setStartX(null);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      // Revert to the products list (selected category) when browser back is pressed
      closeDetails();
      searchParams.delete("productId");
      // Keep categoryId to stay on products page
      if (activeCategoryId && !searchParams.get("categoryId")) {
        searchParams.set("categoryId", activeCategoryId);
      }
      setSearchParams(searchParams);
    };

    // Add event listener for popstate
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listener
    return () => window.removeEventListener("popstate", handlePopState);
  }, [activeCategoryId, searchParams, setSearchParams, setactivePlate]);

  function getRequiredKeys(formSchema) {
    return formSchema.components
      .filter(component => component.validate?.required)
      .map(component => component.key);
  }

  function validateFormData(formSchema, formData) {
    const errors = {};
    const requiredKeys = getRequiredKeys(formSchema);

    requiredKeys.forEach(key => {
      if (
        !(key in formData) ||
        formData[key]?.length === 0 ||
        JSON.stringify(formData[key]) === '{}'
      ) {
        errors[key] = 'This field is required.';
      }
    });

    return errors;
  }


  const handleAddToCart = () => {    
    if (JSON.stringify(formSchema) !== "{}") {
      const errors = validateFormData(formSchema, formData);

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors); // update state with errors
        return; // block add to cart
      }
    }


    let discountedPrice = (totalPrice * (1 - parseFloat(finalDiscount) / 100))
    closeDetails();
    dispatch(
      addToCart(restaurantName, plates[activePlate], quantity, formData, discountedPrice, instruction)
    );
    
    // Track add to cart
    if (restaurant?.id && plates[activePlate]?.id) {
      const branchId = restaurant?.branches?.[0]?.id || null;
      trackAddToCart(
        restaurant.id,
        plates[activePlate].id,
        plates[activePlate].category_id,
        quantity,
        branchId
      );
    }
    
    toast.success(
      restaurant?.activeLanguage === "en"
        ? "Added to cart"
        : "تمت الإضافة إلى السلة"
    );
    setQuantity(1);
    setFormErrors({})
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleFormChange = (submission) => {
    console.log(submission.data);

    setFormData(submission.data);
  };
  // Get restaurant logo URL for fallback
  const restaurantLogoUrl = restaurant?.logoURL
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
    : null;

  // this code is to put the image cover at the beggining of the array
  let images = [...(plates[activePlate]?.images ?? [])];
  
  // If no images available, create a fallback image object with restaurant logo
  if (images.length === 0 && restaurantLogoUrl) {
    images = [{
      id: 'fallback-logo',
      url: restaurant.logoURL,
      isFallback: true
    }];
  }
  
  // Find the index of the image that should be first
  const index = images.findIndex((image) => image.id === plates[activePlate]?.new_cover_id);

  // If the image is found and it's not already the first element, move it to the front
  if (index > 0) {
    const [imageToBeFirst] = images.splice(index, 1); // Remove the image from its current position
    images.unshift(imageToBeFirst); // Add it to the beginning of the array
  }

  const [loadedIndices, setLoadedIndices] = useState({});

  const handleImageLoad = (index) => {
    setLoadedIndices((prev) => ({
      ...prev,
      [index]: true,
    }));
  };


  const rawDescription =
    restaurant?.activeLanguage === "en"
      ? plates[activePlate]?.en_description
      : plates[activePlate]?.ar_description;
  
  // Remove <br> tags from description
  const description = rawDescription 
    ? rawDescription.replace(/<br\s*\/?>/gi, '')
    : '';

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

  let features = JSON.parse(restaurant.features)
  const isOutOfStock =
    Boolean(plates[activePlate]?.out_of_stock) ||
    Number(plates[activePlate]?.out_of_stock) === 1;





  // Get category name from activeCategory
  const categoryName = activeCategory
    ? (restaurant?.activeLanguage === "en" 
        ? activeCategory.en_category 
        : activeCategory.ar_category)
    : "";

  return (
    <>
      <Backdrop 
        CloseAnimation={CloseAnimation}
        onClick={handleBack}
      />
      <Wrapper
        // x={productPositions[activePlate]?.x}
        // y={productPositions[activePlate]?.y}
        // width={productPositions[activePlate]?.width}
        CloseAnimation={CloseAnimation}
      >
        <ProductHeader CloseAnimation={CloseAnimation}>
          <BackBtn onClick={handleBack} CloseAnimation={CloseAnimation}>
            <BackIcon />
          </BackBtn>
          <ProductHeaderTitle activeLanguage={restaurant?.activeLanguage}>
            {categoryName}
          </ProductHeaderTitle>
          <CopyButton onClick={handleCopy} CloseAnimation={CloseAnimation}>
            {!copied ? <FaRegCopy /> : <TiTick />}
          </CopyButton>
        </ProductHeader>
        
        <ImagesContainer squareDimension={plates[activePlate]?.square_dimension} CloseAnimation={CloseAnimation}>
          {images.length !== 1 && (
            <>
              <CarouselBack
                CloseAnimation={CloseAnimation}
                onClick={() => carouselIndex !== 0 && handleleft()}
                disabled={carouselIndex === 0}
              >
                <IoIosArrowBack />
              </CarouselBack>
              <CarouselForward
                CloseAnimation={CloseAnimation}
                onClick={() =>
                  images.length > carouselIndex + 1 &&
                  handleright()
                }
                disabled={images.length <= carouselIndex + 1}
              >
                <IoIosArrowForward />
              </CarouselForward>
            </>
          )}
          <Carousel
            carouselIndex={carouselIndex}
            ref={divRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {images.map((image, index) => {
              return (
                <CarouselItem key={image.id || index}>
                  <ImageWrapper>
                    {!loadedIndices[index] && (
                      <LoaderWrapper>
                        <Loader />
                      </LoaderWrapper>
                    )}
                    <Image
                      src={
                        loadedIndices[index] || index === carouselIndex
                          ? (image.url 
                              ? `https://storage.googleapis.com/ecommerce-bucket-testing/${image.url}`
                              : restaurantLogoUrl || "")
                          : ""
                      }
                      onLoad={() => handleImageLoad(index)}
                      onError={(e) => {
                        // If image fails to load, use restaurant logo as fallback
                        if (restaurantLogoUrl && e.target.src !== restaurantLogoUrl) {
                          e.target.src = restaurantLogoUrl;
                        }
                      }}
                      CloseAnimation={CloseAnimation}
                      Loaded={loadedIndices[index]}
                      alt={`Image ${index + 1}`}
                    />
                    {images.length > 1 && (
                      <ImageCounter show={CloseAnimation}>
                        {carouselIndex + 1} / {images.length}
                      </ImageCounter>
                    )}
                  </ImageWrapper>
                </CarouselItem>
              );
            })}
          </Carousel>
          {images.length > 1 && (
            <ThumbnailGallery>
              {images.map((image, index) => (
                <ThumbnailItem
                  key={image.id || index}
                  active={index === carouselIndex}
                  onClick={() => {
                    setCarouselSwiped(true);
                    setcarouselIndex(index);
                  }}
                >
                  <ThumbnailImage
                    src={
                      image.url
                        ? `https://storage.googleapis.com/ecommerce-bucket-testing/${image.url}`
                        : restaurantLogoUrl || ""
                    }
                    alt={`Thumbnail ${index + 1}`}
                    onError={(e) => {
                      // If thumbnail fails to load, use restaurant logo as fallback
                      if (restaurantLogoUrl && e.target.src !== restaurantLogoUrl) {
                        e.target.src = restaurantLogoUrl;
                      }
                    }}
                  />
                </ThumbnailItem>
              ))}
            </ThumbnailGallery>
          )}
        </ImagesContainer>
        {/* <FakeContainer squareDimension={plates[activePlate]?.square_dimension} CloseAnimation={CloseAnimation} /> */}
        {images.length !== 1 && (
          <CarouselLoader
            images={images}
            carouselIndex={carouselIndex}
            CloseAnimation={CloseAnimation}
            carouselSwiped={carouselSwiped}
          />
        )}

        <ItemInfoWrapper>
          <InfoContainer>

            <ItemInfo CloseAnimation={CloseAnimation} activeLanguage={restaurant.activeLanguage}>
              <ItemName activeLanguage={restaurant.activeLanguage} >
                {restaurant.activeLanguage == "en"
                  ? plates[activePlate]?.en_name
                  : plates[activePlate]?.ar_name}
              </ItemName>
              {!_.isEmpty(plates[activePlate]?.en_price) && (
                <PriceContainer>
                  <ItemPrice activeLanguage={restaurant.activeLanguage} discounted={finalDiscount != 0.00}>
                    {convertPrice(totalPrice, currencySymbol)}
                  </ItemPrice>
                  {finalDiscount != 0.00 &&
                    <DiscountPrice activeLanguage={restaurant.activeLanguage}>
                      {convertPrice(totalPrice * (1 - parseFloat(finalDiscount) / 100), currencySymbol)}
                    </DiscountPrice>
                  }
                </PriceContainer>
              )}
              {(!_.isEmpty(description)) && (

                <ItemDescription activeLanguage={restaurant.activeLanguage}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
              {isOutOfStock && (
                <OutOfStockNotice>
                  {restaurant.activeLanguage === "en"
                    ? "Out of stock"
                    : "غير متوفر حالياً"}
                </OutOfStockNotice>
              )}

              {formSchema?.components && <ProductForm formSchema={formSchema} onPriceChange={handlePriceChange} formData={formData} setFormData={setFormData} basePrice={basePrice} formErrors={formErrors} />}
              <InstructionContainer activeLanguage={restaurant.activeLanguage}>
                <InstructionLabel>{restaurant.activeLanguage == "en"
                  ? "Any Special Instuction ?"
                  : "أي تعليمات خاصة؟"}</InstructionLabel>
                <Instruction activeLanguage={restaurant.activeLanguage} onChange={(e) => setInstruction(e.target.value)} placeholder={restaurant.activeLanguage == "en"
                  ? "Special Instruction"
                  : "تعليمات خاصة"} />
              </InstructionContainer>

            </ItemInfo>
          </InfoContainer>
        </ItemInfoWrapper>
        {features?.cart && !isOutOfStock &&
          <ButtonWrapper CloseAnimation={CloseAnimation}>
            <QuantityWrapper CloseAnimation={CloseAnimation}>
              <Plus onClick={handleIncrement}>+</Plus>
              <Quantity>{quantity}</Quantity>
              <Minus onClick={handleDecrement}>-</Minus>
            </QuantityWrapper>
            <AddToCart onClick={handleAddToCart}>{restaurant.activeLanguage == "en"
              ? "Add To Cart"
              : "أضف إلى السلة"}
              <QuantityPrice>
                {convertPrice(quantity * (totalPrice * (1 - parseFloat(finalDiscount) / 100)), currencySymbol)}
              </QuantityPrice>
            </AddToCart>
          </ButtonWrapper>
        }
      </Wrapper>
    </>
  );
}
