import React from "react";
import styled from "styled-components";
import { t } from "../i18n";

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
  background: var(--c-surface);
  border-top: 1px solid var(--c-border);
  height: var(--bnav-h);
  padding-bottom: var(--safe-bottom);
  display: flex;
  @media (min-width: 768px) { display: none; }
`;

const NavItem = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${p => p.$active ? "var(--c-accent)" : "var(--c-text-3)"};
  position: relative;
  -webkit-tap-highlight-color: transparent;
  svg { stroke: currentColor; }
`;

const NavLabel = styled.span`
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
`;

const NavBadge = styled.span`
  position: absolute;
  top: 4px;
  inset-inline-end: calc(50% - 18px);
  min-width: 14px;
  height: 14px;
  border-radius: var(--r-full);
  background: var(--c-accent);
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
`;

const icons = {
  home: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  menu: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  search: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  cart: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
  more: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>,
};

const tabs = ["home", "menu", "search", "cart", "more"];

export default function BottomNav({ activeTab, onTabChange, cartCount = 0, activeLanguage = "en" }) {
  return (
    <Nav aria-label="Navigation">
      {tabs.map((tab) => (
        <NavItem key={tab} $active={activeTab === tab} onClick={() => onTabChange(tab)} aria-label={t(`nav.${tab}`, activeLanguage)}>
          {icons[tab]}
          <NavLabel>{t(`nav.${tab}`, activeLanguage)}</NavLabel>
          {tab === "cart" && cartCount > 0 && <NavBadge>{cartCount}</NavBadge>}
        </NavItem>
      ))}
    </Nav>
  );
}
