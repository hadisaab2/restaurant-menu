import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { IoShareSocialSharp } from "react-icons/io5";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: ${(props) => (props.activeLanuguage == "en" ? "flex-start" : "flex-end")};
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};

  @media (min-width: 480px) {
    width: 92%;
  }

  @media (min-width: 768px) {
    margin-top: 28px;
    margin-bottom: 28px;
  }
`;

export const Text = styled.div`
  font-size: 24px;
  line-height: 1.3;

  @media (min-width: 480px) {
    font-size: 26px;
  }

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const SearchWapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-top: 24px;
  color: ${(props) => props.theme.searchTextColor};
  height: 44px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  flex-direction: row;
  gap: 8px;

  @media (min-width: 480px) {
    width: 92%;
    height: 46px;
  }

  @media (min-width: 768px) {
    height: 48px;
    border-radius: 14px;
  }
`;

export const SearchContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.searchTextColor};
  height: 44px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    height: 48px;
    border-radius: 14px;
  }
`;

export const Search = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.searchbackground};
  border: 0;
  outline: none;
  font-size: 14px;
  padding-left: ${(props) => (props.activeLanguage == "en" ? "36px" : "12px")};
  padding-right: ${(props) => (props.activeLanguage == "en" ? "12px" : "36px")};
  color: ${(props) => props.theme.searchTextColor};
  transition: box-shadow 0.2s ease;

  &::placeholder {
    color: ${(props) => props.theme.searchTextColor};
    opacity: 0.45;
    font-size: 13px;
  }

  &:focus {
    box-shadow: inset 0 0 0 1.5px ${(props) => props.theme.mainColor}33;
  }

  @media (min-width: 768px) {
    font-size: 15px;

    &::placeholder {
      font-size: 14px;
    }
  }
`;

export const SearchIcon = styled(CiSearch)`
  position: absolute;
  left: ${(props) => (props.activeLanguage == "en" ? "12px" : null)};
  right: ${(props) => (props.activeLanguage == "en" ? null : "12px")};
  font-size: 18px;
  opacity: 0.7;
`;

export const SidebarAction = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 10px;
  font-weight: 600;
  color: ${(props) => props.theme.searchTextColor};
  height: 40px;
  font-size: 13px;

  @media (min-width: 480px) {
    width: 92%;
  }
`;

export const ShareIcon = styled.div`
  height: 100%;
  font-size: 13px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 12px;
  font-weight: 500;
  gap: 6px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.searchbackground};
  color: ${(props) => props.theme.searchTextColor};
  cursor: pointer;
  transition: opacity 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    opacity: 0.7;
  }
`;

export const ShareIconLogo = styled(IoShareSocialSharp)`
  color: ${(props) => props.theme.searchTextColor};
  font-size: 15px;
`;
