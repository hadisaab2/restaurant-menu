import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changelanuage } from '../../redux/restaurant/restaurantActions';

/* ── Theme5 own components ──────────────────────────────────── */
import ElegantHeader      from './components/ElegantHeader';
import ElegantHero        from './components/ElegantHero';
import ElegantSearchBar   from './components/ElegantSearchBar';
import ElegantCategoryNav from './components/ElegantCategoryNav';
import ElegantProductGrid from './components/ElegantProductGrid';
import ElegantBottomTabBar from './components/ElegantBottomTabBar';
import ElegantMoreSheet   from './components/ElegantMoreSheet';
import WelcomeScreen      from './components/WelcomeScreen';

/* ── Reuse Theme2 popups/flows (functionality unchanged) ─────── */
import LocationPopup from '../theme2/popup/location';
import Share         from '../theme2/popup/share';
import { InstallPrompt } from '../theme2/installPrompt';
import ProductParam  from '../theme2/ProductParam';

/* ── Cart from Theme3 (Theme3 cart behavior/style) ───────────── */
import CartPopup from '../theme3/popup/cart';

/* ── Analytics (matches Theme3 behavior) ────────────────────── */
import { trackVisit, trackPageView } from '../../utilities/analyticsTracking';

/* ── Color utilities ─────────────────────────────────────────── */
import {
  safeColor,
  lighten,
  withAlpha,
  getReadableTextColor,
  softTint,
  softGradient,
} from './utils/colorUtils';

/* ═══════════════════════════════════════════════════════════════
   ROOT STYLED COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

const Root = styled.div`
  min-height: 100dvh;
  width: 100%;
  background: var(--theme-page-bg, #f4f4f4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Kufi Arabic", sans-serif;
  position: relative;
  /* Bottom padding so content is not hidden behind tab bar */
  padding-bottom: calc(88px + env(safe-area-inset-bottom));
`;

const AfterHeroSpacer = styled.div`
  height: 76px;
  background: var(--theme-page-bg, #f4f4f4);
`;

const MenuSectionLabel = styled.div`
  padding: 18px 16px 4px;
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};
`;

const MenuSectionTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: var(--theme-text, #111);
  letter-spacing: -0.4px;
`;

const MenuSectionSub = styled.p`
  margin: 2px 0 0;
  font-size: 13px;
  color: var(--theme-text, #888);
  opacity: 0.5;
  font-weight: 400;
`;

/* ═══════════════════════════════════════════════════════════════
   CSS VARIABLE BUILDER
   Mirrors all admin color keys → CSS custom properties
   so every child component can use var(--theme-*) without
   re-reading Redux state.
   ═══════════════════════════════════════════════════════════════ */

