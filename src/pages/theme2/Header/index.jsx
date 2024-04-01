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
}) {
  const { restaurantName } = useParams();

  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );
  return (
    <Container>
      <HeaderTop />

      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
      />
    </Container>
  );
}
