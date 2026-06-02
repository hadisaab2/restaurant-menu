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
`),m=a.Ay.div`
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
`,f=a.Ay.div`
  font-size: 20px;
  color: ${e=>{var o,t,r;return(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||(null===(t=e.theme)||void 0===t?void 0:t.maincolor)||(null===(r=e.theme)||void 0===r?void 0:r.sidebartext)||"#333333"}};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  flex-shrink: 0;
`,g=a.Ay.span`
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
`;var j=t(71481),C=t(93376),$=t(99891),A=t(91965),k=t(58821),z=t(56723);function T(e){let{activeCategory:o,setactiveCategory:t,categories:i,showSidebar:n,setshowSidebar:a,setcarouselPosition:T,onHomeClick:L,onCategoryClick:_,onFeedbackClick:S,onContactClick:N,onBranchesClick:E,branches:B}=e;const{restaurantName:D}=(0,C.g)(),[I,U]=(0,$.ok)(),P=window.location.hostname.split(".")[0],q="menugic"!==P&&"localhost"!==P&&"www"!==P?P:D,R=(0,A.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[q]})),[F,O]=(0,r.useState)(!0);return(0,z.jsxs)(l,{showSidebar:n,children:[(0,z.jsx)(d,{onClick:()=>{a(!1)},showSidebar:n}),(0,z.jsxs)(s,{children:[(0,z.jsx)(u,{}),L&&(0,z.jsx)(h,{children:(0,z.jsxs)(m,{onClick:L,children:[(0,z.jsx)(f,{children:(0,z.jsx)(j.rQ8,{})}),(0,z.jsx)(g,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:"en"===(null===R||void 0===R?void 0:R.activeLanguage)?"Homepage":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})]})}),(0,z.jsxs)(h,{children:[(0,z.jsxs)(m,{onClick:()=>O(!F),children:[(0,z.jsx)(f,{children:(0,z.jsx)(j.svy,{})}),(0,z.jsx)(g,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:"en"===(null===R||void 0===R?void 0:R.activeLanguage)?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a"}),(0,z.jsx)(b,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:F?(0,z.jsx)(j.Ucs,{}):(0,z.jsx)(j.Vr3,{})})]}),F&&(0,z.jsx)(v,{children:(0,z.jsx)(y,{children:null===i||void 0===i?void 0:i.sort(((e,o)=>o.priority-e.priority)).map(((e,r)=>(0,z.jsxs)(w,{onClick:()=>((e,o)=>{_?_(e):(t(e),T(o)),a(!1)})(e.id,r),active:o===e.id,children:["horizantal-withoutIcon"!=R.category_type&&(0,z.jsx)(c,{activeCategory:o,categoryId:e.id,children:(0,z.jsx)(x,{src:(0,k.V)(e.image_url)})}),(0,z.jsx)(p,{categoryType:"horizantal-withoutIcon"==R.category_type,activeCategory:o,categoryId:e.id,children:"en"==(null===R||void 0===R?void 0:R.activeLanguage)?e.en_category:e.ar_category})]},r)))})})]}),(0,z.jsx)(h,{children:(0,z.jsxs)(m,{disabled:!0,children:[(0,z.jsx)(f,{children:(0,z.jsx)(j.IoZ,{})}),(0,z.jsx)(g,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:"en"===(null===R||void 0===R?void 0:R.activeLanguage)?"Orders (Coming Soon)":"\u0627\u0644\u0637\u0644\u0628\u0627\u062a (\u0642\u0631\u064a\u0628\u0627\u064b)"})]})}),(0,z.jsx)(h,{children:(0,z.jsxs)(m,{onClick:()=>{S&&S(),a(!1)},children:[(0,z.jsx)(f,{children:(0,z.jsx)(j.g5D,{})}),(0,z.jsx)(g,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:"en"===(null===R||void 0===R?void 0:R.activeLanguage)?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"})]})}),B&&B.length>0&&(0,z.jsx)(h,{children:(0,z.jsxs)(m,{onClick:()=>{E&&E(),a(!1)},children:[(0,z.jsx)(f,{children:(0,z.jsx)(j.vq8,{})}),(0,z.jsx)(g,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:"en"===(null===R||void 0===R?void 0:R.activeLanguage)?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"})]})}),(0,z.jsx)(h,{children:(0,z.jsxs)(m,{onClick:()=>{N&&N(),a(!1)},children:[(0,z.jsx)(f,{children:(0,z.jsx)(j.toK,{})}),(0,z.jsx)(g,{activeLanguage:null===R||void 0===R?void 0:R.activeLanguage,children:"en"===(null===R||void 0===R?void 0:R.activeLanguage)?"Contact Us":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"})]})})]})]})}},50795:(e,o,t)=>{t.d(o,{A:()=>so});var r=t(82483),i=t(41190),n=t(10448),a=t(1901);const l=i.Ay.div`
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

`;var s=t(91965),p=t(93376),c=t(11222),x=t(86001),u=t(29334),h=t(81132),m=t(70268),f=t(18907),g=t(50074),b=t(81926),v=t(58821);const y=i.i7`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,w=i.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,j=i.Ay.div`
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
`,C=i.Ay.div`
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
  animation: ${y} 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`,$=i.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`,A=i.Ay.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,k=i.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`,z=i.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,T=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`,L=i.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  white-space: nowrap;
`,_=i.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}12`};
  padding: 3px 5px;
  border-radius: 20px;
`,S=i.Ay.button`
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
`,N=i.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  min-width: 20px;
  text-align: center;
`,E=i.Ay.button`
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
`,B=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,D="\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 2px 8px;\n  line-height: 1.5;\n  white-space: nowrap;\n",I=i.Ay.span`
  ${D}
  border: 1px solid ${e=>`${e.theme.popupTextColor||"#1a1a1a"}50`};
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  background: transparent;
`,U=i.Ay.span`
  ${D}
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}18`};
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}35`};
`,P=i.Ay.span`
  ${D}
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  border: 1px dashed ${e=>`${e.theme.popupTextColor||"#999"}40`};
  opacity: 0.65;
  text-decoration: line-through;
