import React, { useState } from "react";
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

export default function Branches() {
  const [showAddComponent, setShowAddComponent] = useState(false);
  const[selectedBranch,setSelectedBranch]=useState(null)
  const [branches, setBranches] = useState([
    {
      name: "Beirut",
      location: "Beirut / Sayed Nasralah Street",
      maps: "www.googlemaps.com/addictbeirut",
    },
    {
      name: "Sour",
      location: "Sour / Bus Street",
      maps: "www.googlemaps.com/addictsour",
    },
  ]);

  const handleEdit= (branch)=>{
   setShowAddComponent(true)
   setSelectedBranch(branch)
  }
  return (
    <>
      {showAddComponent ? (
          <AddEditBranch selectedBranch={selectedBranch} setSelectedBranch={setSelectedBranch} setShowAddComponent={setShowAddComponent}/>
      ) : (
        <>
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
              {branches.map((branch) => {
                return (
                  <tr>
                    <Td>{branch.name}</Td>
                    <Td>{branch.location}</Td>
                    <Td>
                      <a href="#">{branch.maps}</a>
                    </Td>
                    <Td>
                      <EditDeleteIcons>
                        <Edit  onClick={()=>handleEdit(branch)}/>
                        <Delete />
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
