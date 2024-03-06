import styled from "styled-components";
import { breakingPoints } from "../../styles/theme";
import { TbCategoryPlus } from "react-icons/tb";
import { IoPersonCircle } from "react-icons/io5";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edeeef;

`;

export const Sidebar = styled.div`
  width: 15%;
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  left: 0;
  top: 0;
`;
export const SidebarTop = styled.div`
height: 20%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 border-bottom: 1px solid rgb(0,0,0,0.2);

`;
export const Title = styled.span`
font-size:25px;
font-weight: bold;
`;

export const Tab= styled.div`
display: flex;
width: 100%;
flex-direction:row;
height: 45px;
font-size:16px;
align-items: center;
gap:5px;
color: black;
cursor: pointer;
&:hover{
    background-color:#edeeef;
}
`;
export const TabText= styled.span`
`;
export const SidebarContent= styled.div`
display: flex;
flex-direction: column;
gap:10px;
width: 100%;
`;
export const SidebarBottom= styled.div`
display: flex;
height: 10%;
position: absolute;
bottom: 0;
width: 100%;
font-size: 18px;
flex-direction: row;
align-items: center;
gap:10px;
color: black;
border-top: 1px solid rgb(0,0,0,0.2);

`;
export const Content = styled.div`
  padding-left: 15%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-bottom: 60px;
  justify-content: flex-start;
`;
export const Header = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 10px;
  height: 60px;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
export const Path = styled.span`
margin-left:20px;
font-weight: 500;
  
`;
export const CateogoryIcon =styled(TbCategoryPlus)`
margin-left: 20px;
`;

export const ProfileIcon =styled(IoPersonCircle)`
font-size: 25px;
margin-left: 20px;
`;

export const Username= styled.span`
font-weight: normal;
font-size: 14px;

`;
