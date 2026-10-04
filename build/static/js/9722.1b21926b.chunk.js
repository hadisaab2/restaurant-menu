"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[9722],{22139:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(11222),a=r(81132);function n(e){if(null==e||""===e)return;if("all-items"===e)return;const t="string"===typeof e?e.trim():String(e);t&&"all-items"!==t&&i.A.put((0,a.O8)(t)).catch((()=>{}))}},9328:(e,t,r)=>{r.d(t,{w:()=>l});var i=r(11222),a=r(81132),n=r(62205),o=r(22139);const s=new Set;const d=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;try{0===t&&function(e){if(!e||"all-items"===e)return;const t=String(e);s.has(t)||(s.add(t),(0,o.c)(e))}(e);const n=(0,a.cI)(e,t,r);return(await i.A.get(n)).data}catch(n){throw n}},l=(e,t)=>{const r=null!=e?String(e):null;return(0,n.q)({queryKey:["products",r,t||"all"],queryFn:e=>{let{pageParam:i=0}=e;return d(r,i,t)},getNextPageParam:(e,t)=>{if(!(e.length<10))return t.length},keepPreviousData:!0,retry:!1,refetchOnWindowFocus:!1,staleTime:0,enabled:!!r})}},32415:(e,t,r)=>{r.d(t,{u:()=>o});var i=r(11222),a=r(81132),n=r(62205);const o=(e,t)=>(0,n.q)({queryKey:["products-by-restaurant",e,t||"all"],queryFn:r=>{let{pageParam:n=0}=r;return async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;if(!e)return[];const n=(0,a.qw)(e,t,r);return(await i.A.get(n)).data||[]}(e,n,t)},getNextPageParam:(e,t)=>{if(!(e.length<10))return t.length},enabled:!!e,refetchOnWindowFocus:!1,retry:!1})},90997:(e,t,r)=>{r.d(t,{A:()=>Le});var i=r(82483),a=r(99998),n=r(11222),o=r(91965),s=r(22829),d=r(71481),l=r(81132),c=r(86001),u=r(405),p=r(73556),f=r(70268),x=r(41190);const h=x.i7`
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,g=x.i7`
  from { opacity: 0; }
  to { opacity: 1; }
`,b=x.i7`
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,m=x.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,v=x.Ay.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`,y=x.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: transparent;
  color: ${e=>{var t,r;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||(null===(r=e.theme)||void 0===r?void 0:r.textColor)||"#1e293b"}};
  box-shadow: none;
  transition: color 0.2s ease, opacity 0.2s ease, transform 0.15s ease;
  font-family: ${e=>{var t;return`${(null===(t=e.theme)||void 0===t?void 0:t.font)||"system-ui"}, "Noto Kufi Arabic"`}};

  &:hover {
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}};
    opacity: 0.8;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#3b82f6"}}55;
  }

  &:active {
    transform: scale(0.96);
  }

  svg {
    width: 24px;
    height: 24px;
    opacity: 0.95;
  }
`,w=(0,x.Ay)(y)`
  svg {
    fill: none;
    stroke: currentColor;
  }
`,j=x.Ay.div`
  position: absolute;
  top: calc(100% + 10px);
  ${e=>e.$rtl?"left: 0;":"right: 0;"}
  min-width: 228px;
  max-width: min(280px, calc(100vw - 32px));
  background: #ffffff;
  color: #0f172a;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 20px 40px -12px rgba(15, 23, 42, 0.18);
  z-index: 10050;
  overflow: hidden;
  animation: ${h} 0.2s ease-out;
`,k=x.Ay.div`
  padding: 14px 16px 12px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
`,A=x.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,C=x.Ay.div`
  font-size: 12px;
  color: #64748b;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$=x.Ay.div`
  padding: 6px;
`,_=x.Ay.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  padding: 11px 12px;
  border: none;
  border-radius: 10px;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: #334155;
  transition: background 0.15s ease, color 0.15s ease;
  font-family: inherit;

  svg {
    width: 16px;
    height: 16px;
    color: #64748b;
    flex-shrink: 0;
  }

  &[data-outline-wishlist-heart="true"] svg {
    fill: none;
    stroke: currentColor;
  }

  &:hover {
    background: #f1f5f9;
    color: #0f172a;
    svg {
      color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}};
    }
  }

  ${e=>e.$danger&&"\n    &:hover {\n      background: #fef2f2;\n      color: #b91c1c;\n      svg { color: #b91c1c; }\n    }\n  "}

  ${e=>e.$rtl&&"\n    text-align: right;\n    flex-direction: row-reverse;\n    direction: rtl;\n  "}
`,S=x.Ay.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  box-sizing: border-box;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 10000;
  display: grid;
  place-items: center;
  place-content: center;
  padding: max(10px, env(safe-area-inset-top)) max(20px, env(safe-area-inset-right))
    max(10px, env(safe-area-inset-bottom)) max(20px, env(safe-area-inset-left));
  overflow: hidden;
  overscroll-behavior: contain;
  touch-action: none;
  animation: ${g} 0.2s ease-out;
`,z=x.Ay.div`
  position: relative;
  background: #ffffff;
  color: #0f172a;
  border-radius: 20px;
  width: min(400px, calc(100vw - 40px));
  max-width: 100%;
  max-height: min(90vh, 640px);
  margin: auto;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.08) inset;
  animation: ${b} 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: ${e=>{var t;return`${(null===(t=e.theme)||void 0===t?void 0:t.font)||"system-ui"}, "Noto Kufi Arabic"`}};
  justify-self: center;
  align-self: center;
`,q=x.Ay.div`
  height: 4px;
  width: 100%;
  background: linear-gradient(
    90deg,
    ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}},
    ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}}cc
  );
  flex-shrink: 0;
