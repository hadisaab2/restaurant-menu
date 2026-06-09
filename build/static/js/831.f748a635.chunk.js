"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[831],{15831:(e,o,t)=>{t.d(o,{A:()=>s});var r=t(82483),i=t(99998),n=t(41190);const a=n.i7`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(
      calc((var(--end-x) - var(--start-x)) * 0.5), 
      calc((var(--end-y) - var(--start-y)) * 0.5 - 30px)
    ) scale(0.7);
    opacity: 0.8;
  }
  100% {
    transform: translate(
      calc(var(--end-x) - var(--start-x)), 
      calc(var(--end-y) - var(--start-y))
    ) scale(0.2);
    opacity: 0;
  }
`,l=n.Ay.div`
  position: fixed;
  left: var(--start-x);
  top: var(--start-y);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||"#007bff"}};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 10000;
  pointer-events: none;
  animation: ${a} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  
  &::before {
    content: "🛒";
    font-size: 20px;
  }
`;var d=t(56723);function s(e){let{trigger:o,sourceElement:t,onComplete:n}=e;const[a,s]=(0,r.useState)(!1),[p,c]=(0,r.useState)(null);return(0,r.useEffect)((()=>{if(!o||!t)return;const e=t.getBoundingClientRect(),r=e.left+e.width/2,i=e.top+e.height/2,a=document.getElementById("cart-tab-icon");if(!a){const e=document.querySelector("[data-tab-bar]");if(e){e.querySelectorAll("button").forEach((e=>{if(e.querySelector('[data-icon="cart"]')){const o=e.getBoundingClientRect(),t=o.left+o.width/2,n=o.top+o.height/2;return c({startX:r,startY:i,endX:t,endY:n}),void s(!0)}}))}return}const l=a.getBoundingClientRect(),d=l.left+l.width/2,p=l.top+l.height/2;c({startX:r,startY:i,endX:d,endY:p}),s(!0);const x=setTimeout((()=>{s(!1),c(null),n&&n()}),600);return()=>clearTimeout(x)}),[o,t,n]),a&&p?(0,i.createPortal)((0,d.jsx)(l,{style:{"--start-x":`${p.startX}px`,"--start-y":`${p.startY}px`,"--end-x":`${p.endX}px`,"--end-y":`${p.endY}px`}}),document.body):null}},79111:(e,o,t)=>{t.d(o,{A:()=>T});var r=t(82483),i=t(27320),n=t(11671),a=t(41190);const l=a.Ay.div`
height: 100vh;
position: fixed;
width: 100%;
left: ${e=>e.showSidebar?"0":"-100%"};
top:0;
  transition:all  0.5s ease-in-out;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
z-index: 100;
`,d=a.Ay.div`
width: 100%;
height: 100%;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
`,s=a.Ay.div`
height: 100vh;
background-color: ${e=>e.theme.sidebarbackground};
width: 80%;
position: absolute;
left: 0;
top:0;
box-shadow: 10px 0 15px -5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-left: 0;
  padding-right: 0;
  overflow-y: auto;
  align-items: stretch;
  @media (min-width: 1024px) {
        width: 25%;
    }
`,p=(a.Ay.div`
width: 100%;
  height: 60%; /* 60% of the sidebar height */
  overflow-y: auto;
  margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,a.Ay.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-start;
`,a.Ay.span`
    /* overflow: hidden;
    text-overflow: ellipsis; */
    margin-left:${e=>e.categoryType?"10%":"0%"};

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 13px;
    color: ${e=>e.theme.sidebartext};

`),c=a.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10%;

`,x=a.Ay.img`
width:20px;
height:20px;
`,u=(a.Ay.div`
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vh;
`,a.Ay.img`
max-width: 200px;
max-height: 200px;
margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,a.Ay.div`
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

`,a.Ay.input`
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

`,(0,a.Ay)(i.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};
color:${e=>e.theme.sidebarsearchText};

`,(0,a.Ay)(n.IMk)`
position: absolute;
left: 20px;
top: 20px;
color: ${e=>e.theme.sidebarsearch};
font-size: 27px;

`),h=(a.Ay.button`
  position: absolute;
  left: 20px;
  top: 60px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: ${e=>e.theme.sidebarsearch||e.theme.sidebartext||"#333333"};
  font-size: 14px;
  font-weight: 500;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  &:hover {
    background: ${e=>e.theme.sidebarsearch||"rgba(0, 0, 0, 0.05)"};
    transform: translateX(${e=>"ar"===e.activeLanguage?"-2px":"2px"});
  }
  
  &:active {
    transform: translateX(0);
  }
  
  @media (min-width: 768px) {
    font-size: 15px;
    padding: 10px 14px;
  }
`,a.Ay.span`
  font-size: 14px;
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 15px;
  }
`,a.Ay.div`
  width: 100%;
  margin-bottom: 0;
  padding: 0 10px;
  border: none;
  border-bottom: none;
`),f=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  border-radius: 10px;
  margin: 0;
  opacity: ${e=>e.disabled?.6:1};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  background: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.sidebarsearch)||"transparent"}};

  &:hover {
    ${e=>{var o;return e.disabled?"":`\n      background: ${(null===(o=e.theme)||void 0===o?void 0:o.sidebarsearch)||"rgba(0, 0, 0, 0.08)"};\n      transform: translateX(${"ar"===e.activeLanguage?"-2px":"2px"});\n    `}}
  }

  &:active {
    ${e=>e.disabled?"":"\n      transform: translateX(0);\n    "}
  }
