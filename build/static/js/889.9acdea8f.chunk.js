/*! For license information please see 889.9acdea8f.chunk.js.LICENSE.txt */
(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[889],{4396:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>va});var i=t(82483),r=t(41190),n=t(42751),a=t(22829);const l=r.Ay.div`
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

`,f=(r.Ay.div`
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
`),m=(0,r.Ay)(a.LZ_)`
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
`,B=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;

`,O=r.Ay.div`
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
`;function W(e){let{categories:o,activeCategory:t,setactiveCategory:r,carouselPosition:n,setcarouselPosition:a}=e;const{restaurantName:l}=(0,y.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[d].activeLanguage})),p=(0,i.useRef)([]);return(0,i.useEffect)((()=>{p.current=p.current.slice(0,o.length)}),[o.length]),(0,i.useEffect)((()=>{p.current[n]&&p.current[n].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[n]),(0,N.jsxs)(R,{children:[(0,N.jsx)(D,{children:(0,N.jsx)(B,{children:null===o||void 0===o?void 0:o.sort(((e,o)=>o.priority-e.priority)).map(((e,o)=>(0,N.jsx)(O,{activeLanuguage:c,activeCategory:t,categoryId:e.id,onClick:()=>((e,o)=>{(0,P.c)(e),r(e),a(o)})(e.id,o),index:o,ref:e=>p.current[o]=e,children:(0,N.jsx)(U,{activeCategory:t,categoryId:e.id,children:(0,N.jsx)(q,{children:(0,N.jsx)(M,{activeCategory:t,categoryId:e.id,children:"en"===c?e.en_category||e.ar_category:e.ar_category||e.en_category})})})},e.id)))})}),(null===o||void 0===o?void 0:o.length)>4&&(0,N.jsx)(H,{onClick:()=>{n<o.length-4&&a(n+1)}})]})}function V(e){let{categories:o,activeCategory:t,setactiveCategory:i,carouselPosition:r,setcarouselPosition:n}=e;const{restaurantName:a}=(0,y.g)(),l=window.location.hostname.split(".")[0],s="menugic"!==l&&"localhost"!==l&&"www"!==l?l:a,d=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[s]}));return(0,N.jsxs)(N.Fragment,{children:["vertical-category"==d.category_type&&(0,N.jsx)(F,{categories:o,activeCategory:t,setactiveCategory:i,carouselPosition:r,setcarouselPosition:n}),"horizantal-withoutIcon"==d.category_type&&(0,N.jsx)(W,{categories:o,activeCategory:t,setactiveCategory:i,carouselPosition:r,setcarouselPosition:n})]})}var J=t(11671);const Y=r.Ay.div`
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

