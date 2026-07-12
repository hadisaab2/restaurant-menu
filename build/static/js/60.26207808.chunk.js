"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[60],{699:(e,o,t)=>{t.r(o),t.d(o,{default:()=>Aa});var i=t(82483),n=t(41190),r=t(42751),a=t(22829);const l=n.Ay.div`
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


`;var v=t(91965),y=t(93376),b=t(1901);const w=n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;
`,j=n.Ay.div`
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
`,C=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  /* transform: ${e=>`translateX(-${100*e.carouselPosition/4}%)`}; */
`,$=n.Ay.div`
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
`,A=n.Ay.div`
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
`,k=n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;

`,z=n.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
background-color:${e=>e.categoryId==e.activeCategory?e.theme.categoryActiveIcon:e.theme.categoryUnactiveIcon};
transition: 0.2s all ease-in-out;

`,S=n.Ay.img`
width:20px;
height:20px;

`,_=n.Ay.div`
 display: flex;
justify-content: center; 
flex:0.8;
width: 100%;
`,T=n.Ay.span`
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
`,L=(0,n.Ay)(b.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
@media (min-width: 1024px) {
        right: 20px;
    }
`,I=(0,n.Ay)(b.NaI)`
position: absolute;
font-size: 22px;
left: 0px;
color:${e=>e.theme.textColor};
rotate: calc(180deg);
@media (min-width: 1024px) {
        left: 20px;
    }
`;var P=t(22139),N=t(58821),E=t(56723);function F(e){let{categories:o,activeCategory:t,setactiveCategory:n,carouselPosition:r,setcarouselPosition:a}=e;const{restaurantName:l}=(0,y.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[d].activeLanguage})),p=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[d]})),u=(0,i.useRef)([]);return(0,i.useEffect)((()=>{u.current=u.current.slice(0,o.length)}),[o.length]),(0,i.useEffect)((()=>{u.current[r]&&u.current[r].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[r]),(0,E.jsxs)(w,{children:[(null===o||void 0===o?void 0:o.length)>4&&r>=1&&(0,E.jsx)(I,{onClick:()=>{r>0&&a(r-1)}}),(0,E.jsx)(j,{children:(0,E.jsx)(C,{carouselPosition:r,children:null===o||void 0===o?void 0:o.sort(((e,o)=>o.priority-e.priority)).map(((e,o)=>(0,E.jsx)($,{activeLanuguage:c,activeCategory:t,categoryId:e.id,onClick:()=>((e,o)=>{(0,P.c)(e),n(e),a(o)})(e.id,o),ref:e=>u.current[o]=e,children:(0,E.jsxs)(A,{activeCategory:t,categoryId:e.id,children:[(0,E.jsx)(k,{children:(0,E.jsx)(z,{activeCategory:t,categoryId:e.id,children:(0,E.jsx)(S,{src:e.image_url?(0,N.V)(e.image_url):e.isAllItems&&null!==p&&void 0!==p&&p.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${p.logoURL}`:e.isAllItems&&null!==p&&void 0!==p&&p.cover_url?`https://storage.googleapis.com/ecommerce-bucket-testing/${p.cover_url}`:""})})}),(0,E.jsx)(_,{children:(0,E.jsx)(T,{activeCategory:t,categoryId:e.id,children:"en"==c?e.en_category||e.ar_category:e.ar_category||e.en_category})})]})})))})}),(null===o||void 0===o?void 0:o.length)>4&&(0,E.jsx)(L,{onClick:()=>{r<o.length-4&&a(r+1)}})]})}const D=n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;
`,B=n.Ay.div`
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
`,R=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;

`,U=n.Ay.div`
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

`,O=n.Ay.div`
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
`,q=(n.Ay.div`
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

`),M=n.Ay.span`

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 12px;
  user-select: none !important;
  -webkit-user-select: none !important;  /* For Safari (iOS) */
  -moz-user-select: none !important;     /* For Firefox */
  -ms-user-select: none !important;      /* For Internet Explorer */
`,W=(0,n.Ay)(b.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
`;function H(e){let{categories:o,activeCategory:t,setactiveCategory:n,carouselPosition:r,setcarouselPosition:a}=e;const{restaurantName:l}=(0,y.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[d].activeLanguage})),p=(0,i.useRef)([]);return(0,i.useEffect)((()=>{p.current=p.current.slice(0,o.length)}),[o.length]),(0,i.useEffect)((()=>{p.current[r]&&p.current[r].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[r]),(0,E.jsxs)(D,{children:[(0,E.jsx)(B,{children:(0,E.jsx)(R,{children:null===o||void 0===o?void 0:o.sort(((e,o)=>o.priority-e.priority)).map(((e,o)=>(0,E.jsx)(U,{activeLanuguage:c,activeCategory:t,categoryId:e.id,onClick:()=>((e,o)=>{(0,P.c)(e),n(e),a(o)})(e.id,o),index:o,ref:e=>p.current[o]=e,children:(0,E.jsx)(O,{activeCategory:t,categoryId:e.id,children:(0,E.jsx)(q,{children:(0,E.jsx)(M,{activeCategory:t,categoryId:e.id,children:"en"===c?e.en_category||e.ar_category:e.ar_category||e.en_category})})})},e.id)))})}),(null===o||void 0===o?void 0:o.length)>4&&(0,E.jsx)(W,{onClick:()=>{r<o.length-4&&a(r+1)}})]})}function V(e){let{categories:o,activeCategory:t,setactiveCategory:i,carouselPosition:n,setcarouselPosition:r}=e;const{restaurantName:a}=(0,y.g)(),l=window.location.hostname.split(".")[0],s="menugic"!==l&&"localhost"!==l&&"www"!==l?l:a,d=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[s]}));return(0,E.jsxs)(E.Fragment,{children:["vertical-category"==d.category_type&&(0,E.jsx)(F,{categories:o,activeCategory:t,setactiveCategory:i,carouselPosition:n,setcarouselPosition:r}),"horizantal-withoutIcon"==d.category_type&&(0,E.jsx)(H,{categories:o,activeCategory:t,setactiveCategory:i,carouselPosition:n,setcarouselPosition:r})]})}var J=t(11671);const Y=n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 10vh;
width: 100%;
`,X=n.Ay.div`
display: flex;
align-items: center;
position: relative;
height: 10vh;
justify-content: space-between;
width: 90%;
position: relative;

`,K=n.Ay.img`
max-width: min(250px, 50vw);
max-height: 100px;
object-fit: contain;
position: absolute;
margin-right: 7px;

`,Q=n.Ay.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`,G=n.Ay.div`
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
`,Z=n.Ay.div`
width: 100%;
background-color: ${e=>e.theme.languagebackground};
opacity: 0.6;
position: absolute;
height: 100%;
z-index: 1;
border-radius: 10px;


`,ee=n.Ay.div`
position: absolute;
background-color: ${e=>e.theme.languagebackground};
left:${e=>"en"==e.activeLanguage?"0px":"32px"} ;
transition:all ease-in-out 0.2s;
height: 100%;
width: 50%;
z-index: 2;

`,oe=n.Ay.div`
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
`,te=(0,n.Ay)(J.IMk)`
color: ${e=>e.theme.mainColor};
font-size: 27px;

`;var ie=t(17123),ne=t(90997);function re(e){var o,t,n,r,l;let{setshowSidebar:s,showSidebar:d}=e;const{restaurantName:c}=(0,y.g)(),p=(0,i.useRef)(null),u=window.location.hostname.split(".")[0],h="menugic"!==u&&"localhost"!==u&&"www"!==u?u:c,x=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[h]})),g=(0,v.wA)(),m=(null===x||void 0===x?void 0:x.activeLanguage)||"en",f=e=>{g((0,ie.y)({name:h,activeLanguage:e}))};let b={};try{b=JSON.parse((null===x||void 0===x?void 0:x.features)||"{}")}catch(Qe){}return(0,E.jsxs)(Y,{children:[(0,E.jsx)(K,{src:(null===x||void 0===x?void 0:x.logoURL)&&`https://storage.googleapis.com/ecommerce-bucket-testing/${x.logoURL}`}),(0,E.jsxs)(X,{children:[(0,E.jsx)(Q,{children:(0,E.jsx)(te,{onClick:()=>{s(!d)}})}),(0,E.jsxs)(Q,{style:{gap:8},children:[!1!==(null===(o=b)||void 0===o?void 0:o.user_registration)&&(0,E.jsx)("div",{onClick:()=>{var e,o;return null===(e=p.current)||void 0===e||null===(o=e.toggle)||void 0===o?void 0:o.call(e)},style:{width:32,height:32,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",background:null!==x&&void 0!==x&&x.theme&&(null===(t=JSON.parse(x.theme))||void 0===t?void 0:t.languagebackground)||"#f0f0f0",color:null!==x&&void 0!==x&&x.theme&&(null===(n=JSON.parse(x.theme))||void 0===n?void 0:n.languageTextColor)||"#666",fontSize:16},children:(0,E.jsx)(a.SNd,{})}),"en&ar"===(null===x||void 0===x?void 0:x.languages)&&(0,E.jsxs)(G,{children:[(0,E.jsx)(Z,{}),(0,E.jsx)(ee,{activeLanguage:m}),(0,E.jsx)(oe,{activeLanguage:m,language:"en",onClick:()=>f("en"),children:"En"}),(0,E.jsx)(oe,{activeLanguage:m,language:"ar",onClick:()=>f("ar"),children:"Ar"})]})]})]}),!1!==(null===(r=b)||void 0===r?void 0:r.user_registration)&&(0,E.jsx)(ne.A,{ref:p,restaurantName:h,restaurantId:null===x||void 0===x?void 0:x.id,activeLanguage:m,accentColor:null!==x&&void 0!==x&&x.theme&&(null===(l=JSON.parse(x.theme))||void 0===l?void 0:l.mainColor)||"#5eabb1"})]})}var ae=t(92733);function le(e){let{activeCategory:o,setactiveCategory:t,categories:i,setSearchText:n,searchText:r,setshowSidebar:a,showSidebar:l,carouselPosition:s,setcarouselPosition:d,popupHandler:c,showMenuSlider:b,sliderImages:w,hideHeaderTop:j=!1}=e;const{restaurantName:C}=(0,y.g)(),$=window.location.hostname.split(".")[0],A="menugic"!==$&&"localhost"!==$&&"www"!==$?$:C,k=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[A].activeLanguage}));return(0,E.jsxs)(p,{children:[!j&&(0,E.jsx)(re,{setshowSidebar:a,showSidebar:l}),b&&(0,E.jsx)(ae.A,{images:w,activeLanguage:k||"en",variant:"theme2"}),(0,E.jsx)(V,{categories:i,activeCategory:o,setactiveCategory:t,carouselPosition:s,setcarouselPosition:d}),(0,E.jsxs)(u,{children:[(0,E.jsxs)(h,{children:[(0,E.jsx)(g,{activeLanguage:k}),(0,E.jsx)(x,{type:"text",activeLanguage:k,dir:"en"==k?"ltr":"rtl",placeholder:"en"==k?"Search Category":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{n(e.target.value)},value:r})]}),(0,E.jsxs)(m,{onClick:()=>{window.history.pushState({},""),c("share")},children:["en"==k&&(0,E.jsx)(f,{}),"en"==k?"Share":"\u0646\u0634\u0631","en"!==k&&(0,E.jsx)(f,{})]})]})]})}var se=t(99891),de=t(11222);const ce=n.Ay.div`
 width: 100%;
 margin-top: 10px;
 padding-bottom: 90px;
 display: flex;
 justify-content: center;
`,pe=n.Ay.div`
 flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: ${e=>e.$noMinHeight?"0":"70vh"};
  opacity: 1;
  transition:all 0.7s ease-in-out;
`,ue=(n.Ay.div`
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
`),he=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`,xe=n.Ay.h3`
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
`,ge=(n.Ay.button`
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
`),me=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${e=>e.theme.mainColor};
  font-size: 13px;
`,fe=n.Ay.div`
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
`,ve=n.Ay.button`
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
`,ye=n.Ay.div`
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
`,be=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,we=n.Ay.div`
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
`,je=n.Ay.div`
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
`,Ce=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,$e=n.Ay.h4`
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
`,Ae=n.Ay.div`
  font-size: 15px;
  font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#007bff"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${e=>"ar"===e.activeLanguage?"row-reverse":"row"};
`,ke=n.Ay.span`
  font-size: 14px;
  color: ${e=>e.theme.BoxPriceColor||e.theme.textColor||"#666"};
  text-decoration: line-through;
  opacity: 0.6;
`,ze=n.Ay.div`
  position: relative;
  width: 100%;
`,Se=n.Ay.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    @media (min-width: 1024px) {
        width: 20%;
    }
`,_e=n.Ay.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.theme.BoxColor};
    border-radius: 20px;
    position: relative;

    //cjhange loadeeerr wrappperr and this oneee colorrrr

`,Te=n.Ay.img`
width:90%;
height:100%;
object-fit: cover;
border-radius: 10px;
visibility: ${e=>e.imageLoaded?"visible":"hidden"};
/* display:${e=>e.imageLoaded?"block":"none"} */
`,Le=n.Ay.div`
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


`,Ie=n.Ay.div`
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

`,Pe=n.Ay.span`
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



`,Ne=n.Ay.div`
display: flex;
flex-direction: row;
gap:5px;
`,Ee=n.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;
text-decoration:${e=>e.discounted?"line-through":"none"};


`,Fe=n.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;

`,De=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Be=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${De} 1s linear infinite; /* Apply animation */
`,Re=n.Ay.div`
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

`,Ue=n.Ay.div`
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
`,Oe=n.Ay.button`
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
`,qe=n.Ay.div`
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
`,Me=n.Ay.button`
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
`;var We=t(18907),He=t(86001),Ve=t(81132),Je=t(70268),Ye=t(81926),Xe=t(71481),Ke=t(2200);const Qe=t(34304),Ge=i.forwardRef(((e,o)=>{var t,n,r,l,s;let{plate:d,setactivePlate:c,activePlate:p,index:u,showPopup:h,setSearchParams:x,searchParams:g,activeCategoryId:m,categories:f,disableDetails:b,wishlistIds:w,onWishlistChange:j}=e;const{restaurantName:C}=(0,y.g)(),$=window.location.hostname.split(".")[0],A="menugic"!==$&&"localhost"!==$&&"www"!==$?$:C,k=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[A]})),z=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[A].activeLanguage})),S=(0,v.wA)(),[_,T]=(0,i.useState)(!1);let L={};try{L=JSON.parse((null===k||void 0===k?void 0:k.features)||"{}")}catch(Qe){}const I=Boolean(null===d||void 0===d?void 0:d.out_of_stock)||1===Number(null===d||void 0===d?void 0:d.out_of_stock),P=null===f||void 0===f?void 0:f.find((e=>e.id==m)),F=(()=>{try{var e,o,t,i;const n=null!==d&&void 0!==d&&d.form_json?JSON.parse(d.form_json):null;return n&&((null===(e=n.components)||void 0===e?void 0:e.length)>0||2===n.version&&((null===(o=n.sizes)||void 0===o?void 0:o.length)>0||(null===(t=n.addons)||void 0===t?void 0:t.length)>0||(null===(i=n.removals)||void 0===i?void 0:i.length)>0))}catch{return!1}})(),D=(0,i.useCallback)((e=>{const o=document.getElementById("cart-tab-icon");if(!o)return;const t=(null===e||void 0===e?void 0:e.currentTarget)||(null===e||void 0===e?void 0:e.target),i=t?t.getBoundingClientRect():null,n=o.getBoundingClientRect();if(!i)return;const r=(null===k||void 0===k?void 0:k.mainColor)||(null===k||void 0===k?void 0:k.maincolor)||"#a6ce39",a=i.left+i.width/2,l=i.top+i.height/2,s=n.left+n.width/2,d=n.top+n.height/2,c=document.createElement("div");c.style.cssText=`\n        position: fixed;\n        left: ${a-14}px;\n        top: ${l-14}px;\n        width: 28px; height: 28px;\n        border-radius: 50%;\n        background: ${r};\n        box-shadow: 0 4px 15px ${r}88, 0 2px 6px rgba(0,0,0,0.3);\n        z-index: 99999;\n        pointer-events: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      `,c.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>',document.body.appendChild(c);const p=document.createElement("div");p.style.cssText=`\n        position: fixed;\n        left: ${a-10}px;\n        top: ${l-10}px;\n        width: 20px; height: 20px;\n        border-radius: 50%;\n        background: ${r}55;\n        z-index: 99998;\n        pointer-events: none;\n      `,document.body.appendChild(p);const u=(a+s)/2+(a>s?60:-60),h=Math.min(l,d)-120,x=c.animate([{left:a-14+"px",top:l-14+"px",width:"28px",height:"28px",opacity:1,transform:"scale(1)"},{left:u-12+"px",top:h-12+"px",width:"24px",height:"24px",opacity:1,transform:"scale(1.1)",offset:.35},{left:s-8+"px",top:d-8+"px",width:"16px",height:"16px",opacity:.6,transform:"scale(0.6)"}],{duration:650,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"});p.animate([{left:a-10+"px",top:l-10+"px",width:"20px",height:"20px",opacity:.5},{left:u-8+"px",top:h-8+"px",width:"16px",height:"16px",opacity:.3,offset:.4},{left:s-4+"px",top:d-4+"px",width:"8px",height:"8px",opacity:0}],{duration:700,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"}),x.onfinish=()=>{c.remove(),p.remove();(o.closest("[data-tab]")||o.parentElement||o).animate([{transform:"scale(1)"},{transform:"scale(1.35)",offset:.25},{transform:"scale(0.85)",offset:.5},{transform:"scale(1.15)",offset:.75},{transform:"scale(1)"}],{duration:500,easing:"ease-out"})}}),[k]),B=(0,Ke.Q)(null===k||void 0===k?void 0:k.currency),R=(0,Je.wU)(A),U=w&&"function"===typeof w.has&&w.has(d.id);let O;O=0===parseFloat(null===P||void 0===P?void 0:P.discount)?parseFloat(d.discount):parseFloat(P.discount);const q=null!==(t=null===(n=d.images)||void 0===n?void 0:n.findIndex((e=>e.id===d.new_cover_id)))&&void 0!==t?t:-1,M=q>=0&&(null===(r=d.images)||void 0===r||null===(l=r[q])||void 0===l?void 0:l.url),W=null!==k&&void 0!==k&&k.logoURL?(0,N.V)(k.logoURL):null,H=M?(0,N.V)(d.images[q].url):W||"";return(0,E.jsx)(Se,{index:u,activePlate:p,className:"lazy-load",children:(0,E.jsxs)(_e,{children:[!_&&(0,E.jsx)(Re,{children:(0,E.jsx)(Be,{})}),(0,E.jsxs)(Le,{onClick:()=>{if(null==p&&_&&!h){b||c(u);const e=new URLSearchParams(g);e.set("productId",null===d||void 0===d?void 0:d.id),m&&e.set("categoryId",m),x(e),window.history.pushState({},"",`?${e.toString()}`),document.body.style.overflow="hidden"}},children:[d.new&&(0,E.jsx)(Ue,{children:"en"===(null===k||void 0===k?void 0:k.activeLanguage)?"NEW !":"! \u062c\u062f\u064a\u062f"}),(0,E.jsx)(Te,{ref:o,onLoad:()=>{T(!0)},src:H,imageLoaded:_}),R&&(0,E.jsx)(Me,{type:"button",activeLanuguage:null===k||void 0===k?void 0:k.activeLanguage,$filled:U,onClick:e=>{e&&(e.preventDefault(),e.stopPropagation()),R&&null!==d&&void 0!==d&&d.id&&(async()=>{try{U?await de.A.delete((0,Ve.Vr)(d.id),{headers:{Authorization:`Bearer ${R}`}}):await de.A.post(Ve.Vb,{product_id:d.id},{headers:{Authorization:`Bearer ${R}`}}),null===j||void 0===j||j()}catch(e){console.error("Wishlist error:",e)}})()},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchStart:e=>e.stopPropagation(),children:(0,E.jsx)(a.phF,{size:16})}),!1!==(null===(s=L)||void 0===s?void 0:s.cart)&&(I?(0,E.jsx)(qe,{activeLanuguage:z,children:"en"===z?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631"}):(0,E.jsx)(Oe,{onClick:e=>{var o,t;if(e&&(e.preventDefault(),e.stopPropagation()),!1===(null===(o=L)||void 0===o?void 0:o.cart)||I)return;if(!0===(null===(t=L)||void 0===t?void 0:t.quick_add_requires_options)&&F){if(null==p&&!h){b||c(u);const e=new URLSearchParams(g);e.set("productId",null===d||void 0===d?void 0:d.id),m&&e.set("categoryId",m),x(e),window.history.pushState({},"",`?${e.toString()}`),document.body.style.overflow="hidden"}return}const i=(parseFloat((null===d||void 0===d?void 0:d.en_price)||"0")||0)*(1-(0===parseFloat(null===P||void 0===P?void 0:P.discount)?parseFloat((null===d||void 0===d?void 0:d.discount)||0):parseFloat((null===P||void 0===P?void 0:P.discount)||0))/100);var n,r;(S((0,He.bE)(A,d,1,{},i,"")),null!==k&&void 0!==k&&k.id&&null!==d&&void 0!==d&&d.id)&&(0,Ye.trackAddToCart)(k.id,d.id,m,1,(null===k||void 0===k||null===(n=k.branches)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.id)||null);D(e)},onMouseDown:e=>e.stopPropagation(),activeLanuguage:z,children:(0,E.jsx)(Xe._xK,{size:12})}))]}),(0,E.jsxs)(Ie,{activeLanuguage:null===k||void 0===k?void 0:k.activeLanguage,children:[(0,E.jsx)(Pe,{fontSize:null===k||void 0===k?void 0:k.font_size,children:"en"===(null===k||void 0===k?void 0:k.activeLanguage)?d.en_name||d.ar_name:d.ar_name||d.en_name}),!Qe.isEmpty(d.en_price)&&(0,E.jsxs)(Ne,{children:[(0,E.jsx)(Ee,{discounted:0!=O,children:(0,We.T)(parseFloat(d.en_price),B)}),(0,E.jsx)(Fe,{children:0!=O&&(0,We.T)(parseFloat(d.en_price)*(1-parseFloat(O)/100),B)})]})]})]})})}));var Ze=t(99998),eo=t(10448),oo=t(34304),to=t.n(oo);const io=n.Ay.div`
  
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

`,no=n.i7`
 0% {
    height:20vh;
    top:0px;
}

 100% {
    height:45vh;
    top:10px;

    }
`,ro=(n.i7`
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
`),ao=n.Ay.div`
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
`,lo=n.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
`,so=n.Ay.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  flex-shrink: 0;
`,co=n.Ay.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,po=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,uo=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${po} 1s linear infinite; /* Apply animation */
`,ho=n.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,xo=n.Ay.img`
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
`,go=n.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,mo=(0,n.Ay)(eo.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,fo=(0,n.Ay)(eo.m6W)`
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
`,vo=(0,n.Ay)(eo.OQo)`
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
`,yo=n.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${go} 0.4s ease-in-out;
`,bo=n.Ay.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
  margin-top: 10px !important;
`,wo=n.i7`
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
`,jo=n.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${wo} 1s ease-in-out;
`,Co=(n.Ay.div`
  width:90%;
  /* height: ${e=>e.CloseAnimation?"45vh":"25vh"}; */
  height: ${e=>e.squareDimension?"45vh":"60vh"};

  border-radius:40px;
  margin-top: 0px;
  display:flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${no} 0.4s;
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
`),$o=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ao=n.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${Co} 0.8s ease-in-out;

`,ko=n.Ay.div`
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
`,zo=n.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:${e=>"en"==e.activeLanguage?"left":"right"} ;
  opacity: 1;
  margin-top: 5px;
`,So=n.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,_o=n.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,To=n.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,Lo=n.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,Io=n.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,Po=n.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,No=n.Ay.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${Po} 0.7s ease-in-out;
  background-color: ${e=>e.theme.backgroundColor};

  display: ${e=>e.CloseAnimation?"flex":"none"};
  box-shadow: 0px -3px 5px rgba(180, 180, 180, 0.1); /* Slight shadow on the top */
  padding-bottom: 10px;
  margin-top: 30px;
  @media (min-width: 1024px) {
        width: 50%;
    }
`,Eo=n.Ay.button`
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
`,Fo=n.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,Do=n.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,Bo=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Ro=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Uo=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,Oo=n.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,qo=n.Ay.div`
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
  animation: ${Oo} 0.4s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,Mo=n.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`,Wo=n.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,Ho=n.Ay.input`
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

`,Vo=n.Ay.button`
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
`,Jo=n.Ay.div`
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
`,Yo=n.Ay.button`
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
`,Xo=n.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`,Ko=n.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display: flex;
`,Qo=n.Ay.div`
display: flex;
flex-direction: row;
`,Go=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,Zo=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,et=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,ot=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,tt=n.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,it=n.Ay.span`
position: absolute;
left: 0;

`,nt=n.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,rt=(0,n.Ay)(r.Z0P)`
    animation:1.2s ${nt}  linear infinite ;
    position: absolute;
`;function at(e){let{carouselIndex:o,images:t,CloseAnimation:i,carouselSwiped:n}=e;return(0,E.jsxs)(Ko,{CloseAnimation:i,children:[(0,E.jsxs)(Qo,{children:[(0,E.jsx)(Go,{carouselIndex:o,children:(0,E.jsx)(Zo,{})}),t.map((e=>(0,E.jsx)(et,{children:(0,E.jsx)(ot,{})})))]}),!n&&(0,E.jsxs)(tt,{children:[(0,E.jsx)(it,{children:"Swipe"}),(0,E.jsx)(rt,{})]})]})}n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const lt=n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,st=(n.Ay.label`
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
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(to().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`),dt=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,ct=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,pt=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let o=e.theme.formColor;if(to().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.1)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.1)`)):o}};
  font-size:10px;

`,ut=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,ht=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${e=>e.theme.formColor};

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);var xt=t(41235);function gt(e){let{component:o,formData:t,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(t[o.key]||[]);return(0,E.jsxs)(st,{index:r,children:[(0,E.jsx)(lt,{children:o.label}),o.values.map((e=>(0,E.jsxs)(ct,{children:[s.some((o=>o===e.label))?(0,E.jsx)(ut,{onClick:()=>{(e=>{let t=s.filter((o=>o!==e.label));d(t),n(o.key,t)})(e)},children:(0,E.jsx)(xt.RXm,{size:"15px"})}):(0,E.jsx)(pt,{onClick:()=>{(e=>{d([...s,e.label]),n(o.key,[...s,e.label])})(e)},children:(0,E.jsx)(Xe.OiG,{})}),(0,E.jsx)(dt,{children:e.label})]}))),(c=a,c in l?(0,E.jsx)(ht,{children:"This field is required"}):null)]});var c}const mt=n.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(to().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`,ft=n.Ay.div`
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
`,vt=n.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,yt=n.Ay.ul`
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

`,bt=n.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,wt=n.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,jt=n.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,Ct=n.Ay.div`
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
`,$t=(n.Ay.label`
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

`);function At(e){var o;let{component:t,formData:n,handleChange:r,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;console.log(s),console.log(d);const[c,p]=(0,i.useState)(!1),[u,h]=(0,i.useState)((null===(o=n[t.key])||void 0===o?void 0:o.value)||""),x=(0,i.useRef)(null),g=e=>{h(e.label),p(!1),r(t.key,e)},m=e=>{x.current&&!x.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,E.jsxs)(mt,{ref:x,index:l,children:[(0,E.jsx)(lt,{children:t.label}),t.data.values.length>8?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(ft,{onClick:()=>p((e=>!e)),children:[u||a,(0,E.jsx)(vt,{className:c?"up":"",children:"\u25bc"})]}),(0,E.jsx)(yt,{isOpen:c,children:t.data.values.map(((e,o)=>(0,E.jsx)(bt,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},o)))})]}):(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(wt,{children:t.data.values.map(((e,o)=>(0,E.jsx)(jt,{children:(0,E.jsx)(Ct,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,E.jsx)($t,{children:"This field is required"}):null)]});var f}const kt=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(to().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`,zt=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,St=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,_t=n.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,Tt=n.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,Lt=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function It(e){let{component:o,formData:t,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(t[o.key]||"");return(0,E.jsxs)(kt,{index:r,children:[(0,E.jsx)(lt,{children:o.label}),o.values.map((e=>(0,E.jsxs)(St,{children:[(0,E.jsx)(_t,{onClick:()=>{(e=>{d(e),n(o.key,e)})(e)},children:(0,E.jsx)(Tt,{selected:s.label==e.label})}),(0,E.jsx)(zt,{children:e.label})]}))),(c=a,c in l?(0,E.jsx)(Lt,{children:"This field is required"}):null)]});var c}function Pt(e){let{formSchema:o,onPriceChange:t,basePrice:n,formData:r,setFormData:a,finalDiscount:l,formErrors:s}=e;(0,i.useEffect)((()=>{c(r)}),[r]);const d=(e,o)=>{a((t=>({...t,[e]:o})))},c=e=>{let i=parseFloat(n)||0,r=0;null===o||void 0===o||o.components.forEach((o=>{if(e[o.key])if("selectboxes"===o.type&&o.values)e[o.key].forEach((e=>{const t=o.values.find((o=>o.label===e)),i=!isNaN(Number(t.value));t&&t.value&&i&&(t.value.startsWith("+")?r+=parseFloat(t.value.slice(1)):t.value.startsWith("-")&&(r-=parseFloat(t.value.slice(1))))}));else if("select"===o.type&&o.data&&o.data.values){const t=o.data.values.find((t=>{var i;return t.value===(null===(i=e[o.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(t.value));t&&n&&(t.value.startsWith("+")?r+=parseFloat(t.value.slice(1)):t.value.startsWith("-")?r-=parseFloat(t.value.slice(1)):i=parseFloat(t.value))}else if("radio"===o.type&&o.values){const t=o.values.find((t=>{var i;return t.value===(null===(i=e[o.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(t.value));t&&n&&(t.value.startsWith("+")?r+=parseFloat(t.value.slice(1)):t.value.startsWith("-")?r-=parseFloat(t.value.slice(1)):i=parseFloat(t.value))}}));const a=i+r,l=a%1!==0?a.toFixed(2):a.toFixed(0);t(l)};return(0,E.jsx)("form",{style:{width:"100%"},children:null===o||void 0===o?void 0:o.components.map(((e,o)=>((e,o)=>{switch(e.type){case"selectboxes":return console.log(e.key),(0,E.jsx)(gt,{component:e,formData:r,handleChange:d,index:o,componentKey:e.key,formErrors:s});case"select":return console.log(e.key),(0,E.jsx)(At,{component:e,formData:r,handleChange:d,index:o,componentKey:e.key,formErrors:s});case"radio":return(0,E.jsx)(It,{component:e,formData:r,handleChange:d,index:o,componentKey:e.key,formErrors:s});default:return null}})(e,o)))})}var Nt=t(42770),Et=t(73556),Ft=(t(20965),t(16104)),Dt=t(88620),Bt=t(57526);t(44014),t(70045),t(5084);const Rt=t(34304);function Ut(e){var o,t,n,r,l,s,d,c,p,u,h,x,g,m,f;let{activePlate:w,setactivePlate:j,menu:C,plates:$,productPositions:A,categories:k,activeCategoryId:z,setSearchParams:S,searchParams:_}=e;const{restaurantName:T}=(0,y.g)(),L=window.location.hostname.split(".")[0],I="menugic"!==L&&"localhost"!==L&&"www"!==L?L:T,P=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[I]})),F=k.find((e=>e.id==z)),{response:D}=(0,Ft.$)({productId:null===(o=$[w])||void 0===o?void 0:o.id});(0,i.useEffect)((()=>{var e;let o=null;var t,i;Rt.isEmpty(null===(e=$[w])||void 0===e?void 0:e.form_json)||(o=Rt.isEmpty(JSON.parse(null===(t=$[w])||void 0===t?void 0:t.form_json))?null===F||void 0===F?void 0:F.form_json:null===(i=$[w])||void 0===i?void 0:i.form_json);if(Rt.isEmpty(o))R({});else{var n;const e=JSON.parse(o);if(R(e),2===(null===e||void 0===e?void 0:e.version)&&(null===e||void 0===e||null===(n=e.sizes)||void 0===n?void 0:n.length)>0){var r;const o=parseFloat(null===(r=$[w])||void 0===r?void 0:r.en_price)||0,t=e.sizes.find((e=>"absolute"===e.priceMode&&Number(e.priceModifier)===o));O((()=>({...(0,Et.KE)(),sizeId:t?t.id:e.sizes[0].id})))}}}),[P.activeLanguage]);const[B,R]=(0,i.useState)({}),[U,O]=(0,i.useState)({}),[q,M]=(0,i.useState)({}),W=(0,v.wA)(),[H,V]=(0,i.useState)(1),[J,Y]=(0,i.useState)(!1),X=(0,i.useRef)(null),[K,Q]=(0,i.useState)(!1),[G,Z]=(0,i.useState)(1),[ee,oe]=(0,i.useState)({x:0,y:0}),[te,ie]=(0,i.useState)(!1),ne=(0,i.useRef)(null),re=(0,i.useRef)(null),ae=(0,i.useRef)(0),le=parseFloat(null===F||void 0===F?void 0:F.discount)||0,se=parseFloat(null===(t=$[w])||void 0===t?void 0:t.discount)||0,de=0===le?se:le,ce=(null===(n=$[w])||void 0===n?void 0:n.en_price)||"0",pe=parseFloat(ce)||0,ue=pe%1!==0?pe.toFixed(2):pe.toFixed(0),[he,xe]=(0,i.useState)(pe),[ge,me]=(0,i.useState)(""),fe=e=>{xe(parseFloat(e)||0)},[ve,ye]=(0,i.useState)(!0),[be,we]=(0,i.useState)(0),je=()=>{setTimeout((()=>{j(null),document.body.style.overflow="auto"}),700),ye(!1),_.delete("productId"),S(_)},[Ce,$e]=(0,i.useState)(!1),Ae=()=>{Y(!0),we(be+1)},ke=()=>{Y(!0),we(be-1)},ze=(0,i.useRef)(null),[Se,_e]=(0,i.useState)(null),Te=()=>{Z(1),oe({x:0,y:0}),Q(!0)};(0,i.useEffect)((()=>{const e=()=>{je()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const Le=2===(null===B||void 0===B?void 0:B.version)&&Array.isArray(null===B||void 0===B?void 0:B.sizes);const Ie=null!==P&&void 0!==P&&P.logoURL?(0,N.V)(P.logoURL):null;let Pe=[...null!==(r=null===(l=$[w])||void 0===l?void 0:l.images)&&void 0!==r?r:[]];0===Pe.length&&Ie&&(Pe=[{id:"fallback-logo",url:P.logoURL,isFallback:!0}]);const Ne=Pe.findIndex((e=>{var o;return e.id===(null===(o=$[w])||void 0===o?void 0:o.new_cover_id)}));if(Ne>0){const[e]=Pe.splice(Ne,1);Pe.unshift(e)}const[Ee,Fe]=(0,i.useState)({}),De=e=>{Fe((o=>({...o,[e]:!0})))},Be="en"===(null===P||void 0===P?void 0:P.activeLanguage)?null===(s=$[w])||void 0===s?void 0:s.en_description:null===(d=$[w])||void 0===d?void 0:d.ar_description,Re=(0,Ke.Q)(null===P||void 0===P?void 0:P.currency);let Ue=JSON.parse(P.features);const Oe=Boolean(null===(c=$[w])||void 0===c?void 0:c.out_of_stock)||1===Number(null===(p=$[w])||void 0===p?void 0:p.out_of_stock),qe=(null===P||void 0===P?void 0:P.product_details_carousel_style)||"normal";return(0,Ze.createPortal)((0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(io,{CloseAnimation:ve,children:[(0,E.jsx)(bo,{CloseAnimation:ve,children:(0,E.jsx)(jo,{children:"en"==P.activeLanguage?null===C||void 0===C?void 0:C.en_category:null===C||void 0===C?void 0:C.ar_category})}),(0,E.jsx)(ro,{squareDimension:null===(u=$[w])||void 0===u?void 0:u.square_dimension,CloseAnimation:ve,isNormalCarousel:"normal"===qe,children:1===Pe.length?(0,E.jsx)(lo,{carouselIndex:0,children:(0,E.jsx)(so,{children:(0,E.jsxs)(co,{children:[!Ee[0]&&(0,E.jsx)(ho,{children:(0,E.jsx)(uo,{})}),(0,E.jsx)(xo,{src:Pe[0].url?(0,N.V)(Pe[0].url):Ie||"",onLoad:()=>De(0),onError:e=>{Ie&&e.target.src!==Ie&&(e.target.src=Ie)},CloseAnimation:ve,Loaded:Ee[0],alt:"Image 0"}),(0,E.jsx)(Vo,{onClick:Te,children:(0,E.jsx)(b.gff,{})})]})})}):"normal"===qe?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(fo,{CloseAnimation:ve,onClick:()=>{Y(!0),0!==be&&ke()}}),(0,E.jsx)(vo,{CloseAnimation:ve,onClick:()=>{Y(!0),Pe.length>be+1&&Ae()}}),(0,E.jsx)(lo,{carouselIndex:be,ref:ze,onTouchStart:e=>{_e(e.touches[0].clientX)},onTouchMove:e=>{if(Se){const o=e.touches[0].clientX-Se;o>5?0!==be&&ke():o<-5&&Pe.length>be+1&&Ae(),_e(null)}},children:Pe.map(((e,o)=>(0,E.jsx)(so,{children:(0,E.jsxs)(co,{children:[!Ee[o]&&(0,E.jsx)(ho,{children:(0,E.jsx)(uo,{})}),(0,E.jsx)(xo,{src:Ee[o]||o===be?e.url?(0,N.V)(e.url):Ie||"":"",onLoad:()=>De(o),onError:e=>{Ie&&e.target.src!==Ie&&(e.target.src=Ie)},CloseAnimation:ve,Loaded:Ee[o],alt:`Image ${o}`}),be===o&&(0,E.jsx)(Vo,{onClick:Te,children:(0,E.jsx)(b.gff,{})})]})},e.id||o)))})]}):"effect-cards"===qe?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(fo,{CloseAnimation:ve,onClick:()=>X.current&&X.current.slidePrev()}),(0,E.jsx)(ao,{children:(0,E.jsx)(Dt.RC,{modules:[Bt.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{X.current=e},onSlideChange:e=>{we(e.realIndex),Y(!0)},children:Pe.map(((e,o)=>(0,E.jsx)(Dt.qr,{children:(0,E.jsxs)(co,{children:[!Ee[o]&&(0,E.jsx)(ho,{children:(0,E.jsx)(uo,{})}),(0,E.jsx)(xo,{src:Ee[o]||o===be?e.url?(0,N.V)(e.url):Ie||"":"",onLoad:()=>De(o),onError:e=>{Ie&&e.target.src!==Ie&&(e.target.src=Ie)},CloseAnimation:ve,Loaded:Ee[o],$cardSlide:!0,alt:`Image ${o}`}),be===o&&(0,E.jsx)(Vo,{onClick:Te,children:(0,E.jsx)(b.gff,{})})]})},e.id||o)))},null===(h=$[w])||void 0===h?void 0:h.id)}),(0,E.jsx)(vo,{CloseAnimation:ve,onClick:()=>X.current&&X.current.slideNext()})]}):(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(ao,{children:(0,E.jsx)(Dt.RC,{onSwiper:e=>{X.current=e},onSlideChange:e=>{we(e.realIndex),Y(!0)},modules:[Bt.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:Pe.map(((e,o)=>(0,E.jsx)(Dt.qr,{children:(0,E.jsxs)(co,{children:[!Ee[o]&&(0,E.jsx)(ho,{children:(0,E.jsx)(uo,{})}),(0,E.jsx)(xo,{src:Ee[o]||o===be?e.url?(0,N.V)(e.url):Ie||"":"",onLoad:()=>De(o),onError:e=>{Ie&&e.target.src!==Ie&&(e.target.src=Ie)},CloseAnimation:ve,Loaded:Ee[o],$cardSlide:!0,alt:`Image ${o}`}),be===o&&(0,E.jsx)(Vo,{onClick:Te,children:(0,E.jsx)(b.gff,{})})]})},e.id||o)))},null===(x=$[w])||void 0===x?void 0:x.id)})})}),1!==Pe.length&&(0,E.jsx)(at,{images:Pe,carouselIndex:be,CloseAnimation:ve,carouselSwiped:J}),(0,E.jsx)($o,{children:(0,E.jsx)(Ao,{children:(0,E.jsxs)(ko,{CloseAnimation:ve,activeLanguage:P.activeLanguage,children:[(0,E.jsx)(zo,{activeLanguage:P.activeLanguage,children:"en"==P.activeLanguage?null===(g=$[w])||void 0===g?void 0:g.en_name:null===(m=$[w])||void 0===m?void 0:m.ar_name}),!Rt.isEmpty(null===(f=$[w])||void 0===f?void 0:f.en_price)&&(0,E.jsxs)(To,{children:[(0,E.jsx)(Lo,{activeLanguage:P.activeLanguage,discounted:0!=de,children:(0,We.T)(he,Re)}),0!=de&&(0,E.jsx)(Io,{activeLanguage:P.activeLanguage,children:(0,We.T)(he*(1-parseFloat(de)/100),Re)})]}),!Rt.isEmpty(Be)&&(0,E.jsx)(So,{activeLanguage:P.activeLanguage,dangerouslySetInnerHTML:{__html:Be}}),Oe&&(0,E.jsx)(_o,{children:"en"===P.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),Le&&(0,E.jsx)(Nt.A,{options:B,formData:U,setFormData:O,formErrors:q,activeLanguage:P.activeLanguage,basePrice:ue,onPriceChange:fe}),!Le&&(null===B||void 0===B?void 0:B.components)&&(0,E.jsx)(Pt,{formSchema:B,onPriceChange:fe,formData:U,setFormData:O,basePrice:ue,formErrors:q}),(0,E.jsxs)(Mo,{activeLanguage:P.activeLanguage,children:[(0,E.jsx)(Wo,{children:"en"==P.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,E.jsx)(Ho,{activeLanguage:P.activeLanguage,onChange:e=>me(e.target.value),placeholder:"en"==P.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(null===Ue||void 0===Ue?void 0:Ue.cart)&&!Oe&&(0,E.jsxs)(No,{CloseAnimation:ve,children:[(0,E.jsxs)(Do,{CloseAnimation:ve,children:[(0,E.jsx)(Bo,{onClick:()=>{V(H+1)},children:"+"}),(0,E.jsx)(Uo,{children:H}),(0,E.jsx)(Ro,{onClick:()=>{H>1&&V(H-1)},children:"-"})]}),(0,E.jsxs)(Eo,{onClick:()=>{if(Le){var e;const o={};if((null===(e=B.sizes)||void 0===e?void 0:e.length)>0&&(null===U||void 0===U||!U.sizeId)&&(o.size="Please select a size."),Object.keys(o).length>0)return void M(o)}else if("{}"!==JSON.stringify(B)){const e=function(e,o){const t={},i=function(e){return e.components.filter((e=>{var o;return null===(o=e.validate)||void 0===o?void 0:o.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in o&&0!==(null===(i=o[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(o[e])||(t[e]="This field is required.")})),t}(B,U);if(Object.keys(e).length>0)return void M(e)}let o=he*(1-parseFloat(de)/100);setTimeout((()=>{j(null),document.body.style.overflow="auto"}),800),W((0,He.bE)(I,$[w],H,U,o,ge)),ye(!1),V(1),M({})},children:["en"==P.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",he>0&&(0,E.jsx)(Fo,{children:(0,We.T)(H*(he*(1-de/100)),Re)})]})]})]}),(0,E.jsx)(yo,{onClick:je,CloseAnimation:ve,children:(0,E.jsx)(mo,{})}),(0,E.jsx)(qo,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),$e(!0),setTimeout((()=>{$e(!1)}),4e3)},CloseAnimation:ve,children:Ce?(0,E.jsx)(xt.RXm,{}):(0,E.jsx)(Xe.zU_,{})}),K&&(0,E.jsxs)(Jo,{onTouchStart:e=>{if(2===e.touches.length){const o=e.touches[0].clientX-e.touches[1].clientX,t=e.touches[0].clientY-e.touches[1].clientY;re.current=Math.hypot(o,t)}else if(1===e.touches.length){const o=Date.now();o-ae.current<300&&(Z((e=>e>1?1:2.5)),oe({x:0,y:0})),ae.current=o,ne.current={x:e.touches[0].clientX,y:e.touches[0].clientY},ie(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const o=e.touches[0].clientX-e.touches[1].clientX,t=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(o,t);if(re.current){const e=i/re.current;Z((o=>Math.min(Math.max(o*e,1),5)))}re.current=i}else if(1===e.touches.length&&te&&G>1){const o=e.touches[0].clientX-ne.current.x,t=e.touches[0].clientY-ne.current.y;oe((e=>({x:e.x+o,y:e.y+t}))),ne.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{re.current=null,ie(!1)},children:[(0,E.jsx)(Yo,{onClick:()=>Q(!1),children:(0,E.jsx)(a.$8F,{})}),(0,E.jsx)(Xo,{src:(()=>{const e=Pe[be];return e?e.url?(0,N.V)(e.url):Ie||"":""})(),style:{transform:`scale(${G}) translate(${ee.x/G}px, ${ee.y/G}px)`},alt:"Zoom"})]})]}),document.body)}var Ot=t(9328),qt=t(32415),Mt=t(73422);const Wt=t(34304);function Ht(e){var o,t,n;let{menu:r,activeCategory:a,showPopup:l,searchText:s,carouselPosition:d,setcarouselPosition:c,setactiveCategory:p,categories:u}=e;const[h,x]=(0,i.useState)(null),[g,m]=(0,se.ok)(),{restaurantName:f}=(0,y.g)(),b=window.location.hostname.split(".")[0],w="menugic"!==b&&"localhost"!==b&&"www"!==b?b:f,j=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[w].activeLanguage})),C=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[w]})),$=(0,v.wA)(),[A,k]=(0,i.useState)((()=>new Set)),z=(0,i.useCallback)((async()=>{const e=(0,Je.wU)(w);if(e)try{const{data:o}=await de.A.get(Ve.Vb,{headers:{Authorization:`Bearer ${e}`}}),t=(Array.isArray(o)?o:[]).map((e=>e.id));k(new Set(t))}catch{k(new Set)}else k(new Set)}),[w]);(0,i.useEffect)((()=>{z()}),[z]);const[S,_]=(0,i.useState)([]),[T,L]=(0,i.useState)([]),I=(0,i.useRef)(),P=(0,i.useRef)(),F="all-items"===a,D=(null===C||void 0===C?void 0:C.all_items_style)||"grid",B=a&&!F?String(a):null,{data:R,fetchNextPage:U,hasNextPage:O,isFetchingNextPage:q}=(0,Ot.w)(B),{data:M,fetchNextPage:W,hasNextPage:H,isFetchingNextPage:V}=(0,qt.u)(F?null===C||void 0===C?void 0:C.id:null),J=(null===M||void 0===M||null===(o=M.pages)||void 0===o?void 0:o.flat())||[],Y=()=>{const e=null===T||void 0===T?void 0:T.map((e=>{if(e.current){var o;const t=null===(o=e.current)||void 0===o?void 0:o.getBoundingClientRect();return{x:t.left,y:t.top,width:t.width}}return null}));_(e)};(0,i.useEffect)((()=>{g.get("productId")&&x(null)}),[g]),(0,i.useEffect)((()=>{Y()}),[T]),(0,i.useEffect)((()=>{var e;if(r&&null!==a&&(null===R||void 0===R||null===(e=R.pages)||void 0===e?void 0:e.flat().length)>0){var o,t;const e=null===R||void 0===R||null===(o=R.pages)||void 0===o||null===(t=o.flat())||void 0===t?void 0:t.filter((e=>(e["en"===j?"en_name":"ar_name"]||e.en_name||e.ar_name||"").toLowerCase().includes(s.toLowerCase()))).map((()=>i.createRef()));L(e)}}),[r,a,s,R]),(0,i.useEffect)((()=>{const e=()=>{Y()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[T]),(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&O&&!q&&U()}),{threshold:.1});return I.current&&e.observe(I.current),()=>{I.current&&e.unobserve(I.current)}}),[O,q,U]),(0,i.useEffect)((()=>{if(!F)return;const e=new IntersectionObserver((e=>{e[0].isIntersecting&&H&&!V&&W()}),{threshold:.2});return P.current&&e.observe(P.current),()=>{P.current&&e.unobserve(P.current)}}),[W,H,F,V]);const X=(null===R||void 0===R||null===(t=R.pages)||void 0===t||null===(n=t.flat())||void 0===n?void 0:n.filter((e=>!(Boolean(null===e||void 0===e?void 0:e.hide)||1===Number(null===e||void 0===e?void 0:e.hide))&&(e["en"===j?"en_name":"ar_name"]||e.en_name||e.ar_name||"").toLowerCase().includes(s.toLowerCase()))))||[],K=i.useMemo((()=>{if(!F)return[];return(u||[]).filter((e=>!e.isAllItems)).sort(((e,o)=>(o.priority||0)-(e.priority||0)||(e.id||0)-(o.id||0))).map((e=>{const o=J.filter((o=>{if(Boolean(null===o||void 0===o?void 0:o.hide)||1===Number(null===o||void 0===o?void 0:o.hide))return!1;if(o.category_id!=e.id)return!1;const t=o["en"===j?"en_name":"ar_name"]||"";return!s||function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase().includes(s.toLowerCase())}(t)})).sort(((e,o)=>(o.priority||0)-(e.priority||0)||(e.id||0)-(o.id||0)));return{category:e,items:o}})).filter((e=>e.items.length>0))}),[j,J,u,F,s]);console.log(X);const[Q,G]=(0,i.useState)(d),[Z,ee]=(0,i.useState)(!1),[oe,te]=(0,i.useState)(u.length<4?3:4);(0,i.useRef)(0),(0,i.useRef)(0);return(0,i.useEffect)((()=>{G(u.findIndex((e=>e.id==a)))}),[a]),(0,i.useEffect)((()=>{F&&x(null)}),[F]),(0,E.jsx)(ce,{activeCategory:a,children:F?(0,E.jsxs)(ue,{children:[K.map((e=>(0,E.jsxs)(he,{children:[(0,E.jsx)(xe,{activeLanguage:j,children:"en"===j?e.category.en_category:e.category.ar_category}),"list"===D?(0,E.jsx)(be,{children:e.items.map(((e,o)=>{var t,i,n,r;const a=u.find((o=>o.id==e.category_id));let l;l=a&&0!==parseFloat(a.discount||0)?parseFloat(a.discount||0):parseFloat(e.discount||0);const s=0!==l?parseFloat(e.en_price)*(1-parseFloat(l)/100):parseFloat(e.en_price),d=(0,Ke.Q)(null===C||void 0===C?void 0:C.currency),c=null!==(t=null===(i=e.images)||void 0===i?void 0:i.findIndex((o=>o.id==e.new_cover_id)))&&void 0!==t?t:0,p=null===(n=e.images)||void 0===n||null===(r=n[c])||void 0===r?void 0:r.url,h=JSON.parse((null===C||void 0===C?void 0:C.features)||"{}"),x=Boolean(null===e||void 0===e?void 0:e.out_of_stock)||1===Number(null===e||void 0===e?void 0:e.out_of_stock),f=!Wt.isEmpty(null===e||void 0===e?void 0:e.form_json)&&!Wt.isEmpty(JSON.parse((null===e||void 0===e?void 0:e.form_json)||"{}")),v=!Wt.isEmpty(null===a||void 0===a?void 0:a.form_json)&&!Wt.isEmpty(JSON.parse((null===a||void 0===a?void 0:a.form_json)||"{}")),y=f||v,b=o=>{if(o.preventDefault(),o.stopPropagation(),null===h||void 0===h||!h.cart||x)return;if(y){const o=new URLSearchParams(g);return o.set("productId",e.id),o.set("categoryId","all-items"),m(o),window.history.pushState({},"",`?${o.toString()}`),void(document.body.style.overflow="hidden")}const t=parseFloat((null===e||void 0===e?void 0:e.en_price)||"0")*(1-parseFloat(l)/100);$((0,He.bE)(w,e,1,{},t,"")),Mt.oR.success("en"===j?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629")};return(0,E.jsxs)(ze,{children:[(0,E.jsxs)(we,{onClick:()=>{const o=new URLSearchParams(g);o.set("productId",e.id),o.set("categoryId","all-items"),m(o),window.history.pushState({},"",`?${o.toString()}`),document.body.style.overflow="hidden"},style:{cursor:"pointer"},children:[(0,E.jsx)(je,{children:p&&(0,E.jsx)("img",{src:(0,N.V)(p),alt:"en"===j?e.en_name:e.ar_name})}),(0,E.jsxs)(Ce,{activeLanguage:j,children:[(0,E.jsx)($e,{children:"en"===j?e.en_name:e.ar_name}),e.en_price&&(0,E.jsxs)(Ae,{activeLanguage:j,children:[0!==l&&(0,E.jsx)(ke,{children:(0,We.T)(parseFloat(e.en_price),d)}),(0,E.jsx)("span",{children:(0,We.T)(s,d)})]})]})]}),(null===h||void 0===h?void 0:h.cart)&&(x?(0,E.jsx)(ye,{activeLanguage:j,children:"en"===j?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,E.jsx)(ve,{type:"button",onClick:b,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),b(e)},activeLanguage:j,title:"en"===j?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,E.jsx)(Xe._xK,{size:12})}))]},e.id)}))}):(0,E.jsx)(pe,{$noMinHeight:!0,children:e.items.map(((o,t)=>(0,E.jsx)(Ge,{index:t,plate:o,activePlate:null,setactivePlate:x,showPopup:l,setSearchParams:m,searchParams:g,activeCategoryId:e.category.id,categories:u,disableDetails:!1,wishlistIds:A,onWishlistChange:z},o.id)))})]},e.category.id))),H&&(0,E.jsx)("div",{ref:P,style:{height:"40px"}}),V&&(0,E.jsx)(ge,{children:(0,E.jsxs)(me,{children:[(0,E.jsx)(fe,{}),"en"===j?"Loading more...":"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f..."]})})]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(pe,{activePlate:h,children:[null===r||void 0===r?void 0:r.map(((e,o)=>{if(a==e.id)return(0,E.jsx)(E.Fragment,{children:X.map(((e,o)=>(0,E.jsx)(Ge,{index:o,plate:e,activePlate:h,setactivePlate:x,ref:T[o],showPopup:l,setSearchParams:m,searchParams:g,activeCategoryId:a,categories:u,wishlistIds:A,onWishlistChange:z})))})})),(0,E.jsx)("div",{ref:I,style:{height:"20px"}})]}),null!==h&&!g.get("productId")&&(0,E.jsx)(Ut,{menu:null===r||void 0===r?void 0:r.find((e=>e.id===a)),activePlate:h,setactivePlate:x,plates:X,productPositions:S,activeCategoryId:a,categories:u,setSearchParams:m,searchParams:g})]})})}var Vt=t(76143);const Jt=n.Ay.div`
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
`,Yt=(n.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`,n.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`),Xt=n.Ay.span`
width: 90%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 10vh;
`,Kt=n.Ay.div`
  margin-top: 30px;
width: 90%;
  display: flex;
  flex-direction: column;
`,Qt=(n.Ay.div`
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
`,(0,n.Ay)(eo.IW4)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,n.Ay)(b.gwi)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,n.Ay)(eo.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`),Gt=n.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
font-weight: bold;

`,Zt=n.Ay.div`
width: 90%;
margin-top: 10px;

`,ei=n.Ay.div`
margin-top: 10px;
display: flex;
flex-direction: row;
width: 90%;
align-items: center;
gap:10px;
`,oi=n.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,ti=(n.Ay.a`
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
`),ii=n.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,ni=(0,n.Ay)(Xe.ok6)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};
`,ri=((0,n.Ay)(eo._8j)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};


`,(0,n.Ay)(Xe.ao$)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`),ai=(0,n.Ay)(Vt.mk3)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`,li=n.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,si=n.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,di=(0,n.Ay)(b.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`,ci=n.Ay.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 90%;
height: 50px;
gap:25px;
margin-top: 30px;
`,pi=n.Ay.button`
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
`,ui=n.i7`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,hi=n.Ay.div`
position: absolute;
width:10%;
height: 50%;
background-color:${e=>"Call"==e.activeButton?e.theme.mainColor:e.theme.popupbackgroundColor} ;
 left: 0;
 z-index: 5;

 `,xi=n.Ay.div`
position: absolute;
width:1px;
height: 100%;
background-color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 right: 0;
 animation: ${ui} 0.5s ease-in-out infinite; /* Infinite animation */

 `,gi=n.i7`
  0% {
opacity: 0;
left: -10%;
  }
  100% {
opacity: 1;
left: 16%;

  }

`,mi=n.Ay.span`
position: absolute;
 left: 16%;
 color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 animation: ${gi} 0.5s ease-in-out;
 z-index: 4;

 `,fi=n.i7`
  0% {
    opacity: 0;
    rotate: calc(180deg);
  }
  1000% {
    opacity: 1;
    rotate: calc(0deg);

  }
 
`,vi=(0,n.Ay)(eo.pte)`
color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
font-size: 15px;
position: absolute;
right: 5%;
animation: ${fi} 0.7s ease-in-out;

`,yi=n.i7`
  0% {
    max-height: 0px;
  }
  1000% {
    max-height: 300px;


  }
 
`,bi=n.Ay.ul`
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
  animation: ${yi} 1s ease-in-out;
  overflow: hidden;

`,wi=n.Ay.li`
  cursor: pointer;
  transition: background 0.2s;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;

`,ji=n.Ay.button`
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
`,Ci=n.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 18px;
font-weight: bold;

`,$i=n.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`,Ai=n.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
`,ki=n.Ay.div`
  display: flex;
  flex-direction: row;
  width: 15px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${e=>e.theme.mainColor};
`,zi=(n.Ay.div`
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

 `),Si=n.Ay.div`
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
 `;var Ti=t(72599),Li=t(67059);function Ii(e){var o,t,n,a;let{restaurant:l,showPopup:s,popupHandler:d}=e;const{restaurantName:c}=(0,y.g)(),p=window.location.hostname.split(".")[0],u="menugic"!==p&&"localhost"!==p&&"www"!==p?p:c,h=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[u].activeLanguage})),[x,g]=(0,i.useState)("");return(0,i.useEffect)((()=>{const e=()=>{d(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,E.jsxs)(Jt,{showPopup:s,children:[(0,E.jsx)(Qt,{onClick:()=>{d(null)}}),(0,E.jsx)(Xt,{children:(0,E.jsx)(Yt,{children:(m=null===l||void 0===l?void 0:l.name,m.replace(/\b\w/g,(function(e){return e.toUpperCase()})))})}),(0,E.jsxs)(ci,{children:[(0,E.jsx)(pi,{activeButton:x,onClick:()=>{g("Call"==x?"":"Call")},children:"Call"!==x?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Ti._Xz,{size:"25px"}),"en"==h?"Call Now":"\u0627\u062a\u0635\u0644 \u0627\u0644\u0627\u0646"]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(bi,{activeButton:x,children:null===l||void 0===l||null===(o=l.branches)||void 0===o?void 0:o.flatMap((e=>e.phone_number.split(" ").map(((o,t)=>(0,E.jsx)(wi,{children:(0,E.jsxs)("a",{href:`tel:${o}`,style:{textDecoration:"none",color:"inherit"},children:[o,"  ",e.location&&(0,E.jsxs)("span",{children:["- ",e.name," "]})]})})))))}),(0,E.jsx)(hi,{activeButton:x,children:(0,E.jsx)(xi,{activeButton:x})}),(0,E.jsx)(mi,{activeButton:x,children:"en"==h?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,E.jsx)(vi,{activeButton:x})]})}),(0,E.jsx)(ji,{activeButton:x,onClick:()=>{g("Message"==x?"":"Message")},children:"Message"!==x?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Xe.EcP,{size:"25px"}),"en"==h?"Message":"\u0631\u0633\u0627\u0644\u0629","            "]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(bi,{activeButton:x,children:null===l||void 0===l||null===(t=l.branches)||void 0===t?void 0:t.map((e=>(0,E.jsx)(wi,{children:(0,E.jsxs)("a",{href:`https://wa.me/${(0,Li.JW)(null===e||void 0===e?void 0:e.whatsapp_number,null===l||void 0===l?void 0:l.country_code)}`,style:{textDecoration:"none",color:"inherit"},children:[null===e||void 0===e?void 0:e.whatsapp_number,"-",null===e||void 0===e?void 0:e.name]})})))}),(0,E.jsx)(hi,{activeButton:x,children:(0,E.jsx)(xi,{activeButton:x})}),(0,E.jsx)(mi,{activeButton:x,children:"en"==h?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,E.jsx)(vi,{activeButton:x})]})})]}),(0,E.jsxs)(Kt,{children:[(null===l||void 0===l||null===(n=l.branches)||void 0===n?void 0:n.name)&&(0,E.jsx)(Ci,{children:"Branches"}),(0,E.jsx)($i,{children:null===l||void 0===l||null===(a=l.branches)||void 0===a?void 0:a.map(((e,o)=>{var t;return e.name&&(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(Ai,{children:[o!==(null===l||void 0===l||null===(t=l.branches)||void 0===t?void 0:t.length)-1&&(0,E.jsx)(Si,{index:o,children:(0,E.jsx)(_i,{})}),(0,E.jsx)(ki,{children:(0,E.jsx)(r.sIY,{})}),(0,E.jsx)(zi,{href:`https://${null===e||void 0===e?void 0:e.mapLink}`,children:e.location})]})})}))})]}),(0,E.jsx)(Zt,{children:(0,E.jsx)(Gt,{children:"en"==h?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"})}),(0,E.jsxs)(ei,{children:[l.socialMedia.find((e=>"Instagram"==e.platform))&&(0,E.jsx)(oi,{href:`https://${l.socialMedia.find((e=>"Instagram"==e.platform)).link}`,children:(0,E.jsx)(ri,{})}),l.socialMedia.find((e=>"Facebook"==e.platform))&&(0,E.jsx)(ii,{href:`https://${l.socialMedia.find((e=>"Facebook"==e.platform)).link}`,children:(0,E.jsx)(ni,{})}),l.socialMedia.find((e=>"Tiktok"==e.platform))&&(0,E.jsx)(ti,{href:`https://${l.socialMedia.find((e=>"Tiktok"==e.platform)).link}`,children:(0,E.jsx)(ai,{})})]}),(0,E.jsxs)(li,{children:["Copyright",(0,E.jsx)(di,{})," ",(new Date).getFullYear()," "," ",(0,E.jsx)(si,{href:"https://www.menugic.com",children:"menugic.com"})]})]});var m}const Pi=n.Ay.div`
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
`,Ni=((0,n.Ay)(eo.WQq)`
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

`;var Ei=t(29334),Fi=t(50074);const Di=n.i7`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,Bi=n.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ri=n.Ay.div`
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
`,Ui=n.Ay.div`
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
  animation: ${Di} 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`,Oi=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`,qi=n.Ay.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Mi=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`,Wi=n.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Hi=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`,Vi=n.Ay.div`
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
`,Yi=n.Ay.button`
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
`,Xi=n.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  min-width: 20px;
  text-align: center;
`,Ki=n.Ay.button`
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
`,Qi=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,Gi="\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 2px 8px;\n  line-height: 1.5;\n  white-space: nowrap;\n",Zi=n.Ay.span`
  ${Gi}
  border: 1px solid ${e=>`${e.theme.popupTextColor||"#1a1a1a"}50`};
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  background: transparent;
`,en=n.Ay.span`
  ${Gi}
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}18`};
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}35`};
`,on=n.Ay.span`
  ${Gi}
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  border: 1px dashed ${e=>`${e.theme.popupTextColor||"#999"}40`};
  opacity: 0.65;
  text-decoration: line-through;
`,tn=n.Ay.div`
  font-size: 10px;
  font-style: italic;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,nn=n.Ay.div`
  font-size: 10px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.75;
  line-height: 1.5;
`,rn=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}10`};
  border-radius: 12px;
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  margin-top: 4px;
`,an=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ln=n.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  opacity: 0.75;
`,sn=n.Ay.div`
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
`,dn=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.6;
  text-align: center;
`,cn=["Size:","\u0627\u0644\u062d\u062c\u0645:"],pn=["Add ons:","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:"],un=["Remove:","\u0628\u062f\u0648\u0646:"];function hn(e){let{restaurant:o,activeLanguage:t}=e;const i=(0,v.wA)(),{restaurantName:n}=(0,y.g)(),r=window.location.hostname.split(".")[0],a="menugic"!==r&&"localhost"!==r&&"www"!==r?r:n,l=(0,v.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,o)=>e+o.price*o.quantity),0),d="ar"===t?"ar":"en",c=e=>{const o=(0,Fi.qh)(e,d);if(!o.length)return null;const{sizeLabel:t,addonLabels:i,removalLabels:n,legacyLines:r}=function(e){const o={sizeLabel:null,addonLabels:[],removalLabels:[],legacyLines:[]};let t=null;for(const i of e)"heading"===i.type?t=cn.includes(i.text)?"size":pn.includes(i.text)?"addons":un.includes(i.text)?"removals":"legacy":"size"===t?o.sizeLabel=i.text:"addons"===t?o.addonLabels.push(i.text):"removals"===t?o.removalLabels.push(i.text):o.legacyLines.push(i.text);return o}(o),a=t||i.length||n.length;return(0,E.jsxs)(E.Fragment,{children:[a&&(0,E.jsxs)(Qi,{children:[t&&(0,E.jsx)(Zi,{children:"ar"===d?`\u0627\u0644\u062d\u062c\u0645: ${t}`:`Size: ${t}`}),i.map((e=>(0,E.jsxs)(en,{children:["+ ",e]},e))),n.map((e=>(0,E.jsx)(on,{children:e},e)))]}),r.map(((e,o)=>(0,E.jsx)(nn,{children:e},o)))]})},p=(0,Ke.Q)(null===o||void 0===o?void 0:o.currency);if(0===l.length)return(0,E.jsx)(Bi,{children:(0,E.jsx)(dn,{children:"ar"===d?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"})});const u=e=>{var o;const t=null===(o=e.images)||void 0===o?void 0:o[0];return t&&t.url?(0,N.V)(t.url):""};return(0,E.jsx)(Bi,{children:(0,E.jsxs)(Ri,{children:[l.map((e=>{const o="ar"===d?e.ar_name:e.en_name,t=(0,We.T)(e.price*e.quantity,p);return(0,E.jsx)(Ui,{children:(0,E.jsxs)(Oi,{children:[(0,E.jsx)(qi,{src:u(e),alt:o}),(0,E.jsxs)(Mi,{children:[(0,E.jsx)(Wi,{title:o,children:o}),c(e),e.instruction&&(0,E.jsxs)(tn,{children:["\ud83d\udcdd ",e.instruction]})]}),(0,E.jsxs)(Hi,{children:[(0,E.jsx)(Vi,{children:t}),(0,E.jsxs)(Ji,{children:[(0,E.jsx)(Yi,{onClick:()=>{return o=e.uniqueId,void((t=e.quantity)>1&&i((0,He.v)(a,o,t-1)));var o,t},disabled:e.quantity<=1,"aria-label":"decrease quantity",children:"\u2212"}),(0,E.jsx)(Xi,{children:e.quantity}),(0,E.jsx)(Yi,{onClick:()=>{return o=e.uniqueId,t=e.quantity,i((0,He.v)(a,o,t+1));var o,t},"aria-label":"increase quantity",children:"+"})]}),(0,E.jsx)(Ki,{onClick:()=>{return o=e.uniqueId,i((0,He.dt)(a,o));var o},"aria-label":"remove item",children:(0,E.jsx)(Xe.qbC,{})})]})]})},e.uniqueId)})),(0,E.jsx)(rn,{children:(0,E.jsxs)(an,{children:[(0,E.jsx)(ln,{children:"ar"===d?"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a":"Total"}),(0,E.jsx)(sn,{children:(0,We.T)(s,p)})]})})]})})}var xn=t(13491);const gn=n.Ay.div`
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

`;function mn(e){let{deliveryType:o,branches:t,selectedBranch:i,setSelectedBranch:r,setErrors:a,errors:l}=e;const s=(0,n.DP)(),d=(t||[]).map((e=>({value:e.id,label:e.name,branch:e,isDisabled:!e.has_delivery&&"Delivery"===o}))),c={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==l&&void 0!==l&&l.branch?"rgba(255, 68, 68, 0.1)":s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:o.isDisabled?"#999":s.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?s.categoryUnActive||"#ffffff":o.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent",cursor:o.isDisabled?"not-allowed":"pointer",display:"flex",justifyContent:"space-between"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,E.jsx)(gn,{children:(0,E.jsx)(xn.Ay,{value:d.find((e=>{var o;return(null===(o=e.branch)||void 0===o?void 0:o.id)===(null===i||void 0===i?void 0:i.id)})),onChange:e=>{e&&!e.isDisabled&&(r(e.branch),a({...l,branch:""}))},options:d,placeholder:"Select Branch",isOptionDisabled:e=>e.isDisabled,styles:c,formatOptionLabel:e=>(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,E.jsx)("span",{children:e.label}),e.isDisabled&&"Delivery"===o&&(0,E.jsx)("span",{style:{fontSize:12,color:"#999"},children:"No Delivery"})]}),menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})})}const fn=n.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`,vn=(n.Ay.div`
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
`),yn=n.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`,bn=n.Ay.input`
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
`,wn=(0,n.Ay)(c.Xj1)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.mainColor};

`,jn=n.i7`
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
  animation: ${jn} 1s linear infinite; /* Apply animation */
`;var Cn=t(89993);function $n(e){var o;let{selectedBranch:t,selectedRegion:r,onRegionChange:a,setErrors:l,errors:s,onRegionsChange:d}=e;const c=(0,n.DP)(),[p,u]=(0,i.useState)(!1),[h,x]=(0,i.useState)(""),{response:g,isLoading:m}=(0,Cn.w)({branch_id:t.id,onSuccess:()=>{}});(0,i.useEffect)((()=>{var e;m||d((null===g||void 0===g||null===(e=g.data)||void 0===e?void 0:e.regions)||[])}),[m,g,d]),(0,i.useEffect)((()=>{a("")}),[t,a]);const f=((null===g||void 0===g||null===(o=g.data)||void 0===o?void 0:o.regions)||[]).map((e=>({value:e.region_name,label:e.region_name}))),v=f.filter((e=>e.label.toLowerCase().includes(h.toLowerCase()))),y={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==s&&void 0!==s&&s.region?"rgba(255, 68, 68, 0.1)":c.mainColor?`${c.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:c.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:c.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:c.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:c.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:c.categoryUnActive||"#ffffff",border:`1px solid ${c.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:c.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?c.categoryUnActive||"#ffffff":o.isFocused?c.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return!m&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(fn,{children:(0,E.jsx)(xn.Ay,{value:f.find((e=>e.value===r)),onMenuOpen:()=>u(!0),onMenuClose:()=>u(!1),onChange:e=>{a((null===e||void 0===e?void 0:e.value)||""),x(""),l({...s,region:""})},options:v,placeholder:"Select Region",styles:y,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})}),p&&(0,E.jsx)(vn,{children:(0,E.jsxs)(yn,{children:[(0,E.jsx)(bn,{placeholder:"Search",value:h,onChange:e=>{x(e.target.value)}}),(0,E.jsx)(wn,{})]})})]})}const An=n.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,kn=n.Ay.div`
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
`,zn=n.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,Sn=n.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,_n=(n.Ay.select`
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
`);function Tn(e){var o,t;let{formData:i,updateFormData:r,restaurant:a,errors:l,setErrors:s}=e;const d=(0,n.DP)();let c={};try{c=JSON.parse((null===a||void 0===a?void 0:a.features)||"{}")}catch(h){c={}}const p=[c.delivery_order&&{value:"Delivery",label:"Delivery"},c.takeaway_order&&{value:"TakeAway",label:"Take Away"},c.dinein_order&&{value:"DineIn",label:"Dine In"}].filter(Boolean),u={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(l.deliveryType?"rgba(255, 68, 68, 0.1)":d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?d.categoryUnActive||"#ffffff":o.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,E.jsxs)(An,{children:[(0,E.jsx)(zn,{children:"Select Order Type"}),(0,E.jsx)(Sn,{children:"Choose how you would like to receive your order"}),(0,E.jsxs)(kn,{children:[(0,E.jsx)(xn.Ay,{value:p.find((e=>e.value===i.deliveryType)),onChange:e=>{var o;r({deliveryType:(null===e||void 0===e?void 0:e.value)||"",selectedBranch:(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o[0])||null,selectedRegion:""}),s({})},options:p,placeholder:"Select Order Type",isSearchable:!1,styles:u,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"}),l.deliveryType&&(0,E.jsx)(_n,{children:l.deliveryType})]}),(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.length)>0&&!(()=>{var e;return null===a||void 0===a||null===(e=a.branches)||void 0===e?void 0:e.some((e=>e.is_online))})()&&(0,E.jsxs)(kn,{children:[(0,E.jsx)(mn,{deliveryType:i.deliveryType,branches:null===a||void 0===a?void 0:a.branches,selectedBranch:i.selectedBranch,setSelectedBranch:e=>r({selectedBranch:e,selectedRegion:""}),setErrors:s,errors:l}),l.branch&&(0,E.jsx)(_n,{children:l.branch})]}),i.selectedBranch&&"Delivery"===i.deliveryType&&Array.isArray(i.regions)&&i.regions.length>0&&(0,E.jsxs)(kn,{children:[(0,E.jsx)($n,{selectedRegion:i.selectedRegion,onRegionChange:e=>r({selectedRegion:e}),selectedBranch:1===(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)?null===a||void 0===a?void 0:a.branches[0]:i.selectedBranch,setErrors:s,errors:l,onRegionsChange:e=>r({regions:e})}),l.region&&(0,E.jsx)(_n,{children:l.region})]})]})}var Ln=t(16106);const In=n.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Pn=n.Ay.button`
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
`,Nn=n.Ay.div`
  padding: 16px;
  background: ${e=>e.theme.categoryUnActive||"#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,En=n.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Fn=n.Ay.div`
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  word-break: break-all;
`,Dn=n.Ay.a`
  font-size: 14px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-decoration: none;
  font-weight: 600;
  margin-top: 4px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`,Bn=n.Ay.div`
  color: #ff4444;
  font-size: 13px;
  margin-top: -8px;
`;function Rn(e){let{onLocationSelect:o,selectedLocation:t,hasError:i,googleMapsApiKey:r,activeLanguage:a="en"}=e;const l=(0,n.DP)();return r?(0,E.jsx)(Ln.A,{apiKey:r,onLocationConfirm:o,selectedLocation:t,hasError:i,theme:l,activeLanguage:a}):(0,E.jsx)(Un,{onLocationSelect:o,selectedLocation:t,hasError:i})}function Un(e){let{onLocationSelect:o,selectedLocation:t,hasError:n}=e;const[r,a]=(0,i.useState)(!1),[l,s]=(0,i.useState)("");return(0,E.jsxs)(In,{children:[(0,E.jsxs)(Pn,{type:"button",onClick:()=>{navigator.geolocation?(a(!0),s(""),navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:i}=e.coords,n={latitude:t,longitude:i,address:`${t.toFixed(6)}, ${i.toFixed(6)}`};o(n),a(!1)}),(()=>{s("Unable to retrieve your location. Please try again."),a(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):s("Geolocation is not supported by your browser")},disabled:r,variant:"current",children:[(0,E.jsx)(Xe.hO$,{}),r?"Getting Location...":"Use Current Location"]}),(0,E.jsxs)(Pn,{type:"button",onClick:()=>{if(t){const e=`https://www.google.com/maps?q=${t.latitude},${t.longitude}`;window.open(e,"_blank")}else{const e="https://www.google.com/maps/search/?api=1";window.open(e,"_blank")}},variant:"select",children:[(0,E.jsx)(Xe.vq8,{}),t?"View on Map":"Select on Map"]}),t&&(0,E.jsxs)(Nn,{children:[(0,E.jsx)(En,{children:"Selected Location:"}),(0,E.jsx)(Fn,{children:t.address||`${t.latitude}, ${t.longitude}`}),t.latitude&&t.longitude&&(0,E.jsx)(Dn,{href:`https://www.google.com/maps?q=${t.latitude},${t.longitude}`,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]}),l&&(0,E.jsx)(Bn,{children:l}),n&&!t&&(0,E.jsx)(Bn,{children:"Please select a location"})]})}const On=n.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`,qn=n.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,Mn=n.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,Wn=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 0;
  position: relative;
`,Hn=n.Ay.label`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Vn=n.Ay.input`
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
`,Yn=n.Ay.span`
  color: #ff4444;
  font-size: 12px;
  display: block;
`,Xn=n.Ay.p`
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.85;
`;function Kn(e){let{formData:o,updateFormData:t,errors:r,restaurantName:a,restaurant:l,activeLanguage:s="en"}=e;const d=(0,n.DP)(),[c,p]=(0,i.useState)([]),[u,h]=(0,i.useState)(!1),x=(0,i.useRef)(!1),g=(e,o)=>"ar"===s?o:e,m=(0,i.useMemo)((()=>{try{return null!==l&&void 0!==l&&l.features?JSON.parse(l.features):{}}catch{return{}}}),[null===l||void 0===l?void 0:l.features]).google_maps_integrated&&(null===l||void 0===l?void 0:l.google_maps_api_key)||null,f=(0,i.useMemo)((()=>({control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:d.mainColor||d.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?d.categoryUnActive||"#ffffff":o.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})})),[d]),v=(0,i.useMemo)((()=>[{value:"__manual__",label:0===c.length?g("No saved addresses \u2014 type below","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u2014 \u0627\u0643\u062a\u0628 \u0623\u062f\u0646\u0627\u0647"):g("Type address manually","\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u062f\u0648\u064a\u0627\u064b")},...c.map((e=>({value:String(e.id),label:`${e.label||g("Address","\u0639\u0646\u0648\u0627\u0646")}${e.is_default?` (${g("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")})`:""} \u2014 ${e.full_address.length>56?`${e.full_address.slice(0,56)}\u2026`:e.full_address}`})))]),[c,s]),y=(0,i.useMemo)((()=>{if(null==o.selectedAddressId)return v[0]||null;const e=String(o.selectedAddressId);return v.find((o=>o.value===e))||v[0]||null}),[v,o.selectedAddressId]);(0,i.useEffect)((()=>{if("Delivery"!==o.deliveryType||!a)return void p([]);const e=(0,Je.wU)(a);if(!e)return void p([]);let t=!1;return h(!0),de.A.get(Ve.Qf,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:o}=e;t||p(o.addresses||[])})).catch((()=>{t||p([])})).finally((()=>{t||h(!1)})),()=>{t=!0}}),[o.deliveryType,a]),(0,i.useEffect)((()=>{"Delivery"!==o.deliveryType&&(x.current=!1)}),[o.deliveryType]),(0,i.useEffect)((()=>{if("Delivery"!==o.deliveryType)return;if(!c.length||x.current)return;const e=c.find((e=>e.is_default));e&&!String(o.fullAddress||"").trim()&&(x.current=!0,t({selectedAddressId:e.id,fullAddress:e.full_address}))}),[c,o.deliveryType,o.fullAddress,t]);const b=e=>{const{name:o,value:i}=e.target;t("fullAddress"!==o?{[o]:i}:{[o]:i,selectedAddressId:null})};return(0,E.jsxs)(On,{children:[(0,E.jsx)(qn,{children:g("Your Information","\u0628\u064a\u0627\u0646\u0627\u062a\u0643")}),(0,E.jsx)(Mn,{children:g("Please provide your contact details to complete the order","\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628")}),(0,E.jsxs)(Wn,{children:[(0,E.jsx)(Hn,{children:g("Full Name *","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,E.jsx)(Vn,{type:"text",name:"fullName",value:o.fullName,onChange:b,placeholder:g("Enter your full name","\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644"),hasError:!!r.fullName}),r.fullName&&(0,E.jsx)(Yn,{children:r.fullName})]}),(0,E.jsxs)(Wn,{children:[(0,E.jsx)(Hn,{children:g("Phone Number *","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 *")}),(0,E.jsx)(Vn,{type:"tel",name:"phoneNumber",value:o.phoneNumber,onChange:b,placeholder:g("Enter your phone number","\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643"),hasError:!!r.phoneNumber}),r.phoneNumber&&(0,E.jsx)(Yn,{children:r.phoneNumber})]}),"Delivery"===o.deliveryType&&(0,E.jsxs)(E.Fragment,{children:[(0,Je.wU)(a)&&(0,E.jsxs)(Wn,{children:[(0,E.jsxs)(Hn,{children:[g("Saved address","\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0641\u0648\u0638"),u?` (${g("loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")})`:""]}),(0,E.jsx)(kn,{children:(0,E.jsx)(xn.Ay,{value:y,onChange:e=>{if(!e||"__manual__"===e.value)return void t({selectedAddressId:null});const o=parseInt(e.value,10),i=c.find((e=>e.id===o));i&&t({selectedAddressId:o,fullAddress:i.full_address})},options:v,isSearchable:!1,isDisabled:u,styles:f,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed",isRtl:"ar"===s})}),(0,E.jsx)(Xn,{children:g("Add or edit addresses from the account menu (person icon) \u2192 Addresses.","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062d\u0633\u0627\u0628 (\u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0634\u062e\u0635) \u2190 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646.")})]}),m&&(0,E.jsxs)(Wn,{children:[(0,E.jsx)(Hn,{children:g("Delivery Location *","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 *")}),(0,E.jsx)(Rn,{onLocationSelect:e=>{t({selectedLocation:e,fullAddress:e.address||`${e.latitude}, ${e.longitude}`})},selectedLocation:o.selectedLocation,hasError:!!r.fullAddress&&!o.selectedLocation,googleMapsApiKey:m,activeLanguage:s})]}),(0,E.jsxs)(Wn,{children:[(0,E.jsx)(Hn,{children:g("Full Address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,E.jsx)(Jn,{name:"fullAddress",value:o.fullAddress,onChange:b,placeholder:g("Enter your delivery address","\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),hasError:!!r.fullAddress,rows:"3"}),r.fullAddress&&(0,E.jsx)(Yn,{children:r.fullAddress})]})]}),"DineIn"===o.deliveryType&&(0,E.jsxs)(Wn,{children:[(0,E.jsx)(Hn,{children:g("Table Number *","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 *")}),(0,E.jsx)(Vn,{type:"number",name:"tableNumber",value:o.tableNumber,onChange:b,placeholder:g("Enter table number","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629"),hasError:!!r.tableNumber}),r.tableNumber&&(0,E.jsx)(Yn,{children:r.tableNumber})]}),(0,E.jsxs)(Wn,{children:[(0,E.jsx)(Hn,{children:g("Special Notes (Optional)","\u0645\u0644\u0627\u062d\u0638\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,E.jsx)(Jn,{name:"note",value:o.note,onChange:b,placeholder:g("Any special instructions or notes\u2026","\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u2026"),rows:"3"})]})]})}const Qn=n.Ay.div`
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
`,Gn=n.Ay.div`
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,Zn=n.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 12px;
`,er=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  gap: 12px;
`,or=n.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#666"};
  flex: 1;
`,tr=n.Ay.div`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  text-align: right;
  flex: 1;
  word-break: break-word;
`,ir=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,nr=n.Ay.div`
  padding: 8px 0;
`,rr=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,ar=n.Ay.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`,lr=n.Ay.div`
  height: 1px;
  background: ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  margin: 12px 0;
`,sr=n.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-align: right;
`;function dr(e){let{formData:o,restaurant:t,activeLanguage:i}=e;const{restaurantName:n}=(0,y.g)(),r=window.location.hostname.split(".")[0],a="menugic"!==r&&"localhost"!==r&&"www"!==r?r:n,l=(0,v.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,o)=>e+o.price*o.quantity),0),d=(0,Ke.Q)(null===t||void 0===t?void 0:t.currency);return(0,E.jsxs)(Qn,{children:[(0,E.jsx)(Zn,{children:"Review Your Order"}),(0,E.jsxs)(Gn,{children:[(0,E.jsx)(Zn,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Items"}),(0,E.jsx)(ir,{children:l.map((e=>{var o,t;return(0,E.jsx)(nr,{children:(0,E.jsxs)(rr,{children:[(0,E.jsx)(ar,{src:(0,N.V)(null===(o=e.images)||void 0===o||null===(t=o[0])||void 0===t?void 0:t.url),alt:"en"===i?e.en_name:e.ar_name}),(0,E.jsxs)(tr,{style:{flex:2},children:[e.quantity,"x"," ",(0,E.jsx)("strong",{children:"en"===i?e.en_name:e.ar_name})]}),(0,E.jsx)(tr,{children:(0,We.T)(e.price*e.quantity,d)})]})},e.uniqueId)}))}),(0,E.jsx)(lr,{}),(0,E.jsxs)(er,{children:[(0,E.jsx)(or,{children:"Total:"}),(0,E.jsx)(sr,{children:(0,We.T)(s,d)})]})]}),(0,E.jsxs)(Gn,{children:[(0,E.jsx)(Zn,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Details"}),(0,E.jsxs)(er,{children:[(0,E.jsx)(or,{children:"Order Type:"}),(0,E.jsx)(tr,{children:o.deliveryType})]}),o.selectedBranch&&(0,E.jsxs)(er,{children:[(0,E.jsx)(or,{children:"Branch:"}),(0,E.jsx)(tr,{children:o.selectedBranch.name})]}),o.selectedRegion&&(0,E.jsxs)(er,{children:[(0,E.jsx)(or,{children:"Region:"}),(0,E.jsx)(tr,{children:o.selectedRegion})]})]}),(0,E.jsxs)(Gn,{children:[(0,E.jsx)(Zn,{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact Information"}),(0,E.jsxs)(er,{children:[(0,E.jsx)(or,{children:"Name:"}),(0,E.jsx)(tr,{children:o.fullName})]}),(0,E.jsxs)(er,{children:[(0,E.jsx)(or,{children:"Phone:"}),(0,E.jsx)(tr,{children:o.phoneNumber})]}),"Delivery"===o.deliveryType&&o.fullAddress&&(0,E.jsxs)(er,{children:[(0,E.jsx)(or,{children:"Address:"}),(0,E.jsx)(tr,{children:o.fullAddress})]}),"DineIn"===o.deliveryType&&o.tableNumber&&(0,E.jsxs)(er,{children:[(0,E.jsx)(or,{children:"Table Number:"}),(0,E.jsx)(tr,{children:o.tableNumber})]}),o.note&&(0,E.jsxs)(er,{children:[(0,E.jsx)(or,{children:"Notes:"}),(0,E.jsx)(tr,{children:o.note})]})]})]})}const cr={card:{icon:Xe.x1c,en:"Credit/Debit Card",ar:"\u0628\u0637\u0627\u0642\u0629 \u0627\u0626\u062a\u0645\u0627\u0646",desc_en:"Pay securely online",desc_ar:"\u0627\u062f\u0641\u0639 \u0628\u0623\u0645\u0627\u0646 \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",color:"#3b82f6"},whatsapp:{icon:Xe.EcP,en:"WhatsApp",ar:"\u0648\u0627\u062a\u0633\u0627\u0628",desc_en:"Order via WhatsApp",desc_ar:"\u0627\u0637\u0644\u0628 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628",color:"#25d366"},cod:{icon:Xe.MxO,en:"Cash on Delivery",ar:"\u0627\u0644\u062f\u0641\u0639 \u0639\u0646\u062f \u0627\u0644\u062a\u0648\u0635\u064a\u0644",desc_en:"Pay when delivered",desc_ar:"\u0627\u062f\u0641\u0639 \u0639\u0646\u062f \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645",color:"#f59e0b"},pay_at_store:{icon:Xe.Tvt,en:"Pay at Store",ar:"\u0627\u0644\u062f\u0641\u0639 \u0641\u064a \u0627\u0644\u0645\u062a\u062c\u0631",desc_en:"Pay when you pick up",desc_ar:"\u0627\u062f\u0641\u0639 \u0639\u0646\u062f \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645 \u0645\u0646 \u0627\u0644\u0645\u062a\u062c\u0631",color:"#8b5cf6"}};function pr(e){let{restaurant:o,activeLanguage:t,selectedMethod:i,onMethodChange:n,totalPrice:r,currencySymbol:a}=e,l={};try{l="string"===typeof(null===o||void 0===o?void 0:o.features)?JSON.parse(o.features):(null===o||void 0===o?void 0:o.features)||{}}catch{l={}}const s=!0===l.online_payment&&l.payment_methods||["whatsapp"],d="ar"===t;return(0,E.jsxs)("div",{style:{direction:d?"rtl":"ltr"},children:[(0,E.jsx)("div",{style:{fontSize:14,fontWeight:700,color:"#0f172a",marginBottom:12},children:d?"\u0627\u062e\u062a\u0631 \u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062f\u0641\u0639":"Choose Payment Method"}),(0,E.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:10},children:s.map((e=>{const t=cr[e];if(!t)return null;const r=t.icon,a=i===e,l=null!==o&&void 0!==o&&o.theme&&JSON.parse("string"===typeof o.theme?o.theme:"{}").mainColor||"#5eabb1";return(0,E.jsxs)("div",{onClick:()=>n(e),style:{padding:"16px 12px",borderRadius:14,cursor:"pointer",border:a?`2px solid ${l}`:"2px solid rgba(148,163,184,0.2)",background:a?`${l}08`:"#fff",display:"flex",flexDirection:"column",alignItems:"center",gap:8,transition:"all 0.2s"},children:[(0,E.jsx)(r,{size:24,color:a?l:t.color}),(0,E.jsx)("div",{style:{fontSize:13,fontWeight:600,color:"#0f172a",textAlign:"center"},children:d?t.ar:t.en}),(0,E.jsx)("div",{style:{fontSize:11,color:"#64748b",textAlign:"center"},children:d?t.desc_ar:t.desc_en})]},e)}))}),r>0&&(0,E.jsxs)("div",{style:{marginTop:14,padding:"10px 14px",borderRadius:10,background:"#f8fafc",fontSize:13,fontWeight:600,color:"#0f172a",textAlign:"center"},children:[d?"\u0627\u0644\u0645\u062c\u0645\u0648\u0639":"Total",": ",r," ",a]})]})}var ur=t(44915),hr=t(51432);const xr={style:{base:{fontSize:"16px",color:"#0f172a",fontFamily:"-apple-system, BlinkMacSystemFont, sans-serif","::placeholder":{color:"#94a3b8"}},invalid:{color:"#dc2626"}}};function gr(e){let{clientSecret:o,onSuccess:t,onError:n,totalPrice:r,currencySymbol:a,activeLanguage:l}=e;const s=(0,hr.t2)(),d=(0,hr.HH)(),[c,p]=(0,i.useState)(!1),[u,h]=(0,i.useState)(null),x="ar"===l;return(0,E.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),!s||!d||!o)return;p(!0),h(null);const{error:i,paymentIntent:r}=await s.confirmCardPayment(o,{payment_method:{card:d.getElement(hr.hA)}});i?(h(i.message),null===n||void 0===n||n(i.message),p(!1)):"succeeded"===(null===r||void 0===r?void 0:r.status)&&(null===t||void 0===t||t(),p(!1))},children:[(0,E.jsx)("div",{style:{padding:"14px 16px",borderRadius:12,border:"1px solid rgba(148,163,184,0.3)",background:"#fff",marginBottom:12},children:(0,E.jsx)(hr.hA,{options:xr})}),u&&(0,E.jsx)("div",{style:{padding:"8px 12px",borderRadius:8,background:"#fef2f2",color:"#dc2626",fontSize:12,marginBottom:10},children:u}),(0,E.jsx)("button",{type:"submit",disabled:!s||c,style:{width:"100%",padding:"14px 0",borderRadius:12,border:"none",background:c?"#94a3b8":"#5eabb1",color:"#fff",fontSize:15,fontWeight:700,cursor:c?"default":"pointer",transition:"background 0.2s"},children:c?x?"\u062c\u0627\u0631\u064d \u0627\u0644\u062f\u0641\u0639...":"Processing...":x?`\u0627\u062f\u0641\u0639 ${r} ${a}`:`Pay ${r} ${a}`})]})}let mr={};function fr(e){let{publishableKey:o,clientSecret:t,onSuccess:i,onError:n,totalPrice:r,currencySymbol:a,activeLanguage:l}=e;return o&&t?(mr[o]||(mr[o]=(0,ur.c)(o)),(0,E.jsx)(hr.S8,{stripe:mr[o],options:{clientSecret:t},children:(0,E.jsx)(gr,{clientSecret:t,onSuccess:i,onError:n,totalPrice:r,currencySymbol:a,activeLanguage:l})})):(0,E.jsx)("div",{style:{padding:20,textAlign:"center",color:"#94a3b8",fontSize:13},children:"Loading payment form..."})}const vr=n.Ay.div`
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
`,yr=n.Ay.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,br=n.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`,wr=(0,n.Ay)(yr)`
  margin-bottom: 0;
  flex: 1;
`,jr=n.Ay.button`
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
`,Cr=n.Ay.div`
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
`,$r=n.Ay.div`
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
`,Ar=n.Ay.div`
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
`,kr=n.Ay.div`
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
`,zr=n.Ay.div`
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
`,Sr=n.Ay.button`
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
`;function _r(e){var o;let{popupHandler:t,restaurant:n}=e;const{restaurantName:r}=(0,y.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:r,s=(0,v.d4)((e=>e.cart[l]||[])),d=(0,v.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[l])||void 0===t?void 0:t.activeLanguage)||"en"})),c=(0,v.wA)(),[p,u]=(0,i.useState)(0),[h,x]=(0,i.useState)({deliveryType:"",selectedBranch:(null===n||void 0===n||null===(o=n.branches)||void 0===o?void 0:o[0])||null,selectedRegion:"",regions:[],fullName:"",phoneNumber:"",fullAddress:"",selectedAddressId:null,selectedLocation:null,tableNumber:"",note:""}),[g,m]=(0,i.useState)({}),[f,b]=(0,i.useState)("whatsapp"),[w,j]=(0,i.useState)(null),[C,$]=(0,i.useState)(!1);let A={};try{A=JSON.parse((null===n||void 0===n?void 0:n.features)||"{}")}catch{A={}}const k=!0===A.online_payment?[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"payment",label:"Payment",number:4},{id:"review",label:"Review",number:5}]:[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"review",label:"Review",number:4}],{handleApiCallAsync:z,isPending:S}=(0,Ei.h)({onSuccess:()=>{}});(0,i.useEffect)((()=>{(async()=>{const e=(0,Je.wU)(l);if(e)try{const{data:o}=await de.A.get(Ve.EY,{headers:{Authorization:`Bearer ${e}`}});x((e=>({...e,fullName:o.full_name||e.fullName,phoneNumber:o.phone_number||e.phoneNumber})))}catch{}})()}),[l]),(0,i.useEffect)((()=>{if(null!==n&&void 0!==n&&n.features){const e=JSON.parse(n.features),o=Object.entries(e).filter((e=>{let[o,t]=e;return!0===t})).map((e=>{let[o]=e;return"delivery_order"===o?"Delivery":"takeaway_order"===o?"TakeAway":"dinein_order"===o?"DineIn":null})).filter(Boolean);1===o.length&&x((e=>({...e,deliveryType:o[0]})))}}),[n]);const _=e=>{x((o=>({...o,...e})));const o=Object.keys(e);m((e=>{const t={...e};return o.forEach((e=>{t[e]&&delete t[e]})),t}))},T=e=>{const o={};if(1===e){var t;if(h.deliveryType||(o.deliveryType="Order Type is required."),!h.selectedBranch&&(null===n||void 0===n||null===(t=n.branches)||void 0===t?void 0:t.length)>0){var i;(null===n||void 0===n||null===(i=n.branches)||void 0===i?void 0:i.some((e=>e.is_online)))||(o.branch="Branch is required.")}"Delivery"===h.deliveryType&&h.selectedBranch&&Array.isArray(h.regions)&&h.regions.length>0&&!h.selectedRegion&&(o.region="Region is required.")}else 2===e&&(h.fullName||(o.fullName="Full Name is required."),h.phoneNumber||(o.phoneNumber="Phone Number is required."),"Delivery"!==h.deliveryType||h.fullAddress||(o.fullAddress="Full Address is required for delivery."),"DineIn"!==h.deliveryType||h.tableNumber||(o.tableNumber="Table Number is required."));return m(o),0===Object.keys(o).length},L=(0,Ke.Q)(null===n||void 0===n?void 0:n.currency),I=s.reduce(((e,o)=>e+o.price*o.quantity),0);return(0,E.jsxs)(vr,{children:[(0,E.jsxs)(br,{children:[(0,E.jsx)(wr,{children:k[p].label}),(0,E.jsx)(jr,{onClick:()=>t(null),"aria-label":"Close cart",children:"\u2715"})]}),(0,E.jsx)(Cr,{children:k.map(((e,o)=>(0,E.jsxs)($r,{active:o<=p,children:[(0,E.jsx)(Ar,{active:o<=p,completed:o<p,children:o<p?"\u2713":e.number}),(0,E.jsx)("span",{children:e.label})]},e.id)))}),(0,E.jsx)(kr,{children:(()=>{var e;switch(null===(e=k[p])||void 0===e?void 0:e.id){case"cart":return(0,E.jsx)(hn,{formData:h,updateFormData:_,restaurant:n,activeLanguage:d});case"orderType":return(0,E.jsx)(Tn,{formData:h,updateFormData:_,restaurant:n,errors:g,setErrors:m});case"details":return(0,E.jsx)(Kn,{formData:h,updateFormData:_,restaurant:n,errors:g,restaurantName:l,activeLanguage:d});case"payment":return(0,E.jsx)(pr,{restaurant:n,activeLanguage:d,selectedMethod:f,onMethodChange:b,totalPrice:I,currencySymbol:L});case"review":return"card"===f&&w?(0,E.jsx)(fr,{clientSecret:w,restaurant:n,onSuccess:()=>{$(!0),c((0,He.sX)(l)),t(null)},onError:e=>console.error("Payment failed:",e)}):(0,E.jsx)(dr,{formData:h,restaurant:n,activeLanguage:d});default:return null}})()}),(0,E.jsxs)(zr,{children:[p>0&&(0,E.jsx)(Sr,{onClick:()=>{p>0&&u(p-1)},variant:"secondary",children:"Back"}),p<k.length-1?(0,E.jsx)(Sr,{onClick:()=>{if(T(p)){if(0===p&&null!==n&&void 0!==n&&n.id){var e;const o=(null===(e=h.selectedBranch)||void 0===e?void 0:e.id)||null;(0,Ye.trackCheckoutStart)(n.id,o,h.deliveryType||null)}p<k.length-1&&u(p+1)}},variant:"primary",children:"Next"}):(0,E.jsx)(Sr,{onClick:async()=>{var e,o,i,r;if(!T(2))return;const a=s.map((e=>({product_id:e.id,product_name:"en"===d?e.en_name:e.ar_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}}))),p={products:s.map((e=>{var o;return{id:e.id,quantity:e.quantity,branch_id:null===(o=h.selectedBranch)||void 0===o?void 0:o.id,restaurant_id:n.id}})),restaurant_id:n.id,branch_id:null===(e=h.selectedBranch)||void 0===e?void 0:e.id,delivery_type:h.deliveryType,customer_name:h.fullName,customer_phone:h.phoneNumber,customer_address:"Delivery"===h.deliveryType?h.fullAddress:null,customer_latitude:(null===(o=h.selectedLocation)||void 0===o?void 0:o.latitude)||null,customer_longitude:(null===(i=h.selectedLocation)||void 0===i?void 0:i.longitude)||null,table_number:"DineIn"===h.deliveryType?h.tableNumber:null,note:h.note,items:a,subtotal:I,total:I,currency:n.currency};if("cod"===f||"pay_at_store"===f)return z({...p,payment_method:f},l).then((e=>{var o,t,i;null!==n&&void 0!==n&&n.id&&(0,Ye.trackOrderPlaced)(n.id,null===e||void 0===e||null===(o=e.data)||void 0===o||null===(t=o.order)||void 0===t?void 0:t.id,h.deliveryType,I,null===(i=h.selectedBranch)||void 0===i?void 0:i.id,{items:a})})).catch(console.error),c((0,He.sX)(l)),void t(null);if("card"===f){try{var u,x;const e=await z({...p,payment_method:"card"},l),o=null===e||void 0===e||null===(u=e.data)||void 0===u||null===(x=u.order)||void 0===x?void 0:x.id;if(o){const{data:e}=await de.A.post("http://localhost:4000/payments/create-intent",{order_id:o});var g;if(j(e.data.client_secret),null!==n&&void 0!==n&&n.id)(0,Ye.trackOrderPlaced)(n.id,o,h.deliveryType,I,null===(g=h.selectedBranch)||void 0===g?void 0:g.id,{items:a})}}catch(w){console.error("Payment intent failed:",w)}return}let m=0,v="";v+=`*New Order - ${h.deliveryType}*\n`,v+="--------------------\n\n",v+="*Items:*\n",s.forEach(((e,o)=>{const t=("ar"===d?e.ar_name:e.en_name||"").trim(),i=("ar"===d?e.category.ar_category:e.category.en_category||"").trim(),n=e.price*e.quantity;m+=n,v+=`${o+1}. *${t}*\n`,v+=`    ${i}\n`,v+=`    ${e.quantity}x ${e.price} ${L} = *${n} ${L}*\n`,e.formData&&(v+=(0,Fi.Ve)(e,"ar"===d?"ar":"en")),e.instruction&&(v+=`    > _${e.instruction}_\n`),v+="\n"})),v+="--------------------\n",v+=`*Total: ${(0,We.T)(m,L)}*\n\n`,v+="*Customer:*\n",v+=`- ${h.fullName}\n`,v+=`- ${h.phoneNumber}\n`,h.selectedRegion&&(v+=`- Region: ${h.selectedRegion}\n`);let y="";"Delivery"===h.deliveryType&&(v+="\n*Delivery Address:*\n",v+=`${h.fullAddress}\n`,h.selectedLocation&&(y=`https://www.google.com/maps?q=${h.selectedLocation.latitude},${h.selectedLocation.longitude}`)),"DineIn"===h.deliveryType&&(v+=`- Table: #${h.tableNumber}\n`),h.note&&(v+=`\n*Note:* _${h.note}_\n`),y&&(v+=`\n${y}\n`);const b=null!==(r=h.selectedBranch)&&void 0!==r&&r.whatsapp_number?(0,Li.JW)(h.selectedBranch.whatsapp_number,null===n||void 0===n?void 0:n.country_code):n.phone_number;z({...p,payment_method:"whatsapp"},l).then((e=>{var o,t,i;null!==n&&void 0!==n&&n.id&&(0,Ye.trackOrderPlaced)(n.id,(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(t=o.order)||void 0===t?void 0:t.id)||null,h.deliveryType,m,(null===(i=h.selectedBranch)||void 0===i?void 0:i.id)||null,{items:a,customerName:h.fullName})})).catch((e=>console.error("Order creation failed:",e))),(0,Li.JT)(b,v),c((0,He.sX)(l)),t(null)},variant:"primary",disabled:S,children:S?"Submitting...":"Submit Order"})]})]})}function Tr(e){let{restaurant:o,showPopup:t,popupHandler:n=(()=>{})}=e;const{restaurantName:r}=(0,y.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:r,s=(0,v.d4)((e=>e.cart[l]||[])),d=(0,v.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[l])||void 0===t?void 0:t.activeLanguage)||"en"})),c=0===s.length;(0,i.useEffect)((()=>{const e=()=>{n(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);return(0,E.jsx)(Pi,{showPopup:t,children:c?(0,E.jsx)(Ni,{children:"en"===d?"Your cart is empty":"\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0641\u0627\u0631\u063a\u0629"}):(0,E.jsx)(_r,{popupHandler:n,restaurant:o})})}const Lr=n.Ay.div`
height: 100vh;
position: fixed;
width: 100%;
left: ${e=>e.showSidebar?"0":"-100%"};
top:0;
  transition:all  0.5s ease-in-out;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
z-index: 100;
`,Ir=n.Ay.div`
width: 100%;
height: 100%;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
`,Pr=n.Ay.div`
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
`,Nr=n.Ay.div`
width: 100%;
  height: 60%; /* 60% of the sidebar height */
  overflow-y: auto;
  margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,Er=n.Ay.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-start;
`,Fr=n.Ay.span`
    /* overflow: hidden;
    text-overflow: ellipsis; */
    margin-left:${e=>e.categoryType?"10%":"0%"};

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 13px;
    color: ${e=>e.theme.sidebartext};

`,Dr=n.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10%;

`,Br=n.Ay.img`
width:20px;
height:20px;
`,Rr=n.Ay.div`
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vh;
`,Ur=n.Ay.img`
max-width: min(200px, 60vw);
max-height: 120px;
object-fit: contain;
margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,Or=n.Ay.div`
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

`,qr=n.Ay.input`
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

`,Mr=(0,n.Ay)(c.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};
color:${e=>e.theme.sidebarsearchText};

`,Wr=(0,n.Ay)(J.IMk)`
position: absolute;
left: 20px;
top: 20px;
color: ${e=>e.theme.sidebarsearch};
font-size: 27px;

`;function Hr(e){var o;let{activeCategory:t,setactiveCategory:n,categories:r,showSidebar:a,setshowSidebar:l,setcarouselPosition:s,onFeedbackClick:d,onContactClick:c,onBranchesClick:p,onAboutClick:u,onShareClick:h,branches:x}=e;const{restaurantName:g}=(0,y.g)(),[m,f]=(0,se.ok)(),b=window.location.hostname.split(".")[0],w="menugic"!==b&&"localhost"!==b&&"www"!==b?b:g,j=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[w]})),[C,$]=(0,i.useState)(""),A=(null===j||void 0===j?void 0:j.activeLanguage)||"en",k=null===r||void 0===r?void 0:r.filter((e=>"en"===A?(e.en_category||"").toLowerCase().includes(C.toLowerCase()):(e.ar_category||"").toLowerCase().includes(C.toLowerCase()))),z=e=>{l(!1),e&&e()},S=[d&&{icon:Xe.g5D,label:"en"===A?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a",onClick:()=>z(d)},(null===x||void 0===x?void 0:x.length)>0&&p&&{icon:Xe.vq8,label:"en"===A?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639",onClick:()=>z(p)},c&&{icon:Xe.toK,label:"en"===A?"Contact Us":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",onClick:()=>z(c)},u&&{icon:Xe.__w,label:"en"===A?"About Us":"\u0645\u0646 \u0646\u062d\u0646",onClick:()=>z(u)},h&&{icon:Xe.eb3,label:"en"===A?"Share":"\u0645\u0634\u0627\u0631\u0643\u0629",onClick:()=>z(h)}].filter(Boolean);return(0,E.jsxs)(Lr,{showSidebar:a,children:[(0,E.jsx)(Ir,{onClick:()=>{l(!1)},showSidebar:a}),(0,E.jsxs)(Pr,{children:[(0,E.jsx)(Wr,{}),(0,E.jsx)(Rr,{children:(0,E.jsx)(Ur,{showSidebar:a,src:(null===j||void 0===j?void 0:j.logoURL)&&`https://storage.googleapis.com/ecommerce-bucket-testing/${j.logoURL}`})}),(0,E.jsxs)(Or,{showSidebar:a,children:[(0,E.jsx)(Mr,{activeLanguage:A}),(0,E.jsx)(qr,{type:"text",activeLanguage:A,dir:"en"===A?"ltr":"rtl",placeholder:"en"===A?"Search Categories":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{$(e.target.value)},value:C})]}),(0,E.jsx)(Nr,{showSidebar:a,children:null===k||void 0===k?void 0:k.sort(((e,o)=>o.priority-e.priority)).map(((e,o)=>(0,E.jsxs)(Er,{onClick:()=>((e,o)=>{n(e),s(o),l(!1)})(e.id,o),children:["horizantal-withoutIcon"!==(null===j||void 0===j?void 0:j.category_type)&&(0,E.jsx)(Dr,{activeCategory:t,categoryId:e.id,children:(0,E.jsx)(Br,{src:e.image_url?(0,N.V)(e.image_url):e.isAllItems&&null!==j&&void 0!==j&&j.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${j.logoURL}`:""})}),(0,E.jsx)(Fr,{categoryType:"horizantal-withoutIcon"===(null===j||void 0===j?void 0:j.category_type),activeCategory:t,categoryId:e.id,children:"en"===A?e.en_category||e.ar_category:e.ar_category||e.en_category})]},o)))}),S.length>0&&(0,E.jsx)("div",{style:{borderTop:`1px solid ${null!==j&&void 0!==j&&j.theme&&(null===(o=JSON.parse(j.theme))||void 0===o?void 0:o.borderColor)||"#eee"}`,marginTop:10,paddingTop:10},children:S.map(((e,o)=>{var t,i;return(0,E.jsxs)(Er,{onClick:e.onClick,style:{cursor:"pointer"},children:[(0,E.jsx)(Dr,{style:{background:"transparent",border:"none",width:28,height:28},children:(0,E.jsx)(e.icon,{style:{fontSize:14,color:null!==j&&void 0!==j&&j.theme&&(null===(t=JSON.parse(j.theme))||void 0===t?void 0:t.sidebartext)||"#333"}})}),(0,E.jsx)(Fr,{categoryType:!0,style:{fontWeight:500,color:null!==j&&void 0!==j&&j.theme&&(null===(i=JSON.parse(j.theme))||void 0===i?void 0:i.sidebartext)||"#333"},children:e.label})]},o)}))})]})]})}var Vr=t(65445);const Jr=n.Ay.div`
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
`,Yr=n.Ay.div`
width: 80%;
display: flex;
flex-direction: column;
padding-top:40px;
`,Xr=n.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,Kr=(n.Ay.a`
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

`),Qr=(0,n.Ay)(eo.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`,Gr=n.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor}

`,Zr=n.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor};
margin-top: 20px;
`,ea=n.Ay.div`
display: flex;
flex-direction: row;
gap:15px;
margin-top: 20px;


`,oa=n.Ay.div`
display: flex;
flex-direction: column;
gap:5px;
align-items: center;
justify-content: center;

`,ta=n.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #8bffb83d;
`,ia=(0,n.Ay)(r.EcP)`
font-size: 24px;
color:#51C288;
`,na=n.Ay.div`
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

background-size: 300% 300%; /* Creates a smooth animated effect */`,ra=(0,n.Ay)(r.ao$)`
font-size: 24px;
/* color:#51C288; */
color:#5c595b;



`,aa=n.Ay.span`
font-size: 10px;
color:${e=>e.theme.popupTextColor}

`,la=n.Ay.div`
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

`,sa=n.Ay.div`
width: 85%;
overflow: hidden;

`,da=n.Ay.span`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
white-space: nowrap;
`,ca=(0,n.Ay)(r.zU_)`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`,pa=(0,n.Ay)(xt.RXm)`
font-size: 18px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`;function ua(e){let{showPopup:o,popupHandler:t,activeCategory:n}=e;const{restaurantName:r}=(0,y.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:r;(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[l].activeLanguage}));(0,i.useEffect)((()=>{const e=()=>{t(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const[s,d]=(0,i.useState)(!1);return(0,E.jsxs)(Jr,{showPopup:o,children:[(0,E.jsx)(Qr,{onClick:()=>{t(null)}}),(0,E.jsxs)(Yr,{children:[(0,E.jsx)(Gr,{children:"Share Category"}),(0,E.jsxs)(ea,{children:[(0,E.jsxs)(oa,{children:[(0,E.jsx)(ta,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname,t=`https://api.whatsapp.com/send?text=${encodeURIComponent(o+"?categoryId="+e)}`;window.open(t,"_blank")})(n),children:(0,E.jsx)(ia,{})}),(0,E.jsx)(aa,{children:"Whatsapp"})]}),(0,E.jsxs)(oa,{children:[(0,E.jsx)(na,{onClick:()=>{window.open("https://www.instagram.com/direct/inbox/","_blank")},children:(0,E.jsx)(ra,{})}),(0,E.jsx)(aa,{children:"Instagram"})]})]}),(0,E.jsx)(Zr,{children:"Get Link"}),(0,E.jsxs)(la,{children:[(0,E.jsx)(sa,{children:(0,E.jsx)(da,{children:(e=>{if(e){return window.location.origin+window.location.pathname+"?categoryId="+e}})(n)})}),s?(0,E.jsx)(pa,{}):(0,E.jsx)(ca,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname;navigator.clipboard.writeText(o+"?categoryId="+e),d(!0),setTimeout((()=>{d(!1)}),4e3)})(n)})]})]}),(0,E.jsxs)(Xr,{children:["Copyright",(0,E.jsx)(Kr,{}),"2024 ",(0,E.jsx)(se.N_,{href:"https://www.menugic.com",children:"menugic.com"})]})]})}var ha=t(31088),xa=t(5677),ga=t(38495);const ma=n.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,fa=n.Ay.div`
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
  animation: ${ma} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,va=n.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,ya=n.Ay.div`
  display: flex;
  gap: 10px;
`,ba=n.Ay.button`
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
`,wa=n.Ay.button`
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

`,ja=e=>{let{onInstall:o,onDismiss:t,restaurantName:i,showInstallPopup:n}=e;return(0,E.jsxs)(fa,{showInstallPopup:n,children:[(0,E.jsxs)(va,{children:["Access ",(0,E.jsx)("b",{children:i})," anytime with one tap ",(0,E.jsx)("b",{children:"Install The App!"})]}),(0,E.jsxs)(ya,{children:[(0,E.jsx)(ba,{onClick:o,children:"Install"}),(0,E.jsx)(wa,{onClick:t,children:"Dismiss"})]})]})};var Ca=t(42978),$a=t(34500);function Aa(){var e,o,t;const[n,r]=(0,se.ok)(),a=n.get("productId"),c=n.get("categoryId"),{restaurantName:p}=(0,y.g)(),u=window.location.hostname.split(".")[0],h="menugic"!==u&&"localhost"!==u&&"www"!==u?u:p,x=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[h]})),g=(0,v.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[h])||void 0===t?void 0:t.activeLanguage)||"en"}));(0,i.useEffect)((()=>(document.documentElement.setAttribute("dir","ar"===g?"rtl":"ltr"),()=>document.documentElement.removeAttribute("dir"))),[g]);const[m,f]=(0,i.useState)(null),[b,w]=(0,i.useState)(""),[j,C]=(0,i.useState)(null),[$,A]=(0,i.useState)(null),[k,z]=(0,i.useState)(!0),S=2===Number(null===x||void 0===x?void 0:x.template_id)&&(!0===(null===x||void 0===x?void 0:x.show_all_items_category)||1===(null===x||void 0===x?void 0:x.show_all_items_category)||"1"===(null===x||void 0===x?void 0:x.show_all_items_category)),_={id:"all-items",en_category:"All Items",ar_category:"\u0643\u0644 \u0627\u0644\u0623\u0635\u0646\u0627\u0641",isAllItems:!0,priority:999999,image_url:(null===x||void 0===x?void 0:x.logoURL)||(null===x||void 0===x?void 0:x.cover_url)||null},T=[...(null===x||void 0===x?void 0:x.categories)||[]].sort(((e,o)=>(o.priority||0)-(e.priority||0)||(e.id||0)-(o.id||0))),L=S?[_,...T]:T,[I,P]=(0,i.useState)(c?L.findIndex((e=>e.id==c)):0),[N,F]=((0,v.d4)((e=>(e.cart[h]||[]).reduce(((e,o)=>e+o.quantity),0))),(0,i.useState)(c||(null===L||void 0===L||null===(e=L[0])||void 0===e?void 0:e.id))),D=(0,i.useCallback)((e=>{F(e);const o=new URLSearchParams(n);"all-items"===e?o.delete("categoryId"):o.set("categoryId",e),r(o)}),[n,r]),B=e=>{document.body.style.overflow=null==e?"auto":"hidden",f(e)};(0,i.useEffect)((()=>{if(null!==x&&void 0!==x&&x.id){var e,o;const t=(null===x||void 0===x||null===(e=x.branches)||void 0===e||null===(o=e[0])||void 0===o?void 0:o.id)||null;(0,Ye.trackVisit)(x.id,t),(0,Ye.trackPageView)(x.id,t)}}),[null===x||void 0===x?void 0:x.id]),(0,i.useEffect)((()=>{console.log("\ud83d\udd0d PWA Debug Info:"),console.log("- Protocol:",window.location.protocol),console.log("- Host:",window.location.hostname),console.log("- Navigator:",navigator.userAgent);const e=e=>{e.preventDefault(),console.log("\u2705 Install prompt event captured!"),A(e),z(!0)};return window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",(e=>{console.log("\ud83c\udf89 Application installed successfully!")})),()=>{window.removeEventListener("beforeinstallprompt",e)}}),[]);let R={};try{R=JSON.parse((null===x||void 0===x?void 0:x.features)||"{}")}catch(Qe){R={}}const U=(null===x||void 0===x?void 0:x.sliderImages)||[],O=(!0===(null===x||void 0===x?void 0:x.show_slider_image)||1===(null===x||void 0===x?void 0:x.show_slider_image)||"1"===(null===x||void 0===x?void 0:x.show_slider_image))&&U.length>0;return(0,E.jsxs)(l,{id:"wrapper",children:[(0,E.jsx)($a.A,{onProductsClick:()=>window.scrollTo({top:0,behavior:"smooth"}),onBranchesClick:()=>{window.history.pushState({},""),B("location")},onContactFormClick:()=>{window.history.pushState({},""),B("contactForm")},onFeedbackClick:()=>{window.history.pushState({},""),B("feedback")},onAboutClick:()=>{window.history.pushState({},""),B("about")},onOrderClick:()=>{var e;null!==(e=R)&&void 0!==e&&e.cart&&(window.history.pushState({},""),B("cart"))},onHomeClick:void 0,onCategoryClick:e=>{D(e);const o=L.findIndex((o=>o.id===e));o>=0&&P(o)},onContactClick:()=>{window.history.pushState({},""),B("contactForm")},categories:L,activeCategory:N,setshowSidebar:C,showSidebar:j,popupHandler:B,isProductDetailsOpen:!!a}),(0,E.jsxs)(s,{onClick:()=>{null!=m&&B(null)},children:[(0,E.jsx)(d,{showPopup:m}),(0,E.jsx)(le,{categories:L,activeCategory:N,setactiveCategory:D,setSearchText:w,searchText:b,setshowSidebar:C,showSidebar:j,carouselPosition:I,setcarouselPosition:P,popupHandler:B,showMenuSlider:O,sliderImages:U,hideHeaderTop:!0}),(0,E.jsx)(Ht,{menu:x.categories,activeCategory:N,showPopup:m,searchText:b,setactiveCategory:D,setcarouselPosition:P,carouselPosition:I,categories:L})]}),(0,E.jsx)(Ii,{restaurant:x,showPopup:m,popupHandler:B}),(null===(o=R)||void 0===o?void 0:o.cart)&&(0,E.jsx)(Tr,{restaurant:x,showPopup:m,popupHandler:B}),(0,E.jsx)(ua,{showPopup:m,popupHandler:B,activeCategory:N}),(0,E.jsx)(ha.A,{restaurant:x,showPopup:m,popupHandler:B}),(0,E.jsx)(xa.A,{restaurant:x,showPopup:m,popupHandler:B}),(0,E.jsx)(ga.A,{restaurant:x,showPopup:m,popupHandler:B}),(0,E.jsx)(Hr,{categories:L,activeCategory:N,setactiveCategory:D,setshowSidebar:C,showSidebar:j,setcarouselPosition:P,onFeedbackClick:()=>{window.history.pushState({},""),B("feedback")},onContactClick:()=>{window.history.pushState({},""),B("contactForm")},onBranchesClick:()=>{window.history.pushState({},""),B("location")},onAboutClick:()=>{window.history.pushState({},""),B("about")},onShareClick:()=>{window.history.pushState({},""),B("share")},branches:null===x||void 0===x?void 0:x.branches}),a&&(0,E.jsx)(Vr.A,{productId:a,searchParams:n,setSearchParams:r}),(null===(t=R)||void 0===t?void 0:t.install_app)&&(0,E.jsx)(ja,{showInstallPopup:k,onInstall:async()=>{if(!$)return;$.prompt();"accepted"===(await $.userChoice).outcome?console.log("User accepted the install"):console.log("User dismissed the install"),A(null),z(!1)},restaurantName:h,onDismiss:()=>z(!1)}),(0,E.jsx)(Ca.A,{hideHome:!0,activeView:"products",showPopup:m,onCategoriesClick:()=>window.scrollTo({top:0,behavior:"smooth"}),onCartClick:()=>{var e;null!==(e=R)&&void 0!==e&&e.cart&&(window.history.pushState({},""),B("cart"))},onFeedbackClick:()=>{window.history.pushState({},""),B("feedback")},onBranchesClick:()=>{window.history.pushState({},""),B("location")},restaurantName:h,branches:null===x||void 0===x?void 0:x.branches})]})}},20965:(e,o,t)=>{t(42564).default}}]);
//# sourceMappingURL=60.26207808.chunk.js.map