`,g=a.Ay.div`
  font-size: 20px;
  color: ${e=>{var o,t,r;return(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||(null===(t=e.theme)||void 0===t?void 0:t.maincolor)||(null===(r=e.theme)||void 0===r?void 0:r.sidebartext)||"#333333"}};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  flex-shrink: 0;
`,m=a.Ay.span`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.sidebartext)||"#333333"}};
  flex: 1;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,b=a.Ay.div`
  font-size: 12px;
  color: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.sidebartext)||"#666666"}};
  margin-${e=>"ar"===e.activeLanguage?"right":"left"}: auto;
  transition: transform 0.3s ease;
  flex-shrink: 0;
`,v=a.Ay.div`
  width: 100%;
  padding: 8px 0;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  margin-top: 4px;
`,y=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 10px;
`,w=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${e=>{var o,t;return e.active?((null===(o=e.theme)||void 0===o?void 0:o.mainColor)||(null===(t=e.theme)||void 0===t?void 0:t.maincolor)||"#007bff")+"20":"transparent"}};
  margin: 0 10px;
  
  &:hover {
    background: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.sidebarsearch)||"rgba(0, 0, 0, 0.06)"}};
    transform: translateX(${e=>"ar"===e.activeLanguage?"-2px":"2px"});
  }

  &:active {
    transform: translateX(0);
  }
`;var j=t(71481),C=t(93376),$=t(99891),A=t(91965),k=t(58821),z=t(56723);function T(e){let{activeCategory:o,setactiveCategory:t,categories:i,showSidebar:n,setshowSidebar:a,setcarouselPosition:T,onHomeClick:L,onCategoryClick:_,onFeedbackClick:S,onContactClick:N,onBranchesClick:E,branches:B}=e;const{restaurantName:D}=(0,C.g)(),[I,P]=(0,$.ok)(),U=window.location.hostname.split(".")[0],q="menugic"!==U&&"localhost"!==U&&"www"!==U?U:D,R=(0,A.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[q]})),[F,O]=(0,r.useState)(!0);return(0,z.jsxs)(l,{showSidebar:n,children:[(0,z.jsx)(d,{onClick:()=>{a(!1)},showSidebar:n}),(0,z.jsxs)(s,{children:[(0,z.jsx)(u,{}),L&&(0,z.jsx)(h,{children:(0,z.jsxs)(f,{onClick:L,children:[(0,z.jsx)(g,{children:(0,z.jsx)(j.rQ8,{})}),(0,z.jsx)(m,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:"en"===(null===R||void 0===R?void 0:R.activeLanguage)?"Homepage":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})]})}),(0,z.jsxs)(h,{children:[(0,z.jsxs)(f,{onClick:()=>O(!F),children:[(0,z.jsx)(g,{children:(0,z.jsx)(j.svy,{})}),(0,z.jsx)(m,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:"en"===(null===R||void 0===R?void 0:R.activeLanguage)?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a"}),(0,z.jsx)(b,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:F?(0,z.jsx)(j.Ucs,{}):(0,z.jsx)(j.Vr3,{})})]}),F&&(0,z.jsx)(v,{children:(0,z.jsx)(y,{children:null===i||void 0===i?void 0:i.sort(((e,o)=>o.priority-e.priority)).map(((e,r)=>(0,z.jsxs)(w,{onClick:()=>((e,o)=>{_?_(e):(t(e),T(o)),a(!1)})(e.id,r),active:o===e.id,children:["horizantal-withoutIcon"!=R.category_type&&(0,z.jsx)(c,{activeCategory:o,categoryId:e.id,children:(0,z.jsx)(x,{src:(0,k.V)(e.image_url)})}),(0,z.jsx)(p,{categoryType:"horizantal-withoutIcon"==R.category_type,activeCategory:o,categoryId:e.id,children:"en"==(null===R||void 0===R?void 0:R.activeLanguage)?e.en_category:e.ar_category})]},r)))})})]}),(0,z.jsx)(h,{children:(0,z.jsxs)(f,{disabled:!0,children:[(0,z.jsx)(g,{children:(0,z.jsx)(j.IoZ,{})}),(0,z.jsx)(m,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:"en"===(null===R||void 0===R?void 0:R.activeLanguage)?"Orders (Coming Soon)":"\u0627\u0644\u0637\u0644\u0628\u0627\u062a (\u0642\u0631\u064a\u0628\u0627\u064b)"})]})}),(0,z.jsx)(h,{children:(0,z.jsxs)(f,{onClick:()=>{S&&S(),a(!1)},children:[(0,z.jsx)(g,{children:(0,z.jsx)(j.g5D,{})}),(0,z.jsx)(m,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:"en"===(null===R||void 0===R?void 0:R.activeLanguage)?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"})]})}),B&&B.length>0&&(0,z.jsx)(h,{children:(0,z.jsxs)(f,{onClick:()=>{E&&E(),a(!1)},children:[(0,z.jsx)(g,{children:(0,z.jsx)(j.vq8,{})}),(0,z.jsx)(m,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:"en"===(null===R||void 0===R?void 0:R.activeLanguage)?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"})]})}),(0,z.jsx)(h,{children:(0,z.jsxs)(f,{onClick:()=>{N&&N(),a(!1)},children:[(0,z.jsx)(g,{children:(0,z.jsx)(j.toK,{})}),(0,z.jsx)(m,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:"en"===(null===R||void 0===R?void 0:R.activeLanguage)?"Contact Us":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"})]})})]})]})}},50795:(e,o,t)=>{t.d(o,{A:()=>po});var r=t(82483),i=t(41190),n=t(10448),a=t(1901);const l=i.Ay.div`
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
`,d=((0,i.Ay)(n.WQq)`
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

`,i.Ay.div`
width: 90%;
display: flex;
flex-direction: column;
`,i.Ay.div`
font-size: 25px;
font-weight:600;
margin-top:40px;
color: ${e=>e.theme.popupTextColor};

`,i.Ay.div`
height: 0.25px;
width: 100%;
background-color: ${e=>e.theme.popupTextColor};
opacity: 0.1;
margin-top:10px;

`,i.Ay.div`
max-height: 35vh;
width: 100%;
overflow: scroll;
margin-top: 20px;

`,i.Ay.div`
height: 35vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color:${e=>e.theme.popupTextColor};
font-size: 18px;
`);i.Ay.div`
width: 100%;
display: flex;
flex-direction: row;
height: 11vh;
margin-top: 1vh;
position: relative;

`,i.Ay.div`
flex: 1;
display: flex;
justify-content: center;
`,i.Ay.img`
width: 70%;
height: 100%;
object-fit: cover;
border-radius: 3px;
`,i.Ay.div`
flex: 1;
display: flex;
flex-direction: column;
gap:2px;
`,i.Ay.div`
flex: 1;
display: flex;
align-items: flex-end;
justify-content: flex-end;


`,i.Ay.div`
width: 50%;
display: flex;
flex-direction: row;
height: 20px;
background-color:${e=>e.theme.mainColor};
color:${e=>e.theme.popupbackgroundColor};
border-radius: 20px;
margin-right: 20px;
margin-bottom: 10px;

`,i.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,i.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,i.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,i.Ay.span`
font-size: 13px;
font-weight: 500;
color:${e=>e.theme.popupTextColor};

`,i.Ay.span`
color:${e=>e.theme.popupTextColor};
font-size: 13px;


`,i.Ay.span`
color:${e=>e.theme.popupTextColor};
font-size: 13px;
margin-top: 30px;


`,i.Ay.button`
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

`,(0,i.Ay)(a.pS_)`
font-size: 15px;
position: absolute;
top: 0px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`;var s=t(91965),p=t(93376),c=t(11222),x=t(86001),u=t(29334),h=t(81132),f=t(70268),g=t(18907),m=t(67059),b=t(50074),v=t(81926),y=t(58821);const w=i.i7`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,j=i.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,C=i.Ay.div`
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
`,$=i.Ay.div`
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
  animation: ${w} 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`,A=i.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`,k=i.Ay.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,z=i.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`,T=i.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,L=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`,_=i.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  white-space: nowrap;
`,S=i.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}12`};
  padding: 3px 5px;
  border-radius: 20px;
`,N=i.Ay.button`
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
`,E=i.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  min-width: 20px;
  text-align: center;
`,B=i.Ay.button`
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
`,D=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,I="\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 2px 8px;\n  line-height: 1.5;\n  white-space: nowrap;\n",P=i.Ay.span`
  ${I}
  border: 1px solid ${e=>`${e.theme.popupTextColor||"#1a1a1a"}50`};
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  background: transparent;
`,U=i.Ay.span`
  ${I}
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}18`};
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}35`};
`,q=i.Ay.span`
  ${I}
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  border: 1px dashed ${e=>`${e.theme.popupTextColor||"#999"}40`};
  opacity: 0.65;
  text-decoration: line-through;
`,R=i.Ay.div`
  font-size: 10px;
  font-style: italic;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,F=i.Ay.div`
  font-size: 10px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.75;
  line-height: 1.5;
`,O=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}10`};
  border-radius: 12px;
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  margin-top: 4px;
`,Y=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,M=i.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  opacity: 0.75;
`,X=i.Ay.div`
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
`,W=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.6;
  text-align: center;
