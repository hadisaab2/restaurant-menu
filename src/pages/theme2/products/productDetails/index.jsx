import React, { useState } from "react";
import {
  BackBtn,
  BackIcon,
  Category,
  Image,
  ImageContainer,
  ItemCategory,
  ItemDescription,
  ItemInfo,
  ItemInfoWrapper,
  ItemName,
  ItemPrice,
  Wrapper,
} from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const [CloseAnimation, setCloseAnimation] = useState(true);
  const handleBack = () => {
    setTimeout(() => {
      setactivePlate(null);
    }, 800);
    document.body.style.overflow = 'auto';

    setCloseAnimation(false);
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
          <Category>{activeLanuguage=="en"?menu?.en_category:menu?.ar_category}</Category>
          
        </ItemCategory>
        <ImageContainer CloseAnimation={CloseAnimation}>
          <Image
            src={`https://storage.googleapis.com/ecommerce-bucket-testing/${plates[activePlate]?.image.url}`}
          />
        </ImageContainer>
      </Wrapper>
      <BackBtn onClick={handleBack} CloseAnimation={CloseAnimation} >
      <BackIcon  />
      </BackBtn>
      <ItemInfoWrapper CloseAnimation={CloseAnimation}>
        <ItemInfo>
          <ItemName>{activeLanuguage=="en"?plates[activePlate]?.en_name:plates[activePlate]?.ar_name}</ItemName>
          <ItemDescription>
            {activeLanuguage=="en"?plates[activePlate]?.en_description:plates[activePlate]?.ar_description}
          </ItemDescription>
          <ItemPrice>{plates[activePlate]?.en_price} $</ItemPrice>
        </ItemInfo>
      </ItemInfoWrapper>
    </>
  );
}
