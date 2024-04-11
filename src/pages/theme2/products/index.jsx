import React, { createRef, useEffect, useRef, useState } from "react";
import { Container, ProductWrapper } from "./styles";
import Product from "./product";
import ProductDetails from "./productDetails";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function Products({
  menu,
  activeCategory,
  showPopup,
  searchText,
  
}) {
  const [activePlate, setactivePlate] = useState(null);
  const { restaurantName } = useParams();
  const [productPositions, setProductPositions] = useState([]); // x y and width of product
  const [numProductsToShow, setNumProductsToShow] = useState(4);
  const [productRefs, setProductRefs] = useState([]);

  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );



  //function to find or change the x and y of the products images
  const changepositions = () => {
    const positions = productRefs.map((ref) => {
      if (ref.current) {
        const rect = ref.current?.getBoundingClientRect();
        return { x: rect.left, y: rect.top, width: rect.width };
      } else {
        return null;
      }
    });
    setProductPositions(positions);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    changepositions();
  }, [productRefs]);

  useEffect(() => {
    setNumProductsToShow(4)
    if (menu && activeCategory !== null) {
      const refs = menu?.[activeCategory]?.products
        .filter((plate) =>
          plate[activeLanuguage === "en" ? "en_name" : "ar_name"]
            .toLowerCase()
            .includes(searchText.toLowerCase())
        )
        .map(() => React.createRef());
      setProductRefs(refs);
    }
  }, [menu, activeCategory, searchText]);

  useEffect(() => {

    const handleScroll = () => {
      changepositions();
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      // Check if the user has scrolled to the bottom of the page
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setNumProductsToShow((prevNum) => prevNum + 4);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [productRefs]);

  //filtering products based on search
  const filteredProducts = menu?.[activeCategory]?.products.filter((plate) =>
    plate[activeLanuguage === "en" ? "en_name" : "ar_name"]
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );
  return (
    <Container activeCategory={activeCategory}> 
    {        console.log(activePlate)
}
      <ProductWrapper activePlate={activePlate}>
        {menu?.map((singlemenu, index) => {
          if(activeCategory==index){
          return (
            <>
              {filteredProducts.slice(0, numProductsToShow).map((plate, index) => {
                return (
                  <Product
                    index={index}
                    plate={plate}
                    activePlate={activePlate}
                    setactivePlate={setactivePlate}
                    ref={productRefs[index]}
                    showPopup={showPopup}
                  />
                );
              })}
            </>
          );
            }
        })}
      </ProductWrapper>
      {activePlate !== null && (
        <ProductDetails
          menu={menu?.[activeCategory]}
          activePlate={activePlate}
          setactivePlate={setactivePlate}
          plates={filteredProducts}
          productPositions={productPositions}
        />
      )}
    </Container>
  );
}