`;var H=t(71481),V=t(56723);const J=["Size:","\u0627\u0644\u062d\u062c\u0645:"],Q=["Add ons:","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:"],G=["Remove:","\u0628\u062f\u0648\u0646:"];function K(e){let{restaurant:o,activeLanguage:t}=e;const r=(0,s.wA)(),{restaurantName:i}=(0,p.g)(),n=window.location.hostname.split(".")[0],a="menugic"!==n&&"localhost"!==n&&"www"!==n?n:i,l=(0,s.d4)((e=>e.cart[a]||[])),d=l.reduce(((e,o)=>e+o.price*o.quantity),0),c="ar"===t?"ar":"en",u=e=>{const o=(0,b.qh)(e,c);if(!o.length)return null;const{sizeLabel:t,addonLabels:r,removalLabels:i,legacyLines:n}=function(e){const o={sizeLabel:null,addonLabels:[],removalLabels:[],legacyLines:[]};let t=null;for(const r of e)"heading"===r.type?t=J.includes(r.text)?"size":Q.includes(r.text)?"addons":G.includes(r.text)?"removals":"legacy":"size"===t?o.sizeLabel=r.text:"addons"===t?o.addonLabels.push(r.text):"removals"===t?o.removalLabels.push(r.text):o.legacyLines.push(r.text);return o}(o),a=t||r.length||i.length;return(0,V.jsxs)(V.Fragment,{children:[a&&(0,V.jsxs)(D,{children:[t&&(0,V.jsx)(P,{children:"ar"===c?`\u0627\u0644\u062d\u062c\u0645: ${t}`:`Size: ${t}`}),r.map((e=>(0,V.jsxs)(U,{children:["+ ",e]},e))),i.map((e=>(0,V.jsx)(q,{children:e},e)))]}),n.map(((e,o)=>(0,V.jsx)(F,{children:e},o)))]})};let h="";switch(null===o||void 0===o?void 0:o.currency){case"dollar":h="$";break;case"lb":h="L.L.";break;case"gram":h="g";break;case"kilogram":h="kg";break;default:h=""}if(0===l.length)return(0,V.jsx)(j,{children:(0,V.jsx)(W,{children:"ar"===c?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"})});const f=e=>{var o;const t=null===(o=e.images)||void 0===o?void 0:o[0];return t&&t.url?(0,y.V)(t.url):""};return(0,V.jsx)(j,{children:(0,V.jsxs)(C,{children:[l.map((e=>{const o="ar"===c?e.ar_name:e.en_name,t=(0,g.T)(e.price*e.quantity,h);return(0,V.jsx)($,{children:(0,V.jsxs)(A,{children:[(0,V.jsx)(k,{src:f(e),alt:o}),(0,V.jsxs)(z,{children:[(0,V.jsx)(T,{title:o,children:o}),u(e),e.instruction&&(0,V.jsxs)(R,{children:["\ud83d\udcdd ",e.instruction]})]}),(0,V.jsxs)(L,{children:[(0,V.jsx)(_,{children:t}),(0,V.jsxs)(S,{children:[(0,V.jsx)(N,{onClick:()=>{return o=e.uniqueId,void((t=e.quantity)>1&&r((0,x.v)(a,o,t-1)));var o,t},disabled:e.quantity<=1,"aria-label":"decrease quantity",children:"\u2212"}),(0,V.jsx)(E,{children:e.quantity}),(0,V.jsx)(N,{onClick:()=>{return o=e.uniqueId,t=e.quantity,r((0,x.v)(a,o,t+1));var o,t},"aria-label":"increase quantity",children:"+"})]}),(0,V.jsx)(B,{onClick:()=>{return o=e.uniqueId,r((0,x.dt)(a,o));var o},"aria-label":"remove item",children:(0,V.jsx)(H.qbC,{})})]})]})},e.uniqueId)})),(0,V.jsx)(O,{children:(0,V.jsxs)(Y,{children:[(0,V.jsx)(M,{children:"ar"===c?"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a":"Total"}),(0,V.jsx)(X,{children:(0,g.T)(d,h)})]})})]})})}var Z=t(13491);t(34304);const ee=i.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`;i.Ay.div`
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

`,i.Ay.ul`
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

`,i.Ay.li`
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

`,i.Ay.span`

`,i.Ay.span`
  border: solid ${e=>e.theme.popupTextColor||"#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.open?"rotate(-135deg)":"rotate(45deg)"};
  margin-left: 10px;
  transition: transform 0.3s;

`;function oe(e){let{deliveryType:o,branches:t,selectedBranch:r,setSelectedBranch:n,setErrors:a,errors:l}=e;const d=(0,i.DP)(),s=(t||[]).map((e=>({value:e.id,label:e.name,branch:e,isDisabled:!e.has_delivery&&"Delivery"===o}))),p={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":d.mainColor||d.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==l&&void 0!==l&&l.branch?"rgba(255, 68, 68, 0.1)":d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:o.isDisabled?"#999":d.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?d.categoryUnActive||"#ffffff":o.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent",cursor:o.isDisabled?"not-allowed":"pointer",display:"flex",justifyContent:"space-between"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,V.jsx)(ee,{children:(0,V.jsx)(Z.Ay,{value:s.find((e=>{var o;return(null===(o=e.branch)||void 0===o?void 0:o.id)===(null===r||void 0===r?void 0:r.id)})),onChange:e=>{e&&!e.isDisabled&&(n(e.branch),a({...l,branch:""}))},options:s,placeholder:"Select Branch",isOptionDisabled:e=>e.isDisabled,styles:p,formatOptionLabel:e=>(0,V.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,V.jsx)("span",{children:e.label}),e.isDisabled&&"Delivery"===o&&(0,V.jsx)("span",{style:{fontSize:12,color:"#999"},children:"No Delivery"})]}),menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})})}var te=t(27320);const re=i.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`,ie=(i.Ay.div`
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

`,i.Ay.ul`
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

`,i.Ay.li`
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
`,i.Ay.span`
width: 90%;
`,i.Ay.span`
  border: solid ${e=>e.theme.popupTextColor||"#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.open?"rotate(-135deg)":"rotate(45deg)"};
  margin-left: 10px;
  transition: transform 0.3s;

`,i.Ay.div`
height: 70px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(0,0,0,0.2);
`),ne=i.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`,ae=i.Ay.input`
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
`,le=(0,i.Ay)(te.Xj1)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.mainColor};

`,de=i.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;i.Ay.div`
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`,i.Ay.div`
  border: 3px solid ${e=>e.theme.popupbackgroundColor};
  border-left-color:${e=>e.theme.popupTextColor};; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${de} 1s linear infinite; /* Apply animation */
`;var se=t(89993);function pe(e){var o;let{selectedBranch:t,selectedRegion:n,onRegionChange:a,setErrors:l,errors:d,onRegionsChange:s}=e;const p=(0,i.DP)(),[c,x]=(0,r.useState)(!1),[u,h]=(0,r.useState)(""),{response:f,isLoading:g}=(0,se.w)({branch_id:t.id,onSuccess:()=>{}});(0,r.useEffect)((()=>{var e;g||s((null===f||void 0===f||null===(e=f.data)||void 0===e?void 0:e.regions)||[])}),[g,f,s]),(0,r.useEffect)((()=>{a("")}),[t,a]);const m=((null===f||void 0===f||null===(o=f.data)||void 0===o?void 0:o.regions)||[]).map((e=>({value:e.region_name,label:e.region_name}))),b=m.filter((e=>e.label.toLowerCase().includes(u.toLowerCase()))),v={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==d&&void 0!==d&&d.region?"#ff4444":p.mainColor||p.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==d&&void 0!==d&&d.region?"rgba(255, 68, 68, 0.1)":p.mainColor?`${p.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:p.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==d&&void 0!==d&&d.region?"#ff4444":p.mainColor||p.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:p.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:p.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:p.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:p.categoryUnActive||"#ffffff",border:`1px solid ${p.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:p.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?p.categoryUnActive||"#ffffff":o.isFocused?p.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return!g&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(re,{children:(0,V.jsx)(Z.Ay,{value:m.find((e=>e.value===n)),onMenuOpen:()=>x(!0),onMenuClose:()=>x(!1),onChange:e=>{a((null===e||void 0===e?void 0:e.value)||""),h(""),l({...d,region:""})},options:b,placeholder:"Select Region",styles:v,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})}),c&&(0,V.jsx)(ie,{children:(0,V.jsxs)(ne,{children:[(0,V.jsx)(ae,{placeholder:"Search",value:u,onChange:e=>{h(e.target.value)}}),(0,V.jsx)(le,{})]})})]})}const ce=i.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,xe=i.Ay.div`
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
`,ue=i.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,he=i.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,fe=(i.Ay.select`
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
`,i.Ay.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`);function ge(e){var o,t;let{formData:r,updateFormData:n,restaurant:a,errors:l,setErrors:d}=e;const s=(0,i.DP)();let p={};try{p=JSON.parse((null===a||void 0===a?void 0:a.features)||"{}")}catch(u){p={}}const c=[p.delivery_order&&{value:"Delivery",label:"Delivery"},p.takeaway_order&&{value:"TakeAway",label:"Take Away"},p.dinein_order&&{value:"DineIn",label:"Dine In"}].filter(Boolean),x={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:l.deliveryType?"#ff4444":s.mainColor||s.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(l.deliveryType?"rgba(255, 68, 68, 0.1)":s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:l.deliveryType?"#ff4444":s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:s.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?s.categoryUnActive||"#ffffff":o.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,V.jsxs)(ce,{children:[(0,V.jsx)(ue,{children:"Select Order Type"}),(0,V.jsx)(he,{children:"Choose how you would like to receive your order"}),(0,V.jsxs)(xe,{children:[(0,V.jsx)(Z.Ay,{value:c.find((e=>e.value===r.deliveryType)),onChange:e=>{var o;n({deliveryType:(null===e||void 0===e?void 0:e.value)||"",selectedBranch:(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o[0])||null,selectedRegion:""}),d({})},options:c,placeholder:"Select Order Type",isSearchable:!1,styles:x,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"}),l.deliveryType&&(0,V.jsx)(fe,{children:l.deliveryType})]}),(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.length)>0&&!(()=>{var e;return null===a||void 0===a||null===(e=a.branches)||void 0===e?void 0:e.some((e=>e.is_online))})()&&(0,V.jsxs)(xe,{children:[(0,V.jsx)(oe,{deliveryType:r.deliveryType,branches:null===a||void 0===a?void 0:a.branches,selectedBranch:r.selectedBranch,setSelectedBranch:e=>n({selectedBranch:e,selectedRegion:""}),setErrors:d,errors:l}),l.branch&&(0,V.jsx)(fe,{children:l.branch})]}),r.selectedBranch&&"Delivery"===r.deliveryType&&Array.isArray(r.regions)&&r.regions.length>0&&(0,V.jsxs)(xe,{children:[(0,V.jsx)(pe,{selectedRegion:r.selectedRegion,onRegionChange:e=>n({selectedRegion:e}),selectedBranch:1===(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)?null===a||void 0===a?void 0:a.branches[0]:r.selectedBranch,setErrors:d,errors:l,onRegionsChange:e=>n({regions:e})}),l.region&&(0,V.jsx)(fe,{children:l.region})]})]})}var me=t(16106);const be=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ve=i.Ay.button`
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
`,ye=i.Ay.div`
  padding: 16px;
  background: ${e=>e.theme.categoryUnActive||"#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,we=i.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,je=i.Ay.div`
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  word-break: break-all;
`,Ce=i.Ay.a`
  font-size: 14px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-decoration: none;
  font-weight: 600;
  margin-top: 4px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`,$e=i.Ay.div`
  color: #ff4444;
  font-size: 13px;
  margin-top: -8px;
`;function Ae(e){let{onLocationSelect:o,selectedLocation:t,hasError:r,googleMapsApiKey:n,activeLanguage:a="en"}=e;const l=(0,i.DP)();return n?(0,V.jsx)(me.A,{apiKey:n,onLocationConfirm:o,selectedLocation:t,hasError:r,theme:l,activeLanguage:a}):(0,V.jsx)(ke,{onLocationSelect:o,selectedLocation:t,hasError:r})}function ke(e){let{onLocationSelect:o,selectedLocation:t,hasError:i}=e;const[n,a]=(0,r.useState)(!1),[l,d]=(0,r.useState)("");return(0,V.jsxs)(be,{children:[(0,V.jsxs)(ve,{type:"button",onClick:()=>{navigator.geolocation?(a(!0),d(""),navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:r}=e.coords,i={latitude:t,longitude:r,address:`${t.toFixed(6)}, ${r.toFixed(6)}`};o(i),a(!1)}),(()=>{d("Unable to retrieve your location. Please try again."),a(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):d("Geolocation is not supported by your browser")},disabled:n,variant:"current",children:[(0,V.jsx)(H.hO$,{}),n?"Getting Location...":"Use Current Location"]}),(0,V.jsxs)(ve,{type:"button",onClick:()=>{if(t){const e=`https://www.google.com/maps?q=${t.latitude},${t.longitude}`;window.open(e,"_blank")}else{const e="https://www.google.com/maps/search/?api=1";window.open(e,"_blank")}},variant:"select",children:[(0,V.jsx)(H.vq8,{}),t?"View on Map":"Select on Map"]}),t&&(0,V.jsxs)(ye,{children:[(0,V.jsx)(we,{children:"Selected Location:"}),(0,V.jsx)(je,{children:t.address||`${t.latitude}, ${t.longitude}`}),t.latitude&&t.longitude&&(0,V.jsx)(Ce,{href:`https://www.google.com/maps?q=${t.latitude},${t.longitude}`,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]}),l&&(0,V.jsx)($e,{children:l}),i&&!t&&(0,V.jsx)($e,{children:"Please select a location"})]})}const ze=i.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`,Te=i.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,Le=i.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,_e=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 0;
  position: relative;
`,Se=i.Ay.label`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Ne=i.Ay.input`
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
`,Ee=i.Ay.textarea`
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
`,Be=i.Ay.span`
  color: #ff4444;
  font-size: 12px;
  display: block;
`,De=i.Ay.p`
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.85;
`;function Ie(e){let{formData:o,updateFormData:t,errors:n,restaurantName:a,restaurant:l,activeLanguage:d="en"}=e;const s=(0,i.DP)(),[p,x]=(0,r.useState)([]),[u,g]=(0,r.useState)(!1),m=(0,r.useRef)(!1),b=(e,o)=>"ar"===d?o:e,v=(0,r.useMemo)((()=>{try{return null!==l&&void 0!==l&&l.features?JSON.parse(l.features):{}}catch{return{}}}),[null===l||void 0===l?void 0:l.features]).google_maps_integrated&&(null===l||void 0===l?void 0:l.google_maps_api_key)||null,y=(0,r.useMemo)((()=>({control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:s.mainColor||s.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:s.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?s.categoryUnActive||"#ffffff":o.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})})),[s]),w=(0,r.useMemo)((()=>[{value:"__manual__",label:0===p.length?b("No saved addresses \u2014 type below","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u2014 \u0627\u0643\u062a\u0628 \u0623\u062f\u0646\u0627\u0647"):b("Type address manually","\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u062f\u0648\u064a\u0627\u064b")},...p.map((e=>({value:String(e.id),label:`${e.label||b("Address","\u0639\u0646\u0648\u0627\u0646")}${e.is_default?` (${b("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")})`:""} \u2014 ${e.full_address.length>56?`${e.full_address.slice(0,56)}\u2026`:e.full_address}`})))]),[p,d]),j=(0,r.useMemo)((()=>{if(null==o.selectedAddressId)return w[0]||null;const e=String(o.selectedAddressId);return w.find((o=>o.value===e))||w[0]||null}),[w,o.selectedAddressId]);(0,r.useEffect)((()=>{if("Delivery"!==o.deliveryType||!a)return void x([]);const e=(0,f.wU)(a);if(!e)return void x([]);let t=!1;return g(!0),c.A.get(h.Qf,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:o}=e;t||x(o.addresses||[])})).catch((()=>{t||x([])})).finally((()=>{t||g(!1)})),()=>{t=!0}}),[o.deliveryType,a]),(0,r.useEffect)((()=>{"Delivery"!==o.deliveryType&&(m.current=!1)}),[o.deliveryType]),(0,r.useEffect)((()=>{if("Delivery"!==o.deliveryType)return;if(!p.length||m.current)return;const e=p.find((e=>e.is_default));e&&!String(o.fullAddress||"").trim()&&(m.current=!0,t({selectedAddressId:e.id,fullAddress:e.full_address}))}),[p,o.deliveryType,o.fullAddress,t]);const C=e=>{const{name:o,value:r}=e.target;t("fullAddress"!==o?{[o]:r}:{[o]:r,selectedAddressId:null})};return(0,V.jsxs)(ze,{children:[(0,V.jsx)(Te,{children:b("Your Information","\u0628\u064a\u0627\u0646\u0627\u062a\u0643")}),(0,V.jsx)(Le,{children:b("Please provide your contact details to complete the order","\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628")}),(0,V.jsxs)(_e,{children:[(0,V.jsx)(Se,{children:b("Full Name *","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,V.jsx)(Ne,{type:"text",name:"fullName",value:o.fullName,onChange:C,placeholder:b("Enter your full name","\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644"),hasError:!!n.fullName}),n.fullName&&(0,V.jsx)(Be,{children:n.fullName})]}),(0,V.jsxs)(_e,{children:[(0,V.jsx)(Se,{children:b("Phone Number *","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 *")}),(0,V.jsx)(Ne,{type:"tel",name:"phoneNumber",value:o.phoneNumber,onChange:C,placeholder:b("Enter your phone number","\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643"),hasError:!!n.phoneNumber}),n.phoneNumber&&(0,V.jsx)(Be,{children:n.phoneNumber})]}),"Delivery"===o.deliveryType&&(0,V.jsxs)(V.Fragment,{children:[(0,f.wU)(a)&&(0,V.jsxs)(_e,{children:[(0,V.jsxs)(Se,{children:[b("Saved address","\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0641\u0648\u0638"),u?` (${b("loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")})`:""]}),(0,V.jsx)(xe,{children:(0,V.jsx)(Z.Ay,{value:j,onChange:e=>{if(!e||"__manual__"===e.value)return void t({selectedAddressId:null});const o=parseInt(e.value,10),r=p.find((e=>e.id===o));r&&t({selectedAddressId:o,fullAddress:r.full_address})},options:w,isSearchable:!1,isDisabled:u,styles:y,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed",isRtl:"ar"===d})}),(0,V.jsx)(De,{children:b("Add or edit addresses from the account menu (person icon) \u2192 Addresses.","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062d\u0633\u0627\u0628 (\u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0634\u062e\u0635) \u2190 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646.")})]}),v&&(0,V.jsxs)(_e,{children:[(0,V.jsx)(Se,{children:b("Delivery Location *","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 *")}),(0,V.jsx)(Ae,{onLocationSelect:e=>{t({selectedLocation:e,fullAddress:e.address||`${e.latitude}, ${e.longitude}`})},selectedLocation:o.selectedLocation,hasError:!!n.fullAddress&&!o.selectedLocation,googleMapsApiKey:v,activeLanguage:d})]}),(0,V.jsxs)(_e,{children:[(0,V.jsx)(Se,{children:b("Full Address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,V.jsx)(Ee,{name:"fullAddress",value:o.fullAddress,onChange:C,placeholder:b("Enter your delivery address","\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),hasError:!!n.fullAddress,rows:"3"}),n.fullAddress&&(0,V.jsx)(Be,{children:n.fullAddress})]})]}),"DineIn"===o.deliveryType&&(0,V.jsxs)(_e,{children:[(0,V.jsx)(Se,{children:b("Table Number *","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 *")}),(0,V.jsx)(Ne,{type:"number",name:"tableNumber",value:o.tableNumber,onChange:C,placeholder:b("Enter table number","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629"),hasError:!!n.tableNumber}),n.tableNumber&&(0,V.jsx)(Be,{children:n.tableNumber})]}),(0,V.jsxs)(_e,{children:[(0,V.jsx)(Se,{children:b("Special Notes (Optional)","\u0645\u0644\u0627\u062d\u0638\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,V.jsx)(Ee,{name:"note",value:o.note,onChange:C,placeholder:b("Any special instructions or notes\u2026","\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u2026"),rows:"3"})]})]})}const Pe=i.Ay.div`
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
`,Ue=i.Ay.div`
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,qe=i.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 12px;
`,Re=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  gap: 12px;
`,Fe=i.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#666"};
  flex: 1;
`,Oe=i.Ay.div`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  text-align: right;
  flex: 1;
  word-break: break-word;
`,Ye=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,Me=i.Ay.div`
  padding: 8px 0;
`,Xe=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,We=i.Ay.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`,He=i.Ay.div`
  height: 1px;
  background: ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  margin: 12px 0;
`,Ve=i.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-align: right;
`;function Je(e){let{formData:o,restaurant:t,activeLanguage:r}=e;const{restaurantName:i}=(0,p.g)(),n=window.location.hostname.split(".")[0],a="menugic"!==n&&"localhost"!==n&&"www"!==n?n:i,l=(0,s.d4)((e=>e.cart[a]||[])),d=l.reduce(((e,o)=>e+o.price*o.quantity),0);let c="";switch(null===t||void 0===t?void 0:t.currency){case"dollar":c="$";break;case"lb":c="L.L.";break;case"gram":c="g";break;case"kilogram":c="kg";break;default:c=""}return(0,V.jsxs)(Pe,{children:[(0,V.jsx)(qe,{children:"Review Your Order"}),(0,V.jsxs)(Ue,{children:[(0,V.jsx)(qe,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Items"}),(0,V.jsx)(Ye,{children:l.map((e=>{var o,t;return(0,V.jsx)(Me,{children:(0,V.jsxs)(Xe,{children:[(0,V.jsx)(We,{src:(0,y.V)(null===(o=e.images)||void 0===o||null===(t=o[0])||void 0===t?void 0:t.url),alt:"en"===r?e.en_name:e.ar_name}),(0,V.jsxs)(Oe,{style:{flex:2},children:[e.quantity,"x"," ",(0,V.jsx)("strong",{children:"en"===r?e.en_name:e.ar_name})]}),(0,V.jsx)(Oe,{children:(0,g.T)(e.price*e.quantity,c)})]})},e.uniqueId)}))}),(0,V.jsx)(He,{}),(0,V.jsxs)(Re,{children:[(0,V.jsx)(Fe,{children:"Total:"}),(0,V.jsx)(Ve,{children:(0,g.T)(d,c)})]})]}),(0,V.jsxs)(Ue,{children:[(0,V.jsx)(qe,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Details"}),(0,V.jsxs)(Re,{children:[(0,V.jsx)(Fe,{children:"Order Type:"}),(0,V.jsx)(Oe,{children:o.deliveryType})]}),o.selectedBranch&&(0,V.jsxs)(Re,{children:[(0,V.jsx)(Fe,{children:"Branch:"}),(0,V.jsx)(Oe,{children:o.selectedBranch.name})]}),o.selectedRegion&&(0,V.jsxs)(Re,{children:[(0,V.jsx)(Fe,{children:"Region:"}),(0,V.jsx)(Oe,{children:o.selectedRegion})]})]}),(0,V.jsxs)(Ue,{children:[(0,V.jsx)(qe,{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact Information"}),(0,V.jsxs)(Re,{children:[(0,V.jsx)(Fe,{children:"Name:"}),(0,V.jsx)(Oe,{children:o.fullName})]}),(0,V.jsxs)(Re,{children:[(0,V.jsx)(Fe,{children:"Phone:"}),(0,V.jsx)(Oe,{children:o.phoneNumber})]}),"Delivery"===o.deliveryType&&o.fullAddress&&(0,V.jsxs)(Re,{children:[(0,V.jsx)(Fe,{children:"Address:"}),(0,V.jsx)(Oe,{children:o.fullAddress})]}),"DineIn"===o.deliveryType&&o.tableNumber&&(0,V.jsxs)(Re,{children:[(0,V.jsx)(Fe,{children:"Table Number:"}),(0,V.jsx)(Oe,{children:o.tableNumber})]}),o.note&&(0,V.jsxs)(Re,{children:[(0,V.jsx)(Fe,{children:"Notes:"}),(0,V.jsx)(Oe,{children:o.note})]})]})]})}const Qe=i.Ay.div`
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
`,Ge=i.Ay.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,Ke=i.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`,Ze=(0,i.Ay)(Ge)`
  margin-bottom: 0;
  flex: 1;
`,eo=i.Ay.button`
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
`,oo=i.Ay.div`
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
`,to=i.Ay.div`
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
`,ro=i.Ay.div`
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
`,io=i.Ay.div`
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
`,no=i.Ay.div`
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
`,ao=i.Ay.button`
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
`,lo=[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"review",label:"Review",number:4}];function so(e){var o;let{popupHandler:t,restaurant:i}=e;const{restaurantName:n}=(0,p.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n,d=(0,s.d4)((e=>e.cart[l]||[])),y=(0,s.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[l])||void 0===t?void 0:t.activeLanguage)||"en"})),w=(0,s.wA)(),[j,C]=(0,r.useState)(0),[$,A]=(0,r.useState)({deliveryType:"",selectedBranch:(null===i||void 0===i||null===(o=i.branches)||void 0===o?void 0:o[0])||null,selectedRegion:"",regions:[],fullName:"",phoneNumber:"",fullAddress:"",selectedAddressId:null,selectedLocation:null,tableNumber:"",note:""}),[k,z]=(0,r.useState)({}),{handleApiCallAsync:T,isPending:L}=(0,u.h)({onSuccess:()=>{}});(0,r.useEffect)((()=>{(async()=>{const e=(0,f.wU)(l);if(e)try{const{data:o}=await c.A.get(h.EY,{headers:{Authorization:`Bearer ${e}`}});A((e=>({...e,fullName:o.full_name||e.fullName,phoneNumber:o.phone_number||e.phoneNumber})))}catch{}})()}),[l]),(0,r.useEffect)((()=>{if(null!==i&&void 0!==i&&i.features){const e=JSON.parse(i.features),o=Object.entries(e).filter((e=>{let[o,t]=e;return!0===t})).map((e=>{let[o]=e;return"delivery_order"===o?"Delivery":"takeaway_order"===o?"TakeAway":"dinein_order"===o?"DineIn":null})).filter(Boolean);1===o.length&&A((e=>({...e,deliveryType:o[0]})))}}),[i]);const _=e=>{A((o=>({...o,...e})));const o=Object.keys(e);z((e=>{const t={...e};return o.forEach((e=>{t[e]&&delete t[e]})),t}))},S=e=>{const o={};if(1===e){var t;if($.deliveryType||(o.deliveryType="Order Type is required."),!$.selectedBranch&&(null===i||void 0===i||null===(t=i.branches)||void 0===t?void 0:t.length)>0){var r;(null===i||void 0===i||null===(r=i.branches)||void 0===r?void 0:r.some((e=>e.is_online)))||(o.branch="Branch is required.")}"Delivery"===$.deliveryType&&$.selectedBranch&&Array.isArray($.regions)&&$.regions.length>0&&!$.selectedRegion&&(o.region="Region is required.")}else 2===e&&($.fullName||(o.fullName="Full Name is required."),$.phoneNumber||(o.phoneNumber="Phone Number is required."),"Delivery"!==$.deliveryType||$.fullAddress||(o.fullAddress="Full Address is required for delivery."),"DineIn"!==$.deliveryType||$.tableNumber||(o.tableNumber="Table Number is required."));return z(o),0===Object.keys(o).length};return(0,V.jsxs)(Qe,{children:[(0,V.jsxs)(Ke,{children:[(0,V.jsx)(Ze,{children:lo[j].label}),(0,V.jsx)(eo,{onClick:()=>t(null),"aria-label":"Close cart",children:"\u2715"})]}),(0,V.jsx)(oo,{children:lo.map(((e,o)=>(0,V.jsxs)(to,{active:o<=j,children:[(0,V.jsx)(ro,{active:o<=j,completed:o<j,children:o<j?"\u2713":e.number}),(0,V.jsx)("span",{children:e.label})]},e.id)))}),(0,V.jsx)(io,{children:(()=>{switch(j){case 0:return(0,V.jsx)(K,{formData:$,updateFormData:_,restaurant:i,activeLanguage:y});case 1:return(0,V.jsx)(ge,{formData:$,updateFormData:_,restaurant:i,errors:k,setErrors:z});case 2:return(0,V.jsx)(Ie,{formData:$,updateFormData:_,restaurant:i,errors:k,restaurantName:l,activeLanguage:y});case 3:return(0,V.jsx)(Je,{formData:$,restaurant:i,activeLanguage:y});default:return null}})()}),(0,V.jsxs)(no,{children:[j>0&&(0,V.jsx)(ao,{onClick:()=>{j>0&&C(j-1)},variant:"secondary",children:"Back"}),j<lo.length-1?(0,V.jsx)(ao,{onClick:()=>{if(S(j)){if(0===j&&null!==i&&void 0!==i&&i.id){var e;const o=(null===(e=$.selectedBranch)||void 0===e?void 0:e.id)||null;(0,v.trackCheckoutStart)(i.id,o,$.deliveryType||null)}j<lo.length-1&&C(j+1)}},variant:"primary",children:"Next"}):(0,V.jsx)(ao,{onClick:async()=>{var e,o,r,n;if(!S(2))return;let a="";switch(null===i||void 0===i?void 0:i.currency){case"dollar":a="$";break;case"lb":a="L.L.";break;case"gram":a="g";break;case"kilogram":a="kg"}let s=0,p="";p+=`*New Order - ${$.deliveryType}*\n`,p+="--------------------\n\n",p+="*Items:*\n",d.forEach(((e,o)=>{const t=("ar"===y?e.ar_name:e.en_name||"").trim(),r=("ar"===y?e.category.ar_category:e.category.en_category||"").trim(),i=e.price*e.quantity;s+=i,p+=`${o+1}. *${t}*\n`,p+=`    ${r}\n`,p+=`    ${e.quantity}x ${e.price} ${a} = *${i} ${a}*\n`,e.formData&&(p+=(0,b.Ve)(e,"ar"===y?"ar":"en")),e.instruction&&(p+=`    > _${e.instruction}_\n`),p+="\n"})),p+="--------------------\n",p+=`*Total: ${(0,g.T)(s,a)}*\n\n`,p+="*Customer:*\n",p+=`- ${$.fullName}\n`,p+=`- ${$.phoneNumber}\n`,$.selectedRegion&&(p+=`- Region: ${$.selectedRegion}\n`);let c="";"Delivery"===$.deliveryType&&(p+="\n*Delivery Address:*\n",p+=`${$.fullAddress}\n`,$.selectedLocation&&(c=`https://www.google.com/maps?q=${$.selectedLocation.latitude},${$.selectedLocation.longitude}`)),"DineIn"===$.deliveryType&&(p+=`- Table: #${$.tableNumber}\n`),$.note&&(p+=`\n*Note:* _${$.note}_\n`),c&&(p+=`\n${c}\n`);const u=null!==(e=$.selectedBranch)&&void 0!==e&&e.whatsapp_number?(0,m.JW)($.selectedBranch.whatsapp_number,null===i||void 0===i?void 0:i.country_code):i.phone_number,h=[...d.map((e=>{var o;return{id:e.id,quantity:e.quantity,branch_id:null===(o=$.selectedBranch)||void 0===o?void 0:o.id,restaurant_id:i.id}}))],f=[...d.map((e=>({product_id:e.id,product_name:"en"===y?e.en_name:e.ar_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];T({products:h,restaurant_id:i.id,branch_id:null===(o=$.selectedBranch)||void 0===o?void 0:o.id,delivery_type:$.deliveryType,customer_name:$.fullName,customer_phone:$.phoneNumber,customer_address:"Delivery"===$.deliveryType?$.fullAddress:null,customer_latitude:(null===(r=$.selectedLocation)||void 0===r?void 0:r.latitude)||null,customer_longitude:(null===(n=$.selectedLocation)||void 0===n?void 0:n.longitude)||null,table_number:"DineIn"===$.deliveryType?$.tableNumber:null,note:$.note,items:f,subtotal:s,total:s,currency:i.currency},l).then((e=>{if(null!==i&&void 0!==i&&i.id){var o,t,r;const n=(null===(o=$.selectedBranch)||void 0===o?void 0:o.id)||null;(0,v.trackOrderPlaced)(i.id,(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.order)||void 0===r?void 0:r.id)||null,$.deliveryType,s,n,{items:f,customerName:$.fullName})}})).catch((e=>console.error("Order creation failed:",e))),(0,m.JT)(u,p),w((0,x.sX)(l)),t(null)},variant:"primary",disabled:L,children:L?"Submitting...":"Submit Order"})]})]})}function po(e){let{restaurant:o,showPopup:t,popupHandler:i=(()=>{})}=e;const{restaurantName:n}=(0,p.g)(),a=window.location.hostname.split(".")[0],c="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n,x=(0,s.d4)((e=>e.cart[c]||[])),u=(0,s.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[c])||void 0===t?void 0:t.activeLanguage)||"en"})),h=0===x.length;(0,r.useEffect)((()=>{const e=()=>{i(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);return(0,V.jsx)(l,{showPopup:t,children:h?(0,V.jsx)(d,{children:"en"===u?"Your cart is empty":"\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0641\u0627\u0631\u063a\u0629"}):(0,V.jsx)(so,{popupHandler:i,restaurant:o})})}},85327:(e,o,t)=>{t.d(o,{A:()=>z});var r=t(82483),i=t(41190),n=t(10448);const a=i.Ay.div`
  position: fixed;
  bottom: ${e=>"contact"===e.showPopup?"0px":"-100%"};
  min-height: 60vh;
  max-height: 90vh;
  background-color: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.popupbackgroundColor)||"#ffffff"}};
  width: 100%;
  transition: all 0.8s ease-in-out;
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  overflow-y: auto;
`,l=(0,i.Ay)(n.WQq)`
  font-size: 24px;
  position: absolute;
  top: 30px;
  right: 20px;
  cursor: pointer;
  color: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.popupTextColor)||"#333333"}};
  z-index: 10;

  &:hover {
    opacity: 0.7;
  }
`,d=i.Ay.h2`
  font-size: 28px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 30px;
  color: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.popupTextColor)||"#333333"}};
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,s=i.Ay.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,p=i.Ay.div`
  width: 100%;
`,c=i.Ay.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.popupTextColor)||"#333333"}};
  margin-bottom: 20px;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,x=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,u=i.Ay.div`
  background: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.categoryUnActive)||"#ffffff"}};
  border-radius: 16px;
  padding: 12px 24px;
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
  gap: 16px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${e=>"ar"===e.activeLanguage?"right: 0;":"left: 0;"}
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||"#007bff"}} 0%, ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||"#0056b3"}} 100%);
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
  
  @media (min-width: 768px) {
    padding: 24px 28px;
  }
`,h=i.Ay.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.textColor)||"#1a1a1a"}};
  margin: 0;
  text-align: left;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  letter-spacing: -0.02em;
  line-height: 1.3;
  flex: 1;
  
  @media (min-width: 768px) {
    font-size: 22px;
  }
