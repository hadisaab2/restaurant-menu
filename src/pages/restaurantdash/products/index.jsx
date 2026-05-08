import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  AddButton,
  FormWrapper,
  ToolbarFields,
  LoadWrapper,
  LoadMore,
  LoadBtnWrapper,
  StyledSelect,
  StyledInputLabel,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
} from "./styles";
import Product from "./product";
import { IoMdAdd } from "react-icons/io";
import AddProduct from "./addproduct";
import { getCookie } from "../../../utilities/manageCookies";
import DeleteProductPopup from "./product/deleteProductPopup";
import { Box, FormControl, MenuItem } from "@mui/material";
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
  /** `null` = not initialized yet (auto-select first category when list loads). */
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { isLoading, response, refetch } = useGetCategories({
    onSuccess: () => {},
    restaurantId: userInformation.restaurant_id,
  });

  const categoryIdForQuery =
    selectedCategory === null || selectedCategory === ""
      ? null
      : selectedCategory;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useGetProducts(categoryIdForQuery);

  useEffect(() => {
    if (!isLoading && response?.data) {
      const list = response.data;
      setCategories(list);
      setSelectedCategory((prev) => {
        if (prev !== null) return prev;
        return list[0]?.id ?? null;
      });
    }
  }, [isLoading, response?.data]);

  const refetchProducts = () => {
    // refetch()
    //   .then(({ data: { data } }) => setProducts(data))
    //   .catch((err) => console.log(err));
  };

  const handlecategory = (e) => {
    const v = e.target.value;
    setSelectedCategory(v === "" ? "" : v);
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
          <SectionHeader>
            <SectionTitle>Products</SectionTitle>
            <SectionSubtitle>
              Filter by category, then tap a card to edit. New products are added
              to the category you select in the menu above.
            </SectionSubtitle>
          </SectionHeader>
          <FormWrapper>
            <ToolbarFields>
              <Box sx={{ flex: 1, minWidth: { xs: "100%", sm: 220 }, maxWidth: 440 }}>
                <FormControl fullWidth size="small">
                  <StyledInputLabel id="demo-simple-select-label">
                    Category
                  </StyledInputLabel>
                  <StyledSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCategory ?? ""}
                    label="Category"
                    onChange={handlecategory}
                  >
                    <MenuItem value="">
                      {userInformation.Lang === LANGUAGES.AR
                        ? "كل الفئات"
                        : "All Categories"}
                    </MenuItem>
                    {categories.map((category) => {
                      return (
                        <MenuItem key={category.id} value={category.id}>
                          {userInformation.Lang === LANGUAGES.AR
                            ? category.ar_category
                            : category.en_category}
                        </MenuItem>
                      );
                    })}
                  </StyledSelect>
                </FormControl>
              </Box>
            </ToolbarFields>
            <AddButton type="button" onClick={() => setIsFormOpen(true)}>
              <IoMdAdd size={22} />
              Add Product
            </AddButton>
          </FormWrapper>
          <Wrapper>
            {data?.pages?.flat().map((product) => {
              return (
                <Product
                  key={product.id}
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
