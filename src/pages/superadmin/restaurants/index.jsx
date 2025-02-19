import React, { useRef } from "react";
import {
  AddRestaurant,
  AddRestaurantForm,
  Arrow,
  BackIcon,
  ColorsBlock,
  ColorSection,
  Container,
  UploadBtn,
  UploadedImage,
  UploadImageText,
  UploadPhoto,
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
import { useAddRestaurantCoverQuery } from "../../../apis/restaurants/addCoverLogo";
import { useEditRestaurantCoverQuery } from "../../../apis/restaurants/editCoverLogo";
import TableRestaurants from "./tableRestaurants";

export default function Restaurants() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedIdForAction, setSelectedIdForAction] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [template, setTemplate] = useState();
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [fileErrMsg, setFileErrMsg] = useState("Please upload image");
  const fileInputRef = useRef(null);
  const [viewColorSection, setViewColorSection] = useState(false);

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
    onSuccess: () => { },
  });

  const refetchRestaurants = () => {
    refetch()
      .then(({ data: { data } }) => setRestaurants(data))
      .catch((err) => console.log(err));
  };

  const { handleApiCall: editRestaurantCover } = useEditRestaurantCoverQuery({
    onSuccess: () => {
    },
  });


  const { handleApiCall: handleEditApi, isPending: isEditing } =
    useEditRestaurantQuery({
      onSuccess: (response) => {
        const restaurantId = response?.data?.id;
        if (restaurantId && file) {
          editRestaurantCover({
            id: restaurantId,
            cover_url: file, // Assume you have the cover image file in this variable
          });
        }
        resetComponent()
      },
    });

  const { handleApiCall: addRestaurantCover, isPending: isAddingCover } = useAddRestaurantCoverQuery({
    onSuccess: () => {
    },
  });


  const { handleApiCall, isPending } = useAddRestaurantQuery({
    onSuccess: (response) => {
      const restaurantId = response?.data?.id;
      if (restaurantId && file) {
        addRestaurantCover({
          id: restaurantId,
          cover_url: file, // Assume you have the cover image file in this variable
        });
      }
      resetComponent()


    },
  });

  const resetComponent = () => {
    rest();
    refetchRestaurants();
    setSelectedIdForAction(null);
    setSelectedProduct(null);
    setShowAddComponent(false);
    handleOnDeleteImage();
    setIsEditMode(false)
  }





  const handletemplate = (e) => {
    //Should empty all fields except these fields
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
    font,
    cover_url
  }) => {
    const theme = JSON.parse(themeString);
    setSelectedProduct({
      languages,
      template_id,
      theme,
      restaurant_id,
      currency,
      font,
      cover_url
    });
    setIsEditMode(true);
    setTemplate(template_id);
    setValue("username", username);
    setValue("phone_number", phone_number);
    setValue("email", email);
    setValue("name", restaurantName);
    setValue("currency", currency);
    setValue("font", font);
    if (cover_url) {
      setImageUrl(
        `https://storage.googleapis.com/ecommerce-bucket-testing/${cover_url}`
      );
    }
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



  const handleFileChange = ({ target }) => {
    if (target.files[0]) {
      const uploadedFile = target.files[0];
      const fileSizeInMB = uploadedFile.size / (1024 * 1024);
      if (fileSizeInMB > 4) {
        setFileErrMsg("Image is greater than 4MB");
        return;
      } else {
        setFileErrMsg("Please upload image");
      }
      setFile(target.files[0]);
      const url = URL.createObjectURL(target.files[0]);
      setImageUrl(url);
    }
    target.value = null;
  };

  const handleOnDeleteImage = () => {
    setImageUrl(null);
    setFile(null);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const mainFields = [
    { label: "UserName", name: "username", required: true },
    { label: "Password", name: "password", required: !isEditMode },
    { label: "Phone", name: "phone_number", required: true },
    { label: "Email", name: "email", required: true },
    { label: "Restaurant name", name: "name", required: true }
  ];


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
          {/* <Table>
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
          </Table> */}
          <TableRestaurants restaurants={restaurants} setSelectedIdForAction={setSelectedIdForAction} setIsPopupOpen={setIsPopupOpen} handleEdit={handleEdit} />
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
                handleOnDeleteImage();
              }}
            />


            {mainFields.map(({ label, name, required }) => (
              <TextField
                key={name}
                label={label}
                variant="outlined"
                name={name}
                {...register(name, required && { required: "Required" })}
                error={!isEmpty(formState?.errors?.[name])}
                helperText={
                  !isEmpty(formState?.errors?.[name]) && formState.errors?.[name].message
                }
                style={{ width: "30%" }}
              />
            ))}
            <Box sx={{ width: "30%" }}>
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
            <Box sx={{ width: "30%" }}>
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
            <Box sx={{ width: "30%" }}>
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
            <UploadPhoto
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            {imageUrl ? (
              <Button
                variant="contained"
                color="error"
                style={{ width: "150px", height: "40px" }}
                onClick={() => handleOnDeleteImage()}
              >
                Delete
              </Button>
            ) : (
              <UploadBtn onClick={handleButtonClick}>Upload Image</UploadBtn>
            )}
            {!imageUrl && !getValues().image && (
              <UploadImageText>{fileErrMsg}</UploadImageText>
            )}
            {imageUrl && <UploadedImage src={imageUrl} alt="Uploaded" />}
            <ColorSection onClick={()=>setViewColorSection(!viewColorSection)}>
              Color Section
              <Arrow/>
            </ColorSection>
            <ColorsBlock viewColorSection={viewColorSection}>
            
            <Box sx={{ width: "32%" ,marginTop:"5px"}}>
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
                    style={{ width: "32%",marginTop:"5px" }}

                  />
                );
              })}
              </ColorsBlock>
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