`,f=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: nowrap;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    gap: 16px;
  }
`,g=i.Ay.button`
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
  text-decoration: none;
  
  background: ${e=>{var o;return e.whatsapp?"rgba(37, 211, 102, 0.12)":e.location||e.map?"rgba(0, 123, 255, 0.12)":null!==(o=e.theme)&&void 0!==o&&o.mainColor?`${e.theme.mainColor}12`:"rgba(0, 123, 255, 0.12)"}};
  
  color: ${e=>{var o,t;return e.whatsapp?"#25D366":e.location||e.map?(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||"#007bff":(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    background: ${e=>{var o,t;return e.whatsapp?"rgba(37, 211, 102, 0.2)":e.location||e.map?null!==(o=e.theme)&&void 0!==o&&o.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.2)":null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.2)"}};
    box-shadow: 0 4px 12px ${e=>{var o;return e.whatsapp?"rgba(37, 211, 102, 0.3)":null!==(o=e.theme)&&void 0!==o&&o.mainColor?`${e.theme.mainColor}30`:"rgba(0, 123, 255, 0.3)"}};
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  @media (min-width: 768px) {
    width: 52px;
    height: 52px;
    font-size: 22px;
  }
`,m=(i.Ay.div`
  width: 100%;
`,i.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 100%;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    gap: 20px;
  }
