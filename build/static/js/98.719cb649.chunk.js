"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[98],{90781:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Ie});var i=o(82483),n=o(41190),r=o(42751),a=o(22829);const l=n.Ay.div`
min-height: 100vh;
width: 100%;
position: relative;
background-color: ${e=>e.theme.backgroundColor};
font-family: ${e=>`${e.theme.font}, "Noto Kufi Arabic" !important`};
/* @media (min-width: 1024px) {
        width: 30%;
    } */
`,d=n.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
height: 100%;
position: relative;
padding-bottom: 70px;
`,s=n.Ay.div`
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
`,n.Ay.div`
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
`,n.Ay.div`
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
`;var c=o(99891),u=o(93376),p=o(91965),h=o(24192),x=o(50795),g=o(31088),f=o(85327),m=o(5677),v=o(38495),w=o(79111),y=o(65445),b=o(88564);const k=n.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,C=n.Ay.div`
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
  animation: ${k} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,$=n.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,A=n.Ay.div`
  display: flex;
  gap: 10px;
`,j=n.Ay.button`
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
`,S=n.Ay.button`
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

`;var _=o(56723);const P=e=>{let{onInstall:t,onDismiss:o,restaurantName:i,showInstallPopup:n}=e;return(0,_.jsxs)(C,{showInstallPopup:n,children:[(0,_.jsxs)($,{children:["Access ",(0,_.jsx)("b",{children:i})," anytime with one tap ",(0,_.jsx)("b",{children:"Install The App!"})]}),(0,_.jsxs)(A,{children:[(0,_.jsx)(j,{onClick:t,children:"Install"}),(0,_.jsx)(S,{onClick:o,children:"Dismiss"})]})]})};var z=o(34500),I=o(42978),E=o(15831),T=o(71481);const L=n.i7`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,R=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 6px;
`,N=n.Ay.div`
  width: 94%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${e=>e.theme.BoxColor};
  border-radius: 14px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
`,B=n.Ay.div`
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-left-color: ${e=>e.theme.mainColor||"#333"};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: ${L} 0.9s linear infinite;
`,U=n.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 91%;
  height: 15vh;
  min-height: 90px;
  max-height: 140px;
  border-radius: 10px;
  overflow: hidden;
  top: 8px;
  z-index: 2;
  background-color: ${e=>e.theme.categoryUnactive||e.theme.categoryUnActive};
`,F=n.Ay.div`
  position: relative;
  width: 100%;
  height: 15vh;
  min-height: 90px;
  max-height: 140px;
  overflow: hidden;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
`,H=n.Ay.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  visibility: ${e=>e.$loaded?"visible":"hidden"};
`,O=n.Ay.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: ${e=>e.$en?"left":"right"};
  position: relative;
  align-items: ${e=>e.$en?"flex-start":"flex-end"};
  gap: 4px;
  min-height: 52px;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-bottom: 2px;
`,D=n.Ay.div`
  position: absolute;
  top: 6px;
  right: 6px;
  left: auto;
  bottom: auto;
  z-index: 4;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText};
  border-radius: 4px;
  line-height: 1.2;
`,V=n.Ay.span`
  font-size: ${e=>e.$fs||"12px"};
  font-weight: 500;
  color: ${e=>e.theme.BoxTextColor};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.35em;
  max-height: 2.7em;
  width: 100%;
  cursor: pointer;
`,q=n.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: ${e=>e.$en?"row":"row-reverse"};
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  margin-top: 4px;
  padding-bottom: 6px;
`,M=n.Ay.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  justify-content: ${e=>e.$en?"flex-start":"flex-end"};
`,K=n.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  align-items: baseline;
`,J=n.Ay.span`
  color: ${e=>e.theme.BoxPriceColor};
  font-size: 12px;
  font-weight: ${e=>e.$discounted?400:600};
  word-spacing: 0;
  text-decoration: ${e=>e.$discounted?"line-through":"none"};
  opacity: ${e=>e.$discounted?.75:1};
