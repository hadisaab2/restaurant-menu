import React, { useState } from "react";
import {
  AddMediaForm,
  Table,
  Th,
  Td,
  EditDeleteIcons,
  Edit,
  Delete,
  AddMedia,
  BackIcon
} from "./styles";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Box,
  
} from "@mui/material";

export default function SocialMedia() {
  const [showAddComponent, setShowAddComponent] = useState(false);

  const [media, setMedia] = useState([
    {
      name: "Instagram",
      link: "www.instagram.com/addict",
    },
    {
      name: "Instagram",
      link: "www.instagram.com/addict",
    },
  ]);

  const [mediaType, setMediaType] = useState("");
  const handleChange = (event) => {
    setMediaType(event.target.value);
  };
  return (
    <>
      {showAddComponent ? (
        <AddMediaForm>
          <BackIcon onClick={() => setShowAddComponent(false)} />
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

          <AddMedia  >
            Add Media
          </AddMedia>
        </AddMediaForm>
      ) : (
        <>
        <AddMedia onClick={() => setShowAddComponent(true)} >
        Add Media
      </AddMedia>
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
                      <Edit onClick={() => setShowAddComponent(true)} />
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
