"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[680],{34943:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Ne});var i=o(82483),n=o(41190),r=o(42751),a=o(22829);const d=n.Ay.div`
min-height: 100vh;
width: 100%;
position: relative;
background-color: ${e=>e.theme.backgroundColor};
font-family: ${e=>`${e.theme.font}, "Noto Kufi Arabic" !important`};
/* @media (min-width: 1024px) {
        width: 30%;
    } */
`,l=n.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
height: 100%;
position: relative;
padding-bottom: calc(92px + env(safe-area-inset-bottom));
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
`;var c=o(99891),p=o(93376),h=o(91965),u=o(24192),m=o(81457),x=o(31088),g=o(85327),f=o(5677),b=o(38495),v=o(79111),w=o(88963),y=o(88564);const $=n.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,k=n.Ay.div`
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
  animation: ${$} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,C=n.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,j=n.Ay.div`
  display: flex;
  gap: 10px;
`,A=n.Ay.button`
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

`;var z=o(56723);const P=e=>{let{onInstall:t,onDismiss:o,restaurantName:i,showInstallPopup:n}=e;return(0,z.jsxs)(k,{showInstallPopup:n,children:[(0,z.jsxs)(C,{children:["Access ",(0,z.jsx)("b",{children:i})," anytime with one tap ",(0,z.jsx)("b",{children:"Install The App!"})]}),(0,z.jsxs)(j,{children:[(0,z.jsx)(A,{onClick:t,children:"Install"}),(0,z.jsx)(S,{onClick:o,children:"Dismiss"})]})]})};var T=o(79290),_=o(15831),E=o(27303),I=o(11222),B=o(45745);const L=n.Ay.div`
  width: min(100%, 1280px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr);
  gap: 16px;
  padding: 16px 16px 32px;
  align-items: start;
  @media (max-width: 479px) { grid-template-columns: minmax(0, 1fr); gap: 12px; padding: 12px; }
  @media (min-width: 768px) { grid-template-columns: 156px minmax(0, 1fr); gap: 24px; padding: 24px; }
  @media (min-width: 1100px) { grid-template-columns: 184px minmax(0, 1fr); gap: 32px; }
`,N=n.Ay.aside`
  position: sticky;
  top: 80px;
  min-width: 0;
  max-height: calc(100dvh - 180px);
  @media (max-width: 479px) { position: static; max-height: none; }
`,F=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: auto;
  max-height: inherit;
  padding: 3px;
  scrollbar-width: thin;
  @media (max-width: 479px) { flex-direction: row; overflow-x: auto; padding: 3px 3px 8px; }
`,U=n.Ay.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 72px;
  padding: 10px 4px;
  border: 1px solid transparent;
  border-radius: 14px;
  background: ${e=>e.$active?e.theme.categoryActive||e.theme.categoryUnActive||e.theme.BoxColor||"#fff":"transparent"};
  color: ${e=>e.$active?e.theme.categoryActiveText||e.theme.mainColor||"#222":e.theme.categoryUnactiveText||e.theme.BoxTextColor||e.theme.textColor||"#333"};
  box-shadow: ${e=>e.$active?`inset 0 0 0 1px ${e.theme.mainColor||"currentColor"}`:"none"};
  cursor: pointer;
  flex-shrink: 0;
  transition: background 160ms ease;
  @media (max-width: 479px) { width: auto; min-width: 76px; max-width: 116px; padding: 10px; }
  @media (min-width: 768px) { flex-direction: row; padding: 12px; min-height: 64px; text-align: start; }
`,R=n.Ay.span`
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: ${e=>e.theme.BoxColor||e.theme.backgroundColor||"#fff"};
  img { width: 100%; height: 100%; object-fit: cover; }
  img + svg { display: none; }
  img[hidden] { display: none; }
  img[hidden] + svg { display: block; }
`,q=n.Ay.span`
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.5;
  overflow-wrap: anywhere;
  @media (min-width: 768px) { font-size: 0.875rem; }
`,H=n.Ay.main`
  min-width: 0;
  scroll-margin-top: 84px;
`,M=n.Ay.div`
  display: flex;
  align-items: center;
  min-height: 48px;
  gap: 10px;
  padding-inline: 14px 4px;
  border: 1px solid ${e=>e.theme.categoryUnActive||"rgba(127,127,127,.22)"};
  border-radius: 14px;
  background: ${e=>e.theme.BoxColor||"#fff"};
  color: ${e=>e.theme.BoxTextColor||e.theme.textColor||"#222"};
  margin-bottom: 24px;
  &:focus-within { outline: 2px solid ${e=>e.theme.mainColor||"currentColor"}; outline-offset: 2px; }
  > svg { flex-shrink: 0; opacity: .7; }
`,D=n.Ay.input`
  width: 100%;
  min-width: 0;
  border: 0;
  padding-block: 12px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 1rem;
  outline: none;
  &::placeholder { color: inherit; opacity: .65; }
  &::-webkit-search-cancel-button { display: none; }
`,O=n.Ay.button`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border: 0;
  background: transparent;
  color: inherit;
  border-radius: 10px;
  cursor: pointer;
