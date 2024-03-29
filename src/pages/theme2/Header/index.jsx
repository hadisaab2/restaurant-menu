import React, { useState } from "react";
import { Container, Text, TextContainer } from "./styles";
import Categories from "./categories";
import HeaderTop from "./headertop";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({
  activeCategory,
  setactiveCategory,
  categories,
  setanimationchange,
  animationchange,
}) {
  const { restaurantName } = useParams();

  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );
  return (
    <Container>
      <HeaderTop />

      <TextContainer activeLanuguage={activeLanuguage}>
        {activeLanuguage == "en" ? (
          <>
            <Text>Main</Text>

            <Text>Categories</Text>
          </>
        ) : (
          <Text>أشهر الأصنـاف</Text>
        )}
      </TextContainer>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        setanimationchange={setanimationchange}
        animationchange={animationchange}
      />
    </Container>
  );
}
