import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${props => {
    const bgColor = props.theme.backgroundColor || props.theme.backgroundcolor || "#F6F5F5";
    return bgColor;
  }};
  position: relative;
  z-index: 100;
  margin-bottom: 0;
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  padding: 12px 5%;
  min-height: 50px;
  
  @media (min-width: 768px) {
    padding: 14px 5%;
    min-height: 60px;
  }
`;

export const LogoSection = styled.div`
  position: absolute;
  left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  @media (min-width: 768px) {
    left: 5%;
  }
`;

export const Logo = styled.img`
  max-width: 200px;
  max-height: 60px;
  object-fit: contain;
  
  @media (min-width: 768px) {
    max-width: 250px;
    max-height: 70px;
  }
`;

export const TopRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1;
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const MenuIcon = styled.div`
  color: ${props => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  font-size: 27px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const LanguageButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.theme.mainColor || "#333333"};
  font-size: 18px;
  
  &:hover {
    transform: scale(1.1);
    color: ${props => props.theme.mainColor || "#007bff"};
  }
  
  &:active {
    transform: scale(1);
  }
  
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 0;
  min-height: 44px;
  
  @media (min-width: 768px) {
    padding: 14px 0;
  }
`;

export const SearchSection = styled.div`
  width: 100%;
  padding: 0 5% 14px 5%;
  
  @media (min-width: 768px) {
    padding: 0 5% 16px 5%;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: 48px;
  
  @media (min-width: 768px) {
    height: 52px;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.searchbackground || props.theme.backgroundColor || "#ffffff"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:focus-within {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: ${props => props.activeLanguage === "en" ? "16px" : "auto"};
  right: ${props => props.activeLanguage === "en" ? "auto" : "16px"};
  font-size: 20px;
  color: ${props => props.theme.searchTextColor || "#999999"};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.searchbackground || props.theme.backgroundColor || "#ffffff"};
  border: 1px solid rgba(0, 0, 0, 0.08);
  outline: none;
  padding-left: ${props => props.activeLanguage === "en" ? "48px" : "16px"};
  padding-right: ${props => props.activeLanguage === "en" ? "16px" : "48px"};
  color: ${props => props.theme.searchTextColor || props.theme.textColor || "#333333"};
  font-size: 15px;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${props => props.theme.searchTextColor || "#999999"};
    opacity: 0.6;
  }

  &:focus {
    border-color: ${props => {
      const mainColor = props.theme.mainColor || props.theme.maincolor || "#007bff";
      return `${mainColor}40`;
    }};
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const BackButton = styled.button`
  background: ${props => {
    const mainColor = props.theme.mainColor || props.theme.maincolor || "#007bff";
    return `${mainColor}20`;
  }};
  border: 1px solid ${props => {
    const mainColor = props.theme.mainColor || props.theme.maincolor || "#007bff";
    return `${mainColor}30`;
  }};
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 44px;
  min-height: 44px;
  flex-shrink: 0;
  
  &:hover {
    background: ${props => {
      const mainColor = props.theme.mainColor || props.theme.maincolor || "#007bff";
      return `${mainColor}30`;
    }};
    border-color: ${props => {
      const mainColor = props.theme.mainColor || props.theme.maincolor || "#007bff";
      return `${mainColor}50`;
    }};
    transform: translateX(-1px);
    box-shadow: 0 2px 6px ${props => {
      const mainColor = props.theme.mainColor || props.theme.maincolor || "#007bff";
      return `${mainColor}25`;
    }};
  }
  
  &:active {
    transform: translateX(0) scale(0.98);
    transition: all 0.1s ease;
  }
  
  @media (min-width: 768px) {
    padding: 11px;
    border-radius: 11px;
  }
`;

export const BackIcon = styled.div`
  font-size: 20px;
  color: ${props => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.textColor || props.theme.textcolor || "#1a1a1a"};
  margin: 0;
  flex: 1;
  text-align: center;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  letter-spacing: -0.2px;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 4px;
  
  @media (min-width: 768px) {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.3px;
    padding: 0 6px;
  }
`;

