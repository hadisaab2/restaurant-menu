import styled from "styled-components";
import { breakingPoints } from "../../../../styles/theme";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  flex-direction: column;
  background-color: white;
  margin-top: 20px;
  min-height: 60vh;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-top: 60px;
  margin-left: 20px;
`;
export const AddMediaForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  margin-left: 20px;
  padding-top: 40px;
  position: relative;
`;

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

export const BackIcon = styled(MdOutlineKeyboardBackspace)`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
`;

export const AddMedia = styled.button`
  width: 150px;
  height: 40px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  background-color: turquoise;
  margin-top: 20px;
  font-weight: 500;
  font-size: 14px;
  margin-left: 20px;
`;
