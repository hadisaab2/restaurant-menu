/*! For license information please see 5911.77b3bfff.chunk.js.LICENSE.txt */
(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[5911],{92733:(e,o,t)=>{"use strict";t.d(o,{A:()=>c});t(82483);var i=t(76279),n=t(41190);const r=n.Ay.section`
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
`;var d=t(56723);function c(e){let{images:o,activeLanguage:t="en",variant:n="theme1"}=e;return null!==o&&void 0!==o&&o.length?(0,d.jsxs)(r,{$variant:n,"data-theme12-slider":!0,children:[(0,d.jsx)(a,{"aria-hidden":!0}),(0,d.jsx)(l,{children:(0,d.jsx)(s,{children:(0,d.jsx)(i.A,{images:o,activeLanguage:t})})})]}):null}},54390:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>Yl});var i=t(82483),n=t(41190),r=t(42751),a=t(22829);const l=n.Ay.div`
min-height: 100vh;
width: 100%;
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
`;n.Ay.div`
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
`,n.Ay.div`
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
`,n.Ay.div`
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

`,(0,n.Ay)(r.meu)`
transform: rotate(270deg);
width: 20px;
height: 20px;
`,(0,n.Ay)(a.vlb)`
width: 20px;
height: 20px;
`,n.Ay.div`
position: fixed;
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color:${e=>e.theme.textColor};
background-color:${e=>e.theme.backgroundColor};
`;var c=t(27320);const p=n.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`,u=(n.Ay.div`
width: 90%;
display: flex;
align-items: ${e=>"en"==e.activeLanuguage?"flex-start":"flex-end"};
flex-direction: column;
margin-top: 8px;
margin-bottom: 8px;
font-weight: 600;
color:${e=>e.theme.textColor}
`,n.Ay.div`
font-size: 27px;


`,n.Ay.div`
width: 90%;
display: flex;
align-items: center;
margin-top: 16px;
color:${e=>e.theme.searchTextColor};
height: 40px;
border-radius: 10px;
overflow: hidden;
position: relative;
flex-direction: row;
gap:5px

`),h=n.Ay.div`
width: 90%;
display: flex;
align-items: center;
color:${e=>e.theme.searchTextColor};
height: 40px;
border-radius: 10px;
overflow: hidden;
position: relative;

`,x=n.Ay.input`
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

`,g=(0,n.Ay)(c.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};

`,m=(n.Ay.div`
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
`),f=(0,n.Ay)(a.LZ_)`
color:${e=>e.theme.searchTextColor};
font-size: 14px;


`;var v=t(91965),y=t(93376),b=t(1901);n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;
`,n.Ay.div`
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
`,n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  /* transform: ${e=>`translateX(-${100*e.carouselPosition/4}%)`}; */
`,n.Ay.div`
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
`,n.Ay.div`
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
`,n.Ay.div`
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
flex:0.8;
width: 100%;
`,n.Ay.span`
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
`,(0,n.Ay)(b.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
@media (min-width: 1024px) {
        right: 20px;
    }
`,(0,n.Ay)(b.NaI)`
position: absolute;
font-size: 22px;
left: 0px;
color:${e=>e.theme.textColor};
rotate: calc(180deg);
@media (min-width: 1024px) {
        left: 20px;
    }
`;var w=t(22139),C=t(56723);const j=n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;
`,$=n.Ay.div`
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
`,A=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;

`,k=n.Ay.div`
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

`,z=n.Ay.div`
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
`,S=(n.Ay.div`
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

`),L=n.Ay.span`

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 12px;
  user-select: none !important;
  -webkit-user-select: none !important;  /* For Safari (iOS) */
  -moz-user-select: none !important;     /* For Firefox */
  -ms-user-select: none !important;      /* For Internet Explorer */
`,_=(0,n.Ay)(b.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
`;function T(e){let{categories:o,activeCategory:t,setactiveCategory:n,carouselPosition:r,setcarouselPosition:a}=e;const{restaurantName:l}=(0,y.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[d].activeLanguage})),p=(0,i.useRef)([]);return(0,i.useEffect)((()=>{p.current=p.current.slice(0,o.length)}),[o.length]),(0,i.useEffect)((()=>{p.current[r]&&p.current[r].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[r]),(0,C.jsxs)(j,{children:[(0,C.jsx)($,{children:(0,C.jsx)(A,{children:null===o||void 0===o?void 0:o.sort(((e,o)=>o.priority-e.priority)).map(((e,o)=>(0,C.jsx)(k,{activeLanuguage:c,activeCategory:t,categoryId:e.id,onClick:()=>((e,o)=>{(0,w.c)(e),n(e),a(o)})(e.id,o),index:o,ref:e=>p.current[o]=e,children:(0,C.jsx)(z,{activeCategory:t,categoryId:e.id,children:(0,C.jsx)(S,{children:(0,C.jsx)(L,{activeCategory:t,categoryId:e.id,children:"en"===c?e.en_category||e.ar_category:e.ar_category||e.en_category})})})},e.id)))})}),(null===o||void 0===o?void 0:o.length)>4&&(0,C.jsx)(_,{onClick:()=>{r<o.length-4&&a(r+1)}})]})}function I(e){let{categories:o,activeCategory:t,setactiveCategory:i,carouselPosition:n,setcarouselPosition:r}=e;const{restaurantName:a}=(0,y.g)(),l=window.location.hostname.split(".")[0],s="menugic"!==l&&"localhost"!==l&&"www"!==l?l:a;(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[s]}));return(0,C.jsx)(T,{categories:o,activeCategory:t,setactiveCategory:i,carouselPosition:n,setcarouselPosition:r})}var E=t(11671);const N=n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 10vh;
width: 100%;
`,P=n.Ay.div`
display: flex;
align-items: center;
position: relative;
height: 10vh;
justify-content: space-between;
width: 90%;
position: relative;

`,F=n.Ay.img`
max-width: min(250px, 50vw);
max-height: 100px;
object-fit: contain;
position: absolute;
margin-right: 7px;

