import React, { useState } from "react";
import {
    BlurLayer,
  Brand,
  CategoryName,
  Container,
  Icon,
  IconWrapper,
  Search,
  SearchContainer,
  SearchIcon,
  Tab,
  Tabs,
  Top,
  Wrapper,
} from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SideBar({
  activeCategory,
  setactiveCategory,
  categories,
  showSidebar,
  setshowSidebar,
  setcarouselPosition
}) {
  const { restaurantName: paramRestaurantName } = useParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const[searchText,setSearchText]=useState("")

  const handlesearch=(e)=>{
    setSearchText(e.target.value)

  }

  const filteredCategories = categories?.filter((category) =>
    restaurant?.activeLanguage === "en"
      ? category.en_category.toLowerCase().includes(searchText.toLowerCase())
      : category.ar_category.toLowerCase().includes(searchText.toLowerCase())
  );

  const itemClick = (id,index) => {
    setactiveCategory(id);
    setcarouselPosition(index)
    setshowSidebar(false)
  };

  return (
    <Wrapper showSidebar={showSidebar}>
        <BlurLayer onClick={()=>{setshowSidebar(false)}} showSidebar={showSidebar}/>
    <Container >
      <Top>
        <Brand
          src={
            restaurant.logoURL &&
            `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
          }
        />
        
        <SearchContainer>
          <SearchIcon activeLanguage={restaurant?.activeLanguage} />
          <Search
            type="text"
            activeLanguage={restaurant?.activeLanguage}
            dir={restaurant?.activeLanguage == "en" ? "ltr" : "rtl"}
            placeholder={restaurant?.activeLanguage == "en" ? "Search Menu" : "قائمة البحث"}
            onChange={handlesearch}
            value={searchText}
          />
        </SearchContainer>
      </Top>
      <Tabs>
        {filteredCategories
          ?.sort((a, b) => b.priority - a.priority)
          .map((category, index) => {
            return (
              <Tab key={index} onClick={() => itemClick(category.id,index)}>
                <IconWrapper
                  activeCategory={activeCategory}
                  categoryId={category.id}
                >
                  <Icon
                    src={`https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`}
                  />
                </IconWrapper>
                <CategoryName
                  activeCategory={activeCategory}
                  categoryId={category.id}
                >
                  {restaurant?.activeLanguage == "en"
                    ? category.en_category
                    : category.ar_category}
                </CategoryName>
              </Tab>
            );
          })}
      </Tabs>
    </Container>
    </Wrapper>
  );
}