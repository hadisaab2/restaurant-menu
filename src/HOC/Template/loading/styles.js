import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    flex-direction: column;
    /* background-color: black; */
    background: black;

`;

export const Text = styled.span`
font-size: 16px;
font-weight: 400;
margin-top: 10px;
color:white;
/* color:#f4c257; */


`;
export const Logo = styled.img`
width: 250px;
height: 80px;

`;

const LogoAnimation = keyframes`
  0% {
    max-width: 0px;
    max-height: 0px;
    opacity: 0;
  }
  100%{
    max-width: 400px;
    max-width: 400px;
    opacity: 1;
  }

`;

export const LogoImage = styled.img`
max-width: 400px;
max-width: 400px;
animation: ${LogoAnimation} 0.8s ease-in-out;


`;


