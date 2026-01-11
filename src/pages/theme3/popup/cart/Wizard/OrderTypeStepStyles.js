import styled from "styled-components";

export const OrderTypeContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DropdownWrapper = styled.div`
  width: 100%;
  
  /* Override SelectWrapper width for BranchSelect and RegionSelect */
  > div[class*="SelectWrapper"],
  div[class*="SelectWrapper"] {
    width: 100% !important;
    max-width: 100% !important;
  }
  
  /* Enhance SelectWrapper styling */
  [class*="SelectWrapper"] {
    height: 50px !important;
    margin-top: 0 !important;
  }
  
  /* Enhance SelectedValue styling */
  [class*="SelectedValue"] {
    padding: 14px 16px !important;
    border-radius: 10px !important;
    border: 2px solid ${(props) => props.theme.mainColor || props.theme.maincolor || "#007bff"} !important;
    background-color: ${(props) => props.theme.categoryUnActive || "#ffffff"} !important;
    color: ${(props) => props.theme.popupTextColor || "#00112b"} !important;
    font-size: 16px !important;
    transition: all 0.2s ease !important;
    
    &:hover {
      border-color: ${(props) => props.theme.mainColor || props.theme.maincolor || "#007bff"} !important;
      box-shadow: 0 0 0 3px ${(props) => props.theme.mainColor ? `${props.theme.mainColor}20` : "rgba(0, 123, 255, 0.1)"} !important;
    }
  }
  
  /* Enhance OptionsList styling */
  [class*="OptionsList"] {
    border-radius: 10px !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) !important;
    border: 1px solid ${(props) => props.theme.borderColor || "rgba(0, 0, 0, 0.1)"} !important;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
  margin-bottom: 8px;
`;

export const SectionDescription = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.popupTextColor || "#666"};
  opacity: 0.8;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  border: 2px solid
    ${(props) =>
      props.hasError
        ? "#ff4444"
        : props.theme.mainColor || props.theme.maincolor || "#007bff"};
  background-color: ${(props) => props.theme.categoryUnActive || "#ffffff"};
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 12px;
  padding-right: 40px;

  &:focus {
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.hasError
          ? "rgba(255, 68, 68, 0.1)"
          : props.theme.mainColor
          ? `${props.theme.mainColor}20`
          : "rgba(0, 123, 255, 0.1)"};
    border-color: ${(props) =>
      props.hasError
        ? "#ff4444"
        : props.theme.mainColor || props.theme.maincolor || "#007bff"};
  }

  &:hover {
    border-color: ${(props) =>
      props.hasError
        ? "#ff4444"
        : props.theme.mainColor || props.theme.maincolor || "#007bff"};
  }

  option {
    padding: 12px;
    background: ${(props) => props.theme.categoryUnActive || "#ffffff"};
    color: ${(props) => props.theme.popupTextColor || "#00112b"};
    font-size: 16px;
  }
`;

export const Error = styled.span`
  color: #ff4444;
  font-size: 13px;
  margin-top: 5px;
  display: block;
`;

