import React, { useState, useRef, useEffect } from "react";
import {
    SelectContainer,
    SelectHeader,
    Arrow,
    OptionsList,
    Option,
} from "./styles";
import { Label } from "../styles";

export default function CustomizedSelect({ component, formData, handleChange, placeholder = "Select an option" }) {


    const [isOpen, setIsOpen] = useState(false); // Tracks if the dropdown is open
    const [selectedOption, setSelectedOption] = useState(formData[component.key]?.value || ""); // Tracks selected option
    const dropdownRef = useRef(null); // Reference for handling clicks outside

    // Toggles the dropdown
    const toggleDropdown = () => setIsOpen((prev) => !prev);

    // Handles option selection
    const handleOptionClick = (option) => {
        setSelectedOption(option.label); // Update selected option
        setIsOpen(false); // Close dropdown
        handleChange(component.key, option);

    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <SelectContainer ref={dropdownRef}>
            <Label>{component.label}</Label>
            <SelectHeader onClick={toggleDropdown}>
                {selectedOption ? selectedOption : placeholder}
                <Arrow className={isOpen ? "up" : ""}>&#9660;</Arrow>
            </SelectHeader>

            <OptionsList isOpen={isOpen}>
                {component.data.values.map((option, index) => (
                    <Option
                        key={index}
                        className={selectedOption === option.label ? "selected" : ""}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option.label}
                    </Option>
                ))}
            </OptionsList>
        </SelectContainer>
    );
};
