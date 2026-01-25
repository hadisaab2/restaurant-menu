import styled, { keyframes } from "styled-components";
import { MdOutlineChevronRight } from "react-icons/md";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;
`;
export const CarouselContainer = styled.div`
  overflow: scroll;
  width: 90%;
  display: flex;
  align-items: center;
  position:relative;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  height: 40px;
  /* Hide scrollbar in WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
  -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
`;
export const Carousel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;

`;

export const CarouselItem = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  min-width: calc(100% / 4);
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition:all 0.2s ease-in-out;
  color:${props => props.categoryId == props.activeCategory ? props.theme.categoryactive : props.theme.categoryunactive};
  line-height: ${props => props.activeLanuguage == "ar" ? "1.5" : "null"};
  font-size: 14px;
  white-space: nowrap; /* Prevent wrapping of text */
  flex-shrink: 0; /* Prevent shrinking of the item */
  height: 100%;
  margin-left: ${props=>props.index!=0 && "8px"};

`;

export const CategoryWrapper = styled.div`
  height:100%;
  width: 100%;

  border-radius: 50px;
  padding-left: 10px; /* Add padding to left and right */
  padding-right: 10px; /* Add padding to left and right */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color:${props =>
    props.isAllItems
      ? props.theme.mainColor
      : props.categoryId == props.activeCategory
      ? props.theme.categoryActive
      : props.theme.categoryUnActive};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  transition: 0.2s all ease-in-out;
  color:${props =>
    props.isAllItems
      ? props.theme.popupbuttonText
      : props.categoryId == props.activeCategory
      ? "white"
      : "black"};//edit thiss
`;


export const IconContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;

`;
export const IconWrapper = styled.div`
width:42px;
height:42px;
border-radius: 50%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
background-color:${props => props.categoryId == props.activeCategory ? props.theme.categoryActiveIcon : props.theme.categoryUnactiveIcon};
transition: 0.2s all ease-in-out;

`;
export const Icon = styled.img`
width:20px;
height:20px;

`;

export const TextContainer = styled.div`
 display: flex;
justify-content: center; 

width: auto;

`;
export const CategoryName = styled.span`

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 12px;
    color: ${props => (props.isAllItems ? props.theme.popupbuttonText : "inherit")};
  user-select: none !important;
  -webkit-user-select: none !important;  /* For Safari (iOS) */
  -moz-user-select: none !important;     /* For Firefox */
  -ms-user-select: none !important;      /* For Internet Explorer */
`;


export const ArrowIcon = styled(MdOutlineChevronRight)`
position: absolute;
font-size: 22px;
right: 0px;
color:${props => props.theme.textColor};
`;