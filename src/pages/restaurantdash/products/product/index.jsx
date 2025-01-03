import React from "react";
import {
  Container,
  Wrapper,
  Image,
  Title,
  ImageWrapper,
  InfoContainer,
  Category,
  DeleteButton,
  Delete,
} from "./styles";
import { useDeleteProductQuery } from "../../../../apis/products/deleteProduct";

export default function Product({
  product,
  setIsFormOpen,
  setSelectedProduct,
  setSelectedIdForAction,
  setIsDeletePopUpOpen,
}) {
  const { category, images,cover_id } = product;

  return (
    <Container>
      <Wrapper>
        <ImageWrapper
          onClick={() => {
            setSelectedProduct(product);
            setIsFormOpen(true);
          }}
        >
          <Image JPG={images[0]?.url.includes("png")}
            src={`https://storage.googleapis.com/ecommerce-bucket-testing/${images.find(image => image.url.includes(cover_id))?.url}`}
          />
        </ImageWrapper>
        <InfoContainer>
          <Title>{product?.en_name || product?.ar_name}</Title>
          <Category>
            {category?.en_category || category?.ar_category || "Offer"}
          </Category>
          <DeleteButton
            onClick={() => {
              setSelectedIdForAction(product.id);
              setIsDeletePopUpOpen(true);
            }}
          >
            <Delete />
          </DeleteButton>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}
