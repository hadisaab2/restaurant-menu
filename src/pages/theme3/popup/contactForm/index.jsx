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
  TextArea,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
} from "./styles";
import { IoMdClose } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { addFeedback } from "../../../../apis/feedback/addFeedback";

export default function ContactFormPopup({ showPopup, popupHandler, restaurant }) {
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
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      popupHandler(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [popupHandler]);

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

    // Email is mandatory
    if (!formData.email || !formData.email.trim()) {
      newErrors.email = activeLanguage === "en" ? "Email is required" : "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = activeLanguage === "en" ? "Please enter a valid email" : "يرجى إدخال بريد إلكتروني صحيح";
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
      // Here you would call your API to submit the contact form
      // For now, we'll use a placeholder
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      
      // TODO: Replace with actual API call
      // await submitContactForm({
      //   restaurant_id: restaurant?.id,
      //   name: formData.name,
      //   email: formData.email,
      //   subject: formData.subject,
      //   message: formData.message,
      // });

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto close after 2 seconds
      setTimeout(() => {
        popupHandler(null);
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      setErrors({
        submit: activeLanguage === "en" ? "Failed to send message. Please try again." : "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container showPopup={showPopup}>
      <Close
        onClick={() => {
          popupHandler(null);
        }}
        activeLanguage={activeLanguage}
      />
      
      {/* Logo at Top */}
      {restaurant?.logoURL && (
        <LogoContainer activeLanguage={activeLanguage}>
          <Logo
            src={`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`}
            alt={restaurant?.name || "Restaurant Logo"}
          />
        </LogoContainer>
      )}

      <Title activeLanguage={activeLanguage}>
        {activeLanguage === "en" ? "Contact Us" : "اتصل بنا"}
      </Title>

      <Subtitle activeLanguage={activeLanguage}>
        {activeLanguage === "en" ? "DO YOU HAVE ANY QUESTION?" : "هل لديك أي سؤال؟"}
      </Subtitle>

      <Description activeLanguage={activeLanguage}>
        {activeLanguage === "en"
          ? "Exceptional customer support: prompt, friendly, and reliable. Your satisfaction is our priority. Trust us to exceed expectations."
          : "دعم عملاء استثنائي: سريع، ودود، وموثوق. رضاكم هو أولويتنا. ثق بنا لتجاوز التوقعات."}
      </Description>

      <FormContainer activeLanguage={activeLanguage}>
        <Form onSubmit={handleSubmit}>
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
              required
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
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