`,V=n.Ay.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
`,Q=n.Ay.h2`
  margin: 0;
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 700;
  line-height: 1.5;
  color: ${e=>e.theme.textColor||e.theme.BoxTextColor||"#222"};
  overflow-wrap: anywhere;
`,W=n.Ay.span`
  color: ${e=>e.theme.textColor||"#333"};
  font-size: .75rem;
  opacity: .7;
`,K=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 8.5rem), 1fr));
  gap: 12px;
  @media (min-width: 600px) { grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr)); gap: 16px; }
  @media (min-width: 1024px) { grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr)); gap: 20px; }
`,Z=n.Ay.section` margin-bottom: 32px; `,G=n.Ay.div`
  padding: 20px 8px;
  text-align: center;
  font-size: .875rem;
  color: ${e=>e.theme.textColor||"#333"};
`,Y=n.Ay.div`
  padding: 36px 16px;
  text-align: center;
  border: 1px dashed ${e=>e.theme.categoryUnActive||"rgba(127,127,127,.3)"};
  border-radius: 16px;
  color: ${e=>e.theme.textColor||"#333"};
  h3 { font-size: 1rem; margin: 12px 0 8px; }
  p { font-size: .875rem; line-height: 1.6; margin: 0 0 16px; }
`,J=n.Ay.button`
  min-height: 44px;
  padding: 10px 18px;
  border: 1px solid currentColor;
  border-radius: 12px;
  background: transparent;
  color: ${e=>e.theme.mainColor||e.theme.textColor||"#222"};
  font-weight: 600;
  cursor: pointer;
`,X=n.Ay.div`
  aspect-ratio: 3 / 4;
  border-radius: 16px;
  background: ${e=>e.theme.BoxColor||"#fff"};
  border: 1px solid rgba(127,127,127,.15);
  &::before { content: ""; display: block; margin: 8px; aspect-ratio: 1; border-radius: 12px; background: ${e=>e.theme.categoryUnActive||"rgba(127,127,127,.12)"}; }
`,ee=n.Ay.article`
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 7px;
  border: 1px solid rgba(127,127,127,.14);
  border-radius: 18px;
  background: ${e=>e.theme.BoxColor||"#fff"};
  color: ${e=>e.theme.BoxTextColor||e.theme.textColor||"#222"};
  box-shadow: 0 3px 12px rgba(0,0,0,.025);
  container-type: inline-size;
`,te=n.Ay.button`
  display: grid;
  place-items: center;
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  color: inherit;
  background: ${e=>e.theme.categoryUnActive||e.theme.backgroundColor||"#f5f5f5"};
  img { width: 100%; height: 100%; object-fit: cover; }
`,oe=n.Ay.span`
  position: absolute;
  inset-block-start: 8px;
  inset-inline-start: 8px;
  padding: 4px 8px;
  font-size: .625rem;
  font-weight: 700;
  border-radius: 6px;
  background: ${e=>e.theme.mainColor||"#333"};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  max-width: calc(100% - 16px);
`,ie=n.Ay.div`
  padding: 12px 5px 5px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
`,ne=n.Ay.button`
  text-align: start;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font-size: ${e=>e.$fontSize?`max(.875rem, ${e.$fontSize})`:".9375rem"};
  font-weight: 600;
  line-height: 1.5;
  min-height: 3em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: anywhere;
  cursor: pointer;
`,re=n.Ay.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,ae=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 8px;
  color: ${e=>e.theme.BoxPriceColor||e.theme.BoxTextColor||"#222"};
  overflow-wrap: anywhere;
  font-size: .875rem;
  font-weight: 700;
  del { font-size: .75rem; font-weight: 400; opacity: .65; }
`,de=n.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 44px;
  min-height: 44px;
  padding: 8px;
  border: 0;
  border-radius: 12px;
  background: ${e=>e.theme.mainColor||"#333"};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  font-size: .75rem;
  font-weight: 600;
  cursor: pointer;
  margin-inline-start: auto;
  transition: opacity 150ms ease;
  &:active { opacity: .75; }
