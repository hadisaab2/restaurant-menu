"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[2656],{76279:(e,i,t)=>{t.d(i,{A:()=>v});var n=t(82483),a=t(88620),r=t(57526),o=(t(44014),t(41190));o.i7`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`,o.i7`
  from {
    transform: scale(0.95);
    opacity: 0.8;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;const l=o.Ay.div`
  width: 100%;
  position: relative;
  padding: 12px 0 8px 0;
  background: ${e=>e.theme.backgroundColor||"transparent"};
`,d=o.Ay.div`
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin-bottom: 6px;
  position: relative;

  .home-banner-swiper {
    overflow: hidden;
    padding: 0 12px;
  }

  .home-banner-swiper .swiper-wrapper {
    align-items: stretch;
  }

  .home-banner-swiper .swiper-slide {
    height: auto;
    display: flex;
    box-sizing: border-box;
  }
`,s=(o.Ay.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  padding: 10px calc(12.5% - 8px);
  background: transparent;
  box-shadow: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  &:active {
    cursor: grabbing;
  }
  
  @media (max-width: 768px) {
    gap: 12px;
    padding: 8px calc(10% - 6px);
  }
  
  @media (min-width: 1200px) {
    gap: 20px;
    padding: 12px calc(15% - 10px);
  }
`,o.Ay.div`
  width: 100%;
  height: 100%;
  min-height: 260px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${e=>e.theme.categoryUnactive||"#e0e0e0"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

  @media (max-width: 767px) {
    min-height: 240px;
    border-radius: 14px;
  }

  @media (min-width: 768px) {
    min-height: 300px;
  }

  @media (min-width: 1200px) {
    min-height: 340px;
    border-radius: 18px;
  }
`),c=o.Ay.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    transparent 40%,
    rgba(0, 0, 0, 0.35) 100%
  );

  @media (min-width: 1200px) {
    padding: 20px;
  }
`,p=o.Ay.div`
  width: 70%;
  max-width: 100%;
`,u=o.Ay.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  line-height: 1.3;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,x=(o.Ay.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  pointer-events: none;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 0 8px;
  }
  
  @media (min-width: 1200px) {
    padding: 0 32px;
  }
`,o.Ay.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.theme.backgroundColor||"transparent"};
  color: ${e=>e.theme.mainColor||"#1a1a1a"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  font-size: 18px;
  border: solid 1px ${e=>e.theme.mainColor||"#1a1a1a"};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    transform: scale(1.12);
    background: ${e=>e.theme.backgroundColor||"transparent"};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
  
  @media (min-width: 1200px) {
    width: 56px;
    height: 56px;
    font-size: 20px;
  }
`,o.Ay.div`
  display: none;
`,o.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding-bottom: 8px;
  
  @media (max-width: 768px) {
    gap: 8px;
    margin-top: 16px;
    padding-bottom: 6px;
  }
`),g=o.Ay.button`
  width: ${e=>e.$active?"28px":"10px"};
  height: 10px;
  border-radius: 5px;
  border: none;
  background: ${e=>e.$active?e.theme.mainColor||"#007bff":"rgba(0, 0, 0, 0.2)"};
  cursor: pointer;
  padding: 0;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    background: ${e=>e.$active?e.theme.mainColor||"#007bff":"rgba(0, 0, 0, 0.4)"};
    transform: scale(1.15);
  }
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    width: ${e=>e.$active?"24px":"8px"};
    height: 8px;
    border-radius: 4px;
  }
`;var h=t(56723);const m="https://storage.googleapis.com/menugic-images";function v(e){let{images:i,activeLanguage:t}=e;const o=(0,n.useRef)(null),[v,f]=(0,n.useState)(0),b=(null===i||void 0===i?void 0:i.length)||0;if(!i||0===i.length)return null;return(0,h.jsxs)(l,{className:"m-b10",id:"swiper",children:[(0,h.jsx)(d,{className:"swiper-btn-center-lr1",children:(0,h.jsx)(a.RC,{onSwiper:e=>{o.current=e},onSlideChange:e=>{f(e.realIndex)},modules:[r.Ij],slidesPerView:1.06,spaceBetween:10,loop:!0,loopAdditionalSlides:2,grabCursor:!0,speed:800,autoplay:{delay:3500,disableOnInteraction:!1,pauseOnMouseEnter:!0},className:"home-banner-swiper tag-group recomand-swiper",children:i.map(((e,i)=>{const n=e.url?`${m}/${e.url}`:"",r="ar"===t?e.ar_title:e.en_title;return(0,h.jsx)(a.qr,{children:(0,h.jsx)(s,{className:"card add-banner",style:{backgroundImage:n?`url(${n})`:void 0},children:(0,h.jsx)(c,{className:"card-body",children:(0,h.jsx)(p,{className:"card-info w-70",children:(0,h.jsx)(u,{className:"title mb-2 text-white",children:r||""})})})})},e.id||i)}))})}),b>1&&(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(x,{children:i.map(((e,i)=>(0,h.jsx)(g,{$active:i===v,onClick:()=>(e=>{o.current&&o.current.slideToLoop(e),f(e)})(i),"aria-label":`Go to slide ${i+1}`},i)))})})]})}},79290:(e,i,t)=>{t.d(i,{A:()=>m});var n=t(82483),a=t(12362),r=t(11671),o=t(22829),l=t(71481),d=t(93376),s=t(91965),c=t(17123),p=t(42751),u=t(90997),x=t(58821),g=t(56723);const h=o.phF;function m(e){let{onProductsClick:i,onSocialMediaClick:t,onBranchesClick:m,onFeedbackClick:v,onOrderClick:f,onHomeClick:b,onCategoryClick:y,onContactClick:w,onContactFormClick:j,onAboutClick:k,categories:$,activeCategory:C,setshowSidebar:L,showSidebar:A,restaurant:z,popupHandler:F,isProductDetailsOpen:_=!1,variant:O}=e;const{restaurantName:N}=(0,d.g)(),S=window.location.hostname.split(".")[0],U="menugic"!==S&&"localhost"!==S&&"www"!==S&&"api"!==S&&"staging-api"!==S?S:N,R=(0,s.d4)((e=>{var i;return null===(i=e.restaurant)||void 0===i?void 0:i[U]})),T=z||R,E=(()=>{try{const e=(null===T||void 0===T?void 0:T.features)||"{}";return"string"===typeof e?JSON.parse(e):e}catch{return{}}})(),I=v&&!0===E.feedback,P=k&&!0===E.about_us,X=j&&!0===E.contact_info,W=!0===E.user_registration,D=!!m,M=(0,s.d4)((e=>{var i,t;return(null===(i=e.restaurant)||void 0===i||null===(t=i[U])||void 0===t?void 0:t.activeLanguage)||"en"})),B=(0,s.wA)(),[Q,Y]=(0,n.useState)(!1),[J,K]=(0,n.useState)(!1),[q,H]=(0,n.useState)(!1),V=(0,n.useRef)(null),G=(0,n.useRef)(null),Z=e=>{B((0,c.y)({name:U,activeLanguage:e}))};(0,n.useEffect)((()=>{if(!q)return;const e=e=>{G.current&&!G.current.contains(e.target)&&H(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[q]);const ee=()=>{Y(!1)},ie=e=>{e&&e(),ee()};null===T||void 0===T||T.branches;let te={},ne=!1;if(null!==T&&void 0!==T&&T.social_media)try{te="string"===typeof T.social_media?JSON.parse(T.social_media):T.social_media,ne=Object.keys(te).length>0}catch(ae){te={}}return!ne&&null!==T&&void 0!==T&&T.socialMedia&&Array.isArray(T.socialMedia)&&(T.socialMedia.forEach((e=>{if(e.platform&&e.link){const i=e.platform.toLowerCase();te[i]=e.link.startsWith("http")?e.link:`https://${e.link}`}})),ne=Object.keys(te).length>0),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.OR,{activeLanguage:M,$isProductDetailsOpen:_,children:(0,g.jsxs)(a.TU,{dir:"ar"===M?"rtl":"ltr",children:[(0,g.jsxs)(a.JK,{onClick:()=>{b&&b()},style:{cursor:b?"pointer":"default"},children:[(null===T||void 0===T?void 0:T.logoURL)&&(0,g.jsx)(a.gu,{src:"theme1"===O?(0,x.V)(T.logoURL):`https://storage.googleapis.com/menugic-images/${T.logoURL}`,alt:(null===T||void 0===T?void 0:T.name)||"Restaurant Logo"}),"theme1"===O&&!(null!==T&&void 0!==T&&T.logoURL)&&(0,g.jsx)("strong",{style:{fontSize:18},children:(null===T||void 0===T?void 0:T.display_name)||(null===T||void 0===T?void 0:T.name)})]}),(0,g.jsxs)(a.pd,{activeLanguage:M,children:[b&&(0,g.jsx)(a.k2,{onClick:()=>ie(b),activeLanguage:M,children:(0,g.jsx)(a.$L,{activeLanguage:M,children:"en"===M?"Homepage":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})}),(0,g.jsx)(a.k2,{onClick:()=>ie(i),activeLanguage:M,children:(0,g.jsx)(a.$L,{activeLanguage:M,children:"theme1"===O?"en"===M?"Menu":"\u0627\u0644\u0642\u0627\u0626\u0645\u0629":"en"===M?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a"})}),I&&(0,g.jsx)(a.k2,{onClick:()=>ie(v),activeLanguage:M,children:(0,g.jsx)(a.$L,{activeLanguage:M,children:"en"===M?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"})}),P&&(0,g.jsx)(a.k2,{onClick:()=>ie(k),activeLanguage:M,children:(0,g.jsx)(a.$L,{activeLanguage:M,children:"en"===M?"About us":"\u0645\u0646 \u0646\u062d\u0646"})}),D&&(0,g.jsx)(a.k2,{onClick:()=>ie(m),activeLanguage:M,children:(0,g.jsx)(a.$L,{activeLanguage:M,children:"en"===M?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"})}),X&&(0,g.jsx)(a.k2,{onClick:()=>ie(j),activeLanguage:M,children:(0,g.jsx)(a.$L,{activeLanguage:M,children:"en"===M?"Questions & Suggestions":"\u0623\u0633\u0626\u0644\u0629 \u0648\u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a"})})]}),(0,g.jsx)(a.W_,{onClick:()=>{F&&F(null),Y(!Q)},activeLanguage:M,$lang:M,children:Q?(0,g.jsx)(l.QCr,{}):(0,g.jsx)(r.IMk,{})}),(0,g.jsxs)(a.BW,{children:[W&&(0,g.jsx)(u.A,{ref:V,restaurant:T,restaurantName:U,activeLanguage:M,popupHandler:F}),"en&ar"===(null===T||void 0===T?void 0:T.languages)&&(0,g.jsxs)(a.qY,{ref:G,children:[(0,g.jsx)(a.aQ,{type:"button","aria-label":"en"===M?"Language":"\u0627\u0644\u0644\u063a\u0629","aria-expanded":q,onClick:()=>H((e=>!e)),children:(0,g.jsx)(o.S6y,{"aria-hidden":!0})}),q&&(0,g.jsxs)(a.DS,{$rtl:"ar"===M,dir:"ar"===M?"rtl":"ltr",children:[(0,g.jsx)(a.XP,{type:"button",$active:"en"===M,$rtl:"ar"===M,onClick:()=>{Z("en"),H(!1)},children:"English"}),(0,g.jsx)(a.XP,{type:"button",$active:"ar"===M,$rtl:"ar"===M,onClick:()=>{Z("ar"),H(!1)},children:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"})]})]})]})]})}),Q&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.W8,{onClick:ee}),(0,g.jsxs)(a.qe,{activeLanguage:M,isOpen:Q,children:[(0,g.jsx)(a.a0,{onClick:ee,activeLanguage:M,children:(0,g.jsx)(l.QCr,{})}),(null===T||void 0===T?void 0:T.logoURL)&&(0,g.jsx)(a.UW,{onClick:()=>{b&&(b(),ee())},style:{cursor:b?"pointer":"default"},children:(0,g.jsx)(a.n,{src:`https://storage.googleapis.com/menugic-images/${T.logoURL}`,alt:(null===T||void 0===T?void 0:T.name)||"Restaurant Logo"})}),b&&(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(a.FT,{children:(0,g.jsxs)(a.og,{onClick:()=>ie(b),children:[(0,g.jsx)(a.sm,{children:(0,g.jsx)(l.rQ8,{})}),(0,g.jsx)(a.l3,{activeLanguage:M,children:"en"===M?"Homepage":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})]})})}),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(a.FT,{children:[(0,g.jsxs)(a.og,{onClick:()=>K(!J),children:[(0,g.jsx)(a.sm,{children:(0,g.jsx)(l.svy,{})}),(0,g.jsx)(a.l3,{activeLanguage:M,children:"en"===M?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a"}),(0,g.jsx)(a.rB,{activeLanguage:M,children:J?(0,g.jsx)(l.Ucs,{}):(0,g.jsx)(l.Vr3,{})})]}),J&&(0,g.jsx)(a.xw,{children:(0,g.jsx)(a.QT,{children:null===$||void 0===$?void 0:$.sort(((e,i)=>i.priority-e.priority)).map(((e,i)=>(0,g.jsxs)(a.hz,{onClick:()=>{return i=e.id,y&&y(i),void ee();var i},active:C===e.id,activeLanguage:M,children:["horizantal-withoutIcon"!==(null===T||void 0===T?void 0:T.category_type)&&e.image_url&&(0,g.jsx)(a.Ph,{src:(0,x.V)(e.image_url),alt:"en"===M?e.en_category:e.ar_category}),(0,g.jsx)(a.Jd,{children:"en"===M?e.en_category:e.ar_category})]},i)))})})]})}),I&&(0,g.jsx)(a.FT,{children:(0,g.jsxs)(a.og,{onClick:()=>{v&&v(),ee()},children:[(0,g.jsx)(a.sm,{children:(0,g.jsx)(l.g5D,{})}),(0,g.jsx)(a.l3,{activeLanguage:M,children:"en"===M?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"})]})}),W&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.FT,{children:(0,g.jsxs)(a.og,{onClick:()=>{var e,i;F&&F(null),null===(e=V.current)||void 0===e||null===(i=e.openOrders)||void 0===i||i.call(e),ee()},children:[(0,g.jsx)(a.sm,{children:(0,g.jsx)(l.kkc,{})}),(0,g.jsx)(a.l3,{activeLanguage:M,children:"en"===M?"Orders":"\u0627\u0644\u0637\u0644\u0628\u0627\u062a"})]})}),(0,g.jsx)(a.FT,{children:(0,g.jsxs)(a.og,{onClick:()=>{var e,i;F&&F(null),null===(e=V.current)||void 0===e||null===(i=e.openWishlist)||void 0===i||i.call(e),ee()},children:[(0,g.jsx)(a.sm,{children:(0,g.jsx)(h,{style:{fill:"none",stroke:"currentColor"}})}),(0,g.jsx)(a.l3,{activeLanguage:M,children:"en"===M?"Wishlist":"\u0627\u0644\u0645\u0641\u0636\u0644\u0629"})]})})]}),P&&(0,g.jsx)(a.FT,{children:(0,g.jsxs)(a.og,{onClick:()=>{k&&k(),ee()},children:[(0,g.jsx)(a.sm,{children:(0,g.jsx)(l.__w,{})}),(0,g.jsx)(a.l3,{activeLanguage:M,children:"en"===M?"About us":"\u0645\u0646 \u0646\u062d\u0646"})]})}),D&&(0,g.jsx)(a.FT,{children:(0,g.jsxs)(a.og,{onClick:()=>{m&&m(),ee()},children:[(0,g.jsx)(a.sm,{children:(0,g.jsx)(l.toK,{})}),(0,g.jsx)(a.l3,{activeLanguage:M,children:"en"===M?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"})]})}),X&&(0,g.jsx)(a.FT,{children:(0,g.jsxs)(a.og,{onClick:()=>{j&&j(),ee()},children:[(0,g.jsx)(a.sm,{children:(0,g.jsx)(l.gZZ,{})}),(0,g.jsx)(a.l3,{activeLanguage:M,children:"en"===M?"Questions & Suggestions":"\u0623\u0633\u0626\u0644\u0629 \u0648\u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a"})]})}),ne&&(0,g.jsx)(a.id,{activeLanguage:M,children:(0,g.jsx)(a.jM,{children:Object.entries(te).map((e=>{let[i,t]=e;if(!t)return null;return(0,g.jsx)(a.zU,{href:t.startsWith("http")?t:`https://${t}`,target:"_blank",rel:"noopener noreferrer",platform:i,children:(0,g.jsx)(a.Ob,{platform:i,children:(e=>{const i=(null===e||void 0===e?void 0:e.toLowerCase())||"";return i.includes("facebook")?(0,g.jsx)(l.iYk,{}):i.includes("instagram")?(0,g.jsx)(l.ao$,{}):i.includes("tiktok")?(0,g.jsx)(l.kkU,{}):i.includes("twitter")?(0,g.jsx)(l.feZ,{}):i.includes("linkedin")?(0,g.jsx)(l.QEs,{}):i.includes("youtube")?(0,g.jsx)(l.Vk6,{}):i.includes("whatsapp")?(0,g.jsx)(p.EcP,{}):(0,g.jsx)(l.f35,{})})(i)})},i)}))})}),(0,g.jsxs)(a.xe,{activeLanguage:M,children:["MENUGIC \xa9 Copyright ",(new Date).getFullYear(),' - All rights reserved. Created by "MENUGIC".']})]})]})]})}},12362:(e,i,t)=>{t.d(i,{$L:()=>p,BW:()=>o,DS:()=>R,FT:()=>h,JK:()=>l,Jd:()=>$,OR:()=>a,Ob:()=>O,Ph:()=>k,QT:()=>w,TU:()=>r,UW:()=>C,W8:()=>x,W_:()=>u,XP:()=>T,a0:()=>A,aQ:()=>U,gu:()=>d,hz:()=>j,id:()=>z,jM:()=>F,k2:()=>c,l3:()=>f,n:()=>L,og:()=>m,pd:()=>s,qY:()=>S,qe:()=>g,rB:()=>b,sm:()=>v,xe:()=>N,xw:()=>y,zU:()=>_});var n=t(41190);const a=n.Ay.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${e=>{var i,t;return(null===(i=e.theme)||void 0===i?void 0:i.navigationBarBackgroundColor)||(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"#ffffff"}};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: opacity 0.4s ease, transform 0.4s ease;
  opacity: ${e=>e.$isProductDetailsOpen?0:1};
  transform: ${e=>e.$isProductDetailsOpen?"translateY(-20px)":"translateY(0)"};
  pointer-events: ${e=>e.$isProductDetailsOpen?"none":"auto"};
`,r=n.Ay.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  gap: 24px;
  position: relative;

  @media (min-width: 969px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 70px;
    gap: 16px;
  }
`,o=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-inline-start: auto;
  /* Use dir=rtl/ltr on NavContent only — row-reverse here undoes RTL and keeps icons LTR */

  @media (max-width: 968px) {
    margin-inline-start: 0;
    /* Same order for EN/AR; NavContent dir handles mirroring (burger / actions swap sides). */
    order: 1;
  }

  @media (min-width: 969px) {
    order: unset;
  }
`,l=n.Ay.div`
  position: relative;
  left: auto;
  top: auto;
  transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  transition: transform 0.2s ease;
  z-index: 1;
  max-height: 100%;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 968px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 50vw;

    &:hover {
      transform: translate(-50%, -50%) scale(1.05);
    }
  }
