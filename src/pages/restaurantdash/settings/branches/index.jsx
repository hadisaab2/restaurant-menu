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
} from "./styles";
import { TextField, Button } from "@mui/material";

export default function Branches() {
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
      <Title>Branches</Title>
      <AddBranchForm>
        <TextField label="Name" name="Name" variant="outlined" />
        <TextField label="Location" variant="outlined" name="Location" />
        <TextField label="Maps" variant="outlined" name="Maps" />
        <Button variant="contained" style={{ backgroundColor: "turquoise" }}>
          Add Branch
        </Button>
      </AddBranchForm>
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
                    <Edit />
                    <Delete />
                  </EditDeleteIcons>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
