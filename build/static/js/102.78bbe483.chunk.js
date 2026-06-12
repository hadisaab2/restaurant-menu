/*! For license information please see 102.78bbe483.chunk.js.LICENSE.txt */
(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[102],{92733:(e,t,o)=>{"use strict";o.d(t,{A:()=>c});o(82483);var i=o(76279),r=o(41190);const n=r.Ay.section`
  width: 100%;
  position: relative;
  padding: 0 0 8px;
  margin-bottom: ${e=>"theme1"===e.$variant?"4px":"12px"};
`,a=r.Ay.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(96%, 720px);
  height: 120px;
  background: radial-gradient(
    ellipse 80% 70% at 50% 0%,
    ${e=>e.theme.mainColor||"#2563eb"}22,
    transparent 72%
  );
  pointer-events: none;
  z-index: 0;
`,l=r.Ay.div`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(
    180deg,
    ${e=>e.theme.BoxColor||"rgba(255,255,255,0.6)"} 0%,
    ${e=>e.theme.backgroundColor||"#f8f9fa"} 100%
  );
  box-shadow: none;
  overflow: hidden;

  @media (min-width: 768px) {
    border-radius: 0 0 24px 24px;
    max-width: min(100%, 960px);
  }
`,s=r.Ay.div`
  width: 100%;

  /* Tighten theme3 slider padding inside this frame */
  #swiper {
    padding-top: 0;
    padding-bottom: 28px;
  }
`;var d=o(56723);function c(e){let{images:t,activeLanguage:o="en",variant:r="theme1"}=e;return null!==t&&void 0!==t&&t.length?(0,d.jsxs)(n,{$variant:r,"data-theme12-slider":!0,children:[(0,d.jsx)(a,{"aria-hidden":!0}),(0,d.jsx)(l,{children:(0,d.jsx)(s,{children:(0,d.jsx)(i.A,{images:t,activeLanguage:o})})})]}):null}},86489:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>es});var i=o(82483),r=o(41190);const n=r.Ay.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${e=>e.theme.backgroundColor};
  font-family: ${e=>`${e.theme.font}, "Noto Kufi Arabic" !important`};
`,a=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  /* Bottom padding so content is never hidden behind the fixed tab bar */
  padding-bottom: calc(72px + env(safe-area-inset-bottom, 0px));
`,l=r.Ay.div`
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: ${e=>e.showPopup?"blur(5px)":"blur(0px)"};
  -webkit-backdrop-filter: ${e=>e.showPopup?"blur(5px)":"blur(0px)"};
  transition: all 1s ease-in-out;
  pointer-events: none;
`;r.Ay.div`
  display: none;
`,r.Ay.div`
  display: none;
`,r.Ay.div`
  display: none;
`,r.Ay.div``,r.Ay.div``,r.Ay.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.textColor};
  background-color: ${e=>e.theme.backgroundColor};
`;var s=o(27320),d=o(22829);const c=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${e=>e.theme.backgroundColor};
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
`,p=(r.Ay.div`
  width: 90%;
  display: flex;
  align-items: ${e=>"en"===e.activeLanuguage?"flex-start":"flex-end"};
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  color: ${e=>e.theme.textColor};
`,r.Ay.div`
  font-size: 22px;
`,r.Ay.div`
  width: 92%;
  display: flex;
  align-items: center;
  margin: 10px auto 14px;
  gap: 10px;
  direction: ltr;
`),u=r.Ay.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${e=>e.theme.searchTextColor};
  height: 46px;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
  background-color: ${e=>e.theme.searchbackground};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  border: 1px solid ${e=>e.theme.categoryUnActive||"rgba(0,0,0,0.07)"};
  padding: 0 14px;
`,x=r.Ay.input`
  flex: 1;
  height: 100%;
  background: transparent;
  border: 0;
  outline: none;
  padding-left: ${e=>"en"===e.activeLanguage?"10px":"0px"};
  padding-right: ${e=>"en"===e.activeLanguage?"0px":"10px"};
  color: ${e=>e.theme.searchTextColor};
  font-size: 14px;

  &::placeholder {
    color: ${e=>e.theme.searchTextColor};
    opacity: 0.45;
  }
`,h=(0,r.Ay)(s.Xj1)`
  font-size: 18px;
  color: ${e=>e.theme.searchTextColor};
  opacity: 0.55;
  flex-shrink: 0;
`,g=(r.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 10px;
  font-weight: 600;
  color: ${e=>e.theme.searchTextColor};
  height: 40px;
  font-size: 13px;
`,r.Ay.div``,r.Ay.div`
  height: 46px;
  min-width: 46px;
  font-size: 13px;
  padding: 0 16px;
  border-radius: 999px;
  font-weight: 600;
  gap: 6px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.searchbackground};
  color: ${e=>e.theme.searchTextColor};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  border: 1px solid ${e=>e.theme.categoryUnActive||"rgba(0,0,0,0.07)"};
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    opacity: 0.7;
  }
`),m=(0,r.Ay)(d.LZ_)`
  color: ${e=>e.theme.searchTextColor};
  font-size: 15px;
  flex-shrink: 0;
`;var f=o(91965),v=o(93376),y=o(1901);const b=r.i7`
  0%   { transform: scale(1); }
  50%  { transform: scale(1.08); }
  100% { transform: scale(1); }
`,w=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 14px;
  position: relative;
`,j=r.Ay.div`
  overflow: hidden;
  width: 92%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  flex-direction: column;
  height: 108px;

  &::-webkit-scrollbar { display: none; }
  scrollbar-width: none;
  -ms-overflow-style: none;
`,C=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  overflow-x: auto;
  gap: 8px;
  padding: 4px 0;

  &::-webkit-scrollbar { display: none; }
  scrollbar-width: none;
`,$=r.Ay.div`
  min-width: calc(25% - 6px);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  line-height: ${e=>"ar"===e.activeLanuguage?"1.5":"1.3"};
  font-size: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.94);
  }
`,A=r.Ay.div`
  width: 90%;
  height: 90%;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  background-color: ${e=>e.categoryId==e.activeCategory?e.theme.categoryActive:e.theme.categoryUnActive};
  box-shadow: ${e=>e.categoryId==e.activeCategory?"0 4px 16px rgba(0,0,0,0.18)":"0 1px 6px rgba(0,0,0,0.07)"};
  border: 1.5px solid ${e=>e.categoryId==e.activeCategory?e.theme.categoryActive||"transparent":e.theme.categoryUnActive||"rgba(0,0,0,0.06)"};
  transition: all 0.22s ease-in-out;
  padding: 6px 4px;
  animation: ${e=>e.categoryId==e.activeCategory?b:"none"} 0.3s ease;
`,k=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`,z=r.Ay.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.categoryId==e.activeCategory?e.theme.categoryActiveIcon||"rgba(255,255,255,0.25)":e.theme.categoryUnactiveIcon||"rgba(0,0,0,0.06)"};
  transition: all 0.22s ease-in-out;
  overflow: hidden;
`,S=r.Ay.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`,T=r.Ay.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 4px;
`,L=r.Ay.span`
  width: 95%;
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  font-size: 11px;
  font-weight: ${e=>e.categoryId==e.activeCategory?"700":"500"};
  color: ${e=>e.categoryId==e.activeCategory?e.theme.categoryActiveText||e.theme.categoryactivetext||"#ffffff":e.theme.categoryUnactiveText||e.theme.categoryunactivetext||e.theme.textColor||"#333"};
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  transition: color 0.2s;
  line-height: 1.3;
`,_=(0,r.Ay)(y.NaI)`
  position: absolute;
  font-size: 22px;
  right: 0px;
  color: ${e=>e.theme.textColor};
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.15s;

  &:hover { opacity: 1; }

  @media (min-width: 1024px) {
    right: 20px;
  }
`,I=(0,r.Ay)(y.NaI)`
  position: absolute;
  font-size: 22px;
  left: 0px;
  color: ${e=>e.theme.textColor};
  rotate: 180deg;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.15s;

  &:hover { opacity: 1; }

  @media (min-width: 1024px) {
    left: 20px;
  }
`;var E=o(22139),N=o(58821),P=o(56723);function F(e){let{categories:t,activeCategory:o,setactiveCategory:r,carouselPosition:n,setcarouselPosition:a}=e;const{restaurantName:l}=(0,v.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[d].activeLanguage})),p=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[d]})),u=(0,i.useRef)([]);return(0,i.useEffect)((()=>{u.current=u.current.slice(0,t.length)}),[t.length]),(0,i.useEffect)((()=>{u.current[n]&&u.current[n].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[n]),(0,P.jsxs)(w,{children:[(null===t||void 0===t?void 0:t.length)>4&&n>=1&&(0,P.jsx)(I,{onClick:()=>{n>0&&a(n-1)}}),(0,P.jsx)(j,{children:(0,P.jsx)(C,{carouselPosition:n,children:null===t||void 0===t?void 0:t.sort(((e,t)=>t.priority-e.priority)).map(((e,t)=>(0,P.jsx)($,{activeLanuguage:c,activeCategory:o,categoryId:e.id,onClick:()=>((e,t)=>{(0,E.c)(e),r(e),a(t)})(e.id,t),ref:e=>u.current[t]=e,children:(0,P.jsxs)(A,{activeCategory:o,categoryId:e.id,children:[(0,P.jsx)(k,{children:(0,P.jsx)(z,{activeCategory:o,categoryId:e.id,children:(0,P.jsx)(S,{src:e.image_url?(0,N.V)(e.image_url):e.isAllItems&&null!==p&&void 0!==p&&p.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${p.logoURL}`:e.isAllItems&&null!==p&&void 0!==p&&p.cover_url?`https://storage.googleapis.com/ecommerce-bucket-testing/${p.cover_url}`:""})})}),(0,P.jsx)(T,{children:(0,P.jsx)(L,{activeCategory:o,categoryId:e.id,children:"en"==c?e.en_category:e.ar_category})})]})})))})}),(null===t||void 0===t?void 0:t.length)>4&&(0,P.jsx)(_,{onClick:()=>{n<t.length-4&&a(n+1)}})]})}const R=r.i7`
  from { opacity: 0.5; transform: scaleX(0.92); }
  to   { opacity: 1; transform: scaleX(1); }
`,D=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 14px;
  position: relative;
`,U=r.Ay.div`
  overflow-x: auto;
  width: 92%;
  display: flex;
  align-items: center;
  position: relative;
  height: 48px;
  padding: 2px 0;

  &::-webkit-scrollbar { display: none; }
  scrollbar-width: none;
  -ms-overflow-style: none;
`,B=r.Ay.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: max-content;
  gap: 8px;
  align-items: center;
`,O=r.Ay.div`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  line-height: ${e=>"ar"===e.activeLanuguage?"1.5":"1.3"};
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
  height: 44px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.93);
  }
`,q=r.Ay.div`
  height: 100%;
  border-radius: 999px;
  padding: 0 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.categoryId==e.activeCategory?e.theme.categoryActive:e.theme.categoryUnActive};
  box-shadow: ${e=>e.categoryId==e.activeCategory?"0 3px 14px rgba(0,0,0,0.18)":"0 1px 5px rgba(0,0,0,0.06)"};
  border: 1.5px solid ${e=>e.categoryId==e.activeCategory?e.theme.categoryActive||"transparent":e.theme.categoryUnActive||"rgba(0,0,0,0.07)"};
  transition: all 0.22s ease-in-out;
  animation: ${e=>e.categoryId==e.activeCategory?R:"none"} 0.25s ease;
`,M=(r.Ay.div`
  display: none;
`,r.Ay.div`
  display: none;
`,r.Ay.img`
  display: none;
`,r.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
`),W=r.Ay.span`
  text-align: center;
  white-space: nowrap;
  font-size: 13px;
  font-weight: ${e=>e.categoryId==e.activeCategory?"700":"500"};
  color: ${e=>e.categoryId==e.activeCategory?e.theme.categoryActiveText||e.theme.categoryactivetext||"#ffffff":e.theme.categoryUnactiveText||e.theme.categoryunactivetext||e.theme.textColor||"#333"};
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  transition: color 0.2s, font-weight 0.2s;
  letter-spacing: 0.2px;
`,X=(0,r.Ay)(y.NaI)`
  position: absolute;
  font-size: 22px;
  right: 0px;
  color: ${e=>e.theme.textColor};
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover { opacity: 1; }
`;function V(e){let{categories:t,activeCategory:o,setactiveCategory:r,carouselPosition:n,setcarouselPosition:a}=e;const{restaurantName:l}=(0,v.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[d].activeLanguage})),p=(0,i.useRef)([]);return(0,i.useEffect)((()=>{p.current=p.current.slice(0,t.length)}),[t.length]),(0,i.useEffect)((()=>{p.current[n]&&p.current[n].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[n]),(0,P.jsxs)(D,{children:[(0,P.jsx)(U,{children:(0,P.jsx)(B,{children:null===t||void 0===t?void 0:t.sort(((e,t)=>t.priority-e.priority)).map(((e,t)=>(0,P.jsx)(O,{activeLanuguage:c,activeCategory:o,categoryId:e.id,onClick:()=>((e,t)=>{(0,E.c)(e),r(e),a(t)})(e.id,t),index:t,ref:e=>p.current[t]=e,children:(0,P.jsx)(q,{activeCategory:o,categoryId:e.id,children:(0,P.jsx)(M,{children:(0,P.jsx)(W,{activeCategory:o,categoryId:e.id,children:"en"===c?e.en_category:e.ar_category})})})},e.id)))})}),(null===t||void 0===t?void 0:t.length)>4&&(0,P.jsx)(X,{onClick:()=>{n<t.length-4&&a(n+1)}})]})}function Y(e){let{categories:t,activeCategory:o,setactiveCategory:i,carouselPosition:r,setcarouselPosition:n}=e;const{restaurantName:a}=(0,v.g)(),l=window.location.hostname.split(".")[0],s="menugic"!==l&&"localhost"!==l&&"www"!==l?l:a,d=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[s]}));return(0,P.jsxs)(P.Fragment,{children:["vertical-category"==d.category_type&&(0,P.jsx)(F,{categories:t,activeCategory:o,setactiveCategory:i,carouselPosition:r,setcarouselPosition:n}),"horizantal-withoutIcon"==d.category_type&&(0,P.jsx)(V,{categories:t,activeCategory:o,setactiveCategory:i,carouselPosition:r,setcarouselPosition:n})]})}var H=o(11671);const K=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 14px 0 18px;
  background: linear-gradient(
    160deg,
    ${e=>e.theme.backgroundColor||"#fff"} 0%,
    ${e=>e.theme.BoxColor||"#f9f9f9"} 100%
  );
  position: relative;
  overflow: hidden;
  direction: ${e=>e.isRtl?"rtl":"ltr"};

  /* Decorative soft radial glow — oven/pizza warmth from admin mainColor */
  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: ${e=>e.isRtl?"auto":"-50px"};
    left: ${e=>e.isRtl?"-50px":"auto"};
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: ${e=>e.theme.mainColor||"#e53e3e"};
    opacity: 0.07;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: ${e=>e.isRtl?"auto":"-30px"};
    right: ${e=>e.isRtl?"-30px":"auto"};
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: ${e=>e.theme.mainColor||"#e53e3e"};
    opacity: 0.05;
    pointer-events: none;
  }
`,J=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 92%;
  flex-direction: ${e=>e.isRtl?"row-reverse":"row"};
`,Q=r.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  outline: none;
  flex-shrink: 0;
  transition: background 0.18s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background: ${e=>e.theme.categoryUnActive||"rgba(0,0,0,0.06)"};
    transform: scale(0.92);
  }
`,Z=(0,r.Ay)(H.IMk)`
  color: ${e=>e.theme.mainColor};
  font-size: 26px;
`,G=r.Ay.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  background: ${e=>e.theme.BoxColor||"#ffffff"};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.12),
    0 0 0 3px ${e=>e.theme.categoryUnActive||"rgba(0,0,0,0.06)"};
  flex-shrink: 0;
  position: relative;
`,ee=r.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,te=r.Ay.span`
  font-size: 24px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||"#e53e3e"};
  letter-spacing: -0.5px;
  user-select: none;
`,oe=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  gap: 4px;
  width: 92%;
`,ie=r.Ay.h1`
  font-size: 20px;
  font-weight: 800;
  color: ${e=>e.theme.textColor||"#1a1a1a"};
  margin: 0;
  text-align: center;
  letter-spacing: -0.4px;
  line-height: 1.2;
`,re=r.Ay.p`
  font-size: 12px;
  color: ${e=>e.theme.textColor||"#666"};
  opacity: 0.55;
  margin: 0;
  text-align: center;
  letter-spacing: 0.2px;
`,ne=r.Ay.div`
  display: flex;
  flex-direction: row;
  background: ${e=>e.theme.languagebackground||e.theme.mainColor||"#e53e3e"};
  border-radius: 999px;
  padding: 3px;
  gap: 0;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`,ae=r.Ay.button`
  border: none;
  background: ${e=>e.active?"rgba(255, 255, 255, 0.28)":"transparent"};
  color: ${e=>e.theme.languageTextColor||"#fff"};
  font-size: 11px;
  font-weight: ${e=>e.active?"700":"400"};
  padding: 5px 11px;
  border-radius: 999px;
  cursor: pointer;
  outline: none;
  transition: all 0.18s;
  line-height: 1;
  letter-spacing: 0.4px;
  -webkit-tap-highlight-color: transparent;

  &:active {
    opacity: 0.7;
  }
`;r.Ay.img`
  max-width: 250px;
  max-height: 120px;
`,r.Ay.div`
  display: flex;
  align-items: center;
  height: 10vh;
  justify-content: space-between;
  width: 90%;
`,r.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,r.Ay.div``,r.Ay.div``;var le=o(17123);function se(e){let{setshowSidebar:t,showSidebar:o}=e;const{restaurantName:i}=(0,v.g)(),r=window.location.hostname.split(".")[0],n="menugic"!==r&&"localhost"!==r&&"www"!==r?r:i,a=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[n]})),l=(0,f.wA)(),s=e=>{l((0,le.y)({name:n,activeLanguage:e}))},d="ar"===(null===a||void 0===a?void 0:a.activeLanguage),c=null!==a&&void 0!==a&&a.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${a.logoURL}`:null,p=d?(null===a||void 0===a?void 0:a.ar_name)||(null===a||void 0===a?void 0:a.en_name)||"":(null===a||void 0===a?void 0:a.en_name)||"",u=d?(null===a||void 0===a?void 0:a.ar_branch_name)||(null===a||void 0===a?void 0:a.branch_name)||"":(null===a||void 0===a?void 0:a.branch_name)||"",x=p?p.split(" ").slice(0,2).map((e=>e[0])).join("").toUpperCase():"\ud83c\udf55";return(0,P.jsxs)(K,{isRtl:d,children:[(0,P.jsxs)(J,{isRtl:d,children:[(0,P.jsx)(Q,{onClick:()=>t(!o),"aria-label":d?"\u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u0627\u0646\u0628\u064a\u0629":"Open menu",children:(0,P.jsx)(Z,{})}),(0,P.jsx)(G,{children:c?(0,P.jsx)(ee,{src:c,alt:p}):(0,P.jsx)(te,{children:x})}),"en&ar"===(null===a||void 0===a?void 0:a.languages)?(0,P.jsxs)(ne,{children:[(0,P.jsx)(ae,{active:"en"===(null===a||void 0===a?void 0:a.activeLanguage),onClick:()=>s("en"),children:"EN"}),(0,P.jsx)(ae,{active:"ar"===(null===a||void 0===a?void 0:a.activeLanguage),onClick:()=>s("ar"),children:"AR"})]}):(0,P.jsx)("div",{style:{width:56}})]}),p&&(0,P.jsxs)(oe,{children:[(0,P.jsx)(ie,{children:p}),u?(0,P.jsx)(re,{children:u}):null]})]})}var de=o(92733);function ce(e){let{activeCategory:t,setactiveCategory:o,categories:i,setSearchText:r,searchText:n,setshowSidebar:a,showSidebar:l,carouselPosition:s,setcarouselPosition:d,popupHandler:y,showMenuSlider:b,sliderImages:w}=e;const{restaurantName:j}=(0,v.g)(),C=window.location.hostname.split(".")[0],$="menugic"!==C&&"localhost"!==C&&"www"!==C?C:j,A=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[$].activeLanguage}));return(0,P.jsxs)(c,{children:[(0,P.jsx)(se,{setshowSidebar:a,showSidebar:l}),b&&(0,P.jsx)(de.A,{images:w,activeLanguage:A||"en",variant:"theme2"}),(0,P.jsx)(Y,{categories:i,activeCategory:t,setactiveCategory:o,carouselPosition:s,setcarouselPosition:d}),(0,P.jsxs)(p,{children:[(0,P.jsxs)(u,{children:[(0,P.jsx)(h,{activeLanguage:A}),(0,P.jsx)(x,{id:"theme6-search-input",type:"text",activeLanguage:A,dir:"en"==A?"ltr":"rtl",placeholder:"en"==A?"Search Category":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{r(e.target.value)},value:n})]}),(0,P.jsxs)(g,{onClick:()=>{window.history.pushState({},""),y("share")},children:["en"==A&&(0,P.jsx)(m,{}),"en"==A?"Share":"\u0646\u0634\u0631","en"!==A&&(0,P.jsx)(m,{})]})]})]})}var pe=o(99891);const ue=r.i7`
  0%   { opacity: 0.3; transform: scale(0.9); }
  50%  { opacity: 1;   transform: scale(1.1); }
  100% { opacity: 0.3; transform: scale(0.9); }
`,xe=r.i7`
  0%   { opacity: 0.7; transform: scale(0.98); }
  50%  { opacity: 1;   transform: scale(1.05); }
  100% { opacity: 0.7; transform: scale(0.98); }
`,he=r.Ay.div`
  width: 100%;
  margin-top: 18px;
  padding-bottom: 12px;
  display: flex;
  justify-content: center;
`,ge=r.Ay.div`
  width: 95%;
  max-width: 700px;
  margin: 0 auto 12px;
  padding: 12px 16px;
  background: ${e=>e.theme.BoxColor||"#fff"};
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,me=r.Ay.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: ${e=>e.theme.BoxTextColor||e.theme.textColor};
  letter-spacing: -0.3px;
  line-height: 1.2;
`,fe=r.Ay.span`
  font-size: 12px;
  color: ${e=>e.theme.BoxTextColor||e.theme.textColor};
  opacity: 0.45;
  font-weight: 400;
`,ve=r.Ay.div`
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: ${e=>e.$noMinHeight?"0":"70vh"};
  opacity: 1;
  transition: all 0.7s ease-in-out;
