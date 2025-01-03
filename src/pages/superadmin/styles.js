import styled from "styled-components";
import { breakingPoints } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TabsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap:10px;
  margin-left: 20px;
`;

export const Tab = styled.div`
font-size: 20px;
color:${props=>props.activeTab==props.tab?"black":"lightgray"};
font-weight: 500;
`;