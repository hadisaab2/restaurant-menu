import styled, { keyframes } from "styled-components";
import { MdOutlineChevronRight } from "react-icons/md";

const activePop = keyframes`
  0%   { transform: scale(1); }
  50%  { transform: scale(1.08); }
  100% { transform: scale(1); }
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
  overflow: hidden;
  width: 92%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  flex-direction: column;
  height: 108px;

  &::-webkit-scrollbar { display: none; }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const Carousel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  overflow-x: auto;
  gap: 8px;
  padding: 4px 0;

  &::-webkit-scrollbar { display: none; }
  scrollbar-width: none;
`;

export const CarouselItem = styled.div`
  min-width: calc(25% - 6px);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  line-height: ${(props) => (props.activeLanuguage === "ar" ? "1.5" : "1.3")};
  font-size: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.94);
  }
`;

export const CategoryWrapper = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  background-color: ${(props) =>
    props.categoryId == props.activeCategory
      ? props.theme.categoryActive
      : props.theme.categoryUnActive};
  box-shadow: ${(props) =>
    props.categoryId == props.activeCategory
      ? "0 4px 16px rgba(0,0,0,0.18)"
      : "0 1px 6px rgba(0,0,0,0.07)"};
  border: 1.5px solid ${(props) =>
    props.categoryId == props.activeCategory
      ? props.theme.categoryActive || "transparent"
      : props.theme.categoryUnActive || "rgba(0,0,0,0.06)"};
  transition: all 0.22s ease-in-out;
  padding: 6px 4px;
  animation: ${(props) =>
    props.categoryId == props.activeCategory ? activePop : "none"} 0.3s ease;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.categoryId == props.activeCategory
      ? props.theme.categoryActiveIcon || "rgba(255,255,255,0.25)"
      : props.theme.categoryUnactiveIcon || "rgba(0,0,0,0.06)"};
  transition: all 0.22s ease-in-out;
  overflow: hidden;
`;

export const Icon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 4px;
`;

export const CategoryName = styled.span`
  width: 95%;
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  font-size: 11px;
  font-weight: ${(props) => (props.categoryId == props.activeCategory ? "700" : "500")};
  color: ${(props) =>
    props.categoryId == props.activeCategory
      ? props.theme.categoryActiveText || props.theme.categoryactivetext || "#ffffff"
      : props.theme.textColor || "#333"};
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  transition: color 0.2s;
  line-height: 1.3;
`;

export const ArrowIcon = styled(MdOutlineChevronRight)`
  position: absolute;
  font-size: 22px;
  right: 0px;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.15s;

  &:hover { opacity: 1; }

  @media (min-width: 1024px) {
    right: 20px;
  }
`;

export const LeftArrowIcon = styled(MdOutlineChevronRight)`
  position: absolute;
  font-size: 22px;
  left: 0px;
  color: ${(props) => props.theme.textColor};
  rotate: 180deg;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.15s;

  &:hover { opacity: 1; }

  @media (min-width: 1024px) {
    left: 20px;
  }
`;