`,F=x.Ay.button`
  position: absolute;
  top: 10px;
  ${e=>e.$rtl?"left: 10px;":"right: 10px;"}
  z-index: 2;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.04);
  color: #64748b;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(15, 23, 42, 0.08);
    color: #0f172a;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,L=x.Ay.div`
  padding: 16px 24px 6px;
  padding-right: ${e=>e.$rtl?"24px":"48px"};
  padding-left: ${e=>e.$rtl?"48px":"24px"};
  text-align: ${e=>e.$rtl?"right":"left"};
`,P=x.Ay.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0f172a;
  line-height: 1.3;
`,E=x.Ay.p`
  margin: 6px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: #64748b;
`,B=x.Ay.div`
  display: flex;
  margin: 10px 20px 0;
  padding: 4px;
  background: #f1f5f9;
  border-radius: 12px;
  gap: 4px;
`,R=x.Ay.button`
  flex: 1;
  padding: 10px 12px;
  border: none;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  font-family: inherit;
  color: #64748b;
  background: transparent;

  ${e=>e.$active&&"\n    background: #ffffff;\n    color: #0f172a;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);\n  "}
`,I=x.Ay.form`
  padding: 12px 24px 6px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,N=x.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,O=x.Ay.label`
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  letter-spacing: 0.02em;
`,D=x.Ay.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  font-size: 15px;
  color: #0f172a;
  background: #fafafa;
  transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
  font-family: inherit;

  &::placeholder {
    color: #94a3b8;
  }

  &:hover {
    border-color: #cbd5e1;
    background: #fff;
  }

  &:focus {
    outline: none;
    border-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#3b82f6"}};
    background: #fff;
    box-shadow: 0 0 0 3px ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#3b82f6"}}22;
  }
`,W=x.Ay.div`
  padding: 10px 12px;
  border-radius: 10px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #b91c1c;
  font-size: 13px;
  line-height: 1.4;
`,T=x.Ay.button`
  width: 100%;
  margin-top: 4px;
  padding: 14px 18px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  color: #ffffff;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}};
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
  transition: filter 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease;

  &:hover {
    filter: brightness(1.06);
    box-shadow: 0 4px 14px ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}}44;
  }

  &:active {
    transform: scale(0.99);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }
`,Q=x.Ay.div`
  padding: 8px 24px 16px;
`,U=x.Ay.button`
  width: 100%;
  padding: 12px;
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  font-family: inherit;
  border-radius: 10px;
  transition: color 0.15s ease, background 0.15s ease;

  &:hover {
    color: #0f172a;
    background: #f8fafc;
  }
`,Y=x.Ay.div`
  position: fixed;
  top: max(12px, env(safe-area-inset-top));
  bottom: max(12px, env(safe-area-inset-bottom));
  width: min(400px, calc(100vw - 24px));
  max-height: calc(100dvh - 24px);
  background: #ffffff;
  color: #0f172a;
  z-index: 10001;
  display: flex;
  flex-direction: column;
  padding: 0;
  font-family: ${e=>{var t;return`${(null===(t=e.theme)||void 0===t?void 0:t.font)||"system-ui"}, "Noto Kufi Arabic"`}};
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  overflow: hidden;
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.16);
  ${e=>e.$rtl?"\n    left: max(12px, env(safe-area-inset-left));\n    right: auto;\n  ":"\n    right: max(12px, env(safe-area-inset-right));\n    left: auto;\n  "}
  animation: ${b} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`,K=x.Ay.div`
  padding: 22px 22px 18px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
`,V=x.Ay.div`
  min-width: 0;
`,M=x.Ay.div`
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0f172a;
`,H=x.Ay.div`
  font-size: 13px;
  color: #64748b;
  margin-top: 4px;
`,Z=x.Ay.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.05);
  color: #64748b;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(15, 23, 42, 0.09);
    color: #0f172a;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,G=x.Ay.div`
  flex: 1;
  overflow: auto;
  padding: 16px 20px 28px;
  min-height: 0;
`,J=x.Ay.div`
  padding: 14px 16px;
  margin-bottom: 12px;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: rgba(15, 23, 42, 0.12);
    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  }
`,X=x.Ay.ul`
  list-style: none;
  margin: 0 0 12px;
  padding: 0;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  padding-top: 10px;
`,ee=x.Ay.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  line-height: 1.45;
  color: #475569;
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`,te=x.Ay.span`
  flex: 1;
  min-width: 0;
  color: #334155;
  font-weight: 500;
`,re=x.Ay.span`
  flex-shrink: 0;
  color: #64748b;
  font-variant-numeric: tabular-nums;
`,ie=x.Ay.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 4px;
  flex-wrap: wrap;
`,ae=x.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}}33;
  background: #ffffff;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;

  &:hover:not(:disabled) {
    background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}}0d;
    border-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}}55;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,ne=x.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
`,oe=x.Ay.span`
  font-size: 13px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.01em;
`,se=x.Ay.span`
  font-size: 12px;
  color: #64748b;
  text-align: right;
`,de=x.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
`,le=x.Ay.span`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
`,ce=x.Ay.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.02em;
  background: ${e=>e.$bg||"#f1f5f9"};
  color: ${e=>e.$fg||"#475569"};
`,ue=x.Ay.div`
  text-align: center;
  padding: 48px 24px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.6;
`,pe=x.Ay.div`
  text-align: center;
  padding: 40px 24px;
  font-size: 14px;
  color: #64748b;
`,fe=x.Ay.div`
  padding: 4px 20px 14px;
  flex-shrink: 0;
`,xe=x.Ay.div`
  font-size: 12px;
  color: #64748b;
  margin: 0 0 10px;
  line-height: 1.45;
`,he=x.Ay.span`
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #475569;
  margin-bottom: 4px;
`,ge=x.Ay.div`
  padding: 14px 16px;
  margin-bottom: 12px;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #fff;
`,be=x.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 6px;
`,me=x.Ay.div`
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
  margin-bottom: 10px;
  white-space: pre-wrap;
