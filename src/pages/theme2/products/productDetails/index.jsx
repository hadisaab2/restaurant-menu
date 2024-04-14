import React, { useEffect, useState } from "react";
import {
  AddToCart,
  BackBtn,
  BackIcon,
  ButtonWrapper,
  Category,
  FakeContainer,
  Image,
  ImageContainer,
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
} from "./styles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, adjustQuantity } from "../../../../redux/cart/cartActions";
import { createBrowserHistory } from 'history';


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
  const cart = useSelector((state) => state.cart);

  const [quantity, setQuantity] = useState(1);
  const [CloseAnimation, setCloseAnimation] = useState(true);

  const handleBack = () => {
    setTimeout(() => {
      setactivePlate(null);
      document.body.style.overflow = "auto";
    }, 800);
    setCloseAnimation(false);
  };

  useEffect(() => {
    const history = createBrowserHistory();

    // Push a new entry onto the history stack.
    history.push(`/${restaurantName}`);

    // Listen for changes to the current location.
    const unlisten = history.listen((location, action) => {
      if (action === 'POP') {
        handleBack()
        // Handle the back button action here.
      }
    });

    return () => {
      // Clean up the listener when the component unmounts
      unlisten();
    };
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
        <ImageContainer CloseAnimation={CloseAnimation}>
          <Image
            src={`https://storage.googleapis.com/ecommerce-bucket-testing/${plates[activePlate]?.image.url}`}
            CloseAnimation={CloseAnimation}
          />
        </ImageContainer>
        <FakeContainer CloseAnimation={CloseAnimation} />
        <ItemInfoWrapper>
          <ItemInfo CloseAnimation={CloseAnimation}>
            <ItemName>
              {activeLanuguage == "en"
                ? plates[activePlate]?.en_name
                : plates[activePlate]?.ar_name}
            </ItemName>
            <ItemDescription>
              {activeLanuguage == "en"
                ? plates[activePlate]?.en_description
                : plates[activePlate]?.ar_description}
            </ItemDescription>
            <ItemPrice>{plates[activePlate]?.en_price} $</ItemPrice>

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
