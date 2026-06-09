import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { clearCart } from "../../../../../redux/cart/cartActions";
import { useAddOrderQuery } from "../../../../../apis/restaurants/addOrder";
import { CUSTOMER_ME_URL } from "../../../../../apis/URLs";
import { getCustomerAccessToken } from "../../../../../utilities/customerAuthStorage";
import { convertPrice } from "../../../../../utilities/convertPrice";
import { formatWhatsappNumber, buildWhatsappUrl } from "../../../../../utilities/formatWhatsappNumber";
import { formatCartItemOptionsForOrderMessage } from "../../../../../product-options/cartLabels";
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
    selectedAddressId: null,
    selectedLocation: null,
    tableNumber: "",
    note: "",
  });
  const [errors, setErrors] = useState({});

  const { handleApiCallAsync: handleAddOrderAsync, isPending } = useAddOrderQuery({
    onSuccess: () => {
      // Order submitted successfully
    },
  });

  // Auto-set delivery type if only one option available
  useEffect(() => {
    const loadCustomerProfile = async () => {
      const tok = getCustomerAccessToken(restaurantName);
      if (!tok) return;
      try {
        const { data } = await axios.get(CUSTOMER_ME_URL, {
          headers: { Authorization: `Bearer ${tok}` },
        });
        setFormData((prev) => ({
          ...prev,
          fullName: data.full_name || prev.fullName,
          phoneNumber: data.phone_number || prev.phoneNumber,
        }));
      } catch {
        /* ignore */
      }
    };
    loadCustomerProfile();
  }, [restaurantName]);

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

  const handleSubmit = async () => {
    if (!validateStep(2)) return;

    // Generate WhatsApp message
    let currencySymbol = "";
    switch (restaurant?.currency) {
      case "dollar": currencySymbol = "$"; break;
      case "lb": currencySymbol = "L.L."; break;
      case "gram": currencySymbol = "g"; break;
      case "kilogram": currencySymbol = "kg"; break;
    }

    let totalPrice = 0;
    let message = ``;
    message += `*New Order - ${formData.deliveryType}*\n`;
    message += `--------------------\n\n`;

    message += `*Items:*\n`;
    cart.forEach((item, idx) => {
      const name = (activeLanguage === "ar" ? item.ar_name : item.en_name || "").trim();
      const category = (activeLanguage === "ar" ? item.category.ar_category : item.category.en_category || "").trim();
      const itemTotal = item.price * item.quantity;
      totalPrice += itemTotal;

      message += `${idx + 1}. *${name}*\n`;
      message += `    ${category}\n`;
      message += `    ${item.quantity}x ${item.price} ${currencySymbol} = *${itemTotal} ${currencySymbol}*\n`;

      if (item.formData) {
        message += formatCartItemOptionsForOrderMessage(item, activeLanguage === "ar" ? "ar" : "en");
      }
      if (item.instruction) {
        message += `    > _${item.instruction}_\n`;
      }
      message += `\n`;
    });

    message += `--------------------\n`;
    message += `*Total: ${convertPrice(totalPrice, currencySymbol)}*\n\n`;

    message += `*Customer:*\n`;
    message += `- ${formData.fullName}\n`;
    message += `- ${formData.phoneNumber}\n`;
    if (formData.selectedRegion) {
      message += `- Region: ${formData.selectedRegion}\n`;
    }
    let mapLink = "";
    if (formData.deliveryType === "Delivery") {
      message += `\n*Delivery Address:*\n`;
      message += `${formData.fullAddress}\n`;
      if (formData.selectedLocation) {
        mapLink = `https://www.google.com/maps?q=${formData.selectedLocation.latitude},${formData.selectedLocation.longitude}`;
      }
    }
    if (formData.deliveryType === "DineIn") {
      message += `- Table: #${formData.tableNumber}\n`;
    }
    if (formData.note) {
      message += `\n*Note:* _${formData.note}_\n`;
    }
    if (mapLink) {
      message += `\n${mapLink}\n`;
    }

    let whatsappUrl = "";
    let newWhatsappNumber = "";

    if (!formData.selectedBranch?.whatsapp_number) {
      whatsappUrl = buildWhatsappUrl(restaurant.phone_number, message);
    } else {
      newWhatsappNumber = formatWhatsappNumber(formData.selectedBranch?.whatsapp_number, restaurant?.country_code);
      whatsappUrl = buildWhatsappUrl(newWhatsappNumber, message);
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

    // Create order in database (fire-and-forget to avoid iOS popup blocking)
    const simplifiedCartCopy = [...simplifiedCart];
    const fullOrderItemsCopy = [...fullOrderItems];
    handleAddOrderAsync(
      {
        products: simplifiedCartCopy,
        restaurant_id: restaurant.id,
        branch_id: formData.selectedBranch?.id,
        delivery_type: formData.deliveryType,
        customer_name: formData.fullName,
        customer_phone: formData.phoneNumber,
        customer_address: formData.deliveryType === "Delivery" ? formData.fullAddress : null,
        customer_latitude: formData.selectedLocation?.latitude || null,
        customer_longitude: formData.selectedLocation?.longitude || null,
        table_number: formData.deliveryType === "DineIn" ? formData.tableNumber : null,
        note: formData.note,
        items: fullOrderItemsCopy,
        subtotal: totalPrice,
        total: totalPrice,
        currency: restaurant.currency,
      },
      restaurantName
    ).then((orderResponse) => {
      if (restaurant?.id) {
        const branchId = formData.selectedBranch?.id || null;
        trackOrderPlaced(
          restaurant.id,
          orderResponse?.data?.order?.id || null,
          formData.deliveryType,
          totalPrice,
          branchId,
          { items: fullOrderItemsCopy, customerName: formData.fullName }
        );
      }
    }).catch((e) => console.error("Order creation failed:", e));

    // Redirect to WhatsApp immediately (works on iOS WebView)
    window.location.href = whatsappUrl;
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
            restaurantName={restaurantName}
            activeLanguage={activeLanguage}
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

