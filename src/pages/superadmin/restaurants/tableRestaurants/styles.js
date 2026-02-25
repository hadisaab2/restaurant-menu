import styled from "styled-components";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-top: 30px;
  margin-left: 20px;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Tr = styled.tr`
  background: ${(props) => (props.$needRenewal ? "rgba(255, 200, 200, 0.4)" : "transparent")};
`;

export const EditDeleteIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Delete = styled(MdDelete)`
  cursor: pointer;
  &:hover {
    color: turquoise;
  }
`;
export const Edit = styled(MdModeEditOutline)`
  cursor: pointer;
  &:hover {
    color: turquoise;
  }
`;