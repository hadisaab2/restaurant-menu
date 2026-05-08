import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { IoShareSocialSharp } from "react-icons/io5";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
`;

export const TextContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: ${(props) => (props.activeLanuguage === "en" ? "flex-start" : "flex-end")};
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
`;

export const Text = styled.div`
  font-size: 22px;
`;

export const SearchWapper = styled.div`
  width: 92%;
  display: flex;
  align-items: center;
  margin: 10px auto 14px;
  gap: 10px;
  direction: ltr;
`;

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.searchTextColor};
  height: 46px;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.theme.searchbackground};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  border: 1px solid ${(props) => props.theme.categoryUnActive || "rgba(0,0,0,0.07)"};
  padding: 0 14px;
`;

export const Search = styled.input`
  flex: 1;
  height: 100%;
  background: transparent;
  border: 0;
  outline: none;
  padding-left: ${(props) => (props.activeLanguage === "en" ? "10px" : "0px")};
  padding-right: ${(props) => (props.activeLanguage === "en" ? "0px" : "10px")};
  color: ${(props) => props.theme.searchTextColor};
  font-size: 14px;

  &::placeholder {
    color: ${(props) => props.theme.searchTextColor};
    opacity: 0.45;
  }
`;

export const SearchIcon = styled(CiSearch)`
  font-size: 18px;
  color: ${(props) => props.theme.searchTextColor};
  opacity: 0.55;
  flex-shrink: 0;
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
`;

export const FilterContainer = styled.div``;

export const ShareIcon = styled.div`
  height: 46px;
  min-width: 46px;
  font-size: 13px;
  padding: 0 16px;
  border-radius: 999px;
  font-weight: 600;
  gap: 6px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.searchbackground};
  color: ${(props) => props.theme.searchTextColor};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  border: 1px solid ${(props) => props.theme.categoryUnActive || "rgba(0,0,0,0.07)"};
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    opacity: 0.7;
  }
`;

export const ShareIconLogo = styled(IoShareSocialSharp)`
  color: ${(props) => props.theme.searchTextColor};
  font-size: 15px;
  flex-shrink: 0;
`;
