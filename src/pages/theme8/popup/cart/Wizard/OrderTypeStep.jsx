import React from "react";
import ReactSelect from "react-select";
import { useTheme } from "styled-components";
import BranchSelect from "../order/branchSelect";
import RegionSelect from "../order/regionSelect";
import {
  OrderTypeContainer,
  Error,
  SectionTitle,
  SectionDescription,
  DropdownWrapper,
} from "./OrderTypeStepStyles";

export default function OrderTypeStep({
  formData,
  updateFormData,
  restaurant,
  errors,
  setErrors,
}) {
  const theme = useTheme();
  const hasOnlineBranch = () => {
    return restaurant?.branches?.some((branch) => branch.is_online);
  };

  let features = {};
  try {
    features = JSON.parse(restaurant?.features || "{}");
  } catch (e) {
    features = {};
  }

  const handleDeliveryTypeChange = (e) => {
    updateFormData({
      deliveryType: e?.value || "",
      selectedBranch: restaurant?.branches?.[0] || null,
      selectedRegion: "",
    });
    setErrors({});
  };

  const deliveryOptions = [
    features.delivery_order && { value: "Delivery", label: "Delivery" },
    features.takeaway_order && { value: "TakeAway", label: "Take Away" },
    features.dinein_order && { value: "DineIn", label: "Dine In" },
  ].filter(Boolean);

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: 44,
      borderRadius: 10,
      borderColor: errors.deliveryType ? "#ff4444" : theme.mainColor || theme.maincolor || "#007bff",
      boxShadow: state.isFocused
        ? `0 0 0 3px ${
            errors.deliveryType
              ? "rgba(255, 68, 68, 0.1)"
              : theme.mainColor
              ? `${theme.mainColor}20`
              : "rgba(0, 123, 255, 0.1)"
          }`
        : "none",
      backgroundColor: theme.categoryUnActive || "#ffffff",
      cursor: "pointer",
      "&:hover": {
        borderColor: errors.deliveryType ? "#ff4444" : theme.mainColor || theme.maincolor || "#007bff",
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
  };

  return (
    <OrderTypeContainer>
      <SectionTitle>Select Order Type</SectionTitle>
      <SectionDescription>
        Choose how you would like to receive your order
      </SectionDescription>

      <DropdownWrapper>
        <ReactSelect
          value={deliveryOptions.find(
            (option) => option.value === formData.deliveryType
          )}
          onChange={handleDeliveryTypeChange}
          options={deliveryOptions}
          placeholder="Select Order Type"
          isSearchable={false}
          styles={selectStyles}
          menuPortalTarget={typeof document !== "undefined" ? document.body : null}
          menuPosition="fixed"
        />
        {errors.deliveryType && <Error>{errors.deliveryType}</Error>}
      </DropdownWrapper>

      {restaurant?.branches?.length > 0 && !hasOnlineBranch() && (
        <DropdownWrapper>
          <BranchSelect
            deliveryType={formData.deliveryType}
            branches={restaurant?.branches}
            selectedBranch={formData.selectedBranch}
            setSelectedBranch={(branch) =>
              updateFormData({ selectedBranch: branch, selectedRegion: "" })
            }
            setErrors={setErrors}
            errors={errors}
          />
          {errors.branch && <Error>{errors.branch}</Error>}
        </DropdownWrapper>
      )}

      {formData.selectedBranch &&
        formData.deliveryType === "Delivery" &&
        Array.isArray(formData.regions) &&
        formData.regions.length > 0 && (
          <DropdownWrapper>
            <RegionSelect
              selectedRegion={formData.selectedRegion}
              onRegionChange={(region) =>
                updateFormData({ selectedRegion: region })
              }
              selectedBranch={
                restaurant?.branches?.length === 1
                  ? restaurant?.branches[0]
                  : formData.selectedBranch
              }
              setErrors={setErrors}
              errors={errors}
              onRegionsChange={(regions) => updateFormData({ regions })}
            />
            {errors.region && <Error>{errors.region}</Error>}
          </DropdownWrapper>
        )}
    </OrderTypeContainer>
  );
}