`),b=i.Ay.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px 16px;
  background: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.categoryUnActive)||"#ffffff"}};
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    background: ${e=>{var o;return(null===(o=e.theme)||void 0===o?void 0:o.categoryUnActive)||"#ffffff"}};
  }
`,v=i.Ay.div`
  font-size: 32px;
  color: ${e=>{var o,t,r,i,n,a;return null!==(o=e.platform)&&void 0!==o&&o.toLowerCase().includes("facebook")?"#1877F2":null!==(t=e.platform)&&void 0!==t&&t.toLowerCase().includes("instagram")?"#E4405F":null!==(r=e.platform)&&void 0!==r&&r.toLowerCase().includes("twitter")?"#1DA1F2":null!==(i=e.platform)&&void 0!==i&&i.toLowerCase().includes("whatsapp")?"#25D366":null!==(n=e.platform)&&void 0!==n&&n.toLowerCase().includes("tiktok")?"#000000":(null===(a=e.theme)||void 0===a?void 0:a.mainColor)||"#007bff"}};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;var y=t(22829),w=t(71481),j=t(93376),C=t(91965),$=t(67059),A=t(56723);const k=e=>{const o=(null===e||void 0===e?void 0:e.toLowerCase())||"";return o.includes("facebook")?(0,A.jsx)(w.iYk,{}):o.includes("instagram")?(0,A.jsx)(w.ao$,{}):o.includes("tiktok")?(0,A.jsx)(w.kkU,{}):o.includes("twitter")?(0,A.jsx)(w.feZ,{}):o.includes("linkedin")?(0,A.jsx)(w.QEs,{}):o.includes("youtube")?(0,A.jsx)(w.Vk6,{}):o.includes("whatsapp")?(0,A.jsx)(w.EcP,{}):(0,A.jsx)(w.f35,{})};function z(e){let{showPopup:o,popupHandler:t,restaurant:i}=e;const{restaurantName:n}=(0,j.g)(),z=window.location.hostname.split(".")[0],T="menugic"!==z&&"localhost"!==z&&"www"!==z?z:n,L=(0,C.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[T])||void 0===t?void 0:t.activeLanguage)||"en"})),_=(null===i||void 0===i?void 0:i.branches)||[];let S={},N=!1;if(null!==i&&void 0!==i&&i.social_media)try{S="string"===typeof i.social_media?JSON.parse(i.social_media):i.social_media,N=Object.keys(S).length>0}catch(E){S={}}return!N&&null!==i&&void 0!==i&&i.socialMedia&&Array.isArray(i.socialMedia)&&(i.socialMedia.forEach((e=>{if(e.platform&&e.link){const o=e.platform.toLowerCase();S[o]=e.link.startsWith("http")?e.link:`https://${e.link}`}})),N=Object.keys(S).length>0),(0,r.useEffect)((()=>{const e=()=>{t(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,A.jsxs)(a,{showPopup:o,children:[(0,A.jsx)(l,{onClick:()=>{t(null)}}),(0,A.jsx)(d,{activeLanguage:L,children:"en"===L?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"}),(0,A.jsxs)(s,{activeLanguage:L,children:[_.length>0&&(0,A.jsxs)(p,{children:[(0,A.jsx)(c,{activeLanguage:L,children:"en"===L?"Our Locations":"\u0645\u0648\u0627\u0642\u0639\u0646\u0627"}),(0,A.jsx)(x,{children:_.map(((e,o)=>(0,A.jsxs)(u,{activeLanguage:L,children:[(0,A.jsx)(h,{activeLanguage:L,children:e.name}),(0,A.jsxs)(f,{activeLanguage:L,children:[e.phone_number&&(0,A.jsx)(g,{as:"a",href:`tel:${e.phone_number.replace(/\s/g,"")}`,phone:!0,activeLanguage:L,children:(0,A.jsx)(w.Cab,{})}),e.whatsapp_number&&(0,A.jsx)(g,{as:"a",href:`https://wa.me/${(0,$.JW)(e.whatsapp_number,null===i||void 0===i?void 0:i.country_code)}`,target:"_blank",rel:"noopener noreferrer",whatsapp:!0,activeLanguage:L,children:(0,A.jsx)(w.EcP,{})}),(e.location||e.mapLink||e.map_link)&&(0,A.jsx)(g,{as:"a",href:e.mapLink||e.map_link?`https://${e.mapLink||e.map_link}`:void 0,target:e.mapLink||e.map_link?"_blank":void 0,rel:e.mapLink||e.map_link?"noopener noreferrer":void 0,location:!0,activeLanguage:L,children:(0,A.jsx)(y.o9J,{})})]})]},o)))})]}),N&&(0,A.jsxs)(p,{children:[(0,A.jsx)(c,{activeLanguage:L,children:"en"===L?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"}),(0,A.jsx)(m,{children:Object.entries(S).map((e=>{let[o,t]=e;return t?(0,A.jsx)(b,{href:t.startsWith("http")?t:`https://${t}`,target:"_blank",rel:"noopener noreferrer",platform:o,children:(0,A.jsx)(v,{platform:o,children:k(o)})},o):null}))})]})]})]})}},24192:(e,o,t)=>{t.d(o,{A:()=>K});var r=t(82483),i=t(41190),n=t(1901),a=t(10448),l=t(71481),d=t(76143),s=t(42751);const p=i.Ay.div`