`,q=i.Ay.div`
  font-size: 10px;
  font-style: italic;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,R=i.Ay.div`
  font-size: 10px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.75;
  line-height: 1.5;
`,F=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}10`};
  border-radius: 12px;
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  margin-top: 4px;
`,O=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Y=i.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  opacity: 0.75;
`,M=i.Ay.div`
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
`,X=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.6;
  text-align: center;
`;var W=t(71481),H=t(56723);const V=["Size:","\u0627\u0644\u062d\u062c\u0645:"],Q=["Add ons:","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:"],J=["Remove:","\u0628\u062f\u0648\u0646:"];function G(e){let{restaurant:o,activeLanguage:t}=e;const r=(0,s.wA)(),{restaurantName:i}=(0,p.g)(),n=window.location.hostname.split(".")[0],a="menugic"!==n&&"localhost"!==n&&"www"!==n?n:i,l=(0,s.d4)((e=>e.cart[a]||[])),d=l.reduce(((e,o)=>e+o.price*o.quantity),0),c="ar"===t?"ar":"en",u=e=>{const o=(0,g.qh)(e,c);if(!o.length)return null;const{sizeLabel:t,addonLabels:r,removalLabels:i,legacyLines:n}=function(e){const o={sizeLabel:null,addonLabels:[],removalLabels:[],legacyLines:[]};let t=null;for(const r of e)"heading"===r.type?t=V.includes(r.text)?"size":Q.includes(r.text)?"addons":J.includes(r.text)?"removals":"legacy":"size"===t?o.sizeLabel=r.text:"addons"===t?o.addonLabels.push(r.text):"removals"===t?o.removalLabels.push(r.text):o.legacyLines.push(r.text);return o}(o),a=t||r.length||i.length;return(0,H.jsxs)(H.Fragment,{children:[a&&(0,H.jsxs)(B,{children:[t&&(0,H.jsx)(I,{children:"ar"===c?`\u0627\u0644\u062d\u062c\u0645: ${t}`:`Size: ${t}`}),r.map((e=>(0,H.jsxs)(U,{children:["+ ",e]},e))),i.map((e=>(0,H.jsx)(P,{children:e},e)))]}),n.map(((e,o)=>(0,H.jsx)(R,{children:e},o)))]})};let h="";switch(null===o||void 0===o?void 0:o.currency){case"dollar":h="$";break;case"lb":h="L.L.";break;case"gram":h="g";break;case"kilogram":h="kg";break;default:h=""}if(0===l.length)return(0,H.jsx)(w,{children:(0,H.jsx)(X,{children:"ar"===c?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"})});const m=e=>{var o;const t=null===(o=e.images)||void 0===o?void 0:o[0];return t&&t.url?(0,v.V)(t.url):""};return(0,H.jsx)(w,{children:(0,H.jsxs)(j,{children:[l.map((e=>{const o="ar"===c?e.ar_name:e.en_name,t=(0,f.T)(e.price*e.quantity,h);return(0,H.jsx)(C,{children:(0,H.jsxs)($,{children:[(0,H.jsx)(A,{src:m(e),alt:o}),(0,H.jsxs)(k,{children:[(0,H.jsx)(z,{title:o,children:o}),u(e),e.instruction&&(0,H.jsxs)(q,{children:["\ud83d\udcdd ",e.instruction]})]}),(0,H.jsxs)(T,{children:[(0,H.jsx)(L,{children:t}),(0,H.jsxs)(_,{children:[(0,H.jsx)(S,{onClick:()=>{return o=e.uniqueId,void((t=e.quantity)>1&&r((0,x.v)(a,o,t-1)));var o,t},disabled:e.quantity<=1,"aria-label":"decrease quantity",children:"\u2212"}),(0,H.jsx)(N,{children:e.quantity}),(0,H.jsx)(S,{onClick:()=>{return o=e.uniqueId,t=e.quantity,r((0,x.v)(a,o,t+1));var o,t},"aria-label":"increase quantity",children:"+"})]}),(0,H.jsx)(E,{onClick:()=>{return o=e.uniqueId,r((0,x.dt)(a,o));var o},"aria-label":"remove item",children:(0,H.jsx)(W.qbC,{})})]})]})},e.uniqueId)})),(0,H.jsx)(F,{children:(0,H.jsxs)(O,{children:[(0,H.jsx)(Y,{children:"ar"===c?"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a":"Total"}),(0,H.jsx)(M,{children:(0,f.T)(d,h)})]})})]})})}var K=t(13491);t(34304);const Z=i.Ay.div`
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

`;function ee(e){let{deliveryType:o,branches:t,selectedBranch:r,setSelectedBranch:n,setErrors:a,errors:l}=e;const d=(0,i.DP)(),s=(t||[]).map((e=>({value:e.id,label:e.name,branch:e,isDisabled:!e.has_delivery&&"Delivery"===o}))),p={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":d.mainColor||d.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==l&&void 0!==l&&l.branch?"rgba(255, 68, 68, 0.1)":d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:o.isDisabled?"#999":d.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?d.categoryUnActive||"#ffffff":o.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent",cursor:o.isDisabled?"not-allowed":"pointer",display:"flex",justifyContent:"space-between"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,H.jsx)(Z,{children:(0,H.jsx)(K.Ay,{value:s.find((e=>{var o;return(null===(o=e.branch)||void 0===o?void 0:o.id)===(null===r||void 0===r?void 0:r.id)})),onChange:e=>{e&&!e.isDisabled&&(n(e.branch),a({...l,branch:""}))},options:s,placeholder:"Select Branch",isOptionDisabled:e=>e.isDisabled,styles:p,formatOptionLabel:e=>(0,H.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,H.jsx)("span",{children:e.label}),e.isDisabled&&"Delivery"===o&&(0,H.jsx)("span",{style:{fontSize:12,color:"#999"},children:"No Delivery"})]}),menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})})}var oe=t(27320);const te=i.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`,re=(i.Ay.div`
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
`),ie=i.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`,ne=i.Ay.input`
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
`,ae=(0,i.Ay)(oe.Xj1)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.mainColor};

`,le=i.i7`
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
  animation: ${le} 1s linear infinite; /* Apply animation */
`;var de=t(89993);function se(e){var o;let{selectedBranch:t,selectedRegion:n,onRegionChange:a,setErrors:l,errors:d,onRegionsChange:s}=e;const p=(0,i.DP)(),[c,x]=(0,r.useState)(!1),[u,h]=(0,r.useState)(""),{response:m,isLoading:f}=(0,de.w)({branch_id:t.id,onSuccess:()=>{}});(0,r.useEffect)((()=>{var e;f||s((null===m||void 0===m||null===(e=m.data)||void 0===e?void 0:e.regions)||[])}),[f,m,s]),(0,r.useEffect)((()=>{a("")}),[t,a]);const g=((null===m||void 0===m||null===(o=m.data)||void 0===o?void 0:o.regions)||[]).map((e=>({value:e.region_name,label:e.region_name}))),b=g.filter((e=>e.label.toLowerCase().includes(u.toLowerCase()))),v={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==d&&void 0!==d&&d.region?"#ff4444":p.mainColor||p.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==d&&void 0!==d&&d.region?"rgba(255, 68, 68, 0.1)":p.mainColor?`${p.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:p.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==d&&void 0!==d&&d.region?"#ff4444":p.mainColor||p.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:p.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:p.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:p.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:p.categoryUnActive||"#ffffff",border:`1px solid ${p.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:p.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?p.categoryUnActive||"#ffffff":o.isFocused?p.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return!f&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(te,{children:(0,H.jsx)(K.Ay,{value:g.find((e=>e.value===n)),onMenuOpen:()=>x(!0),onMenuClose:()=>x(!1),onChange:e=>{a((null===e||void 0===e?void 0:e.value)||""),h(""),l({...d,region:""})},options:b,placeholder:"Select Region",styles:v,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})}),c&&(0,H.jsx)(re,{children:(0,H.jsxs)(ie,{children:[(0,H.jsx)(ne,{placeholder:"Search",value:u,onChange:e=>{h(e.target.value)}}),(0,H.jsx)(ae,{})]})})]})}const pe=i.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ce=i.Ay.div`
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
`,xe=i.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,ue=i.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,he=(i.Ay.select`
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
`);function me(e){var o,t;let{formData:r,updateFormData:n,restaurant:a,errors:l,setErrors:d}=e;const s=(0,i.DP)();let p={};try{p=JSON.parse((null===a||void 0===a?void 0:a.features)||"{}")}catch(u){p={}}const c=[p.delivery_order&&{value:"Delivery",label:"Delivery"},p.takeaway_order&&{value:"TakeAway",label:"Take Away"},p.dinein_order&&{value:"DineIn",label:"Dine In"}].filter(Boolean),x={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:l.deliveryType?"#ff4444":s.mainColor||s.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(l.deliveryType?"rgba(255, 68, 68, 0.1)":s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:l.deliveryType?"#ff4444":s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:s.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?s.categoryUnActive||"#ffffff":o.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,H.jsxs)(pe,{children:[(0,H.jsx)(xe,{children:"Select Order Type"}),(0,H.jsx)(ue,{children:"Choose how you would like to receive your order"}),(0,H.jsxs)(ce,{children:[(0,H.jsx)(K.Ay,{value:c.find((e=>e.value===r.deliveryType)),onChange:e=>{var o;n({deliveryType:(null===e||void 0===e?void 0:e.value)||"",selectedBranch:(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o[0])||null,selectedRegion:""}),d({})},options:c,placeholder:"Select Order Type",isSearchable:!1,styles:x,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"}),l.deliveryType&&(0,H.jsx)(he,{children:l.deliveryType})]}),(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.length)>0&&!(()=>{var e;return null===a||void 0===a||null===(e=a.branches)||void 0===e?void 0:e.some((e=>e.is_online))})()&&(0,H.jsxs)(ce,{children:[(0,H.jsx)(ee,{deliveryType:r.deliveryType,branches:null===a||void 0===a?void 0:a.branches,selectedBranch:r.selectedBranch,setSelectedBranch:e=>n({selectedBranch:e,selectedRegion:""}),setErrors:d,errors:l}),l.branch&&(0,H.jsx)(he,{children:l.branch})]}),r.selectedBranch&&"Delivery"===r.deliveryType&&Array.isArray(r.regions)&&r.regions.length>0&&(0,H.jsxs)(ce,{children:[(0,H.jsx)(se,{selectedRegion:r.selectedRegion,onRegionChange:e=>n({selectedRegion:e}),selectedBranch:1===(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)?null===a||void 0===a?void 0:a.branches[0]:r.selectedBranch,setErrors:d,errors:l,onRegionsChange:e=>n({regions:e})}),l.region&&(0,H.jsx)(he,{children:l.region})]})]})}var fe=t(16106);const ge=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,be=i.Ay.button`
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
`,ve=i.Ay.div`
  padding: 16px;
  background: ${e=>e.theme.categoryUnActive||"#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ye=i.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,we=i.Ay.div`
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  word-break: break-all;
`,je=i.Ay.a`
  font-size: 14px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-decoration: none;
  font-weight: 600;
  margin-top: 4px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`,Ce=i.Ay.div`
  color: #ff4444;
  font-size: 13px;
  margin-top: -8px;
`;function $e(e){let{onLocationSelect:o,selectedLocation:t,hasError:r,googleMapsApiKey:n,activeLanguage:a="en"}=e;const l=(0,i.DP)();return n?(0,H.jsx)(fe.A,{apiKey:n,onLocationConfirm:o,selectedLocation:t,hasError:r,theme:l,activeLanguage:a}):(0,H.jsx)(Ae,{onLocationSelect:o,selectedLocation:t,hasError:r})}function Ae(e){let{onLocationSelect:o,selectedLocation:t,hasError:i}=e;const[n,a]=(0,r.useState)(!1),[l,d]=(0,r.useState)("");return(0,H.jsxs)(ge,{children:[(0,H.jsxs)(be,{type:"button",onClick:()=>{navigator.geolocation?(a(!0),d(""),navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:r}=e.coords,i={latitude:t,longitude:r,address:`${t.toFixed(6)}, ${r.toFixed(6)}`};o(i),a(!1)}),(()=>{d("Unable to retrieve your location. Please try again."),a(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):d("Geolocation is not supported by your browser")},disabled:n,variant:"current",children:[(0,H.jsx)(W.hO$,{}),n?"Getting Location...":"Use Current Location"]}),(0,H.jsxs)(be,{type:"button",onClick:()=>{if(t){const e=`https://www.google.com/maps?q=${t.latitude},${t.longitude}`;window.open(e,"_blank")}else{const e="https://www.google.com/maps/search/?api=1";window.open(e,"_blank")}},variant:"select",children:[(0,H.jsx)(W.vq8,{}),t?"View on Map":"Select on Map"]}),t&&(0,H.jsxs)(ve,{children:[(0,H.jsx)(ye,{children:"Selected Location:"}),(0,H.jsx)(we,{children:t.address||`${t.latitude}, ${t.longitude}`}),t.latitude&&t.longitude&&(0,H.jsx)(je,{href:`https://www.google.com/maps?q=${t.latitude},${t.longitude}`,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]}),l&&(0,H.jsx)(Ce,{children:l}),i&&!t&&(0,H.jsx)(Ce,{children:"Please select a location"})]})}const ke=i.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`,ze=i.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,Te=i.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,Le=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 0;
  position: relative;
`,_e=i.Ay.label`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,Se=i.Ay.input`
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
`,Ne=i.Ay.textarea`
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
`,Ee=i.Ay.span`
  color: #ff4444;
  font-size: 12px;
  display: block;
`,Be=i.Ay.p`
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.85;
`;function De(e){let{formData:o,updateFormData:t,errors:n,restaurantName:a,restaurant:l,activeLanguage:d="en"}=e;const s=(0,i.DP)(),[p,x]=(0,r.useState)([]),[u,f]=(0,r.useState)(!1),g=(0,r.useRef)(!1),b=(e,o)=>"ar"===d?o:e,v=(0,r.useMemo)((()=>{try{return null!==l&&void 0!==l&&l.features?JSON.parse(l.features):{}}catch{return{}}}),[null===l||void 0===l?void 0:l.features]).google_maps_integrated&&(null===l||void 0===l?void 0:l.google_maps_api_key)||null,y=(0,r.useMemo)((()=>({control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:s.mainColor||s.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:s.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?s.categoryUnActive||"#ffffff":o.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})})),[s]),w=(0,r.useMemo)((()=>[{value:"__manual__",label:0===p.length?b("No saved addresses \u2014 type below","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u2014 \u0627\u0643\u062a\u0628 \u0623\u062f\u0646\u0627\u0647"):b("Type address manually","\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u062f\u0648\u064a\u0627\u064b")},...p.map((e=>({value:String(e.id),label:`${e.label||b("Address","\u0639\u0646\u0648\u0627\u0646")}${e.is_default?` (${b("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")})`:""} \u2014 ${e.full_address.length>56?`${e.full_address.slice(0,56)}\u2026`:e.full_address}`})))]),[p,d]),j=(0,r.useMemo)((()=>{if(null==o.selectedAddressId)return w[0]||null;const e=String(o.selectedAddressId);return w.find((o=>o.value===e))||w[0]||null}),[w,o.selectedAddressId]);(0,r.useEffect)((()=>{if("Delivery"!==o.deliveryType||!a)return void x([]);const e=(0,m.wU)(a);if(!e)return void x([]);let t=!1;return f(!0),c.A.get(h.Qf,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:o}=e;t||x(o.addresses||[])})).catch((()=>{t||x([])})).finally((()=>{t||f(!1)})),()=>{t=!0}}),[o.deliveryType,a]),(0,r.useEffect)((()=>{"Delivery"!==o.deliveryType&&(g.current=!1)}),[o.deliveryType]),(0,r.useEffect)((()=>{if("Delivery"!==o.deliveryType)return;if(!p.length||g.current)return;const e=p.find((e=>e.is_default));e&&!String(o.fullAddress||"").trim()&&(g.current=!0,t({selectedAddressId:e.id,fullAddress:e.full_address}))}),[p,o.deliveryType,o.fullAddress,t]);const C=e=>{const{name:o,value:r}=e.target;t("fullAddress"!==o?{[o]:r}:{[o]:r,selectedAddressId:null})};return(0,H.jsxs)(ke,{children:[(0,H.jsx)(ze,{children:b("Your Information","\u0628\u064a\u0627\u0646\u0627\u062a\u0643")}),(0,H.jsx)(Te,{children:b("Please provide your contact details to complete the order","\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628")}),(0,H.jsxs)(Le,{children:[(0,H.jsx)(_e,{children:b("Full Name *","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,H.jsx)(Se,{type:"text",name:"fullName",value:o.fullName,onChange:C,placeholder:b("Enter your full name","\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644"),hasError:!!n.fullName}),n.fullName&&(0,H.jsx)(Ee,{children:n.fullName})]}),(0,H.jsxs)(Le,{children:[(0,H.jsx)(_e,{children:b("Phone Number *","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 *")}),(0,H.jsx)(Se,{type:"tel",name:"phoneNumber",value:o.phoneNumber,onChange:C,placeholder:b("Enter your phone number","\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643"),hasError:!!n.phoneNumber}),n.phoneNumber&&(0,H.jsx)(Ee,{children:n.phoneNumber})]}),"Delivery"===o.deliveryType&&(0,H.jsxs)(H.Fragment,{children:[(0,m.wU)(a)&&(0,H.jsxs)(Le,{children:[(0,H.jsxs)(_e,{children:[b("Saved address","\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0641\u0648\u0638"),u?` (${b("loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")})`:""]}),(0,H.jsx)(ce,{children:(0,H.jsx)(K.Ay,{value:j,onChange:e=>{if(!e||"__manual__"===e.value)return void t({selectedAddressId:null});const o=parseInt(e.value,10),r=p.find((e=>e.id===o));r&&t({selectedAddressId:o,fullAddress:r.full_address})},options:w,isSearchable:!1,isDisabled:u,styles:y,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed",isRtl:"ar"===d})}),(0,H.jsx)(Be,{children:b("Add or edit addresses from the account menu (person icon) \u2192 Addresses.","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062d\u0633\u0627\u0628 (\u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0634\u062e\u0635) \u2190 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646.")})]}),v&&(0,H.jsxs)(Le,{children:[(0,H.jsx)(_e,{children:b("Delivery Location *","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 *")}),(0,H.jsx)($e,{onLocationSelect:e=>{t({selectedLocation:e,fullAddress:e.address||`${e.latitude}, ${e.longitude}`})},selectedLocation:o.selectedLocation,hasError:!!n.fullAddress&&!o.selectedLocation,googleMapsApiKey:v,activeLanguage:d})]}),(0,H.jsxs)(Le,{children:[(0,H.jsx)(_e,{children:b("Full Address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,H.jsx)(Ne,{name:"fullAddress",value:o.fullAddress,onChange:C,placeholder:b("Enter your delivery address","\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),hasError:!!n.fullAddress,rows:"3"}),n.fullAddress&&(0,H.jsx)(Ee,{children:n.fullAddress})]})]}),"DineIn"===o.deliveryType&&(0,H.jsxs)(Le,{children:[(0,H.jsx)(_e,{children:b("Table Number *","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 *")}),(0,H.jsx)(Se,{type:"number",name:"tableNumber",value:o.tableNumber,onChange:C,placeholder:b("Enter table number","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629"),hasError:!!n.tableNumber}),n.tableNumber&&(0,H.jsx)(Ee,{children:n.tableNumber})]}),(0,H.jsxs)(Le,{children:[(0,H.jsx)(_e,{children:b("Special Notes (Optional)","\u0645\u0644\u0627\u062d\u0638\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,H.jsx)(Ne,{name:"note",value:o.note,onChange:C,placeholder:b("Any special instructions or notes\u2026","\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u2026"),rows:"3"})]})]})}const Ie=i.Ay.div`
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
`,Pe=i.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 12px;
`,qe=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  gap: 12px;
`,Re=i.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#666"};
  flex: 1;
`,Fe=i.Ay.div`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  text-align: right;
  flex: 1;
  word-break: break-word;
`,Oe=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,Ye=i.Ay.div`
  padding: 8px 0;
`,Me=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,Xe=i.Ay.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`,We=i.Ay.div`
  height: 1px;
  background: ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  margin: 12px 0;
`,He=i.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-align: right;
`;function Ve(e){let{formData:o,restaurant:t,activeLanguage:r}=e;const{restaurantName:i}=(0,p.g)(),n=window.location.hostname.split(".")[0],a="menugic"!==n&&"localhost"!==n&&"www"!==n?n:i,l=(0,s.d4)((e=>e.cart[a]||[])),d=l.reduce(((e,o)=>e+o.price*o.quantity),0);let c="";switch(null===t||void 0===t?void 0:t.currency){case"dollar":c="$";break;case"lb":c="L.L.";break;case"gram":c="g";break;case"kilogram":c="kg";break;default:c=""}return(0,H.jsxs)(Ie,{children:[(0,H.jsx)(Pe,{children:"Review Your Order"}),(0,H.jsxs)(Ue,{children:[(0,H.jsx)(Pe,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Items"}),(0,H.jsx)(Oe,{children:l.map((e=>{var o,t;return(0,H.jsx)(Ye,{children:(0,H.jsxs)(Me,{children:[(0,H.jsx)(Xe,{src:(0,v.V)(null===(o=e.images)||void 0===o||null===(t=o[0])||void 0===t?void 0:t.url),alt:"en"===r?e.en_name:e.ar_name}),(0,H.jsxs)(Fe,{style:{flex:2},children:[e.quantity,"x"," ",(0,H.jsx)("strong",{children:"en"===r?e.en_name:e.ar_name})]}),(0,H.jsx)(Fe,{children:(0,f.T)(e.price*e.quantity,c)})]})},e.uniqueId)}))}),(0,H.jsx)(We,{}),(0,H.jsxs)(qe,{children:[(0,H.jsx)(Re,{children:"Total:"}),(0,H.jsx)(He,{children:(0,f.T)(d,c)})]})]}),(0,H.jsxs)(Ue,{children:[(0,H.jsx)(Pe,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Details"}),(0,H.jsxs)(qe,{children:[(0,H.jsx)(Re,{children:"Order Type:"}),(0,H.jsx)(Fe,{children:o.deliveryType})]}),o.selectedBranch&&(0,H.jsxs)(qe,{children:[(0,H.jsx)(Re,{children:"Branch:"}),(0,H.jsx)(Fe,{children:o.selectedBranch.name})]}),o.selectedRegion&&(0,H.jsxs)(qe,{children:[(0,H.jsx)(Re,{children:"Region:"}),(0,H.jsx)(Fe,{children:o.selectedRegion})]})]}),(0,H.jsxs)(Ue,{children:[(0,H.jsx)(Pe,{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact Information"}),(0,H.jsxs)(qe,{children:[(0,H.jsx)(Re,{children:"Name:"}),(0,H.jsx)(Fe,{children:o.fullName})]}),(0,H.jsxs)(qe,{children:[(0,H.jsx)(Re,{children:"Phone:"}),(0,H.jsx)(Fe,{children:o.phoneNumber})]}),"Delivery"===o.deliveryType&&o.fullAddress&&(0,H.jsxs)(qe,{children:[(0,H.jsx)(Re,{children:"Address:"}),(0,H.jsx)(Fe,{children:o.fullAddress})]}),"DineIn"===o.deliveryType&&o.tableNumber&&(0,H.jsxs)(qe,{children:[(0,H.jsx)(Re,{children:"Table Number:"}),(0,H.jsx)(Fe,{children:o.tableNumber})]}),o.note&&(0,H.jsxs)(qe,{children:[(0,H.jsx)(Re,{children:"Notes:"}),(0,H.jsx)(Fe,{children:o.note})]})]})]})}const Qe=i.Ay.div`
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
`,Je=i.Ay.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,Ge=i.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`,Ke=(0,i.Ay)(Je)`
  margin-bottom: 0;
  flex: 1;
`,Ze=i.Ay.button`
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
`,eo=i.Ay.div`
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
`,oo=i.Ay.div`
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
`,to=i.Ay.div`
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
`,ro=i.Ay.div`
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
`,io=i.Ay.div`
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
`,no=i.Ay.button`
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
`,ao=[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"review",label:"Review",number:4}];function lo(e){var o;let{popupHandler:t,restaurant:i}=e;const{restaurantName:n}=(0,p.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n,d=(0,s.d4)((e=>e.cart[l]||[])),v=(0,s.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[l])||void 0===t?void 0:t.activeLanguage)||"en"})),y=(0,s.wA)(),[w,j]=(0,r.useState)(0),[C,$]=(0,r.useState)({deliveryType:"",selectedBranch:(null===i||void 0===i||null===(o=i.branches)||void 0===o?void 0:o[0])||null,selectedRegion:"",regions:[],fullName:"",phoneNumber:"",fullAddress:"",selectedAddressId:null,selectedLocation:null,tableNumber:"",note:""}),[A,k]=(0,r.useState)({}),{handleApiCallAsync:z,isPending:T}=(0,u.h)({onSuccess:()=>{}});(0,r.useEffect)((()=>{(async()=>{const e=(0,m.wU)(l);if(e)try{const{data:o}=await c.A.get(h.EY,{headers:{Authorization:`Bearer ${e}`}});$((e=>({...e,fullName:o.full_name||e.fullName,phoneNumber:o.phone_number||e.phoneNumber})))}catch{}})()}),[l]),(0,r.useEffect)((()=>{if(null!==i&&void 0!==i&&i.features){const e=JSON.parse(i.features),o=Object.entries(e).filter((e=>{let[o,t]=e;return!0===t})).map((e=>{let[o]=e;return"delivery_order"===o?"Delivery":"takeaway_order"===o?"TakeAway":"dinein_order"===o?"DineIn":null})).filter(Boolean);1===o.length&&$((e=>({...e,deliveryType:o[0]})))}}),[i]);const L=e=>{$((o=>({...o,...e})));const o=Object.keys(e);k((e=>{const t={...e};return o.forEach((e=>{t[e]&&delete t[e]})),t}))},_=e=>{const o={};if(1===e){var t;if(C.deliveryType||(o.deliveryType="Order Type is required."),!C.selectedBranch&&(null===i||void 0===i||null===(t=i.branches)||void 0===t?void 0:t.length)>0){var r;(null===i||void 0===i||null===(r=i.branches)||void 0===r?void 0:r.some((e=>e.is_online)))||(o.branch="Branch is required.")}"Delivery"===C.deliveryType&&C.selectedBranch&&Array.isArray(C.regions)&&C.regions.length>0&&!C.selectedRegion&&(o.region="Region is required.")}else 2===e&&(C.fullName||(o.fullName="Full Name is required."),C.phoneNumber||(o.phoneNumber="Phone Number is required."),"Delivery"!==C.deliveryType||C.fullAddress||(o.fullAddress="Full Address is required for delivery."),"DineIn"!==C.deliveryType||C.tableNumber||(o.tableNumber="Table Number is required."));return k(o),0===Object.keys(o).length};return(0,H.jsxs)(Qe,{children:[(0,H.jsxs)(Ge,{children:[(0,H.jsx)(Ke,{children:ao[w].label}),(0,H.jsx)(Ze,{onClick:()=>t(null),"aria-label":"Close cart",children:"\u2715"})]}),(0,H.jsx)(eo,{children:ao.map(((e,o)=>(0,H.jsxs)(oo,{active:o<=w,children:[(0,H.jsx)(to,{active:o<=w,completed:o<w,children:o<w?"\u2713":e.number}),(0,H.jsx)("span",{children:e.label})]},e.id)))}),(0,H.jsx)(ro,{children:(()=>{switch(w){case 0:return(0,H.jsx)(G,{formData:C,updateFormData:L,restaurant:i,activeLanguage:v});case 1:return(0,H.jsx)(me,{formData:C,updateFormData:L,restaurant:i,errors:A,setErrors:k});case 2:return(0,H.jsx)(De,{formData:C,updateFormData:L,restaurant:i,errors:A,restaurantName:l,activeLanguage:v});case 3:return(0,H.jsx)(Ve,{formData:C,restaurant:i,activeLanguage:v});default:return null}})()}),(0,H.jsxs)(io,{children:[w>0&&(0,H.jsx)(no,{onClick:()=>{w>0&&j(w-1)},variant:"secondary",children:"Back"}),w<ao.length-1?(0,H.jsx)(no,{onClick:()=>{if(_(w)){if(0===w&&null!==i&&void 0!==i&&i.id){var e;const o=(null===(e=C.selectedBranch)||void 0===e?void 0:e.id)||null;(0,b.trackCheckoutStart)(i.id,o,C.deliveryType||null)}w<ao.length-1&&j(w+1)}},variant:"primary",children:"Next"}):(0,H.jsx)(no,{onClick:async()=>{var e;if(!_(2))return;let o="";switch(null===i||void 0===i?void 0:i.currency){case"dollar":o="$";break;case"lb":o="L.L.";break;case"gram":o="g";break;case"kilogram":o="kg"}let r=0,n="";n+=`*New Order - ${C.deliveryType}*\n`,n+="--------------------\n\n",n+="*Items:*\n",d.forEach(((e,t)=>{const i=("ar"===v?e.ar_name:e.en_name||"").trim(),a=("ar"===v?e.category.ar_category:e.category.en_category||"").trim(),l=e.price*e.quantity;r+=l,n+=`${t+1}. *${i}*\n`,n+=`    ${a}\n`,n+=`    ${e.quantity}x ${e.price} ${o} = *${l} ${o}*\n`,e.formData&&(n+=(0,g.Ve)(e,"ar"===v?"ar":"en")),e.instruction&&(n+=`    > _${e.instruction}_\n`),n+="\n"})),n+="--------------------\n",n+=`*Total: ${(0,f.T)(r,o)}*\n\n`,n+="*Customer:*\n",n+=`- ${C.fullName}\n`,n+=`- ${C.phoneNumber}\n`,C.selectedRegion&&(n+=`- Region: ${C.selectedRegion}\n`);let a="";"Delivery"===C.deliveryType&&(n+="\n*Delivery Address:*\n",n+=`${C.fullAddress}\n`,C.selectedLocation&&(a=`https://www.google.com/maps?q=${C.selectedLocation.latitude},${C.selectedLocation.longitude}`)),"DineIn"===C.deliveryType&&(n+=`- Table: #${C.tableNumber}\n`),C.note&&(n+=`\n*Note:* _${C.note}_\n`),a&&(n+=`\n${a}\n`);const s=encodeURIComponent(n);let p="",c="";var u,h,m,w;null!==(e=C.selectedBranch)&&void 0!==e&&e.whatsapp_number?(c=null!==(u=C.selectedBranch)&&void 0!==u&&null!==(h=u.whatsapp_number)&&void 0!==h&&h.startsWith("961")?null===(m=C.selectedBranch)||void 0===m?void 0:m.whatsapp_number:"961"+(null===(w=C.selectedBranch)||void 0===w?void 0:w.whatsapp_number),p=`https://wa.me/${c}?text=${s}`):p=`https://wa.me/${i.phone_number}?text=${s}`;const j=d.map((e=>{var o;return{id:e.id,quantity:e.quantity,branch_id:null===(o=C.selectedBranch)||void 0===o?void 0:o.id,restaurant_id:i.id}})),$=d.map((e=>({product_id:e.id,product_name:"en"===v?e.en_name:e.ar_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})));let A="";try{var k,T,L,S,N;const e=await z({products:j,restaurant_id:i.id,branch_id:null===(k=C.selectedBranch)||void 0===k?void 0:k.id,delivery_type:C.deliveryType,customer_name:C.fullName,customer_phone:C.phoneNumber,customer_address:"Delivery"===C.deliveryType?C.fullAddress:null,customer_latitude:(null===(T=C.selectedLocation)||void 0===T?void 0:T.latitude)||null,customer_longitude:(null===(L=C.selectedLocation)||void 0===L?void 0:L.longitude)||null,table_number:"DineIn"===C.deliveryType?C.tableNumber:null,note:C.note,items:$,subtotal:r,total:r,currency:i.currency},l);if(A=(null===e||void 0===e||null===(S=e.data)||void 0===S||null===(N=S.order)||void 0===N?void 0:N.order_number)||"",null!==i&&void 0!==i&&i.id){var E,B,D;const o=(null===(E=C.selectedBranch)||void 0===E?void 0:E.id)||null;(0,b.trackOrderPlaced)(i.id,(null===e||void 0===e||null===(B=e.data)||void 0===B||null===(D=B.order)||void 0===D?void 0:D.id)||null,C.deliveryType,r,o,{items:$,customerName:C.fullName})}}catch(P){console.error("Order creation failed:",P)}A&&(n=`*${A}*\n`+n);const I=encodeURIComponent(n),U=p.replace(s,I);window.open(U||p,"_blank","noopener,noreferrer");y((0,x.sX)(l)),t(null)},variant:"primary",disabled:T,children:T?"Submitting...":"Submit Order"})]})]})}function so(e){let{restaurant:o,showPopup:t,popupHandler:i=(()=>{})}=e;const{restaurantName:n}=(0,p.g)(),a=window.location.hostname.split(".")[0],c="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n,x=(0,s.d4)((e=>e.cart[c]||[])),u=(0,s.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[c])||void 0===t?void 0:t.activeLanguage)||"en"})),h=0===x.length;(0,r.useEffect)((()=>{const e=()=>{i(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);return(0,H.jsx)(l,{showPopup:t,children:h?(0,H.jsx)(d,{children:"en"===u?"Your cart is empty":"\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0641\u0627\u0631\u063a\u0629"}):(0,H.jsx)(lo,{popupHandler:i,restaurant:o})})}},85327:(e,o,t)=>{t.d(o,{A:()=>k});var r=t(82483),i=t(41190),n=t(10448);const a=i.Ay.div`
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
`,m=i.Ay.div`
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
`,f=i.Ay.button`
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
`,g=(i.Ay.div`
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
`;var y=t(22829),w=t(71481),j=t(93376),C=t(91965),$=t(56723);const A=e=>{const o=(null===e||void 0===e?void 0:e.toLowerCase())||"";return o.includes("facebook")?(0,$.jsx)(w.iYk,{}):o.includes("instagram")?(0,$.jsx)(w.ao$,{}):o.includes("tiktok")?(0,$.jsx)(w.kkU,{}):o.includes("twitter")?(0,$.jsx)(w.feZ,{}):o.includes("linkedin")?(0,$.jsx)(w.QEs,{}):o.includes("youtube")?(0,$.jsx)(w.Vk6,{}):o.includes("whatsapp")?(0,$.jsx)(w.EcP,{}):(0,$.jsx)(w.f35,{})};function k(e){let{showPopup:o,popupHandler:t,restaurant:i}=e;const{restaurantName:n}=(0,j.g)(),k=window.location.hostname.split(".")[0],z="menugic"!==k&&"localhost"!==k&&"www"!==k?k:n,T=(0,C.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[z])||void 0===t?void 0:t.activeLanguage)||"en"})),L=(null===i||void 0===i?void 0:i.branches)||[];let _={},S=!1;if(null!==i&&void 0!==i&&i.social_media)try{_="string"===typeof i.social_media?JSON.parse(i.social_media):i.social_media,S=Object.keys(_).length>0}catch(N){_={}}return!S&&null!==i&&void 0!==i&&i.socialMedia&&Array.isArray(i.socialMedia)&&(i.socialMedia.forEach((e=>{if(e.platform&&e.link){const o=e.platform.toLowerCase();_[o]=e.link.startsWith("http")?e.link:`https://${e.link}`}})),S=Object.keys(_).length>0),(0,r.useEffect)((()=>{const e=()=>{t(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,$.jsxs)(a,{showPopup:o,children:[(0,$.jsx)(l,{onClick:()=>{t(null)}}),(0,$.jsx)(d,{activeLanguage:T,children:"en"===T?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"}),(0,$.jsxs)(s,{activeLanguage:T,children:[L.length>0&&(0,$.jsxs)(p,{children:[(0,$.jsx)(c,{activeLanguage:T,children:"en"===T?"Our Locations":"\u0645\u0648\u0627\u0642\u0639\u0646\u0627"}),(0,$.jsx)(x,{children:L.map(((e,o)=>(0,$.jsxs)(u,{activeLanguage:T,children:[(0,$.jsx)(h,{activeLanguage:T,children:e.name}),(0,$.jsxs)(m,{activeLanguage:T,children:[e.phone_number&&(0,$.jsx)(f,{as:"a",href:`tel:${e.phone_number.replace(/\s/g,"")}`,phone:!0,activeLanguage:T,children:(0,$.jsx)(w.Cab,{})}),e.whatsapp_number&&(0,$.jsx)(f,{as:"a",href:`https://wa.me/${e.whatsapp_number.replace(/\s/g,"").startsWith("961")?e.whatsapp_number.replace(/\s/g,""):"961"+e.whatsapp_number.replace(/\s/g,"")}`,target:"_blank",rel:"noopener noreferrer",whatsapp:!0,activeLanguage:T,children:(0,$.jsx)(w.EcP,{})}),(e.location||e.mapLink||e.map_link)&&(0,$.jsx)(f,{as:"a",href:e.mapLink||e.map_link?`https://${e.mapLink||e.map_link}`:void 0,target:e.mapLink||e.map_link?"_blank":void 0,rel:e.mapLink||e.map_link?"noopener noreferrer":void 0,location:!0,activeLanguage:T,children:(0,$.jsx)(y.o9J,{})})]})]},o)))})]}),S&&(0,$.jsxs)(p,{children:[(0,$.jsx)(c,{activeLanguage:T,children:"en"===T?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"}),(0,$.jsx)(g,{children:Object.entries(_).map((e=>{let[o,t]=e;return t?(0,$.jsx)(b,{href:t.startsWith("http")?t:`https://${t}`,target:"_blank",rel:"noopener noreferrer",platform:o,children:(0,$.jsx)(v,{platform:o,children:A(o)})},o):null}))})]})]})]})}},24192:(e,o,t)=>{t.d(o,{A:()=>G});var r=t(82483),i=t(41190),n=t(1901),a=t(10448),l=t(71481),d=t(76143),s=t(42751);const p=i.Ay.div`
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

`),m=i.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 13px;
font-weight: bold;

`,f=i.Ay.div`
width: 90%;
margin-top: 10px;

`,g=i.Ay.div`
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
 
`,U=i.Ay.ul`
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

`,P=i.Ay.li`
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
 `;var H=t(72599),V=t(93376),Q=t(91965),J=t(56723);function G(e){var o,t,i,n;let{restaurant:a,showPopup:d,popupHandler:L}=e;const{restaurantName:N}=(0,V.g)(),B=window.location.hostname.split(".")[0],I="menugic"!==B&&"localhost"!==B&&"www"!==B?B:N,G=(0,Q.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[I].activeLanguage})),[K,Z]=(0,r.useState)("");return(0,r.useEffect)((()=>{const e=()=>{L(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,J.jsxs)(p,{showPopup:d,children:[(0,J.jsx)(h,{onClick:()=>{L(null)}}),(0,J.jsx)(x,{children:(0,J.jsx)(c,{children:(ee=null===a||void 0===a?void 0:a.name,ee.replace(/\b\w/g,(function(e){return e.toUpperCase()})))})}),(0,J.jsxs)(z,{children:[(0,J.jsx)(T,{activeButton:K,onClick:()=>{Z("Call"==K?"":"Call")},children:"Call"!==K?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(H._Xz,{size:"25px"}),"en"==G?"Call Now":"\u0627\u062a\u0635\u0644 \u0627\u0644\u0627\u0646"]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(U,{activeButton:K,children:null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.flatMap((e=>e.phone_number.split(" ").map(((o,t)=>(0,J.jsx)(P,{children:(0,J.jsxs)("a",{href:`tel:${o}`,style:{textDecoration:"none",color:"inherit"},children:[o,"  ",e.location&&(0,J.jsxs)("span",{children:["- ",e.name," "]})]})})))))}),(0,J.jsx)(_,{activeButton:K,children:(0,J.jsx)(S,{activeButton:K})}),(0,J.jsx)(E,{activeButton:K,children:"en"==G?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,J.jsx)(D,{activeButton:K})]})}),(0,J.jsx)(q,{activeButton:K,onClick:()=>{Z("Message"==K?"":"Message")},children:"Message"!==K?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(l.EcP,{size:"25px"}),"en"==G?"Message":"\u0631\u0633\u0627\u0644\u0629","            "]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(U,{activeButton:K,children:null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.map((e=>{var o;return(0,J.jsx)(P,{children:(0,J.jsxs)("a",{href:`https://wa.me/${null!==e&&void 0!==e&&null!==(o=e.whatsapp_number)&&void 0!==o&&o.startsWith("961")?null===e||void 0===e?void 0:e.whatsapp_number:"961"+(null===e||void 0===e?void 0:e.whatsapp_number)}`,style:{textDecoration:"none",color:"inherit"},children:[null===e||void 0===e?void 0:e.whatsapp_number,"-",null===e||void 0===e?void 0:e.name]})})}))}),(0,J.jsx)(_,{activeButton:K,children:(0,J.jsx)(S,{activeButton:K})}),(0,J.jsx)(E,{activeButton:K,children:"en"==G?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,J.jsx)(D,{activeButton:K})]})})]}),(0,J.jsxs)(u,{children:[(null===a||void 0===a||null===(i=a.branches)||void 0===i?void 0:i.name)&&(0,J.jsx)(R,{children:"Branches"}),(0,J.jsx)(F,{children:null===a||void 0===a||null===(n=a.branches)||void 0===n?void 0:n.map(((e,o)=>{var t;return e.name&&(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(O,{children:[o!==(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)-1&&(0,J.jsx)(X,{index:o,children:(0,J.jsx)(W,{})}),(0,J.jsx)(Y,{children:(0,J.jsx)(s.sIY,{})}),(0,J.jsx)(M,{href:`https://${null===e||void 0===e?void 0:e.mapLink}`,children:e.location})]})})}))})]}),(0,J.jsx)(f,{children:(0,J.jsx)(m,{children:"en"==G?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"})}),(0,J.jsxs)(g,{children:[a.socialMedia.find((e=>"Instagram"==e.platform))&&(0,J.jsx)(b,{href:`https://${a.socialMedia.find((e=>"Instagram"==e.platform)).link}`,children:(0,J.jsx)(j,{})}),a.socialMedia.find((e=>"Facebook"==e.platform))&&(0,J.jsx)(y,{href:`https://${a.socialMedia.find((e=>"Facebook"==e.platform)).link}`,children:(0,J.jsx)(w,{})}),a.socialMedia.find((e=>"Tiktok"==e.platform))&&(0,J.jsx)(v,{href:`https://${a.socialMedia.find((e=>"Tiktok"==e.platform)).link}`,children:(0,J.jsx)(C,{})})]}),(0,J.jsxs)($,{children:["Copyright",(0,J.jsx)(k,{})," ",(new Date).getFullYear()," "," ",(0,J.jsx)(A,{href:"https://www.menugic.com",children:"menugic.com"})]})]});var ee}},88564:(e,o,t)=>{t.d(o,{A:()=>N});var r=t(82483),i=t(42751),n=t(10448),a=t(1901),l=t(41235),d=t(41190);const s=d.Ay.div`
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

`,m=d.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor};
margin-top: 20px;
`,f=d.Ay.div`
display: flex;
flex-direction: row;
gap:15px;
margin-top: 20px;


`,g=d.Ay.div`
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
`;var T=t(93376),L=t(99891),_=t(91965),S=t(56723);function N(e){let{showPopup:o,popupHandler:t,activeCategory:i}=e;const{restaurantName:n}=(0,T.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:n;(0,_.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[l].activeLanguage}));(0,r.useEffect)((()=>{const e=()=>{t(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const[d,N]=(0,r.useState)(!1);return(0,S.jsxs)(s,{showPopup:o,children:[(0,S.jsx)(u,{onClick:()=>{t(null)}}),(0,S.jsxs)(p,{children:[(0,S.jsx)(h,{children:"Share Category"}),(0,S.jsxs)(f,{children:[(0,S.jsxs)(g,{children:[(0,S.jsx)(b,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname,t=`https://api.whatsapp.com/send?text=${encodeURIComponent(o+"?categoryId="+e)}`;window.open(t,"_blank")})(i),children:(0,S.jsx)(v,{})}),(0,S.jsx)(j,{children:"Whatsapp"})]}),(0,S.jsxs)(g,{children:[(0,S.jsx)(y,{onClick:()=>{window.open("https://www.instagram.com/direct/inbox/","_blank")},children:(0,S.jsx)(w,{})}),(0,S.jsx)(j,{children:"Instagram"})]})]}),(0,S.jsx)(m,{children:"Get Link"}),(0,S.jsxs)(C,{children:[(0,S.jsx)($,{children:(0,S.jsx)(A,{children:(e=>{if(e){return window.location.origin+window.location.pathname+"?categoryId="+e}})(i)})}),d?(0,S.jsx)(z,{}):(0,S.jsx)(k,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname;navigator.clipboard.writeText(o+"?categoryId="+e),N(!0),setTimeout((()=>{N(!1)}),4e3)})(i)})]})]}),(0,S.jsxs)(c,{children:["Copyright",(0,S.jsx)(x,{}),"2024 ",(0,S.jsx)(L.N_,{href:"https://www.menugic.com",children:"menugic.com"})]})]})}}}]);
//# sourceMappingURL=831.c4fd9113.chunk.js.map