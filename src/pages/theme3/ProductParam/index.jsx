import React, { useEffect, useRef, useState } from 'react'
import { AddToCart, BackBtn, BackIcon, ButtonWrapper, Carousel, CarouselBack, CarouselForward, CarouselItem, Category, CopyButton, DiscountPrice, FakeContainer, Image, ImagesContainer, ImageWrapper, InfoContainer, Instruction, InstructionContainer, InstructionLabel, ItemCategory, ItemDescription, ItemInfo, ItemInfoWrapper, ItemName, ItemPrice, Loader, LoaderWrapper, Minus, Plus, PriceContainer, Quantity, QuantityPrice, QuantityWrapper, SearchProductContainer } from './styles'
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
import { useLogProduct } from '../../../apis/products/logProduct';
import { convertPrice } from '../../../utilities/convertPrice';

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
    // const basePrice = parseFloat(fetchedProduct?.en_price || 0);
    const [basePrice, setBasePrice] = useState(parseFloat(fetchedProduct?.en_price)); // Example base price
    const [totalPrice, setTotalPrice] = useState(parseFloat(fetchedProduct?.en_price)); // Example base price
    const [instruction, setInstruction] = useState(""); // Example base price
    const [finalDiscount, setfinalDiscount] = useState(0); // Example base price


    const handlePriceChange = (newPrice) => {
        setTotalPrice(newPrice);
    };


    const [CloseAnimation, setCloseAnimation] = useState(true);
    const [carouselIndex, setcarouselIndex] = useState(0);
    const handleBack = () => {
        // Restore body overflow immediately so scrolling works when we return
        document.body.style.overflow = "auto";
        
        setTimeout(() => {
            const newParams = new URLSearchParams(searchParams);
            newParams.delete("productId"); // Remove the productId parameter
            // Keep categoryId so we return to the correct view (All Items or specific category)
            setSearchParams(newParams);
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

    useEffect(() => {
        const handlePopState = () => {
            // Revert to the normal view when back is pressed
            handleBack();
        };

        // Add event listener for popstate
        window.addEventListener("popstate", handlePopState);

        // Cleanup event listener
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
                    <ImagesContainer  squareDimension={fetchedProduct?.square_dimension}  CloseAnimation={CloseAnimation}>
                        {images.length !== 1 && (
                            <CarouselBack
                                CloseAnimation={CloseAnimation}
                                onClick={() => carouselIndex !== 0 && handleleft()}
                            />
                        )}
                        <Carousel
                            carouselIndex={carouselIndex}
                            ref={divRef}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                        >
                            {images.map((image, index) => {
                                return (
                                    <CarouselItem>
                                        <ImageWrapper>
                                            {!loadedIndices[index] && (
                                                <LoaderWrapper>
                                                    <Loader />
                                                </LoaderWrapper>
                                            )}
                                            <Image
                                                // src={`https://storage.googleapis.com/ecommerce-bucket-testing/${image.url}`}
                                                src={
                                                    loadedIndices[index] || index === carouselIndex
                                                        ? `https://storage.googleapis.com/ecommerce-bucket-testing/${image.url}`
                                                        : ""
                                                }
                                                // src={

                                                //      `https://storage.googleapis.com/ecommerce-bucket-testing/${image.url}`

                                                // }
                                                onLoad={() => handleImageLoad(index)}
                                                CloseAnimation={CloseAnimation}
                                                Loaded={loadedIndices[index]}
                                                alt={`Image ${index}`}
                                            />
                                        </ImageWrapper>
                                    </CarouselItem>
                                );
                            })}
                        </Carousel>
                        {images.length !== 1 && (
                            <CarouselForward
                                CloseAnimation={CloseAnimation}
                                onClick={() =>
                                    fetchedProduct?.images.length > carouselIndex + 1 &&
                                    handleright()
                                }
                            />
                        )}
                    </ImagesContainer>
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
                </>
                }
            </SearchProductContainer>

            <BackBtn onClick={handleBack} CloseAnimation={CloseAnimation}>
                <BackIcon />
            </BackBtn>
            <CopyButton onClick={handleCopy} CloseAnimation={CloseAnimation}>
                {!copied ? <FaRegCopy /> : <TiTick />}
            </CopyButton>

        </>
    )
}
