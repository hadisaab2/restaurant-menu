import styled from "styled-components";

export const ReviewContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 5px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.categoryUnActive || "#f5f5f5"};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.mainColor || props.theme.maincolor || "#007bff"};
    border-radius: 3px;
  }
`;

export const ReviewSection = styled.div`
  background: ${(props) => props.theme.categoryUnActive || "#ffffff"};
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.borderColor || "rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
  margin-bottom: 15px;
`;

export const ReviewItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 0;
  gap: 15px;
`;

export const ReviewLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.popupTextColor || "#666"};
  flex: 1;
`;

export const ReviewValue = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
  text-align: right;
  flex: 1;
  word-break: break-word;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
`;

export const ReviewCartItem = styled.div`
  padding: 10px 0;
`;

export const ItemSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export const ReviewItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`;

export const Divider = styled.div`
  height: 1px;
  background: ${(props) => props.theme.borderColor || "rgba(0, 0, 0, 0.1)"};
  margin: 15px 0;
`;

export const TotalValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  text-align: right;
`;

