import styled from "styled-components";
import { breakingPoints } from "../../../styles/theme";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`;

export const Header = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
`;

export const SearchContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export const CustomersTable = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  overflow-x: auto;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px 80px 100px 80px 150px 100px;
  gap: 12px;
  padding: 12px 16px;
  background: #f8fafc;
  border-bottom: 2px solid #e2e8f0;
  font-weight: 600;
  font-size: 13px;
  color: #475569;

  @media (max-width: ${breakingPoints.lg}px) {
    grid-template-columns: 120px 120px 120px 60px 80px 60px 120px 80px;
    font-size: 12px;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px 80px 100px 80px 150px 100px;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid #e2e8f0;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8fafc;
  }

  @media (max-width: ${breakingPoints.lg}px) {
    grid-template-columns: 120px 120px 120px 60px 80px 60px 120px 80px;
    font-size: 12px;
  }
`;

export const TableCell = styled.div`
  font-size: 14px;
  color: #334155;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PhoneCell = styled(TableCell)`
  font-weight: 600;
  color: #1e293b;
  font-family: monospace;
`;

export const NameCell = styled(TableCell)`
  font-weight: 500;
`;

export const SourcesCell = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

export const SourceBadge = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;
  background-color: ${(props) => {
    switch (props.$source) {
      case "order":
        return "#dbeafe";
      case "feedback":
        return "#fef3c7";
      case "thread":
        return "#e0e7ff";
      default:
        return "#f1f5f9";
    }
  }};
  color: ${(props) => {
    switch (props.$source) {
      case "order":
        return "#1e40af";
      case "feedback":
        return "#92400e";
      case "thread":
        return "#3730a3";
      default:
        return "#475569";
    }
  }};
`;

export const ChatButton = styled.button`
  padding: 6px 12px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const EmptyState = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  color: #64748b;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

export const LoadingState = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  color: #64748b;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

export const ErrorState = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  color: #ef4444;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

// Chat Modal Styles
export const ChatModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
  position: relative;
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 900px;
  height: 80vh;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  z-index: 1;

  @media (max-width: ${breakingPoints.md}px) {
    width: 95%;
    height: 90vh;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #0f172a;
  }
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #64748b;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    color: #0f172a;
  }
`;

export const ModalBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ThreadList = styled.div`
  width: 250px;
  border-right: 1px solid #e2e8f0;
  padding: 16px;
  overflow-y: auto;
  background: #f8fafc;

  @media (max-width: ${breakingPoints.md}px) {
    width: 200px;
  }
`;

export const ThreadItem = styled.div`
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${(props) => (props.$active ? "#dbeafe" : "white")};
  border: 1px solid
    ${(props) => (props.$active ? "#3b82f6" : "transparent")};

  &:hover {
    background: ${(props) => (props.$active ? "#dbeafe" : "#f1f5f9")};
  }
`;

export const ThreadTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ThreadDate = styled.div`
  font-size: 11px;
  color: #64748b;
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MessageBubble = styled.div`
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 12px;
  align-self: ${(props) => (props.$isOwner ? "flex-end" : "flex-start")};
  background: ${(props) => (props.$isOwner ? "#3b82f6" : "#f1f5f9")};
  color: ${(props) => (props.$isOwner ? "white" : "#0f172a")};
`;

export const MessageText = styled.div`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 4px;
`;

export const MessageTime = styled.div`
  font-size: 11px;
  opacity: 0.7;
  text-align: right;
`;

export const MessageInput = styled.textarea`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  resize: none;
  min-height: 40px;
  max-height: 120px;
  font-family: inherit;

  &:focus {
    border-color: #3b82f6;
  }

  &:disabled {
    background: #f1f5f9;
    cursor: not-allowed;
  }
`;

export const SendButton = styled.button`
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #2563eb;
  }

  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
  }
`;
