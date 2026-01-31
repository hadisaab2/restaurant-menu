import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";

export const Container = styled.div`
  position: ${(props) => (props.isPage ? "relative" : "fixed")};
  bottom: ${(props) =>
    props.isPage ? "auto" : props.showPopup === "feedback" ? "0px" : "-100%"};
  min-height: ${(props) => (props.isPage ? "100vh" : "60vh")};
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
  padding: 16px;
  padding-top: ${(props) => (props.isPage ? "24px" : "60px")};
  padding-bottom: 24px;
  overflow-y: auto;
  margin-top: ${(props) => (props.isPage ? "0" : "5vh")};
  
  @media (max-width: 768px) {
    margin-top: ${(props) => (props.isPage ? "0" : "3vh")};
    padding-top: ${(props) => (props.isPage ? "20px" : "50px")};
    padding: 14px;
    padding-bottom: 20px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const Close = styled(IoMdClose)`
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => props.theme?.popupTextColor || "#333333"};
  flex-shrink: 0;
  margin-${props => props.activeLanguage === "ar" ? "left" : "right"}: auto;

  &:hover {
    opacity: 0.7;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.theme?.popupTextColor || "#333333"};
  text-align: center;
  flex: 1;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const FormContainer = styled.form`
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme?.popupTextColor || "#333333"};
  margin-top: 2px;
  text-align: ${(props) => (props.activeLanguage === "ar" ? "right" : "left")};
`;

export const StarContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: ${(props) => (props.activeLanguage === "ar" ? "flex-end" : "flex-start")};
  margin-bottom: 6px;
`;

export const Star = styled.div`
  font-size: 32px;
  color: ${(props) =>
    props.active
      ? props.theme?.mainColor || "#ffc107"
      : "#e0e0e0"};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    filter: ${(props) => (props.active ? "drop-shadow(0 0 3px rgba(255, 193, 7, 0.5))" : "none")};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid ${(props) => props.theme?.mainColor || "#007bff"}30;
  border-radius: 8px;
  font-size: 14px;
  background-color: ${(props) => props.theme?.backgroundColor || "#ffffff"};
  color: ${(props) => props.theme?.textColor || "#333333"};
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

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid ${(props) => props.theme?.mainColor || "#007bff"}30;
  border-radius: 8px;
  font-size: 14px;
  background-color: ${(props) => props.theme?.backgroundColor || "#ffffff"};
  color: ${(props) => props.theme?.textColor || "#333333"};
  outline: none;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
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
  margin-top: 6px;
  background-color: ${(props) => props.theme?.mainColor || "#007bff"};
  color: ${(props) => props.theme?.backgroundColor || "#ffffff"};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme?.mainColor || "#007bff"}dd;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => props.theme?.mainColor || "#007bff"}40;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 14px;
  padding: 10px;
  background-color: #f8d7da;
  border-radius: 6px;
  text-align: center;
`;

export const SuccessMessage = styled.div`
  color: #28a745;
  font-size: 14px;
  padding: 10px;
  background-color: #d4edda;
  border-radius: 6px;
  text-align: center;
`;

