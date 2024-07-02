import React, { createRef, useEffect, useRef, useState } from "react";
import { Container, ProductWrapper } from "./styles";
import Product from "./product";
import ProductDetails from "./productDetails";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetProducts } from "../../../apis/products/getProductsByCategory";

export default function Products({
  menu,
  activeCategory,
  showPopup,
  searchText,
}) {
  const [activePlate, setactivePlate] = useState(null);
  const { restaurantName: paramRestaurantName } = useParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const [productPositions, setProductPositions] = useState([]); // x y and width of product
  const [productRefs, setProductRefs] = useState([]);
  const loadMoreRef = useRef();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useGetProducts(activeCategory);

  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );

  //function to find or change the x and y of the products images
  const changepositions = () => {
    const positions = productRefs?.map((ref) => {
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
    // window.scrollTo(0, 0);
    changepositions();
  }, [productRefs]);

  useEffect(() => {
    if (menu && activeCategory !== null && data?.pages?.flat().length > 0) {
      const refs = data?.pages
        ?.flat()
        ?.filter((plate) =>
          plate[activeLanguage === "en" ? "en_name" : "ar_name"]
            .toLowerCase()
            .includes(searchText.toLowerCase())
        )
        .map(() => React.createRef());
      setProductRefs(refs);
    }
  }, [menu, activeCategory, searchText, data]);

  useEffect(() => {
    const handleScroll = () => {
      changepositions();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [productRefs]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // filtering products based on search
  const filteredProducts =
    data?.pages
      ?.flat()
      ?.filter((plate) =>
        plate[activeLanguage === "en" ? "en_name" : "ar_name"]
          .toLowerCase()
          .includes(searchText.toLowerCase())
      ) || [];

  return (
    <Container activeCategory={activeCategory}>
      <ProductWrapper activePlate={activePlate}>
        {menu?.map((singlemenu, index) => {
          if (activeCategory == singlemenu.id) {
            return (
              <>
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
              </>
            );
          }
        })}
        <div ref={loadMoreRef} style={{ height: "20px" }}></div>
      </ProductWrapper>
      {activePlate !== null && (
        <ProductDetails
          menu={menu?.find((category) => category.id === activeCategory)}
          activePlate={activePlate}
          setactivePlate={setactivePlate}
          plates={filteredProducts}
          productPositions={productPositions}
        />
      )}
    </Container>
  );
}
