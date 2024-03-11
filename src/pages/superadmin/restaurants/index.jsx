import React from "react";
import {
  AddRestaurant,
  AddRestaurantForm,
  BackIcon,
  Container,
  Delete,
  Edit,
  EditDeleteIcons,
  Table,
  Td,
  Th,
} from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { templates } from "./themedata";
export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([
    { name: "Addict", template: "template1" },
    { name: "Addict", template: "template1" },
    { name: "Addict", template: "template1" },
  ]);
  const { register, handleSubmit, getValues } = useForm();

  const [showAddComponent, setShowAddComponent] = useState(false);
  const [template, setTemplate] = useState("");

  const handletemplate = (e) => {
    setTemplate(e.target.value);
  };
  const handleAddRestaurant = () => {
    console.log(getValues());
    handleSubmit((data) => {
      console.log(data);
    })();
  };
  return (
    <Container>
      {!showAddComponent ? (
        <>
          <AddRestaurant onClick={() => setShowAddComponent(true)}>
            Add Restaurant
          </AddRestaurant>
          <Table>
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Locations</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map(({ name, template }) => {
                return (
                  <tr>
                    <Td>{name}</Td>
                    <Td>{template}</Td>
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
      ) : (
        <>
          <AddRestaurantForm>
            <BackIcon onClick={() => setShowAddComponent(false)} />

            <TextField
              label="UserName"
              name="userName"
              variant="outlined"
              {...register("username")}
            />
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              {...register("password")}
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Language"
                  {...register("language")}
                >
                  <MenuItem value="en">En</MenuItem>
                  <MenuItem value="ar">Ar</MenuItem>
                  <MenuItem value="en/ar">En/Ar</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Template</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="mediaType"
                  {...register("template")}
                  onChange={handletemplate}
                  value={template}
                >
                  {templates.map(({ name }) => {
                    return <MenuItem value={name}>{name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>

            {templates
              .find((t) => t.name == template)
              ?.colors.map((color) => {
                return (
                  <TextField
                    label={color}
                    name={color}
                    variant="outlined"
                    {...register(color)}
                  />
                );
              })}
            <AddRestaurant onClick={handleAddRestaurant}>
              Add Restaurant
            </AddRestaurant>
          </AddRestaurantForm>
        </>
      )}
    </Container>
  );
}
