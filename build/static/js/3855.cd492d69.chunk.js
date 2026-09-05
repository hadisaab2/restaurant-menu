/*! For license information please see 3855.cd492d69.chunk.js.LICENSE.txt */
(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[3855],{88631:(e,t,i)=>{"use strict";i.d(t,{y:()=>a});var o=i(11222),n=i(81132),r=i(27303);const a=(e,t)=>(0,r.I)({queryKey:["bestsellers",e,t||"all"],queryFn:()=>(async(e,t)=>e&&(await o.A.get((0,n.dl)(e,t))).data||[])(e,t),enabled:!!e,refetchOnWindowFocus:!1,retry:!1})},40499:(e,t,i)=>{"use strict";i.d(t,{O:()=>a});var o=i(11222),n=i(81132),r=i(27303);const a=(e,t)=>(0,r.I)({queryKey:["featured-products",e,t||"all"],queryFn:()=>(async(e,t)=>{if(!e)return[];const i=(0,n.b5)(e,t);return(await o.A.get(i)).data||[]})(e,t),enabled:!!e,refetchOnWindowFocus:!1,retry:!1})},21358:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Pn});var o=i(82483),n=i(41190),r=i(42751),a=i(22829);const l=n.Ay.div`
min-height: 100vh;
width: 100%;
position: relative;
background-color: ${e=>e.theme.backgroundColor};
font-family: ${e=>`${e.theme.font||"system-ui"}, "Noto Kufi Arabic" !important`};
overflow: visible;
`,s=n.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
height: 100%;
position: relative;
padding-bottom: 70px; /* Space for bottom tab bar */
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
bottom: 24px;
right: 20px;
width: 56px;
height: 56px;
background: ${e=>e.theme.mainColor||"#007bff"};
border-radius: 50%;
display: flex;
align-items: center;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
justify-content: center;
color: white;
font-size: 22px;
cursor: pointer;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
z-index: 50;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15);
}

&:active {
  transform: scale(1.05);
  transition: all 0.15s ease;
}

@media (min-width: 768px) {
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  font-size: 24px;
}
`,n.Ay.div`
position: fixed;
bottom: 90px;
right: 20px;
width: 56px;
height: 56px;
background: ${e=>e.theme.mainColor||"#007bff"};
border-radius: 50%;
display: flex;
align-items: center;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
justify-content: center;
color: white;
font-size: 22px;
cursor: pointer;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
z-index: 50;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15);
}

&:active {
  transform: scale(1.05);
  transition: all 0.15s ease;
}

@media (min-width: 768px) {
  bottom: 100px;
  right: 30px;
  width: 60px;
  height: 60px;
  font-size: 24px;
}
`,n.Ay.div`
position: absolute;
left: -6px;
top: -6px;
min-width: 22px;
height: 22px;
border-radius: 12px;
font-size: 11px;
font-weight: 700;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
color: ${e=>e.theme.textColor||"#ffffff"};
background: ${e=>e.theme.backgroundColor||"#ff4444"};
padding: 0 6px;
border: 2px solid ${e=>e.theme.mainColor||"#007bff"};
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
`,n.Ay.div`
  position: fixed;
  top: 20px;
  ${e=>"ar"===e.activeLanguage?"left: 20px;":"right: 20px;"}
  z-index: 10000;
  
  @media (min-width: 768px) {
    top: 30px;
    ${e=>"ar"===e.activeLanguage?"left: 30px;":"right: 30px;"}
  }
`,n.Ay.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${e=>e.theme.mainColor||"#333333"};
  font-size: 18px;
  
  &:hover {
    transform: scale(1.1);
    color: ${e=>e.theme.mainColor||"#007bff"};
  }
  
  &:active {
    transform: scale(1);
  }
  
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
`;var c=i(27320);const p=n.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${e=>e.theme.backgroundColor};
`,u=(n.Ay.div`
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
max-width: 600px;
display: flex;
align-items: center;
margin: 25px auto 0;
color:${e=>e.theme.searchTextColor};
height: 48px;
border-radius: 12px;
overflow: visible;
position: relative;
flex-direction: row;
gap: 10px;

@media (min-width: 768px) {
  height: 52px;
  gap: 12px;
}
`),x=n.Ay.div`
flex: 1;
display: flex;
align-items: center;
color:${e=>e.theme.searchTextColor};
height: 100%;
border-radius: 12px;
overflow: hidden;
position: relative;
background: ${e=>e.theme.searchbackground||"#ffffff"};
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
transition: all 0.3s ease;

&:focus-within {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transform: translateY(-1px);
}
`,h=n.Ay.input`
width: 100%;
height: 100%;
background-color: ${e=>e.theme.searchbackground||"#ffffff"};
border: 1px solid rgba(0, 0, 0, 0.08);
outline: none;
padding-left: ${e=>"en"==e.activeLanguage?"48px":"0px"};
padding-right: ${e=>"en"==e.activeLanguage?"0px":"48px"};
color:${e=>e.theme.searchTextColor||"#333333"};
font-size: 15px;
transition: all 0.3s ease;

&::placeholder{
    color:${e=>e.theme.searchTextColor||"#999999"};
    opacity: 0.6;
}

&:focus {
  border-color: ${e=>e.theme.mainColor||"#007bff"}40;
}

@media (min-width: 768px) {
  font-size: 16px;
}
`,g=(0,n.Ay)(c.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"16px":null};
right: ${e=>"en"==e.activeLanguage?null:"16px"};
font-size: 20px;
color: ${e=>e.theme.searchTextColor||"#999999"};
z-index: 1;
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
min-width: 56px;
font-size: 14px;
padding: 0 16px;
border-radius: 12px;
font-weight: 500;
gap: 6px;
flex-direction: row;
display: flex;
align-items: center;
justify-content: center;
background-color:${e=>e.theme.searchbackground||"#ffffff"};
color:${e=>e.theme.searchTextColor||"#333333"};
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.3s ease;
border: 1px solid rgba(0, 0, 0, 0.08);
margin-bottom: 20px;
&:hover {
  background-color: ${e=>e.theme.mainColor||"#007bff"}15;
  color: ${e=>e.theme.mainColor||"#007bff"};
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

&:active {
  transform: translateY(0);
  transition: all 0.15s ease;
}

@media (min-width: 768px) {
  min-width: 64px;
  padding: 0 18px;
  font-size: 15px;
}
`);(0,n.Ay)(a.LZ_)`
color: inherit;
font-size: 18px;
transition: transform 0.3s ease;

${m}:hover & {
  transform: scale(1.1);
}

@media (min-width: 768px) {
  font-size: 20px;
}
`;var f=i(1901);n.Ay.div`
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
  background-color:${e=>e.isAllItems?e.theme.mainColor:e.categoryId==e.activeCategory?e.theme.categoryActive:e.theme.categoryUnActive};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  transition: 0.2s all ease-in-out;
  color:${e=>e.isAllItems?e.theme.popupbuttonText:e.categoryId==e.activeCategory?"white":"black"};//edit thiss
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
background-color:${e=>e.isAllItems?e.theme.popupbuttonText:e.categoryId==e.activeCategory?e.theme.categoryActiveIcon:e.theme.categoryUnactiveIcon};
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
    color: ${e=>e.isAllItems?e.theme.popupbuttonText:"inherit"};
  user-select: none !important;
  -webkit-user-select: none !important;  /* For Safari (iOS) */
  -moz-user-select: none !important;     /* For Firefox */
  -ms-user-select: none !important;      /* For Internet Explorer */
`,(0,n.Ay)(f.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
@media (min-width: 1024px) {
        right: 20px;
    }
`,(0,n.Ay)(f.NaI)`
position: absolute;
font-size: 22px;
left: 0px;
color:${e=>e.theme.textColor};
rotate: calc(180deg);
@media (min-width: 1024px) {
        left: 20px;
    }
`;i(22139);var v=i(56723);n.Ay.div`
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
  height: 40px;
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

`,n.Ay.div`
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

`,n.Ay.div`
  height:100%;
  width: 100%;

  border-radius: 50px;
  padding-left: 10px; /* Add padding to left and right */
  padding-right: 10px; /* Add padding to left and right */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color:${e=>e.isAllItems?e.theme.mainColor:e.categoryId==e.activeCategory?e.theme.categoryActive:e.theme.categoryUnActive};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  transition: 0.2s all ease-in-out;
  color:${e=>e.isAllItems?e.theme.popupbuttonText:e.categoryId==e.activeCategory?"white":"black"};//edit thiss
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

width: auto;

`,n.Ay.span`

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 12px;
    color: ${e=>e.isAllItems?e.theme.popupbuttonText:"inherit"};
  user-select: none !important;
  -webkit-user-select: none !important;  /* For Safari (iOS) */
  -moz-user-select: none !important;     /* For Firefox */
  -ms-user-select: none !important;      /* For Internet Explorer */
`,(0,n.Ay)(f.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
`;var b=i(93376),y=i(91965);function w(e){let{activeCategory:t,setactiveCategory:i,categories:o,setSearchText:n,searchText:r,setshowSidebar:a,showSidebar:l,carouselPosition:s,setcarouselPosition:d,popupHandler:c}=e;const{restaurantName:m}=(0,b.g)(),f=window.location.hostname.split(".")[0],w="menugic"!==f&&"localhost"!==f&&"www"!==f&&"api"!==f&&"staging-api"!==f?f:m,$=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[w].activeLanguage}));return(0,v.jsx)(p,{children:(0,v.jsx)(u,{children:(0,v.jsxs)(x,{children:[(0,v.jsx)(g,{activeLanguage:$}),(0,v.jsx)(h,{type:"text",activeLanguage:$,dir:"en"==$?"ltr":"rtl",placeholder:"en"==$?"Search Category":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{n(e.target.value)},value:r})]})})})}var $=i(99891),j=(i(17123),i(11222));const C=n.Ay.div`
 width: 100%;
 padding-bottom: 20px;
 display: flex;
 justify-content: center;
 background-color: ${e=>e.theme.backgroundColor||"#f8f9fa"};
`,k=n.Ay.div`
 flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: 0vh;
  opacity: 1;
  transition:all 0.7s ease-in-out;
`,A=n.Ay.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`,L=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`,z=n.Ay.h3`
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
`,S=(n.Ay.button`
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
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${e=>e.theme.mainColor};
  font-size: 13px;
`),P=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0 20px;
`,E=n.Ay.div`
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
`,_=(n.Ay.p`
  margin: 6px 0 0 0;
  font-size: 12px;
  color: ${e=>e.theme.textColor};
  opacity: 0.7;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`),I=n.Ay.div`
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
`,F=n.Ay.div`
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
    object-fit: ${e=>e.$isLogoFallback?"none":"cover"};
  }
`,T=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,N=n.Ay.h4`
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
`,O=n.Ay.div`
  font-size: 15px;
  font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#007bff"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${e=>"ar"===e.activeLanguage?"row-reverse":"row"};
`,R=n.Ay.span`
  font-size: 14px;
  color: ${e=>e.theme.BoxPriceColor||e.theme.textColor||"#666"};
  text-decoration: line-through;
  opacity: 0.6;
`,B=n.Ay.button`
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
`,D=n.Ay.div`
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
`,U=n.Ay.div`
  position: relative;
  width: 100%;
`,W=n.Ay.div`
    width: ${e=>e.$isFeatured?"100%":"50%"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    @media (min-width: 768px) and (max-width: 1023px) {
        width: ${e=>e.$isFeatured?"100%":"33.333%"};
    }
    @media (min-width: 1024px) {
        width: ${e=>e.$isFeatured?"100%":"20%"};
    }
`,Y=n.Ay.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.theme.BoxColor};
    border-radius: 20px;
    position: relative;

    //cjhange loadeeerr wrappperr and this oneee colorrrr

`,M=n.Ay.img`
  width: 90%;
  height: 100%;
  object-fit: ${e=>e.$isLogoFallback?"none":"cover"};
  border-radius: 10px;
  visibility: ${e=>e.imageLoaded?"visible":"hidden"};
`,q=n.Ay.div`
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


`,H=n.Ay.div`
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

`,V=n.Ay.span`
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



`,X=n.Ay.div`
  display: flex;
  flex-direction: ${e=>e.$isRtl?"row-reverse":"row"};
  gap: 5px;
  justify-content: ${e=>e.$isRtl?"flex-end":"flex-start"};
  text-align: ${e=>e.$isRtl?"right":"left"};
`,K=n.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;
text-decoration:${e=>e.discounted?"line-through":"none"};


`,J=n.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;

`,Z=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Q=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${Z} 1s linear infinite; /* Apply animation */
`,G=n.Ay.div`
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

`,ee=n.Ay.div`
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
`,te=n.Ay.div`
  position: absolute;
  top: 8px;
  left: 8px;
  right: auto;
  font-size: 11px;
  padding: 4px 8px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
  z-index: 2;
`,ie=n.Ay.button`
  position: absolute;
  bottom: 8px;
  left: ${e=>"en"===e.activeLanuguage?"8px":"auto"};
  right: ${e=>"en"===e.activeLanuguage?"auto":"8px"};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0;
  background-color: rgba(255, 255, 255, 0.95);
  color: ${e=>e.$filled?"#e11d48":e.theme.BoxTextColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.2s ease, color 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.08);
    color: ${e=>e.$filled?"#be123c":"#e11d48"};
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(225, 29, 72, 0.35);
  }

  svg {
    fill: none;
    stroke: currentColor;
  }
`,oe=n.Ay.button`
  position: absolute;
  bottom: 8px;
  right: ${e=>"en"===e.activeLanuguage?"8px":"auto"};
  left: ${e=>"en"===e.activeLanuguage?"auto":"8px"};
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
  pointer-events: auto;
  z-index: 1;
  transition: transform 0.2s ease, opacity 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>e.theme.mainColor}40;
  }
`,ne=n.Ay.div`
  position: absolute;
  bottom: 8px;
  right: ${e=>"en"===e.activeLanuguage?"8px":"auto"};
  left: ${e=>"en"===e.activeLanuguage?"auto":"8px"};
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 999px;
  background: ${e=>e.theme.backgroundColor};
  color: ${e=>e.theme.mainColor};
  border: 0;
