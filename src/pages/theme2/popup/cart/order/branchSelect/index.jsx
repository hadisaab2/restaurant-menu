import React, { useState } from 'react'
import { Caret, OptionItem, OptionsList, SelectedValue, SelectWrapper } from './styles';

export default function BranchSelect({branches,selectedBranch,setSelectedBranch}) {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };
  
    const handleOptionClick = (option) => {
      console.log(option)
      setSelectedBranch(option);
      setIsOpen(false);
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
