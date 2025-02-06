import React, { useEffect, useRef, useState } from "react";
import { Container, ProductWrapper } from "./styles";
import Product from "./product";
import ProductDetails from "./productDetails";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetProducts } from "../../../apis/products/getProductsByCategory";

export default function Products({
  menu,
  activeCategory,
  showPopup,
  searchText,
  carouselPosition,
  setcarouselPosition,
  setactiveCategory,
  categories
}) {
  const [activePlate, setactivePlate] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const { restaurantName: paramRestaurantName } = useParams();
  const subdomain = window.location.hostname.split(".")[0];
    // Determine the restaurant name to use
    const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );

  const [productPositions, setProductPositions] = useState([]); // x y and width of product
  const [productRefs, setProductRefs] = useState([]);
  const loadMoreRef = useRef();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetProducts(activeCategory);



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







  // handling page swipe to change category
  const [swipePosition, setswipePosition] = useState(carouselPosition);
  const [scrollInProgress, setScrollInProgress] = useState(false);
  const [uiCategorynb, setUiCategorynb] = useState(categories.length<4?3:4);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;

  };
  const pushparam = (id)=>{
    const newParams = new URLSearchParams(searchParams);
    newParams.set("categoryId", id); // Update categoryId
    setSearchParams(newParams); // Update URL without reloading
  }


  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const deltaX = currentX - touchStartX.current;
    const deltaY = currentY - touchStartY.current;

    // Ignore vertical scroll
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      return; // Do nothing for vertical movements
    }
    // Add a flag to check if the scroll action is in progress
    if (!scrollInProgress && activePlate == null) {
      setScrollInProgress(true);
      //swipeposition is implemented for the problems in the last 4 categories where the carousel doesnt swipe
      if (deltaX > 0) {
        if (carouselPosition >= 0 && swipePosition > carouselPosition) {
          setactiveCategory(categories[swipePosition - 1].id)
          pushparam(categories[swipePosition - 1].id)
          setswipePosition(swipePosition - 1)
        } else {
          if (carouselPosition !== 0) {
            setcarouselPosition(carouselPosition - 1);
            setactiveCategory(categories[carouselPosition - 1].id)
            pushparam(categories[carouselPosition - 1].id)

          }

        }
      } else {
        if (carouselPosition < categories.length - uiCategorynb && swipePosition < categories.length - uiCategorynb) {
          setcarouselPosition(carouselPosition + 1);
          setactiveCategory(categories[swipePosition + 1].id)
          pushparam(categories[swipePosition + 1].id)

        } else {
          if (swipePosition < categories.length - 1) {
            setcarouselPosition(categories.length - uiCategorynb);
            setactiveCategory(categories[swipePosition + 1].id)
            setswipePosition(swipePosition + 1)
            pushparam(categories[swipePosition + 1].id)

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
    setswipePosition(categories.findIndex(category => category.id == activeCategory));
  }, [activeCategory]);








  return (
    <Container
      activeCategory={activeCategory}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
                      setSearchParams={setSearchParams}
                      searchParams={searchParams}
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
          activeCategoryId={activeCategory}
          categories={categories}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
      )}
    </Container>
  );
}
