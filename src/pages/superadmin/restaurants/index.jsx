import React, { useRef } from "react";
import {
  AddRestaurant,
  AddRestaurantForm,
  Arrow,
  BackIcon,
  ColorsBlock,
  ColorSection,
  Container,
  FeaturesBlock,
  FeaturesSection,
  SloganBlock,
  SloganSection,
  FormSectionHeader,
  UploadBtn,
  UploadedImage,
  UploadImageText,
  UploadPhoto,
} from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tabs,
  Tab,
  Typography,
  Alert,
} from "@mui/material";
import { templates } from "./themedata";
import { useAddRestaurantQuery } from "../../../apis/restaurants/addRestaurant";
import { useGetRestaurants } from "../../../apis/restaurants/getRestaurants";
import { useEditRestaurantQuery } from "../../../apis/restaurants/editRestaurant";
import { useDuplicateRestaurantQuery } from "../../../apis/restaurants/duplicateRestaurant";
import { useBulkInsertExcelQuery } from "../../../apis/restaurants/bulkInsertExcel";
import { LoadingButton } from "@mui/lab";
import { useEffect } from "react";
import { isEmpty, rest } from "lodash";
import DeleteRestaurantPopup from "./deleteRestauarantPopup";
import { deleteCookie } from "../../../utilities/manageCookies";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ADMINSIGNIN } from "../../../routes/URLs";
import { useAddRestaurantCoverQuery } from "../../../apis/restaurants/addCoverLogo";
import { useEditRestaurantCoverQuery } from "../../../apis/restaurants/editCoverLogo";
import TableRestaurants from "./tableRestaurants";
import { BADGE_ICON_TYPES } from "../../../constants/badgeIconTypes";
import { useGetBadges } from "../../../apis/badges/getBadges";
import { useAddBadgeQuery } from "../../../apis/badges/addBadge";
import { useEditBadgeQuery } from "../../../apis/badges/editBadge";
import { useDeleteBadgeQuery } from "../../../apis/badges/deleteBadge";
import { useGetValueCards } from "../../../apis/valueCards/getValueCards";
import { useAddValueCardQuery } from "../../../apis/valueCards/addValueCard";
import { useEditValueCardQuery } from "../../../apis/valueCards/editValueCard";
import { useDeleteValueCardQuery } from "../../../apis/valueCards/deleteValueCard";
import { useUpdateValueCardsSectionQuery } from "../../../apis/valueCards/updateValueCardsSection";
import { useGetStatsSection } from "../../../apis/statsSection/getStatsSection";
import { useUpdateStatsSection } from "../../../apis/statsSection/updateStatsSection";
import { useAddStatItem } from "../../../apis/statsSection/addStatItem";
import { useEditStatItem } from "../../../apis/statsSection/editStatItem";
import { useDeleteStatItem } from "../../../apis/statsSection/deleteStatItem";

