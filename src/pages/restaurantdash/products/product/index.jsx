import React from "react";
import {
  Container,
  Wrapper,
  Image,
  Title,
  ImageWrapper,
  InfoContainer,
  Category,
} from "./styles";

import pizza1 from "../../../../static/pizza1.png";
export default function Product({ product }) {
  const { en_name, category, image } = product;
  https: return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image
            src={`https://storage.googleapis.com/ecommerce-bucket-testing/${image?.url}`}
          />
        </ImageWrapper>
        <InfoContainer>
          <Title>{en_name}</Title>
          <Category>{category.en_category}</Category>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}
