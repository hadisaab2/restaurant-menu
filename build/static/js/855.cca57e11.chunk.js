/*! For license information please see 855.cca57e11.chunk.js.LICENSE.txt */
(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[855],{88631:(e,t,o)=>{"use strict";o.d(t,{y:()=>a});var i=o(11222),n=o(81132),r=o(27303);const a=(e,t)=>(0,r.I)({queryKey:["bestsellers",e,t||"all"],queryFn:()=>(async(e,t)=>e&&(await i.A.get((0,n.dl)(e,t))).data||[])(e,t),enabled:!!e,refetchOnWindowFocus:!1,retry:!1})},40499:(e,t,o)=>{"use strict";o.d(t,{O:()=>a});var i=o(11222),n=o(81132),r=o(27303);const a=(e,t)=>(0,r.I)({queryKey:["featured-products",e,t||"all"],queryFn:()=>(async(e,t)=>{if(!e)return[];const o=(0,n.b5)(e,t);return(await i.A.get(o)).data||[]})(e,t),enabled:!!e,refetchOnWindowFocus:!1,retry:!1})},21358:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>Sn});var i=o(82483),n=o(41190),r=o(42751),a=o(22829);const l=n.Ay.div`
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
`;var c=o(27320);const p=n.Ay.div`
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
`;var f=o(1901);n.Ay.div`
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
`;o(22139);var v=o(56723);n.Ay.div`
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
`;var b=o(93376),y=o(91965);function w(e){let{activeCategory:t,setactiveCategory:o,categories:i,setSearchText:n,searchText:r,setshowSidebar:a,showSidebar:l,carouselPosition:s,setcarouselPosition:d,popupHandler:c}=e;const{restaurantName:m}=(0,b.g)(),f=window.location.hostname.split(".")[0],w="menugic"!==f&&"localhost"!==f&&"www"!==f?f:m,$=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[w].activeLanguage}));return(0,v.jsx)(p,{children:(0,v.jsx)(u,{children:(0,v.jsxs)(x,{children:[(0,v.jsx)(g,{activeLanguage:$}),(0,v.jsx)(h,{type:"text",activeLanguage:$,dir:"en"==$?"ltr":"rtl",placeholder:"en"==$?"Search Category":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{n(e.target.value)},value:r})]})})})}var $=o(99891),j=(o(17123),o(11222));const C=n.Ay.div`
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
`,oe=n.Ay.button`
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
`,ie=n.Ay.button`
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
`;var re=o(42186),ae=o(88282),le=o(18907),se=o(58821),de=o(86001),ce=o(81132),pe=o(70268),ue=o(71481),xe=o(73422),he=o(81926),ge=o(2200);const me=o(34304),fe=a.phF,ve=i.forwardRef(((e,t)=>{var o,n,r,a,l;let{plate:s,setactivePlate:d,activePlate:c,index:p,showPopup:u,setSearchParams:x,searchParams:h,activeCategoryId:g,categories:m,disableDetails:f,$isFeatured:w,onAddToCart:$,wishlistIds:C,onWishlistChange:k}=e;const{restaurantName:A}=(0,b.g)(),L=window.location.hostname.split(".")[0],z="menugic"!==L&&"localhost"!==L&&"www"!==L?L:A,S=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[z]})),[P,E]=((0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[z].activeLanguage})),(0,i.useState)(!1)),_=(0,i.useRef)(null),I=(0,re.jE)(),F=(0,i.useCallback)((()=>{!f&&null!==s&&void 0!==s&&s.id&&I.prefetchQuery({queryKey:(0,ae.Nb)(s.id),queryFn:()=>(0,ae.oo)(s.id),staleTime:3e5})}),[f,null===s||void 0===s?void 0:s.id,I]),T=()=>{if(!new URLSearchParams(window.location.search).get("productId")&&null===c&&P&&!u){f||d(p);const o=new URLSearchParams(h);if(o.set("productId",null===s||void 0===s?void 0:s.id),"all-items"===g?o.set("categoryId","all-items"):g&&"all-items"!==g&&o.set("categoryId",g),x(o),window.history.pushState({},"",`?${o.toString()}`),null!==S&&void 0!==S&&S.id&&null!==s&&void 0!==s&&s.id){var e,t;const o="all-items"===g?s.category_id:g,i=(null===S||void 0===S||null===(e=S.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,he.trackItemView)(S.id,s.id,o,i)}document.body.style.overflow="hidden"}},N=(0,y.wA)(),O=(0,pe.wU)(z),R=C&&"function"===typeof C.has&&C.has(s.id),B=(0,ge.Q)(null===S||void 0===S?void 0:S.currency),D="all-items"===g?s.category_id:g,U=m.find((e=>e.id==D));let Z;Z=U&&0!==parseFloat(U.discount||0)?parseFloat(U.discount||0):parseFloat(s.discount||0);let ve={};try{ve="string"===typeof(null===S||void 0===S?void 0:S.features)?JSON.parse(S.features||"{}"):(null===S||void 0===S?void 0:S.features)||{}}catch(me){ve={}}const be=Boolean(null===s||void 0===s?void 0:s.out_of_stock)||1===Number(null===s||void 0===s?void 0:s.out_of_stock),ye=null!==(o=null===(n=s.images)||void 0===n?void 0:n.findIndex((e=>e.id===s.new_cover_id)))&&void 0!==o?o:-1,we=ye>=0&&(null===(r=s.images)||void 0===r||null===(a=r[ye])||void 0===a?void 0:a.url),$e=null!==S&&void 0!==S&&S.logoURL?(0,se.V)(S.logoURL):null,je=we?(0,se.V)(s.images[ye].url):$e||"",Ce=!me.isEmpty(null===s||void 0===s?void 0:s.form_json)&&!me.isEmpty(JSON.parse((null===s||void 0===s?void 0:s.form_json)||"{}")),ke=!me.isEmpty(null===U||void 0===U?void 0:U.form_json)&&!me.isEmpty(JSON.parse((null===U||void 0===U?void 0:U.form_json)||"{}")),Ae=Ce||ke,Le=(0,i.useCallback)((e=>{const t=document.getElementById("cart-tab-icon");if(!t)return;const o=(null===e||void 0===e?void 0:e.currentTarget)||(null===e||void 0===e?void 0:e.target),i=o?o.getBoundingClientRect():null,n=t.getBoundingClientRect();if(!i)return;const r=(null===S||void 0===S?void 0:S.mainColor)||(null===S||void 0===S?void 0:S.maincolor)||"#a6ce39",a=i.left+i.width/2,l=i.top+i.height/2,s=n.left+n.width/2,d=n.top+n.height/2,c=document.createElement("div");c.style.cssText=`\n        position: fixed;\n        left: ${a-14}px;\n        top: ${l-14}px;\n        width: 28px; height: 28px;\n        border-radius: 50%;\n        background: ${r};\n        box-shadow: 0 4px 15px ${r}88, 0 2px 6px rgba(0,0,0,0.3);\n        z-index: 99999;\n        pointer-events: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      `,c.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>',document.body.appendChild(c);const p=document.createElement("div");p.style.cssText=`\n        position: fixed;\n        left: ${a-10}px;\n        top: ${l-10}px;\n        width: 20px; height: 20px;\n        border-radius: 50%;\n        background: ${r}55;\n        z-index: 99998;\n        pointer-events: none;\n      `,document.body.appendChild(p);const u=(a+s)/2+(a>s?60:-60),x=Math.min(l,d)-120,h=c.animate([{left:a-14+"px",top:l-14+"px",width:"28px",height:"28px",opacity:1,transform:"scale(1)"},{left:u-12+"px",top:x-12+"px",width:"24px",height:"24px",opacity:1,transform:"scale(1.1)",offset:.35},{left:s-8+"px",top:d-8+"px",width:"16px",height:"16px",opacity:.6,transform:"scale(0.6)"}],{duration:650,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"});p.animate([{left:a-10+"px",top:l-10+"px",width:"20px",height:"20px",opacity:.5},{left:u-8+"px",top:x-8+"px",width:"16px",height:"16px",opacity:.3,offset:.4},{left:s-4+"px",top:d-4+"px",width:"8px",height:"8px",opacity:0}],{duration:700,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"}),h.onfinish=()=>{c.remove(),p.remove();(t.closest("[data-tab]")||t.parentElement||t).animate([{transform:"scale(1)"},{transform:"scale(1.35)",offset:.25},{transform:"scale(0.85)",offset:.5},{transform:"scale(1.15)",offset:.75},{transform:"scale(1)"}],{duration:500,easing:"ease-out"})}}),[S]),ze=e=>{var t,o;e&&(e.preventDefault(),e.stopPropagation(),null!==(o=e.nativeEvent)&&void 0!==o&&o.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation());if(ve&&!1===ve.cart)return;if(be)return;if(!0===(null===(t=ve)||void 0===t?void 0:t.quick_add_requires_options)&&Ae)return void T();const i=parseFloat((null===s||void 0===s?void 0:s.en_price)||"0")*(1-parseFloat(Z)/100);if(N((0,de.bE)(z,s,1,{},i,"")),null!==S&&void 0!==S&&S.id&&null!==s&&void 0!==s&&s.id){var n,r;const e="all-items"===g?s.category_id:g,t=(null===S||void 0===S||null===(n=S.branches)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.id)||null;(0,he.trackAddToCart)(S.id,s.id,e,1,t)}Le(e)};return(0,v.jsx)(W,{ref:_,"data-product-container":!0,index:p,activePlate:c,className:"lazy-load",$isFeatured:w,children:(0,v.jsxs)(Y,{children:[(s.is_best_seller||s.isBestSeller)&&(0,v.jsx)(te,{activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,children:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?"Bestseller":"\u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b"}),!P&&(0,v.jsx)(G,{children:(0,v.jsx)(Q,{})}),(0,v.jsxs)(q,{onClick:T,onMouseEnter:F,onTouchStart:F,children:[s.new&&(0,v.jsx)(ee,{children:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?"NEW !":"! \u062c\u062f\u064a\u062f"}),(0,v.jsx)(M,{ref:t,onLoad:()=>{E(!0)},src:je,imageLoaded:P,$isLogoFallback:!we}),O&&(0,v.jsx)(oe,{type:"button",activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,$filled:R,title:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?R?"Remove from wishlist":"Add to wishlist":R?"\u0625\u0632\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629":"\u0623\u0636\u0641 \u0644\u0644\u0645\u0641\u0636\u0644\u0629",onClick:e=>{var t;e&&(e.preventDefault(),e.stopPropagation(),null!==(t=e.nativeEvent)&&void 0!==t&&t.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation());O&&null!==s&&void 0!==s&&s.id&&(async()=>{try{R?await j.A.delete((0,ce.Vr)(s.id),{headers:{Authorization:`Bearer ${O}`}}):await j.A.post(ce.Vb,{product_id:s.id},{headers:{Authorization:`Bearer ${O}`}}),null===k||void 0===k||k(),xe.oR.success("en"===(null===S||void 0===S?void 0:S.activeLanguage)?R?"Removed from wishlist":"Saved to wishlist":R?"\u0623\u064f\u0632\u064a\u0644\u062a \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629":"\u0623\u064f\u0636\u064a\u0641\u062a \u0625\u0644\u0649 \u0627\u0644\u0645\u0641\u0636\u0644\u0629")}catch{xe.oR.error("en"===(null===S||void 0===S?void 0:S.activeLanguage)?"Could not update wishlist":"\u062a\u0639\u0630\u0631 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u0641\u0636\u0644\u0629")}})()},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchStart:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:(0,v.jsx)(fe,{size:18})})]}),!1!==(null===(l=ve)||void 0===l?void 0:l.cart)&&(be?(0,v.jsx)(ne,{activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,children:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,v.jsx)(ie,{type:"button",onClick:ze,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),ze(e)},onTouchStart:e=>{e.stopPropagation()},onPointerDown:e=>{e.stopPropagation()},activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,title:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,v.jsx)(ue._xK,{size:12})})),(0,v.jsxs)(H,{activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,children:[(0,v.jsx)(V,{fontSize:null===S||void 0===S?void 0:S.font_size,children:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?s.en_name:s.ar_name}),!me.isEmpty(s.en_price)&&(0,v.jsxs)(X,{$isRtl:"ar"===(null===S||void 0===S?void 0:S.activeLanguage),children:[(0,v.jsx)(K,{discounted:0!=Z,children:(0,le.T)(parseFloat(s.en_price),B)}),(0,v.jsx)(J,{children:0!=Z&&(0,le.T)(parseFloat(s.en_price)*(1-parseFloat(Z)/100),B)})]})]})]})})}));var be=o(10448),ye=o(34304),we=o.n(ye);const $e=n.i7`
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
`,ot=n.Ay.div`
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
`,it=n.Ay.button`
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
`;var ft=o(88620),vt=o(57526);o(44014),o(70045),o(5084);const bt=n.Ay.div`
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
`;function St(e){let{carouselIndex:t,images:o,CloseAnimation:i,carouselSwiped:n}=e;return(0,v.jsxs)(bt,{CloseAnimation:i,children:[(0,v.jsxs)(yt,{children:[(0,v.jsx)(wt,{carouselIndex:t,children:(0,v.jsx)($t,{})}),o.map((e=>(0,v.jsx)(jt,{children:(0,v.jsx)(Ct,{})})))]}),!n&&(0,v.jsxs)(kt,{children:[(0,v.jsx)(At,{children:"Swipe"}),(0,v.jsx)(zt,{})]})]})}n.Ay.form`
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
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(we().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
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

`);var Ot=o(41235);function Rt(e){let{component:t,formData:o,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||[]);return(0,v.jsxs)(Et,{index:r,children:[(0,v.jsx)(Pt,{children:t.label}),t.values.map((e=>(0,v.jsxs)(It,{children:[s.some((t=>t===e.label))?(0,v.jsx)(Tt,{onClick:()=>{(e=>{let o=s.filter((t=>t!==e.label));d(o),n(t.key,o)})(e)},children:(0,v.jsx)(Ot.RXm,{size:"15px"})}):(0,v.jsx)(Ft,{onClick:()=>{(e=>{d([...s,e.label]),n(t.key,[...s,e.label])})(e)},children:(0,v.jsx)(ue.OiG,{})}),(0,v.jsx)(_t,{children:e.label})]}))),(c=a,c in l?(0,v.jsx)(Nt,{children:"This field is required"}):null)]});var c}const Bt=n.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(we().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
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

`);function Xt(e){var t;let{component:o,formData:n,handleChange:r,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;console.log(s),console.log(d);const[c,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===(t=n[o.key])||void 0===t?void 0:t.value)||""),h=(0,i.useRef)(null),g=e=>{x(e.label),p(!1),r(o.key,e)},m=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,v.jsxs)(Bt,{ref:h,index:l,children:[(0,v.jsx)(Pt,{children:o.label}),o.data.values.length>8?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(Dt,{onClick:()=>p((e=>!e)),children:[u||a,(0,v.jsx)(Ut,{className:c?"up":"",children:"\u25bc"})]}),(0,v.jsx)(Wt,{isOpen:c,children:o.data.values.map(((e,t)=>(0,v.jsx)(Yt,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},t)))})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(Mt,{children:o.data.values.map(((e,t)=>(0,v.jsx)(qt,{children:(0,v.jsx)(Ht,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,v.jsx)(Vt,{children:"This field is required"}):null)]});var f}const Kt=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(we().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
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
`,eo=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function to(e){let{component:t,formData:o,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||"");return(0,v.jsxs)(Kt,{index:r,children:[(0,v.jsx)(Pt,{children:t.label}),t.values.map((e=>(0,v.jsxs)(Zt,{children:[(0,v.jsx)(Qt,{onClick:()=>{(e=>{d(e),n(t.key,e)})(e)},children:(0,v.jsx)(Gt,{selected:s.label==e.label})}),(0,v.jsx)(Jt,{children:e.label})]}))),(c=a,c in l?(0,v.jsx)(eo,{children:"This field is required"}):null)]});var c}function oo(e){let{formSchema:t,onPriceChange:o,basePrice:n,formData:r,setFormData:a,finalDiscount:l,formErrors:s}=e;(0,i.useEffect)((()=>{c(r)}),[r]);const d=(e,t)=>{a((o=>({...o,[e]:t})))},c=e=>{let i=parseFloat(n)||0,r=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const o=t.values.find((t=>t.label===e)),i=!isNaN(Number(o.value));o&&o.value&&i&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")&&(r-=parseFloat(o.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const o=t.data.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(o.value));o&&n&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?r-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}else if("radio"===t.type&&t.values){const o=t.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(o.value));o&&n&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?r-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}}));const a=i+r,l=a%1!==0?a.toFixed(2):a.toFixed(0);o(l)};return(0,v.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return console.log(e.key),(0,v.jsx)(Rt,{component:e,formData:r,handleChange:d,index:t,componentKey:e.key,formErrors:s});case"select":return console.log(e.key),(0,v.jsx)(Xt,{component:e,formData:r,handleChange:d,index:t,componentKey:e.key,formErrors:s});case"radio":return(0,v.jsx)(to,{component:e,formData:r,handleChange:d,index:t,componentKey:e.key,formErrors:s});default:return null}})(e,t)))})}var io=o(42770),no=o(73556),ro=(o(20965),o(16104));const ao=o(34304);function lo(e){var t,o,n,r,l,s,d,c,p,u,x,h,g,m,w;let{activePlate:$,setactivePlate:j,menu:C,plates:k,productPositions:A,categories:L,activeCategoryId:z,setSearchParams:S,searchParams:P}=e;const{restaurantName:E}=(0,b.g)(),_=window.location.hostname.split(".")[0],I="menugic"!==_&&"localhost"!==_&&"www"!==_?_:E,F=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[I]})),T=L.find((e=>e.id==z)),{response:N}=(0,ro.$)({productId:null===(t=k[$])||void 0===t?void 0:t.id});(0,i.useEffect)((()=>{var e;let t=null;var o,i;ao.isEmpty(null===(e=k[$])||void 0===e?void 0:e.form_json)||(t=ao.isEmpty(JSON.parse(null===(o=k[$])||void 0===o?void 0:o.form_json))?null===T||void 0===T?void 0:T.form_json:null===(i=k[$])||void 0===i?void 0:i.form_json);if(ao.isEmpty(t))R({});else{var n;const e=JSON.parse(t);if(R(e),2===(null===e||void 0===e?void 0:e.version)&&(null===e||void 0===e||null===(n=e.sizes)||void 0===n?void 0:n.length)>0){var r;const t=parseFloat(null===(r=k[$])||void 0===r?void 0:r.en_price)||0,o=e.sizes.find((e=>"absolute"===e.priceMode&&Number(e.priceModifier)===t));Q((()=>({...(0,no.KE)(),sizeId:o?o.id:e.sizes[0].id})))}}}),[F.activeLanguage]),(0,i.useEffect)((()=>{var e;if(null!==(e=k[$])&&void 0!==e&&e.id&&null!==F&&void 0!==F&&F.id){var t,o;const e=(null===F||void 0===F||null===(t=F.branches)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.id)||null;(0,he.trackItemView)(F.id,k[$].id,k[$].category_id,e)}}),[$,k,null===F||void 0===F?void 0:F.id]);const[O,R]=(0,i.useState)({}),[B,D]=(0,i.useState)(!1),[U,W]=(0,i.useState)(1),[Y,M]=(0,i.useState)({x:0,y:0}),[q,H]=(0,i.useState)(!1),V=(0,i.useRef)(null),X=(0,i.useRef)(null),K=e=>{e.stopPropagation(),W(1),M({x:0,y:0}),D(!0)},J=()=>{D(!1)},[Z,Q]=(0,i.useState)({}),[G,ee]=(0,i.useState)({}),te=(0,y.wA)(),[oe,ie]=(0,i.useState)(1),[ne,re]=(0,i.useState)(!1);let ae;ae=0===parseFloat(T.discount)?parseFloat(k[$].discount):parseFloat(T.discount);const ce=(null===(o=k[$])||void 0===o?void 0:o.en_price)||"0",pe=ce.includes(".")?parseFloat(ce).toFixed(2):parseFloat(ce).toFixed(0),[me,fe]=(0,i.useState)(pe),[ve,be]=(0,i.useState)(""),ye=e=>{fe(e)},[we,$e]=(0,i.useState)(!0),[je,Ce]=(0,i.useState)(0),Le=450,Ie=(0,i.useRef)(!1);(0,i.useEffect)((()=>(document.body.style.overflow=we?"hidden":"auto",()=>{document.body.style.overflow="auto"})),[we]);const Ye=e=>{if(e&&(e.preventDefault(),e.stopPropagation()),Ie.current)return;Ie.current=!0,j(null),$e(!1);const t=new URLSearchParams(P);t.delete("productId"),z&&!t.get("categoryId")&&t.set("categoryId",z),window.history.replaceState({},"",`?${t.toString()}`),S(t),setTimeout((()=>{document.body.style.overflow="auto",Ie.current=!1}),Le)},[Me,tt]=(0,i.useState)(!1),bt=()=>{re(!0),Ce(je+1)},yt=()=>{re(!0),Ce(je-1)},wt=(0,i.useRef)(null),$t=(0,i.useRef)(null),[jt,Ct]=(0,i.useState)(null);(0,i.useEffect)((()=>{const e=()=>{j(null);const e=new URLSearchParams(P);e.delete("productId"),z&&!e.get("categoryId")&&e.set("categoryId",z),S(e),$e(!1),setTimeout((()=>{document.body.style.overflow="auto"}),Le)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[z,P,S,j,Le]);const kt=2===(null===O||void 0===O?void 0:O.version)&&Array.isArray(null===O||void 0===O?void 0:O.sizes);const At=null!==F&&void 0!==F&&F.logoURL?(0,se.V)(F.logoURL):null;let Lt=[...null!==(n=null===(r=k[$])||void 0===r?void 0:r.images)&&void 0!==n?n:[]];0===Lt.length&&At&&(Lt=[{id:"fallback-logo",url:F.logoURL,isFallback:!0}]);const zt=Lt.findIndex((e=>{var t;return e.id===(null===(t=k[$])||void 0===t?void 0:t.new_cover_id)}));if(zt>0){const[e]=Lt.splice(zt,1);Lt.unshift(e)}const[Pt,Et]=(0,i.useState)({}),_t=e=>{Et((t=>({...t,[e]:!0})))},It="en"===(null===F||void 0===F?void 0:F.activeLanguage)?null===(l=k[$])||void 0===l?void 0:l.en_description:null===(s=k[$])||void 0===s?void 0:s.ar_description,Ft=It?It.replace(/<br\s*\/?>/gi,""):"",Tt=(0,ge.Q)(null===F||void 0===F?void 0:F.currency);let Nt=JSON.parse(F.features);const Rt=Boolean(null===(d=k[$])||void 0===d?void 0:d.out_of_stock)||1===Number(null===(c=k[$])||void 0===c?void 0:c.out_of_stock),Bt=T?"en"===(null===F||void 0===F?void 0:F.activeLanguage)?T.en_category:T.ar_category:"",Dt=(null===F||void 0===F?void 0:F.product_details_carousel_style)||"normal";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(ke,{CloseAnimation:we,onClick:Ye}),(0,v.jsxs)(Ae,{CloseAnimation:we,children:[(0,v.jsxs)(De,{CloseAnimation:we,children:[(0,v.jsx)(We,{onClick:Ye,CloseAnimation:we,children:(0,v.jsx)(Oe,{})}),(0,v.jsx)(Ue,{activeLanguage:null===F||void 0===F?void 0:F.activeLanguage,children:Bt}),(0,v.jsx)(dt,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),tt(!0),setTimeout((()=>{tt(!1)}),4e3)},CloseAnimation:we,children:Me?(0,v.jsx)(Ot.RXm,{}):(0,v.jsx)(ue.zU_,{})})]}),(0,v.jsx)(ze,{squareDimension:null===(p=k[$])||void 0===p?void 0:p.square_dimension,CloseAnimation:we,children:1===Lt.length?(0,v.jsx)(Pe,{ref:wt,carouselIndex:0,children:(0,v.jsx)(Ee,{children:(0,v.jsxs)(_e,{children:[!Pt[0]&&(0,v.jsx)(Te,{children:(0,v.jsx)(Fe,{})}),(0,v.jsx)(Ne,{src:null!==(u=Lt[0])&&void 0!==u&&u.url?(0,se.V)(Lt[0].url):At||"",onLoad:()=>_t(0),onError:e=>{At&&e.target.src!==At&&(e.target.src=At)},CloseAnimation:we,Loaded:Pt[0],alt:"Image 0"}),(0,v.jsx)(xt,{onClick:K,children:(0,v.jsx)(f.gff,{})})]})})}):"normal"===Dt?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Re,{CloseAnimation:we,onClick:()=>{re(!0),0!==je&&yt()}}),(0,v.jsx)(Be,{CloseAnimation:we,onClick:()=>{re(!0),Lt.length>je+1&&bt()}}),(0,v.jsx)(Pe,{carouselIndex:je,ref:wt,onTouchStart:e=>{Ct(e.touches[0].clientX)},onTouchMove:e=>{if(jt){const n=e.touches[0].clientX-jt;if(n>5)0!==je&&yt();else if(n<-5){var t,o,i;(null!==(t=null===(o=k[$])||void 0===o||null===(i=o.images)||void 0===i?void 0:i.length)&&void 0!==t?t:0)>je+1&&bt()}Ct(null)}},children:Lt.map(((e,t)=>(0,v.jsx)(Ee,{children:(0,v.jsxs)(_e,{children:[!Pt[t]&&(0,v.jsx)(Te,{children:(0,v.jsx)(Fe,{})}),(0,v.jsx)(Ne,{src:Pt[t]||t===je?e.url?(0,se.V)(e.url):At||"":"",onLoad:()=>_t(t),onError:e=>{At&&e.target.src!==At&&(e.target.src=At)},CloseAnimation:we,Loaded:Pt[t],alt:`Image ${t}`}),t===je&&(0,v.jsx)(xt,{onClick:K,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))})]}):"effect-cards"===Dt?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Re,{CloseAnimation:we,onClick:()=>{var e;re(!0),null===(e=$t.current)||void 0===e||e.slidePrev()}}),(0,v.jsx)(Se,{$closeAnimation:we,children:(0,v.jsx)(ft.RC,{onSwiper:e=>{$t.current=e},onSlideChange:e=>{Ce(e.realIndex),re(!0)},modules:[vt.ZD],effect:"cards",grabCursor:!0,className:"product-details-swiper",initialSlide:0,children:Lt.map(((e,t)=>(0,v.jsx)(ft.qr,{children:(0,v.jsxs)(_e,{children:[!Pt[t]&&(0,v.jsx)(Te,{children:(0,v.jsx)(Fe,{})}),(0,v.jsx)(Ne,{$cardSlide:!0,src:Pt[t]||t===je?e.url?(0,se.V)(e.url):At||"":"",onLoad:()=>_t(t),onError:e=>{At&&e.target.src!==At&&(e.target.src=At)},CloseAnimation:we,Loaded:Pt[t],alt:`Image ${t}`}),t===je&&(0,v.jsx)(xt,{onClick:K,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))},null===(x=k[$])||void 0===x?void 0:x.id)}),(0,v.jsx)(Be,{CloseAnimation:we,onClick:()=>{var e;re(!0),null===(e=$t.current)||void 0===e||e.slideNext()}})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(Se,{$closeAnimation:we,$paginationFraction:!0,children:(0,v.jsx)(ft.RC,{onSwiper:e=>{$t.current=e},onSlideChange:e=>{Ce(e.realIndex),re(!0)},modules:[vt.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:Lt.map(((e,t)=>(0,v.jsx)(ft.qr,{children:(0,v.jsxs)(_e,{children:[!Pt[t]&&(0,v.jsx)(Te,{children:(0,v.jsx)(Fe,{})}),(0,v.jsx)(Ne,{$cardSlide:!0,src:Pt[t]||t===je?e.url?(0,se.V)(e.url):At||"":"",onLoad:()=>_t(t),onError:e=>{At&&e.target.src!==At&&(e.target.src=At)},CloseAnimation:we,Loaded:Pt[t],alt:`Image ${t}`}),t===je&&(0,v.jsx)(xt,{onClick:K,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))},null===(h=k[$])||void 0===h?void 0:h.id)})})}),1!==Lt.length&&(0,v.jsx)(St,{images:Lt,carouselIndex:je,CloseAnimation:we,carouselSwiped:ne}),(0,v.jsx)(qe,{children:(0,v.jsx)(He,{children:(0,v.jsxs)(Ve,{CloseAnimation:we,activeLanguage:F.activeLanguage,children:[(0,v.jsxs)(Xe,{activeLanguage:F.activeLanguage,children:[(0,v.jsx)(Ke,{activeLanguage:F.activeLanguage,children:"en"==F.activeLanguage?null===(g=k[$])||void 0===g?void 0:g.en_name:null===(m=k[$])||void 0===m?void 0:m.ar_name}),!ao.isEmpty(null===(w=k[$])||void 0===w?void 0:w.en_price)&&(0,v.jsxs)(Qe,{children:[(0,v.jsx)(Ge,{activeLanguage:F.activeLanguage,discounted:0!=ae,children:(0,le.T)(me,Tt)}),0!=ae&&(0,v.jsx)(et,{activeLanguage:F.activeLanguage,children:(0,le.T)(me*(1-parseFloat(ae)/100),Tt)})]})]}),!ao.isEmpty(Ft)&&(0,v.jsx)(Je,{activeLanguage:F.activeLanguage,dangerouslySetInnerHTML:{__html:Ft}}),Rt&&(0,v.jsx)(Ze,{children:"en"===F.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),kt&&(0,v.jsx)(io.A,{options:O,formData:Z,setFormData:Q,formErrors:G,activeLanguage:F.activeLanguage,basePrice:pe,onPriceChange:ye}),!kt&&(null===O||void 0===O?void 0:O.components)&&(0,v.jsx)(oo,{formSchema:O,onPriceChange:ye,formData:Z,setFormData:Q,basePrice:pe,formErrors:G}),(0,v.jsxs)(ct,{activeLanguage:F.activeLanguage,children:[(0,v.jsx)(pt,{children:"en"==F.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,v.jsx)(ut,{activeLanguage:F.activeLanguage,onChange:e=>be(e.target.value),placeholder:"en"==F.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(null===Nt||void 0===Nt?void 0:Nt.cart)&&!Rt&&(0,v.jsxs)(ot,{CloseAnimation:we,children:[(0,v.jsxs)(rt,{CloseAnimation:we,children:[(0,v.jsx)(at,{onClick:()=>{ie(oe+1)},children:"+"}),(0,v.jsx)(st,{children:oe}),(0,v.jsx)(lt,{onClick:()=>{oe>1&&ie(oe-1)},children:"-"})]}),(0,v.jsxs)(it,{onClick:()=>{var e;if(kt){var t;const e={};if((null===(t=O.sizes)||void 0===t?void 0:t.length)>0&&(null===Z||void 0===Z||!Z.sizeId)&&(e.size="Please select a size."),Object.keys(e).length>0)return void ee(e)}else if("{}"!==JSON.stringify(O)){const e=function(e,t){const o={},i=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in t&&0!==(null===(i=t[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(t[e])||(o[e]="This field is required.")})),o}(O,Z);if(Object.keys(e).length>0)return void ee(e)}let o=me*(1-parseFloat(ae)/100);if(Ie.current||(Ie.current=!0,$e(!1),j(null),setTimeout((()=>{document.body.style.overflow="auto",Ie.current=!1}),Le)),te((0,de.bE)(I,k[$],oe,Z,o,ve)),null!==F&&void 0!==F&&F.id&&null!==(e=k[$])&&void 0!==e&&e.id){var i,n;const e=(null===F||void 0===F||null===(i=F.branches)||void 0===i||null===(n=i[0])||void 0===n?void 0:n.id)||null;(0,he.trackAddToCart)(F.id,k[$].id,k[$].category_id,oe,e)}xe.oR.success("en"===(null===F||void 0===F?void 0:F.activeLanguage)?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629"),ie(1),ee({})},children:["en"==F.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",(0,v.jsx)(nt,{children:(0,le.T)(oe*(me*(1-parseFloat(ae)/100)),Tt)})]})]})]}),B&&(0,v.jsxs)(ht,{onClick:J,onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY;X.current=Math.hypot(t,o)}else 1===e.touches.length&&(H(!0),V.current={x:e.touches[0].clientX,y:e.touches[0].clientY})},onTouchMove:e=>{if(2===e.touches.length&&X.current){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(t,o),n=i/X.current;W((e=>Math.min(Math.max(e*n,1),5))),X.current=i}else if(1===e.touches.length&&q&&U>1){const t=e.touches[0],o=t.clientX-V.current.x,i=t.clientY-V.current.y;M((e=>({x:e.x+o/U,y:e.y+i/U}))),V.current={x:t.clientX,y:t.clientY}}},onTouchEnd:()=>{H(!1),X.current=null,V.current=null},children:[(0,v.jsx)(gt,{onClick:J,children:(0,v.jsx)(a.$8F,{})}),(0,v.jsx)(mt,{src:(()=>{const e=Lt[je];return e&&e.url?(0,se.V)(e.url):At||""})(),alt:"Zoomed",$scale:U,$translateX:Y.x,$translateY:Y.y,$dragging:q,onClick:e=>e.stopPropagation(),onDoubleClick:()=>{U>1?(W(1),M({x:0,y:0})):W(2.5)}})]})]})}var so=o(9328),co=o(32415);const po=o(34304);function uo(e){var t,n,r;let{menu:a,activeCategory:l,showPopup:s,searchText:d,carouselPosition:c,setcarouselPosition:p,setactiveCategory:u,categories:x,onAddToCart:h}=e;const[g,m]=(0,i.useState)(null),[f,w]=(0,$.ok)(),{restaurantName:W}=(0,b.g)(),Y=window.location.hostname.split(".")[0],M="menugic"!==Y&&"localhost"!==Y&&"www"!==Y?Y:W,q=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[M].activeLanguage})),H=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[M]})),V=(0,y.wA)(),[X,K]=(0,i.useState)((()=>new Set)),J=(0,i.useCallback)((async()=>{const e=(0,pe.wU)(M);if(e)try{const{data:t}=await j.A.get(ce.Vb,{headers:{Authorization:`Bearer ${e}`}}),o=(Array.isArray(t)?t:[]).map((e=>e.id));K(new Set(o))}catch{K(new Set)}else K(new Set)}),[M]);(0,i.useEffect)((()=>{J()}),[J]),(0,i.useEffect)((()=>{const e=e=>{var t;null!==e&&void 0!==e&&null!==(t=e.detail)&&void 0!==t&&t.restaurantName&&e.detail.restaurantName!==M||J()};return window.addEventListener("menugic-customer-auth",e),()=>window.removeEventListener("menugic-customer-auth",e)}),[M,J]);const[Z,Q]=(0,i.useState)([]),[G,ee]=(0,i.useState)([]),te=(0,i.useRef)(),oe=(0,i.useRef)(),ie=(0,re.jE)(),ne=(0,i.useCallback)((e=>{e&&ie.prefetchQuery({queryKey:(0,ae.Nb)(e),queryFn:()=>(0,ae.oo)(e),staleTime:3e5})}),[ie]),he="all-items"===l,me=l&&!he?String(l):null,fe=(null===H||void 0===H?void 0:H.all_items_style)||"grid",{data:be,fetchNextPage:ye,hasNextPage:we,isFetchingNextPage:$e}=(0,so.w)(me),{data:je,fetchNextPage:Ce,hasNextPage:ke,isFetchingNextPage:Ae}=(0,co.u)(he?null===H||void 0===H?void 0:H.id:null),Le=(null===je||void 0===je||null===(t=je.pages)||void 0===t?void 0:t.flat())||[],ze=()=>{const e=null===G||void 0===G?void 0:G.map((e=>{if(e.current){var t;const o=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return{x:o.left,y:o.top,width:o.width}}return null}));Q(e)};(0,i.useEffect)((()=>{ze()}),[G]),(0,i.useEffect)((()=>{var e;if(a&&null!==l&&(null===be||void 0===be||null===(e=be.pages)||void 0===e?void 0:e.flat().length)>0){var t,o;const e=null===be||void 0===be||null===(t=be.pages)||void 0===t||null===(o=t.flat())||void 0===o?void 0:o.filter((e=>e["en"===q?"en_name":"ar_name"].toLowerCase().includes(d.toLowerCase()))).map((()=>i.createRef()));ee(e)}}),[a,l,d,be]),(0,i.useEffect)((()=>{const e=()=>{ze()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[G]),(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&we&&!$e&&ye()}),{threshold:.1});return te.current&&e.observe(te.current),()=>{te.current&&e.unobserve(te.current)}}),[we,$e,ye]),(0,i.useEffect)((()=>{if(!he)return;let e,t;return t=setTimeout((()=>{e=new IntersectionObserver((e=>{e[0].isIntersecting&&ke&&!Ae&&Ce()}),{threshold:.2}),oe.current&&e.observe(oe.current)}),100),()=>{clearTimeout(t),e&&oe.current&&e.unobserve(oe.current)}}),[Ce,ke,he,Ae,Le]);const Se=(null===be||void 0===be||null===(n=be.pages)||void 0===n||null===(r=n.flat())||void 0===r?void 0:r.filter((e=>!(Boolean(null===e||void 0===e?void 0:e.hide)||1===Number(null===e||void 0===e?void 0:e.hide))&&e["en"===q?"en_name":"ar_name"].toLowerCase().includes(d.toLowerCase()))))||[],Pe=i.useMemo((()=>{if(!he)return[];return(x||[]).filter((e=>!e.isAllItems)).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))).map((e=>{const t=Le.filter((t=>{if(Boolean(null===t||void 0===t?void 0:t.hide)||1===Number(null===t||void 0===t?void 0:t.hide))return!1;if(t.category_id!=e.id)return!1;const o=t["en"===q?"en_name":"ar_name"]||"";return!d||function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase().includes(d.toLowerCase())}(o)})).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0)));return{category:e,items:t}})).filter((e=>e.items.length>0))}),[q,Le,x,he,d]);console.log(Se);const[Ee,_e]=(0,i.useState)(c),[Ie,Fe]=(0,i.useState)(!1),[Te,Ne]=(0,i.useState)(x.length<4?3:4);(0,i.useRef)(0),(0,i.useRef)(0);return(0,i.useEffect)((()=>{_e(x.findIndex((e=>e.id==l)))}),[l]),(0,i.useEffect)((()=>{he&&m(null)}),[he]),(0,i.useEffect)((()=>{f.get("productId")||m(null)}),[f]),(0,v.jsx)(C,{activeCategory:l,children:he?(0,v.jsxs)(A,{children:[Pe.map((e=>(0,v.jsxs)(L,{children:[(0,v.jsx)(z,{activeLanguage:q,children:"en"===q?e.category.en_category:e.category.ar_category}),"list"===fe?(0,v.jsx)(_,{children:e.items.map(((e,t)=>{var i,n,r,a;const s=x.find((t=>t.id==e.category_id));let d;d=s&&0!==parseFloat(s.discount||0)?parseFloat(s.discount||0):parseFloat(e.discount||0);const c=0!==d?parseFloat(e.en_price)*(1-parseFloat(d)/100):parseFloat(e.en_price),p=(0,ge.Q)(null===H||void 0===H?void 0:H.currency),u=null!==(i=null===(n=e.images)||void 0===n?void 0:n.findIndex((t=>t.id==e.new_cover_id)))&&void 0!==i?i:0,g=null===(r=e.images)||void 0===r||null===(a=r[u])||void 0===a?void 0:a.url,m=null!==H&&void 0!==H&&H.logoURL?(0,se.V)(H.logoURL):null,b=JSON.parse((null===H||void 0===H?void 0:H.features)||"{}"),y=Boolean(null===e||void 0===e?void 0:e.out_of_stock)||1===Number(null===e||void 0===e?void 0:e.out_of_stock),$=!po.isEmpty(null===e||void 0===e?void 0:e.form_json)&&!po.isEmpty(JSON.parse((null===e||void 0===e?void 0:e.form_json)||"{}")),j=!po.isEmpty(null===s||void 0===s?void 0:s.form_json)&&!po.isEmpty(JSON.parse((null===s||void 0===s?void 0:s.form_json)||"{}")),C=$||j,k=t=>{if(t.preventDefault(),t.stopPropagation(),null===b||void 0===b||!b.cart||y)return;if(C){const t=new URLSearchParams(f);return t.set("productId",e.id),t.set("categoryId","all-items"),w(t),window.history.pushState({},"",`?${t.toString()}`),void(document.body.style.overflow="hidden")}const i=parseFloat((null===e||void 0===e?void 0:e.en_price)||"0")*(1-parseFloat(d)/100);if(V((0,de.bE)(M,e,1,{},i,"")),null!==H&&void 0!==H&&H.id&&null!==e&&void 0!==e&&e.id){var n,r;const{trackAddToCart:t}=o(81926),i="all-items"===l?e.category_id:l,a=(null===H||void 0===H||null===(n=H.branches)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.id)||null;t(H.id,e.id,i,1,a)}h&&t.currentTarget&&h(t.currentTarget),xe.oR.success("en"===q?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629")};return(0,v.jsxs)(U,{children:[(0,v.jsxs)(I,{onClick:()=>{const t=new URLSearchParams(f);t.set("productId",e.id),t.set("categoryId","all-items"),w(t),window.history.pushState({},"",`?${t.toString()}`),document.body.style.overflow="hidden"},onMouseEnter:()=>ne(e.id),onTouchStart:()=>ne(e.id),style:{cursor:"pointer"},children:[(0,v.jsx)(F,{$isLogoFallback:!g,children:g?(0,v.jsx)("img",{src:(0,se.V)(g),alt:"en"===q?e.en_name:e.ar_name,onError:e=>{m&&e.target.src!==m&&(e.target.src=m)}}):m?(0,v.jsx)("img",{src:m,alt:"en"===q?e.en_name:e.ar_name}):null}),(0,v.jsxs)(T,{activeLanguage:q,children:[(0,v.jsx)(N,{children:"en"===q?e.en_name:e.ar_name}),e.en_price&&(0,v.jsxs)(O,{activeLanguage:q,children:[0!==d&&(0,v.jsx)(R,{children:(0,le.T)(parseFloat(e.en_price),p)}),(0,v.jsx)("span",{children:(0,le.T)(c,p)})]})]})]}),(null===b||void 0===b?void 0:b.cart)&&(y?(0,v.jsx)(D,{activeLanguage:q,children:"en"===q?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,v.jsx)(B,{type:"button",onClick:k,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),k(e)},activeLanguage:q,title:"en"===q?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,v.jsx)(ue._xK,{size:12})}))]},e.id)}))}):(0,v.jsx)(k,{children:e.items.map(((e,t)=>(0,v.jsx)(ve,{index:t,plate:e,activePlate:null,setactivePlate:m,showPopup:s,setSearchParams:w,searchParams:f,activeCategoryId:l,categories:x,disableDetails:!1,onAddToCart:h,wishlistIds:X,onWishlistChange:J},e.id)))})]},e.category.id))),ke&&(0,v.jsx)("div",{ref:oe,style:{height:"40px"}}),Ae&&(0,v.jsx)(P,{children:(0,v.jsxs)(S,{children:[(0,v.jsx)(E,{}),"en"===q?"Loading more...":"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f..."]})})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(k,{activePlate:g,children:[null===a||void 0===a?void 0:a.map(((e,t)=>{if(l==e.id)return(0,v.jsx)(v.Fragment,{children:Se.map(((e,t)=>(0,v.jsx)(ve,{index:t,plate:e,activePlate:g,setactivePlate:m,ref:G[t],showPopup:s,setSearchParams:w,searchParams:f,activeCategoryId:l,categories:x,onAddToCart:h,wishlistIds:X,onWishlistChange:J})))})})),(0,v.jsx)("div",{ref:te,style:{height:"20px"}})]}),null!==g&&!f.get("productId")&&g<Se.length&&(0,v.jsx)(lo,{menu:null===a||void 0===a?void 0:a.find((e=>e.id===l)),activePlate:g,setactivePlate:m,plates:Se,productPositions:Z,activeCategoryId:l,categories:x,setSearchParams:w,searchParams:f})]})})}var xo=o(24192),ho=o(50795),go=o(31088),mo=o(85327),fo=o(5677),vo=o(38495),bo=o(79111),yo=o(58169);const wo=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
`,$o=n.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
`,jo=n.Ay.div`
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
`,Co=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,ko=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,Ao=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,Lo=n.Ay.div`
  margin-top: 20px;
  font-size: 12px;
  color: ${e=>e.theme.mainColor};
  position: relative;
  width: 60px;
  display: flex;
  align-items: center;
`,zo=n.Ay.span`
position: absolute;
left: 0;

`,So=n.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,Po=(0,n.Ay)(r.Z0P)`
    animation:1.2s ${So}  linear infinite ;
    position: absolute;
`;function Eo(e){let{carouselIndex:t,images:o,CloseAnimation:i,carouselSwiped:n}=e;return(0,v.jsxs)(wo,{CloseAnimation:i,children:[(0,v.jsxs)($o,{children:[(0,v.jsx)(jo,{carouselIndex:t,children:(0,v.jsx)(Co,{})}),o.map((e=>(0,v.jsx)(ko,{children:(0,v.jsx)(Ao,{})})))]}),!n&&(0,v.jsxs)(Lo,{children:[(0,v.jsx)(zo,{children:"Swipe"}),(0,v.jsx)(Po,{})]})]})}n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const _o=n.Ay.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,Io=(n.Ay.label`
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
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(we().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`),Fo=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,To=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,No=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let t=e.theme.formColor;if(we().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.3)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.3)`)):t}};
  font-size:10px;

`,Oo=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,Ro=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Bo(e){let{component:t,formData:o,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||[]);return(0,v.jsxs)(Io,{index:r,children:[(0,v.jsx)(_o,{children:t.label}),t.values.map((e=>(0,v.jsxs)(To,{children:[s.some((t=>t===e.label))?(0,v.jsx)(Oo,{onClick:()=>{(e=>{let o=s.filter((t=>t!==e.label));d(o),n(t.key,o)})(e)},children:(0,v.jsx)(Ot.RXm,{size:"15px"})}):(0,v.jsx)(No,{onClick:()=>{(e=>{d([...s,e.label]),n(t.key,[...s,e.label])})(e)},children:(0,v.jsx)(ue.OiG,{})}),(0,v.jsx)(Fo,{children:e.label})]}))),(c=a,c in l?(0,v.jsx)(Ro,{children:"This field is required"}):null)]});var c}const Do=n.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};

  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(we().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,Uo=n.Ay.div`
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
`,Wo=n.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,Yo=n.Ay.ul`
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

`,Mo=n.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,qo=n.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,Ho=n.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,Vo=n.Ay.div`
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
`,Xo=(n.Ay.label`
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

`);function Ko(e){var t;let{component:o,formData:n,handleChange:r,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;const[c,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===(t=n[o.key])||void 0===t?void 0:t.value)||""),h=(0,i.useRef)(null),g=e=>{x(e.label),p(!1),r(o.key,e)},m=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,v.jsxs)(Do,{ref:h,index:l,children:[(0,v.jsx)(_o,{children:o.label}),o.data.values.length>8?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(Uo,{onClick:()=>p((e=>!e)),children:[u||a,(0,v.jsx)(Wo,{className:c?"up":"",children:"\u25bc"})]}),(0,v.jsx)(Yo,{isOpen:c,children:o.data.values.map(((e,t)=>(0,v.jsx)(Mo,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},t)))})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(qo,{children:o.data.values.map(((e,t)=>(0,v.jsx)(Ho,{children:(0,v.jsx)(Vo,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,v.jsx)(Xo,{children:"This field is required"}):null)]});var f}const Jo=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(we().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,Zo=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,Qo=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Go=n.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,ei=n.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,ti=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function oi(e){let{component:t,formData:o,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||"");return(0,v.jsxs)(Jo,{index:r,children:[(0,v.jsx)(_o,{children:t.label}),t.values.map((e=>(0,v.jsxs)(Qo,{children:[(0,v.jsx)(Go,{onClick:()=>{(e=>{d(e),n(t.key,e)})(e)},children:(0,v.jsx)(ei,{selected:s.label==e.label})}),(0,v.jsx)(Zo,{children:e.label})]}))),(c=a,c in l?(0,v.jsx)(ti,{children:"This field is required"}):null)]});var c}function ii(e){let{formSchema:t,onPriceChange:o,basePrice:n,formData:r,setFormData:a,formErrors:l}=e;(0,i.useEffect)((()=>{d(r)}),[r]);const s=(e,t)=>{a((o=>({...o,[e]:t})))},d=e=>{let i=parseFloat(n)||0,r=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const o=t.values.find((t=>t.label===e)),i=!isNaN(Number(o.value));o&&o.value&&i&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")&&(r-=parseFloat(o.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const o=t.data.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(o.value));o&&n&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?r-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}else if("radio"===t.type&&t.values){const o=t.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(o.value));o&&n&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?r-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}}));const a=i+r,l=a%1!==0?a.toFixed(2):a.toFixed(0);o(l)};return(0,v.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return(0,v.jsx)(Bo,{component:e,formData:r,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"select":return(0,v.jsx)(Ko,{component:e,formData:r,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"radio":return(0,v.jsx)(oi,{component:e,formData:r,handleChange:s,index:t,componentKey:e.key,formErrors:l});default:return null}})(e,t)))})}function ni(e){var t,o,n,l;let{productId:s,setSearchParams:d,searchParams:c}=e;const{restaurantName:p}=(0,b.g)(),u=window.location.hostname.split(".")[0],x="menugic"!==u&&"localhost"!==u&&"www"!==u?u:p,h=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]}));let g=null;const{response:m,isLoading:w}=(0,ae.VL)({productId:s,onSuccess:()=>{}}),{response:$}=(0,ro.$)({productId:s});var j;((0,i.useEffect)((()=>{var e,t;null!==m&&void 0!==m&&m.en_price&&!w&&(X(parseFloat(m.en_price)),J(parseFloat(null===m||void 0===m?void 0:m.en_price)),0===parseFloat(null===m||void 0===m||null===(e=m.category)||void 0===e?void 0:e.discount)?ee(parseFloat(null===m||void 0===m?void 0:m.discount)||0):ee(parseFloat(null===m||void 0===m||null===(t=m.category)||void 0===t?void 0:t.discount)||0))}),[w]),we().isEmpty(null===m||void 0===m?void 0:m.form_json))||(g=we().isEmpty(JSON.parse(null===m||void 0===m?void 0:m.form_json))?null===m||void 0===m||null===(j=m.category)||void 0===j?void 0:j.form_json:null===m||void 0===m?void 0:m.form_json);const[C,k]=(0,i.useState)({});(0,i.useEffect)((()=>{if(!we().isEmpty(g)){var e;const t=JSON.parse(g);if(k(t),2===(null===t||void 0===t?void 0:t.version)&&(null===t||void 0===t||null===(e=t.sizes)||void 0===e?void 0:e.length)>0){const e=parseFloat(null===m||void 0===m?void 0:m.en_price)||0,o=t.sizes.find((t=>"absolute"===t.priceMode&&Number(t.priceModifier)===e));L((()=>({...(0,no.KE)(),sizeId:o?o.id:t.sizes[0].id})))}}}),[g]);const[A,L]=(0,i.useState)({}),[z,S]=(0,i.useState)({}),[P,E]=(0,i.useState)(!1),[_,I]=(0,i.useState)(1),[F,T]=(0,i.useState)({x:0,y:0}),[N,O]=(0,i.useState)(!1),R=(0,i.useRef)(null),B=(0,i.useRef)(null),D=e=>{e.stopPropagation(),I(1),T({x:0,y:0}),E(!0)},U=()=>{E(!1)},W=(0,y.wA)(),[Y,M]=(0,i.useState)(1),[q,H]=(0,i.useState)(!1),[V,X]=(0,i.useState)(parseFloat(null===m||void 0===m?void 0:m.en_price)||0),[K,J]=(0,i.useState)(parseFloat(null===m||void 0===m?void 0:m.en_price)||0),[Z,Q]=(0,i.useState)(""),[G,ee]=(0,i.useState)(0),te=e=>{J(parseFloat(e)||0)},[oe,ie]=(0,i.useState)(!0),[ne,re]=(0,i.useState)(0),ce=(0,i.useRef)(!1);(0,i.useEffect)((()=>(document.body.style.overflow=oe?"hidden":"auto",()=>{document.body.style.overflow="auto"})),[oe]);const pe=e=>{if(e&&(e.preventDefault(),e.stopPropagation()),ce.current)return;ce.current=!0,document.body.style.overflow="auto";const t=new URLSearchParams(c);t.delete("productId"),window.history.replaceState({},"",`${window.location.pathname}${t.toString()?`?${t.toString()}`:""}`),d(t),ie(!1),re(0)},[ue,xe]=(0,i.useState)(!1),he=()=>{H(!0),re(ne+1)},me=()=>{H(!0),re(ne-1)},fe=(0,i.useRef)(null),ve=(0,i.useRef)(null),[be,ye]=(0,i.useState)(null);(0,i.useEffect)((()=>{const e=()=>{pe()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const $e=2===(null===C||void 0===C?void 0:C.version)&&Array.isArray(null===C||void 0===C?void 0:C.sizes);const je=null!==h&&void 0!==h&&h.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${h.logoURL}`:null;let Ce=[...null!==(t=null===m||void 0===m?void 0:m.images)&&void 0!==t?t:[]];0===Ce.length&&je&&(Ce=[{id:"fallback-logo",url:h.logoURL,isFallback:!0}]);const ke=Ce.findIndex((e=>e.id===(null===m||void 0===m?void 0:m.new_cover_id)));if(ke>0){const[e]=Ce.splice(ke,1);Ce.unshift(e)}const[Ae,Le]=(0,i.useState)({}),ze=e=>{Le((t=>({...t,[e]:!0})))},Se="en"===(null===h||void 0===h?void 0:h.activeLanguage)?null===m||void 0===m?void 0:m.en_description:null===m||void 0===m?void 0:m.ar_description,Pe=(0,ge.Q)(null===h||void 0===h?void 0:h.currency),Ee=(null===h||void 0===h?void 0:h.product_details_carousel_style)||"normal";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(yo.zs,{CloseAnimation:oe,onClick:pe}),(0,v.jsxs)(yo.Zh,{CloseAnimation:oe,children:[(0,v.jsxs)(yo.Tn,{CloseAnimation:oe,children:[(0,v.jsx)(yo.k8,{onClick:pe,CloseAnimation:oe,children:(0,v.jsx)(yo.Z3,{})}),(0,v.jsx)(yo.N0,{activeLanguage:null===h||void 0===h?void 0:h.activeLanguage,children:w?"\u2014":"en"===(null===h||void 0===h?void 0:h.activeLanguage)?null===m||void 0===m||null===(o=m.category)||void 0===o?void 0:o.en_category:null===m||void 0===m||null===(n=m.category)||void 0===n?void 0:n.ar_category}),(0,v.jsx)(yo.i8,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),xe(!0),setTimeout((()=>{xe(!1)}),4e3)},CloseAnimation:oe,style:{visibility:w?"hidden":"visible"},children:ue?(0,v.jsx)(Ot.RXm,{}):(0,v.jsx)(r.zU_,{})})]}),w?(0,v.jsxs)(yo.uL,{children:[(0,v.jsx)(yo.fk,{width:"100%",height:"40vh",radius:"16px",style:{maxWidth:"400px",marginBottom:"20px"}}),(0,v.jsx)(yo.fk,{width:"85%",height:"28px",style:{marginBottom:"12px"}}),(0,v.jsx)(yo.fk,{width:"45%",height:"22px",style:{marginBottom:"8px"}}),(0,v.jsx)(yo.fk,{width:"70%",height:"14px",style:{marginBottom:"6px"}}),(0,v.jsx)(yo.fk,{width:"60%",height:"14px"})]}):(0,v.jsxs)(i.Fragment,{children:[(0,v.jsx)(yo.I,{squareDimension:null===m||void 0===m?void 0:m.square_dimension,CloseAnimation:oe,children:1===Ce.length?(0,v.jsx)(yo.FN,{ref:fe,carouselIndex:0,children:(0,v.jsx)(yo.A7,{children:(0,v.jsxs)(yo.xW,{children:[!Ae[0]&&(0,v.jsx)(yo.rL,{children:(0,v.jsx)(yo.aH,{})}),(0,v.jsx)(yo._V,{src:null!==(l=Ce[0])&&void 0!==l&&l.url?(0,se.V)(Ce[0].url):je||"",onLoad:()=>ze(0),onError:e=>{je&&e.target.src!==je&&(e.target.src=je)},CloseAnimation:oe,Loaded:Ae[0],alt:"Image 0"}),(0,v.jsx)(yo.IP,{onClick:D,children:(0,v.jsx)(f.gff,{})})]})})}):"normal"===Ee?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(yo.mK,{CloseAnimation:oe,onClick:()=>{H(!0),0!==ne&&me()}}),(0,v.jsx)(yo.eo,{CloseAnimation:oe,onClick:()=>{H(!0),Ce.length>ne+1&&he()}}),(0,v.jsx)(yo.FN,{carouselIndex:ne,ref:fe,onTouchStart:e=>{ye(e.touches[0].clientX)},onTouchMove:e=>{if(be){const i=e.touches[0].clientX-be;if(i>5)0!==ne&&me();else if(i<-5){var t,o;(null!==(t=null===m||void 0===m||null===(o=m.images)||void 0===o?void 0:o.length)&&void 0!==t?t:0)>ne+1&&he()}ye(null)}},children:Ce.map(((e,t)=>(0,v.jsx)(yo.A7,{children:(0,v.jsxs)(yo.xW,{children:[!Ae[t]&&(0,v.jsx)(yo.rL,{children:(0,v.jsx)(yo.aH,{})}),(0,v.jsx)(yo._V,{src:Ae[t]||t===ne?null!==e&&void 0!==e&&e.url?(0,se.V)(e.url):je||"":"",onLoad:()=>ze(t),onError:e=>{je&&e.target.src!==je&&(e.target.src=je)},CloseAnimation:oe,Loaded:Ae[t],alt:`Image ${t}`}),t===ne&&(0,v.jsx)(yo.IP,{onClick:D,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))})]}):"effect-cards"===Ee?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(yo.mK,{CloseAnimation:oe,onClick:()=>{var e;H(!0),null===(e=ve.current)||void 0===e||e.slidePrev()}}),(0,v.jsx)(yo.AL,{$closeAnimation:oe,children:(0,v.jsx)(ft.RC,{onSwiper:e=>{ve.current=e},onSlideChange:e=>{re(e.realIndex),H(!0)},modules:[vt.ZD],effect:"cards",grabCursor:!0,className:"product-details-swiper",initialSlide:0,children:Ce.map(((e,t)=>(0,v.jsx)(ft.qr,{children:(0,v.jsxs)(yo.xW,{children:[!Ae[t]&&(0,v.jsx)(yo.rL,{children:(0,v.jsx)(yo.aH,{})}),(0,v.jsx)(yo._V,{$cardSlide:!0,src:Ae[t]||t===ne?null!==e&&void 0!==e&&e.url?(0,se.V)(e.url):je||"":"",onLoad:()=>ze(t),onError:e=>{je&&e.target.src!==je&&(e.target.src=je)},CloseAnimation:oe,Loaded:Ae[t],alt:`Image ${t}`}),t===ne&&(0,v.jsx)(yo.IP,{onClick:D,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))},null===m||void 0===m?void 0:m.id)}),(0,v.jsx)(yo.eo,{CloseAnimation:oe,onClick:()=>{var e;H(!0),null===(e=ve.current)||void 0===e||e.slideNext()}})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(yo.AL,{$closeAnimation:oe,$paginationFraction:!0,children:(0,v.jsx)(ft.RC,{onSwiper:e=>{ve.current=e},onSlideChange:e=>{re(e.realIndex),H(!0)},modules:[vt.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:Ce.map(((e,t)=>(0,v.jsx)(ft.qr,{children:(0,v.jsxs)(yo.xW,{children:[!Ae[t]&&(0,v.jsx)(yo.rL,{children:(0,v.jsx)(yo.aH,{})}),(0,v.jsx)(yo._V,{$cardSlide:!0,src:Ae[t]||t===ne?null!==e&&void 0!==e&&e.url?(0,se.V)(e.url):je||"":"",onLoad:()=>ze(t),onError:e=>{je&&e.target.src!==je&&(e.target.src=je)},CloseAnimation:oe,Loaded:Ae[t],alt:`Image ${t}`}),t===ne&&(0,v.jsx)(yo.IP,{onClick:D,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))},null===m||void 0===m?void 0:m.id)})})}),1!==Ce.length&&(0,v.jsx)(Eo,{images:Ce,carouselIndex:ne,CloseAnimation:oe,carouselSwiped:q}),(0,v.jsx)(yo.$D,{children:(0,v.jsx)(yo.qm,{children:(0,v.jsxs)(yo.iF,{CloseAnimation:oe,activeLanguage:h.activeLanguage,children:[(0,v.jsxs)(yo.GH,{activeLanguage:h.activeLanguage,children:[(0,v.jsx)(yo.Pz,{activeLanguage:h.activeLanguage,children:"en"==h.activeLanguage?null===m||void 0===m?void 0:m.en_name:null===m||void 0===m?void 0:m.ar_name}),!we().isEmpty(null===m||void 0===m?void 0:m.en_price)&&(0,v.jsxs)(yo.tK,{children:[(0,v.jsx)(yo.$y,{activeLanguage:h.activeLanguage,discounted:0!=G,children:(0,le.T)(K,Pe)}),0!=G&&(0,v.jsx)(yo.FL,{activeLanguage:h.activeLanguage,children:(0,le.T)(K*(1-parseFloat(G)/100),Pe)})]})]}),(0,v.jsx)(yo.gR,{activeLanguage:h.activeLanguage,dangerouslySetInnerHTML:{__html:Se}}),$e&&(0,v.jsx)(io.A,{options:C,formData:A,setFormData:L,formErrors:z,activeLanguage:h.activeLanguage,basePrice:null===m||void 0===m?void 0:m.en_price,onPriceChange:te}),!$e&&(null===C||void 0===C?void 0:C.components)&&(0,v.jsx)(ii,{formSchema:C,onPriceChange:te,formData:A,setFormData:L,basePrice:null===m||void 0===m?void 0:m.en_price,formErrors:z}),(0,v.jsxs)(yo.Uy,{activeLanguage:h.activeLanguage,children:[(0,v.jsx)(yo.LO,{children:"en"==h.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,v.jsx)(yo.bQ,{activeLanguage:h.activeLanguage,onChange:e=>Q(e.target.value),placeholder:"en"==h.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(0,v.jsxs)(yo.eM,{CloseAnimation:oe,children:[(0,v.jsxs)(yo.nk,{CloseAnimation:oe,children:[(0,v.jsx)(yo.FW,{onClick:()=>{M(Y+1)},children:"+"}),(0,v.jsx)(yo.Q1,{children:Y}),(0,v.jsx)(yo.Hs,{onClick:()=>{Y>1&&M(Y-1)},children:"-"})]}),(0,v.jsxs)(yo.pj,{onClick:()=>{if($e){var e;const t={};if((null===(e=C.sizes)||void 0===e?void 0:e.length)>0&&(null===A||void 0===A||!A.sizeId)&&(t.size="Please select a size."),Object.keys(t).length>0)return void S(t)}else if("{}"!==JSON.stringify(C)){const e=function(e,t){const o={},i=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in t&&0!==(null===(i=t[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(t[e])||(o[e]="This field is required.")})),o}(C,A);if(Object.keys(e).length>0)return void S(e)}let t=K*(1-parseFloat(G)/100);setTimeout((()=>{c.delete("productId"),d(c),document.body.style.overflow="auto"}),800),W((0,de.bE)(x,m,Y,A,t,Z)),ie(!1),M(1)},children:["en"==h.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",(0,v.jsx)(yo.zr,{children:(0,le.T)(Y*(K*(1-parseFloat(G)/100)),Pe)})]})]})]})]}),P&&(0,v.jsxs)(yo.kA,{onClick:U,onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY;B.current=Math.hypot(t,o)}else 1===e.touches.length&&(O(!0),R.current={x:e.touches[0].clientX,y:e.touches[0].clientY})},onTouchMove:e=>{if(2===e.touches.length&&B.current){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(t,o),n=i/B.current;I((e=>Math.min(Math.max(e*n,1),5))),B.current=i}else if(1===e.touches.length&&N&&_>1){const t=e.touches[0],o=t.clientX-R.current.x,i=t.clientY-R.current.y;T((e=>({x:e.x+o/_,y:e.y+i/_}))),R.current={x:t.clientX,y:t.clientY}}},onTouchEnd:()=>{O(!1),B.current=null,R.current=null},children:[(0,v.jsx)(yo.uF,{onClick:U,children:(0,v.jsx)(a.$8F,{})}),(0,v.jsx)(yo.T0,{src:(()=>{const e=Ce[ne];return e&&null!==e&&void 0!==e&&e.url?(0,se.V)(e.url):je||""})(),alt:"Zoomed",$scale:_,$translateX:F.x,$translateY:F.y,$dragging:N,onClick:e=>e.stopPropagation(),onDoubleClick:()=>{_>1?(I(1),T({x:0,y:0})):I(2.5)}})]})]})}var ri=o(88564);const ai=n.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,li=n.Ay.div`
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
  animation: ${ai} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,si=n.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,di=n.Ay.div`
  display: flex;
  gap: 10px;
`,ci=n.Ay.button`
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
`,pi=n.Ay.button`
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

`,ui=e=>{let{onInstall:t,onDismiss:o,restaurantName:i,showInstallPopup:n}=e;return(0,v.jsxs)(li,{showInstallPopup:n,children:[(0,v.jsxs)(si,{children:["Access ",(0,v.jsx)("b",{children:i})," anytime with one tap ",(0,v.jsx)("b",{children:"Install The App!"})]}),(0,v.jsxs)(di,{children:[(0,v.jsx)(ci,{onClick:t,children:"Install"}),(0,v.jsx)(pi,{onClick:o,children:"Dismiss"})]})]})},xi=n.Ay.div`
  width: 100%;
  padding: 12px 4%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${e=>e.theme.backgroundColor};
  
  @media (min-width: 768px) {
    padding: 16px 5%;
  }
`,hi=n.Ay.div`
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
`,gi=n.Ay.div`
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
`,mi=n.Ay.div`
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
  
  ${gi}:hover & {
    background: ${e=>e.theme.categoryActiveIcon||e.theme.mainColor||"#007bff"};
    transform: scale(1.1);
    box-shadow: 0 4px 16px ${e=>e.theme.mainColor||"#007bff"}40;
  }
  
  @media (min-width: 768px) {
    width: ${e=>e.showOnePerLine?"70px":"75px"};
    height: ${e=>e.showOnePerLine?"70px":"75px"};
    margin-bottom: ${e=>e.showOnePerLine?"0":"12px"};
  }
`,fi=n.Ay.img`
  width: 42px;
  height: 42px;
  object-fit: contain;
  transition: transform 0.35s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  color: ${e=>e.theme.categoryActiveIcon||"#333333"};
  ${gi}:hover & {
    transform: scale(1.1);
  }
  
  @media (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`,vi=n.Ay.div`
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
  
  ${gi}:hover & {
    color: ${e=>e.theme.mainColor||"#007bff"};
  }
  
  @media (min-width: 768px) {
    font-size: ${e=>e.showOnePerLine?"16px":"14px"};
    line-height: 1.4;
  }
`,bi=e=>{let{category:t,logoURL:o,activeLanguage:n,showOnePerLine:r,onCategoryClick:a}=e;const[l,s]=(0,i.useState)(!1),d=t.image_url?(0,se.V)(t.image_url):null;return(0,v.jsxs)(gi,{onClick:()=>a(t.id),showOnePerLine:r,activeLanguage:n,children:[(0,v.jsx)(mi,{showOnePerLine:r,activeLanguage:n,children:(0,v.jsx)(fi,{src:l||!d?o:d,alt:"en"===n?t.en_category:t.ar_category,onError:()=>s(!0)})}),(0,v.jsx)(vi,{activeLanguage:n,showOnePerLine:r,children:"en"===n?t.en_category:t.ar_category})]})};function yi(e){let{categories:t,onCategoryClick:o}=e;const{restaurantName:i}=(0,b.g)(),n=window.location.hostname.split(".")[0],r="menugic"!==n&&"localhost"!==n&&"www"!==n?n:i,a=(0,y.d4)((e=>{var t,o;return null===(t=e.restaurant)||void 0===t||null===(o=t[r])||void 0===o?void 0:o.activeLanguage})),l=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[r]})),s=((null===t||void 0===t?void 0:t.length)||0)<9,d=null!==l&&void 0!==l&&l.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${l.logoURL}`:null;return(0,v.jsx)(xi,{children:(0,v.jsx)(hi,{showOnePerLine:s,children:null===t||void 0===t?void 0:t.sort(((e,t)=>t.priority-e.priority)).map((e=>(0,v.jsx)(bi,{category:e,logoURL:d,activeLanguage:a,showOnePerLine:s,onCategoryClick:o},e.id)))})})}const wi=n.Ay.div`
  width: 100%;
  background-color: ${e=>e.theme.backgroundColor||e.theme.backgroundcolor||"#F6F5F5"};
  position: relative;
  z-index: 100;
  margin-bottom: 0;
`,$i=(n.Ay.div`
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
`),ji=(n.Ay.div`
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
`),Ci=n.Ay.div`
  width: 100%;
  padding: 0 5% 14px 5%;
  
  @media (min-width: 768px) {
    padding: 0 5% 16px 5%;
  }
`,ki=n.Ay.div`
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
`,Ai=n.Ay.div`
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
`,Li=n.Ay.div`
  position: absolute;
  left: ${e=>"en"===e.activeLanguage?"16px":"auto"};
  right: ${e=>"en"===e.activeLanguage?"auto":"16px"};
  font-size: 20px;
  color: ${e=>e.theme.searchTextColor||"#999999"};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,zi=n.Ay.input`
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
`,Si=n.Ay.button`
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
`,Pi=n.Ay.div`
  font-size: 20px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 22px;
  }
`,Ei=n.Ay.h2`
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
`,_i=n.Ay.button`
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
`,Ii=n.Ay.div`
  color: inherit;
  font-size: 18px;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${_i}:hover & {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;function Fi(e){let{categoryId:t,categories:o,onBack:i,searchText:n,setSearchText:r,setshowSidebar:l,showSidebar:s,popupHandler:d}=e;const{restaurantName:p}=(0,b.g)(),u=((0,y.wA)(),window.location.hostname.split(".")[0]),x="menugic"!==u&&"localhost"!==u&&"www"!==u?u:p,h=((0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]})),(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[x])||void 0===o?void 0:o.activeLanguage)||"en"}))),g=null===o||void 0===o?void 0:o.find((e=>e.id==t||e.id===t)),m=g?"en"===h?g.en_category:g.ar_category:"Category";return(0,v.jsxs)(wi,{children:[(0,v.jsxs)(ji,{children:[(0,v.jsx)(Si,{onClick:i,"aria-label":"Back to categories",children:(0,v.jsx)(Pi,{as:a.NEn})}),(0,v.jsx)(Ei,{activeLanguage:h,children:m}),(0,v.jsx)($i,{})]}),(0,v.jsx)(Ci,{children:(0,v.jsxs)(ki,{children:[(0,v.jsxs)(Ai,{children:[(0,v.jsx)(Li,{activeLanguage:h,children:(0,v.jsx)(c.Xj1,{})}),(0,v.jsx)(zi,{type:"text",activeLanguage:h,dir:"en"===h?"ltr":"rtl",placeholder:"en"===h?"Search Products":"\u0627\u0644\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",onChange:e=>{r(e.target.value)},value:n||""})]}),(0,v.jsxs)(_i,{onClick:()=>{window.history.pushState({},""),d("share")},activeLanguage:h,children:["en"===h&&(0,v.jsx)(Ii,{children:(0,v.jsx)(a.LZ_,{})}),"en"===h?"Share":"\u0646\u0634\u0631","en"!==h&&(0,v.jsx)(Ii,{children:(0,v.jsx)(a.LZ_,{})})]})]})})]})}const Ti=n.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Ni=n.Ay.div`
  width: 100%;
  min-height: 100vh;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  animation: ${Ti} 0.5s ease-in;
  position: relative;
  display: flex;
  flex-direction: column;
`,Oi=(n.Ay.section`
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
`),Ri=n.Ay.div`
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
`,Bi=n.Ay.div`
  display: flex;
  gap: 0px;
  padding: 0;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  align-items: flex-start;
  width: max-content;
  
  @media (min-width: 768px) {
    gap: 15px;
  }
`,Di=(n.Ay.button`
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
`),Ui=n.Ay.section`
  width: 100%;
  padding: 20px 0px;
  max-width: 1200px;
  margin: 0 auto;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    padding: 60px 5%;
  }
`,Wi=n.Ay.div`
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
`,Yi=(n.Ay.div`
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
`),Mi=(n.Ay.p`
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
  
  ${Wi}:hover & {
    transform: scale(1.05) rotate(${e=>e.isEven?"-5deg":"5deg"});
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: ${e=>e.theme.mainColor||"#007bff"}40;
  }
  
  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    border-radius: 22px;
  }
`),qi=(n.Ay.button`
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
  
  @media (min-width: 768px) {
    padding: 40px 5%;
  }
`),Hi=n.Ay.div`
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
`,Vi=n.Ay.div`
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
`,Xi=n.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
`,Ki=n.Ay.div`
  position: relative;
  background: #ffffff;
  border-radius: 20px;
  padding: 32px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  animation: ${Ti} 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 40px;
    max-width: 450px;
  }
`,Ji=n.Ay.button`
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
`,Zi=n.Ay.h3`
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
`,Qi=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,Gi=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: center;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,en=n.Ay.p`
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
`,tn=n.Ay.a`
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
`,on=n.Ay.a`
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
`,nn=n.Ay.h3`
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
`,rn=n.Ay.div`
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
`,an=n.Ay.button`
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
`,ln=(n.Ay.div`
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
`),sn=n.Ay.p`
  font-size: 14px;
  font-weight: 400;
  color: ${e=>e.theme.textColor||"#666"};
  margin: 0;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    font-size: 15px;
  }
`,dn=n.Ay.section`
  width: 100%;
  padding: 12px;
  max-width: 1200px;
  margin: 10px auto;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  
  @media (min-width: 768px) {
    padding: 32px 5%;
  }
`,cn=n.Ay.div`
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
`,pn=n.Ay.a`
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
`,un=n.Ay.div`
  font-size: 24px;
  color: ${e=>{var t,o,i,n;return null!==(t=e.platform)&&void 0!==t&&t.toLowerCase().includes("facebook")?"#1877F2":null!==(o=e.platform)&&void 0!==o&&o.toLowerCase().includes("instagram")?"#E4405F":null!==(i=e.platform)&&void 0!==i&&i.toLowerCase().includes("twitter")?"#1DA1F2":null!==(n=e.platform)&&void 0!==n&&n.toLowerCase().includes("whatsapp")?"#25D366":e.theme.mainColor||"#007bff"}};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    font-size: 28px;
  }
`,xn=n.Ay.section`
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
`,hn=n.Ay.h1`
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
`,gn=n.Ay.img`
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
`,mn=n.Ay.section`
  width: 100%;
  padding: 0px 20px 40px 20px;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    padding: 60px 5%;
  }
`,fn=n.Ay.div`
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
`,vn=n.Ay.button`
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
`,bn=n.Ay.p`
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
`,yn=n.Ay.button`
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
`;var wn=o(76279),$n=o(40499),jn=o(88631);const Cn=e=>{let{category:t,activeLanguage:o,onExploreClick:n,logoURL:r}=e;const[a,l]=(0,i.useState)(!1),s="en"===o?t.en_category:t.ar_category,d=t.image_url?(0,se.V)(t.image_url):null;return(0,v.jsxs)(Wi,{onClick:()=>n(t.id),activeLanguage:o,children:[(0,v.jsx)(Mi,{src:a||!d?r:d,alt:s,activeLanguage:o,onError:()=>l(!0)}),(0,v.jsx)(Yi,{activeLanguage:o,children:s})]})};function kn(e){var t;let{onExploreClick:o,categories:n,setSearchParams:r,searchParams:l}=e;const{restaurantName:s}=(0,b.g)(),d=window.location.hostname.split(".")[0],c="menugic"!==d&&"localhost"!==d&&"www"!==d?d:s,p=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[c]})),u=(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[c])||void 0===o?void 0:o.activeLanguage)||"en"})),[x,h]=(0,i.useState)((()=>new Set)),g=(0,i.useCallback)((async()=>{const e=(0,pe.wU)(c);if(e)try{const{data:t}=await j.A.get(ce.Vb,{headers:{Authorization:`Bearer ${e}`}}),o=(Array.isArray(t)?t:[]).map((e=>e.id));h(new Set(o))}catch{h(new Set)}else h(new Set)}),[c]);(0,i.useEffect)((()=>{g()}),[g]),(0,i.useEffect)((()=>{const e=e=>{var t;null!==e&&void 0!==e&&null!==(t=e.detail)&&void 0!==t&&t.restaurantName&&e.detail.restaurantName!==c||g()};return window.addEventListener("menugic-customer-auth",e),()=>window.removeEventListener("menugic-customer-auth",e)}),[c,g]);const m=(null===p||void 0===p?void 0:p.branches)||[],f=(null===p||void 0===p?void 0:p.socialMedia)||[],w=(null===p||void 0===p?void 0:p.sliderImages)||[],$=(null===p||void 0===p?void 0:p.has_slider)||!1,C=null!==(t=null===p||void 0===p?void 0:p.id)&&void 0!==t?t:null===p||void 0===p?void 0:p.restaurant_id,{data:k=[],isLoading:A}=(0,$n.O)(C),{data:L}=(0,jn.y)(C),z=Array.isArray(L)?L:[],S=new Set((k||[]).map((e=>e.id))),P=[...k||[],...z.filter((e=>!S.has(e.id)))],[E,_]=(0,i.useState)(!1),[I,F]=(0,i.useState)(!1),T=(0,i.useRef)(null);(0,i.useEffect)((()=>{console.log("Theme3 HomePage - Slider Debug:",{hasSlider:$,sliderImagesCount:w.length,sliderImages:w,restaurant:p?{has_slider:p.has_slider,sliderImages:p.sliderImages}:null})}),[$,w,p]),(0,i.useEffect)((()=>{F(!1)}),[n]),(0,i.useEffect)((()=>{const e=()=>{if(T.current){const e=T.current,t=e.scrollWidth>e.clientWidth;_(t&&!I)}},t=()=>{T.current&&!I&&(F(!0),_(!1))};e();const o=T.current;return o&&(o.addEventListener("scroll",t),window.addEventListener("resize",e)),()=>{o&&o.removeEventListener("scroll",t),window.removeEventListener("resize",e)}}),[n,I]);const[N,O]=(0,i.useState)(null),[R,B]=(0,i.useState)(null),D=(null===p||void 0===p||p.name,e=>{const t=(null===e||void 0===e?void 0:e.toLowerCase())||"";return t.includes("facebook")?(0,v.jsx)(ue.iYk,{}):t.includes("instagram")?(0,v.jsx)(ue.ao$,{}):t.includes("tiktok")?(0,v.jsx)(ue.kkU,{}):t.includes("whatsapp")?(0,v.jsx)(ue.EcP,{}):(0,v.jsx)(ue.f35,{})}),U=e=>e?e.replace(/\s/g,""):"",W="en"===u?"Top Categories":"\u0627\u0644\u0641\u0626\u0627\u062a \u0627\u0644\u0645\u0645\u064a\u0632\u0629",Y="en"===u?"Our Locations":"\u0641\u0631\u0648\u0639\u0646\u0627",M="en"===u?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627",q="en"===u?"View on Map":"\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",H=(null===p||void 0===p?void 0:p.business_type)||"restaurant",V="en"===u?"restaurant"===H?"Explore Menu":"Explore Products":"restaurant"===H?"\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",X="en"===u?`\xa9 ${(new Date).getFullYear()} Menugic. All rights reserved.`:`\xa9 ${(new Date).getFullYear()} Menugic. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.`,K=(e,t)=>{O(e),B(t)},J=()=>{O(null),B(null)};return(0,v.jsxs)(Ni,{children:[$&&w.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(wn.A,{images:w,activeLanguage:u}),null!==p&&void 0!==p&&p.en_slogan||null!==p&&void 0!==p&&p.ar_slogan?(0,v.jsx)(bn,{activeLanguage:u,children:"en"===u?p.en_slogan||p.ar_slogan:p.ar_slogan||p.en_slogan}):null]}),(!$||0===w.length)&&(0,v.jsxs)(xn,{activeLanguage:u,children:[(0,v.jsx)(hn,{activeLanguage:u,children:"en"===u?"Welcome to":"\u0645\u0631\u062d\u0628\u0627\u064b \u0628\u0643\u0645 \u0641\u064a"}),(null===p||void 0===p?void 0:p.logoURL)&&(0,v.jsx)(gn,{src:`https://storage.googleapis.com/ecommerce-bucket-testing/${p.logoURL}`,alt:(null===p||void 0===p?void 0:p.name)||c,activeLanguage:u})]}),n&&n.length>0&&(0,v.jsxs)(Ui,{activeLanguage:u,children:[(0,v.jsx)(Di,{activeLanguage:u,children:W}),(0,v.jsxs)(Oi,{ref:T,activeLanguage:u,showScrollIndicator:E,theme:null!==p&&void 0!==p&&p.theme?"string"===typeof p.theme?JSON.parse(p.theme):p.theme:{},children:[(0,v.jsx)(Bi,{activeLanguage:u,children:n.sort(((e,t)=>(t.priority||0)-(e.priority||0))).map((e=>(0,v.jsx)(Cn,{category:e,activeLanguage:u,onExploreClick:o,logoURL:null!==p&&void 0!==p&&p.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${p.logoURL}`:null},e.id)))}),E&&(0,v.jsx)(Ri,{activeLanguage:u,theme:null!==p&&void 0!==p&&p.theme?"string"===typeof p.theme?JSON.parse(p.theme):p.theme:{},children:"en"===u?"Scroll \u2192":"\u0627\u0633\u062d\u0628 \u2190"})]}),(0,v.jsxs)(vn,{onClick:()=>o(),activeLanguage:u,theme:null!==p&&void 0!==p&&p.theme?"string"===typeof p.theme?JSON.parse(p.theme):p.theme:{},children:[V,"ar"===u?(0,v.jsx)(ue._Jj,{}):(0,v.jsx)(ue.X6T,{})]})]}),P.length>0&&(0,v.jsxs)(mn,{activeLanguage:u,children:[(0,v.jsx)(Di,{activeLanguage:u,children:"en"===u?"Featured Products":"\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0645\u0645\u064a\u0632\u0629"}),(0,v.jsx)(fn,{children:P.map(((e,t)=>(0,v.jsx)(ve,{plate:e,index:t,activePlate:null,setactivePlate:()=>{},showPopup:null,setSearchParams:r,searchParams:l,activeCategoryId:e.category_id,categories:n,disableDetails:!1,$isFeatured:!0,wishlistIds:x,onWishlistChange:g},e.id)))}),(0,v.jsxs)(yn,{onClick:()=>o(),activeLanguage:u,theme:null!==p&&void 0!==p&&p.theme?"string"===typeof p.theme?JSON.parse(p.theme):p.theme:{},children:["en"===u?"View All Products":"\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a","ar"===u?(0,v.jsx)(ue._Jj,{}):(0,v.jsx)(ue.X6T,{})]})]}),m.length>0&&(0,v.jsxs)(qi,{id:"branches-section",children:[(0,v.jsx)(Di,{activeLanguage:u,children:Y}),m.map((e=>(0,v.jsxs)(Hi,{activeLanguage:u,children:[(0,v.jsx)(nn,{activeLanguage:u,children:e.name}),(0,v.jsxs)(rn,{activeLanguage:u,children:[e.phone_number&&(0,v.jsx)(an,{onClick:()=>K(e,"phone"),phone:!0,activeLanguage:u,children:(0,v.jsx)(ue.Cab,{})}),e.whatsapp_number&&(0,v.jsx)(an,{onClick:()=>K(e,"whatsapp"),whatsapp:!0,activeLanguage:u,children:(0,v.jsx)(ue.EcP,{})}),(e.location||e.mapLink)&&(0,v.jsx)(an,{onClick:()=>K(e,"location"),location:!0,activeLanguage:u,children:(0,v.jsx)(a.o9J,{})})]})]},e.id)))]}),f.length>0&&(0,v.jsxs)(dn,{id:"social-media-section",children:[(0,v.jsx)(Di,{activeLanguage:u,children:M}),(0,v.jsx)(cn,{children:f.map(((e,t)=>{const o=e.platform||e.name||"",i=e.link||e.url||"",n=i.startsWith("http")?i:`https://${i}`;return(0,v.jsx)(pn,{href:n,target:"_blank",rel:"noopener noreferrer",platform:o,children:(0,v.jsx)(un,{platform:o,children:D(o)})},t)}))})]}),N&&R&&(0,v.jsxs)(Vi,{children:[(0,v.jsx)(Xi,{onClick:J}),(0,v.jsxs)(Ki,{activeLanguage:u,children:[(0,v.jsx)(Ji,{onClick:J,activeLanguage:u,children:"\xd7"}),(0,v.jsx)(Zi,{activeLanguage:u,children:N.name}),(0,v.jsxs)(Qi,{activeLanguage:u,children:["phone"===R&&N.phone_number&&(0,v.jsxs)(Gi,{activeLanguage:u,children:[(0,v.jsx)(en,{activeLanguage:u,children:"en"===u?"Phone Number":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"}),(0,v.jsx)(tn,{href:`tel:${U(N.phone_number)}`,activeLanguage:u,children:N.phone_number})]}),"whatsapp"===R&&N.whatsapp_number&&(0,v.jsxs)(Gi,{activeLanguage:u,children:[(0,v.jsx)(en,{activeLanguage:u,children:"en"===u?"WhatsApp Number":"\u0631\u0642\u0645 \u0648\u0627\u062a\u0633\u0627\u0628"}),(0,v.jsx)(tn,{href:`https://wa.me/${U(N.whatsapp_number)}`,target:"_blank",rel:"noopener noreferrer",activeLanguage:u,whatsapp:!0,children:N.whatsapp_number})]}),"location"===R&&(0,v.jsxs)(v.Fragment,{children:[N.location&&(0,v.jsxs)(Gi,{activeLanguage:u,children:[(0,v.jsx)(en,{activeLanguage:u,children:"en"===u?"Location":"\u0627\u0644\u0645\u0648\u0642\u0639"}),(0,v.jsx)(en,{activeLanguage:u,location:!0,children:N.location})]}),N.mapLink&&(0,v.jsx)(on,{href:`https://${N.mapLink}`,target:"_blank",rel:"noopener noreferrer",activeLanguage:u,children:q})]})]})]})]}),(0,v.jsx)(ln,{activeLanguage:u,children:(0,v.jsx)(sn,{activeLanguage:u,children:X})})]})}var An=o(34500),Ln=o(42978),zn=o(15831);function Sn(){const[e,t]=(0,$.ok)(),o=e.get("productId"),n=e.get("categoryId"),r=e.get("page"),[a,c]=(0,i.useState)(!1),{restaurantName:p}=(0,b.g)(),u=window.location.hostname.split(".")[0],x="menugic"!==u&&"localhost"!==u&&"www"!==u?u:p,h=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]})),g=(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[x])||void 0===o?void 0:o.activeLanguage)||"en"}));(0,y.wA)();(0,i.useEffect)((()=>(document.documentElement.setAttribute("dir","ar"===g?"rtl":"ltr"),()=>document.documentElement.removeAttribute("dir"))),[g]);const m=3===Number(null===h||void 0===h?void 0:h.template_id)&&(!0===(null===h||void 0===h?void 0:h.show_all_items_category)||1===(null===h||void 0===h?void 0:h.show_all_items_category)||"1"===(null===h||void 0===h?void 0:h.show_all_items_category)),f=[...(null===h||void 0===h?void 0:h.categories)||[]].sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))),j=m?[{id:"all-items",en_category:"All Items",ar_category:"\u0643\u0644 \u0627\u0644\u0623\u0635\u0646\u0627\u0641",isAllItems:!0,priority:999999},...f]:f,C=()=>{window.history.pushState({},""),ee("feedback")},k=()=>{window.history.pushState({},""),ee("contactForm")},[A,L]=(0,i.useState)(null),[z,S]=(0,i.useState)(""),[P,E]=(0,i.useState)(null),[_,I]=(0,i.useState)(null),[F,T]=(0,i.useState)(!0),N=(()=>{if(!n)return 0;const e=j.findIndex((e=>e.id==n));return e>=0?e:0})(),[O,R]=(0,i.useState)(N),[B,D]=(0,i.useState)(n?"products":"home"),U=(0,i.useRef)(B),W=(0,i.useRef)(A),Y=(0,i.useRef)(P),[M,q]=(0,i.useState)(0),[H,V]=(0,i.useState)(null),[X,K]=((0,y.d4)((e=>(e.cart[x]||[]).reduce(((e,t)=>e+t.quantity),0))),(0,i.useState)(n||null)),J=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?Z(e):(D("categories"),window.scrollTo({top:0,behavior:"smooth"}))},Z=o=>{K(o),D("products"),S("");const i=new URLSearchParams(e);i.set("categoryId",o),t(i)},Q=()=>{D("categories"),K(null),S("");const o=new URLSearchParams(e);o.delete("categoryId"),t(o),window.scrollTo({top:0,behavior:"smooth"})},G=()=>{D("home"),K(null),S(""),t({})},ee=e=>{document.body.style.overflow=null==e?"auto":"hidden",L(e)};(0,i.useEffect)((()=>{console.log("\ud83d\udd0d PWA Debug Info:"),console.log("- Protocol:",window.location.protocol),console.log("- Host:",window.location.hostname),console.log("- Navigator:",navigator.userAgent);const e=e=>{e.preventDefault(),console.log("\u2705 Install prompt event captured!"),I(e),T(!0)};return window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",(e=>{console.log("\ud83c\udf89 Application installed successfully!")})),()=>{window.removeEventListener("beforeinstallprompt",e)}}),[]),(0,i.useEffect)((()=>{if(null!==h&&void 0!==h&&h.id){var e,t;const o=(null===h||void 0===h||null===(e=h.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,he.trackVisit)(h.id,o),(0,he.trackPageView)(h.id,o)}}),[null===h||void 0===h?void 0:h.id]);let te=JSON.parse((null===h||void 0===h?void 0:h.features)||"{}");return(0,i.useEffect)((()=>{n&&(K(n),D("products"))}),[n]),(0,i.useEffect)((()=>{!o&&!n||!A||"feedback"!==A&&"contactForm"!==A||ee(null)}),[o,n]),(0,i.useEffect)((()=>{"categories"===B&&window.scrollTo({top:0,behavior:"smooth"})}),[B]),(0,i.useEffect)((()=>{U.current!==B&&("categories"!==B||n||o||r||window.history.pushState({viewMode:"categories"},"",window.location.href),U.current=B)}),[B,n,o,r]),(0,i.useEffect)((()=>{W.current!==A&&(A&&window.history.pushState({popup:A},"",window.location.href),W.current=A)}),[A]),(0,i.useEffect)((()=>{Y.current!==P&&(P&&(ee(null),window.history.pushState({sidebar:!0},"",window.location.href)),Y.current=P)}),[P]),(0,i.useEffect)((()=>{const e=()=>{const e=null!==new URLSearchParams(window.location.search).get("productId");c(e)};e();const t=window.history.pushState,o=window.history.replaceState;return window.history.pushState=function(){for(var o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];t.apply(window.history,i),setTimeout(e,0)},window.history.replaceState=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];o.apply(window.history,i),setTimeout(e,0)},window.addEventListener("popstate",e),()=>{window.history.pushState=t,window.history.replaceState=o,window.removeEventListener("popstate",e)}}),[e]),(0,i.useEffect)((()=>{const e=e=>{var t;const o=new URLSearchParams(window.location.search),i=o.get("productId"),n=o.get("categoryId"),r=o.get("page");if(P)return void E(!1);if(A)return void ee(null);if(i||r||n)return;const a="categories"===(null===e||void 0===e||null===(t=e.state)||void 0===t?void 0:t.viewMode)?"categories":"home";D(a),K(null),S("")};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[A]),(0,v.jsxs)(l,{id:"wrapper",children:[(0,v.jsx)(An.A,{onProductsClick:()=>{"home"===B?J():"products"===B?Q():D("categories")},onSocialMediaClick:()=>{if("home"!==B)G(),setTimeout((()=>{const e=document.getElementById("social-media-section");e&&e.scrollIntoView({behavior:"smooth"})}),100);else{const e=document.getElementById("social-media-section");e&&e.scrollIntoView({behavior:"smooth"})}},onBranchesClick:()=>{window.history.pushState({},""),ee("location")},onContactFormClick:k,onFeedbackClick:C,onAboutClick:!1!==(null===h||void 0===h?void 0:h.show_about_us)?()=>{window.history.pushState({},""),ee("about")}:void 0,onOrderClick:()=>{null!==te&&void 0!==te&&te.cart&&ee("cart")},onHomeClick:G,onCategoryClick:Z,onContactClick:k,categories:j,activeCategory:X,setshowSidebar:E,showSidebar:P,popupHandler:ee,isProductDetailsOpen:a||"about"===A}),(0,v.jsxs)(s,{onClick:()=>{null!=A&&ee(null)},children:[(0,v.jsx)(d,{showPopup:A}),"home"===B&&(0,v.jsx)(kn,{onExploreClick:J,setSearchParams:t,searchParams:e,categories:j}),"categories"===B&&(0,v.jsx)(w,{categories:j,activeCategory:X,setactiveCategory:K,setSearchText:S,searchText:z,setshowSidebar:E,showSidebar:P,carouselPosition:O,setcarouselPosition:R,popupHandler:ee}),"products"===B&&X&&!o&&(0,v.jsx)(Fi,{categoryId:X,categories:j,onBack:Q,searchText:z,setSearchText:S,popupHandler:ee,setshowSidebar:E,showSidebar:P}),"categories"===B&&(0,v.jsx)(yi,{categories:z?j.filter((e=>"en"===g?(e.en_category||"").toLowerCase().includes(z.toLowerCase()):(e.ar_category||"").toLowerCase().includes(z.toLowerCase()))):j,onCategoryClick:Z}),"products"===B&&X&&(0,v.jsx)(uo,{menu:(null===h||void 0===h?void 0:h.categories)||[],activeCategory:X,showPopup:A,searchText:z,setactiveCategory:K,setcarouselPosition:R,carouselPosition:O,categories:j})]}),(0,v.jsx)(xo.A,{restaurant:h,showPopup:A,popupHandler:ee}),(null===te||void 0===te?void 0:te.cart)&&(0,v.jsx)(ho.A,{restaurant:h,showPopup:A,popupHandler:ee}),(0,v.jsx)(ri.A,{showPopup:A,popupHandler:ee,activeCategory:X}),(0,v.jsx)(mo.A,{restaurant:h,showPopup:A,popupHandler:ee}),(0,v.jsx)(go.A,{restaurant:h,showPopup:A,popupHandler:ee,isPage:!1}),(0,v.jsx)(fo.A,{restaurant:h,showPopup:A,popupHandler:ee,isPage:!1}),(0,v.jsx)(vo.A,{showPopup:A,popupHandler:ee}),(0,v.jsx)(bo.A,{categories:j,activeCategory:X,setactiveCategory:K,setshowSidebar:E,showSidebar:P,setcarouselPosition:R,onHomeClick:G,onCategoryClick:Z,onFeedbackClick:C,onContactClick:k,onBranchesClick:()=>{window.history.pushState({},""),ee("location")},branches:(null===h||void 0===h?void 0:h.branches)||[]}),o&&(0,v.jsx)(ni,{productId:o,searchParams:e,setSearchParams:t}),(null===te||void 0===te?void 0:te.install_app)&&(0,v.jsx)(ui,{showInstallPopup:F,onInstall:async()=>{if(!_)return;_.prompt();"accepted"===(await _.userChoice).outcome?console.log("User accepted the install"):console.log("User dismissed the install"),I(null),T(!1)},restaurantName:x,onDismiss:()=>T(!1)}),(0,v.jsx)(Ln.A,{isProductDetailsOpen:a||"about"===A,activeView:B,showPopup:A,onHomeClick:G,onCategoriesClick:()=>{if("products"===B)Q();else{D("categories"),K(null);const o=new URLSearchParams(e);o.delete("categoryId"),t(o),window.scrollTo({top:0,behavior:"smooth"})}},onCartClick:()=>{null!==te&&void 0!==te&&te.cart&&ee("cart")},onBranchesClick:()=>{window.history.pushState({},""),ee("location")},onContactClick:k,onFeedbackClick:C,restaurantName:x,branches:(null===h||void 0===h?void 0:h.branches)||[]}),(0,v.jsx)(zn.A,{trigger:M,sourceElement:H,onComplete:()=>{V(null)}})]})}},20965:(e,t,o)=>{"use strict";o(42564).default},34848:e=>{"use strict";function t(e,t){if("function"!==typeof e)throw new TypeError("argument fn must be a function");return e}function o(e,t,o){if(!e||"object"!==typeof e&&"function"!==typeof e)throw new TypeError("argument obj must be object");var i=Object.getOwnPropertyDescriptor(e,t);if(!i)throw new TypeError("must call property on owner object");if(!i.configurable)throw new TypeError("property must be configurable")}e.exports=function(e){if(!e)throw new TypeError("argument namespace is required");function i(e){}return i._file=void 0,i._ignored=!0,i._namespace=e,i._traced=!1,i._warned=Object.create(null),i.function=t,i.property=o,i}},26340:(e,t,o)=>{"use strict";var i,n=o(34848)("http-errors"),r=o(40203),a=o(53910),l=o(61033),s=o(51798);function d(e){return Number(String(e).charAt(0)+"00")}function c(e,t){var o=Object.getOwnPropertyDescriptor(e,"name");o&&o.configurable&&(o.value=t,Object.defineProperty(e,"name",o))}function p(e){return"Error"!==e.substr(-5)?e+"Error":e}e.exports=function e(){for(var t,o,i=500,r={},l=0;l<arguments.length;l++){var s=arguments[l],c=typeof s;if("object"===c&&s instanceof Error)i=(t=s).status||t.statusCode||i;else if("number"===c&&0===l)i=s;else if("string"===c)o=s;else{if("object"!==c)throw new TypeError("argument #"+(l+1)+" unsupported type "+c);r=s}}"number"===typeof i&&(i<400||i>=600)&&n("non-error status code; use only 4xx or 5xx status codes");("number"!==typeof i||!a.message[i]&&(i<400||i>=600))&&(i=500);var p=e[i]||e[d(i)];t||(t=p?new p(o):new Error(o||a.message[i]),Error.captureStackTrace(t,e));p&&t instanceof p&&t.status===i||(t.expose=i<500,t.status=t.statusCode=i);for(var u in r)"status"!==u&&"statusCode"!==u&&(t[u]=r[u]);return t},e.exports.HttpError=function(){function e(){throw new TypeError("cannot construct abstract class")}return l(e,Error),e}(),e.exports.isHttpError=(i=e.exports.HttpError,function(e){return!(!e||"object"!==typeof e)&&(e instanceof i||e instanceof Error&&"boolean"===typeof e.expose&&"number"===typeof e.statusCode&&e.status===e.statusCode)}),function(e,t,o){t.forEach((function(t){var i,n=s(a.message[t]);switch(d(t)){case 400:i=function(e,t,o){var i=p(t);function n(e){var t=null!=e?e:a.message[o],l=new Error(t);return Error.captureStackTrace(l,n),r(l,n.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:t,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(n,e),c(n,i),n.prototype.status=o,n.prototype.statusCode=o,n.prototype.expose=!0,n}(o,n,t);break;case 500:i=function(e,t,o){var i=p(t);function n(e){var t=null!=e?e:a.message[o],l=new Error(t);return Error.captureStackTrace(l,n),r(l,n.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:t,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(n,e),c(n,i),n.prototype.status=o,n.prototype.statusCode=o,n.prototype.expose=!1,n}(o,n,t)}i&&(e[t]=i,e[n]=i)}))}(e.exports,a.codes,e.exports.HttpError)},61033:e=>{"function"===typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var o=function(){};o.prototype=t.prototype,e.prototype=new o,e.prototype.constructor=e}}},29477:(e,t,o)=>{"use strict";var i=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof o.g)return o.g;throw new Error("unable to locate global object")}();e.exports=t=i.fetch,i.fetch&&(t.default=i.fetch.bind(i)),t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response},40203:e=>{"use strict";e.exports=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){return e.__proto__=t,e}:function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(e,o)||(e[o]=t[o]);return e})},53910:(e,t,o)=>{"use strict";var i=o(17662);function n(e){if(!Object.prototype.hasOwnProperty.call(r.message,e))throw new Error("invalid status code: "+e);return r.message[e]}function r(e){if("number"===typeof e)return n(e);if("string"!==typeof e)throw new TypeError("code must be a number or string");var t=parseInt(e,10);return isNaN(t)?function(e){var t=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(r.code,t))throw new Error('invalid status message: "'+e+'"');return r.code[t]}(e):n(t)}e.exports=r,r.message=i,r.code=function(e){var t={};return Object.keys(e).forEach((function(o){var i=e[o],n=Number(o);t[i.toLowerCase()]=n})),t}(i),r.codes=function(e){return Object.keys(e).map((function(e){return Number(e)}))}(i),r.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},r.empty={204:!0,205:!0,304:!0},r.retry={502:!0,503:!0,504:!0}},51798:e=>{"use strict";e.exports=function(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join("").replace(/[^ _0-9a-z]/gi,"")}},42564:(e,t,o)=>{"use strict";o(29477),o(26340)},17662:e=>{"use strict";e.exports=JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a Teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Too Early","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')}}]);
//# sourceMappingURL=855.cca57e11.chunk.js.map