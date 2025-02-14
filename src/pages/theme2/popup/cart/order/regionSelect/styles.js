
import { transform } from "lodash";
import styled, { keyframes } from "styled-components";
import { CiSearch } from "react-icons/ci";

// Styled components
export const SelectWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 40px;
  margin-top: 20px;

`;

export const SelectedValue = styled.div`
  padding: 10px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 130%;
  left: 0;
  width: 100%;
  max-height: ${props=>props.isOpen?"220px":"0px"};
  overflow-y: auto;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: all  0.2s ease-in-out ;
  z-index: 10;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
  background-color:${(props) => props.theme.mainColor}; 

`;

export const OptionItem = styled.li`
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  background-color: ${props=>props.regionName==props.selectedRegion?props.theme.popupbackgroundColor:"transparent"};
  color: ${props=>props.regionName==props.selectedRegion?props.theme.mainColor:props.theme.popupbackgroundColor};
  &:hover {
    background-color: ${(props) => props.theme.popupbackgroundColor};
  }
`;

export const OptionText = styled.span`
width: 90%;
`;


export const Caret = styled.span`
  border: solid ${(props) => props.theme.backgroundColor};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${(props) => (props.open ? "rotate(-135deg)" : "rotate(45deg)")};
  margin-left: 10px;
  transition: transform 0.3s;

`;


export const SearchWrapper = styled.div`
height: 70px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(0,0,0,0.2);
`;
export const SearchContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`;

export const Search = styled.input`
width: 100%;
  padding-left: 10px;
  border-radius: 5px;
  height: 60%;
  background-color:${(props) => props.theme.popupbackgroundColor}; ;
  color: ${(props) => props.theme.mainColor};
  border: 0;
  
  &:focus{
    outline: none;
  }
  &::placeholder{
    color: ${(props) => props.theme.mainColor};
    font-size: 13px;

  }
`;

export const SearchIcon = styled(CiSearch)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${(props) => props.theme.mainColor};

`;


const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Loader = styled.div`
  border: 3px solid ${(props) => props.theme.popupbackgroundColor};
  border-left-color:${(props) => props.theme.popupTextColor};; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite; /* Apply animation */
`;

