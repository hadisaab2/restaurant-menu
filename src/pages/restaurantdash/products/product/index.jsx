import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Image,
  Title,
  ImageWrapper,
  InfoContainer,
  Category,
  CardActions,
  EditButton,
  DeleteButton,
  EditIcon,
  Delete,
  StatusBadges,
  StatusBadge,
} from "./styles";
import { LANGUAGES } from "../../../../global";
import { getCookie } from "../../../../utilities/manageCookies";

const GCS_BASE = "https://storage.googleapis.com/ecommerce-bucket-testing/";

export default function Product({
  product,
  setIsFormOpen,
  setSelectedProduct,
  setSelectedIdForAction,
  setIsDeletePopUpOpen,
}) {
  const { category, images, cover_id } = product;
  const storedUserInfo = getCookie("userInfo") || "{}";
  const [userInformation] = useState(JSON.parse(storedUserInfo));

  const openEditor = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  const openDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdForAction(product.id);
    setIsDeletePopUpOpen(true);
  };

  const coverUrl = images?.find((image) => image.url.includes(cover_id))?.url;
  const isPng = images?.[0]?.url?.includes("png");

  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          {coverUrl ? (
            <Image
              JPG={isPng}
              src={`${GCS_BASE}${coverUrl}`}
              alt=""
            />
          ) : null}
        </ImageWrapper>
        <InfoContainer>
          <Title>{product?.en_name || product?.ar_name}</Title>
          <Category>
            {userInformation.Lang === LANGUAGES.AR
              ? category.ar_category
              : category.en_category}
          </Category>
          {(product?.hide || product?.out_of_stock) && (
            <StatusBadges>
              {product?.hide && (
                <StatusBadge $variant="hidden">Hidden</StatusBadge>
              )}
              {product?.out_of_stock && (
                <StatusBadge $variant="out">Out of stock</StatusBadge>
              )}
            </StatusBadges>
          )}
        </InfoContainer>
        <CardActions>
          <EditButton
            type="button"
            aria-label="Edit product"
            onClick={openEditor}
          >
            <EditIcon />
          </EditButton>
          <DeleteButton
            type="button"
            aria-label="Delete product"
            onClick={openDelete}
          >
            <Delete />
          </DeleteButton>
        </CardActions>
      </Wrapper>
    </Container>
  );
}
