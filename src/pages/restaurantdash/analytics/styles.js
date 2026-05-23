import styled from "styled-components";
import { breakingPoints } from "../../../styles/theme";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 40px;
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    max-width: 100%;
    gap: 14px;
    margin-top: 14px;
  }
`;

export const Header = styled.div`
  background: linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  border-radius: 14px;
  padding: 24px 28px;
  box-shadow: 0 8px 24px rgba(10, 15, 40, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(94,171,177,0.18) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 18px 14px;
    border-radius: 10px;
  }
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(120deg, #ffffff, #5eabb1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 20px;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (max-width: ${breakingPoints.sm}px) {
    gap: 8px;
    margin-top: 12px;
  }
`;

export const ExportButton = styled.button`
  background: #5eabb1;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(94, 171, 177, 0.3);
  position: relative;

  &:hover {
    background: #4d9aa0;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(94, 171, 177, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: rgba(255,255,255,0.15);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const FiltersContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 14px 12px;
    border-radius: 10px;
  }
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

  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
`;

export const KPICard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(148, 163, 184, 0.12);
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  border-top: 3px solid #5eabb1;

  &:nth-child(2) { border-top-color: #3b82f6; }
  &:nth-child(3) { border-top-color: #10b981; }
  &:nth-child(4) { border-top-color: #8b5cf6; }
  &:nth-child(5) { border-top-color: #f59e0b; }
  &:nth-child(6) { border-top-color: #ec4899; }
  &:nth-child(7) { border-top-color: #ef4444; }
  &:nth-child(8) { border-top-color: #06b6d4; }
  &:nth-child(9) { border-top-color: #84cc16; }
  &:nth-child(10) { border-top-color: #f97316; }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.1);
  }

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 14px 12px;
    border-radius: 10px;
    gap: 4px;
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

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 22px;
  }
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

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 16px 12px;
    border-radius: 10px;
  }
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
  padding: 6px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(148, 163, 184, 0.12);
  margin-bottom: 4px;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 4px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Tab = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: ${(props) => (props.$active ? "600" : "500")};
  color: ${(props) => (props.$active ? "#0f172a" : "#64748b")};
  background: ${(props) => (props.$active ? "rgba(94,171,177,0.15)" : "transparent")};
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  position: relative;

  ${(props) => props.$active && `
    &::after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2.5px;
      background: #5eabb1;
      border-radius: 2px;
    }
  `}

  &:hover {
    color: #0f172a;
    background: ${(props) => (props.$active ? "rgba(94,171,177,0.15)" : "rgba(15,23,42,0.04)")};
  }

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 10px 14px;
    font-size: 12px;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 8px;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 540px;
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

  @media (max-width: ${breakingPoints.sm}px) {
    gap: 10px;
    padding: 12px 10px;
  }
`;

export const FunnelStepLabel = styled.div`
  min-width: 110px;
  max-width: 150px;
  font-weight: 600;
  color: #0f172a;
  font-size: 13px;

  @media (max-width: ${breakingPoints.sm}px) {
    min-width: 80px;
    font-size: 12px;
  }
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
