import styled from "styled-components";
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
  min-height: 100vh;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;

  gap: 20px;
  width: 30%;
`;
export const Category = styled.div`
width:100%;
height:30px;
background-color:#edeeef;
border-radius: 4px;
display: flex;
align-items: center;
justify-content:space-between;
padding:10px;
`;

export const AddCategory = styled.button`
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

export const Delete = styled(MdDelete)`
cursor: pointer;
&:hover{
    color:turquoise;
}

`;
export const Edit = styled(MdModeEditOutline)`
cursor: pointer;
&:hover{
    color:turquoise;
}

`;

export const BackIcon = styled(MdOutlineKeyboardBackspace)`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
`;
export const Actions = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
gap:5px;
`;

export const AddCategoryForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
  gap:20px;
  margin-top:30px;
  margin-left: 20px;
  position: relative;
  padding-top: 40px;
`;


