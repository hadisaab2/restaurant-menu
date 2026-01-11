import React, { useEffect, useState } from "react";
import {
  Container,
  HeaderContainer,
  Close,
  Title,
  StarContainer,
  Star,
  FormContainer,
  Input,
  TextArea,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
  Label,
} from "./styles";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAddFeedback } from "../../../../apis/feedback/addFeedback";

export default function FeedbackPopup({ showPopup, popupHandler, restaurant }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );

  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleApiCall } = useAddFeedback({
    onSuccess: () => {
      setSuccess(true);
      setIsSubmitting(false);
      setTimeout(() => {
        popupHandler(null);
        // Reset form
        setRating(0);
        setName("");
        setPhoneNumber("");
        setEmail("");
        setComments("");
        setError("");
        setSuccess(false);
      }, 2000);
    },
    onError: (error) => {
      setError(
        error?.response?.data?.message ||
          (activeLanguage === "en" ? "Failed to submit feedback" : "فشل إرسال التعليق")
      );
      setIsSubmitting(false);
    },
  });

  useEffect(() => {
    const handlePopState = () => {
      popupHandler(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (rating === 0) {
      setError(
        activeLanguage === "en"
          ? "Please select a rating"
          : "الرجاء اختيار التقييم"
      );
      return;
    }

    setIsSubmitting(true);

    await handleApiCall({
      restaurant_id: restaurant?.id,
      rating,
      name: name || null,
      phone_number: phoneNumber || null,
      email: email || null,
      comments: comments || null,
    });
  };

  return (
    <Container showPopup={showPopup}>
      <HeaderContainer activeLanguage={activeLanguage}>
        <Title activeLanguage={activeLanguage}>
          {activeLanguage === "en" ? "Feedback" : "التعليقات"}
        </Title>
        <Close
          activeLanguage={activeLanguage}
          onClick={() => {
            popupHandler(null);
          }}
        />
      </HeaderContainer>

      <FormContainer onSubmit={handleSubmit} activeLanguage={activeLanguage}>
        <Label activeLanguage={activeLanguage}>
          {activeLanguage === "en" ? "Rating *" : "التقييم *"}
        </Label>
        <StarContainer activeLanguage={activeLanguage}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              active={star <= (hoveredRating || rating)}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
            >
              <FaStar />
            </Star>
          ))}
        </StarContainer>

        <Label activeLanguage={activeLanguage}>
          {activeLanguage === "en" ? "Name" : "الاسم"}
        </Label>
        <Input
          type="text"
          activeLanguage={activeLanguage}
          dir={activeLanguage === "en" ? "ltr" : "rtl"}
          placeholder={activeLanguage === "en" ? "Your name (optional)" : "اسمك (اختياري)"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Label activeLanguage={activeLanguage}>
          {activeLanguage === "en" ? "Phone Number" : "رقم الهاتف"}
        </Label>
        <Input
          type="tel"
          activeLanguage={activeLanguage}
          dir={activeLanguage === "en" ? "ltr" : "rtl"}
          placeholder={activeLanguage === "en" ? "Phone number (optional)" : "رقم الهاتف (اختياري)"}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <Label activeLanguage={activeLanguage}>
          {activeLanguage === "en" ? "Email" : "البريد الإلكتروني"}
        </Label>
        <Input
          type="email"
          activeLanguage={activeLanguage}
          dir={activeLanguage === "en" ? "ltr" : "rtl"}
          placeholder={activeLanguage === "en" ? "Email (optional)" : "البريد الإلكتروني (اختياري)"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label activeLanguage={activeLanguage}>
          {activeLanguage === "en" ? "Comments" : "التعليقات"}
        </Label>
        <TextArea
          activeLanguage={activeLanguage}
          dir={activeLanguage === "en" ? "ltr" : "rtl"}
          placeholder={activeLanguage === "en" ? "Your comments (optional)" : "تعليقاتك (اختياري)"}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          rows={4}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && (
          <SuccessMessage>
            {activeLanguage === "en"
              ? "Thank you for your feedback!"
              : "شكراً لتعليقك!"}
          </SuccessMessage>
        )}

        <SubmitButton
          type="submit"
          disabled={isSubmitting || rating === 0}
          activeLanguage={activeLanguage}
        >
          {isSubmitting
            ? activeLanguage === "en"
              ? "Submitting..."
              : "جاري الإرسال..."
            : activeLanguage === "en"
            ? "Submit Feedback"
            : "إرسال التعليق"}
        </SubmitButton>
      </FormContainer>
    </Container>
  );
}

