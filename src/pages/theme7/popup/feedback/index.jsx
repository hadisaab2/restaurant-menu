import React, { useState } from "react";
import { FiX, FiStar, FiSend } from "react-icons/fi";
import axios from "axios";
import styled from "styled-components";
import {
  Overlay,
  PopupWrap,
  PopupHeader,
  PopupTitle,
  PopupClose,
  PopupBody,
  PopupBtn,
} from "../../styles";

/* ── local helpers ── */
const StarsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const StarBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: transform 150ms;
  &:hover {
    transform: scale(1.15);
  }
  svg {
    width: 32px;
    height: 32px;
    color: ${(p) => (p.$filled ? (p.theme.mainColor || "#9E7C0C") : "#E5E2DB")};
    fill: ${(p) => (p.$filled ? (p.theme.mainColor || "#9E7C0C") : "none")};
    transition: color 150ms, fill 150ms;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #e5e2db;
  background: ${(p) => p.theme.searchbackground || "#F4F2ED"};
  color: ${(p) => p.theme.popupTextColor || "#1A1816"};
  padding: 12px 16px;
  font-size: 0.8125rem;
  outline: none;
  resize: none;
  font-family: inherit;
  margin-bottom: 16px;
  box-sizing: border-box;
  &::placeholder {
    color: #918c86;
  }
  &:focus {
    border-color: ${(p) => p.theme.mainColor || "#9E7C0C"};
  }
`;

const SuccessWrap = styled.div`
  text-align: center;
  padding: 32px 0;
`;

const SuccessTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(p) => p.theme.popupTextColor || "#1A1816"};
  margin: 0 0 8px;
`;

const SuccessSub = styled.p`
  font-size: 0.8125rem;
  color: #918c86;
  margin: 0;
`;

export default function FeedbackPopup({
  restaurant,
  restaurantName,
  activeLanguage,
  popupHandler,
  isRtl,
}) {
  const loc = (en, ar) => (isRtl ? ar || en : en);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("idle");
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const submit = async () => {
    if (!rating) return;
    setStatus("sending");
    try {
      await axios.post(`${baseUrl}/feedback`, {
        restaurant_id: restaurant?.id,
        rating,
        comment,
        restaurant_name: restaurantName,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Overlay onClick={() => popupHandler(null)} />
      <PopupWrap>
        <PopupHeader>
          <PopupTitle $rtl={isRtl}>{loc("Feedback", "تقييم")}</PopupTitle>
          <PopupClose onClick={() => popupHandler(null)}>
            <FiX />
          </PopupClose>
        </PopupHeader>

        <PopupBody>
          {status === "success" ? (
            <SuccessWrap>
              <SuccessTitle>{loc("Thank you!", "شكرا لك!")}</SuccessTitle>
              <SuccessSub>
                {loc(
                  "Your feedback has been submitted",
                  "تم إرسال تقييمك بنجاح"
                )}
              </SuccessSub>
            </SuccessWrap>
          ) : (
            <>
              <StarsRow>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarBtn
                    key={star}
                    onClick={() => setRating(star)}
                    $filled={star <= rating}
                  >
                    <FiStar />
                  </StarBtn>
                ))}
              </StarsRow>

              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={loc(
                  "Write your feedback...",
                  "أكتب تعليقك هنا..."
                )}
                rows={3}
              />

              <PopupBtn
                onClick={submit}
                disabled={!rating || status === "sending"}
              >
                <FiSend />
                {status === "sending"
                  ? loc("Sending...", "جاري الإرسال...")
                  : loc("Submit", "إرسال")}
              </PopupBtn>
            </>
          )}
        </PopupBody>
      </PopupWrap>
    </>
  );
}