position: fixed;
bottom: ${e=>"location"==e.showPopup?"0%":"-100%"};
background-color: ${e=>e.theme.popupbackgroundColor};
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 50px;
border-top-left-radius: 50px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 5;
padding-bottom: 12vh;
`,c=(i.Ay.span`
font-size: 26px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`,i.Ay.span`
font-size: 26px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`),x=i.Ay.span`
width: 90%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 8vh;
`,u=i.Ay.div`
  margin-top: 24px;
width: 90%;
  display: flex;
  flex-direction: column;
`,h=(i.Ay.div`
display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
  

`,i.Ay.a`
font-size:14px;
 font-weight: 620;
 color:${e=>e.theme.popupTextColor}

`,i.Ay.a`
font-size:14px;
 font-weight: 620;
 color:${e=>e.theme.popupTextColor};
 text-decoration: none;


`,(0,i.Ay)(s.meu)`
font-size: 22px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}
`,(0,i.Ay)(a.IW4)`
font-size: 22px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,i.Ay)(n.gwi)`
font-size: 22px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,i.Ay)(a.WQq)`
font-size: 18px;
position: absolute;
top: 22px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`),f=i.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 13px;
font-weight: bold;

`,g=i.Ay.div`
width: 90%;
margin-top: 10px;

`,m=i.Ay.div`
margin-top: 8px;
display: flex;
flex-direction: row;
width: 90%;
align-items: center;
gap:8px;
`,b=i.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 26px;
height: 26px;
border-radius: 50%;
cursor: pointer;
`,v=(i.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 26px;
height: 26px;
border-radius: 50%;
cursor: pointer;

`,i.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 26px;
height: 26px;
border-radius: 50%;
cursor: pointer;
`),y=i.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 26px;
height: 26px;
border-radius: 50%;
cursor: pointer;
`,w=(0,i.Ay)(l.ok6)`
font-size: 16px;
color: ${e=>e.theme.popupTextColor};
`,j=((0,i.Ay)(a._8j)`
font-size: 16px;
color: ${e=>e.theme.popupTextColor};


`,(0,i.Ay)(l.ao$)`
font-size: 16px;
color: ${e=>e.theme.popupTextColor};;

`),C=(0,i.Ay)(d.mk3)`
font-size: 16px;
color: ${e=>e.theme.popupTextColor};;

`,$=i.Ay.pre`
  font-size: 12px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,A=i.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,k=(0,i.Ay)(n.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 13px;
margin-left: 5px;
margin-right: 5px;

`,z=i.Ay.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 90%;
height: 44px;
gap:18px;
margin-top: 22px;
`,T=i.Ay.button`
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
font-size: 16px;
gap:10px;
position: relative;
&:focus{
  outline: none;
}
/* overflow: hidden; */
transition: all 0.2s ease-in-out;
`,L=i.i7`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,_=i.Ay.div`
position: absolute;
width:9%;
height: 50%;
background-color:${e=>"Call"==e.activeButton?e.theme.mainColor:e.theme.popupbackgroundColor} ;
 left: 0;
 z-index: 5;

 `,S=i.Ay.div`
position: absolute;
width:1px;
height: 100%;
background-color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 right: 0;
 animation: ${L} 0.5s ease-in-out infinite; /* Infinite animation */

 `,N=i.i7`
  0% {
opacity: 0;
left: -10%;
  }
  100% {
opacity: 1;
left: 16%;

  }

`,E=i.Ay.span`
position: absolute;
 left: 16%;
 color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 animation: ${N} 0.5s ease-in-out;
 z-index: 4;

 `,B=i.i7`
  0% {
    opacity: 0;
    rotate: calc(180deg);
  }
  1000% {
    opacity: 1;
    rotate: calc(0deg);

  }
 
`,D=(0,i.Ay)(a.pte)`
color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
font-size: 13px;
position: absolute;
right: 5%;
animation: ${B} 0.7s ease-in-out;

`,I=i.i7`
  0% {
    max-height: 0px;
  }
  1000% {
    max-height: 300px;


  }
 
`,P=i.Ay.ul`
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
  max-height: 260px;
  background-color:${e=>e.theme.mainColor} ;
  color:${e=>e.theme.popupbackgroundColor};
  width: 100%;
  animation: ${I} 1s ease-in-out;
  overflow: hidden;

`,U=i.Ay.li`
  cursor: pointer;
  transition: background 0.2s;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 15px;

`,q=i.Ay.button`
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
font-size: 16px;
&:focus{
  outline: none;
};
position: relative;
`,R=i.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 16px;
font-weight: bold;