`;var re=i(42186),ae=i(88282),le=i(18907),se=i(58821),de=i(86001),ce=i(81132),pe=i(70268),ue=i(71481),xe=i(73422),he=i(81926),ge=i(2200);const me=i(34304),fe=a.phF,ve=o.forwardRef(((e,t)=>{var i,n,r,a,l;let{plate:s,setactivePlate:d,activePlate:c,index:p,showPopup:u,setSearchParams:x,searchParams:h,activeCategoryId:g,categories:m,disableDetails:f,$isFeatured:w,onAddToCart:$,wishlistIds:C,onWishlistChange:k}=e;const{restaurantName:A}=(0,b.g)(),L=window.location.hostname.split(".")[0],z="menugic"!==L&&"localhost"!==L&&"www"!==L?L:A,S=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[z]})),[P,E]=((0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[z].activeLanguage})),(0,o.useState)(!1)),_=(0,o.useRef)(null),I=(0,re.jE)(),F=(0,o.useCallback)((()=>{!f&&null!==s&&void 0!==s&&s.id&&I.prefetchQuery({queryKey:(0,ae.Nb)(s.id),queryFn:()=>(0,ae.oo)(s.id),staleTime:3e5})}),[f,null===s||void 0===s?void 0:s.id,I]),T=()=>{if(!new URLSearchParams(window.location.search).get("productId")&&null===c&&P&&!u){f||d(p);const i=new URLSearchParams(h);if(i.set("productId",null===s||void 0===s?void 0:s.id),"all-items"===g?i.set("categoryId","all-items"):g&&"all-items"!==g&&i.set("categoryId",g),x(i),window.history.pushState({},"",`?${i.toString()}`),null!==S&&void 0!==S&&S.id&&null!==s&&void 0!==s&&s.id){var e,t;const i="all-items"===g?s.category_id:g,o=(null===S||void 0===S||null===(e=S.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,he.trackItemView)(S.id,s.id,i,o)}document.body.style.overflow="hidden"}},N=(0,y.wA)(),O=(0,pe.wU)(z),R=C&&"function"===typeof C.has&&C.has(s.id),B=(0,ge.Q)(null===S||void 0===S?void 0:S.currency),D="all-items"===g?s.category_id:g,U=m.find((e=>e.id==D));let Z;Z=U&&0!==parseFloat(U.discount||0)?parseFloat(U.discount||0):parseFloat(s.discount||0);let ve={};try{ve="string"===typeof(null===S||void 0===S?void 0:S.features)?JSON.parse(S.features||"{}"):(null===S||void 0===S?void 0:S.features)||{}}catch(me){ve={}}const be=Boolean(null===s||void 0===s?void 0:s.out_of_stock)||1===Number(null===s||void 0===s?void 0:s.out_of_stock),ye=null!==(i=null===(n=s.images)||void 0===n?void 0:n.findIndex((e=>e.id===s.new_cover_id)))&&void 0!==i?i:-1,we=ye>=0&&(null===(r=s.images)||void 0===r||null===(a=r[ye])||void 0===a?void 0:a.url),$e=null!==S&&void 0!==S&&S.logoURL?(0,se.V)(S.logoURL):null,je=we?(0,se.V)(s.images[ye].url):$e||"",Ce=!me.isEmpty(null===s||void 0===s?void 0:s.form_json)&&!me.isEmpty(JSON.parse((null===s||void 0===s?void 0:s.form_json)||"{}")),ke=!me.isEmpty(null===U||void 0===U?void 0:U.form_json)&&!me.isEmpty(JSON.parse((null===U||void 0===U?void 0:U.form_json)||"{}")),Ae=Ce||ke,Le=(0,o.useCallback)((e=>{const t=document.getElementById("cart-tab-icon");if(!t)return;const i=(null===e||void 0===e?void 0:e.currentTarget)||(null===e||void 0===e?void 0:e.target),o=i?i.getBoundingClientRect():null,n=t.getBoundingClientRect();if(!o)return;const r=(null===S||void 0===S?void 0:S.mainColor)||(null===S||void 0===S?void 0:S.maincolor)||"#a6ce39",a=o.left+o.width/2,l=o.top+o.height/2,s=n.left+n.width/2,d=n.top+n.height/2,c=document.createElement("div");c.style.cssText=`\n        position: fixed;\n        left: ${a-14}px;\n        top: ${l-14}px;\n        width: 28px; height: 28px;\n        border-radius: 50%;\n        background: ${r};\n        box-shadow: 0 4px 15px ${r}88, 0 2px 6px rgba(0,0,0,0.3);\n        z-index: 99999;\n        pointer-events: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      `,c.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>',document.body.appendChild(c);const p=document.createElement("div");p.style.cssText=`\n        position: fixed;\n        left: ${a-10}px;\n        top: ${l-10}px;\n        width: 20px; height: 20px;\n        border-radius: 50%;\n        background: ${r}55;\n        z-index: 99998;\n        pointer-events: none;\n      `,document.body.appendChild(p);const u=(a+s)/2+(a>s?60:-60),x=Math.min(l,d)-120,h=c.animate([{left:a-14+"px",top:l-14+"px",width:"28px",height:"28px",opacity:1,transform:"scale(1)"},{left:u-12+"px",top:x-12+"px",width:"24px",height:"24px",opacity:1,transform:"scale(1.1)",offset:.35},{left:s-8+"px",top:d-8+"px",width:"16px",height:"16px",opacity:.6,transform:"scale(0.6)"}],{duration:650,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"});p.animate([{left:a-10+"px",top:l-10+"px",width:"20px",height:"20px",opacity:.5},{left:u-8+"px",top:x-8+"px",width:"16px",height:"16px",opacity:.3,offset:.4},{left:s-4+"px",top:d-4+"px",width:"8px",height:"8px",opacity:0}],{duration:700,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"}),h.onfinish=()=>{c.remove(),p.remove();(t.closest("[data-tab]")||t.parentElement||t).animate([{transform:"scale(1)"},{transform:"scale(1.35)",offset:.25},{transform:"scale(0.85)",offset:.5},{transform:"scale(1.15)",offset:.75},{transform:"scale(1)"}],{duration:500,easing:"ease-out"})}}),[S]),ze=e=>{var t,i;e&&(e.preventDefault(),e.stopPropagation(),null!==(i=e.nativeEvent)&&void 0!==i&&i.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation());if(ve&&!1===ve.cart)return;if(be)return;if(!0===(null===(t=ve)||void 0===t?void 0:t.quick_add_requires_options)&&Ae)return void T();const o=parseFloat((null===s||void 0===s?void 0:s.en_price)||"0")*(1-parseFloat(Z)/100);if(N((0,de.bE)(z,s,1,{},o,"")),null!==S&&void 0!==S&&S.id&&null!==s&&void 0!==s&&s.id){var n,r;const e="all-items"===g?s.category_id:g,t=(null===S||void 0===S||null===(n=S.branches)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.id)||null;(0,he.trackAddToCart)(S.id,s.id,e,1,t)}Le(e)};return(0,v.jsx)(W,{ref:_,"data-product-container":!0,index:p,activePlate:c,className:"lazy-load",$isFeatured:w,children:(0,v.jsxs)(Y,{children:[(s.is_best_seller||s.isBestSeller)&&(0,v.jsx)(te,{activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,children:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?"Bestseller":"\u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b"}),!P&&(0,v.jsx)(G,{children:(0,v.jsx)(Q,{})}),(0,v.jsxs)(q,{onClick:T,onMouseEnter:F,onTouchStart:F,children:[s.new&&(0,v.jsx)(ee,{children:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?"NEW !":"! \u062c\u062f\u064a\u062f"}),(0,v.jsx)(M,{ref:t,onLoad:()=>{E(!0)},src:je,imageLoaded:P,$isLogoFallback:!we}),O&&(0,v.jsx)(ie,{type:"button",activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,$filled:R,title:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?R?"Remove from wishlist":"Add to wishlist":R?"\u0625\u0632\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629":"\u0623\u0636\u0641 \u0644\u0644\u0645\u0641\u0636\u0644\u0629",onClick:e=>{var t;e&&(e.preventDefault(),e.stopPropagation(),null!==(t=e.nativeEvent)&&void 0!==t&&t.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation());O&&null!==s&&void 0!==s&&s.id&&(async()=>{try{R?await j.A.delete((0,ce.Vr)(s.id),{headers:{Authorization:`Bearer ${O}`}}):await j.A.post(ce.Vb,{product_id:s.id},{headers:{Authorization:`Bearer ${O}`}}),null===k||void 0===k||k(),xe.oR.success("en"===(null===S||void 0===S?void 0:S.activeLanguage)?R?"Removed from wishlist":"Saved to wishlist":R?"\u0623\u064f\u0632\u064a\u0644\u062a \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629":"\u0623\u064f\u0636\u064a\u0641\u062a \u0625\u0644\u0649 \u0627\u0644\u0645\u0641\u0636\u0644\u0629")}catch{xe.oR.error("en"===(null===S||void 0===S?void 0:S.activeLanguage)?"Could not update wishlist":"\u062a\u0639\u0630\u0631 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u0641\u0636\u0644\u0629")}})()},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchStart:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:(0,v.jsx)(fe,{size:18})})]}),!1!==(null===(l=ve)||void 0===l?void 0:l.cart)&&(be?(0,v.jsx)(ne,{activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,children:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,v.jsx)(oe,{type:"button",onClick:ze,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),ze(e)},onTouchStart:e=>{e.stopPropagation()},onPointerDown:e=>{e.stopPropagation()},activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,title:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,v.jsx)(ue._xK,{size:12})})),(0,v.jsxs)(H,{activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,children:[(0,v.jsx)(V,{fontSize:null===S||void 0===S?void 0:S.font_size,children:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?s.en_name:s.ar_name}),!me.isEmpty(s.en_price)&&(0,v.jsxs)(X,{$isRtl:"ar"===(null===S||void 0===S?void 0:S.activeLanguage),children:[(0,v.jsx)(K,{discounted:0!=Z,children:(0,le.T)(parseFloat(s.en_price),B)}),(0,v.jsx)(J,{children:0!=Z&&(0,le.T)(parseFloat(s.en_price)*(1-parseFloat(Z)/100),B)})]})]})]})})}));var be=i(10448),ye=i(34304),we=i.n(ye);const $e=n.i7`
  0% {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
`,je=n.i7`
  0% {
    width: 0%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0px;
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  35% {
    width: 92%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0px;
  }
  65% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.98);
    border-radius: 20px;
    opacity: 1;
  }
  85% {
    transform: translate(-50%, -50%) scale(1.01);
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
`,Ce=n.i7`
  0% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }
  20% {
    transform: translate(-50%, -50%) scale(0.98);
    opacity: 0.95;
  }
  50% {
    width: 92%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0px;
    opacity: 0.6;
  }
  80% {
    opacity: 0.3;
  }
  100% {
    width: 0%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0px;
    opacity: 0;
  }
`,ke=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 299;
  opacity: ${e=>e.CloseAnimation?1:0};
  animation: ${e=>e.CloseAnimation?$e:"none"} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  /* Always capture clicks while mounted so closing doesn't let taps pass through to product grid (avoids reopen on 2nd close) */
  pointer-events: auto;
`,Ae=n.Ay.div`
  position: fixed;
  width: 92%;
  height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
  max-height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
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
  display: flex;
  flex-direction: column;
  
  animation: ${e=>e.CloseAnimation?je:Ce} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: forwards;
  
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mainColor||"#007bff"}40;
    border-radius: 10px;
    &:hover {
      background: ${e=>e.theme.mainColor||"#007bff"}60;
    }
  }
  
  @media (min-width: 768px) {
    width: 88%;
    max-width: 900px;
    height: calc(100vh - 60px);
    max-height: calc(100vh - 60px);
    border-radius: 28px;
    box-shadow: ${e=>e.CloseAnimation?"0 24px 80px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.05)":"none"};
  }
  
  @media (min-width: 1024px) {
    width: 85%;
    max-width: 1000px;
    border-radius: 32px;
    box-shadow: ${e=>e.CloseAnimation?"0 32px 100px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.05)":"none"};
  }
`,Le=n.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,ze=(n.i7`
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
  height: ${e=>e.squareDimension?"55vh":"70vh"};
  margin-top: 65px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: visible;
  position: relative;
`),Se=n.Ay.div`
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
  .swiper-pagination {
    bottom: 8px;
  }
  .swiper-pagination-fraction {
    color: ${e=>e.theme.textColor||"#333"};
    font-size: 14px;
  }
`,Pe=n.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
`,Ee=n.Ay.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  flex-shrink: 0;
`,_e=n.Ay.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,Ie=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Fe=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${Ie} 1s linear infinite; /* Apply animation */
`,Te=n.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,Ne=n.Ay.img`
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
`,Oe=(n.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,(0,n.Ay)(be.m6W)`
  font-size: 14px;
  color: ${e=>e.theme.backgroundColor||"#ffffff"};
`),Re=(0,n.Ay)(be.m6W)`
  font-size: 26px;
  color: ${e=>e.theme.backgroundColor||"#fff"};
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  border-radius: 50%;
  padding: 8px;
  position:absolute;
  left:4%;
  top:45%;
  z-index:20;
  cursor: pointer;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    left:27%;
  }
`,Be=(0,n.Ay)(be.OQo)`
  font-size: 26px;
  color: ${e=>e.theme.backgroundColor||"#fff"};
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  border-radius: 50%;
  padding: 8px;
  position:absolute;
  right:4%;
  top:45%;
  z-index:20;
  cursor: pointer;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    right:27%;
  }
`,De=n.Ay.div`
  position: sticky;
  top: 0;
  width: 100%;
  flex-shrink: 0;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  z-index: 301;
  background-color: ${e=>e.theme.backgroundColor||"#fff"};
  transition: opacity 0.4s ease-in-out;
  
  @media (min-width: 1024px) {
    padding: 20px 40px;
  }
`,Ue=n.Ay.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.textColor||"#1a1a1a"};
  margin: 0;
  text-align: center;
  flex: 1;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 20px;
  
  @media (min-width: 768px) {
    font-size: 22px;
    font-weight: 700;
  }
`,We=n.Ay.button`
  position: relative;
  z-index: 302;
  outline: none;
  border: 0;
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
  }
  
  &:active {
    transform: scale(0.95);
  }
`,Ye=(n.Ay.div`
  width: 100%;
  height: 90px;
  position: relative;
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
`),Me=(n.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${Ye} 1s ease-in-out;
`,n.Ay.div`
  width:90%;
  /* height: ${e=>e.CloseAnimation?"45vh":"25vh"}; */
  height: ${e=>e.squareDimension?"45vh":"60vh"};

  border-radius:40px;
  margin-top: 80px;
  display:flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${Le} 0.4s;
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
`),qe=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,He=n.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${Me} 0.8s ease-in-out;

`,Ve=n.Ay.div`
  width: 90%;
  display: flex;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};; 
  flex-direction: column;
  /* align-items: center; */
  position: relative;
  margin-top: 20px;
  padding-bottom: 100px;
  color: ${e=>e.theme.textColor};
  opacity: ${e=>e.CloseAnimation?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.CloseAnimation?"auto":"none"};
  @media (min-width: 1024px) {
        width: 50%;
    }
    /* background-color: red; */
`,Xe=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  margin-bottom: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid ${e=>e.theme.mainColor?`${e.theme.mainColor}18`:"rgba(0,0,0,0.06)"};
  flex-wrap: wrap;
  direction: ${e=>"en"===e.activeLanguage?"ltr":"rtl"};
`,Ke=n.Ay.span`
  font-size: clamp(1.3rem, 3.8vw, 1.55rem);
  font-weight: 700;
  letter-spacing: ${e=>"en"===e.activeLanguage?"0.02em":"0"};
  line-height: 1.35;
  text-align: ${e=>"en"===e.activeLanguage?"left":"right"};
  color: ${e=>e.theme.textColor};
  flex: 1;
  min-width: 0;
  margin: 0;
`,Je=n.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,Ze=n.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.popupbackgroundColor};
  background: ${e=>e.theme.mainColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,Qe=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 10px 18px;
  border-radius: 12px;
  background: ${e=>e.theme.mainColor?`${e.theme.mainColor}14`:"rgba(0,0,0,0.06)"};
  border: 1px solid ${e=>e.theme.mainColor?`${e.theme.mainColor}28`:"rgba(0,0,0,0.08)"};
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
`,Ge=n.Ay.span`
  font-size: clamp(0.9rem, 2.2vw, 1rem);
  font-weight: ${e=>e.discounted?"500":"600"};
  color: ${e=>e.discounted?e.theme.textColor?`${e.theme.textColor}88`:"rgba(0,0,0,0.45)":e.theme.mainColor||"inherit"};
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  letter-spacing: 0.02em;
`,et=n.Ay.span`
  font-size: clamp(1.15rem, 3vw, 1.4rem);
  font-weight: 700;
  color: ${e=>e.theme.mainColor||"inherit"};
  letter-spacing: 0.03em;
`,tt=n.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,it=n.Ay.div`
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${tt} 0.7s ease-in-out;
  background-color: ${e=>e.theme.backgroundColor};
  display: flex;
  padding-bottom: max(10px, env(safe-area-inset-bottom));
  padding-top: 16px;
  margin-top: 8px;
  opacity: ${e=>e.CloseAnimation?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.CloseAnimation?"auto":"none"};
  @media (min-width: 1024px) {
    width: 50%;
  }
`,ot=n.Ay.button`
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
`,nt=n.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,rt=n.Ay.div`
  display: flex;
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;
  opacity: ${e=>e.CloseAnimation?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.CloseAnimation?"auto":"none"};

`,at=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,lt=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,st=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,dt=(n.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27px;
  width: 27px;
  border-radius: 50%;
  position: relative;
  z-index: 302;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};
  flex-shrink: 0;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (min-width: 1024px) {
    height: 30px;
    width: 30px;
    font-size: 16px;
  }
`),ct=n.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`,pt=n.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,ut=n.Ay.input`
background-color: transparent;
border: 1px solid ${e=>{var t;let i=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(i.startsWith("#")){return`rgba(${parseInt(i.slice(1,3),16)}, ${parseInt(i.slice(3,5),16)}, ${parseInt(i.slice(5,7),16)}, 0.8)`}return i.startsWith("rgb")?i.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.8)`)):i}};
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

`,xt=n.Ay.button`
  position: absolute;
  bottom: 14px;
  right: 25px;
  z-index: 25;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.mainColor||"#007bff"};
  color: ${e=>e.theme.backgroundColor||"#fff"};
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
  &:active {
    transform: scale(0.9);
  }
`,ht=n.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
`,gt=n.Ay.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.15);
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  backdrop-filter: blur(4px);
`,mt=n.Ay.img`
  max-width: none;
  max-height: none;
  transform-origin: center center;
  transform: ${e=>`scale(${e.$scale}) translate(${e.$translateX}px, ${e.$translateY}px)`};
  transition: ${e=>e.$dragging?"none":"transform 0.2s ease"};
  user-select: none;
  -webkit-user-drag: none;
  width: 100vw;
  height: auto;
  object-fit: contain;
`;var ft=i(88620),vt=i(57526);i(44014),i(70045),i(5084);const bt=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
`,yt=n.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
`,wt=n.Ay.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.4s ease-in-out;
  transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,$t=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,jt=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,Ct=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,kt=n.Ay.div`
  margin-top: 20px;
  font-size: 12px;
  color: ${e=>e.theme.mainColor};
  position: relative;
  width: 60px;
  display: flex;
  align-items: center;
`,At=n.Ay.span`
position: absolute;
left: 0;

`,Lt=n.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,zt=(0,n.Ay)(r.Z0P)`
    animation:1.2s ${Lt}  linear infinite ;
    position: absolute;
`;function St(e){let{carouselIndex:t,images:i,CloseAnimation:o,carouselSwiped:n}=e;return(0,v.jsxs)(bt,{CloseAnimation:o,children:[(0,v.jsxs)(yt,{children:[(0,v.jsx)(wt,{carouselIndex:t,children:(0,v.jsx)($t,{})}),i.map((e=>(0,v.jsx)(jt,{children:(0,v.jsx)(Ct,{})})))]}),!n&&(0,v.jsxs)(kt,{children:[(0,v.jsx)(At,{children:"Swipe"}),(0,v.jsx)(zt,{})]})]})}n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const Pt=n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,Et=(n.Ay.label`
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
  border-top: 1px solid ${e=>{var t;let i=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(we().isEmpty(i)&&(i="rgb(0,0,0)"),i.startsWith("#")){return`rgba(${parseInt(i.slice(1,3),16)}, ${parseInt(i.slice(3,5),16)}, ${parseInt(i.slice(5,7),16)}, 0.08)`}return i.startsWith("rgb")?i.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):i}};
`),_t=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,It=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Ft=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let t=e.theme.formColor;if(we().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.1)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.1)`)):t}};
  font-size:10px;

