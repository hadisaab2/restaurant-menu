import React, { useState } from 'react'
import { Caret, Loader, LoaderWrapper, OptionItem, OptionsList, OptionText, Search, SearchIcon, SearchWrapper, SelectedValue, SelectWrapper } from './styles';
import { useGetBranch } from '../../../../../../apis/branches/getBranch';
import { SearchContainer } from './styles';

export default function RegionSelect({ selectedBranch, selectedRegion, setSelectedRegion }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { response: fetchedBranch, isLoading: branchLoading, refetch: refetchBranchDetails } = useGetBranch({
    branch_id: selectedBranch.id, // Trigger fetch based on branch_id,
    onSuccess: () => {
    }
  });


  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedRegion(option);
    setIsOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredRegions = fetchedBranch?.data?.regions.filter((region) =>
    region.region_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SelectWrapper>
      <SelectedValue onClick={handleToggle}>
        {selectedRegion || "Select Region"}
        <Caret open={isOpen} />
      </SelectedValue>


      <OptionsList isOpen={isOpen}>
        {!branchLoading ?
          <>
            <SearchWrapper>
              <SearchContainer>
                <Search placeholder='Search' value={searchTerm} onChange={handleSearchChange} />
                <SearchIcon />
              </SearchContainer>
            </SearchWrapper>
            {filteredRegions?.map((region, index) => (
              <OptionItem
                key={index}
                onClick={() => handleOptionClick(region.region_name)}
                selectedRegion={selectedRegion}
                regionName={region.region_name}
              >
                <OptionText>{region.region_name}</OptionText>

              </OptionItem>
            ))}
          </>

          : <LoaderWrapper><Loader /></LoaderWrapper> }
      </OptionsList>

    </SelectWrapper>
  )
}
