import React, { useEffect, useState } from "react";
import { Container, Wrapper, AddButton } from "./styles";

import Product from "./product";
import { IoMdAdd } from "react-icons/io";
import AddProduct from "./addproduct";
import { useGetProducts } from "../../../apis/products/getProducts";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const { isLoading, response, refetch } = useGetProducts({
    onSuccess: () => {},
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
        />
      )}
    </Container>
  );
}
