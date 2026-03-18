import styled, { keyframes } from "styled-components";

/* Theme2-style product card, compact for theme1 sidebar + 2-col grid */
const t1Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const T1ProductOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 6px;
`;

export const T1ProductWrapper = styled.div`
  width: 94%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(p) => p.theme.BoxColor};
  border-radius: 18px;
  position: relative;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
`;

export const T1Loader = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-left-color: ${(p) => p.theme.mainColor || "#333"};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: ${t1Spin} 0.9s linear infinite;
`;

export const T1LoaderWrap = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 91%;
  height: 17vh;
  min-height: 100px;
  max-height: 158px;
  border-radius: 10px;
  overflow: hidden;
  top: 8px;
  z-index: 2;
  background-color: ${(p) => p.theme.categoryUnactive || p.theme.categoryUnActive};
`;

export const T1ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 17vh;
  min-height: 100px;
  max-height: 158px;
  overflow: hidden;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const T1Image = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  visibility: ${(p) => (p.$loaded ? "visible" : "hidden")};
`;

export const T1TextContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: ${(p) => (p.$en ? "left" : "right")};
  position: relative;
  align-items: ${(p) => (p.$en ? "flex-start" : "flex-end")};
  gap: 4px;
  min-height: 52px;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-bottom: 2px;
`;

export const T1NEW = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  left: auto;
  bottom: auto;
  z-index: 4;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  background-color: ${(p) => p.theme.mainColor};
  color: ${(p) => p.theme.popupbuttonText};
  border-radius: 4px;
  line-height: 1.2;
`;

export const T1PlateName = styled.span`
  font-size: ${(p) => p.$fs || "12px"};
  font-weight: 500;
  color: ${(p) => p.theme.BoxTextColor};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.35em;
  max-height: 2.7em;
  width: 100%;
  cursor: pointer;
`;

export const T1PriceAndActionsRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(p) => (p.$en ? "row" : "row-reverse")};
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  margin-top: 4px;
  padding-bottom: 6px;
`;

export const T1PriceBlock = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  justify-content: ${(p) => (p.$en ? "flex-start" : "flex-end")};
`;

export const T1PriceRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  align-items: baseline;
`;

export const T1PlatePrice = styled.span`
  color: ${(p) => p.theme.BoxPriceColor};
  font-size: 11px;
  word-spacing: 0;
  text-decoration: ${(p) => (p.$discounted ? "line-through" : "none")};
  opacity: ${(p) => (p.$discounted ? 0.75 : 1)};
`;

export const T1DiscountPrice = styled.span`
  color: ${(p) => p.theme.BoxPriceColor};
  font-size: 11px;
  font-weight: 600;
  word-spacing: 0;
`;

export const T1Actions = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const T1AddBtn = styled.button`
  min-width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background: ${(p) => p.theme.mainColor};
  color: ${(p) => p.theme.popupbuttonText || "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  z-index: 1;
`;

export const T1Stepper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${(p) => p.theme.mainColor};
`;

export const T1StepBtn = styled.button`
  width: 26px;
  height: 26px;
  border: none;
  background: ${(p) => p.theme.mainColor};
  color: ${(p) => p.theme.popupbuttonText || "#fff"};
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const T1StepQty = styled.span`
  min-width: 22px;
  text-align: center;
  font-weight: 700;
  font-size: 11px;
  background: ${(p) => p.theme.BoxColor};
  color: ${(p) => p.theme.BoxTextColor};
  padding: 0 3px;
`;

export const T1OutStock = styled.span`
  font-size: 9px;
  font-weight: 600;
  color: ${(p) => p.theme.mainColor};
`;

export const SplitRoot = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: calc(100vh - 120px);
  max-width: 100%;
  background: ${(p) => p.theme.backgroundColor || "#f8f9fa"};
  ${(p) =>
    p.$isRtl
      ? `
    flex-direction: row-reverse;
  `
      : ""}
`;

export const SidebarWrap = styled.aside`
  width: 92px;
  min-width: 92px;
  flex-shrink: 0;
  /* Remove the right border (theme1 requirement) */
  border-right: none;
  border-left: ${(p) => (p.$isRtl ? `1px solid ${p.theme.categoryUnActive || "#e5e7eb"}` : "none")};
  /* Match sidebar background to page background color */
  background: ${(p) => p.theme.backgroundColor || "#f8f9fa"};
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 140px);
  position: sticky;
  top: 72px;
  align-self: flex-start;
  box-shadow: 2px 0 12px rgba(15, 23, 42, 0.06);
`;

export const SidebarScroll = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  padding: 8px 6px 16px;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar (invisible but still scrollable) */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`;

export const CatItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 10px 4px;
  margin-bottom: 4px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: ${(p) =>
    p.$active
      ? p.theme.mainColor || "#2563eb"
      : "transparent"};
  color: ${(p) =>
    p.$active
      ? p.theme.popupbuttonText || "#fff"
      : p.theme.BoxTextColor || p.theme.textColor || "#334155"};
  transition: background 0.2s, transform 0.15s;

  &:active {
    transform: scale(0.97);
  }
`;

export const CatIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  overflow: hidden;
  background: ${(p) =>
    p.$active ? "rgba(255,255,255,0.25)" : p.theme.categoryUnActive || "#f1f5f9"};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
    object-fit: fill;
  }
