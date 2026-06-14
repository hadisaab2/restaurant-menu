/*! For license information please see 384.9d484644.chunk.js.LICENSE.txt */
(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[384],{92733:(e,t,o)=>{"use strict";o.d(t,{A:()=>c});o(82483);var i=o(76279),n=o(41190);const r=n.Ay.section`
  width: 100%;
  position: relative;
  padding: 0 0 8px;
  margin-bottom: ${e=>"theme1"===e.$variant?"4px":"12px"};
`,a=n.Ay.div`
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
`,l=n.Ay.div`
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
`,s=n.Ay.div`
  width: 100%;

  /* Tighten theme3 slider padding inside this frame */
  #swiper {
    padding-top: 0;
    padding-bottom: 28px;
  }
`;var d=o(56723);function c(e){let{images:t,activeLanguage:o="en",variant:n="theme1"}=e;return null!==t&&void 0!==t&&t.length?(0,d.jsxs)(r,{$variant:n,"data-theme12-slider":!0,children:[(0,d.jsx)(a,{"aria-hidden":!0}),(0,d.jsx)(l,{children:(0,d.jsx)(s,{children:(0,d.jsx)(i.A,{images:t,activeLanguage:o})})})]}):null}},89967:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>xs});var i=o(82483),n=o(41190),r=o(42751),a=o(22829);const l=n.Ay.div`
min-height: 100vh;
width: 100%;
position: relative;
background-color: ${e=>e.theme.backgroundColor};
font-family: ${e=>`${e.theme.font}, "Noto Kufi Arabic" !important`};
/* @media (min-width: 1024px) {
        width: 30%;
    } */
`,s=n.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
height: 100%;
position: relative;

`,d=n.Ay.div`
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
`,c=n.Ay.div`
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
`,p=n.Ay.div`
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
`,u=n.Ay.div`
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

`,x=(0,n.Ay)(r.meu)`
transform: rotate(270deg);
width: 20px;
height: 20px;
`,h=(0,n.Ay)(a.vlb)`
width: 20px;
height: 20px;
`;n.Ay.div`
position: fixed;
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color:${e=>e.theme.textColor};
background-color:${e=>e.theme.backgroundColor};
`;var g=o(27320);const m=n.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`,f=(n.Ay.div`
width: 90%;
display: flex;
align-items: ${e=>"en"==e.activeLanuguage?"flex-start":"flex-end"};
flex-direction: column;
margin-top: 30px;
margin-bottom: 30px;
font-weight: 600;
color:${e=>e.theme.textColor}
`,n.Ay.div`
font-size: 27px;


`,n.Ay.div`
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

`),v=n.Ay.div`
width: 90%;
display: flex;
align-items: center;
color:${e=>e.theme.searchTextColor};
height: 40px;
border-radius: 10px;
overflow: hidden;
position: relative;

`,y=n.Ay.input`
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

`,b=(0,n.Ay)(g.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};

`,w=(n.Ay.div`
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

`,n.Ay.div`
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
`),j=(0,n.Ay)(a.LZ_)`
color:${e=>e.theme.searchTextColor};
font-size: 14px;
`,C=n.Ay.button`
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
`,$=n.Ay.span`
  display: flex;
  align-items: center;
  font-size: 18px;
`;var A=o(91965),k=o(93376),z=o(1901);const S=n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;
`,L=n.Ay.div`
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
`,T=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  /* transform: ${e=>`translateX(-${100*e.carouselPosition/4}%)`}; */
`,_=n.Ay.div`
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
`,I=n.Ay.div`
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
`,E=n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;

`,N=n.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
background-color:${e=>e.categoryId==e.activeCategory?e.theme.categoryActiveIcon:e.theme.categoryUnactiveIcon};
transition: 0.2s all ease-in-out;

`,P=n.Ay.img`
width:20px;
height:20px;

`,F=n.Ay.div`
 display: flex;
