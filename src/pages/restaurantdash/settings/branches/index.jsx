import React, { useEffect, useState } from "react";
import {
  AddBranchForm,
  Container,
  Title,
  Table,
  Th,
  Td,
  EditDeleteIcons,
  Edit,
  Delete,
  BackIcon,
  AddBranch,
} from "./styles";
import { TextField, Button } from "@mui/material";
import AddEditBranch from "./addbranch";
import { useGetBranches } from "../../../../apis/branches/getBranches";
import { getCookie } from "../../../../utilities/manageCookies";
import DeleteBranchPopup from "./deleteBranchPopup";

export default function Branches() {
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [isPopupOpen, setIsPopUpOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedIdForAction, setSelectedIdForAction] = useState(null);
  const [branches, setBranches] = useState([]);
  const storedUserInfo = getCookie("userInfo") || "{}";
  const [userInformation, _] = useState(JSON.parse(storedUserInfo));
  const { response, refetch, isLoading } = useGetBranches({
    onSuccess: () => {},
    restaurant_id: userInformation.restaurant_id,
  });

  const refetchBranches = () => {
    refetch().then(({ data: { data } }) => setBranches(data));
  };

  const handleEdit = (branch) => {
    setSelectedIdForAction(branch.id);
    setSelectedBranch(branch);
    setShowAddComponent(true);
  };

  useEffect(() => {
    if (!isLoading) {
      setBranches(response?.data);
    }
  }, [isLoading]);

  return (
    <>
      {showAddComponent ? (
        <AddEditBranch
          selectedBranch={selectedBranch}
          setSelectedBranch={setSelectedBranch}
          setShowAddComponent={setShowAddComponent}
          refetchBranches={refetchBranches}
          userInformation={userInformation}
          selectedIdForAction={selectedIdForAction}
          setSelectedIdForAction={setSelectedIdForAction}
        />
      ) : (
        <>
          <DeleteBranchPopup
            selectedIdForAction={selectedIdForAction}
            isOpen={isPopupOpen}
            setIsOpen={setIsPopUpOpen}
            refetchBranches={refetchBranches}
            setSelectedIdForAction={setSelectedIdForAction}
          />
          <AddBranch onClick={() => setShowAddComponent(true)}>
            Add Branch
          </AddBranch>
          <Table>
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Locations</Th>
                <Th>Maps Link</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {branches?.map((branch) => {
                return (
                  <tr>
                    <Td>{branch.name}</Td>
                    <Td>{branch.location}</Td>
                    <Td>
                      <a href="#">{branch.mapLink}</a>
                    </Td>
                    <Td>
                      <EditDeleteIcons>
                        <Edit onClick={() => handleEdit(branch)} />
                        <Delete
                          onClick={() => {
                            setSelectedIdForAction(branch.id);
                            setIsPopUpOpen(true);
                          }}
                        />
                      </EditDeleteIcons>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
}
