import React, { useEffect, useRef, useState } from "react";
import {
  BackIcon,
  ProductInfo,
  UploadPhoto,
  UploadBtn,
  UploadedImage,
  Row,
  fieldStyle,
} from "./styles";
import {
  Button,
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { getCookie } from "../../../../utilities/manageCookies";
import { LANGUAGES } from "../../../../global/index";
import { useAddProductQuery } from "../../../../apis/products/addPRoduct";
import { useNavigate } from "react-router-dom";

export default function AddProduct({ setEditProduct, setIsFormOpen }) {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [userInformation, setUserInformation] = useState({});
  const { register, handleSubmit } = useForm();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const { handleApiCall } = useAddProductQuery({
    onSuccess: () => setIsFormOpen(false),
  });

  const handleFileChange = ({ target }) => {
    if (target.files[0]) {
      setFile(target.files[0]);
      const url = URL.createObjectURL(target.files[0]);
      setImageUrl(url);
    }
    target.value = null;
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const storedUserInfo = getCookie("userInfo") || "{}";
    setUserInformation(JSON.parse(storedUserInfo));
  }, []);

  const handleAddProduct = () => {
    handleSubmit((data) => {
      handleApiCall({
        ...data,
        image: file,
        restaurant_id: userInformation.restaurant_id,
      });
    })();
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
      <Row>
        <UploadPhoto
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <UploadBtn onClick={handleButtonClick}>Upload Image</UploadBtn>
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
            />
          )
      )}

      <Box style={fieldStyle}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select label="Category" {...register("category_id")}>
            <MenuItem value={1}>Burgers</MenuItem>
            <MenuItem value={2}>Pizzas</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Row>
        <Button
          variant="contained"
          style={{ backgroundColor: "turquoise" }}
          onClick={handleAddProduct}
        >
          Add Product
        </Button>
      </Row>
    </ProductInfo>
  );
}
