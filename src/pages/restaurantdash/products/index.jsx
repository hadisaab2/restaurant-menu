import React, { useEffect, useState } from "react";
import { Container, Wrapper, AddButton } from "./styles";

import Product from "./product";
import { IoMdAdd } from "react-icons/io";
import AddProduct from "./addproduct";
import { useGetProducts } from "../../../apis/products/getProducts";

export default function Products() {
  const [editProduct, setEditProduct] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const { isLoading, response } = useGetProducts({ onSuccess: () => {} });

  useEffect(() => {
    if (!isLoading) {
      setProducts(response?.data);
    }
  }, [isLoading]);

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
              return <Product product={product} />;
            })}
          </Wrapper>
        </>
      ) : (
        <AddProduct
          setIsFormOpen={setIsFormOpen}
          setEditProduct={setEditProduct}
        />
      )}
    </Container>
  );
}