`,ye=(r.Ay.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`,r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`,r.Ay.h3`
  margin: 0 auto;
  width: 95%;
  max-width: 600px;
  font-size: 17px;
  font-weight: 800;
  color: ${e=>e.theme.BoxTextColor||e.theme.textColor};
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  letter-spacing: -0.2px;
  padding: 10px 16px;
  border-radius: 14px;
  background: ${e=>e.theme.BoxColor||e.theme.popupbackgroundColor||e.theme.categoryUnActive};
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.07);
`,r.Ay.button`
  position: fixed;
  bottom: calc(80px + env(safe-area-inset-bottom, 0px));
  left: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 0;
  background: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.18);
  z-index: 200;
  animation: ${xe} 1.6s ease-in-out infinite;
`,r.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0 20px;
`,r.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${e=>e.theme.mainColor};
  font-size: 13px;
`,r.Ay.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.theme.mainColor};
  animation: ${ue} 0.8s ease-in-out infinite;
`,r.Ay.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`),be=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`,we=r.Ay.h3`
  margin: 0 auto;
  width: 95%;
  max-width: 600px;
  font-size: 19px;
  font-weight: 700;
  color: ${e=>e.theme.BoxTextColor};
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  letter-spacing: 0.3px;
  padding: 10px 14px;
  border-radius: 12px;
  background: ${e=>e.theme.BoxColor||e.theme.popupbackgroundColor||e.theme.categoryUnActive};
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.08);
`,je=(r.Ay.button`
  position: fixed;
  bottom: 25px;
  left: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 0;
  background: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.18);
  z-index: 60;
  animation: gotoPulse 1.6s ease-in-out infinite;

  @keyframes gotoPulse {
    0% {
      opacity: 0.7;
      transform: scale(0.98);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    100% {
      opacity: 0.7;
      transform: scale(0.98);
    }
  }
`,r.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0 20px;
`),Ce=r.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${e=>e.theme.mainColor};
  font-size: 13px;
`,$e=r.Ay.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.theme.mainColor};
  animation: pulse 0.8s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 0.3;
      transform: scale(0.9);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 0.3;
      transform: scale(0.9);
    }
  }
`,Ae=r.Ay.button`
  position: absolute;
  bottom: 8px;
  right: ${e=>"en"===e.activeLanguage?"8px":"auto"};
  left: ${e=>"en"===e.activeLanguage?"auto":"8px"};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${e=>e.disabled?.5:1};
  pointer-events: ${e=>e.disabled?"none":"auto"};
  z-index: 1;
  transition: transform 0.2s ease, opacity 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,ke=r.Ay.div`
  position: absolute;
  bottom: 8px;
  right: ${e=>"en"===e.activeLanguage?"8px":"auto"};
  left: ${e=>"en"===e.activeLanguage?"auto":"8px"};
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 999px;
  background: ${e=>e.theme.backgroundColor};
  color: ${e=>e.theme.mainColor};
  border: 0;
`,ze=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,Se=r.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  background-color: ${e=>e.theme.BoxColor||e.theme.popupbackgroundColor||"#fff"};
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  align-items: center;
  min-height: 100px;
`,Te=r.Ay.div`
  width: 80px;
  min-width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.categoryUnactive||"#f0f0f0"};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Le=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,_e=r.Ay.h4`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.BoxTextColor||e.theme.textColor||"#333"};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ie=r.Ay.div`
  font-size: 15px;
  font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#007bff"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${e=>"ar"===e.activeLanguage?"row-reverse":"row"};
`,Ee=r.Ay.span`
  font-size: 14px;
  color: ${e=>e.theme.BoxPriceColor||e.theme.textColor||"#666"};
  text-decoration: line-through;
  opacity: 0.6;
`,Ne=r.Ay.div`
  position: relative;
  width: 100%;
`,Pe=r.i7`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Fe=r.i7`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,Re=r.Ay.div`
  width: 50%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-top: 14px;
  animation: ${Fe} 0.3s ease both;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 33.333%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`,De=r.Ay.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${e=>e.theme.BoxColor};
  border-radius: 22px;
  position: relative;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.09);
  border: 1px solid ${e=>e.theme.categoryUnActive||"rgba(0,0,0,0.05)"};
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
  }
`,Ue=r.Ay.div`
  position: relative;
  width: 100%;
  height: 20vh;
  overflow: hidden;
  border-radius: 22px 22px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.categoryUnActive||"#f5f5f5"};

  @media (min-width: 768px) {
    height: 24vh;
  }
  @media (min-width: 1024px) {
    height: 28vh;
  }
`,Be=r.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  visibility: ${e=>e.imageLoaded?"visible":"hidden"};
  transition: transform 0.4s ease;

  ${De}:hover & {
    transform: scale(1.04);
  }
`,Oe=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: ${e=>"en"===e.activeLanuguage?"left":"right"};
  align-items: ${e=>"en"===e.activeLanuguage?"flex-start":"flex-end"};
  gap: 4px;
  padding: 10px 12px 12px;
  box-sizing: border-box;
  flex: 1;
`,qe=r.Ay.span`
  font-size: ${e=>e.fontSize||"14px"};
  font-weight: 700;
  color: ${e=>e.theme.BoxTextColor};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.35;
`,Me=r.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`,We=r.Ay.span`
  color: ${e=>e.discounted?e.theme.BoxTextColor||"#999":e.theme.BoxPriceColor};
  font-size: 13px;
  font-weight: ${e=>e.discounted?"400":"700"};
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  opacity: ${e=>e.discounted?"0.55":"1"};
`,Xe=r.Ay.span`
  color: ${e=>e.theme.BoxPriceColor};
  font-size: 14px;
  font-weight: 800;
`,Ve=r.Ay.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 4;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 9px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  border-radius: 999px;
  letter-spacing: 0.4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
`,Ye=r.Ay.div`
  border: 2.5px solid rgba(0, 0, 0, 0.08);
  border-left-color: ${e=>e.theme.mainColor||"#e53e3e"};
  border-radius: 50%;
  width: 22px;
  height: 22px;
  animation: ${Pe} 0.9s linear infinite;
`,He=r.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  inset: 0;
  z-index: 3;
  background-color: ${e=>e.theme.categoryUnActive||"#f0f0f0"};
  border-radius: 22px 22px 0 0;
`;var Ke=o(18907),Je=o(2200);const Qe=o(34304),Ze=i.forwardRef(((e,t)=>{var o,r,n,a;let{plate:l,setactivePlate:s,activePlate:d,index:c,showPopup:p,setSearchParams:u,searchParams:x,activeCategoryId:h,categories:g,disableDetails:m}=e;const{restaurantName:y}=(0,v.g)(),b=window.location.hostname.split(".")[0],w="menugic"!==b&&"localhost"!==b&&"www"!==b?b:y,j=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[w]})),[C,$]=((0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[w].activeLanguage})),(0,i.useState)(!1)),A=(0,Je.Q)(null===j||void 0===j?void 0:j.currency),k=g.find((e=>e.id==h));let z;z=0===parseFloat(k.discount)?parseFloat(l.discount):parseFloat(k.discount);const S=null!==(o=null===(r=l.images)||void 0===r?void 0:r.findIndex((e=>e.id===l.new_cover_id)))&&void 0!==o?o:-1,T=S>=0&&(null===(n=l.images)||void 0===n||null===(a=n[S])||void 0===a?void 0:a.url),L=null!==j&&void 0!==j&&j.logoURL?(0,N.V)(j.logoURL):null,_=T?(0,N.V)(l.images[S].url):L||"";return(0,P.jsx)(Re,{index:c,activePlate:d,className:"lazy-load",children:(0,P.jsxs)(De,{children:[!C&&(0,P.jsx)(He,{children:(0,P.jsx)(Ye,{})}),(0,P.jsxs)(Ue,{onClick:()=>{if(null==d&&C&&!p){m||s(c);const e=new URLSearchParams(x);e.set("productId",null===l||void 0===l?void 0:l.id),h&&e.set("categoryId",h),u(e),window.history.pushState({},"",`?${e.toString()}`),document.body.style.overflow="hidden"}},children:[l.new&&(0,P.jsx)(Ve,{children:"en"===(null===j||void 0===j?void 0:j.activeLanguage)?"NEW !":"! \u062c\u062f\u064a\u062f"}),(0,P.jsx)(Be,{ref:t,onLoad:()=>{$(!0)},src:_,imageLoaded:C})]}),(0,P.jsxs)(Oe,{activeLanuguage:null===j||void 0===j?void 0:j.activeLanguage,children:[(0,P.jsx)(qe,{fontSize:null===j||void 0===j?void 0:j.font_size,children:"en"===(null===j||void 0===j?void 0:j.activeLanguage)?l.en_name:l.ar_name}),!Qe.isEmpty(l.en_price)&&(0,P.jsxs)(Me,{children:[(0,P.jsx)(We,{discounted:0!=z,children:(0,Ke.T)(parseFloat(l.en_price),A)}),(0,P.jsx)(Xe,{children:0!=z&&(0,Ke.T)(parseFloat(l.en_price)*(1-parseFloat(z)/100),A)})]})]})]})})}));var Ge=o(10448),et=o(34304),tt=o.n(et);const ot=r.Ay.div`
  
position: fixed;
height: 100vh;
width: 100%;
align-items: center;
justify-content: center;
top:0;
right: ${e=>e.CloseAnimation?0:"-100%"};
color:${e=>e.theme.textColor};
background-color:${e=>e.theme.backgroundColor};
padding-bottom:150px;

  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.7s;
  animation: ${(e,t,o)=>r.i7`
 0% { 
    right: -100%;
    
}
 100% { 
    right: 0;

}
`} 0.5s;
  z-index: 6;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1024px) {
    /* animation: ${e=>{let{x:t,y:o,width:i}=e;return((e,t,o)=>r.i7`
 0% { 
    left: ${e}px;
    top:${t}px;
    width:${o}px;
    height:30vh;
    border-radius: 10px;
    
}
 100% { 
    left: 0;
    top:0;
    width:100%;
    height: 100vh;
    border-radius: 0px;

}
`)(t,o,i)}} 0.8s;
    height: ${e=>e.CloseAnimation?"100vh":"30vh"}; */

    }

`,it=r.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,rt=(r.i7`
 0% { 
    height:30vh;
    top:0px;
}

 100% { 
    height:70vh;
    top:80px;

    }
`,r.Ay.div`
  width: 100%;
  height: ${e=>e.isNormalCarousel?"auto":e.squareDimension?"55vh":"70vh"};
  min-height: ${e=>e.isNormalCarousel?e.squareDimension?"45vh":"60vh":"unset"};
  margin-top: ${e=>e.isNormalCarousel?"80px":"65px"};
  padding: ${e=>e.isNormalCarousel?"0 5%":"10px 0"};
  transition: all 0.8s;
  display: flex;
  flex-direction: ${e=>e.isNormalCarousel?"column":"row"};
  justify-content: center;
  align-items: center;
  overflow: visible;
  position: relative;
  @media (min-width: 1024px) {
    min-height: ${e=>e.isNormalCarousel?e.squareDimension?"50vh":"65vh":"unset"};
    margin-top: ${e=>e.isNormalCarousel?"90px":"65px"};
  }
`),nt=r.Ay.div`
  width: 85%;
  height: 100%;
  .swiper {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: none !important;
  }
`,at=r.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
`,lt=r.Ay.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  flex-shrink: 0;
`,st=r.Ay.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,dt=r.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,ct=r.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${dt} 1s linear infinite; /* Apply animation */
`,pt=r.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,ut=r.Ay.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${e=>e.$cardSlide?"0":e.CloseAnimation?"40px":"10px"};
  width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"90%":"100%"};
  display: ${e=>e.Loaded?"block":"none"};
  transition: all 0.8s;
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"50%":"100%"};
  }
`,xt=r.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,ht=(0,r.Ay)(Ge.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,gt=(0,r.Ay)(Ge.m6W)`
  font-size: 26px;
  padding: 8px;
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  color: ${e=>e.theme.backgroundColor||"#fff"};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  left: 4%;
  top: 45%;
  z-index: 20;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    left: 27%;
  }
`,mt=(0,r.Ay)(Ge.OQo)`
  font-size: 26px;
  padding: 8px;
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  color: ${e=>e.theme.backgroundColor||"#fff"};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 4%;
  top: 45%;
  z-index: 20;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    right: 27%;
  }
`,ft=r.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${xt} 0.4s ease-in-out;
`,vt=r.Ay.div`
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
`,yt=r.i7`
 0% { 
    margin-top: -50px;
    opacity: 0;
}
50%{
  margin-top: -50px;
    opacity: 0;
}
 100% { 
    margin-top: 0px;
    opacity: 1;

}
`,bt=r.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${yt} 1s ease-in-out;
`,wt=(r.Ay.div`
  width:90%;
  /* height: ${e=>e.CloseAnimation?"45vh":"25vh"}; */
  height: ${e=>e.squareDimension?"45vh":"60vh"};

  border-radius:40px;
  margin-top: 0px;
  display:flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${it} 0.4s;
  @media (min-width: 1024px) {
    height: 70vh;
    }
  /* background-color: red; */
`,r.i7`
 0% { 
  margin-left: -70px;
  opacity: 0;
}
50%{
  margin-left: -70px;
  opacity: 0;
}
100% { 
  margin-left: 0;
  opacity: 1;
}
`),jt=r.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ct=r.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${wt} 0.8s ease-in-out;

`,$t=r.Ay.div`
  width: 90%;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;
  flex-direction: column;
  /* align-items: center; */
  position: relative;
  margin-top: 20px;
  padding-bottom: 10vh;
  color: ${e=>e.theme.textColor};
  @media (min-width: 1024px) {
        width: 50%;
    }
    /* background-color: red; */
`,At=r.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:${e=>"en"==e.activeLanguage?"left":"right"} ;
  opacity: 1;
  margin-top: 5px;
`,kt=r.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,zt=r.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,St=r.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,Tt=r.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,Lt=r.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,_t=r.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,It=r.Ay.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${_t} 0.7s ease-in-out;
  background-color: ${e=>e.theme.backgroundColor};

  display: ${e=>e.CloseAnimation?"flex":"none"};
  box-shadow: 0px -3px 5px rgba(180, 180, 180, 0.1); /* Slight shadow on the top */
  padding-bottom: 10px;
  margin-top: 30px;
  @media (min-width: 1024px) {
        width: 50%;
    }
`,Et=r.Ay.button`
  outline: none;
  border: 0;
  cursor: pointer;
  position: relative;
    width: 90%;
    border-radius: 10px;
    height: 40px;
  color: ${e=>e.theme.popupbuttonText};
  font-weight: 400;
  background-color: ${e=>e.theme.mainColor};
  font-size: 12px;
`,Nt=r.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,Pt=r.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,Ft=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Rt=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Dt=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,Ut=r.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,Bt=r.Ay.div`
  display: flex;
 align-items: center;
 justify-content: center;
 height: 27px;
 width: 27px;
 border-radius: 50%;
 position: fixed;
  z-index: 8;
  top: 30px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};
  right: 30px;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${Ut} 0.4s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,Ot=r.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`,qt=r.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,Mt=r.Ay.input`
background-color: transparent;
border: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.8)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.8)`)):o}};
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
&:focus{
  outline: none;
}
&::placeholder{
  color:${e=>e.theme.formColor};
  opacity: 0.5;
}
font-size: 13px;
color:${e=>e.theme.formColor};
width: 100%;
padding: 10px;
border-radius: 10px;

`,Wt=r.Ay.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 25;
  background: rgba(0, 0, 0, 0.45);
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  backdrop-filter: blur(4px);
  transition: background 0.2s;
  &:active {
    background: rgba(0, 0, 0, 0.65);
  }
`,Xt=r.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
  user-select: none;
  -webkit-user-drag: none;
`,Vt=r.Ay.button`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 10000;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 26px;
  cursor: pointer;
  backdrop-filter: blur(4px);
`,Yt=r.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`;var Ht=o(86001),Kt=o(42751);const Jt=r.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display: flex;
`,Qt=r.Ay.div`
display: flex;
flex-direction: row;
`,Zt=r.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,Gt=r.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,eo=r.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,to=r.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,oo=r.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,io=r.Ay.span`
position: absolute;
left: 0;

`,ro=r.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,no=(0,r.Ay)(Kt.Z0P)`
    animation:1.2s ${ro}  linear infinite ;
    position: absolute;
`;function ao(e){let{carouselIndex:t,images:o,CloseAnimation:i,carouselSwiped:r}=e;return(0,P.jsxs)(Jt,{CloseAnimation:i,children:[(0,P.jsxs)(Qt,{children:[(0,P.jsx)(Zt,{carouselIndex:t,children:(0,P.jsx)(Gt,{})}),o.map((e=>(0,P.jsx)(eo,{children:(0,P.jsx)(to,{})})))]}),!r&&(0,P.jsxs)(oo,{children:[(0,P.jsx)(io,{children:"Swipe"}),(0,P.jsx)(no,{})]})]})}r.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,r.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const lo=r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,so=(r.Ay.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input[type="checkbox"] {
    margin-right: 8px;
    accent-color: ${e=>e.theme.mainColor}; /* Change this color to your desired checkbox color */
  }
`,r.Ay.select`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  color: ${e=>e.theme.backgroundColor};
  background-color: ${e=>e.theme.mainColor};
  &:active{
    outline: none;
    border: 0px;

  }
  `,r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,r.Ay.label`
  display: flex;
  align-items: center;
  input[type="radio"] {
    margin-right: 8px;
    accent-color:${e=>e.theme.mainColor}; /* Change this color to your desired radio button color */
  }
`,r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(tt().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`),co=r.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,po=r.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,uo=r.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let t=e.theme.formColor;if(tt().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.1)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.1)`)):t}};
  font-size:10px;

`,xo=r.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,ho=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${e=>e.theme.formColor};

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);var go=o(71481),mo=o(41235);function fo(e){let{component:t,formData:o,handleChange:r,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||[]);return(0,P.jsxs)(so,{index:n,children:[(0,P.jsx)(lo,{children:t.label}),t.values.map((e=>(0,P.jsxs)(po,{children:[s.some((t=>t===e.label))?(0,P.jsx)(xo,{onClick:()=>{(e=>{let o=s.filter((t=>t!==e.label));d(o),r(t.key,o)})(e)},children:(0,P.jsx)(mo.RXm,{size:"15px"})}):(0,P.jsx)(uo,{onClick:()=>{(e=>{d([...s,e.label]),r(t.key,[...s,e.label])})(e)},children:(0,P.jsx)(go.OiG,{})}),(0,P.jsx)(co,{children:e.label})]}))),(c=a,c in l?(0,P.jsx)(ho,{children:"This field is required"}):null)]});var c}const vo=r.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(tt().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,yo=r.Ay.div`
  padding: 7px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color:transparent;
  color:${e=>e.theme.formColor};
  width: 70%;
  border: 1px solid ${e=>e.theme.formColor};

font-size: 13px;
`,bo=r.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,wo=r.Ay.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  border-radius: 4px;
  overflow-y: auto;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${e=>e.isOpen?"200px":"0px"};
  transition: 0.2s all ease-in-out;
  background-color:${e=>e.theme.mainColor};
  color:${e=>e.theme.popupbuttonText};
  width: 70%;

`,jo=r.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,Co=r.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,$o=r.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,Ao=r.Ay.div`
  display: flex;
  justify-content: center;
  width: 90%;
  align-items: center;
  border-radius:30px;
  border: 1px solid ${e=>e.theme.mainColor};
  background-color: ${e=>e.selected?e.theme.mainColor:"transparent"};
  font-size: 12px;
  color: ${e=>e.selected?e.theme.popupbackgroundColor:e.theme.formColor};
  height: 40px;
  text-align: center;
  padding: 3px;
  margin-top: 10px;
`,ko=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${e=>e.theme.formColor};
  margin-bottom: 5px;
  font-size: 14px;

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 12px;
  font-size: 10px;

