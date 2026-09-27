"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[9722],{22139:(e,r,t)=>{t.d(r,{c:()=>a});var i=t(11222),n=t(81132);function a(e){if(null==e||""===e)return;if("all-items"===e)return;const r="string"===typeof e?e.trim():String(e);r&&"all-items"!==r&&i.A.put((0,n.O8)(r)).catch((()=>{}))}},9328:(e,r,t)=>{t.d(r,{w:()=>l});var i=t(11222),n=t(81132),a=t(62205),o=t(22139);const s=new Set;const d=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0;try{0===r&&function(e){if(!e||"all-items"===e)return;const r=String(e);s.has(r)||(s.add(r),(0,o.c)(e))}(e);const a=(0,n.cI)(e,r,t);return(await i.A.get(a)).data}catch(a){throw a}},l=(e,r)=>{const t=null!=e?String(e):null;return(0,a.q)({queryKey:["products",t,r||"all"],queryFn:e=>{let{pageParam:i=0}=e;return d(t,i,r)},getNextPageParam:(e,r)=>{if(!(e.length<10))return r.length},keepPreviousData:!0,retry:!1,refetchOnWindowFocus:!1,staleTime:0,enabled:!!t})}},32415:(e,r,t)=>{t.d(r,{u:()=>o});var i=t(11222),n=t(81132),a=t(62205);const o=(e,r)=>(0,a.q)({queryKey:["products-by-restaurant",e,r||"all"],queryFn:t=>{let{pageParam:a=0}=t;return async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0;if(!e)return[];const a=(0,n.qw)(e,r,t);return(await i.A.get(a)).data||[]}(e,a,r)},getNextPageParam:(e,r)=>{if(!(e.length<10))return r.length},enabled:!!e,refetchOnWindowFocus:!1,retry:!1})},90997:(e,r,t)=>{t.d(r,{A:()=>qe});var i=t(82483),n=t(99998),a=t(11222),o=t(91965),s=t(22829),d=t(71481),l=t(81132),c=t(86001),u=t(70268),p=t(41190);const x=p.i7`
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,f=p.i7`
  from { opacity: 0; }
  to { opacity: 1; }
`,h=p.i7`
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,g=p.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,b=p.Ay.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`,m=p.Ay.button`
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
  color: ${e=>{var r,t;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1e293b"}};
  box-shadow: none;
  transition: color 0.2s ease, opacity 0.2s ease, transform 0.15s ease;
  font-family: ${e=>{var r;return`${(null===(r=e.theme)||void 0===r?void 0:r.font)||"system-ui"}, "Noto Kufi Arabic"`}};

  &:hover {
    color: ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#0f172a"}};
    opacity: 0.8;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#3b82f6"}}55;
  }

  &:active {
    transform: scale(0.96);
  }

  svg {
    width: 24px;
    height: 24px;
    opacity: 0.95;
  }
`,v=(0,p.Ay)(m)`
  svg {
    fill: none;
    stroke: currentColor;
  }
`,y=p.Ay.div`
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
  animation: ${x} 0.2s ease-out;
`,w=p.Ay.div`
  padding: 14px 16px 12px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
`,j=p.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,k=p.Ay.div`
  font-size: 12px;
  color: #64748b;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,A=p.Ay.div`
  padding: 6px;
`,C=p.Ay.button`
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
      color: ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#0f172a"}};
    }
  }

  ${e=>e.$danger&&"\n    &:hover {\n      background: #fef2f2;\n      color: #b91c1c;\n      svg { color: #b91c1c; }\n    }\n  "}

  ${e=>e.$rtl&&"\n    text-align: right;\n    flex-direction: row-reverse;\n    direction: rtl;\n  "}
`,$=p.Ay.div`
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
  animation: ${f} 0.2s ease-out;
`,S=p.Ay.div`
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
  animation: ${h} 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: ${e=>{var r;return`${(null===(r=e.theme)||void 0===r?void 0:r.font)||"system-ui"}, "Noto Kufi Arabic"`}};
  justify-self: center;
  align-self: center;
`,_=p.Ay.div`
  height: 4px;
  width: 100%;
  background: linear-gradient(
    90deg,
    ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#0f172a"}},
    ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#0f172a"}}cc
  );
  flex-shrink: 0;
`,z=p.Ay.button`
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
`,q=p.Ay.div`
  padding: 16px 24px 6px;
  padding-right: ${e=>e.$rtl?"24px":"48px"};
  padding-left: ${e=>e.$rtl?"48px":"24px"};
  text-align: ${e=>e.$rtl?"right":"left"};
`,F=p.Ay.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0f172a;
  line-height: 1.3;
`,L=p.Ay.p`
  margin: 6px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: #64748b;
`,P=p.Ay.div`
  display: flex;
  margin: 10px 20px 0;
  padding: 4px;
  background: #f1f5f9;
  border-radius: 12px;
  gap: 4px;
`,E=p.Ay.button`
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
`,R=p.Ay.form`
  padding: 12px 24px 6px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,B=p.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,I=p.Ay.label`
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  letter-spacing: 0.02em;
`,N=p.Ay.input`
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
    border-color: ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#3b82f6"}};
    background: #fff;
    box-shadow: 0 0 0 3px ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#3b82f6"}}22;
  }
