import React, { useState } from "react";
import { Container, Search, SearchContainer, SearchIcon, SidebarAction, Text, TextContainer } from "./styles";
import Categories from "./categories";
import HeaderTop from "./headertop";
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
  setcarouselPosition
  
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
  const handlesearch=(e)=>{
    setSearchText(e.target.value)

  }
  return (
    <Container>
      <HeaderTop setshowSidebar={setshowSidebar} showSidebar={showSidebar}/>

      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        carouselPosition={carouselPosition}
        setcarouselPosition={setcarouselPosition}
      />
      {/* <SidebarAction>
        Show All Categories
      </SidebarAction> */}
      <SearchContainer>
        <SearchIcon  activeLanguage={activeLanguage}/>
        <Search type="text" activeLanguage={activeLanguage} dir={activeLanguage=="en"?"ltr":"rtl"} placeholder={activeLanguage=="en"?"Search Menu":"قائمة البحث"} onChange={handlesearch} value={searchText}/>
      </SearchContainer>
    </Container>
  );
}