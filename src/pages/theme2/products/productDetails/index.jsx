import React from "react";
import { BackIcon, Image, ImageContainer,ItemDescription,ItemInfo, ItemName, ItemPrice } from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductDetails({
  activePlate,
  setactivePlate,
  menu,
  productPositions,
}) {
  const { restaurantName } = useParams();
  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );

  return (
    <>
    <ImageContainer
      x={productPositions[activePlate]?.x}
      y={productPositions[activePlate]?.y}
      width={productPositions[activePlate]?.width}
    >
      <Image
        src={`https://storage.googleapis.com/ecommerce-bucket-testing/${menu[activePlate]?.image.url}`}
      />
    </ImageContainer>
    <ItemInfo>
        <ItemName>{menu[activePlate]?.en_name}</ItemName>
        <ItemDescription>{menu[activePlate]?.en_description}</ItemDescription>
        <ItemPrice>{menu[activePlate]?.en_price}$</ItemPrice>

    </ItemInfo>
    <BackIcon onClick={()=>setactivePlate(null)}/>

    </>
  );
}