`,Q=n.Ay.span`
  color: ${e=>e.theme.BoxPriceColor};
  font-size: 11px;
  font-weight: 600;
  word-spacing: 0;
`,W=n.Ay.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,X=n.Ay.button`
  min-width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  z-index: 1;
`,G=n.Ay.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${e=>e.theme.mainColor};
`,Y=n.Ay.button`
  width: 26px;
  height: 26px;
  border: none;
  background: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`,Z=n.Ay.span`
  min-width: 22px;
  text-align: center;
  font-weight: 700;
  font-size: 11px;
  background: ${e=>e.theme.BoxColor};
  color: ${e=>e.theme.BoxTextColor};
  padding: 0 3px;
`,ee=n.Ay.span`
  font-size: 9px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
`,te=n.Ay.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: calc(100vh - 120px);
  max-width: 100%;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  ${e=>e.$isRtl?"\n    flex-direction: row-reverse;\n  ":""}
`,oe=n.Ay.aside`
  width: 76px;
  min-width: 76px;
  flex-shrink: 0;
  border-right: none;
  border-left: ${e=>e.$isRtl?`1px solid ${e.theme.categoryUnActive||"#e5e7eb"}`:"none"};
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 140px);
  position: sticky;
  top: 72px;
  align-self: flex-start;
  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.04);
`,ie=n.Ay.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  padding: 6px 4px 12px;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,ne=n.Ay.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding: 8px 3px;
  margin-bottom: 3px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: ${e=>e.$active?`${e.theme.mainColor||"#2563eb"}18`:"transparent"};
  border-left: ${e=>e.$active?`3px solid ${e.theme.mainColor||"#2563eb"}`:"3px solid transparent"};
  color: ${e=>e.$active?e.theme.mainColor||e.theme.categoryActiveText||"#2563eb":e.theme.categoryUnactiveText||e.theme.BoxTextColor||e.theme.textColor||"#334155"};
  transition: background 0.2s, border-color 0.2s, transform 0.15s;

  &:active {
    transform: scale(0.97);
  }
`,re=n.Ay.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  overflow: hidden;
  background: ${e=>e.$active?"rgba(255,255,255,0.25)":e.theme.categoryUnActive||"#f1f5f9"};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
    object-fit: fill;
  }
`,ae=n.Ay.span`
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.2px;
  text-align: center;
  line-height: 1.2;
  max-width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
`,le=n.Ay.main`
  flex: 1;
  min-width: 0;
  padding: 8px 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,de=n.Ay.input`
  width: 100%;
  padding: 9px 12px;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.categoryUnActive||"#e5e7eb"};
  background: ${e=>e.theme.BoxColor||"#fff"};
  color: ${e=>e.theme.BoxTextColor||e.theme.textColor||"#111"};
  font-size: 13px;
  outline: none;
  &::placeholder {
    opacity: 0.5;
  }
  &:focus {
    border-color: ${e=>e.theme.mainColor||"#2563eb"};
  }
`,se=n.Ay.h2`
  margin: 0 0 4px;
  font-size: 17px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor};
  text-align: ${e=>e.$isRtl?"right":"left"};
`,ce=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ue=(n.Ay.article`
  background: ${e=>e.theme.BoxColor||"#fff"};
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 0;
`,n.Ay.div`
  position: relative;
  width: 100%;
  height: 16vh;
  min-height: 110px;
  max-height: 180px;
  background: ${e=>e.theme.categoryUnActive||"#f1f5f9"};
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,n.Ay.div`
  position: absolute;
  top: 8px;
  ${e=>e.$isRtl?"left":"right"}: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  max-width: 70%;
  justify-content: ${e=>e.$isRtl?"flex-start":"flex-end"};
  z-index: 2;
`,n.Ay.span`
  font-size: 10px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 8px;
  background: ${e=>"sale"===e.$variant?"#ef4444":e.theme.mainColor};
  color: #fff;
`,n.Ay.div`
  padding: 8px 8px 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: ${e=>e.$isRtl?"right":"left"};
`,n.Ay.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: ${e=>e.theme.BoxTextColor||e.theme.textColor};
  line-height: 1.25;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: pointer;
`,n.Ay.p`
  margin: 0;
  font-size: 11px;
  color: ${e=>e.theme.textColor};
  opacity: 0.75;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
  flex-wrap: wrap;
  flex-direction: ${e=>e.$isRtl?"row-reverse":"row"};
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,n.Ay.span`
  font-size: 12px;
  text-decoration: line-through;
  opacity: 0.55;
`,n.Ay.span`
  font-size: 15px;
  font-weight: 800;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor};
