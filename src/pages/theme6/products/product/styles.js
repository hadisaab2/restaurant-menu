import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Card grid slot ── */
export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-top: 14px;
  animation: ${fadeUp} 0.3s ease both;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 33.333%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`;

/* ── The card itself ── */
export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${(props) => props.theme.BoxColor};
  border-radius: 22px;
  position: relative;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.09);
  border: 1px solid ${(props) => props.theme.categoryUnActive || "rgba(0,0,0,0.05)"};
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
  }
`;

/* ── Product image area ── */
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20vh;
  overflow: hidden;
  border-radius: 22px 22px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.categoryUnActive || "#f5f5f5"};

  @media (min-width: 768px) {
    height: 24vh;
  }
  @media (min-width: 1024px) {
    height: 28vh;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  visibility: ${(props) => (props.imageLoaded ? "visible" : "hidden")};
  transition: transform 0.4s ease;

  ${Wrapper}:hover & {
    transform: scale(1.04);
  }
`;

/* ── Text block ── */
export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: ${(props) => (props.activeLanuguage === "en" ? "left" : "right")};
  align-items: ${(props) => (props.activeLanuguage === "en" ? "flex-start" : "flex-end")};
  gap: 4px;
  padding: 10px 12px 12px;
  box-sizing: border-box;
  flex: 1;
`;

export const PlateName = styled.span`
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: 700;
  color: ${(props) => props.theme.BoxTextColor};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.35;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

export const PlatePrice = styled.span`
  color: ${(props) => (props.discounted ? props.theme.BoxTextColor || "#999" : props.theme.BoxPriceColor)};
  font-size: 13px;
  font-weight: ${(props) => (props.discounted ? "400" : "700")};
  text-decoration: ${(props) => (props.discounted ? "line-through" : "none")};
  opacity: ${(props) => (props.discounted ? "0.55" : "1")};
`;

export const DiscountPrice = styled.span`
  color: ${(props) => props.theme.BoxPriceColor};
  font-size: 14px;
  font-weight: 800;
`;

/* ── "NEW" badge ── */
export const NEW = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 4;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 9px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbuttonText || "#fff"};
  border-radius: 999px;
  letter-spacing: 0.4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
`;

/* ── Skeleton loader ── */
export const Loader = styled.div`
  border: 2.5px solid rgba(0, 0, 0, 0.08);
  border-left-color: ${(props) => props.theme.mainColor || "#e53e3e"};
  border-radius: 50%;
  width: 22px;
  height: 22px;
  animation: ${spin} 0.9s linear infinite;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  inset: 0;
  z-index: 3;
  background-color: ${(props) => props.theme.categoryUnActive || "#f0f0f0"};
  border-radius: 22px 22px 0 0;
`;

export const WishlistHeartBtn = styled.button`
  position: absolute;
  bottom: 8px;
  left: ${(props) => (props.activeLanuguage === "en" ? "8px" : "auto")};
  right: ${(props) => (props.activeLanuguage === "en" ? "auto" : "8px")};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0;
  background-color: rgba(255, 255, 255, 0.95);
  color: ${(props) => (props.$filled ? "#e11d48" : props.theme.BoxTextColor || "#333")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: transform 0.2s ease, color 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  &:hover { transform: scale(1.08); }
  &:active { transform: scale(0.95); }
`;
