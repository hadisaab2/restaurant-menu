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
