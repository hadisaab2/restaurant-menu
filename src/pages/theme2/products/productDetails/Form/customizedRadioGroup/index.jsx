import React, { useState } from 'react'
import { SelectBoxWrapper, Option, OptionWrapper } from './styles'
import { FaPlus } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Label } from '../styles';
import { DynamicCircle } from './styles';
import { OptionCircle } from './styles';

export default function CustomizedRadioGroup({component, formData,handleChange,index }) {
  const [selectedOption, setSelectedOption] = useState(formData[component.key] || "")


  const HandleSelect = (option) => {
    setSelectedOption(option)
    handleChange(component.key, option);
  }

  return (
    <SelectBoxWrapper index={index}>
      <Label>{component.label}</Label>

      {component.values.map((option) => {
        return (
          <OptionWrapper>
            
            
              <OptionCircle onClick={() => { HandleSelect(option) }}>
                <DynamicCircle selected={selectedOption.label==option.label } />
              </OptionCircle>
              
            
            <Option>{option.label}</Option>

          </OptionWrapper>


        )
      })}
    </SelectBoxWrapper>
  )
}
