import React, { useState } from "react";
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
  StatusBadges,
  StatusBadge,
} from "./styles";
import { useDeleteProductQuery } from "../../../../apis/products/deleteProduct";
import { LANGUAGES } from "../../../../global";
import { getCookie } from "../../../../utilities/manageCookies";

export default function Product({
  product,
  setIsFormOpen,
  setSelectedProduct,
  setSelectedIdForAction,
  setIsDeletePopUpOpen,
}) {
  const { category, images,cover_id } = product;
  const storedUserInfo = getCookie("userInfo") || "{}";
  const [userInformation, setUserInformation] = useState(
    JSON.parse(storedUserInfo)
  );
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
            { userInformation.Lang === LANGUAGES.AR ?category.ar_category:category.en_category }
          </Category>
          {(product?.hide || product?.out_of_stock) && (
            <StatusBadges>
              {product?.hide && <StatusBadge $variant="hidden">Hidden</StatusBadge>}
              {product?.out_of_stock && (
                <StatusBadge $variant="out">Out of stock</StatusBadge>
              )}
            </StatusBadges>
          )}
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
