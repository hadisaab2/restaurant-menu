import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--c-surface);
  border-bottom: 1px solid var(--c-border);
  height: var(--header-h);
  transition: box-shadow var(--dur-normal) var(--ease-in-out);
  &.scrolled { box-shadow: var(--shadow-sm); }
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  height: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--sp-4);
`;

export const HeaderStart = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  min-width: 0;
  flex-shrink: 0;
`;

export const HeaderBrand = styled.a`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  text-decoration: none;
  min-width: 0;
  cursor: pointer;
`;

export const HeaderLogo = styled.div`
  width: 32px;
  height: 32px;
  border-radius: var(--r-sm);
  background: var(--c-accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  color: var(--c-accent);
  flex-shrink: 0;
  overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const HeaderName = styled.span`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-md);
  color: var(--c-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  [dir="rtl"] & { font-family: var(--font-ar); }
`;

export const HeaderSearch = styled.div`
  flex: 1;
  max-width: 400px;
  position: relative;
  display: none;
  @media (min-width: 768px) { display: flex; align-items: center; }
`;

export const HeaderSearchIcon = styled.div`
  position: absolute;
  inset-inline-start: var(--sp-3);
  top: 50%;
  transform: translateY(-50%);
  color: var(--c-text-3);
  pointer-events: none;
  display: flex;
`;

export const HeaderSearchInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 0 var(--sp-8) 0 var(--sp-10);
  border: 1px solid var(--c-border);
  border-radius: var(--r-full);
  background: var(--c-bg);
  font-size: var(--text-sm);
  color: var(--c-text);
  font-family: inherit;
  transition: border-color var(--dur-fast), background var(--dur-fast);
  &::placeholder { color: var(--c-text-3); }
  &:focus { outline: none; border-color: var(--c-accent); background: var(--c-surface); }
`;

export const HeaderSearchClear = styled.button`
  position: absolute;
  inset-inline-end: var(--sp-2);
  top: 50%;
  transform: translateY(-50%);
  color: var(--c-text-3);
  padding: var(--sp-1);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
`;

export const HeaderEnd = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-1);
  margin-inline-start: auto;
`;

export const HeaderIconBtn = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--r-full);
  color: var(--c-text);
  transition: background var(--dur-fast);
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-size: var(--text-sm);
  font-weight: 700;
  &:hover { background: var(--c-surface-alt); }
`;

export const MobileSearchBtn = styled(HeaderIconBtn)`
  display: flex;
  @media (min-width: 768px) { display: none; }
`;

export const CartButton = styled(HeaderIconBtn)``;

export const HeaderCartBadge = styled.span`
  position: absolute;
  top: 2px;
  inset-inline-end: 2px;
  min-width: 16px;
  height: 16px;
  border-radius: var(--r-full);
  background: var(--c-accent);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  line-height: 1;
`;
