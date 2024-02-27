import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding-bottom: 40px;
/* justify-content:center */
`;

const OfferAnimationLeft = keyframes`
  0% {
    margin-left: -90px;

  }
  100% {
    margin-left: 0px;
  }
`;
const OfferAnimationRight = keyframes`
  0% {
    margin-right: -90px;

  }
  100% {
    margin-right: 0px;
  }
`;
export const OfferContainer = styled.div`
width: 90%;
margin-top: 20px;
height: 25vh;
border-radius: 10px;
overflow: hidden;
display: flex;
align-items: center;
animation: ${props => props.index % 2 === 0 ? OfferAnimationRight : OfferAnimationLeft} 0.5s ease-in-out;
position: relative;
`;

export const OfferImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
filter: brightness(0.6);
`;

const AnimationTitle = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);

  }
  100% {
    opacity: 1;
    transform: scale(1);

  }
`;
export const TitleContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
gap:3px;
width: 50%;
left:${props=>props.index%2==0?null:"40px"};
right:${props=>props.index%2==0?"40px":null};
animation:1s ${AnimationTitle} ease-in-out;
`;

export const Title = styled.span`
font-size: 20px;
color:white;
font-weight: bold;
`;
export const Price = styled.span`
font-size: 20px;
color:white;
font-weight: bold;

`;
export const Details = styled.span`
font-size: 12px;
color:white;
`;