export default function Restaurants() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedIdForAction, setSelectedIdForAction] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [template, setTemplate] = useState();
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [fileErrMsg, setFileErrMsg] = useState("Please upload image");
  const fileInputRef = useRef(null);
  const [viewColorSection, setViewColorSection] = useState(false);
  const [viewFeaturesSection, setViewFeaturesSection] = useState(false);
  const [viewSloganSection, setViewSloganSection] = useState(false);
  const [badgeDialogOpen, setBadgeDialogOpen] = useState(false);
  const [editingBadge, setEditingBadge] = useState(null);
  const [badgeForm, setBadgeForm] = useState({ en_text: "", ar_text: "", icon_type: "star" });
  const [valueCardDialogOpen, setValueCardDialogOpen] = useState(false);
  const [editingValueCard, setEditingValueCard] = useState(null);
  const [valueCardForm, setValueCardForm] = useState({ en_title: "", ar_title: "", en_description: "", ar_description: "", icon_type: "leaf" });
  const [valueCardSectionForm, setValueCardSectionForm] = useState({ en_section_label: "", ar_section_label: "", en_section_heading: "", ar_section_heading: "" });
  const [statsSectionForm, setStatsSectionForm] = useState({ en_title: "", ar_title: "", en_subtitle: "", ar_subtitle: "" });
  const [statItemDialogOpen, setStatItemDialogOpen] = useState(false);
  const [editingStatItem, setEditingStatItem] = useState(null);
  const [statItemForm, setStatItemForm] = useState({ value_type: "static", value: "", en_label: "", ar_label: "" });
  const [squareDimension, setSquareDimension] = useState(true); // Default false
  const [showExcelModal, setShowExcelModal] = useState(false);
  const [excelTab, setExcelTab] = useState(0); // 0: Normal, 1: Duplicate, 2: Products/Categories
  const [excelFile, setExcelFile] = useState(null);
  const [duplicateSourceId, setDuplicateSourceId] = useState("");
  const [duplicateFormData, setDuplicateFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    phone_number: "",
  });
  const [excelRestaurantId, setExcelRestaurantId] = useState("");
  const [excelUploading, setExcelUploading] = useState(false);
  const [excelMessage, setExcelMessage] = useState(null);
  const [gridSearch, setGridSearch] = useState("");
  const [paymentDateFrom, setPaymentDateFrom] = useState("");
  const [paymentDateTo, setPaymentDateTo] = useState("");
  const [paymentDatePassedOnly, setPaymentDatePassedOnly] = useState(false);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    getValues,
    unregister,
    setValue,
    formState,
    reset,
    watch
  } = useForm();
  // const watchedFeatures = watch("features", {});

  const { response, isLoading, refetch } = useGetRestaurants({
    onSuccess: () => { },
    filterParams: {
      ...(gridSearch.trim() && { search: gridSearch.trim() }),
      ...(paymentDateFrom && { paymentDateFrom }),
      ...(paymentDateTo && { paymentDateTo }),
      ...(paymentDatePassedOnly && { paymentDatePassed: "1" }),
    },
  });

  const refetchRestaurants = () => {
    refetch()
      .then(({ data: { data } }) => setRestaurants(data))
      .catch((err) => console.log(err));
  };

  const { handleApiCall: editRestaurantCover } = useEditRestaurantCoverQuery({
    onSuccess: () => {
    },
  });

  const restaurantIdForBadges = selectedProduct?.restaurant_id;
  const isTemplate4 = Number(template) === 4;
  const { response: badgesResponse, refetch: refetchBadges } = useGetBadges({
    restaurant_id: restaurantIdForBadges,
    enabled: !!restaurantIdForBadges && isTemplate4,
  });
  const badgesList = badgesResponse?.data ?? [];
  const { mutate: addBadgeMutate } = useAddBadgeQuery({
    restaurant_id: restaurantIdForBadges,
    onSuccess: () => refetchBadges(),
  });
  const { mutate: editBadgeMutate } = useEditBadgeQuery({
    restaurant_id: restaurantIdForBadges,
    onSuccess: () => refetchBadges(),
  });
  const { mutate: deleteBadgeMutate } = useDeleteBadgeQuery({
    restaurant_id: restaurantIdForBadges,
    onSuccess: () => refetchBadges(),
  });

  const openAddBadge = () => {
    setEditingBadge(null);
    setBadgeForm({ en_text: "", ar_text: "", icon_type: "star" });
    setBadgeDialogOpen(true);
  };
  const openEditBadge = (b) => {
    setEditingBadge(b);
    setBadgeForm({
      en_text: b.en_text || "",
      ar_text: b.ar_text || "",
      icon_type: b.icon_type || "star",
    });
    setBadgeDialogOpen(true);
  };
  const saveBadge = () => {
    if (editingBadge) {
      editBadgeMutate(
        { id: editingBadge.id, en_text: badgeForm.en_text, ar_text: badgeForm.ar_text, icon_type: badgeForm.icon_type },
        { onSettled: () => setBadgeDialogOpen(false) }
      );
    } else {
      addBadgeMutate(
        {
          restaurant_id: restaurantIdForBadges,
          en_text: badgeForm.en_text,
          ar_text: badgeForm.ar_text,
          icon_type: badgeForm.icon_type,
        },
        { onSettled: () => setBadgeDialogOpen(false) }
      );
    }
  };

  const { response: valueCardsResponse, refetch: refetchValueCards } = useGetValueCards({
    restaurant_id: restaurantIdForBadges,
    enabled: !!restaurantIdForBadges && isTemplate4,
  });
  const valueCardsData = valueCardsResponse?.data ?? {};
  const valueCardsList = valueCardsData?.cards ?? [];
  const valueCardsSection = valueCardsData?.section ?? null;
  const { mutate: addValueCardMutate } = useAddValueCardQuery({
    restaurant_id: restaurantIdForBadges,
    onSuccess: () => refetchValueCards(),
  });
  const { mutate: editValueCardMutate } = useEditValueCardQuery({
    restaurant_id: restaurantIdForBadges,
    onSuccess: () => refetchValueCards(),
  });
  const { mutate: deleteValueCardMutate } = useDeleteValueCardQuery({
    restaurant_id: restaurantIdForBadges,
    onSuccess: () => refetchValueCards(),
  });
  const { mutate: updateValueCardsSectionMutate } = useUpdateValueCardsSectionQuery({
    restaurant_id: restaurantIdForBadges,
    onSuccess: () => refetchValueCards(),
  });

  const { section: statsSection, items: statItemsList, refetch: refetchStatsSection } = useGetStatsSection({
    restaurant_id: restaurantIdForBadges,
    enabled: !!restaurantIdForBadges && isTemplate4,
  });
  const { mutate: updateStatsSectionMutate } = useUpdateStatsSection({
    restaurant_id: restaurantIdForBadges,
    onSuccess: () => refetchStatsSection(),
  });
  const { mutate: addStatItemMutate } = useAddStatItem({
    restaurant_id: restaurantIdForBadges,
    onSuccess: () => refetchStatsSection(),
  });
  const { mutate: editStatItemMutate } = useEditStatItem({
    restaurant_id: restaurantIdForBadges,
    onSuccess: () => refetchStatsSection(),
  });
  const { mutate: deleteStatItemMutate } = useDeleteStatItem({
    restaurant_id: restaurantIdForBadges,
    onSuccess: () => refetchStatsSection(),
  });

  useEffect(() => {
    if (valueCardsSection && isTemplate4) {
      setValueCardSectionForm({
        en_section_label: valueCardsSection.en_section_label || "",
        ar_section_label: valueCardsSection.ar_section_label || "",
        en_section_heading: valueCardsSection.en_section_heading || "",
        ar_section_heading: valueCardsSection.ar_section_heading || "",
      });
    }
  }, [valueCardsSection, isTemplate4]);

  useEffect(() => {
    if (statsSection && isTemplate4) {
      setStatsSectionForm({
        en_title: statsSection.en_title || "",
        ar_title: statsSection.ar_title || "",
        en_subtitle: statsSection.en_subtitle || "",
        ar_subtitle: statsSection.ar_subtitle || "",
      });
    }
  }, [statsSection, isTemplate4]);

  const saveStatsSection = () => {
    updateStatsSectionMutate({
      restaurant_id: restaurantIdForBadges,
      en_title: statsSectionForm.en_title,
      ar_title: statsSectionForm.ar_title,
      en_subtitle: statsSectionForm.en_subtitle,
      ar_subtitle: statsSectionForm.ar_subtitle,
    });
  };

  const openAddStatItem = () => {
    setEditingStatItem(null);
    setStatItemForm({ value_type: "static", value: "", en_label: "", ar_label: "" });
    setStatItemDialogOpen(true);
  };
  const openEditStatItem = (item) => {
    setEditingStatItem(item);
    setStatItemForm({
      value_type: item.value_type || "static",
      value: item.value || "",
      en_label: item.en_label || "",
      ar_label: item.ar_label || "",
    });
    setStatItemDialogOpen(true);
  };
  const saveStatItem = () => {
    if (editingStatItem) {
      editStatItemMutate({
        id: editingStatItem.id,
        value_type: statItemForm.value_type,
        value: statItemForm.value_type === "products_count" ? null : statItemForm.value,
        en_label: statItemForm.en_label,
        ar_label: statItemForm.ar_label,
      }, { onSettled: () => setStatItemDialogOpen(false) });
    } else {
      addStatItemMutate({
        restaurant_id: restaurantIdForBadges,
        display_order: statItemsList.length,
        value_type: statItemForm.value_type,
        value: statItemForm.value_type === "products_count" ? null : statItemForm.value,
        en_label: statItemForm.en_label,
        ar_label: statItemForm.ar_label,
      }, { onSettled: () => setStatItemDialogOpen(false) });
    }
  };

  const openAddValueCard = () => {
    setEditingValueCard(null);
    setValueCardForm({ en_title: "", ar_title: "", en_description: "", ar_description: "", icon_type: "leaf" });
    setValueCardDialogOpen(true);
  };
  const openEditValueCard = (c) => {
    setEditingValueCard(c);
    setValueCardForm({
      en_title: c.en_title || "",
      ar_title: c.ar_title || "",
      en_description: c.en_description || "",
      ar_description: c.ar_description || "",
      icon_type: c.icon_type || "leaf",
    });
    setValueCardDialogOpen(true);
  };
  const saveValueCard = () => {
    if (editingValueCard) {
      editValueCardMutate(
        {
          id: editingValueCard.id,
          en_title: valueCardForm.en_title,
          ar_title: valueCardForm.ar_title,
          en_description: valueCardForm.en_description,
          ar_description: valueCardForm.ar_description,
          icon_type: valueCardForm.icon_type,
        },
        { onSettled: () => setValueCardDialogOpen(false) }
      );
    } else {
      addValueCardMutate(
        {
          restaurant_id: restaurantIdForBadges,
          en_title: valueCardForm.en_title,
          ar_title: valueCardForm.ar_title,
          en_description: valueCardForm.en_description,
          ar_description: valueCardForm.ar_description,
          icon_type: valueCardForm.icon_type,
        },
        { onSettled: () => setValueCardDialogOpen(false) }
      );
    }
  };
  const saveValueCardsSection = () => {
    updateValueCardsSectionMutate({
      restaurant_id: restaurantIdForBadges,
      en_section_label: valueCardSectionForm.en_section_label,
      ar_section_label: valueCardSectionForm.ar_section_label,
      en_section_heading: valueCardSectionForm.en_section_heading,
      ar_section_heading: valueCardSectionForm.ar_section_heading,
    });
  };

  const { handleApiCall: handleEditApi, isPending: isEditing } =
    useEditRestaurantQuery({
      onSuccess: (response) => {
        const restaurantId = response?.data?.id;
        if (restaurantId && file) {
          editRestaurantCover({
            id: restaurantId,
            cover_url: file,
          });
        }
        // Show success alert
        alert("Restaurant updated successfully!");
        // Refetch restaurants to update the list
        refetchRestaurants();
        // Keep the form open - don't call resetComponent()
      },
    });

  const { handleApiCall: addRestaurantCover, isPending: isAddingCover } = useAddRestaurantCoverQuery({
    onSuccess: () => {
    },
  });



  const { handleApiCall, isPending } = useAddRestaurantQuery({
    onSuccess: (response) => {
      const restaurantId = response?.data?.id;
      if (restaurantId && file) {
        addRestaurantCover({
          id: restaurantId,
          cover_url: file,
        });
      }
      resetComponent()
    },
  });

  const { handleApiCall: handleDuplicateRestaurant, isPending: isDuplicating } = useDuplicateRestaurantQuery({
    onSuccess: (response) => {
      alert("Restaurant duplicated successfully!");
      setShowExcelModal(false);
      setDuplicateFormData({ name: "", username: "", password: "", email: "", phone_number: "" });
      setDuplicateSourceId("");
      refetchRestaurants();
    },
    onError: (error) => {
      alert(error.response?.data?.message || "Failed to duplicate restaurant");
    },
  });

  const { handleApiCall: handleBulkInsertExcel, isPending: isBulkInserting } = useBulkInsertExcelQuery({
    onSuccess: (response) => {
      const log = response.data?.log || [];
      const logMessage = log.length > 0 ? log.join("\n") : "Products and categories imported successfully!";
      setExcelMessage({ type: "success", text: logMessage });
      setTimeout(() => {
        setShowExcelModal(false);
        setExcelFile(null);
        setExcelRestaurantId("");
        setExcelMessage(null);
        refetchRestaurants();
      }, 3000);
    },
    onError: (error) => {
      setExcelMessage({ 
        type: "error", 
        text: error.response?.data?.message || "Failed to import Excel file" 
      });
    },
  });

  const resetComponent = () => {
    reset();
    refetchRestaurants();
    setSelectedIdForAction(null);
    setSelectedProduct(null);
    setShowAddComponent(false);
    handleOnDeleteImage();
    setIsEditMode(false)
  }

  const handleSquareDimension = (event) => {
    setSquareDimension(!squareDimension); // Toggle between true/false
    setValue("square_dimension", !squareDimension);

  };




  const handletemplate = (e) => {
    const newTemplateId = e.target.value;
    setValue("template_id", newTemplateId, { shouldValidate: true });
    // Should empty all fields except these fields (keep template_id so it saves)
    const keepFields = ["username", "password", "language", "template_id"];
    Object.keys(getValues()).map((key) => {
      const shouldDeleteField = keepFields.every((field) => field !== key);
      if (shouldDeleteField) {
        unregister(key);
        setValue(key, undefined);
      }
    });
    setTemplate(newTemplateId);
  };

  useEffect(() => {
    if (!isLoading && response?.data) {
      setRestaurants(response.data);
    }
  }, [isLoading, response]);

  const handleEdit = ({
    username,
    phone_number,
    email,
    restaurantName,
    languages,
    template_id,
    theme: themeString,
    features: featureString,
    restaurant_id,
    currency,
    category_type,
    font,
    cover_url,
    font_size,
    square_dimension,
    has_slider,
    is_valid,
    IsValid,
    en_slogan,
    ar_slogan,
    en_slogan_subtext,
    ar_slogan_subtext,
    default_language,
    show_all_items_category,
    business_type,
    all_items_style,
    product_details_carousel_style,
    payment_date,
    amount,
    is_paid,
  }) => {
    const theme = JSON.parse(themeString);
    const features = JSON.parse(featureString);
    
    setSelectedProduct({
      languages,
      template_id,
      theme,
      features,
      restaurant_id,
      currency,
      category_type,
      font,
      cover_url,
      font_size,
      square_dimension,
      has_slider,
      is_valid,
      IsValid,
      en_slogan,
      ar_slogan,
      en_slogan_subtext,
      ar_slogan_subtext,
      default_language,
      show_all_items_category,
      business_type,
      all_items_style,
      product_details_carousel_style,
      payment_date,
      amount,
      is_paid,
    });
    setIsEditMode(true);
    setTemplate(template_id);
    setValue("template_id", template_id);
    setValue("username", username);
    setValue("features", features);

    setValue("phone_number", phone_number);
    setValue("email", email);
    setValue("name", restaurantName);
    setValue("currency", currency);
    setValue("category_type", category_type);

    setValue("font", font);
    setValue("font_size", font_size);
    setValue("square_dimension", square_dimension);
    setValue("has_slider", has_slider || false);
    setValue("is_valid", is_valid !== undefined ? is_valid : (IsValid !== undefined ? IsValid : true));
    setValue("en_slogan", en_slogan || "");
    setValue("ar_slogan", ar_slogan || "");
    setValue("en_slogan_subtext", en_slogan_subtext || "");
    setValue("ar_slogan_subtext", ar_slogan_subtext || "");
    setValue("default_language", default_language || "en");
    setValue("show_all_items_category", !!show_all_items_category);
    setValue("business_type", business_type || "restaurant");
    setValue("all_items_style", all_items_style || "grid");
    setValue("product_details_carousel_style", product_details_carousel_style || "normal");
    setValue("payment_date", payment_date ? (payment_date.split?.("T")?.[0] ?? payment_date) : "");
    setValue("amount", amount != null && amount !== "" ? amount : "");
    setValue("is_paid", !!is_paid);
    
    // Set theme colors in form: for the current template, set every color from DB or default
    const templateConfig = templates.find((t) => t.id == template_id);
    const themeKey = (key) => theme[key] ?? theme[key?.toLowerCase?.()] ?? theme[key?.toUpperCase?.()];
    if (templateConfig?.colors) {
      templateConfig.colors.forEach((colorKey) => {
        const value = themeKey(colorKey) ?? (colorKey === "homepageBackgroundColor" ? "#ffffff" : "");
        setValue(`theme.[${colorKey}]`, value);
      });
    }
    // Also set any extra keys that might exist in theme (e.g. legacy keys)
    Object.keys(theme).forEach((key) => {
      if (!templateConfig?.colors?.includes(key)) {
        setValue(`theme.[${key}]`, theme[key]);
      }
    });
    
    if (cover_url) {
      setImageUrl(
        `https://storage.googleapis.com/ecommerce-bucket-testing/${cover_url}`
      );
    }
    setShowAddComponent(true);
    setSquareDimension(square_dimension);

    // Add restaurant ID to URL
    setSearchParams({ id: restaurant_id });
  };

  const handleAddRestaurant = () => {
    handleSubmit(
      (data) => {
        console.log("Form data:", data);
        
        // Reconstruct theme object from form data
        const theme = data.theme || {};
        const themeObject = {};
        Object.keys(theme).forEach((key) => {
          // Remove brackets from key if present (e.g., "[mainColor]" -> "mainColor")
          const cleanKey = key.replace(/[\[\]]/g, '');
          themeObject[cleanKey] = theme[key];
        });
        
        // Ensure homepageBackgroundColor has a default value if missing
        if (!themeObject.homepageBackgroundColor || themeObject.homepageBackgroundColor.trim() === '') {
          themeObject.homepageBackgroundColor = "#ffffff";
        }
        
        // Ensure has_slider and is_valid are always sent (even if false)
        const formData = {
          ...data,
          theme: themeObject, // Replace theme with properly constructed object
          template_id: data.template_id ?? selectedProduct?.template_id,
          has_slider: data.has_slider === true || data.has_slider === "true" || data.has_slider === 1,
          is_valid: data.is_valid === true || data.is_valid === "true" || data.is_valid === 1,
          default_language: data.default_language || "en", // Ensure default_language is always set
          show_all_items_category:
            data.show_all_items_category === true ||
            data.show_all_items_category === "true" ||
            data.show_all_items_category === 1,
          business_type: data.business_type || "restaurant",
          all_items_style: data.all_items_style || "grid",
          product_details_carousel_style: data.product_details_carousel_style || "normal",
          payment_date: data.payment_date || null,
          amount: data.amount != null && data.amount !== "" ? data.amount : null,
          is_paid: data.is_paid === true || data.is_paid === "true" || data.is_paid === 1,
        };
        console.log("Formatted form data:", formData);
        if (selectedProduct) {
          console.log("Editing restaurant:", selectedProduct.restaurant_id);
          handleEditApi(selectedProduct.restaurant_id, formData);
        } else {
          console.log("Adding new restaurant");
          handleApiCall(formData);
        }
      },
      (errors) => {
        console.error("Form validation errors:", errors);
        console.error("Form state errors:", formState.errors);
      }
    )();
  };



  const handleFileChange = ({ target }) => {
    if (target.files[0]) {
      const uploadedFile = target.files[0];
      const fileSizeInMB = uploadedFile.size / (1024 * 1024);
      if (fileSizeInMB > 4) {
        setFileErrMsg("Image is greater than 4MB");
        return;
      } else {
        setFileErrMsg("Please upload image");
      }
      setFile(target.files[0]);
      const url = URL.createObjectURL(target.files[0]);
      setImageUrl(url);
    }
    target.value = null;
  };

  const handleOnDeleteImage = () => {
    setImageUrl(null);
    setFile(null);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };


  const mainFields = [
    { label: "UserName", name: "username", required: true },
    { label: "Password", name: "password", required: !isEditMode },
    { label: "Phone", name: "phone_number", required: true },
    { label: "Email", name: "email", required: true },
    { label: "Restaurant name", name: "name", required: true }
  ];


  return (
    <Container>
      {!showAddComponent ? (
        <>
          <DeleteRestaurantPopup
            refetchRestaurant={refetchRestaurants}
            isOpen={isPopupOpen}
            selectedIdForAction={selectedIdForAction}
            setIsOpen={setIsPopupOpen}
          />
          <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
            <AddRestaurant onClick={() => setShowAddComponent(true)}>
              Add Restaurant
            </AddRestaurant>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                textTransform: "capitalize",
              }}
              onClick={() => setShowExcelModal(true)}
            >
              Add Restaurant via Excel
            </Button>
          </div>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", mb: 2 }}>
            <TextField
              size="small"
              placeholder="Search name, username, phone..."
              value={gridSearch}
              onChange={(e) => setGridSearch(e.target.value)}
              sx={{ minWidth: 220 }}
            />
            <TextField
              size="small"
              label="Payment date from"
              type="date"
              value={paymentDateFrom}
              onChange={(e) => setPaymentDateFrom(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{ width: 160 }}
            />
            <TextField
              size="small"
              label="Payment date to"
              type="date"
              value={paymentDateTo}
              onChange={(e) => setPaymentDateTo(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{ width: 160 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={paymentDatePassedOnly}
                  onChange={(e) => setPaymentDatePassedOnly(e.target.checked)}
                />
              }
              label="Need renewal (payment date passed)"
            />
          </Box>
          {/* <Table>
            <thead>
              <tr>
                <Th>User name</Th>
                <Th>Restaurant name</Th>
                <Th>Phone</Th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant) => {
                return (
                  <tr>
                    <Td>{restaurant.username}</Td>
                    <Td>{restaurant.restaurantName}</Td>
                    <Td>{restaurant.phone_number}</Td>
                    <Td>
                      <EditDeleteIcons>
                        <Edit onClick={() => handleEdit(restaurant)} />
                        <Delete
                          onClick={() => {
                            setSelectedIdForAction(restaurant.restaurant_id);
                            setIsPopupOpen(true);
                          }}
                        />
                      </EditDeleteIcons>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </Table> */}
          <TableRestaurants
            restaurants={restaurants}
            setSelectedIdForAction={setSelectedIdForAction}
            setIsPopupOpen={setIsPopupOpen}
            handleEdit={handleEdit}
          />
          <Button
            style={{
              alignSelf: "flex-start",
              marginLeft: "20px",
              marginTop: "40px",
              textTransform: "capitalize",
              width: "150px",
              color: "white",
              backgroundColor: "turquoise",
            }}
            variant="contained"
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              deleteCookie("accessToken");
              deleteCookie("userInfo");
              navigate(ADMINSIGNIN);
            }}
          >
            Logout
          </Button>
          
          {/* Excel Upload Modal */}
          <Dialog 
            open={showExcelModal} 
            onClose={() => {
              setShowExcelModal(false);
              setExcelTab(0);
              setExcelFile(null);
              setDuplicateSourceId("");
              setDuplicateFormData({ name: "", username: "", password: "", email: "", phone_number: "" });
              setExcelRestaurantId("");
              setExcelMessage(null);
            }}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle>Add Restaurant via Excel</DialogTitle>
            <DialogContent>
              <Tabs value={excelTab} onChange={(e, newValue) => setExcelTab(newValue)}>
                <Tab label="Normal Creation" />
                <Tab label="Duplicate Restaurant" />
                <Tab label="Import Products/Categories" />
              </Tabs>
              
              {excelMessage && (
                <Alert severity={excelMessage.type} style={{ marginTop: "16px" }}>
                  {excelMessage.text}
                </Alert>
              )}
              
              {excelTab === 0 && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Use the "Add Restaurant" button above to create a restaurant normally, then use the "Import Products/Categories" tab to add products and categories from Excel.
                  </Typography>
                </Box>
              )}
              
              {excelTab === 1 && (
                <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel>Select Restaurant to Duplicate</InputLabel>
                    <Select
                      value={duplicateSourceId}
                      onChange={(e) => setDuplicateSourceId(e.target.value)}
                      label="Select Restaurant to Duplicate"
                    >
                      {restaurants.map((restaurant) => (
                        <MenuItem key={restaurant.restaurant_id} value={restaurant.restaurant_id}>
                          {restaurant.restaurantName} ({restaurant.username})
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                  <TextField
                    label="New Restaurant Name"
                    value={duplicateFormData.name}
                    onChange={(e) => setDuplicateFormData({ ...duplicateFormData, name: e.target.value })}
                    required
                    fullWidth
                  />
                  
                  <TextField
                    label="New Username"
                    value={duplicateFormData.username}
                    onChange={(e) => setDuplicateFormData({ ...duplicateFormData, username: e.target.value })}
                    required
                    fullWidth
                  />
                  
                  <TextField
                    label="New Password"
                    type="password"
                    value={duplicateFormData.password}
                    onChange={(e) => setDuplicateFormData({ ...duplicateFormData, password: e.target.value })}
                    required
                    fullWidth
                  />
                  
                  <TextField
                    label="Email (Optional)"
                    type="email"
                    value={duplicateFormData.email}
                    onChange={(e) => setDuplicateFormData({ ...duplicateFormData, email: e.target.value })}
                    fullWidth
                  />
                  
                  <TextField
                    label="Phone Number (Optional)"
                    value={duplicateFormData.phone_number}
                    onChange={(e) => setDuplicateFormData({ ...duplicateFormData, phone_number: e.target.value })}
                    fullWidth
                  />
                  
                  <LoadingButton
                    variant="contained"
                    onClick={() => {
                      if (!duplicateSourceId || !duplicateFormData.name || !duplicateFormData.username || !duplicateFormData.password) {
                        alert("Please fill in all required fields");
                        return;
                      }
                      handleDuplicateRestaurant({
                        source_restaurant_id: parseInt(duplicateSourceId),
                        ...duplicateFormData,
                      });
                    }}
                    loading={isDuplicating}
                    disabled={!duplicateSourceId || !duplicateFormData.name || !duplicateFormData.username || !duplicateFormData.password}
                  >
                    Duplicate Restaurant
                  </LoadingButton>
                </Box>
              )}
              
              {excelTab === 2 && (
                <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel>Select Restaurant</InputLabel>
                    <Select
                      value={excelRestaurantId}
                      onChange={(e) => setExcelRestaurantId(e.target.value)}
                      label="Select Restaurant"
                    >
                      {restaurants.map((restaurant) => (
                        <MenuItem key={restaurant.restaurant_id} value={restaurant.restaurant_id}>
                          {restaurant.restaurantName} ({restaurant.username})
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                  <Button
                    variant="outlined"
                    component="label"
                    fullWidth
                  >
                    {excelFile ? excelFile.name : "Upload Excel File"}
                    <input
                      type="file"
                      hidden
                      accept=".xlsx,.xls"
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          setExcelFile(e.target.files[0]);
                        }
                      }}
                    />
                  </Button>
                  
                  {excelFile && (
                    <Typography variant="body2" color="text.secondary">
                      Selected: {excelFile.name}
                    </Typography>
                  )}
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Excel file should contain sheets: "Categories", "Products", and optionally "FormComponents"
                  </Typography>
                  
                  <LoadingButton
                    variant="contained"
                    onClick={() => {
                      if (!excelRestaurantId) {
                        alert("Please select a restaurant from the dropdown");
                        return;
                      }
                      if (!excelFile) {
                        alert("Please upload an Excel file");
                        return;
                      }
                      handleBulkInsertExcel({
                        restaurant_id: parseInt(excelRestaurantId),
                        excel_file: excelFile,
                      });
                    }}
                    loading={isBulkInserting}
                    disabled={!excelRestaurantId || !excelFile || isBulkInserting}
                  >
                    Import Products & Categories
                  </LoadingButton>
                </Box>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => {
                setShowExcelModal(false);
                setExcelTab(0);
                setExcelFile(null);
                setDuplicateSourceId("");
                setDuplicateFormData({ name: "", username: "", password: "", email: "", phone_number: "" });
                setExcelRestaurantId("");
                setExcelMessage(null);
              }}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <>
          <AddRestaurantForm>
            {console.log(selectedProduct?.features)}
            <BackIcon
              onClick={() => {
                reset();
                setSelectedIdForAction(null);
                setSelectedProduct(null);
                setShowAddComponent(false);
                handleOnDeleteImage();
                setIsEditMode(false);
                // Remove restaurant ID from URL when closing
                setSearchParams({});
              }}
            />


            {mainFields.map(({ label, name, required }) => (
              <TextField
                key={name}
                label={label}
                variant="outlined"
                name={name}
                {...register(name, required && { required: "Required" })}
                error={!isEmpty(formState?.errors?.[name])}
                helperText={
                  !isEmpty(formState?.errors?.[name]) && formState.errors?.[name].message
                }
                style={{ width: "30%" }}
                InputLabelProps={required ? { required: true } : undefined}
              />
            ))}
            <Box sx={{ width: "30%" }}>
              <FormControl fullWidth>
                <InputLabel required>Language</InputLabel>
                <Select
                  label="Language"
                  {...register("languages", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.languages)}
                  defaultValue={selectedProduct?.languages}
                >
                  <MenuItem value="en">En</MenuItem>
                  <MenuItem value="ar">Ar</MenuItem>
                  <MenuItem value="en&ar">En/Ar</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: "30%" }}>
              <FormControl fullWidth>
                <InputLabel required>Default Language</InputLabel>
                <Select
                  label="Default Language"
                  {...register("default_language", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.default_language)}
                  defaultValue={selectedProduct?.default_language || "en"}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="ar">Arabic</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: "30%" }}>
              <FormControl fullWidth>
                <InputLabel required>Currency</InputLabel>
                <Select
                  label="Currency"
                  {...register("currency", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.currency)}
                  defaultValue={selectedProduct?.currency}
                >
                  <MenuItem value="dollar">Dollar</MenuItem>
                  <MenuItem value="lb">Lb</MenuItem>
                  <MenuItem value="gram">Gram</MenuItem>
                  <MenuItem value="killogram">KilloGram</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Square Dimension</FormLabel>
              <FormControlLabel
                control={<Checkbox checked={squareDimension} onChange={handleSquareDimension} />}
                label="Square Dimension"
                {...register("square_dimension", { required: "Required" })}
              />
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Has Slider</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox 
                    {...register("has_slider")} 
                    defaultChecked={selectedProduct?.has_slider || false}
                    onChange={(e) => {
                      setValue("has_slider", e.target.checked);
                    }}
                  />
                }
                label="Enable Slider on Homepage"
              />
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Is Valid</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox 
                    {...register("is_valid")} 
                    defaultChecked={selectedProduct?.is_valid !== undefined ? selectedProduct.is_valid : (selectedProduct?.IsValid !== undefined ? selectedProduct.IsValid : true)}
                    onChange={(e) => {
                      setValue("is_valid", e.target.checked);
                    }}
                  />
                }
                label="Restaurant is Valid/Active"
              />
            </FormControl>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", mt: 1 }}>
              <TextField
                label="Payment Date"
                type="date"
                {...register("payment_date")}
                InputLabelProps={{ shrink: true }}
                style={{ width: "180px" }}
              />
              <TextField
                label="Amount"
                type="number"
                inputProps={{ step: 0.01, min: 0 }}
                {...register("amount")}
                style={{ width: "120px" }}
              />
              <FormControl component="fieldset" style={{ display: "inline-flex" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...register("is_paid")}
                      defaultChecked={!!selectedProduct?.is_paid}
                      onChange={(e) => setValue("is_paid", e.target.checked)}
                    />
                  }
                  label="Is Paid"
                />
              </FormControl>
            </Box>
            <FormSectionHeader>Slogan & Slogan Subtext</FormSectionHeader>
            <SloganSection onClick={() => setViewSloganSection(!viewSloganSection)}>
              {viewSloganSection ? "▼ Collapse" : "▶ Expand"} Slogan fields
              <Arrow />
            </SloganSection>
            <SloganBlock viewSloganSection={viewSloganSection}>
              <Box sx={{ width: "48%" }}>
                <TextField
                  label="Slogan (English)"
                  {...register("en_slogan")}
                  defaultValue={selectedProduct?.en_slogan || ""}
                  fullWidth
                  multiline
                  rows={2}
                />
              </Box>
              <Box sx={{ width: "48%" }}>
                <TextField
                  label="Slogan (Arabic)"
                  {...register("ar_slogan")}
                  defaultValue={selectedProduct?.ar_slogan || ""}
                  fullWidth
                  multiline
                  rows={2}
                />
              </Box>
              <Box sx={{ width: "48%" }}>
                <TextField
                  label="Slogan Subtext (English)"
                  {...register("en_slogan_subtext")}
                  defaultValue={selectedProduct?.en_slogan_subtext || ""}
                  fullWidth
                  multiline
                  rows={2}
                />
              </Box>
              <Box sx={{ width: "48%" }}>
                <TextField
                  label="Slogan Subtext (Arabic)"
                  {...register("ar_slogan_subtext")}
                  defaultValue={selectedProduct?.ar_slogan_subtext || ""}
                  fullWidth
                  multiline
                  rows={2}
                />
              </Box>
            </SloganBlock>
            {isTemplate4 && selectedProduct && (
              <>
                <FormSectionHeader>Badges (theme4 hero)</FormSectionHeader>
                <Box sx={{ width: "100%", mt: 1, mb: 2 }}>
                <Button variant="outlined" size="small" onClick={openAddBadge} sx={{ mb: 1 }}>
                  Add Badge
                </Button>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {badgesList.map((b) => (
                    <Box
                      key={b.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        padding: "6px 10px",
                        border: "1px solid #ccc",
                        borderRadius: 1,
                        backgroundColor: "#fafafa",
                      }}
                    >
                      <span>{b.en_text || b.ar_text || "(no text)"}</span>
                      <Button size="small" onClick={() => openEditBadge(b)}>
                        Edit
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        onClick={() => deleteBadgeMutate(b.id)}
                      >
                        Delete
                      </Button>
                    </Box>
                  ))}
                </Box>
                </Box>
                <FormSectionHeader>Value Cards (theme4 – Why Us section)</FormSectionHeader>
                <Box sx={{ width: "100%", mt: 1, mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Section label & heading (e.g. &quot;Why Reflex&quot; / &quot;Food your pets will love&quot;)
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
                    <TextField
                      label="Section label (EN)"
                      size="small"
                      value={valueCardSectionForm.en_section_label}
                      onChange={(e) => setValueCardSectionForm((p) => ({ ...p, en_section_label: e.target.value }))}
                      sx={{ width: "220px" }}
                    />
                    <TextField
                      label="Section label (AR)"
                      size="small"
                      value={valueCardSectionForm.ar_section_label}
                      onChange={(e) => setValueCardSectionForm((p) => ({ ...p, ar_section_label: e.target.value }))}
                      sx={{ width: "220px" }}
                    />
                    <TextField
                      label="Section heading (EN)"
                      size="small"
                      value={valueCardSectionForm.en_section_heading}
                      onChange={(e) => setValueCardSectionForm((p) => ({ ...p, en_section_heading: e.target.value }))}
                      sx={{ minWidth: "260px", flex: 1 }}
                    />
                    <TextField
                      label="Section heading (AR)"
                      size="small"
                      value={valueCardSectionForm.ar_section_heading}
                      onChange={(e) => setValueCardSectionForm((p) => ({ ...p, ar_section_heading: e.target.value }))}
                      sx={{ minWidth: "260px", flex: 1 }}
                    />
                    <Button variant="contained" size="small" onClick={saveValueCardsSection}>
                      Update section
                    </Button>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Cards (icon + title + description)
                  </Typography>
                  <Button variant="outlined" size="small" onClick={openAddValueCard} sx={{ mb: 1 }}>
                    Add Value Card
                  </Button>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {valueCardsList.map((c) => (
                      <Box
                        key={c.id}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          padding: "6px 10px",
                          border: "1px solid #ccc",
                          borderRadius: 1,
                          backgroundColor: "#fafafa",
                        }}
                      >
                        <span>{c.en_title || c.ar_title || "(no title)"}</span>
                        <Button size="small" onClick={() => openEditValueCard(c)}>
                          Edit
                        </Button>
                        <Button size="small" color="error" onClick={() => deleteValueCardMutate(c.id)}>
                          Delete
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <FormSectionHeader>Stats section (theme4 – Trusted by owners)</FormSectionHeader>
                <Box sx={{ width: "100%", mt: 1, mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Title &amp; subtitle (e.g. &quot;Trusted by 5,000+ owners&quot; / &quot;Across the region&quot;). Add stat items below; use &quot;Products count&quot; for live product count from DB.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
                    <TextField label="Title (EN)" size="small" value={statsSectionForm.en_title} onChange={(e) => setStatsSectionForm((p) => ({ ...p, en_title: e.target.value }))} sx={{ width: "220px" }} />
                    <TextField label="Title (AR)" size="small" value={statsSectionForm.ar_title} onChange={(e) => setStatsSectionForm((p) => ({ ...p, ar_title: e.target.value }))} sx={{ width: "220px" }} />
                    <TextField label="Subtitle (EN)" size="small" value={statsSectionForm.en_subtitle} onChange={(e) => setStatsSectionForm((p) => ({ ...p, en_subtitle: e.target.value }))} sx={{ width: "220px" }} />
                    <TextField label="Subtitle (AR)" size="small" value={statsSectionForm.ar_subtitle} onChange={(e) => setStatsSectionForm((p) => ({ ...p, ar_subtitle: e.target.value }))} sx={{ width: "220px" }} />
                    <Button variant="contained" size="small" onClick={saveStatsSection}>Update section</Button>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Stat items (value + label, or Products count from DB)</Typography>
                  <Button variant="outlined" size="small" onClick={openAddStatItem} sx={{ mb: 1 }}>Add stat item</Button>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {(statItemsList || []).map((item) => (
                      <Box key={item.id} sx={{ display: "flex", alignItems: "center", gap: 1, padding: "6px 10px", border: "1px solid #ccc", borderRadius: 1, backgroundColor: "#fafafa" }}>
                        <span>{item.value_type === "products_count" ? "(Products count)" : (item.value || "—")} – {item.en_label || item.ar_label || "(no label)"}</span>
                        <Button size="small" onClick={() => openEditStatItem(item)}>Edit</Button>
                        <Button size="small" color="error" onClick={() => deleteStatItemMutate(item.id)}>Delete</Button>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </>
            )}
            <Box sx={{ width: "30%" }}>
              <FormControl fullWidth>
                <InputLabel required>Category Type</InputLabel>
                <Select
                  label="Category Type"
                  {...register("category_type", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.category_type)}
                  defaultValue={selectedProduct?.category_type}
                >
                  <MenuItem value="vertical-category">vertical-category</MenuItem>
                  <MenuItem value="horizantal-withoutIcon">horizantal-withoutIcon</MenuItem>

                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: "30%" }}>
              <FormControl fullWidth>
                <InputLabel required>Font</InputLabel>
                <Select
                  label="Font"
                  {...register("font", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.font)}
                  defaultValue={selectedProduct?.font}
                >
                  <MenuItem value="Arial">Arial</MenuItem>
                  <MenuItem value="Times New Roman">Times New Roman</MenuItem>
                  <MenuItem value="Courier New">Courier New</MenuItem>
                  <MenuItem value="Georgia">Georgia</MenuItem>
                  <MenuItem value="Verdana">Verdana</MenuItem>
                  <MenuItem value="Roboto Flex">Roboto Flex</MenuItem>
                  <MenuItem value="Teko">Teko</MenuItem>
                  <MenuItem value="Gotu">Gotu</MenuItem>


                </Select>
              </FormControl>
            </Box>

            <Box sx={{ width: "30%" }}>
              <FormControl fullWidth>
                <InputLabel required>Font Size</InputLabel>
                <Select
                  label="Font Size"
                  {...register("font_size", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.font_size)}
                  defaultValue={selectedProduct?.font_size}
                >
                  <MenuItem value="14px">14px</MenuItem>
                  <MenuItem value="15px">15px</MenuItem>
                  <MenuItem value="16px">16px</MenuItem>
                  <MenuItem value="17px">17px</MenuItem>
                  <MenuItem value="18px">18px</MenuItem>

                </Select>
              </FormControl>
            </Box>


            <UploadPhoto
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            {imageUrl ? (
              <Button
                variant="contained"
                color="error"
                style={{ width: "150px", height: "40px" }}
                onClick={() => handleOnDeleteImage()}
              >
                Delete
              </Button>
            ) : (
              <UploadBtn onClick={handleButtonClick}>Upload Image</UploadBtn>
            )}
            {!imageUrl && !getValues().image && (
              <UploadImageText>{fileErrMsg}</UploadImageText>
            )}
            {imageUrl && <UploadedImage src={imageUrl} alt="Uploaded" />}
            <FormSectionHeader>Theme colors</FormSectionHeader>
            <ColorSection onClick={() => setViewColorSection(!viewColorSection)}>
              {viewColorSection ? "▼ Collapse" : "▶ Expand"} Color Section
              <Arrow />
            </ColorSection>
            <ColorsBlock viewColorSection={viewColorSection}>

              <Box sx={{ width: "32%", marginTop: "5px" }}>
                <FormControl fullWidth>
                  <InputLabel required>Template</InputLabel>
                  <Select
                    label="Template"
                    {...register("template_id", { required: "Required" })}
                    error={!isEmpty(formState?.errors?.template_id)}
                    onChange={handletemplate}
                    value={watch("template_id") ?? selectedProduct?.template_id ?? ""}
                  >
                    {templates.map(({ name, id }) => (
                      <MenuItem value={id}>{name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              {templates
                .find((t) => t.id == template)
                ?.colors.map((color) => {
                  const defaultValue = selectedProduct?.theme?.[color] || (color === "homepageBackgroundColor" ? "#ffffff" : "");
                  return (
                    <TextField
                      label={color}
                      name={color}
                      variant="outlined"
                      {...register(`theme.[${color}]`, { required: "Required" })}
                      defaultValue={defaultValue}
                      style={{ width: "32%", marginTop: "5px" }}

                    />
                  );
                })}
            </ColorsBlock>
            {isTemplate4 && (
              <>
                <FormSectionHeader>Category / Shop layout (theme4)</FormSectionHeader>
                <FormControl fullWidth sx={{ mb: 2, maxWidth: 400 }}>
                  <InputLabel>Layout</InputLabel>
                  <Select
                    label="Layout"
                    {...register("theme.[categoryDisplayMode]")}
                    defaultValue={selectedProduct?.theme?.categoryDisplayMode ?? "classic"}
                    onChange={(e) => setValue("theme.[categoryDisplayMode]", e.target.value)}
                  >
                    <MenuItem value="classic">Classic (categories on home, product list on separate page)</MenuItem>
                    <MenuItem value="shop">Shop (categories and products on one page)</MenuItem>
                  </Select>
                </FormControl>
                <FormSectionHeader>Section backgrounds (theme4)</FormSectionHeader>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  {[
                    { key: "heroSectionBackgroundColor", label: "Hero" },
                    { key: "welcomeSectionBackgroundColor", label: "Welcome" },
                    { key: "valueCardsSectionBackgroundColor", label: "Value cards section" },
                    { key: "valueCardBackgroundColor", label: "Value card (card bg)" },
                    { key: "categoriesSectionBackgroundColor", label: "Categories" },
                    { key: "featuredProductsSectionBackgroundColor", label: "Featured products" },
                    { key: "locationsSectionBackgroundColor", label: "Locations" },
                    { key: "socialSectionBackgroundColor", label: "Social" },
                    { key: "howItWorksSectionBackgroundColor", label: "How it works (section bg)" },
                    { key: "howItWorksStepIconBackgroundColor", label: "How it works step icon (bg)" },
                    { key: "howItWorksStepIconColor", label: "How it works step icon (color)" },
                    { key: "footerSectionBackgroundColor", label: "Footer" },
                    { key: "footerTextColor", label: "Footer text color" },
                  ].map(({ key, label }) => (
                    <TextField
                      key={key}
                      label={label}
                      variant="outlined"
                      {...register(`theme.[${key}]`)}
                      defaultValue={selectedProduct?.theme?.[key] ?? ""}
                      placeholder="Leave empty = homepage color"
                      style={{ width: "32%", minWidth: 200 }}
                    />
                  ))}
                </Box>
              </>
            )}
            <FormSectionHeader>Features</FormSectionHeader>
            <FeaturesSection onClick={() => setViewFeaturesSection(!viewFeaturesSection)}>
              {viewFeaturesSection ? "▼ Collapse" : "▶ Expand"} Feature Section
              <Arrow />
            </FeaturesSection>
            <FeaturesBlock viewFeaturesSection={viewFeaturesSection}>
              {templates
                .find((t) => t.id == template)
                ?.features.map((feature) => {
                  return (
                    <FormControl component="fieldset" style={{ display: "flex", flexDirection: "row" }}>
                      <FormLabel component="legend">{feature.featureName}</FormLabel>
                      <FormControlLabel
                        control={<Checkbox
                          {...register(`features.${feature.featureName}`)}
                          defaultChecked={getValues(`features.${feature.featureName}`) ?? false} // ✅ Use `defaultChecked`
                          onChange={(e) => {
                            setValue("features", {
                              ...getValues("features"), // ✅ Preserve existing features
                              [feature.featureName]: e.target.checked, // ✅ Update only the clicked checkbox
                            });
                          }}
                        />}
                        label={feature.featureName}
                      />
                    </FormControl>
                  );
                })}
            </FeaturesBlock>
            {(Number(template) === 3 || Number(template) === 2) && (
              <>
                <FormControl component="fieldset" style={{ display: "flex", flexDirection: "row" }}>
                  <FormLabel component="legend">Theme 2 & 3 Only</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...register("show_all_items_category")}
                        defaultChecked={getValues("show_all_items_category") ?? false}
                        onChange={(e) => setValue("show_all_items_category", e.target.checked)}
                      />
                    }
                    label="Show All Items Category"
                  />
                </FormControl>
                {getValues("show_all_items_category") && (
                  <Box sx={{ width: "30%" }}>
                    <FormControl fullWidth>
                      <InputLabel>All Items Style</InputLabel>
                      <Select
                        label="All Items Style"
                        error={!isEmpty(formState?.errors?.all_items_style)}
                        value={getValues("all_items_style") || selectedProduct?.all_items_style || "grid"}
                        onChange={(e) => {
                          setValue("all_items_style", e.target.value, { shouldValidate: true });
                        }}
                      >
                        <MenuItem value="grid">Grid (Default)</MenuItem>
                        <MenuItem value="list">List (Image Left, Details Right)</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                )}
              </>
            )}
            <Box sx={{ width: "30%" }}>
              <FormControl fullWidth>
                <InputLabel>Business Type</InputLabel>
                <Select
                  label="Business Type"
                  error={!isEmpty(formState?.errors?.business_type)}
                  value={getValues("business_type") || selectedProduct?.business_type || "restaurant"}
                  onChange={(e) => {
                    setValue("business_type", e.target.value, { shouldValidate: true });
                  }}
                >
                  <MenuItem value="restaurant">Restaurant (Menu)</MenuItem>
                  <MenuItem value="business">Business (Products)</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {(Number(template) === 2 || Number(template) === 3) && (
              <Box sx={{ width: "30%" }}>
                <FormControl fullWidth>
                  <InputLabel>Product details carousel style</InputLabel>
                  <Select
                    label="Product details carousel style"
                    value={getValues("product_details_carousel_style") || selectedProduct?.product_details_carousel_style || "normal"}
                    onChange={(e) => {
                      setValue("product_details_carousel_style", e.target.value, { shouldValidate: true });
                    }}
                  >
                    <MenuItem value="normal">Normal (default)</MenuItem>
                    <MenuItem value="pagination-fraction">Pagination fraction</MenuItem>
                    <MenuItem value="effect-cards">Effect Cards</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}
            <LoadingButton
              onClick={handleAddRestaurant}
              style={{ backgroundColor: "turquoise", color: "white" }}
              loading={isPending || isEditing}
            >
              {isEditMode ? "Edit Restaurant" : "Add Restaurant"}
            </LoadingButton>
          </AddRestaurantForm>
        </>
      )}
      <Dialog open={valueCardDialogOpen} onClose={() => setValueCardDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editingValueCard ? "Edit Value Card" : "Add Value Card"}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 1 }}>
            <TextField
              label="Title (English)"
              value={valueCardForm.en_title}
              onChange={(e) => setValueCardForm((p) => ({ ...p, en_title: e.target.value }))}
              fullWidth
            />
            <TextField
              label="Title (Arabic)"
              value={valueCardForm.ar_title}
              onChange={(e) => setValueCardForm((p) => ({ ...p, ar_title: e.target.value }))}
              fullWidth
            />
            <TextField
              label="Description (English)"
              value={valueCardForm.en_description}
              onChange={(e) => setValueCardForm((p) => ({ ...p, en_description: e.target.value }))}
              fullWidth
              multiline
              rows={2}
            />
            <TextField
              label="Description (Arabic)"
              value={valueCardForm.ar_description}
              onChange={(e) => setValueCardForm((p) => ({ ...p, ar_description: e.target.value }))}
              fullWidth
              multiline
              rows={2}
            />
            <FormControl fullWidth>
              <InputLabel>Icon</InputLabel>
              <Select
                value={valueCardForm.icon_type}
                label="Icon"
                onChange={(e) => setValueCardForm((p) => ({ ...p, icon_type: e.target.value }))}
              >
                {BADGE_ICON_TYPES.map((t) => (
                  <MenuItem key={t.value} value={t.value}>
                    {t.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setValueCardDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={saveValueCard}>
            {editingValueCard ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={statItemDialogOpen} onClose={() => setStatItemDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editingStatItem ? "Edit Stat Item" : "Add Stat Item"}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 1 }}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={statItemForm.value_type}
                label="Type"
                onChange={(e) => setStatItemForm((p) => ({ ...p, value_type: e.target.value }))}
              >
                <MenuItem value="static">Static (custom value)</MenuItem>
                <MenuItem value="products_count">Products count (from DB)</MenuItem>
              </Select>
            </FormControl>
            {statItemForm.value_type === "static" && (
              <TextField
                label="Value (e.g. 24h, 100%)"
                value={statItemForm.value}
                onChange={(e) => setStatItemForm((p) => ({ ...p, value: e.target.value }))}
                fullWidth
              />
            )}
            <TextField label="Label (EN)" value={statItemForm.en_label} onChange={(e) => setStatItemForm((p) => ({ ...p, en_label: e.target.value }))} fullWidth />
            <TextField label="Label (AR)" value={statItemForm.ar_label} onChange={(e) => setStatItemForm((p) => ({ ...p, ar_label: e.target.value }))} fullWidth />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setStatItemDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={saveStatItem}>{editingStatItem ? "Save" : "Add"}</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={badgeDialogOpen} onClose={() => setBadgeDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editingBadge ? "Edit Badge" : "Add Badge"}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 1 }}>
            <TextField
              label="Text (English)"
              value={badgeForm.en_text}
              onChange={(e) => setBadgeForm((p) => ({ ...p, en_text: e.target.value }))}
              fullWidth
            />
            <TextField
              label="Text (Arabic)"
              value={badgeForm.ar_text}
              onChange={(e) => setBadgeForm((p) => ({ ...p, ar_text: e.target.value }))}
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Icon</InputLabel>
              <Select
                value={badgeForm.icon_type}
                label="Icon"
                onChange={(e) => setBadgeForm((p) => ({ ...p, icon_type: e.target.value }))}
              >
                {BADGE_ICON_TYPES.map((t) => (
                  <MenuItem key={t.value} value={t.value}>
                    {t.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBadgeDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={saveBadge}>
            {editingBadge ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}