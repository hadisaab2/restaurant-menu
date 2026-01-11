import styled from "styled-components";

export const WizardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 60vh;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
`;

export const StepTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
  margin-bottom: 30px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${(props) => props.theme.borderColor || "rgba(0, 0, 0, 0.1)"};
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  z-index: 1;
  
  span {
    font-size: 12px;
    color: ${(props) =>
      props.active
        ? props.theme.mainColor || props.theme.maincolor || "#007bff"
        : "#999"};
    margin-top: 8px;
    font-weight: ${(props) => (props.active ? "600" : "400")};
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`;

export const StepIndicator = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  background: ${(props) =>
    props.completed
      ? props.theme.mainColor || props.theme.maincolor || "#007bff"
      : props.active
      ? props.theme.mainColor || props.theme.maincolor || "#007bff"
      : props.theme.categoryUnActive || "#e0e0e0"};
  color: ${(props) =>
    props.completed || props.active ? "#ffffff" : "#999"};
  border: 2px solid
    ${(props) =>
      props.active || props.completed
        ? props.theme.mainColor || props.theme.maincolor || "#007bff"
        : "transparent"};
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.active || props.completed
      ? "0 4px 12px rgba(0, 123, 255, 0.3)"
      : "none"};
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }
`;

export const StepContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  min-height: 300px;
  overflow-y: auto;
  max-height: calc(85vh - 250px);
  
  @media (max-width: 768px) {
    padding: 15px 0;
    min-height: 250px;
    max-height: calc(85vh - 220px);
  }
`;

export const NavigationButtons = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.borderColor || "rgba(0, 0, 0, 0.1)"};
  position: sticky;
  bottom: 0;
  background: ${(props) => props.theme.popupbackgroundColor || "#ffffff"};
  z-index: 10;
  
  @media (max-width: 768px) {
    padding-top: 15px;
  }
`;

export const NavButton = styled.button`
  flex: ${(props) => (props.variant === "primary" ? "1.5" : "1")};
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  outline: none;
  
  ${(props) =>
    props.variant === "primary"
      ? `
    background: ${props.theme.mainColor || props.theme.maincolor || "#007bff"};
    color: white;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
    
    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `
      : `
    background: ${props.theme.categoryUnActive || "#f5f5f5"};
    color: ${props.theme.textColor || "#333"};
    border: 1px solid ${props.theme.borderColor || "rgba(0, 0, 0, 0.1)"};
    
    &:hover {
      background: ${props.theme.borderColor || "#e0e0e0"};
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
  
  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }
`;

