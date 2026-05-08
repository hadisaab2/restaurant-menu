import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline, IoCloseCircle } from 'react-icons/io5';

const Wrapper = styled.div`
  padding: 12px 16px 10px;
  background: var(--theme-page-bg, #f6f6f6);
`;

const Bar = styled.label`
  display: flex;
  align-items: center;
  background: var(--theme-search-bg, #fff);
  border-radius: 28px;
  padding: 0 16px;
  gap: 10px;
  height: 48px;
  cursor: text;
  box-shadow:
    0 1px 3px rgba(0,0,0,0.05),
    0 4px 16px rgba(0,0,0,0.07);
  border: 1px solid rgba(0,0,0,0.06);
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &:focus-within {
    box-shadow:
      0 2px 6px rgba(0,0,0,0.06),
      0 6px 20px rgba(0,0,0,0.09),
      0 0 0 1.5px var(--theme-main, #333);
    border-color: transparent;
  }
`;

const SearchIcon = styled(IoSearchOutline)`
  font-size: 20px;
  flex-shrink: 0;
  color: var(--theme-search-text, #999);
  opacity: 0.5;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14.5px;
  font-weight: 500;
  color: var(--theme-search-text, #111);
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};
  min-width: 0;

  &::placeholder {
    color: var(--theme-search-text, #888);
    opacity: 0.4;
    font-weight: 400;
  }
`;

const ClearBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--theme-search-text, #aaa);
  font-size: 20px;
  padding: 0;
  flex-shrink: 0;
  opacity: 0.55;
  &:active { opacity: 1; }
`;

export default function ElegantSearchBar({ searchText, setSearchText, activeLanguage = 'en', inputRef }) {
  const isRTL = activeLanguage === 'ar';

  return (
    <Wrapper>
      <Bar>
        {!isRTL && <SearchIcon />}
        <Input
          ref={inputRef}
          id="menu-search"
          type="text"
          $rtl={isRTL}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder={isRTL ? 'ابحث في القائمة...' : 'Search the menu...'}
        />
        {searchText
          ? <ClearBtn onClick={() => setSearchText('')} type="button"><IoCloseCircle /></ClearBtn>
          : isRTL && <SearchIcon />
        }
      </Bar>
    </Wrapper>
  );
}
