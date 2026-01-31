import React from "react";
import {
  TabBarContainer,
  TabItem,
  TabIcon,
  TabLabel,
  CartBadge,
} from "./styles";
import { FaHome, FaTh, FaShoppingCart, FaQuestionCircle, FaMapMarkerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function BottomTabBar({
  activeView,
  onHomeClick,
  onCategoriesClick,
  onCartClick,
  onContactClick,
  onBranchesClick,
  restaurantName,
  branches,
}) {
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const cart = useSelector((state) => state.cart?.[restaurantName] || []);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

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
      id: "contact",
      icon: FaQuestionCircle,
      label: activeLanguage === "en" ? "Contact" : "اتصل بنا",
      onClick: onContactClick,
      active: false,
    },
  ].filter(tab => {
    // Only show branches tab if branches exist
    if (tab.id === "branches") {
      return branches && branches.length > 0;
    }
    return true;
  });

  return (
    <TabBarContainer data-tab-bar>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          onClick={tab.onClick}
          $active={tab.active}
          activeLanguage={activeLanguage}
        >
          <TabIcon id={tab.id === "cart" ? "cart-tab-icon" : undefined}>
            <tab.icon data-icon={tab.id} />
            {tab.badge && <CartBadge>{tab.badge}</CartBadge>}
          </TabIcon>
          <TabLabel activeLanguage={activeLanguage}>{tab.label}</TabLabel>
        </TabItem>
      ))}
    </TabBarContainer>
  );
}
