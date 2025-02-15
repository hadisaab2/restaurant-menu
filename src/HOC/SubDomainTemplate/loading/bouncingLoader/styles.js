import styled, { keyframes } from "styled-components";

// Keyframes for the bouncing effect
const bouncingLoader = keyframes`
  to {
    opacity: 0.1;
    transform: translateY(-10px);
  }
`;

// Wrapper for centering the loader
export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerView = keyframes`
  0% {
    /* max-width: 0px;
    max-height: 0px; */
    opacity: 0;
  }
  100%{
    /* max-width: 400px;
    max-width: 400px; */
    opacity: 1;
  }

`;

// Container for the bouncing dots
export const BouncingLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -40px;
  animation: ${ContainerView} 0.8s ease-in-out;

`;

// Individual bouncing dots
export const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 3px 6px;
  border-radius: 50%;
  background-color:rgb(255, 255, 255);
  opacity: 1;
  animation: ${bouncingLoader} 0.6s infinite alternate;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
