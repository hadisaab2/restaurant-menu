/*! For license information please see 384.bd0ff8a1.chunk.js.LICENSE.txt */
(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[384],{92733:(e,t,o)=>{"use strict";o.d(t,{A:()=>c});o(82483);var i=o(76279),r=o(41190);const n=r.Ay.section`
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
`;var d=o(56723);function c(e){let{images:t,activeLanguage:o="en",variant:r="theme1"}=e;return null!==t&&void 0!==t&&t.length?(0,d.jsxs)(n,{$variant:r,"data-theme12-slider":!0,children:[(0,d.jsx)(a,{"aria-hidden":!0}),(0,d.jsx)(l,{children:(0,d.jsx)(s,{children:(0,d.jsx)(i.A,{images:t,activeLanguage:o})})})]}):null}},89967:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>ps});var i=o(82483),r=o(41190),n=o(42751),a=o(22829);const l=r.Ay.div`
min-height: 100vh;
width: 100%;
position: relative;
background-color: ${e=>e.theme.backgroundColor};
font-family: ${e=>`${e.theme.font}, "Noto Kufi Arabic" !important`};
/* @media (min-width: 1024px) {
        width: 30%;
    } */
`,s=r.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
height: 100%;
position: relative;

`,d=r.Ay.div`
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter:${e=>e.showPopup?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showPopup?"blur(5px)":"blur(0px)"};
transition: all 1s ease-in-out;

    pointer-events: none; /* Allows pointer events to go through the overlay */
`,c=r.Ay.div`
position: fixed;
bottom:20px;
right:20px;
width:40px;
height:40px;
background-color:${e=>e.theme.mainColor};
border-radius:50%;
display: flex;
align-items: center;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
justify-content: center;
color:white;
font-size: 25px;
cursor: pointer;
`,p=r.Ay.div`
position: fixed;
bottom:70px;
right:20px;
width:40px;
height:40px;
background-color:${e=>e.theme.mainColor};
border-radius:50%;
display: flex;
align-items: center;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
justify-content: center;
color:white;
font-size: 25px;
cursor: pointer;
`,u=r.Ay.div`
position: absolute;
left: -5px;
top:-5px;
width:20px;
height:20px;
border-radius: 50%;
font-size: 10px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
color:${e=>e.theme.textColor};
background-color:${e=>e.theme.backgroundColor};

`,x=(0,r.Ay)(n.meu)`
transform: rotate(270deg);
width: 20px;
height: 20px;
`,h=(0,r.Ay)(a.vlb)`
width: 20px;
height: 20px;
`;r.Ay.div`
position: fixed;
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color:${e=>e.theme.textColor};
background-color:${e=>e.theme.backgroundColor};
`;var g=o(27320);const m=r.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`,f=(r.Ay.div`
width: 90%;
display: flex;
align-items: ${e=>"en"==e.activeLanuguage?"flex-start":"flex-end"};
flex-direction: column;
margin-top: 30px;
margin-bottom: 30px;
font-weight: 600;
color:${e=>e.theme.textColor}
`,r.Ay.div`
font-size: 27px;


`,r.Ay.div`
width: 90%;
display: flex;
align-items: center;
margin-top: 30px;
color:${e=>e.theme.searchTextColor};
height: 40px;
border-radius: 10px;
overflow: hidden;
position: relative;
flex-direction: row;
gap:5px

`),v=r.Ay.div`
width: 90%;
display: flex;
align-items: center;
color:${e=>e.theme.searchTextColor};
height: 40px;
border-radius: 10px;
overflow: hidden;
position: relative;

`,y=r.Ay.input`
width: 100%;
height:100%;
background-color: ${e=>e.theme.searchbackground};
border: 0;
outline: none;
padding-left: ${e=>"en"==e.activeLanguage?"30px":"0px"};
padding-right: ${e=>"en"==e.activeLanguage?"0px":"30px"};
color:${e=>e.theme.searchTextColor};
&::placeholder{
    color:${e=>e.theme.searchTextColor};
    opacity: 0.5;
}

`,b=(0,r.Ay)(g.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};

`,w=(r.Ay.div`
width: 90%;
display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 10px;
margin-left: 10px;

font-weight: 600;
color:${e=>e.theme.searchTextColor};
height: 40px;
font-size: 13px;