`,Tt=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,Nt=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${e=>e.theme.formColor};

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);var Ot=i(41235);function Rt(e){let{component:t,formData:i,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,o.useState)(i[t.key]||[]);return(0,v.jsxs)(Et,{index:r,children:[(0,v.jsx)(Pt,{children:t.label}),t.values.map((e=>(0,v.jsxs)(It,{children:[s.some((t=>t===e.label))?(0,v.jsx)(Tt,{onClick:()=>{(e=>{let i=s.filter((t=>t!==e.label));d(i),n(t.key,i)})(e)},children:(0,v.jsx)(Ot.RXm,{size:"15px"})}):(0,v.jsx)(Ft,{onClick:()=>{(e=>{d([...s,e.label]),n(t.key,[...s,e.label])})(e)},children:(0,v.jsx)(ue.OiG,{})}),(0,v.jsx)(_t,{children:e.label})]}))),(c=a,c in l?(0,v.jsx)(Nt,{children:"This field is required"}):null)]});var c}const Bt=n.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  border-top: 1px solid ${e=>{var t;let i=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(we().isEmpty(i)&&(i="rgb(0,0,0)"),i.startsWith("#")){return`rgba(${parseInt(i.slice(1,3),16)}, ${parseInt(i.slice(3,5),16)}, ${parseInt(i.slice(5,7),16)}, 0.08)`}return i.startsWith("rgb")?i.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):i}};
`,Dt=n.Ay.div`
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
`,Ut=n.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,Wt=n.Ay.ul`
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

`,Yt=n.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,Mt=n.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,qt=n.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,Ht=n.Ay.div`
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
`,Vt=(n.Ay.label`
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

`);function Xt(e){var t;let{component:i,formData:n,handleChange:r,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;console.log(s),console.log(d);const[c,p]=(0,o.useState)(!1),[u,x]=(0,o.useState)((null===(t=n[i.key])||void 0===t?void 0:t.value)||""),h=(0,o.useRef)(null),g=e=>{x(e.label),p(!1),r(i.key,e)},m=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,o.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,v.jsxs)(Bt,{ref:h,index:l,children:[(0,v.jsx)(Pt,{children:i.label}),i.data.values.length>8?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(Dt,{onClick:()=>p((e=>!e)),children:[u||a,(0,v.jsx)(Ut,{className:c?"up":"",children:"\u25bc"})]}),(0,v.jsx)(Wt,{isOpen:c,children:i.data.values.map(((e,t)=>(0,v.jsx)(Yt,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},t)))})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(Mt,{children:i.data.values.map(((e,t)=>(0,v.jsx)(qt,{children:(0,v.jsx)(Ht,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,v.jsx)(Vt,{children:"This field is required"}):null)]});var f}const Kt=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var t;let i=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(we().isEmpty(i)&&(i="rgb(0,0,0)"),i.startsWith("#")){return`rgba(${parseInt(i.slice(1,3),16)}, ${parseInt(i.slice(3,5),16)}, ${parseInt(i.slice(5,7),16)}, 0.08)`}return i.startsWith("rgb")?i.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):i}};
`,Jt=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,Zt=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Qt=n.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,Gt=n.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,ei=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function ti(e){let{component:t,formData:i,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,o.useState)(i[t.key]||"");return(0,v.jsxs)(Kt,{index:r,children:[(0,v.jsx)(Pt,{children:t.label}),t.values.map((e=>(0,v.jsxs)(Zt,{children:[(0,v.jsx)(Qt,{onClick:()=>{(e=>{d(e),n(t.key,e)})(e)},children:(0,v.jsx)(Gt,{selected:s.label==e.label})}),(0,v.jsx)(Jt,{children:e.label})]}))),(c=a,c in l?(0,v.jsx)(ei,{children:"This field is required"}):null)]});var c}function ii(e){let{formSchema:t,onPriceChange:i,basePrice:n,formData:r,setFormData:a,finalDiscount:l,formErrors:s}=e;(0,o.useEffect)((()=>{c(r)}),[r]);const d=(e,t)=>{a((i=>({...i,[e]:t})))},c=e=>{let o=parseFloat(n)||0,r=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const i=t.values.find((t=>t.label===e)),o=!isNaN(Number(i.value));i&&i.value&&o&&(i.value.startsWith("+")?r+=parseFloat(i.value.slice(1)):i.value.startsWith("-")&&(r-=parseFloat(i.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const i=t.data.values.find((i=>{var o;return i.value===(null===(o=e[t.key])||void 0===o?void 0:o.value)})),n=!isNaN(Number(i.value));i&&n&&(i.value.startsWith("+")?r+=parseFloat(i.value.slice(1)):i.value.startsWith("-")?r-=parseFloat(i.value.slice(1)):o=parseFloat(i.value))}else if("radio"===t.type&&t.values){const i=t.values.find((i=>{var o;return i.value===(null===(o=e[t.key])||void 0===o?void 0:o.value)})),n=!isNaN(Number(i.value));i&&n&&(i.value.startsWith("+")?r+=parseFloat(i.value.slice(1)):i.value.startsWith("-")?r-=parseFloat(i.value.slice(1)):o=parseFloat(i.value))}}));const a=o+r,l=a%1!==0?a.toFixed(2):a.toFixed(0);i(l)};return(0,v.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return console.log(e.key),(0,v.jsx)(Rt,{component:e,formData:r,handleChange:d,index:t,componentKey:e.key,formErrors:s});case"select":return console.log(e.key),(0,v.jsx)(Xt,{component:e,formData:r,handleChange:d,index:t,componentKey:e.key,formErrors:s});case"radio":return(0,v.jsx)(ti,{component:e,formData:r,handleChange:d,index:t,componentKey:e.key,formErrors:s});default:return null}})(e,t)))})}var oi=i(42770),ni=i(5633),ri=i(73556),ai=(i(20965),i(16104));const li=i(34304);function si(e){var t,i,n,r,l,s,d,c,p,u,x,h,g,m,w,$;let{activePlate:j,setactivePlate:C,menu:k,plates:A,productPositions:L,categories:z,activeCategoryId:S,setSearchParams:P,searchParams:E}=e;const{restaurantName:_}=(0,b.g)(),I=window.location.hostname.split(".")[0],F="menugic"!==I&&"localhost"!==I&&"www"!==I&&"api"!==I&&"staging-api"!==I?I:_,T=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[F]})),N=z.find((e=>e.id==S)),{response:O}=(0,ai.$)({productId:null===(t=A[j])||void 0===t?void 0:t.id});(0,o.useEffect)((()=>{var e;let t=null;var i,o;li.isEmpty(null===(e=A[j])||void 0===e?void 0:e.form_json)||(t=li.isEmpty(JSON.parse(null===(i=A[j])||void 0===i?void 0:i.form_json))?null===N||void 0===N?void 0:N.form_json:null===(o=A[j])||void 0===o?void 0:o.form_json);if(li.isEmpty(t))B({});else{var n;const e=JSON.parse(t);if(B(e),2===(null===e||void 0===e?void 0:e.version)&&(null===e||void 0===e||null===(n=e.sizes)||void 0===n?void 0:n.length)>0){var r;const t=parseFloat(null===(r=A[j])||void 0===r?void 0:r.en_price)||0,i=e.sizes.find((e=>"absolute"===e.priceMode&&Number(e.priceModifier)===t));G((()=>({...(0,ri.KE)(),sizeId:i?i.id:e.sizes[0].id})))}}}),[T.activeLanguage]),(0,o.useEffect)((()=>{var e;if(null!==(e=A[j])&&void 0!==e&&e.id&&null!==T&&void 0!==T&&T.id){var t,i;const e=(null===T||void 0===T||null===(t=T.branches)||void 0===t||null===(i=t[0])||void 0===i?void 0:i.id)||null;(0,he.trackItemView)(T.id,A[j].id,A[j].category_id,e)}}),[j,A,null===T||void 0===T?void 0:T.id]);const[R,B]=(0,o.useState)({}),[D,U]=(0,o.useState)(!1),[W,Y]=(0,o.useState)(1),[M,q]=(0,o.useState)({x:0,y:0}),[H,V]=(0,o.useState)(!1),X=(0,o.useRef)(null),K=(0,o.useRef)(null),J=e=>{e.stopPropagation(),Y(1),q({x:0,y:0}),U(!0)},Z=()=>{U(!1)},[Q,G]=(0,o.useState)({}),[ee,te]=(0,o.useState)({}),ie=(0,y.wA)(),[oe,ne]=(0,o.useState)(1),[re,ae]=(0,o.useState)(!1);let ce;ce=0===parseFloat(N.discount)?parseFloat(A[j].discount):parseFloat(N.discount);const pe=(null===(i=A[j])||void 0===i?void 0:i.en_price)||"0",me=pe.includes(".")?parseFloat(pe).toFixed(2):parseFloat(pe).toFixed(0),[fe,ve]=(0,o.useState)(me),[be,ye]=(0,o.useState)(""),we=e=>{ve(e)},[$e,je]=(0,o.useState)(!0),[Ce,Le]=(0,o.useState)(0),Ie=450,Ye=(0,o.useRef)(!1);(0,o.useEffect)((()=>(document.body.style.overflow=$e?"hidden":"auto",()=>{document.body.style.overflow="auto"})),[$e]);const Me=e=>{if(e&&(e.preventDefault(),e.stopPropagation()),Ye.current)return;Ye.current=!0,C(null),je(!1);const t=new URLSearchParams(E);t.delete("productId"),S&&!t.get("categoryId")&&t.set("categoryId",S),window.history.replaceState({},"",`?${t.toString()}`),P(t),setTimeout((()=>{document.body.style.overflow="auto",Ye.current=!1}),Ie)},[tt,bt]=(0,o.useState)(!1),yt=()=>{ae(!0),Le(Ce+1)},wt=()=>{ae(!0),Le(Ce-1)},$t=(0,o.useRef)(null),jt=(0,o.useRef)(null),[Ct,kt]=(0,o.useState)(null);(0,o.useEffect)((()=>{const e=()=>{C(null);const e=new URLSearchParams(E);e.delete("productId"),S&&!e.get("categoryId")&&e.set("categoryId",S),P(e),je(!1),setTimeout((()=>{document.body.style.overflow="auto"}),Ie)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[S,E,P,C,Ie]);const At=2===(null===R||void 0===R?void 0:R.version)&&Array.isArray(null===R||void 0===R?void 0:R.sizes);const Lt=null!==T&&void 0!==T&&T.logoURL?(0,se.V)(T.logoURL):null;let zt=[...null!==(n=null===(r=A[j])||void 0===r?void 0:r.images)&&void 0!==n?n:[]];0===zt.length&&Lt&&(zt=[{id:"fallback-logo",url:T.logoURL,isFallback:!0}]);const Pt=zt.findIndex((e=>{var t;return e.id===(null===(t=A[j])||void 0===t?void 0:t.new_cover_id)}));if(Pt>0){const[e]=zt.splice(Pt,1);zt.unshift(e)}const[Et,_t]=(0,o.useState)({}),It=e=>{_t((t=>({...t,[e]:!0})))},Ft="en"===(null===T||void 0===T?void 0:T.activeLanguage)?null===(l=A[j])||void 0===l?void 0:l.en_description:null===(s=A[j])||void 0===s?void 0:s.ar_description,Tt=Ft?Ft.replace(/<br\s*\/?>/gi,""):"",Nt=(0,ge.Q)(null===T||void 0===T?void 0:T.currency);let Rt=JSON.parse(T.features);const Bt=Boolean(null===(d=A[j])||void 0===d?void 0:d.out_of_stock)||1===Number(null===(c=A[j])||void 0===c?void 0:c.out_of_stock),Dt=N?"en"===(null===T||void 0===T?void 0:T.activeLanguage)?N.en_category:N.ar_category:"",Ut=(null===T||void 0===T?void 0:T.product_details_carousel_style)||"normal";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(ke,{CloseAnimation:$e,onClick:Me}),(0,v.jsxs)(Ae,{CloseAnimation:$e,children:[(0,v.jsxs)(De,{CloseAnimation:$e,children:[(0,v.jsx)(We,{onClick:Me,CloseAnimation:$e,children:(0,v.jsx)(Oe,{})}),(0,v.jsx)(Ue,{activeLanguage:null===T||void 0===T?void 0:T.activeLanguage,children:Dt}),(0,v.jsx)(dt,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),bt(!0),setTimeout((()=>{bt(!1)}),4e3)},CloseAnimation:$e,children:tt?(0,v.jsx)(Ot.RXm,{}):(0,v.jsx)(ue.zU_,{})})]}),(0,v.jsx)(ze,{squareDimension:null===(p=A[j])||void 0===p?void 0:p.square_dimension,CloseAnimation:$e,children:1===zt.length?(0,v.jsx)(Pe,{ref:$t,carouselIndex:0,children:(0,v.jsx)(Ee,{children:(0,v.jsxs)(_e,{children:[!Et[0]&&(0,v.jsx)(Te,{children:(0,v.jsx)(Fe,{})}),(0,v.jsx)(Ne,{src:null!==(u=zt[0])&&void 0!==u&&u.url?(0,se.V)(zt[0].url):Lt||"",onLoad:()=>It(0),onError:e=>{Lt&&e.target.src!==Lt&&(e.target.src=Lt)},CloseAnimation:$e,Loaded:Et[0],alt:"Image 0"}),(0,v.jsx)(xt,{onClick:J,children:(0,v.jsx)(f.gff,{})})]})})}):"normal"===Ut?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Re,{CloseAnimation:$e,onClick:()=>{ae(!0),0!==Ce&&wt()}}),(0,v.jsx)(Be,{CloseAnimation:$e,onClick:()=>{ae(!0),zt.length>Ce+1&&yt()}}),(0,v.jsx)(Pe,{carouselIndex:Ce,ref:$t,onTouchStart:e=>{kt(e.touches[0].clientX)},onTouchMove:e=>{if(Ct){const n=e.touches[0].clientX-Ct;if(n>5)0!==Ce&&wt();else if(n<-5){var t,i,o;(null!==(t=null===(i=A[j])||void 0===i||null===(o=i.images)||void 0===o?void 0:o.length)&&void 0!==t?t:0)>Ce+1&&yt()}kt(null)}},children:zt.map(((e,t)=>(0,v.jsx)(Ee,{children:(0,v.jsxs)(_e,{children:[!Et[t]&&(0,v.jsx)(Te,{children:(0,v.jsx)(Fe,{})}),(0,v.jsx)(Ne,{src:Et[t]||t===Ce?e.url?(0,se.V)(e.url):Lt||"":"",onLoad:()=>It(t),onError:e=>{Lt&&e.target.src!==Lt&&(e.target.src=Lt)},CloseAnimation:$e,Loaded:Et[t],alt:`Image ${t}`}),t===Ce&&(0,v.jsx)(xt,{onClick:J,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))})]}):"effect-cards"===Ut?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Re,{CloseAnimation:$e,onClick:()=>{var e;ae(!0),null===(e=jt.current)||void 0===e||e.slidePrev()}}),(0,v.jsx)(Se,{$closeAnimation:$e,children:(0,v.jsx)(ft.RC,{onSwiper:e=>{jt.current=e},onSlideChange:e=>{Le(e.realIndex),ae(!0)},modules:[vt.ZD],effect:"cards",grabCursor:!0,className:"product-details-swiper",initialSlide:0,children:zt.map(((e,t)=>(0,v.jsx)(ft.qr,{children:(0,v.jsxs)(_e,{children:[!Et[t]&&(0,v.jsx)(Te,{children:(0,v.jsx)(Fe,{})}),(0,v.jsx)(Ne,{$cardSlide:!0,src:Et[t]||t===Ce?e.url?(0,se.V)(e.url):Lt||"":"",onLoad:()=>It(t),onError:e=>{Lt&&e.target.src!==Lt&&(e.target.src=Lt)},CloseAnimation:$e,Loaded:Et[t],alt:`Image ${t}`}),t===Ce&&(0,v.jsx)(xt,{onClick:J,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))},null===(x=A[j])||void 0===x?void 0:x.id)}),(0,v.jsx)(Be,{CloseAnimation:$e,onClick:()=>{var e;ae(!0),null===(e=jt.current)||void 0===e||e.slideNext()}})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(Se,{$closeAnimation:$e,$paginationFraction:!0,children:(0,v.jsx)(ft.RC,{onSwiper:e=>{jt.current=e},onSlideChange:e=>{Le(e.realIndex),ae(!0)},modules:[vt.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:zt.map(((e,t)=>(0,v.jsx)(ft.qr,{children:(0,v.jsxs)(_e,{children:[!Et[t]&&(0,v.jsx)(Te,{children:(0,v.jsx)(Fe,{})}),(0,v.jsx)(Ne,{$cardSlide:!0,src:Et[t]||t===Ce?e.url?(0,se.V)(e.url):Lt||"":"",onLoad:()=>It(t),onError:e=>{Lt&&e.target.src!==Lt&&(e.target.src=Lt)},CloseAnimation:$e,Loaded:Et[t],alt:`Image ${t}`}),t===Ce&&(0,v.jsx)(xt,{onClick:J,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))},null===(h=A[j])||void 0===h?void 0:h.id)})})}),1!==zt.length&&(0,v.jsx)(St,{images:zt,carouselIndex:Ce,CloseAnimation:$e,carouselSwiped:re}),(0,v.jsx)(qe,{children:(0,v.jsx)(He,{children:(0,v.jsxs)(Ve,{CloseAnimation:$e,activeLanguage:T.activeLanguage,children:[(0,v.jsxs)(Xe,{activeLanguage:T.activeLanguage,children:[(0,v.jsx)(Ke,{activeLanguage:T.activeLanguage,children:"en"==T.activeLanguage?null===(g=A[j])||void 0===g?void 0:g.en_name:null===(m=A[j])||void 0===m?void 0:m.ar_name}),!li.isEmpty(null===(w=A[j])||void 0===w?void 0:w.en_price)&&(0,v.jsxs)(Qe,{children:[(0,v.jsx)(Ge,{activeLanguage:T.activeLanguage,discounted:0!=ce,children:(0,le.T)(fe,Nt)}),0!=ce&&(0,v.jsx)(et,{activeLanguage:T.activeLanguage,children:(0,le.T)(fe*(1-parseFloat(ce)/100),Nt)})]})]}),!li.isEmpty(Tt)&&(0,v.jsx)(Je,{activeLanguage:T.activeLanguage,dangerouslySetInnerHTML:{__html:Tt}}),Bt&&(0,v.jsx)(Ze,{children:"en"===T.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),(0,v.jsx)(ni.A,{macros:null===($=A[j])||void 0===$?void 0:$.macros,activeLanguage:null===T||void 0===T?void 0:T.activeLanguage}),At&&(0,v.jsx)(oi.A,{options:R,formData:Q,setFormData:G,formErrors:ee,activeLanguage:T.activeLanguage,basePrice:me,onPriceChange:we}),!At&&(null===R||void 0===R?void 0:R.components)&&(0,v.jsx)(ii,{formSchema:R,onPriceChange:we,formData:Q,setFormData:G,basePrice:me,formErrors:ee}),(0,v.jsxs)(ct,{activeLanguage:T.activeLanguage,children:[(0,v.jsx)(pt,{children:"en"==T.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,v.jsx)(ut,{activeLanguage:T.activeLanguage,onChange:e=>ye(e.target.value),placeholder:"en"==T.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(null===Rt||void 0===Rt?void 0:Rt.cart)&&!Bt&&(0,v.jsxs)(it,{CloseAnimation:$e,children:[(0,v.jsxs)(rt,{CloseAnimation:$e,children:[(0,v.jsx)(at,{onClick:()=>{ne(oe+1)},children:"+"}),(0,v.jsx)(st,{children:oe}),(0,v.jsx)(lt,{onClick:()=>{oe>1&&ne(oe-1)},children:"-"})]}),(0,v.jsxs)(ot,{onClick:()=>{var e;if(At){var t;const e={};if((null===(t=R.sizes)||void 0===t?void 0:t.length)>0&&(null===Q||void 0===Q||!Q.sizeId)&&(e.size="Please select a size."),Object.keys(e).length>0)return void te(e)}else if("{}"!==JSON.stringify(R)){const e=function(e,t){const i={},o=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return o.forEach((e=>{var o;e in t&&0!==(null===(o=t[e])||void 0===o?void 0:o.length)&&"{}"!==JSON.stringify(t[e])||(i[e]="This field is required.")})),i}(R,Q);if(Object.keys(e).length>0)return void te(e)}let i=fe*(1-parseFloat(ce)/100);if(Ye.current||(Ye.current=!0,je(!1),C(null),setTimeout((()=>{document.body.style.overflow="auto",Ye.current=!1}),Ie)),ie((0,de.bE)(F,A[j],oe,Q,i,be)),null!==T&&void 0!==T&&T.id&&null!==(e=A[j])&&void 0!==e&&e.id){var o,n;const e=(null===T||void 0===T||null===(o=T.branches)||void 0===o||null===(n=o[0])||void 0===n?void 0:n.id)||null;(0,he.trackAddToCart)(T.id,A[j].id,A[j].category_id,oe,e)}xe.oR.success("en"===(null===T||void 0===T?void 0:T.activeLanguage)?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629"),ne(1),te({})},children:["en"==T.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",(0,v.jsx)(nt,{children:(0,le.T)(oe*(fe*(1-parseFloat(ce)/100)),Nt)})]})]})]}),D&&(0,v.jsxs)(ht,{onClick:Z,onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,i=e.touches[0].clientY-e.touches[1].clientY;K.current=Math.hypot(t,i)}else 1===e.touches.length&&(V(!0),X.current={x:e.touches[0].clientX,y:e.touches[0].clientY})},onTouchMove:e=>{if(2===e.touches.length&&K.current){const t=e.touches[0].clientX-e.touches[1].clientX,i=e.touches[0].clientY-e.touches[1].clientY,o=Math.hypot(t,i),n=o/K.current;Y((e=>Math.min(Math.max(e*n,1),5))),K.current=o}else if(1===e.touches.length&&H&&W>1){const t=e.touches[0],i=t.clientX-X.current.x,o=t.clientY-X.current.y;q((e=>({x:e.x+i/W,y:e.y+o/W}))),X.current={x:t.clientX,y:t.clientY}}},onTouchEnd:()=>{V(!1),K.current=null,X.current=null},children:[(0,v.jsx)(gt,{onClick:Z,children:(0,v.jsx)(a.$8F,{})}),(0,v.jsx)(mt,{src:(()=>{const e=zt[Ce];return e&&e.url?(0,se.V)(e.url):Lt||""})(),alt:"Zoomed",$scale:W,$translateX:M.x,$translateY:M.y,$dragging:H,onClick:e=>e.stopPropagation(),onDoubleClick:()=>{W>1?(Y(1),q({x:0,y:0})):Y(2.5)}})]})]})}var di=i(9328),ci=i(32415);const pi=i(34304);function ui(e){var t,n,r;let{menu:a,activeCategory:l,showPopup:s,searchText:d,carouselPosition:c,setcarouselPosition:p,setactiveCategory:u,categories:x,onAddToCart:h}=e;const[g,m]=(0,o.useState)(null),[f,w]=(0,$.ok)(),{restaurantName:W}=(0,b.g)(),Y=window.location.hostname.split(".")[0],M="menugic"!==Y&&"localhost"!==Y&&"www"!==Y&&"api"!==Y&&"staging-api"!==Y?Y:W,q=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[M].activeLanguage})),H=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[M]})),V=(0,y.wA)(),[X,K]=(0,o.useState)((()=>new Set)),J=(0,o.useCallback)((async()=>{const e=(0,pe.wU)(M);if(e)try{const{data:t}=await j.A.get(ce.Vb,{headers:{Authorization:`Bearer ${e}`}}),i=(Array.isArray(t)?t:[]).map((e=>e.id));K(new Set(i))}catch{K(new Set)}else K(new Set)}),[M]);(0,o.useEffect)((()=>{J()}),[J]),(0,o.useEffect)((()=>{const e=e=>{var t;null!==e&&void 0!==e&&null!==(t=e.detail)&&void 0!==t&&t.restaurantName&&e.detail.restaurantName!==M||J()};return window.addEventListener("menugic-customer-auth",e),()=>window.removeEventListener("menugic-customer-auth",e)}),[M,J]);const[Z,Q]=(0,o.useState)([]),[G,ee]=(0,o.useState)([]),te=(0,o.useRef)(),ie=(0,o.useRef)(),oe=(0,re.jE)(),ne=(0,o.useCallback)((e=>{e&&oe.prefetchQuery({queryKey:(0,ae.Nb)(e),queryFn:()=>(0,ae.oo)(e),staleTime:3e5})}),[oe]),he="all-items"===l,me=l&&!he?String(l):null,fe=(null===H||void 0===H?void 0:H.all_items_style)||"grid",{data:be,fetchNextPage:ye,hasNextPage:we,isFetchingNextPage:$e}=(0,di.w)(me),{data:je,fetchNextPage:Ce,hasNextPage:ke,isFetchingNextPage:Ae}=(0,ci.u)(he?null===H||void 0===H?void 0:H.id:null),Le=(null===je||void 0===je||null===(t=je.pages)||void 0===t?void 0:t.flat())||[],ze=()=>{const e=null===G||void 0===G?void 0:G.map((e=>{if(e.current){var t;const i=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return{x:i.left,y:i.top,width:i.width}}return null}));Q(e)};(0,o.useEffect)((()=>{ze()}),[G]),(0,o.useEffect)((()=>{var e;if(a&&null!==l&&(null===be||void 0===be||null===(e=be.pages)||void 0===e?void 0:e.flat().length)>0){var t,i;const e=null===be||void 0===be||null===(t=be.pages)||void 0===t||null===(i=t.flat())||void 0===i?void 0:i.filter((e=>e["en"===q?"en_name":"ar_name"].toLowerCase().includes(d.toLowerCase()))).map((()=>o.createRef()));ee(e)}}),[a,l,d,be]),(0,o.useEffect)((()=>{const e=()=>{ze()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[G]),(0,o.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&we&&!$e&&ye()}),{threshold:.1});return te.current&&e.observe(te.current),()=>{te.current&&e.unobserve(te.current)}}),[we,$e,ye]),(0,o.useEffect)((()=>{if(!he)return;let e,t;return t=setTimeout((()=>{e=new IntersectionObserver((e=>{e[0].isIntersecting&&ke&&!Ae&&Ce()}),{threshold:.2}),ie.current&&e.observe(ie.current)}),100),()=>{clearTimeout(t),e&&ie.current&&e.unobserve(ie.current)}}),[Ce,ke,he,Ae,Le]);const Se=(null===be||void 0===be||null===(n=be.pages)||void 0===n||null===(r=n.flat())||void 0===r?void 0:r.filter((e=>!(Boolean(null===e||void 0===e?void 0:e.hide)||1===Number(null===e||void 0===e?void 0:e.hide))&&e["en"===q?"en_name":"ar_name"].toLowerCase().includes(d.toLowerCase()))))||[],Pe=o.useMemo((()=>{if(!he)return[];return(x||[]).filter((e=>!e.isAllItems)).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))).map((e=>{const t=Le.filter((t=>{if(Boolean(null===t||void 0===t?void 0:t.hide)||1===Number(null===t||void 0===t?void 0:t.hide))return!1;if(t.category_id!=e.id)return!1;const i=t["en"===q?"en_name":"ar_name"]||"";return!d||function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase().includes(d.toLowerCase())}(i)})).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0)));return{category:e,items:t}})).filter((e=>e.items.length>0))}),[q,Le,x,he,d]);console.log(Se);const[Ee,_e]=(0,o.useState)(c),[Ie,Fe]=(0,o.useState)(!1),[Te,Ne]=(0,o.useState)(x.length<4?3:4);(0,o.useRef)(0),(0,o.useRef)(0);return(0,o.useEffect)((()=>{_e(x.findIndex((e=>e.id==l)))}),[l]),(0,o.useEffect)((()=>{he&&m(null)}),[he]),(0,o.useEffect)((()=>{f.get("productId")||m(null)}),[f]),(0,v.jsx)(C,{activeCategory:l,children:he?(0,v.jsxs)(A,{children:[Pe.map((e=>(0,v.jsxs)(L,{children:[(0,v.jsx)(z,{activeLanguage:q,children:"en"===q?e.category.en_category:e.category.ar_category}),"list"===fe?(0,v.jsx)(_,{children:e.items.map(((e,t)=>{var o,n,r,a;const s=x.find((t=>t.id==e.category_id));let d;d=s&&0!==parseFloat(s.discount||0)?parseFloat(s.discount||0):parseFloat(e.discount||0);const c=0!==d?parseFloat(e.en_price)*(1-parseFloat(d)/100):parseFloat(e.en_price),p=(0,ge.Q)(null===H||void 0===H?void 0:H.currency),u=null!==(o=null===(n=e.images)||void 0===n?void 0:n.findIndex((t=>t.id==e.new_cover_id)))&&void 0!==o?o:0,g=null===(r=e.images)||void 0===r||null===(a=r[u])||void 0===a?void 0:a.url,m=null!==H&&void 0!==H&&H.logoURL?(0,se.V)(H.logoURL):null,b=JSON.parse((null===H||void 0===H?void 0:H.features)||"{}"),y=Boolean(null===e||void 0===e?void 0:e.out_of_stock)||1===Number(null===e||void 0===e?void 0:e.out_of_stock),$=!pi.isEmpty(null===e||void 0===e?void 0:e.form_json)&&!pi.isEmpty(JSON.parse((null===e||void 0===e?void 0:e.form_json)||"{}")),j=!pi.isEmpty(null===s||void 0===s?void 0:s.form_json)&&!pi.isEmpty(JSON.parse((null===s||void 0===s?void 0:s.form_json)||"{}")),C=$||j,k=t=>{if(t.preventDefault(),t.stopPropagation(),null===b||void 0===b||!b.cart||y)return;if(C){const t=new URLSearchParams(f);return t.set("productId",e.id),t.set("categoryId","all-items"),w(t),window.history.pushState({},"",`?${t.toString()}`),void(document.body.style.overflow="hidden")}const o=parseFloat((null===e||void 0===e?void 0:e.en_price)||"0")*(1-parseFloat(d)/100);if(V((0,de.bE)(M,e,1,{},o,"")),null!==H&&void 0!==H&&H.id&&null!==e&&void 0!==e&&e.id){var n,r;const{trackAddToCart:t}=i(81926),o="all-items"===l?e.category_id:l,a=(null===H||void 0===H||null===(n=H.branches)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.id)||null;t(H.id,e.id,o,1,a)}h&&t.currentTarget&&h(t.currentTarget),xe.oR.success("en"===q?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629")};return(0,v.jsxs)(U,{children:[(0,v.jsxs)(I,{onClick:()=>{const t=new URLSearchParams(f);t.set("productId",e.id),t.set("categoryId","all-items"),w(t),window.history.pushState({},"",`?${t.toString()}`),document.body.style.overflow="hidden"},onMouseEnter:()=>ne(e.id),onTouchStart:()=>ne(e.id),style:{cursor:"pointer"},children:[(0,v.jsx)(F,{$isLogoFallback:!g,children:g?(0,v.jsx)("img",{src:(0,se.V)(g),alt:"en"===q?e.en_name:e.ar_name,onError:e=>{m&&e.target.src!==m&&(e.target.src=m)}}):m?(0,v.jsx)("img",{src:m,alt:"en"===q?e.en_name:e.ar_name}):null}),(0,v.jsxs)(T,{activeLanguage:q,children:[(0,v.jsx)(N,{children:"en"===q?e.en_name:e.ar_name}),e.en_price&&(0,v.jsxs)(O,{activeLanguage:q,children:[0!==d&&(0,v.jsx)(R,{children:(0,le.T)(parseFloat(e.en_price),p)}),(0,v.jsx)("span",{children:(0,le.T)(c,p)})]})]})]}),(null===b||void 0===b?void 0:b.cart)&&(y?(0,v.jsx)(D,{activeLanguage:q,children:"en"===q?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,v.jsx)(B,{type:"button",onClick:k,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),k(e)},activeLanguage:q,title:"en"===q?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,v.jsx)(ue._xK,{size:12})}))]},e.id)}))}):(0,v.jsx)(k,{children:e.items.map(((e,t)=>(0,v.jsx)(ve,{index:t,plate:e,activePlate:null,setactivePlate:m,showPopup:s,setSearchParams:w,searchParams:f,activeCategoryId:l,categories:x,disableDetails:!1,onAddToCart:h,wishlistIds:X,onWishlistChange:J},e.id)))})]},e.category.id))),ke&&(0,v.jsx)("div",{ref:ie,style:{height:"40px"}}),Ae&&(0,v.jsx)(P,{children:(0,v.jsxs)(S,{children:[(0,v.jsx)(E,{}),"en"===q?"Loading more...":"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f..."]})})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(k,{activePlate:g,children:[null===a||void 0===a?void 0:a.map(((e,t)=>{if(l==e.id)return(0,v.jsx)(v.Fragment,{children:Se.map(((e,t)=>(0,v.jsx)(ve,{index:t,plate:e,activePlate:g,setactivePlate:m,ref:G[t],showPopup:s,setSearchParams:w,searchParams:f,activeCategoryId:l,categories:x,onAddToCart:h,wishlistIds:X,onWishlistChange:J})))})})),(0,v.jsx)("div",{ref:te,style:{height:"20px"}})]}),null!==g&&!f.get("productId")&&g<Se.length&&(0,v.jsx)(si,{menu:null===a||void 0===a?void 0:a.find((e=>e.id===l)),activePlate:g,setactivePlate:m,plates:Se,productPositions:Z,activeCategoryId:l,categories:x,setSearchParams:w,searchParams:f})]})})}var xi=i(24192),hi=i(50795),gi=i(31088),mi=i(85327),fi=i(5677),vi=i(38495),bi=i(79111),yi=i(58169);const wi=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
`,$i=n.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
`,ji=n.Ay.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.4s ease-in-out;
  transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,Ci=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,ki=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,Ai=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,Li=n.Ay.div`
  margin-top: 20px;
  font-size: 12px;
  color: ${e=>e.theme.mainColor};
  position: relative;
  width: 60px;
  display: flex;
  align-items: center;
`,zi=n.Ay.span`
position: absolute;
left: 0;

`,Si=n.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,Pi=(0,n.Ay)(r.Z0P)`
    animation:1.2s ${Si}  linear infinite ;
    position: absolute;
`;function Ei(e){let{carouselIndex:t,images:i,CloseAnimation:o,carouselSwiped:n}=e;return(0,v.jsxs)(wi,{CloseAnimation:o,children:[(0,v.jsxs)($i,{children:[(0,v.jsx)(ji,{carouselIndex:t,children:(0,v.jsx)(Ci,{})}),i.map((e=>(0,v.jsx)(ki,{children:(0,v.jsx)(Ai,{})})))]}),!n&&(0,v.jsxs)(Li,{children:[(0,v.jsx)(zi,{children:"Swipe"}),(0,v.jsx)(Pi,{})]})]})}n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const _i=n.Ay.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,Ii=(n.Ay.label`
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
  border-top: 1px solid ${e=>{var t;let i=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(we().isEmpty(i)&&(i="rgb(0,0,0)"),i.startsWith("#")){return`rgba(${parseInt(i.slice(1,3),16)}, ${parseInt(i.slice(3,5),16)}, ${parseInt(i.slice(5,7),16)}, 0.08)`}return i.startsWith("rgb")?i.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):i}};
