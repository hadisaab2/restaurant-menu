"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[237],{42978:(e,t,i)=>{i.d(t,{A:()=>p});i(82483);var n=i(41190);const a=n.Ay.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  transition: bottom 0.15s ease-out;
  width: 100%;
  height: auto;
  min-height: 56px;
  padding-bottom: max(8px, env(safe-area-inset-bottom, 8px));
  background: ${e=>{var t,i,n;return(null===(t=e.theme)||void 0===t?void 0:t.bottomTabBarBackgroundColor)||(null===(i=e.theme)||void 0===i?void 0:i.navigationBarBackgroundColor)||(null===(n=e.theme)||void 0===n?void 0:n.backgroundColor)||"#ffffff"}};
  border-top: 1px solid ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}20`:"rgba(0, 0, 0, 0.1)"}};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 0 calc(8px + env(safe-area-inset-bottom));
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.08);
  z-index: 298;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  opacity: ${e=>e.$isProductDetailsOpen?0:1};
  transform: ${e=>e.$isProductDetailsOpen?"translateY(20px)":"translateY(0)"};
  pointer-events: ${e=>e.$isProductDetailsOpen?"none":"auto"};
  
  /* Safe area for devices with notches */
  padding-bottom: max(8px, env(safe-area-inset-bottom));
`,r=n.Ay.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 4px;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 12px;
  color: ${e=>{var t,i;return e.$active?(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff":(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#666666"}};
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  &:active {
    transform: scale(0.95);
    opacity: 0.8;
    outline: none;
    border: none;
  }
  
  &:focus {
    outline: none;
    border: none;
  }
  
  &:hover {
    opacity: 0.8;
    background: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}08`:"rgba(0, 123, 255, 0.08)"}};
  }
`,o=n.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>e.$isLanguage&&"ar"===e.$activeLanguage?"20px":"22px"};
  transition: transform 0.2s ease, font-size 0.2s ease;
  
  ${r}:active & {
    transform: scale(0.9);
  }
`,l=n.Ay.span`
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  line-height: 1.2;
`,d=n.Ay.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupbuttonText)||"#ffffff"}};
  border-radius: 10px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  padding: 0 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 2px solid ${e=>{var t,i;return(null===(t=e.theme)||void 0===t?void 0:t.popupbackgroundColor)||(null===(i=e.theme)||void 0===i?void 0:i.backgroundColor)||"#ffffff"}};
`;n.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 8px;
  width: 50px;
  height: 24px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${e=>{var t,i;return(null===(t=e.theme)||void 0===t?void 0:t.languagebackground)||(null===(i=e.theme)||void 0===i?void 0:i.categoryUnactive)||"rgba(0, 0, 0, 0.05)"}};
  opacity: 0.8;
`,n.Ay.div`
  width: 100%;
  background-color: ${e=>{var t,i;return(null===(t=e.theme)||void 0===t?void 0:t.languagebackground)||(null===(i=e.theme)||void 0===i?void 0:i.categoryUnactive)||"rgba(0, 0, 0, 0.05)"}};
  opacity: 0.6;
  position: absolute;
  height: 100%;
  z-index: 1;
  border-radius: 8px;
`,n.Ay.div`
  position: absolute;
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  left: ${e=>"en"===e.$activeLanguage?"0px":"25px"};
  transition: all ease-in-out 0.2s;
  height: 100%;
  width: 50%;
  z-index: 2;
  border-radius: 8px;
