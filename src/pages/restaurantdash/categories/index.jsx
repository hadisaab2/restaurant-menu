import React, { useEffect, useState } from "react";
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
import { TextField } from "@mui/material";
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

export default function Categories({ setProducts }) {
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const { AR, ENAR, EN } = LANGUAGES;
  const storedUserInfo = getCookie("userInfo") || "{}";
  const [userInformation, _] = useState(JSON.parse(storedUserInfo));
  const [categories, setCategories] = useState([]);
  const [selectedIdForAction, setSelectedIdForAction] = useState(null);
  const { refetch: refetchProducts } = useGetProducts({
    onSuccess: () => {},
    restaurantId: userInformation.restaurant_id,
  });

  const { isPending, handleApiCall } = useAddCategoryQuery({
    onSuccess: () => {
      refetchCategories();
      refetchProductsHandler();
      setShowAddComponent(false);
    },
  });

  const { isPending: isEditing, handleApiCall: handleEditApi } =
    useEditCategoryQuery({
      onSuccess: () => {
        refetchCategories();
        refetchProductsHandler();
        setShowAddComponent(false);
      },
    });

  const { isLoading, response, refetch } = useGetCategories({
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

  const { handleSubmit, register, formState, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddCategory = () => {
    handleSubmit((data) => {
      const payload = {
        ...data,
        restaurant_id: userInformation.restaurant_id,
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
          <BackIcon onClick={() => setShowAddComponent(false)} />
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
                {categories?.map((category) => {
                  return (
                    <Category>
                      {categoryText(category)}
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
