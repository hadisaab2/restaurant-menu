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
import CustomizedSelectBox from "./customizedSelectBox";
import CustomSelect from "./customizedSelect";
import CustomizedRadioGroup from "./customizedRadioGroup";

export default function ProductForm({ formSchema, onPriceChange, basePrice, formData, setFormData }) {

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
            const isNumber = !isNaN(Number(option.value));
            if (option && option.value && isNumber) {
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
            (opt) => opt.value === data[component.key]?.value
          );
          const isNumber = !isNaN(Number(option.value)); // Convert to number and check

          if (option && isNumber) {
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
            (opt) => opt.value === data[component.key]?.value
          );
          const isNumber = !isNaN(Number(option.value));
          if (option && isNumber) {
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

    onPriceChange((newPrice + addOnsPrice).toFixed(2)); // Rounds to 2 decimal places
  };

  const renderComponent = (component) => {
    switch (component.type) {
      case "selectboxes":
        console.log(component.key)
        return (
          <CustomizedSelectBox
            component={component}
            formData={formData}
            handleChange={handleChange} />
        );
      case "select":
        return (
          <CustomSelect
            component={component}
            formData={formData}
            handleChange={handleChange} />
        );
      case "radio":
        return (
          <CustomizedRadioGroup
            component={component}
            formData={formData}
            handleChange={handleChange} />
        );

      default:
        return null;
    }
  };

  return (
    <form style={{width:"100%"}}>
      {formSchema?.components.map((component) => renderComponent(component))}
    </form>
  );
}