`,n.Ay.div`
  z-index: 3;
  flex: 1;
  height: 100%;
  color: ${e=>{var t,i;return e.$activeLanguage===e.$language?(null===(t=e.theme)||void 0===t?void 0:t.popupbuttonText)||"#ffffff":(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#666666"}};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;
  user-select: none;
`,n.Ay.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 4px;
  transition: all 0.2s ease;
  position: relative;
`;var s=i(71481),c=i(91965),u=(i(17123),i(94430)),g=i(56723);function p(e){let{activeView:t,showPopup:i=null,onHomeClick:n,hideHome:p=!1,hideCategories:x=!1,onCategoriesClick:v,onCartClick:h,onContactClick:f,onFeedbackClick:m,onBranchesClick:b,restaurantName:y,branches:k,isProductDetailsOpen:j=!1}=e;(0,c.wA)();const $=(0,u.A)(),C=(0,c.d4)((e=>{var t,i;return(null===(t=e.restaurant)||void 0===t||null===(i=t[y])||void 0===i?void 0:i.activeLanguage)||"en"})),w=(0,c.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[y]})),L=(0,c.d4)((e=>{var t;return(null===(t=e.cart)||void 0===t?void 0:t[y])||[]})).reduce(((e,t)=>e+t.quantity),0),A=(()=>{try{const e=(null===w||void 0===w?void 0:w.features)||"{}";return"string"===typeof e?JSON.parse(e):e}catch{return{}}})(),z=[{id:"home",icon:s.rQ8,label:"en"===C?"Home":"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",onClick:n,active:!i&&"home"===t},{id:"categories",icon:s.QJV,label:"en"===C?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a",onClick:v,active:!i&&("categories"===t||"products"===t)},{id:"cart",icon:s.AsH,label:"en"===C?"Cart":"\u0627\u0644\u0633\u0644\u0629",onClick:h,active:"cart"===i,badge:L>0?L:null},{id:"branches",icon:s.vq8,label:"en"===C?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639",onClick:b,active:"location"===i},{id:"feedback",icon:s.g5D,label:"en"===C?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a",onClick:m,active:"feedback"===i}].filter((e=>(!p||"home"!==e.id)&&((!x||"categories"!==e.id)&&("branches"===e.id?k&&k.length>0:"feedback"!==e.id||!0===A.feedback))));null===w||void 0===w||w.languages;return(0,g.jsx)(a,{"data-tab-bar":!0,$isProductDetailsOpen:j,style:$>0?{bottom:`${$}px`}:void 0,children:z.map((e=>(0,g.jsxs)(r,{"data-tab":e.id,onClick:e.onClick,$active:e.active,activeLanguage:C,children:[(0,g.jsxs)(o,{id:"cart"===e.id?"cart-tab-icon":void 0,$isLanguage:!1,$activeLanguage:C,children:[(0,g.jsx)(e.icon,{"data-icon":e.id}),e.badge&&(0,g.jsx)(d,{children:e.badge})]}),(0,g.jsx)(l,{activeLanguage:C,children:e.label})]},e.id)))})}},34500:(e,t,i)=>{i.d(t,{A:()=>K});var n=i(82483),a=i(41190);const r=a.Ay.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${e=>{var t,i;return(null===(t=e.theme)||void 0===t?void 0:t.navigationBarBackgroundColor)||(null===(i=e.theme)||void 0===i?void 0:i.backgroundColor)||"#ffffff"}};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: opacity 0.4s ease, transform 0.4s ease;
  opacity: ${e=>e.$isProductDetailsOpen?0:1};
  transform: ${e=>e.$isProductDetailsOpen?"translateY(-20px)":"translateY(0)"};
  pointer-events: ${e=>e.$isProductDetailsOpen?"none":"auto"};
`,o=a.Ay.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  gap: 24px;
  position: relative;

  @media (min-width: 969px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 70px;
    gap: 16px;
  }
`,l=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-inline-start: auto;
  /* Use dir=rtl/ltr on NavContent only — row-reverse here undoes RTL and keeps icons LTR */

  @media (max-width: 968px) {
    margin-inline-start: 0;
    /* Same order for EN/AR; NavContent dir handles mirroring (burger / actions swap sides). */
    order: 1;
  }

  @media (min-width: 969px) {
    order: unset;
  }
`,d=a.Ay.div`
  position: relative;
  left: auto;
  top: auto;
  transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  transition: transform 0.2s ease;
  z-index: 1;
  max-height: 100%;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 968px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 50vw;

    &:hover {
      transform: translate(-50%, -50%) scale(1.05);
    }
  }
`,s=a.Ay.img`
  height: auto;
  max-height: 85px;
  width: auto;
  max-width: min(280px, 40vw);
  object-fit: contain;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    max-height: 60px;
    max-width: min(200px, 45vw);
  }
`,c=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  justify-content: flex-start;

  @media (max-width: 968px) {
    display: none;
  }
`,u=a.Ay.button`
  padding: 10px 20px;
  background: transparent;
  border: none;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  font-size: 15px;
  font-weight: 500;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  font-family: ${e=>{var t;return`${(null===(t=e.theme)||void 0===t?void 0:t.font)||"system-ui"}, "Noto Kufi Arabic"`}};
  opacity: ${e=>e.disabled?.6:1};

  &:hover {
    ${e=>{var t,i;return e.disabled?"":`\n      background: ${(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}15;\n      color: ${(null===(i=e.theme)||void 0===i?void 0:i.mainColor)||"#007bff"};\n      transform: translateY(-2px);\n    `}}
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    transition: width 0.3s ease;
  }

  &:hover::after {
    ${e=>e.disabled?"":"width: 60%;"}
  }
`,g=a.Ay.span`
  display: inline-block;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,p=(a.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 10px;
  width: 50px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,a.Ay.div`
  width: 100%;
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.languagebackground)||"#f0f0f0"}};
  opacity: 0.6;
  position: absolute;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
