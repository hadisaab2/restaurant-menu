import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
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

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 16px;
  border: 2px solid
    ${(props) =>
      props.hasError
        ? "#ff4444"
        : props.theme.borderColor || "rgba(0, 0, 0, 0.1)"};
  background-color: ${(props) => props.theme.categoryUnActive || "#ffffff"};
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: ${(props) =>
      props.hasError
        ? "#ff4444"
        : props.theme.mainColor || props.theme.maincolor || "#007bff"};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.hasError
          ? "rgba(255, 68, 68, 0.1)"
          : props.theme.mainColor
          ? `${props.theme.mainColor}20`
          : "rgba(0, 123, 255, 0.1)"};
  }

  &::placeholder {
    color: ${(props) => props.theme.popupTextColor || "#999"};
    opacity: 0.6;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 16px;
  border: 2px solid
    ${(props) =>
      props.hasError
        ? "#ff4444"
        : props.theme.borderColor || "rgba(0, 0, 0, 0.1)"};
  background-color: ${(props) => props.theme.categoryUnActive || "#ffffff"};
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
  transition: all 0.2s ease;
  outline: none;
  resize: vertical;
  font-family: inherit;

  &:focus {
    border-color: ${(props) =>
      props.hasError
        ? "#ff4444"
        : props.theme.mainColor || props.theme.maincolor || "#007bff"};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.hasError
          ? "rgba(255, 68, 68, 0.1)"
          : props.theme.mainColor
          ? `${props.theme.mainColor}20`
          : "rgba(0, 123, 255, 0.1)"};
  }

  &::placeholder {
    color: ${(props) => props.theme.popupTextColor || "#999"};
    opacity: 0.6;
  }
`;

export const Error = styled.span`
  color: #ff4444;
  font-size: 13px;
  display: block;
`;