`);function zo(e){var t;let{component:o,formData:r,handleChange:n,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;console.log(s),console.log(d);const[c,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===(t=r[o.key])||void 0===t?void 0:t.value)||""),h=(0,i.useRef)(null),g=e=>{x(e.label),p(!1),n(o.key,e)},m=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,P.jsxs)(vo,{ref:h,index:l,children:[(0,P.jsx)(lo,{children:o.label}),o.data.values.length>8?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(yo,{onClick:()=>p((e=>!e)),children:[u||a,(0,P.jsx)(bo,{className:c?"up":"",children:"\u25bc"})]}),(0,P.jsx)(wo,{isOpen:c,children:o.data.values.map(((e,t)=>(0,P.jsx)(jo,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},t)))})]}):(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(Co,{children:o.data.values.map(((e,t)=>(0,P.jsx)($o,{children:(0,P.jsx)(Ao,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,P.jsx)(ko,{children:"This field is required"}):null)]});var f}const So=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(tt().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,To=r.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,Lo=r.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,_o=r.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,Io=r.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,Eo=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function No(e){let{component:t,formData:o,handleChange:r,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||"");return(0,P.jsxs)(So,{index:n,children:[(0,P.jsx)(lo,{children:t.label}),t.values.map((e=>(0,P.jsxs)(Lo,{children:[(0,P.jsx)(_o,{onClick:()=>{(e=>{d(e),r(t.key,e)})(e)},children:(0,P.jsx)(Io,{selected:s.label==e.label})}),(0,P.jsx)(To,{children:e.label})]}))),(c=a,c in l?(0,P.jsx)(Eo,{children:"This field is required"}):null)]});var c}function Po(e){let{formSchema:t,onPriceChange:o,basePrice:r,formData:n,setFormData:a,finalDiscount:l,formErrors:s}=e;(0,i.useEffect)((()=>{c(n)}),[n]);const d=(e,t)=>{a((o=>({...o,[e]:t})))},c=e=>{let i=parseFloat(r)||0,n=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const o=t.values.find((t=>t.label===e)),i=!isNaN(Number(o.value));o&&o.value&&i&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")&&(n-=parseFloat(o.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const o=t.data.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),r=!isNaN(Number(o.value));o&&r&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?n-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}else if("radio"===t.type&&t.values){const o=t.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),r=!isNaN(Number(o.value));o&&r&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?n-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}}));const a=i+n,l=a%1!==0?a.toFixed(2):a.toFixed(0);o(l)};return(0,P.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return console.log(e.key),(0,P.jsx)(fo,{component:e,formData:n,handleChange:d,index:t,componentKey:e.key,formErrors:s});case"select":return console.log(e.key),(0,P.jsx)(zo,{component:e,formData:n,handleChange:d,index:t,componentKey:e.key,formErrors:s});case"radio":return(0,P.jsx)(No,{component:e,formData:n,handleChange:d,index:t,componentKey:e.key,formErrors:s});default:return null}})(e,t)))})}var Fo=o(42770),Ro=o(73556),Do=(o(20965),o(16104)),Uo=o(88620),Bo=o(57526);o(44014),o(70045),o(5084);const Oo=o(34304);function qo(e){var t,o,r,n,a,l,s,c,p,u,x,h,g,m;let{activePlate:b,setactivePlate:w,menu:j,plates:C,productPositions:$,categories:A,activeCategoryId:k,setSearchParams:z,searchParams:S}=e;const{restaurantName:T}=(0,v.g)(),L=window.location.hostname.split(".")[0],_="menugic"!==L&&"localhost"!==L&&"www"!==L?L:T,I=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[_]})),E=A.find((e=>e.id==k)),{response:F}=(0,Do.$)({productId:null===(t=C[b])||void 0===t?void 0:t.id});(0,i.useEffect)((()=>{var e;let t=null;var o,i;Oo.isEmpty(null===(e=C[b])||void 0===e?void 0:e.form_json)||(t=Oo.isEmpty(JSON.parse(null===(o=C[b])||void 0===o?void 0:o.form_json))?null===E||void 0===E?void 0:E.form_json:null===(i=C[b])||void 0===i?void 0:i.form_json);if(Oo.isEmpty(t))D({});else{var r;const e=JSON.parse(t);if(D(e),2===(null===e||void 0===e?void 0:e.version)&&(null===e||void 0===e||null===(r=e.sizes)||void 0===r?void 0:r.length)>0){var n;const t=parseFloat(null===(n=C[b])||void 0===n?void 0:n.en_price)||0,o=e.sizes.find((e=>"absolute"===e.priceMode&&Number(e.priceModifier)===t));B((()=>({...(0,Ro.KE)(),sizeId:o?o.id:e.sizes[0].id})))}}}),[I.activeLanguage]);const[R,D]=(0,i.useState)({}),[U,B]=(0,i.useState)({}),[O,q]=(0,i.useState)({}),M=(0,f.wA)(),[W,X]=(0,i.useState)(1),[V,Y]=(0,i.useState)(!1),H=(0,i.useRef)(null),[K,J]=(0,i.useState)(!1),[Q,Z]=(0,i.useState)(1),[G,ee]=(0,i.useState)({x:0,y:0}),[te,oe]=(0,i.useState)(!1),ie=(0,i.useRef)(null),re=(0,i.useRef)(null),ne=(0,i.useRef)(0);let ae;ae=0===parseFloat(E.discount)?parseFloat(C[b].discount):parseFloat(E.discount);const le=(null===(o=C[b])||void 0===o?void 0:o.en_price)||"0",se=le.includes(".")?parseFloat(le).toFixed(2):parseFloat(le).toFixed(0),[de,ce]=(0,i.useState)(se),[pe,ue]=(0,i.useState)(""),xe=e=>{ce(e)},[he,ge]=(0,i.useState)(!0),[me,fe]=(0,i.useState)(0),ve=()=>{setTimeout((()=>{w(null),document.body.style.overflow="auto"}),700),ge(!1),S.delete("productId"),z(S)},[ye,be]=(0,i.useState)(!1),we=()=>{Y(!0),fe(me+1)},je=()=>{Y(!0),fe(me-1)},Ce=(0,i.useRef)(null),[$e,Ae]=(0,i.useState)(null),ke=()=>{Z(1),ee({x:0,y:0}),J(!0)};(0,i.useEffect)((()=>{const e=()=>{ve()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const ze=2===(null===R||void 0===R?void 0:R.version)&&Array.isArray(null===R||void 0===R?void 0:R.sizes);const Se=null!==I&&void 0!==I&&I.logoURL?(0,N.V)(I.logoURL):null;let Te=[...null!==(r=null===(n=C[b])||void 0===n?void 0:n.images)&&void 0!==r?r:[]];0===Te.length&&Se&&(Te=[{id:"fallback-logo",url:I.logoURL,isFallback:!0}]);const Le=Te.findIndex((e=>{var t;return e.id===(null===(t=C[b])||void 0===t?void 0:t.new_cover_id)}));if(Le>0){const[e]=Te.splice(Le,1);Te.unshift(e)}const[_e,Ie]=(0,i.useState)({}),Ee=e=>{Ie((t=>({...t,[e]:!0})))},Ne="en"===(null===I||void 0===I?void 0:I.activeLanguage)?null===(a=C[b])||void 0===a?void 0:a.en_description:null===(l=C[b])||void 0===l?void 0:l.ar_description,Pe=(0,Je.Q)(null===I||void 0===I?void 0:I.currency);let Fe=JSON.parse(I.features);const Re=Boolean(null===(s=C[b])||void 0===s?void 0:s.out_of_stock)||1===Number(null===(c=C[b])||void 0===c?void 0:c.out_of_stock),De=(null===I||void 0===I?void 0:I.product_details_carousel_style)||"normal";return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(ot,{CloseAnimation:he,children:[(0,P.jsx)(vt,{CloseAnimation:he,children:(0,P.jsx)(bt,{children:"en"==I.activeLanguage?null===j||void 0===j?void 0:j.en_category:null===j||void 0===j?void 0:j.ar_category})}),(0,P.jsx)(rt,{squareDimension:null===(p=C[b])||void 0===p?void 0:p.square_dimension,CloseAnimation:he,isNormalCarousel:"normal"===De,children:1===Te.length?(0,P.jsx)(at,{carouselIndex:0,children:(0,P.jsx)(lt,{children:(0,P.jsxs)(st,{children:[!_e[0]&&(0,P.jsx)(pt,{children:(0,P.jsx)(ct,{})}),(0,P.jsx)(ut,{src:Te[0].url?(0,N.V)(Te[0].url):Se||"",onLoad:()=>Ee(0),onError:e=>{Se&&e.target.src!==Se&&(e.target.src=Se)},CloseAnimation:he,Loaded:_e[0],alt:"Image 0"}),(0,P.jsx)(Wt,{onClick:ke,children:(0,P.jsx)(y.gff,{})})]})})}):"normal"===De?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(gt,{CloseAnimation:he,onClick:()=>{Y(!0),0!==me&&je()}}),(0,P.jsx)(mt,{CloseAnimation:he,onClick:()=>{Y(!0),Te.length>me+1&&we()}}),(0,P.jsx)(at,{carouselIndex:me,ref:Ce,onTouchStart:e=>{Ae(e.touches[0].clientX)},onTouchMove:e=>{if($e){const t=e.touches[0].clientX-$e;t>5?0!==me&&je():t<-5&&Te.length>me+1&&we(),Ae(null)}},children:Te.map(((e,t)=>(0,P.jsx)(lt,{children:(0,P.jsxs)(st,{children:[!_e[t]&&(0,P.jsx)(pt,{children:(0,P.jsx)(ct,{})}),(0,P.jsx)(ut,{src:_e[t]||t===me?e.url?(0,N.V)(e.url):Se||"":"",onLoad:()=>Ee(t),onError:e=>{Se&&e.target.src!==Se&&(e.target.src=Se)},CloseAnimation:he,Loaded:_e[t],alt:`Image ${t}`}),me===t&&(0,P.jsx)(Wt,{onClick:ke,children:(0,P.jsx)(y.gff,{})})]})},e.id||t)))})]}):"effect-cards"===De?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(gt,{CloseAnimation:he,onClick:()=>H.current&&H.current.slidePrev()}),(0,P.jsx)(nt,{children:(0,P.jsx)(Uo.RC,{modules:[Bo.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{H.current=e},onSlideChange:e=>{fe(e.realIndex),Y(!0)},children:Te.map(((e,t)=>(0,P.jsx)(Uo.qr,{children:(0,P.jsxs)(st,{children:[!_e[t]&&(0,P.jsx)(pt,{children:(0,P.jsx)(ct,{})}),(0,P.jsx)(ut,{src:_e[t]||t===me?e.url?(0,N.V)(e.url):Se||"":"",onLoad:()=>Ee(t),onError:e=>{Se&&e.target.src!==Se&&(e.target.src=Se)},CloseAnimation:he,Loaded:_e[t],$cardSlide:!0,alt:`Image ${t}`}),me===t&&(0,P.jsx)(Wt,{onClick:ke,children:(0,P.jsx)(y.gff,{})})]})},e.id||t)))},null===(u=C[b])||void 0===u?void 0:u.id)}),(0,P.jsx)(mt,{CloseAnimation:he,onClick:()=>H.current&&H.current.slideNext()})]}):(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(nt,{children:(0,P.jsx)(Uo.RC,{onSwiper:e=>{H.current=e},onSlideChange:e=>{fe(e.realIndex),Y(!0)},modules:[Bo.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:Te.map(((e,t)=>(0,P.jsx)(Uo.qr,{children:(0,P.jsxs)(st,{children:[!_e[t]&&(0,P.jsx)(pt,{children:(0,P.jsx)(ct,{})}),(0,P.jsx)(ut,{src:_e[t]||t===me?e.url?(0,N.V)(e.url):Se||"":"",onLoad:()=>Ee(t),onError:e=>{Se&&e.target.src!==Se&&(e.target.src=Se)},CloseAnimation:he,Loaded:_e[t],$cardSlide:!0,alt:`Image ${t}`}),me===t&&(0,P.jsx)(Wt,{onClick:ke,children:(0,P.jsx)(y.gff,{})})]})},e.id||t)))},null===(x=C[b])||void 0===x?void 0:x.id)})})}),1!==Te.length&&(0,P.jsx)(ao,{images:Te,carouselIndex:me,CloseAnimation:he,carouselSwiped:V}),(0,P.jsx)(jt,{children:(0,P.jsx)(Ct,{children:(0,P.jsxs)($t,{CloseAnimation:he,activeLanguage:I.activeLanguage,children:[(0,P.jsx)(At,{activeLanguage:I.activeLanguage,children:"en"==I.activeLanguage?null===(h=C[b])||void 0===h?void 0:h.en_name:null===(g=C[b])||void 0===g?void 0:g.ar_name}),!Oo.isEmpty(null===(m=C[b])||void 0===m?void 0:m.en_price)&&(0,P.jsxs)(St,{children:[(0,P.jsx)(Tt,{activeLanguage:I.activeLanguage,discounted:0!=ae,children:(0,Ke.T)(de,Pe)}),0!=ae&&(0,P.jsx)(Lt,{activeLanguage:I.activeLanguage,children:(0,Ke.T)(de*(1-parseFloat(ae)/100),Pe)})]}),!Oo.isEmpty(Ne)&&(0,P.jsx)(kt,{activeLanguage:I.activeLanguage,dangerouslySetInnerHTML:{__html:Ne}}),Re&&(0,P.jsx)(zt,{children:"en"===I.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),ze&&(0,P.jsx)(Fo.A,{options:R,formData:U,setFormData:B,formErrors:O,activeLanguage:I.activeLanguage,basePrice:se,onPriceChange:xe}),!ze&&(null===R||void 0===R?void 0:R.components)&&(0,P.jsx)(Po,{formSchema:R,onPriceChange:xe,formData:U,setFormData:B,basePrice:se,formErrors:O}),(0,P.jsxs)(Ot,{activeLanguage:I.activeLanguage,children:[(0,P.jsx)(qt,{children:"en"==I.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,P.jsx)(Mt,{activeLanguage:I.activeLanguage,onChange:e=>ue(e.target.value),placeholder:"en"==I.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(null===Fe||void 0===Fe?void 0:Fe.cart)&&!Re&&(0,P.jsxs)(It,{CloseAnimation:he,children:[(0,P.jsxs)(Pt,{CloseAnimation:he,children:[(0,P.jsx)(Ft,{onClick:()=>{X(W+1)},children:"+"}),(0,P.jsx)(Dt,{children:W}),(0,P.jsx)(Rt,{onClick:()=>{W>1&&X(W-1)},children:"-"})]}),(0,P.jsxs)(Et,{onClick:()=>{if(ze){var e;const t={};if((null===(e=R.sizes)||void 0===e?void 0:e.length)>0&&(null===U||void 0===U||!U.sizeId)&&(t.size="Please select a size."),Object.keys(t).length>0)return void q(t)}else if("{}"!==JSON.stringify(R)){const e=function(e,t){const o={},i=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in t&&0!==(null===(i=t[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(t[e])||(o[e]="This field is required.")})),o}(R,U);if(Object.keys(e).length>0)return void q(e)}let t=de*(1-parseFloat(ae)/100);setTimeout((()=>{w(null),document.body.style.overflow="auto"}),800),M((0,Ht.bE)(_,C[b],W,U,t,pe)),ge(!1),X(1),q({})},children:["en"==I.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",(0,P.jsx)(Nt,{children:(0,Ke.T)(W*(de*(1-parseFloat(ae)/100)),Pe)})]})]})]}),(0,P.jsx)(ft,{onClick:ve,CloseAnimation:he,children:(0,P.jsx)(ht,{})}),(0,P.jsx)(Bt,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),be(!0),setTimeout((()=>{be(!1)}),4e3)},CloseAnimation:he,children:ye?(0,P.jsx)(mo.RXm,{}):(0,P.jsx)(go.zU_,{})}),K&&(0,P.jsxs)(Xt,{onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY;re.current=Math.hypot(t,o)}else if(1===e.touches.length){const t=Date.now();t-ne.current<300&&(Z((e=>e>1?1:2.5)),ee({x:0,y:0})),ne.current=t,ie.current={x:e.touches[0].clientX,y:e.touches[0].clientY},oe(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(t,o);if(re.current){const e=i/re.current;Z((t=>Math.min(Math.max(t*e,1),5)))}re.current=i}else if(1===e.touches.length&&te&&Q>1){const t=e.touches[0].clientX-ie.current.x,o=e.touches[0].clientY-ie.current.y;ee((e=>({x:e.x+t,y:e.y+o}))),ie.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{re.current=null,oe(!1)},children:[(0,P.jsx)(Vt,{onClick:()=>J(!1),children:(0,P.jsx)(d.$8F,{})}),(0,P.jsx)(Yt,{src:(()=>{const e=Te[me];return e?e.url?(0,N.V)(e.url):Se||"":""})(),style:{transform:`scale(${Q}) translate(${G.x/Q}px, ${G.y/Q}px)`},alt:"Zoom"})]})]})}var Mo=o(9328),Wo=o(32415),Xo=o(73422);const Vo=o(34304);function Yo(e){var t,o,r;let{menu:n,activeCategory:a,showPopup:l,searchText:s,carouselPosition:d,setcarouselPosition:c,setactiveCategory:p,categories:u}=e;const[x,h]=(0,i.useState)(null),[g,m]=(0,pe.ok)(),{restaurantName:y}=(0,v.g)(),b=window.location.hostname.split(".")[0],w="menugic"!==b&&"localhost"!==b&&"www"!==b?b:y,j=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[w].activeLanguage})),C=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[w]})),$=(0,f.wA)(),[A,k]=(0,i.useState)([]),[z,S]=(0,i.useState)([]),T=(0,i.useRef)(),L=(0,i.useRef)(),_="all-items"===a,I=(null===C||void 0===C?void 0:C.all_items_style)||"grid",E=a&&!_?String(a):null,{data:F,fetchNextPage:R,hasNextPage:D,isFetchingNextPage:U}=(0,Mo.w)(E),{data:B,fetchNextPage:O,hasNextPage:q,isFetchingNextPage:M}=(0,Wo.u)(_?null===C||void 0===C?void 0:C.id:null),W=(null===B||void 0===B||null===(t=B.pages)||void 0===t?void 0:t.flat())||[],X=()=>{const e=null===z||void 0===z?void 0:z.map((e=>{if(e.current){var t;const o=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return{x:o.left,y:o.top,width:o.width}}return null}));k(e)};(0,i.useEffect)((()=>{g.get("productId")&&h(null)}),[g]),(0,i.useEffect)((()=>{X()}),[z]),(0,i.useEffect)((()=>{var e;if(n&&null!==a&&(null===F||void 0===F||null===(e=F.pages)||void 0===e?void 0:e.flat().length)>0){var t,o;const e=null===F||void 0===F||null===(t=F.pages)||void 0===t||null===(o=t.flat())||void 0===o?void 0:o.filter((e=>e["en"===j?"en_name":"ar_name"].toLowerCase().includes(s.toLowerCase()))).map((()=>i.createRef()));S(e)}}),[n,a,s,F]),(0,i.useEffect)((()=>{const e=()=>{X()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[z]),(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&D&&!U&&R()}),{threshold:.1});return T.current&&e.observe(T.current),()=>{T.current&&e.unobserve(T.current)}}),[D,U,R]),(0,i.useEffect)((()=>{if(!_)return;const e=new IntersectionObserver((e=>{e[0].isIntersecting&&q&&!M&&O()}),{threshold:.2});return L.current&&e.observe(L.current),()=>{L.current&&e.unobserve(L.current)}}),[O,q,_,M]);const V=(null===F||void 0===F||null===(o=F.pages)||void 0===o||null===(r=o.flat())||void 0===r?void 0:r.filter((e=>!(Boolean(null===e||void 0===e?void 0:e.hide)||1===Number(null===e||void 0===e?void 0:e.hide))&&e["en"===j?"en_name":"ar_name"].toLowerCase().includes(s.toLowerCase()))))||[],Y=i.useMemo((()=>{if(!_)return[];return(u||[]).filter((e=>!e.isAllItems)).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))).map((e=>{const t=W.filter((t=>{if(Boolean(null===t||void 0===t?void 0:t.hide)||1===Number(null===t||void 0===t?void 0:t.hide))return!1;if(t.category_id!=e.id)return!1;const o=t["en"===j?"en_name":"ar_name"]||"";return!s||function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase().includes(s.toLowerCase())}(o)})).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0)));return{category:e,items:t}})).filter((e=>e.items.length>0))}),[j,W,u,_,s]);console.log(V);const[H,K]=(0,i.useState)(d),[J,Q]=(0,i.useState)(!1),[Z,G]=(0,i.useState)(u.length<4?3:4);(0,i.useRef)(0),(0,i.useRef)(0);return(0,i.useEffect)((()=>{K(u.findIndex((e=>e.id==a)))}),[a]),(0,i.useEffect)((()=>{_&&h(null)}),[_]),(0,P.jsx)(he,{activeCategory:a,children:_?(0,P.jsxs)(ye,{children:[Y.map((e=>(0,P.jsxs)(be,{children:[(0,P.jsx)(we,{activeLanguage:j,children:"en"===j?e.category.en_category:e.category.ar_category}),"list"===I?(0,P.jsx)(ze,{children:e.items.map(((e,t)=>{var o,i,r,n;const a=u.find((t=>t.id==e.category_id));let l;l=a&&0!==parseFloat(a.discount||0)?parseFloat(a.discount||0):parseFloat(e.discount||0);const s=0!==l?parseFloat(e.en_price)*(1-parseFloat(l)/100):parseFloat(e.en_price),d=(0,Je.Q)(null===C||void 0===C?void 0:C.currency),c=null!==(o=null===(i=e.images)||void 0===i?void 0:i.findIndex((t=>t.id==e.new_cover_id)))&&void 0!==o?o:0,p=null===(r=e.images)||void 0===r||null===(n=r[c])||void 0===n?void 0:n.url,x=JSON.parse((null===C||void 0===C?void 0:C.features)||"{}"),h=Boolean(null===e||void 0===e?void 0:e.out_of_stock)||1===Number(null===e||void 0===e?void 0:e.out_of_stock),f=!Vo.isEmpty(null===e||void 0===e?void 0:e.form_json)&&!Vo.isEmpty(JSON.parse((null===e||void 0===e?void 0:e.form_json)||"{}")),v=!Vo.isEmpty(null===a||void 0===a?void 0:a.form_json)&&!Vo.isEmpty(JSON.parse((null===a||void 0===a?void 0:a.form_json)||"{}")),y=f||v,b=t=>{if(t.preventDefault(),t.stopPropagation(),null===x||void 0===x||!x.cart||h)return;if(y){const t=new URLSearchParams(g);return t.set("productId",e.id),t.set("categoryId","all-items"),m(t),window.history.pushState({},"",`?${t.toString()}`),void(document.body.style.overflow="hidden")}const o=parseFloat((null===e||void 0===e?void 0:e.en_price)||"0")*(1-parseFloat(l)/100);$((0,Ht.bE)(w,e,1,{},o,"")),Xo.oR.success("en"===j?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629")};return(0,P.jsxs)(Ne,{children:[(0,P.jsxs)(Se,{onClick:()=>{const t=new URLSearchParams(g);t.set("productId",e.id),t.set("categoryId","all-items"),m(t),window.history.pushState({},"",`?${t.toString()}`),document.body.style.overflow="hidden"},style:{cursor:"pointer"},children:[(0,P.jsx)(Te,{children:p&&(0,P.jsx)("img",{src:(0,N.V)(p),alt:"en"===j?e.en_name:e.ar_name})}),(0,P.jsxs)(Le,{activeLanguage:j,children:[(0,P.jsx)(_e,{children:"en"===j?e.en_name:e.ar_name}),e.en_price&&(0,P.jsxs)(Ie,{activeLanguage:j,children:[0!==l&&(0,P.jsx)(Ee,{children:(0,Ke.T)(parseFloat(e.en_price),d)}),(0,P.jsx)("span",{children:(0,Ke.T)(s,d)})]})]})]}),(null===x||void 0===x?void 0:x.cart)&&(h?(0,P.jsx)(ke,{activeLanguage:j,children:"en"===j?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,P.jsx)(Ae,{type:"button",onClick:b,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),b(e)},activeLanguage:j,title:"en"===j?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,P.jsx)(go._xK,{size:12})}))]},e.id)}))}):(0,P.jsx)(ve,{$noMinHeight:!0,children:e.items.map(((t,o)=>(0,P.jsx)(Ze,{index:o,plate:t,activePlate:null,setactivePlate:h,showPopup:l,setSearchParams:m,searchParams:g,activeCategoryId:e.category.id,categories:u,disableDetails:!1},t.id)))})]},e.category.id))),q&&(0,P.jsx)("div",{ref:L,style:{height:"40px"}}),M&&(0,P.jsx)(je,{children:(0,P.jsxs)(Ce,{children:[(0,P.jsx)($e,{}),"en"===j?"Loading more...":"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f..."]})})]}):(0,P.jsxs)(P.Fragment,{children:[(()=>{const e=null===u||void 0===u?void 0:u.find((e=>e.id==a)),t=e?"ar"===j?e.ar_category:e.en_category:null;return t?(0,P.jsxs)(ge,{activeLanguage:j,children:[(0,P.jsx)(me,{children:t}),(0,P.jsx)(fe,{children:"ar"===j?"\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0623\u064a \u0635\u0646\u0641 \u0644\u0644\u062a\u062e\u0635\u064a\u0635":"Tap any item to customize"})]}):null})(),(0,P.jsxs)(ve,{activePlate:x,children:[null===n||void 0===n?void 0:n.map(((e,t)=>{if(a==e.id)return(0,P.jsx)(P.Fragment,{children:V.map(((e,t)=>(0,P.jsx)(Ze,{index:t,plate:e,activePlate:x,setactivePlate:h,ref:z[t],showPopup:l,setSearchParams:m,searchParams:g,activeCategoryId:a,categories:u})))})})),(0,P.jsx)("div",{ref:T,style:{height:"20px"}})]}),null!==x&&!g.get("productId")&&(0,P.jsx)(qo,{menu:null===n||void 0===n?void 0:n.find((e=>e.id===a)),activePlate:x,setactivePlate:h,plates:V,productPositions:A,activeCategoryId:a,categories:u,setSearchParams:m,searchParams:g})]})})}var Ho=o(76143);const Ko=r.Ay.div`
position: fixed;
bottom: ${e=>"location"==e.showPopup?"0%":"-100%"};
background-color: ${e=>e.theme.popupbackgroundColor};
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 5;
padding-bottom: 10vh;
`,Jo=(r.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`,r.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`),Qo=r.Ay.span`
width: 90%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 10vh;
`,Zo=r.Ay.div`
  margin-top: 30px;
