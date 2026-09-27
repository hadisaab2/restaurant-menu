"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[5997],{15831:(e,o,t)=>{t.d(o,{A:()=>s});var r=t(82483),i=t(99998),n=t(41190);const a=n.i7`
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
`;var d=t(56723);function s(e){let{trigger:o,sourceElement:t,onComplete:n}=e;const[a,s]=(0,r.useState)(!1),[p,c]=(0,r.useState)(null);return(0,r.useEffect)((()=>{if(!o||!t)return;const e=t.getBoundingClientRect(),r=e.left+e.width/2,i=e.top+e.height/2,a=document.getElementById("cart-tab-icon");if(!a){const e=document.querySelector("[data-tab-bar]");if(e){e.querySelectorAll("button").forEach((e=>{if(e.querySelector('[data-icon="cart"]')){const o=e.getBoundingClientRect(),t=o.left+o.width/2,n=o.top+o.height/2;return c({startX:r,startY:i,endX:t,endY:n}),void s(!0)}}))}return}const l=a.getBoundingClientRect(),d=l.left+l.width/2,p=l.top+l.height/2;c({startX:r,startY:i,endX:d,endY:p}),s(!0);const u=setTimeout((()=>{s(!1),c(null),n&&n()}),600);return()=>clearTimeout(u)}),[o,t,n]),a&&p?(0,i.createPortal)((0,d.jsx)(l,{style:{"--start-x":`${p.startX}px`,"--start-y":`${p.startY}px`,"--end-x":`${p.endX}px`,"--end-y":`${p.endY}px`}}),document.body):null}},79111:(e,o,t)=>{t.d(o,{A:()=>T});var r=t(82483),i=t(27320),n=t(11671),a=t(41190);const l=a.Ay.div`
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

`,u=a.Ay.img`
width:20px;
height:20px;
`,x=(a.Ay.div`
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
`,m=a.Ay.div`
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
`;var j=t(71481),C=t(93376),$=t(99891),A=t(91965),k=t(58821),z=t(56723);function T(e){let{activeCategory:o,setactiveCategory:t,categories:i,showSidebar:n,setshowSidebar:a,setcarouselPosition:T,onHomeClick:L,onCategoryClick:_,onFeedbackClick:S,onContactClick:E,onBranchesClick:N,branches:D}=e;const{restaurantName:B}=(0,C.g)(),[I,P]=(0,$.ok)(),U=window.location.hostname.split(".")[0],R="menugic"!==U&&"localhost"!==U&&"www"!==U&&"api"!==U&&"staging-api"!==U?U:B,q=(0,A.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[R]})),[F,O]=(0,r.useState)(!0);return(0,z.jsxs)(l,{showSidebar:n,children:[(0,z.jsx)(d,{onClick:()=>{a(!1)},showSidebar:n}),(0,z.jsxs)(s,{children:[(0,z.jsx)(x,{}),L&&(0,z.jsx)(h,{children:(0,z.jsxs)(f,{onClick:L,children:[(0,z.jsx)(m,{children:(0,z.jsx)(j.rQ8,{})}),(0,z.jsx)(g,{activeLanguage:null===q||void 0===q?void 0:q.activeLanguage,children:"en"===(null===q||void 0===q?void 0:q.activeLanguage)?"Homepage":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})]})}),(0,z.jsxs)(h,{children:[(0,z.jsxs)(f,{onClick:()=>O(!F),children:[(0,z.jsx)(m,{children:(0,z.jsx)(j.svy,{})}),(0,z.jsx)(g,{activeLanguage:null===q||void 0===q?void 0:q.activeLanguage,children:"en"===(null===q||void 0===q?void 0:q.activeLanguage)?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a"}),(0,z.jsx)(b,{activeLanguage:null===q||void 0===q?void 0:q.activeLanguage,children:F?(0,z.jsx)(j.Ucs,{}):(0,z.jsx)(j.Vr3,{})})]}),F&&(0,z.jsx)(v,{children:(0,z.jsx)(y,{children:null===i||void 0===i?void 0:i.sort(((e,o)=>o.priority-e.priority)).map(((e,r)=>(0,z.jsxs)(w,{onClick:()=>((e,o)=>{_?_(e):(t(e),T(o)),a(!1)})(e.id,r),active:o===e.id,children:["horizantal-withoutIcon"!=q.category_type&&(0,z.jsx)(c,{activeCategory:o,categoryId:e.id,children:(0,z.jsx)(u,{src:(0,k.V)(e.image_url)})}),(0,z.jsx)(p,{categoryType:"horizantal-withoutIcon"==q.category_type,activeCategory:o,categoryId:e.id,children:"en"==(null===q||void 0===q?void 0:q.activeLanguage)?e.en_category:e.ar_category})]},r)))})})]}),(0,z.jsx)(h,{children:(0,z.jsxs)(f,{disabled:!0,children:[(0,z.jsx)(m,{children:(0,z.jsx)(j.IoZ,{})}),(0,z.jsx)(g,{activeLanguage:null===q||void 0===q?void 0:q.activeLanguage,children:"en"===(null===q||void 0===q?void 0:q.activeLanguage)?"Orders (Coming Soon)":"\u0627\u0644\u0637\u0644\u0628\u0627\u062a (\u0642\u0631\u064a\u0628\u0627\u064b)"})]})}),(0,z.jsx)(h,{children:(0,z.jsxs)(f,{onClick:()=>{S&&S(),a(!1)},children:[(0,z.jsx)(m,{children:(0,z.jsx)(j.g5D,{})}),(0,z.jsx)(g,{activeLanguage:null===q||void 0===q?void 0:q.activeLanguage,children:"en"===(null===q||void 0===q?void 0:q.activeLanguage)?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"})]})}),D&&D.length>0&&(0,z.jsx)(h,{children:(0,z.jsxs)(f,{onClick:()=>{N&&N(),a(!1)},children:[(0,z.jsx)(m,{children:(0,z.jsx)(j.vq8,{})}),(0,z.jsx)(g,{activeLanguage:null===q||void 0===q?void 0:q.activeLanguage,children:"en"===(null===q||void 0===q?void 0:q.activeLanguage)?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"})]})}),(0,z.jsx)(h,{children:(0,z.jsxs)(f,{onClick:()=>{E&&E(),a(!1)},children:[(0,z.jsx)(m,{children:(0,z.jsx)(j.toK,{})}),(0,z.jsx)(g,{activeLanguage:null===q||void 0===q?void 0:q.activeLanguage,children:"en"===(null===q||void 0===q?void 0:q.activeLanguage)?"Contact Us":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"})]})})]})]})}},10716:(e,o,t)=>{t.d(o,{$y:()=>x,AH:()=>A,FA:()=>m,GE:()=>L,H_:()=>w,Jw:()=>u,Kh:()=>h,L:()=>a,Pi:()=>k,Pz:()=>c,T:()=>d,TF:()=>j,Vr:()=>y,aX:()=>T,et:()=>g,ey:()=>f,g$:()=>n,iF:()=>p,m6:()=>l,nJ:()=>z,oE:()=>C,v7:()=>b,yI:()=>$,zS:()=>s});var r=t(41190);const i=r.i7`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,n=r.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,a=r.Ay.div`
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
`,l=r.Ay.div`
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
  animation: ${i} 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`,d=r.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`,s=r.Ay.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,p=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`,c=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,u=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`,x=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  white-space: nowrap;
`,h=r.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}12`};
  padding: 3px 5px;
  border-radius: 20px;
`,f=r.Ay.button`
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
`,m=r.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  min-width: 20px;
  text-align: center;