`,a.Ay.div`
  position: absolute;
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.languagebackground)||"#f0f0f0"}};
  left: ${e=>"en"===e.activeLanguage?"0px":"25px"};
  transition: all ease-in-out 0.2s;
  height: 100%;
  width: 50%;
  z-index: 2;
  border-radius: 10px;
`,a.Ay.div`
  z-index: 3;
  flex: 1;
  height: 100%;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.languageTextColor)||"#333333"}};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
  user-select: none;
`,a.Ay.button`
  display: flex;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: ${e=>{var t,i;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||(null===(i=e.theme)||void 0===i?void 0:i.maincolor)||"#007bff"}};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 22px;
  flex-shrink: 0;
  z-index: 2;

  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }

  @media (min-width: 969px) {
    display: none;
    order: unset;
  }

  @media (max-width: 968px) {
    order: 0;
  }

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    font-size: 22px;
  }
`),x=(a.Ay.div`
  font-size: 24px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
`,a.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`),v=a.Ay.div`
  position: fixed;
  top: 0;
  left: ${e=>"ar"===e.activeLanguage?"auto":"0"};
  right: ${e=>"ar"===e.activeLanguage?"0":"auto"};
  width: 280px;
  max-width: 85vw;
  height: 100%;

  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"#ffffff"}};
  box-shadow: ${e=>"ar"===e.activeLanguage?"-2px 0 20px rgba(0, 0, 0, 0.15)":"2px 0 20px rgba(0, 0, 0, 0.15)"};
  z-index: 5000;
  padding: 0;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 0;
  transform: ${e=>e.isOpen?"translateX(0)":"ar"===e.activeLanguage?"translateX(100%)":"translateX(-100%)"};
  transition: transform 0.3s ease;
  overflow-y: auto;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  border-top-right-radius: ${e=>"ar"===e.activeLanguage?"0":"20px"};
  border-bottom-right-radius: ${e=>"ar"===e.activeLanguage?"0":"20px"};
  border-top-left-radius: ${e=>"ar"===e.activeLanguage?"20px":"0"};
  border-bottom-left-radius: ${e=>"ar"===e.activeLanguage?"20px":"0"};
`,h=(a.Ay.button`
  padding: 16px 20px;
  background: transparent;
  border: none;
  border-radius: 12px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  font-family: ${e=>{var t;return`${(null===(t=e.theme)||void 0===t?void 0:t.font)||"system-ui"}, "Noto Kufi Arabic"`}};
  width: 100%;
  display: flex;
  align-items: center;
  ${e=>"ar"===e.activeLanguage?"justify-content: flex-end;":"justify-content: flex-start;"}

  &:hover {
    background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}}15;
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    transform: translateX(${e=>"ar"===e.activeLanguage?"-4px":"4px"});
  }

  &:active {
    transform: translateX(0);
  }
`,a.Ay.div`
  width: 100%;
  margin-bottom: 4px;
  animation: slideInFromLeft 0.4s ease-out;
  animation-fill-mode: both;
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.15s; }
  &:nth-child(4) { animation-delay: 0.2s; }
  &:nth-child(5) { animation-delay: 0.25s; }
`),f=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  border-bottom: none;
  opacity: ${e=>e.disabled?.6:1};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  background: transparent;

  &:hover {
    ${e=>{var t;return e.disabled?"":`\n      background: ${(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}10;\n    `}}
  }
