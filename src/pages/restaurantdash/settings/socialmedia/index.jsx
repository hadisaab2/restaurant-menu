import React, { useState } from "react";
import {
    AddMediaForm,
  Container,
  Title,
  Table,
  Th,
  Td,
  EditDeleteIcons,
  Edit,
  Delete,
} from "./styles";
import { TextField, Button, InputLabel, Select, FormControl, MenuItem,Box } from "@mui/material";

export default function SocialMedia() {
  const [media, setMedia] = useState([
    {
      name: "Instagram",
      link: "www.instagram.com/addict",
    },
    {
        name: "Instagram",
        link: "www.instagram.com/addict",
      }
  ]);

  const[mediaType,setMediaType]=useState("")
  const handleChange = (event) => {
    setMediaType(event.target.value)
  };
  return (
    <>
      <Title>Social Media</Title>
      <AddMediaForm>
      <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Media</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={mediaType}
                label="mediaType"
                onChange={handleChange}
              >
                <MenuItem value={10}>Instagram</MenuItem>
                <MenuItem value={20}>Facebook</MenuItem>
                <MenuItem value={30}>Tiktok</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField label="Link" name="Link" variant="outlined" />

        <Button variant="contained" style={{ backgroundColor: "turquoise" }}>
          Add Media
        </Button>
      </AddMediaForm>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Link</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {media.map(({ name, link }) => {
            return (
              <tr>
                <Td>{name}</Td>
                <Td>
                  <a href="#">{link}</a>
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
