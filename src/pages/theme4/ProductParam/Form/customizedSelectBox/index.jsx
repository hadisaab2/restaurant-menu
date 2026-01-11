import React, { useState } from 'react'
import { SelectBoxWrapper, Option, AddBox, OptionWrapper, RemoveBox, ErrorLabel } from './styles'
import { FaPlus } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Label } from '../styles';

export default function CustomizedSelectBox({ component, formData, handleChange, index, componentKey, formErrors }) {
  const [selectedOptions, setSelectedOptions] = useState(formData[component.key] || [])


  const HandleAddOption = (option) => {
    setSelectedOptions([...selectedOptions, option.label])
    handleChange(component.key, [...selectedOptions, option.label]);
  }
  const HandleRemoveOption = (option) => {
    let editedOptions = selectedOptions.filter((item) => item !== option.label)
    setSelectedOptions(editedOptions)
    handleChange(component.key, editedOptions);

  }

  function hasFieldError(key) {
    return key in formErrors;
  }
  return (
    <SelectBoxWrapper index={index}>
      <Label>{component.label}</Label>

      {component.values.map((option) => {
        return (
          <OptionWrapper>

            {selectedOptions.some(item => item === option.label) ?
              <RemoveBox onClick={() => { HandleRemoveOption(option) }}>
                <TiTick size={"15px"} />
              </RemoveBox>
              : <AddBox onClick={() => { HandleAddOption(option) }}>
                <FaPlus />
              </AddBox>
            }
            <Option>{option.label}</Option>

          </OptionWrapper>


        )
      })}

      {hasFieldError(componentKey) ? <ErrorLabel>This field is required</ErrorLabel> : null}

    </SelectBoxWrapper>
  )
}
