import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  AddButton,
  FormWrapper,
  LoadWrapper,
  LoadMore,
  LoadBtnWrapper,
  StyledSelect,
  StyledInputLabel,
} from "./styles";
import Product from "./product";
import { IoMdAdd } from "react-icons/io";
import AddProduct from "./addproduct";
import { getCookie } from "../../../utilities/manageCookies";
import DeleteProductPopup from "./product/deleteProductPopup";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useGetCategories } from "../../../apis/categories/getCategories";
import { useGetProducts } from "../../../apis/products/getProductsByCategory";
import { LANGUAGES } from "../../../global";

export default function Products({}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedIdForAction, setSelectedIdForAction] = useState(null);
  const [isDeletePopOpen, setIsDeletePopUpOpen] = useState(false);
  const storedUserInfo = getCookie("userInfo") || "{}";
  const [userInformation, setUserInformation] = useState(
    JSON.parse(storedUserInfo)
  );
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { isLoading, response, refetch } = useGetCategories({
    onSuccess: () => {},
    restaurantId: userInformation.restaurant_id,
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useGetProducts(selectedCategory);

  useEffect(() => {
    if (!isLoading) {
      setCategories(response?.data);
    }
  }, [isLoading]);

  const refetchProducts = () => {
    // refetch()
    //   .then(({ data: { data } }) => setProducts(data))
    //   .catch((err) => console.log(err));
  };

  const handlecategory = (e) => {
    setSelectedCategory(e.target.value);
  };
  const loadMoreHandle = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  return (
    <Container>
      {!isFormOpen ? (
        <>
          <DeleteProductPopup
            isOpen={isDeletePopOpen}
            setIsOpen={setIsDeletePopUpOpen}
            refetchProducts={refetchProducts}
            selectedIdForAction={selectedIdForAction}
            setSelectedIdForAction={setSelectedIdForAction}
          />
          <FormWrapper>
            <Box sx={{ minWidth: 120,height: '50%' }}>
              <FormControl fullWidth size="small">
                <StyledInputLabel id="demo-simple-select-label">Category</StyledInputLabel>
                <StyledSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedCategory}
                  label="Category"
                  defaultValue={selectedCategory}
                  onChange={handlecategory}
                  // defaultValue={selectedMedia?.platform}
                  // error={!isEmpty(formState?.errors?.platform)}
                >
                  {categories.map((category) => {
                    return (
                      <MenuItem value={category.id}>
                  { userInformation.Lang === LANGUAGES.AR ?category.ar_category:category.en_category }
                      </MenuItem>
                    );
                  })}
                </StyledSelect>
              </FormControl>
            </Box>
            <AddButton onClick={() => setIsFormOpen(true)}>
              <IoMdAdd />
              Add Product
            </AddButton>
          </FormWrapper>
          <Wrapper>
            {console.log(data)}
            {data?.pages?.flat().map((product) => {
              return (
                <Product
                  product={product}
                  setIsFormOpen={setIsFormOpen}
                  setSelectedProduct={setSelectedProduct}
                  setSelectedIdForAction={setSelectedIdForAction}
                  setIsDeletePopUpOpen={setIsDeletePopUpOpen}
                />
              );
            })}

            {hasNextPage && (
              <LoadWrapper>
                <LoadBtnWrapper>
                  <LoadMore onClick={loadMoreHandle}>Load More</LoadMore>
                </LoadBtnWrapper>
              </LoadWrapper>
            )}
          </Wrapper>
        </>
      ) : (
        <AddProduct
          setIsFormOpen={setIsFormOpen}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          refetchProducts={refetchProducts}
          userInformation={userInformation}
        />
      )}
    </Container>
  );
}