`,ve=x.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
`,ye=x.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #fff;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: #f8fafc;
    border-color: rgba(15, 23, 42, 0.2);
  }

  svg {
    width: 12px;
    height: 12px;
  }
`,we=(0,x.Ay)(ye)`
  color: #b91c1c;
  border-color: rgba(185, 28, 28, 0.25);
  &:hover {
    background: #fef2f2;
    border-color: rgba(185, 28, 28, 0.4);
  }
`,je=x.Ay.button`
  width: 100%;
  margin-top: 4px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px dashed rgba(15, 23, 42, 0.2);
  background: #fafafa;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}};
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: #f1f5f9;
    border-color: rgba(15, 23, 42, 0.3);
  }
`,ke=x.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 8px;
`,Ae=x.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: #334155;

  input[type="checkbox"] {
    margin-top: 3px;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,Ce=x.Ay.label`
  cursor: pointer;
  line-height: 1.4;
`,$e=x.Ay.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  font-size: 15px;
  color: #0f172a;
  background: #fafafa;
  font-family: inherit;
  resize: vertical;
  min-height: 96px;
  transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: #cbd5e1;
    background: #fff;
  }

  &:focus {
    outline: none;
    border-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#3b82f6"}};
    background: #fff;
    box-shadow: 0 0 0 3px ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#3b82f6"}}22;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;var _e=r(56723);function Se(e){var t;if(!e)return 0;const r=parseFloat(e.en_price)||0,i=parseFloat(null===e||void 0===e||null===(t=e.category)||void 0===t?void 0:t.discount)||0,a=parseFloat(null===e||void 0===e?void 0:e.discount)||0;return r*(1-(0===i?a:i)/100)}function ze(e,t){var r,i;const a=e.product_name||(null===(r=e.product_details)||void 0===r?void 0:r.en_name)||(null===(i=e.product_details)||void 0===i?void 0:i.ar_name);return a||("ar"===t?`\u0645\u0646\u062a\u062c #${e.product_id}`:`Item #${e.product_id}`)}function qe(e,t){if(!e)return"";return("ar"===t?e.ar_name||e.en_name:e.en_name||e.ar_name)||`#${e.id}`}function Fe(e){const t=String(e||"").toLowerCase();return"completed"===t?{$bg:"#dcfce7",$fg:"#166534"}:"cancelled"===t||"canceled"===t?{$bg:"#fee2e2",$fg:"#b91c1c"}:"confirmed"===t||"preparing"===t||"ready"===t?{$bg:"#dbeafe",$fg:"#1d4ed8"}:"pending"===t?{$bg:"#ffedd5",$fg:"#c2410c"}:{$bg:"#f1f5f9",$fg:"#475569"}}const Le=(0,i.forwardRef)((function(e,t){let{restaurant:r,restaurantName:x,activeLanguage:h="en",popupHandler:g}=e;const[b,Le]=(0,i.useState)(null),[Pe,Ee]=(0,i.useState)(!1),[Be,Re]=(0,i.useState)(!1),[Ie,Ne]=(0,i.useState)(!1),[Oe,De]=(0,i.useState)("signin"),[We,Te]=(0,i.useState)([]),[Qe,Ue]=(0,i.useState)(!1),[Ye,Ke]=(0,i.useState)(""),[Ve,Me]=(0,i.useState)(!1),[He,Ze]=(0,i.useState)(""),[Ge,Je]=(0,i.useState)(""),[Xe,et]=(0,i.useState)(""),[tt,rt]=(0,i.useState)(""),[it,at]=(0,i.useState)(""),[nt,ot]=(0,i.useState)(""),[st,dt]=(0,i.useState)(""),[lt,ct]=(0,i.useState)(""),[ut,pt]=(0,i.useState)(null),[ft,xt]=(0,i.useState)("orders"),[ht,gt]=(0,i.useState)("list"),[bt,mt]=(0,i.useState)([]),[vt,yt]=(0,i.useState)(!1),[wt,jt]=(0,i.useState)(""),[kt,At]=(0,i.useState)(!1),[Ct,$t]=(0,i.useState)({label:"",full_address:"",is_default:!1}),[_t,St]=(0,i.useState)(null),[zt,qt]=(0,i.useState)(!1),[Ft,Lt]=(0,i.useState)([]),[Pt,Et]=(0,i.useState)(!1),[Bt,Rt]=(0,i.useState)(""),[It,Nt]=(0,i.useState)(null),Ot=(0,o.wA)(),Dt=(0,i.useRef)(null),Wt=(e,t)=>"ar"===h?t:e,Tt=(0,f.wU)(x),Qt=null===r||void 0===r?void 0:r.id,Ut="ar"===h,Yt=(0,i.useCallback)((()=>{g&&g(null)}),[g]),Kt=(0,i.useCallback)((async()=>{if(Tt&&Qt){Ee(!0);try{const{data:e}=await n.A.get(l.EY,{headers:{Authorization:`Bearer ${Tt}`}});Le(e)}catch{Le(null),(0,f.zV)(x)}finally{Ee(!1)}}else Le(null)}),[Tt,Qt,x]);(0,i.useEffect)((()=>{Kt()}),[Kt]),(0,i.useEffect)((()=>{if(!Be&&!Ie&&!zt)return;const e=document.body.style.overflow,t=document.body.style.touchAction;return document.body.style.overflow="hidden",document.body.style.touchAction="none",()=>{document.body.style.overflow=e,document.body.style.touchAction=t}}),[Be,Ie,zt]),(0,i.useEffect)((()=>{const e=e=>{Ve&&Dt.current&&!Dt.current.contains(e.target)&&Me(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[Ve]);const Vt=(0,i.useCallback)((async()=>{if(Tt){Ue(!0);try{const{data:e}=await n.A.get(l.TZ,{headers:{Authorization:`Bearer ${Tt}`}});Te(e.orders||[])}catch{Te([])}finally{Ue(!1)}}}),[Tt]),Mt=(0,i.useCallback)((async()=>{if(Tt){yt(!0);try{const{data:e}=await n.A.get(l.Qf,{headers:{Authorization:`Bearer ${Tt}`}});mt(e.addresses||[])}catch{mt([])}finally{yt(!1)}}}),[Tt]),Ht=(0,i.useCallback)((async()=>{if(Tt){Et(!0);try{const{data:e}=await n.A.get(l.Vb,{headers:{Authorization:`Bearer ${Tt}`}});Lt(Array.isArray(e)?e:[])}catch{Lt([]),Rt("ar"===h?"\u062a\u0639\u0630\u0631 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0641\u0636\u0644\u0629.":"Could not load wishlist.")}finally{Et(!1)}}}),[Tt,h]),Zt=(0,i.useCallback)((()=>{Yt(),Rt(""),qt(!0),Ht()}),[Yt,Ht]),Gt=(0,i.useCallback)((()=>{Yt(),ct(""),xt("orders"),Ne(!0),Vt()}),[Yt,Vt]),Jt=(0,i.useCallback)((()=>{Yt(),jt(""),gt("list"),St(null),$t({label:"",full_address:"",is_default:!1}),xt("addresses"),Ne(!0),Mt()}),[Yt,Mt]),Xt=(0,i.useCallback)((()=>{Yt(),Pe||(Me(!1),b?Gt():(De("signin"),Ke(""),Re(!0)))}),[Yt,Pe,b,Gt]),er=(0,i.useCallback)((()=>{Yt(),Pe||(Me(!1),b?Zt():(De("signin"),Ke(""),Re(!0)))}),[Yt,Pe,b,Zt]);(0,i.useImperativeHandle)(t,(()=>({openOrders:()=>Xt(),openWishlist:()=>er()})),[Xt,er]);const tr=async e=>{ct("");const t=(r=e.items)?(Array.isArray(r)?r:[]).map((e=>{var t,r,i,a,n;return{product_id:null!==(t=null!==(r=e.product_id)&&void 0!==r?r:e.productId)&&void 0!==t?t:e.id,quantity:Math.max(1,Number(e.quantity)||1),form_data:null!==(i=null!==(a=e.form_data)&&void 0!==a?a:e.formData)&&void 0!==i?i:{},instruction:null!==(n=e.instruction)&&void 0!==n?n:""}})).filter((e=>null!=e.product_id)):[];var r;if(0!==t.length){pt(e.id);try{for(const e of t){const{data:t}=await n.A.get((0,l.lA)(e.product_id));let r=Se(t);if(e.form_data&&(0,p.jB)(e.form_data)){const i=(0,p.xC)(t.form_json);"v2"===i.kind&&(r=parseFloat((0,u.$)(r,i.data,e.form_data)))}Ot((0,c.bE)(x,t,e.quantity,e.form_data||{},r,e.instruction||""))}Ne(!1),g&&g("cart")}catch{ct(Wt("Could not add items. A product may have been removed from the menu.","\u062a\u0639\u0630\u0631 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0623\u0635\u0646\u0627\u0641. \u0642\u062f \u064a\u0643\u0648\u0646 \u0623\u062d\u062f \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631."))}finally{pt(null)}}else ct(Wt("This order has no saved line items. Only newer orders can be reordered.","\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0635\u0646\u0627\u0641 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628."))},rr=e=>{if(!e)return"";try{return new Date(e).toLocaleString("ar"===h?"ar-LB":"en-US",{dateStyle:"medium",timeStyle:"short"})}catch{return String(e)}},ir=(null===b||void 0===b?void 0:b.full_name)||(null===b||void 0===b?void 0:b.email),ar=null!==b&&void 0!==b&&b.email&&null!==b&&void 0!==b&&b.full_name?b.email:null,nr="undefined"!==typeof document?document.body:null;return(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsxs)(v,{dir:Ut?"rtl":"ltr",children:[(0,_e.jsxs)(m,{ref:Dt,children:[(0,_e.jsx)(y,{type:"button",onClick:()=>{Pe||(Yt(),b?Me((e=>!e)):(Me(!1),De("signin"),Ke(""),Re(!0)))},"aria-label":Wt("Account","\u0627\u0644\u062d\u0633\u0627\u0628"),"aria-expanded":Ve,children:(0,_e.jsx)(s.SNd,{})}),Ve&&b&&(0,_e.jsxs)(j,{$rtl:Ut,dir:Ut?"rtl":"ltr",children:[(0,_e.jsxs)(k,{children:[(0,_e.jsx)(A,{children:ir}),ar&&(0,_e.jsx)(C,{children:ar})]}),(0,_e.jsxs)($,{children:[(0,_e.jsxs)(_,{type:"button",$rtl:Ut,onClick:()=>{Me(!1),Gt()},children:[(0,_e.jsx)(d.kkc,{"aria-hidden":!0}),Wt("My orders","\u0637\u0644\u0628\u0627\u062a\u064a")]}),(0,_e.jsxs)(_,{type:"button",$rtl:Ut,"data-outline-wishlist-heart":"true",onClick:()=>{Me(!1),Zt()},children:[(0,_e.jsx)(s.phF,{"aria-hidden":!0}),Wt("Wishlist","\u0627\u0644\u0645\u0641\u0636\u0644\u0629")]}),(0,_e.jsxs)(_,{type:"button",$rtl:Ut,onClick:()=>{Me(!1),Jt()},children:[(0,_e.jsx)(d.vq8,{"aria-hidden":!0}),Wt("Addresses","\u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646")]}),(0,_e.jsxs)(_,{type:"button",$rtl:Ut,$danger:!0,onClick:()=>{(0,f.zV)(x),Le(null),Te([]),Lt([]),qt(!1),Me(!1)},children:[(0,_e.jsx)(d.axc,{"aria-hidden":!0}),Wt("Log out","\u062e\u0631\u0648\u062c")]})]})]})]}),b&&(0,_e.jsx)(w,{type:"button",onClick:()=>{Pe||(Me(!1),Zt())},"aria-label":Wt("Wishlist","\u0627\u0644\u0645\u0641\u0636\u0644\u0629"),children:(0,_e.jsx)(s.phF,{})})]}),Be&&nr&&(0,a.createPortal)((0,_e.jsx)(S,{onClick:()=>Re(!1),role:"presentation",children:(0,_e.jsxs)(z,{onClick:e=>e.stopPropagation(),dir:Ut?"rtl":"ltr",children:[(0,_e.jsx)(q,{}),(0,_e.jsx)(F,{type:"button",$rtl:Ut,onClick:()=>Re(!1),"aria-label":Wt("Close","\u0625\u063a\u0644\u0627\u0642"),children:(0,_e.jsx)(d.QCr,{})}),(0,_e.jsxs)(L,{$rtl:Ut,children:[(0,_e.jsx)(P,{children:"signin"===Oe?Wt("Welcome back","\u0645\u0631\u062d\u0628\u0627\u064b \u0628\u0639\u0648\u062f\u062a\u0643"):Wt("Create your account","\u0623\u0646\u0634\u0626 \u062d\u0633\u0627\u0628\u0643")}),(0,_e.jsx)(E,{children:"signin"===Oe?Wt("Sign in to view order history and speed up checkout.","\u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u0639\u0631\u0636 \u0637\u0644\u0628\u0627\u062a\u0643 \u0648\u062a\u0633\u0631\u064a\u0639 \u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628."):Wt("Register with email and phone to track your orders.","\u0633\u062c\u0651\u0644 \u0628\u0631\u064a\u062f\u0643 \u0648\u0647\u0627\u062a\u0641\u0643 \u0644\u062a\u062a\u0628\u0639 \u0637\u0644\u0628\u0627\u062a\u0643.")})]}),(0,_e.jsxs)(B,{children:[(0,_e.jsx)(R,{type:"button",$active:"signin"===Oe,onClick:()=>{De("signin"),Ke(""),at("")},children:Wt("Sign in","\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644")}),(0,_e.jsx)(R,{type:"button",$active:"register"===Oe,onClick:()=>{De("register"),Ke(""),at("")},children:Wt("Register","\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628")})]}),"signin"===Oe?(0,_e.jsxs)(I,{onSubmit:async e=>{if(e.preventDefault(),Ke(""),Qt)try{const{data:e}=await n.A.post(l.w4,{restaurant_id:Qt,email:He.trim(),password:Ge});(0,f.gO)(x,e.accessToken),Re(!1),Je(""),await Kt()}catch(i){var t,r;Ke((null===(t=i.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||Wt("Sign in failed. Check your email and password.","\u0641\u0634\u0644 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644."))}},children:[(0,_e.jsxs)(N,{children:[(0,_e.jsx)(O,{children:Wt("Email","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a")}),(0,_e.jsx)(D,{type:"email",autoComplete:"email",value:He,onChange:e=>Ze(e.target.value),required:!0})]}),(0,_e.jsxs)(N,{children:[(0,_e.jsx)(O,{children:Wt("Password","\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631")}),(0,_e.jsx)(D,{type:"password",autoComplete:"current-password",value:Ge,onChange:e=>Je(e.target.value),required:!0})]}),Ye&&(0,_e.jsx)(W,{children:Ye}),(0,_e.jsx)(T,{type:"submit",children:Wt("Sign in","\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644")})]}):(0,_e.jsxs)(I,{onSubmit:async e=>{if(e.preventDefault(),Ke(""),Qt)if(tt===it)try{await n.A.post(l.pO,{restaurant_id:Qt,email:Xe.trim(),password:tt,phone_number:nt.trim(),full_name:st.trim()});const{data:e}=await n.A.post(l.w4,{restaurant_id:Qt,email:Xe.trim(),password:tt});(0,f.gO)(x,e.accessToken),Re(!1),rt(""),at(""),await Kt()}catch(i){var t,r;Ke((null===(t=i.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||Wt("Registration failed. Try a different email or phone.","\u0641\u0634\u0644 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628."))}else Ke(Wt("Passwords do not match.","\u0643\u0644\u0645\u062a\u0627 \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u062a\u064a\u0646."))},children:[(0,_e.jsxs)(N,{children:[(0,_e.jsx)(O,{children:Wt("Full name","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644")}),(0,_e.jsx)(D,{value:st,onChange:e=>dt(e.target.value),required:!0})]}),(0,_e.jsxs)(N,{children:[(0,_e.jsx)(O,{children:Wt("Phone","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641")}),(0,_e.jsx)(D,{type:"tel",value:nt,onChange:e=>ot(e.target.value),required:!0})]}),(0,_e.jsxs)(N,{children:[(0,_e.jsx)(O,{children:Wt("Email","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a")}),(0,_e.jsx)(D,{type:"email",autoComplete:"email",value:Xe,onChange:e=>et(e.target.value),required:!0})]}),(0,_e.jsxs)(N,{children:[(0,_e.jsx)(O,{children:Wt("Password (8+ characters)","\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 (\u0668 \u0623\u062d\u0631\u0641 \u0623\u0648 \u0623\u0643\u062b\u0631)")}),(0,_e.jsx)(D,{type:"password",autoComplete:"new-password",value:tt,onChange:e=>rt(e.target.value),minLength:8,required:!0})]}),(0,_e.jsxs)(N,{children:[(0,_e.jsx)(O,{children:Wt("Confirm password","\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631")}),(0,_e.jsx)(D,{type:"password",autoComplete:"new-password",value:it,onChange:e=>at(e.target.value),minLength:8,required:!0})]}),Ye&&(0,_e.jsx)(W,{children:Ye}),(0,_e.jsx)(T,{type:"submit",children:Wt("Create account","\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628")})]}),(0,_e.jsx)(Q,{children:(0,_e.jsx)(U,{type:"button",onClick:()=>Re(!1),children:Wt("Cancel","\u0625\u0644\u063a\u0627\u0621")})})]})}),nr),Ie&&nr&&(0,a.createPortal)((0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsx)(S,{onClick:()=>{ct(""),Ne(!1)}}),(0,_e.jsxs)(Y,{$rtl:Ut,dir:Ut?"rtl":"ltr",children:[(0,_e.jsxs)(K,{children:[(0,_e.jsxs)(V,{children:[(0,_e.jsx)(M,{children:"orders"===ft?Wt("My orders","\u0637\u0644\u0628\u0627\u062a\u064a"):"edit"===ht?_t?Wt("Edit address","\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646"):Wt("New address","\u0639\u0646\u0648\u0627\u0646 \u062c\u062f\u064a\u062f"):Wt("Delivery addresses","\u0639\u0646\u0627\u0648\u064a\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644")}),(0,_e.jsx)(H,{children:"orders"===ft?Wt("Signed-in orders for this restaurant. Reorder adds items to your cart.","\u0637\u0644\u0628\u0627\u062a\u0643 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u0637\u0639\u0645. \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0637\u0644\u0628 \u062a\u0636\u064a\u0641 \u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629."):"edit"===ht?Wt("Save a label and full address. One can be default for checkout.","\u0627\u062d\u0641\u0638 \u0627\u0633\u0645\u0627\u064b \u0644\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0627\u0644\u0646\u0635 \u0627\u0644\u0643\u0627\u0645\u0644. \u064a\u0645\u0643\u0646 \u062c\u0639\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0627\u064b \u0639\u0646\u062f \u0627\u0644\u0637\u0644\u0628."):Wt("Manage multiple delivery addresses for checkout.","\u0623\u062f\u0650\u0631 \u0639\u062f\u0629 \u0639\u0646\u0627\u0648\u064a\u0646 \u0644\u0644\u062a\u0648\u0635\u064a\u0644 \u0639\u0646\u062f \u0627\u0644\u0637\u0644\u0628.")})]}),(0,_e.jsx)(Z,{type:"button",onClick:()=>{ct(""),jt(""),Ne(!1)},"aria-label":"Close",children:(0,_e.jsx)(d.QCr,{})})]}),"addresses"===ft&&"edit"===ht&&(0,_e.jsx)("div",{style:{padding:"0 20px 8px"},children:(0,_e.jsxs)(U,{type:"button",style:{textAlign:Ut?"right":"left",width:"auto",padding:"8px 0"},onClick:()=>{jt(""),gt("list"),St(null)},children:[(0,_e.jsx)(d.QVr,{style:{marginRight:Ut?0:8,marginLeft:Ut?8:0,transform:Ut?"rotate(180deg)":"none"}}),Wt("Back to list","\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0642\u0627\u0626\u0645\u0629")]})}),(0,_e.jsx)(fe,{children:(0,_e.jsxs)(B,{style:{margin:0},children:[(0,_e.jsx)(R,{type:"button",$active:"orders"===ft,onClick:()=>{xt("orders"),Vt()},children:Wt("Orders","\u0627\u0644\u0637\u0644\u0628\u0627\u062a")}),(0,_e.jsx)(R,{type:"button",$active:"addresses"===ft,onClick:()=>{xt("addresses"),gt("list"),Mt()},children:Wt("Addresses","\u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646")})]})}),"orders"===ft&&lt&&(0,_e.jsx)("div",{style:{padding:"0 20px 12px"},children:(0,_e.jsx)(W,{children:lt})}),"addresses"===ft&&wt&&(0,_e.jsx)("div",{style:{padding:"0 20px 12px"},children:(0,_e.jsx)(W,{children:wt})}),"orders"===ft&&(0,_e.jsx)(G,{children:Qe?(0,_e.jsx)(pe,{children:Wt("Loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")}):0===We.length?(0,_e.jsx)(ue,{children:Wt("You have no orders yet. Complete a checkout while signed in to see them here.","\u0644\u0627 \u062a\u0648\u062c\u062f \u0637\u0644\u0628\u0627\u062a \u0628\u0639\u062f. \u0623\u0646\u0647\u0650 \u0637\u0644\u0628\u0627\u064b \u0648\u0623\u0646\u062a \u0645\u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u062a\u0638\u0647\u0631 \u0647\u0646\u0627.")}):We.map((e=>{const t=Array.isArray(e.items)?e.items:[];return(0,_e.jsxs)(J,{children:[(0,_e.jsxs)(ne,{children:[(0,_e.jsxs)(oe,{children:["#",e.id]}),(0,_e.jsx)(se,{children:rr(e.order_date)})]}),(e.delivery_type||e.customer_address)&&(0,_e.jsxs)(xe,{children:[e.delivery_type&&(0,_e.jsx)(he,{children:e.delivery_type}),e.customer_address&&(0,_e.jsx)("div",{children:e.customer_address})]}),t.length>0&&(0,_e.jsx)(X,{children:t.map(((t,r)=>{var i,a,n;return(0,_e.jsxs)(ee,{children:[(0,_e.jsx)(te,{children:ze({...t,product_id:null!==(i=null!==(a=t.product_id)&&void 0!==a?a:t.productId)&&void 0!==i?i:t.id},h)}),(0,_e.jsxs)(re,{children:["\xd7",null!==(n=t.quantity)&&void 0!==n?n:1]})]},`${e.id}-line-${r}`)}))}),(0,_e.jsxs)(de,{children:[(0,_e.jsx)(ce,{...Fe(e.status),children:e.status}),(0,_e.jsxs)(le,{children:[parseFloat(e.total||0).toFixed(2)," ",e.currency||""]})]}),(0,_e.jsx)(ie,{children:(0,_e.jsxs)(ae,{type:"button",disabled:null!=ut,onClick:()=>tr(e),children:[(0,_e.jsx)(d.Swo,{"aria-hidden":!0}),ut===e.id?Wt("Adding\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u2026"):Wt("Reorder","\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0637\u0644\u0628")]})})]},e.id)}))}),"addresses"===ft&&"list"===ht&&(0,_e.jsxs)(G,{children:[vt?(0,_e.jsx)(pe,{children:Wt("Loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")}):0===bt.length?(0,_e.jsx)(ue,{children:Wt("No saved addresses yet. Add one for faster delivery checkout.","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u0628\u0639\u062f. \u0623\u0636\u0641 \u0639\u0646\u0648\u0627\u0646\u0627\u064b \u0644\u062a\u0633\u0631\u064a\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644.")}):bt.map((e=>(0,_e.jsxs)(ge,{children:[(0,_e.jsx)(be,{children:(0,_e.jsxs)("span",{children:[e.label||Wt("Address","\u0639\u0646\u0648\u0627\u0646"),e.is_default?(0,_e.jsxs)("span",{style:{marginLeft:8,fontSize:11,color:"#64748b"},children:["(",Wt("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a"),")"]}):null]})}),(0,_e.jsx)(me,{children:e.full_address}),(0,_e.jsxs)(ve,{children:[!e.is_default&&(0,_e.jsxs)(ye,{type:"button",onClick:()=>(async e=>{if(Tt&&e){jt("");try{await n.A.put((0,l.SI)(e),{is_default:!0},{headers:{Authorization:`Bearer ${Tt}`}}),await Mt()}catch(i){var t,r;jt((null===(t=i.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||Wt("Could not update default.","\u062a\u0639\u0630\u0631 \u062a\u0639\u064a\u064a\u0646 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a."))}}})(e.id),children:[(0,_e.jsx)(d.gt3,{"aria-hidden":!0}),Wt("Set default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")]}),(0,_e.jsxs)(ye,{type:"button",onClick:()=>{return t=e,jt(""),St(t.id),$t({label:t.label||"",full_address:t.full_address||"",is_default:!!t.is_default}),void gt("edit");var t},children:[(0,_e.jsx)(d.F7,{"aria-hidden":!0}),Wt("Edit","\u062a\u0639\u062f\u064a\u0644")]}),(0,_e.jsxs)(we,{type:"button",onClick:()=>(async e=>{if(Tt&&e&&("undefined"===typeof window||window.confirm(Wt("Delete this address?","\u062d\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0639\u0646\u0648\u0627\u0646\u061f")))){jt("");try{await n.A.delete((0,l.SI)(e),{headers:{Authorization:`Bearer ${Tt}`}}),await Mt()}catch(i){var t,r;jt((null===(t=i.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||Wt("Could not delete address.","\u062a\u0639\u0630\u0631 \u062d\u0630\u0641 \u0627\u0644\u0639\u0646\u0648\u0627\u0646."))}}})(e.id),children:[(0,_e.jsx)(d.qbC,{"aria-hidden":!0}),Wt("Delete","\u062d\u0630\u0641")]})]})]},e.id))),(0,_e.jsx)(je,{type:"button",onClick:()=>{jt(""),St(null),$t({label:"",full_address:"",is_default:!1}),gt("edit")},children:Wt("+ Add address","+ \u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0648\u0627\u0646")})]}),"addresses"===ft&&"edit"===ht&&(0,_e.jsx)(G,{children:(0,_e.jsxs)(ke,{onSubmit:async e=>{var t;if(null===e||void 0===e||null===(t=e.preventDefault)||void 0===t||t.call(e),!Tt)return;const r=String(Ct.full_address||"").trim();if(r){At(!0),jt("");try{_t?await n.A.put((0,l.SI)(_t),{label:String(Ct.label||"").trim()||null,full_address:r,is_default:!!Ct.is_default},{headers:{Authorization:`Bearer ${Tt}`}}):await n.A.post(l.Qf,{label:String(Ct.label||"").trim()||null,full_address:r,is_default:!!Ct.is_default},{headers:{Authorization:`Bearer ${Tt}`}}),await Mt(),gt("list"),St(null)}catch(o){var i,a;jt((null===(i=o.response)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.message)||Wt("Could not save address.","\u062a\u0639\u0630\u0631 \u062d\u0641\u0638 \u0627\u0644\u0639\u0646\u0648\u0627\u0646."))}finally{At(!1)}}else jt(Wt("Address is required.","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0645\u0637\u0644\u0648\u0628."))},children:[(0,_e.jsxs)(N,{children:[(0,_e.jsx)(O,{children:Wt("Label (optional)","\u0627\u0633\u0645 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,_e.jsx)(D,{value:Ct.label,onChange:e=>$t((t=>({...t,label:e.target.value}))),placeholder:Wt("Home, Work, \u2026","\u0627\u0644\u0645\u0646\u0632\u0644\u060c \u0627\u0644\u0639\u0645\u0644\u060c \u2026")})]}),(0,_e.jsxs)(N,{children:[(0,_e.jsx)(O,{children:Wt("Full address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,_e.jsx)($e,{rows:4,value:Ct.full_address,onChange:e=>$t((t=>({...t,full_address:e.target.value}))),placeholder:Wt("Street, building, floor, \u2026","\u0627\u0644\u0634\u0627\u0631\u0639\u060c \u0627\u0644\u0645\u0628\u0646\u0649\u060c \u0627\u0644\u0637\u0627\u0628\u0642\u060c \u2026")})]}),(0,_e.jsxs)(Ae,{children:[(0,_e.jsx)("input",{type:"checkbox",id:"addr-default",checked:!!Ct.is_default,onChange:e=>$t((t=>({...t,is_default:e.target.checked})))}),(0,_e.jsx)(Ce,{htmlFor:"addr-default",children:Wt("Use as default delivery address","\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0643\u0639\u0646\u0648\u0627\u0646 \u062a\u0648\u0635\u064a\u0644 \u0627\u0641\u062a\u0631\u0627\u0636\u064a")})]}),(0,_e.jsx)(T,{type:"submit",disabled:kt,children:kt?Wt("Saving\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062d\u0641\u0638\u2026"):Wt("Save address","\u062d\u0641\u0638 \u0627\u0644\u0639\u0646\u0648\u0627\u0646")})]})})]})]}),nr),zt&&nr&&(0,a.createPortal)((0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsx)(S,{onClick:()=>{Rt(""),qt(!1)}}),(0,_e.jsxs)(Y,{$rtl:Ut,dir:Ut?"rtl":"ltr",children:[(0,_e.jsxs)(K,{children:[(0,_e.jsxs)(V,{children:[(0,_e.jsx)(M,{children:Wt("Wishlist","\u0627\u0644\u0645\u0641\u0636\u0644\u0629")}),(0,_e.jsx)(H,{children:Wt("Items you saved for this restaurant.","\u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u062a\u064a \u062d\u0641\u0638\u062a\u0647\u0627 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0637\u0639\u0645.")})]}),(0,_e.jsx)(Z,{type:"button",onClick:()=>{Rt(""),qt(!1)},"aria-label":Wt("Close","\u0625\u063a\u0644\u0627\u0642"),children:(0,_e.jsx)(d.QCr,{})})]}),Bt&&(0,_e.jsx)("div",{style:{padding:"0 20px 12px"},children:(0,_e.jsx)(W,{children:Bt})}),(0,_e.jsx)(G,{children:Pt?(0,_e.jsx)(pe,{children:Wt("Loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")}):0===Ft.length?(0,_e.jsx)(ue,{children:Wt("No saved items yet. Use the heart on products to add them here.","\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0635\u0646\u0627\u0641 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f. \u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0642\u0644\u0628 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0644\u0625\u0636\u0627\u0641\u062a\u0647\u0627.")}):Ft.map((e=>{const t=Se(e);return(0,_e.jsxs)(J,{children:[(0,_e.jsxs)(ne,{style:{alignItems:"center",gap:12},children:[e.logoURL?(0,_e.jsx)("img",{src:`https://storage.googleapis.com/menugic-images/${e.logoURL}`,alt:"",style:{width:52,height:52,objectFit:"cover",borderRadius:10,flexShrink:0}}):null,(0,_e.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,_e.jsx)(te,{style:{fontSize:15},children:qe(e,h)}),(0,_e.jsx)(se,{style:{marginTop:4},children:t.toFixed(2)})]})]}),(0,_e.jsxs)(ie,{children:[(0,_e.jsx)(ae,{type:"button",disabled:null!=It,onClick:()=>(async e=>{if(null!==e&&void 0!==e&&e.id){Rt(""),Nt(e.id);try{const{data:t}=await n.A.get((0,l.lA)(e.id)),r=Se(t);Ot((0,c.bE)(x,t,1,{},r,"")),g&&g("cart")}catch{Rt(Wt("Could not add item. It may no longer be available.","\u062a\u0639\u0630\u0631 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0646\u0641. \u0642\u062f \u0644\u0627 \u064a\u0643\u0648\u0646 \u0645\u062a\u0648\u0641\u0631\u0627\u064b."))}finally{Nt(null)}}})(e),children:It===e.id?Wt("Adding\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u2026"):Wt("Add to cart","\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629")}),(0,_e.jsxs)(we,{type:"button",onClick:()=>(async e=>{if(Tt&&e){Rt("");try{await n.A.delete((0,l.Vr)(e),{headers:{Authorization:`Bearer ${Tt}`}}),await Ht()}catch{Rt(Wt("Could not remove from wishlist.","\u062a\u0639\u0630\u0631 \u0627\u0644\u0625\u0632\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629."))}}})(e.id),children:[(0,_e.jsx)(d.qbC,{"aria-hidden":!0}),Wt("Remove","\u0625\u0632\u0627\u0644\u0629")]})]})]},e.id)}))})]})]}),nr)]})}))}}]);
//# sourceMappingURL=9722.1b21926b.chunk.js.map