import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: ${props => props.theme.categoryUnActive || "#ffffff"};
  border-radius: 20px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  ${props => props.activeLanguage === "ar" ? "left: 16px;" : "right: 16px;"}
  background: transparent;
  border: none;
  font-size: 32px;
  color: #999;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f0f0f0;
    color: #333;
    transform: rotate(90deg);
  }
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.textColor || "#1a1a1a"};
  margin: 0 0 24px 0;
  text-align: center;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.textColor || "#333"};
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.3s ease;
  background: ${props => props.theme.backgroundColor || "#ffffff"};
  color: ${props => props.theme.textColor || "#1a1a1a"};
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.mainColor || "#007bff"};
    box-shadow: 0 0 0 3px ${props => props.theme.mainColor ? `${props.theme.mainColor}15` : "rgba(0, 123, 255, 0.15)"};
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.3s ease;
  resize: vertical;
  font-family: inherit;
  background: ${props => props.theme.backgroundColor || "#ffffff"};
  color: ${props => props.theme.textColor || "#1a1a1a"};
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.mainColor || "#007bff"};
    box-shadow: 0 0 0 3px ${props => props.theme.mainColor ? `${props.theme.mainColor}15` : "rgba(0, 123, 255, 0.15)"};
  }
`;

export const SubmitButton = styled.button`
  padding: 14px 32px;
  background: ${props => props.theme.mainColor || "#007bff"};
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  margin-top: 8px;
  
  &:hover:not(:disabled) {
    background: ${props => props.theme.mainColor || "#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.theme.mainColor ? `${props.theme.mainColor}40` : "rgba(0, 123, 255, 0.4)"};
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: -4px;
`;

