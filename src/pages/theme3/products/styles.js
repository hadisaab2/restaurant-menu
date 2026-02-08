import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 padding-bottom: 20px;
 display: flex;
 justify-content: center;
 background-color: ${props => props.theme.backgroundColor || "#f8f9fa"};
`;

export const ProductWrapper = styled.div`
 flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: 0vh;
  opacity: 1;
  transition:all 0.7s ease-in-out;
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
  font-size: 19px;
  font-weight: 700;
  color: ${(props) => props.theme.mainColor};
  text-align: ${(props) => (props.activeLanguage === "ar" ? "right" : "left")};
  letter-spacing: 0.3px;
  padding: 10px 14px;
  border-radius: 12px;
  background: ${(props) => props.theme.BoxColor || props.theme.popupbackgroundColor || props.theme.categoryUnActive};
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.08);
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
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.18);
  z-index: 60;
  animation: gotoPulse 1.6s ease-in-out infinite;

  @keyframes gotoPulse {
    0% { opacity: 0.7; transform: scale(0.98); }
    50% { opacity: 1; transform: scale(1.05); }
    100% { opacity: 0.7; transform: scale(0.98); }
  }
`;

export const AllItemsLoader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${(props) => props.theme.mainColor};
  font-size: 13px;
`;

export const AllItemsLoaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0 20px;
`;

export const LoaderDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.theme.mainColor};
  animation: pulse 0.8s ease-in-out infinite;

  @keyframes pulse {
    0% { opacity: 0.3; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1.1); }
    100% { opacity: 0.3; transform: scale(0.9); }
  }
`;

export const AllItemsSubtitle = styled.p`
  margin: 6px 0 0 0;
  font-size: 12px;
  color: ${(props) => props.theme.textColor};
  opacity: 0.7;
  text-align: ${(props) => (props.activeLanguage === "ar" ? "right" : "left")};
`;

export const AllItemsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const AllItemsListItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  background-color: ${(props) => props.theme.BoxColor || props.theme.popupbackgroundColor || "#fff"};
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  align-items: center;
  min-height: 100px;
`;

export const AllItemsListImage = styled.div`
  width: 80px;
  min-width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.categoryUnactive || "#f0f0f0"};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AllItemsListDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  text-align: ${(props) => (props.activeLanguage === "ar" ? "right" : "left")};
`;

export const AllItemsListName = styled.h4`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.BoxTextColor || props.theme.textColor || "#333"};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AllItemsListPrice = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => props.theme.BoxPriceColor || props.theme.mainColor || "#007bff"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${(props) => (props.activeLanguage === "ar" ? "row-reverse" : "row")};
`;

export const AllItemsListDiscountPrice = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.BoxPriceColor || props.theme.textColor || "#666"};
  text-decoration: line-through;
  opacity: 0.6;
`;

export const AllItemsListQuickAddButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: ${(props) => (props.activeLanguage === "en" ? "8px" : "auto")};
  left: ${(props) => (props.activeLanguage === "en" ? "auto" : "8px")};
  width: 28px;
  height: 28px;
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
  transition: transform 0.2s ease, opacity 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const AllItemsListOutOfStockBadge = styled.div`
  position: absolute;
  bottom: 8px;
  right: ${(props) => (props.activeLanguage === "en" ? "8px" : "auto")};
  left: ${(props) => (props.activeLanguage === "en" ? "auto" : "8px")};
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 999px;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  border: 0;
`;

export const AllItemsListItemWrapper = styled.div`
  position: relative;
  width: 100%;
`;
