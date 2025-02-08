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
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { templates } from "./themedata";
import { useAddRestaurantQuery } from "../../../apis/restaurants/addRestaurant";
import { useGetRestaurants } from "../../../apis/restaurants/getRestaurants";
import { useEditRestaurantQuery } from "../../../apis/restaurants/editRestaurant";
import { LoadingButton } from "@mui/lab";
import { useEffect } from "react";
import { isEmpty, rest } from "lodash";
import DeleteRestaurantPopup from "./deleteRestauarantPopup";
import { deleteCookie } from "../../../utilities/manageCookies";
import { useNavigate } from "react-router-dom";
import { ADMINSIGNIN } from "../../../routes/URLs";

export default function Restaurants() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedIdForAction, setSelectedIdForAction] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    unregister,
    setValue,
    formState,
    reset,
  } = useForm();

  const { response, isLoading, refetch } = useGetRestaurants({
    onSuccess: () => {},
  });

  const refetchRestaurants = () => {
    refetch()
      .then(({ data: { data } }) => setRestaurants(data))
      .catch((err) => console.log(err));
  };

  const { handleApiCall: handleEditApi, isPending: isEditing } =
    useEditRestaurantQuery({
      onSuccess: () => {
        reset();
        setSelectedIdForAction(null);
        setSelectedProduct(null);
        refetchRestaurants();
        setShowAddComponent(false);
      },
    });

  const { handleApiCall, isPending } = useAddRestaurantQuery({
    onSuccess: () => {
      rest();
      refetchRestaurants();
      setShowAddComponent(false);
    },
  });

  const [template, setTemplate] = useState();

  const handletemplate = (e) => {
    Object.keys(getValues()).map((key) => {
      const shouldDeleteField = ["username", "password", "language"].every(
        (field) => field !== key
      );
      if (shouldDeleteField) {
        unregister(key);
        setValue(key, undefined);
      }
    });
    setTemplate(e.target.value);
  };

  useEffect(() => {
    if (!isLoading) {
      setRestaurants(response?.data);
    }
  }, [isLoading]);

  const handleEdit = ({
    username,
    phone_number,
    email,
    restaurantName,
    languages,
    template_id,
    theme: themeString,
    restaurant_id,
    currency,
    font
  }) => {
    console.log(currency);
    const theme = JSON.parse(themeString);
    setSelectedProduct({
      languages,
      template_id,
      theme,
      restaurant_id,
      currency,
      font
    });
    setIsEditMode(true);
    setTemplate(template_id);
    setValue("username", username);
    setValue("phone_number", phone_number);
    setValue("email", email);
    setValue("name", restaurantName);
    setValue("currency", currency);
    setValue("font", font);

    setShowAddComponent(true);
  };

  const handleAddRestaurant = () => {
    handleSubmit((data) => {
      if (selectedProduct) {
        handleEditApi(selectedProduct.restaurant_id, data);
      } else {
        handleApiCall(data);
      }
    })();
  };

  return (
    <Container>
      {!showAddComponent ? (
        <>
          <DeleteRestaurantPopup
            refetchRestaurant={refetchRestaurants}
            isOpen={isPopupOpen}
            selectedIdForAction={selectedIdForAction}
            setIsOpen={setIsPopupOpen}
          />
          <AddRestaurant onClick={() => setShowAddComponent(true)}>
            Add Restaurant
          </AddRestaurant>
          <Table>
            <thead>
              <tr>
                <Th>User name</Th>
                <Th>Restaurant name</Th>
                <Th>Phone</Th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant) => {
                return (
                  <tr>
                    <Td>{restaurant.username}</Td>
                    <Td>{restaurant.restaurantName}</Td>
                    <Td>{restaurant.phone_number}</Td>
                    <Td>
                      <EditDeleteIcons>
                        <Edit onClick={() => handleEdit(restaurant)} />
                        <Delete
                          onClick={() => {
                            setSelectedIdForAction(restaurant.restaurant_id);
                            setIsPopupOpen(true);
                          }}
                        />
                      </EditDeleteIcons>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button
            style={{
              alignSelf: "flex-start",
              marginLeft: "20px",
              marginTop: "40px",
              textTransform: "capitalize",
              width: "150px",
              color: "white",
              backgroundColor: "turquoise",
            }}
            variant="contained"
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              deleteCookie("accessToken");
              deleteCookie("userInfo");
              navigate(ADMINSIGNIN);
            }}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <AddRestaurantForm>
            <BackIcon
              onClick={() => {
                reset();
                setSelectedIdForAction(null);
                setSelectedProduct(null);
                setShowAddComponent(false);
              }}
            />

            <TextField
              label="UserName"
              name="username"
              variant="outlined"
              {...register("username", { required: "Required" })}
              error={!isEmpty(formState?.errors?.username)}
              helperText={
                !isEmpty(formState?.errors?.username) &&
                formState.errors?.username.message
              }
            />
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              {...register("password", !isEditMode && { required: "Required" })}
              error={!isEmpty(formState?.errors?.password)}
              helperText={
                !isEmpty(formState?.errors?.password) &&
                formState.errors?.password.message
              }
            />
            <TextField
              label="Phone"
              variant="outlined"
              name="phone_number"
              {...register("phone_number", { required: "Required" })}
              error={!isEmpty(formState?.errors?.phone_number)}
              helperText={
                !isEmpty(formState?.errors?.phone_number) &&
                formState.errors?.phone_number.message
              }
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              {...register("email", { required: "Required" })}
              error={!isEmpty(formState?.errors?.email)}
              helperText={
                !isEmpty(formState?.errors?.email) &&
                formState.errors?.email.message
              }
            />
            <TextField
              label="Restaurant name"
              variant="outlined"
              name="name"
              {...register("name", { required: "Required" })}
              error={!isEmpty(formState?.errors?.name)}
              helperText={
                !isEmpty(formState?.errors?.name) &&
                formState.errors?.name.message
              }
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select
                  label="Language"
                  {...register("languages", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.languages)}
                  defaultValue={selectedProduct?.languages}
                >
                  <MenuItem value="en">En</MenuItem>
                  <MenuItem value="ar">Ar</MenuItem>
                  <MenuItem value="en&ar">En/Ar</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel>Currency</InputLabel>
                <Select
                  label="Currency"
                  {...register("currency", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.currency)}
                  defaultValue={selectedProduct?.currency}
                >
                  <MenuItem value="dollar">Dollar</MenuItem>
                  <MenuItem value="lb">Lb</MenuItem>
                  <MenuItem value="gram">Gram</MenuItem>
                  <MenuItem value="killogram">KilloGram</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel>Font</InputLabel>
                <Select
                  label="Font"
                  {...register("font", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.font)}
                  defaultValue={selectedProduct?.font}
                >
                  <MenuItem value="Arial">Arial</MenuItem>
                  <MenuItem value="Times New Roman">Times New Roman</MenuItem>
                  <MenuItem value="Courier New">Courier New</MenuItem>
                  <MenuItem value="Georgia">Georgia</MenuItem>
                  <MenuItem value="Verdana">Verdana</MenuItem>
                  <MenuItem value="Roboto Flex">Roboto Flex</MenuItem>
                  <MenuItem value="Teko">Teko</MenuItem>

                  
                
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel>Template</InputLabel>
                <Select
                  label="mediaType"
                  {...register("template_id", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.template_id)}
                  onChange={handletemplate}
                  defaultValue={selectedProduct?.template_id}
                >
                  {templates.map(({ name, id }) => (
                    <MenuItem value={id}>{name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {templates
              .find((t) => t.id == template)
              ?.colors.map((color) => {
                return (
                  <TextField
                    label={color}
                    name={color}
                    variant="outlined"
                    {...register(`theme.[${color}]`, { required: "Required" })}
                    defaultValue={selectedProduct?.theme?.[color]}
                  />
                );
              })}
            <LoadingButton
              onClick={handleAddRestaurant}
              style={{ backgroundColor: "turquoise", color: "white" }}
              loading={isPending || isEditing}
            >
              {isEditMode ? "Edit Restaurant" : "Add Restaurant"}
            </LoadingButton>
          </AddRestaurantForm>
        </>
      )}
    </Container>
  );
}