width: 90%;
  display: flex;
  flex-direction: column;
`,Go=(r.Ay.div`
display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
  

`,r.Ay.a`
font-size:16px;
 font-weight: 620;
 color:${e=>e.theme.popupTextColor}

`,r.Ay.a`
font-size:16px;
 font-weight: 620;
 color:${e=>e.theme.popupTextColor};
 text-decoration: none;


`,(0,r.Ay)(Kt.meu)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}
`,(0,r.Ay)(Ge.IW4)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,r.Ay)(y.gwi)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,r.Ay)(Ge.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`),ei=r.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
font-weight: bold;

`,ti=r.Ay.div`
width: 90%;
margin-top: 10px;

`,oi=r.Ay.div`
margin-top: 10px;
display: flex;
flex-direction: row;
width: 90%;
align-items: center;
gap:10px;
`,ii=r.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,ri=(r.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;

`,r.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`),ni=r.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,ai=(0,r.Ay)(go.ok6)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};
`,li=((0,r.Ay)(Ge._8j)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};


`,(0,r.Ay)(go.ao$)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`),si=(0,r.Ay)(Ho.mk3)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`,di=r.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,ci=r.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,pi=(0,r.Ay)(y.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`,ui=r.Ay.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 90%;
height: 50px;
gap:25px;
margin-top: 30px;
`,xi=r.Ay.button`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
background-color:${e=>e.theme.mainColor} ;
width:${e=>"Call"==e.activeButton?"80%":"50%"};
height: 100%;
border:0;
color: ${e=>e.theme.popupbackgroundColor};
border-radius: 10px;
font-size: 18px;
gap:15px;
position: relative;
&:focus{
  outline: none;
}
/* overflow: hidden; */
transition: all 0.2s ease-in-out;
`,hi=r.i7`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,gi=r.Ay.div`
position: absolute;
width:10%;
height: 50%;
background-color:${e=>"Call"==e.activeButton?e.theme.mainColor:e.theme.popupbackgroundColor} ;
 left: 0;
 z-index: 5;

 `,mi=r.Ay.div`
position: absolute;
width:1px;
height: 100%;
background-color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 right: 0;
 animation: ${hi} 0.5s ease-in-out infinite; /* Infinite animation */

 `,fi=r.i7`
  0% {
opacity: 0;
left: -10%;
  }
  100% {
opacity: 1;
left: 16%;

  }

`,vi=r.Ay.span`
position: absolute;
 left: 16%;
 color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 animation: ${fi} 0.5s ease-in-out;
 z-index: 4;

 `,yi=r.i7`
  0% {
    opacity: 0;
    rotate: calc(180deg);
  }
  1000% {
    opacity: 1;
    rotate: calc(0deg);

  }
 
`,bi=(0,r.Ay)(Ge.pte)`
color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
font-size: 15px;
position: absolute;
right: 5%;
animation: ${yi} 0.7s ease-in-out;

`,wi=r.i7`
  0% {
    max-height: 0px;
  }
  1000% {
    max-height: 300px;


  }
 
`,ji=r.Ay.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  border-radius: 4px;
  /* overflow-y: auto; */
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 300px;
  background-color:${e=>e.theme.mainColor} ;
  color:${e=>e.theme.popupbackgroundColor};
  width: 100%;
  animation: ${wi} 1s ease-in-out;
  overflow: hidden;

`,Ci=r.Ay.li`
  cursor: pointer;
  transition: background 0.2s;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;

`,$i=r.Ay.button`
display: flex;
justify-content: center;
flex-direction: row;
gap:15px;
align-items: center;
flex-direction: row;
background-color:transparent ;
width:${e=>"Message"==e.activeButton?"80%":"50%"};
height: 100%;
border:1px solid ${e=>e.theme.mainColor} ;
color: ${e=>e.theme.popupTextColor};
border-radius: 10px;
font-size: 18px;
&:focus{
  outline: none;
};
position: relative;
`,Ai=r.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 18px;
font-weight: bold;

`,ki=r.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`,zi=r.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
`,Si=r.Ay.div`
  display: flex;
  flex-direction: row;
  width: 15px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${e=>e.theme.mainColor};
`,Ti=(r.Ay.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${e=>e.theme.mainColor};
`,r.Ay.div`
  width: 5px;
  height: 5px;
  position: absolute;
  border-radius: 50%;
  background-color: ${e=>e.theme.popupbackgroundColor};
`,r.Ay.a`
 font-size:15px;
 font-weight: 300;
 flex: 1;
 color: ${e=>e.theme.popupTextColor};
 display: flex;
 align-items: center;
 margin-left: 20px;
 height: 100%;

 `),Li=r.Ay.div`
 width: 15px;
 height: 45px;
 top: 25px;
 position: absolute;
 left: 0;
 display: flex;
 justify-content: center;
 `,_i=r.Ay.div`
 width: 2px;
 height: 100%;
 background-color: ${e=>e.theme.popupTextColor};
 opacity: 0.5;
 `;var Ii=o(72599),Ei=o(67059);function Ni(e){var t,o,r,n;let{restaurant:a,showPopup:l,popupHandler:s}=e;const{restaurantName:d}=(0,v.g)(),c=window.location.hostname.split(".")[0],p="menugic"!==c&&"localhost"!==c&&"www"!==c?c:d,u=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[p].activeLanguage})),[x,h]=(0,i.useState)("");return(0,i.useEffect)((()=>{const e=()=>{s(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,P.jsxs)(Ko,{showPopup:l,children:[(0,P.jsx)(Go,{onClick:()=>{s(null)}}),(0,P.jsx)(Qo,{children:(0,P.jsx)(Jo,{children:(g=null===a||void 0===a?void 0:a.name,g.replace(/\b\w/g,(function(e){return e.toUpperCase()})))})}),(0,P.jsxs)(ui,{children:[(0,P.jsx)(xi,{activeButton:x,onClick:()=>{h("Call"==x?"":"Call")},children:"Call"!==x?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Ii._Xz,{size:"25px"}),"en"==u?"Call Now":"\u0627\u062a\u0635\u0644 \u0627\u0644\u0627\u0646"]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ji,{activeButton:x,children:null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.flatMap((e=>e.phone_number.split(" ").map(((t,o)=>(0,P.jsx)(Ci,{children:(0,P.jsxs)("a",{href:`tel:${t}`,style:{textDecoration:"none",color:"inherit"},children:[t,"  ",e.location&&(0,P.jsxs)("span",{children:["- ",e.name," "]})]})})))))}),(0,P.jsx)(gi,{activeButton:x,children:(0,P.jsx)(mi,{activeButton:x})}),(0,P.jsx)(vi,{activeButton:x,children:"en"==u?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,P.jsx)(bi,{activeButton:x})]})}),(0,P.jsx)($i,{activeButton:x,onClick:()=>{h("Message"==x?"":"Message")},children:"Message"!==x?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(go.EcP,{size:"25px"}),"en"==u?"Message":"\u0631\u0633\u0627\u0644\u0629","            "]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ji,{activeButton:x,children:null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.map((e=>(0,P.jsx)(Ci,{children:(0,P.jsxs)("a",{href:`https://wa.me/${(0,Ei.JW)(null===e||void 0===e?void 0:e.whatsapp_number,null===a||void 0===a?void 0:a.country_code)}`,style:{textDecoration:"none",color:"inherit"},children:[null===e||void 0===e?void 0:e.whatsapp_number,"-",null===e||void 0===e?void 0:e.name]})})))}),(0,P.jsx)(gi,{activeButton:x,children:(0,P.jsx)(mi,{activeButton:x})}),(0,P.jsx)(vi,{activeButton:x,children:"en"==u?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,P.jsx)(bi,{activeButton:x})]})})]}),(0,P.jsxs)(Zo,{children:[(null===a||void 0===a||null===(r=a.branches)||void 0===r?void 0:r.name)&&(0,P.jsx)(Ai,{children:"Branches"}),(0,P.jsx)(ki,{children:null===a||void 0===a||null===(n=a.branches)||void 0===n?void 0:n.map(((e,t)=>{var o;return e.name&&(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(zi,{children:[t!==(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.length)-1&&(0,P.jsx)(Li,{index:t,children:(0,P.jsx)(_i,{})}),(0,P.jsx)(Si,{children:(0,P.jsx)(Kt.sIY,{})}),(0,P.jsx)(Ti,{href:`https://${null===e||void 0===e?void 0:e.mapLink}`,children:e.location})]})})}))})]}),(0,P.jsx)(ti,{children:(0,P.jsx)(ei,{children:"en"==u?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"})}),(0,P.jsxs)(oi,{children:[a.socialMedia.find((e=>"Instagram"==e.platform))&&(0,P.jsx)(ii,{href:`https://${a.socialMedia.find((e=>"Instagram"==e.platform)).link}`,children:(0,P.jsx)(li,{})}),a.socialMedia.find((e=>"Facebook"==e.platform))&&(0,P.jsx)(ni,{href:`https://${a.socialMedia.find((e=>"Facebook"==e.platform)).link}`,children:(0,P.jsx)(ai,{})}),a.socialMedia.find((e=>"Tiktok"==e.platform))&&(0,P.jsx)(ri,{href:`https://${a.socialMedia.find((e=>"Tiktok"==e.platform)).link}`,children:(0,P.jsx)(si,{})})]}),(0,P.jsxs)(di,{children:["Copyright",(0,P.jsx)(pi,{})," ",(new Date).getFullYear()," "," ",(0,P.jsx)(ci,{href:"https://www.menugic.com",children:"menugic.com"})]})]});var g}const Pi=r.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 55vh;
  max-height: 92vh;
  overflow-y: auto;
  background-color: ${e=>e.theme.popupbackgroundColor};
  width: 100%;
  transition: transform 0.42s cubic-bezier(0.32, 0.72, 0, 1);
  transform: translateY(${e=>"cart"===e.showPopup?"0%":"100%"});
  border-top-right-radius: 28px;
  border-top-left-radius: 28px;
  box-shadow: 0 -8px 36px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1500;
  padding-bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  overflow: hidden;

  /* Drag handle */
  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    border-radius: 999px;
    background: ${e=>e.theme.popupTextColor||"#333"};
    opacity: 0.18;
    margin: 10px auto 0;
    flex-shrink: 0;
  }
`,Fi=((0,r.Ay)(Ge.WQq)`
  font-size: 20px;
  position: absolute;
  top: 16px;
  right: 20px;
  cursor: pointer;
  color: ${e=>e.theme.popupTextColor};
  z-index: 20000;
  pointer-events: auto;
  background: ${e=>e.theme.categoryUnActive||"rgba(0,0,0,0.06)"};
  border: none;
  padding: 6px;
  line-height: 1;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;

  &:hover {
    background: ${e=>e.theme.categoryUnActive||"rgba(0,0,0,0.1)"};
  }
`,r.Ay.div`
  width: 92%;
  display: flex;
  flex-direction: column;
`,r.Ay.div`
  font-size: 22px;
  font-weight: 800;
  margin-top: 36px;
  color: ${e=>e.theme.popupTextColor};
  letter-spacing: -0.3px;
`,r.Ay.div`
  height: 1px;
  width: 100%;
  background-color: ${e=>e.theme.popupTextColor};
  opacity: 0.08;
  margin-top: 10px;
`,r.Ay.div`
  max-height: 38vh;
  width: 100%;
  overflow-y: auto;
  margin-top: 16px;
  padding-right: 2px;

  &::-webkit-scrollbar { width: 3px; }
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mainColor||"#e53e3e"};
    border-radius: 3px;
  }
`,r.Ay.div`
  height: 42vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: ${e=>e.theme.popupTextColor};
  font-size: 16px;
  font-weight: 600;
  opacity: 0.6;
  text-align: center;
  padding: 0 20px;
`);r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 80px;
  margin-top: 10px;
  position: relative;
  background: ${e=>e.theme.BoxColor||"#fff"};
  border-radius: 16px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
`,r.Ay.div`
  flex-shrink: 0;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`,r.Ay.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 2px 0;
`,r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 2px 0;
`,r.Ay.div`
  display: flex;
  flex-direction: row;
  height: 28px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.14);
`,r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`,r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`,r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  font-size: 12px;
  font-weight: 700;
`,r.Ay.span`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor};
  line-height: 1.3;
`,r.Ay.span`
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor};
  font-size: 13px;
  font-weight: 700;
`,r.Ay.span`
  color: ${e=>e.theme.popupTextColor};
  font-size: 14px;
  font-weight: 700;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92%;
`,r.Ay.button`
  outline: none;
  border: 0;
  cursor: pointer;
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  width: 92%;
  margin-top: 12px;
  background-color: ${e=>e.theme.mainColor};
  border-radius: 999px;
  padding: 14px;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  transition: opacity 0.2s, transform 0.2s;
  letter-spacing: 0.3px;

  &:active {
    opacity: 0.85;
    transform: scale(0.98);
  }
`,(0,r.Ay)(y.pS_)`
  font-size: 18px;
  cursor: pointer;
  color: ${e=>e.theme.popupTextColor};
  opacity: 0.45;
  transition: opacity 0.2s, color 0.2s;

  &:hover {
    opacity: 1;
    color: #e53935;
  }
`;var Ri=o(11222),Di=o(29334),Ui=o(81132),Bi=o(70268),Oi=o(50074),qi=o(81926);const Mi=r.i7`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,Wi=r.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Xi=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 380px;
  overflow-y: auto;
  padding-bottom: 12px;
  flex: 1;
  min-height: 0;
  padding-right: 4px;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
    border-radius: 4px;
  }
`,Vi=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  background: ${e=>e.theme.popupbackgroundColor||"#ffffff"};
  border-radius: 14px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  animation: ${Mi} 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`,Yi=r.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`,Hi=r.Ay.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Ki=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`,Ji=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Qi=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`,Zi=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  white-space: nowrap;
`,Gi=r.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}12`};
  padding: 3px 5px;
  border-radius: 20px;
`,er=r.Ay.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  color: ${e=>e.theme.popupbackgroundColor||"#ffffff"};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  line-height: 1;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.9);
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,tr=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  min-width: 20px;
  text-align: center;
`,or=r.Ay.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.45;
  transition: opacity 0.2s ease, color 0.2s ease, transform 0.2s ease;

  svg { font-size: 11px; }

  &:hover {
    opacity: 1;
    color: #e53935;
    transform: scale(1.15);
  }
  &:active {
    transform: scale(0.9);
  }
`,ir=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,rr="\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 2px 8px;\n  line-height: 1.5;\n  white-space: nowrap;\n",nr=r.Ay.span`
  ${rr}
  border: 1px solid ${e=>`${e.theme.popupTextColor||"#1a1a1a"}50`};
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  background: transparent;
`,ar=r.Ay.span`
  ${rr}
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}18`};
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}35`};
`,lr=r.Ay.span`
  ${rr}
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  border: 1px dashed ${e=>`${e.theme.popupTextColor||"#999"}40`};
  opacity: 0.65;
  text-decoration: line-through;
`,sr=r.Ay.div`
  font-size: 10px;
  font-style: italic;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dr=r.Ay.div`
  font-size: 10px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.75;
  line-height: 1.5;
`,cr=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}10`};
  border-radius: 12px;
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  margin-top: 4px;
`,pr=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ur=r.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  opacity: 0.75;
`,xr=r.Ay.div`
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
`,hr=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.6;
  text-align: center;
