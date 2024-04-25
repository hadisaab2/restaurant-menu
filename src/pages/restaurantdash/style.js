import styled from "styled-components";
import { breakingPoints } from "../../styles/theme";
import { TbCategoryPlus } from "react-icons/tb";
import { IoPersonCircle } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

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
  @media (max-width: ${breakingPoints.sm}px) {
    display:none;
  }
`;
export const SidebarTop = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
`;
export const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 35px;

  }
`;

export const Tab = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 45px;
  font-size: 16px;
  align-items: center;
  gap: 5px;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #edeeef;
  }
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 25px;
  }
`;
export const TabText = styled.span``;
export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  @media (max-width: ${breakingPoints.sm}px) {
    gap: 20px;
    margin-top: 20px;
  }

`;
export const SidebarBottom = styled.div`
  display: flex;
  height: 10%;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 18px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: black;
  border-top: 1px solid rgb(0, 0, 0, 0.2);

  
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
  @media (max-width: ${breakingPoints.sm}px) {
    padding-left: 0%;
  }
`;
export const Header = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 10px;
  height: 60px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Path = styled.span`
  margin-left: 20px;
  font-weight: 500;
`;
export const CateogoryIcon = styled(TbCategoryPlus)`
  margin-left: 20px;
`;

export const ProfileIcon = styled(IoPersonCircle)`
  font-size: 25px;
  margin-left: 20px;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 30px;

  }
`;

export const CloseIcon = styled(IoMdClose )`
  font-size: 22px;
  position: absolute;
  right: 20px;
  top: 20px;
`;
export const BurgerIcon = styled(RxHamburgerMenu)`
  margin-right: 20px;
  font-size: 17px;
  display:none;
  @media (max-width: ${breakingPoints.sm}px) {
    display:flex;
  }
`;
export const Username = styled.span`
  font-weight: normal;
  font-size: 14px;
  text-transform: capitalize;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 22px;

  }
`;
export const Logout = styled.button`
  width:80px;
  outline: none;
  border:0;
  border-radius: 20px;
  height:50%;
  margin-right: 20px;
  font-size: 15px;
  background-color: #edeeef;
  cursor: pointer;
  @media (max-width: ${breakingPoints.sm}px) {
    display:none;
  }
`;



export const MobileSidebar = styled.div`
  width: 100%;
  position: fixed;
  height: 100vh;
  flex-direction: column;
  background-color: white;
  right: ${props=>props.showMobileSidebar?"0%":"-100%"};
  top: 0;
  display:none;
  transition: all 0.5s ease-in-out;
  z-index: 10;

  @media (max-width: ${breakingPoints.sm}px) {
    display: flex;
  }
`;

export const MobileSidebarTop = styled.div`
  width: 100%;
  position: fixed;
  height: 100vh;
  flex-direction: column;
  background-color: white;
  right: ${props=>props.showMobileSidebar?"0%":"-100%"};
  top: 0;
  display:none;
  transition: all 0.5s ease-in-out;
  z-index: 10;

 
`;