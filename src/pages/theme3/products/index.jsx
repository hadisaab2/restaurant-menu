import React, { useEffect, useRef, useState, useCallback } from "react";
import { AllItemsLoader, AllItemsLoaderWrap, AllItemsSection, AllItemsTitle, AllItemsWrapper, Container, LoaderDot, ProductWrapper, AllItemsListWrapper, AllItemsListItem, AllItemsListImage, AllItemsListDetails, AllItemsListName, AllItemsListPrice, AllItemsListDiscountPrice, AllItemsListQuickAddButton, AllItemsListOutOfStockBadge, AllItemsListItemWrapper } from "./styles";
import Product from "./product";
import ProductDetails from "./productDetails";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useGetProducts } from "../../../apis/products/getProductsByCategory";
import { useGetProductsByRestaurant } from "../../../apis/products/getProductsByRestaurant";
import { getProduct, PRODUCT_QUERY_KEY } from "../../../apis/products/getProduct";
import { convertPrice } from "../../../utilities/convertPrice";
import { addToCart } from "../../../redux/cart/cartActions";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
const _ = require('lodash');

export default function Products({
  menu,
  activeCategory,
  showPopup,
  searchText,
  carouselPosition,
  setcarouselPosition,
  setactiveCategory,
  categories,
  onAddToCart
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
  const dispatch = useDispatch();

  const [productPositions, setProductPositions] = useState([]); // x y and width of product
  const [productRefs, setProductRefs] = useState([]);
  const loadMoreRef = useRef();
  const allItemsLoadMoreRef = useRef();
  const queryClient = useQueryClient();
  const prefetchProduct = useCallback((productId) => {
    if (productId) {
      queryClient.prefetchQuery({
        queryKey: PRODUCT_QUERY_KEY(productId),
        queryFn: () => getProduct(productId),
        staleTime: 5 * 60 * 1000,
      });
    }
  }, [queryClient]);

  const isAllItemsCategory = activeCategory === "all-items";
  // Ensure activeCategory is a serializable value (string or number)
  const categoryId = activeCategory && !isAllItemsCategory ? String(activeCategory) : null;
  const allItemsStyle = restaurant?.all_items_style || "grid";
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
    
    let observer;
    let timeoutId;
    
    // Small delay to ensure the ref is attached after DOM updates (e.g., when returning from product details)
    timeoutId = setTimeout(() => {
      observer = new IntersectionObserver(
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
      if (allItemsLoadMoreRef.current) {
        observer.observe(allItemsLoadMoreRef.current);
      }
    }, 100);
    
    return () => {
      clearTimeout(timeoutId);
      if (observer && allItemsLoadMoreRef.current) {
        observer.unobserve(allItemsLoadMoreRef.current);
      }
    };
  }, [fetchNextPageAll, hasNextPageAll, isAllItemsCategory, isFetchingNextPageAll, allProducts]);

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
        (b.priority || 0) - (a.priority || 0) ||
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
            (b.priority || 0) - (a.priority || 0) ||
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

  // When productId is removed from URL (e.g. closing ProductParam), clear activePlate
  // so ProductDetails doesn’t immediately show and retrigger getProduct/logProduct/analytics
  useEffect(() => {
    if (!searchParams.get("productId")) {
      setactivePlate(null);
    }
  }, [searchParams]);








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
              {allItemsStyle === "list" ? (
                <AllItemsListWrapper>
                  {section.items.map((plate, index) => {
                    // Use the product's actual category for discount calculation
                    const productCategory = categories.find((cat) => cat.id == plate.category_id);
                    let finalDiscount;
                    if (productCategory && parseFloat(productCategory.discount || 0) !== 0.00) {
                      finalDiscount = parseFloat(productCategory.discount || 0);
                    } else {
                      finalDiscount = parseFloat(plate.discount || 0);
                    }
                    const discountedPrice = finalDiscount !== 0.00 
                      ? parseFloat(plate.en_price) * (1 - parseFloat(finalDiscount) / 100) 
                      : parseFloat(plate.en_price);
                    let currencySymbol;
                    switch (restaurant?.currency) {
                      case "dollar": currencySymbol = "$"; break;
                      case "lb": currencySymbol = "L.L."; break;
                      case "gram": currencySymbol = "g"; break;
                      case "kilogram": currencySymbol = "kg"; break;
                      default: currencySymbol = "";
                    }
                    const coverIndex = plate.images?.findIndex(img => img.id == plate.new_cover_id) ?? 0;
                    const imageUrl = plate.images?.[coverIndex]?.url;
                    const restaurantLogoUrl = restaurant?.logoURL
                      ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
                      : null;
                    const features = JSON.parse(restaurant?.features || "{}");
                    const isOutOfStock = Boolean(plate?.out_of_stock) || Number(plate?.out_of_stock) === 1;
                    const hasProductForm = !_.isEmpty(plate?.form_json) && !_.isEmpty(JSON.parse(plate?.form_json || "{}"));
                    const hasCategoryForm = !_.isEmpty(productCategory?.form_json) && !_.isEmpty(JSON.parse(productCategory?.form_json || "{}"));
                    const hasForm = hasProductForm || hasCategoryForm;

                    const handleQuickAdd = (event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      if (!features?.cart || isOutOfStock) return;
                      if (hasForm) {
                        const newParams = new URLSearchParams(searchParams);
                        newParams.set("productId", plate.id);
                        newParams.set("categoryId", "all-items");
                        setSearchParams(newParams);
                        window.history.pushState({}, "", `?${newParams.toString()}`);
                        document.body.style.overflow = "hidden";
                        return;
                      }
                      const basePrice = parseFloat(plate?.en_price || "0");
                      const discountedPrice = basePrice * (1 - parseFloat(finalDiscount) / 100);
                      dispatch(addToCart(restaurantName, plate, 1, {}, discountedPrice, ""));
                      
                      // Track add to cart
                      if (restaurant?.id && plate?.id) {
                        const { trackAddToCart } = require("../../../utilities/analyticsTracking");
                        const categoryIdToUse = activeCategory === "all-items" ? plate.category_id : activeCategory;
                        const branchId = restaurant?.branches?.[0]?.id || null;
                        trackAddToCart(restaurant.id, plate.id, categoryIdToUse, 1, branchId);
                      }
                      
                      // Trigger cart animation
                      if (onAddToCart && event.currentTarget) {
                        onAddToCart(event.currentTarget);
                      }
                      
                      toast.success(
                        activeLanguage === "en"
                          ? "Added to cart"
                          : "تمت الإضافة إلى السلة"
                      );
                    };

                    return (
                      <AllItemsListItemWrapper key={plate.id}>
                        <AllItemsListItem 
                          onClick={() => {
                            const newParams = new URLSearchParams(searchParams);
                            newParams.set("productId", plate.id);
                            // Preserve "all-items" as categoryId so back button returns to All Items
                            newParams.set("categoryId", "all-items");
                            setSearchParams(newParams);
                            window.history.pushState({}, "", `?${newParams.toString()}`);
                            document.body.style.overflow = "hidden";
                          }}
                          onMouseEnter={() => prefetchProduct(plate.id)}
                          onTouchStart={() => prefetchProduct(plate.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <AllItemsListImage $isLogoFallback={!imageUrl}>
                            {imageUrl ? (
                              <img 
                                src={`https://storage.googleapis.com/ecommerce-bucket-testing/${imageUrl}`}
                                alt={activeLanguage === "en" ? plate.en_name : plate.ar_name}
                                onError={(e) => {
                                  if (restaurantLogoUrl && e.target.src !== restaurantLogoUrl) {
                                    e.target.src = restaurantLogoUrl;
                                  }
                                }}
                              />
                            ) : restaurantLogoUrl ? (
                              <img 
                                src={restaurantLogoUrl}
                                alt={activeLanguage === "en" ? plate.en_name : plate.ar_name}
                              />
                            ) : null}
                          </AllItemsListImage>
                          <AllItemsListDetails activeLanguage={activeLanguage}>
                            <AllItemsListName>
                              {activeLanguage === "en" ? plate.en_name : plate.ar_name}
                            </AllItemsListName>
                            {plate.en_price && (
                              <AllItemsListPrice activeLanguage={activeLanguage}>
                                {finalDiscount !== 0.00 && (
                                  <AllItemsListDiscountPrice>
                                    {convertPrice(parseFloat(plate.en_price), currencySymbol)}
                                  </AllItemsListDiscountPrice>
                                )}
                                <span>
                                  {convertPrice(discountedPrice, currencySymbol)}
                                </span>
                              </AllItemsListPrice>
                            )}
                          </AllItemsListDetails>
                        </AllItemsListItem>
                        {features?.cart &&
                          (isOutOfStock ? (
                            <AllItemsListOutOfStockBadge activeLanguage={activeLanguage}>
                              {activeLanguage === "en"
                                ? "Out of stock"
                                : "غير متوفر حالياً"}
                            </AllItemsListOutOfStockBadge>
                          ) : (
                            <AllItemsListQuickAddButton
                              type="button"
                              onClick={handleQuickAdd}
                              onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); }}
                              onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); handleQuickAdd(e); }}
                              activeLanguage={activeLanguage}
                              title={
                                activeLanguage === "en"
                                  ? "Add to cart"
                                  : "أضف إلى السلة"
                              }
                            >
                              <FaCartPlus size={12} />
                            </AllItemsListQuickAddButton>
                          ))}
                      </AllItemsListItemWrapper>
                    );
                  })}
                </AllItemsListWrapper>
              ) : (
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
                      activeCategoryId={activeCategory}
                      categories={categories}
                      disableDetails={false}
                      onAddToCart={onAddToCart}
                    />
                  ))}
                </ProductWrapper>
              )}
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
                          onAddToCart={onAddToCart}
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
          {activePlate !== null && 
           !searchParams.get("productId") && 
           activePlate < filteredProducts.length && (
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
    </Container>
  );
}
