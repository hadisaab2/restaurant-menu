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
} from "./styles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/cart/cartActions";

export default function ProductDetails({
  activePlate,
  setactivePlate,
  menu,
  plates,
  productPositions,
}) {
  const { restaurantName } = useParams();
  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [CloseAnimation, setCloseAnimation] = useState(true);
  const [carouselIndex, setcarouselIndex] = useState(0);
  const handleBack = () => {
    setTimeout(() => {
      setactivePlate(null);
      document.body.style.overflow = "auto";
    }, 800);
    setCloseAnimation(false);
    setcarouselIndex(0);
  };

  const handleright = () => {
    setcarouselIndex(carouselIndex + 1);
  };
  const handleleft = () => {
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
      // Revert to the normal view when back is pressed
      handleBack();
    };

    // Add event listener for popstate
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listener
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleAddToCart = () => {
    setTimeout(() => {
      setactivePlate(null);
      document.body.style.overflow = "auto";
    }, 800);
    dispatch(addToCart(plates[activePlate], quantity));
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

  // this code is to put the image cover at the beggining of the array
  let images = [...plates[activePlate]?.images];

  // Find the index of the image that should be first
  const index = images.findIndex((image) =>
    image.url.includes(plates[activePlate].cover_id)
  );

  // If the image is found and it's not already the first element, move it to the front
  if (index > 0) {
    const [imageToBeFirst] = images.splice(index, 1); // Remove the image from its current position
    images.unshift(imageToBeFirst); // Add it to the beginning of the array
  }

  const description =
    activeLanuguage === "en"
      ? plates[activePlate]?.en_description
      : plates[activePlate]?.ar_description;

  return (
    <>
      <Wrapper
        x={productPositions[activePlate]?.x}
        y={productPositions[activePlate]?.y}
        width={productPositions[activePlate]?.width}
        CloseAnimation={CloseAnimation}
      >
        <ItemCategory CloseAnimation={CloseAnimation}>
          <Category>
            {activeLanuguage == "en" ? menu?.en_category : menu?.ar_category}
          </Category>
        </ItemCategory>
        <ImagesContainer CloseAnimation={CloseAnimation}>
          {images.length !== 1 && (
            <CarouselBack onClick={() => carouselIndex !== 0 && handleleft()} />
          )}
          <Carousel
            carouselIndex={carouselIndex}
            ref={divRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {images.map((image) => {
              return (
                <CarouselItem>
                  <ImageWrapper>
                    <Image
                      src={`https://storage.googleapis.com/ecommerce-bucket-testing/${image.url}`}
                      CloseAnimation={CloseAnimation}
                    />
                  </ImageWrapper>
                </CarouselItem>
              );
            })}
          </Carousel>
          {images.length !== 1 && (
            <CarouselForward
              onClick={() =>
                plates[activePlate].images.length > carouselIndex + 1 &&
                handleright()
              }
            />
          )}
        </ImagesContainer>
        <FakeContainer CloseAnimation={CloseAnimation} />
        <ItemInfoWrapper>
          <ItemInfo CloseAnimation={CloseAnimation}>
            <ItemName>
              {activeLanuguage == "en"
                ? plates[activePlate]?.en_name
                : plates[activePlate]?.ar_name}
            </ItemName>
            <ItemDescription
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {plates[activePlate]?.en_price!== "" && <ItemPrice>{plates[activePlate]?.en_price} $</ItemPrice>}

            <ButtonWrapper>
              <QuantityWrapper>
                <Plus onClick={handleIncrement}>+</Plus>
                <Quantity>{quantity}</Quantity>
                <Minus onClick={handleDecrement}>-</Minus>
              </QuantityWrapper>
              <AddToCart onClick={handleAddToCart}>Add To Cart</AddToCart>
            </ButtonWrapper>
          </ItemInfo>
        </ItemInfoWrapper>
      </Wrapper>

      <BackBtn onClick={handleBack} CloseAnimation={CloseAnimation}>
        <BackIcon />
      </BackBtn>
    </>
  );
}
