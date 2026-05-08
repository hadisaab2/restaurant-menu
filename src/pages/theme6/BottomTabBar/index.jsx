import React from "react";
import { TabBar, Tab, TabIconWrap, TabLabel, CartBadge } from "./styles";
import { MdRestaurantMenu, MdSearch, MdShoppingBag, MdMoreHoriz } from "react-icons/md";

export default function BottomTabBar({
  activeTab,
  onMenuClick,
  onSearchClick,
  onCartClick,
  onMoreClick,
  cartCount,
  activeLanguage,
  cartEnabled,
}) {
  const isRtl = activeLanguage === "ar";

  return (
    <TabBar dir={isRtl ? "rtl" : "ltr"} role="navigation" aria-label="Main navigation">
      <Tab active={activeTab === "menu"} onClick={onMenuClick} aria-label={isRtl ? "القائمة" : "Menu"}>
        <TabIconWrap active={activeTab === "menu"}>
          <MdRestaurantMenu size={22} />
        </TabIconWrap>
        <TabLabel active={activeTab === "menu"}>
          {isRtl ? "القائمة" : "Menu"}
        </TabLabel>
      </Tab>

      <Tab active={activeTab === "search"} onClick={onSearchClick} aria-label={isRtl ? "بحث" : "Search"}>
        <TabIconWrap active={activeTab === "search"}>
          <MdSearch size={22} />
        </TabIconWrap>
        <TabLabel active={activeTab === "search"}>
          {isRtl ? "بحث" : "Search"}
        </TabLabel>
      </Tab>

      {cartEnabled && (
        <Tab active={activeTab === "cart"} onClick={onCartClick} aria-label={isRtl ? "السلة" : "Cart"}>
          <TabIconWrap active={activeTab === "cart"} style={{ position: "relative" }}>
            <MdShoppingBag size={22} />
            {cartCount > 0 && (
              <CartBadge>{cartCount > 99 ? "99+" : cartCount}</CartBadge>
            )}
          </TabIconWrap>
          <TabLabel active={activeTab === "cart"}>
            {isRtl ? "السلة" : "Cart"}
          </TabLabel>
        </Tab>
      )}

      <Tab active={activeTab === "more"} onClick={onMoreClick} aria-label={isRtl ? "المزيد" : "More"}>
        <TabIconWrap active={activeTab === "more"}>
          <MdMoreHoriz size={22} />
        </TabIconWrap>
        <TabLabel active={activeTab === "more"}>
          {isRtl ? "المزيد" : "More"}
        </TabLabel>
      </Tab>
    </TabBar>
  );
}
