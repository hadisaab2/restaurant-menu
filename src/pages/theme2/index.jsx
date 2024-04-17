import React, { useState } from 'react'
import { BlurOverlay, Cart, CartBtn, Container, DetailsBtn, Location, MenuWrapper, Number } from './styles';
import Header from './Header';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Products from './products';
import LocationPopup from './popup/location';
import CartPopup from './popup/cart';

export default function Theme2() {
    const [showPopup, setshowPopup] = useState(null);
    const [searchText, setSearchText] = useState("");
    const itemCount = useSelector(state => 
      state.cart.reduce((total, item) => total + item.quantity, 0)
  );
    const {restaurantName}=useParams();
    const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
    const [activeCategory, setactiveCategory] = useState(restaurant?.categories?.[0]?.id);

    const popupHandler = (type) => {
      if(type==null){
        document.body.style.overflow="auto"
      }else{
        document.body.style.overflow="hidden"

      }
      setshowPopup(type);
    };
    return (
      <Container id="wrapper">
        <MenuWrapper  >
        <BlurOverlay showPopup={showPopup} />
              <Header
                categories={restaurant.categories}
                activeCategory={activeCategory}
                setactiveCategory={setactiveCategory}
                setSearchText={setSearchText}
                searchText={searchText}
              />
                <Products
              menu={restaurant.categories}
              activeCategory={activeCategory}
              showPopup={showPopup}
              searchText={searchText}
            />
        </MenuWrapper>
        <DetailsBtn onClick={() => popupHandler("location")}>
        <Location />
      </DetailsBtn>
      <CartBtn onClick={() => popupHandler("cart")}>
        <Number>{itemCount}</Number>
        <Cart  />
      </CartBtn>
      <LocationPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />
      <CartPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />

      </Container>
    )
}
