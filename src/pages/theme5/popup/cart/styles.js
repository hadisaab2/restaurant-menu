import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";

export const Container = styled.div`
  position: fixed;
  bottom: ${(props) => (props.showPopup == "cart" ? "0%" : "-100%")};
  left: 0;
  right: 0;
  min-height: 45vh;
  max-height: 90vh;
  background-color: ${(props) => props.theme.popupbackgroundColor};
  width: 100%;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-top-right-radius: 28px;
  border-top-left-radius: 28px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1500;
  padding-bottom: max(20px, env(safe-area-inset-bottom, 20px));
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  @media (min-width: 768px) {
    max-width: 560px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Close = styled(IoMdClose)`
  font-size: 22px;
  position: fixed;
  top: 24px;
  right: 24px;
  cursor: pointer;
  color: ${(props) => props.theme.popupTextColor};
  z-index: 20000;
  pointer-events: auto;
  background: transparent;
  border: none;
  padding: 6px;
  line-height: 1;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-top: 36px;
  color: ${(props) => props.theme.popupTextColor};
  letter-spacing: -0.2px;
`;

export const Border = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.popupTextColor};
  opacity: 0.08;
  margin-top: 12px;
`;

export const ItemsWrap = styled.div`
  max-height: 35vh;
  width: 100%;
  overflow-y: auto;
  margin-top: 16px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.mainColor}40;
    border-radius: 4px;
  }
`;

export const NoItems = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.popupTextColor};
  font-size: 16px;
  opacity: 0.5;
  font-weight: 500;
`;

export const ItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 11vh;
  margin-top: 1vh;
  position: relative;
  padding: 8px 0;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 70%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
`;

export const QuantityContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const QuantityWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  height: 24px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbackgroundColor};
  border-radius: 20px;
  margin-right: 16px;
  margin-bottom: 10px;
`;

export const Plus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`;

export const Minus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  font-weight: 600;
`;

export const Name = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.popupTextColor};
  line-height: 1.3;
`;

export const Price = styled.span`
  color: ${(props) => props.theme.popupTextColor};
  font-size: 13px;
  font-weight: 500;
`;

export const TotalPrice = styled.span`
  color: ${(props) => props.theme.popupTextColor};
  font-size: 14px;
  font-weight: 600;
  margin-top: 24px;
`;

export const Purchase = styled.button`
  outline: none;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  margin-top: 12px;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 12px;
  padding: 12px 0;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  transition: transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.98);
  }
`;

export const DeleteIcon = styled(MdOutlineDelete)`
  font-size: 16px;
  position: absolute;
  top: 8px;
  right: 16px;
  cursor: pointer;
  color: ${(props) => props.theme.popupTextColor};
  opacity: 0.5;
  transition: opacity 0.2s ease, color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 1;
    color: #e53935;
  }
`;
