import React, { useEffect, useState } from "react";
import {
  FormWrapper,
  FormGroup,
  Label,
  CheckboxLabel,
  Select,
  RadioGroup,
  RadioLabel,
} from "./styles";

export default function ProductForm({ formSchema, onPriceChange, basePrice,formData,setFormData }) {

  useEffect(() => {
    calculateTotalPrice(formData);
  }, [formData]);

  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const calculateTotalPrice = (data) => {
    let newPrice = parseFloat(basePrice) || 0; // Use base price from form schema
    let addOnsPrice = 0;
    formSchema?.components.forEach((component) => {
      if (data[component.key]) {
        if (component.type === "selectboxes" && component.values) {
          data[component.key].forEach((label) => {
            const option = component.values.find((opt) => opt.label === label);
            if (option && option.value) {
              if (option.value.startsWith("+")) {
                addOnsPrice += parseFloat(option.value.slice(1));
              } else if (option.value.startsWith("-")) {
                addOnsPrice -= parseFloat(option.value.slice(1));
              }
            }
          });
        } else if (
          component.type === "select" &&
          component.data &&
          component.data.values
        ) {
          const option = component.data.values.find(
            (opt) => opt.value === data[component.key]
          );
          if (option) {
            if (option.value.startsWith("+")) {
              addOnsPrice += parseFloat(option.value.slice(1));
            } else if (option.value.startsWith("-")) {
              addOnsPrice -= parseFloat(option.value.slice(1));
            } else {
              newPrice = parseFloat(option.value);
            }
          }
        } else if (component.type === "radio" && component.values) {
          const option = component.values.find(
            (opt) => opt.value === data[component.key]
          );
          if (option) {
            if (option.value.startsWith("+")) {
              addOnsPrice += parseFloat(option.value.slice(1));
            } else if (option.value.startsWith("-")) {
              addOnsPrice -= parseFloat(option.value.slice(1));
            } else {
              newPrice = parseFloat(option.value);
            }
          }
        }
      }
    });

    onPriceChange(newPrice + addOnsPrice);
  };

  const renderComponent = (component) => {
    switch (component.type) {
      case "selectboxes":
        return (
          <FormGroup key={component.key}>
            <Label>{component.label}</Label>
            {component.values.map((option) => (
              <CheckboxLabel key={option.value}>
                <input
                  type="checkbox"
                  checked={
                    formData[component.key]?.includes(option.label) || false
                  }
                  onChange={(e) => {
                    const selectedOptions = formData[component.key] || [];
                    if (e.target.checked) {
                      handleChange(component.key, [
                        ...selectedOptions,
                        option.label,
                      ]);
                    } else {
                      handleChange(
                        component.key,
                        selectedOptions.filter((item) => item !== option.label)
                      );
                    }
                  }}
                />
                {option.label}
              </CheckboxLabel>
            ))}
          </FormGroup>
        );
      case "select":
        return (
          <FormGroup key={component.key}>
            <Label>{component.label}</Label>
            <Select
              value={formData[component.key] || ""}
              onChange={(e) => handleChange(component.key, e.target.value)}
            >
              <option value="">Select...</option>
              {component.data.values.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FormGroup>
        );
      case "radio":
        return (
          <FormGroup key={component.key}>
            <Label>{component.label}</Label>
            <RadioGroup>
              {component.values.map((option) => (
                <RadioLabel key={option.value}>
                  <input
                    type="radio"
                    name={component.key}
                    value={option.value}
                    checked={formData[component.key] === option.value}
                    onChange={(e) =>
                      handleChange(component.key, e.target.value)
                    }
                  />
                  {option.label}
                </RadioLabel>
              ))}
            </RadioGroup>
          </FormGroup>
        );
      default:
        return null;
    }
  };

  return (
    <form>
      {console.log(formData)}
      {formSchema?.components.map((component) => renderComponent(component))}
    </form>
  );
}
