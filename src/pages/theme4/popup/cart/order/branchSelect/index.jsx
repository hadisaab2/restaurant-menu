import React from "react";
import ReactSelect from "react-select";
import { useTheme } from "styled-components";
import { SelectWrapper } from "./styles";

export default function BranchSelect({
  deliveryType,
  branches,
  selectedBranch,
  setSelectedBranch,
  setErrors,
  errors,
}) {
  const theme = useTheme();
  const options = (branches || []).map((branch) => ({
    value: branch.id,
    label: branch.name,
    branch,
    isDisabled: !branch.has_delivery && deliveryType === "Delivery",
  }));

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: 44,
      borderRadius: 10,
      borderColor: errors?.branch ? "#ff4444" : theme.mainColor || theme.maincolor || "#007bff",
      boxShadow: state.isFocused
        ? `0 0 0 3px ${
            errors?.branch
              ? "rgba(255, 68, 68, 0.1)"
              : theme.mainColor
              ? `${theme.mainColor}20`
              : "rgba(0, 123, 255, 0.1)"
          }`
        : "none",
      backgroundColor: theme.categoryUnActive || "#ffffff",
      cursor: "pointer",
      "&:hover": {
        borderColor: errors?.branch ? "#ff4444" : theme.mainColor || theme.maincolor || "#007bff",
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
      color: state.isDisabled ? "#999" : theme.popupTextColor || "#00112b",
      fontSize: 14,
      backgroundColor: state.isSelected
        ? theme.categoryUnActive || "#ffffff"
        : state.isFocused
        ? theme.popupbackgroundColor || "#f5f5f5"
        : "transparent",
      cursor: state.isDisabled ? "not-allowed" : "pointer",
      display: "flex",
      justifyContent: "space-between",
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 2000,
    }),
  };

  const formatOptionLabel = (option) => (
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <span>{option.label}</span>
      {option.isDisabled && deliveryType === "Delivery" && (
        <span style={{ fontSize: 12, color: "#999" }}>No Delivery</span>
      )}
    </div>
  );

  return (
    <SelectWrapper>
      <ReactSelect
        value={options.find((option) => option.branch?.id === selectedBranch?.id)}
        onChange={(option) => {
          if (!option || option.isDisabled) return;
          setSelectedBranch(option.branch);
          setErrors({ ...errors, branch: "" });
        }}
        options={options}
        placeholder="Select Branch"
        isOptionDisabled={(option) => option.isDisabled}
        styles={selectStyles}
        formatOptionLabel={formatOptionLabel}
        menuPortalTarget={typeof document !== "undefined" ? document.body : null}
        menuPosition="fixed"
      />
    </SelectWrapper>
  );
}
