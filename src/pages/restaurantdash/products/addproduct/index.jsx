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
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
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
import { useEditProductQuery } from "../../../../apis/products/editProduct";
import { useDeleteProductQuery } from "../../../../apis/products/deleteProduct";
import { useQueryClient } from "@tanstack/react-query";

export default function AddProduct({
  setIsFormOpen,
  selectedProduct,
  refetchProducts,
  setSelectedProduct,
  userInformation
}) {
  const queryClient = useQueryClient();
  const [file, setFile] = useState(null);
  const [fileErrMsg, setFileErrMsg] = useState("Please upload image");

  const [imageUrl, setImageUrl] = useState(null);
  const [categories, setCategories] = useState([]);
  const fileInputRef = useRef(null);
  const { AR, EN, ENAR } = LANGUAGES;

  const schema =
    userInformation.Lang === LANGUAGES.AR
      ? arProductSchema
      : userInformation.Lang === LANGUAGES.EN
      ? enProductSchema
      : EnArProductSchema;

  const { register, handleSubmit, formState, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleApiCall, isPending } = useAddProductQuery({
    onSuccess: () => {
      setSelectedProduct(null);
      refetchProducts();
      setIsFormOpen(false);
      // queryClient.invalidateQueries(['products'])
      queryClient.resetQueries(['products'], { exact: true });
    },
  });

  const { handleApiCall: handleDeleteProduct, isPending: isDeleting } =
    useDeleteProductQuery({
      onSuccess: () => {
        setSelectedProduct(null);
        refetchProducts();
        setIsFormOpen(false);
      },
    });

  const { handleApiCall: handleEditApi, isPending: isEditing } =
    useEditProductQuery({
      onSuccess: () => {
        setSelectedProduct(null);
        setIsFormOpen(false);
        queryClient.resetQueries(['products'], { exact: true });

      },
    });

  const { isLoading, response } = useGetCategories({
    onSuccess: () => setIsFormOpen(false),
    restaurantId: userInformation.restaurant_id,
  });

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

  useEffect(() => {
    if (!isLoading) {
      setCategories(response.data);
    }
  }, [isLoading]);

  useEffect(() => {
    if (selectedProduct) {
      if (userInformation.Lang === EN) {
        const { en_name, en_description, en_price } = selectedProduct;

        setValue("en_name", en_name);
        setValue("en_description", en_description);
        setValue("en_price", en_price);
      } else if (userInformation.Lang === AR) {
        const { ar_name, ar_description, ar_price } = selectedProduct;

        setValue("ar_name", ar_name);
        setValue("ar_description", ar_description);
        setValue("ar_price", ar_price);
      } else {
        const {
          en_name,
          en_description,
          en_price,
          ar_name,
          ar_description,
          ar_price,
        } = selectedProduct;

        setValue("en_name", en_name);
        setValue("en_description", en_description);
        setValue("en_price", en_price);

        setValue("ar_name", ar_name);
        setValue("ar_description", ar_description);
        setValue("ar_price", ar_price);
      }

      setValue(
        "image",
        `https://storage.googleapis.com/ecommerce-bucket-testing/${selectedProduct.image.url}`
      );
      setImageUrl(
        `https://storage.googleapis.com/ecommerce-bucket-testing/${selectedProduct.image.url}`
      );
      setValue("category_id", selectedProduct.category_id);
      setValue("priority", selectedProduct.priority);
    }
  }, []);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleAddProduct = () => {
    handleSubmit((data) => {
      if (file || imageUrl) {
        if (selectedProduct) {
          handleEditApi(selectedProduct.id, {
            ...data,
            image: file,
            restaurant_id: userInformation.restaurant_id,
          });
        } else {
          handleApiCall({
            ...data,
            image: file,
            restaurant_id: userInformation.restaurant_id,
          });
        }
      }
    })();
  };

  const handleOnDeleteImage = () => {
    setImageUrl(null);
    setFile(null);
    setValue("image", null);
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
      <BackIcon
        onClick={() => {
          setSelectedProduct(null);
          setIsFormOpen(false);
          setImageUrl(null);
          setFile(null);
        }}
      />
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
        {!file && !getValues().image && (
          <UploadImageText>{fileErrMsg}</UploadImageText>
        )}
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
      <TextField
        label={"Priority"}
        name={"priority"}
        variant="outlined"
        {...register("priority")}
        style={fieldStyle}
        error={!isEmpty(formState?.errors?.priority)}
        helperText={!isEmpty(formState?.errors?.priority) && "Required Field"}
        type="number"
        defaultValue={1}
        inputProps={{ min: 1 }}
      />

      <Box style={fieldStyle}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            {...register("category_id")}
            error={!isEmpty(formState?.errors?.category_id)}
            defaultValue={selectedProduct?.category_id}
          >
            <MenuItem value={0}>Offer</MenuItem>
            {categories.map(({ id, en_category, ar_category }) => (
              <MenuItem value={id} key={id}>
                {en_category || ar_category}
              </MenuItem>
            ))}
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
          loading={isPending || isEditing}
          variant="contained"
          style={{ backgroundColor: "turquoise" }}
          onClick={handleAddProduct}
          disabled={isDeleting}
        >
          {selectedProduct ? "Edit Product" : "Add Product"}
        </LoadingButton>
      </Row>
      {/* {selectedProduct && (
        <Row>
          <LoadingButton
            disabled={isPending || isEditing}
            loading={isDeleting}
            variant="contained"
            style={{ backgroundColor: "turquoise" }}
            onClick={() => handleDeleteProduct(selectedProduct.id)}
          >
            Delete Product
          </LoadingButton>
        </Row>
      )} */}
    </ProductInfo>
  );
}