`,n.Ay.button`
  min-width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  z-index: 1;
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,n.Ay.div`
  display: flex;
  align-items: center;
  gap: 0;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${e=>e.theme.mainColor};
  z-index: 1;
`,n.Ay.button`
  width: 32px;
  height: 32px;
  border: none;
  background: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,n.Ay.span`
  min-width: 28px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  background: ${e=>e.theme.BoxColor||"#fff"};
  color: ${e=>e.theme.BoxTextColor||"#111"};
  padding: 0 4px;
`,n.Ay.div`
  font-size: 11px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  padding: 6px 0;
`,n.Ay.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  color: ${e=>e.theme.mainColor};
  font-size: 13px;
`),pe=n.Ay.section`
  margin-bottom: 20px;
`;var he=o(73422),xe=o(34304),ge=o.n(xe),fe=o(18907),me=o(86001),ve=o(88282),we=o(42186),ye=o(81926),be=o(73556),ke=o(28471);function Ce(e,t){const o=(0,be.xC)(e);if("v2"===o.kind&&(0,be.nS)(o.data))return{source:"product",parsed:o};if("legacy"===o.kind&&(0,ke.VN)(o.data)){const e=(0,ke.Oz)(o.data);return(0,be.nS)(e)?{source:"product",parsed:{kind:"v2",data:e}}:{source:"product",parsed:o}}"v2"===o.kind&&(0,be.nS)(o.data);const i=(0,be.xC)(t);if("v2"===i.kind&&(0,be.nS)(i.data))return{source:"category",parsed:i};if("legacy"===i.kind&&(0,ke.VN)(i.data)){const e=(0,ke.Oz)(i.data);return(0,be.nS)(e)?{source:"category",parsed:{kind:"v2",data:e}}:{source:"category",parsed:i}}return"v2"===o.kind||"legacy"===o.kind?{source:"product",parsed:o}:"v2"===i.kind||"legacy"===i.kind?{source:"category",parsed:i}:{source:"none",parsed:{kind:"v2",data:(0,be.yu)()}}}var $e=o(58821),Ae=o(2200);const je=function(e){var t,o,n,r;let{plate:a,activeCategoryId:l,categories:d,restaurantName:s,restaurant:u,features:h}=e;const x=(0,p.wA)(),[g,f]=(0,c.ok)(),m=(0,we.jE)(),[v,w]=(0,i.useState)(!1),y=(0,p.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[s])||void 0===o?void 0:o.activeLanguage)||"en"})),b="en"===y,k=(0,p.d4)((e=>{var t;return(null===(t=e.cart)||void 0===t?void 0:t[s])||[]})),C="all-items"===l?a.category_id:l,$=d.find((e=>String(e.id)===String(C)));let A=0;A=$&&0===parseFloat($.discount||0)?parseFloat(a.discount||0):$?parseFloat($.discount||0):parseFloat(a.discount||0);const j=(0,Ae.Q)(null===u||void 0===u?void 0:u.currency),S=Boolean(null===a||void 0===a?void 0:a.out_of_stock)||1===Number(null===a||void 0===a?void 0:a.out_of_stock),P=null!==(t=null===(o=a.images)||void 0===o?void 0:o.findIndex((e=>e.id===a.new_cover_id)))&&void 0!==t?t:-1,z=P>=0&&(null===(n=a.images)||void 0===n||null===(r=n[P])||void 0===r?void 0:r.url),I=null!==u&&void 0!==u&&u.logoURL?(0,$e.V)(u.logoURL):"",E=z?(0,$e.V)(a.images[P].url):I,L=function(e,t){const{parsed:o}=Ce(e,t);if("v2"===o.kind)return(0,be.nS)(o.data);if("legacy"===o.kind){const e=(0,ke.Oz)(o.data);return!!(0,be.nS)(e)||(0,ke.VN)(o.data)}return!1}(null===a||void 0===a?void 0:a.form_json,null===$||void 0===$?void 0:$.form_json),te=parseFloat((null===a||void 0===a?void 0:a.en_price)||"0"),oe=te*(1-A/100),ie=k.find((e=>String(e.id)===String(a.id)&&(!e.formData||0===Object.keys(e.formData).length))),ne=(null===ie||void 0===ie?void 0:ie.quantity)||0,re=!1!==(null===h||void 0===h?void 0:h.cart);(0,i.useEffect)((()=>{E||w(!0)}),[E]);const ae=(0,i.useCallback)((()=>{if(E&&!v)return;const e=new URLSearchParams(g);if(e.set("productId",a.id),"all-items"===l?e.set("categoryId","all-items"):l&&e.set("categoryId",String(l)),f(e),window.history.pushState({},"",`?${e.toString()}`),document.body.style.overflow="hidden",null!==u&&void 0!==u&&u.id&&null!==a&&void 0!==a&&a.id){var t,o;const e="all-items"===l?a.category_id:l;(0,ye.trackItemView)(u.id,a.id,e,(null===u||void 0===u||null===(t=u.branches)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.id)||null)}}),[a,l,g,f,u,v,E]),le=(0,i.useCallback)((()=>{null!==a&&void 0!==a&&a.id&&m.prefetchQuery({queryKey:(0,ve.Nb)(a.id),queryFn:()=>(0,ve.oo)(a.id),staleTime:3e5})}),[null===a||void 0===a?void 0:a.id,m]),de="en"===y?a.en_name:a.ar_name,se=null!==u&&void 0!==u&&u.font_size&&String(u.font_size).trim()?u.font_size:"12px",ce=!ge().isEmpty(a.en_price),ue=0!==A;return(0,_.jsx)(R,{children:(0,_.jsxs)(N,{children:[!v&&E&&(0,_.jsx)(U,{children:(0,_.jsx)(B,{})}),(0,_.jsxs)(F,{onClick:ae,onMouseEnter:le,onTouchStart:le,children:[a.new&&(0,_.jsx)(D,{children:"en"===y?"NEW !":"! \u062c\u062f\u064a\u062f"}),E&&(0,_.jsx)(H,{src:E,alt:de,loading:"lazy",$loaded:v,onLoad:()=>w(!0),onError:()=>w(!0)})]}),(0,_.jsxs)(O,{$en:b,children:[(0,_.jsx)(V,{$fs:se,onClick:()=>v&&ae(),children:de}),(ce||re)&&(0,_.jsxs)(q,{$en:b,children:[(0,_.jsx)(M,{$en:b,children:ce&&(0,_.jsxs)(K,{children:[(0,_.jsx)(J,{$discounted:ue,children:(0,fe.T)(te,j)}),ue&&(0,_.jsx)(Q,{children:(0,fe.T)(oe,j)})]})}),re&&(0,_.jsx)(W,{children:S?(0,_.jsx)(ee,{children:"en"===y?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631"}):ne>0?(0,_.jsxs)(G,{children:[(0,_.jsx)(Y,{type:"button",onClick:e=>{null===e||void 0===e||e.stopPropagation(),ie&&(ie.quantity<=1?x((0,me.dt)(s,ie.uniqueId)):x((0,me.v)(s,ie.uniqueId,ie.quantity-1)))},children:"\u2212"}),(0,_.jsx)(Z,{children:ne}),(0,_.jsx)(Y,{type:"button",onClick:e=>{null===e||void 0===e||e.stopPropagation(),ie&&x((0,me.v)(s,ie.uniqueId,ie.quantity+1))},children:"+"})]}):(0,_.jsx)(X,{type:"button",onClick:e=>{if(null===e||void 0===e||e.stopPropagation(),null===e||void 0===e||e.preventDefault(),re&&!S)if(L)ae();else{if(x((0,me.bE)(s,a,1,{},oe,"")),null!==u&&void 0!==u&&u.id&&null!==a&&void 0!==a&&a.id){var t,o;const e="all-items"===l?a.category_id:l;(0,ye.trackAddToCart)(u.id,a.id,e,1,(null===u||void 0===u||null===(t=u.branches)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.id)||null)}he.oR.success("en"===y?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629")}},onMouseDown:e=>e.stopPropagation(),title:"en"===y?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,_.jsx)(T._xK,{size:11})})})]})]})]})})};var Se=o(9328),_e=o(32415);function Pe(e){var t;let{categories:o,activeCategory:n,onCategoryChange:r,searchText:a,setSearchText:l,menu:d,showPopup:s}=e;const{restaurantName:c}=(0,u.g)(),h=window.location.hostname.split(".")[0],x="menugic"!==h&&"localhost"!==h&&"www"!==h?h:c,g=(0,p.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]})),f=(0,p.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[x])||void 0===o?void 0:o.activeLanguage)||"en"})),m="ar"===f;let v={};try{v="string"===typeof(null===g||void 0===g?void 0:g.features)?JSON.parse(g.features||"{}"):(null===g||void 0===g?void 0:g.features)||{}}catch(F){v={}}const w="all-items"===n,y=n&&!w?String(n):null,{data:b,fetchNextPage:k,hasNextPage:C,isFetchingNextPage:$}=(0,Se.w)(y),{data:A,fetchNextPage:j,hasNextPage:S,isFetchingNextPage:P}=(0,_e.u)(w?null===g||void 0===g?void 0:g.id:null),z=(null===A||void 0===A||null===(t=A.pages)||void 0===t?void 0:t.flat())||[],I=(0,i.useMemo)((()=>{var e,t;if(w)return[];const o=(a||"").toLowerCase();return(null===b||void 0===b||null===(e=b.pages)||void 0===e||null===(t=e.flat())||void 0===t?void 0:t.filter((e=>{if(Boolean(null===e||void 0===e?void 0:e.hide)||1===Number(null===e||void 0===e?void 0:e.hide))return!1;return(e["en"===f?"en_name":"ar_name"]||"").toLowerCase().includes(o)})))||[]}),[b,a,f,w]),E=(0,i.useMemo)((()=>{if(!w)return[];const e=(a||"").toLowerCase();return(o||[]).filter((e=>!e.isAllItems)).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))).map((t=>{const o=z.filter((o=>{if(Boolean(null===o||void 0===o?void 0:o.hide)||1===Number(null===o||void 0===o?void 0:o.hide))return!1;if(String(o.category_id)!==String(t.id))return!1;const i=o["en"===f?"en_name":"ar_name"]||"";return!e||i.toLowerCase().includes(e)})).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0)));return{category:t,items:o}})).filter((e=>e.items.length>0))}),[w,z,o,a,f]),L=(0,i.useRef)(),R=(0,i.useRef)();(0,i.useEffect)((()=>{if(w)return;const e=new IntersectionObserver((e=>{var t;null!==(t=e[0])&&void 0!==t&&t.isIntersecting&&C&&!$&&k()}),{threshold:.1});return L.current&&e.observe(L.current),()=>{L.current&&e.unobserve(L.current)}}),[C,$,k,w]),(0,i.useEffect)((()=>{if(!w)return;const e=new IntersectionObserver((e=>{var t;null!==(t=e[0])&&void 0!==t&&t.isIntersecting&&S&&!P&&j()}),{threshold:.15});return R.current&&e.observe(R.current),()=>{R.current&&e.unobserve(R.current)}}),[w,S,P,j]);const N=o.find((e=>String(e.id)===String(n))),B=N&&("en"===f?N.en_category:N.ar_category),U="en"===f?"Search menu\u2026":"\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629\u2026";return(0,_.jsxs)(te,{$isRtl:m,children:[(0,_.jsx)(oe,{$isRtl:m,children:(0,_.jsx)(ie,{children:(o||[]).map((e=>{const t="en"===f?e.en_category:e.ar_category,o=String(e.id)===String(n),i=e.image_url?(0,$e.V)(e.image_url):null;return(0,_.jsxs)(ne,{type:"button",$active:o,onClick:()=>r(e.id),children:[(0,_.jsx)(re,{$active:o,children:i?(0,_.jsx)("img",{src:i,alt:""}):(0,_.jsx)(T.svy,{size:18,style:{opacity:.6}})}),(0,_.jsx)(ae,{children:t})]},e.id)}))})}),(0,_.jsxs)(le,{children:[(0,_.jsx)(de,{type:"search",placeholder:U,value:a,onChange:e=>l(e.target.value),dir:m?"rtl":"ltr"}),!w&&(0,_.jsxs)(_.Fragment,{children:[B&&(0,_.jsx)(se,{$isRtl:m,children:B}),(0,_.jsx)(ce,{children:I.map((e=>(0,_.jsx)(je,{plate:e,activeCategoryId:n,categories:o,restaurantName:x,restaurant:g,features:v},e.id)))}),(0,_.jsx)("div",{ref:L,style:{height:24}}),$&&(0,_.jsx)(ue,{children:"en"===f?"Loading\u2026":"\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026"})]}),w&&E.map((e=>(0,_.jsxs)(pe,{children:[(0,_.jsx)(se,{$isRtl:m,children:"en"===f?e.category.en_category:e.category.ar_category}),(0,_.jsx)(ce,{children:e.items.map((e=>(0,_.jsx)(je,{plate:e,activeCategoryId:"all-items",categories:o,restaurantName:x,restaurant:g,features:v},e.id)))})]},e.category.id))),w&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{ref:R,style:{height:32}}),P&&(0,_.jsx)(ue,{children:"en"===f?"Loading\u2026":"\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026"})]})]})]})}var ze=o(92733);function Ie(){var e,t;const[o,n]=(0,c.ok)(),r=o.get("productId"),a=o.get("categoryId"),k=o.get("page"),[C,$]=(0,i.useState)(!1),{restaurantName:A}=(0,u.g)(),j=window.location.hostname.split(".")[0],S="menugic"!==j&&"localhost"!==j&&"www"!==j?j:A,T=(0,p.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[S]})),L=(0,p.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[S])||void 0===o?void 0:o.activeLanguage)||"en"}));let R={};try{R=JSON.parse((null===T||void 0===T?void 0:T.features)||"{}")}catch(xe){R={}}(0,i.useEffect)((()=>(document.documentElement.setAttribute("dir","ar"===L?"rtl":"ltr"),()=>document.documentElement.removeAttribute("dir"))),[L]);const N=1===Number(null===T||void 0===T?void 0:T.template_id)&&(!0===(null===T||void 0===T?void 0:T.show_all_items_category)||1===(null===T||void 0===T?void 0:T.show_all_items_category)||"1"===(null===T||void 0===T?void 0:T.show_all_items_category)),B={id:"all-items",en_category:"All Items",ar_category:"\u0643\u0644 \u0627\u0644\u0623\u0635\u0646\u0627\u0641",isAllItems:!0,priority:999999,image_url:(null===T||void 0===T?void 0:T.logoURL)||(null===T||void 0===T?void 0:T.cover_url)||null},U=[...(null===T||void 0===T?void 0:T.categories)||[]].sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))),F=N?[B,...U]:U,H=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const i=null===(e=F[0])||void 0===e?void 0:e.id,r=null!==t&&void 0!==t?t:i;if(!r)return;ce(r),ie("menu"),J("");const a=new URLSearchParams(o);a.set("categoryId",String(r)),n(a),window.scrollTo({top:0,behavior:"smooth"})},O=()=>{var e;ie("menu");const t=null===F||void 0===F||null===(e=F[0])||void 0===e?void 0:e.id;if(t){ce(t),J("");const e=new URLSearchParams(o);e.set("categoryId",String(t)),n(e),window.scrollTo({top:0,behavior:"smooth"})}},D=()=>{window.history.pushState({},""),ue("feedback")},V=()=>{window.history.pushState({},""),ue("contactForm")},[q,M]=(0,i.useState)(null),[K,J]=(0,i.useState)(""),[Q,W]=(0,i.useState)(null),[X,G]=(0,i.useState)(null),[Y,Z]=(0,i.useState)(!0),[ee,te]=(0,i.useState)(0),[oe,ie]=(0,i.useState)("menu"),ne=(0,i.useRef)(oe),re=(0,i.useRef)(q),ae=(0,i.useRef)(Q),[le]=(0,i.useState)(0),[de]=(0,i.useState)(null),[se,ce]=(0,i.useState)(a||null),ue=e=>{document.body.style.overflow=null==e?"auto":"hidden",M(e)};(0,i.useEffect)((()=>{const e=e=>{e.preventDefault(),G(e),Z(!0)};return window.addEventListener("beforeinstallprompt",e),()=>window.removeEventListener("beforeinstallprompt",e)}),[]),(0,i.useEffect)((()=>{if(null!==T&&void 0!==T&&T.id){var e,t;const o=(null===T||void 0===T||null===(e=T.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,ye.trackVisit)(T.id,o),(0,ye.trackPageView)(T.id,o)}}),[null===T||void 0===T?void 0:T.id]);if((0,i.useEffect)((()=>{a&&(ce(a),ie("menu"))}),[a]),(0,i.useEffect)((()=>{var e;if(null===T||void 0===T||!T.id)return;if(a)return;if(se)return;const t=null===F||void 0===F||null===(e=F[0])||void 0===e?void 0:e.id;if(!t)return;ce(t),J("");const i=new URLSearchParams(o);i.set("categoryId",String(t)),n(i),window.scrollTo({top:0,behavior:"smooth"})}),[null===T||void 0===T?void 0:T.id,a,se,F,o,n]),(0,i.useEffect)((()=>{!r&&!a||!q||"feedback"!==q&&"contactForm"!==q||ue(null)}),[r,a]),(0,i.useEffect)((()=>{ne.current!==oe&&("menu"!==oe||a||r||k||window.history.pushState({viewMode:"menu"},"",window.location.href),ne.current=oe)}),[oe,a,r,k]),(0,i.useEffect)((()=>{re.current!==q&&(q&&window.history.pushState({popup:q},"",window.location.href),re.current=q)}),[q]),(0,i.useEffect)((()=>{ae.current!==Q&&(Q&&(ue(null),window.history.pushState({sidebar:!0},"",window.location.href)),ae.current=Q)}),[Q]),(0,i.useEffect)((()=>{const e=()=>{const e=new URLSearchParams(window.location.search);$(null!==e.get("productId"))};e();const t=window.history.pushState,o=window.history.replaceState;return window.history.pushState=function(){for(var o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];t.apply(window.history,i),setTimeout(e,0)},window.history.replaceState=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];o.apply(window.history,i),setTimeout(e,0)},window.addEventListener("popstate",e),()=>{window.history.pushState=t,window.history.replaceState=o,window.removeEventListener("popstate",e)}}),[o]),(0,i.useEffect)((()=>{const e=e=>{const t=new URLSearchParams(window.location.search),o=t.get("productId"),i=t.get("categoryId"),n=t.get("page");Q?W(!1):q?ue(null):o||n||i||(ie("menu"),ce(null),J(""))};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[q,Q]),!T)return null;const pe=(null===T||void 0===T?void 0:T.sliderImages)||[],he=(!0===(null===T||void 0===T?void 0:T.show_slider_image)||1===(null===T||void 0===T?void 0:T.show_slider_image)||"1"===(null===T||void 0===T?void 0:T.show_slider_image))&&pe.length>0;return(0,_.jsxs)(l,{id:"wrapper",children:[(0,_.jsx)(z.A,{onProductsClick:()=>{O()},onSocialMediaClick:()=>{O()},onBranchesClick:()=>{window.history.pushState({},""),ue("location")},onContactFormClick:V,onFeedbackClick:D,onAboutClick:!1!==(null===T||void 0===T?void 0:T.show_about_us)?()=>{window.history.pushState({},""),ue("about")}:void 0,onOrderClick:()=>{var e;null!==(e=R)&&void 0!==e&&e.cart&&ue("cart")},onHomeClick:void 0,onCategoryClick:e=>{H(e)},onContactClick:V,categories:F,activeCategory:se,setshowSidebar:W,showSidebar:Q,popupHandler:ue,isProductDetailsOpen:C||"about"===q}),he&&(0,_.jsx)(ze.A,{images:pe,activeLanguage:L,variant:"theme1"}),(0,_.jsxs)(d,{onClick:()=>{null!=q&&ue(null)},children:[(0,_.jsx)(s,{showPopup:q}),se&&F.length>0&&(0,_.jsx)(Pe,{categories:F,activeCategory:se,onCategoryChange:e=>{ce(e);const t=new URLSearchParams(o);t.set("categoryId",String(e)),n(t)},searchText:K,setSearchText:J,menu:(null===T||void 0===T?void 0:T.categories)||[],showPopup:q})]}),(0,_.jsx)(h.A,{restaurant:T,showPopup:q,popupHandler:ue}),(null===(e=R)||void 0===e?void 0:e.cart)&&(0,_.jsx)(x.A,{restaurant:T,showPopup:q,popupHandler:ue}),(0,_.jsx)(b.A,{showPopup:q,popupHandler:ue,activeCategory:se}),(0,_.jsx)(f.A,{restaurant:T,showPopup:q,popupHandler:ue}),(0,_.jsx)(g.A,{restaurant:T,showPopup:q,popupHandler:ue,isPage:!1}),(0,_.jsx)(m.A,{restaurant:T,showPopup:q,popupHandler:ue,isPage:!1}),(0,_.jsx)(v.A,{showPopup:q,popupHandler:ue}),(0,_.jsx)(w.A,{categories:F,activeCategory:se,setactiveCategory:ce,setshowSidebar:W,showSidebar:Q,setcarouselPosition:te,onHomeClick:O,onCategoryClick:e=>{H(e)},onFeedbackClick:D,onContactClick:V,onBranchesClick:()=>{window.history.pushState({},""),ue("location")},branches:(null===T||void 0===T?void 0:T.branches)||[]}),r&&(0,_.jsx)(y.A,{productId:r,searchParams:o,setSearchParams:n}),(null===(t=R)||void 0===t?void 0:t.install_app)&&(0,_.jsx)(P,{showInstallPopup:Y,onInstall:async()=>{X&&(X.prompt(),await X.userChoice,G(null),Z(!1))},restaurantName:S,onDismiss:()=>Z(!1)}),(0,_.jsx)(I.A,{isProductDetailsOpen:C||"about"===q,activeView:"products",showPopup:q,onHomeClick:O,hideHome:!0,onCategoriesClick:()=>{O()},onCartClick:()=>{var e;null!==(e=R)&&void 0!==e&&e.cart&&ue("cart")},onBranchesClick:()=>{window.history.pushState({},""),ue("location")},onContactClick:V,onFeedbackClick:D,restaurantName:S,branches:(null===T||void 0===T?void 0:T.branches)||[]}),(0,_.jsx)(E.A,{trigger:le,sourceElement:de,onComplete:()=>{}})]})}}}]);
//# sourceMappingURL=98.719cb649.chunk.js.map