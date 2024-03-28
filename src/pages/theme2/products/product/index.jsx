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

export default function Product({ plate }) {
  const { restaurantName } = useParams();
  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image
            src={`https://storage.googleapis.com/ecommerce-bucket-testing/${plate.image.url}`}
          />
        </ImageContainer>
        <TextContainer activeLanuguage={activeLanuguage}>
          <PlateName>
            {activeLanuguage === "en" ? plate.en_name : plate.ar_name}
          </PlateName>
          <PlatePrice>{plate.en_price}</PlatePrice>
        </TextContainer>
      </Wrapper>
    </Container>
  );
}
