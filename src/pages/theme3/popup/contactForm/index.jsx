import React, { useState, useEffect } from "react";
import {
  Container,
  Close,
  LogoContainer,
  Logo,
  Title,
  Subtitle,
  Description,
  FormContainer,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
} from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { createThreadPublic } from "../../../../apis/threads/createThreadPublic";

export default function ContactFormPopup({
  showPopup,
  popupHandler,
  restaurant,
  isPage = false,
  onClose,
}) {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "question",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (isPage) return;
    const handlePopState = () => {
      popupHandler(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isPage, popupHandler]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Message is mandatory
    if (!formData.message || !formData.message.trim()) {
      newErrors.message =
        activeLanguage === "en" ? "Message is required" : "الرسالة مطلوبة";
    }

    // Email is optional, but validate format if provided
    if (formData.email && formData.email.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email =
          activeLanguage === "en"
            ? "Please enter a valid email"
            : "يرجى إدخال بريد إلكتروني صحيح";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      await createThreadPublic({
        restaurant_id: restaurant?.id,
        type: formData.type || "question",
        subject: formData.subject || null,
        message: formData.message,
        customer_name: formData.name || null,
        customer_email: formData.email || null,
        customer_phone: formData.phone || null,
        channel: "contact_form",
      });

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "question",
        subject: "",
        message: "",
      });
      
      // Auto close after 2 seconds (popup only)
      if (!isPage) {
        setTimeout(() => {
          popupHandler(null);
          setSubmitSuccess(false);
        }, 2000);
      } else {
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 2000);
      }
    } catch (error) {
      setErrors({
        submit:
          error?.response?.data?.message ||
          (activeLanguage === "en"
            ? "Failed to send message. Please try again."
            : "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى."),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container showPopup={showPopup} isPage={isPage}>
      <Close
        onClick={() => {
          if (onClose) {
            onClose();
            return;
          }
          popupHandler(null);
        }}
        activeLanguage={activeLanguage}
      />
      
     

      <Title activeLanguage={activeLanguage}>
        {activeLanguage === "en" ? "Contact Us" : "اتصل بنا"}
      </Title>

      <Subtitle activeLanguage={activeLanguage}>
        {activeLanguage === "en" ? "DO YOU HAVE ANY QUESTION OR SUGGESTION?" : "هل لديك أي سؤال أو اقتراح؟"}
      </Subtitle>

      <Description activeLanguage={activeLanguage}>
  {activeLanguage === "en"
    ? "Our team is always ready to listen and provide the support you deserve."
    : " فريقنا دائمًا جاهز للاستماع وتقديم الدعم الذي تستحقه."}
</Description>

      <FormContainer activeLanguage={activeLanguage}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label activeLanguage={activeLanguage}>
              {activeLanguage === "en" ? "Type" : "النوع"}
            </Label>
            <Select
              name="type"
              value={formData.type}
              onChange={handleChange}
              activeLanguage={activeLanguage}
            >
              <option value="question">
                {activeLanguage === "en" ? "Question" : "سؤال"}
              </option>
              <option value="suggestion">
                {activeLanguage === "en" ? "Suggestion" : "اقتراح"}
              </option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={activeLanguage === "en" ? "Name" : "الاسم"}
              activeLanguage={activeLanguage}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={activeLanguage === "en" ? "E-mail" : "البريد الإلكتروني"}
              activeLanguage={activeLanguage}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={activeLanguage === "en" ? "Phone Number" : "رقم الهاتف"}
              activeLanguage={activeLanguage}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={activeLanguage === "en" ? "Subject" : "الموضوع"}
              activeLanguage={activeLanguage}
            />
          </FormGroup>

          <FormGroup>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={activeLanguage === "en" ? "Message" : "الرسالة"}
              activeLanguage={activeLanguage}
              rows={5}
            />
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          </FormGroup>

          {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
          {submitSuccess && (
            <SuccessMessage>
              {activeLanguage === "en" ? "Message sent successfully!" : "تم إرسال الرسالة بنجاح!"}
            </SuccessMessage>
          )}

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            activeLanguage={activeLanguage}
          >
            {isSubmitting
              ? activeLanguage === "en" ? "Sending..." : "جاري الإرسال..."
              : activeLanguage === "en" ? "Send Message" : "إرسال الرسالة"}
          </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
}


