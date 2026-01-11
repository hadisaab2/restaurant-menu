import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  FormTitle,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  ErrorMessage,
} from "./styles";
import { useAddFeedback } from "../../../../apis/feedback/addFeedback";
import { useParams } from "react-router-dom";

export default function FeedbackForm({ restaurant, activeLanguage, onClose }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleApiCall } = useAddFeedback({
    onSuccess: () => {
      alert(activeLanguage === "en" ? "Thank you for your feedback!" : "شكراً لتعليقك!");
      onClose();
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: (error) => {
      alert(activeLanguage === "en" ? "Error submitting feedback. Please try again." : "خطأ في إرسال التعليق. يرجى المحاولة مرة أخرى.");
      console.error(error);
    },
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = activeLanguage === "en" ? "Name is required" : "الاسم مطلوب";
    }
    if (!formData.email.trim()) {
      newErrors.email = activeLanguage === "en" ? "Email is required" : "البريد الإلكتروني مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = activeLanguage === "en" ? "Invalid email" : "بريد إلكتروني غير صحيح";
    }
    if (!formData.message.trim()) {
      newErrors.message = activeLanguage === "en" ? "Message is required" : "الرسالة مطلوبة";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await handleApiCall({
        restaurant_id: restaurant?.id,
        ...formData,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const title = activeLanguage === "en" ? "Feedback" : "التعليقات";
  const nameLabel = activeLanguage === "en" ? "Name" : "الاسم";
  const emailLabel = activeLanguage === "en" ? "Email" : "البريد الإلكتروني";
  const phoneLabel = activeLanguage === "en" ? "Phone" : "الهاتف";
  const messageLabel = activeLanguage === "en" ? "Message" : "الرسالة";
  const submitText = activeLanguage === "en" ? "Submit" : "إرسال";

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} activeLanguage={activeLanguage}>
        <CloseButton onClick={onClose} activeLanguage={activeLanguage}>×</CloseButton>
        <FormTitle activeLanguage={activeLanguage}>{title}</FormTitle>
        <Form onSubmit={handleSubmit} activeLanguage={activeLanguage}>
          <FormGroup>
            <Label activeLanguage={activeLanguage}>{nameLabel}</Label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              activeLanguage={activeLanguage}
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label activeLanguage={activeLanguage}>{emailLabel}</Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              activeLanguage={activeLanguage}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label activeLanguage={activeLanguage}>{phoneLabel}</Label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              activeLanguage={activeLanguage}
            />
          </FormGroup>
          <FormGroup>
            <Label activeLanguage={activeLanguage}>{messageLabel}</Label>
            <TextArea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              activeLanguage={activeLanguage}
            />
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          </FormGroup>
          <SubmitButton type="submit" disabled={isSubmitting} activeLanguage={activeLanguage}>
            {submitText}
          </SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}

