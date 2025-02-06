import React, { useState } from "react";
import {
  BlurOverlay,
  Cart,
  CartBtn,
  Container,
  DetailsBtn,
  Location,
  MenuWrapper,
  Number,
  ParamProductContainer,
} from "./styles";
import Header from "./Header";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Products from "./products";
import LocationPopup from "./popup/location";
import CartPopup from "./popup/cart";
import SideBar from "./Sidebar";
import ProductParam from "./ProductParam";

export default function Theme2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId"); // Get productId from URL
  const categoryId = searchParams.get("categoryId"); // Get productId from URL
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);

  const [showPopup, setshowPopup] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [showSidebar, setshowSidebar] = useState(null);
  console.log(restaurant.categories)
  const [carouselPosition, setcarouselPosition] = useState(!categoryId?0:restaurant.categories.findIndex(category => category.id == categoryId));
  console.log(carouselPosition)
 

  const itemCount = useSelector((state) => {
    const items = state.cart[restaurantName] || []; // Access cart by restaurant name, default to empty array if not found
    return items.reduce((total, item) => total + item.quantity, 0); // Sum up all quantities in the restaurant's cart
  });
  const [activeCategory, setactiveCategory] = useState(
    categoryId?categoryId:restaurant?.categories?.[0]?.id
  );

  const popupHandler = (type) => {
    if (type == null) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setshowPopup(type);
  };

  const handleClickOutside = () => {
    if (showPopup != null) {
      setshowPopup(null)
    }
  }
  return (
    <Container id="wrapper">
      <MenuWrapper onClick={handleClickOutside} >
        <BlurOverlay showPopup={showPopup} />
        <Header
          categories={restaurant.categories}
          activeCategory={activeCategory}
          setactiveCategory={setactiveCategory}
          setSearchText={setSearchText}
          searchText={searchText}
          setshowSidebar={setshowSidebar}
          showSidebar={showSidebar}
          carouselPosition={carouselPosition}
          setcarouselPosition={setcarouselPosition}
        />
        <Products
          menu={restaurant.categories}
          activeCategory={activeCategory}
          showPopup={showPopup}
          searchText={searchText}
          setactiveCategory={setactiveCategory}
          setcarouselPosition={setcarouselPosition}
          carouselPosition={carouselPosition}
          categories={restaurant.categories}
        />
      </MenuWrapper>
      <DetailsBtn onClick={() => {
        window.history.pushState({}, ""); // Add a history entry
        popupHandler("location")
      }}>
        <Location />
      </DetailsBtn>
      <CartBtn onClick={() => {
        window.history.pushState({}, ""); // Add a history entry
        popupHandler("cart")
      }}>
        <Number>{itemCount}</Number>
        <Cart />
      </CartBtn>
      <LocationPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
      />
      <CartPopup
        restaurant={restaurant}
        showPopup={showPopup}
        popupHandler={popupHandler}
      />
      <SideBar
        categories={restaurant.categories}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        setshowSidebar={setshowSidebar}
        showSidebar={showSidebar}
        setcarouselPosition={setcarouselPosition}

      />
      {productId &&<ProductParam productId={productId} searchParams={searchParams} setSearchParams={setSearchParams} />}
        
    </Container>
  );
}
