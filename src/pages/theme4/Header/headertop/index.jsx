import React from "react";
import {
  Container,
  Brand,
  ButtonsContainer,
  MenuIcon,
  HeaderWrapper,
  LanguageButton,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { changelanuage } from "../../../../redux/restaurant/restaurantActions";
import { useParams } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
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
      <HeaderWrapper>
       <ButtonsContainer >
        <MenuIcon onClick={()=>{setshowSidebar(!showSidebar)}}/>
      </ButtonsContainer>
     

      <ButtonsContainer>
        {restaurant?.languages == "en&ar" && (
          <LanguageButton onClick={() => handlelanguage(restaurant.activeLanguage === "en" ? "ar" : "en")} activeLanguage={restaurant.activeLanguage}>
            <FaGlobe />
          </LanguageButton>
        )}
        {/* <MenuIcon onClick={()=>{setshowSidebar(!showSidebar)}}/> */}
      </ButtonsContainer>
      </HeaderWrapper>
    </Container>
  );
}
