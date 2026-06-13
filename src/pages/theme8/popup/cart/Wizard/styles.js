import styled from "styled-components";

export const WizardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  min-height: 60vh;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
      margin-bottom: 50px;
`;

export const StepTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

export const StepHeader = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`;

export const StepTitleText = styled(StepTitle)`
  margin-bottom: 0;
  flex: 1;
`;

export const StepCloseButton = styled.button`
  border: none;
  background: transparent;
  color: ${(props) => props.theme.mainColor || "#00112b"};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 3px 6px;
  line-height: 1;
  border-radius: 8px;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${(props) => props.theme.mainColor || "rgba(0, 0, 0, 0.1)"};
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
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
    font-size: 11px;
    color: ${(props) =>
      props.active
        ? props.theme.mainColor || props.theme.maincolor || "#007bff"
        : "#999"};
    margin-top: 6px;
    font-weight: ${(props) => (props.active ? "600" : "400")};
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 9px;
    }
  }
`;

export const StepIndicator = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
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
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
`;

export const StepContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  min-height: 260px;
  overflow-y: auto;
  max-height: calc(85vh - 230px);
  
  @media (max-width: 768px) {
    padding: 12px 0;
    min-height: 220px;
    max-height: calc(85vh - 200px);
  }
`;

export const NavigationButtons = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 16px;
  position: sticky;
  bottom: 0;
  background: ${(props) => props.theme.popupbackgroundColor || "#ffffff"};
  z-index: 10;
  
  @media (max-width: 768px) {
    padding-top: 12px;
  }
`;

export const NavButton = styled.button`
  flex: ${(props) => (props.variant === "primary" ? "1.5" : "1")};
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
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
      background: ${props.theme.categoryUnActive || "#e0e0e0"};
      transform: translateY(-1px);
    }
    
    &:active {
      background: ${props.theme.categoryUnActive || "#f5f5f5"};
      color: ${props.theme.textColor || "#333"};
      transform: translateY(0);
    }
  `}
  
  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 13px;
  }
`;

