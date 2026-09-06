"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[8440],{29334:(e,t,o)=>{o.d(t,{h:()=>d});var r=o(11222),i=o(81132),n=o(13332),l=o(26557),a=o(70268);const s=async e=>{let{payload:t,restaurantName:o}=e;try{const e=i.FS,n=o?(0,a.wU)(o):null,s=(0,l.getCookie)("accessToken"),d=n||s,c={};d&&(c.Authorization=`Bearer ${d}`);return await r.A.post(e,t,{headers:c})}catch(n){throw n}},d=e=>{let{onSuccess:t}=e;const{error:o,mutate:r,mutateAsync:i,isPending:l}=(0,n.n)({mutationFn:s,onSuccess:t});return{isPending:l,error:o,handleApiCall:(e,t)=>r({payload:e,restaurantName:t}),handleApiCallAsync:(e,t)=>i({payload:e,restaurantName:t})}}},38495:(e,t,o)=>{o.d(t,{A:()=>N});var r=o(82483),i=o(91965),n=o(93376),l=o(41190),a=o(10448);const s=l.i7`
  0% { opacity: 0; backdrop-filter: blur(0); }
  100% { opacity: 1; backdrop-filter: blur(8px); }
`,d=l.i7`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`,c=l.i7`
  0% { transform: scaleX(0); opacity: 0; }
  60% { transform: scaleX(1); opacity: 1; }
  100% { transform: scaleX(1); opacity: 1; }
`,u=l.i7`
  0% { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
`,m=l.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1699;
  animation: ${s} 0.35s ease-out forwards;
  pointer-events: auto;
`,p=l.Ay.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 94%;
  max-width: 720px;
  /* Fit all phone heights: use min() so small screens get top/bottom margin and content scrolls */
  max-height: min(
    calc(100dvh - env(safe-area-inset-top, 0) - env(safe-area-inset-bottom, 0) - 24px),
    calc(100vh - env(safe-area-inset-top, 0) - env(safe-area-inset-bottom, 0) - 24px)
  );
  min-height: 200px;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"#fff"}};
  border-radius: 28px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.06);
  z-index: 1700;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${d} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  direction: ${e=>e.$rtl?"rtl":"ltr"};

  @media (min-width: 768px) {
    max-height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 32px);
    border-radius: 32px;
  }
`,v=(0,l.Ay)(a.WQq)`
  position: absolute;
  top: 16px;
  right: ${e=>e.$rtl?"auto":"16px"};
  left: ${e=>e.$rtl?"16px":"auto"};
  width: 44px;
  height: 44px;
  padding: 10px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333"}};
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  transition: background 0.2s, transform 0.2s, color 0.2s;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.12);
    transform: scale(1.05);
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#111"}};
  }
`,h=l.Ay.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  min-height: 0;
  padding: 56px 24px calc(24px + env(safe-area-inset-bottom, 0));
  -webkit-overflow-scrolling: touch;

  @media (min-width: 768px) {
    padding: 64px 40px 40px;
  }
`,g=l.Ay.div`
  text-align: center;
  margin-bottom: 32px;
  animation: ${u} 0.5s ease-out 0.1s both;
`,f=l.Ay.h1`
  font-size: clamp(28px, 5vw, 38px);
  font-weight: 700;
  margin: 0 0 8px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
  letter-spacing: -0.02em;
  line-height: 1.15;
`,x=l.Ay.span`
  background: linear-gradient(135deg, ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#2563eb"}} 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,b=l.Ay.p`
  font-size: 15px;
  color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?e.theme.textColor+"cc":"rgba(0,0,0,0.7)"}};
  margin: 0;
  font-weight: 500;
