import styled from "styled-components";

export const PipelineContainer = styled.div`
  padding: 0 8px;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 8px;
`;

export const StepperCard = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 16px;
  border: 1px solid #e2e8f0;
`;

export const GridContainer = styled.div`
  overflow-x: auto;
  margin-top: 8px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
`;

export const Th = styled.th`
  padding: 10px 8px;
  text-align: left;
  border-bottom: 2px solid #e2e8f0;
  font-size: 11px;
  font-weight: 700;
  color: #475569;
  white-space: nowrap;
  cursor: ${(p) => (p.$sortable ? "pointer" : "default")};
  user-select: none;
  &:hover {
    ${(p) => p.$sortable && "color: #1e293b;"}
  }
`;

export const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: middle;
`;

export const Tr = styled.tr`
  &:nth-child(even) { background: #f8fafc; }
  &:hover { background: #f1f5f9; }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 10px;
  font-weight: 600;
  white-space: nowrap;
  background: ${(p) => p.$bg || "#f1f5f9"};
  color: ${(p) => p.$color || "#64748b"};
`;

export const ActionBtn = styled.button`
  padding: 4px 10px;
  border-radius: 6px;
  border: none;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  background: ${(p) => p.$bg || "#f1f5f9"};
  color: ${(p) => p.$color || "#475569"};
  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export const LinkChip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 10px;
  margin-right: 3px;
  background: ${(p) => p.$bg || "#f1f5f9"};
  color: ${(p) => p.$color || "#64748b"};
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

export const SearchInput = styled.input`
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 12px;
  min-width: 180px;
  &:focus { outline: none; border-color: #8b5cf6; }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  font-size: 12px;
  color: #64748b;
`;
