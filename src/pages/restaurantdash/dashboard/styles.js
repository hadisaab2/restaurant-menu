import styled from "styled-components";
import { breakingPoints } from "../../../styles/theme";

export const Wrapper = styled.div`
  width: 90%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Hero = styled.div`
  border-radius: 16px;
  padding: 20px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  color: #f8fafc;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.2);
`;

export const HeroTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
`;

export const HeroSubtitle = styled.p`
  margin: 8px 0 0 0;
  opacity: 0.9;
  font-size: 14px;
`;

export const MetaRow = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.14);
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
`;

export const StatLabel = styled.div`
  font-size: 12px;
  color: #64748b;
`;

export const StatValue = styled.div`
  margin-top: 4px;
  font-size: 26px;
  line-height: 1.1;
  font-weight: 700;
  color: #0f172a;
`;

export const ActionsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ActionButton = styled.button`
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #0f172a;
  border-radius: 12px;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: #94a3b8;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
  }
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 12px;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
`;

export const ChartTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: 650;
  color: #0f172a;
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 38px;
  gap: 10px;
  align-items: center;
`;

export const RowLabel = styled.div`
  font-size: 12px;
  color: #334155;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RowTrack = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: #e2e8f0;
  overflow: hidden;
`;

export const RowFill = styled.div`
  height: 100%;
  border-radius: 999px;
  width: ${(p) => `${p.$width || 0}%`};
  background: linear-gradient(90deg, #0ea5e9 0%, #0284c7 100%);
`;

export const RowValue = styled.div`
  font-size: 12px;
  color: #475569;
  text-align: right;
`;

export const DonutWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`;

export const Donut = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: ${(p) =>
    `conic-gradient(#16a34a 0 ${p.$availableDeg}deg, #ef4444 ${p.$availableDeg}deg 360deg)`};
  position: relative;
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    inset: 18px;
    border-radius: 50%;
    background: #ffffff;
  }
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: #334155;
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  background: ${(p) => p.$color || "#94a3b8"};
`;

export const LeftLegend = styled.span`
  display: inline-flex;
  align-items: center;
`;
