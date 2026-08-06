import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changelanuage } from "../../redux/restaurant/restaurantActions";
import { addToCart } from "../../redux/cart/cartActions";
import { trackVisit, trackPageView, trackItemView, trackAddToCart } from "../../utilities/analyticsTracking";
import { convertPrice } from "../../utilities/convertPrice";
import { getImageUrl } from "../../utilities/imageUrl";
import ProductOptionsPicker from "../../product-options/ProductOptionsPicker";
import CartPopup from "./popup/cart";
import LocationPopup from "./popup/location";
import FeedbackPopup from "./popup/feedback";
import ContactPopup from "./popup/contact";
import SharePopup from "./popup/share";
import AboutUsPopup from "../theme4/popup/aboutUs";
import {
  FiSearch, FiShoppingCart, FiX, FiPlus, FiMinus, FiMapPin, FiPhone,
  FiShare2, FiInfo, FiHome, FiGrid, FiMoreHorizontal, FiClock, FiMail,
  FiStar, FiMessageSquare, FiHeart, FiChevronDown,
} from "react-icons/fi";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import * as S from "./styles";

const STORAGE_URL = "https://storage.googleapis.com/ecommerce-bucket-testing/";

/* ───────────────────────────────────────────
   Google Fonts loader
   ─────────────────────────────────────────── */
const FONT_URL = "https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=DM+Sans:wght@400;500;600;700&family=Literata:opsz,wght@7..72,400;600;700&display=swap";

