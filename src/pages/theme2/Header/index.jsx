import React, { useState } from "react";
import { Container, Text, TextContainer } from "./styles";
import Categories from "./categories";
import HeaderTop from "./headertop";

export default function Header({ activeCategory, setactiveCategory, categories,setanimationchange,animationchange }) {
  return (
    <Container>
      <HeaderTop />
      <TextContainer>
      <Text>Main</Text>

        <Text>Categories</Text>
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
