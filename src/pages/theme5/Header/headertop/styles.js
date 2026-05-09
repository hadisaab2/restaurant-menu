import styled from "styled-components";
import { HiMenuAlt2 } from "react-icons/hi";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 16px 0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 20px 0;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  width: 90%;
  min-height: 48px;

  @media (min-width: 768px) {
    width: 92%;
  }
`;

export const Brand = styled.img`
  max-width: 200px;
  max-height: 100px;
  position: absolute;
  margin-right: 7px;
  object-fit: contain;
  transition: opacity 0.3s ease;

  @media (min-width: 480px) {
    max-width: 220px;
    max-height: 110px;
  }

  @media (min-width: 768px) {
    max-width: 250px;
    max-height: 120px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const LanguageContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 12px;
  width: 64px;
  height: 28px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.languagebackground};
  opacity: 0.5;
  position: absolute;
  height: 100%;
  z-index: 1;
  border-radius: 12px;
`;

export const Ball = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.languagebackground};
  left: ${(props) => (props.activeLanguage == "en" ? "0px" : "34px")};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  width: 50%;
  z-index: 2;
  border-radius: 12px;
`;

export const Language = styled.div`
  z-index: 3;
  flex: 1;
  height: 100%;
  color: ${(props) => props.theme.languageTextColor};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
  transition: opacity 0.2s ease;
`;

export const MenuIcon = styled(HiMenuAlt2)`
  color: ${(props) => props.theme.mainColor};
  font-size: 28px;
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  transition: opacity 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    opacity: 0.7;
  }
`;
