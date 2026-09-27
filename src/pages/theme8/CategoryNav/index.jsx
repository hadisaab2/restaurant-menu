import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: sticky;
  top: var(--header-h);
  z-index: 40;
  background: var(--c-surface);
  border-bottom: 1px solid var(--c-border);
  @media (min-width: 768px) { display: none; }
`;

const Inner = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 var(--sp-4);
  &::-webkit-scrollbar { display: none; }
`;

const List = styled.ul`
  display: flex;
  gap: var(--sp-1);
  padding: var(--sp-2) 0;
  width: max-content;
  list-style: none;
  margin: 0;
`;

const Pill = styled.button`
  padding: var(--sp-2) var(--sp-3);
  border-radius: var(--r-full);
  font-size: var(--text-sm);
  font-weight: ${p => p.$active ? 600 : 500};
  color: ${p => p.$active ? "var(--c-text-inv)" : "var(--c-text-2)"};
  background: ${p => p.$active ? "var(--c-primary)" : "none"};
  white-space: nowrap;
  cursor: pointer;
  transition: all var(--dur-fast);
  border: none;
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    color: ${p => p.$active ? "var(--c-text-inv)" : "var(--c-text)"};
    background: ${p => p.$active ? "var(--c-primary)" : "var(--c-surface-alt)"};
  }
`;

export default function CategoryNav({ categories, activeCategory, onCategoryClick, activeLanguage }) {
  const listRef = useRef(null);
  const itemRefs = useRef({});

  useEffect(() => {
    const el = itemRefs.current[activeCategory];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeCategory]);

  return (
    <Nav aria-label="Categories">
      <Inner>
        <List ref={listRef} role="tablist">
          {categories?.map((cat) => {
            const name = activeLanguage === "ar" ? cat.ar_category : cat.en_category;
            return (
              <li key={cat.id} ref={el => { itemRefs.current[cat.id] = el; }}>
                <Pill
                  $active={activeCategory === cat.id}
                  onClick={() => onCategoryClick(cat.id)}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                >
                  {name}
                </Pill>
              </li>
            );
          })}
        </List>
      </Inner>
    </Nav>
  );
}