`,y=l.Ay.div`
  width: 64px;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(90deg, ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#2563eb"}}, transparent);
  margin: 20px auto 0;
  transform-origin: center;
  animation: ${c} 0.6s ease-out 0.25s both;
  direction: ltr;
`,w=l.Ay.section`
  margin-bottom: 28px;
  animation: ${u} 0.5s ease-out both;
  animation-delay: ${e=>{var t;return(null!==(t=e.$delay)&&void 0!==t?t:.2)+"s"}};
`,_=l.Ay.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#2563eb"}};
  margin: 0 0 12px;
  letter-spacing: 0.02em;
`,A=(l.Ay.p`
  font-size: 15px;
  line-height: 1.65;
  color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?e.theme.textColor+"ee":"#333"}};
  margin: 0;
`,l.Ay.div`
  font-size: 15px;
  line-height: 1.65;
  color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?e.theme.textColor+"ee":"#333"}};
`),$=l.Ay.p`
  margin: 0 0 1em;
  font-size: inherit;
  line-height: inherit;
  color: inherit;

  &:last-child {
    margin-bottom: 0;
  }
`,k=l.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 16px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
`,C=l.Ay.div`
  background: linear-gradient(145deg, ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?e.theme.mainColor+"18":"rgba(37,99,235,0.08)"}} 0%, ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?e.theme.mainColor+"08":"rgba(37,99,235,0.05)"}} 100%);
  border: 1px solid ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?e.theme.mainColor+"30":"rgba(37,99,235,0.2)"}};
  border-radius: 16px;
  padding: 18px 14px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`,j=l.Ay.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 10px;
  border-radius: 12px;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#2563eb"}};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`,S=l.Ay.span`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
  display: block;
  margin-bottom: 4px;
`,z=l.Ay.span`
  font-size: 12px;
  color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?e.theme.textColor+"aa":"#666"}};
  line-height: 1.4;
`,I=l.Ay.div`
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?e.theme.textColor+"20":"rgba(0,0,0,0.08)"}};
  text-align: center;
  font-size: 12px;
  color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?e.theme.textColor+"99":"#888"}};
`;var E=o(71481),T=o(56723);const W={heart:E.Mbv,leaf:E.sHz,users:E.YXz,award:E.Z0L},F={en:{title:"About Us",subtitle:"Our story, values, and commitment to you",storyTitle:"Our Story",story:"We are passionate about bringing you the finest dining experience. From our kitchen to your table, we focus on quality ingredients, authentic recipes, and a welcoming atmosphere. Every dish tells a story of tradition and care.",valuesTitle:"What We Stand For",values:[{icon:E.Mbv,title:"Passion",desc:"Love in every recipe"},{icon:E.sHz,title:"Fresh",desc:"Quality ingredients daily"},{icon:E.YXz,title:"Community",desc:"Together at the table"},{icon:E.Z0L,title:"Excellence",desc:"Consistent quality"}],footer:"Thank you for being part of our journey."},ar:{title:"\u0645\u0646 \u0646\u062d\u0646",subtitle:"\u0642\u0635\u062a\u0646\u0627 \u0648\u0642\u064a\u0645\u0646\u0627 \u0648\u0627\u0644\u062a\u0632\u0627\u0645\u0646\u0627 \u062a\u062c\u0627\u0647\u0643\u0645",storyTitle:"\u0642\u0635\u062a\u0646\u0627",story:"\u0646\u062d\u0646 \u0646\u0624\u0645\u0646 \u0628\u062a\u0642\u062f\u064a\u0645 \u0623\u0641\u0636\u0644 \u062a\u062c\u0631\u0628\u0629 \u0637\u0639\u0627\u0645 \u0644\u0643\u0645. \u0645\u0646 \u0645\u0637\u0628\u062e\u0646\u0627 \u0625\u0644\u0649 \u0645\u0627\u0626\u062f\u062a\u0643\u0645\u060c \u0646\u0631\u0643\u0632 \u0639\u0644\u0649 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a \u0627\u0644\u062c\u064a\u062f\u0629 \u0648\u0627\u0644\u0648\u0635\u0641\u0627\u062a \u0627\u0644\u0623\u0635\u064a\u0644\u0629 \u0648\u0627\u0644\u062c\u0648 \u0627\u0644\u062a\u0631\u062d\u064a\u0628\u064a. \u0643\u0644 \u0637\u0628\u0642 \u064a\u062d\u0643\u064a \u0642\u0635\u0629 \u0645\u0646 \u0627\u0644\u062a\u0642\u0627\u0644\u064a\u062f \u0648\u0627\u0644\u0627\u0647\u062a\u0645\u0627\u0645.",valuesTitle:"\u0645\u0627 \u0646\u0624\u0645\u0646 \u0628\u0647",values:[{icon:E.Mbv,title:"\u0627\u0644\u0634\u063a\u0641",desc:"\u062d\u0628 \u0641\u064a \u0643\u0644 \u0648\u0635\u0641\u0629"},{icon:E.sHz,title:"\u0627\u0644\u0637\u0627\u0632\u062c\u0629",desc:"\u0645\u0643\u0648\u0646\u0627\u062a \u064a\u0648\u0645\u064a\u0629 \u0645\u062a\u0645\u064a\u0632\u0629"},{icon:E.YXz,title:"\u0627\u0644\u0645\u062c\u062a\u0645\u0639",desc:"\u0645\u0639\u0627\u064b \u0639\u0644\u0649 \u0627\u0644\u0645\u0627\u0626\u062f\u0629"},{icon:E.Z0L,title:"\u0627\u0644\u062a\u0645\u064a\u0632",desc:"\u062c\u0648\u062f\u0629 \u0645\u062a\u0633\u0642\u0629"}],footer:"\u0634\u0643\u0631\u0627\u064b \u0644\u0643\u0648\u0646\u0643\u0645 \u062c\u0632\u0621\u0627\u064b \u0645\u0646 \u0631\u062d\u0644\u062a\u0646\u0627."}};function N(e){let{showPopup:t,popupHandler:o}=e;const{restaurantName:l}=(0,n.g)(),a=window.location.hostname.split(".")[0],s="menugic"!==a&&"localhost"!==a&&"www"!==a&&"api"!==a&&"staging-api"!==a?a:l,d=(0,i.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[s]})),c=(0,i.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[s])||void 0===o?void 0:o.activeLanguage)||"en"})),u="ar"===c,N=function(e,t){var o,r;const i=null===t||void 0===t?void 0:t.aboutUs,n=null===t||void 0===t?void 0:t.aboutUsValues,l="en"===e;if(!i&&!(n&&n.length>0))return F[e]||F.en;const a=l?(null===i||void 0===i?void 0:i.en_title)||"About Us":(null===i||void 0===i?void 0:i.ar_title)||"\u0645\u0646 \u0646\u062d\u0646",s=l?(null===i||void 0===i?void 0:i.en_subtitle)||"":(null===i||void 0===i?void 0:i.ar_subtitle)||"",d=l?(null===i||void 0===i?void 0:i.en_story_title)||"Our Story":(null===i||void 0===i?void 0:i.ar_story_title)||"\u0642\u0635\u062a\u0646\u0627",c=l?(null===i||void 0===i?void 0:i.en_story)||"":(null===i||void 0===i?void 0:i.ar_story)||"",u=l?(null===i||void 0===i?void 0:i.en_values_title)||"What We Stand For":(null===i||void 0===i?void 0:i.ar_values_title)||"\u0645\u0627 \u0646\u0624\u0645\u0646 \u0628\u0647",m=l?(null===i||void 0===i?void 0:i.en_footer)||"":(null===i||void 0===i?void 0:i.ar_footer)||"",p=(n||[]).map((e=>({icon:W[(e.icon_type||"").toLowerCase()]||E.__w,title:l?e.en_title||"":e.ar_title||"",desc:l?e.en_description||"":e.ar_description||""}))).filter((e=>e.title||e.desc));return{title:a,subtitle:s,storyTitle:d,story:c,valuesTitle:u,values:p.length?p:(null===(o=F[e])||void 0===o?void 0:o.values)||F.en.values,footer:m||(null===(r=F[e])||void 0===r?void 0:r.footer)||F.en.footer}}(c,d);if((0,r.useEffect)((()=>("about"===t&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""})),[t]),"about"!==t)return null;const O=()=>o(null);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(m,{onClick:O}),(0,T.jsxs)(p,{$rtl:u,children:[(0,T.jsx)(v,{$rtl:u,onClick:O,"aria-label":"Close"}),(0,T.jsxs)(h,{children:[(0,T.jsxs)(g,{children:[(0,T.jsx)(f,{children:(0,T.jsx)(x,{children:N.title})}),(0,T.jsx)(b,{children:N.subtitle}),(0,T.jsx)(y,{})]}),(0,T.jsxs)(w,{$delay:.25,children:[(0,T.jsx)(_,{children:N.storyTitle}),(0,T.jsx)(A,{children:(()=>{const e=N.story||"",t=e.split(/\n\n+|\n/).map((e=>e.trim())).filter(Boolean);return 0===t.length&&e.trim()?(0,T.jsx)($,{children:e.trim()}):t.map(((e,t)=>(0,T.jsx)($,{children:e},t)))})()})]}),(0,T.jsxs)(w,{$delay:.35,children:[(0,T.jsx)(_,{children:N.valuesTitle}),(0,T.jsx)(k,{children:N.values.map(((e,t)=>{const o=e.icon;return(0,T.jsxs)(C,{children:[(0,T.jsx)(j,{children:(0,T.jsx)(o,{})}),(0,T.jsx)(S,{children:e.title}),(0,T.jsx)(z,{children:e.desc})]},t)}))})]}),(0,T.jsx)(I,{children:N.footer})]})]})]})}},5633:(e,t,o)=>{o.d(t,{A:()=>s});o(82483);var r=o(52891),i=o(65470),n=o(41190),l=o(42103),a=o(56723);function s(e){let{macros:t,activeLanguage:o="en"}=e;const s=(0,n.DP)(),d=(0,l.yO)((0,l.Rt)(t));if(0===d.length)return null;const c="ar"===o,u=(null===s||void 0===s?void 0:s.mainColor)||(null===s||void 0===s?void 0:s.maincolor)||"#a6ce39",m=(null===s||void 0===s?void 0:s.BoxTextColor)||(null===s||void 0===s?void 0:s.textColor)||"#1a1a1a",p=(null===s||void 0===s?void 0:s.borderColor)||"rgba(128,128,128,0.22)",v=(null===s||void 0===s?void 0:s.BoxColor)||"transparent";return(0,a.jsx)(r.A,{dir:c?"rtl":"ltr",sx:{width:"100%",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(68px, 1fr))",gap:"6px",margin:"8px 0"},children:d.map((e=>(0,a.jsxs)(r.A,{sx:{background:v,border:`1px solid ${p}`,borderRadius:"8px",padding:"6px 4px",textAlign:"center",minWidth:0},children:[(0,a.jsx)(i.A,{component:"div",sx:{fontSize:"12px",fontWeight:700,lineHeight:1.25,color:u,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:(0,l.VP)(e)}),(0,a.jsx)(i.A,{component:"div",sx:{fontSize:"9px",fontWeight:600,marginTop:"2px",letterSpacing:"0.2px",color:m,opacity:.6,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:(0,l.PC)(e,o)})]},e.id)))})}},42103:(e,t,o)=>{o.d(t,{Nw:()=>l,PC:()=>c,Rt:()=>a,VP:()=>u,Y7:()=>m,l9:()=>n,yO:()=>d});var r=o(70061);const i=1;function n(){return{version:i,items:[]}}function l(e){const t=((null===e||void 0===e?void 0:e.items)||[]).map((e=>{var t,o,i,n;return{...e,id:e.id||(0,r.A)(),labelEn:String(null!==(t=e.labelEn)&&void 0!==t?t:""),labelAr:String(null!==(o=e.labelAr)&&void 0!==o?o:""),value:String(null!==(i=e.value)&&void 0!==i?i:""),unit:String(null!==(n=e.unit)&&void 0!==n?n:""),showOnCard:Boolean(e.showOnCard)}}));let o=!1;for(const r of t)r.showOnCard&&(o?r.showOnCard=!1:o=!0);return{version:i,items:t}}function a(e){if(null==e||""===e)return n();let t=e;if("string"===typeof t){const e=t.trim();if(!e)return n();try{t=JSON.parse(e)}catch{return n()}}return t&&"object"===typeof t&&Array.isArray(t.items)?l(t):n()}function s(e){var t;if(!e)return!1;const o=Boolean((e.labelEn||"").trim()||(e.labelAr||"").trim()),r=Boolean(String(null!==(t=e.value)&&void 0!==t?t:"").trim());return o&&r}function d(e){return((null===e||void 0===e?void 0:e.items)||[]).filter(s)}function c(e,t){const o=((null===e||void 0===e?void 0:e.labelEn)||"").trim(),r=((null===e||void 0===e?void 0:e.labelAr)||"").trim();return"ar"===t?r||o:o||r}function u(e){var t;const o=String(null!==(t=null===e||void 0===e?void 0:e.value)&&void 0!==t?t:"").trim(),r=((null===e||void 0===e?void 0:e.unit)||"").trim();return o?r?`${o} ${r}`:o:""}function m(e){const t=l(e);return t.items=t.items.filter(s),0===t.items.length?null:JSON.stringify(t)}},42770:(e,t,o)=>{o.d(t,{A:()=>u});var r=o(82483),i=o(52891),n=o(65470),l=o(41190),a=o(73556);function s(e,t,o){var r;const i=o||(0,a.KE)(),n=parseFloat(e)||0;let l=n;if(null!==t&&void 0!==t&&null!==(r=t.sizes)&&void 0!==r&&r.length&&i.sizeId){const e=t.sizes.find((e=>e.id===i.sizeId));e&&(l=function(e,t){const o=parseFloat(e)||0;if(!t)return o;const r=Number(t.priceModifier);return Number.isNaN(r)?o:"absolute"===t.priceMode?r:o+r}(n,e))}let s=0;(i.addonIds||[]).forEach((e=>{var o;const r=null===t||void 0===t||null===(o=t.addons)||void 0===o?void 0:o.find((t=>t.id===e));r&&(s+=Number(r.priceModifier)||0)}));const d=l+s;return d%1!==0?d.toFixed(2):d.toFixed(0)}var d=o(45745),c=o(56723);function u(e){var t,o,u;let{options:m,formData:p,setFormData:v,formErrors:h={},activeLanguage:g,basePrice:f,onPriceChange:x}=e;const b=(0,l.DP)(),y=(0,a.jB)(p)?p:(0,a.KE)(),w="ar"===g,_=(null===b||void 0===b?void 0:b.mainColor)||(null===b||void 0===b?void 0:b.maincolor)||"#a6ce39",A=(null===b||void 0===b?void 0:b.popupbackgroundColor)||"#ffffff",$=(null===b||void 0===b?void 0:b.popupTextColor)||(null===b||void 0===b?void 0:b.textColor)||"#333333",k=_+"12",C=_+"40",j=(y.addonIds||[]).slice().sort().join(","),S=(y.removalIds||[]).slice().sort().join(",");(0,r.useEffect)((()=>{const e=s(f,m,y);x(e)}),[f,m,y.sizeId,j,S]);const z=e=>w?e.labelAr||e.labelEn:e.labelEn||e.labelAr,I=e=>{let{children:t}=e;return(0,c.jsxs)(i.A,{sx:{display:"flex",alignItems:"center",gap:1,mb:1.5},children:[(0,c.jsx)(i.A,{sx:{width:3,height:16,borderRadius:1,bgcolor:_}}),(0,c.jsx)(n.A,{sx:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:$,opacity:.7},children:t})]})};return(0,c.jsxs)(i.A,{sx:{width:"100%",mt:2,mb:1},children:[(null===m||void 0===m||null===(t=m.sizes)||void 0===t?void 0:t.length)>0&&(0,c.jsxs)(i.A,{sx:{mb:3},children:[(0,c.jsx)(I,{children:w?"\u0627\u0644\u062d\u062c\u0645":"Size"}),(0,c.jsx)(i.A,{sx:{display:"flex",flexWrap:"wrap",gap:1},children:m.sizes.map((e=>{const t=y.sizeId===e.id;return(0,c.jsx)(i.A,{onClick:()=>v((t=>({...(0,a.jB)(t)?t:(0,a.KE)(),sizeId:e.id}))),sx:{display:"flex",alignItems:"center",gap:.8,px:2,py:1,borderRadius:"12px",cursor:"pointer",transition:"all 0.2s ease",border:`1.5px solid ${t?_:C}`,bgcolor:t?_:k,color:t?A:$,boxShadow:t?`0 2px 8px ${_}30`:"none","&:hover":{borderColor:_,bgcolor:t?_:_+"1A"}},children:(0,c.jsx)(n.A,{sx:{fontSize:13,fontWeight:600},children:z(e)})},e.id)}))}),h.size&&(0,c.jsx)(n.A,{variant:"caption",color:"error",sx:{mt:.5,display:"block"},children:w?"\u064a\u0631\u062c\u0649 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u062d\u062c\u0645":"Please select a size"})]}),(null===m||void 0===m||null===(o=m.addons)||void 0===o?void 0:o.length)>0&&(0,c.jsxs)(i.A,{sx:{mb:3},children:[(0,c.jsx)(I,{children:w?"\u0625\u0636\u0627\u0641\u0627\u062a":"Add-ons"}),(0,c.jsx)(i.A,{sx:{display:"flex",flexDirection:"column",gap:.8},children:m.addons.map((e=>{const t=(y.addonIds||[]).includes(e.id),o=(e=>{const t=Number(e);return t&&0!==t?t>0?`+${t}`:`${t}`:null})(e.priceModifier);return(0,c.jsxs)(i.A,{onClick:()=>{v((t=>{const o=(0,a.jB)(t)?t:(0,a.KE)(),r=new Set(o.addonIds||[]);return r.has(e.id)?r.delete(e.id):r.add(e.id),{...o,addonIds:[...r]}}))},sx:{display:"flex",alignItems:"center",gap:1.5,px:1.5,py:1.2,borderRadius:"10px",cursor:"pointer",transition:"all 0.2s ease",border:`1.5px solid ${t?_:C}`,bgcolor:t?k:"transparent","&:hover":{borderColor:_}},children:[(0,c.jsx)(i.A,{sx:{width:22,height:22,borderRadius:"6px",border:`2px solid ${t?_:C}`,bgcolor:t?_:"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s ease",flexShrink:0},children:t&&(0,c.jsx)(d.YrT,{size:14,color:A,strokeWidth:3})}),(0,c.jsx)(n.A,{sx:{flex:1,fontSize:14,fontWeight:t?600:400,color:$},children:z(e)}),o&&(0,c.jsx)(n.A,{sx:{fontSize:12,fontWeight:600,color:_,flexShrink:0},children:o})]},e.id)}))})]}),(null===m||void 0===m||null===(u=m.removals)||void 0===u?void 0:u.length)>0&&(0,c.jsxs)(i.A,{sx:{mb:1},children:[(0,c.jsx)(I,{children:w?"\u0625\u0632\u0627\u0644\u0629":"Remove"}),(0,c.jsx)(i.A,{sx:{display:"flex",flexWrap:"wrap",gap:.8},children:m.removals.map((e=>{const t=(y.removalIds||[]).includes(e.id);return(0,c.jsxs)(i.A,{onClick:()=>{v((t=>{const o=(0,a.jB)(t)?t:(0,a.KE)(),r=new Set(o.removalIds||[]);return r.has(e.id)?r.delete(e.id):r.add(e.id),{...o,removalIds:[...r]}}))},sx:{display:"flex",alignItems:"center",gap:.8,px:1.5,py:.8,borderRadius:"8px",cursor:"pointer",transition:"all 0.2s ease",border:`1.5px solid ${t?"#ef4444":C}`,bgcolor:t?"#fef2f2":"transparent","&:hover":{borderColor:t?"#ef4444":_}},children:[(0,c.jsx)(i.A,{sx:{width:18,height:18,borderRadius:"4px",border:`2px solid ${t?"#ef4444":C}`,bgcolor:t?"#ef4444":"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s ease",flexShrink:0},children:t&&(0,c.jsx)(d.yGN,{size:12,color:"#fff",strokeWidth:3})}),(0,c.jsx)(n.A,{sx:{fontSize:13,fontWeight:t?500:400,color:t?"#ef4444":$,textDecoration:t?"line-through":"none",opacity:t?.8:1},children:z(e)})]},e.id)}))})]})]})}},50074:(e,t,o)=>{o.d(t,{Ve:()=>a,qh:()=>l});var r=o(73556),i=o(28471);function n(e,t,o){var r;if(!e||!t)return[];const i="ar"===o?"ar":"en",n=function(e){return"ar"===e?{size:"\u0627\u0644\u062d\u062c\u0645:",addons:"\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:",removals:"\u0628\u062f\u0648\u0646:"}:{size:"Size:",addons:"Add ons:",removals:"Remove:"}}(i),l=[];if(t.sizeId&&null!==(r=e.sizes)&&void 0!==r&&r.length){const o=e.sizes.find((e=>e.id===t.sizeId));if(o){const e="ar"===i&&o.labelAr||o.labelEn;l.push({type:"heading",text:n.size}),l.push({type:"line",key:"size",text:e})}}const a=[];(t.addonIds||[]).forEach((t=>{var o;const r=null===(o=e.addons)||void 0===o?void 0:o.find((e=>e.id===t));if(r){const e="ar"===i&&r.labelAr||r.labelEn;a.push({type:"line",key:`addon_${t}`,text:e})}})),a.length&&(l.push({type:"heading",text:n.addons}),l.push(...a));const s=[];return(t.removalIds||[]).forEach((t=>{var o;const r=null===(o=e.removals)||void 0===o?void 0:o.find((e=>e.id===t));if(r){const e="ar"===i&&r.labelAr||r.labelEn;s.push({type:"line",key:`removal_${t}`,text:e})}})),s.length&&(l.push({type:"heading",text:n.removals}),l.push(...s)),l}function l(e,t){if(!e.formData||"object"!==typeof e.formData)return[];const o=Object.keys(e.formData);if(0===o.length)return[];if((0,r.jB)(e.formData)){var l;const o={sizeId:null!==(l=e.formData.sizeId)&&void 0!==l?l:null,addonIds:e.formData.addonIds||[],removalIds:e.formData.removalIds||[]},a=function(e){const t=(0,r.xC)(e||"{}");return"v2"===t.kind?t.data:"legacy"===t.kind&&(0,i.VN)(t.data)?(0,i.Oz)(t.data):null}(e.form_json);return a?n(a,o,t):[]}const a=[{type:"heading",text:"ar"===("ar"===t?"ar":"en")?"\u0627\u0644\u062e\u064a\u0627\u0631\u0627\u062a:":"Options:"}];return o.forEach((t=>{const o=e.formData[t];let r="";r=Array.isArray(o)?o.join(", "):"object"===typeof o&&null!==o?o.label:o,a.push({type:"line",key:t,text:`${t}: ${r}`})})),a}function a(e,t){return l(e,"ar"===t?"ar":"en").map((e=>"heading"===e.type?`    *${e.text}:*\n`:`      - ${e.text}\n`)).join("")}},28471:(e,t,o)=>{o.d(t,{Oz:()=>n,VN:()=>l});var r=o(73556);function i(e){if(null==e||""===e)return null;const t=String(e).trim();if(t.startsWith("+")){const e=parseFloat(t.slice(1));return Number.isFinite(e)?{mode:"delta",value:e}:null}if(t.startsWith("-")){const e=parseFloat(t.slice(1));return Number.isFinite(e)?{mode:"delta",value:-e}:null}const o=parseFloat(t);return Number.isFinite(o)?{mode:"absolute",value:o}:null}function n(e){const t=(0,r.yu)();if(!e||!Array.isArray(e.components))return(0,r.s3)(t);const o=e.components.filter((e=>e&&"button"!==e.type&&"submit"!==e.key)),n=o.filter((e=>{var t,o;return"select"===e.type&&(null===(t=e.data)||void 0===t||null===(o=t.values)||void 0===o?void 0:o.length)})),l=o.filter((e=>{var t;return"selectboxes"===e.type&&(null===(t=e.values)||void 0===t?void 0:t.length)})),a=o.filter((e=>{var t;return"radio"===e.type&&(null===(t=e.values)||void 0===t?void 0:t.length)}));function s(e){const t=String(e.key||"").toLowerCase(),o=String(e.label||"").toLowerCase();return t.includes("remove")||t.includes("without")||o.includes("remove")||o.includes("without")||o.includes("no ")}let d=l.filter(s),c=l.filter((e=>!s(e)));const u=n[0]||a[0];if(u){("select"===u.type?u.data.values:u.values).forEach(((e,o)=>{const r=String(e.label||"").trim();if(!r)return;const n=i(e.value);let l=0;("delta"===(null===n||void 0===n?void 0:n.mode)||"absolute"===(null===n||void 0===n?void 0:n.mode))&&(l=n.value),t.sizes.push({id:`mig_size_${o}_${r.slice(0,12)}`,labelEn:r,labelAr:String(e.labelAr||e.label||"").trim()||r,priceModifier:l})}))}const m=u&&"radio"===u.type?a.slice(1):a,p=c[0];p?p.values.forEach(((e,o)=>{const r=String(e.label||"").trim();if(!r)return;const n=i(e.value),l="delta"===(null===n||void 0===n?void 0:n.mode)||"absolute"===(null===n||void 0===n?void 0:n.mode)?n.value:0;t.addons.push({id:`mig_addon_${o}_${r.slice(0,12)}`,labelEn:r,labelAr:String(e.labelAr||e.label||"").trim()||r,priceModifier:l})})):n[1]&&n[1].data.values.forEach(((e,o)=>{const r=String(e.label||"").trim();if(!r)return;const n=i(e.value);let l=0;("delta"===(null===n||void 0===n?void 0:n.mode)||"absolute"===(null===n||void 0===n?void 0:n.mode))&&(l=n.value),t.addons.push({id:`mig_addon_${o}_${r.slice(0,12)}`,labelEn:r,labelAr:String(e.labelAr||e.label||"").trim()||r,priceModifier:l})}));const v=d[0]||l.find(s);if(v&&v.values.forEach(((e,o)=>{const r=String(e.label||"").trim();r&&t.removals.push({id:`mig_rem_${o}_${r.slice(0,12)}`,labelEn:r,labelAr:String(e.labelAr||e.label||"").trim()||r})})),!t.sizes.length&&m.length){m[0].values.forEach(((e,o)=>{const r=String(e.label||"").trim();if(!r)return;const n=i(e.value),l="delta"===(null===n||void 0===n?void 0:n.mode)||"absolute"===(null===n||void 0===n?void 0:n.mode)?n.value:0;t.sizes.push({id:`mig_rsize_${o}`,labelEn:r,labelAr:String(e.labelAr||e.label||"").trim()||r,priceModifier:l})}))}const h=(0,r.s3)(t);return h.version=r.m5,h}function l(e){var t;return!(null===e||void 0===e||null===(t=e.components)||void 0===t||!t.length)&&e.components.some((e=>e&&("select"===e.type||"selectboxes"===e.type||"radio"===e.type)&&"button"!==e.type))}},81926:(e,t,o)=>{o.r(t),o.d(t,{trackAddToCart:()=>v,trackCheckoutStart:()=>h,trackEvent:()=>u,trackItemView:()=>p,trackOrderPlaced:()=>f,trackPageView:()=>m,trackSearch:()=>g,trackVisit:()=>c});var r=o(7763);const i="https://staging-api.menugic.com",n=()=>{let e=localStorage.getItem("menugic_visitor_id");return e||(e=`visitor_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,localStorage.setItem("menugic_visitor_id",e)),e},l=()=>{let e=sessionStorage.getItem("menugic_session_id");return e||(e=`session_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,sessionStorage.setItem("menugic_session_id",e)),e},a=()=>{const e=window.innerWidth;return e<768?"mobile":e<1024?"tablet":"desktop"},s={},d=e=>!!s[e]||(s[e]=!0,!1),c=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!d(`visit_${e}`))try{const o=(()=>{const e=new URLSearchParams(window.location.search),t=e.get("utm_source"),o=e.get("utm_medium"),r=e.get("utm_campaign");if("true"===e.get("qr")||"qr"===e.get("source"))return{source:"QR",medium:o||null,campaign:r||null,utm_source:t,utm_medium:o,utm_campaign:r};const i=document.referrer;if(i)try{const e=new URL(i).hostname.toLowerCase();if(e.includes("instagram.com"))return{source:"Instagram",medium:o||"social",campaign:r||null,utm_source:t||"instagram",utm_medium:o||"social",utm_campaign:r};if(e.includes("facebook.com"))return{source:"Facebook",medium:o||"social",campaign:r||null,utm_source:t||"facebook",utm_medium:o||"social",utm_campaign:r};if(e.includes("tiktok.com"))return{source:"TikTok",medium:o||"social",campaign:r||null,utm_source:t||"tiktok",utm_medium:o||"social",utm_campaign:r};if(e.includes("google.com")||e.includes("google."))return{source:"Google",medium:o||"organic",campaign:r||null,utm_source:t||"google",utm_medium:o||"organic",utm_campaign:r};if(e.includes("whatsapp.com")||e.includes("wa.me"))return{source:"WhatsApp",medium:o||"messaging",campaign:r||null,utm_source:t||"whatsapp",utm_medium:o||"messaging",utm_campaign:r}}catch(n){}return{source:t||"Direct",medium:o||null,campaign:r||null,utm_source:t,utm_medium:o,utm_campaign:r}})(),r=n(),s={restaurant_id:e,branch_id:t,session_id:l(),visitor_id:r,source:o.source,medium:o.medium,campaign:o.campaign,utm_source:o.utm_source,utm_medium:o.utm_medium,utm_campaign:o.utm_campaign,landing_page:window.location.pathname,device_type:a(),language:navigator.language||navigator.userLanguage||"en",referrer:document.referrer||null};fetch(`${i}/analytics/track/visit`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).catch((e=>console.error("Error tracking visit:",e)))}catch(o){console.error("Error in trackVisit:",o)}},u=async function(e,t){let{branchId:o=null,productId:r=null,categoryId:a=null,orderId:s=null,orderType:d=null,revenue:c=null,quantity:u=null,metadata:m=null}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};try{const p=n(),v={restaurant_id:e,branch_id:o,session_id:l(),visitor_id:p,event_type:t,product_id:r,category_id:a,order_id:s,order_type:d,revenue:c,quantity:u,metadata:m};fetch(`${i}/analytics/track/event`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}).catch((e=>{console.error("Error tracking event:",e)}))}catch(p){console.error("Error in trackEvent:",p)}},m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;d(`pageview_${e}`)||(u(e,"page_view",{branchId:t}),(0,r.y$)())},p=function(e,t,o){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};u(e,"item_view",{branchId:arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,productId:t,categoryId:o}),(0,r.KP)({productId:t,productName:i.name||"",price:i.price||0,category:i.category||""})},v=function(e,t,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};u(e,"add_to_cart",{branchId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,productId:t,categoryId:o,quantity:i}),(0,r.Ku)({productId:t,productName:n.name||"",price:n.price||0,quantity:i})},h=function(e){let t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};u(e,"checkout_start",{branchId:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,orderType:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}),(0,r.PU)({items:t.items||[],totalValue:t.totalValue||0})},g=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;!t||t.trim().length<2||u(e,"search",{searchQuery:t.trim().toLowerCase(),resultsCount:o})},f=function(e,t,o,i){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;u(e,"order_placed",{branchId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,orderId:t,orderType:o,revenue:i,metadata:n}),(0,r.r0)({orderId:t,items:(null===n||void 0===n?void 0:n.items)||[],totalValue:i||0})}},18907:(e,t,o)=>{o.d(t,{T:()=>r});const r=(e,t)=>{let o;return o="$"==t?e%1===0?`${e.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}${t}`:`${e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}).replace(/\B(?=(\d{3})+(?!\d))/g,",")}${t}`:`${e.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}${t}`,o}},70268:(e,t,o)=>{o.d(t,{gO:()=>n,wU:()=>i,zV:()=>l});const r=e=>`menugic_customer_token_${e||"default"}`,i=e=>{try{return localStorage.getItem(r(e))||""}catch{return""}},n=(e,t)=>{try{t?localStorage.setItem(r(e),t):localStorage.removeItem(r(e))}catch{}(e=>{try{"undefined"!==typeof window&&window.dispatchEvent(new CustomEvent("menugic-customer-auth",{detail:{restaurantName:e||""}}))}catch{}})(e)},l=e=>{n(e,null)}},67059:(e,t,o)=>{o.d(t,{JT:()=>i,JW:()=>r});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"961";if(!e)return"";const o=e.replace(/\s/g,"");return o.startsWith(t)?o:o.startsWith("+")?o.replace("+",""):t+o},i=(e,t)=>{const o=encodeURIComponent(t),r=navigator.userAgent||"",i=/iPhone|iPad|iPod|Android/i.test(r),n=`https://wa.me/${e}?text=${o}`;if(!i)return void(window.location.href=`https://web.whatsapp.com/send?phone=${e}&text=${o}`);const l=`whatsapp://send?phone=${e}&text=${o}`,a=Date.now();window.location.href=l,setTimeout((()=>{Date.now()-a<2e3&&(window.location.href=n)}),1500)}},58821:(e,t,o)=>{o.d(t,{V:()=>r});const r=e=>e?e.startsWith("http://")||e.startsWith("https://")?e:`https://storage.googleapis.com/ecommerce-bucket-testing/${e}`:""},26557:(e,t,o)=>{o.d(t,{T:()=>i,Y:()=>l,getCookie:()=>n});var r=o(38);const i=(e,t)=>{const o=new Date;o.setFullYear(o.getFullYear()+1),r.A.set(e,t,{expires:o})},n=e=>r.A.get(e),l=e=>r.A.remove(e)}}]);
//# sourceMappingURL=8440.ba0844da.chunk.js.map