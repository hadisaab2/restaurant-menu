import styled from "styled-components";

export const LocationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LocationButton = styled.button`
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid
    ${(props) =>
      props.variant === "current"
        ? props.theme.mainColor || props.theme.maincolor || "#007bff"
        : props.theme.borderColor || "rgba(0, 0, 0, 0.1)"};
  background: ${(props) =>
    props.variant === "current"
      ? props.theme.mainColor || props.theme.maincolor || "#007bff"
      : props.theme.categoryUnActive || "#ffffff"};
  color: ${(props) =>
    props.variant === "current"
      ? "#ffffff"
      : props.theme.popupTextColor || "#00112b"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  outline: none;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px
      ${(props) =>
        props.variant === "current"
          ? "rgba(0, 123, 255, 0.3)"
          : "rgba(0, 0, 0, 0.1)"};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    font-size: 18px;
  }
`;

export const LocationDisplay = styled.div`
  padding: 16px;
  background: ${(props) => props.theme.categoryUnActive || "#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderColor || "rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LocationText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
`;

export const LocationCoordinates = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.popupTextColor || "#666"};
  word-break: break-all;
`;

export const MapLink = styled.a`
  font-size: 14px;
  color: ${(props) => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  text-decoration: none;
  font-weight: 600;
  margin-top: 4px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 13px;
  margin-top: -8px;
`;

