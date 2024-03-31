import React, { useState } from "react";
import {
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
          <BackIcon onClick={handleBack} />
          <Category>{menu?.en_category}</Category>
        </ItemCategory>
        <ImageContainer CloseAnimation={CloseAnimation}>
          <Image
            src={`https://storage.googleapis.com/ecommerce-bucket-testing/${plates[activePlate]?.image.url}`}
          />
        </ImageContainer>
        <ItemInfoWrapper CloseAnimation={CloseAnimation}>
        <ItemInfo >
          <ItemName>{plates[activePlate]?.en_name}</ItemName>
          <ItemDescription>
            {plates[activePlate]?.en_description}
          </ItemDescription>
          <ItemPrice>{plates[activePlate]?.en_price} $</ItemPrice>
        </ItemInfo>
        </ItemInfoWrapper>
      </Wrapper>
    </>
  );
}