`,F=i.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`,O=i.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 44px;
`,Y=i.Ay.div`
  display: flex;
  flex-direction: row;
  width: 13px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${e=>e.theme.mainColor};
`,M=(i.Ay.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${e=>e.theme.mainColor};
`,i.Ay.div`
  width: 4px;
  height: 4px;
  position: absolute;
  border-radius: 50%;
  background-color: ${e=>e.theme.popupbackgroundColor};
`,i.Ay.a`
 font-size:13px;
 font-weight: 300;
 flex: 1;
 color: ${e=>e.theme.popupTextColor};
 display: flex;
 align-items: center;
 margin-left: 20px;
 height: 100%;

 `),X=i.Ay.div`
 width: 13px;
 height: 40px;
 top: 22px;
 position: absolute;
 left: 0;
 display: flex;
 justify-content: center;
 `,W=i.Ay.div`
 width: 2px;
 height: 100%;
 background-color: ${e=>e.theme.popupTextColor};
 opacity: 0.5;
 `;var H=t(72599),V=t(93376),J=t(91965),Q=t(67059),G=t(56723);function K(e){var o,t,i,n;let{restaurant:a,showPopup:d,popupHandler:L}=e;const{restaurantName:N}=(0,V.g)(),B=window.location.hostname.split(".")[0],I="menugic"!==B&&"localhost"!==B&&"www"!==B?B:N,K=(0,J.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[I].activeLanguage})),[Z,ee]=(0,r.useState)("");return(0,r.useEffect)((()=>{const e=()=>{L(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,G.jsxs)(p,{showPopup:d,children:[(0,G.jsx)(h,{onClick:()=>{L(null)}}),(0,G.jsx)(x,{children:(0,G.jsx)(c,{children:(oe=null===a||void 0===a?void 0:a.name,oe.replace(/\b\w/g,(function(e){return e.toUpperCase()})))})}),(0,G.jsxs)(z,{children:[(0,G.jsx)(T,{activeButton:Z,onClick:()=>{ee("Call"==Z?"":"Call")},children:"Call"!==Z?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(H._Xz,{size:"25px"}),"en"==K?"Call Now":"\u0627\u062a\u0635\u0644 \u0627\u0644\u0627\u0646"]}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(P,{activeButton:Z,children:null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.flatMap((e=>e.phone_number.split(" ").map(((o,t)=>(0,G.jsx)(U,{children:(0,G.jsxs)("a",{href:`tel:${o}`,style:{textDecoration:"none",color:"inherit"},children:[o,"  ",e.location&&(0,G.jsxs)("span",{children:["- ",e.name," "]})]})})))))}),(0,G.jsx)(_,{activeButton:Z,children:(0,G.jsx)(S,{activeButton:Z})}),(0,G.jsx)(E,{activeButton:Z,children:"en"==K?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,G.jsx)(D,{activeButton:Z})]})}),(0,G.jsx)(q,{activeButton:Z,onClick:()=>{ee("Message"==Z?"":"Message")},children:"Message"!==Z?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(l.EcP,{size:"25px"}),"en"==K?"Message":"\u0631\u0633\u0627\u0644\u0629","            "]}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(P,{activeButton:Z,children:null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.map((e=>(0,G.jsx)(U,{children:(0,G.jsxs)("a",{href:`https://wa.me/${(0,Q.JW)(null===e||void 0===e?void 0:e.whatsapp_number,null===a||void 0===a?void 0:a.country_code)}`,style:{textDecoration:"none",color:"inherit"},children:[null===e||void 0===e?void 0:e.whatsapp_number,"-",null===e||void 0===e?void 0:e.name]})})))}),(0,G.jsx)(_,{activeButton:Z,children:(0,G.jsx)(S,{activeButton:Z})}),(0,G.jsx)(E,{activeButton:Z,children:"en"==K?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,G.jsx)(D,{activeButton:Z})]})})]}),(0,G.jsxs)(u,{children:[(null===a||void 0===a||null===(i=a.branches)||void 0===i?void 0:i.name)&&(0,G.jsx)(R,{children:"Branches"}),(0,G.jsx)(F,{children:null===a||void 0===a||null===(n=a.branches)||void 0===n?void 0:n.map(((e,o)=>{var t;return e.name&&(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)(O,{children:[o!==(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)-1&&(0,G.jsx)(X,{index:o,children:(0,G.jsx)(W,{})}),(0,G.jsx)(Y,{children:(0,G.jsx)(s.sIY,{})}),(0,G.jsx)(M,{href:`https://${null===e||void 0===e?void 0:e.mapLink}`,children:e.location})]})})}))})]}),(0,G.jsx)(g,{children:(0,G.jsx)(f,{children:"en"==K?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"})}),(0,G.jsxs)(m,{children:[a.socialMedia.find((e=>"Instagram"==e.platform))&&(0,G.jsx)(b,{href:`https://${a.socialMedia.find((e=>"Instagram"==e.platform)).link}`,children:(0,G.jsx)(j,{})}),a.socialMedia.find((e=>"Facebook"==e.platform))&&(0,G.jsx)(y,{href:`https://${a.socialMedia.find((e=>"Facebook"==e.platform)).link}`,children:(0,G.jsx)(w,{})}),a.socialMedia.find((e=>"Tiktok"==e.platform))&&(0,G.jsx)(v,{href:`https://${a.socialMedia.find((e=>"Tiktok"==e.platform)).link}`,children:(0,G.jsx)(C,{})})]}),(0,G.jsxs)($,{children:["Copyright",(0,G.jsx)(k,{})," ",(new Date).getFullYear()," "," ",(0,G.jsx)(A,{href:"https://www.menugic.com",children:"menugic.com"})]})]});var oe}},88564:(e,o,t)=>{t.d(o,{A:()=>N});var r=t(82483),i=t(42751),n=t(10448),a=t(1901),l=t(41235),d=t(41190);const s=d.Ay.div`
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
`,p=d.Ay.div`
width: 80%;
display: flex;
flex-direction: column;
padding-top:40px;
`,c=d.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,x=(d.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,(0,d.Ay)(a.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`),u=(0,d.Ay)(n.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`,h=d.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor}

`,f=d.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor};
margin-top: 20px;
`,g=d.Ay.div`
display: flex;
flex-direction: row;
gap:15px;
margin-top: 20px;


`,m=d.Ay.div`
display: flex;
flex-direction: column;
gap:5px;
align-items: center;
justify-content: center;

`,b=d.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #8bffb83d;
`,v=(0,d.Ay)(i.EcP)`
font-size: 24px;
color:#51C288;
`,y=d.Ay.div`
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

background-size: 300% 300%; /* Creates a smooth animated effect */`,w=(0,d.Ay)(i.ao$)`
font-size: 24px;
/* color:#51C288; */
color:#5c595b;



`,j=d.Ay.span`
font-size: 10px;
color:${e=>e.theme.popupTextColor}

`,C=d.Ay.div`
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

`,$=d.Ay.div`
width: 85%;
overflow: hidden;

`,A=d.Ay.span`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
white-space: nowrap;
`,k=(0,d.Ay)(i.zU_)`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`,z=(0,d.Ay)(l.RXm)`
font-size: 18px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`;var T=t(93376),L=t(99891),_=t(91965),S=t(56723);function N(e){let{showPopup:o,popupHandler:t,activeCategory:i}=e;const{restaurantName:n}=(0,T.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n;(0,_.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[l].activeLanguage}));(0,r.useEffect)((()=>{const e=()=>{t(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const[d,N]=(0,r.useState)(!1);return(0,S.jsxs)(s,{showPopup:o,children:[(0,S.jsx)(u,{onClick:()=>{t(null)}}),(0,S.jsxs)(p,{children:[(0,S.jsx)(h,{children:"Share Category"}),(0,S.jsxs)(g,{children:[(0,S.jsxs)(m,{children:[(0,S.jsx)(b,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname,t=`https://api.whatsapp.com/send?text=${encodeURIComponent(o+"?categoryId="+e)}`;window.open(t,"_blank")})(i),children:(0,S.jsx)(v,{})}),(0,S.jsx)(j,{children:"Whatsapp"})]}),(0,S.jsxs)(m,{children:[(0,S.jsx)(y,{onClick:()=>{window.open("https://www.instagram.com/direct/inbox/","_blank")},children:(0,S.jsx)(w,{})}),(0,S.jsx)(j,{children:"Instagram"})]})]}),(0,S.jsx)(f,{children:"Get Link"}),(0,S.jsxs)(C,{children:[(0,S.jsx)($,{children:(0,S.jsx)(A,{children:(e=>{if(e){return window.location.origin+window.location.pathname+"?categoryId="+e}})(i)})}),d?(0,S.jsx)(z,{}):(0,S.jsx)(k,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname;navigator.clipboard.writeText(o+"?categoryId="+e),N(!0),setTimeout((()=>{N(!1)}),4e3)})(i)})]})]}),(0,S.jsxs)(c,{children:["Copyright",(0,S.jsx)(x,{}),"2024 ",(0,S.jsx)(L.N_,{href:"https://www.menugic.com",children:"menugic.com"})]})]})}}}]);
//# sourceMappingURL=831.f748a635.chunk.js.map