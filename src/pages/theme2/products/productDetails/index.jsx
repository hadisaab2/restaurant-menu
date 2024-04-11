import React, { useEffect, useState } from "react";
import {
  BackBtn,
  BackIcon,
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
  nbOfChanges
}) {
  const { restaurantName } = useParams();
  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );
  const [CloseAnimation, setCloseAnimation] = useState(true);
  const handleBack = () => {
    setTimeout(() => {
      setactivePlate(null);
      document.body.style.overflow = 'auto';

    }, 800);

    setCloseAnimation(false);
  };

  useEffect(() => {
    const handlePopstate = () => {
      handleBack();
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);
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
            CloseAnimation={CloseAnimation} 
          />
        </ImageContainer>
        <FakeContainer CloseAnimation={CloseAnimation}/>
        <ItemInfoWrapper>
        <ItemInfo CloseAnimation={CloseAnimation}>
          <ItemName>{activeLanuguage=="en"?plates[activePlate]?.en_name:plates[activePlate]?.ar_name}</ItemName>
          <ItemDescription>
            {activeLanuguage=="en"?plates[activePlate]?.en_description:plates[activePlate]?.ar_description}
          </ItemDescription>
          <ItemPrice>{plates[activePlate]?.en_price} $</ItemPrice>
        </ItemInfo>
        </ItemInfoWrapper>
      </Wrapper>
      <BackBtn onClick={handleBack} CloseAnimation={CloseAnimation} >
      <BackIcon  />
      </BackBtn>

    </>
  );
}
