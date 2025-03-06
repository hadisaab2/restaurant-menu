import React, { useState } from 'react'
import { SelectBoxWrapper, Option, AddBox, OptionWrapper, RemoveBox } from './styles'
import { FaPlus } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Label } from '../styles';

export default function CustomizedSelectBox({component, formData,handleChange,index }) {
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
    </SelectBoxWrapper>
  )
}
