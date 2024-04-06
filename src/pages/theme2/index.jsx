import React, { useState } from 'react'
import { BlurOverlay, Container, DetailsBtn, Location, MenuWrapper } from './styles';
import Header from './Header';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Products from './products';
import Popup from './popup';

export default function Theme2() {
    const [activeCategory, setactiveCategory] = useState(0);
    const [showPopup, setshowPopup] = useState(false);
    const [searchText, setSearchText] = useState("");

    const {restaurantName}=useParams();
    const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);

    const popupHandler = (show) => {
      setshowPopup(show);
    };
    return (
      <Container >
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
        <DetailsBtn onClick={() => popupHandler(true)}>
        <Location />
      </DetailsBtn>
      <Popup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />
      </Container>
    )
}
