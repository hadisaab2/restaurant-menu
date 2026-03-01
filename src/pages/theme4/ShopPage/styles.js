import styled from "styled-components";

export const ShopPageWrap = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme?.categoriesSectionBackgroundColor || props.theme?.homepageBackgroundColor || props.theme?.backgroundColor || "#f8f9fa"};
  direction: ${(props) => (props.$activeLanguage === "ar" ? "rtl" : "ltr")};
  padding-bottom: 24px;
`;

export const ShopHeaderSection = styled.section`
  padding: 48px 16px 24px;
  @media (min-width: 768px) {
    padding: 56px 16px 32px;
  }
`;

export const ShopHeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
`;

export const ShopLabel = styled.p`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(props) => props.theme?.mainColor || "#007bff"};
  margin: 0 0 8px 0;
`;

export const ShopTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  margin: 0 0 8px 0;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ShopSubtitle = styled.p`
  font-size: 14px;
  color: ${(props) => (props.theme?.textColor ? `${props.theme.textColor}99` : "#666")};
  margin: 0 auto;
  max-width: 28rem;
`;

export const ShopPillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
`;

export const ShopPill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid ${(props) => (props.$active ? "transparent" : (props.theme?.mainColor ? `${props.theme.mainColor}20` : "rgba(0,0,0,0.08)"))};
  background: ${(props) => (props.$active ? (props.theme?.mainColor || "#007bff") : (props.theme?.backgroundColor || "#fff"))};
  color: ${(props) => (props.$active ? (props.theme?.backgroundColor || "#fff") : (props.theme?.textColor ? `${props.theme.textColor}99` : "#666"))};
  box-shadow: ${(props) => (props.$active && props.theme?.mainColor ? `0 2px 8px ${props.theme.mainColor}30` : "0 1px 3px rgba(0,0,0,0.06)")};
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    border-color: ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}40` : "rgba(0,123,255,0.2)")};
    color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  }
`;

export const ShopPillIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
`;

export const ShopStickyBar = styled.section`
  position: sticky;
  top: 56px;
  z-index: 30;
  background: ${(props) => (props.theme?.backgroundColor ? `${props.theme.backgroundColor}cc` : "rgba(255,255,255,0.9)")};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}18` : "rgba(0,0,0,0.06)")};
  padding: 12px 16px;
  @media (min-width: 768px) {
    top: 64px;
  }
`;

export const ShopStickyInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
`;

export const ShopSearchWrap = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
`;

export const ShopSearchIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.$activeLanguage === "ar" ? "auto" : "12px")};
  right: ${(props) => (props.$activeLanguage === "ar" ? "12px" : "auto")};
  color: ${(props) => (props.theme?.textColor ? `${props.theme.textColor}99` : "#999")};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShopSearchInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 0 12px 0 36px;
  border-radius: 9999px;
  border: 1px solid ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}20` : "rgba(0,0,0,0.08)")};
  background: ${(props) => props.theme?.backgroundColor || "#fff"};
  font-size: 14px;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  direction: ${(props) => (props.$activeLanguage === "ar" ? "rtl" : "ltr")};
  ${(props) => props.$activeLanguage === "ar" && "padding: 0 36px 0 12px;"}
  &:focus {
    border-color: ${(props) => props.theme?.mainColor || "#007bff"};
    box-shadow: 0 0 0 2px ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}20` : "rgba(0,123,255,0.2)")};
  }
  &::placeholder {
    color: ${(props) => (props.theme?.textColor ? `${props.theme.textColor}99` : "#999")};
  }
`;

export const ShopContentSection = styled.section`
  padding: 16px;
  @media (min-width: 768px) {
    padding: 24px 16px;
  }
`;

export const ShopContentInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
