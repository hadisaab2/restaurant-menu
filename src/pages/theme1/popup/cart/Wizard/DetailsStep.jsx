import React from "react";
import {
  DetailsContainer,
  Input,
  TextArea,
  Error,
  SectionTitle,
  SectionDescription,
  InputGroup,
  Label,
} from "./DetailsStepStyles";
import LocationSelector from "./LocationSelector";

export default function DetailsStep({
  formData,
  updateFormData,
  errors,
  setErrors,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <DetailsContainer>
      <SectionTitle>Your Information</SectionTitle>
      <SectionDescription>
        Please provide your contact details to complete the order
      </SectionDescription>

      <InputGroup>
        <Label>Full Name *</Label>
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          hasError={!!errors.fullName}
        />
        {errors.fullName && <Error>{errors.fullName}</Error>}
      </InputGroup>

      <InputGroup>
        <Label>Phone Number *</Label>
        <Input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
          hasError={!!errors.phoneNumber}
        />
        {errors.phoneNumber && <Error>{errors.phoneNumber}</Error>}
      </InputGroup>

      {formData.deliveryType === "Delivery" && (
        <>
          <InputGroup>
            <Label>Select Location (Optional)</Label>
            <LocationSelector
              onLocationSelect={(location) => {
                updateFormData({
                  selectedLocation: location,
                  fullAddress: location.address || formData.fullAddress || `${location.latitude}, ${location.longitude}`,
                });
              }}
              selectedLocation={formData.selectedLocation}
              hasError={false}
            />
          </InputGroup>
          <InputGroup>
            <Label>Full Address *</Label>
            <TextArea
              name="fullAddress"
              value={formData.fullAddress}
              onChange={handleChange}
              placeholder="Enter your delivery address or select location above"
              hasError={!!errors.fullAddress}
              rows="3"
            />
            {errors.fullAddress && <Error>{errors.fullAddress}</Error>}
          </InputGroup>
        </>
      )}

      {formData.deliveryType === "DineIn" && (
        <InputGroup>
          <Label>Table Number *</Label>
          <Input
            type="number"
            name="tableNumber"
            value={formData.tableNumber}
            onChange={handleChange}
            placeholder="Enter table number"
            hasError={!!errors.tableNumber}
          />
          {errors.tableNumber && <Error>{errors.tableNumber}</Error>}
        </InputGroup>
      )}

      <InputGroup>
        <Label>Special Notes (Optional)</Label>
        <TextArea
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="Any special instructions or notes..."
          rows="3"
        />
      </InputGroup>
    </DetailsContainer>
  );
}

