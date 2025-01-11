import React, { useEffect, useRef, useState } from "react";
import {
  BackIcon,
  ProductInfo,
  UploadPhoto,
  UploadBtn,
  UploadedImage,
  Row,
  fieldStyle,
  UploadedImageContainer,
  UploadedImageWrapper,
  ImagesContainer,
  Delete,
  ButtonsContainer,
  CoverImage,
  UploadImageText,
  Tabs,
  Tab
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
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from "react-icons/fa6";
import imageCompression from "browser-image-compression";

import FormBuilder from "./formbuilder";

export default function AddProduct({
  setIsFormOpen,
  selectedProduct,
  refetchProducts,
  setSelectedProduct,
  userInformation,
}) {
  const queryClient = useQueryClient();
  const [images, setImages] = useState([]);
  const [fileErrMsg, setFileErrMsg] = useState("");
  const [coverId, setCoverId] = useState(null);
  const [jsonString, setJsonString] = useState("{}");
  const [activeTab,setActiveTab]=useState("productinfo")
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
      queryClient.resetQueries(["products"], { exact: true });
    },
    onError: () => {
      toast.error("Failed to add product !!");
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
        queryClient.resetQueries(["products"], { exact: true });
      },
      onError: () => {
        toast.error("Failed to edit product !!");
      },
    });

  const { isLoading, response } = useGetCategories({
    onSuccess: () => setIsFormOpen(false),
    restaurantId: userInformation.restaurant_id,
  });


  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }

    if (files.length + images.length > 8) {
      setFileErrMsg("Limit 8 images");
      return;
    }

    let hasError = false;
    for (const file of files) {
      const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to MB

      try {
        const options = {
          maxSizeMB: 0.3, // Maximum file size (MB)
          maxWidthOrHeight: 1920, // Compressed file's maximum width or height
          useWebWorker: true, // Use multi-threading for better performance
        };

        const compressedFile = await imageCompression(file, options);

        // Generate a unique ID and create a new file object with a modified file name
        const uniqueId = uuidv4();
        const modifiedFile = new File([compressedFile], `${uniqueId}`, {
          type: compressedFile.type,
        });

        // Add new image object to the images state
        setImages((prevImages) => [
          ...prevImages,
          {
            url: URL.createObjectURL(file),
            isDeleted: false,
            file: modifiedFile,
            id: uniqueId,
          },
        ]);
      } catch (error) {
        console.error("Error compressing image:", error);
        setFileErrMsg("Error compressing image");
        hasError = true;
        break;
      }
    }

    if (!hasError) {
      setFileErrMsg("");
    }

    // Clear the input after the files have been handled
    event.target.value = null;
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
        const { ar_name, ar_description } = selectedProduct;

        setValue("ar_name", ar_name);
        setValue("ar_description", ar_description);
      } else {
        const { en_name, en_description, en_price, ar_name, ar_description } =
          selectedProduct;

        setValue("en_name", en_name);
        setValue("en_description", en_description);
        setValue("en_price", en_price);

        setValue("ar_name", ar_name);
        setValue("ar_description", ar_description);
      }

      const formattedImages = selectedProduct.images.map((image) => ({
        url: image.url,
        isDeleted: false,
        id: image.id,
      }));
      setImages(formattedImages);
      setValue("images", formattedImages);
      setValue("category_id", selectedProduct.category_id);
      setValue("priority", selectedProduct.priority);
      setValue("product_code", selectedProduct.product_code);
      setValue("cover_id", selectedProduct.cover_id);
      selectedProduct.form_json && setValue("form_json", selectedProduct.form_json);
      setCoverId(selectedProduct.cover_id);
      selectedProduct.form_json && setJsonString(selectedProduct.form_json)
    }
  }, []);


  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleAddProduct = () => {
    if (!coverId) {
      toast.error("Please select a cover for the product");
      return;
    }
    handleSubmit((data) => {
      if (selectedProduct) {
        handleEditApi(selectedProduct.id, {
          ...data,
          images,
          restaurant_id: userInformation.restaurant_id,
          cover_id: coverId,
          form_json:jsonString

        });
      } else {
        handleApiCall({
          ...data,
          images,
          restaurant_id: userInformation.restaurant_id,
          cover_id: coverId,
          form_json:jsonString
        });
      }
    })();
  };

  const handleTextChange = (name) => (value) => {
    setValue(name, value);
  };

  const handleOnDeleteImage = (imageUrl) => {
    //if coverid is the deleted one just return cover id to null based on 2 conditions old image and new image
    const image = images.find((img) => img.url === imageUrl);

    if (imageUrl.includes(coverId) || image.id === coverId) {
      setCoverId(null);
    }
    let updatedimages;
    if (imageUrl.includes("blob")) {
      // if new image deleted then just remove from array
      updatedimages = images.filter((image) => image.url !== imageUrl);
    } else {
      //if old image set key is deleted to true
      updatedimages = images.map((image) => {
        if (image.url === imageUrl) {
          return { ...image, isDeleted: true };
        }
        return image;
      });
    }
    //set images and form
    setImages(updatedimages);
    setValue("images", updatedimages);
  };

  const handleCover = (url) => {
    let id;
    if (url.includes("blob")) {
      const image = images.find((img) => img.url === url);
      id = image?.id;
    } else {
      id = url.replace(/^\d+-/, "");
    }
    setCoverId(id);
    setValue("cover_id", id);
  };
  //check if display english is true
  const displayEnglish =
    userInformation.Lang === LANGUAGES.EN ||
    userInformation.Lang === LANGUAGES.ENAR;
  //check if display arabic is true

  const displayArabic =
    userInformation.Lang === LANGUAGES.AR ||
    userInformation.Lang === LANGUAGES.ENAR;

  const fields = [
    {
      name: "en_name",
      label: "English name",
      display: displayEnglish,
      type: "text",
      mui_type: "textfield",
    },
    {
      name: "ar_name",
      label: "Arabic name",
      display: displayArabic,
      type: "text",
      mui_type: "textfield",
    },
    {
      name: "en_description",
      label: "English description",
      display: displayEnglish,
      type: "text",
      mui_type: "textarea",
    },
    {
      name: "ar_description",
      label: "Arabic description",
      display: displayArabic,
      type: "text",
      mui_type: "textarea",
    },
    {
      name: "en_price",
      label: "Price",
      display: displayEnglish||displayArabic,
      type: "number",
      mui_type: "textfield",
    },
  ];
  const fieldsToDisplay = fields.filter(({ display }) => display); //all field with display ture

  return (
    <>
      <ProductInfo activeTab={activeTab} >
        <BackIcon
          onClick={() => {
            setSelectedProduct(null);
            setIsFormOpen(false);
            setImages(null);
            setCoverId(null);
          }}
        />
        <Tabs>
          <Tab activeTab={activeTab} tab={"productinfo"} onClick={()=>{setActiveTab("productinfo")}}>Product Details</Tab>
          <Tab activeTab={activeTab} tab={"formbuilder"} onClick={()=>{setActiveTab("formbuilder")}}>Form Builder</Tab>
        </Tabs>
        {activeTab=="productinfo" ?
        <>
        <UploadPhoto
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
        />

        <ImagesContainer>
          <UploadedImageContainer>
            <UploadedImageWrapper>
              <UploadBtn onClick={handleButtonClick}>
                Upload Image
                <FaPlus style={{ fontSize: "20px" }} />
              </UploadBtn>
            </UploadedImageWrapper>
          </UploadedImageContainer>
          {images.map(({ url, isDeleted, id }) => {
            const imageUrl = url.includes("blob")
              ? url
              : `https://storage.googleapis.com/ecommerce-bucket-testing/${url}`;
            if (!isDeleted) {
              return (
                <UploadedImageContainer>
                  <UploadedImageWrapper>
                    <UploadedImage src={imageUrl} alt="Uploaded" />
                    <ButtonsContainer>
                      <CoverImage onClick={() => handleCover(url)}>
                        {coverId === id || url.includes(coverId)
                          ? "Selected"
                          : "Select Cover"}
                      </CoverImage>
                      <Delete
                        onClick={() => {
                          handleOnDeleteImage(url);
                        }}
                      />
                    </ButtonsContainer>
                  </UploadedImageWrapper>
                </UploadedImageContainer>
              );
            }
          })}
        </ImagesContainer>
        <Row>
          <UploadImageText>{fileErrMsg}</UploadImageText>
        </Row>

        {fieldsToDisplay.map(({ name, label, type, mui_type }) =>
          mui_type === "textfield" ? (
            <TextField
              key={name}
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
          ) : (
            <ReactQuill
              value={getValues(name)} // Use the value from your form state
              onChange={handleTextChange(name)}
              placeholder={name}
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["bold", "italic", "underline"],
                  ["link"],
                  ["clean"],
                ],
              }}
              formats={[
                "header",
                "font",
                "size",
                "list",
                "bullet",
                "bold",
                "italic",
                "underline",
                "link",
              ]}
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
        <TextField
          label={"Product_code"}
          name={"product_code"}
          variant="outlined"
          {...register("product_code")}
          style={fieldStyle}
          type="text"
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
                  { userInformation.Lang === LANGUAGES.AR ?ar_category:en_category }
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
          >
            {selectedProduct ? "Edit Product" : "Add Product"}
          </LoadingButton>
        </Row>
        </>:<FormBuilder jsonString={jsonString} setJsonString={setJsonString}/>
}

      </ProductInfo>
      
    </>
  );
}
