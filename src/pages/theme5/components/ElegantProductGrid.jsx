import React, { useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGetProducts } from '../../../apis/products/getProductsByCategory';
import { useGetProductsByRestaurant } from '../../../apis/products/getProductsByRestaurant';
import { addToCart } from '../../../redux/cart/cartActions';
import { toast } from 'react-toastify';
import { convertPrice } from '../../../utilities/convertPrice';
import ElegantProductCard from './ElegantProductCard';
import ElegantEmptyState from './ElegantEmptyState';
import { ProductListSkeleton } from './ElegantSkeletons';
import { AllItemsSectionTitle } from './ElegantCategoryNav';
import _ from 'lodash';

/* ─── Layout containers ──────────────────────────────────────── */

const GridWrapper = styled.div`
  padding: 8px 16px 120px;
  min-height: 300px;
`;

const TwoColGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const OneColList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionBlock = styled.div`
  margin-bottom: 8px;
`;

const LoadMore = styled.div`
  height: 40px;
`;

const LoadingDots = styled.div`
  text-align: center;
  padding: 16px;
  font-size: 13px;
  color: var(--theme-text, #888);
  opacity: 0.6;
`;

/* ─── All-items list row ─────────────────────────────────────── */

const ListRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--theme-card-bg, #fff);
  border-radius: 16px;
  padding: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 3px 10px rgba(0,0,0,0.06);
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};
  transition: transform 0.15s ease;
  &:active { transform: scale(0.985); }
`;

const ListRowImg = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  background: rgba(0,0,0,0.04);
  img { width: 100%; height: 100%; object-fit: cover; display: block; }
`;

const ListRowContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ListRowName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--theme-card-text, #111);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`;

const ListRowPriceWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ListRowPrice = styled.span`
  font-size: 14px;
  font-weight: 800;
  color: var(--theme-price, #333);
`;

const ListRowStrike = styled.span`
  font-size: 12px;
  color: var(--theme-price, #999);
  opacity: 0.45;
  text-decoration: line-through;
`;

const ListRowAddBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: var(--theme-main, #333);
  color: var(--theme-popup-button-text, #fff);
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  &:active { opacity: 0.75; }
  &:disabled { opacity: 0.3; cursor: not-allowed; }
`;

const OutOfStockBadge = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--theme-popup-button-text, #fff);
  background: rgba(0,0,0,0.38);
  padding: 3px 8px;
  border-radius: 8px;
  flex-shrink: 0;
`;

/* ─── Component ──────────────────────────────────────────────── */

export default function ElegantProductGrid({
  activeCategory,
  searchText,
  categories,
  showPopup,
  setactiveCategoryWithUrl,
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const subdomain = window.location.hostname.split('.')[0];
  const restaurantName =
    subdomain !== 'menugic' && subdomain !== 'localhost' && subdomain !== 'www'
      ? subdomain : paramRestaurantName;

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const restaurant     = useSelector(state => state.restaurant?.[restaurantName]);
  const activeLanguage = useSelector(state => state.restaurant?.[restaurantName]?.activeLanguage || 'en');
  const isRTL = activeLanguage === 'ar';

  /* all_items_style mirrors Theme2: "grid" (default) or "list" */
  const allItemsStyle = restaurant?.all_items_style || 'grid';
  const isAllItemsCategory = activeCategory === 'all-items';

  const categoryId = activeCategory && !isAllItemsCategory ? String(activeCategory) : null;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetProducts(categoryId);
  const {
    data: allProductsPages,
    fetchNextPage: fetchNextPageAll,
    hasNextPage: hasNextPageAll,
    isFetchingNextPage: isFetchingNextPageAll,
    isLoading: isLoadingAll,
  } = useGetProductsByRestaurant(isAllItemsCategory ? restaurant?.id : null);

  const allProducts = allProductsPages?.pages?.flat() || [];
  const loadMoreRef = useRef();
  const allItemsLoadMoreRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
      },
      { threshold: 0.1 }
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => { if (loadMoreRef.current) observer.unobserve(loadMoreRef.current); };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    if (!isAllItemsCategory) return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPageAll && !isFetchingNextPageAll) fetchNextPageAll();
      },
      { threshold: 0.2 }
    );
    if (allItemsLoadMoreRef.current) observer.observe(allItemsLoadMoreRef.current);
    return () => { if (allItemsLoadMoreRef.current) observer.unobserve(allItemsLoadMoreRef.current); };
  }, [fetchNextPageAll, hasNextPageAll, isAllItemsCategory, isFetchingNextPageAll]);

  const filteredProducts = useMemo(() => {
    return (data?.pages?.flat() || []).filter(plate => {
      if (Boolean(plate?.hide) || Number(plate?.hide) === 1) return false;
      const name = plate[activeLanguage === 'en' ? 'en_name' : 'ar_name'] || '';
      return name.toLowerCase().includes(searchText.toLowerCase());
    });
  }, [data, activeLanguage, searchText]);

  const allItemsSections = useMemo(() => {
    if (!isAllItemsCategory) return [];
    const searchable = (text = '') => text.toLowerCase().includes(searchText.toLowerCase());
    const sortedCats = (categories || [])
      .filter(c => !c.isAllItems)
      .sort((a, b) => (b.priority || 0) - (a.priority || 0) || (a.id || 0) - (b.id || 0));
    return sortedCats
      .map(category => ({
        category,
        items: allProducts
          .filter(plate => {
            if (Boolean(plate?.hide) || Number(plate?.hide) === 1) return false;
            if (plate.category_id != category.id) return false;
            const name = plate[activeLanguage === 'en' ? 'en_name' : 'ar_name'] || '';
            return searchText ? searchable(name) : true;
          })
          .sort((a, b) => (b.priority || 0) - (a.priority || 0) || (a.id || 0) - (b.id || 0)),
      }))
      .filter(s => s.items.length > 0);
  }, [isAllItemsCategory, categories, allProducts, activeLanguage, searchText]);

  /* ── Currency ─────────────────────────────────────────────── */
  const getCurrencySymbol = () => {
    switch (restaurant?.currency) {
      case 'dollar':   return '$';
      case 'lb':       return 'L.L.';
      case 'gram':     return 'g';
      case 'kilogram': return 'kg';
      default:         return '';
    }
  };

  /* ── Open product via URL ─────────────────────────────────── */
  const openProduct = (plate, activeCategoryId) => {
    if (showPopup) return;
    const newParams = new URLSearchParams(searchParams);
    newParams.set('productId', plate.id);
    if (activeCategoryId) newParams.set('categoryId', activeCategoryId);
    setSearchParams(newParams);
    window.history.pushState({}, '', `?${newParams.toString()}`);
    document.body.style.overflow = 'hidden';
  };

  /* ── Quick-add (mirrors Theme2 handleQuickAdd) ────────────── */
  const buildOnQuickAdd = (plate, activeCategoryId) => e => {
    e.preventDefault();
    e.stopPropagation();
    let features = {};
    try { features = JSON.parse(restaurant?.features || '{}'); } catch (_) {}
    const isOutOfStock = Boolean(plate?.out_of_stock) || Number(plate?.out_of_stock) === 1;
    if (!features?.cart || isOutOfStock) return;

    const hasProductForm = !_.isEmpty(plate?.form_json) && !_.isEmpty(JSON.parse(plate?.form_json || '{}'));
    const productCategory = categories.find(c => c.id == plate.category_id);
    const hasCategoryForm = productCategory && !_.isEmpty(productCategory?.form_json) && !_.isEmpty(JSON.parse(productCategory?.form_json || '{}'));
    const hasForm = hasProductForm || hasCategoryForm;

    let finalDiscount = 0;
    if (productCategory) {
      finalDiscount = parseFloat(productCategory.discount || 0) !== 0
        ? parseFloat(productCategory.discount || 0)
        : parseFloat(plate.discount || 0);
    }

    if (hasForm) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('productId', plate.id);
      newParams.set('categoryId', activeCategoryId || activeCategory);
      setSearchParams(newParams);
      window.history.pushState({}, '', `?${newParams.toString()}`);
      document.body.style.overflow = 'hidden';
      return;
    }

    const basePrice = parseFloat(plate?.en_price || 0);
    const discountedPrice = basePrice * (1 - finalDiscount / 100);
    dispatch(addToCart(restaurantName, plate, 1, {}, discountedPrice, ''));
    toast.success(activeLanguage === 'en' ? 'Added to cart' : 'تمت الإضافة إلى السلة');
  };

  /* ── List row for all-items list mode ─────────────────────── */
  const renderListRow = (plate, catId) => {
    const productCategory = categories.find(c => c.id == catId);
    let finalDiscount = 0;
    if (productCategory) {
      finalDiscount = parseFloat(productCategory.discount || 0) !== 0
        ? parseFloat(productCategory.discount || 0)
        : parseFloat(plate.discount || 0);
    }
    const originalPrice   = parseFloat(plate.en_price || 0);
    const discountedPrice = originalPrice * (1 - finalDiscount / 100);
    const sym = getCurrencySymbol();
    const isOutOfStock = Boolean(plate?.out_of_stock) || Number(plate?.out_of_stock) === 1;
    let features = {};
    try { features = JSON.parse(restaurant?.features || '{}'); } catch (_) {}

    const coverIdx = plate.images?.findIndex(img => img.id === plate.new_cover_id) ?? -1;
    const imageUrl = coverIdx >= 0 && plate.images?.[coverIdx]?.url
      ? `https://storage.googleapis.com/ecommerce-bucket-testing/${plate.images[coverIdx].url}`
      : restaurant?.logoURL
        ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
        : null;

    return (
      <ListRow key={plate.id} $rtl={isRTL} onClick={() => openProduct(plate, catId)}>
        {imageUrl && (
          <ListRowImg>
            <img src={imageUrl} alt={activeLanguage === 'en' ? plate.en_name : plate.ar_name} />
          </ListRowImg>
        )}
        <ListRowContent>
          <ListRowName>{activeLanguage === 'en' ? plate.en_name : plate.ar_name}</ListRowName>
          {plate.en_price && (
            <ListRowPriceWrap>
              {finalDiscount > 0 && (
                <ListRowStrike>{convertPrice(originalPrice, sym)}</ListRowStrike>
              )}
              <ListRowPrice>{convertPrice(discountedPrice, sym)}</ListRowPrice>
            </ListRowPriceWrap>
          )}
        </ListRowContent>
        {features?.cart && (
          isOutOfStock ? (
            <OutOfStockBadge>{activeLanguage === 'en' ? 'Out of stock' : 'غير متوفر'}</OutOfStockBadge>
          ) : (
            <ListRowAddBtn
              type="button"
              onClick={buildOnQuickAdd(plate, catId)}
              onMouseDown={e => { e.stopPropagation(); e.preventDefault(); }}
              onTouchEnd={e => { e.preventDefault(); e.stopPropagation(); buildOnQuickAdd(plate, catId)(e); }}
            >
              +
            </ListRowAddBtn>
          )
        )}
      </ListRow>
    );
  };

  /* ── Loading ──────────────────────────────────────────────── */
  if (isLoading && !isAllItemsCategory) {
    return <GridWrapper><ProductListSkeleton count={6} /></GridWrapper>;
  }
  if (isLoadingAll && isAllItemsCategory) {
    return <GridWrapper><ProductListSkeleton count={6} /></GridWrapper>;
  }

  /* ── All-items view ───────────────────────────────────────── */
  if (isAllItemsCategory) {
    const isEmpty = allItemsSections.length === 0;
    return (
      <GridWrapper>
        {isEmpty && <ElegantEmptyState type="search" activeLanguage={activeLanguage} />}
        {allItemsSections.map(({ category, items }) => (
          <SectionBlock key={category.id}>
            <AllItemsSectionTitle category={category} activeLanguage={activeLanguage} />
            {allItemsStyle === 'list' ? (
              <OneColList>
                {items.map(plate => renderListRow(plate, category.id))}
              </OneColList>
            ) : (
              <TwoColGrid>
                {items.map((plate, idx) => (
                  <ElegantProductCard
                    key={plate.id}
                    plate={plate}
                    index={idx}
                    activePlate={null}
                    showPopup={showPopup}
                    setSearchParams={setSearchParams}
                    searchParams={searchParams}
                    activeCategoryId={category.id}
                    categories={categories}
                    disableDetails={false}
                    onQuickAdd={buildOnQuickAdd(plate, category.id)}
                    variant="grid"
                  />
                ))}
              </TwoColGrid>
            )}
          </SectionBlock>
        ))}
        {hasNextPageAll && <LoadMore ref={allItemsLoadMoreRef} />}
        {isFetchingNextPageAll && (
          <LoadingDots>{activeLanguage === 'en' ? 'Loading more...' : 'جاري التحميل...'}</LoadingDots>
        )}
      </GridWrapper>
    );
  }

  /* ── Normal category — 2-column grid ─────────────────────── */
  const isEmpty = filteredProducts.length === 0 && !isLoading;
  return (
    <GridWrapper>
      {isEmpty && <ElegantEmptyState type="search" activeLanguage={activeLanguage} />}
      <TwoColGrid>
        {filteredProducts.map((plate, idx) => (
          <ElegantProductCard
            key={plate.id}
            plate={plate}
            index={idx}
            activePlate={null}
            showPopup={showPopup}
            setSearchParams={setSearchParams}
            searchParams={searchParams}
            activeCategoryId={activeCategory}
            categories={categories}
            disableDetails={false}
            onQuickAdd={buildOnQuickAdd(plate, activeCategory)}
            variant="grid"
          />
        ))}
      </TwoColGrid>
      {hasNextPage && <LoadMore ref={loadMoreRef} />}
      {isFetchingNextPage && (
        <LoadingDots>{activeLanguage === 'en' ? 'Loading more...' : 'جاري التحميل...'}</LoadingDots>
      )}
    </GridWrapper>
  );
}
