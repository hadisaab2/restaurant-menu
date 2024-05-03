import React, { useState } from "react";
import {
  Container,
  Image,
  ImageContainer,
  Loader,
  LoaderWrapper,
  PlateName,
  PlatePrice,
  TextContainer,
  Wrapper,
} from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Product = React.forwardRef(
  ({ plate, setactivePlate, activePlate, index, showPopup }, ref) => {
    const { restaurantName } = useParams();
    const activeLanuguage = useSelector(
      (state) => state.restaurant?.[restaurantName].activeLanguage
    );
    const [imageLoaded, setimageLoaded] = useState(false);
    const handleImageLoaded = () => {
      setimageLoaded(true);
    };
    const plateHandle = () => {
      if (activePlate == null && imageLoaded && !showPopup) {
        setactivePlate(index);
        window.history.pushState({ isZoomed: true }, "");
        document.body.style.overflow = "hidden";
      }
    };

    return (
      <Container index={index} activePlate={activePlate} className="lazy-load">
        <Wrapper>
          {!imageLoaded && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
          <ImageContainer onClick={plateHandle}>
            <Image
              ref={ref}
              onLoad={handleImageLoaded}
              src={plate.images.length==0?`https://storage.googleapis.com/ecommerce-bucket-testing/${plate.images[0]}`:`https://storage.googleapis.com/ecommerce-bucket-testing/${
                plate.images.find((image) => image.url.includes(plate.cover_id))
                  .url
              }`}
            />
          </ImageContainer>
          <TextContainer activeLanuguage={activeLanuguage}>
            <PlateName>
              {activeLanuguage === "en" ? plate.en_name : plate.ar_name}
            </PlateName>
            {plate.en_price!== "" && <PlatePrice>{plate.en_price}$</PlatePrice>}
          </TextContainer>
        </Wrapper>
      </Container>
    );
  }
);

export default Product;