`,D=n.Ay.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`,R=n.Ay.div`
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
`,O=n.Ay.div`
width: 100%;
background-color: ${e=>e.theme.languagebackground};
opacity: 0.6;
position: absolute;
height: 100%;
z-index: 1;
border-radius: 10px;


`,B=n.Ay.div`
position: absolute;
background-color: ${e=>e.theme.languagebackground};
left:${e=>"en"==e.activeLanguage?"0px":"32px"} ;
transition:all ease-in-out 0.2s;
height: 100%;
width: 50%;
z-index: 2;

`,U=n.Ay.div`
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
`,q=(0,n.Ay)(E.IMk)`
color: ${e=>e.theme.mainColor};
font-size: 27px;

`;var M=t(17123),W=t(90997);function H(e){var o,t,n,r,l;let{setshowSidebar:s,showSidebar:d}=e;const{restaurantName:c}=(0,y.g)(),p=(0,i.useRef)(null),u=window.location.hostname.split(".")[0],h="menugic"!==u&&"localhost"!==u&&"www"!==u?u:c,x=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[h]})),g=(0,v.wA)(),m=(null===x||void 0===x?void 0:x.activeLanguage)||"en",f=e=>{g((0,M.y)({name:h,activeLanguage:e}))};let b={};try{b=JSON.parse((null===x||void 0===x?void 0:x.features)||"{}")}catch(Oe){}return(0,C.jsxs)(N,{children:[(0,C.jsx)(F,{src:(null===x||void 0===x?void 0:x.logoURL)&&`https://storage.googleapis.com/ecommerce-bucket-testing/${x.logoURL}`}),(0,C.jsxs)(P,{children:[(0,C.jsx)(D,{children:(0,C.jsx)(q,{onClick:()=>{s(!d)}})}),(0,C.jsxs)(D,{style:{gap:8},children:[!1!==(null===(o=b)||void 0===o?void 0:o.user_registration)&&(0,C.jsx)("div",{onClick:()=>{var e,o;return null===(e=p.current)||void 0===e||null===(o=e.toggle)||void 0===o?void 0:o.call(e)},style:{width:32,height:32,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",background:null!==x&&void 0!==x&&x.theme&&(null===(t=JSON.parse(x.theme))||void 0===t?void 0:t.languagebackground)||"#f0f0f0",color:null!==x&&void 0!==x&&x.theme&&(null===(n=JSON.parse(x.theme))||void 0===n?void 0:n.languageTextColor)||"#666",fontSize:16},children:(0,C.jsx)(a.SNd,{})}),"en&ar"===(null===x||void 0===x?void 0:x.languages)&&(0,C.jsxs)(R,{children:[(0,C.jsx)(O,{}),(0,C.jsx)(B,{activeLanguage:m}),(0,C.jsx)(U,{activeLanguage:m,language:"en",onClick:()=>f("en"),children:"En"}),(0,C.jsx)(U,{activeLanguage:m,language:"ar",onClick:()=>f("ar"),children:"Ar"})]})]})]}),!1!==(null===(r=b)||void 0===r?void 0:r.user_registration)&&(0,C.jsx)(W.A,{ref:p,restaurantName:h,restaurantId:null===x||void 0===x?void 0:x.id,activeLanguage:m,accentColor:null!==x&&void 0!==x&&x.theme&&(null===(l=JSON.parse(x.theme))||void 0===l?void 0:l.mainColor)||"#5eabb1"})]})}var V=t(92733);function X(e){let{activeCategory:o,setactiveCategory:t,categories:i,setSearchText:n,searchText:r,setshowSidebar:a,showSidebar:l,carouselPosition:s,setcarouselPosition:d,popupHandler:c,showMenuSlider:b,sliderImages:w,hideHeaderTop:j=!1}=e;const{restaurantName:$}=(0,y.g)(),A=window.location.hostname.split(".")[0],k="menugic"!==A&&"localhost"!==A&&"www"!==A?A:$,z=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[k].activeLanguage}));return(0,C.jsxs)(p,{children:[!j&&(0,C.jsx)(H,{setshowSidebar:a,showSidebar:l}),b&&(0,C.jsx)(V.A,{images:w,activeLanguage:z||"en",variant:"theme2"}),(0,C.jsx)(I,{categories:i,activeCategory:o,setactiveCategory:t,carouselPosition:s,setcarouselPosition:d}),(0,C.jsxs)(u,{children:[(0,C.jsxs)(h,{children:[(0,C.jsx)(g,{activeLanguage:z}),(0,C.jsx)(x,{type:"text",activeLanguage:z,dir:"en"==z?"ltr":"rtl",placeholder:"en"==z?"Search Category":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{n(e.target.value)},value:r})]}),(0,C.jsxs)(m,{onClick:()=>{window.history.pushState({},""),c("share")},children:["en"==z&&(0,C.jsx)(f,{}),"en"==z?"Share":"\u0646\u0634\u0631","en"!==z&&(0,C.jsx)(f,{})]})]})]})}var Y=t(99891),J=t(11222);const K=n.Ay.div`
 width: 100%;
 margin-top: 10px;
 padding-bottom: 90px;
 display: flex;
 justify-content: center;
`,Q=n.Ay.div`
 flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: ${e=>e.$noMinHeight?"0":"70vh"};
  opacity: 1;
  transition:all 0.7s ease-in-out;
`,Z=(n.Ay.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
`),G=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`,ee=n.Ay.h3`
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
`,oe=(n.Ay.button`
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
`),te=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${e=>e.theme.mainColor};
  font-size: 13px;
`,ie=n.Ay.div`
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
`,ne=n.Ay.button`
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
`,re=n.Ay.div`
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
`,ae=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,le=n.Ay.div`
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
`,se=n.Ay.div`
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
`,de=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,ce=n.Ay.h4`
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
`,pe=n.Ay.div`
  font-size: 15px;
  font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#007bff"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${e=>"ar"===e.activeLanguage?"row-reverse":"row"};
`,ue=n.Ay.span`
  font-size: 14px;
  color: ${e=>e.theme.BoxPriceColor||e.theme.textColor||"#666"};
  text-decoration: line-through;
  opacity: 0.6;
`,he=n.Ay.div`
  position: relative;
  width: 100%;
`,xe=n.Ay.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    @media (min-width: 1024px) {
        width: 20%;
    }
`,ge=n.Ay.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.theme.BoxColor};
    border-radius: 20px;
    position: relative;

    //cjhange loadeeerr wrappperr and this oneee colorrrr

`,me=n.Ay.img`
width:90%;
height:100%;
object-fit: cover;
border-radius: 10px;
visibility: ${e=>e.imageLoaded?"visible":"hidden"};
/* display:${e=>e.imageLoaded?"block":"none"} */
`,fe=n.Ay.div`
position: relative;
width:100%;
height: 18vh;
overflow: hidden;
margin-top: 5px;
display: flex;
justify-content: center;
border-radius: 10px;
@media (min-width: 1024px) {
  height: 24vh;
    }


`,ve=n.Ay.div`
width:90%;
display: flex;
justify-content: center;
flex-direction: column;
text-align: ${e=>"en"==e.activeLanuguage?"left":"right"};
position: relative;
align-items: ${e=>"en"==e.activeLanuguage?"flex-start":"flex-end"};
gap:3px;
height: 8vh;
margin-top: 3px;

`,ye=n.Ay.span`
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



`,be=n.Ay.div`
display: flex;
flex-direction: row;
gap:5px;
`,we=n.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;
text-decoration:${e=>e.discounted?"line-through":"none"};


`,Ce=n.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;

`,je=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,$e=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${je} 1s linear infinite; /* Apply animation */
`,Ae=n.Ay.div`
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

`,ke=n.Ay.div`
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
`,ze=n.Ay.button`
  position: absolute;
  bottom: 8px;
  ${e=>"ar"===e.activeLanuguage?"left: 15px;":"right: 15px;"}
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: transform 0.15s ease;
  z-index: 5;
  &:active {
    transform: scale(0.9);
  }
`,Se=n.Ay.div`
  position: absolute;
  bottom: 8px;
  ${e=>"ar"===e.activeLanuguage?"left: 8px;":"right: 8px;"}
  font-size: 9px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 10px;
  background: rgba(220, 38, 38, 0.85);
  color: #fff;
  z-index: 5;
`,Le=n.Ay.button`
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
`;var _e=t(18907),Te=t(58821),Ie=t(86001),Ee=t(81132),Ne=t(70268),Pe=t(81926),Fe=t(71481),De=t(2200),Re=t(85538);const Oe=t(34304),Be=i.forwardRef(((e,o)=>{var t,n,r,l,s;let{plate:d,setactivePlate:c,activePlate:p,index:u,showPopup:h,setSearchParams:x,searchParams:g,activeCategoryId:m,categories:f,disableDetails:b,wishlistIds:w,onWishlistChange:j}=e;const{restaurantName:$}=(0,y.g)(),A=window.location.hostname.split(".")[0],k="menugic"!==A&&"localhost"!==A&&"www"!==A?A:$,z=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[k]})),S=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[k].activeLanguage})),L=(0,v.wA)(),[_,T]=(0,i.useState)(!1);let I={};try{I=JSON.parse((null===z||void 0===z?void 0:z.features)||"{}")}catch(Oe){}const E=Boolean(null===d||void 0===d?void 0:d.out_of_stock)||1===Number(null===d||void 0===d?void 0:d.out_of_stock),N=null===f||void 0===f?void 0:f.find((e=>e.id==m)),P=(()=>{try{var e,o,t,i;const n=null!==d&&void 0!==d&&d.form_json?JSON.parse(d.form_json):null;return n&&((null===(e=n.components)||void 0===e?void 0:e.length)>0||2===n.version&&((null===(o=n.sizes)||void 0===o?void 0:o.length)>0||(null===(t=n.addons)||void 0===t?void 0:t.length)>0||(null===(i=n.removals)||void 0===i?void 0:i.length)>0))}catch{return!1}})(),F=(0,i.useCallback)((e=>{const o=document.getElementById("cart-tab-icon");if(!o)return;const t=(null===e||void 0===e?void 0:e.currentTarget)||(null===e||void 0===e?void 0:e.target),i=t?t.getBoundingClientRect():null,n=o.getBoundingClientRect();if(!i)return;const r=(null===z||void 0===z?void 0:z.mainColor)||(null===z||void 0===z?void 0:z.maincolor)||"#a6ce39",a=i.left+i.width/2,l=i.top+i.height/2,s=n.left+n.width/2,d=n.top+n.height/2,c=document.createElement("div");c.style.cssText=`\n        position: fixed;\n        left: ${a-14}px;\n        top: ${l-14}px;\n        width: 28px; height: 28px;\n        border-radius: 50%;\n        background: ${r};\n        box-shadow: 0 4px 15px ${r}88, 0 2px 6px rgba(0,0,0,0.3);\n        z-index: 99999;\n        pointer-events: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      `,c.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>',document.body.appendChild(c);const p=document.createElement("div");p.style.cssText=`\n        position: fixed;\n        left: ${a-10}px;\n        top: ${l-10}px;\n        width: 20px; height: 20px;\n        border-radius: 50%;\n        background: ${r}55;\n        z-index: 99998;\n        pointer-events: none;\n      `,document.body.appendChild(p);const u=(a+s)/2+(a>s?60:-60),h=Math.min(l,d)-120,x=c.animate([{left:a-14+"px",top:l-14+"px",width:"28px",height:"28px",opacity:1,transform:"scale(1)"},{left:u-12+"px",top:h-12+"px",width:"24px",height:"24px",opacity:1,transform:"scale(1.1)",offset:.35},{left:s-8+"px",top:d-8+"px",width:"16px",height:"16px",opacity:.6,transform:"scale(0.6)"}],{duration:650,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"});p.animate([{left:a-10+"px",top:l-10+"px",width:"20px",height:"20px",opacity:.5},{left:u-8+"px",top:h-8+"px",width:"16px",height:"16px",opacity:.3,offset:.4},{left:s-4+"px",top:d-4+"px",width:"8px",height:"8px",opacity:0}],{duration:700,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"}),x.onfinish=()=>{c.remove(),p.remove();(o.closest("[data-tab]")||o.parentElement||o).animate([{transform:"scale(1)"},{transform:"scale(1.35)",offset:.25},{transform:"scale(0.85)",offset:.5},{transform:"scale(1.15)",offset:.75},{transform:"scale(1)"}],{duration:500,easing:"ease-out"})}}),[z]),D=(0,De.Q)(null===z||void 0===z?void 0:z.currency),R=(0,Ne.wU)(k),O=w&&"function"===typeof w.has&&w.has(d.id);let B;B=0===parseFloat(null===N||void 0===N?void 0:N.discount)?parseFloat(d.discount):parseFloat(N.discount);const U=null!==(t=null===(n=d.images)||void 0===n?void 0:n.findIndex((e=>e.id===d.new_cover_id)))&&void 0!==t?t:-1,q=U>=0&&(null===(r=d.images)||void 0===r||null===(l=r[U])||void 0===l?void 0:l.url),M=null!==z&&void 0!==z&&z.logoURL?(0,Te.V)(z.logoURL):null,W=q?(0,Te.V)(d.images[U].url):M||"";return(0,C.jsx)(xe,{index:u,activePlate:p,className:"lazy-load",children:(0,C.jsxs)(ge,{children:[!_&&(0,C.jsx)(Ae,{children:(0,C.jsx)($e,{})}),(0,C.jsxs)(fe,{onClick:()=>{if(null==p&&_&&!h){b||c(u);const e=new URLSearchParams(g);e.set("productId",null===d||void 0===d?void 0:d.id),m&&e.set("categoryId",m),x(e),window.history.pushState({},"",`?${e.toString()}`),document.body.style.overflow="hidden"}},children:[d.new&&(0,C.jsx)(ke,{children:"en"===(null===z||void 0===z?void 0:z.activeLanguage)?"NEW !":"! \u062c\u062f\u064a\u062f"}),(0,C.jsx)(Re.A,{macros:null===d||void 0===d?void 0:d.macros,activeLanguage:null===z||void 0===z?void 0:z.activeLanguage}),(0,C.jsx)(me,{ref:o,onLoad:()=>{T(!0)},src:W,imageLoaded:_}),R&&(0,C.jsx)(Le,{type:"button",activeLanuguage:null===z||void 0===z?void 0:z.activeLanguage,$filled:O,onClick:e=>{e&&(e.preventDefault(),e.stopPropagation()),R&&null!==d&&void 0!==d&&d.id&&(async()=>{try{O?await J.A.delete((0,Ee.Vr)(d.id),{headers:{Authorization:`Bearer ${R}`}}):await J.A.post(Ee.Vb,{product_id:d.id},{headers:{Authorization:`Bearer ${R}`}}),null===j||void 0===j||j()}catch(e){console.error("Wishlist error:",e)}})()},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchStart:e=>e.stopPropagation(),children:(0,C.jsx)(a.phF,{size:16})}),!1!==(null===(s=I)||void 0===s?void 0:s.cart)&&(E?(0,C.jsx)(Se,{activeLanuguage:S,children:"en"===S?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631"}):(0,C.jsx)(ze,{onClick:e=>{var o,t;if(e&&(e.preventDefault(),e.stopPropagation()),!1===(null===(o=I)||void 0===o?void 0:o.cart)||E)return;if(!0===(null===(t=I)||void 0===t?void 0:t.quick_add_requires_options)&&P){if(null==p&&!h){b||c(u);const e=new URLSearchParams(g);e.set("productId",null===d||void 0===d?void 0:d.id),m&&e.set("categoryId",m),x(e),window.history.pushState({},"",`?${e.toString()}`),document.body.style.overflow="hidden"}return}const i=(parseFloat((null===d||void 0===d?void 0:d.en_price)||"0")||0)*(1-(0===parseFloat(null===N||void 0===N?void 0:N.discount)?parseFloat((null===d||void 0===d?void 0:d.discount)||0):parseFloat((null===N||void 0===N?void 0:N.discount)||0))/100);var n,r;(L((0,Ie.bE)(k,d,1,{},i,"")),null!==z&&void 0!==z&&z.id&&null!==d&&void 0!==d&&d.id)&&(0,Pe.trackAddToCart)(z.id,d.id,m,1,(null===z||void 0===z||null===(n=z.branches)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.id)||null);F(e)},onMouseDown:e=>e.stopPropagation(),activeLanuguage:S,children:(0,C.jsx)(Fe._xK,{size:12})}))]}),(0,C.jsxs)(ve,{activeLanuguage:null===z||void 0===z?void 0:z.activeLanguage,children:[(0,C.jsx)(ye,{fontSize:null===z||void 0===z?void 0:z.font_size,children:"en"===(null===z||void 0===z?void 0:z.activeLanguage)?d.en_name||d.ar_name:d.ar_name||d.en_name}),!Oe.isEmpty(d.en_price)&&(0,C.jsxs)(be,{children:[(0,C.jsx)(we,{discounted:0!=B,children:(0,_e.T)(parseFloat(d.en_price),D)}),(0,C.jsx)(Ce,{children:0!=B&&(0,_e.T)(parseFloat(d.en_price)*(1-parseFloat(B)/100),D)})]})]})]})})}));var Ue=t(99998),qe=t(10448),Me=t(34304),We=t.n(Me);const He=n.Ay.div`
  
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
  animation: ${(e,o,t)=>n.i7`
 0% { 
    right: -100%;
    
}
 100% { 
    right: 0;

}
`} 0.5s;
  z-index: 2000;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1024px) {
    /* animation: ${e=>{let{x:o,y:t,width:i}=e;return((e,o,t)=>n.i7`
 0% { 
    left: ${e}px;
    top:${o}px;
    width:${t}px;
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
`)(o,t,i)}} 0.8s;
    height: ${e=>e.CloseAnimation?"100vh":"30vh"}; */

    }

`,Ve=n.i7`
 0% {
    height:20vh;
    top:0px;
}

 100% {
    height:45vh;
    top:10px;

    }
`,Xe=(n.i7`
 0% {
    height:30vh;
    top:0px;
}

 100% {
    height:70vh;
    top:10px;

    }
`,n.Ay.div`
  width: 100%;
  height: ${e=>e.isNormalCarousel?"auto":e.squareDimension?"55vh":"70vh"};
  min-height: ${e=>e.isNormalCarousel?e.squareDimension?"45vh":"60vh":"unset"};
  margin-top: 10px !important;
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
    margin-top: 0;
  }
`),Ye=n.Ay.div`
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
`,Je=n.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
`,Ke=n.Ay.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  flex-shrink: 0;
`,Qe=n.Ay.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,Ze=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Ge=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${Ze} 1s linear infinite; /* Apply animation */
`,eo=n.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,oo=n.Ay.img`
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
`,to=n.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,io=(0,n.Ay)(qe.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,no=(0,n.Ay)(qe.m6W)`
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
`,ro=(0,n.Ay)(qe.OQo)`
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
`,ao=n.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${to} 0.4s ease-in-out;
`,lo=n.Ay.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
  margin-top: 10px !important;
`,so=n.i7`
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
`,co=n.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${so} 1s ease-in-out;
`,po=(n.Ay.div`
  width:90%;
  /* height: ${e=>e.CloseAnimation?"45vh":"25vh"}; */
  height: ${e=>e.squareDimension?"45vh":"60vh"};

  border-radius:40px;
  margin-top: 0px;
  display:flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${Ve} 0.4s;
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
`),uo=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,ho=n.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${po} 0.8s ease-in-out;

`,xo=n.Ay.div`
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
`,go=n.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:${e=>"en"==e.activeLanguage?"left":"right"} ;
  opacity: 1;
  margin-top: 5px;
`,mo=n.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,fo=n.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,vo=n.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,yo=n.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,bo=n.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,wo=n.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,Co=n.Ay.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${wo} 0.7s ease-in-out;
  background-color: ${e=>e.theme.backgroundColor};

  display: ${e=>e.CloseAnimation?"flex":"none"};
  box-shadow: 0px -3px 5px rgba(180, 180, 180, 0.1); /* Slight shadow on the top */
  padding-bottom: 10px;
  margin-top: 30px;
  @media (min-width: 1024px) {
        width: 50%;
    }
`,jo=n.Ay.button`
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
`,$o=n.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,Ao=n.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,ko=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,zo=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,So=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,Lo=n.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,_o=n.Ay.div`
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
  animation: ${Lo} 0.4s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,To=n.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`,Io=n.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,Eo=n.Ay.input`
background-color: transparent;
border: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.8)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.8)`)):t}};
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

`,No=n.Ay.button`
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
`,Po=n.Ay.div`
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
`,Fo=n.Ay.button`
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
`,Do=n.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`,Ro=n.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display: flex;
`,Oo=n.Ay.div`
display: flex;
flex-direction: row;
`,Bo=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,Uo=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,qo=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,Mo=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,Wo=n.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,Ho=n.Ay.span`
position: absolute;
left: 0;

`,Vo=n.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,Xo=(0,n.Ay)(r.Z0P)`
    animation:1.2s ${Vo}  linear infinite ;
    position: absolute;
`;function Yo(e){let{carouselIndex:o,images:t,CloseAnimation:i,carouselSwiped:n}=e;return(0,C.jsxs)(Ro,{CloseAnimation:i,children:[(0,C.jsxs)(Oo,{children:[(0,C.jsx)(Bo,{carouselIndex:o,children:(0,C.jsx)(Uo,{})}),t.map((e=>(0,C.jsx)(qo,{children:(0,C.jsx)(Mo,{})})))]}),!n&&(0,C.jsxs)(Wo,{children:[(0,C.jsx)(Ho,{children:"Swipe"}),(0,C.jsx)(Xo,{})]})]})}n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const Jo=n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,Ko=(n.Ay.label`
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
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(We().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`),Qo=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,Zo=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Go=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let o=e.theme.formColor;if(We().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.1)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.1)`)):o}};
  font-size:10px;

`,et=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,ot=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${e=>e.theme.formColor};

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);var tt=t(41235);function it(e){let{component:o,formData:t,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(t[o.key]||[]);return(0,C.jsxs)(Ko,{index:r,children:[(0,C.jsx)(Jo,{children:o.label}),o.values.map((e=>(0,C.jsxs)(Zo,{children:[s.some((o=>o===e.label))?(0,C.jsx)(et,{onClick:()=>{(e=>{let t=s.filter((o=>o!==e.label));d(t),n(o.key,t)})(e)},children:(0,C.jsx)(tt.RXm,{size:"15px"})}):(0,C.jsx)(Go,{onClick:()=>{(e=>{d([...s,e.label]),n(o.key,[...s,e.label])})(e)},children:(0,C.jsx)(Fe.OiG,{})}),(0,C.jsx)(Qo,{children:e.label})]}))),(c=a,c in l?(0,C.jsx)(ot,{children:"This field is required"}):null)]});var c}const nt=n.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(We().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`,rt=n.Ay.div`
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
`,at=n.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,lt=n.Ay.ul`
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

`,st=n.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,dt=n.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,ct=n.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,pt=n.Ay.div`
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
`,ut=(n.Ay.label`
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

`);function ht(e){var o;let{component:t,formData:n,handleChange:r,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;console.log(s),console.log(d);const[c,p]=(0,i.useState)(!1),[u,h]=(0,i.useState)((null===(o=n[t.key])||void 0===o?void 0:o.value)||""),x=(0,i.useRef)(null),g=e=>{h(e.label),p(!1),r(t.key,e)},m=e=>{x.current&&!x.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,C.jsxs)(nt,{ref:x,index:l,children:[(0,C.jsx)(Jo,{children:t.label}),t.data.values.length>8?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(rt,{onClick:()=>p((e=>!e)),children:[u||a,(0,C.jsx)(at,{className:c?"up":"",children:"\u25bc"})]}),(0,C.jsx)(lt,{isOpen:c,children:t.data.values.map(((e,o)=>(0,C.jsx)(st,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},o)))})]}):(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(dt,{children:t.data.values.map(((e,o)=>(0,C.jsx)(ct,{children:(0,C.jsx)(pt,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,C.jsx)(ut,{children:"This field is required"}):null)]});var f}const xt=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(We().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`,gt=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,mt=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,ft=n.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,vt=n.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,yt=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function bt(e){let{component:o,formData:t,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(t[o.key]||"");return(0,C.jsxs)(xt,{index:r,children:[(0,C.jsx)(Jo,{children:o.label}),o.values.map((e=>(0,C.jsxs)(mt,{children:[(0,C.jsx)(ft,{onClick:()=>{(e=>{d(e),n(o.key,e)})(e)},children:(0,C.jsx)(vt,{selected:s.label==e.label})}),(0,C.jsx)(gt,{children:e.label})]}))),(c=a,c in l?(0,C.jsx)(yt,{children:"This field is required"}):null)]});var c}function wt(e){let{formSchema:o,onPriceChange:t,basePrice:n,formData:r,setFormData:a,finalDiscount:l,formErrors:s}=e;(0,i.useEffect)((()=>{c(r)}),[r]);const d=(e,o)=>{a((t=>({...t,[e]:o})))},c=e=>{let i=parseFloat(n)||0,r=0;null===o||void 0===o||o.components.forEach((o=>{if(e[o.key])if("selectboxes"===o.type&&o.values)e[o.key].forEach((e=>{const t=o.values.find((o=>o.label===e)),i=!isNaN(Number(t.value));t&&t.value&&i&&(t.value.startsWith("+")?r+=parseFloat(t.value.slice(1)):t.value.startsWith("-")&&(r-=parseFloat(t.value.slice(1))))}));else if("select"===o.type&&o.data&&o.data.values){const t=o.data.values.find((t=>{var i;return t.value===(null===(i=e[o.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(t.value));t&&n&&(t.value.startsWith("+")?r+=parseFloat(t.value.slice(1)):t.value.startsWith("-")?r-=parseFloat(t.value.slice(1)):i=parseFloat(t.value))}else if("radio"===o.type&&o.values){const t=o.values.find((t=>{var i;return t.value===(null===(i=e[o.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(t.value));t&&n&&(t.value.startsWith("+")?r+=parseFloat(t.value.slice(1)):t.value.startsWith("-")?r-=parseFloat(t.value.slice(1)):i=parseFloat(t.value))}}));const a=i+r,l=a%1!==0?a.toFixed(2):a.toFixed(0);t(l)};return(0,C.jsx)("form",{style:{width:"100%"},children:null===o||void 0===o?void 0:o.components.map(((e,o)=>((e,o)=>{switch(e.type){case"selectboxes":return console.log(e.key),(0,C.jsx)(it,{component:e,formData:r,handleChange:d,index:o,componentKey:e.key,formErrors:s});case"select":return console.log(e.key),(0,C.jsx)(ht,{component:e,formData:r,handleChange:d,index:o,componentKey:e.key,formErrors:s});case"radio":return(0,C.jsx)(bt,{component:e,formData:r,handleChange:d,index:o,componentKey:e.key,formErrors:s});default:return null}})(e,o)))})}var Ct=t(42770),jt=t(5633),$t=t(73556),At=(t(20965),t(16104)),kt=t(88620),zt=t(57526);t(44014),t(70045),t(5084);const St=t(34304);function Lt(e){var o,t,n,r,l,s,d,c,p,u,h,x,g,m,f,w;let{activePlate:j,setactivePlate:$,menu:A,plates:k,productPositions:z,categories:S,activeCategoryId:L,setSearchParams:_,searchParams:T}=e;const{restaurantName:I}=(0,y.g)(),E=window.location.hostname.split(".")[0],N="menugic"!==E&&"localhost"!==E&&"www"!==E?E:I,P=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[N]})),F=S.find((e=>e.id==L)),{response:D}=(0,At.$)({productId:null===(o=k[j])||void 0===o?void 0:o.id});(0,i.useEffect)((()=>{var e;let o=null;var t,i;St.isEmpty(null===(e=k[j])||void 0===e?void 0:e.form_json)||(o=St.isEmpty(JSON.parse(null===(t=k[j])||void 0===t?void 0:t.form_json))?null===F||void 0===F?void 0:F.form_json:null===(i=k[j])||void 0===i?void 0:i.form_json);if(St.isEmpty(o))O({});else{var n;const e=JSON.parse(o);if(O(e),2===(null===e||void 0===e?void 0:e.version)&&(null===e||void 0===e||null===(n=e.sizes)||void 0===n?void 0:n.length)>0){var r;const o=parseFloat(null===(r=k[j])||void 0===r?void 0:r.en_price)||0,t=e.sizes.find((e=>"absolute"===e.priceMode&&Number(e.priceModifier)===o));U((()=>({...(0,$t.KE)(),sizeId:t?t.id:e.sizes[0].id})))}}}),[P.activeLanguage]);const[R,O]=(0,i.useState)({}),[B,U]=(0,i.useState)({}),[q,M]=(0,i.useState)({}),W=(0,v.wA)(),[H,V]=(0,i.useState)(1),[X,Y]=(0,i.useState)(!1),J=(0,i.useRef)(null),[K,Q]=(0,i.useState)(!1),[Z,G]=(0,i.useState)(1),[ee,oe]=(0,i.useState)({x:0,y:0}),[te,ie]=(0,i.useState)(!1),ne=(0,i.useRef)(null),re=(0,i.useRef)(null),ae=(0,i.useRef)(0),le=parseFloat(null===F||void 0===F?void 0:F.discount)||0,se=parseFloat(null===(t=k[j])||void 0===t?void 0:t.discount)||0,de=0===le?se:le,ce=(null===(n=k[j])||void 0===n?void 0:n.en_price)||"0",pe=parseFloat(ce)||0,ue=pe%1!==0?pe.toFixed(2):pe.toFixed(0),[he,xe]=(0,i.useState)(pe),[ge,me]=(0,i.useState)(""),fe=e=>{xe(parseFloat(e)||0)},[ve,ye]=(0,i.useState)(!0),[be,we]=(0,i.useState)(0),Ce=()=>{setTimeout((()=>{$(null),document.body.style.overflow="auto"}),700),ye(!1),T.delete("productId"),_(T)},[je,$e]=(0,i.useState)(!1),Ae=()=>{Y(!0),we(be+1)},ke=()=>{Y(!0),we(be-1)},ze=(0,i.useRef)(null),[Se,Le]=(0,i.useState)(null),Ee=()=>{G(1),oe({x:0,y:0}),Q(!0)};(0,i.useEffect)((()=>{const e=()=>{Ce()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const Ne=2===(null===R||void 0===R?void 0:R.version)&&Array.isArray(null===R||void 0===R?void 0:R.sizes);const Pe=null!==P&&void 0!==P&&P.logoURL?(0,Te.V)(P.logoURL):null;let Re=[...null!==(r=null===(l=k[j])||void 0===l?void 0:l.images)&&void 0!==r?r:[]];0===Re.length&&Pe&&(Re=[{id:"fallback-logo",url:P.logoURL,isFallback:!0}]);const Oe=Re.findIndex((e=>{var o;return e.id===(null===(o=k[j])||void 0===o?void 0:o.new_cover_id)}));if(Oe>0){const[e]=Re.splice(Oe,1);Re.unshift(e)}const[Be,qe]=(0,i.useState)({}),Me=e=>{qe((o=>({...o,[e]:!0})))},We="en"===(null===P||void 0===P?void 0:P.activeLanguage)?null===(s=k[j])||void 0===s?void 0:s.en_description:null===(d=k[j])||void 0===d?void 0:d.ar_description,Ve=(0,De.Q)(null===P||void 0===P?void 0:P.currency);let Ze=JSON.parse(P.features);const to=Boolean(null===(c=k[j])||void 0===c?void 0:c.out_of_stock)||1===Number(null===(p=k[j])||void 0===p?void 0:p.out_of_stock),so=(null===P||void 0===P?void 0:P.product_details_carousel_style)||"normal";return(0,Ue.createPortal)((0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(He,{CloseAnimation:ve,children:[(0,C.jsx)(lo,{CloseAnimation:ve,children:(0,C.jsx)(co,{children:"en"==P.activeLanguage?null===A||void 0===A?void 0:A.en_category:null===A||void 0===A?void 0:A.ar_category})}),(0,C.jsx)(Xe,{squareDimension:null===(u=k[j])||void 0===u?void 0:u.square_dimension,CloseAnimation:ve,isNormalCarousel:"normal"===so,children:1===Re.length?(0,C.jsx)(Je,{carouselIndex:0,children:(0,C.jsx)(Ke,{children:(0,C.jsxs)(Qe,{children:[!Be[0]&&(0,C.jsx)(eo,{children:(0,C.jsx)(Ge,{})}),(0,C.jsx)(oo,{src:Re[0].url?(0,Te.V)(Re[0].url):Pe||"",onLoad:()=>Me(0),onError:e=>{Pe&&e.target.src!==Pe&&(e.target.src=Pe)},CloseAnimation:ve,Loaded:Be[0],alt:"Image 0"}),(0,C.jsx)(No,{onClick:Ee,children:(0,C.jsx)(b.gff,{})})]})})}):"normal"===so?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(no,{CloseAnimation:ve,onClick:()=>{Y(!0),0!==be&&ke()}}),(0,C.jsx)(ro,{CloseAnimation:ve,onClick:()=>{Y(!0),Re.length>be+1&&Ae()}}),(0,C.jsx)(Je,{carouselIndex:be,ref:ze,onTouchStart:e=>{Le(e.touches[0].clientX)},onTouchMove:e=>{if(Se){const o=e.touches[0].clientX-Se;o>5?0!==be&&ke():o<-5&&Re.length>be+1&&Ae(),Le(null)}},children:Re.map(((e,o)=>(0,C.jsx)(Ke,{children:(0,C.jsxs)(Qe,{children:[!Be[o]&&(0,C.jsx)(eo,{children:(0,C.jsx)(Ge,{})}),(0,C.jsx)(oo,{src:Be[o]||o===be?e.url?(0,Te.V)(e.url):Pe||"":"",onLoad:()=>Me(o),onError:e=>{Pe&&e.target.src!==Pe&&(e.target.src=Pe)},CloseAnimation:ve,Loaded:Be[o],alt:`Image ${o}`}),be===o&&(0,C.jsx)(No,{onClick:Ee,children:(0,C.jsx)(b.gff,{})})]})},e.id||o)))})]}):"effect-cards"===so?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(no,{CloseAnimation:ve,onClick:()=>J.current&&J.current.slidePrev()}),(0,C.jsx)(Ye,{children:(0,C.jsx)(kt.RC,{modules:[zt.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{J.current=e},onSlideChange:e=>{we(e.realIndex),Y(!0)},children:Re.map(((e,o)=>(0,C.jsx)(kt.qr,{children:(0,C.jsxs)(Qe,{children:[!Be[o]&&(0,C.jsx)(eo,{children:(0,C.jsx)(Ge,{})}),(0,C.jsx)(oo,{src:Be[o]||o===be?e.url?(0,Te.V)(e.url):Pe||"":"",onLoad:()=>Me(o),onError:e=>{Pe&&e.target.src!==Pe&&(e.target.src=Pe)},CloseAnimation:ve,Loaded:Be[o],$cardSlide:!0,alt:`Image ${o}`}),be===o&&(0,C.jsx)(No,{onClick:Ee,children:(0,C.jsx)(b.gff,{})})]})},e.id||o)))},null===(h=k[j])||void 0===h?void 0:h.id)}),(0,C.jsx)(ro,{CloseAnimation:ve,onClick:()=>J.current&&J.current.slideNext()})]}):(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(Ye,{children:(0,C.jsx)(kt.RC,{onSwiper:e=>{J.current=e},onSlideChange:e=>{we(e.realIndex),Y(!0)},modules:[zt.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:Re.map(((e,o)=>(0,C.jsx)(kt.qr,{children:(0,C.jsxs)(Qe,{children:[!Be[o]&&(0,C.jsx)(eo,{children:(0,C.jsx)(Ge,{})}),(0,C.jsx)(oo,{src:Be[o]||o===be?e.url?(0,Te.V)(e.url):Pe||"":"",onLoad:()=>Me(o),onError:e=>{Pe&&e.target.src!==Pe&&(e.target.src=Pe)},CloseAnimation:ve,Loaded:Be[o],$cardSlide:!0,alt:`Image ${o}`}),be===o&&(0,C.jsx)(No,{onClick:Ee,children:(0,C.jsx)(b.gff,{})})]})},e.id||o)))},null===(x=k[j])||void 0===x?void 0:x.id)})})}),1!==Re.length&&(0,C.jsx)(Yo,{images:Re,carouselIndex:be,CloseAnimation:ve,carouselSwiped:X}),(0,C.jsx)(uo,{children:(0,C.jsx)(ho,{children:(0,C.jsxs)(xo,{CloseAnimation:ve,activeLanguage:P.activeLanguage,children:[(0,C.jsx)(go,{activeLanguage:P.activeLanguage,children:"en"==P.activeLanguage?null===(g=k[j])||void 0===g?void 0:g.en_name:null===(m=k[j])||void 0===m?void 0:m.ar_name}),!St.isEmpty(null===(f=k[j])||void 0===f?void 0:f.en_price)&&(0,C.jsxs)(vo,{children:[(0,C.jsx)(yo,{activeLanguage:P.activeLanguage,discounted:0!=de,children:(0,_e.T)(he,Ve)}),0!=de&&(0,C.jsx)(bo,{activeLanguage:P.activeLanguage,children:(0,_e.T)(he*(1-parseFloat(de)/100),Ve)})]}),!St.isEmpty(We)&&(0,C.jsx)(mo,{activeLanguage:P.activeLanguage,dangerouslySetInnerHTML:{__html:We}}),to&&(0,C.jsx)(fo,{children:"en"===P.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),(0,C.jsx)(jt.A,{macros:null===(w=k[j])||void 0===w?void 0:w.macros,activeLanguage:null===P||void 0===P?void 0:P.activeLanguage}),Ne&&(0,C.jsx)(Ct.A,{options:R,formData:B,setFormData:U,formErrors:q,activeLanguage:P.activeLanguage,basePrice:ue,onPriceChange:fe}),!Ne&&(null===R||void 0===R?void 0:R.components)&&(0,C.jsx)(wt,{formSchema:R,onPriceChange:fe,formData:B,setFormData:U,basePrice:ue,formErrors:q}),(0,C.jsxs)(To,{activeLanguage:P.activeLanguage,children:[(0,C.jsx)(Io,{children:"en"==P.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,C.jsx)(Eo,{activeLanguage:P.activeLanguage,onChange:e=>me(e.target.value),placeholder:"en"==P.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(null===Ze||void 0===Ze?void 0:Ze.cart)&&!to&&(0,C.jsxs)(Co,{CloseAnimation:ve,children:[(0,C.jsxs)(Ao,{CloseAnimation:ve,children:[(0,C.jsx)(ko,{onClick:()=>{V(H+1)},children:"+"}),(0,C.jsx)(So,{children:H}),(0,C.jsx)(zo,{onClick:()=>{H>1&&V(H-1)},children:"-"})]}),(0,C.jsxs)(jo,{onClick:()=>{if(Ne){var e;const o={};if((null===(e=R.sizes)||void 0===e?void 0:e.length)>0&&(null===B||void 0===B||!B.sizeId)&&(o.size="Please select a size."),Object.keys(o).length>0)return void M(o)}else if("{}"!==JSON.stringify(R)){const e=function(e,o){const t={},i=function(e){return e.components.filter((e=>{var o;return null===(o=e.validate)||void 0===o?void 0:o.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in o&&0!==(null===(i=o[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(o[e])||(t[e]="This field is required.")})),t}(R,B);if(Object.keys(e).length>0)return void M(e)}let o=he*(1-parseFloat(de)/100);setTimeout((()=>{$(null),document.body.style.overflow="auto"}),800),W((0,Ie.bE)(N,k[j],H,B,o,ge)),ye(!1),V(1),M({})},children:["en"==P.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",he>0&&(0,C.jsx)($o,{children:(0,_e.T)(H*(he*(1-de/100)),Ve)})]})]})]}),(0,C.jsx)(ao,{onClick:Ce,CloseAnimation:ve,children:(0,C.jsx)(io,{})}),(0,C.jsx)(_o,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),$e(!0),setTimeout((()=>{$e(!1)}),4e3)},CloseAnimation:ve,children:je?(0,C.jsx)(tt.RXm,{}):(0,C.jsx)(Fe.zU_,{})}),K&&(0,C.jsxs)(Po,{onTouchStart:e=>{if(2===e.touches.length){const o=e.touches[0].clientX-e.touches[1].clientX,t=e.touches[0].clientY-e.touches[1].clientY;re.current=Math.hypot(o,t)}else if(1===e.touches.length){const o=Date.now();o-ae.current<300&&(G((e=>e>1?1:2.5)),oe({x:0,y:0})),ae.current=o,ne.current={x:e.touches[0].clientX,y:e.touches[0].clientY},ie(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const o=e.touches[0].clientX-e.touches[1].clientX,t=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(o,t);if(re.current){const e=i/re.current;G((o=>Math.min(Math.max(o*e,1),5)))}re.current=i}else if(1===e.touches.length&&te&&Z>1){const o=e.touches[0].clientX-ne.current.x,t=e.touches[0].clientY-ne.current.y;oe((e=>({x:e.x+o,y:e.y+t}))),ne.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{re.current=null,ie(!1)},children:[(0,C.jsx)(Fo,{onClick:()=>Q(!1),children:(0,C.jsx)(a.$8F,{})}),(0,C.jsx)(Do,{src:(()=>{const e=Re[be];return e?e.url?(0,Te.V)(e.url):Pe||"":""})(),style:{transform:`scale(${Z}) translate(${ee.x/Z}px, ${ee.y/Z}px)`},alt:"Zoom"})]})]}),document.body)}var _t=t(9328),Tt=t(32415),It=t(73422);const Et=t(34304);function Nt(e){var o,t,n;let{menu:r,activeCategory:a,showPopup:l,searchText:s,carouselPosition:d,setcarouselPosition:c,setactiveCategory:p,categories:u}=e;const[h,x]=(0,i.useState)(null),[g,m]=(0,Y.ok)(),{restaurantName:f}=(0,y.g)(),b=window.location.hostname.split(".")[0],w="menugic"!==b&&"localhost"!==b&&"www"!==b?b:f,j=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[w].activeLanguage})),$=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[w]})),A=(0,v.wA)(),[k,z]=(0,i.useState)((()=>new Set)),S=(0,i.useCallback)((async()=>{const e=(0,Ne.wU)(w);if(e)try{const{data:o}=await J.A.get(Ee.Vb,{headers:{Authorization:`Bearer ${e}`}}),t=(Array.isArray(o)?o:[]).map((e=>e.id));z(new Set(t))}catch{z(new Set)}else z(new Set)}),[w]);(0,i.useEffect)((()=>{S()}),[S]);const[L,_]=(0,i.useState)([]),[T,I]=(0,i.useState)([]),E=(0,i.useRef)(),N=(0,i.useRef)(),P="all-items"===a,F=(null===$||void 0===$?void 0:$.all_items_style)||"grid",D=a&&!P?String(a):null,{data:R,fetchNextPage:O,hasNextPage:B,isFetchingNextPage:U}=(0,_t.w)(D),{data:q,fetchNextPage:M,hasNextPage:W,isFetchingNextPage:H}=(0,Tt.u)(P?null===$||void 0===$?void 0:$.id:null),V=(null===q||void 0===q||null===(o=q.pages)||void 0===o?void 0:o.flat())||[],X=()=>{const e=null===T||void 0===T?void 0:T.map((e=>{if(e.current){var o;const t=null===(o=e.current)||void 0===o?void 0:o.getBoundingClientRect();return{x:t.left,y:t.top,width:t.width}}return null}));_(e)};(0,i.useEffect)((()=>{g.get("productId")&&x(null)}),[g]),(0,i.useEffect)((()=>{X()}),[T]),(0,i.useEffect)((()=>{var e;if(r&&null!==a&&(null===R||void 0===R||null===(e=R.pages)||void 0===e?void 0:e.flat().length)>0){var o,t;const e=null===R||void 0===R||null===(o=R.pages)||void 0===o||null===(t=o.flat())||void 0===t?void 0:t.filter((e=>(e["en"===j?"en_name":"ar_name"]||e.en_name||e.ar_name||"").toLowerCase().includes(s.toLowerCase()))).map((()=>i.createRef()));I(e)}}),[r,a,s,R]),(0,i.useEffect)((()=>{const e=()=>{X()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[T]),(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&B&&!U&&O()}),{threshold:.1});return E.current&&e.observe(E.current),()=>{E.current&&e.unobserve(E.current)}}),[B,U,O]),(0,i.useEffect)((()=>{if(!P)return;const e=new IntersectionObserver((e=>{e[0].isIntersecting&&W&&!H&&M()}),{threshold:.2});return N.current&&e.observe(N.current),()=>{N.current&&e.unobserve(N.current)}}),[M,W,P,H]);const xe=(null===R||void 0===R||null===(t=R.pages)||void 0===t||null===(n=t.flat())||void 0===n?void 0:n.filter((e=>!(Boolean(null===e||void 0===e?void 0:e.hide)||1===Number(null===e||void 0===e?void 0:e.hide))&&(e["en"===j?"en_name":"ar_name"]||e.en_name||e.ar_name||"").toLowerCase().includes(s.toLowerCase()))))||[],ge=i.useMemo((()=>{if(!P)return[];return(u||[]).filter((e=>!e.isAllItems)).sort(((e,o)=>(o.priority||0)-(e.priority||0)||(e.id||0)-(o.id||0))).map((e=>{const o=V.filter((o=>{if(Boolean(null===o||void 0===o?void 0:o.hide)||1===Number(null===o||void 0===o?void 0:o.hide))return!1;if(o.category_id!=e.id)return!1;const t=o["en"===j?"en_name":"ar_name"]||"";return!s||function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase().includes(s.toLowerCase())}(t)})).sort(((e,o)=>(o.priority||0)-(e.priority||0)||(e.id||0)-(o.id||0)));return{category:e,items:o}})).filter((e=>e.items.length>0))}),[j,V,u,P,s]);console.log(xe);const[me,fe]=(0,i.useState)(d),[ve,ye]=(0,i.useState)(!1),[be,we]=(0,i.useState)(u.length<4?3:4);(0,i.useRef)(0),(0,i.useRef)(0);return(0,i.useEffect)((()=>{fe(u.findIndex((e=>e.id==a)))}),[a]),(0,i.useEffect)((()=>{P&&x(null)}),[P]),(0,C.jsx)(K,{activeCategory:a,children:P?(0,C.jsxs)(Z,{children:[ge.map((e=>(0,C.jsxs)(G,{children:[(0,C.jsx)(ee,{activeLanguage:j,children:"en"===j?e.category.en_category:e.category.ar_category}),"list"===F?(0,C.jsx)(ae,{children:e.items.map(((e,o)=>{var t,i,n,r;const a=u.find((o=>o.id==e.category_id));let l;l=a&&0!==parseFloat(a.discount||0)?parseFloat(a.discount||0):parseFloat(e.discount||0);const s=0!==l?parseFloat(e.en_price)*(1-parseFloat(l)/100):parseFloat(e.en_price),d=(0,De.Q)(null===$||void 0===$?void 0:$.currency),c=null!==(t=null===(i=e.images)||void 0===i?void 0:i.findIndex((o=>o.id==e.new_cover_id)))&&void 0!==t?t:0,p=null===(n=e.images)||void 0===n||null===(r=n[c])||void 0===r?void 0:r.url,h=JSON.parse((null===$||void 0===$?void 0:$.features)||"{}"),x=Boolean(null===e||void 0===e?void 0:e.out_of_stock)||1===Number(null===e||void 0===e?void 0:e.out_of_stock),f=!Et.isEmpty(null===e||void 0===e?void 0:e.form_json)&&!Et.isEmpty(JSON.parse((null===e||void 0===e?void 0:e.form_json)||"{}")),v=!Et.isEmpty(null===a||void 0===a?void 0:a.form_json)&&!Et.isEmpty(JSON.parse((null===a||void 0===a?void 0:a.form_json)||"{}")),y=f||v,b=o=>{if(o.preventDefault(),o.stopPropagation(),null===h||void 0===h||!h.cart||x)return;if(y){const o=new URLSearchParams(g);return o.set("productId",e.id),o.set("categoryId","all-items"),m(o),window.history.pushState({},"",`?${o.toString()}`),void(document.body.style.overflow="hidden")}const t=parseFloat((null===e||void 0===e?void 0:e.en_price)||"0")*(1-parseFloat(l)/100);A((0,Ie.bE)(w,e,1,{},t,"")),It.oR.success("en"===j?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629")};return(0,C.jsxs)(he,{children:[(0,C.jsxs)(le,{onClick:()=>{const o=new URLSearchParams(g);o.set("productId",e.id),o.set("categoryId","all-items"),m(o),window.history.pushState({},"",`?${o.toString()}`),document.body.style.overflow="hidden"},style:{cursor:"pointer"},children:[(0,C.jsx)(se,{children:p&&(0,C.jsx)("img",{src:(0,Te.V)(p),alt:"en"===j?e.en_name:e.ar_name})}),(0,C.jsxs)(de,{activeLanguage:j,children:[(0,C.jsx)(ce,{children:"en"===j?e.en_name:e.ar_name}),e.en_price&&(0,C.jsxs)(pe,{activeLanguage:j,children:[0!==l&&(0,C.jsx)(ue,{children:(0,_e.T)(parseFloat(e.en_price),d)}),(0,C.jsx)("span",{children:(0,_e.T)(s,d)})]})]})]}),(null===h||void 0===h?void 0:h.cart)&&(x?(0,C.jsx)(re,{activeLanguage:j,children:"en"===j?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,C.jsx)(ne,{type:"button",onClick:b,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),b(e)},activeLanguage:j,title:"en"===j?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,C.jsx)(Fe._xK,{size:12})}))]},e.id)}))}):(0,C.jsx)(Q,{$noMinHeight:!0,children:e.items.map(((o,t)=>(0,C.jsx)(Be,{index:t,plate:o,activePlate:null,setactivePlate:x,showPopup:l,setSearchParams:m,searchParams:g,activeCategoryId:e.category.id,categories:u,disableDetails:!1,wishlistIds:k,onWishlistChange:S},o.id)))})]},e.category.id))),W&&(0,C.jsx)("div",{ref:N,style:{height:"40px"}}),H&&(0,C.jsx)(oe,{children:(0,C.jsxs)(te,{children:[(0,C.jsx)(ie,{}),"en"===j?"Loading more...":"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f..."]})})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Q,{activePlate:h,children:[null===r||void 0===r?void 0:r.map(((e,o)=>{if(a==e.id)return(0,C.jsx)(C.Fragment,{children:xe.map(((e,o)=>(0,C.jsx)(Be,{index:o,plate:e,activePlate:h,setactivePlate:x,ref:T[o],showPopup:l,setSearchParams:m,searchParams:g,activeCategoryId:a,categories:u,wishlistIds:k,onWishlistChange:S})))})})),(0,C.jsx)("div",{ref:E,style:{height:"20px"}})]}),null!==h&&!g.get("productId")&&(0,C.jsx)(Lt,{menu:null===r||void 0===r?void 0:r.find((e=>e.id===a)),activePlate:h,setactivePlate:x,plates:xe,productPositions:L,activeCategoryId:a,categories:u,setSearchParams:m,searchParams:g})]})})}var Pt=t(76143);const Ft=n.Ay.div`
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
`,Dt=(n.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`,n.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`),Rt=n.Ay.span`
width: 90%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 10vh;
`,Ot=n.Ay.div`
  margin-top: 30px;
width: 90%;
  display: flex;
  flex-direction: column;
`,Bt=(n.Ay.div`
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
`,(0,n.Ay)(qe.IW4)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,n.Ay)(b.gwi)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,n.Ay)(qe.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`),Ut=n.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
font-weight: bold;

`,qt=n.Ay.div`
width: 90%;
margin-top: 10px;

`,Mt=n.Ay.div`
margin-top: 10px;
display: flex;
flex-direction: row;
width: 90%;
align-items: center;
gap:10px;
`,Wt=n.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,Ht=(n.Ay.a`
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
`),Vt=n.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,Xt=(0,n.Ay)(Fe.ok6)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};
`,Yt=((0,n.Ay)(qe._8j)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};


`,(0,n.Ay)(Fe.ao$)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`),Jt=(0,n.Ay)(Pt.mk3)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`,Kt=n.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,Qt=n.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,Zt=(0,n.Ay)(b.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`,Gt=n.Ay.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 90%;
height: 50px;
gap:25px;
margin-top: 30px;
`,ei=n.Ay.button`
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
`,oi=n.i7`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,ti=n.Ay.div`
position: absolute;
width:10%;
height: 50%;
background-color:${e=>"Call"==e.activeButton?e.theme.mainColor:e.theme.popupbackgroundColor} ;
 left: 0;
 z-index: 5;

 `,ii=n.Ay.div`
position: absolute;
width:1px;
height: 100%;
background-color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 right: 0;
 animation: ${oi} 0.5s ease-in-out infinite; /* Infinite animation */

 `,ni=n.i7`
  0% {
opacity: 0;
left: -10%;
  }
  100% {
opacity: 1;
left: 16%;

  }

`,ri=n.Ay.span`
position: absolute;
 left: 16%;
 color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 animation: ${ni} 0.5s ease-in-out;
 z-index: 4;

 `,ai=n.i7`
  0% {
    opacity: 0;
    rotate: calc(180deg);
  }
  1000% {
    opacity: 1;
    rotate: calc(0deg);

  }
 
`,li=(0,n.Ay)(qe.pte)`
color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
font-size: 15px;
position: absolute;
right: 5%;
animation: ${ai} 0.7s ease-in-out;

`,si=n.i7`
  0% {
    max-height: 0px;
  }
  1000% {
    max-height: 300px;


  }
 
`,di=n.Ay.ul`
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
  animation: ${si} 1s ease-in-out;
  overflow: hidden;

`,ci=n.Ay.li`
  cursor: pointer;
  transition: background 0.2s;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;

`,pi=n.Ay.button`
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
`,ui=n.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 18px;
font-weight: bold;

`,hi=n.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`,xi=n.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
`,gi=n.Ay.div`
  display: flex;
  flex-direction: row;
  width: 15px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${e=>e.theme.mainColor};
`,mi=(n.Ay.div`
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

 `),fi=n.Ay.div`
 width: 15px;
 height: 45px;
 top: 25px;
 position: absolute;
 left: 0;
 display: flex;
 justify-content: center;
 `,vi=n.Ay.div`
 width: 2px;
 height: 100%;
 background-color: ${e=>e.theme.popupTextColor};
 opacity: 0.5;
 `;var yi=t(72599),bi=t(67059);function wi(e){var o,t,n,a;let{restaurant:l,showPopup:s,popupHandler:d}=e;const{restaurantName:c}=(0,y.g)(),p=window.location.hostname.split(".")[0],u="menugic"!==p&&"localhost"!==p&&"www"!==p?p:c,h=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[u].activeLanguage})),[x,g]=(0,i.useState)("");return(0,i.useEffect)((()=>{const e=()=>{d(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,C.jsxs)(Ft,{showPopup:s,children:[(0,C.jsx)(Bt,{onClick:()=>{d(null)}}),(0,C.jsx)(Rt,{children:(0,C.jsx)(Dt,{children:(m=null===l||void 0===l?void 0:l.name,m.replace(/\b\w/g,(function(e){return e.toUpperCase()})))})}),(0,C.jsxs)(Gt,{children:[(0,C.jsx)(ei,{activeButton:x,onClick:()=>{g("Call"==x?"":"Call")},children:"Call"!==x?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(yi._Xz,{size:"25px"}),"en"==h?"Call Now":"\u0627\u062a\u0635\u0644 \u0627\u0644\u0627\u0646"]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(di,{activeButton:x,children:null===l||void 0===l||null===(o=l.branches)||void 0===o?void 0:o.flatMap((e=>e.phone_number.split(" ").map(((o,t)=>(0,C.jsx)(ci,{children:(0,C.jsxs)("a",{href:`tel:${o}`,style:{textDecoration:"none",color:"inherit"},children:[o,"  ",e.location&&(0,C.jsxs)("span",{children:["- ",e.name," "]})]})})))))}),(0,C.jsx)(ti,{activeButton:x,children:(0,C.jsx)(ii,{activeButton:x})}),(0,C.jsx)(ri,{activeButton:x,children:"en"==h?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,C.jsx)(li,{activeButton:x})]})}),(0,C.jsx)(pi,{activeButton:x,onClick:()=>{g("Message"==x?"":"Message")},children:"Message"!==x?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Fe.EcP,{size:"25px"}),"en"==h?"Message":"\u0631\u0633\u0627\u0644\u0629","            "]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(di,{activeButton:x,children:null===l||void 0===l||null===(t=l.branches)||void 0===t?void 0:t.map((e=>(0,C.jsx)(ci,{children:(0,C.jsxs)("a",{href:`https://wa.me/${(0,bi.JW)(null===e||void 0===e?void 0:e.whatsapp_number,null===l||void 0===l?void 0:l.country_code)}`,style:{textDecoration:"none",color:"inherit"},children:[null===e||void 0===e?void 0:e.whatsapp_number,"-",null===e||void 0===e?void 0:e.name]})})))}),(0,C.jsx)(ti,{activeButton:x,children:(0,C.jsx)(ii,{activeButton:x})}),(0,C.jsx)(ri,{activeButton:x,children:"en"==h?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,C.jsx)(li,{activeButton:x})]})})]}),(0,C.jsxs)(Ot,{children:[(null===l||void 0===l||null===(n=l.branches)||void 0===n?void 0:n.name)&&(0,C.jsx)(ui,{children:"Branches"}),(0,C.jsx)(hi,{children:null===l||void 0===l||null===(a=l.branches)||void 0===a?void 0:a.map(((e,o)=>{var t;return e.name&&(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(xi,{children:[o!==(null===l||void 0===l||null===(t=l.branches)||void 0===t?void 0:t.length)-1&&(0,C.jsx)(fi,{index:o,children:(0,C.jsx)(vi,{})}),(0,C.jsx)(gi,{children:(0,C.jsx)(r.sIY,{})}),(0,C.jsx)(mi,{href:`https://${null===e||void 0===e?void 0:e.mapLink}`,children:e.location})]})})}))})]}),(0,C.jsx)(qt,{children:(0,C.jsx)(Ut,{children:"en"==h?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"})}),(0,C.jsxs)(Mt,{children:[l.socialMedia.find((e=>"Instagram"==e.platform))&&(0,C.jsx)(Wt,{href:`https://${l.socialMedia.find((e=>"Instagram"==e.platform)).link}`,children:(0,C.jsx)(Yt,{})}),l.socialMedia.find((e=>"Facebook"==e.platform))&&(0,C.jsx)(Vt,{href:`https://${l.socialMedia.find((e=>"Facebook"==e.platform)).link}`,children:(0,C.jsx)(Xt,{})}),l.socialMedia.find((e=>"Tiktok"==e.platform))&&(0,C.jsx)(Ht,{href:`https://${l.socialMedia.find((e=>"Tiktok"==e.platform)).link}`,children:(0,C.jsx)(Jt,{})})]}),(0,C.jsxs)(Kt,{children:["Copyright",(0,C.jsx)(Zt,{})," ",(new Date).getFullYear()," "," ",(0,C.jsx)(Qt,{href:"https://www.menugic.com",children:"menugic.com"})]})]});var m}const Ci=n.Ay.div`
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
`,ji=((0,n.Ay)(qe.WQq)`
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

`,(0,n.Ay)(b.pS_)`
font-size: 15px;
position: absolute;
top: 0px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`;var $i=t(29334),Ai=t(50074);const ki=n.i7`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,zi=n.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Si=n.Ay.div`
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
`,Li=n.Ay.div`
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
  animation: ${ki} 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`,_i=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`,Ti=n.Ay.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Ii=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`,Ei=n.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ni=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`,Pi=n.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  white-space: nowrap;
`,Fi=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}12`};
  padding: 3px 5px;
  border-radius: 20px;
`,Di=n.Ay.button`
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
`,Ri=n.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  min-width: 20px;
  text-align: center;
`,Oi=n.Ay.button`
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
`,Bi=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,Ui="\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 2px 8px;\n  line-height: 1.5;\n  white-space: nowrap;\n",qi=n.Ay.span`
  ${Ui}
  border: 1px solid ${e=>`${e.theme.popupTextColor||"#1a1a1a"}50`};
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  background: transparent;
`,Mi=n.Ay.span`
  ${Ui}
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}18`};
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}35`};
`,Wi=n.Ay.span`
  ${Ui}
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  border: 1px dashed ${e=>`${e.theme.popupTextColor||"#999"}40`};
  opacity: 0.65;
  text-decoration: line-through;
`,Hi=n.Ay.div`
  font-size: 10px;
  font-style: italic;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Vi=n.Ay.div`
  font-size: 10px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.75;
  line-height: 1.5;
`,Xi=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}10`};
  border-radius: 12px;
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  margin-top: 4px;
`,Yi=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ji=n.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  opacity: 0.75;
`,Ki=n.Ay.div`
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
`,Qi=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.6;
  text-align: center;
`,Zi=["Size:","\u0627\u0644\u062d\u062c\u0645:"],Gi=["Add ons:","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:"],en=["Remove:","\u0628\u062f\u0648\u0646:"];function on(e){let{restaurant:o,activeLanguage:t}=e;const i=(0,v.wA)(),{restaurantName:n}=(0,y.g)(),r=window.location.hostname.split(".")[0],a="menugic"!==r&&"localhost"!==r&&"www"!==r?r:n,l=(0,v.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,o)=>e+o.price*o.quantity),0),d="ar"===t?"ar":"en",c=e=>{const o=(0,Ai.qh)(e,d);if(!o.length)return null;const{sizeLabel:t,addonLabels:i,removalLabels:n,legacyLines:r}=function(e){const o={sizeLabel:null,addonLabels:[],removalLabels:[],legacyLines:[]};let t=null;for(const i of e)"heading"===i.type?t=Zi.includes(i.text)?"size":Gi.includes(i.text)?"addons":en.includes(i.text)?"removals":"legacy":"size"===t?o.sizeLabel=i.text:"addons"===t?o.addonLabels.push(i.text):"removals"===t?o.removalLabels.push(i.text):o.legacyLines.push(i.text);return o}(o),a=t||i.length||n.length;return(0,C.jsxs)(C.Fragment,{children:[a&&(0,C.jsxs)(Bi,{children:[t&&(0,C.jsx)(qi,{children:"ar"===d?`\u0627\u0644\u062d\u062c\u0645: ${t}`:`Size: ${t}`}),i.map((e=>(0,C.jsxs)(Mi,{children:["+ ",e]},e))),n.map((e=>(0,C.jsx)(Wi,{children:e},e)))]}),r.map(((e,o)=>(0,C.jsx)(Vi,{children:e},o)))]})},p=(0,De.Q)(null===o||void 0===o?void 0:o.currency);if(0===l.length)return(0,C.jsx)(zi,{children:(0,C.jsx)(Qi,{children:"ar"===d?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"})});const u=e=>{var o;const t=null===(o=e.images)||void 0===o?void 0:o[0];return t&&t.url?(0,Te.V)(t.url):""};return(0,C.jsx)(zi,{children:(0,C.jsxs)(Si,{children:[l.map((e=>{const o="ar"===d?e.ar_name:e.en_name,t=(0,_e.T)(e.price*e.quantity,p);return(0,C.jsx)(Li,{children:(0,C.jsxs)(_i,{children:[(0,C.jsx)(Ti,{src:u(e),alt:o}),(0,C.jsxs)(Ii,{children:[(0,C.jsx)(Ei,{title:o,children:o}),c(e),e.instruction&&(0,C.jsxs)(Hi,{children:["\ud83d\udcdd ",e.instruction]})]}),(0,C.jsxs)(Ni,{children:[(0,C.jsx)(Pi,{children:t}),(0,C.jsxs)(Fi,{children:[(0,C.jsx)(Di,{onClick:()=>{return o=e.uniqueId,void((t=e.quantity)>1&&i((0,Ie.v)(a,o,t-1)));var o,t},disabled:e.quantity<=1,"aria-label":"decrease quantity",children:"\u2212"}),(0,C.jsx)(Ri,{children:e.quantity}),(0,C.jsx)(Di,{onClick:()=>{return o=e.uniqueId,t=e.quantity,i((0,Ie.v)(a,o,t+1));var o,t},"aria-label":"increase quantity",children:"+"})]}),(0,C.jsx)(Oi,{onClick:()=>{return o=e.uniqueId,i((0,Ie.dt)(a,o));var o},"aria-label":"remove item",children:(0,C.jsx)(Fe.qbC,{})})]})]})},e.uniqueId)})),(0,C.jsx)(Xi,{children:(0,C.jsxs)(Yi,{children:[(0,C.jsx)(Ji,{children:"ar"===d?"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a":"Total"}),(0,C.jsx)(Ki,{children:(0,_e.T)(s,p)})]})})]})})}var tn=t(13491);const nn=n.Ay.div`
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

`;function rn(e){let{deliveryType:o,branches:t,selectedBranch:i,setSelectedBranch:r,setErrors:a,errors:l}=e;const s=(0,n.DP)(),d=(t||[]).map((e=>({value:e.id,label:e.name,branch:e,isDisabled:!e.has_delivery&&"Delivery"===o}))),c={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==l&&void 0!==l&&l.branch?"rgba(255, 68, 68, 0.1)":s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:o.isDisabled?"#999":s.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?s.categoryUnActive||"#ffffff":o.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent",cursor:o.isDisabled?"not-allowed":"pointer",display:"flex",justifyContent:"space-between"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,C.jsx)(nn,{children:(0,C.jsx)(tn.Ay,{value:d.find((e=>{var o;return(null===(o=e.branch)||void 0===o?void 0:o.id)===(null===i||void 0===i?void 0:i.id)})),onChange:e=>{e&&!e.isDisabled&&(r(e.branch),a({...l,branch:""}))},options:d,placeholder:"Select Branch",isOptionDisabled:e=>e.isDisabled,styles:c,formatOptionLabel:e=>(0,C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,C.jsx)("span",{children:e.label}),e.isDisabled&&"Delivery"===o&&(0,C.jsx)("span",{style:{fontSize:12,color:"#999"},children:"No Delivery"})]}),menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})})}const an=n.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`,ln=(n.Ay.div`
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
`),sn=n.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`,dn=n.Ay.input`
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
`,cn=(0,n.Ay)(c.Xj1)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.mainColor};

`,pn=n.i7`
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
  animation: ${pn} 1s linear infinite; /* Apply animation */
`;var un=t(89993);function hn(e){var o;let{selectedBranch:t,selectedRegion:r,onRegionChange:a,setErrors:l,errors:s,onRegionsChange:d}=e;const c=(0,n.DP)(),[p,u]=(0,i.useState)(!1),[h,x]=(0,i.useState)(""),{response:g,isLoading:m}=(0,un.w)({branch_id:t.id,onSuccess:()=>{}});(0,i.useEffect)((()=>{var e;m||d((null===g||void 0===g||null===(e=g.data)||void 0===e?void 0:e.regions)||[])}),[m,g,d]),(0,i.useEffect)((()=>{a("")}),[t,a]);const f=((null===g||void 0===g||null===(o=g.data)||void 0===o?void 0:o.regions)||[]).map((e=>({value:e.region_name,label:e.region_name}))),v=f.filter((e=>e.label.toLowerCase().includes(h.toLowerCase()))),y={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==s&&void 0!==s&&s.region?"rgba(255, 68, 68, 0.1)":c.mainColor?`${c.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:c.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:c.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:c.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:c.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:c.categoryUnActive||"#ffffff",border:`1px solid ${c.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:c.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?c.categoryUnActive||"#ffffff":o.isFocused?c.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return!m&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(an,{children:(0,C.jsx)(tn.Ay,{value:f.find((e=>e.value===r)),onMenuOpen:()=>u(!0),onMenuClose:()=>u(!1),onChange:e=>{a((null===e||void 0===e?void 0:e.value)||""),x(""),l({...s,region:""})},options:v,placeholder:"Select Region",styles:y,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})}),p&&(0,C.jsx)(ln,{children:(0,C.jsxs)(sn,{children:[(0,C.jsx)(dn,{placeholder:"Search",value:h,onChange:e=>{x(e.target.value)}}),(0,C.jsx)(cn,{})]})})]})}const xn=n.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,gn=n.Ay.div`
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
`,mn=n.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,fn=n.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,vn=(n.Ay.select`
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
`);function yn(e){var o,t;let{formData:i,updateFormData:r,restaurant:a,errors:l,setErrors:s}=e;const d=(0,n.DP)();let c={};try{c=JSON.parse((null===a||void 0===a?void 0:a.features)||"{}")}catch(h){c={}}const p=[c.delivery_order&&{value:"Delivery",label:"Delivery"},c.takeaway_order&&{value:"TakeAway",label:"Take Away"},c.dinein_order&&{value:"DineIn",label:"Dine In"}].filter(Boolean),u={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(l.deliveryType?"rgba(255, 68, 68, 0.1)":d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?d.categoryUnActive||"#ffffff":o.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,C.jsxs)(xn,{children:[(0,C.jsx)(mn,{children:"Select Order Type"}),(0,C.jsx)(fn,{children:"Choose how you would like to receive your order"}),(0,C.jsxs)(gn,{children:[(0,C.jsx)(tn.Ay,{value:p.find((e=>e.value===i.deliveryType)),onChange:e=>{var o;r({deliveryType:(null===e||void 0===e?void 0:e.value)||"",selectedBranch:(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o[0])||null,selectedRegion:""}),s({})},options:p,placeholder:"Select Order Type",isSearchable:!1,styles:u,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"}),l.deliveryType&&(0,C.jsx)(vn,{children:l.deliveryType})]}),(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.length)>0&&!(()=>{var e;return null===a||void 0===a||null===(e=a.branches)||void 0===e?void 0:e.some((e=>e.is_online))})()&&(0,C.jsxs)(gn,{children:[(0,C.jsx)(rn,{deliveryType:i.deliveryType,branches:null===a||void 0===a?void 0:a.branches,selectedBranch:i.selectedBranch,setSelectedBranch:e=>r({selectedBranch:e,selectedRegion:""}),setErrors:s,errors:l}),l.branch&&(0,C.jsx)(vn,{children:l.branch})]}),i.selectedBranch&&"Delivery"===i.deliveryType&&Array.isArray(i.regions)&&i.regions.length>0&&(0,C.jsxs)(gn,{children:[(0,C.jsx)(hn,{selectedRegion:i.selectedRegion,onRegionChange:e=>r({selectedRegion:e}),selectedBranch:1===(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)?null===a||void 0===a?void 0:a.branches[0]:i.selectedBranch,setErrors:s,errors:l,onRegionsChange:e=>r({regions:e})}),l.region&&(0,C.jsx)(vn,{children:l.region})]})]})}var bn=t(16106);const wn=n.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Cn=n.Ay.button`
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
`,jn=n.Ay.div`
  padding: 16px;
  background: ${e=>e.theme.categoryUnActive||"#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$n=n.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,An=n.Ay.div`
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  word-break: break-all;
`,kn=n.Ay.a`
  font-size: 14px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-decoration: none;
  font-weight: 600;
  margin-top: 4px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`,zn=n.Ay.div`
  color: #ff4444;
  font-size: 13px;
  margin-top: -8px;
`;function Sn(e){let{onLocationSelect:o,selectedLocation:t,hasError:i,googleMapsApiKey:r,activeLanguage:a="en"}=e;const l=(0,n.DP)();return r?(0,C.jsx)(bn.A,{apiKey:r,onLocationConfirm:o,selectedLocation:t,hasError:i,theme:l,activeLanguage:a}):(0,C.jsx)(Ln,{onLocationSelect:o,selectedLocation:t,hasError:i})}function Ln(e){let{onLocationSelect:o,selectedLocation:t,hasError:n}=e;const[r,a]=(0,i.useState)(!1),[l,s]=(0,i.useState)("");return(0,C.jsxs)(wn,{children:[(0,C.jsxs)(Cn,{type:"button",onClick:()=>{navigator.geolocation?(a(!0),s(""),navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:i}=e.coords,n={latitude:t,longitude:i,address:`${t.toFixed(6)}, ${i.toFixed(6)}`};o(n),a(!1)}),(()=>{s("Unable to retrieve your location. Please try again."),a(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):s("Geolocation is not supported by your browser")},disabled:r,variant:"current",children:[(0,C.jsx)(Fe.hO$,{}),r?"Getting Location...":"Use Current Location"]}),(0,C.jsxs)(Cn,{type:"button",onClick:()=>{if(t){const e=`https://www.google.com/maps?q=${t.latitude},${t.longitude}`;window.open(e,"_blank")}else{const e="https://www.google.com/maps/search/?api=1";window.open(e,"_blank")}},variant:"select",children:[(0,C.jsx)(Fe.vq8,{}),t?"View on Map":"Select on Map"]}),t&&(0,C.jsxs)(jn,{children:[(0,C.jsx)($n,{children:"Selected Location:"}),(0,C.jsx)(An,{children:t.address||`${t.latitude}, ${t.longitude}`}),t.latitude&&t.longitude&&(0,C.jsx)(kn,{href:`https://www.google.com/maps?q=${t.latitude},${t.longitude}`,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]}),l&&(0,C.jsx)(zn,{children:l}),n&&!t&&(0,C.jsx)(zn,{children:"Please select a location"})]})}const _n=n.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`,Tn=n.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,In=n.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,En=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 0;
  position: relative;
`,Nn=n.Ay.label`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Pn=n.Ay.input`
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
`,Fn=n.Ay.textarea`
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
`,Dn=n.Ay.span`
  color: #ff4444;
  font-size: 12px;
  display: block;
`,Rn=n.Ay.p`
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.85;
`;function On(e){let{formData:o,updateFormData:t,errors:r,restaurantName:a,restaurant:l,activeLanguage:s="en"}=e;const d=(0,n.DP)(),[c,p]=(0,i.useState)([]),[u,h]=(0,i.useState)(!1),x=(0,i.useRef)(!1),g=(e,o)=>"ar"===s?o:e,m=(0,i.useMemo)((()=>{try{return null!==l&&void 0!==l&&l.features?JSON.parse(l.features):{}}catch{return{}}}),[null===l||void 0===l?void 0:l.features]).google_maps_integrated&&(null===l||void 0===l?void 0:l.google_maps_api_key)||null,f=(0,i.useMemo)((()=>({control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:d.mainColor||d.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?d.categoryUnActive||"#ffffff":o.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})})),[d]),v=(0,i.useMemo)((()=>[{value:"__manual__",label:0===c.length?g("No saved addresses \u2014 type below","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u2014 \u0627\u0643\u062a\u0628 \u0623\u062f\u0646\u0627\u0647"):g("Type address manually","\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u062f\u0648\u064a\u0627\u064b")},...c.map((e=>({value:String(e.id),label:`${e.label||g("Address","\u0639\u0646\u0648\u0627\u0646")}${e.is_default?` (${g("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")})`:""} \u2014 ${e.full_address.length>56?`${e.full_address.slice(0,56)}\u2026`:e.full_address}`})))]),[c,s]),y=(0,i.useMemo)((()=>{if(null==o.selectedAddressId)return v[0]||null;const e=String(o.selectedAddressId);return v.find((o=>o.value===e))||v[0]||null}),[v,o.selectedAddressId]);(0,i.useEffect)((()=>{if("Delivery"!==o.deliveryType||!a)return void p([]);const e=(0,Ne.wU)(a);if(!e)return void p([]);let t=!1;return h(!0),J.A.get(Ee.Qf,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:o}=e;t||p(o.addresses||[])})).catch((()=>{t||p([])})).finally((()=>{t||h(!1)})),()=>{t=!0}}),[o.deliveryType,a]),(0,i.useEffect)((()=>{"Delivery"!==o.deliveryType&&(x.current=!1)}),[o.deliveryType]),(0,i.useEffect)((()=>{if("Delivery"!==o.deliveryType)return;if(!c.length||x.current)return;const e=c.find((e=>e.is_default));e&&!String(o.fullAddress||"").trim()&&(x.current=!0,t({selectedAddressId:e.id,fullAddress:e.full_address}))}),[c,o.deliveryType,o.fullAddress,t]);const b=e=>{const{name:o,value:i}=e.target;t("fullAddress"!==o?{[o]:i}:{[o]:i,selectedAddressId:null})};return(0,C.jsxs)(_n,{children:[(0,C.jsx)(Tn,{children:g("Your Information","\u0628\u064a\u0627\u0646\u0627\u062a\u0643")}),(0,C.jsx)(In,{children:g("Please provide your contact details to complete the order","\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628")}),(0,C.jsxs)(En,{children:[(0,C.jsx)(Nn,{children:g("Full Name *","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,C.jsx)(Pn,{type:"text",name:"fullName",value:o.fullName,onChange:b,placeholder:g("Enter your full name","\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644"),hasError:!!r.fullName}),r.fullName&&(0,C.jsx)(Dn,{children:r.fullName})]}),(0,C.jsxs)(En,{children:[(0,C.jsx)(Nn,{children:g("Phone Number *","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 *")}),(0,C.jsx)(Pn,{type:"tel",name:"phoneNumber",value:o.phoneNumber,onChange:b,placeholder:g("Enter your phone number","\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643"),hasError:!!r.phoneNumber}),r.phoneNumber&&(0,C.jsx)(Dn,{children:r.phoneNumber})]}),"Delivery"===o.deliveryType&&(0,C.jsxs)(C.Fragment,{children:[(0,Ne.wU)(a)&&(0,C.jsxs)(En,{children:[(0,C.jsxs)(Nn,{children:[g("Saved address","\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0641\u0648\u0638"),u?` (${g("loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")})`:""]}),(0,C.jsx)(gn,{children:(0,C.jsx)(tn.Ay,{value:y,onChange:e=>{if(!e||"__manual__"===e.value)return void t({selectedAddressId:null});const o=parseInt(e.value,10),i=c.find((e=>e.id===o));i&&t({selectedAddressId:o,fullAddress:i.full_address})},options:v,isSearchable:!1,isDisabled:u,styles:f,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed",isRtl:"ar"===s})}),(0,C.jsx)(Rn,{children:g("Add or edit addresses from the account menu (person icon) \u2192 Addresses.","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062d\u0633\u0627\u0628 (\u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0634\u062e\u0635) \u2190 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646.")})]}),m&&(0,C.jsxs)(En,{children:[(0,C.jsx)(Nn,{children:g("Delivery Location *","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 *")}),(0,C.jsx)(Sn,{onLocationSelect:e=>{t({selectedLocation:e,fullAddress:e.address||`${e.latitude}, ${e.longitude}`})},selectedLocation:o.selectedLocation,hasError:!!r.fullAddress&&!o.selectedLocation,googleMapsApiKey:m,activeLanguage:s})]}),(0,C.jsxs)(En,{children:[(0,C.jsx)(Nn,{children:g("Full Address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,C.jsx)(Fn,{name:"fullAddress",value:o.fullAddress,onChange:b,placeholder:g("Enter your delivery address","\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),hasError:!!r.fullAddress,rows:"3"}),r.fullAddress&&(0,C.jsx)(Dn,{children:r.fullAddress})]})]}),"DineIn"===o.deliveryType&&(0,C.jsxs)(En,{children:[(0,C.jsx)(Nn,{children:g("Table Number *","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 *")}),(0,C.jsx)(Pn,{type:"number",name:"tableNumber",value:o.tableNumber,onChange:b,placeholder:g("Enter table number","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629"),hasError:!!r.tableNumber}),r.tableNumber&&(0,C.jsx)(Dn,{children:r.tableNumber})]}),(0,C.jsxs)(En,{children:[(0,C.jsx)(Nn,{children:g("Special Notes (Optional)","\u0645\u0644\u0627\u062d\u0638\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,C.jsx)(Fn,{name:"note",value:o.note,onChange:b,placeholder:g("Any special instructions or notes\u2026","\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u2026"),rows:"3"})]})]})}const Bn=n.Ay.div`
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
`,Un=n.Ay.div`
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,qn=n.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 12px;
`,Mn=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  gap: 12px;
`,Wn=n.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#666"};
  flex: 1;
`,Hn=n.Ay.div`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  text-align: right;
  flex: 1;
  word-break: break-word;
`,Vn=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,Xn=n.Ay.div`
  padding: 8px 0;
`,Yn=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,Jn=n.Ay.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`,Kn=n.Ay.div`
  height: 1px;
  background: ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  margin: 12px 0;
`,Qn=n.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-align: right;
`;function Zn(e){let{formData:o,restaurant:t,activeLanguage:i}=e;const{restaurantName:n}=(0,y.g)(),r=window.location.hostname.split(".")[0],a="menugic"!==r&&"localhost"!==r&&"www"!==r?r:n,l=(0,v.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,o)=>e+o.price*o.quantity),0),d=(0,De.Q)(null===t||void 0===t?void 0:t.currency);return(0,C.jsxs)(Bn,{children:[(0,C.jsx)(qn,{children:"Review Your Order"}),(0,C.jsxs)(Un,{children:[(0,C.jsx)(qn,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Items"}),(0,C.jsx)(Vn,{children:l.map((e=>{var o,t;return(0,C.jsx)(Xn,{children:(0,C.jsxs)(Yn,{children:[(0,C.jsx)(Jn,{src:(0,Te.V)(null===(o=e.images)||void 0===o||null===(t=o[0])||void 0===t?void 0:t.url),alt:"en"===i?e.en_name:e.ar_name}),(0,C.jsxs)(Hn,{style:{flex:2},children:[e.quantity,"x"," ",(0,C.jsx)("strong",{children:"en"===i?e.en_name:e.ar_name})]}),(0,C.jsx)(Hn,{children:(0,_e.T)(e.price*e.quantity,d)})]})},e.uniqueId)}))}),(0,C.jsx)(Kn,{}),(0,C.jsxs)(Mn,{children:[(0,C.jsx)(Wn,{children:"Total:"}),(0,C.jsx)(Qn,{children:(0,_e.T)(s,d)})]})]}),(0,C.jsxs)(Un,{children:[(0,C.jsx)(qn,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Details"}),(0,C.jsxs)(Mn,{children:[(0,C.jsx)(Wn,{children:"Order Type:"}),(0,C.jsx)(Hn,{children:o.deliveryType})]}),o.selectedBranch&&(0,C.jsxs)(Mn,{children:[(0,C.jsx)(Wn,{children:"Branch:"}),(0,C.jsx)(Hn,{children:o.selectedBranch.name})]}),o.selectedRegion&&(0,C.jsxs)(Mn,{children:[(0,C.jsx)(Wn,{children:"Region:"}),(0,C.jsx)(Hn,{children:o.selectedRegion})]})]}),(0,C.jsxs)(Un,{children:[(0,C.jsx)(qn,{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact Information"}),(0,C.jsxs)(Mn,{children:[(0,C.jsx)(Wn,{children:"Name:"}),(0,C.jsx)(Hn,{children:o.fullName})]}),(0,C.jsxs)(Mn,{children:[(0,C.jsx)(Wn,{children:"Phone:"}),(0,C.jsx)(Hn,{children:o.phoneNumber})]}),"Delivery"===o.deliveryType&&o.fullAddress&&(0,C.jsxs)(Mn,{children:[(0,C.jsx)(Wn,{children:"Address:"}),(0,C.jsx)(Hn,{children:o.fullAddress})]}),"DineIn"===o.deliveryType&&o.tableNumber&&(0,C.jsxs)(Mn,{children:[(0,C.jsx)(Wn,{children:"Table Number:"}),(0,C.jsx)(Hn,{children:o.tableNumber})]}),o.note&&(0,C.jsxs)(Mn,{children:[(0,C.jsx)(Wn,{children:"Notes:"}),(0,C.jsx)(Hn,{children:o.note})]})]})]})}const Gn=n.Ay.div`
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
`,er=n.Ay.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,or=n.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`,tr=(0,n.Ay)(er)`
  margin-bottom: 0;
  flex: 1;
`,ir=n.Ay.button`
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
`,nr=n.Ay.div`
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
`,rr=n.Ay.div`
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
`,ar=n.Ay.div`
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
`,lr=n.Ay.div`
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
`,sr=n.Ay.div`
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
`,dr=n.Ay.button`
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
`,cr=[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"review",label:"Review",number:4}];function pr(e){var o;let{popupHandler:t,restaurant:n}=e;const{restaurantName:r}=(0,y.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:r,s=(0,v.d4)((e=>e.cart[l]||[])),d=(0,v.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[l])||void 0===t?void 0:t.activeLanguage)||"en"})),c=(0,v.wA)(),[p,u]=(0,i.useState)(0),[h,x]=(0,i.useState)({deliveryType:"",selectedBranch:(null===n||void 0===n||null===(o=n.branches)||void 0===o?void 0:o[0])||null,selectedRegion:"",regions:[],fullName:"",phoneNumber:"",fullAddress:"",selectedAddressId:null,selectedLocation:null,tableNumber:"",note:""}),[g,m]=(0,i.useState)({}),{handleApiCallAsync:f,isPending:b}=(0,$i.h)({onSuccess:()=>{}});(0,i.useEffect)((()=>{(async()=>{const e=(0,Ne.wU)(l);if(e)try{const{data:o}=await J.A.get(Ee.EY,{headers:{Authorization:`Bearer ${e}`}});x((e=>({...e,fullName:o.full_name||e.fullName,phoneNumber:o.phone_number||e.phoneNumber})))}catch{}})()}),[l]),(0,i.useEffect)((()=>{if(null!==n&&void 0!==n&&n.features){const e=JSON.parse(n.features),o=Object.entries(e).filter((e=>{let[o,t]=e;return!0===t})).map((e=>{let[o]=e;return"delivery_order"===o?"Delivery":"takeaway_order"===o?"TakeAway":"dinein_order"===o?"DineIn":null})).filter(Boolean);1===o.length&&x((e=>({...e,deliveryType:o[0]})))}}),[n]);const w=e=>{x((o=>({...o,...e})));const o=Object.keys(e);m((e=>{const t={...e};return o.forEach((e=>{t[e]&&delete t[e]})),t}))},j=e=>{const o={};if(1===e){var t;if(h.deliveryType||(o.deliveryType="Order Type is required."),!h.selectedBranch&&(null===n||void 0===n||null===(t=n.branches)||void 0===t?void 0:t.length)>0){var i;(null===n||void 0===n||null===(i=n.branches)||void 0===i?void 0:i.some((e=>e.is_online)))||(o.branch="Branch is required.")}"Delivery"===h.deliveryType&&h.selectedBranch&&Array.isArray(h.regions)&&h.regions.length>0&&!h.selectedRegion&&(o.region="Region is required.")}else 2===e&&(h.fullName||(o.fullName="Full Name is required."),h.phoneNumber||(o.phoneNumber="Phone Number is required."),"Delivery"!==h.deliveryType||h.fullAddress||(o.fullAddress="Full Address is required for delivery."),"DineIn"!==h.deliveryType||h.tableNumber||(o.tableNumber="Table Number is required."));return m(o),0===Object.keys(o).length};return(0,C.jsxs)(Gn,{children:[(0,C.jsxs)(or,{children:[(0,C.jsx)(tr,{children:cr[p].label}),(0,C.jsx)(ir,{onClick:()=>t(null),"aria-label":"Close cart",children:"\u2715"})]}),(0,C.jsx)(nr,{children:cr.map(((e,o)=>(0,C.jsxs)(rr,{active:o<=p,children:[(0,C.jsx)(ar,{active:o<=p,completed:o<p,children:o<p?"\u2713":e.number}),(0,C.jsx)("span",{children:e.label})]},e.id)))}),(0,C.jsx)(lr,{children:(()=>{switch(p){case 0:return(0,C.jsx)(on,{formData:h,updateFormData:w,restaurant:n,activeLanguage:d});case 1:return(0,C.jsx)(yn,{formData:h,updateFormData:w,restaurant:n,errors:g,setErrors:m});case 2:return(0,C.jsx)(On,{formData:h,updateFormData:w,restaurant:n,errors:g,restaurantName:l,activeLanguage:d});case 3:return(0,C.jsx)(Zn,{formData:h,restaurant:n,activeLanguage:d});default:return null}})()}),(0,C.jsxs)(sr,{children:[p>0&&(0,C.jsx)(dr,{onClick:()=>{p>0&&u(p-1)},variant:"secondary",children:"Back"}),p<cr.length-1?(0,C.jsx)(dr,{onClick:()=>{if(j(p)){if(0===p&&null!==n&&void 0!==n&&n.id){var e;const o=(null===(e=h.selectedBranch)||void 0===e?void 0:e.id)||null;(0,Pe.trackCheckoutStart)(n.id,o,h.deliveryType||null)}p<cr.length-1&&u(p+1)}},variant:"primary",children:"Next"}):(0,C.jsx)(dr,{onClick:async()=>{var e,o,i,r;if(!j(2))return;const a=(0,De.Q)(null===n||void 0===n?void 0:n.currency);let p=0,u="";u+=`*New Order - ${h.deliveryType}*\n`,u+="--------------------\n\n",u+="*Items:*\n",s.forEach(((e,o)=>{const t=("ar"===d?e.ar_name:e.en_name||"").trim(),i=("ar"===d?e.category.ar_category:e.category.en_category||"").trim(),n=e.price*e.quantity;p+=n,u+=`${o+1}. *${t}*\n`,u+=`    ${i}\n`,u+=`    ${e.quantity}x ${e.price} ${a} = *${n} ${a}*\n`,e.formData&&(u+=(0,Ai.Ve)(e,"ar"===d?"ar":"en")),e.instruction&&(u+=`    > _${e.instruction}_\n`),u+="\n"})),u+="--------------------\n",u+=`*Total: ${(0,_e.T)(p,a)}*\n\n`,u+="*Customer:*\n",u+=`- ${h.fullName}\n`,u+=`- ${h.phoneNumber}\n`,h.selectedRegion&&(u+=`- Region: ${h.selectedRegion}\n`);let x="";"Delivery"===h.deliveryType&&(u+="\n*Delivery Address:*\n",u+=`${h.fullAddress}\n`,h.selectedLocation&&(x=`https://www.google.com/maps?q=${h.selectedLocation.latitude},${h.selectedLocation.longitude}`)),"DineIn"===h.deliveryType&&(u+=`- Table: #${h.tableNumber}\n`),h.note&&(u+=`\n*Note:* _${h.note}_\n`),x&&(u+=`\n${x}\n`);const g=null!==(e=h.selectedBranch)&&void 0!==e&&e.whatsapp_number?(0,bi.JW)(h.selectedBranch.whatsapp_number,null===n||void 0===n?void 0:n.country_code):n.phone_number,m=[...s.map((e=>{var o;return{id:e.id,quantity:e.quantity,branch_id:null===(o=h.selectedBranch)||void 0===o?void 0:o.id,restaurant_id:n.id}}))],v=[...s.map((e=>({product_id:e.id,product_name:"en"===d?e.en_name:e.ar_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];f({products:m,restaurant_id:n.id,branch_id:null===(o=h.selectedBranch)||void 0===o?void 0:o.id,delivery_type:h.deliveryType,customer_name:h.fullName,customer_phone:h.phoneNumber,customer_address:"Delivery"===h.deliveryType?h.fullAddress:null,customer_latitude:(null===(i=h.selectedLocation)||void 0===i?void 0:i.latitude)||null,customer_longitude:(null===(r=h.selectedLocation)||void 0===r?void 0:r.longitude)||null,table_number:"DineIn"===h.deliveryType?h.tableNumber:null,note:h.note,items:v,subtotal:p,total:p,currency:n.currency},l).then((e=>{if(null!==n&&void 0!==n&&n.id){var o,t,i;const r=(null===(o=h.selectedBranch)||void 0===o?void 0:o.id)||null;(0,Pe.trackOrderPlaced)(n.id,(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(i=t.order)||void 0===i?void 0:i.id)||null,h.deliveryType,p,r,{items:v,customerName:h.fullName})}})).catch((e=>console.error("Order creation failed:",e))),(0,bi.JT)(g,u),c((0,Ie.sX)(l)),t(null)},variant:"primary",disabled:b,children:b?"Submitting...":"Submit Order"})]})]})}function ur(e){let{restaurant:o,showPopup:t,popupHandler:n=(()=>{})}=e;const{restaurantName:r}=(0,y.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:r,s=(0,v.d4)((e=>e.cart[l]||[])),d=(0,v.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[l])||void 0===t?void 0:t.activeLanguage)||"en"})),c=0===s.length;(0,i.useEffect)((()=>{const e=()=>{n(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);return(0,C.jsx)(Ci,{showPopup:t,children:c?(0,C.jsx)(ji,{children:"en"===d?"Your cart is empty":"\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0641\u0627\u0631\u063a\u0629"}):(0,C.jsx)(pr,{popupHandler:n,restaurant:o})})}const hr=n.Ay.div`
height: 100vh;
position: fixed;
width: 100%;
left: ${e=>e.showSidebar?"0":"-100%"};
top:0;
  transition:all  0.5s ease-in-out;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
z-index: 100;
`,xr=n.Ay.div`
width: 100%;
height: 100%;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
`,gr=n.Ay.div`
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
`,mr=n.Ay.div`
width: 100%;
  height: 60%; /* 60% of the sidebar height */
  overflow-y: auto;
  margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,fr=n.Ay.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-start;
`,vr=n.Ay.span`
    /* overflow: hidden;
    text-overflow: ellipsis; */
    margin-left:${e=>e.categoryType?"10%":"0%"};

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 13px;
    color: ${e=>e.theme.sidebartext};

`,yr=n.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10%;

`,br=n.Ay.img`
width:20px;
height:20px;
`,wr=n.Ay.div`
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vh;
`,Cr=n.Ay.img`
max-width: min(200px, 60vw);
max-height: 120px;
object-fit: contain;
margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,jr=n.Ay.div`
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

`,$r=n.Ay.input`
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

`,Ar=(0,n.Ay)(c.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};
color:${e=>e.theme.sidebarsearchText};

`,kr=(0,n.Ay)(E.IMk)`
position: absolute;
left: 20px;
top: 20px;
color: ${e=>e.theme.sidebarsearch};
font-size: 27px;

`;function zr(e){var o;let{activeCategory:t,setactiveCategory:n,categories:r,showSidebar:a,setshowSidebar:l,setcarouselPosition:s,onFeedbackClick:d,onContactClick:c,onBranchesClick:p,onAboutClick:u,onShareClick:h,branches:x}=e;const{restaurantName:g}=(0,y.g)(),[m,f]=(0,Y.ok)(),b=window.location.hostname.split(".")[0],w="menugic"!==b&&"localhost"!==b&&"www"!==b?b:g,j=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[w]})),[$,A]=(0,i.useState)(""),k=(null===j||void 0===j?void 0:j.activeLanguage)||"en",z=null===r||void 0===r?void 0:r.filter((e=>"en"===k?(e.en_category||"").toLowerCase().includes($.toLowerCase()):(e.ar_category||"").toLowerCase().includes($.toLowerCase()))),S=e=>{l(!1),e&&e()},L=[d&&{icon:Fe.g5D,label:"en"===k?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a",onClick:()=>S(d)},(null===x||void 0===x?void 0:x.length)>0&&p&&{icon:Fe.vq8,label:"en"===k?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639",onClick:()=>S(p)},c&&{icon:Fe.toK,label:"en"===k?"Contact Us":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",onClick:()=>S(c)},u&&{icon:Fe.__w,label:"en"===k?"About Us":"\u0645\u0646 \u0646\u062d\u0646",onClick:()=>S(u)},h&&{icon:Fe.eb3,label:"en"===k?"Share":"\u0645\u0634\u0627\u0631\u0643\u0629",onClick:()=>S(h)}].filter(Boolean);return(0,C.jsxs)(hr,{showSidebar:a,children:[(0,C.jsx)(xr,{onClick:()=>{l(!1)},showSidebar:a}),(0,C.jsxs)(gr,{children:[(0,C.jsx)(kr,{}),(0,C.jsx)(wr,{children:(0,C.jsx)(Cr,{showSidebar:a,src:(null===j||void 0===j?void 0:j.logoURL)&&`https://storage.googleapis.com/ecommerce-bucket-testing/${j.logoURL}`})}),(0,C.jsxs)(jr,{showSidebar:a,children:[(0,C.jsx)(Ar,{activeLanguage:k}),(0,C.jsx)($r,{type:"text",activeLanguage:k,dir:"en"===k?"ltr":"rtl",placeholder:"en"===k?"Search Categories":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{A(e.target.value)},value:$})]}),(0,C.jsx)(mr,{showSidebar:a,children:null===z||void 0===z?void 0:z.sort(((e,o)=>o.priority-e.priority)).map(((e,o)=>(0,C.jsxs)(fr,{onClick:()=>((e,o)=>{n(e),s(o),l(!1)})(e.id,o),children:["horizantal-withoutIcon"!==(null===j||void 0===j?void 0:j.category_type)&&(0,C.jsx)(yr,{activeCategory:t,categoryId:e.id,children:(0,C.jsx)(br,{src:e.image_url?(0,Te.V)(e.image_url):e.isAllItems&&null!==j&&void 0!==j&&j.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${j.logoURL}`:""})}),(0,C.jsx)(vr,{categoryType:"horizantal-withoutIcon"===(null===j||void 0===j?void 0:j.category_type),activeCategory:t,categoryId:e.id,children:"en"===k?e.en_category||e.ar_category:e.ar_category||e.en_category})]},o)))}),L.length>0&&(0,C.jsx)("div",{style:{borderTop:`1px solid ${null!==j&&void 0!==j&&j.theme&&(null===(o=JSON.parse(j.theme))||void 0===o?void 0:o.borderColor)||"#eee"}`,marginTop:10,paddingTop:10},children:L.map(((e,o)=>{var t,i;return(0,C.jsxs)(fr,{onClick:e.onClick,style:{cursor:"pointer"},children:[(0,C.jsx)(yr,{style:{background:"transparent",border:"none",width:28,height:28},children:(0,C.jsx)(e.icon,{style:{fontSize:14,color:null!==j&&void 0!==j&&j.theme&&(null===(t=JSON.parse(j.theme))||void 0===t?void 0:t.sidebartext)||"#333"}})}),(0,C.jsx)(vr,{categoryType:!0,style:{fontWeight:500,color:null!==j&&void 0!==j&&j.theme&&(null===(i=JSON.parse(j.theme))||void 0===i?void 0:i.sidebartext)||"#333"},children:e.label})]},o)}))})]})]})}var Sr=t(72929),Lr=t(58169);n.Ay.div`

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
  animation: ${(e,o,t)=>n.i7`
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
    /* animation: ${e=>{let{x:o,y:t,width:i}=e;return((e,o,t)=>n.i7`
 0% { 
    left: ${e}px;
    top:${o}px;
    width:${t}px;
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
`)(o,t,i)}} 0.8s;
    height: ${e=>e.CloseAnimation?"100vh":"30vh"}; */

    }

`;const _r=n.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,Tr=(n.i7`
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
`),Ir=n.Ay.div`
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
`,Er=n.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position:relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
`,Nr=n.Ay.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  vertical-align: top;

`,Pr=n.Ay.div`
  height: 100%;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;

`,Fr=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Dr=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${Fr} 1s linear infinite; /* Apply animation */
`,Rr=n.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,Or=n.Ay.img`
  height: 100%;
  object-fit: cover;
  border-radius: ${e=>e.$cardSlide?"0":e.CloseAnimation?"40px":"10px"};
  width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"90%":"100%"};
  display: ${e=>e.Loaded?"block":"none"};
  transition: all 0.8s;
  @media (min-width: 1024px) {
    width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"50%":"100%"};
  }
`,Br=n.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,Ur=((0,n.Ay)(qe.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,(0,n.Ay)(qe.m6W)`
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
`),qr=(0,n.Ay)(qe.OQo)`
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
`,Mr=(n.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${Br} 0.8s ease-in-out;
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
`),Wr=(n.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${Mr} 1.8s ease-in-out;
`,n.Ay.div`
  width:90%;
  height: 45vh;
  margin-top: 80px;
  display: flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${_r} 0.8s;
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
`),Hr=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Vr=n.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${Wr} 1.8s ease-in-out;

`,Xr=n.Ay.div`
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
`,Yr=n.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:center;
  opacity: 1;
  margin-top: 5px;
`,Jr=n.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,Kr=n.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,Qr=n.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,Zr=n.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,Gr=n.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,ea=n.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,oa=n.Ay.div`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${ea} 0.7s ease-in-out;
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
`,ta=n.Ay.button`
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
`,ia=n.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,na=n.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,ra=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,aa=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,la=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,sa=n.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,da=(n.Ay.div`
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
  animation: ${sa} 0.8s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,n.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`),ca=n.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,pa=n.Ay.input`
background-color: transparent;
border: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.8)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.8)`)):t}};
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

`,ua=n.Ay.button`
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
`,ha=n.Ay.div`
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
`,xa=n.Ay.button`
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
`,ga=n.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`;var ma=t(88282);const fa=n.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display:flex;
`,va=n.Ay.div`
display: flex;
flex-direction: row;
`,ya=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,ba=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,wa=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,Ca=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,ja=n.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,$a=n.Ay.span`
position: absolute;
left: 0;

`,Aa=n.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,ka=(0,n.Ay)(r.Z0P)`
    animation:1.2s ${Aa}  linear infinite ;
    position: absolute;
`;function za(e){let{carouselIndex:o,images:t,CloseAnimation:i,carouselSwiped:n}=e;return(0,C.jsxs)(fa,{CloseAnimation:i,children:[(0,C.jsxs)(va,{children:[(0,C.jsx)(ya,{carouselIndex:o,children:(0,C.jsx)(ba,{})}),t.map((e=>(0,C.jsx)(wa,{children:(0,C.jsx)(Ca,{})})))]}),!n&&(0,C.jsxs)(ja,{children:[(0,C.jsx)($a,{children:"Swipe"}),(0,C.jsx)(ka,{})]})]})}n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const Sa=n.Ay.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,La=(n.Ay.label`
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
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(We().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`),_a=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,Ta=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Ia=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let o=e.theme.formColor;if(We().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.3)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.3)`)):o}};
  font-size:10px;

`,Ea=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,Na=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Pa(e){let{component:o,formData:t,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(t[o.key]||[]);return(0,C.jsxs)(La,{index:r,children:[(0,C.jsx)(Sa,{children:o.label}),o.values.map((e=>(0,C.jsxs)(Ta,{children:[s.some((o=>o===e.label))?(0,C.jsx)(Ea,{onClick:()=>{(e=>{let t=s.filter((o=>o!==e.label));d(t),n(o.key,t)})(e)},children:(0,C.jsx)(tt.RXm,{size:"15px"})}):(0,C.jsx)(Ia,{onClick:()=>{(e=>{d([...s,e.label]),n(o.key,[...s,e.label])})(e)},children:(0,C.jsx)(Fe.OiG,{})}),(0,C.jsx)(_a,{children:e.label})]}))),(c=a,c in l?(0,C.jsx)(Na,{children:"This field is required"}):null)]});var c}const Fa=n.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};

  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(We().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`,Da=n.Ay.div`
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
`,Ra=n.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,Oa=n.Ay.ul`
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

`,Ba=n.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,Ua=n.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,qa=n.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,Ma=n.Ay.div`
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
`,Wa=(n.Ay.label`
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

`);function Ha(e){var o;let{component:t,formData:n,handleChange:r,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;const[c,p]=(0,i.useState)(!1),[u,h]=(0,i.useState)((null===(o=n[t.key])||void 0===o?void 0:o.value)||""),x=(0,i.useRef)(null),g=e=>{h(e.label),p(!1),r(t.key,e)},m=e=>{x.current&&!x.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,C.jsxs)(Fa,{ref:x,index:l,children:[(0,C.jsx)(Sa,{children:t.label}),t.data.values.length>8?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Da,{onClick:()=>p((e=>!e)),children:[u||a,(0,C.jsx)(Ra,{className:c?"up":"",children:"\u25bc"})]}),(0,C.jsx)(Oa,{isOpen:c,children:t.data.values.map(((e,o)=>(0,C.jsx)(Ba,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},o)))})]}):(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(Ua,{children:t.data.values.map(((e,o)=>(0,C.jsx)(qa,{children:(0,C.jsx)(Ma,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,C.jsx)(Wa,{children:"This field is required"}):null)]});var f}const Va=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(We().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`,Xa=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,Ya=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Ja=n.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,Ka=n.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,Qa=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Za(e){let{component:o,formData:t,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(t[o.key]||"");return(0,C.jsxs)(Va,{index:r,children:[(0,C.jsx)(Sa,{children:o.label}),o.values.map((e=>(0,C.jsxs)(Ya,{children:[(0,C.jsx)(Ja,{onClick:()=>{(e=>{d(e),n(o.key,e)})(e)},children:(0,C.jsx)(Ka,{selected:s.label==e.label})}),(0,C.jsx)(Xa,{children:e.label})]}))),(c=a,c in l?(0,C.jsx)(Qa,{children:"This field is required"}):null)]});var c}function Ga(e){let{formSchema:o,onPriceChange:t,basePrice:n,formData:r,setFormData:a,formErrors:l}=e;(0,i.useEffect)((()=>{d(r)}),[r]);const s=(e,o)=>{a((t=>({...t,[e]:o})))},d=e=>{let i=parseFloat(n)||0,r=0;null===o||void 0===o||o.components.forEach((o=>{if(e[o.key])if("selectboxes"===o.type&&o.values)e[o.key].forEach((e=>{const t=o.values.find((o=>o.label===e)),i=!isNaN(Number(t.value));t&&t.value&&i&&(t.value.startsWith("+")?r+=parseFloat(t.value.slice(1)):t.value.startsWith("-")&&(r-=parseFloat(t.value.slice(1))))}));else if("select"===o.type&&o.data&&o.data.values){const t=o.data.values.find((t=>{var i;return t.value===(null===(i=e[o.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(t.value));t&&n&&(t.value.startsWith("+")?r+=parseFloat(t.value.slice(1)):t.value.startsWith("-")?r-=parseFloat(t.value.slice(1)):i=parseFloat(t.value))}else if("radio"===o.type&&o.values){const t=o.values.find((t=>{var i;return t.value===(null===(i=e[o.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(t.value));t&&n&&(t.value.startsWith("+")?r+=parseFloat(t.value.slice(1)):t.value.startsWith("-")?r-=parseFloat(t.value.slice(1)):i=parseFloat(t.value))}}));const a=i+r,l=a%1!==0?a.toFixed(2):a.toFixed(0);t(l)};return(0,C.jsx)("form",{style:{width:"100%"},children:null===o||void 0===o?void 0:o.components.map(((e,o)=>((e,o)=>{switch(e.type){case"selectboxes":return(0,C.jsx)(Pa,{component:e,formData:r,handleChange:s,index:o,componentKey:e.key,formErrors:l});case"select":return(0,C.jsx)(Ha,{component:e,formData:r,handleChange:s,index:o,componentKey:e.key,formErrors:l});case"radio":return(0,C.jsx)(Za,{component:e,formData:r,handleChange:s,index:o,componentKey:e.key,formErrors:l});default:return null}})(e,o)))})}function el(e){var o,t,n;let{productId:l,setSearchParams:s,searchParams:d}=e;const{restaurantName:c}=(0,y.g)(),p=window.location.hostname.split(".")[0],u="menugic"!==p&&"localhost"!==p&&"www"!==p?p:c,h=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[u]}));let x=null;const{response:g,isLoading:m}=(0,ma.VL)({productId:l,onSuccess:()=>{}}),{response:f}=(0,At.$)({productId:l});var w;((0,i.useEffect)((()=>{if(!m&&g){var e;X(parseFloat(null===g||void 0===g?void 0:g.en_price)||0),J(parseFloat(null===g||void 0===g?void 0:g.en_price)||0);const i=parseFloat(null===g||void 0===g||null===(e=g.category)||void 0===e?void 0:e.discount)||0,n=parseFloat(null===g||void 0===g?void 0:g.discount)||0;if(G(0===i?n:i),null!==h&&void 0!==h&&h.id&&null!==g&&void 0!==g&&g.id){var o,t;const e=(null===h||void 0===h||null===(o=h.branches)||void 0===o||null===(t=o[0])||void 0===t?void 0:t.id)||null;(0,Pe.trackItemView)(h.id,g.id,g.category_id,e,{name:g.en_name,price:parseFloat(g.en_price)||0})}}}),[m]),We().isEmpty(null===g||void 0===g?void 0:g.form_json))||(x=We().isEmpty(JSON.parse(null===g||void 0===g?void 0:g.form_json))?null===g||void 0===g||null===(w=g.category)||void 0===w?void 0:w.form_json:null===g||void 0===g?void 0:g.form_json);const[j,$]=(0,i.useState)({});(0,i.useEffect)((()=>{if(!We().isEmpty(x)){var e;const o=JSON.parse(x);if($(o),2===(null===o||void 0===o?void 0:o.version)&&(null===o||void 0===o||null===(e=o.sizes)||void 0===e?void 0:e.length)>0){const e=parseFloat(null===g||void 0===g?void 0:g.en_price)||0,t=o.sizes.find((o=>"absolute"===o.priceMode&&Number(o.priceModifier)===e));k((()=>({...(0,$t.KE)(),sizeId:t?t.id:o.sizes[0].id})))}}}),[x]);const[A,k]=(0,i.useState)({}),[z,S]=(0,i.useState)({}),L=(0,v.wA)(),[_,T]=(0,i.useState)(1),[I,E]=(0,i.useState)(!1),N=(0,i.useRef)(null),[P,F]=(0,i.useState)(!1),[D,R]=(0,i.useState)(1),[O,B]=(0,i.useState)({x:0,y:0}),[U,q]=(0,i.useState)(!1),M=(0,i.useRef)(null),W=(0,i.useRef)(null),H=(0,i.useRef)(0),[V,X]=(0,i.useState)(parseFloat(null===g||void 0===g?void 0:g.en_price)||0),[Y,J]=(0,i.useState)(parseFloat(null===g||void 0===g?void 0:g.en_price)||0),[K,Q]=(0,i.useState)(""),[Z,G]=(0,i.useState)(0),ee=Boolean(null===g||void 0===g?void 0:g.out_of_stock)||1===Number(null===g||void 0===g?void 0:g.out_of_stock),oe=e=>{J(parseFloat(e)||0)},[te,ie]=(0,i.useState)(!0),[ne,re]=(0,i.useState)(0),ae=()=>{ie(!1),re(0),setTimeout((()=>{const e=new URLSearchParams(d);e.delete("productId"),s(e),document.body.style.overflow="auto"}),800)},[le,se]=(0,i.useState)(!1),de=()=>{E(!0),re(ne+1)},ce=()=>{E(!0),re(ne-1)},pe=(0,i.useRef)(null),[ue,he]=(0,i.useState)(null),xe=null!==h&&void 0!==h&&h.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${h.logoURL}`:null,ge=()=>{R(1),B({x:0,y:0}),F(!0)};(0,i.useEffect)((()=>{const e=()=>{ae()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const me=2===(null===j||void 0===j?void 0:j.version)&&Array.isArray(null===j||void 0===j?void 0:j.sizes);let fe=[...null!==(o=null===g||void 0===g?void 0:g.images)&&void 0!==o?o:[]];const ve=fe.findIndex((e=>e.id===g.new_cover_id));if(ve>0){const[e]=fe.splice(ve,1);fe.unshift(e)}const[ye,be]=(0,i.useState)({}),we=e=>{be((o=>({...o,[e]:!0})))},Ce="en"===(null===h||void 0===h?void 0:h.activeLanguage)?null===g||void 0===g?void 0:g.en_description:null===g||void 0===g?void 0:g.ar_description,je=(0,De.Q)(null===h||void 0===h?void 0:h.currency),$e=(null===h||void 0===h?void 0:h.product_details_carousel_style)||"normal";return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Sr.z,{CloseAnimation:te,onClick:ae}),(0,C.jsx)(Sr.Z,{CloseAnimation:te,$premiumMobile:!m,children:!m&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Lr.Tn,{CloseAnimation:te,children:[(0,C.jsx)(Lr.k8,{onClick:ae,CloseAnimation:te,type:"button",children:(0,C.jsx)(Lr.Z3,{})}),(0,C.jsx)(Lr.N0,{activeLanguage:null===h||void 0===h?void 0:h.activeLanguage,children:"en"==h.activeLanguage?null===g||void 0===g||null===(t=g.category)||void 0===t?void 0:t.en_category:null===g||void 0===g||null===(n=g.category)||void 0===n?void 0:n.ar_category}),(0,C.jsx)(Lr.i8,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),se(!0),setTimeout((()=>{se(!1)}),4e3)},CloseAnimation:te,children:le?(0,C.jsx)(tt.RXm,{}):(0,C.jsx)(r.zU_,{})})]}),(0,C.jsx)(Tr,{squareDimension:null===g||void 0===g?void 0:g.square_dimension,CloseAnimation:te,isNormalCarousel:"normal"===$e,children:1===fe.length?(0,C.jsx)(Er,{carouselIndex:0,children:(0,C.jsx)(Nr,{children:(0,C.jsxs)(Pr,{children:[!ye[0]&&(0,C.jsx)(Rr,{children:(0,C.jsx)(Dr,{})}),(0,C.jsx)(Or,{src:fe[0].url?(0,Te.V)(fe[0].url):xe||"",onLoad:()=>we(0),onError:e=>{xe&&e.target.src!==xe&&(e.target.src=xe)},CloseAnimation:te,Loaded:ye[0],alt:"Image 0"}),(0,C.jsx)(ua,{onClick:ge,children:(0,C.jsx)(b.gff,{})})]})})}):"normal"===$e?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Ur,{CloseAnimation:te,onClick:()=>{E(!0),0!==ne&&ce()}}),(0,C.jsx)(qr,{CloseAnimation:te,onClick:()=>{E(!0),fe.length>ne+1&&de()}}),(0,C.jsx)(Er,{carouselIndex:ne,ref:pe,onTouchStart:e=>{he(e.touches[0].clientX)},onTouchMove:e=>{if(ue){const o=e.touches[0].clientX-ue;o>5?0!==ne&&ce():o<-5&&g.images.length>ne+1&&de(),he(null)}},children:fe.map(((e,o)=>(0,C.jsx)(Nr,{children:(0,C.jsxs)(Pr,{children:[!ye[o]&&(0,C.jsx)(Rr,{children:(0,C.jsx)(Dr,{})}),(0,C.jsx)(Or,{src:ye[o]||o===ne?null!==e&&void 0!==e&&e.url?(0,Te.V)(e.url):xe||"":"",onLoad:()=>we(o),onError:e=>{xe&&e.target.src!==xe&&(e.target.src=xe)},CloseAnimation:te,Loaded:ye[o],alt:`Image ${o}`}),ne===o&&(0,C.jsx)(ua,{onClick:ge,children:(0,C.jsx)(b.gff,{})})]})},e.id||o)))})]}):"effect-cards"===$e?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Ur,{CloseAnimation:te,onClick:()=>N.current&&N.current.slidePrev()}),(0,C.jsx)(Ir,{children:(0,C.jsx)(kt.RC,{modules:[zt.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{N.current=e},onSlideChange:e=>{re(e.realIndex),E(!0)},children:fe.map(((e,o)=>(0,C.jsx)(kt.qr,{children:(0,C.jsxs)(Pr,{children:[!ye[o]&&(0,C.jsx)(Rr,{children:(0,C.jsx)(Dr,{})}),(0,C.jsx)(Or,{src:ye[o]||o===ne?null!==e&&void 0!==e&&e.url?(0,Te.V)(e.url):xe||"":"",onLoad:()=>we(o),onError:e=>{xe&&e.target.src!==xe&&(e.target.src=xe)},CloseAnimation:te,Loaded:ye[o],$cardSlide:!0,alt:`Image ${o}`}),ne===o&&(0,C.jsx)(ua,{onClick:ge,children:(0,C.jsx)(b.gff,{})})]})},e.id||o)))},null===g||void 0===g?void 0:g.id)}),(0,C.jsx)(qr,{CloseAnimation:te,onClick:()=>N.current&&N.current.slideNext()})]}):(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(Ir,{children:(0,C.jsx)(kt.RC,{onSwiper:e=>{N.current=e},onSlideChange:e=>{re(e.realIndex),E(!0)},modules:[zt.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:fe.map(((e,o)=>(0,C.jsx)(kt.qr,{children:(0,C.jsxs)(Pr,{children:[!ye[o]&&(0,C.jsx)(Rr,{children:(0,C.jsx)(Dr,{})}),(0,C.jsx)(Or,{src:ye[o]||o===ne?null!==e&&void 0!==e&&e.url?(0,Te.V)(e.url):xe||"":"",onLoad:()=>we(o),onError:e=>{xe&&e.target.src!==xe&&(e.target.src=xe)},CloseAnimation:te,Loaded:ye[o],$cardSlide:!0,alt:`Image ${o}`}),ne===o&&(0,C.jsx)(ua,{onClick:ge,children:(0,C.jsx)(b.gff,{})})]})},e.id||o)))},null===g||void 0===g?void 0:g.id)})})}),1!==fe.length&&"normal"!==$e&&(0,C.jsx)(za,{images:fe,carouselIndex:ne,CloseAnimation:te,carouselSwiped:I}),(0,C.jsx)(Hr,{children:(0,C.jsx)(Vr,{children:(0,C.jsxs)(Xr,{CloseAnimation:te,activeLanguage:h.activeLanguage,children:[(0,C.jsx)(Yr,{activeLanguage:h.activeLanguage,children:"en"==h.activeLanguage?null===g||void 0===g?void 0:g.en_name:null===g||void 0===g?void 0:g.ar_name}),!We().isEmpty(null===g||void 0===g?void 0:g.en_price)&&(0,C.jsxs)(Qr,{children:[(0,C.jsx)(Zr,{activeLanguage:h.activeLanguage,discounted:0!=Z,children:(0,_e.T)(Y,je)}),0!=Z&&(0,C.jsx)(Gr,{activeLanguage:h.activeLanguage,children:(0,_e.T)(Y*(1-parseFloat(Z)/100),je)})]}),(0,C.jsx)(Jr,{activeLanguage:h.activeLanguage,dangerouslySetInnerHTML:{__html:Ce}}),ee&&(0,C.jsx)(Kr,{children:"en"===h.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),(0,C.jsx)(jt.A,{macros:null===g||void 0===g?void 0:g.macros,activeLanguage:null===h||void 0===h?void 0:h.activeLanguage}),me&&(0,C.jsx)(Ct.A,{options:j,formData:A,setFormData:k,formErrors:z,activeLanguage:h.activeLanguage,basePrice:null===g||void 0===g?void 0:g.en_price,onPriceChange:oe}),!me&&(null===j||void 0===j?void 0:j.components)&&(0,C.jsx)(Ga,{formSchema:j,onPriceChange:oe,formData:A,setFormData:k,basePrice:null===g||void 0===g?void 0:g.en_price,formErrors:z}),(0,C.jsxs)(da,{activeLanguage:h.activeLanguage,children:[(0,C.jsx)(ca,{children:"en"==h.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,C.jsx)(pa,{activeLanguage:h.activeLanguage,onChange:e=>Q(e.target.value),placeholder:"en"==h.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),!ee&&(0,C.jsxs)(oa,{CloseAnimation:te,children:[(0,C.jsxs)(na,{CloseAnimation:te,children:[(0,C.jsx)(ra,{onClick:()=>{T(_+1)},children:"+"}),(0,C.jsx)(la,{children:_}),(0,C.jsx)(aa,{onClick:()=>{_>1&&T(_-1)},children:"-"})]}),(0,C.jsxs)(ta,{onClick:()=>{if(me){var e;const o={};if((null===(e=j.sizes)||void 0===e?void 0:e.length)>0&&(null===A||void 0===A||!A.sizeId)&&(o.size="Please select a size."),Object.keys(o).length>0)return void S(o)}else if("{}"!==JSON.stringify(j)){const e=function(e,o){const t={},i=function(e){return e.components.filter((e=>{var o;return null===(o=e.validate)||void 0===o?void 0:o.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in o&&0!==(null===(i=o[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(o[e])||(t[e]="This field is required.")})),t}(j,A);if(Object.keys(e).length>0)return void S(e)}let o=Y*(1-parseFloat(Z)/100);if(setTimeout((()=>{const e=new URLSearchParams(d);e.delete("productId"),s(e),document.body.style.overflow="auto"}),800),null!==h&&void 0!==h&&h.id&&null!==g&&void 0!==g&&g.id){var t,i;const e=(null===h||void 0===h||null===(t=h.branches)||void 0===t||null===(i=t[0])||void 0===i?void 0:i.id)||null;(0,Pe.trackAddToCart)(h.id,g.id,g.category_id,_,e,{name:g.en_name,price:o})}L((0,Ie.bE)(u,g,_,A,o,K)),ie(!1),T(1)},children:["en"==h.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",Y>0&&(0,C.jsx)(ia,{children:(0,_e.T)(_*(Y*(1-Z/100)),je)})]})]})]})}),P&&(0,C.jsxs)(ha,{onTouchStart:e=>{if(2===e.touches.length){const o=e.touches[0].clientX-e.touches[1].clientX,t=e.touches[0].clientY-e.touches[1].clientY;W.current=Math.hypot(o,t)}else if(1===e.touches.length){const o=Date.now();o-H.current<300&&(R((e=>e>1?1:2.5)),B({x:0,y:0})),H.current=o,M.current={x:e.touches[0].clientX,y:e.touches[0].clientY},q(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const o=e.touches[0].clientX-e.touches[1].clientX,t=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(o,t);if(W.current){const e=i/W.current;R((o=>Math.min(Math.max(o*e,1),5)))}W.current=i}else if(1===e.touches.length&&U&&D>1){const o=e.touches[0].clientX-M.current.x,t=e.touches[0].clientY-M.current.y;B((e=>({x:e.x+o,y:e.y+t}))),M.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{W.current=null,q(!1)},children:[(0,C.jsx)(xa,{onClick:()=>F(!1),children:(0,C.jsx)(a.$8F,{})}),(0,C.jsx)(ga,{src:(()=>{const e=fe[ne];return e?e.url?(0,Te.V)(e.url):xe||"":""})(),style:{transform:`scale(${D}) translate(${O.x/D}px, ${O.y/D}px)`},alt:"Zoom"})]})]})}const ol=n.Ay.div`
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
`,tl=n.Ay.div`
width: 80%;
display: flex;
flex-direction: column;
padding-top:40px;
`,il=n.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,nl=(n.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,(0,n.Ay)(b.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`),rl=(0,n.Ay)(qe.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`,al=n.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor}

`,ll=n.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor};
margin-top: 20px;
`,sl=n.Ay.div`
display: flex;
flex-direction: row;
gap:15px;
margin-top: 20px;


`,dl=n.Ay.div`
display: flex;
flex-direction: column;
gap:5px;
align-items: center;
justify-content: center;

`,cl=n.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #8bffb83d;
`,pl=(0,n.Ay)(r.EcP)`
font-size: 24px;
color:#51C288;
`,ul=n.Ay.div`
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

background-size: 300% 300%; /* Creates a smooth animated effect */`,hl=(0,n.Ay)(r.ao$)`
font-size: 24px;
/* color:#51C288; */
color:#5c595b;



`,xl=n.Ay.span`
font-size: 10px;
color:${e=>e.theme.popupTextColor}

`,gl=n.Ay.div`
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

`,ml=n.Ay.div`
width: 85%;
overflow: hidden;

`,fl=n.Ay.span`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
white-space: nowrap;
`,vl=(0,n.Ay)(r.zU_)`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`,yl=(0,n.Ay)(tt.RXm)`
font-size: 18px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`;function bl(e){let{showPopup:o,popupHandler:t,activeCategory:n}=e;const{restaurantName:r}=(0,y.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:r;(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[l].activeLanguage}));(0,i.useEffect)((()=>{const e=()=>{t(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const[s,d]=(0,i.useState)(!1);return(0,C.jsxs)(ol,{showPopup:o,children:[(0,C.jsx)(rl,{onClick:()=>{t(null)}}),(0,C.jsxs)(tl,{children:[(0,C.jsx)(al,{children:"Share Category"}),(0,C.jsxs)(sl,{children:[(0,C.jsxs)(dl,{children:[(0,C.jsx)(cl,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname,t=`https://api.whatsapp.com/send?text=${encodeURIComponent(o+"?categoryId="+e)}`;window.open(t,"_blank")})(n),children:(0,C.jsx)(pl,{})}),(0,C.jsx)(xl,{children:"Whatsapp"})]}),(0,C.jsxs)(dl,{children:[(0,C.jsx)(ul,{onClick:()=>{window.open("https://www.instagram.com/direct/inbox/","_blank")},children:(0,C.jsx)(hl,{})}),(0,C.jsx)(xl,{children:"Instagram"})]})]}),(0,C.jsx)(ll,{children:"Get Link"}),(0,C.jsxs)(gl,{children:[(0,C.jsx)(ml,{children:(0,C.jsx)(fl,{children:(e=>{if(e){return window.location.origin+window.location.pathname+"?categoryId="+e}})(n)})}),s?(0,C.jsx)(yl,{}):(0,C.jsx)(vl,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname;navigator.clipboard.writeText(o+"?categoryId="+e),d(!0),setTimeout((()=>{d(!1)}),4e3)})(n)})]})]}),(0,C.jsxs)(il,{children:["Copyright",(0,C.jsx)(nl,{}),"2024 ",(0,C.jsx)(Y.N_,{href:"https://www.menugic.com",children:"menugic.com"})]})]})}var wl=t(31088),Cl=t(5677),jl=t(38495);const $l=n.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,Al=n.Ay.div`
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
  animation: ${$l} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,kl=n.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,zl=n.Ay.div`
  display: flex;
  gap: 10px;
`,Sl=n.Ay.button`
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
`,Ll=n.Ay.button`
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

`,_l=e=>{let{onInstall:o,onDismiss:t,restaurantName:i,showInstallPopup:n}=e;return(0,C.jsxs)(Al,{showInstallPopup:n,children:[(0,C.jsxs)(kl,{children:["Access ",(0,C.jsx)("b",{children:i})," anytime with one tap ",(0,C.jsx)("b",{children:"Install The App!"})]}),(0,C.jsxs)(zl,{children:[(0,C.jsx)(Sl,{onClick:o,children:"Install"}),(0,C.jsx)(Ll,{onClick:t,children:"Dismiss"})]})]})};var Tl=t(42978),Il=t(34500);const El=n.i7`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,Nl=n.Ay.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${e=>e.theme.backgroundColor};
  font-family: ${e=>`${e.theme.font}, "Noto Kufi Arabic" !important`};
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
`,Pl=(n.Ay.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: ${e=>e.theme.backgroundColor};
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${e=>e.theme.categoryUnActive||"rgba(0,0,0,0.05)"};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.03);
`,n.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,n.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,n.Ay.button`
  border: none;
  background: ${e=>e.theme.mainColor}12;
  color: ${e=>e.theme.mainColor};
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;

  &:active {
    background: ${e=>e.theme.mainColor}25;
  }
`,n.Ay.img`
  height: 32px;
  max-width: 120px;
  object-fit: contain;
`,n.Ay.div`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: ${e=>e.theme.mainColor}15;
  color: ${e=>e.theme.mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${e=>e.theme.mainColor}20;
`,n.Ay.button`
  border: 1px solid ${e=>e.theme.mainColor}25;
  background: ${e=>e.theme.mainColor}10;
  color: ${e=>e.theme.mainColor};
  font-size: 10px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: background 0.15s;

  &:active {
    background: ${e=>e.theme.mainColor}25;
  }
`,n.Ay.div`
  width: 100%;
  margin-bottom: 16px;
  animation: ${El} 0.5s ease;
  padding: 0 12px;
`),Fl=n.Ay.div`
  width: 100%;
  height: 180px;
  border-radius: 14px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${e=>e.theme.categoryUnActive||"#e5e7eb"};
`,Dl=n.Ay.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 10px;
`,Rl=n.Ay.div`
  width: ${e=>e.$active?"18px":"6px"};
  height: 6px;
  border-radius: 3px;
  background: ${e=>e.$active?e.theme.mainColor:e.theme.categoryUnActive||"#d1d5db"};
  transition: all 0.3s ease;
`,Ol=n.Ay.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${e=>e.theme.textColor||e.theme.BoxTextColor||"#0f172a"};
  padding: 0 16px;
  margin: 8px 0 12px;
  text-align: ${e=>e.$rtl?"right":"left"};
`,Bl=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(${e=>e.$cols||3}, 1fr);
  gap: 12px;
  padding: 0 16px;
  animation: ${El} 0.6s ease 0.1s both;
`,Ul=n.i7`
  0% { transform: scale(1); }
  50% { transform: scale(0.96); }
  100% { transform: scale(1); }
`,ql=n.Ay.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: 14px;
  border: 1px solid ${e=>e.theme.categoryUnActive||"rgba(0,0,0,0.06)"};
  background: ${e=>e.theme.BoxColor||"#fff"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;

  &:active {
    animation: ${Ul} 0.25s ease;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }
`,Ml=n.Ay.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  background: ${e=>e.theme.categoryUnActive||"#f1f5f9"};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Wl=n.Ay.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${e=>e.theme.mainColor}20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.mainColor};
  font-size: 20px;
  font-weight: 700;
`,Hl=n.Ay.span`
  font-size: 11px;
  font-weight: 600;
  color: ${e=>e.theme.BoxTextColor||e.theme.textColor||"#334155"};
  text-align: center;
  line-height: 1.3;
  max-width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
`,Vl=(n.Ay.div`
  text-align: center;
  padding: 8px 0;
  font-size: 10px;
  color: ${e=>e.theme.textColor||"#94a3b8"}60;
  position: fixed;
  bottom: 60px;
  left: 0;
  right: 0;
  z-index: 90;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 600;
  }
`,"https://storage.googleapis.com/ecommerce-bucket-testing/");function Xl(e){var o,t;let{restaurant:n,restaurantName:r,categories:a,sliderImages:l,activeLanguage:s,showPopup:c,customerName:p,onCategorySelect:u,onSidebarOpen:h,onCartClick:x,onBranchesClick:g,onFeedbackClick:m,popupHandler:f,setshowSidebar:y,showSidebar:b}=e;(0,v.wA)();const[w,j]=(0,i.useState)(0),$=(!0===(null===n||void 0===n?void 0:n.show_slider_image)||1===(null===n||void 0===n?void 0:n.show_slider_image)||"1"===(null===n||void 0===n?void 0:n.show_slider_image))&&(null===l||void 0===l?void 0:l.length)>0;(0,i.useEffect)((()=>{if(!$||l.length<=1)return;const e=setInterval((()=>{j((e=>(e+1)%l.length))}),4e3);return()=>clearInterval(e)}),[$,null===l||void 0===l?void 0:l.length]);null!==n&&void 0!==n&&n.logoURL&&(n.logoURL.startsWith("http"),n.logoURL);let A={};try{A=JSON.parse((null===n||void 0===n?void 0:n.features)||"{}")}catch(Oe){A={}}const k="ar"===s;return(0,C.jsxs)(Nl,{style:{direction:k?"rtl":"ltr"},onClick:()=>{null!=c&&f(null)},children:[(0,C.jsx)(d,{showPopup:c}),(0,C.jsx)(Il.A,{onProductsClick:()=>{},onBranchesClick:g,onContactFormClick:()=>null===f||void 0===f?void 0:f("contactForm"),onFeedbackClick:m,onAboutClick:()=>null===f||void 0===f?void 0:f("about"),onOrderClick:x,onHomeClick:void 0,onCategoryClick:e=>u(e),onContactClick:()=>null===f||void 0===f?void 0:f("contactForm"),categories:a,activeCategory:null,setshowSidebar:y,showSidebar:b,popupHandler:f,isProductDetailsOpen:!1}),$&&(0,C.jsxs)(Pl,{children:[(0,C.jsx)(Fl,{style:{backgroundImage:`url(${Vl}${null===(o=l[w])||void 0===o?void 0:o.url})`}}),l.length>1&&(0,C.jsx)(Dl,{children:l.map(((e,o)=>(0,C.jsx)(Rl,{$active:o===w,onClick:()=>j(o)},o)))})]}),(0,C.jsx)(Ol,{$rtl:k,children:k?"\u0627\u0644\u0623\u0642\u0633\u0627\u0645":"Categories"}),(0,C.jsx)(Bl,{$cols:(null===(t=A)||void 0===t?void 0:t.landing_columns)||3,children:a.filter((e=>!e.isAllItems)).map((e=>{const o=k&&e.ar_category?e.ar_category:e.en_category||e.ar_category||"Category",t=e.image_url?Vl+e.image_url:null;return(0,C.jsxs)(ql,{onClick:()=>u(e.id),children:[t?(0,C.jsx)(Ml,{children:(0,C.jsx)("img",{src:t,alt:o,onError:e=>{e.target.style.display="none"}})}):(0,C.jsx)(Wl,{children:o.charAt(0).toUpperCase()}),(0,C.jsx)(Hl,{children:o})]},e.id)}))}),(0,C.jsx)(Tl.A,{hideHome:!1,hideCategories:!0,activeView:"home",showPopup:c,onHomeClick:()=>{},onCategoriesClick:()=>{},onCartClick:x,onFeedbackClick:m,onBranchesClick:g,restaurantName:r,branches:null===n||void 0===n?void 0:n.branches})]})}function Yl(){var e,o,t;const[n,r]=(0,Y.ok)(),a=n.get("productId"),c=n.get("categoryId"),{restaurantName:p}=(0,y.g)(),u=window.location.hostname.split(".")[0],h="menugic"!==u&&"localhost"!==u&&"www"!==u?u:p,x=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[h]})),g=(0,v.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[h])||void 0===t?void 0:t.activeLanguage)||"en"}));(0,i.useEffect)((()=>(document.documentElement.setAttribute("dir","ar"===g?"rtl":"ltr"),()=>document.documentElement.removeAttribute("dir"))),[g]);const[m,f]=(0,i.useState)(null),[b,w]=(0,i.useState)(""),[j,$]=(0,i.useState)(null),[A,k]=(0,i.useState)(null),[z,S]=(0,i.useState)(!0),[L,_]=(0,i.useState)((()=>!a&&!c)),T=(2===Number(null===x||void 0===x?void 0:x.template_id)||8===Number(null===x||void 0===x?void 0:x.template_id))&&(!0===(null===x||void 0===x?void 0:x.show_all_items_category)||1===(null===x||void 0===x?void 0:x.show_all_items_category)||"1"===(null===x||void 0===x?void 0:x.show_all_items_category)),I={id:"all-items",en_category:"All Items",ar_category:"\u0643\u0644 \u0627\u0644\u0623\u0635\u0646\u0627\u0641",isAllItems:!0,priority:999999,image_url:(null===x||void 0===x?void 0:x.logoURL)||(null===x||void 0===x?void 0:x.cover_url)||null},E=[...(null===x||void 0===x?void 0:x.categories)||[]].sort(((e,o)=>(o.priority||0)-(e.priority||0)||(e.id||0)-(o.id||0))),N=T?[I,...E]:E,[P,F]=(0,i.useState)(c?N.findIndex((e=>e.id==c)):0),[D,R]=((0,v.d4)((e=>(e.cart[h]||[]).reduce(((e,o)=>e+o.quantity),0))),(0,i.useState)(c||(null===N||void 0===N||null===(e=N[0])||void 0===e?void 0:e.id))),O=(0,i.useCallback)((e=>{R(e);const o=new URLSearchParams(n);"all-items"===e?o.delete("categoryId"):o.set("categoryId",e),r(o)}),[n,r]),B=e=>{document.body.style.overflow=null==e?"auto":"hidden",f(e)};(0,i.useEffect)((()=>{if(null!==x&&void 0!==x&&x.id){var e,o;const t=(null===x||void 0===x||null===(e=x.branches)||void 0===e||null===(o=e[0])||void 0===o?void 0:o.id)||null;(0,Pe.trackVisit)(x.id,t),(0,Pe.trackPageView)(x.id,t)}}),[null===x||void 0===x?void 0:x.id]),(0,i.useEffect)((()=>{console.log("\ud83d\udd0d PWA Debug Info:"),console.log("- Protocol:",window.location.protocol),console.log("- Host:",window.location.hostname),console.log("- Navigator:",navigator.userAgent);const e=e=>{e.preventDefault(),console.log("\u2705 Install prompt event captured!"),k(e),S(!0)};return window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",(e=>{console.log("\ud83c\udf89 Application installed successfully!")})),()=>{window.removeEventListener("beforeinstallprompt",e)}}),[]);let U={};try{U=JSON.parse((null===x||void 0===x?void 0:x.features)||"{}")}catch(Oe){U={}}const q=(null===x||void 0===x?void 0:x.sliderImages)||[],M=((!0===(null===x||void 0===x?void 0:x.show_slider_image)||1===(null===x||void 0===x?void 0:x.show_slider_image)||"1"===(null===x||void 0===x?void 0:x.show_slider_image))&&q.length,e=>{_(!1),R(e);const o=N.findIndex((o=>o.id===e));o>=0&&F(o);const t=new URLSearchParams(n);t.set("categoryId",e),r(t)});var W;return L&&!a?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Xl,{restaurant:x,restaurantName:h,categories:N,sliderImages:(null===x||void 0===x?void 0:x.sliderImages)||[],activeLanguage:g,showPopup:m,onCategorySelect:M,onSidebarOpen:()=>$(!0),onCartClick:()=>{var e;null!==(e=U)&&void 0!==e&&e.cart&&(window.history.pushState({},""),B("cart"))},onBranchesClick:()=>{window.history.pushState({},""),B("location")},onFeedbackClick:()=>{window.history.pushState({},""),B("feedback")},popupHandler:B,setshowSidebar:$,showSidebar:j}),(0,C.jsx)(wi,{restaurant:x,showPopup:m,popupHandler:B}),(null===(W=U)||void 0===W?void 0:W.cart)&&(0,C.jsx)(ur,{restaurant:x,showPopup:m,popupHandler:B}),(0,C.jsx)(wl.A,{restaurant:x,showPopup:m,popupHandler:B}),(0,C.jsx)(Cl.A,{restaurant:x,showPopup:m,popupHandler:B}),(0,C.jsx)(jl.A,{restaurant:x,showPopup:m,popupHandler:B}),(0,C.jsx)(zr,{categories:N,activeCategory:D,setactiveCategory:e=>M(e),setshowSidebar:$,showSidebar:j,setcarouselPosition:F,onFeedbackClick:()=>{window.history.pushState({},""),B("feedback")},onContactClick:()=>{window.history.pushState({},""),B("contactForm")},onBranchesClick:()=>{window.history.pushState({},""),B("location")},onAboutClick:()=>{window.history.pushState({},""),B("about")},onShareClick:()=>{window.history.pushState({},""),B("share")},branches:null===x||void 0===x?void 0:x.branches})]}):(0,C.jsxs)(l,{id:"wrapper",children:[(0,C.jsx)(Il.A,{onProductsClick:()=>window.scrollTo({top:0,behavior:"smooth"}),onBranchesClick:()=>{window.history.pushState({},""),B("location")},onContactFormClick:()=>{window.history.pushState({},""),B("contactForm")},onFeedbackClick:()=>{window.history.pushState({},""),B("feedback")},onAboutClick:()=>{window.history.pushState({},""),B("about")},onOrderClick:()=>{var e;null!==(e=U)&&void 0!==e&&e.cart&&(window.history.pushState({},""),B("cart"))},onHomeClick:void 0,onCategoryClick:e=>{O(e);const o=N.findIndex((o=>o.id===e));o>=0&&F(o)},onContactClick:()=>{window.history.pushState({},""),B("contactForm")},categories:N,activeCategory:D,setshowSidebar:$,showSidebar:j,popupHandler:B,isProductDetailsOpen:!!a}),(0,C.jsxs)(s,{onClick:()=>{null!=m&&B(null)},children:[(0,C.jsx)(d,{showPopup:m}),(0,C.jsx)(X,{categories:N,activeCategory:D,setactiveCategory:O,setSearchText:w,searchText:b,setshowSidebar:$,showSidebar:j,carouselPosition:P,setcarouselPosition:F,popupHandler:B,showMenuSlider:!1,sliderImages:[],hideHeaderTop:!0}),(0,C.jsx)(Nt,{menu:x.categories,activeCategory:D,showPopup:m,searchText:b,setactiveCategory:O,setcarouselPosition:F,carouselPosition:P,categories:N})]}),(0,C.jsx)(wi,{restaurant:x,showPopup:m,popupHandler:B}),(null===(o=U)||void 0===o?void 0:o.cart)&&(0,C.jsx)(ur,{restaurant:x,showPopup:m,popupHandler:B}),(0,C.jsx)(bl,{showPopup:m,popupHandler:B,activeCategory:D}),(0,C.jsx)(wl.A,{restaurant:x,showPopup:m,popupHandler:B}),(0,C.jsx)(Cl.A,{restaurant:x,showPopup:m,popupHandler:B}),(0,C.jsx)(jl.A,{restaurant:x,showPopup:m,popupHandler:B}),(0,C.jsx)(zr,{categories:N,activeCategory:D,setactiveCategory:O,setshowSidebar:$,showSidebar:j,setcarouselPosition:F,onFeedbackClick:()=>{window.history.pushState({},""),B("feedback")},onContactClick:()=>{window.history.pushState({},""),B("contactForm")},onBranchesClick:()=>{window.history.pushState({},""),B("location")},onAboutClick:()=>{window.history.pushState({},""),B("about")},onShareClick:()=>{window.history.pushState({},""),B("share")},branches:null===x||void 0===x?void 0:x.branches}),a&&(0,C.jsx)(el,{productId:a,searchParams:n,setSearchParams:r}),(null===(t=U)||void 0===t?void 0:t.install_app)&&(0,C.jsx)(_l,{showInstallPopup:z,onInstall:async()=>{if(!A)return;A.prompt();"accepted"===(await A.userChoice).outcome?console.log("User accepted the install"):console.log("User dismissed the install"),k(null),S(!1)},restaurantName:h,onDismiss:()=>S(!1)}),(0,C.jsx)(Tl.A,{hideHome:!1,hideCategories:!0,activeView:"products",showPopup:m,onHomeClick:()=>{_(!0);const e=new URLSearchParams(n);e.delete("categoryId"),e.delete("productId"),r(e)},onCategoriesClick:()=>window.scrollTo({top:0,behavior:"smooth"}),onCartClick:()=>{var e;null!==(e=U)&&void 0!==e&&e.cart&&(window.history.pushState({},""),B("cart"))},onFeedbackClick:()=>{window.history.pushState({},""),B("feedback")},onBranchesClick:()=>{window.history.pushState({},""),B("location")},restaurantName:h,branches:null===x||void 0===x?void 0:x.branches})]})}},72929:(e,o,t)=>{"use strict";t.d(o,{Z:()=>s,z:()=>l});var i=t(41190);const n=i.i7`
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
`},20965:(e,o,t)=>{"use strict";t(42564).default},34848:e=>{"use strict";function o(e,o){if("function"!==typeof e)throw new TypeError("argument fn must be a function");return e}function t(e,o,t){if(!e||"object"!==typeof e&&"function"!==typeof e)throw new TypeError("argument obj must be object");var i=Object.getOwnPropertyDescriptor(e,o);if(!i)throw new TypeError("must call property on owner object");if(!i.configurable)throw new TypeError("property must be configurable")}e.exports=function(e){if(!e)throw new TypeError("argument namespace is required");function i(e){}return i._file=void 0,i._ignored=!0,i._namespace=e,i._traced=!1,i._warned=Object.create(null),i.function=o,i.property=t,i}},26340:(e,o,t)=>{"use strict";var i,n=t(34848)("http-errors"),r=t(40203),a=t(53910),l=t(61033),s=t(51798);function d(e){return Number(String(e).charAt(0)+"00")}function c(e,o){var t=Object.getOwnPropertyDescriptor(e,"name");t&&t.configurable&&(t.value=o,Object.defineProperty(e,"name",t))}function p(e){return"Error"!==e.substr(-5)?e+"Error":e}e.exports=function e(){for(var o,t,i=500,r={},l=0;l<arguments.length;l++){var s=arguments[l],c=typeof s;if("object"===c&&s instanceof Error)i=(o=s).status||o.statusCode||i;else if("number"===c&&0===l)i=s;else if("string"===c)t=s;else{if("object"!==c)throw new TypeError("argument #"+(l+1)+" unsupported type "+c);r=s}}"number"===typeof i&&(i<400||i>=600)&&n("non-error status code; use only 4xx or 5xx status codes");("number"!==typeof i||!a.message[i]&&(i<400||i>=600))&&(i=500);var p=e[i]||e[d(i)];o||(o=p?new p(t):new Error(t||a.message[i]),Error.captureStackTrace(o,e));p&&o instanceof p&&o.status===i||(o.expose=i<500,o.status=o.statusCode=i);for(var u in r)"status"!==u&&"statusCode"!==u&&(o[u]=r[u]);return o},e.exports.HttpError=function(){function e(){throw new TypeError("cannot construct abstract class")}return l(e,Error),e}(),e.exports.isHttpError=(i=e.exports.HttpError,function(e){return!(!e||"object"!==typeof e)&&(e instanceof i||e instanceof Error&&"boolean"===typeof e.expose&&"number"===typeof e.statusCode&&e.status===e.statusCode)}),function(e,o,t){o.forEach((function(o){var i,n=s(a.message[o]);switch(d(o)){case 400:i=function(e,o,t){var i=p(o);function n(e){var o=null!=e?e:a.message[t],l=new Error(o);return Error.captureStackTrace(l,n),r(l,n.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:o,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(n,e),c(n,i),n.prototype.status=t,n.prototype.statusCode=t,n.prototype.expose=!0,n}(t,n,o);break;case 500:i=function(e,o,t){var i=p(o);function n(e){var o=null!=e?e:a.message[t],l=new Error(o);return Error.captureStackTrace(l,n),r(l,n.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:o,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(n,e),c(n,i),n.prototype.status=t,n.prototype.statusCode=t,n.prototype.expose=!1,n}(t,n,o)}i&&(e[o]=i,e[n]=i)}))}(e.exports,a.codes,e.exports.HttpError)},61033:e=>{"function"===typeof Object.create?e.exports=function(e,o){o&&(e.super_=o,e.prototype=Object.create(o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,o){if(o){e.super_=o;var t=function(){};t.prototype=o.prototype,e.prototype=new t,e.prototype.constructor=e}}},29477:(e,o,t)=>{"use strict";var i=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("unable to locate global object")}();e.exports=o=i.fetch,i.fetch&&(o.default=i.fetch.bind(i)),o.Headers=i.Headers,o.Request=i.Request,o.Response=i.Response},40203:e=>{"use strict";e.exports=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,o){return e.__proto__=o,e}:function(e,o){for(var t in o)Object.prototype.hasOwnProperty.call(e,t)||(e[t]=o[t]);return e})},53910:(e,o,t)=>{"use strict";var i=t(17662);function n(e){if(!Object.prototype.hasOwnProperty.call(r.message,e))throw new Error("invalid status code: "+e);return r.message[e]}function r(e){if("number"===typeof e)return n(e);if("string"!==typeof e)throw new TypeError("code must be a number or string");var o=parseInt(e,10);return isNaN(o)?function(e){var o=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(r.code,o))throw new Error('invalid status message: "'+e+'"');return r.code[o]}(e):n(o)}e.exports=r,r.message=i,r.code=function(e){var o={};return Object.keys(e).forEach((function(t){var i=e[t],n=Number(t);o[i.toLowerCase()]=n})),o}(i),r.codes=function(e){return Object.keys(e).map((function(e){return Number(e)}))}(i),r.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},r.empty={204:!0,205:!0,304:!0},r.retry={502:!0,503:!0,504:!0}},51798:e=>{"use strict";e.exports=function(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join("").replace(/[^ _0-9a-z]/gi,"")}},42564:(e,o,t)=>{"use strict";t(29477),t(26340)},17662:e=>{"use strict";e.exports=JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a Teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Too Early","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')}}]);
//# sourceMappingURL=5911.77b3bfff.chunk.js.map