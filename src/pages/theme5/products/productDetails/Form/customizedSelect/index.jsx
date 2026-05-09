import React, { useState, useRef, useEffect } from "react";
import {
    SelectContainer,
    SelectHeader,
    Arrow,
    OptionsList,
    Option,
    CircularOption,
    OptionsWrapper,
    CircularOptionWrapper,
    ErrorLabel,
} from "./styles";
import { Label } from "../styles";

export default function CustomizedSelect({ component, formData, handleChange, placeholder = "Select an option",index ,componentKey,formErrors}) {

    {console.log(componentKey)}
    {console.log(formErrors)}

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


    function hasFieldError(key) {
        return key in formErrors;
      }
    return (
        <SelectContainer ref={dropdownRef} index={index}>
            <Label>{component.label}</Label>
            {component.data.values.length > 8 ?
                <>
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
                </> : <>
                    <OptionsWrapper>
                        {component.data.values.map((option, index) => (
                            <CircularOptionWrapper>
                            <CircularOption
                                selected={selectedOption === option.label}
                                onClick={() => handleOptionClick(option)}>
                                {option.label}

                            </CircularOption>
                            </CircularOptionWrapper>
                        ))}

                    </OptionsWrapper>
                </>}
                {hasFieldError(componentKey) ? <ErrorLabel>This field is required</ErrorLabel> : null}

        </SelectContainer>
    );
};

