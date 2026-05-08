import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { convertPrice } from '../../../utilities/convertPrice';
import { FiPlus } from 'react-icons/fi';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { withAlpha, getReadableTextColor, safeColor } from '../utils/colorUtils';
import _ from 'lodash';

/* ─── Animation ─────────────────────────────────────────────── */

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ═══════════════════════════════════════════════════════════════
   GRID CARD  (image top, content bottom — for 2-column grid)
   ═══════════════════════════════════════════════════════════════ */

const GridCard = styled.article`
  display: flex;
  flex-direction: column;
  background: var(--theme-card-bg, #fff);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  animation: ${fadeUp} 0.3s ease both;
  animation-delay: ${props => Math.min(props.$index * 0.04, 0.28)}s;
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};
  box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.07);
  border: 1px solid rgba(0,0,0,0.05);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.06), 0 12px 28px rgba(0,0,0,0.1);
    }
  }
  &:active { transform: scale(0.97); }
`;

const GridImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  background: rgba(0,0,0,0.05);
  overflow: hidden;
`;

/* ═══════════════════════════════════════════════════════════════
   LIST CARD  (image left, content right — single column)
   ═══════════════════════════════════════════════════════════════ */

const ListCard = styled.article`
  display: flex;
  gap: 14px;
  background: var(--theme-card-bg, #fff);
  border-radius: 20px;
  padding: 14px;
  margin-bottom: 12px;
  cursor: pointer;
  position: relative;
  animation: ${fadeUp} 0.3s ease both;
  animation-delay: ${props => Math.min(props.$index * 0.045, 0.28)}s;
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};
  box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 3px 12px rgba(0,0,0,0.06);
  border: 1px solid rgba(0,0,0,0.045);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.1);
    }
  }
  &:active { transform: scale(0.985); }
`;

const ListImageBox = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 14px;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  background: rgba(0,0,0,0.04);
`;

/* ─── Shared image elements ─────────────────────────────────── */

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${props => props.$loaded ? 'block' : 'none'};
`;

const ImgFallback = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background: rgba(0,0,0,0.03);
`;

/* ─── Badges on image ────────────────────────────────────────── */

const BadgeStack = styled.div`
  position: absolute;
  top: 6px;
  left: ${props => props.$rtl ? 'auto' : '6px'};
  right: ${props => props.$rtl ? '6px' : 'auto'};
  display: flex;
  flex-direction: column;
  gap: 3px;
  pointer-events: none;
  z-index: 2;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 2.5px 7px;
  border-radius: 7px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 1.4;
  background: ${props => props.$bg  || 'var(--theme-main, #333)'};
  color:      ${props => props.$col || 'var(--theme-popup-button-text, #fff)'};
`;

const SoldOutOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.44);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const SoldOutLabel = styled.span`
  background: var(--theme-popup-bg, rgba(255,255,255,0.92));
  color: var(--theme-popup-text, #333);
  font-size: 9.5px;
  font-weight: 800;
  padding: 4px 9px;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

/* ─── Content areas ─────────────────────────────────────────── */

const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 11px 11px;
  gap: 6px;
  flex: 1;
`;

const ListContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 96px;
  min-width: 0;
  overflow: hidden;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: ${props => props.$sm ? '13px' : '15px'};
  font-weight: 700;
  color: var(--theme-card-text, #111);
  line-height: 1.3;
  letter-spacing: -0.2px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductDesc = styled.p`
  margin: 0;
  font-size: ${props => props.$sm ? '11px' : '12px'};
  line-height: 1.45;
  color: var(--theme-card-text, #666);
  opacity: 0.5;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/* ─── Price + CTA row ────────────────────────────────────────── */

const BottomRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 6px;
  ${props => props.$grid && css`margin-top: auto;`}
`;

const PriceGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const StrikePrice = styled.span`
  font-size: 10px;
  color: var(--theme-price, #999);
  opacity: 0.45;
  text-decoration: line-through;
  font-weight: 500;
`;

const MainPrice = styled.span`
  font-size: ${props => props.$sm ? '13px' : '15px'};
  font-weight: 800;
  color: var(--theme-price, #111);
  letter-spacing: -0.3px;
  line-height: 1.2;
`;

const AddBtn = styled.button`
  width: ${props => props.$sm ? '30px' : '36px'};
  height: ${props => props.$sm ? '30px' : '36px'};
  border-radius: ${props => props.$sm ? '9px' : '11px'};
  background: var(--theme-main, #333);
  color: var(--theme-popup-button-text, #fff);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.$sm ? '17px' : '19px'};
  cursor: pointer;
  flex-shrink: 0;
  box-shadow: ${props => `0 3px 10px ${props.$shadow}`};
  transition: transform 0.14s ease, opacity 0.14s ease;

  &:active { transform: scale(0.88); opacity: 0.85; }
  &:disabled { opacity: 0.3; cursor: not-allowed; box-shadow: none; }
`;

const CustomBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: ${props => props.$sm ? '5px 8px' : '7px 12px'};
  border-radius: 11px;
  border: none;
  font-size: ${props => props.$sm ? '11px' : '12px'};
  font-weight: 700;
  cursor: pointer;
  min-height: ${props => props.$sm ? '30px' : '36px'};
  background: ${props => props.$tint};
  color: var(--theme-main, #333);
  transition: transform 0.14s ease, opacity 0.14s ease;

  &:active { transform: scale(0.94); opacity: 0.8; }
`;

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

const ElegantProductCard = React.forwardRef(function ElegantProductCard(
  {
    plate,
    setactivePlate,
    activePlate,
    index,
    showPopup,
    setSearchParams,
    searchParams,
    activeCategoryId,
    categories,
    disableDetails,
    onQuickAdd,
    variant = 'grid',   // 'grid' (image-top 2-col) | 'list' (horizontal)
  },
  ref
) {
  const { restaurantName: paramRestaurantName } = useParams();
  const subdomain = window.location.hostname.split('.')[0];
  const restaurantName =
    subdomain !== 'menugic' && subdomain !== 'localhost' && subdomain !== 'www'
      ? subdomain : paramRestaurantName;

  const restaurant     = useSelector(state => state.restaurant?.[restaurantName]);
  const activeLanguage = useSelector(state => state.restaurant?.[restaurantName]?.activeLanguage || 'en');
  const [imageLoaded, setImageLoaded] = useState(false);
  const isRTL  = activeLanguage === 'ar';
  const isGrid = variant === 'grid';
  const isSm   = isGrid;

  /* ── Colors ───────────────────────────────────────────────── */
  let themeColors = {};
  try { themeColors = JSON.parse(restaurant?.theme || '{}'); } catch (_) {}
  const mainColor      = themeColors.mainColor || '#333333';
  const discountColor  = safeColor(themeColors.BoxPriceColor, mainColor);
  const discountTextColor = getReadableTextColor(discountColor);
  const btnShadow = withAlpha(mainColor, 0.32);
  const btnTint   = withAlpha(mainColor, 0.1);

  /* ── Discount ─────────────────────────────────────────────── */
  const activeCategory = categories?.find(c => c.id == activeCategoryId);
  let finalDiscount = 0;
  if (activeCategory) {
    finalDiscount = parseFloat(activeCategory.discount) !== 0.0
      ? parseFloat(activeCategory.discount)
      : parseFloat(plate.discount || 0);
  }

  /* ── Currency ─────────────────────────────────────────────── */
  let currencySymbol = '';
  switch (restaurant?.currency) {
    case 'dollar':   currencySymbol = '$'; break;
    case 'lb':       currencySymbol = 'L.L.'; break;
    case 'gram':     currencySymbol = 'g'; break;
    case 'kilogram': currencySymbol = 'kg'; break;
  }

  /* ── Image ────────────────────────────────────────────────── */
  const coverIndex = plate.images?.findIndex(img => img.id === plate.new_cover_id) ?? -1;
  const hasValidImage = coverIndex >= 0 && plate.images?.[coverIndex]?.url;
  const restaurantLogoUrl = restaurant?.logoURL
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
    : null;
  const imageSrc = hasValidImage
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${plate.images[coverIndex].url}`
    : restaurantLogoUrl || '';

  /* ── State flags ──────────────────────────────────────────── */
  const isOutOfStock = Boolean(plate?.out_of_stock) || Number(plate?.out_of_stock) === 1;
  let hasForm = false;
  try { hasForm = !_.isEmpty(plate?.form_json) && !_.isEmpty(JSON.parse(plate?.form_json || '{}')); } catch (_) {}

  const originalPrice   = parseFloat(plate.en_price || 0);
  const discountedPrice = finalDiscount > 0
    ? originalPrice * (1 - finalDiscount / 100)
    : originalPrice;
  const hasPrice = !_.isEmpty(plate.en_price);

  /* ── Open product ─────────────────────────────────────────── */
  const openProduct = () => {
    if (activePlate == null && !showPopup) {
      if (!disableDetails && setactivePlate) setactivePlate(index);
      const newParams = new URLSearchParams(searchParams);
      newParams.set('productId', plate?.id);
      if (activeCategoryId) newParams.set('categoryId', activeCategoryId);
      setSearchParams(newParams);
      window.history.pushState({}, '', `?${newParams.toString()}`);
      document.body.style.overflow = 'hidden';
    }
  };

  const handleCTA = e => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickAdd) onQuickAdd(e);
    else openProduct();
  };

  const productName = activeLanguage === 'en' ? plate.en_name : plate.ar_name;
  const productDesc = activeLanguage === 'en' ? plate.en_description : plate.ar_description;

  /* ─── Shared image block ──────────────────────────────────── */
  const ImageBlock = () => (
    <>
      {imageSrc && (
        <ProductImage
          src={imageSrc}
          alt={productName}
          $loaded={imageLoaded}
          onLoad={() => setImageLoaded(true)}
          onError={e => {
            if (restaurantLogoUrl && e.target.src !== restaurantLogoUrl)
              e.target.src = restaurantLogoUrl;
            setImageLoaded(true);
          }}
        />
      )}
      {!imageLoaded && <ImgFallback>🍽️</ImgFallback>}
      <BadgeStack $rtl={isRTL}>
        {plate.new && (
          <Badge $bg={mainColor} $col="var(--theme-popup-button-text, #fff)">
            {activeLanguage === 'en' ? 'NEW' : 'جديد'}
          </Badge>
        )}
        {finalDiscount > 0 && (
          <Badge $bg={discountColor} $col={discountTextColor}>
            -{Math.round(finalDiscount)}%
          </Badge>
        )}
      </BadgeStack>
      {isOutOfStock && (
        <SoldOutOverlay>
          <SoldOutLabel>{activeLanguage === 'en' ? 'Sold Out' : 'نفذ'}</SoldOutLabel>
        </SoldOutOverlay>
      )}
    </>
  );

  /* ─── Shared price + CTA ──────────────────────────────────── */
  const PriceRow = () => (
    <BottomRow $grid={isGrid}>
      {hasPrice && (
        <PriceGroup>
          {finalDiscount > 0 && (
            <StrikePrice>{convertPrice(originalPrice, currencySymbol)}</StrikePrice>
          )}
          <MainPrice $sm={isSm}>{convertPrice(discountedPrice, currencySymbol)}</MainPrice>
        </PriceGroup>
      )}
      {!isOutOfStock && (
        hasForm ? (
          <CustomBtn onClick={handleCTA} $tint={btnTint} $sm={isSm}>
            {activeLanguage === 'en' ? 'Options' : 'خيارات'}
            <IoChevronForwardOutline
              size={11}
              style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}
            />
          </CustomBtn>
        ) : (
          <AddBtn onClick={handleCTA} $shadow={btnShadow} $sm={isSm} disabled={isOutOfStock}>
            <FiPlus size={isSm ? 15 : 18} strokeWidth={2.5} />
          </AddBtn>
        )
      )}
    </BottomRow>
  );

  /* ─── Grid card ───────────────────────────────────────────── */
  if (isGrid) {
    return (
      <GridCard ref={ref} onClick={openProduct} $rtl={isRTL} $index={index}>
        <GridImageBox><ImageBlock /></GridImageBox>
        <GridContent>
          <TextGroup>
            <ProductName $sm>{productName}</ProductName>
            {productDesc && (
              <ProductDesc $sm dangerouslySetInnerHTML={{ __html: productDesc }} />
            )}
          </TextGroup>
          <PriceRow />
        </GridContent>
      </GridCard>
    );
  }

  /* ─── List card ───────────────────────────────────────────── */
  return (
    <ListCard ref={ref} onClick={openProduct} $rtl={isRTL} $index={index}>
      <ListImageBox><ImageBlock /></ListImageBox>
      <ListContent>
        <TextGroup>
          <ProductName>{productName}</ProductName>
          {productDesc && (
            <ProductDesc dangerouslySetInnerHTML={{ __html: productDesc }} />
          )}
        </TextGroup>
        <PriceRow />
      </ListContent>
    </ListCard>
  );
});

export default ElegantProductCard;