`,O=p.Ay.div`
  padding: 10px 12px;
  border-radius: 10px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #b91c1c;
  font-size: 13px;
  line-height: 1.4;
`,D=p.Ay.button`
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
  background: ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#0f172a"}};
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
  transition: filter 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease;

  &:hover {
    filter: brightness(1.06);
    box-shadow: 0 4px 14px ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#0f172a"}}44;
  }

  &:active {
    transform: scale(0.99);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }
`,W=p.Ay.div`
  padding: 8px 24px 16px;
`,T=p.Ay.button`
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
`,Q=p.Ay.div`
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
  font-family: ${e=>{var r;return`${(null===(r=e.theme)||void 0===r?void 0:r.font)||"system-ui"}, "Noto Kufi Arabic"`}};
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  overflow: hidden;
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.16);
  ${e=>e.$rtl?"\n    left: max(12px, env(safe-area-inset-left));\n    right: auto;\n  ":"\n    right: max(12px, env(safe-area-inset-right));\n    left: auto;\n  "}
  animation: ${h} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`,U=p.Ay.div`
  padding: 22px 22px 18px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
`,Y=p.Ay.div`
  min-width: 0;
`,K=p.Ay.div`
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0f172a;
`,V=p.Ay.div`
  font-size: 13px;
  color: #64748b;
  margin-top: 4px;
`,M=p.Ay.button`
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
`,H=p.Ay.div`
  flex: 1;
  overflow: auto;
  padding: 16px 20px 28px;
  min-height: 0;
`,Z=p.Ay.div`
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
`,G=p.Ay.ul`
  list-style: none;
  margin: 0 0 12px;
  padding: 0;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  padding-top: 10px;
`,J=p.Ay.li`
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
`,X=p.Ay.span`
  flex: 1;
  min-width: 0;
  color: #334155;
  font-weight: 500;
`,ee=p.Ay.span`
  flex-shrink: 0;
  color: #64748b;
  font-variant-numeric: tabular-nums;
