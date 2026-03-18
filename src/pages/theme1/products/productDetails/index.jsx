import React, { useEffect, useState, useRef } from "react";
import {
  AddToCart,
  BackBtn,
  BackIcon,
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
  OutOfStockNotice,
  SwiperWrapper,
  MagnifyBtn,
  ZoomOverlay,
  ZoomCloseBtn,
  ZoomImage,
} from "./styles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/cart/cartActions";
import CarouselLoader from "./carouselLoader";
import "formiojs/dist/formio.full.css";
import ProductForm from "./Form";
import { FaRegCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { MdZoomIn } from "react-icons/md";
import { translateForm } from "../../../../utilities/translate";
import { useLogProduct } from "../../../../apis/products/logProduct";
import { convertPrice } from "../../../../utilities/convertPrice";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

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



  }, [restaurant.activeLanguage])

  const [formSchema, setFormSchema] = useState({});

  const [formData, setFormData] = useState({});

  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [carouselSwiped, setCarouselSwiped] = useState(false);
  const swiperRef = useRef(null);

  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomTranslate, setZoomTranslate] = useState({ x: 0, y: 0 });
  const [zoomDragging, setZoomDragging] = useState(false);
  const zoomLastTouch = useRef(null);
  const zoomLastDist = useRef(null);
  const zoomLastTap = useRef(0);

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
  const handleBack = () => {
    setTimeout(() => {
      setactivePlate(null);
      document.body.style.overflow = "auto";

    }, 700);
    setCloseAnimation(false);
    searchParams.delete("productId"); // Remove the parameter
    setSearchParams(searchParams);
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
        if (images.length > carouselIndex + 1)
          handleright();
      }

      setStartX(null);
    }
  };

  const getZoomImageUrl = () => {
    const img = images[carouselIndex];
    if (!img) return "";
    return img.url
      ? `https://storage.googleapis.com/ecommerce-bucket-testing/${img.url}`
      : restaurantLogoUrl || "";
  };

  const handleZoomTouchStart = (e) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      zoomLastDist.current = Math.hypot(dx, dy);
    } else if (e.touches.length === 1) {
      const now = Date.now();
      if (now - zoomLastTap.current < 300) {
        setZoomScale((s) => (s > 1 ? 1 : 2.5));
        setZoomTranslate({ x: 0, y: 0 });
      }
      zoomLastTap.current = now;
      zoomLastTouch.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      setZoomDragging(true);
    }
  };

  const handleZoomTouchMove = (e) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      if (zoomLastDist.current) {
        const factor = dist / zoomLastDist.current;
        setZoomScale((s) => Math.min(Math.max(s * factor, 1), 5));
      }
      zoomLastDist.current = dist;
    } else if (e.touches.length === 1 && zoomDragging && zoomScale > 1) {
      const dx = e.touches[0].clientX - zoomLastTouch.current.x;
      const dy = e.touches[0].clientY - zoomLastTouch.current.y;
      setZoomTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
      zoomLastTouch.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleZoomTouchEnd = () => {
    zoomLastDist.current = null;
    setZoomDragging(false);
  };

  const openZoom = () => {
    setZoomScale(1);
    setZoomTranslate({ x: 0, y: 0 });
    setZoomOpen(true);
  };

  const closeZoom = () => setZoomOpen(false);

  useEffect(() => {
    const handlePopState = () => {
      handleBack();
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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
    setTimeout(() => {
      setactivePlate(null);
      document.body.style.overflow = "auto";
    }, 800);
    dispatch(
      addToCart(restaurantName, plates[activePlate], quantity, formData, discountedPrice, instruction)

    );
    setCloseAnimation(false);
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


  const description =
    restaurant?.activeLanguage === "en"
      ? plates[activePlate]?.en_description
      : plates[activePlate]?.ar_description;

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

  const carouselStyle = restaurant?.product_details_carousel_style || "normal";

  return (
    <>
      <Wrapper
        // x={productPositions[activePlate]?.x}
        // y={productPositions[activePlate]?.y}
        // width={productPositions[activePlate]?.width}
        CloseAnimation={CloseAnimation}
      >
        <ItemCategory CloseAnimation={CloseAnimation}>
          <Category>
            {restaurant.activeLanguage == "en"
              ? menu?.en_category
              : menu?.ar_category}
          </Category>
        </ItemCategory>
        <ImagesContainer squareDimension={plates[activePlate]?.square_dimension} CloseAnimation={CloseAnimation} isNormalCarousel={carouselStyle === "normal"}>
          {images.length === 1 ? (
            <Carousel carouselIndex={0}>
              <CarouselItem>
                <ImageWrapper>
                  {!loadedIndices[0] && (
                    <LoaderWrapper>
                      <Loader />
                    </LoaderWrapper>
                  )}
                  <Image
                    src={
                      images[0].url
                        ? `https://storage.googleapis.com/ecommerce-bucket-testing/${images[0].url}`
                        : restaurantLogoUrl || ""
                    }
                    onLoad={() => handleImageLoad(0)}
                    onError={(e) => {
                      if (restaurantLogoUrl && e.target.src !== restaurantLogoUrl) {
                        e.target.src = restaurantLogoUrl;
                      }
                    }}
                    CloseAnimation={CloseAnimation}
                    Loaded={loadedIndices[0]}
                    alt="Image 0"
                  />
                  <MagnifyBtn onClick={openZoom}><MdZoomIn /></MagnifyBtn>
                </ImageWrapper>
              </CarouselItem>
            </Carousel>
          ) : carouselStyle === "normal" ? (
            <>
              <CarouselBack
                CloseAnimation={CloseAnimation}
                onClick={() => {
                  setCarouselSwiped(true);
                  if (carouselIndex !== 0) handleleft();
                }}
              />
              <CarouselForward
                CloseAnimation={CloseAnimation}
                onClick={() => {
                  setCarouselSwiped(true);
                  if (images.length > carouselIndex + 1) handleright();
                }}
              />
              <Carousel
                carouselIndex={carouselIndex}
                ref={divRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                {images.map((image, index) => (
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
                          if (restaurantLogoUrl && e.target.src !== restaurantLogoUrl) {
                            e.target.src = restaurantLogoUrl;
                          }
                        }}
                        CloseAnimation={CloseAnimation}
                        Loaded={loadedIndices[index]}
                        alt={`Image ${index}`}
                      />
                      {carouselIndex === index && (
                        <MagnifyBtn onClick={openZoom}><MdZoomIn /></MagnifyBtn>
                      )}
                    </ImageWrapper>
                  </CarouselItem>
                ))}
              </Carousel>
            </>
          ) : carouselStyle === "effect-cards" ? (
            <>
              <CarouselBack
                CloseAnimation={CloseAnimation}
                onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
              />
              <SwiperWrapper>
                <Swiper
                  modules={[EffectCards]}
                  effect="cards"
                  grabCursor
                  key={plates[activePlate]?.id}
                  onSwiper={(sw) => { swiperRef.current = sw; }}
                  onSlideChange={(sw) => {
                    setcarouselIndex(sw.realIndex);
                    setCarouselSwiped(true);
                  }}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={image.id || index}>
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
                            if (restaurantLogoUrl && e.target.src !== restaurantLogoUrl) {
                              e.target.src = restaurantLogoUrl;
                            }
                          }}
                          CloseAnimation={CloseAnimation}
                          Loaded={loadedIndices[index]}
                          $cardSlide
                          alt={`Image ${index}`}
                        />
                        {carouselIndex === index && (
                          <MagnifyBtn onClick={openZoom}><MdZoomIn /></MagnifyBtn>
                        )}
                      </ImageWrapper>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </SwiperWrapper>
              <CarouselForward
                CloseAnimation={CloseAnimation}
                onClick={() => swiperRef.current && swiperRef.current.slideNext()}
              />
            </>
          ) : (
            <>
              <SwiperWrapper>
                <Swiper
                  onSwiper={(sw) => { swiperRef.current = sw; }}
                  onSlideChange={(sw) => {
                    setcarouselIndex(sw.realIndex);
                    setCarouselSwiped(true);
                  }}
                  modules={[Pagination]}
                  pagination={{ type: "fraction" }}
                  className="product-details-swiper product-details-swiper-fraction"
                  initialSlide={0}
                  key={plates[activePlate]?.id}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={image.id || index}>
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
                            if (restaurantLogoUrl && e.target.src !== restaurantLogoUrl) {
                              e.target.src = restaurantLogoUrl;
                            }
                          }}
                          CloseAnimation={CloseAnimation}
                          Loaded={loadedIndices[index]}
                          $cardSlide
                          alt={`Image ${index}`}
                        />
                        {carouselIndex === index && (
                          <MagnifyBtn onClick={openZoom}><MdZoomIn /></MagnifyBtn>
                        )}
                      </ImageWrapper>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </SwiperWrapper>
            </>
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

      <BackBtn onClick={handleBack} CloseAnimation={CloseAnimation}>
        <BackIcon />
      </BackBtn>
      <CopyButton onClick={handleCopy} CloseAnimation={CloseAnimation}>
        {!copied ? <FaRegCopy /> : <TiTick />}
      </CopyButton>
      {zoomOpen && (
        <ZoomOverlay
          onTouchStart={handleZoomTouchStart}
          onTouchMove={handleZoomTouchMove}
          onTouchEnd={handleZoomTouchEnd}
        >
          <ZoomCloseBtn onClick={closeZoom}><IoClose /></ZoomCloseBtn>
          <ZoomImage
            src={getZoomImageUrl()}
            style={{
              transform: `scale(${zoomScale}) translate(${zoomTranslate.x / zoomScale}px, ${zoomTranslate.y / zoomScale}px)`,
            }}
            alt="Zoom"
          />
        </ZoomOverlay>
      )}
    </>
  );
}