`,r.Ay.div`
height: 100%;
font-size: 14px;
padding-left: 10px;
padding-right: 10px;
border-radius: 10px;
font-weight: 300;
gap:5px;
flex-direction: row;
display: flex;
align-items:center;
justify-content: center;
background-color:${e=>e.theme.searchbackground};
color:${e=>e.theme.searchTextColor};
`),j=(0,r.Ay)(a.LZ_)`
color:${e=>e.theme.searchTextColor};
font-size: 14px;
`,C=r.Ay.button`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 12px auto 0;
  padding: 8px 20px;
  border-radius: 24px;
  border: 1.5px solid ${e=>e.theme.mainColor||"#333"};
  background: ${e=>e.theme.mainColor||"#333"};
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);

  &:hover {
    opacity: 0.9;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
`,$=r.Ay.span`
  display: flex;
  align-items: center;
  font-size: 18px;
`;var A=o(91965),k=o(93376),z=o(1901);const L=r.Ay.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;
`,S=r.Ay.div`
  overflow: scroll;
  width: 90%;
  display: flex;
  align-items: center;
  position:relative;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  height: 100px;
  /* Hide scrollbar in WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
  -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
`,T=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  /* transform: ${e=>`translateX(-${100*e.carouselPosition/4}%)`}; */
`,_=r.Ay.div`
  min-width: calc(100% / 4);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition:all 0.2s ease-in-out;
  color:${e=>e.categoryId==e.activeCategory?e.theme.categoryactive:e.theme.categoryunactive};
  line-height: ${e=>"ar"==e.activeLanuguage?"1.5":"null"};
  font-size: 14px;
`,I=r.Ay.div`
  width:75%;
  height:100%;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color:${e=>e.categoryId==e.activeCategory?e.theme.categoryActive:e.theme.categoryUnActive};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  transition: 0.2s all ease-in-out;
  color:${e=>e.categoryId==e.activeCategory?"white":"black"};//edit thiss
`,E=r.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;

`,N=r.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
background-color:${e=>e.categoryId==e.activeCategory?e.theme.categoryActiveIcon:e.theme.categoryUnactiveIcon};
transition: 0.2s all ease-in-out;

`,P=r.Ay.img`
width:20px;
height:20px;

`,F=r.Ay.div`
 display: flex;
justify-content: center; 
flex:0.8;
width: 100%;
`,D=r.Ay.span`
    width: 92%;
    /* overflow: hidden;
    text-overflow: ellipsis; */
    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 12px;
    color: ${e=>e.categoryId==e.activeCategory?e.theme.categoryActiveText||e.theme.categoryactivetext:e.theme.categoryUnactiveText||e.theme.categoryunactivetext||e.theme.textColor||"#333"};
  user-select: none !important;
  -webkit-user-select: none !important;  /* For Safari (iOS) */
  -moz-user-select: none !important;     /* For Firefox */
  -ms-user-select: none !important;      /* For Internet Explorer */
`,R=(0,r.Ay)(z.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
@media (min-width: 1024px) {
        right: 20px;
    }
`,U=(0,r.Ay)(z.NaI)`
position: absolute;
font-size: 22px;
left: 0px;
color:${e=>e.theme.textColor};
rotate: calc(180deg);
@media (min-width: 1024px) {
        left: 20px;
    }
`;var O=o(22139),M=o(58821),q=o(56723);function B(e){let{categories:t,activeCategory:o,setactiveCategory:r,carouselPosition:n,setcarouselPosition:a}=e;const{restaurantName:l}=(0,k.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[d].activeLanguage})),p=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[d]})),u=(0,i.useRef)([]);return(0,i.useEffect)((()=>{u.current=u.current.slice(0,t.length)}),[t.length]),(0,i.useEffect)((()=>{u.current[n]&&u.current[n].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[n]),(0,q.jsxs)(L,{children:[(null===t||void 0===t?void 0:t.length)>4&&n>=1&&(0,q.jsx)(U,{onClick:()=>{n>0&&a(n-1)}}),(0,q.jsx)(S,{children:(0,q.jsx)(T,{carouselPosition:n,children:null===t||void 0===t?void 0:t.sort(((e,t)=>t.priority-e.priority)).map(((e,t)=>(0,q.jsx)(_,{activeLanuguage:c,activeCategory:o,categoryId:e.id,onClick:()=>((e,t)=>{(0,O.c)(e),r(e),a(t)})(e.id,t),ref:e=>u.current[t]=e,children:(0,q.jsxs)(I,{activeCategory:o,categoryId:e.id,children:[(0,q.jsx)(E,{children:(0,q.jsx)(N,{activeCategory:o,categoryId:e.id,children:(0,q.jsx)(P,{src:e.image_url?(0,M.V)(e.image_url):e.isAllItems&&null!==p&&void 0!==p&&p.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${p.logoURL}`:e.isAllItems&&null!==p&&void 0!==p&&p.cover_url?`https://storage.googleapis.com/ecommerce-bucket-testing/${p.cover_url}`:""})})}),(0,q.jsx)(F,{children:(0,q.jsx)(D,{activeCategory:o,categoryId:e.id,children:"en"==c?e.en_category:e.ar_category})})]})})))})}),(null===t||void 0===t?void 0:t.length)>4&&(0,q.jsx)(R,{onClick:()=>{n<t.length-4&&a(n+1)}})]})}const W=r.Ay.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;
`,H=r.Ay.div`
  overflow: scroll;
  width: 90%;
  display: flex;
  align-items: center;
  position:relative;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  height: 40px;
  /* Hide scrollbar in WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
  -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
`,X=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;

`,Y=r.Ay.div`
  display: inline-flex;
  box-sizing: border-box;
  min-width: calc(100% / 4);
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition:all 0.2s ease-in-out;
  color:${e=>e.categoryId==e.activeCategory?e.theme.categoryactive:e.theme.categoryunactive};
  line-height: ${e=>"ar"==e.activeLanuguage?"1.5":"null"};
  font-size: 14px;
  white-space: nowrap; /* Prevent wrapping of text */
  flex-shrink: 0; /* Prevent shrinking of the item */
  height: 100%;
  margin-left: ${e=>0!=e.index&&"8px"};

`,V=r.Ay.div`
  height:100%;
  width: 100%;

  border-radius: 50px;
  padding-left: 10px; /* Add padding to left and right */
  padding-right: 10px; /* Add padding to left and right */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color:${e=>e.categoryId==e.activeCategory?e.theme.categoryActive:e.theme.categoryUnActive};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  transition: 0.2s all ease-in-out;
  color:${e=>e.categoryId==e.activeCategory?"white":"black"};//edit thiss
`,K=(r.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;

`,r.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
background-color:${e=>e.categoryId==e.activeCategory?e.theme.categoryActiveIcon:e.theme.categoryUnactiveIcon};
transition: 0.2s all ease-in-out;

`,r.Ay.img`
width:20px;
height:20px;

`,r.Ay.div`
 display: flex;
justify-content: center; 

width: auto;

`),J=r.Ay.span`

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 12px;
  user-select: none !important;
  -webkit-user-select: none !important;  /* For Safari (iOS) */
  -moz-user-select: none !important;     /* For Firefox */
  -ms-user-select: none !important;      /* For Internet Explorer */
`,G=(0,r.Ay)(z.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
`;function Z(e){let{categories:t,activeCategory:o,setactiveCategory:r,carouselPosition:n,setcarouselPosition:a}=e;const{restaurantName:l}=(0,k.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[d].activeLanguage})),p=(0,i.useRef)([]);return(0,i.useEffect)((()=>{p.current=p.current.slice(0,t.length)}),[t.length]),(0,i.useEffect)((()=>{p.current[n]&&p.current[n].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[n]),(0,q.jsxs)(W,{children:[(0,q.jsx)(H,{children:(0,q.jsx)(X,{children:null===t||void 0===t?void 0:t.sort(((e,t)=>t.priority-e.priority)).map(((e,t)=>(0,q.jsx)(Y,{activeLanuguage:c,activeCategory:o,categoryId:e.id,onClick:()=>((e,t)=>{(0,O.c)(e),r(e),a(t)})(e.id,t),index:t,ref:e=>p.current[t]=e,children:(0,q.jsx)(V,{activeCategory:o,categoryId:e.id,children:(0,q.jsx)(K,{children:(0,q.jsx)(J,{activeCategory:o,categoryId:e.id,children:"en"===c?e.en_category:e.ar_category})})})},e.id)))})}),(null===t||void 0===t?void 0:t.length)>4&&(0,q.jsx)(G,{onClick:()=>{n<t.length-4&&a(n+1)}})]})}function Q(e){let{categories:t,activeCategory:o,setactiveCategory:i,carouselPosition:r,setcarouselPosition:n}=e;const{restaurantName:a}=(0,k.g)(),l=window.location.hostname.split(".")[0],s="menugic"!==l&&"localhost"!==l&&"www"!==l?l:a,d=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[s]}));return(0,q.jsxs)(q.Fragment,{children:["vertical-category"==d.category_type&&(0,q.jsx)(B,{categories:t,activeCategory:o,setactiveCategory:i,carouselPosition:r,setcarouselPosition:n}),"horizantal-withoutIcon"==d.category_type&&(0,q.jsx)(Z,{categories:t,activeCategory:o,setactiveCategory:i,carouselPosition:r,setcarouselPosition:n})]})}var ee=o(11671);const te=r.Ay.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 10vh;
width: 100%;
`,oe=r.Ay.div`
display: flex;
align-items: center;
position: relative;
height: 10vh;
justify-content: space-between;
width: 90%;
position: relative;

`,ie=r.Ay.img`
max-width: 250px;
max-height: 120px;
position: absolute;
margin-right: 7px;
/* margin-left: 20px; */

`,re=r.Ay.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`,ne=r.Ay.div`
display: flex;
flex-direction: row;
position: relative;
border-radius: 10px;
width:60px;
height: 25px;
display: flex;
align-items: center;
justify-content: center;

overflow: hidden;
`,ae=r.Ay.div`
width: 100%;
background-color: ${e=>e.theme.languagebackground};
opacity: 0.6;
position: absolute;
height: 100%;
z-index: 1;
border-radius: 10px;


`,le=r.Ay.div`
position: absolute;
background-color: ${e=>e.theme.languagebackground};
left:${e=>"en"==e.activeLanguage?"0px":"32px"} ;
transition:all ease-in-out 0.2s;
height: 100%;
width: 50%;
z-index: 2;

`,se=r.Ay.div`
z-index: 3;
flex:1;
height: 100%;
color:${e=>e.theme.languageTextColor};
text-align: center;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;

/* opacity: ${e=>e.activeLanguage==e.language?"1":"0.7"} ;
/* transition:all ease-in-out 0.2s; */
`,de=(0,r.Ay)(ee.IMk)`
color: ${e=>e.theme.mainColor};
font-size: 27px;

`;var ce=o(17123);function pe(e){let{setshowSidebar:t,showSidebar:o}=e;const{restaurantName:i}=(0,k.g)(),r=window.location.hostname.split(".")[0],n="menugic"!==r&&"localhost"!==r&&"www"!==r?r:i,a=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[n]})),l=(0,A.wA)(),s=e=>{l((0,ce.y)({name:n,activeLanguage:e}))};return(0,q.jsxs)(te,{children:[(0,q.jsx)(ie,{src:a.logoURL&&`https://storage.googleapis.com/ecommerce-bucket-testing/${a.logoURL}`}),(0,q.jsxs)(oe,{children:[(0,q.jsx)(re,{children:(0,q.jsx)(de,{onClick:()=>{t(!o)}})}),(0,q.jsx)(re,{children:"en&ar"==(null===a||void 0===a?void 0:a.languages)&&(0,q.jsxs)(ne,{children:[(0,q.jsx)(ae,{}),(0,q.jsx)(le,{activeLanguage:a.activeLanguage}),(0,q.jsx)(se,{activeLanguage:a.activeLanguage,language:"en",onClick:()=>s("en"),children:"En"}),(0,q.jsx)(se,{activeLanguage:a.activeLanguage,language:"ar",onClick:()=>s("ar"),children:"Ar"})]})})]})]})}var ue=o(92733);function xe(e){var t,o;let{activeCategory:i,setactiveCategory:r,categories:n,setSearchText:a,searchText:l,setshowSidebar:s,showSidebar:d,carouselPosition:c,setcarouselPosition:p,popupHandler:u,showMenuSlider:x,sliderImages:h,menuMode:g,onModeChange:L}=e;const{restaurantName:S}=(0,k.g)(),T=window.location.hostname.split(".")[0],_="menugic"!==T&&"localhost"!==T&&"www"!==T?T:S,I=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[_].activeLanguage})),E={dine_in:{en:"Dine In",ar:"\u062a\u0646\u0627\u0648\u0644 \u0641\u064a \u0627\u0644\u0645\u0637\u0639\u0645"},delivery:{en:"Delivery",ar:"\u062a\u0648\u0635\u064a\u0644"}};return(0,q.jsxs)(m,{children:[(0,q.jsx)(pe,{setshowSidebar:s,showSidebar:d}),g&&(0,q.jsxs)(C,{onClick:()=>L("dine_in"===g?"delivery":"dine_in"),children:[(0,q.jsx)($,{children:"dine_in"===g?(0,q.jsx)(z.NtI,{}):(0,q.jsx)(z.Xpo,{})}),"ar"===I?null===(t=E[g])||void 0===t?void 0:t.ar:null===(o=E[g])||void 0===o?void 0:o.en]}),x&&(0,q.jsx)(ue.A,{images:h,activeLanguage:I||"en",variant:"theme2"}),(0,q.jsx)(Q,{categories:n,activeCategory:i,setactiveCategory:r,carouselPosition:c,setcarouselPosition:p}),(0,q.jsxs)(f,{children:[(0,q.jsxs)(v,{children:[(0,q.jsx)(b,{activeLanguage:I}),(0,q.jsx)(y,{type:"text",activeLanguage:I,dir:"en"==I?"ltr":"rtl",placeholder:"en"==I?"Search Category":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{a(e.target.value)},value:l})]}),(0,q.jsxs)(w,{onClick:()=>{window.history.pushState({},""),u("share")},children:["en"==I&&(0,q.jsx)(j,{}),"en"==I?"Share":"\u0646\u0634\u0631","en"!==I&&(0,q.jsx)(j,{})]})]})]})}var he=o(99891);const ge=r.Ay.div`
 width: 100%;
 margin-top: 30px;
 padding-bottom: 20px;
 display: flex;
 justify-content: center;
`,me=r.Ay.div`
 flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: ${e=>e.$noMinHeight?"0":"70vh"};
  opacity: 1;
  transition:all 0.7s ease-in-out;
`,fe=(r.Ay.div`
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
  font-size: 19px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor};
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  letter-spacing: 0.3px;
  padding: 10px 14px;
  border-radius: 12px;
  background: ${e=>e.theme.BoxColor||e.theme.popupbackgroundColor||e.theme.categoryUnActive};
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.08);
`,r.Ay.button`
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
    0% { opacity: 0.7; transform: scale(0.98); }
    50% { opacity: 1; transform: scale(1.05); }
    100% { opacity: 0.7; transform: scale(0.98); }
  }
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
  animation: pulse 0.8s ease-in-out infinite;

  @keyframes pulse {
    0% { opacity: 0.3; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1.1); }
    100% { opacity: 0.3; transform: scale(0.9); }
  }
`,r.Ay.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`),ve=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`,ye=r.Ay.h3`
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
`,be=(r.Ay.button`
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
`),we=r.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${e=>e.theme.mainColor};
  font-size: 13px;
`,je=r.Ay.div`
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
`,Ce=r.Ay.button`
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
`,$e=r.Ay.div`
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
`,Ae=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,ke=r.Ay.div`
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
`,ze=r.Ay.div`
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
`,Se=r.Ay.h4`
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
`,Te=r.Ay.div`
  font-size: 15px;
  font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#007bff"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${e=>"ar"===e.activeLanguage?"row-reverse":"row"};
`,_e=r.Ay.span`
  font-size: 14px;
  color: ${e=>e.theme.BoxPriceColor||e.theme.textColor||"#666"};
  text-decoration: line-through;
  opacity: 0.6;
`,Ie=r.Ay.div`
  position: relative;
  width: 100%;
`,Ee=r.Ay.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    @media (min-width: 1024px) {
        width: 20%;
    }
`,Ne=r.Ay.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.theme.BoxColor};
    border-radius: 20px;
    position: relative;

    //cjhange loadeeerr wrappperr and this oneee colorrrr

`,Pe=r.Ay.img`
width:90%;
height:100%;
object-fit: cover;
border-radius: 10px;
visibility: ${e=>e.imageLoaded?"visible":"hidden"};
/* display:${e=>e.imageLoaded?"block":"none"} */
`,Fe=r.Ay.div`
position: relative;
width:100%;
height: 20vh;
overflow: hidden;
margin-top: 10px;
display: flex;
justify-content: center;
border-radius: 10px;
@media (min-width: 1024px) {
  height: 30vh;
    }


`,De=r.Ay.div`
width:90%;
display: flex;
justify-content: center;
flex-direction: column;
text-align: ${e=>"en"==e.activeLanuguage?"left":"right"};
position: relative;
align-items: ${e=>"en"==e.activeLanuguage?"flex-start":"flex-end"};
gap:5px;
height: 10vh;
margin-top: 5px;

`,Re=r.Ay.span`
font-size: ${e=>e.fontSize};
font-weight: 500;
color:${e=>e.theme.BoxTextColor};

display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3em; /* Adjust based on line-height */
  line-height: 1.5em; /* Adjust based on your font size and design */



`,Ue=r.Ay.div`
display: flex;
flex-direction: row;
gap:5px;
`,Oe=r.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;
text-decoration:${e=>e.discounted?"line-through":"none"};


`,Me=r.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;

`,qe=r.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Be=r.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${qe} 1s linear infinite; /* Apply animation */
`,We=r.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:91%;
height: 20vh;
border-radius: 10px;
overflow: hidden;
top: 10px;
  z-index: 3;
  background-color: ${e=>e.theme.categoryUnactive};

`,He=r.Ay.div`
  position: absolute;
  top: 8px;
  right: 8px;
  left: auto;
  bottom: auto;
  z-index: 4;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 8px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText};
  border-radius: 4px;
  line-height: 1.2;
`;var Xe=o(18907);const Ye=(e,t)=>"delivery"===t&&e.delivery_price?parseFloat(e.delivery_price):parseFloat(e.en_price),Ve=(o(34304),i.forwardRef(((e,t)=>{var o,r,n,a;let{plate:l,setactivePlate:s,activePlate:d,index:c,showPopup:p,setSearchParams:u,searchParams:x,activeCategoryId:h,categories:g,disableDetails:m,menuMode:f}=e;const{restaurantName:v}=(0,k.g)(),y=window.location.hostname.split(".")[0],b="menugic"!==y&&"localhost"!==y&&"www"!==y?y:v,w=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[b]})),[j,C]=((0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[b].activeLanguage})),(0,i.useState)(!1));let $;switch(null===w||void 0===w?void 0:w.currency){case"dollar":$="$";break;case"lb":$="L.L.";break;case"gram":$="g";break;case"kilogram":$="kg";break;default:$=""}const z=g.find((e=>e.id==h));let L;L=0===parseFloat(z.discount)?parseFloat(l.discount):parseFloat(z.discount);const S=null!==(o=null===(r=l.images)||void 0===r?void 0:r.findIndex((e=>e.id===l.new_cover_id)))&&void 0!==o?o:-1,T=S>=0&&(null===(n=l.images)||void 0===n||null===(a=n[S])||void 0===a?void 0:a.url),_=null!==w&&void 0!==w&&w.logoURL?(0,M.V)(w.logoURL):null,I=T?(0,M.V)(l.images[S].url):_||"";return(0,q.jsx)(Ee,{index:c,activePlate:d,className:"lazy-load",children:(0,q.jsxs)(Ne,{children:[!j&&(0,q.jsx)(We,{children:(0,q.jsx)(Be,{})}),(0,q.jsxs)(Fe,{onClick:()=>{if(null==d&&j&&!p){m||s(c);const e=new URLSearchParams(x);e.set("productId",null===l||void 0===l?void 0:l.id),h&&e.set("categoryId",h),u(e),window.history.pushState({},"",`?${e.toString()}`),document.body.style.overflow="hidden"}},children:[l.new&&(0,q.jsx)(He,{children:"en"===(null===w||void 0===w?void 0:w.activeLanguage)?"NEW !":"! \u062c\u062f\u064a\u062f"}),(0,q.jsx)(Pe,{ref:t,onLoad:()=>{C(!0)},src:I,imageLoaded:j})]}),(0,q.jsxs)(De,{activeLanuguage:null===w||void 0===w?void 0:w.activeLanguage,children:[(0,q.jsx)(Re,{fontSize:null===w||void 0===w?void 0:w.font_size,children:"en"===(null===w||void 0===w?void 0:w.activeLanguage)?l.en_name:l.ar_name}),(()=>{const e=Ye(l,f);return!isNaN(e)&&e>0?(0,q.jsxs)(Ue,{children:[(0,q.jsx)(Oe,{discounted:0!=L,children:(0,Xe.T)(e,$)}),(0,q.jsx)(Me,{children:0!=L&&(0,Xe.T)(e*(1-parseFloat(L)/100),$)})]}):null})()]})]})})})));var Ke=o(10448),Je=o(34304),Ge=o.n(Je);const Ze=r.Ay.div`
  
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

`,Qe=r.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,et=(r.i7`
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
`),tt=r.Ay.div`
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
`,ot=r.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
`,it=r.Ay.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  flex-shrink: 0;
`,rt=r.Ay.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,nt=r.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,at=r.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${nt} 1s linear infinite; /* Apply animation */
`,lt=r.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,st=r.Ay.img`
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
`,dt=r.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,ct=(0,r.Ay)(Ke.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,pt=(0,r.Ay)(Ke.m6W)`
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
`,ut=(0,r.Ay)(Ke.OQo)`
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
`,xt=r.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${dt} 0.4s ease-in-out;
`,ht=r.Ay.div`
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
`,gt=r.i7`
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
`,mt=r.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${gt} 1s ease-in-out;
`,ft=(r.Ay.div`
  width:90%;
  /* height: ${e=>e.CloseAnimation?"45vh":"25vh"}; */
  height: ${e=>e.squareDimension?"45vh":"60vh"};

  border-radius:40px;
  margin-top: 0px;
  display:flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${Qe} 0.4s;
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
`),vt=r.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,yt=r.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${ft} 0.8s ease-in-out;

`,bt=r.Ay.div`
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
`,wt=r.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:${e=>"en"==e.activeLanguage?"left":"right"} ;
  opacity: 1;
  margin-top: 5px;
`,jt=r.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,Ct=r.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,$t=r.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,At=r.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,kt=r.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,zt=r.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,Lt=r.Ay.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${zt} 0.7s ease-in-out;
  background-color: ${e=>e.theme.backgroundColor};

  display: ${e=>e.CloseAnimation?"flex":"none"};
  box-shadow: 0px -3px 5px rgba(180, 180, 180, 0.1); /* Slight shadow on the top */
  padding-bottom: 10px;
  margin-top: 30px;
  @media (min-width: 1024px) {
        width: 50%;
    }
`,St=r.Ay.button`
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
`,Tt=r.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,_t=r.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,It=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Et=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Nt=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,Pt=r.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,Ft=r.Ay.div`
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
  animation: ${Pt} 0.4s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,Dt=r.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`,Rt=r.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,Ut=r.Ay.input`
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

`,Ot=r.Ay.button`
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
`,Mt=r.Ay.div`
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
`,qt=r.Ay.button`
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
`,Bt=r.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`;var Wt=o(86001);const Ht=r.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display: flex;
`,Xt=r.Ay.div`
display: flex;
flex-direction: row;
`,Yt=r.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,Vt=r.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,Kt=r.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,Jt=r.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,Gt=r.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,Zt=r.Ay.span`
position: absolute;
left: 0;

`,Qt=r.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,eo=(0,r.Ay)(n.Z0P)`
    animation:1.2s ${Qt}  linear infinite ;
    position: absolute;
`;function to(e){let{carouselIndex:t,images:o,CloseAnimation:i,carouselSwiped:r}=e;return(0,q.jsxs)(Ht,{CloseAnimation:i,children:[(0,q.jsxs)(Xt,{children:[(0,q.jsx)(Yt,{carouselIndex:t,children:(0,q.jsx)(Vt,{})}),o.map((e=>(0,q.jsx)(Kt,{children:(0,q.jsx)(Jt,{})})))]}),!r&&(0,q.jsxs)(Gt,{children:[(0,q.jsx)(Zt,{children:"Swipe"}),(0,q.jsx)(eo,{})]})]})}r.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,r.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const oo=r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,io=(r.Ay.label`
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
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(Ge().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`),ro=r.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,no=r.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,ao=r.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let t=e.theme.formColor;if(Ge().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.1)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.1)`)):t}};
  font-size:10px;

`,lo=r.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,so=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${e=>e.theme.formColor};

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);var co=o(71481),po=o(41235);function uo(e){let{component:t,formData:o,handleChange:r,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||[]);return(0,q.jsxs)(io,{index:n,children:[(0,q.jsx)(oo,{children:t.label}),t.values.map((e=>(0,q.jsxs)(no,{children:[s.some((t=>t===e.label))?(0,q.jsx)(lo,{onClick:()=>{(e=>{let o=s.filter((t=>t!==e.label));d(o),r(t.key,o)})(e)},children:(0,q.jsx)(po.RXm,{size:"15px"})}):(0,q.jsx)(ao,{onClick:()=>{(e=>{d([...s,e.label]),r(t.key,[...s,e.label])})(e)},children:(0,q.jsx)(co.OiG,{})}),(0,q.jsx)(ro,{children:e.label})]}))),(c=a,c in l?(0,q.jsx)(so,{children:"This field is required"}):null)]});var c}const xo=r.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(Ge().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,ho=r.Ay.div`
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
`,go=r.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,mo=r.Ay.ul`
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

`,fo=r.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,vo=r.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,yo=r.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,bo=r.Ay.div`
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
`,wo=(r.Ay.label`
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

`);function jo(e){var t;let{component:o,formData:r,handleChange:n,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;console.log(s),console.log(d);const[c,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===(t=r[o.key])||void 0===t?void 0:t.value)||""),h=(0,i.useRef)(null),g=e=>{x(e.label),p(!1),n(o.key,e)},m=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,q.jsxs)(xo,{ref:h,index:l,children:[(0,q.jsx)(oo,{children:o.label}),o.data.values.length>8?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(ho,{onClick:()=>p((e=>!e)),children:[u||a,(0,q.jsx)(go,{className:c?"up":"",children:"\u25bc"})]}),(0,q.jsx)(mo,{isOpen:c,children:o.data.values.map(((e,t)=>(0,q.jsx)(fo,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},t)))})]}):(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(vo,{children:o.data.values.map(((e,t)=>(0,q.jsx)(yo,{children:(0,q.jsx)(bo,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,q.jsx)(wo,{children:"This field is required"}):null)]});var f}const Co=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(Ge().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,$o=r.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,Ao=r.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,ko=r.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,zo=r.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,Lo=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function So(e){let{component:t,formData:o,handleChange:r,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||"");return(0,q.jsxs)(Co,{index:n,children:[(0,q.jsx)(oo,{children:t.label}),t.values.map((e=>(0,q.jsxs)(Ao,{children:[(0,q.jsx)(ko,{onClick:()=>{(e=>{d(e),r(t.key,e)})(e)},children:(0,q.jsx)(zo,{selected:s.label==e.label})}),(0,q.jsx)($o,{children:e.label})]}))),(c=a,c in l?(0,q.jsx)(Lo,{children:"This field is required"}):null)]});var c}function To(e){let{formSchema:t,onPriceChange:o,basePrice:r,formData:n,setFormData:a,finalDiscount:l,formErrors:s}=e;(0,i.useEffect)((()=>{c(n)}),[n]);const d=(e,t)=>{a((o=>({...o,[e]:t})))},c=e=>{let i=parseFloat(r)||0,n=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const o=t.values.find((t=>t.label===e)),i=!isNaN(Number(o.value));o&&o.value&&i&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")&&(n-=parseFloat(o.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const o=t.data.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),r=!isNaN(Number(o.value));o&&r&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?n-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}else if("radio"===t.type&&t.values){const o=t.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),r=!isNaN(Number(o.value));o&&r&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?n-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}}));const a=i+n,l=a%1!==0?a.toFixed(2):a.toFixed(0);o(l)};return(0,q.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return console.log(e.key),(0,q.jsx)(uo,{component:e,formData:n,handleChange:d,index:t,componentKey:e.key,formErrors:s});case"select":return console.log(e.key),(0,q.jsx)(jo,{component:e,formData:n,handleChange:d,index:t,componentKey:e.key,formErrors:s});case"radio":return(0,q.jsx)(So,{component:e,formData:n,handleChange:d,index:t,componentKey:e.key,formErrors:s});default:return null}})(e,t)))})}var _o=o(42770),Io=o(73556),Eo=(o(20965),o(16104)),No=o(88620),Po=o(57526);o(44014),o(70045),o(5084);const Fo=o(34304);function Do(e){var t,o,r,n,l,s,d,c,p,u,x,h,g,m;let{activePlate:f,setactivePlate:v,menu:y,plates:b,productPositions:w,categories:j,activeCategoryId:C,setSearchParams:$,searchParams:L}=e;const{restaurantName:S}=(0,k.g)(),T=window.location.hostname.split(".")[0],_="menugic"!==T&&"localhost"!==T&&"www"!==T?T:S,I=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[_]})),E=j.find((e=>e.id==C)),{response:N}=(0,Eo.$)({productId:null===(t=b[f])||void 0===t?void 0:t.id});(0,i.useEffect)((()=>{var e;let t=null;var o,i;Fo.isEmpty(null===(e=b[f])||void 0===e?void 0:e.form_json)||(t=Fo.isEmpty(JSON.parse(null===(o=b[f])||void 0===o?void 0:o.form_json))?null===E||void 0===E?void 0:E.form_json:null===(i=b[f])||void 0===i?void 0:i.form_json);if(Fo.isEmpty(t))F({});else{var r;const e=JSON.parse(t);if(F(e),2===(null===e||void 0===e?void 0:e.version)&&(null===e||void 0===e||null===(r=e.sizes)||void 0===r?void 0:r.length)>0){var n;const t=parseFloat(null===(n=b[f])||void 0===n?void 0:n.en_price)||0,o=e.sizes.find((e=>"absolute"===e.priceMode&&Number(e.priceModifier)===t));R((()=>({...(0,Io.KE)(),sizeId:o?o.id:e.sizes[0].id})))}}}),[I.activeLanguage]);const[P,F]=(0,i.useState)({}),[D,R]=(0,i.useState)({}),[U,O]=(0,i.useState)({}),B=(0,A.wA)(),[W,H]=(0,i.useState)(1),[X,Y]=(0,i.useState)(!1),V=(0,i.useRef)(null),[K,J]=(0,i.useState)(!1),[G,Z]=(0,i.useState)(1),[Q,ee]=(0,i.useState)({x:0,y:0}),[te,oe]=(0,i.useState)(!1),ie=(0,i.useRef)(null),re=(0,i.useRef)(null),ne=(0,i.useRef)(0);let ae;ae=0===parseFloat(E.discount)?parseFloat(b[f].discount):parseFloat(E.discount);const le=(null===(o=b[f])||void 0===o?void 0:o.en_price)||"0",se=le.includes(".")?parseFloat(le).toFixed(2):parseFloat(le).toFixed(0),[de,ce]=(0,i.useState)(se),[pe,ue]=(0,i.useState)(""),xe=e=>{ce(e)},[he,ge]=(0,i.useState)(!0),[me,fe]=(0,i.useState)(0),ve=()=>{setTimeout((()=>{v(null),document.body.style.overflow="auto"}),700),ge(!1),L.delete("productId"),$(L)},[ye,be]=(0,i.useState)(!1),we=()=>{Y(!0),fe(me+1)},je=()=>{Y(!0),fe(me-1)},Ce=(0,i.useRef)(null),[$e,Ae]=(0,i.useState)(null),ke=()=>{Z(1),ee({x:0,y:0}),J(!0)};(0,i.useEffect)((()=>{const e=()=>{ve()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const ze=2===(null===P||void 0===P?void 0:P.version)&&Array.isArray(null===P||void 0===P?void 0:P.sizes);const Le=null!==I&&void 0!==I&&I.logoURL?(0,M.V)(I.logoURL):null;let Se=[...null!==(r=null===(n=b[f])||void 0===n?void 0:n.images)&&void 0!==r?r:[]];0===Se.length&&Le&&(Se=[{id:"fallback-logo",url:I.logoURL,isFallback:!0}]);const Te=Se.findIndex((e=>{var t;return e.id===(null===(t=b[f])||void 0===t?void 0:t.new_cover_id)}));if(Te>0){const[e]=Se.splice(Te,1);Se.unshift(e)}const[_e,Ie]=(0,i.useState)({}),Ee=e=>{Ie((t=>({...t,[e]:!0})))},Ne="en"===(null===I||void 0===I?void 0:I.activeLanguage)?null===(l=b[f])||void 0===l?void 0:l.en_description:null===(s=b[f])||void 0===s?void 0:s.ar_description;let Pe;switch(null===I||void 0===I?void 0:I.currency){case"dollar":Pe="$";break;case"lb":Pe="L.L.";break;case"gram":Pe="g";break;case"kilogram":Pe="kg";break;default:Pe=""}let Fe=JSON.parse(I.features);const De=Boolean(null===(d=b[f])||void 0===d?void 0:d.out_of_stock)||1===Number(null===(c=b[f])||void 0===c?void 0:c.out_of_stock),Re=(null===I||void 0===I?void 0:I.product_details_carousel_style)||"normal";return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Ze,{CloseAnimation:he,children:[(0,q.jsx)(ht,{CloseAnimation:he,children:(0,q.jsx)(mt,{children:"en"==I.activeLanguage?null===y||void 0===y?void 0:y.en_category:null===y||void 0===y?void 0:y.ar_category})}),(0,q.jsx)(et,{squareDimension:null===(p=b[f])||void 0===p?void 0:p.square_dimension,CloseAnimation:he,isNormalCarousel:"normal"===Re,children:1===Se.length?(0,q.jsx)(ot,{carouselIndex:0,children:(0,q.jsx)(it,{children:(0,q.jsxs)(rt,{children:[!_e[0]&&(0,q.jsx)(lt,{children:(0,q.jsx)(at,{})}),(0,q.jsx)(st,{src:Se[0].url?(0,M.V)(Se[0].url):Le||"",onLoad:()=>Ee(0),onError:e=>{Le&&e.target.src!==Le&&(e.target.src=Le)},CloseAnimation:he,Loaded:_e[0],alt:"Image 0"}),(0,q.jsx)(Ot,{onClick:ke,children:(0,q.jsx)(z.gff,{})})]})})}):"normal"===Re?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(pt,{CloseAnimation:he,onClick:()=>{Y(!0),0!==me&&je()}}),(0,q.jsx)(ut,{CloseAnimation:he,onClick:()=>{Y(!0),Se.length>me+1&&we()}}),(0,q.jsx)(ot,{carouselIndex:me,ref:Ce,onTouchStart:e=>{Ae(e.touches[0].clientX)},onTouchMove:e=>{if($e){const t=e.touches[0].clientX-$e;t>5?0!==me&&je():t<-5&&Se.length>me+1&&we(),Ae(null)}},children:Se.map(((e,t)=>(0,q.jsx)(it,{children:(0,q.jsxs)(rt,{children:[!_e[t]&&(0,q.jsx)(lt,{children:(0,q.jsx)(at,{})}),(0,q.jsx)(st,{src:_e[t]||t===me?e.url?(0,M.V)(e.url):Le||"":"",onLoad:()=>Ee(t),onError:e=>{Le&&e.target.src!==Le&&(e.target.src=Le)},CloseAnimation:he,Loaded:_e[t],alt:`Image ${t}`}),me===t&&(0,q.jsx)(Ot,{onClick:ke,children:(0,q.jsx)(z.gff,{})})]})},e.id||t)))})]}):"effect-cards"===Re?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(pt,{CloseAnimation:he,onClick:()=>V.current&&V.current.slidePrev()}),(0,q.jsx)(tt,{children:(0,q.jsx)(No.RC,{modules:[Po.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{V.current=e},onSlideChange:e=>{fe(e.realIndex),Y(!0)},children:Se.map(((e,t)=>(0,q.jsx)(No.qr,{children:(0,q.jsxs)(rt,{children:[!_e[t]&&(0,q.jsx)(lt,{children:(0,q.jsx)(at,{})}),(0,q.jsx)(st,{src:_e[t]||t===me?e.url?(0,M.V)(e.url):Le||"":"",onLoad:()=>Ee(t),onError:e=>{Le&&e.target.src!==Le&&(e.target.src=Le)},CloseAnimation:he,Loaded:_e[t],$cardSlide:!0,alt:`Image ${t}`}),me===t&&(0,q.jsx)(Ot,{onClick:ke,children:(0,q.jsx)(z.gff,{})})]})},e.id||t)))},null===(u=b[f])||void 0===u?void 0:u.id)}),(0,q.jsx)(ut,{CloseAnimation:he,onClick:()=>V.current&&V.current.slideNext()})]}):(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(tt,{children:(0,q.jsx)(No.RC,{onSwiper:e=>{V.current=e},onSlideChange:e=>{fe(e.realIndex),Y(!0)},modules:[Po.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:Se.map(((e,t)=>(0,q.jsx)(No.qr,{children:(0,q.jsxs)(rt,{children:[!_e[t]&&(0,q.jsx)(lt,{children:(0,q.jsx)(at,{})}),(0,q.jsx)(st,{src:_e[t]||t===me?e.url?(0,M.V)(e.url):Le||"":"",onLoad:()=>Ee(t),onError:e=>{Le&&e.target.src!==Le&&(e.target.src=Le)},CloseAnimation:he,Loaded:_e[t],$cardSlide:!0,alt:`Image ${t}`}),me===t&&(0,q.jsx)(Ot,{onClick:ke,children:(0,q.jsx)(z.gff,{})})]})},e.id||t)))},null===(x=b[f])||void 0===x?void 0:x.id)})})}),1!==Se.length&&(0,q.jsx)(to,{images:Se,carouselIndex:me,CloseAnimation:he,carouselSwiped:X}),(0,q.jsx)(vt,{children:(0,q.jsx)(yt,{children:(0,q.jsxs)(bt,{CloseAnimation:he,activeLanguage:I.activeLanguage,children:[(0,q.jsx)(wt,{activeLanguage:I.activeLanguage,children:"en"==I.activeLanguage?null===(h=b[f])||void 0===h?void 0:h.en_name:null===(g=b[f])||void 0===g?void 0:g.ar_name}),!Fo.isEmpty(null===(m=b[f])||void 0===m?void 0:m.en_price)&&(0,q.jsxs)($t,{children:[(0,q.jsx)(At,{activeLanguage:I.activeLanguage,discounted:0!=ae,children:(0,Xe.T)(de,Pe)}),0!=ae&&(0,q.jsx)(kt,{activeLanguage:I.activeLanguage,children:(0,Xe.T)(de*(1-parseFloat(ae)/100),Pe)})]}),!Fo.isEmpty(Ne)&&(0,q.jsx)(jt,{activeLanguage:I.activeLanguage,dangerouslySetInnerHTML:{__html:Ne}}),De&&(0,q.jsx)(Ct,{children:"en"===I.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),ze&&(0,q.jsx)(_o.A,{options:P,formData:D,setFormData:R,formErrors:U,activeLanguage:I.activeLanguage,basePrice:se,onPriceChange:xe}),!ze&&(null===P||void 0===P?void 0:P.components)&&(0,q.jsx)(To,{formSchema:P,onPriceChange:xe,formData:D,setFormData:R,basePrice:se,formErrors:U}),(0,q.jsxs)(Dt,{activeLanguage:I.activeLanguage,children:[(0,q.jsx)(Rt,{children:"en"==I.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,q.jsx)(Ut,{activeLanguage:I.activeLanguage,onChange:e=>ue(e.target.value),placeholder:"en"==I.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(null===Fe||void 0===Fe?void 0:Fe.cart)&&!De&&(0,q.jsxs)(Lt,{CloseAnimation:he,children:[(0,q.jsxs)(_t,{CloseAnimation:he,children:[(0,q.jsx)(It,{onClick:()=>{H(W+1)},children:"+"}),(0,q.jsx)(Nt,{children:W}),(0,q.jsx)(Et,{onClick:()=>{W>1&&H(W-1)},children:"-"})]}),(0,q.jsxs)(St,{onClick:()=>{if(ze){var e;const t={};if((null===(e=P.sizes)||void 0===e?void 0:e.length)>0&&(null===D||void 0===D||!D.sizeId)&&(t.size="Please select a size."),Object.keys(t).length>0)return void O(t)}else if("{}"!==JSON.stringify(P)){const e=function(e,t){const o={},i=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in t&&0!==(null===(i=t[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(t[e])||(o[e]="This field is required.")})),o}(P,D);if(Object.keys(e).length>0)return void O(e)}let t=de*(1-parseFloat(ae)/100);setTimeout((()=>{v(null),document.body.style.overflow="auto"}),800),B((0,Wt.bE)(_,b[f],W,D,t,pe)),ge(!1),H(1),O({})},children:["en"==I.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",(0,q.jsx)(Tt,{children:(0,Xe.T)(W*(de*(1-parseFloat(ae)/100)),Pe)})]})]})]}),(0,q.jsx)(xt,{onClick:ve,CloseAnimation:he,children:(0,q.jsx)(ct,{})}),(0,q.jsx)(Ft,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),be(!0),setTimeout((()=>{be(!1)}),4e3)},CloseAnimation:he,children:ye?(0,q.jsx)(po.RXm,{}):(0,q.jsx)(co.zU_,{})}),K&&(0,q.jsxs)(Mt,{onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY;re.current=Math.hypot(t,o)}else if(1===e.touches.length){const t=Date.now();t-ne.current<300&&(Z((e=>e>1?1:2.5)),ee({x:0,y:0})),ne.current=t,ie.current={x:e.touches[0].clientX,y:e.touches[0].clientY},oe(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(t,o);if(re.current){const e=i/re.current;Z((t=>Math.min(Math.max(t*e,1),5)))}re.current=i}else if(1===e.touches.length&&te&&G>1){const t=e.touches[0].clientX-ie.current.x,o=e.touches[0].clientY-ie.current.y;ee((e=>({x:e.x+t,y:e.y+o}))),ie.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{re.current=null,oe(!1)},children:[(0,q.jsx)(qt,{onClick:()=>J(!1),children:(0,q.jsx)(a.$8F,{})}),(0,q.jsx)(Bt,{src:(()=>{const e=Se[me];return e?e.url?(0,M.V)(e.url):Le||"":""})(),style:{transform:`scale(${G}) translate(${Q.x/G}px, ${Q.y/G}px)`},alt:"Zoom"})]})]})}var Ro=o(9328),Uo=o(32415),Oo=o(73422);const Mo=o(34304);function qo(e){var t,o,r;let{menu:n,activeCategory:a,showPopup:l,searchText:s,carouselPosition:d,setcarouselPosition:c,setactiveCategory:p,categories:u,menuMode:x}=e;const[h,g]=(0,i.useState)(null),[m,f]=(0,he.ok)(),{restaurantName:v}=(0,k.g)(),y=window.location.hostname.split(".")[0],b="menugic"!==y&&"localhost"!==y&&"www"!==y?y:v,w=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[b].activeLanguage})),j=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[b]})),C=(0,A.wA)(),[$,z]=(0,i.useState)([]),[L,S]=(0,i.useState)([]),T=(0,i.useRef)(),_=(0,i.useRef)(),I="all-items"===a,E=(null===j||void 0===j?void 0:j.all_items_style)||"grid",N=a&&!I?String(a):null,{data:P,fetchNextPage:F,hasNextPage:D,isFetchingNextPage:R}=(0,Ro.w)(N,x),{data:U,fetchNextPage:O,hasNextPage:B,isFetchingNextPage:W}=(0,Uo.u)(I?null===j||void 0===j?void 0:j.id:null,x),H=(null===U||void 0===U||null===(t=U.pages)||void 0===t?void 0:t.flat())||[],X=()=>{const e=null===L||void 0===L?void 0:L.map((e=>{if(e.current){var t;const o=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return{x:o.left,y:o.top,width:o.width}}return null}));z(e)};(0,i.useEffect)((()=>{m.get("productId")&&g(null)}),[m]),(0,i.useEffect)((()=>{X()}),[L]),(0,i.useEffect)((()=>{var e;if(n&&null!==a&&(null===P||void 0===P||null===(e=P.pages)||void 0===e?void 0:e.flat().length)>0){var t,o;const e=null===P||void 0===P||null===(t=P.pages)||void 0===t||null===(o=t.flat())||void 0===o?void 0:o.filter((e=>e["en"===w?"en_name":"ar_name"].toLowerCase().includes(s.toLowerCase()))).map((()=>i.createRef()));S(e)}}),[n,a,s,P]),(0,i.useEffect)((()=>{const e=()=>{X()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[L]),(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&D&&!R&&F()}),{threshold:.1});return T.current&&e.observe(T.current),()=>{T.current&&e.unobserve(T.current)}}),[D,R,F]),(0,i.useEffect)((()=>{if(!I)return;const e=new IntersectionObserver((e=>{e[0].isIntersecting&&B&&!W&&O()}),{threshold:.2});return _.current&&e.observe(_.current),()=>{_.current&&e.unobserve(_.current)}}),[O,B,I,W]);const Y=(null===P||void 0===P||null===(o=P.pages)||void 0===o||null===(r=o.flat())||void 0===r?void 0:r.filter((e=>!(Boolean(null===e||void 0===e?void 0:e.hide)||1===Number(null===e||void 0===e?void 0:e.hide))&&e["en"===w?"en_name":"ar_name"].toLowerCase().includes(s.toLowerCase()))))||[],V=i.useMemo((()=>{if(!I)return[];return(u||[]).filter((e=>!e.isAllItems)).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))).map((e=>{const t=H.filter((t=>{if(Boolean(null===t||void 0===t?void 0:t.hide)||1===Number(null===t||void 0===t?void 0:t.hide))return!1;if(t.category_id!=e.id)return!1;const o=t["en"===w?"en_name":"ar_name"]||"";return!s||function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase().includes(s.toLowerCase())}(o)})).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0)));return{category:e,items:t}})).filter((e=>e.items.length>0))}),[w,H,u,I,s]);console.log(Y);const[K,J]=(0,i.useState)(d),[G,Z]=(0,i.useState)(!1),[Q,ee]=(0,i.useState)(u.length<4?3:4);(0,i.useRef)(0),(0,i.useRef)(0);return(0,i.useEffect)((()=>{J(u.findIndex((e=>e.id==a)))}),[a]),(0,i.useEffect)((()=>{I&&g(null)}),[I]),(0,q.jsx)(ge,{activeCategory:a,children:I?(0,q.jsxs)(fe,{children:[V.map((e=>(0,q.jsxs)(ve,{children:[(0,q.jsx)(ye,{activeLanguage:w,children:"en"===w?e.category.en_category:e.category.ar_category}),"list"===E?(0,q.jsx)(Ae,{children:e.items.map(((e,t)=>{var o,i,r,n;const a=u.find((t=>t.id==e.category_id));let l;l=a&&0!==parseFloat(a.discount||0)?parseFloat(a.discount||0):parseFloat(e.discount||0);const s=Ye(e,x),d=0!==l?s*(1-parseFloat(l)/100):s;let c;switch(null===j||void 0===j?void 0:j.currency){case"dollar":c="$";break;case"lb":c="L.L.";break;case"gram":c="g";break;case"kilogram":c="kg";break;default:c=""}const p=null!==(o=null===(i=e.images)||void 0===i?void 0:i.findIndex((t=>t.id==e.new_cover_id)))&&void 0!==o?o:0,h=null===(r=e.images)||void 0===r||null===(n=r[p])||void 0===n?void 0:n.url,g=JSON.parse((null===j||void 0===j?void 0:j.features)||"{}"),v=Boolean(null===e||void 0===e?void 0:e.out_of_stock)||1===Number(null===e||void 0===e?void 0:e.out_of_stock),y=!Mo.isEmpty(null===e||void 0===e?void 0:e.form_json)&&!Mo.isEmpty(JSON.parse((null===e||void 0===e?void 0:e.form_json)||"{}")),$=!Mo.isEmpty(null===a||void 0===a?void 0:a.form_json)&&!Mo.isEmpty(JSON.parse((null===a||void 0===a?void 0:a.form_json)||"{}")),A=y||$,k=t=>{if(t.preventDefault(),t.stopPropagation(),null===g||void 0===g||!g.cart||v)return;if(A){const t=new URLSearchParams(m);return t.set("productId",e.id),t.set("categoryId","all-items"),f(t),window.history.pushState({},"",`?${t.toString()}`),void(document.body.style.overflow="hidden")}const o=Ye(e,x)*(1-parseFloat(l)/100);C((0,Wt.bE)(b,e,1,{},o,"",x)),Oo.oR.success("en"===w?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629")};return(0,q.jsxs)(Ie,{children:[(0,q.jsxs)(ke,{onClick:()=>{const t=new URLSearchParams(m);t.set("productId",e.id),t.set("categoryId","all-items"),f(t),window.history.pushState({},"",`?${t.toString()}`),document.body.style.overflow="hidden"},style:{cursor:"pointer"},children:[(0,q.jsx)(ze,{children:h&&(0,q.jsx)("img",{src:(0,M.V)(h),alt:"en"===w?e.en_name:e.ar_name})}),(0,q.jsxs)(Le,{activeLanguage:w,children:[(0,q.jsx)(Se,{children:"en"===w?e.en_name:e.ar_name}),s>0&&(0,q.jsxs)(Te,{activeLanguage:w,children:[0!==l&&(0,q.jsx)(_e,{children:(0,Xe.T)(s,c)}),(0,q.jsx)("span",{children:(0,Xe.T)(d,c)})]})]})]}),(null===g||void 0===g?void 0:g.cart)&&(v?(0,q.jsx)($e,{activeLanguage:w,children:"en"===w?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,q.jsx)(Ce,{type:"button",onClick:k,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),k(e)},activeLanguage:w,title:"en"===w?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,q.jsx)(co._xK,{size:12})}))]},e.id)}))}):(0,q.jsx)(me,{$noMinHeight:!0,children:e.items.map(((t,o)=>(0,q.jsx)(Ve,{index:o,plate:t,activePlate:null,setactivePlate:g,showPopup:l,setSearchParams:f,searchParams:m,activeCategoryId:e.category.id,categories:u,disableDetails:!1,menuMode:x},t.id)))})]},e.category.id))),B&&(0,q.jsx)("div",{ref:_,style:{height:"40px"}}),W&&(0,q.jsx)(be,{children:(0,q.jsxs)(we,{children:[(0,q.jsx)(je,{}),"en"===w?"Loading more...":"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f..."]})})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(me,{activePlate:h,children:[null===n||void 0===n?void 0:n.map(((e,t)=>{if(a==e.id)return(0,q.jsx)(q.Fragment,{children:Y.map(((e,t)=>(0,q.jsx)(Ve,{index:t,plate:e,activePlate:h,setactivePlate:g,ref:L[t],showPopup:l,setSearchParams:f,searchParams:m,activeCategoryId:a,categories:u,menuMode:x})))})})),(0,q.jsx)("div",{ref:T,style:{height:"20px"}})]}),null!==h&&!m.get("productId")&&(0,q.jsx)(Do,{menu:null===n||void 0===n?void 0:n.find((e=>e.id===a)),activePlate:h,setactivePlate:g,plates:Y,productPositions:$,activeCategoryId:a,categories:u,setSearchParams:f,searchParams:m})]})})}var Bo=o(76143);const Wo=r.Ay.div`
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
`,Ho=(r.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`,r.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`),Xo=r.Ay.span`
width: 90%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 10vh;
`,Yo=r.Ay.div`
  margin-top: 30px;
width: 90%;
  display: flex;
  flex-direction: column;
`,Vo=(r.Ay.div`
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


`,(0,r.Ay)(n.meu)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}
`,(0,r.Ay)(Ke.IW4)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,r.Ay)(z.gwi)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,r.Ay)(Ke.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`),Ko=r.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
font-weight: bold;

`,Jo=r.Ay.div`
width: 90%;
margin-top: 10px;

`,Go=r.Ay.div`
margin-top: 10px;
display: flex;
flex-direction: row;
width: 90%;
align-items: center;
gap:10px;
`,Zo=r.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,Qo=(r.Ay.a`
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
`),ei=r.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,ti=(0,r.Ay)(co.ok6)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};
`,oi=((0,r.Ay)(Ke._8j)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};


`,(0,r.Ay)(co.ao$)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`),ii=(0,r.Ay)(Bo.mk3)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`,ri=r.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,ni=r.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,ai=(0,r.Ay)(z.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`,li=r.Ay.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 90%;
height: 50px;
gap:25px;
margin-top: 30px;
`,si=r.Ay.button`
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
`,di=r.i7`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,ci=r.Ay.div`
position: absolute;
width:10%;
height: 50%;
background-color:${e=>"Call"==e.activeButton?e.theme.mainColor:e.theme.popupbackgroundColor} ;
 left: 0;
 z-index: 5;

 `,pi=r.Ay.div`
position: absolute;
width:1px;
height: 100%;
background-color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 right: 0;
 animation: ${di} 0.5s ease-in-out infinite; /* Infinite animation */

 `,ui=r.i7`
  0% {
opacity: 0;
left: -10%;
  }
  100% {
opacity: 1;
left: 16%;

  }

`,xi=r.Ay.span`
position: absolute;
 left: 16%;
 color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 animation: ${ui} 0.5s ease-in-out;
 z-index: 4;

 `,hi=r.i7`
  0% {
    opacity: 0;
    rotate: calc(180deg);
  }
  1000% {
    opacity: 1;
    rotate: calc(0deg);

  }
 
`,gi=(0,r.Ay)(Ke.pte)`
color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
font-size: 15px;
position: absolute;
right: 5%;
animation: ${hi} 0.7s ease-in-out;

`,mi=r.i7`
  0% {
    max-height: 0px;
  }
  1000% {
    max-height: 300px;


  }
 
`,fi=r.Ay.ul`
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
  animation: ${mi} 1s ease-in-out;
  overflow: hidden;

`,vi=r.Ay.li`
  cursor: pointer;
  transition: background 0.2s;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;

`,yi=r.Ay.button`
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
`,bi=r.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 18px;
font-weight: bold;

`,wi=r.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`,ji=r.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
`,Ci=r.Ay.div`
  display: flex;
  flex-direction: row;
  width: 15px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${e=>e.theme.mainColor};
`,$i=(r.Ay.div`
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

 `),Ai=r.Ay.div`
 width: 15px;
 height: 45px;
 top: 25px;
 position: absolute;
 left: 0;
 display: flex;
 justify-content: center;
 `,ki=r.Ay.div`
 width: 2px;
 height: 100%;
 background-color: ${e=>e.theme.popupTextColor};
 opacity: 0.5;
 `;var zi=o(72599),Li=o(67059);function Si(e){var t,o,r,a;let{restaurant:l,showPopup:s,popupHandler:d}=e;const{restaurantName:c}=(0,k.g)(),p=window.location.hostname.split(".")[0],u="menugic"!==p&&"localhost"!==p&&"www"!==p?p:c,x=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[u].activeLanguage})),[h,g]=(0,i.useState)("");return(0,i.useEffect)((()=>{const e=()=>{d(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,q.jsxs)(Wo,{showPopup:s,children:[(0,q.jsx)(Vo,{onClick:()=>{d(null)}}),(0,q.jsx)(Xo,{children:(0,q.jsx)(Ho,{children:(m=null===l||void 0===l?void 0:l.name,m.replace(/\b\w/g,(function(e){return e.toUpperCase()})))})}),(0,q.jsxs)(li,{children:[(0,q.jsx)(si,{activeButton:h,onClick:()=>{g("Call"==h?"":"Call")},children:"Call"!==h?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(zi._Xz,{size:"25px"}),"en"==x?"Call Now":"\u0627\u062a\u0635\u0644 \u0627\u0644\u0627\u0646"]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(fi,{activeButton:h,children:null===l||void 0===l||null===(t=l.branches)||void 0===t?void 0:t.flatMap((e=>e.phone_number.split(" ").map(((t,o)=>(0,q.jsx)(vi,{children:(0,q.jsxs)("a",{href:`tel:${t}`,style:{textDecoration:"none",color:"inherit"},children:[t,"  ",e.location&&(0,q.jsxs)("span",{children:["- ",e.name," "]})]})})))))}),(0,q.jsx)(ci,{activeButton:h,children:(0,q.jsx)(pi,{activeButton:h})}),(0,q.jsx)(xi,{activeButton:h,children:"en"==x?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,q.jsx)(gi,{activeButton:h})]})}),(0,q.jsx)(yi,{activeButton:h,onClick:()=>{g("Message"==h?"":"Message")},children:"Message"!==h?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(co.EcP,{size:"25px"}),"en"==x?"Message":"\u0631\u0633\u0627\u0644\u0629","            "]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(fi,{activeButton:h,children:null===l||void 0===l||null===(o=l.branches)||void 0===o?void 0:o.map((e=>(0,q.jsx)(vi,{children:(0,q.jsxs)("a",{href:`https://wa.me/${(0,Li.J)(null===e||void 0===e?void 0:e.whatsapp_number,null===l||void 0===l?void 0:l.country_code)}`,style:{textDecoration:"none",color:"inherit"},children:[null===e||void 0===e?void 0:e.whatsapp_number,"-",null===e||void 0===e?void 0:e.name]})})))}),(0,q.jsx)(ci,{activeButton:h,children:(0,q.jsx)(pi,{activeButton:h})}),(0,q.jsx)(xi,{activeButton:h,children:"en"==x?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,q.jsx)(gi,{activeButton:h})]})})]}),(0,q.jsxs)(Yo,{children:[(null===l||void 0===l||null===(r=l.branches)||void 0===r?void 0:r.name)&&(0,q.jsx)(bi,{children:"Branches"}),(0,q.jsx)(wi,{children:null===l||void 0===l||null===(a=l.branches)||void 0===a?void 0:a.map(((e,t)=>{var o;return e.name&&(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(ji,{children:[t!==(null===l||void 0===l||null===(o=l.branches)||void 0===o?void 0:o.length)-1&&(0,q.jsx)(Ai,{index:t,children:(0,q.jsx)(ki,{})}),(0,q.jsx)(Ci,{children:(0,q.jsx)(n.sIY,{})}),(0,q.jsx)($i,{href:`https://${null===e||void 0===e?void 0:e.mapLink}`,children:e.location})]})})}))})]}),(0,q.jsx)(Jo,{children:(0,q.jsx)(Ko,{children:"en"==x?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"})}),(0,q.jsxs)(Go,{children:[l.socialMedia.find((e=>"Instagram"==e.platform))&&(0,q.jsx)(Zo,{href:`https://${l.socialMedia.find((e=>"Instagram"==e.platform)).link}`,children:(0,q.jsx)(oi,{})}),l.socialMedia.find((e=>"Facebook"==e.platform))&&(0,q.jsx)(ei,{href:`https://${l.socialMedia.find((e=>"Facebook"==e.platform)).link}`,children:(0,q.jsx)(ti,{})}),l.socialMedia.find((e=>"Tiktok"==e.platform))&&(0,q.jsx)(Qo,{href:`https://${l.socialMedia.find((e=>"Tiktok"==e.platform)).link}`,children:(0,q.jsx)(ii,{})})]}),(0,q.jsxs)(ri,{children:["Copyright",(0,q.jsx)(ai,{})," ",(new Date).getFullYear()," "," ",(0,q.jsx)(ni,{href:"https://www.menugic.com",children:"menugic.com"})]})]});var m}const Ti=r.Ay.div`
position: fixed;
bottom: 0;
left: 0;
right: 0;
min-height: 45vh;
max-height: 95vh;
overflow-y: auto;
background-color: ${e=>e.theme.popupbackgroundColor};
width: 100%;
transition: transform 0.8s ease-in-out;
transform: translateY(${e=>"cart"==e.showPopup?"0%":"100%"});
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 1500;
padding-bottom: 20px;
`,_i=((0,r.Ay)(Ke.WQq)`
font-size: 20px;
position: fixed;
top: 24px;
right: 24px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}
z-index: 20000;
pointer-events: auto;
background: transparent;
border: none;
padding: 4px;
line-height: 1;
width: 36px;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 18px;

&:hover {
  background: rgba(0, 0, 0, 0.05);
}

`,r.Ay.div`
width: 90%;
display: flex;
flex-direction: column;
`,r.Ay.div`
font-size: 25px;
font-weight:600;
margin-top:40px;
color: ${e=>e.theme.popupTextColor};

`,r.Ay.div`
height: 0.25px;
width: 100%;
background-color: ${e=>e.theme.popupTextColor};
opacity: 0.1;
margin-top:10px;

`,r.Ay.div`
max-height: 35vh;
width: 100%;
overflow: scroll;
margin-top: 20px;

`,r.Ay.div`
height: 35vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color:${e=>e.theme.popupTextColor};
font-size: 18px;
`);r.Ay.div`
width: 100%;
display: flex;
flex-direction: row;
height: 11vh;
margin-top: 1vh;
position: relative;

`,r.Ay.div`
flex: 1;
display: flex;
justify-content: center;
`,r.Ay.img`
width: 70%;
height: 100%;
object-fit: cover;
border-radius: 3px;
`,r.Ay.div`
flex: 1;
display: flex;
flex-direction: column;
gap:2px;
`,r.Ay.div`
flex: 1;
display: flex;
align-items: flex-end;
justify-content: flex-end;


`,r.Ay.div`
width: 50%;
display: flex;
flex-direction: row;
height: 20px;
background-color:${e=>e.theme.mainColor};
color:${e=>e.theme.popupbackgroundColor};
border-radius: 20px;
margin-right: 20px;
margin-bottom: 10px;

`,r.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,r.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,r.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,r.Ay.span`
font-size: 13px;
font-weight: 500;
color:${e=>e.theme.popupTextColor};

`,r.Ay.span`
color:${e=>e.theme.popupTextColor};
font-size: 13px;


`,r.Ay.span`
color:${e=>e.theme.popupTextColor};
font-size: 13px;
margin-top: 30px;


`,r.Ay.button`
outline: none;
border: 0;
cursor: pointer;
color: ${e=>e.theme.backgroundColor};
width: 100%;
margin-top: 10px;
background-color: ${e=>e.theme.mainColor};
border-radius: 20px;
padding-top: 8px;
padding-bottom: 8px;

`,(0,r.Ay)(z.pS_)`
font-size: 15px;
position: absolute;
top: 0px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`;var Ii=o(11222),Ei=o(29334),Ni=o(81132),Pi=o(70268),Fi=o(50074),Di=o(81926);const Ri=r.i7`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,Ui=r.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Oi=r.Ay.div`
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
`,Mi=r.Ay.div`
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
  animation: ${Ri} 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`,qi=r.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`,Bi=r.Ay.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Wi=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`,Hi=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Xi=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`,Yi=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  white-space: nowrap;
`,Vi=r.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}12`};
  padding: 3px 5px;
  border-radius: 20px;
`,Ki=r.Ay.button`
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
`,Ji=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  min-width: 20px;
  text-align: center;
`,Gi=r.Ay.button`
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
`,Zi=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,Qi="\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 2px 8px;\n  line-height: 1.5;\n  white-space: nowrap;\n",er=r.Ay.span`
  ${Qi}
  border: 1px solid ${e=>`${e.theme.popupTextColor||"#1a1a1a"}50`};
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  background: transparent;
`,tr=r.Ay.span`
  ${Qi}
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}18`};
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}35`};
`,or=r.Ay.span`
  ${Qi}
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  border: 1px dashed ${e=>`${e.theme.popupTextColor||"#999"}40`};
  opacity: 0.65;
  text-decoration: line-through;
`,ir=r.Ay.div`
  font-size: 10px;
  font-style: italic;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,rr=r.Ay.div`
  font-size: 10px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.75;
  line-height: 1.5;
`,nr=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}10`};
  border-radius: 12px;
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  margin-top: 4px;
`,ar=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,lr=r.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  opacity: 0.75;
`,sr=r.Ay.div`
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
`,dr=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.6;
  text-align: center;
`,cr=["Size:","\u0627\u0644\u062d\u062c\u0645:"],pr=["Add ons:","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:"],ur=["Remove:","\u0628\u062f\u0648\u0646:"];function xr(e){let{restaurant:t,activeLanguage:o}=e;const i=(0,A.wA)(),{restaurantName:r}=(0,k.g)(),n=window.location.hostname.split(".")[0],a="menugic"!==n&&"localhost"!==n&&"www"!==n?n:r,l=(0,A.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,t)=>e+t.price*t.quantity),0),d="ar"===o?"ar":"en",c=e=>{const t=(0,Fi.qh)(e,d);if(!t.length)return null;const{sizeLabel:o,addonLabels:i,removalLabels:r,legacyLines:n}=function(e){const t={sizeLabel:null,addonLabels:[],removalLabels:[],legacyLines:[]};let o=null;for(const i of e)"heading"===i.type?o=cr.includes(i.text)?"size":pr.includes(i.text)?"addons":ur.includes(i.text)?"removals":"legacy":"size"===o?t.sizeLabel=i.text:"addons"===o?t.addonLabels.push(i.text):"removals"===o?t.removalLabels.push(i.text):t.legacyLines.push(i.text);return t}(t),a=o||i.length||r.length;return(0,q.jsxs)(q.Fragment,{children:[a&&(0,q.jsxs)(Zi,{children:[o&&(0,q.jsx)(er,{children:"ar"===d?`\u0627\u0644\u062d\u062c\u0645: ${o}`:`Size: ${o}`}),i.map((e=>(0,q.jsxs)(tr,{children:["+ ",e]},e))),r.map((e=>(0,q.jsx)(or,{children:e},e)))]}),n.map(((e,t)=>(0,q.jsx)(rr,{children:e},t)))]})};let p="";switch(null===t||void 0===t?void 0:t.currency){case"dollar":p="$";break;case"lb":p="L.L.";break;case"gram":p="g";break;case"kilogram":p="kg";break;default:p=""}if(0===l.length)return(0,q.jsx)(Ui,{children:(0,q.jsx)(dr,{children:"ar"===d?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"})});const u=e=>{var t;const o=null===(t=e.images)||void 0===t?void 0:t[0];return o&&o.url?(0,M.V)(o.url):""};return(0,q.jsx)(Ui,{children:(0,q.jsxs)(Oi,{children:[l.map((e=>{const t="ar"===d?e.ar_name:e.en_name,o=(0,Xe.T)(e.price*e.quantity,p);return(0,q.jsx)(Mi,{children:(0,q.jsxs)(qi,{children:[(0,q.jsx)(Bi,{src:u(e),alt:t}),(0,q.jsxs)(Wi,{children:[(0,q.jsxs)(Hi,{title:t,children:[t,e.menuMode&&"both"!==e.menuMode&&(0,q.jsx)("span",{style:{display:"inline-block",fontSize:"10px",fontWeight:600,padding:"2px 6px",borderRadius:"8px",marginLeft:"6px",marginRight:"6px",background:"dine_in"===e.menuMode?"#e8f5e9":"#e3f2fd",color:"dine_in"===e.menuMode?"#2e7d32":"#1565c0",verticalAlign:"middle"},children:"dine_in"===e.menuMode?"ar"===d?"\u0645\u0637\u0639\u0645":"Dine In":"ar"===d?"\u062a\u0648\u0635\u064a\u0644":"Delivery"})]}),c(e),e.instruction&&(0,q.jsxs)(ir,{children:["\ud83d\udcdd ",e.instruction]})]}),(0,q.jsxs)(Xi,{children:[(0,q.jsx)(Yi,{children:o}),(0,q.jsxs)(Vi,{children:[(0,q.jsx)(Ki,{onClick:()=>{return t=e.uniqueId,void((o=e.quantity)>1&&i((0,Wt.v)(a,t,o-1)));var t,o},disabled:e.quantity<=1,"aria-label":"decrease quantity",children:"\u2212"}),(0,q.jsx)(Ji,{children:e.quantity}),(0,q.jsx)(Ki,{onClick:()=>{return t=e.uniqueId,o=e.quantity,i((0,Wt.v)(a,t,o+1));var t,o},"aria-label":"increase quantity",children:"+"})]}),(0,q.jsx)(Gi,{onClick:()=>{return t=e.uniqueId,i((0,Wt.dt)(a,t));var t},"aria-label":"remove item",children:(0,q.jsx)(co.qbC,{})})]})]})},e.uniqueId)})),(0,q.jsx)(nr,{children:(0,q.jsxs)(ar,{children:[(0,q.jsx)(lr,{children:"ar"===d?"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a":"Total"}),(0,q.jsx)(sr,{children:(0,Xe.T)(s,p)})]})})]})})}var hr=o(13491);const gr=r.Ay.div`
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

`;function mr(e){let{deliveryType:t,branches:o,selectedBranch:i,setSelectedBranch:n,setErrors:a,errors:l}=e;const s=(0,r.DP)(),d=(o||[]).map((e=>({value:e.id,label:e.name,branch:e,isDisabled:!e.has_delivery&&"Delivery"===t}))),c={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(null!==l&&void 0!==l&&l.branch?"rgba(255, 68, 68, 0.1)":s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:t.isDisabled?"#999":s.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?s.categoryUnActive||"#ffffff":t.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent",cursor:t.isDisabled?"not-allowed":"pointer",display:"flex",justifyContent:"space-between"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,q.jsx)(gr,{children:(0,q.jsx)(hr.Ay,{value:d.find((e=>{var t;return(null===(t=e.branch)||void 0===t?void 0:t.id)===(null===i||void 0===i?void 0:i.id)})),onChange:e=>{e&&!e.isDisabled&&(n(e.branch),a({...l,branch:""}))},options:d,placeholder:"Select Branch",isOptionDisabled:e=>e.isDisabled,styles:c,formatOptionLabel:e=>(0,q.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,q.jsx)("span",{children:e.label}),e.isDisabled&&"Delivery"===t&&(0,q.jsx)("span",{style:{fontSize:12,color:"#999"},children:"No Delivery"})]}),menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})})}const fr=r.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`,vr=(r.Ay.div`
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
`),yr=r.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`,br=r.Ay.input`
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
`,wr=(0,r.Ay)(g.Xj1)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.mainColor};

`,jr=r.i7`
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
  animation: ${jr} 1s linear infinite; /* Apply animation */
`;var Cr=o(89993);function $r(e){var t;let{selectedBranch:o,selectedRegion:n,onRegionChange:a,setErrors:l,errors:s,onRegionsChange:d}=e;const c=(0,r.DP)(),[p,u]=(0,i.useState)(!1),[x,h]=(0,i.useState)(""),{response:g,isLoading:m}=(0,Cr.w)({branch_id:o.id,onSuccess:()=>{}});(0,i.useEffect)((()=>{var e;m||d((null===g||void 0===g||null===(e=g.data)||void 0===e?void 0:e.regions)||[])}),[m,g,d]),(0,i.useEffect)((()=>{a("")}),[o,a]);const f=((null===g||void 0===g||null===(t=g.data)||void 0===t?void 0:t.regions)||[]).map((e=>({value:e.region_name,label:e.region_name}))),v=f.filter((e=>e.label.toLowerCase().includes(x.toLowerCase()))),y={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(null!==s&&void 0!==s&&s.region?"rgba(255, 68, 68, 0.1)":c.mainColor?`${c.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:c.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:c.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:c.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:c.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:c.categoryUnActive||"#ffffff",border:`1px solid ${c.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:c.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?c.categoryUnActive||"#ffffff":t.isFocused?c.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return!m&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(fr,{children:(0,q.jsx)(hr.Ay,{value:f.find((e=>e.value===n)),onMenuOpen:()=>u(!0),onMenuClose:()=>u(!1),onChange:e=>{a((null===e||void 0===e?void 0:e.value)||""),h(""),l({...s,region:""})},options:v,placeholder:"Select Region",styles:y,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})}),p&&(0,q.jsx)(vr,{children:(0,q.jsxs)(yr,{children:[(0,q.jsx)(br,{placeholder:"Search",value:x,onChange:e=>{h(e.target.value)}}),(0,q.jsx)(wr,{})]})})]})}const Ar=r.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,kr=r.Ay.div`
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
`,zr=r.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,Lr=r.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,Sr=(r.Ay.select`
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
`);function Tr(e){var t,o;let{formData:i,updateFormData:n,restaurant:a,errors:l,setErrors:s}=e;const d=(0,r.DP)();let c={};try{c=JSON.parse((null===a||void 0===a?void 0:a.features)||"{}")}catch(x){c={}}const p=[c.delivery_order&&{value:"Delivery",label:"Delivery"},c.takeaway_order&&{value:"TakeAway",label:"Take Away"},c.dinein_order&&{value:"DineIn",label:"Dine In"}].filter(Boolean),u={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(l.deliveryType?"rgba(255, 68, 68, 0.1)":d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?d.categoryUnActive||"#ffffff":t.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,q.jsxs)(Ar,{children:[(0,q.jsx)(zr,{children:"Select Order Type"}),(0,q.jsx)(Lr,{children:"Choose how you would like to receive your order"}),(0,q.jsxs)(kr,{children:[(0,q.jsx)(hr.Ay,{value:p.find((e=>e.value===i.deliveryType)),onChange:e=>{var t;n({deliveryType:(null===e||void 0===e?void 0:e.value)||"",selectedBranch:(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t[0])||null,selectedRegion:""}),s({})},options:p,placeholder:"Select Order Type",isSearchable:!1,styles:u,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"}),l.deliveryType&&(0,q.jsx)(Sr,{children:l.deliveryType})]}),(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)>0&&!(()=>{var e;return null===a||void 0===a||null===(e=a.branches)||void 0===e?void 0:e.some((e=>e.is_online))})()&&(0,q.jsxs)(kr,{children:[(0,q.jsx)(mr,{deliveryType:i.deliveryType,branches:null===a||void 0===a?void 0:a.branches,selectedBranch:i.selectedBranch,setSelectedBranch:e=>n({selectedBranch:e,selectedRegion:""}),setErrors:s,errors:l}),l.branch&&(0,q.jsx)(Sr,{children:l.branch})]}),i.selectedBranch&&"Delivery"===i.deliveryType&&Array.isArray(i.regions)&&i.regions.length>0&&(0,q.jsxs)(kr,{children:[(0,q.jsx)($r,{selectedRegion:i.selectedRegion,onRegionChange:e=>n({selectedRegion:e}),selectedBranch:1===(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.length)?null===a||void 0===a?void 0:a.branches[0]:i.selectedBranch,setErrors:s,errors:l,onRegionsChange:e=>n({regions:e})}),l.region&&(0,q.jsx)(Sr,{children:l.region})]})]})}var _r=o(16106);const Ir=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Er=r.Ay.button`
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
`,Nr=r.Ay.div`
  padding: 16px;
  background: ${e=>e.theme.categoryUnActive||"#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Pr=r.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Fr=r.Ay.div`
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  word-break: break-all;
`,Dr=r.Ay.a`
  font-size: 14px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-decoration: none;
  font-weight: 600;
  margin-top: 4px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`,Rr=r.Ay.div`
  color: #ff4444;
  font-size: 13px;
  margin-top: -8px;
`;function Ur(e){let{onLocationSelect:t,selectedLocation:o,hasError:i,googleMapsApiKey:n,activeLanguage:a="en"}=e;const l=(0,r.DP)();return n?(0,q.jsx)(_r.A,{apiKey:n,onLocationConfirm:t,selectedLocation:o,hasError:i,theme:l,activeLanguage:a}):(0,q.jsx)(Or,{onLocationSelect:t,selectedLocation:o,hasError:i})}function Or(e){let{onLocationSelect:t,selectedLocation:o,hasError:r}=e;const[n,a]=(0,i.useState)(!1),[l,s]=(0,i.useState)("");return(0,q.jsxs)(Ir,{children:[(0,q.jsxs)(Er,{type:"button",onClick:()=>{navigator.geolocation?(a(!0),s(""),navigator.geolocation.getCurrentPosition((e=>{const{latitude:o,longitude:i}=e.coords,r={latitude:o,longitude:i,address:`${o.toFixed(6)}, ${i.toFixed(6)}`};t(r),a(!1)}),(()=>{s("Unable to retrieve your location. Please try again."),a(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):s("Geolocation is not supported by your browser")},disabled:n,variant:"current",children:[(0,q.jsx)(co.hO$,{}),n?"Getting Location...":"Use Current Location"]}),(0,q.jsxs)(Er,{type:"button",onClick:()=>{if(o){const e=`https://www.google.com/maps?q=${o.latitude},${o.longitude}`;window.open(e,"_blank")}else{const e="https://www.google.com/maps/search/?api=1";window.open(e,"_blank")}},variant:"select",children:[(0,q.jsx)(co.vq8,{}),o?"View on Map":"Select on Map"]}),o&&(0,q.jsxs)(Nr,{children:[(0,q.jsx)(Pr,{children:"Selected Location:"}),(0,q.jsx)(Fr,{children:o.address||`${o.latitude}, ${o.longitude}`}),o.latitude&&o.longitude&&(0,q.jsx)(Dr,{href:`https://www.google.com/maps?q=${o.latitude},${o.longitude}`,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]}),l&&(0,q.jsx)(Rr,{children:l}),r&&!o&&(0,q.jsx)(Rr,{children:"Please select a location"})]})}const Mr=r.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`,qr=r.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,Br=r.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,Wr=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 0;
  position: relative;
`,Hr=r.Ay.label`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Xr=r.Ay.input`
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
`,Yr=r.Ay.textarea`
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
`,Vr=r.Ay.span`
  color: #ff4444;
  font-size: 12px;
  display: block;
`,Kr=r.Ay.p`
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.85;
`;function Jr(e){let{formData:t,updateFormData:o,errors:n,restaurantName:a,restaurant:l,activeLanguage:s="en"}=e;const d=(0,r.DP)(),[c,p]=(0,i.useState)([]),[u,x]=(0,i.useState)(!1),h=(0,i.useRef)(!1),g=(e,t)=>"ar"===s?t:e,m=(0,i.useMemo)((()=>{try{return null!==l&&void 0!==l&&l.features?JSON.parse(l.features):{}}catch{return{}}}),[null===l||void 0===l?void 0:l.features]).google_maps_integrated&&(null===l||void 0===l?void 0:l.google_maps_api_key)||null,f=(0,i.useMemo)((()=>({control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:d.mainColor||d.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?d.categoryUnActive||"#ffffff":t.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})})),[d]),v=(0,i.useMemo)((()=>[{value:"__manual__",label:0===c.length?g("No saved addresses \u2014 type below","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u2014 \u0627\u0643\u062a\u0628 \u0623\u062f\u0646\u0627\u0647"):g("Type address manually","\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u062f\u0648\u064a\u0627\u064b")},...c.map((e=>({value:String(e.id),label:`${e.label||g("Address","\u0639\u0646\u0648\u0627\u0646")}${e.is_default?` (${g("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")})`:""} \u2014 ${e.full_address.length>56?`${e.full_address.slice(0,56)}\u2026`:e.full_address}`})))]),[c,s]),y=(0,i.useMemo)((()=>{if(null==t.selectedAddressId)return v[0]||null;const e=String(t.selectedAddressId);return v.find((t=>t.value===e))||v[0]||null}),[v,t.selectedAddressId]);(0,i.useEffect)((()=>{if("Delivery"!==t.deliveryType||!a)return void p([]);const e=(0,Pi.wU)(a);if(!e)return void p([]);let o=!1;return x(!0),Ii.A.get(Ni.Qf,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:t}=e;o||p(t.addresses||[])})).catch((()=>{o||p([])})).finally((()=>{o||x(!1)})),()=>{o=!0}}),[t.deliveryType,a]),(0,i.useEffect)((()=>{"Delivery"!==t.deliveryType&&(h.current=!1)}),[t.deliveryType]),(0,i.useEffect)((()=>{if("Delivery"!==t.deliveryType)return;if(!c.length||h.current)return;const e=c.find((e=>e.is_default));e&&!String(t.fullAddress||"").trim()&&(h.current=!0,o({selectedAddressId:e.id,fullAddress:e.full_address}))}),[c,t.deliveryType,t.fullAddress,o]);const b=e=>{const{name:t,value:i}=e.target;o("fullAddress"!==t?{[t]:i}:{[t]:i,selectedAddressId:null})};return(0,q.jsxs)(Mr,{children:[(0,q.jsx)(qr,{children:g("Your Information","\u0628\u064a\u0627\u0646\u0627\u062a\u0643")}),(0,q.jsx)(Br,{children:g("Please provide your contact details to complete the order","\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628")}),(0,q.jsxs)(Wr,{children:[(0,q.jsx)(Hr,{children:g("Full Name *","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,q.jsx)(Xr,{type:"text",name:"fullName",value:t.fullName,onChange:b,placeholder:g("Enter your full name","\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644"),hasError:!!n.fullName}),n.fullName&&(0,q.jsx)(Vr,{children:n.fullName})]}),(0,q.jsxs)(Wr,{children:[(0,q.jsx)(Hr,{children:g("Phone Number *","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 *")}),(0,q.jsx)(Xr,{type:"tel",name:"phoneNumber",value:t.phoneNumber,onChange:b,placeholder:g("Enter your phone number","\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643"),hasError:!!n.phoneNumber}),n.phoneNumber&&(0,q.jsx)(Vr,{children:n.phoneNumber})]}),"Delivery"===t.deliveryType&&(0,q.jsxs)(q.Fragment,{children:[(0,Pi.wU)(a)&&(0,q.jsxs)(Wr,{children:[(0,q.jsxs)(Hr,{children:[g("Saved address","\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0641\u0648\u0638"),u?` (${g("loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")})`:""]}),(0,q.jsx)(kr,{children:(0,q.jsx)(hr.Ay,{value:y,onChange:e=>{if(!e||"__manual__"===e.value)return void o({selectedAddressId:null});const t=parseInt(e.value,10),i=c.find((e=>e.id===t));i&&o({selectedAddressId:t,fullAddress:i.full_address})},options:v,isSearchable:!1,isDisabled:u,styles:f,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed",isRtl:"ar"===s})}),(0,q.jsx)(Kr,{children:g("Add or edit addresses from the account menu (person icon) \u2192 Addresses.","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062d\u0633\u0627\u0628 (\u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0634\u062e\u0635) \u2190 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646.")})]}),m&&(0,q.jsxs)(Wr,{children:[(0,q.jsx)(Hr,{children:g("Delivery Location *","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 *")}),(0,q.jsx)(Ur,{onLocationSelect:e=>{o({selectedLocation:e,fullAddress:e.address||`${e.latitude}, ${e.longitude}`})},selectedLocation:t.selectedLocation,hasError:!!n.fullAddress&&!t.selectedLocation,googleMapsApiKey:m,activeLanguage:s})]}),(0,q.jsxs)(Wr,{children:[(0,q.jsx)(Hr,{children:g("Full Address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,q.jsx)(Yr,{name:"fullAddress",value:t.fullAddress,onChange:b,placeholder:g("Enter your delivery address","\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),hasError:!!n.fullAddress,rows:"3"}),n.fullAddress&&(0,q.jsx)(Vr,{children:n.fullAddress})]})]}),"DineIn"===t.deliveryType&&(0,q.jsxs)(Wr,{children:[(0,q.jsx)(Hr,{children:g("Table Number *","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 *")}),(0,q.jsx)(Xr,{type:"number",name:"tableNumber",value:t.tableNumber,onChange:b,placeholder:g("Enter table number","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629"),hasError:!!n.tableNumber}),n.tableNumber&&(0,q.jsx)(Vr,{children:n.tableNumber})]}),(0,q.jsxs)(Wr,{children:[(0,q.jsx)(Hr,{children:g("Special Notes (Optional)","\u0645\u0644\u0627\u062d\u0638\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,q.jsx)(Yr,{name:"note",value:t.note,onChange:b,placeholder:g("Any special instructions or notes\u2026","\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u2026"),rows:"3"})]})]})}const Gr=r.Ay.div`
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
`,Zr=r.Ay.div`
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,Qr=r.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 12px;
`,en=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  gap: 12px;
`,tn=r.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#666"};
  flex: 1;
`,on=r.Ay.div`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  text-align: right;
  flex: 1;
  word-break: break-word;
`,rn=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,nn=r.Ay.div`
  padding: 8px 0;
`,an=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,ln=r.Ay.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`,sn=r.Ay.div`
  height: 1px;
  background: ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  margin: 12px 0;
`,dn=r.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-align: right;
`;function cn(e){let{formData:t,restaurant:o,activeLanguage:i}=e;const{restaurantName:r}=(0,k.g)(),n=window.location.hostname.split(".")[0],a="menugic"!==n&&"localhost"!==n&&"www"!==n?n:r,l=(0,A.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,t)=>e+t.price*t.quantity),0);let d="";switch(null===o||void 0===o?void 0:o.currency){case"dollar":d="$";break;case"lb":d="L.L.";break;case"gram":d="g";break;case"kilogram":d="kg";break;default:d=""}return(0,q.jsxs)(Gr,{children:[(0,q.jsx)(Qr,{children:"Review Your Order"}),(0,q.jsxs)(Zr,{children:[(0,q.jsx)(Qr,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Items"}),(0,q.jsx)(rn,{children:l.map((e=>{var t,o;return(0,q.jsx)(nn,{children:(0,q.jsxs)(an,{children:[(0,q.jsx)(ln,{src:(0,M.V)(null===(t=e.images)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.url),alt:"en"===i?e.en_name:e.ar_name}),(0,q.jsxs)(on,{style:{flex:2},children:[e.quantity,"x"," ",(0,q.jsx)("strong",{children:"en"===i?e.en_name:e.ar_name})]}),(0,q.jsx)(on,{children:(0,Xe.T)(e.price*e.quantity,d)})]})},e.uniqueId)}))}),(0,q.jsx)(sn,{}),(0,q.jsxs)(en,{children:[(0,q.jsx)(tn,{children:"Total:"}),(0,q.jsx)(dn,{children:(0,Xe.T)(s,d)})]})]}),(0,q.jsxs)(Zr,{children:[(0,q.jsx)(Qr,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Details"}),(0,q.jsxs)(en,{children:[(0,q.jsx)(tn,{children:"Order Type:"}),(0,q.jsx)(on,{children:t.deliveryType})]}),t.selectedBranch&&(0,q.jsxs)(en,{children:[(0,q.jsx)(tn,{children:"Branch:"}),(0,q.jsx)(on,{children:t.selectedBranch.name})]}),t.selectedRegion&&(0,q.jsxs)(en,{children:[(0,q.jsx)(tn,{children:"Region:"}),(0,q.jsx)(on,{children:t.selectedRegion})]})]}),(0,q.jsxs)(Zr,{children:[(0,q.jsx)(Qr,{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact Information"}),(0,q.jsxs)(en,{children:[(0,q.jsx)(tn,{children:"Name:"}),(0,q.jsx)(on,{children:t.fullName})]}),(0,q.jsxs)(en,{children:[(0,q.jsx)(tn,{children:"Phone:"}),(0,q.jsx)(on,{children:t.phoneNumber})]}),"Delivery"===t.deliveryType&&t.fullAddress&&(0,q.jsxs)(en,{children:[(0,q.jsx)(tn,{children:"Address:"}),(0,q.jsx)(on,{children:t.fullAddress})]}),"DineIn"===t.deliveryType&&t.tableNumber&&(0,q.jsxs)(en,{children:[(0,q.jsx)(tn,{children:"Table Number:"}),(0,q.jsx)(on,{children:t.tableNumber})]}),t.note&&(0,q.jsxs)(en,{children:[(0,q.jsx)(tn,{children:"Notes:"}),(0,q.jsx)(on,{children:t.note})]})]})]})}const pn=r.Ay.div`
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
`,un=r.Ay.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,xn=r.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`,hn=(0,r.Ay)(un)`
  margin-bottom: 0;
  flex: 1;
`,gn=r.Ay.button`
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
`,mn=r.Ay.div`
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
`,fn=r.Ay.div`
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
`,vn=r.Ay.div`
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
`,yn=r.Ay.div`
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
`,bn=r.Ay.div`
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
`,wn=r.Ay.button`
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
`,jn=[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"review",label:"Review",number:4}];function Cn(e){var t;let{popupHandler:o,restaurant:r}=e;const{restaurantName:n}=(0,k.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n,s=(0,A.d4)((e=>e.cart[l]||[])),d=(0,A.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[l])||void 0===o?void 0:o.activeLanguage)||"en"})),c=(0,A.wA)(),[p,u]=(0,i.useState)(0),[x,h]=(0,i.useState)({deliveryType:"",selectedBranch:(null===r||void 0===r||null===(t=r.branches)||void 0===t?void 0:t[0])||null,selectedRegion:"",regions:[],fullName:"",phoneNumber:"",fullAddress:"",selectedAddressId:null,selectedLocation:null,tableNumber:"",note:""}),[g,m]=(0,i.useState)({}),{handleApiCallAsync:f,isPending:v}=(0,Ei.h)({onSuccess:()=>{}});(0,i.useEffect)((()=>{(async()=>{const e=(0,Pi.wU)(l);if(e)try{const{data:t}=await Ii.A.get(Ni.EY,{headers:{Authorization:`Bearer ${e}`}});h((e=>({...e,fullName:t.full_name||e.fullName,phoneNumber:t.phone_number||e.phoneNumber})))}catch{}})()}),[l]),(0,i.useEffect)((()=>{if(null!==r&&void 0!==r&&r.features){const e=JSON.parse(r.features),t=Object.entries(e).filter((e=>{let[t,o]=e;return!0===o})).map((e=>{let[t]=e;return"delivery_order"===t?"Delivery":"takeaway_order"===t?"TakeAway":"dinein_order"===t?"DineIn":null})).filter(Boolean);1===t.length&&h((e=>({...e,deliveryType:t[0]})))}}),[r]);const y=e=>{h((t=>({...t,...e})));const t=Object.keys(e);m((e=>{const o={...e};return t.forEach((e=>{o[e]&&delete o[e]})),o}))},b=e=>{const t={};if(1===e){var o;if(x.deliveryType||(t.deliveryType="Order Type is required."),!x.selectedBranch&&(null===r||void 0===r||null===(o=r.branches)||void 0===o?void 0:o.length)>0){var i;(null===r||void 0===r||null===(i=r.branches)||void 0===i?void 0:i.some((e=>e.is_online)))||(t.branch="Branch is required.")}"Delivery"===x.deliveryType&&x.selectedBranch&&Array.isArray(x.regions)&&x.regions.length>0&&!x.selectedRegion&&(t.region="Region is required.")}else 2===e&&(x.fullName||(t.fullName="Full Name is required."),x.phoneNumber||(t.phoneNumber="Phone Number is required."),"Delivery"!==x.deliveryType||x.fullAddress||(t.fullAddress="Full Address is required for delivery."),"DineIn"!==x.deliveryType||x.tableNumber||(t.tableNumber="Table Number is required."));return m(t),0===Object.keys(t).length};return(0,q.jsxs)(pn,{children:[(0,q.jsxs)(xn,{children:[(0,q.jsx)(hn,{children:jn[p].label}),(0,q.jsx)(gn,{onClick:()=>o(null),"aria-label":"Close cart",children:"\u2715"})]}),(0,q.jsx)(mn,{children:jn.map(((e,t)=>(0,q.jsxs)(fn,{active:t<=p,children:[(0,q.jsx)(vn,{active:t<=p,completed:t<p,children:t<p?"\u2713":e.number}),(0,q.jsx)("span",{children:e.label})]},e.id)))}),(0,q.jsx)(yn,{children:(()=>{switch(p){case 0:return(0,q.jsx)(xr,{formData:x,updateFormData:y,restaurant:r,activeLanguage:d});case 1:return(0,q.jsx)(Tr,{formData:x,updateFormData:y,restaurant:r,errors:g,setErrors:m});case 2:return(0,q.jsx)(Jr,{formData:x,updateFormData:y,restaurant:r,errors:g,restaurantName:l,activeLanguage:d});case 3:return(0,q.jsx)(cn,{formData:x,restaurant:r,activeLanguage:d});default:return null}})()}),(0,q.jsxs)(bn,{children:[p>0&&(0,q.jsx)(wn,{onClick:()=>{p>0&&u(p-1)},variant:"secondary",children:"Back"}),p<jn.length-1?(0,q.jsx)(wn,{onClick:()=>{if(b(p)){if(0===p&&null!==r&&void 0!==r&&r.id){var e;const t=(null===(e=x.selectedBranch)||void 0===e?void 0:e.id)||null;(0,Di.trackCheckoutStart)(r.id,t,x.deliveryType||null)}p<jn.length-1&&u(p+1)}},variant:"primary",children:"Next"}):(0,q.jsx)(wn,{onClick:async()=>{var e,t,i,n;if(!b(2))return;let a="";switch(null===r||void 0===r?void 0:r.currency){case"dollar":a="$";break;case"lb":a="L.L.";break;case"gram":a="g";break;case"kilogram":a="kg"}let p=0,u="";u+=`*New Order - ${x.deliveryType}*\n`,u+="--------------------\n\n",u+="*Items:*\n",s.forEach(((e,t)=>{const o="dine_in"===e.menuMode?" [Dine In]":"delivery"===e.menuMode?" [Delivery]":"",i=("ar"===d?e.ar_name:e.en_name||"").trim(),r=("ar"===d?e.category.ar_category:e.category.en_category||"").trim(),n=e.price*e.quantity;p+=n,u+=`${t+1}. *${i}*${o}\n`,u+=`    ${r}\n`,u+=`    ${e.quantity}x ${e.price} ${a} = *${n} ${a}*\n`,e.formData&&(u+=(0,Fi.Ve)(e,"ar"===d?"ar":"en")),e.instruction&&(u+=`    > _${e.instruction}_\n`),u+="\n"})),u+="--------------------\n",u+=`*Total: ${(0,Xe.T)(p,a)}*\n\n`,u+="*Customer:*\n",u+=`- ${x.fullName}\n`,u+=`- ${x.phoneNumber}\n`,x.selectedRegion&&(u+=`- Region: ${x.selectedRegion}\n`);let h="";"Delivery"===x.deliveryType&&(u+="\n*Delivery Address:*\n",u+=`${x.fullAddress}\n`,x.selectedLocation&&(h=`https://www.google.com/maps?q=${x.selectedLocation.latitude},${x.selectedLocation.longitude}`)),"DineIn"===x.deliveryType&&(u+=`- Table: #${x.tableNumber}\n`),x.note&&(u+=`\n*Note:* _${x.note}_\n`),h&&(u+=`\n${h}\n`);let g="",m="";var v;null!==(e=x.selectedBranch)&&void 0!==e&&e.whatsapp_number?(m=(0,Li.J)(null===(v=x.selectedBranch)||void 0===v?void 0:v.whatsapp_number,null===r||void 0===r?void 0:r.country_code),g=(0,Li.G)(m,u)):g=(0,Li.G)(r.phone_number,u);const y=[...s.map((e=>{var t;return{id:e.id,quantity:e.quantity,branch_id:null===(t=x.selectedBranch)||void 0===t?void 0:t.id,restaurant_id:r.id}}))],w=[...s.map((e=>({product_id:e.id,product_name:"en"===d?e.en_name:e.ar_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",menu_mode:e.menuMode||"both",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];f({products:y,restaurant_id:r.id,branch_id:null===(t=x.selectedBranch)||void 0===t?void 0:t.id,delivery_type:x.deliveryType,customer_name:x.fullName,customer_phone:x.phoneNumber,customer_address:"Delivery"===x.deliveryType?x.fullAddress:null,customer_latitude:(null===(i=x.selectedLocation)||void 0===i?void 0:i.latitude)||null,customer_longitude:(null===(n=x.selectedLocation)||void 0===n?void 0:n.longitude)||null,table_number:"DineIn"===x.deliveryType?x.tableNumber:null,note:x.note,items:w,subtotal:p,total:p,currency:r.currency},l).then((e=>{if(null!==r&&void 0!==r&&r.id){var t,o,i;const n=(null===(t=x.selectedBranch)||void 0===t?void 0:t.id)||null;(0,Di.trackOrderPlaced)(r.id,(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(i=o.order)||void 0===i?void 0:i.id)||null,x.deliveryType,p,n,{items:w,customerName:x.fullName})}})).catch((e=>console.error("Order creation failed:",e))),window.location.href=g,c((0,Wt.sX)(l)),o(null)},variant:"primary",disabled:v,children:v?"Submitting...":"Submit Order"})]})]})}function $n(e){let{restaurant:t,showPopup:o,popupHandler:r=(()=>{})}=e;const{restaurantName:n}=(0,k.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n,s=(0,A.d4)((e=>e.cart[l]||[])),d=(0,A.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[l])||void 0===o?void 0:o.activeLanguage)||"en"})),c=0===s.length;(0,i.useEffect)((()=>{const e=()=>{r(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);return(0,q.jsx)(Ti,{showPopup:o,children:c?(0,q.jsx)(_i,{children:"en"===d?"Your cart is empty":"\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0641\u0627\u0631\u063a\u0629"}):(0,q.jsx)(Cn,{popupHandler:r,restaurant:t})})}const An=r.Ay.div`
height: 100vh;
position: fixed;
width: 100%;
left: ${e=>e.showSidebar?"0":"-100%"};
top:0;
  transition:all  0.5s ease-in-out;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
z-index: 100;
`,kn=r.Ay.div`
width: 100%;
height: 100%;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
`,zn=r.Ay.div`
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
`,Ln=r.Ay.div`
width: 100%;
  height: 60%; /* 60% of the sidebar height */
  overflow-y: auto;
  margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,Sn=r.Ay.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-start;
`,Tn=r.Ay.span`
    /* overflow: hidden;
    text-overflow: ellipsis; */
    margin-left:${e=>e.categoryType?"10%":"0%"};

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 13px;
    color: ${e=>e.theme.sidebartext};

`,_n=r.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10%;

`,In=r.Ay.img`
width:20px;
height:20px;
`,En=r.Ay.div`
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vh;
`,Nn=r.Ay.img`
max-width: 200px;
max-height: 200px;
margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,Pn=r.Ay.div`
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

`,Fn=r.Ay.input`
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

`,Dn=(0,r.Ay)(g.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};
color:${e=>e.theme.sidebarsearchText};

`,Rn=(0,r.Ay)(ee.IMk)`
position: absolute;
left: 20px;
top: 20px;
color: ${e=>e.theme.sidebarsearch};
font-size: 27px;

`;function Un(e){let{activeCategory:t,setactiveCategory:o,categories:r,showSidebar:n,setshowSidebar:a,setcarouselPosition:l}=e;const{restaurantName:s}=(0,k.g)(),[d,c]=(0,he.ok)(),p=window.location.hostname.split(".")[0],u="menugic"!==p&&"localhost"!==p&&"www"!==p?p:s,x=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[u]})),[h,g]=(0,i.useState)(""),m=null===r||void 0===r?void 0:r.filter((e=>"en"===(null===x||void 0===x?void 0:x.activeLanguage)?(e.en_category||"").toLowerCase().includes(h.toLowerCase()):(e.ar_category||"").toLowerCase().includes(h.toLowerCase())));return(0,q.jsxs)(An,{showSidebar:n,children:[(0,q.jsx)(kn,{onClick:()=>{a(!1)},showSidebar:n}),(0,q.jsxs)(zn,{children:[(0,q.jsx)(Rn,{}),(0,q.jsx)(En,{children:(0,q.jsx)(Nn,{showSidebar:n,src:x.logoURL&&`https://storage.googleapis.com/ecommerce-bucket-testing/${x.logoURL}`})}),(0,q.jsxs)(Pn,{showSidebar:n,children:[(0,q.jsx)(Dn,{activeLanguage:null===x||void 0===x?void 0:x.activeLanguage}),(0,q.jsx)(Fn,{type:"text",activeLanguage:null===x||void 0===x?void 0:x.activeLanguage,dir:"en"==(null===x||void 0===x?void 0:x.activeLanguage)?"ltr":"rtl",placeholder:"en"==(null===x||void 0===x?void 0:x.activeLanguage)?"Search Categories":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{g(e.target.value)},value:h})]}),(0,q.jsx)(Ln,{showSidebar:n,children:null===m||void 0===m?void 0:m.sort(((e,t)=>t.priority-e.priority)).map(((e,i)=>(0,q.jsxs)(Sn,{onClick:()=>((e,t)=>{o(e),l(t),a(!1)})(e.id,i),children:["horizantal-withoutIcon"!=x.category_type&&(0,q.jsx)(_n,{activeCategory:t,categoryId:e.id,children:(0,q.jsx)(In,{src:e.image_url?(0,M.V)(e.image_url):e.isAllItems&&null!==x&&void 0!==x&&x.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${x.logoURL}`:e.isAllItems&&null!==x&&void 0!==x&&x.cover_url?`https://storage.googleapis.com/ecommerce-bucket-testing/${x.cover_url}`:""})}),(0,q.jsx)(Tn,{categoryType:"horizantal-withoutIcon"==x.category_type,activeCategory:t,categoryId:e.id,children:"en"==(null===x||void 0===x?void 0:x.activeLanguage)?e.en_category:e.ar_category})]},i)))})]})]})}var On=o(72929),Mn=o(58169);r.Ay.div`

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

`;const qn=r.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,Bn=(r.i7`
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
`),Wn=r.Ay.div`
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
`,Hn=r.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position:relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
`,Xn=r.Ay.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  vertical-align: top;

`,Yn=r.Ay.div`
  height: 100%;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;

`,Vn=r.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Kn=r.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${Vn} 1s linear infinite; /* Apply animation */
`,Jn=r.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,Gn=r.Ay.img`
  height: 100%;
  object-fit: cover;
  border-radius: ${e=>e.$cardSlide?"0":e.CloseAnimation?"40px":"10px"};
  width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"90%":"100%"};
  display: ${e=>e.Loaded?"block":"none"};
  transition: all 0.8s;
  @media (min-width: 1024px) {
    width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"50%":"100%"};
  }
`,Zn=r.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,Qn=((0,r.Ay)(Ke.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,(0,r.Ay)(Ke.m6W)`
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
`),ea=(0,r.Ay)(Ke.OQo)`
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
`,ta=(r.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${Zn} 0.8s ease-in-out;
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
`),oa=(r.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${ta} 1.8s ease-in-out;
`,r.Ay.div`
  width:90%;
  height: 45vh;
  margin-top: 80px;
  display: flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${qn} 0.8s;
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
`),ia=r.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,ra=r.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${oa} 1.8s ease-in-out;

`,na=r.Ay.div`
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
`,aa=r.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:center;
  opacity: 1;
  margin-top: 5px;
`,la=r.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,sa=r.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,da=r.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,ca=r.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,pa=r.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,ua=r.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,xa=r.Ay.div`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${ua} 0.7s ease-in-out;
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
`,ha=r.Ay.button`
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
`,ga=r.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,ma=r.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,fa=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,va=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,ya=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,ba=r.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,wa=(r.Ay.div`
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
  animation: ${ba} 0.8s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,r.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`),ja=r.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,Ca=r.Ay.input`
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

`,$a=r.Ay.button`
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
`,Aa=r.Ay.div`
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
`,ka=r.Ay.button`
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
`,za=r.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`;var La=o(88282);const Sa=r.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display:flex;
`,Ta=r.Ay.div`
display: flex;
flex-direction: row;
`,_a=r.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,Ia=r.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,Ea=r.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,Na=r.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,Pa=r.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,Fa=r.Ay.span`
position: absolute;
left: 0;

`,Da=r.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,Ra=(0,r.Ay)(n.Z0P)`
    animation:1.2s ${Da}  linear infinite ;
    position: absolute;
`;function Ua(e){let{carouselIndex:t,images:o,CloseAnimation:i,carouselSwiped:r}=e;return(0,q.jsxs)(Sa,{CloseAnimation:i,children:[(0,q.jsxs)(Ta,{children:[(0,q.jsx)(_a,{carouselIndex:t,children:(0,q.jsx)(Ia,{})}),o.map((e=>(0,q.jsx)(Ea,{children:(0,q.jsx)(Na,{})})))]}),!r&&(0,q.jsxs)(Pa,{children:[(0,q.jsx)(Fa,{children:"Swipe"}),(0,q.jsx)(Ra,{})]})]})}r.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,r.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const Oa=r.Ay.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,Ma=(r.Ay.label`
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
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(Ge().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`),qa=r.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,Ba=r.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Wa=r.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let t=e.theme.formColor;if(Ge().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.3)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.3)`)):t}};
  font-size:10px;

`,Ha=r.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,Xa=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Ya(e){let{component:t,formData:o,handleChange:r,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||[]);return(0,q.jsxs)(Ma,{index:n,children:[(0,q.jsx)(Oa,{children:t.label}),t.values.map((e=>(0,q.jsxs)(Ba,{children:[s.some((t=>t===e.label))?(0,q.jsx)(Ha,{onClick:()=>{(e=>{let o=s.filter((t=>t!==e.label));d(o),r(t.key,o)})(e)},children:(0,q.jsx)(po.RXm,{size:"15px"})}):(0,q.jsx)(Wa,{onClick:()=>{(e=>{d([...s,e.label]),r(t.key,[...s,e.label])})(e)},children:(0,q.jsx)(co.OiG,{})}),(0,q.jsx)(qa,{children:e.label})]}))),(c=a,c in l?(0,q.jsx)(Xa,{children:"This field is required"}):null)]});var c}const Va=r.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};

  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(Ge().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,Ka=r.Ay.div`
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
`,Ja=r.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,Ga=r.Ay.ul`
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

`,Za=r.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,Qa=r.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,el=r.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,tl=r.Ay.div`
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
`,ol=(r.Ay.label`
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

`);function il(e){var t;let{component:o,formData:r,handleChange:n,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;const[c,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===(t=r[o.key])||void 0===t?void 0:t.value)||""),h=(0,i.useRef)(null),g=e=>{x(e.label),p(!1),n(o.key,e)},m=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,q.jsxs)(Va,{ref:h,index:l,children:[(0,q.jsx)(Oa,{children:o.label}),o.data.values.length>8?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Ka,{onClick:()=>p((e=>!e)),children:[u||a,(0,q.jsx)(Ja,{className:c?"up":"",children:"\u25bc"})]}),(0,q.jsx)(Ga,{isOpen:c,children:o.data.values.map(((e,t)=>(0,q.jsx)(Za,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},t)))})]}):(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(Qa,{children:o.data.values.map(((e,t)=>(0,q.jsx)(el,{children:(0,q.jsx)(tl,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,q.jsx)(ol,{children:"This field is required"}):null)]});var f}const rl=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(Ge().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,nl=r.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,al=r.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,ll=r.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,sl=r.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,dl=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function cl(e){let{component:t,formData:o,handleChange:r,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||"");return(0,q.jsxs)(rl,{index:n,children:[(0,q.jsx)(Oa,{children:t.label}),t.values.map((e=>(0,q.jsxs)(al,{children:[(0,q.jsx)(ll,{onClick:()=>{(e=>{d(e),r(t.key,e)})(e)},children:(0,q.jsx)(sl,{selected:s.label==e.label})}),(0,q.jsx)(nl,{children:e.label})]}))),(c=a,c in l?(0,q.jsx)(dl,{children:"This field is required"}):null)]});var c}function pl(e){let{formSchema:t,onPriceChange:o,basePrice:r,formData:n,setFormData:a,formErrors:l}=e;(0,i.useEffect)((()=>{d(n)}),[n]);const s=(e,t)=>{a((o=>({...o,[e]:t})))},d=e=>{let i=parseFloat(r)||0,n=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const o=t.values.find((t=>t.label===e)),i=!isNaN(Number(o.value));o&&o.value&&i&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")&&(n-=parseFloat(o.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const o=t.data.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),r=!isNaN(Number(o.value));o&&r&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?n-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}else if("radio"===t.type&&t.values){const o=t.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),r=!isNaN(Number(o.value));o&&r&&(o.value.startsWith("+")?n+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?n-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}}));const a=i+n,l=a%1!==0?a.toFixed(2):a.toFixed(0);o(l)};return(0,q.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return(0,q.jsx)(Ya,{component:e,formData:n,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"select":return(0,q.jsx)(il,{component:e,formData:n,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"radio":return(0,q.jsx)(cl,{component:e,formData:n,handleChange:s,index:t,componentKey:e.key,formErrors:l});default:return null}})(e,t)))})}const ul=(0,i.createContext)({menuMode:null,setMenuMode:()=>{}}),xl=()=>(0,i.useContext)(ul),hl=ul;function gl(e){var t,o,r;let{productId:l,setSearchParams:s,searchParams:d}=e;const{menuMode:c}=xl(),{restaurantName:p}=(0,k.g)(),u=window.location.hostname.split(".")[0],x="menugic"!==u&&"localhost"!==u&&"www"!==u?u:p,h=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]}));let g=null;const{response:m,isLoading:f}=(0,La.VL)({productId:l,onSuccess:()=>{}}),{response:v}=(0,Eo.$)({productId:l});var y;((0,i.useEffect)((()=>{if(null!==m&&void 0!==m&&m.en_price&&!f){var e;const r=Ye(m,c);var t;if(K(r),G(r),0===parseFloat(null===m||void 0===m||null===(e=m.category)||void 0===e?void 0:e.discount))te(parseFloat(null===m||void 0===m?void 0:m.discount)||0);else te(parseFloat(null===m||void 0===m||null===(t=m.category)||void 0===t?void 0:t.discount)||0);if(null!==h&&void 0!==h&&h.id&&null!==m&&void 0!==m&&m.id){var o,i;const e=(null===h||void 0===h||null===(o=h.branches)||void 0===o||null===(i=o[0])||void 0===i?void 0:i.id)||null;(0,Di.trackItemView)(h.id,m.id,m.category_id,e,{name:m.en_name,price:parseFloat(m.en_price)||0})}}}),[f]),Ge().isEmpty(null===m||void 0===m?void 0:m.form_json))||(g=Ge().isEmpty(JSON.parse(null===m||void 0===m?void 0:m.form_json))?null===m||void 0===m||null===(y=m.category)||void 0===y?void 0:y.form_json:null===m||void 0===m?void 0:m.form_json);const[b,w]=(0,i.useState)({});(0,i.useEffect)((()=>{if(!Ge().isEmpty(g)){var e;const t=JSON.parse(g);if(w(t),2===(null===t||void 0===t?void 0:t.version)&&(null===t||void 0===t||null===(e=t.sizes)||void 0===e?void 0:e.length)>0){const e=parseFloat(null===m||void 0===m?void 0:m.en_price)||0,o=t.sizes.find((t=>"absolute"===t.priceMode&&Number(t.priceModifier)===e));C((()=>({...(0,Io.KE)(),sizeId:o?o.id:t.sizes[0].id})))}}}),[g]);const[j,C]=(0,i.useState)({}),[$,L]=(0,i.useState)({}),S=(0,A.wA)(),[T,_]=(0,i.useState)(1),[I,E]=(0,i.useState)(!1),N=(0,i.useRef)(null),[P,F]=(0,i.useState)(!1),[D,R]=(0,i.useState)(1),[U,O]=(0,i.useState)({x:0,y:0}),[B,W]=(0,i.useState)(!1),H=(0,i.useRef)(null),X=(0,i.useRef)(null),Y=(0,i.useRef)(0),[V,K]=(0,i.useState)(parseFloat(null===m||void 0===m?void 0:m.en_price)||0),[J,G]=(0,i.useState)(parseFloat(null===m||void 0===m?void 0:m.en_price)||0),[Z,Q]=(0,i.useState)(""),[ee,te]=(0,i.useState)(0),oe=Boolean(null===m||void 0===m?void 0:m.out_of_stock)||1===Number(null===m||void 0===m?void 0:m.out_of_stock),ie=e=>{G(parseFloat(e)||0)},[re,ne]=(0,i.useState)(!0),[ae,le]=(0,i.useState)(0),se=()=>{ne(!1),le(0),setTimeout((()=>{const e=new URLSearchParams(d);e.delete("productId"),s(e),document.body.style.overflow="auto"}),800)},[de,ce]=(0,i.useState)(!1),pe=()=>{E(!0),le(ae+1)},ue=()=>{E(!0),le(ae-1)},xe=(0,i.useRef)(null),[he,ge]=(0,i.useState)(null),me=null!==h&&void 0!==h&&h.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${h.logoURL}`:null,fe=()=>{R(1),O({x:0,y:0}),F(!0)};(0,i.useEffect)((()=>{const e=()=>{se()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const ve=2===(null===b||void 0===b?void 0:b.version)&&Array.isArray(null===b||void 0===b?void 0:b.sizes);let ye=[...null!==(t=null===m||void 0===m?void 0:m.images)&&void 0!==t?t:[]];const be=ye.findIndex((e=>e.id===m.new_cover_id));if(be>0){const[e]=ye.splice(be,1);ye.unshift(e)}const[we,je]=(0,i.useState)({}),Ce=e=>{je((t=>({...t,[e]:!0})))},$e="en"===(null===h||void 0===h?void 0:h.activeLanguage)?null===m||void 0===m?void 0:m.en_description:null===m||void 0===m?void 0:m.ar_description;let Ae;switch(null===h||void 0===h?void 0:h.currency){case"dollar":Ae="$";break;case"lb":Ae="L.L.";break;case"gram":Ae="g";break;case"kilogram":Ae="kg";break;default:Ae=""}const ke=(null===h||void 0===h?void 0:h.product_details_carousel_style)||"normal";return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(On.z,{CloseAnimation:re,onClick:se}),(0,q.jsx)(On.Z,{CloseAnimation:re,$premiumMobile:!f,children:!f&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Mn.Tn,{CloseAnimation:re,children:[(0,q.jsx)(Mn.k8,{onClick:se,CloseAnimation:re,type:"button",children:(0,q.jsx)(Mn.Z3,{})}),(0,q.jsx)(Mn.N0,{activeLanguage:null===h||void 0===h?void 0:h.activeLanguage,children:"en"==h.activeLanguage?null===m||void 0===m||null===(o=m.category)||void 0===o?void 0:o.en_category:null===m||void 0===m||null===(r=m.category)||void 0===r?void 0:r.ar_category}),(0,q.jsx)(Mn.i8,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),ce(!0),setTimeout((()=>{ce(!1)}),4e3)},CloseAnimation:re,children:de?(0,q.jsx)(po.RXm,{}):(0,q.jsx)(n.zU_,{})})]}),(0,q.jsx)(Bn,{squareDimension:null===m||void 0===m?void 0:m.square_dimension,CloseAnimation:re,isNormalCarousel:"normal"===ke,children:1===ye.length?(0,q.jsx)(Hn,{carouselIndex:0,children:(0,q.jsx)(Xn,{children:(0,q.jsxs)(Yn,{children:[!we[0]&&(0,q.jsx)(Jn,{children:(0,q.jsx)(Kn,{})}),(0,q.jsx)(Gn,{src:ye[0].url?(0,M.V)(ye[0].url):me||"",onLoad:()=>Ce(0),onError:e=>{me&&e.target.src!==me&&(e.target.src=me)},CloseAnimation:re,Loaded:we[0],alt:"Image 0"}),(0,q.jsx)($a,{onClick:fe,children:(0,q.jsx)(z.gff,{})})]})})}):"normal"===ke?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Qn,{CloseAnimation:re,onClick:()=>{E(!0),0!==ae&&ue()}}),(0,q.jsx)(ea,{CloseAnimation:re,onClick:()=>{E(!0),ye.length>ae+1&&pe()}}),(0,q.jsx)(Hn,{carouselIndex:ae,ref:xe,onTouchStart:e=>{ge(e.touches[0].clientX)},onTouchMove:e=>{if(he){const t=e.touches[0].clientX-he;t>5?0!==ae&&ue():t<-5&&m.images.length>ae+1&&pe(),ge(null)}},children:ye.map(((e,t)=>(0,q.jsx)(Xn,{children:(0,q.jsxs)(Yn,{children:[!we[t]&&(0,q.jsx)(Jn,{children:(0,q.jsx)(Kn,{})}),(0,q.jsx)(Gn,{src:we[t]||t===ae?null!==e&&void 0!==e&&e.url?(0,M.V)(e.url):me||"":"",onLoad:()=>Ce(t),onError:e=>{me&&e.target.src!==me&&(e.target.src=me)},CloseAnimation:re,Loaded:we[t],alt:`Image ${t}`}),ae===t&&(0,q.jsx)($a,{onClick:fe,children:(0,q.jsx)(z.gff,{})})]})},e.id||t)))})]}):"effect-cards"===ke?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Qn,{CloseAnimation:re,onClick:()=>N.current&&N.current.slidePrev()}),(0,q.jsx)(Wn,{children:(0,q.jsx)(No.RC,{modules:[Po.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{N.current=e},onSlideChange:e=>{le(e.realIndex),E(!0)},children:ye.map(((e,t)=>(0,q.jsx)(No.qr,{children:(0,q.jsxs)(Yn,{children:[!we[t]&&(0,q.jsx)(Jn,{children:(0,q.jsx)(Kn,{})}),(0,q.jsx)(Gn,{src:we[t]||t===ae?null!==e&&void 0!==e&&e.url?(0,M.V)(e.url):me||"":"",onLoad:()=>Ce(t),onError:e=>{me&&e.target.src!==me&&(e.target.src=me)},CloseAnimation:re,Loaded:we[t],$cardSlide:!0,alt:`Image ${t}`}),ae===t&&(0,q.jsx)($a,{onClick:fe,children:(0,q.jsx)(z.gff,{})})]})},e.id||t)))},null===m||void 0===m?void 0:m.id)}),(0,q.jsx)(ea,{CloseAnimation:re,onClick:()=>N.current&&N.current.slideNext()})]}):(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(Wn,{children:(0,q.jsx)(No.RC,{onSwiper:e=>{N.current=e},onSlideChange:e=>{le(e.realIndex),E(!0)},modules:[Po.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:ye.map(((e,t)=>(0,q.jsx)(No.qr,{children:(0,q.jsxs)(Yn,{children:[!we[t]&&(0,q.jsx)(Jn,{children:(0,q.jsx)(Kn,{})}),(0,q.jsx)(Gn,{src:we[t]||t===ae?null!==e&&void 0!==e&&e.url?(0,M.V)(e.url):me||"":"",onLoad:()=>Ce(t),onError:e=>{me&&e.target.src!==me&&(e.target.src=me)},CloseAnimation:re,Loaded:we[t],$cardSlide:!0,alt:`Image ${t}`}),ae===t&&(0,q.jsx)($a,{onClick:fe,children:(0,q.jsx)(z.gff,{})})]})},e.id||t)))},null===m||void 0===m?void 0:m.id)})})}),1!==ye.length&&"normal"!==ke&&(0,q.jsx)(Ua,{images:ye,carouselIndex:ae,CloseAnimation:re,carouselSwiped:I}),(0,q.jsx)(ia,{children:(0,q.jsx)(ra,{children:(0,q.jsxs)(na,{CloseAnimation:re,activeLanguage:h.activeLanguage,children:[(0,q.jsx)(aa,{activeLanguage:h.activeLanguage,children:"en"==h.activeLanguage?null===m||void 0===m?void 0:m.en_name:null===m||void 0===m?void 0:m.ar_name}),!Ge().isEmpty(null===m||void 0===m?void 0:m.en_price)&&(0,q.jsxs)(da,{children:[(0,q.jsx)(ca,{activeLanguage:h.activeLanguage,discounted:0!=ee,children:(0,Xe.T)(J,Ae)}),0!=ee&&(0,q.jsx)(pa,{activeLanguage:h.activeLanguage,children:(0,Xe.T)(J*(1-parseFloat(ee)/100),Ae)})]}),(0,q.jsx)(la,{activeLanguage:h.activeLanguage,dangerouslySetInnerHTML:{__html:$e}}),oe&&(0,q.jsx)(sa,{children:"en"===h.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),ve&&(0,q.jsx)(_o.A,{options:b,formData:j,setFormData:C,formErrors:$,activeLanguage:h.activeLanguage,basePrice:String(Ye(m,c)),onPriceChange:ie}),!ve&&(null===b||void 0===b?void 0:b.components)&&(0,q.jsx)(pl,{formSchema:b,onPriceChange:ie,formData:j,setFormData:C,basePrice:String(Ye(m,c)),formErrors:$}),(0,q.jsxs)(wa,{activeLanguage:h.activeLanguage,children:[(0,q.jsx)(ja,{children:"en"==h.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,q.jsx)(Ca,{activeLanguage:h.activeLanguage,onChange:e=>Q(e.target.value),placeholder:"en"==h.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),!oe&&(0,q.jsxs)(xa,{CloseAnimation:re,children:[(0,q.jsxs)(ma,{CloseAnimation:re,children:[(0,q.jsx)(fa,{onClick:()=>{_(T+1)},children:"+"}),(0,q.jsx)(ya,{children:T}),(0,q.jsx)(va,{onClick:()=>{T>1&&_(T-1)},children:"-"})]}),(0,q.jsxs)(ha,{onClick:()=>{if(ve){var e;const t={};if((null===(e=b.sizes)||void 0===e?void 0:e.length)>0&&(null===j||void 0===j||!j.sizeId)&&(t.size="Please select a size."),Object.keys(t).length>0)return void L(t)}else if("{}"!==JSON.stringify(b)){const e=function(e,t){const o={},i=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in t&&0!==(null===(i=t[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(t[e])||(o[e]="This field is required.")})),o}(b,j);if(Object.keys(e).length>0)return void L(e)}let t=J*(1-parseFloat(ee)/100);if(setTimeout((()=>{const e=new URLSearchParams(d);e.delete("productId"),s(e),document.body.style.overflow="auto"}),800),null!==h&&void 0!==h&&h.id&&null!==m&&void 0!==m&&m.id){var o,i;const e=(null===h||void 0===h||null===(o=h.branches)||void 0===o||null===(i=o[0])||void 0===i?void 0:i.id)||null;(0,Di.trackAddToCart)(h.id,m.id,m.category_id,T,e,{name:m.en_name,price:t})}S((0,Wt.bE)(x,m,T,j,t,Z,c)),ne(!1),_(1)},children:["en"==h.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",(0,q.jsx)(ga,{children:(0,Xe.T)(T*(J*(1-parseFloat(ee)/100)),Ae)})]})]})]})}),P&&(0,q.jsxs)(Aa,{onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY;X.current=Math.hypot(t,o)}else if(1===e.touches.length){const t=Date.now();t-Y.current<300&&(R((e=>e>1?1:2.5)),O({x:0,y:0})),Y.current=t,H.current={x:e.touches[0].clientX,y:e.touches[0].clientY},W(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(t,o);if(X.current){const e=i/X.current;R((t=>Math.min(Math.max(t*e,1),5)))}X.current=i}else if(1===e.touches.length&&B&&D>1){const t=e.touches[0].clientX-H.current.x,o=e.touches[0].clientY-H.current.y;O((e=>({x:e.x+t,y:e.y+o}))),H.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{X.current=null,W(!1)},children:[(0,q.jsx)(ka,{onClick:()=>F(!1),children:(0,q.jsx)(a.$8F,{})}),(0,q.jsx)(za,{src:(()=>{const e=ye[ae];return e?e.url?(0,M.V)(e.url):me||"":""})(),style:{transform:`scale(${D}) translate(${U.x/D}px, ${U.y/D}px)`},alt:"Zoom"})]})]})}const ml=r.Ay.div`
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
`,fl=r.Ay.div`
width: 80%;
display: flex;
flex-direction: column;
padding-top:40px;
`,vl=r.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,yl=(r.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,(0,r.Ay)(z.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`),bl=(0,r.Ay)(Ke.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`,wl=r.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor}

`,jl=r.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor};
margin-top: 20px;
`,Cl=r.Ay.div`
display: flex;
flex-direction: row;
gap:15px;
margin-top: 20px;


`,$l=r.Ay.div`
display: flex;
flex-direction: column;
gap:5px;
align-items: center;
justify-content: center;

`,Al=r.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #8bffb83d;
`,kl=(0,r.Ay)(n.EcP)`
font-size: 24px;
color:#51C288;
`,zl=r.Ay.div`
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

background-size: 300% 300%; /* Creates a smooth animated effect */`,Ll=(0,r.Ay)(n.ao$)`
font-size: 24px;
/* color:#51C288; */
color:#5c595b;



`,Sl=r.Ay.span`
font-size: 10px;
color:${e=>e.theme.popupTextColor}

`,Tl=r.Ay.div`
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

`,_l=r.Ay.div`
width: 85%;
overflow: hidden;

`,Il=r.Ay.span`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
white-space: nowrap;
`,El=(0,r.Ay)(n.zU_)`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`,Nl=(0,r.Ay)(po.RXm)`
font-size: 18px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`;function Pl(e){let{showPopup:t,popupHandler:o,activeCategory:r}=e;const{restaurantName:n}=(0,k.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n;(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[l].activeLanguage}));(0,i.useEffect)((()=>{const e=()=>{o(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const[s,d]=(0,i.useState)(!1);return(0,q.jsxs)(ml,{showPopup:t,children:[(0,q.jsx)(bl,{onClick:()=>{o(null)}}),(0,q.jsxs)(fl,{children:[(0,q.jsx)(wl,{children:"Share Category"}),(0,q.jsxs)(Cl,{children:[(0,q.jsxs)($l,{children:[(0,q.jsx)(Al,{onClick:()=>(e=>{const t=window.location.origin+window.location.pathname,o=`https://api.whatsapp.com/send?text=${encodeURIComponent(t+"?categoryId="+e)}`;window.open(o,"_blank")})(r),children:(0,q.jsx)(kl,{})}),(0,q.jsx)(Sl,{children:"Whatsapp"})]}),(0,q.jsxs)($l,{children:[(0,q.jsx)(zl,{onClick:()=>{window.open("https://www.instagram.com/direct/inbox/","_blank")},children:(0,q.jsx)(Ll,{})}),(0,q.jsx)(Sl,{children:"Instagram"})]})]}),(0,q.jsx)(jl,{children:"Get Link"}),(0,q.jsxs)(Tl,{children:[(0,q.jsx)(_l,{children:(0,q.jsx)(Il,{children:(e=>{if(e){return window.location.origin+window.location.pathname+"?categoryId="+e}})(r)})}),s?(0,q.jsx)(Nl,{}):(0,q.jsx)(El,{onClick:()=>(e=>{const t=window.location.origin+window.location.pathname;navigator.clipboard.writeText(t+"?categoryId="+e),d(!0),setTimeout((()=>{d(!1)}),4e3)})(r)})]})]}),(0,q.jsxs)(vl,{children:["Copyright",(0,q.jsx)(yl,{}),"2024 ",(0,q.jsx)(he.N_,{href:"https://www.menugic.com",children:"menugic.com"})]})]})}var Fl=o(31088),Dl=o(5677),Rl=o(38495);const Ul=r.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,Ol=r.Ay.div`
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
  animation: ${Ul} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,Ml=r.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,ql=r.Ay.div`
  display: flex;
  gap: 10px;
`,Bl=r.Ay.button`
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
`,Wl=r.Ay.button`
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

`,Hl=e=>{let{onInstall:t,onDismiss:o,restaurantName:i,showInstallPopup:r}=e;return(0,q.jsxs)(Ol,{showInstallPopup:r,children:[(0,q.jsxs)(Ml,{children:["Access ",(0,q.jsx)("b",{children:i})," anytime with one tap ",(0,q.jsx)("b",{children:"Install The App!"})]}),(0,q.jsxs)(ql,{children:[(0,q.jsx)(Bl,{onClick:t,children:"Install"}),(0,q.jsx)(Wl,{onClick:o,children:"Dismiss"})]})]})},Xl=r.i7`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Yl=r.i7`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
`,Vl=r.i7`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,Kl=r.Ay.div`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  position: relative;
  overflow: hidden;
  background: ${e=>{let{theme:t}=e;return`linear-gradient(160deg, ${t.mainColor||"#1a1a2e"} 0%, ${t.backgroundColor||"#16213e"} 40%, #0d1117 100%)`}};

  /* Animated ambient glow orbs */
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(80px);
    animation: ${Yl} 6s ease-in-out infinite;
  }

  &::before {
    width: 300px;
    height: 300px;
    top: -80px;
    right: -60px;
    background: ${e=>{let{theme:t}=e;return t.mainColor||"#4a90d9"}};
    opacity: 0.25;
  }

  &::after {
    width: 250px;
    height: 250px;
    bottom: -60px;
    left: -60px;
    background: ${e=>{let{theme:t}=e;return t.categoryActive||t.mainColor||"#6c5ce7"}};
    opacity: 0.2;
    animation-delay: 3s;
  }
`,Jl=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  max-width: 440px;
  width: 100%;
  z-index: 1;
`,Gl=r.Ay.div`
  animation: ${Xl} 0.7s ease-out;
  position: relative;

  /* Soft ring behind logo */
  &::before {
    content: "";
    position: absolute;
    inset: -12px;
    border-radius: 32px;
    background: ${e=>{let{theme:t}=e;return`linear-gradient(135deg, ${t.mainColor||"#4a90d9"}44, transparent 60%)`}};
    filter: blur(16px);
    z-index: -1;
  }
`,Zl=r.Ay.img`
  width: 110px;
  height: 110px;
  border-radius: 28px;
  object-fit: cover;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.12);
`,Ql=r.Ay.h1`
  color: #ffffff;
  font-size: 26px;
  font-weight: 800;
  text-align: center;
  margin: 0;
  animation: ${Xl} 0.7s ease-out 0.12s both;
  line-height: 1.35;
  letter-spacing: -0.3px;

  span {
    display: block;
    background: linear-gradient(
      90deg,
      #fff 0%,
      ${e=>{let{theme:t}=e;return t.categoryActive||"#a5b4fc"}} 50%,
      #fff 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${Vl} 4s linear infinite;
  }
`,es=r.Ay.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  text-align: center;
  margin: -8px 0 0;
  animation: ${Xl} 0.7s ease-out 0.2s both;
  font-weight: 400;
  letter-spacing: 0.2px;
`,ts=r.Ay.div`
  width: 48px;
  height: 3px;
  border-radius: 2px;
  background: ${e=>{let{theme:t}=e;return`linear-gradient(90deg, transparent, ${t.mainColor||"#4a90d9"}, transparent)`}};
  animation: ${Xl} 0.7s ease-out 0.25s both;
`,os=r.Ay.div`
  display: flex;
  gap: 14px;
  width: 100%;
  animation: ${Xl} 0.7s ease-out 0.32s both;

  @media (max-width: 380px) {
    flex-direction: column;
    gap: 12px;
  }
`,is=r.Ay.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 32px 16px 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  color: #ffffff;
  position: relative;
  overflow: hidden;

  /* Top accent line */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20%;
    right: 20%;
    height: 2px;
    border-radius: 0 0 4px 4px;
    background: ${e=>{let{$accent:t,theme:o}=e;return t||o.mainColor||"#4a90d9"}};
    opacity: 0.6;
    transition: all 0.35s ease;
  }

  &:hover,
  &:active {
    background: linear-gradient(
      165deg,
      rgba(255, 255, 255, 0.16) 0%,
      rgba(255, 255, 255, 0.06) 100%
    );
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25),
      0 0 40px ${e=>{let{$accent:t,theme:o}=e;return(t||o.mainColor||"#4a90d9")+"20"}};

    &::before {
      left: 10%;
      right: 10%;
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-3px);
  }
`,rs=r.Ay.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>{let{$accent:t,theme:o}=e;return`linear-gradient(135deg, ${t||o.mainColor||"#4a90d9"}33, ${t||o.mainColor||"#4a90d9"}11)`}};
  border: 1px solid ${e=>{let{$accent:t,theme:o}=e;return(t||o.mainColor||"#4a90d9")+"44"}};
  font-size: 32px;
  color: ${e=>{let{$accent:t,theme:o}=e;return t||o.categoryActive||"#fff"}};
  transition: transform 0.35s ease;

  ${is}:hover & {
    transform: scale(1.1);
  }
`,ns=r.Ay.span`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.3px;
`,as=r.Ay.span`
  font-size: 12.5px;
  opacity: 0.55;
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
`,ls=r.Ay.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  padding: 7px 16px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  animation: ${Xl} 0.7s ease-out 0.4s both;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
  }
`,ss=r.Ay.div`
  position: absolute;
  bottom: 20px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.25);
  font-weight: 400;
  z-index: 1;
  animation: ${Xl} 0.7s ease-out 0.5s both;
  letter-spacing: 0.5px;

  a {
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`,ds={en:{welcome:"Welcome to",choose:"How would you like to enjoy your meal?",dineInTitle:"Dine In",dineInSub:"Browse our in-house menu",deliveryTitle:"Delivery",deliverySub:"Order to your doorstep",langSwitch:"\u0639\u0631\u0628\u064a"},ar:{welcome:"\u0623\u0647\u0644\u0627\u064b \u0628\u0643 \u0641\u064a",choose:"\u0643\u064a\u0641 \u062a\u062d\u0628 \u0623\u0646 \u062a\u0633\u062a\u0645\u062a\u0639 \u0628\u0648\u062c\u0628\u062a\u0643\u061f",dineInTitle:"\u062a\u0646\u0627\u0648\u0644 \u0641\u064a \u0627\u0644\u0645\u0637\u0639\u0645",dineInSub:"\u062a\u0635\u0641\u062d \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0639\u0627\u0645 \u0641\u064a \u0627\u0644\u0645\u0637\u0639\u0645",deliveryTitle:"\u062a\u0648\u0635\u064a\u0644",deliverySub:"\u0627\u0637\u0644\u0628 \u0625\u0644\u0649 \u0628\u0627\u0628 \u0645\u0646\u0632\u0644\u0643",langSwitch:"EN"}};function cs(e){let{restaurant:t,restaurantName:o,activeLanguage:i,onSelect:r}=e;const n=(0,A.wA)(),a="ar"===i?"ar":"en",l=ds[a],s=null!==t&&void 0!==t&&t.logoURL?t.logoURL.startsWith("http")?t.logoURL:`https://storage.googleapis.com/ecommerce-bucket-testing/${t.logoURL}`:null,d="ar"===a&&null!==t&&void 0!==t&&t.ar_name?t.ar_name:(null===t||void 0===t?void 0:t.name)||o,c="en&ar"===(null===t||void 0===t?void 0:t.languages)||"en&ar"===(null===t||void 0===t?void 0:t.default_language);return(0,q.jsxs)(Kl,{children:[c&&(0,q.jsx)(ls,{onClick:()=>{const e="en"===a?"ar":"en";n((0,ce.y)({restaurantName:o,language:e})),document.documentElement.dir="ar"===e?"rtl":"ltr"},children:l.langSwitch}),(0,q.jsxs)(Jl,{children:[s&&(0,q.jsx)(Gl,{children:(0,q.jsx)(Zl,{src:s,alt:d})}),(0,q.jsxs)(Ql,{children:[l.welcome,(0,q.jsx)("span",{children:d})]}),(0,q.jsx)(es,{children:l.choose}),(0,q.jsx)(ts,{}),(0,q.jsxs)(os,{children:[(0,q.jsxs)(is,{onClick:()=>r("dine_in"),$accent:"#10b981",children:[(0,q.jsx)(rs,{$accent:"#10b981",children:(0,q.jsx)(z.NtI,{})}),(0,q.jsx)(ns,{children:l.dineInTitle}),(0,q.jsx)(as,{children:l.dineInSub})]}),(0,q.jsxs)(is,{onClick:()=>r("delivery"),$accent:"#3b82f6",children:[(0,q.jsx)(rs,{$accent:"#3b82f6",children:(0,q.jsx)(z.Xpo,{})}),(0,q.jsx)(ns,{children:l.deliveryTitle}),(0,q.jsx)(as,{children:l.deliverySub})]})]})]}),(0,q.jsxs)(ss,{children:["Powered by ",(0,q.jsx)("a",{href:"https://menugic.com",target:"_blank",rel:"noopener noreferrer",children:"Menugic"})]})]})}function ps(){var e,t,o,r;const[n,a]=(0,he.ok)(),g=n.get("productId"),m=n.get("categoryId"),{restaurantName:f}=(0,k.g)(),v=window.location.hostname.split(".")[0],y="menugic"!==v&&"localhost"!==v&&"www"!==v?v:f,b=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[y]})),w=(0,A.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[y])||void 0===o?void 0:o.activeLanguage)||"en"})),j=!(!g&&!m),[C,$]=(0,i.useState)((()=>j?"dine_in":null)),z=e=>{$(e)},[L,S]=(0,i.useState)(null),[T,_]=(0,i.useState)(""),[I,E]=(0,i.useState)(null),[N,P]=(0,i.useState)(null),[F,D]=(0,i.useState)(!0),R=(2===Number(null===b||void 0===b?void 0:b.template_id)||5===Number(null===b||void 0===b?void 0:b.template_id))&&(!0===(null===b||void 0===b?void 0:b.show_all_items_category)||1===(null===b||void 0===b?void 0:b.show_all_items_category)||"1"===(null===b||void 0===b?void 0:b.show_all_items_category)),U={id:"all-items",en_category:"All Items",ar_category:"\u0643\u0644 \u0627\u0644\u0623\u0635\u0646\u0627\u0641",isAllItems:!0,priority:999999,image_url:(null===b||void 0===b?void 0:b.logoURL)||(null===b||void 0===b?void 0:b.cover_url)||null},O=[...(null===b||void 0===b?void 0:b.categories)||[]].sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))),M=R?[U,...O]:O,[B,W]=(0,i.useState)(m?M.findIndex((e=>e.id==m)):0),H=(0,A.d4)((e=>(e.cart[y]||[]).reduce(((e,t)=>e+t.quantity),0))),[X,Y]=(0,i.useState)(m||(null===M||void 0===M||null===(e=M[0])||void 0===e?void 0:e.id)),V=(0,i.useCallback)((e=>{Y(e);const t=new URLSearchParams(n);"all-items"===e?t.delete("categoryId"):t.set("categoryId",e),a(t)}),[n,a]),K=e=>{document.body.style.overflow=null==e?"auto":"hidden",S(e)};(0,i.useEffect)((()=>{if(null!==b&&void 0!==b&&b.id){var e,t;const o=(null===b||void 0===b||null===(e=b.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,Di.trackVisit)(b.id,o),(0,Di.trackPageView)(b.id,o)}}),[null===b||void 0===b?void 0:b.id]),(0,i.useEffect)((()=>{const e=e=>{e.preventDefault(),P(e),D(!0)};return window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",(e=>{console.log("\ud83c\udf89 Application installed successfully!")})),()=>{window.removeEventListener("beforeinstallprompt",e)}}),[]);let J={};try{J=JSON.parse((null===b||void 0===b?void 0:b.features)||"{}")}catch(Q){J={}}const G=(null===b||void 0===b?void 0:b.sliderImages)||[],Z=(!0===(null===b||void 0===b?void 0:b.show_slider_image)||1===(null===b||void 0===b?void 0:b.show_slider_image)||"1"===(null===b||void 0===b?void 0:b.show_slider_image))&&G.length>0;return C?(0,q.jsx)(hl.Provider,{value:{menuMode:C,setMenuMode:z},children:(0,q.jsxs)(l,{id:"wrapper",children:[(0,q.jsxs)(s,{onClick:()=>{null!=L&&K(null)},children:[(0,q.jsx)(d,{showPopup:L}),(0,q.jsx)(xe,{categories:M,activeCategory:X,setactiveCategory:V,setSearchText:_,searchText:T,setshowSidebar:E,showSidebar:I,carouselPosition:B,setcarouselPosition:W,popupHandler:K,showMenuSlider:Z,sliderImages:G,menuMode:C,onModeChange:z}),(0,q.jsx)(qo,{menu:b.categories,activeCategory:X,showPopup:L,searchText:T,setactiveCategory:V,setcarouselPosition:W,carouselPosition:B,categories:M,menuMode:C})]}),(0,q.jsx)(c,{onClick:()=>{window.history.pushState({},""),K("location")},children:(0,q.jsx)(x,{})}),(null===(t=J)||void 0===t?void 0:t.cart)&&(0,q.jsxs)(p,{onClick:()=>{window.history.pushState({},""),K("cart")},children:[(0,q.jsx)(u,{children:H}),(0,q.jsx)(h,{})]}),(0,q.jsx)(Si,{restaurant:b,showPopup:L,popupHandler:K}),(null===(o=J)||void 0===o?void 0:o.cart)&&(0,q.jsx)($n,{restaurant:b,showPopup:L,popupHandler:K}),(0,q.jsx)(Pl,{showPopup:L,popupHandler:K,activeCategory:X}),(0,q.jsx)(Fl.A,{restaurant:b,showPopup:L,popupHandler:K}),(0,q.jsx)(Dl.A,{restaurant:b,showPopup:L,popupHandler:K}),(0,q.jsx)(Rl.A,{restaurant:b,showPopup:L,popupHandler:K}),(0,q.jsx)(Un,{categories:M,activeCategory:X,setactiveCategory:V,setshowSidebar:E,showSidebar:I,setcarouselPosition:W}),g&&(0,q.jsx)(gl,{productId:g,searchParams:n,setSearchParams:a}),(null===(r=J)||void 0===r?void 0:r.install_app)&&(0,q.jsx)(Hl,{showInstallPopup:F,onInstall:async()=>{if(!N)return;N.prompt();"accepted"===(await N.userChoice).outcome?console.log("User accepted the install"):console.log("User dismissed the install"),P(null),D(!1)},restaurantName:y,onDismiss:()=>D(!1)})]})}):(0,q.jsx)(cs,{restaurant:b,restaurantName:y,activeLanguage:w,onSelect:z})}},72929:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s,z:()=>l});var i=o(41190);const r=i.i7`
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
//# sourceMappingURL=384.bd0ff8a1.chunk.js.map