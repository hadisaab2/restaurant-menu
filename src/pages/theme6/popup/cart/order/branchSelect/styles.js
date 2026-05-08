
import { transform } from "lodash";
import styled from "styled-components";

// Styled components
export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`;

export const SelectedValue = styled.div`
  padding: 14px 16px;
  background-color: ${(props) => props.theme.categoryUnActive || "#ffffff"};
  border: 2px solid ${(props) => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
  font-size: 16px;
  transition: all 0.2s ease;

`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 135%;
  left: 0;
  width: 100%;
  max-height: ${props=>props.isOpen?"200px":"0px"};
  overflow-y: auto;
  border-radius: 10px;
  border: none;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: all  0.2s ease-in-out ;
  z-index: 16;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
  background-color:${(props) => props.theme.categoryUnActive || "#ffffff"}; 

`;

export const OptionItem = styled.li`
  height: 50px;
  cursor: pointer;
  padding-left: 7px;
  padding-right: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s;
  background-color: ${props =>
    props.branchName == props.selectedBranch
      ? props.theme.categoryUnActive || "#ffffff"
      : !props.disable
      ? "transparent"
      : "rgba(0, 0, 0, 0.08)"};
  color: ${props =>
    props.branchName == props.selectedBranch
      ? props.theme.popupTextColor || "#00112b"
      : props.disable
      ? "#999"
      : props.theme.popupTextColor || "#00112b"};

`;

export const HasNoDelivery = styled.span`

`;



export const Caret = styled.span`
  border: solid ${(props) => props.theme.popupTextColor || "#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${(props) => (props.open ? "rotate(-135deg)" : "rotate(45deg)")};
  margin-left: 10px;
  transition: transform 0.3s;

`;
