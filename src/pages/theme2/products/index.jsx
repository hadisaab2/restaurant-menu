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
<<<<<<< HEAD
  carouselPosition,
  setcarouselPosition,
  setactiveCategory,
  categories
=======
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
}) {
  const [activePlate, setactivePlate] = useState(null);
  const { restaurantName: paramRestaurantName } = useParams();

<<<<<<< HEAD
  const [swipePosition, setswipePosition] = useState(carouselPosition);
  // console.log("carouselpostion" + carouselPosition)
  // console.log(categories.length-1)
  console.log("swipepostion" + swipePosition)

  //handling page swipe to change category
  const [scrollInProgress, setScrollInProgress] = useState(false);
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - touchStartX.current;

    // Add a flag to check if the scroll action is in progress
    if (!scrollInProgress) {
      setScrollInProgress(true);
      if (deltaX > 0) {
        if (carouselPosition > 0 && swipePosition > carouselPosition) {
          setactiveCategory(categories[swipePosition - 1].id)
          setswipePosition(swipePosition - 1)
        } else {
          setcarouselPosition(carouselPosition - 1);
          setactiveCategory(categories[carouselPosition - 1].id)
        }
      } else {
        if (carouselPosition < categories.length - 4 && swipePosition<categories.length-4) {
          setcarouselPosition(carouselPosition + 1);
          setactiveCategory(categories[carouselPosition + 1].id)
        } else {
          if( swipePosition < categories.length-1){
          setcarouselPosition(categories.length - 4);
          setactiveCategory(categories[swipePosition + 1].id)
          setswipePosition(swipePosition + 1)
          }

        }
      }
      touchStartX.current = currentX;
    }
  };
  const handleTouchEnd = () => {
    touchStartX.current = 0;
    setScrollInProgress(false);
  };


  useEffect(() => {
    console.log("the active cateogur now "+activeCategory +"   "+categories.findIndex(category=>category.id==activeCategory))
    setswipePosition(categories.findIndex(category=>category.id==activeCategory));
  }, [activeCategory]);




=======
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
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
<<<<<<< HEAD
    <Container
      activeCategory={activeCategory}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
=======
    <Container activeCategory={activeCategory}>
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
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
        <div ref={loadMoreRef} style={{ height: "20px" }}>
        </div>
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