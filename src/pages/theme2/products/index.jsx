import React, { useEffect, useState } from "react";
import { Container, ProductWrapper } from "./styles";
import Product from "./product";
export default function Products({ menu, activeCategory, animationchange }) {
  const [activePlate, setactivePlate] = useState(0);
  const[scrollChecker,setScrollChecker]=useState(false);

  useEffect(()=>{
    setactivePlate(0)
  },[activeCategory])
  console.log(menu)
  return (
    <Container activeCategory={activeCategory}>
      {menu?.map((singlemenu, index) => {
        if (activeCategory == index) {
          return (
            <ProductWrapper>
                    {singlemenu?.products.map((plate)=>{
                        return(<Product plate={plate}/>)
                    })}

            </ProductWrapper>
          );
        }
      })}
    </Container>
  );
}
