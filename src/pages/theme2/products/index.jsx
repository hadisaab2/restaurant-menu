import React, { createRef, useEffect, useRef, useState } from "react";
import { Container, ProductWrapper } from "./styles";
import Product from "./product";
import ProductDetails from "./productDetails";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function Products({ menu, activeCategory }) {
  const [activePlate, setactivePlate] = useState(null);
  const { restaurantName } = useParams();
  const productRefs = useRef([]);//ref for each image container
  const [productPositions, setProductPositions] = useState([]); // x y and width of product
  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );
  //function to find or change the x and y of the products images
  const changepositions= ()=>{
    const positions = productRefs.current
    .filter((ref) => ref.current) // Filter out null refs
    .map((ref) => {
      const rect = ref.current.getBoundingClientRect();
      return { x: rect.left, y: rect.top,width: rect.width };
    });
  setProductPositions(positions);
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
    changepositions()
  }, [productRefs.current,activeLanuguage]);

  useEffect(() => {
    const handleScroll = () => {
      changepositions()
    };
  
    window.addEventListener('scroll', handleScroll);
      return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



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
            {activePlate!==null && <ProductDetails menu={singlemenu} activePlate={activePlate} setactivePlate={setactivePlate}  plates={singlemenu?.products}  productPositions={productPositions}/>}
            </>
          )
        }
      })}

      
    </Container>
  );
}
