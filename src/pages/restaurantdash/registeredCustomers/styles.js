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
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
`;

export const Table = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  overflow-x: auto;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr 80px 140px 120px;
  gap: 12px;
  padding: 12px 16px;
  background: #f8fafc;
  border-bottom: 2px solid #e2e8f0;
  font-weight: 600;
  font-size: 13px;
  color: #475569;
  @media (max-width: ${breakingPoints.md}px) {
    display: none;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr 80px 140px 120px;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 14px;
  align-items: center;
  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

export const TableCell = styled.div`
  word-break: break-word;
`;

export const ViewButton = styled.button`
  padding: 6px 12px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    background: #2563eb;
  }
`;

export const EmptyState = styled.div`
  padding: 40px;
  text-align: center;
  color: #64748b;
  background: white;
  border-radius: 12px;
`;

export const LoadingState = styled.div`
  padding: 40px;
  text-align: center;
  color: #64748b;
`;

export const ErrorState = styled.div`
  padding: 12px 16px;
  background: #fef2f2;
  color: #b91c1c;
  border-radius: 8px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px;
  max-width: 720px;
  width: 92%;
  max-height: 85vh;
  overflow: auto;
  z-index: 1001;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
  color: #64748b;
`;

export const ModalBody = styled.div`
  padding: 16px 20px;
`;

export const DetailRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
`;

export const DetailLabel = styled.span`
  font-weight: 600;
  color: #475569;
  min-width: 80px;
`;

export const DetailValue = styled.span`
  color: #0f172a;
`;
