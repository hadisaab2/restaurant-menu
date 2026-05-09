import styled from "styled-components";
import { MdOutlineChevronRight } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
  position: relative;

  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const CarouselContainer = styled.div`
  overflow: scroll;
  width: 90%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  height: 105px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (min-width: 480px) {
    width: 92%;
    height: 110px;
  }

  @media (min-width: 768px) {
    height: 115px;
  }
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
  min-width: calc(100% / 4);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 0.25s ease-in-out;
  color: ${(props) =>
    props.categoryId == props.activeCategory
      ? props.theme.categoryactive
      : props.theme.categoryunactive};
  line-height: ${(props) => (props.activeLanuguage == "ar" ? "1.5" : "null")};
  font-size: 14px;

  @media (min-width: 480px) {
    min-width: calc(100% / 5);
  }

  @media (min-width: 768px) {
    min-width: calc(100% / 6);
  }

  @media (min-width: 1024px) {
    min-width: calc(100% / 7);
  }
`;

export const CategoryWrapper = styled.div`
  width: 78%;
  height: 100%;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) =>
    props.categoryId == props.activeCategory
      ? props.theme.categoryActive
      : props.theme.categoryUnActive};
  box-shadow: ${(props) =>
    props.categoryId == props.activeCategory
      ? "0 4px 14px rgba(0, 0, 0, 0.12)"
      : "0 2px 6px rgba(0, 0, 0, 0.06)"};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${(props) =>
    props.categoryId == props.activeCategory ? "white" : "black"};
  transform: ${(props) =>
    props.categoryId == props.activeCategory ? "scale(1.03)" : "scale(1)"};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.97);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.categoryId == props.activeCategory
      ? props.theme.categoryActiveIcon
      : props.theme.categoryUnactiveIcon};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 0.8;
  width: 100%;
`;

export const CategoryName = styled.span`
  width: 92%;
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  font-size: 11px;
  font-weight: 500;
  color: ${(props) =>
    props.categoryId == props.activeCategory
      ? props.theme.categoryActiveText || props.theme.categoryactivetext
      : props.theme.categoryUnactiveText ||
        props.theme.categoryunactivetext ||
        props.theme.textColor ||
        "#333"};
  user-select: none !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  transition: color 0.2s ease;

  @media (min-width: 480px) {
    font-size: 12px;
  }
`;

export const ArrowIcon = styled(MdOutlineChevronRight)`
  position: absolute;
  font-size: 24px;
  right: 0px;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 1024px) {
    right: 12px;
  }
`;

export const LeftArrowIcon = styled(MdOutlineChevronRight)`
  position: absolute;
  font-size: 24px;
  left: 0px;
  color: ${(props) => props.theme.textColor};
  rotate: calc(180deg);
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 1024px) {
    left: 12px;
  }
`;
