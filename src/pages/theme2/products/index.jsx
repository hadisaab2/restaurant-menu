import React, { createRef, useEffect, useRef, useState } from "react";
import { Container, ProductWrapper } from "./styles";
import Product from "./product";
import ProductDetails from "./productDetails";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function Products({ menu, activeCategory }) {
  const [activePlate, setactivePlate] = useState(null);
  const { restaurantName } = useParams();
  const productRefs = useRef([]); //ref for each image container
  const [productPositions, setProductPositions] = useState([]); // x y and width of product
  const [numProductsToShow, setNumProductsToShow] = useState(4); // Number of products to show initially
  const [observer, setObserver] = useState(null); // IntersectionObserver instance

  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );
  //function to find or change the x and y of the products images
  const changepositions = () => {
    const positions = productRefs.current
      .filter((ref) => ref.current) // Filter out null refs
      .map((ref) => {
        const rect = ref.current.getBoundingClientRect();
        return { x: rect.left, y: rect.top, width: rect.width };
      });
    setProductPositions(positions);
  };




  useEffect(() => {
    window.scrollTo(0, 0);
    changepositions();
  }, [productRefs.current, activeLanuguage]);

  useEffect(() => {
    // Create IntersectionObserver when component mounts
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };
    const observerInstance = new IntersectionObserver(handleIntersect, options);
    setObserver(observerInstance);
    return () => {
      // Clean up observer when component unmounts
      observerInstance.disconnect();
    };
  }, []);
  useEffect(() => {
    // Update observer targets when productRefs.current changes
    if (observer) {
      productRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });
    }
    return () => {
      // Unobserve all targets when activeCategory changes
      if (observer) {
        productRefs.current.forEach((ref) => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        });
      }
    };
  }, [activeCategory, observer]);

  // IntersectionObserver callback function
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        // Load more products when an observed element is intersecting
        observer.unobserve(entry.target); // Stop observing this target to prevent multiple triggers
        setNumProductsToShow((prevNum) => prevNum + 4);
      }
    });
  };
  useEffect(() => {
    productRefs.current = [];
  }, [activeCategory]);
  return (
    <Container activeCategory={activeCategory}>
      {console.log(numProductsToShow)}
      {menu?.map((singlemenu, index) => {
        if (activeCategory == index) {
          return (
            <>
              <ProductWrapper activePlate={activePlate}>
              {singlemenu?.products.slice(0, numProductsToShow).map((plate, index) => {
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
              {activePlate !== null && (
                <ProductDetails
                  menu={singlemenu}
                  activePlate={activePlate}
                  setactivePlate={setactivePlate}
                  plates={singlemenu?.products}
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
