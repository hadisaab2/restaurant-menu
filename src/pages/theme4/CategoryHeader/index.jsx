import React from "react";
import {
  Container,
  BackButton,
  BackIcon,
  CategoryTitle,
  HeaderWrapper,
  LogoSection,
  Logo,
  TopSection,
  TopRightSection,
  MenuIcon,
  LanguageButton,
  SearchSection,
  SearchWrapper,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { changelanuage } from "../../../redux/restaurant/restaurantActions";
import { useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";

export default function CategoryHeader({ 
  categoryId, 
  categories, 
  onBack, 
  searchText, 
  setSearchText,
  setshowSidebar,
  showSidebar
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const dispatch = useDispatch();

  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector(
    (state) => state.restaurant?.[restaurantName]
  );

  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );

  const selectedCategory = categories?.find((cat) => cat.id == categoryId || cat.id === categoryId);

  // Show header even if category is loading, with fallback text
  const categoryName = selectedCategory
    ? (activeLanguage === "en" ? selectedCategory.en_category : selectedCategory.ar_category)
    : "Category";

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleLanguage = (lang) => {
    dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));
  };

  return (
    <Container>
      <HeaderWrapper>
        <BackButton onClick={onBack} aria-label="Back to categories">
          <BackIcon as={IoArrowBack} />
        </BackButton>
        <CategoryTitle activeLanguage={activeLanguage}>
          {categoryName}
        </CategoryTitle>
        <TopRightSection>
          <MenuIcon onClick={() => setshowSidebar(!showSidebar)}>
            <HiMenuAlt2 />
          </MenuIcon>
          {restaurant?.languages === "en&ar" && (
            <LanguageButton onClick={() => handleLanguage(activeLanguage === "en" ? "ar" : "en")} activeLanguage={activeLanguage}>
              <FaGlobe />
            </LanguageButton>
          )}
        </TopRightSection>
      </HeaderWrapper>

      <SearchSection>
        <SearchWrapper>
          <SearchContainer>
            <SearchIcon activeLanguage={activeLanguage}>
              <CiSearch />
            </SearchIcon>
            <SearchInput
              type="text"
              activeLanguage={activeLanguage}
              dir={activeLanguage === "en" ? "ltr" : "rtl"}
              placeholder={activeLanguage === "en" ? "Search Products" : "البحث عن المنتجات"}
              onChange={handleSearch}
              value={searchText || ""}
            />
          </SearchContainer>
        </SearchWrapper>
      </SearchSection>
    </Container>
  );
}

