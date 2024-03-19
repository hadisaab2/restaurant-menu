import React, { useState } from "react";
import { Container, DetailsBtn, Location, MenuWrapper } from "./styles";
import Menu from "./Menu";
import Header from "./Header";
import Offers from "./Offers";
import Popup from "./popup";
import { useSelector } from "react-redux";

export default function Theme1() {
  const [activeCategory, setactiveCategory] = useState(0);
  const [animationchange, setanimationchange] = useState(false);
  const [showPopup, setshowPopup] = useState(false);
  const restaurant = useSelector((state) => state.restaurant);

  const popupHandler = (show) => {
    setshowPopup(show);
  };
  return (
    <Container>
      {restaurant.categories && (
                  <>

      <MenuWrapper showPopup={showPopup}>
        
            <Header
              categories={restaurant.categories}
              activeCategory={activeCategory}
              setactiveCategory={setactiveCategory}
              setanimationchange={setanimationchange}
              animationchange={animationchange}
            />
            
            {/* <Offers
          offers={menu.find((category) => category.category === "Offers")}
          activeCategory={activeCategory}
        />
        */}
            <Menu
              menu={restaurant.categories}
              activeCategory={activeCategory}
              animationchange={animationchange}
            />
        
      </MenuWrapper>
      <DetailsBtn onClick={() => popupHandler(true)}>
        <Location />
      </DetailsBtn>
      <Popup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />
      </>

      )}
    </Container>
  );
}
