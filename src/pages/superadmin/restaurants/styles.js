import styled from "styled-components";
import { breakingPoints } from "../../../styles/theme";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const UploadPhoto = styled.input`
  display: none;
`;
export const UploadBtn = styled.div`
   width: 100%;
  height: 150px;
  background-color: transparent;
  border:1px solid  #1976d2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:10px;
  border-radius: 5px;
`;
export const UploadedImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;


`;

export const UploadImageText = styled.p`
  /* align-self: flex-end; */
  margin-left: 20px;
  font-size: 13px;
  color: red;
`;
export const AddRestaurantForm = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
  margin-top:30px;
  margin-left: 20px;
  position: relative;
  padding-top: 40px;
  width: 50%;
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

export const AddRestaurant = styled.button`
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