`,m=a.Ay.div`
  font-size: 20px;
  color: ${e=>{var t,i,n;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||(null===(i=e.theme)||void 0===i?void 0:i.maincolor)||(null===(n=e.theme)||void 0===n?void 0:n.textColor)||"#333333"}};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  flex-shrink: 0;
`,b=a.Ay.span`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  flex: 1;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,y=a.Ay.div`
  font-size: 12px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#666666"}};
  margin-${e=>"ar"===e.activeLanguage?"right":"left"}: auto;
  transition: transform 0.3s ease;
  flex-shrink: 0;
`,k=a.Ay.div`
  width: 100%;
  padding: 8px 0;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"rgba(0, 0, 0, 0.02)"}};
`,j=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0;
`,$=a.Ay.button`
  width: 100%;
  padding: 12px 24px;
  padding-left: ${e=>"ar"===e.activeLanguage?"24px":"48px"};
  padding-right: ${e=>"ar"===e.activeLanguage?"48px":"24px"};
  border: none;
  background: ${e=>{var t,i;return e.active?((null===(t=e.theme)||void 0===t?void 0:t.mainColor)||(null===(i=e.theme)||void 0===i?void 0:i.maincolor)||"#007bff")+"20":"transparent"}};
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  transition: all 0.3s ease;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  border-bottom: none;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &:hover {
    background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}}15;
    color: ${e=>{var t,i;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||(null===(i=e.theme)||void 0===i?void 0:i.maincolor)||"#007bff"}};
  }
`,C=a.Ay.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 4px;
`,w=a.Ay.span`
  flex: 1;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,L=a.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  margin-bottom: 5px;
  animation: slideInFromLeft 0.3s ease-out;
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,A=a.Ay.img`
  height: 60px;
  max-height: 60px;
  width: auto;
  max-width: min(200px, 50vw);
  object-fit: contain;
`,z=a.Ay.button`
  position: absolute;
  top: 20px;
  ${e=>"ar"===e.activeLanguage?"left: 20px;":"right: 20px;"}
  background: transparent;
  border: none;
  font-size: 24px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 10;
  
  &:hover {
    background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}}15;
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    transform: rotate(90deg);
  }
`,O=(a.Ay.div`
  width: 100%;
  height: 1px;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.borderColor)||"rgba(0, 0, 0, 0.1)"}};
  margin: 4px 0;
`,a.Ay.div`
  width: 100%;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  margin-top: 10px;
