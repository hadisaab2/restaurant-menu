import styled from "styled-components";

export const Container = styled.div`
/* width: 100%; */
flex-direction: row;
height: 80vh;
position: relative;
overflow: hidden;
display: ${props=>props.activeCategory==0 ?"none":"flex"};

`;
