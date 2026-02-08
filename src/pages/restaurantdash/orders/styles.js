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

export const FiltersContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
  
  @media (max-width: ${breakingPoints.md}px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const DateLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: #475569;
  min-width: 150px;
  
  @media (max-width: ${breakingPoints.md}px) {
    min-width: 100%;
  }
`;

export const DateInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: #3b82f6;
  }
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: #3b82f6;
  }
`;

export const OrdersTable = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  overflow-x: auto;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 80px 150px 120px 120px 100px 80px 100px 100px 80px;
  gap: 12px;
  padding: 12px 16px;
  background: #f8fafc;
  border-bottom: 2px solid #e2e8f0;
  font-weight: 600;
  font-size: 13px;
  color: #475569;
  
  @media (max-width: ${breakingPoints.lg}px) {
    grid-template-columns: 60px 120px 100px 100px 80px 60px 80px 80px 60px;
    font-size: 12px;
    padding: 10px 12px;
  }
  
  @media (max-width: ${breakingPoints.md}px) {
    display: none;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 80px 150px 120px 120px 100px 80px 100px 100px 80px;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
  align-items: center;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f8fafc;
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${breakingPoints.lg}px) {
    grid-template-columns: 60px 120px 100px 100px 80px 60px 80px 80px 60px;
    font-size: 12px;
    padding: 10px 12px;
  }
  
  @media (max-width: ${breakingPoints.md}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 16px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 12px;
  }
`;

export const TableCell = styled.div`
  font-size: 14px;
  color: #0f172a;
  
  @media (max-width: ${breakingPoints.md}px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    &::before {
      content: attr(data-label);
      font-weight: 600;
      color: #64748b;
      margin-right: 12px;
    }
  }
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  background-color: ${props => props.$color}20;
  color: ${props => props.$color};
  border: 1px solid ${props => props.$color}40;
`;

export const ViewButton = styled.button`
  padding: 6px 12px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #2563eb;
  }
  
  &:active {
    background: #1d4ed8;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #64748b;
  font-size: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

export const LoadingState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #64748b;
  font-size: 16px;
`;

export const ErrorState = styled.div`
  padding: 12px 16px;
  background: #fee2e2;
  color: #dc2626;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const OrderDetailsModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
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
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  z-index: 1001;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e2e8f0;
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
  transition: background-color 0.2s;
  
  &:hover {
    background: #f1f5f9;
  }
`;

export const ModalBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DetailRow = styled.div`
  display: flex;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const DetailLabel = styled.div`
  font-weight: 600;
  color: #475569;
  min-width: 140px;
  font-size: 14px;
`;

export const DetailValue = styled.div`
  flex: 1;
  color: #0f172a;
  font-size: 14px;
  word-break: break-word;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: #f8fafc;
  border-radius: 8px;
  gap: 12px;
`;

export const ItemName = styled.div`
  flex: 1;
  font-weight: 500;
  color: #0f172a;
  font-size: 14px;
`;

export const ItemQuantity = styled.div`
  color: #64748b;
  font-size: 13px;
  min-width: 60px;
  text-align: center;
`;

export const ItemPrice = styled.div`
  font-weight: 600;
  color: #0f172a;
  font-size: 14px;
  min-width: 100px;
  text-align: right;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  margin-top: 8px;
  border-top: 2px solid #e2e8f0;
`;