`,g=r.Ay.button`
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
`,b=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,v="\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 2px 8px;\n  line-height: 1.5;\n  white-space: nowrap;\n",y=r.Ay.span`
  ${v}
  border: 1px solid ${e=>`${e.theme.popupTextColor||"#1a1a1a"}50`};
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  background: transparent;
`,w=r.Ay.span`
  ${v}
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}18`};
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}35`};
`,j=r.Ay.span`
  ${v}
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  border: 1px dashed ${e=>`${e.theme.popupTextColor||"#999"}40`};
  opacity: 0.65;
  text-decoration: line-through;
`,C=r.Ay.div`
  font-size: 10px;
  font-style: italic;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$=r.Ay.div`
  font-size: 10px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.75;
  line-height: 1.5;
`,A=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}10`};
  border-radius: 12px;
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  margin-top: 4px;
`,k=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,z=r.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  opacity: 0.75;
`,T=r.Ay.div`
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
`,L=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.6;
  text-align: center;
`},90060:(e,o,t)=>{t.d(o,{F2:()=>d,Nw:()=>i,OM:()=>p,SK:()=>c,Sw:()=>l,WS:()=>u,ad:()=>a,ir:()=>h,yO:()=>x,z2:()=>s});var r=t(41190);const i=r.Ay.div`
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
`,n=r.Ay.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,a=r.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`,l=(0,r.Ay)(n)`
  margin-bottom: 0;
  flex: 1;
`,d=r.Ay.button`
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
`,s=r.Ay.div`
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
`,p=r.Ay.div`
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
`,c=r.Ay.div`
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
`,u=r.Ay.div`
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
`,x=r.Ay.div`
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
`,h=r.Ay.button`
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
`},81457:(e,o,t)=>{t.d(o,{A:()=>ze});var r=t(82483),i=t(18378),n=t(91965),a=t(93376),l=t(11222),d=t(86001),s=t(29334),p=t(81132),c=t(70268),u=t(18907),x=t(67059),h=t(50074),f=t(81926),m=t(58821),g=t(10716),b=t(71481),v=t(2200),y=t(56723);const w=["Size:","\u0627\u0644\u062d\u062c\u0645:"],j=["Add ons:","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:"],C=["Remove:","\u0628\u062f\u0648\u0646:"];function $(e){let{restaurant:o,activeLanguage:t}=e;const r=(0,n.wA)(),{restaurantName:i}=(0,a.g)(),l=window.location.hostname.split(".")[0],s="menugic"!==l&&"localhost"!==l&&"www"!==l&&"api"!==l&&"staging-api"!==l?l:i,p=(0,n.d4)((e=>e.cart[s]||[])),c=p.reduce(((e,o)=>e+o.price*o.quantity),0),x="ar"===t?"ar":"en",f=e=>{const o=(0,h.qh)(e,x);if(!o.length)return null;const{sizeLabel:t,addonLabels:r,removalLabels:i,legacyLines:n}=function(e){const o={sizeLabel:null,addonLabels:[],removalLabels:[],legacyLines:[]};let t=null;for(const r of e)"heading"===r.type?t=w.includes(r.text)?"size":j.includes(r.text)?"addons":C.includes(r.text)?"removals":"legacy":"size"===t?o.sizeLabel=r.text:"addons"===t?o.addonLabels.push(r.text):"removals"===t?o.removalLabels.push(r.text):o.legacyLines.push(r.text);return o}(o),a=t||r.length||i.length;return(0,y.jsxs)(y.Fragment,{children:[a&&(0,y.jsxs)(g.v7,{children:[t&&(0,y.jsx)(g.Vr,{children:"ar"===x?`\u0627\u0644\u062d\u062c\u0645: ${t}`:`Size: ${t}`}),r.map((e=>(0,y.jsxs)(g.H_,{children:["+ ",e]},e))),i.map((e=>(0,y.jsx)(g.TF,{children:e},e)))]}),n.map(((e,o)=>(0,y.jsx)(g.yI,{children:e},o)))]})},$=(0,v.Q)(null===o||void 0===o?void 0:o.currency);if(0===p.length)return(0,y.jsx)(g.g$,{children:(0,y.jsx)(g.GE,{children:"ar"===x?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"})});const A=e=>{var o;const t=null===(o=e.images)||void 0===o?void 0:o[0];return t&&t.url?(0,m.V)(t.url):""};return(0,y.jsx)(g.g$,{children:(0,y.jsxs)(g.L,{children:[p.map((e=>{const o="ar"===x?e.ar_name:e.en_name,t=(0,u.T)(e.price*e.quantity,$);return(0,y.jsx)(g.m6,{children:(0,y.jsxs)(g.T,{children:[(0,y.jsx)(g.zS,{src:A(e),alt:o}),(0,y.jsxs)(g.iF,{children:[(0,y.jsx)(g.Pz,{title:o,children:o}),f(e),e.instruction&&(0,y.jsxs)(g.oE,{children:["\ud83d\udcdd ",e.instruction]})]}),(0,y.jsxs)(g.Jw,{children:[(0,y.jsx)(g.$y,{children:t}),(0,y.jsxs)(g.Kh,{children:[(0,y.jsx)(g.ey,{onClick:()=>{return o=e.uniqueId,void((t=e.quantity)>1&&r((0,d.v)(s,o,t-1)));var o,t},disabled:e.quantity<=1,"aria-label":"decrease quantity",children:"\u2212"}),(0,y.jsx)(g.FA,{children:e.quantity}),(0,y.jsx)(g.ey,{onClick:()=>{return o=e.uniqueId,t=e.quantity,r((0,d.v)(s,o,t+1));var o,t},"aria-label":"increase quantity",children:"+"})]}),(0,y.jsx)(g.et,{onClick:()=>{return o=e.uniqueId,r((0,d.dt)(s,o));var o},"aria-label":"remove item",children:(0,y.jsx)(b.qbC,{})})]})]})},e.uniqueId)})),(0,y.jsx)(g.AH,{children:(0,y.jsxs)(g.Pi,{children:[(0,y.jsx)(g.nJ,{children:"ar"===x?"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a":"Total"}),(0,y.jsx)(g.aX,{children:(0,u.T)(c,$)})]})})]})})}var A=t(13491),k=t(41190);t(34304);const z=k.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`;k.Ay.div`
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

`,k.Ay.ul`
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

`,k.Ay.li`
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

`,k.Ay.span`

`,k.Ay.span`
  border: solid ${e=>e.theme.popupTextColor||"#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.open?"rotate(-135deg)":"rotate(45deg)"};
  margin-left: 10px;
  transition: transform 0.3s;

`;function T(e){let{deliveryType:o,branches:t,selectedBranch:r,setSelectedBranch:i,setErrors:n,errors:a}=e;const l=(0,k.DP)(),d=(t||[]).map((e=>({value:e.id,label:e.name,branch:e,isDisabled:!e.has_delivery&&"Delivery"===o}))),s={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==a&&void 0!==a&&a.branch?"#ff4444":l.mainColor||l.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==a&&void 0!==a&&a.branch?"rgba(255, 68, 68, 0.1)":l.mainColor?`${l.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:l.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==a&&void 0!==a&&a.branch?"#ff4444":l.mainColor||l.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:l.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:l.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:l.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:l.categoryUnActive||"#ffffff",border:`1px solid ${l.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:o.isDisabled?"#999":l.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?l.categoryUnActive||"#ffffff":o.isFocused?l.popupbackgroundColor||"#f5f5f5":"transparent",cursor:o.isDisabled?"not-allowed":"pointer",display:"flex",justifyContent:"space-between"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,y.jsx)(z,{children:(0,y.jsx)(A.Ay,{value:d.find((e=>{var o;return(null===(o=e.branch)||void 0===o?void 0:o.id)===(null===r||void 0===r?void 0:r.id)})),onChange:e=>{e&&!e.isDisabled&&(i(e.branch),n({...a,branch:""}))},options:d,placeholder:"Select Branch",isOptionDisabled:e=>e.isDisabled,styles:s,formatOptionLabel:e=>(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,y.jsx)("span",{children:e.label}),e.isDisabled&&"Delivery"===o&&(0,y.jsx)("span",{style:{fontSize:12,color:"#999"},children:"No Delivery"})]}),menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})})}var L=t(27320);const _=k.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`,S=(k.Ay.div`
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