`,gr=["Size:","\u0627\u0644\u062d\u062c\u0645:"],mr=["Add ons:","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:"],fr=["Remove:","\u0628\u062f\u0648\u0646:"];function vr(e){let{restaurant:t,activeLanguage:o}=e;const i=(0,f.wA)(),{restaurantName:r}=(0,v.g)(),n=window.location.hostname.split(".")[0],a="menugic"!==n&&"localhost"!==n&&"www"!==n?n:r,l=(0,f.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,t)=>e+t.price*t.quantity),0),d="ar"===o?"ar":"en",c=e=>{const t=(0,Oi.qh)(e,d);if(!t.length)return null;const{sizeLabel:o,addonLabels:i,removalLabels:r,legacyLines:n}=function(e){const t={sizeLabel:null,addonLabels:[],removalLabels:[],legacyLines:[]};let o=null;for(const i of e)"heading"===i.type?o=gr.includes(i.text)?"size":mr.includes(i.text)?"addons":fr.includes(i.text)?"removals":"legacy":"size"===o?t.sizeLabel=i.text:"addons"===o?t.addonLabels.push(i.text):"removals"===o?t.removalLabels.push(i.text):t.legacyLines.push(i.text);return t}(t),a=o||i.length||r.length;return(0,P.jsxs)(P.Fragment,{children:[a&&(0,P.jsxs)(ir,{children:[o&&(0,P.jsx)(nr,{children:"ar"===d?`\u0627\u0644\u062d\u062c\u0645: ${o}`:`Size: ${o}`}),i.map((e=>(0,P.jsxs)(ar,{children:["+ ",e]},e))),r.map((e=>(0,P.jsx)(lr,{children:e},e)))]}),n.map(((e,t)=>(0,P.jsx)(dr,{children:e},t)))]})},p=(0,Je.Q)(null===t||void 0===t?void 0:t.currency);if(0===l.length)return(0,P.jsx)(Wi,{children:(0,P.jsx)(hr,{children:"ar"===d?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"})});const u=e=>{var t;const o=null===(t=e.images)||void 0===t?void 0:t[0];return o&&o.url?(0,N.V)(o.url):""};return(0,P.jsx)(Wi,{children:(0,P.jsxs)(Xi,{children:[l.map((e=>{const t="ar"===d?e.ar_name:e.en_name,o=(0,Ke.T)(e.price*e.quantity,p);return(0,P.jsx)(Vi,{children:(0,P.jsxs)(Yi,{children:[(0,P.jsx)(Hi,{src:u(e),alt:t}),(0,P.jsxs)(Ki,{children:[(0,P.jsx)(Ji,{title:t,children:t}),c(e),e.instruction&&(0,P.jsxs)(sr,{children:["\ud83d\udcdd ",e.instruction]})]}),(0,P.jsxs)(Qi,{children:[(0,P.jsx)(Zi,{children:o}),(0,P.jsxs)(Gi,{children:[(0,P.jsx)(er,{onClick:()=>{return t=e.uniqueId,void((o=e.quantity)>1&&i((0,Ht.v)(a,t,o-1)));var t,o},disabled:e.quantity<=1,"aria-label":"decrease quantity",children:"\u2212"}),(0,P.jsx)(tr,{children:e.quantity}),(0,P.jsx)(er,{onClick:()=>{return t=e.uniqueId,o=e.quantity,i((0,Ht.v)(a,t,o+1));var t,o},"aria-label":"increase quantity",children:"+"})]}),(0,P.jsx)(or,{onClick:()=>{return t=e.uniqueId,i((0,Ht.dt)(a,t));var t},"aria-label":"remove item",children:(0,P.jsx)(go.qbC,{})})]})]})},e.uniqueId)})),(0,P.jsx)(cr,{children:(0,P.jsxs)(pr,{children:[(0,P.jsx)(ur,{children:"ar"===d?"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a":"Total"}),(0,P.jsx)(xr,{children:(0,Ke.T)(s,p)})]})})]})})}var yr=o(13491);const br=r.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`;r.Ay.div`
  padding: 14px 16px;
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border: 2px solid ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  font-size: 16px;
  transition: all 0.2s ease;

`,r.Ay.ul`
  position: absolute;
  top: 135%;
  left: 0;
  width: 100%;
  max-height: ${e=>e.isOpen?"200px":"0px"};
  overflow-y: auto;
  border-radius: 10px;
  border: none;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: all  0.2s ease-in-out ;
  z-index: 16;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
  background-color:${e=>e.theme.categoryUnActive||"#ffffff"}; 

`,r.Ay.li`
  height: 50px;
  cursor: pointer;
  padding-left: 7px;
  padding-right: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s;
  background-color: ${e=>e.branchName==e.selectedBranch?e.theme.categoryUnActive||"#ffffff":e.disable?"rgba(0, 0, 0, 0.08)":"transparent"};
  color: ${e=>e.branchName==e.selectedBranch?e.theme.popupTextColor||"#00112b":e.disable?"#999":e.theme.popupTextColor||"#00112b"};

`,r.Ay.span`

`,r.Ay.span`
  border: solid ${e=>e.theme.popupTextColor||"#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.open?"rotate(-135deg)":"rotate(45deg)"};
  margin-left: 10px;
  transition: transform 0.3s;

`;function wr(e){let{deliveryType:t,branches:o,selectedBranch:i,setSelectedBranch:n,setErrors:a,errors:l}=e;const s=(0,r.DP)(),d=(o||[]).map((e=>({value:e.id,label:e.name,branch:e,isDisabled:!e.has_delivery&&"Delivery"===t}))),c={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(null!==l&&void 0!==l&&l.branch?"rgba(255, 68, 68, 0.1)":s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:t.isDisabled?"#999":s.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?s.categoryUnActive||"#ffffff":t.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent",cursor:t.isDisabled?"not-allowed":"pointer",display:"flex",justifyContent:"space-between"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,P.jsx)(br,{children:(0,P.jsx)(yr.Ay,{value:d.find((e=>{var t;return(null===(t=e.branch)||void 0===t?void 0:t.id)===(null===i||void 0===i?void 0:i.id)})),onChange:e=>{e&&!e.isDisabled&&(n(e.branch),a({...l,branch:""}))},options:d,placeholder:"Select Branch",isOptionDisabled:e=>e.isDisabled,styles:c,formatOptionLabel:e=>(0,P.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,P.jsx)("span",{children:e.label}),e.isDisabled&&"Delivery"===t&&(0,P.jsx)("span",{style:{fontSize:12,color:"#999"},children:"No Delivery"})]}),menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})})}const jr=r.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`,Cr=(r.Ay.div`
  padding: 14px 16px;
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border: 2px solid ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  font-size: 16px;
  transition: all 0.2s ease;

`,r.Ay.ul`
  position: absolute;
  top: 130%;
  left: 0;
  width: 100%;
  max-height: ${e=>e.isOpen?"220px":"0px"};
  overflow-y: auto;
  border-radius: 10px;
  border: none;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: all  0.2s ease-in-out ;
  z-index: 10;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
  background-color:${e=>e.theme.categoryUnActive||"#ffffff"}; 

`,r.Ay.li`
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  background-color: ${e=>e.regionName==e.selectedRegion?e.theme.categoryUnActive||"#ffffff":"transparent"};
  color: ${e=>(e.regionName,e.selectedRegion,e.theme.popupTextColor||"#00112b")};
  &:hover {
    background-color: ${e=>e.theme.popupbackgroundColor||"#ffffff"};
  }
`,r.Ay.span`
width: 90%;
`,r.Ay.span`
  border: solid ${e=>e.theme.popupTextColor||"#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.open?"rotate(-135deg)":"rotate(45deg)"};
  margin-left: 10px;
  transition: transform 0.3s;

`,r.Ay.div`
height: 70px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(0,0,0,0.2);
`),$r=r.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`,Ar=r.Ay.input`
width: 100%;
  padding-left: 10px;
  border-radius: 5px;
  height: 60%;
  background-color:${e=>e.theme.popupbackgroundColor}; ;
  color: ${e=>e.theme.mainColor};
  border: 0;
  
  &:focus{
    outline: none;
  }
  &::placeholder{
    color: ${e=>e.theme.mainColor};
    font-size: 13px;

  }
`,kr=(0,r.Ay)(s.Xj1)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.mainColor};

`,zr=r.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;r.Ay.div`
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`,r.Ay.div`
  border: 3px solid ${e=>e.theme.popupbackgroundColor};
  border-left-color:${e=>e.theme.popupTextColor};; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${zr} 1s linear infinite; /* Apply animation */
`;var Sr=o(89993);function Tr(e){var t;let{selectedBranch:o,selectedRegion:n,onRegionChange:a,setErrors:l,errors:s,onRegionsChange:d}=e;const c=(0,r.DP)(),[p,u]=(0,i.useState)(!1),[x,h]=(0,i.useState)(""),{response:g,isLoading:m}=(0,Sr.w)({branch_id:o.id,onSuccess:()=>{}});(0,i.useEffect)((()=>{var e;m||d((null===g||void 0===g||null===(e=g.data)||void 0===e?void 0:e.regions)||[])}),[m,g,d]),(0,i.useEffect)((()=>{a("")}),[o,a]);const f=((null===g||void 0===g||null===(t=g.data)||void 0===t?void 0:t.regions)||[]).map((e=>({value:e.region_name,label:e.region_name}))),v=f.filter((e=>e.label.toLowerCase().includes(x.toLowerCase()))),y={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(null!==s&&void 0!==s&&s.region?"rgba(255, 68, 68, 0.1)":c.mainColor?`${c.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:c.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:c.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:c.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:c.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:c.categoryUnActive||"#ffffff",border:`1px solid ${c.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:c.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?c.categoryUnActive||"#ffffff":t.isFocused?c.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return!m&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(jr,{children:(0,P.jsx)(yr.Ay,{value:f.find((e=>e.value===n)),onMenuOpen:()=>u(!0),onMenuClose:()=>u(!1),onChange:e=>{a((null===e||void 0===e?void 0:e.value)||""),h(""),l({...s,region:""})},options:v,placeholder:"Select Region",styles:y,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})}),p&&(0,P.jsx)(Cr,{children:(0,P.jsxs)($r,{children:[(0,P.jsx)(Ar,{placeholder:"Search",value:x,onChange:e=>{h(e.target.value)}}),(0,P.jsx)(kr,{})]})})]})}const Lr=r.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,_r=r.Ay.div`
  width: 100%;
  
  /* Override SelectWrapper width for BranchSelect and RegionSelect */
  > div[class*="SelectWrapper"],
  div[class*="SelectWrapper"] {
    width: 100% !important;
    max-width: 100% !important;
  }
  
  /* Enhance SelectWrapper styling */
  [class*="SelectWrapper"] {
    height: 44px !important;
    margin-top: 0 !important;
  }
  
  /* Enhance SelectedValue styling */
  [class*="SelectedValue"] {
    padding: 12px 14px !important;
    border-radius: 10px !important;
    border: 2px solid ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"} !important;
    background-color: ${e=>e.theme.categoryUnActive||"#ffffff"} !important;
    color: ${e=>e.theme.popupTextColor||"#00112b"} !important;
    font-size: 14px !important;
    transition: all 0.2s ease !important;
    
    &:hover {
      border-color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"} !important;
      box-shadow: 0 0 0 3px ${e=>e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.1)"} !important;
    }
  }
  
  /* Enhance OptionsList styling */
  [class*="OptionsList"] {
    border-radius: 10px !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) !important;
    border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"} !important;
  }
`,Ir=r.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,Er=r.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,Nr=(r.Ay.select`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid
    ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 12px;
  padding-right: 36px;

  &:focus {
    box-shadow: 0 0 0 3px
      ${e=>e.hasError?"rgba(255, 68, 68, 0.1)":e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.1)"};
    border-color: ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
  }

  &:hover {
    border-color: ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
  }

  option {
    padding: 10px;
    background: ${e=>e.theme.categoryUnActive||"#ffffff"};
    color: ${e=>e.theme.popupTextColor||"#00112b"};
    font-size: 14px;
  }
`,r.Ay.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`);function Pr(e){var t,o;let{formData:i,updateFormData:n,restaurant:a,errors:l,setErrors:s}=e;const d=(0,r.DP)();let c={};try{c=JSON.parse((null===a||void 0===a?void 0:a.features)||"{}")}catch(x){c={}}const p=[c.delivery_order&&{value:"Delivery",label:"Delivery"},c.takeaway_order&&{value:"TakeAway",label:"Take Away"},c.dinein_order&&{value:"DineIn",label:"Dine In"}].filter(Boolean),u={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(l.deliveryType?"rgba(255, 68, 68, 0.1)":d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?d.categoryUnActive||"#ffffff":t.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,P.jsxs)(Lr,{children:[(0,P.jsx)(Ir,{children:"Select Order Type"}),(0,P.jsx)(Er,{children:"Choose how you would like to receive your order"}),(0,P.jsxs)(_r,{children:[(0,P.jsx)(yr.Ay,{value:p.find((e=>e.value===i.deliveryType)),onChange:e=>{var t;n({deliveryType:(null===e||void 0===e?void 0:e.value)||"",selectedBranch:(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t[0])||null,selectedRegion:""}),s({})},options:p,placeholder:"Select Order Type",isSearchable:!1,styles:u,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"}),l.deliveryType&&(0,P.jsx)(Nr,{children:l.deliveryType})]}),(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)>0&&!(()=>{var e;return null===a||void 0===a||null===(e=a.branches)||void 0===e?void 0:e.some((e=>e.is_online))})()&&(0,P.jsxs)(_r,{children:[(0,P.jsx)(wr,{deliveryType:i.deliveryType,branches:null===a||void 0===a?void 0:a.branches,selectedBranch:i.selectedBranch,setSelectedBranch:e=>n({selectedBranch:e,selectedRegion:""}),setErrors:s,errors:l}),l.branch&&(0,P.jsx)(Nr,{children:l.branch})]}),i.selectedBranch&&"Delivery"===i.deliveryType&&Array.isArray(i.regions)&&i.regions.length>0&&(0,P.jsxs)(_r,{children:[(0,P.jsx)(Tr,{selectedRegion:i.selectedRegion,onRegionChange:e=>n({selectedRegion:e}),selectedBranch:1===(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.length)?null===a||void 0===a?void 0:a.branches[0]:i.selectedBranch,setErrors:s,errors:l,onRegionsChange:e=>n({regions:e})}),l.region&&(0,P.jsx)(Nr,{children:l.region})]})]})}var Fr=o(16106);const Rr=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Dr=r.Ay.button`
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid
    ${e=>"current"===e.variant?e.theme.mainColor||e.theme.maincolor||"#007bff":e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  background: ${e=>"current"===e.variant?e.theme.mainColor||e.theme.maincolor||"#007bff":e.theme.categoryUnActive||"#ffffff"};
  color: ${e=>"current"===e.variant?"#ffffff":e.theme.popupTextColor||"#00112b"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  outline: none;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px
      ${e=>"current"===e.variant?"rgba(0, 123, 255, 0.3)":"rgba(0, 0, 0, 0.1)"};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    font-size: 18px;
  }
`,Ur=r.Ay.div`
  padding: 16px;
  background: ${e=>e.theme.categoryUnActive||"#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Br=r.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Or=r.Ay.div`
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  word-break: break-all;
`,qr=r.Ay.a`
  font-size: 14px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-decoration: none;
  font-weight: 600;
  margin-top: 4px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`,Mr=r.Ay.div`
  color: #ff4444;
  font-size: 13px;
  margin-top: -8px;
`;function Wr(e){let{onLocationSelect:t,selectedLocation:o,hasError:i,googleMapsApiKey:n,activeLanguage:a="en"}=e;const l=(0,r.DP)();return n?(0,P.jsx)(Fr.A,{apiKey:n,onLocationConfirm:t,selectedLocation:o,hasError:i,theme:l,activeLanguage:a}):(0,P.jsx)(Xr,{onLocationSelect:t,selectedLocation:o,hasError:i})}function Xr(e){let{onLocationSelect:t,selectedLocation:o,hasError:r}=e;const[n,a]=(0,i.useState)(!1),[l,s]=(0,i.useState)("");return(0,P.jsxs)(Rr,{children:[(0,P.jsxs)(Dr,{type:"button",onClick:()=>{navigator.geolocation?(a(!0),s(""),navigator.geolocation.getCurrentPosition((e=>{const{latitude:o,longitude:i}=e.coords,r={latitude:o,longitude:i,address:`${o.toFixed(6)}, ${i.toFixed(6)}`};t(r),a(!1)}),(()=>{s("Unable to retrieve your location. Please try again."),a(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):s("Geolocation is not supported by your browser")},disabled:n,variant:"current",children:[(0,P.jsx)(go.hO$,{}),n?"Getting Location...":"Use Current Location"]}),(0,P.jsxs)(Dr,{type:"button",onClick:()=>{if(o){const e=`https://www.google.com/maps?q=${o.latitude},${o.longitude}`;window.open(e,"_blank")}else{const e="https://www.google.com/maps/search/?api=1";window.open(e,"_blank")}},variant:"select",children:[(0,P.jsx)(go.vq8,{}),o?"View on Map":"Select on Map"]}),o&&(0,P.jsxs)(Ur,{children:[(0,P.jsx)(Br,{children:"Selected Location:"}),(0,P.jsx)(Or,{children:o.address||`${o.latitude}, ${o.longitude}`}),o.latitude&&o.longitude&&(0,P.jsx)(qr,{href:`https://www.google.com/maps?q=${o.latitude},${o.longitude}`,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]}),l&&(0,P.jsx)(Mr,{children:l}),r&&!o&&(0,P.jsx)(Mr,{children:"Please select a location"})]})}const Vr=r.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`,Yr=r.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,Hr=r.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,Kr=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 0;
  position: relative;
`,Jr=r.Ay.label`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Qr=r.Ay.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  border: 2px solid
    ${e=>e.hasError?"#ff4444":e.theme.mainColor||"rgba(0, 0, 0, 0.1)"};
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
    box-shadow: 0 0 0 3px
      ${e=>e.hasError?"rgba(255, 68, 68, 0.1)":e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.1)"};
  }

  &::placeholder {
    color: ${e=>e.theme.popupTextColor||"#999"};
    opacity: 0.6;
  }
`,Zr=r.Ay.textarea`
  width: 100%;
  min-width: 100%;
  min-height: 80px;
  height: ${e=>18*(e.rows||3)+24+4+"px"};
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.5;
  border: 2px solid
    ${e=>e.hasError?"#ff4444":e.theme.mainColor||"rgba(0, 0, 0, 0.1)"};
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  transition: all 0.2s ease;
  outline: none;
  resize: vertical;
  font-family: inherit;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: auto;

  &:focus {
    border-color: ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
    box-shadow: 0 0 0 3px
      ${e=>e.hasError?"rgba(255, 68, 68, 0.1)":e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.1)"};
  }

  &::placeholder {
    color: ${e=>e.theme.popupTextColor||"#999"};
    opacity: 0.6;
  }

  /* Ensure visibility on Android/Samsung devices */
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    -webkit-appearance: textarea;
    display: block !important;
  }
`,Gr=r.Ay.span`
  color: #ff4444;
  font-size: 12px;
  display: block;
`,en=r.Ay.p`
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.85;
`;function tn(e){let{formData:t,updateFormData:o,errors:n,restaurantName:a,restaurant:l,activeLanguage:s="en"}=e;const d=(0,r.DP)(),[c,p]=(0,i.useState)([]),[u,x]=(0,i.useState)(!1),h=(0,i.useRef)(!1),g=(e,t)=>"ar"===s?t:e,m=(0,i.useMemo)((()=>{try{return null!==l&&void 0!==l&&l.features?JSON.parse(l.features):{}}catch{return{}}}),[null===l||void 0===l?void 0:l.features]).google_maps_integrated&&(null===l||void 0===l?void 0:l.google_maps_api_key)||null,f=(0,i.useMemo)((()=>({control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:d.mainColor||d.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?d.categoryUnActive||"#ffffff":t.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})})),[d]),v=(0,i.useMemo)((()=>[{value:"__manual__",label:0===c.length?g("No saved addresses \u2014 type below","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u2014 \u0627\u0643\u062a\u0628 \u0623\u062f\u0646\u0627\u0647"):g("Type address manually","\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u062f\u0648\u064a\u0627\u064b")},...c.map((e=>({value:String(e.id),label:`${e.label||g("Address","\u0639\u0646\u0648\u0627\u0646")}${e.is_default?` (${g("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")})`:""} \u2014 ${e.full_address.length>56?`${e.full_address.slice(0,56)}\u2026`:e.full_address}`})))]),[c,s]),y=(0,i.useMemo)((()=>{if(null==t.selectedAddressId)return v[0]||null;const e=String(t.selectedAddressId);return v.find((t=>t.value===e))||v[0]||null}),[v,t.selectedAddressId]);(0,i.useEffect)((()=>{if("Delivery"!==t.deliveryType||!a)return void p([]);const e=(0,Bi.wU)(a);if(!e)return void p([]);let o=!1;return x(!0),Ri.A.get(Ui.Qf,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:t}=e;o||p(t.addresses||[])})).catch((()=>{o||p([])})).finally((()=>{o||x(!1)})),()=>{o=!0}}),[t.deliveryType,a]),(0,i.useEffect)((()=>{"Delivery"!==t.deliveryType&&(h.current=!1)}),[t.deliveryType]),(0,i.useEffect)((()=>{if("Delivery"!==t.deliveryType)return;if(!c.length||h.current)return;const e=c.find((e=>e.is_default));e&&!String(t.fullAddress||"").trim()&&(h.current=!0,o({selectedAddressId:e.id,fullAddress:e.full_address}))}),[c,t.deliveryType,t.fullAddress,o]);const b=e=>{const{name:t,value:i}=e.target;o("fullAddress"!==t?{[t]:i}:{[t]:i,selectedAddressId:null})};return(0,P.jsxs)(Vr,{children:[(0,P.jsx)(Yr,{children:g("Your Information","\u0628\u064a\u0627\u0646\u0627\u062a\u0643")}),(0,P.jsx)(Hr,{children:g("Please provide your contact details to complete the order","\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628")}),(0,P.jsxs)(Kr,{children:[(0,P.jsx)(Jr,{children:g("Full Name *","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,P.jsx)(Qr,{type:"text",name:"fullName",value:t.fullName,onChange:b,placeholder:g("Enter your full name","\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644"),hasError:!!n.fullName}),n.fullName&&(0,P.jsx)(Gr,{children:n.fullName})]}),(0,P.jsxs)(Kr,{children:[(0,P.jsx)(Jr,{children:g("Phone Number *","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 *")}),(0,P.jsx)(Qr,{type:"tel",name:"phoneNumber",value:t.phoneNumber,onChange:b,placeholder:g("Enter your phone number","\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643"),hasError:!!n.phoneNumber}),n.phoneNumber&&(0,P.jsx)(Gr,{children:n.phoneNumber})]}),"Delivery"===t.deliveryType&&(0,P.jsxs)(P.Fragment,{children:[(0,Bi.wU)(a)&&(0,P.jsxs)(Kr,{children:[(0,P.jsxs)(Jr,{children:[g("Saved address","\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0641\u0648\u0638"),u?` (${g("loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")})`:""]}),(0,P.jsx)(_r,{children:(0,P.jsx)(yr.Ay,{value:y,onChange:e=>{if(!e||"__manual__"===e.value)return void o({selectedAddressId:null});const t=parseInt(e.value,10),i=c.find((e=>e.id===t));i&&o({selectedAddressId:t,fullAddress:i.full_address})},options:v,isSearchable:!1,isDisabled:u,styles:f,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed",isRtl:"ar"===s})}),(0,P.jsx)(en,{children:g("Add or edit addresses from the account menu (person icon) \u2192 Addresses.","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062d\u0633\u0627\u0628 (\u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0634\u062e\u0635) \u2190 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646.")})]}),m&&(0,P.jsxs)(Kr,{children:[(0,P.jsx)(Jr,{children:g("Delivery Location *","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 *")}),(0,P.jsx)(Wr,{onLocationSelect:e=>{o({selectedLocation:e,fullAddress:e.address||`${e.latitude}, ${e.longitude}`})},selectedLocation:t.selectedLocation,hasError:!!n.fullAddress&&!t.selectedLocation,googleMapsApiKey:m,activeLanguage:s})]}),(0,P.jsxs)(Kr,{children:[(0,P.jsx)(Jr,{children:g("Full Address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,P.jsx)(Zr,{name:"fullAddress",value:t.fullAddress,onChange:b,placeholder:g("Enter your delivery address","\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),hasError:!!n.fullAddress,rows:"3"}),n.fullAddress&&(0,P.jsx)(Gr,{children:n.fullAddress})]})]}),"DineIn"===t.deliveryType&&(0,P.jsxs)(Kr,{children:[(0,P.jsx)(Jr,{children:g("Table Number *","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 *")}),(0,P.jsx)(Qr,{type:"number",name:"tableNumber",value:t.tableNumber,onChange:b,placeholder:g("Enter table number","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629"),hasError:!!n.tableNumber}),n.tableNumber&&(0,P.jsx)(Gr,{children:n.tableNumber})]}),(0,P.jsxs)(Kr,{children:[(0,P.jsx)(Jr,{children:g("Special Notes (Optional)","\u0645\u0644\u0627\u062d\u0638\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,P.jsx)(Zr,{name:"note",value:t.note,onChange:b,placeholder:g("Any special instructions or notes\u2026","\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u2026"),rows:"3"})]})]})}const on=r.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 440px;
  overflow-y: auto;
  padding-right: 5px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${e=>e.theme.categoryUnActive||"#f5f5f5"};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
    border-radius: 3px;
  }
`,rn=r.Ay.div`
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,nn=r.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 12px;
`,an=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  gap: 12px;
`,ln=r.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#666"};
  flex: 1;
`,sn=r.Ay.div`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  text-align: right;
  flex: 1;
  word-break: break-word;
`,dn=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,cn=r.Ay.div`
  padding: 8px 0;
`,pn=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,un=r.Ay.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`,xn=r.Ay.div`
  height: 1px;
  background: ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  margin: 12px 0;
`,hn=r.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-align: right;
`;function gn(e){let{formData:t,restaurant:o,activeLanguage:i}=e;const{restaurantName:r}=(0,v.g)(),n=window.location.hostname.split(".")[0],a="menugic"!==n&&"localhost"!==n&&"www"!==n?n:r,l=(0,f.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,t)=>e+t.price*t.quantity),0),d=(0,Je.Q)(null===o||void 0===o?void 0:o.currency);return(0,P.jsxs)(on,{children:[(0,P.jsx)(nn,{children:"Review Your Order"}),(0,P.jsxs)(rn,{children:[(0,P.jsx)(nn,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Items"}),(0,P.jsx)(dn,{children:l.map((e=>{var t,o;return(0,P.jsx)(cn,{children:(0,P.jsxs)(pn,{children:[(0,P.jsx)(un,{src:(0,N.V)(null===(t=e.images)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.url),alt:"en"===i?e.en_name:e.ar_name}),(0,P.jsxs)(sn,{style:{flex:2},children:[e.quantity,"x"," ",(0,P.jsx)("strong",{children:"en"===i?e.en_name:e.ar_name})]}),(0,P.jsx)(sn,{children:(0,Ke.T)(e.price*e.quantity,d)})]})},e.uniqueId)}))}),(0,P.jsx)(xn,{}),(0,P.jsxs)(an,{children:[(0,P.jsx)(ln,{children:"Total:"}),(0,P.jsx)(hn,{children:(0,Ke.T)(s,d)})]})]}),(0,P.jsxs)(rn,{children:[(0,P.jsx)(nn,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Details"}),(0,P.jsxs)(an,{children:[(0,P.jsx)(ln,{children:"Order Type:"}),(0,P.jsx)(sn,{children:t.deliveryType})]}),t.selectedBranch&&(0,P.jsxs)(an,{children:[(0,P.jsx)(ln,{children:"Branch:"}),(0,P.jsx)(sn,{children:t.selectedBranch.name})]}),t.selectedRegion&&(0,P.jsxs)(an,{children:[(0,P.jsx)(ln,{children:"Region:"}),(0,P.jsx)(sn,{children:t.selectedRegion})]})]}),(0,P.jsxs)(rn,{children:[(0,P.jsx)(nn,{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact Information"}),(0,P.jsxs)(an,{children:[(0,P.jsx)(ln,{children:"Name:"}),(0,P.jsx)(sn,{children:t.fullName})]}),(0,P.jsxs)(an,{children:[(0,P.jsx)(ln,{children:"Phone:"}),(0,P.jsx)(sn,{children:t.phoneNumber})]}),"Delivery"===t.deliveryType&&t.fullAddress&&(0,P.jsxs)(an,{children:[(0,P.jsx)(ln,{children:"Address:"}),(0,P.jsx)(sn,{children:t.fullAddress})]}),"DineIn"===t.deliveryType&&t.tableNumber&&(0,P.jsxs)(an,{children:[(0,P.jsx)(ln,{children:"Table Number:"}),(0,P.jsx)(sn,{children:t.tableNumber})]}),t.note&&(0,P.jsxs)(an,{children:[(0,P.jsx)(ln,{children:"Notes:"}),(0,P.jsx)(sn,{children:t.note})]})]})]})}const mn=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  min-height: 60vh;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
      margin-bottom: 50px;
`,fn=r.Ay.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,vn=r.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`,yn=(0,r.Ay)(fn)`
  margin-bottom: 0;
  flex: 1;
`,bn=r.Ay.button`
  border: none;
  background: transparent;
  color: ${e=>e.theme.mainColor||"#00112b"};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 3px 6px;
  line-height: 1;
  border-radius: 8px;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`,wn=r.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${e=>e.theme.mainColor||"rgba(0, 0, 0, 0.1)"};
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`,jn=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  z-index: 1;
  
  span {
    font-size: 11px;
    color: ${e=>e.active?e.theme.mainColor||e.theme.maincolor||"#007bff":"#999"};
    margin-top: 6px;
    font-weight: ${e=>e.active?"600":"400"};
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 9px;
    }
  }
`,Cn=r.Ay.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  background: ${e=>e.completed||e.active?e.theme.mainColor||e.theme.maincolor||"#007bff":e.theme.categoryUnActive||"#e0e0e0"};
  color: ${e=>e.completed||e.active?"#ffffff":"#999"};
  border: 2px solid
    ${e=>e.active||e.completed?e.theme.mainColor||e.theme.maincolor||"#007bff":"transparent"};
  transition: all 0.3s ease;
  box-shadow: ${e=>e.active||e.completed?"0 4px 12px rgba(0, 123, 255, 0.3)":"none"};
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
`,$n=r.Ay.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  min-height: 260px;
  overflow-y: auto;
  max-height: calc(85vh - 230px);
  
  @media (max-width: 768px) {
    padding: 12px 0;
    min-height: 220px;
    max-height: calc(85vh - 200px);
  }
`,An=r.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 16px;
  position: sticky;
  bottom: 0;
  background: ${e=>e.theme.popupbackgroundColor||"#ffffff"};
  z-index: 10;
  
  @media (max-width: 768px) {
    padding-top: 12px;
  }
`,kn=r.Ay.button`
  flex: ${e=>"primary"===e.variant?"1.5":"1"};
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  ${e=>"primary"===e.variant?`\n    background: ${e.theme.mainColor||e.theme.maincolor||"#007bff"};\n    color: white;\n    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);\n    \n    &:hover:not(:disabled) {\n      transform: translateY(-2px);\n      box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);\n    }\n    \n    &:active:not(:disabled) {\n      transform: translateY(0);\n    }\n    \n    &:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n  `:`\n    background: ${e.theme.categoryUnActive||"#f5f5f5"};\n    color: ${e.theme.textColor||"#333"};\n    border: 1px solid ${e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};\n    \n    &:hover {\n      background: ${e.theme.categoryUnActive||"#e0e0e0"};\n      transform: translateY(-1px);\n    }\n    \n    &:active {\n      background: ${e.theme.categoryUnActive||"#f5f5f5"};\n      color: ${e.theme.textColor||"#333"};\n      transform: translateY(0);\n    }\n  `}
  
  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 13px;
  }
`,zn=[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"review",label:"Review",number:4}];function Sn(e){var t;let{popupHandler:o,restaurant:r}=e;const{restaurantName:n}=(0,v.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n,s=(0,f.d4)((e=>e.cart[l]||[])),d=(0,f.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[l])||void 0===o?void 0:o.activeLanguage)||"en"})),c=(0,f.wA)(),[p,u]=(0,i.useState)(0),[x,h]=(0,i.useState)({deliveryType:"",selectedBranch:(null===r||void 0===r||null===(t=r.branches)||void 0===t?void 0:t[0])||null,selectedRegion:"",regions:[],fullName:"",phoneNumber:"",fullAddress:"",selectedAddressId:null,selectedLocation:null,tableNumber:"",note:""}),[g,m]=(0,i.useState)({}),{handleApiCallAsync:y,isPending:b}=(0,Di.h)({onSuccess:()=>{}});(0,i.useEffect)((()=>{(async()=>{const e=(0,Bi.wU)(l);if(e)try{const{data:t}=await Ri.A.get(Ui.EY,{headers:{Authorization:`Bearer ${e}`}});h((e=>({...e,fullName:t.full_name||e.fullName,phoneNumber:t.phone_number||e.phoneNumber})))}catch{}})()}),[l]),(0,i.useEffect)((()=>{if(null!==r&&void 0!==r&&r.features){const e=JSON.parse(r.features),t=Object.entries(e).filter((e=>{let[t,o]=e;return!0===o})).map((e=>{let[t]=e;return"delivery_order"===t?"Delivery":"takeaway_order"===t?"TakeAway":"dinein_order"===t?"DineIn":null})).filter(Boolean);1===t.length&&h((e=>({...e,deliveryType:t[0]})))}}),[r]);const w=e=>{h((t=>({...t,...e})));const t=Object.keys(e);m((e=>{const o={...e};return t.forEach((e=>{o[e]&&delete o[e]})),o}))},j=e=>{const t={};if(1===e){var o;if(x.deliveryType||(t.deliveryType="Order Type is required."),!x.selectedBranch&&(null===r||void 0===r||null===(o=r.branches)||void 0===o?void 0:o.length)>0){var i;(null===r||void 0===r||null===(i=r.branches)||void 0===i?void 0:i.some((e=>e.is_online)))||(t.branch="Branch is required.")}"Delivery"===x.deliveryType&&x.selectedBranch&&Array.isArray(x.regions)&&x.regions.length>0&&!x.selectedRegion&&(t.region="Region is required.")}else 2===e&&(x.fullName||(t.fullName="Full Name is required."),x.phoneNumber||(t.phoneNumber="Phone Number is required."),"Delivery"!==x.deliveryType||x.fullAddress||(t.fullAddress="Full Address is required for delivery."),"DineIn"!==x.deliveryType||x.tableNumber||(t.tableNumber="Table Number is required."));return m(t),0===Object.keys(t).length};return(0,P.jsxs)(mn,{children:[(0,P.jsxs)(vn,{children:[(0,P.jsx)(yn,{children:zn[p].label}),(0,P.jsx)(bn,{onClick:()=>o(null),"aria-label":"Close cart",children:"\u2715"})]}),(0,P.jsx)(wn,{children:zn.map(((e,t)=>(0,P.jsxs)(jn,{active:t<=p,children:[(0,P.jsx)(Cn,{active:t<=p,completed:t<p,children:t<p?"\u2713":e.number}),(0,P.jsx)("span",{children:e.label})]},e.id)))}),(0,P.jsx)($n,{children:(()=>{switch(p){case 0:return(0,P.jsx)(vr,{formData:x,updateFormData:w,restaurant:r,activeLanguage:d});case 1:return(0,P.jsx)(Pr,{formData:x,updateFormData:w,restaurant:r,errors:g,setErrors:m});case 2:return(0,P.jsx)(tn,{formData:x,updateFormData:w,restaurant:r,errors:g,restaurantName:l,activeLanguage:d});case 3:return(0,P.jsx)(gn,{formData:x,restaurant:r,activeLanguage:d});default:return null}})()}),(0,P.jsxs)(An,{children:[p>0&&(0,P.jsx)(kn,{onClick:()=>{p>0&&u(p-1)},variant:"secondary",children:"Back"}),p<zn.length-1?(0,P.jsx)(kn,{onClick:()=>{if(j(p)){if(0===p&&null!==r&&void 0!==r&&r.id){var e;const t=(null===(e=x.selectedBranch)||void 0===e?void 0:e.id)||null;(0,qi.trackCheckoutStart)(r.id,t,x.deliveryType||null)}p<zn.length-1&&u(p+1)}},variant:"primary",children:"Next"}):(0,P.jsx)(kn,{onClick:async()=>{var e,t,i,n;if(!j(2))return;const a=(0,Je.Q)(null===r||void 0===r?void 0:r.currency);let p=0,u="";u+=`*New Order - ${x.deliveryType}*\n`,u+="--------------------\n\n",u+="*Items:*\n",s.forEach(((e,t)=>{const o=("ar"===d?e.ar_name:e.en_name||"").trim(),i=("ar"===d?e.category.ar_category:e.category.en_category||"").trim(),r=e.price*e.quantity;p+=r,u+=`${t+1}. *${o}*\n`,u+=`    ${i}\n`,u+=`    ${e.quantity}x ${e.price} ${a} = *${r} ${a}*\n`,e.formData&&(u+=(0,Oi.Ve)(e,"ar"===d?"ar":"en")),e.instruction&&(u+=`    > _${e.instruction}_\n`),u+="\n"})),u+="--------------------\n",u+=`*Total: ${(0,Ke.T)(p,a)}*\n\n`,u+="*Customer:*\n",u+=`- ${x.fullName}\n`,u+=`- ${x.phoneNumber}\n`,x.selectedRegion&&(u+=`- Region: ${x.selectedRegion}\n`);let h="";"Delivery"===x.deliveryType&&(u+="\n*Delivery Address:*\n",u+=`${x.fullAddress}\n`,x.selectedLocation&&(h=`https://www.google.com/maps?q=${x.selectedLocation.latitude},${x.selectedLocation.longitude}`)),"DineIn"===x.deliveryType&&(u+=`- Table: #${x.tableNumber}\n`),x.note&&(u+=`\n*Note:* _${x.note}_\n`),h&&(u+=`\n${h}\n`);const g=null!==(e=x.selectedBranch)&&void 0!==e&&e.whatsapp_number?(0,Ei.JW)(x.selectedBranch.whatsapp_number,null===r||void 0===r?void 0:r.country_code):r.phone_number,m=[...s.map((e=>{var t;return{id:e.id,quantity:e.quantity,branch_id:null===(t=x.selectedBranch)||void 0===t?void 0:t.id,restaurant_id:r.id}}))],f=[...s.map((e=>({product_id:e.id,product_name:"en"===d?e.en_name:e.ar_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];y({products:m,restaurant_id:r.id,branch_id:null===(t=x.selectedBranch)||void 0===t?void 0:t.id,delivery_type:x.deliveryType,customer_name:x.fullName,customer_phone:x.phoneNumber,customer_address:"Delivery"===x.deliveryType?x.fullAddress:null,customer_latitude:(null===(i=x.selectedLocation)||void 0===i?void 0:i.latitude)||null,customer_longitude:(null===(n=x.selectedLocation)||void 0===n?void 0:n.longitude)||null,table_number:"DineIn"===x.deliveryType?x.tableNumber:null,note:x.note,items:f,subtotal:p,total:p,currency:r.currency},l).then((e=>{if(null!==r&&void 0!==r&&r.id){var t,o,i;const n=(null===(t=x.selectedBranch)||void 0===t?void 0:t.id)||null;(0,qi.trackOrderPlaced)(r.id,(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(i=o.order)||void 0===i?void 0:i.id)||null,x.deliveryType,p,n,{items:f,customerName:x.fullName})}})).catch((e=>console.error("Order creation failed:",e))),(0,Ei.JT)(g,u),c((0,Ht.sX)(l)),o(null)},variant:"primary",disabled:b,children:b?"Submitting...":"Submit Order"})]})]})}function Tn(e){let{restaurant:t,showPopup:o,popupHandler:r=(()=>{})}=e;const{restaurantName:n}=(0,v.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n,s=(0,f.d4)((e=>e.cart[l]||[])),d=(0,f.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[l])||void 0===o?void 0:o.activeLanguage)||"en"})),c=0===s.length;(0,i.useEffect)((()=>{const e=()=>{r(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);return(0,P.jsx)(Pi,{showPopup:o,children:c?(0,P.jsx)(Fi,{children:"en"===d?"Your cart is empty":"\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0641\u0627\u0631\u063a\u0629"}):(0,P.jsx)(Sn,{popupHandler:r,restaurant:t})})}const Ln=r.Ay.div`
height: 100vh;
position: fixed;
width: 100%;
left: ${e=>e.showSidebar?"0":"-100%"};
top:0;
  transition:all  0.5s ease-in-out;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
z-index: 100;
`,_n=r.Ay.div`
width: 100%;
height: 100%;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
`,In=r.Ay.div`
height: 100%;
background-color: ${e=>e.theme.sidebarbackground};
width: 80%;
position: absolute;
left: 0;
top:0;
box-shadow: 10px 0 15px -5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
        width: 25%;
    }
`,En=r.Ay.div`
width: 100%;
  height: 60%; /* 60% of the sidebar height */
  overflow-y: auto;
  margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,Nn=r.Ay.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-start;
`,Pn=r.Ay.span`
    /* overflow: hidden;
    text-overflow: ellipsis; */
    margin-left:${e=>e.categoryType?"10%":"0%"};

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 13px;
    color: ${e=>e.theme.sidebartext};

`,Fn=r.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10%;

`,Rn=r.Ay.img`
width:20px;
height:20px;
`,Dn=r.Ay.div`
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vh;
`,Un=r.Ay.img`
max-width: 200px;
max-height: 200px;
margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,Bn=r.Ay.div`
display: flex;
align-items: center;
font-weight: 600;
height: 35px;
overflow: hidden;
position: relative;
width: 80%;
margin-bottom: 20px;
margin-top: 10px;
margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,On=r.Ay.input`
width: 100%;
height:100%;
background-color:${e=>e.theme.sidebarsearch};
border: 0;
outline: none;
font-size: 12px;
padding-left: ${e=>"en"==e.activeLanguage?"30px":"0px"};
padding-right: ${e=>"en"==e.activeLanguage?"0px":"30px"};
color:${e=>e.theme.sidebarsearchText};
&::placeholder{
    color:${e=>e.theme.sidebarsearchText};
    opacity: 0.5;
}

`,qn=(0,r.Ay)(s.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};
color:${e=>e.theme.sidebarsearchText};

`,Mn=(0,r.Ay)(H.IMk)`
position: absolute;
left: 20px;
top: 20px;
color: ${e=>e.theme.sidebarsearch};
font-size: 27px;

`;function Wn(e){let{activeCategory:t,setactiveCategory:o,categories:r,showSidebar:n,setshowSidebar:a,setcarouselPosition:l}=e;const{restaurantName:s}=(0,v.g)(),[d,c]=(0,pe.ok)(),p=window.location.hostname.split(".")[0],u="menugic"!==p&&"localhost"!==p&&"www"!==p?p:s,x=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[u]})),[h,g]=(0,i.useState)(""),m=null===r||void 0===r?void 0:r.filter((e=>"en"===(null===x||void 0===x?void 0:x.activeLanguage)?(e.en_category||"").toLowerCase().includes(h.toLowerCase()):(e.ar_category||"").toLowerCase().includes(h.toLowerCase())));return(0,P.jsxs)(Ln,{showSidebar:n,children:[(0,P.jsx)(_n,{onClick:()=>{a(!1)},showSidebar:n}),(0,P.jsxs)(In,{children:[(0,P.jsx)(Mn,{}),(0,P.jsx)(Dn,{children:(0,P.jsx)(Un,{showSidebar:n,src:x.logoURL&&`https://storage.googleapis.com/ecommerce-bucket-testing/${x.logoURL}`})}),(0,P.jsxs)(Bn,{showSidebar:n,children:[(0,P.jsx)(qn,{activeLanguage:null===x||void 0===x?void 0:x.activeLanguage}),(0,P.jsx)(On,{type:"text",activeLanguage:null===x||void 0===x?void 0:x.activeLanguage,dir:"en"==(null===x||void 0===x?void 0:x.activeLanguage)?"ltr":"rtl",placeholder:"en"==(null===x||void 0===x?void 0:x.activeLanguage)?"Search Categories":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{g(e.target.value)},value:h})]}),(0,P.jsx)(En,{showSidebar:n,children:null===m||void 0===m?void 0:m.sort(((e,t)=>t.priority-e.priority)).map(((e,i)=>(0,P.jsxs)(Nn,{onClick:()=>((e,t)=>{o(e),l(t),a(!1)})(e.id,i),children:["horizantal-withoutIcon"!=x.category_type&&(0,P.jsx)(Fn,{activeCategory:t,categoryId:e.id,children:(0,P.jsx)(Rn,{src:e.image_url?(0,N.V)(e.image_url):e.isAllItems&&null!==x&&void 0!==x&&x.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${x.logoURL}`:e.isAllItems&&null!==x&&void 0!==x&&x.cover_url?`https://storage.googleapis.com/ecommerce-bucket-testing/${x.cover_url}`:""})}),(0,P.jsx)(Pn,{categoryType:"horizantal-withoutIcon"==x.category_type,activeCategory:t,categoryId:e.id,children:"en"==(null===x||void 0===x?void 0:x.activeLanguage)?e.en_category:e.ar_category})]},i)))})]})]})}var Xn=o(72929),Vn=o(58169);r.Ay.div`

position: fixed;
height: 100vh;
width: 100%;
align-items: center;
justify-content: center;
top:0;
right: ${e=>e.CloseAnimation?0:"-100%"};
color:${e=>e.theme.textColor};
background-color:${e=>e.theme.backgroundColor};
padding-bottom:150px;

  overflow-x: hidden;
  overflow-y: auto;
  transition: all 1s;
  animation: ${(e,t,o)=>r.i7`
 0% { 
    right: -100%;
    
}
 100% { 
    right: 0;

}
`} 1.1s;
  z-index: 6;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1024px) {
    /* animation: ${e=>{let{x:t,y:o,width:i}=e;return((e,t,o)=>r.i7`
 0% { 
    left: ${e}px;
    top:${t}px;
    width:${o}px;
    height:30vh;
    border-radius: 10px;
    
}
 100% { 
    left: 0;
    top:0;
    width:100%;
    height: 100vh;
    border-radius: 0px;

}
`)(t,o,i)}} 0.8s;
    height: ${e=>e.CloseAnimation?"100vh":"30vh"}; */

    }

`;const Yn=r.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,Hn=(r.i7`
 0% { 
    height:30vh;
    top:0px;
}

 100% { 
    height:70vh;
    top:80px;

    }
`,r.Ay.div`
  width: 100%;
  height: ${e=>e.isNormalCarousel?"auto":e.squareDimension?"55vh":"70vh"};
  min-height: ${e=>e.isNormalCarousel?e.squareDimension?"45vh":"60vh":"unset"};
  margin-top: ${e=>e.isNormalCarousel?"80px":"65px"};
  padding: ${e=>e.isNormalCarousel?"0 5%":"10px 0"};
  transition: all 0.8s;
  display: flex;
  flex-direction: ${e=>e.isNormalCarousel?"column":"row"};
  justify-content: center;
  align-items: center;
  overflow: visible;
  position: relative;
  @media (min-width: 1024px) {
    min-height: ${e=>e.isNormalCarousel?e.squareDimension?"50vh":"65vh":"unset"};
    margin-top: ${e=>e.isNormalCarousel?"90px":"65px"};
  }
`),Kn=r.Ay.div`
  width: 85%;
  height: 100%;
  .swiper {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: none !important;
  }
`,Jn=r.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position:relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
`,Qn=r.Ay.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  vertical-align: top;

`,Zn=r.Ay.div`
  height: 100%;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;

`,Gn=r.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,ea=r.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${Gn} 1s linear infinite; /* Apply animation */
`,ta=r.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,oa=r.Ay.img`
  height: 100%;
  object-fit: cover;
  border-radius: ${e=>e.$cardSlide?"0":e.CloseAnimation?"40px":"10px"};
  width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"90%":"100%"};
  display: ${e=>e.Loaded?"block":"none"};
  transition: all 0.8s;
  @media (min-width: 1024px) {
    width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"50%":"100%"};
  }
`,ia=r.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,ra=((0,r.Ay)(Ge.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,(0,r.Ay)(Ge.m6W)`
  font-size: 26px;
  padding: 8px;
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  color: ${e=>e.theme.backgroundColor||"#fff"};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  left: 4%;
  top: 45%;
  z-index: 20;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    left: 27%;
  }
`),na=(0,r.Ay)(Ge.OQo)`
  font-size: 26px;
  padding: 8px;
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  color: ${e=>e.theme.backgroundColor||"#fff"};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 4%;
  top: 45%;
  z-index: 20;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    right: 27%;
  }
`,aa=(r.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${ia} 0.8s ease-in-out;
`,r.Ay.div`
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
`,r.i7`
 0% { 
    margin-top: -50px;
    opacity: 0;
}
50%{
  margin-top: -50px;
    opacity: 0;
}
 100% { 
    margin-top: 0px;
    opacity: 1;

}
`),la=(r.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${aa} 1.8s ease-in-out;
`,r.Ay.div`
  width:90%;
  height: 45vh;
  margin-top: 80px;
  display: flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${Yn} 0.8s;
  @media (min-width: 1024px) {
    height: ${e=>e.CloseAnimation?"70vh":"30vh"};
    }
`,r.i7`
 0% { 
  margin-top: -20px;
  opacity: 0;
}
100% { 
  margin-top: 10px;
  opacity: 1;
}
`),sa=r.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,da=r.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${la} 1.8s ease-in-out;

`,ca=r.Ay.div`
  width: 90%;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  padding-bottom: 24px;
  color: ${e=>e.theme.textColor};
  @media (min-width: 1024px) {
        width: 50%;
    }
`,pa=r.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:center;
  opacity: 1;
  margin-top: 5px;
`,ua=r.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,xa=r.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,ha=r.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,ga=r.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,ma=r.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,fa=r.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,va=r.Ay.div`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${fa} 0.7s ease-in-out;
  background-color: ${e=>e.theme.backgroundColor};
  z-index: 301;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  box-shadow: 0px -3px 5px rgba(180, 180, 180, 0.1);
  padding-bottom: 10px;
  padding-top: 10px;
  opacity: ${e=>e.CloseAnimation?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.CloseAnimation?"auto":"none"};
  @media (min-width: 1024px) {
    width: 50%;
  }
`,ya=r.Ay.button`
  outline: none;
  border: 0;
  position: relative;
  cursor: pointer;
    width: 90%;
    border-radius: 10px;
    height: 40px;
  color: ${e=>e.theme.popupbuttonText};
  font-weight: 400;
  background-color: ${e=>e.theme.mainColor};
  font-size: 12px;
`,ba=r.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,wa=r.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,ja=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Ca=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,$a=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,Aa=r.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,ka=(r.Ay.div`
  display: flex;
 align-items: center;
 justify-content: center;
 height: 27px;
 width: 27px;
 border-radius: 50%;
 position: fixed;
  z-index: 8;
  top: 30px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};
  right: 30px;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${Aa} 0.8s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,r.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`),za=r.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,Sa=r.Ay.input`
background-color: transparent;
border: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.8)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.8)`)):o}};
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
&:focus{
  outline: none;
}
&::placeholder{
  color:${e=>e.theme.formColor};
  opacity: 0.5;
}
font-size: 13px;
color:${e=>e.theme.formColor};
width: 100%;
padding: 10px;
border-radius: 10px;

`,Ta=r.Ay.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 25;
  background: rgba(0, 0, 0, 0.45);
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  backdrop-filter: blur(4px);
  transition: background 0.2s;
  &:active {
    background: rgba(0, 0, 0, 0.65);
  }
`,La=r.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
  user-select: none;
  -webkit-user-drag: none;
`,_a=r.Ay.button`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 10000;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 26px;
  cursor: pointer;
  backdrop-filter: blur(4px);
`,Ia=r.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`;var Ea=o(88282);const Na=r.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display:flex;
`,Pa=r.Ay.div`
display: flex;
flex-direction: row;
`,Fa=r.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,Ra=r.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,Da=r.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,Ua=r.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,Ba=r.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,Oa=r.Ay.span`
position: absolute;
left: 0;

`,qa=r.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,Ma=(0,r.Ay)(Kt.Z0P)`
    animation:1.2s ${qa}  linear infinite ;
    position: absolute;
`;function Wa(e){let{carouselIndex:t,images:o,CloseAnimation:i,carouselSwiped:r}=e;return(0,P.jsxs)(Na,{CloseAnimation:i,children:[(0,P.jsxs)(Pa,{children:[(0,P.jsx)(Fa,{carouselIndex:t,children:(0,P.jsx)(Ra,{})}),o.map((e=>(0,P.jsx)(Da,{children:(0,P.jsx)(Ua,{})})))]}),!r&&(0,P.jsxs)(Ba,{children:[(0,P.jsx)(Oa,{children:"Swipe"}),(0,P.jsx)(Ma,{})]})]})}r.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,r.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const Xa=r.Ay.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,Va=(r.Ay.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input[type="checkbox"] {
    margin-right: 8px;
    accent-color: ${e=>e.theme.mainColor}; /* Change this color to your desired checkbox color */
  }
`,r.Ay.select`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  color: ${e=>e.theme.backgroundColor};
  background-color: ${e=>e.theme.mainColor};
  &:active{
    outline: none;
    border: 0px;

  }
  `,r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,r.Ay.label`
  display: flex;
  align-items: center;
  input[type="radio"] {
    margin-right: 8px;
    accent-color:${e=>e.theme.mainColor}; /* Change this color to your desired radio button color */
  }
`,r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(tt().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`),Ya=r.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,Ha=r.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Ka=r.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let t=e.theme.formColor;if(tt().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.3)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.3)`)):t}};
  font-size:10px;

`,Ja=r.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,Qa=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Za(e){let{component:t,formData:o,handleChange:r,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||[]);return(0,P.jsxs)(Va,{index:n,children:[(0,P.jsx)(Xa,{children:t.label}),t.values.map((e=>(0,P.jsxs)(Ha,{children:[s.some((t=>t===e.label))?(0,P.jsx)(Ja,{onClick:()=>{(e=>{let o=s.filter((t=>t!==e.label));d(o),r(t.key,o)})(e)},children:(0,P.jsx)(mo.RXm,{size:"15px"})}):(0,P.jsx)(Ka,{onClick:()=>{(e=>{d([...s,e.label]),r(t.key,[...s,e.label])})(e)},children:(0,P.jsx)(go.OiG,{})}),(0,P.jsx)(Ya,{children:e.label})]}))),(c=a,c in l?(0,P.jsx)(Qa,{children:"This field is required"}):null)]});var c}const Ga=r.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};

  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(tt().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,el=r.Ay.div`
  padding: 7px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color:transparent;
  color:${e=>e.theme.formColor};
  width: 70%;
  border: 1px solid ${e=>e.theme.formColor};

font-size: 13px;
`,tl=r.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,ol=r.Ay.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  border-radius: 4px;
  overflow-y: auto;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${e=>e.isOpen?"200px":"0px"};
  transition: 0.2s all ease-in-out;
  background-color:${e=>e.theme.mainColor};
  color:${e=>e.theme.popupbuttonText};
  width: 70%;

`,il=r.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,rl=r.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,nl=r.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,al=r.Ay.div`
  display: flex;
  justify-content: center;
  width: 90%;
  align-items: center;
  border-radius:30px;
  border: 1px solid ${e=>e.theme.mainColor};
  background-color: ${e=>e.selected?e.theme.mainColor:"transparent"};
  font-size: 12px;
  color: ${e=>e.selected?e.theme.popupbackgroundColor:e.theme.formColor};
  height: 40px;
  text-align: center;
  padding: 3px;
  margin-top: 10px;
`,ll=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  margin-top: 20px;
  font-size: 14px;

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function sl(e){var t;let{component:o,formData:r,handleChange:n,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;const[c,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===(t=r[o.key])||void 0===t?void 0:t.value)||""),h=(0,i.useRef)(null),g=e=>{x(e.label),p(!1),n(o.key,e)},m=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,P.jsxs)(Ga,{ref:h,index:l,children:[(0,P.jsx)(Xa,{children:o.label}),o.data.values.length>8?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(el,{onClick:()=>p((e=>!e)),children:[u||a,(0,P.jsx)(tl,{className:c?"up":"",children:"\u25bc"})]}),(0,P.jsx)(ol,{isOpen:c,children:o.data.values.map(((e,t)=>(0,P.jsx)(il,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},t)))})]}):(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(rl,{children:o.data.values.map(((e,t)=>(0,P.jsx)(nl,{children:(0,P.jsx)(al,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,P.jsx)(ll,{children:"This field is required"}):null)]});var f}const dl=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(tt().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,cl=r.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,pl=r.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,ul=r.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,xl=r.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,hl=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function gl(e){let{component:t,formData:o,handleChange:r,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||"");return(0,P.jsxs)(dl,{index:n,children:[(0,P.jsx)(Xa,{children:t.label}),t.values.map((e=>(0,P.jsxs)(pl,{children:[(0,P.jsx)(ul,{onClick:()=>{(e=>{d(e),r(t.key,e)})(e)},children:(0,P.jsx)(xl,{selected:s.label==e.label})}),(0,P.jsx)(cl,{children:e.label})]}))),(c=a,c in l?(0,P.jsx)(hl,{children:"This field is required"}):null)]});var c}function ml(e){let{formSchema:t,onPriceChange:o,basePrice:r,formData:n,setFormData:a,formErrors:l}=e;(0,i.useEffect)((()=>{d(n)}),[n]);const s=(e,t)=>{a((o=>({...o,[e]:t})))},d=e=>{let i=parseFloat(r)||0,n=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const o=t.values.find((t=>t.label===e)),i=!isNaN(Number(o.value));o&&o.value&&i&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")&&(n-=parseFloat(o.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const o=t.data.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),r=!isNaN(Number(o.value));o&&r&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?n-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}else if("radio"===t.type&&t.values){const o=t.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),r=!isNaN(Number(o.value));o&&r&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?n-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}}));const a=i+n,l=a%1!==0?a.toFixed(2):a.toFixed(0);o(l)};return(0,P.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return(0,P.jsx)(Za,{component:e,formData:n,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"select":return(0,P.jsx)(sl,{component:e,formData:n,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"radio":return(0,P.jsx)(gl,{component:e,formData:n,handleChange:s,index:t,componentKey:e.key,formErrors:l});default:return null}})(e,t)))})}function fl(e){var t,o,r;let{productId:n,setSearchParams:a,searchParams:l}=e;const{restaurantName:s}=(0,v.g)(),c=window.location.hostname.split(".")[0],p="menugic"!==c&&"localhost"!==c&&"www"!==c?c:s,u=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[p]}));let x=null;const{response:h,isLoading:g}=(0,Ea.VL)({productId:n,onSuccess:()=>{}}),{response:m}=(0,Do.$)({productId:n});var b;((0,i.useEffect)((()=>{if(null!==h&&void 0!==h&&h.en_price&&!g){var e,t;if(Y(parseFloat(h.en_price)),K(parseFloat(null===h||void 0===h?void 0:h.en_price)),0===parseFloat(null===h||void 0===h||null===(e=h.category)||void 0===e?void 0:e.discount))G(parseFloat(null===h||void 0===h?void 0:h.discount)||0);else G(parseFloat(null===h||void 0===h||null===(t=h.category)||void 0===t?void 0:t.discount)||0);if(null!==u&&void 0!==u&&u.id&&null!==h&&void 0!==h&&h.id){var o,i;const e=(null===u||void 0===u||null===(o=u.branches)||void 0===o||null===(i=o[0])||void 0===i?void 0:i.id)||null;(0,qi.trackItemView)(u.id,h.id,h.category_id,e,{name:h.en_name,price:parseFloat(h.en_price)||0})}}}),[g]),tt().isEmpty(null===h||void 0===h?void 0:h.form_json))||(x=tt().isEmpty(JSON.parse(null===h||void 0===h?void 0:h.form_json))?null===h||void 0===h||null===(b=h.category)||void 0===b?void 0:b.form_json:null===h||void 0===h?void 0:h.form_json);const[w,j]=(0,i.useState)({});(0,i.useEffect)((()=>{if(!tt().isEmpty(x)){var e;const t=JSON.parse(x);if(j(t),2===(null===t||void 0===t?void 0:t.version)&&(null===t||void 0===t||null===(e=t.sizes)||void 0===e?void 0:e.length)>0){const e=parseFloat(null===h||void 0===h?void 0:h.en_price)||0,o=t.sizes.find((t=>"absolute"===t.priceMode&&Number(t.priceModifier)===e));$((()=>({...(0,Ro.KE)(),sizeId:o?o.id:t.sizes[0].id})))}}}),[x]);const[C,$]=(0,i.useState)({}),[A,k]=(0,i.useState)({}),z=(0,f.wA)(),[S,T]=(0,i.useState)(1),[L,_]=(0,i.useState)(!1),I=(0,i.useRef)(null),[E,F]=(0,i.useState)(!1),[R,D]=(0,i.useState)(1),[U,B]=(0,i.useState)({x:0,y:0}),[O,q]=(0,i.useState)(!1),M=(0,i.useRef)(null),W=(0,i.useRef)(null),X=(0,i.useRef)(0),[V,Y]=(0,i.useState)(parseFloat(null===h||void 0===h?void 0:h.en_price)||0),[H,K]=(0,i.useState)(parseFloat(null===h||void 0===h?void 0:h.en_price)||0),[J,Q]=(0,i.useState)(""),[Z,G]=(0,i.useState)(0),ee=Boolean(null===h||void 0===h?void 0:h.out_of_stock)||1===Number(null===h||void 0===h?void 0:h.out_of_stock),te=e=>{K(parseFloat(e)||0)},[oe,ie]=(0,i.useState)(!0),[re,ne]=(0,i.useState)(0),ae=()=>{ie(!1),ne(0),setTimeout((()=>{const e=new URLSearchParams(l);e.delete("productId"),a(e),document.body.style.overflow="auto"}),800)},[le,se]=(0,i.useState)(!1),de=()=>{_(!0),ne(re+1)},ce=()=>{_(!0),ne(re-1)},pe=(0,i.useRef)(null),[ue,xe]=(0,i.useState)(null),he=null!==u&&void 0!==u&&u.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${u.logoURL}`:null,ge=()=>{D(1),B({x:0,y:0}),F(!0)};(0,i.useEffect)((()=>{const e=()=>{ae()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const me=2===(null===w||void 0===w?void 0:w.version)&&Array.isArray(null===w||void 0===w?void 0:w.sizes);let fe=[...null!==(t=null===h||void 0===h?void 0:h.images)&&void 0!==t?t:[]];const ve=fe.findIndex((e=>e.id===h.new_cover_id));if(ve>0){const[e]=fe.splice(ve,1);fe.unshift(e)}const[ye,be]=(0,i.useState)({}),we=e=>{be((t=>({...t,[e]:!0})))},je="en"===(null===u||void 0===u?void 0:u.activeLanguage)?null===h||void 0===h?void 0:h.en_description:null===h||void 0===h?void 0:h.ar_description,Ce=(0,Je.Q)(null===u||void 0===u?void 0:u.currency),$e=(null===u||void 0===u?void 0:u.product_details_carousel_style)||"normal";return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Xn.z,{CloseAnimation:oe,onClick:ae}),(0,P.jsx)(Xn.Z,{CloseAnimation:oe,$premiumMobile:!g,children:!g&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Vn.Tn,{CloseAnimation:oe,children:[(0,P.jsx)(Vn.k8,{onClick:ae,CloseAnimation:oe,type:"button",children:(0,P.jsx)(Vn.Z3,{})}),(0,P.jsx)(Vn.N0,{activeLanguage:null===u||void 0===u?void 0:u.activeLanguage,children:"en"==u.activeLanguage?null===h||void 0===h||null===(o=h.category)||void 0===o?void 0:o.en_category:null===h||void 0===h||null===(r=h.category)||void 0===r?void 0:r.ar_category}),(0,P.jsx)(Vn.i8,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),se(!0),setTimeout((()=>{se(!1)}),4e3)},CloseAnimation:oe,children:le?(0,P.jsx)(mo.RXm,{}):(0,P.jsx)(Kt.zU_,{})})]}),(0,P.jsx)(Hn,{squareDimension:null===h||void 0===h?void 0:h.square_dimension,CloseAnimation:oe,isNormalCarousel:"normal"===$e,children:1===fe.length?(0,P.jsx)(Jn,{carouselIndex:0,children:(0,P.jsx)(Qn,{children:(0,P.jsxs)(Zn,{children:[!ye[0]&&(0,P.jsx)(ta,{children:(0,P.jsx)(ea,{})}),(0,P.jsx)(oa,{src:fe[0].url?(0,N.V)(fe[0].url):he||"",onLoad:()=>we(0),onError:e=>{he&&e.target.src!==he&&(e.target.src=he)},CloseAnimation:oe,Loaded:ye[0],alt:"Image 0"}),(0,P.jsx)(Ta,{onClick:ge,children:(0,P.jsx)(y.gff,{})})]})})}):"normal"===$e?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ra,{CloseAnimation:oe,onClick:()=>{_(!0),0!==re&&ce()}}),(0,P.jsx)(na,{CloseAnimation:oe,onClick:()=>{_(!0),fe.length>re+1&&de()}}),(0,P.jsx)(Jn,{carouselIndex:re,ref:pe,onTouchStart:e=>{xe(e.touches[0].clientX)},onTouchMove:e=>{if(ue){const t=e.touches[0].clientX-ue;t>5?0!==re&&ce():t<-5&&h.images.length>re+1&&de(),xe(null)}},children:fe.map(((e,t)=>(0,P.jsx)(Qn,{children:(0,P.jsxs)(Zn,{children:[!ye[t]&&(0,P.jsx)(ta,{children:(0,P.jsx)(ea,{})}),(0,P.jsx)(oa,{src:ye[t]||t===re?null!==e&&void 0!==e&&e.url?(0,N.V)(e.url):he||"":"",onLoad:()=>we(t),onError:e=>{he&&e.target.src!==he&&(e.target.src=he)},CloseAnimation:oe,Loaded:ye[t],alt:`Image ${t}`}),re===t&&(0,P.jsx)(Ta,{onClick:ge,children:(0,P.jsx)(y.gff,{})})]})},e.id||t)))})]}):"effect-cards"===$e?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ra,{CloseAnimation:oe,onClick:()=>I.current&&I.current.slidePrev()}),(0,P.jsx)(Kn,{children:(0,P.jsx)(Uo.RC,{modules:[Bo.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{I.current=e},onSlideChange:e=>{ne(e.realIndex),_(!0)},children:fe.map(((e,t)=>(0,P.jsx)(Uo.qr,{children:(0,P.jsxs)(Zn,{children:[!ye[t]&&(0,P.jsx)(ta,{children:(0,P.jsx)(ea,{})}),(0,P.jsx)(oa,{src:ye[t]||t===re?null!==e&&void 0!==e&&e.url?(0,N.V)(e.url):he||"":"",onLoad:()=>we(t),onError:e=>{he&&e.target.src!==he&&(e.target.src=he)},CloseAnimation:oe,Loaded:ye[t],$cardSlide:!0,alt:`Image ${t}`}),re===t&&(0,P.jsx)(Ta,{onClick:ge,children:(0,P.jsx)(y.gff,{})})]})},e.id||t)))},null===h||void 0===h?void 0:h.id)}),(0,P.jsx)(na,{CloseAnimation:oe,onClick:()=>I.current&&I.current.slideNext()})]}):(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(Kn,{children:(0,P.jsx)(Uo.RC,{onSwiper:e=>{I.current=e},onSlideChange:e=>{ne(e.realIndex),_(!0)},modules:[Bo.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:fe.map(((e,t)=>(0,P.jsx)(Uo.qr,{children:(0,P.jsxs)(Zn,{children:[!ye[t]&&(0,P.jsx)(ta,{children:(0,P.jsx)(ea,{})}),(0,P.jsx)(oa,{src:ye[t]||t===re?null!==e&&void 0!==e&&e.url?(0,N.V)(e.url):he||"":"",onLoad:()=>we(t),onError:e=>{he&&e.target.src!==he&&(e.target.src=he)},CloseAnimation:oe,Loaded:ye[t],$cardSlide:!0,alt:`Image ${t}`}),re===t&&(0,P.jsx)(Ta,{onClick:ge,children:(0,P.jsx)(y.gff,{})})]})},e.id||t)))},null===h||void 0===h?void 0:h.id)})})}),1!==fe.length&&"normal"!==$e&&(0,P.jsx)(Wa,{images:fe,carouselIndex:re,CloseAnimation:oe,carouselSwiped:L}),(0,P.jsx)(sa,{children:(0,P.jsx)(da,{children:(0,P.jsxs)(ca,{CloseAnimation:oe,activeLanguage:u.activeLanguage,children:[(0,P.jsx)(pa,{activeLanguage:u.activeLanguage,children:"en"==u.activeLanguage?null===h||void 0===h?void 0:h.en_name:null===h||void 0===h?void 0:h.ar_name}),!tt().isEmpty(null===h||void 0===h?void 0:h.en_price)&&(0,P.jsxs)(ha,{children:[(0,P.jsx)(ga,{activeLanguage:u.activeLanguage,discounted:0!=Z,children:(0,Ke.T)(H,Ce)}),0!=Z&&(0,P.jsx)(ma,{activeLanguage:u.activeLanguage,children:(0,Ke.T)(H*(1-parseFloat(Z)/100),Ce)})]}),(0,P.jsx)(ua,{activeLanguage:u.activeLanguage,dangerouslySetInnerHTML:{__html:je}}),ee&&(0,P.jsx)(xa,{children:"en"===u.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),me&&(0,P.jsx)(Fo.A,{options:w,formData:C,setFormData:$,formErrors:A,activeLanguage:u.activeLanguage,basePrice:null===h||void 0===h?void 0:h.en_price,onPriceChange:te}),!me&&(null===w||void 0===w?void 0:w.components)&&(0,P.jsx)(ml,{formSchema:w,onPriceChange:te,formData:C,setFormData:$,basePrice:null===h||void 0===h?void 0:h.en_price,formErrors:A}),(0,P.jsxs)(ka,{activeLanguage:u.activeLanguage,children:[(0,P.jsx)(za,{children:"en"==u.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,P.jsx)(Sa,{activeLanguage:u.activeLanguage,onChange:e=>Q(e.target.value),placeholder:"en"==u.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),!ee&&(0,P.jsxs)(va,{CloseAnimation:oe,children:[(0,P.jsxs)(wa,{CloseAnimation:oe,children:[(0,P.jsx)(ja,{onClick:()=>{T(S+1)},children:"+"}),(0,P.jsx)($a,{children:S}),(0,P.jsx)(Ca,{onClick:()=>{S>1&&T(S-1)},children:"-"})]}),(0,P.jsxs)(ya,{onClick:()=>{if(me){var e;const t={};if((null===(e=w.sizes)||void 0===e?void 0:e.length)>0&&(null===C||void 0===C||!C.sizeId)&&(t.size="Please select a size."),Object.keys(t).length>0)return void k(t)}else if("{}"!==JSON.stringify(w)){const e=function(e,t){const o={},i=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in t&&0!==(null===(i=t[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(t[e])||(o[e]="This field is required.")})),o}(w,C);if(Object.keys(e).length>0)return void k(e)}let t=H*(1-parseFloat(Z)/100);if(setTimeout((()=>{const e=new URLSearchParams(l);e.delete("productId"),a(e),document.body.style.overflow="auto"}),800),null!==u&&void 0!==u&&u.id&&null!==h&&void 0!==h&&h.id){var o,i;const e=(null===u||void 0===u||null===(o=u.branches)||void 0===o||null===(i=o[0])||void 0===i?void 0:i.id)||null;(0,qi.trackAddToCart)(u.id,h.id,h.category_id,S,e,{name:h.en_name,price:t})}z((0,Ht.bE)(p,h,S,C,t,J)),ie(!1),T(1)},children:["en"==u.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",(0,P.jsx)(ba,{children:(0,Ke.T)(S*(H*(1-parseFloat(Z)/100)),Ce)})]})]})]})}),E&&(0,P.jsxs)(La,{onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY;W.current=Math.hypot(t,o)}else if(1===e.touches.length){const t=Date.now();t-X.current<300&&(D((e=>e>1?1:2.5)),B({x:0,y:0})),X.current=t,M.current={x:e.touches[0].clientX,y:e.touches[0].clientY},q(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(t,o);if(W.current){const e=i/W.current;D((t=>Math.min(Math.max(t*e,1),5)))}W.current=i}else if(1===e.touches.length&&O&&R>1){const t=e.touches[0].clientX-M.current.x,o=e.touches[0].clientY-M.current.y;B((e=>({x:e.x+t,y:e.y+o}))),M.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{W.current=null,q(!1)},children:[(0,P.jsx)(_a,{onClick:()=>F(!1),children:(0,P.jsx)(d.$8F,{})}),(0,P.jsx)(Ia,{src:(()=>{const e=fe[re];return e?e.url?(0,N.V)(e.url):he||"":""})(),style:{transform:`scale(${R}) translate(${U.x/R}px, ${U.y/R}px)`},alt:"Zoom"})]})]})}const vl=r.Ay.div`
position: fixed;
bottom: ${e=>"share"==e.showPopup?"0%":"-100%"};
background-color: ${e=>e.theme.popupbackgroundColor};
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 5;
padding-bottom: 10vh;
`,yl=r.Ay.div`
width: 80%;
display: flex;
flex-direction: column;
padding-top:40px;
`,bl=r.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,wl=(r.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,(0,r.Ay)(y.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`),jl=(0,r.Ay)(Ge.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`,Cl=r.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor}

`,$l=r.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor};
margin-top: 20px;
`,Al=r.Ay.div`
display: flex;
flex-direction: row;
gap:15px;
margin-top: 20px;


`,kl=r.Ay.div`
display: flex;
flex-direction: column;
gap:5px;
align-items: center;
justify-content: center;

`,zl=r.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #8bffb83d;
`,Sl=(0,r.Ay)(Kt.EcP)`
font-size: 24px;
color:#51C288;
`,Tl=r.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background: linear-gradient(45deg, 
    rgba(254, 218, 117, 0.2),  /* Light Yellow */
    rgba(250, 126, 30, 0.2),   /* Orange */
    rgba(214, 41, 118, 0.2),   /* Pink */
    rgba(150, 47, 191, 0.2),   /* Purple */
    rgba(79, 91, 213, 0.2)     /* Blue */
  );

background-size: 300% 300%; /* Creates a smooth animated effect */`,Ll=(0,r.Ay)(Kt.ao$)`
font-size: 24px;
/* color:#51C288; */
color:#5c595b;



`,_l=r.Ay.span`
font-size: 10px;
color:${e=>e.theme.popupTextColor}

`,Il=r.Ay.div`
width: 100%;
margin-top: 20px;
background-color: ${e=>e.theme.mainColor};
display: flex;
align-items: center;
position: relative;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 5px;
border-radius: 5px;

`,El=r.Ay.div`
width: 85%;
overflow: hidden;

`,Nl=r.Ay.span`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
white-space: nowrap;
`,Pl=(0,r.Ay)(Kt.zU_)`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`,Fl=(0,r.Ay)(mo.RXm)`
font-size: 18px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`;function Rl(e){let{showPopup:t,popupHandler:o,activeCategory:r}=e;const{restaurantName:n}=(0,v.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n;(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[l].activeLanguage}));(0,i.useEffect)((()=>{const e=()=>{o(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const[s,d]=(0,i.useState)(!1);return(0,P.jsxs)(vl,{showPopup:t,children:[(0,P.jsx)(jl,{onClick:()=>{o(null)}}),(0,P.jsxs)(yl,{children:[(0,P.jsx)(Cl,{children:"Share Category"}),(0,P.jsxs)(Al,{children:[(0,P.jsxs)(kl,{children:[(0,P.jsx)(zl,{onClick:()=>(e=>{const t=window.location.origin+window.location.pathname,o=`https://api.whatsapp.com/send?text=${encodeURIComponent(t+"?categoryId="+e)}`;window.open(o,"_blank")})(r),children:(0,P.jsx)(Sl,{})}),(0,P.jsx)(_l,{children:"Whatsapp"})]}),(0,P.jsxs)(kl,{children:[(0,P.jsx)(Tl,{onClick:()=>{window.open("https://www.instagram.com/direct/inbox/","_blank")},children:(0,P.jsx)(Ll,{})}),(0,P.jsx)(_l,{children:"Instagram"})]})]}),(0,P.jsx)($l,{children:"Get Link"}),(0,P.jsxs)(Il,{children:[(0,P.jsx)(El,{children:(0,P.jsx)(Nl,{children:(e=>{if(e){return window.location.origin+window.location.pathname+"?categoryId="+e}})(r)})}),s?(0,P.jsx)(Fl,{}):(0,P.jsx)(Pl,{onClick:()=>(e=>{const t=window.location.origin+window.location.pathname;navigator.clipboard.writeText(t+"?categoryId="+e),d(!0),setTimeout((()=>{d(!1)}),4e3)})(r)})]})]}),(0,P.jsxs)(bl,{children:["Copyright",(0,P.jsx)(wl,{}),"2024 ",(0,P.jsx)(pe.N_,{href:"https://www.menugic.com",children:"menugic.com"})]})]})}var Dl=o(31088),Ul=o(5677),Bl=o(38495);const Ol=r.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,ql=r.Ay.div`
  position: fixed;
  top: ${e=>e.showInstallPopup?"20px":"-100%"};
  left: 50%;
  transform: translateX(-50%);
  background: ${e=>e.theme.popupbackgroundColor};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2000;
  animation: ${Ol} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,Ml=r.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,Wl=r.Ay.div`
  display: flex;
  gap: 10px;
`,Xl=r.Ay.button`
  background:${e=>e.theme.mainColor};;
  color: ${e=>e.theme.popupbackgroundColor};
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  &:focus{
    outline: none;
  }
`,Vl=r.Ay.button`
  background:${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbackgroundColor};
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  &:focus{
    outline: none;
  }

`,Yl=e=>{let{onInstall:t,onDismiss:o,restaurantName:i,showInstallPopup:r}=e;return(0,P.jsxs)(ql,{showInstallPopup:r,children:[(0,P.jsxs)(Ml,{children:["Access ",(0,P.jsx)("b",{children:i})," anytime with one tap ",(0,P.jsx)("b",{children:"Install The App!"})]}),(0,P.jsxs)(Wl,{children:[(0,P.jsx)(Xl,{onClick:t,children:"Install"}),(0,P.jsx)(Vl,{onClick:o,children:"Dismiss"})]})]})},Hl=r.Ay.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1200;
  display: flex;
  flex-direction: row;
  background-color: ${e=>e.theme.BoxColor||e.theme.popupbackgroundColor||"#ffffff"};
  border-top: 1px solid ${e=>e.theme.categoryUnActive||"rgba(0,0,0,0.08)"};
  box-shadow: 0 -4px 28px rgba(0, 0, 0, 0.1);
  padding-bottom: env(safe-area-inset-bottom, 0px);
  border-radius: 20px 20px 0 0;
  overflow: hidden;
`,Kl=r.Ay.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 10px 4px 8px;
  cursor: pointer;
  outline: none;
  gap: 3px;
  min-height: 58px;
  transition: all 0.18s ease;
  color: ${e=>e.active?e.theme.categoryActive||e.theme.mainColor||"#e53e3e":e.theme.textColor||"#666"};
  opacity: ${e=>e.active?1:.6};

  &:active {
    transform: scale(0.92);
  }
`,Jl=r.Ay.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 22px;
  color: inherit;
  transition: transform 0.18s ease;

  ${Kl}:active & {
    transform: scale(0.88);
  }
`,Ql=r.Ay.span`
  font-size: 10px;
  font-weight: ${e=>e.active?"700":"400"};
  color: inherit;
  letter-spacing: 0.3px;
  line-height: 1;
`,Zl=r.Ay.span`
  position: absolute;
  top: -7px;
  right: -9px;
  min-width: 18px;
  height: 18px;
  border-radius: 999px;
  background-color: ${e=>e.theme.mainColor||"#e53e3e"};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  font-size: 9px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  line-height: 1;
  border: 1.5px solid ${e=>e.theme.BoxColor||"#fff"};
`;function Gl(e){let{activeTab:t,onMenuClick:o,onSearchClick:i,onCartClick:r,onMoreClick:n,cartCount:a,activeLanguage:l,cartEnabled:s}=e;const d="ar"===l;return(0,P.jsxs)(Hl,{dir:d?"rtl":"ltr",role:"navigation","aria-label":"Main navigation",children:[(0,P.jsxs)(Kl,{active:"menu"===t,onClick:o,"aria-label":d?"\u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Menu",children:[(0,P.jsx)(Jl,{active:"menu"===t,children:(0,P.jsx)(y.K8N,{size:22})}),(0,P.jsx)(Ql,{active:"menu"===t,children:d?"\u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Menu"})]}),(0,P.jsxs)(Kl,{active:"search"===t,onClick:i,"aria-label":d?"\u0628\u062d\u062b":"Search",children:[(0,P.jsx)(Jl,{active:"search"===t,children:(0,P.jsx)(y.gZ7,{size:22})}),(0,P.jsx)(Ql,{active:"search"===t,children:d?"\u0628\u062d\u062b":"Search"})]}),s&&(0,P.jsxs)(Kl,{active:"cart"===t,onClick:r,"aria-label":d?"\u0627\u0644\u0633\u0644\u0629":"Cart",children:[(0,P.jsxs)(Jl,{active:"cart"===t,style:{position:"relative"},children:[(0,P.jsx)(y.c,{size:22}),a>0&&(0,P.jsx)(Zl,{children:a>99?"99+":a})]}),(0,P.jsx)(Ql,{active:"cart"===t,children:d?"\u0627\u0644\u0633\u0644\u0629":"Cart"})]}),(0,P.jsxs)(Kl,{active:"more"===t,onClick:n,"aria-label":d?"\u0627\u0644\u0645\u0632\u064a\u062f":"More",children:[(0,P.jsx)(Jl,{active:"more"===t,children:(0,P.jsx)(y.DJH,{size:22})}),(0,P.jsx)(Ql,{active:"more"===t,children:d?"\u0627\u0644\u0645\u0632\u064a\u062f":"More"})]})]})}function es(){var e,t,o,r;const[s,d]=(0,pe.ok)(),c=s.get("productId"),p=s.get("categoryId"),{restaurantName:u}=(0,v.g)(),x=window.location.hostname.split(".")[0],h="menugic"!==x&&"localhost"!==x&&"www"!==x?x:u,g=(0,f.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[h]})),m=(0,f.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[h])||void 0===o?void 0:o.activeLanguage)||"en"})),[y,b]=(0,i.useState)(null),[w,j]=(0,i.useState)(""),[C,$]=(0,i.useState)(null),[A,k]=(0,i.useState)(null),[z,S]=(0,i.useState)(!0),[T,L]=(0,i.useState)("menu"),_=(2===Number(null===g||void 0===g?void 0:g.template_id)||6===Number(null===g||void 0===g?void 0:g.template_id))&&(!0===(null===g||void 0===g?void 0:g.show_all_items_category)||1===(null===g||void 0===g?void 0:g.show_all_items_category)||"1"===(null===g||void 0===g?void 0:g.show_all_items_category)),I={id:"all-items",en_category:"All Items",ar_category:"\u0643\u0644 \u0627\u0644\u0623\u0635\u0646\u0627\u0641",isAllItems:!0,priority:999999,image_url:(null===g||void 0===g?void 0:g.logoURL)||(null===g||void 0===g?void 0:g.cover_url)||null},E=[...(null===g||void 0===g?void 0:g.categories)||[]].sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))),N=_?[I,...E]:E,[F,R]=(0,i.useState)(p?N.findIndex((e=>e.id==p)):0),D=(0,f.d4)((e=>(e.cart[h]||[]).reduce(((e,t)=>e+t.quantity),0))),[U,B]=(0,i.useState)(p||(null===N||void 0===N||null===(e=N[0])||void 0===e?void 0:e.id)),O=(0,i.useCallback)((e=>{B(e);const t=new URLSearchParams(s);"all-items"===e?t.delete("categoryId"):t.set("categoryId",e),d(t)}),[s,d]),q=e=>{document.body.style.overflow=null==e?"auto":"hidden",b(e)};(0,i.useEffect)((()=>{if(null!==g&&void 0!==g&&g.id){var e,t;const o=(null===g||void 0===g||null===(e=g.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,qi.trackVisit)(g.id,o),(0,qi.trackPageView)(g.id,o)}}),[null===g||void 0===g?void 0:g.id]),(0,i.useEffect)((()=>{const e=e=>{e.preventDefault(),k(e),S(!0)};return window.addEventListener("beforeinstallprompt",e),()=>{window.removeEventListener("beforeinstallprompt",e)}}),[]);let M={};try{M=JSON.parse((null===g||void 0===g?void 0:g.features)||"{}")}catch(Qe){M={}}const W=(null===g||void 0===g?void 0:g.sliderImages)||[],X=(!0===(null===g||void 0===g?void 0:g.show_slider_image)||1===(null===g||void 0===g?void 0:g.show_slider_image)||"1"===(null===g||void 0===g?void 0:g.show_slider_image))&&W.length>0;return(0,P.jsxs)(n,{id:"wrapper",children:[(0,P.jsxs)(a,{onClick:()=>{null!=y&&q(null)},children:[(0,P.jsx)(l,{showPopup:y}),(0,P.jsx)(ce,{categories:N,activeCategory:U,setactiveCategory:O,setSearchText:j,searchText:w,setshowSidebar:$,showSidebar:C,carouselPosition:F,setcarouselPosition:R,popupHandler:q,showMenuSlider:X,sliderImages:W}),(0,P.jsx)(Yo,{menu:g.categories,activeCategory:U,showPopup:y,searchText:w,setactiveCategory:O,setcarouselPosition:R,carouselPosition:F,categories:N})]}),(0,P.jsx)(Ni,{restaurant:g,showPopup:y,popupHandler:q}),(null===(t=M)||void 0===t?void 0:t.cart)&&(0,P.jsx)(Tn,{restaurant:g,showPopup:y,popupHandler:q}),(0,P.jsx)(Rl,{showPopup:y,popupHandler:q,activeCategory:U}),(0,P.jsx)(Dl.A,{restaurant:g,showPopup:y,popupHandler:q}),(0,P.jsx)(Ul.A,{restaurant:g,showPopup:y,popupHandler:q}),(0,P.jsx)(Bl.A,{restaurant:g,showPopup:y,popupHandler:q}),(0,P.jsx)(Wn,{categories:N,activeCategory:U,setactiveCategory:O,setshowSidebar:$,showSidebar:C,setcarouselPosition:R}),c&&(0,P.jsx)(fl,{productId:c,searchParams:s,setSearchParams:d}),(null===(o=M)||void 0===o?void 0:o.install_app)&&(0,P.jsx)(Yl,{showInstallPopup:z,onInstall:async()=>{if(!A)return;A.prompt();"accepted"===(await A.userChoice).outcome?console.log("User accepted the install"):console.log("User dismissed the install"),k(null),S(!1)},restaurantName:h,onDismiss:()=>S(!1)}),(0,P.jsx)(Gl,{activeTab:T,activeLanguage:m,cartEnabled:!(null===(r=M)||void 0===r||!r.cart),cartCount:D,onMenuClick:()=>{L("menu"),window.scrollTo({top:0,behavior:"smooth"})},onSearchClick:()=>{L("search");const e=document.getElementById("theme6-search-input");e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout((()=>e.focus()),300))},onCartClick:()=>{var e;null!==(e=M)&&void 0!==e&&e.cart&&(L("cart"),window.history.pushState({},""),q("cart"))},onMoreClick:()=>{L("more"),window.history.pushState({},""),q("location")}})]})}},72929:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s,z:()=>l});var i=o(41190);const r=i.i7`
  0% {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
`,n=i.i7`
  0% {
    width: 0%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    border-radius: 0px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  40% {
    width: 92%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
  }
  100% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }

  @media (min-width: 768px) {
    40% {
      width: 88%;
      border-radius: 28px;
    }
    100% {
      width: 88%;
      border-radius: 28px;
    }
  }

  @media (min-width: 1024px) {
    40% {
      width: 85%;
      border-radius: 32px;
    }
    100% {
      width: 85%;
      border-radius: 32px;
    }
  }
`,a=i.i7`
  0% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }
  60% {
    width: 92%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 0.5;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    width: 0%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    border-radius: 0px;
    opacity: 0;
  }

  @media (min-width: 768px) {
    0% {
      width: 88%;
      border-radius: 28px;
    }
    60% {
      width: 88%;
      border-radius: 28px;
    }
  }

  @media (min-width: 1024px) {
    0% {
      width: 85%;
      border-radius: 32px;
    }
    60% {
      width: 85%;
      border-radius: 32px;
    }
  }
`,l=i.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 299;
  opacity: ${e=>e.CloseAnimation?1:0};
  animation: ${e=>e.CloseAnimation?r:"none"}
    0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: auto;
