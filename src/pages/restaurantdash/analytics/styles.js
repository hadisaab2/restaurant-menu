import styled from "styled-components";
import { breakingPoints } from "../../../styles/theme";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 40px;
`;

export const Header = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
`;

export const ExportButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`;

export const FiltersContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: ${breakingPoints.md}px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 150px;
  flex: 1;

  @media (max-width: ${breakingPoints.md}px) {
    min-width: 100%;
  }
`;

export const FilterLabel = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: #475569;
`;

export const FilterSelect = styled.select`
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const FilterInput = styled.input`
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const CompareToggle = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

export const KPICards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;

export const KPICard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(15, 23, 42, 0.1);
  }
`;

export const KPILabel = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const KPIValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #0f172a;
`;

export const KPIChange = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.$color || "#666"};
`;

export const TrendsSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

export const SectionTitle = styled.h3`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
`;

export const ChartContainer = styled.div`
  min-height: 300px;
`;

export const EmptyState = styled.div`
  padding: 40px;
  text-align: center;
  color: #64748b;
  font-size: 14px;
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

export const TabsContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 0;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  margin-bottom: 20px;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 0;
  border-bottom: 1px solid #e2e8f0;
  overflow-x: auto;
`;

export const Tab = styled.button`
  padding: 16px 24px;
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.$active ? "#3b82f6" : "#64748b")};
  cursor: pointer;
  border-bottom: 2px solid ${(props) => (props.$active ? "#3b82f6" : "transparent")};
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    color: #3b82f6;
    background: #f8fafc;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background: #f8fafc;
`;

export const TableHeaderCell = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8fafc;
  }
`;

export const TableCell = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: #334155;
`;

export const FunnelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FunnelStep = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
`;

export const FunnelStepLabel = styled.div`
  min-width: 150px;
  font-weight: 600;
  color: #0f172a;
`;

export const FunnelStepBar = styled.div`
  flex: 1;
  height: 40px;
  background: #e2e8f0;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
`;

export const FunnelStepFill = styled.div`
  height: 100%;
  background: ${(props) => props.$color || "#3b82f6"};
  width: ${(props) => props.$percentage || 0}%;
  transition: width 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  color: white;
  font-weight: 600;
  font-size: 12px;
`;

export const InsightCard = styled.div`
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid
    ${(props) => {
      if (props.$type === "warning") return "#ef4444";
      if (props.$type === "info") return "#3b82f6";
      return "#10b981";
    }};
  background: ${(props) => {
    if (props.$type === "warning") return "#fef2f2";
    if (props.$type === "info") return "#eff6ff";
    return "#f0fdf4";
  }};
  margin-bottom: 12px;
`;

export const InsightTitle = styled.div`
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const InsightMessage = styled.div`
  color: #475569;
  font-size: 13px;
  margin-bottom: 8px;
`;

export const InsightSuggestion = styled.div`
  color: #64748b;
  font-size: 12px;
  font-style: italic;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ChartTitle = styled.h3`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 20px;
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.1);
  }
`;