`),F=a.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
`,_=a.Ay.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.boxColor)||"#f8f9fa"}};
  color: ${e=>{var t,i,n,a,r,o;return null!==(t=e.platform)&&void 0!==t&&t.toLowerCase().includes("facebook")?"#1877F2":null!==(i=e.platform)&&void 0!==i&&i.toLowerCase().includes("instagram")?"#E4405F":null!==(n=e.platform)&&void 0!==n&&n.toLowerCase().includes("twitter")?"#1DA1F2":null!==(a=e.platform)&&void 0!==a&&a.toLowerCase().includes("whatsapp")?"#25D366":null!==(r=e.platform)&&void 0!==r&&r.toLowerCase().includes("tiktok")?"#000000":(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||"#007bff"}};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,D=a.Ay.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,N=a.Ay.div`
  width: 100%;
  padding: 20px 24px;
  text-align: center;
  font-size: 12px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#666666"}};
  margin-top: auto;
  margin-bottom: 20px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 13px;
  }
`,S=a.Ay.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,E=a.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  color: ${e=>{var t,i;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#1e293b"}};
  transition: color 0.2s ease, transform 0.15s ease;

  &:hover {
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}};
    opacity: 0.8;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#3b82f6"}}55;
  }

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`,P=a.Ay.div`
  position: absolute;
  top: calc(100% + 8px);
  ${e=>e.$rtl?"left: 0;":"right: 0;"}
  min-width: 168px;
  padding: 6px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 12px 40px -12px rgba(15, 23, 42, 0.25);
  z-index: 10060;
`,B=a.Ay.button`
  display: block;
  width: 100%;
  text-align: ${e=>e.$rtl?"right":"left"};
  padding: 10px 14px;
  margin: 0;
  border: none;
  border-radius: 8px;
  background: ${e=>{var t;return e.$active?`${(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#3b82f6"}22`:"transparent"}};
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#0f172a"}};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: ${e=>{var t;return`${(null===(t=e.theme)||void 0===t?void 0:t.font)||"system-ui"}, "Noto Kufi Arabic"`}};

  &:hover {
    background: rgba(15, 23, 42, 0.06);
  }
`;var R=i(11671),U=i(22829),I=i(71481),X=i(93376),H=i(91965),Y=i(17123),Q=i(42751),M=i(90997),T=i(58821),V=i(56723);const J=U.phF;function K(e){let{onProductsClick:t,onSocialMediaClick:i,onBranchesClick:a,onFeedbackClick:K,onOrderClick:W,onHomeClick:Z,onCategoryClick:q,onContactClick:G,onContactFormClick:ee,onAboutClick:te,categories:ie,activeCategory:ne,setshowSidebar:ae,showSidebar:re,restaurant:oe,popupHandler:le,isProductDetailsOpen:de=!1}=e;const{restaurantName:se}=(0,X.g)(),ce=window.location.hostname.split(".")[0],ue="menugic"!==ce&&"localhost"!==ce&&"www"!==ce?ce:se,ge=(0,H.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[ue]})),pe=oe||ge,xe=(()=>{try{const e=(null===pe||void 0===pe?void 0:pe.features)||"{}";return"string"===typeof e?JSON.parse(e):e}catch{return{}}})(),ve=K&&!0===xe.feedback,he=te&&!0===xe.about_us,fe=ee&&!0===xe.contact_info,me=!0===xe.user_registration,be=!!a,ye=(0,H.d4)((e=>{var t,i;return(null===(t=e.restaurant)||void 0===t||null===(i=t[ue])||void 0===i?void 0:i.activeLanguage)||"en"})),ke=(0,H.wA)(),[je,$e]=(0,n.useState)(!1),[Ce,we]=(0,n.useState)(!1),[Le,Ae]=(0,n.useState)(!1),ze=(0,n.useRef)(null),Oe=(0,n.useRef)(null),Fe=e=>{ke((0,Y.y)({name:ue,activeLanguage:e}))};(0,n.useEffect)((()=>{if(!Le)return;const e=e=>{Oe.current&&!Oe.current.contains(e.target)&&Ae(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[Le]);const _e=()=>{$e(!1)},De=e=>{e&&e(),_e()};null===pe||void 0===pe||pe.branches;let Ne={},Se=!1;if(null!==pe&&void 0!==pe&&pe.social_media)try{Ne="string"===typeof pe.social_media?JSON.parse(pe.social_media):pe.social_media,Se=Object.keys(Ne).length>0}catch(Ee){Ne={}}return!Se&&null!==pe&&void 0!==pe&&pe.socialMedia&&Array.isArray(pe.socialMedia)&&(pe.socialMedia.forEach((e=>{if(e.platform&&e.link){const t=e.platform.toLowerCase();Ne[t]=e.link.startsWith("http")?e.link:`https://${e.link}`}})),Se=Object.keys(Ne).length>0),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(r,{activeLanguage:ye,$isProductDetailsOpen:de,children:(0,V.jsxs)(o,{dir:"ar"===ye?"rtl":"ltr",children:[(0,V.jsx)(d,{onClick:()=>{Z&&Z()},style:{cursor:Z?"pointer":"default"},children:(null===pe||void 0===pe?void 0:pe.logoURL)&&(0,V.jsx)(s,{src:`https://storage.googleapis.com/ecommerce-bucket-testing/${pe.logoURL}`,alt:(null===pe||void 0===pe?void 0:pe.name)||"Restaurant Logo"})}),(0,V.jsxs)(c,{activeLanguage:ye,children:[Z&&(0,V.jsx)(u,{onClick:()=>De(Z),activeLanguage:ye,children:(0,V.jsx)(g,{activeLanguage:ye,children:"en"===ye?"Homepage":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})}),(0,V.jsx)(u,{onClick:()=>De(t),activeLanguage:ye,children:(0,V.jsx)(g,{activeLanguage:ye,children:"en"===ye?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a"})}),ve&&(0,V.jsx)(u,{onClick:()=>De(K),activeLanguage:ye,children:(0,V.jsx)(g,{activeLanguage:ye,children:"en"===ye?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"})}),he&&(0,V.jsx)(u,{onClick:()=>De(te),activeLanguage:ye,children:(0,V.jsx)(g,{activeLanguage:ye,children:"en"===ye?"About us":"\u0645\u0646 \u0646\u062d\u0646"})}),be&&(0,V.jsx)(u,{onClick:()=>De(a),activeLanguage:ye,children:(0,V.jsx)(g,{activeLanguage:ye,children:"en"===ye?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"})}),fe&&(0,V.jsx)(u,{onClick:()=>De(ee),activeLanguage:ye,children:(0,V.jsx)(g,{activeLanguage:ye,children:"en"===ye?"Questions & Suggestions":"\u0623\u0633\u0626\u0644\u0629 \u0648\u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a"})})]}),(0,V.jsx)(p,{onClick:()=>{le&&le(null),$e(!je)},activeLanguage:ye,$lang:ye,children:je?(0,V.jsx)(I.QCr,{}):(0,V.jsx)(R.IMk,{})}),(0,V.jsxs)(l,{children:[me&&(0,V.jsx)(M.A,{ref:ze,restaurant:pe,restaurantName:ue,activeLanguage:ye,popupHandler:le}),"en&ar"===(null===pe||void 0===pe?void 0:pe.languages)&&(0,V.jsxs)(S,{ref:Oe,children:[(0,V.jsx)(E,{type:"button","aria-label":"en"===ye?"Language":"\u0627\u0644\u0644\u063a\u0629","aria-expanded":Le,onClick:()=>Ae((e=>!e)),children:(0,V.jsx)(U.S6y,{"aria-hidden":!0})}),Le&&(0,V.jsxs)(P,{$rtl:"ar"===ye,dir:"ar"===ye?"rtl":"ltr",children:[(0,V.jsx)(B,{type:"button",$active:"en"===ye,$rtl:"ar"===ye,onClick:()=>{Fe("en"),Ae(!1)},children:"English"}),(0,V.jsx)(B,{type:"button",$active:"ar"===ye,$rtl:"ar"===ye,onClick:()=>{Fe("ar"),Ae(!1)},children:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"})]})]})]})]})}),je&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(x,{onClick:_e}),(0,V.jsxs)(v,{activeLanguage:ye,isOpen:je,children:[(0,V.jsx)(z,{onClick:_e,activeLanguage:ye,children:(0,V.jsx)(I.QCr,{})}),(null===pe||void 0===pe?void 0:pe.logoURL)&&(0,V.jsx)(L,{onClick:()=>{Z&&(Z(),_e())},style:{cursor:Z?"pointer":"default"},children:(0,V.jsx)(A,{src:`https://storage.googleapis.com/ecommerce-bucket-testing/${pe.logoURL}`,alt:(null===pe||void 0===pe?void 0:pe.name)||"Restaurant Logo"})}),Z&&(0,V.jsx)(V.Fragment,{children:(0,V.jsx)(h,{children:(0,V.jsxs)(f,{onClick:()=>De(Z),children:[(0,V.jsx)(m,{children:(0,V.jsx)(I.rQ8,{})}),(0,V.jsx)(b,{activeLanguage:ye,children:"en"===ye?"Homepage":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})]})})}),(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)(h,{children:[(0,V.jsxs)(f,{onClick:()=>we(!Ce),children:[(0,V.jsx)(m,{children:(0,V.jsx)(I.svy,{})}),(0,V.jsx)(b,{activeLanguage:ye,children:"en"===ye?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a"}),(0,V.jsx)(y,{activeLanguage:ye,children:Ce?(0,V.jsx)(I.Ucs,{}):(0,V.jsx)(I.Vr3,{})})]}),Ce&&(0,V.jsx)(k,{children:(0,V.jsx)(j,{children:null===ie||void 0===ie?void 0:ie.sort(((e,t)=>t.priority-e.priority)).map(((e,t)=>(0,V.jsxs)($,{onClick:()=>{return t=e.id,q&&q(t),void _e();var t},active:ne===e.id,activeLanguage:ye,children:["horizantal-withoutIcon"!==(null===pe||void 0===pe?void 0:pe.category_type)&&e.image_url&&(0,V.jsx)(C,{src:(0,T.V)(e.image_url),alt:"en"===ye?e.en_category:e.ar_category}),(0,V.jsx)(w,{children:"en"===ye?e.en_category:e.ar_category})]},t)))})})]})}),ve&&(0,V.jsx)(h,{children:(0,V.jsxs)(f,{onClick:()=>{K&&K(),_e()},children:[(0,V.jsx)(m,{children:(0,V.jsx)(I.g5D,{})}),(0,V.jsx)(b,{activeLanguage:ye,children:"en"===ye?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"})]})}),me&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(h,{children:(0,V.jsxs)(f,{onClick:()=>{var e,t;le&&le(null),null===(e=ze.current)||void 0===e||null===(t=e.openOrders)||void 0===t||t.call(e),_e()},children:[(0,V.jsx)(m,{children:(0,V.jsx)(I.kkc,{})}),(0,V.jsx)(b,{activeLanguage:ye,children:"en"===ye?"Orders":"\u0627\u0644\u0637\u0644\u0628\u0627\u062a"})]})}),(0,V.jsx)(h,{children:(0,V.jsxs)(f,{onClick:()=>{var e,t;le&&le(null),null===(e=ze.current)||void 0===e||null===(t=e.openWishlist)||void 0===t||t.call(e),_e()},children:[(0,V.jsx)(m,{children:(0,V.jsx)(J,{style:{fill:"none",stroke:"currentColor"}})}),(0,V.jsx)(b,{activeLanguage:ye,children:"en"===ye?"Wishlist":"\u0627\u0644\u0645\u0641\u0636\u0644\u0629"})]})})]}),he&&(0,V.jsx)(h,{children:(0,V.jsxs)(f,{onClick:()=>{te&&te(),_e()},children:[(0,V.jsx)(m,{children:(0,V.jsx)(I.__w,{})}),(0,V.jsx)(b,{activeLanguage:ye,children:"en"===ye?"About us":"\u0645\u0646 \u0646\u062d\u0646"})]})}),be&&(0,V.jsx)(h,{children:(0,V.jsxs)(f,{onClick:()=>{a&&a(),_e()},children:[(0,V.jsx)(m,{children:(0,V.jsx)(I.toK,{})}),(0,V.jsx)(b,{activeLanguage:ye,children:"en"===ye?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"})]})}),fe&&(0,V.jsx)(h,{children:(0,V.jsxs)(f,{onClick:()=>{ee&&ee(),_e()},children:[(0,V.jsx)(m,{children:(0,V.jsx)(I.gZZ,{})}),(0,V.jsx)(b,{activeLanguage:ye,children:"en"===ye?"Questions & Suggestions":"\u0623\u0633\u0626\u0644\u0629 \u0648\u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a"})]})}),Se&&(0,V.jsx)(O,{activeLanguage:ye,children:(0,V.jsx)(F,{children:Object.entries(Ne).map((e=>{let[t,i]=e;if(!i)return null;return(0,V.jsx)(_,{href:i.startsWith("http")?i:`https://${i}`,target:"_blank",rel:"noopener noreferrer",platform:t,children:(0,V.jsx)(D,{platform:t,children:(e=>{const t=(null===e||void 0===e?void 0:e.toLowerCase())||"";return t.includes("facebook")?(0,V.jsx)(I.iYk,{}):t.includes("instagram")?(0,V.jsx)(I.ao$,{}):t.includes("tiktok")?(0,V.jsx)(I.kkU,{}):t.includes("twitter")?(0,V.jsx)(I.feZ,{}):t.includes("linkedin")?(0,V.jsx)(I.QEs,{}):t.includes("youtube")?(0,V.jsx)(I.Vk6,{}):t.includes("whatsapp")?(0,V.jsx)(Q.EcP,{}):(0,V.jsx)(I.f35,{})})(t)})},t)}))})}),(0,V.jsxs)(N,{activeLanguage:ye,children:["MENUGIC \xa9 Copyright ",(new Date).getFullYear(),' - All rights reserved. Created by "MENUGIC".']})]})]})]})}}}]);
//# sourceMappingURL=237.b76cc215.chunk.js.map