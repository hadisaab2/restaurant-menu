import React, { useEffect, useMemo, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FiGrid, FiSearch, FiX } from "react-icons/fi";
import { SplitRoot, SidebarWrap, SidebarScroll, CatItem, CatIcon, CatLabel, MainPanel, SearchWrap, SearchBar, ClearSearch, SectionHeading, SectionTitle, SectionMeta, Grid, LoaderRow, AllSection, EmptyState, TextButton, Skeleton } from "./styles";
import Theme1ProductCard from "./Theme1ProductCard";
import { useGetProducts } from "../../../apis/products/getProductsByCategory";
import { useGetProductsByRestaurant } from "../../../apis/products/getProductsByRestaurant";
import { GET_PRODUCT_URL } from "../../../apis/URLs";
import { getImageUrl } from "../../../utilities/imageUrl";
import { localized, parseFeatures, visibleProducts } from "../menuHelpers";

export default function MenuSplitView({ categories = [], activeCategory, onCategoryChange, searchText, setSearchText, restaurant, restaurantName }) {
  const language = restaurant?.activeLanguage || "en";
  const ar = language === "ar";
  const features = parseFeatures(restaurant?.features);
  const isAll = activeCategory === "all-items";
  const searching = Boolean(searchText.trim());
  const single = useGetProducts(!isAll && !searching ? activeCategory : null);
  const all = useGetProductsByRestaurant(isAll && !searching ? restaurant?.id : null);
  // The existing no-page endpoint returns the complete menu. Load once, only on search,
  // and cache per restaurant so matches never depend on scroll/pagination position.
  const search = useQuery({
    queryKey: ["theme1-menu-search", restaurant?.id],
    queryFn: async ({ signal }) => {
      const { data } = await axios.get(GET_PRODUCT_URL(restaurant.id), { signal });
      if (!Array.isArray(data)) throw new Error("Invalid menu response");
      return data;
    },
    enabled: searching && !!restaurant?.id,
    staleTime: 60 * 1000,
    retry: false,
    refetchOnWindowFocus: false,
  });
  const current = searching ? search : isAll ? all : single;
  const sections = useMemo(() => {
    const products = visibleProducts(searching ? search.data || [] : (isAll ? all.data : single.data)?.pages?.flat() || [], searching ? searchText : "");
    const selected = !searching && !isAll ? categories.filter((cat) => String(cat.id) === String(activeCategory)) : categories.filter((cat) => !cat.isAllItems);
    return selected.map((category) => ({ category, items: products.filter((product) => String(product.category_id) === String(category.id)) })).filter((section) => section.items.length > 0);
  }, [searching, isAll, search.data, searchText, all.data, single.data, categories, activeCategory]);
  const count = sections.reduce((total, section) => total + section.items.length, 0);
  const loadMore = useRef(null);
  const rail = useRef(null);
  const searchInput = useRef(null);
  const fetchNextPage = current.fetchNextPage;
  const hasNextPage = current.hasNextPage;
  const fetchingNext = current.isFetchingNextPage;
  useEffect(() => {
    const node = loadMore.current;
    if (!node || searching || !hasNextPage || current.isError || !window.IntersectionObserver) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !fetchingNext) fetchNextPage();
    }, { rootMargin: "240px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [searching, hasNextPage, fetchingNext, fetchNextPage, current.isError, count]);
  useEffect(() => {
    const selected = rail.current?.querySelector('[aria-pressed="true"]');
    if (!selected || !rail.current) return;
    const parent = rail.current;
    if (window.innerWidth < 480) parent.scrollLeft = selected.offsetLeft - parent.offsetLeft - (parent.clientWidth - selected.clientWidth) / 2;
    else parent.scrollTop = selected.offsetTop - parent.offsetTop - (parent.clientHeight - selected.clientHeight) / 2;
  }, [activeCategory]);
  const clearSearch = () => { setSearchText(""); searchInput.current?.focus(); };
  const renderCards = (items) => <Grid>{items.map((plate) => <Theme1ProductCard key={plate.id} plate={plate} categories={categories} restaurant={restaurant} restaurantName={restaurantName} features={features} />)}</Grid>;
  return (
    <SplitRoot dir={ar ? "rtl" : "ltr"}>
      <SidebarWrap aria-label={ar ? "فئات القائمة" : "Menu categories"}>
        <SidebarScroll ref={rail}>
          {categories.map((category) => <CatItem key={category.id} type="button" $active={String(category.id) === String(activeCategory)} aria-pressed={String(category.id) === String(activeCategory)} onClick={() => { setSearchText(""); onCategoryChange(category.id); }}>
            <CatIcon>{!category.isAllItems && category.image_url ? <><img src={getImageUrl(category.image_url)} alt="" loading="lazy" onError={(event) => { event.currentTarget.hidden = true; }} /><FiGrid size={20} aria-hidden="true" /></> : <FiGrid size={20} />}</CatIcon>
            <CatLabel>{localized(category, "category", language)}</CatLabel>
          </CatItem>)}
        </SidebarScroll>
      </SidebarWrap>
      <MainPanel id="theme1-menu">
        <SearchWrap role="search">
          <FiSearch size={20} aria-hidden="true" />
          <SearchBar ref={searchInput} type="search" aria-label={ar ? "ابحث في كل القائمة" : "Search the entire menu"} placeholder={ar ? "ابحث في القائمة…" : "Search the menu…"} value={searchText} onChange={(event) => setSearchText(event.target.value)} />
          {searchText && <ClearSearch type="button" aria-label={ar ? "مسح البحث" : "Clear search"} onClick={clearSearch}><FiX size={18} /></ClearSearch>}
        </SearchWrap>
        {searching && <SectionHeading><SectionTitle>{ar ? "نتائج البحث" : "Search results"}</SectionTitle><SectionMeta role="status">{!current.isPending && `${count} ${ar ? "نتيجة" : count === 1 ? "result" : "results"}`}</SectionMeta></SectionHeading>}
        {current.isLoading && <Grid aria-label={ar ? "جاري تحميل القائمة" : "Loading menu"} aria-busy="true">{[0,1,2,3].map((key) => <Skeleton key={key} />)}</Grid>}
        {sections.map(({ category, items }) => <AllSection key={category.id} aria-label={localized(category, "category", language)}>
          <SectionHeading><SectionTitle>{localized(category, "category", language)}</SectionTitle></SectionHeading>
          {renderCards(items)}
        </AllSection>)}
        {current.isError ? <EmptyState role="alert"><h3>{ar ? "تعذر تحميل القائمة" : "The menu couldn’t load"}</h3><p>{ar ? "تحقق من اتصالك وحاول مجدداً." : "Check your connection and try again."}</p><TextButton type="button" onClick={() => current.refetch()}>{ar ? "حاول مجدداً" : "Try again"}</TextButton></EmptyState> : !current.isLoading && count === 0 && !hasNextPage && <EmptyState>
          <FiSearch size={28} aria-hidden="true" /><h3>{searching ? (ar ? "لا توجد نتائج" : "No matching items") : (ar ? "لا توجد أصناف حالياً" : "No items here yet")}</h3>
          <p>{searching ? (ar ? "جرّب اسم صنف آخر أو تصفح القائمة." : "Try another item name or browse the menu.") : (ar ? "يرجى اختيار فئة أخرى أو العودة لاحقاً." : "Choose another category or check back soon.")}</p>
          {searching && <TextButton type="button" onClick={clearSearch}>{ar ? "عرض القائمة" : "Browse menu"}</TextButton>}
        </EmptyState>}
        {!searching && <div ref={loadMore} />}
        {fetchingNext && <LoaderRow role="status">{ar ? "جاري تحميل المزيد…" : "Loading more items…"}</LoaderRow>}
        {!searching && hasNextPage && !fetchingNext && !current.isError && <TextButton type="button" onClick={() => fetchNextPage()}>{ar ? "عرض المزيد" : "Load more"}</TextButton>}
      </MainPanel>
    </SplitRoot>
  );
}
