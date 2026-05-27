import styled, { keyframes, css } from 'styled-components';

const slideOut = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-20px); opacity: 0; visibility: hidden; }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.bg || '#0a0a0a'};
  overflow: hidden;
  z-index: 10000;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  ${props => props.viewLoading ? css`
    animation: ${slideOut} 0.5s ease forwards;
    pointer-events: none;
  ` : ''}
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  color: white;
`;

export const Logo = styled.img`
  width: 250px;
  height: 80px;
`;

const logoFadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.85); }
  100% { opacity: 1; transform: scale(1); }
`;

export const LogoImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  animation: ${logoFadeIn} 0.8s ease-out;
`;