justify-content: center; 
flex:0.8;
width: 100%;
`,D=n.Ay.span`
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
`,R=(0,n.Ay)(z.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
@media (min-width: 1024px) {
        right: 20px;
    }
`,U=(0,n.Ay)(z.NaI)`
position: absolute;
font-size: 22px;
left: 0px;
color:${e=>e.theme.textColor};
rotate: calc(180deg);
@media (min-width: 1024px) {
        left: 20px;
    }
`;var O=o(22139),M=o(58821),B=o(56723);function q(e){let{categories:t,activeCategory:o,setactiveCategory:n,carouselPosition:r,setcarouselPosition:a}=e;const{restaurantName:l}=(0,k.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[d].activeLanguage})),p=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[d]})),u=(0,i.useRef)([]);return(0,i.useEffect)((()=>{u.current=u.current.slice(0,t.length)}),[t.length]),(0,i.useEffect)((()=>{u.current[r]&&u.current[r].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[r]),(0,B.jsxs)(S,{children:[(null===t||void 0===t?void 0:t.length)>4&&r>=1&&(0,B.jsx)(U,{onClick:()=>{r>0&&a(r-1)}}),(0,B.jsx)(L,{children:(0,B.jsx)(T,{carouselPosition:r,children:null===t||void 0===t?void 0:t.sort(((e,t)=>t.priority-e.priority)).map(((e,t)=>(0,B.jsx)(_,{activeLanuguage:c,activeCategory:o,categoryId:e.id,onClick:()=>((e,t)=>{(0,O.c)(e),n(e),a(t)})(e.id,t),ref:e=>u.current[t]=e,children:(0,B.jsxs)(I,{activeCategory:o,categoryId:e.id,children:[(0,B.jsx)(E,{children:(0,B.jsx)(N,{activeCategory:o,categoryId:e.id,children:(0,B.jsx)(P,{src:e.image_url?(0,M.V)(e.image_url):e.isAllItems&&null!==p&&void 0!==p&&p.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${p.logoURL}`:e.isAllItems&&null!==p&&void 0!==p&&p.cover_url?`https://storage.googleapis.com/ecommerce-bucket-testing/${p.cover_url}`:""})})}),(0,B.jsx)(F,{children:(0,B.jsx)(D,{activeCategory:o,categoryId:e.id,children:"en"==c?e.en_category:e.ar_category})})]})})))})}),(null===t||void 0===t?void 0:t.length)>4&&(0,B.jsx)(R,{onClick:()=>{r<t.length-4&&a(r+1)}})]})}const W=n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;
`,H=n.Ay.div`
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
`,V=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;

`,X=n.Ay.div`
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

`,Y=n.Ay.div`
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
`,K=(n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;

`,n.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
background-color:${e=>e.categoryId==e.activeCategory?e.theme.categoryActiveIcon:e.theme.categoryUnactiveIcon};
transition: 0.2s all ease-in-out;

`,n.Ay.img`
width:20px;
height:20px;

`,n.Ay.div`
 display: flex;
justify-content: center; 

width: auto;

`),J=n.Ay.span`

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 12px;
  user-select: none !important;
  -webkit-user-select: none !important;  /* For Safari (iOS) */
  -moz-user-select: none !important;     /* For Firefox */
  -ms-user-select: none !important;      /* For Internet Explorer */
`,Q=(0,n.Ay)(z.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
`;function Z(e){let{categories:t,activeCategory:o,setactiveCategory:n,carouselPosition:r,setcarouselPosition:a}=e;const{restaurantName:l}=(0,k.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[d].activeLanguage})),p=(0,i.useRef)([]);return(0,i.useEffect)((()=>{p.current=p.current.slice(0,t.length)}),[t.length]),(0,i.useEffect)((()=>{p.current[r]&&p.current[r].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[r]),(0,B.jsxs)(W,{children:[(0,B.jsx)(H,{children:(0,B.jsx)(V,{children:null===t||void 0===t?void 0:t.sort(((e,t)=>t.priority-e.priority)).map(((e,t)=>(0,B.jsx)(X,{activeLanuguage:c,activeCategory:o,categoryId:e.id,onClick:()=>((e,t)=>{(0,O.c)(e),n(e),a(t)})(e.id,t),index:t,ref:e=>p.current[t]=e,children:(0,B.jsx)(Y,{activeCategory:o,categoryId:e.id,children:(0,B.jsx)(K,{children:(0,B.jsx)(J,{activeCategory:o,categoryId:e.id,children:"en"===c?e.en_category:e.ar_category})})})},e.id)))})}),(null===t||void 0===t?void 0:t.length)>4&&(0,B.jsx)(Q,{onClick:()=>{r<t.length-4&&a(r+1)}})]})}function G(e){let{categories:t,activeCategory:o,setactiveCategory:i,carouselPosition:n,setcarouselPosition:r}=e;const{restaurantName:a}=(0,k.g)(),l=window.location.hostname.split(".")[0],s="menugic"!==l&&"localhost"!==l&&"www"!==l?l:a,d=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[s]}));return(0,B.jsxs)(B.Fragment,{children:["vertical-category"==d.category_type&&(0,B.jsx)(q,{categories:t,activeCategory:o,setactiveCategory:i,carouselPosition:n,setcarouselPosition:r}),"horizantal-withoutIcon"==d.category_type&&(0,B.jsx)(Z,{categories:t,activeCategory:o,setactiveCategory:i,carouselPosition:n,setcarouselPosition:r})]})}var ee=o(11671);const te=n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 10vh;
width: 100%;
`,oe=n.Ay.div`
display: flex;
align-items: center;
position: relative;
height: 10vh;
justify-content: space-between;
width: 90%;
position: relative;

`,ie=n.Ay.img`
max-width: 250px;
max-height: 120px;
position: absolute;
margin-right: 7px;
/* margin-left: 20px; */

`,ne=n.Ay.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`,re=n.Ay.div`
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
`,ae=n.Ay.div`
width: 100%;
background-color: ${e=>e.theme.languagebackground};
opacity: 0.6;
position: absolute;
height: 100%;
z-index: 1;
border-radius: 10px;


`,le=n.Ay.div`
position: absolute;
background-color: ${e=>e.theme.languagebackground};
left:${e=>"en"==e.activeLanguage?"0px":"32px"} ;
transition:all ease-in-out 0.2s;
height: 100%;
width: 50%;
z-index: 2;

`,se=n.Ay.div`
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
`,de=(0,n.Ay)(ee.IMk)`
color: ${e=>e.theme.mainColor};
font-size: 27px;

`;var ce=o(17123);function pe(e){let{setshowSidebar:t,showSidebar:o}=e;const{restaurantName:i}=(0,k.g)(),n=window.location.hostname.split(".")[0],r="menugic"!==n&&"localhost"!==n&&"www"!==n?n:i,a=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[r]})),l=(0,A.wA)(),s=e=>{l((0,ce.y)({name:r,activeLanguage:e}))};return(0,B.jsxs)(te,{children:[(0,B.jsx)(ie,{src:a.logoURL&&`https://storage.googleapis.com/ecommerce-bucket-testing/${a.logoURL}`}),(0,B.jsxs)(oe,{children:[(0,B.jsx)(ne,{children:(0,B.jsx)(de,{onClick:()=>{t(!o)}})}),(0,B.jsx)(ne,{children:"en&ar"==(null===a||void 0===a?void 0:a.languages)&&(0,B.jsxs)(re,{children:[(0,B.jsx)(ae,{}),(0,B.jsx)(le,{activeLanguage:a.activeLanguage}),(0,B.jsx)(se,{activeLanguage:a.activeLanguage,language:"en",onClick:()=>s("en"),children:"En"}),(0,B.jsx)(se,{activeLanguage:a.activeLanguage,language:"ar",onClick:()=>s("ar"),children:"Ar"})]})})]})]})}var ue=o(92733);function xe(e){var t,o;let{activeCategory:i,setactiveCategory:n,categories:r,setSearchText:a,searchText:l,setshowSidebar:s,showSidebar:d,carouselPosition:c,setcarouselPosition:p,popupHandler:u,showMenuSlider:x,sliderImages:h,menuMode:g,onModeChange:S}=e;const{restaurantName:L}=(0,k.g)(),T=window.location.hostname.split(".")[0],_="menugic"!==T&&"localhost"!==T&&"www"!==T?T:L,I=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[_].activeLanguage})),E={dine_in:{en:"Dine In",ar:"\u062a\u0646\u0627\u0648\u0644 \u0641\u064a \u0627\u0644\u0645\u0637\u0639\u0645"},delivery:{en:"Delivery",ar:"\u062a\u0648\u0635\u064a\u0644"}};return(0,B.jsxs)(m,{children:[(0,B.jsx)(pe,{setshowSidebar:s,showSidebar:d}),g&&(0,B.jsxs)(C,{onClick:()=>S("dine_in"===g?"delivery":"dine_in"),children:[(0,B.jsx)($,{children:"dine_in"===g?(0,B.jsx)(z.NtI,{}):(0,B.jsx)(z.Xpo,{})}),"ar"===I?null===(t=E[g])||void 0===t?void 0:t.ar:null===(o=E[g])||void 0===o?void 0:o.en]}),x&&(0,B.jsx)(ue.A,{images:h,activeLanguage:I||"en",variant:"theme2"}),(0,B.jsx)(G,{categories:r,activeCategory:i,setactiveCategory:n,carouselPosition:c,setcarouselPosition:p}),(0,B.jsxs)(f,{children:[(0,B.jsxs)(v,{children:[(0,B.jsx)(b,{activeLanguage:I}),(0,B.jsx)(y,{type:"text",activeLanguage:I,dir:"en"==I?"ltr":"rtl",placeholder:"en"==I?"Search Category":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{a(e.target.value)},value:l})]}),(0,B.jsxs)(w,{onClick:()=>{window.history.pushState({},""),u("share")},children:["en"==I&&(0,B.jsx)(j,{}),"en"==I?"Share":"\u0646\u0634\u0631","en"!==I&&(0,B.jsx)(j,{})]})]})]})}var he=o(99891),ge=o(11222);const me=n.Ay.div`
 width: 100%;
 margin-top: 30px;
 padding-bottom: 20px;
 display: flex;
 justify-content: center;
`,fe=n.Ay.div`
 flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: ${e=>e.$noMinHeight?"0":"70vh"};
  opacity: 1;
  transition:all 0.7s ease-in-out;
`,ve=(n.Ay.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`,n.Ay.h3`
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
`,n.Ay.button`
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
`,n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0 20px;
`,n.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${e=>e.theme.mainColor};
  font-size: 13px;
`,n.Ay.div`
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
`,n.Ay.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`),ye=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`,be=n.Ay.h3`
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
`,we=(n.Ay.button`
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
`,n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0 20px;
`),je=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${e=>e.theme.mainColor};
  font-size: 13px;
`,Ce=n.Ay.div`
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
`,$e=n.Ay.button`
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
`,Ae=n.Ay.div`
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
`,ke=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,ze=n.Ay.div`
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
`,Se=n.Ay.div`
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
`,Le=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,Te=n.Ay.h4`
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
`,_e=n.Ay.div`
  font-size: 15px;
  font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#007bff"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${e=>"ar"===e.activeLanguage?"row-reverse":"row"};
`,Ie=n.Ay.span`
  font-size: 14px;
  color: ${e=>e.theme.BoxPriceColor||e.theme.textColor||"#666"};
  text-decoration: line-through;
  opacity: 0.6;
`,Ee=n.Ay.div`
  position: relative;
  width: 100%;
`,Ne=n.Ay.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    @media (min-width: 1024px) {
        width: 20%;
    }
`,Pe=n.Ay.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.theme.BoxColor};
    border-radius: 20px;
    position: relative;

    //cjhange loadeeerr wrappperr and this oneee colorrrr

`,Fe=n.Ay.img`
width:90%;
height:100%;
object-fit: cover;
border-radius: 10px;
visibility: ${e=>e.imageLoaded?"visible":"hidden"};
/* display:${e=>e.imageLoaded?"block":"none"} */
`,De=n.Ay.div`
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


`,Re=n.Ay.div`
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

`,Ue=n.Ay.span`
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



`,Oe=n.Ay.div`
display: flex;
flex-direction: row;
gap:5px;
`,Me=n.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;
text-decoration:${e=>e.discounted?"line-through":"none"};


`,Be=n.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;

`,qe=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,We=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${qe} 1s linear infinite; /* Apply animation */
`,He=n.Ay.div`
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

`,Ve=n.Ay.div`
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
`,Xe=n.Ay.button`
  position: absolute;
  bottom: 8px;
  left: ${e=>"en"===e.activeLanuguage?"8px":"auto"};
  right: ${e=>"en"===e.activeLanuguage?"auto":"8px"};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0;
  background-color: rgba(255, 255, 255, 0.95);
  color: ${e=>e.$filled?"#e11d48":e.theme.BoxTextColor||"#333"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: transform 0.2s ease, color 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  &:hover { transform: scale(1.08); }
  &:active { transform: scale(0.95); }
`;var Ye=o(18907);const Ke=(e,t)=>"delivery"===t&&e.delivery_price?parseFloat(e.delivery_price):parseFloat(e.en_price);var Je=o(81132),Qe=o(70268),Ze=o(2200);o(34304);const Ge=i.forwardRef(((e,t)=>{var o,n,r,l;let{plate:s,setactivePlate:d,activePlate:c,index:p,showPopup:u,setSearchParams:x,searchParams:h,activeCategoryId:g,categories:m,disableDetails:f,menuMode:v,wishlistIds:y,onWishlistChange:b}=e;const{restaurantName:w}=(0,k.g)(),j=window.location.hostname.split(".")[0],C="menugic"!==j&&"localhost"!==j&&"www"!==j?j:w,$=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[C]})),[z,S]=((0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[C].activeLanguage})),(0,i.useState)(!1)),L=(0,Ze.Q)(null===$||void 0===$?void 0:$.currency),T=(0,Qe.wU)(C),_=y&&"function"===typeof y.has&&y.has(s.id),I=m.find((e=>e.id==g));let E;E=0===parseFloat(I.discount)?parseFloat(s.discount):parseFloat(I.discount);const N=null!==(o=null===(n=s.images)||void 0===n?void 0:n.findIndex((e=>e.id===s.new_cover_id)))&&void 0!==o?o:-1,P=N>=0&&(null===(r=s.images)||void 0===r||null===(l=r[N])||void 0===l?void 0:l.url),F=null!==$&&void 0!==$&&$.logoURL?(0,M.V)($.logoURL):null,D=P?(0,M.V)(s.images[N].url):F||"";return(0,B.jsx)(Ne,{index:p,activePlate:c,className:"lazy-load",children:(0,B.jsxs)(Pe,{children:[!z&&(0,B.jsx)(He,{children:(0,B.jsx)(We,{})}),(0,B.jsxs)(De,{onClick:()=>{if(null==c&&z&&!u){f||d(p);const e=new URLSearchParams(h);e.set("productId",null===s||void 0===s?void 0:s.id),g&&e.set("categoryId",g),x(e),window.history.pushState({},"",`?${e.toString()}`),document.body.style.overflow="hidden"}},children:[s.new&&(0,B.jsx)(Ve,{children:"en"===(null===$||void 0===$?void 0:$.activeLanguage)?"NEW !":"! \u062c\u062f\u064a\u062f"}),(0,B.jsx)(Fe,{ref:t,onLoad:()=>{S(!0)},src:D,imageLoaded:z}),T&&(0,B.jsx)(Xe,{type:"button",activeLanuguage:null===$||void 0===$?void 0:$.activeLanguage,$filled:_,onClick:e=>{e&&(e.preventDefault(),e.stopPropagation()),T&&null!==s&&void 0!==s&&s.id&&(async()=>{try{_?await ge.A.delete((0,Je.Vr)(s.id),{headers:{Authorization:`Bearer ${T}`}}):await ge.A.post(Je.Vb,{product_id:s.id},{headers:{Authorization:`Bearer ${T}`}}),null===b||void 0===b||b()}catch(e){console.error("Wishlist error:",e)}})()},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchStart:e=>e.stopPropagation(),children:(0,B.jsx)(a.phF,{size:16})})]}),(0,B.jsxs)(Re,{activeLanuguage:null===$||void 0===$?void 0:$.activeLanguage,children:[(0,B.jsx)(Ue,{fontSize:null===$||void 0===$?void 0:$.font_size,children:"en"===(null===$||void 0===$?void 0:$.activeLanguage)?s.en_name:s.ar_name}),(()=>{const e=Ke(s,v);return!isNaN(e)&&e>0?(0,B.jsxs)(Oe,{children:[(0,B.jsx)(Me,{discounted:0!=E,children:(0,Ye.T)(e,L)}),(0,B.jsx)(Be,{children:0!=E&&(0,Ye.T)(e*(1-parseFloat(E)/100),L)})]}):null})()]})]})})}));var et=o(10448),tt=o(34304),ot=o.n(tt);const it=n.Ay.div`
  
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
  animation: ${(e,t,o)=>n.i7`
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
    /* animation: ${e=>{let{x:t,y:o,width:i}=e;return((e,t,o)=>n.i7`
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

`,nt=n.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,rt=(n.i7`
 0% { 
    height:30vh;
    top:0px;
}

 100% { 
    height:70vh;
    top:80px;

    }
`,n.Ay.div`
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
`),at=n.Ay.div`
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
`,lt=n.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
`,st=n.Ay.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  flex-shrink: 0;
`,dt=n.Ay.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,ct=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,pt=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${ct} 1s linear infinite; /* Apply animation */
`,ut=n.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,xt=n.Ay.img`
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
`,ht=n.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,gt=(0,n.Ay)(et.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,mt=(0,n.Ay)(et.m6W)`
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
`,ft=(0,n.Ay)(et.OQo)`
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
`,vt=n.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${ht} 0.4s ease-in-out;
`,yt=n.Ay.div`
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
`,bt=n.i7`
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
`,wt=n.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${bt} 1s ease-in-out;
`,jt=(n.Ay.div`
  width:90%;
  /* height: ${e=>e.CloseAnimation?"45vh":"25vh"}; */
  height: ${e=>e.squareDimension?"45vh":"60vh"};

  border-radius:40px;
  margin-top: 0px;
  display:flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${nt} 0.4s;
  @media (min-width: 1024px) {
    height: 70vh;
    }
  /* background-color: red; */
`,n.i7`
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
`),Ct=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,$t=n.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${jt} 0.8s ease-in-out;

`,At=n.Ay.div`
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
`,kt=n.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:${e=>"en"==e.activeLanguage?"left":"right"} ;
  opacity: 1;
  margin-top: 5px;
`,zt=n.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,St=n.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,Lt=n.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,Tt=n.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,_t=n.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,It=n.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,Et=n.Ay.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${It} 0.7s ease-in-out;
  background-color: ${e=>e.theme.backgroundColor};

  display: ${e=>e.CloseAnimation?"flex":"none"};
  box-shadow: 0px -3px 5px rgba(180, 180, 180, 0.1); /* Slight shadow on the top */
  padding-bottom: 10px;
  margin-top: 30px;
  @media (min-width: 1024px) {
        width: 50%;
    }
`,Nt=n.Ay.button`
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
`,Pt=n.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,Ft=n.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,Dt=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Rt=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Ut=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,Ot=n.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,Mt=n.Ay.div`
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
  animation: ${Ot} 0.4s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,Bt=n.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`,qt=n.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,Wt=n.Ay.input`
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

`,Ht=n.Ay.button`
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
`,Vt=n.Ay.div`
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
`,Xt=n.Ay.button`
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
`,Yt=n.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`;var Kt=o(86001);const Jt=n.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display: flex;
`,Qt=n.Ay.div`
display: flex;
flex-direction: row;
`,Zt=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,Gt=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,eo=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,to=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,oo=n.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,io=n.Ay.span`
position: absolute;
left: 0;

`,no=n.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,ro=(0,n.Ay)(r.Z0P)`
    animation:1.2s ${no}  linear infinite ;
    position: absolute;
`;function ao(e){let{carouselIndex:t,images:o,CloseAnimation:i,carouselSwiped:n}=e;return(0,B.jsxs)(Jt,{CloseAnimation:i,children:[(0,B.jsxs)(Qt,{children:[(0,B.jsx)(Zt,{carouselIndex:t,children:(0,B.jsx)(Gt,{})}),o.map((e=>(0,B.jsx)(eo,{children:(0,B.jsx)(to,{})})))]}),!n&&(0,B.jsxs)(oo,{children:[(0,B.jsx)(io,{children:"Swipe"}),(0,B.jsx)(ro,{})]})]})}n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const lo=n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,so=(n.Ay.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input[type="checkbox"] {
    margin-right: 8px;
    accent-color: ${e=>e.theme.mainColor}; /* Change this color to your desired checkbox color */
  }
`,n.Ay.select`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  color: ${e=>e.theme.backgroundColor};
  background-color: ${e=>e.theme.mainColor};
  &:active{
    outline: none;
    border: 0px;

  }
  `,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,n.Ay.label`
  display: flex;
  align-items: center;
  input[type="radio"] {
    margin-right: 8px;
    accent-color:${e=>e.theme.mainColor}; /* Change this color to your desired radio button color */
  }
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(ot().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`),co=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,po=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,uo=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let t=e.theme.formColor;if(ot().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.1)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.1)`)):t}};
  font-size:10px;

`,xo=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,ho=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${e=>e.theme.formColor};

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);var go=o(71481),mo=o(41235);function fo(e){let{component:t,formData:o,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||[]);return(0,B.jsxs)(so,{index:r,children:[(0,B.jsx)(lo,{children:t.label}),t.values.map((e=>(0,B.jsxs)(po,{children:[s.some((t=>t===e.label))?(0,B.jsx)(xo,{onClick:()=>{(e=>{let o=s.filter((t=>t!==e.label));d(o),n(t.key,o)})(e)},children:(0,B.jsx)(mo.RXm,{size:"15px"})}):(0,B.jsx)(uo,{onClick:()=>{(e=>{d([...s,e.label]),n(t.key,[...s,e.label])})(e)},children:(0,B.jsx)(go.OiG,{})}),(0,B.jsx)(co,{children:e.label})]}))),(c=a,c in l?(0,B.jsx)(ho,{children:"This field is required"}):null)]});var c}const vo=n.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(ot().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,yo=n.Ay.div`
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
`,bo=n.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,wo=n.Ay.ul`
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

`,jo=n.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,Co=n.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,$o=n.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,Ao=n.Ay.div`
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
`,ko=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${e=>e.theme.formColor};
  margin-bottom: 5px;
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 12px;
  font-size: 10px;

`);function zo(e){var t;let{component:o,formData:n,handleChange:r,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;console.log(s),console.log(d);const[c,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===(t=n[o.key])||void 0===t?void 0:t.value)||""),h=(0,i.useRef)(null),g=e=>{x(e.label),p(!1),r(o.key,e)},m=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,B.jsxs)(vo,{ref:h,index:l,children:[(0,B.jsx)(lo,{children:o.label}),o.data.values.length>8?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(yo,{onClick:()=>p((e=>!e)),children:[u||a,(0,B.jsx)(bo,{className:c?"up":"",children:"\u25bc"})]}),(0,B.jsx)(wo,{isOpen:c,children:o.data.values.map(((e,t)=>(0,B.jsx)(jo,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},t)))})]}):(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(Co,{children:o.data.values.map(((e,t)=>(0,B.jsx)($o,{children:(0,B.jsx)(Ao,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,B.jsx)(ko,{children:"This field is required"}):null)]});var f}const So=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(ot().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,Lo=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,To=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,_o=n.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,Io=n.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,Eo=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function No(e){let{component:t,formData:o,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||"");return(0,B.jsxs)(So,{index:r,children:[(0,B.jsx)(lo,{children:t.label}),t.values.map((e=>(0,B.jsxs)(To,{children:[(0,B.jsx)(_o,{onClick:()=>{(e=>{d(e),n(t.key,e)})(e)},children:(0,B.jsx)(Io,{selected:s.label==e.label})}),(0,B.jsx)(Lo,{children:e.label})]}))),(c=a,c in l?(0,B.jsx)(Eo,{children:"This field is required"}):null)]});var c}function Po(e){let{formSchema:t,onPriceChange:o,basePrice:n,formData:r,setFormData:a,finalDiscount:l,formErrors:s}=e;(0,i.useEffect)((()=>{c(r)}),[r]);const d=(e,t)=>{a((o=>({...o,[e]:t})))},c=e=>{let i=parseFloat(n)||0,r=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const o=t.values.find((t=>t.label===e)),i=!isNaN(Number(o.value));o&&o.value&&i&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")&&(r-=parseFloat(o.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const o=t.data.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(o.value));o&&n&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?r-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}else if("radio"===t.type&&t.values){const o=t.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(o.value));o&&n&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?r-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}}));const a=i+r,l=a%1!==0?a.toFixed(2):a.toFixed(0);o(l)};return(0,B.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return console.log(e.key),(0,B.jsx)(fo,{component:e,formData:r,handleChange:d,index:t,componentKey:e.key,formErrors:s});case"select":return console.log(e.key),(0,B.jsx)(zo,{component:e,formData:r,handleChange:d,index:t,componentKey:e.key,formErrors:s});case"radio":return(0,B.jsx)(No,{component:e,formData:r,handleChange:d,index:t,componentKey:e.key,formErrors:s});default:return null}})(e,t)))})}var Fo=o(42770),Do=o(73556),Ro=(o(20965),o(16104)),Uo=o(88620),Oo=o(57526);o(44014),o(70045),o(5084);const Mo=o(34304);function Bo(e){var t,o,n,r,l,s,d,c,p,u,x,h,g,m;let{activePlate:f,setactivePlate:v,menu:y,plates:b,productPositions:w,categories:j,activeCategoryId:C,setSearchParams:$,searchParams:S}=e;const{restaurantName:L}=(0,k.g)(),T=window.location.hostname.split(".")[0],_="menugic"!==T&&"localhost"!==T&&"www"!==T?T:L,I=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[_]})),E=j.find((e=>e.id==C)),{response:N}=(0,Ro.$)({productId:null===(t=b[f])||void 0===t?void 0:t.id});(0,i.useEffect)((()=>{var e;let t=null;var o,i;Mo.isEmpty(null===(e=b[f])||void 0===e?void 0:e.form_json)||(t=Mo.isEmpty(JSON.parse(null===(o=b[f])||void 0===o?void 0:o.form_json))?null===E||void 0===E?void 0:E.form_json:null===(i=b[f])||void 0===i?void 0:i.form_json);if(Mo.isEmpty(t))F({});else{var n;const e=JSON.parse(t);if(F(e),2===(null===e||void 0===e?void 0:e.version)&&(null===e||void 0===e||null===(n=e.sizes)||void 0===n?void 0:n.length)>0){var r;const t=parseFloat(null===(r=b[f])||void 0===r?void 0:r.en_price)||0,o=e.sizes.find((e=>"absolute"===e.priceMode&&Number(e.priceModifier)===t));R((()=>({...(0,Do.KE)(),sizeId:o?o.id:e.sizes[0].id})))}}}),[I.activeLanguage]);const[P,F]=(0,i.useState)({}),[D,R]=(0,i.useState)({}),[U,O]=(0,i.useState)({}),q=(0,A.wA)(),[W,H]=(0,i.useState)(1),[V,X]=(0,i.useState)(!1),Y=(0,i.useRef)(null),[K,J]=(0,i.useState)(!1),[Q,Z]=(0,i.useState)(1),[G,ee]=(0,i.useState)({x:0,y:0}),[te,oe]=(0,i.useState)(!1),ie=(0,i.useRef)(null),ne=(0,i.useRef)(null),re=(0,i.useRef)(0);let ae;ae=0===parseFloat(E.discount)?parseFloat(b[f].discount):parseFloat(E.discount);const le=(null===(o=b[f])||void 0===o?void 0:o.en_price)||"0",se=le.includes(".")?parseFloat(le).toFixed(2):parseFloat(le).toFixed(0),[de,ce]=(0,i.useState)(se),[pe,ue]=(0,i.useState)(""),xe=e=>{ce(e)},[he,ge]=(0,i.useState)(!0),[me,fe]=(0,i.useState)(0),ve=()=>{setTimeout((()=>{v(null),document.body.style.overflow="auto"}),700),ge(!1),S.delete("productId"),$(S)},[ye,be]=(0,i.useState)(!1),we=()=>{X(!0),fe(me+1)},je=()=>{X(!0),fe(me-1)},Ce=(0,i.useRef)(null),[$e,Ae]=(0,i.useState)(null),ke=()=>{Z(1),ee({x:0,y:0}),J(!0)};(0,i.useEffect)((()=>{const e=()=>{ve()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const ze=2===(null===P||void 0===P?void 0:P.version)&&Array.isArray(null===P||void 0===P?void 0:P.sizes);const Se=null!==I&&void 0!==I&&I.logoURL?(0,M.V)(I.logoURL):null;let Le=[...null!==(n=null===(r=b[f])||void 0===r?void 0:r.images)&&void 0!==n?n:[]];0===Le.length&&Se&&(Le=[{id:"fallback-logo",url:I.logoURL,isFallback:!0}]);const Te=Le.findIndex((e=>{var t;return e.id===(null===(t=b[f])||void 0===t?void 0:t.new_cover_id)}));if(Te>0){const[e]=Le.splice(Te,1);Le.unshift(e)}const[_e,Ie]=(0,i.useState)({}),Ee=e=>{Ie((t=>({...t,[e]:!0})))},Ne="en"===(null===I||void 0===I?void 0:I.activeLanguage)?null===(l=b[f])||void 0===l?void 0:l.en_description:null===(s=b[f])||void 0===s?void 0:s.ar_description,Pe=(0,Ze.Q)(null===I||void 0===I?void 0:I.currency);let Fe=JSON.parse(I.features);const De=Boolean(null===(d=b[f])||void 0===d?void 0:d.out_of_stock)||1===Number(null===(c=b[f])||void 0===c?void 0:c.out_of_stock),Re=(null===I||void 0===I?void 0:I.product_details_carousel_style)||"normal";return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(it,{CloseAnimation:he,children:[(0,B.jsx)(yt,{CloseAnimation:he,children:(0,B.jsx)(wt,{children:"en"==I.activeLanguage?null===y||void 0===y?void 0:y.en_category:null===y||void 0===y?void 0:y.ar_category})}),(0,B.jsx)(rt,{squareDimension:null===(p=b[f])||void 0===p?void 0:p.square_dimension,CloseAnimation:he,isNormalCarousel:"normal"===Re,children:1===Le.length?(0,B.jsx)(lt,{carouselIndex:0,children:(0,B.jsx)(st,{children:(0,B.jsxs)(dt,{children:[!_e[0]&&(0,B.jsx)(ut,{children:(0,B.jsx)(pt,{})}),(0,B.jsx)(xt,{src:Le[0].url?(0,M.V)(Le[0].url):Se||"",onLoad:()=>Ee(0),onError:e=>{Se&&e.target.src!==Se&&(e.target.src=Se)},CloseAnimation:he,Loaded:_e[0],alt:"Image 0"}),(0,B.jsx)(Ht,{onClick:ke,children:(0,B.jsx)(z.gff,{})})]})})}):"normal"===Re?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(mt,{CloseAnimation:he,onClick:()=>{X(!0),0!==me&&je()}}),(0,B.jsx)(ft,{CloseAnimation:he,onClick:()=>{X(!0),Le.length>me+1&&we()}}),(0,B.jsx)(lt,{carouselIndex:me,ref:Ce,onTouchStart:e=>{Ae(e.touches[0].clientX)},onTouchMove:e=>{if($e){const t=e.touches[0].clientX-$e;t>5?0!==me&&je():t<-5&&Le.length>me+1&&we(),Ae(null)}},children:Le.map(((e,t)=>(0,B.jsx)(st,{children:(0,B.jsxs)(dt,{children:[!_e[t]&&(0,B.jsx)(ut,{children:(0,B.jsx)(pt,{})}),(0,B.jsx)(xt,{src:_e[t]||t===me?e.url?(0,M.V)(e.url):Se||"":"",onLoad:()=>Ee(t),onError:e=>{Se&&e.target.src!==Se&&(e.target.src=Se)},CloseAnimation:he,Loaded:_e[t],alt:`Image ${t}`}),me===t&&(0,B.jsx)(Ht,{onClick:ke,children:(0,B.jsx)(z.gff,{})})]})},e.id||t)))})]}):"effect-cards"===Re?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(mt,{CloseAnimation:he,onClick:()=>Y.current&&Y.current.slidePrev()}),(0,B.jsx)(at,{children:(0,B.jsx)(Uo.RC,{modules:[Oo.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{Y.current=e},onSlideChange:e=>{fe(e.realIndex),X(!0)},children:Le.map(((e,t)=>(0,B.jsx)(Uo.qr,{children:(0,B.jsxs)(dt,{children:[!_e[t]&&(0,B.jsx)(ut,{children:(0,B.jsx)(pt,{})}),(0,B.jsx)(xt,{src:_e[t]||t===me?e.url?(0,M.V)(e.url):Se||"":"",onLoad:()=>Ee(t),onError:e=>{Se&&e.target.src!==Se&&(e.target.src=Se)},CloseAnimation:he,Loaded:_e[t],$cardSlide:!0,alt:`Image ${t}`}),me===t&&(0,B.jsx)(Ht,{onClick:ke,children:(0,B.jsx)(z.gff,{})})]})},e.id||t)))},null===(u=b[f])||void 0===u?void 0:u.id)}),(0,B.jsx)(ft,{CloseAnimation:he,onClick:()=>Y.current&&Y.current.slideNext()})]}):(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(at,{children:(0,B.jsx)(Uo.RC,{onSwiper:e=>{Y.current=e},onSlideChange:e=>{fe(e.realIndex),X(!0)},modules:[Oo.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:Le.map(((e,t)=>(0,B.jsx)(Uo.qr,{children:(0,B.jsxs)(dt,{children:[!_e[t]&&(0,B.jsx)(ut,{children:(0,B.jsx)(pt,{})}),(0,B.jsx)(xt,{src:_e[t]||t===me?e.url?(0,M.V)(e.url):Se||"":"",onLoad:()=>Ee(t),onError:e=>{Se&&e.target.src!==Se&&(e.target.src=Se)},CloseAnimation:he,Loaded:_e[t],$cardSlide:!0,alt:`Image ${t}`}),me===t&&(0,B.jsx)(Ht,{onClick:ke,children:(0,B.jsx)(z.gff,{})})]})},e.id||t)))},null===(x=b[f])||void 0===x?void 0:x.id)})})}),1!==Le.length&&(0,B.jsx)(ao,{images:Le,carouselIndex:me,CloseAnimation:he,carouselSwiped:V}),(0,B.jsx)(Ct,{children:(0,B.jsx)($t,{children:(0,B.jsxs)(At,{CloseAnimation:he,activeLanguage:I.activeLanguage,children:[(0,B.jsx)(kt,{activeLanguage:I.activeLanguage,children:"en"==I.activeLanguage?null===(h=b[f])||void 0===h?void 0:h.en_name:null===(g=b[f])||void 0===g?void 0:g.ar_name}),!Mo.isEmpty(null===(m=b[f])||void 0===m?void 0:m.en_price)&&(0,B.jsxs)(Lt,{children:[(0,B.jsx)(Tt,{activeLanguage:I.activeLanguage,discounted:0!=ae,children:(0,Ye.T)(de,Pe)}),0!=ae&&(0,B.jsx)(_t,{activeLanguage:I.activeLanguage,children:(0,Ye.T)(de*(1-parseFloat(ae)/100),Pe)})]}),!Mo.isEmpty(Ne)&&(0,B.jsx)(zt,{activeLanguage:I.activeLanguage,dangerouslySetInnerHTML:{__html:Ne}}),De&&(0,B.jsx)(St,{children:"en"===I.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),ze&&(0,B.jsx)(Fo.A,{options:P,formData:D,setFormData:R,formErrors:U,activeLanguage:I.activeLanguage,basePrice:se,onPriceChange:xe}),!ze&&(null===P||void 0===P?void 0:P.components)&&(0,B.jsx)(Po,{formSchema:P,onPriceChange:xe,formData:D,setFormData:R,basePrice:se,formErrors:U}),(0,B.jsxs)(Bt,{activeLanguage:I.activeLanguage,children:[(0,B.jsx)(qt,{children:"en"==I.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,B.jsx)(Wt,{activeLanguage:I.activeLanguage,onChange:e=>ue(e.target.value),placeholder:"en"==I.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(null===Fe||void 0===Fe?void 0:Fe.cart)&&!De&&(0,B.jsxs)(Et,{CloseAnimation:he,children:[(0,B.jsxs)(Ft,{CloseAnimation:he,children:[(0,B.jsx)(Dt,{onClick:()=>{H(W+1)},children:"+"}),(0,B.jsx)(Ut,{children:W}),(0,B.jsx)(Rt,{onClick:()=>{W>1&&H(W-1)},children:"-"})]}),(0,B.jsxs)(Nt,{onClick:()=>{if(ze){var e;const t={};if((null===(e=P.sizes)||void 0===e?void 0:e.length)>0&&(null===D||void 0===D||!D.sizeId)&&(t.size="Please select a size."),Object.keys(t).length>0)return void O(t)}else if("{}"!==JSON.stringify(P)){const e=function(e,t){const o={},i=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in t&&0!==(null===(i=t[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(t[e])||(o[e]="This field is required.")})),o}(P,D);if(Object.keys(e).length>0)return void O(e)}let t=de*(1-parseFloat(ae)/100);setTimeout((()=>{v(null),document.body.style.overflow="auto"}),800),q((0,Kt.bE)(_,b[f],W,D,t,pe)),ge(!1),H(1),O({})},children:["en"==I.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",(0,B.jsx)(Pt,{children:(0,Ye.T)(W*(de*(1-parseFloat(ae)/100)),Pe)})]})]})]}),(0,B.jsx)(vt,{onClick:ve,CloseAnimation:he,children:(0,B.jsx)(gt,{})}),(0,B.jsx)(Mt,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),be(!0),setTimeout((()=>{be(!1)}),4e3)},CloseAnimation:he,children:ye?(0,B.jsx)(mo.RXm,{}):(0,B.jsx)(go.zU_,{})}),K&&(0,B.jsxs)(Vt,{onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY;ne.current=Math.hypot(t,o)}else if(1===e.touches.length){const t=Date.now();t-re.current<300&&(Z((e=>e>1?1:2.5)),ee({x:0,y:0})),re.current=t,ie.current={x:e.touches[0].clientX,y:e.touches[0].clientY},oe(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(t,o);if(ne.current){const e=i/ne.current;Z((t=>Math.min(Math.max(t*e,1),5)))}ne.current=i}else if(1===e.touches.length&&te&&Q>1){const t=e.touches[0].clientX-ie.current.x,o=e.touches[0].clientY-ie.current.y;ee((e=>({x:e.x+t,y:e.y+o}))),ie.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{ne.current=null,oe(!1)},children:[(0,B.jsx)(Xt,{onClick:()=>J(!1),children:(0,B.jsx)(a.$8F,{})}),(0,B.jsx)(Yt,{src:(()=>{const e=Le[me];return e?e.url?(0,M.V)(e.url):Se||"":""})(),style:{transform:`scale(${Q}) translate(${G.x/Q}px, ${G.y/Q}px)`},alt:"Zoom"})]})]})}var qo=o(9328),Wo=o(32415),Ho=o(73422);const Vo=o(34304);function Xo(e){var t,o,n;let{menu:r,activeCategory:a,showPopup:l,searchText:s,carouselPosition:d,setcarouselPosition:c,setactiveCategory:p,categories:u,menuMode:x}=e;const[h,g]=(0,i.useState)(null),[m,f]=(0,he.ok)(),{restaurantName:v}=(0,k.g)(),y=window.location.hostname.split(".")[0],b="menugic"!==y&&"localhost"!==y&&"www"!==y?y:v,w=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[b].activeLanguage})),j=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[b]})),C=(0,A.wA)(),[$,z]=(0,i.useState)((()=>new Set)),S=(0,i.useCallback)((async()=>{const e=(0,Qe.wU)(b);if(e)try{const{data:t}=await ge.A.get(Je.Vb,{headers:{Authorization:`Bearer ${e}`}}),o=(Array.isArray(t)?t:[]).map((e=>e.id));z(new Set(o))}catch{z(new Set)}else z(new Set)}),[b]);(0,i.useEffect)((()=>{S()}),[S]);const[L,T]=(0,i.useState)([]),[_,I]=(0,i.useState)([]),E=(0,i.useRef)(),N=(0,i.useRef)(),P="all-items"===a,F=(null===j||void 0===j?void 0:j.all_items_style)||"grid",D=a&&!P?String(a):null,{data:R,fetchNextPage:U,hasNextPage:O,isFetchingNextPage:q}=(0,qo.w)(D,x),{data:W,fetchNextPage:H,hasNextPage:V,isFetchingNextPage:X}=(0,Wo.u)(P?null===j||void 0===j?void 0:j.id:null,x),Y=(null===W||void 0===W||null===(t=W.pages)||void 0===t?void 0:t.flat())||[],K=()=>{const e=null===_||void 0===_?void 0:_.map((e=>{if(e.current){var t;const o=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return{x:o.left,y:o.top,width:o.width}}return null}));T(e)};(0,i.useEffect)((()=>{m.get("productId")&&g(null)}),[m]),(0,i.useEffect)((()=>{K()}),[_]),(0,i.useEffect)((()=>{var e;if(r&&null!==a&&(null===R||void 0===R||null===(e=R.pages)||void 0===e?void 0:e.flat().length)>0){var t,o;const e=null===R||void 0===R||null===(t=R.pages)||void 0===t||null===(o=t.flat())||void 0===o?void 0:o.filter((e=>e["en"===w?"en_name":"ar_name"].toLowerCase().includes(s.toLowerCase()))).map((()=>i.createRef()));I(e)}}),[r,a,s,R]),(0,i.useEffect)((()=>{const e=()=>{K()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[_]),(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&O&&!q&&U()}),{threshold:.1});return E.current&&e.observe(E.current),()=>{E.current&&e.unobserve(E.current)}}),[O,q,U]),(0,i.useEffect)((()=>{if(!P)return;const e=new IntersectionObserver((e=>{e[0].isIntersecting&&V&&!X&&H()}),{threshold:.2});return N.current&&e.observe(N.current),()=>{N.current&&e.unobserve(N.current)}}),[H,V,P,X]);const J=(null===R||void 0===R||null===(o=R.pages)||void 0===o||null===(n=o.flat())||void 0===n?void 0:n.filter((e=>!(Boolean(null===e||void 0===e?void 0:e.hide)||1===Number(null===e||void 0===e?void 0:e.hide))&&e["en"===w?"en_name":"ar_name"].toLowerCase().includes(s.toLowerCase()))))||[],Q=i.useMemo((()=>{if(!P)return[];return(u||[]).filter((e=>!e.isAllItems)).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))).map((e=>{const t=Y.filter((t=>{if(Boolean(null===t||void 0===t?void 0:t.hide)||1===Number(null===t||void 0===t?void 0:t.hide))return!1;if(t.category_id!=e.id)return!1;const o=t["en"===w?"en_name":"ar_name"]||"";return!s||function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase().includes(s.toLowerCase())}(o)})).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0)));return{category:e,items:t}})).filter((e=>e.items.length>0))}),[w,Y,u,P,s]);console.log(J);const[Z,G]=(0,i.useState)(d),[ee,te]=(0,i.useState)(!1),[oe,ie]=(0,i.useState)(u.length<4?3:4);(0,i.useRef)(0),(0,i.useRef)(0);return(0,i.useEffect)((()=>{G(u.findIndex((e=>e.id==a)))}),[a]),(0,i.useEffect)((()=>{P&&g(null)}),[P]),(0,B.jsx)(me,{activeCategory:a,children:P?(0,B.jsxs)(ve,{children:[Q.map((e=>(0,B.jsxs)(ye,{children:[(0,B.jsx)(be,{activeLanguage:w,children:"en"===w?e.category.en_category:e.category.ar_category}),"list"===F?(0,B.jsx)(ke,{children:e.items.map(((e,t)=>{var o,i,n,r;const a=u.find((t=>t.id==e.category_id));let l;l=a&&0!==parseFloat(a.discount||0)?parseFloat(a.discount||0):parseFloat(e.discount||0);const s=Ke(e,x),d=0!==l?s*(1-parseFloat(l)/100):s,c=(0,Ze.Q)(null===j||void 0===j?void 0:j.currency),p=null!==(o=null===(i=e.images)||void 0===i?void 0:i.findIndex((t=>t.id==e.new_cover_id)))&&void 0!==o?o:0,h=null===(n=e.images)||void 0===n||null===(r=n[p])||void 0===r?void 0:r.url,g=JSON.parse((null===j||void 0===j?void 0:j.features)||"{}"),v=Boolean(null===e||void 0===e?void 0:e.out_of_stock)||1===Number(null===e||void 0===e?void 0:e.out_of_stock),y=!Vo.isEmpty(null===e||void 0===e?void 0:e.form_json)&&!Vo.isEmpty(JSON.parse((null===e||void 0===e?void 0:e.form_json)||"{}")),$=!Vo.isEmpty(null===a||void 0===a?void 0:a.form_json)&&!Vo.isEmpty(JSON.parse((null===a||void 0===a?void 0:a.form_json)||"{}")),A=y||$,k=t=>{if(t.preventDefault(),t.stopPropagation(),null===g||void 0===g||!g.cart||v)return;if(A){const t=new URLSearchParams(m);return t.set("productId",e.id),t.set("categoryId","all-items"),f(t),window.history.pushState({},"",`?${t.toString()}`),void(document.body.style.overflow="hidden")}const o=Ke(e,x)*(1-parseFloat(l)/100);C((0,Kt.bE)(b,e,1,{},o,"",x)),Ho.oR.success("en"===w?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629")};return(0,B.jsxs)(Ee,{children:[(0,B.jsxs)(ze,{onClick:()=>{const t=new URLSearchParams(m);t.set("productId",e.id),t.set("categoryId","all-items"),f(t),window.history.pushState({},"",`?${t.toString()}`),document.body.style.overflow="hidden"},style:{cursor:"pointer"},children:[(0,B.jsx)(Se,{children:h&&(0,B.jsx)("img",{src:(0,M.V)(h),alt:"en"===w?e.en_name:e.ar_name})}),(0,B.jsxs)(Le,{activeLanguage:w,children:[(0,B.jsx)(Te,{children:"en"===w?e.en_name:e.ar_name}),s>0&&(0,B.jsxs)(_e,{activeLanguage:w,children:[0!==l&&(0,B.jsx)(Ie,{children:(0,Ye.T)(s,c)}),(0,B.jsx)("span",{children:(0,Ye.T)(d,c)})]})]})]}),(null===g||void 0===g?void 0:g.cart)&&(v?(0,B.jsx)(Ae,{activeLanguage:w,children:"en"===w?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,B.jsx)($e,{type:"button",onClick:k,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),k(e)},activeLanguage:w,title:"en"===w?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,B.jsx)(go._xK,{size:12})}))]},e.id)}))}):(0,B.jsx)(fe,{$noMinHeight:!0,children:e.items.map(((t,o)=>(0,B.jsx)(Ge,{index:o,plate:t,activePlate:null,setactivePlate:g,showPopup:l,setSearchParams:f,searchParams:m,activeCategoryId:e.category.id,categories:u,disableDetails:!1,menuMode:x,wishlistIds:$,onWishlistChange:S},t.id)))})]},e.category.id))),V&&(0,B.jsx)("div",{ref:N,style:{height:"40px"}}),X&&(0,B.jsx)(we,{children:(0,B.jsxs)(je,{children:[(0,B.jsx)(Ce,{}),"en"===w?"Loading more...":"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f..."]})})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(fe,{activePlate:h,children:[null===r||void 0===r?void 0:r.map(((e,t)=>{if(a==e.id)return(0,B.jsx)(B.Fragment,{children:J.map(((e,t)=>(0,B.jsx)(Ge,{index:t,plate:e,activePlate:h,setactivePlate:g,ref:_[t],showPopup:l,setSearchParams:f,searchParams:m,activeCategoryId:a,categories:u,menuMode:x,wishlistIds:$,onWishlistChange:S})))})})),(0,B.jsx)("div",{ref:E,style:{height:"20px"}})]}),null!==h&&!m.get("productId")&&(0,B.jsx)(Bo,{menu:null===r||void 0===r?void 0:r.find((e=>e.id===a)),activePlate:h,setactivePlate:g,plates:J,productPositions:L,activeCategoryId:a,categories:u,setSearchParams:f,searchParams:m})]})})}var Yo=o(76143);const Ko=n.Ay.div`
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
`,Jo=(n.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`,n.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`),Qo=n.Ay.span`
width: 90%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 10vh;
`,Zo=n.Ay.div`
  margin-top: 30px;
width: 90%;
  display: flex;
  flex-direction: column;
`,Go=(n.Ay.div`
display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
  

`,n.Ay.a`
font-size:16px;
 font-weight: 620;
 color:${e=>e.theme.popupTextColor}

`,n.Ay.a`
font-size:16px;
 font-weight: 620;
 color:${e=>e.theme.popupTextColor};
 text-decoration: none;


`,(0,n.Ay)(r.meu)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}
`,(0,n.Ay)(et.IW4)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,n.Ay)(z.gwi)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,n.Ay)(et.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`),ei=n.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
font-weight: bold;

`,ti=n.Ay.div`
width: 90%;
margin-top: 10px;

`,oi=n.Ay.div`
margin-top: 10px;
display: flex;
flex-direction: row;
width: 90%;
align-items: center;
gap:10px;
`,ii=n.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,ni=(n.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;

`,n.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`),ri=n.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,ai=(0,n.Ay)(go.ok6)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};
`,li=((0,n.Ay)(et._8j)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};


`,(0,n.Ay)(go.ao$)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`),si=(0,n.Ay)(Yo.mk3)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`,di=n.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,ci=n.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,pi=(0,n.Ay)(z.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`,ui=n.Ay.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 90%;
height: 50px;
gap:25px;
margin-top: 30px;
`,xi=n.Ay.button`
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
`,hi=n.i7`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,gi=n.Ay.div`
position: absolute;
width:10%;
height: 50%;
background-color:${e=>"Call"==e.activeButton?e.theme.mainColor:e.theme.popupbackgroundColor} ;
 left: 0;
 z-index: 5;

 `,mi=n.Ay.div`
position: absolute;
width:1px;
height: 100%;
background-color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 right: 0;
 animation: ${hi} 0.5s ease-in-out infinite; /* Infinite animation */

 `,fi=n.i7`
  0% {
opacity: 0;
left: -10%;
  }
  100% {
opacity: 1;
left: 16%;

  }

`,vi=n.Ay.span`
position: absolute;
 left: 16%;
 color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 animation: ${fi} 0.5s ease-in-out;
 z-index: 4;

 `,yi=n.i7`
  0% {
    opacity: 0;
    rotate: calc(180deg);
  }
  1000% {
    opacity: 1;
    rotate: calc(0deg);

  }
 
`,bi=(0,n.Ay)(et.pte)`
color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
font-size: 15px;
position: absolute;
right: 5%;
animation: ${yi} 0.7s ease-in-out;

`,wi=n.i7`
  0% {
    max-height: 0px;
  }
  1000% {
    max-height: 300px;


  }
 
`,ji=n.Ay.ul`
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

`,Ci=n.Ay.li`
  cursor: pointer;
  transition: background 0.2s;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;

`,$i=n.Ay.button`
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
`,Ai=n.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 18px;
font-weight: bold;

`,ki=n.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`,zi=n.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
`,Si=n.Ay.div`
  display: flex;
  flex-direction: row;
  width: 15px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${e=>e.theme.mainColor};
`,Li=(n.Ay.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${e=>e.theme.mainColor};
`,n.Ay.div`
  width: 5px;
  height: 5px;
  position: absolute;
  border-radius: 50%;
  background-color: ${e=>e.theme.popupbackgroundColor};
`,n.Ay.a`
 font-size:15px;
 font-weight: 300;
 flex: 1;
 color: ${e=>e.theme.popupTextColor};
 display: flex;
 align-items: center;
 margin-left: 20px;
 height: 100%;

 `),Ti=n.Ay.div`
 width: 15px;
 height: 45px;
 top: 25px;
 position: absolute;
 left: 0;
 display: flex;
 justify-content: center;
 `,_i=n.Ay.div`
 width: 2px;
 height: 100%;
 background-color: ${e=>e.theme.popupTextColor};
 opacity: 0.5;
 `;var Ii=o(72599),Ei=o(67059);function Ni(e){var t,o,n,a;let{restaurant:l,showPopup:s,popupHandler:d}=e;const{restaurantName:c}=(0,k.g)(),p=window.location.hostname.split(".")[0],u="menugic"!==p&&"localhost"!==p&&"www"!==p?p:c,x=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[u].activeLanguage})),[h,g]=(0,i.useState)("");return(0,i.useEffect)((()=>{const e=()=>{d(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,B.jsxs)(Ko,{showPopup:s,children:[(0,B.jsx)(Go,{onClick:()=>{d(null)}}),(0,B.jsx)(Qo,{children:(0,B.jsx)(Jo,{children:(m=null===l||void 0===l?void 0:l.name,m.replace(/\b\w/g,(function(e){return e.toUpperCase()})))})}),(0,B.jsxs)(ui,{children:[(0,B.jsx)(xi,{activeButton:h,onClick:()=>{g("Call"==h?"":"Call")},children:"Call"!==h?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Ii._Xz,{size:"25px"}),"en"==x?"Call Now":"\u0627\u062a\u0635\u0644 \u0627\u0644\u0627\u0646"]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(ji,{activeButton:h,children:null===l||void 0===l||null===(t=l.branches)||void 0===t?void 0:t.flatMap((e=>e.phone_number.split(" ").map(((t,o)=>(0,B.jsx)(Ci,{children:(0,B.jsxs)("a",{href:`tel:${t}`,style:{textDecoration:"none",color:"inherit"},children:[t,"  ",e.location&&(0,B.jsxs)("span",{children:["- ",e.name," "]})]})})))))}),(0,B.jsx)(gi,{activeButton:h,children:(0,B.jsx)(mi,{activeButton:h})}),(0,B.jsx)(vi,{activeButton:h,children:"en"==x?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,B.jsx)(bi,{activeButton:h})]})}),(0,B.jsx)($i,{activeButton:h,onClick:()=>{g("Message"==h?"":"Message")},children:"Message"!==h?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(go.EcP,{size:"25px"}),"en"==x?"Message":"\u0631\u0633\u0627\u0644\u0629","            "]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(ji,{activeButton:h,children:null===l||void 0===l||null===(o=l.branches)||void 0===o?void 0:o.map((e=>(0,B.jsx)(Ci,{children:(0,B.jsxs)("a",{href:`https://wa.me/${(0,Ei.JW)(null===e||void 0===e?void 0:e.whatsapp_number,null===l||void 0===l?void 0:l.country_code)}`,style:{textDecoration:"none",color:"inherit"},children:[null===e||void 0===e?void 0:e.whatsapp_number,"-",null===e||void 0===e?void 0:e.name]})})))}),(0,B.jsx)(gi,{activeButton:h,children:(0,B.jsx)(mi,{activeButton:h})}),(0,B.jsx)(vi,{activeButton:h,children:"en"==x?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,B.jsx)(bi,{activeButton:h})]})})]}),(0,B.jsxs)(Zo,{children:[(null===l||void 0===l||null===(n=l.branches)||void 0===n?void 0:n.name)&&(0,B.jsx)(Ai,{children:"Branches"}),(0,B.jsx)(ki,{children:null===l||void 0===l||null===(a=l.branches)||void 0===a?void 0:a.map(((e,t)=>{var o;return e.name&&(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(zi,{children:[t!==(null===l||void 0===l||null===(o=l.branches)||void 0===o?void 0:o.length)-1&&(0,B.jsx)(Ti,{index:t,children:(0,B.jsx)(_i,{})}),(0,B.jsx)(Si,{children:(0,B.jsx)(r.sIY,{})}),(0,B.jsx)(Li,{href:`https://${null===e||void 0===e?void 0:e.mapLink}`,children:e.location})]})})}))})]}),(0,B.jsx)(ti,{children:(0,B.jsx)(ei,{children:"en"==x?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"})}),(0,B.jsxs)(oi,{children:[l.socialMedia.find((e=>"Instagram"==e.platform))&&(0,B.jsx)(ii,{href:`https://${l.socialMedia.find((e=>"Instagram"==e.platform)).link}`,children:(0,B.jsx)(li,{})}),l.socialMedia.find((e=>"Facebook"==e.platform))&&(0,B.jsx)(ri,{href:`https://${l.socialMedia.find((e=>"Facebook"==e.platform)).link}`,children:(0,B.jsx)(ai,{})}),l.socialMedia.find((e=>"Tiktok"==e.platform))&&(0,B.jsx)(ni,{href:`https://${l.socialMedia.find((e=>"Tiktok"==e.platform)).link}`,children:(0,B.jsx)(si,{})})]}),(0,B.jsxs)(di,{children:["Copyright",(0,B.jsx)(pi,{})," ",(new Date).getFullYear()," "," ",(0,B.jsx)(ci,{href:"https://www.menugic.com",children:"menugic.com"})]})]});var m}const Pi=n.Ay.div`
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
`,Fi=((0,n.Ay)(et.WQq)`
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

`,n.Ay.div`
width: 90%;
display: flex;
flex-direction: column;
`,n.Ay.div`
font-size: 25px;
font-weight:600;
margin-top:40px;
color: ${e=>e.theme.popupTextColor};

`,n.Ay.div`
height: 0.25px;
width: 100%;
background-color: ${e=>e.theme.popupTextColor};
opacity: 0.1;
margin-top:10px;

`,n.Ay.div`
max-height: 35vh;
width: 100%;
overflow: scroll;
margin-top: 20px;

`,n.Ay.div`
height: 35vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color:${e=>e.theme.popupTextColor};
font-size: 18px;
`);n.Ay.div`
width: 100%;
display: flex;
flex-direction: row;
height: 11vh;
margin-top: 1vh;
position: relative;

`,n.Ay.div`
flex: 1;
display: flex;
justify-content: center;
`,n.Ay.img`
width: 70%;
height: 100%;
object-fit: cover;
border-radius: 3px;
`,n.Ay.div`
flex: 1;
display: flex;
flex-direction: column;
gap:2px;
`,n.Ay.div`
flex: 1;
display: flex;
align-items: flex-end;
justify-content: flex-end;


`,n.Ay.div`
width: 50%;
display: flex;
flex-direction: row;
height: 20px;
background-color:${e=>e.theme.mainColor};
color:${e=>e.theme.popupbackgroundColor};
border-radius: 20px;
margin-right: 20px;
margin-bottom: 10px;

`,n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,n.Ay.span`
font-size: 13px;
font-weight: 500;
color:${e=>e.theme.popupTextColor};

`,n.Ay.span`
color:${e=>e.theme.popupTextColor};
font-size: 13px;


`,n.Ay.span`
color:${e=>e.theme.popupTextColor};
font-size: 13px;
margin-top: 30px;


`,n.Ay.button`
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

`,(0,n.Ay)(z.pS_)`
font-size: 15px;
position: absolute;
top: 0px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`;var Di=o(29334),Ri=o(50074),Ui=o(81926);const Oi=n.i7`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,Mi=n.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Bi=n.Ay.div`
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
`,qi=n.Ay.div`
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
  animation: ${Oi} 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`,Wi=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`,Hi=n.Ay.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Vi=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`,Xi=n.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Yi=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`,Ki=n.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  white-space: nowrap;
`,Ji=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}12`};
  padding: 3px 5px;
  border-radius: 20px;
`,Qi=n.Ay.button`
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
`,Zi=n.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  min-width: 20px;
  text-align: center;
`,Gi=n.Ay.button`
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
`,en=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,tn="\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 2px 8px;\n  line-height: 1.5;\n  white-space: nowrap;\n",on=n.Ay.span`
  ${tn}
  border: 1px solid ${e=>`${e.theme.popupTextColor||"#1a1a1a"}50`};
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  background: transparent;
`,nn=n.Ay.span`
  ${tn}
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}18`};
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}35`};
`,rn=n.Ay.span`
  ${tn}
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  border: 1px dashed ${e=>`${e.theme.popupTextColor||"#999"}40`};
  opacity: 0.65;
  text-decoration: line-through;
`,an=n.Ay.div`
  font-size: 10px;
  font-style: italic;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ln=n.Ay.div`
  font-size: 10px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.75;
  line-height: 1.5;
`,sn=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}10`};
  border-radius: 12px;
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  margin-top: 4px;
`,dn=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,cn=n.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  opacity: 0.75;
`,pn=n.Ay.div`
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
`,un=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.6;
  text-align: center;
`,xn=["Size:","\u0627\u0644\u062d\u062c\u0645:"],hn=["Add ons:","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:"],gn=["Remove:","\u0628\u062f\u0648\u0646:"];function mn(e){let{restaurant:t,activeLanguage:o}=e;const i=(0,A.wA)(),{restaurantName:n}=(0,k.g)(),r=window.location.hostname.split(".")[0],a="menugic"!==r&&"localhost"!==r&&"www"!==r?r:n,l=(0,A.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,t)=>e+t.price*t.quantity),0),d="ar"===o?"ar":"en",c=e=>{const t=(0,Ri.qh)(e,d);if(!t.length)return null;const{sizeLabel:o,addonLabels:i,removalLabels:n,legacyLines:r}=function(e){const t={sizeLabel:null,addonLabels:[],removalLabels:[],legacyLines:[]};let o=null;for(const i of e)"heading"===i.type?o=xn.includes(i.text)?"size":hn.includes(i.text)?"addons":gn.includes(i.text)?"removals":"legacy":"size"===o?t.sizeLabel=i.text:"addons"===o?t.addonLabels.push(i.text):"removals"===o?t.removalLabels.push(i.text):t.legacyLines.push(i.text);return t}(t),a=o||i.length||n.length;return(0,B.jsxs)(B.Fragment,{children:[a&&(0,B.jsxs)(en,{children:[o&&(0,B.jsx)(on,{children:"ar"===d?`\u0627\u0644\u062d\u062c\u0645: ${o}`:`Size: ${o}`}),i.map((e=>(0,B.jsxs)(nn,{children:["+ ",e]},e))),n.map((e=>(0,B.jsx)(rn,{children:e},e)))]}),r.map(((e,t)=>(0,B.jsx)(ln,{children:e},t)))]})},p=(0,Ze.Q)(null===t||void 0===t?void 0:t.currency);if(0===l.length)return(0,B.jsx)(Mi,{children:(0,B.jsx)(un,{children:"ar"===d?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"})});const u=e=>{var t;const o=null===(t=e.images)||void 0===t?void 0:t[0];return o&&o.url?(0,M.V)(o.url):""};return(0,B.jsx)(Mi,{children:(0,B.jsxs)(Bi,{children:[l.map((e=>{const t="ar"===d?e.ar_name:e.en_name,o=(0,Ye.T)(e.price*e.quantity,p);return(0,B.jsx)(qi,{children:(0,B.jsxs)(Wi,{children:[(0,B.jsx)(Hi,{src:u(e),alt:t}),(0,B.jsxs)(Vi,{children:[(0,B.jsxs)(Xi,{title:t,children:[t,e.menuMode&&"both"!==e.menuMode&&(0,B.jsx)("span",{style:{display:"inline-block",fontSize:"10px",fontWeight:600,padding:"2px 6px",borderRadius:"8px",marginLeft:"6px",marginRight:"6px",background:"dine_in"===e.menuMode?"#e8f5e9":"#e3f2fd",color:"dine_in"===e.menuMode?"#2e7d32":"#1565c0",verticalAlign:"middle"},children:"dine_in"===e.menuMode?"ar"===d?"\u0645\u0637\u0639\u0645":"Dine In":"ar"===d?"\u062a\u0648\u0635\u064a\u0644":"Delivery"})]}),c(e),e.instruction&&(0,B.jsxs)(an,{children:["\ud83d\udcdd ",e.instruction]})]}),(0,B.jsxs)(Yi,{children:[(0,B.jsx)(Ki,{children:o}),(0,B.jsxs)(Ji,{children:[(0,B.jsx)(Qi,{onClick:()=>{return t=e.uniqueId,void((o=e.quantity)>1&&i((0,Kt.v)(a,t,o-1)));var t,o},disabled:e.quantity<=1,"aria-label":"decrease quantity",children:"\u2212"}),(0,B.jsx)(Zi,{children:e.quantity}),(0,B.jsx)(Qi,{onClick:()=>{return t=e.uniqueId,o=e.quantity,i((0,Kt.v)(a,t,o+1));var t,o},"aria-label":"increase quantity",children:"+"})]}),(0,B.jsx)(Gi,{onClick:()=>{return t=e.uniqueId,i((0,Kt.dt)(a,t));var t},"aria-label":"remove item",children:(0,B.jsx)(go.qbC,{})})]})]})},e.uniqueId)})),(0,B.jsx)(sn,{children:(0,B.jsxs)(dn,{children:[(0,B.jsx)(cn,{children:"ar"===d?"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a":"Total"}),(0,B.jsx)(pn,{children:(0,Ye.T)(s,p)})]})})]})})}var fn=o(13491);const vn=n.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`;n.Ay.div`
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

`,n.Ay.ul`
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

`,n.Ay.li`
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

`,n.Ay.span`

`,n.Ay.span`
  border: solid ${e=>e.theme.popupTextColor||"#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.open?"rotate(-135deg)":"rotate(45deg)"};
  margin-left: 10px;
  transition: transform 0.3s;

`;function yn(e){let{deliveryType:t,branches:o,selectedBranch:i,setSelectedBranch:r,setErrors:a,errors:l}=e;const s=(0,n.DP)(),d=(o||[]).map((e=>({value:e.id,label:e.name,branch:e,isDisabled:!e.has_delivery&&"Delivery"===t}))),c={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(null!==l&&void 0!==l&&l.branch?"rgba(255, 68, 68, 0.1)":s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:t.isDisabled?"#999":s.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?s.categoryUnActive||"#ffffff":t.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent",cursor:t.isDisabled?"not-allowed":"pointer",display:"flex",justifyContent:"space-between"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,B.jsx)(vn,{children:(0,B.jsx)(fn.Ay,{value:d.find((e=>{var t;return(null===(t=e.branch)||void 0===t?void 0:t.id)===(null===i||void 0===i?void 0:i.id)})),onChange:e=>{e&&!e.isDisabled&&(r(e.branch),a({...l,branch:""}))},options:d,placeholder:"Select Branch",isOptionDisabled:e=>e.isDisabled,styles:c,formatOptionLabel:e=>(0,B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,B.jsx)("span",{children:e.label}),e.isDisabled&&"Delivery"===t&&(0,B.jsx)("span",{style:{fontSize:12,color:"#999"},children:"No Delivery"})]}),menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})})}const bn=n.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`,wn=(n.Ay.div`
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

`,n.Ay.ul`
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

`,n.Ay.li`
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
`,n.Ay.span`
width: 90%;
`,n.Ay.span`
  border: solid ${e=>e.theme.popupTextColor||"#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.open?"rotate(-135deg)":"rotate(45deg)"};
  margin-left: 10px;
  transition: transform 0.3s;

`,n.Ay.div`
height: 70px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(0,0,0,0.2);
`),jn=n.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`,Cn=n.Ay.input`
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
`,$n=(0,n.Ay)(g.Xj1)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.mainColor};

`,An=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;n.Ay.div`
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`,n.Ay.div`
  border: 3px solid ${e=>e.theme.popupbackgroundColor};
  border-left-color:${e=>e.theme.popupTextColor};; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${An} 1s linear infinite; /* Apply animation */
`;var kn=o(89993);function zn(e){var t;let{selectedBranch:o,selectedRegion:r,onRegionChange:a,setErrors:l,errors:s,onRegionsChange:d}=e;const c=(0,n.DP)(),[p,u]=(0,i.useState)(!1),[x,h]=(0,i.useState)(""),{response:g,isLoading:m}=(0,kn.w)({branch_id:o.id,onSuccess:()=>{}});(0,i.useEffect)((()=>{var e;m||d((null===g||void 0===g||null===(e=g.data)||void 0===e?void 0:e.regions)||[])}),[m,g,d]),(0,i.useEffect)((()=>{a("")}),[o,a]);const f=((null===g||void 0===g||null===(t=g.data)||void 0===t?void 0:t.regions)||[]).map((e=>({value:e.region_name,label:e.region_name}))),v=f.filter((e=>e.label.toLowerCase().includes(x.toLowerCase()))),y={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(null!==s&&void 0!==s&&s.region?"rgba(255, 68, 68, 0.1)":c.mainColor?`${c.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:c.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:c.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:c.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:c.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:c.categoryUnActive||"#ffffff",border:`1px solid ${c.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:c.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?c.categoryUnActive||"#ffffff":t.isFocused?c.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return!m&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(bn,{children:(0,B.jsx)(fn.Ay,{value:f.find((e=>e.value===r)),onMenuOpen:()=>u(!0),onMenuClose:()=>u(!1),onChange:e=>{a((null===e||void 0===e?void 0:e.value)||""),h(""),l({...s,region:""})},options:v,placeholder:"Select Region",styles:y,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})}),p&&(0,B.jsx)(wn,{children:(0,B.jsxs)(jn,{children:[(0,B.jsx)(Cn,{placeholder:"Search",value:x,onChange:e=>{h(e.target.value)}}),(0,B.jsx)($n,{})]})})]})}const Sn=n.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ln=n.Ay.div`
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
`,Tn=n.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,_n=n.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,In=(n.Ay.select`
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
`,n.Ay.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`);function En(e){var t,o;let{formData:i,updateFormData:r,restaurant:a,errors:l,setErrors:s}=e;const d=(0,n.DP)();let c={};try{c=JSON.parse((null===a||void 0===a?void 0:a.features)||"{}")}catch(x){c={}}const p=[c.delivery_order&&{value:"Delivery",label:"Delivery"},c.takeaway_order&&{value:"TakeAway",label:"Take Away"},c.dinein_order&&{value:"DineIn",label:"Dine In"}].filter(Boolean),u={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(l.deliveryType?"rgba(255, 68, 68, 0.1)":d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?d.categoryUnActive||"#ffffff":t.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,B.jsxs)(Sn,{children:[(0,B.jsx)(Tn,{children:"Select Order Type"}),(0,B.jsx)(_n,{children:"Choose how you would like to receive your order"}),(0,B.jsxs)(Ln,{children:[(0,B.jsx)(fn.Ay,{value:p.find((e=>e.value===i.deliveryType)),onChange:e=>{var t;r({deliveryType:(null===e||void 0===e?void 0:e.value)||"",selectedBranch:(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t[0])||null,selectedRegion:""}),s({})},options:p,placeholder:"Select Order Type",isSearchable:!1,styles:u,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"}),l.deliveryType&&(0,B.jsx)(In,{children:l.deliveryType})]}),(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)>0&&!(()=>{var e;return null===a||void 0===a||null===(e=a.branches)||void 0===e?void 0:e.some((e=>e.is_online))})()&&(0,B.jsxs)(Ln,{children:[(0,B.jsx)(yn,{deliveryType:i.deliveryType,branches:null===a||void 0===a?void 0:a.branches,selectedBranch:i.selectedBranch,setSelectedBranch:e=>r({selectedBranch:e,selectedRegion:""}),setErrors:s,errors:l}),l.branch&&(0,B.jsx)(In,{children:l.branch})]}),i.selectedBranch&&"Delivery"===i.deliveryType&&Array.isArray(i.regions)&&i.regions.length>0&&(0,B.jsxs)(Ln,{children:[(0,B.jsx)(zn,{selectedRegion:i.selectedRegion,onRegionChange:e=>r({selectedRegion:e}),selectedBranch:1===(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.length)?null===a||void 0===a?void 0:a.branches[0]:i.selectedBranch,setErrors:s,errors:l,onRegionsChange:e=>r({regions:e})}),l.region&&(0,B.jsx)(In,{children:l.region})]})]})}var Nn=o(16106);const Pn=n.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Fn=n.Ay.button`
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
`,Dn=n.Ay.div`
  padding: 16px;
  background: ${e=>e.theme.categoryUnActive||"#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Rn=n.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Un=n.Ay.div`
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  word-break: break-all;
`,On=n.Ay.a`
  font-size: 14px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-decoration: none;
  font-weight: 600;
  margin-top: 4px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`,Mn=n.Ay.div`
  color: #ff4444;
  font-size: 13px;
  margin-top: -8px;
`;function Bn(e){let{onLocationSelect:t,selectedLocation:o,hasError:i,googleMapsApiKey:r,activeLanguage:a="en"}=e;const l=(0,n.DP)();return r?(0,B.jsx)(Nn.A,{apiKey:r,onLocationConfirm:t,selectedLocation:o,hasError:i,theme:l,activeLanguage:a}):(0,B.jsx)(qn,{onLocationSelect:t,selectedLocation:o,hasError:i})}function qn(e){let{onLocationSelect:t,selectedLocation:o,hasError:n}=e;const[r,a]=(0,i.useState)(!1),[l,s]=(0,i.useState)("");return(0,B.jsxs)(Pn,{children:[(0,B.jsxs)(Fn,{type:"button",onClick:()=>{navigator.geolocation?(a(!0),s(""),navigator.geolocation.getCurrentPosition((e=>{const{latitude:o,longitude:i}=e.coords,n={latitude:o,longitude:i,address:`${o.toFixed(6)}, ${i.toFixed(6)}`};t(n),a(!1)}),(()=>{s("Unable to retrieve your location. Please try again."),a(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):s("Geolocation is not supported by your browser")},disabled:r,variant:"current",children:[(0,B.jsx)(go.hO$,{}),r?"Getting Location...":"Use Current Location"]}),(0,B.jsxs)(Fn,{type:"button",onClick:()=>{if(o){const e=`https://www.google.com/maps?q=${o.latitude},${o.longitude}`;window.open(e,"_blank")}else{const e="https://www.google.com/maps/search/?api=1";window.open(e,"_blank")}},variant:"select",children:[(0,B.jsx)(go.vq8,{}),o?"View on Map":"Select on Map"]}),o&&(0,B.jsxs)(Dn,{children:[(0,B.jsx)(Rn,{children:"Selected Location:"}),(0,B.jsx)(Un,{children:o.address||`${o.latitude}, ${o.longitude}`}),o.latitude&&o.longitude&&(0,B.jsx)(On,{href:`https://www.google.com/maps?q=${o.latitude},${o.longitude}`,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]}),l&&(0,B.jsx)(Mn,{children:l}),n&&!o&&(0,B.jsx)(Mn,{children:"Please select a location"})]})}const Wn=n.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`,Hn=n.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,Vn=n.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,Xn=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 0;
  position: relative;
`,Yn=n.Ay.label`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Kn=n.Ay.input`
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
`,Jn=n.Ay.textarea`
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
`,Qn=n.Ay.span`
  color: #ff4444;
  font-size: 12px;
  display: block;
`,Zn=n.Ay.p`
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.85;
`;function Gn(e){let{formData:t,updateFormData:o,errors:r,restaurantName:a,restaurant:l,activeLanguage:s="en"}=e;const d=(0,n.DP)(),[c,p]=(0,i.useState)([]),[u,x]=(0,i.useState)(!1),h=(0,i.useRef)(!1),g=(e,t)=>"ar"===s?t:e,m=(0,i.useMemo)((()=>{try{return null!==l&&void 0!==l&&l.features?JSON.parse(l.features):{}}catch{return{}}}),[null===l||void 0===l?void 0:l.features]).google_maps_integrated&&(null===l||void 0===l?void 0:l.google_maps_api_key)||null,f=(0,i.useMemo)((()=>({control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:d.mainColor||d.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?d.categoryUnActive||"#ffffff":t.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})})),[d]),v=(0,i.useMemo)((()=>[{value:"__manual__",label:0===c.length?g("No saved addresses \u2014 type below","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u2014 \u0627\u0643\u062a\u0628 \u0623\u062f\u0646\u0627\u0647"):g("Type address manually","\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u062f\u0648\u064a\u0627\u064b")},...c.map((e=>({value:String(e.id),label:`${e.label||g("Address","\u0639\u0646\u0648\u0627\u0646")}${e.is_default?` (${g("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")})`:""} \u2014 ${e.full_address.length>56?`${e.full_address.slice(0,56)}\u2026`:e.full_address}`})))]),[c,s]),y=(0,i.useMemo)((()=>{if(null==t.selectedAddressId)return v[0]||null;const e=String(t.selectedAddressId);return v.find((t=>t.value===e))||v[0]||null}),[v,t.selectedAddressId]);(0,i.useEffect)((()=>{if("Delivery"!==t.deliveryType||!a)return void p([]);const e=(0,Qe.wU)(a);if(!e)return void p([]);let o=!1;return x(!0),ge.A.get(Je.Qf,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:t}=e;o||p(t.addresses||[])})).catch((()=>{o||p([])})).finally((()=>{o||x(!1)})),()=>{o=!0}}),[t.deliveryType,a]),(0,i.useEffect)((()=>{"Delivery"!==t.deliveryType&&(h.current=!1)}),[t.deliveryType]),(0,i.useEffect)((()=>{if("Delivery"!==t.deliveryType)return;if(!c.length||h.current)return;const e=c.find((e=>e.is_default));e&&!String(t.fullAddress||"").trim()&&(h.current=!0,o({selectedAddressId:e.id,fullAddress:e.full_address}))}),[c,t.deliveryType,t.fullAddress,o]);const b=e=>{const{name:t,value:i}=e.target;o("fullAddress"!==t?{[t]:i}:{[t]:i,selectedAddressId:null})};return(0,B.jsxs)(Wn,{children:[(0,B.jsx)(Hn,{children:g("Your Information","\u0628\u064a\u0627\u0646\u0627\u062a\u0643")}),(0,B.jsx)(Vn,{children:g("Please provide your contact details to complete the order","\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628")}),(0,B.jsxs)(Xn,{children:[(0,B.jsx)(Yn,{children:g("Full Name *","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,B.jsx)(Kn,{type:"text",name:"fullName",value:t.fullName,onChange:b,placeholder:g("Enter your full name","\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644"),hasError:!!r.fullName}),r.fullName&&(0,B.jsx)(Qn,{children:r.fullName})]}),(0,B.jsxs)(Xn,{children:[(0,B.jsx)(Yn,{children:g("Phone Number *","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 *")}),(0,B.jsx)(Kn,{type:"tel",name:"phoneNumber",value:t.phoneNumber,onChange:b,placeholder:g("Enter your phone number","\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643"),hasError:!!r.phoneNumber}),r.phoneNumber&&(0,B.jsx)(Qn,{children:r.phoneNumber})]}),"Delivery"===t.deliveryType&&(0,B.jsxs)(B.Fragment,{children:[(0,Qe.wU)(a)&&(0,B.jsxs)(Xn,{children:[(0,B.jsxs)(Yn,{children:[g("Saved address","\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0641\u0648\u0638"),u?` (${g("loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")})`:""]}),(0,B.jsx)(Ln,{children:(0,B.jsx)(fn.Ay,{value:y,onChange:e=>{if(!e||"__manual__"===e.value)return void o({selectedAddressId:null});const t=parseInt(e.value,10),i=c.find((e=>e.id===t));i&&o({selectedAddressId:t,fullAddress:i.full_address})},options:v,isSearchable:!1,isDisabled:u,styles:f,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed",isRtl:"ar"===s})}),(0,B.jsx)(Zn,{children:g("Add or edit addresses from the account menu (person icon) \u2192 Addresses.","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062d\u0633\u0627\u0628 (\u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0634\u062e\u0635) \u2190 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646.")})]}),m&&(0,B.jsxs)(Xn,{children:[(0,B.jsx)(Yn,{children:g("Delivery Location *","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 *")}),(0,B.jsx)(Bn,{onLocationSelect:e=>{o({selectedLocation:e,fullAddress:e.address||`${e.latitude}, ${e.longitude}`})},selectedLocation:t.selectedLocation,hasError:!!r.fullAddress&&!t.selectedLocation,googleMapsApiKey:m,activeLanguage:s})]}),(0,B.jsxs)(Xn,{children:[(0,B.jsx)(Yn,{children:g("Full Address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,B.jsx)(Jn,{name:"fullAddress",value:t.fullAddress,onChange:b,placeholder:g("Enter your delivery address","\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),hasError:!!r.fullAddress,rows:"3"}),r.fullAddress&&(0,B.jsx)(Qn,{children:r.fullAddress})]})]}),"DineIn"===t.deliveryType&&(0,B.jsxs)(Xn,{children:[(0,B.jsx)(Yn,{children:g("Table Number *","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 *")}),(0,B.jsx)(Kn,{type:"number",name:"tableNumber",value:t.tableNumber,onChange:b,placeholder:g("Enter table number","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629"),hasError:!!r.tableNumber}),r.tableNumber&&(0,B.jsx)(Qn,{children:r.tableNumber})]}),(0,B.jsxs)(Xn,{children:[(0,B.jsx)(Yn,{children:g("Special Notes (Optional)","\u0645\u0644\u0627\u062d\u0638\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,B.jsx)(Jn,{name:"note",value:t.note,onChange:b,placeholder:g("Any special instructions or notes\u2026","\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u2026"),rows:"3"})]})]})}const er=n.Ay.div`
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
`,tr=n.Ay.div`
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,or=n.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 12px;
`,ir=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  gap: 12px;
`,nr=n.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#666"};
  flex: 1;
`,rr=n.Ay.div`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  text-align: right;
  flex: 1;
  word-break: break-word;
`,ar=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,lr=n.Ay.div`
  padding: 8px 0;
`,sr=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,dr=n.Ay.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`,cr=n.Ay.div`
  height: 1px;
  background: ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  margin: 12px 0;
`,pr=n.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-align: right;
`;function ur(e){let{formData:t,restaurant:o,activeLanguage:i}=e;const{restaurantName:n}=(0,k.g)(),r=window.location.hostname.split(".")[0],a="menugic"!==r&&"localhost"!==r&&"www"!==r?r:n,l=(0,A.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,t)=>e+t.price*t.quantity),0),d=(0,Ze.Q)(null===o||void 0===o?void 0:o.currency);return(0,B.jsxs)(er,{children:[(0,B.jsx)(or,{children:"Review Your Order"}),(0,B.jsxs)(tr,{children:[(0,B.jsx)(or,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Items"}),(0,B.jsx)(ar,{children:l.map((e=>{var t,o;return(0,B.jsx)(lr,{children:(0,B.jsxs)(sr,{children:[(0,B.jsx)(dr,{src:(0,M.V)(null===(t=e.images)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.url),alt:"en"===i?e.en_name:e.ar_name}),(0,B.jsxs)(rr,{style:{flex:2},children:[e.quantity,"x"," ",(0,B.jsx)("strong",{children:"en"===i?e.en_name:e.ar_name})]}),(0,B.jsx)(rr,{children:(0,Ye.T)(e.price*e.quantity,d)})]})},e.uniqueId)}))}),(0,B.jsx)(cr,{}),(0,B.jsxs)(ir,{children:[(0,B.jsx)(nr,{children:"Total:"}),(0,B.jsx)(pr,{children:(0,Ye.T)(s,d)})]})]}),(0,B.jsxs)(tr,{children:[(0,B.jsx)(or,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Details"}),(0,B.jsxs)(ir,{children:[(0,B.jsx)(nr,{children:"Order Type:"}),(0,B.jsx)(rr,{children:t.deliveryType})]}),t.selectedBranch&&(0,B.jsxs)(ir,{children:[(0,B.jsx)(nr,{children:"Branch:"}),(0,B.jsx)(rr,{children:t.selectedBranch.name})]}),t.selectedRegion&&(0,B.jsxs)(ir,{children:[(0,B.jsx)(nr,{children:"Region:"}),(0,B.jsx)(rr,{children:t.selectedRegion})]})]}),(0,B.jsxs)(tr,{children:[(0,B.jsx)(or,{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact Information"}),(0,B.jsxs)(ir,{children:[(0,B.jsx)(nr,{children:"Name:"}),(0,B.jsx)(rr,{children:t.fullName})]}),(0,B.jsxs)(ir,{children:[(0,B.jsx)(nr,{children:"Phone:"}),(0,B.jsx)(rr,{children:t.phoneNumber})]}),"Delivery"===t.deliveryType&&t.fullAddress&&(0,B.jsxs)(ir,{children:[(0,B.jsx)(nr,{children:"Address:"}),(0,B.jsx)(rr,{children:t.fullAddress})]}),"DineIn"===t.deliveryType&&t.tableNumber&&(0,B.jsxs)(ir,{children:[(0,B.jsx)(nr,{children:"Table Number:"}),(0,B.jsx)(rr,{children:t.tableNumber})]}),t.note&&(0,B.jsxs)(ir,{children:[(0,B.jsx)(nr,{children:"Notes:"}),(0,B.jsx)(rr,{children:t.note})]})]})]})}const xr=n.Ay.div`
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
`,hr=n.Ay.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,gr=n.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`,mr=(0,n.Ay)(hr)`
  margin-bottom: 0;
  flex: 1;
`,fr=n.Ay.button`
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
`,vr=n.Ay.div`
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
`,yr=n.Ay.div`
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
`,br=n.Ay.div`
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
`,wr=n.Ay.div`
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
`,jr=n.Ay.div`
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
`,Cr=n.Ay.button`
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
`,$r=[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"review",label:"Review",number:4}];function Ar(e){var t;let{popupHandler:o,restaurant:n}=e;const{restaurantName:r}=(0,k.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:r,s=(0,A.d4)((e=>e.cart[l]||[])),d=(0,A.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[l])||void 0===o?void 0:o.activeLanguage)||"en"})),c=(0,A.wA)(),[p,u]=(0,i.useState)(0),[x,h]=(0,i.useState)({deliveryType:"",selectedBranch:(null===n||void 0===n||null===(t=n.branches)||void 0===t?void 0:t[0])||null,selectedRegion:"",regions:[],fullName:"",phoneNumber:"",fullAddress:"",selectedAddressId:null,selectedLocation:null,tableNumber:"",note:""}),[g,m]=(0,i.useState)({}),{handleApiCallAsync:f,isPending:v}=(0,Di.h)({onSuccess:()=>{}});(0,i.useEffect)((()=>{(async()=>{const e=(0,Qe.wU)(l);if(e)try{const{data:t}=await ge.A.get(Je.EY,{headers:{Authorization:`Bearer ${e}`}});h((e=>({...e,fullName:t.full_name||e.fullName,phoneNumber:t.phone_number||e.phoneNumber})))}catch{}})()}),[l]),(0,i.useEffect)((()=>{if(null!==n&&void 0!==n&&n.features){const e=JSON.parse(n.features),t=Object.entries(e).filter((e=>{let[t,o]=e;return!0===o})).map((e=>{let[t]=e;return"delivery_order"===t?"Delivery":"takeaway_order"===t?"TakeAway":"dinein_order"===t?"DineIn":null})).filter(Boolean);1===t.length&&h((e=>({...e,deliveryType:t[0]})))}}),[n]);const y=e=>{h((t=>({...t,...e})));const t=Object.keys(e);m((e=>{const o={...e};return t.forEach((e=>{o[e]&&delete o[e]})),o}))},b=e=>{const t={};if(1===e){var o;if(x.deliveryType||(t.deliveryType="Order Type is required."),!x.selectedBranch&&(null===n||void 0===n||null===(o=n.branches)||void 0===o?void 0:o.length)>0){var i;(null===n||void 0===n||null===(i=n.branches)||void 0===i?void 0:i.some((e=>e.is_online)))||(t.branch="Branch is required.")}"Delivery"===x.deliveryType&&x.selectedBranch&&Array.isArray(x.regions)&&x.regions.length>0&&!x.selectedRegion&&(t.region="Region is required.")}else 2===e&&(x.fullName||(t.fullName="Full Name is required."),x.phoneNumber||(t.phoneNumber="Phone Number is required."),"Delivery"!==x.deliveryType||x.fullAddress||(t.fullAddress="Full Address is required for delivery."),"DineIn"!==x.deliveryType||x.tableNumber||(t.tableNumber="Table Number is required."));return m(t),0===Object.keys(t).length};return(0,B.jsxs)(xr,{children:[(0,B.jsxs)(gr,{children:[(0,B.jsx)(mr,{children:$r[p].label}),(0,B.jsx)(fr,{onClick:()=>o(null),"aria-label":"Close cart",children:"\u2715"})]}),(0,B.jsx)(vr,{children:$r.map(((e,t)=>(0,B.jsxs)(yr,{active:t<=p,children:[(0,B.jsx)(br,{active:t<=p,completed:t<p,children:t<p?"\u2713":e.number}),(0,B.jsx)("span",{children:e.label})]},e.id)))}),(0,B.jsx)(wr,{children:(()=>{switch(p){case 0:return(0,B.jsx)(mn,{formData:x,updateFormData:y,restaurant:n,activeLanguage:d});case 1:return(0,B.jsx)(En,{formData:x,updateFormData:y,restaurant:n,errors:g,setErrors:m});case 2:return(0,B.jsx)(Gn,{formData:x,updateFormData:y,restaurant:n,errors:g,restaurantName:l,activeLanguage:d});case 3:return(0,B.jsx)(ur,{formData:x,restaurant:n,activeLanguage:d});default:return null}})()}),(0,B.jsxs)(jr,{children:[p>0&&(0,B.jsx)(Cr,{onClick:()=>{p>0&&u(p-1)},variant:"secondary",children:"Back"}),p<$r.length-1?(0,B.jsx)(Cr,{onClick:()=>{if(b(p)){if(0===p&&null!==n&&void 0!==n&&n.id){var e;const t=(null===(e=x.selectedBranch)||void 0===e?void 0:e.id)||null;(0,Ui.trackCheckoutStart)(n.id,t,x.deliveryType||null)}p<$r.length-1&&u(p+1)}},variant:"primary",children:"Next"}):(0,B.jsx)(Cr,{onClick:async()=>{var e,t,i,r;if(!b(2))return;const a=(0,Ze.Q)(null===n||void 0===n?void 0:n.currency);let p=0,u="";u+=`*New Order - ${x.deliveryType}*\n`,u+="--------------------\n\n",u+="*Items:*\n",s.forEach(((e,t)=>{const o="dine_in"===e.menuMode?" [Dine In]":"delivery"===e.menuMode?" [Delivery]":"",i=("ar"===d?e.ar_name:e.en_name||"").trim(),n=("ar"===d?e.category.ar_category:e.category.en_category||"").trim(),r=e.price*e.quantity;p+=r,u+=`${t+1}. *${i}*${o}\n`,u+=`    ${n}\n`,u+=`    ${e.quantity}x ${e.price} ${a} = *${r} ${a}*\n`,e.formData&&(u+=(0,Ri.Ve)(e,"ar"===d?"ar":"en")),e.instruction&&(u+=`    > _${e.instruction}_\n`),u+="\n"})),u+="--------------------\n",u+=`*Total: ${(0,Ye.T)(p,a)}*\n\n`,u+="*Customer:*\n",u+=`- ${x.fullName}\n`,u+=`- ${x.phoneNumber}\n`,x.selectedRegion&&(u+=`- Region: ${x.selectedRegion}\n`);let h="";"Delivery"===x.deliveryType&&(u+="\n*Delivery Address:*\n",u+=`${x.fullAddress}\n`,x.selectedLocation&&(h=`https://www.google.com/maps?q=${x.selectedLocation.latitude},${x.selectedLocation.longitude}`)),"DineIn"===x.deliveryType&&(u+=`- Table: #${x.tableNumber}\n`),x.note&&(u+=`\n*Note:* _${x.note}_\n`),h&&(u+=`\n${h}\n`);const g=null!==(e=x.selectedBranch)&&void 0!==e&&e.whatsapp_number?(0,Ei.JW)(x.selectedBranch.whatsapp_number,null===n||void 0===n?void 0:n.country_code):n.phone_number,m=[...s.map((e=>{var t;return{id:e.id,quantity:e.quantity,branch_id:null===(t=x.selectedBranch)||void 0===t?void 0:t.id,restaurant_id:n.id}}))],v=[...s.map((e=>({product_id:e.id,product_name:"en"===d?e.en_name:e.ar_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",menu_mode:e.menuMode||"both",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];f({products:m,restaurant_id:n.id,branch_id:null===(t=x.selectedBranch)||void 0===t?void 0:t.id,delivery_type:x.deliveryType,customer_name:x.fullName,customer_phone:x.phoneNumber,customer_address:"Delivery"===x.deliveryType?x.fullAddress:null,customer_latitude:(null===(i=x.selectedLocation)||void 0===i?void 0:i.latitude)||null,customer_longitude:(null===(r=x.selectedLocation)||void 0===r?void 0:r.longitude)||null,table_number:"DineIn"===x.deliveryType?x.tableNumber:null,note:x.note,items:v,subtotal:p,total:p,currency:n.currency},l).then((e=>{if(null!==n&&void 0!==n&&n.id){var t,o,i;const r=(null===(t=x.selectedBranch)||void 0===t?void 0:t.id)||null;(0,Ui.trackOrderPlaced)(n.id,(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(i=o.order)||void 0===i?void 0:i.id)||null,x.deliveryType,p,r,{items:v,customerName:x.fullName})}})).catch((e=>console.error("Order creation failed:",e))),(0,Ei.JT)(g,u),c((0,Kt.sX)(l)),o(null)},variant:"primary",disabled:v,children:v?"Submitting...":"Submit Order"})]})]})}function kr(e){let{restaurant:t,showPopup:o,popupHandler:n=(()=>{})}=e;const{restaurantName:r}=(0,k.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:r,s=(0,A.d4)((e=>e.cart[l]||[])),d=(0,A.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[l])||void 0===o?void 0:o.activeLanguage)||"en"})),c=0===s.length;(0,i.useEffect)((()=>{const e=()=>{n(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);return(0,B.jsx)(Pi,{showPopup:o,children:c?(0,B.jsx)(Fi,{children:"en"===d?"Your cart is empty":"\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0641\u0627\u0631\u063a\u0629"}):(0,B.jsx)(Ar,{popupHandler:n,restaurant:t})})}const zr=n.Ay.div`
height: 100vh;
position: fixed;
width: 100%;
left: ${e=>e.showSidebar?"0":"-100%"};
top:0;
  transition:all  0.5s ease-in-out;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
z-index: 100;
`,Sr=n.Ay.div`
width: 100%;
height: 100%;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
`,Lr=n.Ay.div`
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
`,Tr=n.Ay.div`
width: 100%;
  height: 60%; /* 60% of the sidebar height */
  overflow-y: auto;
  margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,_r=n.Ay.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-start;
`,Ir=n.Ay.span`
    /* overflow: hidden;
    text-overflow: ellipsis; */
    margin-left:${e=>e.categoryType?"10%":"0%"};

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 13px;
    color: ${e=>e.theme.sidebartext};

`,Er=n.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10%;

`,Nr=n.Ay.img`
width:20px;
height:20px;
`,Pr=n.Ay.div`
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vh;
`,Fr=n.Ay.img`
max-width: 200px;
max-height: 200px;
margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,Dr=n.Ay.div`
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

`,Rr=n.Ay.input`
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

`,Ur=(0,n.Ay)(g.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};
color:${e=>e.theme.sidebarsearchText};

`,Or=(0,n.Ay)(ee.IMk)`
position: absolute;
left: 20px;
top: 20px;
color: ${e=>e.theme.sidebarsearch};
font-size: 27px;

`;function Mr(e){let{activeCategory:t,setactiveCategory:o,categories:n,showSidebar:r,setshowSidebar:a,setcarouselPosition:l}=e;const{restaurantName:s}=(0,k.g)(),[d,c]=(0,he.ok)(),p=window.location.hostname.split(".")[0],u="menugic"!==p&&"localhost"!==p&&"www"!==p?p:s,x=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[u]})),[h,g]=(0,i.useState)(""),m=null===n||void 0===n?void 0:n.filter((e=>"en"===(null===x||void 0===x?void 0:x.activeLanguage)?(e.en_category||"").toLowerCase().includes(h.toLowerCase()):(e.ar_category||"").toLowerCase().includes(h.toLowerCase())));return(0,B.jsxs)(zr,{showSidebar:r,children:[(0,B.jsx)(Sr,{onClick:()=>{a(!1)},showSidebar:r}),(0,B.jsxs)(Lr,{children:[(0,B.jsx)(Or,{}),(0,B.jsx)(Pr,{children:(0,B.jsx)(Fr,{showSidebar:r,src:x.logoURL&&`https://storage.googleapis.com/ecommerce-bucket-testing/${x.logoURL}`})}),(0,B.jsxs)(Dr,{showSidebar:r,children:[(0,B.jsx)(Ur,{activeLanguage:null===x||void 0===x?void 0:x.activeLanguage}),(0,B.jsx)(Rr,{type:"text",activeLanguage:null===x||void 0===x?void 0:x.activeLanguage,dir:"en"==(null===x||void 0===x?void 0:x.activeLanguage)?"ltr":"rtl",placeholder:"en"==(null===x||void 0===x?void 0:x.activeLanguage)?"Search Categories":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{g(e.target.value)},value:h})]}),(0,B.jsx)(Tr,{showSidebar:r,children:null===m||void 0===m?void 0:m.sort(((e,t)=>t.priority-e.priority)).map(((e,i)=>(0,B.jsxs)(_r,{onClick:()=>((e,t)=>{o(e),l(t),a(!1)})(e.id,i),children:["horizantal-withoutIcon"!=x.category_type&&(0,B.jsx)(Er,{activeCategory:t,categoryId:e.id,children:(0,B.jsx)(Nr,{src:e.image_url?(0,M.V)(e.image_url):e.isAllItems&&null!==x&&void 0!==x&&x.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${x.logoURL}`:e.isAllItems&&null!==x&&void 0!==x&&x.cover_url?`https://storage.googleapis.com/ecommerce-bucket-testing/${x.cover_url}`:""})}),(0,B.jsx)(Ir,{categoryType:"horizantal-withoutIcon"==x.category_type,activeCategory:t,categoryId:e.id,children:"en"==(null===x||void 0===x?void 0:x.activeLanguage)?e.en_category:e.ar_category})]},i)))})]})]})}var Br=o(72929),qr=o(58169);n.Ay.div`

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
  animation: ${(e,t,o)=>n.i7`
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
    /* animation: ${e=>{let{x:t,y:o,width:i}=e;return((e,t,o)=>n.i7`
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

`;const Wr=n.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,Hr=(n.i7`
 0% { 
    height:30vh;
    top:0px;
}

 100% { 
    height:70vh;
    top:80px;

    }
`,n.Ay.div`
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
`),Vr=n.Ay.div`
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
`,Xr=n.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position:relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
`,Yr=n.Ay.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  vertical-align: top;

`,Kr=n.Ay.div`
  height: 100%;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;

`,Jr=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Qr=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${Jr} 1s linear infinite; /* Apply animation */
`,Zr=n.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,Gr=n.Ay.img`
  height: 100%;
  object-fit: cover;
  border-radius: ${e=>e.$cardSlide?"0":e.CloseAnimation?"40px":"10px"};
  width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"90%":"100%"};
  display: ${e=>e.Loaded?"block":"none"};
  transition: all 0.8s;
  @media (min-width: 1024px) {
    width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"50%":"100%"};
  }
`,ea=n.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,ta=((0,n.Ay)(et.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,(0,n.Ay)(et.m6W)`
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
`),oa=(0,n.Ay)(et.OQo)`
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
`,ia=(n.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${ea} 0.8s ease-in-out;
`,n.Ay.div`
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
`,n.i7`
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
`),na=(n.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${ia} 1.8s ease-in-out;
`,n.Ay.div`
  width:90%;
  height: 45vh;
  margin-top: 80px;
  display: flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${Wr} 0.8s;
  @media (min-width: 1024px) {
    height: ${e=>e.CloseAnimation?"70vh":"30vh"};
    }
`,n.i7`
 0% { 
  margin-top: -20px;
  opacity: 0;
}
100% { 
  margin-top: 10px;
  opacity: 1;
}
`),ra=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,aa=n.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${na} 1.8s ease-in-out;

`,la=n.Ay.div`
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
`,sa=n.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:center;
  opacity: 1;
  margin-top: 5px;
`,da=n.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,ca=n.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,pa=n.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,ua=n.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,xa=n.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,ha=n.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,ga=n.Ay.div`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${ha} 0.7s ease-in-out;
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
`,ma=n.Ay.button`
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
`,fa=n.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,va=n.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,ya=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,ba=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,wa=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,ja=n.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,Ca=(n.Ay.div`
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
  animation: ${ja} 0.8s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,n.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`),$a=n.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,Aa=n.Ay.input`
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

`,ka=n.Ay.button`
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
`,za=n.Ay.div`
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
`,Sa=n.Ay.button`
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
`,La=n.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`;var Ta=o(88282);const _a=n.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display:flex;
`,Ia=n.Ay.div`
display: flex;
flex-direction: row;
`,Ea=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,Na=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,Pa=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,Fa=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,Da=n.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,Ra=n.Ay.span`
position: absolute;
left: 0;

`,Ua=n.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,Oa=(0,n.Ay)(r.Z0P)`
    animation:1.2s ${Ua}  linear infinite ;
    position: absolute;
`;function Ma(e){let{carouselIndex:t,images:o,CloseAnimation:i,carouselSwiped:n}=e;return(0,B.jsxs)(_a,{CloseAnimation:i,children:[(0,B.jsxs)(Ia,{children:[(0,B.jsx)(Ea,{carouselIndex:t,children:(0,B.jsx)(Na,{})}),o.map((e=>(0,B.jsx)(Pa,{children:(0,B.jsx)(Fa,{})})))]}),!n&&(0,B.jsxs)(Da,{children:[(0,B.jsx)(Ra,{children:"Swipe"}),(0,B.jsx)(Oa,{})]})]})}n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const Ba=n.Ay.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,qa=(n.Ay.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input[type="checkbox"] {
    margin-right: 8px;
    accent-color: ${e=>e.theme.mainColor}; /* Change this color to your desired checkbox color */
  }
`,n.Ay.select`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  color: ${e=>e.theme.backgroundColor};
  background-color: ${e=>e.theme.mainColor};
  &:active{
    outline: none;
    border: 0px;

  }
  `,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,n.Ay.label`
  display: flex;
  align-items: center;
  input[type="radio"] {
    margin-right: 8px;
    accent-color:${e=>e.theme.mainColor}; /* Change this color to your desired radio button color */
  }
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(ot().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`),Wa=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,Ha=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Va=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let t=e.theme.formColor;if(ot().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.3)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.3)`)):t}};
  font-size:10px;

`,Xa=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,Ya=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Ka(e){let{component:t,formData:o,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||[]);return(0,B.jsxs)(qa,{index:r,children:[(0,B.jsx)(Ba,{children:t.label}),t.values.map((e=>(0,B.jsxs)(Ha,{children:[s.some((t=>t===e.label))?(0,B.jsx)(Xa,{onClick:()=>{(e=>{let o=s.filter((t=>t!==e.label));d(o),n(t.key,o)})(e)},children:(0,B.jsx)(mo.RXm,{size:"15px"})}):(0,B.jsx)(Va,{onClick:()=>{(e=>{d([...s,e.label]),n(t.key,[...s,e.label])})(e)},children:(0,B.jsx)(go.OiG,{})}),(0,B.jsx)(Wa,{children:e.label})]}))),(c=a,c in l?(0,B.jsx)(Ya,{children:"This field is required"}):null)]});var c}const Ja=n.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};

  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(ot().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,Qa=n.Ay.div`
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
`,Za=n.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,Ga=n.Ay.ul`
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

`,el=n.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,tl=n.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,ol=n.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,il=n.Ay.div`
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
`,nl=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  margin-top: 20px;
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function rl(e){var t;let{component:o,formData:n,handleChange:r,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;const[c,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===(t=n[o.key])||void 0===t?void 0:t.value)||""),h=(0,i.useRef)(null),g=e=>{x(e.label),p(!1),r(o.key,e)},m=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,B.jsxs)(Ja,{ref:h,index:l,children:[(0,B.jsx)(Ba,{children:o.label}),o.data.values.length>8?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(Qa,{onClick:()=>p((e=>!e)),children:[u||a,(0,B.jsx)(Za,{className:c?"up":"",children:"\u25bc"})]}),(0,B.jsx)(Ga,{isOpen:c,children:o.data.values.map(((e,t)=>(0,B.jsx)(el,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},t)))})]}):(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(tl,{children:o.data.values.map(((e,t)=>(0,B.jsx)(ol,{children:(0,B.jsx)(il,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,B.jsx)(nl,{children:"This field is required"}):null)]});var f}const al=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(ot().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,ll=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,sl=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,dl=n.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,cl=n.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,pl=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function ul(e){let{component:t,formData:o,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||"");return(0,B.jsxs)(al,{index:r,children:[(0,B.jsx)(Ba,{children:t.label}),t.values.map((e=>(0,B.jsxs)(sl,{children:[(0,B.jsx)(dl,{onClick:()=>{(e=>{d(e),n(t.key,e)})(e)},children:(0,B.jsx)(cl,{selected:s.label==e.label})}),(0,B.jsx)(ll,{children:e.label})]}))),(c=a,c in l?(0,B.jsx)(pl,{children:"This field is required"}):null)]});var c}function xl(e){let{formSchema:t,onPriceChange:o,basePrice:n,formData:r,setFormData:a,formErrors:l}=e;(0,i.useEffect)((()=>{d(r)}),[r]);const s=(e,t)=>{a((o=>({...o,[e]:t})))},d=e=>{let i=parseFloat(n)||0,r=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const o=t.values.find((t=>t.label===e)),i=!isNaN(Number(o.value));o&&o.value&&i&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")&&(r-=parseFloat(o.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const o=t.data.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(o.value));o&&n&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?r-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}else if("radio"===t.type&&t.values){const o=t.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(o.value));o&&n&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?r-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}}));const a=i+r,l=a%1!==0?a.toFixed(2):a.toFixed(0);o(l)};return(0,B.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return(0,B.jsx)(Ka,{component:e,formData:r,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"select":return(0,B.jsx)(rl,{component:e,formData:r,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"radio":return(0,B.jsx)(ul,{component:e,formData:r,handleChange:s,index:t,componentKey:e.key,formErrors:l});default:return null}})(e,t)))})}const hl=(0,i.createContext)({menuMode:null,setMenuMode:()=>{}}),gl=()=>(0,i.useContext)(hl),ml=hl;function fl(e){var t,o,n;let{productId:l,setSearchParams:s,searchParams:d}=e;const{menuMode:c}=gl(),{restaurantName:p}=(0,k.g)(),u=window.location.hostname.split(".")[0],x="menugic"!==u&&"localhost"!==u&&"www"!==u?u:p,h=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]}));let g=null;const{response:m,isLoading:f}=(0,Ta.VL)({productId:l,onSuccess:()=>{}}),{response:v}=(0,Ro.$)({productId:l});var y;((0,i.useEffect)((()=>{if(null!==m&&void 0!==m&&m.en_price&&!f){var e;const n=Ke(m,c);var t;if(K(n),Q(n),0===parseFloat(null===m||void 0===m||null===(e=m.category)||void 0===e?void 0:e.discount))te(parseFloat(null===m||void 0===m?void 0:m.discount)||0);else te(parseFloat(null===m||void 0===m||null===(t=m.category)||void 0===t?void 0:t.discount)||0);if(null!==h&&void 0!==h&&h.id&&null!==m&&void 0!==m&&m.id){var o,i;const e=(null===h||void 0===h||null===(o=h.branches)||void 0===o||null===(i=o[0])||void 0===i?void 0:i.id)||null;(0,Ui.trackItemView)(h.id,m.id,m.category_id,e,{name:m.en_name,price:parseFloat(m.en_price)||0})}}}),[f]),ot().isEmpty(null===m||void 0===m?void 0:m.form_json))||(g=ot().isEmpty(JSON.parse(null===m||void 0===m?void 0:m.form_json))?null===m||void 0===m||null===(y=m.category)||void 0===y?void 0:y.form_json:null===m||void 0===m?void 0:m.form_json);const[b,w]=(0,i.useState)({});(0,i.useEffect)((()=>{if(!ot().isEmpty(g)){var e;const t=JSON.parse(g);if(w(t),2===(null===t||void 0===t?void 0:t.version)&&(null===t||void 0===t||null===(e=t.sizes)||void 0===e?void 0:e.length)>0){const e=parseFloat(null===m||void 0===m?void 0:m.en_price)||0,o=t.sizes.find((t=>"absolute"===t.priceMode&&Number(t.priceModifier)===e));C((()=>({...(0,Do.KE)(),sizeId:o?o.id:t.sizes[0].id})))}}}),[g]);const[j,C]=(0,i.useState)({}),[$,S]=(0,i.useState)({}),L=(0,A.wA)(),[T,_]=(0,i.useState)(1),[I,E]=(0,i.useState)(!1),N=(0,i.useRef)(null),[P,F]=(0,i.useState)(!1),[D,R]=(0,i.useState)(1),[U,O]=(0,i.useState)({x:0,y:0}),[q,W]=(0,i.useState)(!1),H=(0,i.useRef)(null),V=(0,i.useRef)(null),X=(0,i.useRef)(0),[Y,K]=(0,i.useState)(parseFloat(null===m||void 0===m?void 0:m.en_price)||0),[J,Q]=(0,i.useState)(parseFloat(null===m||void 0===m?void 0:m.en_price)||0),[Z,G]=(0,i.useState)(""),[ee,te]=(0,i.useState)(0),oe=Boolean(null===m||void 0===m?void 0:m.out_of_stock)||1===Number(null===m||void 0===m?void 0:m.out_of_stock),ie=e=>{Q(parseFloat(e)||0)},[ne,re]=(0,i.useState)(!0),[ae,le]=(0,i.useState)(0),se=()=>{re(!1),le(0),setTimeout((()=>{const e=new URLSearchParams(d);e.delete("productId"),s(e),document.body.style.overflow="auto"}),800)},[de,ce]=(0,i.useState)(!1),pe=()=>{E(!0),le(ae+1)},ue=()=>{E(!0),le(ae-1)},xe=(0,i.useRef)(null),[he,ge]=(0,i.useState)(null),me=null!==h&&void 0!==h&&h.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${h.logoURL}`:null,fe=()=>{R(1),O({x:0,y:0}),F(!0)};(0,i.useEffect)((()=>{const e=()=>{se()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const ve=2===(null===b||void 0===b?void 0:b.version)&&Array.isArray(null===b||void 0===b?void 0:b.sizes);let ye=[...null!==(t=null===m||void 0===m?void 0:m.images)&&void 0!==t?t:[]];const be=ye.findIndex((e=>e.id===m.new_cover_id));if(be>0){const[e]=ye.splice(be,1);ye.unshift(e)}const[we,je]=(0,i.useState)({}),Ce=e=>{je((t=>({...t,[e]:!0})))},$e="en"===(null===h||void 0===h?void 0:h.activeLanguage)?null===m||void 0===m?void 0:m.en_description:null===m||void 0===m?void 0:m.ar_description,Ae=(0,Ze.Q)(null===h||void 0===h?void 0:h.currency),ke=(null===h||void 0===h?void 0:h.product_details_carousel_style)||"normal";return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Br.z,{CloseAnimation:ne,onClick:se}),(0,B.jsx)(Br.Z,{CloseAnimation:ne,$premiumMobile:!f,children:!f&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(qr.Tn,{CloseAnimation:ne,children:[(0,B.jsx)(qr.k8,{onClick:se,CloseAnimation:ne,type:"button",children:(0,B.jsx)(qr.Z3,{})}),(0,B.jsx)(qr.N0,{activeLanguage:null===h||void 0===h?void 0:h.activeLanguage,children:"en"==h.activeLanguage?null===m||void 0===m||null===(o=m.category)||void 0===o?void 0:o.en_category:null===m||void 0===m||null===(n=m.category)||void 0===n?void 0:n.ar_category}),(0,B.jsx)(qr.i8,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),ce(!0),setTimeout((()=>{ce(!1)}),4e3)},CloseAnimation:ne,children:de?(0,B.jsx)(mo.RXm,{}):(0,B.jsx)(r.zU_,{})})]}),(0,B.jsx)(Hr,{squareDimension:null===m||void 0===m?void 0:m.square_dimension,CloseAnimation:ne,isNormalCarousel:"normal"===ke,children:1===ye.length?(0,B.jsx)(Xr,{carouselIndex:0,children:(0,B.jsx)(Yr,{children:(0,B.jsxs)(Kr,{children:[!we[0]&&(0,B.jsx)(Zr,{children:(0,B.jsx)(Qr,{})}),(0,B.jsx)(Gr,{src:ye[0].url?(0,M.V)(ye[0].url):me||"",onLoad:()=>Ce(0),onError:e=>{me&&e.target.src!==me&&(e.target.src=me)},CloseAnimation:ne,Loaded:we[0],alt:"Image 0"}),(0,B.jsx)(ka,{onClick:fe,children:(0,B.jsx)(z.gff,{})})]})})}):"normal"===ke?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(ta,{CloseAnimation:ne,onClick:()=>{E(!0),0!==ae&&ue()}}),(0,B.jsx)(oa,{CloseAnimation:ne,onClick:()=>{E(!0),ye.length>ae+1&&pe()}}),(0,B.jsx)(Xr,{carouselIndex:ae,ref:xe,onTouchStart:e=>{ge(e.touches[0].clientX)},onTouchMove:e=>{if(he){const t=e.touches[0].clientX-he;t>5?0!==ae&&ue():t<-5&&m.images.length>ae+1&&pe(),ge(null)}},children:ye.map(((e,t)=>(0,B.jsx)(Yr,{children:(0,B.jsxs)(Kr,{children:[!we[t]&&(0,B.jsx)(Zr,{children:(0,B.jsx)(Qr,{})}),(0,B.jsx)(Gr,{src:we[t]||t===ae?null!==e&&void 0!==e&&e.url?(0,M.V)(e.url):me||"":"",onLoad:()=>Ce(t),onError:e=>{me&&e.target.src!==me&&(e.target.src=me)},CloseAnimation:ne,Loaded:we[t],alt:`Image ${t}`}),ae===t&&(0,B.jsx)(ka,{onClick:fe,children:(0,B.jsx)(z.gff,{})})]})},e.id||t)))})]}):"effect-cards"===ke?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(ta,{CloseAnimation:ne,onClick:()=>N.current&&N.current.slidePrev()}),(0,B.jsx)(Vr,{children:(0,B.jsx)(Uo.RC,{modules:[Oo.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{N.current=e},onSlideChange:e=>{le(e.realIndex),E(!0)},children:ye.map(((e,t)=>(0,B.jsx)(Uo.qr,{children:(0,B.jsxs)(Kr,{children:[!we[t]&&(0,B.jsx)(Zr,{children:(0,B.jsx)(Qr,{})}),(0,B.jsx)(Gr,{src:we[t]||t===ae?null!==e&&void 0!==e&&e.url?(0,M.V)(e.url):me||"":"",onLoad:()=>Ce(t),onError:e=>{me&&e.target.src!==me&&(e.target.src=me)},CloseAnimation:ne,Loaded:we[t],$cardSlide:!0,alt:`Image ${t}`}),ae===t&&(0,B.jsx)(ka,{onClick:fe,children:(0,B.jsx)(z.gff,{})})]})},e.id||t)))},null===m||void 0===m?void 0:m.id)}),(0,B.jsx)(oa,{CloseAnimation:ne,onClick:()=>N.current&&N.current.slideNext()})]}):(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(Vr,{children:(0,B.jsx)(Uo.RC,{onSwiper:e=>{N.current=e},onSlideChange:e=>{le(e.realIndex),E(!0)},modules:[Oo.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:ye.map(((e,t)=>(0,B.jsx)(Uo.qr,{children:(0,B.jsxs)(Kr,{children:[!we[t]&&(0,B.jsx)(Zr,{children:(0,B.jsx)(Qr,{})}),(0,B.jsx)(Gr,{src:we[t]||t===ae?null!==e&&void 0!==e&&e.url?(0,M.V)(e.url):me||"":"",onLoad:()=>Ce(t),onError:e=>{me&&e.target.src!==me&&(e.target.src=me)},CloseAnimation:ne,Loaded:we[t],$cardSlide:!0,alt:`Image ${t}`}),ae===t&&(0,B.jsx)(ka,{onClick:fe,children:(0,B.jsx)(z.gff,{})})]})},e.id||t)))},null===m||void 0===m?void 0:m.id)})})}),1!==ye.length&&"normal"!==ke&&(0,B.jsx)(Ma,{images:ye,carouselIndex:ae,CloseAnimation:ne,carouselSwiped:I}),(0,B.jsx)(ra,{children:(0,B.jsx)(aa,{children:(0,B.jsxs)(la,{CloseAnimation:ne,activeLanguage:h.activeLanguage,children:[(0,B.jsx)(sa,{activeLanguage:h.activeLanguage,children:"en"==h.activeLanguage?null===m||void 0===m?void 0:m.en_name:null===m||void 0===m?void 0:m.ar_name}),!ot().isEmpty(null===m||void 0===m?void 0:m.en_price)&&(0,B.jsxs)(pa,{children:[(0,B.jsx)(ua,{activeLanguage:h.activeLanguage,discounted:0!=ee,children:(0,Ye.T)(J,Ae)}),0!=ee&&(0,B.jsx)(xa,{activeLanguage:h.activeLanguage,children:(0,Ye.T)(J*(1-parseFloat(ee)/100),Ae)})]}),(0,B.jsx)(da,{activeLanguage:h.activeLanguage,dangerouslySetInnerHTML:{__html:$e}}),oe&&(0,B.jsx)(ca,{children:"en"===h.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),ve&&(0,B.jsx)(Fo.A,{options:b,formData:j,setFormData:C,formErrors:$,activeLanguage:h.activeLanguage,basePrice:String(Ke(m,c)),onPriceChange:ie}),!ve&&(null===b||void 0===b?void 0:b.components)&&(0,B.jsx)(xl,{formSchema:b,onPriceChange:ie,formData:j,setFormData:C,basePrice:String(Ke(m,c)),formErrors:$}),(0,B.jsxs)(Ca,{activeLanguage:h.activeLanguage,children:[(0,B.jsx)($a,{children:"en"==h.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,B.jsx)(Aa,{activeLanguage:h.activeLanguage,onChange:e=>G(e.target.value),placeholder:"en"==h.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),!oe&&(0,B.jsxs)(ga,{CloseAnimation:ne,children:[(0,B.jsxs)(va,{CloseAnimation:ne,children:[(0,B.jsx)(ya,{onClick:()=>{_(T+1)},children:"+"}),(0,B.jsx)(wa,{children:T}),(0,B.jsx)(ba,{onClick:()=>{T>1&&_(T-1)},children:"-"})]}),(0,B.jsxs)(ma,{onClick:()=>{if(ve){var e;const t={};if((null===(e=b.sizes)||void 0===e?void 0:e.length)>0&&(null===j||void 0===j||!j.sizeId)&&(t.size="Please select a size."),Object.keys(t).length>0)return void S(t)}else if("{}"!==JSON.stringify(b)){const e=function(e,t){const o={},i=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in t&&0!==(null===(i=t[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(t[e])||(o[e]="This field is required.")})),o}(b,j);if(Object.keys(e).length>0)return void S(e)}let t=J*(1-parseFloat(ee)/100);if(setTimeout((()=>{const e=new URLSearchParams(d);e.delete("productId"),s(e),document.body.style.overflow="auto"}),800),null!==h&&void 0!==h&&h.id&&null!==m&&void 0!==m&&m.id){var o,i;const e=(null===h||void 0===h||null===(o=h.branches)||void 0===o||null===(i=o[0])||void 0===i?void 0:i.id)||null;(0,Ui.trackAddToCart)(h.id,m.id,m.category_id,T,e,{name:m.en_name,price:t})}L((0,Kt.bE)(x,m,T,j,t,Z,c)),re(!1),_(1)},children:["en"==h.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",(0,B.jsx)(fa,{children:(0,Ye.T)(T*(J*(1-parseFloat(ee)/100)),Ae)})]})]})]})}),P&&(0,B.jsxs)(za,{onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY;V.current=Math.hypot(t,o)}else if(1===e.touches.length){const t=Date.now();t-X.current<300&&(R((e=>e>1?1:2.5)),O({x:0,y:0})),X.current=t,H.current={x:e.touches[0].clientX,y:e.touches[0].clientY},W(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(t,o);if(V.current){const e=i/V.current;R((t=>Math.min(Math.max(t*e,1),5)))}V.current=i}else if(1===e.touches.length&&q&&D>1){const t=e.touches[0].clientX-H.current.x,o=e.touches[0].clientY-H.current.y;O((e=>({x:e.x+t,y:e.y+o}))),H.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{V.current=null,W(!1)},children:[(0,B.jsx)(Sa,{onClick:()=>F(!1),children:(0,B.jsx)(a.$8F,{})}),(0,B.jsx)(La,{src:(()=>{const e=ye[ae];return e?e.url?(0,M.V)(e.url):me||"":""})(),style:{transform:`scale(${D}) translate(${U.x/D}px, ${U.y/D}px)`},alt:"Zoom"})]})]})}const vl=n.Ay.div`
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
`,yl=n.Ay.div`
width: 80%;
display: flex;
flex-direction: column;
padding-top:40px;
`,bl=n.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,wl=(n.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,(0,n.Ay)(z.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`),jl=(0,n.Ay)(et.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`,Cl=n.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor}

`,$l=n.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor};
margin-top: 20px;
`,Al=n.Ay.div`
display: flex;
flex-direction: row;
gap:15px;
margin-top: 20px;


`,kl=n.Ay.div`
display: flex;
flex-direction: column;
gap:5px;
align-items: center;
justify-content: center;

`,zl=n.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #8bffb83d;
`,Sl=(0,n.Ay)(r.EcP)`
font-size: 24px;
color:#51C288;
`,Ll=n.Ay.div`
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

background-size: 300% 300%; /* Creates a smooth animated effect */`,Tl=(0,n.Ay)(r.ao$)`
font-size: 24px;
/* color:#51C288; */
color:#5c595b;



`,_l=n.Ay.span`
font-size: 10px;
color:${e=>e.theme.popupTextColor}

`,Il=n.Ay.div`
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

`,El=n.Ay.div`
width: 85%;
overflow: hidden;

`,Nl=n.Ay.span`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
white-space: nowrap;
`,Pl=(0,n.Ay)(r.zU_)`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`,Fl=(0,n.Ay)(mo.RXm)`
font-size: 18px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`;function Dl(e){let{showPopup:t,popupHandler:o,activeCategory:n}=e;const{restaurantName:r}=(0,k.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:r;(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[l].activeLanguage}));(0,i.useEffect)((()=>{const e=()=>{o(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const[s,d]=(0,i.useState)(!1);return(0,B.jsxs)(vl,{showPopup:t,children:[(0,B.jsx)(jl,{onClick:()=>{o(null)}}),(0,B.jsxs)(yl,{children:[(0,B.jsx)(Cl,{children:"Share Category"}),(0,B.jsxs)(Al,{children:[(0,B.jsxs)(kl,{children:[(0,B.jsx)(zl,{onClick:()=>(e=>{const t=window.location.origin+window.location.pathname,o=`https://api.whatsapp.com/send?text=${encodeURIComponent(t+"?categoryId="+e)}`;window.open(o,"_blank")})(n),children:(0,B.jsx)(Sl,{})}),(0,B.jsx)(_l,{children:"Whatsapp"})]}),(0,B.jsxs)(kl,{children:[(0,B.jsx)(Ll,{onClick:()=>{window.open("https://www.instagram.com/direct/inbox/","_blank")},children:(0,B.jsx)(Tl,{})}),(0,B.jsx)(_l,{children:"Instagram"})]})]}),(0,B.jsx)($l,{children:"Get Link"}),(0,B.jsxs)(Il,{children:[(0,B.jsx)(El,{children:(0,B.jsx)(Nl,{children:(e=>{if(e){return window.location.origin+window.location.pathname+"?categoryId="+e}})(n)})}),s?(0,B.jsx)(Fl,{}):(0,B.jsx)(Pl,{onClick:()=>(e=>{const t=window.location.origin+window.location.pathname;navigator.clipboard.writeText(t+"?categoryId="+e),d(!0),setTimeout((()=>{d(!1)}),4e3)})(n)})]})]}),(0,B.jsxs)(bl,{children:["Copyright",(0,B.jsx)(wl,{}),"2024 ",(0,B.jsx)(he.N_,{href:"https://www.menugic.com",children:"menugic.com"})]})]})}var Rl=o(31088),Ul=o(5677),Ol=o(38495);const Ml=n.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,Bl=n.Ay.div`
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
  animation: ${Ml} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,ql=n.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,Wl=n.Ay.div`
  display: flex;
  gap: 10px;
`,Hl=n.Ay.button`
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
`,Vl=n.Ay.button`
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

`,Xl=e=>{let{onInstall:t,onDismiss:o,restaurantName:i,showInstallPopup:n}=e;return(0,B.jsxs)(Bl,{showInstallPopup:n,children:[(0,B.jsxs)(ql,{children:["Access ",(0,B.jsx)("b",{children:i})," anytime with one tap ",(0,B.jsx)("b",{children:"Install The App!"})]}),(0,B.jsxs)(Wl,{children:[(0,B.jsx)(Hl,{onClick:t,children:"Install"}),(0,B.jsx)(Vl,{onClick:o,children:"Dismiss"})]})]})},Yl=n.i7`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Kl=n.i7`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
`,Jl=n.i7`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,Ql=n.Ay.div`
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
    animation: ${Kl} 6s ease-in-out infinite;
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
`,Zl=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  max-width: 440px;
  width: 100%;
  z-index: 1;
`,Gl=n.Ay.div`
  animation: ${Yl} 0.7s ease-out;
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
`,es=n.Ay.img`
  width: 110px;
  height: 110px;
  border-radius: 28px;
  object-fit: cover;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.12);
`,ts=n.Ay.h1`
  color: #ffffff;
  font-size: 26px;
  font-weight: 800;
  text-align: center;
  margin: 0;
  animation: ${Yl} 0.7s ease-out 0.12s both;
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
    animation: ${Jl} 4s linear infinite;
  }
`,os=n.Ay.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  text-align: center;
  margin: -8px 0 0;
  animation: ${Yl} 0.7s ease-out 0.2s both;
  font-weight: 400;
  letter-spacing: 0.2px;
`,is=n.Ay.div`
  width: 48px;
  height: 3px;
  border-radius: 2px;
  background: ${e=>{let{theme:t}=e;return`linear-gradient(90deg, transparent, ${t.mainColor||"#4a90d9"}, transparent)`}};
  animation: ${Yl} 0.7s ease-out 0.25s both;
`,ns=n.Ay.div`
  display: flex;
  gap: 14px;
  width: 100%;
  animation: ${Yl} 0.7s ease-out 0.32s both;

  @media (max-width: 380px) {
    flex-direction: column;
    gap: 12px;
  }
`,rs=n.Ay.button`
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
`,as=n.Ay.div`
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

  ${rs}:hover & {
    transform: scale(1.1);
  }
`,ls=n.Ay.span`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.3px;
`,ss=n.Ay.span`
  font-size: 12.5px;
  opacity: 0.55;
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
`,ds=n.Ay.button`
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
  animation: ${Yl} 0.7s ease-out 0.4s both;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
  }
`,cs=n.Ay.div`
  position: absolute;
  bottom: 20px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.25);
  font-weight: 400;
  z-index: 1;
  animation: ${Yl} 0.7s ease-out 0.5s both;
  letter-spacing: 0.5px;

  a {
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`,ps={en:{welcome:"Welcome to",choose:"How would you like to enjoy your meal?",dineInTitle:"Dine In",dineInSub:"Browse our in-house menu",deliveryTitle:"Delivery",deliverySub:"Order to your doorstep",langSwitch:"\u0639\u0631\u0628\u064a"},ar:{welcome:"\u0623\u0647\u0644\u0627\u064b \u0628\u0643 \u0641\u064a",choose:"\u0643\u064a\u0641 \u062a\u062d\u0628 \u0623\u0646 \u062a\u0633\u062a\u0645\u062a\u0639 \u0628\u0648\u062c\u0628\u062a\u0643\u061f",dineInTitle:"\u062a\u0646\u0627\u0648\u0644 \u0641\u064a \u0627\u0644\u0645\u0637\u0639\u0645",dineInSub:"\u062a\u0635\u0641\u062d \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0639\u0627\u0645 \u0641\u064a \u0627\u0644\u0645\u0637\u0639\u0645",deliveryTitle:"\u062a\u0648\u0635\u064a\u0644",deliverySub:"\u0627\u0637\u0644\u0628 \u0625\u0644\u0649 \u0628\u0627\u0628 \u0645\u0646\u0632\u0644\u0643",langSwitch:"EN"}};function us(e){let{restaurant:t,restaurantName:o,activeLanguage:i,onSelect:n}=e;const r=(0,A.wA)(),a="ar"===i?"ar":"en",l=ps[a],s=null!==t&&void 0!==t&&t.logoURL?t.logoURL.startsWith("http")?t.logoURL:`https://storage.googleapis.com/ecommerce-bucket-testing/${t.logoURL}`:null,d="ar"===a&&null!==t&&void 0!==t&&t.ar_name?t.ar_name:(null===t||void 0===t?void 0:t.name)||o,c="en&ar"===(null===t||void 0===t?void 0:t.languages)||"en&ar"===(null===t||void 0===t?void 0:t.default_language);return(0,B.jsxs)(Ql,{children:[c&&(0,B.jsx)(ds,{onClick:()=>{const e="en"===a?"ar":"en";r((0,ce.y)({restaurantName:o,language:e})),document.documentElement.dir="ar"===e?"rtl":"ltr"},children:l.langSwitch}),(0,B.jsxs)(Zl,{children:[s&&(0,B.jsx)(Gl,{children:(0,B.jsx)(es,{src:s,alt:d})}),(0,B.jsxs)(ts,{children:[l.welcome,(0,B.jsx)("span",{children:d})]}),(0,B.jsx)(os,{children:l.choose}),(0,B.jsx)(is,{}),(0,B.jsxs)(ns,{children:[(0,B.jsxs)(rs,{onClick:()=>n("dine_in"),$accent:"#10b981",children:[(0,B.jsx)(as,{$accent:"#10b981",children:(0,B.jsx)(z.NtI,{})}),(0,B.jsx)(ls,{children:l.dineInTitle}),(0,B.jsx)(ss,{children:l.dineInSub})]}),(0,B.jsxs)(rs,{onClick:()=>n("delivery"),$accent:"#3b82f6",children:[(0,B.jsx)(as,{$accent:"#3b82f6",children:(0,B.jsx)(z.Xpo,{})}),(0,B.jsx)(ls,{children:l.deliveryTitle}),(0,B.jsx)(ss,{children:l.deliverySub})]})]})]}),(0,B.jsxs)(cs,{children:["Powered by ",(0,B.jsx)("a",{href:"https://menugic.com",target:"_blank",rel:"noopener noreferrer",children:"Menugic"})]})]})}function xs(){var e,t,o,n;const[r,a]=(0,he.ok)(),g=r.get("productId"),m=r.get("categoryId"),{restaurantName:f}=(0,k.g)(),v=window.location.hostname.split(".")[0],y="menugic"!==v&&"localhost"!==v&&"www"!==v?v:f,b=(0,A.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[y]})),w=(0,A.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[y])||void 0===o?void 0:o.activeLanguage)||"en"})),j=!(!g&&!m),[C,$]=(0,i.useState)((()=>j?"dine_in":null)),z=e=>{$(e)},[S,L]=(0,i.useState)(null),[T,_]=(0,i.useState)(""),[I,E]=(0,i.useState)(null),[N,P]=(0,i.useState)(null),[F,D]=(0,i.useState)(!0),R=(2===Number(null===b||void 0===b?void 0:b.template_id)||5===Number(null===b||void 0===b?void 0:b.template_id))&&(!0===(null===b||void 0===b?void 0:b.show_all_items_category)||1===(null===b||void 0===b?void 0:b.show_all_items_category)||"1"===(null===b||void 0===b?void 0:b.show_all_items_category)),U={id:"all-items",en_category:"All Items",ar_category:"\u0643\u0644 \u0627\u0644\u0623\u0635\u0646\u0627\u0641",isAllItems:!0,priority:999999,image_url:(null===b||void 0===b?void 0:b.logoURL)||(null===b||void 0===b?void 0:b.cover_url)||null},O=[...(null===b||void 0===b?void 0:b.categories)||[]].sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))),M=R?[U,...O]:O,[q,W]=(0,i.useState)(m?M.findIndex((e=>e.id==m)):0),H=(0,A.d4)((e=>(e.cart[y]||[]).reduce(((e,t)=>e+t.quantity),0))),[V,X]=(0,i.useState)(m||(null===M||void 0===M||null===(e=M[0])||void 0===e?void 0:e.id)),Y=(0,i.useCallback)((e=>{X(e);const t=new URLSearchParams(r);"all-items"===e?t.delete("categoryId"):t.set("categoryId",e),a(t)}),[r,a]),K=e=>{document.body.style.overflow=null==e?"auto":"hidden",L(e)};(0,i.useEffect)((()=>{if(null!==b&&void 0!==b&&b.id){var e,t;const o=(null===b||void 0===b||null===(e=b.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,Ui.trackVisit)(b.id,o),(0,Ui.trackPageView)(b.id,o)}}),[null===b||void 0===b?void 0:b.id]),(0,i.useEffect)((()=>{const e=e=>{e.preventDefault(),P(e),D(!0)};return window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",(e=>{console.log("\ud83c\udf89 Application installed successfully!")})),()=>{window.removeEventListener("beforeinstallprompt",e)}}),[]);let J={};try{J=JSON.parse((null===b||void 0===b?void 0:b.features)||"{}")}catch(G){J={}}const Q=(null===b||void 0===b?void 0:b.sliderImages)||[],Z=(!0===(null===b||void 0===b?void 0:b.show_slider_image)||1===(null===b||void 0===b?void 0:b.show_slider_image)||"1"===(null===b||void 0===b?void 0:b.show_slider_image))&&Q.length>0;return C?(0,B.jsx)(ml.Provider,{value:{menuMode:C,setMenuMode:z},children:(0,B.jsxs)(l,{id:"wrapper",children:[(0,B.jsxs)(s,{onClick:()=>{null!=S&&K(null)},children:[(0,B.jsx)(d,{showPopup:S}),(0,B.jsx)(xe,{categories:M,activeCategory:V,setactiveCategory:Y,setSearchText:_,searchText:T,setshowSidebar:E,showSidebar:I,carouselPosition:q,setcarouselPosition:W,popupHandler:K,showMenuSlider:Z,sliderImages:Q,menuMode:C,onModeChange:z}),(0,B.jsx)(Xo,{menu:b.categories,activeCategory:V,showPopup:S,searchText:T,setactiveCategory:Y,setcarouselPosition:W,carouselPosition:q,categories:M,menuMode:C})]}),(0,B.jsx)(c,{onClick:()=>{window.history.pushState({},""),K("location")},children:(0,B.jsx)(x,{})}),(null===(t=J)||void 0===t?void 0:t.cart)&&(0,B.jsxs)(p,{onClick:()=>{window.history.pushState({},""),K("cart")},children:[(0,B.jsx)(u,{children:H}),(0,B.jsx)(h,{})]}),(0,B.jsx)(Ni,{restaurant:b,showPopup:S,popupHandler:K}),(null===(o=J)||void 0===o?void 0:o.cart)&&(0,B.jsx)(kr,{restaurant:b,showPopup:S,popupHandler:K}),(0,B.jsx)(Dl,{showPopup:S,popupHandler:K,activeCategory:V}),(0,B.jsx)(Rl.A,{restaurant:b,showPopup:S,popupHandler:K}),(0,B.jsx)(Ul.A,{restaurant:b,showPopup:S,popupHandler:K}),(0,B.jsx)(Ol.A,{restaurant:b,showPopup:S,popupHandler:K}),(0,B.jsx)(Mr,{categories:M,activeCategory:V,setactiveCategory:Y,setshowSidebar:E,showSidebar:I,setcarouselPosition:W}),g&&(0,B.jsx)(fl,{productId:g,searchParams:r,setSearchParams:a}),(null===(n=J)||void 0===n?void 0:n.install_app)&&(0,B.jsx)(Xl,{showInstallPopup:F,onInstall:async()=>{if(!N)return;N.prompt();"accepted"===(await N.userChoice).outcome?console.log("User accepted the install"):console.log("User dismissed the install"),P(null),D(!1)},restaurantName:y,onDismiss:()=>D(!1)})]})}):(0,B.jsx)(us,{restaurant:b,restaurantName:y,activeLanguage:w,onSelect:z})}},72929:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s,z:()=>l});var i=o(41190);const n=i.i7`
  0% {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
`,r=i.i7`
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
  animation: ${e=>e.CloseAnimation?n:"none"}
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

  animation: ${e=>e.CloseAnimation?r:a}
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
`},20965:(e,t,o)=>{"use strict";o(42564).default},34848:e=>{"use strict";function t(e,t){if("function"!==typeof e)throw new TypeError("argument fn must be a function");return e}function o(e,t,o){if(!e||"object"!==typeof e&&"function"!==typeof e)throw new TypeError("argument obj must be object");var i=Object.getOwnPropertyDescriptor(e,t);if(!i)throw new TypeError("must call property on owner object");if(!i.configurable)throw new TypeError("property must be configurable")}e.exports=function(e){if(!e)throw new TypeError("argument namespace is required");function i(e){}return i._file=void 0,i._ignored=!0,i._namespace=e,i._traced=!1,i._warned=Object.create(null),i.function=t,i.property=o,i}},26340:(e,t,o)=>{"use strict";var i,n=o(34848)("http-errors"),r=o(40203),a=o(53910),l=o(61033),s=o(51798);function d(e){return Number(String(e).charAt(0)+"00")}function c(e,t){var o=Object.getOwnPropertyDescriptor(e,"name");o&&o.configurable&&(o.value=t,Object.defineProperty(e,"name",o))}function p(e){return"Error"!==e.substr(-5)?e+"Error":e}e.exports=function e(){for(var t,o,i=500,r={},l=0;l<arguments.length;l++){var s=arguments[l],c=typeof s;if("object"===c&&s instanceof Error)i=(t=s).status||t.statusCode||i;else if("number"===c&&0===l)i=s;else if("string"===c)o=s;else{if("object"!==c)throw new TypeError("argument #"+(l+1)+" unsupported type "+c);r=s}}"number"===typeof i&&(i<400||i>=600)&&n("non-error status code; use only 4xx or 5xx status codes");("number"!==typeof i||!a.message[i]&&(i<400||i>=600))&&(i=500);var p=e[i]||e[d(i)];t||(t=p?new p(o):new Error(o||a.message[i]),Error.captureStackTrace(t,e));p&&t instanceof p&&t.status===i||(t.expose=i<500,t.status=t.statusCode=i);for(var u in r)"status"!==u&&"statusCode"!==u&&(t[u]=r[u]);return t},e.exports.HttpError=function(){function e(){throw new TypeError("cannot construct abstract class")}return l(e,Error),e}(),e.exports.isHttpError=(i=e.exports.HttpError,function(e){return!(!e||"object"!==typeof e)&&(e instanceof i||e instanceof Error&&"boolean"===typeof e.expose&&"number"===typeof e.statusCode&&e.status===e.statusCode)}),function(e,t,o){t.forEach((function(t){var i,n=s(a.message[t]);switch(d(t)){case 400:i=function(e,t,o){var i=p(t);function n(e){var t=null!=e?e:a.message[o],l=new Error(t);return Error.captureStackTrace(l,n),r(l,n.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:t,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(n,e),c(n,i),n.prototype.status=o,n.prototype.statusCode=o,n.prototype.expose=!0,n}(o,n,t);break;case 500:i=function(e,t,o){var i=p(t);function n(e){var t=null!=e?e:a.message[o],l=new Error(t);return Error.captureStackTrace(l,n),r(l,n.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:t,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(n,e),c(n,i),n.prototype.status=o,n.prototype.statusCode=o,n.prototype.expose=!1,n}(o,n,t)}i&&(e[t]=i,e[n]=i)}))}(e.exports,a.codes,e.exports.HttpError)},61033:e=>{"function"===typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var o=function(){};o.prototype=t.prototype,e.prototype=new o,e.prototype.constructor=e}}},29477:(e,t,o)=>{"use strict";var i=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof o.g)return o.g;throw new Error("unable to locate global object")}();e.exports=t=i.fetch,i.fetch&&(t.default=i.fetch.bind(i)),t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response},40203:e=>{"use strict";e.exports=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){return e.__proto__=t,e}:function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(e,o)||(e[o]=t[o]);return e})},53910:(e,t,o)=>{"use strict";var i=o(17662);function n(e){if(!Object.prototype.hasOwnProperty.call(r.message,e))throw new Error("invalid status code: "+e);return r.message[e]}function r(e){if("number"===typeof e)return n(e);if("string"!==typeof e)throw new TypeError("code must be a number or string");var t=parseInt(e,10);return isNaN(t)?function(e){var t=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(r.code,t))throw new Error('invalid status message: "'+e+'"');return r.code[t]}(e):n(t)}e.exports=r,r.message=i,r.code=function(e){var t={};return Object.keys(e).forEach((function(o){var i=e[o],n=Number(o);t[i.toLowerCase()]=n})),t}(i),r.codes=function(e){return Object.keys(e).map((function(e){return Number(e)}))}(i),r.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},r.empty={204:!0,205:!0,304:!0},r.retry={502:!0,503:!0,504:!0}},51798:e=>{"use strict";e.exports=function(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join("").replace(/[^ _0-9a-z]/gi,"")}},42564:(e,t,o)=>{"use strict";o(29477),o(26340)},17662:e=>{"use strict";e.exports=JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a Teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Too Early","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')}}]);
//# sourceMappingURL=384.9d484644.chunk.js.map