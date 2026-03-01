import React, { useState } from "react";
import {
  BlurLayer,
  CategoryName,
  Container,
  Icon,
  IconWrapper,
  Tab,
  Tabs,
  Wrapper,
  MenuIcon,
  HomeLink,
  HomeLinkText,
  SidebarSection,
  SectionHeader,
  SectionIcon,
  SectionTitle,
  SectionContent,
  CollapsibleIcon,
  CategoryList,
  CategoryItem,
} from "./styles";
import { FaHome, FaList, FaShoppingBag, FaCommentAlt, FaAddressBook, FaChevronDown, FaChevronUp, FaMapMarkerAlt } from "react-icons/fa";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SideBar({
  activeCategory,
  setactiveCategory,
  categories,
  showSidebar,
  setshowSidebar,
  setcarouselPosition,
  onHomeClick,
  onCategoryClick,
  onFeedbackClick,
  onContactClick,
  onBranchesClick,
  branches,
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);

  const itemClick = (id, index) => {
    if (onCategoryClick) {
      onCategoryClick(id);
    } else {
      setactiveCategory(id);
      setcarouselPosition(index);
    }
    setshowSidebar(false);
  };

  const handleFeedbackClick = () => {
    if (onFeedbackClick) {
      onFeedbackClick();
    }
    setshowSidebar(false);
  };

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
    setshowSidebar(false);
  };

  const handleBranchesClick = () => {
    if (onBranchesClick) {
      onBranchesClick();
    }
    setshowSidebar(false);
  };

  return (
    <Wrapper showSidebar={showSidebar}>
      <BlurLayer onClick={() => { setshowSidebar(false) }} showSidebar={showSidebar} />
      <Container>
        <MenuIcon />
        
        {/* Homepage Section */}
        {onHomeClick && (
          <SidebarSection>
            <SectionHeader onClick={onHomeClick}>
              <SectionIcon>
                <FaHome />
              </SectionIcon>
              <SectionTitle activeLanguage={restaurant?.activeLanguage}>
                {restaurant?.activeLanguage === "en" ? "Homepage" : "الصفحة الرئيسية"}
              </SectionTitle>
            </SectionHeader>
          </SidebarSection>
        )}

        {/* Categories Section - Collapsible */}
        <SidebarSection>
          <SectionHeader onClick={() => setCategoriesExpanded(!categoriesExpanded)}>
            <SectionIcon>
              <FaList />
            </SectionIcon>
            <SectionTitle activeLanguage={restaurant?.activeLanguage}>
              {restaurant?.activeLanguage === "en" ? "Categories" : "الفئات"}
            </SectionTitle>
            <CollapsibleIcon activeLanguage={restaurant?.activeLanguage}>
              {categoriesExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </CollapsibleIcon>
          </SectionHeader>
          {categoriesExpanded && (
            <SectionContent>
              <CategoryList>
                {categories
                  ?.sort((a, b) => b.priority - a.priority)
                  .map((category, index) => {
                    return (
                      <CategoryItem
                        key={index}
                        onClick={() => itemClick(category.id, index)}
                        active={activeCategory === category.id}
                      >
                        {restaurant.category_type != "horizantal-withoutIcon" && (
                          <IconWrapper
                            activeCategory={activeCategory}
                            categoryId={category.id}
                          >
                            <Icon
                              src={`https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`}
                            />
                          </IconWrapper>
                        )}
                        <CategoryName
                          categoryType={restaurant.category_type == "horizantal-withoutIcon"}
                          activeCategory={activeCategory}
                          categoryId={category.id}
                        >
                          {restaurant?.activeLanguage == "en"
                            ? category.en_category
                            : category.ar_category}
                        </CategoryName>
                      </CategoryItem>
                    );
                  })}
              </CategoryList>
            </SectionContent>
          )}
        </SidebarSection>

        {/* Orders Section */}
        <SidebarSection>
          <SectionHeader disabled>
            <SectionIcon>
              <FaShoppingBag />
            </SectionIcon>
            <SectionTitle activeLanguage={restaurant?.activeLanguage}>
              {restaurant?.activeLanguage === "en" ? "Orders (Coming Soon)" : "الطلبات (قريباً)"}
            </SectionTitle>
          </SectionHeader>
        </SidebarSection>

        {/* Feedback Section */}
        <SidebarSection>
          <SectionHeader onClick={handleFeedbackClick}>
            <SectionIcon>
              <FaCommentAlt />
            </SectionIcon>
            <SectionTitle activeLanguage={restaurant?.activeLanguage}>
              {restaurant?.activeLanguage === "en" ? "Feedback" : "التعليقات"}
            </SectionTitle>
          </SectionHeader>
        </SidebarSection>

        {/* Branches Section */}
        {branches && branches.length > 0 && (
          <SidebarSection>
            <SectionHeader onClick={handleBranchesClick}>
              <SectionIcon>
                <FaMapMarkerAlt />
              </SectionIcon>
              <SectionTitle activeLanguage={restaurant?.activeLanguage}>
                {restaurant?.activeLanguage === "en" ? "Branches" : "الفروع"}
              </SectionTitle>
            </SectionHeader>
          </SidebarSection>
        )}

        {/* Contact Us Section */}
        <SidebarSection>
          <SectionHeader onClick={handleContactClick}>
            <SectionIcon>
              <FaAddressBook />
            </SectionIcon>
            <SectionTitle activeLanguage={restaurant?.activeLanguage}>
              {restaurant?.activeLanguage === "en" ? "Contact Us" : "اتصل بنا"}
            </SectionTitle>
          </SectionHeader>
        </SidebarSection>
      </Container>
    </Wrapper>
  );
}
