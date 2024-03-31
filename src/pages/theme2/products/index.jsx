import React, { createRef, useEffect, useRef, useState } from "react";
import { Container, ProductWrapper } from "./styles";
import Product from "./product";
import ProductDetails from "./productDetails";
export default function Products({ menu, activeCategory, animationchange }) {
  const [activePlate, setactivePlate] = useState(null);
  const [scrollChecker, setScrollChecker] = useState(false);
  const productRefs = useRef([]);
  const [productPositions, setProductPositions] = useState([]);
  useEffect(() => {
    const positions = productRefs.current
      .filter((ref) => ref.current) // Filter out null refs
      .map((ref) => {
        const rect = ref.current.getBoundingClientRect();
        return { x: rect.left, y: rect.top,width: rect.width };
      });
      console.log(positions)
    setProductPositions(positions);
  }, [productRefs.current]);

  useEffect(() => {
    productRefs.current = menu?.map(() => createRef());
  }, [menu]);
  // useEffect(()=>{
  //   setactivePlate(0)
  // },[activeCategory])

  useEffect(() => {
    productRefs.current = [];
  }, [activeCategory]);
  return (
    <Container activeCategory={activeCategory}>
      {menu?.map((singlemenu, index) => {
        if (activeCategory == index) {
          return (
            <>
            <ProductWrapper activePlate={activePlate}>
              {singlemenu?.products.map((plate, index) => {
                const productRef = createRef();
                productRefs.current.push(productRef);
                return (
                  <Product
                    index={index}
                    plate={plate}
                    activePlate={activePlate}
                    setactivePlate={setactivePlate}
                    ref={productRefs.current[index]}
                  />
                );
              })}
            </ProductWrapper>
            {activePlate!==null && <ProductDetails menu={singlemenu}   activePlate={activePlate} setactivePlate={setactivePlate} plates={singlemenu?.products}  productPositions={productPositions}/>}
            </>
          )
        }
      })}

      
    </Container>
  );
}