export default function Theme7() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain : paramRestaurantName;

  const restaurant = useSelector((s) => s.restaurant?.[restaurantName]);
  const activeLanguage = useSelector((s) => s.restaurant?.[restaurantName]?.activeLanguage || "en");
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart[restaurantName] || []);
  const itemCount = cart.reduce((t, i) => t + i.quantity, 0);
  const isRtl = activeLanguage === "ar";

  const features = useMemo(() => JSON.parse(restaurant?.features || "{}"), [restaurant?.features]);
  const categories = useMemo(() =>
    [...(restaurant?.categories || [])].sort((a, b) => (b.priority || 0) - (a.priority || 0) || (a.id || 0) - (b.id || 0)),
    [restaurant?.categories]
  );
  const currencySymbol = restaurant?.branches?.[0]?.currency_symbol || "$";
  const socialMedia = useMemo(() => { try { return JSON.parse(restaurant?.social_media || "{}"); } catch { return {}; } }, [restaurant?.social_media]);
  const logoUrl = restaurant?.logoURL ? `${STORAGE_URL}${restaurant.logoURL}` : null;

  /* ─── State ─── */
  const [showPopup, setShowPopup] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [desktopSearch, setDesktopSearch] = useState("");
  const isScrollingRef = useRef(false);
  const catNavRef = useRef(null);
  const searchInputRef = useRef(null);

  /* ─── Helpers ─── */
  const getName = useCallback((item, enKey = "en_name", arKey = "ar_name") =>
    isRtl && item?.[arKey] ? item[arKey] : item?.[enKey] || "",
    [isRtl]
  );
  const getCatName = useCallback((cat) =>
    isRtl && cat?.ar_category ? cat.ar_category : cat?.en_category || "",
    [isRtl]
  );
  const getDesc = useCallback((p) =>
    isRtl && p?.ar_description ? p.ar_description : p?.en_description || p?.description || "",
    [isRtl]
  );
  const loc = useCallback((en, ar) => isRtl ? (ar || en) : en, [isRtl]);

  /* ─── Load fonts ─── */
  useEffect(() => {
    if (!document.querySelector(`link[href="${FONT_URL}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet"; link.href = FONT_URL;
      document.head.appendChild(link);
    }
  }, []);

  /* ─── RTL ─── */
  useEffect(() => {
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    return () => document.documentElement.removeAttribute("dir");
  }, [isRtl]);

  /* ─── Analytics ─── */
  useEffect(() => {
    if (restaurant?.id) {
      const bid = restaurant?.branches?.[0]?.id || null;
      trackVisit(restaurant.id, bid);
      trackPageView(restaurant.id, bid);
    }
  }, [restaurant?.id]);

  /* ─── Header scroll shadow ─── */
  useEffect(() => {
    const h = () => setHeaderScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* ─── IntersectionObserver for scroll-spy ─── */
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    if (!sections.length) return;
    const obs = new IntersectionObserver((entries) => {
      if (isScrollingRef.current) return;
      for (const e of entries) {
        if (e.isIntersecting) {
          const id = Number(e.target.dataset.section);
          setActiveCategory(id);
          // Auto-scroll nav pill into view
          const pill = catNavRef.current?.querySelector(`[data-cat="${id}"]`);
          pill?.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
          break;
        }
      }
    }, { rootMargin: "-100px 0px -60% 0px", threshold: 0 });
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [categories]);

  /* ─── Set initial active category ─── */
  useEffect(() => {
    if (categories.length && !activeCategory) setActiveCategory(categories[0].id);
  }, [categories]);

  /* ─── Popup handler ─── */
  const popupHandler = useCallback((type) => {
    document.body.style.overflow = type == null ? "auto" : "hidden";
    setShowPopup(type);
  }, []);

  const handleLanguage = useCallback((lang) => {
    dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));
  }, [dispatch, restaurantName]);

  /* ─── Product detail (URL param) ─── */
  const openProduct = useCallback((id) => {
    const p = new URLSearchParams(searchParams);
    p.set("productId", id); setSearchParams(p);
  }, [searchParams, setSearchParams]);

  const closeProduct = useCallback(() => {
    const p = new URLSearchParams(searchParams);
    p.delete("productId"); setSearchParams(p);
  }, [searchParams, setSearchParams]);

  const currentProduct = useMemo(() => {
    if (!productId) return null;
    for (const cat of categories) {
      const f = cat.products?.find((p) => String(p.id) === String(productId));
      if (f) return f;
    }
    return null;
  }, [productId, categories]);

  /* ─── Category click scroll ─── */
  const scrollToCategory = useCallback((catId) => {
    setActiveCategory(catId);
    isScrollingRef.current = true;
    const el = document.getElementById(`section-${catId}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setTimeout(() => { isScrollingRef.current = false; }, 800);
  }, []);

  /* ─── Search logic ─── */
  const allProducts = useMemo(() => {
    const list = [];
    for (const cat of categories) {
      for (const p of (cat.products || [])) {
        if (p.is_deleted) continue;
        list.push({ ...p, _catName: getCatName(cat) });
      }
    }
    return list;
  }, [categories, getCatName]);

  const searchResults = useMemo(() => {
    const q = (showSearch ? searchQuery : desktopSearch).trim().toLowerCase();
    if (!q) return [];
    return allProducts.filter((p) => {
      const n = (p.en_name || "").toLowerCase() + " " + (p.ar_name || "").toLowerCase();
      return n.includes(q);
    }).slice(0, 20);
  }, [showSearch, searchQuery, desktopSearch, allProducts]);

  /* ─── Quick add ─── */
  const quickAdd = useCallback((e, product) => {
    e.stopPropagation();
    dispatch(addToCart(restaurantName, product, 1, {}, Number(product.price) || 0, "", undefined));
  }, [dispatch, restaurantName]);

  /* ─── Available languages ─── */
  const languages = useMemo(() => (restaurant?.languages || "en").split("&"), [restaurant?.languages]);

  if (!restaurant) return null;

  return (
    <S.PageWrapper $rtl={isRtl}>
      {/* ─── HEADER ─── */}
      <S.HeaderWrap $scrolled={headerScrolled}>
        <S.HeaderInner>
          <S.HeaderLogo>
            {logoUrl ? <img src={logoUrl} alt="" /> : <span>{(restaurant.name || "M")[0]}</span>}
          </S.HeaderLogo>
          <S.HeaderBrand $rtl={isRtl}>
            {isRtl && restaurant.ar_name ? restaurant.ar_name : restaurant.name}
          </S.HeaderBrand>

          {/* Desktop search */}
          <S.HeaderSearchDesktop>
            <input
              value={desktopSearch}
              onChange={(e) => setDesktopSearch(e.target.value)}
              placeholder={loc("Search menu...", "ابحث في القائمة...")}
            />
          </S.HeaderSearchDesktop>

          <S.HeaderActions>
            {/* Mobile search button */}
            <S.HeaderBtn className="mobile-only" onClick={() => { setShowSearch(true); setSearchQuery(""); }}>
              <FiSearch />
            </S.HeaderBtn>

            {/* Language toggle */}
            {languages.length > 1 && (
              <S.HeaderLangBtn onClick={() => handleLanguage(isRtl ? "en" : "ar")}>
                {isRtl ? "EN" : "ع"}
              </S.HeaderLangBtn>
            )}

            {/* Cart button */}
            {features?.cart && (
              <S.HeaderBtn onClick={() => popupHandler("cart")}>
                <FiShoppingCart />
                {itemCount > 0 && <S.CartBadge>{itemCount}</S.CartBadge>}
              </S.HeaderBtn>
            )}
          </S.HeaderActions>
        </S.HeaderInner>
      </S.HeaderWrap>

      {/* ─── RESTAURANT INFO ─── */}
      <S.RestoSection>
        <S.RestoAvatar>
          {logoUrl ? <img src={logoUrl} alt="" /> : <span>{(restaurant.name || "M")[0]}</span>}
        </S.RestoAvatar>
        <S.RestoName $rtl={isRtl}>
          {isRtl && restaurant.ar_name ? restaurant.ar_name : restaurant.name}
        </S.RestoName>
        <S.RestoTagline>
          {isRtl && restaurant.ar_slogan ? restaurant.ar_slogan : restaurant.en_slogan || ""}
        </S.RestoTagline>
        <S.RestoMeta>
          {restaurant.branches?.[0] && (
            <>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <FiMapPin /> {isRtl && restaurant.branches[0].ar_name ? restaurant.branches[0].ar_name : restaurant.branches[0].name || restaurant.branches[0].address || ""}
              </span>
              {restaurant.branches[0].phone && (
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <FiPhone /> {restaurant.branches[0].phone}
                </span>
              )}
            </>
          )}
        </S.RestoMeta>
        <S.RestoActions>
          {restaurant.branches?.length > 0 && (
            <S.ActionBtn onClick={() => popupHandler("location")}>
              <FiMapPin /> {loc("Branches", "الفروع")}
            </S.ActionBtn>
          )}
          <S.ActionBtn onClick={() => popupHandler("contact")}>
            <FiInfo /> {loc("Info", "معلومات")}
          </S.ActionBtn>
          <S.ActionBtn onClick={() => popupHandler("share")}>
            <FiShare2 /> {loc("Share", "مشاركة")}
          </S.ActionBtn>
        </S.RestoActions>
      </S.RestoSection>

      {/* ─── CATEGORY NAV (mobile sticky) ─── */}
      <S.CatNavWrap>
        <S.CatNavList ref={catNavRef}>
          {categories.map((cat) => (
            <S.CatNavItem
              key={cat.id}
              data-cat={cat.id}
              $active={activeCategory === cat.id}
              onClick={() => scrollToCategory(cat.id)}
            >
              {getCatName(cat)}
            </S.CatNavItem>
          ))}
        </S.CatNavList>
      </S.CatNavWrap>

      {/* ─── MENU LAYOUT ─── */}
      <S.MenuLayout>
        {/* Desktop sidebar */}
        <S.Sidebar>
          {categories.map((cat) => {
            const count = (cat.products || []).filter((p) => !p.is_deleted).length;
            return (
              <S.SidebarItem
                key={cat.id}
                $active={activeCategory === cat.id}
                onClick={() => scrollToCategory(cat.id)}
              >
                <span>{getCatName(cat)}</span>
                <S.SidebarCount>{count}</S.SidebarCount>
              </S.SidebarItem>
            );
          })}
        </S.Sidebar>

        {/* Products area */}
        <S.ProductsArea style={{ paddingBottom: itemCount > 0 ? 80 : 24 }}>
          {/* Desktop search results overlay */}
          {desktopSearch.trim() && searchResults.length > 0 && (
            <div style={{ marginBottom: 24 }}>
              <S.SectionTitle $rtl={isRtl}>{loc("Search Results", "نتائج البحث")}</S.SectionTitle>
              <S.ProductGrid>
                {searchResults.map((p) => (
                  <ProductCard
                    key={p.id} product={p} getName={getName} getDesc={getDesc}
                    currencySymbol={currencySymbol} openProduct={openProduct}
                    quickAdd={quickAdd} features={features} isRtl={isRtl} loc={loc}
                  />
                ))}
              </S.ProductGrid>
            </div>
          )}

          {/* Category sections */}
          {(!desktopSearch.trim()) && categories.map((cat) => {
            const products = (cat.products || [])
              .filter((p) => !p.is_deleted && p.is_deleted !== 1)
              .sort((a, b) => (b.priority || 0) - (a.priority || 0));
            if (!products.length) return null;
            return (
              <S.SectionWrap key={cat.id} id={`section-${cat.id}`} data-section={cat.id}>
                <S.SectionTitle $rtl={isRtl}>{getCatName(cat)}</S.SectionTitle>
                <S.ProductGrid>
                  {products.map((p) => (
                    <ProductCard
                      key={p.id} product={p} getName={getName} getDesc={getDesc}
                      currencySymbol={currencySymbol} openProduct={openProduct}
                      quickAdd={quickAdd} features={features} isRtl={isRtl} loc={loc}
                    />
                  ))}
                </S.ProductGrid>
              </S.SectionWrap>
            );
          })}
        </S.ProductsArea>
      </S.MenuLayout>

      {/* ─── FOOTER ─── */}
      <S.FooterWrap>
        <S.FooterInner>
          <S.FooterGrid>
            {/* Brand column */}
            <div>
              <S.FooterBrand $rtl={isRtl}>
                {isRtl && restaurant.ar_name ? restaurant.ar_name : restaurant.name}
              </S.FooterBrand>
              <S.FooterText>
                {isRtl && restaurant.ar_description ? restaurant.ar_description : restaurant.en_description || ""}
              </S.FooterText>
              <S.FooterSocials>
                {socialMedia.instagram && (
                  <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                )}
                {socialMedia.facebook && (
                  <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                )}
                {socialMedia.tiktok && (
                  <a href={socialMedia.tiktok} target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                )}
              </S.FooterSocials>
            </div>

            {/* Contact column */}
            <div>
              <S.FooterColTitle>{loc("Contact", "تواصل")}</S.FooterColTitle>
              {restaurant.branches?.[0]?.phone && (
                <S.FooterLink href={`tel:${restaurant.branches[0].phone}`}>
                  {restaurant.branches[0].phone}
                </S.FooterLink>
              )}
              {restaurant.branches?.[0]?.email && (
                <S.FooterLink href={`mailto:${restaurant.branches[0].email}`}>
                  {restaurant.branches[0].email}
                </S.FooterLink>
              )}
              {restaurant.branches?.[0]?.address && (
                <S.FooterText>{restaurant.branches[0].address}</S.FooterText>
              )}
            </div>

            {/* Hours column */}
            {restaurant.workingHours?.length > 0 && (
              <div>
                <S.FooterColTitle>{loc("Hours", "ساعات العمل")}</S.FooterColTitle>
                {restaurant.workingHours.map((wh, i) => (
                  <S.FooterText key={i}>
                    {isRtl && wh.ar_day ? wh.ar_day : wh.en_day}: {wh.opening_time} - {wh.closing_time}
                  </S.FooterText>
                ))}
              </div>
            )}

            {/* Legal column */}
            <div>
              <S.FooterColTitle>{loc("Legal", "قانوني")}</S.FooterColTitle>
              <S.FooterText>{loc("Privacy Policy", "سياسة الخصوصية")}</S.FooterText>
              <S.FooterText>{loc("Terms of Service", "شروط الخدمة")}</S.FooterText>
            </div>
          </S.FooterGrid>

          <S.FooterBottom>
            <span>© {new Date().getFullYear()} {restaurant.name}</span>
            <span>Powered by <a href="https://menugic.com" target="_blank" rel="noopener noreferrer">Menugic</a></span>
          </S.FooterBottom>
        </S.FooterInner>
      </S.FooterWrap>

      {/* ─── BOTTOM NAV (mobile) ─── */}
      <S.BNavWrap>
        <S.BNavItem $active={false} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <FiHome />
          <span>{loc("Home", "الرئيسية")}</span>
        </S.BNavItem>
        <S.BNavItem $active={false} onClick={() => {
          const first = document.querySelector("[data-section]");
          if (first) { const top = first.getBoundingClientRect().top + window.scrollY - 110; window.scrollTo({ top, behavior: "smooth" }); }
        }}>
          <FiGrid />
          <span>{loc("Menu", "القائمة")}</span>
        </S.BNavItem>
        <S.BNavItem $active={false} onClick={() => { setShowSearch(true); setSearchQuery(""); }}>
          <FiSearch />
          <span>{loc("Search", "بحث")}</span>
        </S.BNavItem>
        {features?.cart && (
          <S.BNavItem $active={false} onClick={() => popupHandler("cart")}>
            <FiShoppingCart />
            {itemCount > 0 && <S.BNavBadge>{itemCount}</S.BNavBadge>}
            <span>{loc("Cart", "السلة")}</span>
          </S.BNavItem>
        )}
        <S.BNavItem $active={false} onClick={() => popupHandler("more")}>
          <FiMoreHorizontal />
          <span>{loc("More", "المزيد")}</span>
        </S.BNavItem>
      </S.BNavWrap>

      {/* ─── CART BAR (floating, mobile) ─── */}
      {features?.cart && itemCount > 0 && (
        <S.CartBarWrap>
          <S.CartBarBtn onClick={() => popupHandler("cart")}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <S.CartBarCount>{itemCount}</S.CartBarCount>
              <S.CartBarLabel>{loc("View Cart", "عرض السلة")}</S.CartBarLabel>
            </div>
            <S.CartBarTotal>{convertPrice(cart.reduce((s, i) => s + i.price * i.quantity, 0), currencySymbol)}</S.CartBarTotal>
          </S.CartBarBtn>
        </S.CartBarWrap>
      )}

      {/* ─── SEARCH OVERLAY (mobile) ─── */}
      {showSearch && (
        <S.SearchOvWrap>
          <S.SearchOvHeader>
            <S.SearchOvInput
              ref={searchInputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={loc("Search menu...", "ابحث في القائمة...")}
              autoFocus
            />
            <S.SearchOvCancel onClick={() => { setShowSearch(false); setSearchQuery(""); }}>
              {loc("Cancel", "إلغاء")}
            </S.SearchOvCancel>
          </S.SearchOvHeader>
          <S.SearchOvBody>
            {searchQuery.trim() ? (
              searchResults.length > 0 ? (
                searchResults.map((p) => (
                  <S.SearchResultItem key={p.id} onClick={() => { setShowSearch(false); setSearchQuery(""); openProduct(p.id); }}>
                    <S.SearchResultImg>
                      {p.image_url && <img src={getImageUrl(p.image_url)} alt="" />}
                    </S.SearchResultImg>
                    <S.SearchResultInfo>
                      <h4>{getName(p)}</h4>
                      <p>{p._catName}</p>
                    </S.SearchResultInfo>
                    <S.SearchResultPrice>{convertPrice(Number(p.price) || 0, currencySymbol)}</S.SearchResultPrice>
                  </S.SearchResultItem>
                ))
              ) : (
                <S.SearchEmpty>{loc("No results found", "لم يتم العثور على نتائج")}</S.SearchEmpty>
              )
            ) : (
              <S.SearchEmpty>{loc("Type to search...", "اكتب للبحث...")}</S.SearchEmpty>
            )}
          </S.SearchOvBody>
        </S.SearchOvWrap>
      )}

      {/* ─── PRODUCT DETAIL MODAL ─── */}
      {currentProduct && (
        <ProductDetail
          product={currentProduct}
          restaurant={restaurant}
          restaurantName={restaurantName}
          activeLanguage={activeLanguage}
          isRtl={isRtl}
          currencySymbol={currencySymbol}
          features={features}
          onClose={closeProduct}
          getName={getName}
          getDesc={getDesc}
          loc={loc}
          dispatch={dispatch}
        />
      )}

      {/* ─── MORE SHEET ─── */}
      {showPopup === "more" && (
        <>
          <S.Overlay onClick={() => popupHandler(null)} />
          <S.SheetWrap>
            <S.SheetHandle />
            <S.SheetItem onClick={() => popupHandler("contact")}>
              <FiPhone /> {loc("Contact", "تواصل معنا")}
            </S.SheetItem>
            <S.SheetItem onClick={() => popupHandler("location")}>
              <FiMapPin /> {loc("Branches", "الفروع")}
            </S.SheetItem>
            {features?.about_us && (
              <S.SheetItem onClick={() => popupHandler("about")}>
                <FiInfo /> {loc("About Us", "من نحن")}
              </S.SheetItem>
            )}
            {features?.feedback && (
              <S.SheetItem onClick={() => popupHandler("feedback")}>
                <FiMessageSquare /> {loc("Feedback", "تقييم")}
              </S.SheetItem>
            )}
            <S.SheetItem onClick={() => popupHandler("share")}>
              <FiShare2 /> {loc("Share", "مشاركة")}
            </S.SheetItem>
          </S.SheetWrap>
        </>
      )}

      {/* ─── POPUPS ─── */}
      {showPopup && showPopup !== "more" && <S.Overlay onClick={() => popupHandler(null)} />}
      {showPopup === "cart" && (
        <CartPopup restaurant={restaurant} restaurantName={restaurantName}
          activeLanguage={activeLanguage} currencySymbol={currencySymbol}
          features={features} cart={cart} popupHandler={popupHandler} isRtl={isRtl} />
      )}
      {showPopup === "location" && (
        <LocationPopup restaurant={restaurant} activeLanguage={activeLanguage}
          popupHandler={popupHandler} isRtl={isRtl} />
      )}
      {showPopup === "feedback" && (
        <FeedbackPopup restaurant={restaurant} restaurantName={restaurantName}
          activeLanguage={activeLanguage} popupHandler={popupHandler} isRtl={isRtl} />
      )}
      {showPopup === "contact" && (
        <ContactPopup restaurant={restaurant} activeLanguage={activeLanguage}
          popupHandler={popupHandler} isRtl={isRtl} />
      )}
      {showPopup === "share" && (
        <SharePopup restaurant={restaurant} popupHandler={popupHandler} isRtl={isRtl} />
      )}
      {showPopup === "about" && (
        <AboutUsPopup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />
      )}
    </S.PageWrapper>
  );
}

/* ═══════════════════════════════════════════
   ProductCard (inline sub-component)
   ═══════════════════════════════════════════ */
function ProductCard({ product, getName, getDesc, currencySymbol, openProduct, quickAdd, features, isRtl, loc }) {
  const name = getName(product);
  const desc = getDesc(product);
  const imageUrl = product.image_url ? getImageUrl(product.image_url) : null;
  const basePrice = Number(product.price) || 0;
  const discount = Number(product.discount) || 0;
  const finalPrice = discount > 0 ? basePrice * (1 - discount / 100) : basePrice;
  const unavailable = product.is_available === false || product.is_available === 0;

  const hasOptions = product.formSchema?.version === 2 || product.form_schema?.version === 2;
  const canQuickAdd = features?.cart && !unavailable && !hasOptions;

  return (
    <S.Card $unavailable={unavailable} onClick={() => !unavailable && openProduct(product.id)}>
      <S.CardImage>
        {imageUrl && <img src={imageUrl} alt={name} loading="lazy" />}
      </S.CardImage>
      {product.is_new && <S.CardBadge $type="new">{loc("New", "جديد")}</S.CardBadge>}
      {discount > 0 && <S.CardBadge $type="sale">-{discount}%</S.CardBadge>}
      <S.CardBody>
        <S.CardName>{name}</S.CardName>
        {desc && <S.CardDesc>{desc}</S.CardDesc>}
        <S.CardFooter>
          <div>
            <S.CardPrice>{convertPrice(finalPrice, currencySymbol)}</S.CardPrice>
            {discount > 0 && <S.CardOldPrice>{convertPrice(basePrice, currencySymbol)}</S.CardOldPrice>}
          </div>
          {unavailable ? (
            <S.UnavailableLabel>{loc("Sold Out", "نفذت الكمية")}</S.UnavailableLabel>
          ) : features?.cart ? (
            <S.CardAddBtn onClick={(e) => canQuickAdd ? quickAdd(e, product) : undefined}>
              <FiPlus />
            </S.CardAddBtn>
          ) : null}
        </S.CardFooter>
      </S.CardBody>
    </S.Card>
  );
}

/* ═══════════════════════════════════════════
   ProductDetail (inline sub-component)
   ═══════════════════════════════════════════ */
function ProductDetail({ product, restaurant, restaurantName, activeLanguage, isRtl, currencySymbol, features, onClose, getName, getDesc, loc, dispatch }) {
  const [quantity, setQuantity] = useState(1);
  const [instruction, setInstruction] = useState("");
  const [formData, setFormData] = useState({});
  const [optionsPrice, setOptionsPrice] = useState(0);

  const name = getName(product);
  const description = getDesc(product);
  const imageUrl = product.image_url ? getImageUrl(product.image_url) : null;
  const basePrice = Number(product.price) || 0;
  const discountPercent = Number(product.discount) || 0;
  const discountedBase = discountPercent > 0 ? basePrice * (1 - discountPercent / 100) : basePrice;
  const unitPrice = discountedBase + optionsPrice;
  const totalPrice = unitPrice * quantity;
  const hasV2Options = product.formSchema?.version === 2 || product.form_schema?.version === 2;
  const formSchema = product.formSchema || product.form_schema;

  useEffect(() => {
    if (restaurant?.id && product?.id) {
      const bid = restaurant?.branches?.[0]?.id || null;
      trackItemView(restaurant.id, product.id, product.category_id, bid, {
        name, price: basePrice, category: product.category?.en_category || "",
      });
    }
  }, [product?.id]);

  const handleAdd = () => {
    if (restaurant?.id && product?.id) {
      const bid = restaurant?.branches?.[0]?.id || null;
      trackAddToCart(restaurant.id, product.id, product.category_id, quantity, bid, {
        name, price: unitPrice,
      });
    }
    dispatch(addToCart(restaurantName, product, quantity, formData, unitPrice, instruction, undefined));
    onClose();
  };

  return (
    <S.PdOverlay onClick={onClose}>
      <S.PdDrawer onClick={(e) => e.stopPropagation()}>
        <S.PdClose onClick={onClose}><FiX /></S.PdClose>
        <S.PdScroll>
          {imageUrl ? (
            <S.PdImageWrap><img src={imageUrl} alt={name} /></S.PdImageWrap>
          ) : (
            <S.PdNoImage>🍽️</S.PdNoImage>
          )}
          <S.PdBody>
            <S.PdName $rtl={isRtl}>{name}</S.PdName>
            {description && <S.PdDesc>{description}</S.PdDesc>}
            <S.PdPriceRow>
              <S.PdPrice>{convertPrice(discountedBase, currencySymbol)}</S.PdPrice>
              {discountPercent > 0 && <S.PdOldPrice>{convertPrice(basePrice, currencySymbol)}</S.PdOldPrice>}
              {discountPercent > 0 && <S.PdDiscountBadge>-{discountPercent}%</S.PdDiscountBadge>}
            </S.PdPriceRow>

            {hasV2Options && formSchema && (
              <S.PdOptionsWrap>
                <ProductOptionsPicker
                  formSchema={formSchema} formData={formData}
                  setFormData={setFormData} setOptionsPrice={setOptionsPrice}
                  currencySymbol={currencySymbol} activeLanguage={activeLanguage}
                />
              </S.PdOptionsWrap>
            )}

            <S.PdInstructionLabel>{loc("Special Instructions", "ملاحظات خاصة")}</S.PdInstructionLabel>
            <S.PdTextarea
              value={instruction} onChange={(e) => setInstruction(e.target.value)}
              placeholder={loc("Add your notes here...", "أضف ملاحظاتك هنا...")}
              rows={2}
            />
          </S.PdBody>
        </S.PdScroll>

        {features?.cart && (
          <S.PdFooter>
            <S.QtyControl>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><FiMinus /></button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}><FiPlus /></button>
            </S.QtyControl>
            <S.AddToCartBtn onClick={handleAdd}>
              {loc("Add to Cart", "أضف للسلة")} — {convertPrice(totalPrice, currencySymbol)}
            </S.AddToCartBtn>
          </S.PdFooter>
        )}
      </S.PdDrawer>
    </S.PdOverlay>
  );
}
