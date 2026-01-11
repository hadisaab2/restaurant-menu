import React, { useState } from "react";
import { Container, FilterContainer, Search, SearchContainer, SearchIcon, SearchWapper, ShareIcon, ShareIconLogo, SidebarAction, Text, TextContainer } from "./styles";
import Categories from "./categories";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({
  activeCategory,
  setactiveCategory,
  categories,
  setSearchText,
  searchText,
  setshowSidebar,
  showSidebar,
  carouselPosition,
  setcarouselPosition,
  popupHandler

}) {
  const { restaurantName: paramRestaurantName } = useParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];

  // Determine the restaurant name to use
  const restaurantName = (subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www")
    ? subdomain
    : paramRestaurantName;

  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );
  const handlesearch = (e) => {
    setSearchText(e.target.value)

  }
  return (
    <Container>

      {/* Hide Categories carousel for Theme3 - we use CategoriesGrid instead */}
      {/* <Categories
        categories={categories}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        carouselPosition={carouselPosition}
        setcarouselPosition={setcarouselPosition}
      /> */}
      
      <SearchWapper>
        <SearchContainer>
          <SearchIcon activeLanguage={activeLanguage} />
          <Search type="text" activeLanguage={activeLanguage} dir={activeLanguage == "en" ? "ltr" : "rtl"} placeholder={activeLanguage == "en" ? "Search Category" : "قائمة البحث"} onChange={handlesearch} value={searchText} />
        </SearchContainer>
        <ShareIcon onClick={() => {
          window.history.pushState({}, ""); // Add a history entry
          popupHandler("share")
        }}
        >
          {activeLanguage == "en" && <ShareIconLogo />}
          {activeLanguage == "en" ? "Share" : "نشر"}
          {activeLanguage !== "en" && <ShareIconLogo />}

        </ShareIcon>
      </SearchWapper>
    </Container>
  );
}