`,d=n.Ay.img`
  height: auto;
  max-height: 85px;
  width: auto;
  max-width: min(280px, 40vw);
  object-fit: contain;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    max-height: 60px;
    max-width: min(200px, 45vw);
  }
`,s=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  justify-content: flex-start;

  @media (max-width: 968px) {
    display: none;
  }
`,c=n.Ay.button`
  padding: 10px 20px;
  background: transparent;
  border: none;
  color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#333333"}};
  font-size: 15px;
  font-weight: 500;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  font-family: ${e=>{var i;return`${(null===(i=e.theme)||void 0===i?void 0:i.font)||"system-ui"}, "Noto Kufi Arabic"`}};
  opacity: ${e=>e.disabled?.6:1};

  &:hover {
    ${e=>{var i,t;return e.disabled?"":`\n      background: ${(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#007bff"}15;\n      color: ${(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"};\n      transform: translateY(-2px);\n    `}}
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#007bff"}};
    transition: width 0.3s ease;
  }

  &:hover::after {
    ${e=>e.disabled?"":"width: 60%;"}
  }
`,p=n.Ay.span`
  display: inline-block;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,u=(n.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 10px;
  width: 50px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,n.Ay.div`
  width: 100%;
  background-color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.languagebackground)||"#f0f0f0"}};
  opacity: 0.6;
  position: absolute;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
`,n.Ay.div`
  position: absolute;
  background-color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.languagebackground)||"#f0f0f0"}};
  left: ${e=>"en"===e.activeLanguage?"0px":"25px"};
  transition: all ease-in-out 0.2s;
  height: 100%;
  width: 50%;
  z-index: 2;
  border-radius: 10px;
`,n.Ay.div`
  z-index: 3;
  flex: 1;
  height: 100%;
  color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.languageTextColor)||"#333333"}};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
  user-select: none;
`,n.Ay.button`
  display: flex;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: ${e=>{var i,t;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||(null===(t=e.theme)||void 0===t?void 0:t.maincolor)||"#007bff"}};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 22px;
  flex-shrink: 0;
  z-index: 2;

  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }

  @media (min-width: 969px) {
    display: none;
    order: unset;
  }

  @media (max-width: 968px) {
    order: 0;
  }

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    font-size: 22px;
  }
`),x=(n.Ay.div`
  font-size: 24px;
  color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#007bff"}};
`,n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`),g=n.Ay.div`
  position: fixed;
  top: 0;
  left: ${e=>"ar"===e.activeLanguage?"auto":"0"};
  right: ${e=>"ar"===e.activeLanguage?"0":"auto"};
  width: 280px;
  max-width: 85vw;
  height: 100%;

  background: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.backgroundColor)||"#ffffff"}};
  box-shadow: ${e=>"ar"===e.activeLanguage?"-2px 0 20px rgba(0, 0, 0, 0.15)":"2px 0 20px rgba(0, 0, 0, 0.15)"};
  z-index: 5000;
  padding: 0;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 0;
  transform: ${e=>e.isOpen?"translateX(0)":"ar"===e.activeLanguage?"translateX(100%)":"translateX(-100%)"};
  transition: transform 0.3s ease;
  overflow-y: auto;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  border-top-right-radius: ${e=>"ar"===e.activeLanguage?"0":"20px"};
  border-bottom-right-radius: ${e=>"ar"===e.activeLanguage?"0":"20px"};
  border-top-left-radius: ${e=>"ar"===e.activeLanguage?"20px":"0"};
  border-bottom-left-radius: ${e=>"ar"===e.activeLanguage?"20px":"0"};
