import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";

export const Container = styled.div`
  position: fixed;
  bottom: ${(props) => (props.showPopup === "cart" ? "0%" : "-110%")};
  left: 0;
  right: 0;
  min-height: 55vh;
  max-height: 92vh;
  background-color: ${(props) => props.theme.popupbackgroundColor};
  width: 100%;
  transition: bottom 0.42s cubic-bezier(0.32, 0.72, 0, 1);
  border-top-right-radius: 28px;
  border-top-left-radius: 28px;
  box-shadow: 0 -8px 36px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1500;
  padding-bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  overflow: hidden;

  /* Drag handle */
  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    border-radius: 999px;
    background: ${(props) => props.theme.popupTextColor || "#333"};
    opacity: 0.18;
    margin: 10px auto 0;
    flex-shrink: 0;
  }
`;

export const Close = styled(IoMdClose)`
  font-size: 20px;
  position: absolute;
  top: 16px;
  right: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.popupTextColor};
  z-index: 20000;
  pointer-events: auto;
  background: ${(props) => props.theme.categoryUnActive || "rgba(0,0,0,0.06)"};
  border: none;
  padding: 6px;
  line-height: 1;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.categoryUnActive || "rgba(0,0,0,0.1)"};
  }
`;

export const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 800;
  margin-top: 36px;
  color: ${(props) => props.theme.popupTextColor};
  letter-spacing: -0.3px;
`;

export const Border = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.popupTextColor};
  opacity: 0.08;
  margin-top: 10px;
`;

export const ItemsWrap = styled.div`
  max-height: 38vh;
  width: 100%;
  overflow-y: auto;
  margin-top: 16px;
  padding-right: 2px;

  &::-webkit-scrollbar { width: 3px; }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.mainColor || "#e53e3e"};
    border-radius: 3px;
  }
`;

export const NoItems = styled.div`
  height: 42vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: ${(props) => props.theme.popupTextColor};
  font-size: 16px;
  font-weight: 600;
  opacity: 0.6;
  text-align: center;
  padding: 0 20px;
`;

export const ItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 80px;
  margin-top: 10px;
  position: relative;
  background: ${(props) => props.theme.BoxColor || "#fff"};
  border-radius: 16px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 2px 0;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 2px 0;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 28px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbuttonText || "#fff"};
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.14);
`;

export const Plus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const Minus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  font-size: 12px;
  font-weight: 700;
`;

export const Name = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${(props) => props.theme.popupTextColor};
  line-height: 1.3;
`;

export const Price = styled.span`
  color: ${(props) => props.theme.BoxPriceColor || props.theme.mainColor};
  font-size: 13px;
  font-weight: 700;
`;

export const TotalPrice = styled.span`
  color: ${(props) => props.theme.popupTextColor};
  font-size: 14px;
  font-weight: 700;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92%;
`;

export const Purchase = styled.button`
  outline: none;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme.popupbuttonText || "#fff"};
  width: 92%;
  margin-top: 12px;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 999px;
  padding: 14px;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  transition: opacity 0.2s, transform 0.2s;
  letter-spacing: 0.3px;

  &:active {
    opacity: 0.85;
    transform: scale(0.98);
  }
`;

export const DeleteIcon = styled(MdOutlineDelete)`
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => props.theme.popupTextColor};
  opacity: 0.45;
  transition: opacity 0.2s, color 0.2s;

  &:hover {
    opacity: 1;
    color: #e53935;
  }
`;
