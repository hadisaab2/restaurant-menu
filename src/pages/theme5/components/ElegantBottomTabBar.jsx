import React from 'react';
import styled from 'styled-components';
import {
  IoRestaurantOutline, IoRestaurant,
  IoSearchOutline,    IoSearch,
  IoBagHandleOutline, IoBagHandle,
  IoEllipsisHorizontal, IoEllipsisHorizontalOutline,
} from 'react-icons/io5';

/* Persistent mobile app-style bottom navigation. */

const Bar = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1200;

  /* 64px visible + system safe-area */
  height: calc(64px + env(safe-area-inset-bottom));
  padding-bottom: env(safe-area-inset-bottom);

  background: var(--theme-tab-bg, rgba(255,255,255,0.96));
  backdrop-filter: saturate(180%) blur(24px);
  -webkit-backdrop-filter: saturate(180%) blur(24px);
  border-top: 1px solid rgba(0,0,0,0.08);
  box-shadow:
    0 -1px 0 rgba(0,0,0,0.05),
    0 -10px 30px rgba(0,0,0,0.08);

  display: flex;
  align-items: stretch;
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};

  /* Only show on mobile */
  @media (min-width: 769px) {
    display: none;
  }
`;

const Tab = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px 4px 4px;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  min-height: 44px;
  transition: opacity 0.15s ease;

  &:active { opacity: 0.55; }
`;

/* Animated top-edge indicator — springs into width */
const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 3px;
  border-radius: 0 0 4px 4px;
  background: var(--theme-tab-active, var(--theme-main, #333));
  transition: width 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
  width: ${props => props.$active ? '28px' : '0'};
`;

/* Soft tinted pill behind icon when active */
const IconPill = styled.div`
  width: 42px;
  height: 26px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  position: relative;
  background: ${props => props.$active ? 'var(--theme-tab-active-tint, rgba(0,0,0,0.1))' : 'transparent'};
  transition: background 0.22s ease;
`;

const Label = styled.span`
  font-size: 10px;
  line-height: 1;
  font-weight: ${props => props.$active ? '700' : '400'};
  letter-spacing: ${props => props.$active ? '0.1px' : '0'};
  color: ${props => props.$active
    ? 'var(--theme-tab-active, var(--theme-main, #333))'
    : 'var(--theme-tab-inactive, var(--theme-text, #888))'};
  opacity: ${props => props.$active ? 1 : 0.72};
  transition: color 0.2s ease, opacity 0.2s ease;
`;

const Badge = styled.span`
  position: absolute;
  top: -3px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: var(--theme-tab-badge-bg, var(--theme-main, #333));
  color: var(--theme-tab-badge-text, var(--theme-popup-button-text, #fff));
  font-size: 9px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  box-shadow: 0 0 0 2px var(--theme-card-bg, #fff);
`;

/* ─── Labels ─────────────────────────────────────────────────── */
const L_EN = { menu: 'Menu', search: 'Search', cart: 'Cart', more: 'More' };
const L_AR = { menu: 'القائمة', search: 'بحث', cart: 'السلة', more: 'المزيد' };

/* ─── Component ──────────────────────────────────────────────── */
export default function ElegantBottomTabBar({
  activeTab,
  onTabSelect,
  cartCount = 0,
  activeLanguage = 'en',
  features = {},
}) {
  const isRTL  = activeLanguage === 'ar';
  const labels = isRTL ? L_AR : L_EN;

  const tabs = [
    { id: 'menu',   label: labels.menu,   A: IoRestaurant,         I: IoRestaurantOutline },
    { id: 'search', label: labels.search, A: IoSearch,             I: IoSearchOutline },
    ...(features?.cart
      ? [{ id: 'cart', label: labels.cart, A: IoBagHandle, I: IoBagHandleOutline, badge: cartCount }]
      : []),
    { id: 'more',   label: labels.more,   A: IoEllipsisHorizontal, I: IoEllipsisHorizontalOutline },
  ];

  return (
    <Bar $rtl={isRTL} role="navigation" aria-label="Main navigation">
      {tabs.map(({ id, label, A, I, badge }) => {
        const isActive = activeTab === id;
        const Icon = isActive ? A : I;

        return (
          <Tab
            key={id}
            onClick={() => onTabSelect(id)}
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
          >
            <TopBar $active={isActive} />
            <IconPill $active={isActive}>
              <Icon
                style={{
                  color: isActive
                    ? 'var(--theme-tab-active, var(--theme-main, #333))'
                    : 'var(--theme-tab-inactive, var(--theme-text, #888))',
                  opacity: isActive ? 1 : 0.8,
                  fontSize: 22,
                  transition: 'color 0.2s ease',
                }}
              />
              {badge > 0 && <Badge>{badge > 99 ? '99+' : badge}</Badge>}
            </IconPill>
            <Label $active={isActive}>{label}</Label>
          </Tab>
        );
      })}
    </Bar>
  );
}