`,re=p.Ay.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 4px;
  flex-wrap: wrap;
`,te=p.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#0f172a"}}33;
  background: #ffffff;
  color: ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#0f172a"}};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;

  &:hover:not(:disabled) {
    background: ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#0f172a"}}0d;
    border-color: ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#0f172a"}}55;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,ie=p.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
`,ne=p.Ay.span`
  font-size: 13px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.01em;
`,ae=p.Ay.span`
  font-size: 12px;
  color: #64748b;
  text-align: right;
`,oe=p.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
`,se=p.Ay.span`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
`,de=p.Ay.span`
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
`,le=p.Ay.div`
  text-align: center;
  padding: 48px 24px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.6;
`,ce=p.Ay.div`
  text-align: center;
  padding: 40px 24px;
  font-size: 14px;
  color: #64748b;
`,ue=p.Ay.div`
  padding: 4px 20px 14px;
  flex-shrink: 0;
`,pe=p.Ay.div`
  font-size: 12px;
  color: #64748b;
  margin: 0 0 10px;
  line-height: 1.45;
`,xe=p.Ay.span`
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #475569;
  margin-bottom: 4px;
`,fe=p.Ay.div`
  padding: 14px 16px;
  margin-bottom: 12px;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #fff;
`,he=p.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 6px;
`,ge=p.Ay.div`
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
  margin-bottom: 10px;
  white-space: pre-wrap;
`,be=p.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
`,me=p.Ay.button`
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
`,ve=(0,p.Ay)(me)`
  color: #b91c1c;
  border-color: rgba(185, 28, 28, 0.25);
  &:hover {
    background: #fef2f2;
    border-color: rgba(185, 28, 28, 0.4);
  }
`,ye=p.Ay.button`
  width: 100%;
  margin-top: 4px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px dashed rgba(15, 23, 42, 0.2);
  background: #fafafa;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#0f172a"}};
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: #f1f5f9;
    border-color: rgba(15, 23, 42, 0.3);
  }
`,we=p.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 8px;
`,je=p.Ay.div`
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
`,ke=p.Ay.label`
  cursor: pointer;
  line-height: 1.4;
`,Ae=p.Ay.textarea`
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
    border-color: ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#3b82f6"}};
    background: #fff;
    box-shadow: 0 0 0 3px ${e=>{var r;return(null===(r=e.theme)||void 0===r?void 0:r.mainColor)||"#3b82f6"}}22;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;var Ce=t(56723);function $e(e){var r;if(!e)return 0;const t=parseFloat(e.en_price)||0,i=parseFloat(null===e||void 0===e||null===(r=e.category)||void 0===r?void 0:r.discount)||0,n=parseFloat(null===e||void 0===e?void 0:e.discount)||0;return t*(1-(0===i?n:i)/100)}function Se(e,r){var t,i;const n=e.product_name||(null===(t=e.product_details)||void 0===t?void 0:t.en_name)||(null===(i=e.product_details)||void 0===i?void 0:i.ar_name);return n||("ar"===r?`\u0645\u0646\u062a\u062c #${e.product_id}`:`Item #${e.product_id}`)}function _e(e,r){if(!e)return"";return("ar"===r?e.ar_name||e.en_name:e.en_name||e.ar_name)||`#${e.id}`}function ze(e){const r=String(e||"").toLowerCase();return"completed"===r?{$bg:"#dcfce7",$fg:"#166534"}:"cancelled"===r||"canceled"===r?{$bg:"#fee2e2",$fg:"#b91c1c"}:"confirmed"===r||"preparing"===r||"ready"===r?{$bg:"#dbeafe",$fg:"#1d4ed8"}:"pending"===r?{$bg:"#ffedd5",$fg:"#c2410c"}:{$bg:"#f1f5f9",$fg:"#475569"}}const qe=(0,i.forwardRef)((function(e,r){let{restaurant:t,restaurantName:p,activeLanguage:x="en",popupHandler:f}=e;const[h,qe]=(0,i.useState)(null),[Fe,Le]=(0,i.useState)(!1),[Pe,Ee]=(0,i.useState)(!1),[Re,Be]=(0,i.useState)(!1),[Ie,Ne]=(0,i.useState)("signin"),[Oe,De]=(0,i.useState)([]),[We,Te]=(0,i.useState)(!1),[Qe,Ue]=(0,i.useState)(""),[Ye,Ke]=(0,i.useState)(!1),[Ve,Me]=(0,i.useState)(""),[He,Ze]=(0,i.useState)(""),[Ge,Je]=(0,i.useState)(""),[Xe,er]=(0,i.useState)(""),[rr,tr]=(0,i.useState)(""),[ir,nr]=(0,i.useState)(""),[ar,or]=(0,i.useState)(""),[sr,dr]=(0,i.useState)(""),[lr,cr]=(0,i.useState)(null),[ur,pr]=(0,i.useState)("orders"),[xr,fr]=(0,i.useState)("list"),[hr,gr]=(0,i.useState)([]),[br,mr]=(0,i.useState)(!1),[vr,yr]=(0,i.useState)(""),[wr,jr]=(0,i.useState)(!1),[kr,Ar]=(0,i.useState)({label:"",full_address:"",is_default:!1}),[Cr,$r]=(0,i.useState)(null),[Sr,_r]=(0,i.useState)(!1),[zr,qr]=(0,i.useState)([]),[Fr,Lr]=(0,i.useState)(!1),[Pr,Er]=(0,i.useState)(""),[Rr,Br]=(0,i.useState)(null),Ir=(0,o.wA)(),Nr=(0,i.useRef)(null),Or=(e,r)=>"ar"===x?r:e,Dr=(0,u.wU)(p),Wr=null===t||void 0===t?void 0:t.id,Tr="ar"===x,Qr=(0,i.useCallback)((()=>{f&&f(null)}),[f]),Ur=(0,i.useCallback)((async()=>{if(Dr&&Wr){Le(!0);try{const{data:e}=await a.A.get(l.EY,{headers:{Authorization:`Bearer ${Dr}`}});qe(e)}catch{qe(null),(0,u.zV)(p)}finally{Le(!1)}}else qe(null)}),[Dr,Wr,p]);(0,i.useEffect)((()=>{Ur()}),[Ur]),(0,i.useEffect)((()=>{if(!Pe&&!Re&&!Sr)return;const e=document.body.style.overflow,r=document.body.style.touchAction;return document.body.style.overflow="hidden",document.body.style.touchAction="none",()=>{document.body.style.overflow=e,document.body.style.touchAction=r}}),[Pe,Re,Sr]),(0,i.useEffect)((()=>{const e=e=>{Ye&&Nr.current&&!Nr.current.contains(e.target)&&Ke(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[Ye]);const Yr=(0,i.useCallback)((async()=>{if(Dr){Te(!0);try{const{data:e}=await a.A.get(l.TZ,{headers:{Authorization:`Bearer ${Dr}`}});De(e.orders||[])}catch{De([])}finally{Te(!1)}}}),[Dr]),Kr=(0,i.useCallback)((async()=>{if(Dr){mr(!0);try{const{data:e}=await a.A.get(l.Qf,{headers:{Authorization:`Bearer ${Dr}`}});gr(e.addresses||[])}catch{gr([])}finally{mr(!1)}}}),[Dr]),Vr=(0,i.useCallback)((async()=>{if(Dr){Lr(!0);try{const{data:e}=await a.A.get(l.Vb,{headers:{Authorization:`Bearer ${Dr}`}});qr(Array.isArray(e)?e:[])}catch{qr([]),Er("ar"===x?"\u062a\u0639\u0630\u0631 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0641\u0636\u0644\u0629.":"Could not load wishlist.")}finally{Lr(!1)}}}),[Dr,x]),Mr=(0,i.useCallback)((()=>{Qr(),Er(""),_r(!0),Vr()}),[Qr,Vr]),Hr=(0,i.useCallback)((()=>{Qr(),dr(""),pr("orders"),Be(!0),Yr()}),[Qr,Yr]),Zr=(0,i.useCallback)((()=>{Qr(),yr(""),fr("list"),$r(null),Ar({label:"",full_address:"",is_default:!1}),pr("addresses"),Be(!0),Kr()}),[Qr,Kr]),Gr=(0,i.useCallback)((()=>{Qr(),Fe||(Ke(!1),h?Hr():(Ne("signin"),Ue(""),Ee(!0)))}),[Qr,Fe,h,Hr]),Jr=(0,i.useCallback)((()=>{Qr(),Fe||(Ke(!1),h?Mr():(Ne("signin"),Ue(""),Ee(!0)))}),[Qr,Fe,h,Mr]);(0,i.useImperativeHandle)(r,(()=>({openOrders:()=>Gr(),openWishlist:()=>Jr()})),[Gr,Jr]);const Xr=async e=>{dr("");const r=(t=e.items)?(Array.isArray(t)?t:[]).map((e=>{var r,t,i,n,a;return{product_id:null!==(r=null!==(t=e.product_id)&&void 0!==t?t:e.productId)&&void 0!==r?r:e.id,quantity:Math.max(1,Number(e.quantity)||1),form_data:null!==(i=null!==(n=e.form_data)&&void 0!==n?n:e.formData)&&void 0!==i?i:{},instruction:null!==(a=e.instruction)&&void 0!==a?a:""}})).filter((e=>null!=e.product_id)):[];var t;if(0!==r.length){cr(e.id);try{for(const e of r){const{data:r}=await a.A.get((0,l.lA)(e.product_id)),t=$e(r);Ir((0,c.bE)(p,r,e.quantity,e.form_data||{},t,e.instruction||""))}Be(!1),f&&f("cart")}catch{dr(Or("Could not add items. A product may have been removed from the menu.","\u062a\u0639\u0630\u0631 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0623\u0635\u0646\u0627\u0641. \u0642\u062f \u064a\u0643\u0648\u0646 \u0623\u062d\u062f \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631."))}finally{cr(null)}}else dr(Or("This order has no saved line items. Only newer orders can be reordered.","\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0635\u0646\u0627\u0641 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628."))},et=e=>{if(!e)return"";try{return new Date(e).toLocaleString("ar"===x?"ar-LB":"en-US",{dateStyle:"medium",timeStyle:"short"})}catch{return String(e)}},rt=(null===h||void 0===h?void 0:h.full_name)||(null===h||void 0===h?void 0:h.email),tt=null!==h&&void 0!==h&&h.email&&null!==h&&void 0!==h&&h.full_name?h.email:null,it="undefined"!==typeof document?document.body:null;return(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsxs)(b,{dir:Tr?"rtl":"ltr",children:[(0,Ce.jsxs)(g,{ref:Nr,children:[(0,Ce.jsx)(m,{type:"button",onClick:()=>{Fe||(Qr(),h?Ke((e=>!e)):(Ke(!1),Ne("signin"),Ue(""),Ee(!0)))},"aria-label":Or("Account","\u0627\u0644\u062d\u0633\u0627\u0628"),"aria-expanded":Ye,children:(0,Ce.jsx)(s.SNd,{})}),Ye&&h&&(0,Ce.jsxs)(y,{$rtl:Tr,dir:Tr?"rtl":"ltr",children:[(0,Ce.jsxs)(w,{children:[(0,Ce.jsx)(j,{children:rt}),tt&&(0,Ce.jsx)(k,{children:tt})]}),(0,Ce.jsxs)(A,{children:[(0,Ce.jsxs)(C,{type:"button",$rtl:Tr,onClick:()=>{Ke(!1),Hr()},children:[(0,Ce.jsx)(d.kkc,{"aria-hidden":!0}),Or("My orders","\u0637\u0644\u0628\u0627\u062a\u064a")]}),(0,Ce.jsxs)(C,{type:"button",$rtl:Tr,"data-outline-wishlist-heart":"true",onClick:()=>{Ke(!1),Mr()},children:[(0,Ce.jsx)(s.phF,{"aria-hidden":!0}),Or("Wishlist","\u0627\u0644\u0645\u0641\u0636\u0644\u0629")]}),(0,Ce.jsxs)(C,{type:"button",$rtl:Tr,onClick:()=>{Ke(!1),Zr()},children:[(0,Ce.jsx)(d.vq8,{"aria-hidden":!0}),Or("Addresses","\u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646")]}),(0,Ce.jsxs)(C,{type:"button",$rtl:Tr,$danger:!0,onClick:()=>{(0,u.zV)(p),qe(null),De([]),qr([]),_r(!1),Ke(!1)},children:[(0,Ce.jsx)(d.axc,{"aria-hidden":!0}),Or("Log out","\u062e\u0631\u0648\u062c")]})]})]})]}),h&&(0,Ce.jsx)(v,{type:"button",onClick:()=>{Fe||(Ke(!1),Mr())},"aria-label":Or("Wishlist","\u0627\u0644\u0645\u0641\u0636\u0644\u0629"),children:(0,Ce.jsx)(s.phF,{})})]}),Pe&&it&&(0,n.createPortal)((0,Ce.jsx)($,{onClick:()=>Ee(!1),role:"presentation",children:(0,Ce.jsxs)(S,{onClick:e=>e.stopPropagation(),dir:Tr?"rtl":"ltr",children:[(0,Ce.jsx)(_,{}),(0,Ce.jsx)(z,{type:"button",$rtl:Tr,onClick:()=>Ee(!1),"aria-label":Or("Close","\u0625\u063a\u0644\u0627\u0642"),children:(0,Ce.jsx)(d.QCr,{})}),(0,Ce.jsxs)(q,{$rtl:Tr,children:[(0,Ce.jsx)(F,{children:"signin"===Ie?Or("Welcome back","\u0645\u0631\u062d\u0628\u0627\u064b \u0628\u0639\u0648\u062f\u062a\u0643"):Or("Create your account","\u0623\u0646\u0634\u0626 \u062d\u0633\u0627\u0628\u0643")}),(0,Ce.jsx)(L,{children:"signin"===Ie?Or("Sign in to view order history and speed up checkout.","\u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u0639\u0631\u0636 \u0637\u0644\u0628\u0627\u062a\u0643 \u0648\u062a\u0633\u0631\u064a\u0639 \u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628."):Or("Register with email and phone to track your orders.","\u0633\u062c\u0651\u0644 \u0628\u0631\u064a\u062f\u0643 \u0648\u0647\u0627\u062a\u0641\u0643 \u0644\u062a\u062a\u0628\u0639 \u0637\u0644\u0628\u0627\u062a\u0643.")})]}),(0,Ce.jsxs)(P,{children:[(0,Ce.jsx)(E,{type:"button",$active:"signin"===Ie,onClick:()=>{Ne("signin"),Ue(""),tr("")},children:Or("Sign in","\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644")}),(0,Ce.jsx)(E,{type:"button",$active:"register"===Ie,onClick:()=>{Ne("register"),Ue(""),tr("")},children:Or("Register","\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628")})]}),"signin"===Ie?(0,Ce.jsxs)(R,{onSubmit:async e=>{if(e.preventDefault(),Ue(""),Wr)try{const{data:e}=await a.A.post(l.w4,{restaurant_id:Wr,email:Ve.trim(),password:He});(0,u.gO)(p,e.accessToken),Ee(!1),Ze(""),await Ur()}catch(i){var r,t;Ue((null===(r=i.response)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.message)||Or("Sign in failed. Check your email and password.","\u0641\u0634\u0644 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644."))}},children:[(0,Ce.jsxs)(B,{children:[(0,Ce.jsx)(I,{children:Or("Email","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a")}),(0,Ce.jsx)(N,{type:"email",autoComplete:"email",value:Ve,onChange:e=>Me(e.target.value),required:!0})]}),(0,Ce.jsxs)(B,{children:[(0,Ce.jsx)(I,{children:Or("Password","\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631")}),(0,Ce.jsx)(N,{type:"password",autoComplete:"current-password",value:He,onChange:e=>Ze(e.target.value),required:!0})]}),Qe&&(0,Ce.jsx)(O,{children:Qe}),(0,Ce.jsx)(D,{type:"submit",children:Or("Sign in","\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644")})]}):(0,Ce.jsxs)(R,{onSubmit:async e=>{if(e.preventDefault(),Ue(""),Wr)if(Xe===rr)try{await a.A.post(l.pO,{restaurant_id:Wr,email:Ge.trim(),password:Xe,phone_number:ir.trim(),full_name:ar.trim()});const{data:e}=await a.A.post(l.w4,{restaurant_id:Wr,email:Ge.trim(),password:Xe});(0,u.gO)(p,e.accessToken),Ee(!1),er(""),tr(""),await Ur()}catch(i){var r,t;Ue((null===(r=i.response)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.message)||Or("Registration failed. Try a different email or phone.","\u0641\u0634\u0644 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628."))}else Ue(Or("Passwords do not match.","\u0643\u0644\u0645\u062a\u0627 \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u062a\u064a\u0646."))},children:[(0,Ce.jsxs)(B,{children:[(0,Ce.jsx)(I,{children:Or("Full name","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644")}),(0,Ce.jsx)(N,{value:ar,onChange:e=>or(e.target.value),required:!0})]}),(0,Ce.jsxs)(B,{children:[(0,Ce.jsx)(I,{children:Or("Phone","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641")}),(0,Ce.jsx)(N,{type:"tel",value:ir,onChange:e=>nr(e.target.value),required:!0})]}),(0,Ce.jsxs)(B,{children:[(0,Ce.jsx)(I,{children:Or("Email","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a")}),(0,Ce.jsx)(N,{type:"email",autoComplete:"email",value:Ge,onChange:e=>Je(e.target.value),required:!0})]}),(0,Ce.jsxs)(B,{children:[(0,Ce.jsx)(I,{children:Or("Password (8+ characters)","\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 (\u0668 \u0623\u062d\u0631\u0641 \u0623\u0648 \u0623\u0643\u062b\u0631)")}),(0,Ce.jsx)(N,{type:"password",autoComplete:"new-password",value:Xe,onChange:e=>er(e.target.value),minLength:8,required:!0})]}),(0,Ce.jsxs)(B,{children:[(0,Ce.jsx)(I,{children:Or("Confirm password","\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631")}),(0,Ce.jsx)(N,{type:"password",autoComplete:"new-password",value:rr,onChange:e=>tr(e.target.value),minLength:8,required:!0})]}),Qe&&(0,Ce.jsx)(O,{children:Qe}),(0,Ce.jsx)(D,{type:"submit",children:Or("Create account","\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628")})]}),(0,Ce.jsx)(W,{children:(0,Ce.jsx)(T,{type:"button",onClick:()=>Ee(!1),children:Or("Cancel","\u0625\u0644\u063a\u0627\u0621")})})]})}),it),Re&&it&&(0,n.createPortal)((0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsx)($,{onClick:()=>{dr(""),Be(!1)}}),(0,Ce.jsxs)(Q,{$rtl:Tr,dir:Tr?"rtl":"ltr",children:[(0,Ce.jsxs)(U,{children:[(0,Ce.jsxs)(Y,{children:[(0,Ce.jsx)(K,{children:"orders"===ur?Or("My orders","\u0637\u0644\u0628\u0627\u062a\u064a"):"edit"===xr?Cr?Or("Edit address","\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646"):Or("New address","\u0639\u0646\u0648\u0627\u0646 \u062c\u062f\u064a\u062f"):Or("Delivery addresses","\u0639\u0646\u0627\u0648\u064a\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644")}),(0,Ce.jsx)(V,{children:"orders"===ur?Or("Signed-in orders for this restaurant. Reorder adds items to your cart.","\u0637\u0644\u0628\u0627\u062a\u0643 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u0637\u0639\u0645. \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0637\u0644\u0628 \u062a\u0636\u064a\u0641 \u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629."):"edit"===xr?Or("Save a label and full address. One can be default for checkout.","\u0627\u062d\u0641\u0638 \u0627\u0633\u0645\u0627\u064b \u0644\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0627\u0644\u0646\u0635 \u0627\u0644\u0643\u0627\u0645\u0644. \u064a\u0645\u0643\u0646 \u062c\u0639\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0627\u064b \u0639\u0646\u062f \u0627\u0644\u0637\u0644\u0628."):Or("Manage multiple delivery addresses for checkout.","\u0623\u062f\u0650\u0631 \u0639\u062f\u0629 \u0639\u0646\u0627\u0648\u064a\u0646 \u0644\u0644\u062a\u0648\u0635\u064a\u0644 \u0639\u0646\u062f \u0627\u0644\u0637\u0644\u0628.")})]}),(0,Ce.jsx)(M,{type:"button",onClick:()=>{dr(""),yr(""),Be(!1)},"aria-label":"Close",children:(0,Ce.jsx)(d.QCr,{})})]}),"addresses"===ur&&"edit"===xr&&(0,Ce.jsx)("div",{style:{padding:"0 20px 8px"},children:(0,Ce.jsxs)(T,{type:"button",style:{textAlign:Tr?"right":"left",width:"auto",padding:"8px 0"},onClick:()=>{yr(""),fr("list"),$r(null)},children:[(0,Ce.jsx)(d.QVr,{style:{marginRight:Tr?0:8,marginLeft:Tr?8:0,transform:Tr?"rotate(180deg)":"none"}}),Or("Back to list","\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0642\u0627\u0626\u0645\u0629")]})}),(0,Ce.jsx)(ue,{children:(0,Ce.jsxs)(P,{style:{margin:0},children:[(0,Ce.jsx)(E,{type:"button",$active:"orders"===ur,onClick:()=>{pr("orders"),Yr()},children:Or("Orders","\u0627\u0644\u0637\u0644\u0628\u0627\u062a")}),(0,Ce.jsx)(E,{type:"button",$active:"addresses"===ur,onClick:()=>{pr("addresses"),fr("list"),Kr()},children:Or("Addresses","\u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646")})]})}),"orders"===ur&&sr&&(0,Ce.jsx)("div",{style:{padding:"0 20px 12px"},children:(0,Ce.jsx)(O,{children:sr})}),"addresses"===ur&&vr&&(0,Ce.jsx)("div",{style:{padding:"0 20px 12px"},children:(0,Ce.jsx)(O,{children:vr})}),"orders"===ur&&(0,Ce.jsx)(H,{children:We?(0,Ce.jsx)(ce,{children:Or("Loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")}):0===Oe.length?(0,Ce.jsx)(le,{children:Or("You have no orders yet. Complete a checkout while signed in to see them here.","\u0644\u0627 \u062a\u0648\u062c\u062f \u0637\u0644\u0628\u0627\u062a \u0628\u0639\u062f. \u0623\u0646\u0647\u0650 \u0637\u0644\u0628\u0627\u064b \u0648\u0623\u0646\u062a \u0645\u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u062a\u0638\u0647\u0631 \u0647\u0646\u0627.")}):Oe.map((e=>{const r=Array.isArray(e.items)?e.items:[];return(0,Ce.jsxs)(Z,{children:[(0,Ce.jsxs)(ie,{children:[(0,Ce.jsxs)(ne,{children:["#",e.id]}),(0,Ce.jsx)(ae,{children:et(e.order_date)})]}),(e.delivery_type||e.customer_address)&&(0,Ce.jsxs)(pe,{children:[e.delivery_type&&(0,Ce.jsx)(xe,{children:e.delivery_type}),e.customer_address&&(0,Ce.jsx)("div",{children:e.customer_address})]}),r.length>0&&(0,Ce.jsx)(G,{children:r.map(((r,t)=>{var i,n,a;return(0,Ce.jsxs)(J,{children:[(0,Ce.jsx)(X,{children:Se({...r,product_id:null!==(i=null!==(n=r.product_id)&&void 0!==n?n:r.productId)&&void 0!==i?i:r.id},x)}),(0,Ce.jsxs)(ee,{children:["\xd7",null!==(a=r.quantity)&&void 0!==a?a:1]})]},`${e.id}-line-${t}`)}))}),(0,Ce.jsxs)(oe,{children:[(0,Ce.jsx)(de,{...ze(e.status),children:e.status}),(0,Ce.jsxs)(se,{children:[parseFloat(e.total||0).toFixed(2)," ",e.currency||""]})]}),(0,Ce.jsx)(re,{children:(0,Ce.jsxs)(te,{type:"button",disabled:null!=lr,onClick:()=>Xr(e),children:[(0,Ce.jsx)(d.Swo,{"aria-hidden":!0}),lr===e.id?Or("Adding\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u2026"):Or("Reorder","\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0637\u0644\u0628")]})})]},e.id)}))}),"addresses"===ur&&"list"===xr&&(0,Ce.jsxs)(H,{children:[br?(0,Ce.jsx)(ce,{children:Or("Loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")}):0===hr.length?(0,Ce.jsx)(le,{children:Or("No saved addresses yet. Add one for faster delivery checkout.","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u0628\u0639\u062f. \u0623\u0636\u0641 \u0639\u0646\u0648\u0627\u0646\u0627\u064b \u0644\u062a\u0633\u0631\u064a\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644.")}):hr.map((e=>(0,Ce.jsxs)(fe,{children:[(0,Ce.jsx)(he,{children:(0,Ce.jsxs)("span",{children:[e.label||Or("Address","\u0639\u0646\u0648\u0627\u0646"),e.is_default?(0,Ce.jsxs)("span",{style:{marginLeft:8,fontSize:11,color:"#64748b"},children:["(",Or("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a"),")"]}):null]})}),(0,Ce.jsx)(ge,{children:e.full_address}),(0,Ce.jsxs)(be,{children:[!e.is_default&&(0,Ce.jsxs)(me,{type:"button",onClick:()=>(async e=>{if(Dr&&e){yr("");try{await a.A.put((0,l.SI)(e),{is_default:!0},{headers:{Authorization:`Bearer ${Dr}`}}),await Kr()}catch(i){var r,t;yr((null===(r=i.response)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.message)||Or("Could not update default.","\u062a\u0639\u0630\u0631 \u062a\u0639\u064a\u064a\u0646 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a."))}}})(e.id),children:[(0,Ce.jsx)(d.gt3,{"aria-hidden":!0}),Or("Set default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")]}),(0,Ce.jsxs)(me,{type:"button",onClick:()=>{return r=e,yr(""),$r(r.id),Ar({label:r.label||"",full_address:r.full_address||"",is_default:!!r.is_default}),void fr("edit");var r},children:[(0,Ce.jsx)(d.F7,{"aria-hidden":!0}),Or("Edit","\u062a\u0639\u062f\u064a\u0644")]}),(0,Ce.jsxs)(ve,{type:"button",onClick:()=>(async e=>{if(Dr&&e&&("undefined"===typeof window||window.confirm(Or("Delete this address?","\u062d\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0639\u0646\u0648\u0627\u0646\u061f")))){yr("");try{await a.A.delete((0,l.SI)(e),{headers:{Authorization:`Bearer ${Dr}`}}),await Kr()}catch(i){var r,t;yr((null===(r=i.response)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.message)||Or("Could not delete address.","\u062a\u0639\u0630\u0631 \u062d\u0630\u0641 \u0627\u0644\u0639\u0646\u0648\u0627\u0646."))}}})(e.id),children:[(0,Ce.jsx)(d.qbC,{"aria-hidden":!0}),Or("Delete","\u062d\u0630\u0641")]})]})]},e.id))),(0,Ce.jsx)(ye,{type:"button",onClick:()=>{yr(""),$r(null),Ar({label:"",full_address:"",is_default:!1}),fr("edit")},children:Or("+ Add address","+ \u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0648\u0627\u0646")})]}),"addresses"===ur&&"edit"===xr&&(0,Ce.jsx)(H,{children:(0,Ce.jsxs)(we,{onSubmit:async e=>{var r;if(null===e||void 0===e||null===(r=e.preventDefault)||void 0===r||r.call(e),!Dr)return;const t=String(kr.full_address||"").trim();if(t){jr(!0),yr("");try{Cr?await a.A.put((0,l.SI)(Cr),{label:String(kr.label||"").trim()||null,full_address:t,is_default:!!kr.is_default},{headers:{Authorization:`Bearer ${Dr}`}}):await a.A.post(l.Qf,{label:String(kr.label||"").trim()||null,full_address:t,is_default:!!kr.is_default},{headers:{Authorization:`Bearer ${Dr}`}}),await Kr(),fr("list"),$r(null)}catch(o){var i,n;yr((null===(i=o.response)||void 0===i||null===(n=i.data)||void 0===n?void 0:n.message)||Or("Could not save address.","\u062a\u0639\u0630\u0631 \u062d\u0641\u0638 \u0627\u0644\u0639\u0646\u0648\u0627\u0646."))}finally{jr(!1)}}else yr(Or("Address is required.","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0645\u0637\u0644\u0648\u0628."))},children:[(0,Ce.jsxs)(B,{children:[(0,Ce.jsx)(I,{children:Or("Label (optional)","\u0627\u0633\u0645 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,Ce.jsx)(N,{value:kr.label,onChange:e=>Ar((r=>({...r,label:e.target.value}))),placeholder:Or("Home, Work, \u2026","\u0627\u0644\u0645\u0646\u0632\u0644\u060c \u0627\u0644\u0639\u0645\u0644\u060c \u2026")})]}),(0,Ce.jsxs)(B,{children:[(0,Ce.jsx)(I,{children:Or("Full address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,Ce.jsx)(Ae,{rows:4,value:kr.full_address,onChange:e=>Ar((r=>({...r,full_address:e.target.value}))),placeholder:Or("Street, building, floor, \u2026","\u0627\u0644\u0634\u0627\u0631\u0639\u060c \u0627\u0644\u0645\u0628\u0646\u0649\u060c \u0627\u0644\u0637\u0627\u0628\u0642\u060c \u2026")})]}),(0,Ce.jsxs)(je,{children:[(0,Ce.jsx)("input",{type:"checkbox",id:"addr-default",checked:!!kr.is_default,onChange:e=>Ar((r=>({...r,is_default:e.target.checked})))}),(0,Ce.jsx)(ke,{htmlFor:"addr-default",children:Or("Use as default delivery address","\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0643\u0639\u0646\u0648\u0627\u0646 \u062a\u0648\u0635\u064a\u0644 \u0627\u0641\u062a\u0631\u0627\u0636\u064a")})]}),(0,Ce.jsx)(D,{type:"submit",disabled:wr,children:wr?Or("Saving\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062d\u0641\u0638\u2026"):Or("Save address","\u062d\u0641\u0638 \u0627\u0644\u0639\u0646\u0648\u0627\u0646")})]})})]})]}),it),Sr&&it&&(0,n.createPortal)((0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsx)($,{onClick:()=>{Er(""),_r(!1)}}),(0,Ce.jsxs)(Q,{$rtl:Tr,dir:Tr?"rtl":"ltr",children:[(0,Ce.jsxs)(U,{children:[(0,Ce.jsxs)(Y,{children:[(0,Ce.jsx)(K,{children:Or("Wishlist","\u0627\u0644\u0645\u0641\u0636\u0644\u0629")}),(0,Ce.jsx)(V,{children:Or("Items you saved for this restaurant.","\u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u062a\u064a \u062d\u0641\u0638\u062a\u0647\u0627 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0637\u0639\u0645.")})]}),(0,Ce.jsx)(M,{type:"button",onClick:()=>{Er(""),_r(!1)},"aria-label":Or("Close","\u0625\u063a\u0644\u0627\u0642"),children:(0,Ce.jsx)(d.QCr,{})})]}),Pr&&(0,Ce.jsx)("div",{style:{padding:"0 20px 12px"},children:(0,Ce.jsx)(O,{children:Pr})}),(0,Ce.jsx)(H,{children:Fr?(0,Ce.jsx)(ce,{children:Or("Loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")}):0===zr.length?(0,Ce.jsx)(le,{children:Or("No saved items yet. Use the heart on products to add them here.","\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0635\u0646\u0627\u0641 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f. \u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0642\u0644\u0628 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0644\u0625\u0636\u0627\u0641\u062a\u0647\u0627.")}):zr.map((e=>{const r=$e(e);return(0,Ce.jsxs)(Z,{children:[(0,Ce.jsxs)(ie,{style:{alignItems:"center",gap:12},children:[e.logoURL?(0,Ce.jsx)("img",{src:`https://storage.googleapis.com/menugic-images/${e.logoURL}`,alt:"",style:{width:52,height:52,objectFit:"cover",borderRadius:10,flexShrink:0}}):null,(0,Ce.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,Ce.jsx)(X,{style:{fontSize:15},children:_e(e,x)}),(0,Ce.jsx)(ae,{style:{marginTop:4},children:r.toFixed(2)})]})]}),(0,Ce.jsxs)(re,{children:[(0,Ce.jsx)(te,{type:"button",disabled:null!=Rr,onClick:()=>(async e=>{if(null!==e&&void 0!==e&&e.id){Er(""),Br(e.id);try{const{data:r}=await a.A.get((0,l.lA)(e.id)),t=$e(r);Ir((0,c.bE)(p,r,1,{},t,"")),f&&f("cart")}catch{Er(Or("Could not add item. It may no longer be available.","\u062a\u0639\u0630\u0631 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0646\u0641. \u0642\u062f \u0644\u0627 \u064a\u0643\u0648\u0646 \u0645\u062a\u0648\u0641\u0631\u0627\u064b."))}finally{Br(null)}}})(e),children:Rr===e.id?Or("Adding\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u2026"):Or("Add to cart","\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629")}),(0,Ce.jsxs)(ve,{type:"button",onClick:()=>(async e=>{if(Dr&&e){Er("");try{await a.A.delete((0,l.Vr)(e),{headers:{Authorization:`Bearer ${Dr}`}}),await Vr()}catch{Er(Or("Could not remove from wishlist.","\u062a\u0639\u0630\u0631 \u0627\u0644\u0625\u0632\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629."))}}})(e.id),children:[(0,Ce.jsx)(d.qbC,{"aria-hidden":!0}),Or("Remove","\u0625\u0632\u0627\u0644\u0629")]})]})]},e.id)}))})]})]}),it)]})}))}}]);
//# sourceMappingURL=9722.d5d471f0.chunk.js.map