function buildCssVars(theme) {
  if (!theme) return {};

  const bg       = safeColor(theme.backgroundColor,  '#f4f4f4');
  const main     = safeColor(theme.mainColor,         '#333333');
  const cardBg   = safeColor(theme.BoxColor,          '#ffffff');
  const catActive = safeColor(theme.categoryActive,   '#333333');

  /* Derived soft surfaces */
  const pageBg      = lighten(bg, 0.9);
  const pageSurface = softTint(bg, 0.16);

  /* Header glassmorphism — readable over card background */
  const headerScrolledBg   = withAlpha(cardBg, 0.92);
  const headerScrolledText = getReadableTextColor(cardBg);

  /* Tab bar */
  const tabBg       = withAlpha(cardBg, 0.96);
  const tabInactive = safeColor(theme.categoryUnactiveIcon, safeColor(theme.textColor, '#666666'));
  const tabActiveTint = withAlpha(safeColor(theme.categoryActive, main), 0.14);

  /* Hero gradient (used as fallback when no cover image) */
  const heroGradient = softGradient(main, bg, '145deg', 0.8, 0.65);

  return {
    /* Core */
    '--theme-main':                   main,
    '--theme-background':             bg,
    '--theme-page-bg':                pageBg,
    '--theme-page-surface':           pageSurface,
    '--theme-text':                   safeColor(theme.textColor,            '#111111'),
    '--theme-hero-gradient':          heroGradient,

    /* Header */
    '--theme-header-scrolled-bg':     headerScrolledBg,
    '--theme-header-scrolled-text':   headerScrolledText,

    /* Categories */
    '--theme-category-active':        catActive,
    '--theme-category-active-text':   safeColor(theme.categoryActiveText,   '#ffffff'),
    '--theme-category-active-icon':   safeColor(theme.categoryActiveIcon,   '#ffffff'),
    '--theme-category-inactive':      safeColor(theme.categoryUnActive,     '#ffffff'),
    '--theme-category-inactive-icon': safeColor(theme.categoryUnactiveIcon, '#999999'),

    /* Cards */
    '--theme-card-bg':                cardBg,
    '--theme-card-text':              safeColor(theme.BoxTextColor,         '#111111'),
    '--theme-price':                  safeColor(theme.BoxPriceColor,        '#333333'),

    /* Language toggle */
    '--theme-language-bg':            safeColor(theme.languagebackground,   '#333333'),
    '--theme-language-text':          safeColor(theme.languageTextColor,    '#ffffff'),

    /* Popups / modals */
    '--theme-popup-bg':               safeColor(theme.popupbackgroundColor, '#ffffff'),
    '--theme-popup-text':             safeColor(theme.popupTextColor,       '#111111'),
    '--theme-popup-button-text':      safeColor(theme.popupbuttonText,      '#ffffff'),

    /* Search */
    '--theme-search-bg':              safeColor(theme.searchbackground,     '#ffffff'),
    '--theme-search-text':            safeColor(theme.searchTextColor,      '#111111'),

    /* Forms */
    '--theme-form':                   safeColor(theme.formColor,            '#111111'),

    /* Sidebar */
    '--theme-sidebar-bg':             safeColor(theme.sidebarbackground,    '#f4f4f4'),
    '--theme-sidebar-text':           safeColor(theme.sidebartext,          '#111111'),
    '--theme-sidebar-search':         safeColor(theme.sidebarsearch,        '#333333'),
    '--theme-sidebar-search-text':    safeColor(theme.sidebarsearchText,    '#ffffff'),

    /* Bottom tab bar (dedicated tokens for precision) */
    '--theme-tab-bg':                 tabBg,
    '--theme-tab-active':             safeColor(theme.categoryActive, main),
    '--theme-tab-active-tint':        tabActiveTint,
    '--theme-tab-active-text':        safeColor(theme.categoryActiveText, '#ffffff'),
    '--theme-tab-inactive':           tabInactive,
    '--theme-tab-badge-bg':           main,
    '--theme-tab-badge-text':         safeColor(theme.popupbuttonText, safeColor(theme.categoryActiveText, '#ffffff')),
  };
}

