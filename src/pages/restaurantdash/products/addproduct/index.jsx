import React, { useEffect, useRef, useState } from "react";
import {
  BackIcon,
  ProductInfo,
  UploadPhoto,
  UploadBtn,
  UploadedImage,
  Row,
  fieldStyle,
  UploadImageText,
} from "./styles";
import {
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { getCookie } from "../../../../utilities/manageCookies";
import { LANGUAGES } from "../../../../global/index";
import { useAddProductQuery } from "../../../../apis/products/addPRoduct";
import { yupResolver } from "@hookform/resolvers/yup";
import { isEmpty } from "lodash";
import {
  EnArProductSchema,
  arProductSchema,
  enProductSchema,
} from "../yup-shap";
import { LoadingButton } from "@mui/lab";
import { useGetCategories } from "../../../../apis/categories/getCategories";

export default function AddProduct({ setEditProduct, setIsFormOpen }) {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [categories, setCategories] = useState([]);
  const fileInputRef = useRef(null);
  const storedUserInfo = getCookie("userInfo") || "{}";
  const [userInformation, setUserInformation] = useState(
    JSON.parse(storedUserInfo)
  );

  const schema =
    userInformation.Lang === LANGUAGES.AR
      ? arProductSchema
      : userInformation.Lang === LANGUAGES.EN
      ? enProductSchema
      : EnArProductSchema;

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleApiCall, isPending } = useAddProductQuery({
    onSuccess: () => setIsFormOpen(false),
  });
  const { isLoading, response } = useGetCategories({
    onSuccess: () => setIsFormOpen(false),
    restaurantId: userInformation.restaurant_id,
  });

  const handleFileChange = ({ target }) => {
    if (target.files[0]) {
      setFile(target.files[0]);
      const url = URL.createObjectURL(target.files[0]);
      setImageUrl(url);
    }
    target.value = null;
  };

  useEffect(() => {
    if (!isLoading) {
      setCategories(response.data);
    }
  }, [isLoading]);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleAddProduct = () => {
    if (file) {
      handleSubmit((data) => {
        handleApiCall({
          ...data,
          image: file,
          restaurant_id: userInformation.restaurant_id,
        });
      })();
    }
  };

  const displayEnglish =
    userInformation.Lang === LANGUAGES.EN ||
    userInformation.Lang === LANGUAGES.ENAR;

  const displayArabic =
    userInformation.Lang === LANGUAGES.AR ||
    userInformation.Lang === LANGUAGES.ENAR;

  const fields = [
    {
      name: "en_name",
      label: "English name",
      display: displayEnglish,
      type: "text",
    },
    {
      name: "ar_name",
      label: "Arabic name",
      display: displayArabic,
      type: "text",
    },
    {
      name: "en_description",
      label: "English description",
      display: displayEnglish,
      type: "text",
    },
    {
      name: "ar_description",
      label: "Arabic description",
      display: displayArabic,
      type: "text",
    },
    {
      name: "en_price",
      label: "English price",
      display: displayEnglish,
      type: "number",
    },
    {
      name: "ar_price",
      label: "Arabic price",
      display: displayArabic,
      type: "number",
    },
  ];

  return (
    <ProductInfo>
      <BackIcon onClick={() => setIsFormOpen(false)} />
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <UploadPhoto
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <UploadBtn onClick={handleButtonClick}>Upload Image</UploadBtn>
        {!file && <UploadImageText>Please upload image</UploadImageText>}
      </Row>

      {imageUrl && (
        <Row>
          <UploadedImage src={imageUrl} alt="Uploaded" />
        </Row>
      )}

      {fields.map(
        ({ name, label, display, type }) =>
          display && (
            <TextField
              label={label}
              name={name}
              variant="outlined"
              {...register(name)}
              style={fieldStyle}
              type={type}
              error={!isEmpty(formState?.errors?.[name])}
              helperText={
                !isEmpty(formState?.errors?.[name]) &&
                formState.errors?.[name].message
              }
            />
          )
      )}

      <Box style={fieldStyle}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            {...register("category_id")}
            error={!isEmpty(formState?.errors?.category_id)}
          >
            <>
              {categories.map((category) => (
                <MenuItem value={category.id}>{category.en_category}</MenuItem>
              ))}
            </>
          </Select>
          {!isEmpty(formState?.errors?.category_id) && (
            <FormHelperText style={{ color: "#d64241" }}>
              Required field
            </FormHelperText>
          )}
        </FormControl>
      </Box>
      <Row>
        <LoadingButton
          loading={isPending}
          variant="contained"
          style={{ backgroundColor: "turquoise" }}
          onClick={handleAddProduct}
        >
          Add Product
        </LoadingButton>
      </Row>
    </ProductInfo>
  );
}
