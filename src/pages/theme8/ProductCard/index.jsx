import React, { useMemo } from "react";
import styled from "styled-components";
import { getImageUrl } from "../../../utilities/imageUrl";
import { getCurrencySymbol } from "../../../utilities/getCurrencySymbol";
import { convertPrice } from "../../../utilities/convertPrice";
import { t } from "../i18n";

/* ── Styled Components ── */
const Card = styled.div`
  display: flex;
  flex-direction: ${p => p.$vertical ? "column" : "row"};
  background: var(--c-surface);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  overflow: hidden;
  cursor: pointer;
  transition: border-color var(--dur-normal);
  position: relative;
  opacity: ${p => p.$unavailable ? 0.5 : 1};
  pointer-events: ${p => p.$unavailable ? "none" : "auto"};
  &:hover { border-color: var(--c-border); }
  &:hover .accent-line { opacity: 1; }
`;

const ImgWrap = styled.div`
  background: var(--c-surface-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  ${p => p.$vertical ? `
    width: 100%;
    height: 0;
    padding-bottom: 75%;
  ` : `
    width: 110px;
    min-height: 110px;
  `}
`;

const ImgInner = styled.div`
  ${p => p.$vertical ? `position: absolute; inset: 0;` : `width: 100%; height: 100%;`}
  display: flex;
  align-items: center;
  justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

const Badges = styled.div`
  position: absolute;
  top: var(--sp-2);
  inset-inline-start: var(--sp-2);
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 1;
`;

const Badge = styled.span`
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 6px;
  border-radius: 3px;
  line-height: 1.3;
  color: #fff;
  background: ${p =>
    p.$type === "best_seller" ? "var(--c-accent)" :
    p.$type === "new" ? "var(--c-primary)" :
    p.$type === "offer" ? "var(--c-sale)" :
    "var(--c-text-3)"};
`;

const Body = styled.div`
  flex: 1;
  min-width: 0;
  padding: var(--sp-3);
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: var(--text-sm);
  line-height: 1.3;
  margin-bottom: var(--sp-1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Desc = styled.div`
  font-size: var(--text-xs);
  color: var(--c-text-3);
  line-height: 1.4;
  margin-bottom: var(--sp-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-2);
  margin-top: auto;
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--sp-1);
  flex-wrap: wrap;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: var(--text-sm);
  ${p => p.$sale && `color: var(--c-sale);`}
`;

const OldPrice = styled.span`
  font-weight: 400;
  font-size: var(--text-xs);
  color: var(--c-text-3);
  text-decoration: line-through;
`;

const FromLabel = styled.span`
  font-weight: 400;
  font-size: var(--text-xs);
  color: var(--c-text-3);
`;

const AddBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: var(--r-full);
  background: var(--c-primary);
  color: var(--c-text-inv);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background var(--dur-fast), transform var(--dur-fast);
  border: none;
  cursor: pointer;
  &:hover { background: var(--c-primary-hover); }
  &:active { transform: scale(0.9); }
`;

const UnavailableLabel = styled.span`
  font-size: var(--text-xs);
  color: var(--c-error);
  font-weight: 500;
`;

const CustomizeLabel = styled.span`
  font-size: 9px;
  color: var(--c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const CalLabel = styled.span`
  font-size: var(--text-xs);
  color: var(--c-text-3);
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
`;

const AccentLine = styled.div`
  position: absolute;
  bottom: 0;
  inset-inline: 0;
  height: 2px;
  background: var(--c-accent);
  opacity: 0;
  transition: opacity var(--dur-normal);
`;

export default function ProductCard({ product, activeLanguage, currency, onProductClick, onQuickAdd, layout = "horizontal" }) {
  const lang = activeLanguage || "en";
  const name = lang === "ar" ? (product.ar_name || product.en_name) : product.en_name;
  const desc = lang === "ar" ? (product.ar_description || product.en_description) : product.en_description;
  const sym = getCurrencySymbol(currency);
  const isVertical = layout === "vertical";

  const hasOptions = useMemo(() => {
    if (!product.form_json) return false;
    try {
      const parsed = typeof product.form_json === "string" ? JSON.parse(product.form_json) : product.form_json;
      return parsed && ((Array.isArray(parsed) && parsed.length > 0) || (parsed.groups && parsed.groups.length > 0));
    } catch { return false; }
  }, [product.form_json]);

  const isUnavailable = product.out_of_stock || product.hide;
  const hasDiscount = product.discount && product.discount > 0;
  const basePrice = parseFloat(product.en_price) || 0;
  const salePrice = hasDiscount ? basePrice * (1 - product.discount / 100) : basePrice;

  // Get image URL
  const imgUrl = useMemo(() => {
    if (product.images?.length > 0) return getImageUrl(product.images[0].url);
    if (product.new_cover_id_url) return getImageUrl(product.new_cover_id_url);
    return null;
  }, [product]);

  // Calories from macros
  const calories = useMemo(() => {
    if (!product.macros) return null;
    try {
      const m = typeof product.macros === "string" ? JSON.parse(product.macros) : product.macros;
      return m?.calories || m?.cal || null;
    } catch { return null; }
  }, [product.macros]);

  const badges = [];
  if (product.is_best_seller) badges.push({ type: "best_seller", label: t("product.best_seller", lang) });
  if (product.new) badges.push({ type: "new", label: t("product.new_badge", lang) });
  if (hasDiscount) badges.push({ type: "offer", label: t("product.offer_badge", lang) });

  const handleClick = () => {
    if (!isUnavailable) onProductClick?.(product);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    if (hasOptions) {
      onProductClick?.(product);
    } else {
      onQuickAdd?.(product, e);
    }
  };

  return (
    <Card $vertical={isVertical} $unavailable={isUnavailable} onClick={handleClick}>
      <ImgWrap $vertical={isVertical}>
        <ImgInner $vertical={isVertical}>
          {imgUrl ? <img src={imgUrl} alt={name} loading="lazy" /> : <span>🍽️</span>}
        </ImgInner>
        {badges.length > 0 && (
          <Badges>
            {badges.map((b) => <Badge key={b.type} $type={b.type}>{b.label}</Badge>)}
          </Badges>
        )}
      </ImgWrap>
      <Body>
        <Name>{name}</Name>
        <Desc>{desc}</Desc>
        <Footer>
          <div>
            <PriceWrap>
              {hasOptions && <FromLabel>{t("product.from", lang)}</FromLabel>}
              {hasDiscount && <OldPrice>{sym}{convertPrice(basePrice)}</OldPrice>}
              <Price $sale={hasDiscount}>{sym}{convertPrice(hasDiscount ? salePrice : basePrice)}</Price>
            </PriceWrap>
            <Meta>
              {hasOptions && <CustomizeLabel>{t("product.customize", lang)}</CustomizeLabel>}
              {calories && <CalLabel>{calories} {t("product.cal", lang)}</CalLabel>}
            </Meta>
          </div>
          {isUnavailable ? (
            <UnavailableLabel>{t("product.unavailable", lang)}</UnavailableLabel>
          ) : (
            <AddBtn onClick={handleAdd} aria-label={t("product.add", lang)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
            </AddBtn>
          )}
        </Footer>
      </Body>
      <AccentLine className="accent-line" />
    </Card>
  );
}
