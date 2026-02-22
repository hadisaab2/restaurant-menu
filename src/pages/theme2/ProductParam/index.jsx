import React, { useEffect, useRef, useState } from 'react'
import { AddToCart, BackBtn, BackIcon, ButtonWrapper, Carousel, CarouselBack, CarouselForward, CarouselItem, Category, CopyButton, DiscountPrice, FakeContainer, Image, ImagesContainer, ImageWrapper, InfoContainer, Instruction, InstructionContainer, InstructionLabel, ItemCategory, ItemDescription, ItemInfo, ItemInfoWrapper, ItemName, ItemPrice, Loader, LoaderWrapper, Minus, Plus, PriceContainer, Quantity, QuantityPrice, QuantityWrapper, SearchProductContainer, OutOfStockNotice, SwiperWrapper, MagnifyBtn, ZoomOverlay, ZoomCloseBtn, ZoomImage } from './styles'
import { useGetProduct } from '../../../apis/products/getProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import { addToCart } from '../../../redux/cart/cartActions';
import CarouselLoader from "./carouselLoader";
import "formiojs/dist/formio.full.css";
import ProductForm from "./Form";
import { FaRegCopy } from 'react-icons/fa6';
import { TiTick } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';
import { MdZoomIn } from 'react-icons/md';
import { useLogProduct } from '../../../apis/products/logProduct';
import { convertPrice } from '../../../utilities/convertPrice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

export default function ProductParam({ productId, setSearchParams, searchParams }) {
    const { restaurantName: paramRestaurantName } = useParams();

    const hostname = window.location.hostname;
    const subdomain = hostname.split(".")[0];
    const restaurantName =
        subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
            ? subdomain
            : paramRestaurantName;
    const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);

    let formJson = null;


    const { response: fetchedProduct, isLoading: productLoading } = useGetProduct({
        productId: productId,
        onSuccess: () => {
        }
    });

    const { response } = useLogProduct({
        productId: productId,
    });


    useEffect(() => {
        if (fetchedProduct?.en_price && !productLoading) {
            setBasePrice(parseFloat(fetchedProduct.en_price));
            setTotalPrice(parseFloat(fetchedProduct?.en_price))
            if (parseFloat(fetchedProduct?.category?.discount) === 0.00) {
                setfinalDiscount(parseFloat(fetchedProduct?.discount))
            } else {
                setfinalDiscount(parseFloat(fetchedProduct.category.discount))
            }

        }
    }, [productLoading]);



    if (!_.isEmpty(fetchedProduct?.form_json)) {//la etjanab json.parse la undefined
        if (!_.isEmpty(JSON.parse(fetchedProduct?.form_json))) {
            formJson = fetchedProduct?.form_json
        } else {
            formJson = fetchedProduct?.category?.form_json
        }
    }
    const [formSchema, setFormSchema] = useState({});

    useEffect(() => {
        if (!_.isEmpty(formJson)) {
            setFormSchema(JSON.parse(formJson));
        }
    }, [formJson]);

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
    // const basePrice = parseFloat(fetchedProduct?.en_price || 0);
    const [basePrice, setBasePrice] = useState(parseFloat(fetchedProduct?.en_price)); // Example base price
    const [totalPrice, setTotalPrice] = useState(parseFloat(fetchedProduct?.en_price)); // Example base price
    const [instruction, setInstruction] = useState(""); // Example base price
    const [finalDiscount, setfinalDiscount] = useState(0); // Example base price
    const isOutOfStock =
        Boolean(fetchedProduct?.out_of_stock) ||
        Number(fetchedProduct?.out_of_stock) === 1;


    const handlePriceChange = (newPrice) => {
        setTotalPrice(newPrice);
    };


    const [CloseAnimation, setCloseAnimation] = useState(true);
    const [carouselIndex, setcarouselIndex] = useState(0);
    const handleBack = () => {
        setTimeout(() => {
            searchParams.delete("productId"); // Remove the parameter
            setSearchParams(searchParams);
        }, 800);

        setCloseAnimation(false);
        setcarouselIndex(0);
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
                if (fetchedProduct.images.length > carouselIndex + 1)
                    handleright();
            }

            setStartX(null);
        }
    };

    const restaurantLogoUrl = restaurant?.logoURL
        ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
        : null;

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
            searchParams.delete("productId"); // Remove the parameter
            setSearchParams(searchParams);
            document.body.style.overflow = "auto";
        }, 800);
        dispatch(
            addToCart(restaurantName, fetchedProduct, quantity, formData, discountedPrice, instruction)
        );
        setCloseAnimation(false);
        setQuantity(1);
    };
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    let images = [...(fetchedProduct?.images ?? [])];
    // Find the index of the image that should be first
  const index = images.findIndex((image) => image.id === fetchedProduct.new_cover_id);

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
            ? fetchedProduct?.en_description
            : fetchedProduct?.ar_description;

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

    const carouselStyle = restaurant?.product_details_carousel_style || "normal";


    return (
        <>

            <SearchProductContainer
                // x={productPositions[activePlate]?.x}
                // y={productPositions[activePlate]?.y}
                // width={productPositions[activePlate]?.width}
                CloseAnimation={CloseAnimation}
            >
                {!productLoading && <>
                    <ItemCategory CloseAnimation={CloseAnimation}>
                        <Category>
                            {restaurant.activeLanguage == "en"
                                ? fetchedProduct?.category?.en_category
                                : fetchedProduct?.category?.ar_category}
                        </Category>
                    </ItemCategory>
                    <ImagesContainer squareDimension={fetchedProduct?.square_dimension} CloseAnimation={CloseAnimation} isNormalCarousel={carouselStyle === "normal"}>
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
                                                            ? (image?.url
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
                                        key={fetchedProduct?.id}
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
                                                                ? (image?.url
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
                                        key={fetchedProduct?.id}
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
                                                                ? (image?.url
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
                    {images.length !== 1 && carouselStyle !== "normal" && (
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
                                        ? fetchedProduct?.en_name
                                        : fetchedProduct?.ar_name}
                                </ItemName>

                                {!_.isEmpty(fetchedProduct?.en_price) && (
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
                                <ItemDescription activeLanguage={restaurant.activeLanguage}
                                    dangerouslySetInnerHTML={{ __html: description }}
                                />
                                {isOutOfStock && (
                                    <OutOfStockNotice>
                                        {restaurant.activeLanguage === "en"
                                            ? "Out of stock"
                                            : "غير متوفر حالياً"}
                                    </OutOfStockNotice>
                                )}
                                {formSchema?.components && <ProductForm formSchema={formSchema} onPriceChange={handlePriceChange} formData={formData} setFormData={setFormData} basePrice={fetchedProduct?.en_price} formErrors={formErrors} />}
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
                    {!isOutOfStock && (
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
                    )}
                </>
                }
            </SearchProductContainer>

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
    )
}
