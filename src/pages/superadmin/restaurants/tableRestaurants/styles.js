import styled from "styled-components";
import { breakingPoints } from "../../../../styles/theme";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const T = {
  accent: "#5eabb1",
  cardBg: "#ffffff",
  cardBorder: "rgba(148,163,184,0.18)",
  textPrimary: "#0f172a",
  textSub: "#64748b",
  shadow: "0 4px 20px rgba(15,23,42,0.07)",
};

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 14px;
  background: ${T.cardBg};
  box-shadow: ${T.shadow};
  border: 1px solid ${T.cardBorder};
`;

export const Table = styled.table`
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 14px 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  color: ${T.textSub};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: #f8fafc;
  border-bottom: 1px solid ${T.cardBorder};
  white-space: nowrap;

  &:first-child {
    border-radius: 14px 0 0 0;
  }
  &:last-child {
    border-radius: 0 14px 0 0;
  }
`;

export const Td = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: ${T.textPrimary};
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
`;

export const Tr = styled.tr`
  background: ${(props) =>
    props.$needRenewal ? "rgba(239, 68, 68, 0.06)" : "transparent"};
  transition: background 0.15s ease;

  &:hover {
    background: ${(props) =>
      props.$needRenewal
        ? "rgba(239, 68, 68, 0.1)"
        : "rgba(94, 171, 177, 0.04)"};
  }

  &:last-child td {
    border-bottom: none;
  }
`;

export const EditDeleteIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Delete = styled(MdDelete)`
  cursor: pointer;
  font-size: 18px;
  color: ${T.textSub};
  padding: 6px;
  border-radius: 8px;
  transition: all 0.15s;

  &:hover {
    color: #ef4444;
    background: rgba(239, 68, 68, 0.08);
  }
`;

export const Edit = styled(MdModeEditOutline)`
  cursor: pointer;
  font-size: 18px;
  color: ${T.textSub};
  padding: 6px;
  border-radius: 8px;
  transition: all 0.15s;

  &:hover {
    color: ${T.accent};
    background: rgba(94, 171, 177, 0.08);
  }
`;
