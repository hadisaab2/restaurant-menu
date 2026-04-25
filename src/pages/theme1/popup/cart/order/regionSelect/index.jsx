import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { useTheme } from "styled-components";
import {
  Search,
  SearchIcon,
  SearchWrapper,
  SelectWrapper,
  SearchContainer,
} from "./styles";
import { useGetBranch } from "../../../../../../apis/branches/getBranch";

export default function RegionSelect({
  selectedBranch,
  selectedRegion,
  onRegionChange,
  setErrors,
  errors,
  onRegionsChange,
}) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { response: fetchedBranch, isLoading: branchLoading } = useGetBranch({
    branch_id: selectedBranch.id,
    onSuccess: () => {},
  });

  useEffect(() => {
    if (!branchLoading) {
      onRegionsChange(fetchedBranch?.data?.regions || []);
    }
  }, [branchLoading, fetchedBranch, onRegionsChange]);

  useEffect(() => {
    onRegionChange("");
  }, [selectedBranch, onRegionChange]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const regions = fetchedBranch?.data?.regions || [];
  const options = regions.map((region) => ({
    value: region.region_name,
    label: region.region_name,
  }));

  const filteredOptions = options.filter((region) =>
    region.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: 44,
      borderRadius: 10,
      borderColor: errors?.region
        ? "#ff4444"
        : theme.mainColor || theme.maincolor || "#007bff",
      boxShadow: state.isFocused
        ? `0 0 0 3px ${
            errors?.region
              ? "rgba(255, 68, 68, 0.1)"
              : theme.mainColor
              ? `${theme.mainColor}20`
              : "rgba(0, 123, 255, 0.1)"
          }`
        : "none",
      backgroundColor: theme.categoryUnActive || "#ffffff",
      cursor: "pointer",
      "&:hover": {
        borderColor: errors?.region
          ? "#ff4444"
          : theme.mainColor || theme.maincolor || "#007bff",
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
    !branchLoading && (
      <>
        <SelectWrapper>
          <ReactSelect
            value={options.find((option) => option.value === selectedRegion)}
            onMenuOpen={() => setIsOpen(true)}
            onMenuClose={() => setIsOpen(false)}
            onChange={(option) => {
              onRegionChange(option?.value || "");
              setSearchTerm("");
              setErrors({ ...errors, region: "" });
            }}
            options={filteredOptions}
            placeholder="Select Region"
            styles={selectStyles}
            menuPortalTarget={
              typeof document !== "undefined" ? document.body : null
            }
            menuPosition="fixed"
          />
        </SelectWrapper>
        {isOpen && (
          <SearchWrapper>
            <SearchContainer>
              <Search
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <SearchIcon />
            </SearchContainer>
          </SearchWrapper>
        )}
      </>
    )
  );
}
