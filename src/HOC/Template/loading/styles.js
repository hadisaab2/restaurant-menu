import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    flex-direction: column;
    gap:20px
`;

export const Text = styled.span`
font-size: 18px;
font-weight: bold;

`;
export const Logo = styled.img`
width: 120px;
height: 40px;
position: absolute;
left: 20px;
top:20px
`;

