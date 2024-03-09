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

export default function Product({
  product,
  setIsFormOpen,
  setSelectedProduct,
}) {
  const { en_name, category, image } = product;
  return (
    <Container
      onClick={() => {
        setSelectedProduct(product);
        setIsFormOpen(true);
      }}
    >
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
