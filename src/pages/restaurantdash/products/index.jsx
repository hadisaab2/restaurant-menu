import React, { useState} from "react";
import { Container, Wrapper, AddButton } from "./styles";

import Product from "./product";
import { IoMdAdd } from "react-icons/io";
import AddProduct from "./addproduct";

export default function Products() {
  const [editProduct, setEditProduct] = useState(true);

  return (
    <Container>
      {editProduct ? (
        <>
          <AddButton onClick={() => setEditProduct(false)}>
            <IoMdAdd />
            Add Product
          </AddButton>
          <Wrapper>
            {[0, 1, 2, 3, 5, 6, 3, 2, 0, 1, 2, 3, 5, 6, 3, 2].map((product) => {
              return <Product />;
            })}
          </Wrapper>
        </>
      ) : (
        <AddProduct setEditProduct={setEditProduct} />
      )}
    </Container>
  );
}
