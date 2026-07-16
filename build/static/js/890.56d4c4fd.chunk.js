"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[890],{89993:(e,i,a)=>{a.d(i,{w:()=>d});var n=a(11222),r=a(81132),o=a(27303),t=a(26557);a(34304);const d=e=>{let{onSuccess:i,branch_id:a}=e;const{error:d,isLoading:s,status:l,data:c,refetch:g}=(0,o.I)({queryFn:()=>(async e=>{try{if(console.log(e),null!=e&&void 0!=e){const i=(0,r.yd)(e);return await n.A.get(i,{headers:{Authorization:`Bearer ${(0,t.getCookie)("accessToken")}`}})}}catch(d){throw d}})(a),queryKey:[`branch-${a}`],onSuccess:i,retry:!1,cacheTime:0,staleTime:0,refetchOnMount:!0,refetchOnWindowFocus:!0});return{error:d,isLoading:s,status:l,response:c,refetch:g}}},22139:(e,i,a)=>{a.d(i,{c:()=>o});var n=a(11222),r=a(81132);function o(e){if(null==e||""===e)return;if("all-items"===e)return;const i="string"===typeof e?e.trim():String(e);i&&"all-items"!==i&&n.A.put((0,r.O8)(i)).catch((()=>{}))}},9328:(e,i,a)=>{a.d(i,{w:()=>l});var n=a(11222),r=a(81132),o=a(62205),t=a(22139);const d=new Set;const s=async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0;try{0===i&&function(e){if(!e||"all-items"===e)return;const i=String(e);d.has(i)||(d.add(i),(0,t.c)(e))}(e);const o=(0,r.cI)(e,i,a);return(await n.A.get(o)).data}catch(o){throw o}},l=(e,i)=>{const a=null!=e?String(e):null;return(0,o.q)({queryKey:["products",a,i||"all"],queryFn:e=>{let{pageParam:n=0}=e;return s(a,n,i)},getNextPageParam:(e,i)=>{if(!(e.length<10))return i.length},keepPreviousData:!0,retry:!1,refetchOnWindowFocus:!1,staleTime:0,enabled:!!a})}},97890:(e,i,a)=>{a.r(i),a.d(i,{default:()=>ax});var n=a(82483),r=a(11222),o=a(41190),t=a(20694),d=a(18246),s=a(22829),l=a(10448);const c={sidebarBg:"#0c0f1d",sidebarBorder:"rgba(255,255,255,0.06)",sidebarText:"rgba(255,255,255,0.62)",sidebarTextActive:"#ffffff",accent:t.Jn.mainColor,accentGlow:"rgba(94,171,177,0.22)",pageBg:"#f0f2f8",headerBg:"rgba(255,255,255,0.82)",radius:"14px"},g=(o.i7`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,o.Ay.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: ${c.pageBg};
`),m=o.Ay.nav`
  width: 220px;
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${c.sidebarBg};
  border-right: 1px solid ${c.sidebarBorder};
  left: 0;
  top: 0;
  z-index: 200;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.28);

  @media (max-width: ${t.L8.sm}px) {
    display: none;
  }
`,p=o.Ay.div`
  height: 72px;
  min-height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  border-bottom: 1px solid ${c.sidebarBorder};
`,h=o.Ay.span`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(120deg, ${c.accent}, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,u=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 12px 10px 12px;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { width: 3px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.12);
    border-radius: 3px;
  }

  @media (max-width: ${t.L8.sm}px) {
    gap: 2px;
    padding: 10px 10px calc(100px + env(safe-area-inset-bottom, 0px));
  }
`,x=o.Ay.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  min-height: 44px;
  height: auto;
  padding: 9px 12px;
  font-size: 13.5px;
  font-weight: ${e=>e.$active?"600":"400"};
  align-items: center;
  gap: 10px;
  color: ${e=>e.$active?c.sidebarTextActive:c.sidebarText};
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.$disabled?.45:1};
  background: ${e=>e.$active?`linear-gradient(90deg, ${c.accentGlow} 0%, transparent 100%)`:"transparent"};
  border-radius: 10px;
  border-left: 2.5px solid
    ${e=>e.$active?c.accent:"transparent"};
  transition: all 0.18s ease;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  letter-spacing: 0.1px;

  &:hover {
    background: ${e=>e.$disabled?"transparent":e.$active?`linear-gradient(90deg, ${c.accentGlow} 0%, transparent 100%)`:"rgba(255,255,255,0.05)"};
    color: ${e=>e.$disabled?c.sidebarText:c.sidebarTextActive};
  }

  @media (max-width: ${t.L8.sm}px) {
    border-left: none;
    border-right: 2.5px solid
      ${e=>e.$active?c.accent:"transparent"};
    background: ${e=>e.$active?`linear-gradient(270deg, ${c.accentGlow} 0%, transparent 100%)`:"transparent"};
  }
`,b=o.Ay.span`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  line-height: 1.25;
`,f=o.Ay.div`
  display: flex;
  min-height: 68px;
  height: auto;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-top: 1px solid ${c.sidebarBorder};
  background: rgba(255, 255, 255, 0.03);
  flex-shrink: 0;
  margin-top: auto;
  padding: 12px 14px calc(12px + env(safe-area-inset-bottom, 0px));
  z-index: 2;
  box-sizing: border-box;
`,_=o.Ay.main`
  padding-left: 220px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-bottom: 60px;
  justify-content: flex-start;
  background: ${c.pageBg};
  box-sizing: border-box;

  @media (max-width: ${t.L8.sm}px) {
    padding-left: max(12px, env(safe-area-inset-left, 0px));
    padding-right: max(12px, env(safe-area-inset-right, 0px));
    padding-bottom: calc(60px + env(safe-area-inset-bottom, 0px));
    overflow-x: hidden;
  }
`,y=o.Ay.header`
  width: 90%;
  background: ${c.headerBg};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: ${c.radius};
  min-height: 60px;
  height: auto;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.07);
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    max-width: 100%;
    margin-top: 10px;
    min-height: 50px;
    border-radius: 10px;
    padding: 0 4px 0 0;
    gap: 4px;
  }
`,v=o.Ay.span`
  margin-left: 20px;
  font-weight: 600;
  font-size: 14px;
  color: #334155;
  letter-spacing: 0.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 13px;
    margin-left: 12px;
  }
`,j=(0,o.Ay)(d.vYi)`
  font-size: 17px;
  flex-shrink: 0;
  opacity: 0.85;
`,A=(0,o.Ay)(s.yap)`
  font-size: 28px;
  color: ${c.accent};
  flex-shrink: 0;
`,w=(0,o.Ay)(l.WQq)`
  font-size: 20px;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  color: ${c.sidebarTextActive};
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.15s;

  &:hover  { background: rgba(255,255,255,0.1); }
  &:active { background: rgba(255,255,255,0.18); }
`,k=o.Ay.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  margin-right: 8px;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.15s;

  /* three dashes via box-shadow on a single pseudo-element */
  &::before,
  &::after,
  span {
    content: "";
    display: block;
    width: 22px;
    height: 2.5px;
    border-radius: 2px;
    background: #334155;
    transition: background 0.15s;
  }

  &:hover  { background: rgba(15,23,42,0.06); }
  &:active { background: rgba(15,23,42,0.1);  }

  @media (max-width: ${t.L8.sm}px) {
    display: flex;
  }
`,$=o.Ay.span`
  font-weight: 500;
  font-size: 13px;
  color: ${c.sidebarText};
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,S=o.Ay.button`
  outline: none;
  border: 1px solid rgba(148,163,184,0.3);
  border-radius: 8px;
  padding: 7px 14px;
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  background: transparent;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  flex-shrink: 0;
  margin-right: 16px;

  &:hover {
    background: #fef2f2;
    color: #ef4444;
    border-color: #fca5a5;
  }

  @media (max-width: ${t.L8.sm}px) {
    display: none;
  }
`,z=o.Ay.button`
  outline: none;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  padding: 7px 14px;
  font-size: 13px;
  font-weight: 500;
  color: ${c.sidebarText};
  background: transparent;
  cursor: pointer;
  display: none;
  margin-left: auto;
  margin-right: 4px;
  flex-shrink: 0;
  transition: all 0.15s;

  &:hover {
    background: rgba(255,255,255,0.08);
    color: #fff;
  }

  @media (max-width: ${t.L8.sm}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,C=o.Ay.div`
  display: none;
  @media (max-width: ${t.L8.sm}px) {
    display: ${e=>e.$open?"block":"none"};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 1040;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }
`,M=o.Ay.nav`
  width: min(280px, 88vw);
  max-width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  height: 100dvh;
  flex-direction: column;
  background: ${c.sidebarBg};
  box-shadow: 6px 0 32px rgba(0, 0, 0, 0.4);
  display: none;
  z-index: 1050;
  transform: ${e=>e.$showMobileSidebar?"translateX(0)":"translateX(-108%)"};
  transition: transform 0.28s cubic-bezier(0.32, 0.72, 0, 1);
  padding-top: env(safe-area-inset-top, 0px);

  @media (max-width: ${t.L8.sm}px) {
    display: flex;
  }
`,E=o.Ay.div`
  width: 90%;
  max-width: 100%;
  margin-top: 24px;
  background: #ffffff;
  border-radius: ${c.radius};
  border: 1px solid rgba(148, 163, 184, 0.25);
  padding: 32px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  text-align: center;
  box-sizing: border-box;

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    padding: 24px 18px;
  }
`,D=o.Ay.h3`
  margin: 0 0 10px 0;
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
`,B=o.Ay.p`
  margin: 0;
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  max-width: 460px;
  margin: 0 auto;
`;o.Ay.div``;var T=a(71580),R=a(29858);const L=t.Jn.mainColor,H=o.Ay.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
`,q=o.Ay.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
`,F=o.Ay.p`
  margin: 0;
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.45;
  max-width: 42rem;
`,K=o.Ay.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    max-width: 100%;
    align-items: stretch;
  }
`,N=o.Ay.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  padding: 18px 20px;
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid ${"rgba(148, 163, 184, 0.22)"};
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;

  @media (max-width: ${t.L8.sm}px) {
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
    margin-top: 12px;
  }
`,P=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 200px;
`,O=o.Ay.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  /* Desktop: 6 cards per row */
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px;
  margin-top: 20px;
  align-items: stretch;
  box-sizing: border-box;

  @media (max-width: ${t.L8.md}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  @media (max-width: ${t.L8.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    margin-top: 16px;
  }
`,I=(0,o.Ay)(T.A)`
  border-radius: 10px;

  .MuiOutlinedInput-notchedOutline {
    border-color: ${L} !important;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${L} !important;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${L} !important;
  }

  .MuiOutlinedInput-root {
    border-radius: 10px;
    background: rgba(248, 250, 252, 0.9);
  }
`,J=(0,o.Ay)(R.A)`
  &.MuiInputLabel-outlined {
    color: ${L} !important;
  }

  &.Mui-focused {
    color: ${L} !important;
  }
`,Q=o.Ay.button`
  min-width: 160px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 12px;
  background: linear-gradient(135deg, ${L} 0%, #4a9499 100%);
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  box-shadow: 0 4px 16px rgba(94, 171, 177, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 22px rgba(94, 171, 177, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    min-width: unset;
  }
`,W=o.Ay.div`
  grid-column: 1 / -1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding-bottom: 8px;
`,Y=o.Ay.div`
  width: 100%;
  max-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Z=o.Ay.button`
  width: 100%;
  outline: none;
  border: 1px solid rgba(94, 171, 177, 0.45);
  color: ${L};
  cursor: pointer;
  border-radius: 12px;
  background: rgba(94, 171, 177, 0.08);
  display: flex;
  gap: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover {
    background: rgba(94, 171, 177, 0.14);
    border-color: ${L};
  }
`;var G=a(1901);const V=t.Jn.mainColor,U=o.AH`
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: rgba(248, 250, 252, 0.95);
  color: #64748b;
  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08);
  transition: background 0.15s, color 0.15s, transform 0.15s;
  flex-shrink: 0;

  &:active {
    transform: scale(0.98);
  }
`,X=o.Ay.div`
  width: 100%;
  min-width: 0;
  height: auto;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`,ee=o.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 0 12px 0;
  border-radius: 16px;
  border: 1px solid ${"rgba(148, 163, 184, 0.2)"};
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: rgba(94, 171, 177, 0.35);
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.1);
    transform: translateY(-2px);
  }
`,ie=o.Ay.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  min-height: 140px;
  max-height: 200px;
  background: linear-gradient(
    145deg,
    rgba(148, 163, 184, 0.12) 0%,
    rgba(241, 245, 249, 0.95) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,ae=o.Ay.img`
  width: ${e=>e.JPG?"auto":"100%"};
  height: ${e=>e.JPG?"auto":"100%"};
  max-width: 100%;
  max-height: 100%;
  object-fit: ${e=>e.JPG?"contain":"cover"};
`,ne=o.Ay.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
`,re=o.Ay.button`
  ${U}

  &:hover {
    background: rgba(94, 171, 177, 0.14);
    color: ${V};
    transform: scale(1.05);
  }
`,oe=o.Ay.button`
  ${U}

  &:hover {
    background: rgba(254, 226, 226, 0.95);
    color: #dc2626;
    transform: scale(1.05);
  }
`,te=(0,o.Ay)(G.$Sw)`
  font-size: 1.35rem;
  pointer-events: none;
`,de=o.Ay.div`
  width: 100%;
  padding: 12px 14px 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
`,se=o.Ay.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #0f172a;
  line-height: 1.35;
  margin-top: 0;
  padding-right: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,le=o.Ay.span`
  margin-top: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #64748b;
  text-transform: capitalize;
`,ce=o.Ay.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
  flex-wrap: wrap;
`,ge=o.Ay.span`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.45);
  color: ${e=>"hidden"===e.$variant?"#b45309":"#b91c1c"};
  background: ${e=>"hidden"===e.$variant?"rgba(251, 191, 36, 0.15)":"rgba(239, 68, 68, 0.12)"};
`,me=(0,o.Ay)(G.b6i)`
  font-size: 1.35rem;
  pointer-events: none;
`,pe={EN:"en",AR:"ar",ENAR:"en&ar"};var he=a(26557),ue=a(56723);const xe="https://storage.googleapis.com/ecommerce-bucket-testing/";function be(e){var i,a,r;let{product:o,setIsFormOpen:t,setSelectedProduct:d,setSelectedIdForAction:s,setIsDeletePopUpOpen:l}=e;const{category:c,images:g,cover_id:m}=o,p=(0,he.getCookie)("userInfo")||"{}",[h]=(0,n.useState)(JSON.parse(p)),u=null===g||void 0===g||null===(i=g.find((e=>e.url.includes(m))))||void 0===i?void 0:i.url,x=null===g||void 0===g||null===(a=g[0])||void 0===a||null===(r=a.url)||void 0===r?void 0:r.includes("png");return(0,ue.jsx)(X,{children:(0,ue.jsxs)(ee,{children:[(0,ue.jsx)(ie,{children:u?(0,ue.jsx)(ae,{JPG:x,src:`${xe}${u}`,alt:""}):null}),(0,ue.jsxs)(de,{children:[(0,ue.jsx)(se,{children:(null===o||void 0===o?void 0:o.en_name)||(null===o||void 0===o?void 0:o.ar_name)}),(0,ue.jsx)(le,{children:h.Lang===pe.AR?c.ar_category:c.en_category}),((null===o||void 0===o?void 0:o.hide)||(null===o||void 0===o?void 0:o.out_of_stock))&&(0,ue.jsxs)(ce,{children:[(null===o||void 0===o?void 0:o.hide)&&(0,ue.jsx)(ge,{$variant:"hidden",children:"Hidden"}),(null===o||void 0===o?void 0:o.out_of_stock)&&(0,ue.jsx)(ge,{$variant:"out",children:"Out of stock"})]})]}),(0,ue.jsxs)(ne,{children:[(0,ue.jsx)(re,{type:"button","aria-label":"Edit product",onClick:e=>{e.preventDefault(),e.stopPropagation(),d(o),t(!0)},children:(0,ue.jsx)(te,{})}),(0,ue.jsx)(oe,{type:"button","aria-label":"Delete product",onClick:e=>{e.preventDefault(),e.stopPropagation(),s(o.id),l(!0)},children:(0,ue.jsx)(me,{})})]})]})})}const fe=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0;
  row-gap: 0;
  position: relative;
  padding-top: 40px;
  margin-top: 20px;
  width:${e=>"formbuilder"==e.activeTab?"100%":"60%"};
  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
  }
`,_e=(0,o.Ay)(G.b6i)`
  font-size: 15px;
  cursor: pointer;

`,ye=o.Ay.div`
width: 100%;
height:30px;
display: flex;
align-items: center;
justify-content: space-between;

`,ve=o.Ay.button`
  /* width: 150px; */
  height: 20px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${t.Jn.mainColor};
  font-weight: 500;
  font-size: 10px;

`,je=(0,o.Ay)(G._Dy)`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
`,Ae=o.Ay.input`
  display: none;
`,we=o.Ay.div`
  width: 100%;
`,ke=o.Ay.div`
  width: 80%;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
`,$e=o.Ay.div`
  width: 25%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: ${t.L8.sm}px) {
    width: 50%;
  }
`,Se=o.Ay.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;

`,ze=o.Ay.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;


`,Ce=o.Ay.div`
   width: 100%;
  height: 150px;
  background-color: transparent;
  border:1px solid  #1976d2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:10px;
  border-radius: 5px;
`,Me={width:"100%",mb:0,alignSelf:"stretch"},Ee=Me,De={...Me,display:"flex",flexDirection:"column",border:"1px solid rgba(0, 0, 0, 0.23)",borderRadius:1,overflow:"hidden",minHeight:260,"&:focus-within":{borderColor:"primary.main"},"& .product-rich-text-content":{flex:1,display:"flex",flexDirection:"column",minHeight:200},"& .ProseMirror":{flex:1,minHeight:200,padding:"12px 14px",outline:"none",fontSize:"1rem",lineHeight:1.5,"&:focus":{outline:"none"},"& p.is-editor-empty:first-child::before":{content:"attr(data-placeholder)",float:"left",color:"rgba(0, 0, 0, 0.38)",pointerEvents:"none",height:0}}},Be=o.Ay.p`
  /* align-self: flex-end; */
  margin-left: 20px;
  font-size: 13px;
  color: red;
`,Te=o.Ay.div`
  display: flex;
  flex-direction: row;
  gap:10px;
  justify-content: center;
  align-items: center;
`,Re=o.Ay.div`
padding: 10px;
border-radius: 5px;
background-color:${e=>e.activeTab==e.tab?t.Jn.mainColor:"null"};
color:${e=>e.activeTab==e.tab?"white":"black"};

`;var Le=a(57513),He=a(98717),qe=a(52891),Fe=a(13665),Ke=a(62684),Ne=a(98761),Pe=a(98844),Oe=a(81830),Ie=a(42934),Je=a(23080),Qe=a(81132),We=a(13332);const Ye=async e=>{try{const i=Qe.ix,a=new FormData,{EN:n,ENAR:o,AR:t}=pe,{Lang:d}=JSON.parse((0,he.getCookie)("userInfo"));switch(console.log(e.en_price),d){case n:a.append("en_name",e.en_name),e.en_description&&a.append("en_description",e.en_description),a.append("en_price",e.en_price);break;case t:a.append("ar_name",e.ar_name),e.ar_description&&a.append("ar_description",e.ar_description),a.append("en_price",e.en_price);break;case o:a.append("en_name",e.en_name),e.en_description&&a.append("en_description",e.en_description),a.append("en_price",e.en_price),a.append("ar_name",e.ar_name),e.ar_description&&a.append("ar_description",e.ar_description)}a.append("restaurant_id",e.restaurant_id),a.append("category_id",e.category_id),e.images.forEach(((e,i)=>{a.append(`images[${i}][url]`,e.url),a.append(`images[${i}][file]`,e.file)})),a.append("priority",e.priority),a.append("product_code",e.product_code),a.append("discount",e.discount),a.append("cover_id",e.cover_id),a.append("form_json",e.form_json),a.append("new",e.new),a.append("square_dimension",e.square_dimension),a.append("hide",e.hide),a.append("out_of_stock",e.out_of_stock),a.append("featured",e.featured),a.append("is_best_seller",e.is_best_seller);return await r.A.post(i,a,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(i){throw i}},Ze=e=>{let{onSuccess:i,onError:a=(()=>{})}=e;const{error:n,mutate:r,isPending:o}=(0,We.n)({mutationFn:Ye,onSuccess:i,onError:a});return{isPending:o,error:n,handleApiCall:e=>r(e)}};var Ge=a(23377),Ve=a(34304),Ue=a(10947);const Xe=Ue.Ik().shape({en_name:Ue.Yj().required("Required field"),en_description:Ue.Yj().optional(),en_price:Ue.Yj().optional(),category_id:Ue.ai().required("Required field"),priority:Ue.ai().required("Required field"),cover_id:Ue.Yj().required("Required field"),menu_visibility:Ue.Yj().oneOf(["both","dine_in","delivery"]).optional(),delivery_price:Ue.Yj().optional().nullable()}),ei=Ue.Ik().shape({ar_name:Ue.Yj().required("Required field"),ar_description:Ue.Yj().optional(),category_id:Ue.ai().required("Required field"),priority:Ue.ai().required("Required field"),en_price:Ue.Yj().optional(),cover_id:Ue.Yj().required("Required field"),menu_visibility:Ue.Yj().oneOf(["both","dine_in","delivery"]).optional(),delivery_price:Ue.Yj().optional().nullable()}),ii=Ue.Ik().shape({ar_name:Ue.Yj().required("Required field"),ar_description:Ue.Yj().optional(),en_name:Ue.Yj().required("Required field"),en_description:Ue.Yj().optional(),en_price:Ue.Yj().optional(),category_id:Ue.ai().required("Required field"),priority:Ue.ai().required("Required field"),cover_id:Ue.Yj().required("Required field"),menu_visibility:Ue.Yj().oneOf(["both","dine_in","delivery"]).optional(),delivery_price:Ue.Yj().optional().nullable()});var ai=a(17201),ni=a(27303);const ri=e=>{let{onSuccess:i,restaurantId:a}=e;const{error:n,isLoading:o,status:t,data:d,refetch:s}=(0,ni.I)({queryFn:()=>(async e=>{try{const i=(0,Qe.Wr)(e);return await r.A.get(i,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(n){throw n}})(a),retry:!1,queryKey:[`categories-${a}`],enabled:Boolean(a),onSuccess:i});return{error:n,isLoading:o,status:t,response:d,refetch:s}},oi=e=>{let{onSuccess:i,onError:a=(()=>{})}=e;const{error:n,mutate:o,isPending:t}=(0,We.n)({mutationFn:e=>(async(e,i)=>{try{const a=(0,Qe.RX)(e),n=new FormData,{EN:o,ENAR:t,AR:d}=pe,{Lang:s}=JSON.parse((0,he.getCookie)("userInfo"));switch(s){case o:n.append("en_name",i.en_name),i.en_description&&n.append("en_description",i.en_description),n.append("en_price",i.en_price);break;case d:n.append("ar_name",i.ar_name),i.ar_description&&n.append("ar_description",i.ar_description),n.append("en_price",i.en_price);break;case t:n.append("en_name",i.en_name),i.en_description&&n.append("en_description",i.en_description),n.append("en_price",i.en_price),n.append("ar_name",i.ar_name),i.ar_description&&n.append("ar_description",i.ar_description)}return n.append("restaurant_id",i.restaurant_id),n.append("category_id",i.category_id),i.images.forEach(((e,i)=>{n.append(`images[${i}][url]`,e.url),n.append(`images[${i}][file]`,null===e||void 0===e?void 0:e.file),n.append(`images[${i}][isDeleted]`,e.isDeleted),n.append(`images[${i}][id]`,e.id)})),n.append("priority",i.priority),n.append("product_code",i.product_code),n.append("discount",i.discount),n.append("cover_id",i.cover_id),n.append("form_json",i.form_json),n.append("new",i.new),n.append("square_dimension",i.square_dimension),n.append("hide",i.hide),n.append("out_of_stock",i.out_of_stock),n.append("featured",i.featured),n.append("is_best_seller",i.is_best_seller),await r.A.put(a,n,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(n){throw n}})(e[0],e[1]),onSuccess:i,onError:a});return{isPending:t,error:n,handleApiCall:(e,i)=>o([e,i])}},ti=e=>{let{onSuccess:i}=e;const{error:a,mutate:n,isPending:o}=(0,We.n)({mutationFn:e=>(async e=>{try{const i=(0,Qe.kB)(e);return await r.A.delete(i,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(a){throw a}})(e),onSuccess:i});return{isPending:o,error:a,handleApiCall:e=>n(e)}};var di=a(73422),si=a(42186),li=a(70061),ci=a(47108),gi=a(57386),mi=a(93465),pi=a(38884),hi=a(93232),ui=a(87452),xi=a(62469),bi=a(56779),fi=a(39878),_i=a(84921),yi=a(14890),vi=a(74312),ji=a(99440),Ai=a(30314),wi=a(16253),ki=a(71481);function $i(){return(0,ue.jsx)(vi.A,{flexItem:!0,orientation:"vertical",sx:{mx:.25,alignSelf:"stretch",borderColor:"divider"}})}function Si(e){let{value:i,onChange:a,placeholder:r,documentDir:o="ltr",sx:t}=e;const d=(0,n.useRef)(null!==i&&void 0!==i?i:""),[,s]=(0,n.useReducer)((e=>e+1),0),l=(0,ci.hG)({extensions:[gi.A.configure({heading:{levels:[2,3]}}),mi.A,hi.A,ui.A,xi.Ay.configure({multicolor:!0}),pi.A.configure({types:["heading","paragraph"]}),bi.Ay.configure({openOnClick:!1,HTMLAttributes:{rel:"noopener noreferrer",target:"_blank"}}),fi.A,_i.A,yi.A.configure({placeholder:r||""})],content:i||"",editorProps:{attributes:{dir:o}},onUpdate:e=>{let{editor:i}=e;const n=i.getHTML();d.current=n,a(n)}});if((0,n.useEffect)((()=>{if(!l||l.isDestroyed)return;const e=null!==i&&void 0!==i?i:"";e!==d.current&&(d.current=e,l.commands.setContent(e,!1))}),[l,i]),(0,n.useEffect)((()=>{l&&!l.isDestroyed&&l.view.dom.setAttribute("dir",o)}),[l,o]),(0,n.useEffect)((()=>{if(!l||l.isDestroyed)return;const e=()=>s();return l.on("selectionUpdate",e),l.on("transaction",e),()=>{l.off("selectionUpdate",e),l.off("transaction",e)}}),[l]),!l)return null;return(0,ue.jsxs)(qe.A,{sx:t,children:[(0,ue.jsxs)(qe.A,{className:"product-rich-text-toolbar",sx:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:.25,py:.5,px:.5,borderBottom:"1px solid rgba(0, 0, 0, 0.12)",bgcolor:"action.hover"},onMouseDown:e=>e.preventDefault(),children:[(0,ue.jsx)(ji.A,{title:"Bold",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"bold",selected:l.isActive("bold"),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().toggleBold().run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.ljE,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Italic",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"italic",selected:l.isActive("italic"),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().toggleItalic().run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki._Me,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Underline",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"underline",selected:l.isActive("underline"),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().toggleUnderline().run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.INR,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Strikethrough",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"strike",selected:l.isActive("strike"),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().toggleStrike().run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.RPD,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Subscript",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"sub",selected:l.isActive("subscript"),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().toggleSubscript().run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.xAi,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Superscript",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"sup",selected:l.isActive("superscript"),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().toggleSuperscript().run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.OwI,{size:14})})})}),(0,ue.jsx)($i,{}),(0,ue.jsx)(ji.A,{title:"Heading 2",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"h2",selected:l.isActive("heading",{level:2}),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().toggleHeading({level:2}).run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.UEl,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Heading 3",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"h3",selected:l.isActive("heading",{level:3}),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().toggleHeading({level:3}).run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)("span",{style:{fontSize:12,fontWeight:700},children:"H3"})})})}),(0,ue.jsx)(ji.A,{title:"Paragraph",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"p",selected:l.isActive("paragraph")&&!l.isActive("heading"),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().setParagraph().run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.Wti,{size:14})})})}),(0,ue.jsx)($i,{}),(0,ue.jsx)(ji.A,{title:"Bullet list",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"bullet",selected:l.isActive("bulletList"),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().toggleBulletList().run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.v5n,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Numbered list",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"ordered",selected:l.isActive("orderedList"),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().toggleOrderedList().run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.lfF,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Quote",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"quote",selected:l.isActive("blockquote"),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().toggleBlockquote().run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.K9h,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Horizontal rule",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(wi.A,{size:"small",onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().setHorizontalRule().run(),sx:{p:.5},children:(0,ue.jsx)(ki.iu5,{size:14})})})}),(0,ue.jsx)($i,{}),(0,ue.jsx)(ji.A,{title:"Align left",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"left",selected:l.isActive({textAlign:"left"}),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().setTextAlign("left").run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.E7i,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Align center",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"center",selected:l.isActive({textAlign:"center"}),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().setTextAlign("center").run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.qAe,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Align right",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"right",selected:l.isActive({textAlign:"right"}),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().setTextAlign("right").run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.v$9,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Justify",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"justify",selected:l.isActive({textAlign:"justify"}),onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().setTextAlign("justify").run(),sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.f08,{size:14})})})}),(0,ue.jsx)($i,{}),(0,ue.jsx)(ji.A,{title:"Link",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(Ai.A,{size:"small",value:"link",selected:l.isActive("link"),onMouseDown:e=>e.preventDefault(),onClick:e=>{e.preventDefault();const i=l.getAttributes("link").href,a=window.prompt("URL",i||"https://");null!==a&&(""!==a?l.chain().focus().extendMarkRange("link").setLink({href:a}).run():l.chain().focus().extendMarkRange("link").unsetLink().run())},sx:{py:.25,px:.5,minWidth:32},children:(0,ue.jsx)(ki.AnD,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Remove link",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(wi.A,{size:"small",onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().unsetLink().run(),sx:{p:.5},children:(0,ue.jsx)(ki.fSB,{size:14})})})}),(0,ue.jsx)(ji.A,{title:"Text color",children:(0,ue.jsx)("span",{children:(0,ue.jsxs)(wi.A,{size:"small",component:"label",sx:{p:.5,overflow:"hidden"},children:[(0,ue.jsx)(qe.A,{component:"input",type:"color",value:l.getAttributes("textStyle").color||"#000000",onInput:e=>l.chain().focus().setColor(e.target.value).run(),sx:{position:"absolute",opacity:0,width:0,height:0}}),(0,ue.jsx)(qe.A,{sx:{width:18,height:18,borderRadius:.5,border:"1px solid",borderColor:"divider",bgcolor:l.getAttributes("textStyle").color||"transparent"}})]})})}),(0,ue.jsx)(ji.A,{title:"Highlight",children:(0,ue.jsx)("span",{children:(0,ue.jsxs)(wi.A,{size:"small",component:"label",sx:{p:.5,overflow:"hidden"},children:[(0,ue.jsx)(qe.A,{component:"input",type:"color",defaultValue:"#fff176",onInput:e=>l.chain().focus().toggleHighlight({color:e.target.value}).run(),sx:{position:"absolute",opacity:0,width:0,height:0}}),(0,ue.jsx)(qe.A,{sx:{width:18,height:18,borderRadius:.5,border:"1px solid",borderColor:"divider",bgcolor:l.getAttributes("highlight").color||"#fff176"}})]})})}),(0,ue.jsx)($i,{}),(0,ue.jsx)(ji.A,{title:"Clear formatting",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(wi.A,{size:"small",onMouseDown:e=>e.preventDefault(),onClick:()=>l.chain().focus().clearNodes().unsetAllMarks().setParagraph().run(),sx:{p:.5},children:(0,ue.jsx)(ki.hlM,{size:14})})})})]}),(0,ue.jsx)(qe.A,{sx:{flex:1,minHeight:0},children:(0,ue.jsx)(ci.$Z,{editor:l,className:"product-rich-text-content"})})]})}var zi=a(42751),Ci=a(67851),Mi=a(65470),Ei=a(53292),Di=a(61927),Bi=a(73556),Ti=a(28471);function Ri(e,i,a){const n=[...e],r=i+a;return r<0||r>=n.length?e:([n[i],n[r]]=[n[r],n[i]],n)}function Li(e){const i=(0,Bi.xC)(e);return"v2"===i.kind?(0,Bi.s3)(i.data):"legacy"===i.kind?(0,Ti.Oz)(i.data):(0,Bi.yu)()}function Hi(e){let{value:i,onChange:a,languageHint:n="en"}=e;const r=(0,Bi.s3)(i||(0,Bi.yu)()),o=(e,i)=>{a((0,Bi.s3)({...r,[e]:i}))},t="ar"===n;return(0,ue.jsx)(Le.Ay,{container:!0,spacing:2,sx:{width:"100%",maxWidth:1320,mx:"auto",py:1,alignItems:"stretch"},children:[{key:"sizes",titleEn:"Size options",titleAr:"\u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u062d\u062c\u0645",subtitleEn:"Customer picks one size. Enter each size\u2019s price (0 = same as product list price).",subtitleAr:"\u0633\u0639\u0631 \u0643\u0644 \u062d\u062c\u0645\u061b 0 = \u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062a\u062c \u0627\u0644\u0623\u0633\u0627\u0633\u064a.",priceField:!0},{key:"addons",titleEn:"Add-ons",titleAr:"\u0625\u0636\u0627\u0641\u0627\u062a",subtitleEn:"Extra items with optional price.",subtitleAr:"\u0625\u0636\u0627\u0641\u0627\u062a \u0628\u0633\u0639\u0631 \u0627\u062e\u062a\u064a\u0627\u0631\u064a.",priceField:!0},{key:"removals",titleEn:"Remove / customize",titleAr:"\u0625\u0632\u0627\u0644\u0629 / \u062a\u062e\u0635\u064a\u0635",subtitleEn:"e.g. No onions, No sauce (no extra charge).",subtitleAr:"\u0645\u062b\u0644\u0627: \u0628\u062f\u0648\u0646 \u0628\u0635\u0644 \u2014 \u0628\u062f\u0648\u0646 \u062a\u0643\u0644\u0641\u0629 \u0625\u0636\u0627\u0641\u064a\u0629.",priceField:!1}].map((e=>{const i=r[e.key]||[];return(0,ue.jsx)(Le.Ay,{item:!0,xs:12,md:4,children:(0,ue.jsxs)(qe.A,{sx:{height:"100%",display:"flex",flexDirection:"column",p:2,borderRadius:2,border:"1px solid",borderColor:"divider",bgcolor:"background.paper"},children:[(0,ue.jsx)(Mi.A,{fontWeight:600,variant:"subtitle1",gutterBottom:!0,children:t?e.titleAr:e.titleEn}),(0,ue.jsx)(Mi.A,{variant:"caption",color:"text.secondary",display:"block",sx:{mb:2},children:t?e.subtitleAr:e.subtitleEn}),(0,ue.jsxs)(Ei.A,{spacing:2,sx:{flex:1,minWidth:0},children:[i.map(((a,n)=>{var r;return(0,ue.jsx)(qe.A,{sx:{p:1.5,borderRadius:2,bgcolor:"action.hover",border:"1px solid",borderColor:"divider"},children:(0,ue.jsxs)(Ei.A,{direction:"column",spacing:1,alignItems:"stretch",children:[(0,ue.jsx)(He.A,{size:"small",label:t?"\u0627\u0644\u0627\u0633\u0645 (\u0625\u0646\u062c\u0644\u064a\u0632\u064a)":"Label (English)",value:a.labelEn,onChange:r=>{const t=[...i];t[n]={...a,labelEn:r.target.value},o(e.key,t)},fullWidth:!0}),(0,ue.jsx)(He.A,{size:"small",label:t?"\u0627\u0644\u0627\u0633\u0645 (\u0639\u0631\u0628\u064a)":"Label (Arabic)",value:a.labelAr,onChange:r=>{const t=[...i];t[n]={...a,labelAr:r.target.value},o(e.key,t)},fullWidth:!0}),e.priceField&&(0,ue.jsx)(He.A,{size:"small",type:"number",label:"sizes"===e.key?t?"\u0627\u0644\u0633\u0639\u0631":"Price":t?"\u0633\u0639\u0631 \u0625\u0636\u0627\u0641\u064a":"Extra price",value:null!==(r=a.priceModifier)&&void 0!==r?r:"",onChange:r=>{const t=r.target.value,d=[...i];d[n]={...a,priceModifier:""===t?"":parseFloat(t)||0},o(e.key,d)},fullWidth:!0,inputProps:{step:"0.01"}}),(0,ue.jsxs)(Ei.A,{direction:"row",spacing:.5,flexWrap:"wrap",children:[(0,ue.jsx)(wi.A,{size:"small","aria-label":"move up",onClick:()=>o(e.key,Ri(i,n,-1)),disabled:0===n,children:(0,ue.jsx)(zi.uCC,{size:14})}),(0,ue.jsx)(wi.A,{size:"small","aria-label":"move down",onClick:()=>o(e.key,Ri(i,n,1)),disabled:n===i.length-1,children:(0,ue.jsx)(zi.$TP,{size:14})}),(0,ue.jsx)(wi.A,{size:"small",color:"error","aria-label":"delete",onClick:()=>o(e.key,i.filter(((e,i)=>i!==n))),children:(0,ue.jsx)(zi.qbC,{size:14})})]})]})},a.id)})),(0,ue.jsx)(Di.A,{startIcon:(0,ue.jsx)(zi.OiG,{size:14}),variant:"outlined",size:"small",onClick:()=>{const a=e.priceField?{labelEn:"",labelAr:"",priceModifier:""}:{labelEn:"",labelAr:""};o(e.key,[...i,{...a,id:void 0}])},sx:{alignSelf:"flex-start"},children:t?"\u0625\u0636\u0627\u0641\u0629 \u062e\u064a\u0627\u0631":"Add option"})]})]})},e.key)}))})}function qi(e){var i,a,r,o;let{setIsFormOpen:d,selectedProduct:s,refetchProducts:l,setSelectedProduct:c,userInformation:g}=e;const m=(0,si.jE)(),[p,h]=(0,n.useState)([]),[u,x]=(0,n.useState)(""),[b,f]=(0,n.useState)(null),[_,y]=(0,n.useState)(!1),[v,j]=(0,n.useState)(null===g||void 0===g?void 0:g.square_dimension),[A,w]=(0,n.useState)(!1),[k,$]=(0,n.useState)(!1),[S,z]=(0,n.useState)(!1),[C,M]=(0,n.useState)(!1),[E,D]=(0,n.useState)("both"),[B,L]=(0,n.useState)((()=>(0,Bi.yu)())),[H,q]=(0,n.useState)("productinfo"),[F,K]=(0,n.useState)([]),N=(0,n.useRef)(null),{AR:P,EN:O,ENAR:I}=pe,J=g.Lang===pe.AR?ei:g.Lang===pe.EN?Xe:ii,{register:Q,handleSubmit:W,formState:Y,setValue:Z,getValues:G,watch:V}=(0,Je.mN)({resolver:(0,Ge.t)(J),defaultValues:{discount:0,priority:1,product_code:0}});(0,n.useLayoutEffect)((()=>{var e;if(!p||!Array.isArray(p)||0===p.length)return;const i=p.filter((e=>!e.isDeleted));if(1!==i.length||null===(e=i[0])||void 0===e||!e.id)return;const a=i[0].id;f((e=>{if(null!=e&&""!==e){const a=i.some((i=>i.id===e)),n="string"===typeof e&&i.some((i=>String(i.url).includes(String(e))));if(a||n)return e}return a}))}),[p]);const{handleApiCall:U,isPending:X}=Ze({onSuccess:()=>{c(null),l(),d(!1),m.resetQueries(["products"],{exact:!0})},onError:()=>{di.oR.error("Failed to add product !!")}}),{handleApiCall:ee,isPending:ie}=ti({onSuccess:()=>{c(null),l(),d(!1)}}),{handleApiCall:ae,isPending:ne}=oi({onSuccess:()=>{c(null),d(!1),m.resetQueries(["products"],{exact:!0})},onError:()=>{di.oR.error("Failed to edit product !!")}}),{isLoading:re,response:oe}=ri({onSuccess:()=>d(!1),restaurantId:g.restaurant_id});(0,n.useEffect)((()=>{re||K(oe.data)}),[re]),(0,n.useEffect)((()=>{if(s){var e;if(g.Lang===O){const{en_name:e,en_description:i,en_price:a}=s;Z("en_name",e),i&&Z("en_description",i),Z("en_price",a)}else if(g.Lang===P){const{ar_name:e,ar_description:i,en_price:a}=s;Z("en_price",a),Z("ar_name",e),i&&Z("ar_description",i)}else{const{en_name:e,en_description:i,en_price:a,ar_name:n,ar_description:r}=s;Z("en_name",e),i&&Z("en_description",i),Z("en_price",a),Z("ar_name",n),r&&Z("ar_description",r)}const i=s.images.map((e=>({url:e.url,isDeleted:!1,id:e.id})));h(i),Z("images",i),Z("category_id",s.category_id),Z("priority",s.priority),Z("product_code",s.product_code),Z("discount",null!==(e=s.discount)&&void 0!==e?e:0),Z("cover_id",s.cover_id);const a=Li(s.form_json);Z("form_json",(0,Bi.nD)(a)),f(s.cover_id),L(a),Z("new",s.new),Z("square_dimension",s.square_dimension),Z("hide",s.hide),Z("out_of_stock",s.out_of_stock),Z("featured",s.featured),Z("is_best_seller",s.is_best_seller),y(s.new),j(s.square_dimension),w(Boolean(s.hide)),$(Boolean(s.out_of_stock)),z(Boolean(s.featured)),M(Boolean(s.is_best_seller)),D(s.menu_visibility||"both"),Z("menu_visibility",s.menu_visibility||"both"),Z("delivery_price",s.delivery_price||"")}else L((0,Bi.yu)()),h([]),f(null),Z("discount",0),D("both"),Z("menu_visibility","both"),Z("delivery_price","")}),[s]);const te=e=>i=>{Z(e,i)},de=g.Lang===pe.EN||g.Lang===pe.ENAR,se=g.Lang===pe.AR||g.Lang===pe.ENAR,le=[{name:"en_name",label:"English name",display:de,type:"text",mui_type:"textfield"},{name:"ar_name",label:"Arabic name",display:se,type:"text",mui_type:"textfield"},{name:"en_description",label:"English description",display:de,type:"text",mui_type:"textarea"},{name:"ar_description",label:"Arabic description",display:se,type:"text",mui_type:"textarea"},{name:"en_price",label:"en_price",display:de||se,type:"number",mui_type:"textfield"}].filter((e=>{let{display:i}=e;return i}));return(0,ue.jsx)(ue.Fragment,{children:(0,ue.jsxs)(fe,{activeTab:H,children:[(0,ue.jsx)(je,{onClick:()=>{c(null),d(!1),h(null),f(null)}}),(0,ue.jsxs)(Te,{children:[(0,ue.jsx)(Re,{activeTab:H,tab:"productinfo",onClick:()=>{q("productinfo")},children:"Product Details"}),(0,ue.jsx)(Re,{activeTab:H,tab:"formbuilder",onClick:()=>{q("formbuilder")},children:"Product options"})]}),"productinfo"==H?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(Ae,{type:"file",ref:N,onChange:async e=>{const i=e.target.files;if(!i||0===i.length)return;if(i.length+p.length>8)return void x("Limit 8 images");let a=!1;for(const r of i){r.size;try{const e={maxSizeMB:.3,maxWidthOrHeight:1920,useWebWorker:!0},i=await(0,Ci.A)(r,e),a=(0,li.A)(),n=new File([i],`${a}`,{type:i.type});h((e=>[...e,{url:URL.createObjectURL(r),isDeleted:!1,file:n,id:a}]))}catch(n){console.error("Error compressing image:",n),x("Error compressing image"),a=!0;break}}a||x(""),e.target.value=null},multiple:!0}),(0,ue.jsxs)(ke,{children:[(0,ue.jsx)($e,{children:(0,ue.jsx)(Se,{children:(0,ue.jsxs)(Ce,{onClick:()=>{N.current.click()},children:["Upload Image",(0,ue.jsx)(zi.OiG,{style:{fontSize:"20px"}})]})})}),p.map((e=>{let{url:i,isDeleted:a,id:n}=e;const r=i.includes("blob")?i:`https://storage.googleapis.com/ecommerce-bucket-testing/${i}`;if(!a)return(0,ue.jsx)($e,{children:(0,ue.jsxs)(Se,{children:[(0,ue.jsx)(ze,{src:r,alt:"Uploaded"}),(0,ue.jsxs)(ye,{children:[(0,ue.jsx)(ve,{onClick:()=>(e=>{let i;if(e.includes("blob")){const a=p.find((i=>i.url===e));i=null===a||void 0===a?void 0:a.id}else i=e.replace(/^\d+-/,"");f(i),Z("cover_id",i)})(i),children:b===n||i.includes(b)?"Selected":"Select Cover"}),(0,ue.jsx)(_e,{onClick:()=>{(e=>{const i=p.find((i=>i.url===e));let a;(e.includes(b)||i.id===b)&&f(null),a=e.includes("blob")?p.filter((i=>i.url!==e)):p.map((i=>i.url===e?{...i,isDeleted:!0}:i)),h(a),Z("images",a)})(i)}})]})]})})}))]}),(0,ue.jsx)(we,{children:(0,ue.jsx)(Be,{children:u})}),(0,ue.jsxs)(Le.Ay,{container:!0,spacing:2,sx:{width:"100%",mb:2},children:[le.map((e=>{var i,a,n,r,o,t;let{name:d,label:l,type:c,mui_type:g}=e;return"textfield"===g?(0,ue.jsx)(Le.Ay,{item:!0,xs:12,md:6,children:(0,ue.jsx)(He.A,{label:l,name:d,variant:"outlined",...Q(d),fullWidth:!0,sx:Ee,type:c,error:!(0,Ve.isEmpty)(null===Y||void 0===Y||null===(a=Y.errors)||void 0===a?void 0:a[d]),helperText:!(0,Ve.isEmpty)(null===Y||void 0===Y||null===(n=Y.errors)||void 0===n?void 0:n[d])&&(null===(r=Y.errors)||void 0===r?void 0:r[d].message)})},`${null!==(i=null===s||void 0===s?void 0:s.id)&&void 0!==i?i:"new"}-${d}`):(0,ue.jsx)(Le.Ay,{item:!0,xs:12,md:6,children:(0,ue.jsx)(Si,{value:null!==(t=V(d))&&void 0!==t?t:"",onChange:te(d),placeholder:l,documentDir:d.includes("ar_")?"rtl":"ltr",sx:De})},`${null!==(o=null===s||void 0===s?void 0:s.id)&&void 0!==o?o:"new"}-${d}`)})),(0,ue.jsx)(Le.Ay,{item:!0,xs:12,md:6,children:(0,ue.jsx)(He.A,{label:"Priority",name:"priority",variant:"outlined",...Q("priority"),fullWidth:!0,sx:Ee,error:!(0,Ve.isEmpty)(null===Y||void 0===Y||null===(i=Y.errors)||void 0===i?void 0:i.priority),helperText:!(0,Ve.isEmpty)(null===Y||void 0===Y||null===(a=Y.errors)||void 0===a?void 0:a.priority)&&"Required Field",type:"number",inputProps:{min:1}})}),(0,ue.jsx)(Le.Ay,{item:!0,xs:12,md:6,children:(0,ue.jsx)(He.A,{label:"Product_code",name:"product_code",variant:"outlined",...Q("product_code"),fullWidth:!0,sx:Ee,type:"number"})}),(0,ue.jsx)(Le.Ay,{item:!0,xs:12,md:6,children:(0,ue.jsx)(He.A,{label:"Discount",name:"discount",variant:"outlined",...Q("discount"),fullWidth:!0,sx:Ee,type:"number"})}),(0,ue.jsx)(Le.Ay,{item:!0,xs:12,md:6,children:(0,ue.jsx)(qe.A,{sx:Ee,children:(0,ue.jsxs)(Fe.A,{fullWidth:!0,children:[(0,ue.jsx)(R.A,{children:"Category"}),(0,ue.jsxs)(T.A,{label:"Category",...Q("category_id"),error:!(0,Ve.isEmpty)(null===Y||void 0===Y||null===(r=Y.errors)||void 0===r?void 0:r.category_id),defaultValue:null===s||void 0===s?void 0:s.category_id,children:[(0,ue.jsx)(Ke.A,{value:0,children:"Offer"}),F.map((e=>{let{id:i,en_category:a,ar_category:n}=e;return(0,ue.jsx)(Ke.A,{value:i,children:g.Lang===pe.AR?n:a},i)}))]}),!(0,Ve.isEmpty)(null===Y||void 0===Y||null===(o=Y.errors)||void 0===o?void 0:o.category_id)&&(0,ue.jsx)(Ne.A,{style:{color:"#d64241"},children:"Required field"})]})})}),(0,ue.jsx)(Le.Ay,{item:!0,xs:12,md:6,children:(0,ue.jsx)(qe.A,{sx:Ee,children:(0,ue.jsxs)(Fe.A,{fullWidth:!0,children:[(0,ue.jsx)(R.A,{children:"Menu Availability"}),(0,ue.jsxs)(T.A,{label:"Menu Availability",value:E,onChange:e=>{D(e.target.value),Z("menu_visibility",e.target.value)},children:[(0,ue.jsx)(Ke.A,{value:"both",children:"Both Menus"}),(0,ue.jsx)(Ke.A,{value:"dine_in",children:"Dine-In Only"}),(0,ue.jsx)(Ke.A,{value:"delivery",children:"Delivery Only"})]})]})})}),"dine_in"!==E&&(0,ue.jsx)(Le.Ay,{item:!0,xs:12,md:6,children:(0,ue.jsx)(He.A,{label:"Delivery Price",name:"delivery_price",variant:"outlined",...Q("delivery_price"),fullWidth:!0,sx:Ee,type:"number",placeholder:"Same as main price if empty"})})]}),(0,ue.jsxs)(Fe.A,{component:"fieldset",children:[(0,ue.jsx)(Pe.A,{component:"legend",children:"New Item"}),(0,ue.jsx)(Oe.A,{control:(0,ue.jsx)(Ie.A,{checked:_,onChange:e=>{y(!_)}}),label:"New Item"})]}),(0,ue.jsxs)(Fe.A,{component:"fieldset",children:[(0,ue.jsx)(Pe.A,{component:"legend",children:"Square Dimension"}),(0,ue.jsx)(Oe.A,{control:(0,ue.jsx)(Ie.A,{checked:v,onChange:e=>{j(!v)}}),label:"Square Dimension"})]}),(0,ue.jsxs)(Fe.A,{component:"fieldset",children:[(0,ue.jsx)(Pe.A,{component:"legend",children:"Visibility"}),(0,ue.jsx)(Oe.A,{control:(0,ue.jsx)(Ie.A,{checked:A,onChange:()=>{w(!A)}}),label:"Hide product"})]}),(0,ue.jsxs)(Fe.A,{component:"fieldset",children:[(0,ue.jsx)(Pe.A,{component:"legend",children:"Stock"}),(0,ue.jsx)(Oe.A,{control:(0,ue.jsx)(Ie.A,{checked:k,onChange:()=>{$(!k)}}),label:"Out of stock"})]}),(0,ue.jsxs)(Fe.A,{component:"fieldset",children:[(0,ue.jsx)(Pe.A,{component:"legend",children:"Featured"}),(0,ue.jsx)(Oe.A,{control:(0,ue.jsx)(Ie.A,{checked:S,onChange:()=>{z(!S)}}),label:"Featured product"})]}),(0,ue.jsxs)(Fe.A,{component:"fieldset",children:[(0,ue.jsx)(Pe.A,{component:"legend",children:"Bestseller"}),(0,ue.jsx)(Oe.A,{control:(0,ue.jsx)(Ie.A,{checked:C,onChange:()=>{M(!C)}}),label:"Bestseller"})]})]}):(0,ue.jsx)(Hi,{value:B,onChange:L,languageHint:g.Lang===pe.AR?"ar":"en"}),(0,ue.jsx)(we,{children:(0,ue.jsx)(ai.A,{loading:X||ne,variant:"contained",style:{backgroundColor:t.Jn.mainColor},onClick:()=>{b?W((e=>{s?ae(s.id,{...e,images:p,restaurant_id:g.restaurant_id,cover_id:b,form_json:(0,Bi.nD)(B),new:_,square_dimension:v,hide:A,out_of_stock:k,featured:S,is_best_seller:C,menu_visibility:E,delivery_price:e.delivery_price||null}):U({...e,images:p,restaurant_id:g.restaurant_id,cover_id:b,form_json:(0,Bi.nD)(B),new:_,square_dimension:v,hide:A,out_of_stock:k,featured:S,is_best_seller:C,menu_visibility:E,delivery_price:e.delivery_price||null})}))():di.oR.error("Please select a cover for the product")},children:"Save Product"})})]})})}var Fi=a(29372),Ki=a(63696),Ni=a(19632),Pi=a(1887),Oi=a(62856);function Ii(e){let{isOpen:i,setIsOpen:a,selectedIdForAction:r,setSelectedIdForAction:o,refetchProducts:t}=e;const d=(0,si.jE)(),{isPending:s,handleApiCall:l}=ti({onSuccess:()=>{o(null),d.resetQueries(["products"],{exact:!0}),a(!1)}}),c=()=>{a(!1)};return(0,ue.jsx)(n.Fragment,{children:(0,ue.jsxs)(Fi.A,{open:i,onClose:c,children:[(0,ue.jsx)(Oi.A,{children:"Delete Product"}),(0,ue.jsx)(Ni.A,{children:(0,ue.jsx)(Pi.A,{children:"Are you sure you want to delete this product?"})}),(0,ue.jsxs)(Ki.A,{children:[(0,ue.jsx)(Di.A,{onClick:c,children:"Cancel"}),(0,ue.jsx)(ai.A,{onClick:()=>l(r),loading:s,children:"Delete"})]})]})})}var Ji=a(9328);function Qi(e){var i;let{}=e;const[a,r]=(0,n.useState)(null),[o,t]=(0,n.useState)(!1),[d,s]=(0,n.useState)(null),[c,g]=(0,n.useState)(!1),m=(0,he.getCookie)("userInfo")||"{}",[p,h]=(0,n.useState)(JSON.parse(m)),[u,x]=(0,n.useState)([]),[b,f]=(0,n.useState)(null),{isLoading:_,response:y,refetch:v}=ri({onSuccess:()=>{},restaurantId:p.restaurant_id}),j=null===b||""===b?null:b,{data:A,fetchNextPage:w,hasNextPage:k,isFetchingNextPage:$,status:S}=(0,Ji.w)(j);(0,n.useEffect)((()=>{if(!_&&null!==y&&void 0!==y&&y.data){const e=y.data;x(e),f((i=>{var a,n;return null!==i?i:null!==(a=null===(n=e[0])||void 0===n?void 0:n.id)&&void 0!==a?a:null}))}}),[_,null===y||void 0===y?void 0:y.data]);const z=()=>{};return(0,ue.jsx)(K,{children:o?(0,ue.jsx)(qi,{setIsFormOpen:t,selectedProduct:a,setSelectedProduct:r,refetchProducts:z,userInformation:p}):(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(Ii,{isOpen:c,setIsOpen:g,refetchProducts:z,selectedIdForAction:d,setSelectedIdForAction:s}),(0,ue.jsxs)(H,{children:[(0,ue.jsx)(q,{children:"Products"}),(0,ue.jsx)(F,{children:"Filter by category, then tap a card to edit. New products are added to the category you select in the menu above."})]}),(0,ue.jsxs)(N,{children:[(0,ue.jsx)(P,{children:(0,ue.jsx)(qe.A,{sx:{flex:1,minWidth:{xs:"100%",sm:220},maxWidth:440},children:(0,ue.jsxs)(Fe.A,{fullWidth:!0,size:"small",children:[(0,ue.jsx)(J,{id:"demo-simple-select-label",children:"Category"}),(0,ue.jsxs)(I,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:null!==b&&void 0!==b?b:"",label:"Category",onChange:e=>{const i=e.target.value;f(""===i?"":i)},children:[(0,ue.jsx)(Ke.A,{value:"",children:p.Lang===pe.AR?"\u0643\u0644 \u0627\u0644\u0641\u0626\u0627\u062a":"All Categories"}),u.map((e=>(0,ue.jsx)(Ke.A,{value:e.id,children:p.Lang===pe.AR?e.ar_category:e.en_category},e.id)))]})]})})}),(0,ue.jsxs)(Q,{type:"button",onClick:()=>t(!0),children:[(0,ue.jsx)(l.t50,{size:22}),"Add Product"]})]}),(0,ue.jsxs)(O,{children:[null===A||void 0===A||null===(i=A.pages)||void 0===i?void 0:i.flat().map((e=>(0,ue.jsx)(be,{product:e,setIsFormOpen:t,setSelectedProduct:r,setSelectedIdForAction:s,setIsDeletePopUpOpen:g},e.id))),k&&(0,ue.jsx)(W,{children:(0,ue.jsx)(Y,{children:(0,ue.jsx)(Z,{onClick:()=>{k&&!$&&w()},children:"Load More"})})})]})]})})}const Wi=t.Jn.mainColor,Yi=o.Ay.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  flex-direction: column;
  margin-top: 20px;
  min-height: 100vh;

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
`,Zi=o.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 4px 0 8px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,Gi=o.Ay.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  flex-shrink: 0;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 13.5px;
  font-weight: ${e=>e.tab===e.activetab?"600":"500"};
  color: ${e=>e.tab===e.activetab?"#ffffff":"#64748b"};
  background: ${e=>e.tab===e.activetab?Wi:"rgba(148,163,184,0.12)"};
  border: 1.5px solid ${e=>e.tab===e.activetab?Wi:"transparent"};
  cursor: pointer;
  transition: all 0.18s ease;
  box-shadow: ${e=>e.tab===e.activetab?`0 3px 12px ${Wi}40`:"none"};

  &:hover {
    background: ${e=>e.tab===e.activetab?Wi:"rgba(148,163,184,0.2)"};
    color: ${e=>e.tab===e.activetab?"#ffffff":"#334155"};
  }

  @media (max-width: ${t.L8.sm}px) {
    font-size: 12.5px;
    padding: 7px 13px;
  }
`,Vi=t.Jn.mainColor,Ui=(o.Ay.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 14px;
  margin-top: 16px;
  min-height: 60vh;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
`,o.Ay.span`
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 4px;
`,o.Ay.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-top: 20px;
`),Xi=o.Ay.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 500px;
`,ea=o.Ay.th`
  border-bottom: 2px solid #e2e8f0;
  padding: 10px 12px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  background: #f8fafc;
  white-space: nowrap;
`,ia=o.Ay.td`
  border-bottom: 1px solid #f1f5f9;
  padding: 10px 12px;
  font-size: 14px;
  color: #334155;
`,aa=o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,na=(0,o.Ay)(G.b6i)`
  cursor: pointer;
  font-size: 18px;
  color: #94a3b8;
  transition: color 0.15s;
  &:hover { color: #ef4444; }
`,ra=(0,o.Ay)(G.$Sw)`
  cursor: pointer;
  font-size: 18px;
  color: #94a3b8;
  transition: color 0.15s;
  &:hover { color: ${Vi}; }
`,oa=o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 20px;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${Vi};
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  transition: filter 0.15s, transform 0.15s;
  box-shadow: 0 3px 10px ${Vi}40;

  &:hover  { filter: brightness(1.1); transform: translateY(-1px); }
  &:active { transform: scale(0.97); }

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    justify-content: center;
    font-size: 13px;
  }
`,ta=t.Jn.mainColor,da=(0,o.Ay)(G._Dy)`
  position: absolute;
  left: 0;
  top: 20px;
  font-size: 22px;
  cursor: pointer;
  color: #64748b;
  transition: color 0.15s;
  &:hover { color: ${ta}; }
`,sa=(o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 20px;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${ta};
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  transition: filter 0.15s, transform 0.15s;
  box-shadow: 0 3px 10px ${ta}40;

  &:hover  { filter: brightness(1.1); transform: translateY(-1px); }
  &:active { transform: scale(0.97); }

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    justify-content: center;
    font-size: 13px;
  }
`,o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  position: relative;
  padding-top: 60px;
  width: 100%;
`),la=o.Ay.span`
  font-size: 12px;
  margin-top: 20px;
  font-weight: 600;
  color: #475569;
  line-height: 1.5;
  width: 100%;
  max-width: 480px;

  @media (max-width: ${t.L8.sm}px) {
    max-width: 100%;
    font-size: 11px;
  }
`,ca=async e=>{try{const i=Qe.RP;return await r.A.post(i,e,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(i){throw i}},ga=e=>{let{onSuccess:i}=e;const{error:a,mutate:n,isPending:r}=(0,We.n)({mutationFn:ca,onSuccess:i});return{isPending:r,error:a,handleApiCall:e=>n(e)}},ma=e=>{let{onSuccess:i}=e;const{error:a,mutate:n,isPending:o}=(0,We.n)({mutationFn:e=>(async(e,i)=>{try{const a=(0,Qe.ym)(e);return await r.A.put(a,i,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(a){throw a}})(e[0],e[1]),onSuccess:i});return{isPending:o,error:a,handleApiCall:(e,i)=>n([e,i])}};var pa=a(23390);const ha=[{id:1,GovernorateDescription:"Akkar - \u0639\u0643\u0627\u0631",Districts:[{id:1,DistrictDescription:"Akkar - \u0639\u0643\u0627\u0631",Cities:[{id:1944,region_name:"Aadouiye - \u0639\u062f\u0648\u064a"},{id:1945,region_name:"Aaidamoun - \u0639\u064a\u062f\u0645\u0648\u0646"},{id:1946,region_name:"Aaiyat - \u0639\u064a\u0627\u062a"},{id:1947,region_name:"Aakkar El Attiqa - \u0639\u0643\u0627\u0631 \u0627\u0644\u0639\u062a\u064a\u0642\u0629"},{id:1948,region_name:"Aamara - \u0639\u0645\u0627\u0631\u0647"},{id:1949,region_name:"Aaouinat - \u0627\u0644\u0639\u0648\u064a\u0646\u0627\u062a"},{id:1950,region_name:"Aarab Jourmnaya - \u062c\u0631\u0645\u0646\u0627\u064a\u0627"},{id:1951,region_name:"Aarida - \u0639\u0631\u064a\u0636\u0627"},{id:1952,region_name:"Aarmeh - \u0639\u0631\u0645\u0647"},{id:1953,region_name:"Aarqa - \u0639\u0631\u0642\u0627"},{id:1954,region_name:"Aayoun - \u0639\u064a\u0648\u0646 "},{id:1955,region_name:"Aayoun El Ghezlane - \u0639\u064a\u0648\u0646 \u0627\u0644\u063a\u0632\u0644\u0627\u0646"},{id:1956,region_name:"Abde - \u0627\u0644\u0639\u0628\u062f\u0647"},{id:1957,region_name:"Ain er Rsas - \u0639\u064a\u0646 \u0627\u0644\u0631\u0627\u0633"},{id:1958,region_name:"Ain ez Zeit - \u0639\u064a\u0646 \u0627\u0644\u0632\u064a\u062a"},{id:1959,region_name:"Ain Faouar - \u0639\u064a\u0646\xa0\u0627\u0644\u0641\u0648\u0627\u0631"},{id:1960,region_name:"Ain Tinta - \u0639\u064a\u0646 \u062a\u0646\u062a\u0627"},{id:1961,region_name:"Ain Yaaqoub - \u0639\u064a\u0646 \u064a\u0639\u0642\u0648\u0628"},{id:1962,region_name:"Akroum - \u0627\u0643\u0631\u0648\u0645"},{id:1963,region_name:"Al-Massoudieh - \u0627\u0644\u0645\u0633\u0639\u0648\u062f\u064a\u0629"},{id:1964,region_name:"Amaret el Baykat - \u0639\u0645\u0627\u0631 \u0627\u0644\u0628\u064a\u0643\u0627\u062a"},{id:1965,region_name:"Amayer - \u0627\u0644\u0639\u0645\u0627\u064a\u0631"},{id:1966,region_name:"Andqat - \u0639\u0646\u062f\u0642\u062a"},{id:1967,region_name:"Ard es Soud - \u0627\u0631\u0636 \u0627\u0644\u0633\u0648\u062f"},{id:1968,region_name:"Awade - \u0627\u0644\u0639\u0648\u0627\u062f\u0647"},{id:1969,region_name:"Baaliye - \u0628\u0639\u0644\u064a\u0627"},{id:1970,region_name:"Baddouaa - \u0628\u062f\u0648\u064a\u0627"},{id:1971,region_name:"Bajaa - \u0628\u062c\u0639\u0629"},{id:1972,region_name:"Balde - \u0628\u0644\u062f\u064a"},{id:1973,region_name:"Bani Sakher - \u0628\u0646\u064a \u0635\u062e\u0631"},{id:1974,region_name:"Barcha - \u0628\u0631\u0634\u0627"},{id:1975,region_name:"Bebnine - \u0628\u0628\u0646\u064a\u0646"},{id:1976,region_name:"Beino - \u0628\u064a\u0646\u0648"},{id:1977,region_name:"Beit Ali Adraa - \u0628\u064a\u062a \u0639\u0644\u064a \u0639\u062f\u0631\u0629"},{id:1978,region_name:"Beit Ayoub - \u0628\u064a\u062a \u0627\u064a\u0648\u0628"},{id:1979,region_name:"Beit Daoud - \u0628\u064a\u062a \u062f\u0627\u0648\u0648\u062f"},{id:1980,region_name:"Beit el Haj - \u0628\u064a\u062a \u0627\u0644\u062d\u0627\u062c"},{id:1981,region_name:"Beit el Haouch - \u0628\u064a\u062a \u0627\u0644\u062d\u0648\u0634"},{id:1982,region_name:"Beit Ghattas - \u0628\u064a\u062a \u063a\u0637\u0627\u0633"},{id:1983,region_name:"Beit Khlaiyel - \u0628\u064a\u062a \u062e\u0644\u0627\u064a\u0644"},{id:1984,region_name:"Beit Mellat - \u0628\u064a\u062a \u0645\u0644\u0627\u062a"},{id:1985,region_name:"Beit Younes - \u0628\u064a\u062a \u064a\u0648\u0646\u0633"},{id:1986,region_name:"Bellanet el Hissa - \u0628\u0644\u0627\u0646\u0629 \u0627\u0644\u062d\u064a\u0635\u0629"},{id:1987,region_name:"Berbara - \u0628\u0631\u0628\u0627\u0631\u0647"},{id:1988,region_name:"Berqayel - \u0628\u0631\u0642\u0627\u064a\u0644"},{id:1989,region_name:"Bezbina - \u0628\u0632\u0628\u064a\u0646\u0627"},{id:1990,region_name:"Bire Akkar - \u0627\u0644\u0628\u064a\u0631\u0647 \u0639\u0643\u0627\u0631"},{id:1991,region_name:"Borj el Arab - \u0628\u0631\u062c \u0627\u0644\u0639\u0631\u0628"},{id:1992,region_name:"Boustane El Herch - \u0628\u0633\u062a\u0627\u0646 \u0627\u0644\u062d\u0631\u0634"},{id:1993,region_name:"Bqayaa - \u0627\u0644\u0628\u0642\u064a\u0639\u0647"},{id:1994,region_name:"Bqerzala - \u0628\u0642\u0631\u0632\u0644\u0627"},{id:1995,region_name:"Bzaita - \u0628\u0632\u064a\u062a\u0627"},{id:1996,region_name:"Bzal - \u0628\u0632\u0627\u0644"},{id:1997,region_name:"Chadra - \u0634\u062f\u0631\u0647"},{id:1998,region_name:"Chane - \u0634\u0627\u0646"},{id:1999,region_name:"Chaqdouf - \u0627\u0644\u0634\u0642\u062f\u0648\u0641"},{id:2e3,region_name:"Charbila - \u0634\u0631\u0628\u064a\u0644\u0627"},{id:2001,region_name:"Chattaha - \u0634\u0637\u0627\u062d\u0629"},{id:2002,region_name:"Cheik Mohammad - \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u062f"},{id:2003,region_name:"Cheikh Aayash - \u0627\u0644\u0634\u064a\u062e \u0639\u064a\u0627\u0634"},{id:2004,region_name:"Cheikh Hmairine - \u0634\u064a\u062e \u062d\u0645\u0627\u0631\u064a\u0646"},{id:2005,region_name:"Cheikh Taba  - \u0627\u0644\u0634\u064a\u062e \u0637\u0627\u0628\u0627"},{id:2006,region_name:"Cheikh Taba es Sahl - \u0627\u0644\u0634\u064a\u062e \u0637\u0627\u0628\u0627 \u0627\u0644\u0633\u0647\u0644"},{id:2007,region_name:"Cheikh Zennad Talbibe - \u0627\u0644\u0634\u064a\u062e \u0632\u0646\u0627\u062f"},{id:2008,region_name:"Cheikhlar - \u0634\u064a\u062e\u0644\u0627\u0631"},{id:2009,region_name:"Chir Hmairine - \u0634\u064a\u0631 \u062d\u0645\u0627\u0631\u064a\u0646"},{id:2010,region_name:"Dabadeb - \u062f\u0627\u0628\u0627\u062f\u064a\u0628"},{id:2011,region_name:"Daghle - \u0627\u0644\u062f\u063a\u0644\u0629"},{id:2012,region_name:"Dahr Aayas - \u0636\u0647\u0631 \u0639\u064a\u0627\u0633"},{id:2013,region_name:"Dahr El Ballane - \u0636\u0647\u0631 \u0627\u0644\u0628\u0644\u0627\u0646\u0647"},{id:2014,region_name:"Dahr el Houssain - \u0636\u0647\u0631 \u0627\u0644\u062d\u0633\u064a\u0646"},{id:2015,region_name:"Dahr Laissineh - \u0636\u0647\u0631 \u0644\u064a\u0633\u064a\u0646\u0647"},{id:2016,region_name:"Danke et El Amriyeh - \u062f\u0646\u0643\u0629 \u0648 \u0627\u0644\u0639\u0627\u0645\u0631\u064a\u0629"},{id:2017,region_name:"Daousse Baghdadi - \u062f\u0648\u0633\u0629 \u0628\u063a\u062f\u0627\u062f\u064a"},{id:2018,region_name:"Darine - \u062f\u0627\u0631\u064a\u0646"},{id:2019,region_name:"Dayret Nahr el Kabir - \u062f\u0627\u0626\u0631\u0629 \u0627\u0644\u0646\u0647\u0631 \u0627\u0644\u0643\u0628\u064a\u0631"},{id:2020,region_name:"Deir Dalloum - \u062f\u064a\u0631 \u062f\u0644\u0648\u0645"},{id:2021,region_name:"Deir Janine - \u062f\u064a\u0631 \u062c\u0646\u064a\u0646"},{id:2022,region_name:"Deir Mar Jeryos - \u062f\u064a\u0631 \u0645\u0627\u0631 \u062c\u0631\u064a\u0633"},{id:2023,region_name:"Denke - \u062f\u0646\u0643\u064a"},{id:2024,region_name:"Dibbabiye - \u062f\u0628\u0627\u0628\u064a\u0629"},{id:2025,region_name:"Dinbou Ain al zahab - \u062f\u0646\u0628\u0648 \u0639\u064a\u0646 \u0627\u0644\u0630\u0647\u0628"},{id:2026,region_name:"Doueir Aadouiye - \u062f\u0648\u064a\u0631 \u0639\u062f\u0648\u064a\u0647"},{id:2027,region_name:"Ech Cheikh Maarouf - \u0627\u0644\u0634\u064a\u062e \u0645\u0639\u0631\u0648\u0641"},{id:2028,region_name:"Ed Daoura - \u0627\u0644\u062f\u0648\u0631\u0647"},{id:2029,region_name:"Ed Daousse - \u0627\u0644\u062f\u0648\u0633\u0629"},{id:2030,region_name:"Ed Debbabiye el Charqiye - \u0627\u0644\u062f\u0628\u0627\u0628\u064a\u0629 \u0627\u0644\u0634\u0631\u0642\u064a\u0629"},{id:2031,region_name:"Ed Debbabiye el Gharbiye - \u0627\u0644\u062f\u0628\u0627\u0628\u064a\u0629 \u0627\u0644\u063a\u0631\u0628\u064a\u0629"},{id:2032,region_name:"El Aabboudiye - \u0627\u0644\u0639\u0628\u0648\u062f\u064a\u0629"},{id:2033,region_name:"El Aamriye - \u0627\u0644\u0639\u0645\u0627\u0631\u064a\u0629"},{id:2034,region_name:"El Aaouaichat - \u0627\u0644\u0639\u0648\u064a\u0634\u0627\u062a"},{id:2035,region_name:"El Aarida - \u0627\u0644\u0639\u0631\u064a\u0636\u0629"},{id:2036,region_name:"El Aayoun - \u0627\u0644\u0639\u064a\u0648\u0646"},{id:2037,region_name:"El Barde - \u0628\u0631\u062f\u064a"},{id:2038,region_name:"El Borj Akkar - \u0627\u0644\u0628\u0631\u062c \u0639\u0643\u0627\u0631"},{id:2039,region_name:"El Fraidis - \u0641\u0631\u064a\u062f\u064a\u0633"},{id:2040,region_name:"El Ghawaya - \u0627\u0644\u0642\u0628\u064a\u0627\u062a \u063a\u0648\u0627\u064a\u0627"},{id:2041,region_name:"El Haissa - \u0627\u0644\u062d\u064a\u0635\u0629"},{id:2042,region_name:"El Hichi - \u0627\u0644\u0647\u064a\u0634\u0647"},{id:2043,region_name:"El Houaich - \u0627\u0644\u062d\u0648\u064a\u0634"},{id:2044,region_name:"El Kharnoubeh - \u0627\u0644\u062e\u0631\u0646\u0648\u0628\u0647"},{id:2045,region_name:"El Khirbe - \u0627\u0644\u062e\u0631\u0628\u0629 "},{id:2046,region_name:"El Khirbe Msalla - \u0627\u0644\u062e\u0631\u0628\u0629 \u0645\u0635\u0644\u0627"},{id:2047,region_name:"EL Khirbe Qleiaat - \u0627\u0644\u062e\u0631\u0628\u0629 \u0642\u0644\u064a\u0639\u0627\u062a"},{id:2048,region_name:"El Khoder - \u0627\u0644\u062e\u0636\u0631 \u0627\u0643\u0631\u0648\u0645"},{id:2049,region_name:"El Kneisse - \u0627\u0644\u0643\u0646\u064a\u0633\u0629"},{id:2050,region_name:"El Kouraniye - \u0627\u0644\u0643\u0648\u0631\u0627\u0646\u064a\u0629"},{id:2051,region_name:"El Krahne - \u0627\u0644\u0643\u0631\u0627\u0647\u0646\u0629"},{id:2052,region_name:"El Kroum - \u0627\u0644\u0643\u0631\u0648\u0645"},{id:2053,region_name:"El Majdal - \u0627\u0644\u0645\u062c\u062f\u0644 \u0627\u0644\u0639\u0645\u0627\u064a\u0631"},{id:2054,region_name:"El Majdel - \u0627\u0644\u0645\u062c\u062f\u0644 \u0639\u0643\u0627\u0631"},{id:2055,region_name:"El Mbar kiye - \u0627\u0644\u0645\u0628\u0627\u0631\u0643\u064a\u0629"},{id:2056,region_name:"El Melkiye - \u0627\u0644\u0645\u0644\u0643\u064a"},{id:2057,region_name:"El Mqaiteaa - \u0627\u0644\u0645\u0642\u064a\u0637\u0639"},{id:2058,region_name:"El Qantara - \u0627\u0644\u0642\u0646\u0637\u0631\u0629"},{id:2059,region_name:"El Qatlabe - \u0627\u0644\u0642\u0628\u064a\u0627\u062a \u0627\u0644\u0642\u0637\u0644\u0628\u0647"},{id:2060,region_name:"El Qlaiaat - \u0627\u0644\u0642\u0644\u064a\u0639\u0627\u062a"},{id:2061,region_name:"El Qorne - \u0627\u0644\u0642\u0631\u0646\u0629"},{id:2062,region_name:"El Qsair - \u0627\u0644\u0642\u0635\u064a\u0631"},{id:2063,region_name:"El Rama - \u0627\u0644\u0631\u0627\u0645\u0647"},{id:2064,region_name:"En Nabi Khaled - \u0627\u0644\u0646\u0628\u064a \u062e\u0627\u0644\u062f"},{id:2065,region_name:"Er Ransiye - \u0627\u0644\u0631\u0627\u0646\u0633\u064a\u0629"},{id:2066,region_name:"Er Rouaime - \u0627\u0644\u0631\u0648\u064a\u0645\u0629"},{id:2067,region_name:"Es Sayeh - \u0627\u0644\u0633\u0627\u064a\u062d"},{id:2068,region_name:"Es Souaisse - \u0627\u0644\u0633\u0648\u064a\u0633\u0629"},{id:2069,region_name:"Ez Zouq - \u0627\u0644\u0630\u0648\u0642"},{id:2070,region_name:"Fard - \u0627\u0644\u0641\u0631\u0636"},{id:2071,region_name:"Fnaideq - \u0641\u0646\u064a\u062f\u0642"},{id:2072,region_name:"Fsiqine et Ain Echma - \u0641\u0633\u0642\u064a\u0646 \u0648 \u0639\u064a\u0646 \u0627\u0634\u0645\u0627"},{id:2073,region_name:"Ghzaile - \u0627\u0644\u063a\u0632\u064a\u0644\u0647"},{id:2074,region_name:"Habchit - \u062d\u0628\u0634\u064a\u062a"},{id:2075,region_name:"Haider - \u062d\u064a\u062f\u0631"},{id:2076,region_name:"Haitla - \u0647\u064a\u062a\u0644\u0627"},{id:2077,region_name:"Haizouq - \u062d\u064a\u0632\u0648\u0642"},{id:2078,region_name:"Halba - \u062d\u0644\u0628\u0627"},{id:2079,region_name:"Haouch - \u062d\u0648\u0634"},{id:2080,region_name:"Haouchab - \u0647\u0648\u0634\u0628"},{id:2081,region_name:"Haret Beit Kessab - \u062d\u0627\u0631\u0629 \u0628\u064a\u062a \u0643\u0633\u0627\u0628"},{id:2082,region_name:"Haret ej Jdide - \u062d\u0627\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629"},{id:2083,region_name:"Haret ej Jdide Mqaiteaa - \u062d\u0627\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0627\u0644\u0645\u0642\u064a\u0637\u0639"},{id:2084,region_name:"Hedd - \u0627\u0644\u0647\u062f"},{id:2085,region_name:"Hikr Janine - \u062d\u0643\u0631 \u062c\u0646\u064a\u0646"},{id:2086,region_name:"Hissa - \u0627\u0644\u062d\u064a\u0635\u0627"},{id:2087,region_name:"Hmaireh Aakkar - \u0627\u0644\u062d\u0645\u064a\u0631\u0629"},{id:2088,region_name:"Hmais - \u062d\u0645\u064a\u0635"},{id:2089,region_name:"Hnaider - \u062d\u0646\u064a\u062f\u0631"},{id:2090,region_name:"Hokr ech Cheikh Taba - \u062d\u0643\u0631 \u0627\u0644\u0634\u064a\u062e \u0637\u0627\u0628\u0627"},{id:2091,region_name:"Hokr ed Dahri - \u062d\u0643\u0631 \u0627\u0644\u0636\u0627\u0647\u0631\u064a"},{id:2092,region_name:"Hokr el Kousse - \u062d\u0643\u0631 \u0627\u0644\u0643\u0648\u0633\u0627"},{id:2093,region_name:"Hokr El Mahmoudiye - \u062d\u0643\u0631 \u0627\u0644\u0645\u062d\u0645\u0648\u062f\u064a\u0629"},{id:2094,region_name:"Hokr Etti - \u062d\u0643\u0631 \u0642\u062a\u0629"},{id:2095,region_name:"Hokr Jouret Srar - \u062d\u0643\u0631 \u062c\u0648\u0631\u0629 \u0633\u0631\u0627\u0631"},{id:2096,region_name:"Hrar - \u062d\u0631\u0627\u0631"},{id:2097,region_name:"idbil - \u0639\u062f\u0628\u0644"},{id:2098,region_name:"Ilat - \u0627\u064a\u0644\u0627\u062a"},{id:2099,region_name:"Janine - \u062c\u0646\u064a\u0646"},{id:2100,region_name:"Jdaidet Ej Joumeh - \u062c\u062f\u064a\u062f\u0629 \u0627\u0644\u062c\u0648\u0645\u0647"},{id:2101,region_name:"Jdeide - \u062c\u062f\u064a\u062f\u0629"},{id:2102,region_name:"Jdeidet El Qaitaa - \u062c\u062f\u064a\u062f\u0629 \u0627\u0644\u0642\u064a\u0637\u0639"},{id:2103,region_name:"Jebrayel - \u062c\u0628\u0631\u0627\u0626\u064a\u0644"},{id:2104,region_name:"Jichet Aali Houssein - \u062c\u064a\u0634\u0629 \u0639\u0644\u064a \u062d\u0633\u064a\u0646"},{id:2105,region_name:"Jouret Srar - \u062c\u0648\u0631\u0629 \u0633\u0631\u0627\u0631"},{id:2106,region_name:"Kafr El Ftouh - \u0643\u0641\u0631 \u0627\u0644\u0641\u062a\u0648\u062d"},{id:2107,region_name:"Kafroun - \u0643\u0641\u0631\u0648\u0646"},{id:2108,region_name:"Kalkha - \u0643\u0644\u062e\u0627"},{id:2109,region_name:"Karm el Aasfour - \u0643\u0631\u0645 \u0639\u0635\u0641\u0648\u0631"},{id:2110,region_name:"Karm Zebdine - \u0643\u0631\u0645 \u0632\u0628\u062f\u064a\u0646"},{id:2111,region_name:"Kawashra - \u0627\u0644\u0643\u0648\u0627\u0634\u0631\u0629"},{id:2112,region_name:"Kfar Harra - \u0643\u0641\u0631\u062d\u0631\u0647"},{id:2113,region_name:"Kfar Melki - \u0643\u0641\u0631\u0645\u0644\u0643\u064a"},{id:2114,region_name:"Kfar Noun - \u0643\u0641\u0631\u0646\u0648\u0646"},{id:2115,region_name:"Kfartoun - \u0643\u0641\u0631\u062a\u0648\u0646"},{id:2116,region_name:"Khalsa - \u062e\u0627\u0644\u0635\u0629"},{id:2117,region_name:"Khane Hayat - \u062e\u0627\u0646 \u0627\u0644\u062d\u064a\u0627\u062a"},{id:2118,region_name:"Khat Petrol - \u062e\u0637 \u0627\u0644\u0628\u062a\u0631\u0648\u0644"},{id:2119,region_name:"Khirbet Char - \u062e\u0631\u0628\u0629 \u0634\u0627\u0631"},{id:2120,region_name:"Khirbet Daoud - \u062e\u0631\u0628\u0629 \u062f\u0627\u0648\u0648\u062f"},{id:2121,region_name:"Khirbet er Roummane - \u062e\u0631\u0628\u0629 \u0627\u0644\u0631\u0645\u0627\u0646"},{id:2122,region_name:"Khirbit Ej Jord - \u062e\u0631\u0628\u0629 \u0627\u0644\u062c\u0631\u062f"},{id:2123,region_name:"Khorab el Haiyat - \u062e\u0631\u0628 \u0627\u0644\u062d\u064a\u0627\u062a"},{id:2124,region_name:"Khraibe Akkar - \u0627\u0644\u062e\u0631\u064a\u0628\u0629"},{id:2125,region_name:"Khreibet ej Jindi - \u062e\u0631\u064a\u0628\u0629 \u0627\u0644\u062c\u0646\u062f\u064a"},{id:2126,region_name:"Knaisse Hnaider - \u0643\u0646\u064a\u0633\u0629 \u0647\u0646\u064a\u062f\u0631"},{id:2127,region_name:"Knisseh - \u0643\u0646\u064a\u0633\u0629"},{id:2128,region_name:"Kouikhat - \u0627\u0644\u0643\u0648\u064a\u062e\u0627\u062a"},{id:2129,region_name:"Kousha - \u0643\u0648\u0634\u0627"},{id:2130,region_name:"Kroum el Arab - \u0643\u0631\u0648\u0645 \u0627\u0644\u0639\u0631\u0628"},{id:2131,region_name:"Machha - \u0645\u0634\u062d\u0629"},{id:2132,region_name:"Machta Hammoud - \u0645\u0634\u062a\u0649 \u062d\u0645\u0648\u062f"},{id:2133,region_name:"Machta Hassan - \u0645\u0634\u062a\u0649 \u062d\u0633\u0646"},{id:2134,region_name:"Mahmoudiye - \u0627\u0644\u0645\u062d\u0645\u0648\u062f\u064a\u0629"},{id:2135,region_name:"Majdla - \u0645\u062c\u062f\u0644\u0627"},{id:2136,region_name:"Mar Lia Hdare - \u0645\u0627\u0631 \u0644\u064a\u0627 \u062d\u062f\u0627\u0631"},{id:2137,region_name:"Mar Sahllita - \u0645\u0627\u0631 \u0634\u0644\u064a\u0637\u0627"},{id:2138,region_name:"Mar Touma - \u0645\u0627\u0631 \u062a\u0648\u0645\u0627"},{id:2139,region_name:"Marlayet Haddara - \u0645\u0627\u0631\u0644\u064a\u0627\u062a \u062d\u062f\u0627\u0631\u0627"},{id:2140,region_name:"Marlayet Melhem - \u0645\u0627\u0631 \u0644\u064a\u0627 \u0645\u0644\u062d\u0645"},{id:2141,region_name:"Martmoura - \u0627\u0644\u0642\u0628\u064a\u0627\u062a \u0645\u0631\u062a\u0645\u0648\u0631\u0647"},{id:2142,region_name:"Mazraat Al Balde - \u0645\u0632\u0631\u0639\u0629 \u0628\u0644\u062f\u0629"},{id:2143,region_name:"Mechaeilha Hakour - \u0645\u0634\u064a\u0644\u062d\u0629 \u0627\u0644\u062d\u0627\u0643\u0648\u0631"},{id:2144,region_name:"Mechmech - \u0645\u0634\u0645\u0634"},{id:2145,region_name:"Meghraq - \u0627\u0644\u0645\u063a\u0631\u0627\u0642"},{id:2146,region_name:"Meghraqa - \u0645\u063a\u0631\u0627\u0642\u0627"},{id:2147,region_name:"Memnaa - \u0645\u0645\u0646\u0639"},{id:2148,region_name:"Mhamra - \u0627\u0644\u0645\u062d\u0645\u0631\u0629"},{id:2149,region_name:"Mhatat Siket el Hadid - \u0645\u062d\u0637\u0629 \u0633\u0643\u0629 \u0627\u0644\u062d\u062f\u064a\u062f"},{id:2150,region_name:"Minyara - \u0645\u0646\u064a\u0627\u0631\u0629"},{id:2151,region_name:"Mouanse - \u0627\u0644\u0645\u0648\u0646\u0633\u0647"},{id:2152,region_name:"Mounjez - \u0645\u0646\u062c\u0632"},{id:2153,region_name:"Mqaible - \u0627\u0644\u0645\u0642\u064a\u0628\u0644\u0629"},{id:2154,region_name:"Mqaitaa - \u0645\u0642\u064a\u0637\u0639 \u0627\u0644\u0633\u0645\u0627\u0643\u0644\u064a"},{id:2155,region_name:"Mrah Aakkar - \u0645\u0631\u0627\u0647 \u0639\u0643\u0627\u0631"},{id:2156,region_name:"Mrah Al Khawkh - \u0645\u0631\u0627\u062d \u0627\u0644\u062e\u0648\u062e"},{id:2157,region_name:"Mrah el Aainouni - \u0645\u0631\u0627\u0647 \u0627\u0644\u0639\u064a\u0646\u0648\u0646\u064a"},{id:2158,region_name:"Mrah el Bsatine - \u0645\u0631\u0627\u062d \u0627\u0644\u0628\u0633\u0627\u062a\u064a\u0646"},{id:2159,region_name:"Mrah Qamar ed Dine - \u0645\u0631\u0627\u062d \u0642\u0645\u0631 \u0627\u0644\u062f\u064a\u0646"},{id:2160,region_name:"Msalla - \u0645\u0635\u0644\u0627"},{id:2161,region_name:"Mzeihmeh - \u0645\u0632\u064a\u062d\u0645\u0629"},{id:2162,region_name:"Nabaa el Ghzaile - \u0646\u0628\u0639 \u0627\u0644\u063a\u0632\u064a\u0644\u0629"},{id:2163,region_name:"Nahr El Bared - \u0646\u0647\u0631 \u0627\u0644\u0628\u0627\u0631\u062f"},{id:2164,region_name:"Nahriye - \u0627\u0644\u0646\u0647\u0631\u064a\u0647 "},{id:2165,region_name:"Nassriye - \u0646\u0627\u0635\u0631\u064a\u0629"},{id:2166,region_name:"Nfaisseh - \u0627\u0644\u0646\u0641\u064a\u0633\u0629"},{id:2167,region_name:"Noura - \u0627\u0644\u0646\u0648\u0631\u0647"},{id:2168,region_name:"Noura el Faouqa et el Tahta - \u0646\u0648\u0631\u0627 \u0627\u0644\u0641\u0648\u0642\u0627 \u0648 \u0627\u0644\u062a\u062d\u062a\u0649"},{id:2169,region_name:"Noura el Tahta - \u0646\u0648\u0631\u0627 \u0627\u0644\u062a\u062d\u062a\u0627"},{id:2170,region_name:"Ouadi Ej jamous - \u0648\u0627\u062f\u064a \u0627\u0644\u062c\u0627\u0645\u0648\u0633"},{id:2171,region_name:"Qaabrine - \u0642\u0639\u0628\u0631\u064a\u0646"},{id:2172,region_name:"Qabaait - \u0642\u0628\u0639\u064a\u062a"},{id:2173,region_name:"Qanbar - \u0627\u0644\u0642\u0646\u0628\u0631"},{id:2174,region_name:"Qarha Akkar - \u0642\u0631\u062d\u0647 \u0639\u0643\u0627\u0631"},{id:2175,region_name:"Qarqaf - \u0627\u0644\u0642\u0631\u0642\u0641"},{id:2176,region_name:"Qbaiyat el Gharbiye - \u0627\u0644\u0642\u0628\u064a\u0627\u062a \u0627\u0644\u063a\u0631\u0628\u064a\u0629"},{id:2177,region_name:"Qbaiyat ez Zouq - \u0627\u0644\u0642\u0628\u064a\u0627\u062a \u0627\u0644\u0630\u0648\u0642"},{id:2178,region_name:"Qboula - \u0642\u0628\u0648\u0644\u0627"},{id:2179,region_name:"Qbour El Bid - \u0642\u0628\u0648\u0631 \u0627\u0644\u0628\u064a\u062f"},{id:2180,region_name:"Qinye - \u0642\u0646\u064a\u0629"},{id:2181,region_name:"Qloud El-Baqieh - \u0642\u0644\u0648\u062f \u0627\u0644\u0628\u0627\u0642\u064a\u0629"},{id:2182,region_name:"Qochloq - \u0642\u0634\u0644\u0642"},{id:2183,region_name:"Qoubaiyat - \u0627\u0644\u0642\u0628\u064a\u0627\u062a"},{id:2184,region_name:"Qoubbet Chamra - \u0642\u0628\u0629 \u0634\u0645\u0631\u0627"},{id:2185,region_name:"Qraiyat - \u0627\u0644\u0642\u0631\u064a\u0627\u062a"},{id:2186,region_name:"Rahbe - \u0631\u062d\u0628\u0629"},{id:2187,region_name:"Rajm Hssein - \u0631\u062c\u0645 \u062d\u0633\u064a\u0646"},{id:2188,region_name:"Rajm Issa - \u0631\u062c\u0645 \u0639\u064a\u0633\u0649"},{id:2189,region_name:"Rajm Khalaf - \u0631\u062c\u0645 \u062e\u0644\u0641"},{id:2190,region_name:"Rihaniye - \u0627\u0644\u0631\u064a\u062d\u0627\u0646\u064a\u0629"},{id:2191,region_name:"Rmah En Nahriyeh - \u0631\u0645\u0627\u062d \u0627\u0644\u0646\u0647\u0631\u064a\u0647"},{id:2192,region_name:"Rmoul - \u0631\u0645\u0648\u0644"},{id:2193,region_name:"Saadine - \u0633\u0639\u062f\u064a\u0646"},{id:2194,region_name:"Sadaqa - \u0635\u062f\u0642\u0629"},{id:2195,region_name:"Sahle - \u0627\u0644\u0633\u0647\u0644\u0647"},{id:2196,region_name:"Saidnaya - \u0627\u0644\u0633\u0646\u062f\u064a\u0627\u0646\u0629"},{id:2197,region_name:"Saissouq - \u0633\u064a\u0633\u0648\u0642"},{id:2198,region_name:"Sammouniye - \u0627\u0644\u0633\u0645\u0648\u0646\u064a\u0647"},{id:2199,region_name:"Saoualha - \u0633\u0627\u0648\u0644\u0647\u0627"},{id:2200,region_name:"Sbagha - \u0635\u0628\u0627\u063a\u0627"},{id:2201,region_name:"Semmaqiye - \u0627\u0644\u0633\u0645\u0627\u0642\u064a\u0629"},{id:2202,region_name:"Semmaqli - \u0633\u0645\u0642\u0627\u0644\u064a"},{id:2203,region_name:"Sfaynet El-Qaitaa - \u0633\u0641\u064a\u0646\u0629 \u0627\u0644\u0642\u064a\u0637\u0639"},{id:2204,region_name:"Sfinet ed Dreib - \u0633\u0641\u064a\u0646\u0629 \u0627\u0644\u062f\u0631\u064a\u0628"},{id:2205,region_name:"Shaqdouf Aakkar - \u0634\u0642\u062f\u0648\u0641 \u0639\u0643\u0627\u0631"},{id:2206,region_name:"Sindianet Zeidane - \u0633\u0646\u062f\u064a\u0627\u0646\u0629 \u0632\u064a\u062f\u0627\u0646"},{id:2207,region_name:"Srar - \u0633\u0631\u0627\u0631"},{id:2208,region_name:"Takrit - \u062a\u0643\u0631\u064a\u062a"},{id:2209,region_name:"Tal Meaayan - \u062a\u0644\u0645\u0639\u064a\u0627\u0646"},{id:2210,region_name:"Tall Aabbas Ech-Charqi - \u062a\u0644 \u0639\u0628\u0627\u0633 \u0627\u0644\u0634\u0631\u0642\u064a"},{id:2211,region_name:"Tall Aabbas el Gharbi - \u062a\u0644\u0639\u0628\u0627\u0633 \u063a\u0631\u0628\u064a"},{id:2212,region_name:"Tall Bire - \u062a\u0644\u0628\u064a\u0631\u0629"},{id:2213,region_name:"Tall Hmayra - \u062a\u0644\u062d\u0645\u064a\u0631\u0629"},{id:2214,region_name:"Tallet el Mjabber - \u062a\u0644\u0629 \u0627\u0644\u0645\u062c\u0627\u0628\u0631"},{id:2215,region_name:"Tallet ez Zefir - \u062a\u0644\u0629 \u0627\u0644\u0632\u0641\u064a\u0631"},{id:2216,region_name:"Tashea - \u062a\u0627\u0634\u0639"},{id:2217,region_name:"Tell Bibi - \u062a\u0644\u0628\u064a\u0628\u0629"},{id:2218,region_name:"Tell Hayat - \u062a\u0644 \u0627\u0644\u062d\u064a\u0627\u062a"},{id:2219,region_name:"Tell Kindi - \u062a\u0644 \u0643\u0646\u062f\u064a"},{id:2220,region_name:"Tell Kiri - \u062a\u0644 \u0643\u064a\u0631\u064a"},{id:2221,region_name:"Tell Sebael - \u062a\u0644 \u0633\u0628\u0639\u0644"},{id:2222,region_name:"Tleil - \u0627\u0644\u062a\u0644\u064a\u0644"},{id:2223,region_name:"Wadi Al Hoor - \u0648\u0627\u062f\u064a \u0627\u0644\u062d\u0648\u0631"},{id:2224,region_name:"Wadi Khaled - \u0648\u0627\u062f\u064a \u062e\u0627\u0644\u062f"},{id:2225,region_name:"Zouaitini Akkar - \u0627\u0644\u0632\u0648\u064a\u062a\u064a\u0646\u0629 \u0639\u0643\u0627\u0631"},{id:2226,region_name:"Zouarib - \u0627\u0644\u0632\u0648\u0627\u0631\u064a\u0628"},{id:2227,region_name:"Zouk Haddara - \u0630\u0648\u0642 \u062d\u062f\u0627\u0631\u0629"},{id:2228,region_name:"Zouq el Hassineh - \u0630\u0648\u0642 \u0627\u0644\u062d\u0635\u064a\u0646\u0629"},{id:2229,region_name:"Zouq El Mqachrine - \u0630\u0648\u0642 \u0627\u0644\u0645\u0642\u0634\u0631\u064a\u0646"},{id:2230,region_name:"Zouq El-Hbalsa - \u0630\u0648\u0642 \u0627\u0644\u062d\u0628\u0627\u0644\u0635\u0629"}]}]},{id:2,GovernorateDescription:"Baalbeck-Hermel - \u0628\u0639\u0644\u0628\u0643 - \u0627\u0644\u0647\u0631\u0645\u0644",Districts:[{id:2,DistrictDescription:"Baalbek - \u0628\u0639\u0644\u0628\u0643",Cities:[{id:2231,region_name:"Aadous - \u0639\u062f\u0651\u0648\u0633"},{id:2232,region_name:"Aallaq - \u0639\u0644\u0627\u0642"},{id:2233,region_name:"Aamchki - \u0639\u0645\u0634\u0643\u064a"},{id:2234,region_name:"Aarsal - \u0639\u0631\u0633\u0627\u0644"},{id:2235,region_name:"Aayoun Orghoush - \u0639\u064a\u0648\u0646 \u0627\u0631\u063a\u0634"},{id:2236,region_name:"Ain Bourday - \u0639\u064a\u0646 \u0628\u0648\u0631\u062f\u0627\u064a"},{id:2237,region_name:"Ain Ej Jaouze - \u0639\u064a\u0646 \u0627\u0644\u062c\u0648\u0632\u0629"},{id:2238,region_name:"Ain El Bnaiye - \u0639\u064a\u0646 \u0627\u0644\u0628\u0646\u064a\u0629"},{id:2239,region_name:"Ain es Saouda - \u0639\u064a\u0646 \u0627\u0644\u0633\u0648\u062f\u0627"},{id:2240,region_name:"Ainata - \u0639\u064a\u0646\u0627\u062a\u0627"},{id:2241,region_name:"Al Ansar Baalbek - \u0627\u0644\u0623\u0646\u0635\u0627\u0631 \u0628\u0639\u0644\u0628\u0643"},{id:2242,region_name:"Baalbek - \u0628\u0639\u0644\u0628\u0643"},{id:2243,region_name:"Baayoun - \u0642\u0627\u0639 \u0628\u0639\u064a\u0648\u0646"},{id:2244,region_name:"Barqa - \u0628\u0631\u0642\u0627"},{id:2245,region_name:"Bechouat - \u0628\u0634\u0648\u0627\u062a"},{id:2246,region_name:"Bednayel - \u0628\u062f\u0646\u0627\u064a\u0644"},{id:2247,region_name:"Beit Chama - \u0628\u064a\u062a \u0634\u0627\u0645\u0627"},{id:2248,region_name:"Beit es Satiti - \u0628\u064a\u062a \u0627\u0644\u0633\u062a\u064a\u062a\u0647"},{id:2249,region_name:"Beit Habchi - \u0628\u064a\u062a \u062d\u0628\u0634\u064a"},{id:2250,region_name:"Beit Mchik - \u0645\u0632\u0631\u0639\u0629 \u0628\u064a\u062a \u0645\u0634\u064a\u0643"},{id:2251,region_name:"Bejjaje - \u0628\u062c\u0627\u062c\u0629"},{id:2252,region_name:"Betdaai - \u0628\u062a\u062f\u0639\u064a"},{id:2253,region_name:"Blaiqa - \u0628\u0644\u064a\u0642\u0629"},{id:2254,region_name:"Boudai - \u0628\u0648\u062f\u0627\u064a"},{id:2255,region_name:"Britel - \u0628\u0631\u064a\u062a\u0627\u0644"},{id:2256,region_name:"Bsayleh al Fawka - \u0628\u0635\u064a\u0644\u0629 \u0627\u0644\u0641\u0648\u0642\u0627"},{id:2257,region_name:"Bsayleh al Tahta - \u0628\u0635\u064a\u0644\u0629 \u0627\u0644\u062a\u062d\u062a\u0627"},{id:2258,region_name:"Chaat - \u0634\u0639\u062a"},{id:2259,region_name:"Chlifa - \u0634\u0644\u064a\u0641\u0627"},{id:2260,region_name:"Chmistar - \u0634\u0645\u0633\u0637\u0627\u0631"},{id:2261,region_name:"Daouret en Naml - \u062f\u0648\u0631\u0629 \u0627\u0644\u0646\u0645\u0644"},{id:2262,region_name:"Dar el Ouassaa - \u062f\u0627\u0631 \u0627\u0644\u0648\u0627\u0633\u0639\u0629"},{id:2263,region_name:"Deir El Ahmar - \u062f\u064a\u0631 \u0627\u0644\u0627\u062d\u0645\u0631"},{id:2264,region_name:"Deir Mar Maroun Baalbek - \u062f\u064a\u0631 \u0645\u0627\u0631 \u0645\u0627\u0631\u0648\u0646 \u0628\u0639\u0644\u0628\u0643"},{id:2265,region_name:"Douris - \u062f\u0648\u0631\u064a\u0633"},{id:2266,region_name:"El Aaiara - \u0639\u064a\u0627\u0631\u0629"},{id:2267,region_name:"El Ain - \u0627\u0644\u0639\u064a\u0646"},{id:2268,region_name:"El Barake - \u0627\u0644\u0628\u0631\u0643\u0629"},{id:2269,region_name:"El Faqrat - \u0641\u0642\u0631\u0627\u062a"},{id:2270,region_name:"El Laouze - \u0627\u0644\u0644\u0648\u0632\u0629"},{id:2271,region_name:"El Maalqa - \u0645\u0639\u0644\u0642\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629"},{id:2272,region_name:"El Marmagha - \u0645\u0631\u0645\u0627\u063a\u0627"},{id:2273,region_name:"El Qaa - \u0627\u0644\u0642\u0627\u0639"},{id:2274,region_name:"El Qerrami - \u0642\u0631\u0627\u0645\u064a"},{id:2275,region_name:"En Nouqra - \u0646\u0642\u0631\u0629"},{id:2276,region_name:"Fakehe - \u0641\u0627\u0643\u0647\u0629"},{id:2277,region_name:"Flaoui - \u0641\u0644\u0627\u0648\u064a"},{id:2278,region_name:"Freij - \u0641\u0631\u064a\u062c"},{id:2279,region_name:"Hadet Hermel - \u062d\u062f\u062a \u0627\u0644\u0647\u0631\u0645\u0644"},{id:2280,region_name:"Hai el Mathane - \u062d\u064a \u0627\u0644\u0645\u0637\u062d\u0646\u0629"},{id:2281,region_name:"Halbata - \u062d\u0644\u0628\u0627\u062a\u0627"},{id:2282,region_name:"Ham - \u062d\u0627\u0645"},{id:2283,region_name:"Haouch Barada - \u062d\u0648\u0634 \u0628\u0631\u062f\u0649"},{id:2284,region_name:"Haouch Ed Dahab - \u062d\u0648\u0634 \u0627\u0644\u062f\u0647\u0628"},{id:2285,region_name:"Haouch En Nabi - \u062d\u0648\u0634 \u0627\u0644\u0646\u0628\u064a"},{id:2286,region_name:"Haouch Snaid - \u062d\u0648\u0634 \u0633\u0646\u064a\u062f"},{id:2287,region_name:"Haouch Tall Safiye - \u062d\u0648\u0634 \u062a\u0644 \u0635\u0641\u064a\u0629"},{id:2288,region_name:"Haouerte - \u062d\u0648\u0627\u0631\u062a\u0647"},{id:2289,region_name:"Haour Taala - \u062d\u0648\u0631 \u062a\u0639\u0644\u0627"},{id:2290,region_name:"Harabta - \u062d\u0631\u0628\u062a\u0627"},{id:2291,region_name:"Harfouch - \u062d\u0631\u0641\u0648\u0634"},{id:2292,region_name:"Hfayer - \u062d\u0641\u0627\u064a\u0631"},{id:2293,region_name:"Hizzine - \u062d\u0632\u064a\u0646"},{id:2294,region_name:"Hosn ech Chadoura - \u062d\u0635\u0646 \u0627\u0644\u0634\u0627\u062f\u0648\u0631\u0627 "},{id:2295,region_name:"Houch Er Rafqa - \u062d\u0648\u0634 \u0627\u0644\u0631\u0627\u0641\u0642\u0629"},{id:2296,region_name:"Iaat - \u0627\u064a\u0639\u0627\u062a"},{id:2297,region_name:"Jabaa - \u062c\u0628\u0639\u0627"},{id:2298,region_name:"Jabal Ech Chaaibe - \u062c\u0628\u0644 \u0627\u0644\u0634\u0639\u064a\u0628\u0629"},{id:2299,region_name:"Jabboule - \u062c\u0628\u0648\u0644\u0629"},{id:2300,region_name:"Janta - \u062c\u0646\u062a\u0627"},{id:2301,region_name:"Jdaide Fekehe - \u062c\u062f\u064a\u062f\u0629 \u0627\u0644\u0641\u0627\u0643\u0647\u0629"},{id:2302,region_name:"Joubaniyeh - \u062c\u0648\u0628\u0627\u0646\u064a\u0629"},{id:2303,region_name:"Kfar Dabach - \u0643\u0641\u0631 \u062f\u0628\u0634"},{id:2304,region_name:"Kfar Dane - \u0643\u0641\u0631 \u062f\u0627\u0646"},{id:2305,region_name:"Kharayeb - \u0627\u0644\u062e\u0631\u0627\u0626\u0628"},{id:2306,region_name:"Khermateh - \u062e\u0648\u0631\u0645\u0627\u062a\u0627"},{id:2307,region_name:"Khirbet Daoud Baalbek - \u062e\u0631\u0628\u0629 \u062f\u0627\u0648\u0648\u062f \u0628\u0639\u0644\u0628\u0643"},{id:2308,region_name:"Khirbet et Tine - \u062e\u0631\u0628\u0629 \u0627\u0644\u062a\u064a\u0646\u0647"},{id:2309,region_name:"Khirbet Haouerte - \u062e\u0631\u0628\u0629 \u062d\u0648\u0627\u0631\u062a\u0647"},{id:2310,region_name:"Khirbet Younine - \u062e\u0631\u0628\u0629 \u064a\u0648\u0646\u064a\u0646"},{id:2311,region_name:"Khodor - \u062e\u0636\u0631 "},{id:2312,region_name:"Khraibe - \u062e\u0631\u064a\u0628\u0629 "},{id:2313,region_name:"Knaisse - \u0643\u0646\u064a\u0633\u0629 "},{id:2314,region_name:"Laboue - \u0644\u0628\u0648\u0629"},{id:2315,region_name:"Maarboun - \u0645\u0639\u0631\u0628\u0648\u0646"},{id:2316,region_name:"Mahatta - \u0627\u0644\u0645\u062d\u0637\u0629"},{id:2317,region_name:"Majdaloun - \u0645\u062c\u062f\u0644\u0648\u0646"},{id:2318,region_name:"Maql el Bouadte - \u0645\u0642\u0644 \u0627\u0644\u0628\u0648\u0627\u062f\u062a\u064a"},{id:2319,region_name:"Maqne - \u0645\u0642\u0646\u0629"},{id:2320,region_name:"Masnaa - \u0627\u0644\u0645\u0635\u0646\u0639"},{id:2321,region_name:"Masnaa es Zohr - \u0645\u0635\u0646\u0639 \u0627\u0644\u0632\u0647\u0631"},{id:2322,region_name:"Mathanet Mousrayeh - \u0645\u0637\u062d\u0646\u0629 \u0645\u0635\u0631\u0627\u064a\u0629"},{id:2323,region_name:"Mazraat al Ramassy - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0631\u0645\u0627\u0633\u0627"},{id:2324,region_name:"Mazraat Al Souaydane - \u0645\u0632\u0631\u0639\u0629 \u0622\u0644 \u0633\u0648\u064a\u062f\u0627\u0646 "},{id:2325,region_name:"Mazraat al Takch - \u0645\u0632\u0631\u0639\u0629 \u0628\u064a\u062a \u0637\u0642\u0634"},{id:2326,region_name:"Mazraat Beit el Ghoussain - \u0645\u0632\u0631\u0639\u0629 \u0628\u064a\u062a \u0627\u0644\u063a\u0635\u064a\u0646"},{id:2327,region_name:"Mazraat Beit Slaibi - \u0645\u0632\u0631\u0639\u0629 \u0628\u064a\u062a \u0635\u0644\u064a\u0628\u064a"},{id:2328,region_name:"Mazraat Ed Dallil - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0636\u0644\u064a\u0644"},{id:2329,region_name:"Mazraat ed Dhour - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0636\u0647\u0648\u0631"},{id:2330,region_name:"Mazraat Es Saiyed - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0633\u064a\u062f"},{id:2331,region_name:"Mazraat Matar - \u0645\u0632\u0631\u0639\u0629 \u0645\u0637\u0631"},{id:2332,region_name:"Mazraat Oumm Aali - \u0645\u0632\u0631\u0639\u0629 \u0627\u0645 \u0639\u0644\u064a"},{id:2333,region_name:"Mchaitiye - \u0645\u0634\u064a\u062a\u064a\u0629"},{id:2334,region_name:"Mehairfe - \u0645\u062d\u064a\u0631\u0641\u0629"},{id:2335,region_name:"Mhattat Ras Baalbeck - \u0627\u0644\u0645\u062d\u0637\u0629 \u0631\u0627\u0633 \u0628\u0639\u0644\u0628\u0643"},{id:2336,region_name:"Mkaybel Al Kala' - \u0645\u0642\u064a\u0627\u0644 \u0627\u0644\u0642\u0644\u0639\u0629"},{id:2337,region_name:"Moqraq - \u0627\u0644\u0645\u0642\u0631\u0642"},{id:2338,region_name:"Mrah Beit Aassaf - \u0645\u0631\u0627\u062d \u0628\u064a\u062a \u0639\u0633\u0627\u0641"},{id:2339,region_name:"Mrah Beit el Qazah - \u0645\u0631\u0627\u062d \u0628\u064a\u062a \u0627\u0644\u0642\u0632\u062d"},{id:2340,region_name:"Mrah Beit Slim - \u0645\u0631\u0627\u062d \u0628\u064a\u062a \u0633\u0644\u064a\u0645"},{id:2341,region_name:"Mrah Bou Brahim - \u0645\u0631\u0627\u062d \u0628\u0648 \u0628\u0631\u0627\u0647\u064a\u0645"},{id:2342,region_name:"Mrah Bou Chahine - \u0645\u0631\u0627\u062d \u0628\u0648 \u0634\u0627\u0647\u064a\u0646"},{id:2343,region_name:"Mrah ech Chmis - \u0645\u0631\u0627\u062d \u0627\u0644\u0634\u0645\u064a\u0633"},{id:2344,region_name:"Mrah ech Choaab - \u0645\u0631\u0627\u062d \u0627\u0644\u0634\u0639\u0627\u0628"},{id:2345,region_name:"Mrah ej Jamal - \u0645\u0631\u0627\u062d "},{id:2346,region_name:"Mrah ej Jeddaoui - \u0645\u0631\u0627\u062d \u0627\u0644\u062c\u062f\u0627\u0648\u064a"},{id:2347,region_name:"Mrah El Aabed - \u0645\u0631\u0627\u0647 \u0627\u0644\u0639\u0628\u062f"},{id:2348,region_name:"Mrah El Aaouja - \u0645\u0631\u0627\u062d \u0627\u0644\u0639\u0648\u062c\u0627 "},{id:2349,region_name:"Mrah El Aassi - \u0645\u0631\u0627\u062d \u0627\u0644\u0639\u0627\u0635\u064a"},{id:2350,region_name:"Mrah el Ahmar - \u0645\u0631\u0627\u062d \u0627\u0644\u0627\u062d\u0645\u0631"},{id:2351,region_name:"Mrah el Blata - \u0645\u0631\u0627\u062d \u0627\u0644\u0628\u0644\u0627\u0637\u0629"},{id:2352,region_name:"Mrah EL Harfouch - \u0645\u0631\u0627\u062d \u0627\u0644\u062d\u0631\u0641\u0648\u0634"},{id:2353,region_name:"Mrah es Sirghane - \u0645\u0631\u0627\u062d \u0627\u0644\u0633\u0631\u063a\u0627\u0646\u0647"},{id:2354,region_name:"Mrah Haissoun - \u0645\u0631\u0627\u062d \u062d\u064a\u0635\u0648\u0646"},{id:2355,region_name:"Mrah Kloude - \u0645\u0631\u0627\u062d \u0627\u0644\u0642\u0644\u0648\u062f"},{id:2356,region_name:"Mrah Najib - \u0645\u0631\u0627\u062d \u0646\u062c\u064a\u0628"},{id:2357,region_name:"Mrah Rafi - \u0645\u0631\u0627\u062d \u0631\u0627\u0641\u064a"},{id:2358,region_name:"Mrah Semaan - \u0645\u0631\u0627\u062d \u0633\u0645\u0639\u0627\u0646"},{id:2359,region_name:"Mrah Soukkar - \u0645\u0631\u0627\u062d \u0633\u0643\u0631"},{id:2360,region_name:"Nabha - \u0646\u0628\u062d\u0627"},{id:2361,region_name:"Nabha Al Mohfara - \u0646\u0628\u062d\u0627 \u0627\u0644\u0645\u062d\u0641\u0627\u0631\u0629"},{id:2362,region_name:"Nabi Chit - \u0646\u0628\u064a \u0634\u064a\u062a"},{id:2363,region_name:"Nabi Osmane - \u0646\u0628\u064a \u0639\u062b\u0645\u0627\u0646"},{id:2364,region_name:"Nabi Rachade - \u0646\u0628\u064a \u0631\u0634\u0627\u062f\u0647"},{id:2365,region_name:"Nabi Sbat - \u0627\u0644\u0646\u0628\u064a \u0633\u0628\u0627\u0637"},{id:2366,region_name:"Nahle - \u0646\u062d\u0644\u0647 "},{id:2367,region_name:"Qaa Jouar Maqiyeh - \u0642\u0627\u0639 \u062c\u0648\u0627\u0631 \u0645\u0643\u064a\u0629"},{id:2368,region_name:"Qaa Ouadi el Khanzir - \u0642\u0627\u0639 \u0648\u0627\u062f\u064a \u0627\u0644\u062e\u0646\u0632\u064a\u0631"},{id:2369,region_name:"Qalaat Bakdach - \u0642\u0644\u0639\u0629 \u0628\u0643\u062f\u0627\u0634"},{id:2370,region_name:"Qalb es Sabaa - \u0645\u0632\u0631\u0639\u0629 \u0642\u0644\u062f \u0627\u0644\u0633\u0628\u0639"},{id:2371,region_name:"Qarha - \u0642\u0631\u062d\u0627"},{id:2372,region_name:"Qiddam - \u0627\u0644\u0642\u062f\u0627\u0645"},{id:2373,region_name:"Qlaile - \u0642\u0644\u064a\u0644\u0629 "},{id:2374,region_name:"Qsarnaba - \u0642\u0635\u0631\u0646\u0627\u0628\u0627"},{id:2375,region_name:"Ram - \u0627\u0644\u0631\u0627\u0645"},{id:2376,region_name:"Ras al Assy - \u0631\u0627\u0633 \u0627\u0644\u0639\u0627\u0635\u064a "},{id:2377,region_name:"Ras Baalbek - \u0631\u0627\u0633 \u0628\u0639\u0644\u0628\u0643"},{id:2378,region_name:"Ras Baalbek ech Charqi - \u0631\u0627\u0633 \u0628\u0639\u0644\u0628\u0643 \u0627\u0644\u0634\u0631\u0642\u064a"},{id:2379,region_name:"Ras Baalbek es Sahel - \u0631\u0627\u0633 \u0628\u0639\u0644\u0628\u0643 \u0627\u0644\u0633\u0647\u0644"},{id:2380,region_name:"Rasm El Hadet - \u0631\u0633\u0645 \u0627\u0644\u062d\u062f\u062b"},{id:2381,region_name:"Riha - \u0631\u064a\u062d\u0627"},{id:2382,region_name:"Saaide - \u0633\u0639\u064a\u062f\u0629"},{id:2383,region_name:"Safra - \u0635\u0641\u0631\u0627"},{id:2384,region_name:"Saidet ed Dalil - \u0633\u064a\u062f\u0629 \u0627\u0644\u0636\u0644\u064a\u0644"},{id:2385,region_name:"Saraain el Faouqa - \u0633\u0631\u0639\u064a\u0646 \u0627\u0644\u0641\u0648\u0642\u0627"},{id:2386,region_name:"Saraain et Tahta - \u0633\u0631\u0639\u064a\u0646 \u0627\u0644\u062a\u062d\u062a\u0627"},{id:2387,region_name:"Sbouba - \u0635\u0628\u0648\u0628\u0627"},{id:2388,region_name:"Sifri - \u0633\u0641\u0631\u064a"},{id:2389,region_name:"Siret Hanna - \u0633\u064a\u0631\u0629 \u0647\u0646\u0627"},{id:2390,region_name:"Slouqi - \u0633\u0644\u0648\u0642\u064a"},{id:2391,region_name:"Taibe Baalbek - \u0637\u064a\u0628\u0629 \u0628\u0639\u0644\u0628\u0643"},{id:2392,region_name:"Talia - \u0637\u0644\u064a\u0627"},{id:2393,region_name:"Tall Sougha - \u062a\u0644 \u0633\u063a\u0649"},{id:2394,region_name:"Tallet ed Deir - \u062a\u0644\u0629 \u0627\u0644\u062f\u064a\u0631"},{id:2395,region_name:"Tammine et Tahta - \u062a\u0645\u0646\u064a\u0646 \u0627\u0644\u062a\u062d\u062a\u0627"},{id:2396,region_name:"Tamnine El Faouqa - \u062a\u0645\u0646\u064a\u0646 \u0627\u0644\u0641\u0648\u0642\u0627"},{id:2397,region_name:"Taraiya - \u0637\u0627\u0631\u064a\u0627"},{id:2398,region_name:"Tfail - \u0637\u0641\u064a\u0644"},{id:2399,region_name:"Toufiqiye - \u0627\u0644\u062a\u0648\u0641\u064a\u0642\u064a\u0629"},{id:2400,region_name:"Wadi el Assouad - \u0648\u0627\u062f\u064a \u0627\u0644\u0627\u0633\u0648\u062f"},{id:2401,region_name:"Wadi el Oss - \u0648\u0627\u062f\u064a \u0627\u0644\u0642\u0635\u0635"},{id:2402,region_name:"Yahfoufa - \u064a\u062d\u0641\u0648\u0641\u0627"},{id:2403,region_name:"Yammoune - \u064a\u0645\u0648\u0646\u0629"},{id:2404,region_name:"Younine - \u064a\u0648\u0646\u064a\u0646"},{id:2405,region_name:"Zabboud - \u0632\u0628\u0648\u062f"},{id:2406,region_name:"Zarayeb - \u0632\u0631\u0627\u064a\u0628"},{id:2407,region_name:"Zarayeb Choukr - \u0632\u0631\u0627\u064a\u0628 \u0634\u0643\u0631"},{id:2408,region_name:"Zeribet es Sabha - \u0632\u0631\u064a\u0628\u0629 \u0627\u0644\u0635\u0628\u062d\u0627"},{id:2409,region_name:"Zrazir - \u0632\u0631\u0627\u0632\u064a\u0631"}]},{id:3,DistrictDescription:"El Hermel - \xa0\u0627\u0644\u0647\u0631\u0645\u0644",Cities:[{id:2410,region_name:"Aaqabe - \u0639\u0642\u0628\u0629"},{id:2411,region_name:"Ain al Jadideh - \u0639\u064a\u0646 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0627\u0644\u0647\u0631\u0645\u0644"},{id:2412,region_name:"Ain el bayda - \u0639\u064a\u0646 \u0627\u0644\u0628\u064a\u0636\u0627\u0621"},{id:2413,region_name:"Bdita - \u0628\u062f\u064a\u062a\u0627"},{id:2414,region_name:"Beit Aallam - \u0628\u064a\u062a \u0639\u0644\u0627\u0645"},{id:2415,region_name:"Beit Aallaou - \u0628\u064a\u062a \u0639\u0644\u0627\u0651\u0648"},{id:2416,region_name:"Beit es Semmaqa - \u0628\u064a\u062a \u0627\u0644\u0633\u0645\u0627\u0642\u0629"},{id:2417,region_name:"Beit Hira - \u0628\u064a\u062a \u062d\u064a\u0631\u0627"},{id:2418,region_name:"Berghoch - \u0628\u0631\u063a\u0634"},{id:2419,region_name:"Biyout Aawad - \u0628\u064a\u0648\u062a \u0639\u0648\u0627\u062f"},{id:2420,region_name:"Biyout el Ain - \u0628\u064a\u0648\u062a \u0627\u0644\u0639\u064a\u0646"},{id:2421,region_name:"Biyout el Hajj Hassan - \u0628\u064a\u0648\u062a \u0627\u0644\u062d\u0627\u062c \u062d\u0633\u0646"},{id:2422,region_name:"Biyout er Rouais - \u0628\u064a\u0648\u062a \u0627\u0644\u0631\u0648\u064a\u0633"},{id:2423,region_name:"Biyout es Souh - \u0628\u064a\u0648\u062a \u0627\u0644\u0633\u0648\u062d"},{id:2424,region_name:"Bou Sawaya - \u0628\u0648 \u0635\u0648\u0627\u064a\u0627"},{id:2425,region_name:"Bouaida - \u0628\u0648\u064a\u0636\u0629 "},{id:2426,region_name:"Boustane - \u0628\u0633\u062a\u0627\u0646 "},{id:2427,region_name:"Breij - \u0627\u0644\u0628\u0631\u064a\u062c"},{id:2428,region_name:"Brissa - \u0628\u0631\u064a\u0635\u0627"},{id:2429,region_name:"Charbine - \u0634\u0631\u0628\u064a\u0646"},{id:2430,region_name:"Chouaghir - \u0634\u0648\u0627\u063a\u064a\u0631"},{id:2431,region_name:"Ed Daoura el hermel - \u0627\u0644\u062f\u0648\u0631\u0629 \u0627\u0644\u0647\u0631\u0645\u0644"},{id:2432,region_name:"El Baaoul - \u0627\u0644\u0628\u0639\u0648\u0644"},{id:2433,region_name:"El Mdawesh - \u0645\u062f\u0627\u0648\u0634"},{id:2434,region_name:"El Ouaqf - \u0627\u0644\u0648\u0642\u0641"},{id:2435,region_name:"El Qraita - \u0642\u0631\u064a\u062a\u064a"},{id:2436,region_name:"Es Souaidiye - \u0633\u0648\u064a\u062f\u064a\u0629"},{id:2437,region_name:"Faara - \u0641\u0639\u0631\u0627"},{id:2438,region_name:"Fissane - \u0641\u064a\u0633\u0627\u0646"},{id:2439,region_name:"Haouch Es Saiyad Aali - \u062d\u0648\u0634 \u0627\u0644\u0633\u064a\u062f \u0639\u0644\u064a"},{id:2440,region_name:"Haouchariye - \u0647\u0648\u0634\u0631\u064a\u0629"},{id:2441,region_name:"Haret El Maasser - \u062d\u0627\u0631\u0629 \u0627\u0644\u0645\u0639\u0627\u0635\u0631"},{id:2442,region_name:"Hariqa el hermel - \u062d\u0631\u064a\u0642\u0629 \u0627\u0644\u0647\u0631\u0645\u0644"},{id:2443,region_name:"Hawch Beit Ismail - \u062d\u0648\u0634 \u0628\u064a\u062a \u0627\u0633\u0645\u0627\u0639\u064a\u0644"},{id:2444,region_name:"Hermel - \u0647\u0631\u0645\u0644"},{id:2445,region_name:"Hermel Jbab - \u0647\u0631\u0645\u0644 \u062c\u0628\u0627\u0628"},{id:2446,region_name:"Hmaire - \u062d\u0645\u064a\u0631\u0629"},{id:2447,region_name:"Jawz - \u062c\u0648\u0632"},{id:2448,region_name:"Jisr el Aassi - \u062c\u0633\u0631 \u0627\u0644\u0639\u0627\u0635\u064a"},{id:2449,region_name:"Jouar El Hachich - \u062c\u0648\u0627\u0631 \u0627\u0644\u062d\u0634\u064a\u0634"},{id:2450,region_name:"Jouret el Mzar - \u062c\u0648\u0631\u0629 \u0627\u0644\u0645\u0632\u0627\u0631"},{id:2451,region_name:"Kouakh - \u0643\u0648\u0627\u062e"},{id:2452,region_name:"Maaisr - \u0645\u0639\u064a\u0635\u0631\u0629"},{id:2453,region_name:"Mansoureh - \u0645\u0646\u0635\u0648\u0631\u0629"},{id:2454,region_name:"Marj Hine - \u0645\u0631\u062c\u062d\u064a\u0646"},{id:2455,region_name:"Mazraat Beit el Fqih - \u0645\u0632\u0631\u0639\u0629 \u0628\u064a\u062a \u0627\u0644\u0641\u0642\u064a\u0647"},{id:2456,region_name:"Mazraat Beit Et Tachm - \u0645\u0632\u0631\u0639\u0629 \u0628\u064a\u062a \u0627\u0644\u0637\u0634\u0645"},{id:2457,region_name:"Mazraat Et Talle - \u0645\u0631\u0627\u062d \u0627\u0644\u062a\u0644\u0629"},{id:2458,region_name:"Mnaira - \u0645\u0646\u064a\u0631\u0629"},{id:2459,region_name:"Mrah Aabbas - \u0645\u0631\u0627\u062d \u0639\u0628\u0627\u0633"},{id:2460,region_name:"Mrah Beit Aalaoui - \u0645\u0631\u0627\u062d \u0628\u064a\u062a \u0639\u0644\u0627\u0648"},{id:2461,region_name:"Mrah Bou Kamar al Dine - \u0645\u0631\u0627\u062d \u0628\u0648 \u0642\u0645\u0631 \u0627\u0644\u062f\u064a\u0646"},{id:2462,region_name:"Mrah Ech Chaab - \u0645\u0631\u0627\u062d \u0627\u0644\u0634\u0639\u0627\u0628 \u0627\u0644\u0647\u0631\u0645\u0644"},{id:2463,region_name:"Mrah ech Charqi - \u0645\u0631\u0627\u062d \u0627\u0644\u0634\u0631\u0642\u064a"},{id:2464,region_name:"Mrah ech Chnain - \u0645\u0631\u0627\u062d \u0634\u0646\u064a\u0646"},{id:2465,region_name:"Mrah el Aaqabe - \u0645\u0631\u0627\u062d \u0627\u0644\u0639\u0642\u0628\u0629"},{id:2466,region_name:"Mrah El Ain - \u0645\u0631\u0627\u062d \u0627\u0644\u0639\u064a\u0646"},{id:2467,region_name:"Mrah el Arab - \u0645\u0631\u0627\u062d \u0627\u0644\u0639\u0631\u0628"},{id:2468,region_name:"Mrah El Dalil - \u0645\u0631\u0627\u062d \u0627\u0644\u062f\u0644\u064a\u0644"},{id:2469,region_name:"Mrah el Gharbi - \u0645\u0631\u0627\u062d \u0627\u0644\u063a\u0631\u0628\u064a"},{id:2470,region_name:"Mrah el Mahlise - \u0645\u0631\u0627\u062d \u0627\u0644\u0645\u062d\u0644\u064a\u0633\u0629"},{id:2471,region_name:"Mrah El Mouchref - \u0645\u0631\u0627\u062d \u0627\u0644\u0645\u0634\u0631\u0641"},{id:2472,region_name:"Mrah El Mougher - \u0645\u0631\u0627\u062d \u0627\u0644\u0645\u063a\u0631"},{id:2473,region_name:"Mrah el Qorne - \u0645\u0631\u0627\u062d \u0627\u0644\u0642\u0631\u0646\u0629"},{id:2474,region_name:"Mrah el Qraita - \u0645\u0631\u0627\u062d \u0627\u0644\u0642\u0631\u064a\u062a\u0627"},{id:2475,region_name:"Mrah es Siyaid - \u0645\u0631\u0627\u062d \u0627\u0644\u0633\u064a\u0627\u062f"},{id:2476,region_name:"Mrah esh Shmis - \u0645\u0631\u0627\u062d \u0627\u0644\u0634\u0645\u064a\u0633 \u0627\u0644\u0647\u0631\u0645\u0644"},{id:2477,region_name:"Mrah Ez Zakbe - \u0645\u0631\u0627\u062d \u0627\u0644\u0632\u0643\u0628\u0629"},{id:2478,region_name:"Mrah Houssain Taane - \u0645\u0631\u0627\u062d \u062d\u0633\u064a\u0646 \u0637\u0639\u0627\u0646"},{id:2479,region_name:"Mrah Naaouas - \u0645\u0631\u0627\u062d \u0627\u0644\u0646\u0648\u0627\u0633"},{id:2480,region_name:"Mrah Sejoud - \u0645\u0631\u0627\u062d \u0633\u062c\u062f"},{id:2481,region_name:"Mrah Yassine - \u0645\u0631\u0627\u062d \u064a\u0627\u0633\u064a\u0646"},{id:2482,region_name:"Nasriye - \u0646\u0627\u0635\u0631\u064a\u0629 \u0627\u0644\u0647\u0631\u0645\u0644"},{id:2483,region_name:"Ouadi en Nayra - \u0648\u0627\u062f\u064a \u0627\u0644\u0646\u064a\u0631\u0629"},{id:2484,region_name:"Ouadi Er Ratle - \u0648\u0627\u062f\u064a \u0627\u0644\u0631\u0637\u0644"},{id:2485,region_name:"Ouadi et Tourkmane - \u0648\u0627\u062f\u064a \u0627\u0644\u062a\u0631\u0643\u0645\u0627\u0646"},{id:2486,region_name:"Qanafez - \u0642\u0646\u0627\u0641\u0630"},{id:2487,region_name:"Qasr - \u0627\u0644\u0642\u0635\u0631"},{id:2488,region_name:"Quadi el Karm - \u0648\u0627\u062f\u064a \u0627\u0644\u0643\u0631\u0645"},{id:2489,region_name:"Ras Baalbek el Gharbi - \u0631\u0627\u0633 \u0628\u0639\u0644\u0628\u0643 \u0627\u0644\u063a\u0631\u0628\u064a"},{id:2490,region_name:"Ras Baalbek Ouadi Faara - \u0631\u0627\u0633 \u0628\u0639\u0644\u0628\u0643 \u0648\u0627\u062f\u064a \u0641\u0639\u0631\u0627"},{id:2491,region_name:"Salhat El Ma - \u0633\u0647\u0644\u0627\u062a \u0627\u0644\u0645\u064a"},{id:2492,region_name:"Sharbine el Faouqa - \u0634\u0631\u0628\u064a\u0646 \u0627\u0644\u0641\u0648\u0642\u0627"},{id:2493,region_name:"Souaisse - \u0627\u0644\u0633\u0648\u064a\u0633\u0629 "},{id:2494,region_name:"Tall El far - \u062a\u0644 \u0627\u0644\u0641\u0627\u0631"},{id:2495,region_name:"Wadi Bnit - \u0648\u0627\u062f\u064a \u0628\u0646\u064a\u062a"},{id:2496,region_name:"Wadi Faara - \u0648\u0627\u062f\u064a \u0641\u0639\u0631\u0627"},{id:2497,region_name:"Zighrine - \u0632\u063a\u0631\u064a\u0646"},{id:2498,region_name:"Zighrine Et Tahta - \u0632\u063a\u0631\u064a\u0646 \u0627\u0644\u062a\u062d\u062a\u0649"},{id:2499,region_name:"Zouaitini Zighrine - \u0627\u0644\u0632\u0648\u064a\u062a\u064a\u0646\u0647 \u0632\u063a\u0631\u064a\u0646"}]}]},{id:3,GovernorateDescription:"Beirut - \u0628\u064a\u0631\u0648\u062a",Districts:[{id:4,DistrictDescription:"Beirut - \u0628\u064a\u0631\u0648\u062a",Cities:[{id:2500,region_name:"Aadlyeh - \u0627\u0644\u0639\u062f\u0644\u064a\u0629"},{id:2501,region_name:"Achrafiye - \u0627\u0644\u0627\u0634\u0631\u0641\u064a\u0629"},{id:2502,region_name:"Ain El Tine - \u0639\u064a\u0646 \u0627\u0644\u062a\u064a\u0646\u0629"},{id:2503,region_name:"Ain Mreisse - \u0639\u064a\u0646 \u0627\u0644\u0645\u0631\u064a\u0633\u0647"},{id:2504,region_name:"Al Hikmat - \u062d\u0643\u0645\u0629"},{id:2505,region_name:"Bab idriss - \u0628\u0627\u0628 \u0625\u062f\u0631\u064a\u0633"},{id:2506,region_name:"Bachoura - \u0628\u0627\u0634\u0648\u0631\u0629"},{id:2507,region_name:"Basta Faouka - \u0628\u0633\u0637\u0627 \u0627\u0644\u0641\u0648\u0642\u0627"},{id:2508,region_name:"Basta Tahta - \u0628\u0633\u0637\u0627 \u0627\u0644\u062a\u062d\u062a\u0627"},{id:2509,region_name:"Beirut - \u0628\u064a\u0631\u0648\u062a"},{id:2510,region_name:"Beirut Central District - \u0648\u0633\u0637 \u0628\u064a\u0631\u0648\u062a"},{id:2511,region_name:"Bourj Abi Haidar - \u0628\u0631\u062c \u0623\u0628\u0648 \u062d\u064a\u062f\u0631"},{id:2512,region_name:"Champ de courses - \u0645\u064a\u062f\u0627\u0646 \u0633\u0628\u0627\u0642 \u0627\u0644\u062e\u064a\u0644"},{id:2513,region_name:"Corniche El Naher - \u0643\u0648\u0631\u0646\u064a\u0634 \u0627\u0644\u0646\u0647\u0631"},{id:2514,region_name:"Dar Al Fatwa - \u062f\u0627\u0631\u0627\u0644\u0641\u062a\u0648\u0649"},{id:2515,region_name:"Ej Jeitaoui - \u062c\u0639\u064a\u062a\u0627\u0648\u064a"},{id:2516,region_name:"El Aamliye - \u0639\u0627\u0645\u0644\u064a\u0629"},{id:2517,region_name:"El Ghabe - \u063a\u0627\u0628\u064a"},{id:2518,region_name:"El Hamra - \u062d\u0645\u0631\u0627"},{id:2519,region_name:"El Horge - \u062d\u0631\u0634"},{id:2520,region_name:"El Majidiye Beirut - \u0645\u062c\u064a\u062f\u064a\u0629 (\u0628\u064a\u0631\u0648\u062a)"},{id:2521,region_name:"El Manara - \u0645\u0646\u0627\u0631\u0629"},{id:2522,region_name:"El Wata - \u0627\u0644\u0648\u0637\u0649"},{id:2523,region_name:"El Zarif - \u0638\u0631\u064a\u0641"},{id:2524,region_name:"Fourn el Hayek - \u0641\u0631\u0646 \u0627\u0644\u062d\u0627\u064a\u0643"},{id:2525,region_name:"Gemmayze - \u062c\u0645\u064a\u0632\u0629"},{id:2526,region_name:"Grand Serail - \u0633\u0631\u0627\u064a \u0627\u0644\u0643\u0628\u064a\u0631"},{id:2527,region_name:"Hotel Dieu - \u0627\u0648\u062a\u064a\u0644 \u062f\u064a\u0648"},{id:2528,region_name:"Jamia - \u0627\u0644\u062c\u0627\u0645\u0639\u0629 "},{id:2529,region_name:"Jisr - \u062c\u0633\u0631"},{id:2530,region_name:"Jounblat - \u062c\u0646\u0628\u0644\u0627\u0637"},{id:2531,region_name:"Khodr - \u0627\u0644\u062e\u0636\u0631"},{id:2532,region_name:"La Sagesse - \u0627\u0644\u062d\u0643\u0645\u0629"},{id:2533,region_name:"Malaab - \u0645\u0644\u0639\u0628"},{id:2534,region_name:"Manara - \u0627\u0644\u0645\u0646\u0627\u0631\u0629"},{id:2535,region_name:"Mar Elias - \u0645\u0627\u0631 \u0627\u0644\u064a\u0627\u0633"},{id:2536,region_name:"Mar Maroun - \u0645\u0627\u0631 \u0645\u0627\u0631\u0648\u0646"},{id:2537,region_name:"Mar Mitr - \u0645\u0627\u0631 \u0645\u062a\u0631"},{id:2538,region_name:"Mar Mkhayel - \u0645\u0627\u0631 \u0645\u062e\u0627\u064a\u0644"},{id:2539,region_name:"Mar Nqoula - \u0645\u0627\u0631 \u0646\u0642\u0648\u0644\u0627"},{id:2540,region_name:"Marfaa - \u0645\u0631\u0641\u0623"},{id:2541,region_name:"Mazraa - \u0627\u0644\u0645\u0632\u0631\u0639\u0629"},{id:2542,region_name:"Medouar - \u0645\u062f\u0648\u0631"},{id:2543,region_name:"Minet el Hosn - \u0645\u064a\u0646\u0627 \u0627\u0644\u062d\u0635\u0646"},{id:2544,region_name:"Moussaitbe - \u0645\u0635\u064a\u0637\u0628\u0629"},{id:2545,region_name:"Moustachfa er Roum - \u0645\u0633\u062a\u0634\u0641\u0649 \u0627\u0644\u0631\u0648\u0645"},{id:2546,region_name:"Najmeh - \u0627\u0644\u0646\u062c\u0645\u0629"},{id:2547,region_name:"Nasra - \u0627\u0644\u0646\u0627\u0635\u0631\u0629"},{id:2548,region_name:"Palais De Justice - \u0642\u0635\u0631 \u0627\u0644\u0639\u062f\u0644"},{id:2549,region_name:"Parc - \u0633\u0628\u0627\u0642 \u0627\u0644\u062e\u064a\u0644"},{id:2550,region_name:"Patriarcat - \u0628\u0637\u0631\u0643\u064a\u0629"},{id:2551,region_name:"Place de l'Etoile - \u0633\u0627\u062d\u0629 \u0627\u0644\u0646\u062c\u0645\u0629"},{id:2552,region_name:"Qantari - \u0642\u0646\u0637\u0627\u0631\u064a"},{id:2553,region_name:"Qobaiyat - \u0642\u0628\u064a\u0627\u062a"},{id:2554,region_name:"Qoraitem - \u0642\u0631\u064a\u0637\u0645"},{id:2555,region_name:"Ramlet el Bayda - \u0627\u0644\u0631\u0645\u0644\u0629 \u0627\u0644\u0628\u064a\u0636\u0627"},{id:2556,region_name:"Raoucheh - \u0631\u0648\u0634\u0647"},{id:2557,region_name:"Ras Beirut - \u0631\u0627\u0633 \u0628\u064a\u0631\u0648\u062a"},{id:2558,region_name:"Ras El Nabaa - \u0631\u0627\u0633 \u0627\u0644\u0646\u0628\u0639"},{id:2559,region_name:"Remeil - \u0631\u0645\u064a\u0644"},{id:2560,region_name:"Saife - \u0635\u064a\u0641\u064a"},{id:2561,region_name:"Sanayeh - \u0627\u0644\u0635\u0646\u0627\u0626\u0639"},{id:2562,region_name:"Sioufi - \u0627\u0644\u0633\u064a\u0648\u0641\u064a"},{id:2563,region_name:"Snoubra - \u0635\u0646\u0648\u0628\u0631\u0647"},{id:2564,region_name:"Tallet Druze - \u062a\u0644\u0629 \u0627\u0644\u062f\u0631\u0648\u0632"},{id:2565,region_name:"Tallet el Khayat - \u062a\u0644\u0629 \u0627\u0644\u062e\u064a\u0627\u0637"},{id:2566,region_name:"Tariq El Jdide - \u0637\u0631\u064a\u0642 \u0627\u0644\u062c\u062f\u064a\u062f\u0629"},{id:2567,region_name:"Unesco - \u0627\u0644\u0627\u0648\u0646\u0633\u0643\u0648"},{id:2568,region_name:"Universite Americaine - \u0627\u0644\u062c\u0627\u0645\u0639\u0629 \u0627\u0644\u0627\u0645\u064a\u0631\u0643\u064a\u0629"},{id:2569,region_name:"Universite St Joseph - \u062c\u0627\u0645\u0639\u0629 \u0627\u0644\u0642\u062f\u064a\u0633 \u064a\u0648\u0633\u0641"},{id:2570,region_name:"Zoqaq el Blat - \u0632\u0642\u0627\u0642 \u0627\u0644\u0628\u0644\u0627\u0637"}]},{id:27,DistrictDescription:"Dahie - \u0636\u0627\u062d\u064a\u0629",Cities:[{id:3055,region_name:"Bir el AAbed - \u0628\u0626\u0631 \u0627\u0644\u0639\u0628\u062f"},{id:3056,region_name:"Bir Hassan - \u0628\u0626\u0631 \u062d\u0633\u0646"},{id:3058,region_name:"Borj el Brajne - \u0628\u0631\u062c \u0627\u0644\u0628\u0631\u0627\u062c\u0646\u0629"},{id:3068,region_name:"Chiayah - \u0634\u064a\u0627\u062d"},{id:3084,region_name:"El Ouzaai - \u0627\u0648\u0632\u0627\u0639\u064a"},{id:3086,region_name:"Er Rouais - \u0627\u0644\u0631\u0648\u064a\u0633"},{id:3088,region_name:"Et Tahouita - \u0627\u0644\u062a\u062d\u0648\u064a\u0637\u0629"},{id:3094,region_name:"Ghobeire - \u063a\u0628\u064a\u0631\u064a"},{id:3103,region_name:"Haret Hraik - \u062d\u0627\u0631\u0629 \u062d\u0631\u064a\u0643"},{id:3108,region_name:"Jnah - \u062c\u0646\u0627\u062d"},{id:3117,region_name:"Lailake - \u0644\u064a\u0644\u0643\u064a"},{id:3123,region_name:"Mraije - \u0645\u0631\u064a\u062c\u0629"},{id:3142,region_name:"Tahouitet el Ghadir - \u062a\u062d\u0648\u064a\u0637\u0629 \u0627\u0644\u063a\u062f\u064a\u0631"},{id:4676,region_name:"Ghobeiri - \u0627\u0644\u063a\u0628\u064a\u0631\u064a"},{id:4677,region_name:"Chiyah - \u0627\u0644\u0634\u064a\u0627\u062d"},{id:4678,region_name:"Rawdet El Chahidan - \u0631\u0648\u0636\u0629 \u0627\u0644\u0634\u0647\u064a\u062f\u064a\u0646"},{id:4679,region_name:"Kniset Mar Mkhayel - \u0643\u0646\u064a\u0633\u0629 \u0645\u0627\u0631 \u0645\u062e\u0627\u064a\u0644"},{id:4680,region_name:"Hay El Amerken - \u062d\u064a \u0627\u0644\u0623\u0645\u064a\u0631\u0643\u0627\u0646"},{id:4681,region_name:"Sfeir - \u0635\u0641\u064a\u0631"},{id:4682,region_name:"Jamous - \u062c\u0627\u0645\u0648\u0633"},{id:4683,region_name:"Saint Therese - \u0633\u0627\u0646\u062a \u062a\u064a\u0631\u064a\u0632"},{id:4684,region_name:"Autostrade Sayid Hadi - \u0623\u0648\u062a\u0648\u0633\u062a\u0631\u0627\u062f \u0633\u064a\u062f \u0647\u0627\u062f\u064a"},{id:4685,region_name:"Rweis - \u0627\u0644\u0631\u0648\u064a\u0633"},{id:4686,region_name:"Lebanese University - \u0627\u0644\u062c\u0627\u0645\u0639\u0629 \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064a\u0629"},{id:4687,region_name:"Tarik El Matar - \u0637\u0631\u064a\u0642 \u0627\u0644\u0645\u0637\u0627\u0631"},{id:4688,region_name:"Barakat - \u0628\u0631\u0643\u0627\u062a"},{id:4689,region_name:"Hay El Selom - \u062d\u064a \u0627\u0644\u0633\u0644\u0645"},{id:4690,region_name:"Ajniha El Khamsa - \u0623\u062c\u0646\u062d\u0629 \u0627\u0644\u062e\u0645\u0633\u0629"},{id:4691,region_name:"Bir Hassan - \u0628\u0626\u0631 \u062d\u0633\u0646"},{id:4692,region_name:"Jnah - \u0627\u0644\u062c\u0646\u0627\u062d"},{id:4693,region_name:"Ouzai - \u0627\u0644\u0623\u0648\u0632\u0627\u0639\u064a"},{id:4694,region_name:"Tarik EL Matar - \u0637\u0631\u064a\u0642 \u0627\u0644\u0645\u0637\u0627\u0631"}]}]},{id:4,GovernorateDescription:"Bekaa - \u0627\u0644\u0628\u0642\u0627\u0639",Districts:[{id:5,DistrictDescription:"Rachaya - \u0631\u0627\u0634\u064a\u0627",Cities:[{id:2571,region_name:"Aaiha - \u0639\u064a\u062d\u0627"},{id:2572,region_name:"Aaqbe - \u0639\u0642\u0628\u0629 \u0631\u0627\u0634\u064a\u0651\u0627"},{id:2573,region_name:"Aaz el Aarab - \u0639\u0632 \u0627\u0644\u0639\u0631\u0628"},{id:2574,region_name:"Ain Aarab - \u0639\u064a\u0646 \u0639\u0631\u0628"},{id:2575,region_name:"Ain Aata - \u0639\u064a\u0646 \u0639\u0637\u0627"},{id:2576,region_name:"Ain Hircha - \u0639\u064a\u0646 \u062d\u0631\u0634\u0629"},{id:2577,region_name:"Aita el Foukhar - \u0639\u064a\u062a\u0627 \u0627\u0644\u0641\u062e\u0627\u0631"},{id:2578,region_name:"Bakka - \u0628\u0643\u0627"},{id:2579,region_name:"Bakkifa - \u0628\u0643\u064a\u0641\u0627 \u0631\u0627\u0634\u064a\u0627"},{id:2580,region_name:"Bayader el Aadas - \u0628\u064a\u0627\u062f\u0631 \u0627\u0644\u0639\u062f\u0633"},{id:2581,region_name:"Beit Lahia - \u0628\u064a\u062a \u0644\u0647\u064a\u0627"},{id:2582,region_name:"Bire rachaya - \u0628\u064a\u0631\u0629 \u0631\u0627\u0634\u0651\u064a\u0627"},{id:2583,region_name:"Dahr el Ahmar - \u0636\u0647\u0631 \u0627\u0644\u0627\u062d\u0645\u0631"},{id:2584,region_name:"Deir el Aachayer - \u062f\u064a\u0631 \u0627\u0644\u0639\u0634\u0627\u064a\u0631"},{id:2585,region_name:"El Faqaa - \u0627\u0644\u0641\u0642\u0639\u0629"},{id:2586,region_name:"En Nabi Safa - \u0646\u0628\u064a \u0635\u0641\u0627"},{id:2587,region_name:"Haloua - \u062d\u0644\u0648\u0629"},{id:2588,region_name:"Haouch El Qinnabeh - \u062d\u0648\u0634 \u0627\u0644\u0642\u0646\u0639\u0628\u0629 "},{id:2589,region_name:"Haret el Kaouasbe - \u062d\u0627\u0631\u0629 \u0627\u0644\u0643\u0648\u0627\u0633\u0628\u0629"},{id:2590,region_name:"Jebb Farah - \u062c\u0628 \u0641\u0631\u062d"},{id:2591,region_name:"Kaoukaba - \u0643\u0648\u0643\u0628\u0627 "},{id:2592,region_name:"Kfar Danis - \u0643\u0641\u0631 \u062f\u0646\u064a\u0633"},{id:2593,region_name:"Kfar Mechki - \u0643\u0641\u0631 \u0645\u0634\u0643\u064a"},{id:2594,region_name:"Kfar Qouq - \u0643\u0641\u0631\u0642\u0648\u0642"},{id:2595,region_name:"Khirbet Rouha - \u062e\u0631\u0628\u0629 \u0631\u0648\u062d\u0627"},{id:2596,region_name:"Majdal Balhis - \u0645\u062c\u062f\u0644 \u0628\u0644\u0647\u064a\u0635"},{id:2597,region_name:"Marj es Simah - \u0645\u0631\u062c \u0627\u0644\u0633\u0645\u0627\u062d"},{id:2598,region_name:"Mazraat Aazzi - \u0645\u0632\u0631\u0639\u0629 \u0639\u0632\u0650\u064a"},{id:2599,region_name:"Mazraat Ain Qeniye - \u0645\u0632\u0631\u0639\u0629 \u0639\u064a\u0646 \u0642\u0646\u064a\u0629"},{id:2600,region_name:"Mazraat Deir el Aachaiyer - \u0645\u0632\u0631\u0639\u0629 \u062f\u064a\u0631 \u0627\u0644\u0639\u0634\u0627\u064a\u0631"},{id:2601,region_name:"Mazraat el Qalioun - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0642\u0644\u064a\u0648\u0646"},{id:2602,region_name:"Mazraat Jaafar - \u0645\u0632\u0631\u0639\u0629 \u062c\u0639\u0641\u0631"},{id:2603,region_name:"Mazret Al Chmis - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0634\u0645\u064a\u0633\u0629"},{id:2604,region_name:"Mdoukha - \u0645\u062f\u0648\u062e\u0627"},{id:2605,region_name:"Mhaidse - \u0645\u062d\u064a\u062f\u062b\u0647 "},{id:2606,region_name:"Qnaabe - \u0642\u0646\u0639\u0628\u0629"},{id:2607,region_name:"Rachaiya - \u0631\u0627\u0634\u064a\u0651\u0627 \u0627\u0644\u0648\u0627\u062f\u064a "},{id:2608,region_name:"Rafid - \u0627\u0644\u0631\u0627\u0641\u062f \u0631\u0627\u0634\u064a\u0627"},{id:2609,region_name:"Selsata Mazraat Dier el Aachayer - \u0645\u0632\u0631\u0639\u0629 \u0633\u0644\u0633\u0627\u062a\u0627"},{id:2610,region_name:"Tannoura - \u062a\u0646\u0648\u0631\u0629"},{id:2611,region_name:"Yanta - \u064a\u0646\u0637\u0627"}]},{id:6,DistrictDescription:"West Bekaa - \u0627\u0644\u0628\u0642\u0627\u0639 \u0627\u0644\u063a\u0631\u0628\u064a",Cities:[{id:2612,region_name:"Aammiq - \u0639\u0645\u064a\u0642"},{id:2613,region_name:"Aana - \u0639\u0627\u0646\u0627"},{id:2614,region_name:"Ain et Tine West Bekaa - \u0639\u064a\u0646 \u0627\u0644\u062a\u064a\u0646\u0629 \u0628\u0642\u0627\u0639 \u0627\u0644\u063a\u0631\u0628\u064a"},{id:2615,region_name:"Ain Zebde - \u0639\u064a\u0646 \u0632\u0628\u062f\u0629"},{id:2616,region_name:"Aitanit - \u0639\u064a\u062a\u0646\u064a\u062a"},{id:2617,region_name:"Al-Wakf - \u0627\u0644\u0648\u0642\u0641 \u0628\u0642\u0627\u0639 \u0627\u0644\u063a\u0631\u0628\u064a"},{id:2618,region_name:"Baaloul - \u0628\u0639\u0644\u0648\u0644"},{id:2619,region_name:"Bab Maraa - \u0628\u0627\u0628 \u0645\u0627\u0631\u0639"},{id:2620,region_name:"Chebreqiyet Aammiq - \u0634\u0628\u0631\u0642\u064a\u0629 \u0639\u0645\u064a\u0642"},{id:2621,region_name:"Dakoue - \u062f\u0643\u0648\u0629"},{id:2622,region_name:"Deir Ain ej Jaouze - \u062f\u064a\u0631 \u0639\u064a\u0646 \u0627\u0644\u062c\u0648\u0632\u0629"},{id:2623,region_name:"Deir Tahnich - \u062f\u064a\u0631 \u0637\u062d\u0646\u064a\u0634"},{id:2624,region_name:"El Jezire - \u0627\u0644\u062c\u0632\u064a\u0631\u0629"},{id:2625,region_name:"El Marj - \u0627\u0644\u0645\u0631\u062c"},{id:2626,region_name:"Ghazze - \u063a\u0632\u0629"},{id:2627,region_name:"Hammara - \u062d\u0645\u0627\u0631\u0629"},{id:2628,region_name:"Harime es Soughra - \u062d\u0631\u064a\u0645\u0629 \u0627\u0644\u0635\u063a\u0631\u0649"},{id:2629,region_name:"Houch Aammiq - \u062d\u0648\u0634 \u0639\u0645\u064a\u0642"},{id:2630,region_name:"Houch el Harime - \u062d\u0648\u0634 \u0627\u0644\u062d\u0631\u064a\u0645\u0629"},{id:2631,region_name:"Houch es Saalouk - \u062d\u0648\u0634 \u0627\u0644\u0633\u0639\u0644\u0648\u0643"},{id:2632,region_name:"Joub Jannine - \u062c\u0628 \u062c\u0646\u064a\u0646"},{id:2633,region_name:"Kafraiya West Bekaa - \u0643\u0641\u0631\u064a\u0627 \u0628\u0642\u0627\u0639 \u0627\u0644\u063a\u0631\u0628\u064a"},{id:2634,region_name:"Kamed el Laouz - \u0643\u0627\u0645\u062f \u0627\u0644\u0644\u0648\u0632"},{id:2635,region_name:"Khiara - \u0627\u0644\u062e\u064a\u0627\u0631\u0629"},{id:2636,region_name:"Khiara el Aatiqa - \u062e\u064a\u0627\u0631\u0629 \u0627\u0644\u0639\u062a\u064a\u0642\u0629"},{id:2637,region_name:"Khirbet Qanafar - \u062e\u0631\u0628\u0629 \u0642\u0646\u0627\u0641\u0627\u0631"},{id:2638,region_name:"Lala - \u0644\u0627\u0644\u0627"},{id:2639,region_name:"Libbaya - \u0644\u0628\u0627\u064a\u0627"},{id:2640,region_name:"Loussia - \u0644\u0648\u0633\u064a\u0627"},{id:2641,region_name:"Machgara - \u0645\u0634\u063a\u0631\u0629"},{id:2642,region_name:"Mansoura - \u0627\u0644\u0645\u0646\u0635\u0648\u0631\u0629"},{id:2643,region_name:"Meidoun - \u0645\u064a\u062f\u0648\u0646"},{id:2644,region_name:"Nabaa el Khraizat - \u0646\u0628\u0639 \u0627\u0644\u062e\u0631\u064a\u0632\u0627\u062a"},{id:2645,region_name:"Qaraoun - \u0627\u0644\u0642\u0631\u0639\u0648\u0646"},{id:2646,region_name:"Qillaya - \u0642\u0644\u0627\u064a\u0627"},{id:2647,region_name:"Raouda Istabl - \u0631\u0648\u0636\u0629 \u0625\u0633\u0637\u0628\u0644"},{id:2648,region_name:"Saghbine - \u0635\u063a\u0628\u064a\u0646"},{id:2649,region_name:"Sohmor - \u0633\u062d\u0645\u0631"},{id:2650,region_name:"Souairi - \u0635\u0648\u064a\u0631\u064a"},{id:2651,region_name:"Soultan Yaaqoub Aradi - \u0633\u0644\u0637\u0627\u0646 \u064a\u0639\u0642\u0648\u0628 \u0623\u0631\u0627\u0636\u064a"},{id:2652,region_name:"Soultane Yaaqoub el Faouqa - \u0633\u0644\u0637\u0627\u0646 \u064a\u0639\u0642\u0648\u0628 \u0627\u0644\u0641\u0648\u0642\u0627"},{id:2653,region_name:"Soultane Yaaqoub el Tahta - \u0633\u0644\u0637\u0627\u0646 \u064a\u0639\u0642\u0648\u0628 \u0627\u0644\u062a\u062d\u062a\u0627"},{id:2654,region_name:"Tall ez Zaazeaa - \u062a\u0644 \u0627\u0644\u0632\u0639\u0632\u0639"},{id:2655,region_name:"Tall Znoub - \u062a\u0644 \u0632\u0646\u0648\u0628"},{id:2656,region_name:"Tall Znoub ej Jdide - \u062a\u0644 \u0632\u0646\u0648\u0628 \u062c\u062f\u064a\u062f\u0629"},{id:2657,region_name:"Yohmor West Bekaa - \u064a\u062d\u0645\u0631 \u0628\u0642\u0627\u0639 \u0627\u0644\u063a\u0631\u0628\u064a"},{id:2658,region_name:"Zellaya - \u0632\u0644\u0627\u064a\u0627"}]},{id:7,DistrictDescription:"Zahle - \u0632\u062d\u0644\u0629",Cities:[{id:2659,region_name:"Aali en Nahri - \u0639\u0644\u064a \u0627\u0644\u0646\u0647\u0631\u064a"},{id:2660,region_name:"Ablah - \u0627\u0628\u0644\u062d"},{id:2661,region_name:"Ain el Ghmiqa - \u0639\u064a\u0646 \u0627\u0644\u063a\u0645\u064a\u0642\u0629"},{id:2662,region_name:"Ain Kfar Zabad - \u0639\u064a\u0646 \u0643\u0641\u0631 \u0632\u0628\u062f"},{id:2663,region_name:"Al Faour - \u0627\u0644\u0641\u0627\u0639\u0648\u0631"},{id:2664,region_name:"Anjar - \u0639\u0646\u062c\u0631"},{id:2665,region_name:"Bar Elias - \u0628\u0631 \u0627\u0644\u064a\u0627\u0633"},{id:2666,region_name:"Bayyadat - \u0627\u0644\u0628\u064a\u0627\u0636\u0629"},{id:2667,region_name:"Berbara zahle - \u0628\u0631\u0628\u0627\u0631\u0629 \u0632\u062d\u0644\u0629"},{id:2668,region_name:"Bouarej - \u0628\u0648\u0627\u0631\u062c"},{id:2669,region_name:"Chamssine - \u0634\u0645\u0633\u064a\u0646"},{id:2670,region_name:"Chebrqiyet Tabet - \u0634\u0628\u0631\u0642\u064a\u0629 \u062a\u0627\u0628\u062a"},{id:2671,region_name:"Chtaura - \u0634\u062a\u0648\u0631\u0627"},{id:2672,region_name:"Dahr al Harf - \u0636\u0647\u0631 \u0627\u0644\u062d\u0631\u0641"},{id:2673,region_name:"Dahr Blait - \u0636\u0647\u0631 \u0627\u0644\u0628\u0644\u0627\u064a\u0637"},{id:2674,region_name:"Dahr es Souane - \u0636\u0647\u0631 \u0627\u0644\u0635\u0648\u0627\u0646"},{id:2675,region_name:"Dalhamiye - \u062f\u0644\u0647\u0645\u064a\u0647"},{id:2676,region_name:"Deir el Ghazal - \u062f\u064a\u0631 \u0627\u0644\u063a\u0632\u0627\u0644"},{id:2677,region_name:"Deir Zenoun - \u062f\u064a\u0631 \u0632\u0646\u0648\u0646"},{id:2678,region_name:"Er Ramtaniye - \u0627\u0644\u0631\u0645\u0637\u0627\u0646\u064a\u0629"},{id:2679,region_name:"Es Sraij - \u0633\u0631\u064a\u062c"},{id:2680,region_name:"Fourzol - \u0641\u0631\u0632\u0644 "},{id:2681,region_name:"Hakl Hammana - \u062d\u0642\u0644 \u062d\u0645\u0627\u0646\u0627"},{id:2682,region_name:"Haouch ed Dibs - \u062d\u0648\u0634 \u0627\u0644\u062f\u0628\u0633"},{id:2683,region_name:"Haouch el Mendara - \u062d\u0648\u0634 \u0645\u0646\u062f\u0631\u0647"},{id:2684,region_name:"Haouch el Oumara Aradi - \u0632\u062d\u0644\u0629 \u062d\u0648\u0634 \u0627\u0644\u0627\u0645\u0631\u0627\u0621 \u0623\u0631\u0627\u0636\u064a"},{id:2685,region_name:"Haouch el Sayade - \u062d\u0648\u0634 \u0627\u0644\u0635\u064a\u0627\u062f\u064a"},{id:2686,region_name:"Haouch Moussa Anjar - \u062d\u0648\u0634 \u0645\u0648\u0633\u0649 \u0639\u0646\u062c\u0631"},{id:2687,region_name:"Haret el Fikani - \u062d\u0627\u0631\u0629 \u0627\u0644\u0641\u064a\u0643\u0627\u0646\u064a"},{id:2688,region_name:"Hazerta - \u062d\u0632\u0631\u062a\u0627"},{id:2689,region_name:"Hechmech - \u062d\u0634\u0645\u0634"},{id:2690,region_name:"Houch El-Ghanam - \u062d\u0648\u0634 \u0627\u0644\u063a\u0646\u0645"},{id:2691,region_name:"Houch ez Zaraane - \u062d\u0648\u0634 \u0627\u0644\u0632\u0631\u0627\u0639\u0646\u0629"},{id:2692,region_name:"Houch Hala - \u062d\u0648\u0634 \u062d\u0627\u0644\u0627"},{id:2693,region_name:"Jdita - \u062c\u062f\u064a\u062a\u0627"},{id:2694,region_name:"Jlala - \u062c\u0644\u0627\u0644\u0627"},{id:2695,region_name:"Karak Nouh - \u0643\u0631\u0643 \u0646\u0648\u062d "},{id:2696,region_name:"Kfar Zabad - \u0643\u0641\u0631 \u0632\u0628\u062f"},{id:2697,region_name:"Koussaya - \u0642\u0648\u0633\u0627\u064a\u0627"},{id:2698,region_name:"Ksara - \u0643\u0633\u0627\u0631\u0629"},{id:2699,region_name:"MADINAT AL SINA'IYAT - \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0635\u0646\u0627\u0639\u064a\u0629"},{id:2700,region_name:"Majdel Anjar - \u0645\u062c\u062f\u0644 \u0639\u0646\u062c\u0631"},{id:2701,region_name:"Mar Elias Zahle - \u0645\u0627\u0631 \u0627\u0644\u064a\u0627\u0633 \u0632\u062d\u0644\u0629"},{id:2702,region_name:"Masnaa Zahle - \u0627\u0644\u0645\u0635\u0646\u0639 \u0632\u062d\u0644\u0629"},{id:2703,region_name:"Massa - \u0645\u0633\u0627"},{id:2704,region_name:"Mazraat el Mehqane - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0645\u062d\u0642\u0627\u0646"},{id:2705,region_name:"Mazraat Zahle - \u0645\u0632\u0631\u0639\u0629 \u0632\u062d\u0644\u0629"},{id:2706,region_name:"Meksi - \u0645\u0643\u0633\u0629"},{id:2707,region_name:"Mreijat - \u0645\u0631\u064a\u062c\u0627\u062a"},{id:2708,region_name:"Naassate - \u0646\u0639\u0635\u0627\u062a"},{id:2709,region_name:"Nabi Aila - \u0646\u0628\u064a \u0627\u064a\u0644\u0627"},{id:2710,region_name:"Nasriyet Rizq - \u0646\u0627\u0635\u0631\u064a\u0629 \u0631\u0632\u0642"},{id:2711,region_name:"Nasriyet Zahle - \u0646\u0627\u0635\u0631\u064a\u0629  \u0632\u062d\u0644\u0629"},{id:2712,region_name:"Niha zahle - \u0646\u064a\u062d\u0627 \u0632\u062d\u0644\u0629"},{id:2713,region_name:"Ouadi ed Deloum - \u0648\u0627\u062f\u064a \u0627\u0644\u062f\u0644\u0645"},{id:2714,region_name:"Ouadi el Aarayech - \u0648\u0627\u062f\u064a \u0627\u0644\u0639\u0631\u0627\u064a\u0634"},{id:2715,region_name:"Qaa er Rim - \u0642\u0627\u0639 \u0627\u0644\u0631\u064a\u0645"},{id:2716,region_name:"Qabb Elias - \u0642\u0628 \u0627\u0644\u064a\u0627\u0633"},{id:2717,region_name:"Qarqoud - \u0642\u0631\u0642\u0648\u062f"},{id:2718,region_name:"Qeisser - \u0642\u064a\u0635\u0631"},{id:2719,region_name:"Qommol - \u0642\u0645\u0651\u0644"},{id:2720,region_name:"Raait - \u0631\u0639\u064a\u062a"},{id:2721,region_name:"Ras el Ain Zahle - \u0631\u0627\u0633 \u0627\u0644\u0639\u064a\u0646 \u0632\u062d\u0644\u0629"},{id:2722,region_name:"Rassiyeh - \u0627\u0644\u0631\u0627\u0633\u064a\u0629"},{id:2723,region_name:"Rayak - \u0631\u064a\u0627\u0642"},{id:2724,region_name:"Saadnayel - \u0633\u0639\u062f\u0646\u0627\u064a\u0644"},{id:2725,region_name:"Sahret el Qach - \u0635\u062d\u0631\u0629 \u0627\u0644\u0642\u0634"},{id:2726,region_name:"Taalabaya - \u062a\u0639\u0644\u0628\u0627\u064a\u0627"},{id:2727,region_name:"Taanayel - \u062a\u0639\u0646\u0627\u064a\u0644"},{id:2728,region_name:"Tall el Akhdar - \u062a\u0644 \u0627\u0644\u0627\u062e\u0636\u0631"},{id:2729,region_name:"Tcheflik Eddeh Haouch - \u062a\u0634\u0641\u0644\u0643 \u0627\u062f\u0647 \u062d\u0648\u0634"},{id:2730,region_name:"Tcheflik Qiqano - \u062a\u0634\u0641\u0644\u0643 \u0642\u064a\u0642\u0627\u0646\u0648"},{id:2731,region_name:"Tell Chiha - \u062a\u0644 \u0634\u064a\u062d\u0627"},{id:2732,region_name:"Tell el Aamara - \u062a\u0644 \u0627\u0644\u0639\u0645\u0627\u0631\u0629"},{id:2733,region_name:"Terbol - \u062a\u0631\u0628\u0644"},{id:2734,region_name:"Touaite - \u062a\u0648\u064a\u062a\u064a"},{id:2735,region_name:"Zahle - \u0632\u062d\u0644\u0629"},{id:2736,region_name:"Zahle  Mar Antonios - \u0632\u062d\u0644\u0629 \u0645\u0627\u0631 \u0623\u0646\u0637\u0648\u0646\u064a\u0648\u0633"},{id:2737,region_name:"Zahle  Mar Gerges - \u0632\u062d\u0644\u0629 \u0645\u0627\u0631 \u062c\u0631\u062c\u0633"},{id:2738,region_name:"Zahle  Saydet En Najat - \u0632\u062d\u0644\u0629  \u0633\u064a\u062f\u0629 \u0627\u0644\u0646\u062c\u0627\u0629"},{id:2739,region_name:"Zahle Aradi - \u0632\u062d\u0644\u0629 \u0623\u0631\u0627\u0636\u064a"},{id:2740,region_name:"Zahle Maalaqa Aradi - \u0632\u062d\u0644\u0629 \u0645\u0639\u0644\u0642\u0629 \u0623\u0631\u0627\u0636\u064a"},{id:2741,region_name:"Zebdol - \u0632\u0628\u062f\u0644"}]}]},{id:5,GovernorateDescription:"El Nabatieh - \u0627\u0644\u0646\u0628\u0637\u064a\u0629",Districts:[{id:8,DistrictDescription:"Bent Jbeil - \u0628\u0646\u062a \u062c\u0628\u064a\u0644",Cities:[{id:2742,region_name:"Aainata - \u0639\u064a\u0646\u0627\u062a\u0627 \u0628\u0646\u062a \u062c\u0628\u064a\u0644"},{id:2743,region_name:"Aaitaroun - \u0639\u064a\u062a\u0631\u0648\u0646"},{id:2744,region_name:"Aayta ej Jabal Zott - \u0639\u064a\u062a\u0627 \u0627\u0644\u062c\u0628\u0644 \u0627\u0644\u0632\u0637"},{id:2745,region_name:"Ain Ebel - \u0639\u064a\u0646 \u0627\u0628\u0644"},{id:2746,region_name:"Aita Ech Chaab - \u0639\u064a\u062a\u0627 \u0627\u0644\u0634\u0639\u0628"},{id:2747,region_name:"Beit Lif - \u0628\u064a\u062a \u0644\u064a\u0641"},{id:2748,region_name:"Beit Yahnoun - \u0628\u064a\u062a \u064a\u0627\u062d\u0648\u0646"},{id:2749,region_name:"Bent Jubail - \u0628\u0646\u062a \u062c\u0628\u064a\u0644"},{id:2750,region_name:"Bir es Sanassel - \u0628\u064a\u0631 \u0627\u0644\u0633\u0646\u0627\u0633\u0644"},{id:2751,region_name:"Borj Qalaouiye - \u0628\u0631\u062c \u0642\u0644\u0648\u064a\u0647"},{id:2752,region_name:"Braachit - \u0628\u0631\u0639\u0634\u064a\u062a"},{id:2753,region_name:"Chaqra - \u0634\u0642\u0631\u0627 "},{id:2754,region_name:"Debl Oummiya - \u062f\u0628\u0644 \u0627\u0645\u064a\u0629"},{id:2755,region_name:"Deir Ntar - \u062f\u064a\u0631 \u0646\u0637\u0627\u0631"},{id:2756,region_name:"Doubiye - \u062f\u0648\u0628\u064a\u0629"},{id:2757,region_name:"El Birke -  \u0627\u0644\u0628\u0631\u0643\u0647 \u0628\u0646\u062a \u062c\u0628\u064a\u0644"},{id:2758,region_name:"El Biyad - \u0627\u0644\u0628\u064a\u0627\u062f"},{id:2759,region_name:"Froun - \u0641\u0631\u0648\u0646"},{id:2760,region_name:"Ghandouriye Bent Jbeil - \u063a\u0646\u062f\u0648\u0631\u064a\u0629 \u0628\u0646\u062a \u062c\u0628\u064a\u0644"},{id:2761,region_name:"Haddatha - \u062d\u062f\u0627\u062b\u0627"},{id:2762,region_name:"Hanine - \u062d\u0646\u064a\u0646"},{id:2763,region_name:"Hariss - \u062d\u0627\u0631\u064a\u0635"},{id:2764,region_name:"Hay el Jameaa - \u0627\u0644\u062c\u0627\u0645\u0639 \u0628\u0646\u062a \u062c\u0628\u064a\u0644 "},{id:2765,region_name:"Jmaijime - \u062c\u0645\u064a\u062c\u0645\u0629"},{id:2766,region_name:"Kafra Bent Jbeil - \u0643\u0641\u0631\u0627 \u0628\u0646\u062a \u062c\u0628\u064a\u0644"},{id:2767,region_name:"Kfar Dounine - \u0643\u0641\u0631 \u062f\u0648\u0646\u064a\u0646"},{id:2768,region_name:"Khirbit Silim - \u062e\u0631\u0628\u0629 \u0633\u0644\u0645"},{id:2769,region_name:"Kounine - \u0643\u0648\u0646\u064a\u0646"},{id:2770,region_name:"Maroun er Ras - \u0645\u0627\u0631\u0648\u0646 \u0627\u0644\u0631\u0627\u0633"},{id:2771,region_name:"Mazraat Aazze - \u0645\u0632\u0631\u0639\u0629 \u0639\u0632\u0647"},{id:2772,region_name:"Qalaouiye - \u0642\u0644\u0648\u064a\u0647"},{id:2773,region_name:"Qaouzah - \u0642\u0648\u0632\u062d"},{id:2774,region_name:"Qatmoun - \u0642\u0637\u0645\u0648\u0645"},{id:2775,region_name:"Rachaf - \u0631\u0634\u0627\u0641"},{id:2776,region_name:"Ramiye - \u0631\u0627\u0645\u064a\u0629 \u0628\u0646\u062a \u062c\u0628\u064a\u0644"},{id:2777,region_name:"Rmaich - \u0631\u0645\u064a\u0634"},{id:2778,region_name:"Safad el Battikh - \u0635\u0641\u062f \u0627\u0644\u0628\u0637\u064a\u062e"},{id:2779,region_name:"Salhani - \u0627\u0644\u0635\u0644\u062d\u0627\u0646\u064a"},{id:2780,region_name:"Soultaniye - \u0633\u0644\u0637\u0627\u0646\u064a\u0629 "},{id:2781,region_name:"Sribbine - \u0635\u0631\u0628\u064a\u0646"},{id:2782,region_name:"Taire - \u0637\u064a\u0631\u064a"},{id:2783,region_name:"Tebnine - \u062a\u0628\u0646\u064a\u0646"},{id:2784,region_name:"Yaroun - \u064a\u0627\u0631\u0648\u0646"},{id:2785,region_name:"Yater - \u064a\u0627\u0637\u0631"}]},{id:9,DistrictDescription:"El Nabatieh - \u0627\u0644\u0646\u0628\u0637\u064a\u0629",Cities:[{id:2786,region_name:"Aabba - \u0639\u0628\u0627"},{id:2787,region_name:"Aadchit ech Chqif - \u0639\u062f\u0634\u064a\u062a \u0627\u0644\u0634\u0642\u064a\u0641"},{id:2788,region_name:"Aali et Taher - \u0639\u0644\u064a \u0627\u0644\u0637\u0627\u0647\u0631"},{id:2789,region_name:"Aarnoun - \u0623\u0631\u0646\u0648\u0646"},{id:2790,region_name:"Aazze - \u0639\u0632\u0647"},{id:2791,region_name:"Ain Qana - \u0639\u064a\u0646 \u0642\u0627\u0646\u0627"},{id:2792,region_name:"Arab Salim - \u0639\u0631\u0628 \u0635\u0627\u0644\u064a\u0645"},{id:2793,region_name:"Braiqaa - \u0628\u0631\u064a\u0642\u0639"},{id:2794,region_name:"Charqiye - \u0634\u0631\u0642\u064a\u0629"},{id:2795,region_name:"Choukine - \u0634\u0648\u0643\u064a\u0646"},{id:2796,region_name:"Deir ez Zahrani - \u062f\u064a\u0631 \u0627\u0644\u0632\u0647\u0631\u0627\u0646\u064a"},{id:2797,region_name:"Doueir El Nabatieh - \u0627\u0644\u062f\u0648\u064a\u0631 \u0627\u0644\u0646\u0628\u0637\u064a\u0629"},{id:2798,region_name:"El Aaqide - \u0639\u0642\u064a\u062f\u0629 "},{id:2799,region_name:"El Bayad - \u0646\u0628\u0637\u064a\u0629 \u0627\u0644\u0628\u064a\u0627\u0636"},{id:2800,region_name:"El Midane - \u0627\u0644\u0645\u064a\u062f\u0627\u0646"},{id:2801,region_name:"Es Serail - \u0627\u0644\u0633\u0631\u0627\u064a"},{id:2802,region_name:"Habbouch - \u062d\u0628\u0648\u0634 "},{id:2803,region_name:"Hamra  En-Nabattiyeh - \u0627\u0644\u062d\u0645\u0631\u0627 \u0627\u0644\u0646\u0628\u0637\u064a\u0629"},{id:2804,region_name:"Harouf - \u062d\u0631\u0648\u0641"},{id:2805,region_name:"Hima Aarnoun - \u062d\u0645\u0649 \u0623\u0631\u0646\u0648\u0646"},{id:2806,region_name:"Hmaile - \u062d\u0645\u064a\u0644\u0629"},{id:2807,region_name:"Houmine el Faouqa - \u062d\u0648\u0645\u064a\u0646 \u0627\u0644\u0641\u0648\u0642\u0627"},{id:2808,region_name:"Houmine et Tahta - \u062d\u0648\u0645\u064a\u0646 \u0627\u0644\u062a\u062d\u062a\u0627"},{id:2809,region_name:"Insar - \u0625\u0646\u0635\u0627\u0631"},{id:2810,region_name:"Jaouhariye - \u062c\u0648\u0647\u0631\u064a\u0629"},{id:2811,region_name:"Jarjouaa - \u062c\u0631\u062c\u0648\u0639"},{id:2812,region_name:"Jbaa El Nabatieh - \u062c\u0628\u0627\u0639 \u0627\u0644\u0646\u0628\u0637\u064a\u0629"},{id:2813,region_name:"Jibchit - \u062c\u0628\u0634\u064a\u062a"},{id:2814,region_name:"Kafra - \u0643\u0641\u0631\u0627"},{id:2815,region_name:"Kfar Dajjal - \u0643\u0641\u0631\u062f\u062c\u0627\u0644"},{id:2816,region_name:"Kfar Fila - \u0643\u0641\u0631\u0641\u064a\u0644\u0627"},{id:2817,region_name:"Kfar Roummane - \u0643\u0641\u0631 \u0631\u0645\u0627\u0646"},{id:2818,region_name:"Kfar Sir - \u0643\u0641\u0631\u0635\u064a\u0631"},{id:2819,region_name:"Kfar Tebnit - \u0643\u0641\u0631 \u062a\u0628\u0646\u064a\u062a"},{id:2820,region_name:"Kfaroue - \u0643\u0641\u0631\u0648\u0629 \u0623\u0648 \u0628\u0641\u0631\u0648\u0629"},{id:2821,region_name:"Kfour El Nabatieh - \u0627\u0644\u0643\u0641\u0648\u0631 \u0627\u0644\u0646\u0628\u0637\u064a\u0629"},{id:2822,region_name:"Maifadoun - \u0645\u064a\u0641\u062f\u0648\u0646"},{id:2823,region_name:"Manzleh - \u0627\u0644\u0645\u0646\u0632\u0644\u0629"},{id:2824,region_name:"Mazraat Ain Bou Souar - \u0645\u0632\u0631\u0639\u0629 \u0639\u064a\u0646 \u0628\u0648\u0633\u0648\u0627\u0631"},{id:2825,region_name:"Mazraat Bsafour - \u0645\u0632\u0631\u0639\u0629 \u0628\u0635\u0641\u064f\u0648\u0631"},{id:2826,region_name:"Mazraat Chelbael - \u0645\u0632\u0631\u0639\u0629 \u0634\u0644\u0628\u0639\u0644"},{id:2827,region_name:"Mazraat Dmoul - \u0645\u0632\u0631\u0639\u0629 \u062f\u0645\u0648\u0644"},{id:2828,region_name:"Mazraat el Baiyad - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0628\u064a\u0627\u0636"},{id:2829,region_name:"Mazraat el Khraibe - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062e\u0631\u064a\u0628\u0629"},{id:2830,region_name:"Mazraat Kfar ej Jouz - \u0645\u0632\u0631\u0639\u0629 \u0643\u0641\u0631 \u062c\u0648\u0632"},{id:2831,region_name:"Mazraat Maqsam Aali et Taher - \u0645\u0632\u0631\u0639\u0629 \u0639\u0644\u064a \u0627\u0644\u0637\u0627\u0647\u0631"},{id:2832,region_name:"Mazraat Qalaat Meis - \u0645\u0632\u0631\u0639\u0629 \u0642\u0644\u0639\u0629 \u0645\u064a\u0633"},{id:2833,region_name:"Nabatiye el Faouqa - \u0646\u0628\u0637\u064a\u0629 \u0627\u0644\u0641\u0648\u0642\u0627"},{id:2834,region_name:"Nabatiye el Tahta - \u0646\u0628\u0637\u064a\u0629 \u0627\u0644\u062a\u062d\u062a\u0627"},{id:2835,region_name:"Nmairiye - \u0646\u0645\u064a\u0631\u064a\u0629"},{id:2836,region_name:"Qaaqaait ej Jisr - \u0642\u0639\u0642\u0639\u064a\u0629 \u0627\u0644\u062c\u0633\u0631"},{id:2837,region_name:"Qsaibe El Nabatieh - \u0642\u0635\u064a\u0628\u0629 \u0627\u0644\u0646\u0628\u0637\u064a\u0629"},{id:2838,region_name:"Roumine - \u0631\u0648\u0645\u064a\u0646"},{id:2839,region_name:"Sarba El Nabatieh - \u0635\u0631\u0628\u0627 \u0627\u0644\u0646\u0628\u0637\u064a\u0629"},{id:2840,region_name:"Sir el Gharbiye - \u0635\u064a\u0631 \u0627\u0644\u063a\u0631\u0628\u064a\u0629"},{id:2841,region_name:"Toul - \u062a\u0648\u0644"},{id:2842,region_name:"Yohmor - \u064a\u062d\u0645\u0631"},{id:2843,region_name:"Zaoutar ech Charqiye - \u0632\u0648\u0637\u0631 \u0627\u0644\u0634\u0631\u0642\u064a\u0629"},{id:2844,region_name:"Zaoutar el Gharbiye - \u0632\u0648\u0637\u0631 \u0627\u0644\u063a\u0631\u0628\u064a\u0629"},{id:2845,region_name:"Zebdine El Nabatieh - \u0632\u0628\u062f\u064a\u0646 \u0627\u0644\u0646\u0628\u0637\u064a\u0629"},{id:2846,region_name:"Zefta - \u0632\u0641\u062a\u0627"}]},{id:10,DistrictDescription:"Hasbaya - \u062d\u0627\u0635\u0628\u064a\u0627",Cities:[{id:2847,region_name:"Abou Qamha - \u0623\u0628\u0648 \u0642\u0645\u062d\u0629"},{id:2848,region_name:"Ain Jerfa - \u0639\u064a\u0646 \u062c\u0631\u0641\u0627"},{id:2849,region_name:"Ain Qenya - \u0639\u064a\u0646 \u0642\u0646\u064a\u0627"},{id:2850,region_name:"Ain Tanta - \u0639\u064a\u0646 \u062a\u0646\u062a\u0627 \u062d\u0627\u0635\u0628\u064a\u0627"},{id:2851,region_name:"Ayn et Tine - \u0639\u064a\u0646 \u0627\u0644\u062a\u064a\u0646\u0629 \u062d\u0627\u0635\u0628\u064a\u0627"},{id:2852,region_name:"Bathaniye - \u0628\u064a\u062a\u0633\u0646\u064a\u0627"},{id:2853,region_name:"Berghoz - \u0628\u0631\u063a\u0632"},{id:2854,region_name:"Chebaa - \u0634\u0628\u0639\u0627"},{id:2855,region_name:"Chouaia - \u0634\u0648\u064a\u0651\u0627 "},{id:2856,region_name:"Dehayrjate - \u0627\u0644\u062f\u062d\u064a\u0631\u062c\u0627\u062a"},{id:2857,region_name:"Dellafi - \u062f\u0644\u0627\u0641\u0629"},{id:2858,region_name:"El Majidiye - \u0645\u062c\u064a\u062f\u064a\u0629 \u062d\u0627\u0635\u0628\u064a\u0627"},{id:2859,region_name:"Fardis - \u0627\u0644\u0641\u0631\u062f\u064a\u0633"},{id:2860,region_name:"Fashkoul - \u0641\u0634\u0643\u0648\u0644"},{id:2861,region_name:"Halta Hasbaya - \u062d\u0644\u062a\u0627 \u062d\u0627\u0635\u0628\u064a\u0651\u0627"},{id:2862,region_name:"Hasbaiya - \u062d\u0627\u0635\u0628\u064a\u0651\u0627"},{id:2863,region_name:"Hebbariye - \u0647\u0628\u0651\u0627\u0631\u064a\u0629"},{id:2864,region_name:"Kaoukaba Hasbaya - \u0643\u0648\u0643\u0628\u0627 \u062d\u0627\u0635\u0628\u064a\u0651\u0627"},{id:2865,region_name:"Kfair - \u0643\u0641\u064a\u0631 \u0627\u0644\u0632\u064a\u062a"},{id:2866,region_name:"Kfar Chouba - \u0643\u0641\u0631 \u0634\u0648\u0628\u0627"},{id:2867,region_name:"Kfar Hamam - \u0643\u0641\u0631\u062d\u0645\u0627\u0645"},{id:2868,region_name:"Khallet el Ghazale - \u062e\u0644\u0629 \u0627\u0644\u063a\u0632\u0627\u0644\u0629"},{id:2869,region_name:"Khalouat el Biyada - \u062e\u0644\u0648\u0627\u062a \u0627\u0644\u0628\u064a\u0627\u0636\u0629"},{id:2870,region_name:"Khalouat Hasbaya - \u062e\u0644\u0648\u0627\u062a \u062d\u0627\u0635\u0628\u064a\u0651\u0627"},{id:2871,region_name:"Khirbet ed Dwayr - \u062e\u0631\u0628\u0629 \u0627\u0644\u062f\u0648\u064a\u0631"},{id:2872,region_name:"Khraibe Hasbaya - \u062e\u0631\u064a\u0628\u0629 \u062d\u0627\u0635\u0628\u064a\u0651\u0627"},{id:2873,region_name:"Mari - \u0645\u0627\u0631\u064a"},{id:2874,region_name:"Marj Ez Zouhour Dnaibe - \u0645\u0631\u062c \u0627\u0644\u0632\u0647\u0648\u0631 \u0627\u0644\u062f\u0646\u064a\u0628\u0629"},{id:2875,region_name:"Mazraat Qafoua - \u0645\u0632\u0631\u0639\u0629 \u0642\u0641\u0648\u0649"},{id:2876,region_name:"Mazraat Ras el Baidar - \u0645\u0632\u0631\u0639\u0629 \u0631\u0627\u0633 \u0627\u0644\u0628\u064a\u062f\u0631"},{id:2877,region_name:"Mimes - \u0645\u064a\u0645\u0633"},{id:2878,region_name:"Ouazzani - \u0648\u0632\u0627\u0646\u064a"},{id:2879,region_name:"Rachaiya el Foukhar - \u0631\u0627\u0634\u064a\u0651\u0627 \u0627\u0644\u0641\u062e\u0627\u0631"},{id:2880,region_name:"Slaiyeb - \u0635\u0644\u0627\u064a\u0628"},{id:2881,region_name:"Tallet el Qaaqour - \u062a\u0644\u0629 \u0627\u0644\u0642\u0639\u0642\u0648\u0631"},{id:2882,region_name:"Zaghla - \u0632\u063a\u0644\u0629"}]},{id:11,DistrictDescription:"Marjaayoun - \u0645\u0631\u062c\u0639\u064a\u0648\u0646",Cities:[{id:2883,region_name:" MAZRAAT ZAIYEH  - \u0645\u0632\u0631\u0639\u0629 \u0632\u0626\u064a\u0629"},{id:2884,region_name:"Aadaisse - \u0639\u062f\u064a\u0633\u0629 \u0645\u0631\u062c\u0639\u064a\u0648\u0646"},{id:2885,region_name:"Aadchit el Qoussair - \u0639\u062f\u0634\u064a\u062a \u0627\u0644\u0642\u0635\u064a\u0631"},{id:2886,region_name:"Aalmane - \u0639\u0644\u0645\u0627\u0646\u0629"},{id:2887,region_name:"Aamra - \u0639\u0645\u0631\u0629"},{id:2888,region_name:"Aarab el Louaize - \u0639\u0631\u0628 \u0627\u0644\u0644\u0648\u064a\u0632\u0629"},{id:2889,region_name:"Ain Aarab Marjaayoun - \u0639\u064a\u0646 \u0639\u0631\u0628 \u0645\u0631\u062c\u0639\u064a\u0648\u0646"},{id:2890,region_name:"Baiyouda - \u0628\u0648\u064a\u0636\u0629 \u0645\u0631\u062c\u0639\u064a\u0648\u0646"},{id:2891,region_name:"Beni Haiyane - \u0628\u0646\u064a \u062d\u064a\u0627\u0646"},{id:2892,region_name:"Blat Marjaayoun - \u0628\u0644\u0627\u0637 \u0645\u0631\u062c\u0639\u064a\u0648\u0646"},{id:2893,region_name:"Blida - \u0628\u0644\u064a\u062f\u0627"},{id:2894,region_name:"Borj El Mlouk - \u0628\u0631\u062c \u0627\u0644\u0645\u0644\u0648\u0643"},{id:2895,region_name:"Deir Mimas - \u062f\u064a\u0631 \u0645\u064a\u0645\u0627\u0633"},{id:2896,region_name:"Deir Siriane - \u062f\u064a\u0631 \u0633\u0631\u064a\u0627\u0646"},{id:2897,region_name:"Dibbine - \u062f\u0628\u064a\u0646"},{id:2898,region_name:"Houla - \u062d\u0648\u0644\u0627"},{id:2899,region_name:"Houra - \u062d\u0648\u0631\u0647"},{id:2900,region_name:"Ibl es Saqi - \u0625\u0628\u0644 \u0627\u0644\u0633\u0642\u064a"},{id:2901,region_name:"Jlali el Ghozlane - \u062c\u0644\u0627\u0644 \u0627\u0644\u063a\u0632\u0644\u0627\u0646"},{id:2902,region_name:"Kfar Kila - \u0643\u0641\u0631\u0643\u064a\u0644\u0627"},{id:2903,region_name:"Khiam - \u0627\u0644\u062e\u064a\u0627\u0645"},{id:2904,region_name:"Khirbe - \u062e\u0631\u0628\u0629 \u0628\u0631\u062c \u0627\u0644\u0645\u0644\u0648\u0643"},{id:2905,region_name:"Maissate - \u0627\u0644\u0645\u064a\u0633\u0627\u062a"},{id:2906,region_name:"Majdel Silim - \u0645\u062c\u062f\u0644 \u0633\u0644\u0645"},{id:2907,region_name:"Marjaayoun - \u0645\u0631\u062c\u0639\u064a\u0648\u0646"},{id:2908,region_name:"Markaba - \u0645\u0631\u0643\u0628\u0627"},{id:2909,region_name:"Mazraat Doumiat - \u0645\u0632\u0631\u0639\u0629 \u062f\u0645\u064a\u0627\u0637"},{id:2910,region_name:"Mazraat ej Jreine - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062c\u0631\u064a\u0646"},{id:2911,region_name:"Mazraat Sahsahiye - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0633\u0647\u0633\u0647\u064a\u0629"},{id:2912,region_name:"Meiss ej Jabal - \u0645\u064a\u0633 \u0627\u0644\u062c\u0628\u0644"},{id:2913,region_name:"Mhaibib - \u0645\u062d\u064a\u0628\u064a\u0628"},{id:2914,region_name:"Qabrikha - \u0642\u0628\u0631\u064a\u062e\u0627"},{id:2915,region_name:"Qalaat Doubai - \u0642\u0644\u0639\u0629 \u062f\u0628\u064a"},{id:2916,region_name:"Qantara - \u0642\u0646\u0637\u0631\u0629"},{id:2917,region_name:"Qlaiaa - \u0642\u0644\u064a\u0639\u0629"},{id:2918,region_name:"Qsair - \u0642\u0635\u064a\u0631"},{id:2919,region_name:"Rabb et Talatine - \u0631\u0628 \u0627\u0644\u062a\u0644\u0627\u062a\u064a\u0646"},{id:2920,region_name:"Sarda - \u0645\u0632\u0631\u0639\u0629  \u0633\u0631\u062f\u0629"},{id:2921,region_name:"Serail - \u0633\u0631\u0627\u064a "},{id:2922,region_name:"Souane Marjaayoun - \u0635\u0648\u0627\u0646\u0629 \u0645\u0631\u062c\u0639\u064a\u0648\u0646"},{id:2923,region_name:"Taibe Marjaayoun - \u0637\u064a\u0628\u0629 \u0645\u0631\u062c\u0639\u064a\u0648\u0646"},{id:2924,region_name:"Tallouse - \u0637\u0644\u0648\u0633\u0629"},{id:2925,region_name:"Touline - \u062a\u0648\u0644\u064a\u0646"}]}]},{id:6,GovernorateDescription:"Mount Lebanon - \u062c\u0628\u0644 \u0644\u0628\u0646\u0627\u0646",Districts:[{id:12,DistrictDescription:"Aley - \u0639\u0627\u0644\u064a\u0647",Cities:[{id:2926,region_name:"Aabey - \u0639\u0628\u064a\u0647"},{id:2927,region_name:"Aaley ej Jdide - \u0639\u0627\u0644\u064a\u0647 \u0627\u0644\u062c\u062f\u064a\u062f\u0629"},{id:2928,region_name:"Aamroussieh Choueifat - \u0639\u0645\u0631\u0648\u0633\u064a\u0629 \u0627\u0644\u0634\u0648\u064a\u0641\u0627\u062a"},{id:2929,region_name:"Aaramoun - \u0639\u0631\u0645\u0648\u0646"},{id:2930,region_name:"Aazzouniye - \u0627\u0644\u0639\u0632\u0648\u0646\u064a\u0647"},{id:2931,region_name:"Ain Al Saydeh -  \u0639\u064a\u0646 \u0627\u0644\u0633\u064a\u062f\u0629 "},{id:2932,region_name:"Ain Anoub - \u0639\u064a\u0646 \u0639\u0646\u0648\u0628"},{id:2933,region_name:"Ain Dara - \u0639\u064a\u0646 \u062f\u0627\u0631\u0647"},{id:2934,region_name:"Ain Drafil - \u0639\u064a\u0646 \u062f\u0631\u0627\u0641\u064a\u0644"},{id:2935,region_name:"Ain ej Jdide - \u0639\u064a\u0646 \u0627\u0644\u062c\u062f\u064a\u062f\u0629"},{id:2936,region_name:"Ain el Fraidis -  \u0639\u064a\u0646 \u0627\u0644\u0641\u0631\u064a\u062f\u064a\u0633 "},{id:2937,region_name:"Ain el Halzoun - \u0639\u064a\u0646 \u0627\u0644\u062d\u0644\u0632\u0648\u0646"},{id:2938,region_name:"Ain el Jaouze - \u0639\u064a\u0646 \u0627\u0644\u062c\u0648\u0632\u0647"},{id:2939,region_name:"Ain el Marj - \u0639\u064a\u0646 \u0627\u0644\u0645\u0631\u062c"},{id:2940,region_name:"Ain er Remmane - \u0639\u064a\u0646 \u0627\u0644\u0631\u0645\u0627\u0646\u0629"},{id:2941,region_name:"Ain Hala - \u0639\u064a\u0646 \u062d\u0627\u0644\u0627"},{id:2942,region_name:"Ain Ksour - \u0639\u064a\u0646 \u0643\u0633\u0648\u0631"},{id:2943,region_name:"Ain Trez - \u0639\u064a\u0646 \u062a\u0631\u0627\u0632"},{id:2944,region_name:"Ainab - \u0639\u064a\u0646\u0627\u0628"},{id:2945,region_name:"Aitat - \u0639\u064a\u062a\u0627\u062a"},{id:2946,region_name:"Aley - \u0639\u0627\u0644\u064a\u0647"},{id:2947,region_name:"Baaouerta - \u0628\u0639\u0648\u0631\u062a\u0647"},{id:2948,region_name:"Baissour - \u0628\u064a\u0635\u0648\u0631"},{id:2949,region_name:"Bchamoun - \u0628\u0634\u0627\u0645\u0648\u0646"},{id:2950,region_name:"Bdedoun - \u0628\u062f\u0627\u062f\u0648\u0646"},{id:2951,region_name:"Bedghane - \u0628\u062f\u063a\u0627\u0646"},{id:2952,region_name:"Bhamdoun ed Dayaa - \u0628\u062d\u0645\u062f\u0648\u0646 \u0627\u0644\u0636\u064a\u0639\u0629"},{id:2953,region_name:"Bhamdoun el Mhatta - \u0628\u062d\u0645\u062f\u0648\u0646 \u0627\u0644\u0645\u062d\u0637\u0629"},{id:2954,region_name:"Bhouara - \u0628\u062d\u0648\u0627\u0631\u0627"},{id:2955,region_name:"Bihat - \u0628\u0647\u0627\u062a"},{id:2956,region_name:"Bkhechtay - \u0628\u062e\u0634\u062a\u064a\u0647"},{id:2957,region_name:"Blaibel - \u0628\u0644\u064a\u0628\u0644"},{id:2958,region_name:"Bmahray - \u0628\u0645\u0647\u0631\u064a\u0647"},{id:2959,region_name:"Bmekkine - \u0628\u0645\u0643\u064a\u0646"},{id:2960,region_name:"Bnaiye - \u0627\u0644\u0628\u064a\u0646\u0647"},{id:2961,region_name:"Botros - \u0628\u0637\u0631\u0633"},{id:2962,region_name:"Bou Zraid - \u0628\u0648 \u0632\u0631\u064a\u062f\u0629"},{id:2963,region_name:"Bou Zraide - \u0628\u0648 \u0632\u0631\u064a\u062f\u0647"},{id:2964,region_name:"Bourdine - \u0628\u0631\u062f\u064a\u0646"},{id:2965,region_name:"Bsatine - \u0627\u0644\u0628\u0633\u0627\u062a\u064a\u0646"},{id:2966,region_name:"Bserrine - \u0628\u0633\u0631\u064a\u0646"},{id:2967,region_name:"Bsous - \u0628\u0633\u0648\u0633"},{id:2968,region_name:"Btalloun - \u0628\u0637\u0644\u0648\u0646"},{id:2969,region_name:"Btater - \u0628\u062a\u0627\u062a\u0631"},{id:2970,region_name:"Chamlikh - \u0634\u0627\u0645\u0644\u062e"},{id:2971,region_name:"Chanay - \u0634\u0627\u0646\u064a\u0647"},{id:2972,region_name:"Charoun - \u0634\u0627\u0631\u0648\u0646"},{id:2973,region_name:"Chartoun - \u0634\u0631\u062a\u0648\u0646"},{id:2974,region_name:"Chemlane - \u0634\u0645\u0644\u0627\u0646"},{id:2975,region_name:"Chqif Btalloun - \u0634\u0642\u064a\u0641 \u0628\u0637\u0644\u0648\u0646"},{id:2976,region_name:"Dahr El Ouahch - \u0636\u0647\u0631 \u0627\u0644\u0648\u062d\u0634"},{id:2977,region_name:"Daqqoun - \u062f\u0642\u0648\u0646"},{id:2978,region_name:"Deir Qoubil - \u062f\u064a\u0631 \u0642\u0648\u0628\u0644"},{id:2979,region_name:"Dfoun - \u062f\u0641\u0648\u0646"},{id:2980,region_name:"Doueir er Remmane - \u062f\u0648\u064a\u0631 \u0627\u0644\u0631\u0645\u0627\u0646"},{id:2981,region_name:"El Blat -  \u0628\u0644\u0627\u0637  \u0633\u0644\u0641\u0627\u064a\u0627"},{id:2982,region_name:"El Ftaihat - \u0627\u0644\u0641\u062a\u064a\u062d\u0627\u062a"},{id:2983,region_name:"El Ouata - \u0627\u0644\u0648\u0637\u0627"},{id:2984,region_name:"En Njassa - \u0627\u0644\u0646\u062c\u0627\u0635\u0629"},{id:2985,region_name:"Es Shwayfate - \u0627\u0644\u0634\u0648\u064a\u0641\u0627\u062a"},{id:2986,region_name:"Fsaqine - \u0641\u0633\u0627\u0642\u064a\u0646"},{id:2987,region_name:"Ghaboun - \u0627\u0644\u063a\u0627\u0628\u0648\u0646"},{id:2988,region_name:"Ghadir - \u063a\u0627\u062f\u064a\u0631"},{id:2989,region_name:"Habramoun - \u062d\u0628\u0631\u0645\u0648\u0646"},{id:2990,region_name:"Haret Chbib - \u062d\u0627\u0631\u0629 \u0634\u0628\u064a\u0628"},{id:2991,region_name:"Haret el Mir - \u062d\u0627\u0631\u0629 \u0627\u0644\u0645\u064a\u0631"},{id:2992,region_name:"Haret Salem - \u062d\u0627\u0631\u0629 \u0633\u0627\u0644\u0645"},{id:2993,region_name:"Hay el Aarab - \u062d\u064a \u0627\u0644\u0639\u0631\u0628"},{id:2994,region_name:"Hay es Sellom - \u062d\u064a \u0627\u0644\u0633\u0644\u0645"},{id:2995,region_name:"Hay es Sindiane - \u062d\u064a \u0627\u0644\u0633\u0646\u062f\u064a\u0627\u0646\u0629"},{id:2996,region_name:"Homs Oua Hama -  \u062d\u0645\u0635 \u0648\u062d\u0645\u0649"},{id:2997,region_name:"Houmal - \u062d\u0648\u0645\u0627\u0644"},{id:2998,region_name:"Ighmid - \u0627\u063a\u0645\u064a\u062f"},{id:2999,region_name:"Jabal El Aarid - \u062c\u0628\u0644 \u0627\u0644\u0639\u0631\u064a\u0636"},{id:3e3,region_name:"Jisr el Qadi - \u062c\u0633\u0631 \u0627\u0644\u0642\u0627\u0636\u064a"},{id:3001,region_name:"Kahale - \u0627\u0644\u0643\u062d\u0627\u0644\u0647"},{id:3002,region_name:"Kaifoun - \u0643\u064a\u0641\u0648\u0646"},{id:3003,region_name:"Kfar Aamaiy - \u0643\u0641\u0631\u0639\u0645\u064a\u0647"},{id:3004,region_name:"Kfar Matta - \u0643\u0641\u0631\u0645\u062a\u0649"},{id:3005,region_name:"Khalde - \u062e\u0644\u062f\u0629"},{id:3006,region_name:"Kliliye - \u0643\u0644\u064a\u0644\u0629"},{id:3007,region_name:"Maaroufiye - \u0645\u0639\u0631\u0648\u0641\u064a\u0629"},{id:3008,region_name:"Maasraiti -  \u0645\u0639\u0635\u0631\u064a\u062a\u064a  "},{id:3009,region_name:"Majdalaya - \u0645\u062c\u062f\u0644\u064a\u0627"},{id:3010,region_name:"Mansouriye bhamdoun -  \u0645\u0646\u0635\u0648\u0631\u064a\u0629 \u0628\u062d\u0645\u062f\u0648\u0646 "},{id:3011,region_name:"Mantra - \u0627\u0644\u0645\u0646\u0637\u0631\u0629"},{id:3012,region_name:"Marj Chartoun - \u0645\u0631\u062c \u0634\u0631\u062a\u0648\u0646"},{id:3013,region_name:"Mazraat el Boueit -  \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0628\u0648\u064a\u062a "},{id:3014,region_name:"Mazraat en Nahr -  \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0646\u0647\u0631 "},{id:3015,region_name:"Mechakhti - \u0645\u0634\u0627\u0642\u062a\u064a"},{id:3016,region_name:"Mechrefe -  \u0645\u0634\u0631\u0641\u0647 "},{id:3017,region_name:"Mejdel Baana -  \u0645\u062c\u062f\u0644 \u0628\u0639\u0646\u0627 "},{id:3018,region_name:"Mounsa Aaley - \u0627\u0644\u0645\u0648\u0646\u0633\u0647 \u0639\u0627\u0644\u064a\u0647"},{id:3019,region_name:"Mreijat Aley -  \u0645\u0631\u064a\u062c\u0627\u062a \u0639\u0627\u0644\u064a\u0647"},{id:3020,region_name:"Oumara Choueifat - \u0627\u0644\u0634\u0648\u064a\u0641\u0627\u062a \u0627\u0644\u0627\u0645\u0631\u0627\u0621"},{id:3021,region_name:"Qabr Chamoun -  \u0642\u0628\u0631 \u0634\u0645\u0648\u0646 "},{id:3022,region_name:"Qmatiye -  \u0642\u0645\u0627\u0637\u064a\u0629 "},{id:3023,region_name:"Qoubbe Choueifat - \u0642\u0628\u0629 \u0627\u0644\u0634\u0648\u064a\u0641\u0627\u062a"},{id:3024,region_name:"Ram Bchamoun - \u0631\u0627\u0645 \u0628\u0634\u0627\u0645\u0648\u0646"},{id:3025,region_name:"Ramliye -  \u0631\u0645\u0644\u064a\u0629 "},{id:3026,region_name:"Rechmaiya -  \u0631\u0634\u0645\u064a\u0627 "},{id:3027,region_name:"Rejme -  \u0631\u062c\u0645\u0629 "},{id:3028,region_name:"Remhala - \u0631\u0645\u062d\u0627\u0644\u0627"},{id:3029,region_name:"Rjoum - \u0631\u062c\u0648\u0645"},{id:3030,region_name:"Rouissat Sofar -  \u0631\u0648\u064a\u0633\u0627\u062a \u0635\u0648\u0641\u0631 "},{id:3031,region_name:"Rouisset en Naamane -  \u0631\u0648\u064a\u0633\u0629 \u0627\u0644\u0646\u0639\u0645\u0627\u0646 "},{id:3032,region_name:"Sarahmoul -  \u0633\u0631\u062d\u0645\u0648\u0644 "},{id:3033,region_name:"Sibaal - \u0633\u0628\u0639\u0644"},{id:3034,region_name:"Sil - \u0633\u064a\u0644"},{id:3035,region_name:"Silfaya - \u0633\u0644\u0641\u0627\u064a\u0627"},{id:3036,region_name:"Sofar -  \u0635\u0648\u0641\u0631 "},{id:3037,region_name:"Souq el Gharb - \u0633\u0648\u0642 \u0627\u0644\u063a\u0631\u0628"},{id:3038,region_name:"Taazniye -  \u062a\u0639\u0632\u0627\u0646\u064a\u0629 "},{id:3039,region_name:"Touayte Ain Dara - \u062a\u0648\u064a\u062a\u0647 \u0639\u064a\u0646 \u062f\u0627\u0631\u0647"},{id:3040,region_name:"Watiye - \u0648\u0627\u0637\u064a\u0629"},{id:3041,region_name:"Yinnar - \u064a\u0646\u0627\u0631"}]},{id:13,DistrictDescription:"Baabda - \u0628\u0639\u0628\u062f\u0627",Cities:[{id:3042,region_name:"Aabadiye - \u0639\u0628\u0627\u062f\u064a\u0629"},{id:3043,region_name:"Aarbaniye - \u0639\u0631\u0628\u0627\u0646\u064a\u0629"},{id:3044,region_name:"Abbdiyeh al Jadideh - \u0639\u0628\u0627\u062f\u064a\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629"},{id:3045,region_name:"Ain er Roummane - \u0639\u064a\u0646 \u0627\u0644\u0631\u0645\u0627\u0646\u0629 \u0628\u0639\u0628\u062f\u0627"},{id:3046,region_name:"Ain es Sihha - \u0639\u064a\u0646 \u0627\u0644\u0635\u062d\u0629"},{id:3047,region_name:"Ain Mouaffaq - \u0639\u064a\u0646 \u0645\u0648\u0641\u0642"},{id:3048,region_name:"Arayia - \u0639\u0627\u0631\u064a\u0627"},{id:3049,region_name:"Arsoun - \u0627\u0631\u0635\u0648\u0646"},{id:3050,region_name:"Baabda - \u0628\u0639\u0628\u062f\u0627"},{id:3051,region_name:"Baajour - \u0628\u0639\u062c\u0648\u0631"},{id:3052,region_name:"Baalchmay - \u0628\u0639\u0644\u0634\u0645\u064a\u0647"},{id:3053,region_name:"Baalchmay ej Jdide - \u0628\u0639\u0644\u0634\u0645\u064a\u0647 \u0627\u0644\u062c\u062f\u064a\u062f\u0629"},{id:3054,region_name:"Bhala - \u0628\u062d\u0627\u0644\u0627"},{id:3057,region_name:"Bmariam - \u0628\u0645\u0631\u064a\u0645"},{id:3059,region_name:"Boutchai - \u0628\u0637\u0634\u064a\u0647"},{id:3060,region_name:"Brazilia - \u0628\u0631\u0627\u0632\u064a\u0644\u064a\u0627"},{id:3061,region_name:"Bsaba & Ouadi Dlab - \u0628\u0633\u0627\u0628\u0627 \u0648\u0627\u062f\u064a \u0627\u0644\u062f\u0644\u0628"},{id:3062,region_name:"Btaaline - \u0628\u062a\u0639\u0644\u064a\u0646"},{id:3063,region_name:"Btebyat - \u0628\u062a\u0628\u064a\u0627\u062a"},{id:3064,region_name:"Btekhnay - \u0628\u062a\u062e\u0646\u0627\u064a"},{id:3065,region_name:"Bzebdine - \u0628\u0632\u0628\u062f\u064a\u0646"},{id:3066,region_name:"Chatila - \u0634\u0627\u062a\u064a\u0644\u0627"},{id:3067,region_name:"Chbaniye - \u0634\u0628\u0627\u0646\u064a\u0629"},{id:3069,region_name:"Chmaissa - \u0634\u0645\u064a\u0633\u0629"},{id:3070,region_name:"Chouit - \u0634\u0648\u064a\u062a"},{id:3071,region_name:"Cite Sportive - \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0629"},{id:3072,region_name:"Dahr el Baidar - \u0636\u0647\u0631 \u0627\u0644\u0628\u064a\u062f\u0631"},{id:3073,region_name:"Deir el Harf - \u062f\u064a\u0631 \u0627\u0644\u062d\u0631\u0641"},{id:3074,region_name:"Deir Khouna - \u062f\u064a\u0631 \u062e\u0648\u0646\u0629"},{id:3075,region_name:"Deir Mar Elias - \u062f\u064a\u0631 \u0645\u0627\u0631 \u0627\u0644\u064a\u0627\u0633"},{id:3076,region_name:"Deir Mar Youhanna - \u062f\u064a\u0631 \u0645\u0627\u0631 \u064a\u0648\u062d\u0646\u0627"},{id:3077,region_name:"Deir Saiya - \u062f\u064a\u0631 \u0633\u064a\u0627"},{id:3078,region_name:"Dhour Al Aabaydiyeh - \u0636\u0647\u0648\u0631 \u0627\u0644\u0639\u0628\u0627\u062f\u064a\u0629"},{id:3079,region_name:"Dlaibe - \u062f\u0644\u064a\u0628\u0647"},{id:3080,region_name:"El Baqle - \u0628\u0642\u0644\u0629"},{id:3081,region_name:"El Maadan - \u0627\u0644\u0645\u0639\u0627\u062f\u0646"},{id:3082,region_name:"El Marmah - \u0645\u0631\u0645\u062d"},{id:3083,region_name:"El Mdaoura - \u0645\u062f\u0648\u0631\u0627"},{id:3085,region_name:"Er Rihaniye - \u0631\u064a\u062d\u0627\u0646\u064a\u0629"},{id:3087,region_name:"Es Sheime - \u0627\u0644\u0634\u064a\u0645\u0629"},{id:3089,region_name:"Ez Zire - \u0632\u064a\u0631\u0647"},{id:3090,region_name:"Faiyadiye - \u0641\u064a\u0627\u0636\u064a\u0629"},{id:3091,region_name:"Falougha - \u0641\u0627\u0644\u0648\u063a\u0627"},{id:3092,region_name:"Fsakin - \u0641\u0633\u0627\u0642\u064a\u0646 \u062a\u0631\u0634\u064a\u0634"},{id:3093,region_name:"Furn ech Chebak - \u0641\u0631\u0646 \u0627\u0644\u0634\u0628\u0627\u0643"},{id:3095,region_name:"Hadet - \u062d\u062f\u062b"},{id:3096,region_name:"Hammana - \u062d\u0645\u0627\u0646\u0627"},{id:3097,region_name:"Haql Hassan - \u062d\u0642\u0644 \u062d\u0633\u0646"},{id:3098,region_name:"Haret El Botm - \u062d\u0627\u0631\u0629 \u0627\u0644\u0628\u0637\u0645"},{id:3099,region_name:"Haret el Mjadle - \u062d\u0627\u0631\u0629 \u0627\u0644\u0645\u062c\u0627\u062f\u0644\u0629"},{id:3100,region_name:"Haret er Roum - \u062d\u0627\u0631\u0629 \u0627\u0644\u0631\u0648\u0645"},{id:3101,region_name:"Haret es Set - \u062d\u0627\u0631\u0629 \u0627\u0644\u0633\u062a"},{id:3102,region_name:"Haret Hamze - \u062d\u0627\u0631\u0629 \u062d\u0645\u0632\u0629"},{id:3104,region_name:"Hasbaiya el Metn - \u062d\u0627\u0635\u0628\u064a\u0651\u0627 \u0627\u0644\u0645\u062a\u0646"},{id:3105,region_name:"Hazmiye - \u062d\u0627\u0632\u0645\u064a\u0629 "},{id:3106,region_name:"Hlaliye - \u0647\u0644\u0627\u0644\u064a\u0629"},{id:3107,region_name:"Jamhour - \u062c\u0645\u0647\u0648\u0631"},{id:3109,region_name:"Jouar el Haouz - \u062c\u0648\u0627\u0631 \u0627\u0644\u062d\u0648\u0632"},{id:3110,region_name:"Jouret Arsoun - \u062c\u0648\u0631\u0629 \u0627\u0631\u0635\u0648\u0646"},{id:3111,region_name:"Kahlouniye - \u0643\u062d\u0644\u0648\u0646\u064a\u0629"},{id:3112,region_name:"Kfar Selouane - \u0643\u0641\u0631\u0633\u0644\u0648\u0627\u0646"},{id:3113,region_name:"Kfarchima - \u0643\u0641\u0631\u0634\u064a\u0645\u0627"},{id:3114,region_name:"Khalouat - \u062e\u0644\u0648\u0627\u062a"},{id:3115,region_name:"Khraibe Baabda - \u062e\u0631\u064a\u0628\u0629 \u0628\u0639\u0628\u062f\u0627"},{id:3116,region_name:"Knisse - \u0643\u0646\u064a\u0633\u0629 \u0628\u0639\u0628\u062f\u0627"},{id:3118,region_name:"Louaize - \u0644\u0648\u064a\u0632\u0629"},{id:3119,region_name:"Mar Taqla - \u0645\u0627\u0631 \u062a\u0642\u0644\u0627"},{id:3120,region_name:"Mazzraat Maaissra - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0645\u0639\u064a\u0635\u0631\u0629"},{id:3121,region_name:"Mdeyrej - \u0645\u062f\u064a\u0631\u062c"},{id:3122,region_name:"Merdache - \u0645\u0631\u062f\u0627\u0634\u0629"},{id:3124,region_name:"Mzayraa - \u0645\u0632\u064a\u0631\u0639\u0629 \u0628\u0639\u0628\u062f\u0627"},{id:3125,region_name:"Ouadi Chahrour el Olia - \u0648\u0627\u062f\u064a \u0634\u062d\u0631\u0648\u0631 \u0627\u0644\u0639\u0644\u064a\u0627"},{id:3126,region_name:"Ouadi Chahrour el Soufla - \u0648\u0627\u062f\u064a \u0634\u062d\u0631\u0648\u0631 \u0627\u0644\u0633\u0641\u0644\u0649"},{id:3127,region_name:"Qalaa - \u0627\u0644\u0642\u0644\u0639\u0629"},{id:3128,region_name:"Qirtada - \u0642\u0631\u0637\u0627\u062f\u0629"},{id:3129,region_name:"Qornayel - \u0642\u0631\u0646\u0627\u064a\u0644"},{id:3130,region_name:"Qoubbeiaa - \u0642\u0628\u064a\u0639"},{id:3131,region_name:"Qraiye - \u0642\u0631\u064a\u0629"},{id:3132,region_name:"Qsaibe - \u0642\u0635\u064a\u0628\u0629"},{id:3133,region_name:"Qtale - \u0642\u062a\u0627\u0644\u0629"},{id:3134,region_name:"Ras el Harf - \u0631\u0627\u0633 \u0627\u0644\u062d\u0631\u0641"},{id:3135,region_name:"Ras el Metn - \u0631\u0627\u0633 \u0627\u0644\u0645\u062a\u0646"},{id:3136,region_name:"Rouaisset Salima - \u0631\u0648\u064a\u0633\u0627\u062a \u0635\u0644\u064a\u0645\u0627"},{id:3137,region_name:"Rouisset el Ballout - \u0631\u0648\u064a\u0633\u0629 \u0627\u0644\u0628\u0644\u0648\u0637"},{id:3138,region_name:"Sabra  - \u0635\u0628\u0631\u0627"},{id:3139,region_name:"Salima Baabda - \u0635\u0644\u064a\u0645\u0627 \u0628\u0639\u0628\u062f\u0627"},{id:3140,region_name:"Saqi Ain el Hadath - \u0633\u0642\u064a \u0639\u064a\u0646 \u0627\u0644\u062d\u062f\u062b "},{id:3141,region_name:"Sibnay - \u0633\u0628\u0646\u064a\u0647"},{id:3143,region_name:"Tarchich - \u062a\u0631\u0634\u064a\u0634"},{id:3144,region_name:"Warware - \u0627\u0644\u0648\u0631\u0648\u0627\u0631"},{id:3145,region_name:"Yarzeh - \u0627\u0644\u064a\u0631\u0632\u0629"},{id:3146,region_name:"Zandouqa - \u0632\u0646\u062f\u0648\u0642\u0629"},{id:3147,region_name:"Zouaitini - \u0632\u0648\u064a\u062a\u064a\u0646\u0629 "}]},{id:14,DistrictDescription:"Chouf - \xa0\u0627\u0644\u0634\u0648\u0641",Cities:[{id:3148,region_name:"Aalmane Ech Chouf - \u0639\u0644\u0645\u0627\u0646 \u0627\u0644\u0634\u0648\u0641"},{id:3149,region_name:"Aammatour - \u0639\u0645\u0651\u0627\u0637\u0648\u0631"},{id:3150,region_name:"Aammiq chouf - \u0639\u0645\u064a\u0642 \u0627\u0644\u0634\u0648\u0641"},{id:3151,region_name:"Aanout - \u0639\u0627\u0646\u0648\u062a"},{id:3152,region_name:"Aaqline - \u0639\u0642\u0644\u064a\u0646"},{id:3153,region_name:"Aatrine - \u0639\u062a\u0631\u064a\u0646"},{id:3154,region_name:"Aazibett tahta - \u0639\u0632\u0628\u064a\u0627\u062a \u0627\u0644\u062a\u062d\u062a\u0627"},{id:3155,region_name:"Ain Aazime - \u0639\u064a\u0646 \u0639\u0632\u064a\u0645\u0629"},{id:3156,region_name:"Ain Bal - \u0639\u064a\u0646\u0628\u0627\u0644"},{id:3157,region_name:"Ain El Assad - \u0639\u064a\u0646 \u0627\u0644\u0627\u0633\u062f"},{id:3158,region_name:"Ain el Haour - \u0639\u064a\u0646 \u0627\u0644\u062d\u0648\u0631"},{id:3159,region_name:"Ain Ouzain - \u0639\u064a\u0646 \u0648\u0632\u064a\u0646"},{id:3160,region_name:"Ain Qeni - \u0639\u064a\u0646 \u0642\u0646\u064a"},{id:3161,region_name:"Ain Zhalta - \u0639\u064a\u0646 \u0632\u062d\u0644\u062a\u0627"},{id:3162,region_name:"Almane ed Daiaa - \u0639\u0644\u0645\u0627\u0646 \u0627\u0644\u0636\u064a\u0639\u0629 "},{id:3163,region_name:"Baadarane - \u0628\u0639\u062f\u0631\u0627\u0646"},{id:3164,region_name:"Baal en Naame - \u0628\u0639\u0644 \u0627\u0644\u0646\u0627\u0639\u0645\u0647"},{id:3165,region_name:"Baaqline - \u0628\u0639\u0642\u0644\u064a\u0646"},{id:3166,region_name:"Baasir - \u0628\u0639\u0627\u0635\u064a\u0631"},{id:3167,region_name:"Bachqiye - \u0628\u0627\u0634\u0642\u064a\u0629"},{id:3168,region_name:"Baiqoun - \u0628\u064a\u0642\u0648\u0646"},{id:3169,region_name:"Baqaoun - \u0628\u0642\u0639\u0648\u0646 "},{id:3170,region_name:"Baqse - \u0628\u0642\u0633\u0647"},{id:3171,region_name:"Barja - \u0628\u0631\u062c\u0627"},{id:3172,region_name:"Barouk - \u0627\u0644\u0628\u0627\u0631\u0648\u0643"},{id:3173,region_name:"Bater - \u0628\u0627\u062a\u0631"},{id:3174,region_name:"Batloun - \u0628\u062a\u0644\u0648\u0646"},{id:3175,region_name:"Bchatfine - \u0628\u0634\u062a\u0641\u064a\u0646"},{id:3176,region_name:"Bchella Ech Chouf - \u0628\u0634\u0644\u0647 \u0627\u0644\u0634\u0648\u0641"},{id:3177,region_name:"Beit ed Dine - \u0628\u064a\u062a \u0627\u0644\u062f\u064a\u0646"},{id:3178,region_name:"Benoeti - \u0628\u0646\u0648\u0627\u062a\u064a"},{id:3179,region_name:"Bire - \u0628\u064a\u0631\u0629 "},{id:3180,region_name:"Bkechtine - \u0628\u0643\u0634\u062a\u064a\u0646"},{id:3181,region_name:"Bkifa - \u0628\u0643\u064a\u0641\u0627"},{id:3182,region_name:"Boqaata - \u0628\u0642\u0639\u0627\u062a\u0627"},{id:3183,region_name:"Borjein - \u0627\u0644\u0628\u0631\u062c\u064a\u0646"},{id:3184,region_name:"Boudine - \u0628\u0648\u062f\u064a\u0646"},{id:3185,region_name:"Boutme - \u0628\u0637\u0645\u0629"},{id:3186,region_name:"Bqaiaa - \u0628\u0642\u064a\u0639\u0629"},{id:3187,region_name:"Brih  - \u0628\u0631\u064a\u062d"},{id:3188,region_name:"Bsaba - \u0628\u0633\u0627\u0628\u0627"},{id:3189,region_name:"Bsennay - \u0628\u0635\u0651\u0646\u064a"},{id:3190,region_name:"Bzina - \u0628\u0632\u064a\u0646\u0627"},{id:3191,region_name:"Chhim - \u0634\u062d\u064a\u0645"},{id:3192,region_name:"Chmaarine - \u0634\u0645\u0639\u0631\u064a\u0646"},{id:3193,region_name:"Chmis chouf - \u0634\u0645\u064a\u0633 "},{id:3194,region_name:"Choualiq Deir El Qamar - \u0634\u0648\u0627\u0644\u064a\u0642 \u062f\u064a\u0631 \u0627\u0644\u0642\u0645\u0631"},{id:3195,region_name:"Chourit - \u0634\u0648\u0631\u064a\u062a "},{id:3196,region_name:"Dabche - \u062f\u0628\u0634\u0647"},{id:3197,region_name:"Dahr ech Chqif - \u0636\u0647\u0631 \u0627\u0644\u0634\u0642\u064a\u0641"},{id:3198,region_name:"Dahr el Aaqline - \u0636\u0647\u0631 \u0639\u0642\u0644\u064a\u0646"},{id:3199,region_name:"Dahr el Mghara - \u0636\u0647\u0631 \u0627\u0644\u0645\u063a\u0627\u0631\u0629"},{id:3200,region_name:"Dalhoun - \u062f\u0644\u0647\u0648\u0646"},{id:3201,region_name:"Damour - \u0627\u0644\u062f\u0627\u0645\u0648\u0631"},{id:3202,region_name:"Daraiya - \u062f\u0627\u0631\u064a\u0627 \u0627\u0644\u0634\u0648\u0641"},{id:3203,region_name:"Dawha - \u0627\u0644\u062f\u0648\u062d\u0629"},{id:3204,region_name:"Deir Baba - \u062f\u064a\u0631 \u0628\u0627\u0628\u0627"},{id:3205,region_name:"Deir Dourite - \u062f\u064a\u0631 \u062f\u0648\u0631\u064a\u062a"},{id:3206,region_name:"Deir El MKhales - \u062f\u064a\u0631 \u0627\u0644\u0645\u062e\u0644\u0635 \u0627\u0644\u0634\u0648\u0641"},{id:3207,region_name:"Deir el Qamar - \u062f\u064a\u0631 \u0627\u0644\u0642\u0645\u0631"},{id:3208,region_name:"Deir er Rahbat - \u062f\u064a\u0631 \u0627\u0644\u0631\u0627\u0647\u0628\u0627\u062a"},{id:3209,region_name:"Deir es Saide - \u062f\u064a\u0631 \u0627\u0644\u0633\u064a\u062f\u0629"},{id:3210,region_name:"Deir Qouche - \u062f\u064a\u0631 \u0643\u0648\u0634\u0647"},{id:3211,region_name:"Delghani - \u062f\u0644\u063a\u0627\u0646\u064a"},{id:3212,region_name:"Dhour Ain Al Haour - \u0636\u0647\u0648\u0631 \u0639\u064a\u0646 \u0627\u0644\u062d\u0648\u0631"},{id:3213,region_name:"Dibbiye - \u062f\u0628\u064a\u0629"},{id:3214,region_name:"Dmit - \u062f\u0645\u064a\u062a"},{id:3215,region_name:"Douair Ed Dibbiye - \u062f\u0648\u064a\u0631 \u0627\u0644\u062f\u0628\u064a\u0629"},{id:3216,region_name:"Douair El Hara - \u062f\u0648\u064a\u0631 \u0627\u0644\u062d\u0627\u0631\u0629"},{id:3217,region_name:"Ech Charbine - \u0634\u0631\u0628\u064a\u0646 "},{id:3218,region_name:"Ed Dalhamiye - \u062f\u0644\u0647\u0645\u064a\u0647 \u0627\u0644\u062f\u0628\u064a\u0647"},{id:3219,region_name:"Ej Jreid - \u062c\u0631\u064a\u062f"},{id:3220,region_name:"El Aaqbe joun - \u0639\u0642\u0628\u0629 \u062c\u0648\u0646"},{id:3221,region_name:"El Battal - \u0628\u0637\u0627\u0644"},{id:3222,region_name:"El Kherbe - \u0627\u0644\u062e\u0631\u0628\u0629 \u0627\u0644\u0634\u0648\u0641"},{id:3223,region_name:"El Khraibe - \u062e\u0631\u064a\u0628\u0629 \u0628\u064a\u0631\u0629 \u0627\u0644\u0634\u0648\u0641"},{id:3224,region_name:"El Meghraiqa - \u0645\u063a\u0631\u064a\u0642\u0627"},{id:3225,region_name:"El Msayed - \u0627\u0644\u0645\u0635\u0627\u064a\u062f"},{id:3226,region_name:"El Qateaa - \u0642\u062a\u064a\u0639\u0627"},{id:3227,region_name:"Eskandarouna - \u0625\u0633\u0643\u0646\u062f\u0631\u0648\u0646\u0629 "},{id:3228,region_name:"Et Taamir - \u062a\u0639\u0645\u064a\u0631"},{id:3229,region_name:"Faouarat Jaafar - \u0641\u0648\u0627\u0631\u0629 \u062c\u0639\u0641\u0631"},{id:3230,region_name:"Fraidiss - \u0641\u0631\u064a\u062f\u064a\u0633 \u0627\u0644\u0634\u0648\u0641"},{id:3231,region_name:"Ghabet Jaafar - \u063a\u0627\u0628\u0629 \u062c\u0639\u0641\u0631"},{id:3232,region_name:"Ghandouriye - \u063a\u0646\u062f\u0648\u0631\u064a\u0629"},{id:3233,region_name:"Gharife - \u063a\u0631\u064a\u0641\u0629"},{id:3234,region_name:"Haffet el Hajal - \u062d\u0627\u0641\u0629 \u0627\u0644\u062d\u062c\u0644"},{id:3235,region_name:"Halioune el Faouqa - \u062d\u0644\u064a\u0648\u0646\u0629 \u0627\u0644\u0641\u0648\u0642\u0627"},{id:3236,region_name:"Halioune et Tahta - \u062d\u0644\u064a\u0648\u0646\u0629 \u0627\u0644\u062a\u062d\u062a\u0627"},{id:3237,region_name:"Hamra Ed Damour - \u062d\u0645\u0631\u0627 \u0627\u0644\u062f\u0627\u0645\u0648\u0631"},{id:3238,region_name:"Hardouch - \u062d\u0631\u062f\u0648\u0634"},{id:3239,region_name:"Haret Aalmane - \u062d\u0627\u0631\u0629 \u0639\u0644\u0645\u0627\u0646"},{id:3240,region_name:"Haret Baasir - \u062d\u0627\u0631\u0629 \u0628\u0639\u0627\u0635\u064a\u0631"},{id:3241,region_name:"Haret Beit Madi - \u062d\u0627\u0631\u0629 \u0628\u064a\u062a \u0645\u0627\u0636\u064a"},{id:3242,region_name:"Haret el Ouasta - \u062d\u0627\u0631\u0629 \u0627\u0644\u0648\u0627\u0633\u0637\u0629"},{id:3243,region_name:"Haret en Naame - \u062d\u0627\u0631\u0629 \u0627\u0644\u0646\u0627\u0639\u0645\u0647"},{id:3244,region_name:"Haret Jandal - \u062d\u0627\u0631\u0629 \u062c\u0646\u062f\u0644"},{id:3245,region_name:"Hasrout - \u062d\u0635\u0631\u0648\u062a"},{id:3246,region_name:"Hjaijiye - \u062d\u062c\u0627\u062c\u064a\u0629"},{id:3247,region_name:"Jadra - \u062c\u062f\u0631\u0627"},{id:3248,region_name:"Jahliye - \u062c\u0627\u0647\u0644\u064a\u0629"},{id:3249,region_name:"Jall Bou Haidar - \u062c\u0644 \u0628\u0648 \u062d\u064a\u062f\u0631"},{id:3250,region_name:"Jamailiye - \u062c\u0645\u064a\u0644\u064a\u0629"},{id:3251,region_name:"Jbaa - \u062c\u0628\u0627\u0639"},{id:3252,region_name:"Jdaide chouf - \u062c\u062f\u064a\u062f\u0629 \u0627\u0644\u0634\u0648\u0641"},{id:3253,region_name:"Je'ayel - \u062c\u0639\u0627\u064a\u0644"},{id:3254,region_name:"Jiblaye - \u062c\u0628\u0644\u0627\u064a\u0627"},{id:3255,region_name:"Jiye - \u062c\u064a\u0629"},{id:3256,region_name:"Jlailiye - \u062c\u0644\u064a\u0644\u064a\u0629"},{id:3257,region_name:"Joun - \u062c\u0648\u0646"},{id:3258,region_name:"Kahlouniye chouf - \u0643\u062d\u0644\u0648\u0646\u064a\u0629 \u0627\u0644\u0634\u0648\u0641"},{id:3259,region_name:"Ketermaya - \u0643\u062a\u0631\u0645\u0627\u064a\u0627"},{id:3260,region_name:"Kfar Faqoud - \u0643\u0641\u0631\u0641\u0627\u0642\u0648\u062f"},{id:3261,region_name:"Kfar Hai - \u0643\u0641\u0631 \u062d\u064a"},{id:3262,region_name:"Kfar Hamal - \u0643\u0641\u0631 \u062d\u0645\u0644"},{id:3263,region_name:"Kfar Him - \u0643\u0641\u0631\u062d\u064a\u0645"},{id:3264,region_name:"Kfar Nabrakh - \u0643\u0641\u0631\u0646\u0628\u0631\u062e"},{id:3265,region_name:"Kfar Niss - \u0643\u0641\u0631\u0646\u064a\u0633"},{id:3266,region_name:"Kfar Qatra - \u0643\u0641\u0631\u0642\u0637\u0631\u0629"},{id:3267,region_name:"Khalouat Jernaya - \u062e\u0644\u0648\u0627\u062a \u062c\u0631\u0646\u0627\u064a\u0627"},{id:3268,region_name:"Khiam Ed Damour - \u062e\u064a\u0627\u0645 \u0627\u0644\u062f\u0627\u0645\u0648\u0631"},{id:3269,region_name:"Khirbet Dabach - \u062e\u0631\u0628\u0629 \u062f\u0628\u0634"},{id:3270,region_name:"Khirbit Bisri - \u062e\u0631\u0628\u0629 \u0628\u0633\u0631\u064a"},{id:3271,region_name:"Khraibe chouf - \u062e\u0631\u064a\u0628\u0629 \u0627\u0644\u0634\u0648\u0641"},{id:3272,region_name:"Knisse chouf - \u0643\u0646\u064a\u0633\u0629 \u0627\u0644\u0634\u0648\u0641"},{id:3273,region_name:"Lahbiye - \u0644\u0647\u0628\u064a\u0629"},{id:3274,region_name:"Maaniye - \u0645\u0639\u0646\u064a\u0647"},{id:3275,region_name:"Maaser Beit ed Dine - \u0645\u0639\u0627\u0635\u0631 \u0628\u064a\u062a \u0627\u0644\u062f\u064a\u0646"},{id:3276,region_name:"Maasser ech Chouf - \u0645\u0639\u0627\u0635\u0631 \u0627\u0644\u0634\u0648\u0641"},{id:3277,region_name:"Majdalouna - \u0645\u062c\u062f\u0644\u0648\u0646\u0627"},{id:3278,region_name:"Majdel el Meouch - \u0645\u062c\u062f\u0644 \u0627\u0644\u0645\u0639\u0648\u0634"},{id:3279,region_name:"Maqsabe - \u0645\u0642\u0635\u0628\u0629"},{id:3280,region_name:"Mar Mikheyel Ed Damour - \u0645\u0627\u0631 \u0645\u062e\u0627\u064a\u0644 \u0627\u0644\u062f\u0627\u0645\u0648\u0631"},{id:3281,region_name:"Mar Taqla En Naame - \u0645\u0627\u0631 \u062a\u0642\u0644\u0627 \u0627\u0644\u0646\u0627\u0639\u0645\u0647"},{id:3282,region_name:"Marj Aali - \u0645\u0631\u062c \u0639\u0644\u064a"},{id:3283,region_name:"Marj Barja - \u0645\u0631\u062c \u0628\u0631\u062c\u0627"},{id:3284,region_name:"Marj Ketermaya - \u0645\u0631\u062c \u0643\u062a\u0631\u0645\u0627\u064a\u0627"},{id:3285,region_name:"Marjiat - \u0645\u0631\u062c\u064a\u0627\u062a"},{id:3286,region_name:"Marjiat Borjein - \u0628\u0631\u062c\u064a\u0646 "},{id:3287,region_name:"Mazboud - \u0645\u0632\u0628\u0648\u062f"},{id:3288,region_name:"Mazmoura - \u0645\u0632\u0645\u0648\u0631\u0629"},{id:3289,region_name:"Mazraat ech Chouf - \u0645\u0632\u0631\u0639\u0629"},{id:3290,region_name:"Mazraat ed Dahr - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0636\u0647\u0631"},{id:3291,region_name:"Mazraat ed Doueir - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062f\u0648\u064a\u0631"},{id:3292,region_name:"Mazraat El Barghoutiye - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0628\u0631\u063a\u0648\u062a\u064a\u0629"},{id:3293,region_name:"Mazraat er Rzaniye - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0631\u0632\u064e\u0627\u0646\u064a\u0629"},{id:3294,region_name:"Mazraat ez Zaitounniyeh - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0632\u064a\u062a\u0648\u0646\u0647"},{id:3295,region_name:"Mazraat Khafiche - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062e\u0641\u064a\u0634"},{id:3296,region_name:"Mechref - \u0645\u0634\u0631\u0641"},{id:3297,region_name:"Mermata - \u0645\u0631\u0645\u0627\u062a\u0627"},{id:3298,region_name:"Mghaire - \u0645\u063a\u064a\u0631\u0647 "},{id:3299,region_name:"Mghairiye Chouf - \u0645\u063a\u064a\u0631\u064a\u0629 \xa0\u0627\u0644\u0634\u0648\u0641"},{id:3300,region_name:"Mouhtaqara - \u0645\u062d\u062a\u0642\u0631\u0647"},{id:3301,region_name:"Moukhtara - \u0645\u062e\u062a\u0627\u0631\u0629"},{id:3302,region_name:"Mristi - \u0645\u0631\u0633\u062a\u0649"},{id:3303,region_name:"Mtaile - \u0645\u0637\u064a\u0644\u0629"},{id:3304,region_name:"Mtairiyat - \u0645\u0637\u064a\u0631\u064a\u0629"},{id:3305,region_name:"Mtoulle  - \u0645\u0637\u0644\u0647 "},{id:3306,region_name:"Naame - \u0646\u0627\u0639\u0645\u0647"},{id:3307,region_name:"Nabaa es Safa - \u0646\u0628\u0639 \u0627\u0644\u0635\u0641\u0627"},{id:3308,region_name:"Nabi Younos - \u0646\u0628\u064a \u064a\u0648\u0646\u0633"},{id:3309,region_name:"Niha - \u0646\u064a\u062d\u0627"},{id:3310,region_name:"Ouadi Abou Youssef - \u0648\u0627\u062f\u064a \u0627\u0628\u0648 \u064a\u0648\u0633\u0641"},{id:3311,region_name:"Ouadi Bnahle - \u0648\u0627\u062f\u064a \u0628\u0646\u062d\u0644\u064a\u0647"},{id:3312,region_name:"Ouadi Deir Dourit - \u0648\u0627\u062f\u064a \u062f\u064a\u0631 \u062f\u0648\u0631\u064a\u062a"},{id:3313,region_name:"Ouadi ed Deir - \u0648\u0627\u062f\u064a \u0627\u0644\u062f\u064a\u0631"},{id:3314,region_name:"Ouadi es Sitt - \u0648\u0627\u062f\u064a \u0627\u0644\u0633\u062a"},{id:3315,region_name:"Ouadi Ez Zeyni - \u0648\u0627\u062f\u064a \u0627\u0644\u0632\u064a\u0646\u0629"},{id:3316,region_name:"Ouarhaniye - \u0648\u0631\u0647\u0627\u0646\u064a\u0629"},{id:3317,region_name:"Qalaat el Hosn - \u0642\u0644\u0639\u0629 \u0627\u0644\u062d\u0635\u0646"},{id:3318,region_name:"Qalaat En Nimiri - \u0642\u0644\u0639\u0629 \u0627\u0644\u0646\u0645\u0631\u064a"},{id:3319,region_name:"Qassoube - \u0642\u0635\u0648\u0628\u0629"},{id:3320,region_name:"Qraiaa - \u0642\u0631\u064a\u0639\u0629"},{id:3321,region_name:"Quardaniye - \u0648\u0631\u062f\u0627\u0646\u064a\u0647"},{id:3322,region_name:"Ras Aalous - \u0631\u0627\u0633 \u0639\u0644\u0648\u0633"},{id:3323,region_name:"Rmaile - \u0631\u0645\u064a\u0644\u0629 "},{id:3324,region_name:"Saadiyat - \u0627\u0644\u0633\u0639\u062f\u064a\u0627\u062a"},{id:3325,region_name:"Sabouniye - \u0635\u0627\u0628\u0648\u0646\u064a\u0629"},{id:3326,region_name:"Sahl Ej Jiye - \u0633\u0647\u0644 \u0627\u0644\u062c\u064a\u0629"},{id:3327,region_name:"Samqaniye - \u0633\u0645\u0642\u0627\u0646\u064a\u0629"},{id:3328,region_name:"Saraouniye - \u0633\u0631\u0639\u0648\u0646\u064a\u0629"},{id:3329,region_name:"Sibline - \u0633\u0628\u0644\u064a\u0646"},{id:3330,region_name:"Sirjbal - \u0633\u0631\u062c\u0628\u0627\u0644"},{id:3331,region_name:"Souane Bsaba - \u0635\u0648\u0627\u0646\u0629 \u0628\u0633\u0627\u0628\u0627"},{id:3332,region_name:"Traile - \u062a\u0631\u064a\u0644\u0647"},{id:3333,region_name:"Zaarour - \u0632\u0639\u0631\u0648\u0631"},{id:3334,region_name:"Zaarouriye - \u0632\u0639\u0631\u0648\u0631\u064a\u0629"}]},{id:15,DistrictDescription:"El Meten - \u0627\u0644\u0645\u062a\u0646",Cities:[{id:3335,region_name:"Aabdine - \u0639\u0628\u062f\u064a\u0646 \u0646\u0642\u0627\u0634"},{id:3336,region_name:"Aafs - \u0639\u0641\u0635"},{id:3337,region_name:"Aairoun - \u0639\u064a\u0631\u0648\u0646"},{id:3338,region_name:"Aammariye - \u0639\u0645\u0651\u0627\u0631\u064a\u0629"},{id:3339,region_name:"Aaqbe Zalqa - \u0639\u0642\u0628\u0629 \u0627\u0644\u0632\u0644\u0642\u0627"},{id:3340,region_name:"Aaraar - \u0639\u0631\u0639\u0627\u0631"},{id:3341,region_name:"Aatchane - \u0639\u0637\u0634\u0627\u0646\u0629"},{id:3342,region_name:"Abou Mizane - \u0623\u0628\u0648 \u0645\u064a\u0632\u0627\u0646"},{id:3343,region_name:"Ain Aalaq - \u0639\u064a\u0646 \u0639\u0644\u0642"},{id:3344,region_name:"Ain Aar - \u0639\u064a\u0646 \u0639\u0627\u0631"},{id:3345,region_name:"Ain El Kharroube - \u0639\u064a\u0646 \u0627\u0644\u062e\u0631\u0648\u0628\u0629"},{id:3346,region_name:"Ain El Qabou - \u0639\u064a\u0646 \u0627\u0644\u0642\u0628\u0648"},{id:3347,region_name:"Ain el Qassis - \u0639\u064a\u0646 \u0627\u0644\u0642\u0633\u064a\u0633"},{id:3348,region_name:"Ain el-Kach - \u0639\u064a\u0646 \u0627\u0644\u0642\u0634"},{id:3349,region_name:"Ain Er Rihane el meten - \u0639\u064a\u0646 \u0627\u0644\u0631\u064a\u062d\u0627\u0646 \u0627\u0644\u0645\u062a\u0646"},{id:3350,region_name:"Ain Es Safsaf el meten - \u0639\u064a\u0646 \u0627\u0644\u0635\u0641\u0635\u0627\u0641 \u0627\u0644\u0645\u062a\u0646"},{id:3351,region_name:"Ain Es Sindiane - \u0639\u064a\u0646 \u0627\u0644\u0633\u0646\u062f\u064a\u0627\u0646\u0629"},{id:3352,region_name:"Ain et Toufaha - \u0639\u064a\u0646 \u0627\u0644\u062a\u0641\u0627\u062d\u0629"},{id:3353,region_name:"Ain Najm - \u0639\u064a\u0646 \u0646\u062c\u0645"},{id:3354,region_name:"Ain Saade - \u0639\u064a\u0646 \u0633\u0639\u0627\u062f\u0629"},{id:3355,region_name:"Ain Zaitoune - \u0639\u064a\u0646 \u0627\u0644\u0632\u064a\u062a\u0648\u0646\u0629"},{id:3356,region_name:"Aintoura el meten - \u0639\u064a\u0646\u0637\u0648\u0631\u0629 \u0627\u0644\u0645\u062a\u0646"},{id:3357,region_name:"Aiyoun - \u0639\u064a\u0648\u0646 \u0627\u0644\u0645\u062a\u0646"},{id:3358,region_name:"Antelias - \u0627\u0646\u0637\u0644\u064a\u0627\u0633"},{id:3359,region_name:"Baabdat - \u0628\u0639\u0628\u062f\u0627\u062a"},{id:3360,region_name:"Baaqrif - \u0628\u0639\u0642\u0631\u064a\u0641"},{id:3361,region_name:"Balouaa - \u0628\u0627\u0644\u0648\u0639"},{id:3362,region_name:"Baouchriye - \u0628\u0648\u0634\u0631\u064a\u0629"},{id:3363,region_name:"Baskinta - \u0628\u0633\u0643\u0646\u062a\u0627"},{id:3364,region_name:"Bchellama - \u0628\u0634\u0644\u0627\u0645\u0629"},{id:3365,region_name:"Beit Chebab - \u0628\u064a\u062a \u0634\u0628\u0627\u0628"},{id:3366,region_name:"Beit El Koukko - \u0628\u064a\u062a \u0627\u0644\u0643\u0643\u0648"},{id:3367,region_name:"Beit Meri - \u0628\u064a\u062a \u0645\u0631\u064a"},{id:3368,region_name:"Belle Vue - \u0628\u0644\u0651\u0641\u0648"},{id:3369,region_name:"Beqaata En Nahr - \u0628\u0642\u0639\u0627\u062a\u0627 \u0627\u0644\u0646\u0647\u0631"},{id:3370,region_name:"Bhannes - \u0628\u062d\u0646\u0633"},{id:3371,region_name:"Bhersaf - \u0628\u062d\u0631\u0635\u0627\u0641"},{id:3372,region_name:"Biaqout - \u0628\u064a\u0627\u0642\u0648\u062a"},{id:3373,region_name:"Bikfayia - \u0628\u0643\u0641\u064a\u0627"},{id:3374,region_name:"Bnabil - \u0628\u0646\u0627\u0628\u064a\u0644"},{id:3375,region_name:"Bolonia - \u0628\u0648\u0644\u0648\u0646\u064a\u0627"},{id:3376,region_name:"Borj Hammoud - \u0628\u0631\u062c \u062d\u0645\u0651\u0648\u062f"},{id:3377,region_name:"Bqennaya - \u0628\u0642\u0646\u0627\u064a\u0627"},{id:3378,region_name:"Broumana - \u0628\u0631\u0645\u0627\u0646\u0627 \u0627\u0644\u0645\u062a\u0646"},{id:3379,region_name:"Bsalim - \u0628\u0635\u0627\u0644\u064a\u0645"},{id:3380,region_name:"Bsatine Ain Saade - \u0628\u0633\u0627\u062a\u064a\u0646 \u0639\u064a\u0646 \u0633\u0639\u0627\u062f\u0629"},{id:3381,region_name:"Bsifrine - \u0628\u0633\u0641\u0631\u064a\u0646"},{id:3382,region_name:"Bteghrine - \u0628\u062a\u063a\u0631\u064a\u0646"},{id:3383,region_name:"Chaouiye - \u0634\u0627\u0648\u064a\u0629"},{id:3384,region_name:"Chbouq - \u0634\u0628\u0648\u0642"},{id:3385,region_name:"Cherchar - \u0634\u0631\u0634\u0627\u0631"},{id:3386,region_name:"Cherin - \u0634\u0631\u064a\u0646"},{id:3387,region_name:"Chmis Antelias - \u0634\u0645\u064a\u0633 \u0623\u0646\u0637\u0644\u064a\u0627\u0633"},{id:3388,region_name:"Chouaiya - \u0634\u0648\u064a\u0627"},{id:3389,region_name:"Choueir - \u0634\u0648\u064a\u0631"},{id:3390,region_name:"Dahr Broummana - \u0636\u0647\u0631 \u0628\u0631\u0645\u0627\u0646\u0627"},{id:3391,region_name:"Dahr el Bacheq - \u0636\u0647\u0631 \u0627\u0644\u0628\u0627\u0634\u0642"},{id:3392,region_name:"Dahr el Hossein - \u0636\u0647\u0631 \u0627\u0644\u062d\u0633\u064a\u0646 \u0627\u0644\u0645\u062a\u0646"},{id:3393,region_name:"Dahr Es Souane Meten - \u0636\u0647\u0631 \u0627\u0644\u0635\u0648\u0627\u0646 \u0627\u0644\u0645\u062a\u0646"},{id:3394,region_name:"Daoura - \u062f\u0648\u0631\u0629 "},{id:3395,region_name:"Daychouniye - \u062f\u064a\u0634\u0648\u0646\u064a\u0629"},{id:3396,region_name:"Dbaiye - \u0636\u0628\u064a\u0629"},{id:3397,region_name:"Deir Chamra - \u062f\u064a\u0631 \u0634\u0645\u0631\u0627"},{id:3398,region_name:"Deir el Qalaa - \u062f\u064a\u0631 \u0627\u0644\u0642\u0644\u0639\u0629"},{id:3399,region_name:"Deir es Salib - \u062f\u064a\u0631 \u0627\u0644\u0635\u0644\u064a\u0628"},{id:3400,region_name:"Deir Ma Yohanna El Khenchara - \u062f\u064a\u0631\u0645\u0627\u0631 \u064a\u0648\u062d\u0646\u0627 \u0627\u0644\u062e\u0646\u0634\u0627\u0631\u0629"},{id:3401,region_name:"Deir Mar Chaaya - \u062f\u064a\u0631 \u0645\u0627\u0631 \u0634\u0639\u064a\u0627"},{id:3402,region_name:"Deir Mar Jergos - \u062f\u064a\u0631 \u0645\u0627\u0631 \u062c\u0631\u062c\u0633"},{id:3403,region_name:"Deir Mar Simaane - \u062f\u064a\u0631 \u0645\u0627\u0631 \u0633\u0645\u0639\u0627\u0646"},{id:3404,region_name:"Deir Tamich - \u062f\u064a\u0631 \u0637\u0627\u0645\u064a\u0634"},{id:3405,region_name:"Deir-er-Raai es Saleh - \u062f\u064a\u0631 \u0627\u0644\u0631\u0627\u0639\u064a \u0627\u0644\u0635\u0627\u0644\u062d"},{id:3406,region_name:"Dekouane - \u062f\u0643\u0648\u0627\u0646\u0629"},{id:3407,region_name:"Delb - \u062f\u0644\u0628"},{id:3408,region_name:"Dhour Ech Choueir - \u0636\u0647\u0648\u0631 \u0627\u0644\u0634\u0648\u064a\u0631"},{id:3409,region_name:"Dik El Mehdi - \u062f\u064a\u0643 \u0627\u0644\u0645\u062d\u062f\u064a"},{id:3410,region_name:"Douar - \u062f\u0648\u0627\u0631"},{id:3411,region_name:"Ej Jouaniye - \u0627\u0644\u062c\u0648\u0627\u0646\u064a\u0629"},{id:3412,region_name:"El Borj El Khenchara - \u0628\u0631\u062c \u0627\u0644\u062e\u0646\u0634\u0627\u0631\u0629"},{id:3413,region_name:"El Braij Qornet Chahouane - \u0628\u0631\u064a\u062c \u0642\u0631\u0646\u0629 \u0634\u0647\u0648\u0627\u0646"},{id:3414,region_name:"El Firdaous - \u0641\u0631\u062f\u0648\u0633"},{id:3415,region_name:"El Habach - \u062d\u0628\u0627\u0634"},{id:3416,region_name:"El Loueize - \u0644\u0648\u064a\u0632\u0629 \u0646\u0642\u0627\u0634"},{id:3417,region_name:"El Machrah - \u0645\u0634\u0631\u062d "},{id:3418,region_name:"El Manazil - \u0645\u0646\u0627\u0632\u0644"},{id:3419,region_name:"El Qalaa - \u0642\u0644\u0639\u0629"},{id:3420,region_name:"El Qalaa Sin el fil - \u0642\u0644\u0639\u0629 \u0633\u0646 \u0627\u0644\u0641\u064a\u0644"},{id:3421,region_name:"En Naas - \u0646\u0639\u0635"},{id:3422,region_name:"En Nabaa - \u0627\u0644\u0646\u0628\u0639\u0647"},{id:3423,region_name:"Er Rabie - \u0631\u0627\u0628\u064a\u0647"},{id:3424,region_name:"Er Raouda - \u0631\u0648\u0636\u0629"},{id:3425,region_name:"Er Rouaisse - \u0631\u0648\u064a\u0633\u0629 \u0628\u0631\u0645\u0627\u0646\u0627"},{id:3426,region_name:"Et Tabche - \u0637\u0628\u0634\u0629"},{id:3427,region_name:"Fanar - \u0627\u0644\u0641\u0646\u0627\u0631"},{id:3428,region_name:"Fanar ej Jdid - \u0641\u0646\u0627\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629"},{id:3429,region_name:"Faouar - \u0641\u0648\u0627\u0631"},{id:3430,region_name:"Faouar el meten - \u0641\u0648\u0627\u0631 \u0627\u0644\u0645\u062a\u0646"},{id:3431,region_name:"Fraike - \u0641\u0631\u064a\u0643\u0647"},{id:3432,region_name:"Ghabe - \u063a\u0627\u0628\u0629 \u0627\u0644\u0645\u0633\u0642\u0649"},{id:3433,region_name:"Ghabet Bolonia - \u063a\u0627\u0628\u0629 \u0628\u0648\u0644\u0648\u0646\u064a\u0627"},{id:3434,region_name:"Gharouch - \u063a\u0627\u0631\u0648\u0634"},{id:3435,region_name:"Hamlaya - \u062d\u0645\u0644\u0627\u064a\u0627"},{id:3436,region_name:"Haret el Bellane - \u062d\u0627\u0631\u0629 \u0627\u0644\u0628\u0644\u0627\u0646"},{id:3437,region_name:"Haret el Cheikh - \u062d\u0627\u0631\u0629 \u0627\u0644\u0634\u064a\u062e"},{id:3438,region_name:"Haret El Ghouarni - \u062d\u0627\u0631\u0629 \u0627\u0644\u063a\u0648\u0627\u0631\u0646\u064a"},{id:3439,region_name:"Hbous - \u062d\u0628\u0648\u0633"},{id:3440,region_name:"Horch Tabet - \u062d\u0631\u0634 \u062a\u0627\u0628\u062a"},{id:3441,region_name:"Jall Ed Dib - \u062c\u0644 \u0627\u0644\u062f\u064a\u0628"},{id:3442,region_name:"Jdaide el Meten - \u062c\u062f\u064a\u062f\u0629 \u0627\u0644\u0645\u062a\u0646"},{id:3443,region_name:"Jisr El Bacha - \u062c\u0633\u0631 \u0627\u0644\u0628\u0627\u0634\u0627"},{id:3444,region_name:"Jouar - \u062c\u0648\u0627\u0631 \u0627\u0644\u0645\u062a\u0646"},{id:3445,region_name:"Jouret El Ballout - \u062c\u0648\u0631\u0629 \u0627\u0644\u0628\u0644\u0648\u0637"},{id:3446,region_name:"Kafra El Meten - \u0643\u0641\u0631\u0627 \u0627\u0644\u0645\u062a\u0646"},{id:3447,region_name:"Kfar Aaqab - \u0643\u0641\u0631\u0639\u0642\u0627\u0628"},{id:3448,region_name:"Kfartay - \u0643\u0641\u0631\u062a\u064a\u0647 "},{id:3449,region_name:"Khalle - \u062e\u0644\u0629 \u0627\u0644\u0645\u062a\u064a\u0646"},{id:3450,region_name:"Khenchara - \u062e\u0646\u0634\u0627\u0631\u0629"},{id:3451,region_name:"Khirbit el Aadass - \u062e\u0631\u0628\u0629 \u0627\u0644\u0639\u062f\u0633"},{id:3452,region_name:"Ksayfiyeh - \u0642\u0635\u064a\u0641\u064a\u0629"},{id:3453,region_name:"Machraa - \u0645\u0634\u0631\u0639"},{id:3454,region_name:"Majdel Tarchich - \u0645\u062c\u062f\u0644 \u062a\u0631\u0634\u064a\u0634"},{id:3455,region_name:"Majzoub - \u0645\u062c\u0630\u0648\u0628"},{id:3456,region_name:"Makhadet Nahr el Kalb - \u0645\u062e\u0627\u0636\u0629 \u0646\u0647\u0631 \u0627\u0644\u0643\u0644\u0628"},{id:3457,region_name:"Mamboukh - \u0627\u0644\u0645\u0645\u0628\u0648\u062e"},{id:3458,region_name:"Mansouriye - \u0645\u0646\u0635\u0648\u0631\u064a\u0629"},{id:3459,region_name:"Mar Aabda el Mshammar - \u062f\u064a\u0631 \u0645\u0627\u0631 \u0639\u0628\u062f\u0627 \u0627\u0644\u0645\u0634\u0645\u0631"},{id:3460,region_name:"Mar Boutrous Karm El- Tine - \u0645\u0627\u0631 \u0628\u0637\u0631\u0633 \u0643\u0631\u0645 \u0627\u0644\u062a\u064a\u0646"},{id:3461,region_name:"Mar Mkhayel Bnabil - \u0645\u0627\u0631 \u0645\u062e\u0627\u064a\u0644 \u0628\u0646\u0627\u0628\u064a\u0644"},{id:3462,region_name:"Mar Mousa Ed Daouar - \u0645\u0627\u0631 \u0645\u0648\u0633\u0649 \u0627\u0644\u062f\u0648\u0627\u0631"},{id:3463,region_name:"Mar Roukoz -  \u0645\u0627\u0631 \u0631\u0648\u0643\u0632"},{id:3464,region_name:"Marj Baskinta - \u0645\u0631\u062c \u0628\u0633\u0643\u0646\u062a\u0627"},{id:3465,region_name:"Marjaba - \u0645\u0631\u062c\u0628\u0627"},{id:3466,region_name:"Masqa - \u0627\u0644\u0645\u0633\u0642\u0649"},{id:3467,region_name:"Mayasse - \u0645\u064a\u0627\u0633\u0629"},{id:3468,region_name:"Mazraat Beit Ech Chaar - \u0645\u0632\u0631\u0639\u0629 \u0628\u064a\u062a \u0627\u0644\u0634\u0639\u0651\u0627\u0631"},{id:3469,region_name:"Mazraat Deir Aaoukar - \u0645\u0632\u0631\u0639\u0629 \u062f\u064a\u0631 \u0639\u0648\u0643\u0631"},{id:3470,region_name:"Mazraat El Hdaira - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062d\u0636\u064a\u0631\u0629"},{id:3471,region_name:"Mazraat Yachoua - \u0645\u0632\u0631\u0639\u0629 \u064a\u0634\u0648\u0639"},{id:3472,region_name:"Mchaymcheh - \u0645\u0634\u064a\u0645\u0634\u0629"},{id:3473,region_name:"Mcheikha - \u0645\u0634\u064a\u062e\u0627"},{id:3474,region_name:"Mezher - \u0645\u0632\u0647\u0631"},{id:3475,region_name:"Mhaydse - \u0645\u062d\u064a\u062f\u062b\u0629 \u0627\u0644\u0645\u062a\u0646"},{id:3476,region_name:"Mkalless - \u0645\u0643\u0644\u0633"},{id:3477,region_name:"Montiverdi - \u0645\u0646\u062a\u0641\u0631\u062f\u064a"},{id:3478,region_name:"Mountazah - \u0645\u0646\u062a\u0632\u0647"},{id:3479,region_name:"Mrah Ghanem - \u0645\u0631\u0627\u062d \u063a\u0627\u0646\u0645"},{id:3480,region_name:"Mrouj - \u0627\u0644\u0645\u0631\u0648\u062c"},{id:3481,region_name:"Mtaileb - \u0645\u0637\u064a\u0644\u0628"},{id:3482,region_name:"Mtein - \u0627\u0644\u0645\u062a\u064a\u0646"},{id:3483,region_name:"Mzakke - \u0645\u0632\u0643\u0629"},{id:3484,region_name:"Nabay - \u0646\u0627\u0628\u064a\u0647"},{id:3485,region_name:"Naqqach - \u0646\u0642\u0627\u0634"},{id:3486,region_name:"Ouadi Chahine - \u0648\u0627\u062f\u064a \u0634\u0627\u0647\u064a\u0646"},{id:3487,region_name:"Ouadi ed Delb - \u0648\u0627\u062f\u064a \u0627\u0644\u062f\u0644\u0628"},{id:3488,region_name:"Ouadi El Amine - \u0648\u0627\u062f\u064a \u0627\u0644\u0627\u0645\u064a\u0646"},{id:3489,region_name:"Ouadi El Karm - \u0648\u0627\u062f\u064a \u0627\u0644\u0643\u0631\u0645 \u0627\u0644\u0645\u062a\u0646"},{id:3490,region_name:"Ouata El Mrouj - \u0648\u0637\u0649 \u0627\u0644\u0645\u0631\u0648\u062c"},{id:3491,region_name:"Qaaqour - \u0627\u0644\u0642\u0639\u0642\u0648\u0631"},{id:3492,region_name:"Qanat Bakich - \u0642\u0646\u0627\u0629 \u0628\u0627\u0643\u064a\u0634"},{id:3493,region_name:"Qennabet Broummana - \u0642\u0646\u0627\u0628\u0629 \u0628\u0631\u0645\u0627\u0646\u0627"},{id:3494,region_name:"Qennabet Salima - \u0642\u0646\u0627\u0628\u0629 \u0635\u0644\u064a\u0645\u0627"},{id:3495,region_name:"Qnaitra El Meten - \u0642\u0646\u064a\u0637\u0631\u0629 \u0627\u0644\u0645\u062a\u0646"},{id:3496,region_name:"Qornet Chahouane - \u0642\u0631\u0646\u0629 \u0634\u0647\u0648\u0627\u0646"},{id:3497,region_name:"Qornet El Hamra - \u0642\u0631\u0646\u0629 \u0627\u0644\u062d\u0645\u0631\u0627"},{id:3498,region_name:"Qottara Aintouret - \u0642\u0637\u0627\u0631\u0629 \u0639\u064a\u0646\u0637\u0648\u0631\u0629 \u0627\u0644\u0645\u062a\u0646"},{id:3499,region_name:"Raboue - \u0631\u0628\u0648\u0629"},{id:3500,region_name:"Ramie - \u0631\u0627\u0645\u064a\u0629 "},{id:3501,region_name:"Raqayeq - \u0631\u0642\u0627\u064a\u0642"},{id:3502,region_name:"Ras el Jdaide - \u0631\u0627\u0633 \u0627\u0644\u062c\u062f\u064a\u062f\u0629"},{id:3503,region_name:"Roumie - \u0631\u0648\u0645\u064a\u0647 \u0627\u0644\u0645\u062a\u0646"},{id:3504,region_name:"Sabtiye - \u0633\u0628\u062a\u064a\u0647"},{id:3505,region_name:"Sad el Baouchriye - \u0633\u062f \u0627\u0644\u0628\u0648\u0634\u0631\u064a\u0629"},{id:3506,region_name:"Sannine - \u0635\u0646\u064a\u0646"},{id:3507,region_name:"Saqeit El Misk - \u0633\u0627\u0642\u064a\u0629 \u0627\u0644\u0645\u0633\u0643"},{id:3508,region_name:"Sfaile - \u0633\u0641\u064a\u0644\u0629"},{id:3509,region_name:"sfaileh Bikfaya - \u0633\u0641\u064a\u0644\u0629 \u0628\u0643\u0641\u064a\u0627"},{id:3510,region_name:"Sijn ej Jdid - \u0633\u062c\u0646 \u0627\u0644\u062c\u062f\u064a\u062f"},{id:3511,region_name:"Sinn el Fil - \u0633\u0646 \u0627\u0644\u0641\u064a\u0644"},{id:3512,region_name:"Tall ez Zaatar - \u062a\u0644 \u0627\u0644\u0632\u0639\u062a\u0631"},{id:3513,region_name:"Wata Amaret Chalhoub - \u0627\u0644\u0648\u0637\u0649 \u0639\u0645\u0627\u0631\u0629 \u0634\u0644\u0647\u0648\u0628"},{id:3514,region_name:"Zaaitriye - \u0632\u0639\u064a\u062a\u0631\u064a\u0647"},{id:3515,region_name:"Zabbougha - \u0632\u0628\u0648\u063a\u0627"},{id:3516,region_name:"Zaghrine El Meten - \u0632\u063a\u0631\u064a\u0646 \u0627\u0644\u0645\u062a\u0646"},{id:3517,region_name:"Zahriye El Meten - \u0632\u0627\u0647\u0631\u064a\u0629 \u0627\u0644\u0645\u062a\u0646"},{id:3518,region_name:"Zalqa - \u0627\u0644\u0632\u0644\u0642\u0627"},{id:3519,region_name:"Zaraaoun - \u0632\u0631\u0639\u0648\u0646"},{id:3520,region_name:"Zikrit - \u0632\u0643\u0631\u064a\u062a"},{id:3521,region_name:"Zouk el Kharab - \u0630\u0648\u0642 \u0627\u0644\u062e\u0631\u0627\u0628"}]},{id:16,DistrictDescription:"Jbeil - \u062c\u0628\u064a\u0644",Cities:[{id:3522,region_name:"Aabeidat - \u0639\u0628\u064a\u062f\u0627\u062a"},{id:3523,region_name:"Aaboud - \u0639\u0628\u0648\u062f"},{id:3524,region_name:"Aafs jbeil - \u0639\u0641\u0635 "},{id:3525,region_name:"Aainat - \u0639\u064a\u0646\u0627\u062a"},{id:3526,region_name:"Aalita - \u0639\u0627\u0644\u064a\u062a\u0627"},{id:3527,region_name:"Aamchit - \u0639\u0645\u0634\u064a\u062a"},{id:3528,region_name:"Aannaya - \u0639\u0646\u064e\u0627\u064a\u0627"},{id:3529,region_name:"Aaouaini - \u0639\u0648\u064a\u0646\u064a"},{id:3530,region_name:"Aaqoura - \u0639\u0627\u0642\u0648\u0631\u0629"},{id:3531,region_name:"Aarab el Lahib - \u0639\u0631\u0628 \u0627\u0644\u0644\u0647\u064a\u0628"},{id:3532,region_name:"Aarasta - \u0639\u0631\u0633\u062a\u0627"},{id:3533,region_name:"Aayoun el Aalaq - \u0639\u064a\u0648\u0646 \u0627\u0644\u0639\u0644\u0627\u0642"},{id:3534,region_name:"Adonis - \u0627\u062f\u0648\u0646\u064a\u0633"},{id:3535,region_name:"Afqa - \u0627\u0641\u0642\u0627"},{id:3536,region_name:"Ain Bqechqoch - \u0639\u064a\u0646 \u0628\u0642\u0634\u0642\u0634"},{id:3537,region_name:"Ain ed Deir - \u0639\u064a\u0646 \u0627\u0644\u062f\u064a\u0631"},{id:3538,region_name:"Ain Ed Delbe Jbeil - \u0639\u064a\u0646 \u0627\u0644\u062f\u0644\u0628\u0629 \u062c\u0628\u064a\u0644"},{id:3539,region_name:"Ain el Ghouaibe - \u0639\u064a\u0646 \u0627\u0644\u063a\u0648\u064a\u0628\u0629"},{id:3540,region_name:"Ain el Qadah - \u0639\u064a\u0646 \u0627\u0644\u0642\u062f\u062d"},{id:3541,region_name:"Ain es Salib - \u0639\u064a\u0646 \u0627\u0644\u0635\u0644\u064a\u0628"},{id:3542,region_name:"Ain Ghalboun - \u0639\u064a\u0646 \u063a\u0644\u0628\u0648\u0646"},{id:3543,region_name:"Ain Jrain - \u0639\u064a\u0646 \u062c\u0631\u064a\u0646"},{id:3544,region_name:"Ain Kfaa - \u0639\u064a\u0646 \u0643\u0641\u0627\u0639"},{id:3545,region_name:"Almat ech Chemaliye - \u0639\u0644\u0645\u0627\u062a \u0627\u0644\u0634\u0645\u0627\u0644\u064a\u0629"},{id:3546,region_name:"Almat Ej Jnoubiye - \u0639\u0644\u0645\u0627\u062a \u0627\u0644\u062c\u0646\u0648\u0628\u064a\u0629"},{id:3547,region_name:"Aydamoun - \u0639\u064a\u062f\u0627\u0645\u0648\u0646"},{id:3548,region_name:"Baachta - \u0628\u0639\u0634\u062a\u0627"},{id:3549,region_name:"Balhoss - \u0628\u0644\u062d\u0635"},{id:3550,region_name:"Barbara - \u0628\u0631\u0628\u0627\u0631\u0629"},{id:3551,region_name:"Barij - \u0628\u0631\u064a\u062c"},{id:3552,region_name:"Bchelli - \u0628\u0634\u0644\u0651\u0644\u064a"},{id:3553,region_name:"Bechtelida - \u0628\u0634\u062a\u0644\u064a\u062f\u0627"},{id:3554,region_name:"Behdaidat - \u0628\u062d\u062f\u064a\u062f\u0627\u062a"},{id:3555,region_name:"Beit El Boume - \u0628\u064a\u062a \u0627\u0644\u0628\u0648\u0645\u0629"},{id:3556,region_name:"Beit Hbaq - \u0628\u064a\u062a \u062d\u0628\u0651\u0627\u0642"},{id:3557,region_name:"Bejje - \u0628\u062c\u0647"},{id:3558,region_name:"Bekhaaz - \u0628\u062e\u0639\u0627\u0632"},{id:3559,region_name:"Bekouane - \u0628\u0643\u0648\u0646\u0627"},{id:3560,region_name:"Bentaael - \u0628\u0646\u062a\u0627\u0639\u0644"},{id:3561,region_name:"Berket Hejoula - \u0628\u0631\u0643\u0629 \u062d\u062c\u0648\u0644\u0627"},{id:3562,region_name:"Beziyoun - \u0628\u0632\u064a\u0648\u0646"},{id:3563,region_name:"Bhassis - \u0628\u062d\u0633\u064a\u0633"},{id:3564,region_name:"Bir El Hait - \u0628\u064a\u0631 \u0627\u0644\u0647\u064a\u062a"},{id:3565,region_name:"Bkourkaz - \u0628\u0643\u0631\u0643\u0632"},{id:3566,region_name:"Blat - \u0628\u0644\u0627\u0637"},{id:3567,region_name:"Bmehrine - \u0628\u0645\u0647\u0631\u064a\u0646"},{id:3568,region_name:"Boaatara - \u0628\u0639\u062a\u0627\u0631\u0627"},{id:3569,region_name:"Bqarta - \u0628\u0642\u0631\u062a\u0627"},{id:3570,region_name:"Broqta - \u0628\u0631\u0642\u062a\u0627"},{id:3571,region_name:"Chaabiyat el Fawqa - \u0634\u0639\u0628\u064a\u0627\u062a \u0627\u0644\u0641\u0648\u0642\u0627"},{id:3572,region_name:"Chaloumas - \u0634\u0644\u0648\u0645\u0627\u0633"},{id:3573,region_name:"Chamat - \u0634\u0627\u0645\u0627\u062a"},{id:3574,region_name:"Charbine Mazraat Es Siyad - \u0634\u0631\u0628\u064a\u0646 \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0633\u064a\u0627\u062f"},{id:3575,region_name:"Chekhnaya - \u0634\u062e\u0646\u0627\u064a\u0627"},{id:3576,region_name:"Chikhane - \u0634\u064a\u062e\u0627\u0646"},{id:3577,region_name:"Chmout - \u0634\u0645\u0648\u062a"},{id:3578,region_name:"Chouata - \u0634\u0648\u0627\u062a\u0627"},{id:3579,region_name:"Daouret Edde Jbayl - \u062f\u0648\u0631\u0629 \u0625\u062f\u0647 \u062c\u0628\u064a\u0644"},{id:3580,region_name:"Deir el Qattara - \u062f\u064a\u0631 \u0627\u0644\u0642\u0637\u0627\u0631\u0629"},{id:3581,region_name:"Deir Mar Maroun - \u062f\u064a\u0631 \u0645\u0627\u0631 \u0645\u0627\u0631\u0648\u0646"},{id:3582,region_name:"Deir Mar Sarkis - \u062f\u064a\u0631 \u0645\u0627\u0631 \u0633\u0631\u0643\u064a\u0633"},{id:3583,region_name:"Dmalsa - \u062f\u0645\u0644\u0635\u0627"},{id:3584,region_name:"Douar Bou chahine - \u062f\u0648\u0627\u0631 \u0628\u0648 \u0634\u0627\u0647\u064a\u0646"},{id:3585,region_name:"Doueir - \u0627\u0644\u062f\u0648\u064a\u0631"},{id:3586,region_name:"Ed Darje - \u062f\u0631\u062c\u0647"},{id:3587,region_name:"Edde - \u0625\u062f\u0647"},{id:3588,region_name:"Ehmej - \u0627\u0647\u0645\u062c"},{id:3589,region_name:"El Aambra - \u0627\u0644\u0639\u0645\u0628\u0631\u0627"},{id:3590,region_name:"El Aarich - \u0639\u0631\u064a\u0634"},{id:3591,region_name:"El Barraniye - \u0628\u0631\u0627\u0646\u064a\u0629"},{id:3592,region_name:"El Bhayri - \u0628\u062d\u064a\u0631\u064a"},{id:3593,region_name:"El Biyade - \u0627\u0644\u0628\u064a\u0627\u0636\u0629 \u062c\u0628\u064a\u0644"},{id:3594,region_name:"El Borj - \u0628\u0631\u062c"},{id:3595,region_name:"El Boustane - \u0628\u0633\u062a\u0627\u0646 \u064a\u0627\u0646\u0648\u062d"},{id:3596,region_name:"El Houssoun - \u062d\u0635\u0648\u0646"},{id:3597,region_name:"El Hraifat - \u0627\u0644\u062d\u0631\u064a\u0641\u0627\u062a"},{id:3598,region_name:"El Marj Lassa - \u0645\u0631\u062c \u0644\u0627\u0633\u0627"},{id:3599,region_name:"El Mtolle - \u0645\u0637\u0644\u0647 \u062c\u0628\u064a\u0644"},{id:3600,region_name:"El Owaynate - \u0639\u0648\u064a\u0646\u0627\u062a "},{id:3601,region_name:"El-Harf - \u062d\u0631\u0641 \u0642\u0631\u0637\u0628\u0648\u0646"},{id:3602,region_name:"Ernaya - \u0627\u0631\u0646\u0627\u064a\u0627"},{id:3603,region_name:"Es Saqi - \u0633\u0642\u064a "},{id:3604,region_name:"Es Sare - \u0633\u0627\u0631"},{id:3605,region_name:"Fatre - \u0641\u062a\u0631\u064a"},{id:3606,region_name:"Ferhet - \u0641\u0631\u062d\u062a"},{id:3607,region_name:"Fghal - \u0641\u063a\u0627\u0644"},{id:3608,region_name:"Fidar - \u0627\u0644\u0641\u064a\u062f\u0627\u0631"},{id:3609,region_name:"Fidar el Faouqa - \u0641\u062f\u0627\u0631 \u0627\u0644\u0641\u0648\u0642\u0627"},{id:3610,region_name:"Fidar Et Tahta - \u0641\u062f\u0627\u0631 \u0627\u0644\u062a\u062d\u062a\u0627"},{id:3611,region_name:"Frat - \u0641\u0631\u0627\u062a"},{id:3612,region_name:"Ghabate - \u063a\u0627\u0628\u0627\u062a"},{id:3613,region_name:"Ghabline - \u063a\u0628\u0627\u0644\u064a\u0646"},{id:3614,region_name:"Ghalboun - \u063a\u0644\u0628\u0648\u0646"},{id:3615,region_name:"Gharfine - \u063a\u0631\u0641\u064a\u0646"},{id:3616,region_name:"Gharzouz - \u063a\u0631\u0632\u0648\u0632"},{id:3617,region_name:"Habboub - \u062d\u0628\u0648\u0628"},{id:3618,region_name:"Habil - \u0647\u0627\u0628\u064a\u0644"},{id:3619,region_name:"Halat - \u062d\u0627\u0644\u0627\u062a"},{id:3620,region_name:"Haqel - \u062d\u0642\u0644"},{id:3621,region_name:"Haqlet et Tine - \u062d\u0642\u0644\u0629 \u0627\u0644\u062a\u064a\u0646\u0629"},{id:3622,region_name:"Hara Jbeil - \u062d\u0627\u0631\u0629"},{id:3623,region_name:"Harsha - \u0647\u0631\u0634\u0627"},{id:3624,region_name:"Hay El Aarbe - \u062d\u064a \u0627\u0644\u0639\u0631\u0628\u064a"},{id:3625,region_name:"Hay El Baalbakiye - \u062d\u064a \u0627\u0644\u0628\u0639\u0644\u0628\u0643\u064a\u0629"},{id:3626,region_name:"Hbalin - \u062d\u0628\u0627\u0644\u064a\u0646"},{id:3627,region_name:"Hedayne - \u0647\u062f\u064a\u0646\u0629"},{id:3628,region_name:"Heloue - \u062d\u0644\u0648\u0629 "},{id:3629,region_name:"Hima Er Rehbane - \u062d\u0645\u0649 \u0627\u0644\u0631\u0647\u0628\u0627\u0646"},{id:3630,region_name:"Hima Mar Maroun Aannaya - \u062d\u0645\u0649 \u0645\u0627\u0631 \u0645\u0627\u0631\u0648\u0646 \u0639\u0646\u064e\u0627\u064a\u0627"},{id:3631,region_name:"Hjoula - \u062d\u062c\u0648\u0644\u0627"},{id:3632,region_name:"Hosn Aar - \u062d\u0635\u0646 \u0627\u0644\u0639\u0631"},{id:3633,region_name:"Hosna - \u062d\u0635\u0646\u0627"},{id:3634,region_name:"Hosrayel - \u062d\u0635\u0631\u0627\u064a\u0644"},{id:3635,region_name:"Hourata - \u062d\u0648\u0631\u0627\u062a\u0627"},{id:3636,region_name:"Hrazmin - \u062d\u0631\u0627\u0632\u0645\u064a\u0646"},{id:3637,region_name:"Hsarat - \u062d\u0635\u0627\u0631\u0627\u062a"},{id:3638,region_name:"Jaj - \u062c\u0627\u062c"},{id:3639,region_name:"Janne - \u062c\u0646\u0629"},{id:3640,region_name:"Jbail - \u062c\u0628\u064a\u0644"},{id:3641,region_name:"Jdayel - \u062c\u062f\u0627\u064a\u0644"},{id:3642,region_name:"Jengel - \u062c\u0648\u0646\u062c\u0644"},{id:3643,region_name:"Jlaisse - \u062c\u0644\u064a\u0633\u0647"},{id:3644,region_name:"Jouret El Qattine - \u062c\u0648\u0631\u0629 \u0627\u0644\u0642\u0637\u064a\u0646"},{id:3645,region_name:"Jrebta Jbeil - \u062c\u0631\u0628\u062a\u0627 \u062c\u0628\u064a\u0644"},{id:3646,region_name:"Kafr - \u0643\u0641\u0631"},{id:3647,region_name:"Kelesh - \u0643\u0644\u0634"},{id:3648,region_name:"Kfar Chakha - \u0643\u0641\u0631 \u0634\u062e\u064a"},{id:3649,region_name:"Kfar Chilli - \u0643\u0641\u0631 \u0634\u0644\u064a"},{id:3650,region_name:"Kfar Hitta - \u0643\u0641\u0631 \u062d\u062a\u0649"},{id:3651,region_name:"Kfar Kahli - \u0643\u0641\u0631 \u0643\u062e\u0644\u0629"},{id:3652,region_name:"Kfar Kidda - \u0643\u0641\u0631 \u0643\u062f\u0647"},{id:3653,region_name:"Kfar Mashoun - \u0643\u0641\u0631 \u0645\u0633\u062d\u0648\u0646"},{id:3654,region_name:"Kfar Qaouass - \u0643\u0641\u0631 \u0642\u0648\u0627\u0635"},{id:3655,region_name:"Kfar Sal - \u0643\u0641\u0631 \u0633\u0627\u0644\u0627"},{id:3656,region_name:"Kfar Shabbouh - \u0643\u0641\u0631 \u0634\u0628\u0648\u062d"},{id:3657,region_name:"Kfar Zbouna - \u0643\u0641\u0631\u0632\u0628\u0648\u0646\u0627"},{id:3658,region_name:"Kfarbaal   - \u0643\u0641\u0631 \u0628\u0639\u0627\u0644"},{id:3659,region_name:"Kfoun - \u0643\u0641\u0648\u0646"},{id:3660,region_name:"Khaab - \u062e\u0639\u0628"},{id:3661,region_name:"Khaabiya - \u062e\u0627\u0639\u0628\u064a\u0629"},{id:3662,region_name:"Kharbe - \u062e\u0627\u0631\u0628\u0629 \u062c\u0628\u064a\u0644"},{id:3663,region_name:"Kour El Hooua - \u0643\u0648\u0631 \u0627\u0644\u0647\u0648\u0627"},{id:3664,region_name:"Laqlouq - \u0627\u0644\u0644\u0642\u0644\u0648\u0642"},{id:3665,region_name:"Lassa - \u0644\u0627\u0633\u0627"},{id:3666,region_name:"Lehfed - \u0644\u062d\u0641\u062f"},{id:3667,region_name:"Maad - \u0645\u0639\u0627\u062f"},{id:3668,region_name:"Maaytiq - \u0645\u0639\u064a\u062a\u064a\u0642"},{id:3669,region_name:"Mahmarat Bejje - \u0645\u062d\u0645\u0631\u0629 \u0628\u062c\u0651\u0647"},{id:3670,region_name:"Maifouq - \u0645\u064a\u0641\u0648\u0642"},{id:3671,region_name:"Majdel - \u0627\u0644\u0645\u062c\u062f\u0644"},{id:3672,region_name:"Malhoun - \u0645\u0644\u062d\u0648\u0646"},{id:3673,region_name:"Mar Meqna - \u0645\u0627\u0631 \u0645\u0642\u0627\u0646\u0629"},{id:3674,region_name:"Marbaa - \u0645\u0631\u0628\u0639\u0647"},{id:3675,region_name:"Marj Mokhtara - \u0645\u0631\u062c \u0645\u062e\u062a\u0627\u0631\u0629"},{id:3676,region_name:"Mazraa Lassa - \u0645\u0632\u0631\u0639\u0629 \u0644\u0627\u0633\u0627"},{id:3677,region_name:"Mazraat ej Jmaiyel - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062c\u0645\u064a\u0644"},{id:3678,region_name:"Mazraat el Hajj Khalil - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062d\u0627\u062c \u062e\u0644\u064a\u0644"},{id:3679,region_name:"Mazraat El Maadene - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0645\u0639\u0627\u062f\u0646"},{id:3680,region_name:"Mazraat Es Siyad - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0633\u064a\u0627\u062f"},{id:3681,region_name:"Mdamit - \u0645\u062f\u0627\u0645\u064a\u062a"},{id:3682,region_name:"Mechane - \u0645\u0634\u0627\u0646"},{id:3683,region_name:"Mechhellene - \u0645\u0634\u062d\u0644\u0627\u0646"},{id:3684,region_name:"MechMech Jbeil - \u0645\u0634\u0645\u0634 \u062c\u0628\u064a\u0644"},{id:3685,region_name:"Meftah es Sellom - \u0645\u0641\u062a\u0627\u062d \u0627\u0644\u0633\u0644\u0645"},{id:3686,region_name:"Mestita - \u0645\u0633\u062a\u064a\u062a\u0627"},{id:3687,region_name:"Mghaira - \u0645\u063a\u064a\u0631\u0647"},{id:3688,region_name:"Mnaitra - \u0645\u0646\u064a\u0637\u0631\u0629"},{id:3689,region_name:"Monsef - \u0627\u0644\u0645\u0646\u0635\u0641"},{id:3690,region_name:"Mouftah el Mir - \u0645\u0641\u062a\u0627\u062d \u0627\u0644\u0645\u064a\u0631"},{id:3691,region_name:"Moukhada - \u0645\u062e\u0627\u0636\u0629"},{id:3692,region_name:"Mzarib - \u0627\u0644\u0645\u0632\u0627\u0631\u064a\u0628"},{id:3693,region_name:"Nabaa Tourzaiya - \u0646\u0628\u0639 \u0637\u0648\u0631\u0632\u064a\u0627"},{id:3694,region_name:"Nahrh Ibrahim - \u0646\u0647\u0631 \u0627\u0628\u0631\u0627\u0647\u064a\u0645"},{id:3695,region_name:"Naqour - \u0646\u0642\u0648\u0631"},{id:3696,region_name:"Ouata El Bane - \u0648\u0637\u0649 \u0627\u0644\u0628\u0627\u0646"},{id:3697,region_name:"Ouata el bourj - \u0648\u0637\u0649 \u0627\u0644\u0628\u0631\u062c"},{id:3698,region_name:"Ouata el Khirbe - \u0648\u0637\u0649 \u0627\u0644\u062e\u0631\u0628\u0629"},{id:3699,region_name:"Qartaba - \u0642\u0631\u0637\u0628\u0627"},{id:3700,region_name:"Qartaboun - \u0642\u0631\u0637\u0628\u0648\u0646"},{id:3701,region_name:"Qass - \u0627\u0644\u0642\u0635"},{id:3702,region_name:"Qateaa - \u0627\u0644\u0642\u0627\u0637\u0639\u0629"},{id:3703,region_name:"Qattara - \u0642\u0637\u0627\u0631\u0629"},{id:3704,region_name:"Qehmez - \u0642\u0647\u0645\u0632"},{id:3705,region_name:"Qerqraiya - \u0642\u0631\u0642\u0631\u064a\u0627"},{id:3706,region_name:"Qeryaqous - \u0642\u0631\u064a\u0627\u0642\u0633"},{id:3707,region_name:"Ramiet el Hsoun - \u0631\u0627\u0645\u064a\u0629 \u0627\u0644\u062d\u0635\u0648\u0646"},{id:3708,region_name:"Ramout - \u0627\u0644\u0631\u0627\u0645\u0648\u0637"},{id:3709,region_name:"Ras Osta - \u0631\u0627\u0633 \u0627\u0633\u0637\u0627"},{id:3710,region_name:"Rihani - \u0631\u064a\u062d\u0627\u0646\u0629"},{id:3711,region_name:"Rouaiss - \u0631\u0648\u064a\u0633"},{id:3712,region_name:"Saqi Lassa - \u0633\u0642\u064a \u0644\u0627\u0633\u0627"},{id:3713,region_name:"Saqi Rechmaiya - \u0633\u0642\u064a \u0631\u0634\u0645\u064a\u0627"},{id:3714,region_name:"Saqiet ed Delb - \u0633\u0627\u0642\u064a\u0629 \u0627\u0644\u062f\u0644\u0628"},{id:3715,region_name:"Saqiet el Khait - \u0633\u0627\u0642\u064a\u0629 \u0627\u0644\u062e\u064a\u0637"},{id:3716,region_name:"Sariita - \u0633\u0631\u0639\u064a\u062a\u0627"},{id:3717,region_name:"Sbail - \u0633\u0628\u0627\u064a\u0644"},{id:3718,region_name:"Sebrine - \u0633\u0631\u0628\u064a\u0646"},{id:3719,region_name:"Serghol - \u0633\u0631\u063a\u0644"},{id:3720,region_name:"Sinnawr - \u0633\u0646\u0648\u0631"},{id:3721,region_name:"Sirine - \u0633\u064a\u0631\u0627\u0646"},{id:3722,region_name:"Slaiyeb Ghalboun - \u0635\u0644\u0627\u064a\u0628 \u063a\u0644\u0628\u0648\u0646"},{id:3723,region_name:"Souane - \u0635\u0648\u0627\u0646\u0629 "},{id:3724,region_name:"Souq el Firi - \u0633\u0648\u0642 \u0627\u0644\u0641\u0627\u0631\u0629"},{id:3725,region_name:"Taht el Qalaa - \u062a\u062d\u062a \u0627\u0644\u0642\u0644\u0639\u0629"},{id:3726,region_name:"Talbita - \u062a\u0644\u0628\u064a\u062a\u0627"},{id:3727,region_name:"Tartij - \u062a\u0631\u062a\u062c"},{id:3728,region_name:"Tedmor - \u062a\u062f\u0645\u0631"},{id:3729,region_name:"Terouil - \u062a\u0631\u0648\u064a\u0644"},{id:3730,region_name:"Tourzaiya - \u0637\u0648\u0631\u0632\u064a\u0627"},{id:3731,region_name:"Wadi el Kalb - \u0648\u0627\u062f\u064a \u0627\u0644\u0643\u0644\u0628"},{id:3732,region_name:"Yanouh - \u064a\u0627\u0646\u0648\u062d"},{id:3733,region_name:"Zaayber - \u0632\u0639\u064a\u0628\u0631"},{id:3734,region_name:"Zebdine - \u0632\u0628\u062f\u064a\u0646"},{id:3735,region_name:"Zelhmaya - \u0632\u0644\u062d\u0645\u0627\u064a\u0627"},{id:3736,region_name:"Zmar - \u0632\u0645\u0627\u0631"}]},{id:17,DistrictDescription:"Kesrwane -  \u0643\u0633\u0631\u0648\u0627\u0646",Cities:[{id:3737,region_name:"Aabri - \u0639\u0628\u0631\u064a"},{id:3738,region_name:"Aachqout - \u0639\u0634\u0642\u0648\u062a"},{id:3739,region_name:"Aafs kesrwane - \u0639\u0641\u0635 \u0643\u0633\u0631\u0648\u0627\u0646"},{id:3740,region_name:"Aajaltoun - \u0639\u062c\u0644\u062a\u0648\u0646"},{id:3741,region_name:"Aarabe Ghosta - \u0639\u0631\u0628\u0629 \u063a\u0648\u0633\u0637\u0627"},{id:3742,region_name:"Aaramoun Kesrwane - \u0639\u0631\u0645\u0648\u0646 \u0643\u0633\u0631\u0648\u0627\u0646"},{id:3743,region_name:"Aayoun es Simane - \u0639\u064a\u0648\u0646 \u0627\u0644\u0633\u064a\u0645\u0627\u0646"},{id:3744,region_name:"Aazrane - \u0639\u0632\u0631\u0627\u0646\u0629"},{id:3745,region_name:"Adonis Kesserwan - \u0623\u062f\u0648\u0646\u064a\u0633 \u0643\u0633\u0631\u0648\u0627\u0646"},{id:3746,region_name:"Aghbe - \u0625\u063a\u0628\u0629"},{id:3747,region_name:"Ain Abaal - \u0639\u064a\u0646 \u0627\u0628\u0639\u0644"},{id:3748,region_name:"Ain Ed Delbe - \u0639\u064a\u0646 \u0627\u0644\u062f\u0644\u0628\u0629"},{id:3749,region_name:"Ain Ej Jorn - \u0639\u064a\u0646 \u0627\u0644\u062c\u0631\u0646"},{id:3750,region_name:"Ain Er Rihane - \u0639\u064a\u0646 \u0627\u0644\u0631\u064a\u062d\u0627\u0646"},{id:3751,region_name:"Ain Et Tannour - \u0639\u064a\u0646 \u0627\u0644\u062a\u0646\u0648\u0631"},{id:3752,region_name:"Ain Jouaiya - \u0639\u064a\u0646 \u062c\u0648\u064a\u0627"},{id:3753,region_name:"Aintoura - \u0639\u064a\u0646\u0637\u0648\u0631\u0629"},{id:3754,region_name:"Ayn Es Safra - \u0639\u064a\u0646 \u0627\u0644\u0635\u0641\u0631\u0627"},{id:3755,region_name:"Bahhara - \u0628\u062d\u0627\u0631\u0629"},{id:3756,region_name:"Balloune - \u0628\u0644\u0648\u0646\u0629"},{id:3757,region_name:"Batha - \u0628\u0637\u062d\u0627"},{id:3758,region_name:"Bayader Fatqa - \u0628\u064a\u0627\u062f\u0631 \u0641\u062a\u0642\u0627"},{id:3759,region_name:"Beit Eid - \u0628\u064a\u062a \u0639\u064a\u062f"},{id:3760,region_name:"Beit El Kreidi - \u0628\u064a\u062a \u0643\u0631\u064a\u062f\u064a"},{id:3761,region_name:"Beit Khachbou - \u0628\u064a\u062a \u062e\u0634\u0628\u0648"},{id:3762,region_name:"Beqaatet Aachqout - \u0628\u0642\u0639\u0627\u062a\u0629 \u0639\u0634\u0642\u0648\u062a"},{id:3763,region_name:"Biqaatet Kannane - \u0628\u0642\u0639\u0627\u062a\u0629 \u0643\u0646\u0639\u0627\u0646"},{id:3764,region_name:"Bizhel - \u0628\u0632\u062d\u0644"},{id:3765,region_name:"Bkirke - \u0628\u0643\u0631\u0643\u064a"},{id:3766,region_name:"Blat Mazraat Kfar Dibiane - \u0628\u0644\u0627\u0637 \u0643\u0641\u0631 \u0630\u0628\u064a\u0627\u0646"},{id:3767,region_name:"Bouar - \u0628\u0648\u0627\u0631"},{id:3768,region_name:"Bqaatouta - \u0628\u0642\u0639\u062a\u0648\u062a\u0627"},{id:3769,region_name:"Bqaq Ed Dine - \u0628\u0642\u0627\u0642 \u0627\u0644\u062f\u064a\u0646"},{id:3770,region_name:"Broummana Kfar Dibian - \u0628\u0631\u0645\u0627\u0646\u0627 \u0643\u0641\u0631 \u0630\u0628\u064a\u0627\u0646"},{id:3771,region_name:"Bzoummar - \u0628\u0632\u0645\u0627\u0631"},{id:3772,region_name:"Chaab - \u0634\u0639\u0628"},{id:3773,region_name:"Chahtoul - \u0634\u062d\u062a\u0648\u0644"},{id:3774,region_name:"Chehhara - \u0634\u062d\u0627\u0631\u0629"},{id:3775,region_name:"Chnanaair - \u0634\u0646\u0646\u0639\u064a\u0631"},{id:3776,region_name:"Chouaya - \u0634\u0648\u064a\u0627 \u064a\u062d\u0634\u0648\u0634"},{id:3777,region_name:"Chouene - \u0634\u0648\u0627\u0646"},{id:3778,region_name:"Christ Roi - \u064a\u0633\u0648\u0639 \u0627\u0644\u0645\u0644\u0643"},{id:3779,region_name:"Daasse - \u062f\u0639\u0633\u0647"},{id:3780,region_name:"Dahr Badris - \u0636\u0647\u0631 \u0628\u062f\u0631\u064a\u0633"},{id:3781,region_name:"Dahr el Qattine - \u0636\u0647\u0631 \u0627\u0644\u0642\u0637\u064a\u0646"},{id:3782,region_name:"Daraaoun - \u062f\u0631\u0639\u0648\u0646"},{id:3783,region_name:"Darayia Kesrwane - \u062f\u0627\u0631\u064a\u0627 \u0643\u0633\u0631\u0648\u0627\u0646"},{id:3784,region_name:"Dayr Saydet el Haqle - \u062f\u064a\u0631 \u0633\u064a\u062f\u0629 \u0627\u0644\u062d\u0642\u0644\u0629"},{id:3785,region_name:"Deir Baklouche - \u062f\u064a\u0631 \u0628\u0642\u0644\u0648\u0634"},{id:3786,region_name:"Deir Hrach - \u062f\u064a\u0631 \u062d\u0631\u0627\u0634"},{id:3787,region_name:"Deir Nisbey - \u062f\u064a\u0631 \u0646\u0633\u0628\u064a\u0647"},{id:3788,region_name:"Deir Ram Bou Daqen - \u062f\u064a\u0631 \u0631\u0627\u0645 \u0628\u0648 \u062f\u0642\u0646"},{id:3789,region_name:"Deir saydet Louaize - \u062f\u064a\u0631 \u0633\u064a\u062f\u0629 \u0627\u0644\u0644\u0648\u064a\u0632\u0629"},{id:3790,region_name:"Deir Ziraaya - \u062f\u064a\u0631 \u0632\u0631\u0639\u064a\u0627"},{id:3791,region_name:"Delbta - \u062f\u0644\u0628\u062a\u0627"},{id:3792,region_name:"Deraali - \u062f\u0631\u0639\u0644\u064a\u0647"},{id:3793,region_name:"Dqarine - \u062f\u0642\u0627\u0631\u064a\u0646"},{id:3794,region_name:"Ech Chqif Bqaatouta - \u0634\u0642\u064a\u0641 \u0628\u0642\u0639\u062a\u0648\u062a\u0627"},{id:3795,region_name:"Ed Dahr - \u0627\u0644\u0636\u0647\u0631"},{id:3796,region_name:"Ed Dahr Ghbale - \u0636\u0647\u0631 \u063a\u0628\u0627\u0644\u0629"},{id:3797,region_name:"Ed Daoura Shaile - \u062f\u0648\u0631\u0629 \u0633\u0647\u064a\u0644\u0629"},{id:3798,region_name:"Edma et Dafne - \u0623\u062f\u0645\u0627 \u0648\u0627\u0644\u062f\u0641\u0646\u0647"},{id:3799,region_name:"Ej Jaayel - \u062c\u0639\u0627\u064a\u0644 \u063a\u0628\u0627\u0644\u0629"},{id:3800,region_name:"El Aaqaybe Kesrouane - \u0639\u0642\u064a\u0628\u0629"},{id:3801,region_name:"El Aazra et el Aazr - \u0639\u0630\u0631\u0647 \u0648\u0627\u0644\u0639\u0630\u0631"},{id:3802,region_name:"El Ghouabi - \u063a\u0648\u0627\u0628\u064a"},{id:3803,region_name:"El Hara Mairouba - \u062d\u0627\u0631\u0629 \u0645\u064a\u0631\u0648\u0628\u0627"},{id:3804,region_name:"El Kharayeb - \u062e\u0631\u0627\u064a\u0628"},{id:3805,region_name:"El Kharayeb Dlebta - \u0627\u0644\u062e\u0631\u0627\u064a\u0628 \u062f\u0644\u0628\u062a\u0627"},{id:3806,region_name:"El Maaden - \u0645\u0639\u0627\u062f\u0646"},{id:3807,region_name:"El Marji - \u0645\u0631\u062c"},{id:3808,region_name:"El Massiaf - \u0645\u0635\u064a\u0641"},{id:3809,region_name:"El Qacha - \u0642\u0634\u0627"},{id:3810,region_name:"El Qarqouf - \u0642\u0631\u0642\u0648\u0641"},{id:3811,region_name:"Es Salhiye Bezhel - \u0635\u0627\u0644\u062d\u064a\u0629 \u0628\u0632\u062d\u0644"},{id:3812,region_name:"Es Shoum Kfar Debiane - \u0634\u0648\u0645 \u0643\u0641\u0631 \u0630\u0628\u064a\u0627\u0646"},{id:3813,region_name:"Es Slayekh - \u0627\u0644\u0633\u0644\u0627\u064a\u062e"},{id:3814,region_name:"Es Souhoum - \u0633\u0648\u062d\u0648\u0645 \u0627\u0644\u063a\u064a\u0646\u0629"},{id:3815,region_name:"Esh Shahoute - \u0627\u0644\u0634\u0627\u062d\u0648\u0637"},{id:3816,region_name:"Et Tarouaa - \u0627\u0644\u062a\u0631\u0648\u0639"},{id:3817,region_name:"Ez Zaaytriye - \u0632\u0639\u064a\u062a\u0631\u064a\u0629"},{id:3818,region_name:"Faitroun - \u0641\u064a\u0637\u0631\u0648\u0646"},{id:3819,region_name:"Fanyoun - \u0641\u0646\u064a\u0648\u0627\u0646"},{id:3820,region_name:"Faqra - \u0641\u0642\u0631\u0627"},{id:3821,region_name:"Faraiya - \u0641\u0627\u0631\u064a\u0627"},{id:3822,region_name:"Fatqa - \u0641\u062a\u0642\u0627"},{id:3823,region_name:"Ftah Ech Chouha - \u0641\u062a\u0627\u062d \u0627\u0644\u0634\u0648\u062d\u0627"},{id:3824,region_name:"Ftahate - \u0641\u062a\u0627\u062d\u0627\u062a \u062c\u0648\u0631\u0629 \u0627\u0644\u062a\u0631\u0645\u0633"},{id:3825,region_name:"Ghadir jounieh - \u063a\u0627\u062f\u064a\u0631 \u062c\u0648\u0646\u064a\u0647"},{id:3826,region_name:"Ghadras - \u063a\u062f\u0631\u0627\u0633"},{id:3827,region_name:"Ghazir - \u063a\u0632\u064a\u0631"},{id:3828,region_name:"Ghbale - \u063a\u0628\u0627\u0644\u0629 "},{id:3829,region_name:"Ghine - \u063a\u064a\u0646\u0629"},{id:3830,region_name:"Ghoshraiya - \u063a\u064a\u0634\u0631\u0627\u064a\u0647"},{id:3831,region_name:"Ghosta - \u063a\u0648\u0633\u0637\u0627"},{id:3832,region_name:"Hakl Er Raiyess - \u062d\u0642\u0644 \u0627\u0644\u0631\u064a\u0633"},{id:3833,region_name:"Hamassiyat - \u062d\u0645\u0627\u0633\u064a\u0627\u062a"},{id:3834,region_name:"Haret El Mir Zouk Mkayel - \u062d\u0627\u0631\u0629 \u0627\u0644\u0645\u064a\u0631 \u0630\u0648\u0642 \u0645\u0643\u0627\u064a\u0644"},{id:3835,region_name:"Haret Halane - \u062d\u0627\u0631\u0629 \u062d\u0644\u0627\u0646"},{id:3836,region_name:"Haret Sakher - \u062d\u0627\u0631\u0629 \u0635\u062e\u0631"},{id:3837,region_name:"Harharaya - \u0647\u0631\u0647\u0631\u064a\u0627"},{id:3838,region_name:"Hariqa - \u062d\u0631\u064a\u0642\u0629"},{id:3839,region_name:"Hariqa Chahtoul - \u062d\u0631\u064a\u0642 \u0634\u062d\u062a\u0648\u0644"},{id:3840,region_name:"Harissa - \u062d\u0631\u064a\u0635\u0627"},{id:3841,region_name:"Hayata - \u062d\u064a\u0627\u0637\u0629"},{id:3842,region_name:"Hilane - \u062d\u0644\u0627\u0646"},{id:3843,region_name:"Hrajel - \u062d\u0631\u0627\u062c\u0644"},{id:3844,region_name:"Hsayn - \u062d\u0635\u064a\u0646"},{id:3845,region_name:"Jdaidet Ghazir - \u062c\u062f\u064a\u062f\u0629 \u063a\u0632\u064a\u0631"},{id:3846,region_name:"Jitta - \u062c\u0639\u064a\u062a\u0627"},{id:3847,region_name:"Jouar El Baouechiq - \u062c\u0648\u0627\u0631 \u0627\u0644\u0628\u0648\u0627\u0634\u0642"},{id:3848,region_name:"Jouar El Hachich chahtoul - \u062c\u0648\u0627\u0631 \u0627\u0644\u062d\u0634\u064a\u0634 \u0634\u062d\u062a\u0648\u0644"},{id:3849,region_name:"Jounieh - \u062c\u0648\u0646\u064a\u0647"},{id:3850,region_name:"Jounieh Kaslik - \u062c\u0648\u0646\u064a\u0647 \u0643\u0633\u0644\u064a\u0643"},{id:3851,region_name:"Jouret Bedrane - \u062c\u0648\u0631\u0629 \u0628\u062f\u0631\u0627\u0646"},{id:3852,region_name:"Jouret Ed Dardour - \u062c\u0648\u0631\u0629 \u0627\u0644\u062f\u0631\u062f\u0648\u0631"},{id:3853,region_name:"Jouret Et Tormoss - \u062c\u0648\u0631\u0629 \u0627\u0644\u062a\u0631\u0645\u0633"},{id:3854,region_name:"Jouret Mghad - \u062c\u0648\u0631\u0629 \u0645\u0647\u0627\u062f"},{id:3855,region_name:"Kfar Hbab - \u0643\u0641\u0631\u062d\u0628\u0627\u0628"},{id:3856,region_name:"Kfar Jrif - \u0643\u0641\u0631 \u062c\u0631\u064a\u0641"},{id:3857,region_name:"Kfardibiane - \u0643\u0641\u0631 \u062f\u0628\u064a\u0627\u0646"},{id:3858,region_name:"Kfarshihham - \u0643\u0641\u0631 \u0634\u064a\u062d\u0627\u0645"},{id:3859,region_name:"Kfaryassine - \u0643\u0641\u0631 \u064a\u0627\u0633\u064a\u0646"},{id:3860,region_name:"Kfour - \u0627\u0644\u0643\u0641\u0648\u0631"},{id:3861,region_name:"Khalal - \u062e\u0644\u0627\u0644"},{id:3862,region_name:"Khdayra - \u062e\u0636\u064a\u0631\u0647"},{id:3863,region_name:"Ksayer - \u0643\u0633\u0627\u064a\u0631"},{id:3864,region_name:"Maamelteine - \u0645\u0639\u0627\u0645\u0644\u062a\u064a\u0646"},{id:3865,region_name:"Maarab - \u0645\u0639\u0631\u0627\u0628"},{id:3866,region_name:"Maaysra - \u0627\u0644\u0645\u0639\u064a\u0635\u0631\u0629"},{id:3867,region_name:"Mairouba - \u0645\u064a\u0631\u0648\u0628\u0627"},{id:3868,region_name:"Mar Nouhra - \u0645\u0627\u0631 \u0646\u0647\u0631\u0627"},{id:3869,region_name:"Mashhat - \u0645\u0634\u062d\u0627\u062a"},{id:3870,region_name:"Mazzarat Er Ras - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0631\u0627\u0633"},{id:3871,region_name:"Mchaa El Ftouh - \u0645\u0634\u0627\u0639 \u0627\u0644\u0641\u062a\u0648\u062d"},{id:3872,region_name:"Mchaa Faraya - \u0645\u0634\u0627\u0639 \u0641\u0627\u0631\u064a\u0627"},{id:3873,region_name:"Mchaa Kfar Dibian - \u0645\u0634\u0627\u0639 \u0643\u0641\u0631 \u0630\u0628\u064a\u0627\u0646"},{id:3874,region_name:"Mchati - \u0645\u0634\u0627\u062a\u0647"},{id:3875,region_name:"Mehqane el Mazloum - \u0645\u062d\u0642\u0627\u0646 \u0627\u0644\u0645\u0638\u0644\u0648\u0645"},{id:3876,region_name:"Mghayer - \u0627\u0644\u0645\u063a\u0627\u064a\u0631"},{id:3877,region_name:"Mradiye - \u0645\u0631\u0627\u062f\u064a\u0629"},{id:3878,region_name:"Mrah El Mir - \u0645\u0631\u0627\u062d \u0627\u0644\u0645\u064a\u0631"},{id:3879,region_name:"Mreijet Kesserwan - \u0645\u0631\u064a\u062c\u0629 \u0643\u0633\u0631\u0648\u0627\u0646"},{id:3880,region_name:"Nabaa el Mghara - \u0646\u0628\u0639 \u0627\u0644\u0645\u063a\u0627\u0631\u0629"},{id:3881,region_name:"Nahr Ed Dahab - \u0646\u0647\u0631 \u0627\u0644\u062f\u0647\u0628"},{id:3882,region_name:"Nahr El Hussein - \u0646\u0647\u0631 \u0627\u0644\u062d\u0635\u064a\u0646"},{id:3883,region_name:"Nahr el Kalb - \u0646\u0647\u0631 \u0627\u0644\u0643\u0644\u0628"},{id:3884,region_name:"Nammoura - \u0627\u0644\u0646\u0645\u0648\u0631\u0647"},{id:3885,region_name:"Nmoura - \u0646\u0645\u0648\u0631\u0629"},{id:3886,region_name:"Ouata Ej Jaouz - \u0648\u0637\u0649 \u0627\u0644\u062c\u0648\u0632"},{id:3887,region_name:"Ouata el Laouz - \u0648\u0637\u0649 \u0627\u0644\u0644\u0648\u0632"},{id:3888,region_name:"Ouata Nahr El Kelb - \u0648\u0637\u0649 \u0646\u0647\u0631 \u0627\u0644\u0643\u0644\u0628"},{id:3889,region_name:"Ouata Slam - \u0648\u0637\u0649 \u0633\u0644\u0627\u0645"},{id:3890,region_name:"Qalaa Kfardibiane - \u0642\u0644\u0639\u0629 \u0643\u0641\u0631 \u0630\u0628\u064a\u0627\u0646"},{id:3891,region_name:"Qalaat Maarab - \u0642\u0644\u0639\u0629 \u0645\u0639\u0631\u0627\u0628"},{id:3892,region_name:"Qarqara - \u0642\u0631\u0642\u0631\u0627"},{id:3893,region_name:"Qarqouf - \u0627\u0644\u0642\u0631\u0642\u0648\u0641"},{id:3894,region_name:"Qarsa - \u0642\u0631\u0635\u0629"},{id:3895,region_name:"Qattine - \u0627\u0644\u0642\u0637\u064a\u0646"},{id:3896,region_name:"Qlaiaat - \u0642\u0644\u064a\u0639\u0627\u062a \u0643\u0633\u0631\u0648\u0627\u0646"},{id:3897,region_name:"Qmayrze - \u0642\u0645\u064a\u0632\u0631\u0629"},{id:3898,region_name:"Qouwale - \u0642\u0648\u0627\u0644\u0647"},{id:3899,region_name:"Raashine - \u0631\u0639\u0634\u064a\u0646"},{id:3900,region_name:"Raifoun - \u0631\u064a\u0641\u0648\u0646"},{id:3901,region_name:"Ramiet Kfaryasin - \u0631\u0627\u0645\u064a\u0629 \u0643\u0641\u0631 \u064a\u0627\u0633\u064a\u0646"},{id:3902,region_name:"Rihane Kesrwane - \u0631\u064a\u062d\u0627\u0646 \u0643\u0633\u0631\u0648\u0627\u0646"},{id:3903,region_name:"Safra kesrwane - \u0635\u0641\u0631\u0627 \u0643\u0633\u0631\u0648\u0627\u0646"},{id:3904,region_name:"Sahel Aalma - \u0633\u0627\u062d\u0644 \u0639\u0644\u0645\u0627"},{id:3905,region_name:"Saidet Bzoummar - \u062f\u064a\u0631 \u0633\u064a\u062f\u0629 \u0628\u0632\u0645\u0627\u0631"},{id:3906,region_name:"Sarba - \u0635\u0631\u0628\u0627"},{id:3907,region_name:"Shaile - \u0633\u0647\u064a\u0644\u0629"},{id:3908,region_name:"Sirje - \u0633\u064a\u0631\u062c\u0647"},{id:3909,region_name:"Snoubar - \u0635\u0646\u0648\u0628\u0631 \u064a\u062d\u0634\u0648\u0634"},{id:3910,region_name:"Tabarja - \u0637\u0628\u0631\u062c\u0627"},{id:3911,region_name:"Talle - \u062a\u0644\u0629"},{id:3912,region_name:"Wata Tabriye - \u0648\u0637\u0649 \u0637\u0628\u0631\u064a\u0629"},{id:3913,region_name:"Yahchouch - \u064a\u062d\u0634\u0648\u0634"},{id:3914,region_name:"Zaaitra - \u0632\u0639\u064a\u062a\u0631\u0647"},{id:3915,region_name:"Zayer - \u0632\u0627\u064a\u0631"},{id:3916,region_name:"Zeitoun - \u0632\u064a\u062a\u0648\u0646"},{id:3917,region_name:"Zleikat - \u0632\u0644\u064a\u0643\u0627\u062a"},{id:3918,region_name:"Zouk Mosbeh - \u0630\u0648\u0642 \u0645\u0635\u0628\u062d"},{id:3919,region_name:"Zouq Mkayel - \u0630\u0648\u0642 \u0645\u0643\u0627\u064a\u0644"}]}]},{id:7,GovernorateDescription:"North - \u0627\u0644\u0634\u0645\u0627\u0644",Districts:[{id:18,DistrictDescription:"Bcharre - \u0628\u0634\u0631\u064a",Cities:[{id:3920,region_name:"Aabdine Bcharre - \u0639\u0628\u062f\u064a\u0646 \u0628\u0634\u0631\u064a"},{id:3921,region_name:"Ariz - \u0623\u0631\u0632"},{id:3922,region_name:"Bane - \u0628\u0627\u0646"},{id:3923,region_name:"Barhalioun - \u0628\u0631\u062d\u0644\u064a\u0648\u0646"},{id:3924,region_name:"Bazaoun - \u0628\u0632\u0639\u0648\u0646"},{id:3925,region_name:"Bcharre - \u0628\u0634\u0631\u064a"},{id:3926,region_name:"Beit Menzer - \u0628\u064a\u062a \u0645\u0646\u0630\u0631"},{id:3927,region_name:"Billa - \u0628\u0644\u0627"},{id:3928,region_name:"Blaouza - \u0628\u0644\u0648\u0632\u0627"},{id:3929,region_name:"Bqaa Kafra - \u0628\u0642\u0627\u0639 \u0643\u0641\u0631\u0627"},{id:3930,region_name:"Bqerqacha - \u0628\u0642\u0631\u0642\u0627\u0634\u0627"},{id:3931,region_name:"Braissat - \u0628\u0631\u064a\u0633\u0627\u062a"},{id:3932,region_name:"Chira - \u0634\u064a\u0631\u0627"},{id:3933,region_name:"Dimane - \u062f\u064a\u0645\u0627\u0646"},{id:3934,region_name:"Hadchit - \u062d\u062f\u0634\u064a\u062a"},{id:3935,region_name:"Hadet Ej jebbe - \u062d\u062f\u062b \u0627\u0644\u062c\u0628\u0647"},{id:3936,region_name:"Hasroun - \u062d\u0635\u0631\u0648\u0646"},{id:3937,region_name:"Kfar Saroun dimane - \u0643\u0641\u0631 \u0635\u0627\u0631\u0648\u0646 \u0627\u0644\u062f\u064a\u0645\u0627\u0646"},{id:3938,region_name:"Mazraat Assaf - \u0645\u0632\u0631\u0639\u0629 \u0639\u0633\u0627\u0641"},{id:3939,region_name:"Mazraat Beni Saab - \u0645\u0632\u0631\u0639\u0629 \u0628\u0646\u064a \u0635\u0639\u0628"},{id:3940,region_name:"Mchaa ej Joubbeh - \u0645\u0634\u0627\u0639 \u0627\u0644\u062c\u0628\u0647"},{id:3941,region_name:"Moghr El Ahoual - \u0645\u063a\u0631 \u0627\u0644\u0627\u062d\u0648\u0644"},{id:3942,region_name:"Qnaiouer - \u0642\u0646\u064a\u0648\u0631"},{id:3943,region_name:"Qnat - \u0642\u0646\u0627\u0629"},{id:3944,region_name:"Tourza - \u0637\u0648\u0631\u0632\u0627"},{id:3945,region_name:"Wadi Qannoubine - \u0648\u0627\u062f\u064a \u0642\u0646\u0648\u0628\u064a\u0646"}]},{id:19,DistrictDescription:"El Batroun - \u0627\u0644\u0628\u062a\u0631\u0648\u0646",Cities:[{id:3946,region_name:"Aabdelle - \u0639\u0628\u062f\u0644\u0644\u064a"},{id:3947,region_name:"Aabrine - \u0639\u0628\u0631\u064a\u0646"},{id:3948,region_name:"Aalali - \u0639\u0644\u0627\u0644\u064a"},{id:3949,region_name:"Aaoura - \u0639\u0648\u0631\u0627 \u0627\u0644\u0628\u062a\u0631\u0648\u0646"},{id:3950,region_name:"Aartez - \u0639\u0631\u0637\u0632"},{id:3951,region_name:"Ain el Batie - \u0639\u064a\u0646 \u0627\u0644\u0628\u0637\u064a\u0647"},{id:3952,region_name:"Ain el Blat - \u0639\u064a\u0646 \u0627\u0644\u0628\u0644\u0627\u0637"},{id:3953,region_name:"Ain er Raha - \u0639\u064a\u0646 \u0627\u0644\u0631\u0627\u062d\u0627"},{id:3954,region_name:"Assia - \u0627\u0633\u064a\u0627"},{id:3955,region_name:"Balaa - \u0628\u0644\u0639\u0629"},{id:3956,region_name:"Barzakine - \u0628\u0631\u0632\u0642\u064a\u0646"},{id:3957,region_name:"Basbina - \u0628\u0633\u0628\u064a\u0646\u0627"},{id:3958,region_name:"Batroun - \u0628\u062a\u0631\u0648\u0646"},{id:3959,region_name:"Bcheale - \u0628\u0634\u0639\u0644\u0629"},{id:3960,region_name:"Bechtoudar-Aoura - \u0628\u0634\u062a\u0648\u062f\u0627\u0631"},{id:3961,region_name:"Beit Chlala - \u0628\u064a\u062a \u0634\u0644\u0627\u0644\u0627"},{id:3962,region_name:"Beit Kassab - \u0628\u064a\u062a \u0643\u0633\u0651\u0627\u0628"},{id:3963,region_name:"Bijdarfel - \u0628\u062c\u062f\u0631\u0641\u0644"},{id:3964,region_name:"Borj - \u0627\u0644\u0628\u0631\u062c \u0643\u0641\u0631 \u0639\u0628\u064a\u062f\u0627"},{id:3965,region_name:"Boustane El Aassi - \u0628\u0633\u0627\u062a\u064a\u0646 \u0627\u0644\u0639\u0635\u064a"},{id:3966,region_name:"Bqaiaa et Dahr Abi Yaghi - \u0628\u0642\u064a\u0639\u0629 \u0627\u0644\u0628\u062a\u0631\u0648\u0646"},{id:3967,region_name:"Bqosmaiya - \u0628\u0642\u0633\u0645\u064a\u0627"},{id:3968,region_name:"Chabtine - \u0634\u0628\u0637\u064a\u0646 "},{id:3969,region_name:"Chatine - \u0634\u0627\u062a\u064a\u0646"},{id:3970,region_name:"Chawi - \u0634\u0627\u0648\u064a"},{id:3971,region_name:"Chekka - \u0634\u0643\u064e\u0627"},{id:3972,region_name:"Chnata - \u0634\u0646\u0627\u062a\u0627"},{id:3973,region_name:"Daael - \u062f\u0627\u0639\u0644"},{id:3974,region_name:"Dahr Abi Yaghi - \u0636\u0647\u0631 \u0627\u0628\u064a \u064a\u0627\u063a\u064a"},{id:3975,region_name:"Dahr el Ghbare - \u0636\u0647\u0631 \u0627\u0644\u063a\u0628\u0627\u0631"},{id:3976,region_name:"Dahr El Qotlob - \u0636\u0647\u0631 \u0627\u0644\u0642\u0637\u0644\u0628"},{id:3977,region_name:"Dahr Mar Risha - \u0636\u0647\u0631 \u0645\u0627\u0631 \u0631\u064a\u0634\u0627"},{id:3978,region_name:"Dawrat - \u062f\u0648\u0631\u0629 \u0643\u0641\u0631 \u0639\u0628\u064a\u062f\u0627"},{id:3979,region_name:"Dayr Shouwah - \u062f\u064a\u0631 \u0634\u0648\u0627\u062d"},{id:3980,region_name:"Deir Billa - \u062f\u064a\u0631\u0628\u0644\u0627"},{id:3981,region_name:"Deir Kfifane - \u062f\u064a\u0631 \u0643\u0641\u064a\u0641\u0627\u0646"},{id:3982,region_name:"Deir Mar Youhanna Douma - \u062f\u064a\u0631 \u0645\u0627\u0631 \u064a\u0648\u062d\u0646\u0627 \u062f\u0648\u0645\u0627"},{id:3983,region_name:"Deir Mar Youssef Jrabta - \u062f\u064a\u0631 \u0645\u0627\u0631 \u064a\u0648\u0633\u0641 \u062c\u0631\u0628\u062a\u0627 "},{id:3984,region_name:"Derya - \u062f\u0631\u064a\u0627 "},{id:3985,region_name:"Douma - \u062f\u0648\u0645\u0627"},{id:3986,region_name:"Douq - \u062f\u0648\u0642"},{id:3987,region_name:"Edde el Batroun - \u0625\u062f\u0647 \u0627\u0644\u0628\u062a\u0631\u0648\u0646"},{id:3988,region_name:"El Aazeqa - \u0639\u0632\u064a\u0642\u0647 "},{id:3989,region_name:"El Hamra JRANE - \u062d\u0645\u0631\u0627 \u062c\u0631\u0627\u0646"},{id:3990,region_name:"El Harf - \u062d\u0631\u0641"},{id:3991,region_name:"El Heri - \u0647\u0631\u064a"},{id:3992,region_name:"El Khraize - \u062e\u0631\u064a\u0632\u0647"},{id:3993,region_name:"El Midane Kfifane - \u0645\u064a\u062f\u0627\u0646 \u0643\u0641\u064a\u0641\u0627\u0646"},{id:3994,region_name:"El Qabaah - \u0642\u0628\u0639 \u0643\u0641\u064a\u0641\u0627\u0646"},{id:3995,region_name:"En Nahriye - \u0646\u0647\u0631\u064a\u0647"},{id:3996,region_name:"Fadaous - \u0641\u062f\u0639\u0648\u0633"},{id:3997,region_name:"Fehta - \u0641\u062d\u062a\u0627"},{id:3998,region_name:"Ftahat - \u0641\u062a\u0627\u062d\u0627\u062a"},{id:3999,region_name:"Ghouma - \u063a\u0648\u0645\u0627"},{id:4e3,region_name:"Hadtoun - \u062d\u062f\u062a\u0648\u0646"},{id:4001,region_name:"Hai el Birke - \u062d\u064a \u0627\u0644\u0628\u0631\u0643\u0629"},{id:4002,region_name:"Halta - \u062d\u0644\u062a\u0627 "},{id:4003,region_name:"Hamat - \u062d\u0627\u0645\u0627\u062a"},{id:4004,region_name:"Hannouch - \u062d\u0646\u064c\u0648\u0634"},{id:4005,region_name:"Harbouna - \u062d\u0631\u0628\u0648\u0646\u0627"},{id:4006,region_name:"Hardine - \u062d\u0631\u062f\u064a\u0646"},{id:4007,region_name:"Harissa el batroun - \u062d\u0631\u064a\u0635\u0627 \u0627\u0644\u0628\u062a\u0631\u0648\u0646"},{id:4008,region_name:"Hazrita - \u062d\u0632\u0631\u064a\u062a\u0627"},{id:4009,region_name:"Hourata el batroun - \u062d\u0648\u0631\u0627\u062a\u0627 \u0627\u0644\u0628\u062a\u0631\u0648\u0646"},{id:4010,region_name:"Hrayek - \u062d\u0631\u0627\u064a\u0642"},{id:4011,region_name:"Ijdabra - \u0627\u062c\u062f\u0628\u0631\u0627"},{id:4012,region_name:"Jibla - \u062c\u0628\u0644\u0627"},{id:4013,region_name:"Joundi - \u062c\u0646\u062f\u064a"},{id:4014,region_name:"Jrane - \u062c\u0631\u0627\u0646 "},{id:4015,region_name:"Jrebta - \u062c\u0631\u0628\u062a\u0627"},{id:4016,region_name:"Kandoula - \u0642\u0646\u062f\u0648\u0644\u0627"},{id:4017,region_name:"Kfar Aabida - \u0643\u0641\u0631 \u0639\u0628\u064a\u062f\u0627"},{id:4018,region_name:"Kfar Chlaimane - \u0643\u0641\u0631 \u0634\u0644\u064a\u0645\u0627\u0646"},{id:4019,region_name:"Kfar Hatna - \u0643\u0641\u0631\u062d\u062a\u0646\u0627"},{id:4020,region_name:"Kfar Hay - \u0643\u0641\u0631\u062d\u064a"},{id:4021,region_name:"Kfar Helda - \u0643\u0641\u0631 \u062d\u0644\u062f\u0627"},{id:4022,region_name:"Kfarhollos - \u0643\u0641\u0631 \u062e\u0644\u0635"},{id:4023,region_name:"Kfifane - \u0643\u0641\u064a\u0641\u0627\u0646"},{id:4024,region_name:"Kfour El Aarbi - \u0643\u0641\u0648\u0631 \u0627\u0644\u0639\u0631\u0628\u064a"},{id:4025,region_name:"Koubba - \u0643\u0648\u0628\u0627"},{id:4026,region_name:"Kour - \u0643\u0648\u0631"},{id:4027,region_name:"Madfoun - \u0645\u062f\u0641\u0648\u0646"},{id:4028,region_name:"Mahmerch - \u0645\u062d\u0645\u0631\u0634"},{id:4029,region_name:"Mar Mama - \u0645\u0627\u0631 \u0645\u0627\u0645\u0627"},{id:4030,region_name:"Mar Youhanna Maroun - \u0645\u0627\u0631 \u064a\u0648\u062d\u0646\u0627 \u0645\u0627\u0631\u0648\u0646"},{id:4031,region_name:"Mar Youssef - \u0645\u0627\u0631 \u064a\u0648\u0633\u0641"},{id:4032,region_name:"Masrah - \u0645\u0633\u0631\u062d"},{id:4033,region_name:"Mazraat Biyade - \u0645\u0632\u0631\u0639\u0629 \u0628\u064a\u0627\u0636"},{id:4034,region_name:"Meghrak - \u0645\u063a\u0631\u0627\u0642"},{id:4035,region_name:"Mrah Chdid - \u0645\u0631\u0627\u062d \u0634\u062f\u064a\u062f"},{id:4036,region_name:"Mrah El Haj - \u0645\u0631\u0627\u062d \u0627\u0644\u062d\u0627\u062c"},{id:4037,region_name:"Mrah Ez Zaiat - \u0645\u0631\u0627\u062d \u0627\u0644\u0632\u064a\u0627\u062a"},{id:4038,region_name:"Myle - \u0645\u064a\u0644"},{id:4039,region_name:"Nabaa ej Jdid - \u0646\u0628\u0639 \u0627\u0644\u062c\u062f\u064a\u062f"},{id:4040,region_name:"Nahle batroun - \u0646\u062d\u0644\u0627  \u0627\u0644\u0628\u062a\u0631\u0648\u0646"},{id:4041,region_name:"Najmet es Sobh - \u0646\u062c\u0645\u0629 \u0627\u0644\u0635\u0628\u062d"},{id:4042,region_name:"Niha El Batroun - \u0646\u064a\u062d\u0627 \u0627\u0644\u0628\u062a\u0631\u0648\u0646"},{id:4043,region_name:"Ouadi ej Jord - \u0648\u0627\u062f\u064a \u0627\u0644\u062c\u0631\u062f"},{id:4044,region_name:"Ouadi Tanourine Et Tahta - \u0648\u0627\u062f\u064a \u062a\u0646\u0648\u0631\u064a\u0646 \u0627\u0644\u062a\u062d\u062a\u0627"},{id:4045,region_name:"Ouata Haub - \u0648\u0637\u0649 \u062d\u0648\u0628"},{id:4046,region_name:"Qarnaoun - \u0642\u0631\u0646\u0639\u0648\u0646"},{id:4047,region_name:"Qornet el Marj - \u0642\u0631\u0646\u0629 \u0627\u0644\u0645\u0631\u062c"},{id:4048,region_name:"Quajh El - Hajar - \u0648\u062c\u0647 \u0627\u0644\u062d\u062c\u0631"},{id:4049,region_name:"Racha - \u0631\u0627\u0634\u0627"},{id:4050,region_name:"Rachana - \u0631\u0627\u0634\u0627\u0646\u0627"},{id:4051,region_name:"Rachkida - \u0631\u0627\u0634\u0643\u064a\u062f\u0627"},{id:4052,region_name:"Rachkidde - \u0631\u0627\u0634\u0643\u0650\u062f\u0651\u0647"},{id:4053,region_name:"Ram el batroun - \u0627\u0644\u0631\u0627\u0645 \u0627\u0644\u0628\u062a\u0631\u0648\u0646"},{id:4054,region_name:"Ramate - \u0631\u0645\u0627\u062a"},{id:4055,region_name:"Ras Bnaiya - \u0631\u0627\u0633 \u0628\u0646\u064a\u0647"},{id:4056,region_name:"Ras Ed Daouali - \u0631\u0627\u0633 \u0627\u0644\u062f\u0648\u0627\u0644\u064a"},{id:4057,region_name:"Ras Nahhach - \u0631\u0627\u0633 \u0646\u062d\u0627\u0634"},{id:4058,region_name:"Selaata - \u0633\u0644\u0639\u0627\u062a\u0627"},{id:4059,region_name:"Sghar - \u0635\u063a\u0627\u0631"},{id:4060,region_name:"Smar Jbail - \u0633\u0645\u0627\u0631 \u062c\u0628\u064a\u0644"},{id:4061,region_name:"Sourat - \u0635\u0648\u0631\u0627\u062a"},{id:4062,region_name:"Ssel'aal - \u0633\u0644\u0639 "},{id:4063,region_name:"Tannourine el Faouqa - \u062a\u0646\u0648\u0631\u064a\u0646 \u0627\u0644\u0641\u0648\u0642\u0627"},{id:4064,region_name:"Tanourine Et Tahta - \u062a\u0646\u0648\u0631\u064a\u0646 \u0627\u0644\u062a\u062d\u062a\u0627"},{id:4065,region_name:"Thoum - \u062a\u062d\u0648\u0645"},{id:4066,region_name:"Toula - \u062a\u0648\u0644\u0627"},{id:4067,region_name:"Yarita - \u064a\u0627\u0631\u064a\u062a\u0627"},{id:4068,region_name:"Zane - \u0632\u0627\u0646"}]},{id:20,DistrictDescription:"El Koura - \u0627\u0644\u0643\u0648\u0631\u0629",Cities:[{id:4069,region_name:" DEIR EL BALAMAND  - \u062f\u064a\u0631 \u0627\u0644\u0628\u0644\u0645\u0646\u062f"},{id:4070,region_name:" KELBATA  - \u0643\u0644\u0628\u0627\u062a\u0627"},{id:4071,region_name:" MJEYDIL KFAR HAZIR - \u0645\u062c\u064a\u062f\u0644 \u0643\u0641\u0631 \u062d\u0632\u064a\u0631"},{id:4072,region_name:"Aaba - \u0639\u0628\u0627 \u0627\u0644\u0643\u0648\u0631\u0629"},{id:4073,region_name:"Aafsdiq - \u0639\u0641\u0635\u062f\u064a\u0642"},{id:4074,region_name:"Ain Aakrine - \u0639\u064a\u0646 \u0639\u0643\u0631\u064a\u0646"},{id:4075,region_name:"Al-Hraiche - \u062d\u0631\u064a\u0634\u0647"},{id:4076,region_name:"Amioun - \u0627\u0645\u064a\u0648\u0646"},{id:4077,region_name:"Bahbouch - \u0628\u062d\u0628\u0648\u0634 "},{id:4078,region_name:"Barghoun - \u0628\u0631\u063a\u0648\u0646"},{id:4079,region_name:"Barsa - \u0628\u0631\u0635\u0627"},{id:4080,region_name:"Batroumine - \u0628\u062a\u0631\u0648\u0645\u064a\u0646"},{id:4081,region_name:"Bdeihoun - \u0628\u062f\u0628\u0647\u0648\u0646"},{id:4082,region_name:"Bdibba - \u0628\u062f\u0628\u0627"},{id:4083,region_name:"Bechmizzine - \u0628\u0634\u0645\u0632\u064a\u0646"},{id:4084,region_name:"Bednayel el koura - \u0628\u062f\u0646\u0627\u064a\u0644 \u0627\u0644\u0643\u0648\u0631\u0629"},{id:4085,region_name:"Bkeftine - \u0628\u0643\u0641\u062a\u064a\u0646"},{id:4086,region_name:"Bnehrane - \u0628\u0646\u0647\u0631\u0627\u0646"},{id:4087,region_name:"Bsarma - \u0628\u0635\u0631\u0645\u0627"},{id:4088,region_name:"Btaaboura - \u0628\u062a\u0639\u0628\u0648\u0631\u0629"},{id:4089,region_name:"Btouratij - \u0628\u062a\u0648\u0631\u0627\u062a\u064a\u062c"},{id:4090,region_name:"Btourram - \u0628\u0637\u0631\u0627\u0645"},{id:4091,region_name:"Bziza - \u0628\u0632\u064a\u0632\u0627"},{id:4092,region_name:"Dahr AlAin - \u0636\u0647\u0631 \u0627\u0644\u0639\u064a\u0646"},{id:4093,region_name:"Dar Baachtar - \u062f\u0627\u0631 \u0628\u0639\u0634\u062a\u0627\u0631"},{id:4094,region_name:"Dar Chmizzine - \u062f\u0627\u0631 \u0634\u0645\u0632\u064a\u0646"},{id:4095,region_name:"Dedde - \u062f\u062f\u0647"},{id:4096,region_name:"El Aaqbe - \u0639\u0642\u0628\u0629 "},{id:4097,region_name:"El Bahsas - \u0628\u062d\u0635\u0627\u0635"},{id:4098,region_name:"El Bqaiaa - \u0627\u0644\u0628\u0642\u064a\u0639\u0629"},{id:4099,region_name:"En Nakhle - \u0646\u062e\u0644\u0629"},{id:4100,region_name:"Enfe - \u0623\u0646\u0641\u0647"},{id:4101,region_name:"Fiaa - \u0641\u064a\u0639"},{id:4102,region_name:"Haret El KHASSEH  - \u062d\u0627\u0631\u0629 \u0627\u0644\u062e\u0633\u0629"},{id:4103,region_name:"Ijdabrine - \u0627\u062c\u062f\u0639\u0628\u0631\u064a\u0646"},{id:4104,region_name:"Jdeideh Berkacha - \u062c\u062f\u064a\u062f\u0629 \u0628\u0631\u0642\u0627\u0634\u0627"},{id:4105,region_name:"Kaftoun - \u0643\u0641\u062a\u0648\u0646"},{id:4106,region_name:"Kefraiya - \u0643\u0641\u0631\u064a\u0627 \u0627\u0644\u0643\u0648\u0631\u0629"},{id:4107,region_name:"Kfar Aaqqa - \u0643\u0641\u0631 \u0639\u0642\u0627"},{id:4108,region_name:"Kfar Hata - \u0643\u0641\u0631\u062d\u0627\u062a\u0627"},{id:4109,region_name:"Kfar Hazir - \u0643\u0641\u0631\u062d\u0632\u064a\u0631"},{id:4110,region_name:"Kfar Qahel - \u0643\u0641\u0631\u0642\u0627\u0647\u0644"},{id:4111,region_name:"Kfar Saroun - \u0643\u0641\u0631\u0635\u0627\u0631\u0648\u0646"},{id:4112,region_name:"Kousba - \u0643\u0648\u0633\u0628\u0627"},{id:4113,region_name:"Majdel el Koura - \u0645\u062c\u062f\u0644 \u0627\u0644\u0643\u0648\u0631\u0629"},{id:4114,region_name:"Metrit - \u0645\u062a\u0631\u064a\u062a"},{id:4115,region_name:"Oueta Fares - \u0648\u0637\u0649 \u0641\u0627\u0631\u0633"},{id:4116,region_name:"Qalhat - \u0642\u0644\u062d\u0627\u062a"},{id:4117,region_name:"Ras Maska - \u0631\u0627\u0633 \u0645\u0633\u0642\u0627"},{id:4118,region_name:"Ras Masqa Ech Chmaliye - \u0631\u0627\u0633 \u0645\u0633\u0642\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064a\u0629"},{id:4119,region_name:"Ras Masqa Ej Jnoubiye - \u0631\u0627\u0633 \u0645\u0633\u0642\u0627 \u0627\u0644\u062c\u0646\u0648\u0628\u064a\u0629"},{id:4120,region_name:"Rechdibbine - \u0631\u0634\u062f\u0628\u064a\u0646"},{id:4121,region_name:"Zakroun - \u0632\u0643\u0631\u0648\u0646"},{id:4122,region_name:"Zakzouk - \u0632\u0643\u0632\u0648\u0643"},{id:4123,region_name:"Zgharta el Mtaouleh - \u0632\u063a\u0631\u062a\u0627 \u0627\u0644\u0645\u062a\u0627\u0648\u0644\u0629"}]},{id:21,DistrictDescription:"El Minieh-Dennie - \u0627\u0644\u0645\u0646\u064a\u0629 \u0627\u0644\u0636\u0646\u064a\u0629",Cities:[{id:4124,region_name:" MAZRAAT KETRANE  - \u0645\u0632\u0631\u0639\u0629 \u0643\u062a\u0631\u0627\u0646"},{id:4125,region_name:"Aadoui - \u0639\u062f\u0648\u0629"},{id:4126,region_name:"Aassaimout - \u0639\u0635\u064a\u0645\u0648\u062a"},{id:4127,region_name:"Aassoun - \u0639\u0627\u0635\u0648\u0646"},{id:4128,region_name:"Abou Hamad - \u0627\u0628\u0648 \u062d\u0645\u062f"},{id:4129,region_name:"Afqa El Minieh - \u0627\u0641\u0642\u0627 \u0627\u0644\u0645\u0646\u064a\u0647"},{id:4130,region_name:"Ain es Safsaf - \u0639\u064a\u0646 \u0627\u0644\u0635\u0641\u0635\u0627\u0641"},{id:4131,region_name:"Ain Et Tine - \u0639\u064a\u0646 \u0627\u0644\u062a\u064a\u0646\u0647 \u0627\u0644\u0645\u0646\u064a\u0647"},{id:4132,region_name:"Amar - \u0639\u064a\u0645\u0631 "},{id:4133,region_name:"Azqey - \u0639\u0632\u0642\u064a "},{id:4134,region_name:"Baazqoun - \u0628\u0639\u0632\u0642\u0648\u0646"},{id:4135,region_name:"Bahsa - \u0627\u0644\u0628\u062d\u0635\u0629"},{id:4136,region_name:"Bakhaoun - \u0628\u062e\u0639\u0648\u0646"},{id:4137,region_name:"Bchennata - \u0628\u0634\u0646\u0627\u062a\u0627"},{id:4138,region_name:"Bechhara - \u0628\u0634\u062d\u0627\u0631\u0629"},{id:4139,region_name:"Bechtayel - \u0628\u0634\u062a\u0627\u064a\u0644"},{id:4140,region_name:"Behouaita - \u0628\u062d\u0648\u064a\u062a\u0627"},{id:4141,region_name:"Beit Bakkour - \u0628\u064a\u062a \u0628\u0643\u0648\u0631"},{id:4142,region_name:"Beit Daoud Izal - \u0628\u064a\u062a \u062f\u0627\u0648\u0648\u062f \u0639\u0632\u0627\u0644"},{id:4143,region_name:"Beit El Faqs - \u0628\u064a\u062a \u0627\u0644\u0641\u0642\u0633"},{id:4144,region_name:"Beit Haouik - \u0628\u064a\u062a \u062d\u0627\u0648\u064a\u0643"},{id:4145,region_name:"Beit Hasna - \u0628\u064a\u062a \u062d\u0633\u0646\u0629"},{id:4146,region_name:"Beit jida - \u0628\u064a\u062a \u062c\u062f\u0627"},{id:4147,region_name:"Beit Kanj - \u0628\u064a\u062a \u0643\u0646\u062c"},{id:4148,region_name:"Beit Moumne - \u0628\u064a\u062a \u0645\u0648\u0645\u0646\u0629"},{id:4149,region_name:"Beit Radouane - \u0628\u064a\u062a \u0631\u0636\u0648\u0627\u0646"},{id:4150,region_name:"Beit Zoud - \u0628\u064a\u062a \u0632\u0648\u062f"},{id:4151,region_name:"Bhannine El Minieh - \u0628\u062d\u0646\u064a\u0646 \u0627\u0644\u0645\u0646\u064a\u0647"},{id:4152,region_name:"Borj El Yahoudiye - \u0628\u0631\u062c \u0627\u0644\u064a\u0647\u0648\u062f\u064a\u0629"},{id:4153,region_name:"Bqaa Safrin - \u0628\u0642\u0627\u0639 \u0635\u0641\u0631\u064a\u0646"},{id:4154,region_name:"Bqarsouna - \u0628\u0642\u0631\u0635\u0648\u0646\u0647"},{id:4155,region_name:"Btahline - \u0628\u062a\u062d\u0644\u064a\u0646"},{id:4156,region_name:"Btellaiye - \u0628\u062a\u0644\u0627\u064a\u0647"},{id:4157,region_name:"Btermaz - \u0628\u0637\u0631\u0645\u0627\u0632"},{id:4158,region_name:"Chmis - \u0627\u0644\u0634\u0645\u064a\u0633"},{id:4159,region_name:"Dairaiya - \u062f\u0627\u0631\u064a\u0627 \u0627\u0644\u0645\u0646\u064a\u0647"},{id:4160,region_name:"Debaal El Minieh - \u062f\u0628\u0639\u0644 \u0627\u0644\u0645\u0646\u064a\u0647"},{id:4161,region_name:"Deir Amar - \u062f\u064a\u0631 \u0639\u0645\u0627\u0631"},{id:4162,region_name:"Deir Nbouh - \u062f\u064a\u0631 \u0646\u0628\u0648\u062d"},{id:4163,region_name:"Ech Chalout - \u0634\u0627\u0644\u0648\u0637"},{id:4164,region_name:"El Beddaoui - \u0628\u062f\u0627\u0648\u064a"},{id:4165,region_name:"El Hazmiye - \u062d\u0627\u0632\u0645\u064a\u0629 \u0627\u0644\u0645\u0646\u064a\u0647"},{id:4166,region_name:"El Kharnoub - \u062e\u0631\u0646\u0648\u0628 \u0627\u0644\u0645\u0646\u064a\u0647"},{id:4167,region_name:"El Medine ej jdide - \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629"},{id:4168,region_name:"El Minie - \u0627\u0644\u0645\u0646\u064a\u0647"},{id:4169,region_name:"En Nabi Kzaiber - \u0627\u0644\u0646\u0628\u064a \u0643\u0632\u064a\u0628\u0631"},{id:4170,region_name:"En Nabi Youchaa - \u0627\u0644\u0646\u0628\u064a \u064a\u0648\u0634\u0639"},{id:4171,region_name:"Er Rihaniye El Minieh - \u0631\u064a\u062d\u0627\u0646\u064a\u0647  \u0627\u0644\u0645\u0646\u064a\u0647"},{id:4172,region_name:"Es Snoubar - \u0635\u0646\u0648\u0628\u0631"},{id:4173,region_name:"Haoura - \u062d\u0648\u0627\u0631\u0629 "},{id:4174,region_name:"Haql El Aazime - \u062d\u0642\u0644 \u0627\u0644\u0639\u0632\u064a\u0645\u0629"},{id:4175,region_name:"Haqlit - \u062d\u0642\u0644\u0629"},{id:4176,region_name:"Harf es siyad - \u062d\u0631\u0641 \u0627\u0644\u0633\u064a\u0627\u062f"},{id:4177,region_name:"Izal - \u0625\u064a\u0632\u0627\u0644"},{id:4178,region_name:"Jairoun - \u062c\u064a\u0631\u0648\u0646"},{id:4179,region_name:"Jarjour - \u062c\u0631\u062c\u0648\u0631"},{id:4180,region_name:"Kahf El - Malloul - \u0643\u0641\u064e \u0627\u0644\u0645\u0644\u0648\u0644"},{id:4181,region_name:"Karm El - Mohr - \u0643\u0631\u0645 \u0627\u0644\u0645\u0647\u0631"},{id:4182,region_name:"Karm El Akhras - \u0643\u0631\u0645 \u0627\u0644\u0627\u062e\u0631\u0633"},{id:4183,region_name:"Kfar Bebnine - \u0643\u0641\u0631 \u0628\u0628\u0646\u064a\u0646"},{id:4184,region_name:"Kfar Chillane - \u0643\u0641\u0631 \u0634\u0644\u0627\u0646"},{id:4185,region_name:"Kfar Habou - \u0643\u0641\u0631 \u062d\u0628\u0648"},{id:4186,region_name:"Kharnoub - \u062e\u0631\u0646\u0648\u0628"},{id:4187,region_name:"Maassarati - \u0645\u0639\u0635\u0631\u0627\u062a\u064a"},{id:4188,region_name:"Markabta - \u0645\u0631\u0643\u0628\u062a\u0627"},{id:4189,region_name:"Mazraat Aartoussi - \u0645\u0632\u0631\u0639\u0629 \u0639\u0631\u0637\u0648\u0633\u064a"},{id:4190,region_name:"MAZRAAT EL KREYM  - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0643\u0631\u064a\u0645"},{id:4191,region_name:"Mgharet ech Cheikh - \u0645\u063a\u0627\u0631\u0629 \u0627\u0644\u0634\u064a\u062e"},{id:4192,region_name:"Moulid - \u0645\u0648\u0644\u064a\u062f"},{id:4193,region_name:"Mrah Es Sfire - \u0645\u0631\u0627\u062d \u0627\u0644\u0633\u0641\u064a\u0631\u0629"},{id:4194,region_name:"Mrah Es Sreij - \u0645\u0631\u0627\u062d \u0627\u0644\u0633\u0631\u064a\u062c"},{id:4195,region_name:"Mrebbine - \u0645\u0631\u0628\u064a\u0646"},{id:4196,region_name:"Nemrine - \u0646\u0645\u0631\u064a\u0646"},{id:4197,region_name:"Ouadi En Nahle - \u0648\u0627\u062f\u064a \u0627\u0644\u0646\u062d\u0644\u0629"},{id:4198,region_name:"Ouatiye - \u0648\u0627\u0637\u064a\u0647"},{id:4199,region_name:"Qarhaiya - \u0642\u0631\u062d\u064a\u0627"},{id:4200,region_name:"Qarn - \u0627\u0644\u0642\u0631\u0646"},{id:4201,region_name:"Qarsita - \u0642\u0631\u0635\u064a\u062a\u0627"},{id:4202,region_name:"Qattine El Minieh - \u0627\u0644\u0642\u0637\u064a\u0646 \u0627\u0644\u0645\u0646\u064a\u0647"},{id:4203,region_name:"Qemmamine - \u0642\u0645\u0627\u0645\u064a\u0646"},{id:4204,region_name:"Qraine - \u0642\u0631\u064a\u0646"},{id:4205,region_name:"Raouda - \u0631\u0648\u0636\u0647 \u0627\u0644\u0645\u0646\u064a\u0647"},{id:4206,region_name:"Sertouka - \u0633\u0631\u062a\u0648\u0643\u0627"},{id:4207,region_name:"Sfire - \u0633\u0641\u064a\u0631\u0629"},{id:4208,region_name:"Sir Ed Danniye - \u0633\u064a\u0631 \u0627\u0644\u0636\u0646\u064a\u0629"},{id:4209,region_name:"Souaqi - \u0627\u0644\u0633\u0648\u0627\u0642\u064a"},{id:4210,region_name:"Tarane - \u0637\u0627\u0631\u0627\u0646"},{id:4211,region_name:"Terbol El Minieh - \u062a\u0631\u0628\u0644 \u0627\u0644\u0645\u0646\u064a\u0647"},{id:4212,region_name:"Wadi en Njass - \u0648\u0627\u062f\u064a \u0627\u0644\u0646\u062c\u0627\u0635"},{id:4213,region_name:"Zghartighrine - \u0632\u063a\u0631\u062a\u063a\u0631\u064a\u0646"},{id:4214,region_name:"Zouq Bhannine - \u0630\u0648\u0642 \u0628\u062d\u0646\u064a\u0646"}]},{id:22,DistrictDescription:"Tripoli - \u0637\u0631\u0627\u0628\u0644\u0633",Cities:[{id:4215,region_name:"Abou Samra - \u0627\u0628\u0648 \u0633\u0645\u0631\u0627"},{id:4216,region_name:"Bab Al Ramel - \u0628\u0627\u0628 \u0627\u0644\u0631\u0645\u0644 "},{id:4217,region_name:"Bahsas - \u0627\u0644\u0628\u062d\u0635\u0627\u0635"},{id:4218,region_name:"Dam Wal Farz - \u0627\u0644\u0636\u0645 \u0648 \u0627\u0644\u0641\u0631\u0632"},{id:4219,region_name:"Ed Debbagha - \u0627\u0644\u062f\u0628\u0627\u063a\u0629"},{id:4220,region_name:"El Maloula - \u0627\u0644\u0645\u0644\u0648\u0644\u0629"},{id:4221,region_name:"El Mina - \u0627\u0644\u0645\u064a\u0646\u0627"},{id:4222,region_name:"Hadid - \u0627\u0644\u062d\u062f\u064a\u062f"},{id:4223,region_name:"Hdadine - \u0627\u0644\u062d\u062f\u0627\u062f\u064a\u0646"},{id:4224,region_name:"Jessrine - \u062c\u0633\u0631\u064a\u0646"},{id:4225,region_name:"Mankoubin - \u0645\u0646\u0643\u0648\u0628\u064a\u0646"},{id:4226,region_name:"Mhatreh - \u0627\u0644\u0645\u0647\u0627\u062a\u0631\u0629"},{id:4227,region_name:"MINA 1 - \u0645\u064a\u0646\u0627 \u0637\u0631\u0627\u0628\u0644\u0633 1"},{id:4228,region_name:"MINA 2 - \u0645\u064a\u0646\u0627 \u0637\u0631\u0627\u0628\u0644\u0633 2"},{id:4229,region_name:"Mina Jardin - \u0628\u0633\u0627\u062a\u064a\u0646 \u0627\u0644\u0645\u064a\u0646\u0627"},{id:4230,region_name:"Noury - \u0627\u0644\u0646\u0648\u0631\u064a"},{id:4231,region_name:"Qalamoun - \u0627\u0644\u0642\u0644\u0645\u0648\u0646"},{id:4232,region_name:"Qoubbe - \u0627\u0644\u0642\u0628\u0629"},{id:4233,region_name:"Rammanet - \u0627\u0644\u0631\u0645\u0627\u0646\u0629"},{id:4234,region_name:"Shok - \u0634\u0642"},{id:4235,region_name:"Souayqa  - \u0627\u0644\u0633\u0648\u064a\u0642\u0629"},{id:4236,region_name:"Tabbaneh - \u0627\u0644\u062a\u0628\u0627\u0646\u0629"},{id:4237,region_name:"Tal - \u0627\u0644\u062a\u0644"},{id:4238,region_name:"Trablous Jardins - \u0628\u0633\u0627\u062a\u064a\u0646 \u0637\u0631\u0627\u0628\u0644\u0633"},{id:4239,region_name:"Trablous Zeitoun - \u0637\u0631\u0627\u0628\u0644\u0633 \u0627\u0644\u0632\u064a\u062a\u0648\u0646"},{id:4240,region_name:"Tripoli - \u0637\u0631\u0627\u0628\u0644\u0633"},{id:4241,region_name:"Zahrieh - \u0627\u0644\u0632\u0627\u0647\u0631\u064a\u0629"}]},{id:23,DistrictDescription:"Zgharta - \u0632\u063a\u0631\u062a\u0627",Cities:[{id:4242,region_name:" IAAL  - \u0625\u064a\u0639\u0627\u0644"},{id:4243,region_name:"Aachach - \u0639\u0634\u0627\u0634"},{id:4244,region_name:"Aalma - \u0639\u0644\u0645\u0627"},{id:4245,region_name:"Aaqbet Sibaal - \u0639\u0642\u0628\u0629 \u0633\u0628\u0639\u0644"},{id:4246,region_name:"Aarbet Qozhaiya - \u0639\u0631\u0628\u0629 \u0642\u0632\u062d\u064a\u0627"},{id:4247,region_name:"Aardat - \u0639\u0631\u062f\u0627\u062a"},{id:4248,region_name:"Aarjess - \u0639\u0631\u062c\u0633"},{id:4249,region_name:"Ain Tourine - \u0639\u064a\u0646\u0637\u0648\u0631\u064a\u0646"},{id:4250,region_name:"Aitou - \u0623\u064a\u0637\u0648"},{id:4251,region_name:"Al Aaqbe - \u0639\u0642\u0628\u0629 \u0639\u0644\u0645\u0627"},{id:4252,region_name:"Arde - \u0623\u0631\u062f\u0647"},{id:4253,region_name:"Aslout - \u0627\u0633\u0644\u0648\u062a"},{id:4254,region_name:"Asnoun - \u0627\u0635\u0646\u0648\u0646"},{id:4255,region_name:"Baslouqit - \u0628\u0633\u0644\u0648\u0642\u064a\u062a"},{id:4256,region_name:"Bayader Rachaaine - \u0628\u064a\u0627\u062f\u0631 \u0631\u0634\u0639\u064a\u0646"},{id:4257,region_name:"Bchama - \u0628\u0634\u0627\u0645\u0627"},{id:4258,region_name:"Bchannine - \u0628\u0634\u0646\u064a\u0646"},{id:4259,region_name:"Beit Aabeid - \u0628\u064a\u062a \u0639\u0628\u064a\u062f"},{id:4260,region_name:"Beit Aaoukar - \u0628\u064a\u062a \u0639\u0648\u0643\u0631"},{id:4261,region_name:"Beit Barakat - \u0628\u064a\u062a \u0628\u0631\u0643\u0627\u062a"},{id:4262,region_name:"Beit el Hraqsa - \u0628\u064a\u062a \u0627\u0644\u062d\u0631\u0642\u0635\u0649"},{id:4263,region_name:"Beit Knaty - \u0628\u064a\u062a \u0642\u0646\u0627\u0637\u064a"},{id:4264,region_name:"Bnechaai - \u0628\u0646\u0634\u0639\u064a"},{id:4265,region_name:"Bouhairet Toula - \u0628\u062d\u064a\u0631\u0629 \u062a\u0648\u0644\u0627"},{id:4266,region_name:"Bousit - \u0628\u0648\u0633\u064a\u0637"},{id:4267,region_name:"Bsebaal - \u0628\u0633\u0628\u0639\u0644"},{id:4268,region_name:"Danha - \u062f\u0646\u0647\u0627"},{id:4269,region_name:"Darayia - \u062f\u0627\u0631\u064a\u0627 "},{id:4270,region_name:"Ehden - \u0627\u0647\u062f\u0646"},{id:4271,region_name:"Ejbeaa - \u0627\u062c\u0628\u0639"},{id:4272,region_name:"El Hariq - \u062d\u0631\u064a\u0642"},{id:4273,region_name:"El Houakir - \u062d\u0648\u0627\u0643\u064a\u0631"},{id:4274,region_name:"El Khaldiye - \u062e\u0627\u0644\u062f\u064a\u0629"},{id:4275,region_name:"El Qadriye - \u0642\u0627\u062f\u0631\u064a\u0647"},{id:4276,region_name:"Er Rmaile - \u0631\u0645\u064a\u0644\u0647 \u0623\u0631\u062f\u0647"},{id:4277,region_name:"Et Talle - \u062a\u0644\u0629 \u0632\u063a\u0631\u062a\u0627"},{id:4278,region_name:"Fouwar zgharta - \u0641\u0648\u0627\u0631 \u0632\u063a\u0631\u062a\u0627"},{id:4279,region_name:"Fradis - \u0627\u0644\u0641\u0631\u0627\u062f\u064a\u0633"},{id:4280,region_name:"Haouqa Et En Naher - \u062d\u0648\u0642\u0627 \u0627\u0644\u0646\u0647\u0631"},{id:4281,region_name:"Haret al Fouwar - \u062d\u0627\u0631\u0629 \u0627\u0644\u0641\u0648\u0627\u0631"},{id:4282,region_name:"Haret Ej Jdide Zgharta - \u062d\u0627\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0632\u063a\u0631\u062a\u0627"},{id:4283,region_name:"Haret el Baklik - \u062d\u0627\u0631\u0629 \u0627\u0644\u0628\u0643\u0644\u064a\u0643"},{id:4284,region_name:"Harfe Arde - \u062d\u0631\u0641 \u0623\u0631\u062f\u0647"},{id:4285,region_name:"Hariq Zgharta - \u062d\u0631\u064a\u0642 \u0632\u063a\u0631\u062a\u0627"},{id:4286,region_name:"Harsoun Ej Jdide - \u062d\u0635\u0631\u0648\u0646 \u0627\u0644\u062c\u062f\u064a\u062f\u0629"},{id:4287,region_name:"Hilane zgharta - \u062d\u064a\u0644\u0627\u0646 \u0632\u063a\u0631\u062a\u0627"},{id:4288,region_name:"Hmais zgharta - \u062d\u0645\u064a\u0635 "},{id:4289,region_name:"Hraykess - \u062d\u0631\u064a\u0642\u0635"},{id:4290,region_name:"Jdeide zgharta - \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0632\u063a\u0631\u062a\u0627"},{id:4291,region_name:"Kaabouch - \u0643\u0628\u0648\u0634"},{id:4292,region_name:"Kafar Zeina - \u0643\u0641\u0631 \u0632\u064a\u0646\u0627"},{id:4293,region_name:"Kafraiya zgharta - \u0643\u0641\u0631\u064a\u0627 \u0632\u063a\u0631\u062a\u0627"},{id:4294,region_name:"Karbribe - \u0643\u0631\u0628\u0631\u064a\u0628"},{id:4295,region_name:"Karm Sadde - \u0643\u0631\u0645 \u0633\u062f\u0647"},{id:4296,region_name:"Kfar Chakhna - \u0643\u0641\u0631 \u0634\u062e\u0646\u0627"},{id:4297,region_name:"Kfar Dlaqous - \u0643\u0641\u0631\u062f\u0644\u0627\u0642\u0648\u0633"},{id:4298,region_name:"Kfar Fou - \u0643\u0641\u0631 \u0641\u0648"},{id:4299,region_name:"Kfar Haoura - \u0643\u0641\u0631 \u062d\u0648\u0631\u0627"},{id:4300,region_name:"Kfar Hata - \u0643\u0641\u0631 \u062d\u0627\u062a\u0627"},{id:4301,region_name:"Kfar Sghab - \u0643\u0641\u0631 \u0635\u063a\u0627\u0628"},{id:4302,region_name:"Kfar Sghab - \u0643\u0641\u0631\u0635\u063a\u0627\u0628"},{id:4303,region_name:"Kfar Yachit - \u0643\u0641\u0631 \u064a\u0627\u0634\u064a\u062a"},{id:4304,region_name:"Majdalaya zgharta - \u0645\u062c\u062f\u0644\u064a\u0627 \u0632\u063a\u0631\u062a\u0627"},{id:4305,region_name:"Mar Semaane - \u0645\u0627\u0631 \u0633\u0645\u0639\u0627\u0646"},{id:4306,region_name:"Mazraat Ejbeh - \u0645\u0632\u0631\u0639\u0629 \u0625\u062c\u0628\u0639"},{id:4307,region_name:"Mazraat Et Toufah - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062a\u0641\u0627\u062d"},{id:4308,region_name:"Mazraat Hraqs - \u0645\u0632\u0631\u0639\u0629 \u062d\u0631\u064a\u0642\u0635"},{id:4309,region_name:"Mazraat Jnaid - \u0645\u0632\u0631\u0639\u0629 \u062c\u0646\u064a\u062f"},{id:4310,region_name:"Mazret al Nahr - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0646\u0647\u0631 "},{id:4311,region_name:"Miryata - \u0645\u0631\u064a\u0627\u0637\u0627"},{id:4312,region_name:"Miziara - \u0645\u0632\u064a\u0627\u0631\u0629"},{id:4313,region_name:"Qarah Bach - \u0642\u0631\u0647 \u0628\u0627\u0634"},{id:4314,region_name:"Qareit Sakhra - \u0642\u0631\u0639\u064a\u0629 \u0635\u062e\u0631\u0627"},{id:4315,region_name:"Rachaaine - \u0631\u0634\u0639\u064a\u0646"},{id:4316,region_name:"Raskifa - \u0631\u0627\u0633 \u0643\u064a\u0641\u0627"},{id:4317,region_name:"Sahl Danha - \u0633\u0647\u0644 \u062f\u0646\u0647\u0627"},{id:4318,region_name:"Sakhra - \u0635\u062e\u0631\u0629"},{id:4319,region_name:"Sanaallah - \u0635\u0646\u0639 \u0627\u0644\u0644\u0647"},{id:4320,region_name:"Sebaal - \u0633\u0628\u0639\u0644 \u0632\u063a\u0631\u062a\u0627"},{id:4321,region_name:"Seraal - \u0633\u0631\u0639\u064a\u0644"},{id:4322,region_name:"Toula zgharta - \u062a\u0648\u0644\u0627 \u0632\u063a\u0631\u062a\u0627"},{id:4323,region_name:"Zgharta - \u0632\u063a\u0631\u062a\u0627"}]}]},{id:8,GovernorateDescription:"South - \u0627\u0644\u062c\u0646\u0648\u0628",Districts:[{id:24,DistrictDescription:"Jezzine - \u062c\u0632\u064a\u0646",Cities:[{id:4324,region_name:"Aadour - \u0639\u0627\u0636\u0648\u0631"},{id:4325,region_name:"Aaichiye - \u0639\u064a\u0634\u064a\u0629"},{id:4326,region_name:"Aaqmata - \u0639\u0642\u0645\u0627\u062a\u0627 "},{id:4327,region_name:"Aaramta - \u0639\u0631\u0645\u062a\u0649"},{id:4328,region_name:"Aariye - \u0639\u0627\u0631\u064a\u0647"},{id:4329,region_name:"Aarqoub - \u0627\u0644\u0639\u0631\u0642\u0648\u0628"},{id:4330,region_name:"Aazour - \u0639\u0627\u0632\u0648\u0631"},{id:4331,region_name:"Ain el Mir el Estabel - \u0639\u064a\u0646 \u0627\u0644\u0645\u064a\u0631 \u0625\u0633\u0637\u0628\u0644"},{id:4332,region_name:"Ain et Taghra - \u0639\u064a\u0646 \u0627\u0644\u062a\u063a\u0631\u0649"},{id:4333,region_name:"Ain Majdalain - \u0639\u064a\u0646 \u0645\u062c\u062f\u0644\u064a\u0646"},{id:4334,region_name:"Anane - \u0623\u0646\u0627\u0646"},{id:4335,region_name:"Azibeh - \u0639\u0632\u064a\u0628\u0629"},{id:4336,region_name:"Baanoub - \u0628\u0639\u0627\u0646\u0648\u0628"},{id:4337,region_name:"Baba - \u0628\u064a\u0628\u0647"},{id:4338,region_name:"Baissour Jezzine - \u0628\u064a\u0635\u0648\u0631 \u062c\u0632\u064a\u0646"},{id:4339,region_name:"Benouati - \u0628\u0646\u0648\u0627\u062a\u064a \u062c\u0632\u064a\u0646"},{id:4340,region_name:"Bhannine - \u0628\u062d\u0646\u064a\u0646"},{id:4341,region_name:"Bisri - \u0628\u0633\u0631\u064a"},{id:4342,region_name:"Biyad - \u0627\u0644\u0628\u064a\u0627\u0636"},{id:4343,region_name:"Bkassine - \u0628\u0643\u0627\u0633\u064a\u0646"},{id:4344,region_name:"Bouslaya - \u0628\u0648\u0635\u0644\u0627\u064a\u0627"},{id:4345,region_name:"Bteddine el Loqch - \u0628\u062a\u062f\u064a\u0646 \u0627\u0644\u0644\u0642\u0634"},{id:4346,region_name:"Chamkha - \u0634\u0627\u0645\u062e\u0629"},{id:4347,region_name:"Chbeil - \u0634\u0628\u064a\u0644"},{id:4348,region_name:"Choualiq - \u0634\u0648\u0627\u0644\u064a\u0642 \u062c\u0632\u064a\u0646"},{id:4349,region_name:"Dahr ed Deir - \u0636\u0647\u0631 \u0627\u0644\u062f\u064a\u0631"},{id:4350,region_name:"Dahr er Ramle - \u0636\u0647\u0631 \u0627\u0644\u0631\u0645\u0644\u0629"},{id:4351,region_name:"Darayia Jezzine - \u062f\u0627\u0631\u064a\u0627 \u062c\u0632\u064a\u0646"},{id:4352,region_name:"Deir Chkedif - \u0634\u0642\u0627\u062f\u064a\u0641"},{id:4353,region_name:"Deir El Qattine - \u062f\u064a\u0631 \u0642\u0637\u0650\u064a\u0646 "},{id:4354,region_name:"Deir Machmouche - \u062f\u064a\u0631 \u0645\u0634\u0645\u0648\u0634\u0647"},{id:4355,region_name:"Deir Moukhalles - \u062f\u064a\u0631  \u0627\u0644\u0645\u062e\u0644\u0635"},{id:4356,region_name:"Dimechqiye - \u062f\u0645\u0634\u0642\u064a\u0629"},{id:4357,region_name:"El Harf Jezzine - \u0627\u0644\u062d\u0631\u0641 \u062c\u0632\u064a\u0646"},{id:4358,region_name:"El Houraniye - \u062d\u0648\u0631\u0627\u0646\u064a\u0629"},{id:4359,region_name:"El Msous - \u0645\u0635\u0648\u0635"},{id:4360,region_name:"El Qabaa - \u0642\u0628\u0639"},{id:4361,region_name:"Ghbatiye - \u063a\u0628\u064e\u0627\u0637\u064a\u0629"},{id:4362,region_name:"Haidab - \u062d\u064a\u062f\u0627\u0628"},{id:4363,region_name:"Haitoule - \u062d\u064a\u062a\u0648\u0644\u0647"},{id:4364,region_name:"Haitoura - \u062d\u064a\u0637\u0648\u0631\u0629"},{id:4365,region_name:"Haret el Bayder - \u062d\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u062f\u0631"},{id:4366,region_name:"Harf - \u0627\u0644\u062d\u0631\u0641"},{id:4367,region_name:"Hassaniye - \u062d\u0633\u0627\u0646\u064a\u0629"},{id:4368,region_name:"Homsiye - \u062d\u0645\u0635\u064a\u0629"},{id:4369,region_name:"Jabal Toura - \u062c\u0628\u0644 \u0637\u0648\u0631\u0647"},{id:4370,region_name:"Jall Nachi - \u062c\u0644 \u0646\u0627\u0634\u064a"},{id:4371,region_name:"Jarmaq - \u0627\u0644\u062c\u0631\u0645\u0642"},{id:4372,region_name:"Jdaidet el Ouadi - \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0648\u0627\u062f\u064a \u062c\u0632\u064a\u0646"},{id:4373,region_name:"Jensnaya - \u062c\u0646\u0633\u0646\u0627\u064a\u0627"},{id:4374,region_name:"Jernaya - \u062c\u0631\u0646\u0627\u064a\u0627"},{id:4375,region_name:"Jezzine - \u062c\u0632\u064a\u0646"},{id:4376,region_name:"Karkha - \u0643\u0631\u062e\u0627"},{id:4377,region_name:"Kfar Falous - \u0643\u0641\u0631\u0641\u0627\u0644\u0648\u0633"},{id:4378,region_name:"Kfar Houne - \u0643\u0641\u0631\u062d\u0648\u0646"},{id:4379,region_name:"Kfar Jarra - \u0643\u0641\u0631\u062c\u0631\u0627"},{id:4380,region_name:"Kfar Taala - \u0643\u0641\u0631\u062a\u0639\u0644\u0627"},{id:4381,region_name:"Khallet Khazen - \u062e\u0644\u0629 \u062e\u0627\u0632\u0646"},{id:4382,region_name:"Khirkhaya - \u062e\u0631\u062e\u064a\u0627"},{id:4383,region_name:"Lebaa - \u0644\u0628\u0639\u0627"},{id:4384,region_name:"Louaiziye - \u0644\u0648\u064a\u0632\u0629 \u062c\u0632\u064a\u0646"},{id:4385,region_name:"Maarous el Branieh - \u0645\u0627\u0631\u0648\u0633 \u0627\u0644\u0628\u0631\u0627\u0646\u064a\u0629"},{id:4386,region_name:"Maarous el Jouanieh - \u0645\u0627\u0631\u0648\u0633 \u0627\u0644\u062c\u0648\u0627\u0646\u064a\u0629"},{id:4387,region_name:"Machmouche - \u0645\u0634\u0645\u0648\u0634\u0629"},{id:4388,region_name:"Mahmoudiye Jezzine - \u0645\u062d\u0645\u0648\u062f\u064a\u0629 \u062c\u0632\u064a\u0646"},{id:4389,region_name:"Maknouniye - \u0645\u0643\u0646\u0648\u0646\u064a\u0629 "},{id:4390,region_name:"Mazraat  Aarqoub - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0639\u0631\u0642\u0648\u0628"},{id:4391,region_name:"Mazraat  Jabal Toura - \u0645\u0632\u0631\u0639\u0629 \u062c\u0628\u0644 \u0637\u0648\u0631\u0647"},{id:4392,region_name:"Mazraat  Tamra - \u0645\u0632\u0631\u0639\u0629 \u0637\u0645\u0631\u0647"},{id:4393,region_name:"Mazraat Aaqmata - \u0645\u0632\u0631\u0639\u0629 \u0639\u0642\u0645\u0627\u062a\u0627 "},{id:4394,region_name:"Mazraat Aaraji - \u0645\u0632\u0631\u0639\u0629 \u0639\u0631\u0627\u062c\u064a"},{id:4395,region_name:"Mazraat Al Souairi - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0635\u0648\u064a\u0631\u064a"},{id:4396,region_name:"Mazraat el Btadiniye - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0628\u062a\u062f\u064a\u0646\u064a\u0629"},{id:4397,region_name:"Mazraat el Khaoukh - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062e\u0648\u062e"},{id:4398,region_name:"Mazraat el Mathane - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0645\u0637\u062d\u0646\u0629"},{id:4399,region_name:"Mazraat er Rohbane - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0631\u0647\u0628\u0627\u0646 "},{id:4400,region_name:"Mazraat Louzyde - \u0645\u0632\u0631\u0639\u0629 \u0644\u0648\u0632\u064a\u062f "},{id:4401,region_name:"Mharbiye - \u0645\u062d\u0627\u0631\u0628\u064a\u0629"},{id:4402,region_name:"Midane - \u0645\u064a\u062f\u0627\u0646 "},{id:4403,region_name:"Mjaydel - \u0645\u062c\u064a\u062f\u0644"},{id:4404,region_name:"Mlikh - \u0645\u0644\u064a\u062e"},{id:4405,region_name:"Mrah Abdu Chedid - \u0645\u0631\u0627\u062d \u0623\u0628\u0648 \u0634\u062f\u064a\u062f"},{id:4406,region_name:"Mrah El Hbas - \u0645\u0631\u0627\u062d \u0627\u0644\u062d\u0628\u0627\u0633"},{id:4407,region_name:"Mrah Mghaibe - \u0645\u0631\u0627\u062d \u0645\u063a\u0628\u064a\u0647"},{id:4408,region_name:"Mzairaa - \u0645\u0632\u064a\u0631\u0639\u0629"},{id:4409,region_name:"Nabaa - \u0646\u0628\u0639\u0647"},{id:4410,region_name:"Nabi Sejoud - \u0646\u0628\u064a \u0633\u062c\u062f"},{id:4411,region_name:"Ouadi Baanqoudine - \u0648\u0627\u062f\u064a \u0628\u0639\u0646\u0642\u0648\u062f\u064a\u0646"},{id:4412,region_name:"Ouadi el Leimoun - \u0648\u0627\u062f\u064a \u0627\u0644\u0644\u064a\u0645\u0648\u0646"},{id:4413,region_name:"Ouardiye - \u0648\u0631\u062f\u064a\u0629"},{id:4414,region_name:"Ouazaaiye - \u0627\u0648\u0632\u0627\u0639\u064a\u0629"},{id:4415,region_name:"Qaitoule - \u0642\u064a\u062a\u0648\u0644\u064a"},{id:4416,region_name:"Qotrani - \u0642\u0637\u0631\u0627\u0646\u064a"},{id:4417,region_name:"Qrouh - \u0642\u0631\u0648\u062d"},{id:4418,region_name:"Qtale Jezzine - \u0642\u062a\u0627\u0644\u0629 \u062c\u0632\u064a\u0646"},{id:4419,region_name:"Raimat - \u0631\u064a\u0645\u0627\u062a"},{id:4420,region_name:"Rihane Jezzine - \u0631\u064a\u062d\u0627\u0646\u0629 \u062c\u0632\u064a\u0646"},{id:4421,region_name:"Roum - \u0631\u0648\u0645"},{id:4422,region_name:"Roummane Jezzine - \u0631\u0645\u0627\u0646\u0629 "},{id:4423,region_name:"Rous El Franj - \u0631\u0627\u0633 \u0627\u0644\u0648\u0627\u062f\u064a \u0627\u0644\u062d\u0648\u0629"},{id:4424,region_name:"Sabah - \u0635\u0651\u0628\u0627\u062d"},{id:4425,region_name:"Salima - \u0635\u0644\u064a\u0645\u0627"},{id:4426,region_name:"Sejoud - \u0633\u062c\u062f"},{id:4427,region_name:"Sfarai - \u0635\u0641\u0627\u0631\u064a\u0647"},{id:4428,region_name:"Sidoun - \u0635\u064a\u062f\u0648\u0646"},{id:4429,region_name:"Sniye - \u0633\u0646\u064a\u064e\u0627"},{id:4430,region_name:"Sriri - \u0633\u0631\u064a\u0631\u0629"},{id:4431,region_name:"Taaid - \u062a\u0639\u064a\u062f"},{id:4432,region_name:"Tamra - \u0637\u0645\u0631\u0647"},{id:4433,region_name:"Wadi Jezzine - \u0648\u0627\u062f\u064a \u062c\u0632\u064a\u0646"},{id:4434,region_name:"Zaghrine Jezzine - \u0632\u063a\u0631\u064a\u0646 \u062c\u0632\u064a\u0646"},{id:4435,region_name:"Zhalta - \u0632\u062d\u0644\u062a\u0627"}]},{id:25,DistrictDescription:"Saida - \u0635\u064a\u062f\u0627",Cities:[{id:4436,region_name:"Aabra - \u0639\u0628\u0631\u0627 "},{id:4437,region_name:"Aaddoussiye - \u0639\u062f\u0651\u0648\u0633\u064a\u0629"},{id:4438,region_name:"Aadloun - \u0639\u062f\u0644\u0648\u0646"},{id:4439,region_name:"Aanqoun - \u0639\u0646\u0642\u0648\u0646"},{id:4440,region_name:"Aaqbiye - \u0627\u0644\u0639\u0627\u0642\u0628\u064a\u0629"},{id:4441,region_name:"Aaqtanit - \u0639\u0642\u062a\u0646\u064a\u062a"},{id:4442,region_name:"Aarnaba - \u0639\u0631\u0646\u0627\u0628\u0629"},{id:4443,region_name:"Abou el Assouad - \u0627\u0628\u0648 \u0627\u0644\u0627\u0633\u0648\u062f"},{id:4444,region_name:"Ain Ed Delb - \u0639\u064a\u0646 \u0627\u0644\u062f\u0644\u0628"},{id:4445,region_name:"Ain el Hiloue - \u0639\u064a\u0646 \u0627\u0644\u062d\u0644\u0648\u0629"},{id:4446,region_name:"Arkey - \u0627\u0631\u0643\u064a"},{id:4447,region_name:"Arzay - \u0623\u0631\u0632\u064a"},{id:4448,region_name:"Babliye - \u0628\u0627\u0628\u0644\u064a\u0629"},{id:4449,region_name:"Barti - \u0628\u0631\u062a\u064a"},{id:4450,region_name:"Bissariyeh - \u0628\u064a\u0633\u0627\u0631\u064a\u0629"},{id:4451,region_name:"Bnaafoul - \u0628\u0646\u0639\u0641\u0648\u0644"},{id:4452,region_name:"Bqosta - \u0628\u0642\u0633\u0637\u0627"},{id:4453,region_name:"Brak et Tall - \u0628\u0631\u0627\u0643 \u0627\u0644\u062a\u0644"},{id:4454,region_name:"Bramiye - \u0628\u0631\u0627\u0645\u064a\u0629"},{id:4455,region_name:"Daoudiye - \u0627\u0644\u062f\u0627\u0648\u062f\u064a\u0629"},{id:4456,region_name:"Darb es Sim - \u062f\u0631\u0628 \u0627\u0644\u0633\u064a\u0645"},{id:4457,region_name:"Deir Taqla - \u062f\u064a\u0631 \u062a\u0642\u0644\u0627"},{id:4458,region_name:"Dekerman - \u0627\u0644\u062f\u0643\u0631\u0645\u0627\u0646"},{id:4459,region_name:"Dhour Darb es Sim - \u0636\u0647\u0648\u0631 \u062f\u0631\u0628 \u0627\u0644\u0633\u064a\u0645"},{id:4460,region_name:"El Achrafiye - \u0623\u0634\u0631\u0641\u064a\u0629 \u0627\u0644\u0645\u064a\u0629 \u0648\u0645\u064a\u0629"},{id:4461,region_name:"El Mahmoudiye - \u0645\u062d\u0645\u0648\u062f\u064a\u0629"},{id:4462,region_name:"Er Rouayess - \u0631\u0648\u0627\u064a\u0633"},{id:4463,region_name:"Ez Zahrani - \u0627\u0644\u0632\u0647\u0631\u0627\u0646\u064a"},{id:4464,region_name:"Ghassaniye - \u063a\u0633\u0627\u0646\u064a\u0629"},{id:4465,region_name:"Ghaziye - \u063a\u0627\u0632\u064a\u0629"},{id:4466,region_name:"Hababiye - \u062d\u0628\u0627\u0628\u064a\u0629"},{id:4467,region_name:"Hajje - \u062d\u062c\u0629"},{id:4468,region_name:"Haret Saida - \u062d\u0627\u0631\u0629 \u0635\u064a\u062f\u0627"},{id:4469,region_name:"Hartai - \u062d\u0627\u0631\u062a\u064a\u0629"},{id:4470,region_name:"Hlaliye Saida - \u0647\u0644\u0627\u0644\u064a\u0629 \u0635\u064a\u062f\u0627"},{id:4471,region_name:"Insariye - \u0625\u0646\u0635\u0627\u0631\u064a\u0629"},{id:4472,region_name:"Jazire - \u062c\u0632\u064a\u0631\u0629 \u0635\u064a\u062f\u0627"},{id:4473,region_name:"Jdaide Arzai - \u062c\u062f\u064a\u062f\u0629  \u0623\u0631\u0632\u064a"},{id:4474,region_name:"Jinjlaya - \u062c\u0646\u062c\u0644\u0627\u064a\u0629"},{id:4475,region_name:"Kafraiya - \u0643\u0641\u0631\u064a\u0627"},{id:4476,region_name:"Kaouthariyet es Siyad - \u0643\u0648\u062b\u0631\u064a\u0629 \u0627\u0644\u0633\u064a\u0627\u062f"},{id:4477,region_name:"Kfar Badde - \u0643\u0641\u0631 \u0628\u062f\u064e\u0647"},{id:4478,region_name:"Kfar Beit - \u0643\u0641\u0631\u0628\u064a\u062a"},{id:4479,region_name:"Kfar Chellal - \u0643\u0641\u0631 \u0634\u0644\u0627\u0644"},{id:4480,region_name:"Kfar Hatta - \u0643\u0641\u0631\u062d\u062a\u0649"},{id:4481,region_name:"Kfar Melki Saida - \u0643\u0641\u0631\u0645\u0644\u0643\u064a \u0635\u064a\u062f\u0627"},{id:4482,region_name:"Khannoussiye - \u062e\u0646\u0648\u0633\u064a\u0629"},{id:4483,region_name:"Kharayeb Saida - \u0627\u0644\u062e\u0631\u0627\u0626\u0628 \u0635\u064a\u062f\u0627"},{id:4484,region_name:"Khartoum - \u062e\u0631\u0637\u0648\u0645"},{id:4485,region_name:"Khaziz - \u062e\u0632\u064a\u0632"},{id:4486,region_name:"Khirbet Ain el Qanater - \u062e\u0631\u0628\u0629 \u0639\u064a\u0646 \u0627\u0644\u0642\u0646\u0627\u0637\u0631"},{id:4487,region_name:"Khirbet Bassal - \u062e\u0631\u0628\u0629 \u0627\u0644\u0628\u0635\u0644"},{id:4488,region_name:"Khirbet ed Daoueir - \u062e\u0631\u0628\u0629 \u0627\u0644\u062f\u0648\u064a\u0631 \u0635\u064a\u062f\u0627"},{id:4489,region_name:"Loubiye - \u0644\u0648\u0628\u064a\u0629"},{id:4490,region_name:"Maamriye - \u0645\u0639\u0645\u0627\u0631\u064a\u0629"},{id:4491,region_name:"Maamriyet el Kharab - \u0645\u0639\u0645\u0631\u064a\u0629 \u0627\u0644\u062e\u0631\u0627\u0628"},{id:4492,region_name:"Maghdouche - \u0645\u063a\u062f\u0648\u0634\u0629"},{id:4493,region_name:"Majdelyoun - \u0645\u062c\u062f\u0644\u064a\u0648\u0646"},{id:4494,region_name:"Maqsam El  JAOUHARI - \u0645\u0642\u0633\u0645 \u0627\u0644\u062c\u0648\u0647\u0631\u064a"},{id:4495,region_name:"Matariyet ech Choumar - \u0645\u0637\u0631\u064a\u0629 \u0627\u0644\u0634\u0648\u0645\u0631"},{id:4496,region_name:"Mazraat Aabboudiye - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0639\u0628\u0648\u062f\u064a\u0629"},{id:4497,region_name:"Mazraat Aarab ej Jall - \u0645\u0632\u0631\u0639\u0629 \u0639\u0631\u0628 \u0627\u0644\u062c\u0644"},{id:4498,region_name:"Mazraat Ain el Qantara - \u0645\u0632\u0631\u0639\u0629 \u0639\u064a\u0646 \u0627\u0644\u0642\u0646\u0637\u0631\u0629"},{id:4499,region_name:"Mazraat Arab Soukkar - \u0645\u0632\u0631\u0639\u0629 \u0639\u0631\u0628 \u0633\u0643\u0631"},{id:4500,region_name:"Mazraat Arab Tobbaya - \u0645\u0632\u0631\u0639\u0629 \u0639\u0631\u0628  \u0637\u0628\u064e\u0627\u064a\u0627"},{id:4501,region_name:"Mazraat ej Joudaye - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062c\u0648\u062f\u064a\u0629"},{id:4502,region_name:"Mazraat el Aite Niye - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0639\u064a\u062a\u0627\u0646\u064a\u0629"},{id:4503,region_name:"Mazraat el Daoudiye - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062f\u0627\u0648\u062f\u064a\u0629"},{id:4504,region_name:"Mazraat el Hsainiye - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062d\u0633\u064a\u0646\u064a\u0629"},{id:4505,region_name:"Mazraat el Ouasta - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0648\u0627\u0633\u0637\u0629"},{id:4506,region_name:"Mazraat el Yahoudiye - \u0645\u0632\u0631\u0639\u0629  \u0627\u0644\u064a\u0647\u0648\u062f\u064a\u0629"},{id:4507,region_name:"Mazraat Iskandarouna - \u0645\u0632\u0631\u0639\u0629 \u0625\u0633\u0643\u0646\u062f\u0631\u0648\u0646\u0629"},{id:4508,region_name:"Mazraat Jemjim - \u0645\u0632\u0631\u0639\u0629 \u062c\u0645\u062c\u064a\u0645"},{id:4509,region_name:"Mazraat Khaizarane - \u0645\u0632\u0631\u0639\u0629 \u062e\u064a\u0632\u0631\u0627\u0646"},{id:4510,region_name:"Mazraat Khoutaryet er Rezz - \u0645\u0632\u0631\u0639\u0629 \u0643\u0648\u062b\u0631\u064a\u0629 \u0627\u0644\u0631\u0632"},{id:4511,region_name:"Mazraat Matariyet Jbaa - \u0645\u0632\u0631\u0639\u0629 \u0645\u0637\u064a\u0631\u064a\u0629 \u062c\u0628\u0627\u0639"},{id:4512,region_name:"Mazraat Sekkaniye - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0633\u0643\u0646\u064a\u0629"},{id:4513,region_name:"Mazraat Sinai - \u0645\u0632\u0631\u0639\u0629 \u0633\u064a\u0646\u0627\u064a"},{id:4514,region_name:"Mazraat Zaita - \u0645\u0632\u0631\u0639\u0629 \u0632\u064a\u062a\u0627"},{id:4515,region_name:"Merouaniye - \u0645\u0631\u0648\u0627\u0646\u064a\u0629"},{id:4516,region_name:"Mghairiye - \u0645\u063a\u064a\u0631\u064a\u0629 "},{id:4517,region_name:"Mhaidle - \u0627\u0644\u0645\u062d\u064a\u062f\u0644\u0629"},{id:4518,region_name:"Miyeh ou Miyeh - \u0645\u064a\u0629 \u0648\u0645\u064a\u0629"},{id:4519,region_name:"Mrah Kiouane - \u0645\u0631\u0627\u062d \u0643\u064a\u0648\u0627\u0646"},{id:4520,region_name:"Msaileh - \u0627\u0644\u0645\u0635\u064a\u0644\u062d"},{id:4521,region_name:"Najjaryie - \u0646\u062c\u0627\u0631\u064a\u0629"},{id:4522,region_name:"Oussamiyat - \u0627\u0644\u0627\u0648\u0633\u0627\u0645\u064a\u0627\u062a"},{id:4523,region_name:"Qaaqaaii es Snoubar - \u0642\u0639\u0642\u0639\u064a\u0629 \u0627\u0644\u0635\u0646\u0648\u0628\u0631"},{id:4524,region_name:"Qennarit - \u0642\u0646\u0627\u0631\u064a\u062a"},{id:4525,region_name:"Qiyaa - \u0642\u064a\u0627\u0639\u0629"},{id:4526,region_name:"Qnaitra - \u0627\u0644\u0642\u0646\u064a\u0637\u0631\u0629"},{id:4527,region_name:"Qraiye Saida - \u0642\u0631\u064a\u0629 \u0635\u064a\u062f\u0627"},{id:4528,region_name:"Saida - \u0635\u064a\u062f\u0627"},{id:4529,region_name:"Saida Ed Dekermane - \u0635\u064a\u062f\u0627 \u0627\u0644\u062f\u0643\u0631\u0645\u0627\u0646"},{id:4530,region_name:"Saksakiye - \u0633\u0643\u0633\u0643\u064a\u0629"},{id:4531,region_name:"Salhiye - \u0635\u0627\u0644\u062d\u064a\u0629"},{id:4532,region_name:"Sarafand - \u0635\u0631\u0641\u0646\u062f"},{id:4533,region_name:"Sari - \u0633\u0627\u0631\u064a"},{id:4534,region_name:"Sfenti - \u0633\u0641\u0646\u062a\u0627"},{id:4535,region_name:"Sinai - \u0633\u064a\u0646\u0627\u064a"},{id:4536,region_name:"Snaiber - \u0645\u0632\u0631\u0639\u0629 \u0633\u0646\u064a\u0628\u0631"},{id:4537,region_name:"Tanbourit - \u0637\u0646\u0628\u0648\u0631\u064a\u062a"},{id:4538,region_name:"Tebna - \u062a\u0628\u0646\u0627"},{id:4539,region_name:"Toufahta - \u062a\u0641\u0627\u062d\u062a\u0627"},{id:4540,region_name:"Wastani - \u0627\u0644\u0648\u0633\u0637\u0627\u0646\u064a"},{id:4541,region_name:"Zaghdraiya - \u0632\u063a\u062f\u0631\u0627\u064a\u0627"},{id:4542,region_name:"Zaita - \u0632\u064a\u062a\u0627"},{id:4543,region_name:"Zrariye - \u0632\u0631\u0627\u0631\u064a\u0629"}]},{id:26,DistrictDescription:"Sour - \u0635\u0648\u0631",Cities:[{id:4544,region_name:"Aabbassiye - \u0639\u0628\u0627\u0633\u064a\u0629 "},{id:4545,region_name:"Aaitit - \u0639\u064a\u062a\u064a\u062a"},{id:4546,region_name:"Aalma ech Chaab - \u0639\u0644\u0645\u0627 \u0627\u0644\u0634\u0639\u0628"},{id:4547,region_name:"Aamrane - \u0639\u0645\u0631\u0627\u0646"},{id:4548,region_name:"Aazziye - \u0639\u0632\u0651\u0650\u064a\u0647"},{id:4549,region_name:"Abou Chach - \u0623\u0628\u0648 \u0634\u0627\u0634"},{id:4550,region_name:"Ain Abu Aabdalla - \u0639\u064a\u0646 \u0623\u0628\u0648 \u0639\u0628\u062f\u0627\u0644\u0644\u0647"},{id:4551,region_name:"Ain Baal - \u0639\u064a\u0646 \u0628\u0639\u0644"},{id:4552,region_name:"Arzoun - \u0627\u0631\u0632\u0648\u0646"},{id:4553,region_name:"Bafliye - \u0628\u0627\u0641\u0644\u064a\u0647"},{id:4554,region_name:"Barich - \u0628\u0627\u0631\u064a\u0634"},{id:4555,region_name:"Batouliye - \u0628\u0627\u062a\u0648\u0644\u064a\u0647"},{id:4556,region_name:"Bazouriye - \u0628\u0627\u0632\u0648\u0631\u064a\u0629"},{id:4557,region_name:"Bedias - \u0628\u062f\u064a\u0627\u0633"},{id:4558,region_name:"Bestiyat - \u0628\u0633\u062a\u064a\u0627\u062a"},{id:4559,region_name:"Biyad Sour - \u0627\u0644\u0628\u064a\u0627\u0636 \u0635\u0648\u0631"},{id:4560,region_name:"Borj ech Chmali - \u0628\u0631\u062c \u0627\u0644\u0634\u0645\u0627\u0644\u064a"},{id:4561,region_name:"Borj el Haoua - \u0628\u0631\u062c \u0627\u0644\u0647\u0648\u0627"},{id:4562,region_name:"Borj el Qibli - \u0628\u0631\u062c \u0642\u0628\u0644\u064a"},{id:4563,region_name:"Borj Rahhal - \u0628\u0631\u062c \u0631\u062d\u0627\u0644"},{id:4564,region_name:"Bourghliye - \u0628\u0631\u063a\u0644\u064a\u0629"},{id:4565,region_name:"Boustane Sour - \u0628\u0633\u062a\u0627\u0646 \u0635\u0648\u0631"},{id:4566,region_name:"Btaichiye - \u0628\u0637\u064a\u0634\u064a\u0629"},{id:4567,region_name:"Chaaitiyeh - \u0634\u0639\u064a\u062a\u064a\u0629"},{id:4568,region_name:"Chabriha - \u0634\u0628\u0631\u064a\u062d\u0627"},{id:4569,region_name:"Chahour - \u0634\u062d\u0648\u0631"},{id:4570,region_name:"Chamaa - \u0634\u0645\u0639"},{id:4571,region_name:"Charnaiye - \u0634\u0627\u0631\u0646\u064a\u0629"},{id:4572,region_name:"Chehabiye - \u0634\u0647\u0627\u0628\u064a\u0629 "},{id:4573,region_name:"Chihine - \u0634\u064a\u062d\u064a\u0646"},{id:4574,region_name:"Debaal - \u062f\u0628\u0639\u0644"},{id:4575,region_name:"Deir Aamess - \u062f\u064a\u0631\u0639\u0627\u0645\u0635"},{id:4576,region_name:"Deir Kifa - \u062f\u064a\u0631 \u0643\u064a\u0641\u0627"},{id:4577,region_name:"Deir Qanoun - \u062f\u064a\u0631 \u0642\u0627\u0646\u0648\u0646"},{id:4578,region_name:"Deir Qanoun en Nahr - \u062f\u064a\u0631 \u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0646\u0647\u0631"},{id:4579,region_name:"Derdghaiya - \u062f\u0631\u062f\u063a\u0627\u064a\u0627"},{id:4580,region_name:"Dhaira - \u0638\u0647\u064a\u0631\u0629 "},{id:4581,region_name:"Ech Choumara - \u0627\u0644\u0634\u0648\u0645\u0627\u0631\u0627"},{id:4582,region_name:"Ed Dikiye - \u0627\u0644\u062f\u064a\u0643\u064a\u0629"},{id:4583,region_name:"El Bass -  \u0627\u0644\u0628\u0635\u064e"},{id:4584,region_name:"El Biyada - \u0628\u064a\u0627\u0636\u0629"},{id:4585,region_name:"El Borj En-Naqoura - \u0628\u0631\u062c \u0627\u0644\u0646\u0627\u0642\u0648\u0631\u0629"},{id:4586,region_name:"El Kleile - \u0642\u0644\u064a\u0644\u0629"},{id:4587,region_name:"El Ouardani - \u0648\u0631\u062f\u0627\u0646\u064a"},{id:4588,region_name:"Er Rafid - \u0627\u0644\u0631\u0627\u0641\u062f"},{id:4589,region_name:"Hallousiyet el Faouqa - \u062d\u0644\u0648\u0633\u064a\u0629 \u0627\u0644\u0641\u0648\u0642\u0627 "},{id:4590,region_name:"Halloussiye - \u062d\u0644\u0648\u0633\u064a\u0629"},{id:4591,region_name:"Hammadiye - \u062d\u0645\u064e\u0627\u062f\u064a\u0629"},{id:4592,region_name:"Hamoul - \u062d\u0627\u0645\u0648\u0644"},{id:4593,region_name:"Hannaouiye - \u062d\u0646\u0627\u0648\u064a"},{id:4594,region_name:"Hanniye - \u062d\u0646\u064a\u0629"},{id:4595,region_name:"Haumeiri - \u062d\u0645\u064a\u0631\u064a "},{id:4596,region_name:"Iskandarouna Sour - \u0625\u0633\u0643\u0646\u062f\u0631\u0648\u0646\u0629"},{id:4597,region_name:"Jannata - \u062c\u0646\u0627\u062a\u0627"},{id:4598,region_name:"Jbal el Botm - \u062c\u0628\u0627\u0644 \u0627\u0644\u0628\u0637\u0645"},{id:4599,region_name:"Jebbain - \u062c\u0628\u064a\u0646"},{id:4600,region_name:"Jijim - \u062c\u062c\u064a\u0645"},{id:4601,region_name:"Jouaiya - \u062c\u0648\u064a\u0627"},{id:4602,region_name:"Jour en Nakhl - \u062c\u0648\u0627\u0631 \u0627\u0644\u0646\u062e\u0644"},{id:4603,region_name:"Kfarnay - \u0643\u0641\u0631\u0646\u064a\u0629"},{id:4604,region_name:"Knisse Sour - \u0643\u0646\u064a\u0633\u0629 \u0635\u0648\u0631"},{id:4605,region_name:"Labboune - \u0644\u0628\u0648\u0646\u0629"},{id:4606,region_name:"Maachouq - \u0645\u0639\u0634\u0648\u0642"},{id:4607,region_name:"Maaliye - \u0645\u0639\u0644\u064a\u064e\u0629"},{id:4608,region_name:"Maarake - \u0645\u0639\u0631\u0643\u0629"},{id:4609,region_name:"Maaroub - \u0645\u0639\u0631\u0648\u0628"},{id:4610,region_name:"Machta El Aaziye - \u0645\u0634\u062a\u0649 \u0627\u0644\u0639\u0632\u0650\u064a\u0629"},{id:4611,region_name:"Mahrouneh - \u0645\u062d\u0631\u0648\u0646\u0647"},{id:4612,region_name:"Majdel Zoun - \u0645\u062c\u062f\u0644 \u0632\u0648\u0646"},{id:4613,region_name:"Malkeit es Sahel - \u0645\u0627\u0644\u0643\u064a\u0629 \u0627\u0644\u0633\u0627\u062d\u0644"},{id:4614,region_name:"Mansouri - \u0627\u0644\u0645\u0646\u0635\u0648\u0631\u064a"},{id:4615,region_name:"Marnaba - \u0645\u0631\u0646\u0628\u0627"},{id:4616,region_name:"Marouahine - \u0645\u0631\u0648\u062d\u064a\u0646"},{id:4617,region_name:"Matmoura - \u0627\u0644\u0645\u0637\u0645\u0648\u0631\u0629"},{id:4618,region_name:"Mazraat Aaiye - \u0645\u0632\u0631\u0639\u0629 \u0639\u064a\u0627"},{id:4619,region_name:"Mazraat Ain ez Zarqa - \u0645\u0632\u0631\u0639\u0629 \u0639\u064a\u0646 \u0627\u0644\u0632\u0631\u0642\u0627"},{id:4620,region_name:"Mazraat Biout es Siyad - \u0645\u0632\u0631\u0639\u0629 \u0628\u064a\u0648\u062a \u0627\u0644\u0633\u064a\u0627\u062f"},{id:4621,region_name:"Mazraat Bsaile - \u0645\u0632\u0631\u0639\u0629 \u0628\u0633\u064a\u0644\u0629"},{id:4622,region_name:"Mazraat Deir Hanna - \u0645\u0632\u0631\u0639\u0629 \u062f\u064a\u0631 \u062d\u0646\u0627"},{id:4623,region_name:"Mazraat Mechref - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0645\u0634\u0631\u0641"},{id:4624,region_name:"Mheilib - \u0645\u062d\u064a\u0644\u064a\u0628"},{id:4625,region_name:"Mjadel - \u0627\u0644\u0645\u062c\u0627\u062f\u0644"},{id:4626,region_name:"Nabi Qassem - \u0646\u0628\u064a \u0642\u0627\u0633\u0645"},{id:4627,region_name:"Naffakhiye - \u0646\u0641\u0627\u062e\u064a\u0629"},{id:4628,region_name:"Naqoura - \u0627\u0644\u0646\u0627\u0642\u0648\u0631\u0629"},{id:4629,region_name:"Niha Sour - \u0646\u064a\u062d\u0627 \u0635\u0648\u0631"},{id:4630,region_name:"Ouadi Jilou - \u0648\u0627\u062f\u064a \u062c\u064a\u0644\u0648"},{id:4631,region_name:"Oum Toute - \u0627\u0645 \u0627\u0644\u062a\u0648\u062a"},{id:4632,region_name:"Qalaat Maroun - \u0642\u0644\u0639\u0629 \u0645\u0627\u0631\u0648\u0646"},{id:4633,region_name:"Qana - \u0642\u0627\u0646\u0627"},{id:4634,region_name:"Qasmiye - \u0642\u0627\u0633\u0645\u064a\u0629"},{id:4635,region_name:"Rachidiye - \u0627\u0644\u0631\u0634\u064a\u062f\u064a\u0629"},{id:4636,region_name:"Ras el Ain - \u0631\u0627\u0633 \u0627\u0644\u0639\u064a\u0646"},{id:4637,region_name:"Rechkananey - \u0631\u0634\u0643\u0646\u0627\u0646\u064a\u0647"},{id:4638,region_name:"Rmadiyeh - \u0631\u0645\u0627\u062f\u064a\u0629"},{id:4639,region_name:"Salaa - \u0633\u0644\u0639\u0627 "},{id:4640,region_name:"Sammaaiye - \u0633\u0645\u0627\u0639\u064a\u0629"},{id:4641,region_name:"Siddiqine - \u0635\u062f\u064a\u0642\u064a\u0646"},{id:4642,region_name:"Sour - \u0635\u0648\u0631"},{id:4643,region_name:"Srifa - \u0635\u0631\u064a\u0641\u0627"},{id:4644,region_name:"Taibe Sour - \u0627\u0644\u0637\u064a\u0628\u0629 \u0635\u0648\u0631"},{id:4645,region_name:"Tair Debba - \u0637\u064a\u0631 \u062f\u0628\u0651\u0647"},{id:4646,region_name:"Tair Filsay - \u0637\u064a\u0631 \u0641\u0644\u0633\u064a\u0647"},{id:4647,region_name:"Tair Harfa - \u0637\u064a\u0631 \u062d\u0631\u0641\u0627"},{id:4648,region_name:"Tair Semhat - \u0637\u064a\u0631 \u0633\u0645\u062d\u0627\u062a"},{id:4649,region_name:"Tair Zebna - \u0637\u064a\u0631 \u0632\u0628\u0646\u0627"},{id:4650,region_name:"Touairi - \u0637\u0648\u064a\u0631\u064a"},{id:4651,region_name:"Toura - \u0637\u0648\u0631\u0627"},{id:4652,region_name:"Yarine - \u064a\u0627\u0631\u064a\u0646"},{id:4653,region_name:"Ynouh - \u064a\u0627\u0646\u0648\u062d \u0635\u0648\u0631"},{id:4654,region_name:"Zabqine - \u0632\u0628\u0642\u064a\u0646"},{id:4655,region_name:"Zahriye - \u0632\u0647\u064a\u0631\u064a\u0629"},{id:4656,region_name:"Zalloutiye - \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0632\u0644\u0648\u0637\u064a\u0629"}]}]}],ua=o.Ay.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 10px;
    justify-content: center;
    align-items: center;
`,xa=o.Ay.input`
    border: 0;
    flex: 1;
    width: 90px;
    border: none;
    font-size: 12px;

    &:focus{
        outline: none;
    }
    &::placeholder{
        font-size: 12px;
    }
`,ba=o.Ay.button`
    background-color: #1976d2;
    color:white;
    flex: 1;
    border: none;
    &:focus{
        outline: none;
    }
   

`,fa=o.Ay.input`
    border: 0;
    flex: 1;
    width: 35px;
    border: none;
    font-size: 12px;

    &:focus{
        outline: none;
    }
    &::placeholder{
        font-size: 12px;
    }
`;function _a(e){let{location:i,setLocation:a,register:r}=e;const[o,t]=(0,n.useState)(1),[d,s]=(0,n.useState)({});return console.log(i),(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsxs)(Fe.A,{style:{width:"40%"},children:[(0,ue.jsx)(R.A,{id:"governorate-select-label",children:"Select Governorate"}),(0,ue.jsx)(T.A,{labelId:"governorate-select-label",multiple:!0,value:i.governorates,onChange:e=>{const i=e.target.value,n=ha.filter((e=>i.includes(e.GovernorateDescription.trim()))).flatMap((e=>e.Districts.map((e=>e.DistrictDescription.trim())))),r=ha.flatMap((e=>e.Districts.filter((e=>n.includes(e.DistrictDescription.trim()))))).flatMap((e=>e.Cities));a((e=>({...e,governorates:i,districts:n,cities:r}))),t(1)},renderValue:e=>e.join(", "),children:ha.map((e=>(0,ue.jsxs)(Ke.A,{value:e.GovernorateDescription.trim(),children:[(0,ue.jsx)(Ie.A,{checked:i.governorates.includes(e.GovernorateDescription.trim())}),(0,ue.jsx)(pa.A,{primary:e.GovernorateDescription.trim()})]},e.GovernorateDescription)))})]}),(0,ue.jsxs)(Fe.A,{style:{width:"30%"},children:[(0,ue.jsx)(R.A,{id:"district-select-label",children:"Select District"}),(0,ue.jsx)(T.A,{labelId:"district-select-label",multiple:!0,value:i.districts,onChange:e=>{const i=e.target.value,n=ha.flatMap((e=>e.Districts)).filter((e=>i.includes(e.DistrictDescription.trim()))).flatMap((e=>e.Cities));a((e=>({...e,districts:i,cities:n}))),t(1)},renderValue:e=>e.join(", "),children:ha.filter((e=>i.governorates.includes(e.GovernorateDescription.trim()))).flatMap((e=>e.Districts)).map((e=>(0,ue.jsxs)(Ke.A,{value:e.DistrictDescription.trim(),children:[(0,ue.jsx)(Ie.A,{checked:i.districts.includes(e.DistrictDescription.trim())}),(0,ue.jsx)(pa.A,{primary:e.DistrictDescription.trim()}),(0,ue.jsxs)(ua,{onClick:e=>e.stopPropagation(),children:[(0,ue.jsx)("div",{style:{width:"20px"}}),(0,ue.jsx)(xa,{placeholder:"Delivery Rate",value:d[e.DistrictDescription.trim()]||"",onChange:n=>((e,n)=>{var r;s((i=>({...i,[e]:n})));const o=(null===(r=ha.flatMap((e=>e.Districts)).find((i=>i.DistrictDescription.trim()===e)))||void 0===r?void 0:r.Cities)||[],t=i.cities.map((e=>o.some((i=>i.id===e.id))?{...e,deliveryRate:n}:e));a((e=>({...e,cities:t})))})(e.DistrictDescription.trim(),n.target.value)}),(0,ue.jsx)(ba,{onClick:()=>{d[e.DistrictDescription.trim()],e.DistrictDescription.trim()},children:"+"})]})]},e.DistrictDescription)))})]}),(0,ue.jsxs)(Fe.A,{style:{width:"30%"},children:[(0,ue.jsx)(R.A,{id:"city-select-label",children:"Select Cities"}),(0,ue.jsxs)(T.A,{labelId:"city-select-label",multiple:!0,value:i.cities,onChange:e=>{const i=e.target.value;console.log("Selected Cities",i);i.some((e=>void 0===e))||a((e=>({...e,cities:i})))},renderValue:e=>e.map((e=>null===e||void 0===e?void 0:e.region_name)).join(", "),...r("regions"),children:[ha.flatMap((e=>e.Districts.filter((e=>i.districts.includes(e.DistrictDescription.trim()))))).flatMap((e=>e.Cities)).slice(0,10*o).map((e=>{var a;return(0,ue.jsxs)(Ke.A,{value:e,children:[(0,ue.jsx)(Ie.A,{checked:i.cities.find((i=>i.id===e.id))}),(0,ue.jsx)(pa.A,{primary:e.region_name.trim()}),(0,ue.jsxs)(ua,{onClick:e=>e.stopPropagation(),children:[(0,ue.jsx)(fa,{placeholder:"Delivery Rate",value:(null===(a=i.cities.find((i=>i.id==e.id)))||void 0===a?void 0:a.deliveryRate)||"0"}),(0,ue.jsx)(ba,{onClick:()=>{},children:"edit"})]})]},e.id)})),10*o<i.cities.length&&(0,ue.jsx)(Ke.A,{onClick:e=>{e.stopPropagation(),t((e=>e+1))},children:(0,ue.jsx)(pa.A,{primary:"Load More"})})]})]})]})}var ya=a(89993);function va(e){var i,a,r,o,t,d,s,l,c,g,m,p,h,u,x;let{setShowAddComponent:b,refetchBranches:f,userInformation:_,selectedIdForAction:y,setSelectedIdForAction:v}=e;const[j,A]=(0,n.useState)({governorates:[],districts:[],cities:[]}),[w,k]=(0,n.useState)(!1),[$,S]=(0,n.useState)(!0),{register:z,handleSubmit:C,setValue:M,formState:E,reset:D}=(0,Je.mN)(),{response:B,isLoading:T,refetch:R}=(0,ya.w)({branch_id:y,onSuccess:()=>{}});(0,n.useEffect)((()=>{if(!T&&y){const{name:i,location:a,mapLink:n,phone_number:r,regions:o,is_online:t,whatsapp_number:d,has_delivery:s}=null===B||void 0===B?void 0:B.data;console.log(t),M("name",i),M("location",a),M("mapLink",n),M("phone_number",r),M("whatsapp_number",d);const l=(e=>Array.from(new Set(e.map((e=>{const i=ha.flatMap((e=>e.Districts)).find((i=>i.id===e.district_id));return i?i.DistrictDescription:null})).filter(Boolean))))(o),c=(e=l,Array.from(new Set(ha.filter((i=>i.Districts.some((i=>e.includes(i.DistrictDescription))))).map((e=>e.GovernorateDescription)))));M("regions",o),M("is_online",t),M("has_delivery",s),k(t),S(s),A({governorates:c,districts:l,cities:o.map((e=>{let{district_id:i,...a}=e;return a}))})}var e}),[T,null===B||void 0===B?void 0:B.data]);const{handleApiCall:L,isPending:H}=ga({onSuccess:()=>{D({name:null,location:null,mapLink:null,phone_number:null,whatsapp_number:null}),f(),b(!1)}}),{handleApiCall:q,isPending:F}=ma({onSuccess:()=>{v(null),D({name:null,location:null,mapLink:null,phone_number:null,whatsapp_number:null}),f(),b(!1)}});return(0,ue.jsx)(ue.Fragment,{children:!T&&(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsxs)(sa,{children:[(0,ue.jsx)(da,{onClick:()=>(D({name:null,location:null,mapLink:null,phone_number:null}),v(null),void b(!1))}),(0,ue.jsx)(He.A,{label:"Name",name:"name",variant:"outlined",...z("name"),error:!(0,Ve.isEmpty)(null===E||void 0===E||null===(i=E.errors)||void 0===i?void 0:i.name),helperText:!(0,Ve.isEmpty)(E.errors.link)&&(null===E||void 0===E||null===(a=E.errors)||void 0===a||null===(r=a.name)||void 0===r?void 0:r.message)}),(0,ue.jsx)(He.A,{label:"PhoneNumber",name:"phone_number",variant:"outlined",...z("phone_number",{pattern:{value:/^(\d+\s)*\d+$/,message:"Invalid phone number format."}}),error:!(0,Ve.isEmpty)(null===E||void 0===E||null===(o=E.errors)||void 0===o?void 0:o.phone_number),helperText:!(0,Ve.isEmpty)(E.errors.phone_number)&&(null===E||void 0===E||null===(t=E.errors)||void 0===t||null===(d=t.phone_number)||void 0===d?void 0:d.message)}),(0,ue.jsx)(He.A,{label:"WhatsappNumber",name:"whatsapp_number",variant:"outlined",...z("whatsapp_number",{pattern:{value:/^(\d+\s)*\d+$/,message:"Invalid phone number format."}}),error:!(0,Ve.isEmpty)(null===E||void 0===E||null===(s=E.errors)||void 0===s?void 0:s.whatsapp_number),helperText:!(0,Ve.isEmpty)(E.errors.whatsapp_number)&&(null===E||void 0===E||null===(l=E.errors)||void 0===l||null===(c=l.whatsapp_number)||void 0===c?void 0:c.message)}),(0,ue.jsx)(He.A,{label:"Location",variant:"outlined",name:"location",...z("location"),error:!(0,Ve.isEmpty)(null===E||void 0===E||null===(g=E.errors)||void 0===g?void 0:g.location),helperText:!(0,Ve.isEmpty)(E.errors.location)&&(null===E||void 0===E||null===(m=E.errors)||void 0===m||null===(p=m.location)||void 0===p?void 0:p.message)}),(0,ue.jsx)(He.A,{label:"Maps",variant:"outlined",name:"mapLink",...z("mapLink"),error:!(0,Ve.isEmpty)(null===E||void 0===E||null===(h=E.errors)||void 0===h?void 0:h.mapLink),helperText:!(0,Ve.isEmpty)(E.errors.mapLink)&&(null===E||void 0===E||null===(u=E.errors)||void 0===u||null===(x=u.mapLink)||void 0===x?void 0:x.message)}),!T&&(0,ue.jsx)(_a,{location:j,setLocation:A,register:z}),(0,ue.jsxs)(Fe.A,{component:"fieldset",children:[(0,ue.jsx)(Pe.A,{component:"legend",children:"Shop Type"}),(0,ue.jsx)(Oe.A,{control:(0,ue.jsx)(Ie.A,{checked:w,onChange:e=>{k(!w)}}),label:"Online Shop"})]}),(0,ue.jsxs)(Fe.A,{component:"fieldset",children:[(0,ue.jsx)(Pe.A,{component:"legend",children:"Has Delivery"}),(0,ue.jsx)(Oe.A,{control:(0,ue.jsx)(Ie.A,{checked:$,onChange:e=>{S(!$)}}),label:"Has Delivery"})]}),(0,ue.jsx)(ai.A,{loading:H||F,onClick:()=>{C((e=>{const i={...e,restaurant_id:_.restaurant_id,regions:j.cities.map((e=>e.id)),is_online:w,has_delivery:$};y?q(y,i):L(i)}))()},style:{backgroundColor:"turquoise",color:"white",width:"150px",height:"40px"},children:y?"Edit Branch":"Add Branch"})]}),(0,ue.jsx)(la,{children:"Note: When listing multiple phone numbers, please separate each with a single space."})]})})}const ja=e=>{let{onSuccess:i,restaurant_id:a}=e;const{error:n,isLoading:o,status:t,data:d,refetch:s}=(0,ni.I)({queryFn:()=>(async e=>{try{const i=(0,Qe.uV)(e);return await r.A.get(i,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(n){throw n}})(a),retry:!1,queryKey:[`branches-${a}`],onSuccess:i});return{error:n,isLoading:o,status:t,response:d,refetch:s}},Aa=e=>{let{onSuccess:i}=e;const{error:a,mutate:n,isPending:o}=(0,We.n)({mutationFn:e=>(async e=>{try{const i=(0,Qe.z3)(e);return await r.A.delete(i,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(a){throw a}})(e),onSuccess:i});return{isPending:o,error:a,handleApiCall:e=>n(e)}};function wa(e){let{isOpen:i,setIsOpen:a,selectedIdForAction:r,refetchBranches:o,setSelectedIdForAction:t}=e;const{isPending:d,handleApiCall:s}=Aa({onSuccess:()=>{o(),t(null),a(!1)}}),l=()=>{a(!1)};return(0,ue.jsx)(n.Fragment,{children:(0,ue.jsxs)(Fi.A,{open:i,onClose:l,children:[(0,ue.jsx)(Oi.A,{children:"Delete Branch"}),(0,ue.jsx)(Ni.A,{children:(0,ue.jsx)(Pi.A,{children:"Are you sure you want to delete this Branch ?"})}),(0,ue.jsxs)(Ki.A,{children:[(0,ue.jsx)(Di.A,{onClick:l,children:"Cancel"}),(0,ue.jsx)(ai.A,{onClick:()=>s(r),loading:d,children:"Delete"})]})]})})}function ka(){const[e,i]=(0,n.useState)(!1),[a,r]=(0,n.useState)(!1),[o,t]=(0,n.useState)(null),[d,s]=(0,n.useState)([]),l=(0,he.getCookie)("userInfo")||"{}",[c,g]=(0,n.useState)(JSON.parse(l)),{response:m,refetch:p,isLoading:h}=ja({onSuccess:()=>{},restaurant_id:c.restaurant_id}),u=()=>{p().then((e=>{let{data:{data:i}}=e;return s(i)}))};return(0,n.useEffect)((()=>{h||s(null===m||void 0===m?void 0:m.data)}),[h]),(0,ue.jsx)(ue.Fragment,{children:e?(0,ue.jsx)(va,{setShowAddComponent:i,refetchBranches:u,userInformation:c,selectedIdForAction:o,setSelectedIdForAction:t}):(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(wa,{selectedIdForAction:o,isOpen:a,setIsOpen:r,refetchBranches:u,setSelectedIdForAction:t}),(0,ue.jsx)(oa,{onClick:()=>i(!0),children:"Add Branch"}),(0,ue.jsx)(Ui,{children:(0,ue.jsxs)(Xi,{children:[(0,ue.jsx)("thead",{children:(0,ue.jsxs)("tr",{children:[(0,ue.jsx)(ea,{children:"Name"}),(0,ue.jsx)(ea,{children:"Locations"}),(0,ue.jsx)(ea,{children:"PhoneNumber"}),(0,ue.jsx)(ea,{children:"Maps Link"}),(0,ue.jsx)(ea,{children:"Actions"})]})}),(0,ue.jsx)("tbody",{children:null===d||void 0===d?void 0:d.map((e=>(0,ue.jsxs)("tr",{children:[(0,ue.jsx)(ia,{children:e.name}),(0,ue.jsx)(ia,{children:e.location}),(0,ue.jsx)(ia,{children:e.phone_number}),(0,ue.jsx)(ia,{children:(0,ue.jsx)("a",{href:"#",children:e.mapLink})}),(0,ue.jsx)(ia,{children:(0,ue.jsxs)(aa,{children:[(0,ue.jsx)(ra,{onClick:()=>(async e=>{t(e.id),i(!0)})(e)}),(0,ue.jsx)(na,{onClick:()=>{t(e.id),r(!0)}})]})})]},e.id)))})]})})]})})}const $a=t.Jn.mainColor,Sa=o.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  border-radius: 14px;
  margin-top: 16px;
  min-height: 60vh;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
`,za=o.Ay.span`
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 4px;
`,Ca=o.Ay.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-top: 20px;
`,Ma=o.Ay.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 420px;
`,Ea=o.Ay.th`
  border-bottom: 2px solid #e2e8f0;
  padding: 10px 12px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  background: #f8fafc;
  white-space: nowrap;
`,Da=o.Ay.td`
  border-bottom: 1px solid #f1f5f9;
  padding: 10px 12px;
  font-size: 14px;
  color: #334155;
`,Ba=o.Ay.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Ta=(0,o.Ay)(G.b6i)`
  cursor: pointer;
  font-size: 18px;
  color: #94a3b8;
  transition: color 0.15s;
  &:hover { color: #ef4444; }
`,Ra=(0,o.Ay)(G.$Sw)`
  cursor: pointer;
  font-size: 18px;
  color: #94a3b8;
  transition: color 0.15s;
  &:hover { color: ${$a}; }
`,La=o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 20px;
  height: 40px;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${$a};
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  transition: filter 0.15s, transform 0.15s;
  box-shadow: 0 3px 10px ${$a}40;

  &:hover  { filter: brightness(1.1); transform: translateY(-1px); }
  &:active { transform: scale(0.97); }

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    justify-content: center;
    font-size: 13px;
  }
`,Ha=o.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 16px;
`,qa=o.Ay.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);

  @media (max-width: ${t.L8.sm}px) {
    padding: 18px 16px;
    border-radius: 14px;
  }
`,Fa=o.Ay.h3`
  margin: 0 0 18px 0;
  font-size: 17px;
  font-weight: 700;
  color: #0f172a;
`,Ka=o.Ay.div`
  margin-bottom: 14px;
`,Na=o.Ay.label`
  display: block;
  font-size: 13px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #475569;
`,Pa=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-top: 4px;
`,Oa=o.Ay.input`
  width: 130px;
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${$a};
    box-shadow: 0 0 0 3px ${$a}20;
  }

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
  }
`,Ia=o.Ay.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: ${t.L8.sm}px) {
    flex-direction: column;
  }
`,Ja=o.Ay.button`
  flex: 1;
  padding: 10px 16px;
  background: ${$a};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: filter 0.15s;

  &:hover { filter: brightness(1.1); }
`,Qa=o.Ay.button`
  flex: 1;
  padding: 10px 16px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #475569;
  transition: background 0.15s;

  &:hover { background: #e2e8f0; }
`,Wa=e=>{let{restaurant_id:i,enabled:a=!0}=e;const{data:n,refetch:o,isLoading:t}=(0,ni.I)({queryKey:["working-hours",i],queryFn:()=>(async e=>await r.A.get((0,Qe.Bc)(e),{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}}))(i),enabled:!!i&&a});return{response:Array.isArray(null===n||void 0===n?void 0:n.data)?n.data:[],refetch:o,isLoading:t}},Ya=async e=>await r.A.post(Qe.Gt,e,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}}),Za=e=>{let{restaurant_id:i,onSuccess:a}=e;const n=(0,si.jE)(),{mutate:r}=(0,We.n)({mutationFn:Ya,onSuccess:()=>{n.invalidateQueries({queryKey:["working-hours",i]}),null===a||void 0===a||a()}});return{mutate:r}},Ga=async e=>{let{id:i,...a}=e;return await r.A.put((0,Qe.ib)(i),a,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})},Va=e=>{let{restaurant_id:i,onSuccess:a}=e;const n=(0,si.jE)(),{mutate:r}=(0,We.n)({mutationFn:Ga,onSuccess:()=>{n.invalidateQueries({queryKey:["working-hours",i]}),null===a||void 0===a||a()}});return{mutate:r}},Ua=async e=>await r.A.delete((0,Qe.Wi)(e),{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}}),Xa=e=>{let{restaurant_id:i,onSuccess:a}=e;const n=(0,si.jE)(),{mutate:r}=(0,We.n)({mutationFn:Ua,onSuccess:()=>{n.invalidateQueries({queryKey:["working-hours",i]}),null===a||void 0===a||a()}});return{mutate:r}},en=[{key:"monday",label:"Mon"},{key:"tuesday",label:"Tue"},{key:"wednesday",label:"Wed"},{key:"thursday",label:"Thu"},{key:"friday",label:"Fri"},{key:"saturday",label:"Sat"},{key:"sunday",label:"Sun"}];function an(e){if(!e)return"\u2014";return e.split(",").map((e=>e.trim().toLowerCase())).map((e=>{var i;return(null===(i=en.find((i=>i.key===e)))||void 0===i?void 0:i.label)||e})).join(", ")}function nn(e){if(!e)return"\u2014";const i=String(e);return i.length<=5?i:i.slice(0,5)}function rn(){const e=(0,he.getCookie)("userInfo")||"{}",i=JSON.parse(e),a=null===i||void 0===i?void 0:i.restaurant_id,{response:r=[],refetch:o,isLoading:t}=Wa({restaurant_id:a}),{mutate:d}=Za({restaurant_id:a,onSuccess:()=>o()}),{mutate:s}=Va({restaurant_id:a,onSuccess:()=>o()}),{mutate:l}=Xa({restaurant_id:a,onSuccess:()=>o()}),[c,g]=(0,n.useState)(!1),[m,p]=(0,n.useState)(null),[h,u]=(0,n.useState)([]),[x,b]=(0,n.useState)("09:00"),[f,_]=(0,n.useState)("18:00"),y=Array.isArray(r)?r:[];return(0,ue.jsxs)(Sa,{children:[(0,ue.jsx)(za,{children:"Working Hours"}),(0,ue.jsx)("p",{style:{marginTop:8,color:"#64748b",fontSize:13,lineHeight:1.5},children:"Add schedules with multiple weekdays sharing the same hours (e.g. Mon\u2013Fri 9AM\u20136PM)."}),(0,ue.jsx)(La,{onClick:()=>{p(null),u([]),b("09:00"),_("18:00"),g(!0)},children:"Add schedule"}),t?(0,ue.jsx)("p",{style:{marginTop:16,color:"#64748b",fontSize:14},children:"Loading\u2026"}):(0,ue.jsx)(Ca,{children:(0,ue.jsxs)(Ma,{children:[(0,ue.jsx)("thead",{children:(0,ue.jsxs)("tr",{children:[(0,ue.jsx)(Ea,{children:"Days"}),(0,ue.jsx)(Ea,{children:"Start"}),(0,ue.jsx)(Ea,{children:"End"}),(0,ue.jsx)(Ea,{children:"Actions"})]})}),(0,ue.jsx)("tbody",{children:0===y.length?(0,ue.jsx)("tr",{children:(0,ue.jsx)(Da,{colSpan:4,style:{color:"#94a3b8"},children:"No working hours set. Add a schedule above."})}):y.map((e=>(0,ue.jsxs)("tr",{children:[(0,ue.jsx)(Da,{children:an(e.days)}),(0,ue.jsx)(Da,{children:nn(e.start_time)}),(0,ue.jsx)(Da,{children:nn(e.end_time)}),(0,ue.jsx)(Da,{children:(0,ue.jsxs)(Ba,{children:[(0,ue.jsx)(Ra,{onClick:()=>(e=>{p(e.id),u(e.days?e.days.split(",").map((e=>e.trim().toLowerCase())):[]),b(nn(e.start_time)||"09:00"),_(nn(e.end_time)||"18:00"),g(!0)})(e)}),(0,ue.jsx)(Ta,{onClick:()=>{return i=e.id,void(window.confirm("Delete this schedule?")&&l(i));var i}})]})})]},e.id)))})]})}),c&&(0,ue.jsx)(Ha,{onClick:()=>g(!1),children:(0,ue.jsxs)(qa,{onClick:e=>e.stopPropagation(),children:[(0,ue.jsx)(Fa,{children:m?"Edit schedule":"Add schedule"}),(0,ue.jsxs)("form",{onSubmit:e=>{e.preventDefault();const i=h.join(",");i&&(m?s({id:m,days:i,start_time:x,end_time:f}):d({restaurant_id:a,days:i,start_time:x,end_time:f}),g(!1))},children:[(0,ue.jsxs)(Ka,{children:[(0,ue.jsx)(Na,{children:"Weekdays (multiple select)"}),(0,ue.jsx)(Pa,{children:en.map((e=>{let{key:i,label:a}=e;return(0,ue.jsxs)("label",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,ue.jsx)("input",{type:"checkbox",checked:h.includes(i),onChange:()=>(e=>{u((i=>i.includes(e)?i.filter((i=>i!==e)):[...i,e]))})(i)}),a]},i)}))})]}),(0,ue.jsxs)(Ka,{children:[(0,ue.jsx)(Na,{children:"Start time"}),(0,ue.jsx)(Oa,{type:"time",value:x,onChange:e=>b(e.target.value),required:!0})]}),(0,ue.jsxs)(Ka,{children:[(0,ue.jsx)(Na,{children:"End time"}),(0,ue.jsx)(Oa,{type:"time",value:f,onChange:e=>_(e.target.value),required:!0})]}),(0,ue.jsxs)(Ia,{children:[(0,ue.jsx)(Ja,{type:"submit",children:"Save"}),(0,ue.jsx)(Qa,{type:"button",onClick:()=>g(!1),children:"Cancel"})]})]})]})})]})}const on=t.Jn.mainColor,tn=(o.Ay.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 14px;
  margin-top: 16px;
  min-height: 60vh;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
`,o.Ay.span`
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 4px;
`,o.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
  position: relative;
  padding-top: 40px;

  @media (max-width: ${t.L8.sm}px) {
    flex-direction: column;
    align-items: stretch;
    padding-top: 32px;
  }
`),dn=o.Ay.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-top: 20px;
`,sn=o.Ay.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 400px;
`,ln=o.Ay.th`
  border-bottom: 2px solid #e2e8f0;
  padding: 10px 12px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  background: #f8fafc;
  white-space: nowrap;
`,cn=o.Ay.td`
  border-bottom: 1px solid #f1f5f9;
  padding: 10px 12px;
  font-size: 14px;
  color: #334155;
`,gn=o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,mn=(0,o.Ay)(G.b6i)`
  cursor: pointer;
  font-size: 18px;
  color: #94a3b8;
  transition: color 0.15s;
  &:hover { color: #ef4444; }
`,pn=(0,o.Ay)(G.$Sw)`
  cursor: pointer;
  font-size: 18px;
  color: #94a3b8;
  transition: color 0.15s;
  &:hover { color: ${on}; }
`,hn=(0,o.Ay)(G._Dy)`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 22px;
  cursor: pointer;
  color: #64748b;
  transition: color 0.15s;
  &:hover { color: ${on}; }
`,un=o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 20px;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${on};
  margin-top: 16px;
  font-weight: 600;
  font-size: 14px;
  transition: filter 0.15s, transform 0.15s;
  box-shadow: 0 3px 10px ${on}40;

  &:hover  { filter: brightness(1.1); transform: translateY(-1px); }
  &:active { transform: scale(0.97); }

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    justify-content: center;
    font-size: 13px;
    margin-top: 10px;
  }
`,xn=o.Ay.span`
  font-size: 12px;
  margin-top: 20px;
  font-weight: 600;
  color: #475569;
  line-height: 1.5;
  width: 100%;
  max-width: 480px;

  @media (max-width: ${t.L8.sm}px) {
    max-width: 100%;
    font-size: 11px;
  }
`,bn=async e=>{try{const i=Qe.pw;return await r.A.post(i,e,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(i){throw i}},fn=e=>{let{onSuccess:i}=e;const{error:a,mutate:n,isPending:r}=(0,We.n)({mutationFn:bn,onSuccess:i});return{isPending:r,error:a,handleApiCall:e=>n(e)}},_n=e=>{let{onSuccess:i}=e;const{error:a,mutate:n,isPending:o}=(0,We.n)({mutationFn:e=>(async(e,i)=>{try{const a=(0,Qe.gR)(e);return await r.A.put(a,i,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(a){throw a}})(e[0],e[1]),onSuccess:i});return{isPending:o,error:a,handleApiCall:(e,i)=>n([e,i])}};function yn(e){var i,a,r,o,t;let{setShowAddComponent:d,selectedMedia:s,setSelectedMedia:l,refetchMedia:c,userInformation:g,media:m}=e;const{register:p,handleSubmit:h,setValue:u,formState:x}=(0,Je.mN)(),{handleApiCall:b,isPending:f}=fn({onSuccess:()=>{l(null),c(),d(!1)}}),{handleApiCall:_,isPending:y}=_n({onSuccess:()=>{l(null),c(),d(!1)}});(0,n.useEffect)((()=>{if(s){const{platform:e,link:i}=s;u("platform",e),u("link",i)}}),[]);const v=e=>(0,Ve.isEmpty)(s)&&m.some((i=>{let{platform:a}=i;return a===e}));return(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsxs)(tn,{children:[(0,ue.jsx)(hn,{onClick:()=>(l(null),void d(!1))}),(0,ue.jsx)(qe.A,{sx:{minWidth:120},children:(0,ue.jsxs)(Fe.A,{fullWidth:!0,children:[(0,ue.jsx)(R.A,{children:"Media"}),(0,ue.jsxs)(T.A,{readOnly:s,...p("platform",{required:"Required"}),label:"platform",defaultValue:null===s||void 0===s?void 0:s.platform,error:!(0,Ve.isEmpty)(null===x||void 0===x||null===(i=x.errors)||void 0===i?void 0:i.platform),children:[!v("Instagram")&&(0,ue.jsx)(Ke.A,{value:"Instagram",children:"Instagram"}),!v("Facebook")&&(0,ue.jsx)(Ke.A,{value:"Facebook",children:"Facebook"}),!v("Tiktok")&&(0,ue.jsx)(Ke.A,{value:"Tiktok",children:"Tiktok"}),(0,ue.jsx)(Ke.A,{value:"Whatsapp",children:"Whatsapp"})]}),!(0,Ve.isEmpty)(null===x||void 0===x||null===(a=x.errors)||void 0===a?void 0:a.platform)&&(0,ue.jsx)(Ne.A,{style:{color:"#d64241"},children:"Required field"})]})}),(0,ue.jsx)(He.A,{label:"Link",name:"link",variant:"outlined",...p("link",{required:"Required"}),error:!(0,Ve.isEmpty)(null===x||void 0===x||null===(r=x.errors)||void 0===r?void 0:r.link),helperText:!(0,Ve.isEmpty)(x.errors.link)&&(null===x||void 0===x||null===(o=x.errors)||void 0===o||null===(t=o.link)||void 0===t?void 0:t.message)}),(0,ue.jsx)(ai.A,{onClick:()=>{h((e=>{const i={...e,restaurant_id:g.restaurant_id};s?_(s.id,i):b(i)}))()},loading:f,style:{backgroundColor:"turquoise",color:"white",width:"150px",height:"40px"},children:s?"Edit Media":"Add Media"})]}),(0,ue.jsx)(xn,{children:"Note: Media links should follow the format: www.instagram.com/..."})]})}const vn=e=>{let{onSuccess:i,restaurant_id:a}=e;const{error:n,isLoading:o,status:t,data:d,refetch:s}=(0,ni.I)({queryFn:()=>(async e=>{try{const i=(0,Qe.u$)(e);return await r.A.get(i,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(n){throw n}})(a),retry:!1,queryKey:[`media-${a}`],onSuccess:i});return{error:n,isLoading:o,status:t,response:d,refetch:s}},jn=e=>{let{onSuccess:i}=e;const{error:a,mutate:n,isPending:o}=(0,We.n)({mutationFn:e=>(async e=>{try{const i=(0,Qe.l1)(e);return await r.A.delete(i,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(a){throw a}})(e),onSuccess:i});return{isPending:o,error:a,handleApiCall:e=>n(e)}};function An(e){let{isOpen:i,setIsOpen:a,selectedIdForAction:r,refetchMedia:o,setSelectedIdFroAction:t}=e;const{isPending:d,handleApiCall:s}=jn({onSuccess:()=>{o(),a(!1),t(null)}}),l=()=>{a(!1)};return(0,ue.jsx)(n.Fragment,{children:(0,ue.jsxs)(Fi.A,{open:i,onClose:l,children:[(0,ue.jsx)(Oi.A,{children:"Delete Media"}),(0,ue.jsx)(Ni.A,{children:(0,ue.jsx)(Pi.A,{children:"Are you sure you want to delete this Media ?"})}),(0,ue.jsxs)(Ki.A,{children:[(0,ue.jsx)(Di.A,{onClick:l,children:"Cancel"}),(0,ue.jsx)(ai.A,{onClick:()=>s(r),loading:d,children:"Delete"})]})]})})}function wn(){const[e,i]=(0,n.useState)(!1),[a,r]=(0,n.useState)(!1),[o,t]=(0,n.useState)(!1),[d,s]=(0,n.useState)(null),[l,c]=(0,n.useState)([]),g=(0,he.getCookie)("userInfo")||"{}",[m,p]=(0,n.useState)(JSON.parse(g)),{refetch:h,response:u,isLoading:x}=vn({onSuccess:()=>{},restaurant_id:m.restaurant_id}),b=()=>{h().then((e=>{let{data:{data:i}}=e;return c(i)}))};return(0,n.useEffect)((()=>{x||c(null===u||void 0===u?void 0:u.data)}),[x]),(0,ue.jsx)(ue.Fragment,{children:e?(0,ue.jsx)(yn,{setShowAddComponent:i,selectedMedia:d,setSelectedMedia:s,refetchMedia:b,userInformation:m,media:l}):(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(An,{isOpen:a,setIsOpen:r,refetchMedia:b,selectedIdForAction:o,setSelectedIdFroAction:t}),(0,ue.jsx)(un,{onClick:()=>i(!0),children:"Add Media"}),(0,ue.jsx)(dn,{children:(0,ue.jsxs)(sn,{children:[(0,ue.jsx)("thead",{children:(0,ue.jsxs)("tr",{children:[(0,ue.jsx)(ln,{children:"Name"}),(0,ue.jsx)(ln,{children:"Link"}),(0,ue.jsx)(ln,{children:"Actions"})]})}),(0,ue.jsx)("tbody",{children:null===l||void 0===l?void 0:l.map((e=>(0,ue.jsxs)("tr",{children:[(0,ue.jsx)(cn,{children:e.platform}),(0,ue.jsx)(cn,{children:(0,ue.jsx)("a",{href:"#",children:e.link})}),(0,ue.jsx)(cn,{children:(0,ue.jsxs)(gn,{children:[(0,ue.jsx)(pn,{onClick:()=>(e=>{s(e),i(!0)})(e)}),(0,ue.jsx)(mn,{onClick:()=>{t(e.id),r(!0)}})]})})]},e.id)))})]})})]})})}const kn=t.Jn.mainColor,$n=o.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  background-color: #ffffff;
  border-radius: 16px;
  margin-top: 16px;
  padding: 24px 24px 28px;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.07);
  border: 1px solid ${"rgba(148, 163, 184, 0.22)"};
  box-sizing: border-box;
  gap: 20px;

  @media (max-width: ${t.L8.sm}px) {
    padding: 18px 16px 22px;
    max-width: 100%;
  }
`,Sn=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,zn=o.Ay.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
`,Cn=o.Ay.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #64748b;
  max-width: 32rem;
`,Mn=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  padding: 24px 20px;
  border-radius: 14px;
  border: 2px dashed rgba(148, 163, 184, 0.45);
  background: linear-gradient(
    180deg,
    rgba(94, 171, 177, 0.06) 0%,
    rgba(248, 250, 252, 0.9) 100%
  );
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: rgba(94, 171, 177, 0.45);
  }
`,En=o.Ay.img`
  max-width: 100%;
  max-height: 120px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.12);
`,Dn=o.Ay.div`
  text-align: center;
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5;
  max-width: 260px;
`,Bn=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`,Tn=o.Ay.input`
  display: none;
`,Rn=o.Ay.div`
  margin: 0;
  padding: 14px 16px;
  border-radius: 12px;
  background: rgba(94, 171, 177, 0.08);
  border: 1px solid rgba(94, 171, 177, 0.2);
  font-size: 0.8125rem;
  line-height: 1.55;
  color: #475569;
`,Ln=o.Ay.strong`
  display: block;
  margin-bottom: 6px;
  color: #334155;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,Hn=o.Ay.span`
  font-size: 0.8125rem;
  color: #dc2626;
  font-weight: 500;
`,qn=o.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
  color: #fff;
  background: linear-gradient(135deg, ${kn} 0%, #4a9499 100%);
  box-shadow: 0 4px 14px rgba(94, 171, 177, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(94, 171, 177, 0.42);
  }

  &:active {
    transform: translateY(0);
  }
`,Fn=e=>{let{onSuccess:i}=e;const{error:a,mutate:n,isPending:o}=(0,We.n)({mutationFn:e=>(async(e,i)=>{try{const a=(0,Qe.bb)(e),n=new FormData;return n.append("file",i.file),await r.A.put(a,n,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(a){throw a}})(e[0],e[1]),onSuccess:i});return{isPending:o,error:a,handleApiCall:(e,i)=>n([e,i])}},Kn=e=>{let{onSuccess:i,name:a}=e;const{isLoading:n,data:o}=(0,ni.I)({queryFn:()=>(async e=>{try{const i=(0,Qe.tC)(e);return await r.A.get(i,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(i){throw i}})(a),onSuccess:i,queryKey:[a]});return{isLoading:n,response:o}},Nn="https://storage.googleapis.com/ecommerce-bucket-testing/";function Pn(e){let{setSection:i}=e;const a=(0,n.useRef)(null),[r,o]=(0,n.useState)(null),[t,d]=(0,n.useState)(null),[l,c]=(0,n.useState)(null),g=(0,he.getCookie)("userInfo")||"{}",[m]=(0,n.useState)(JSON.parse(g)),{handleApiCall:p,isPending:h}=Fn({onSuccess:()=>{o(null),c(null),i("Products")}}),{isLoading:u,response:x}=Kn({onSuccess:()=>{},name:null===m||void 0===m?void 0:m.restaurant_name});(0,n.useEffect)((()=>{if(u||null===x||void 0===x||!x.data)return;const e=x.data.logoURL;c(e?`${Nn}${e}`:null)}),[u,null===x||void 0===x?void 0:x.data]);const b=Boolean(l);return(0,ue.jsxs)($n,{children:[(0,ue.jsxs)(Sn,{children:[(0,ue.jsx)(zn,{children:"Restaurant logo"}),(0,ue.jsx)(Cn,{children:"This appears in your menu header and share previews. Use a clear, horizontal mark for best results on all devices."})]}),(0,ue.jsx)(Mn,{children:b?(0,ue.jsx)(En,{src:l,alt:"Restaurant logo preview"}):(0,ue.jsx)(Dn,{children:"No logo yet. Choose a PNG, JPG, or SVG up to 2\xa0MB."})}),(0,ue.jsx)(Tn,{type:"file",accept:"image/png,image/jpeg,image/jpg,image/svg+xml,image/webp",ref:a,onChange:e=>{let{target:i}=e;if(i.files[0]){if(i.files[0].size/1048576>2)return d("Image must be 2MB or smaller."),void(i.value=null);d(null),o(i.files[0]);const e=URL.createObjectURL(i.files[0]);c(e)}i.value=null}}),(0,ue.jsxs)(Bn,{children:[(0,ue.jsxs)(qn,{type:"button",onClick:()=>{var e;null===(e=a.current)||void 0===e||e.click()},children:[(0,ue.jsx)(s.LEk,{size:20}),b&&!r?"Replace logo":"Choose image"]}),r&&(0,ue.jsx)(ai.A,{variant:"contained",loading:h,onClick:()=>p(m.restaurant_id,{file:r}),sx:{textTransform:"none",fontWeight:600,borderRadius:"10px",px:2.5,boxShadow:"0 4px 14px rgba(94, 171, 177, 0.35)",background:"linear-gradient(135deg, #5eabb1 0%, #4a9499 100%)","&:hover":{background:"linear-gradient(135deg, #4f9ea4 0%, #3d858a 100%)"}},children:"Save logo"}),r&&(0,ue.jsx)(Di.A,{variant:"outlined",color:"inherit",onClick:()=>{var e;o(null),d(null);const i=null===x||void 0===x||null===(e=x.data)||void 0===e?void 0:e.logoURL;c(i?`${Nn}${i}`:null)},sx:{textTransform:"none",fontWeight:600,borderRadius:"10px",borderColor:"rgba(148, 163, 184, 0.55)",color:"#64748b"},children:"Discard upload"})]}),t&&(0,ue.jsx)(Hn,{children:t}),(0,ue.jsxs)(Rn,{children:[(0,ue.jsx)(Ln,{children:"Recommended"}),"Horizontal layout works best. Prefer SVG or PNG with roughly 80\xd750px logical size for crisp menus; avoid very tall logos so the header stays balanced."]})]})}var On=a(23658),In=a(90719);const Jn=t.Jn.mainColor,Qn=o.Ay.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 14px;
  margin-top: 16px;
  min-height: 60vh;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
`,Wn=((0,o.Ay)(G._Dy)`
  font-size: 22px;
  cursor: pointer;
  color: #64748b;
  margin-bottom: 12px;
  transition: color 0.15s;
  &:hover { color: ${Jn}; }
`,o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 20px;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${Jn};
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  transition: filter 0.15s, transform 0.15s;
  box-shadow: 0 3px 10px ${Jn}40;

  &:hover  { filter: brightness(1.1); transform: translateY(-1px); }
  &:active { transform: scale(0.97); }

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    justify-content: center;
    font-size: 13px;
  }
`);function Yn(e){let{userInformation:i}=e;const a=(0,n.useRef)(null),r=`https://${null===i||void 0===i?void 0:i.restaurant_name}.menugic.com/`;(0,n.useEffect)((()=>{o(r)}),[r]);const o=async e=>{try{const i=document.createElement("canvas");await On.toCanvas(i,e,{errorCorrectionLevel:"H",scale:10}),a.current.src=i.toDataURL("image/png")}catch(i){console.error("Error generating QR code",i)}};return(0,ue.jsxs)(Qn,{children:[(0,ue.jsx)("div",{style:{width:"320px",height:"320px"},children:(0,ue.jsx)("img",{ref:a,alt:"QR Code",style:{width:"100%",height:"100%"}})}),(0,ue.jsx)(Wn,{onClick:()=>{const e=a.current.src,i=new In.Ay({orientation:"portrait",unit:"mm",format:"a4"}),n=(i.internal.pageSize.getWidth()-160)/2,r=(i.internal.pageSize.getHeight()-160)/2;i.addImage(e,"PNG",n,r,160,160),i.save("qrcode.pdf")},children:"Generate QR Code"})]})}const Zn=t.Jn.mainColor,Gn=o.Ay.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 14px;
  margin-top: 16px;
  min-height: 60vh;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
`,Vn=o.Ay.span`
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 4px;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 16px;
  }
`,Un=o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 20px;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${Zn};
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  transition: filter 0.2s, transform 0.15s;
  box-shadow: 0 3px 10px ${Zn}40;

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
  &:active { transform: scale(0.97); }
  &:disabled { opacity: 0.5; cursor: not-allowed; }

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    justify-content: center;
    font-size: 13px;
  }
`,Xn=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 24px;
  width: 100%;

  @media (max-width: ${t.L8.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
`,er=o.Ay.div`
  position: relative;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.07);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.12);
  }
`,ir=o.Ay.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  display: block;

  @media (max-width: ${t.L8.sm}px) {
    height: 130px;
  }
`,ar=o.Ay.input`
  width: calc(100% - 20px);
  padding: 8px;
  margin: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${Zn};
    box-shadow: 0 0 0 3px ${Zn}20;
  }
`,nr=o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px;
  border-top: 1px solid #f1f5f9;
`,rr=(0,o.Ay)(G.$Sw)`
  cursor: pointer;
  font-size: 22px;
  color: #94a3b8;
  transition: color 0.15s;
  &:hover { color: ${Zn}; }
`,or=(0,o.Ay)(G.b6i)`
  cursor: pointer;
  font-size: 22px;
  color: #94a3b8;
  transition: color 0.15s;
  &:hover { color: #ef4444; }
`,tr=o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 20px;
  height: 40px;
  outline: none;
  border: 1.5px solid ${Zn};
  color: ${Zn};
  cursor: pointer;
  border-radius: 8px;
  background-color: white;
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${Zn};
    color: white;
  }

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    justify-content: center;
  }
`,dr=o.Ay.input`
  display: none;
`,sr=o.Ay.img`
  max-width: 100%;
  max-height: 360px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,lr=o.Ay.span`
  color: #ef4444;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`,cr=o.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,gr=o.Ay.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: ${Zn};
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
  transition: opacity 0.15s;

  &:hover { opacity: 0.75; }
`,mr=o.Ay.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #0f172a;
`,pr=o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 24px;
  height: 42px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${Zn};
  margin-top: 16px;
  font-weight: 600;
  font-size: 14px;
  transition: filter 0.15s, transform 0.15s;
  box-shadow: 0 3px 10px ${Zn}40;

  &:hover  { filter: brightness(1.1); transform: translateY(-1px); }
  &:active { transform: scale(0.97); }

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    justify-content: center;
  }
`,hr=o.Ay.span`
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
  margin-top: 24px;
  display: block;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 15px;
  }
`,ur=o.Ay.div`
  width: 100%;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #e2e8f0;
`,xr=e=>{let{onSuccess:i,restaurant_id:a}=e;const{error:n,isLoading:o,status:t,data:d,refetch:s}=(0,ni.I)({queryFn:()=>(async e=>{try{const i=(0,Qe.i7)(e);return await r.A.get(i)}catch(n){throw n}})(a),retry:!1,queryKey:[`slider-images-${a}`],onSuccess:i,enabled:!!a});return{error:n,isLoading:o,status:t,response:d,refetch:s}},br=async e=>{try{const i=Qe.aG,a=new FormData;a.append("restaurant_id",e.restaurant_id),a.append("priority",void 0!==e.priority?e.priority:0),a.append("type",void 0!==e.type&&null!==e.type?e.type:1),e.file&&a.append("file",e.file);return await r.A.post(i,a,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`,"Content-Type":"multipart/form-data"}})}catch(i){throw i}},fr=e=>{let{onSuccess:i}=e;const{error:a,mutate:n,isPending:r}=(0,We.n)({mutationFn:br,onSuccess:i});return{isPending:r,error:a,handleApiCall:e=>n(e)}},_r=async e=>{let{id:i,...a}=e;try{const e=(0,Qe.lJ)(i),n=new FormData;void 0!==a.priority&&n.append("priority",a.priority),a.file&&n.append("file",a.file);return await r.A.put(e,n,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`,"Content-Type":"multipart/form-data"}})}catch(n){throw n}},yr=e=>{let{onSuccess:i}=e;const{error:a,mutate:n,isPending:r}=(0,We.n)({mutationFn:_r,onSuccess:i});return{isPending:r,error:a,handleApiCall:e=>n(e)}},vr=async e=>{try{const i=(0,Qe.sy)(e);return await r.A.delete(i,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(i){throw i}},jr=e=>{let{onSuccess:i}=e;const{error:a,mutate:n,isPending:r}=(0,We.n)({mutationFn:vr,onSuccess:i});return{isPending:r,error:a,handleApiCall:e=>n(e)}};function Ar(){const[e,i]=(0,n.useState)([]),[a,r]=(0,n.useState)(null),[o,t]=(0,n.useState)(!1),[d,s]=(0,n.useState)(1),[l,c]=(0,n.useState)(null),[g,m]=(0,n.useState)(null),[p,h]=(0,n.useState)(null),[u,x]=(0,n.useState)(0),[b,f]=(0,n.useState)("Please upload image"),_=(0,n.useRef)(null),y=(0,he.getCookie)("userInfo")||"{}",[v]=(0,n.useState)(JSON.parse(y)),{response:j,refetch:A,isLoading:w}=xr({onSuccess:()=>{},restaurant_id:v.restaurant_id}),{handleApiCall:k,isPending:$}=fr({onSuccess:()=>{di.oR.success("Image added successfully"),D(),E()},onError:e=>{var i,a;const n=(null===e||void 0===e||null===(i=e.response)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.message)||"Failed to add image";di.oR.error(n)}}),{handleApiCall:S,isPending:z}=yr({onSuccess:()=>{di.oR.success("Image updated successfully"),D(),E()},onError:()=>{di.oR.error("Failed to update image")}}),{handleApiCall:C,isPending:M}=jr({onSuccess:()=>{di.oR.success("Image deleted successfully"),E()},onError:()=>{di.oR.error("Failed to delete image")}}),E=()=>{A().then((e=>{let{data:a}=e;const n=(null===a||void 0===a?void 0:a.data)||[];i(n.filter((e=>1===e.type||!e.type))),r(n.find((e=>2===e.type)))}))};(0,n.useEffect)((()=>{if(!w&&null!==j&&void 0!==j&&j.data){const e=j.data;i(e.filter((e=>1===e.type||!e.type))),r(e.find((e=>2===e.type)))}}),[w,j]);const D=()=>{t(!1),c(null),m(null),h(null),x(0),s(1),f("Please upload image")},B=e=>{c(e.id),x(e.priority||0),s(e.type||1),h(`https://storage.googleapis.com/ecommerce-bucket-testing/${e.url}`),t(!0)},T=e=>{window.confirm("Are you sure you want to delete this image?")&&C(e)};return(0,ue.jsx)(Gn,{children:o?(0,ue.jsxs)(cr,{children:[(0,ue.jsx)(gr,{onClick:D,children:"\u2190 Back"}),(0,ue.jsxs)(mr,{children:[l?"Edit":"Add"," ",2===d?"Homepage Cover":"Slider"," Image"]}),(0,ue.jsx)(dr,{type:"file",accept:"image/*",ref:_,onChange:e=>{let{target:i}=e;if(i.files[0]){if(i.files[0].size/1048576>4)return void f("Image is greater than 4MB");f("Please upload image"),m(i.files[0]);const e=URL.createObjectURL(i.files[0]);h(e)}i.value=null}}),p?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(sr,{src:p,alt:"Preview"}),(0,ue.jsx)(pr,{variant:"contained",color:"error",onClick:()=>{h(null),m(null)},children:"Remove Image"})]}):(0,ue.jsx)(tr,{onClick:()=>{_.current.click()},children:"Upload Image"}),!p&&!g&&(0,ue.jsx)(lr,{children:b}),1===d&&(0,ue.jsx)(He.A,{label:"Priority",type:"number",value:u,onChange:e=>x(e.target.value),style:{width:"100%",maxWidth:"300px",marginTop:"20px"},helperText:"Higher priority images appear first"}),(0,ue.jsxs)(ai.A,{variant:"contained",onClick:()=>{if(!l&&!g)return void di.oR.error("Please upload an image");const e={restaurant_id:v.restaurant_id,priority:parseInt(u)||0,type:d||1};g&&(e.file=g),l?S({id:l,...e}):k(e)},loading:$||z,style:{marginTop:"20px",width:"100%",maxWidth:"300px"},children:[l?"Update":"Add"," ",2===d?"Homepage Cover":"Slider"," Image"]})]}):(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsxs)(ur,{children:[(0,ue.jsx)(hr,{children:"Homepage Cover Image"}),a?(0,ue.jsxs)(er,{children:[(0,ue.jsx)(ir,{src:`https://storage.googleapis.com/ecommerce-bucket-testing/${a.url}`,alt:"Homepage Cover"}),(0,ue.jsxs)(nr,{children:[(0,ue.jsx)(rr,{onClick:()=>{a&&B(a)}}),(0,ue.jsx)(or,{onClick:()=>T(a.id)})]})]}):(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(Un,{onClick:()=>{a?di.oR.warning("Homepage cover image already exists. Please edit or delete it first."):(s(2),t(!0))},children:"Add Homepage Cover Image"}),(0,ue.jsx)("p",{style:{marginTop:"10px",color:"#666",fontSize:"14px"},children:"Upload one image to display at the top of your homepage"})]})]}),(0,ue.jsxs)("div",{style:{marginTop:"40px"},children:[(0,ue.jsx)(Vn,{children:"Slider Images (Maximum 8 images)"}),(0,ue.jsxs)(Un,{onClick:()=>{e.length>=8?di.oR.warning("Maximum 8 slider images allowed"):(s(1),t(!0))},disabled:e.length>=8,children:["Add Slider Image (",e.length,"/8)"]}),(0,ue.jsx)(Xn,{children:e.map((e=>(0,ue.jsxs)(er,{children:[(0,ue.jsx)(ir,{src:`https://storage.googleapis.com/ecommerce-bucket-testing/${e.url}`,alt:`Slider ${e.id}`}),(0,ue.jsx)(ar,{type:"number",value:e.priority||0,onChange:i=>{const a=parseInt(i.target.value)||0;S({id:e.id,priority:a})},placeholder:"Priority"}),(0,ue.jsxs)(nr,{children:[(0,ue.jsx)(rr,{onClick:()=>B(e)}),(0,ue.jsx)(or,{onClick:()=>T(e.id)})]})]},e.id)))}),0===e.length&&(0,ue.jsx)("p",{style:{marginTop:"20px",color:"#666"},children:"No slider images added yet. Add up to 8 images for your homepage slider."})]})]})})}function wr(e){let{setSection:i,userInformation:a}=e;const[r,o]=(0,n.useState)("Branches");return(0,ue.jsxs)(Yi,{children:[(0,ue.jsxs)(Zi,{children:[(0,ue.jsx)(Gi,{tab:"Branches",activetab:r,onClick:()=>o("Branches"),children:"Branches"}),(0,ue.jsx)(Gi,{tab:"WorkingHours",activetab:r,onClick:()=>o("WorkingHours"),children:"Working Hours"}),(0,ue.jsx)(Gi,{tab:"SocialMedia",activetab:r,onClick:()=>o("SocialMedia"),children:"SocialMedia"}),(0,ue.jsx)(Gi,{tab:"Logo",activetab:r,onClick:()=>o("Logo"),children:"Logo"}),(0,ue.jsx)(Gi,{tab:"QrCode",activetab:r,onClick:()=>o("QrCode"),children:"QrCode"}),(0,ue.jsx)(Gi,{tab:"SliderImages",activetab:r,onClick:()=>o("SliderImages"),children:"Slider Images"})]}),"Branches"==r&&(0,ue.jsx)(ka,{}),"WorkingHours"==r&&(0,ue.jsx)(rn,{}),"SocialMedia"==r&&(0,ue.jsx)(wn,{}),"Logo"==r&&(0,ue.jsx)(Pn,{setSection:i}),"QrCode"==r&&(0,ue.jsx)(Yn,{userInformation:a,setSection:i}),"SliderImages"==r&&(0,ue.jsx)(Ar,{})]})}const kr=t.Jn.mainColor,$r="rgba(148, 163, 184, 0.22)",Sr="#64748b",zr=o.Ay.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  background-color: transparent;
  margin-top: 12px;
  min-height: 60vh;
  box-sizing: border-box;
`,Cr=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 4px;
  width: 100%;
`,Mr=o.Ay.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
`,Er=o.Ay.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${Sr};
  line-height: 1.45;
  max-width: 42rem;
`,Dr=o.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`,Br=o.Ay.div`
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  background-color: ${e=>e.activeTab===e.tab?kr:"rgba(148, 163, 184, 0.12)"};
  color: ${e=>e.activeTab===e.tab?"#fff":"#334155"};
  box-shadow: ${e=>e.activeTab===e.tab?"0 4px 14px rgba(94, 171, 177, 0.35)":"none"};
`,Tr=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 8px;
  gap: 12px;
  width: 100%;
  align-items: stretch;

  @media (max-width: ${t.L8.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${t.L8.sm}px) {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 6px;
    gap: 10px;
  }
`,Rr=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-width: 0;
  min-height: 56px;
  padding: 12px 14px;
  background: #ffffff;
  border: 1px solid ${$r};
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05);
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(94, 171, 177, 0.35);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  }
`,Lr=o.Ay.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  flex-shrink: 0;
  background: linear-gradient(
    135deg,
    rgba(94, 171, 177, 0.12) 0%,
    rgba(148, 163, 184, 0.15) 100%
  );
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(148, 163, 184, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Hr=o.Ay.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${kr};
  opacity: 0.85;
  text-transform: uppercase;
`,qr=o.Ay.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Fr=o.Ay.span`
  font-weight: 600;
  font-size: 0.95rem;
  color: #0f172a;
  text-transform: capitalize;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Kr=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
`,Nr=o.Ay.span`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #475569;
  background: rgba(148, 163, 184, 0.16);
  padding: 3px 8px;
  border-radius: 6px;
`,Pr=o.Ay.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: #b45309;
  background: rgba(245, 158, 11, 0.18);
  padding: 3px 8px;
  border-radius: 6px;
`,Or=o.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 20px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    ${kr} 0%,
    #4a9499 100%
  );
  margin-top: 16px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 16px rgba(94, 171, 177, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 22px rgba(94, 171, 177, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    margin-top: 12px;
  }
`,Ir=(0,o.Ay)(G.b6i)`
  cursor: pointer;
  font-size: 1.95rem;
  color: #64748b;
  padding: 0;
  min-width: 48px;
  min-height: 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: color 0.15s, background 0.15s, transform 0.15s;
  flex-shrink: 0;

  &:hover {
    color: #dc2626;
    background: rgba(220, 38, 38, 0.1);
    transform: scale(1.04);
  }

  &:active {
    transform: scale(0.98);
  }
`,Jr=(0,o.Ay)(G.$Sw)`
  cursor: pointer;
  font-size: 1.95rem;
  color: #64748b;
  padding: 0;
  min-width: 48px;
  min-height: 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: color 0.15s, background 0.15s, transform 0.15s;
  flex-shrink: 0;

  &:hover {
    color: ${kr};
    background: rgba(94, 171, 177, 0.16);
    transform: scale(1.04);
  }

  &:active {
    transform: scale(0.98);
  }
`,Qr=(0,o.Ay)(G._Dy)`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 22px;
  cursor: pointer;
  color: #475569;
  padding: 4px;
  border-radius: 8px;
  transition: background 0.15s, color 0.15s;

  &:hover {
    color: ${kr};
    background: rgba(94, 171, 177, 0.1);
  }
`,Wr=o.Ay.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  gap: 4px;
  flex-shrink: 0;
`,Yr={width:"100%",maxWidth:560,mb:2,alignSelf:"stretch"},Zr=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 8px;
  margin-top: 30px;
  margin-left: 20px;
  position: relative;
  padding: 44px 20px 20px;
  width: ${e=>"formbuilder"===e.activeTab?"100%":"60%"};
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid ${$r};
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;

  @media (max-width: ${t.L8.sm}px) {
    width: calc(100% - 24px);
    margin-left: 12px;
    padding-left: 16px;
    padding-right: 16px;
  }
`,Gr=o.Ay.div`
  grid-column: 1 / -1;
  margin-top: 12px;
  padding: 28px 20px;
  text-align: center;
  color: ${Sr};
  font-size: 0.95rem;
  background: rgba(148, 163, 184, 0.08);
  border-radius: 14px;
  border: 1px dashed ${$r};
  width: 100%;
  box-sizing: border-box;
`,Vr=Ue.Ik().shape({en_category:Ue.Yj().required("Required field"),priority:Ue.ai().required("Required field")}),Ur=Ue.Ik().shape({ar_category:Ue.Yj().required("Required field"),priority:Ue.ai().required("Required field")}),Xr=Ue.Ik().shape({en_category:Ue.Yj().required("Required field"),ar_category:Ue.Yj().required("Required field"),priority:Ue.ai().required("Required field")}),eo=async e=>{try{const i=Qe.RV,a=new FormData,{EN:n,ENAR:o,AR:t}=pe,{Lang:d}=JSON.parse((0,he.getCookie)("userInfo"));switch(d){case n:a.append("en_category",e.en_category);break;case t:a.append("ar_category",e.ar_category);break;case o:a.append("en_category",e.en_category),a.append("ar_category",e.ar_category)}a.append("image",e.image),a.append("priority",e.priority),a.append("discount",e.discount),a.append("form_json",e.form_json);return await r.A.post(i,a,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(i){throw i}},io=e=>{let{onSuccess:i,onError:a=(()=>{})}=e;const{error:n,mutate:r,isPending:o}=(0,We.n)({mutationFn:eo,onSuccess:i,onError:a});return{isPending:o,error:n,handleApiCall:e=>r(e)}},ao=e=>{let{onSuccess:i,onError:a=(()=>{})}=e;const{error:n,mutate:o,isPending:t}=(0,We.n)({mutationFn:e=>(async(e,i)=>{try{const a=(0,Qe.M$)(e),n=new FormData,{EN:o,ENAR:t,AR:d}=pe,{Lang:s}=JSON.parse((0,he.getCookie)("userInfo"));switch(s){case o:n.append("en_category",i.en_category);break;case d:n.append("ar_category",i.ar_category);break;case t:n.append("en_category",i.en_category),n.append("ar_category",i.ar_category)}return n.append("image",i.image),n.append("priority",i.priority),n.append("discount",i.discount),n.append("form_json",i.form_json),await r.A.put(a,n,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(n){throw n}})(e[0],e[1]),onSuccess:i,onError:a});return{isPending:t,error:n,handleApiCall:(e,i)=>o([e,i])}},no=e=>{let{onSuccess:i,onError:a=(()=>{})}=e;const{error:n,mutate:o,isPending:t}=(0,We.n)({mutationFn:e=>(async e=>{try{const i=(0,Qe.rb)(e);return await r.A.delete(i,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(n){throw n}})(e),onSuccess:i,onError:a});return{isPending:t,error:n,handleApiCall:e=>o(e)}};function ro(e){let{isOpen:i,setIsOpen:a,selectedIdForAction:r,refetchCategories:o,setSelectedIdForAction:t,refetchProductsHandler:d}=e;const{isPending:s,handleApiCall:l}=no({onSuccess:()=>{o(),d(),a(!1),t(null)},onError:()=>{di.oR.error("Failed to delete category !!")}}),c=()=>{a(!1)};return(0,ue.jsx)(n.Fragment,{children:(0,ue.jsxs)(Fi.A,{open:i,onClose:c,children:[(0,ue.jsx)(Oi.A,{children:"Delete Category"}),(0,ue.jsx)(Ni.A,{children:(0,ue.jsx)(Pi.A,{children:"Are you sure you want to delete this category with all corresponding products?"})}),(0,ue.jsxs)(Ki.A,{children:[(0,ue.jsx)(Di.A,{onClick:c,children:"Cancel"}),(0,ue.jsx)(ai.A,{onClick:()=>l(r),loading:s,children:"Delete"})]})]})})}const oo=e=>{let{onSuccess:i,restaurantId:a}=e;const{error:n,isLoading:o,status:t,data:d,refetch:s}=(0,ni.I)({queryFn:()=>(async e=>{try{const i=(0,Qe.JS)(e);return await r.A.get(i,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})}catch(n){throw n}})(a),retry:!1,queryKey:[`products-${a}`],enabled:Boolean(a),onSuccess:i,refetchOnWindowFocus:!1});return{error:n,isLoading:o,status:t,response:d,refetch:s}},to="https://storage.googleapis.com/ecommerce-bucket-testing/";function so(e){var i,a,r,o,t,d,s,c;let{setProducts:g}=e;const[m,p]=(0,n.useState)(!1),[h,u]=(0,n.useState)(!1),{AR:x,ENAR:b,EN:f}=pe,_=(0,he.getCookie)("userInfo")||"{}",[y,v]=(0,n.useState)(JSON.parse(_)),[j,A]=(0,n.useState)([]),[w,k]=(0,n.useState)(null),[$,S]=(0,n.useState)(null),[z,C]=(0,n.useState)("Please upload image"),[M,E]=(0,n.useState)("categoryinfo"),[D,B]=(0,n.useState)((()=>(0,Bi.yu)())),[T,R]=(0,n.useState)(null),L=(0,n.useRef)(null),{refetch:H}=oo({onSuccess:()=>{},restaurantId:y.restaurant_id}),q=y.Lang===x?Ur:y.Lang===f?Vr:Xr,F=y.Lang===f||y.Lang===b,K=y.Lang===x||y.Lang===b,{handleSubmit:N,register:P,formState:O,setValue:I,reset:J,getValues:Q}=(0,Je.mN)({resolver:(0,Ge.t)(q)}),{isPending:W,handleApiCall:Y}=io({onSuccess:()=>{ee(),ie(),J(),p(!1),S(null),R(null)},onError:()=>{di.oR.error("Failed to add category !!")}}),{isPending:Z,handleApiCall:G}=ao({onSuccess:()=>{p(!1),ee(),ie(),J(),S(null),R(null),k(null)},onError:()=>{di.oR.error("Failed to add product !!")}}),{isLoading:V,response:U,refetch:X}=ri({onSuccess:()=>{},restaurantId:y.restaurant_id}),ee=()=>{X().then((e=>{let{data:{data:i}}=e;return A(i)})).catch((e=>console.log(e)))};function ie(){H().then((e=>{let{data:{data:i}}=e;return g(i)})).catch((e=>console.log(e)))}(0,n.useEffect)((()=>{V||A(null===U||void 0===U?void 0:U.data)}),[V]),(0,n.useEffect)((()=>{m&&null==w&&B((0,Bi.yu)())}),[m,w]);return(0,ue.jsxs)(zr,{children:[(0,ue.jsx)(ro,{isOpen:h,setIsOpen:u,selectedIdForAction:w,refetchCategories:ee,setSelectedIdForAction:k,refetchProductsHandler:ie}),m?(0,ue.jsxs)(Zr,{activeTab:M,children:[(0,ue.jsx)(Qr,{onClick:()=>{J(),p(!1),R(null),S(null),k(null)}}),(0,ue.jsxs)(Dr,{children:[(0,ue.jsx)(Br,{activeTab:M,tab:"categoryinfo",onClick:()=>{E("categoryinfo")},children:"Category Details"}),(0,ue.jsx)(Br,{activeTab:M,tab:"formbuilder",onClick:()=>{E("formbuilder")},children:"Category options"})]}),"categoryinfo"===M?(0,ue.jsxs)(ue.Fragment,{children:[F&&(0,ue.jsx)(He.A,{label:"English category",name:"en_category",variant:"outlined",...P("en_category"),fullWidth:!0,sx:Yr,error:!(0,Ve.isEmpty)(null===O||void 0===O||null===(i=O.errors)||void 0===i?void 0:i.en_category),helperText:!(0,Ve.isEmpty)(null===O||void 0===O||null===(a=O.errors)||void 0===a?void 0:a.en_category)&&(null===(r=O.errors)||void 0===r?void 0:r.en_category.message)}),K&&(0,ue.jsx)(He.A,{label:"Arabic category",name:"ar_category",variant:"outlined",...P("ar_category"),fullWidth:!0,sx:Yr,error:!(0,Ve.isEmpty)(null===O||void 0===O||null===(o=O.errors)||void 0===o?void 0:o.ar_category),helperText:!(0,Ve.isEmpty)(null===O||void 0===O||null===(t=O.errors)||void 0===t?void 0:t.ar_category)&&(null===(d=O.errors)||void 0===d?void 0:d.ar_category.message)}),(0,ue.jsx)(He.A,{label:"Priority",name:"priority",variant:"outlined",...P("priority"),fullWidth:!0,sx:Yr,error:!(0,Ve.isEmpty)(null===O||void 0===O||null===(s=O.errors)||void 0===s?void 0:s.priority),helperText:!(0,Ve.isEmpty)(null===O||void 0===O||null===(c=O.errors)||void 0===c?void 0:c.priority)&&"Required Field",type:"number",defaultValue:1,inputProps:{min:1}}),(0,ue.jsx)(He.A,{label:"Discount",name:"discount",variant:"outlined",...P("discount"),fullWidth:!0,sx:Yr,type:"number"}),(0,ue.jsx)(Ae,{type:"file",ref:L,onChange:e=>{let{target:i}=e;if(i.files[0]){if(i.files[0].size/1048576>4)return void C("Image is greater than 4MB");C("Please upload image"),S(i.files[0]);const e=URL.createObjectURL(i.files[0]);R(e)}i.value=null}}),T?(0,ue.jsx)(Di.A,{variant:"contained",color:"error",style:{width:"150px",height:"40px"},onClick:()=>(R(null),S(null),void I("image",null)),children:"Delete"}):(0,ue.jsx)(Ce,{onClick:()=>{L.current.click()},children:"Upload Image"}),!T&&!Q().image&&(0,ue.jsx)(Be,{children:z}),T&&(0,ue.jsx)(ze,{src:T,alt:"Uploaded"}),(0,ue.jsx)(ai.A,{loading:W||Z,variant:"contained",style:{backgroundColor:"turquoise",height:"55px"},onClick:()=>{N((e=>{let i={...e,restaurant_id:y.restaurant_id,image:$,form_json:(0,Bi.nD)(D)};w?G(w,i):Y(i)}))()},children:(0,Ve.isNull)(w)?"Add Category":"Edit Category"})]}):(0,ue.jsx)(Hi,{value:D,onChange:B,languageHint:y.Lang===x?"ar":"en"})]}):(0,ue.jsx)(ue.Fragment,{children:!V&&(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsxs)(Cr,{children:[(0,ue.jsx)(Mr,{children:"Categories"}),(0,ue.jsx)(Er,{children:"Organize your menu into sections. Set priority, discounts, and optional images\u2014customers see categories on your public menu."})]}),(0,ue.jsxs)(Or,{onClick:()=>p(!0),children:[(0,ue.jsx)(l.t50,{size:20}),"Add Category"]}),(0,ue.jsx)(Tr,{children:null!==j&&void 0!==j&&j.length?j.map((e=>{var i;const a=(e=>{switch(y.Lang){case f:return e.en_category;case x:return e.ar_category;case b:return`${e.en_category}-${e.ar_category}`;default:return(null===e||void 0===e?void 0:e.en_category)||(null===e||void 0===e?void 0:e.ar_category)||""}})(e)||"\u2014",n=(a||"?").trim().charAt(0),r=Boolean(null===e||void 0===e?void 0:e.image_url),o=Number(null===e||void 0===e?void 0:e.discount);return(0,ue.jsxs)(Rr,{children:[(0,ue.jsx)(Lr,{children:r?(0,ue.jsx)("img",{src:`${to}${e.image_url}`,alt:""}):(0,ue.jsx)(Hr,{children:n})}),(0,ue.jsxs)(qr,{children:[(0,ue.jsx)(Fr,{title:a,children:a}),(0,ue.jsxs)(Kr,{children:[(0,ue.jsxs)(Nr,{children:["Priority ",null!==(i=null===e||void 0===e?void 0:e.priority)&&void 0!==i?i:"\u2014"]}),o>0&&(0,ue.jsxs)(Pr,{children:[o,"% off"]})]})]}),(0,ue.jsxs)(Wr,{children:[(0,ue.jsx)(Jr,{"aria-label":"Edit category",onClick:()=>(e=>{switch(I("priority",null===e||void 0===e?void 0:e.priority),I("discount",null===e||void 0===e?void 0:e.discount),y.Lang){case f:I("en_category",e.en_category);break;case x:I("ar_category",e.ar_category);break;case b:I("en_category",e.en_category),I("ar_category",e.ar_category)}const i=Li(null===e||void 0===e?void 0:e.form_json);I("form_json",(0,Bi.nD)(i)),B(i),k(e.id),p(!0),R(`${to}${null===e||void 0===e?void 0:e.image_url}`)})(e)}),(0,ue.jsx)(Ir,{"aria-label":"Delete category",onClick:()=>{k(e.id),u(!0)}})]})]},e.id)})):(0,ue.jsx)(Gr,{children:"No categories yet. Add your first category to start building your menu."})})]})})]})}var lo=a(93376),co=a(22005);const go=o.i7`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,mo=o.i7`
  to { transform: rotate(360deg); }
`,po=(o.i7`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,o.Ay.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 20px;
  padding-bottom: 60px;
  animation: ${go} 0.35s ease both;

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    max-width: 100%;
    gap: 14px;
    margin-top: 14px;
  }
`),ho=o.Ay.div`
  border-radius: 20px;
  padding: 32px 32px 28px;
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  color: #f8fafc;
  box-shadow: 0 16px 40px rgba(10, 15, 40, 0.28);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  @media (max-width: ${t.L8.sm}px) {
    padding: 22px 18px 20px;
    border-radius: 14px;
  }
`,uo=o.Ay.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(120deg, #ffffff, #5eabb1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`,xo=o.Ay.p`
  margin: 6px 0 0;
  font-size: 13px;
  opacity: 0.55;
  position: relative;
  max-width: 480px;
`,bo=o.Ay.div`
  background: #ffffff;
  border: 1px solid rgba(148,163,184,0.18);
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(15,23,42,0.07);
  animation: ${go} 0.4s ease both;
  animation-delay: ${e=>e.$delay||"0s"};

  @media (max-width: ${t.L8.sm}px) {
    padding: 20px 16px;
    border-radius: 12px;
  }
`,fo=o.Ay.div`
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
`,_o=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
`,yo=o.Ay.button`
  padding: 9px 20px;
  border-radius: 10px;
  border: 1.5px solid ${e=>e.$active?"#5eabb1":"#e2e8f0"};
  background: ${e=>e.$active?"rgba(94,171,177,0.1)":"#ffffff"};
  color: ${e=>e.$active?"#5eabb1":"#64748b"};
  font-size: 13px;
  font-weight: ${e=>e.$active?"700":"500"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #5eabb1;
    color: #5eabb1;
  }
`,vo=o.Ay.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4px;
`,jo=o.Ay.input`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1.5px solid #e2e8f0;
  font-size: 13px;
  color: #334155;
  background: #f8fafc;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  min-width: 150px;

  &:focus {
    border-color: #5eabb1;
    box-shadow: 0 0 0 3px rgba(94,171,177,0.15);
  }
`,Ao=o.Ay.span`
  font-size: 13px;
  color: #94a3b8;
  font-weight: 500;
`,wo=o.Ay.button`
  margin-top: 6px;
  padding: 14px 32px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #5eabb1 0%, #4d9aa0 100%);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(94,171,177,0.3);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.5s ease;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(94,171,177,0.4);
    &::after { left: 120%; }
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,ko=o.Ay.span`
  width: 16px;
  height: 16px;
  border: 2.5px solid rgba(255,255,255,0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: ${mo} 0.6s linear infinite;
  display: inline-block;
`,$o=o.Ay.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 22px;
  margin-top: 8px;
`,So=o.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: #475569;
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,zo=o.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 20px;

  @media (max-width: ${t.L8.sm}px) {
    grid-template-columns: 1fr;
  }
`,Co=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: #475569;
  padding: 6px 0;
`,Mo=o.Ay.span`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: rgba(16,185,129,0.1);
  color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
`,Eo="https://77.37.51.25",Do=[{label:"This Week",days:7},{label:"Last 30 Days",days:30},{label:"Last 90 Days",days:90},{label:"Last 6 Months",days:180},{label:"Last Year",days:365},{label:"Custom",days:null}],Bo=e=>e.toISOString().split("T")[0],To=["Executive Summary (KPIs)","Daily Visits Trend (Chart)","Traffic by Day of Week (Chart)","Traffic Sources Breakdown","Device Breakdown (Mobile/Desktop)","Conversion Funnel (Visual)","Top Visited Products (Cards + Table)","Top Ordered Products + Conversion","Top Visited Categories (Cards + Table)","Least Visited Products","Revenue & Order Breakdown","Automated Insights & Recommendations"];function Ro(e){let{userInformation:i}=e;const[a,o]=(0,n.useState)(1),[t,d]=(0,n.useState)(Bo(new Date(Date.now()-2592e6))),[s,l]=(0,n.useState)(Bo(new Date)),[c,g]=(0,n.useState)(!1);return(0,ue.jsxs)(po,{children:[(0,ue.jsxs)(ho,{children:[(0,ue.jsx)(uo,{children:"Generate Performance Report"}),(0,ue.jsx)(xo,{children:"Create a comprehensive PDF report with charts, analytics, and actionable insights for your business."})]}),(0,ue.jsxs)(bo,{$delay:"0.05s",children:[(0,ue.jsx)(fo,{children:"Select Period"}),(0,ue.jsx)(_o,{children:Do.map(((e,i)=>(0,ue.jsx)(yo,{$active:a===i,onClick:()=>(e=>{o(e);const i=Do[e];null!==i.days&&(d(Bo(new Date(Date.now()-864e5*i.days))),l(Bo(new Date)))})(i),children:e.label},e.label)))}),(0,ue.jsxs)(vo,{children:[(0,ue.jsx)(jo,{type:"date",value:t,onChange:e=>{d(e.target.value),o(5)}}),(0,ue.jsx)(Ao,{children:"to"}),(0,ue.jsx)(jo,{type:"date",value:s,onChange:e=>{l(e.target.value),o(5)}})]})]}),(0,ue.jsxs)(bo,{$delay:"0.1s",children:[(0,ue.jsx)(fo,{children:"Report Contents"}),(0,ue.jsxs)($o,{children:[(0,ue.jsx)(So,{children:"Your report will include:"}),(0,ue.jsx)(zo,{children:To.map((e=>(0,ue.jsxs)(Co,{children:[(0,ue.jsx)(Mo,{children:"\u2713"}),e]},e)))})]})]}),(0,ue.jsx)(bo,{$delay:"0.15s",children:(0,ue.jsx)(wo,{onClick:async()=>{if(!t||!s)return void alert("Please select both start and end dates.");const e=`${Eo}/restaurants/report/generate-report?restaurant_id=${null===i||void 0===i?void 0:i.restaurant_id}&startDate=${t}&toDate=${s}`;try{g(!0);const i=(0,he.getCookie)("accessToken"),a=await r.A.get(e,{headers:i?{Authorization:`Bearer ${i}`}:{},responseType:"blob"}),n=new Blob([a.data],{type:"application/pdf"}),o=document.createElement("a");o.href=URL.createObjectURL(n),o.download=`report_${t}_to_${s}.pdf`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(o.href)}catch(o){var a,n;console.error("Download failed:",o),alert("Could not download the report.\n\n"+((null===(a=o.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||o.message))}finally{g(!1)}},disabled:c,children:c?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(ko,{})," Generating Report..."]}):(0,ue.jsx)(ue.Fragment,{children:"\ud83d\udcc4 Download Report (PDF)"})})})]})}var Lo=a(82519),Ho=a(66899),qo=a(918),Fo=a(73817),Ko=a(8426),No=a(57783),Po=a(84543);const Oo="#ffffff",Io="rgba(148,163,184,0.18)",Jo="#0f172a",Qo="#64748b",Wo="#94a3b8",Yo="#5eabb1",Zo="rgba(94,171,177,0.12)",Go="#10b981",Vo="rgba(16,185,129,0.12)",Uo="#f59e0b",Xo="rgba(245,158,11,0.12)",et="#f43f5e",it="rgba(244,63,94,0.12)",at="#3b82f6",nt="rgba(59,130,246,0.12)",rt="0 4px 20px rgba(15,23,42,0.07)",ot="0 8px 28px rgba(15,23,42,0.10)",tt=o.i7`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,dt=o.i7`
  0%   { background-position: -600px 0; }
  100% { background-position: 600px 0; }
`,st=(o.i7`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`,o.i7`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,o.Ay.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 48px;
  box-sizing: border-box;
  animation: ${tt} 0.35s ease both;

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    max-width: 100%;
    gap: 16px;
    margin-top: 14px;
  }
`),lt=o.Ay.div`
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  border-radius: 20px;
  padding: 28px 28px 24px;
  color: #f8fafc;
  position: relative;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(10, 15, 40, 0.28);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  @media (max-width: ${t.L8.sm}px) {
    padding: 20px 18px 18px;
    border-radius: 14px;
  }
`,ct=o.Ay.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`,gt=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,mt=o.Ay.h1`
  margin: 0;
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #f8fafc;
  line-height: 1.2;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 1.35rem;
  }
`,pt=o.Ay.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(248, 250, 252, 0.6);
  line-height: 1.5;
  max-width: 520px;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 0.8rem;
  }
`,ht=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  align-items: center;
`,ut=o.Ay.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(248, 250, 252, 0.75);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  padding: 4px 10px;
`,xt=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`,bt=o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 16px;
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  ${e=>e.$primary?o.AH`
          border: none;
          background: ${Yo};
          color: #fff;
          box-shadow: 0 4px 14px rgba(94, 171, 177, 0.4);
          &:hover { background: #4f9ea4; transform: translateY(-1px); }
        `:o.AH`
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          color: rgba(248,250,252,0.85);
          &:hover { background: rgba(255,255,255,0.14); }
        `}
`,ft=o.Ay.div`
  background: ${Oo};
  border-radius: 16px;
  border: 1px solid ${Io};
  padding: 16px 20px;
  box-shadow: ${rt};
  box-sizing: border-box;
`,_t=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`,yt=o.Ay.div`
  flex: 1;
  min-width: 200px;
  position: relative;
  display: flex;
  align-items: center;
`,vt=o.Ay.span`
  position: absolute;
  left: 12px;
  color: ${Wo};
  font-size: 1rem;
  pointer-events: none;
  display: flex;
`,jt=o.Ay.input`
  width: 100%;
  height: 40px;
  padding: 0 12px 0 38px;
  border: 1.5px solid rgba(148, 163, 184, 0.3);
  border-radius: 10px;
  font-size: 0.875rem;
  color: ${Jo};
  background: rgba(248, 250, 252, 0.9);
  outline: none;
  transition: border-color 0.15s;
  box-sizing: border-box;

  &::placeholder {
    color: ${Wo};
  }

  &:focus {
    border-color: ${Yo};
    background: #fff;
  }
`,At=o.Ay.select`
  height: 40px;
  padding: 0 32px 0 12px;
  border: 1.5px solid rgba(148, 163, 184, 0.3);
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 500;
  color: ${Qo};
  background: rgba(248, 250, 252, 0.9) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") no-repeat right 10px center;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${Yo};
  }
`,wt=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,kt=o.Ay.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${Wo};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
`,$t=o.Ay.button`
  padding: 6px 12px;
  font-size: 0.78rem;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  border: 1.5px solid
    ${e=>e.$active?Yo:"rgba(148,163,184,0.3)"};
  background: ${e=>e.$active?Zo:"transparent"};
  color: ${e=>e.$active?Yo:Qo};

  &:hover {
    border-color: ${Yo};
    color: ${Yo};
    background: ${Zo};
  }
`,St=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${t.L8.md}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${t.L8.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
`,zt=o.Ay.div`
  background: ${Oo};
  border-radius: 16px;
  padding: 18px 16px 16px;
  border: 1px solid ${Io};
  box-shadow: ${rt};
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${e=>e.$accent||Yo};
    border-radius: 16px 16px 0 0;
  }

  &:hover {
    box-shadow: ${ot};
    transform: translateY(-2px);
  }
`,Ct=o.Ay.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background: ${e=>e.$bg||Zo};
  color: ${e=>e.$color||Yo};
  margin-bottom: 4px;
  flex-shrink: 0;
`,Mt=o.Ay.span`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${Jo};
  line-height: 1;
  letter-spacing: -0.03em;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 1.3rem;
  }
`,Et=o.Ay.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: ${Qo};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.3;
`,Dt=o.Ay.span`
  font-size: 0.72rem;
  color: ${e=>e.$positive?Go:e.$negative?et:Wo};
  font-weight: ${e=>e.$positive||e.$negative?"600":"400"};
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: auto;
`,Bt=o.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: ${t.L8.md}px) {
    grid-template-columns: 1fr;
  }
`,Tt=o.Ay.div`
  background: ${Oo};
  border-radius: 16px;
  border: 1px solid ${Io};
  padding: 22px 20px;
  box-shadow: ${rt};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Rt=o.Ay.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,Lt=o.Ay.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${Jo};
  letter-spacing: -0.02em;
`,Ht=o.Ay.p`
  margin: 4px 0 0 0;
  font-size: 0.8rem;
  color: ${Qo};
  line-height: 1.4;
`,qt=o.Ay.div`
  width: 100%;
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
  display: flex;
  background: rgba(148,163,184,0.12);
`,Ft=o.Ay.div`
  height: 100%;
  background: ${e=>e.$color};
  transition: width 0.5s ease;
  min-width: ${e=>e.$value>0?"4px":"0"};
`,Kt=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Nt=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Pt=o.Ay.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${e=>e.$color};
  flex-shrink: 0;
`,Ot=o.Ay.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${Jo};
  min-width: 64px;
`,It=o.Ay.div`
  flex: 1;
  height: 8px;
  background: rgba(148,163,184,0.12);
  border-radius: 999px;
  overflow: hidden;
`,Jt=o.Ay.div`
  height: 100%;
  border-radius: 999px;
  background: ${e=>e.$color};
  transition: width 0.5s ease;
`,Qt=o.Ay.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${Qo};
  min-width: 40px;
  text-align: right;
`,Wt=o.Ay.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${Wo};
  min-width: 40px;
  text-align: right;
`,Yt=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Zt=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Gt=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 3px;
  min-width: 50px;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${Qo};
`,Vt=o.Ay.span`
  color: ${e=>e.$n>=4?"#f59e0b":3===e.$n?"#f97316":"#ef4444"};
  font-size: 0.85rem;
`,Ut=o.Ay.div`
  flex: 1;
  height: 10px;
  background: rgba(148,163,184,0.12);
  border-radius: 999px;
  overflow: hidden;
`,Xt=o.Ay.div`
  height: 100%;
  border-radius: 999px;
  background: ${e=>5===e.$n?"#10b981":4===e.$n?"#22c55e":3===e.$n?"#f59e0b":2===e.$n?"#f97316":"#ef4444"};
  transition: width 0.5s ease;
  min-width: ${e=>e.$count>0?"6px":"0"};
`,ed=o.Ay.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: ${Jo};
  min-width: 22px;
  text-align: right;
`,id=o.Ay.span`
  font-size: 0.72rem;
  color: ${Wo};
  min-width: 36px;
  text-align: right;
`,ad=o.Ay.div`
  background: ${Oo};
  border-radius: 16px;
  border: 1px solid ${Io};
  padding: 22px 20px 16px;
  box-shadow: ${rt};
  box-sizing: border-box;
`,nd=o.Ay.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;

  @media (max-width: ${t.L8.sm}px) {
    flex-direction: column;
    gap: 8px;
  }
`,rd=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${t.L8.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${t.L8.sm}px) {
    grid-template-columns: 1fr;
  }
`,od=o.Ay.div`
  background: ${Oo};
  border-radius: 14px;
  border: 1px solid ${e=>e.$borderColor||Io};
  padding: 16px;
  box-shadow: ${rt};
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: ${ot};
  }
`,td=o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,dd=o.Ay.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  background: ${e=>e.$bg||nt};
  color: ${e=>e.$color||at};
  flex-shrink: 0;
`,sd=o.Ay.span`
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 3px 8px;
  border-radius: 999px;
  background: ${e=>e.$bg||nt};
  color: ${e=>e.$color||at};
`,ld=o.Ay.p`
  margin: 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${Jo};
  line-height: 1.4;
`,cd=o.Ay.span`
  font-size: 0.75rem;
  color: ${Qo};
  line-height: 1.4;
`,gd=o.Ay.div`
  background: ${Oo};
  border-radius: 16px;
  border: 1px solid ${Io};
  box-shadow: ${rt};
  overflow: hidden;
`,md=o.Ay.div`
  padding: 18px 20px 14px;
  border-bottom: 1px solid rgba(148,163,184,0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`,pd=o.Ay.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${Jo};
  display: flex;
  align-items: center;
  gap: 8px;
`,hd=o.Ay.span`
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${Zo};
  color: ${Yo};
`,ud=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,xd=o.Ay.div`
  padding: 18px 20px;
  border-bottom: 1px solid rgba(148,163,184,0.1);
  display: flex;
  gap: 16px;
  cursor: pointer;
  transition: background 0.15s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(248, 250, 252, 0.9);
  }

  @media (max-width: ${t.L8.sm}px) {
    padding: 14px 16px;
    flex-direction: column;
    gap: 10px;
  }
`,bd=o.Ay.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${e=>"positive"===e.$mood?Vo:"negative"===e.$mood?it:Xo};
  color: ${e=>"positive"===e.$mood?Go:"negative"===e.$mood?et:Uo};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 700;
  flex-shrink: 0;
`,fd=o.Ay.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,_d=o.Ay.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`,yd=o.Ay.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${Jo};
`,vd=o.Ay.span`
  font-size: 0.75rem;
  color: ${Wo};
  margin-left: auto;

  @media (max-width: ${t.L8.sm}px) {
    margin-left: 0;
  }
`,jd=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 0.95rem;
`,Ad=o.Ay.span`
  color: #f59e0b;
  line-height: 1;
`,wd=o.Ay.span`
  color: rgba(148, 163, 184, 0.5);
  line-height: 1;
`,kd=o.Ay.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${Qo};
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,$d=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`,Sd=o.Ay.span`
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 3px 9px;
  border-radius: 999px;
  background: ${e=>"positive"===e.$mood?Vo:"negative"===e.$mood?it:Xo};
  color: ${e=>"positive"===e.$mood?Go:"negative"===e.$mood?et:Uo};
`,zd=o.Ay.span`
  font-size: 0.68rem;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(148,163,184,0.1);
  color: ${Qo};
`,Cd=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  @media (max-width: ${t.L8.sm}px) {
    align-self: flex-end;
  }
`,Md=o.Ay.button`
  width: 34px;
  height: 34px;
  border-radius: 9px;
  border: 1px solid rgba(148,163,184,0.25);
  background: transparent;
  color: ${Qo};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${Zo};
    border-color: ${Yo};
    color: ${Yo};
  }
`,Ed=o.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  animation: ${o.i7`from{opacity:0}to{opacity:1}`} 0.18s ease;
`,Dd=o.Ay.div`
  background: #fff;
  border-radius: 20px;
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.2);
  animation: ${o.i7`
    from{opacity:0;transform:scale(0.96) translateY(10px)}
    to{opacity:1;transform:scale(1) translateY(0)}
  `} 0.22s ease;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.3); border-radius: 4px; }
`,Bd=o.Ay.div`
  padding: 20px 24px 16px;
  border-bottom: 1px solid rgba(148,163,184,0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
  border-radius: 20px 20px 0 0;
`,Td=o.Ay.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${Jo};
`,Rd=o.Ay.button`
  width: 34px;
  height: 34px;
  border-radius: 9px;
  border: 1px solid rgba(148,163,184,0.25);
  background: transparent;
  color: ${Qo};
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.15s;

  &:hover {
    background: ${it};
    border-color: ${et};
    color: ${et};
  }
`,Ld=o.Ay.div`
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Hd=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,qd=o.Ay.span`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${Wo};
`,Fd=o.Ay.span`
  font-size: 0.9rem;
  color: ${Jo};
  line-height: 1.55;
`,Kd=o.Ay.div`
  padding: 14px 16px;
  background: rgba(248, 250, 252, 0.9);
  border: 1px solid rgba(148,163,184,0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  color: ${Jo};
  line-height: 1.6;
  min-height: 60px;
`,Nd=o.Ay.hr`
  border: none;
  border-top: 1px solid rgba(148,163,184,0.15);
  margin: 0;
`,Pd=o.Ay.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,Od=o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 16px;
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s;

  ${e=>e.$primary?o.AH`
          border: none;
          background: ${Yo};
          color: #fff;
          box-shadow: 0 4px 14px rgba(94,171,177,0.35);
          &:hover { background: #4f9ea4; }
        `:o.AH`
          border: 1.5px solid rgba(148,163,184,0.3);
          background: transparent;
          color: ${Qo};
          &:hover { border-color: ${Yo}; color: ${Yo}; background: ${Zo}; }
        `}
`,Id=o.Ay.div`
  padding: 52px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,Jd=o.Ay.div`
  font-size: 2.8rem;
  color: ${Wo};
  line-height: 1;
`,Qd=o.Ay.p`
  margin: 0;
  font-size: 0.975rem;
  font-weight: 700;
  color: ${Jo};
`,Wd=o.Ay.p`
  margin: 0;
  font-size: 0.82rem;
  color: ${Qo};
  max-width: 300px;
  line-height: 1.5;
`,Yd=o.AH`
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 600px 100%;
  animation: ${dt} 1.4s infinite linear;
`,Zd=o.Ay.div`
  height: ${e=>e.$h||"80px"};
  border-radius: 14px;
  ${Yd}
`,Gd=o.Ay.div`
  height: ${e=>e.$h||"14px"};
  width: ${e=>e.$w||"100%"};
  border-radius: 6px;
  ${Yd}
  margin-bottom: ${e=>e.$mb||"0"}px;
`,Vd=o.Ay.div`
  padding: 14px 18px;
  background: ${it};
  border: 1px solid rgba(244, 63, 94, 0.25);
  border-radius: 12px;
  color: ${et};
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`,Ud=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`,Xd=o.Ay.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${Jo};
  letter-spacing: -0.02em;
`,es=o.Ay.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${Qo};
`,is=async e=>await r.A.get((0,Qe.Ue)(e)),as=e=>{const i=Number(e);return isNaN(i)||i<1||i>5?null:i},ns=e=>{if(null===e||void 0===e)return"neutral";const i=Number(e);return i>=4?"positive":i>=3?"neutral":"negative"},rs=e=>{if(!e)return"\u2014";const i=new Date(e);return isNaN(i)?"\u2014":i.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})},os=e=>{if(!e)return"\u2014";const i=new Date(e);return isNaN(i)?"\u2014":i.toLocaleDateString("en-GB",{day:"2-digit",month:"short"})},ts=e=>{if(!e)return"\u2014";const i=new Date(e);if(isNaN(i))return"\u2014";const a=Date.now()-i.getTime(),n=Math.floor(a/6e4);if(n<1)return"Just now";if(n<60)return`${n}m ago`;const r=Math.floor(n/60);if(r<24)return`${r}h ago`;const o=Math.floor(r/24);return o<30?`${o}d ago`:rs(e)},ds=e=>{let{rating:i,size:a="0.95rem"}=e;const n=as(i)||0;return(0,ue.jsx)(jd,{children:[1,2,3,4,5].map((e=>e<=n?(0,ue.jsx)(Ad,{style:{fontSize:a},children:"\u2605"},e):(0,ue.jsx)(wd,{style:{fontSize:a},children:"\u2605"},e)))})},ss=e=>{let{name:i,mood:a}=e;const n=(i||"?").trim().charAt(0).toUpperCase();return(0,ue.jsx)(bd,{$mood:a,children:n})};function ls(){const[e,i]=(0,n.useState)([]),[a,r]=(0,n.useState)(!1),[o,t]=(0,n.useState)(""),[d,s]=(0,n.useState)(""),[l,c]=(0,n.useState)("all"),[g,m]=(0,n.useState)("all"),[p,h]=(0,n.useState)("newest"),[u,x]=(0,n.useState)(null),b=(0,n.useMemo)((()=>{const e=(0,he.getCookie)("userInfo")||"{}";try{return JSON.parse(e)}catch{return{}}}),[]),f=null===b||void 0===b?void 0:b.restaurant_id,_=(0,n.useCallback)((()=>{f&&(r(!0),t(""),is(f).then((e=>{var a;const n=(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.data)||(null===e||void 0===e?void 0:e.data)||[];i(Array.isArray(n)?n:[])})).catch((()=>{t("Failed to load feedback data. Please try again."),i([])})).finally((()=>r(!1))))}),[f]);(0,n.useEffect)((()=>{_()}),[_]);const y=(0,n.useMemo)((()=>e.map(((e,i)=>{var a;return{id:null!==(a=e.id)&&void 0!==a?a:i,rating:as(e.rating),comment:e.comments||e.comment||e.feedback_text||"",createdAt:e.created_at||e.createdAt||null,customerName:e.customer_name||e.user_name||e.name||null,branch:e.branch_name||e.branch||null,orderType:e.order_type||e.orderType||null,mood:ns(as(e.rating))}}))),[e]),v=(0,n.useMemo)((()=>{const e=y.length,i=y.filter((e=>null!==e.rating)),a=i.reduce(((e,i)=>e+i.rating),0),n=i.length?(a/i.length).toFixed(1):null,r=Date.now(),o=2592e6,t=y.filter((e=>e.createdAt&&r-new Date(e.createdAt)<=o)).length,d=y.filter((e=>{if(!e.createdAt)return!1;const i=r-new Date(e.createdAt);return i>o&&i<=5184e6})).length,s=y.filter((e=>e.createdAt&&r-new Date(e.createdAt)<=6048e5)).length,l=y.filter((e=>"positive"===e.mood)).length;return{total:e,avgRating:n,thisMonth:t,lastMonth:d,last7:s,positiveCount:l,negativeCount:y.filter((e=>"negative"===e.mood)).length,positiveRate:e?Math.round(l/e*100):0}}),[y]),j=(0,n.useMemo)((()=>{const e=y.length||1,i=y.filter((e=>"positive"===e.mood)).length,a=y.filter((e=>"neutral"===e.mood)).length,n=y.filter((e=>"negative"===e.mood)).length;return[{label:"Positive",count:i,pct:Math.round(i/e*100),color:"#10b981"},{label:"Neutral",count:a,pct:Math.round(a/e*100),color:"#f59e0b"},{label:"Negative",count:n,pct:Math.round(n/e*100),color:"#f43f5e"}]}),[y]),A=(0,n.useMemo)((()=>{const e=y.filter((e=>null!==e.rating)).length||1;return[5,4,3,2,1].map((i=>{const a=y.filter((e=>e.rating===i)).length;return{n:i,count:a,pct:Math.round(a/e*100)}}))}),[y]),w=(0,n.useMemo)((()=>{const e={},i=new Date;for(let a=13;a>=0;a--){const n=new Date(i);n.setDate(n.getDate()-a);const r=os(n.toISOString());e[r]={date:r,count:0,totalRating:0,rated:0}}return y.forEach((i=>{if(!i.createdAt)return;if(Date.now()-new Date(i.createdAt)>12096e5)return;const a=os(i.createdAt);e[a]&&(e[a].count+=1,null!==i.rating&&(e[a].totalRating+=i.rating,e[a].rated+=1))})),Object.values(e).map((e=>({date:e.date,Feedbacks:e.count,"Avg Rating":e.rated?+(e.totalRating/e.rated).toFixed(1):0})))}),[y]),k=(0,n.useMemo)((()=>{const e=[];if(0===y.length)return e.push({icon:(0,ue.jsx)(G.fm3,{}),bg:"rgba(59,130,246,0.1)",color:"#3b82f6",chip:"Tip",chipBg:"rgba(59,130,246,0.1)",chipColor:"#3b82f6",borderColor:"rgba(59,130,246,0.2)",text:"No feedback yet.",action:"Share your menu link with customers and encourage them to rate their experience."}),e;v.positiveRate>=75&&e.push({icon:(0,ue.jsx)(G.lFw,{}),bg:"rgba(16,185,129,0.1)",color:"#10b981",chip:"Great",chipBg:"rgba(16,185,129,0.1)",chipColor:"#10b981",borderColor:"rgba(16,185,129,0.2)",text:`${v.positiveRate}% of feedback is positive \u2014 customers love you!`,action:"Keep up the great work and consider promoting positive reviews."}),v.negativeCount>0&&e.push({icon:(0,ue.jsx)(G.Wux,{}),bg:"rgba(244,63,94,0.1)",color:"#f43f5e",chip:"Attention",chipBg:"rgba(244,63,94,0.1)",chipColor:"#f43f5e",borderColor:"rgba(244,63,94,0.2)",text:`${v.negativeCount} negative review${v.negativeCount>1?"s":""} need${1===v.negativeCount?"s":""} attention.`,action:"Review low-rated feedback and address any recurring issues to improve customer satisfaction."}),0===v.last7&&y.length>0&&e.push({icon:(0,ue.jsx)(G.Z0e,{}),bg:"rgba(245,158,11,0.1)",color:"#f59e0b",chip:"Notice",chipBg:"rgba(245,158,11,0.1)",chipColor:"#f59e0b",borderColor:"rgba(245,158,11,0.2)",text:"No feedback received in the last 7 days.",action:"Try prompting customers via QR code at checkout to leave feedback."}),v.avgRating&&Number(v.avgRating)>=4.5&&e.push({icon:(0,ue.jsx)(G.imn,{}),bg:"rgba(139,92,246,0.1)",color:"#8b5cf6",chip:"Insight",chipBg:"rgba(139,92,246,0.1)",chipColor:"#8b5cf6",borderColor:"rgba(139,92,246,0.2)",text:`Excellent average rating of ${v.avgRating}/5.`,action:"Highlight your top rating on marketing materials."});const i=y.filter((e=>!e.comment)).length;return i>0&&i>=.5*y.length&&e.push({icon:(0,ue.jsx)(G.MJW,{}),bg:"rgba(59,130,246,0.1)",color:"#3b82f6",chip:"Tip",chipBg:"rgba(59,130,246,0.1)",chipColor:"#3b82f6",borderColor:"rgba(59,130,246,0.2)",text:"Many customers left ratings but no comments.",action:"Add a short prompt asking customers to describe their experience."}),v.thisMonth>v.lastMonth&&v.lastMonth>0&&e.push({icon:(0,ue.jsx)(G.imn,{}),bg:"rgba(16,185,129,0.1)",color:"#10b981",chip:"Growing",chipBg:"rgba(16,185,129,0.1)",chipColor:"#10b981",borderColor:"rgba(16,185,129,0.2)",text:`Feedback volume up ${v.thisMonth-v.lastMonth} vs last month.`,action:"Keep engaging customers\u2014feedback is increasing which helps improve your service."}),e.length<2&&e.push({icon:(0,ue.jsx)(G.fm3,{}),bg:"rgba(59,130,246,0.1)",color:"#3b82f6",chip:"Tip",chipBg:"rgba(59,130,246,0.1)",chipColor:"#3b82f6",borderColor:"rgba(59,130,246,0.2)",text:"Encourage more customers to share their experience.",action:"Display a feedback QR code on tables, receipts, and packaging."}),e}),[y,v]),$=(0,n.useMemo)((()=>{let e=[...y];if(d.trim()){const i=d.toLowerCase();e=e.filter((e=>e.comment&&e.comment.toLowerCase().includes(i)||e.customerName&&e.customerName.toLowerCase().includes(i)))}if("all"!==l){const i=Number(l);e=e.filter((e=>e.rating===i))}return"all"!==g&&(e=e.filter((e=>e.mood===g))),e.sort(((e,i)=>{const a=e.createdAt?new Date(e.createdAt):new Date(0),n=i.createdAt?new Date(i.createdAt):new Date(0);if("newest"===p)return n-a;if("oldest"===p)return a-n;if("highest"===p)return(i.rating||0)-(e.rating||0);if("lowest"===p)return(e.rating||0)-(i.rating||0);if("negative"===p){const a={negative:0,neutral:1,positive:2};return a[e.mood]-a[i.mood]}return n-a})),e}),[y,d,l,g,p]),S=(0,n.useMemo)((()=>{if(0===v.lastMonth)return v.thisMonth>0?"New this month":null;const e=v.thisMonth-v.lastMonth,i=Math.round(Math.abs(e/v.lastMonth*100));return e>=0?`+${i}% vs last month`:`-${i}% vs last month`}),[v]);return(0,ue.jsxs)(st,{children:[(0,ue.jsx)(lt,{children:(0,ue.jsxs)(ct,{children:[(0,ue.jsxs)(gt,{children:[(0,ue.jsx)(mt,{children:"Customer Feedback"}),(0,ue.jsx)(pt,{children:"Track satisfaction, comments, and customer mood across your menu."}),(0,ue.jsxs)(ht,{children:[(0,ue.jsxs)(ut,{children:[(0,ue.jsx)(G.wje,{}),a?"Loading\u2026":`${v.total} total feedback`]}),v.avgRating&&(0,ue.jsxs)(ut,{children:[(0,ue.jsx)(G.wgd,{}),v.avgRating," / 5 avg rating"]}),v.thisMonth>0&&(0,ue.jsxs)(ut,{children:[(0,ue.jsx)(G.dDC,{}),v.thisMonth," this month"]})]})]}),(0,ue.jsx)(xt,{children:(0,ue.jsxs)(bt,{type:"button",onClick:_,title:"Refresh",children:[(0,ue.jsx)(G.joZ,{size:16}),"Refresh"]})})]})}),o&&(0,ue.jsxs)(Vd,{children:[(0,ue.jsx)(G.Wux,{size:18}),o]}),(0,ue.jsxs)(St,{children:[(0,ue.jsxs)(zt,{$accent:"#5eabb1",children:[(0,ue.jsx)(Ct,{$bg:"rgba(94,171,177,0.12)",$color:"#5eabb1",children:(0,ue.jsx)(G.wje,{})}),(0,ue.jsx)(Mt,{children:a?"\u2014":v.total}),(0,ue.jsx)(Et,{children:"Total Feedbacks"}),(0,ue.jsx)(Dt,{children:"All time"})]}),(0,ue.jsxs)(zt,{$accent:"#f59e0b",children:[(0,ue.jsx)(Ct,{$bg:"rgba(245,158,11,0.12)",$color:"#f59e0b",children:(0,ue.jsx)(G.wgd,{})}),(0,ue.jsx)(Mt,{children:a?"\u2014":v.avgRating?`${v.avgRating}`:"\u2014"}),(0,ue.jsx)(Et,{children:"Average Rating"}),(0,ue.jsx)(Dt,{children:"out of 5"})]}),(0,ue.jsxs)(zt,{$accent:"#3b82f6",children:[(0,ue.jsx)(Ct,{$bg:"rgba(59,130,246,0.12)",$color:"#3b82f6",children:(0,ue.jsx)(G.dDC,{})}),(0,ue.jsx)(Mt,{children:a?"\u2014":v.thisMonth}),(0,ue.jsx)(Et,{children:"This Month"}),(0,ue.jsx)(Dt,{$positive:v.lastMonth>0&&v.thisMonth>v.lastMonth,$negative:v.lastMonth>0&&v.thisMonth<v.lastMonth,children:a?"":(0,ue.jsxs)(ue.Fragment,{children:[v.lastMonth>0&&v.thisMonth>v.lastMonth&&(0,ue.jsx)(G.Awo,{size:11}),v.lastMonth>0&&v.thisMonth<v.lastMonth&&(0,ue.jsx)(G.TYx,{size:11}),S||"Recent activity"]})})]}),(0,ue.jsxs)(zt,{$accent:"#10b981",children:[(0,ue.jsx)(Ct,{$bg:"rgba(16,185,129,0.12)",$color:"#10b981",children:(0,ue.jsx)(G.tC7,{})}),(0,ue.jsx)(Mt,{children:a?"\u2014":`${v.positiveRate}%`}),(0,ue.jsx)(Et,{children:"Positive Rate"}),(0,ue.jsxs)(Dt,{$positive:v.positiveRate>=70,children:[v.positiveCount," positive reviews"]})]}),(0,ue.jsxs)(zt,{$accent:"#f43f5e",children:[(0,ue.jsx)(Ct,{$bg:"rgba(244,63,94,0.12)",$color:"#f43f5e",children:(0,ue.jsx)(G.ucT,{})}),(0,ue.jsx)(Mt,{children:a?"\u2014":v.negativeCount}),(0,ue.jsx)(Et,{children:"Negative Count"}),(0,ue.jsx)(Dt,{$negative:v.negativeCount>0,children:v.negativeCount>0?"Needs review":"None \u2014 great!"})]}),(0,ue.jsxs)(zt,{$accent:"#8b5cf6",children:[(0,ue.jsx)(Ct,{$bg:"rgba(139,92,246,0.12)",$color:"#8b5cf6",children:(0,ue.jsx)(G.FFH,{})}),(0,ue.jsx)(Mt,{children:a?"\u2014":v.last7}),(0,ue.jsx)(Et,{children:"Last 7 Days"}),(0,ue.jsx)(Dt,{children:0===v.last7?"No recent feedback":"Recent activity"})]})]}),!a&&(0,ue.jsxs)(Bt,{children:[(0,ue.jsxs)(Tt,{children:[(0,ue.jsx)(Rt,{children:(0,ue.jsxs)(Ud,{children:[(0,ue.jsx)(Lt,{children:"Sentiment Overview"}),(0,ue.jsx)(Ht,{children:"Customer mood based on star ratings"})]})}),0===y.length?(0,ue.jsxs)(Id,{style:{padding:"24px 0"},children:[(0,ue.jsx)(Jd,{children:"\ud83d\ude36"}),(0,ue.jsx)(Qd,{children:"No data yet"})]}):(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(qt,{children:j.map((e=>(0,ue.jsx)(Ft,{$color:e.color,style:{width:`${e.pct}%`},title:`${e.label}: ${e.pct}%`},e.label)))}),(0,ue.jsx)(Kt,{children:j.map((e=>(0,ue.jsxs)(Nt,{children:[(0,ue.jsx)(Pt,{$color:e.color}),(0,ue.jsx)(Ot,{children:e.label}),(0,ue.jsx)(It,{children:(0,ue.jsx)(Jt,{$color:e.color,style:{width:`${e.pct}%`}})}),(0,ue.jsx)(Qt,{children:e.count}),(0,ue.jsxs)(Wt,{children:[e.pct,"%"]})]},e.label)))})]})]}),(0,ue.jsxs)(Tt,{children:[(0,ue.jsx)(Rt,{children:(0,ue.jsxs)(Ud,{children:[(0,ue.jsx)(Lt,{children:"Rating Distribution"}),(0,ue.jsx)(Ht,{children:"Breakdown by star rating"})]})}),(0,ue.jsx)(Yt,{children:A.map((e=>{let{n:i,count:a,pct:n}=e;return(0,ue.jsxs)(Zt,{children:[(0,ue.jsxs)(Gt,{children:[(0,ue.jsx)(Vt,{$n:i,children:"\u2605"}),i," star"]}),(0,ue.jsx)(Ut,{children:(0,ue.jsx)(Xt,{$n:i,$count:a,style:{width:`${n}%`}})}),(0,ue.jsx)(ed,{children:a}),(0,ue.jsxs)(id,{children:[n,"%"]})]},i)}))})]})]}),a&&(0,ue.jsxs)(Bt,{children:[(0,ue.jsx)(Zd,{$h:"220px"}),(0,ue.jsx)(Zd,{$h:"220px"})]}),!a&&(0,ue.jsxs)(ad,{children:[(0,ue.jsx)(nd,{children:(0,ue.jsxs)(Ud,{children:[(0,ue.jsx)(Xd,{children:"Feedback Trend"}),(0,ue.jsx)(es,{children:"Daily feedback volume and average rating \u2014 last 14 days"})]})}),w.every((e=>0===e.Feedbacks))?(0,ue.jsxs)(Id,{children:[(0,ue.jsx)(Jd,{children:"\ud83d\udcc8"}),(0,ue.jsx)(Qd,{children:"No recent trend data"}),(0,ue.jsx)(Wd,{children:"Once customers start leaving feedback, your trend will appear here."})]}):(0,ue.jsx)(Lo.u,{width:"100%",height:260,children:(0,ue.jsxs)(Ho.E,{data:w,margin:{top:4,right:8,left:-24,bottom:0},children:[(0,ue.jsx)(qo.d,{strokeDasharray:"3 3",stroke:"rgba(148,163,184,0.15)"}),(0,ue.jsx)(Fo.W,{dataKey:"date",tick:{fontSize:11,fill:"#94a3b8"},axisLine:!1,tickLine:!1,interval:1}),(0,ue.jsx)(Ko.h,{tick:{fontSize:11,fill:"#94a3b8"},axisLine:!1,tickLine:!1}),(0,ue.jsx)(No.m,{contentStyle:{borderRadius:"10px",border:"1px solid rgba(148,163,184,0.2)",boxShadow:"0 8px 24px rgba(15,23,42,0.1)",fontSize:"12px"}}),(0,ue.jsx)(Po.yP,{dataKey:"Feedbacks",fill:"#5eabb1",radius:[4,4,0,0],maxBarSize:32})]})})]}),a&&(0,ue.jsx)(Zd,{$h:"280px"}),!a&&k.length>0&&(0,ue.jsxs)("div",{children:[(0,ue.jsx)(Xd,{style:{marginBottom:"12px"},children:"Smart Insights"}),(0,ue.jsx)(rd,{children:k.map(((e,i)=>(0,ue.jsxs)(od,{$borderColor:e.borderColor,children:[(0,ue.jsxs)(td,{children:[(0,ue.jsx)(dd,{$bg:e.bg,$color:e.color,children:e.icon}),(0,ue.jsx)(sd,{$bg:e.chipBg,$color:e.chipColor,children:e.chip})]}),(0,ue.jsx)(ld,{children:e.text}),(0,ue.jsx)(cd,{children:e.action})]},i)))})]}),(0,ue.jsxs)(ft,{children:[(0,ue.jsxs)(_t,{children:[(0,ue.jsxs)(yt,{children:[(0,ue.jsx)(vt,{children:(0,ue.jsx)(G.gZ7,{})}),(0,ue.jsx)(jt,{type:"text",placeholder:"Search comments or customer name\u2026",value:d,onChange:e=>s(e.target.value)})]}),(0,ue.jsxs)(At,{value:l,onChange:e=>c(e.target.value),"aria-label":"Filter by rating",children:[(0,ue.jsx)("option",{value:"all",children:"All ratings"}),(0,ue.jsx)("option",{value:"5",children:"\u2605\u2605\u2605\u2605\u2605 5 Stars"}),(0,ue.jsx)("option",{value:"4",children:"\u2605\u2605\u2605\u2605\u2606 4 Stars"}),(0,ue.jsx)("option",{value:"3",children:"\u2605\u2605\u2605\u2606\u2606 3 Stars"}),(0,ue.jsx)("option",{value:"2",children:"\u2605\u2605\u2606\u2606\u2606 2 Stars"}),(0,ue.jsx)("option",{value:"1",children:"\u2605\u2606\u2606\u2606\u2606 1 Star"})]}),(0,ue.jsxs)(At,{value:g,onChange:e=>m(e.target.value),"aria-label":"Filter by mood",children:[(0,ue.jsx)("option",{value:"all",children:"All moods"}),(0,ue.jsx)("option",{value:"positive",children:"\ud83d\ude0a Positive"}),(0,ue.jsx)("option",{value:"neutral",children:"\ud83d\ude10 Neutral"}),(0,ue.jsx)("option",{value:"negative",children:"\ud83d\ude1e Negative"})]})]}),(0,ue.jsxs)(wt,{style:{marginTop:"12px"},children:[(0,ue.jsx)(kt,{children:"Sort:"}),[{key:"newest",label:"Newest"},{key:"oldest",label:"Oldest"},{key:"highest",label:"Highest rating"},{key:"lowest",label:"Lowest rating"},{key:"negative",label:"Needs attention"}].map((e=>(0,ue.jsx)($t,{$active:p===e.key,onClick:()=>h(e.key),children:e.label},e.key)))]})]}),(0,ue.jsxs)(gd,{children:[(0,ue.jsx)(md,{children:(0,ue.jsxs)(pd,{children:["All Feedback",(0,ue.jsx)(hd,{children:$.length})]})}),(0,ue.jsx)(ud,{children:a?(0,ue.jsx)("div",{style:{padding:"16px 20px",display:"flex",flexDirection:"column",gap:"12px"},children:[1,2,3].map((e=>(0,ue.jsxs)("div",{style:{display:"flex",gap:"14px",alignItems:"center"},children:[(0,ue.jsx)(Zd,{$h:"44px",style:{width:"44px",flexShrink:0,borderRadius:"12px"}}),(0,ue.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"8px"},children:[(0,ue.jsx)(Gd,{$h:"14px",$w:"40%"}),(0,ue.jsx)(Gd,{$h:"12px",$w:"80%"}),(0,ue.jsx)(Gd,{$h:"10px",$w:"30%"})]})]},e)))}):0===$.length?(0,ue.jsxs)(Id,{children:[(0,ue.jsx)(Jd,{children:"\ud83d\udd0d"}),(0,ue.jsx)(Qd,{children:0===y.length?"No feedback yet":"No results match your filters"}),(0,ue.jsx)(Wd,{children:0===y.length?"Share your menu link with customers and encourage them to rate their experience.":"Try adjusting your search or filters to find what you're looking for."})]}):$.map((e=>(0,ue.jsxs)(xd,{onClick:()=>x(e),children:[(0,ue.jsx)(ss,{name:e.customerName||"Anonymous",mood:e.mood}),(0,ue.jsxs)(fd,{children:[(0,ue.jsxs)(_d,{children:[(0,ue.jsx)(yd,{children:e.customerName||"Anonymous customer"}),null!==e.rating&&(0,ue.jsx)(ds,{rating:e.rating}),(0,ue.jsx)(vd,{children:ts(e.createdAt)})]}),e.comment?(0,ue.jsx)(kd,{children:e.comment}):(0,ue.jsx)(kd,{style:{fontStyle:"italic",opacity:.55},children:"No comment left"}),(0,ue.jsxs)($d,{children:[(0,ue.jsx)(Sd,{$mood:e.mood,children:"positive"===e.mood?"\ud83d\ude0a Positive":"negative"===e.mood?"\ud83d\ude1e Negative":"\ud83d\ude10 Neutral"}),e.branch&&(0,ue.jsxs)(zd,{children:["\ud83d\udccd ",e.branch]}),e.orderType&&(0,ue.jsxs)(zd,{children:["\ud83d\udef5 ",e.orderType]}),null!==e.rating&&(0,ue.jsxs)(zd,{children:["\u2b50 ",e.rating,"/5"]})]})]}),(0,ue.jsx)(Cd,{onClick:e=>e.stopPropagation(),children:e.comment&&(0,ue.jsx)(Md,{type:"button",title:"Copy comment",onClick:i=>((e,i)=>{e.stopPropagation(),i&&navigator.clipboard&&navigator.clipboard.writeText(i).catch((()=>{}))})(i,e.comment),children:(0,ue.jsx)(G.kn0,{size:15})})})]},e.id)))})]}),u&&(0,ue.jsx)(Ed,{onClick:()=>x(null),children:(0,ue.jsxs)(Dd,{onClick:e=>e.stopPropagation(),children:[(0,ue.jsxs)(Bd,{children:[(0,ue.jsx)(Td,{children:"Feedback Detail"}),(0,ue.jsx)(Rd,{type:"button",onClick:()=>x(null),"aria-label":"Close",children:(0,ue.jsx)(G.m6K,{})})]}),(0,ue.jsxs)(Ld,{children:[(0,ue.jsxs)(Hd,{children:[(0,ue.jsx)(qd,{children:"Customer"}),(0,ue.jsx)(Fd,{children:u.customerName||"Anonymous customer"})]}),(0,ue.jsxs)(Hd,{children:[(0,ue.jsx)(qd,{children:"Rating"}),(0,ue.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,ue.jsx)(ds,{rating:u.rating,size:"1.2rem"}),(0,ue.jsx)(Fd,{children:null!==u.rating?`${u.rating} / 5`:"Not rated"})]})]}),(0,ue.jsxs)(Hd,{children:[(0,ue.jsx)(qd,{children:"Mood"}),(0,ue.jsx)(Sd,{$mood:u.mood,children:"positive"===u.mood?"\ud83d\ude0a Positive":"negative"===u.mood?"\ud83d\ude1e Negative":"\ud83d\ude10 Neutral"})]}),(0,ue.jsx)(Nd,{}),(0,ue.jsxs)(Hd,{children:[(0,ue.jsx)(qd,{children:"Comment"}),(0,ue.jsx)(Kd,{children:u.comment||(0,ue.jsx)("span",{style:{color:"#94a3b8",fontStyle:"italic"},children:"No comment provided"})})]}),(0,ue.jsx)(Nd,{}),(0,ue.jsxs)(Hd,{children:[(0,ue.jsx)(qd,{children:"Date"}),(0,ue.jsx)(Fd,{children:rs(u.createdAt)})]}),u.branch&&(0,ue.jsxs)(Hd,{children:[(0,ue.jsx)(qd,{children:"Branch"}),(0,ue.jsx)(Fd,{children:u.branch})]}),u.orderType&&(0,ue.jsxs)(Hd,{children:[(0,ue.jsx)(qd,{children:"Order Type"}),(0,ue.jsx)(Fd,{children:u.orderType})]}),(0,ue.jsx)(Nd,{}),(0,ue.jsxs)(Pd,{children:[u.comment&&(0,ue.jsxs)(Od,{type:"button",onClick:()=>{navigator.clipboard&&navigator.clipboard.writeText(u.comment).catch((()=>{}))},children:[(0,ue.jsx)(G.kn0,{size:15}),"Copy comment"]}),(0,ue.jsx)(Od,{type:"button",$primary:!0,onClick:()=>x(null),children:"Done"})]})]})]})})]})}var cs=a(91965);const gs="#ffffff",ms="rgba(148,163,184,0.18)",ps="#0f172a",hs="#64748b",us="#94a3b8",xs="#5eabb1",bs="rgba(94,171,177,0.12)",fs="#6366f1",_s="rgba(99,102,241,0.12)",ys="#10b981",vs="rgba(16,185,129,0.12)",js="#f43f5e",As="rgba(244,63,94,0.12)",ws="#0ea5e9",ks="rgba(14,165,233,0.12)",$s="0 4px 20px rgba(15,23,42,0.07)",Ss="0 8px 28px rgba(15,23,42,0.10)",zs=o.i7`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Cs=o.i7`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,Ms=o.AH`
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 600px 100%;
  animation: ${Cs} 1.4s infinite linear;
`,Es=o.Ay.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 20px;
  direction: ${e=>"ar"===e.$activeLanguage?"rtl":"ltr"};
  box-sizing: border-box;
  animation: ${zs} 0.35s ease both;
  padding-bottom: 40px;

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    max-width: 100%;
    gap: 14px;
    margin-top: 14px;
  }
`,Ds=o.Ay.div`
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  border-radius: 20px;
  padding: 28px 28px 24px;
  color: #f8fafc;
  position: relative;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(10, 15, 40, 0.28);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  @media (max-width: ${t.L8.sm}px) {
    padding: 20px 18px 18px;
    border-radius: 16px;
  }
`,Bs=o.Ay.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`,Ts=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,Rs=(o.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,o.Ay.h1`
  margin: 0;
  font-size: 1.65rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #f8fafc;
  line-height: 1.2;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 1.3rem;
  }
`),Ls=o.Ay.p`
  margin: 0;
  font-size: 0.88rem;
  color: rgba(248, 250, 252, 0.6);
  line-height: 1.5;
  max-width: 520px;
`,Hs=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-top: 2px;
`,qs=o.Ay.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.74rem;
  font-weight: 600;
  color: rgba(248, 250, 252, 0.75);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  padding: 4px 10px;
`,Fs=(o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  ${e=>e.$primary?o.AH`
          border: none;
          background: ${xs};
          color: #fff;
          box-shadow: 0 4px 14px rgba(94, 171, 177, 0.4);
          &:hover { background: #4f9ea4; transform: translateY(-1px); }
        `:o.AH`
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          color: rgba(248,250,252,0.85);
          &:hover { background: rgba(255,255,255,0.14); }
        `}
`,o.Ay.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${t.L8.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${t.L8.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
`),Ks=o.Ay.div`
  background: ${gs};
  border-radius: 16px;
  padding: 18px 16px 16px;
  border: 1px solid ${ms};
  box-shadow: ${$s};
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${e=>e.$accent||xs};
    border-radius: 16px 16px 0 0;
  }

  &:hover {
    box-shadow: ${Ss};
    transform: translateY(-2px);
  }
`,Ns=o.Ay.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  background: ${e=>e.$bg||bs};
  color: ${e=>e.$color||xs};
  margin-bottom: 2px;
  flex-shrink: 0;
`,Ps=o.Ay.span`
  font-size: 1.55rem;
  font-weight: 800;
  color: ${ps};
  line-height: 1;
  letter-spacing: -0.03em;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 1.25rem;
  }
`,Os=o.Ay.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: ${hs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.3;
`,Is=o.Ay.span`
  font-size: 0.71rem;
  color: ${us};
  font-weight: 400;
  margin-top: auto;
`,Js=o.Ay.div`
  display: grid;
  grid-template-columns: 42% 1fr;
  gap: 14px;
  align-items: start;

  @media (max-width: ${t.L8.md}px) {
    grid-template-columns: 1fr;
  }
`,Qs=o.Ay.div`
  background: ${gs};
  border-radius: 16px;
  border: 1px solid ${ms};
  box-shadow: ${$s};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Ws=(0,o.Ay)(Qs)``,Ys=o.Ay.div`
  padding: 16px 18px 12px;
  border-bottom: 1px solid rgba(148,163,184,0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`,Zs=o.Ay.h3`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${ps};
`,Gs=o.Ay.span`
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 999px;
  background: ${bs};
  color: ${xs};
`,Vs=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 14px;
  border-bottom: 1px solid rgba(148,163,184,0.1);
`,Us=(o.Ay.div`
  flex: 1;
  min-width: 140px;
  position: relative;
  display: flex;
  align-items: center;
`,o.Ay.span`
  position: absolute;
  left: 9px;
  color: ${us};
  font-size: 0.95rem;
  pointer-events: none;
  display: flex;
`,o.Ay.input`
  width: 100%;
  height: 36px;
  padding: 0 10px 0 32px;
  border: 1.5px solid rgba(148,163,184,0.25);
  border-radius: 10px;
  font-size: 0.82rem;
  color: ${ps};
  background: rgba(248,250,252,0.9);
  outline: none;
  transition: border-color 0.15s;
  box-sizing: border-box;

  &::placeholder { color: ${us}; }
  &:focus { border-color: ${xs}; background: #fff; }
`),Xs=o.Ay.select`
  height: 36px;
  padding: 0 28px 0 10px;
  border: 1.5px solid rgba(148,163,184,0.25);
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${hs};
  background: rgba(248,250,252,0.9) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") no-repeat right 8px center;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  transition: border-color 0.15s;

  &:focus { border-color: ${xs}; }
`,el=o.Ay.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 540px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.25); border-radius: 4px; }
`,il=o.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(148,163,184,0.1);
  cursor: pointer;
  transition: background 0.15s, border-left-color 0.15s;
  border-left: 3px solid
    ${e=>e.selected?xs:"transparent"};
  background: ${e=>e.selected?"rgba(94,171,177,0.06)":"transparent"};
  position: relative;

  &:last-child { border-bottom: none; }

  &:hover {
    background: ${e=>e.selected?"rgba(94,171,177,0.08)":"rgba(248,250,252,0.9)"};
  }
`,al=o.Ay.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  background: ${e=>"suggestion"===e.$type?ks:"question"===e.$type?_s:bs};
  color: ${e=>"suggestion"===e.$type?ws:"question"===e.$type?fs:xs};
`,nl=o.Ay.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
`,rl=o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,ol=o.Ay.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${ps};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,tl=o.Ay.span`
  font-size: 0.68rem;
  color: ${us};
  white-space: nowrap;
  flex-shrink: 0;
`,dl=o.Ay.span`
  font-size: 0.78rem;
  color: ${hs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`,sl=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
  align-items: center;
`,ll=o.Ay.span`
  font-size: 0.68rem;
  color: ${hs};
`,cl=o.AH`
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 2px 7px;
  border-radius: 999px;
  border: 1px solid transparent;
`,gl=o.Ay.span`
  ${cl}
  ${e=>{let{variant:i}=e;const a=String(i||"").toLowerCase();return a.includes("status-new")?"background: rgba(59,130,246,0.12); color: #1d4ed8; border-color: rgba(59,130,246,0.25);":a.includes("status-in_progress")?"background: rgba(245,158,11,0.12); color: #b45309; border-color: rgba(245,158,11,0.25);":a.includes("status-resolved")?"background: rgba(16,185,129,0.12); color: #047857; border-color: rgba(16,185,129,0.25);":a.includes("status-closed")?"background: rgba(148,163,184,0.18); color: #475569; border-color: rgba(148,163,184,0.3);":a.includes("type-question")?"background: rgba(99,102,241,0.12); color: #4338ca; border-color: rgba(99,102,241,0.25);":a.includes("type-suggestion")?"background: rgba(14,165,233,0.12); color: #0369a1; border-color: rgba(14,165,233,0.25);":a.includes("channel")?"background: rgba(168,85,247,0.12); color: #7e22ce; border-color: rgba(168,85,247,0.25);":"background: rgba(99,102,241,0.12); color: #4338ca; border-color: rgba(99,102,241,0.25);"}}
`,ml=(o.Ay.div`
  padding: 36px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${us};
  font-size: 0.875rem;
`,o.Ay.button`
  margin: 12px auto;
  display: block;
  padding: 9px 20px;
  border-radius: 10px;
  border: 1.5px solid rgba(148,163,184,0.3);
  background: transparent;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${hs};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${xs};
    color: ${xs};
    background: ${bs};
  }

  &:disabled { opacity: 0.55; cursor: not-allowed; }
`),pl=(0,o.Ay)(Qs)`
  gap: 0;
`,hl=o.Ay.div`
  padding: 18px 20px 14px;
  border-bottom: 1px solid rgba(148,163,184,0.12);
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  align-items: flex-start;
`,ul=o.Ay.h3`
  margin: 0 0 6px 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${ps};
  line-height: 1.35;
`,xl=o.Ay.span`
  font-size: 0.8rem;
  color: ${hs};
  display: block;
  margin-bottom: 4px;
`,bl=o.Ay.div`
  margin-top: 8px;
  font-size: 0.8rem;
  color: ${hs};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,fl=o.Ay.span`
  font-weight: 700;
  color: ${ps};
`,_l=o.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 700;
  color: ${ys};
  background: ${vs};
  border: 1px solid rgba(16,185,129,0.25);
  text-decoration: none;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: rgba(16,185,129,0.2);
    border-color: ${ys};
  }
`,yl=o.Ay.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  flex-shrink: 0;
`,vl=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 18px;
  background: rgba(248,250,252,0.7);
  border-bottom: 1px solid rgba(148,163,184,0.1);
`,jl=o.Ay.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${hs};
  white-space: nowrap;
`,Al=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px 16px;
  background: rgba(248,250,252,0.6);
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.25); border-radius: 4px; }
`,wl=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>{const i=e.isOwner,a="ar"===e.$activeLanguage;return i?a?"flex-start":"flex-end":a?"flex-end":"flex-start"}};
`,kl=o.Ay.span`
  font-size: 0.68rem;
  font-weight: 700;
  color: ${us};
  margin-bottom: 4px;
  padding: 0 4px;
`,$l=o.Ay.div`
  max-width: 80%;
  padding: 10px 14px;
  border-radius: ${e=>e.isOwner?"16px 4px 16px 16px":"4px 16px 16px 16px"};
  font-size: 0.875rem;
  line-height: 1.55;
  color: ${e=>e.isOwner?"#fff":ps};
  background: ${e=>e.isOwner?"linear-gradient(135deg, #5eabb1 0%, #4a9499 100%)":gs};
  border: 1px solid ${e=>e.isOwner?"transparent":"rgba(148,163,184,0.2)"};
  box-shadow: ${e=>e.isOwner?"0 4px 14px rgba(94,171,177,0.3)":$s};
  word-break: break-word;
`,Sl=o.Ay.div`
  font-size: 0.65rem;
  color: ${e=>e.isOwner?"rgba(255,255,255,0.65)":us};
  margin-top: 6px;
  text-align: ${e=>e.isOwner?"right":"left"};
`,zl=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 16px 16px;
  border-top: 1px solid rgba(148,163,184,0.12);
  background: ${gs};
`,Cl=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Ml=o.Ay.button`
  padding: 5px 10px;
  font-size: 0.72rem;
  font-weight: 600;
  border-radius: 999px;
  border: 1.5px solid rgba(148,163,184,0.25);
  background: rgba(248,250,252,0.9);
  color: ${hs};
  cursor: pointer;
  text-align: left;
  line-height: 1.35;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.15s;

  &:hover {
    border-color: ${xs};
    color: ${xs};
    background: ${bs};
  }
`,El=o.Ay.span`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${us};
  display: flex;
  align-items: center;
  gap: 4px;
`,Dl=(o.Ay.div`
  position: relative;
`,o.Ay.textarea`
  width: 100%;
  border-radius: 12px;
  border: 1.5px solid rgba(148,163,184,0.25);
  padding: 12px 14px;
  font-size: 0.875rem;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  outline: none;
  color: ${ps};
  background: rgba(248,250,252,0.8);
  line-height: 1.5;
  box-sizing: border-box;
  transition: border-color 0.15s, background 0.15s;

  &::placeholder { color: ${us}; }
  &:focus { border-color: ${xs}; background: #fff; }
`),Bl=o.Ay.span`
  font-size: 0.68rem;
  color: ${us};
  text-align: right;
  display: block;
`,Tl=o.Ay.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
`,Rl=o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, ${xs} 0%, #4a9499 100%);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(94,171,177,0.35);
  transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(94,171,177,0.42);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Ll=o.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 16px;
  border-radius: 10px;
  border: 1.5px solid rgba(16,185,129,0.4);
  background: rgba(16,185,129,0.1);
  color: #065f46;
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  opacity: ${e=>e.$disabled?.5:1};
  pointer-events: ${e=>e.$disabled?"none":"auto"};
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: rgba(16,185,129,0.18);
    border-color: ${ys};
  }
`,Hl=o.Ay.div`
  padding: 52px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1;
`,ql=o.Ay.div`
  font-size: 2.8rem;
  line-height: 1;
  color: ${us};
`,Fl=o.Ay.p`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${ps};
`,Kl=o.Ay.p`
  margin: 0;
  font-size: 0.82rem;
  color: ${hs};
  max-width: 280px;
  line-height: 1.5;
`,Nl=o.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  box-sizing: border-box;
`,Pl=o.Ay.div`
  width: 100%;
  max-width: 540px;
  background: #fff;
  border-radius: 20px;
  padding: 24px 24px 20px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.2);
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Ol=o.Ay.h4`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${ps};
`,Il=o.Ay.p`
  margin: 0;
  font-size: 0.82rem;
  color: ${hs};
`,Jl=o.Ay.pre`
  margin: 0;
  padding: 14px 16px;
  background: rgba(248,250,252,0.9);
  border-radius: 12px;
  border: 1px solid rgba(148,163,184,0.2);
  font-size: 0.82rem;
  color: ${ps};
  white-space: pre-wrap;
  max-height: 260px;
  overflow-y: auto;
  font-family: inherit;
  line-height: 1.6;
`,Ql=o.Ay.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 8px;
  border-top: 1px solid rgba(148,163,184,0.15);
`,Wl=o.Ay.button`
  padding: 9px 16px;
  border-radius: 10px;
  border: 1.5px solid rgba(148,163,184,0.3);
  background: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${hs};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${xs};
    color: ${xs};
    background: ${bs};
  }
`,Yl=o.Ay.button`
  padding: 9px 18px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, ${xs} 0%, #4a9499 100%);
  font-size: 0.875rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(94,171,177,0.35);
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(94,171,177,0.42);
  }
`,Zl=o.Ay.div`
  margin-top: 4px;
  padding: 12px 14px;
  border-radius: 12px;
  background: ${vs};
  border: 1px solid rgba(16,185,129,0.2);
`,Gl=o.Ay.div`
  font-size: 0.78rem;
  font-weight: 700;
  color: #065f46;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 5px;
`,Vl=o.Ay.pre`
  margin: 0;
  font-size: 0.8rem;
  color: ${ps};
  white-space: pre-wrap;
  font-family: inherit;
  line-height: 1.55;
`,Ul=(o.Ay.div`
  display: none;
`,o.Ay.h2`
  display: none;
`,o.Ay.p`
  display: none;
`,o.Ay.div`
  background: ${gs};
  border-radius: 16px;
  border: 1px solid ${ms};
  padding: 18px 20px;
  box-shadow: ${$s};
`,o.Ay.div`
  color: ${js};
  font-size: 0.8rem;
  margin-bottom: 8px;
  padding: 10px 14px;
  background: ${As};
  border: 1px solid rgba(244,63,94,0.2);
  border-radius: 10px;
`),Xl=(o.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: ${As};
  border: 1px solid rgba(244,63,94,0.2);
  border-radius: 12px;
  color: ${js};
  font-size: 0.82rem;
  font-weight: 500;
`,o.Ay.div`
  height: 14px;
  border-radius: 6px;
  ${Ms}
  margin-bottom: 10px;
`),ec=o.Ay.div`
  height: ${e=>e.$h||"60px"};
  border-radius: 12px;
  ${Ms}
  margin-bottom: 8px;
`,ic=async()=>await r.A.get(Qe.Sg,{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}}),ac=async e=>{let{status:i,type:a,q:n,page:o,pageSize:t}=e;return await r.A.get(Qe.Af,{params:{status:i||void 0,type:a||void 0,q:n||void 0,page:o,pageSize:t},headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})},nc=async e=>await r.A.get((0,Qe.fk)(e),{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}}),rc=async(e,i)=>{let{message:a}=i;return await r.A.post((0,Qe.w5)(e),{message:a},{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})},oc=async(e,i)=>{let{status:a}=i;return await r.A.patch((0,Qe.e3)(e),{status:a},{headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}})},tc=[{value:"",labelKey:"allStatuses"},{value:"new",labelKey:"statusNew"},{value:"in_progress",labelKey:"statusInProgress"},{value:"resolved",labelKey:"statusResolved"},{value:"closed",labelKey:"statusClosed"}],dc=[{value:"",labelKey:"allTypes"},{value:"question",labelKey:"typeQuestion"},{value:"suggestion",labelKey:"typeSuggestion"}],sc=["Thank you for your suggestion, we will review it carefully.","Thank you for contacting us, we will get back to you shortly.","This item is currently unavailable, but we are working on updating the menu.","Please contact us on WhatsApp for more details."],lc=["\u0634\u0643\u0631\u0627\u064b \u0639\u0644\u0649 \u0627\u0642\u062a\u0631\u0627\u062d\u0643\u060c \u0633\u0646\u0631\u0627\u062c\u0639\u0647 \u0628\u0639\u0646\u0627\u064a\u0629.","\u0634\u0643\u0631\u0627\u064b \u0644\u062a\u0648\u0627\u0635\u0644\u0643 \u0645\u0639\u0646\u0627\u060c \u0633\u0646\u0631\u062f \u0639\u0644\u064a\u0643 \u0641\u064a \u0623\u0642\u0631\u0628 \u0648\u0642\u062a.","\u0647\u0630\u0627 \u0627\u0644\u0635\u0646\u0641 \u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b\u060c \u0648\u0646\u0639\u0645\u0644 \u0639\u0644\u0649 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0642\u0627\u0626\u0645\u0629.","\u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644."],cc=e=>(null===e||void 0===e?void 0:e.message)||(null===e||void 0===e?void 0:e.text)||(null===e||void 0===e?void 0:e.body)||"",gc=e=>(null===e||void 0===e?void 0:e.created_at)||(null===e||void 0===e?void 0:e.createdAt)||(null===e||void 0===e?void 0:e.timestamp),mc=e=>/[\u0600-\u06FF]/.test(e||""),pc=e=>{if(!e)return"";try{const i=Date.now()-new Date(e).getTime(),a=Math.floor(i/6e4);if(a<1)return"just now";if(a<60)return`${a}m`;const n=Math.floor(a/60);if(n<24)return`${n}h`;const r=Math.floor(n/24);return r<30?`${r}d`:new Date(e).toLocaleDateString(void 0,{month:"short",day:"numeric"})}catch{return""}},hc=e=>{if(!e)return"";try{return new Date(e).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return""}},uc=e=>{const i=(null===e||void 0===e?void 0:e.customer_name)||(null===e||void 0===e?void 0:e.subject)||"?";return String(i).trim().charAt(0).toUpperCase()||"?"},xc=e=>{let{thread:i,replyMessage:a,customerMessage:n,restaurantName:r,language:o}=e;const t=(null===i||void 0===i?void 0:i.customer_name)||"N/A",d=r||"MENUGIC",s=(null===a||void 0===a?void 0:a.trim())||"-",l=(null===n||void 0===n?void 0:n.trim())||"N/A",c="suggestion"===(null===i||void 0===i?void 0:i.type)?"ar"===o?"\u0627\u0642\u062a\u0631\u0627\u062d\u0643":"Your suggestion":"ar"===o?"\u0633\u0624\u0627\u0644\u0643":"Your question";return"ar"===o?`\u0623\u0647\u0644\u0627\u064b ${t} \ud83d\udc4b\n\n\u0634\u0643\u0631\u0627\u064b \u0643\u062a\u064a\u0631 \u0644\u062a\u0648\u0627\u0635\u0644\u0643 \u0645\u0639\u0646\u0627 \u0648\u0644\u0645\u0634\u0627\u0631\u0643\u062a\u0646\u0627 ${"suggestion"===(null===i||void 0===i?void 0:i.type)?"\u0627\u0642\u062a\u0631\u0627\u062d\u0643":"\u0633\u0624\u0627\u0644\u0643"}.\n\n\ud83d\udccc ${c}:\n${l}\n\n\u2705 \u0631\u062f\u0651\u0646\u0627:\n${s}\n\n\u0631\u0623\u064a\u0643 \u0628\u064a\u0641\u0631\u0642 \u0645\u0639\u0646\u0627 \u0648\u0628\u064a\u0633\u0627\u0639\u062f\u0646\u0627 \u0646\u062a\u062d\u0633\u0651\u0646 \u062f\u0627\u064a\u0645\u0627\u064b. \u0648\u0625\u0630\u0627 \u0639\u0646\u062f\u0643 \u0623\u064a \u0623\u0641\u0643\u0627\u0631 \u0623\u0648 \u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629\u060c \u064a\u0633\u0639\u062f\u0646\u0627 \u0646\u0633\u0645\u0639\u0647\u0627 \u0628\u0623\u064a \u0648\u0642\u062a.\n\n\u0645\u0639 \u062a\u062d\u064a\u0627\u062a\u0646\u0627\u060c\n\u0641\u0631\u064a\u0642 ${d}`:`Hello ${t} \ud83d\udc4b\n\nThank you for your message and for taking the time to share your ${"suggestion"===(null===i||void 0===i?void 0:i.type)?"suggestion":"question"} with us.\n\n\ud83d\udccc ${c}:\n${l}\n\n\u2705 Our response:\n${s}\n\nYour feedback helps us grow and serve you better. If you have any other ideas or requests, feel free to share them with us anytime.\n\nBest regards,\n${d} Team`},bc=(e,i)=>{if(!e)return null;const a=String(e).replace(/[^\d]/g,"");if(!a)return null;if(i){return`https://wa.me/${a}?text=${encodeURIComponent(i)}`}return`https://wa.me/${a}`},fc=e=>{if(null!==e&&void 0!==e&&e.is_owner||null!==e&&void 0!==e&&e.isOwner)return!0;const i=(null===e||void 0===e?void 0:e.sender_type)||(null===e||void 0===e?void 0:e.senderType)||(null===e||void 0===e?void 0:e.sender)||(null===e||void 0===e?void 0:e.from)||"",a=String(i).toLowerCase();return["owner","restaurant","admin"].includes(a)},_c=[{icon:(0,ue.jsx)(G.Ojy,{size:18}),bg:"rgba(94,171,177,0.12)",color:"#5eabb1",accent:"#5eabb1"},{icon:(0,ue.jsx)(G.cAP,{size:18}),bg:"rgba(16,185,129,0.12)",color:"#10b981",accent:"#10b981"},{icon:(0,ue.jsx)(G.WCq,{size:18}),bg:"rgba(245,158,11,0.12)",color:"#f59e0b",accent:"#f59e0b"},{icon:(0,ue.jsx)(G._gS,{size:18}),bg:"rgba(99,102,241,0.12)",color:"#6366f1",accent:"#6366f1"}];function yc(){const[e,i]=(0,n.useState)({openThreads:null,resolvedThisMonth:null,avgReplyTimeHours:null,topTopic:null}),[a,r]=(0,n.useState)({q:"",status:"",type:""}),[o,t]=(0,n.useState)(""),[d,s]=(0,n.useState)({page:1,pageSize:10,total:null,hasMore:!0}),[l,c]=(0,n.useState)([]),[g,m]=(0,n.useState)(null),[p,h]=(0,n.useState)(null),[u,x]=(0,n.useState)(""),[b,f]=(0,n.useState)(!1),[_,y]=(0,n.useState)(!1),[v,j]=(0,n.useState)(!1),[A,w]=(0,n.useState)(!1),[k,$]=(0,n.useState)(""),[S,z]=(0,n.useState)(""),[C,M]=(0,n.useState)(!1),[E,D]=(0,n.useState)(""),[B,T]=(0,n.useState)(!1),R=(()=>{const e=(0,he.getCookie)("userInfo")||"{}";try{return JSON.parse(e)}catch{return{}}})(),L=(null===R||void 0===R?void 0:R.restaurant_name)||(null===R||void 0===R?void 0:R.restaurantName)||(null===R||void 0===R?void 0:R.name)||"default",H=(0,cs.d4)((e=>{var i,a;return null===(i=e.restaurant)||void 0===i||null===(a=i[L])||void 0===a?void 0:a.activeLanguage}))||localStorage.getItem("activeLanguage")||"en",q=(0,n.useMemo)((()=>"ar"===H?{title:"\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0648\u0627\u0644\u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a",subtitle:"\u062a\u0627\u0628\u0639 \u0627\u0633\u062a\u0641\u0633\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0637\u0648\u0651\u0631 \u0627\u0644\u0623\u0641\u0643\u0627\u0631.",openThreads:"\u0627\u0644\u0645\u062d\u0627\u062f\u062b\u0627\u062a \u0627\u0644\u0645\u0641\u062a\u0648\u062d\u0629",resolved:"\u0627\u0644\u0645\u063a\u0644\u0642\u0629 \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",avgReply:"\u0645\u062a\u0648\u0633\u0637 \u0648\u0642\u062a \u0627\u0644\u0631\u062f",topTopic:"\u0623\u0643\u062b\u0631 \u0645\u0648\u0636\u0648\u0639 \u0634\u0627\u0626\u0639",statsMetaOpen:"\u0628\u062d\u0627\u062c\u0629 \u0644\u0644\u0631\u062f",statsMetaResolved:"\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",statsMetaReply:"\u0622\u062e\u0631 7 \u0623\u064a\u0627\u0645",statsMetaTopic:"\u0627\u0644\u0623\u0643\u062b\u0631 \u0633\u0624\u0627\u0644\u0627\u064b",filterSearch:"\u0627\u0628\u062d\u062b \u0639\u0646 \u0645\u062d\u0627\u062f\u062b\u0629",allStatuses:"\u0643\u0644 \u0627\u0644\u062d\u0627\u0644\u0627\u062a",statusNew:"\u062c\u062f\u064a\u062f",statusInProgress:"\u0642\u064a\u062f \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629",statusResolved:"\u062a\u0645 \u0627\u0644\u062d\u0644",statusClosed:"\u0645\u063a\u0644\u0642",allTypes:"\u0643\u0644 \u0627\u0644\u0623\u0646\u0648\u0627\u0639",typeQuestion:"\u0633\u0624\u0627\u0644",typeSuggestion:"\u0627\u0642\u062a\u0631\u0627\u062d",threadListTitle:"\u0627\u0644\u0645\u062d\u0627\u062f\u062b\u0627\u062a",detailsTitle:"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u062d\u0627\u062f\u062b\u0629",noSubject:"\u0628\u062f\u0648\u0646 \u0639\u0646\u0648\u0627\u0646",noThreads:"\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0633\u0626\u0644\u0629 \u0628\u0639\u062f",selectThread:"\u0627\u062e\u062a\u0631 \u0645\u062d\u0627\u062f\u062b\u0629 \u0644\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644",selectThreadDesc:"\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0623\u064a \u0645\u062d\u0627\u062f\u062b\u0629 \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0644\u0639\u0631\u0636 \u062a\u0641\u0627\u0635\u064a\u0644\u0647\u0627 \u0648\u0627\u0644\u0631\u062f \u0639\u0644\u064a\u0647\u0627.",failedToLoad:"\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0645\u064a\u0644",replyPlaceholder:"\u0627\u0643\u062a\u0628 \u0627\u0644\u0631\u062f \u0647\u0646\u0627...",send:"\u0625\u0631\u0633\u0627\u0644",updating:"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",statusLabel:"\u0627\u0644\u062d\u0627\u0644\u0629",loadMore:"\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064a\u062f",customerLabel:"\u0627\u0644\u0639\u0645\u064a\u0644",channelLabel:"\u0627\u0644\u0642\u0646\u0627\u0629",typeLabel:"\u0627\u0644\u0646\u0648\u0639",messagesLabel:"\u0631\u0633\u0627\u0626\u0644",noMessages:"\u0644\u0627 \u062a\u0648\u062c\u062f \u0631\u0633\u0627\u0626\u0644 \u0628\u0639\u062f",phoneLabel:"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",whatsappLabel:"\u0648\u0627\u062a\u0633\u0627\u0628",whatsappSend:"\u0625\u0631\u0633\u0627\u0644 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628",whatsappHint:"\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628",previewTitle:"\u0645\u0639\u0627\u064a\u0646\u0629 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0639\u0645\u064a\u0644",previewSubtitle:"\u0633\u064a\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0627\u0644\u064a\u0629 \u0644\u0644\u0639\u0645\u064a\u0644.",previewConfirm:"\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0625\u0631\u0633\u0627\u0644",previewCancel:"\u0625\u0644\u063a\u0627\u0621",sentMessageTitle:"\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629",whatsappPreviewTitle:"\u0645\u0639\u0627\u064a\u0646\u0629 \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062a\u0633\u0627\u0628",whatsappPreviewSubtitle:"\u0633\u064a\u062a\u0645 \u0641\u062a\u062d \u0648\u0627\u062a\u0633\u0627\u0628 \u0648\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0627\u0644\u064a\u0629.",whatsappOpenConfirm:"\u0641\u062a\u062d \u0648\u0627\u062a\u0633\u0627\u0628",whatsappConfirm:"\u0647\u0644 \u062a\u0631\u064a\u062f \u0641\u062a\u062d \u0648\u0627\u062a\u0633\u0627\u0628 \u0644\u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629\u061f",quickReplies:"\u0631\u062f\u0648\u062f \u0633\u0631\u064a\u0639\u0629",youLabel:"\u0623\u0646\u062a",customerMsgLabel:"\u0627\u0644\u0639\u0645\u064a\u0644"}:{title:"Questions & Suggestions",subtitle:"Manage customer conversations, answer questions, and track improvement ideas.",openThreads:"Open Threads",resolved:"Resolved",avgReply:"Avg. Reply Time",topTopic:"Top Topic",statsMetaOpen:"Need reply",statsMetaResolved:"This month",statsMetaReply:"Last 7 days",statsMetaTopic:"Most asked",filterSearch:"Search threads",allStatuses:"All statuses",statusNew:"New",statusInProgress:"In Progress",statusResolved:"Resolved",statusClosed:"Closed",allTypes:"All types",typeQuestion:"Question",typeSuggestion:"Suggestion",threadListTitle:"Conversations",detailsTitle:"Thread Details",noSubject:"No subject",noThreads:"No conversations yet",selectThread:"Select a conversation",selectThreadDesc:"Click any thread to view the full conversation and reply.",failedToLoad:"Failed to load",replyPlaceholder:"Write your reply here...",send:"Send",updating:"Sending...",statusLabel:"Status",loadMore:"Load more",customerLabel:"Customer",channelLabel:"Channel",typeLabel:"Type",messagesLabel:"messages",noMessages:"No messages yet",phoneLabel:"Phone",whatsappLabel:"WhatsApp",whatsappSend:"Send via WhatsApp",whatsappHint:"Send message via WhatsApp",previewTitle:"Message preview",previewSubtitle:"This message will be sent to the customer.",previewConfirm:"Confirm & Send",previewCancel:"Cancel",sentMessageTitle:"Message sent",whatsappPreviewTitle:"WhatsApp preview",whatsappPreviewSubtitle:"WhatsApp will open with this message pre-filled.",whatsappOpenConfirm:"Open WhatsApp",whatsappConfirm:"Open WhatsApp to send this message?",quickReplies:"Quick replies",youLabel:"You",customerMsgLabel:"Customer"}),[H]),F="ar"===H?lc:sc,K=(0,n.useMemo)((()=>({new:q.statusNew,in_progress:q.statusInProgress,resolved:q.statusResolved,closed:q.statusClosed})),[q]),N=(0,n.useMemo)((()=>({question:q.typeQuestion,suggestion:q.typeSuggestion})),[q]),P=(0,n.useMemo)((()=>{var i,a;return[{label:q.openThreads,value:null!==(i=e.openThreads)&&void 0!==i?i:"--",meta:q.statsMetaOpen},{label:q.resolved,value:null!==(a=e.resolvedThisMonth)&&void 0!==a?a:"--",meta:q.statsMetaResolved},{label:q.avgReply,value:null!==e.avgReplyTimeHours&&void 0!==e.avgReplyTimeHours?`${e.avgReplyTimeHours}h`:"--",meta:q.statsMetaReply},{label:q.topTopic,value:e.topTopic||"--",meta:q.statsMetaTopic}]}),[q,e]);(0,n.useEffect)((()=>{f(!0),ic().then((e=>{var a,n,r,o,t,d,s,l,c,g,m,p;const h=(null===e||void 0===e?void 0:e.data)||e;i({openThreads:null!==(a=null!==(n=null===h||void 0===h?void 0:h.openThreads)&&void 0!==n?n:null===h||void 0===h||null===(r=h.stats)||void 0===r?void 0:r.openThreads)&&void 0!==a?a:null,resolvedThisMonth:null!==(o=null!==(t=null===h||void 0===h?void 0:h.resolvedThisMonth)&&void 0!==t?t:null===h||void 0===h||null===(d=h.stats)||void 0===d?void 0:d.resolvedThisMonth)&&void 0!==o?o:null,avgReplyTimeHours:null!==(s=null!==(l=null===h||void 0===h?void 0:h.avgReplyTimeHours)&&void 0!==l?l:null===h||void 0===h||null===(c=h.stats)||void 0===c?void 0:c.avgReplyTimeHours)&&void 0!==s?s:null,topTopic:null!==(g=null!==(m=null===h||void 0===h?void 0:h.topTopic)&&void 0!==m?m:null===h||void 0===h||null===(p=h.stats)||void 0===p?void 0:p.topTopic)&&void 0!==g?g:null})})).catch((()=>{i({openThreads:null,resolvedThisMonth:null,avgReplyTimeHours:null,topTopic:null})})).finally((()=>f(!1)))}),[]),(0,n.useEffect)((()=>{const e=setTimeout((()=>{r((e=>({...e,q:o.trim()})))}),300);return()=>clearTimeout(e)}),[o]);const O=async function(){let{page:e=1,append:i=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y(!0),$("");try{var n;const o=await ac({status:a.status,type:a.type,q:a.q,page:e,pageSize:d.pageSize}),t=(null===o||void 0===o?void 0:o.data)||o,l=(null===t||void 0===t?void 0:t.threads)||(null===t||void 0===t?void 0:t.data)||t||[],p=null!==(n=null===t||void 0===t?void 0:t.total)&&void 0!==n?n:null,u=null!==p?e*d.pageSize<p:l.length>0;if(c((e=>i?[...e,...l]:l)),s((i=>({...i,page:e,total:p,hasMore:u}))),!i)if(0===l.length)m(null),h(null);else if(!l.find((e=>e.id===g))){var r;m((null===(r=l[0])||void 0===r?void 0:r.id)||null)}}catch{$(q.failedToLoad),i||(c([]),m(null),h(null))}finally{y(!1)}};(0,n.useEffect)((()=>{s((e=>({...e,page:1,total:null}))),O({page:1,append:!1})}),[a.status,a.type,a.q]),(0,n.useEffect)((()=>{g&&(j(!0),z(""),nc(g).then((e=>{var i,a;const n=(null===e||void 0===e?void 0:e.data)||e,r=(null===n||void 0===n?void 0:n.thread)||(null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.thread)||null,o=(null===n||void 0===n?void 0:n.messages)||(null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.messages)||[];h({thread:r,messages:o})})).catch((()=>{z(q.failedToLoad),h(null)})).finally((()=>j(!1))))}),[q.failedToLoad,g]);const I=async()=>{if(g&&u.trim()){w(!0);try{await rc(g,{message:u.trim()}),J&&D(V),x(""),await O({page:1,append:!1}),await nc(g).then((e=>{var i,a;const n=(null===e||void 0===e?void 0:e.data)||e,r=(null===n||void 0===n?void 0:n.thread)||(null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.thread)||null,o=(null===n||void 0===n?void 0:n.messages)||(null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.messages)||[];h({thread:r,messages:o})}))}catch{z(q.failedToLoad)}finally{w(!1)}}},J=null===p||void 0===p?void 0:p.thread,Q=(null===p||void 0===p?void 0:p.messages)||[],W=Q.find((e=>!fc(e))),Y=cc(W),Z=Y?mc(Y)?"ar":"en":H,V=J?xc({thread:J,replyMessage:u,customerMessage:Y,restaurantName:null===R||void 0===R?void 0:R.restaurant_name,language:Z}):"",U=l.filter((e=>"question"===e.type)).length,X=l.filter((e=>"suggestion"===e.type)).length,ee=l.filter((e=>"new"===e.status)).length;return(0,ue.jsxs)(Es,{dir:"ar"===H?"rtl":"ltr",$activeLanguage:H,children:[(0,ue.jsx)(Ds,{children:(0,ue.jsx)(Bs,{children:(0,ue.jsxs)(Ts,{children:[(0,ue.jsx)(Rs,{children:q.title}),(0,ue.jsx)(Ls,{children:q.subtitle}),(0,ue.jsxs)(Hs,{children:[!b&&null!==e.openThreads&&(0,ue.jsxs)(qs,{children:[(0,ue.jsx)(G.Ojy,{size:12}),e.openThreads," open"]}),!b&&ee>0&&(0,ue.jsxs)(qs,{children:[(0,ue.jsx)(G.aIL,{size:12}),ee," new"]}),U>0&&(0,ue.jsxs)(qs,{children:[(0,ue.jsx)(G.cJV,{size:12}),U," ",q.typeQuestion.toLowerCase()]}),X>0&&(0,ue.jsxs)(qs,{children:[(0,ue.jsx)(G.Lh5,{size:12}),X," ",q.typeSuggestion.toLowerCase()]})]})]})})}),(0,ue.jsx)(Fs,{children:P.map(((e,i)=>{var a,n,r,o;return(0,ue.jsxs)(Ks,{$accent:null===(a=_c[i])||void 0===a?void 0:a.accent,children:[(0,ue.jsx)(Ns,{$bg:null===(n=_c[i])||void 0===n?void 0:n.bg,$color:null===(r=_c[i])||void 0===r?void 0:r.color,children:null===(o=_c[i])||void 0===o?void 0:o.icon}),(0,ue.jsx)(Ps,{children:b?"--":e.value}),(0,ue.jsx)(Os,{children:e.label}),(0,ue.jsx)(Is,{children:e.meta})]},e.label)}))}),(0,ue.jsxs)(Js,{children:[(0,ue.jsxs)(Ws,{children:[(0,ue.jsxs)(Ys,{children:[(0,ue.jsx)(Zs,{children:q.threadListTitle}),l.length>0&&(0,ue.jsx)(Gs,{children:l.length})]}),(0,ue.jsxs)(Vs,{children:[(0,ue.jsxs)("div",{style:{position:"relative",flex:1,minWidth:140,display:"flex",alignItems:"center"},children:[(0,ue.jsx)(G.gZ7,{size:15,style:{position:"absolute",left:9,color:"#94a3b8",pointerEvents:"none"}}),(0,ue.jsx)(Us,{type:"text",value:o,onChange:e=>t(e.target.value),placeholder:q.filterSearch})]}),(0,ue.jsx)(Xs,{value:a.status,onChange:e=>r((i=>({...i,status:e.target.value}))),children:tc.map((e=>(0,ue.jsx)("option",{value:e.value,children:q[e.labelKey]},e.value)))}),(0,ue.jsx)(Xs,{value:a.type,onChange:e=>r((i=>({...i,type:e.target.value}))),children:dc.map((e=>(0,ue.jsx)("option",{value:e.value,children:q[e.labelKey]},e.value)))})]}),k&&(0,ue.jsx)(Ul,{style:{margin:"8px 14px"},children:k}),_&&(0,ue.jsxs)("div",{style:{padding:"12px 14px"},children:[(0,ue.jsx)(ec,{$h:"62px"}),(0,ue.jsx)(ec,{$h:"62px"}),(0,ue.jsx)(ec,{$h:"62px"})]}),!_&&0===l.length&&!k&&(0,ue.jsxs)(Hl,{children:[(0,ue.jsx)(ql,{children:(0,ue.jsx)(G.IJD,{size:36})}),(0,ue.jsx)(Fl,{children:q.noThreads}),(0,ue.jsx)(Kl,{children:"ar"===H?"\u0639\u0646\u062f\u0645\u0627 \u064a\u0631\u0633\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0623\u0633\u0626\u0644\u0629 \u0623\u0648 \u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a\u060c \u0633\u062a\u0638\u0647\u0631 \u0647\u0646\u0627.":"When customers send questions or suggestions, they will appear here."})]}),(0,ue.jsx)(el,{children:l.map((e=>(0,ue.jsxs)(il,{selected:e.id===g,onClick:()=>m(e.id),children:[(0,ue.jsx)(al,{$type:e.type,children:uc(e)}),(0,ue.jsxs)(nl,{children:[(0,ue.jsxs)(rl,{children:[(0,ue.jsx)(ol,{children:e.subject||q.noSubject}),(0,ue.jsx)(tl,{children:pc(e.last_message_at||e.lastMessageAt||e.updated_at||e.updatedAt||e.created_at||e.createdAt)})]}),(0,ue.jsx)(dl,{children:e.lastMessageSnippet||e.preview||""}),(0,ue.jsxs)(sl,{children:[e.customer_name&&(0,ue.jsx)(ll,{children:e.customer_name}),e.customer_phone&&(0,ue.jsx)(ll,{style:{color:"#94a3b8"},children:"\xb7"}),e.customer_phone&&(0,ue.jsx)(ll,{children:e.customer_phone}),(e.messageCount||0)>0&&(0,ue.jsxs)(ll,{style:{color:"#94a3b8"},children:["\xb7 ",e.messageCount," ",q.messagesLabel]}),(0,ue.jsx)(gl,{variant:`type-${e.type}`,children:N[e.type]||e.type||"\u2014"}),(0,ue.jsx)(gl,{variant:`status-${e.status}`,children:K[e.status]||e.status||"\u2014"})]})]})]},e.id)))}),d.hasMore&&l.length>0&&(0,ue.jsx)(ml,{onClick:()=>{!_&&d.hasMore&&O({page:d.page+1,append:!0})},disabled:_,children:q.loadMore})]}),(0,ue.jsxs)(pl,{children:[S&&(0,ue.jsx)(Ul,{style:{margin:"16px"},children:S}),v&&(0,ue.jsxs)("div",{style:{padding:"16px"},children:[(0,ue.jsx)(Xl,{}),(0,ue.jsx)(Xl,{style:{width:"70%"}}),(0,ue.jsx)(ec,{$h:"80px"}),(0,ue.jsx)(ec,{$h:"200px"})]}),!v&&!J&&!S&&(0,ue.jsxs)(Hl,{children:[(0,ue.jsx)(ql,{children:(0,ue.jsx)(G.cJV,{size:40})}),(0,ue.jsx)(Fl,{children:q.selectThread}),(0,ue.jsx)(Kl,{children:q.selectThreadDesc})]}),J&&!v&&(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsxs)(hl,{children:[(0,ue.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,ue.jsx)(ul,{children:J.subject||q.noSubject}),(0,ue.jsxs)(xl,{children:[q.customerLabel,": ",J.customer_name||"\u2014"]}),J.customer_phone&&(0,ue.jsxs)(bl,{children:[(0,ue.jsxs)("span",{children:[q.phoneLabel,":"]}),(0,ue.jsx)(fl,{children:J.customer_phone}),bc(J.customer_phone)&&(0,ue.jsxs)(_l,{href:bc(J.customer_phone),target:"_blank",rel:"noopener noreferrer",children:[(0,ue.jsx)(G.imD,{size:13}),q.whatsappLabel]})]})]}),(0,ue.jsxs)(yl,{children:[(0,ue.jsx)(gl,{variant:`type-${J.type}`,children:N[J.type]||J.type||q.typeLabel}),(0,ue.jsx)(gl,{variant:`status-${J.status}`,children:K[J.status]||J.status||q.statusLabel}),J.channel&&(0,ue.jsx)(gl,{variant:`channel-${J.channel}`,children:J.channel})]})]}),(0,ue.jsxs)(vl,{children:[(0,ue.jsxs)(jl,{children:[q.statusLabel,":"]}),(0,ue.jsx)(Xs,{value:J.status||"",onChange:async e=>{const i=e.target.value;if(g)try{await oc(g,{status:i}),await O({page:1,append:!1}),await nc(g).then((e=>{var i,a;const n=(null===e||void 0===e?void 0:e.data)||e,r=(null===n||void 0===n?void 0:n.thread)||(null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.thread)||null,o=(null===n||void 0===n?void 0:n.messages)||(null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.messages)||[];h({thread:r,messages:o})}))}catch{z(q.failedToLoad)}},style:{minWidth:130},children:tc.filter((e=>e.value)).map((e=>(0,ue.jsx)("option",{value:e.value,children:q[e.labelKey]},e.value)))})]}),(0,ue.jsxs)(Al,{children:[0===Q.length&&(0,ue.jsxs)(Hl,{style:{padding:"24px 16px"},children:[(0,ue.jsx)(ql,{children:(0,ue.jsx)(G.IJD,{size:28})}),(0,ue.jsx)(Fl,{style:{fontSize:"0.875rem"},children:q.noMessages})]}),Q.map(((e,i)=>{const a=fc(e),n=gc(e);return(0,ue.jsxs)(wl,{isOwner:a,$activeLanguage:H,children:[(0,ue.jsx)(kl,{children:a?q.youLabel:q.customerMsgLabel}),(0,ue.jsxs)($l,{isOwner:a,children:[cc(e),n&&(0,ue.jsx)(Sl,{isOwner:a,children:hc(n)})]})]},`${e.id||i}`)}))]}),E&&(0,ue.jsx)("div",{style:{padding:"0 16px"},children:(0,ue.jsxs)(Zl,{children:[(0,ue.jsxs)(Gl,{children:[(0,ue.jsx)(G.cAP,{size:13}),q.sentMessageTitle]}),(0,ue.jsx)(Vl,{children:E})]})}),(0,ue.jsxs)(zl,{children:[(0,ue.jsxs)("div",{children:[(0,ue.jsxs)(El,{style:{marginBottom:7},children:[(0,ue.jsx)(G.aIL,{size:13}),q.quickReplies]}),(0,ue.jsx)(Cl,{children:F.map((e=>(0,ue.jsx)(Ml,{type:"button",onClick:()=>x(e),title:e,children:e},e)))})]}),(0,ue.jsxs)("div",{children:[(0,ue.jsx)(Dl,{rows:3,value:u,onChange:e=>x(e.target.value),placeholder:q.replyPlaceholder}),(0,ue.jsxs)(Bl,{children:[u.length," chars"]})]}),(0,ue.jsxs)(Tl,{children:[J.customer_phone&&(0,ue.jsxs)(Ll,{href:bc(J.customer_phone,V),target:"_blank",rel:"noopener noreferrer",title:q.whatsappHint,onClick:e=>{e.preventDefault(),u.trim()&&V&&T(!0)},$disabled:!u.trim(),children:[(0,ue.jsx)(G.imD,{size:16}),q.whatsappSend]}),(0,ue.jsxs)(Rl,{type:"button",onClick:()=>{u.trim()&&M(!0)},disabled:A||!u.trim(),children:[(0,ue.jsx)(G.EJd,{size:15}),A?q.updating:q.send]})]})]})]})]})]}),C&&J&&(0,ue.jsx)(Nl,{onClick:()=>M(!1),children:(0,ue.jsxs)(Pl,{onClick:e=>e.stopPropagation(),children:[(0,ue.jsx)(Ol,{children:q.previewTitle}),(0,ue.jsx)(Il,{children:q.previewSubtitle}),(0,ue.jsx)(Jl,{children:V}),(0,ue.jsxs)(Ql,{children:[(0,ue.jsx)(Wl,{type:"button",onClick:()=>M(!1),children:q.previewCancel}),(0,ue.jsx)(Yl,{type:"button",onClick:async()=>{M(!1),await I()},children:q.previewConfirm})]})]})}),B&&J&&(0,ue.jsx)(Nl,{onClick:()=>T(!1),children:(0,ue.jsxs)(Pl,{onClick:e=>e.stopPropagation(),children:[(0,ue.jsx)(Ol,{children:(0,ue.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[(0,ue.jsx)(G.imD,{size:18,style:{color:"#22c55e"}}),q.whatsappPreviewTitle]})}),(0,ue.jsx)(Il,{children:q.whatsappPreviewSubtitle}),(0,ue.jsx)(Jl,{children:V}),(0,ue.jsxs)(Ql,{children:[(0,ue.jsx)(Wl,{type:"button",onClick:()=>T(!1),children:q.previewCancel}),(0,ue.jsxs)(Yl,{type:"button",onClick:async()=>{T(!1);if(!window.confirm(q.whatsappConfirm))return;const e=V;await I();const i=bc(null===J||void 0===J?void 0:J.customer_phone,e);i&&window.open(i,"_blank","noopener,noreferrer")},style:{background:"linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",boxShadow:"0 4px 14px rgba(34,197,94,0.35)"},children:[(0,ue.jsx)(G.imD,{size:15}),q.whatsappOpenConfirm]})]})]})})]})}const vc=o.i7`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,jc="#ffffff",Ac="rgba(148,163,184,0.18)",wc="#0f172a",kc="#64748b",$c="#94a3b8",Sc="#5eabb1",zc="0 4px 20px rgba(15,23,42,0.07)",Cc="0 12px 32px rgba(15,23,42,0.13)",Mc=o.Ay.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  padding-bottom: 40px;
  animation: ${vc} 0.35s ease both;

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    max-width: 100%;
    gap: 12px;
    margin-top: 14px;
  }
`,Ec=o.Ay.div`
  border-radius: 20px;
  padding: 28px 28px 24px;
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  color: #f8fafc;
  box-shadow: 0 16px 40px rgba(10, 15, 40, 0.28);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  @media (max-width: ${t.L8.sm}px) {
    padding: 20px 16px 18px;
    border-radius: 14px;
  }
`,Dc=o.Ay.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(120deg, #ffffff, ${Sc});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`,Bc=o.Ay.p`
  margin: 6px 0 0;
  font-size: 13px;
  opacity: 0.55;
  position: relative;
`,Tc=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: ${t.L8.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${t.L8.sm}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`,Rc=o.Ay.div`
  background: ${jc};
  border: 1px solid ${Ac};
  border-radius: 14px;
  padding: 18px 16px;
  box-shadow: ${zc};
  position: relative;
  overflow: hidden;
  animation: ${vc} 0.4s ease both;
  animation-delay: ${e=>e.$delay||"0s"};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${e=>e.$accent||Sc};
    border-radius: 14px 14px 0 0;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${Cc};
  }
`,Lc=o.Ay.div`
  font-size: 10px;
  font-weight: 700;
  color: ${$c};
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,Hc=o.Ay.div`
  font-size: 26px;
  font-weight: 800;
  color: ${wc};
  margin: 4px 0 2px;
  letter-spacing: -0.5px;
`,qc=o.Ay.div`
  font-size: 10px;
  color: ${$c};
`,Fc=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Kc=o.Ay.button`
  padding: 7px 16px;
  border-radius: 999px;
  border: 1.5px solid ${e=>e.$active?e.$color||Sc:"#e2e8f0"};
  background: ${e=>e.$active?`${e.$color||Sc}15`:"transparent"};
  color: ${e=>e.$active?e.$color||Sc:kc};
  font-size: 12px;
  font-weight: ${e=>e.$active?"700":"500"};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover { border-color: ${e=>e.$color||Sc}; color: ${e=>e.$color||Sc}; }
`,Nc=o.Ay.span`
  font-size: 10px;
  font-weight: 700;
  background: ${e=>e.$color||Sc}20;
  color: ${e=>e.$color||Sc};
  padding: 1px 6px;
  border-radius: 999px;
`,Pc=o.Ay.div`
  background: ${jc};
  border: 1px solid ${Ac};
  border-radius: 16px;
  padding: 20px 22px;
  box-shadow: ${zc};
  animation: ${vc} 0.4s ease both;
  animation-delay: 0.1s;
`,Oc=o.Ay.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: ${t.L8.md}px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Ic=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 140px;
  flex: 1;

  @media (max-width: ${t.L8.md}px) { min-width: 0; width: 100%; }
`,Jc=o.Ay.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: ${$c};
`,Qc=o.Ay.select`
  height: 38px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid ${Ac};
  background: #f8fafc;
  color: ${wc};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:focus { border-color: ${Sc}; box-shadow: 0 0 0 3px rgba(94,171,177,0.15); }
`,Wc=o.Ay.input`
  height: 38px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid ${Ac};
  background: #f8fafc;
  color: ${wc};
  font-size: 13px;
  outline: none;
  min-width: 130px;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:focus { border-color: ${Sc}; box-shadow: 0 0 0 3px rgba(94,171,177,0.15); }
`,Yc=o.Ay.div`
  background: ${jc};
  border: 1px solid ${Ac};
  border-radius: 16px;
  box-shadow: ${zc};
  overflow: hidden;
  animation: ${vc} 0.4s ease both;
  animation-delay: 0.15s;
`,Zc=o.Ay.div`
  padding: 14px 20px;
  font-size: 12px;
  color: ${kc};
  border-bottom: 1px solid #f1f5f9;
  font-weight: 500;

  strong { color: ${wc}; }
`,Gc=o.Ay.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`,Vc=o.Ay.div`
  display: grid;
  grid-template-columns: 60px 1fr 1fr 100px 90px 70px 90px 90px 80px;
  gap: 8px;
  padding: 12px 20px;
  background: ${wc};
  min-width: 800px;

  @media (max-width: ${t.L8.md}px) { display: none; }
`,Uc=o.Ay.div`
  font-size: 10px;
  font-weight: 700;
  color: rgba(255,255,255,0.7);
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,Xc=o.Ay.div`
  display: grid;
  grid-template-columns: 60px 1fr 1fr 100px 90px 70px 90px 90px 80px;
  gap: 8px;
  padding: 14px 20px;
  border-bottom: 1px solid #f1f5f9;
  align-items: center;
  transition: background-color 0.15s;
  cursor: pointer;
  min-width: 800px;

  &:hover { background-color: #f8fafc; }
  &:last-child { border-bottom: none; }

  @media (max-width: ${t.L8.md}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 16px;
    min-width: 0;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    margin: 8px 12px;
  }
`,eg=o.Ay.div`
  font-size: 13px;
  color: ${wc};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ig=o.Ay.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;
  background: ${e=>e.$color}15;
  color: ${e=>e.$color};
  border: 1px solid ${e=>e.$color}30;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${e=>e.$color};
  }
`,ag=o.Ay.button`
  padding: 6px 14px;
  background: transparent;
  color: ${Sc};
  border: 1.5px solid ${Sc};
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover { background: ${Sc}; color: #fff; }
`,ng=o.Ay.div`
  text-align: center;
  padding: 60px 20px;
  color: ${kc};
  font-size: 15px;
  background: ${jc};
  border-radius: 16px;
  box-shadow: ${zc};
  border: 1px solid ${Ac};
`,rg=o.Ay.div`
  text-align: center;
  padding: 60px 20px;
  color: ${kc};
  font-size: 15px;
`,og=o.Ay.div`
  padding: 14px 18px;
  background: #fef2f2;
  color: #dc2626;
  border-radius: 10px;
  font-size: 13px;
  border: 1px solid #fecaca;
`,tg=o.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,dg=o.Ay.div`
  position: absolute;
  inset: 0;
  background: rgba(15,23,42,0.5);
  backdrop-filter: blur(6px);
`,sg=o.Ay.div`
  position: relative;
  background: #fff;
  border-radius: 20px;
  max-width: 720px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 64px rgba(0,0,0,0.2);
  z-index: 1001;
  animation: ${vc} 0.25s ease both;
`,lg=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: linear-gradient(135deg, #0c0f1d, #1a2238);
  border-radius: 20px 20px 0 0;
  color: #f8fafc;
`,cg=o.Ay.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
`,gg=o.Ay.button`
  background: rgba(255,255,255,0.1);
  border: none;
  color: #f8fafc;
  font-size: 18px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover { background: rgba(255,255,255,0.2); }
`,mg=o.Ay.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 0;
`,pg=o.Ay.div`
  padding: 16px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child { border-bottom: none; }
`,hg=o.Ay.div`
  font-size: 11px;
  font-weight: 700;
  color: ${$c};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
`,ug=o.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: ${t.L8.sm}px) {
    grid-template-columns: 1fr;
  }
`,xg=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,bg=o.Ay.div`
  font-size: 11px;
  font-weight: 600;
  color: ${$c};
`,fg=o.Ay.div`
  font-size: 14px;
  font-weight: 500;
  color: ${wc};
  word-break: break-word;
`,_g=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,yg=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px solid #f1f5f9;
`,vg=o.Ay.div`
  flex: 1;
  font-weight: 600;
  font-size: 13px;
  color: ${wc};
`,jg=o.Ay.div`
  font-size: 12px;
  color: ${kc};
  min-width: 50px;
  text-align: center;
  background: #e2e8f0;
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 600;
`,Ag=o.Ay.div`
  font-weight: 700;
  font-size: 13px;
  color: ${wc};
  min-width: 80px;
  text-align: right;
`,wg=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  margin-top: 12px;
  background: linear-gradient(135deg, #0c0f1d, #1a2238);
  border-radius: 12px;
  color: #fff;
`,kg=o.Ay.div`
  font-size: 14px;
  font-weight: 600;
  opacity: 0.7;
`,$g=o.Ay.div`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;
`,Sg=o.Ay.select`
  padding: 6px 12px;
  border-radius: 8px;
  border: 1.5px solid #e2e8f0;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  background: #f8fafc;
  transition: border-color 0.2s;

  &:focus { border-color: ${Sc}; }
`,zg="https://77.37.51.25",Cg=[{value:"",label:"All",color:"#64748b"},{value:"pending",label:"Pending",color:"#f59e0b"},{value:"confirmed",label:"Confirmed",color:"#3b82f6"},{value:"preparing",label:"Preparing",color:"#8b5cf6"},{value:"ready",label:"Ready",color:"#10b981"},{value:"completed",label:"Completed",color:"#10b981"},{value:"cancelled",label:"Cancelled",color:"#ef4444"}],Mg=e=>{var i;return(null===(i=Cg.find((i=>i.value===e)))||void 0===i?void 0:i.color)||"#64748b"};function Eg(){const[e,i]=(0,n.useState)([]),[a,o]=(0,n.useState)(!1),[t,d]=(0,n.useState)(""),[s,l]=(0,n.useState)(null),[c,g]=(0,n.useState)(""),[m,p]=(0,n.useState)(""),[h,u]=(0,n.useState)(""),[x,b]=(0,n.useState)(""),[f,_]=(0,n.useState)(""),[y,v]=(0,n.useState)([]),j=(()=>{try{return JSON.parse((0,he.getCookie)("userInfo")||"{}")}catch{return{}}})(),A=null===j||void 0===j?void 0:j.restaurant_id,w=(null===j||void 0===j?void 0:j.branches)||[];(0,n.useEffect)((()=>{A&&(async()=>{try{const e=(0,he.getCookie)("accessToken"),{data:i}=await r.A.get(Qe.BO,{headers:{Authorization:`Bearer ${e}`}});v(i.data||[])}catch{v([])}})()}),[A]),(0,n.useEffect)((()=>{A&&k()}),[A,c,m,h,x,f]);const k=async()=>{o(!0),d("");try{const e=(0,he.getCookie)("accessToken");let a=`${zg}/orders/restaurant/${A}`;const n=new URLSearchParams;c&&n.append("start_date",c),m&&n.append("end_date",m),h&&n.append("status",h),x&&n.append("branch_id",x),f&&n.append("customer_user_id",f),n.toString()&&(a+=`?${n.toString()}`);const{data:o}=await r.A.get(a,{headers:{Authorization:`Bearer ${e}`}});i(o.orders||[])}catch(n){var e,a;d((null===(e=n.response)||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message)||"Failed to fetch orders")}finally{o(!1)}},$=(0,n.useMemo)((()=>{const i=e.length,a=e.reduce(((e,i)=>e+parseFloat(i.total||0)),0);return{total:i,revenue:a,avg:i>0?a/i:0,pending:e.filter((e=>"pending"===e.status)).length,completed:e.filter((e=>"completed"===e.status)).length,cancelled:e.filter((e=>"cancelled"===e.status)).length}}),[e]),S=(0,n.useMemo)((()=>{const i={"":e.length};return Cg.forEach((a=>{a.value&&(i[a.value]=e.filter((e=>e.status===a.value)).length)})),i}),[e]),z=e=>e?new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"",C=(e,i)=>{if(!e)return"0";const a="dollar"===i?"$":"lb"===i?"L.L.":"gram"===i?"g":"kilogram"===i?"kg":"";return`${parseFloat(e).toFixed(2)} ${a}`};return a&&0===e.length?(0,ue.jsx)(Mc,{children:(0,ue.jsx)(rg,{children:"Loading orders..."})}):(0,ue.jsxs)(Mc,{children:[(0,ue.jsxs)(Ec,{children:[(0,ue.jsx)(Dc,{children:"Orders Management"}),(0,ue.jsx)(Bc,{children:"Track, manage, and analyze all customer orders"})]}),(0,ue.jsxs)(Tc,{children:[(0,ue.jsxs)(Rc,{$accent:"#5eabb1",$delay:"0s",children:[(0,ue.jsx)(Lc,{children:"Total Orders"}),(0,ue.jsx)(Hc,{children:$.total}),(0,ue.jsx)(qc,{children:"In selected period"})]}),(0,ue.jsxs)(Rc,{$accent:"#8b5cf6",$delay:"0.05s",children:[(0,ue.jsx)(Lc,{children:"Revenue"}),(0,ue.jsxs)(Hc,{children:["$",$.revenue.toFixed(2)]}),(0,ue.jsx)(qc,{children:"Total earned"})]}),(0,ue.jsxs)(Rc,{$accent:"#f59e0b",$delay:"0.1s",children:[(0,ue.jsx)(Lc,{children:"Avg Order Value"}),(0,ue.jsxs)(Hc,{children:["$",$.avg.toFixed(2)]}),(0,ue.jsx)(qc,{children:"Per order average"})]}),(0,ue.jsxs)(Rc,{$accent:"#ef4444",$delay:"0.15s",children:[(0,ue.jsx)(Lc,{children:"Pending"}),(0,ue.jsx)(Hc,{children:$.pending}),(0,ue.jsx)(qc,{children:"Awaiting action"})]})]}),(0,ue.jsx)(Fc,{children:Cg.map((e=>(0,ue.jsxs)(Kc,{$active:h===e.value,$color:e.color,onClick:()=>u(e.value),children:[e.label,S[e.value]>0&&(0,ue.jsx)(Nc,{$color:e.color,children:S[e.value]})]},e.value)))}),(0,ue.jsx)(Pc,{children:(0,ue.jsxs)(Oc,{children:[(0,ue.jsxs)(Ic,{children:[(0,ue.jsx)(Jc,{children:"From"}),(0,ue.jsx)(Wc,{type:"date",value:c,onChange:e=>g(e.target.value)})]}),(0,ue.jsxs)(Ic,{children:[(0,ue.jsx)(Jc,{children:"To"}),(0,ue.jsx)(Wc,{type:"date",value:m,onChange:e=>p(e.target.value)})]}),w.length>0&&(0,ue.jsxs)(Ic,{children:[(0,ue.jsx)(Jc,{children:"Branch"}),(0,ue.jsxs)(Qc,{value:x,onChange:e=>b(e.target.value),children:[(0,ue.jsx)("option",{value:"",children:"All Branches"}),w.map((e=>(0,ue.jsx)("option",{value:e.id,children:e.en_name||e.ar_name||e.name},e.id)))]})]}),(0,ue.jsxs)(Ic,{children:[(0,ue.jsx)(Jc,{children:"Customer"}),(0,ue.jsxs)(Qc,{value:f,onChange:e=>_(e.target.value),children:[(0,ue.jsx)("option",{value:"",children:"All Customers"}),y.map((e=>(0,ue.jsx)("option",{value:e.id,children:e.full_name||e.email},e.id)))]})]})]})}),t&&(0,ue.jsx)(og,{children:t}),0!==e.length||a?(0,ue.jsxs)(Yc,{children:[(0,ue.jsxs)(Zc,{children:[(0,ue.jsx)("strong",{children:e.length})," order",1!==e.length?"s":""," found"]}),(0,ue.jsxs)(Gc,{children:[(0,ue.jsxs)(Vc,{children:[(0,ue.jsx)(Uc,{children:"ID"}),(0,ue.jsx)(Uc,{children:"Customer"}),(0,ue.jsx)(Uc,{children:"Phone"}),(0,ue.jsx)(Uc,{children:"Date"}),(0,ue.jsx)(Uc,{children:"Type"}),(0,ue.jsx)(Uc,{children:"Items"}),(0,ue.jsx)(Uc,{children:"Total"}),(0,ue.jsx)(Uc,{children:"Status"}),(0,ue.jsx)(Uc,{})]}),e.map((e=>(0,ue.jsxs)(Xc,{onClick:()=>l(e),children:[(0,ue.jsxs)(eg,{style:{fontWeight:700,color:"#5eabb1"},children:["#",e.id]}),(0,ue.jsx)(eg,{style:{fontWeight:600},children:e.customer_name||"N/A"}),(0,ue.jsx)(eg,{style:{fontSize:12,color:"#64748b"},children:e.customer_phone||"\u2014"}),(0,ue.jsx)(eg,{style:{fontSize:12},children:z(e.order_date)}),(0,ue.jsx)(eg,{children:e.delivery_type||"\u2014"}),(0,ue.jsx)(eg,{children:Array.isArray(e.items)?e.items.length:0}),(0,ue.jsx)(eg,{style:{fontWeight:700},children:C(e.total,e.currency)}),(0,ue.jsx)(eg,{children:(0,ue.jsx)(ig,{$color:Mg(e.status),children:e.status})}),(0,ue.jsx)(eg,{children:(0,ue.jsx)(ag,{onClick:i=>{i.stopPropagation(),l(e)},children:"View"})})]},e.id)))]})]}):(0,ue.jsx)(ng,{children:"No orders found for the selected filters"}),s&&(0,ue.jsxs)(tg,{children:[(0,ue.jsx)(dg,{onClick:()=>l(null)}),(0,ue.jsxs)(sg,{children:[(0,ue.jsxs)(lg,{children:[(0,ue.jsxs)(cg,{children:["Order #",s.id]}),(0,ue.jsx)(gg,{onClick:()=>l(null),children:"\u2715"})]}),(0,ue.jsxs)(mg,{children:[(0,ue.jsxs)(pg,{children:[(0,ue.jsx)(hg,{children:"Order Information"}),(0,ue.jsxs)(ug,{children:[(0,ue.jsxs)(xg,{children:[(0,ue.jsx)(bg,{children:"Date"}),(0,ue.jsx)(fg,{children:z(s.order_date)})]}),(0,ue.jsxs)(xg,{children:[(0,ue.jsx)(bg,{children:"Type"}),(0,ue.jsx)(fg,{children:s.delivery_type})]}),(0,ue.jsxs)(xg,{children:[(0,ue.jsx)(bg,{children:"Status"}),(0,ue.jsxs)(fg,{style:{display:"flex",alignItems:"center",gap:10},children:[(0,ue.jsx)(ig,{$color:Mg(s.status),children:s.status}),(0,ue.jsx)(Sg,{value:s.status,onChange:e=>(async(e,i)=>{try{const a=(0,he.getCookie)("accessToken");await r.A.patch(`${zg}/orders/${e}/status`,{status:i},{headers:{Authorization:`Bearer ${a}`}}),k(),(null===s||void 0===s?void 0:s.id)===e&&l({...s,status:i})}catch{alert("Failed to update order status")}})(s.id,e.target.value),children:Cg.filter((e=>e.value)).map((e=>(0,ue.jsx)("option",{value:e.value,children:e.label},e.value)))})]})]}),s.branch&&(0,ue.jsxs)(xg,{children:[(0,ue.jsx)(bg,{children:"Branch"}),(0,ue.jsx)(fg,{children:s.branch.en_name||s.branch.ar_name||s.branch.name})]})]})]}),(0,ue.jsxs)(pg,{children:[(0,ue.jsx)(hg,{children:"Customer Information"}),(0,ue.jsxs)(ug,{children:[(0,ue.jsxs)(xg,{children:[(0,ue.jsx)(bg,{children:"Name"}),(0,ue.jsx)(fg,{children:s.customer_name||"N/A"})]}),(0,ue.jsxs)(xg,{children:[(0,ue.jsx)(bg,{children:"Phone"}),(0,ue.jsx)(fg,{children:s.customer_phone||"N/A"})]}),s.customerUser&&(0,ue.jsxs)(xg,{children:[(0,ue.jsx)(bg,{children:"Account"}),(0,ue.jsx)(fg,{children:s.customerUser.full_name||s.customerUser.email})]}),s.customer_address&&(0,ue.jsxs)(xg,{children:[(0,ue.jsx)(bg,{children:"Address"}),(0,ue.jsx)(fg,{children:s.customer_address})]}),s.table_number&&(0,ue.jsxs)(xg,{children:[(0,ue.jsx)(bg,{children:"Table"}),(0,ue.jsxs)(fg,{children:["#",s.table_number]})]}),s.note&&(0,ue.jsxs)(xg,{children:[(0,ue.jsx)(bg,{children:"Note"}),(0,ue.jsx)(fg,{style:{fontStyle:"italic",color:"#64748b"},children:s.note})]})]})]}),(0,ue.jsxs)(pg,{children:[(0,ue.jsxs)(hg,{children:["Items (",Array.isArray(s.items)?s.items.length:0,")"]}),(0,ue.jsx)(_g,{children:Array.isArray(s.items)&&s.items.map(((e,i)=>(0,ue.jsxs)(yg,{children:[(0,ue.jsx)(vg,{children:e.product_name||`Product #${e.product_id}`}),(0,ue.jsxs)(jg,{children:["x",e.quantity]}),(0,ue.jsx)(Ag,{children:C(e.total_price,s.currency)})]},i)))}),(0,ue.jsxs)(wg,{children:[(0,ue.jsx)(kg,{children:"Total"}),(0,ue.jsx)($g,{children:C(s.total,s.currency)})]})]})]})]})]})]})}const Dg=o.i7`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Bg="#ffffff",Tg="rgba(148,163,184,0.18)",Rg="#0f172a",Lg="#64748b",Hg="#94a3b8",qg="#5eabb1",Fg="0 4px 20px rgba(15,23,42,0.07)",Kg="0 12px 32px rgba(15,23,42,0.13)",Ng=o.Ay.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  padding-bottom: 40px;
  animation: ${Dg} 0.35s ease both;
  @media (max-width: ${t.L8.sm}px) { width: 100%; gap: 12px; margin-top: 14px; }
`,Pg=o.Ay.div`
  border-radius: 20px;
  padding: 28px 28px 24px;
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  color: #f8fafc;
  box-shadow: 0 16px 40px rgba(10,15,40,0.28);
  position: relative; overflow: hidden;
  &::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 40px 40px; pointer-events: none; }
  @media (max-width: ${t.L8.sm}px) { padding: 20px 16px 18px; border-radius: 14px; }
`,Og=o.Ay.h2`
  margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;
  background: linear-gradient(120deg, #ffffff, ${qg}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; position: relative;
`,Ig=o.Ay.p`
  margin: 6px 0 0; font-size: 13px; opacity: 0.55; position: relative;
`,Jg=o.Ay.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
  @media (max-width: ${t.L8.md}px) { grid-template-columns: repeat(2, 1fr); }
`,Qg=o.Ay.div`
  background: ${Bg}; border: 1px solid ${Tg}; border-radius: 14px; padding: 18px 16px;
  box-shadow: ${Fg}; position: relative; overflow: hidden;
  animation: ${Dg} 0.4s ease both; animation-delay: ${e=>e.$delay||"0s"};
  transition: transform 0.2s, box-shadow 0.2s;
  &::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: ${e=>e.$accent||qg}; border-radius: 14px 14px 0 0; }
  &:hover { transform: translateY(-3px); box-shadow: ${Kg}; }
`,Wg=o.Ay.div` font-size: 10px; font-weight: 700; color: ${Hg}; text-transform: uppercase; letter-spacing: 0.4px; `,Yg=o.Ay.div` font-size: 26px; font-weight: 800; color: ${Rg}; margin: 4px 0 2px; letter-spacing: -0.5px; `,Zg=o.Ay.div` font-size: 10px; color: ${Hg}; `,Gg=o.Ay.div`
  background: ${Bg}; border: 1px solid ${Tg}; border-radius: 16px; padding: 20px 22px;
  box-shadow: ${Fg}; animation: ${Dg} 0.4s ease both; animation-delay: 0.1s;
`,Vg=o.Ay.div`
  display: flex; gap: 10px; align-items: center;
  @media (max-width: ${t.L8.sm}px) { flex-direction: column; align-items: stretch; }
`,Ug=o.Ay.input`
  flex: 1; height: 42px; padding: 0 16px; border-radius: 10px;
  border: 1.5px solid ${Tg}; background: #f8fafc; color: ${Rg};
  font-size: 14px; outline: none; transition: border-color 0.2s, box-shadow 0.2s;
  &::placeholder { color: ${Hg}; }
  &:focus { border-color: ${qg}; box-shadow: 0 0 0 3px rgba(94,171,177,0.15); }
`,Xg=o.Ay.button`
  height: 42px; padding: 0 24px; border-radius: 10px; border: none;
  background: ${qg}; color: #fff; font-size: 13px; font-weight: 700;
  cursor: pointer; transition: all 0.2s; box-shadow: 0 2px 8px rgba(94,171,177,0.3);
  &:hover { background: #4d9aa0; transform: translateY(-1px); }
`,em=o.Ay.button`
  height: 42px; padding: 0 20px; border-radius: 10px;
  border: 1.5px solid ${qg}; background: transparent; color: ${qg};
  font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s;
  display: inline-flex; align-items: center; gap: 6px;
  &:hover { background: ${qg}; color: #fff; transform: translateY(-1px); }
  &:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
`,im=o.Ay.div`
  background: ${Bg}; border: 1px solid ${Tg}; border-radius: 16px;
  box-shadow: ${Fg}; overflow: hidden; animation: ${Dg} 0.4s ease both; animation-delay: 0.15s;
`,am=o.Ay.div`
  padding: 14px 20px; font-size: 12px; color: ${Lg}; border-bottom: 1px solid #f1f5f9; font-weight: 500;
  strong { color: ${Rg}; }
`,nm=o.Ay.div` overflow-x: auto; -webkit-overflow-scrolling: touch; `,rm=o.Ay.div`
  display: grid; grid-template-columns: 1.2fr 1.5fr 1fr 80px 130px 100px;
  gap: 8px; padding: 12px 20px; background: ${Rg}; min-width: 700px;
  @media (max-width: ${t.L8.md}px) { display: none; }
`,om=o.Ay.div`
  font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.4px;
`,tm=o.Ay.div`
  display: grid; grid-template-columns: 1.2fr 1.5fr 1fr 80px 130px 100px;
  gap: 8px; padding: 14px 20px; border-bottom: 1px solid #f1f5f9; align-items: center;
  transition: background 0.15s; cursor: pointer; min-width: 700px;
  &:hover { background: #f8fafc; }
  &:last-child { border-bottom: none; }
  @media (max-width: ${t.L8.md}px) {
    display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 16px; min-width: 0;
    border: 1px solid #e2e8f0; border-radius: 10px; margin: 8px 12px;
  }
`,dm=o.Ay.div`
  font-size: 13px; color: ${Rg}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
`,sm=o.Ay.div`
  width: 34px; height: 34px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700; color: #fff; background: ${e=>e.$bg||qg}; flex-shrink: 0; margin-right: 10px;
`,lm=o.Ay.div`
  display: flex; align-items: center; gap: 0; font-weight: 600; font-size: 13px; color: ${Rg};
`,cm=o.Ay.span`
  display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px; border-radius: 999px;
  font-size: 11px; font-weight: 700; background: rgba(94,171,177,0.1); color: ${qg};
`,gm=o.Ay.button`
  padding: 6px 14px; background: transparent; color: ${qg}; border: 1.5px solid ${qg};
  border-radius: 8px; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s;
  &:hover { background: ${qg}; color: #fff; }
`,mm=o.Ay.div`
  text-align: center; padding: 60px 20px; color: ${Lg}; font-size: 15px;
  background: ${Bg}; border-radius: 16px; box-shadow: ${Fg}; border: 1px solid ${Tg};
`,pm=o.Ay.div` text-align: center; padding: 60px 20px; color: ${Lg}; font-size: 15px; `,hm=o.Ay.div`
  padding: 14px 18px; background: #fef2f2; color: #dc2626; border-radius: 10px; font-size: 13px; border: 1px solid #fecaca;
`,um=o.Ay.div` position: fixed; inset: 0; z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; `,xm=o.Ay.div` position: absolute; inset: 0; background: rgba(15,23,42,0.5); backdrop-filter: blur(6px); `,bm=o.Ay.div`
  position: relative; background: #fff; border-radius: 20px; max-width: 720px; width: 100%; max-height: 90vh; overflow-y: auto;
  box-shadow: 0 24px 64px rgba(0,0,0,0.2); z-index: 1001; animation: ${Dg} 0.25s ease both;
`,fm=o.Ay.div`
  display: flex; justify-content: space-between; align-items: center; padding: 20px 24px;
  background: linear-gradient(135deg, #0c0f1d, #1a2238); border-radius: 20px 20px 0 0; color: #f8fafc;
`,_m=o.Ay.h3` margin: 0; font-size: 17px; font-weight: 700; color: #fff; `,ym=o.Ay.button`
  background: rgba(255,255,255,0.1); border: none; color: #f8fafc; font-size: 18px; cursor: pointer;
  width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
  transition: background 0.2s; &:hover { background: rgba(255,255,255,0.2); }
`,vm=o.Ay.div` padding: 24px; `,jm=o.Ay.div`
  display: flex; gap: 24px; flex-wrap: wrap; padding: 16px 18px; background: #f8fafc; border-radius: 12px; margin-bottom: 20px; border: 1px solid #f1f5f9;
`,Am=o.Ay.div` display: flex; flex-direction: column; gap: 2px; `,wm=o.Ay.div` font-size: 10px; font-weight: 700; color: ${Hg}; text-transform: uppercase; letter-spacing: 0.3px; `,km=o.Ay.div` font-size: 14px; font-weight: 600; color: ${Rg}; `,$m=o.Ay.div` display: flex; flex-direction: column; gap: 8px; `,Sm=o.Ay.div`
  display: flex; justify-content: space-between; align-items: center; padding: 12px 16px;
  background: #fff; border: 1px solid #f1f5f9; border-radius: 10px; transition: background 0.15s;
  &:hover { background: #f8fafc; }
`,zm=o.Ay.div` font-weight: 700; color: ${qg}; font-size: 13px; `,Cm=o.Ay.div` font-size: 12px; color: ${Lg}; `,Mm=o.Ay.span`
  display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px; border-radius: 999px;
  font-size: 10px; font-weight: 700; text-transform: capitalize;
  background: ${e=>e.$color}15; color: ${e=>e.$color}; border: 1px solid ${e=>e.$color}30;
  &::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: ${e=>e.$color}; }
`,Em=o.Ay.div` font-size: 14px; font-weight: 800; color: ${Rg}; `,Dm=["#5eabb1","#8b5cf6","#f59e0b","#ef4444","#3b82f6","#10b981","#ec4899","#06b6d4"],Bm=e=>({pending:"#f59e0b",confirmed:"#3b82f6",preparing:"#8b5cf6",ready:"#10b981",completed:"#10b981",cancelled:"#ef4444"}[e]||"#64748b");function Tm(){var e;const[i,a]=(0,n.useState)([]),[o,t]=(0,n.useState)(!1),[d,s]=(0,n.useState)(""),[l,c]=(0,n.useState)(""),[g,m]=(0,n.useState)(null),[p,h]=(0,n.useState)(!1),[u,x]=(0,n.useState)([]),[b,f]=(0,n.useState)(!1),_=(()=>{try{return JSON.parse((0,he.getCookie)("userInfo")||"{}")}catch{return{}}})(),y=null===_||void 0===_?void 0:_.restaurant_id,v=async()=>{if(y){t(!0),s("");try{const e=(0,he.getCookie)("accessToken"),i=new URLSearchParams;l.trim()&&i.append("q",l.trim());const n=`${Qe.BO}${i.toString()?`?${i.toString()}`:""}`,{data:o}=await r.A.get(n,{headers:{Authorization:`Bearer ${e}`}});a(o.data||[])}catch(n){var e,i;s((null===(e=n.response)||void 0===e||null===(i=e.data)||void 0===i?void 0:i.message)||"Failed to load customers"),a([])}finally{t(!1)}}};(0,n.useEffect)((()=>{v()}),[y]);const j=async e=>{m(e),h(!0),x([]);try{const i=(0,he.getCookie)("accessToken"),{data:a}=await r.A.get((0,Qe.n_)(e.id),{headers:{Authorization:`Bearer ${i}`}});x(a.orders||[])}catch{x([])}finally{h(!1)}},A=(0,n.useMemo)((()=>{const e=i.length,a=i.reduce(((e,i)=>e+(i.order_count||0)),0),n=i.filter((e=>(e.order_count||0)>0)).length,r=new Date;return{total:e,totalOrders:a,withOrders:n,thisMonth:i.filter((e=>{if(!e.created_at)return!1;const i=new Date(e.created_at);return i.getMonth()===r.getMonth()&&i.getFullYear()===r.getFullYear()})).length}}),[i]),w=e=>e?new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"";return o&&0===i.length?(0,ue.jsx)(Ng,{children:(0,ue.jsx)(pm,{children:"Loading customers..."})}):(0,ue.jsxs)(Ng,{children:[(0,ue.jsxs)(Pg,{children:[(0,ue.jsx)(Og,{children:"Registered Customers"}),(0,ue.jsx)(Ig,{children:"View and manage customers who created accounts on your menu"})]}),(0,ue.jsxs)(Jg,{children:[(0,ue.jsxs)(Qg,{$accent:"#5eabb1",$delay:"0s",children:[(0,ue.jsx)(Wg,{children:"Total Customers"}),(0,ue.jsx)(Yg,{children:A.total}),(0,ue.jsx)(Zg,{children:"Registered accounts"})]}),(0,ue.jsxs)(Qg,{$accent:"#3b82f6",$delay:"0.05s",children:[(0,ue.jsx)(Wg,{children:"Total Orders"}),(0,ue.jsx)(Yg,{children:A.totalOrders}),(0,ue.jsx)(Zg,{children:"From registered customers"})]}),(0,ue.jsxs)(Qg,{$accent:"#10b981",$delay:"0.1s",children:[(0,ue.jsx)(Wg,{children:"Active Customers"}),(0,ue.jsx)(Yg,{children:A.withOrders}),(0,ue.jsx)(Zg,{children:"Placed at least 1 order"})]}),(0,ue.jsxs)(Qg,{$accent:"#8b5cf6",$delay:"0.15s",children:[(0,ue.jsx)(Wg,{children:"New This Month"}),(0,ue.jsx)(Yg,{children:A.thisMonth}),(0,ue.jsx)(Zg,{children:"Registered recently"})]})]}),(0,ue.jsx)(Gg,{children:(0,ue.jsxs)(Vg,{children:[(0,ue.jsx)(Ug,{type:"search",placeholder:"Search by email, phone, or name...",value:l,onChange:e=>c(e.target.value),onKeyDown:e=>"Enter"===e.key&&v()}),(0,ue.jsx)(Xg,{onClick:v,children:"Search"}),(0,ue.jsx)(em,{onClick:async()=>{try{f(!0);const e=(0,he.getCookie)("accessToken"),i="https://77.37.51.25",a=await r.A.get(`${i}/customers/registered/export`,{headers:{Authorization:`Bearer ${e}`},responseType:"blob"}),n=new Blob([a.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),o=document.createElement("a");o.href=URL.createObjectURL(n),o.download="registered_customers.xlsx",document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(o.href)}catch(a){var e,i;alert("Export failed: "+((null===(e=a.response)||void 0===e||null===(i=e.data)||void 0===i?void 0:i.message)||a.message))}finally{f(!1)}},disabled:b||0===i.length,children:b?"Exporting...":"Export Excel"})]})}),d&&(0,ue.jsx)(hm,{children:d}),0!==i.length||o?(0,ue.jsxs)(im,{children:[(0,ue.jsxs)(am,{children:[(0,ue.jsx)("strong",{children:i.length})," registered customer",1!==i.length?"s":""]}),(0,ue.jsxs)(nm,{children:[(0,ue.jsxs)(rm,{children:[(0,ue.jsx)(om,{children:"Customer"}),(0,ue.jsx)(om,{children:"Email"}),(0,ue.jsx)(om,{children:"Phone"}),(0,ue.jsx)(om,{children:"Orders"}),(0,ue.jsx)(om,{children:"Registered"}),(0,ue.jsx)(om,{})]}),i.map(((e,i)=>{var a,n;return(0,ue.jsxs)(tm,{onClick:()=>j(e),children:[(0,ue.jsx)(dm,{children:(0,ue.jsxs)(lm,{children:[(0,ue.jsx)(sm,{$bg:Dm[i%Dm.length],children:(n=e.full_name,n?n.split(" ").map((e=>e[0])).join("").toUpperCase().slice(0,2):"?")}),e.full_name||"\u2014"]})}),(0,ue.jsx)(dm,{style:{fontSize:12,color:"#64748b"},children:e.email||"\u2014"}),(0,ue.jsx)(dm,{style:{fontSize:12},children:e.phone_number||"\u2014"}),(0,ue.jsx)(dm,{children:(0,ue.jsxs)(cm,{children:[null!==(a=e.order_count)&&void 0!==a?a:0," orders"]})}),(0,ue.jsx)(dm,{style:{fontSize:12,color:"#64748b"},children:w(e.created_at)}),(0,ue.jsx)(dm,{children:(0,ue.jsx)(gm,{onClick:i=>{i.stopPropagation(),j(e)},children:"View"})})]},e.id)}))]})]}):(0,ue.jsx)(mm,{children:"No registered customers found"}),g&&(0,ue.jsxs)(um,{children:[(0,ue.jsx)(xm,{onClick:()=>m(null)}),(0,ue.jsxs)(bm,{children:[(0,ue.jsxs)(fm,{children:[(0,ue.jsx)(_m,{children:g.full_name||g.email}),(0,ue.jsx)(ym,{onClick:()=>m(null),children:"\u2715"})]}),(0,ue.jsxs)(vm,{children:[(0,ue.jsxs)(jm,{children:[(0,ue.jsxs)(Am,{children:[(0,ue.jsx)(wm,{children:"Email"}),(0,ue.jsx)(km,{children:g.email||"\u2014"})]}),(0,ue.jsxs)(Am,{children:[(0,ue.jsx)(wm,{children:"Phone"}),(0,ue.jsx)(km,{children:g.phone_number||"\u2014"})]}),(0,ue.jsxs)(Am,{children:[(0,ue.jsx)(wm,{children:"Registered"}),(0,ue.jsx)(km,{children:w(g.created_at)})]}),(0,ue.jsxs)(Am,{children:[(0,ue.jsx)(wm,{children:"Total Orders"}),(0,ue.jsx)(km,{children:null!==(e=g.order_count)&&void 0!==e?e:0})]})]}),p?(0,ue.jsx)(pm,{children:"Loading orders..."}):0===u.length?(0,ue.jsx)(mm,{style:{padding:30,fontSize:13},children:"No orders linked to this account yet"}):(0,ue.jsx)($m,{children:u.map((e=>{return(0,ue.jsxs)(Sm,{children:[(0,ue.jsxs)("div",{children:[(0,ue.jsxs)(zm,{children:["#",e.id]}),(0,ue.jsx)(Cm,{children:(i=e.order_date,i?new Date(i).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"")})]}),(0,ue.jsx)(Mm,{$color:Bm(e.status),children:e.status}),(0,ue.jsxs)(Em,{children:[parseFloat(e.total||0).toFixed(2)," ",e.currency||""]})]},e.id);var i}))})]})]})]})]})}const Rm=o.i7`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Lm="#ffffff",Hm="rgba(148,163,184,0.18)",qm="#0f172a",Fm="#64748b",Km="#94a3b8",Nm="#5eabb1",Pm="0 4px 20px rgba(15,23,42,0.07)",Om="0 12px 32px rgba(15,23,42,0.13)",Im=o.Ay.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  padding-bottom: 40px;
  animation: ${Rm} 0.35s ease both;
  @media (max-width: ${t.L8.sm}px) { width: 100%; gap: 12px; margin-top: 14px; }
`,Jm=o.Ay.div`
  border-radius: 20px;
  padding: 28px 28px 24px;
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  color: #f8fafc;
  box-shadow: 0 16px 40px rgba(10,15,40,0.28);
  position: relative; overflow: hidden;
  &::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 40px 40px; pointer-events: none; }
  @media (max-width: ${t.L8.sm}px) { padding: 20px 16px 18px; border-radius: 14px; }
`,Qm=o.Ay.h2`
  margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;
  background: linear-gradient(120deg, #ffffff, ${Nm}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; position: relative;
`,Wm=o.Ay.p`
  margin: 6px 0 0; font-size: 13px; opacity: 0.55; position: relative;
`,Ym=(o.Ay.div``,o.Ay.h2``,o.Ay.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
  @media (max-width: ${t.L8.md}px) { grid-template-columns: repeat(2, 1fr); }
`),Zm=o.Ay.div`
  background: ${Lm}; border: 1px solid ${Hm}; border-radius: 14px; padding: 18px 16px;
  box-shadow: ${Pm}; position: relative; overflow: hidden;
  animation: ${Rm} 0.4s ease both; animation-delay: ${e=>e.$delay||"0s"};
  transition: transform 0.2s, box-shadow 0.2s;
  &::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: ${e=>e.$accent||Nm}; border-radius: 14px 14px 0 0; }
  &:hover { transform: translateY(-3px); box-shadow: ${Om}; }
`,Gm=o.Ay.div` font-size: 10px; font-weight: 700; color: ${Km}; text-transform: uppercase; letter-spacing: 0.4px; `,Vm=o.Ay.div` font-size: 26px; font-weight: 800; color: ${qm}; margin: 4px 0 2px; letter-spacing: -0.5px; `,Um=o.Ay.div` font-size: 10px; color: ${Km}; `,Xm=o.Ay.div`
  background: ${Lm}; border: 1px solid ${Hm}; border-radius: 16px; padding: 20px 22px;
  box-shadow: ${Pm}; animation: ${Rm} 0.4s ease both; animation-delay: 0.1s;
`,ep=o.Ay.input`
  width: 100%; height: 42px; padding: 0 16px; border-radius: 10px;
  border: 1.5px solid ${Hm}; background: #f8fafc; color: ${qm};
  font-size: 14px; outline: none; transition: border-color 0.2s, box-shadow 0.2s;
  &::placeholder { color: ${Km}; }
  &:focus { border-color: ${Nm}; box-shadow: 0 0 0 3px rgba(94,171,177,0.15); }
`,ip=o.Ay.div`
  background: ${Lm}; border: 1px solid ${Hm}; border-radius: 16px;
  box-shadow: ${Pm}; overflow: hidden; animation: ${Rm} 0.4s ease both; animation-delay: 0.15s;
`,ap=o.Ay.div`
  padding: 14px 20px; font-size: 12px; color: ${Fm}; border-bottom: 1px solid #f1f5f9; font-weight: 500;
  strong { color: ${qm}; }
`,np=o.Ay.div`
  display: grid;
  grid-template-columns: 130px 1fr 130px 70px 80px 70px 120px 90px;
  gap: 8px; padding: 12px 20px; background: ${qm}; min-width: 800px;
  @media (max-width: ${t.L8.md}px) { display: none; }
`,rp=o.Ay.div`
  font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.4px;
`,op=o.Ay.div`
  display: grid;
  grid-template-columns: 130px 1fr 130px 70px 80px 70px 120px 90px;
  gap: 8px; padding: 14px 20px; border-bottom: 1px solid #f1f5f9; align-items: center;
  transition: background 0.15s; cursor: pointer; min-width: 800px;
  &:hover { background: #f8fafc; }
  &:last-child { border-bottom: none; }
  @media (max-width: ${t.L8.md}px) {
    display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 16px; min-width: 0;
    border: 1px solid #e2e8f0; border-radius: 10px; margin: 8px 12px;
  }
`,tp=o.Ay.div`
  font-size: 13px; color: ${qm}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
`,dp=(0,o.Ay)(tp)`
  font-weight: 600; font-family: 'SF Mono', 'Fira Code', monospace; color: ${Nm}; font-size: 12px;
`,sp=(0,o.Ay)(tp)`
  font-weight: 600;
`,lp=o.Ay.div`
  display: flex; gap: 4px; flex-wrap: wrap;
`,cp=o.Ay.span`
  padding: 3px 8px; border-radius: 6px; font-size: 10px; font-weight: 600; text-transform: capitalize;
  background-color: ${e=>{switch(e.$source){case"order":return"rgba(59,130,246,0.1)";case"feedback":return"rgba(245,158,11,0.1)";case"thread":return"rgba(139,92,246,0.1)";default:return"#f1f5f9"}}};
  color: ${e=>{switch(e.$source){case"order":return"#3b82f6";case"feedback":return"#f59e0b";case"thread":return"#8b5cf6";default:return"#475569"}}};
`,gp=o.Ay.button`
  padding: 6px 14px; background: transparent; color: ${Nm}; border: 1.5px solid ${Nm};
  border-radius: 8px; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s;
  &:hover { background: ${Nm}; color: #fff; }
`,mp=o.Ay.div`
  text-align: center; padding: 60px 20px; color: ${Fm}; font-size: 15px;
  background: ${Lm}; border-radius: 16px; box-shadow: ${Pm}; border: 1px solid ${Hm};
`,pp=o.Ay.div` text-align: center; padding: 60px 20px; color: ${Fm}; font-size: 15px; `,hp=o.Ay.div`
  padding: 14px 18px; background: #fef2f2; color: #dc2626; border-radius: 10px; font-size: 13px; border: 1px solid #fecaca;
`,up=o.Ay.div`
  position: fixed; inset: 0; z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;
`,xp=o.Ay.div`
  position: absolute; inset: 0; background: rgba(15,23,42,0.5); backdrop-filter: blur(6px);
`,bp=o.Ay.div`
  position: relative; background: #fff; border-radius: 20px; width: 90%; max-width: 900px; height: 80vh; max-height: 700px;
  display: flex; flex-direction: column; box-shadow: 0 24px 64px rgba(0,0,0,0.2); z-index: 1;
  animation: ${Rm} 0.25s ease both;
  @media (max-width: ${t.L8.md}px) { width: 95%; height: 90vh; }
`,fp=o.Ay.div`
  display: flex; justify-content: space-between; align-items: center; padding: 18px 22px;
  background: linear-gradient(135deg, #0c0f1d, #1a2238); border-radius: 20px 20px 0 0; color: #f8fafc;
  h3 { margin: 0; font-size: 16px; font-weight: 700; color: #fff; }
`,_p=o.Ay.button`
  background: rgba(255,255,255,0.1); border: none; color: #f8fafc; font-size: 18px; cursor: pointer;
  width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
  transition: background 0.2s; &:hover { background: rgba(255,255,255,0.2); }
`,yp=o.Ay.div`
  flex: 1; display: flex; overflow: hidden;
`,vp=o.Ay.div`
  width: 250px; border-right: 1px solid #e2e8f0; padding: 14px; overflow-y: auto; background: #f8fafc;
  @media (max-width: ${t.L8.md}px) { width: 180px; padding: 10px; }
`,jp=o.Ay.div`
  padding: 12px; border-radius: 10px; margin-bottom: 6px; cursor: pointer; transition: all 0.2s;
  background: ${e=>e.$active?"rgba(94,171,177,0.12)":"#fff"};
  border: 1.5px solid ${e=>e.$active?Nm:"transparent"};
  &:hover { background: ${e=>e.$active?"rgba(94,171,177,0.12)":"#f1f5f9"}; }
`,Ap=o.Ay.div`
  font-size: 12px; font-weight: 600; color: ${qm}; margin-bottom: 3px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
`,wp=o.Ay.div`
  font-size: 10px; color: ${Km};
`,kp=o.Ay.div`
  flex: 1; overflow-y: auto; padding: 18px; display: flex; flex-direction: column; gap: 10px;
`,$p=o.Ay.div`
  max-width: 70%; padding: 10px 14px; border-radius: 14px;
  align-self: ${e=>e.$isOwner?"flex-end":"flex-start"};
  background: ${e=>e.$isOwner?"linear-gradient(135deg, #5eabb1, #4d9aa0)":"#f1f5f9"};
  color: ${e=>e.$isOwner?"#fff":qm};
  box-shadow: ${e=>e.$isOwner?"0 2px 8px rgba(94,171,177,0.25)":"none"};
`,Sp=o.Ay.div`
  font-size: 13px; line-height: 1.5; margin-bottom: 3px;
`,zp=o.Ay.div`
  font-size: 10px; opacity: 0.65; text-align: right;
`,Cp=o.Ay.textarea`
  flex: 1; padding: 10px 14px; border: 1.5px solid ${Hm}; border-radius: 10px;
  font-size: 13px; outline: none; resize: none; min-height: 40px; max-height: 120px; font-family: inherit;
  transition: border-color 0.2s;
  &:focus { border-color: ${Nm}; box-shadow: 0 0 0 3px rgba(94,171,177,0.12); }
  &:disabled { background: #f1f5f9; cursor: not-allowed; }
`,Mp=o.Ay.button`
  padding: 10px 20px; background: ${Nm}; color: #fff; border: none; border-radius: 10px;
  font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(94,171,177,0.3);
  &:hover:not(:disabled) { background: #4d9aa0; transform: translateY(-1px); }
  &:disabled { background: #cbd5e1; cursor: not-allowed; box-shadow: none; }
`;var Ep=a(67059);const Dp="https://77.37.51.25",Bp=async(e,i)=>{try{const e=(0,he.getCookie)("accessToken");let a=`${Dp}/customers`;i&&(a+=`?q=${encodeURIComponent(i)}`);return(await r.A.get(a,{headers:{Authorization:`Bearer ${e}`}})).data}catch(a){throw console.error("Error fetching customers:",a),a}},Tp=async e=>{try{const i=(0,he.getCookie)("accessToken");return(await r.A.get(`${Dp}/customers/${e}/threads`,{headers:{Authorization:`Bearer ${i}`}})).data}catch(i){throw console.error("Error fetching customer threads:",i),i}},Rp=async(e,i)=>{try{const a=(0,he.getCookie)("accessToken");return(await r.A.post(`${Dp}/threads/admin/${e}/reply`,{message:i},{headers:{Authorization:`Bearer ${a}`}})).data}catch(a){throw console.error("Error replying to thread:",a),a}},Lp=async(e,i,a,n)=>{try{return(await r.A.post(`${Dp}/threads`,{restaurant_id:e,customer_phone:i,customer_name:a,subject:"Admin Message",type:"question",channel:"admin_chat",message:n})).data}catch(o){throw console.error("Error creating thread:",o),o}},Hp=async()=>{try{const e=(0,he.getCookie)("accessToken"),i=JSON.parse((0,he.getCookie)("userInfo")||"{}");return(await r.A.get(`${Dp}/restaurants/${i.restaurant_id}`,{headers:{Authorization:`Bearer ${e}`}})).data}catch(e){throw console.error("Error fetching restaurant info:",e),e}};function qp(){const[e,i]=(0,n.useState)([]),[a,o]=(0,n.useState)(!0),[t,d]=(0,n.useState)(null),[s,l]=(0,n.useState)(""),[c,g]=(0,n.useState)(null),[m,p]=(0,n.useState)(!1),[h,u]=(0,n.useState)([]),[x,b]=(0,n.useState)(null),[f,_]=(0,n.useState)([]),[y,v]=(0,n.useState)(""),[j,A]=(0,n.useState)(!1),[w,k]=(0,n.useState)(null),$=(0,n.useRef)(null),S=JSON.parse((0,he.getCookie)("userInfo")||"{}"),z=null===S||void 0===S?void 0:S.restaurant_id;(0,n.useEffect)((()=>{z&&(M(),C())}),[z,s]),(0,n.useEffect)((()=>{$.current&&$.current.focus()}),[s]);const C=async()=>{try{const e=await Hp();k(e)}catch(e){console.error("Error fetching restaurant info:",e)}},M=async()=>{try{o(!0),d(null);const e=await Bp(z,s);i(e.data||[])}catch(e){d("Failed to load customers. Please try again."),console.error(e)}finally{o(!1)}},E=e=>{b(e),_(e.messages||[])},D=async()=>{if(y.trim()&&!j)try{if(A(!0),x||0!==h.length){if(x){var e;await Rp(x.id,y),await new Promise((e=>setTimeout(e,300)));const i=await Tp(c.phone);u(i.data||[]);const a=null===(e=i.data)||void 0===e?void 0:e.find((e=>e.id===x.id));a&&(b(a),_(a.messages||[]))}}else{var i,a,n;const e=await Lp(z,c.phone,c.name,"Thread started");let d=null;if(null!==e&&void 0!==e&&null!==(i=e.data)&&void 0!==i&&null!==(a=i.thread)&&void 0!==a&&a.id?d=e.data.thread.id:null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.id&&(d=e.data.id),!d)throw console.error("Failed to get thread ID from created thread:",e),new Error("Failed to create thread");await Rp(d,y);const s=c.phone.replace(/\D/g,""),l=(0,Ep.JW)(s,null===w||void 0===w?void 0:w.country_code),m=`https://wa.me/${l}?text=${encodeURIComponent(y)}`;window.open(m,"_blank","noopener,noreferrer"),await new Promise((e=>setTimeout(e,800)));const p=(await Tp(c.phone)).data||[];if(u(p),p.length>0){const e=[...p].sort(((e,i)=>{const a=e.created_at?new Date(e.created_at):new Date(0);return(i.created_at?new Date(i.created_at):new Date(0))-a}))[0];if(!e.messages||0===e.messages.length)try{var o,t;const i=(0,he.getCookie)("accessToken"),a=await r.A.get(`${Dp}/threads/admin/${e.id}`,{headers:{Authorization:`Bearer ${i}`}});null!==(o=a.data)&&void 0!==o&&null!==(t=o.data)&&void 0!==t&&t.messages&&(e.messages=a.data.data.messages)}catch(g){console.error("Error fetching thread details:",g)}b(e),_(e.messages||[])}}v("")}catch(g){var d,s,l;console.error("Error sending message:",g),console.error("Error details:",(null===(d=g.response)||void 0===d?void 0:d.data)||g.message),alert(`Failed to send message: ${(null===(s=g.response)||void 0===s||null===(l=s.data)||void 0===l?void 0:l.message)||g.message}`)}finally{A(!1)}},B=e=>{if(!e)return"N/A";return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})},T=e=>{if(!e)return"N/A";const i=new Date(e),a=new Date-i,n=Math.floor(a/6e4),r=Math.floor(a/36e5),o=Math.floor(a/864e5);return n<1?"Just now":n<60?`${n}m ago`:r<24?`${r}h ago`:o<7?`${o}d ago`:B(e)};return a?(0,ue.jsx)(Im,{children:(0,ue.jsx)(pp,{children:"Loading customers..."})}):t?(0,ue.jsx)(Im,{children:(0,ue.jsx)(hp,{children:t})}):(0,ue.jsxs)(Im,{children:[(0,ue.jsxs)(Jm,{children:[(0,ue.jsx)(Qm,{children:"Customers"}),(0,ue.jsx)(Wm,{children:"View all customers who interacted with your menu through orders, feedback, or messages"})]}),(0,ue.jsxs)(Ym,{children:[(0,ue.jsxs)(Zm,{$accent:"#5eabb1",$delay:"0s",children:[(0,ue.jsx)(Gm,{children:"Total Customers"}),(0,ue.jsx)(Vm,{children:e.length}),(0,ue.jsx)(Um,{children:"Unique customers found"})]}),(0,ue.jsxs)(Zm,{$accent:"#3b82f6",$delay:"0.05s",children:[(0,ue.jsx)(Gm,{children:"With Orders"}),(0,ue.jsx)(Vm,{children:e.filter((e=>(e.orderCount||0)>0)).length}),(0,ue.jsx)(Um,{children:"Placed at least 1 order"})]}),(0,ue.jsxs)(Zm,{$accent:"#f59e0b",$delay:"0.1s",children:[(0,ue.jsx)(Gm,{children:"With Feedback"}),(0,ue.jsx)(Vm,{children:e.filter((e=>(e.feedbackCount||0)>0)).length}),(0,ue.jsx)(Um,{children:"Left feedback or rating"})]}),(0,ue.jsxs)(Zm,{$accent:"#8b5cf6",$delay:"0.15s",children:[(0,ue.jsx)(Gm,{children:"With Threads"}),(0,ue.jsx)(Vm,{children:e.filter((e=>(e.threadCount||0)>0)).length}),(0,ue.jsx)(Um,{children:"Sent questions or suggestions"})]})]}),(0,ue.jsx)(Xm,{children:(0,ue.jsx)(ep,{ref:$,type:"text",placeholder:"Search by phone number or name...",value:s,onChange:e=>l(e.target.value)})}),0===e.length?(0,ue.jsx)(mp,{children:"No customers found."}):(0,ue.jsxs)(ip,{children:[(0,ue.jsxs)(ap,{children:[(0,ue.jsx)("strong",{children:e.length})," customer",1!==e.length?"s":""]}),(0,ue.jsxs)("div",{style:{overflowX:"auto"},children:[(0,ue.jsxs)(np,{children:[(0,ue.jsx)(rp,{children:"Phone"}),(0,ue.jsx)(rp,{children:"Name"}),(0,ue.jsx)(rp,{children:"Sources"}),(0,ue.jsx)(rp,{children:"Orders"}),(0,ue.jsx)(rp,{children:"Feedbacks"}),(0,ue.jsx)(rp,{children:"Threads"}),(0,ue.jsx)(rp,{children:"Last Activity"}),(0,ue.jsx)(rp,{children:"Action"})]}),e.map((e=>(0,ue.jsxs)(op,{children:[(0,ue.jsx)(dp,{children:e.phone}),(0,ue.jsx)(sp,{children:e.name||"N/A"}),(0,ue.jsx)(lp,{children:e.sources.map((e=>(0,ue.jsx)(cp,{$source:e,children:e},e)))}),(0,ue.jsx)(tp,{children:e.orderCount||0}),(0,ue.jsx)(tp,{children:e.feedbackCount||0}),(0,ue.jsx)(tp,{children:e.threadCount||0}),(0,ue.jsx)(tp,{style:{fontSize:12,color:"#64748b"},children:T(e.lastActivity)}),(0,ue.jsx)(tp,{children:(0,ue.jsx)(gp,{onClick:()=>(async e=>{g(e),p(!0),b(null),_([]);try{const a=await Tp(e.phone);if(u(a.data||[]),e.threadId){var i;const n=null===(i=a.data)||void 0===i?void 0:i.find((i=>i.id===e.threadId));n&&E(n)}}catch(a){console.error("Error loading threads:",a)}})(e),children:"Chat"})})]},e.phone)))]})]}),m&&c&&(0,ue.jsxs)(up,{children:[(0,ue.jsx)(xp,{onClick:()=>p(!1)}),(0,ue.jsxs)(bp,{onClick:e=>e.stopPropagation(),children:[(0,ue.jsxs)(fp,{children:[(0,ue.jsxs)("div",{children:[(0,ue.jsx)("h3",{children:c.name||"Customer"}),(0,ue.jsx)("p",{style:{margin:0,fontSize:"14px",color:"#666"},children:c.phone})]}),(0,ue.jsx)(_p,{onClick:()=>p(!1),children:"\xd7"})]}),(0,ue.jsx)(yp,{children:(0,ue.jsxs)("div",{style:{display:"flex",height:"100%"},children:[(0,ue.jsxs)(vp,{children:[(0,ue.jsx)("h4",{style:{margin:"0 0 12px 0",fontSize:"14px"},children:"Conversations"}),0===h.length?(0,ue.jsx)("p",{style:{fontSize:"12px",color:"#999"},children:"No conversations yet"}):h.map((e=>(0,ue.jsxs)(jp,{$active:(null===x||void 0===x?void 0:x.id)===e.id,onClick:()=>E(e),children:[(0,ue.jsx)(Ap,{children:e.subject||"No subject"}),(0,ue.jsx)(wp,{children:T(e.last_message_at)})]},e.id)))]}),(0,ue.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:x?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(kp,{children:f.map((e=>(0,ue.jsxs)($p,{$isOwner:"owner"===e.sender_type,children:[(0,ue.jsx)(Sp,{children:e.message}),(0,ue.jsx)(zp,{children:B(e.created_at)})]},e.id)))}),(0,ue.jsxs)("div",{style:{display:"flex",gap:"8px",padding:"12px",borderTop:"1px solid #e2e8f0"},children:[(0,ue.jsx)(Cp,{value:y,onChange:e=>v(e.target.value),onKeyPress:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),D())},placeholder:"Type your message...",disabled:j}),(0,ue.jsx)(Mp,{onClick:D,disabled:!y.trim()||j,children:j?"Sending...":"Send"})]})]}):0===h.length?(0,ue.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",gap:"16px"},children:[(0,ue.jsxs)("div",{style:{textAlign:"center",color:"#666"},children:[(0,ue.jsx)("p",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"500"},children:"No conversations yet"}),(0,ue.jsx)("p",{style:{margin:0,fontSize:"14px",color:"#999"},children:"Start a new conversation by sending a message"})]}),(0,ue.jsxs)("div",{style:{display:"flex",gap:"8px",padding:"12px",width:"100%",maxWidth:"600px"},children:[(0,ue.jsx)(Cp,{value:y,onChange:e=>v(e.target.value),onKeyPress:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),D())},placeholder:"Type your message to start chat (will be sent via WhatsApp)...",disabled:j}),(0,ue.jsx)(Mp,{onClick:D,disabled:!y.trim()||j,children:j?"Sending...":"Start Chat"})]})]}):(0,ue.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"#999"},children:"Select a conversation to view messages"})})]})})]})]})]})}const Fp=o.Ay.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 40px;
  box-sizing: border-box;

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    max-width: 100%;
    gap: 14px;
    margin-top: 14px;
  }
`,Kp=o.Ay.div`
  background: linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  border-radius: 14px;
  padding: 24px 28px;
  box-shadow: 0 8px 24px rgba(10, 15, 40, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(94,171,177,0.18) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: ${t.L8.sm}px) {
    padding: 18px 14px;
    border-radius: 10px;
  }
`,Np=o.Ay.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(120deg, #ffffff, #5eabb1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 20px;
  }
`,Pp=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (max-width: ${t.L8.sm}px) {
    gap: 8px;
    margin-top: 12px;
  }
`,Op=o.Ay.button`
  background: #5eabb1;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(94, 171, 177, 0.3);
  position: relative;

  &:hover {
    background: #4d9aa0;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(94, 171, 177, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: rgba(255,255,255,0.15);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Ip=o.Ay.div`
  background: white;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);

  @media (max-width: ${t.L8.sm}px) {
    padding: 14px 12px;
    border-radius: 10px;
  }
`,Jp=o.Ay.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: ${t.L8.md}px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Qp=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 150px;
  flex: 1;

  @media (max-width: ${t.L8.md}px) {
    min-width: 100%;
  }
`,Wp=o.Ay.label`
  font-size: 13px;
  font-weight: 500;
  color: #475569;
`,Yp=o.Ay.select`
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,Zp=o.Ay.input`
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,Gp=o.Ay.input`
  margin-right: 8px;
  cursor: pointer;
`,Vp=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;

  @media (max-width: ${t.L8.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
`,Up=o.Ay.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(148, 163, 184, 0.12);
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  border-top: 3px solid #5eabb1;

  &:nth-child(2) { border-top-color: #3b82f6; }
  &:nth-child(3) { border-top-color: #10b981; }
  &:nth-child(4) { border-top-color: #8b5cf6; }
  &:nth-child(5) { border-top-color: #f59e0b; }
  &:nth-child(6) { border-top-color: #ec4899; }
  &:nth-child(7) { border-top-color: #ef4444; }
  &:nth-child(8) { border-top-color: #06b6d4; }
  &:nth-child(9) { border-top-color: #84cc16; }
  &:nth-child(10) { border-top-color: #f97316; }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.1);
  }

  @media (max-width: ${t.L8.sm}px) {
    padding: 14px 12px;
    border-radius: 10px;
    gap: 4px;
  }
`,Xp=o.Ay.div`
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,eh=o.Ay.div`
  font-size: 28px;
  font-weight: 700;
  color: #0f172a;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 22px;
  }
`,ih=o.Ay.div`
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.$color||"#666"};
`,ah=o.Ay.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);

  @media (max-width: ${t.L8.sm}px) {
    padding: 16px 12px;
    border-radius: 10px;
  }
`,nh=o.Ay.h3`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
`,rh=o.Ay.div`
  min-height: 300px;
`,oh=o.Ay.div`
  padding: 40px;
  text-align: center;
  color: #64748b;
  font-size: 14px;
`,th=o.Ay.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  color: #64748b;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`,dh=o.Ay.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  color: #ef4444;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`,sh=o.Ay.div`
  background: white;
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(148, 163, 184, 0.12);
  margin-bottom: 4px;
`,lh=o.Ay.div`
  display: flex;
  gap: 4px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`,ch=o.Ay.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: ${e=>e.$active?"600":"500"};
  color: ${e=>e.$active?"#0f172a":"#64748b"};
  background: ${e=>e.$active?"rgba(94,171,177,0.15)":"transparent"};
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  position: relative;

  ${e=>e.$active&&'\n    &::after {\n      content: "";\n      position: absolute;\n      bottom: 2px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 20px;\n      height: 2.5px;\n      background: #5eabb1;\n      border-radius: 2px;\n    }\n  '}

  &:hover {
    color: #0f172a;
    background: ${e=>e.$active?"rgba(94,171,177,0.15)":"rgba(15,23,42,0.04)"};
  }

  @media (max-width: ${t.L8.sm}px) {
    padding: 10px 14px;
    font-size: 12px;
  }
`,gh=o.Ay.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 8px;
`,mh=o.Ay.table`
  width: 100%;
  min-width: 540px;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`,ph=o.Ay.thead`
  background: #f8fafc;
`,hh=o.Ay.th`
  padding: 12px 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,uh=o.Ay.tr`
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8fafc;
  }
`,xh=o.Ay.td`
  padding: 12px 16px;
  font-size: 14px;
  color: #334155;
`,bh=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,fh=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;

  @media (max-width: ${t.L8.sm}px) {
    gap: 10px;
    padding: 12px 10px;
  }
`,_h=o.Ay.div`
  min-width: 110px;
  max-width: 150px;
  font-weight: 600;
  color: #0f172a;
  font-size: 13px;

  @media (max-width: ${t.L8.sm}px) {
    min-width: 80px;
    font-size: 12px;
  }
`,yh=o.Ay.div`
  flex: 1;
  height: 40px;
  background: #e2e8f0;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
`,vh=o.Ay.div`
  height: 100%;
  background: ${e=>e.$color||"#3b82f6"};
  width: ${e=>e.$percentage||0}%;
  transition: width 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  color: white;
  font-weight: 600;
  font-size: 12px;
`,jh=o.Ay.div`
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid
    ${e=>"warning"===e.$type?"#ef4444":"info"===e.$type?"#3b82f6":"#10b981"};
  background: ${e=>"warning"===e.$type?"#fef2f2":"info"===e.$type?"#eff6ff":"#f0fdf4"};
  margin-bottom: 12px;
`,Ah=o.Ay.div`
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 8px;
  font-size: 14px;
`,wh=o.Ay.div`
  color: #475569;
  font-size: 13px;
  margin-bottom: 8px;
`,kh=o.Ay.div`
  color: #64748b;
  font-size: 12px;
  font-style: italic;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`,$h=o.Ay.h3`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
`,Sh=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 20px;
`,zh=o.Ay.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.1);
  }
`;var Ch=a(67399),Mh=a(44612),Eh=a(25844);const Dh=e=>{var i,a;let{data:n,type:r="line",title:o,metric:t="visits"}=e;if(!n||!Array.isArray(n)||0===n.length)return(0,ue.jsxs)(rh,{children:[(0,ue.jsx)($h,{children:o}),(0,ue.jsx)("div",{style:{padding:"40px",textAlign:"center",color:"#999"},children:"No data available"})]});const d=n.map((e=>({period:e.period||e.date||e.label,current:e[t]||e.value||e.count||0,previous:e.previous||null})));return(0,ue.jsxs)(rh,{children:[(0,ue.jsx)($h,{children:o}),(0,ue.jsx)(Lo.u,{width:"100%",height:300,children:"bar"===r?(0,ue.jsxs)(Ho.E,{data:d,children:[(0,ue.jsx)(qo.d,{strokeDasharray:"3 3"}),(0,ue.jsx)(Fo.W,{dataKey:"period"}),(0,ue.jsx)(Ko.h,{}),(0,ue.jsx)(No.m,{}),(0,ue.jsx)(Ch.s,{}),(0,ue.jsx)(Po.yP,{dataKey:"current",fill:"#3b82f6",name:"Current Period"}),null!==(null===(i=d[0])||void 0===i?void 0:i.previous)&&(0,ue.jsx)(Po.yP,{dataKey:"previous",fill:"#94a3b8",name:"Previous Period"})]}):(0,ue.jsxs)(Mh.b,{data:d,children:[(0,ue.jsx)(qo.d,{strokeDasharray:"3 3"}),(0,ue.jsx)(Fo.W,{dataKey:"period"}),(0,ue.jsx)(Ko.h,{}),(0,ue.jsx)(No.m,{}),(0,ue.jsx)(Ch.s,{}),(0,ue.jsx)(Eh.N1,{type:"monotone",dataKey:"current",stroke:"#3b82f6",strokeWidth:2,name:"Current Period",dot:{r:4}}),null!==(null===(a=d[0])||void 0===a?void 0:a.previous)&&(0,ue.jsx)(Eh.N1,{type:"monotone",dataKey:"previous",stroke:"#94a3b8",strokeWidth:2,name:"Previous Period",strokeDasharray:"5 5"})]})})]})};var Bh=a(65513),Th=a(41593),Rh=a(43149);const Lh=["#3b82f6","#8b5cf6","#ec4899","#f59e0b","#10b981","#06b6d4","#f97316"],Hh=e=>{let{products:i,metric:a="views",limit:n=10}=e;if(!i||!Array.isArray(i)||0===i.length)return(0,ue.jsxs)(rh,{children:[(0,ue.jsxs)($h,{children:["Top Products by ",a.charAt(0).toUpperCase()+a.slice(1)]}),(0,ue.jsx)("div",{style:{padding:"40px",textAlign:"center",color:"#999"},children:"No product data available"})]});const r=i.slice(0,n).map((e=>({name:e.product_name||e.product_name_en||e.product_name_ar||`Product ${e.product_id}`,product_id:e.product_id,value:e[a]||e.views||e.orders||e.revenue||0,views:e.views||0,orders:e.orders||0,revenue:e.revenue||0}))).sort(((e,i)=>i.value-e.value));return(0,ue.jsxs)(rh,{children:[(0,ue.jsxs)($h,{children:["Top ",n," Products by ",a.charAt(0).toUpperCase()+a.slice(1)]}),(0,ue.jsx)(Lo.u,{width:"100%",height:400,children:(0,ue.jsxs)(Ho.E,{data:r,layout:"vertical",children:[(0,ue.jsx)(qo.d,{strokeDasharray:"3 3"}),(0,ue.jsx)(Fo.W,{type:"number"}),(0,ue.jsx)(Ko.h,{dataKey:"name",type:"category",width:100}),(0,ue.jsx)(No.m,{formatter:(e,i)=>"value"===i?[e,a]:[e,i]}),(0,ue.jsx)(Po.yP,{dataKey:"value",fill:"#3b82f6"})]})})]})},qh=e=>{let{categories:i,metric:a="views",limit:n=10}=e;if(!i||!Array.isArray(i)||0===i.length)return(0,ue.jsxs)(rh,{children:[(0,ue.jsxs)($h,{children:["Top Categories by ",a.charAt(0).toUpperCase()+a.slice(1)]}),(0,ue.jsx)("div",{style:{padding:"40px",textAlign:"center",color:"#999"},children:"No category data available"})]});const r=i.slice(0,n).map((e=>({name:e.category_name||e.category_name_en||e.category_name_ar||`Category ${e.category_id}`,category_id:e.category_id,value:e[a]||e.views||e.orders||e.revenue||0,views:e.views||0,orders:e.orders||0,revenue:e.revenue||0}))).sort(((e,i)=>i.value-e.value));return(0,ue.jsxs)(rh,{children:[(0,ue.jsxs)($h,{children:["Top ",n," Categories by ",a.charAt(0).toUpperCase()+a.slice(1)]}),(0,ue.jsx)(Lo.u,{width:"100%",height:400,children:(0,ue.jsxs)(Bh.r,{children:[(0,ue.jsx)(Th.Fq,{data:r,cx:"50%",cy:"50%",labelLine:!1,label:e=>{let{name:i,percent:a}=e;return`${i}: ${(100*a).toFixed(0)}%`},outerRadius:120,fill:"#8884d8",dataKey:"value",children:r.map(((e,i)=>(0,ue.jsx)(Rh.f,{fill:Lh[i%Lh.length]},`cell-${i}`)))}),(0,ue.jsx)(No.m,{}),(0,ue.jsx)(Ch.s,{})]})})]})},Fh=e=>{let{products:i,title:a="Top Products",limit:n=10}=e;if(!i||!Array.isArray(i)||0===i.length)return null;const r=i.slice(0,n);return(0,ue.jsxs)(rh,{children:[(0,ue.jsx)($h,{children:a}),(0,ue.jsx)(Sh,{children:r.map(((e,i)=>(0,ue.jsxs)(zh,{children:[(0,ue.jsx)("div",{style:{fontWeight:600,marginBottom:"8px"},children:e.product_name||e.product_name_en||e.product_name_ar||`Product #${e.product_id}`}),e.product_id&&(0,ue.jsxs)("div",{style:{fontSize:"11px",color:"#94a3b8",marginBottom:"4px"},children:["ID: ",e.product_id]}),(0,ue.jsxs)("div",{style:{fontSize:"12px",color:"#64748b"},children:[(0,ue.jsxs)("div",{children:["Views: ",e.views||0]}),(0,ue.jsxs)("div",{children:["Add to Cart: ",e.addToCart||0]}),(0,ue.jsxs)("div",{children:["Orders: ",e.orders||0]}),(0,ue.jsxs)("div",{children:["Revenue: $",(e.revenue||0).toFixed(2)]}),void 0!==e.viewToCartRate&&(0,ue.jsxs)("div",{children:["View\u2192Cart: ",(e.viewToCartRate||0).toFixed(1),"%"]}),void 0!==e.cartToOrderRate&&(0,ue.jsxs)("div",{children:["Cart\u2192Order: ",(e.cartToOrderRate||0).toFixed(1),"%"]})]})]},e.product_id||i)))})]})},Kh=e=>{let{categories:i,title:a="Top Categories",limit:n=10}=e;if(!i||!Array.isArray(i)||0===i.length)return null;const r=i.slice(0,n);return(0,ue.jsxs)(rh,{children:[(0,ue.jsx)($h,{children:a}),(0,ue.jsx)(Sh,{children:r.map(((e,i)=>(0,ue.jsxs)(zh,{children:[(0,ue.jsx)("div",{style:{fontWeight:600,marginBottom:"8px"},children:e.category_name||e.category_name_en||e.category_name_ar||`Category #${e.category_id}`}),e.category_id&&(0,ue.jsxs)("div",{style:{fontSize:"11px",color:"#94a3b8",marginBottom:"4px"},children:["ID: ",e.category_id]}),(0,ue.jsxs)("div",{style:{fontSize:"12px",color:"#64748b"},children:[(0,ue.jsxs)("div",{children:["Views: ",e.views||0]}),(0,ue.jsxs)("div",{children:["Add to Cart: ",e.addToCart||0]}),(0,ue.jsxs)("div",{children:["Orders: ",e.orders||0]}),(0,ue.jsxs)("div",{children:["Revenue: $",(e.revenue||0).toFixed(2)]}),void 0!==e.viewToCartRate&&(0,ue.jsxs)("div",{children:["View\u2192Cart: ",(e.viewToCartRate||0).toFixed(1),"%"]}),void 0!==e.cartToOrderRate&&(0,ue.jsxs)("div",{children:["Cart\u2192Order: ",(e.cartToOrderRate||0).toFixed(1),"%"]})]})]},e.category_id||i)))})]})};a(8983);const Nh={en:{title:"Analytics Report",period:"Period",comparedToPrevious:"(Compared to previous period)",overviewKPIs:"Overview KPIs",metric:"Metric",value:"Value",change:"Change",totalVisits:"Total Visits",uniqueVisitors:"Unique Visitors",orders:"Orders",revenue:"Revenue",conversionRate:"Conversion Rate",avgOrderValue:"Avg Order Value",cartAbandonment:"Cart Abandonment",conversionFunnel:"Conversion Funnel",step:"Step",count:"Count",dropOff:"Drop-off %",visits:"Visits",itemViews:"Item Views",addToCart:"Add to Cart",checkoutStarted:"Checkout Started",topProductsByRevenue:"Top Products by Revenue",product:"Product",views:"Views",topCategoriesByRevenue:"Top Categories by Revenue",category:"Category",sourceAnalytics:"Source Analytics",source:"Source",convRate:"Conv. Rate",keyInsights:"Key Insights",insight:"Insight",generatedOn:"Generated on",page:"Page",of:"of",exporting:"Exporting...",exportToPDF:"Export to PDF",exportFailed:"Failed to export PDF. Please try again."},ar:{title:"\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u062a\u062d\u0644\u064a\u0644\u0627\u062a",period:"\u0627\u0644\u0641\u062a\u0631\u0629",comparedToPrevious:"(\u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u0627\u0644\u0641\u062a\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629)",overviewKPIs:"\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0623\u062f\u0627\u0621 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",metric:"\u0627\u0644\u0645\u0642\u064a\u0627\u0633",value:"\u0627\u0644\u0642\u064a\u0645\u0629",change:"\u0627\u0644\u062a\u063a\u064a\u064a\u0631",totalVisits:"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a",uniqueVisitors:"\u0627\u0644\u0632\u0648\u0627\u0631 \u0627\u0644\u0641\u0631\u064a\u062f\u0648\u0646",orders:"\u0627\u0644\u0637\u0644\u0628\u0627\u062a",revenue:"\u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a",conversionRate:"\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u062d\u0648\u064a\u0644",avgOrderValue:"\u0645\u062a\u0648\u0633\u0637 \u0642\u064a\u0645\u0629 \u0627\u0644\u0637\u0644\u0628",cartAbandonment:"\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u062e\u0644\u064a \u0639\u0646 \u0627\u0644\u0633\u0644\u0629",conversionFunnel:"\u0642\u0645\u0639 \u0627\u0644\u062a\u062d\u0648\u064a\u0644",step:"\u0627\u0644\u062e\u0637\u0648\u0629",count:"\u0627\u0644\u0639\u062f\u062f",dropOff:"\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u062e\u0641\u0627\u0636 %",visits:"\u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a",itemViews:"\u0639\u0631\u0636 \u0627\u0644\u0639\u0646\u0627\u0635\u0631",addToCart:"\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",checkoutStarted:"\u0628\u062f\u0621 \u0627\u0644\u062f\u0641\u0639",topProductsByRevenue:"\u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u062d\u0633\u0628 \u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a",product:"\u0627\u0644\u0645\u0646\u062a\u062c",views:"\u0627\u0644\u0645\u0634\u0627\u0647\u062f\u0627\u062a",topCategoriesByRevenue:"\u0623\u0641\u0636\u0644 \u0627\u0644\u0641\u0626\u0627\u062a \u062d\u0633\u0628 \u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a",category:"\u0627\u0644\u0641\u0626\u0629",sourceAnalytics:"\u062a\u062d\u0644\u064a\u0644\u0627\u062a \u0627\u0644\u0645\u0635\u062f\u0631",source:"\u0627\u0644\u0645\u0635\u062f\u0631",convRate:"\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u062d\u0648\u064a\u0644",keyInsights:"\u0631\u0624\u0649 \u0631\u0626\u064a\u0633\u064a\u0629",insight:"\u0631\u0624\u064a\u0629",generatedOn:"\u062a\u0645 \u0627\u0644\u0625\u0646\u0634\u0627\u0621 \u0641\u064a",page:"\u0635\u0641\u062d\u0629",of:"\u0645\u0646",exporting:"\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0635\u062f\u064a\u0631...",exportToPDF:"\u062a\u0635\u062f\u064a\u0631 \u0625\u0644\u0649 PDF",exportFailed:"\u0641\u0634\u0644 \u062a\u0635\u062f\u064a\u0631 PDF. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649."}},Ph=function(){return Nh["ar"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en")?"ar":"en"]||Nh.en},Oh="https://77.37.51.25",Ih=async e=>{try{const i=(0,he.getCookie)("accessToken"),a=new URLSearchParams;Object.keys(e).forEach((i=>{null!==e[i]&&void 0!==e[i]&&""!==e[i]&&a.append(i,e[i])}));const n=`${Oh}/analytics/overview?${a.toString()}`;return(await r.A.get(n,{headers:{Authorization:`Bearer ${i}`}})).data}catch(i){throw console.error("Error fetching overview KPIs:",i),i}},Jh=async e=>{try{const i=(0,he.getCookie)("accessToken"),a=new URLSearchParams;Object.keys(e).forEach((i=>{null!==e[i]&&void 0!==e[i]&&""!==e[i]&&a.append(i,e[i])}));const n=`${Oh}/analytics/trends?${a.toString()}`;return(await r.A.get(n,{headers:{Authorization:`Bearer ${i}`}})).data}catch(i){throw console.error("Error fetching trends:",i),i}},Qh=async e=>{try{const i=(0,he.getCookie)("accessToken"),a=new URLSearchParams;Object.keys(e).forEach((i=>{null!==e[i]&&void 0!==e[i]&&""!==e[i]&&a.append(i,e[i])}));return(await r.A.get(`${Oh}/analytics/funnel?${a.toString()}`,{headers:{Authorization:`Bearer ${i}`}})).data}catch(i){throw console.error("Error fetching funnel:",i),i}},Wh=async e=>{try{const i=(0,he.getCookie)("accessToken"),a=new URLSearchParams;Object.keys(e).forEach((i=>{null!==e[i]&&void 0!==e[i]&&""!==e[i]&&a.append(i,e[i])}));return(await r.A.get(`${Oh}/analytics/sources?${a.toString()}`,{headers:{Authorization:`Bearer ${i}`}})).data}catch(i){throw console.error("Error fetching source analytics:",i),i}},Yh=async e=>{try{const i=(0,he.getCookie)("accessToken"),a=new URLSearchParams;Object.keys(e).forEach((i=>{null!==e[i]&&void 0!==e[i]&&""!==e[i]&&a.append(i,e[i])}));return(await r.A.get(`${Oh}/analytics/menu?${a.toString()}`,{headers:{Authorization:`Bearer ${i}`}})).data}catch(i){throw console.error("Error fetching menu analytics:",i),i}},Zh=async e=>{try{const i=(0,he.getCookie)("accessToken"),a=new URLSearchParams;Object.keys(e).forEach((i=>{null!==e[i]&&void 0!==e[i]&&""!==e[i]&&a.append(i,e[i])}));return(await r.A.get(`${Oh}/analytics/branches?${a.toString()}`,{headers:{Authorization:`Bearer ${i}`}})).data}catch(i){throw console.error("Error fetching branch analytics:",i),i}},Gh=async e=>{try{const i=(0,he.getCookie)("accessToken"),a=new URLSearchParams;Object.keys(e).forEach((i=>{null!==e[i]&&void 0!==e[i]&&""!==e[i]&&a.append(i,e[i])}));return(await r.A.get(`${Oh}/analytics/insights?${a.toString()}`,{headers:{Authorization:`Bearer ${i}`}})).data}catch(i){throw console.error("Error fetching insights:",i),i}};function Vh(){var e,i,a,o,t,d,s,l,c,g,m,p,h,u,x,b,f,_,y,v,j,A,w,k,$,S,z;const[C,M]=(0,n.useState)(!0),[E,D]=(0,n.useState)(null),[B,T]=(0,n.useState)(null),[R,L]=(0,n.useState)(null),[H,q]=(0,n.useState)(null),[F,K]=(0,n.useState)(null),[N,P]=(0,n.useState)(null),[O,I]=(0,n.useState)(null),[J,Q]=(0,n.useState)(null),[W,Y]=(0,n.useState)("overview"),[Z,G]=(0,n.useState)("30d"),[V,U]=(0,n.useState)(""),[X,ee]=(0,n.useState)(""),[ie,ae]=(0,n.useState)(""),[ne,re]=(0,n.useState)(""),[oe,te]=(0,n.useState)(""),[de,se]=(0,n.useState)(!1),[le,ce]=(0,n.useState)("day"),ge=JSON.parse((0,he.getCookie)("userInfo")||"{}"),me=null===ge||void 0===ge?void 0:ge.restaurant_id,pe=null===ge||void 0===ge?void 0:ge.restaurant_name,xe=(null===ge||void 0===ge?void 0:ge.Lang)||"en",be=Ph(xe),[fe,_e]=(0,n.useState)(null),[ye,ve]=(0,n.useState)(!1);(0,n.useEffect)((()=>{me&&(we(),je())}),[me,Z,V,X,ie,ne,oe,de,le]);const je=async()=>{try{var e;if(!pe)return;const i=(0,he.getCookie)("accessToken"),a=await r.A.get(`${Oh}/restaurants/${pe}?onlyLogo=true`,{headers:{Authorization:`Bearer ${i}`}});null!==(e=a.data)&&void 0!==e&&e.logoURL&&_e(`https://storage.googleapis.com/ecommerce-bucket-testing/${a.data.logoURL}`)}catch(E){console.error("Error fetching restaurant logo:",E)}},Ae=()=>{const e=new Date;let i=new Date;switch(Z){case"today":i=new Date(e),i.setHours(0,0,0,0);break;case"7d":i=new Date(e.getTime()-6048e5);break;case"30d":default:i=new Date(e.getTime()-2592e6);break;case"90d":i=new Date(e.getTime()-7776e6);break;case"custom":V&&X&&(i=new Date(V),e=new Date(X))}return{start_date:i.toISOString().split("T")[0],end_date:e.toISOString().split("T")[0]}},we=async()=>{try{M(!0),D(null);const e={...Ae(),branch_id:ie||null,order_type:ne||null,source:oe||null,compare:de,group_by:le},[i,a,n,r,o,t,d]=await Promise.all([Ih(e),Jh(e),Qh(e),Wh(e),Yh(e),Zh(e),Gh(e)]);T(i.data),L(a.data),q(n.data),K(r.data),P(o.data),I(t.data),Q(d.data)}catch(e){D("Failed to load analytics data. Please try again."),console.error(e)}finally{M(!1)}},ke=e=>{if(null===e||void 0===e||isNaN(e))return"$0.00";const i="number"===typeof e?e:parseFloat(e);return isNaN(i)?"$0.00":new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(i)},$e=e=>{if(null===e||void 0===e||isNaN(e))return"0";const i="number"===typeof e?e:parseFloat(e);return isNaN(i)?"0":new Intl.NumberFormat("en-US").format(i)},Se=e=>{if(null===e||void 0===e||isNaN(e))return"0.00%";const i="number"===typeof e?e:parseFloat(e);return isNaN(i)?"0.00%":`${i.toFixed(2)}%`},ze=e=>e?e>0?"#10b981":e<0?"#ef4444":"#666":"#666",Ce=e=>e?e>0?"\u2191":e<0?"\u2193":"\u2192":"",Me=e=>{if(null===e||void 0===e)return"-";const i="number"===typeof e?e:parseFloat(e);if(isNaN(i))return"-";return`${i>0?"+":""}${i.toFixed(2)}%`};return C?(0,ue.jsx)(Fp,{children:(0,ue.jsx)(th,{children:"Loading analytics..."})}):E?(0,ue.jsx)(Fp,{children:(0,ue.jsx)(dh,{children:E})}):(0,ue.jsxs)(Fp,{children:[(0,ue.jsxs)(Kp,{children:[(0,ue.jsx)(Np,{children:"Analytics Dashboard"}),(0,ue.jsx)(Pp,{children:(0,ue.jsx)(Op,{onClick:async()=>{try{var e,i;ve(!0),console.log("Starting PDF export...");const n=new In.Ay("p","mm","a4"),r=n.internal.pageSize.getWidth(),o=n.internal.pageSize.getHeight();let t=20;const d=20,s="ar"===xe?r-d:d;if(console.log("PDF initialized, pageWidth:",r,"currentLang:",xe),fe)try{console.log("Loading logo from:",fe);const e=await(a=fe,new Promise(((e,i)=>{const n=new Image;n.crossOrigin="anonymous";const r=setTimeout((()=>{i(new Error("Image load timeout"))}),1e4);n.onload=()=>{clearTimeout(r),e(n)},n.onerror=e=>{clearTimeout(r),console.error("Error loading image:",e),i(new Error("Failed to load image"))},n.src=a})));if(e){const i=20,a=e.width/e.height*i,o="ar"===xe?d:r-d-a;n.addImage(e,"PNG",o,t,a,i),console.log("Logo added successfully")}}catch(E){console.warn("Error loading logo, continuing without logo:",E)}else console.log("No logo URL available");console.log("Adding title:",be.title),n.setFontSize(20),n.setFont("helvetica","bold");try{"ar"===xe?n.text(be.title,s,t+10,{align:"right"}):n.text(be.title,s,t+10)}catch(E){console.error("Error adding title:",E),n.text(be.title,s,t+10)}const l=Ae();console.log("Date range:",l),n.setFontSize(10),n.setFont("helvetica","normal"),n.setTextColor(100,100,100),t+=20;const c=`${be.period}: ${l.start_date} ${"ar"===xe?"\u0625\u0644\u0649":"to"} ${l.end_date}`;try{"ar"===xe?n.text(c,s,t,{align:"right"}):n.text(c,s,t)}catch(E){console.error("Error adding period text:",E),n.text(c,s,t)}if(de){t+=5;try{"ar"===xe?n.text(be.comparedToPrevious,s,t,{align:"right"}):n.text(be.comparedToPrevious,s,t)}catch(E){n.text(be.comparedToPrevious,s,t)}}if(t+=10,console.log("Adding KPIs, kpis data:",B),B){n.setFontSize(16),n.setFont("helvetica","bold"),n.setTextColor(0,0,0),t+=10;try{"ar"===xe?n.text(be.overviewKPIs,s,t,{align:"right"}):n.text(be.overviewKPIs,s,t)}catch(E){n.text(be.overviewKPIs,s,t)}t+=8,n.setFontSize(10),n.setFont("helvetica","normal");[[be.metric,be.value,be.change],[be.totalVisits,$e(B.totalVisits||0),Me(B.totalVisitsChange)],[be.uniqueVisitors,$e(B.uniqueVisitors||0),Me(B.uniqueVisitorsChange)],[be.orders,$e(B.orders||0),Me(B.ordersChange)],[be.revenue,ke(B.revenue||0),Me(B.revenueChange)],[be.conversionRate,Se(B.conversionRate||0),Me(B.conversionRateChange)],[be.avgOrderValue,ke(B.avgOrderValue||0),Me(B.avgOrderValueChange)],[be.cartAbandonment,Se(B.cartAbandonmentRate||0),Me(B.cartAbandonmentRateChange)]].forEach(((e,i)=>{t>o-30&&(n.addPage(),t=20),n.setFont("helvetica",0===i?"bold":"normal");try{"ar"===xe?(n.text(String(e[2]||""),r-d,t,{align:"right"}),n.text(String(e[1]||""),r-d-50,t,{align:"right"}),n.text(String(e[0]||""),r-d-100,t,{align:"right"})):(n.text(String(e[0]||""),d,t),n.text(String(e[1]||""),d+80,t),n.text(String(e[2]||""),d+130,t))}catch(E){console.error(`Error adding KPI row ${i}:`,E),n.text(String(e[0]||""),d,t),n.text(String(e[1]||""),d+80,t),n.text(String(e[2]||""),d+130,t)}t+=7})),t+=5}if(H){t>o-50&&(n.addPage(),t=20),n.setFontSize(16),n.setFont("helvetica","bold"),n.setTextColor(0,0,0),t+=10;try{"ar"===xe?n.text(be.conversionFunnel,s,t,{align:"right"}):n.text(be.conversionFunnel,s,t)}catch(E){n.text(be.conversionFunnel,s,t)}t+=8,n.setFontSize(10),n.setFont("helvetica","normal");[[be.step,be.count,be.dropOff],[be.visits,$e(H.visits||0),"-"],[be.itemViews,$e(H.itemViews||0),Se(H.visitsToItemViewDropOff||0)],[be.addToCart,$e(H.addToCart||0),Se(H.itemViewToCartDropOff||0)],[be.checkoutStarted,$e(H.checkoutStarted||0),Se(H.cartToCheckoutDropOff||0)],[be.orders,$e(H.orders||0),Se(H.checkoutToOrderDropOff||0)]].forEach(((e,i)=>{t>o-30&&(n.addPage(),t=20),n.setFont("helvetica",0===i?"bold":"normal");try{"ar"===xe?(n.text(String(e[2]||""),r-d,t,{align:"right"}),n.text(String(e[1]||""),r-d-50,t,{align:"right"}),n.text(String(e[0]||""),r-d-100,t,{align:"right"})):(n.text(String(e[0]||""),d,t),n.text(String(e[1]||""),d+80,t),n.text(String(e[2]||""),d+130,t))}catch(E){n.text(String(e[0]||""),d,t),n.text(String(e[1]||""),d+80,t),n.text(String(e[2]||""),d+130,t)}t+=7})),t+=5}if(null!==N&&void 0!==N&&null!==(e=N.topProducts)&&void 0!==e&&e.byRevenue&&N.topProducts.byRevenue.length>0){t>o-50&&(n.addPage(),t=20),n.setFontSize(16),n.setFont("helvetica","bold"),n.setTextColor(0,0,0),t+=10;try{"ar"===xe?n.text(be.topProductsByRevenue,s,t,{align:"right"}):n.text(be.topProductsByRevenue,s,t)}catch(E){n.text(be.topProductsByRevenue,s,t)}t+=8,n.setFontSize(9),n.setFont("helvetica","normal");const e=[[be.product,be.views,be.orders,be.revenue]];N.topProducts.byRevenue.slice(0,10).forEach((i=>{e.push([(i.product_name||`Product #${i.product_id}`).substring(0,30),$e(i.views||0),$e(i.orders||0),ke(i.revenue||0)])})),e.forEach(((e,i)=>{t>o-30&&(n.addPage(),t=20),n.setFont("helvetica",0===i?"bold":"normal");try{"ar"===xe?(n.text(String(e[3]||""),r-d,t,{align:"right"}),n.text(String(e[2]||""),r-d-40,t,{align:"right"}),n.text(String(e[1]||""),r-d-70,t,{align:"right"}),n.text(String(e[0]||""),r-d-100,t,{align:"right"})):(n.text(String(e[0]||""),d,t),n.text(String(e[1]||""),d+60,t),n.text(String(e[2]||""),d+90,t),n.text(String(e[3]||""),d+120,t))}catch(E){n.text(String(e[0]||""),d,t),n.text(String(e[1]||""),d+60,t),n.text(String(e[2]||""),d+90,t),n.text(String(e[3]||""),d+120,t)}t+=6})),t+=5}if(null!==N&&void 0!==N&&null!==(i=N.topCategories)&&void 0!==i&&i.byRevenue&&N.topCategories.byRevenue.length>0){t>o-50&&(n.addPage(),t=20),n.setFontSize(16),n.setFont("helvetica","bold"),n.setTextColor(0,0,0),t+=10;try{"ar"===xe?n.text(be.topCategoriesByRevenue,s,t,{align:"right"}):n.text(be.topCategoriesByRevenue,s,t)}catch(E){n.text(be.topCategoriesByRevenue,s,t)}t+=8,n.setFontSize(9),n.setFont("helvetica","normal");const e=[[be.category,be.views,be.orders,be.revenue]];N.topCategories.byRevenue.slice(0,10).forEach((i=>{e.push([(i.category_name||`Category #${i.category_id}`).substring(0,30),$e(i.views||0),$e(i.orders||0),ke(i.revenue||0)])})),e.forEach(((e,i)=>{t>o-30&&(n.addPage(),t=20),n.setFont("helvetica",0===i?"bold":"normal");try{"ar"===xe?(n.text(String(e[3]||""),r-d,t,{align:"right"}),n.text(String(e[2]||""),r-d-40,t,{align:"right"}),n.text(String(e[1]||""),r-d-70,t,{align:"right"}),n.text(String(e[0]||""),r-d-100,t,{align:"right"})):(n.text(String(e[0]||""),d,t),n.text(String(e[1]||""),d+60,t),n.text(String(e[2]||""),d+90,t),n.text(String(e[3]||""),d+120,t))}catch(E){n.text(String(e[0]||""),d,t),n.text(String(e[1]||""),d+60,t),n.text(String(e[2]||""),d+90,t),n.text(String(e[3]||""),d+120,t)}t+=6})),t+=5}if(F&&F.length>0){t>o-50&&(n.addPage(),t=20),n.setFontSize(16),n.setFont("helvetica","bold"),n.setTextColor(0,0,0),t+=10;try{"ar"===xe?n.text(be.sourceAnalytics,s,t,{align:"right"}):n.text(be.sourceAnalytics,s,t)}catch(E){n.text(be.sourceAnalytics,s,t)}t+=8,n.setFontSize(9),n.setFont("helvetica","normal");const e=[[be.source,be.visits,be.orders,be.revenue,be.convRate]];F.slice(0,10).forEach((i=>{e.push([i.source||"Unknown",$e(i.visits||0),$e(i.orders||0),ke(i.revenue||0),Se(i.conversionRate||0)])})),e.forEach(((e,i)=>{t>o-30&&(n.addPage(),t=20),n.setFont("helvetica",0===i?"bold":"normal");try{"ar"===xe?(n.text(String(e[4]||""),r-d,t,{align:"right"}),n.text(String(e[3]||""),r-d-40,t,{align:"right"}),n.text(String(e[2]||""),r-d-70,t,{align:"right"}),n.text(String(e[1]||""),r-d-100,t,{align:"right"}),n.text(String(e[0]||""),r-d-130,t,{align:"right"})):(n.text(String(e[0]||""),d,t),n.text(String(e[1]||""),d+50,t),n.text(String(e[2]||""),d+75,t),n.text(String(e[3]||""),d+100,t),n.text(String(e[4]||""),d+140,t))}catch(E){n.text(String(e[0]||""),d,t),n.text(String(e[1]||""),d+50,t),n.text(String(e[2]||""),d+75,t),n.text(String(e[3]||""),d+100,t),n.text(String(e[4]||""),d+140,t)}t+=6})),t+=5}if(J&&J.length>0){t>o-50&&(n.addPage(),t=20),n.setFontSize(16),n.setFont("helvetica","bold"),n.setTextColor(0,0,0),t+=10;try{"ar"===xe?n.text(be.keyInsights,s,t,{align:"right"}):n.text(be.keyInsights,s,t)}catch(E){n.text(be.keyInsights,s,t)}t+=8,n.setFontSize(10),n.setFont("helvetica","normal"),J.slice(0,5).forEach((e=>{t>o-40&&(n.addPage(),t=20),n.setFont("helvetica","bold");try{const i=String(e.title||be.insight||"");"ar"===xe?n.text(i,s,t,{align:"right"}):n.text(i,s,t)}catch(E){n.text(String(e.title||be.insight||""),s,t)}t+=6,n.setFont("helvetica","normal");const i=String((e.message||"").substring(0,150));try{"ar"===xe?n.text(i,s,t,{align:"right"}):n.text(i,s,t)}catch(E){n.text(i,s,t)}t+=8}))}const g=n.internal.pages.length-1;for(let e=1;e<=g;e++){n.setPage(e),n.setFontSize(8),n.setTextColor(150,150,150);const i=`${be.generatedOn} ${(new Date).toLocaleString()} - ${be.page} ${e} ${be.of} ${g}`,a="ar"===xe?r-d:d;try{"ar"===xe?n.text(i,a,o-10,{align:"right"}):n.text(i,a,o-10)}catch(E){n.text(i,a,o-10)}}console.log("Saving PDF...");const m=`Analytics_Report_${pe||"Restaurant"}_${l.start_date}_to_${l.end_date}.pdf`;n.save(m),console.log("PDF saved successfully:",m)}catch(E){console.error("Error exporting to PDF:",E),console.error("Error stack:",E.stack),console.error("Error details:",{message:E.message,name:E.name,currentLang:xe,hasKpis:!!B,hasFunnel:!!H,hasMenu:!!N,hasSources:!!F,hasInsights:!!J}),alert(be.exportFailed+"\n\nError: "+(E.message||"Unknown error"))}finally{ve(!1)}var a},disabled:ye||C,children:ye?be.exporting:`\ud83d\udcc4 ${be.exportToPDF}`})})]}),(0,ue.jsx)(Ip,{children:(0,ue.jsxs)(Jp,{children:[(0,ue.jsxs)(Qp,{children:[(0,ue.jsx)(Wp,{children:"Date Range"}),(0,ue.jsxs)(Yp,{value:Z,onChange:e=>{G(e.target.value),"custom"!==e.target.value&&(U(""),ee(""))},children:[(0,ue.jsx)("option",{value:"today",children:"Today"}),(0,ue.jsx)("option",{value:"7d",children:"Last 7 days"}),(0,ue.jsx)("option",{value:"30d",children:"Last 30 days"}),(0,ue.jsx)("option",{value:"90d",children:"Last 90 days"}),(0,ue.jsx)("option",{value:"custom",children:"Custom"})]})]}),"custom"===Z&&(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsxs)(Qp,{children:[(0,ue.jsx)(Wp,{children:"Start Date"}),(0,ue.jsx)(Zp,{type:"date",value:V,onChange:e=>U(e.target.value)})]}),(0,ue.jsxs)(Qp,{children:[(0,ue.jsx)(Wp,{children:"End Date"}),(0,ue.jsx)(Zp,{type:"date",value:X,onChange:e=>ee(e.target.value)})]})]}),(0,ue.jsxs)(Qp,{children:[(0,ue.jsx)(Wp,{children:"Branch"}),(0,ue.jsx)(Yp,{value:ie,onChange:e=>ae(e.target.value),children:(0,ue.jsx)("option",{value:"",children:"All Branches"})})]}),(0,ue.jsxs)(Qp,{children:[(0,ue.jsx)(Wp,{children:"Order Type"}),(0,ue.jsxs)(Yp,{value:ne,onChange:e=>re(e.target.value),children:[(0,ue.jsx)("option",{value:"",children:"All Types"}),(0,ue.jsx)("option",{value:"Delivery",children:"Delivery"}),(0,ue.jsx)("option",{value:"Takeaway",children:"Takeaway"}),(0,ue.jsx)("option",{value:"DineIn",children:"Dine In"})]})]}),(0,ue.jsxs)(Qp,{children:[(0,ue.jsx)(Wp,{children:"Source"}),(0,ue.jsxs)(Yp,{value:oe,onChange:e=>te(e.target.value),children:[(0,ue.jsx)("option",{value:"",children:"All Sources"}),(0,ue.jsx)("option",{value:"QR",children:"QR Code"}),(0,ue.jsx)("option",{value:"Instagram",children:"Instagram"}),(0,ue.jsx)("option",{value:"Google",children:"Google"}),(0,ue.jsx)("option",{value:"Direct",children:"Direct"}),(0,ue.jsx)("option",{value:"WhatsApp",children:"WhatsApp"}),(0,ue.jsx)("option",{value:"Facebook",children:"Facebook"}),(0,ue.jsx)("option",{value:"TikTok",children:"TikTok"}),(0,ue.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,ue.jsxs)(Qp,{children:[(0,ue.jsx)(Wp,{children:"Group By"}),(0,ue.jsxs)(Yp,{value:le,onChange:e=>ce(e.target.value),children:[(0,ue.jsx)("option",{value:"day",children:"Day"}),(0,ue.jsx)("option",{value:"week",children:"Week"}),(0,ue.jsx)("option",{value:"month",children:"Month"})]})]}),(0,ue.jsx)(Qp,{children:(0,ue.jsxs)(Wp,{children:[(0,ue.jsx)(Gp,{type:"checkbox",checked:de,onChange:e=>se(e.target.checked)}),"Compare to Previous Period"]})})]})}),B&&(0,ue.jsxs)(Vp,{children:[(0,ue.jsxs)(Up,{children:[(0,ue.jsx)(Xp,{children:"Total Visits"}),(0,ue.jsx)(eh,{children:$e((null===(e=B.visits)||void 0===e?void 0:e.value)||0)}),null!==(null===(i=B.visits)||void 0===i?void 0:i.change)&&(0,ue.jsxs)(ih,{$color:ze(B.visits.change),children:[Ce(B.visits.change)," ",Se(Math.abs(B.visits.change))]})]}),(0,ue.jsxs)(Up,{children:[(0,ue.jsx)(Xp,{children:"Unique Visitors"}),(0,ue.jsx)(eh,{children:$e((null===(a=B.uniqueVisitors)||void 0===a?void 0:a.value)||0)})]}),(0,ue.jsxs)(Up,{children:[(0,ue.jsx)(Xp,{children:"Orders"}),(0,ue.jsx)(eh,{children:$e((null===(o=B.orders)||void 0===o?void 0:o.value)||0)}),null!==(null===(t=B.orders)||void 0===t?void 0:t.change)&&(0,ue.jsxs)(ih,{$color:ze(B.orders.change),children:[Ce(B.orders.change)," ",Se(Math.abs(B.orders.change))]})]}),(0,ue.jsxs)(Up,{children:[(0,ue.jsx)(Xp,{children:"Revenue"}),(0,ue.jsx)(eh,{children:ke((null===(d=B.revenue)||void 0===d?void 0:d.value)||0)}),null!==(null===(s=B.revenue)||void 0===s?void 0:s.change)&&(0,ue.jsxs)(ih,{$color:ze(B.revenue.change),children:[Ce(B.revenue.change)," ",Se(Math.abs(B.revenue.change))]})]}),(0,ue.jsxs)(Up,{children:[(0,ue.jsx)(Xp,{children:"Conversion Rate"}),(0,ue.jsx)(eh,{children:Se((null===(l=B.conversionRate)||void 0===l?void 0:l.value)||0)})]}),(0,ue.jsxs)(Up,{children:[(0,ue.jsx)(Xp,{children:"Avg Order Value"}),(0,ue.jsx)(eh,{children:ke((null===(c=B.avgOrderValue)||void 0===c?void 0:c.value)||0)})]}),(0,ue.jsxs)(Up,{children:[(0,ue.jsx)(Xp,{children:"Cart Abandonment"}),(0,ue.jsx)(eh,{children:Se((null===(g=B.cartAbandonmentRate)||void 0===g?void 0:g.value)||0)})]}),(0,ue.jsxs)(Up,{children:[(0,ue.jsx)(Xp,{children:"Item Views"}),(0,ue.jsx)(eh,{children:$e((null===(m=B.itemViews)||void 0===m?void 0:m.value)||0)})]}),(0,ue.jsxs)(Up,{children:[(0,ue.jsx)(Xp,{children:"Add to Cart"}),(0,ue.jsx)(eh,{children:$e((null===(p=B.addToCart)||void 0===p?void 0:p.value)||0)})]}),(0,ue.jsxs)(Up,{children:[(0,ue.jsx)(Xp,{children:"Checkout Starts"}),(0,ue.jsx)(eh,{children:$e((null===(h=B.checkoutStarts)||void 0===h?void 0:h.value)||0)})]})]}),(0,ue.jsx)(sh,{children:(0,ue.jsxs)(lh,{children:[(0,ue.jsx)(ch,{$active:"overview"===W,onClick:()=>Y("overview"),children:"Overview"}),(0,ue.jsx)(ch,{$active:"trends"===W,onClick:()=>Y("trends"),children:"Trends"}),(0,ue.jsx)(ch,{$active:"funnel"===W,onClick:()=>Y("funnel"),children:"Funnel"}),(0,ue.jsx)(ch,{$active:"sources"===W,onClick:()=>Y("sources"),children:"Sources"}),(0,ue.jsx)(ch,{$active:"menu"===W,onClick:()=>Y("menu"),children:"Menu"}),(0,ue.jsx)(ch,{$active:"branches"===W,onClick:()=>Y("branches"),children:"Branches"}),(0,ue.jsx)(ch,{$active:"insights"===W,onClick:()=>Y("insights"),children:"Insights"})]})}),"overview"===W&&H&&(0,ue.jsxs)(ah,{children:[(0,ue.jsx)(nh,{children:"Conversion Funnel"}),(0,ue.jsxs)("div",{style:{background:"white",borderRadius:"12px"},children:[(0,ue.jsx)(bh,{children:null===(u=H.funnel)||void 0===u?void 0:u.map(((e,i)=>{var a;const n=(null===(a=H.funnel[0])||void 0===a?void 0:a.count)||1,r=e.count/n*100,o=["#3b82f6","#8b5cf6","#ec4899","#f59e0b","#10b981"];return(0,ue.jsxs)(fh,{children:[(0,ue.jsx)(_h,{children:e.step}),(0,ue.jsx)(yh,{children:(0,ue.jsx)(vh,{$percentage:r,$color:o[i%o.length],children:e.count})}),(0,ue.jsxs)("div",{style:{minWidth:"100px",textAlign:"right"},children:[Se(e.dropOff)," drop-off"]})]},i)}))}),(0,ue.jsxs)("div",{style:{marginTop:"20px",padding:"16px",background:"#f8fafc",borderRadius:"8px"},children:[(0,ue.jsx)("div",{style:{fontWeight:600,marginBottom:"8px"},children:"Overall Conversion"}),(0,ue.jsx)("div",{style:{fontSize:"24px",fontWeight:700,color:"#10b981"},children:Se(H.overallConversion||0)})]})]})]}),"trends"===W&&(0,ue.jsxs)(ah,{children:[(0,ue.jsx)(nh,{children:"Trends"}),R?(0,ue.jsxs)(ue.Fragment,{children:[R.visits&&R.visits.length>0&&(0,ue.jsx)(Dh,{data:R.visits,type:"line",title:"Visits Trend",metric:"visits"}),R.orders&&R.orders.length>0&&(0,ue.jsx)(Dh,{data:R.orders,type:"line",title:"Orders & Revenue Trend",metric:"orders"})]}):(0,ue.jsx)(oh,{children:"No trends data available"})]}),"funnel"===W&&(0,ue.jsxs)(ah,{children:[(0,ue.jsx)(nh,{children:"Funnel & Abandonment"}),H?(0,ue.jsxs)("div",{style:{background:"white",borderRadius:"12px",padding:"24px"},children:[(0,ue.jsx)(bh,{children:null===(x=H.funnel)||void 0===x?void 0:x.map(((e,i)=>{var a;const n=(null===(a=H.funnel[0])||void 0===a?void 0:a.count)||1,r=e.count/n*100,o=["#3b82f6","#8b5cf6","#ec4899","#f59e0b","#10b981"];return(0,ue.jsxs)(fh,{children:[(0,ue.jsx)(_h,{children:e.step}),(0,ue.jsx)(yh,{children:(0,ue.jsx)(vh,{$percentage:r,$color:o[i%o.length],children:e.count})}),(0,ue.jsxs)("div",{style:{minWidth:"100px",textAlign:"right"},children:[Se(e.dropOff)," drop-off"]})]},i)}))}),(0,ue.jsxs)("div",{style:{marginTop:"20px",padding:"16px",background:"#f8fafc",borderRadius:"8px"},children:[(0,ue.jsx)("div",{style:{fontWeight:600,marginBottom:"8px"},children:"Overall Conversion"}),(0,ue.jsx)("div",{style:{fontSize:"24px",fontWeight:700,color:"#10b981"},children:Se(H.overallConversion||0)}),(0,ue.jsxs)("div",{style:{marginTop:"12px",fontSize:"13px",color:"#64748b"},children:["Top Drop-off Step: ",(0,ue.jsx)("strong",{children:H.topDropOffStep})," (",Se(H.topDropOffRate||0),")"]})]})]}):(0,ue.jsx)(oh,{children:"No funnel data available"})]}),"sources"===W&&(0,ue.jsxs)(ah,{children:[(0,ue.jsx)(nh,{children:"Source / Channel Analytics"}),F&&F.length>0?(0,ue.jsx)(gh,{children:(0,ue.jsxs)(mh,{children:[(0,ue.jsx)(ph,{children:(0,ue.jsxs)("tr",{children:[(0,ue.jsx)(hh,{children:"Source"}),(0,ue.jsx)(hh,{children:"Visits"}),(0,ue.jsx)(hh,{children:"Unique Visitors"}),(0,ue.jsx)(hh,{children:"Orders"}),(0,ue.jsx)(hh,{children:"Revenue"}),(0,ue.jsx)(hh,{children:"Conversion Rate"}),(0,ue.jsx)(hh,{children:"Avg Order Value"})]})}),(0,ue.jsx)("tbody",{children:F.map(((e,i)=>(0,ue.jsxs)(uh,{children:[(0,ue.jsx)(xh,{style:{fontWeight:600},children:e.source}),(0,ue.jsx)(xh,{children:$e(e.visits)}),(0,ue.jsx)(xh,{children:$e(e.uniqueVisitors)}),(0,ue.jsx)(xh,{children:$e(e.orders)}),(0,ue.jsx)(xh,{children:ke(e.revenue)}),(0,ue.jsx)(xh,{children:Se(e.conversionRate)}),(0,ue.jsx)(xh,{children:ke(e.avgOrderValue)})]},i)))})]})}):(0,ue.jsx)(oh,{children:"No source data available"})]}),"menu"===W&&(0,ue.jsxs)(ah,{children:[(0,ue.jsx)(nh,{children:"Menu Analytics"}),N?(0,ue.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(null===(b=N.topProducts)||void 0===b?void 0:b.byViews)&&N.topProducts.byViews.length>0&&(0,ue.jsx)(Hh,{products:N.topProducts.byViews,metric:"views",limit:10}),(null===(f=N.topProducts)||void 0===f?void 0:f.byOrders)&&N.topProducts.byOrders.length>0&&(0,ue.jsx)(Hh,{products:N.topProducts.byOrders,metric:"orders",limit:10}),(null===(_=N.topProducts)||void 0===_?void 0:_.byRevenue)&&N.topProducts.byRevenue.length>0&&(0,ue.jsx)(Hh,{products:N.topProducts.byRevenue,metric:"revenue",limit:10}),(null===(y=N.topCategories)||void 0===y?void 0:y.byViews)&&N.topCategories.byViews.length>0&&(0,ue.jsx)(qh,{categories:N.topCategories.byViews,metric:"views",limit:10}),(null===(v=N.topCategories)||void 0===v?void 0:v.byOrders)&&N.topCategories.byOrders.length>0&&(0,ue.jsx)(qh,{categories:N.topCategories.byOrders,metric:"orders",limit:10}),(null===(j=N.topCategories)||void 0===j?void 0:j.byRevenue)&&N.topCategories.byRevenue.length>0&&(0,ue.jsx)(qh,{categories:N.topCategories.byRevenue,metric:"revenue",limit:10}),(null===(A=N.topProducts)||void 0===A?void 0:A.byRevenue)&&N.topProducts.byRevenue.length>0&&(0,ue.jsx)(Fh,{products:N.topProducts.byRevenue,title:"Top Products by Revenue (Detailed)",limit:20}),(null===(w=N.topCategories)||void 0===w?void 0:w.byRevenue)&&N.topCategories.byRevenue.length>0&&(0,ue.jsx)(Kh,{categories:N.topCategories.byRevenue,title:"Top Categories by Revenue (Detailed)",limit:20}),(null===(k=N.opportunities)||void 0===k||null===($=k.highViewsLowCart)||void 0===$?void 0:$.length)>0&&(0,ue.jsxs)("div",{style:{background:"#fef3c7",borderRadius:"12px",padding:"24px"},children:[(0,ue.jsx)("h4",{style:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:600},children:"Opportunities: High Views, Low Add-to-Cart Rate"}),(0,ue.jsx)(gh,{children:(0,ue.jsxs)(mh,{children:[(0,ue.jsx)(ph,{children:(0,ue.jsxs)("tr",{children:[(0,ue.jsx)(hh,{children:"Product Name"}),(0,ue.jsx)(hh,{children:"Views"}),(0,ue.jsx)(hh,{children:"Add to Cart"}),(0,ue.jsx)(hh,{children:"View\u2192Cart Rate"})]})}),(0,ue.jsx)("tbody",{children:N.opportunities.highViewsLowCart.slice(0,10).map(((e,i)=>(0,ue.jsxs)(uh,{children:[(0,ue.jsxs)(xh,{style:{fontWeight:600},children:[e.product_name||e.product_name_en||e.product_name_ar||`Product #${e.product_id}`,e.product_id&&(0,ue.jsxs)("div",{style:{fontSize:"11px",color:"#94a3b8",fontWeight:"normal"},children:["ID: ",e.product_id]})]}),(0,ue.jsx)(xh,{children:$e(e.views)}),(0,ue.jsx)(xh,{children:$e(e.addToCart)}),(0,ue.jsx)(xh,{children:Se(e.viewToCartRate)})]},i)))})]})})]}),(null===(S=N.opportunities)||void 0===S||null===(z=S.highCartLowOrder)||void 0===z?void 0:z.length)>0&&(0,ue.jsxs)("div",{style:{background:"#fef3c7",borderRadius:"12px",padding:"24px"},children:[(0,ue.jsx)("h4",{style:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:600},children:"Opportunities: High Add-to-Cart, Low Order Rate"}),(0,ue.jsx)(gh,{children:(0,ue.jsxs)(mh,{children:[(0,ue.jsx)(ph,{children:(0,ue.jsxs)("tr",{children:[(0,ue.jsx)(hh,{children:"Product Name"}),(0,ue.jsx)(hh,{children:"Add to Cart"}),(0,ue.jsx)(hh,{children:"Orders"}),(0,ue.jsx)(hh,{children:"Cart\u2192Order Rate"})]})}),(0,ue.jsx)("tbody",{children:N.opportunities.highCartLowOrder.slice(0,10).map(((e,i)=>(0,ue.jsxs)(uh,{children:[(0,ue.jsxs)(xh,{style:{fontWeight:600},children:[e.product_name||e.product_name_en||e.product_name_ar||`Product #${e.product_id}`,e.product_id&&(0,ue.jsxs)("div",{style:{fontSize:"11px",color:"#94a3b8",fontWeight:"normal"},children:["ID: ",e.product_id]})]}),(0,ue.jsx)(xh,{children:$e(e.addToCart)}),(0,ue.jsx)(xh,{children:$e(e.orders)}),(0,ue.jsx)(xh,{children:Se(e.cartToOrderRate)})]},i)))})]})})]})]}):(0,ue.jsx)(oh,{children:"No menu data available"})]}),"branches"===W&&(0,ue.jsxs)(ah,{children:[(0,ue.jsx)(nh,{children:"Branch Analytics"}),O&&O.length>0?(0,ue.jsx)(gh,{children:(0,ue.jsxs)(mh,{children:[(0,ue.jsx)(ph,{children:(0,ue.jsxs)("tr",{children:[(0,ue.jsx)(hh,{children:"Branch ID"}),(0,ue.jsx)(hh,{children:"Visits"}),(0,ue.jsx)(hh,{children:"Orders"}),(0,ue.jsx)(hh,{children:"Revenue"}),(0,ue.jsx)(hh,{children:"Avg Order Value"}),(0,ue.jsx)(hh,{children:"Conversion Rate"})]})}),(0,ue.jsx)("tbody",{children:O.map(((e,i)=>(0,ue.jsxs)(uh,{children:[(0,ue.jsx)(xh,{style:{fontWeight:600},children:e.branch_name||`Branch #${e.branch_id}`||"N/A"}),(0,ue.jsx)(xh,{children:$e(e.visits)}),(0,ue.jsx)(xh,{children:$e(e.orders)}),(0,ue.jsx)(xh,{children:ke(e.revenue)}),(0,ue.jsx)(xh,{children:ke(e.avgOrderValue)}),(0,ue.jsx)(xh,{children:Se(e.conversionRate)})]},i)))})]})}):(0,ue.jsx)(oh,{children:"No branch data available"})]}),"insights"===W&&(0,ue.jsxs)(ah,{children:[(0,ue.jsx)(nh,{children:"Insights & Recommendations"}),J&&J.length>0?(0,ue.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:J.map(((e,i)=>(0,ue.jsxs)(jh,{$type:e.type,children:[(0,ue.jsx)(Ah,{children:e.title}),(0,ue.jsx)(wh,{children:e.message}),(0,ue.jsxs)(kh,{children:[(0,ue.jsx)("strong",{children:"Suggested Action:"})," ",e.suggestion]})]},i)))}):(0,ue.jsx)(oh,{children:"No insights available. All metrics are performing well!"})]})]})}var Uh=a(97773),Xh=a(33180);const eu="#ffffff",iu="rgba(148,163,184,0.18)",au="#0f172a",nu="#64748b",ru="#94a3b8",ou="#5eabb1",tu="0 4px 20px rgba(15,23,42,0.07)",du="0 12px 32px rgba(15,23,42,0.13)",su=o.i7`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0);    }
`,lu=o.i7`
  from { opacity: 0; }
  to   { opacity: 1; }
`,cu=o.i7`
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0);     }
`,gu=(o.i7`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,o.i7`
  0%, 100% { box-shadow: 0 0 0 0 rgba(94,171,177,0); }
  50%       { box-shadow: 0 0 0 6px rgba(94,171,177,0.12); }
`,o.i7`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
`),mu=o.Ay.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  animation: ${su} 0.35s ease both;

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    max-width: 100%;
    gap: 14px;
    margin-top: 14px;
    box-sizing: border-box;
  }
`,pu=o.Ay.div`
  border-radius: 20px;
  padding: 28px 28px 24px;

  @media (max-width: ${t.L8.sm}px) {
    padding: 20px 18px 18px;
    border-radius: 16px;
  }

  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  color: #f8fafc;
  box-shadow: 0 16px 40px rgba(10, 15, 40, 0.28);
  position: relative;
  overflow: hidden;

  /* subtle grid lines */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  /* floating accent orb */
  &::after {
    content: "";
    position: absolute;
    top: -30px;
    right: -30px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(94,171,177,0.2) 0%, transparent 70%);
    animation: ${gu} 6s ease-in-out infinite;
    pointer-events: none;
  }
`,hu=o.Ay.h2`
  margin: 0;
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.6px;
  position: relative;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 19px;
    letter-spacing: -0.3px;
  }
`,uu=o.Ay.p`
  margin: 8px 0 0 0;
  opacity: 0.65;
  font-size: 13.5px;
  line-height: 1.6;
  max-width: 560px;
  position: relative;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 12px;
    margin-top: 6px;
  }
`,xu=o.Ay.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  position: relative;
`,bu=o.Ay.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11.5px;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  letter-spacing: 0.2px;
  backdrop-filter: blur(4px);
  transition: all 0.25s ease;
  animation: ${lu} 0.5s ease both;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(94, 171, 177, 0.4);
    transform: translateY(-1px);
  }
`,fu=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  @media (max-width: ${t.L8.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${t.L8.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
`,_u=o.Ay.div`
  background: ${eu};
  border: 1px solid ${iu};
  border-radius: 18px;
  padding: 18px 16px 16px;
  box-shadow: ${tu};
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  animation: ${su} 0.45s ease both;
  animation-delay: ${e=>e.$delay||"0s"};

  @media (max-width: ${t.L8.sm}px) {
    padding: 14px 12px 12px;
    border-radius: 14px;
  }

  /* top accent stripe */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3.5px;
    background: linear-gradient(90deg, ${e=>e.$accent||ou}, ${e=>e.$accentEnd||"rgba(94,171,177,0.4)"});
    border-radius: 18px 18px 0 0;
  }

  /* shimmer on hover */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
    transition: left 0.5s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${du};

    &::after {
      left: 100%;
    }
  }
`,yu=o.Ay.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: ${e=>e.$bg||"rgba(94,171,177,0.12)"};
  color: ${e=>e.$color||ou};
  margin-bottom: 12px;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  ${_u}:hover & {
    transform: scale(1.1);
  }
`,vu=o.Ay.div`
  font-size: 11.5px;
  font-weight: 600;
  color: ${nu};
  letter-spacing: 0.4px;
  text-transform: uppercase;
`,ju=o.Ay.div`
  margin-top: 6px;
  font-size: 30px;
  line-height: 1;
  font-weight: 800;
  color: ${au};
  letter-spacing: -1px;

  @media (max-width: ${t.L8.sm}px) {
    font-size: 24px;
  }
`,Au=o.Ay.div`
  margin-top: 8px;
  font-size: 11px;
  color: ${ru};
  line-height: 1.35;
`,wu=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${t.L8.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${t.L8.sm}px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`,ku=o.Ay.button`
  border: none;
  background: linear-gradient(
    135deg,
    ${e=>e.$from||"#0c0f1d"} 0%,
    ${e=>e.$to||"#1e293b"} 100%
  );
  color: #f8fafc;
  border-radius: 14px;
  padding: 18px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: center;
  line-height: 1.35;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.15px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.16);
  position: relative;
  overflow: hidden;
  animation: ${su} 0.5s ease both;

  /* shine sweep on hover */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.5s ease;
    pointer-events: none;
  }

  @media (max-width: ${t.L8.sm}px) {
    padding: 14px 10px;
    font-size: 12px;
    border-radius: 12px;
    gap: 6px;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.25);
    filter: brightness(1.08);

    &::after {
      left: 120%;
    }
  }
  &:active {
    transform: scale(0.97);
  }
`,$u=o.Ay.span`
  font-size: 22px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Su=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: ${t.L8.lg}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${t.L8.md}px) {
    grid-template-columns: 1fr;
  }
`,zu=(o.Ay.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 14px;

  @media (max-width: ${t.L8.md}px) {
    grid-template-columns: 1fr;
  }
`,o.Ay.div`
  background: ${eu};
  border: 1px solid ${iu};
  border-radius: 18px;
  padding: 22px;
  box-shadow: ${tu};
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
  animation: ${su} 0.5s ease both;
  animation-delay: ${e=>e.$delay||"0s"};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${du};
  }
`),Cu=o.Ay.h3`
  margin: 0 0 4px 0;
  font-size: 15px;
  font-weight: 700;
  color: ${au};
  letter-spacing: -0.2px;
`,Mu=o.Ay.p`
  margin: 0 0 14px 0;
  font-size: 12px;
  color: ${ru};
  line-height: 1.45;
`,Eu=o.Ay.div`
  width: 100%;
  height: ${e=>e.$tall?"min(300px, 52vw)":"min(250px, 48vw)"};
  min-height: 200px;

  @media (max-width: ${t.L8.sm}px) {
    height: 220px;
    min-height: 180px;
  }
`,Du=(o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,o.Ay.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 2fr 36px;
  gap: 10px;
  align-items: center;

  @media (min-width: 520px) {
    grid-template-columns: 110px 1fr 36px;
  }
`,o.Ay.div`
  font-size: 12px;
  font-weight: 500;
  color: ${nu};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,o.Ay.div`
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: #e2e8f0;
  overflow: hidden;
`,o.Ay.div`
  height: 100%;
  border-radius: 999px;
  width: ${e=>`${e.$width||0}%`};
  background: linear-gradient(90deg, ${ou} 0%, #38bdf8 100%);
  transition: width 0.6s cubic-bezier(0.16,1,0.3,1);
`,o.Ay.div`
  font-size: 12px;
  font-weight: 700;
  color: ${au};
  text-align: right;
`,o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
`,o.Ay.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: ${e=>`conic-gradient(#10b981 0 ${e.$availableDeg}deg, #f43f5e ${e.$availableDeg}deg 360deg)`};
  position: relative;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &::after {
    content: "";
    position: absolute;
    inset: 22px;
    border-radius: 50%;
    background: #ffffff;
  }
`,o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 120px;
`,o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: ${nu};
  font-weight: 500;

  span:last-child {
    font-weight: 700;
    color: ${au};
  }
`,o.Ay.span`
  width: 22px;
  height: 3px;
  border-radius: 2px;
  margin-right: 8px;
  display: inline-block;
  flex-shrink: 0;
  /* three dashes via repeating gradient */
  background: repeating-linear-gradient(
    90deg,
    ${e=>e.$color||ru} 0px,
    ${e=>e.$color||ru} 6px,
    transparent 6px,
    transparent 8px
  );
`,o.Ay.span`
  display: inline-flex;
  align-items: center;
`,o.Ay.div`
  font-size: 11.5px;
  font-weight: 700;
  color: ${ru};
  letter-spacing: 0.8px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
  animation: ${cu} 0.4s ease both;
  margin-top: 4px;

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, ${iu}, transparent);
    border-radius: 1px;
  }
`),Bu=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px 16px;
  padding: 14px 16px;
  background: ${eu};
  border: 1px solid ${iu};
  border-radius: 16px;
  box-shadow: ${tu};

  @media (max-width: ${t.L8.sm}px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Tu=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 140px;

  @media (max-width: ${t.L8.sm}px) {
    min-width: 0;
    width: 100%;
  }
`,Ru=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;

  @media (max-width: ${t.L8.sm}px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
`,Lu=o.Ay.span`
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: ${ru};
`,Hu=o.Ay.select`
  height: 38px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid ${iu};
  background: #f8fafc;
  color: ${au};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: rgba(94, 171, 177, 0.45);
  }

  &:focus {
    border-color: ${ou};
    box-shadow: 0 0 0 3px rgba(94, 171, 177, 0.2);
  }
`,qu=o.Ay.input`
  height: 38px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid ${iu};
  background: #f8fafc;
  color: ${au};
  font-size: 13px;
  outline: none;
  min-width: 132px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-color: ${ou};
    box-shadow: 0 0 0 3px rgba(94, 171, 177, 0.2);
  }
`,Fu=o.Ay.p`
  margin: 0;
  width: 100%;
  flex-basis: 100%;
  font-size: 12px;
  color: ${nu};
  line-height: 1.45;
`,Ku={borderRadius:10,border:"1px solid #e2e8f0",fontSize:12,boxShadow:"0 4px 16px rgba(15,23,42,0.1)"},Nu={headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}};function Pu(e){const i=null===e||void 0===e?void 0:e.data;return Array.isArray(i)?i:null!=i&&Array.isArray(i.data)?i.data:[]}const Ou=[{key:"categories",label:"Categories count",hint:"Menu sections in your catalog",accent:"#5eabb1",iconBg:"rgba(94,171,177,0.12)",iconColor:"#5eabb1",Icon:G.M1j},{key:"products",label:"Products count",hint:"All items in catalog",accent:"#3b82f6",iconBg:"rgba(59,130,246,0.12)",iconColor:"#3b82f6",Icon:G.K8N},{key:"visits",label:"Total visits",hint:"Menu page visits (all time)",accent:"#8b5cf6",iconBg:"rgba(139,92,246,0.12)",iconColor:"#8b5cf6",Icon:G.eO2},{key:"orders",label:"Total orders",hint:"Orders placed (all time)",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",iconColor:"#f59e0b",Icon:G.c},{key:"interactions",label:"User interactions",hint:"Feedback entries + questions & suggestions",accent:"#06b6d4",iconBg:"rgba(6,182,212,0.12)",iconColor:"#06b6d4",Icon:G.PrD},{key:"registered",label:"Registered customers",hint:"Customers signed up on your menu",accent:"#10b981",iconBg:"rgba(16,185,129,0.12)",iconColor:"#10b981",Icon:G.v4f}],Iu="2000-01-01",Ju="2099-12-31";function Qu(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Wu(){const e=new Date,i=e.getDay(),a=0===i?-6:1-i,n=new Date(e.getFullYear(),e.getMonth(),e.getDate()+a);n.setHours(0,0,0,0);const r=new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59);return{start:Qu(n),end:Qu(r)}}function Yu(e){try{const[i,a,n]=e.split("-").map(Number);return new Date(i,a-1,n).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}catch{return e}}const Zu=[{value:"this_week",label:"This week"},{value:"last_7",label:"Last 7 days"},{value:"last_30",label:"Last 30 days"},{value:"custom",label:"Custom range"}],Gu=[{value:5,label:"Top 5"},{value:8,label:"Top 8"},{value:12,label:"Top 12"},{value:16,label:"Top 16"},{value:20,label:"Top 20"}];function Vu(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return e?e.length>i?`${e.slice(0,i-1)}\u2026`:e:"\u2014"}function Uu(e,i){let{isLoading:a,isError:n}=i;return a?"\u2026":n?"\u2014":null===e||void 0===e||Number.isNaN(e)?(0,ue.jsx)(Xu,{end:0}):(0,ue.jsx)(Xu,{end:Number(e)||0})}function Xu(e){let{end:i,duration:a=1200}=e;const[r,o]=(0,n.useState)(0),t=(0,n.useRef)(0);return(0,n.useEffect)((()=>{if(i===t.current)return;const e=t.current;t.current=i;const n=performance.now(),r=t=>{const d=t-n,s=Math.min(d/a,1),l=1-Math.pow(1-s,3),c=Math.round(e+(i-e)*l);o(c),s<1&&requestAnimationFrame(r)};requestAnimationFrame(r)}),[i,a]),(0,ue.jsx)(ue.Fragment,{children:r.toLocaleString()})}const ex=[{label:"Categories",section:"Categories",Icon:d.RdN,from:"#0ea5e9",to:"#0284c7"},{label:"Products",section:"Products",Icon:G.K8N,from:"#8b5cf6",to:"#6d28d9"},{label:"Settings",section:"Settings",Icon:d.yRe,from:"#5eabb1",to:"#0d7c82"},{label:"Reports",section:"Report",Icon:d.JP9,from:"#f59e0b",to:"#d97706"}];function ix(e){let{userInformation:i,setSection:a}=e;const o=null===i||void 0===i?void 0:i.restaurant_id,t=(0,n.useMemo)((()=>Wu()),[]),[d,s]=(0,n.useState)("this_week"),[l,c]=(0,n.useState)(t.start),[g,m]=(0,n.useState)(t.end),[p,h]=(0,n.useState)(12),{response:u,isLoading:x}=ri({onSuccess:()=>{},restaurantId:o}),{response:b,isLoading:f}=oo({onSuccess:()=>{},restaurantId:o}),_=Pu(u),y=Pu(b),v=()=>({headers:{Authorization:`Bearer ${(0,he.getCookie)("accessToken")}`}}),j=(0,ni.I)({queryKey:["dashboard","visits",o],queryFn:async()=>{var e;const{data:i}=await r.A.get((0,Qe.V9)(o,Iu,Ju),Nu);return Number(null!==(e=null===i||void 0===i?void 0:i.totalVisits)&&void 0!==e?e:0)},enabled:Boolean(o),staleTime:6e4,retry:1}),A=(0,ni.I)({queryKey:["dashboard","orders-count",o],queryFn:async()=>{var e,i,a;const{data:n}=await r.A.get((0,Qe.Z6)(o),v());return Number(null!==(e=null!==(i=null===n||void 0===n?void 0:n.count)&&void 0!==i?i:null===n||void 0===n||null===(a=n.orders)||void 0===a?void 0:a.length)&&void 0!==e?e:0)},enabled:Boolean(o),staleTime:6e4,retry:1}),w=(0,ni.I)({queryKey:["dashboard","feedbacks-count",o],queryFn:async()=>{const{data:e}=await r.A.get((0,Qe.Ue)(o)),i=null===e||void 0===e?void 0:e.data;return Array.isArray(i)?i.length:0},enabled:Boolean(o),staleTime:6e4,retry:1}),k=(0,ni.I)({queryKey:["dashboard","threads-total",o],queryFn:async()=>{var e;const{data:i}=await r.A.get((0,Qe.Nh)(1,1),v());return Number(null!==(e=null===i||void 0===i?void 0:i.total)&&void 0!==e?e:0)},enabled:Boolean(o),staleTime:6e4,retry:1}),$=(0,ni.I)({queryKey:["dashboard","registered-customers-count",o],queryFn:async()=>{const{data:e}=await r.A.get(Qe.BO,v());return"number"===typeof(null===e||void 0===e?void 0:e.total)?e.total:Array.isArray(null===e||void 0===e?void 0:e.data)?e.data.length:0},enabled:Boolean(o),staleTime:6e4,retry:1}),S=(0,n.useMemo)((()=>function(e,i,a){const n=new Date,r=Qu(n);if("this_week"===e)return Wu();if("last_7"===e){const e=new Date(n);return e.setDate(n.getDate()-6),{start:Qu(e),end:r}}if("last_30"===e){const e=new Date(n);return e.setDate(n.getDate()-29),{start:Qu(e),end:r}}if("custom"===e){if(i&&a)return i<=a?{start:i,end:a}:{start:a,end:i};if(i)return{start:i,end:i};if(a)return{start:a,end:a}}return Wu()}(d,l,g)),[d,l,g]),z=(null===i||void 0===i?void 0:i.Lang)||"EN",C=(0,ni.I)({queryKey:["dashboard","visit-daily",o,S.start,S.end],queryFn:async()=>{const{data:e}=await r.A.get((0,Qe.BW)(o,S.start,S.end),Nu);return Array.isArray(null===e||void 0===e?void 0:e.data)?e.data:[]},enabled:Boolean(o),staleTime:6e4,retry:1}),M=(0,ni.I)({queryKey:["dashboard","top-product-visits",o,S.start,S.end,p],queryFn:async()=>{const{data:e}=await r.A.get((0,Qe.an)(o,S.start,S.end,p));return Array.isArray(null===e||void 0===e?void 0:e.data)?e.data:[]},enabled:Boolean(o),staleTime:6e4,retry:1}),E=(0,ni.I)({queryKey:["dashboard","top-category-visits",o,S.start,S.end,p],queryFn:async()=>{const{data:e}=await r.A.get((0,Qe.fY)(o,S.start,S.end,p),Nu);return Array.isArray(null===e||void 0===e?void 0:e.data)?e.data:[]},enabled:Boolean(o),staleTime:6e4,retry:1}),D=_.length>0?(y.length/_.length).toFixed(1):"0",B=e=>{switch(e){case"categories":return Uu(_.length,{isLoading:x});case"products":return Uu(y.length,{isLoading:f});case"visits":return Uu(j.data,{isLoading:j.isLoading,isError:j.isError});case"orders":return Uu(A.data,{isLoading:A.isLoading,isError:A.isError});case"interactions":var i,a;return Uu((w.isError?0:Number(null!==(i=w.data)&&void 0!==i?i:0))+(k.isError?0:Number(null!==(a=k.data)&&void 0!==a?a:0)),{isLoading:w.isLoading||k.isLoading,isError:w.isError&&k.isError});case"registered":return Uu($.data,{isLoading:$.isLoading,isError:$.isError});default:return"0"}},T=(0,n.useMemo)((()=>(M.data||[]).map((e=>{const i=function(e,i){return"AR"===i?e.ar_name||e.en_name||e.name||"\u2014":e.en_name||e.ar_name||e.name||"\u2014"}(e,z);return{name:Vu(i,18),fullName:i,visits:Number(e.total)||0}}))),[M.data,z]),R=(0,n.useMemo)((()=>(E.data||[]).map((e=>{const i=function(e,i){return"AR"===i?e.ar_category||e.en_category||e.categoryName||"\u2014":e.en_category||e.ar_category||e.categoryName||"\u2014"}(e,z);return{name:Vu(i,18),fullName:i,visits:Number(e.totalVisits)||0}}))),[E.data,z]),L=(0,n.useMemo)((()=>(C.data||[]).map((e=>({...e,visits:Number(e.visits)||0,label:Yu(e.date)})))),[C.data]),H=(0,n.useMemo)((()=>L.reduce(((e,i)=>e+i.visits),0)),[L]),q=L.length>14;return(0,ue.jsxs)(mu,{children:[(0,ue.jsxs)(pu,{children:[(0,ue.jsxs)(hu,{children:["Welcome back, ",(null===i||void 0===i?void 0:i.username)||"Restaurant Admin"," \ud83d\udc4b"]}),(0,ue.jsx)(uu,{children:"Real-time overview of your menu catalog and how guests browse your menu over time."}),(0,ue.jsxs)(xu,{children:[(0,ue.jsxs)(bu,{children:["\ud83c\udfea ID: ",o||"\u2014"]}),(0,ue.jsxs)(bu,{children:["\ud83c\udfa8 Theme ",(null===i||void 0===i?void 0:i.template_id)||"\u2014"]}),(0,ue.jsxs)(bu,{children:["\ud83c\udf10 ",(null===i||void 0===i?void 0:i.Lang)||"\u2014"]}),(0,ue.jsxs)(bu,{children:["\ud83d\udcca Avg ",D," products / category"]})]})]}),(0,ue.jsx)(fu,{children:Ou.map(((e,i)=>{let{key:a,label:n,hint:r,accent:o,iconBg:t,iconColor:d,Icon:s}=e;return(0,ue.jsxs)(_u,{$accent:o,$delay:.07*i+"s",children:[(0,ue.jsx)(yu,{$bg:t,$color:d,children:(0,ue.jsx)(s,{})}),(0,ue.jsx)(vu,{children:n}),(0,ue.jsx)(ju,{children:B(a)}),(0,ue.jsx)(Au,{children:r})]},a)}))}),(0,ue.jsx)(Du,{children:"Quick actions"}),(0,ue.jsx)(wu,{children:ex.map((e=>{let{label:i,section:n,Icon:r,from:o,to:t}=e;return(0,ue.jsxs)(ku,{type:"button",$from:o,$to:t,onClick:()=>a(n),children:[(0,ue.jsx)($u,{children:(0,ue.jsx)(r,{})}),i]},n)}))}),(0,ue.jsx)(Du,{children:"Visit analytics"}),(0,ue.jsxs)(Bu,{children:[(0,ue.jsxs)(Tu,{children:[(0,ue.jsx)(Lu,{children:"Period"}),(0,ue.jsx)(Hu,{value:d,onChange:e=>s(e.target.value),"aria-label":"Visit analytics period",children:Zu.map((e=>(0,ue.jsx)("option",{value:e.value,children:e.label},e.value)))})]}),"custom"===d&&(0,ue.jsxs)(Ru,{children:[(0,ue.jsxs)(Tu,{children:[(0,ue.jsx)(Lu,{children:"From"}),(0,ue.jsx)(qu,{type:"date",value:l,onChange:e=>c(e.target.value),"aria-label":"Custom range start"})]}),(0,ue.jsxs)(Tu,{children:[(0,ue.jsx)(Lu,{children:"To"}),(0,ue.jsx)(qu,{type:"date",value:g,onChange:e=>m(e.target.value),"aria-label":"Custom range end"})]})]}),(0,ue.jsxs)(Tu,{children:[(0,ue.jsx)(Lu,{children:"Top products / categories"}),(0,ue.jsx)(Hu,{value:p,onChange:e=>h(Number(e.target.value)),"aria-label":"Number of items in top lists",children:Gu.map((e=>(0,ue.jsx)("option",{value:e.value,children:e.label},e.value)))})]}),(0,ue.jsxs)(Fu,{children:["Showing ",(0,ue.jsx)("strong",{children:S.start})," \u2192 ",(0,ue.jsx)("strong",{children:S.end}),H>0&&(0,ue.jsxs)(ue.Fragment,{children:[" ","\xb7 ",(0,ue.jsx)("strong",{children:H})," menu visits in range"]})]})]}),(0,ue.jsxs)(Su,{children:[(0,ue.jsxs)(zu,{$delay:"0.1s",children:[(0,ue.jsx)(Cu,{children:"Menu visits over time"}),(0,ue.jsx)(Mu,{children:"Daily menu loads (restaurant page visits) for the selected period."}),(0,ue.jsx)(Eu,{$tall:!0,children:C.isLoading?(0,ue.jsx)(Mu,{children:"Loading\u2026"}):C.isError?(0,ue.jsx)(Mu,{children:"Could not load visit data."}):0===L.length?(0,ue.jsx)(Mu,{children:"No days in range."}):(0,ue.jsx)(Lo.u,{width:"100%",height:"100%",children:(0,ue.jsxs)(Uh.Q,{data:L,margin:{top:8,right:8,left:-10,bottom:q?8:4},children:[(0,ue.jsx)("defs",{children:(0,ue.jsxs)("linearGradient",{id:"visitAreaGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,ue.jsx)("stop",{offset:"0%",stopColor:"#8b5cf6",stopOpacity:.35}),(0,ue.jsx)("stop",{offset:"100%",stopColor:"#8b5cf6",stopOpacity:0})]})}),(0,ue.jsx)(qo.d,{strokeDasharray:"3 3",stroke:"#f1f5f9"}),(0,ue.jsx)(Fo.W,{dataKey:"label",tick:{fontSize:q?9:11,fill:"#64748b"},axisLine:!1,tickLine:!1,interval:"preserveStartEnd",angle:q?-40:0,textAnchor:q?"end":"middle",height:q?52:28}),(0,ue.jsx)(Ko.h,{allowDecimals:!1,tick:{fontSize:11,fill:"#64748b"},axisLine:!1,tickLine:!1}),(0,ue.jsx)(No.m,{contentStyle:Ku,formatter:e=>[e,"Visits"],labelFormatter:(e,i)=>{var a,n;const r=null===i||void 0===i||null===(a=i[0])||void 0===a||null===(n=a.payload)||void 0===n?void 0:n.date;return r?`${Yu(r)} (${r})`:e},cursor:{stroke:"#8b5cf6",strokeWidth:1,strokeDasharray:"4 2"}}),(0,ue.jsx)(Xh.Gk,{type:"monotone",dataKey:"visits",stroke:"#7c3aed",strokeWidth:2,fill:"url(#visitAreaGrad)",dot:{r:2,fill:"#7c3aed",strokeWidth:0},activeDot:{r:4}})]})})})]}),(0,ue.jsxs)(zu,{$delay:"0.2s",children:[(0,ue.jsx)(Cu,{children:"Top products by visits"}),(0,ue.jsx)(Mu,{children:"Most opened product detail views in the selected period."}),(0,ue.jsx)(Eu,{$tall:!0,children:M.isLoading?(0,ue.jsx)(Mu,{children:"Loading\u2026"}):0===T.length?(0,ue.jsx)(Mu,{children:"No product visits in this period yet."}):(0,ue.jsx)(Lo.u,{width:"100%",height:"100%",children:(0,ue.jsxs)(Ho.E,{data:T,margin:{top:4,right:6,left:-10,bottom:0},children:[(0,ue.jsx)("defs",{children:(0,ue.jsxs)("linearGradient",{id:"barGradProducts",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,ue.jsx)("stop",{offset:"0%",stopColor:"#6366f1"}),(0,ue.jsx)("stop",{offset:"100%",stopColor:"#38bdf8"})]})}),(0,ue.jsx)(qo.d,{strokeDasharray:"3 3",stroke:"#f1f5f9",vertical:!1}),(0,ue.jsx)(Fo.W,{dataKey:"name",tick:{fontSize:11,fill:"#64748b"},axisLine:!1,tickLine:!1}),(0,ue.jsx)(Ko.h,{allowDecimals:!1,tick:{fontSize:11,fill:"#64748b"},axisLine:!1,tickLine:!1}),(0,ue.jsx)(No.m,{contentStyle:Ku,formatter:e=>[e,"Visits"],labelFormatter:(e,i)=>{var a,n;return(null===i||void 0===i||null===(a=i[0])||void 0===a||null===(n=a.payload)||void 0===n?void 0:n.fullName)||e},cursor:{fill:"rgba(99,102,241,0.07)"}}),(0,ue.jsx)(Po.yP,{dataKey:"visits",fill:"url(#barGradProducts)",radius:[8,8,0,0]})]})})})]}),(0,ue.jsxs)(zu,{$delay:"0.3s",children:[(0,ue.jsx)(Cu,{children:"Top categories by visits"}),(0,ue.jsx)(Mu,{children:"Most viewed category sections in the selected period."}),(0,ue.jsx)(Eu,{$tall:!0,children:E.isLoading?(0,ue.jsx)(Mu,{children:"Loading\u2026"}):0===R.length?(0,ue.jsx)(Mu,{children:"No category visits in this period yet."}):(0,ue.jsx)(Lo.u,{width:"100%",height:"100%",children:(0,ue.jsxs)(Ho.E,{data:R,margin:{top:4,right:6,left:-10,bottom:0},children:[(0,ue.jsx)("defs",{children:(0,ue.jsxs)("linearGradient",{id:"barGradCategories",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,ue.jsx)("stop",{offset:"0%",stopColor:"#5eabb1"}),(0,ue.jsx)("stop",{offset:"100%",stopColor:"#22d3ee"})]})}),(0,ue.jsx)(qo.d,{strokeDasharray:"3 3",stroke:"#f1f5f9",vertical:!1}),(0,ue.jsx)(Fo.W,{dataKey:"name",tick:{fontSize:11,fill:"#64748b"},axisLine:!1,tickLine:!1}),(0,ue.jsx)(Ko.h,{allowDecimals:!1,tick:{fontSize:11,fill:"#64748b"},axisLine:!1,tickLine:!1}),(0,ue.jsx)(No.m,{contentStyle:Ku,formatter:e=>[e,"Visits"],labelFormatter:(e,i)=>{var a,n;return(null===i||void 0===i||null===(a=i[0])||void 0===a||null===(n=a.payload)||void 0===n?void 0:n.fullName)||e},cursor:{fill:"rgba(94,171,177,0.07)"}}),(0,ue.jsx)(Po.yP,{dataKey:"visits",fill:"url(#barGradCategories)",radius:[8,8,0,0]})]})})})]})]})]})}function ax(){const[e,i]=(0,n.useState)("Dashboard"),[a,o]=(0,n.useState)([]),[t,d]=(0,n.useState)(!1),[s,l]=(0,n.useState)({}),c=(0,lo.Zp)();(0,n.useEffect)((()=>{const e=(0,he.getCookie)("userInfo")||"{}";l(JSON.parse(e))}),[]);const[T,R]=(0,n.useState)(null);(0,n.useEffect)((()=>{const e=null===s||void 0===s?void 0:s.restaurant_id;if(!e)return;const i=(0,he.getCookie)("accessToken");i&&r.A.get(`https://77.37.51.25/restaurants/${e}`,{headers:{Authorization:`Bearer ${i}`}}).then((e=>{let{data:i}=e;try{var a,n;const e="string"===typeof(null===i||void 0===i||null===(a=i.data)||void 0===a?void 0:a.features)?JSON.parse(i.data.features):null===i||void 0===i||null===(n=i.data)||void 0===n?void 0:n.features;R(e||{})}catch{R({})}})).catch((()=>R({})))}),[null===s||void 0===s?void 0:s.restaurant_id]);const L=(0,n.useMemo)((()=>!!T&&!(!T.feedback&&!T.user_registration)),[T]),H="Feedbacks"===e||"QuestionsSuggestions"===e||"Orders"===e||"Customers"===e||"RegisteredCustomers"===e||"Analytics"===e,q=()=>{d(!t)},F=e=>{!["Feedbacks","QuestionsSuggestions","Orders","Customers","RegisteredCustomers","Analytics"].includes(e)||L?(i(e),d(!1)):d(!1)};(0,n.useEffect)((()=>{if(t){const e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}}),[t]);return(0,ue.jsxs)(g,{children:[(0,ue.jsx)(C,{$open:t,onClick:()=>d(!1),"aria-hidden":"true"}),(0,ue.jsxs)(M,{$showMobileSidebar:t,role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[(0,ue.jsxs)(p,{children:[(0,ue.jsx)(h,{children:"Menugic"}),(0,ue.jsx)(w,{onClick:q,"aria-label":"Close menu"})]}),(0,ue.jsxs)(u,{children:[(0,ue.jsxs)(x,{$active:"Dashboard"===e,onClick:()=>F("Dashboard"),children:[(0,ue.jsx)(j,{}),(0,ue.jsx)(b,{children:"Dashboard"})]}),(0,ue.jsxs)(x,{$active:"Categories"===e,onClick:()=>F("Categories"),children:[(0,ue.jsx)(j,{}),(0,ue.jsx)(b,{children:"Categories"})]}),(0,ue.jsxs)(x,{$active:"Products"===e,onClick:()=>F("Products"),children:[(0,ue.jsx)(j,{}),(0,ue.jsx)(b,{children:"Products"})]}),(0,ue.jsxs)(x,{$active:"Settings"===e,onClick:()=>F("Settings"),children:[(0,ue.jsx)(j,{}),(0,ue.jsx)(b,{children:"Settings"})]}),(0,ue.jsxs)(x,{$active:"Report"===e,onClick:()=>F("Report"),children:[(0,ue.jsx)(j,{}),(0,ue.jsx)(b,{children:"Report"})]}),(0,ue.jsxs)(x,{$active:"Feedbacks"===e,$disabled:!L,onClick:()=>F("Feedbacks"),children:[(0,ue.jsx)(j,{}),(0,ue.jsxs)(b,{children:["Feedbacks",!L&&(0,ue.jsx)("span",{style:{fontSize:"12px",color:"#999",marginLeft:"8px"},children:"(VIP package)"})]})]}),(0,ue.jsxs)(x,{$active:"QuestionsSuggestions"===e,$disabled:!L,onClick:()=>F("QuestionsSuggestions"),children:[(0,ue.jsx)(j,{}),(0,ue.jsxs)(b,{children:["Questions & Suggestions",!L&&(0,ue.jsx)("span",{style:{fontSize:"12px",color:"#999",marginLeft:"8px"},children:"(VIP package)"})]})]}),(0,ue.jsxs)(x,{$active:"Orders"===e,$disabled:!L,onClick:()=>F("Orders"),children:[(0,ue.jsx)(j,{}),(0,ue.jsxs)(b,{children:["Orders",!L&&(0,ue.jsx)("span",{style:{fontSize:"12px",color:"#999",marginLeft:"8px"},children:"(VIP package)"})]})]}),(0,ue.jsxs)(x,{$active:"Customers"===e,$disabled:!L,onClick:()=>F("Customers"),children:[(0,ue.jsx)(j,{}),(0,ue.jsxs)(b,{children:["Customers",!L&&(0,ue.jsx)("span",{style:{fontSize:"12px",color:"#999",marginLeft:"8px"},children:"(VIP package)"})]})]}),(0,ue.jsxs)(x,{$active:"RegisteredCustomers"===e,$disabled:!L,onClick:()=>F("RegisteredCustomers"),children:[(0,ue.jsx)(j,{}),(0,ue.jsxs)(b,{children:["Registered customers",!L&&(0,ue.jsx)("span",{style:{fontSize:"12px",color:"#999",marginLeft:"8px"},children:"(VIP package)"})]})]}),(0,ue.jsxs)(x,{$active:"Analytics"===e,$disabled:!L,onClick:()=>F("Analytics"),children:[(0,ue.jsx)(j,{}),(0,ue.jsxs)(b,{children:["Analytics",!L&&(0,ue.jsx)("span",{style:{fontSize:"12px",color:"#999",marginLeft:"8px"},children:"(VIP package)"})]})]})]}),(0,ue.jsxs)(f,{children:[(0,ue.jsx)(A,{}),(0,ue.jsx)($,{children:(null===s||void 0===s?void 0:s.username)||"user"}),(0,ue.jsx)(z,{onClick:()=>{localStorage.removeItem("isLoggedIn"),(0,he.Y)("accessToken"),(0,he.Y)("userInfo"),c(co.Qy)},children:"Logout"})]})]}),(0,ue.jsxs)(m,{children:[(0,ue.jsx)(p,{children:(0,ue.jsx)(h,{children:"Menugic"})}),(0,ue.jsxs)(u,{children:[(0,ue.jsxs)(x,{$active:"Dashboard"===e,onClick:()=>i("Dashboard"),children:[(0,ue.jsx)(j,{}),(0,ue.jsx)(b,{children:"Dashboard"})]}),(0,ue.jsxs)(x,{$active:"Categories"===e,onClick:()=>i("Categories"),children:[(0,ue.jsx)(j,{}),(0,ue.jsx)(b,{children:"Categories"})]}),(0,ue.jsxs)(x,{$active:"Products"===e,onClick:()=>i("Products"),children:[(0,ue.jsx)(j,{}),(0,ue.jsx)(b,{children:"Products"})]}),(0,ue.jsxs)(x,{$active:"Settings"===e,onClick:()=>i("Settings"),children:[(0,ue.jsx)(j,{}),(0,ue.jsx)(b,{children:"Settings"})]}),(0,ue.jsxs)(x,{$active:"Report"===e,onClick:()=>i("Report"),children:[(0,ue.jsx)(j,{}),(0,ue.jsx)(b,{children:"Report"})]}),(0,ue.jsxs)(x,{$active:"Feedbacks"===e,$disabled:!L,onClick:()=>L?i("Feedbacks"):null,children:[(0,ue.jsx)(j,{}),(0,ue.jsxs)(b,{children:["Feedbacks",!L&&(0,ue.jsx)("span",{style:{fontSize:"12px",color:"#999",marginLeft:"8px"},children:"(VIP package)"})]})]}),(0,ue.jsxs)(x,{$active:"QuestionsSuggestions"===e,$disabled:!L,onClick:()=>L?i("QuestionsSuggestions"):null,children:[(0,ue.jsx)(j,{}),(0,ue.jsxs)(b,{children:["Questions & Suggestions",!L&&(0,ue.jsx)("span",{style:{fontSize:"12px",color:"#999",marginLeft:"8px"},children:"(VIP package)"})]})]}),(0,ue.jsxs)(x,{$active:"Orders"===e,$disabled:!L,onClick:()=>L?i("Orders"):null,children:[(0,ue.jsx)(j,{}),(0,ue.jsxs)(b,{children:["Orders",!L&&(0,ue.jsx)("span",{style:{fontSize:"12px",color:"#999",marginLeft:"8px"},children:"(VIP package)"})]})]}),(0,ue.jsxs)(x,{$active:"Customers"===e,$disabled:!L,onClick:()=>L?i("Customers"):null,children:[(0,ue.jsx)(j,{}),(0,ue.jsxs)(b,{children:["Customers",!L&&(0,ue.jsx)("span",{style:{fontSize:"12px",color:"#999",marginLeft:"8px"},children:"(VIP package)"})]})]}),(0,ue.jsxs)(x,{$active:"RegisteredCustomers"===e,$disabled:!L,onClick:()=>L?i("RegisteredCustomers"):null,children:[(0,ue.jsx)(j,{}),(0,ue.jsxs)(b,{children:["Registered customers",!L&&(0,ue.jsx)("span",{style:{fontSize:"12px",color:"#999",marginLeft:"8px"},children:"(VIP package)"})]})]}),(0,ue.jsxs)(x,{$active:"Analytics"===e,$disabled:!L,onClick:()=>L?i("Analytics"):null,children:[(0,ue.jsx)(j,{}),(0,ue.jsxs)(b,{children:["Analytics",!L&&(0,ue.jsx)("span",{style:{fontSize:"12px",color:"#999",marginLeft:"8px"},children:"(VIP package)"})]})]})]}),(0,ue.jsxs)(f,{children:[(0,ue.jsx)(A,{}),(0,ue.jsx)($,{children:(null===s||void 0===s?void 0:s.username)||"user"})]})]}),(0,ue.jsxs)(_,{children:[(0,ue.jsxs)(y,{children:[(0,ue.jsxs)(v,{children:["Admin / ",{Dashboard:"Dashboard",Categories:"Categories",Products:"Products",Settings:"Settings",Report:"Report",Feedbacks:"Feedbacks",QuestionsSuggestions:"Questions & Suggestions",Orders:"Orders",Customers:"Customers",RegisteredCustomers:"Registered customers",Analytics:"Analytics"}[e]||e]}),(0,ue.jsx)(S,{onClick:()=>{localStorage.removeItem("isLoggedIn"),(0,he.Y)("accessToken"),(0,he.Y)("userInfo"),c(co.Qy)},children:"Logout"}),(0,ue.jsx)(k,{onClick:q,"aria-label":"Open menu","aria-expanded":t,children:(0,ue.jsx)("span",{})})]}),"Dashboard"==e&&(0,ue.jsx)(ix,{userInformation:s,setSection:i}),"Products"==e&&(0,ue.jsx)(Qi,{setProducts:o,products:a}),"Settings"==e&&(0,ue.jsx)(wr,{userInformation:s,setSection:i}),"Categories"==e&&(0,ue.jsx)(so,{setProducts:o}),"Report"==e&&(0,ue.jsx)(Ro,{userInformation:s}),H&&!L&&(0,ue.jsxs)(E,{children:[(0,ue.jsx)(D,{children:"Feature unavailable"}),(0,ue.jsxs)(B,{children:["This section is available only for Theme 3 or 4 restaurants (VIP package). Please upgrade your package to enable ","Feedbacks"===e&&"Feedbacks","QuestionsSuggestions"===e&&"Questions & Suggestions","Orders"===e&&"Orders","Customers"===e&&"Customers","RegisteredCustomers"===e&&"Registered customers","Analytics"===e&&"Analytics","."]})]}),"Feedbacks"==e&&L&&(0,ue.jsx)(ls,{}),"QuestionsSuggestions"==e&&L&&(0,ue.jsx)(yc,{}),"Orders"==e&&L&&(0,ue.jsx)(Eg,{}),"Customers"==e&&L&&(0,ue.jsx)(qp,{}),"RegisteredCustomers"==e&&L&&(0,ue.jsx)(Tm,{}),"Analytics"==e&&L&&(0,ue.jsx)(Vh,{})]})]})}},28471:(e,i,a)=>{a.d(i,{Oz:()=>o,VN:()=>t});var n=a(73556);function r(e){if(null==e||""===e)return null;const i=String(e).trim();if(i.startsWith("+")){const e=parseFloat(i.slice(1));return Number.isFinite(e)?{mode:"delta",value:e}:null}if(i.startsWith("-")){const e=parseFloat(i.slice(1));return Number.isFinite(e)?{mode:"delta",value:-e}:null}const a=parseFloat(i);return Number.isFinite(a)?{mode:"absolute",value:a}:null}function o(e){const i=(0,n.yu)();if(!e||!Array.isArray(e.components))return(0,n.s3)(i);const a=e.components.filter((e=>e&&"button"!==e.type&&"submit"!==e.key)),o=a.filter((e=>{var i,a;return"select"===e.type&&(null===(i=e.data)||void 0===i||null===(a=i.values)||void 0===a?void 0:a.length)})),t=a.filter((e=>{var i;return"selectboxes"===e.type&&(null===(i=e.values)||void 0===i?void 0:i.length)})),d=a.filter((e=>{var i;return"radio"===e.type&&(null===(i=e.values)||void 0===i?void 0:i.length)}));function s(e){const i=String(e.key||"").toLowerCase(),a=String(e.label||"").toLowerCase();return i.includes("remove")||i.includes("without")||a.includes("remove")||a.includes("without")||a.includes("no ")}let l=t.filter(s),c=t.filter((e=>!s(e)));const g=o[0]||d[0];if(g){("select"===g.type?g.data.values:g.values).forEach(((e,a)=>{const n=String(e.label||"").trim();if(!n)return;const o=r(e.value);let t=0;("delta"===(null===o||void 0===o?void 0:o.mode)||"absolute"===(null===o||void 0===o?void 0:o.mode))&&(t=o.value),i.sizes.push({id:`mig_size_${a}_${n.slice(0,12)}`,labelEn:n,labelAr:String(e.labelAr||e.label||"").trim()||n,priceModifier:t})}))}const m=g&&"radio"===g.type?d.slice(1):d,p=c[0];p?p.values.forEach(((e,a)=>{const n=String(e.label||"").trim();if(!n)return;const o=r(e.value),t="delta"===(null===o||void 0===o?void 0:o.mode)||"absolute"===(null===o||void 0===o?void 0:o.mode)?o.value:0;i.addons.push({id:`mig_addon_${a}_${n.slice(0,12)}`,labelEn:n,labelAr:String(e.labelAr||e.label||"").trim()||n,priceModifier:t})})):o[1]&&o[1].data.values.forEach(((e,a)=>{const n=String(e.label||"").trim();if(!n)return;const o=r(e.value);let t=0;("delta"===(null===o||void 0===o?void 0:o.mode)||"absolute"===(null===o||void 0===o?void 0:o.mode))&&(t=o.value),i.addons.push({id:`mig_addon_${a}_${n.slice(0,12)}`,labelEn:n,labelAr:String(e.labelAr||e.label||"").trim()||n,priceModifier:t})}));const h=l[0]||t.find(s);if(h&&h.values.forEach(((e,a)=>{const n=String(e.label||"").trim();n&&i.removals.push({id:`mig_rem_${a}_${n.slice(0,12)}`,labelEn:n,labelAr:String(e.labelAr||e.label||"").trim()||n})})),!i.sizes.length&&m.length){m[0].values.forEach(((e,a)=>{const n=String(e.label||"").trim();if(!n)return;const o=r(e.value),t="delta"===(null===o||void 0===o?void 0:o.mode)||"absolute"===(null===o||void 0===o?void 0:o.mode)?o.value:0;i.sizes.push({id:`mig_rsize_${a}`,labelEn:n,labelAr:String(e.labelAr||e.label||"").trim()||n,priceModifier:t})}))}const u=(0,n.s3)(i);return u.version=n.m5,u}function t(e){var i;return!(null===e||void 0===e||null===(i=e.components)||void 0===i||!i.length)&&e.components.some((e=>e&&("select"===e.type||"selectboxes"===e.type||"radio"===e.type)&&"button"!==e.type))}}}]);
//# sourceMappingURL=890.56d4c4fd.chunk.js.map