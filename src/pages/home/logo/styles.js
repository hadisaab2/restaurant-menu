import styled from "styled-components";
import { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 35%;
  /* background-color: #d0cfd0; */
  display: flex;
  align-items: center;
  justify-content: center;
  `;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap:4px;
  position: relative;
  /* box-shadow: 19px 19px 250px 0px ; */

`;

const LetterAnimation = keyframes`
 0% { opacity: 1}
 20% { opacity: 0.8}
 30% { opacity: 0.5}
 40% { opacity: 0.2}
 50% { opacity: 0}
 60% { opacity: 0.3}
 80% { opacity: 0.6}
 100% { opacity: 1}
`



export const Letter = styled.img`
position: absolute;
height: 150px;
width: 400px;
filter: drop-shadow(0px 0px 40px rgba(255, 16, 61));
`
;

export const LetterAnimated = styled.img`
position: absolute;
height: 150px;
width: 400px;
filter: drop-shadow(0px 0px 40px rgba(255, 16, 61));
animation:${LetterAnimation} 0.2s ease-in-out;
`;
