import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { t } from "../i18n";

const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  margin-bottom: var(--sp-4);
  overflow: hidden;
`;

const Chips = styled.div`
  display: flex;
  gap: var(--sp-2);
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
  &::-webkit-scrollbar { display: none; }
`;

const Chip = styled.button`
  display: flex;
  align-items: center;
  gap: var(--sp-1);
  padding: var(--sp-1) var(--sp-3);
  border: 1px solid ${p => p.$active ? "var(--c-accent)" : "var(--c-border)"};
  border-radius: var(--r-full);
  font-size: var(--text-xs);
  font-weight: 500;
  color: ${p => p.$active ? "var(--c-accent-hover)" : "var(--c-text-2)"};
  background: ${p => p.$active ? "var(--c-accent-light)" : "none"};
  white-space: nowrap;
  cursor: pointer;
  transition: all var(--dur-fast);
  font-family: inherit;
  &:hover { border-color: var(--c-text-3); color: var(--c-text); }
`;

const SortBtn = styled.button`
  display: flex;
  align-items: center;
  gap: var(--sp-1);
  padding: var(--sp-1) var(--sp-3);
  border: 1px solid var(--c-border);
  border-radius: var(--r-full);
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--c-text-2);
  white-space: nowrap;
  flex-shrink: 0;
  transition: all var(--dur-fast);
  background: none;
  cursor: pointer;
  font-family: inherit;
  &:hover { border-color: var(--c-text-3); color: var(--c-text); }
`;

const SortDropdown = styled.div`
  position: absolute;
  z-index: 100;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--r-md);
  box-shadow: var(--shadow-md);
  min-width: 180px;
  padding: var(--sp-1);
  right: var(--sp-4);
  margin-top: var(--sp-1);
`;

const SortItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--sp-2) var(--sp-3);
  border-radius: var(--r-sm);
  font-size: var(--text-sm);
  color: ${p => p.$active ? "var(--c-accent)" : "var(--c-text-2)"};
  font-weight: ${p => p.$active ? 600 : 400};
  cursor: pointer;
  transition: background var(--dur-fast);
  border: none;
  background: none;
  text-align: start;
  font-family: inherit;
  &:hover { background: var(--c-surface-alt); }
`;

const SortWrap = styled.div`
  position: relative;
`;

const filters = [
  { key: "all", i18nKey: "filter.all" },
  { key: "best_seller", i18nKey: "filter.best_seller" },
  { key: "new", i18nKey: "filter.new" },
  { key: "offers", i18nKey: "filter.offers" },
  { key: "popular", i18nKey: "filter.popular" },
];

const sortOptions = [
  { key: "recommended", i18nKey: "sort.recommended" },
  { key: "popular", i18nKey: "sort.popular" },
  { key: "price_low", i18nKey: "sort.price_low" },
  { key: "price_high", i18nKey: "sort.price_high" },
  { key: "newest", i18nKey: "sort.newest" },
];

export default function FilterBar({ activeFilter, onFilterChange, sortBy, onSortChange, activeLanguage }) {
  const [showSort, setShowSort] = useState(false);
  const sortRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) setShowSort(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <Bar>
      <Chips>
        {filters.map((f) => (
          <Chip key={f.key} $active={activeFilter === f.key} onClick={() => onFilterChange(f.key)}>
            {t(f.i18nKey, activeLanguage)}
          </Chip>
        ))}
      </Chips>
      <SortWrap ref={sortRef}>
        <SortBtn onClick={() => setShowSort(!showSort)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M6 12h12M9 18h6"/></svg>
          <span>{t("sort.label", activeLanguage)}</span>
        </SortBtn>
        {showSort && (
          <SortDropdown>
            {sortOptions.map((s) => (
              <SortItem key={s.key} $active={sortBy === s.key} onClick={() => { onSortChange(s.key); setShowSort(false); }}>
                <span>{t(s.i18nKey, activeLanguage)}</span>
                {sortBy === s.key && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                )}
              </SortItem>
            ))}
          </SortDropdown>
        )}
      </SortWrap>
    </Bar>
  );
}
