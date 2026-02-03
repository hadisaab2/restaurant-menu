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

export const HeaderSubtitle = styled.p`
  margin: 6px 0 0 0;
  color: #64748b;
  font-size: 12px;
`;

export const CardsGrid = styled.div`
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
  background: white;
  border-radius: 12px;
  padding: 14px 16px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(148, 163, 184, 0.25);
`;

export const StatLabel = styled.span`
  display: block;
  font-size: 11px;
  color: #64748b;
  margin-bottom: 4px;
`;

export const StatValue = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
`;

export const StatMeta = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 11px;
  color: #0ea5e9;
`;

export const Section = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

export const SectionTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

export const ResultCard = styled.div`
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 10px;
  padding: 12px;
`;

export const ResultLabel = styled.span`
  display: block;
  font-size: 11px;
  color: #64748b;
`;

export const ResultValue = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin-top: 4px;
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(148, 163, 184, 0.2);
  border-radius: 999px;
  margin-top: 12px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  border-radius: 999px;
  transition: width 0.3s ease;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: #f8fafc;
  align-items: center;
`;

export const ListMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ListTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`;

export const ListMeta = styled.span`
  font-size: 11px;
  color: #64748b;
`;

export const Badge = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: #0f172a;
  background: rgba(14, 165, 233, 0.15);
  padding: 4px 8px;
  border-radius: 999px;
`;

export const ListEmpty = styled.div`
  font-size: 13px;
  color: #94a3b8;
  padding: 12px 0;
`;

export const ErrorText = styled.div`
  color: #ef4444;
  font-size: 13px;
  margin-bottom: 10px;
`;

export const SkeletonText = styled.div`
  height: 14px;
  border-radius: 6px;
  background: rgba(148, 163, 184, 0.2);
  margin-bottom: 10px;
`;
