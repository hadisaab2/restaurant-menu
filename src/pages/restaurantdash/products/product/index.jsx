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
  const { category, image } = product;
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
          <Title>
            {product?.en_name} ||{product?.ar_name}
          </Title>
          <Category>{category?.en_category || category?.ar_category}</Category>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}
