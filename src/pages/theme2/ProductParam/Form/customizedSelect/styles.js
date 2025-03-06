import _ from "lodash";
import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  margin-top: ${props=>props.index!=0 ? "30px":"10px"};

  border-top: 1px solid ${(props) => {
    let color = props?.theme?.formColor; // Get the color
    const opacity = 0.2; // Desired opacity (e.g., 50%)
    if(_.isEmpty(color)){color="rgb(0,0,0)"};

    if (color.startsWith("#")) {
      // HEX to RGBA conversion
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    } else if (color.startsWith("rgb")) {
      // Adjust existing RGB/RGBA
      return color.replace(/rgba?\(([^)]+)\)/, (_, values) => {
        const rgbValues = values.split(",").slice(0, 3).join(","); // Extract RGB values
        return `rgba(${rgbValues}, ${opacity})`;
      });
    }
    return color; // Fallback if format is unsupported
  }};
`;

export const SelectHeader = styled.div`
  padding: 7px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color:transparent;
  color:${(props) => props.theme.formColor};
  width: 70%;
  border: 1px solid ${(props) => props.theme.formColor};

font-size: 13px;
`;

export const Arrow = styled.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  border-radius: 4px;
  overflow-y: auto;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${props=>props.isOpen?"200px":"0px"};
  transition: 0.2s all ease-in-out;
  background-color:${(props) => props.theme.mainColor};
  color:${(props) => props.theme.popupbuttonText};
  width: 70%;

`;

export const Option = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${(props) => props.theme.backgroundColor};
    color:${(props) => props.theme.mainColor};
  }
`;

export const OptionsWrapper = styled.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`;
export const CircularOptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`;
export const CircularOption = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  align-items: center;
  border-radius:30px;
  border: 1px solid ${(props) => props.theme.mainColor};
  background-color: ${props=>props.selected?props.theme.mainColor:"transparent"};
  font-size: 12px;
  color: ${props=>props.selected?props.theme.popupbackgroundColor:props.theme.formColor};
  height: 40px;
  text-align: center;
  padding: 3px;
  margin-top: 10px;
`;
export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${(props) => props.theme.formColor};
  margin-top: 20px;
  font-size: 14px;

`;