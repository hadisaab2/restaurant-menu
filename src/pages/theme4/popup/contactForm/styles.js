import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const Container = styled.div`
  position: ${(props) => (props.isPage ? "relative" : "fixed")};
  bottom: ${(props) =>
    props.isPage ? "auto" : props.showPopup === "contactForm" ? "0%" : "-100%"};
  left: ${(props) => (props.isPage ? "auto" : "0")};
  right: ${(props) => (props.isPage ? "auto" : "0")};
  min-height: ${(props) => (props.isPage ? "100vh" : "70vh")};
  max-height: ${(props) => (props.isPage ? "none" : "90vh")};
  background-color: ${(props) => props.theme?.popupbackgroundColor || "#ffffff"};
  width: 100%;
  transition: ${(props) => (props.isPage ? "none" : "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)")};
  border-top-right-radius: ${(props) => (props.isPage ? "0" : "60px")};
  border-top-left-radius: ${(props) => (props.isPage ? "0" : "60px")};
  box-shadow: ${(props) =>
    props.isPage ? "none" : "0 -4px 10px rgba(0, 0, 0, 0.2)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
      margin-bottom: 40px;
  padding: 20px;
  padding-top: ${(props) => (props.isPage ? "32px" : "40px")};
  padding-bottom: 40px;
  overflow-y: auto;
  will-change: transform;
`;

export const Close = styled(IoMdClose)`
  font-size: 24px;
  position: fixed;
  top: 24px;
  ${(props) => (props.activeLanguage === "ar" ? "left: 24px;" : "right: 24px;")}
  cursor: pointer;
  color: ${(props) => props.theme?.popupTextColor || "#333333"};
  z-index: 20000;
  pointer-events: auto;
  background: transparent;
  border: none;
  padding: 4px;
  line-height: 1;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  flex-shrink: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    opacity: 0.7;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const Logo = styled.img`
  max-width: 200px;
  max-height: 100px;
  object-fit: contain;
  
  @media (min-width: 768px) {
    max-width: 250px;
    max-height: 120px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
  color: ${(props) => props.theme?.popupTextColor || "#333333"};
  text-align: center;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme?.textColor || "#666666"};
  margin-bottom: 5px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme?.textColor || "#666666"};
  margin-bottom: 5px;
  text-align: center;
  line-height: 1.6;
  max-width: 600px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  
  @media (min-width: 768px) {
    font-size: 15px;
    margin-bottom: 40px;
  }
`;

export const FormContainer = styled.div`
  width: 90%;
  max-width: 500px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: ${(props) => (props.$fullWidth ? "1 1 100%" : "1 1 calc(50% - 6px)")};
  min-width: 0;

  @media (max-width: 280px) {
    flex: 1 1 100%;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  
  @media (max-width: 280px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0px !important;
  color: ${(props) => props.theme?.popupTextColor || "#333333"};
  margin-top: 2px;
  text-align: ${(props) => (props.activeLanguage === "ar" ? "right" : "left")};
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid ${(props) => props.theme?.mainColor || "#007bff"}30;
  border-radius: 8px;
  font-size: 14px;
  background-color: ${(props) => props.theme?.backgroundColor || "#ffffff"};
  color: ${(props) => props.theme?.textColor || "#333333"};
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${(props) => props.theme?.mainColor || "#007bff"};
    box-shadow: 0 0 0 3px ${(props) => props.theme?.mainColor || "#007bff"}15;
  }

  &::placeholder {
    color: ${(props) => props.theme?.textColor || "#666666"}50;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid ${(props) => props.theme?.mainColor || "#007bff"}30;
  border-radius: 8px;
  font-size: 14px;
  background-color: ${(props) => props.theme?.backgroundColor || "#ffffff"};
  color: ${(props) => props.theme?.textColor || "#333333"};
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${(props) => props.theme?.mainColor || "#007bff"};
    box-shadow: 0 0 0 3px ${(props) => props.theme?.mainColor || "#007bff"}15;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid ${(props) => props.theme?.mainColor || "#007bff"}30;
  border-radius: 8px;
  font-size: 14px;
  background-color: ${(props) => props.theme?.backgroundColor || "#ffffff"};
  color: ${(props) => props.theme?.textColor || "#333333"};
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${(props) => props.theme?.mainColor || "#007bff"};
    box-shadow: 0 0 0 3px ${(props) => props.theme?.mainColor || "#007bff"}15;
  }

  &::placeholder {
    color: ${(props) => props.theme?.textColor || "#666666"}50;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => props.theme?.mainColor || "#007bff"};
  color: ${(props) => props.theme?.backgroundColor || "#ffffff"};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 6px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme?.mainColor || "#007bff"}dd;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => props.theme?.mainColor || "#007bff"}40;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 13px;
  margin-top: -8px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const SuccessMessage = styled.div`
  color: #28a745;
  font-size: 14px;
  text-align: center;
  padding: 12px;
  background: #d4edda;
  border-radius: 8px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;


