import React from "react";
import {
  Container,
  Brand,
  LanguageContainer,
  Language,
  Ball,
  Wrapper,
  ButtonsContainer,
  MenuIcon,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { changelanuage } from "../../../../redux/restaurant/restaurantActions";
import { useParams } from "react-router-dom";
export default function HeaderTop({setshowSidebar,showSidebar}) {
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
      <Brand
        src={
          restaurant.logoURL &&
          `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
        }
      />

      <ButtonsContainer>
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
        <MenuIcon onClick={()=>{setshowSidebar(!showSidebar)}}/>
      </ButtonsContainer>
    </Container>
  );
}