`),Fi=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,Ti=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Ni=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let t=e.theme.formColor;if(we().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.3)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.3)`)):t}};
  font-size:10px;

`,Oi=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,Ri=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Bi(e){let{component:t,formData:i,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,o.useState)(i[t.key]||[]);return(0,v.jsxs)(Ii,{index:r,children:[(0,v.jsx)(_i,{children:t.label}),t.values.map((e=>(0,v.jsxs)(Ti,{children:[s.some((t=>t===e.label))?(0,v.jsx)(Oi,{onClick:()=>{(e=>{let i=s.filter((t=>t!==e.label));d(i),n(t.key,i)})(e)},children:(0,v.jsx)(Ot.RXm,{size:"15px"})}):(0,v.jsx)(Ni,{onClick:()=>{(e=>{d([...s,e.label]),n(t.key,[...s,e.label])})(e)},children:(0,v.jsx)(ue.OiG,{})}),(0,v.jsx)(Fi,{children:e.label})]}))),(c=a,c in l?(0,v.jsx)(Ri,{children:"This field is required"}):null)]});var c}const Di=n.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};

  border-top: 1px solid ${e=>{var t;let i=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(we().isEmpty(i)&&(i="rgb(0,0,0)"),i.startsWith("#")){return`rgba(${parseInt(i.slice(1,3),16)}, ${parseInt(i.slice(3,5),16)}, ${parseInt(i.slice(5,7),16)}, 0.08)`}return i.startsWith("rgb")?i.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):i}};
`,Ui=n.Ay.div`
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
`,Wi=n.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,Yi=n.Ay.ul`
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

`,Mi=n.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,qi=n.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,Hi=n.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,Vi=n.Ay.div`
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
`,Xi=(n.Ay.label`
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

`);function Ki(e){var t;let{component:i,formData:n,handleChange:r,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;const[c,p]=(0,o.useState)(!1),[u,x]=(0,o.useState)((null===(t=n[i.key])||void 0===t?void 0:t.value)||""),h=(0,o.useRef)(null),g=e=>{x(e.label),p(!1),r(i.key,e)},m=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,o.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,v.jsxs)(Di,{ref:h,index:l,children:[(0,v.jsx)(_i,{children:i.label}),i.data.values.length>8?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(Ui,{onClick:()=>p((e=>!e)),children:[u||a,(0,v.jsx)(Wi,{className:c?"up":"",children:"\u25bc"})]}),(0,v.jsx)(Yi,{isOpen:c,children:i.data.values.map(((e,t)=>(0,v.jsx)(Mi,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},t)))})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(qi,{children:i.data.values.map(((e,t)=>(0,v.jsx)(Hi,{children:(0,v.jsx)(Vi,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,v.jsx)(Xi,{children:"This field is required"}):null)]});var f}const Ji=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var t;let i=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(we().isEmpty(i)&&(i="rgb(0,0,0)"),i.startsWith("#")){return`rgba(${parseInt(i.slice(1,3),16)}, ${parseInt(i.slice(3,5),16)}, ${parseInt(i.slice(5,7),16)}, 0.08)`}return i.startsWith("rgb")?i.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):i}};
`,Zi=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,Qi=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Gi=n.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,eo=n.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,to=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function io(e){let{component:t,formData:i,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,o.useState)(i[t.key]||"");return(0,v.jsxs)(Ji,{index:r,children:[(0,v.jsx)(_i,{children:t.label}),t.values.map((e=>(0,v.jsxs)(Qi,{children:[(0,v.jsx)(Gi,{onClick:()=>{(e=>{d(e),n(t.key,e)})(e)},children:(0,v.jsx)(eo,{selected:s.label==e.label})}),(0,v.jsx)(Zi,{children:e.label})]}))),(c=a,c in l?(0,v.jsx)(to,{children:"This field is required"}):null)]});var c}function oo(e){let{formSchema:t,onPriceChange:i,basePrice:n,formData:r,setFormData:a,formErrors:l}=e;(0,o.useEffect)((()=>{d(r)}),[r]);const s=(e,t)=>{a((i=>({...i,[e]:t})))},d=e=>{let o=parseFloat(n)||0,r=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const i=t.values.find((t=>t.label===e)),o=!isNaN(Number(i.value));i&&i.value&&o&&(i.value.startsWith("+")?r+=parseFloat(i.value.slice(1)):i.value.startsWith("-")&&(r-=parseFloat(i.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const i=t.data.values.find((i=>{var o;return i.value===(null===(o=e[t.key])||void 0===o?void 0:o.value)})),n=!isNaN(Number(i.value));i&&n&&(i.value.startsWith("+")?r+=parseFloat(i.value.slice(1)):i.value.startsWith("-")?r-=parseFloat(i.value.slice(1)):o=parseFloat(i.value))}else if("radio"===t.type&&t.values){const i=t.values.find((i=>{var o;return i.value===(null===(o=e[t.key])||void 0===o?void 0:o.value)})),n=!isNaN(Number(i.value));i&&n&&(i.value.startsWith("+")?r+=parseFloat(i.value.slice(1)):i.value.startsWith("-")?r-=parseFloat(i.value.slice(1)):o=parseFloat(i.value))}}));const a=o+r,l=a%1!==0?a.toFixed(2):a.toFixed(0);i(l)};return(0,v.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return(0,v.jsx)(Bi,{component:e,formData:r,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"select":return(0,v.jsx)(Ki,{component:e,formData:r,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"radio":return(0,v.jsx)(io,{component:e,formData:r,handleChange:s,index:t,componentKey:e.key,formErrors:l});default:return null}})(e,t)))})}function no(e){var t,i,n,l;let{productId:s,setSearchParams:d,searchParams:c}=e;const{restaurantName:p}=(0,b.g)(),u=window.location.hostname.split(".")[0],x="menugic"!==u&&"localhost"!==u&&"www"!==u&&"api"!==u&&"staging-api"!==u?u:p,h=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]}));let g=null;const{response:m,isLoading:w}=(0,ae.VL)({productId:s,onSuccess:()=>{}}),{response:$}=(0,ai.$)({productId:s});var j;((0,o.useEffect)((()=>{var e,t;null!==m&&void 0!==m&&m.en_price&&!w&&(X(parseFloat(m.en_price)),J(parseFloat(null===m||void 0===m?void 0:m.en_price)),0===parseFloat(null===m||void 0===m||null===(e=m.category)||void 0===e?void 0:e.discount)?ee(parseFloat(null===m||void 0===m?void 0:m.discount)||0):ee(parseFloat(null===m||void 0===m||null===(t=m.category)||void 0===t?void 0:t.discount)||0))}),[w]),we().isEmpty(null===m||void 0===m?void 0:m.form_json))||(g=we().isEmpty(JSON.parse(null===m||void 0===m?void 0:m.form_json))?null===m||void 0===m||null===(j=m.category)||void 0===j?void 0:j.form_json:null===m||void 0===m?void 0:m.form_json);const[C,k]=(0,o.useState)({});(0,o.useEffect)((()=>{if(!we().isEmpty(g)){var e;const t=JSON.parse(g);if(k(t),2===(null===t||void 0===t?void 0:t.version)&&(null===t||void 0===t||null===(e=t.sizes)||void 0===e?void 0:e.length)>0){const e=parseFloat(null===m||void 0===m?void 0:m.en_price)||0,i=t.sizes.find((t=>"absolute"===t.priceMode&&Number(t.priceModifier)===e));L((()=>({...(0,ri.KE)(),sizeId:i?i.id:t.sizes[0].id})))}}}),[g]);const[A,L]=(0,o.useState)({}),[z,S]=(0,o.useState)({}),[P,E]=(0,o.useState)(!1),[_,I]=(0,o.useState)(1),[F,T]=(0,o.useState)({x:0,y:0}),[N,O]=(0,o.useState)(!1),R=(0,o.useRef)(null),B=(0,o.useRef)(null),D=e=>{e.stopPropagation(),I(1),T({x:0,y:0}),E(!0)},U=()=>{E(!1)},W=(0,y.wA)(),[Y,M]=(0,o.useState)(1),[q,H]=(0,o.useState)(!1),[V,X]=(0,o.useState)(parseFloat(null===m||void 0===m?void 0:m.en_price)||0),[K,J]=(0,o.useState)(parseFloat(null===m||void 0===m?void 0:m.en_price)||0),[Z,Q]=(0,o.useState)(""),[G,ee]=(0,o.useState)(0),te=e=>{J(parseFloat(e)||0)},[ie,oe]=(0,o.useState)(!0),[ne,re]=(0,o.useState)(0),ce=(0,o.useRef)(!1);(0,o.useEffect)((()=>(document.body.style.overflow=ie?"hidden":"auto",()=>{document.body.style.overflow="auto"})),[ie]);const pe=e=>{if(e&&(e.preventDefault(),e.stopPropagation()),ce.current)return;ce.current=!0,document.body.style.overflow="auto";const t=new URLSearchParams(c);t.delete("productId"),window.history.replaceState({},"",`${window.location.pathname}${t.toString()?`?${t.toString()}`:""}`),d(t),oe(!1),re(0)},[ue,xe]=(0,o.useState)(!1),he=()=>{H(!0),re(ne+1)},me=()=>{H(!0),re(ne-1)},fe=(0,o.useRef)(null),ve=(0,o.useRef)(null),[be,ye]=(0,o.useState)(null);(0,o.useEffect)((()=>{const e=()=>{pe()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const $e=2===(null===C||void 0===C?void 0:C.version)&&Array.isArray(null===C||void 0===C?void 0:C.sizes);const je=null!==h&&void 0!==h&&h.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${h.logoURL}`:null;let Ce=[...null!==(t=null===m||void 0===m?void 0:m.images)&&void 0!==t?t:[]];0===Ce.length&&je&&(Ce=[{id:"fallback-logo",url:h.logoURL,isFallback:!0}]);const ke=Ce.findIndex((e=>e.id===(null===m||void 0===m?void 0:m.new_cover_id)));if(ke>0){const[e]=Ce.splice(ke,1);Ce.unshift(e)}const[Ae,Le]=(0,o.useState)({}),ze=e=>{Le((t=>({...t,[e]:!0})))},Se="en"===(null===h||void 0===h?void 0:h.activeLanguage)?null===m||void 0===m?void 0:m.en_description:null===m||void 0===m?void 0:m.ar_description,Pe=(0,ge.Q)(null===h||void 0===h?void 0:h.currency),Ee=(null===h||void 0===h?void 0:h.product_details_carousel_style)||"normal";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(yi.zs,{CloseAnimation:ie,onClick:pe}),(0,v.jsxs)(yi.Zh,{CloseAnimation:ie,children:[(0,v.jsxs)(yi.Tn,{CloseAnimation:ie,children:[(0,v.jsx)(yi.k8,{onClick:pe,CloseAnimation:ie,children:(0,v.jsx)(yi.Z3,{})}),(0,v.jsx)(yi.N0,{activeLanguage:null===h||void 0===h?void 0:h.activeLanguage,children:w?"\u2014":"en"===(null===h||void 0===h?void 0:h.activeLanguage)?null===m||void 0===m||null===(i=m.category)||void 0===i?void 0:i.en_category:null===m||void 0===m||null===(n=m.category)||void 0===n?void 0:n.ar_category}),(0,v.jsx)(yi.i8,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),xe(!0),setTimeout((()=>{xe(!1)}),4e3)},CloseAnimation:ie,style:{visibility:w?"hidden":"visible"},children:ue?(0,v.jsx)(Ot.RXm,{}):(0,v.jsx)(r.zU_,{})})]}),w?(0,v.jsxs)(yi.uL,{children:[(0,v.jsx)(yi.fk,{width:"100%",height:"40vh",radius:"16px",style:{maxWidth:"400px",marginBottom:"20px"}}),(0,v.jsx)(yi.fk,{width:"85%",height:"28px",style:{marginBottom:"12px"}}),(0,v.jsx)(yi.fk,{width:"45%",height:"22px",style:{marginBottom:"8px"}}),(0,v.jsx)(yi.fk,{width:"70%",height:"14px",style:{marginBottom:"6px"}}),(0,v.jsx)(yi.fk,{width:"60%",height:"14px"})]}):(0,v.jsxs)(o.Fragment,{children:[(0,v.jsx)(yi.I,{squareDimension:null===m||void 0===m?void 0:m.square_dimension,CloseAnimation:ie,children:1===Ce.length?(0,v.jsx)(yi.FN,{ref:fe,carouselIndex:0,children:(0,v.jsx)(yi.A7,{children:(0,v.jsxs)(yi.xW,{children:[!Ae[0]&&(0,v.jsx)(yi.rL,{children:(0,v.jsx)(yi.aH,{})}),(0,v.jsx)(yi._V,{src:null!==(l=Ce[0])&&void 0!==l&&l.url?(0,se.V)(Ce[0].url):je||"",onLoad:()=>ze(0),onError:e=>{je&&e.target.src!==je&&(e.target.src=je)},CloseAnimation:ie,Loaded:Ae[0],alt:"Image 0"}),(0,v.jsx)(yi.IP,{onClick:D,children:(0,v.jsx)(f.gff,{})})]})})}):"normal"===Ee?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(yi.mK,{CloseAnimation:ie,onClick:()=>{H(!0),0!==ne&&me()}}),(0,v.jsx)(yi.eo,{CloseAnimation:ie,onClick:()=>{H(!0),Ce.length>ne+1&&he()}}),(0,v.jsx)(yi.FN,{carouselIndex:ne,ref:fe,onTouchStart:e=>{ye(e.touches[0].clientX)},onTouchMove:e=>{if(be){const o=e.touches[0].clientX-be;if(o>5)0!==ne&&me();else if(o<-5){var t,i;(null!==(t=null===m||void 0===m||null===(i=m.images)||void 0===i?void 0:i.length)&&void 0!==t?t:0)>ne+1&&he()}ye(null)}},children:Ce.map(((e,t)=>(0,v.jsx)(yi.A7,{children:(0,v.jsxs)(yi.xW,{children:[!Ae[t]&&(0,v.jsx)(yi.rL,{children:(0,v.jsx)(yi.aH,{})}),(0,v.jsx)(yi._V,{src:Ae[t]||t===ne?null!==e&&void 0!==e&&e.url?(0,se.V)(e.url):je||"":"",onLoad:()=>ze(t),onError:e=>{je&&e.target.src!==je&&(e.target.src=je)},CloseAnimation:ie,Loaded:Ae[t],alt:`Image ${t}`}),t===ne&&(0,v.jsx)(yi.IP,{onClick:D,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))})]}):"effect-cards"===Ee?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(yi.mK,{CloseAnimation:ie,onClick:()=>{var e;H(!0),null===(e=ve.current)||void 0===e||e.slidePrev()}}),(0,v.jsx)(yi.AL,{$closeAnimation:ie,children:(0,v.jsx)(ft.RC,{onSwiper:e=>{ve.current=e},onSlideChange:e=>{re(e.realIndex),H(!0)},modules:[vt.ZD],effect:"cards",grabCursor:!0,className:"product-details-swiper",initialSlide:0,children:Ce.map(((e,t)=>(0,v.jsx)(ft.qr,{children:(0,v.jsxs)(yi.xW,{children:[!Ae[t]&&(0,v.jsx)(yi.rL,{children:(0,v.jsx)(yi.aH,{})}),(0,v.jsx)(yi._V,{$cardSlide:!0,src:Ae[t]||t===ne?null!==e&&void 0!==e&&e.url?(0,se.V)(e.url):je||"":"",onLoad:()=>ze(t),onError:e=>{je&&e.target.src!==je&&(e.target.src=je)},CloseAnimation:ie,Loaded:Ae[t],alt:`Image ${t}`}),t===ne&&(0,v.jsx)(yi.IP,{onClick:D,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))},null===m||void 0===m?void 0:m.id)}),(0,v.jsx)(yi.eo,{CloseAnimation:ie,onClick:()=>{var e;H(!0),null===(e=ve.current)||void 0===e||e.slideNext()}})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(yi.AL,{$closeAnimation:ie,$paginationFraction:!0,children:(0,v.jsx)(ft.RC,{onSwiper:e=>{ve.current=e},onSlideChange:e=>{re(e.realIndex),H(!0)},modules:[vt.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:Ce.map(((e,t)=>(0,v.jsx)(ft.qr,{children:(0,v.jsxs)(yi.xW,{children:[!Ae[t]&&(0,v.jsx)(yi.rL,{children:(0,v.jsx)(yi.aH,{})}),(0,v.jsx)(yi._V,{$cardSlide:!0,src:Ae[t]||t===ne?null!==e&&void 0!==e&&e.url?(0,se.V)(e.url):je||"":"",onLoad:()=>ze(t),onError:e=>{je&&e.target.src!==je&&(e.target.src=je)},CloseAnimation:ie,Loaded:Ae[t],alt:`Image ${t}`}),t===ne&&(0,v.jsx)(yi.IP,{onClick:D,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))},null===m||void 0===m?void 0:m.id)})})}),1!==Ce.length&&(0,v.jsx)(Ei,{images:Ce,carouselIndex:ne,CloseAnimation:ie,carouselSwiped:q}),(0,v.jsx)(yi.$D,{children:(0,v.jsx)(yi.qm,{children:(0,v.jsxs)(yi.iF,{CloseAnimation:ie,activeLanguage:h.activeLanguage,children:[(0,v.jsxs)(yi.GH,{activeLanguage:h.activeLanguage,children:[(0,v.jsx)(yi.Pz,{activeLanguage:h.activeLanguage,children:"en"==h.activeLanguage?null===m||void 0===m?void 0:m.en_name:null===m||void 0===m?void 0:m.ar_name}),!we().isEmpty(null===m||void 0===m?void 0:m.en_price)&&(0,v.jsxs)(yi.tK,{children:[(0,v.jsx)(yi.$y,{activeLanguage:h.activeLanguage,discounted:0!=G,children:(0,le.T)(K,Pe)}),0!=G&&(0,v.jsx)(yi.FL,{activeLanguage:h.activeLanguage,children:(0,le.T)(K*(1-parseFloat(G)/100),Pe)})]})]}),(0,v.jsx)(yi.gR,{activeLanguage:h.activeLanguage,dangerouslySetInnerHTML:{__html:Se}}),(0,v.jsx)(ni.A,{macros:null===m||void 0===m?void 0:m.macros,activeLanguage:null===h||void 0===h?void 0:h.activeLanguage}),$e&&(0,v.jsx)(oi.A,{options:C,formData:A,setFormData:L,formErrors:z,activeLanguage:h.activeLanguage,basePrice:null===m||void 0===m?void 0:m.en_price,onPriceChange:te}),!$e&&(null===C||void 0===C?void 0:C.components)&&(0,v.jsx)(oo,{formSchema:C,onPriceChange:te,formData:A,setFormData:L,basePrice:null===m||void 0===m?void 0:m.en_price,formErrors:z}),(0,v.jsxs)(yi.Uy,{activeLanguage:h.activeLanguage,children:[(0,v.jsx)(yi.LO,{children:"en"==h.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,v.jsx)(yi.bQ,{activeLanguage:h.activeLanguage,onChange:e=>Q(e.target.value),placeholder:"en"==h.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(0,v.jsxs)(yi.eM,{CloseAnimation:ie,children:[(0,v.jsxs)(yi.nk,{CloseAnimation:ie,children:[(0,v.jsx)(yi.FW,{onClick:()=>{M(Y+1)},children:"+"}),(0,v.jsx)(yi.Q1,{children:Y}),(0,v.jsx)(yi.Hs,{onClick:()=>{Y>1&&M(Y-1)},children:"-"})]}),(0,v.jsxs)(yi.pj,{onClick:()=>{if($e){var e;const t={};if((null===(e=C.sizes)||void 0===e?void 0:e.length)>0&&(null===A||void 0===A||!A.sizeId)&&(t.size="Please select a size."),Object.keys(t).length>0)return void S(t)}else if("{}"!==JSON.stringify(C)){const e=function(e,t){const i={},o=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return o.forEach((e=>{var o;e in t&&0!==(null===(o=t[e])||void 0===o?void 0:o.length)&&"{}"!==JSON.stringify(t[e])||(i[e]="This field is required.")})),i}(C,A);if(Object.keys(e).length>0)return void S(e)}let t=K*(1-parseFloat(G)/100);setTimeout((()=>{c.delete("productId"),d(c),document.body.style.overflow="auto"}),800),W((0,de.bE)(x,m,Y,A,t,Z)),oe(!1),M(1)},children:["en"==h.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",(0,v.jsx)(yi.zr,{children:(0,le.T)(Y*(K*(1-parseFloat(G)/100)),Pe)})]})]})]})]}),P&&(0,v.jsxs)(yi.kA,{onClick:U,onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,i=e.touches[0].clientY-e.touches[1].clientY;B.current=Math.hypot(t,i)}else 1===e.touches.length&&(O(!0),R.current={x:e.touches[0].clientX,y:e.touches[0].clientY})},onTouchMove:e=>{if(2===e.touches.length&&B.current){const t=e.touches[0].clientX-e.touches[1].clientX,i=e.touches[0].clientY-e.touches[1].clientY,o=Math.hypot(t,i),n=o/B.current;I((e=>Math.min(Math.max(e*n,1),5))),B.current=o}else if(1===e.touches.length&&N&&_>1){const t=e.touches[0],i=t.clientX-R.current.x,o=t.clientY-R.current.y;T((e=>({x:e.x+i/_,y:e.y+o/_}))),R.current={x:t.clientX,y:t.clientY}}},onTouchEnd:()=>{O(!1),B.current=null,R.current=null},children:[(0,v.jsx)(yi.uF,{onClick:U,children:(0,v.jsx)(a.$8F,{})}),(0,v.jsx)(yi.T0,{src:(()=>{const e=Ce[ne];return e&&null!==e&&void 0!==e&&e.url?(0,se.V)(e.url):je||""})(),alt:"Zoomed",$scale:_,$translateX:F.x,$translateY:F.y,$dragging:N,onClick:e=>e.stopPropagation(),onDoubleClick:()=>{_>1?(I(1),T({x:0,y:0})):I(2.5)}})]})]})}var ro=i(88564);const ao=n.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,lo=n.Ay.div`
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
  animation: ${ao} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,so=n.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,co=n.Ay.div`
  display: flex;
  gap: 10px;
`,po=n.Ay.button`
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
`,uo=n.Ay.button`
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

`,xo=e=>{let{onInstall:t,onDismiss:i,restaurantName:o,showInstallPopup:n}=e;return(0,v.jsxs)(lo,{showInstallPopup:n,children:[(0,v.jsxs)(so,{children:["Access ",(0,v.jsx)("b",{children:o})," anytime with one tap ",(0,v.jsx)("b",{children:"Install The App!"})]}),(0,v.jsxs)(co,{children:[(0,v.jsx)(po,{onClick:t,children:"Install"}),(0,v.jsx)(uo,{onClick:i,children:"Dismiss"})]})]})},ho=n.Ay.div`
  width: 100%;
  padding: 12px 4%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${e=>e.theme.backgroundColor};
  
  @media (min-width: 768px) {
    padding: 16px 5%;
  }
`,go=n.Ay.div`
  display: grid;
  grid-template-columns: ${e=>e.showOnePerLine?"1fr":"repeat(3, 1fr)"};
  gap: 8px;
  width: 100%;
  
  @media (min-width: 480px) {
    gap: 10px;
  }
  
  @media (min-width: 768px) {
    gap: 12px;
  }
  
  @media (min-width: 1024px) {
    gap: 14px;
  }
`,mo=n.Ay.div`
  display: flex;
  flex-direction: ${e=>e.showOnePerLine?"row":"column"};
  align-items: ${e=>(e.showOnePerLine,"center")};
  justify-content: ${e=>e.showOnePerLine?"flex-start":"center"};
  padding: ${e=>e.showOnePerLine?"12px 16px":"12px 10px"};
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: ${e=>e.showOnePerLine?"auto":"85px"};
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.04);
  gap: ${e=>e.showOnePerLine?"20px":"0"};
  direction: ${e=>e.showOnePerLine&&"ar"===e.activeLanguage?"rtl":"ltr"};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${e=>e.theme.mainColor||"#007bff"}15 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    border-color: ${e=>e.theme.mainColor||"#007bff"}30;
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-4px) scale(1.01);
    transition: all 0.15s ease;
  }
  
  @media (min-width: 768px) {
    padding: ${e=>e.showOnePerLine?"14px 20px":"16px 14px"};
    min-height: ${e=>e.showOnePerLine?"auto":"100px"};
    gap: ${e=>e.showOnePerLine?"16px":"0"};
  }
`,fo=n.Ay.div`
  width: ${e=>e.showOnePerLine?"60px":"65px"};
  height: ${e=>e.showOnePerLine?"60px":"65px"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.categoryActive};
  margin-bottom: ${e=>e.showOnePerLine?"0":"10px"};
  margin-right: ${e=>(e.showOnePerLine&&e.activeLanguage,"0")};
  margin-left: ${e=>(e.showOnePerLine&&e.activeLanguage,"0")};
  flex-shrink: 0;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 1;
  order: ${e=>e.showOnePerLine&&"ar"===e.activeLanguage?"2":"1"};
  
  ${mo}:hover & {
    background: ${e=>e.theme.categoryActiveIcon||e.theme.mainColor||"#007bff"};
    transform: scale(1.1);
    box-shadow: 0 4px 16px ${e=>e.theme.mainColor||"#007bff"}40;
  }
  
  @media (min-width: 768px) {
    width: ${e=>e.showOnePerLine?"70px":"75px"};
    height: ${e=>e.showOnePerLine?"70px":"75px"};
    margin-bottom: ${e=>e.showOnePerLine?"0":"12px"};
  }
`,vo=n.Ay.img`
  width: 42px;
  height: 42px;
  object-fit: contain;
  transition: transform 0.35s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  color: ${e=>e.theme.categoryActiveIcon||"#333333"};
  ${mo}:hover & {
    transform: scale(1.1);
  }
  
  @media (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`,bo=n.Ay.div`
  font-size: ${e=>e.showOnePerLine?"14px":"13px"};
  font-weight: 600;
  color: ${e=>e.theme.categoryActiveText||"#333333"};
  text-align: ${e=>e.showOnePerLine?"ar"===e.activeLanguage?"right":"left":"center"};
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.3;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  letter-spacing: 0.1px;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  flex: 1;
  display: flex;
  align-items: center;
  order: ${e=>e.showOnePerLine&&"ar"===e.activeLanguage?"1":"2"};
  
  ${mo}:hover & {
    color: ${e=>e.theme.mainColor||"#007bff"};
  }
  
  @media (min-width: 768px) {
    font-size: ${e=>e.showOnePerLine?"16px":"14px"};
    line-height: 1.4;
  }
`,yo=e=>{let{category:t,logoURL:i,activeLanguage:n,showOnePerLine:r,onCategoryClick:a}=e;const[l,s]=(0,o.useState)(!1),d=t.image_url?(0,se.V)(t.image_url):null;return(0,v.jsxs)(mo,{onClick:()=>a(t.id),showOnePerLine:r,activeLanguage:n,children:[(0,v.jsx)(fo,{showOnePerLine:r,activeLanguage:n,children:(0,v.jsx)(vo,{src:l||!d?i:d,alt:"en"===n?t.en_category:t.ar_category,onError:()=>s(!0)})}),(0,v.jsx)(bo,{activeLanguage:n,showOnePerLine:r,children:"en"===n?t.en_category:t.ar_category})]})};function wo(e){let{categories:t,onCategoryClick:i}=e;const{restaurantName:o}=(0,b.g)(),n=window.location.hostname.split(".")[0],r="menugic"!==n&&"localhost"!==n&&"www"!==n&&"api"!==n&&"staging-api"!==n?n:o,a=(0,y.d4)((e=>{var t,i;return null===(t=e.restaurant)||void 0===t||null===(i=t[r])||void 0===i?void 0:i.activeLanguage})),l=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[r]})),s=((null===t||void 0===t?void 0:t.length)||0)<9,d=null!==l&&void 0!==l&&l.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${l.logoURL}`:null;return(0,v.jsx)(ho,{children:(0,v.jsx)(go,{showOnePerLine:s,children:null===t||void 0===t?void 0:t.sort(((e,t)=>t.priority-e.priority)).map((e=>(0,v.jsx)(yo,{category:e,logoURL:d,activeLanguage:a,showOnePerLine:s,onCategoryClick:i},e.id)))})})}const $o=n.Ay.div`
  width: 100%;
  background-color: ${e=>e.theme.backgroundColor||e.theme.backgroundcolor||"#F6F5F5"};
  position: relative;
  z-index: 100;
  margin-bottom: 0;
`,jo=(n.Ay.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  padding: 12px 5%;
  min-height: 50px;
  
  @media (min-width: 768px) {
    padding: 14px 5%;
    min-height: 60px;
  }
`,n.Ay.div`
  position: absolute;
  left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  @media (min-width: 768px) {
    left: 5%;
  }
`,n.Ay.img`
  max-width: 200px;
  max-height: 60px;
  object-fit: contain;
  
  @media (min-width: 768px) {
    max-width: 250px;
    max-height: 70px;
  }
`,n.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1;
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    gap: 16px;
  }
`),Co=(n.Ay.div`
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  font-size: 27px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,n.Ay.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${e=>e.theme.mainColor||"#333333"};
  font-size: 18px;
  
  &:hover {
    transform: scale(1.1);
    color: ${e=>e.theme.mainColor||"#007bff"};
  }
  
  &:active {
    transform: scale(1);
  }
  
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
`,n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 0;
  min-height: 44px;
  
  @media (min-width: 768px) {
    padding: 14px 0;
  }
`),ko=n.Ay.div`
  width: 100%;
  padding: 0 5% 14px 5%;
  
  @media (min-width: 768px) {
    padding: 0 5% 16px 5%;
  }
`,Ao=n.Ay.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (min-width: 768px) {
    height: 52px;
    gap: 12px;
  }
`,Lo=n.Ay.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: ${e=>e.theme.searchbackground||e.theme.backgroundColor||"#ffffff"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:focus-within {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }
`,zo=n.Ay.div`
  position: absolute;
  left: ${e=>"en"===e.activeLanguage?"16px":"auto"};
  right: ${e=>"en"===e.activeLanguage?"auto":"16px"};
  font-size: 20px;
  color: ${e=>e.theme.searchTextColor||"#999999"};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,So=n.Ay.input`
  width: 100%;
  height: 100%;
  background-color: ${e=>e.theme.searchbackground||e.theme.backgroundColor||"#ffffff"};
  border: 1px solid rgba(0, 0, 0, 0.08);
  outline: none;
  padding-left: ${e=>"en"===e.activeLanguage?"48px":"16px"};
  padding-right: ${e=>"en"===e.activeLanguage?"16px":"48px"};
  color: ${e=>e.theme.searchTextColor||e.theme.textColor||"#333333"};
  font-size: 15px;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${e=>e.theme.searchTextColor||"#999999"};
    opacity: 0.6;
  }

  &:focus {
    border-color: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}40`};
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,Po=n.Ay.button`
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}20`};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 44px;
  min-height: 44px;
  flex-shrink: 0;
  
  &:hover {
    background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
    border-color: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}50`};
    transform: translateX(-1px);
    box-shadow: 0 2px 6px ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}25`};
  }
  
  &:active {
    transform: translateX(0) scale(0.98);
    transition: all 0.1s ease;
  }
  
  @media (min-width: 768px) {
    padding: 11px;
    border-radius: 11px;
  }
`,Eo=n.Ay.div`
  font-size: 20px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 22px;
  }
`,_o=n.Ay.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.textColor||e.theme.textcolor||"#1a1a1a"};
  margin: 0;
  flex: 1;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  letter-spacing: -0.2px;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 4px;
  
  @media (min-width: 768px) {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.3px;
    padding: 0 6px;
  }
`,Io=n.Ay.button`
  height: 100%;
  min-width: 64px;
  font-size: 14px;
  padding: 0 16px;
  border-radius: 12px;
  font-weight: 500;
  gap: 6px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.searchbackground||e.theme.backgroundColor||"#ffffff"};
  color: ${e=>e.theme.searchTextColor||e.theme.textColor||"#333333"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.08);
  outline: none;
  -webkit-tap-highlight-color: transparent;
  flex-shrink: 0;
  
  &:hover {
    background-color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"}15;
    color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: translateY(0);
    transition: all 0.15s ease;
  }

  @media (min-width: 768px) {
    min-width: 72px;
    padding: 0 18px;
    font-size: 15px;
  }
`,Fo=n.Ay.div`
  color: inherit;
  font-size: 18px;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Io}:hover & {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;function To(e){let{categoryId:t,categories:i,onBack:o,searchText:n,setSearchText:r,setshowSidebar:l,showSidebar:s,popupHandler:d}=e;const{restaurantName:p}=(0,b.g)(),u=((0,y.wA)(),window.location.hostname.split(".")[0]),x="menugic"!==u&&"localhost"!==u&&"www"!==u&&"api"!==u&&"staging-api"!==u?u:p,h=((0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]})),(0,y.d4)((e=>{var t,i;return(null===(t=e.restaurant)||void 0===t||null===(i=t[x])||void 0===i?void 0:i.activeLanguage)||"en"}))),g=null===i||void 0===i?void 0:i.find((e=>e.id==t||e.id===t)),m=g?"en"===h?g.en_category:g.ar_category:"Category";return(0,v.jsxs)($o,{children:[(0,v.jsxs)(Co,{children:[(0,v.jsx)(Po,{onClick:o,"aria-label":"Back to categories",children:(0,v.jsx)(Eo,{as:a.NEn})}),(0,v.jsx)(_o,{activeLanguage:h,children:m}),(0,v.jsx)(jo,{})]}),(0,v.jsx)(ko,{children:(0,v.jsxs)(Ao,{children:[(0,v.jsxs)(Lo,{children:[(0,v.jsx)(zo,{activeLanguage:h,children:(0,v.jsx)(c.Xj1,{})}),(0,v.jsx)(So,{type:"text",activeLanguage:h,dir:"en"===h?"ltr":"rtl",placeholder:"en"===h?"Search Products":"\u0627\u0644\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",onChange:e=>{r(e.target.value)},value:n||""})]}),(0,v.jsxs)(Io,{onClick:()=>{window.history.pushState({},""),d("share")},activeLanguage:h,children:["en"===h&&(0,v.jsx)(Fo,{children:(0,v.jsx)(a.LZ_,{})}),"en"===h?"Share":"\u0646\u0634\u0631","en"!==h&&(0,v.jsx)(Fo,{children:(0,v.jsx)(a.LZ_,{})})]})]})})]})}const No=n.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Oo=n.Ay.div`
  width: 100%;
  min-height: 100vh;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  animation: ${No} 0.5s ease-in;
  position: relative;
  display: flex;
  flex-direction: column;
`,Ro=(n.Ay.section`
  width: 100%;
  padding: 48px 48px 0px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  
  @media (min-width: 768px) {
    padding: 64px 5%;
  }
`,n.Ay.img`
  max-width: 430px;
  max-height: 320px;
  object-fit: contain;
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    max-width: 520px;
    max-height: 390px;
    margin-bottom: 32px;
  }
`,n.Ay.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 16px 0px;
  margin-bottom: 24px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  position: relative;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.homepageCategoriesBackgroundColor)||"transparent"}};
  
  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  /* Scrollable indicator gradient - right side for LTR, left side for RTL */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    ${e=>"ar"===e.activeLanguage?"left: 0;":"right: 0;"}
    width: 60px;
    
    pointer-events: none;
    z-index: 1;
    opacity: ${e=>e.showScrollIndicator?.6:0};
    transition: opacity 0.3s ease;
  }
  
  /* Show indicator when content is scrollable and hovering */
  &:hover::after {
    opacity: ${e=>e.showScrollIndicator?.9:0};
  }
  
  @media (min-width: 768px) {
    padding: 24px 0px;
    margin-bottom: 32px;
    
    &::after {
      width: 70px;
    }
  }
`),Bo=n.Ay.div`
  position: absolute;
  ${e=>"ar"===e.activeLanguage?"left: 20px;":"right: 20px;"}
  top: 95%;
  transform: translateY(-50%);
  font-size: 12px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#666"}};
  opacity: 0.7;
  white-space: nowrap;
  pointer-events: none;
  z-index: 2;
  animation: fadeInOut 2s ease-in-out infinite;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.4;
    }
  }
  
  @media (min-width: 768px) {
    ${e=>"ar"===e.activeLanguage?"left: 30px;":"right: 30px;"}
    font-size: 13px;
  }
`,Do=n.Ay.div`
  display: flex;
  gap: 0px;
  padding: 0;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  align-items: flex-start;
  width: max-content;
  
  @media (min-width: 768px) {
    gap: 15px;
  }
`,Uo=(n.Ay.button`
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 56px;
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.slidingButtonTextColor||"#ffffff"};
  background: ${e=>e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff"};
  border: none;
  border-radius: 14px;
  padding: 0;
  cursor: ${e=>e.swipeProgress>=.6?"pointer":"default"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  box-shadow: 0 4px 16px ${e=>{const t=e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff";return t?`${t}40`:"rgba(0, 123, 255, 0.4)"}};
  margin: 32px auto;
  overflow: hidden;
  user-select: none;
  display: block;
  
  &:hover {
    ${e=>e.swipeProgress>=.6?`\n      background: ${e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#0056b3"};\n      transform: translateY(-2px);\n      box-shadow: 0 6px 20px ${e=>{const t=e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff";return t?`${t}50`:"rgba(0, 123, 255, 0.5)"}};\n    `:""}
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    max-width: 380px;
    height: 64px;
    font-size: 18px;
    margin: 32px auto;
  }
`,n.Ay.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: ${e=>"ar"===e.activeLanguage?"translate(calc(-50% - 30px), -50%)":"translate(-50%, -50%)"};
  transition: opacity 0.3s ease;
  opacity: ${e=>1-e.swipeProgress};
  white-space: nowrap;
  z-index: 2;
  margin: 0px 20px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  color: ${e=>e.theme.slidingButtonTextColor||"#ffffff"};
  
  @media (min-width: 768px) {
    transform: ${e=>"ar"===e.activeLanguage?"translate(calc(-50% - 35px), -50%)":"translate(-50%, -50%)"};
  }
`,n.Ay.div`
  position: absolute;
  ${e=>{const t=16+240*e.swipeProgress;return"ar"===e.activeLanguage?`right: ${t}px;`:`left: ${t}px;`}}
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  &:hover {
    background: rgba(255, 255, 255, 0.35);
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 22px;
    ${e=>{const t=20+324*e.swipeProgress;return"ar"===e.activeLanguage?`right: ${t}px;`:`left: ${t}px;`}}
  }
`,n.Ay.div`
  position: fixed;
  top: 20px;
  ${e=>"ar"===e.activeLanguage?"left: 20px;":"right: 20px;"}
  z-index: 1000;
  
  @media (min-width: 768px) {
    top: 30px;
    ${e=>"ar"===e.activeLanguage?"left: 30px;":"right: 30px;"}
  }
`,n.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 10px;
  width: 60px;
  height: 25px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,n.Ay.div`
  width: 100%;
  background-color: ${e=>e.theme.languagebackground||"#f0f0f0"};
  opacity: 0.6;
  position: absolute;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
`,n.Ay.div`
  position: absolute;
  background-color: ${e=>e.theme.languagebackground||"#f0f0f0"};
  left: ${e=>"en"===e.activeLanguage?"0px":"32px"};
  transition: all ease-in-out 0.2s;
  height: 100%;
  width: 50%;
  z-index: 2;
  border-radius: 10px;
`,n.Ay.div`
  z-index: 3;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: ${e=>e.activeLanguage===e.language?e.theme.mainColor||"#007bff":e.theme.languageTextColor||"#333333"};
  transition: color 0.2s ease;
  user-select: none;
  
  &:hover {
    color: ${e=>e.theme.mainColor||"#007bff"};
  }
`,n.Ay.section`
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`,n.Ay.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${e=>e.theme.mainColor||"#007bff"};
`,n.Ay.div`
  display: flex;
  width: 100%;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
`,n.Ay.div`
  min-width: 100%;
  width: 100%;
  flex-shrink: 0;
  opacity: ${e=>e.active?1:0};
  transition: opacity 0.5s ease;
  display: ${e=>e.active?"block":"none"};
`,n.Ay.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  display: block;
  
  @media (min-width: 768px) {
    height: 60vh;
  }
  
  @media (min-width: 1024px) {
    height: 70vh;
  }
`,n.Ay.button`
  position: absolute;
  top: 50%;
  ${e=>"prev"===e.direction?"ar"===e.activeLanguage?"right: 20px;":"left: 20px;":"ar"===e.activeLanguage?"left: 20px;":"right: 20px;"}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  color: ${e=>e.theme.mainColor||"#007bff"};
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  &:hover {
    background: #ffffff;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
    font-size: 28px;
    ${e=>"prev"===e.direction?"ar"===e.activeLanguage?"right: 30px;":"left: 30px;":"ar"===e.activeLanguage?"left: 30px;":"right: 30px;"}
  }
`,n.Ay.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
  
  @media (min-width: 768px) {
    bottom: 30px;
    gap: 12px;
  }
`,n.Ay.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.active?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  
  &:hover {
    background: ${e=>e.active?"#ffffff":"rgba(255, 255, 255, 0.8)"};
    transform: scale(1.2);
  }
  
  @media (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`,n.Ay.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.textColor||"#1a1a1a"};
  margin: 0 0 24px 0;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 32px;
  }
`),Wo=n.Ay.section`
  width: 100%;
  padding: 20px 0px;
  max-width: 1200px;
  margin: 0 auto;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    padding: 60px 5%;
  }
`,Yo=n.Ay.div`
  min-width: 120px;
  width: 120px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  gap: 10px;
  
  &:hover {
    transform: translateY(-4px) scale(1.05);
  }
  
  @media (min-width: 768px) {
    min-width: 160px;
    width: 160px;
    gap: 14px;
  }
`,Mo=(n.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${e=>e.theme.BoxColor||"#ffffff"};
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  flex-direction: ${e=>(e.isEven,"ar"===e.activeLanguage?"row-reverse":"row")};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${e=>e.isEven?"ar"===e.activeLanguage?"right: 0;":"left: 0;":"ar"===e.activeLanguage?"left: 0;":"right: 0;"}
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, ${e=>e.theme.mainColor||"#007bff"} 0%, ${e=>e.theme.mainColor||"#0056b3"} 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (min-width: 768px) {
    padding: 22px 26px;
    gap: 26px;
  }
`,n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,n.Ay.h3`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.textColor||"#1a1a1a"};
  margin: 0;
  line-height: 1.3;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  max-width: 90px;
  text-align: center;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  
  @media (min-width: 768px) {
    font-size: 14px;
    max-width: 120px;
  }
`),qo=(n.Ay.p`
  font-size: 13px;
  font-weight: 400;
  color: ${e=>e.theme.textColor||"#666"};
  margin: 6px 0 0 0;
  line-height: 1.5;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 8px;
  }
`,n.Ay.img`
  width: 84px;
  height: 84px;
  border-radius: 16px;    
  padding: 8px;
  object-fit: contain;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid ${e=>e.theme.mainColor||"#007bff"}20;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
  
  ${Yo}:hover & {
    transform: scale(1.05) rotate(${e=>e.isEven?"-5deg":"5deg"});
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: ${e=>e.theme.mainColor||"#007bff"}40;
  }
  
  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    border-radius: 22px;
  }
`),Ho=(n.Ay.button`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  background: ${e=>e.theme.mainColor||"#007bff"};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px ${e=>e.theme.mainColor?`${e.theme.mainColor}30`:"rgba(0, 123, 255, 0.3)"};
  display: block;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${e=>e.theme.mainColor?`${e.theme.mainColor}40`:"rgba(0, 123, 255, 0.4)"};
    background: ${e=>e.theme.mainColor||"#0056b3"};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    padding: 16px 36px;
    font-size: 16px;
    max-width: 440px;
  }
`,n.Ay.section`
  width: 100%;
  padding: 0px 20px 0px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};

  @media (min-width: 768px) {
    padding: 40px 5%;
  }
`),Vo=n.Ay.div`
  background: ${e=>e.theme.hplocationBackgroundColor||e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 8px 16px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${e=>"ar"===e.activeLanguage?"right: 0;":"left: 0;"}
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, ${e=>e.theme.mainColor||"#007bff"} 0%, ${e=>e.theme.mainColor||"#0056b3"} 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 123, 255, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    padding: 14px 20px;
    margin-bottom: 12px;
  }
`,Xo=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,Ko=n.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
`,Jo=n.Ay.div`
  position: relative;
  background: #ffffff;
  border-radius: 20px;
  padding: 32px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  animation: ${No} 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 40px;
    max-width: 450px;
  }
`,Zo=n.Ay.button`
  position: absolute;
  top: 16px;
  ${e=>"ar"===e.activeLanguage?"left: 16px;":"right: 16px;"}
  background: transparent;
  border: none;
  font-size: 32px;
  color: #999;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f0f0f0;
    color: #333;
    transform: rotate(90deg);
  }
`,Qo=n.Ay.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.textColor||"#1a1a1a"};
  margin: 0 0 24px 0;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 28px;
  }
`,Go=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,en=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: center;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,tn=n.Ay.p`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.textColor||"#666"};
  margin: 0;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  text-align: center;
  
  ${e=>e.location&&`\n    font-weight: 400;\n    line-height: 1.6;\n    color: ${e.theme.textColor||"#555"};\n    margin-top: 4px;\n  `}
  
  @media (min-width: 768px) {
    font-size: 15px;
  }
`,on=n.Ay.a`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.whatsapp?"#25D366":e.theme.mainColor||"#007bff"};
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  text-align: center;
  
  &:hover {
    color: ${e=>e.whatsapp?"#128C7E":e.theme.mainColor||"#0056b3"};
    text-decoration: underline;
  }
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`,nn=n.Ay.a`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: ${e=>e.theme.mainColor||"#007bff"};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  box-shadow: 0 2px 8px ${e=>e.theme.mainColor?`${e.theme.mainColor}30`:"rgba(0, 123, 255, 0.3)"};
  margin-top: 8px;
  width: 70%;
  max-width: 280px;
  
  &:hover {
    background: ${e=>e.theme.mainColor||"#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${e=>e.theme.mainColor?`${e.theme.mainColor}40`:"rgba(0, 123, 255, 0.4)"};
    text-decoration: none;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    font-size: 17px;
    padding: 16px 36px;
  }
`,rn=n.Ay.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.hplocationTextColor||e.theme.textColor||"#1a1a1a"};
  margin: 0;
  text-align: left;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  letter-spacing: -0.02em;
  line-height: 1.3;
  flex: 1;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`,an=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: nowrap;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    gap: 12px;
  }
`,ln=n.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  
  background: ${e=>e.whatsapp?"rgba(37, 211, 102, 0.12)":e.location||e.map?"rgba(0, 123, 255, 0.12)":e.theme.mainColor?`${e.theme.mainColor}12`:"rgba(0, 123, 255, 0.12)"};
  
  color: ${e=>e.whatsapp?"#25D366":(e.location||e.map,e.theme.mainColor||"#007bff")};
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    background: ${e=>e.whatsapp?"rgba(37, 211, 102, 0.2)":(e.location||e.map,e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.2)")};
    box-shadow: 0 4px 12px ${e=>e.whatsapp?"rgba(37, 211, 102, 0.3)":e.theme.mainColor?`${e.theme.mainColor}30`:"rgba(0, 123, 255, 0.3)"};
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  @media (min-width: 768px) {
    width: 52px;
    height: 52px;
    font-size: 22px;
  }
`,sn=(n.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 14px;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  border-radius: 10px;
  transition: all 0.3s ease;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  gap: 10px;
  
  &:hover {
    background: ${e=>e.theme.mainColor?`${e.theme.mainColor}08`:"rgba(0, 123, 255, 0.08)"};
    transform: translateX(${e=>"ar"===e.activeLanguage?"-2px":"2px"});
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    padding: 11px 16px;
    margin-bottom: 12px;
  }
`,n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  font-size: 16px;
  flex-shrink: 0;
  background: ${e=>e.whatsapp?"rgba(37, 211, 102, 0.12)":e.theme.mainColor?`${e.theme.mainColor}12`:"rgba(0, 123, 255, 0.12)"};
  color: ${e=>e.whatsapp?"#25D366":e.theme.mainColor||"#007bff"};
  
  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
`,n.Ay.a`
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.whatsapp?"#25D366":e.theme.mainColor||"#007bff"};
  text-decoration: none;
  transition: all 0.2s ease;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  flex: 1;
  letter-spacing: 0.01em;
  
  &:hover {
    color: ${e=>e.whatsapp?"#128C7E":e.theme.mainColor||"#0056b3"};
    text-decoration: none;
  }
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,n.Ay.footer`
  width: 100%;
  padding: 5px 5%;
  margin-top: auto;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    padding: 40px 5%;
  }
`),dn=n.Ay.p`
  font-size: 14px;
  font-weight: 400;
  color: ${e=>e.theme.textColor||"#666"};
  margin: 0;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    font-size: 15px;
  }
`,cn=n.Ay.section`
  width: 100%;
  padding: 12px;
  max-width: 1200px;
  margin: 10px auto;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};

  @media (min-width: 768px) {
    padding: 32px 5%;
  }
`,pn=n.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 100%;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    gap: 16px;
  }
`,un=n.Ay.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 12px;
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  }
  
  span {
    font-size: 12px;
    font-weight: 500;
    color: ${e=>e.theme.textColor||"#1a1a1a"};
    
    @media (min-width: 768px) {
      font-size: 13px;
    }
  }
`,xn=n.Ay.div`
  font-size: 24px;
  color: ${e=>{var t,i,o,n;return null!==(t=e.platform)&&void 0!==t&&t.toLowerCase().includes("facebook")?"#1877F2":null!==(i=e.platform)&&void 0!==i&&i.toLowerCase().includes("instagram")?"#E4405F":null!==(o=e.platform)&&void 0!==o&&o.toLowerCase().includes("twitter")?"#1DA1F2":null!==(n=e.platform)&&void 0!==n&&n.toLowerCase().includes("whatsapp")?"#25D366":e.theme.mainColor||"#007bff"}};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    font-size: 28px;
  }
`,hn=n.Ay.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 20px 0px 20px;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  min-height: 340px;
  
  @media (min-width: 768px) {
    padding: 96px 20px 80px 20px;
    min-height: 420px;
  }
`,gn=n.Ay.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${e=>e.theme.textColor||"#1a1a1a"};
  margin: 0 0 32px 0;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  letter-spacing: -0.02em;
  
  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`,mn=n.Ay.img`
  max-width: 240px;
  max-height: 240px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  
  @media (min-width: 768px) {
    max-width: 320px;
    max-height: 320px;
  }
`,fn=n.Ay.section`
  width: 100%;
  padding: 0px 20px 40px 20px;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    padding: 60px 5%;
  }
`,vn=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 0;
  margin-bottom:50px;
  
  @media (min-width: 768px) {
    gap: 24px;
    margin-top: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,bn=n.Ay.button`
  width: 50%;
  max-width: 280px;
  height: 48px;
  margin: 24px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.slidingButtonTextColor||"#ffffff"};
  background: ${e=>e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff"};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  box-shadow: 0 4px 16px ${e=>{const t=e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff";return t?`${t}40`:"rgba(0, 123, 255, 0.4)"}};
  
  &:hover {
    background: ${e=>e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${e=>{const t=e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff";return t?`${t}50`:"rgba(0, 123, 255, 0.5)"}};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    max-width: 320px;
    height: 52px;
    font-size: 16px;
  }
`,yn=n.Ay.p`
  width: 100%;
  padding: 24px 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: ${e=>e.theme.textColor||"#333333"};
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  margin: 0;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    padding: 32px 5%;
    font-size: 20px;
  }
`,wn=n.Ay.button`
  width: 55%;
  max-width: 280px;
  height: 48px;
  margin: 18px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.slidingButtonTextColor||"#ffffff"};
  background: ${e=>e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff"};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  box-shadow: 0 4px 16px ${e=>{const t=e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff";return t?`${t}40`:"rgba(0, 123, 255, 0.4)"}};
  
  &:hover {
    background: ${e=>e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${e=>{const t=e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff";return t?`${t}50`:"rgba(0, 123, 255, 0.5)"}};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    max-width: 320px;
    height: 52px;
    font-size: 16px;
    margin: 24px auto 0;
  }
`;var $n=i(76279),jn=i(40499),Cn=i(88631);const kn=e=>{let{category:t,activeLanguage:i,onExploreClick:n,logoURL:r}=e;const[a,l]=(0,o.useState)(!1),s="en"===i?t.en_category:t.ar_category,d=t.image_url?(0,se.V)(t.image_url):null;return(0,v.jsxs)(Yo,{onClick:()=>n(t.id),activeLanguage:i,children:[(0,v.jsx)(qo,{src:a||!d?r:d,alt:s,activeLanguage:i,onError:()=>l(!0)}),(0,v.jsx)(Mo,{activeLanguage:i,children:s})]})};function An(e){var t;let{onExploreClick:i,categories:n,setSearchParams:r,searchParams:l}=e;const{restaurantName:s}=(0,b.g)(),d=window.location.hostname.split(".")[0],c="menugic"!==d&&"localhost"!==d&&"www"!==d&&"api"!==d&&"staging-api"!==d?d:s,p=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[c]})),u=(0,y.d4)((e=>{var t,i;return(null===(t=e.restaurant)||void 0===t||null===(i=t[c])||void 0===i?void 0:i.activeLanguage)||"en"})),[x,h]=(0,o.useState)((()=>new Set)),g=(0,o.useCallback)((async()=>{const e=(0,pe.wU)(c);if(e)try{const{data:t}=await j.A.get(ce.Vb,{headers:{Authorization:`Bearer ${e}`}}),i=(Array.isArray(t)?t:[]).map((e=>e.id));h(new Set(i))}catch{h(new Set)}else h(new Set)}),[c]);(0,o.useEffect)((()=>{g()}),[g]),(0,o.useEffect)((()=>{const e=e=>{var t;null!==e&&void 0!==e&&null!==(t=e.detail)&&void 0!==t&&t.restaurantName&&e.detail.restaurantName!==c||g()};return window.addEventListener("menugic-customer-auth",e),()=>window.removeEventListener("menugic-customer-auth",e)}),[c,g]);const m=(null===p||void 0===p?void 0:p.branches)||[],f=(null===p||void 0===p?void 0:p.socialMedia)||[],w=(null===p||void 0===p?void 0:p.sliderImages)||[],$=(null===p||void 0===p?void 0:p.has_slider)||(null===p||void 0===p?void 0:p.show_slider_image)||!1,C=null!==(t=null===p||void 0===p?void 0:p.id)&&void 0!==t?t:null===p||void 0===p?void 0:p.restaurant_id,{data:k=[],isLoading:A}=(0,jn.O)(C),{data:L}=(0,Cn.y)(C),z=Array.isArray(L)?L:[],S=new Set((k||[]).map((e=>e.id))),P=[...k||[],...z.filter((e=>!S.has(e.id)))],[E,_]=(0,o.useState)(!1),[I,F]=(0,o.useState)(!1),T=(0,o.useRef)(null);(0,o.useEffect)((()=>{console.log("Theme3 HomePage - Slider Debug:",{hasSlider:$,sliderImagesCount:w.length,sliderImages:w,restaurant:p?{has_slider:p.has_slider,sliderImages:p.sliderImages}:null})}),[$,w,p]),(0,o.useEffect)((()=>{F(!1)}),[n]),(0,o.useEffect)((()=>{const e=()=>{if(T.current){const e=T.current,t=e.scrollWidth>e.clientWidth;_(t&&!I)}},t=()=>{T.current&&!I&&(F(!0),_(!1))};e();const i=T.current;return i&&(i.addEventListener("scroll",t),window.addEventListener("resize",e)),()=>{i&&i.removeEventListener("scroll",t),window.removeEventListener("resize",e)}}),[n,I]);const[N,O]=(0,o.useState)(null),[R,B]=(0,o.useState)(null),D=(null===p||void 0===p||p.name,e=>{const t=(null===e||void 0===e?void 0:e.toLowerCase())||"";return t.includes("facebook")?(0,v.jsx)(ue.iYk,{}):t.includes("instagram")?(0,v.jsx)(ue.ao$,{}):t.includes("tiktok")?(0,v.jsx)(ue.kkU,{}):t.includes("whatsapp")?(0,v.jsx)(ue.EcP,{}):(0,v.jsx)(ue.f35,{})}),U=e=>e?e.replace(/\s/g,""):"",W="en"===u?"Top Categories":"\u0627\u0644\u0641\u0626\u0627\u062a \u0627\u0644\u0645\u0645\u064a\u0632\u0629",Y="en"===u?"Our Locations":"\u0641\u0631\u0648\u0639\u0646\u0627",M="en"===u?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627",q="en"===u?"View on Map":"\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",H=(null===p||void 0===p?void 0:p.business_type)||"restaurant",V="en"===u?"restaurant"===H?"Explore Menu":"Explore Products":"restaurant"===H?"\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",X="en"===u?`\xa9 ${(new Date).getFullYear()} Menugic. All rights reserved.`:`\xa9 ${(new Date).getFullYear()} Menugic. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.`,K=(e,t)=>{O(e),B(t)},J=()=>{O(null),B(null)};return(0,v.jsxs)(Oo,{children:[$&&w.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)($n.A,{images:w,activeLanguage:u}),null!==p&&void 0!==p&&p.en_slogan||null!==p&&void 0!==p&&p.ar_slogan?(0,v.jsx)(yn,{activeLanguage:u,children:"en"===u?p.en_slogan||p.ar_slogan:p.ar_slogan||p.en_slogan}):null]}),(!$||0===w.length)&&(0,v.jsxs)(hn,{activeLanguage:u,children:[(0,v.jsx)(gn,{activeLanguage:u,children:"en"===u?"Welcome to":"\u0645\u0631\u062d\u0628\u0627\u064b \u0628\u0643\u0645 \u0641\u064a"}),(null===p||void 0===p?void 0:p.logoURL)&&(0,v.jsx)(mn,{src:`https://storage.googleapis.com/ecommerce-bucket-testing/${p.logoURL}`,alt:(null===p||void 0===p?void 0:p.name)||c,activeLanguage:u})]}),n&&n.length>0&&(0,v.jsxs)(Wo,{activeLanguage:u,children:[(0,v.jsx)(Uo,{activeLanguage:u,children:W}),(0,v.jsxs)(Ro,{ref:T,activeLanguage:u,showScrollIndicator:E,theme:null!==p&&void 0!==p&&p.theme?"string"===typeof p.theme?JSON.parse(p.theme):p.theme:{},children:[(0,v.jsx)(Do,{activeLanguage:u,children:n.sort(((e,t)=>(t.priority||0)-(e.priority||0))).map((e=>(0,v.jsx)(kn,{category:e,activeLanguage:u,onExploreClick:i,logoURL:null!==p&&void 0!==p&&p.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${p.logoURL}`:null},e.id)))}),E&&(0,v.jsx)(Bo,{activeLanguage:u,theme:null!==p&&void 0!==p&&p.theme?"string"===typeof p.theme?JSON.parse(p.theme):p.theme:{},children:"en"===u?"Scroll \u2192":"\u0627\u0633\u062d\u0628 \u2190"})]}),(0,v.jsxs)(bn,{onClick:()=>i(),activeLanguage:u,theme:null!==p&&void 0!==p&&p.theme?"string"===typeof p.theme?JSON.parse(p.theme):p.theme:{},children:[V,"ar"===u?(0,v.jsx)(ue._Jj,{}):(0,v.jsx)(ue.X6T,{})]})]}),P.length>0&&(0,v.jsxs)(fn,{activeLanguage:u,children:[(0,v.jsx)(Uo,{activeLanguage:u,children:"en"===u?"Featured Products":"\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0645\u0645\u064a\u0632\u0629"}),(0,v.jsx)(vn,{children:P.map(((e,t)=>(0,v.jsx)(ve,{plate:e,index:t,activePlate:null,setactivePlate:()=>{},showPopup:null,setSearchParams:r,searchParams:l,activeCategoryId:e.category_id,categories:n,disableDetails:!1,$isFeatured:!0,wishlistIds:x,onWishlistChange:g},e.id)))}),(0,v.jsxs)(wn,{onClick:()=>i(),activeLanguage:u,theme:null!==p&&void 0!==p&&p.theme?"string"===typeof p.theme?JSON.parse(p.theme):p.theme:{},children:["en"===u?"View All Products":"\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a","ar"===u?(0,v.jsx)(ue._Jj,{}):(0,v.jsx)(ue.X6T,{})]})]}),m.length>0&&(0,v.jsxs)(Ho,{id:"branches-section",activeLanguage:u,children:[(0,v.jsx)(Uo,{activeLanguage:u,children:Y}),m.map((e=>(0,v.jsxs)(Vo,{activeLanguage:u,children:[(0,v.jsx)(rn,{activeLanguage:u,children:e.name}),(0,v.jsxs)(an,{activeLanguage:u,children:[e.phone_number&&(0,v.jsx)(ln,{onClick:()=>K(e,"phone"),phone:!0,activeLanguage:u,children:(0,v.jsx)(ue.Cab,{})}),e.whatsapp_number&&(0,v.jsx)(ln,{onClick:()=>K(e,"whatsapp"),whatsapp:!0,activeLanguage:u,children:(0,v.jsx)(ue.EcP,{})}),(e.location||e.mapLink)&&(0,v.jsx)(ln,{onClick:()=>K(e,"location"),location:!0,activeLanguage:u,children:(0,v.jsx)(a.o9J,{})})]})]},e.id)))]}),f.length>0&&(0,v.jsxs)(cn,{id:"social-media-section",activeLanguage:u,children:[(0,v.jsx)(Uo,{activeLanguage:u,children:M}),(0,v.jsx)(pn,{children:f.map(((e,t)=>{const i=e.platform||e.name||"",o=e.link||e.url||"",n=o.startsWith("http")?o:`https://${o}`;return(0,v.jsx)(un,{href:n,target:"_blank",rel:"noopener noreferrer",platform:i,children:(0,v.jsx)(xn,{platform:i,children:D(i)})},t)}))})]}),N&&R&&(0,v.jsxs)(Xo,{children:[(0,v.jsx)(Ko,{onClick:J}),(0,v.jsxs)(Jo,{activeLanguage:u,children:[(0,v.jsx)(Zo,{onClick:J,activeLanguage:u,children:"\xd7"}),(0,v.jsx)(Qo,{activeLanguage:u,children:N.name}),(0,v.jsxs)(Go,{activeLanguage:u,children:["phone"===R&&N.phone_number&&(0,v.jsxs)(en,{activeLanguage:u,children:[(0,v.jsx)(tn,{activeLanguage:u,children:"en"===u?"Phone Number":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"}),(0,v.jsx)(on,{href:`tel:${U(N.phone_number)}`,activeLanguage:u,children:N.phone_number})]}),"whatsapp"===R&&N.whatsapp_number&&(0,v.jsxs)(en,{activeLanguage:u,children:[(0,v.jsx)(tn,{activeLanguage:u,children:"en"===u?"WhatsApp Number":"\u0631\u0642\u0645 \u0648\u0627\u062a\u0633\u0627\u0628"}),(0,v.jsx)(on,{href:`https://wa.me/${U(N.whatsapp_number)}`,target:"_blank",rel:"noopener noreferrer",activeLanguage:u,whatsapp:!0,children:N.whatsapp_number})]}),"location"===R&&(0,v.jsxs)(v.Fragment,{children:[N.location&&(0,v.jsxs)(en,{activeLanguage:u,children:[(0,v.jsx)(tn,{activeLanguage:u,children:"en"===u?"Location":"\u0627\u0644\u0645\u0648\u0642\u0639"}),(0,v.jsx)(tn,{activeLanguage:u,location:!0,children:N.location})]}),N.mapLink&&(0,v.jsx)(nn,{href:`https://${N.mapLink}`,target:"_blank",rel:"noopener noreferrer",activeLanguage:u,children:q})]})]})]})]}),(0,v.jsx)(sn,{activeLanguage:u,children:(0,v.jsx)(dn,{activeLanguage:u,children:X})})]})}var Ln=i(34500),zn=i(42978),Sn=i(15831);function Pn(){const[e,t]=(0,$.ok)(),i=e.get("productId"),n=e.get("categoryId"),r=e.get("page"),[a,c]=(0,o.useState)(!1),{restaurantName:p}=(0,b.g)(),u=window.location.hostname.split(".")[0],x="menugic"!==u&&"localhost"!==u&&"www"!==u&&"api"!==u&&"staging-api"!==u?u:p,h=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]})),g=(0,y.d4)((e=>{var t,i;return(null===(t=e.restaurant)||void 0===t||null===(i=t[x])||void 0===i?void 0:i.activeLanguage)||"en"}));(0,y.wA)();(0,o.useEffect)((()=>(document.documentElement.setAttribute("dir","ar"===g?"rtl":"ltr"),()=>document.documentElement.removeAttribute("dir"))),[g]);const m=3===Number(null===h||void 0===h?void 0:h.template_id)&&(!0===(null===h||void 0===h?void 0:h.show_all_items_category)||1===(null===h||void 0===h?void 0:h.show_all_items_category)||"1"===(null===h||void 0===h?void 0:h.show_all_items_category)),f=[...(null===h||void 0===h?void 0:h.categories)||[]].sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))),j=m?[{id:"all-items",en_category:"All Items",ar_category:"\u0643\u0644 \u0627\u0644\u0623\u0635\u0646\u0627\u0641",isAllItems:!0,priority:999999},...f]:f,C=()=>{window.history.pushState({},""),ee("feedback")},k=()=>{window.history.pushState({},""),ee("contactForm")},[A,L]=(0,o.useState)(null),[z,S]=(0,o.useState)("");(0,o.useEffect)((()=>{if(!z||z.length<2||null===h||void 0===h||!h.id)return;const e=setTimeout((()=>{(0,he.trackSearch)(h.id,z)}),1500);return()=>clearTimeout(e)}),[z,null===h||void 0===h?void 0:h.id]);const[P,E]=(0,o.useState)(null),[_,I]=(0,o.useState)(null),[F,T]=(0,o.useState)(!0),N=(()=>{if(!n)return 0;const e=j.findIndex((e=>e.id==n));return e>=0?e:0})(),[O,R]=(0,o.useState)(N),[B,D]=(0,o.useState)(n?"products":"home"),U=(0,o.useRef)(B),W=(0,o.useRef)(A),Y=(0,o.useRef)(P),[M,q]=(0,o.useState)(0),[H,V]=(0,o.useState)(null),[X,K]=((0,y.d4)((e=>(e.cart[x]||[]).reduce(((e,t)=>e+t.quantity),0))),(0,o.useState)(n||null)),J=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?Z(e):(D("categories"),window.scrollTo({top:0,behavior:"smooth"}))},Z=i=>{K(i),D("products"),S("");const o=new URLSearchParams(e);o.set("categoryId",i),t(o)},Q=()=>{D("categories"),K(null),S("");const i=new URLSearchParams(e);i.delete("categoryId"),t(i),window.scrollTo({top:0,behavior:"smooth"})},G=()=>{D("home"),K(null),S(""),t({})},ee=e=>{document.body.style.overflow=null==e?"auto":"hidden",L(e)};(0,o.useEffect)((()=>{console.log("\ud83d\udd0d PWA Debug Info:"),console.log("- Protocol:",window.location.protocol),console.log("- Host:",window.location.hostname),console.log("- Navigator:",navigator.userAgent);const e=e=>{e.preventDefault(),console.log("\u2705 Install prompt event captured!"),I(e),T(!0)};return window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",(e=>{console.log("\ud83c\udf89 Application installed successfully!")})),()=>{window.removeEventListener("beforeinstallprompt",e)}}),[]),(0,o.useEffect)((()=>{if(null!==h&&void 0!==h&&h.id){var e,t;const i=(null===h||void 0===h||null===(e=h.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,he.trackVisit)(h.id,i),(0,he.trackPageView)(h.id,i)}}),[null===h||void 0===h?void 0:h.id]);let te=JSON.parse((null===h||void 0===h?void 0:h.features)||"{}");return(0,o.useEffect)((()=>{n&&(K(n),D("products"))}),[n]),(0,o.useEffect)((()=>{!i&&!n||!A||"feedback"!==A&&"contactForm"!==A||ee(null)}),[i,n]),(0,o.useEffect)((()=>{"categories"===B&&window.scrollTo({top:0,behavior:"smooth"})}),[B]),(0,o.useEffect)((()=>{U.current!==B&&("categories"!==B||n||i||r||window.history.pushState({viewMode:"categories"},"",window.location.href),U.current=B)}),[B,n,i,r]),(0,o.useEffect)((()=>{W.current!==A&&(A&&window.history.pushState({popup:A},"",window.location.href),W.current=A)}),[A]),(0,o.useEffect)((()=>{Y.current!==P&&(P&&(ee(null),window.history.pushState({sidebar:!0},"",window.location.href)),Y.current=P)}),[P]),(0,o.useEffect)((()=>{const e=()=>{const e=null!==new URLSearchParams(window.location.search).get("productId");c(e)};e();const t=window.history.pushState,i=window.history.replaceState;return window.history.pushState=function(){for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];t.apply(window.history,o),setTimeout(e,0)},window.history.replaceState=function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];i.apply(window.history,o),setTimeout(e,0)},window.addEventListener("popstate",e),()=>{window.history.pushState=t,window.history.replaceState=i,window.removeEventListener("popstate",e)}}),[e]),(0,o.useEffect)((()=>{const e=e=>{var t;const i=new URLSearchParams(window.location.search),o=i.get("productId"),n=i.get("categoryId"),r=i.get("page");if(P)return void E(!1);if(A)return void ee(null);if(o||r||n)return;const a="categories"===(null===e||void 0===e||null===(t=e.state)||void 0===t?void 0:t.viewMode)?"categories":"home";D(a),K(null),S("")};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[A]),(0,v.jsxs)(l,{id:"wrapper",children:[(0,v.jsx)(Ln.A,{onProductsClick:()=>{"home"===B?J():"products"===B?Q():D("categories")},onSocialMediaClick:()=>{if("home"!==B)G(),setTimeout((()=>{const e=document.getElementById("social-media-section");e&&e.scrollIntoView({behavior:"smooth"})}),100);else{const e=document.getElementById("social-media-section");e&&e.scrollIntoView({behavior:"smooth"})}},onBranchesClick:()=>{window.history.pushState({},""),ee("location")},onContactFormClick:k,onFeedbackClick:C,onAboutClick:!1!==(null===h||void 0===h?void 0:h.show_about_us)?()=>{window.history.pushState({},""),ee("about")}:void 0,onOrderClick:()=>{null!==te&&void 0!==te&&te.cart&&ee("cart")},onHomeClick:G,onCategoryClick:Z,onContactClick:k,categories:j,activeCategory:X,setshowSidebar:E,showSidebar:P,popupHandler:ee,isProductDetailsOpen:a||"about"===A}),(0,v.jsxs)(s,{onClick:()=>{null!=A&&ee(null)},children:[(0,v.jsx)(d,{showPopup:A}),"home"===B&&(0,v.jsx)(An,{onExploreClick:J,setSearchParams:t,searchParams:e,categories:j}),"categories"===B&&(0,v.jsx)(w,{categories:j,activeCategory:X,setactiveCategory:K,setSearchText:S,searchText:z,setshowSidebar:E,showSidebar:P,carouselPosition:O,setcarouselPosition:R,popupHandler:ee}),"products"===B&&X&&!i&&(0,v.jsx)(To,{categoryId:X,categories:j,onBack:Q,searchText:z,setSearchText:S,popupHandler:ee,setshowSidebar:E,showSidebar:P}),"categories"===B&&(0,v.jsx)(wo,{categories:z?j.filter((e=>"en"===g?(e.en_category||"").toLowerCase().includes(z.toLowerCase()):(e.ar_category||"").toLowerCase().includes(z.toLowerCase()))):j,onCategoryClick:Z}),"products"===B&&X&&(0,v.jsx)(ui,{menu:(null===h||void 0===h?void 0:h.categories)||[],activeCategory:X,showPopup:A,searchText:z,setactiveCategory:K,setcarouselPosition:R,carouselPosition:O,categories:j})]}),(0,v.jsx)(xi.A,{restaurant:h,showPopup:A,popupHandler:ee}),(null===te||void 0===te?void 0:te.cart)&&(0,v.jsx)(hi.A,{restaurant:h,showPopup:A,popupHandler:ee}),(0,v.jsx)(ro.A,{showPopup:A,popupHandler:ee,activeCategory:X}),(0,v.jsx)(mi.A,{restaurant:h,showPopup:A,popupHandler:ee}),(0,v.jsx)(gi.A,{restaurant:h,showPopup:A,popupHandler:ee,isPage:!1}),(0,v.jsx)(fi.A,{restaurant:h,showPopup:A,popupHandler:ee,isPage:!1}),(0,v.jsx)(vi.A,{showPopup:A,popupHandler:ee}),(0,v.jsx)(bi.A,{categories:j,activeCategory:X,setactiveCategory:K,setshowSidebar:E,showSidebar:P,setcarouselPosition:R,onHomeClick:G,onCategoryClick:Z,onFeedbackClick:C,onContactClick:k,onBranchesClick:()=>{window.history.pushState({},""),ee("location")},branches:(null===h||void 0===h?void 0:h.branches)||[]}),i&&(0,v.jsx)(no,{productId:i,searchParams:e,setSearchParams:t}),(null===te||void 0===te?void 0:te.install_app)&&(0,v.jsx)(xo,{showInstallPopup:F,onInstall:async()=>{if(!_)return;_.prompt();"accepted"===(await _.userChoice).outcome?console.log("User accepted the install"):console.log("User dismissed the install"),I(null),T(!1)},restaurantName:x,onDismiss:()=>T(!1)}),(0,v.jsx)(zn.A,{isProductDetailsOpen:a||"about"===A,activeView:B,showPopup:A,onHomeClick:G,onCategoriesClick:()=>{if("products"===B)Q();else{D("categories"),K(null);const i=new URLSearchParams(e);i.delete("categoryId"),t(i),window.scrollTo({top:0,behavior:"smooth"})}},onCartClick:()=>{null!==te&&void 0!==te&&te.cart&&ee("cart")},onBranchesClick:()=>{window.history.pushState({},""),ee("location")},onContactClick:k,onFeedbackClick:C,restaurantName:x,branches:(null===h||void 0===h?void 0:h.branches)||[]}),(0,v.jsx)(Sn.A,{trigger:M,sourceElement:H,onComplete:()=>{V(null)}})]})}},20965:(e,t,i)=>{"use strict";i(42564).default},34848:e=>{"use strict";function t(e,t){if("function"!==typeof e)throw new TypeError("argument fn must be a function");return e}function i(e,t,i){if(!e||"object"!==typeof e&&"function"!==typeof e)throw new TypeError("argument obj must be object");var o=Object.getOwnPropertyDescriptor(e,t);if(!o)throw new TypeError("must call property on owner object");if(!o.configurable)throw new TypeError("property must be configurable")}e.exports=function(e){if(!e)throw new TypeError("argument namespace is required");function o(e){}return o._file=void 0,o._ignored=!0,o._namespace=e,o._traced=!1,o._warned=Object.create(null),o.function=t,o.property=i,o}},26340:(e,t,i)=>{"use strict";var o,n=i(34848)("http-errors"),r=i(40203),a=i(53910),l=i(61033),s=i(51798);function d(e){return Number(String(e).charAt(0)+"00")}function c(e,t){var i=Object.getOwnPropertyDescriptor(e,"name");i&&i.configurable&&(i.value=t,Object.defineProperty(e,"name",i))}function p(e){return"Error"!==e.substr(-5)?e+"Error":e}e.exports=function e(){for(var t,i,o=500,r={},l=0;l<arguments.length;l++){var s=arguments[l],c=typeof s;if("object"===c&&s instanceof Error)o=(t=s).status||t.statusCode||o;else if("number"===c&&0===l)o=s;else if("string"===c)i=s;else{if("object"!==c)throw new TypeError("argument #"+(l+1)+" unsupported type "+c);r=s}}"number"===typeof o&&(o<400||o>=600)&&n("non-error status code; use only 4xx or 5xx status codes");("number"!==typeof o||!a.message[o]&&(o<400||o>=600))&&(o=500);var p=e[o]||e[d(o)];t||(t=p?new p(i):new Error(i||a.message[o]),Error.captureStackTrace(t,e));p&&t instanceof p&&t.status===o||(t.expose=o<500,t.status=t.statusCode=o);for(var u in r)"status"!==u&&"statusCode"!==u&&(t[u]=r[u]);return t},e.exports.HttpError=function(){function e(){throw new TypeError("cannot construct abstract class")}return l(e,Error),e}(),e.exports.isHttpError=(o=e.exports.HttpError,function(e){return!(!e||"object"!==typeof e)&&(e instanceof o||e instanceof Error&&"boolean"===typeof e.expose&&"number"===typeof e.statusCode&&e.status===e.statusCode)}),function(e,t,i){t.forEach((function(t){var o,n=s(a.message[t]);switch(d(t)){case 400:o=function(e,t,i){var o=p(t);function n(e){var t=null!=e?e:a.message[i],l=new Error(t);return Error.captureStackTrace(l,n),r(l,n.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:t,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:o,writable:!0}),l}return l(n,e),c(n,o),n.prototype.status=i,n.prototype.statusCode=i,n.prototype.expose=!0,n}(i,n,t);break;case 500:o=function(e,t,i){var o=p(t);function n(e){var t=null!=e?e:a.message[i],l=new Error(t);return Error.captureStackTrace(l,n),r(l,n.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:t,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:o,writable:!0}),l}return l(n,e),c(n,o),n.prototype.status=i,n.prototype.statusCode=i,n.prototype.expose=!1,n}(i,n,t)}o&&(e[t]=o,e[n]=o)}))}(e.exports,a.codes,e.exports.HttpError)},61033:e=>{"function"===typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var i=function(){};i.prototype=t.prototype,e.prototype=new i,e.prototype.constructor=e}}},29477:(e,t,i)=>{"use strict";var o=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof i.g)return i.g;throw new Error("unable to locate global object")}();e.exports=t=o.fetch,o.fetch&&(t.default=o.fetch.bind(o)),t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response},40203:e=>{"use strict";e.exports=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){return e.__proto__=t,e}:function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(e,i)||(e[i]=t[i]);return e})},53910:(e,t,i)=>{"use strict";var o=i(17662);function n(e){if(!Object.prototype.hasOwnProperty.call(r.message,e))throw new Error("invalid status code: "+e);return r.message[e]}function r(e){if("number"===typeof e)return n(e);if("string"!==typeof e)throw new TypeError("code must be a number or string");var t=parseInt(e,10);return isNaN(t)?function(e){var t=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(r.code,t))throw new Error('invalid status message: "'+e+'"');return r.code[t]}(e):n(t)}e.exports=r,r.message=o,r.code=function(e){var t={};return Object.keys(e).forEach((function(i){var o=e[i],n=Number(i);t[o.toLowerCase()]=n})),t}(o),r.codes=function(e){return Object.keys(e).map((function(e){return Number(e)}))}(o),r.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},r.empty={204:!0,205:!0,304:!0},r.retry={502:!0,503:!0,504:!0}},51798:e=>{"use strict";e.exports=function(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join("").replace(/[^ _0-9a-z]/gi,"")}},42564:(e,t,i)=>{"use strict";i(29477),i(26340)},17662:e=>{"use strict";e.exports=JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a Teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Too Early","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')}}]);
//# sourceMappingURL=3855.cd492d69.chunk.js.map