`,h=(n.Ay.button`
  padding: 16px 20px;
  background: transparent;
  border: none;
  border-radius: 12px;
  color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#333333"}};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  font-family: ${e=>{var i;return`${(null===(i=e.theme)||void 0===i?void 0:i.font)||"system-ui"}, "Noto Kufi Arabic"`}};
  width: 100%;
  display: flex;
  align-items: center;
  ${e=>"ar"===e.activeLanguage?"justify-content: flex-end;":"justify-content: flex-start;"}

  &:hover {
    background: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#007bff"}}15;
    color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#007bff"}};
    transform: translateX(${e=>"ar"===e.activeLanguage?"-4px":"4px"});
  }

  &:active {
    transform: translateX(0);
  }
`,n.Ay.div`
  width: 100%;
  margin-bottom: 4px;
  animation: slideInFromLeft 0.4s ease-out;
  animation-fill-mode: both;
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.15s; }
  &:nth-child(4) { animation-delay: 0.2s; }
  &:nth-child(5) { animation-delay: 0.25s; }
`),m=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  border-bottom: none;
  opacity: ${e=>e.disabled?.6:1};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  background: transparent;

  &:hover {
    ${e=>{var i;return e.disabled?"":`\n      background: ${(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#007bff"}10;\n    `}}
  }
`,v=n.Ay.div`
  font-size: 20px;
  color: ${e=>{var i,t,n;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||(null===(t=e.theme)||void 0===t?void 0:t.maincolor)||(null===(n=e.theme)||void 0===n?void 0:n.textColor)||"#333333"}};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  flex-shrink: 0;
`,f=n.Ay.span`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#333333"}};
  flex: 1;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,b=n.Ay.div`
  font-size: 12px;
  color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#666666"}};
  margin-${e=>"ar"===e.activeLanguage?"right":"left"}: auto;
  transition: transform 0.3s ease;
  flex-shrink: 0;
`,y=n.Ay.div`
  width: 100%;
  padding: 8px 0;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  background: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.backgroundColor)||"rgba(0, 0, 0, 0.02)"}};
`,w=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0;
`,j=n.Ay.button`
  width: 100%;
  padding: 12px 24px;
  padding-left: ${e=>"ar"===e.activeLanguage?"24px":"48px"};
  padding-right: ${e=>"ar"===e.activeLanguage?"48px":"24px"};
  border: none;
  background: ${e=>{var i,t;return e.active?((null===(i=e.theme)||void 0===i?void 0:i.mainColor)||(null===(t=e.theme)||void 0===t?void 0:t.maincolor)||"#007bff")+"20":"transparent"}};
  color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#333333"}};
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  transition: all 0.3s ease;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  border-bottom: none;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &:hover {
    background: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#007bff"}}15;
    color: ${e=>{var i,t;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||(null===(t=e.theme)||void 0===t?void 0:t.maincolor)||"#007bff"}};
  }
`,k=n.Ay.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 4px;
`,$=n.Ay.span`
  flex: 1;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,C=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  margin-bottom: 5px;
  animation: slideInFromLeft 0.3s ease-out;
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,L=n.Ay.img`
  height: 60px;
  max-height: 60px;
  width: auto;
  max-width: min(200px, 50vw);
  object-fit: contain;
`,A=n.Ay.button`
  position: absolute;
  top: 20px;
  ${e=>"ar"===e.activeLanguage?"left: 20px;":"right: 20px;"}
  background: transparent;
  border: none;
  font-size: 24px;
  color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#333333"}};
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 10;
  
  &:hover {
    background: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#007bff"}}15;
    color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#007bff"}};
    transform: rotate(90deg);
  }
`,z=(n.Ay.div`
  width: 100%;
  height: 1px;
  background: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.borderColor)||"rgba(0, 0, 0, 0.1)"}};
  margin: 4px 0;
