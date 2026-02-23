import React, { useEffect, useRef, useState } from "react";
import { Container, ProductWrapper } from "./styles";
import * as AllStyles from "./allItemsStyles";
import Product from "./product";
import ProductDetails from "./productDetails";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetProducts } from "../../../apis/products/getProductsByCategory";
import { useGetProductsByRestaurant } from "../../../apis/products/getProductsByRestaurant";
import { addToCart } from "../../../redux/cart/cartActions";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { convertPrice } from "../../../utilities/convertPrice";
const _ = require('lodash');

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
  const dispatch = useDispatch();

  const [productPositions, setProductPositions] = useState([]); // x y and width of product
  const [productRefs, setProductRefs] = useState([]);
  const loadMoreRef = useRef();
  const allItemsLoadMoreRef = useRef();
  const isAllItemsCategory = activeCategory === "all-items";
  const allItemsStyle = restaurant?.all_items_style || "grid";
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
    if (searchParams.get("productId")) setactivePlate(null);
  }, [searchParams]);

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








  return (
    <Container
      activeCategory={activeCategory}
    // onTouchStart={handleTouchStart}
    // onTouchMove={handleTouchMove}
    // onTouchEnd={handleTouchEnd}
    >
      {isAllItemsCategory ? (
        <AllStyles.AllItemsWrapper>
          {allItemsSections.map((section) => (
            <AllStyles.AllItemsSection key={section.category.id}>
              <AllStyles.AllItemsTitle activeLanguage={activeLanguage}>
                {activeLanguage === "en"
                  ? section.category.en_category
                  : section.category.ar_category}
              </AllStyles.AllItemsTitle>
              {allItemsStyle === "list" ? (
                <AllStyles.AllItemsListWrapper>
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
                      toast.success(
                        activeLanguage === "en"
                          ? "Added to cart"
                          : "تمت الإضافة إلى السلة"
                      );
                    };

                    return (
                      <AllStyles.AllItemsListItemWrapper key={plate.id}>
                        <AllStyles.AllItemsListItem 
                          onClick={() => {
                            const newParams = new URLSearchParams(searchParams);
                            newParams.set("productId", plate.id);
                            // Preserve "all-items" as categoryId so back button returns to All Items
                            newParams.set("categoryId", "all-items");
                            setSearchParams(newParams);
                            window.history.pushState({}, "", `?${newParams.toString()}`);
                            document.body.style.overflow = "hidden";
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <AllStyles.AllItemsListImage>
                            {imageUrl && (
                              <img 
                                src={`https://storage.googleapis.com/ecommerce-bucket-testing/${imageUrl}`}
                                alt={activeLanguage === "en" ? plate.en_name : plate.ar_name}
                              />
                            )}
                          </AllStyles.AllItemsListImage>
                          <AllStyles.AllItemsListDetails activeLanguage={activeLanguage}>
                            <AllStyles.AllItemsListName>
                              {activeLanguage === "en" ? plate.en_name : plate.ar_name}
                            </AllStyles.AllItemsListName>
                            {plate.en_price && (
                              <AllStyles.AllItemsListPrice activeLanguage={activeLanguage}>
                                {finalDiscount !== 0.00 && (
                                  <AllStyles.AllItemsListDiscountPrice>
                                    {convertPrice(parseFloat(plate.en_price), currencySymbol)}
                                  </AllStyles.AllItemsListDiscountPrice>
                                )}
                                <span>
                                  {convertPrice(discountedPrice, currencySymbol)}
                                </span>
                              </AllStyles.AllItemsListPrice>
                            )}
                          </AllStyles.AllItemsListDetails>
                        </AllStyles.AllItemsListItem>
                        {features?.cart &&
                          (isOutOfStock ? (
                            <AllStyles.AllItemsListOutOfStockBadge activeLanguage={activeLanguage}>
                              {activeLanguage === "en"
                                ? "Out of stock"
                                : "غير متوفر حالياً"}
                            </AllStyles.AllItemsListOutOfStockBadge>
                          ) : (
                            <AllStyles.AllItemsListQuickAddButton
                              type="button"
                              onClick={handleQuickAdd}
                              activeLanguage={activeLanguage}
                              title={
                                activeLanguage === "en"
                                  ? "Add to cart"
                                  : "أضف إلى السلة"
                              }
                            >
                              <FaCartPlus size={12} />
                            </AllStyles.AllItemsListQuickAddButton>
                          ))}
                      </AllStyles.AllItemsListItemWrapper>
                    );
                  })}
                </AllStyles.AllItemsListWrapper>
              ) : (
                <ProductWrapper $noMinHeight>
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
                      disableDetails={false}
                    />
                  ))}
                </ProductWrapper>
              )}
            </AllStyles.AllItemsSection>
          ))}
          {hasNextPageAll && (
            <div ref={allItemsLoadMoreRef} style={{ height: "40px" }} />
          )}
          {isFetchingNextPageAll && (
            <AllStyles.AllItemsLoaderWrap>
              <AllStyles.AllItemsLoader>
                <AllStyles.LoaderDot />
                {activeLanguage === "en" ? "Loading more..." : "جاري تحميل المزيد..."}
              </AllStyles.AllItemsLoader>
            </AllStyles.AllItemsLoaderWrap>
          )}
        </AllStyles.AllItemsWrapper>
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
          {activePlate !== null && !searchParams.get("productId") && (
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
