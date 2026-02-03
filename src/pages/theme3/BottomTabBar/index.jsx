import React from "react";
import {
  TabBarContainer,
  TabItem,
  TabIcon,
  TabLabel,
  CartBadge,
} from "./styles";
import { FaHome, FaTh, FaShoppingCart, FaCommentAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { changelanuage } from "../../../redux/restaurant/restaurantActions";

export default function BottomTabBar({
  activeView,
  onHomeClick,
  onCategoriesClick,
  onCartClick,
  onContactClick,
  onFeedbackClick,
  onBranchesClick,
  restaurantName,
  branches,
  isProductDetailsOpen = false,
}) {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const cart = useSelector((state) => state.cart?.[restaurantName] || []);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLanguageToggle = () => {
    const newLanguage = activeLanguage === "en" ? "ar" : "en";
    dispatch(changelanuage({ name: restaurantName, activeLanguage: newLanguage }));
  };

  const tabs = [
    {
      id: "home",
      icon: FaHome,
      label: activeLanguage === "en" ? "Home" : "الرئيسية",
      onClick: onHomeClick,
      active: activeView === "home",
    },
    {
      id: "categories",
      icon: FaTh,
      label: activeLanguage === "en" ? "Categories" : "الفئات",
      onClick: onCategoriesClick,
      active: activeView === "categories",
    },
    {
      id: "cart",
      icon: FaShoppingCart,
      label: activeLanguage === "en" ? "Cart" : "السلة",
      onClick: onCartClick,
      active: false,
      badge: itemCount > 0 ? itemCount : null,
    },
    {
      id: "branches",
      icon: FaMapMarkerAlt,
      label: activeLanguage === "en" ? "Branches" : "الفروع",
      onClick: onBranchesClick,
      active: false,
    },
    {
      id: "feedback",
      icon: FaCommentAlt,
      label: activeLanguage === "en" ? "Feedback" : "التعليقات",
      onClick: onFeedbackClick,
      active: false,
    },
  ].filter(tab => {
    // Only show branches tab if branches exist
    if (tab.id === "branches") {
      return branches && branches.length > 0;
    }
    return true;
  });

  // Show language changer only if restaurant supports both languages
  const showLanguageChanger = restaurant?.languages === "en&ar";

  return (
    <TabBarContainer data-tab-bar $isProductDetailsOpen={isProductDetailsOpen}>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          onClick={tab.onClick}
          $active={tab.active}
          activeLanguage={activeLanguage}
        >
          <TabIcon 
            id={tab.id === "cart" ? "cart-tab-icon" : undefined}
            $isLanguage={false}
            $activeLanguage={activeLanguage}
          >
            <tab.icon data-icon={tab.id} />
            {tab.badge && <CartBadge>{tab.badge}</CartBadge>}
          </TabIcon>
          <TabLabel activeLanguage={activeLanguage}>{tab.label}</TabLabel>
        </TabItem>
      ))}
      
     
    </TabBarContainer>
  );
}
