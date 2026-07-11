import styled from "styled-components";

export const ZonesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ZonesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ZoneRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #fff;
  border: 1px solid ${(p) => (p.$active ? "#6d28d9" : "#e5e7eb")};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: #8b5cf6; }
`;

export const ZoneInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ZoneName = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const ZoneMeta = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

export const StatusBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 3px 10px;
  border-radius: 999px;
  background: ${(p) =>
    p.$status === "active" ? "#dcfce7" :
    p.$status === "draft" ? "#fef3c7" : "#f3f4f6"};
  color: ${(p) =>
    p.$status === "active" ? "#166534" :
    p.$status === "draft" ? "#92400e" : "#374151"};
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
`;

export const ReadoutBar = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 12px 16px;
  background: #f9fafb;
  border-radius: 8px;
  font-size: 13px;
  flex-wrap: wrap;
`;

export const ReadoutItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  & strong { color: #111827; }
`;

export const WarningText = styled.span`
  color: #dc2626;
  font-weight: 600;
  font-size: 12px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const CostCard = styled.div`
  padding: 16px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.8;
`;

export const GridStatsRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 13px;
  & > div {
    padding: 8px 14px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
  }
`;