`,le=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${e=>e.theme.mainColor||"#333"};
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  button { width: 44px; min-height: 44px; border: 0; background: transparent; color: ${e=>e.theme.mainColor||"#333"}; font-size: 1.25rem; cursor: pointer; }
  output { font-size: .875rem; font-weight: 700; }
`,se=n.Ay.span`
  font-size: .75rem;
  line-height: 1.5;
  opacity: .75;
  padding-block: 10px;
`;var ce=o(42186),pe=o(18907),he=o(86001),ue=o(88282),me=o(81926),xe=o(64825),ge=o(58821),fe=o(2200),be=o(20476);function ve(e){var t,o;let{plate:n,categories:r,restaurantName:a,restaurant:d,features:l}=e;const s=(0,h.wA)(),[p,u]=(0,c.ok)(),m=(0,ce.jE)(),x=(null===d||void 0===d?void 0:d.activeLanguage)||"en",g="ar"===x,f=(0,h.d4)((e=>{var t;return(null===(t=e.cart)||void 0===t?void 0:t[a])||[]})),b=r.find((e=>String(e.id)===String(n.category_id)))||n.category,v=(0,be.rN)(n,b),w=(0,fe.Q)(null===d||void 0===d?void 0:d.currency),y=(0,be.cc)(n,"name",x),$=(0,be.Sn)(n.out_of_stock),k=(0,xe.L$)(n.form_json,null===b||void 0===b?void 0:b.form_json),C=(0,be.Sn)(l.cart),j=f.find((e=>String(e.id)===String(n.id)&&(!e.formData||0===Object.keys(e.formData).length)&&!e.instruction)),A=(null===j||void 0===j?void 0:j.quantity)||0,S=(null===(t=n.images)||void 0===t?void 0:t.find((e=>String(e.id)===String(n.new_cover_id)&&e.url)))||(null===(o=n.images)||void 0===o?void 0:o.find((e=>e.url))),P=null!==S&&void 0!==S&&S.url?(0,ge.V)(S.url):"",[T,_]=(0,i.useState)(!1);(0,i.useEffect)((()=>_(!1)),[P]);const E=()=>{const e=new URLSearchParams(p);e.set("productId",n.id),u(e,{state:{theme1Product:!0}})},I=()=>m.prefetchQuery({queryKey:(0,ue.Nb)(n.id),queryFn:()=>(0,ue.oo)(n.id),staleTime:3e5}),L=e=>{if(!j||$||!C)return;const t=Number(j.quantity)+e;s(t>0?(0,he.v)(a,j.uniqueId,t):(0,he.dt)(a,j.uniqueId))};return(0,z.jsxs)(ee,{children:[(0,z.jsxs)(te,{type:"button",onClick:E,onMouseEnter:I,onFocus:I,"aria-label":`${g?"\u0639\u0631\u0636":"View"} ${y}`,children:[P&&!T?(0,z.jsx)("img",{src:P,alt:"",loading:"lazy",onError:()=>_(!0)}):(0,z.jsx)(B.fZZ,{size:32,"aria-hidden":"true"}),(0,be.Sn)(n.new)?(0,z.jsx)(oe,{children:g?"\u062c\u062f\u064a\u062f":"New"}):(0,be.Sn)(n.is_best_seller)?(0,z.jsx)(oe,{children:g?"\u0627\u0644\u0623\u0643\u062b\u0631 \u0637\u0644\u0628\u0627\u064b":"Popular"}):null]}),(0,z.jsxs)(ie,{children:[(0,z.jsx)(ne,{type:"button",$fontSize:null===d||void 0===d?void 0:d.font_size,onClick:E,children:y}),(0,z.jsxs)(re,{children:[v.hasPrice&&(0,z.jsxs)(ae,{children:[(0,z.jsx)("span",{children:(0,pe.T)(v.final,w)}),v.discount>0&&(0,z.jsx)("del",{children:(0,pe.T)(v.base,w)})]}),$?(0,z.jsx)(se,{children:g?"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631":"Unavailable"}):C&&(A>0&&!k?(0,z.jsxs)(le,{children:[(0,z.jsx)("button",{type:"button",onClick:()=>L(-1),"aria-label":`${g?"\u062a\u0642\u0644\u064a\u0644 \u0643\u0645\u064a\u0629":"Decrease quantity of"} ${y}`,children:"\u2212"}),(0,z.jsx)("output",{"aria-live":"polite","aria-label":`${g?"\u0627\u0644\u0643\u0645\u064a\u0629":"Quantity"}: ${y}`,children:A}),(0,z.jsx)("button",{type:"button",onClick:()=>L(1),"aria-label":`${g?"\u0632\u064a\u0627\u062f\u0629 \u0643\u0645\u064a\u0629":"Increase quantity of"} ${y}`,children:"+"})]}):(0,z.jsxs)(de,{type:"button",onClick:()=>{var e,t;C&&!$&&(k?E():(s((0,he.bE)(a,n,1,{},v.final,"")),null!==d&&void 0!==d&&d.id&&(0,me.trackAddToCart)(d.id,n.id,n.category_id,1,(null===(e=d.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null)))},"aria-label":`${k?g?"\u0627\u062e\u062a\u064a\u0627\u0631 \u062e\u064a\u0627\u0631\u0627\u062a":"Choose options for":g?"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629":"Add to cart:"} ${y}`,children:[(0,z.jsx)(B.GGD,{size:18,"aria-hidden":"true"}),k&&(0,z.jsx)("span",{children:g?"\u062e\u064a\u0627\u0631\u0627\u062a":"Options"})]}))]})]})]})}var we=o(9328),ye=o(32415),$e=o(81132);function ke(e){let{categories:t=[],activeCategory:o,onCategoryChange:n,searchText:r,setSearchText:a,restaurant:d,restaurantName:l}=e;const s=(null===d||void 0===d?void 0:d.activeLanguage)||"en",c="ar"===s,p=(0,be.$Y)(null===d||void 0===d?void 0:d.features),h="all-items"===o,u=Boolean(r.trim()),m=(0,we.w)(h||u?null:o),x=(0,ye.u)(h&&!u?null===d||void 0===d?void 0:d.id:null),g=(0,E.I)({queryKey:["theme1-menu-search",null===d||void 0===d?void 0:d.id],queryFn:async e=>{let{signal:t}=e;const{data:o}=await I.A.get((0,$e.JS)(d.id),{signal:t});if(!Array.isArray(o))throw new Error("Invalid menu response");return o},enabled:u&&!(null===d||void 0===d||!d.id),staleTime:6e4,retry:!1,refetchOnWindowFocus:!1}),f=u?g:h?x:m,b=(0,i.useMemo)((()=>{var e,i;const n=(0,be.t0)(u?g.data||[]:(null===(e=h?x.data:m.data)||void 0===e||null===(i=e.pages)||void 0===i?void 0:i.flat())||[],u?r:"");return(u||h?t.filter((e=>!e.isAllItems)):t.filter((e=>String(e.id)===String(o)))).map((e=>({category:e,items:n.filter((t=>String(t.category_id)===String(e.id)))}))).filter((e=>e.items.length>0))}),[u,h,g.data,r,x.data,m.data,t,o]),v=b.reduce(((e,t)=>e+t.items.length),0),w=(0,i.useRef)(null),y=(0,i.useRef)(null),$=(0,i.useRef)(null),k=f.fetchNextPage,C=f.hasNextPage,j=f.isFetchingNextPage;(0,i.useEffect)((()=>{const e=w.current;if(!e||u||!C||f.isError||!window.IntersectionObserver)return;const t=new IntersectionObserver((e=>{let[t]=e;t.isIntersecting&&!j&&k()}),{rootMargin:"240px"});return t.observe(e),()=>t.disconnect()}),[u,C,j,k,f.isError,v]),(0,i.useEffect)((()=>{var e;const t=null===(e=y.current)||void 0===e?void 0:e.querySelector('[aria-pressed="true"]');if(!t||!y.current)return;const o=y.current;window.innerWidth<480?o.scrollLeft=t.offsetLeft-o.offsetLeft-(o.clientWidth-t.clientWidth)/2:o.scrollTop=t.offsetTop-o.offsetTop-(o.clientHeight-t.clientHeight)/2}),[o]);const A=()=>{var e;a(""),null===(e=$.current)||void 0===e||e.focus()},S=e=>(0,z.jsx)(K,{children:e.map((e=>(0,z.jsx)(ve,{plate:e,categories:t,restaurant:d,restaurantName:l,features:p},e.id)))});return(0,z.jsxs)(L,{dir:c?"rtl":"ltr",children:[(0,z.jsx)(N,{"aria-label":c?"\u0641\u0626\u0627\u062a \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Menu categories",children:(0,z.jsx)(F,{ref:y,children:t.map((e=>(0,z.jsxs)(U,{type:"button",$active:String(e.id)===String(o),"aria-pressed":String(e.id)===String(o),onClick:()=>{a(""),n(e.id)},children:[(0,z.jsx)(R,{children:!e.isAllItems&&e.image_url?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("img",{src:(0,ge.V)(e.image_url),alt:"",loading:"lazy",onError:e=>{e.currentTarget.hidden=!0}}),(0,z.jsx)(B.QPV,{size:20,"aria-hidden":"true"})]}):(0,z.jsx)(B.QPV,{size:20})}),(0,z.jsx)(q,{children:(0,be.cc)(e,"category",s)})]},e.id)))})}),(0,z.jsxs)(H,{id:"theme1-menu",children:[(0,z.jsxs)(M,{role:"search",children:[(0,z.jsx)(B.CKj,{size:20,"aria-hidden":"true"}),(0,z.jsx)(D,{ref:$,type:"search","aria-label":c?"\u0627\u0628\u062d\u062b \u0641\u064a \u0643\u0644 \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Search the entire menu",placeholder:c?"\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629\u2026":"Search the menu\u2026",value:r,onChange:e=>a(e.target.value)}),r&&(0,z.jsx)(O,{type:"button","aria-label":c?"\u0645\u0633\u062d \u0627\u0644\u0628\u062d\u062b":"Clear search",onClick:A,children:(0,z.jsx)(B.yGN,{size:18})})]}),u&&(0,z.jsxs)(V,{children:[(0,z.jsx)(Q,{children:c?"\u0646\u062a\u0627\u0626\u062c \u0627\u0644\u0628\u062d\u062b":"Search results"}),(0,z.jsx)(W,{role:"status",children:!f.isPending&&`${v} ${c?"\u0646\u062a\u064a\u062c\u0629":1===v?"result":"results"}`})]}),f.isLoading&&(0,z.jsx)(K,{"aria-label":c?"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Loading menu","aria-busy":"true",children:[0,1,2,3].map((e=>(0,z.jsx)(X,{},e)))}),b.map((e=>{let{category:t,items:o}=e;return(0,z.jsxs)(Z,{"aria-label":(0,be.cc)(t,"category",s),children:[(0,z.jsx)(V,{children:(0,z.jsx)(Q,{children:(0,be.cc)(t,"category",s)})}),S(o)]},t.id)})),f.isError?(0,z.jsxs)(Y,{role:"alert",children:[(0,z.jsx)("h3",{children:c?"\u062a\u0639\u0630\u0631 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"The menu couldn\u2019t load"}),(0,z.jsx)("p",{children:c?"\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u062a\u0635\u0627\u0644\u0643 \u0648\u062d\u0627\u0648\u0644 \u0645\u062c\u062f\u062f\u0627\u064b.":"Check your connection and try again."}),(0,z.jsx)(J,{type:"button",onClick:()=>f.refetch(),children:c?"\u062d\u0627\u0648\u0644 \u0645\u062c\u062f\u062f\u0627\u064b":"Try again"})]}):!f.isLoading&&0===v&&!C&&(0,z.jsxs)(Y,{children:[(0,z.jsx)(B.CKj,{size:28,"aria-hidden":"true"}),(0,z.jsx)("h3",{children:u?c?"\u0644\u0627 \u062a\u0648\u062c\u062f \u0646\u062a\u0627\u0626\u062c":"No matching items":c?"\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0635\u0646\u0627\u0641 \u062d\u0627\u0644\u064a\u0627\u064b":"No items here yet"}),(0,z.jsx)("p",{children:u?c?"\u062c\u0631\u0651\u0628 \u0627\u0633\u0645 \u0635\u0646\u0641 \u0622\u062e\u0631 \u0623\u0648 \u062a\u0635\u0641\u062d \u0627\u0644\u0642\u0627\u0626\u0645\u0629.":"Try another item name or browse the menu.":c?"\u064a\u0631\u062c\u0649 \u0627\u062e\u062a\u064a\u0627\u0631 \u0641\u0626\u0629 \u0623\u062e\u0631\u0649 \u0623\u0648 \u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0627\u062d\u0642\u0627\u064b.":"Choose another category or check back soon."}),u&&(0,z.jsx)(J,{type:"button",onClick:A,children:c?"\u0639\u0631\u0636 \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Browse menu"})]}),!u&&(0,z.jsx)("div",{ref:w}),j&&(0,z.jsx)(G,{role:"status",children:c?"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f\u2026":"Loading more items\u2026"}),!u&&C&&!j&&!f.isError&&(0,z.jsx)(J,{type:"button",onClick:()=>k(),children:c?"\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064a\u062f":"Load more"})]})]})}var Ce=o(71821),je=o(12362),Ae=o(72929),Se=o(58169),ze=o(86534),Pe=o(18378),Te=o(90060),_e=o(10716);const Ee=n.DU`
  [data-theme-one] {
    --t1-header-height: 64px;
    color: ${e=>e.theme.textColor||"#222"};
    min-height: 100dvh;
  }
  [data-theme-one] *, [data-theme-one] *::before, [data-theme-one] *::after { box-sizing: border-box; }
  [data-theme-one] button, [data-theme-one] input, [data-theme-one] select, [data-theme-one] textarea { font-family: inherit; }
  [data-theme-one] button:focus-visible, [data-theme-one] a:focus-visible, [data-theme-one] input:focus-visible, [data-theme-one] select:focus-visible, [data-theme-one] textarea:focus-visible {
    outline: 2px solid ${e=>e.theme.mainColor||"currentColor"}; outline-offset: 3px;
  }
  [data-theme-one] ${je.OR} { box-shadow: 0 1px 0 rgba(127,127,127,.15); }
  [data-theme-one] ${je.TU} { height: var(--t1-header-height); max-width: 1280px; padding-inline: 16px; }
  [data-theme-one] ${je.gu} { max-height: 52px; max-width: min(160px, 35vw); }
  [data-theme-one] ${je.aQ}, [data-theme-one] ${je.W_} { min-width: 44px; min-height: 44px; }
  [data-theme-one] ${Ae.Z} {
    animation: none; width: min(720px, calc(100% - 32px)); height: auto;
    max-height: calc(100dvh - 48px); border-radius: 20px;
    background: ${e=>e.theme.popupbackgroundColor||e.theme.backgroundColor||"#fff"};
    color: ${e=>e.theme.popupTextColor||e.theme.textColor||"#222"};
    z-index: 1501;
  }
  [data-theme-one] ${Ae.z} { z-index: 1500; animation: none; }
  [data-theme-one] ${Se.Tn} { padding: 12px 16px; flex-shrink: 0; }
  [data-theme-one] ${Se.k8}, [data-theme-one] ${Se.i8} { width: 44px; height: 44px; border: 0; }
  [data-theme-one] ${ze.I} { width: 100%; margin-top: 0; min-height: 0; height: clamp(220px, 35vh, 320px); padding: 0 16px; flex-shrink: 0; }
  [data-theme-one] ${ze._V} { width: 100%; height: 100%; object-fit: contain; border-radius: 14px; }
  [data-theme-one] ${ze.qm} { width: 100%; animation: none; }
  [data-theme-one] ${ze.$D} { width: 100%; }
  [data-theme-one] ${ze.iF} { width: 100%; padding: 20px; gap: 14px; }
  [data-theme-one] ${ze.Pz} { font-size: 1.375rem; font-weight: 700; line-height: 1.5; text-align: start; }
  [data-theme-one] ${ze.gR} { font-size: .9375rem; line-height: 1.75; font-weight: 400; }
  [data-theme-one] ${ze.bQ} { min-height: 48px; font-size: 1rem; border-radius: 12px; }
  [data-theme-one] ${ze.eM} { position: sticky; bottom: 0; width: 100%; flex-direction: row; flex-wrap: wrap; gap: 12px; padding: 12px 16px max(12px, env(safe-area-inset-bottom)); animation: none; flex-shrink: 0; background: ${e=>e.theme.popupbackgroundColor||e.theme.backgroundColor||"#fff"}; }
  [data-theme-one] ${ze.nk} { width: 132px; height: 48px; border: 1px solid currentColor; border-radius: 12px; }
  [data-theme-one] ${ze.FW}, [data-theme-one] ${ze.Hs} { min-width: 44px; min-height: 44px; background: transparent; color: inherit; border: 0; cursor: pointer; }
  [data-theme-one] ${ze.pj} { flex: 1; min-width: 160px; height: auto; min-height: 48px; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 16px; font-size: .875rem; font-weight: 600; }
  [data-theme-one] ${ze.zr} { position: static; font-size: inherit; }
  [data-theme-one] ${Pe.mc} { max-width: 720px; margin-inline: auto; border-radius: 24px 24px 0 0; max-height: 92dvh; transition: none; padding: 0 0 env(safe-area-inset-bottom); }
  [data-theme-one] ${Te.Nw} { padding: 20px; min-height: 0; max-height: none; overflow: visible; margin-bottom: 0; }
  [data-theme-one] ${Te.ad} { margin-block: 0 20px; }
  [data-theme-one] ${Te.F2} { min-width: 44px; min-height: 44px; font-size: .875rem; }
  [data-theme-one] ${Te.OM} span { font-size: .75rem; line-height: 1.5; }
  [data-theme-one] ${Te.SK} { box-shadow: none; }
  [data-theme-one] ${Te.WS} { max-height: none; overflow: visible; min-height: 0; }
  [data-theme-one] ${_e.L} { max-height: none; overflow: visible; padding: 0; }
  [data-theme-one] ${_e.m6} { padding: 14px; box-shadow: none; border-radius: 14px; }
  [data-theme-one] ${_e.Pz} { font-size: .9375rem; white-space: normal; line-height: 1.5; }
  [data-theme-one] ${_e.T} { flex-wrap: wrap; }
  [data-theme-one] ${_e.Jw} { flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: space-between; width: 100%; }
  [data-theme-one] ${_e.ey} { width: 44px; height: 44px; }
  [data-theme-one] ${Te.ir} { box-shadow: none; min-height: 48px; border-radius: 12px; }
  [data-theme-one] ${Te.ir}:hover { box-shadow: none; transform: none; }
  [data-theme-one] ${Pe.mc} input, [data-theme-one] ${Pe.mc} select, [data-theme-one] ${Pe.mc} textarea { font-size: 1rem; min-height: 44px; }
  @media (max-width: 479px) {
    [data-theme-one] ${Ae.Z} { width: 100%; top: auto; bottom: 0; left: 0; transform: none; max-height: 94dvh; border-radius: 22px 22px 0 0; }
  }
  @media (prefers-reduced-motion: reduce) {
    [data-theme-one] *, [data-theme-one] *::before, [data-theme-one] *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
  }
`,Ie=n.Ay.nav`
  position: fixed;
  inset-inline: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px max(8px, env(safe-area-inset-bottom));
  z-index: 298;
  background: ${e=>e.theme.bottomTabBarBackgroundColor||e.theme.navigationBarBackgroundColor||e.theme.backgroundColor||"#fff"};
  border-top: 1px solid rgba(127,127,127,.18);
  button { position: relative; max-width: 150px; flex: 1; min-height: 52px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; border: 0; border-radius: 12px; background: transparent; color: ${e=>e.theme.textColor||"#333"}; font-size: .75rem; cursor: pointer; }
  button[aria-current="page"] { color: ${e=>e.theme.mainColor||"#333"}; font-weight: 700; background: color-mix(in srgb, ${e=>e.theme.mainColor||"#333"} 8%, transparent); }
  svg { width: 21px; height: 21px; }
`,Be=n.Ay.span`
  position: absolute; top: 0; inset-inline-start: calc(50% + 4px); min-width: 19px; height: 19px; padding-inline: 4px; display: grid; place-items: center; border-radius: 20px; font-size: 10px; font-weight: 700; background: ${e=>e.theme.mainColor||"#333"}; color: ${e=>e.theme.popupbuttonText||"#fff"};
`;function Le(e){var t;let{hidden:o,restaurant:i,restaurantName:n,onMenu:r,onCart:a,onBranches:d,onFeedback:l}=e;const s=(0,h.d4)((e=>{var t;return(null===(t=e.cart)||void 0===t?void 0:t[n])||[]})).reduce(((e,t)=>e+Number(t.quantity||0)),0),c=(0,be.$Y)(null===i||void 0===i?void 0:i.features),p="ar"===(null===i||void 0===i?void 0:i.activeLanguage);return o?null:(0,z.jsxs)(Ie,{"aria-label":p?"\u0627\u0644\u062a\u0646\u0642\u0644 \u0627\u0644\u0631\u0626\u064a\u0633\u064a":"Main navigation","data-tab-bar":!0,children:[(0,z.jsxs)("button",{type:"button",onClick:r,"aria-current":"page",children:[(0,z.jsx)(B.QPV,{}),(0,z.jsx)("span",{children:p?"\u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Menu"})]}),(0,be.Sn)(c.cart)&&(0,z.jsxs)("button",{type:"button",onClick:a,"aria-label":`${p?"\u0627\u0644\u0633\u0644\u0629":"Cart"}, ${s}`,children:[(0,z.jsx)(B.y52,{}),(0,z.jsx)("span",{children:p?"\u0627\u0644\u0633\u0644\u0629":"Cart"}),s>0&&(0,z.jsx)(Be,{"aria-hidden":"true",children:s})]}),(null===i||void 0===i||null===(t=i.branches)||void 0===t?void 0:t.length)>0&&(0,z.jsxs)("button",{type:"button",onClick:d,children:[(0,z.jsx)(B.HzC,{}),(0,z.jsx)("span",{children:p?"\u0627\u0644\u0641\u0631\u0648\u0639":"Branches"})]}),(0,be.Sn)(c.feedback)&&(0,z.jsxs)("button",{type:"button",onClick:l,children:[(0,z.jsx)(B.mEP,{}),(0,z.jsx)("span",{children:p?"\u0627\u0644\u062a\u0642\u064a\u064a\u0645":"Feedback"})]})]})}function Ne(){var e;const[t,o]=(0,c.ok)(),n=t.get("productId"),r=t.get("categoryId"),a=t.get("page"),[$,k]=(0,i.useState)(!1),{restaurantName:C}=(0,p.g)(),j=window.location.hostname.split(".")[0],A="menugic"!==j&&"localhost"!==j&&"www"!==j&&"api"!==j&&"staging-api"!==j?j:C,S=(0,h.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[A]})),E=(0,h.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[A])||void 0===o?void 0:o.activeLanguage)||"en"})),I=(0,be.$Y)(null===S||void 0===S?void 0:S.features),B=Object.fromEntries(Object.entries(I).map((e=>{let[t,o]=e;return[t,(0,be.Sn)(o)]})));(0,i.useEffect)((()=>(document.documentElement.setAttribute("dir","ar"===E?"rtl":"ltr"),()=>document.documentElement.removeAttribute("dir"))),[E]);const L=1===Number(null===S||void 0===S?void 0:S.template_id)&&(!0===(null===S||void 0===S?void 0:S.show_all_items_category)||1===(null===S||void 0===S?void 0:S.show_all_items_category)||"1"===(null===S||void 0===S?void 0:S.show_all_items_category)),N={id:"all-items",en_category:"All Items",ar_category:"\u0643\u0644 \u0627\u0644\u0623\u0635\u0646\u0627\u0641",isAllItems:!0,priority:999999,image_url:(null===S||void 0===S?void 0:S.logoURL)||(null===S||void 0===S?void 0:S.cover_url)||null},F=[...(null===S||void 0===S?void 0:S.categories)||[]].sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))),U=L?[N,...F]:F,R=function(){var e;let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const n=null===(e=U[0])||void 0===e?void 0:e.id,r=null!==i&&void 0!==i?i:n;if(!r)return;se(r),oe("menu"),Q("");const a=new URLSearchParams(t);a.set("categoryId",String(r)),o(a),window.scrollTo({top:0,behavior:"smooth"})},q=()=>{var e;oe("menu");const i=null===U||void 0===U||null===(e=U[0])||void 0===e?void 0:e.id;if(i){se(i),Q("");const e=new URLSearchParams(t);e.set("categoryId",String(i)),o(e),window.scrollTo({top:0,behavior:"smooth"})}},H=()=>{ce("feedback")},M=()=>{ce("contactForm")},[D,O]=(0,i.useState)(null),[V,Q]=(0,i.useState)("");(0,i.useEffect)((()=>{if(!V||V.length<2||null===S||void 0===S||!S.id)return;const e=setTimeout((()=>{(0,me.trackSearch)(S.id,V)}),1500);return()=>clearTimeout(e)}),[V,null===S||void 0===S?void 0:S.id]);const[W,K]=(0,i.useState)(null),[Z,G]=(0,i.useState)(null),[Y,J]=(0,i.useState)(!0),[X,ee]=(0,i.useState)(0),[te,oe]=(0,i.useState)("menu"),ie=(0,i.useRef)(te),ne=(0,i.useRef)(D),re=(0,i.useRef)(W),[ae]=(0,i.useState)(0),[de]=(0,i.useState)(null),[le,se]=(0,i.useState)(r||null),ce=e=>O(e);(0,i.useEffect)((()=>{const e=e=>{e.preventDefault(),G(e),J(!0)};return window.addEventListener("beforeinstallprompt",e),()=>window.removeEventListener("beforeinstallprompt",e)}),[]),(0,i.useEffect)((()=>{if(null!==S&&void 0!==S&&S.id){var e,t;const o=(null===S||void 0===S||null===(e=S.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,me.trackVisit)(S.id,o),(0,me.trackPageView)(S.id,o)}}),[null===S||void 0===S?void 0:S.id]);if((0,i.useEffect)((()=>{r&&(se(r),oe("menu"))}),[r]),(0,i.useEffect)((()=>{var e;if(null===S||void 0===S||!S.id)return;if(r)return;if(le)return;const i=null===U||void 0===U||null===(e=U[0])||void 0===e?void 0:e.id;if(!i)return;se(i),Q("");const n=new URLSearchParams(t);n.set("categoryId",String(i)),o(n),window.scrollTo({top:0,behavior:"smooth"})}),[null===S||void 0===S?void 0:S.id,r,le,U,t,o]),(0,i.useEffect)((()=>{!n&&!r||!D||"feedback"!==D&&"contactForm"!==D||ce(null)}),[n,r]),(0,i.useEffect)((()=>{ie.current!==te&&("menu"!==te||r||n||a||window.history.pushState({viewMode:"menu"},"",window.location.href),ie.current=te)}),[te,r,n,a]),(0,i.useEffect)((()=>{ne.current!==D&&(D&&window.history.pushState({popup:D},"",window.location.href),ne.current=D)}),[D]),(0,i.useEffect)((()=>{re.current!==W&&(W&&(ce(null),window.history.pushState({sidebar:!0},"",window.location.href)),re.current=W)}),[W]),(0,i.useEffect)((()=>{k(Boolean(n))}),[n]),(0,i.useEffect)((()=>{if(!n&&!D&&!W)return;const e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[n,D,W]),(0,i.useEffect)((()=>{const e=e=>{const t=new URLSearchParams(window.location.search),o=t.get("productId"),i=t.get("categoryId"),n=t.get("page");W?K(!1):D?ce(null):o||n||i||(oe("menu"),se(null),Q(""))};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[D,W]),!S)return null;const pe=(null===S||void 0===S?void 0:S.sliderImages)||[],he=(0,be.Sn)(null===S||void 0===S?void 0:S.show_slider_image)&&pe.length>0;return(0,z.jsxs)(d,{id:"wrapper","data-theme-one":!0,dir:"ar"===E?"rtl":"ltr",children:[(0,z.jsx)(Ee,{}),(0,z.jsx)(T.A,{variant:"theme1",onProductsClick:()=>{q()},onSocialMediaClick:()=>{q()},onBranchesClick:null!==S&&void 0!==S&&null!==(e=S.branches)&&void 0!==e&&e.length?()=>{ce("location")}:void 0,onContactFormClick:M,onFeedbackClick:H,onAboutClick:!1!==(null===S||void 0===S?void 0:S.show_about_us)?()=>{ce("about")}:void 0,onOrderClick:()=>{null!==B&&void 0!==B&&B.cart&&ce("cart")},onHomeClick:void 0,onCategoryClick:e=>{R(e)},onContactClick:M,categories:U,activeCategory:le,setshowSidebar:K,showSidebar:W,popupHandler:ce,isProductDetailsOpen:$||"about"===D}),he&&(0,z.jsx)(Ce.A,{images:pe,activeLanguage:E,variant:"theme1"}),(0,z.jsxs)(l,{onClick:()=>{null!=D&&ce(null)},children:[(0,z.jsx)(s,{showPopup:D}),(0,z.jsx)(ke,{categories:U,activeCategory:le,onCategoryChange:e=>{se(e);const i=new URLSearchParams(t);i.set("categoryId",String(e)),o(i),requestAnimationFrame((()=>{var e;return null===(e=document.getElementById("theme1-menu"))||void 0===e?void 0:e.scrollIntoView({block:"start"})}))},searchText:V,setSearchText:Q,restaurant:S,restaurantName:A,showPopup:D})]}),"location"===D&&(0,z.jsx)(u.A,{restaurant:S,showPopup:D,popupHandler:ce}),(null===B||void 0===B?void 0:B.cart)&&"cart"===D&&(0,z.jsx)(m.A,{restaurant:S,showPopup:D,popupHandler:ce,variant:"theme1"}),"share"===D&&(0,z.jsx)(y.A,{showPopup:D,popupHandler:ce,activeCategory:le}),"contact"===D&&(0,z.jsx)(g.A,{restaurant:S,showPopup:D,popupHandler:ce}),"feedback"===D&&(0,z.jsx)(x.A,{restaurant:S,showPopup:D,popupHandler:ce,isPage:!1}),"contactForm"===D&&(0,z.jsx)(f.A,{restaurant:S,showPopup:D,popupHandler:ce,isPage:!1}),"about"===D&&(0,z.jsx)(b.A,{showPopup:D,popupHandler:ce}),W&&(0,z.jsx)(v.A,{categories:U,activeCategory:le,setactiveCategory:se,setshowSidebar:K,showSidebar:W,setcarouselPosition:ee,onHomeClick:q,onCategoryClick:e=>{R(e)},onFeedbackClick:H,onContactClick:M,onBranchesClick:()=>{ce("location")},branches:(null===S||void 0===S?void 0:S.branches)||[]}),n&&(0,z.jsx)(w.A,{variant:"theme1",productId:n,searchParams:t,setSearchParams:o}),(null===B||void 0===B?void 0:B.install_app)&&(0,z.jsx)(P,{showInstallPopup:Y,onInstall:async()=>{Z&&(Z.prompt(),await Z.userChoice,G(null),J(!1))},restaurantName:A,onDismiss:()=>J(!1)}),(0,z.jsx)(Le,{hidden:Boolean(n)||Boolean(D),restaurant:S,restaurantName:A,onMenu:q,onCart:()=>ce("cart"),onBranches:()=>ce("location"),onFeedback:()=>ce("feedback")}),(0,z.jsx)(_.A,{trigger:ae,sourceElement:de,onComplete:()=>{}})]})}}}]);
//# sourceMappingURL=680.b89e44c3.chunk.js.map