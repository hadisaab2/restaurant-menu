import styled from "styled-components";

export const SplitRoot = styled.div`
  width: min(100%, 1280px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr);
  gap: 16px;
  padding: 16px 16px 32px;
  align-items: start;
  @media (max-width: 479px) { grid-template-columns: minmax(0, 1fr); gap: 12px; padding: 12px; }
  @media (min-width: 768px) { grid-template-columns: 156px minmax(0, 1fr); gap: 24px; padding: 24px; }
  @media (min-width: 1100px) { grid-template-columns: 184px minmax(0, 1fr); gap: 32px; }
`;
export const SidebarWrap = styled.aside`
  position: sticky;
  top: 80px;
  min-width: 0;
  max-height: calc(100dvh - 180px);
  @media (max-width: 479px) { position: static; max-height: none; }
`;
export const SidebarScroll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: auto;
  max-height: inherit;
  padding: 3px;
  scrollbar-width: thin;
  @media (max-width: 479px) { flex-direction: row; overflow-x: auto; padding: 3px 3px 8px; }
`;
export const CatItem = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 72px;
  padding: 10px 4px;
  border: 1px solid transparent;
  border-radius: 14px;
  background: ${(p) => p.$active ? (p.theme.categoryActive || p.theme.categoryUnActive || p.theme.BoxColor || "#fff") : "transparent"};
  color: ${(p) => p.$active ? (p.theme.categoryActiveText || p.theme.mainColor || "#222") : (p.theme.categoryUnactiveText || p.theme.BoxTextColor || p.theme.textColor || "#333")};
  box-shadow: ${(p) => p.$active ? `inset 0 0 0 1px ${p.theme.mainColor || "currentColor"}` : "none"};
  cursor: pointer;
  flex-shrink: 0;
  transition: background 160ms ease;
  @media (max-width: 479px) { width: auto; min-width: 76px; max-width: 116px; padding: 10px; }
  @media (min-width: 768px) { flex-direction: row; padding: 12px; min-height: 64px; text-align: start; }
`;
export const CatIcon = styled.span`
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: ${(p) => p.theme.BoxColor || p.theme.backgroundColor || "#fff"};
  img { width: 100%; height: 100%; object-fit: cover; }
  img + svg { display: none; }
  img[hidden] { display: none; }
  img[hidden] + svg { display: block; }
`;
export const CatLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.5;
  overflow-wrap: anywhere;
  @media (min-width: 768px) { font-size: 0.875rem; }
`;
export const MainPanel = styled.main`
  min-width: 0;
  scroll-margin-top: 84px;