`,s=i.Ay.div`
  position: fixed;
  width: 92%;
  height: calc(
    100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px
  );
  max-height: calc(
    100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${e=>e.theme.textColor};
  background-color: ${e=>e.theme.backgroundColor};
  padding-bottom: 0;
  overflow-y: ${e=>e.CloseAnimation?"auto":"hidden"};
  overflow-x: hidden;
  z-index: 300;
  border-radius: 24px;
  box-shadow: ${e=>e.CloseAnimation?"0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.05)":"none"};

  animation: ${e=>e.CloseAnimation?n:a}
    0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: forwards;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mainColor||"#007bff"}40;
    border-radius: 3px;
  }

  @media (min-width: 768px) {
    width: 88%;
    border-radius: 28px;
  }

  @media (min-width: 1024px) {
    width: 85%;
    border-radius: 32px;
  }
`},20965:(e,t,o)=>{"use strict";o(42564).default},34848:e=>{"use strict";function t(e,t){if("function"!==typeof e)throw new TypeError("argument fn must be a function");return e}function o(e,t,o){if(!e||"object"!==typeof e&&"function"!==typeof e)throw new TypeError("argument obj must be object");var i=Object.getOwnPropertyDescriptor(e,t);if(!i)throw new TypeError("must call property on owner object");if(!i.configurable)throw new TypeError("property must be configurable")}e.exports=function(e){if(!e)throw new TypeError("argument namespace is required");function i(e){}return i._file=void 0,i._ignored=!0,i._namespace=e,i._traced=!1,i._warned=Object.create(null),i.function=t,i.property=o,i}},26340:(e,t,o)=>{"use strict";var i,r=o(34848)("http-errors"),n=o(40203),a=o(53910),l=o(61033),s=o(51798);function d(e){return Number(String(e).charAt(0)+"00")}function c(e,t){var o=Object.getOwnPropertyDescriptor(e,"name");o&&o.configurable&&(o.value=t,Object.defineProperty(e,"name",o))}function p(e){return"Error"!==e.substr(-5)?e+"Error":e}e.exports=function e(){for(var t,o,i=500,n={},l=0;l<arguments.length;l++){var s=arguments[l],c=typeof s;if("object"===c&&s instanceof Error)i=(t=s).status||t.statusCode||i;else if("number"===c&&0===l)i=s;else if("string"===c)o=s;else{if("object"!==c)throw new TypeError("argument #"+(l+1)+" unsupported type "+c);n=s}}"number"===typeof i&&(i<400||i>=600)&&r("non-error status code; use only 4xx or 5xx status codes");("number"!==typeof i||!a.message[i]&&(i<400||i>=600))&&(i=500);var p=e[i]||e[d(i)];t||(t=p?new p(o):new Error(o||a.message[i]),Error.captureStackTrace(t,e));p&&t instanceof p&&t.status===i||(t.expose=i<500,t.status=t.statusCode=i);for(var u in n)"status"!==u&&"statusCode"!==u&&(t[u]=n[u]);return t},e.exports.HttpError=function(){function e(){throw new TypeError("cannot construct abstract class")}return l(e,Error),e}(),e.exports.isHttpError=(i=e.exports.HttpError,function(e){return!(!e||"object"!==typeof e)&&(e instanceof i||e instanceof Error&&"boolean"===typeof e.expose&&"number"===typeof e.statusCode&&e.status===e.statusCode)}),function(e,t,o){t.forEach((function(t){var i,r=s(a.message[t]);switch(d(t)){case 400:i=function(e,t,o){var i=p(t);function r(e){var t=null!=e?e:a.message[o],l=new Error(t);return Error.captureStackTrace(l,r),n(l,r.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:t,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(r,e),c(r,i),r.prototype.status=o,r.prototype.statusCode=o,r.prototype.expose=!0,r}(o,r,t);break;case 500:i=function(e,t,o){var i=p(t);function r(e){var t=null!=e?e:a.message[o],l=new Error(t);return Error.captureStackTrace(l,r),n(l,r.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:t,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(r,e),c(r,i),r.prototype.status=o,r.prototype.statusCode=o,r.prototype.expose=!1,r}(o,r,t)}i&&(e[t]=i,e[r]=i)}))}(e.exports,a.codes,e.exports.HttpError)},61033:e=>{"function"===typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var o=function(){};o.prototype=t.prototype,e.prototype=new o,e.prototype.constructor=e}}},29477:(e,t,o)=>{"use strict";var i=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof o.g)return o.g;throw new Error("unable to locate global object")}();e.exports=t=i.fetch,i.fetch&&(t.default=i.fetch.bind(i)),t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response},40203:e=>{"use strict";e.exports=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){return e.__proto__=t,e}:function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(e,o)||(e[o]=t[o]);return e})},53910:(e,t,o)=>{"use strict";var i=o(17662);function r(e){if(!Object.prototype.hasOwnProperty.call(n.message,e))throw new Error("invalid status code: "+e);return n.message[e]}function n(e){if("number"===typeof e)return r(e);if("string"!==typeof e)throw new TypeError("code must be a number or string");var t=parseInt(e,10);return isNaN(t)?function(e){var t=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(n.code,t))throw new Error('invalid status message: "'+e+'"');return n.code[t]}(e):r(t)}e.exports=n,n.message=i,n.code=function(e){var t={};return Object.keys(e).forEach((function(o){var i=e[o],r=Number(o);t[i.toLowerCase()]=r})),t}(i),n.codes=function(e){return Object.keys(e).map((function(e){return Number(e)}))}(i),n.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},n.empty={204:!0,205:!0,304:!0},n.retry={502:!0,503:!0,504:!0}},51798:e=>{"use strict";e.exports=function(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join("").replace(/[^ _0-9a-z]/gi,"")}},42564:(e,t,o)=>{"use strict";o(29477),o(26340)},17662:e=>{"use strict";e.exports=JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a Teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Too Early","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')}}]);
//# sourceMappingURL=102.78bbe483.chunk.js.map