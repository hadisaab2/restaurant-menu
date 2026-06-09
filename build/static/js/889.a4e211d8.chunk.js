/*! For license information please see 889.a4e211d8.chunk.js.LICENSE.txt */
(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[889],{4396:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>ma});var i=t(82483),r=t(41190),n=t(42751),a=t(22829);const l=r.Ay.div`
min-height: 100vh;
width: 100%;
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
`;r.Ay.div`
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
`,r.Ay.div`
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
`,r.Ay.div`
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

`,(0,r.Ay)(n.meu)`
transform: rotate(270deg);
width: 20px;
height: 20px;
`,(0,r.Ay)(a.vlb)`
width: 20px;
height: 20px;
`,r.Ay.div`
position: fixed;
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color:${e=>e.theme.textColor};
background-color:${e=>e.theme.backgroundColor};
`;var c=t(27320);const p=r.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`,u=(r.Ay.div`
width: 90%;
display: flex;
align-items: ${e=>"en"==e.activeLanuguage?"flex-start":"flex-end"};
flex-direction: column;
margin-top: 8px;
margin-bottom: 8px;
font-weight: 600;
color:${e=>e.theme.textColor}
`,r.Ay.div`
font-size: 27px;


`,r.Ay.div`
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

`),h=r.Ay.div`
width: 90%;
display: flex;
align-items: center;
color:${e=>e.theme.searchTextColor};
height: 40px;
border-radius: 10px;
overflow: hidden;
position: relative;

`,x=r.Ay.input`
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

`,g=(0,r.Ay)(c.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};

`,m=(r.Ay.div`
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
`),f=(0,r.Ay)(a.LZ_)`
color:${e=>e.theme.searchTextColor};
font-size: 14px;


`;var v=t(91965),y=t(93376),b=t(1901);const w=r.Ay.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;
`,j=r.Ay.div`
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
`,C=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  /* transform: ${e=>`translateX(-${100*e.carouselPosition/4}%)`}; */
`,$=r.Ay.div`
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
`,A=r.Ay.div`
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
`,k=r.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;

`,z=r.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
background-color:${e=>e.categoryId==e.activeCategory?e.theme.categoryActiveIcon:e.theme.categoryUnactiveIcon};
transition: 0.2s all ease-in-out;

`,S=r.Ay.img`
width:20px;
height:20px;

`,T=r.Ay.div`
 display: flex;
justify-content: center; 
flex:0.8;
width: 100%;
`,_=r.Ay.span`
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
`,L=(0,r.Ay)(b.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
@media (min-width: 1024px) {
        right: 20px;
    }
`,I=(0,r.Ay)(b.NaI)`
position: absolute;
font-size: 22px;
left: 0px;
color:${e=>e.theme.textColor};
rotate: calc(180deg);
@media (min-width: 1024px) {
        left: 20px;
    }
`;var P=t(22139),E=t(58821),N=t(56723);function F(e){let{categories:o,activeCategory:t,setactiveCategory:r,carouselPosition:n,setcarouselPosition:a}=e;const{restaurantName:l}=(0,y.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[d].activeLanguage})),p=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[d]})),u=(0,i.useRef)([]);return(0,i.useEffect)((()=>{u.current=u.current.slice(0,o.length)}),[o.length]),(0,i.useEffect)((()=>{u.current[n]&&u.current[n].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[n]),(0,N.jsxs)(w,{children:[(null===o||void 0===o?void 0:o.length)>4&&n>=1&&(0,N.jsx)(I,{onClick:()=>{n>0&&a(n-1)}}),(0,N.jsx)(j,{children:(0,N.jsx)(C,{carouselPosition:n,children:null===o||void 0===o?void 0:o.sort(((e,o)=>o.priority-e.priority)).map(((e,o)=>(0,N.jsx)($,{activeLanuguage:c,activeCategory:t,categoryId:e.id,onClick:()=>((e,o)=>{(0,P.c)(e),r(e),a(o)})(e.id,o),ref:e=>u.current[o]=e,children:(0,N.jsxs)(A,{activeCategory:t,categoryId:e.id,children:[(0,N.jsx)(k,{children:(0,N.jsx)(z,{activeCategory:t,categoryId:e.id,children:(0,N.jsx)(S,{src:e.image_url?(0,E.V)(e.image_url):e.isAllItems&&null!==p&&void 0!==p&&p.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${p.logoURL}`:e.isAllItems&&null!==p&&void 0!==p&&p.cover_url?`https://storage.googleapis.com/ecommerce-bucket-testing/${p.cover_url}`:""})})}),(0,N.jsx)(T,{children:(0,N.jsx)(_,{activeCategory:t,categoryId:e.id,children:"en"==c?e.en_category||e.ar_category:e.ar_category||e.en_category})})]})})))})}),(null===o||void 0===o?void 0:o.length)>4&&(0,N.jsx)(L,{onClick:()=>{n<o.length-4&&a(n+1)}})]})}const R=r.Ay.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;
`,D=r.Ay.div`
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
`,O=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;

`,B=r.Ay.div`
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

`,U=r.Ay.div`
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
`,q=(r.Ay.div`
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

`),M=r.Ay.span`

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 12px;
  user-select: none !important;
  -webkit-user-select: none !important;  /* For Safari (iOS) */
  -moz-user-select: none !important;     /* For Firefox */
  -ms-user-select: none !important;      /* For Internet Explorer */
`,H=(0,r.Ay)(b.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
`;function W(e){let{categories:o,activeCategory:t,setactiveCategory:r,carouselPosition:n,setcarouselPosition:a}=e;const{restaurantName:l}=(0,y.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[d].activeLanguage})),p=(0,i.useRef)([]);return(0,i.useEffect)((()=>{p.current=p.current.slice(0,o.length)}),[o.length]),(0,i.useEffect)((()=>{p.current[n]&&p.current[n].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[n]),(0,N.jsxs)(R,{children:[(0,N.jsx)(D,{children:(0,N.jsx)(O,{children:null===o||void 0===o?void 0:o.sort(((e,o)=>o.priority-e.priority)).map(((e,o)=>(0,N.jsx)(B,{activeLanuguage:c,activeCategory:t,categoryId:e.id,onClick:()=>((e,o)=>{(0,P.c)(e),r(e),a(o)})(e.id,o),index:o,ref:e=>p.current[o]=e,children:(0,N.jsx)(U,{activeCategory:t,categoryId:e.id,children:(0,N.jsx)(q,{children:(0,N.jsx)(M,{activeCategory:t,categoryId:e.id,children:"en"===c?e.en_category||e.ar_category:e.ar_category||e.en_category})})})},e.id)))})}),(null===o||void 0===o?void 0:o.length)>4&&(0,N.jsx)(H,{onClick:()=>{n<o.length-4&&a(n+1)}})]})}function V(e){let{categories:o,activeCategory:t,setactiveCategory:i,carouselPosition:r,setcarouselPosition:n}=e;const{restaurantName:a}=(0,y.g)(),l=window.location.hostname.split(".")[0],s="menugic"!==l&&"localhost"!==l&&"www"!==l?l:a,d=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[s]}));return(0,N.jsxs)(N.Fragment,{children:["vertical-category"==d.category_type&&(0,N.jsx)(F,{categories:o,activeCategory:t,setactiveCategory:i,carouselPosition:r,setcarouselPosition:n}),"horizantal-withoutIcon"==d.category_type&&(0,N.jsx)(W,{categories:o,activeCategory:t,setactiveCategory:i,carouselPosition:r,setcarouselPosition:n})]})}var Y=t(11671);const J=r.Ay.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 10vh;
width: 100%;
`,X=r.Ay.div`
display: flex;
align-items: center;
position: relative;
height: 10vh;
justify-content: space-between;
width: 90%;
position: relative;

`,K=r.Ay.img`
max-width: min(250px, 50vw);
max-height: 100px;
object-fit: contain;
position: absolute;
margin-right: 7px;

`,G=r.Ay.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`,Q=r.Ay.div`
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
`,Z=r.Ay.div`
width: 100%;
background-color: ${e=>e.theme.languagebackground};
opacity: 0.6;
position: absolute;
height: 100%;
z-index: 1;
border-radius: 10px;


`,ee=r.Ay.div`
position: absolute;
background-color: ${e=>e.theme.languagebackground};
left:${e=>"en"==e.activeLanguage?"0px":"32px"} ;
transition:all ease-in-out 0.2s;
height: 100%;
width: 50%;
z-index: 2;

`,oe=r.Ay.div`
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
`,te=(0,r.Ay)(Y.IMk)`
color: ${e=>e.theme.mainColor};
font-size: 27px;

`;var ie=t(17123),re=t(90997);function ne(e){var o,t,r,n,l;let{setshowSidebar:s,showSidebar:d}=e;const{restaurantName:c}=(0,y.g)(),p=(0,i.useRef)(null),u=window.location.hostname.split(".")[0],h="menugic"!==u&&"localhost"!==u&&"www"!==u?u:c,x=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[h]})),g=(0,v.wA)(),m=(null===x||void 0===x?void 0:x.activeLanguage)||"en",f=e=>{g((0,ie.y)({name:h,activeLanguage:e}))};let b={};try{b=JSON.parse((null===x||void 0===x?void 0:x.features)||"{}")}catch(Ve){}return(0,N.jsxs)(J,{children:[(0,N.jsx)(K,{src:(null===x||void 0===x?void 0:x.logoURL)&&`https://storage.googleapis.com/ecommerce-bucket-testing/${x.logoURL}`}),(0,N.jsxs)(X,{children:[(0,N.jsx)(G,{children:(0,N.jsx)(te,{onClick:()=>{s(!d)}})}),(0,N.jsxs)(G,{style:{gap:8},children:[!1!==(null===(o=b)||void 0===o?void 0:o.user_registration)&&(0,N.jsx)("div",{onClick:()=>{var e,o;return null===(e=p.current)||void 0===e||null===(o=e.toggle)||void 0===o?void 0:o.call(e)},style:{width:32,height:32,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",background:null!==x&&void 0!==x&&x.theme&&(null===(t=JSON.parse(x.theme))||void 0===t?void 0:t.languagebackground)||"#f0f0f0",color:null!==x&&void 0!==x&&x.theme&&(null===(r=JSON.parse(x.theme))||void 0===r?void 0:r.languageTextColor)||"#666",fontSize:16},children:(0,N.jsx)(a.SNd,{})}),"en&ar"===(null===x||void 0===x?void 0:x.languages)&&(0,N.jsxs)(Q,{children:[(0,N.jsx)(Z,{}),(0,N.jsx)(ee,{activeLanguage:m}),(0,N.jsx)(oe,{activeLanguage:m,language:"en",onClick:()=>f("en"),children:"En"}),(0,N.jsx)(oe,{activeLanguage:m,language:"ar",onClick:()=>f("ar"),children:"Ar"})]})]})]}),!1!==(null===(n=b)||void 0===n?void 0:n.user_registration)&&(0,N.jsx)(re.A,{ref:p,restaurantName:h,restaurantId:null===x||void 0===x?void 0:x.id,activeLanguage:m,accentColor:null!==x&&void 0!==x&&x.theme&&(null===(l=JSON.parse(x.theme))||void 0===l?void 0:l.mainColor)||"#5eabb1"})]})}var ae=t(92733);function le(e){let{activeCategory:o,setactiveCategory:t,categories:i,setSearchText:r,searchText:n,setshowSidebar:a,showSidebar:l,carouselPosition:s,setcarouselPosition:d,popupHandler:c,showMenuSlider:b,sliderImages:w,hideHeaderTop:j=!1}=e;const{restaurantName:C}=(0,y.g)(),$=window.location.hostname.split(".")[0],A="menugic"!==$&&"localhost"!==$&&"www"!==$?$:C,k=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[A].activeLanguage}));return(0,N.jsxs)(p,{children:[!j&&(0,N.jsx)(ne,{setshowSidebar:a,showSidebar:l}),b&&(0,N.jsx)(ae.A,{images:w,activeLanguage:k||"en",variant:"theme2"}),(0,N.jsx)(V,{categories:i,activeCategory:o,setactiveCategory:t,carouselPosition:s,setcarouselPosition:d}),(0,N.jsxs)(u,{children:[(0,N.jsxs)(h,{children:[(0,N.jsx)(g,{activeLanguage:k}),(0,N.jsx)(x,{type:"text",activeLanguage:k,dir:"en"==k?"ltr":"rtl",placeholder:"en"==k?"Search Category":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{r(e.target.value)},value:n})]}),(0,N.jsxs)(m,{onClick:()=>{window.history.pushState({},""),c("share")},children:["en"==k&&(0,N.jsx)(f,{}),"en"==k?"Share":"\u0646\u0634\u0631","en"!==k&&(0,N.jsx)(f,{})]})]})]})}var se=t(99891);const de=r.Ay.div`
 width: 100%;
 margin-top: 10px;
 padding-bottom: 90px;
 display: flex;
 justify-content: center;
`,ce=r.Ay.div`
 flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: ${e=>e.$noMinHeight?"0":"70vh"};
  opacity: 1;
  transition:all 0.7s ease-in-out;
`,pe=(r.Ay.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
`),ue=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`,he=r.Ay.h3`
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
`,xe=(r.Ay.button`
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
`),ge=r.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${e=>e.theme.mainColor};
  font-size: 13px;
`,me=r.Ay.div`
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
`,fe=r.Ay.button`
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
`,ve=r.Ay.div`
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
`,ye=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,be=r.Ay.div`
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
`,we=r.Ay.div`
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
`,je=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,Ce=r.Ay.h4`
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
`,$e=r.Ay.div`
  font-size: 15px;
  font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#007bff"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${e=>"ar"===e.activeLanguage?"row-reverse":"row"};
`,Ae=r.Ay.span`
  font-size: 14px;
  color: ${e=>e.theme.BoxPriceColor||e.theme.textColor||"#666"};
  text-decoration: line-through;
  opacity: 0.6;
`,ke=r.Ay.div`
  position: relative;
  width: 100%;
`,ze=r.Ay.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    @media (min-width: 1024px) {
        width: 20%;
    }
`,Se=r.Ay.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.theme.BoxColor};
    border-radius: 20px;
    position: relative;

    //cjhange loadeeerr wrappperr and this oneee colorrrr

`,Te=r.Ay.img`
width:90%;
height:100%;
object-fit: cover;
border-radius: 10px;
visibility: ${e=>e.imageLoaded?"visible":"hidden"};
/* display:${e=>e.imageLoaded?"block":"none"} */
`,_e=r.Ay.div`
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


`,Le=r.Ay.div`
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

`,Ie=r.Ay.span`
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



`,Pe=r.Ay.div`
display: flex;
flex-direction: row;
gap:5px;
`,Ee=r.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;
text-decoration:${e=>e.discounted?"line-through":"none"};


`,Ne=r.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;

`,Fe=r.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Re=r.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${Fe} 1s linear infinite; /* Apply animation */
`,De=r.Ay.div`
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

