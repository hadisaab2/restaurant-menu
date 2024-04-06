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
  const [numProductsToShow, setNumProductsToShow] = useState(4); // Number of products to show initially
  const [observer, setObserver] = useState(null); // IntersectionObserver instance
  const [productRefs, setProductRefs] = useState([]);

  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );
  //function to find or change the x and y of the products images
  const changepositions = () => {
    const positions = productRefs.map((ref) => {
      const rect = ref.current.getBoundingClientRect();
      return { x: rect.left, y: rect.top, width: rect.width };
    });
    setProductPositions(positions);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    changepositions();
  }, [productRefs, activeLanuguage]);

  useEffect(() => {
    if (menu && activeCategory !== null) {
      const refs = menu?.[activeCategory]?.products
        .filter((plate) =>
          plate.en_name.toLowerCase().includes(searchText.toLowerCase())
        )
        .map(() => React.createRef());
      setProductRefs(refs);
    }
  }, [menu, activeCategory,searchText]);

  useEffect(() => {
    const handleScroll = () => {
      changepositions();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [productRefs]);


  const filteredProducts = menu?.[activeCategory]?.products.filter((plate) =>
    plate.en_name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <Container activeCategory={activeCategory}>
      {console.log(productRefs)}
      {menu?.map((singlemenu, index) => {
        if (activeCategory == index) {
          return (
            <>
              <ProductWrapper activePlate={activePlate}>
                {filteredProducts.map((plate, index) => {
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
              </ProductWrapper>
              {activePlate !== null && (
                <ProductDetails
                  menu={singlemenu}
                  activePlate={activePlate}
                  setactivePlate={setactivePlate}
                  plates={filteredProducts}
                  productPositions={productPositions}
                />
              )}
            </>
          );
        }
      })}
    </Container>
  );
}
