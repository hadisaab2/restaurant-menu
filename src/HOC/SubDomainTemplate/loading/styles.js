import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    flex-direction: column;
    position: fixed;
    /* background-color: black; */
    background: black;
    overflow: hidden;
    transition: all 0.4s ease-in-out ;
    z-index: 1000;
top: 0;
left:${props=>props.viewLoading?"-100%":"0"};

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
    opacity: 0;
  }
  100%{
    opacity: 1;
  }

`;

export const LogoImage = styled.img`
max-width: 400px;
max-width: 400px;
animation: ${LogoAnimation} 0.8s ease-in-out;


`;


