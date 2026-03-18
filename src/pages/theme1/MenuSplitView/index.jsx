import React, { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaList } from "react-icons/fa";
import {
  SplitRoot,
  SidebarWrap,
  SidebarScroll,
  CatItem,
  CatIcon,
  CatLabel,
  MainPanel,
  SearchBar,
  SectionTitle,
  Grid,
  LoaderRow,
  AllSection,
} from "./styles";
import Theme1ProductCard from "./Theme1ProductCard";
import { useGetProducts } from "../../../apis/products/getProductsByCategory";
import { useGetProductsByRestaurant } from "../../../apis/products/getProductsByRestaurant";

const BUCKET = "https://storage.googleapis.com/ecommerce-bucket-testing/";

export default function MenuSplitView({
  categories,
  activeCategory,
  onCategoryChange,
  searchText,
  setSearchText,
  menu,
  showPopup,
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const subdomain = window.location.hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((s) => s.restaurant?.[restaurantName]);
  const activeLanguage = useSelector(
    (s) => s.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const isRtl = activeLanguage === "ar";

  let features = {};
  try {
    features =
      typeof restaurant?.features === "string"
        ? JSON.parse(restaurant.features || "{}")
        : restaurant?.features || {};
  } catch (_) {
    features = {};
  }

  const isAllItems = activeCategory === "all-items";
  const categoryId = activeCategory && !isAllItems ? String(activeCategory) : null;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetProducts(categoryId);
  const {
    data: allPages,
    fetchNextPage: fetchNextAll,
    hasNextPage: hasNextAll,
    isFetchingNextPage: isFetchingNextAll,
  } = useGetProductsByRestaurant(isAllItems ? restaurant?.id : null);

  const allProducts = allPages?.pages?.flat() || [];

  const filteredSingle = useMemo(() => {
    if (isAllItems) return [];
    const q = (searchText || "").toLowerCase();
    return (
      data?.pages
        ?.flat()
        ?.filter((plate) => {
          const hidden =
            Boolean(plate?.hide) || Number(plate?.hide) === 1;
          if (hidden) return false;
          const name =
            plate[activeLanguage === "en" ? "en_name" : "ar_name"] || "";
          return name.toLowerCase().includes(q);
        }) || []
    );
  }, [data, searchText, activeLanguage, isAllItems]);

  const allSections = useMemo(() => {
    if (!isAllItems) return [];
    const q = (searchText || "").toLowerCase();
    const cats = (categories || [])
      .filter((c) => !c.isAllItems)
      .sort(
        (a, b) =>
          (b.priority || 0) - (a.priority || 0) || (a.id || 0) - (b.id || 0)
      );
    return cats
      .map((category) => {
        const items = allProducts
          .filter((plate) => {
            const hidden =
              Boolean(plate?.hide) || Number(plate?.hide) === 1;
            if (hidden) return false;
            if (String(plate.category_id) !== String(category.id))
              return false;
            const name =
              plate[activeLanguage === "en" ? "en_name" : "ar_name"] || "";
            return q ? name.toLowerCase().includes(q) : true;
          })
          .sort(
            (a, b) =>
              (b.priority || 0) - (a.priority || 0) ||
              (a.id || 0) - (b.id || 0)
          );
        return { category, items };
      })
      .filter((s) => s.items.length > 0);
  }, [isAllItems, allProducts, categories, searchText, activeLanguage]);

  const loadMoreRef = useRef();
  const loadMoreAllRef = useRef();

  useEffect(() => {
    if (isAllItems) return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );
    if (loadMoreRef.current) obs.observe(loadMoreRef.current);
    return () => {
      if (loadMoreRef.current) obs.unobserve(loadMoreRef.current);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage, isAllItems]);

  useEffect(() => {
    if (!isAllItems) return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        if (
          entries[0]?.isIntersecting &&
          hasNextAll &&
          !isFetchingNextAll
        ) {
          fetchNextAll();
        }
      },
      { threshold: 0.15 }
    );
    if (loadMoreAllRef.current) obs.observe(loadMoreAllRef.current);
    return () => {
      if (loadMoreAllRef.current) obs.unobserve(loadMoreAllRef.current);
    };
  }, [isAllItems, hasNextAll, isFetchingNextAll, fetchNextAll]);

  const activeCat = categories.find(
    (c) => String(c.id) === String(activeCategory)
  );
  const sectionTitle =
    activeCat &&
    (activeLanguage === "en"
      ? activeCat.en_category
      : activeCat.ar_category);

  const searchPh =
    activeLanguage === "en" ? "Search menu…" : "ابحث في القائمة…";

  return (
    <SplitRoot $isRtl={isRtl}>
      <SidebarWrap $isRtl={isRtl}>
        <SidebarScroll>
          {(categories || []).map((cat) => {
            const label =
              activeLanguage === "en" ? cat.en_category : cat.ar_category;
            const active = String(cat.id) === String(activeCategory);
            const img = cat.image_url
              ? `${BUCKET}${cat.image_url}`
              : null;
            return (
              <CatItem
                key={cat.id}
                type="button"
                $active={active}
                onClick={() => onCategoryChange(cat.id)}
              >
                <CatIcon $active={active}>
                  {img ? (
                    <img src={img} alt="" />
                  ) : (
                    <FaList size={18} style={{ opacity: 0.6 }} />
                  )}
                </CatIcon>
                <CatLabel>{label}</CatLabel>
              </CatItem>
            );
          })}
        </SidebarScroll>
      </SidebarWrap>
      <MainPanel>
        <SearchBar
          type="search"
          placeholder={searchPh}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          dir={isRtl ? "rtl" : "ltr"}
        />
        {!isAllItems && (
          <>
            {sectionTitle && (
              <SectionTitle $isRtl={isRtl}>{sectionTitle}</SectionTitle>
            )}
            <Grid>
              {filteredSingle.map((plate) => (
                <Theme1ProductCard
                  key={plate.id}
                  plate={plate}
                  activeCategoryId={activeCategory}
                  categories={categories}
                  restaurantName={restaurantName}
                  restaurant={restaurant}
                  features={features}
                />
              ))}
            </Grid>
            <div ref={loadMoreRef} style={{ height: 24 }} />
            {isFetchingNextPage && (
              <LoaderRow>
                {activeLanguage === "en" ? "Loading…" : "جاري التحميل…"}
              </LoaderRow>
            )}
          </>
        )}
        {isAllItems &&
          allSections.map((section) => (
            <AllSection key={section.category.id}>
              <SectionTitle $isRtl={isRtl}>
                {activeLanguage === "en"
                  ? section.category.en_category
                  : section.category.ar_category}
              </SectionTitle>
              <Grid>
                {section.items.map((plate) => (
                  <Theme1ProductCard
                    key={plate.id}
                    plate={plate}
                    activeCategoryId="all-items"
                    categories={categories}
                    restaurantName={restaurantName}
                    restaurant={restaurant}
                    features={features}
                  />
                ))}
              </Grid>
            </AllSection>
          ))}
        {isAllItems && (
          <>
            <div ref={loadMoreAllRef} style={{ height: 32 }} />
            {isFetchingNextAll && (
              <LoaderRow>
                {activeLanguage === "en" ? "Loading…" : "جاري التحميل…"}
              </LoaderRow>
            )}
          </>
        )}
      </MainPanel>
    </SplitRoot>
  );
}
