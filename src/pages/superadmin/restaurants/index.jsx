import React, { useRef } from "react";
import {
  AddRestaurant,
  AddRestaurantForm,
  Arrow,
  BackIcon,
  ColorsBlock,
  ColorSection,
  Container,
  FeaturesBlock,
  FeaturesSection,
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
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
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
import { useNavigate, useSearchParams } from "react-router-dom";
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
  const [viewFeaturesSection, setViewFeaturesSection] = useState(false);
  const [squareDimension, setSquareDimension] = useState(true); // Default false



  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    getValues,
    unregister,
    setValue,
    formState,
    reset,
    watch
  } = useForm();
  // const watchedFeatures = watch("features", {});

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
            cover_url: file,
          });
        }
        // Show success alert
        alert("Restaurant updated successfully!");
        // Refetch restaurants to update the list
        refetchRestaurants();
        // Keep the form open - don't call resetComponent()
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
          cover_url: file,
        });
      }
      resetComponent()


    },
  });

  const resetComponent = () => {
    reset();
    refetchRestaurants();
    setSelectedIdForAction(null);
    setSelectedProduct(null);
    setShowAddComponent(false);
    handleOnDeleteImage();
    setIsEditMode(false)
  }

  const handleSquareDimension = (event) => {
    setSquareDimension(!squareDimension); // Toggle between true/false
    setValue("square_dimension", !squareDimension);

  };




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
    features: featureString,
    restaurant_id,
    currency,
    category_type,
    font,
    cover_url,
    font_size,
    square_dimension,
    has_slider,
    is_valid,
    IsValid,
    en_slogan,
    ar_slogan,
    default_language,
    show_all_items_category
  }) => {
    const theme = JSON.parse(themeString);
    const features = JSON.parse(featureString);
    
    setSelectedProduct({
      languages,
      template_id,
      theme,
      features,
      restaurant_id,
      currency,
      category_type,
      font,
      cover_url,
      font_size,
      square_dimension,
      has_slider,
      is_valid,
      IsValid,
      en_slogan,
      ar_slogan,
      default_language,
      show_all_items_category
    });
    setIsEditMode(true);
    setTemplate(template_id);
    setValue("username", username);
    setValue("features", features);

    setValue("phone_number", phone_number);
    setValue("email", email);
    setValue("name", restaurantName);
    setValue("currency", currency);
    setValue("category_type", category_type);

    setValue("font", font);
    setValue("font_size", font_size);
    setValue("square_dimension", square_dimension);
    setValue("has_slider", has_slider || false);
    setValue("is_valid", is_valid !== undefined ? is_valid : (IsValid !== undefined ? IsValid : true));
    setValue("en_slogan", en_slogan || "");
    setValue("ar_slogan", ar_slogan || "");
    setValue("default_language", default_language || "en");
    setValue("show_all_items_category", !!show_all_items_category);
    
    // Set theme colors in form
    Object.keys(theme).forEach((key) => {
      setValue(`theme.[${key}]`, theme[key]);
    });
    
    // Ensure homepageBackgroundColor has a default value if it doesn't exist
    if (!theme.homepageBackgroundColor) {
      setValue(`theme.[homepageBackgroundColor]`, "#ffffff");
    }
    
    if (cover_url) {
      setImageUrl(
        `https://storage.googleapis.com/ecommerce-bucket-testing/${cover_url}`
      );
    }
    setShowAddComponent(true);
    setSquareDimension(square_dimension);

    // Add restaurant ID to URL
    setSearchParams({ id: restaurant_id });
  };

  const handleAddRestaurant = () => {
    handleSubmit(
      (data) => {
        console.log("Form data:", data);
        
        // Reconstruct theme object from form data
        const theme = data.theme || {};
        const themeObject = {};
        Object.keys(theme).forEach((key) => {
          // Remove brackets from key if present (e.g., "[mainColor]" -> "mainColor")
          const cleanKey = key.replace(/[\[\]]/g, '');
          themeObject[cleanKey] = theme[key];
        });
        
        // Ensure homepageBackgroundColor has a default value if missing
        if (!themeObject.homepageBackgroundColor || themeObject.homepageBackgroundColor.trim() === '') {
          themeObject.homepageBackgroundColor = "#ffffff";
        }
        
        // Ensure has_slider and is_valid are always sent (even if false)
        const formData = {
          ...data,
          theme: themeObject, // Replace theme with properly constructed object
          has_slider: data.has_slider === true || data.has_slider === "true" || data.has_slider === 1,
          is_valid: data.is_valid === true || data.is_valid === "true" || data.is_valid === 1,
          default_language: data.default_language || "en", // Ensure default_language is always set
          show_all_items_category:
            data.show_all_items_category === true ||
            data.show_all_items_category === "true" ||
            data.show_all_items_category === 1,
        };
        console.log("Formatted form data:", formData);
        if (selectedProduct) {
          console.log("Editing restaurant:", selectedProduct.restaurant_id);
          handleEditApi(selectedProduct.restaurant_id, formData);
        } else {
          console.log("Adding new restaurant");
          handleApiCall(formData);
        }
      },
      (errors) => {
        console.error("Form validation errors:", errors);
        console.error("Form state errors:", formState.errors);
      }
    )();
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
            {console.log(selectedProduct?.features)}
            <BackIcon
              onClick={() => {
                reset();
                setSelectedIdForAction(null);
                setSelectedProduct(null);
                setShowAddComponent(false);
                handleOnDeleteImage();
                setIsEditMode(false);
                // Remove restaurant ID from URL when closing
                setSearchParams({});
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
                <InputLabel>Default Language</InputLabel>
                <Select
                  label="Default Language"
                  {...register("default_language", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.default_language)}
                  defaultValue={selectedProduct?.default_language || "en"}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="ar">Arabic</MenuItem>
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
            <FormControl component="fieldset">
              <FormLabel component="legend">Square Dimension</FormLabel>
              <FormControlLabel
                control={<Checkbox checked={squareDimension} onChange={handleSquareDimension} />}
                label="Square Dimension"
                {...register("square_dimension", { required: "Required" })}
              />
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Has Slider</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox 
                    {...register("has_slider")} 
                    defaultChecked={selectedProduct?.has_slider || false}
                    onChange={(e) => {
                      setValue("has_slider", e.target.checked);
                    }}
                  />
                }
                label="Enable Slider on Homepage"
              />
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Is Valid</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox 
                    {...register("is_valid")} 
                    defaultChecked={selectedProduct?.is_valid !== undefined ? selectedProduct.is_valid : (selectedProduct?.IsValid !== undefined ? selectedProduct.IsValid : true)}
                    onChange={(e) => {
                      setValue("is_valid", e.target.checked);
                    }}
                  />
                }
                label="Restaurant is Valid/Active"
              />
            </FormControl>
            <Box sx={{ width: "48%" }}>
              <TextField
                label="English Slogan"
                {...register("en_slogan")}
                defaultValue={selectedProduct?.en_slogan || ""}
                fullWidth
                multiline
                rows={2}
              />
            </Box>
            <Box sx={{ width: "48%" }}>
              <TextField
                label="Arabic Slogan"
                {...register("ar_slogan")}
                defaultValue={selectedProduct?.ar_slogan || ""}
                fullWidth
                multiline
                rows={2}
              />
            </Box>
            <Box sx={{ width: "30%" }}>
              <FormControl fullWidth>
                <InputLabel>Category Type</InputLabel>
                <Select
                  label="Category Type"
                  {...register("category_type", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.category_type)}
                  defaultValue={selectedProduct?.category_type}
                >
                  <MenuItem value="vertical-category">vertical-category</MenuItem>
                  <MenuItem value="horizantal-withoutIcon">horizantal-withoutIcon</MenuItem>

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
                  <MenuItem value="Gotu">Gotu</MenuItem>


                </Select>
              </FormControl>
            </Box>

            <Box sx={{ width: "30%" }}>
              <FormControl fullWidth>
                <InputLabel>Font Size</InputLabel>
                <Select
                  label="Font Size"
                  {...register("font_size", { required: "Required" })}
                  error={!isEmpty(formState?.errors?.font_size)}
                  defaultValue={selectedProduct?.font_size}
                >
                  <MenuItem value="14px">14px</MenuItem>
                  <MenuItem value="15px">15px</MenuItem>
                  <MenuItem value="16px">16px</MenuItem>
                  <MenuItem value="17px">17px</MenuItem>
                  <MenuItem value="18px">18px</MenuItem>

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
            <ColorSection onClick={() => setViewColorSection(!viewColorSection)}>
              Color Section
              <Arrow />
            </ColorSection>
            <ColorsBlock viewColorSection={viewColorSection}>

              <Box sx={{ width: "32%", marginTop: "5px" }}>
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
                  const defaultValue = selectedProduct?.theme?.[color] || (color === "homepageBackgroundColor" ? "#ffffff" : "");
                  return (
                    <TextField
                      label={color}
                      name={color}
                      variant="outlined"
                      {...register(`theme.[${color}]`, { required: "Required" })}
                      defaultValue={defaultValue}
                      style={{ width: "32%", marginTop: "5px" }}

                    />
                  );
                })}
            </ColorsBlock>
            <FeaturesSection onClick={() => setViewFeaturesSection(!viewFeaturesSection)}>
              Feature Section
              <Arrow />
            </FeaturesSection>
            <FeaturesBlock viewFeaturesSection={viewFeaturesSection}>
              {templates
                .find((t) => t.id == template)
                ?.features.map((feature) => {
                  return (
                    <FormControl component="fieldset" style={{ display: "flex", flexDirection: "row" }}>
                      <FormLabel component="legend">{feature.featureName}</FormLabel>
                      <FormControlLabel
                        control={<Checkbox
                          {...register(`features.${feature.featureName}`)}
                          defaultChecked={getValues(`features.${feature.featureName}`) ?? false} // ✅ Use `defaultChecked`
                          onChange={(e) => {
                            setValue("features", {
                              ...getValues("features"), // ✅ Preserve existing features
                              [feature.featureName]: e.target.checked, // ✅ Update only the clicked checkbox
                            });
                          }}
                        />}
                        label={feature.featureName}
                      />
                    </FormControl>
                  );
                })}
            </FeaturesBlock>
            {Number(template) === 3 && (
              <FormControl component="fieldset" style={{ display: "flex", flexDirection: "row" }}>
                <FormLabel component="legend">Theme 3 Only</FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...register("show_all_items_category")}
                      defaultChecked={getValues("show_all_items_category") ?? false}
                      onChange={(e) => setValue("show_all_items_category", e.target.checked)}
                    />
                  }
                  label="Show All Items Category"
                />
              </FormControl>
            )}
            <button onClick={() => console.log(getValues("features"))}>hadi</button>
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