import styled from "styled-components";
import { breakingPoints } from "../../../styles/theme";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
`;

export const Header = styled.div`
  background: white;
  border-radius: 16px;
  padding: 22px 26px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
`;

export const HeaderSubtitle = styled.p`
  margin: 8px 0 0 0;
  color: #64748b;
  font-size: 14px;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 18px 20px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.25);
`;

export const StatLabel = styled.span`
  display: block;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 6px;
`;

export const StatValue = styled.span`
  display: block;
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
`;

export const StatMeta = styled.span`
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: #0ea5e9;
`;

export const Section = styled.div`
  background: white;
  border-radius: 16px;
  padding: 22px 26px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
`;

export const SectionTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

export const ResultCard = styled.div`
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 12px;
  padding: 16px;
`;

export const ResultLabel = styled.span`
  display: block;
  font-size: 13px;
  color: #64748b;
`;

export const ResultValue = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  margin-top: 6px;
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
  gap: 12px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: #f8fafc;
  align-items: center;
`;

export const ListMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ListTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
`;

export const ListMeta = styled.span`
  font-size: 12px;
  color: #64748b;
`;

export const Badge = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #0f172a;
  background: rgba(14, 165, 233, 0.15);
  padding: 6px 10px;
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
