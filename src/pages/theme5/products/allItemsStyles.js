import styled from "styled-components";

export const AllItemsWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (min-width: 768px) {
    width: 96%;
    gap: 32px;
  }
`;

export const AllItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const AllItemsTitle = styled.h3`
  margin: 0 auto;
  width: 95%;
  max-width: 600px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.BoxTextColor};
  text-align: ${(props) => (props.activeLanguage === "ar" ? "right" : "left")};
  letter-spacing: 0.3px;
  padding: 12px 16px;
  border-radius: 14px;
  background: ${(props) =>
    props.theme.BoxColor ||
    props.theme.popupbackgroundColor ||
    props.theme.categoryUnActive};
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.08);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: ${(props) => (props.activeLanguage === "ar" ? "auto" : "0")};
    right: ${(props) => (props.activeLanguage === "ar" ? "0" : "auto")};
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 60%;
    border-radius: 4px;
    background: ${(props) => props.theme.mainColor};
  }

  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 800px;
  }
`;

export const GoToTopButton = styled.button`
  position: fixed;
  bottom: 25px;
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
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.18);
  z-index: 60;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(15, 23, 42, 0.25);
  }

  &:active {
    transform: scale(0.95);
  }
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
  animation: pulse 0.8s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 0.3;
      transform: scale(0.9);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 0.3;
      transform: scale(0.9);
    }
  }
`;

export const AllItemsListQuickAddButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: ${(props) => (props.activeLanguage === "en" ? "10px" : "auto")};
  left: ${(props) => (props.activeLanguage === "en" ? "auto" : "10px")};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbuttonText};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  z-index: 1;
  transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.12);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.92);
  }
`;

export const AllItemsListOutOfStockBadge = styled.div`
  position: absolute;
  bottom: 10px;
  right: ${(props) => (props.activeLanguage === "en" ? "10px" : "auto")};
  left: ${(props) => (props.activeLanguage === "en" ? "auto" : "10px")};
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  border: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

export const AllItemsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AllItemsListItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  background-color: ${(props) =>
    props.theme.BoxColor || props.theme.popupbackgroundColor || "#fff"};
  border-radius: 14px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  align-items: center;
  min-height: 100px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.99);
  }

  @media (min-width: 768px) {
    padding: 12px;
  }
`;

export const AllItemsListImage = styled.div`
  width: 80px;
  min-width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.categoryUnactive || "#f0f0f0"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  @media (min-width: 768px) {
    width: 90px;
    min-width: 90px;
    height: 90px;
  }
`;

export const AllItemsListDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  text-align: ${(props) => (props.activeLanguage === "ar" ? "right" : "left")};
  min-width: 0;
`;

export const AllItemsListName = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) =>
    props.theme.BoxTextColor || props.theme.textColor || "#333"};
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const AllItemsListPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) =>
    props.theme.BoxPriceColor || props.theme.mainColor || "#007bff"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${(props) =>
    props.activeLanguage === "ar" ? "row-reverse" : "row"};

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const AllItemsListDiscountPrice = styled.span`
  font-size: 13px;
  color: ${(props) =>
    props.theme.BoxPriceColor || props.theme.textColor || "#666"};
  text-decoration: line-through;
  opacity: 0.55;
`;

export const AllItemsListItemWrapper = styled.div`
  position: relative;
  width: 100%;
`;
