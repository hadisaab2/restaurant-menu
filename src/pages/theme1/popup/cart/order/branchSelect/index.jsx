import React, { useState } from 'react'
import { Caret, HasNoDelivery, OptionItem, OptionsList, SelectedValue, SelectWrapper } from './styles';

export default function BranchSelect({ deliveryType, branches, selectedBranch, setSelectedBranch, setErrors, errors }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    if (option.has_delivery || deliveryType != "Delivery") {
      setSelectedBranch(option);
      setIsOpen(false);
      setErrors({
        ...errors,
        branch: "",
      });
    }
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
            disable={!branch.has_delivery && deliveryType == "Delivery"}
          >
            {branch.name}
            {(!branch.has_delivery && deliveryType == "Delivery") && <HasNoDelivery>
              No Delivery

            </HasNoDelivery>
            }
          </OptionItem>
        ))}
      </OptionsList>
    </SelectWrapper>

  )
}
