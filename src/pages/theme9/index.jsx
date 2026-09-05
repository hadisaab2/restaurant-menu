import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changelanuage } from "../../redux/restaurant/restaurantActions";
import { trackVisit, trackPageView } from "../../utilities/analyticsTracking";
import * as S from "./styles";
import MacrosStrip from "../../product-macros/MacrosStrip";

const CHECK_SVG = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;
const CHEV_SVG = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>;
const CLOSE_SVG = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>;
const CLOCK_SVG = <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const SHIELD_SVG = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const STAR_SVG = (filled) => <svg width="12" height="12" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>;
const BURGER_SVG = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 12h18M3 6h18M3 18h18"/></svg>;

export default function Theme9() {
  const { restaurantName: paramName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName = subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www" && subdomain !== "api" && subdomain !== "staging-api" ? subdomain : paramName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const lang = useSelector((state) => state.restaurant?.[restaurantName]?.activeLanguage || "en");
  const dispatch = useDispatch();

  const isAr = lang === "ar";
  const loc = useCallback((en, ar) => isAr ? (ar || en || "") : (en || ""), [isAr]);

  const [showAnnounce, setShowAnnounce] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [detailSvc, setDetailSvc] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCat, setActiveCat] = useState(null);
  const [showMMenu, setShowMMenu] = useState(false);

  // Track visit
  useEffect(() => {
    if (restaurant?.restaurant_id) {
      trackVisit(restaurant.restaurant_id);
      trackPageView(restaurant.restaurant_id);
    }
  }, [restaurant?.restaurant_id]);

  // Direction
  useEffect(() => {
    document.documentElement.setAttribute("dir", isAr ? "rtl" : "ltr");
    return () => document.documentElement.removeAttribute("dir");
  }, [isAr]);

  // Scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Category nav observer ref (must be before early return)
  const svcNavRef = useRef(null);

  // Category observer (must be before early return)
  const categories = [...(restaurant?.categories || [])].sort((a, b) => (b.priority || 0) - (a.priority || 0) || (a.id || 0) - (b.id || 0));

  useEffect(() => {
    if (!restaurant || !categories.length) return;
    setActiveCat(categories[0]?.id);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActiveCat(Number(e.target.dataset.catId)); });
    }, { rootMargin: "-120px 0px -50% 0px", threshold: 0 });
    document.querySelectorAll("[data-cat-id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [restaurant?.restaurant_id, categories.length, lang]);

  if (!restaurant) return null;
  const allProducts = categories.flatMap((c) => (c.products || []).map((p) => ({ ...p, categoryName: loc(c.en_category, c.ar_category), categoryId: c.id })));
  const staffMembers = restaurant.staffMembers || [];
  const faqs = restaurant.faqs || [];
  const packages = restaurant.packages || [];
  const galleryItems = restaurant.galleryItems || [];
  const branches = restaurant.branches || [];
  const aboutUs = restaurant.aboutUs;
  const badges = restaurant.badges || [];
  const socialMedia = restaurant.socialMedia || [];
  const workingHours = restaurant.workingHours || [];
  const slogan = { en: restaurant.en_slogan, ar: restaurant.ar_slogan, sub_en: restaurant.en_slogan_subtext, sub_ar: restaurant.ar_slogan_subtext };
  const statItems = restaurant.statItems || [];

  const currency = restaurant.currency || "USD";
  const sym = currency === "USD" ? "$" : currency === "LBP" ? "LBP " : currency;
  const formatPrice = (p) => p == null ? "" : `${sym}${parseFloat(p).toFixed(2).replace(/\.00$/, "")}`;

  const featured = allProducts.filter((p) => p.featured || p.is_best_seller);
  const whatsappNum = (branches[0]?.whatsapp || restaurant.phone_number || "").replace(/[^0-9]/g, "");

  const toggleLang = () => dispatch(changelanuage({ name: restaurantName, language: isAr ? "en" : "ar" }));
  const openWA = (msg) => { const m = encodeURIComponent(msg || (isAr ? "مرحباً، أود الاستفسار عن خدماتكم." : "Hi, I'd like to inquire about your services.")); window.open(`https://wa.me/${whatsappNum}?text=${m}`, "_blank"); };
  const scrollToEl = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  const scrollToCat = (catId) => {
    setActiveCat(catId);
    const el = document.getElementById(`svc-cat-${catId}`);
    if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 120; window.scrollTo({ top: y, behavior: "smooth" }); }
  };

  return (
    <S.PageWrapper $rtl={isAr}>
      {/* Announcement */}
      {showAnnounce && slogan.en && (
        <S.AnnounceBar>
          <span dangerouslySetInnerHTML={{ __html: loc(slogan.en, slogan.ar) }} />
          <S.AnnounceClose onClick={() => setShowAnnounce(false)} aria-label="Dismiss">{CLOSE_SVG}</S.AnnounceClose>
        </S.AnnounceBar>
      )}

      {/* Header */}
      <S.HeaderBar $scrolled={scrolled}>
        <S.HeaderInner>
          <S.HeaderLogo href="#" $rtl={isAr}>{loc(restaurant.restaurantName, restaurant.restaurantName)}</S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderNavLink href="#services-area">{isAr ? "الخدمات" : "Services"}</S.HeaderNavLink>
            {aboutUs && <S.HeaderNavLink href="#about-section">{isAr ? "عنا" : "About"}</S.HeaderNavLink>}
            {staffMembers.length > 0 && <S.HeaderNavLink href="#team-section">{isAr ? "الفريق" : "Team"}</S.HeaderNavLink>}
            <S.HeaderNavLink href="#faq-section">{isAr ? "أسئلة شائعة" : "FAQ"}</S.HeaderNavLink>
            <S.HeaderNavLink href="#contact-section">{isAr ? "اتصلي بنا" : "Contact"}</S.HeaderNavLink>
          </S.HeaderNav>
          <S.HeaderEnd>
            <S.HeaderIconBtn onClick={toggleLang} aria-label="Language">{isAr ? "EN" : "ع"}</S.HeaderIconBtn>
            <S.HeaderBookBtn href="#" onClick={(e) => { e.preventDefault(); openWA(); }}>{isAr ? "احجزي الآن" : "Book Now"}</S.HeaderBookBtn>
          </S.HeaderEnd>
          <S.BurgerBtn onClick={() => setShowMMenu(true)} aria-label="Menu">{BURGER_SVG}</S.BurgerBtn>
        </S.HeaderInner>
      </S.HeaderBar>

      {/* Mobile Menu */}
      {showMMenu && (
        <>
          <S.OverlayBackdrop onClick={() => setShowMMenu(false)} />
          <div style={{ position: "fixed", insetBlockStart: 0, insetInlineStart: 0, width: 280, height: "100%", background: "#fff", zIndex: 101, display: "flex", flexDirection: "column", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, borderBottom: "1px solid #F0EDEA" }}>
              <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.125rem", fontWeight: 600 }}>{loc(restaurant.restaurantName, restaurant.restaurantName)}</span>
              <button onClick={() => setShowMMenu(false)} style={{ background: "none", border: "none", cursor: "pointer" }}>{CLOSE_SVG}</button>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
              {[
                { id: "services-area", label: isAr ? "الخدمات" : "Services" },
                { id: "about-section", label: isAr ? "عنا" : "About" },
                { id: "team-section", label: isAr ? "الفريق" : "Team" },
                { id: "faq-section", label: isAr ? "أسئلة شائعة" : "FAQ" },
                { id: "contact-section", label: isAr ? "اتصلي بنا" : "Contact" },
              ].map((l) => (
                <div key={l.id} style={{ padding: "12px 0", borderBottom: "1px solid #F0EDEA", fontSize: "0.875rem", fontWeight: 500, color: "#7A7472", cursor: "pointer" }}
                  onClick={() => { setShowMMenu(false); scrollToEl(l.id); }}>{l.label}</div>
              ))}
              <S.Btn $primary style={{ width: "100%", marginTop: 16 }} onClick={() => { setShowMMenu(false); openWA(); }}>
                {isAr ? "احجزي الآن" : "Book Now"}
              </S.Btn>
            </div>
          </div>
        </>
      )}

      <main>
        {/* Hero */}
        <S.HeroSection>
          <S.Container>
            <S.HeroInner>
              <S.HeroText>
                {slogan.sub_en && <S.HeroEyebrow>{loc(slogan.sub_en, slogan.sub_ar)}</S.HeroEyebrow>}
                <S.HeroTitle $rtl={isAr}>
                  {aboutUs ? loc(aboutUs.en_title, aboutUs.ar_title) : loc(restaurant.restaurantName, restaurant.restaurantName)}
                </S.HeroTitle>
                <S.HeroSub>
                  {aboutUs ? loc(aboutUs.en_subtitle, aboutUs.ar_subtitle) : loc(restaurant.en_slogan, restaurant.ar_slogan)}
                </S.HeroSub>
                <S.HeroCTAs>
                  <S.Btn $primary onClick={() => openWA()}>{isAr ? "احجزي موعد" : "Book Appointment"}</S.Btn>
                  <S.Btn $outline onClick={() => scrollToEl("services-area")}>{isAr ? "استكشفي الخدمات" : "Explore Services"}</S.Btn>
                </S.HeroCTAs>
                {badges.length > 0 && (
                  <S.HeroTrust>
                    {badges.slice(0, 3).map((b) => (
                      <S.HeroTrustItem key={b.id}>{SHIELD_SVG}<span>{loc(b.en_text, b.ar_text)}</span></S.HeroTrustItem>
                    ))}
                  </S.HeroTrust>
                )}
              </S.HeroText>
              <S.HeroVisual>
                {restaurant.cover_url ? <img src={restaurant.cover_url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : "🌸"}
              </S.HeroVisual>
            </S.HeroInner>
          </S.Container>
        </S.HeroSection>

        {/* Stats */}
        {statItems.length > 0 && (
          <S.StatsBar>
            <S.StatsInner>
              {statItems.map((s, i) => (
                <S.StatItem key={i}>
                  <S.StatVal>{s.value || s.en_value}</S.StatVal>
                  <S.StatLabel>{loc(s.en_label, s.ar_label)}</S.StatLabel>
                </S.StatItem>
              ))}
            </S.StatsInner>
          </S.StatsBar>
        )}

        {/* About */}
        {aboutUs && (
          <section id="about-section" style={{ padding: "48px 0" }}>
            <S.Container>
              <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
                <S.SectionTitle $center $rtl={isAr}>{isAr ? "عن مركزنا" : "About Our Clinic"}</S.SectionTitle>
                <p style={{ fontSize: "0.75rem", color: "#7A7472", lineHeight: 1.8 }}>
                  {loc(aboutUs.en_story || aboutUs.en_subtitle, aboutUs.ar_story || aboutUs.ar_subtitle)}
                </p>
              </div>
            </S.Container>
          </section>
        )}

        {/* Category Grid */}
        {categories.length > 0 && (
          <S.CatSection id="categories-section">
            <S.Container>
              <S.SectionTitle $center $rtl={isAr}>{isAr ? "خدماتنا" : "Our Services"}</S.SectionTitle>
              <S.SectionSub $center>{isAr ? "اكتشفي مجموعة علاجاتنا الفاخرة المصممة لتعزيز جمالك الطبيعي." : "Discover our range of premium treatments designed to enhance your natural beauty."}</S.SectionSub>
              <S.CatGrid>
                {categories.map((c) => {
                  const count = (c.products || []).length;
                  return (
                    <S.CatCard key={c.id} onClick={() => scrollToCat(c.id)}>
                      <S.CatIcon $color={c.image_url ? undefined : undefined}>
                        {c.image_url ? <img src={c.image_url} alt="" style={{ width: 28, height: 28, objectFit: "contain" }} /> : "✨"}
                      </S.CatIcon>
                      <S.CatName>{loc(c.en_category, c.ar_category)}</S.CatName>
                      <S.CatCount>{count} {count === 1 ? "service" : "services"}</S.CatCount>
                    </S.CatCard>
                  );
                })}
              </S.CatGrid>
            </S.Container>
          </S.CatSection>
        )}

        {/* Featured Services */}
        {featured.length > 0 && (
          <section style={{ padding: "48px 0" }}>
            <S.Container>
              <S.SectionTitle $rtl={isAr}>{isAr ? "الأكثر طلباً" : "Most Requested"}</S.SectionTitle>
              <S.SvcRail>
                {featured.map((p) => (
                  <ServiceCard key={p.id} svc={p} loc={loc} sym={sym} formatPrice={formatPrice} isAr={isAr} onOpen={() => setDetailSvc(p)} />
                ))}
              </S.SvcRail>
            </S.Container>
          </section>
        )}

        {/* All Services */}
        <section id="services-area" style={{ padding: "48px 0", background: "#fff" }}>
          <S.Container>
            <S.SectionTitle $rtl={isAr}>{isAr ? "جميع الخدمات" : "All Services"}</S.SectionTitle>
            <S.SvcNav ref={svcNavRef}>
              <S.SvcNavList>
                {categories.map((c) => (
                  <li key={c.id}>
                    <S.SvcNavItem $active={activeCat === c.id} onClick={() => scrollToCat(c.id)}>
                      {loc(c.en_category, c.ar_category)}
                    </S.SvcNavItem>
                  </li>
                ))}
              </S.SvcNavList>
            </S.SvcNav>
            {categories.map((c) => {
              const prods = (c.products || []).sort((a, b) => (b.priority || 0) - (a.priority || 0));
              if (!prods.length) return null;
              return (
                <S.SvcSectionBlock key={c.id} id={`svc-cat-${c.id}`} data-cat-id={c.id}>
                  <S.SvcSectionTitle $rtl={isAr}>{loc(c.en_category, c.ar_category)}</S.SvcSectionTitle>
                  <S.SvcGrid>
                    {prods.map((p) => (
                      <ServiceCard key={p.id} svc={{ ...p, categoryName: loc(c.en_category, c.ar_category) }} loc={loc} sym={sym} formatPrice={formatPrice} isAr={isAr} onOpen={() => setDetailSvc({ ...p, categoryName: loc(c.en_category, c.ar_category) })} />
                    ))}
                  </S.SvcGrid>
                </S.SvcSectionBlock>
              );
            })}
          </S.Container>
        </section>

        {/* Packages */}
        {packages.length > 0 && (
          <section id="packages-section" style={{ padding: "48px 0" }}>
            <S.Container>
              <S.SectionTitle $center $rtl={isAr}>{isAr ? "الباقات والعروض" : "Packages & Offers"}</S.SectionTitle>
              <S.PkgGrid>
                {packages.map((pkg) => (
                  <S.PkgCard key={pkg.id}>
                    {(pkg.en_badge || pkg.ar_badge) && <S.PkgRibbon>{loc(pkg.en_badge, pkg.ar_badge)}</S.PkgRibbon>}
                    <S.PkgBody>
                      <S.PkgName $rtl={isAr}>{loc(pkg.en_name, pkg.ar_name)}</S.PkgName>
                      <S.PkgDesc>{loc(pkg.en_description, pkg.ar_description)}</S.PkgDesc>
                      {pkg.included_items && (
                        <S.PkgIncludes>
                          {(Array.isArray(pkg.included_items) ? pkg.included_items : []).map((item, i) => (
                            <li key={i}>{CHECK_SVG} {typeof item === "string" ? item : loc(item.en, item.ar)}</li>
                          ))}
                        </S.PkgIncludes>
                      )}
                      <S.PkgFooter>
                        <div>
                          <S.PkgPrice>{formatPrice(pkg.price)}</S.PkgPrice>
                          {pkg.original_price && <S.PkgPriceOld>{formatPrice(pkg.original_price)}</S.PkgPriceOld>}
                        </div>
                        <S.Btn $primary onClick={() => openWA(`${isAr ? "أود الاستفسار عن باقة " : "I'd like to inquire about "} ${loc(pkg.en_name, pkg.ar_name)}`)}>{isAr ? "احجزي" : "Book"}</S.Btn>
                      </S.PkgFooter>
                    </S.PkgBody>
                  </S.PkgCard>
                ))}
              </S.PkgGrid>
            </S.Container>
          </section>
        )}

        {/* Gallery / Results */}
        {galleryItems.length > 0 && (
          <section id="results-section" style={{ padding: "48px 0", background: "#fff" }}>
            <S.Container>
              <S.SectionTitle $center $rtl={isAr}>{isAr ? "نتائج حقيقية" : "Real Results"}</S.SectionTitle>
              <S.SectionSub $center>{isAr ? "النتائج تختلف من شخص لآخر." : "Individual results may vary."}</S.SectionSub>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12, marginTop: 24 }}>
                {galleryItems.map((g) => (
                  <div key={g.id} style={{ borderRadius: 14, overflow: "hidden", background: "#F5F3F0" }}>
                    <img src={g.image_url} alt={loc(g.en_caption, g.ar_caption) || ""} style={{ width: "100%", height: 140, objectFit: "cover" }} />
                    {(g.en_caption || g.ar_caption) && (
                      <div style={{ padding: "8px 12px", fontSize: "0.6875rem", color: "#7A7472" }}>{loc(g.en_caption, g.ar_caption)}</div>
                    )}
                  </div>
                ))}
              </div>
            </S.Container>
          </section>
        )}

        {/* Trust */}
        {badges.length > 3 && (
          <section id="trust-section" style={{ padding: "48px 0" }}>
            <S.Container>
              <S.SectionTitle $center $rtl={isAr}>{isAr ? "لماذا تختارين " + restaurant.restaurantName : `Why Choose ${restaurant.restaurantName}`}</S.SectionTitle>
              <S.TrustGrid>
                {badges.map((b) => (
                  <S.TrustCard key={b.id}>
                    <S.TrustIcon>{b.icon_type || "⭐"}</S.TrustIcon>
                    <S.TrustTitle>{loc(b.en_text, b.ar_text)}</S.TrustTitle>
                  </S.TrustCard>
                ))}
              </S.TrustGrid>
            </S.Container>
          </section>
        )}

        {/* Team */}
        {staffMembers.length > 0 && (
          <section id="team-section" style={{ padding: "48px 0", background: "#fff" }}>
            <S.Container>
              <S.SectionTitle $center $rtl={isAr}>{isAr ? "تعرفي على فريقنا" : "Meet Our Team"}</S.SectionTitle>
              <S.TeamGrid>
                {staffMembers.map((m) => (
                  <S.TeamCard key={m.id}>
                    <S.TeamAvatar>
                      {m.photo_url ? <img src={m.photo_url} alt={loc(m.en_name, m.ar_name)} /> : (loc(m.en_name, m.ar_name) || "").substring(0, 2).toUpperCase()}
                    </S.TeamAvatar>
                    <S.TeamName>{loc(m.en_name, m.ar_name)}</S.TeamName>
                    <S.TeamRole>{loc(m.en_role, m.ar_role)}</S.TeamRole>
                    <S.TeamBio>{loc(m.en_bio, m.ar_bio)}</S.TeamBio>
                  </S.TeamCard>
                ))}
              </S.TeamGrid>
            </S.Container>
          </section>
        )}

        {/* Testimonials (from feedback) */}
        {restaurant.feedbacks && restaurant.feedbacks.length > 0 && (
          <section id="testimonials-section" style={{ padding: "48px 0" }}>
            <S.Container>
              <S.SectionTitle $center $rtl={isAr}>{isAr ? "ماذا تقول عميلاتنا" : "What Our Clients Say"}</S.SectionTitle>
              <S.TestiGrid>
                {restaurant.feedbacks.slice(0, 4).map((fb, i) => (
                  <S.TestiCard key={i}>
                    <S.TestiStars>{[1, 2, 3, 4, 5].map((n) => <span key={n}>{STAR_SVG(n <= (fb.rating || 5))}</span>)}</S.TestiStars>
                    <S.TestiQuote>"{fb.comments}"</S.TestiQuote>
                    <S.TestiAuthor>
                      <S.TestiAvatar>{(fb.name || "?").charAt(0)}</S.TestiAvatar>
                      <div>
                        <S.TestiName>{fb.name}</S.TestiName>
                      </div>
                    </S.TestiAuthor>
                  </S.TestiCard>
                ))}
              </S.TestiGrid>
            </S.Container>
          </section>
        )}

        {/* Booking CTA */}
        <S.BookingCTASection>
          <S.Container>
            <S.BookingCTAInner>
              <S.BookingCTATitle $rtl={isAr}>{isAr ? "مستعدة لبدء رحلتك؟" : "Ready to Start Your Journey?"}</S.BookingCTATitle>
              <S.BookingCTAText>{isAr ? "احجزي استشارة اليوم واكتشفي العلاج المناسب لك." : "Book a consultation today and discover the right treatment for you."}</S.BookingCTAText>
              <S.BookingCTABtns>
                <S.Btn $accent onClick={() => openWA()} style={{ border: "none" }}>{isAr ? "احجزي الآن" : "Book Now"}</S.Btn>
                <S.Btn $wa onClick={() => openWA()} style={{ border: "none" }}>WhatsApp</S.Btn>
              </S.BookingCTABtns>
            </S.BookingCTAInner>
          </S.Container>
        </S.BookingCTASection>

        {/* FAQ */}
        {faqs.length > 0 && (
          <S.FAQSection id="faq-section">
            <S.Container>
              <S.SectionTitle $center $rtl={isAr}>{isAr ? "أسئلة شائعة" : "Frequently Asked Questions"}</S.SectionTitle>
              <S.FAQList>
                {faqs.map((f) => (
                  <S.FAQItem key={f.id}>
                    <S.FAQQuestion $open={openFaq === f.id} onClick={() => setOpenFaq(openFaq === f.id ? null : f.id)}>
                      {loc(f.en_question, f.ar_question)} {CHEV_SVG}
                    </S.FAQQuestion>
                    <S.FAQAnswer $open={openFaq === f.id}>{loc(f.en_answer, f.ar_answer)}</S.FAQAnswer>
                  </S.FAQItem>
                ))}
              </S.FAQList>
            </S.Container>
          </S.FAQSection>
        )}

        {/* Contact */}
        <section id="contact-section" style={{ padding: "48px 0" }}>
          <S.Container>
            <S.SectionTitle $center $rtl={isAr}>{isAr ? "زوري مركزنا" : "Visit Us"}</S.SectionTitle>
            <div style={{ maxWidth: 600, margin: "24px auto 0", display: "flex", flexDirection: "column", gap: 12, fontSize: "0.75rem", color: "#7A7472" }}>
              {branches.map((b) => (
                <div key={b.id} style={{ padding: 16, border: "1px solid #F0EDEA", borderRadius: 14 }}>
                  <div style={{ fontWeight: 600, color: "#262324", marginBottom: 4 }}>{loc(b.en_name || b.name, b.ar_name)}</div>
                  <div>{loc(b.en_location || b.location, b.ar_location)}</div>
                  {b.phone && <div style={{ marginTop: 4 }}>📞 {b.phone}</div>}
                </div>
              ))}
              {restaurant.phone_number && <div>📞 {restaurant.phone_number}</div>}
              {workingHours.length > 0 && (
                <div style={{ marginTop: 8 }}>
                  🕐 {workingHours.map((h) => `${h.day || ""}: ${h.from || ""} - ${h.to || ""}`).join(" · ")}
                </div>
              )}
            </div>
          </S.Container>
        </section>
      </main>

      {/* Footer */}
      <S.FooterWrap>
        <S.Container>
          <S.FooterGrid>
            <div>
              <S.FooterBrand $rtl={isAr}>{restaurant.restaurantName}</S.FooterBrand>
              <S.FooterDesc>{loc(restaurant.en_slogan, restaurant.ar_slogan)}</S.FooterDesc>
            </div>
            <div>
              <S.FooterColTitle>{isAr ? "الخدمات" : "Services"}</S.FooterColTitle>
              {categories.slice(0, 6).map((c) => (
                <S.FooterListItem key={c.id} onClick={() => scrollToCat(c.id)}>{loc(c.en_category, c.ar_category)}</S.FooterListItem>
              ))}
            </div>
            <div>
              <S.FooterColTitle>{isAr ? "الشركة" : "Company"}</S.FooterColTitle>
              <S.FooterListItem onClick={() => scrollToEl("about-section")}>{isAr ? "عنا" : "About"}</S.FooterListItem>
              <S.FooterListItem onClick={() => scrollToEl("team-section")}>{isAr ? "الفريق" : "Team"}</S.FooterListItem>
              <S.FooterListItem onClick={() => scrollToEl("faq-section")}>{isAr ? "أسئلة شائعة" : "FAQ"}</S.FooterListItem>
            </div>
            <div>
              <S.FooterColTitle>{isAr ? "اتصلي بنا" : "Contact"}</S.FooterColTitle>
              {restaurant.phone_number && <S.FooterListItem>{restaurant.phone_number}</S.FooterListItem>}
              {workingHours.length > 0 && <S.FooterListItem>{workingHours[0]?.from} - {workingHours[0]?.to}</S.FooterListItem>}
            </div>
          </S.FooterGrid>
          <S.FooterBottom>
            <span>© {new Date().getFullYear()} {restaurant.restaurantName}</span>
            <span>Powered by <strong>Menugic</strong></span>
          </S.FooterBottom>
        </S.Container>
      </S.FooterWrap>

      {/* Mobile Bottom Bar */}
      <S.MobileBar>
        <S.MobileBarItem $active onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>{isAr ? "الرئيسية" : "Home"}</span>
        </S.MobileBarItem>
        <S.MobileBarItem onClick={() => scrollToEl("services-area")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          <span>{isAr ? "الخدمات" : "Services"}</span>
        </S.MobileBarItem>
        <S.MobileBarItem $book onClick={() => openWA()}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>{isAr ? "احجزي" : "Book"}</span>
        </S.MobileBarItem>
        <S.MobileBarItem onClick={() => openWA()}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span>WhatsApp</span>
        </S.MobileBarItem>
        <S.MobileBarItem onClick={() => scrollToEl("contact-section")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          <span>{isAr ? "المزيد" : "More"}</span>
        </S.MobileBarItem>
      </S.MobileBar>

      {/* Service Detail */}
      {detailSvc && (
        <>
          <S.OverlayBackdrop onClick={() => setDetailSvc(null)} />
          <S.DetailPanel>
            <S.DetailClose onClick={() => setDetailSvc(null)}>{CLOSE_SVG}</S.DetailClose>
            <S.DetailScroll>
              <S.DetailImg $bg={detailSvc.cover_id ? undefined : "#F0EAE5"}>
                {detailSvc.images?.[0]?.url ? <img src={detailSvc.images[0].url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : "✨"}
              </S.DetailImg>
              <S.DetailBody>
                <div style={{ fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#B39B8E", marginBottom: 8 }}>
                  {detailSvc.categoryName || ""}
                </div>
                <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.75rem", fontWeight: 500, marginBottom: 12 }}>
                  {loc(detailSvc.en_name, detailSvc.ar_name)}
                </h2>
                <p style={{ fontSize: "0.75rem", color: "#7A7472", lineHeight: 1.8, marginBottom: 20 }}>
                  {loc(detailSvc.en_description, detailSvc.ar_description)}
                </p>

                {/* Info grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 20 }}>
                  {detailSvc.duration_minutes && (
                    <div style={{ padding: 12, background: "#FBFAF8", borderRadius: 10, textAlign: "center" }}>
                      <div style={{ fontSize: "0.6875rem", color: "#A9A3A0", marginBottom: 2 }}>{isAr ? "المدة" : "Duration"}</div>
                      <div style={{ fontWeight: 700, fontSize: "0.75rem" }}>{detailSvc.duration_minutes} min</div>
                    </div>
                  )}
                  {detailSvc.sessions_count && (
                    <div style={{ padding: 12, background: "#FBFAF8", borderRadius: 10, textAlign: "center" }}>
                      <div style={{ fontSize: "0.6875rem", color: "#A9A3A0", marginBottom: 2 }}>{isAr ? "الجلسات" : "Sessions"}</div>
                      <div style={{ fontWeight: 700, fontSize: "0.75rem" }}>{detailSvc.sessions_count}</div>
                    </div>
                  )}
                  <div style={{ padding: 12, background: "#FBFAF8", borderRadius: 10, textAlign: "center" }}>
                    <div style={{ fontSize: "0.6875rem", color: "#A9A3A0", marginBottom: 2 }}>{isAr ? "السعر" : "Price"}</div>
                    <div style={{ fontWeight: 700, fontSize: "0.75rem" }}>
                      {detailSvc.requires_consultation ? (isAr ? "يتطلب استشارة" : "Consultation required") : detailSvc.en_price ? formatPrice(detailSvc.en_price) : "—"}
                    </div>
                  </div>
                </div>

                <MacrosStrip macros={detailSvc?.macros} activeLanguage={isAr ? "ar" : "en"} />

                {/* Benefits */}
                {detailSvc.en_benefits && (
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.75rem", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                      {CHECK_SVG} {isAr ? "الفوائد" : "Benefits"}
                    </div>
                    <ul style={{ listStyle: "none" }}>
                      {(Array.isArray(detailSvc.en_benefits) ? detailSvc.en_benefits : []).map((b, i) => (
                        <li key={i} style={{ fontSize: "0.75rem", color: "#7A7472", padding: "4px 0", display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#B39B8E", marginTop: 7, flexShrink: 0 }} />
                          {typeof b === "string" ? b : loc(b.en, b.ar)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Preparation */}
                {detailSvc.en_preparation && (
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.75rem", marginBottom: 8 }}>{isAr ? "التحضير" : "Preparation"}</div>
                    <p style={{ fontSize: "0.75rem", color: "#7A7472", lineHeight: 1.7 }}>{loc(detailSvc.en_preparation, detailSvc.ar_preparation)}</p>
                  </div>
                )}

                {/* Aftercare */}
                {detailSvc.en_aftercare && (
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.75rem", marginBottom: 8 }}>{isAr ? "العناية بعد العلاج" : "Aftercare"}</div>
                    <p style={{ fontSize: "0.75rem", color: "#7A7472", lineHeight: 1.7 }}>{loc(detailSvc.en_aftercare, detailSvc.ar_aftercare)}</p>
                  </div>
                )}
              </S.DetailBody>
            </S.DetailScroll>
            <S.DetailFooter>
              <S.Btn $primary onClick={() => { setDetailSvc(null); openWA(`${isAr ? "أود حجز موعد لـ " : "I'd like to book "} ${loc(detailSvc.en_name, detailSvc.ar_name)}`); }}>
                {isAr ? "احجزي الآن" : "Book Now"}
              </S.Btn>
              <S.Btn $wa onClick={() => openWA(`${isAr ? "أود الاستفسار عن " : "I'd like to inquire about "} ${loc(detailSvc.en_name, detailSvc.ar_name)}`)} style={{ border: "none" }}>
                WhatsApp
              </S.Btn>
            </S.DetailFooter>
          </S.DetailPanel>
        </>
      )}
    </S.PageWrapper>
  );
}

// ── Service Card Component ──
function ServiceCard({ svc, loc, formatPrice, isAr, onOpen }) {
  const hasDuration = svc.duration_minutes;
  const hasSessions = svc.sessions_count;
  const isConsult = svc.requires_consultation;

  return (
    <S.SvcCard onClick={onOpen} tabIndex={0} $unavailable={svc.out_of_stock}>
      <S.SvcCardImg $bg={svc.images?.[0]?.url ? undefined : "#F0EAE5"}>
        {svc.images?.[0]?.url ? <img src={svc.images[0].url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : "✨"}
        {svc.featured && <S.SvcBadge $type="popular">{isAr ? "مطلوب" : "Popular"}</S.SvcBadge>}
        {svc.new && <S.SvcBadge $type="new">{isAr ? "جديد" : "New"}</S.SvcBadge>}
      </S.SvcCardImg>
      <S.SvcCardBody>
        {svc.categoryName && <S.SvcCardCat>{svc.categoryName}</S.SvcCardCat>}
        <S.SvcCardName>{loc(svc.en_name, svc.ar_name)}</S.SvcCardName>
        <S.SvcCardDesc>{loc(svc.en_description, svc.ar_description)}</S.SvcCardDesc>
        <S.SvcCardMeta>
          {hasDuration && <>{CLOCK_SVG}<span>{svc.duration_minutes} min</span></>}
          {hasSessions && <span>· {svc.sessions_count} {isAr ? "جلسات" : "sessions"}</span>}
        </S.SvcCardMeta>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
          {isConsult
            ? <span style={{ color: "#B39B8E", fontWeight: 600, fontSize: "0.6875rem" }}>{isAr ? "يتطلب استشارة" : "Consultation required"}</span>
            : <S.SvcCardPrice>{svc.en_price ? formatPrice(svc.en_price) : ""}{svc.duration_minutes && !svc.sessions_count ? "" : ""}</S.SvcCardPrice>
          }
          <S.SvcCardCTA onClick={(e) => { e.stopPropagation(); onOpen(); }}>{isAr ? "عرض التفاصيل" : "View Details"}</S.SvcCardCTA>
        </div>
      </S.SvcCardBody>
    </S.SvcCard>
  );
}
