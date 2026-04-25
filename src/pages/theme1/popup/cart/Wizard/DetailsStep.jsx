import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import ReactSelect from "react-select";
import { useTheme } from "styled-components";
import { CUSTOMER_ADDRESSES_URL } from "../../../../../apis/URLs";
import { getCustomerAccessToken } from "../../../../../utilities/customerAuthStorage";
import { DropdownWrapper } from "./OrderTypeStepStyles";
import {
  DetailsContainer,
  Input,
  TextArea,
  Error,
  SectionTitle,
  SectionDescription,
  InputGroup,
  Label,
  HintText,
} from "./DetailsStepStyles";

export default function DetailsStep({
  formData,
  updateFormData,
  errors,
  restaurantName,
  activeLanguage = "en",
}) {
  const theme = useTheme();
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [addrLoading, setAddrLoading] = useState(false);
  const appliedDefaultRef = useRef(false);
  const t = (en, ar) => (activeLanguage === "ar" ? ar : en);

  const selectStyles = useMemo(
    () => ({
      control: (base, state) => ({
        ...base,
        minHeight: 44,
        borderRadius: 10,
        borderColor: theme.mainColor || theme.maincolor || "#007bff",
        boxShadow: state.isFocused
          ? `0 0 0 3px ${
              theme.mainColor
                ? `${theme.mainColor}20`
                : "rgba(0, 123, 255, 0.1)"
            }`
          : "none",
        backgroundColor: theme.categoryUnActive || "#ffffff",
        cursor: "pointer",
        "&:hover": {
          borderColor: theme.mainColor || theme.maincolor || "#007bff",
        },
      }),
      valueContainer: (base) => ({
        ...base,
        padding: "0 10px",
      }),
      input: (base) => ({
        ...base,
        margin: 0,
        padding: 0,
      }),
      singleValue: (base) => ({
        ...base,
        color: theme.popupTextColor || "#00112b",
        fontSize: 14,
      }),
      placeholder: (base) => ({
        ...base,
        color: theme.popupTextColor || "#666",
        fontSize: 14,
      }),
      indicatorSeparator: () => ({
        display: "none",
      }),
      dropdownIndicator: (base) => ({
        ...base,
        color: theme.popupTextColor || "#00112b",
        padding: 6,
      }),
      menu: (base) => ({
        ...base,
        borderRadius: 10,
        zIndex: 2000,
        backgroundColor: theme.categoryUnActive || "#ffffff",
        border: `1px solid ${theme.borderColor || "rgba(0, 0, 0, 0.1)"}`,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
      }),
      option: (base, state) => ({
        ...base,
        color: theme.popupTextColor || "#00112b",
        fontSize: 14,
        backgroundColor: state.isSelected
          ? theme.categoryUnActive || "#ffffff"
          : state.isFocused
          ? theme.popupbackgroundColor || "#f5f5f5"
          : "transparent",
      }),
      menuPortal: (base) => ({
        ...base,
        zIndex: 2000,
      }),
    }),
    [theme]
  );

  const addressOptions = useMemo(() => {
    const manualLabel =
      savedAddresses.length === 0
        ? t("No saved addresses — type below", "لا توجد عناوين — اكتب أدناه")
        : t("Type address manually", "إدخال العنوان يدوياً");
    const manual = { value: "__manual__", label: manualLabel };
    const rest = savedAddresses.map((a) => ({
      value: String(a.id),
      label: `${a.label || t("Address", "عنوان")}${
        a.is_default ? ` (${t("default", "افتراضي")})` : ""
      } — ${
        a.full_address.length > 56
          ? `${a.full_address.slice(0, 56)}…`
          : a.full_address
      }`,
    }));
    return [manual, ...rest];
  }, [savedAddresses, activeLanguage]);

  const savedAddressValue = useMemo(() => {
    if (formData.selectedAddressId == null) {
      return addressOptions[0] || null;
    }
    const id = String(formData.selectedAddressId);
    return addressOptions.find((o) => o.value === id) || addressOptions[0] || null;
  }, [addressOptions, formData.selectedAddressId]);

  useEffect(() => {
    if (formData.deliveryType !== "Delivery" || !restaurantName) {
      setSavedAddresses([]);
      return;
    }
    const tok = getCustomerAccessToken(restaurantName);
    if (!tok) {
      setSavedAddresses([]);
      return;
    }
    let cancelled = false;
    setAddrLoading(true);
    axios
      .get(CUSTOMER_ADDRESSES_URL, {
        headers: { Authorization: `Bearer ${tok}` },
      })
      .then(({ data }) => {
        if (!cancelled) {
          setSavedAddresses(data.addresses || []);
        }
      })
      .catch(() => {
        if (!cancelled) setSavedAddresses([]);
      })
      .finally(() => {
        if (!cancelled) setAddrLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [formData.deliveryType, restaurantName]);

  useEffect(() => {
    if (formData.deliveryType !== "Delivery") {
      appliedDefaultRef.current = false;
    }
  }, [formData.deliveryType]);

  useEffect(() => {
    if (formData.deliveryType !== "Delivery") return;
    if (!savedAddresses.length || appliedDefaultRef.current) return;
    const def = savedAddresses.find((a) => a.is_default);
    if (def && !String(formData.fullAddress || "").trim()) {
      appliedDefaultRef.current = true;
      updateFormData({
        selectedAddressId: def.id,
        fullAddress: def.full_address,
      });
    }
  }, [savedAddresses, formData.deliveryType, formData.fullAddress, updateFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullAddress") {
      updateFormData({ [name]: value, selectedAddressId: null });
      return;
    }
    updateFormData({ [name]: value });
  };

  const handleSavedAddressSelect = (opt) => {
    if (!opt || opt.value === "__manual__") {
      updateFormData({ selectedAddressId: null });
      return;
    }
    const id = parseInt(opt.value, 10);
    const found = savedAddresses.find((a) => a.id === id);
    if (found) {
      updateFormData({
        selectedAddressId: id,
        fullAddress: found.full_address,
      });
    }
  };

  return (
    <DetailsContainer>
      <SectionTitle>{t("Your Information", "بياناتك")}</SectionTitle>
      <SectionDescription>
        {t(
          "Please provide your contact details to complete the order",
          "يرجى إدخال بيانات التواصل لإتمام الطلب"
        )}
      </SectionDescription>

      <InputGroup>
        <Label>{t("Full Name *", "الاسم الكامل *")}</Label>
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder={t("Enter your full name", "أدخل اسمك الكامل")}
          hasError={!!errors.fullName}
        />
        {errors.fullName && <Error>{errors.fullName}</Error>}
      </InputGroup>

      <InputGroup>
        <Label>{t("Phone Number *", "رقم الهاتف *")}</Label>
        <Input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder={t("Enter your phone number", "أدخل رقم هاتفك")}
          hasError={!!errors.phoneNumber}
        />
        {errors.phoneNumber && <Error>{errors.phoneNumber}</Error>}
      </InputGroup>

      {formData.deliveryType === "Delivery" && (
        <>
          {getCustomerAccessToken(restaurantName) && (
            <InputGroup>
              <Label>
                {t("Saved address", "عنوان محفوظ")}
                {addrLoading ? ` (${t("loading…", "جاري التحميل…")})` : ""}
              </Label>
              <DropdownWrapper>
                <ReactSelect
                  value={savedAddressValue}
                  onChange={handleSavedAddressSelect}
                  options={addressOptions}
                  isSearchable={false}
                  isDisabled={addrLoading}
                  styles={selectStyles}
                  menuPortalTarget={
                    typeof document !== "undefined" ? document.body : null
                  }
                  menuPosition="fixed"
                  isRtl={activeLanguage === "ar"}
                />
              </DropdownWrapper>
              <HintText>
                {t(
                  "Add or edit addresses from the account menu (person icon) → Addresses.",
                  "لإضافة العناوين أو تعديلها: قائمة الحساب (أيقونة الشخص) ← العناوين."
                )}
              </HintText>
            </InputGroup>
          )}
          <InputGroup>
            <Label>{t("Full Address *", "العنوان الكامل *")}</Label>
            <TextArea
              name="fullAddress"
              value={formData.fullAddress}
              onChange={handleChange}
              placeholder={t(
                "Enter your delivery address",
                "أدخل عنوان التوصيل"
              )}
              hasError={!!errors.fullAddress}
              rows="3"
            />
            {errors.fullAddress && <Error>{errors.fullAddress}</Error>}
          </InputGroup>
        </>
      )}

      {formData.deliveryType === "DineIn" && (
        <InputGroup>
          <Label>{t("Table Number *", "رقم الطاولة *")}</Label>
          <Input
            type="number"
            name="tableNumber"
            value={formData.tableNumber}
            onChange={handleChange}
            placeholder={t("Enter table number", "رقم الطاولة")}
            hasError={!!errors.tableNumber}
          />
          {errors.tableNumber && <Error>{errors.tableNumber}</Error>}
        </InputGroup>
      )}

      <InputGroup>
        <Label>{t("Special Notes (Optional)", "ملاحظات (اختياري)")}</Label>
        <TextArea
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder={t(
            "Any special instructions or notes…",
            "أي تعليمات خاصة…"
          )}
          rows="3"
        />
      </InputGroup>
    </DetailsContainer>
  );
}
