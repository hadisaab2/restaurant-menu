import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Category,
  CategoriesContainer,
  AddCategory,
  Edit,
  Delete,
  Actions,
  BackIcon,
  AddCategoryForm,
} from "./styles";
import { TextField, Button } from "@mui/material";
import { getCookie } from "../../../utilities/manageCookies";
import { LANGUAGES } from "../../../global";
import { LoadingButton } from "@mui/lab";
import { isEmpty, isNull } from "lodash";
import {
  EnArCategorySchema,
  arCategorySchema,
  enCategorySchema,
} from "./yup-shape";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddCategoryQuery } from "../../../apis/categories/addCategory";
import { useGetCategories } from "../../../apis/categories/getCategories";
import { useEditCategoryQuery } from "../../../apis/categories/editCategory";
import DeleteCategoryPopup from "./deleteCategoryPopup";
import { useGetProducts } from "../../../apis/products/getProducts";
import {
  UploadBtn,
  UploadImageText,
  UploadPhoto,
  UploadedImage,
} from "../products/addproduct/styles";

export default function Categories({ setProducts }) {
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const { AR, ENAR, EN } = LANGUAGES;
  const storedUserInfo = getCookie("userInfo") || "{}";
  const [userInformation, _] = useState(JSON.parse(storedUserInfo));
  const [categories, setCategories] = useState([]);
  const [selectedIdForAction, setSelectedIdForAction] = useState(null);
  const [file, setFile] = useState(null);
  const [fileErrMsg, setFileErrMsg] = useState("Please upload image");

  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);
  const { refetch: refetchProducts } = useGetProducts({
    onSuccess: () => {},
    restaurantId: userInformation.restaurant_id,
  });

  const schema =
    userInformation.Lang === AR
      ? arCategorySchema
      : userInformation.Lang === EN
      ? enCategorySchema
      : EnArCategorySchema;

  const displayEnglish =
    userInformation.Lang === EN || userInformation.Lang === ENAR;

  const displayArabic =
    userInformation.Lang === AR || userInformation.Lang === ENAR;

  const { handleSubmit, register, formState, setValue, reset, getValues } =
    useForm({
      resolver: yupResolver(schema),
    });
  const { isPending, handleApiCall } = useAddCategoryQuery({
    onSuccess: () => {
      refetchCategories();
      refetchProductsHandler();
      reset();
      setShowAddComponent(false);
      setFile(null);
      setImageUrl(null);
    },
  });

  const { isPending: isEditing, handleApiCall: handleEditApi } =
    useEditCategoryQuery({
      onSuccess: () => {
        refetchCategories();
        refetchProductsHandler();
        reset();
        setShowAddComponent(false);
        setFile(null);
        setImageUrl(null);
      },
    });

  const { isLoading, response, refetch } = useGetCategories({
    onSuccess: () => {},
    restaurantId: userInformation.restaurant_id,
  });

  const handleAddCategory = () => {
    handleSubmit((data) => {
      let payload = {
        ...data,
        restaurant_id: userInformation.restaurant_id,
        image: file,
      };

      !selectedIdForAction
        ? handleApiCall(payload)
        : handleEditApi(selectedIdForAction, payload);
    })();
  };

  const handleOnEdit = (category) => {
    switch (userInformation.Lang) {
      case EN:
        setValue("en_category", category.en_category);
        break;
      case AR:
        setValue("ar_category", category.ar_category);
        break;
      case ENAR:
        setValue("en_category", category.en_category);
        setValue("ar_category", category.ar_category);
        break;
      default:
        break;
    }

    setSelectedIdForAction(category.id);
    setShowAddComponent(true);
    setImageUrl(
      `https://storage.googleapis.com/ecommerce-bucket-testing/${category?.image_url}`
    );
  };

  const refetchCategories = () => {
    refetch()
      .then(({ data: { data } }) => setCategories(data))
      .catch((err) => console.log(err));
  };
  function refetchProductsHandler() {
    refetchProducts()
      .then(({ data: { data } }) => setProducts(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (!isLoading) {
      setCategories(response?.data);
    }
  }, [isLoading]);

  const categoryText = (category) => {
    switch (userInformation.Lang) {
      case EN:
        return category.en_category;
      case AR:
        return category.ar_category;
      case ENAR:
        return `${category.en_category}-${category.ar_category}`;
      default:
        break;
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleOnDeleteImage = () => {
    setImageUrl(null);
    setFile(null);
    setValue("image", null);
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

  return (
    <Container>
      <DeleteCategoryPopup
        isOpen={isDeletePopupOpen}
        setIsOpen={setIsDeletePopupOpen}
        selectedIdForAction={selectedIdForAction}
        refetchCategories={refetchCategories}
        setSelectedIdForAction={setSelectedIdForAction}
        refetchProductsHandler={refetchProductsHandler}
      />
      {showAddComponent ? (
        <AddCategoryForm>
          <BackIcon
            onClick={() => {
              reset();
              setShowAddComponent(false);
              setImageUrl(null);
              setFile(null);
              setSelectedIdForAction(null);
            }}
          />
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
          {displayEnglish && (
            <TextField
              label="English category"
              name="en_category"
              variant="outlined"
              {...register("en_category")}
              error={!isEmpty(formState?.errors?.en_category)}
              helperText={
                !isEmpty(formState?.errors?.en_category) &&
                formState.errors?.en_category.message
              }
            />
          )}
          {displayArabic && (
            <TextField
              label="Arabic category"
              name="ar_category"
              variant="outlined"
              {...register("ar_category")}
              error={!isEmpty(formState?.errors?.ar_category)}
              helperText={
                !isEmpty(formState?.errors?.ar_category) &&
                formState.errors?.ar_category.message
              }
            />
          )}
          <TextField
            label="Priority"
            name="priority"
            variant="outlined"
            {...register("priority")}
            error={!isEmpty(formState?.errors?.priority)}
            helperText={
              !isEmpty(formState?.errors?.priority) && "Required Field"
            }
            type="number"
            defaultValue={1}
            inputProps={{ min: 1 }}
          />
          <LoadingButton
            loading={isPending || isEditing}
            variant="contained"
            style={{ backgroundColor: "turquoise", height: "55px" }}
            onClick={handleAddCategory}
          >
            {!isNull(selectedIdForAction) ? "Edit Category" : "Add Category"}
          </LoadingButton>
        </AddCategoryForm>
      ) : (
        <>
          {!isLoading && (
            <>
              <AddCategory onClick={() => setShowAddComponent(true)}>
                Add Category
              </AddCategory>
              <CategoriesContainer>
                <Category>Offer</Category>
                {categories?.map((category) => {
                  return (
                    <Category>
                      {categoryText(category)}
                      <img
                        src={`https://storage.googleapis.com/ecommerce-bucket-testing/${category?.image_url}`}
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Actions>
                        <Edit onClick={() => handleOnEdit(category)} />
                        <Delete
                          onClick={() => {
                            setSelectedIdForAction(category.id);
                            setIsDeletePopupOpen(true);
                          }}
                        />
                      </Actions>
                    </Category>
                  );
                })}
              </CategoriesContainer>
            </>
          )}
        </>
      )}
    </Container>
  );
}