`,Q=r.Ay.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`,G=r.Ay.div`
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
`,te=(0,r.Ay)(J.IMk)`
color: ${e=>e.theme.mainColor};
font-size: 27px;

`;var ie=t(17123),re=t(90997);function ne(e){var o,t,r,n,l;let{setshowSidebar:s,showSidebar:d}=e;const{restaurantName:c}=(0,y.g)(),p=(0,i.useRef)(null),u=window.location.hostname.split(".")[0],h="menugic"!==u&&"localhost"!==u&&"www"!==u?u:c,x=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[h]})),g=(0,v.wA)(),f=(null===x||void 0===x?void 0:x.activeLanguage)||"en",m=e=>{g((0,ie.y)({name:h,activeLanguage:e}))};let b={};try{b=JSON.parse((null===x||void 0===x?void 0:x.features)||"{}")}catch(Qe){}return(0,N.jsxs)(Y,{children:[(0,N.jsx)(K,{src:(null===x||void 0===x?void 0:x.logoURL)&&`https://storage.googleapis.com/ecommerce-bucket-testing/${x.logoURL}`}),(0,N.jsxs)(X,{children:[(0,N.jsx)(Q,{children:(0,N.jsx)(te,{onClick:()=>{s(!d)}})}),(0,N.jsxs)(Q,{style:{gap:8},children:[!1!==(null===(o=b)||void 0===o?void 0:o.user_registration)&&(0,N.jsx)("div",{onClick:()=>{var e,o;return null===(e=p.current)||void 0===e||null===(o=e.toggle)||void 0===o?void 0:o.call(e)},style:{width:32,height:32,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",background:null!==x&&void 0!==x&&x.theme&&(null===(t=JSON.parse(x.theme))||void 0===t?void 0:t.languagebackground)||"#f0f0f0",color:null!==x&&void 0!==x&&x.theme&&(null===(r=JSON.parse(x.theme))||void 0===r?void 0:r.languageTextColor)||"#666",fontSize:16},children:(0,N.jsx)(a.SNd,{})}),"en&ar"===(null===x||void 0===x?void 0:x.languages)&&(0,N.jsxs)(G,{children:[(0,N.jsx)(Z,{}),(0,N.jsx)(ee,{activeLanguage:f}),(0,N.jsx)(oe,{activeLanguage:f,language:"en",onClick:()=>m("en"),children:"En"}),(0,N.jsx)(oe,{activeLanguage:f,language:"ar",onClick:()=>m("ar"),children:"Ar"})]})]})]}),!1!==(null===(n=b)||void 0===n?void 0:n.user_registration)&&(0,N.jsx)(re.A,{ref:p,restaurantName:h,restaurantId:null===x||void 0===x?void 0:x.id,activeLanguage:f,accentColor:null!==x&&void 0!==x&&x.theme&&(null===(l=JSON.parse(x.theme))||void 0===l?void 0:l.mainColor)||"#5eabb1"})]})}var ae=t(92733);function le(e){let{activeCategory:o,setactiveCategory:t,categories:i,setSearchText:r,searchText:n,setshowSidebar:a,showSidebar:l,carouselPosition:s,setcarouselPosition:d,popupHandler:c,showMenuSlider:b,sliderImages:w,hideHeaderTop:j=!1}=e;const{restaurantName:C}=(0,y.g)(),$=window.location.hostname.split(".")[0],A="menugic"!==$&&"localhost"!==$&&"www"!==$?$:C,k=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[A].activeLanguage}));return(0,N.jsxs)(p,{children:[!j&&(0,N.jsx)(ne,{setshowSidebar:a,showSidebar:l}),b&&(0,N.jsx)(ae.A,{images:w,activeLanguage:k||"en",variant:"theme2"}),(0,N.jsx)(V,{categories:i,activeCategory:o,setactiveCategory:t,carouselPosition:s,setcarouselPosition:d}),(0,N.jsxs)(u,{children:[(0,N.jsxs)(h,{children:[(0,N.jsx)(g,{activeLanguage:k}),(0,N.jsx)(x,{type:"text",activeLanguage:k,dir:"en"==k?"ltr":"rtl",placeholder:"en"==k?"Search Category":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{r(e.target.value)},value:n})]}),(0,N.jsxs)(f,{onClick:()=>{window.history.pushState({},""),c("share")},children:["en"==k&&(0,N.jsx)(m,{}),"en"==k?"Share":"\u0646\u0634\u0631","en"!==k&&(0,N.jsx)(m,{})]})]})]})}var se=t(99891),de=t(11222);const ce=r.Ay.div`
 width: 100%;
 margin-top: 10px;
 padding-bottom: 90px;
 display: flex;
 justify-content: center;
`,pe=r.Ay.div`
 flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: ${e=>e.$noMinHeight?"0":"70vh"};
  opacity: 1;
  transition:all 0.7s ease-in-out;
`,ue=(r.Ay.div`
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
`),he=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`,xe=r.Ay.h3`
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
`,ge=(r.Ay.button`
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
`),fe=r.Ay.div`
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
`,ve=r.Ay.button`
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
`,ye=r.Ay.div`
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
`,be=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,we=r.Ay.div`
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
`,je=r.Ay.div`
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
`,Ce=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,$e=r.Ay.h4`
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
`,Ae=r.Ay.div`
  font-size: 15px;
  font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#007bff"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${e=>"ar"===e.activeLanguage?"row-reverse":"row"};
`,ke=r.Ay.span`
  font-size: 14px;
  color: ${e=>e.theme.BoxPriceColor||e.theme.textColor||"#666"};
  text-decoration: line-through;
  opacity: 0.6;
`,ze=r.Ay.div`
  position: relative;
  width: 100%;
`,Se=r.Ay.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    @media (min-width: 1024px) {
        width: 20%;
    }
`,Te=r.Ay.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.theme.BoxColor};
    border-radius: 20px;
    position: relative;

    //cjhange loadeeerr wrappperr and this oneee colorrrr

`,_e=r.Ay.img`
width:90%;
height:100%;
object-fit: cover;
border-radius: 10px;
visibility: ${e=>e.imageLoaded?"visible":"hidden"};
/* display:${e=>e.imageLoaded?"block":"none"} */
`,Le=r.Ay.div`
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


`,Ie=r.Ay.div`
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

`,Pe=r.Ay.span`
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



`,Ee=r.Ay.div`
display: flex;
flex-direction: row;
gap:5px;
`,Ne=r.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;
text-decoration:${e=>e.discounted?"line-through":"none"};


`,Fe=r.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;

`,Re=r.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,De=r.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${Re} 1s linear infinite; /* Apply animation */
`,Be=r.Ay.div`
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
`,Ue=r.Ay.button`
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
`,qe=r.Ay.div`
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
`,Me=r.Ay.button`
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
`;var He=t(18907),We=t(86001),Ve=t(81132),Je=t(70268),Ye=t(81926),Xe=t(71481),Ke=t(2200);const Qe=t(34304),Ge=i.forwardRef(((e,o)=>{var t,r,n,l,s;let{plate:d,setactivePlate:c,activePlate:p,index:u,showPopup:h,setSearchParams:x,searchParams:g,activeCategoryId:f,categories:m,disableDetails:b,wishlistIds:w,onWishlistChange:j}=e;const{restaurantName:C}=(0,y.g)(),$=window.location.hostname.split(".")[0],A="menugic"!==$&&"localhost"!==$&&"www"!==$?$:C,k=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[A]})),z=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[A].activeLanguage})),S=(0,v.wA)(),[T,_]=(0,i.useState)(!1);let L={};try{L=JSON.parse((null===k||void 0===k?void 0:k.features)||"{}")}catch(Qe){}const I=Boolean(null===d||void 0===d?void 0:d.out_of_stock)||1===Number(null===d||void 0===d?void 0:d.out_of_stock),P=null===m||void 0===m?void 0:m.find((e=>e.id==f)),F=(()=>{try{var e,o,t,i;const r=null!==d&&void 0!==d&&d.form_json?JSON.parse(d.form_json):null;return r&&((null===(e=r.components)||void 0===e?void 0:e.length)>0||2===r.version&&((null===(o=r.sizes)||void 0===o?void 0:o.length)>0||(null===(t=r.addons)||void 0===t?void 0:t.length)>0||(null===(i=r.removals)||void 0===i?void 0:i.length)>0))}catch{return!1}})(),R=(0,i.useCallback)((e=>{const o=document.getElementById("cart-tab-icon");if(!o)return;const t=(null===e||void 0===e?void 0:e.currentTarget)||(null===e||void 0===e?void 0:e.target),i=t?t.getBoundingClientRect():null,r=o.getBoundingClientRect();if(!i)return;const n=(null===k||void 0===k?void 0:k.mainColor)||(null===k||void 0===k?void 0:k.maincolor)||"#a6ce39",a=i.left+i.width/2,l=i.top+i.height/2,s=r.left+r.width/2,d=r.top+r.height/2,c=document.createElement("div");c.style.cssText=`\n        position: fixed;\n        left: ${a-14}px;\n        top: ${l-14}px;\n        width: 28px; height: 28px;\n        border-radius: 50%;\n        background: ${n};\n        box-shadow: 0 4px 15px ${n}88, 0 2px 6px rgba(0,0,0,0.3);\n        z-index: 99999;\n        pointer-events: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      `,c.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>',document.body.appendChild(c);const p=document.createElement("div");p.style.cssText=`\n        position: fixed;\n        left: ${a-10}px;\n        top: ${l-10}px;\n        width: 20px; height: 20px;\n        border-radius: 50%;\n        background: ${n}55;\n        z-index: 99998;\n        pointer-events: none;\n      `,document.body.appendChild(p);const u=(a+s)/2+(a>s?60:-60),h=Math.min(l,d)-120,x=c.animate([{left:a-14+"px",top:l-14+"px",width:"28px",height:"28px",opacity:1,transform:"scale(1)"},{left:u-12+"px",top:h-12+"px",width:"24px",height:"24px",opacity:1,transform:"scale(1.1)",offset:.35},{left:s-8+"px",top:d-8+"px",width:"16px",height:"16px",opacity:.6,transform:"scale(0.6)"}],{duration:650,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"});p.animate([{left:a-10+"px",top:l-10+"px",width:"20px",height:"20px",opacity:.5},{left:u-8+"px",top:h-8+"px",width:"16px",height:"16px",opacity:.3,offset:.4},{left:s-4+"px",top:d-4+"px",width:"8px",height:"8px",opacity:0}],{duration:700,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"}),x.onfinish=()=>{c.remove(),p.remove();(o.closest("[data-tab]")||o.parentElement||o).animate([{transform:"scale(1)"},{transform:"scale(1.35)",offset:.25},{transform:"scale(0.85)",offset:.5},{transform:"scale(1.15)",offset:.75},{transform:"scale(1)"}],{duration:500,easing:"ease-out"})}}),[k]),D=(0,Ke.Q)(null===k||void 0===k?void 0:k.currency),B=(0,Je.wU)(A),O=w&&"function"===typeof w.has&&w.has(d.id);let U;U=0===parseFloat(null===P||void 0===P?void 0:P.discount)?parseFloat(d.discount):parseFloat(P.discount);const q=null!==(t=null===(r=d.images)||void 0===r?void 0:r.findIndex((e=>e.id===d.new_cover_id)))&&void 0!==t?t:-1,M=q>=0&&(null===(n=d.images)||void 0===n||null===(l=n[q])||void 0===l?void 0:l.url),H=null!==k&&void 0!==k&&k.logoURL?(0,E.V)(k.logoURL):null,W=M?(0,E.V)(d.images[q].url):H||"";return(0,N.jsx)(Se,{index:u,activePlate:p,className:"lazy-load",children:(0,N.jsxs)(Te,{children:[!T&&(0,N.jsx)(Be,{children:(0,N.jsx)(De,{})}),(0,N.jsxs)(Le,{onClick:()=>{if(null==p&&T&&!h){b||c(u);const e=new URLSearchParams(g);e.set("productId",null===d||void 0===d?void 0:d.id),f&&e.set("categoryId",f),x(e),window.history.pushState({},"",`?${e.toString()}`),document.body.style.overflow="hidden"}},children:[d.new&&(0,N.jsx)(Oe,{children:"en"===(null===k||void 0===k?void 0:k.activeLanguage)?"NEW !":"! \u062c\u062f\u064a\u062f"}),(0,N.jsx)(_e,{ref:o,onLoad:()=>{_(!0)},src:W,imageLoaded:T}),B&&(0,N.jsx)(Me,{type:"button",activeLanuguage:null===k||void 0===k?void 0:k.activeLanguage,$filled:O,onClick:e=>{e&&(e.preventDefault(),e.stopPropagation()),B&&null!==d&&void 0!==d&&d.id&&(async()=>{try{O?await de.A.delete((0,Ve.Vr)(d.id),{headers:{Authorization:`Bearer ${B}`}}):await de.A.post(Ve.Vb,{product_id:d.id},{headers:{Authorization:`Bearer ${B}`}}),null===j||void 0===j||j()}catch(e){console.error("Wishlist error:",e)}})()},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchStart:e=>e.stopPropagation(),children:(0,N.jsx)(a.phF,{size:16})}),!1!==(null===(s=L)||void 0===s?void 0:s.cart)&&(I?(0,N.jsx)(qe,{activeLanuguage:z,children:"en"===z?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631"}):(0,N.jsx)(Ue,{onClick:e=>{var o,t;if(e&&(e.preventDefault(),e.stopPropagation()),!1===(null===(o=L)||void 0===o?void 0:o.cart)||I)return;if(!0===(null===(t=L)||void 0===t?void 0:t.quick_add_requires_options)&&F){if(null==p&&!h){b||c(u);const e=new URLSearchParams(g);e.set("productId",null===d||void 0===d?void 0:d.id),f&&e.set("categoryId",f),x(e),window.history.pushState({},"",`?${e.toString()}`),document.body.style.overflow="hidden"}return}const i=(parseFloat((null===d||void 0===d?void 0:d.en_price)||"0")||0)*(1-(0===parseFloat(null===P||void 0===P?void 0:P.discount)?parseFloat((null===d||void 0===d?void 0:d.discount)||0):parseFloat((null===P||void 0===P?void 0:P.discount)||0))/100);var r,n;(S((0,We.bE)(A,d,1,{},i,"")),null!==k&&void 0!==k&&k.id&&null!==d&&void 0!==d&&d.id)&&(0,Ye.trackAddToCart)(k.id,d.id,f,1,(null===k||void 0===k||null===(r=k.branches)||void 0===r||null===(n=r[0])||void 0===n?void 0:n.id)||null);R(e)},onMouseDown:e=>e.stopPropagation(),activeLanuguage:z,children:(0,N.jsx)(Xe._xK,{size:12})}))]}),(0,N.jsxs)(Ie,{activeLanuguage:null===k||void 0===k?void 0:k.activeLanguage,children:[(0,N.jsx)(Pe,{fontSize:null===k||void 0===k?void 0:k.font_size,children:"en"===(null===k||void 0===k?void 0:k.activeLanguage)?d.en_name||d.ar_name:d.ar_name||d.en_name}),!Qe.isEmpty(d.en_price)&&(0,N.jsxs)(Ee,{children:[(0,N.jsx)(Ne,{discounted:0!=U,children:(0,He.T)(parseFloat(d.en_price),D)}),(0,N.jsx)(Fe,{children:0!=U&&(0,He.T)(parseFloat(d.en_price)*(1-parseFloat(U)/100),D)})]})]})]})})}));var Ze=t(99998),eo=t(10448),oo=t(34304),to=t.n(oo);const io=r.Ay.div`
  
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

`,ro=r.i7`
 0% {
    height:20vh;
    top:0px;
}

 100% {
    height:45vh;
    top:10px;

    }
`,no=(r.i7`
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
`),ao=r.Ay.div`
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
`,lo=r.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
`,so=r.Ay.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  flex-shrink: 0;
`,co=r.Ay.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,po=r.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,uo=r.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${po} 1s linear infinite; /* Apply animation */
`,ho=r.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,xo=r.Ay.img`
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
`,go=r.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,fo=(0,r.Ay)(eo.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,mo=(0,r.Ay)(eo.m6W)`
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
`,vo=(0,r.Ay)(eo.OQo)`
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
`,yo=r.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${go} 0.4s ease-in-out;
`,bo=r.Ay.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
  margin-top: 10px !important;
`,wo=r.i7`
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
`,jo=r.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${wo} 1s ease-in-out;
`,Co=(r.Ay.div`
  width:90%;
  /* height: ${e=>e.CloseAnimation?"45vh":"25vh"}; */
  height: ${e=>e.squareDimension?"45vh":"60vh"};

  border-radius:40px;
  margin-top: 0px;
  display:flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${ro} 0.4s;
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
`),$o=r.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ao=r.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${Co} 0.8s ease-in-out;

`,ko=r.Ay.div`
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
`,zo=r.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:${e=>"en"==e.activeLanguage?"left":"right"} ;
  opacity: 1;
  margin-top: 5px;
`,So=r.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,To=r.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,_o=r.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,Lo=r.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,Io=r.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,Po=r.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,Eo=r.Ay.div`
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
`,No=r.Ay.button`
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
`,Fo=r.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,Ro=r.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,Do=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Bo=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Oo=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,Uo=r.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,qo=r.Ay.div`
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
  animation: ${Uo} 0.4s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,Mo=r.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`,Ho=r.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,Wo=r.Ay.input`
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

`,Vo=r.Ay.button`
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
`,Jo=r.Ay.div`
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
`,Yo=r.Ay.button`
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
`,Xo=r.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`,Ko=r.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display: flex;
`,Qo=r.Ay.div`
display: flex;
flex-direction: row;
`,Go=r.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,Zo=r.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,et=r.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,ot=r.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,tt=r.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,it=r.Ay.span`
position: absolute;
left: 0;

`,rt=r.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,nt=(0,r.Ay)(n.Z0P)`
    animation:1.2s ${rt}  linear infinite ;
    position: absolute;
`;function at(e){let{carouselIndex:o,images:t,CloseAnimation:i,carouselSwiped:r}=e;return(0,N.jsxs)(Ko,{CloseAnimation:i,children:[(0,N.jsxs)(Qo,{children:[(0,N.jsx)(Go,{carouselIndex:o,children:(0,N.jsx)(Zo,{})}),t.map((e=>(0,N.jsx)(et,{children:(0,N.jsx)(ot,{})})))]}),!r&&(0,N.jsxs)(tt,{children:[(0,N.jsx)(it,{children:"Swipe"}),(0,N.jsx)(nt,{})]})]})}r.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,r.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const lt=r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,st=(r.Ay.label`
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
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(to().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`),dt=r.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,ct=r.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,pt=r.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let o=e.theme.formColor;if(to().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.1)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.1)`)):o}};
  font-size:10px;

`,ut=r.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,ht=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${e=>e.theme.formColor};

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);var xt=t(41235);function gt(e){let{component:o,formData:t,handleChange:r,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(t[o.key]||[]);return(0,N.jsxs)(st,{index:n,children:[(0,N.jsx)(lt,{children:o.label}),o.values.map((e=>(0,N.jsxs)(ct,{children:[s.some((o=>o===e.label))?(0,N.jsx)(ut,{onClick:()=>{(e=>{let t=s.filter((o=>o!==e.label));d(t),r(o.key,t)})(e)},children:(0,N.jsx)(xt.RXm,{size:"15px"})}):(0,N.jsx)(pt,{onClick:()=>{(e=>{d([...s,e.label]),r(o.key,[...s,e.label])})(e)},children:(0,N.jsx)(Xe.OiG,{})}),(0,N.jsx)(dt,{children:e.label})]}))),(c=a,c in l?(0,N.jsx)(ht,{children:"This field is required"}):null)]});var c}const ft=r.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(to().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`,mt=r.Ay.div`
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
`,vt=r.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,yt=r.Ay.ul`
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

`,bt=r.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,wt=r.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,jt=r.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,Ct=r.Ay.div`
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
`,$t=(r.Ay.label`
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

`);function At(e){var o;let{component:t,formData:r,handleChange:n,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;console.log(s),console.log(d);const[c,p]=(0,i.useState)(!1),[u,h]=(0,i.useState)((null===(o=r[t.key])||void 0===o?void 0:o.value)||""),x=(0,i.useRef)(null),g=e=>{h(e.label),p(!1),n(t.key,e)},f=e=>{x.current&&!x.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f))),[]),(0,N.jsxs)(ft,{ref:x,index:l,children:[(0,N.jsx)(lt,{children:t.label}),t.data.values.length>8?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(mt,{onClick:()=>p((e=>!e)),children:[u||a,(0,N.jsx)(vt,{className:c?"up":"",children:"\u25bc"})]}),(0,N.jsx)(yt,{isOpen:c,children:t.data.values.map(((e,o)=>(0,N.jsx)(bt,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},o)))})]}):(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(wt,{children:t.data.values.map(((e,o)=>(0,N.jsx)(jt,{children:(0,N.jsx)(Ct,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(m=s,m in d?(0,N.jsx)($t,{children:"This field is required"}):null)]});var m}const kt=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var o;let t=null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.formColor;if(to().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,o)=>`rgba(${o.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`,zt=r.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,St=r.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Tt=r.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,_t=r.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,Lt=(r.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,r.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function It(e){let{component:o,formData:t,handleChange:r,index:n,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(t[o.key]||"");return(0,N.jsxs)(kt,{index:n,children:[(0,N.jsx)(lt,{children:o.label}),o.values.map((e=>(0,N.jsxs)(St,{children:[(0,N.jsx)(Tt,{onClick:()=>{(e=>{d(e),r(o.key,e)})(e)},children:(0,N.jsx)(_t,{selected:s.label==e.label})}),(0,N.jsx)(zt,{children:e.label})]}))),(c=a,c in l?(0,N.jsx)(Lt,{children:"This field is required"}):null)]});var c}function Pt(e){let{formSchema:o,onPriceChange:t,basePrice:r,formData:n,setFormData:a,finalDiscount:l,formErrors:s}=e;(0,i.useEffect)((()=>{c(n)}),[n]);const d=(e,o)=>{a((t=>({...t,[e]:o})))},c=e=>{let i=parseFloat(r)||0,n=0;null===o||void 0===o||o.components.forEach((o=>{if(e[o.key])if("selectboxes"===o.type&&o.values)e[o.key].forEach((e=>{const t=o.values.find((o=>o.label===e)),i=!isNaN(Number(t.value));t&&t.value&&i&&(t.value.startsWith("+")?n+=parseFloat(t.value.slice(1)):t.value.startsWith("-")&&(n-=parseFloat(t.value.slice(1))))}));else if("select"===o.type&&o.data&&o.data.values){const t=o.data.values.find((t=>{var i;return t.value===(null===(i=e[o.key])||void 0===i?void 0:i.value)})),r=!isNaN(Number(t.value));t&&r&&(t.value.startsWith("+")?n+=parseFloat(t.value.slice(1)):t.value.startsWith("-")?n-=parseFloat(t.value.slice(1)):i=parseFloat(t.value))}else if("radio"===o.type&&o.values){const t=o.values.find((t=>{var i;return t.value===(null===(i=e[o.key])||void 0===i?void 0:i.value)})),r=!isNaN(Number(t.value));t&&r&&(t.value.startsWith("+")?n+=parseFloat(t.value.slice(1)):t.value.startsWith("-")?n-=parseFloat(t.value.slice(1)):i=parseFloat(t.value))}}));const a=i+n,l=a%1!==0?a.toFixed(2):a.toFixed(0);t(l)};return(0,N.jsx)("form",{style:{width:"100%"},children:null===o||void 0===o?void 0:o.components.map(((e,o)=>((e,o)=>{switch(e.type){case"selectboxes":return console.log(e.key),(0,N.jsx)(gt,{component:e,formData:n,handleChange:d,index:o,componentKey:e.key,formErrors:s});case"select":return console.log(e.key),(0,N.jsx)(At,{component:e,formData:n,handleChange:d,index:o,componentKey:e.key,formErrors:s});case"radio":return(0,N.jsx)(It,{component:e,formData:n,handleChange:d,index:o,componentKey:e.key,formErrors:s});default:return null}})(e,o)))})}var Et=t(42770),Nt=t(73556),Ft=(t(20965),t(16104)),Rt=t(88620),Dt=t(57526);t(44014),t(70045),t(5084);const Bt=t(34304);function Ot(e){var o,t,r,n,l,s,d,c,p,u,h,x,g,f,m;let{activePlate:w,setactivePlate:j,menu:C,plates:$,productPositions:A,categories:k,activeCategoryId:z,setSearchParams:S,searchParams:T}=e;const{restaurantName:_}=(0,y.g)(),L=window.location.hostname.split(".")[0],I="menugic"!==L&&"localhost"!==L&&"www"!==L?L:_,P=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[I]})),F=k.find((e=>e.id==z)),{response:R}=(0,Ft.$)({productId:null===(o=$[w])||void 0===o?void 0:o.id});(0,i.useEffect)((()=>{var e;let o=null;var t,i;Bt.isEmpty(null===(e=$[w])||void 0===e?void 0:e.form_json)||(o=Bt.isEmpty(JSON.parse(null===(t=$[w])||void 0===t?void 0:t.form_json))?null===F||void 0===F?void 0:F.form_json:null===(i=$[w])||void 0===i?void 0:i.form_json);if(Bt.isEmpty(o))B({});else{var r;const e=JSON.parse(o);if(B(e),2===(null===e||void 0===e?void 0:e.version)&&(null===e||void 0===e||null===(r=e.sizes)||void 0===r?void 0:r.length)>0){var n;const o=parseFloat(null===(n=$[w])||void 0===n?void 0:n.en_price)||0,t=e.sizes.find((e=>"absolute"===e.priceMode&&Number(e.priceModifier)===o));U((()=>({...(0,Nt.KE)(),sizeId:t?t.id:e.sizes[0].id})))}}}),[P.activeLanguage]);const[D,B]=(0,i.useState)({}),[O,U]=(0,i.useState)({}),[q,M]=(0,i.useState)({}),H=(0,v.wA)(),[W,V]=(0,i.useState)(1),[J,Y]=(0,i.useState)(!1),X=(0,i.useRef)(null),[K,Q]=(0,i.useState)(!1),[G,Z]=(0,i.useState)(1),[ee,oe]=(0,i.useState)({x:0,y:0}),[te,ie]=(0,i.useState)(!1),re=(0,i.useRef)(null),ne=(0,i.useRef)(null),ae=(0,i.useRef)(0),le=parseFloat(null===F||void 0===F?void 0:F.discount)||0,se=parseFloat(null===(t=$[w])||void 0===t?void 0:t.discount)||0,de=0===le?se:le,ce=(null===(r=$[w])||void 0===r?void 0:r.en_price)||"0",pe=parseFloat(ce)||0,ue=pe%1!==0?pe.toFixed(2):pe.toFixed(0),[he,xe]=(0,i.useState)(pe),[ge,fe]=(0,i.useState)(""),me=e=>{xe(parseFloat(e)||0)},[ve,ye]=(0,i.useState)(!0),[be,we]=(0,i.useState)(0),je=()=>{setTimeout((()=>{j(null),document.body.style.overflow="auto"}),700),ye(!1),T.delete("productId"),S(T)},[Ce,$e]=(0,i.useState)(!1),Ae=()=>{Y(!0),we(be+1)},ke=()=>{Y(!0),we(be-1)},ze=(0,i.useRef)(null),[Se,Te]=(0,i.useState)(null),_e=()=>{Z(1),oe({x:0,y:0}),Q(!0)};(0,i.useEffect)((()=>{const e=()=>{je()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const Le=2===(null===D||void 0===D?void 0:D.version)&&Array.isArray(null===D||void 0===D?void 0:D.sizes);const Ie=null!==P&&void 0!==P&&P.logoURL?(0,E.V)(P.logoURL):null;let Pe=[...null!==(n=null===(l=$[w])||void 0===l?void 0:l.images)&&void 0!==n?n:[]];0===Pe.length&&Ie&&(Pe=[{id:"fallback-logo",url:P.logoURL,isFallback:!0}]);const Ee=Pe.findIndex((e=>{var o;return e.id===(null===(o=$[w])||void 0===o?void 0:o.new_cover_id)}));if(Ee>0){const[e]=Pe.splice(Ee,1);Pe.unshift(e)}const[Ne,Fe]=(0,i.useState)({}),Re=e=>{Fe((o=>({...o,[e]:!0})))},De="en"===(null===P||void 0===P?void 0:P.activeLanguage)?null===(s=$[w])||void 0===s?void 0:s.en_description:null===(d=$[w])||void 0===d?void 0:d.ar_description,Be=(0,Ke.Q)(null===P||void 0===P?void 0:P.currency);let Oe=JSON.parse(P.features);const Ue=Boolean(null===(c=$[w])||void 0===c?void 0:c.out_of_stock)||1===Number(null===(p=$[w])||void 0===p?void 0:p.out_of_stock),qe=(null===P||void 0===P?void 0:P.product_details_carousel_style)||"normal";return(0,Ze.createPortal)((0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(io,{CloseAnimation:ve,children:[(0,N.jsx)(bo,{CloseAnimation:ve,children:(0,N.jsx)(jo,{children:"en"==P.activeLanguage?null===C||void 0===C?void 0:C.en_category:null===C||void 0===C?void 0:C.ar_category})}),(0,N.jsx)(no,{squareDimension:null===(u=$[w])||void 0===u?void 0:u.square_dimension,CloseAnimation:ve,isNormalCarousel:"normal"===qe,children:1===Pe.length?(0,N.jsx)(lo,{carouselIndex:0,children:(0,N.jsx)(so,{children:(0,N.jsxs)(co,{children:[!Ne[0]&&(0,N.jsx)(ho,{children:(0,N.jsx)(uo,{})}),(0,N.jsx)(xo,{src:Pe[0].url?(0,E.V)(Pe[0].url):Ie||"",onLoad:()=>Re(0),onError:e=>{Ie&&e.target.src!==Ie&&(e.target.src=Ie)},CloseAnimation:ve,Loaded:Ne[0],alt:"Image 0"}),(0,N.jsx)(Vo,{onClick:_e,children:(0,N.jsx)(b.gff,{})})]})})}):"normal"===qe?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(mo,{CloseAnimation:ve,onClick:()=>{Y(!0),0!==be&&ke()}}),(0,N.jsx)(vo,{CloseAnimation:ve,onClick:()=>{Y(!0),Pe.length>be+1&&Ae()}}),(0,N.jsx)(lo,{carouselIndex:be,ref:ze,onTouchStart:e=>{Te(e.touches[0].clientX)},onTouchMove:e=>{if(Se){const o=e.touches[0].clientX-Se;o>5?0!==be&&ke():o<-5&&Pe.length>be+1&&Ae(),Te(null)}},children:Pe.map(((e,o)=>(0,N.jsx)(so,{children:(0,N.jsxs)(co,{children:[!Ne[o]&&(0,N.jsx)(ho,{children:(0,N.jsx)(uo,{})}),(0,N.jsx)(xo,{src:Ne[o]||o===be?e.url?(0,E.V)(e.url):Ie||"":"",onLoad:()=>Re(o),onError:e=>{Ie&&e.target.src!==Ie&&(e.target.src=Ie)},CloseAnimation:ve,Loaded:Ne[o],alt:`Image ${o}`}),be===o&&(0,N.jsx)(Vo,{onClick:_e,children:(0,N.jsx)(b.gff,{})})]})},e.id||o)))})]}):"effect-cards"===qe?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(mo,{CloseAnimation:ve,onClick:()=>X.current&&X.current.slidePrev()}),(0,N.jsx)(ao,{children:(0,N.jsx)(Rt.RC,{modules:[Dt.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{X.current=e},onSlideChange:e=>{we(e.realIndex),Y(!0)},children:Pe.map(((e,o)=>(0,N.jsx)(Rt.qr,{children:(0,N.jsxs)(co,{children:[!Ne[o]&&(0,N.jsx)(ho,{children:(0,N.jsx)(uo,{})}),(0,N.jsx)(xo,{src:Ne[o]||o===be?e.url?(0,E.V)(e.url):Ie||"":"",onLoad:()=>Re(o),onError:e=>{Ie&&e.target.src!==Ie&&(e.target.src=Ie)},CloseAnimation:ve,Loaded:Ne[o],$cardSlide:!0,alt:`Image ${o}`}),be===o&&(0,N.jsx)(Vo,{onClick:_e,children:(0,N.jsx)(b.gff,{})})]})},e.id||o)))},null===(h=$[w])||void 0===h?void 0:h.id)}),(0,N.jsx)(vo,{CloseAnimation:ve,onClick:()=>X.current&&X.current.slideNext()})]}):(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(ao,{children:(0,N.jsx)(Rt.RC,{onSwiper:e=>{X.current=e},onSlideChange:e=>{we(e.realIndex),Y(!0)},modules:[Dt.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:Pe.map(((e,o)=>(0,N.jsx)(Rt.qr,{children:(0,N.jsxs)(co,{children:[!Ne[o]&&(0,N.jsx)(ho,{children:(0,N.jsx)(uo,{})}),(0,N.jsx)(xo,{src:Ne[o]||o===be?e.url?(0,E.V)(e.url):Ie||"":"",onLoad:()=>Re(o),onError:e=>{Ie&&e.target.src!==Ie&&(e.target.src=Ie)},CloseAnimation:ve,Loaded:Ne[o],$cardSlide:!0,alt:`Image ${o}`}),be===o&&(0,N.jsx)(Vo,{onClick:_e,children:(0,N.jsx)(b.gff,{})})]})},e.id||o)))},null===(x=$[w])||void 0===x?void 0:x.id)})})}),1!==Pe.length&&(0,N.jsx)(at,{images:Pe,carouselIndex:be,CloseAnimation:ve,carouselSwiped:J}),(0,N.jsx)($o,{children:(0,N.jsx)(Ao,{children:(0,N.jsxs)(ko,{CloseAnimation:ve,activeLanguage:P.activeLanguage,children:[(0,N.jsx)(zo,{activeLanguage:P.activeLanguage,children:"en"==P.activeLanguage?null===(g=$[w])||void 0===g?void 0:g.en_name:null===(f=$[w])||void 0===f?void 0:f.ar_name}),!Bt.isEmpty(null===(m=$[w])||void 0===m?void 0:m.en_price)&&(0,N.jsxs)(_o,{children:[(0,N.jsx)(Lo,{activeLanguage:P.activeLanguage,discounted:0!=de,children:(0,He.T)(he,Be)}),0!=de&&(0,N.jsx)(Io,{activeLanguage:P.activeLanguage,children:(0,He.T)(he*(1-parseFloat(de)/100),Be)})]}),!Bt.isEmpty(De)&&(0,N.jsx)(So,{activeLanguage:P.activeLanguage,dangerouslySetInnerHTML:{__html:De}}),Ue&&(0,N.jsx)(To,{children:"en"===P.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),Le&&(0,N.jsx)(Et.A,{options:D,formData:O,setFormData:U,formErrors:q,activeLanguage:P.activeLanguage,basePrice:ue,onPriceChange:me}),!Le&&(null===D||void 0===D?void 0:D.components)&&(0,N.jsx)(Pt,{formSchema:D,onPriceChange:me,formData:O,setFormData:U,basePrice:ue,formErrors:q}),(0,N.jsxs)(Mo,{activeLanguage:P.activeLanguage,children:[(0,N.jsx)(Ho,{children:"en"==P.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,N.jsx)(Wo,{activeLanguage:P.activeLanguage,onChange:e=>fe(e.target.value),placeholder:"en"==P.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(null===Oe||void 0===Oe?void 0:Oe.cart)&&!Ue&&(0,N.jsxs)(Eo,{CloseAnimation:ve,children:[(0,N.jsxs)(Ro,{CloseAnimation:ve,children:[(0,N.jsx)(Do,{onClick:()=>{V(W+1)},children:"+"}),(0,N.jsx)(Oo,{children:W}),(0,N.jsx)(Bo,{onClick:()=>{W>1&&V(W-1)},children:"-"})]}),(0,N.jsxs)(No,{onClick:()=>{if(Le){var e;const o={};if((null===(e=D.sizes)||void 0===e?void 0:e.length)>0&&(null===O||void 0===O||!O.sizeId)&&(o.size="Please select a size."),Object.keys(o).length>0)return void M(o)}else if("{}"!==JSON.stringify(D)){const e=function(e,o){const t={},i=function(e){return e.components.filter((e=>{var o;return null===(o=e.validate)||void 0===o?void 0:o.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in o&&0!==(null===(i=o[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(o[e])||(t[e]="This field is required.")})),t}(D,O);if(Object.keys(e).length>0)return void M(e)}let o=he*(1-parseFloat(de)/100);setTimeout((()=>{j(null),document.body.style.overflow="auto"}),800),H((0,We.bE)(I,$[w],W,O,o,ge)),ye(!1),V(1),M({})},children:["en"==P.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",he>0&&(0,N.jsx)(Fo,{children:(0,He.T)(W*(he*(1-de/100)),Be)})]})]})]}),(0,N.jsx)(yo,{onClick:je,CloseAnimation:ve,children:(0,N.jsx)(fo,{})}),(0,N.jsx)(qo,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),$e(!0),setTimeout((()=>{$e(!1)}),4e3)},CloseAnimation:ve,children:Ce?(0,N.jsx)(xt.RXm,{}):(0,N.jsx)(Xe.zU_,{})}),K&&(0,N.jsxs)(Jo,{onTouchStart:e=>{if(2===e.touches.length){const o=e.touches[0].clientX-e.touches[1].clientX,t=e.touches[0].clientY-e.touches[1].clientY;ne.current=Math.hypot(o,t)}else if(1===e.touches.length){const o=Date.now();o-ae.current<300&&(Z((e=>e>1?1:2.5)),oe({x:0,y:0})),ae.current=o,re.current={x:e.touches[0].clientX,y:e.touches[0].clientY},ie(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const o=e.touches[0].clientX-e.touches[1].clientX,t=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(o,t);if(ne.current){const e=i/ne.current;Z((o=>Math.min(Math.max(o*e,1),5)))}ne.current=i}else if(1===e.touches.length&&te&&G>1){const o=e.touches[0].clientX-re.current.x,t=e.touches[0].clientY-re.current.y;oe((e=>({x:e.x+o,y:e.y+t}))),re.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{ne.current=null,ie(!1)},children:[(0,N.jsx)(Yo,{onClick:()=>Q(!1),children:(0,N.jsx)(a.$8F,{})}),(0,N.jsx)(Xo,{src:(()=>{const e=Pe[be];return e?e.url?(0,E.V)(e.url):Ie||"":""})(),style:{transform:`scale(${G}) translate(${ee.x/G}px, ${ee.y/G}px)`},alt:"Zoom"})]})]}),document.body)}var Ut=t(9328),qt=t(32415),Mt=t(73422);const Ht=t(34304);function Wt(e){var o,t,r;let{menu:n,activeCategory:a,showPopup:l,searchText:s,carouselPosition:d,setcarouselPosition:c,setactiveCategory:p,categories:u}=e;const[h,x]=(0,i.useState)(null),[g,f]=(0,se.ok)(),{restaurantName:m}=(0,y.g)(),b=window.location.hostname.split(".")[0],w="menugic"!==b&&"localhost"!==b&&"www"!==b?b:m,j=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[w].activeLanguage})),C=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[w]})),$=(0,v.wA)(),[A,k]=(0,i.useState)((()=>new Set)),z=(0,i.useCallback)((async()=>{const e=(0,Je.wU)(w);if(e)try{const{data:o}=await de.A.get(Ve.Vb,{headers:{Authorization:`Bearer ${e}`}}),t=(Array.isArray(o)?o:[]).map((e=>e.id));k(new Set(t))}catch{k(new Set)}else k(new Set)}),[w]);(0,i.useEffect)((()=>{z()}),[z]);const[S,T]=(0,i.useState)([]),[_,L]=(0,i.useState)([]),I=(0,i.useRef)(),P=(0,i.useRef)(),F="all-items"===a,R=(null===C||void 0===C?void 0:C.all_items_style)||"grid",D=a&&!F?String(a):null,{data:B,fetchNextPage:O,hasNextPage:U,isFetchingNextPage:q}=(0,Ut.w)(D),{data:M,fetchNextPage:H,hasNextPage:W,isFetchingNextPage:V}=(0,qt.u)(F?null===C||void 0===C?void 0:C.id:null),J=(null===M||void 0===M||null===(o=M.pages)||void 0===o?void 0:o.flat())||[],Y=()=>{const e=null===_||void 0===_?void 0:_.map((e=>{if(e.current){var o;const t=null===(o=e.current)||void 0===o?void 0:o.getBoundingClientRect();return{x:t.left,y:t.top,width:t.width}}return null}));T(e)};(0,i.useEffect)((()=>{g.get("productId")&&x(null)}),[g]),(0,i.useEffect)((()=>{Y()}),[_]),(0,i.useEffect)((()=>{var e;if(n&&null!==a&&(null===B||void 0===B||null===(e=B.pages)||void 0===e?void 0:e.flat().length)>0){var o,t;const e=null===B||void 0===B||null===(o=B.pages)||void 0===o||null===(t=o.flat())||void 0===t?void 0:t.filter((e=>(e["en"===j?"en_name":"ar_name"]||e.en_name||e.ar_name||"").toLowerCase().includes(s.toLowerCase()))).map((()=>i.createRef()));L(e)}}),[n,a,s,B]),(0,i.useEffect)((()=>{const e=()=>{Y()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[_]),(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&U&&!q&&O()}),{threshold:.1});return I.current&&e.observe(I.current),()=>{I.current&&e.unobserve(I.current)}}),[U,q,O]),(0,i.useEffect)((()=>{if(!F)return;const e=new IntersectionObserver((e=>{e[0].isIntersecting&&W&&!V&&H()}),{threshold:.2});return P.current&&e.observe(P.current),()=>{P.current&&e.unobserve(P.current)}}),[H,W,F,V]);const X=(null===B||void 0===B||null===(t=B.pages)||void 0===t||null===(r=t.flat())||void 0===r?void 0:r.filter((e=>!(Boolean(null===e||void 0===e?void 0:e.hide)||1===Number(null===e||void 0===e?void 0:e.hide))&&(e["en"===j?"en_name":"ar_name"]||e.en_name||e.ar_name||"").toLowerCase().includes(s.toLowerCase()))))||[],K=i.useMemo((()=>{if(!F)return[];return(u||[]).filter((e=>!e.isAllItems)).sort(((e,o)=>(o.priority||0)-(e.priority||0)||(e.id||0)-(o.id||0))).map((e=>{const o=J.filter((o=>{if(Boolean(null===o||void 0===o?void 0:o.hide)||1===Number(null===o||void 0===o?void 0:o.hide))return!1;if(o.category_id!=e.id)return!1;const t=o["en"===j?"en_name":"ar_name"]||"";return!s||function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase().includes(s.toLowerCase())}(t)})).sort(((e,o)=>(o.priority||0)-(e.priority||0)||(e.id||0)-(o.id||0)));return{category:e,items:o}})).filter((e=>e.items.length>0))}),[j,J,u,F,s]);console.log(X);const[Q,G]=(0,i.useState)(d),[Z,ee]=(0,i.useState)(!1),[oe,te]=(0,i.useState)(u.length<4?3:4);(0,i.useRef)(0),(0,i.useRef)(0);return(0,i.useEffect)((()=>{G(u.findIndex((e=>e.id==a)))}),[a]),(0,i.useEffect)((()=>{F&&x(null)}),[F]),(0,N.jsx)(ce,{activeCategory:a,children:F?(0,N.jsxs)(ue,{children:[K.map((e=>(0,N.jsxs)(he,{children:[(0,N.jsx)(xe,{activeLanguage:j,children:"en"===j?e.category.en_category:e.category.ar_category}),"list"===R?(0,N.jsx)(be,{children:e.items.map(((e,o)=>{var t,i,r,n;const a=u.find((o=>o.id==e.category_id));let l;l=a&&0!==parseFloat(a.discount||0)?parseFloat(a.discount||0):parseFloat(e.discount||0);const s=0!==l?parseFloat(e.en_price)*(1-parseFloat(l)/100):parseFloat(e.en_price),d=(0,Ke.Q)(null===C||void 0===C?void 0:C.currency),c=null!==(t=null===(i=e.images)||void 0===i?void 0:i.findIndex((o=>o.id==e.new_cover_id)))&&void 0!==t?t:0,p=null===(r=e.images)||void 0===r||null===(n=r[c])||void 0===n?void 0:n.url,h=JSON.parse((null===C||void 0===C?void 0:C.features)||"{}"),x=Boolean(null===e||void 0===e?void 0:e.out_of_stock)||1===Number(null===e||void 0===e?void 0:e.out_of_stock),m=!Ht.isEmpty(null===e||void 0===e?void 0:e.form_json)&&!Ht.isEmpty(JSON.parse((null===e||void 0===e?void 0:e.form_json)||"{}")),v=!Ht.isEmpty(null===a||void 0===a?void 0:a.form_json)&&!Ht.isEmpty(JSON.parse((null===a||void 0===a?void 0:a.form_json)||"{}")),y=m||v,b=o=>{if(o.preventDefault(),o.stopPropagation(),null===h||void 0===h||!h.cart||x)return;if(y){const o=new URLSearchParams(g);return o.set("productId",e.id),o.set("categoryId","all-items"),f(o),window.history.pushState({},"",`?${o.toString()}`),void(document.body.style.overflow="hidden")}const t=parseFloat((null===e||void 0===e?void 0:e.en_price)||"0")*(1-parseFloat(l)/100);$((0,We.bE)(w,e,1,{},t,"")),Mt.oR.success("en"===j?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629")};return(0,N.jsxs)(ze,{children:[(0,N.jsxs)(we,{onClick:()=>{const o=new URLSearchParams(g);o.set("productId",e.id),o.set("categoryId","all-items"),f(o),window.history.pushState({},"",`?${o.toString()}`),document.body.style.overflow="hidden"},style:{cursor:"pointer"},children:[(0,N.jsx)(je,{children:p&&(0,N.jsx)("img",{src:(0,E.V)(p),alt:"en"===j?e.en_name:e.ar_name})}),(0,N.jsxs)(Ce,{activeLanguage:j,children:[(0,N.jsx)($e,{children:"en"===j?e.en_name:e.ar_name}),e.en_price&&(0,N.jsxs)(Ae,{activeLanguage:j,children:[0!==l&&(0,N.jsx)(ke,{children:(0,He.T)(parseFloat(e.en_price),d)}),(0,N.jsx)("span",{children:(0,He.T)(s,d)})]})]})]}),(null===h||void 0===h?void 0:h.cart)&&(x?(0,N.jsx)(ye,{activeLanguage:j,children:"en"===j?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,N.jsx)(ve,{type:"button",onClick:b,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),b(e)},activeLanguage:j,title:"en"===j?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,N.jsx)(Xe._xK,{size:12})}))]},e.id)}))}):(0,N.jsx)(pe,{$noMinHeight:!0,children:e.items.map(((o,t)=>(0,N.jsx)(Ge,{index:t,plate:o,activePlate:null,setactivePlate:x,showPopup:l,setSearchParams:f,searchParams:g,activeCategoryId:e.category.id,categories:u,disableDetails:!1,wishlistIds:A,onWishlistChange:z},o.id)))})]},e.category.id))),W&&(0,N.jsx)("div",{ref:P,style:{height:"40px"}}),V&&(0,N.jsx)(ge,{children:(0,N.jsxs)(fe,{children:[(0,N.jsx)(me,{}),"en"===j?"Loading more...":"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f..."]})})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(pe,{activePlate:h,children:[null===n||void 0===n?void 0:n.map(((e,o)=>{if(a==e.id)return(0,N.jsx)(N.Fragment,{children:X.map(((e,o)=>(0,N.jsx)(Ge,{index:o,plate:e,activePlate:h,setactivePlate:x,ref:_[o],showPopup:l,setSearchParams:f,searchParams:g,activeCategoryId:a,categories:u,wishlistIds:A,onWishlistChange:z})))})})),(0,N.jsx)("div",{ref:I,style:{height:"20px"}})]}),null!==h&&!g.get("productId")&&(0,N.jsx)(Ot,{menu:null===n||void 0===n?void 0:n.find((e=>e.id===a)),activePlate:h,setactivePlate:x,plates:X,productPositions:S,activeCategoryId:a,categories:u,setSearchParams:f,searchParams:g})]})})}var Vt=t(76143);const Jt=r.Ay.div`
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
`,Yt=(r.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`,r.Ay.span`
font-size: 30px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`),Xt=r.Ay.span`
width: 90%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 10vh;
`,Kt=r.Ay.div`
  margin-top: 30px;
width: 90%;
  display: flex;
  flex-direction: column;
`,Qt=(r.Ay.div`
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
`,(0,r.Ay)(eo.IW4)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,r.Ay)(b.gwi)`
font-size: 25px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,r.Ay)(eo.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`),Gt=r.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
font-weight: bold;

`,Zt=r.Ay.div`
width: 90%;
margin-top: 10px;

`,ei=r.Ay.div`
margin-top: 10px;
display: flex;
flex-direction: row;
width: 90%;
align-items: center;
gap:10px;
`,oi=r.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,ti=(r.Ay.a`
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
`),ii=r.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
`,ri=(0,r.Ay)(Xe.ok6)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};
`,ni=((0,r.Ay)(eo._8j)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};


`,(0,r.Ay)(Xe.ao$)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`),ai=(0,r.Ay)(Vt.mk3)`
font-size: 18px;
color: ${e=>e.theme.popupTextColor};;

`,li=r.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,si=r.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,di=(0,r.Ay)(b.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`,ci=r.Ay.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 90%;
height: 50px;
gap:25px;
margin-top: 30px;
`,pi=r.Ay.button`
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
`,ui=r.i7`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,hi=r.Ay.div`
position: absolute;
width:10%;
height: 50%;
background-color:${e=>"Call"==e.activeButton?e.theme.mainColor:e.theme.popupbackgroundColor} ;
 left: 0;
 z-index: 5;

 `,xi=r.Ay.div`
position: absolute;
width:1px;
height: 100%;
background-color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 right: 0;
 animation: ${ui} 0.5s ease-in-out infinite; /* Infinite animation */

 `,gi=r.i7`
  0% {
opacity: 0;
left: -10%;
  }
  100% {
opacity: 1;
left: 16%;

  }

`,fi=r.Ay.span`
position: absolute;
 left: 16%;
 color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 animation: ${gi} 0.5s ease-in-out;
 z-index: 4;

 `,mi=r.i7`
  0% {
    opacity: 0;
    rotate: calc(180deg);
  }
  1000% {
    opacity: 1;
    rotate: calc(0deg);

  }
 
`,vi=(0,r.Ay)(eo.pte)`
color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
font-size: 15px;
position: absolute;
right: 5%;
animation: ${mi} 0.7s ease-in-out;

`,yi=r.i7`
  0% {
    max-height: 0px;
  }
  1000% {
    max-height: 300px;


  }
 
`,bi=r.Ay.ul`
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

`,wi=r.Ay.li`
  cursor: pointer;
  transition: background 0.2s;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;

`,ji=r.Ay.button`
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
`,Ci=r.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 18px;
font-weight: bold;

`,$i=r.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`,Ai=r.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
`,ki=r.Ay.div`
  display: flex;
  flex-direction: row;
  width: 15px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${e=>e.theme.mainColor};
`,zi=(r.Ay.div`
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

 `),Si=r.Ay.div`
 width: 15px;
 height: 45px;
 top: 25px;
 position: absolute;
 left: 0;
 display: flex;
 justify-content: center;
 `,Ti=r.Ay.div`
 width: 2px;
 height: 100%;
 background-color: ${e=>e.theme.popupTextColor};
 opacity: 0.5;
 `;var _i=t(72599),Li=t(67059);function Ii(e){var o,t,r,a;let{restaurant:l,showPopup:s,popupHandler:d}=e;const{restaurantName:c}=(0,y.g)(),p=window.location.hostname.split(".")[0],u="menugic"!==p&&"localhost"!==p&&"www"!==p?p:c,h=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[u].activeLanguage})),[x,g]=(0,i.useState)("");return(0,i.useEffect)((()=>{const e=()=>{d(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,N.jsxs)(Jt,{showPopup:s,children:[(0,N.jsx)(Qt,{onClick:()=>{d(null)}}),(0,N.jsx)(Xt,{children:(0,N.jsx)(Yt,{children:(f=null===l||void 0===l?void 0:l.name,f.replace(/\b\w/g,(function(e){return e.toUpperCase()})))})}),(0,N.jsxs)(ci,{children:[(0,N.jsx)(pi,{activeButton:x,onClick:()=>{g("Call"==x?"":"Call")},children:"Call"!==x?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(_i._Xz,{size:"25px"}),"en"==h?"Call Now":"\u0627\u062a\u0635\u0644 \u0627\u0644\u0627\u0646"]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(bi,{activeButton:x,children:null===l||void 0===l||null===(o=l.branches)||void 0===o?void 0:o.flatMap((e=>e.phone_number.split(" ").map(((o,t)=>(0,N.jsx)(wi,{children:(0,N.jsxs)("a",{href:`tel:${o}`,style:{textDecoration:"none",color:"inherit"},children:[o,"  ",e.location&&(0,N.jsxs)("span",{children:["- ",e.name," "]})]})})))))}),(0,N.jsx)(hi,{activeButton:x,children:(0,N.jsx)(xi,{activeButton:x})}),(0,N.jsx)(fi,{activeButton:x,children:"en"==h?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,N.jsx)(vi,{activeButton:x})]})}),(0,N.jsx)(ji,{activeButton:x,onClick:()=>{g("Message"==x?"":"Message")},children:"Message"!==x?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Xe.EcP,{size:"25px"}),"en"==h?"Message":"\u0631\u0633\u0627\u0644\u0629","            "]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(bi,{activeButton:x,children:null===l||void 0===l||null===(t=l.branches)||void 0===t?void 0:t.map((e=>(0,N.jsx)(wi,{children:(0,N.jsxs)("a",{href:`https://wa.me/${(0,Li.JW)(null===e||void 0===e?void 0:e.whatsapp_number,null===l||void 0===l?void 0:l.country_code)}`,style:{textDecoration:"none",color:"inherit"},children:[null===e||void 0===e?void 0:e.whatsapp_number,"-",null===e||void 0===e?void 0:e.name]})})))}),(0,N.jsx)(hi,{activeButton:x,children:(0,N.jsx)(xi,{activeButton:x})}),(0,N.jsx)(fi,{activeButton:x,children:"en"==h?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,N.jsx)(vi,{activeButton:x})]})})]}),(0,N.jsxs)(Kt,{children:[(null===l||void 0===l||null===(r=l.branches)||void 0===r?void 0:r.name)&&(0,N.jsx)(Ci,{children:"Branches"}),(0,N.jsx)($i,{children:null===l||void 0===l||null===(a=l.branches)||void 0===a?void 0:a.map(((e,o)=>{var t;return e.name&&(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(Ai,{children:[o!==(null===l||void 0===l||null===(t=l.branches)||void 0===t?void 0:t.length)-1&&(0,N.jsx)(Si,{index:o,children:(0,N.jsx)(Ti,{})}),(0,N.jsx)(ki,{children:(0,N.jsx)(n.sIY,{})}),(0,N.jsx)(zi,{href:`https://${null===e||void 0===e?void 0:e.mapLink}`,children:e.location})]})})}))})]}),(0,N.jsx)(Zt,{children:(0,N.jsx)(Gt,{children:"en"==h?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"})}),(0,N.jsxs)(ei,{children:[l.socialMedia.find((e=>"Instagram"==e.platform))&&(0,N.jsx)(oi,{href:`https://${l.socialMedia.find((e=>"Instagram"==e.platform)).link}`,children:(0,N.jsx)(ni,{})}),l.socialMedia.find((e=>"Facebook"==e.platform))&&(0,N.jsx)(ii,{href:`https://${l.socialMedia.find((e=>"Facebook"==e.platform)).link}`,children:(0,N.jsx)(ri,{})}),l.socialMedia.find((e=>"Tiktok"==e.platform))&&(0,N.jsx)(ti,{href:`https://${l.socialMedia.find((e=>"Tiktok"==e.platform)).link}`,children:(0,N.jsx)(ai,{})})]}),(0,N.jsxs)(li,{children:["Copyright",(0,N.jsx)(di,{})," ",(new Date).getFullYear()," "," ",(0,N.jsx)(si,{href:"https://www.menugic.com",children:"menugic.com"})]})]});var f}const Pi=r.Ay.div`
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
`,Ei=((0,r.Ay)(eo.WQq)`
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

`;var Ni=t(29334),Fi=t(50074);const Ri=r.i7`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,Di=r.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Bi=r.Ay.div`
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
`,Oi=r.Ay.div`
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
`,Ui=r.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`,qi=r.Ay.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Mi=r.Ay.div`
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
`,Wi=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`,Vi=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  white-space: nowrap;
`,Ji=r.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}12`};
  padding: 3px 5px;
  border-radius: 20px;
`,Yi=r.Ay.button`
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
`,Xi=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  min-width: 20px;
  text-align: center;
`,Ki=r.Ay.button`
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
`,Qi=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,Gi="\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 2px 8px;\n  line-height: 1.5;\n  white-space: nowrap;\n",Zi=r.Ay.span`
  ${Gi}
  border: 1px solid ${e=>`${e.theme.popupTextColor||"#1a1a1a"}50`};
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  background: transparent;
`,er=r.Ay.span`
  ${Gi}
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}18`};
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}35`};
`,or=r.Ay.span`
  ${Gi}
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  border: 1px dashed ${e=>`${e.theme.popupTextColor||"#999"}40`};
  opacity: 0.65;
  text-decoration: line-through;
`,tr=r.Ay.div`
  font-size: 10px;
  font-style: italic;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ir=r.Ay.div`
  font-size: 10px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.75;
  line-height: 1.5;
`,rr=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}10`};
  border-radius: 12px;
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  margin-top: 4px;
`,nr=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ar=r.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  opacity: 0.75;
`,lr=r.Ay.div`
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
`,sr=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.6;
  text-align: center;
`,dr=["Size:","\u0627\u0644\u062d\u062c\u0645:"],cr=["Add ons:","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:"],pr=["Remove:","\u0628\u062f\u0648\u0646:"];function ur(e){let{restaurant:o,activeLanguage:t}=e;const i=(0,v.wA)(),{restaurantName:r}=(0,y.g)(),n=window.location.hostname.split(".")[0],a="menugic"!==n&&"localhost"!==n&&"www"!==n?n:r,l=(0,v.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,o)=>e+o.price*o.quantity),0),d="ar"===t?"ar":"en",c=e=>{const o=(0,Fi.qh)(e,d);if(!o.length)return null;const{sizeLabel:t,addonLabels:i,removalLabels:r,legacyLines:n}=function(e){const o={sizeLabel:null,addonLabels:[],removalLabels:[],legacyLines:[]};let t=null;for(const i of e)"heading"===i.type?t=dr.includes(i.text)?"size":cr.includes(i.text)?"addons":pr.includes(i.text)?"removals":"legacy":"size"===t?o.sizeLabel=i.text:"addons"===t?o.addonLabels.push(i.text):"removals"===t?o.removalLabels.push(i.text):o.legacyLines.push(i.text);return o}(o),a=t||i.length||r.length;return(0,N.jsxs)(N.Fragment,{children:[a&&(0,N.jsxs)(Qi,{children:[t&&(0,N.jsx)(Zi,{children:"ar"===d?`\u0627\u0644\u062d\u062c\u0645: ${t}`:`Size: ${t}`}),i.map((e=>(0,N.jsxs)(er,{children:["+ ",e]},e))),r.map((e=>(0,N.jsx)(or,{children:e},e)))]}),n.map(((e,o)=>(0,N.jsx)(ir,{children:e},o)))]})},p=(0,Ke.Q)(null===o||void 0===o?void 0:o.currency);if(0===l.length)return(0,N.jsx)(Di,{children:(0,N.jsx)(sr,{children:"ar"===d?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"})});const u=e=>{var o;const t=null===(o=e.images)||void 0===o?void 0:o[0];return t&&t.url?(0,E.V)(t.url):""};return(0,N.jsx)(Di,{children:(0,N.jsxs)(Bi,{children:[l.map((e=>{const o="ar"===d?e.ar_name:e.en_name,t=(0,He.T)(e.price*e.quantity,p);return(0,N.jsx)(Oi,{children:(0,N.jsxs)(Ui,{children:[(0,N.jsx)(qi,{src:u(e),alt:o}),(0,N.jsxs)(Mi,{children:[(0,N.jsx)(Hi,{title:o,children:o}),c(e),e.instruction&&(0,N.jsxs)(tr,{children:["\ud83d\udcdd ",e.instruction]})]}),(0,N.jsxs)(Wi,{children:[(0,N.jsx)(Vi,{children:t}),(0,N.jsxs)(Ji,{children:[(0,N.jsx)(Yi,{onClick:()=>{return o=e.uniqueId,void((t=e.quantity)>1&&i((0,We.v)(a,o,t-1)));var o,t},disabled:e.quantity<=1,"aria-label":"decrease quantity",children:"\u2212"}),(0,N.jsx)(Xi,{children:e.quantity}),(0,N.jsx)(Yi,{onClick:()=>{return o=e.uniqueId,t=e.quantity,i((0,We.v)(a,o,t+1));var o,t},"aria-label":"increase quantity",children:"+"})]}),(0,N.jsx)(Ki,{onClick:()=>{return o=e.uniqueId,i((0,We.dt)(a,o));var o},"aria-label":"remove item",children:(0,N.jsx)(Xe.qbC,{})})]})]})},e.uniqueId)})),(0,N.jsx)(rr,{children:(0,N.jsxs)(nr,{children:[(0,N.jsx)(ar,{children:"ar"===d?"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a":"Total"}),(0,N.jsx)(lr,{children:(0,He.T)(s,p)})]})})]})})}var hr=t(13491);const xr=r.Ay.div`
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

`;function gr(e){let{deliveryType:o,branches:t,selectedBranch:i,setSelectedBranch:n,setErrors:a,errors:l}=e;const s=(0,r.DP)(),d=(t||[]).map((e=>({value:e.id,label:e.name,branch:e,isDisabled:!e.has_delivery&&"Delivery"===o}))),c={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==l&&void 0!==l&&l.branch?"rgba(255, 68, 68, 0.1)":s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:o.isDisabled?"#999":s.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?s.categoryUnActive||"#ffffff":o.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent",cursor:o.isDisabled?"not-allowed":"pointer",display:"flex",justifyContent:"space-between"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,N.jsx)(xr,{children:(0,N.jsx)(hr.Ay,{value:d.find((e=>{var o;return(null===(o=e.branch)||void 0===o?void 0:o.id)===(null===i||void 0===i?void 0:i.id)})),onChange:e=>{e&&!e.isDisabled&&(n(e.branch),a({...l,branch:""}))},options:d,placeholder:"Select Branch",isOptionDisabled:e=>e.isDisabled,styles:c,formatOptionLabel:e=>(0,N.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,N.jsx)("span",{children:e.label}),e.isDisabled&&"Delivery"===o&&(0,N.jsx)("span",{style:{fontSize:12,color:"#999"},children:"No Delivery"})]}),menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})})}const fr=r.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`,mr=(r.Ay.div`
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
`),vr=r.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`,yr=r.Ay.input`
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
`,br=(0,r.Ay)(c.Xj1)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.mainColor};

`,wr=r.i7`
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
  animation: ${wr} 1s linear infinite; /* Apply animation */
`;var jr=t(89993);function Cr(e){var o;let{selectedBranch:t,selectedRegion:n,onRegionChange:a,setErrors:l,errors:s,onRegionsChange:d}=e;const c=(0,r.DP)(),[p,u]=(0,i.useState)(!1),[h,x]=(0,i.useState)(""),{response:g,isLoading:f}=(0,jr.w)({branch_id:t.id,onSuccess:()=>{}});(0,i.useEffect)((()=>{var e;f||d((null===g||void 0===g||null===(e=g.data)||void 0===e?void 0:e.regions)||[])}),[f,g,d]),(0,i.useEffect)((()=>{a("")}),[t,a]);const m=((null===g||void 0===g||null===(o=g.data)||void 0===o?void 0:o.regions)||[]).map((e=>({value:e.region_name,label:e.region_name}))),v=m.filter((e=>e.label.toLowerCase().includes(h.toLowerCase()))),y={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==s&&void 0!==s&&s.region?"rgba(255, 68, 68, 0.1)":c.mainColor?`${c.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:c.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:c.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:c.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:c.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:c.categoryUnActive||"#ffffff",border:`1px solid ${c.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:c.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?c.categoryUnActive||"#ffffff":o.isFocused?c.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return!f&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(fr,{children:(0,N.jsx)(hr.Ay,{value:m.find((e=>e.value===n)),onMenuOpen:()=>u(!0),onMenuClose:()=>u(!1),onChange:e=>{a((null===e||void 0===e?void 0:e.value)||""),x(""),l({...s,region:""})},options:v,placeholder:"Select Region",styles:y,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})}),p&&(0,N.jsx)(mr,{children:(0,N.jsxs)(vr,{children:[(0,N.jsx)(yr,{placeholder:"Search",value:h,onChange:e=>{x(e.target.value)}}),(0,N.jsx)(br,{})]})})]})}const $r=r.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ar=r.Ay.div`
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
`,kr=r.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,zr=r.Ay.p`
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
`);function Tr(e){var o,t;let{formData:i,updateFormData:n,restaurant:a,errors:l,setErrors:s}=e;const d=(0,r.DP)();let c={};try{c=JSON.parse((null===a||void 0===a?void 0:a.features)||"{}")}catch(h){c={}}const p=[c.delivery_order&&{value:"Delivery",label:"Delivery"},c.takeaway_order&&{value:"TakeAway",label:"Take Away"},c.dinein_order&&{value:"DineIn",label:"Dine In"}].filter(Boolean),u={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(l.deliveryType?"rgba(255, 68, 68, 0.1)":d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?d.categoryUnActive||"#ffffff":o.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,N.jsxs)($r,{children:[(0,N.jsx)(kr,{children:"Select Order Type"}),(0,N.jsx)(zr,{children:"Choose how you would like to receive your order"}),(0,N.jsxs)(Ar,{children:[(0,N.jsx)(hr.Ay,{value:p.find((e=>e.value===i.deliveryType)),onChange:e=>{var o;n({deliveryType:(null===e||void 0===e?void 0:e.value)||"",selectedBranch:(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o[0])||null,selectedRegion:""}),s({})},options:p,placeholder:"Select Order Type",isSearchable:!1,styles:u,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"}),l.deliveryType&&(0,N.jsx)(Sr,{children:l.deliveryType})]}),(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.length)>0&&!(()=>{var e;return null===a||void 0===a||null===(e=a.branches)||void 0===e?void 0:e.some((e=>e.is_online))})()&&(0,N.jsxs)(Ar,{children:[(0,N.jsx)(gr,{deliveryType:i.deliveryType,branches:null===a||void 0===a?void 0:a.branches,selectedBranch:i.selectedBranch,setSelectedBranch:e=>n({selectedBranch:e,selectedRegion:""}),setErrors:s,errors:l}),l.branch&&(0,N.jsx)(Sr,{children:l.branch})]}),i.selectedBranch&&"Delivery"===i.deliveryType&&Array.isArray(i.regions)&&i.regions.length>0&&(0,N.jsxs)(Ar,{children:[(0,N.jsx)(Cr,{selectedRegion:i.selectedRegion,onRegionChange:e=>n({selectedRegion:e}),selectedBranch:1===(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)?null===a||void 0===a?void 0:a.branches[0]:i.selectedBranch,setErrors:s,errors:l,onRegionsChange:e=>n({regions:e})}),l.region&&(0,N.jsx)(Sr,{children:l.region})]})]})}var _r=t(16106);const Lr=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ir=r.Ay.button`
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
`,Pr=r.Ay.div`
  padding: 16px;
  background: ${e=>e.theme.categoryUnActive||"#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Er=r.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Nr=r.Ay.div`
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  word-break: break-all;
`,Fr=r.Ay.a`
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
`;function Dr(e){let{onLocationSelect:o,selectedLocation:t,hasError:i,googleMapsApiKey:n,activeLanguage:a="en"}=e;const l=(0,r.DP)();return n?(0,N.jsx)(_r.A,{apiKey:n,onLocationConfirm:o,selectedLocation:t,hasError:i,theme:l,activeLanguage:a}):(0,N.jsx)(Br,{onLocationSelect:o,selectedLocation:t,hasError:i})}function Br(e){let{onLocationSelect:o,selectedLocation:t,hasError:r}=e;const[n,a]=(0,i.useState)(!1),[l,s]=(0,i.useState)("");return(0,N.jsxs)(Lr,{children:[(0,N.jsxs)(Ir,{type:"button",onClick:()=>{navigator.geolocation?(a(!0),s(""),navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:i}=e.coords,r={latitude:t,longitude:i,address:`${t.toFixed(6)}, ${i.toFixed(6)}`};o(r),a(!1)}),(()=>{s("Unable to retrieve your location. Please try again."),a(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):s("Geolocation is not supported by your browser")},disabled:n,variant:"current",children:[(0,N.jsx)(Xe.hO$,{}),n?"Getting Location...":"Use Current Location"]}),(0,N.jsxs)(Ir,{type:"button",onClick:()=>{if(t){const e=`https://www.google.com/maps?q=${t.latitude},${t.longitude}`;window.open(e,"_blank")}else{const e="https://www.google.com/maps/search/?api=1";window.open(e,"_blank")}},variant:"select",children:[(0,N.jsx)(Xe.vq8,{}),t?"View on Map":"Select on Map"]}),t&&(0,N.jsxs)(Pr,{children:[(0,N.jsx)(Er,{children:"Selected Location:"}),(0,N.jsx)(Nr,{children:t.address||`${t.latitude}, ${t.longitude}`}),t.latitude&&t.longitude&&(0,N.jsx)(Fr,{href:`https://www.google.com/maps?q=${t.latitude},${t.longitude}`,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]}),l&&(0,N.jsx)(Rr,{children:l}),r&&!t&&(0,N.jsx)(Rr,{children:"Please select a location"})]})}const Or=r.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`,Ur=r.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,qr=r.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,Mr=r.Ay.div`
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
`,Wr=r.Ay.input`
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
`,Vr=r.Ay.textarea`
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
`,Jr=r.Ay.span`
  color: #ff4444;
  font-size: 12px;
  display: block;
`,Yr=r.Ay.p`
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.85;
`;function Xr(e){let{formData:o,updateFormData:t,errors:n,restaurantName:a,restaurant:l,activeLanguage:s="en"}=e;const d=(0,r.DP)(),[c,p]=(0,i.useState)([]),[u,h]=(0,i.useState)(!1),x=(0,i.useRef)(!1),g=(e,o)=>"ar"===s?o:e,f=(0,i.useMemo)((()=>{try{return null!==l&&void 0!==l&&l.features?JSON.parse(l.features):{}}catch{return{}}}),[null===l||void 0===l?void 0:l.features]).google_maps_integrated&&(null===l||void 0===l?void 0:l.google_maps_api_key)||null,m=(0,i.useMemo)((()=>({control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:d.mainColor||d.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?d.categoryUnActive||"#ffffff":o.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})})),[d]),v=(0,i.useMemo)((()=>[{value:"__manual__",label:0===c.length?g("No saved addresses \u2014 type below","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u2014 \u0627\u0643\u062a\u0628 \u0623\u062f\u0646\u0627\u0647"):g("Type address manually","\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u062f\u0648\u064a\u0627\u064b")},...c.map((e=>({value:String(e.id),label:`${e.label||g("Address","\u0639\u0646\u0648\u0627\u0646")}${e.is_default?` (${g("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")})`:""} \u2014 ${e.full_address.length>56?`${e.full_address.slice(0,56)}\u2026`:e.full_address}`})))]),[c,s]),y=(0,i.useMemo)((()=>{if(null==o.selectedAddressId)return v[0]||null;const e=String(o.selectedAddressId);return v.find((o=>o.value===e))||v[0]||null}),[v,o.selectedAddressId]);(0,i.useEffect)((()=>{if("Delivery"!==o.deliveryType||!a)return void p([]);const e=(0,Je.wU)(a);if(!e)return void p([]);let t=!1;return h(!0),de.A.get(Ve.Qf,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:o}=e;t||p(o.addresses||[])})).catch((()=>{t||p([])})).finally((()=>{t||h(!1)})),()=>{t=!0}}),[o.deliveryType,a]),(0,i.useEffect)((()=>{"Delivery"!==o.deliveryType&&(x.current=!1)}),[o.deliveryType]),(0,i.useEffect)((()=>{if("Delivery"!==o.deliveryType)return;if(!c.length||x.current)return;const e=c.find((e=>e.is_default));e&&!String(o.fullAddress||"").trim()&&(x.current=!0,t({selectedAddressId:e.id,fullAddress:e.full_address}))}),[c,o.deliveryType,o.fullAddress,t]);const b=e=>{const{name:o,value:i}=e.target;t("fullAddress"!==o?{[o]:i}:{[o]:i,selectedAddressId:null})};return(0,N.jsxs)(Or,{children:[(0,N.jsx)(Ur,{children:g("Your Information","\u0628\u064a\u0627\u0646\u0627\u062a\u0643")}),(0,N.jsx)(qr,{children:g("Please provide your contact details to complete the order","\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628")}),(0,N.jsxs)(Mr,{children:[(0,N.jsx)(Hr,{children:g("Full Name *","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,N.jsx)(Wr,{type:"text",name:"fullName",value:o.fullName,onChange:b,placeholder:g("Enter your full name","\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644"),hasError:!!n.fullName}),n.fullName&&(0,N.jsx)(Jr,{children:n.fullName})]}),(0,N.jsxs)(Mr,{children:[(0,N.jsx)(Hr,{children:g("Phone Number *","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 *")}),(0,N.jsx)(Wr,{type:"tel",name:"phoneNumber",value:o.phoneNumber,onChange:b,placeholder:g("Enter your phone number","\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643"),hasError:!!n.phoneNumber}),n.phoneNumber&&(0,N.jsx)(Jr,{children:n.phoneNumber})]}),"Delivery"===o.deliveryType&&(0,N.jsxs)(N.Fragment,{children:[(0,Je.wU)(a)&&(0,N.jsxs)(Mr,{children:[(0,N.jsxs)(Hr,{children:[g("Saved address","\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0641\u0648\u0638"),u?` (${g("loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")})`:""]}),(0,N.jsx)(Ar,{children:(0,N.jsx)(hr.Ay,{value:y,onChange:e=>{if(!e||"__manual__"===e.value)return void t({selectedAddressId:null});const o=parseInt(e.value,10),i=c.find((e=>e.id===o));i&&t({selectedAddressId:o,fullAddress:i.full_address})},options:v,isSearchable:!1,isDisabled:u,styles:m,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed",isRtl:"ar"===s})}),(0,N.jsx)(Yr,{children:g("Add or edit addresses from the account menu (person icon) \u2192 Addresses.","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062d\u0633\u0627\u0628 (\u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0634\u062e\u0635) \u2190 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646.")})]}),f&&(0,N.jsxs)(Mr,{children:[(0,N.jsx)(Hr,{children:g("Delivery Location *","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 *")}),(0,N.jsx)(Dr,{onLocationSelect:e=>{t({selectedLocation:e,fullAddress:e.address||`${e.latitude}, ${e.longitude}`})},selectedLocation:o.selectedLocation,hasError:!!n.fullAddress&&!o.selectedLocation,googleMapsApiKey:f,activeLanguage:s})]}),(0,N.jsxs)(Mr,{children:[(0,N.jsx)(Hr,{children:g("Full Address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,N.jsx)(Vr,{name:"fullAddress",value:o.fullAddress,onChange:b,placeholder:g("Enter your delivery address","\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),hasError:!!n.fullAddress,rows:"3"}),n.fullAddress&&(0,N.jsx)(Jr,{children:n.fullAddress})]})]}),"DineIn"===o.deliveryType&&(0,N.jsxs)(Mr,{children:[(0,N.jsx)(Hr,{children:g("Table Number *","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 *")}),(0,N.jsx)(Wr,{type:"number",name:"tableNumber",value:o.tableNumber,onChange:b,placeholder:g("Enter table number","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629"),hasError:!!n.tableNumber}),n.tableNumber&&(0,N.jsx)(Jr,{children:n.tableNumber})]}),(0,N.jsxs)(Mr,{children:[(0,N.jsx)(Hr,{children:g("Special Notes (Optional)","\u0645\u0644\u0627\u062d\u0638\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,N.jsx)(Vr,{name:"note",value:o.note,onChange:b,placeholder:g("Any special instructions or notes\u2026","\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u2026"),rows:"3"})]})]})}const Kr=r.Ay.div`
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
`,Qr=r.Ay.div`
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,Gr=r.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 12px;
`,Zr=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  gap: 12px;
`,en=r.Ay.div`
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
`,tn=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,rn=r.Ay.div`
  padding: 8px 0;
`,nn=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,an=r.Ay.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`,ln=r.Ay.div`
  height: 1px;
  background: ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  margin: 12px 0;
`,sn=r.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-align: right;
`;function dn(e){let{formData:o,restaurant:t,activeLanguage:i}=e;const{restaurantName:r}=(0,y.g)(),n=window.location.hostname.split(".")[0],a="menugic"!==n&&"localhost"!==n&&"www"!==n?n:r,l=(0,v.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,o)=>e+o.price*o.quantity),0),d=(0,Ke.Q)(null===t||void 0===t?void 0:t.currency);return(0,N.jsxs)(Kr,{children:[(0,N.jsx)(Gr,{children:"Review Your Order"}),(0,N.jsxs)(Qr,{children:[(0,N.jsx)(Gr,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Items"}),(0,N.jsx)(tn,{children:l.map((e=>{var o,t;return(0,N.jsx)(rn,{children:(0,N.jsxs)(nn,{children:[(0,N.jsx)(an,{src:(0,E.V)(null===(o=e.images)||void 0===o||null===(t=o[0])||void 0===t?void 0:t.url),alt:"en"===i?e.en_name:e.ar_name}),(0,N.jsxs)(on,{style:{flex:2},children:[e.quantity,"x"," ",(0,N.jsx)("strong",{children:"en"===i?e.en_name:e.ar_name})]}),(0,N.jsx)(on,{children:(0,He.T)(e.price*e.quantity,d)})]})},e.uniqueId)}))}),(0,N.jsx)(ln,{}),(0,N.jsxs)(Zr,{children:[(0,N.jsx)(en,{children:"Total:"}),(0,N.jsx)(sn,{children:(0,He.T)(s,d)})]})]}),(0,N.jsxs)(Qr,{children:[(0,N.jsx)(Gr,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Details"}),(0,N.jsxs)(Zr,{children:[(0,N.jsx)(en,{children:"Order Type:"}),(0,N.jsx)(on,{children:o.deliveryType})]}),o.selectedBranch&&(0,N.jsxs)(Zr,{children:[(0,N.jsx)(en,{children:"Branch:"}),(0,N.jsx)(on,{children:o.selectedBranch.name})]}),o.selectedRegion&&(0,N.jsxs)(Zr,{children:[(0,N.jsx)(en,{children:"Region:"}),(0,N.jsx)(on,{children:o.selectedRegion})]})]}),(0,N.jsxs)(Qr,{children:[(0,N.jsx)(Gr,{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact Information"}),(0,N.jsxs)(Zr,{children:[(0,N.jsx)(en,{children:"Name:"}),(0,N.jsx)(on,{children:o.fullName})]}),(0,N.jsxs)(Zr,{children:[(0,N.jsx)(en,{children:"Phone:"}),(0,N.jsx)(on,{children:o.phoneNumber})]}),"Delivery"===o.deliveryType&&o.fullAddress&&(0,N.jsxs)(Zr,{children:[(0,N.jsx)(en,{children:"Address:"}),(0,N.jsx)(on,{children:o.fullAddress})]}),"DineIn"===o.deliveryType&&o.tableNumber&&(0,N.jsxs)(Zr,{children:[(0,N.jsx)(en,{children:"Table Number:"}),(0,N.jsx)(on,{children:o.tableNumber})]}),o.note&&(0,N.jsxs)(Zr,{children:[(0,N.jsx)(en,{children:"Notes:"}),(0,N.jsx)(on,{children:o.note})]})]})]})}const cn=r.Ay.div`
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
`,pn=r.Ay.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,un=r.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`,hn=(0,r.Ay)(pn)`
  margin-bottom: 0;
  flex: 1;
`,xn=r.Ay.button`
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
`,gn=r.Ay.div`
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
`,mn=r.Ay.div`
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
`,vn=r.Ay.div`
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
`,yn=r.Ay.div`
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
`,bn=r.Ay.button`
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
`,wn=[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"review",label:"Review",number:4}];function jn(e){var o;let{popupHandler:t,restaurant:r}=e;const{restaurantName:n}=(0,y.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n,s=(0,v.d4)((e=>e.cart[l]||[])),d=(0,v.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[l])||void 0===t?void 0:t.activeLanguage)||"en"})),c=(0,v.wA)(),[p,u]=(0,i.useState)(0),[h,x]=(0,i.useState)({deliveryType:"",selectedBranch:(null===r||void 0===r||null===(o=r.branches)||void 0===o?void 0:o[0])||null,selectedRegion:"",regions:[],fullName:"",phoneNumber:"",fullAddress:"",selectedAddressId:null,selectedLocation:null,tableNumber:"",note:""}),[g,f]=(0,i.useState)({}),{handleApiCallAsync:m,isPending:b}=(0,Ni.h)({onSuccess:()=>{}});(0,i.useEffect)((()=>{(async()=>{const e=(0,Je.wU)(l);if(e)try{const{data:o}=await de.A.get(Ve.EY,{headers:{Authorization:`Bearer ${e}`}});x((e=>({...e,fullName:o.full_name||e.fullName,phoneNumber:o.phone_number||e.phoneNumber})))}catch{}})()}),[l]),(0,i.useEffect)((()=>{if(null!==r&&void 0!==r&&r.features){const e=JSON.parse(r.features),o=Object.entries(e).filter((e=>{let[o,t]=e;return!0===t})).map((e=>{let[o]=e;return"delivery_order"===o?"Delivery":"takeaway_order"===o?"TakeAway":"dinein_order"===o?"DineIn":null})).filter(Boolean);1===o.length&&x((e=>({...e,deliveryType:o[0]})))}}),[r]);const w=e=>{x((o=>({...o,...e})));const o=Object.keys(e);f((e=>{const t={...e};return o.forEach((e=>{t[e]&&delete t[e]})),t}))},j=e=>{const o={};if(1===e){var t;if(h.deliveryType||(o.deliveryType="Order Type is required."),!h.selectedBranch&&(null===r||void 0===r||null===(t=r.branches)||void 0===t?void 0:t.length)>0){var i;(null===r||void 0===r||null===(i=r.branches)||void 0===i?void 0:i.some((e=>e.is_online)))||(o.branch="Branch is required.")}"Delivery"===h.deliveryType&&h.selectedBranch&&Array.isArray(h.regions)&&h.regions.length>0&&!h.selectedRegion&&(o.region="Region is required.")}else 2===e&&(h.fullName||(o.fullName="Full Name is required."),h.phoneNumber||(o.phoneNumber="Phone Number is required."),"Delivery"!==h.deliveryType||h.fullAddress||(o.fullAddress="Full Address is required for delivery."),"DineIn"!==h.deliveryType||h.tableNumber||(o.tableNumber="Table Number is required."));return f(o),0===Object.keys(o).length};return(0,N.jsxs)(cn,{children:[(0,N.jsxs)(un,{children:[(0,N.jsx)(hn,{children:wn[p].label}),(0,N.jsx)(xn,{onClick:()=>t(null),"aria-label":"Close cart",children:"\u2715"})]}),(0,N.jsx)(gn,{children:wn.map(((e,o)=>(0,N.jsxs)(fn,{active:o<=p,children:[(0,N.jsx)(mn,{active:o<=p,completed:o<p,children:o<p?"\u2713":e.number}),(0,N.jsx)("span",{children:e.label})]},e.id)))}),(0,N.jsx)(vn,{children:(()=>{switch(p){case 0:return(0,N.jsx)(ur,{formData:h,updateFormData:w,restaurant:r,activeLanguage:d});case 1:return(0,N.jsx)(Tr,{formData:h,updateFormData:w,restaurant:r,errors:g,setErrors:f});case 2:return(0,N.jsx)(Xr,{formData:h,updateFormData:w,restaurant:r,errors:g,restaurantName:l,activeLanguage:d});case 3:return(0,N.jsx)(dn,{formData:h,restaurant:r,activeLanguage:d});default:return null}})()}),(0,N.jsxs)(yn,{children:[p>0&&(0,N.jsx)(bn,{onClick:()=>{p>0&&u(p-1)},variant:"secondary",children:"Back"}),p<wn.length-1?(0,N.jsx)(bn,{onClick:()=>{if(j(p)){if(0===p&&null!==r&&void 0!==r&&r.id){var e;const o=(null===(e=h.selectedBranch)||void 0===e?void 0:e.id)||null;(0,Ye.trackCheckoutStart)(r.id,o,h.deliveryType||null)}p<wn.length-1&&u(p+1)}},variant:"primary",children:"Next"}):(0,N.jsx)(bn,{onClick:async()=>{var e,o,i,n;if(!j(2))return;const a=(0,Ke.Q)(null===r||void 0===r?void 0:r.currency);let p=0,u="";u+=`*New Order - ${h.deliveryType}*\n`,u+="--------------------\n\n",u+="*Items:*\n",s.forEach(((e,o)=>{const t=("ar"===d?e.ar_name:e.en_name||"").trim(),i=("ar"===d?e.category.ar_category:e.category.en_category||"").trim(),r=e.price*e.quantity;p+=r,u+=`${o+1}. *${t}*\n`,u+=`    ${i}\n`,u+=`    ${e.quantity}x ${e.price} ${a} = *${r} ${a}*\n`,e.formData&&(u+=(0,Fi.Ve)(e,"ar"===d?"ar":"en")),e.instruction&&(u+=`    > _${e.instruction}_\n`),u+="\n"})),u+="--------------------\n",u+=`*Total: ${(0,He.T)(p,a)}*\n\n`,u+="*Customer:*\n",u+=`- ${h.fullName}\n`,u+=`- ${h.phoneNumber}\n`,h.selectedRegion&&(u+=`- Region: ${h.selectedRegion}\n`);let x="";"Delivery"===h.deliveryType&&(u+="\n*Delivery Address:*\n",u+=`${h.fullAddress}\n`,h.selectedLocation&&(x=`https://www.google.com/maps?q=${h.selectedLocation.latitude},${h.selectedLocation.longitude}`)),"DineIn"===h.deliveryType&&(u+=`- Table: #${h.tableNumber}\n`),h.note&&(u+=`\n*Note:* _${h.note}_\n`),x&&(u+=`\n${x}\n`);const g=null!==(e=h.selectedBranch)&&void 0!==e&&e.whatsapp_number?(0,Li.JW)(h.selectedBranch.whatsapp_number,null===r||void 0===r?void 0:r.country_code):r.phone_number,f=[...s.map((e=>{var o;return{id:e.id,quantity:e.quantity,branch_id:null===(o=h.selectedBranch)||void 0===o?void 0:o.id,restaurant_id:r.id}}))],v=[...s.map((e=>({product_id:e.id,product_name:"en"===d?e.en_name:e.ar_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];m({products:f,restaurant_id:r.id,branch_id:null===(o=h.selectedBranch)||void 0===o?void 0:o.id,delivery_type:h.deliveryType,customer_name:h.fullName,customer_phone:h.phoneNumber,customer_address:"Delivery"===h.deliveryType?h.fullAddress:null,customer_latitude:(null===(i=h.selectedLocation)||void 0===i?void 0:i.latitude)||null,customer_longitude:(null===(n=h.selectedLocation)||void 0===n?void 0:n.longitude)||null,table_number:"DineIn"===h.deliveryType?h.tableNumber:null,note:h.note,items:v,subtotal:p,total:p,currency:r.currency},l).then((e=>{if(null!==r&&void 0!==r&&r.id){var o,t,i;const n=(null===(o=h.selectedBranch)||void 0===o?void 0:o.id)||null;(0,Ye.trackOrderPlaced)(r.id,(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(i=t.order)||void 0===i?void 0:i.id)||null,h.deliveryType,p,n,{items:v,customerName:h.fullName})}})).catch((e=>console.error("Order creation failed:",e))),(0,Li.JT)(g,u),c((0,We.sX)(l)),t(null)},variant:"primary",disabled:b,children:b?"Submitting...":"Submit Order"})]})]})}function Cn(e){let{restaurant:o,showPopup:t,popupHandler:r=(()=>{})}=e;const{restaurantName:n}=(0,y.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n,s=(0,v.d4)((e=>e.cart[l]||[])),d=(0,v.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[l])||void 0===t?void 0:t.activeLanguage)||"en"})),c=0===s.length;(0,i.useEffect)((()=>{const e=()=>{r(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);return(0,N.jsx)(Pi,{showPopup:t,children:c?(0,N.jsx)(Ei,{children:"en"===d?"Your cart is empty":"\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0641\u0627\u0631\u063a\u0629"}):(0,N.jsx)(jn,{popupHandler:r,restaurant:o})})}const $n=r.Ay.div`
height: 100vh;
position: fixed;
width: 100%;
left: ${e=>e.showSidebar?"0":"-100%"};
top:0;
  transition:all  0.5s ease-in-out;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
z-index: 100;
`,An=r.Ay.div`
width: 100%;
height: 100%;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
`,kn=r.Ay.div`
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
`,zn=r.Ay.div`
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

`,Ln=r.Ay.img`
width:20px;
height:20px;
`,In=r.Ay.div`
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vh;
`,Pn=r.Ay.img`
max-width: min(200px, 60vw);
max-height: 120px;
object-fit: contain;
margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,En=r.Ay.div`
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

`,Nn=r.Ay.input`
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

`,Fn=(0,r.Ay)(c.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};
color:${e=>e.theme.sidebarsearchText};

`,Rn=(0,r.Ay)(J.IMk)`
position: absolute;
left: 20px;
top: 20px;
color: ${e=>e.theme.sidebarsearch};
font-size: 27px;

`;function Dn(e){var o;let{activeCategory:t,setactiveCategory:r,categories:n,showSidebar:a,setshowSidebar:l,setcarouselPosition:s,onFeedbackClick:d,onContactClick:c,onBranchesClick:p,onAboutClick:u,onShareClick:h,branches:x}=e;const{restaurantName:g}=(0,y.g)(),[f,m]=(0,se.ok)(),b=window.location.hostname.split(".")[0],w="menugic"!==b&&"localhost"!==b&&"www"!==b?b:g,j=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[w]})),[C,$]=(0,i.useState)(""),A=(null===j||void 0===j?void 0:j.activeLanguage)||"en",k=null===n||void 0===n?void 0:n.filter((e=>"en"===A?(e.en_category||"").toLowerCase().includes(C.toLowerCase()):(e.ar_category||"").toLowerCase().includes(C.toLowerCase()))),z=e=>{l(!1),e&&e()},S=[d&&{icon:Xe.g5D,label:"en"===A?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a",onClick:()=>z(d)},(null===x||void 0===x?void 0:x.length)>0&&p&&{icon:Xe.vq8,label:"en"===A?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639",onClick:()=>z(p)},c&&{icon:Xe.toK,label:"en"===A?"Contact Us":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",onClick:()=>z(c)},u&&{icon:Xe.__w,label:"en"===A?"About Us":"\u0645\u0646 \u0646\u062d\u0646",onClick:()=>z(u)},h&&{icon:Xe.eb3,label:"en"===A?"Share":"\u0645\u0634\u0627\u0631\u0643\u0629",onClick:()=>z(h)}].filter(Boolean);return(0,N.jsxs)($n,{showSidebar:a,children:[(0,N.jsx)(An,{onClick:()=>{l(!1)},showSidebar:a}),(0,N.jsxs)(kn,{children:[(0,N.jsx)(Rn,{}),(0,N.jsx)(In,{children:(0,N.jsx)(Pn,{showSidebar:a,src:(null===j||void 0===j?void 0:j.logoURL)&&`https://storage.googleapis.com/ecommerce-bucket-testing/${j.logoURL}`})}),(0,N.jsxs)(En,{showSidebar:a,children:[(0,N.jsx)(Fn,{activeLanguage:A}),(0,N.jsx)(Nn,{type:"text",activeLanguage:A,dir:"en"===A?"ltr":"rtl",placeholder:"en"===A?"Search Categories":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{$(e.target.value)},value:C})]}),(0,N.jsx)(zn,{showSidebar:a,children:null===k||void 0===k?void 0:k.sort(((e,o)=>o.priority-e.priority)).map(((e,o)=>(0,N.jsxs)(Sn,{onClick:()=>((e,o)=>{r(e),s(o),l(!1)})(e.id,o),children:["horizantal-withoutIcon"!==(null===j||void 0===j?void 0:j.category_type)&&(0,N.jsx)(_n,{activeCategory:t,categoryId:e.id,children:(0,N.jsx)(Ln,{src:e.image_url?(0,E.V)(e.image_url):e.isAllItems&&null!==j&&void 0!==j&&j.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${j.logoURL}`:""})}),(0,N.jsx)(Tn,{categoryType:"horizantal-withoutIcon"===(null===j||void 0===j?void 0:j.category_type),activeCategory:t,categoryId:e.id,children:"en"===A?e.en_category||e.ar_category:e.ar_category||e.en_category})]},o)))}),S.length>0&&(0,N.jsx)("div",{style:{borderTop:`1px solid ${null!==j&&void 0!==j&&j.theme&&(null===(o=JSON.parse(j.theme))||void 0===o?void 0:o.borderColor)||"#eee"}`,marginTop:10,paddingTop:10},children:S.map(((e,o)=>{var t,i;return(0,N.jsxs)(Sn,{onClick:e.onClick,style:{cursor:"pointer"},children:[(0,N.jsx)(_n,{style:{background:"transparent",border:"none",width:28,height:28},children:(0,N.jsx)(e.icon,{style:{fontSize:14,color:null!==j&&void 0!==j&&j.theme&&(null===(t=JSON.parse(j.theme))||void 0===t?void 0:t.sidebartext)||"#333"}})}),(0,N.jsx)(Tn,{categoryType:!0,style:{fontWeight:500,color:null!==j&&void 0!==j&&j.theme&&(null===(i=JSON.parse(j.theme))||void 0===i?void 0:i.sidebartext)||"#333"},children:e.label})]},o)}))})]})]})}var Bn=t(65445);const On=r.Ay.div`
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
`,Un=r.Ay.div`
width: 80%;
display: flex;
flex-direction: column;
padding-top:40px;
`,qn=r.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,Mn=(r.Ay.a`
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

`),Hn=(0,r.Ay)(eo.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`,Wn=r.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor}

`,Vn=r.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor};
margin-top: 20px;
`,Jn=r.Ay.div`
display: flex;
flex-direction: row;
gap:15px;
margin-top: 20px;


`,Yn=r.Ay.div`
display: flex;
flex-direction: column;
gap:5px;
align-items: center;
justify-content: center;

`,Xn=r.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #8bffb83d;
`,Kn=(0,r.Ay)(n.EcP)`
font-size: 24px;
color:#51C288;
`,Qn=r.Ay.div`
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

background-size: 300% 300%; /* Creates a smooth animated effect */`,Gn=(0,r.Ay)(n.ao$)`
font-size: 24px;
/* color:#51C288; */
color:#5c595b;



`,Zn=r.Ay.span`
font-size: 10px;
color:${e=>e.theme.popupTextColor}

`,ea=r.Ay.div`
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

`,oa=r.Ay.div`
width: 85%;
overflow: hidden;

`,ta=r.Ay.span`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
white-space: nowrap;
`,ia=(0,r.Ay)(n.zU_)`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`,ra=(0,r.Ay)(xt.RXm)`
font-size: 18px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`;function na(e){let{showPopup:o,popupHandler:t,activeCategory:r}=e;const{restaurantName:n}=(0,y.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n;(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[l].activeLanguage}));(0,i.useEffect)((()=>{const e=()=>{t(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const[s,d]=(0,i.useState)(!1);return(0,N.jsxs)(On,{showPopup:o,children:[(0,N.jsx)(Hn,{onClick:()=>{t(null)}}),(0,N.jsxs)(Un,{children:[(0,N.jsx)(Wn,{children:"Share Category"}),(0,N.jsxs)(Jn,{children:[(0,N.jsxs)(Yn,{children:[(0,N.jsx)(Xn,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname,t=`https://api.whatsapp.com/send?text=${encodeURIComponent(o+"?categoryId="+e)}`;window.open(t,"_blank")})(r),children:(0,N.jsx)(Kn,{})}),(0,N.jsx)(Zn,{children:"Whatsapp"})]}),(0,N.jsxs)(Yn,{children:[(0,N.jsx)(Qn,{onClick:()=>{window.open("https://www.instagram.com/direct/inbox/","_blank")},children:(0,N.jsx)(Gn,{})}),(0,N.jsx)(Zn,{children:"Instagram"})]})]}),(0,N.jsx)(Vn,{children:"Get Link"}),(0,N.jsxs)(ea,{children:[(0,N.jsx)(oa,{children:(0,N.jsx)(ta,{children:(e=>{if(e){return window.location.origin+window.location.pathname+"?categoryId="+e}})(r)})}),s?(0,N.jsx)(ra,{}):(0,N.jsx)(ia,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname;navigator.clipboard.writeText(o+"?categoryId="+e),d(!0),setTimeout((()=>{d(!1)}),4e3)})(r)})]})]}),(0,N.jsxs)(qn,{children:["Copyright",(0,N.jsx)(Mn,{}),"2024 ",(0,N.jsx)(se.N_,{href:"https://www.menugic.com",children:"menugic.com"})]})]})}var aa=t(31088),la=t(5677),sa=t(38495);const da=r.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,ca=r.Ay.div`
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
  animation: ${da} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,pa=r.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,ua=r.Ay.div`
  display: flex;
  gap: 10px;
`,ha=r.Ay.button`
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
`,xa=r.Ay.button`
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

`,ga=e=>{let{onInstall:o,onDismiss:t,restaurantName:i,showInstallPopup:r}=e;return(0,N.jsxs)(ca,{showInstallPopup:r,children:[(0,N.jsxs)(pa,{children:["Access ",(0,N.jsx)("b",{children:i})," anytime with one tap ",(0,N.jsx)("b",{children:"Install The App!"})]}),(0,N.jsxs)(ua,{children:[(0,N.jsx)(ha,{onClick:o,children:"Install"}),(0,N.jsx)(xa,{onClick:t,children:"Dismiss"})]})]})};var fa=t(42978),ma=t(34500);function va(){var e,o,t;const[r,n]=(0,se.ok)(),a=r.get("productId"),c=r.get("categoryId"),{restaurantName:p}=(0,y.g)(),u=window.location.hostname.split(".")[0],h="menugic"!==u&&"localhost"!==u&&"www"!==u?u:p,x=(0,v.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[h]})),[g,f]=((0,v.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[h])||void 0===t?void 0:t.activeLanguage)||"en"})),(0,i.useState)(null)),[m,b]=(0,i.useState)(""),[w,j]=(0,i.useState)(null),[C,$]=(0,i.useState)(null),[A,k]=(0,i.useState)(!0),z=2===Number(null===x||void 0===x?void 0:x.template_id)&&(!0===(null===x||void 0===x?void 0:x.show_all_items_category)||1===(null===x||void 0===x?void 0:x.show_all_items_category)||"1"===(null===x||void 0===x?void 0:x.show_all_items_category)),S={id:"all-items",en_category:"All Items",ar_category:"\u0643\u0644 \u0627\u0644\u0623\u0635\u0646\u0627\u0641",isAllItems:!0,priority:999999,image_url:(null===x||void 0===x?void 0:x.logoURL)||(null===x||void 0===x?void 0:x.cover_url)||null},T=[...(null===x||void 0===x?void 0:x.categories)||[]].sort(((e,o)=>(o.priority||0)-(e.priority||0)||(e.id||0)-(o.id||0))),_=z?[S,...T]:T,[L,I]=(0,i.useState)(c?_.findIndex((e=>e.id==c)):0),[P,E]=((0,v.d4)((e=>(e.cart[h]||[]).reduce(((e,o)=>e+o.quantity),0))),(0,i.useState)(c||(null===_||void 0===_||null===(e=_[0])||void 0===e?void 0:e.id))),F=(0,i.useCallback)((e=>{E(e);const o=new URLSearchParams(r);"all-items"===e?o.delete("categoryId"):o.set("categoryId",e),n(o)}),[r,n]),R=e=>{document.body.style.overflow=null==e?"auto":"hidden",f(e)};(0,i.useEffect)((()=>{if(null!==x&&void 0!==x&&x.id){var e,o;const t=(null===x||void 0===x||null===(e=x.branches)||void 0===e||null===(o=e[0])||void 0===o?void 0:o.id)||null;(0,Ye.trackVisit)(x.id,t),(0,Ye.trackPageView)(x.id,t)}}),[null===x||void 0===x?void 0:x.id]),(0,i.useEffect)((()=>{console.log("\ud83d\udd0d PWA Debug Info:"),console.log("- Protocol:",window.location.protocol),console.log("- Host:",window.location.hostname),console.log("- Navigator:",navigator.userAgent);const e=e=>{e.preventDefault(),console.log("\u2705 Install prompt event captured!"),$(e),k(!0)};return window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",(e=>{console.log("\ud83c\udf89 Application installed successfully!")})),()=>{window.removeEventListener("beforeinstallprompt",e)}}),[]);let D={};try{D=JSON.parse((null===x||void 0===x?void 0:x.features)||"{}")}catch(Qe){D={}}const B=(null===x||void 0===x?void 0:x.sliderImages)||[],O=(!0===(null===x||void 0===x?void 0:x.show_slider_image)||1===(null===x||void 0===x?void 0:x.show_slider_image)||"1"===(null===x||void 0===x?void 0:x.show_slider_image))&&B.length>0;return(0,N.jsxs)(l,{id:"wrapper",children:[(0,N.jsx)(ma.A,{onProductsClick:()=>window.scrollTo({top:0,behavior:"smooth"}),onBranchesClick:()=>{window.history.pushState({},""),R("location")},onContactFormClick:()=>{window.history.pushState({},""),R("contactForm")},onFeedbackClick:()=>{window.history.pushState({},""),R("feedback")},onAboutClick:()=>{window.history.pushState({},""),R("about")},onOrderClick:()=>{var e;null!==(e=D)&&void 0!==e&&e.cart&&(window.history.pushState({},""),R("cart"))},onHomeClick:void 0,onCategoryClick:e=>{F(e);const o=_.findIndex((o=>o.id===e));o>=0&&I(o)},onContactClick:()=>{window.history.pushState({},""),R("contactForm")},categories:_,activeCategory:P,setshowSidebar:j,showSidebar:w,popupHandler:R,isProductDetailsOpen:!!a}),(0,N.jsxs)(s,{onClick:()=>{null!=g&&R(null)},children:[(0,N.jsx)(d,{showPopup:g}),(0,N.jsx)(le,{categories:_,activeCategory:P,setactiveCategory:F,setSearchText:b,searchText:m,setshowSidebar:j,showSidebar:w,carouselPosition:L,setcarouselPosition:I,popupHandler:R,showMenuSlider:O,sliderImages:B,hideHeaderTop:!0}),(0,N.jsx)(Wt,{menu:x.categories,activeCategory:P,showPopup:g,searchText:m,setactiveCategory:F,setcarouselPosition:I,carouselPosition:L,categories:_})]}),(0,N.jsx)(Ii,{restaurant:x,showPopup:g,popupHandler:R}),(null===(o=D)||void 0===o?void 0:o.cart)&&(0,N.jsx)(Cn,{restaurant:x,showPopup:g,popupHandler:R}),(0,N.jsx)(na,{showPopup:g,popupHandler:R,activeCategory:P}),(0,N.jsx)(aa.A,{restaurant:x,showPopup:g,popupHandler:R}),(0,N.jsx)(la.A,{restaurant:x,showPopup:g,popupHandler:R}),(0,N.jsx)(sa.A,{restaurant:x,showPopup:g,popupHandler:R}),(0,N.jsx)(Dn,{categories:_,activeCategory:P,setactiveCategory:F,setshowSidebar:j,showSidebar:w,setcarouselPosition:I,onFeedbackClick:()=>{window.history.pushState({},""),R("feedback")},onContactClick:()=>{window.history.pushState({},""),R("contactForm")},onBranchesClick:()=>{window.history.pushState({},""),R("location")},onAboutClick:()=>{window.history.pushState({},""),R("about")},onShareClick:()=>{window.history.pushState({},""),R("share")},branches:null===x||void 0===x?void 0:x.branches}),a&&(0,N.jsx)(Bn.A,{productId:a,searchParams:r,setSearchParams:n}),(null===(t=D)||void 0===t?void 0:t.install_app)&&(0,N.jsx)(ga,{showInstallPopup:A,onInstall:async()=>{if(!C)return;C.prompt();"accepted"===(await C.userChoice).outcome?console.log("User accepted the install"):console.log("User dismissed the install"),$(null),k(!1)},restaurantName:h,onDismiss:()=>k(!1)}),(0,N.jsx)(fa.A,{hideHome:!0,activeView:"products",showPopup:g,onCategoriesClick:()=>window.scrollTo({top:0,behavior:"smooth"}),onCartClick:()=>{var e;null!==(e=D)&&void 0!==e&&e.cart&&(window.history.pushState({},""),R("cart"))},onFeedbackClick:()=>{window.history.pushState({},""),R("feedback")},onBranchesClick:()=>{window.history.pushState({},""),R("location")},restaurantName:h,branches:null===x||void 0===x?void 0:x.branches})]})}},20965:(e,o,t)=>{"use strict";t(42564).default},34848:e=>{"use strict";function o(e,o){if("function"!==typeof e)throw new TypeError("argument fn must be a function");return e}function t(e,o,t){if(!e||"object"!==typeof e&&"function"!==typeof e)throw new TypeError("argument obj must be object");var i=Object.getOwnPropertyDescriptor(e,o);if(!i)throw new TypeError("must call property on owner object");if(!i.configurable)throw new TypeError("property must be configurable")}e.exports=function(e){if(!e)throw new TypeError("argument namespace is required");function i(e){}return i._file=void 0,i._ignored=!0,i._namespace=e,i._traced=!1,i._warned=Object.create(null),i.function=o,i.property=t,i}},26340:(e,o,t)=>{"use strict";var i,r=t(34848)("http-errors"),n=t(40203),a=t(53910),l=t(61033),s=t(51798);function d(e){return Number(String(e).charAt(0)+"00")}function c(e,o){var t=Object.getOwnPropertyDescriptor(e,"name");t&&t.configurable&&(t.value=o,Object.defineProperty(e,"name",t))}function p(e){return"Error"!==e.substr(-5)?e+"Error":e}e.exports=function e(){for(var o,t,i=500,n={},l=0;l<arguments.length;l++){var s=arguments[l],c=typeof s;if("object"===c&&s instanceof Error)i=(o=s).status||o.statusCode||i;else if("number"===c&&0===l)i=s;else if("string"===c)t=s;else{if("object"!==c)throw new TypeError("argument #"+(l+1)+" unsupported type "+c);n=s}}"number"===typeof i&&(i<400||i>=600)&&r("non-error status code; use only 4xx or 5xx status codes");("number"!==typeof i||!a.message[i]&&(i<400||i>=600))&&(i=500);var p=e[i]||e[d(i)];o||(o=p?new p(t):new Error(t||a.message[i]),Error.captureStackTrace(o,e));p&&o instanceof p&&o.status===i||(o.expose=i<500,o.status=o.statusCode=i);for(var u in n)"status"!==u&&"statusCode"!==u&&(o[u]=n[u]);return o},e.exports.HttpError=function(){function e(){throw new TypeError("cannot construct abstract class")}return l(e,Error),e}(),e.exports.isHttpError=(i=e.exports.HttpError,function(e){return!(!e||"object"!==typeof e)&&(e instanceof i||e instanceof Error&&"boolean"===typeof e.expose&&"number"===typeof e.statusCode&&e.status===e.statusCode)}),function(e,o,t){o.forEach((function(o){var i,r=s(a.message[o]);switch(d(o)){case 400:i=function(e,o,t){var i=p(o);function r(e){var o=null!=e?e:a.message[t],l=new Error(o);return Error.captureStackTrace(l,r),n(l,r.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:o,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(r,e),c(r,i),r.prototype.status=t,r.prototype.statusCode=t,r.prototype.expose=!0,r}(t,r,o);break;case 500:i=function(e,o,t){var i=p(o);function r(e){var o=null!=e?e:a.message[t],l=new Error(o);return Error.captureStackTrace(l,r),n(l,r.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:o,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(r,e),c(r,i),r.prototype.status=t,r.prototype.statusCode=t,r.prototype.expose=!1,r}(t,r,o)}i&&(e[o]=i,e[r]=i)}))}(e.exports,a.codes,e.exports.HttpError)},61033:e=>{"function"===typeof Object.create?e.exports=function(e,o){o&&(e.super_=o,e.prototype=Object.create(o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,o){if(o){e.super_=o;var t=function(){};t.prototype=o.prototype,e.prototype=new t,e.prototype.constructor=e}}},29477:(e,o,t)=>{"use strict";var i=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("unable to locate global object")}();e.exports=o=i.fetch,i.fetch&&(o.default=i.fetch.bind(i)),o.Headers=i.Headers,o.Request=i.Request,o.Response=i.Response},40203:e=>{"use strict";e.exports=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,o){return e.__proto__=o,e}:function(e,o){for(var t in o)Object.prototype.hasOwnProperty.call(e,t)||(e[t]=o[t]);return e})},53910:(e,o,t)=>{"use strict";var i=t(17662);function r(e){if(!Object.prototype.hasOwnProperty.call(n.message,e))throw new Error("invalid status code: "+e);return n.message[e]}function n(e){if("number"===typeof e)return r(e);if("string"!==typeof e)throw new TypeError("code must be a number or string");var o=parseInt(e,10);return isNaN(o)?function(e){var o=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(n.code,o))throw new Error('invalid status message: "'+e+'"');return n.code[o]}(e):r(o)}e.exports=n,n.message=i,n.code=function(e){var o={};return Object.keys(e).forEach((function(t){var i=e[t],r=Number(t);o[i.toLowerCase()]=r})),o}(i),n.codes=function(e){return Object.keys(e).map((function(e){return Number(e)}))}(i),n.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},n.empty={204:!0,205:!0,304:!0},n.retry={502:!0,503:!0,504:!0}},51798:e=>{"use strict";e.exports=function(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join("").replace(/[^ _0-9a-z]/gi,"")}},42564:(e,o,t)=>{"use strict";t(29477),t(26340)},17662:e=>{"use strict";e.exports=JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a Teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Too Early","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')}}]);
//# sourceMappingURL=889.9acdea8f.chunk.js.map