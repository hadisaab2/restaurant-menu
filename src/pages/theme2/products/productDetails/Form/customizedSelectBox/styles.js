import styled from 'styled-components';

export const SelectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
  padding-top: 20px;
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

export const Option = styled.span`
 /* opacity: 0.8; */
 color: ${(props) => props.theme.mainColor};
 font-weight: 200;

`;
export const OptionWrapper = styled.div`
   display: flex;
  flex-direction: row;
  gap:10px
`;

export const AddBox = styled.div`
width: 20px;
height: 20px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid ${(props) => {
    const color = props.theme.mainColor; // Get the color
    const opacity = 0.3; // Desired opacity (e.g., 50%)

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
  }};font-size:12px;

`;

export const RemoveBox = styled.div`
width: 20px;
height: 20px;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
color: ${(props) => props.theme.backgroundColor};
background-color: ${(props) => props.theme.mainColor};
`;


export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${(props) => props.theme.mainColor};

`;