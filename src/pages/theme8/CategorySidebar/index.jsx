import React from "react";
import styled from "styled-components";

const Aside = styled.aside`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: sticky;
    top: calc(var(--header-h) + var(--sp-4));
    align-self: flex-start;
    width: var(--sidebar-w);
    flex-shrink: 0;
    padding-top: var(--sp-4);
    max-height: calc(100vh - var(--header-h) - var(--sp-8));
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--sp-1);
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.button`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  padding: var(--sp-2) var(--sp-3);
  border-radius: var(--r-sm);
  font-size: var(--text-sm);
  color: ${p => p.$active ? "var(--c-text)" : "var(--c-text-2)"};
  font-weight: ${p => p.$active ? 600 : 400};
  cursor: pointer;
  transition: all var(--dur-fast);
  border: none;
  background: ${p => p.$active ? "var(--c-accent-lighter)" : "none"};
  text-align: start;
  width: 100%;
  border-inline-start: 2px solid ${p => p.$active ? "var(--c-accent)" : "transparent"};
  font-family: inherit;
  &:hover {
    color: var(--c-text);
    background: var(--c-surface-alt);
  }
`;

const ItemCount = styled.span`
  margin-inline-start: auto;
  font-size: var(--text-xs);
  color: var(--c-text-3);
  font-weight: 400;
`;

export default function CategorySidebar({ categories, activeCategory, onCategoryClick, activeLanguage }) {
  return (
    <Aside aria-label="Categories">
      <List>
        {categories?.map((cat) => {
          const name = activeLanguage === "ar" ? cat.ar_category : cat.en_category;
          const count = cat.products?.length || 0;
          return (
            <li key={cat.id}>
              <Item $active={activeCategory === cat.id} onClick={() => onCategoryClick(cat.id)}>
                <span>{name}</span>
                {count > 0 && <ItemCount>{count}</ItemCount>}
              </Item>
            </li>
          );
        })}
      </List>
    </Aside>
  );
}
