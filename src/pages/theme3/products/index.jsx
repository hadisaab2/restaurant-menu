import React, { useEffect, useRef, useState } from "react";
import { AllItemsLoader, AllItemsLoaderWrap, AllItemsSection, AllItemsTitle, AllItemsWrapper, Container, GoToTopButton, LoaderDot, ProductWrapper } from "./styles";
import Product from "./product";
import ProductDetails from "./productDetails";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetProducts } from "../../../apis/products/getProductsByCategory";
import { useGetProductsByRestaurant } from "../../../apis/products/getProductsByRestaurant";

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
  const restaurant = useSelector(
    (state) => state.restaurant?.[restaurantName]
  );

  const [productPositions, setProductPositions] = useState([]); // x y and width of product
  const [productRefs, setProductRefs] = useState([]);
  const loadMoreRef = useRef();
  const allItemsLoadMoreRef = useRef();
  
  const isAllItemsCategory = activeCategory === "all-items";
  // Ensure activeCategory is a serializable value (string or number)
  const categoryId = activeCategory && !isAllItemsCategory ? String(activeCategory) : null;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetProducts(categoryId);
  const {
    data: allProductsPages,
    fetchNextPage: fetchNextPageAll,
    hasNextPage: hasNextPageAll,
    isFetchingNextPage: isFetchingNextPageAll,
  } = useGetProductsByRestaurant(isAllItemsCategory ? restaurant?.id : null);
  const allProducts = allProductsPages?.pages?.flat() || [];


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

  useEffect(() => {
    if (!isAllItemsCategory) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          hasNextPageAll &&
          !isFetchingNextPageAll
        ) {
          fetchNextPageAll();
        }
      },
      { threshold: 0.2 }
    );
    if (allItemsLoadMoreRef.current) observer.observe(allItemsLoadMoreRef.current);
    return () => {
      if (allItemsLoadMoreRef.current) observer.unobserve(allItemsLoadMoreRef.current);
    };
  }, [fetchNextPageAll, hasNextPageAll, isAllItemsCategory, isFetchingNextPageAll]);

  // filtering products based on search
const filteredProducts =
  data?.pages
    ?.flat()
    ?.filter((plate) => {
      const isHidden = Boolean(plate?.hide) || Number(plate?.hide) === 1;
      if (isHidden) return false;
      return plate[activeLanguage === "en" ? "en_name" : "ar_name"]
        .toLowerCase()
        .includes(searchText.toLowerCase());
    }) || [];

const allItemsSections = React.useMemo(() => {
  if (!isAllItemsCategory) return [];
  const searchable = (text = "") => text.toLowerCase().includes(searchText.toLowerCase());
  const categoriesOnly = (categories || [])
    .filter((cat) => !cat.isAllItems)
    .sort(
      (a, b) =>
        (a.priority || 0) - (b.priority || 0) ||
        (a.id || 0) - (b.id || 0)
    );
  return categoriesOnly
    .map((category) => {
      const items = allProducts
        .filter((plate) => {
        const isHidden = Boolean(plate?.hide) || Number(plate?.hide) === 1;
        if (isHidden) return false;
        if (plate.category_id != category.id) return false;
        const name = plate[activeLanguage === "en" ? "en_name" : "ar_name"] || "";
        return searchText ? searchable(name) : true;
      })
        .sort(
          (a, b) =>
            (a.priority || 0) - (b.priority || 0) ||
            (a.id || 0) - (b.id || 0)
        );
      return { category, items };
    })
    .filter((section) => section.items.length > 0);
}, [activeLanguage, allProducts, categories, isAllItemsCategory, searchText]);



console.log(filteredProducts)



  // handling page swipe to change category
  const [swipePosition, setswipePosition] = useState(carouselPosition);
  const [scrollInProgress, setScrollInProgress] = useState(false);
  const [uiCategorynb, setUiCategorynb] = useState(categories.length < 4 ? 3 : 4);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;

  };



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
          setswipePosition(swipePosition - 1)
        } else {
          if (carouselPosition !== 0) {
            setcarouselPosition(carouselPosition - 1);
            setactiveCategory(categories[carouselPosition - 1].id)

          }

        }
      } else {
        if (carouselPosition < categories.length - uiCategorynb && swipePosition < categories.length - uiCategorynb) {
          setcarouselPosition(carouselPosition + 1);
          setactiveCategory(categories[swipePosition + 1].id)

        } else {
          if (swipePosition < categories.length - 1) {
            setcarouselPosition(categories.length - uiCategorynb);
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
    setswipePosition(categories.findIndex(category => category.id == activeCategory));
  }, [activeCategory]);

  useEffect(() => {
    if (isAllItemsCategory) {
      setactivePlate(null);
    }
  }, [isAllItemsCategory]);








  return (
    <Container
      activeCategory={activeCategory}
    // onTouchStart={handleTouchStart}
    // onTouchMove={handleTouchMove}
    // onTouchEnd={handleTouchEnd}
    >
      {isAllItemsCategory ? (
        <AllItemsWrapper>
          {allItemsSections.map((section) => (
            <AllItemsSection key={section.category.id}>
              <AllItemsTitle activeLanguage={activeLanguage}>
                {activeLanguage === "en"
                  ? section.category.en_category
                  : section.category.ar_category}
              </AllItemsTitle>
              <ProductWrapper>
                {section.items.map((plate, index) => (
                  <Product
                    key={plate.id}
                    index={index}
                    plate={plate}
                    activePlate={null}
                    setactivePlate={setactivePlate}
                    showPopup={showPopup}
                    setSearchParams={setSearchParams}
                    searchParams={searchParams}
                    activeCategoryId={section.category.id}
                    categories={categories}
                    disableDetails
                  />
                ))}
              </ProductWrapper>
            </AllItemsSection>
          ))}
          {hasNextPageAll && (
            <div ref={allItemsLoadMoreRef} style={{ height: "40px" }} />
          )}
          {isFetchingNextPageAll && (
            <AllItemsLoaderWrap>
              <AllItemsLoader>
                <LoaderDot />
                {activeLanguage === "en" ? "Loading more..." : "جاري تحميل المزيد..."}
              </AllItemsLoader>
            </AllItemsLoaderWrap>
          )}
        </AllItemsWrapper>
      ) : (
        <>
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
                          activeCategoryId={activeCategory}
                          categories={categories}
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
        </>
      )}
      {isAllItemsCategory && (
        <GoToTopButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top">
          ↑
        </GoToTopButton>
      )}
    </Container>
  );
}
