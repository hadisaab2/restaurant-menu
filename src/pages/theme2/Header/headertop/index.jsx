import React, { useRef } from "react";
import {
  Container,
  Brand,
  LanguageContainer,
  Language,
  Ball,
  Wrapper,
  ButtonsContainer,
  MenuIcon,
  HeaderWrapper,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { changelanuage } from "../../../../redux/restaurant/restaurantActions";
import { useParams } from "react-router-dom";
import CustomerAccountNav from "../../../../components/CustomerAccountNav";
import { IoPersonOutline } from "react-icons/io5";

export default function HeaderTop({ setshowSidebar, showSidebar }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const customerAccountRef = useRef(null);

  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const dispatch = useDispatch();
  const activeLanguage = restaurant?.activeLanguage || "en";

  const handlelanguage = (lang) => {
    dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));
  };

  let features = {};
  try { features = JSON.parse(restaurant?.features || "{}"); } catch (_) {}

  return (
    <Container>
      <Brand
        src={
          restaurant?.logoURL &&
          `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
        }
      />
      <HeaderWrapper>
        <ButtonsContainer>
          <MenuIcon onClick={() => { setshowSidebar(!showSidebar); }} />
        </ButtonsContainer>

        <ButtonsContainer style={{ gap: 8 }}>
          {/* User Account Icon */}
          {features?.user_registration !== false && (
            <div
              onClick={() => customerAccountRef.current?.toggle?.()}
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                background: restaurant?.theme ? JSON.parse(restaurant.theme)?.languagebackground || "#f0f0f0" : "#f0f0f0",
                color: restaurant?.theme ? JSON.parse(restaurant.theme)?.languageTextColor || "#666" : "#666",
                fontSize: 16,
              }}
            >
              <IoPersonOutline />
            </div>
          )}

          {/* Language Toggle */}
          {restaurant?.languages === "en&ar" && (
            <LanguageContainer>
              <Wrapper />
              <Ball activeLanguage={activeLanguage} />
              <Language
                activeLanguage={activeLanguage}
                language={"en"}
                onClick={() => handlelanguage("en")}
              >
                En
              </Language>
              <Language
                activeLanguage={activeLanguage}
                language={"ar"}
                onClick={() => handlelanguage("ar")}
              >
                Ar
              </Language>
            </LanguageContainer>
          )}
        </ButtonsContainer>
      </HeaderWrapper>

      {/* Customer Account Nav */}
      {features?.user_registration !== false && (
        <CustomerAccountNav
          ref={customerAccountRef}
          restaurantName={restaurantName}
          restaurantId={restaurant?.id}
          activeLanguage={activeLanguage}
          accentColor={restaurant?.theme ? JSON.parse(restaurant.theme)?.mainColor || "#5eabb1" : "#5eabb1"}
        />
      )}
    </Container>
  );
}
