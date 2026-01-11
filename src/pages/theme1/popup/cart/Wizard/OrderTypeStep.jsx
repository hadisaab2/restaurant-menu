import React from "react";
import BranchSelect from "../order/branchSelect";
import RegionSelect from "../order/regionSelect";
import {
  OrderTypeContainer,
  Select,
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
      deliveryType: e.target.value,
      selectedBranch: restaurant?.branches?.[0] || null,
      selectedRegion: "",
    });
    setErrors({});
  };

  return (
    <OrderTypeContainer>
      <SectionTitle>Select Order Type</SectionTitle>
      <SectionDescription>
        Choose how you would like to receive your order
      </SectionDescription>

      <DropdownWrapper>
        <Select
          value={formData.deliveryType}
          onChange={handleDeliveryTypeChange}
          hasError={!!errors.deliveryType}
        >
          <option value="">Select Order Type</option>
          {features.delivery_order && (
            <option value="Delivery">Delivery</option>
          )}
          {features.takeaway_order && (
            <option value="TakeAway">Take Away</option>
          )}
          {features.dinein_order && <option value="DineIn">Dine In</option>}
        </Select>
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
        formData.deliveryType === "Delivery" && (
          <DropdownWrapper>
            <RegionSelect
              selectedRegion={formData.selectedRegion}
              setSelectedRegion={(region) =>
                updateFormData({ selectedRegion: region })
              }
              selectedBranch={
                restaurant?.branches?.length === 1
                  ? restaurant?.branches[0]
                  : formData.selectedBranch
              }
              setErrors={setErrors}
              errors={errors}
              setRegions={(regions) => updateFormData({ regions })}
            />
            {errors.region && <Error>{errors.region}</Error>}
          </DropdownWrapper>
        )}
    </OrderTypeContainer>
  );
}