`,n.Ay.div`
  width: 100%;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  margin-top: 10px;
`),F=n.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
`,_=n.Ay.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.boxColor)||"#f8f9fa"}};
  color: ${e=>{var i,t,n,a,r,o;return null!==(i=e.platform)&&void 0!==i&&i.toLowerCase().includes("facebook")?"#1877F2":null!==(t=e.platform)&&void 0!==t&&t.toLowerCase().includes("instagram")?"#E4405F":null!==(n=e.platform)&&void 0!==n&&n.toLowerCase().includes("twitter")?"#1DA1F2":null!==(a=e.platform)&&void 0!==a&&a.toLowerCase().includes("whatsapp")?"#25D366":null!==(r=e.platform)&&void 0!==r&&r.toLowerCase().includes("tiktok")?"#000000":(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||"#007bff"}};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,O=n.Ay.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,N=n.Ay.div`
  width: 100%;
  padding: 20px 24px;
  text-align: center;
  font-size: 12px;
  color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#666666"}};
  margin-top: auto;
  margin-bottom: 20px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 13px;
  }
`,S=n.Ay.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,U=n.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  color: ${e=>{var i,t;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1e293b"}};
  transition: color 0.2s ease, transform 0.15s ease;

  &:hover {
    color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#0f172a"}};
    opacity: 0.8;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#3b82f6"}}55;
  }

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`,R=n.Ay.div`
  position: absolute;
  top: calc(100% + 8px);
  ${e=>e.$rtl?"left: 0;":"right: 0;"}
  min-width: 168px;
  padding: 6px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 12px 40px -12px rgba(15, 23, 42, 0.25);
  z-index: 10060;
`,T=n.Ay.button`
  display: block;
  width: 100%;
  text-align: ${e=>e.$rtl?"right":"left"};
  padding: 10px 14px;
  margin: 0;
  border: none;
  border-radius: 8px;
  background: ${e=>{var i;return e.$active?`${(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#3b82f6"}22`:"transparent"}};
  color: ${e=>{var i;return(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#0f172a"}};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: ${e=>{var i;return`${(null===(i=e.theme)||void 0===i?void 0:i.font)||"system-ui"}, "Noto Kufi Arabic"`}};

  &:hover {
    background: rgba(15, 23, 42, 0.06);
  }
`}}]);
//# sourceMappingURL=2656.b50ab5c9.chunk.js.map