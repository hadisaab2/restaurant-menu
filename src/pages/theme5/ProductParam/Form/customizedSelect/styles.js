import _ from "lodash";
import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  margin-top: ${(props) => (props.index != 0 ? "20px" : "10px")};
  border-top: 1px solid ${(props) => {
    let color = props?.theme?.formColor;
    const opacity = 0.08;
    if (_.isEmpty(color)) { color = "rgb(0,0,0)"; }
    if (color.startsWith("#")) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    } else if (color.startsWith("rgb")) {
      return color.replace(/rgba?\(([^)]+)\)/, (_, values) => {
        const rgbValues = values.split(",").slice(0, 3).join(",");
        return `rgba(${rgbValues}, ${opacity})`;
      });
    }
    return color;
  }};
`;

export const SelectHeader = styled.div`
  padding: 10px 14px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.formColor};
  width: 100%;
  border: 1px solid ${(props) => {
    let color = props?.theme?.formColor;
    const opacity = 0.3;
    if (_.isEmpty(color)) { color = "rgb(0,0,0)"; }
    if (color.startsWith("#")) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    } else if (color.startsWith("rgb")) {
      return color.replace(/rgba?\(([^)]+)\)/, (_, values) => {
        const rgbValues = values.split(",").slice(0, 3).join(",");
        return `rgba(${rgbValues}, ${opacity})`;
      });
    }
    return color;
  }};
  font-size: 14px;
  transition: border-color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const Arrow = styled.span`
  font-size: 10px;
  transition: transform 0.25s ease;

  &.up {
    transform: rotate(180deg);
  }
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  border-radius: 10px;
  overflow-y: auto;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${(props) => (props.isOpen ? "200px" : "0px")};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbuttonText};
  width: 100%;
  box-shadow: ${(props) => (props.isOpen ? "0 4px 16px rgba(0, 0, 0, 0.12)" : "none")};
  overflow: hidden;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const Option = styled.li`
  padding: 12px 14px;
  cursor: pointer;
  transition: background 0.2s ease;
  font-size: 14px;
  -webkit-tap-highlight-color: transparent;

  &.selected {
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
    font-weight: 600;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export const CircularOptionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: calc(25% - 6px);
  align-items: center;
  border-radius: 30px;
  background-color: transparent;

  @media (min-width: 768px) {
    width: calc(20% - 6px);
  }
`;

export const CircularOption = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-radius: 30px;
  border: 1.5px solid ${(props) => props.theme.mainColor};
  background-color: ${(props) =>
    props.selected ? props.theme.mainColor : "transparent"};
  font-size: 12px;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  color: ${(props) =>
    props.selected ? props.theme.popupbackgroundColor : props.theme.formColor};
  height: 40px;
  text-align: center;
  padding: 3px 6px;
  margin-top: 8px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.95);
  }
`;

export const Label = styled.label`
  font-weight: 700;
  margin-bottom: 6px;
  color: ${(props) => props.theme.formColor};
  margin-top: 20px;
  font-size: 14px;
  letter-spacing: 0.2px;
`;

export const ErrorLabel = styled.label`
  font-weight: 600;
  color: #e53935;
  margin-top: 8px;
  font-size: 11px;
`;
