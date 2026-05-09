import { CiSearch } from "react-icons/ci";
import { HiMenuAlt2 } from "react-icons/hi";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  position: fixed;
  width: 100%;
  left: ${(props) => (props.showSidebar ? "0" : "-100%")};
  top: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: ${(props) =>
    props.showSidebar ? "blur(6px)" : "blur(0px)"};
  -webkit-backdrop-filter: ${(props) =>
    props.showSidebar ? "blur(6px)" : "blur(0px)"};
  z-index: 100;
`;

export const BlurLayer = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: ${(props) =>
    props.showSidebar ? "blur(6px)" : "blur(0px)"};
  -webkit-backdrop-filter: ${(props) =>
    props.showSidebar ? "blur(6px)" : "blur(0px)"};
`;

export const Container = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.sidebarbackground};
  width: 82%;
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 8px 0 24px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (min-width: 480px) {
    width: 65%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;

export const Tabs = styled.div`
  width: 100%;
  height: 60%;
  overflow-y: auto;
  margin-right: ${(props) => (!props.showSidebar ? "100px" : "0px")};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${(props) => (!props.showSidebar ? "0" : "1")};

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.mainColor}40;
    border-radius: 4px;
  }
`;

export const Tab = styled.div`
  width: 100%;
  min-height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.2s ease;
  padding: 4px 0;

  &:active {
    background-color: ${(props) => props.theme.mainColor}10;
  }
`;

export const CategoryName = styled.span`
  margin-left: ${(props) => (props.categoryType ? "10%" : "0%")};
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.sidebartext};
  line-height: 1.4;
`;

export const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
  flex-shrink: 0;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const BrandContainer = styled.div`
  height: 18vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4vh;
`;

export const Brand = styled.img`
  max-width: 180px;
  max-height: 180px;
  margin-right: ${(props) => (!props.showSidebar ? "100px" : "0px")};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${(props) => (!props.showSidebar ? "0" : "1")};
  object-fit: contain;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  height: 40px;
  overflow: hidden;
  position: relative;
  width: 80%;
  margin-bottom: 16px;
  margin-top: 10px;
  margin-right: ${(props) => (!props.showSidebar ? "100px" : "0px")};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${(props) => (!props.showSidebar ? "0" : "1")};
  border-radius: 10px;
  overflow: hidden;
`;

export const Search = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.sidebarsearch};
  border: 0;
  outline: none;
  font-size: 13px;
  padding-left: ${(props) => (props.activeLanguage == "en" ? "36px" : "10px")};
  padding-right: ${(props) =>
    props.activeLanguage == "en" ? "10px" : "36px"};
  color: ${(props) => props.theme.sidebarsearchText};
  border-radius: 10px;

  &::placeholder {
    color: ${(props) => props.theme.sidebarsearchText};
    opacity: 0.45;
  }

  &:focus {
    box-shadow: inset 0 0 0 1.5px ${(props) => props.theme.mainColor}33;
  }
`;

export const SearchIcon = styled(CiSearch)`
  position: absolute;
  left: ${(props) => (props.activeLanguage == "en" ? "12px" : null)};
  right: ${(props) => (props.activeLanguage == "en" ? null : "12px")};
  color: ${(props) => props.theme.sidebarsearchText};
  font-size: 16px;
`;

export const MenuIcon = styled(HiMenuAlt2)`
  position: absolute;
  left: 16px;
  top: 18px;
  color: ${(props) => props.theme.sidebarsearch};
  font-size: 28px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  padding: 2px;

  &:active {
    opacity: 0.7;
  }
`;
