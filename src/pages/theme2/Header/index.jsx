import React, { useState } from "react";
import { Container, Search, SearchContainer, SearchIcon, Text, TextContainer } from "./styles";
import Categories from "./categories";
import HeaderTop from "./headertop";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({
  activeCategory,
  setactiveCategory,
  categories,
  setSearchText,
  searchText
}) {
  const { restaurantName } = useParams();

  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );
  const handlesearch=(e)=>{
    setSearchText(e.target.value)

  }
  return (
    <Container>
      <HeaderTop />

      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
      />
      <SearchContainer>
        <SearchIcon/>
        <Search type="text" placeholder="Search Menu" onChange={handlesearch} value={searchText}/>
      </SearchContainer>
    </Container>
  );
}
