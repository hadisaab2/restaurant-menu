import styled from "styled-components";

export const NavBarContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${(props) => props.theme?.navigationBarBackgroundColor || props.theme?.backgroundColor || "#ffffff"};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: opacity 0.4s ease, transform 0.4s ease;
  opacity: ${(props) => (props.$isProductDetailsOpen ? 0 : 1)};
  transform: ${(props) => (props.$isProductDetailsOpen ? "translateY(-20px)" : "translateY(0)")};
  pointer-events: ${(props) => (props.$isProductDetailsOpen ? "none" : "auto")};
`;

export const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  gap: 24px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 70px;
    gap: 16px;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  z-index: 1;

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
  max-width: 250px;
  object-fit: contain;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 60px;
    max-width: 200px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: ${(props) => (props.activeLanguage === "ar" ? "flex-end" : "flex-start")};
  margin: ${(props) => (props.activeLanguage === "ar" ? "0 0 0 auto" : "0 auto 0 0")};

  @media (max-width: 968px) {
    display: none;
  }
`;

export const NavLink = styled.button`
  padding: 10px 20px;
  background: transparent;
  border: none;
  color: ${(props) => props.theme?.textColor || "#333333"};
  font-size: 15px;
  font-weight: 500;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  font-family: ${(props) => `${props.theme?.font || "system-ui"}, "Noto Kufi Arabic"`};
  opacity: ${props => props.disabled ? 0.6 : 1};

  &:hover {
    ${props => !props.disabled ? `
      background: ${props.theme?.mainColor || "#007bff"}15;
      color: ${props.theme?.mainColor || "#007bff"};
      transform: translateY(-2px);
    ` : ""}
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${(props) => props.theme?.mainColor || "#007bff"};
    transition: width 0.3s ease;
  }

  &:hover::after {
    ${props => !props.disabled ? `width: 60%;` : ""}
  }
`;

export const NavLinkText = styled.span`
  display: inline-block;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const LanguageContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 10px;
  width: 50px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme?.languagebackground || "#f0f0f0"};
  opacity: 0.6;
  position: absolute;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
`;

export const Ball = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme?.languagebackground || "#f0f0f0"};
  left: ${(props) => (props.activeLanguage === "en" ? "0px" : "25px")};
  transition: all ease-in-out 0.2s;
  height: 100%;
  width: 50%;
  z-index: 2;
  border-radius: 10px;
`;

export const Language = styled.div`
  z-index: 3;
  flex: 1;
  height: 100%;
  color: ${(props) => props.theme?.languageTextColor || "#333333"};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
  user-select: none;
`;

export const MobileMenuButton = styled.button`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: ${(props) => props.theme?.mainColor || props.theme?.maincolor || "#007bff"};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 27px;
  flex-shrink: 0;
  z-index: 2;

  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    font-size: 27px;
  }
`;

export const MobileMenuIcon = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme?.mainColor || "#007bff"};
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.activeLanguage === "ar" ? "auto" : "0")};
  right: ${(props) => (props.activeLanguage === "ar" ? "0" : "auto")};
  width: 280px;
  max-width: 85vw;
  height: 100%;

  background: ${(props) => props.theme?.backgroundColor || "#ffffff"};
  box-shadow: ${(props) =>
    props.activeLanguage === "ar"
      ? "-2px 0 20px rgba(0, 0, 0, 0.15)"
      : "2px 0 20px rgba(0, 0, 0, 0.15)"};
  z-index: 5000;
  padding: 0;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 0;
  transform: ${(props) => {
    if (props.isOpen) return "translateX(0)";
    return props.activeLanguage === "ar" ? "translateX(100%)" : "translateX(-100%)";
  }};
  transition: transform 0.3s ease;
  overflow-y: auto;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  border-top-right-radius: ${(props) => (props.activeLanguage === "ar" ? "0" : "20px")};
  border-bottom-right-radius: ${(props) => (props.activeLanguage === "ar" ? "0" : "20px")};
  border-top-left-radius: ${(props) => (props.activeLanguage === "ar" ? "20px" : "0")};
  border-bottom-left-radius: ${(props) => (props.activeLanguage === "ar" ? "20px" : "0")};
`;

export const MobileNavLink = styled.button`
  padding: 16px 20px;
  background: transparent;
  border: none;
  border-radius: 12px;
  color: ${(props) => props.theme?.textColor || "#333333"};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: ${(props) => (props.activeLanguage === "ar" ? "right" : "left")};
  font-family: ${(props) => `${props.theme?.font || "system-ui"}, "Noto Kufi Arabic"`};
  width: 100%;
  display: flex;
  align-items: center;
  ${(props) => (props.activeLanguage === "ar" ? "justify-content: flex-end;" : "justify-content: flex-start;")}

  &:hover {
    background: ${(props) => props.theme?.mainColor || "#007bff"}15;
    color: ${(props) => props.theme?.mainColor || "#007bff"};
    transform: translateX(${(props) => (props.activeLanguage === "ar" ? "-4px" : "4px")});
  }

  &:active {
    transform: translateX(0);
  }
`;

