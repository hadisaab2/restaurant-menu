import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 padding-bottom: 20px;
 display: flex;
 justify-content: center;
 background-color: ${props => props.theme.backgroundColor || "#f8f9fa"};
`;

export const ProductWrapper = styled.div`
 flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: 70vh;
  opacity: 1;
  transition:all 0.7s ease-in-out;
`;