`;

export const CatLabel = styled.span`
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  max-width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
`;

export const MainPanel = styled.main`
  flex: 1;
  min-width: 0;
  padding: 10px 12px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.categoryUnActive || "#e5e7eb"};
  background: ${(p) => p.theme.BoxColor || "#fff"};
  color: ${(p) => p.theme.BoxTextColor || p.theme.textColor || "#111"};
  font-size: 14px;
  outline: none;
  &::placeholder {
    opacity: 0.5;
  }
  &:focus {
    border-color: ${(p) => p.theme.mainColor || "#2563eb"};
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: ${(p) => p.theme.mainColor};
  text-align: ${(p) => (p.$isRtl ? "right" : "left")};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;
`;

export const Card = styled.article`
  background: ${(p) => p.theme.BoxColor || "#fff"};
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 0;
`;

export const CardImageWrap = styled.div`
  position: relative;
  width: 100%;
  /* Theme2-like "boxed" image sizing */
  height: 20vh;
  min-height: 120px;
  max-height: 220px;
  background: ${(p) => p.theme.categoryUnActive || "#f1f5f9"};
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardBadgeRow = styled.div`
  position: absolute;
  top: 8px;
  ${(p) => (p.$isRtl ? "left" : "right")}: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  max-width: 70%;
  justify-content: ${(p) => (p.$isRtl ? "flex-start" : "flex-end")};
  z-index: 2;
`;

export const Badge = styled.span`
  font-size: 10px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 8px;
  background: ${(p) => p.$variant === "sale" ? "#ef4444" : p.theme.mainColor};
  color: #fff;
`;

export const CardBody = styled.div`
  padding: 10px 10px 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: ${(p) => (p.$isRtl ? "right" : "left")};
`;

export const CardName = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: ${(p) => p.theme.BoxTextColor || p.theme.textColor};
  line-height: 1.25;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: pointer;
`;

export const CardDesc = styled.p`
  margin: 0;
  font-size: 11px;
  color: ${(p) => p.theme.textColor};
  opacity: 0.75;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardPriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
  flex-wrap: wrap;
  flex-direction: ${(p) => (p.$isRtl ? "row-reverse" : "row")};
`;

export const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const PriceOld = styled.span`
  font-size: 12px;
  text-decoration: line-through;
  opacity: 0.55;
`;

export const PriceNow = styled.span`
  font-size: 15px;
  font-weight: 800;
  color: ${(p) => p.theme.BoxPriceColor || p.theme.mainColor};
`;

export const AddBtn = styled.button`
  min-width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: ${(p) => p.theme.mainColor};
  color: ${(p) => p.theme.popupbuttonText || "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  z-index: 1;
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${(p) => p.theme.mainColor};
  z-index: 1;
`;

export const StepBtn = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: ${(p) => p.theme.mainColor};
  color: ${(p) => p.theme.popupbuttonText || "#fff"};
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepQty = styled.span`
  min-width: 28px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  background: ${(p) => p.theme.BoxColor || "#fff"};
  color: ${(p) => p.theme.BoxTextColor || "#111"};
  padding: 0 4px;
`;

export const OutStock = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: ${(p) => p.theme.mainColor};
  padding: 6px 0;
`;

export const LoaderRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  color: ${(p) => p.theme.mainColor};
  font-size: 13px;
`;

export const AllSection = styled.section`
  margin-bottom: 20px;
`;
