import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FiGrid, FiShoppingBag, FiMapPin, FiMessageSquare } from "react-icons/fi";
import { enabled, parseFeatures } from "./menuHelpers";
const Nav = styled.nav`
  position: fixed;
  inset-inline: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px max(8px, env(safe-area-inset-bottom));
  z-index: 298;
  background: ${(p) => p.theme.bottomTabBarBackgroundColor || p.theme.navigationBarBackgroundColor || p.theme.backgroundColor || "#fff"};
  border-top: 1px solid rgba(127,127,127,.18);
  button { position: relative; max-width: 150px; flex: 1; min-height: 52px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; border: 0; border-radius: 12px; background: transparent; color: ${(p) => p.theme.textColor || "#333"}; font-size: .75rem; cursor: pointer; }
  button[aria-current="page"] { color: ${(p) => p.theme.mainColor || "#333"}; font-weight: 700; background: color-mix(in srgb, ${(p) => p.theme.mainColor || "#333"} 8%, transparent); }
  svg { width: 21px; height: 21px; }
`;
const Badge = styled.span`
  position: absolute; top: 0; inset-inline-start: calc(50% + 4px); min-width: 19px; height: 19px; padding-inline: 4px; display: grid; place-items: center; border-radius: 20px; font-size: 10px; font-weight: 700; background: ${(p) => p.theme.mainColor || "#333"}; color: ${(p) => p.theme.popupbuttonText || "#fff"};
`;
export default function Theme1BottomNav({ hidden, restaurant, restaurantName, onMenu, onCart, onBranches, onFeedback }) {
  const cart = useSelector((state) => state.cart?.[restaurantName] || []);
  const count = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const features = parseFeatures(restaurant?.features);
  const ar = restaurant?.activeLanguage === "ar";
  if (hidden) return null;
  return <Nav aria-label={ar ? "التنقل الرئيسي" : "Main navigation"} data-tab-bar>
    <button type="button" onClick={onMenu} aria-current="page"><FiGrid /><span>{ar ? "القائمة" : "Menu"}</span></button>
    {enabled(features.cart) && <button type="button" onClick={onCart} aria-label={`${ar ? "السلة" : "Cart"}, ${count}`}><FiShoppingBag /><span>{ar ? "السلة" : "Cart"}</span>{count > 0 && <Badge aria-hidden="true">{count}</Badge>}</button>}
    {restaurant?.branches?.length > 0 && <button type="button" onClick={onBranches}><FiMapPin /><span>{ar ? "الفروع" : "Branches"}</span></button>}
    {enabled(features.feedback) && <button type="button" onClick={onFeedback}><FiMessageSquare /><span>{ar ? "التقييم" : "Feedback"}</span></button>}
  </Nav>;
}
