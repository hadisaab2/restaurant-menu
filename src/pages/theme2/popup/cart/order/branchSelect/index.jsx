import React, { useState } from 'react'
import { Caret, OptionItem, OptionsList, SelectedValue, SelectWrapper } from './styles';

export default function BranchSelect({branches,selectedBranch,setSelectedBranch,setErrors,errors }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };
  
    const handleOptionClick = (option) => {
      setSelectedBranch(option);
      setIsOpen(false);
      setErrors({
        ...errors,
        branch: "",
      });
    };
  
  return (
    <SelectWrapper>
    <SelectedValue onClick={handleToggle}>
      {selectedBranch?.name || "Select Branch"}
      <Caret open={isOpen} />
    </SelectedValue>
      <OptionsList isOpen={isOpen}>
        {branches.map((branch, index) => (
          <OptionItem
            key={index}
            onClick={() => handleOptionClick(branch)}
            selectedBranch={selectedBranch.name}
            branchName={branch.name}
          >
            {branch.name}
          </OptionItem>
        ))}
      </OptionsList>
  </SelectWrapper>
  
  )
}
