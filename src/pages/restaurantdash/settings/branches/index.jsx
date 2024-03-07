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

export default function Branches() {
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [branches, setBranches] = useState([
    {
      name: "Beirut",
      location: "Beirut / Sayed Nasralah Street",
      maps: "www.googlemaps.com/addict",
    },
    {
      name: "Beirut",
      location: "Beirut / Sayed Nasralah Street",
      maps: "www.googlemaps.com/addict",
    },
  ]);
  return (
    <>
      {showAddComponent ? (
        <AddBranchForm>
          <BackIcon onClick={() => setShowAddComponent(false)} />

          <TextField label="Name" name="Name" variant="outlined" />
          <TextField label="Location" variant="outlined" name="Location" />
          <TextField label="Maps" variant="outlined" name="Maps" />
          <AddBranch>Add Branch</AddBranch>
        </AddBranchForm>
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
              {branches.map(({ name, location, maps }) => {
                return (
                  <tr>
                    <Td>{name}</Td>
                    <Td>{location}</Td>
                    <Td>
                      <a href="#">{maps}</a>
                    </Td>
                    <Td>
                      <EditDeleteIcons>
                        <Edit  onClick={() => setShowAddComponent(true)}/>
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
