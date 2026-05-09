import _ from 'lodash';
import styled from 'styled-components';

export const SelectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: ${(props) => (props.index != 0 ? "20px" : "10px")};
  padding-top: 20px;
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

export const Option = styled.span`
  color: ${(props) => props.theme.formColor};
  font-size: 14px;
  font-weight: 400;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  padding: 6px 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.15s ease;

  &:active {
    opacity: 0.7;
  }
`;

export const AddBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.formColor};
  border: 1.5px solid ${(props) => {
    let color = props.theme.formColor;
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
  font-size: 11px;
  flex-shrink: 0;
  transition: border-color 0.2s ease;
`;

export const RemoveBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
  flex-shrink: 0;
  transition: transform 0.15s ease;
`;

export const Label = styled.label`
  font-weight: 700;
  margin-bottom: 6px;
  color: ${(props) => props.theme.formColor};
  font-size: 14px;
  letter-spacing: 0.2px;
`;

export const ErrorLabel = styled.label`
  font-weight: 600;
  color: #e53935;
  margin-top: 8px;
  font-size: 11px;
`;
