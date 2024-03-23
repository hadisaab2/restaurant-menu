import React, { useEffect, useState } from "react";
import { Container, Wrapper, AddButton } from "./styles";

import Product from "./product";
import { IoMdAdd } from "react-icons/io";
import AddProduct from "./addproduct";
import { useGetProducts } from "../../../apis/products/getProducts";
import { getCookie } from "../../../utilities/manageCookies";
import DeleteProductPopup from "./product/deleteProductPopup";

export default function Products({ setProducts, products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedIdForAction, setSelectedIdForAction] = useState(null);
  const [isDeletePopOpen, setIsDeletePopUpOpen] = useState(false);
  const storedUserInfo = getCookie("userInfo") || "{}";
  const [userInformation, setUserInformation] = useState(
    JSON.parse(storedUserInfo)
  );
  const { isLoading, response, refetch } = useGetProducts({
    onSuccess: () => {},
    restaurantId: userInformation.restaurant_id,
  });

  useEffect(() => {
    if (!isLoading) {
      setProducts(response?.data);
    }
  }, [isLoading]);

  const refetchProducts = () => {
    refetch()
      .then(({ data: { data } }) => setProducts(data))
      .catch((err) => console.log(err));
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
          <AddButton onClick={() => setIsFormOpen(true)}>
            <IoMdAdd />
            Add Product
          </AddButton>
          <Wrapper>
            {products?.map((product) => {
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
