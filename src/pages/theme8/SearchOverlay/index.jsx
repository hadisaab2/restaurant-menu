import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { t } from "../i18n";
import { getImageUrl } from "../../../utilities/imageUrl";
import { getCurrencySymbol } from "../../../utilities/getCurrencySymbol";
import { convertPrice } from "../../../utilities/convertPrice";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--c-surface);
  display: ${p => p.$show ? "flex" : "none"};
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  padding: var(--sp-3) var(--sp-4);
  border-bottom: 1px solid var(--c-border);
`;

const Field = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  svg { position: absolute; inset-inline-start: var(--sp-3); color: var(--c-text-3); pointer-events: none; }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 var(--sp-8) 0 var(--sp-10);
  border: 1px solid var(--c-border);
  border-radius: var(--r-full);
  background: var(--c-bg);
  font-size: var(--text-base);
  font-family: inherit;
  &:focus { outline: none; border-color: var(--c-accent); background: var(--c-surface); }
`;

const CancelBtn = styled.button`
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--c-accent);
  white-space: nowrap;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
`;

const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--sp-4);
`;

const ResultItem = styled.div`
  display: flex;
  gap: var(--sp-3);
  align-items: center;
  padding: var(--sp-3) 0;
  border-bottom: 1px solid var(--c-border-light);
  cursor: pointer;
  &:last-child { border: none; }
`;

const ResultImg = styled.div`
  width: 48px;
  height: 48px;
  border-radius: var(--r-sm);
  background: var(--c-surface-alt);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

const ResultInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ResultName = styled.div`
  font-weight: 600;
  font-size: var(--text-sm);
`;

const ResultCat = styled.div`
  font-size: var(--text-xs);
  color: var(--c-text-3);
`;

const ResultPrice = styled.div`
  font-weight: 600;
  font-size: var(--text-sm);
  white-space: nowrap;
`;

const Empty = styled.div`
  text-align: center;
  padding: var(--sp-12) 0;
  color: var(--c-text-3);
`;

const EmptyIcon = styled.div`
  font-size: 2rem;
  margin-bottom: var(--sp-3);
`;

export default function SearchOverlay({ show, onClose, categories, activeLanguage, currency, onProductClick }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const lang = activeLanguage || "en";
  const sym = getCurrencySymbol(currency);

  useEffect(() => {
    if (show && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!show) setQuery("");
  }, [show]);

  const allProducts = (categories || []).flatMap(cat =>
    (cat.products || []).filter(p => !p.hide).map(p => ({ ...p, categoryName: lang === "ar" ? cat.ar_category : cat.en_category }))
  );

  const results = query.trim().length > 0
    ? allProducts.filter(p => {
        const name = lang === "ar" ? (p.ar_name || p.en_name) : p.en_name;
        const desc = lang === "ar" ? (p.ar_description || p.en_description) : p.en_description;
        const q = query.toLowerCase();
        return name?.toLowerCase().includes(q) || desc?.toLowerCase().includes(q);
      })
    : [];

  return (
    <Overlay $show={show}>
      <Header>
        <Field>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <Input
            ref={inputRef}
            type="search"
            placeholder={t("search.placeholder", lang)}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Field>
        <CancelBtn onClick={onClose}>{t("search.cancel", lang)}</CancelBtn>
      </Header>
      <Body>
        {query.trim().length === 0 ? null : results.length === 0 ? (
          <Empty>
            <EmptyIcon>🔍</EmptyIcon>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{t("search.no_results", lang)}</div>
            <div style={{ fontSize: "var(--text-sm)" }}>{t("search.no_results_sub", lang)}</div>
          </Empty>
        ) : (
          results.map((p) => {
            const name = lang === "ar" ? (p.ar_name || p.en_name) : p.en_name;
            const imgUrl = p.images?.[0]?.url ? getImageUrl(p.images[0].url) : null;
            const price = parseFloat(p.en_price) || 0;
            return (
              <ResultItem key={p.id} onClick={() => { onProductClick(p); onClose(); }}>
                <ResultImg>
                  {imgUrl ? <img src={imgUrl} alt="" /> : <span>🍽️</span>}
                </ResultImg>
                <ResultInfo>
                  <ResultName>{name}</ResultName>
                  <ResultCat>{p.categoryName}</ResultCat>
                </ResultInfo>
                <ResultPrice>{sym}{convertPrice(price)}</ResultPrice>
              </ResultItem>
            );
          })
        )}
      </Body>
    </Overlay>
  );
}