`,Oe=r.Ay.div`
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
`,Be=r.Ay.button`
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
`,Ue=r.Ay.div`
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
`;var qe=t(18907),Me=t(86001),He=t(81926),We=t(71481);const Ve=t(34304),Ye=i.forwardRef(((e,o)=>{var t,r,n,a,l;let{plate:s,setactivePlate:d,activePlate:c,index:p,showPopup:u,setSearchParams:h,searchParams:x,activeCategoryId:g,categories:m,disableDetails:f}=e;const{restaurantName:b}=(0,y.g)(),w=window.location.hostname.split(".")[0],j="menugic"!==w&&"localhost"!==w&&"www"!==w?w:b,C=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[j]})),$=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[j].activeLanguage})),A=(0,v.wA)(),[k,z]=(0,i.useState)(!1);let S={};try{S=JSON.parse((null===C||void 0===C?void 0:C.features)||"{}")}catch(Ve){}const T=Boolean(null===s||void 0===s?void 0:s.out_of_stock)||1===Number(null===s||void 0===s?void 0:s.out_of_stock),_=null===m||void 0===m?void 0:m.find((e=>e.id==g)),L=(()=>{try{var e,o,t,i;const r=null!==s&&void 0!==s&&s.form_json?JSON.parse(s.form_json):null;return r&&((null===(e=r.components)||void 0===e?void 0:e.length)>0||2===r.version&&((null===(o=r.sizes)||void 0===o?void 0:o.length)>0||(null===(t=r.addons)||void 0===t?void 0:t.length)>0||(null===(i=r.removals)||void 0===i?void 0:i.length)>0))}catch{return!1}})(),I=(0,i.useCallback)((e=>{const o=document.getElementById("cart-tab-icon");if(!o)return;const t=(null===e||void 0===e?void 0:e.currentTarget)||(null===e||void 0===e?void 0:e.target),i=t?t.getBoundingClientRect():null,r=o.getBoundingClientRect();if(!i)return;const n=(null===C||void 0===C?void 0:C.mainColor)||(null===C||void 0===C?void 0:C.maincolor)||"#a6ce39",a=i.left+i.width/2,l=i.top+i.height/2,s=r.left+r.width/2,d=r.top+r.height/2,c=document.createElement("div");c.style.cssText=`\n        position: fixed;\n        left: ${a-14}px;\n        top: ${l-14}px;\n        width: 28px; height: 28px;\n        border-radius: 50%;\n        background: ${n};\n        box-shadow: 0 4px 15px ${n}88, 0 2px 6px rgba(0,0,0,0.3);\n        z-index: 99999;\n        pointer-events: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      `,c.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>',document.body.appendChild(c);const p=document.createElement("div");p.style.cssText=`\n        position: fixed;\n        left: ${a-10}px;\n        top: ${l-10}px;\n        width: 20px; height: 20px;\n        border-radius: 50%;\n        background: ${n}55;\n        z-index: 99998;\n        pointer-events: none;\n      `,document.body.appendChild(p);const u=(a+s)/2+(a>s?60:-60),h=Math.min(l,d)-120,x=c.animate([{left:a-14+"px",top:l-14+"px",width:"28px",height:"28px",opacity:1,transform:"scale(1)"},{left:u-12+"px",top:h-12+"px",width:"24px",height:"24px",opacity:1,transform:"scale(1.1)",offset:.35},{left:s-8+"px",top:d-8+"px",width:"16px",height:"16px",opacity:.6,transform:"scale(0.6)"}],{duration:650,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"});p.animate([{left:a-10+"px",top:l-10+"px",width:"20px",height:"20px",opacity:.5},{left:u-8+"px",top:h-8+"px",width:"16px",height:"16px",opacity:.3,offset:.4},{left:s-4+"px",top:d-4+"px",width:"8px",height:"8px",opacity:0}],{duration:700,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"}),x.onfinish=()=>{c.remove(),p.remove();(o.closest("[data-tab]")||o.parentElement||o).animate([{transform:"scale(1)"},{transform:"scale(1.35)",offset:.25},{transform:"scale(0.85)",offset:.5},{transform:"scale(1.15)",offset:.75},{transform:"scale(1)"}],{duration:500,easing:"ease-out"})}}),[C]);let P,F;switch(null===C||void 0===C?void 0:C.currency){case"dollar":P="$";break;case"lb":P="L.L.";break;case"gram":P="g";break;case"kilogram":P="kg";break;default:P=""}F=0===parseFloat(null===_||void 0===_?void 0:_.discount)?parseFloat(s.discount):parseFloat(_.discount);const R=null!==(t=null===(r=s.images)||void 0===r?void 0:r.findIndex((e=>e.id===s.new_cover_id)))&&void 0!==t?t:-1,D=R>=0&&(null===(n=s.images)||void 0===n||null===(a=n[R])||void 0===a?void 0:a.url),O=null!==C&&void 0!==C&&C.logoURL?(0,E.V)(C.logoURL):null,B=D?(0,E.V)(s.images[R].url):O||"";return(0,N.jsx)(ze,{index:p,activePlate:c,className:"lazy-load",children:(0,N.jsxs)(Se,{children:[!k&&(0,N.jsx)(De,{children:(0,N.jsx)(Re,{})}),(0,N.jsxs)(_e,{onClick:()=>{if(null==c&&k&&!u){f||d(p);const e=new URLSearchParams(x);e.set("productId",null===s||void 0===s?void 0:s.id),g&&e.set("categoryId",g),h(e),window.history.pushState({},"",`?${e.toString()}`),document.body.style.overflow="hidden"}},children:[s.new&&(0,N.jsx)(Oe,{children:"en"===(null===C||void 0===C?void 0:C.activeLanguage)?"NEW !":"! \u062c\u062f\u064a\u062f"}),(0,N.jsx)(Te,{ref:o,onLoad:()=>{z(!0)},src:B,imageLoaded:k}),!1!==(null===(l=S)||void 0===l?void 0:l.cart)&&(T?(0,N.jsx)(Ue,{activeLanuguage:$,children:"en"===$?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631"}):(0,N.jsx)(Be,{onClick:e=>{var o,t;if(e&&(e.preventDefault(),e.stopPropagation()),!1===(null===(o=S)||void 0===o?void 0:o.cart)||T)return;if(!0===(null===(t=S)||void 0===t?void 0:t.quick_add_requires_options)&&L){if(null==c&&!u){f||d(p);const e=new URLSearchParams(x);e.set("productId",null===s||void 0===s?void 0:s.id),g&&e.set("categoryId",g),h(e),window.history.pushState({},"",`?${e.toString()}`),document.body.style.overflow="hidden"}return}const i=(parseFloat((null===s||void 0===s?void 0:s.en_price)||"0")||0)*(1-(0===parseFloat(null===_||void 0===_?void 0:_.discount)?parseFloat((null===s||void 0===s?void 0:s.discount)||0):parseFloat((null===_||void 0===_?void 0:_.discount)||0))/100);var r,n;(A((0,Me.bE)(j,s,1,{},i,"")),null!==C&&void 0!==C&&C.id&&null!==s&&void 0!==s&&s.id)&&(0,He.trackAddToCart)(C.id,s.id,g,1,(null===C||void 0===C||null===(r=C.branches)||void 0===r||null===(n=r[0])||void 0===n?void 0:n.id)||null);I(e)},onMouseDown:e=>e.stopPropagation(),activeLanuguage:$,children:(0,N.jsx)(We._xK,{size:12})}))]}),(0,N.jsxs)(Le,{activeLanuguage:null===C||void 0===C?void 0:C.activeLanguage,children:[(0,N.jsx)(Ie,{fontSize:null===C||void 0===C?void 0:C.font_size,children:"en"===(null===C||void 0===C?void 0:C.activeLanguage)?s.en_name||s.ar_name:s.ar_name||s.en_name}),!Ve.isEmpty(s.en_price)&&(0,N.jsxs)(Pe,{children:[(0,N.jsx)(Ee,{discounted:0!=F,children:(0,qe.T)(parseFloat(s.en_price),P)}),(0,N.jsx)(Ne,{children:0!=F&&(0,qe.T)(parseFloat(s.en_price)*(1-parseFloat(F)/100),P)})]})]})]})})}));var Je=t(99998),Xe=t(10448),Ke=t(34304),Ge=t.n(Ke);const Qe=r.Ay.div`
  
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
  animation: ${(e,o,t)=>r.i7`
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
    /* animation: ${e=>{let{x:o,y:t,width:i}=e;return((e,o,t)=>r.i7`
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

`,Ze=r.i7`
 0% {
    height:20vh;
    top:0px;
}

 100% {
    height:45vh;
    top:10px;

    }
`,eo=(r.i7`
 0% {
    height:30vh;
    top:0px;
}

 100% {
    height:70vh;
    top:10px;

    }
`,r.Ay.div`
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
`),oo=r.Ay.div`
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
`,to=r.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
`,io=r.Ay.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  flex-shrink: 0;
`,ro=r.Ay.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,no=r.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,ao=r.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${no} 1s linear infinite; /* Apply animation */
`,lo=r.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,so=r.Ay.img`
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
`,co=r.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,po=(0,r.Ay)(Xe.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,uo=(0,r.Ay)(Xe.m6W)`
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
`,ho=(0,r.Ay)(Xe.OQo)`
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
`,xo=r.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${co} 0.4s ease-in-out;
`,go=r.Ay.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
  margin-top: 10px !important;
`,mo=r.i7`
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
`,fo=r.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${mo} 1s ease-in-out;
`,vo=(r.Ay.div`
  width:90%;
  /* height: ${e=>e.CloseAnimation?"45vh":"25vh"}; */
  height: ${e=>e.squareDimension?"45vh":"60vh"};

  border-radius:40px;
  margin-top: 0px;
  display:flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${Ze} 0.4s;
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
`),yo=r.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,bo=r.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${vo} 0.8s ease-in-out;

`,wo=r.Ay.div`
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
`,jo=r.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:${e=>"en"==e.activeLanguage?"left":"right"} ;
  opacity: 1;
  margin-top: 5px;
`,Co=r.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,$o=r.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,Ao=r.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,ko=r.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,zo=r.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,So=r.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,To=r.Ay.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${So} 0.7s ease-in-out;
  background-color: ${e=>e.theme.backgroundColor};

  display: ${e=>e.CloseAnimation?"flex":"none"};
  box-shadow: 0px -3px 5px rgba(180, 180, 180, 0.1); /* Slight shadow on the top */
  padding-bottom: 10px;
  margin-top: 30px;
  @media (min-width: 1024px) {
        width: 50%;
    }
`,_o=r.Ay.button`
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
`,Lo=r.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,Io=r.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,Po=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Eo=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,No=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,Fo=r.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,Ro=r.Ay.div`
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
  animation: ${Fo} 0.4s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,Do=r.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`,Oo=r.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,Bo=r.Ay.input`
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

`,Uo=r.Ay.button`
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
`,qo=r.Ay.div`
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
`,Mo=r.Ay.button`
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
`,Ho=r.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`,Wo=r.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display: flex;
`,Vo=r.Ay.div`
display: flex;
flex-direction: row;
`,Yo=r.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,Jo=r.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,Xo=r.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,Ko=r.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,Go=r.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,Qo=r.Ay.span`
position: absolute;
left: 0;

`,Zo=r.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,et=(0,r.Ay)(n.Z0P)`
    animation:1.2s ${Zo}  linear infinite ;
    position: absolute;
`;function ot(e){let{carouselIndex:o,images:t,CloseAnimation:i,carouselSwiped:r}=e;return(0,N.jsxs)(Wo,{CloseAnimation:i,children:[(0,N.jsxs)(Vo,{children:[(0,N.jsx)(Yo,{carouselIndex:o,children:(0,N.jsx)(Jo,{})}),t.map((e=>(0,N.jsx)(Xo,{children:(0,N.jsx)(Ko,{})})))]}),!r&&(0,N.jsxs)(Go,{children:[(0,N.jsx)(Qo,{children:"Swipe"}),(0,N.jsx)(et,{})]})]})}r.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,r.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const tt=r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,it=(r.Ay.label`
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
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(Ge().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`),rt=r.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,nt=r.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,at=r.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let o=e.theme.formColor;if(Ge().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.1)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.1)`)):o}};
  font-size:10px;

`,lt=r.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,st=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${e=>e.theme.formColor};

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);var dt=t(41235);function ct(e){let{component:o,formData:t,handleChange:r,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(t[o.key]||[]);return(0,N.jsxs)(it,{index:n,children:[(0,N.jsx)(tt,{children:o.label}),o.values.map((e=>(0,N.jsxs)(nt,{children:[s.some((o=>o===e.label))?(0,N.jsx)(lt,{onClick:()=>{(e=>{let t=s.filter((o=>o!==e.label));d(t),r(o.key,t)})(e)},children:(0,N.jsx)(dt.RXm,{size:"15px"})}):(0,N.jsx)(at,{onClick:()=>{(e=>{d([...s,e.label]),r(o.key,[...s,e.label])})(e)},children:(0,N.jsx)(We.OiG,{})}),(0,N.jsx)(rt,{children:e.label})]}))),(c=a,c in l?(0,N.jsx)(st,{children:"This field is required"}):null)]});var c}const pt=r.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(Ge().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`,ut=r.Ay.div`
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
`,ht=r.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,xt=r.Ay.ul`
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

`,gt=r.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,mt=r.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,ft=r.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,vt=r.Ay.div`
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
`,yt=(r.Ay.label`
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

`);function bt(e){var o;let{component:t,formData:r,handleChange:n,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;console.log(s),console.log(d);const[c,p]=(0,i.useState)(!1),[u,h]=(0,i.useState)((null===(o=r[t.key])||void 0===o?void 0:o.value)||""),x=(0,i.useRef)(null),g=e=>{h(e.label),p(!1),n(t.key,e)},m=e=>{x.current&&!x.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,N.jsxs)(pt,{ref:x,index:l,children:[(0,N.jsx)(tt,{children:t.label}),t.data.values.length>8?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(ut,{onClick:()=>p((e=>!e)),children:[u||a,(0,N.jsx)(ht,{className:c?"up":"",children:"\u25bc"})]}),(0,N.jsx)(xt,{isOpen:c,children:t.data.values.map(((e,o)=>(0,N.jsx)(gt,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},o)))})]}):(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(mt,{children:t.data.values.map(((e,o)=>(0,N.jsx)(ft,{children:(0,N.jsx)(vt,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,N.jsx)(yt,{children:"This field is required"}):null)]});var f}const wt=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(Ge().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`,jt=r.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,Ct=r.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,$t=r.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,At=r.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,kt=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function zt(e){let{component:o,formData:t,handleChange:r,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(t[o.key]||"");return(0,N.jsxs)(wt,{index:n,children:[(0,N.jsx)(tt,{children:o.label}),o.values.map((e=>(0,N.jsxs)(Ct,{children:[(0,N.jsx)($t,{onClick:()=>{(e=>{d(e),r(o.key,e)})(e)},children:(0,N.jsx)(At,{selected:s.label==e.label})}),(0,N.jsx)(jt,{children:e.label})]}))),(c=a,c in l?(0,N.jsx)(kt,{children:"This field is required"}):null)]});var c}function St(e){let{formSchema:o,onPriceChange:t,basePrice:r,formData:n,setFormData:a,finalDiscount:l,formErrors:s}=e;(0,i.useEffect)((()=>{c(n)}),[n]);const d=(e,o)=>{a((t=>({...t,[e]:o})))},c=e=>{let i=parseFloat(r)||0,n=0;null===o||void 0===o||o.components.forEach((o=>{if(e[o.key])if("selectboxes"===o.type&&o.values)e[o.key].forEach((e=>{const t=o.values.find((o=>o.label===e)),i=!isNaN(Number(t.value));t&&t.value&&i&&(t.value.startsWith("+")?n+=parseFloat(t.value.slice(1)):t.value.startsWith("-")&&(n-=parseFloat(t.value.slice(1))))}));else if("select"===o.type&&o.data&&o.data.values){const t=o.data.values.find((t=>{var i;return t.value===(null===(i=e[o.key])||void 0===i?void 0:i.value)})),r=!isNaN(Number(t.value));t&&r&&(t.value.startsWith("+")?n+=parseFloat(t.value.slice(1)):t.value.startsWith("-")?n-=parseFloat(t.value.slice(1)):i=parseFloat(t.value))}else if("radio"===o.type&&o.values){const t=o.values.find((t=>{var i;return t.value===(null===(i=e[o.key])||void 0===i?void 0:i.value)})),r=!isNaN(Number(t.value));t&&r&&(t.value.startsWith("+")?n+=parseFloat(t.value.slice(1)):t.value.startsWith("-")?n-=parseFloat(t.value.slice(1)):i=parseFloat(t.value))}}));const a=i+n,l=a%1!==0?a.toFixed(2):a.toFixed(0);t(l)};return(0,N.jsx)("form",{style:{width:"100%"},children:null===o||void 0===o?void 0:o.components.map(((e,o)=>((e,o)=>{switch(e.type){case"selectboxes":return console.log(e.key),(0,N.jsx)(ct,{component:e,formData:n,handleChange:d,index:o,componentKey:e.key,formErrors:s});case"select":return console.log(e.key),(0,N.jsx)(bt,{component:e,formData:n,handleChange:d,index:o,componentKey:e.key,formErrors:s});case"radio":return(0,N.jsx)(zt,{component:e,formData:n,handleChange:d,index:o,componentKey:e.key,formErrors:s});default:return null}})(e,o)))})}var Tt=t(42770),_t=t(73556),Lt=(t(20965),t(16104)),It=t(88620),Pt=t(57526);t(44014),t(70045),t(5084);const Et=t(34304);function Nt(e){var o,t,r,n,l,s,d,c,p,u,h,x,g,m,f;let{activePlate:w,setactivePlate:j,menu:C,plates:$,productPositions:A,categories:k,activeCategoryId:z,setSearchParams:S,searchParams:T}=e;const{restaurantName:_}=(0,y.g)(),L=window.location.hostname.split(".")[0],I="menugic"!==L&&"localhost"!==L&&"www"!==L?L:_,P=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[I]})),F=k.find((e=>e.id==z)),{response:R}=(0,Lt.$)({productId:null===(o=$[w])||void 0===o?void 0:o.id});(0,i.useEffect)((()=>{var e;let o=null;var t,i;Et.isEmpty(null===(e=$[w])||void 0===e?void 0:e.form_json)||(o=Et.isEmpty(JSON.parse(null===(t=$[w])||void 0===t?void 0:t.form_json))?null===F||void 0===F?void 0:F.form_json:null===(i=$[w])||void 0===i?void 0:i.form_json);if(Et.isEmpty(o))O({});else{var r;const e=JSON.parse(o);if(O(e),2===(null===e||void 0===e?void 0:e.version)&&(null===e||void 0===e||null===(r=e.sizes)||void 0===r?void 0:r.length)>0){var n;const o=parseFloat(null===(n=$[w])||void 0===n?void 0:n.en_price)||0,t=e.sizes.find((e=>"absolute"===e.priceMode&&Number(e.priceModifier)===o));U((()=>({...(0,_t.KE)(),sizeId:t?t.id:e.sizes[0].id})))}}}),[P.activeLanguage]);const[D,O]=(0,i.useState)({}),[B,U]=(0,i.useState)({}),[q,M]=(0,i.useState)({}),H=(0,v.wA)(),[W,V]=(0,i.useState)(1),[Y,J]=(0,i.useState)(!1),X=(0,i.useRef)(null),[K,G]=(0,i.useState)(!1),[Q,Z]=(0,i.useState)(1),[ee,oe]=(0,i.useState)({x:0,y:0}),[te,ie]=(0,i.useState)(!1),re=(0,i.useRef)(null),ne=(0,i.useRef)(null),ae=(0,i.useRef)(0),le=parseFloat(null===F||void 0===F?void 0:F.discount)||0,se=parseFloat(null===(t=$[w])||void 0===t?void 0:t.discount)||0,de=0===le?se:le,ce=(null===(r=$[w])||void 0===r?void 0:r.en_price)||"0",pe=parseFloat(ce)||0,ue=pe%1!==0?pe.toFixed(2):pe.toFixed(0),[he,xe]=(0,i.useState)(pe),[ge,me]=(0,i.useState)(""),fe=e=>{xe(parseFloat(e)||0)},[ve,ye]=(0,i.useState)(!0),[be,we]=(0,i.useState)(0),je=()=>{setTimeout((()=>{j(null),document.body.style.overflow="auto"}),700),ye(!1),T.delete("productId"),S(T)},[Ce,$e]=(0,i.useState)(!1),Ae=()=>{J(!0),we(be+1)},ke=()=>{J(!0),we(be-1)},ze=(0,i.useRef)(null),[Se,Te]=(0,i.useState)(null),_e=()=>{Z(1),oe({x:0,y:0}),G(!0)};(0,i.useEffect)((()=>{const e=()=>{je()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const Le=2===(null===D||void 0===D?void 0:D.version)&&Array.isArray(null===D||void 0===D?void 0:D.sizes);const Ie=null!==P&&void 0!==P&&P.logoURL?(0,E.V)(P.logoURL):null;let Pe=[...null!==(n=null===(l=$[w])||void 0===l?void 0:l.images)&&void 0!==n?n:[]];0===Pe.length&&Ie&&(Pe=[{id:"fallback-logo",url:P.logoURL,isFallback:!0}]);const Ee=Pe.findIndex((e=>{var o;return e.id===(null===(o=$[w])||void 0===o?void 0:o.new_cover_id)}));if(Ee>0){const[e]=Pe.splice(Ee,1);Pe.unshift(e)}const[Ne,Fe]=(0,i.useState)({}),Re=e=>{Fe((o=>({...o,[e]:!0})))},De="en"===(null===P||void 0===P?void 0:P.activeLanguage)?null===(s=$[w])||void 0===s?void 0:s.en_description:null===(d=$[w])||void 0===d?void 0:d.ar_description;let Oe;switch(null===P||void 0===P?void 0:P.currency){case"dollar":Oe="$";break;case"lb":Oe="L.L.";break;case"gram":Oe="g";break;case"kilogram":Oe="kg";break;default:Oe=""}let Be=JSON.parse(P.features);const Ue=Boolean(null===(c=$[w])||void 0===c?void 0:c.out_of_stock)||1===Number(null===(p=$[w])||void 0===p?void 0:p.out_of_stock),He=(null===P||void 0===P?void 0:P.product_details_carousel_style)||"normal";return(0,Je.createPortal)((0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(Qe,{CloseAnimation:ve,children:[(0,N.jsx)(go,{CloseAnimation:ve,children:(0,N.jsx)(fo,{children:"en"==P.activeLanguage?null===C||void 0===C?void 0:C.en_category:null===C||void 0===C?void 0:C.ar_category})}),(0,N.jsx)(eo,{squareDimension:null===(u=$[w])||void 0===u?void 0:u.square_dimension,CloseAnimation:ve,isNormalCarousel:"normal"===He,children:1===Pe.length?(0,N.jsx)(to,{carouselIndex:0,children:(0,N.jsx)(io,{children:(0,N.jsxs)(ro,{children:[!Ne[0]&&(0,N.jsx)(lo,{children:(0,N.jsx)(ao,{})}),(0,N.jsx)(so,{src:Pe[0].url?(0,E.V)(Pe[0].url):Ie||"",onLoad:()=>Re(0),onError:e=>{Ie&&e.target.src!==Ie&&(e.target.src=Ie)},CloseAnimation:ve,Loaded:Ne[0],alt:"Image 0"}),(0,N.jsx)(Uo,{onClick:_e,children:(0,N.jsx)(b.gff,{})})]})})}):"normal"===He?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(uo,{CloseAnimation:ve,onClick:()=>{J(!0),0!==be&&ke()}}),(0,N.jsx)(ho,{CloseAnimation:ve,onClick:()=>{J(!0),Pe.length>be+1&&Ae()}}),(0,N.jsx)(to,{carouselIndex:be,ref:ze,onTouchStart:e=>{Te(e.touches[0].clientX)},onTouchMove:e=>{if(Se){const o=e.touches[0].clientX-Se;o>5?0!==be&&ke():o<-5&&Pe.length>be+1&&Ae(),Te(null)}},children:Pe.map(((e,o)=>(0,N.jsx)(io,{children:(0,N.jsxs)(ro,{children:[!Ne[o]&&(0,N.jsx)(lo,{children:(0,N.jsx)(ao,{})}),(0,N.jsx)(so,{src:Ne[o]||o===be?e.url?(0,E.V)(e.url):Ie||"":"",onLoad:()=>Re(o),onError:e=>{Ie&&e.target.src!==Ie&&(e.target.src=Ie)},CloseAnimation:ve,Loaded:Ne[o],alt:`Image ${o}`}),be===o&&(0,N.jsx)(Uo,{onClick:_e,children:(0,N.jsx)(b.gff,{})})]})},e.id||o)))})]}):"effect-cards"===He?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(uo,{CloseAnimation:ve,onClick:()=>X.current&&X.current.slidePrev()}),(0,N.jsx)(oo,{children:(0,N.jsx)(It.RC,{modules:[Pt.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{X.current=e},onSlideChange:e=>{we(e.realIndex),J(!0)},children:Pe.map(((e,o)=>(0,N.jsx)(It.qr,{children:(0,N.jsxs)(ro,{children:[!Ne[o]&&(0,N.jsx)(lo,{children:(0,N.jsx)(ao,{})}),(0,N.jsx)(so,{src:Ne[o]||o===be?e.url?(0,E.V)(e.url):Ie||"":"",onLoad:()=>Re(o),onError:e=>{Ie&&e.target.src!==Ie&&(e.target.src=Ie)},CloseAnimation:ve,Loaded:Ne[o],$cardSlide:!0,alt:`Image ${o}`}),be===o&&(0,N.jsx)(Uo,{onClick:_e,children:(0,N.jsx)(b.gff,{})})]})},e.id||o)))},null===(h=$[w])||void 0===h?void 0:h.id)}),(0,N.jsx)(ho,{CloseAnimation:ve,onClick:()=>X.current&&X.current.slideNext()})]}):(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(oo,{children:(0,N.jsx)(It.RC,{onSwiper:e=>{X.current=e},onSlideChange:e=>{we(e.realIndex),J(!0)},modules:[Pt.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:Pe.map(((e,o)=>(0,N.jsx)(It.qr,{children:(0,N.jsxs)(ro,{children:[!Ne[o]&&(0,N.jsx)(lo,{children:(0,N.jsx)(ao,{})}),(0,N.jsx)(so,{src:Ne[o]||o===be?e.url?(0,E.V)(e.url):Ie||"":"",onLoad:()=>Re(o),onError:e=>{Ie&&e.target.src!==Ie&&(e.target.src=Ie)},CloseAnimation:ve,Loaded:Ne[o],$cardSlide:!0,alt:`Image ${o}`}),be===o&&(0,N.jsx)(Uo,{onClick:_e,children:(0,N.jsx)(b.gff,{})})]})},e.id||o)))},null===(x=$[w])||void 0===x?void 0:x.id)})})}),1!==Pe.length&&(0,N.jsx)(ot,{images:Pe,carouselIndex:be,CloseAnimation:ve,carouselSwiped:Y}),(0,N.jsx)(yo,{children:(0,N.jsx)(bo,{children:(0,N.jsxs)(wo,{CloseAnimation:ve,activeLanguage:P.activeLanguage,children:[(0,N.jsx)(jo,{activeLanguage:P.activeLanguage,children:"en"==P.activeLanguage?null===(g=$[w])||void 0===g?void 0:g.en_name:null===(m=$[w])||void 0===m?void 0:m.ar_name}),!Et.isEmpty(null===(f=$[w])||void 0===f?void 0:f.en_price)&&(0,N.jsxs)(Ao,{children:[(0,N.jsx)(ko,{activeLanguage:P.activeLanguage,discounted:0!=de,children:(0,qe.T)(he,Oe)}),0!=de&&(0,N.jsx)(zo,{activeLanguage:P.activeLanguage,children:(0,qe.T)(he*(1-parseFloat(de)/100),Oe)})]}),!Et.isEmpty(De)&&(0,N.jsx)(Co,{activeLanguage:P.activeLanguage,dangerouslySetInnerHTML:{__html:De}}),Ue&&(0,N.jsx)($o,{children:"en"===P.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),Le&&(0,N.jsx)(Tt.A,{options:D,formData:B,setFormData:U,formErrors:q,activeLanguage:P.activeLanguage,basePrice:ue,onPriceChange:fe}),!Le&&(null===D||void 0===D?void 0:D.components)&&(0,N.jsx)(St,{formSchema:D,onPriceChange:fe,formData:B,setFormData:U,basePrice:ue,formErrors:q}),(0,N.jsxs)(Do,{activeLanguage:P.activeLanguage,children:[(0,N.jsx)(Oo,{children:"en"==P.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,N.jsx)(Bo,{activeLanguage:P.activeLanguage,onChange:e=>me(e.target.value),placeholder:"en"==P.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(null===Be||void 0===Be?void 0:Be.cart)&&!Ue&&(0,N.jsxs)(To,{CloseAnimation:ve,children:[(0,N.jsxs)(Io,{CloseAnimation:ve,children:[(0,N.jsx)(Po,{onClick:()=>{V(W+1)},children:"+"}),(0,N.jsx)(No,{children:W}),(0,N.jsx)(Eo,{onClick:()=>{W>1&&V(W-1)},children:"-"})]}),(0,N.jsxs)(_o,{onClick:()=>{if(Le){var e;const o={};if((null===(e=D.sizes)||void 0===e?void 0:e.length)>0&&(null===B||void 0===B||!B.sizeId)&&(o.size="Please select a size."),Object.keys(o).length>0)return void M(o)}else if("{}"!==JSON.stringify(D)){const e=function(e,o){const t={},i=function(e){return e.components.filter((e=>{var o;return null===(o=e.validate)||void 0===o?void 0:o.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in o&&0!==(null===(i=o[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(o[e])||(t[e]="This field is required.")})),t}(D,B);if(Object.keys(e).length>0)return void M(e)}let o=he*(1-parseFloat(de)/100);setTimeout((()=>{j(null),document.body.style.overflow="auto"}),800),H((0,Me.bE)(I,$[w],W,B,o,ge)),ye(!1),V(1),M({})},children:["en"==P.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",he>0&&(0,N.jsx)(Lo,{children:(0,qe.T)(W*(he*(1-de/100)),Oe)})]})]})]}),(0,N.jsx)(xo,{onClick:je,CloseAnimation:ve,children:(0,N.jsx)(po,{})}),(0,N.jsx)(Ro,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),$e(!0),setTimeout((()=>{$e(!1)}),4e3)},CloseAnimation:ve,children:Ce?(0,N.jsx)(dt.RXm,{}):(0,N.jsx)(We.zU_,{})}),K&&(0,N.jsxs)(qo,{onTouchStart:e=>{if(2===e.touches.length){const o=e.touches[0].clientX-e.touches[1].clientX,t=e.touches[0].clientY-e.touches[1].clientY;ne.current=Math.hypot(o,t)}else if(1===e.touches.length){const o=Date.now();o-ae.current<300&&(Z((e=>e>1?1:2.5)),oe({x:0,y:0})),ae.current=o,re.current={x:e.touches[0].clientX,y:e.touches[0].clientY},ie(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const o=e.touches[0].clientX-e.touches[1].clientX,t=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(o,t);if(ne.current){const e=i/ne.current;Z((o=>Math.min(Math.max(o*e,1),5)))}ne.current=i}else if(1===e.touches.length&&te&&Q>1){const o=e.touches[0].clientX-re.current.x,t=e.touches[0].clientY-re.current.y;oe((e=>({x:e.x+o,y:e.y+t}))),re.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{ne.current=null,ie(!1)},children:[(0,N.jsx)(Mo,{onClick:()=>G(!1),children:(0,N.jsx)(a.$8F,{})}),(0,N.jsx)(Ho,{src:(()=>{const e=Pe[be];return e?e.url?(0,E.V)(e.url):Ie||"":""})(),style:{transform:`scale(${Q}) translate(${ee.x/Q}px, ${ee.y/Q}px)`},alt:"Zoom"})]})]}),document.body)}var Ft=t(9328),Rt=t(32415),Dt=t(73422);const Ot=t(34304);function Bt(e){var o,t,r;let{menu:n,activeCategory:a,showPopup:l,searchText:s,carouselPosition:d,setcarouselPosition:c,setactiveCategory:p,categories:u}=e;const[h,x]=(0,i.useState)(null),[g,m]=(0,se.ok)(),{restaurantName:f}=(0,y.g)(),b=window.location.hostname.split(".")[0],w="menugic"!==b&&"localhost"!==b&&"www"!==b?b:f,j=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[w].activeLanguage})),C=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[w]})),$=(0,v.wA)(),[A,k]=(0,i.useState)([]),[z,S]=(0,i.useState)([]),T=(0,i.useRef)(),_=(0,i.useRef)(),L="all-items"===a,I=(null===C||void 0===C?void 0:C.all_items_style)||"grid",P=a&&!L?String(a):null,{data:F,fetchNextPage:R,hasNextPage:D,isFetchingNextPage:O}=(0,Ft.w)(P),{data:B,fetchNextPage:U,hasNextPage:q,isFetchingNextPage:M}=(0,Rt.u)(L?null===C||void 0===C?void 0:C.id:null),H=(null===B||void 0===B||null===(o=B.pages)||void 0===o?void 0:o.flat())||[],W=()=>{const e=null===z||void 0===z?void 0:z.map((e=>{if(e.current){var o;const t=null===(o=e.current)||void 0===o?void 0:o.getBoundingClientRect();return{x:t.left,y:t.top,width:t.width}}return null}));k(e)};(0,i.useEffect)((()=>{g.get("productId")&&x(null)}),[g]),(0,i.useEffect)((()=>{W()}),[z]),(0,i.useEffect)((()=>{var e;if(n&&null!==a&&(null===F||void 0===F||null===(e=F.pages)||void 0===e?void 0:e.flat().length)>0){var o,t;const e=null===F||void 0===F||null===(o=F.pages)||void 0===o||null===(t=o.flat())||void 0===t?void 0:t.filter((e=>(e["en"===j?"en_name":"ar_name"]||e.en_name||e.ar_name||"").toLowerCase().includes(s.toLowerCase()))).map((()=>i.createRef()));S(e)}}),[n,a,s,F]),(0,i.useEffect)((()=>{const e=()=>{W()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[z]),(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&D&&!O&&R()}),{threshold:.1});return T.current&&e.observe(T.current),()=>{T.current&&e.unobserve(T.current)}}),[D,O,R]),(0,i.useEffect)((()=>{if(!L)return;const e=new IntersectionObserver((e=>{e[0].isIntersecting&&q&&!M&&U()}),{threshold:.2});return _.current&&e.observe(_.current),()=>{_.current&&e.unobserve(_.current)}}),[U,q,L,M]);const V=(null===F||void 0===F||null===(t=F.pages)||void 0===t||null===(r=t.flat())||void 0===r?void 0:r.filter((e=>!(Boolean(null===e||void 0===e?void 0:e.hide)||1===Number(null===e||void 0===e?void 0:e.hide))&&(e["en"===j?"en_name":"ar_name"]||e.en_name||e.ar_name||"").toLowerCase().includes(s.toLowerCase()))))||[],Y=i.useMemo((()=>{if(!L)return[];return(u||[]).filter((e=>!e.isAllItems)).sort(((e,o)=>(o.priority||0)-(e.priority||0)||(e.id||0)-(o.id||0))).map((e=>{const o=H.filter((o=>{if(Boolean(null===o||void 0===o?void 0:o.hide)||1===Number(null===o||void 0===o?void 0:o.hide))return!1;if(o.category_id!=e.id)return!1;const t=o["en"===j?"en_name":"ar_name"]||"";return!s||function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase().includes(s.toLowerCase())}(t)})).sort(((e,o)=>(o.priority||0)-(e.priority||0)||(e.id||0)-(o.id||0)));return{category:e,items:o}})).filter((e=>e.items.length>0))}),[j,H,u,L,s]);console.log(V);const[J,X]=(0,i.useState)(d),[K,G]=(0,i.useState)(!1),[Q,Z]=(0,i.useState)(u.length<4?3:4);(0,i.useRef)(0),(0,i.useRef)(0);return(0,i.useEffect)((()=>{X(u.findIndex((e=>e.id==a)))}),[a]),(0,i.useEffect)((()=>{L&&x(null)}),[L]),(0,N.jsx)(de,{activeCategory:a,children:L?(0,N.jsxs)(pe,{children:[Y.map((e=>(0,N.jsxs)(ue,{children:[(0,N.jsx)(he,{activeLanguage:j,children:"en"===j?e.category.en_category:e.category.ar_category}),"list"===I?(0,N.jsx)(ye,{children:e.items.map(((e,o)=>{var t,i,r,n;const a=u.find((o=>o.id==e.category_id));let l;l=a&&0!==parseFloat(a.discount||0)?parseFloat(a.discount||0):parseFloat(e.discount||0);const s=0!==l?parseFloat(e.en_price)*(1-parseFloat(l)/100):parseFloat(e.en_price);let d;switch(null===C||void 0===C?void 0:C.currency){case"dollar":d="$";break;case"lb":d="L.L.";break;case"gram":d="g";break;case"kilogram":d="kg";break;default:d=""}const c=null!==(t=null===(i=e.images)||void 0===i?void 0:i.findIndex((o=>o.id==e.new_cover_id)))&&void 0!==t?t:0,p=null===(r=e.images)||void 0===r||null===(n=r[c])||void 0===n?void 0:n.url,h=JSON.parse((null===C||void 0===C?void 0:C.features)||"{}"),x=Boolean(null===e||void 0===e?void 0:e.out_of_stock)||1===Number(null===e||void 0===e?void 0:e.out_of_stock),f=!Ot.isEmpty(null===e||void 0===e?void 0:e.form_json)&&!Ot.isEmpty(JSON.parse((null===e||void 0===e?void 0:e.form_json)||"{}")),v=!Ot.isEmpty(null===a||void 0===a?void 0:a.form_json)&&!Ot.isEmpty(JSON.parse((null===a||void 0===a?void 0:a.form_json)||"{}")),y=f||v,b=o=>{if(o.preventDefault(),o.stopPropagation(),null===h||void 0===h||!h.cart||x)return;if(y){const o=new URLSearchParams(g);return o.set("productId",e.id),o.set("categoryId","all-items"),m(o),window.history.pushState({},"",`?${o.toString()}`),void(document.body.style.overflow="hidden")}const t=parseFloat((null===e||void 0===e?void 0:e.en_price)||"0")*(1-parseFloat(l)/100);$((0,Me.bE)(w,e,1,{},t,"")),Dt.oR.success("en"===j?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629")};return(0,N.jsxs)(ke,{children:[(0,N.jsxs)(be,{onClick:()=>{const o=new URLSearchParams(g);o.set("productId",e.id),o.set("categoryId","all-items"),m(o),window.history.pushState({},"",`?${o.toString()}`),document.body.style.overflow="hidden"},style:{cursor:"pointer"},children:[(0,N.jsx)(we,{children:p&&(0,N.jsx)("img",{src:(0,E.V)(p),alt:"en"===j?e.en_name:e.ar_name})}),(0,N.jsxs)(je,{activeLanguage:j,children:[(0,N.jsx)(Ce,{children:"en"===j?e.en_name:e.ar_name}),e.en_price&&(0,N.jsxs)($e,{activeLanguage:j,children:[0!==l&&(0,N.jsx)(Ae,{children:(0,qe.T)(parseFloat(e.en_price),d)}),(0,N.jsx)("span",{children:(0,qe.T)(s,d)})]})]})]}),(null===h||void 0===h?void 0:h.cart)&&(x?(0,N.jsx)(ve,{activeLanguage:j,children:"en"===j?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,N.jsx)(fe,{type:"button",onClick:b,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),b(e)},activeLanguage:j,title:"en"===j?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,N.jsx)(We._xK,{size:12})}))]},e.id)}))}):(0,N.jsx)(ce,{$noMinHeight:!0,children:e.items.map(((o,t)=>(0,N.jsx)(Ye,{index:t,plate:o,activePlate:null,setactivePlate:x,showPopup:l,setSearchParams:m,searchParams:g,activeCategoryId:e.category.id,categories:u,disableDetails:!1},o.id)))})]},e.category.id))),q&&(0,N.jsx)("div",{ref:_,style:{height:"40px"}}),M&&(0,N.jsx)(xe,{children:(0,N.jsxs)(ge,{children:[(0,N.jsx)(me,{}),"en"===j?"Loading more...":"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f..."]})})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(ce,{activePlate:h,children:[null===n||void 0===n?void 0:n.map(((e,o)=>{if(a==e.id)return(0,N.jsx)(N.Fragment,{children:V.map(((e,o)=>(0,N.jsx)(Ye,{index:o,plate:e,activePlate:h,setactivePlate:x,ref:z[o],showPopup:l,setSearchParams:m,searchParams:g,activeCategoryId:a,categories:u})))})})),(0,N.jsx)("div",{ref:T,style:{height:"20px"}})]}),null!==h&&!g.get("productId")&&(0,N.jsx)(Nt,{menu:null===n||void 0===n?void 0:n.find((e=>e.id===a)),activePlate:h,setactivePlate:x,plates:V,productPositions:A,activeCategoryId:a,categories:u,setSearchParams:m,searchParams:g})]})})}var Ut=t(76143);const qt=r.Ay.div`
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
`,Mt=(r.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`,r.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`),Ht=r.Ay.span`
width: 90%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 10vh;
`,Wt=r.Ay.div`
  margin-top: 30px;
width: 90%;
  display: flex;
  flex-direction: column;
`,Vt=(r.Ay.div`
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
`,(0,r.Ay)(Xe.IW4)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,r.Ay)(b.gwi)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,r.Ay)(Xe.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`),Yt=r.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
font-weight: bold;

`,Jt=r.Ay.div`
width: 90%;
margin-top: 10px;

`,Xt=r.Ay.div`
margin-top: 10px;
display: flex;
flex-direction: row;
width: 90%;
align-items: center;
gap:10px;
`,Kt=r.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,Gt=(r.Ay.a`
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
`),Qt=r.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,Zt=(0,r.Ay)(We.ok6)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};
`,ei=((0,r.Ay)(Xe._8j)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};


`,(0,r.Ay)(We.ao$)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`),oi=(0,r.Ay)(Ut.mk3)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`,ti=r.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,ii=r.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,ri=(0,r.Ay)(b.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`,ni=r.Ay.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 90%;
height: 50px;
gap:25px;
margin-top: 30px;
`,ai=r.Ay.button`
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
`,li=r.i7`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,si=r.Ay.div`
position: absolute;
width:10%;
height: 50%;
background-color:${e=>"Call"==e.activeButton?e.theme.mainColor:e.theme.popupbackgroundColor} ;
 left: 0;
 z-index: 5;

 `,di=r.Ay.div`
position: absolute;
width:1px;
height: 100%;
background-color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 right: 0;
 animation: ${li} 0.5s ease-in-out infinite; /* Infinite animation */

 `,ci=r.i7`
  0% {
opacity: 0;
left: -10%;
  }
  100% {
opacity: 1;
left: 16%;

  }

`,pi=r.Ay.span`
position: absolute;
 left: 16%;
 color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 animation: ${ci} 0.5s ease-in-out;
 z-index: 4;

 `,ui=r.i7`
  0% {
    opacity: 0;
    rotate: calc(180deg);
  }
  1000% {
    opacity: 1;
    rotate: calc(0deg);

  }
 
`,hi=(0,r.Ay)(Xe.pte)`
color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
font-size: 15px;
position: absolute;
right: 5%;
animation: ${ui} 0.7s ease-in-out;

`,xi=r.i7`
  0% {
    max-height: 0px;
  }
  1000% {
    max-height: 300px;


  }
 
`,gi=r.Ay.ul`
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
  animation: ${xi} 1s ease-in-out;
  overflow: hidden;

`,mi=r.Ay.li`
  cursor: pointer;
  transition: background 0.2s;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;

`,fi=r.Ay.button`
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
`,vi=r.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 18px;
font-weight: bold;

`,yi=r.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`,bi=r.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
`,wi=r.Ay.div`
  display: flex;
  flex-direction: row;
  width: 15px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${e=>e.theme.mainColor};
`,ji=(r.Ay.div`
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

 `),Ci=r.Ay.div`
 width: 15px;
 height: 45px;
 top: 25px;
 position: absolute;
 left: 0;
 display: flex;
 justify-content: center;
 `,$i=r.Ay.div`
 width: 2px;
 height: 100%;
 background-color: ${e=>e.theme.popupTextColor};
 opacity: 0.5;
 `;var Ai=t(72599),ki=t(67059);function zi(e){var o,t,r,a;let{restaurant:l,showPopup:s,popupHandler:d}=e;const{restaurantName:c}=(0,y.g)(),p=window.location.hostname.split(".")[0],u="menugic"!==p&&"localhost"!==p&&"www"!==p?p:c,h=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[u].activeLanguage})),[x,g]=(0,i.useState)("");return(0,i.useEffect)((()=>{const e=()=>{d(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,N.jsxs)(qt,{showPopup:s,children:[(0,N.jsx)(Vt,{onClick:()=>{d(null)}}),(0,N.jsx)(Ht,{children:(0,N.jsx)(Mt,{children:(m=null===l||void 0===l?void 0:l.name,m.replace(/\b\w/g,(function(e){return e.toUpperCase()})))})}),(0,N.jsxs)(ni,{children:[(0,N.jsx)(ai,{activeButton:x,onClick:()=>{g("Call"==x?"":"Call")},children:"Call"!==x?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Ai._Xz,{size:"25px"}),"en"==h?"Call Now":"\u0627\u062a\u0635\u0644 \u0627\u0644\u0627\u0646"]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(gi,{activeButton:x,children:null===l||void 0===l||null===(o=l.branches)||void 0===o?void 0:o.flatMap((e=>e.phone_number.split(" ").map(((o,t)=>(0,N.jsx)(mi,{children:(0,N.jsxs)("a",{href:`tel:${o}`,style:{textDecoration:"none",color:"inherit"},children:[o,"  ",e.location&&(0,N.jsxs)("span",{children:["- ",e.name," "]})]})})))))}),(0,N.jsx)(si,{activeButton:x,children:(0,N.jsx)(di,{activeButton:x})}),(0,N.jsx)(pi,{activeButton:x,children:"en"==h?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,N.jsx)(hi,{activeButton:x})]})}),(0,N.jsx)(fi,{activeButton:x,onClick:()=>{g("Message"==x?"":"Message")},children:"Message"!==x?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(We.EcP,{size:"25px"}),"en"==h?"Message":"\u0631\u0633\u0627\u0644\u0629","            "]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(gi,{activeButton:x,children:null===l||void 0===l||null===(t=l.branches)||void 0===t?void 0:t.map((e=>(0,N.jsx)(mi,{children:(0,N.jsxs)("a",{href:`https://wa.me/${(0,ki.J)(null===e||void 0===e?void 0:e.whatsapp_number,null===l||void 0===l?void 0:l.country_code)}`,style:{textDecoration:"none",color:"inherit"},children:[null===e||void 0===e?void 0:e.whatsapp_number,"-",null===e||void 0===e?void 0:e.name]})})))}),(0,N.jsx)(si,{activeButton:x,children:(0,N.jsx)(di,{activeButton:x})}),(0,N.jsx)(pi,{activeButton:x,children:"en"==h?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,N.jsx)(hi,{activeButton:x})]})})]}),(0,N.jsxs)(Wt,{children:[(null===l||void 0===l||null===(r=l.branches)||void 0===r?void 0:r.name)&&(0,N.jsx)(vi,{children:"Branches"}),(0,N.jsx)(yi,{children:null===l||void 0===l||null===(a=l.branches)||void 0===a?void 0:a.map(((e,o)=>{var t;return e.name&&(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(bi,{children:[o!==(null===l||void 0===l||null===(t=l.branches)||void 0===t?void 0:t.length)-1&&(0,N.jsx)(Ci,{index:o,children:(0,N.jsx)($i,{})}),(0,N.jsx)(wi,{children:(0,N.jsx)(n.sIY,{})}),(0,N.jsx)(ji,{href:`https://${null===e||void 0===e?void 0:e.mapLink}`,children:e.location})]})})}))})]}),(0,N.jsx)(Jt,{children:(0,N.jsx)(Yt,{children:"en"==h?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"})}),(0,N.jsxs)(Xt,{children:[l.socialMedia.find((e=>"Instagram"==e.platform))&&(0,N.jsx)(Kt,{href:`https://${l.socialMedia.find((e=>"Instagram"==e.platform)).link}`,children:(0,N.jsx)(ei,{})}),l.socialMedia.find((e=>"Facebook"==e.platform))&&(0,N.jsx)(Qt,{href:`https://${l.socialMedia.find((e=>"Facebook"==e.platform)).link}`,children:(0,N.jsx)(Zt,{})}),l.socialMedia.find((e=>"Tiktok"==e.platform))&&(0,N.jsx)(Gt,{href:`https://${l.socialMedia.find((e=>"Tiktok"==e.platform)).link}`,children:(0,N.jsx)(oi,{})})]}),(0,N.jsxs)(ti,{children:["Copyright",(0,N.jsx)(ri,{})," ",(new Date).getFullYear()," "," ",(0,N.jsx)(ii,{href:"https://www.menugic.com",children:"menugic.com"})]})]});var m}const Si=r.Ay.div`
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
`,Ti=((0,r.Ay)(Xe.WQq)`
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

`,(0,r.Ay)(b.pS_)`
font-size: 15px;
position: absolute;
top: 0px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`;var _i=t(11222),Li=t(29334),Ii=t(81132),Pi=t(70268),Ei=t(50074);const Ni=r.i7`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,Fi=r.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ri=r.Ay.div`
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
`,Di=r.Ay.div`
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
  animation: ${Ni} 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`,Oi=r.Ay.div`
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
`,Ui=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`,qi=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Mi=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`,Hi=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  white-space: nowrap;
`,Wi=r.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}12`};
  padding: 3px 5px;
  border-radius: 20px;
`,Vi=r.Ay.button`
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
`,Yi=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  min-width: 20px;
  text-align: center;
`,Ji=r.Ay.button`
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
`,Xi=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,Ki="\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 2px 8px;\n  line-height: 1.5;\n  white-space: nowrap;\n",Gi=r.Ay.span`
  ${Ki}
  border: 1px solid ${e=>`${e.theme.popupTextColor||"#1a1a1a"}50`};
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  background: transparent;
`,Qi=r.Ay.span`
  ${Ki}
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}18`};
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}35`};
`,Zi=r.Ay.span`
  ${Ki}
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  border: 1px dashed ${e=>`${e.theme.popupTextColor||"#999"}40`};
  opacity: 0.65;
  text-decoration: line-through;
`,er=r.Ay.div`
  font-size: 10px;
  font-style: italic;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,or=r.Ay.div`
  font-size: 10px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.75;
  line-height: 1.5;
`,tr=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}10`};
  border-radius: 12px;
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  margin-top: 4px;
`,ir=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,rr=r.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  opacity: 0.75;
`,nr=r.Ay.div`
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
`,ar=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.6;
  text-align: center;
`,lr=["Size:","\u0627\u0644\u062d\u062c\u0645:"],sr=["Add ons:","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:"],dr=["Remove:","\u0628\u062f\u0648\u0646:"];function cr(e){let{restaurant:o,activeLanguage:t}=e;const i=(0,v.wA)(),{restaurantName:r}=(0,y.g)(),n=window.location.hostname.split(".")[0],a="menugic"!==n&&"localhost"!==n&&"www"!==n?n:r,l=(0,v.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,o)=>e+o.price*o.quantity),0),d="ar"===t?"ar":"en",c=e=>{const o=(0,Ei.qh)(e,d);if(!o.length)return null;const{sizeLabel:t,addonLabels:i,removalLabels:r,legacyLines:n}=function(e){const o={sizeLabel:null,addonLabels:[],removalLabels:[],legacyLines:[]};let t=null;for(const i of e)"heading"===i.type?t=lr.includes(i.text)?"size":sr.includes(i.text)?"addons":dr.includes(i.text)?"removals":"legacy":"size"===t?o.sizeLabel=i.text:"addons"===t?o.addonLabels.push(i.text):"removals"===t?o.removalLabels.push(i.text):o.legacyLines.push(i.text);return o}(o),a=t||i.length||r.length;return(0,N.jsxs)(N.Fragment,{children:[a&&(0,N.jsxs)(Xi,{children:[t&&(0,N.jsx)(Gi,{children:"ar"===d?`\u0627\u0644\u062d\u062c\u0645: ${t}`:`Size: ${t}`}),i.map((e=>(0,N.jsxs)(Qi,{children:["+ ",e]},e))),r.map((e=>(0,N.jsx)(Zi,{children:e},e)))]}),n.map(((e,o)=>(0,N.jsx)(or,{children:e},o)))]})};let p="";switch(null===o||void 0===o?void 0:o.currency){case"dollar":p="$";break;case"lb":p="L.L.";break;case"gram":p="g";break;case"kilogram":p="kg";break;default:p=""}if(0===l.length)return(0,N.jsx)(Fi,{children:(0,N.jsx)(ar,{children:"ar"===d?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"})});const u=e=>{var o;const t=null===(o=e.images)||void 0===o?void 0:o[0];return t&&t.url?(0,E.V)(t.url):""};return(0,N.jsx)(Fi,{children:(0,N.jsxs)(Ri,{children:[l.map((e=>{const o="ar"===d?e.ar_name:e.en_name,t=(0,qe.T)(e.price*e.quantity,p);return(0,N.jsx)(Di,{children:(0,N.jsxs)(Oi,{children:[(0,N.jsx)(Bi,{src:u(e),alt:o}),(0,N.jsxs)(Ui,{children:[(0,N.jsx)(qi,{title:o,children:o}),c(e),e.instruction&&(0,N.jsxs)(er,{children:["\ud83d\udcdd ",e.instruction]})]}),(0,N.jsxs)(Mi,{children:[(0,N.jsx)(Hi,{children:t}),(0,N.jsxs)(Wi,{children:[(0,N.jsx)(Vi,{onClick:()=>{return o=e.uniqueId,void((t=e.quantity)>1&&i((0,Me.v)(a,o,t-1)));var o,t},disabled:e.quantity<=1,"aria-label":"decrease quantity",children:"\u2212"}),(0,N.jsx)(Yi,{children:e.quantity}),(0,N.jsx)(Vi,{onClick:()=>{return o=e.uniqueId,t=e.quantity,i((0,Me.v)(a,o,t+1));var o,t},"aria-label":"increase quantity",children:"+"})]}),(0,N.jsx)(Ji,{onClick:()=>{return o=e.uniqueId,i((0,Me.dt)(a,o));var o},"aria-label":"remove item",children:(0,N.jsx)(We.qbC,{})})]})]})},e.uniqueId)})),(0,N.jsx)(tr,{children:(0,N.jsxs)(ir,{children:[(0,N.jsx)(rr,{children:"ar"===d?"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a":"Total"}),(0,N.jsx)(nr,{children:(0,qe.T)(s,p)})]})})]})})}var pr=t(13491);const ur=r.Ay.div`
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

`;function hr(e){let{deliveryType:o,branches:t,selectedBranch:i,setSelectedBranch:n,setErrors:a,errors:l}=e;const s=(0,r.DP)(),d=(t||[]).map((e=>({value:e.id,label:e.name,branch:e,isDisabled:!e.has_delivery&&"Delivery"===o}))),c={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==l&&void 0!==l&&l.branch?"rgba(255, 68, 68, 0.1)":s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:o.isDisabled?"#999":s.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?s.categoryUnActive||"#ffffff":o.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent",cursor:o.isDisabled?"not-allowed":"pointer",display:"flex",justifyContent:"space-between"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,N.jsx)(ur,{children:(0,N.jsx)(pr.Ay,{value:d.find((e=>{var o;return(null===(o=e.branch)||void 0===o?void 0:o.id)===(null===i||void 0===i?void 0:i.id)})),onChange:e=>{e&&!e.isDisabled&&(n(e.branch),a({...l,branch:""}))},options:d,placeholder:"Select Branch",isOptionDisabled:e=>e.isDisabled,styles:c,formatOptionLabel:e=>(0,N.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,N.jsx)("span",{children:e.label}),e.isDisabled&&"Delivery"===o&&(0,N.jsx)("span",{style:{fontSize:12,color:"#999"},children:"No Delivery"})]}),menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})})}const xr=r.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`,gr=(r.Ay.div`
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
`),mr=r.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`,fr=r.Ay.input`
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
`,vr=(0,r.Ay)(c.Xj1)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.mainColor};

`,yr=r.i7`
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
  animation: ${yr} 1s linear infinite; /* Apply animation */
`;var br=t(89993);function wr(e){var o;let{selectedBranch:t,selectedRegion:n,onRegionChange:a,setErrors:l,errors:s,onRegionsChange:d}=e;const c=(0,r.DP)(),[p,u]=(0,i.useState)(!1),[h,x]=(0,i.useState)(""),{response:g,isLoading:m}=(0,br.w)({branch_id:t.id,onSuccess:()=>{}});(0,i.useEffect)((()=>{var e;m||d((null===g||void 0===g||null===(e=g.data)||void 0===e?void 0:e.regions)||[])}),[m,g,d]),(0,i.useEffect)((()=>{a("")}),[t,a]);const f=((null===g||void 0===g||null===(o=g.data)||void 0===o?void 0:o.regions)||[]).map((e=>({value:e.region_name,label:e.region_name}))),v=f.filter((e=>e.label.toLowerCase().includes(h.toLowerCase()))),y={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==s&&void 0!==s&&s.region?"rgba(255, 68, 68, 0.1)":c.mainColor?`${c.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:c.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:c.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:c.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:c.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:c.categoryUnActive||"#ffffff",border:`1px solid ${c.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:c.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?c.categoryUnActive||"#ffffff":o.isFocused?c.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return!m&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(xr,{children:(0,N.jsx)(pr.Ay,{value:f.find((e=>e.value===n)),onMenuOpen:()=>u(!0),onMenuClose:()=>u(!1),onChange:e=>{a((null===e||void 0===e?void 0:e.value)||""),x(""),l({...s,region:""})},options:v,placeholder:"Select Region",styles:y,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})}),p&&(0,N.jsx)(gr,{children:(0,N.jsxs)(mr,{children:[(0,N.jsx)(fr,{placeholder:"Search",value:h,onChange:e=>{x(e.target.value)}}),(0,N.jsx)(vr,{})]})})]})}const jr=r.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Cr=r.Ay.div`
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
`,$r=r.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,Ar=r.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,kr=(r.Ay.select`
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
`);function zr(e){var o,t;let{formData:i,updateFormData:n,restaurant:a,errors:l,setErrors:s}=e;const d=(0,r.DP)();let c={};try{c=JSON.parse((null===a||void 0===a?void 0:a.features)||"{}")}catch(h){c={}}const p=[c.delivery_order&&{value:"Delivery",label:"Delivery"},c.takeaway_order&&{value:"TakeAway",label:"Take Away"},c.dinein_order&&{value:"DineIn",label:"Dine In"}].filter(Boolean),u={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(l.deliveryType?"rgba(255, 68, 68, 0.1)":d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?d.categoryUnActive||"#ffffff":o.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,N.jsxs)(jr,{children:[(0,N.jsx)($r,{children:"Select Order Type"}),(0,N.jsx)(Ar,{children:"Choose how you would like to receive your order"}),(0,N.jsxs)(Cr,{children:[(0,N.jsx)(pr.Ay,{value:p.find((e=>e.value===i.deliveryType)),onChange:e=>{var o;n({deliveryType:(null===e||void 0===e?void 0:e.value)||"",selectedBranch:(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o[0])||null,selectedRegion:""}),s({})},options:p,placeholder:"Select Order Type",isSearchable:!1,styles:u,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"}),l.deliveryType&&(0,N.jsx)(kr,{children:l.deliveryType})]}),(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.length)>0&&!(()=>{var e;return null===a||void 0===a||null===(e=a.branches)||void 0===e?void 0:e.some((e=>e.is_online))})()&&(0,N.jsxs)(Cr,{children:[(0,N.jsx)(hr,{deliveryType:i.deliveryType,branches:null===a||void 0===a?void 0:a.branches,selectedBranch:i.selectedBranch,setSelectedBranch:e=>n({selectedBranch:e,selectedRegion:""}),setErrors:s,errors:l}),l.branch&&(0,N.jsx)(kr,{children:l.branch})]}),i.selectedBranch&&"Delivery"===i.deliveryType&&Array.isArray(i.regions)&&i.regions.length>0&&(0,N.jsxs)(Cr,{children:[(0,N.jsx)(wr,{selectedRegion:i.selectedRegion,onRegionChange:e=>n({selectedRegion:e}),selectedBranch:1===(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)?null===a||void 0===a?void 0:a.branches[0]:i.selectedBranch,setErrors:s,errors:l,onRegionsChange:e=>n({regions:e})}),l.region&&(0,N.jsx)(kr,{children:l.region})]})]})}var Sr=t(16106);const Tr=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,_r=r.Ay.button`
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
`,Lr=r.Ay.div`
  padding: 16px;
  background: ${e=>e.theme.categoryUnActive||"#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ir=r.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Pr=r.Ay.div`
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  word-break: break-all;
`,Er=r.Ay.a`
  font-size: 14px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-decoration: none;
  font-weight: 600;
  margin-top: 4px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`,Nr=r.Ay.div`
  color: #ff4444;
  font-size: 13px;
  margin-top: -8px;
`;function Fr(e){let{onLocationSelect:o,selectedLocation:t,hasError:i,googleMapsApiKey:n,activeLanguage:a="en"}=e;const l=(0,r.DP)();return n?(0,N.jsx)(Sr.A,{apiKey:n,onLocationConfirm:o,selectedLocation:t,hasError:i,theme:l,activeLanguage:a}):(0,N.jsx)(Rr,{onLocationSelect:o,selectedLocation:t,hasError:i})}function Rr(e){let{onLocationSelect:o,selectedLocation:t,hasError:r}=e;const[n,a]=(0,i.useState)(!1),[l,s]=(0,i.useState)("");return(0,N.jsxs)(Tr,{children:[(0,N.jsxs)(_r,{type:"button",onClick:()=>{navigator.geolocation?(a(!0),s(""),navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:i}=e.coords,r={latitude:t,longitude:i,address:`${t.toFixed(6)}, ${i.toFixed(6)}`};o(r),a(!1)}),(()=>{s("Unable to retrieve your location. Please try again."),a(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):s("Geolocation is not supported by your browser")},disabled:n,variant:"current",children:[(0,N.jsx)(We.hO$,{}),n?"Getting Location...":"Use Current Location"]}),(0,N.jsxs)(_r,{type:"button",onClick:()=>{if(t){const e=`https://www.google.com/maps?q=${t.latitude},${t.longitude}`;window.open(e,"_blank")}else{const e="https://www.google.com/maps/search/?api=1";window.open(e,"_blank")}},variant:"select",children:[(0,N.jsx)(We.vq8,{}),t?"View on Map":"Select on Map"]}),t&&(0,N.jsxs)(Lr,{children:[(0,N.jsx)(Ir,{children:"Selected Location:"}),(0,N.jsx)(Pr,{children:t.address||`${t.latitude}, ${t.longitude}`}),t.latitude&&t.longitude&&(0,N.jsx)(Er,{href:`https://www.google.com/maps?q=${t.latitude},${t.longitude}`,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]}),l&&(0,N.jsx)(Nr,{children:l}),r&&!t&&(0,N.jsx)(Nr,{children:"Please select a location"})]})}const Dr=r.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`,Or=r.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,Br=r.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,Ur=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 0;
  position: relative;
`,qr=r.Ay.label`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Mr=r.Ay.input`
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
`,Hr=r.Ay.textarea`
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
`,Wr=r.Ay.span`
  color: #ff4444;
  font-size: 12px;
  display: block;
`,Vr=r.Ay.p`
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.85;
`;function Yr(e){let{formData:o,updateFormData:t,errors:n,restaurantName:a,restaurant:l,activeLanguage:s="en"}=e;const d=(0,r.DP)(),[c,p]=(0,i.useState)([]),[u,h]=(0,i.useState)(!1),x=(0,i.useRef)(!1),g=(e,o)=>"ar"===s?o:e,m=(0,i.useMemo)((()=>{try{return null!==l&&void 0!==l&&l.features?JSON.parse(l.features):{}}catch{return{}}}),[null===l||void 0===l?void 0:l.features]).google_maps_integrated&&(null===l||void 0===l?void 0:l.google_maps_api_key)||null,f=(0,i.useMemo)((()=>({control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:d.mainColor||d.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?d.categoryUnActive||"#ffffff":o.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})})),[d]),v=(0,i.useMemo)((()=>[{value:"__manual__",label:0===c.length?g("No saved addresses \u2014 type below","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u2014 \u0627\u0643\u062a\u0628 \u0623\u062f\u0646\u0627\u0647"):g("Type address manually","\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u062f\u0648\u064a\u0627\u064b")},...c.map((e=>({value:String(e.id),label:`${e.label||g("Address","\u0639\u0646\u0648\u0627\u0646")}${e.is_default?` (${g("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")})`:""} \u2014 ${e.full_address.length>56?`${e.full_address.slice(0,56)}\u2026`:e.full_address}`})))]),[c,s]),y=(0,i.useMemo)((()=>{if(null==o.selectedAddressId)return v[0]||null;const e=String(o.selectedAddressId);return v.find((o=>o.value===e))||v[0]||null}),[v,o.selectedAddressId]);(0,i.useEffect)((()=>{if("Delivery"!==o.deliveryType||!a)return void p([]);const e=(0,Pi.wU)(a);if(!e)return void p([]);let t=!1;return h(!0),_i.A.get(Ii.Qf,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:o}=e;t||p(o.addresses||[])})).catch((()=>{t||p([])})).finally((()=>{t||h(!1)})),()=>{t=!0}}),[o.deliveryType,a]),(0,i.useEffect)((()=>{"Delivery"!==o.deliveryType&&(x.current=!1)}),[o.deliveryType]),(0,i.useEffect)((()=>{if("Delivery"!==o.deliveryType)return;if(!c.length||x.current)return;const e=c.find((e=>e.is_default));e&&!String(o.fullAddress||"").trim()&&(x.current=!0,t({selectedAddressId:e.id,fullAddress:e.full_address}))}),[c,o.deliveryType,o.fullAddress,t]);const b=e=>{const{name:o,value:i}=e.target;t("fullAddress"!==o?{[o]:i}:{[o]:i,selectedAddressId:null})};return(0,N.jsxs)(Dr,{children:[(0,N.jsx)(Or,{children:g("Your Information","\u0628\u064a\u0627\u0646\u0627\u062a\u0643")}),(0,N.jsx)(Br,{children:g("Please provide your contact details to complete the order","\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628")}),(0,N.jsxs)(Ur,{children:[(0,N.jsx)(qr,{children:g("Full Name *","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,N.jsx)(Mr,{type:"text",name:"fullName",value:o.fullName,onChange:b,placeholder:g("Enter your full name","\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644"),hasError:!!n.fullName}),n.fullName&&(0,N.jsx)(Wr,{children:n.fullName})]}),(0,N.jsxs)(Ur,{children:[(0,N.jsx)(qr,{children:g("Phone Number *","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 *")}),(0,N.jsx)(Mr,{type:"tel",name:"phoneNumber",value:o.phoneNumber,onChange:b,placeholder:g("Enter your phone number","\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643"),hasError:!!n.phoneNumber}),n.phoneNumber&&(0,N.jsx)(Wr,{children:n.phoneNumber})]}),"Delivery"===o.deliveryType&&(0,N.jsxs)(N.Fragment,{children:[(0,Pi.wU)(a)&&(0,N.jsxs)(Ur,{children:[(0,N.jsxs)(qr,{children:[g("Saved address","\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0641\u0648\u0638"),u?` (${g("loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")})`:""]}),(0,N.jsx)(Cr,{children:(0,N.jsx)(pr.Ay,{value:y,onChange:e=>{if(!e||"__manual__"===e.value)return void t({selectedAddressId:null});const o=parseInt(e.value,10),i=c.find((e=>e.id===o));i&&t({selectedAddressId:o,fullAddress:i.full_address})},options:v,isSearchable:!1,isDisabled:u,styles:f,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed",isRtl:"ar"===s})}),(0,N.jsx)(Vr,{children:g("Add or edit addresses from the account menu (person icon) \u2192 Addresses.","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062d\u0633\u0627\u0628 (\u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0634\u062e\u0635) \u2190 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646.")})]}),m&&(0,N.jsxs)(Ur,{children:[(0,N.jsx)(qr,{children:g("Delivery Location *","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 *")}),(0,N.jsx)(Fr,{onLocationSelect:e=>{t({selectedLocation:e,fullAddress:e.address||`${e.latitude}, ${e.longitude}`})},selectedLocation:o.selectedLocation,hasError:!!n.fullAddress&&!o.selectedLocation,googleMapsApiKey:m,activeLanguage:s})]}),(0,N.jsxs)(Ur,{children:[(0,N.jsx)(qr,{children:g("Full Address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,N.jsx)(Hr,{name:"fullAddress",value:o.fullAddress,onChange:b,placeholder:g("Enter your delivery address","\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),hasError:!!n.fullAddress,rows:"3"}),n.fullAddress&&(0,N.jsx)(Wr,{children:n.fullAddress})]})]}),"DineIn"===o.deliveryType&&(0,N.jsxs)(Ur,{children:[(0,N.jsx)(qr,{children:g("Table Number *","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 *")}),(0,N.jsx)(Mr,{type:"number",name:"tableNumber",value:o.tableNumber,onChange:b,placeholder:g("Enter table number","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629"),hasError:!!n.tableNumber}),n.tableNumber&&(0,N.jsx)(Wr,{children:n.tableNumber})]}),(0,N.jsxs)(Ur,{children:[(0,N.jsx)(qr,{children:g("Special Notes (Optional)","\u0645\u0644\u0627\u062d\u0638\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,N.jsx)(Hr,{name:"note",value:o.note,onChange:b,placeholder:g("Any special instructions or notes\u2026","\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u2026"),rows:"3"})]})]})}const Jr=r.Ay.div`
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
`,Xr=r.Ay.div`
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,Kr=r.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 12px;
`,Gr=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  gap: 12px;
`,Qr=r.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#666"};
  flex: 1;
`,Zr=r.Ay.div`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  text-align: right;
  flex: 1;
  word-break: break-word;
`,en=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,on=r.Ay.div`
  padding: 8px 0;
`,tn=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,rn=r.Ay.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`,nn=r.Ay.div`
  height: 1px;
  background: ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  margin: 12px 0;
`,an=r.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-align: right;
`;function ln(e){let{formData:o,restaurant:t,activeLanguage:i}=e;const{restaurantName:r}=(0,y.g)(),n=window.location.hostname.split(".")[0],a="menugic"!==n&&"localhost"!==n&&"www"!==n?n:r,l=(0,v.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,o)=>e+o.price*o.quantity),0);let d="";switch(null===t||void 0===t?void 0:t.currency){case"dollar":d="$";break;case"lb":d="L.L.";break;case"gram":d="g";break;case"kilogram":d="kg";break;default:d=""}return(0,N.jsxs)(Jr,{children:[(0,N.jsx)(Kr,{children:"Review Your Order"}),(0,N.jsxs)(Xr,{children:[(0,N.jsx)(Kr,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Items"}),(0,N.jsx)(en,{children:l.map((e=>{var o,t;return(0,N.jsx)(on,{children:(0,N.jsxs)(tn,{children:[(0,N.jsx)(rn,{src:(0,E.V)(null===(o=e.images)||void 0===o||null===(t=o[0])||void 0===t?void 0:t.url),alt:"en"===i?e.en_name:e.ar_name}),(0,N.jsxs)(Zr,{style:{flex:2},children:[e.quantity,"x"," ",(0,N.jsx)("strong",{children:"en"===i?e.en_name:e.ar_name})]}),(0,N.jsx)(Zr,{children:(0,qe.T)(e.price*e.quantity,d)})]})},e.uniqueId)}))}),(0,N.jsx)(nn,{}),(0,N.jsxs)(Gr,{children:[(0,N.jsx)(Qr,{children:"Total:"}),(0,N.jsx)(an,{children:(0,qe.T)(s,d)})]})]}),(0,N.jsxs)(Xr,{children:[(0,N.jsx)(Kr,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Details"}),(0,N.jsxs)(Gr,{children:[(0,N.jsx)(Qr,{children:"Order Type:"}),(0,N.jsx)(Zr,{children:o.deliveryType})]}),o.selectedBranch&&(0,N.jsxs)(Gr,{children:[(0,N.jsx)(Qr,{children:"Branch:"}),(0,N.jsx)(Zr,{children:o.selectedBranch.name})]}),o.selectedRegion&&(0,N.jsxs)(Gr,{children:[(0,N.jsx)(Qr,{children:"Region:"}),(0,N.jsx)(Zr,{children:o.selectedRegion})]})]}),(0,N.jsxs)(Xr,{children:[(0,N.jsx)(Kr,{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact Information"}),(0,N.jsxs)(Gr,{children:[(0,N.jsx)(Qr,{children:"Name:"}),(0,N.jsx)(Zr,{children:o.fullName})]}),(0,N.jsxs)(Gr,{children:[(0,N.jsx)(Qr,{children:"Phone:"}),(0,N.jsx)(Zr,{children:o.phoneNumber})]}),"Delivery"===o.deliveryType&&o.fullAddress&&(0,N.jsxs)(Gr,{children:[(0,N.jsx)(Qr,{children:"Address:"}),(0,N.jsx)(Zr,{children:o.fullAddress})]}),"DineIn"===o.deliveryType&&o.tableNumber&&(0,N.jsxs)(Gr,{children:[(0,N.jsx)(Qr,{children:"Table Number:"}),(0,N.jsx)(Zr,{children:o.tableNumber})]}),o.note&&(0,N.jsxs)(Gr,{children:[(0,N.jsx)(Qr,{children:"Notes:"}),(0,N.jsx)(Zr,{children:o.note})]})]})]})}const sn=r.Ay.div`
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
`,dn=r.Ay.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,cn=r.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`,pn=(0,r.Ay)(dn)`
  margin-bottom: 0;
  flex: 1;
`,un=r.Ay.button`
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
`,hn=r.Ay.div`
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
`,xn=r.Ay.div`
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
`,gn=r.Ay.div`
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
`,mn=r.Ay.div`
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
`,fn=r.Ay.div`
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
`,vn=r.Ay.button`
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
`,yn=[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"review",label:"Review",number:4}];function bn(e){var o;let{popupHandler:t,restaurant:r}=e;const{restaurantName:n}=(0,y.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n,s=(0,v.d4)((e=>e.cart[l]||[])),d=(0,v.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[l])||void 0===t?void 0:t.activeLanguage)||"en"})),c=(0,v.wA)(),[p,u]=(0,i.useState)(0),[h,x]=(0,i.useState)({deliveryType:"",selectedBranch:(null===r||void 0===r||null===(o=r.branches)||void 0===o?void 0:o[0])||null,selectedRegion:"",regions:[],fullName:"",phoneNumber:"",fullAddress:"",selectedAddressId:null,selectedLocation:null,tableNumber:"",note:""}),[g,m]=(0,i.useState)({}),{handleApiCallAsync:f,isPending:b}=(0,Li.h)({onSuccess:()=>{}});(0,i.useEffect)((()=>{(async()=>{const e=(0,Pi.wU)(l);if(e)try{const{data:o}=await _i.A.get(Ii.EY,{headers:{Authorization:`Bearer ${e}`}});x((e=>({...e,fullName:o.full_name||e.fullName,phoneNumber:o.phone_number||e.phoneNumber})))}catch{}})()}),[l]),(0,i.useEffect)((()=>{if(null!==r&&void 0!==r&&r.features){const e=JSON.parse(r.features),o=Object.entries(e).filter((e=>{let[o,t]=e;return!0===t})).map((e=>{let[o]=e;return"delivery_order"===o?"Delivery":"takeaway_order"===o?"TakeAway":"dinein_order"===o?"DineIn":null})).filter(Boolean);1===o.length&&x((e=>({...e,deliveryType:o[0]})))}}),[r]);const w=e=>{x((o=>({...o,...e})));const o=Object.keys(e);m((e=>{const t={...e};return o.forEach((e=>{t[e]&&delete t[e]})),t}))},j=e=>{const o={};if(1===e){var t;if(h.deliveryType||(o.deliveryType="Order Type is required."),!h.selectedBranch&&(null===r||void 0===r||null===(t=r.branches)||void 0===t?void 0:t.length)>0){var i;(null===r||void 0===r||null===(i=r.branches)||void 0===i?void 0:i.some((e=>e.is_online)))||(o.branch="Branch is required.")}"Delivery"===h.deliveryType&&h.selectedBranch&&Array.isArray(h.regions)&&h.regions.length>0&&!h.selectedRegion&&(o.region="Region is required.")}else 2===e&&(h.fullName||(o.fullName="Full Name is required."),h.phoneNumber||(o.phoneNumber="Phone Number is required."),"Delivery"!==h.deliveryType||h.fullAddress||(o.fullAddress="Full Address is required for delivery."),"DineIn"!==h.deliveryType||h.tableNumber||(o.tableNumber="Table Number is required."));return m(o),0===Object.keys(o).length};return(0,N.jsxs)(sn,{children:[(0,N.jsxs)(cn,{children:[(0,N.jsx)(pn,{children:yn[p].label}),(0,N.jsx)(un,{onClick:()=>t(null),"aria-label":"Close cart",children:"\u2715"})]}),(0,N.jsx)(hn,{children:yn.map(((e,o)=>(0,N.jsxs)(xn,{active:o<=p,children:[(0,N.jsx)(gn,{active:o<=p,completed:o<p,children:o<p?"\u2713":e.number}),(0,N.jsx)("span",{children:e.label})]},e.id)))}),(0,N.jsx)(mn,{children:(()=>{switch(p){case 0:return(0,N.jsx)(cr,{formData:h,updateFormData:w,restaurant:r,activeLanguage:d});case 1:return(0,N.jsx)(zr,{formData:h,updateFormData:w,restaurant:r,errors:g,setErrors:m});case 2:return(0,N.jsx)(Yr,{formData:h,updateFormData:w,restaurant:r,errors:g,restaurantName:l,activeLanguage:d});case 3:return(0,N.jsx)(ln,{formData:h,restaurant:r,activeLanguage:d});default:return null}})()}),(0,N.jsxs)(fn,{children:[p>0&&(0,N.jsx)(vn,{onClick:()=>{p>0&&u(p-1)},variant:"secondary",children:"Back"}),p<yn.length-1?(0,N.jsx)(vn,{onClick:()=>{if(j(p)){if(0===p&&null!==r&&void 0!==r&&r.id){var e;const o=(null===(e=h.selectedBranch)||void 0===e?void 0:e.id)||null;(0,He.trackCheckoutStart)(r.id,o,h.deliveryType||null)}p<yn.length-1&&u(p+1)}},variant:"primary",children:"Next"}):(0,N.jsx)(vn,{onClick:async()=>{var e,o,i,n;if(!j(2))return;let a="";switch(null===r||void 0===r?void 0:r.currency){case"dollar":a="$";break;case"lb":a="L.L.";break;case"gram":a="g";break;case"kilogram":a="kg"}let p=0,u="";u+=`*New Order - ${h.deliveryType}*\n`,u+="--------------------\n\n",u+="*Items:*\n",s.forEach(((e,o)=>{const t=("ar"===d?e.ar_name:e.en_name||"").trim(),i=("ar"===d?e.category.ar_category:e.category.en_category||"").trim(),r=e.price*e.quantity;p+=r,u+=`${o+1}. *${t}*\n`,u+=`    ${i}\n`,u+=`    ${e.quantity}x ${e.price} ${a} = *${r} ${a}*\n`,e.formData&&(u+=(0,Ei.Ve)(e,"ar"===d?"ar":"en")),e.instruction&&(u+=`    > _${e.instruction}_\n`),u+="\n"})),u+="--------------------\n",u+=`*Total: ${(0,qe.T)(p,a)}*\n\n`,u+="*Customer:*\n",u+=`- ${h.fullName}\n`,u+=`- ${h.phoneNumber}\n`,h.selectedRegion&&(u+=`- Region: ${h.selectedRegion}\n`);let x="";"Delivery"===h.deliveryType&&(u+="\n*Delivery Address:*\n",u+=`${h.fullAddress}\n`,h.selectedLocation&&(x=`https://www.google.com/maps?q=${h.selectedLocation.latitude},${h.selectedLocation.longitude}`)),"DineIn"===h.deliveryType&&(u+=`- Table: #${h.tableNumber}\n`),h.note&&(u+=`\n*Note:* _${h.note}_\n`),x&&(u+=`\n${x}\n`);let g="",m="";var v;null!==(e=h.selectedBranch)&&void 0!==e&&e.whatsapp_number?(m=(0,ki.J)(null===(v=h.selectedBranch)||void 0===v?void 0:v.whatsapp_number,null===r||void 0===r?void 0:r.country_code),g=(0,ki.G)(m,u)):g=(0,ki.G)(r.phone_number,u);const y=[...s.map((e=>{var o;return{id:e.id,quantity:e.quantity,branch_id:null===(o=h.selectedBranch)||void 0===o?void 0:o.id,restaurant_id:r.id}}))],b=[...s.map((e=>({product_id:e.id,product_name:"en"===d?e.en_name:e.ar_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];f({products:y,restaurant_id:r.id,branch_id:null===(o=h.selectedBranch)||void 0===o?void 0:o.id,delivery_type:h.deliveryType,customer_name:h.fullName,customer_phone:h.phoneNumber,customer_address:"Delivery"===h.deliveryType?h.fullAddress:null,customer_latitude:(null===(i=h.selectedLocation)||void 0===i?void 0:i.latitude)||null,customer_longitude:(null===(n=h.selectedLocation)||void 0===n?void 0:n.longitude)||null,table_number:"DineIn"===h.deliveryType?h.tableNumber:null,note:h.note,items:b,subtotal:p,total:p,currency:r.currency},l).then((e=>{if(null!==r&&void 0!==r&&r.id){var o,t,i;const n=(null===(o=h.selectedBranch)||void 0===o?void 0:o.id)||null;(0,He.trackOrderPlaced)(r.id,(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(i=t.order)||void 0===i?void 0:i.id)||null,h.deliveryType,p,n,{items:b,customerName:h.fullName})}})).catch((e=>console.error("Order creation failed:",e))),window.location.href=g,c((0,Me.sX)(l)),t(null)},variant:"primary",disabled:b,children:b?"Submitting...":"Submit Order"})]})]})}function wn(e){let{restaurant:o,showPopup:t,popupHandler:r=(()=>{})}=e;const{restaurantName:n}=(0,y.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n,s=(0,v.d4)((e=>e.cart[l]||[])),d=(0,v.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[l])||void 0===t?void 0:t.activeLanguage)||"en"})),c=0===s.length;(0,i.useEffect)((()=>{const e=()=>{r(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);return(0,N.jsx)(Si,{showPopup:t,children:c?(0,N.jsx)(Ti,{children:"en"===d?"Your cart is empty":"\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0641\u0627\u0631\u063a\u0629"}):(0,N.jsx)(bn,{popupHandler:r,restaurant:o})})}const jn=r.Ay.div`
height: 100vh;
position: fixed;
width: 100%;
left: ${e=>e.showSidebar?"0":"-100%"};
top:0;
  transition:all  0.5s ease-in-out;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
z-index: 100;
`,Cn=r.Ay.div`
width: 100%;
height: 100%;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
`,$n=r.Ay.div`
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
`,An=r.Ay.div`
width: 100%;
  height: 60%; /* 60% of the sidebar height */
  overflow-y: auto;
  margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,kn=r.Ay.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-start;
`,zn=r.Ay.span`
    /* overflow: hidden;
    text-overflow: ellipsis; */
    margin-left:${e=>e.categoryType?"10%":"0%"};

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 13px;
    color: ${e=>e.theme.sidebartext};

`,Sn=r.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10%;

`,Tn=r.Ay.img`
width:20px;
height:20px;
`,_n=r.Ay.div`
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vh;
`,Ln=r.Ay.img`
max-width: min(200px, 60vw);
max-height: 120px;
object-fit: contain;
margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,In=r.Ay.div`
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

`,Pn=r.Ay.input`
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

`,En=(0,r.Ay)(c.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};
color:${e=>e.theme.sidebarsearchText};

`,Nn=(0,r.Ay)(Y.IMk)`
position: absolute;
left: 20px;
top: 20px;
color: ${e=>e.theme.sidebarsearch};
font-size: 27px;

`;function Fn(e){var o;let{activeCategory:t,setactiveCategory:r,categories:n,showSidebar:a,setshowSidebar:l,setcarouselPosition:s,onFeedbackClick:d,onContactClick:c,onBranchesClick:p,onAboutClick:u,onShareClick:h,branches:x}=e;const{restaurantName:g}=(0,y.g)(),[m,f]=(0,se.ok)(),b=window.location.hostname.split(".")[0],w="menugic"!==b&&"localhost"!==b&&"www"!==b?b:g,j=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[w]})),[C,$]=(0,i.useState)(""),A=(null===j||void 0===j?void 0:j.activeLanguage)||"en",k=null===n||void 0===n?void 0:n.filter((e=>"en"===A?(e.en_category||"").toLowerCase().includes(C.toLowerCase()):(e.ar_category||"").toLowerCase().includes(C.toLowerCase()))),z=e=>{l(!1),e&&e()},S=[d&&{icon:We.g5D,label:"en"===A?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a",onClick:()=>z(d)},(null===x||void 0===x?void 0:x.length)>0&&p&&{icon:We.vq8,label:"en"===A?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639",onClick:()=>z(p)},c&&{icon:We.toK,label:"en"===A?"Contact Us":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",onClick:()=>z(c)},u&&{icon:We.__w,label:"en"===A?"About Us":"\u0645\u0646 \u0646\u062d\u0646",onClick:()=>z(u)},h&&{icon:We.eb3,label:"en"===A?"Share":"\u0645\u0634\u0627\u0631\u0643\u0629",onClick:()=>z(h)}].filter(Boolean);return(0,N.jsxs)(jn,{showSidebar:a,children:[(0,N.jsx)(Cn,{onClick:()=>{l(!1)},showSidebar:a}),(0,N.jsxs)($n,{children:[(0,N.jsx)(Nn,{}),(0,N.jsx)(_n,{children:(0,N.jsx)(Ln,{showSidebar:a,src:(null===j||void 0===j?void 0:j.logoURL)&&`https://storage.googleapis.com/ecommerce-bucket-testing/${j.logoURL}`})}),(0,N.jsxs)(In,{showSidebar:a,children:[(0,N.jsx)(En,{activeLanguage:A}),(0,N.jsx)(Pn,{type:"text",activeLanguage:A,dir:"en"===A?"ltr":"rtl",placeholder:"en"===A?"Search Categories":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{$(e.target.value)},value:C})]}),(0,N.jsx)(An,{showSidebar:a,children:null===k||void 0===k?void 0:k.sort(((e,o)=>o.priority-e.priority)).map(((e,o)=>(0,N.jsxs)(kn,{onClick:()=>((e,o)=>{r(e),s(o),l(!1)})(e.id,o),children:["horizantal-withoutIcon"!==(null===j||void 0===j?void 0:j.category_type)&&(0,N.jsx)(Sn,{activeCategory:t,categoryId:e.id,children:(0,N.jsx)(Tn,{src:e.image_url?(0,E.V)(e.image_url):e.isAllItems&&null!==j&&void 0!==j&&j.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${j.logoURL}`:""})}),(0,N.jsx)(zn,{categoryType:"horizantal-withoutIcon"===(null===j||void 0===j?void 0:j.category_type),activeCategory:t,categoryId:e.id,children:"en"===A?e.en_category||e.ar_category:e.ar_category||e.en_category})]},o)))}),S.length>0&&(0,N.jsx)("div",{style:{borderTop:`1px solid ${null!==j&&void 0!==j&&j.theme&&(null===(o=JSON.parse(j.theme))||void 0===o?void 0:o.borderColor)||"#eee"}`,marginTop:10,paddingTop:10},children:S.map(((e,o)=>{var t,i;return(0,N.jsxs)(kn,{onClick:e.onClick,style:{cursor:"pointer"},children:[(0,N.jsx)(Sn,{style:{background:"transparent",border:"none",width:28,height:28},children:(0,N.jsx)(e.icon,{style:{fontSize:14,color:null!==j&&void 0!==j&&j.theme&&(null===(t=JSON.parse(j.theme))||void 0===t?void 0:t.sidebartext)||"#333"}})}),(0,N.jsx)(zn,{categoryType:!0,style:{fontWeight:500,color:null!==j&&void 0!==j&&j.theme&&(null===(i=JSON.parse(j.theme))||void 0===i?void 0:i.sidebartext)||"#333"},children:e.label})]},o)}))})]})]})}var Rn=t(65445);const Dn=r.Ay.div`
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
`,On=r.Ay.div`
width: 80%;
display: flex;
flex-direction: column;
padding-top:40px;
`,Bn=r.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,Un=(r.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,(0,r.Ay)(b.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`),qn=(0,r.Ay)(Xe.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`,Mn=r.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor}

`,Hn=r.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor};
margin-top: 20px;
`,Wn=r.Ay.div`
display: flex;
flex-direction: row;
gap:15px;
margin-top: 20px;


`,Vn=r.Ay.div`
display: flex;
flex-direction: column;
gap:5px;
align-items: center;
justify-content: center;

`,Yn=r.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #8bffb83d;
`,Jn=(0,r.Ay)(n.EcP)`
font-size: 24px;
color:#51C288;
`,Xn=r.Ay.div`
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

background-size: 300% 300%; /* Creates a smooth animated effect */`,Kn=(0,r.Ay)(n.ao$)`
font-size: 24px;
/* color:#51C288; */
color:#5c595b;



`,Gn=r.Ay.span`
font-size: 10px;
color:${e=>e.theme.popupTextColor}

`,Qn=r.Ay.div`
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

`,Zn=r.Ay.div`
width: 85%;
overflow: hidden;

`,ea=r.Ay.span`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
white-space: nowrap;
`,oa=(0,r.Ay)(n.zU_)`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`,ta=(0,r.Ay)(dt.RXm)`
font-size: 18px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`;function ia(e){let{showPopup:o,popupHandler:t,activeCategory:r}=e;const{restaurantName:n}=(0,y.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n;(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[l].activeLanguage}));(0,i.useEffect)((()=>{const e=()=>{t(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const[s,d]=(0,i.useState)(!1);return(0,N.jsxs)(Dn,{showPopup:o,children:[(0,N.jsx)(qn,{onClick:()=>{t(null)}}),(0,N.jsxs)(On,{children:[(0,N.jsx)(Mn,{children:"Share Category"}),(0,N.jsxs)(Wn,{children:[(0,N.jsxs)(Vn,{children:[(0,N.jsx)(Yn,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname,t=`https://api.whatsapp.com/send?text=${encodeURIComponent(o+"?categoryId="+e)}`;window.open(t,"_blank")})(r),children:(0,N.jsx)(Jn,{})}),(0,N.jsx)(Gn,{children:"Whatsapp"})]}),(0,N.jsxs)(Vn,{children:[(0,N.jsx)(Xn,{onClick:()=>{window.open("https://www.instagram.com/direct/inbox/","_blank")},children:(0,N.jsx)(Kn,{})}),(0,N.jsx)(Gn,{children:"Instagram"})]})]}),(0,N.jsx)(Hn,{children:"Get Link"}),(0,N.jsxs)(Qn,{children:[(0,N.jsx)(Zn,{children:(0,N.jsx)(ea,{children:(e=>{if(e){return window.location.origin+window.location.pathname+"?categoryId="+e}})(r)})}),s?(0,N.jsx)(ta,{}):(0,N.jsx)(oa,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname;navigator.clipboard.writeText(o+"?categoryId="+e),d(!0),setTimeout((()=>{d(!1)}),4e3)})(r)})]})]}),(0,N.jsxs)(Bn,{children:["Copyright",(0,N.jsx)(Un,{}),"2024 ",(0,N.jsx)(se.N_,{href:"https://www.menugic.com",children:"menugic.com"})]})]})}var ra=t(31088),na=t(5677),aa=t(38495);const la=r.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,sa=r.Ay.div`
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
  animation: ${la} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,da=r.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,ca=r.Ay.div`
  display: flex;
  gap: 10px;
`,pa=r.Ay.button`
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
`,ua=r.Ay.button`
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

`,ha=e=>{let{onInstall:o,onDismiss:t,restaurantName:i,showInstallPopup:r}=e;return(0,N.jsxs)(sa,{showInstallPopup:r,children:[(0,N.jsxs)(da,{children:["Access ",(0,N.jsx)("b",{children:i})," anytime with one tap ",(0,N.jsx)("b",{children:"Install The App!"})]}),(0,N.jsxs)(ca,{children:[(0,N.jsx)(pa,{onClick:o,children:"Install"}),(0,N.jsx)(ua,{onClick:t,children:"Dismiss"})]})]})};var xa=t(42978),ga=t(34500);function ma(){var e,o,t;const[r,n]=(0,se.ok)(),a=r.get("productId"),c=r.get("categoryId"),{restaurantName:p}=(0,y.g)(),u=window.location.hostname.split(".")[0],h="menugic"!==u&&"localhost"!==u&&"www"!==u?u:p,x=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[h]})),[g,m]=((0,v.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[h])||void 0===t?void 0:t.activeLanguage)||"en"})),(0,i.useState)(null)),[f,b]=(0,i.useState)(""),[w,j]=(0,i.useState)(null),[C,$]=(0,i.useState)(null),[A,k]=(0,i.useState)(!0),z=2===Number(null===x||void 0===x?void 0:x.template_id)&&(!0===(null===x||void 0===x?void 0:x.show_all_items_category)||1===(null===x||void 0===x?void 0:x.show_all_items_category)||"1"===(null===x||void 0===x?void 0:x.show_all_items_category)),S={id:"all-items",en_category:"All Items",ar_category:"\u0643\u0644 \u0627\u0644\u0623\u0635\u0646\u0627\u0641",isAllItems:!0,priority:999999,image_url:(null===x||void 0===x?void 0:x.logoURL)||(null===x||void 0===x?void 0:x.cover_url)||null},T=[...(null===x||void 0===x?void 0:x.categories)||[]].sort(((e,o)=>(o.priority||0)-(e.priority||0)||(e.id||0)-(o.id||0))),_=z?[S,...T]:T,[L,I]=(0,i.useState)(c?_.findIndex((e=>e.id==c)):0),[P,E]=((0,v.d4)((e=>(e.cart[h]||[]).reduce(((e,o)=>e+o.quantity),0))),(0,i.useState)(c||(null===_||void 0===_||null===(e=_[0])||void 0===e?void 0:e.id))),F=(0,i.useCallback)((e=>{E(e);const o=new URLSearchParams(r);"all-items"===e?o.delete("categoryId"):o.set("categoryId",e),n(o)}),[r,n]),R=e=>{document.body.style.overflow=null==e?"auto":"hidden",m(e)};(0,i.useEffect)((()=>{if(null!==x&&void 0!==x&&x.id){var e,o;const t=(null===x||void 0===x||null===(e=x.branches)||void 0===e||null===(o=e[0])||void 0===o?void 0:o.id)||null;(0,He.trackVisit)(x.id,t),(0,He.trackPageView)(x.id,t)}}),[null===x||void 0===x?void 0:x.id]),(0,i.useEffect)((()=>{console.log("\ud83d\udd0d PWA Debug Info:"),console.log("- Protocol:",window.location.protocol),console.log("- Host:",window.location.hostname),console.log("- Navigator:",navigator.userAgent);const e=e=>{e.preventDefault(),console.log("\u2705 Install prompt event captured!"),$(e),k(!0)};return window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",(e=>{console.log("\ud83c\udf89 Application installed successfully!")})),()=>{window.removeEventListener("beforeinstallprompt",e)}}),[]);let D={};try{D=JSON.parse((null===x||void 0===x?void 0:x.features)||"{}")}catch(Ve){D={}}const O=(null===x||void 0===x?void 0:x.sliderImages)||[],B=(!0===(null===x||void 0===x?void 0:x.show_slider_image)||1===(null===x||void 0===x?void 0:x.show_slider_image)||"1"===(null===x||void 0===x?void 0:x.show_slider_image))&&O.length>0;return(0,N.jsxs)(l,{id:"wrapper",children:[(0,N.jsx)(ga.A,{onProductsClick:()=>window.scrollTo({top:0,behavior:"smooth"}),onBranchesClick:()=>{window.history.pushState({},""),R("location")},onContactFormClick:()=>{window.history.pushState({},""),R("contactForm")},onFeedbackClick:()=>{window.history.pushState({},""),R("feedback")},onAboutClick:()=>{window.history.pushState({},""),R("about")},onOrderClick:()=>{var e;null!==(e=D)&&void 0!==e&&e.cart&&(window.history.pushState({},""),R("cart"))},onHomeClick:void 0,onCategoryClick:e=>{F(e);const o=_.findIndex((o=>o.id===e));o>=0&&I(o)},onContactClick:()=>{window.history.pushState({},""),R("contactForm")},categories:_,activeCategory:P,setshowSidebar:j,showSidebar:w,popupHandler:R,isProductDetailsOpen:!!a}),(0,N.jsxs)(s,{onClick:()=>{null!=g&&R(null)},children:[(0,N.jsx)(d,{showPopup:g}),(0,N.jsx)(le,{categories:_,activeCategory:P,setactiveCategory:F,setSearchText:b,searchText:f,setshowSidebar:j,showSidebar:w,carouselPosition:L,setcarouselPosition:I,popupHandler:R,showMenuSlider:B,sliderImages:O,hideHeaderTop:!0}),(0,N.jsx)(Bt,{menu:x.categories,activeCategory:P,showPopup:g,searchText:f,setactiveCategory:F,setcarouselPosition:I,carouselPosition:L,categories:_})]}),(0,N.jsx)(zi,{restaurant:x,showPopup:g,popupHandler:R}),(null===(o=D)||void 0===o?void 0:o.cart)&&(0,N.jsx)(wn,{restaurant:x,showPopup:g,popupHandler:R}),(0,N.jsx)(ia,{showPopup:g,popupHandler:R,activeCategory:P}),(0,N.jsx)(ra.A,{restaurant:x,showPopup:g,popupHandler:R}),(0,N.jsx)(na.A,{restaurant:x,showPopup:g,popupHandler:R}),(0,N.jsx)(aa.A,{restaurant:x,showPopup:g,popupHandler:R}),(0,N.jsx)(Fn,{categories:_,activeCategory:P,setactiveCategory:F,setshowSidebar:j,showSidebar:w,setcarouselPosition:I,onFeedbackClick:()=>{window.history.pushState({},""),R("feedback")},onContactClick:()=>{window.history.pushState({},""),R("contactForm")},onBranchesClick:()=>{window.history.pushState({},""),R("location")},onAboutClick:()=>{window.history.pushState({},""),R("about")},onShareClick:()=>{window.history.pushState({},""),R("share")},branches:null===x||void 0===x?void 0:x.branches}),a&&(0,N.jsx)(Rn.A,{productId:a,searchParams:r,setSearchParams:n}),(null===(t=D)||void 0===t?void 0:t.install_app)&&(0,N.jsx)(ha,{showInstallPopup:A,onInstall:async()=>{if(!C)return;C.prompt();"accepted"===(await C.userChoice).outcome?console.log("User accepted the install"):console.log("User dismissed the install"),$(null),k(!1)},restaurantName:h,onDismiss:()=>k(!1)}),(0,N.jsx)(xa.A,{hideHome:!0,activeView:"products",showPopup:g,onCategoriesClick:()=>window.scrollTo({top:0,behavior:"smooth"}),onCartClick:()=>{var e;null!==(e=D)&&void 0!==e&&e.cart&&(window.history.pushState({},""),R("cart"))},onFeedbackClick:()=>{window.history.pushState({},""),R("feedback")},onBranchesClick:()=>{window.history.pushState({},""),R("location")},restaurantName:h,branches:null===x||void 0===x?void 0:x.branches})]})}},20965:(e,o,t)=>{"use strict";t(42564).default},34848:e=>{"use strict";function o(e,o){if("function"!==typeof e)throw new TypeError("argument fn must be a function");return e}function t(e,o,t){if(!e||"object"!==typeof e&&"function"!==typeof e)throw new TypeError("argument obj must be object");var i=Object.getOwnPropertyDescriptor(e,o);if(!i)throw new TypeError("must call property on owner object");if(!i.configurable)throw new TypeError("property must be configurable")}e.exports=function(e){if(!e)throw new TypeError("argument namespace is required");function i(e){}return i._file=void 0,i._ignored=!0,i._namespace=e,i._traced=!1,i._warned=Object.create(null),i.function=o,i.property=t,i}},26340:(e,o,t)=>{"use strict";var i,r=t(34848)("http-errors"),n=t(40203),a=t(53910),l=t(61033),s=t(51798);function d(e){return Number(String(e).charAt(0)+"00")}function c(e,o){var t=Object.getOwnPropertyDescriptor(e,"name");t&&t.configurable&&(t.value=o,Object.defineProperty(e,"name",t))}function p(e){return"Error"!==e.substr(-5)?e+"Error":e}e.exports=function e(){for(var o,t,i=500,n={},l=0;l<arguments.length;l++){var s=arguments[l],c=typeof s;if("object"===c&&s instanceof Error)i=(o=s).status||o.statusCode||i;else if("number"===c&&0===l)i=s;else if("string"===c)t=s;else{if("object"!==c)throw new TypeError("argument #"+(l+1)+" unsupported type "+c);n=s}}"number"===typeof i&&(i<400||i>=600)&&r("non-error status code; use only 4xx or 5xx status codes");("number"!==typeof i||!a.message[i]&&(i<400||i>=600))&&(i=500);var p=e[i]||e[d(i)];o||(o=p?new p(t):new Error(t||a.message[i]),Error.captureStackTrace(o,e));p&&o instanceof p&&o.status===i||(o.expose=i<500,o.status=o.statusCode=i);for(var u in n)"status"!==u&&"statusCode"!==u&&(o[u]=n[u]);return o},e.exports.HttpError=function(){function e(){throw new TypeError("cannot construct abstract class")}return l(e,Error),e}(),e.exports.isHttpError=(i=e.exports.HttpError,function(e){return!(!e||"object"!==typeof e)&&(e instanceof i||e instanceof Error&&"boolean"===typeof e.expose&&"number"===typeof e.statusCode&&e.status===e.statusCode)}),function(e,o,t){o.forEach((function(o){var i,r=s(a.message[o]);switch(d(o)){case 400:i=function(e,o,t){var i=p(o);function r(e){var o=null!=e?e:a.message[t],l=new Error(o);return Error.captureStackTrace(l,r),n(l,r.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:o,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(r,e),c(r,i),r.prototype.status=t,r.prototype.statusCode=t,r.prototype.expose=!0,r}(t,r,o);break;case 500:i=function(e,o,t){var i=p(o);function r(e){var o=null!=e?e:a.message[t],l=new Error(o);return Error.captureStackTrace(l,r),n(l,r.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:o,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(r,e),c(r,i),r.prototype.status=t,r.prototype.statusCode=t,r.prototype.expose=!1,r}(t,r,o)}i&&(e[o]=i,e[r]=i)}))}(e.exports,a.codes,e.exports.HttpError)},61033:e=>{"function"===typeof Object.create?e.exports=function(e,o){o&&(e.super_=o,e.prototype=Object.create(o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,o){if(o){e.super_=o;var t=function(){};t.prototype=o.prototype,e.prototype=new t,e.prototype.constructor=e}}},29477:(e,o,t)=>{"use strict";var i=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("unable to locate global object")}();e.exports=o=i.fetch,i.fetch&&(o.default=i.fetch.bind(i)),o.Headers=i.Headers,o.Request=i.Request,o.Response=i.Response},40203:e=>{"use strict";e.exports=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,o){return e.__proto__=o,e}:function(e,o){for(var t in o)Object.prototype.hasOwnProperty.call(e,t)||(e[t]=o[t]);return e})},53910:(e,o,t)=>{"use strict";var i=t(17662);function r(e){if(!Object.prototype.hasOwnProperty.call(n.message,e))throw new Error("invalid status code: "+e);return n.message[e]}function n(e){if("number"===typeof e)return r(e);if("string"!==typeof e)throw new TypeError("code must be a number or string");var o=parseInt(e,10);return isNaN(o)?function(e){var o=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(n.code,o))throw new Error('invalid status message: "'+e+'"');return n.code[o]}(e):r(o)}e.exports=n,n.message=i,n.code=function(e){var o={};return Object.keys(e).forEach((function(t){var i=e[t],r=Number(t);o[i.toLowerCase()]=r})),o}(i),n.codes=function(e){return Object.keys(e).map((function(e){return Number(e)}))}(i),n.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},n.empty={204:!0,205:!0,304:!0},n.retry={502:!0,503:!0,504:!0}},51798:e=>{"use strict";e.exports=function(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join("").replace(/[^ _0-9a-z]/gi,"")}},42564:(e,o,t)=>{"use strict";t(29477),t(26340)},17662:e=>{"use strict";e.exports=JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a Teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Too Early","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')}}]);
//# sourceMappingURL=889.a4e211d8.chunk.js.map