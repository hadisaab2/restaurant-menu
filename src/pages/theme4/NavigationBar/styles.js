import styled from "styled-components";

export const NavBarContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${(props) => props.theme?.BoxColor || "#ffffff"};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
`;

export const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 65px;
    gap: 16px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 40px;
    max-width: 150px;
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
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  font-family: ${(props) => `${props.theme?.font || "system-ui"}, "Noto Kufi Arabic"`};

  &:hover {
    background: ${(props) => props.theme?.mainColor || "#007bff"}15;
    color: ${(props) => props.theme?.mainColor || "#007bff"};
    transform: translateY(-2px);
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
    width: 60%;
  }
`;

export const NavLinkText = styled.span`
  display: inline-block;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const LanguageButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme?.mainColor || "#007bff"};
  background: ${(props) => props.theme?.mainColor || "#007bff"};
  color: ${(props) => props.theme?.languageTextColor || "#ffffff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1) rotate(15deg);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background: ${(props) => props.theme?.mainColor || "#007bff"};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    font-size: 16px;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme?.mainColor || "#007bff"};
  background: ${(props) => props.theme?.mainColor || "#007bff"};
  color: ${(props) => props.theme?.languageTextColor || "#ffffff"};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 968px) {
    display: flex;
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    font-size: 18px;
  }
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
  top: ${(props) => (props.activeLanguage === "ar" ? "0" : "0")};
  ${(props) => (props.activeLanguage === "ar" ? "left: 0;" : "right: 0;")}
  width: 280px;
  max-width: 85vw;
  height: 100vh;
  background: ${(props) => props.theme?.BoxColor || "#ffffff"};
  box-shadow: ${(props) =>
    props.activeLanguage === "ar"
      ? "2px 0 20px rgba(0, 0, 0, 0.15)"
      : "-2px 0 20px rgba(0, 0, 0, 0.15)"};
  z-index: 1000;
  padding: 80px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transform: ${(props) =>
    props.isOpen
      ? "translateX(0)"
      : props.activeLanguage === "ar"
      ? "translateX(-100%)"
      : "translateX(100%)"};
  transition: transform 0.3s ease;
  overflow-y: auto;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
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

