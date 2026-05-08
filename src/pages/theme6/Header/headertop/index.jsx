import React from "react";
import {
  Container,
  TopBar,
  MenuIconBtn,
  MenuIcon,
  LogoFrame,
  LogoImg,
  LogoInitials,
  BrandInfo,
  RestaurantName,
  BranchInfo,
  LanguagePill,
  LangOption,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { changelanuage } from "../../../../redux/restaurant/restaurantActions";
import { useParams } from "react-router-dom";

export default function HeaderTop({ setshowSidebar, showSidebar }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const dispatch = useDispatch();

  const handlelanguage = (lang) => {
    dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));
  };

  const isRtl = restaurant?.activeLanguage === "ar";

  const logoUrl = restaurant?.logoURL
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
    : null;

  const displayName = isRtl
    ? restaurant?.ar_name || restaurant?.en_name || ""
    : restaurant?.en_name || "";

  const branchName = isRtl
    ? restaurant?.ar_branch_name || restaurant?.branch_name || ""
    : restaurant?.branch_name || "";

  const initials = displayName
    ? displayName
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase()
    : "🍕";

  return (
    <Container isRtl={isRtl}>
      <TopBar isRtl={isRtl}>
        <MenuIconBtn
          onClick={() => setshowSidebar(!showSidebar)}
          aria-label={isRtl ? "القائمة الجانبية" : "Open menu"}
        >
          <MenuIcon />
        </MenuIconBtn>

        <LogoFrame>
          {logoUrl ? (
            <LogoImg src={logoUrl} alt={displayName} />
          ) : (
            <LogoInitials>{initials}</LogoInitials>
          )}
        </LogoFrame>

        {restaurant?.languages === "en&ar" ? (
          <LanguagePill>
            <LangOption
              active={restaurant?.activeLanguage === "en"}
              onClick={() => handlelanguage("en")}
            >
              EN
            </LangOption>
            <LangOption
              active={restaurant?.activeLanguage === "ar"}
              onClick={() => handlelanguage("ar")}
            >
              AR
            </LangOption>
          </LanguagePill>
        ) : (
          /* placeholder to keep flex spacing balanced */
          <div style={{ width: 56 }} />
        )}
      </TopBar>

      {displayName && (
        <BrandInfo>
          <RestaurantName>{displayName}</RestaurantName>
          {branchName ? <BranchInfo>{branchName}</BranchInfo> : null}
        </BrandInfo>
      )}
    </Container>
  );
}
