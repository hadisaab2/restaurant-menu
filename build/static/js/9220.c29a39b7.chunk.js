"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[9220],{28782:(t,e,i)=>{i.r(e),i.d(e,{default:()=>A});i(82483);var r=i(41190);const n=r.i7`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`,o=r.i7`
  0%   { transform: scale(1);   opacity: 0.4; }
  70%  { transform: scale(1.45); opacity: 0; }
  100% { transform: scale(1.45); opacity: 0; }
`,a=t=>{var e;return(null===(e=t.theme)||void 0===e?void 0:e.mainColor)||"#5700FF"},s=t=>{var e;return(null===(e=t.theme)||void 0===e?void 0:e.textColor)||"#14161a"},l=r.Ay.div`
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: ${t=>{var e;return(null===(e=t.theme)||void 0===e?void 0:e.backgroundColor)||"#f6f7f9"}};
`,c=r.Ay.div`
  width: 100%;
  max-width: 460px;
  background: ${t=>{var e;return(null===(e=t.theme)||void 0===e?void 0:e.BoxColor)||"#ffffff"}};
  border: 1px solid ${t=>{var e;return(null===(e=t.theme)||void 0===e?void 0:e.borderColor)||"rgba(0, 0, 0, 0.07)"}};
  border-radius: 22px;
  padding: 32px 22px 28px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  animation: ${n} 0.45s ease-out both;

  @media (min-width: 768px) {
    max-width: 520px;
    padding: 44px 44px 38px;
  }
`,p=r.Ay.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`,d=r.Ay.img`
  max-width: 140px;
  max-height: 70px;
  width: auto;
  height: auto;
  object-fit: contain;
`,x=r.Ay.p`
  margin: 0 0 22px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: ${s};
  opacity: 0.55;
`,f=r.Ay.div`
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0 auto 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${a};
  background: ${t=>`${a(t)}14`};

  svg {
    width: 28px;
    height: 28px;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid ${a};
    animation: ${o} 2.6s ease-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      opacity: 0.25;
    }
  }
`,u=r.Ay.h1`
  margin: 0;
  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.2px;
  color: ${s};
  direction: ltr;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`,h=r.Ay.p`
  margin: 6px 0 0;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  color: ${s};
  opacity: 0.72;
  direction: rtl;
  font-family: "Noto Kufi Arabic", "Arial", sans-serif;

  @media (min-width: 768px) {
    font-size: 19px;
  }
`,m=r.Ay.div`
  width: 44px;
  height: 3px;
  border-radius: 3px;
  margin: 20px auto;
  background: ${a};
  opacity: 0.35;
`,g=r.Ay.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  color: ${s};
  opacity: 0.7;
  direction: ltr;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`,v=r.Ay.p`
  margin: 10px 0 0;
  font-size: 14px;
  line-height: 1.8;
  color: ${s};
  opacity: 0.7;
  direction: rtl;
  font-family: "Noto Kufi Arabic", "Arial", sans-serif;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`,y=r.Ay.a`
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 14px 20px;
  border-radius: 14px;
  background: ${a};
  color: ${t=>{var e;return(null===(e=t.theme)||void 0===e?void 0:e.popupbuttonText)||"#ffffff"}};
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 8px 20px ${t=>`${a(t)}3d`};
  transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.07);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid ${a};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`,b=r.Ay.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  line-height: 1.3;

  span:first-child {
    font-size: 15px;
    font-weight: 600;
  }

  span:last-child {
    font-size: 13px;
    font-weight: 500;
    opacity: 0.85;
    direction: rtl;
    font-family: "Noto Kufi Arabic", "Arial", sans-serif;
  }
`;var w=i(45745),j=i(56723);const $="https://www.menugic.com/#contact";function A(t){let{restaurant:e}=t;const i=null!==e&&void 0!==e&&e.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${e.logoURL}`:null;return(0,j.jsx)(l,{children:(0,j.jsxs)(c,{children:[i&&(0,j.jsx)(p,{children:(0,j.jsx)(d,{src:i,alt:(null===e||void 0===e?void 0:e.name)||"Logo"})}),(null===e||void 0===e?void 0:e.name)&&(0,j.jsx)(x,{children:e.name}),(0,j.jsx)(f,{children:(0,j.jsx)(w.IQZ,{})}),(0,j.jsx)(u,{children:"Subscription Expired"}),(0,j.jsx)(h,{children:"\u0627\u0646\u062a\u0647\u0649 \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643"}),(0,j.jsx)(m,{}),(0,j.jsx)(g,{children:"This menu is temporarily unavailable. Contact Menugic to renew the subscription and bring it back online."}),(0,j.jsx)(v,{children:"\u0647\u0630\u0647 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u063a\u064a\u0631 \u0645\u062a\u0627\u062d\u0629 \u0645\u0624\u0642\u062a\u0627\u064b. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 Menugic \u0644\u062a\u062c\u062f\u064a\u062f \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643 \u0648\u0625\u0639\u0627\u062f\u0629 \u062a\u0641\u0639\u064a\u0644\u0647\u0627."}),(0,j.jsxs)(y,{href:$,target:"_blank",rel:"noopener noreferrer",children:[(0,j.jsx)(w.jTZ,{}),(0,j.jsxs)(b,{children:[(0,j.jsx)("span",{children:"Contact Menugic to renew"}),(0,j.jsx)("span",{children:"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 Menugic \u0644\u0644\u062a\u062c\u062f\u064a\u062f"})]})]})]})})}},24731:(t,e,i)=>{i.d(e,{k5:()=>c});var r=i(82483),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(n),a=function(){return a=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},a.apply(this,arguments)},s=function(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(i[r[n]]=t[r[n]])}return i};function l(t){return t&&t.map((function(t,e){return r.createElement(t.tag,a({key:e},t.attr),l(t.child))}))}function c(t){return function(e){return r.createElement(p,a({attr:a({},t.attr)},e),l(t.child))}}function p(t){var e=function(e){var i,n=t.attr,o=t.size,l=t.title,c=s(t,["attr","size","title"]),p=o||e.size||"1em";return e.className&&(i=e.className),t.className&&(i=(i?i+" ":"")+t.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,c,{className:i,style:a(a({color:t.color||e.color},e.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),t.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(t){return e(t)})):e(n)}}}]);
//# sourceMappingURL=9220.c29a39b7.chunk.js.map