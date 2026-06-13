import React, { useState } from "react";
import {
  BlurLayer,
  Brand,
  CategoryName,
  Container,
  Icon,
  IconWrapper,
  Search,
  SearchContainer,
  SearchIcon,
  Tab,
  Tabs,
  Wrapper,
  BrandContainer,
  MenuIcon
} from "./styles";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getImageUrl } from "../../../utilities/imageUrl";
import { FaCommentAlt, FaAddressBook, FaMapMarkerAlt, FaInfoCircle, FaShareAlt } from "react-icons/fa";

export default function SideBar({
  activeCategory,
  setactiveCategory,
  categories,
  showSidebar,
  setshowSidebar,
  setcarouselPosition,
  onFeedbackClick,
  onContactClick,
  onBranchesClick,
  onAboutClick,
  onShareClick,
  branches,
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const [searchText, setSearchText] = useState("");
  const activeLanguage = restaurant?.activeLanguage || "en";

  const handlesearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredCategories = categories?.filter((category) =>
    activeLanguage === "en"
      ? (category.en_category || "").toLowerCase().includes(searchText.toLowerCase())
      : (category.ar_category || "").toLowerCase().includes(searchText.toLowerCase())
  );

  const itemClick = (id, index) => {
    setactiveCategory(id);
    setcarouselPosition(index);
    setshowSidebar(false);
  };

  const handleAction = (action) => {
    setshowSidebar(false);
    if (action) action();
  };

  // Sidebar action items
  const sidebarActions = [
    onFeedbackClick && {
      icon: FaCommentAlt,
      label: activeLanguage === "en" ? "Feedback" : "التعليقات",
      onClick: () => handleAction(onFeedbackClick),
    },
    branches?.length > 0 && onBranchesClick && {
      icon: FaMapMarkerAlt,
      label: activeLanguage === "en" ? "Branches" : "الفروع",
      onClick: () => handleAction(onBranchesClick),
    },
    onContactClick && {
      icon: FaAddressBook,
      label: activeLanguage === "en" ? "Contact Us" : "اتصل بنا",
      onClick: () => handleAction(onContactClick),
    },
    onAboutClick && {
      icon: FaInfoCircle,
      label: activeLanguage === "en" ? "About Us" : "من نحن",
      onClick: () => handleAction(onAboutClick),
    },
    onShareClick && {
      icon: FaShareAlt,
      label: activeLanguage === "en" ? "Share" : "مشاركة",
      onClick: () => handleAction(onShareClick),
    },
  ].filter(Boolean);

  return (
    <Wrapper showSidebar={showSidebar}>
      <BlurLayer onClick={() => { setshowSidebar(false); }} showSidebar={showSidebar} />
      <Container>
        <MenuIcon />
        <BrandContainer>
          <Brand
            showSidebar={showSidebar}
            src={
              restaurant?.logoURL &&
              `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
            }
          />
        </BrandContainer>
        <SearchContainer showSidebar={showSidebar}>
          <SearchIcon activeLanguage={activeLanguage} />
          <Search
            type="text"
            activeLanguage={activeLanguage}
            dir={activeLanguage === "en" ? "ltr" : "rtl"}
            placeholder={activeLanguage === "en" ? "Search Categories" : "قائمة البحث"}
            onChange={handlesearch}
            value={searchText}
          />
        </SearchContainer>
        <Tabs showSidebar={showSidebar}>
          {filteredCategories
            ?.sort((a, b) => b.priority - a.priority)
            .map((category, index) => {
              return (
                <Tab key={index} onClick={() => itemClick(category.id, index)}>
                  {restaurant?.category_type !== "horizantal-withoutIcon" && (
                    <IconWrapper
                      activeCategory={activeCategory}
                      categoryId={category.id}
                    >
                      <Icon
                        src={
                          category.image_url
                            ? getImageUrl(category.image_url)
                            : category.isAllItems && restaurant?.logoURL
                            ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
                            : ""
                        }
                      />
                    </IconWrapper>
                  )}
                  <CategoryName
                    categoryType={restaurant?.category_type === "horizantal-withoutIcon"}
                    activeCategory={activeCategory}
                    categoryId={category.id}
                  >
                    {activeLanguage === "en"
                      ? (category.en_category || category.ar_category)
                      : (category.ar_category || category.en_category)}
                  </CategoryName>
                </Tab>
              );
            })}
        </Tabs>

        {/* Action items: Feedback, Branches, Contact, About, Share */}
        {sidebarActions.length > 0 && (
          <div style={{
            borderTop: `1px solid ${restaurant?.theme ? JSON.parse(restaurant.theme)?.borderColor || "#eee" : "#eee"}`,
            marginTop: 10,
            paddingTop: 10,
          }}>
            {sidebarActions.map((action, i) => (
              <Tab
                key={i}
                onClick={action.onClick}
                style={{ cursor: "pointer" }}
              >
                <IconWrapper style={{ background: "transparent", border: "none", width: 28, height: 28 }}>
                  <action.icon style={{
                    fontSize: 14,
                    color: restaurant?.theme ? JSON.parse(restaurant.theme)?.sidebartext || "#333" : "#333",
                  }} />
                </IconWrapper>
                <CategoryName
                  categoryType={true}
                  style={{
                    fontWeight: 500,
                    color: restaurant?.theme ? JSON.parse(restaurant.theme)?.sidebartext || "#333" : "#333",
                  }}
                >
                  {action.label}
                </CategoryName>
              </Tab>
            ))}
          </div>
        )}
      </Container>
    </Wrapper>
  );
}
