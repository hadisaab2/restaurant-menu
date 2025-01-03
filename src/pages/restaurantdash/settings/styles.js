import styled from "styled-components";
import { breakingPoints } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  flex-direction: column;
  background-color: white;
  margin-top:20px;
  min-height:100vh;
  
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:20px;
  gap:20px;
  margin-left: 20px;

`;

export const Tab = styled.span`
font-size: 18px;
font-weight:500;
color:${props=>props.tab==props.activetab?"black":"lightgray"};
cursor: pointer;
@media (max-width: ${breakingPoints.sm}px) {
  font-size: 14px;

  }
`;

