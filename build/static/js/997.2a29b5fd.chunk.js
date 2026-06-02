"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[997],{90997:(e,r,t)=>{t.d(r,{A:()=>Le});var i=t(82483),a=t(99998),n=t(11222),o=t(91965),s=t(22829),d=t(71481),l=t(81132),c=t(86001),u=t(70268),p=t(41190);const x=p.i7`
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
`,j=p.Ay.div`
  padding: 14px 16px 12px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
`,w=p.Ay.div`
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
`,_=p.Ay.div`
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
`,S=p.Ay.div`
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
`,L=p.Ay.div`
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
`,q=p.Ay.p`
  margin: 6px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: #64748b;
`,E=p.Ay.div`
  display: flex;
  margin: 10px 20px 0;
  padding: 4px;
  background: #f1f5f9;
  border-radius: 12px;
  gap: 4px;
`,R=p.Ay.button`
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
`,B=p.Ay.form`
  padding: 12px 24px 6px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,I=p.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,N=p.Ay.label`
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  letter-spacing: 0.02em;
`,D=p.Ay.input`
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
`,P=p.Ay.div`
  padding: 10px 12px;
  border-radius: 10px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #b91c1c;
  font-size: 13px;
  line-height: 1.4;
`,O=p.Ay.button`
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
`,Q=p.Ay.button`
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
`,T=p.Ay.div`
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
`,V=p.Ay.div`
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0f172a;
`,M=p.Ay.div`
  font-size: 13px;
  color: #64748b;
  margin-top: 4px;
`,H=p.Ay.button`
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
`,K=p.Ay.div`
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
`,ae=p.Ay.span`
  font-size: 13px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.01em;
`,ne=p.Ay.span`
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
`,je=p.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 8px;
`,we=p.Ay.div`
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
`;var Ce=t(56723);function $e(e){var r;if(!e)return 0;const t=parseFloat(e.en_price)||0,i=parseFloat(null===e||void 0===e||null===(r=e.category)||void 0===r?void 0:r.discount)||0,a=parseFloat(null===e||void 0===e?void 0:e.discount)||0;return t*(1-(0===i?a:i)/100)}function _e(e,r){var t,i;const a=e.product_name||(null===(t=e.product_details)||void 0===t?void 0:t.en_name)||(null===(i=e.product_details)||void 0===i?void 0:i.ar_name);return a||("ar"===r?`\u0645\u0646\u062a\u062c #${e.product_id}`:`Item #${e.product_id}`)}function Se(e,r){if(!e)return"";return("ar"===r?e.ar_name||e.en_name:e.en_name||e.ar_name)||`#${e.id}`}function ze(e){const r=String(e||"").toLowerCase();return"completed"===r?{$bg:"#dcfce7",$fg:"#166534"}:"cancelled"===r||"canceled"===r?{$bg:"#fee2e2",$fg:"#b91c1c"}:"confirmed"===r||"preparing"===r||"ready"===r?{$bg:"#dbeafe",$fg:"#1d4ed8"}:"pending"===r?{$bg:"#ffedd5",$fg:"#c2410c"}:{$bg:"#f1f5f9",$fg:"#475569"}}const Le=(0,i.forwardRef)((function(e,r){let{restaurant:t,restaurantName:p,activeLanguage:x="en",popupHandler:f}=e;const[h,Le]=(0,i.useState)(null),[Fe,qe]=(0,i.useState)(!1),[Ee,Re]=(0,i.useState)(!1),[Be,Ie]=(0,i.useState)(!1),[Ne,De]=(0,i.useState)("signin"),[Pe,Oe]=(0,i.useState)([]),[We,Qe]=(0,i.useState)(!1),[Te,Ue]=(0,i.useState)(""),[Ye,Ve]=(0,i.useState)(!1),[Me,He]=(0,i.useState)(""),[Ke,Ze]=(0,i.useState)(""),[Ge,Je]=(0,i.useState)(""),[Xe,er]=(0,i.useState)(""),[rr,tr]=(0,i.useState)(""),[ir,ar]=(0,i.useState)(""),[nr,or]=(0,i.useState)(""),[sr,dr]=(0,i.useState)(""),[lr,cr]=(0,i.useState)(null),[ur,pr]=(0,i.useState)("orders"),[xr,fr]=(0,i.useState)("list"),[hr,gr]=(0,i.useState)([]),[br,mr]=(0,i.useState)(!1),[vr,yr]=(0,i.useState)(""),[jr,wr]=(0,i.useState)(!1),[kr,Ar]=(0,i.useState)({label:"",full_address:"",is_default:!1}),[Cr,$r]=(0,i.useState)(null),[_r,Sr]=(0,i.useState)(!1),[zr,Lr]=(0,i.useState)([]),[Fr,qr]=(0,i.useState)(!1),[Er,Rr]=(0,i.useState)(""),[Br,Ir]=(0,i.useState)(null),Nr=(0,o.wA)(),Dr=(0,i.useRef)(null),Pr=(e,r)=>"ar"===x?r:e,Or=(0,u.wU)(p),Wr=null===t||void 0===t?void 0:t.id,Qr="ar"===x,Tr=(0,i.useCallback)((()=>{f&&f(null)}),[f]),Ur=(0,i.useCallback)((async()=>{if(Or&&Wr){qe(!0);try{const{data:e}=await n.A.get(l.EY,{headers:{Authorization:`Bearer ${Or}`}});Le(e)}catch{Le(null),(0,u.zV)(p)}finally{qe(!1)}}else Le(null)}),[Or,Wr,p]);(0,i.useEffect)((()=>{Ur()}),[Ur]),(0,i.useEffect)((()=>{if(!Ee&&!Be&&!_r)return;const e=document.body.style.overflow,r=document.body.style.touchAction;return document.body.style.overflow="hidden",document.body.style.touchAction="none",()=>{document.body.style.overflow=e,document.body.style.touchAction=r}}),[Ee,Be,_r]),(0,i.useEffect)((()=>{const e=e=>{Ye&&Dr.current&&!Dr.current.contains(e.target)&&Ve(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[Ye]);const Yr=(0,i.useCallback)((async()=>{if(Or){Qe(!0);try{const{data:e}=await n.A.get(l.TZ,{headers:{Authorization:`Bearer ${Or}`}});Oe(e.orders||[])}catch{Oe([])}finally{Qe(!1)}}}),[Or]),Vr=(0,i.useCallback)((async()=>{if(Or){mr(!0);try{const{data:e}=await n.A.get(l.Qf,{headers:{Authorization:`Bearer ${Or}`}});gr(e.addresses||[])}catch{gr([])}finally{mr(!1)}}}),[Or]),Mr=(0,i.useCallback)((async()=>{if(Or){qr(!0);try{const{data:e}=await n.A.get(l.Vb,{headers:{Authorization:`Bearer ${Or}`}});Lr(Array.isArray(e)?e:[])}catch{Lr([]),Rr("ar"===x?"\u062a\u0639\u0630\u0631 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0641\u0636\u0644\u0629.":"Could not load wishlist.")}finally{qr(!1)}}}),[Or,x]),Hr=(0,i.useCallback)((()=>{Tr(),Rr(""),Sr(!0),Mr()}),[Tr,Mr]),Kr=(0,i.useCallback)((()=>{Tr(),dr(""),pr("orders"),Ie(!0),Yr()}),[Tr,Yr]),Zr=(0,i.useCallback)((()=>{Tr(),yr(""),fr("list"),$r(null),Ar({label:"",full_address:"",is_default:!1}),pr("addresses"),Ie(!0),Vr()}),[Tr,Vr]),Gr=(0,i.useCallback)((()=>{Tr(),Fe||(Ve(!1),h?Kr():(De("signin"),Ue(""),Re(!0)))}),[Tr,Fe,h,Kr]),Jr=(0,i.useCallback)((()=>{Tr(),Fe||(Ve(!1),h?Hr():(De("signin"),Ue(""),Re(!0)))}),[Tr,Fe,h,Hr]);(0,i.useImperativeHandle)(r,(()=>({openOrders:()=>Gr(),openWishlist:()=>Jr()})),[Gr,Jr]);const Xr=async e=>{dr("");const r=(t=e.items)?(Array.isArray(t)?t:[]).map((e=>{var r,t,i,a,n;return{product_id:null!==(r=null!==(t=e.product_id)&&void 0!==t?t:e.productId)&&void 0!==r?r:e.id,quantity:Math.max(1,Number(e.quantity)||1),form_data:null!==(i=null!==(a=e.form_data)&&void 0!==a?a:e.formData)&&void 0!==i?i:{},instruction:null!==(n=e.instruction)&&void 0!==n?n:""}})).filter((e=>null!=e.product_id)):[];var t;if(0!==r.length){cr(e.id);try{for(const e of r){const{data:r}=await n.A.get((0,l.lA)(e.product_id)),t=$e(r);Nr((0,c.bE)(p,r,e.quantity,e.form_data||{},t,e.instruction||""))}Ie(!1),f&&f("cart")}catch{dr(Pr("Could not add items. A product may have been removed from the menu.","\u062a\u0639\u0630\u0631 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0623\u0635\u0646\u0627\u0641. \u0642\u062f \u064a\u0643\u0648\u0646 \u0623\u062d\u062f \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631."))}finally{cr(null)}}else dr(Pr("This order has no saved line items. Only newer orders can be reordered.","\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0635\u0646\u0627\u0641 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628."))},et=e=>{if(!e)return"";try{return new Date(e).toLocaleString("ar"===x?"ar-LB":"en-US",{dateStyle:"medium",timeStyle:"short"})}catch{return String(e)}},rt=(null===h||void 0===h?void 0:h.full_name)||(null===h||void 0===h?void 0:h.email),tt=null!==h&&void 0!==h&&h.email&&null!==h&&void 0!==h&&h.full_name?h.email:null,it="undefined"!==typeof document?document.body:null;return(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsxs)(b,{dir:Qr?"rtl":"ltr",children:[(0,Ce.jsxs)(g,{ref:Dr,children:[(0,Ce.jsx)(m,{type:"button",onClick:()=>{Fe||(Tr(),h?Ve((e=>!e)):(Ve(!1),De("signin"),Ue(""),Re(!0)))},"aria-label":Pr("Account","\u0627\u0644\u062d\u0633\u0627\u0628"),"aria-expanded":Ye,children:(0,Ce.jsx)(s.SNd,{})}),Ye&&h&&(0,Ce.jsxs)(y,{$rtl:Qr,dir:Qr?"rtl":"ltr",children:[(0,Ce.jsxs)(j,{children:[(0,Ce.jsx)(w,{children:rt}),tt&&(0,Ce.jsx)(k,{children:tt})]}),(0,Ce.jsxs)(A,{children:[(0,Ce.jsxs)(C,{type:"button",$rtl:Qr,onClick:()=>{Ve(!1),Kr()},children:[(0,Ce.jsx)(d.kkc,{"aria-hidden":!0}),Pr("My orders","\u0637\u0644\u0628\u0627\u062a\u064a")]}),(0,Ce.jsxs)(C,{type:"button",$rtl:Qr,"data-outline-wishlist-heart":"true",onClick:()=>{Ve(!1),Hr()},children:[(0,Ce.jsx)(s.phF,{"aria-hidden":!0}),Pr("Wishlist","\u0627\u0644\u0645\u0641\u0636\u0644\u0629")]}),(0,Ce.jsxs)(C,{type:"button",$rtl:Qr,onClick:()=>{Ve(!1),Zr()},children:[(0,Ce.jsx)(d.vq8,{"aria-hidden":!0}),Pr("Addresses","\u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646")]}),(0,Ce.jsxs)(C,{type:"button",$rtl:Qr,$danger:!0,onClick:()=>{(0,u.zV)(p),Le(null),Oe([]),Lr([]),Sr(!1),Ve(!1)},children:[(0,Ce.jsx)(d.axc,{"aria-hidden":!0}),Pr("Log out","\u062e\u0631\u0648\u062c")]})]})]})]}),h&&(0,Ce.jsx)(v,{type:"button",onClick:()=>{Fe||(Ve(!1),Hr())},"aria-label":Pr("Wishlist","\u0627\u0644\u0645\u0641\u0636\u0644\u0629"),children:(0,Ce.jsx)(s.phF,{})})]}),Ee&&it&&(0,a.createPortal)((0,Ce.jsx)($,{onClick:()=>Re(!1),role:"presentation",children:(0,Ce.jsxs)(_,{onClick:e=>e.stopPropagation(),dir:Qr?"rtl":"ltr",children:[(0,Ce.jsx)(S,{}),(0,Ce.jsx)(z,{type:"button",$rtl:Qr,onClick:()=>Re(!1),"aria-label":Pr("Close","\u0625\u063a\u0644\u0627\u0642"),children:(0,Ce.jsx)(d.QCr,{})}),(0,Ce.jsxs)(L,{$rtl:Qr,children:[(0,Ce.jsx)(F,{children:"signin"===Ne?Pr("Welcome back","\u0645\u0631\u062d\u0628\u0627\u064b \u0628\u0639\u0648\u062f\u062a\u0643"):Pr("Create your account","\u0623\u0646\u0634\u0626 \u062d\u0633\u0627\u0628\u0643")}),(0,Ce.jsx)(q,{children:"signin"===Ne?Pr("Sign in to view order history and speed up checkout.","\u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u0639\u0631\u0636 \u0637\u0644\u0628\u0627\u062a\u0643 \u0648\u062a\u0633\u0631\u064a\u0639 \u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628."):Pr("Register with email and phone to track your orders.","\u0633\u062c\u0651\u0644 \u0628\u0631\u064a\u062f\u0643 \u0648\u0647\u0627\u062a\u0641\u0643 \u0644\u062a\u062a\u0628\u0639 \u0637\u0644\u0628\u0627\u062a\u0643.")})]}),(0,Ce.jsxs)(E,{children:[(0,Ce.jsx)(R,{type:"button",$active:"signin"===Ne,onClick:()=>{De("signin"),Ue(""),tr("")},children:Pr("Sign in","\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644")}),(0,Ce.jsx)(R,{type:"button",$active:"register"===Ne,onClick:()=>{De("register"),Ue(""),tr("")},children:Pr("Register","\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628")})]}),"signin"===Ne?(0,Ce.jsxs)(B,{onSubmit:async e=>{if(e.preventDefault(),Ue(""),Wr)try{const{data:e}=await n.A.post(l.w4,{restaurant_id:Wr,email:Me.trim(),password:Ke});(0,u.gO)(p,e.accessToken),Re(!1),Ze(""),await Ur()}catch(i){var r,t;Ue((null===(r=i.response)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.message)||Pr("Sign in failed. Check your email and password.","\u0641\u0634\u0644 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644."))}},children:[(0,Ce.jsxs)(I,{children:[(0,Ce.jsx)(N,{children:Pr("Email","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a")}),(0,Ce.jsx)(D,{type:"email",autoComplete:"email",value:Me,onChange:e=>He(e.target.value),required:!0})]}),(0,Ce.jsxs)(I,{children:[(0,Ce.jsx)(N,{children:Pr("Password","\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631")}),(0,Ce.jsx)(D,{type:"password",autoComplete:"current-password",value:Ke,onChange:e=>Ze(e.target.value),required:!0})]}),Te&&(0,Ce.jsx)(P,{children:Te}),(0,Ce.jsx)(O,{type:"submit",children:Pr("Sign in","\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644")})]}):(0,Ce.jsxs)(B,{onSubmit:async e=>{if(e.preventDefault(),Ue(""),Wr)if(Xe===rr)try{await n.A.post(l.pO,{restaurant_id:Wr,email:Ge.trim(),password:Xe,phone_number:ir.trim(),full_name:nr.trim()});const{data:e}=await n.A.post(l.w4,{restaurant_id:Wr,email:Ge.trim(),password:Xe});(0,u.gO)(p,e.accessToken),Re(!1),er(""),tr(""),await Ur()}catch(i){var r,t;Ue((null===(r=i.response)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.message)||Pr("Registration failed. Try a different email or phone.","\u0641\u0634\u0644 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628."))}else Ue(Pr("Passwords do not match.","\u0643\u0644\u0645\u062a\u0627 \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u062a\u064a\u0646."))},children:[(0,Ce.jsxs)(I,{children:[(0,Ce.jsx)(N,{children:Pr("Full name","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644")}),(0,Ce.jsx)(D,{value:nr,onChange:e=>or(e.target.value),required:!0})]}),(0,Ce.jsxs)(I,{children:[(0,Ce.jsx)(N,{children:Pr("Phone","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641")}),(0,Ce.jsx)(D,{type:"tel",value:ir,onChange:e=>ar(e.target.value),required:!0})]}),(0,Ce.jsxs)(I,{children:[(0,Ce.jsx)(N,{children:Pr("Email","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a")}),(0,Ce.jsx)(D,{type:"email",autoComplete:"email",value:Ge,onChange:e=>Je(e.target.value),required:!0})]}),(0,Ce.jsxs)(I,{children:[(0,Ce.jsx)(N,{children:Pr("Password (8+ characters)","\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 (\u0668 \u0623\u062d\u0631\u0641 \u0623\u0648 \u0623\u0643\u062b\u0631)")}),(0,Ce.jsx)(D,{type:"password",autoComplete:"new-password",value:Xe,onChange:e=>er(e.target.value),minLength:8,required:!0})]}),(0,Ce.jsxs)(I,{children:[(0,Ce.jsx)(N,{children:Pr("Confirm password","\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631")}),(0,Ce.jsx)(D,{type:"password",autoComplete:"new-password",value:rr,onChange:e=>tr(e.target.value),minLength:8,required:!0})]}),Te&&(0,Ce.jsx)(P,{children:Te}),(0,Ce.jsx)(O,{type:"submit",children:Pr("Create account","\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628")})]}),(0,Ce.jsx)(W,{children:(0,Ce.jsx)(Q,{type:"button",onClick:()=>Re(!1),children:Pr("Cancel","\u0625\u0644\u063a\u0627\u0621")})})]})}),it),Be&&it&&(0,a.createPortal)((0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsx)($,{onClick:()=>{dr(""),Ie(!1)}}),(0,Ce.jsxs)(T,{$rtl:Qr,dir:Qr?"rtl":"ltr",children:[(0,Ce.jsxs)(U,{children:[(0,Ce.jsxs)(Y,{children:[(0,Ce.jsx)(V,{children:"orders"===ur?Pr("My orders","\u0637\u0644\u0628\u0627\u062a\u064a"):"edit"===xr?Cr?Pr("Edit address","\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646"):Pr("New address","\u0639\u0646\u0648\u0627\u0646 \u062c\u062f\u064a\u062f"):Pr("Delivery addresses","\u0639\u0646\u0627\u0648\u064a\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644")}),(0,Ce.jsx)(M,{children:"orders"===ur?Pr("Signed-in orders for this restaurant. Reorder adds items to your cart.","\u0637\u0644\u0628\u0627\u062a\u0643 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u0637\u0639\u0645. \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0637\u0644\u0628 \u062a\u0636\u064a\u0641 \u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629."):"edit"===xr?Pr("Save a label and full address. One can be default for checkout.","\u0627\u062d\u0641\u0638 \u0627\u0633\u0645\u0627\u064b \u0644\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0627\u0644\u0646\u0635 \u0627\u0644\u0643\u0627\u0645\u0644. \u064a\u0645\u0643\u0646 \u062c\u0639\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0627\u064b \u0639\u0646\u062f \u0627\u0644\u0637\u0644\u0628."):Pr("Manage multiple delivery addresses for checkout.","\u0623\u062f\u0650\u0631 \u0639\u062f\u0629 \u0639\u0646\u0627\u0648\u064a\u0646 \u0644\u0644\u062a\u0648\u0635\u064a\u0644 \u0639\u0646\u062f \u0627\u0644\u0637\u0644\u0628.")})]}),(0,Ce.jsx)(H,{type:"button",onClick:()=>{dr(""),yr(""),Ie(!1)},"aria-label":"Close",children:(0,Ce.jsx)(d.QCr,{})})]}),"addresses"===ur&&"edit"===xr&&(0,Ce.jsx)("div",{style:{padding:"0 20px 8px"},children:(0,Ce.jsxs)(Q,{type:"button",style:{textAlign:Qr?"right":"left",width:"auto",padding:"8px 0"},onClick:()=>{yr(""),fr("list"),$r(null)},children:[(0,Ce.jsx)(d.QVr,{style:{marginRight:Qr?0:8,marginLeft:Qr?8:0,transform:Qr?"rotate(180deg)":"none"}}),Pr("Back to list","\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0642\u0627\u0626\u0645\u0629")]})}),(0,Ce.jsx)(ue,{children:(0,Ce.jsxs)(E,{style:{margin:0},children:[(0,Ce.jsx)(R,{type:"button",$active:"orders"===ur,onClick:()=>{pr("orders"),Yr()},children:Pr("Orders","\u0627\u0644\u0637\u0644\u0628\u0627\u062a")}),(0,Ce.jsx)(R,{type:"button",$active:"addresses"===ur,onClick:()=>{pr("addresses"),fr("list"),Vr()},children:Pr("Addresses","\u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646")})]})}),"orders"===ur&&sr&&(0,Ce.jsx)("div",{style:{padding:"0 20px 12px"},children:(0,Ce.jsx)(P,{children:sr})}),"addresses"===ur&&vr&&(0,Ce.jsx)("div",{style:{padding:"0 20px 12px"},children:(0,Ce.jsx)(P,{children:vr})}),"orders"===ur&&(0,Ce.jsx)(K,{children:We?(0,Ce.jsx)(ce,{children:Pr("Loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")}):0===Pe.length?(0,Ce.jsx)(le,{children:Pr("You have no orders yet. Complete a checkout while signed in to see them here.","\u0644\u0627 \u062a\u0648\u062c\u062f \u0637\u0644\u0628\u0627\u062a \u0628\u0639\u062f. \u0623\u0646\u0647\u0650 \u0637\u0644\u0628\u0627\u064b \u0648\u0623\u0646\u062a \u0645\u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u062a\u0638\u0647\u0631 \u0647\u0646\u0627.")}):Pe.map((e=>{const r=Array.isArray(e.items)?e.items:[];return(0,Ce.jsxs)(Z,{children:[(0,Ce.jsxs)(ie,{children:[(0,Ce.jsxs)(ae,{children:["#",e.id]}),(0,Ce.jsx)(ne,{children:et(e.order_date)})]}),(e.delivery_type||e.customer_address)&&(0,Ce.jsxs)(pe,{children:[e.delivery_type&&(0,Ce.jsx)(xe,{children:e.delivery_type}),e.customer_address&&(0,Ce.jsx)("div",{children:e.customer_address})]}),r.length>0&&(0,Ce.jsx)(G,{children:r.map(((r,t)=>{var i,a,n;return(0,Ce.jsxs)(J,{children:[(0,Ce.jsx)(X,{children:_e({...r,product_id:null!==(i=null!==(a=r.product_id)&&void 0!==a?a:r.productId)&&void 0!==i?i:r.id},x)}),(0,Ce.jsxs)(ee,{children:["\xd7",null!==(n=r.quantity)&&void 0!==n?n:1]})]},`${e.id}-line-${t}`)}))}),(0,Ce.jsxs)(oe,{children:[(0,Ce.jsx)(de,{...ze(e.status),children:e.status}),(0,Ce.jsxs)(se,{children:[parseFloat(e.total||0).toFixed(2)," ",e.currency||""]})]}),(0,Ce.jsx)(re,{children:(0,Ce.jsxs)(te,{type:"button",disabled:null!=lr,onClick:()=>Xr(e),children:[(0,Ce.jsx)(d.Swo,{"aria-hidden":!0}),lr===e.id?Pr("Adding\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u2026"):Pr("Reorder","\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0637\u0644\u0628")]})})]},e.id)}))}),"addresses"===ur&&"list"===xr&&(0,Ce.jsxs)(K,{children:[br?(0,Ce.jsx)(ce,{children:Pr("Loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")}):0===hr.length?(0,Ce.jsx)(le,{children:Pr("No saved addresses yet. Add one for faster delivery checkout.","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u0628\u0639\u062f. \u0623\u0636\u0641 \u0639\u0646\u0648\u0627\u0646\u0627\u064b \u0644\u062a\u0633\u0631\u064a\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644.")}):hr.map((e=>(0,Ce.jsxs)(fe,{children:[(0,Ce.jsx)(he,{children:(0,Ce.jsxs)("span",{children:[e.label||Pr("Address","\u0639\u0646\u0648\u0627\u0646"),e.is_default?(0,Ce.jsxs)("span",{style:{marginLeft:8,fontSize:11,color:"#64748b"},children:["(",Pr("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a"),")"]}):null]})}),(0,Ce.jsx)(ge,{children:e.full_address}),(0,Ce.jsxs)(be,{children:[!e.is_default&&(0,Ce.jsxs)(me,{type:"button",onClick:()=>(async e=>{if(Or&&e){yr("");try{await n.A.put((0,l.SI)(e),{is_default:!0},{headers:{Authorization:`Bearer ${Or}`}}),await Vr()}catch(i){var r,t;yr((null===(r=i.response)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.message)||Pr("Could not update default.","\u062a\u0639\u0630\u0631 \u062a\u0639\u064a\u064a\u0646 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a."))}}})(e.id),children:[(0,Ce.jsx)(d.gt3,{"aria-hidden":!0}),Pr("Set default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")]}),(0,Ce.jsxs)(me,{type:"button",onClick:()=>{return r=e,yr(""),$r(r.id),Ar({label:r.label||"",full_address:r.full_address||"",is_default:!!r.is_default}),void fr("edit");var r},children:[(0,Ce.jsx)(d.F7,{"aria-hidden":!0}),Pr("Edit","\u062a\u0639\u062f\u064a\u0644")]}),(0,Ce.jsxs)(ve,{type:"button",onClick:()=>(async e=>{if(Or&&e&&("undefined"===typeof window||window.confirm(Pr("Delete this address?","\u062d\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0639\u0646\u0648\u0627\u0646\u061f")))){yr("");try{await n.A.delete((0,l.SI)(e),{headers:{Authorization:`Bearer ${Or}`}}),await Vr()}catch(i){var r,t;yr((null===(r=i.response)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.message)||Pr("Could not delete address.","\u062a\u0639\u0630\u0631 \u062d\u0630\u0641 \u0627\u0644\u0639\u0646\u0648\u0627\u0646."))}}})(e.id),children:[(0,Ce.jsx)(d.qbC,{"aria-hidden":!0}),Pr("Delete","\u062d\u0630\u0641")]})]})]},e.id))),(0,Ce.jsx)(ye,{type:"button",onClick:()=>{yr(""),$r(null),Ar({label:"",full_address:"",is_default:!1}),fr("edit")},children:Pr("+ Add address","+ \u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0648\u0627\u0646")})]}),"addresses"===ur&&"edit"===xr&&(0,Ce.jsx)(K,{children:(0,Ce.jsxs)(je,{onSubmit:async e=>{var r;if(null===e||void 0===e||null===(r=e.preventDefault)||void 0===r||r.call(e),!Or)return;const t=String(kr.full_address||"").trim();if(t){wr(!0),yr("");try{Cr?await n.A.put((0,l.SI)(Cr),{label:String(kr.label||"").trim()||null,full_address:t,is_default:!!kr.is_default},{headers:{Authorization:`Bearer ${Or}`}}):await n.A.post(l.Qf,{label:String(kr.label||"").trim()||null,full_address:t,is_default:!!kr.is_default},{headers:{Authorization:`Bearer ${Or}`}}),await Vr(),fr("list"),$r(null)}catch(o){var i,a;yr((null===(i=o.response)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.message)||Pr("Could not save address.","\u062a\u0639\u0630\u0631 \u062d\u0641\u0638 \u0627\u0644\u0639\u0646\u0648\u0627\u0646."))}finally{wr(!1)}}else yr(Pr("Address is required.","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0645\u0637\u0644\u0648\u0628."))},children:[(0,Ce.jsxs)(I,{children:[(0,Ce.jsx)(N,{children:Pr("Label (optional)","\u0627\u0633\u0645 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,Ce.jsx)(D,{value:kr.label,onChange:e=>Ar((r=>({...r,label:e.target.value}))),placeholder:Pr("Home, Work, \u2026","\u0627\u0644\u0645\u0646\u0632\u0644\u060c \u0627\u0644\u0639\u0645\u0644\u060c \u2026")})]}),(0,Ce.jsxs)(I,{children:[(0,Ce.jsx)(N,{children:Pr("Full address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,Ce.jsx)(Ae,{rows:4,value:kr.full_address,onChange:e=>Ar((r=>({...r,full_address:e.target.value}))),placeholder:Pr("Street, building, floor, \u2026","\u0627\u0644\u0634\u0627\u0631\u0639\u060c \u0627\u0644\u0645\u0628\u0646\u0649\u060c \u0627\u0644\u0637\u0627\u0628\u0642\u060c \u2026")})]}),(0,Ce.jsxs)(we,{children:[(0,Ce.jsx)("input",{type:"checkbox",id:"addr-default",checked:!!kr.is_default,onChange:e=>Ar((r=>({...r,is_default:e.target.checked})))}),(0,Ce.jsx)(ke,{htmlFor:"addr-default",children:Pr("Use as default delivery address","\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0643\u0639\u0646\u0648\u0627\u0646 \u062a\u0648\u0635\u064a\u0644 \u0627\u0641\u062a\u0631\u0627\u0636\u064a")})]}),(0,Ce.jsx)(O,{type:"submit",disabled:jr,children:jr?Pr("Saving\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062d\u0641\u0638\u2026"):Pr("Save address","\u062d\u0641\u0638 \u0627\u0644\u0639\u0646\u0648\u0627\u0646")})]})})]})]}),it),_r&&it&&(0,a.createPortal)((0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsx)($,{onClick:()=>{Rr(""),Sr(!1)}}),(0,Ce.jsxs)(T,{$rtl:Qr,dir:Qr?"rtl":"ltr",children:[(0,Ce.jsxs)(U,{children:[(0,Ce.jsxs)(Y,{children:[(0,Ce.jsx)(V,{children:Pr("Wishlist","\u0627\u0644\u0645\u0641\u0636\u0644\u0629")}),(0,Ce.jsx)(M,{children:Pr("Items you saved for this restaurant.","\u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u062a\u064a \u062d\u0641\u0638\u062a\u0647\u0627 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0637\u0639\u0645.")})]}),(0,Ce.jsx)(H,{type:"button",onClick:()=>{Rr(""),Sr(!1)},"aria-label":Pr("Close","\u0625\u063a\u0644\u0627\u0642"),children:(0,Ce.jsx)(d.QCr,{})})]}),Er&&(0,Ce.jsx)("div",{style:{padding:"0 20px 12px"},children:(0,Ce.jsx)(P,{children:Er})}),(0,Ce.jsx)(K,{children:Fr?(0,Ce.jsx)(ce,{children:Pr("Loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")}):0===zr.length?(0,Ce.jsx)(le,{children:Pr("No saved items yet. Use the heart on products to add them here.","\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0635\u0646\u0627\u0641 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f. \u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0642\u0644\u0628 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0644\u0625\u0636\u0627\u0641\u062a\u0647\u0627.")}):zr.map((e=>{const r=$e(e);return(0,Ce.jsxs)(Z,{children:[(0,Ce.jsxs)(ie,{style:{alignItems:"center",gap:12},children:[e.logoURL?(0,Ce.jsx)("img",{src:`https://storage.googleapis.com/ecommerce-bucket-testing/${e.logoURL}`,alt:"",style:{width:52,height:52,objectFit:"cover",borderRadius:10,flexShrink:0}}):null,(0,Ce.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,Ce.jsx)(X,{style:{fontSize:15},children:Se(e,x)}),(0,Ce.jsx)(ne,{style:{marginTop:4},children:r.toFixed(2)})]})]}),(0,Ce.jsxs)(re,{children:[(0,Ce.jsx)(te,{type:"button",disabled:null!=Br,onClick:()=>(async e=>{if(null!==e&&void 0!==e&&e.id){Rr(""),Ir(e.id);try{const{data:r}=await n.A.get((0,l.lA)(e.id)),t=$e(r);Nr((0,c.bE)(p,r,1,{},t,"")),f&&f("cart")}catch{Rr(Pr("Could not add item. It may no longer be available.","\u062a\u0639\u0630\u0631 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0646\u0641. \u0642\u062f \u0644\u0627 \u064a\u0643\u0648\u0646 \u0645\u062a\u0648\u0641\u0631\u0627\u064b."))}finally{Ir(null)}}})(e),children:Br===e.id?Pr("Adding\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u2026"):Pr("Add to cart","\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629")}),(0,Ce.jsxs)(ve,{type:"button",onClick:()=>(async e=>{if(Or&&e){Rr("");try{await n.A.delete((0,l.Vr)(e),{headers:{Authorization:`Bearer ${Or}`}}),await Mr()}catch{Rr(Pr("Could not remove from wishlist.","\u062a\u0639\u0630\u0631 \u0627\u0644\u0625\u0632\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629."))}}})(e.id),children:[(0,Ce.jsx)(d.qbC,{"aria-hidden":!0}),Pr("Remove","\u0625\u0632\u0627\u0644\u0629")]})]})]},e.id)}))})]})]}),it)]})}))}}]);
//# sourceMappingURL=997.2a29b5fd.chunk.js.map