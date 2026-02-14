import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearCart } from "../../../../../redux/cart/cartActions";
import { useAddOrderQuery } from "../../../../../apis/restaurants/addOrder";
import { convertPrice } from "../../../../../utilities/convertPrice";
import { trackCheckoutStart, trackOrderPlaced } from "../../../../../utilities/analyticsTracking";
import CartStep from "./CartStep";
import OrderTypeStep from "./OrderTypeStep";
import DetailsStep from "./DetailsStep";
import ReviewStep from "./ReviewStep";
import {
  WizardContainer,
  ProgressBar,
  ProgressStep,
  StepIndicator,
  StepContent,
  NavigationButtons,
  NavButton,
  StepTitle,
  StepHeader,
  StepTitleText,
  StepCloseButton,
} from "./styles";

const STEPS = [
  { id: "cart", label: "Cart", number: 1 },
  { id: "orderType", label: "Order Type", number: 2 },
  { id: "details", label: "Details", number: 3 },
  { id: "review", label: "Review", number: 4 },
];

export default function Wizard({ popupHandler, restaurant }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const cart = useSelector((state) => state.cart[restaurantName] || []);
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    deliveryType: "",
    selectedBranch: restaurant?.branches?.[0] || null,
    selectedRegion: "",
    regions: [],
    fullName: "",
    phoneNumber: "",
    fullAddress: "",
    selectedLocation: null,
    tableNumber: "",
    note: "",
  });
  const [errors, setErrors] = useState({});

  const { handleApiCall: handleAddOrder, isPending } = useAddOrderQuery({
    onSuccess: () => {
      // Order submitted successfully
    },
  });

  // Auto-set delivery type if only one option available
  useEffect(() => {
    if (restaurant?.features) {
      const features = JSON.parse(restaurant.features);
      const enabledTypes = Object.entries(features)
        .filter(([key, value]) => value === true)
        .map(([key]) => {
          if (key === "delivery_order") return "Delivery";
          if (key === "takeaway_order") return "TakeAway";
          if (key === "dinein_order") return "DineIn";
          return null;
        })
        .filter(Boolean);

      if (enabledTypes.length === 1) {
        setFormData((prev) => ({ ...prev, deliveryType: enabledTypes[0] }));
      }
    }
  }, [restaurant]);

  const updateFormData = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
    // Clear errors for updated fields
    const errorKeys = Object.keys(updates);
    setErrors((prev) => {
      const newErrors = { ...prev };
      errorKeys.forEach((key) => {
        if (newErrors[key]) delete newErrors[key];
      });
      return newErrors;
    });
  };

  const validateStep = (stepIndex) => {
    const newErrors = {};

    if (stepIndex === 1) {
      // Validate Order Type step
      if (!formData.deliveryType) {
        newErrors.deliveryType = "Order Type is required.";
      }
      if (!formData.selectedBranch && restaurant?.branches?.length > 0) {
        const hasOnlineBranch = restaurant?.branches?.some(
          (branch) => branch.is_online
        );
        if (!hasOnlineBranch) {
          newErrors.branch = "Branch is required.";
        }
      }
      if (
        formData.deliveryType === "Delivery" &&
        formData.selectedBranch &&
        Array.isArray(formData.regions) &&
        formData.regions.length > 0 &&
        !formData.selectedRegion
      ) {
        newErrors.region = "Region is required.";
      }
    } else if (stepIndex === 2) {
      // Validate Details step
      if (!formData.fullName) {
        newErrors.fullName = "Full Name is required.";
      }
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = "Phone Number is required.";
      }
      if (formData.deliveryType === "Delivery" && !formData.fullAddress) {
        newErrors.fullAddress = "Full Address is required for delivery.";
      }
      if (formData.deliveryType === "DineIn" && !formData.tableNumber) {
        newErrors.tableNumber = "Table Number is required.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      // Track checkout start when moving from cart to order type step
      if (currentStep === 0 && restaurant?.id) {
        const branchId = formData.selectedBranch?.id || null;
        trackCheckoutStart(restaurant.id, branchId, formData.deliveryType || null);
      }
      
      if (currentStep < STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (!validateStep(2)) return;

    // Generate WhatsApp message
    let message = `Hello *${restaurantName}*\n`;
    message += `It's *${formData.fullName}* and I want to purchase the following items:\n`;
    message += `Order Type: *${formData.deliveryType}*\n`;

    let totalPrice = 0;
    cart.forEach((item) => {
      message += `• ${item.quantity} of *${
        activeLanguage === "ar" ? item.ar_name : item.en_name
      }*`;
      message += `(${
        activeLanguage === "ar"
          ? item.category.ar_category
          : item.category.en_category
      })\n`;

      if (item.formData) {
        Object.keys(item.formData).forEach((key) => {
          const value = item.formData[key];
          if (Array.isArray(value)) {
            message += `  - ${key}: ${value.join(", ")}\n`;
          } else if (typeof value === "object" && value !== null) {
            message += `  - ${key}: ${value.label}\n`;
          } else {
            message += `  - ${key}: ${value}\n`;
          }
        });
      }
      if (item.instruction) {
        message += `  - Special Instruction: ${item.instruction}\n`;
      }

      let currencySymbol = "";
      switch (restaurant?.currency) {
        case "dollar":
          currencySymbol = "$";
          break;
        case "lb":
          currencySymbol = "L.L.";
          break;
        case "gram":
          currencySymbol = "g";
          break;
        case "kilogram":
          currencySymbol = "kg";
          break;
      }

      message += `  - Price: ${item.price * item.quantity} ${currencySymbol}\n`;
      totalPrice += item.price * item.quantity;
    });

    let currencySymbol = "";
    switch (restaurant?.currency) {
      case "dollar":
        currencySymbol = "$";
        break;
      case "lb":
        currencySymbol = "L.L.";
        break;
      case "gram":
        currencySymbol = "g";
        break;
      case "kilogram":
        currencySymbol = "kg";
        break;
    }

    message += `Total Price: ${convertPrice(totalPrice, currencySymbol)}\n\n`;
    message += `Contact Info:\n`;
    message += `- Name: ${formData.fullName}\n`;
    if (formData.selectedRegion) {
      message += `- Region: ${formData.selectedRegion}\n`;
    }
    message += `- Phone Number: ${formData.phoneNumber}\n`;
    if (formData.deliveryType === "Delivery") {
      message += `- Address: ${formData.fullAddress}\n`;
      if (formData.selectedLocation) {
        message += `- Location Coordinates: ${formData.selectedLocation.latitude}, ${formData.selectedLocation.longitude}\n`;
        message += `- Google Maps Link: https://www.google.com/maps?q=${formData.selectedLocation.latitude},${formData.selectedLocation.longitude}\n`;
      }
    }
    if (formData.deliveryType === "DineIn") {
      message += `- Table Number: ${formData.tableNumber}\n`;
    }
    if (formData.note) {
      message += `- Order notes: ${formData.note}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    let whatsappUrl = "";
    let newWhatsappNumber = "";

    if (!formData.selectedBranch?.whatsapp_number) {
      whatsappUrl = `https://wa.me/${restaurant.phone_number}?text=${encodedMessage}`;
    } else {
      newWhatsappNumber = formData.selectedBranch?.whatsapp_number?.startsWith(
        "961"
      )
        ? formData.selectedBranch?.whatsapp_number
        : "961" + formData.selectedBranch?.whatsapp_number;
      whatsappUrl = `https://wa.me/${newWhatsappNumber}?text=${encodedMessage}`;
    }

    // Log order to database (simplified for analytics)
    const simplifiedCart = cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      branch_id: formData.selectedBranch?.id,
      restaurant_id: restaurant.id,
    }));

    // Prepare full order items with all details
    const fullOrderItems = cart.map((item) => ({
      product_id: item.id,
      product_name: activeLanguage === "en" ? item.en_name : item.ar_name,
      quantity: item.quantity,
      price: item.price,
      total_price: item.price * item.quantity,
      form_data: item.formData || {},
      instruction: item.instruction || "",
      product_details: {
        en_name: item.en_name,
        ar_name: item.ar_name,
        en_price: item.en_price,
        ar_price: item.ar_price,
        category_id: item.category_id,
      },
    }));

    handleAddOrder({
      products: simplifiedCart, // For analytics (existing)
      restaurant_id: restaurant.id,
      branch_id: formData.selectedBranch?.id,
      delivery_type: formData.deliveryType,
      // Full order details
      customer_name: formData.fullName,
      customer_phone: formData.phoneNumber,
      customer_address: formData.deliveryType === "Delivery" ? formData.fullAddress : null,
      table_number: formData.deliveryType === "DineIn" ? formData.tableNumber : null,
      note: formData.note,
      items: fullOrderItems,
      subtotal: totalPrice,
      total: totalPrice,
      currency: restaurant.currency,
    });

    // Track order placed (order ID will be available in onSuccess callback if needed)
    if (restaurant?.id) {
      const branchId = formData.selectedBranch?.id || null;
      trackOrderPlaced(
        restaurant.id,
        null, // orderId - will be updated when order is created
        formData.deliveryType,
        totalPrice,
        branchId,
        {
          items: fullOrderItems,
          customerName: formData.fullName,
        }
      );
    }

    const w = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    dispatch(clearCart(restaurantName));
    popupHandler(null);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <CartStep
            formData={formData}
            updateFormData={updateFormData}
            restaurant={restaurant}
            activeLanguage={activeLanguage}
          />
        );
      case 1:
        return (
          <OrderTypeStep
            formData={formData}
            updateFormData={updateFormData}
            restaurant={restaurant}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 2:
        return (
          <DetailsStep
            formData={formData}
            updateFormData={updateFormData}
            restaurant={restaurant}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 3:
        return (
          <ReviewStep
            formData={formData}
            restaurant={restaurant}
            activeLanguage={activeLanguage}
          />
        );
      default:
        return null;
    }
  };

  return (
    <WizardContainer>
      <StepHeader>
        <StepTitleText>{STEPS[currentStep].label}</StepTitleText>
        <StepCloseButton
          onClick={() => popupHandler(null)}
          aria-label="Close cart"
        >
          ✕
        </StepCloseButton>
      </StepHeader>
      <ProgressBar>
        {STEPS.map((step, index) => (
          <ProgressStep key={step.id} active={index <= currentStep}>
            <StepIndicator
              active={index <= currentStep}
              completed={index < currentStep}
            >
              {index < currentStep ? "✓" : step.number}
            </StepIndicator>
            <span>{step.label}</span>
          </ProgressStep>
        ))}
      </ProgressBar>

      <StepContent>{renderStepContent()}</StepContent>

      <NavigationButtons>
        {currentStep > 0 && (
          <NavButton onClick={handleBack} variant="secondary">
            Back
          </NavButton>
        )}
        {currentStep < STEPS.length - 1 ? (
          <NavButton onClick={handleNext} variant="primary">
            Next
          </NavButton>
        ) : (
          <NavButton
            onClick={handleSubmit}
            variant="primary"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit Order"}
          </NavButton>
        )}
      </NavigationButtons>
    </WizardContainer>
  );
}

