import styled, { keyframes } from "styled-components";
import { MdOutlineChevronRight } from "react-icons/md";

const slideIn = keyframes`
  from { opacity: 0.5; transform: scaleX(0.92); }
  to   { opacity: 1; transform: scaleX(1); }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 14px;
  position: relative;
`;

export const CarouselContainer = styled.div`
  overflow-x: auto;
  width: 92%;
  display: flex;
  align-items: center;
  position: relative;
  height: 48px;
  padding: 2px 0;

  &::-webkit-scrollbar { display: none; }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: max-content;
  gap: 8px;
  align-items: center;
`;

export const CarouselItem = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  line-height: ${(props) => (props.activeLanuguage === "ar" ? "1.5" : "1.3")};
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
  height: 44px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.93);
  }
`;

export const CategoryWrapper = styled.div`
  height: 100%;
  border-radius: 999px;
  padding: 0 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.categoryId == props.activeCategory
      ? props.theme.categoryActive
      : props.theme.categoryUnActive};
  box-shadow: ${(props) =>
    props.categoryId == props.activeCategory
      ? "0 3px 14px rgba(0,0,0,0.18)"
      : "0 1px 5px rgba(0,0,0,0.06)"};
  border: 1.5px solid ${(props) =>
    props.categoryId == props.activeCategory
      ? props.theme.categoryActive || "transparent"
      : props.theme.categoryUnActive || "rgba(0,0,0,0.07)"};
  transition: all 0.22s ease-in-out;
  animation: ${(props) =>
    props.categoryId == props.activeCategory ? slideIn : "none"} 0.25s ease;
`;

export const IconContainer = styled.div`
  display: none;
`;

export const IconWrapper = styled.div`
  display: none;
`;

export const Icon = styled.img`
  display: none;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CategoryName = styled.span`
  text-align: center;
  white-space: nowrap;
  font-size: 13px;
  font-weight: ${(props) => (props.categoryId == props.activeCategory ? "700" : "500")};
  color: ${(props) =>
    props.categoryId == props.activeCategory
      ? props.theme.categoryActiveText || props.theme.categoryactivetext || "#ffffff"
      : props.theme.categoryUnactiveText || props.theme.categoryunactivetext || props.theme.textColor || "#333"};
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  transition: color 0.2s, font-weight 0.2s;
  letter-spacing: 0.2px;
`;

export const ArrowIcon = styled(MdOutlineChevronRight)`
  position: absolute;
  font-size: 22px;
  right: 0px;
  color: ${(props) => props.theme.textColor};
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover { opacity: 1; }
`;
