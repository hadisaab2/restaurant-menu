import _ from 'lodash';
import styled from 'styled-components';

export const SelectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
  padding-top: 20px;
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

export const Option = styled.span`
 /* opacity: 0.8; */
 color: ${(props) => props.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`;
export const OptionWrapper = styled.div`
   display: flex;
  flex-direction: row;
  gap:10px
`;

export const AddBox = styled.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${(props) => props.theme.formColor};
border: 1px solid ${(props) => {
    let color = props.theme.formColor; // Get the color
    const opacity = 0.3; // Desired opacity (e.g., 50%)
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
  font-size:10px;

`;

export const RemoveBox = styled.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${(props) => props.theme.backgroundColor};
background-color: ${(props) => props.theme.mainColor};
`;


export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${(props) => props.theme.formColor};

`;