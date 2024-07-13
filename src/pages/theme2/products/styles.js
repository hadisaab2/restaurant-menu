import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 margin-top: 30px;
 padding-bottom: 20px;
 display: flex;
 justify-content: center;
`;

export const ProductWrapper = styled.div`
 flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  /* opacity:${props=>props.activePlate!==null?"0":"1"}; */
  opacity: 1;
  transition:all 0.7s ease-in-out;
`;

