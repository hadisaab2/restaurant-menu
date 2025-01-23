import _ from 'lodash';
import styled from 'styled-components';

export const SelectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
  padding-top: 20px;
  font-family: Arial, sans-serif;
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
 font-weight: 200;

`;
export const OptionWrapper = styled.div`
   display: flex;
  flex-direction: row;
  gap:10px
`;


export const OptionCircle = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${(props) => props.theme.formColor};

`;
export const DynamicCircle = styled.div`
width: ${props => props.selected ? "5px" : "17px"};
height: ${props => props.selected ? "5px" : "17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${(props) => props.theme.formColor};
transition: all 0.2s ease-in-out ;
`;



export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${(props) => props.theme.formColor};
  font-size: 14px;

`;