`,k.Ay.ul`
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

`,k.Ay.li`
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
`,k.Ay.span`
width: 90%;
`,k.Ay.span`
  border: solid ${e=>e.theme.popupTextColor||"#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.open?"rotate(-135deg)":"rotate(45deg)"};
  margin-left: 10px;
  transition: transform 0.3s;

`,k.Ay.div`
height: 70px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(0,0,0,0.2);
`),E=k.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`,N=k.Ay.input`
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
`,D=(0,k.Ay)(L.Xj1)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.mainColor};

`,B=k.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;k.Ay.div`
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`,k.Ay.div`
  border: 3px solid ${e=>e.theme.popupbackgroundColor};
  border-left-color:${e=>e.theme.popupTextColor};; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${B} 1s linear infinite; /* Apply animation */
`;var I=t(89993);function P(e){var o;let{selectedBranch:t,selectedRegion:i,onRegionChange:n,setErrors:a,errors:l,onRegionsChange:d}=e;const s=(0,k.DP)(),[p,c]=(0,r.useState)(!1),[u,x]=(0,r.useState)(""),{response:h,isLoading:f}=(0,I.w)({branch_id:t.id,onSuccess:()=>{}});(0,r.useEffect)((()=>{var e;f||d((null===h||void 0===h||null===(e=h.data)||void 0===e?void 0:e.regions)||[])}),[f,h,d]),(0,r.useEffect)((()=>{n("")}),[t,n]);const m=((null===h||void 0===h||null===(o=h.data)||void 0===o?void 0:o.regions)||[]).map((e=>({value:e.region_name,label:e.region_name}))),g=m.filter((e=>e.label.toLowerCase().includes(u.toLowerCase()))),b={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==l&&void 0!==l&&l.region?"#ff4444":s.mainColor||s.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(null!==l&&void 0!==l&&l.region?"rgba(255, 68, 68, 0.1)":s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==l&&void 0!==l&&l.region?"#ff4444":s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:s.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?s.categoryUnActive||"#ffffff":o.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return!f&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(_,{children:(0,y.jsx)(A.Ay,{value:m.find((e=>e.value===i)),onMenuOpen:()=>c(!0),onMenuClose:()=>c(!1),onChange:e=>{n((null===e||void 0===e?void 0:e.value)||""),x(""),a({...l,region:""})},options:g,placeholder:"Select Region",styles:b,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})}),p&&(0,y.jsx)(S,{children:(0,y.jsxs)(E,{children:[(0,y.jsx)(N,{placeholder:"Search",value:u,onChange:e=>{x(e.target.value)}}),(0,y.jsx)(D,{})]})})]})}const U=k.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,R=k.Ay.div`
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
`,q=k.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,F=k.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,O=(k.Ay.select`
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
`,k.Ay.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`);function M(e){var o,t;let{formData:r,updateFormData:i,restaurant:n,errors:a,setErrors:l,activeLanguage:d="en"}=e;const s=(0,k.DP)(),p=(e,o)=>"ar"===d?o:e;let c={};try{c="string"===typeof(null===n||void 0===n?void 0:n.features)?JSON.parse(n.features):(null===n||void 0===n?void 0:n.features)||{}}catch(h){c={}}const u=[c.delivery_order&&{value:"Delivery",label:p("Delivery","\u062a\u0648\u0635\u064a\u0644")},c.takeaway_order&&{value:"TakeAway",label:p("Take Away","\u0627\u0633\u062a\u0644\u0627\u0645")},c.dinein_order&&{value:"DineIn",label:p("Dine In","\u062f\u0627\u062e\u0644 \u0627\u0644\u0645\u0637\u0639\u0645")}].filter(Boolean),x={control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:a.deliveryType?"#ff4444":s.mainColor||s.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(a.deliveryType?"rgba(255, 68, 68, 0.1)":s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:a.deliveryType?"#ff4444":s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:s.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?s.categoryUnActive||"#ffffff":o.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,y.jsxs)(U,{children:[(0,y.jsx)(q,{children:p("Select Order Type","\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628")}),(0,y.jsx)(F,{children:p("Choose how you would like to receive your order","\u0627\u062e\u062a\u0631 \u0637\u0631\u064a\u0642\u0629 \u0627\u0633\u062a\u0644\u0627\u0645 \u0637\u0644\u0628\u0643")}),(0,y.jsxs)(R,{children:[(0,y.jsx)(A.Ay,{value:u.find((e=>e.value===r.deliveryType)),onChange:e=>{var o;i({deliveryType:(null===e||void 0===e?void 0:e.value)||"",selectedBranch:(null===n||void 0===n||null===(o=n.branches)||void 0===o?void 0:o[0])||null,selectedRegion:""}),l({})},options:u,placeholder:p("Select Order Type","\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628"),"aria-label":p("Order type","\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628"),isRtl:"ar"===d,isSearchable:!1,styles:x,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"}),a.deliveryType&&(0,y.jsx)(O,{children:a.deliveryType})]}),(null===n||void 0===n||null===(o=n.branches)||void 0===o?void 0:o.length)>0&&!(()=>{var e;return null===n||void 0===n||null===(e=n.branches)||void 0===e?void 0:e.some((e=>e.is_online))})()&&(0,y.jsxs)(R,{children:[(0,y.jsx)(T,{deliveryType:r.deliveryType,branches:null===n||void 0===n?void 0:n.branches,selectedBranch:r.selectedBranch,setSelectedBranch:e=>i({selectedBranch:e,selectedRegion:""}),setErrors:l,errors:a}),a.branch&&(0,y.jsx)(O,{children:a.branch})]}),r.selectedBranch&&"Delivery"===r.deliveryType&&Array.isArray(r.regions)&&r.regions.length>0&&(0,y.jsxs)(R,{children:[(0,y.jsx)(P,{selectedRegion:r.selectedRegion,onRegionChange:e=>i({selectedRegion:e}),selectedBranch:1===(null===n||void 0===n||null===(t=n.branches)||void 0===t?void 0:t.length)?null===n||void 0===n?void 0:n.branches[0]:r.selectedBranch,setErrors:l,errors:a,onRegionsChange:e=>i({regions:e})}),a.region&&(0,y.jsx)(O,{children:a.region})]})]})}var Y=t(16106);const W=k.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,X=k.Ay.button`
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
`,H=k.Ay.div`
  padding: 16px;
  background: ${e=>e.theme.categoryUnActive||"#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,V=k.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,J=k.Ay.div`
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  word-break: break-all;
`,K=k.Ay.a`
  font-size: 14px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-decoration: none;
  font-weight: 600;
  margin-top: 4px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`,Q=k.Ay.div`
  color: #ff4444;
  font-size: 13px;
  margin-top: -8px;
`;function G(e){let{onLocationSelect:o,selectedLocation:t,hasError:r,googleMapsApiKey:i,activeLanguage:n="en"}=e;const a=(0,k.DP)();return i?(0,y.jsx)(Y.A,{apiKey:i,onLocationConfirm:o,selectedLocation:t,hasError:r,theme:a,activeLanguage:n}):(0,y.jsx)(Z,{onLocationSelect:o,selectedLocation:t,hasError:r})}function Z(e){let{onLocationSelect:o,selectedLocation:t,hasError:i}=e;const[n,a]=(0,r.useState)(!1),[l,d]=(0,r.useState)("");return(0,y.jsxs)(W,{children:[(0,y.jsxs)(X,{type:"button",onClick:()=>{navigator.geolocation?(a(!0),d(""),navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:r}=e.coords,i={latitude:t,longitude:r,address:`${t.toFixed(6)}, ${r.toFixed(6)}`};o(i),a(!1)}),(()=>{d("Unable to retrieve your location. Please try again."),a(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):d("Geolocation is not supported by your browser")},disabled:n,variant:"current",children:[(0,y.jsx)(b.hO$,{}),n?"Getting Location...":"Use Current Location"]}),(0,y.jsxs)(X,{type:"button",onClick:()=>{if(t){const e=`https://www.google.com/maps?q=${t.latitude},${t.longitude}`;window.open(e,"_blank")}else{const e="https://www.google.com/maps/search/?api=1";window.open(e,"_blank")}},variant:"select",children:[(0,y.jsx)(b.vq8,{}),t?"View on Map":"Select on Map"]}),t&&(0,y.jsxs)(H,{children:[(0,y.jsx)(V,{children:"Selected Location:"}),(0,y.jsx)(J,{children:t.address||`${t.latitude}, ${t.longitude}`}),t.latitude&&t.longitude&&(0,y.jsx)(K,{href:`https://www.google.com/maps?q=${t.latitude},${t.longitude}`,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]}),l&&(0,y.jsx)(Q,{children:l}),i&&!t&&(0,y.jsx)(Q,{children:"Please select a location"})]})}const ee=k.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`,oe=k.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,te=k.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,re=k.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 0;
  position: relative;
`,ie=k.Ay.label`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,ne=k.Ay.input`
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
`,ae=k.Ay.textarea`
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
`,le=k.Ay.span`
  color: #ff4444;
  font-size: 12px;
  display: block;
`,de=k.Ay.p`
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.85;
`;function se(e){let{formData:o,updateFormData:t,errors:i,restaurantName:n,restaurant:a,activeLanguage:d="en"}=e;const s=(0,k.DP)(),[u,x]=(0,r.useState)([]),[h,f]=(0,r.useState)(!1),m=(0,r.useRef)(!1),g=(e,o)=>"ar"===d?o:e,b=(0,r.useMemo)((()=>{try{return null!==a&&void 0!==a&&a.features?JSON.parse(a.features):{}}catch{return{}}}),[null===a||void 0===a?void 0:a.features]).google_maps_integrated&&(null===a||void 0===a?void 0:a.google_maps_api_key)||null,v=(0,r.useMemo)((()=>({control:(e,o)=>({...e,minHeight:44,borderRadius:10,borderColor:s.mainColor||s.maincolor||"#007bff",boxShadow:o.isFocused?"0 0 0 3px "+(s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,o)=>({...e,color:s.popupTextColor||"#00112b",fontSize:14,backgroundColor:o.isSelected?s.categoryUnActive||"#ffffff":o.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})})),[s]),w=(0,r.useMemo)((()=>[{value:"__manual__",label:0===u.length?g("No saved addresses \u2014 type below","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u2014 \u0627\u0643\u062a\u0628 \u0623\u062f\u0646\u0627\u0647"):g("Type address manually","\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u062f\u0648\u064a\u0627\u064b")},...u.map((e=>({value:String(e.id),label:`${e.label||g("Address","\u0639\u0646\u0648\u0627\u0646")}${e.is_default?` (${g("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")})`:""} \u2014 ${e.full_address.length>56?`${e.full_address.slice(0,56)}\u2026`:e.full_address}`})))]),[u,d]),j=(0,r.useMemo)((()=>{if(null==o.selectedAddressId)return w[0]||null;const e=String(o.selectedAddressId);return w.find((o=>o.value===e))||w[0]||null}),[w,o.selectedAddressId]);(0,r.useEffect)((()=>{if("Delivery"!==o.deliveryType||!n)return void x([]);const e=(0,c.wU)(n);if(!e)return void x([]);let t=!1;return f(!0),l.A.get(p.Qf,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:o}=e;t||x(o.addresses||[])})).catch((()=>{t||x([])})).finally((()=>{t||f(!1)})),()=>{t=!0}}),[o.deliveryType,n]),(0,r.useEffect)((()=>{"Delivery"!==o.deliveryType&&(m.current=!1)}),[o.deliveryType]),(0,r.useEffect)((()=>{if("Delivery"!==o.deliveryType)return;if(!u.length||m.current)return;const e=u.find((e=>e.is_default));e&&!String(o.fullAddress||"").trim()&&(m.current=!0,t({selectedAddressId:e.id,fullAddress:e.full_address}))}),[u,o.deliveryType,o.fullAddress,t]);const C=e=>{const{name:o,value:r}=e.target;t("fullAddress"!==o?{[o]:r}:{[o]:r,selectedAddressId:null})};return(0,y.jsxs)(ee,{children:[(0,y.jsx)(oe,{children:g("Your Information","\u0628\u064a\u0627\u0646\u0627\u062a\u0643")}),(0,y.jsx)(te,{children:g("Please provide your contact details to complete the order","\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628")}),(0,y.jsxs)(re,{children:[(0,y.jsx)(ie,{children:g("Full Name *","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,y.jsx)(ne,{type:"text",name:"fullName",value:o.fullName,onChange:C,placeholder:g("Enter your full name","\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644"),hasError:!!i.fullName}),i.fullName&&(0,y.jsx)(le,{children:i.fullName})]}),(0,y.jsxs)(re,{children:[(0,y.jsx)(ie,{children:g("Phone Number *","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 *")}),(0,y.jsx)(ne,{type:"tel",name:"phoneNumber",value:o.phoneNumber,onChange:C,placeholder:g("Enter your phone number","\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643"),hasError:!!i.phoneNumber}),i.phoneNumber&&(0,y.jsx)(le,{children:i.phoneNumber})]}),"Delivery"===o.deliveryType&&(0,y.jsxs)(y.Fragment,{children:[(0,c.wU)(n)&&(0,y.jsxs)(re,{children:[(0,y.jsxs)(ie,{children:[g("Saved address","\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0641\u0648\u0638"),h?` (${g("loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")})`:""]}),(0,y.jsx)(R,{children:(0,y.jsx)(A.Ay,{value:j,onChange:e=>{if(!e||"__manual__"===e.value)return void t({selectedAddressId:null});const o=parseInt(e.value,10),r=u.find((e=>e.id===o));r&&t({selectedAddressId:o,fullAddress:r.full_address})},options:w,isSearchable:!1,isDisabled:h,styles:v,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed",isRtl:"ar"===d})}),(0,y.jsx)(de,{children:g("Add or edit addresses from the account menu (person icon) \u2192 Addresses.","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062d\u0633\u0627\u0628 (\u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0634\u062e\u0635) \u2190 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646.")})]}),b&&(0,y.jsxs)(re,{children:[(0,y.jsx)(ie,{children:g("Delivery Location *","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 *")}),(0,y.jsx)(G,{onLocationSelect:e=>{t({selectedLocation:e,fullAddress:e.address||`${e.latitude}, ${e.longitude}`})},selectedLocation:o.selectedLocation,hasError:!!i.fullAddress&&!o.selectedLocation,googleMapsApiKey:b,activeLanguage:d})]}),(0,y.jsxs)(re,{children:[(0,y.jsx)(ie,{children:g("Full Address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,y.jsx)(ae,{name:"fullAddress",value:o.fullAddress,onChange:C,placeholder:g("Enter your delivery address","\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),hasError:!!i.fullAddress,rows:"3"}),i.fullAddress&&(0,y.jsx)(le,{children:i.fullAddress})]})]}),"DineIn"===o.deliveryType&&(0,y.jsxs)(re,{children:[(0,y.jsx)(ie,{children:g("Table Number *","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 *")}),(0,y.jsx)(ne,{type:"number",name:"tableNumber",value:o.tableNumber,onChange:C,placeholder:g("Enter table number","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629"),hasError:!!i.tableNumber}),i.tableNumber&&(0,y.jsx)(le,{children:i.tableNumber})]}),(0,y.jsxs)(re,{children:[(0,y.jsx)(ie,{children:g("Special Notes (Optional)","\u0645\u0644\u0627\u062d\u0638\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,y.jsx)(ae,{name:"note",value:o.note,onChange:C,placeholder:g("Any special instructions or notes\u2026","\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u2026"),rows:"3"})]})]})}const pe=k.Ay.div`
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
`,ce=k.Ay.div`
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,ue=k.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 12px;
`,xe=k.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  gap: 12px;
`,he=k.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#666"};
  flex: 1;
`,fe=k.Ay.div`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  text-align: right;
  flex: 1;
  word-break: break-word;
`,me=k.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,ge=k.Ay.div`
  padding: 8px 0;
`,be=k.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,ve=k.Ay.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`,ye=k.Ay.div`
  height: 1px;
  background: ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  margin: 12px 0;
`,we=k.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-align: right;
`;function je(e){let{formData:o,restaurant:t,activeLanguage:r,variant:i}=e;const l=(e,o)=>"theme1"===i&&"ar"===r?o:e,{restaurantName:d}=(0,a.g)(),s=window.location.hostname.split(".")[0],p="menugic"!==s&&"localhost"!==s&&"www"!==s&&"api"!==s&&"staging-api"!==s?s:d,c=(0,n.d4)((e=>e.cart[p]||[])),x=c.reduce(((e,o)=>e+o.price*o.quantity),0),h=(0,v.Q)(null===t||void 0===t?void 0:t.currency);return(0,y.jsxs)(pe,{children:[(0,y.jsx)(ue,{children:l("Review Your Order","\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0637\u0644\u0628")}),(0,y.jsxs)(ce,{children:[(0,y.jsx)(ue,{style:{fontSize:"18px",marginBottom:"15px"},children:l("Order Items","\u0627\u0644\u0623\u0635\u0646\u0627\u0641")}),(0,y.jsx)(me,{children:c.map((e=>{var o,t;return(0,y.jsx)(ge,{children:(0,y.jsxs)(be,{children:[(0,y.jsx)(ve,{src:(0,m.V)(null===(o=e.images)||void 0===o||null===(t=o[0])||void 0===t?void 0:t.url),alt:"en"===r?e.en_name:e.ar_name}),(0,y.jsxs)(fe,{style:{flex:2},children:[e.quantity,"x"," ",(0,y.jsx)("strong",{children:"en"===r?e.en_name:e.ar_name})]}),(0,y.jsx)(fe,{children:(0,u.T)(e.price*e.quantity,h)})]})},e.uniqueId)}))}),(0,y.jsx)(ye,{}),(0,y.jsxs)(xe,{children:[(0,y.jsx)(he,{children:l("Total:","\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a:")}),(0,y.jsx)(we,{children:(0,u.T)(x,h)})]})]}),(0,y.jsxs)(ce,{children:[(0,y.jsx)(ue,{style:{fontSize:"18px",marginBottom:"15px"},children:l("Order Details","\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0637\u0644\u0628")}),(0,y.jsxs)(xe,{children:[(0,y.jsx)(he,{children:l("Order Type:","\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628:")}),(0,y.jsx)(fe,{children:o.deliveryType})]}),o.selectedBranch&&(0,y.jsxs)(xe,{children:[(0,y.jsx)(he,{children:l("Branch:","\u0627\u0644\u0641\u0631\u0639:")}),(0,y.jsx)(fe,{children:o.selectedBranch.name})]}),o.selectedRegion&&(0,y.jsxs)(xe,{children:[(0,y.jsx)(he,{children:l("Region:","\u0627\u0644\u0645\u0646\u0637\u0642\u0629:")}),(0,y.jsx)(fe,{children:o.selectedRegion})]})]}),(0,y.jsxs)(ce,{children:[(0,y.jsx)(ue,{style:{fontSize:"18px",marginBottom:"15px"},children:l("Contact Information","\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644")}),(0,y.jsxs)(xe,{children:[(0,y.jsx)(he,{children:l("Name:","\u0627\u0644\u0627\u0633\u0645:")}),(0,y.jsx)(fe,{children:o.fullName})]}),(0,y.jsxs)(xe,{children:[(0,y.jsx)(he,{children:l("Phone:","\u0627\u0644\u0647\u0627\u062a\u0641:")}),(0,y.jsx)(fe,{children:o.phoneNumber})]}),"Delivery"===o.deliveryType&&o.fullAddress&&(0,y.jsxs)(xe,{children:[(0,y.jsx)(he,{children:l("Address:","\u0627\u0644\u0639\u0646\u0648\u0627\u0646:")}),(0,y.jsx)(fe,{children:o.fullAddress})]}),"DineIn"===o.deliveryType&&o.tableNumber&&(0,y.jsxs)(xe,{children:[(0,y.jsx)(he,{children:l("Table Number:","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629:")}),(0,y.jsx)(fe,{children:o.tableNumber})]}),o.note&&(0,y.jsxs)(xe,{children:[(0,y.jsx)(he,{children:l("Notes:","\u0645\u0644\u0627\u062d\u0638\u0627\u062a:")}),(0,y.jsx)(fe,{children:o.note})]})]})]})}var Ce=t(90060);const $e=[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"review",label:"Review",number:4}];function Ae(e){var o;let{popupHandler:t,restaurant:i,variant:m}=e;const{restaurantName:g}=(0,a.g)(),b=window.location.hostname.split(".")[0],w="menugic"!==b&&"localhost"!==b&&"www"!==b&&"api"!==b&&"staging-api"!==b?b:g,j=(0,n.d4)((e=>e.cart[w]||[])),C=(0,n.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[w])||void 0===t?void 0:t.activeLanguage)||"en"})),A=(0,n.wA)(),k="theme1"===m&&"ar"===C,z=k?["\u0627\u0644\u0633\u0644\u0629","\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628","\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644","\u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0629"]:$e.map((e=>e.label)),[T,L]=(0,r.useState)(0),[_,S]=(0,r.useState)({deliveryType:"",selectedBranch:(null===i||void 0===i||null===(o=i.branches)||void 0===o?void 0:o[0])||null,selectedRegion:"",regions:[],fullName:"",phoneNumber:"",fullAddress:"",selectedAddressId:null,selectedLocation:null,tableNumber:"",note:""}),[E,N]=(0,r.useState)({}),{handleApiCallAsync:D,isPending:B}=(0,s.h)({onSuccess:()=>{}});(0,r.useEffect)((()=>{(async()=>{const e=(0,c.wU)(w);if(e)try{const{data:o}=await l.A.get(p.EY,{headers:{Authorization:`Bearer ${e}`}});S((e=>({...e,fullName:o.full_name||e.fullName,phoneNumber:o.phone_number||e.phoneNumber})))}catch{}})()}),[w]),(0,r.useEffect)((()=>{if(null!==i&&void 0!==i&&i.features){const e="string"===typeof i.features?JSON.parse(i.features):i.features,o=Object.entries(e).filter((e=>{let[o,t]=e;return!0===t})).map((e=>{let[o]=e;return"delivery_order"===o?"Delivery":"takeaway_order"===o?"TakeAway":"dinein_order"===o?"DineIn":null})).filter(Boolean);1===o.length&&S((e=>({...e,deliveryType:o[0]})))}}),[i]);const I=e=>{S((o=>({...o,...e})));const o=Object.keys(e);N((e=>{const t={...e};return o.forEach((e=>{t[e]&&delete t[e]})),t}))},P=e=>{const o={};if(1===e){var t;if(_.deliveryType||(o.deliveryType=k?"\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628 \u0645\u0637\u0644\u0648\u0628.":"Order Type is required."),!_.selectedBranch&&(null===i||void 0===i||null===(t=i.branches)||void 0===t?void 0:t.length)>0){var r;(null===i||void 0===i||null===(r=i.branches)||void 0===r?void 0:r.some((e=>e.is_online)))||(o.branch=k?"\u064a\u0631\u062c\u0649 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0641\u0631\u0639.":"Branch is required.")}"Delivery"===_.deliveryType&&_.selectedBranch&&Array.isArray(_.regions)&&_.regions.length>0&&!_.selectedRegion&&(o.region=k?"\u064a\u0631\u062c\u0649 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0645\u0646\u0637\u0642\u0629.":"Region is required.")}else 2===e&&(_.fullName||(o.fullName=k?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0637\u0644\u0648\u0628.":"Full Name is required."),_.phoneNumber||(o.phoneNumber=k?"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 \u0645\u0637\u0644\u0648\u0628.":"Phone Number is required."),"Delivery"!==_.deliveryType||_.fullAddress||(o.fullAddress=k?"\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0637\u0644\u0648\u0628 \u0644\u0644\u062a\u0648\u0635\u064a\u0644.":"Full Address is required for delivery."),"DineIn"!==_.deliveryType||_.tableNumber||(o.tableNumber=k?"\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 \u0645\u0637\u0644\u0648\u0628.":"Table Number is required."));return N(o),0===Object.keys(o).length};return(0,y.jsxs)(Ce.Nw,{children:[(0,y.jsxs)(Ce.ad,{children:[(0,y.jsx)(Ce.Sw,{children:z[T]}),(0,y.jsx)(Ce.F2,{onClick:()=>t(null),"aria-label":"Close cart",children:"\u2715"})]}),(0,y.jsx)(Ce.z2,{children:$e.map(((e,o)=>(0,y.jsxs)(Ce.OM,{active:o<=T,children:[(0,y.jsx)(Ce.SK,{active:o<=T,completed:o<T,children:o<T?"\u2713":e.number}),(0,y.jsx)("span",{children:z[o]})]},e.id)))}),(0,y.jsx)(Ce.WS,{children:(()=>{switch(T){case 0:return(0,y.jsx)($,{formData:_,updateFormData:I,restaurant:i,activeLanguage:C});case 1:return(0,y.jsx)(M,{formData:_,updateFormData:I,restaurant:i,errors:E,setErrors:N,activeLanguage:"theme1"===m?C:"en"});case 2:return(0,y.jsx)(se,{formData:_,updateFormData:I,restaurant:i,errors:E,restaurantName:w,activeLanguage:C});case 3:return(0,y.jsx)(je,{variant:m,formData:_,restaurant:i,activeLanguage:C});default:return null}})()}),(0,y.jsxs)(Ce.yO,{children:[T>0&&(0,y.jsx)(Ce.ir,{onClick:()=>{T>0&&L(T-1)},variant:"secondary",children:k?"\u0627\u0644\u0633\u0627\u0628\u0642":"Back"}),T<$e.length-1?(0,y.jsx)(Ce.ir,{onClick:()=>{if(P(T)){if(0===T&&null!==i&&void 0!==i&&i.id){var e;const o=(null===(e=_.selectedBranch)||void 0===e?void 0:e.id)||null;(0,f.trackCheckoutStart)(i.id,o,_.deliveryType||null)}T<$e.length-1&&L(T+1)}},variant:"primary",children:k?"\u0627\u0644\u062a\u0627\u0644\u064a":"Next"}):(0,y.jsx)(Ce.ir,{onClick:async()=>{var e,o,r,n;if(!P(2))return;const a=(0,v.Q)(null===i||void 0===i?void 0:i.currency);let l=0,s="";s+=`*New Order - ${_.deliveryType}*\n`,s+="--------------------\n\n",s+="*Items:*\n",j.forEach(((e,o)=>{const t=("ar"===C?e.ar_name:e.en_name||"").trim(),r=("ar"===C?e.category.ar_category:e.category.en_category||"").trim(),i=e.price*e.quantity;l+=i,s+=`${o+1}. *${t}*\n`,s+=`    ${r}\n`,s+=`    ${e.quantity}x ${e.price} ${a} = *${i} ${a}*\n`,e.formData&&(s+=(0,h.Ve)(e,"ar"===C?"ar":"en")),e.instruction&&(s+=`    > _${e.instruction}_\n`),s+="\n"})),s+="--------------------\n",s+=`*Total: ${(0,u.T)(l,a)}*\n\n`,s+="*Customer:*\n",s+=`- ${_.fullName}\n`,s+=`- ${_.phoneNumber}\n`,_.selectedRegion&&(s+=`- Region: ${_.selectedRegion}\n`);let p="";"Delivery"===_.deliveryType&&(s+="\n*Delivery Address:*\n",s+=`${_.fullAddress}\n`,_.selectedLocation&&(p=`https://www.google.com/maps?q=${_.selectedLocation.latitude},${_.selectedLocation.longitude}`)),"DineIn"===_.deliveryType&&(s+=`- Table: #${_.tableNumber}\n`),_.note&&(s+=`\n*Note:* _${_.note}_\n`),p&&(s+=`\n${p}\n`);const c=null!==(e=_.selectedBranch)&&void 0!==e&&e.whatsapp_number?(0,x.JW)(_.selectedBranch.whatsapp_number,null===i||void 0===i?void 0:i.country_code):i.phone_number,m=[...j.map((e=>{var o;return{id:e.id,quantity:e.quantity,branch_id:null===(o=_.selectedBranch)||void 0===o?void 0:o.id,restaurant_id:i.id}}))],g=[...j.map((e=>({product_id:e.id,product_name:"en"===C?e.en_name:e.ar_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];D({products:m,restaurant_id:i.id,branch_id:null===(o=_.selectedBranch)||void 0===o?void 0:o.id,delivery_type:_.deliveryType,customer_name:_.fullName,customer_phone:_.phoneNumber,customer_address:"Delivery"===_.deliveryType?_.fullAddress:null,customer_latitude:(null===(r=_.selectedLocation)||void 0===r?void 0:r.latitude)||null,customer_longitude:(null===(n=_.selectedLocation)||void 0===n?void 0:n.longitude)||null,table_number:"DineIn"===_.deliveryType?_.tableNumber:null,note:_.note,items:g,subtotal:l,total:l,currency:i.currency},w).then((e=>{if(null!==i&&void 0!==i&&i.id){var o,t,r;const n=(null===(o=_.selectedBranch)||void 0===o?void 0:o.id)||null;(0,f.trackOrderPlaced)(i.id,(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.order)||void 0===r?void 0:r.id)||null,_.deliveryType,l,n,{items:g,customerName:_.fullName})}})).catch((e=>console.error("Order creation failed:",e))),(0,x.JT)(c,s),A((0,d.sX)(w)),t(null)},variant:"primary",disabled:B,children:B?k?"\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026":"Submitting...":"theme1"===m?k?"\u0645\u062a\u0627\u0628\u0639\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628":"Continue to WhatsApp":"Submit Order"})]})]})}var ke=t(22814);function ze(e){let{restaurant:o,variant:t,showPopup:l,popupHandler:d=(()=>{})}=e;const{restaurantName:s}=(0,a.g)(),p=window.location.hostname.split(".")[0],c="menugic"!==p&&"localhost"!==p&&"www"!==p&&"api"!==p&&"staging-api"!==p?p:s,u=(0,n.d4)((e=>e.cart[c]||[])),x=(0,n.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[c])||void 0===t?void 0:t.activeLanguage)||"en"})),h=0===u.length,f=(0,r.useRef)(null);(0,ke.A)(f,"theme1"===t&&"cart"===l,(()=>d(null))),(0,r.useEffect)((()=>{const e=()=>{d(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);return(0,y.jsxs)(i.mc,{ref:f,showPopup:l,role:"theme1"===t?"dialog":void 0,"aria-modal":"theme1"===t?"true":void 0,"aria-label":"ar"===x?"\u0627\u0644\u0633\u0644\u0629":"Your cart",tabIndex:"theme1"===t?-1:void 0,children:["theme1"===t&&h&&(0,y.jsx)("button",{type:"button",onClick:()=>{"function"===typeof d&&d(null)},style:{minHeight:44,padding:"12px 24px",margin:20,borderRadius:12},children:"ar"===x?"\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u062a\u0633\u0648\u0642":"Continue browsing"}),h?(0,y.jsx)(i._f,{children:"en"===x?"Your cart is empty":"\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0641\u0627\u0631\u063a\u0629"}):(0,y.jsx)(Ae,{popupHandler:d,restaurant:o,variant:t})]})}},18378:(e,o,t)=>{t.d(o,{_f:()=>l,mc:()=>a});var r=t(41190),i=t(10448),n=t(1901);const a=r.Ay.div`
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
`,l=((0,r.Ay)(i.WQq)`
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

`,(0,r.Ay)(n.pS_)`
font-size: 15px;
position: absolute;
top: 0px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`},85327:(e,o,t)=>{t.d(o,{A:()=>z});var r=t(82483),i=t(41190),n=t(10448);const a=i.Ay.div`
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
`,u=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,x=i.Ay.div`
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
`,m=i.Ay.button`
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
`;var y=t(22829),w=t(71481),j=t(93376),C=t(91965),$=t(67059),A=t(56723);const k=e=>{const o=(null===e||void 0===e?void 0:e.toLowerCase())||"";return o.includes("facebook")?(0,A.jsx)(w.iYk,{}):o.includes("instagram")?(0,A.jsx)(w.ao$,{}):o.includes("tiktok")?(0,A.jsx)(w.kkU,{}):o.includes("twitter")?(0,A.jsx)(w.feZ,{}):o.includes("linkedin")?(0,A.jsx)(w.QEs,{}):o.includes("youtube")?(0,A.jsx)(w.Vk6,{}):o.includes("whatsapp")?(0,A.jsx)(w.EcP,{}):(0,A.jsx)(w.f35,{})};function z(e){let{showPopup:o,popupHandler:t,restaurant:i}=e;const{restaurantName:n}=(0,j.g)(),z=window.location.hostname.split(".")[0],T="menugic"!==z&&"localhost"!==z&&"www"!==z&&"api"!==z&&"staging-api"!==z?z:n,L=(0,C.d4)((e=>{var o,t;return(null===(o=e.restaurant)||void 0===o||null===(t=o[T])||void 0===t?void 0:t.activeLanguage)||"en"})),_=(null===i||void 0===i?void 0:i.branches)||[];let S={},E=!1;if(null!==i&&void 0!==i&&i.social_media)try{S="string"===typeof i.social_media?JSON.parse(i.social_media):i.social_media,E=Object.keys(S).length>0}catch(N){S={}}return!E&&null!==i&&void 0!==i&&i.socialMedia&&Array.isArray(i.socialMedia)&&(i.socialMedia.forEach((e=>{if(e.platform&&e.link){const o=e.platform.toLowerCase();S[o]=e.link.startsWith("http")?e.link:`https://${e.link}`}})),E=Object.keys(S).length>0),(0,r.useEffect)((()=>{const e=()=>{t(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,A.jsxs)(a,{showPopup:o,children:[(0,A.jsx)(l,{onClick:()=>{t(null)}}),(0,A.jsx)(d,{activeLanguage:L,children:"en"===L?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"}),(0,A.jsxs)(s,{activeLanguage:L,children:[_.length>0&&(0,A.jsxs)(p,{children:[(0,A.jsx)(c,{activeLanguage:L,children:"en"===L?"Our Locations":"\u0645\u0648\u0627\u0642\u0639\u0646\u0627"}),(0,A.jsx)(u,{children:_.map(((e,o)=>(0,A.jsxs)(x,{activeLanguage:L,children:[(0,A.jsx)(h,{activeLanguage:L,children:e.name}),(0,A.jsxs)(f,{activeLanguage:L,children:[e.phone_number&&(0,A.jsx)(m,{as:"a",href:`tel:${e.phone_number.replace(/\s/g,"")}`,phone:!0,activeLanguage:L,children:(0,A.jsx)(w.Cab,{})}),e.whatsapp_number&&(0,A.jsx)(m,{as:"a",href:`https://wa.me/${(0,$.JW)(e.whatsapp_number,null===i||void 0===i?void 0:i.country_code)}`,target:"_blank",rel:"noopener noreferrer",whatsapp:!0,activeLanguage:L,children:(0,A.jsx)(w.EcP,{})}),(e.location||e.mapLink||e.map_link)&&(0,A.jsx)(m,{as:"a",href:e.mapLink||e.map_link?`https://${e.mapLink||e.map_link}`:void 0,target:e.mapLink||e.map_link?"_blank":void 0,rel:e.mapLink||e.map_link?"noopener noreferrer":void 0,location:!0,activeLanguage:L,children:(0,A.jsx)(y.o9J,{})})]})]},o)))})]}),E&&(0,A.jsxs)(p,{children:[(0,A.jsx)(c,{activeLanguage:L,children:"en"===L?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"}),(0,A.jsx)(g,{children:Object.entries(S).map((e=>{let[o,t]=e;return t?(0,A.jsx)(b,{href:t.startsWith("http")?t:`https://${t}`,target:"_blank",rel:"noopener noreferrer",platform:o,children:(0,A.jsx)(v,{platform:o,children:k(o)})},o):null}))})]})]})]})}},24192:(e,o,t)=>{t.d(o,{A:()=>G});var r=t(82483),i=t(41190),n=t(1901),a=t(10448),l=t(71481),d=t(76143),s=t(42751);const p=i.Ay.div`
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

`),u=i.Ay.span`
width: 90%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 8vh;
`,x=i.Ay.div`
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

`,m=i.Ay.div`
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

 `,E=i.i7`
  0% {
opacity: 0;
left: -10%;
  }
  100% {
opacity: 1;
left: 16%;

  }

`,N=i.Ay.span`
position: absolute;
 left: 16%;
 color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 animation: ${E} 0.5s ease-in-out;
 z-index: 4;

 `,D=i.i7`
  0% {
    opacity: 0;
    rotate: calc(180deg);
  }
  1000% {
    opacity: 1;
    rotate: calc(0deg);

  }
 
`,B=(0,i.Ay)(a.pte)`
color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
font-size: 13px;
position: absolute;
right: 5%;
animation: ${D} 0.7s ease-in-out;

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

`,R=i.Ay.button`
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
`,q=i.Ay.span`
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
`,M=i.Ay.div`
  display: flex;
  flex-direction: row;
  width: 13px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${e=>e.theme.mainColor};
`,Y=(i.Ay.div`
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

 `),W=i.Ay.div`
 width: 13px;
 height: 40px;
 top: 22px;
 position: absolute;
 left: 0;
 display: flex;
 justify-content: center;
 `,X=i.Ay.div`
 width: 2px;
 height: 100%;
 background-color: ${e=>e.theme.popupTextColor};
 opacity: 0.5;
 `;var H=t(72599),V=t(93376),J=t(91965),K=t(67059),Q=t(56723);function G(e){var o,t,i,n;let{restaurant:a,showPopup:d,popupHandler:L}=e;const{restaurantName:E}=(0,V.g)(),D=window.location.hostname.split(".")[0],I="menugic"!==D&&"localhost"!==D&&"www"!==D&&"api"!==D&&"staging-api"!==D?D:E,G=(0,J.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[I].activeLanguage})),[Z,ee]=(0,r.useState)("");return(0,r.useEffect)((()=>{const e=()=>{L(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,Q.jsxs)(p,{showPopup:d,children:[(0,Q.jsx)(h,{onClick:()=>{L(null)}}),(0,Q.jsx)(u,{children:(0,Q.jsx)(c,{children:(oe=null===a||void 0===a?void 0:a.name,oe.replace(/\b\w/g,(function(e){return e.toUpperCase()})))})}),(0,Q.jsxs)(z,{children:[(0,Q.jsx)(T,{activeButton:Z,onClick:()=>{ee("Call"==Z?"":"Call")},children:"Call"!==Z?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(H._Xz,{size:"25px"}),"en"==G?"Call Now":"\u0627\u062a\u0635\u0644 \u0627\u0644\u0627\u0646"]}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(P,{activeButton:Z,children:null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.flatMap((e=>e.phone_number.split(" ").map(((o,t)=>(0,Q.jsx)(U,{children:(0,Q.jsxs)("a",{href:`tel:${o}`,style:{textDecoration:"none",color:"inherit"},children:[o,"  ",e.location&&(0,Q.jsxs)("span",{children:["- ",e.name," "]})]})})))))}),(0,Q.jsx)(_,{activeButton:Z,children:(0,Q.jsx)(S,{activeButton:Z})}),(0,Q.jsx)(N,{activeButton:Z,children:"en"==G?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,Q.jsx)(B,{activeButton:Z})]})}),(0,Q.jsx)(R,{activeButton:Z,onClick:()=>{ee("Message"==Z?"":"Message")},children:"Message"!==Z?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(l.EcP,{size:"25px"}),"en"==G?"Message":"\u0631\u0633\u0627\u0644\u0629","            "]}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(P,{activeButton:Z,children:null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.map((e=>(0,Q.jsx)(U,{children:(0,Q.jsxs)("a",{href:`https://wa.me/${(0,K.JW)(null===e||void 0===e?void 0:e.whatsapp_number,null===a||void 0===a?void 0:a.country_code)}`,style:{textDecoration:"none",color:"inherit"},children:[null===e||void 0===e?void 0:e.whatsapp_number,"-",null===e||void 0===e?void 0:e.name]})})))}),(0,Q.jsx)(_,{activeButton:Z,children:(0,Q.jsx)(S,{activeButton:Z})}),(0,Q.jsx)(N,{activeButton:Z,children:"en"==G?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,Q.jsx)(B,{activeButton:Z})]})})]}),(0,Q.jsxs)(x,{children:[(null===a||void 0===a||null===(i=a.branches)||void 0===i?void 0:i.name)&&(0,Q.jsx)(q,{children:"Branches"}),(0,Q.jsx)(F,{children:null===a||void 0===a||null===(n=a.branches)||void 0===n?void 0:n.map(((e,o)=>{var t;return e.name&&(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsxs)(O,{children:[o!==(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)-1&&(0,Q.jsx)(W,{index:o,children:(0,Q.jsx)(X,{})}),(0,Q.jsx)(M,{children:(0,Q.jsx)(s.sIY,{})}),(0,Q.jsx)(Y,{href:`https://${null===e||void 0===e?void 0:e.mapLink}`,children:e.location})]})})}))})]}),(0,Q.jsx)(m,{children:(0,Q.jsx)(f,{children:"en"==G?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"})}),(0,Q.jsxs)(g,{children:[a.socialMedia.find((e=>"Instagram"==e.platform))&&(0,Q.jsx)(b,{href:`https://${a.socialMedia.find((e=>"Instagram"==e.platform)).link}`,children:(0,Q.jsx)(j,{})}),a.socialMedia.find((e=>"Facebook"==e.platform))&&(0,Q.jsx)(y,{href:`https://${a.socialMedia.find((e=>"Facebook"==e.platform)).link}`,children:(0,Q.jsx)(w,{})}),a.socialMedia.find((e=>"Tiktok"==e.platform))&&(0,Q.jsx)(v,{href:`https://${a.socialMedia.find((e=>"Tiktok"==e.platform)).link}`,children:(0,Q.jsx)(C,{})})]}),(0,Q.jsxs)($,{children:["Copyright",(0,Q.jsx)(k,{})," ",(new Date).getFullYear()," "," ",(0,Q.jsx)(A,{href:"https://www.menugic.com",children:"menugic.com"})]})]});var oe}},88564:(e,o,t)=>{t.d(o,{A:()=>E});var r=t(82483),i=t(42751),n=t(10448),a=t(1901),l=t(41235),d=t(41190);const s=d.Ay.div`
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
`,u=(d.Ay.a`
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

`),x=(0,d.Ay)(n.WQq)`
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
`,m=d.Ay.div`
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
`;var T=t(93376),L=t(99891),_=t(91965),S=t(56723);function E(e){let{showPopup:o,popupHandler:t,activeCategory:i}=e;const{restaurantName:n}=(0,T.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a&&"api"!==a&&"staging-api"!==a?a:n;(0,_.d4)((e=>{var o;return null===(o=e.restaurant)||void 0===o?void 0:o[l].activeLanguage}));(0,r.useEffect)((()=>{const e=()=>{t(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const[d,E]=(0,r.useState)(!1);return(0,S.jsxs)(s,{showPopup:o,children:[(0,S.jsx)(x,{onClick:()=>{t(null)}}),(0,S.jsxs)(p,{children:[(0,S.jsx)(h,{children:"Share Category"}),(0,S.jsxs)(m,{children:[(0,S.jsxs)(g,{children:[(0,S.jsx)(b,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname,t=`https://api.whatsapp.com/send?text=${encodeURIComponent(o+"?categoryId="+e)}`;window.open(t,"_blank")})(i),children:(0,S.jsx)(v,{})}),(0,S.jsx)(j,{children:"Whatsapp"})]}),(0,S.jsxs)(g,{children:[(0,S.jsx)(y,{onClick:()=>{window.open("https://www.instagram.com/direct/inbox/","_blank")},children:(0,S.jsx)(w,{})}),(0,S.jsx)(j,{children:"Instagram"})]})]}),(0,S.jsx)(f,{children:"Get Link"}),(0,S.jsxs)(C,{children:[(0,S.jsx)($,{children:(0,S.jsx)(A,{children:(e=>{if(e){return window.location.origin+window.location.pathname+"?categoryId="+e}})(i)})}),d?(0,S.jsx)(z,{}):(0,S.jsx)(k,{onClick:()=>(e=>{const o=window.location.origin+window.location.pathname;navigator.clipboard.writeText(o+"?categoryId="+e),E(!0),setTimeout((()=>{E(!1)}),4e3)})(i)})]})]}),(0,S.jsxs)(c,{children:["Copyright",(0,S.jsx)(u,{}),"2024 ",(0,S.jsx)(L.N_,{href:"https://www.menugic.com",children:"menugic.com"})]})]})}},22814:(e,o,t)=>{t.d(o,{A:()=>i});var r=t(82483);function i(e,o,t){const i=(0,r.useRef)(t);i.current=t,(0,r.useEffect)((()=>{if(!o||!e.current)return;const t=document.activeElement,r=e.current,n=()=>[...r.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]')].filter((e=>e.getClientRects().length));(n()[0]||r).focus({preventScroll:!0});const a=e=>{if(e.defaultPrevented)return;var o;"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),null===(o=i.current)||void 0===o||o.call(i));if("Tab"!==e.key)return;const t=n(),a=t[0],l=t[t.length-1];a?r.contains(document.activeElement)?!e.shiftKey||document.activeElement!==a&&document.activeElement!==r?e.shiftKey||document.activeElement!==l||(e.preventDefault(),a.focus()):(e.preventDefault(),l.focus()):(e.preventDefault(),(e.shiftKey?l:a).focus()):(e.preventDefault(),r.focus())};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a),null!==t&&void 0!==t&&t.isConnected&&t.focus({preventScroll:!0})}}),[e,o])}}}]);
//# sourceMappingURL=5997.5bbfb5d3.chunk.js.map