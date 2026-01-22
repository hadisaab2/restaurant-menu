import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const Container = styled.div`
  position: ${(props) => (props.isPage ? "relative" : "fixed")};
  bottom: ${(props) =>
    props.isPage ? "auto" : props.showPopup === "contactForm" ? "0px" : "-100%"};
  min-height: ${(props) => (props.isPage ? "100vh" : "70vh")};
  max-height: ${(props) => (props.isPage ? "none" : "90vh")};
  background-color: ${(props) => props.theme?.popupbackgroundColor || "#ffffff"};
  width: 100%;
  transition: ${(props) => (props.isPage ? "none" : "all 0.8s ease-in-out")};
  border-top-right-radius: ${(props) => (props.isPage ? "0" : "60px")};
  border-top-left-radius: ${(props) => (props.isPage ? "0" : "60px")};
  box-shadow: ${(props) =>
    props.isPage ? "none" : "0 -4px 10px rgba(0, 0, 0, 0.2)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  padding-top: ${(props) => (props.isPage ? "32px" : "40px")};
  padding-bottom: 40px;
  overflow-y: auto;
`;

export const Close = styled(IoMdClose)`
  font-size: 24px;
  position: absolute;
  top: 30px;
  ${(props) => (props.activeLanguage === "ar" ? "left: 20px;" : "right: 20px;")}
  cursor: pointer;
  color: ${(props) => props.theme?.popupTextColor || "#333333"};
  z-index: 10;

  &:hover {
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
  margin-bottom: 10px;
  color: ${(props) => props.theme?.popupTextColor || "#333333"};
  text-align: center;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme?.textColor || "#666666"};
  margin-bottom: 15px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme?.textColor || "#666666"};
  margin-bottom: 30px;
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
  max-width: 600px;
  background: ${(props) => props.theme?.backgroundColor || "#f8f9fa"};
  border-radius: 12px;
  padding: 30px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  
  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme?.textColor || "#333333"};
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${(props) => props.theme?.borderColor || "rgba(0, 0, 0, 0.1)"};
  border-radius: 8px;
  font-size: 15px;
  background: #ffffff;
  color: ${(props) => props.theme?.textColor || "#333333"};
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme?.mainColor || "#007bff"};
    box-shadow: 0 0 0 3px ${(props) => props.theme?.mainColor ? `${props.theme.mainColor}20` : "rgba(0, 123, 255, 0.2)"};
  }

  &::placeholder {
    color: ${(props) => props.theme?.textColor || "#999999"};
    opacity: 0.6;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${(props) => props.theme?.borderColor || "rgba(0, 0, 0, 0.1)"};
  border-radius: 8px;
  font-size: 15px;
  background: #ffffff;
  color: ${(props) => props.theme?.textColor || "#333333"};
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme?.mainColor || "#007bff"};
    box-shadow: 0 0 0 3px ${(props) => props.theme?.mainColor ? `${props.theme.mainColor}20` : "rgba(0, 123, 255, 0.2)"};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${(props) => props.theme?.borderColor || "rgba(0, 0, 0, 0.1)"};
  border-radius: 8px;
  font-size: 15px;
  background: #ffffff;
  color: ${(props) => props.theme?.textColor || "#333333"};
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme?.mainColor || "#007bff"};
    box-shadow: 0 0 0 3px ${(props) => props.theme?.mainColor ? `${props.theme.mainColor}20` : "rgba(0, 123, 255, 0.2)"};
  }

  &::placeholder {
    color: ${(props) => props.theme?.textColor || "#999999"};
    opacity: 0.6;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: ${(props) => props.theme?.mainColor || "#007bff"};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme?.mainColor || "#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => props.theme?.mainColor ? `${props.theme.mainColor}40` : "rgba(0, 123, 255, 0.4)"};
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


