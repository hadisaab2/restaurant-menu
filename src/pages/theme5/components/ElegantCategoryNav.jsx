import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { withAlpha } from '../utils/colorUtils';
import { sendCategoryVisitLog } from '../../../apis/categories/logCategory';

/* ─── Sticky nav wrapper ─────────────────────────────────────── */

const NavOuter = styled.div`
  position: sticky;
  top: 58px;
  z-index: 90;
  background: var(--theme-page-bg, #f6f6f6);
  padding: 10px 0 12px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
`;

const ScrollRow = styled.div`
  display: flex;
  gap: 10px;
  padding: 4px 16px 4px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};

  &::-webkit-scrollbar { display: none; }
`;

/* ─── Chip ───────────────────────────────────────────────────── */

const Chip = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${props => props.$hasIcon ? '7px 14px 7px 8px' : '8px 18px'};
  border-radius: 22px;
  white-space: nowrap;
  flex-shrink: 0;
  min-height: 38px;
  cursor: pointer;
  font-size: 13px;
  font-weight: ${props => props.$active ? '700' : '500'};
  letter-spacing: ${props => props.$active ? '-0.1px' : '0'};
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease, color 0.2s ease;

  background: ${props => props.$active
    ? 'var(--theme-category-active, #333)'
    : 'var(--theme-category-inactive, var(--theme-card-bg, #fff))'
  };
  color: ${props => props.$active
    ? 'var(--theme-category-active-text, #fff)'
    : 'var(--theme-text, #555)'
  };
  border: 1px solid ${props => props.$active ? 'transparent' : 'rgba(0,0,0,0.07)'};
  box-shadow: ${props => props.$active
    ? `0 4px 16px ${props.$activeShadow || 'rgba(0,0,0,0.2)'}`
    : '0 1px 4px rgba(0,0,0,0.05)'
  };
  transform: ${props => props.$active ? 'translateY(-1px)' : 'none'};

  &:active { opacity: 0.8; transform: scale(0.96); }
`;

/* ─── Category icon ──────────────────────────────────────────── */

const IconBox = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 7px;
  overflow: hidden;
  flex-shrink: 0;
  background: ${props => props.$active
    ? 'rgba(255,255,255,0.18)'
    : 'var(--theme-page-surface, rgba(0,0,0,0.06))'
  };
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryThumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AllItemsEmoji = styled.span`
  font-size: 13px;
  line-height: 1;
`;

/* ─── Section heading (used by Grid for all-items sections) ──── */

const SectionHeading = styled.h2`
  margin: 20px 16px 6px;
  font-size: 18px;
  font-weight: 800;
  color: var(--theme-text, #111);
  letter-spacing: -0.35px;
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};
`;

/* ─── Component ──────────────────────────────────────────────── */

export default function ElegantCategoryNav({
  categories,
  activeCategory,
  setactiveCategory,
  setcarouselPosition,
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const subdomain = window.location.hostname.split('.')[0];
  const restaurantName =
    subdomain !== 'menugic' && subdomain !== 'localhost' && subdomain !== 'www'
      ? subdomain : paramRestaurantName;

  const restaurant     = useSelector(state => state.restaurant?.[restaurantName]);
  const activeLanguage = restaurant?.activeLanguage || 'en';
  const isRTL          = activeLanguage === 'ar';
  const showIcons      = restaurant?.category_type !== 'horizantal-withoutIcon';
  const scrollRef      = useRef(null);

  let themeColors = {};
  try { themeColors = JSON.parse(restaurant?.theme || '{}'); } catch (_) {}
  const activeColor = themeColors.categoryActive || '#333333';

  /* Auto-scroll active chip into view */
  useEffect(() => {
    const idx = categories.findIndex(c => c.id == activeCategory);
    if (idx < 0 || !scrollRef.current) return;
    const chip = scrollRef.current.children[idx];
    if (chip) chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeCategory, categories]);

  const handleSelect = (category, idx) => {
    sendCategoryVisitLog(category.id);
    setactiveCategory(category.id);
    if (setcarouselPosition) setcarouselPosition(idx);
  };

  return (
    <NavOuter>
      <ScrollRow ref={scrollRef} $rtl={isRTL}>
        {categories.map((category, idx) => {
          const label    = activeLanguage === 'en' ? category.en_category : category.ar_category;
          const isActive = category.id == activeCategory;
          const iconUrl  = category.image_url
            ? `https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`
            : category.isAllItems && restaurant?.logoURL
            ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
            : null;
          const hasIcon = showIcons && (iconUrl || category.isAllItems);

          return (
            <Chip
              key={category.id}
              $active={isActive}
              $hasIcon={hasIcon}
              $activeShadow={withAlpha(activeColor, 0.32)}
              onClick={() => handleSelect(category, idx)}
            >
              {hasIcon && (
                <IconBox $active={isActive}>
                  {iconUrl
                    ? <CategoryThumb src={iconUrl} alt="" />
                    : <AllItemsEmoji>🍽️</AllItemsEmoji>
                  }
                </IconBox>
              )}
              {label}
            </Chip>
          );
        })}
      </ScrollRow>
    </NavOuter>
  );
}

export function AllItemsSectionTitle({ category, activeLanguage }) {
  const isRTL = activeLanguage === 'ar';
  const label = activeLanguage === 'en' ? category.en_category : category.ar_category;
  return <SectionHeading $rtl={isRTL}>{label}</SectionHeading>;
}