`;
export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  min-height: 48px;
  gap: 10px;
  padding-inline: 14px 4px;
  border: 1px solid ${(p) => p.theme.categoryUnActive || "rgba(127,127,127,.22)"};
  border-radius: 14px;
  background: ${(p) => p.theme.BoxColor || "#fff"};
  color: ${(p) => p.theme.BoxTextColor || p.theme.textColor || "#222"};
  margin-bottom: 24px;
  &:focus-within { outline: 2px solid ${(p) => p.theme.mainColor || "currentColor"}; outline-offset: 2px; }
  > svg { flex-shrink: 0; opacity: .7; }
`;
export const SearchBar = styled.input`
  width: 100%;
  min-width: 0;
  border: 0;
  padding-block: 12px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 1rem;
  outline: none;
  &::placeholder { color: inherit; opacity: .65; }
  &::-webkit-search-cancel-button { display: none; }
`;
export const ClearSearch = styled.button`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border: 0;
  background: transparent;
  color: inherit;
  border-radius: 10px;
  cursor: pointer;
`;
export const SectionHeading = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
`;
export const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 700;
  line-height: 1.5;
  color: ${(p) => p.theme.textColor || p.theme.BoxTextColor || "#222"};
  overflow-wrap: anywhere;
`;
export const SectionMeta = styled.span`
  color: ${(p) => p.theme.textColor || "#333"};
  font-size: .75rem;
  opacity: .7;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 8.5rem), 1fr));
  gap: 12px;
  @media (min-width: 600px) { grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr)); gap: 16px; }
  @media (min-width: 1024px) { grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr)); gap: 20px; }
`;
export const AllSection = styled.section` margin-bottom: 32px; `;
export const LoaderRow = styled.div`
  padding: 20px 8px;
  text-align: center;
  font-size: .875rem;
  color: ${(p) => p.theme.textColor || "#333"};
`;
export const EmptyState = styled.div`
  padding: 36px 16px;
  text-align: center;
  border: 1px dashed ${(p) => p.theme.categoryUnActive || "rgba(127,127,127,.3)"};
  border-radius: 16px;
  color: ${(p) => p.theme.textColor || "#333"};
  h3 { font-size: 1rem; margin: 12px 0 8px; }
  p { font-size: .875rem; line-height: 1.6; margin: 0 0 16px; }
`;
export const TextButton = styled.button`
  min-height: 44px;
  padding: 10px 18px;
  border: 1px solid currentColor;
  border-radius: 12px;
  background: transparent;
  color: ${(p) => p.theme.mainColor || p.theme.textColor || "#222"};
  font-weight: 600;
  cursor: pointer;
`;
export const Skeleton = styled.div`
  aspect-ratio: 3 / 4;
  border-radius: 16px;
  background: ${(p) => p.theme.BoxColor || "#fff"};
  border: 1px solid rgba(127,127,127,.15);
  &::before { content: ""; display: block; margin: 8px; aspect-ratio: 1; border-radius: 12px; background: ${(p) => p.theme.categoryUnActive || "rgba(127,127,127,.12)"}; }
`;
export const Card = styled.article`
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 7px;
  border: 1px solid rgba(127,127,127,.14);
  border-radius: 18px;
  background: ${(p) => p.theme.BoxColor || "#fff"};
  color: ${(p) => p.theme.BoxTextColor || p.theme.textColor || "#222"};
  box-shadow: 0 3px 12px rgba(0,0,0,.025);
  container-type: inline-size;
`;
export const ImageButton = styled.button`
  display: grid;
  place-items: center;
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  color: inherit;
  background: ${(p) => p.theme.categoryUnActive || p.theme.backgroundColor || "#f5f5f5"};
  img { width: 100%; height: 100%; object-fit: cover; }
`;
export const Badge = styled.span`
  position: absolute;
  inset-block-start: 8px;
  inset-inline-start: 8px;
  padding: 4px 8px;
  font-size: .625rem;
  font-weight: 700;
  border-radius: 6px;
  background: ${(p) => p.theme.mainColor || "#333"};
  color: ${(p) => p.theme.popupbuttonText || "#fff"};
  max-width: calc(100% - 16px);
`;
export const CardBody = styled.div`
  padding: 12px 5px 5px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
`;
export const NameButton = styled.button`
  text-align: start;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font-size: ${(p) => p.$fontSize ? `max(.875rem, ${p.$fontSize})` : ".9375rem"};
  font-weight: 600;
  line-height: 1.5;
  min-height: 3em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: anywhere;
  cursor: pointer;
`;
export const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
export const Prices = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 8px;
  color: ${(p) => p.theme.BoxPriceColor || p.theme.BoxTextColor || "#222"};
  overflow-wrap: anywhere;
  font-size: .875rem;
  font-weight: 700;
  del { font-size: .75rem; font-weight: 400; opacity: .65; }
`;
export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 44px;
  min-height: 44px;
  padding: 8px;
  border: 0;
  border-radius: 12px;
  background: ${(p) => p.theme.mainColor || "#333"};
  color: ${(p) => p.theme.popupbuttonText || "#fff"};
  font-size: .75rem;
  font-weight: 600;
  cursor: pointer;
  margin-inline-start: auto;
  transition: opacity 150ms ease;
  &:active { opacity: .75; }
`;
export const Stepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(p) => p.theme.mainColor || "#333"};
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  button { width: 44px; min-height: 44px; border: 0; background: transparent; color: ${(p) => p.theme.mainColor || "#333"}; font-size: 1.25rem; cursor: pointer; }
  output { font-size: .875rem; font-weight: 700; }
`;
export const Unavailable = styled.span`
  font-size: .75rem;
  line-height: 1.5;
  opacity: .75;
  padding-block: 10px;
`;
