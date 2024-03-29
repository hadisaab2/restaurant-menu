import React from "react";
import {
  Container,
  Image,
  ImageContainer,
  PlateName,
  PlatePrice,
  TextContainer,
  Wrapper,
} from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = React.forwardRef(({ plate, setactivePlate, activePlate, index }, ref) => {
  const { restaurantName } = useParams();
  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );

  const plateHandle = () => {
    setactivePlate(index);
  };

  return (
    <Container index={index} activePlate={activePlate}  >
      <Wrapper>
        <ImageContainer onClick={plateHandle}  ref={ref}>
          <Image
            src={`https://storage.googleapis.com/ecommerce-bucket-testing/${plate.image.url}`}
          />
        </ImageContainer>
        <TextContainer activeLanuguage={activeLanuguage}>
          <PlateName>
            {activeLanuguage === "en" ? plate.en_name : plate.ar_name}
          </PlateName>
          <PlatePrice>{plate.en_price}$</PlatePrice>
        </TextContainer>
      </Wrapper>
    </Container>
  );
});

export default Product;
