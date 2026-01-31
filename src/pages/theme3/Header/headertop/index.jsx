import React from "react";
import {
  Container,
  Brand,
  ButtonsContainer,
  MenuIcon,
  HeaderWrapper,
  LanguageContainer,
  Language,
  Ball,
  Wrapper,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { changelanuage } from "../../../../redux/restaurant/restaurantActions";
import { useParams } from "react-router-dom";
export default function HeaderTop({setshowSidebar,showSidebar,popupHandler}) {
  const { restaurantName: paramRestaurantName } = useParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const dispatch = useDispatch();
  const handlelanguage = (lang) => {
    dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));
  };
  return (
    <Container>
      <HeaderWrapper>
        {/* Menu Icon (3 dashes) - Left */}
        <ButtonsContainer style={{ order: restaurant.activeLanguage === "ar" ? 3 : 1 }}>
          <MenuIcon onClick={()=>{
            if (popupHandler) popupHandler(null); // Close any opened popup
            setshowSidebar(!showSidebar);
          }}/>
        </ButtonsContainer>

        {/* Logo - Center */}
        <Brand
          src={
            restaurant.logoURL &&
            `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
          }
        />

        {/* Language Button - Right */}
        <ButtonsContainer style={{ order: restaurant.activeLanguage === "ar" ? 1 : 3 }}>
          {restaurant?.languages == "en&ar" && (
            <LanguageContainer>
              <Wrapper />
              <Ball activeLanguage={restaurant.activeLanguage} />
              <Language
                activeLanguage={restaurant.activeLanguage}
                language={"en"}
                onClick={() => handlelanguage("en")}
              >
                En
              </Language>
              <Language
                activeLanguage={restaurant.activeLanguage}
                language={"ar"}
                onClick={() => handlelanguage("ar")}
              >
                Ar
              </Language>
            </LanguageContainer>
          )}
        </ButtonsContainer>
      </HeaderWrapper>
    </Container>
  );
}