/* ═══════════════════════════════════════════════════════════════
   THEME 5 ROOT COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Theme5() {
  /* ── URL params ─────────────────────────────────────────────── */
  const [searchParams, setSearchParams] = useSearchParams();
  const productId  = searchParams.get('productId');
  const categoryId = searchParams.get('categoryId');

  /* ── Restaurant resolution (exact Theme2 logic) ─────────────── */
  const { restaurantName: paramRestaurantName } = useParams();
  const subdomain = window.location.hostname.split('.')[0];
  const restaurantName =
    subdomain !== 'menugic' && subdomain !== 'localhost' && subdomain !== 'www'
      ? subdomain : paramRestaurantName;

  /* ── Redux selectors ────────────────────────────────────────── */
  const dispatch = useDispatch();
  const restaurant     = useSelector(state => state.restaurant?.[restaurantName]);
  const activeLanguage = useSelector(
    state => state.restaurant?.[restaurantName]?.activeLanguage || 'en'
  );
  const itemCount = useSelector(state =>
    (state.cart[restaurantName] || []).reduce((t, i) => t + i.quantity, 0)
  );

  /* ── RTL: set document direction (matches Theme3) ───────────── */
  useEffect(() => {
    document.documentElement.setAttribute('dir', activeLanguage === 'ar' ? 'rtl' : 'ltr');
    return () => document.documentElement.removeAttribute('dir');
  }, [activeLanguage]);

  /* ── Feature flags ──────────────────────────────────────────── */
  let features = {};
  try { features = JSON.parse(restaurant?.features || '{}'); } catch (_) {}

  /* ── Theme colors → CSS variables ──────────────────────────── */
  let themeColors = {};
  try { themeColors = JSON.parse(restaurant?.theme || '{}'); } catch (_) {}
  const cssVars = buildCssVars(themeColors);

  const isRTL = activeLanguage === 'ar';

  /* ── Slider (mirrors Theme2 showMenuSlider logic) ────────────── */
  const sliderImages   = restaurant?.sliderImages || [];
  const showMenuSlider =
    (restaurant?.show_slider_image === true  ||
     restaurant?.show_slider_image === 1     ||
     restaurant?.show_slider_image === '1')  &&
    sliderImages.length > 0;

  /* ── Categories (exact Theme2 logic) ────────────────────────── */
  // NOTE: Theme5 uses show_all_items_category without template_id constraint
  const showAllItemsCategory =
    restaurant?.show_all_items_category === true  ||
    restaurant?.show_all_items_category === 1     ||
    restaurant?.show_all_items_category === '1';

  const allItemsCategory = {
    id: 'all-items',
    en_category: 'All Items',
    ar_category: 'كل الأصناف',
    isAllItems: true,
    priority: 999999,
    image_url: restaurant?.logoURL || restaurant?.cover_url || null,
  };

  const sortedCategories = [...(restaurant?.categories || [])].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0) || (a.id || 0) - (b.id || 0)
  );

  const theme5Categories = showAllItemsCategory
    ? [allItemsCategory, ...sortedCategories]
    : sortedCategories;

  /* ── State ──────────────────────────────────────────────────── */
  const [activeCategory, setActiveCategory] = useState(
    categoryId ? categoryId : theme5Categories?.[0]?.id
  );
  const [carouselPosition, setCarouselPosition] = useState(
    !categoryId ? 0 : theme5Categories.findIndex(c => c.id == categoryId)
  );
  const [searchText, setSearchText]       = useState('');
  const [showPopup, setShowPopup]         = useState(null);
  const [activeTab, setActiveTab]         = useState('menu');
  const [showMoreSheet, setShowMoreSheet] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPopup, setShowInstallPopup] = useState(true);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  /* ── Welcome screen gate ─────────────────────────────────────── */
  // Skip welcome screen if user arrives via direct deep link (productId or categoryId)
  const [showWelcome, setShowWelcome] = useState(
    !productId && !categoryId
  );

  /* ── Refs ───────────────────────────────────────────────────── */
  const searchInputRef = useRef(null);

  /* ── Scroll tracking ─────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Analytics tracking (mirrors Theme3 trackVisit/trackPageView) */
  useEffect(() => {
    if (restaurant?.id) {
      const branchId = restaurant?.branches?.[0]?.id || null;
      trackVisit(restaurant.id, branchId);
      trackPageView(restaurant.id, branchId);
    }
  }, [restaurant?.id]);

  /* ── PWA install prompt (exact Theme2 logic) ─────────────────── */
  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log('✅ Install prompt event captured!');
      setDeferredPrompt(e);
      setShowInstallPopup(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', () => console.log('🎉 App installed'));
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    console.log('Install choice:', result.outcome);
    setDeferredPrompt(null);
    setShowInstallPopup(false);
  };

  /* ── Category URL sync (exact Theme2 setactiveCategoryWithUrl) ─ */
  const setActiveCategoryWithUrl = useCallback(id => {
    setActiveCategory(id);
    const next = new URLSearchParams(searchParams);
    if (id === 'all-items') next.delete('categoryId');
    else next.set('categoryId', id);
    setSearchParams(next);
  }, [searchParams, setSearchParams]);

  /* ── Popup handler (exact Theme2 popupHandler) ───────────────── */
  const popupHandler = type => {
    document.body.style.overflow = type ? 'hidden' : 'auto';
    setShowPopup(type);
  };

  /* ── Click-outside to dismiss popups (mirrors Theme2/Theme3) ─── */
  const handleClickOutside = () => {
    if (showPopup != null) popupHandler(null);
  };

  /* ── Tab bar interaction handler ─────────────────────────────── */
  const handleTabSelect = tab => {
    if (tab === 'cart') {
      if (features?.cart) { window.history.pushState({}, ''); popupHandler('cart'); }
      return;
    }
    if (tab === 'more') { setShowMoreSheet(true); return; }
    if (tab === 'search') {
      searchInputRef.current?.focus();
      searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (tab === 'menu') window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab(tab);
  };

  /* ── Active section label ────────────────────────────────────── */
  const activeCatObj = theme5Categories.find(c => c.id == activeCategory);
  const sectionLabel = activeCatObj
    ? (activeLanguage === 'en' ? activeCatObj.en_category : activeCatObj.ar_category)
    : (activeLanguage === 'en' ? 'Our Menu' : 'قائمتنا');

  /* ═══════════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════════ */
  return (
    <>
      {/* ── Welcome screen (shown on first load, skipped for deep links) */}
      {showWelcome && (
        <WelcomeScreen
          restaurant={restaurant}
          themeColors={themeColors}
          activeLanguage={activeLanguage}
          onEnter={() => setShowWelcome(false)}
        />
      )}

      <Root style={cssVars} onClick={handleClickOutside}>
        {/* 1. Sticky transparent → frosted header */}
        <ElegantHeader
          popupHandler={popupHandler}
          scrolled={headerScrolled}
        />

        {/* 2. Hero — shows Swiper slider when restaurant has slider images */}
        <ElegantHero
          popupHandler={popupHandler}
          showMenuSlider={showMenuSlider}
          sliderImages={sliderImages}
        />

        {/* 3. Spacer for floating restaurant card overflow */}
        <AfterHeroSpacer />

        {/* 4. Search */}
        <ElegantSearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          activeLanguage={activeLanguage}
          inputRef={searchInputRef}
        />

        {/* 5. Category chips */}
        {theme5Categories.length > 0 && (
          <ElegantCategoryNav
            categories={theme5Categories}
            activeCategory={activeCategory}
            setactiveCategory={setActiveCategoryWithUrl}
            setcarouselPosition={setCarouselPosition}
          />
        )}

        {/* 6. Section heading */}
        <MenuSectionLabel $rtl={isRTL}>
          <MenuSectionTitle>{sectionLabel}</MenuSectionTitle>
          <MenuSectionSub>
            {activeLanguage === 'en'
              ? 'Tap any item to view details'
              : 'اضغط على أي عنصر لعرض التفاصيل'}
          </MenuSectionSub>
        </MenuSectionLabel>

        {/* 7. Product grid (2-column premium cards) */}
        <ElegantProductGrid
          activeCategory={activeCategory}
          searchText={searchText}
          categories={theme5Categories}
          showPopup={showPopup}
          setactiveCategoryWithUrl={setActiveCategoryWithUrl}
        />

        {/* 8. Persistent mobile bottom tab bar — always visible, never hidden */}
        <ElegantBottomTabBar
          activeTab={activeTab}
          onTabSelect={handleTabSelect}
          cartCount={itemCount}
          activeLanguage={activeLanguage}
          features={features}
        />

        {/* ═══ Popups / flows (Theme2 logic, unchanged) ════════════ */}

        {/* More sheet */}
        <ElegantMoreSheet
          open={showMoreSheet}
          onClose={() => setShowMoreSheet(false)}
          popupHandler={popupHandler}
          features={features}
          onInstall={handleInstallClick}
          deferredPrompt={deferredPrompt}
          activeLanguage={activeLanguage}
        />

        {/* Location / branches popup (Theme2) */}
        <LocationPopup
          restaurant={restaurant}
          showPopup={showPopup}
          popupHandler={popupHandler}
        />

        {/* Cart popup (Theme3 cart behavior/style) */}
        {features?.cart && (
          <CartPopup
            restaurant={restaurant}
            showPopup={showPopup}
            popupHandler={popupHandler}
          />
        )}

        {/* Share popup (Theme2) */}
        <Share
          showPopup={showPopup}
          popupHandler={popupHandler}
          activeCategory={activeCategory}
        />

        {/* Product detail popup (Theme2 ProductParam — full carousel, zoom,
            form_json, add-to-cart, logProduct, out-of-stock, discounts) */}
        {productId && (
          <ProductParam
            productId={productId}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        )}

        {/* PWA install prompt (Theme2) */}
        {features?.install_app && (
          <InstallPrompt
            showInstallPopup={showInstallPopup}
            onInstall={handleInstallClick}
            restaurantName={restaurantName}
            onDismiss={() => setShowInstallPopup(false)}
          />
        )}
      </Root>
    </>
  );
}