export const MobileMenuSection = styled.div`
  width: 100%;
  margin-bottom: 4px;
  animation: slideInFromLeft 0.4s ease-out;
  animation-fill-mode: both;
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.15s; }
  &:nth-child(4) { animation-delay: 0.2s; }
  &:nth-child(5) { animation-delay: 0.25s; }
`;

export const MobileMenuSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  transition: all 0.3s ease;
  border-bottom: none;
  opacity: ${props => props.disabled ? 0.6 : 1};
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  background: transparent;

  &:hover {
    ${props => !props.disabled ? `
      background: ${props.theme?.mainColor || "#007bff"}10;
    ` : ""}
  }
`;

export const MobileMenuSectionIcon = styled.div`
  font-size: 20px;
  color: ${props => props.theme?.mainColor || props.theme?.maincolor || props.theme?.textColor || "#333333"};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  flex-shrink: 0;
`;

export const MobileMenuSectionTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme?.textColor || "#333333"};
  flex: 1;
  text-align: ${props => props.activeLanguage === "ar" ? "right" : "left"};
`;

export const MobileMenuCollapsibleIcon = styled.div`
  font-size: 12px;
  color: ${props => props.theme?.textColor || "#666666"};
  margin-${props => props.activeLanguage === "ar" ? "right" : "left"}: auto;
  transition: transform 0.3s ease;
  flex-shrink: 0;
`;

export const MobileMenuSectionContent = styled.div`
  width: 100%;
  padding: 8px 0;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  background: ${props => props.theme?.backgroundColor || "rgba(0, 0, 0, 0.02)"};
`;

export const MobileMenuCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0;
`;

export const MobileMenuCategoryItem = styled.button`
  width: 100%;
  padding: 12px 24px;
  padding-left: ${props => props.activeLanguage === "ar" ? "24px" : "48px"};
  padding-right: ${props => props.activeLanguage === "ar" ? "48px" : "24px"};
  border: none;
  background: ${props => props.active ? (props.theme?.mainColor || props.theme?.maincolor || "#007bff") + "20" : "transparent"};
  color: ${props => props.theme?.textColor || "#333333"};
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  text-align: ${props => props.activeLanguage === "ar" ? "right" : "left"};
  transition: all 0.3s ease;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  border-bottom: none;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &:hover {
    background: ${props => props.theme?.mainColor || "#007bff"}15;
    color: ${props => props.theme?.mainColor || props.theme?.maincolor || "#007bff"};
  }
`;

export const MobileMenuCategoryIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 4px;
`;

export const MobileMenuCategoryText = styled.span`
  flex: 1;
  text-align: ${props => props.activeLanguage === "ar" ? "right" : "left"};
`;

export const MobileMenuLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  margin-bottom: 5px;
  animation: slideInFromLeft 0.3s ease-out;
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const MobileMenuLogo = styled.img`
  height: 60px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
`;

export const MobileMenuCloseButton = styled.button`
  position: absolute;
  top: 20px;
  ${props => props.activeLanguage === "ar" ? "left: 20px;" : "right: 20px;"}
  background: transparent;
  border: none;
  font-size: 24px;
  color: ${props => props.theme?.textColor || "#333333"};
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 10;
  
  &:hover {
    background: ${props => props.theme?.mainColor || "#007bff"}15;
    color: ${props => props.theme?.mainColor || "#007bff"};
    transform: rotate(90deg);
  }
`;

export const MobileMenuDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${props => props.theme?.borderColor || "rgba(0, 0, 0, 0.1)"};
  margin: 4px 0;
`;

export const MobileMenuSocialSection = styled.div`
  width: 100%;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  margin-top: 10px;
`;

export const MobileMenuSocialGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const MobileMenuSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${props => props.theme?.boxColor || "#f8f9fa"};
  color: ${props => {
    if (props.platform?.toLowerCase().includes("facebook")) return "#1877F2";
    if (props.platform?.toLowerCase().includes("instagram")) return "#E4405F";
    if (props.platform?.toLowerCase().includes("twitter")) return "#1DA1F2";
    if (props.platform?.toLowerCase().includes("whatsapp")) return "#25D366";
    if (props.platform?.toLowerCase().includes("tiktok")) return "#000000";
    return props.theme?.mainColor || "#007bff";
  }};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const MobileMenuSocialIcon = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileMenuCopyright = styled.div`
  width: 100%;
  padding: 20px 24px;
  text-align: center;
  font-size: 12px;
  color: ${props => props.theme?.textColor || "#666666"};
  margin-top: auto;
  margin-bottom: 20px;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 13px;
  }
`;
