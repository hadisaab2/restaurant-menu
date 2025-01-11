import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  margin-top: 30px;

  font-family: Arial, sans-serif;
  border-top: 1px solid ${(props) => {
    const color = props.theme.mainColor; // Get the color
    const opacity = 0.2; // Desired opacity (e.g., 50%)

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
  padding: 10px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color:transparent;
  color:${(props) => props.theme.mainColor};
  width: 70%;
  border: 1px solid ${(props) => props.theme.mainColor};

`;

export const Arrow = styled.span`
  font-size: 12px;
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
  color:${(props) => props.theme.backgroundColor};
  width: 70%;

`;

export const Option = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #e9e9e9;
  }

  &.selected {
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${(props) => props.theme.mainColor};
  margin-top: 20px;
`;