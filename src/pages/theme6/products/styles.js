import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%   { opacity: 0.3; transform: scale(0.9); }
  50%  { opacity: 1;   transform: scale(1.1); }
  100% { opacity: 0.3; transform: scale(0.9); }
`;

const gotoPulse = keyframes`
  0%   { opacity: 0.7; transform: scale(0.98); }
  50%  { opacity: 1;   transform: scale(1.05); }
  100% { opacity: 0.7; transform: scale(0.98); }
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 18px;
  padding-bottom: 12px;
  display: flex;
  justify-content: center;
`;

/* ── Active category title banner ── */
export const CategoryTitleBar = styled.div`
  width: 95%;
  max-width: 700px;
  margin: 0 auto 12px;
  padding: 12px 16px;
  background: ${(props) => props.theme.BoxColor || "#fff"};
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: ${(props) => (props.activeLanguage === "ar" ? "right" : "left")};
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const CategoryTitleText = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: ${(props) => props.theme.BoxTextColor || props.theme.textColor};
  letter-spacing: -0.3px;
  line-height: 1.2;
`;

export const CategorySubtitle = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.BoxTextColor || props.theme.textColor};
  opacity: 0.45;
  font-weight: 400;
`;

export const ProductWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: ${(props) => (props.$noMinHeight ? "0" : "70vh")};
  opacity: 1;
  transition: all 0.7s ease-in-out;
`;

export const AllItemsWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const AllItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const AllItemsTitle = styled.h3`
  margin: 0 auto;
  width: 95%;
  max-width: 600px;
  font-size: 17px;
  font-weight: 800;
  color: ${(props) => props.theme.BoxTextColor || props.theme.textColor};
  text-align: ${(props) => (props.activeLanguage === "ar" ? "right" : "left")};
  letter-spacing: -0.2px;
  padding: 10px 16px;
  border-radius: 14px;
  background: ${(props) =>
    props.theme.BoxColor || props.theme.popupbackgroundColor || props.theme.categoryUnActive};
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.07);
`;

export const GoToTopButton = styled.button`
  position: fixed;
  bottom: calc(80px + env(safe-area-inset-bottom, 0px));
  left: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 0;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbuttonText || "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.18);
  z-index: 200;
  animation: ${gotoPulse} 1.6s ease-in-out infinite;
`;

export const AllItemsLoaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0 20px;
`;

export const AllItemsLoader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${(props) => props.theme.mainColor};
  font-size: 13px;
`;

export const LoaderDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.theme.mainColor};
  animation: ${pulse} 0.8s ease-in-out infinite;
`;
