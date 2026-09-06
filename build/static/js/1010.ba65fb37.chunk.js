/*! For license information please see 1010.ba65fb37.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[1010],{77756:(t,e,r)=>{r.r(e),r.d(e,{default:()=>D});var i=r(82483),n=r(41190),o=r(11222),a=r(93376),s=r(26557),d=r(20694),l=r(82519),c=r(66899),p=r(918),u=r(73817),h=r(8426),g=r(57783),f=r(67399),x=r(84543),b=r(45144),m=r(58765),y=r(38243),v=r(37253),w=r(56723);const S="https://staging-api.menugic.com",j=()=>({Authorization:`Bearer ${(0,s.getCookie)("accessToken")}`}),k={pageBg:"#f8fafc",accent:"#5eabb1",accentGlow:"rgba(94,171,177,0.22)",cardBg:"#ffffff",cardBorder:"rgba(148,163,184,0.18)",textPrimary:"#0f172a",textSub:"#64748b",shadow:"0 4px 20px rgba(15,23,42,0.07)",radius:"14px"},z=n.Ay.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${k.pageBg};
  box-sizing: border-box;
  padding-bottom: 60px;
`,A=n.Ay.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 4%;
  background: #fff;
  border-bottom: 1px solid ${k.cardBorder};
  box-sizing: border-box;
`,R=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 800;
  color: ${k.textPrimary};
  letter-spacing: -0.4px;
`,$=n.Ay.img`
  height: 32px;
  object-fit: contain;
`,B=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 13px;
  color: ${k.textSub};
`,C=n.Ay.header`
  width: 92%;
  max-width: 1400px;
  margin-top: 24px;
  padding: 28px 28px 24px;
  border-radius: 20px;
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  color: #f8fafc;
  box-shadow: 0 16px 40px rgba(10, 15, 40, 0.28);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

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

  @media (max-width: ${d.L8.sm}px) {
    width: 100%;
    margin-top: 12px;
    padding: 20px 16px 18px;
    border-radius: 14px;
  }
`,M=n.Ay.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.6px;
  position: relative;
  background: linear-gradient(120deg, #ffffff, ${k.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${d.L8.sm}px) {
    font-size: 22px;
  }
`,P=n.Ay.p`
  margin: 8px 0 0 0;
  opacity: 0.6;
  font-size: 14px;
  line-height: 1.5;
  position: relative;

  @media (max-width: ${d.L8.sm}px) {
    font-size: 12px;
  }
`,W=n.Ay.div`
  width: 92%;
  max-width: 1400px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  background: ${k.cardBg};
  border-radius: 12px;
  padding: 6px;
  box-shadow: ${k.shadow};
  border: 1px solid ${k.cardBorder};
  box-sizing: border-box;

  @media (max-width: ${d.L8.sm}px) {
    width: 100%;
    margin-top: 14px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`,O=n.Ay.div`
  padding: 10px 24px;
  font-size: 14px;
  font-weight: ${t=>t.$active?"600":"500"};
  color: ${t=>t.$active?k.textPrimary:k.textSub};
  background: ${t=>t.$active?`linear-gradient(135deg, ${k.accentGlow}, rgba(94,171,177,0.08))`:"transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  user-select: none;

  ${t=>t.$active&&`\n    &::after {\n      content: "";\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 24px;\n      height: 2.5px;\n      background: ${k.accent};\n      border-radius: 2px;\n    }\n  `}

  &:hover {
    color: ${k.textPrimary};
    background: ${t=>t.$active?`linear-gradient(135deg, ${k.accentGlow}, rgba(94,171,177,0.08))`:"rgba(15,23,42,0.04)"};
  }

  @media (max-width: ${d.L8.sm}px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`,_=n.Ay.div`
  width: 92%;
  max-width: 1400px;
  margin-top: 16px;
  box-sizing: border-box;

  @media (max-width: ${d.L8.sm}px) {
    width: 100%;
    padding: 0 12px;
    margin-top: 12px;
  }
`,L={statsRow:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:16,marginBottom:24},statCard:{background:"#fff",borderRadius:14,padding:"20px 22px",border:`1px solid ${k.cardBorder}`,boxShadow:k.shadow},statValue:{fontSize:28,fontWeight:800,color:k.textPrimary,margin:0,letterSpacing:"-0.5px"},statLabel:{fontSize:12,color:k.textSub,marginTop:4,fontWeight:500},filterBar:{display:"flex",gap:10,marginBottom:20,flexWrap:"wrap",alignItems:"center"},input:{padding:"9px 14px",borderRadius:10,border:"1px solid rgba(148,163,184,0.25)",fontSize:13,outline:"none",background:"#fff",color:k.textPrimary},select:{padding:"9px 14px",borderRadius:10,border:"1px solid rgba(148,163,184,0.25)",fontSize:13,outline:"none",background:"#fff",color:k.textPrimary,cursor:"pointer"},primaryBtn:{padding:"9px 18px",borderRadius:10,border:"none",fontSize:13,fontWeight:600,cursor:"pointer",background:k.accent,color:"#fff",transition:"all 0.15s"},btn:{padding:"9px 18px",borderRadius:10,border:"none",fontSize:13,fontWeight:600,cursor:"pointer",transition:"all 0.15s"},grid:{display:"grid",gap:18},card:{background:"#fff",borderRadius:14,padding:20,border:`1px solid ${k.cardBorder}`,boxShadow:k.shadow,display:"flex",flexDirection:"column",gap:12},cardHeader:{display:"flex",alignItems:"center",gap:12},initialsCircle:{width:44,height:44,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:16,color:"#fff",flexShrink:0},businessName:{fontSize:15,fontWeight:700,color:k.textPrimary,margin:0},category:{fontSize:12,color:k.textSub,margin:0,textTransform:"capitalize"},badge:{display:"inline-block",padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:600,textTransform:"capitalize"},demoArea:{padding:"10px 12px",borderRadius:10,background:"#f8fafc",fontSize:12,color:k.textSub},demoLink:{color:k.accent,textDecoration:"none",wordBreak:"break-all",fontSize:12},actionsRow:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginTop:"auto"},smallBtn:{padding:"5px 10px",borderRadius:8,border:"1px solid rgba(148,163,184,0.25)",fontSize:11,fontWeight:600,cursor:"pointer",background:"#fff",color:k.textSub,transition:"all 0.15s"},smallBtnPrimary:{padding:"5px 10px",borderRadius:8,border:"none",fontSize:11,fontWeight:600,cursor:"pointer",background:k.accent,color:"#fff"},smallBtnGreen:{padding:"5px 10px",borderRadius:8,border:"none",fontSize:11,fontWeight:600,cursor:"pointer",background:"#10b981",color:"#fff"},toast:{position:"fixed",bottom:24,right:24,padding:"12px 22px",borderRadius:12,fontSize:13,fontWeight:600,color:"#fff",zIndex:9999,boxShadow:"0 8px 30px rgba(0,0,0,0.15)",transition:"all 0.3s",pointerEvents:"none"},loading:{padding:60,textAlign:"center",color:"#94a3b8",fontSize:14},empty:{padding:60,textAlign:"center",color:"#94a3b8",fontSize:14},pager:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:20,fontSize:13,color:k.textSub}},T=t=>{if(!t)return"";const e=Date.now()-new Date(t).getTime(),r=Math.floor(e/6e4);if(r<1)return"just now";if(r<60)return`${r}m ago`;const i=Math.floor(r/60);if(i<24)return`${i}h ago`;const n=Math.floor(i/24);return n<30?`${n}d ago`:new Date(t).toLocaleDateString()};function D(){const t=(0,a.Zp)(),[e,r]=(0,i.useState)("My Prospects"),[n,o]=(0,i.useState)(null),d=JSON.parse((0,s.getCookie)("userInfo")||"{}"),l=d.name||d.username||"Sales User";return(0,w.jsxs)(z,{children:[(0,w.jsxs)(A,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)($,{src:"/main-logo.png",alt:"Menugic"}),"Sales Dashboard"]}),(0,w.jsxs)(B,{children:[(0,w.jsx)("span",{style:{fontWeight:600,color:k.textPrimary},children:l}),(0,w.jsx)("button",{onClick:()=>{(0,s.Y)("accessToken"),(0,s.Y)("userInfo"),localStorage.removeItem("isLoggedIn"),t("/login")},style:{...L.btn,background:"#f1f5f9",color:k.textSub,border:`1px solid ${k.cardBorder}`},children:"Logout"})]})]}),(0,w.jsxs)(C,{children:[(0,w.jsx)(M,{children:"Sales Dashboard"}),(0,w.jsx)(P,{children:"Manage your prospects, build demos, and track your performance"})]}),(0,w.jsx)(W,{children:["My Prospects","Pipeline","Messages","My Stats"].map((t=>(0,w.jsx)(O,{$active:e===t,onClick:()=>r(t),children:t},t)))}),(0,w.jsxs)(_,{children:["My Prospects"===e&&(0,w.jsx)(b.A,{basePath:"/sales/prospects",zonesPath:"/sales/zones",prefill:n,onPrefillConsumed:()=>o(null)}),"Pipeline"===e&&(0,w.jsx)(y.A,{scope:v._i,canDiscover:!1,onSendToProspects:t=>{o(t),r("My Prospects")}}),"Messages"===e&&(0,w.jsx)(m.A,{basePath:"/sales/prospects",canDelete:!1}),"My Stats"===e&&(0,w.jsx)(I,{})]})]})}function I(){const[t,e]=(0,i.useState)(null),[r,n]=(0,i.useState)([]),[a,s]=(0,i.useState)([]),[d,b]=(0,i.useState)(!0),[m,y]=(0,i.useState)(!0);(0,i.useEffect)((()=>{o.A.get(`${S}/sales/stats`,{headers:j()}).then((t=>{let{data:r}=t;return e(r.data||r||{})})).catch((()=>e({}))).finally((()=>b(!1))),o.A.get(`${S}/sales/activity`,{headers:j()}).then((t=>{let{data:e}=t;return n(e.data||e||[])})).catch((()=>n([]))).finally((()=>y(!1))),o.A.get(`${S}/sales/stats/trend?days=30`,{headers:j()}).then((t=>{let{data:e}=t;return s(e.data||[])})).catch((()=>s([])))}),[]);const v={prospect_created:{icon:"+",bg:"#eff6ff",color:"#3b82f6"},demo_built:{icon:"D",bg:"#ecfdf5",color:"#10b981"},message_sent:{icon:"M",bg:"#fffbeb",color:"#f59e0b"},status_changed:{icon:"S",bg:"#f5f3ff",color:"#8b5cf6"},screenshot:{icon:"C",bg:"#fef2f2",color:"#ef4444"},default:{icon:"A",bg:"#f1f5f9",color:"#94a3b8"}};return(0,w.jsxs)("div",{style:{padding:"0 4px"},children:[(0,w.jsxs)("div",{style:{marginBottom:24},children:[(0,w.jsx)("h2",{style:{fontSize:18,fontWeight:700,color:k.textPrimary,marginBottom:4},children:"My Performance"}),(0,w.jsx)("p",{style:{fontSize:13,color:k.textSub,lineHeight:1.5},children:"Track your activity and performance metrics."})]}),d?(0,w.jsx)("div",{style:L.loading,children:"Loading stats..."}):(0,w.jsxs)("div",{style:{...L.statsRow,gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))"},children:[(0,w.jsxs)("div",{style:L.statCard,children:[(0,w.jsx)("p",{style:L.statValue,children:(null===t||void 0===t?void 0:t.total)||0}),(0,w.jsx)("p",{style:L.statLabel,children:"Total Prospects"})]}),(0,w.jsxs)("div",{style:L.statCard,children:[(0,w.jsx)("p",{style:L.statValue,children:(null===t||void 0===t?void 0:t.demos_built)||0}),(0,w.jsx)("p",{style:L.statLabel,children:"Demos Built"})]}),(0,w.jsxs)("div",{style:L.statCard,children:[(0,w.jsx)("p",{style:L.statValue,children:(null===t||void 0===t?void 0:t.messages_sent)||0}),(0,w.jsx)("p",{style:L.statLabel,children:"Messages Sent"})]}),(0,w.jsxs)("div",{style:L.statCard,children:[(0,w.jsx)("p",{style:{...L.statValue,color:"#10b981"},children:(null===t||void 0===t?void 0:t.won)||0}),(0,w.jsx)("p",{style:L.statLabel,children:"Won"})]}),(0,w.jsxs)("div",{style:L.statCard,children:[(0,w.jsxs)("p",{style:{...L.statValue,color:k.accent},children:[(null===t||void 0===t?void 0:t.conversion_rate)||0,"%"]}),(0,w.jsx)("p",{style:L.statLabel,children:"Conversion Rate"})]})]}),a.length>0&&(0,w.jsxs)("div",{style:{background:"white",borderRadius:12,padding:16,marginTop:16,marginBottom:16,border:`1px solid ${k.border}`},children:[(0,w.jsx)("h3",{style:{fontSize:15,fontWeight:700,color:k.textPrimary,marginBottom:12},children:"Activity Trend (Last 30 Days)"}),(0,w.jsx)(l.u,{width:"100%",height:220,children:(0,w.jsxs)(c.E,{data:a,children:[(0,w.jsx)(p.d,{strokeDasharray:"3 3",stroke:"#f1f5f9"}),(0,w.jsx)(u.W,{dataKey:"date",tickFormatter:t=>null===t||void 0===t?void 0:t.slice(5),tick:{fontSize:11}}),(0,w.jsx)(h.h,{allowDecimals:!1,tick:{fontSize:11}}),(0,w.jsx)(g.m,{labelFormatter:t=>`Date: ${t}`}),(0,w.jsx)(f.s,{wrapperStyle:{fontSize:12}}),(0,w.jsx)(x.yP,{dataKey:"demo_built",name:"Demos Built",fill:"#10b981",radius:[4,4,0,0]}),(0,w.jsx)(x.yP,{dataKey:"message_sent",name:"Messages Sent",fill:"#f59e0b",radius:[4,4,0,0]}),(0,w.jsx)(x.yP,{dataKey:"prospect_created",name:"Prospects Created",fill:"#3b82f6",radius:[4,4,0,0]})]})})]}),(0,w.jsxs)("div",{style:{marginTop:8},children:[(0,w.jsx)("h3",{style:{fontSize:15,fontWeight:700,color:k.textPrimary,marginBottom:16},children:"Recent Activity"}),m?(0,w.jsx)("div",{style:L.loading,children:"Loading activity..."}):0===r.length?(0,w.jsx)("div",{style:{background:"#fff",borderRadius:14,padding:"40px 20px",textAlign:"center",color:k.textSub,fontSize:13,border:`1px solid ${k.cardBorder}`,boxShadow:k.shadow},children:"No activity recorded yet. Start by creating prospects or building demos."}):(0,w.jsx)("div",{style:{background:"#fff",borderRadius:14,border:`1px solid ${k.cardBorder}`,boxShadow:k.shadow,overflow:"hidden"},children:r.map(((t,e)=>{var i,n;const o=v[t.action||t.type]||v.default;return(0,w.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 20px",borderBottom:e<r.length-1?"1px solid #f1f5f9":"none"},children:[(0,w.jsx)("div",{style:{width:36,height:36,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",background:o.bg,color:o.color,fontWeight:700,fontSize:14,flexShrink:0},children:o.icon}),(0,w.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,w.jsx)("div",{style:{fontSize:13,color:k.textPrimary,fontWeight:500},children:t.description||t.message||(t.action||"").replace(/_/g," ")||"Activity"}),(t.business_name||(null===(i=t.details)||void 0===i?void 0:i.business_name))&&(0,w.jsx)("div",{style:{fontSize:11,color:k.textSub,marginTop:2},children:t.business_name||(null===(n=t.details)||void 0===n?void 0:n.business_name)})]}),(0,w.jsx)("div",{style:{fontSize:11,color:k.textSub,whiteSpace:"nowrap",flexShrink:0},children:T(t.createdAt||t.created_at||t.timestamp)})]},t.id||e)}))})]})]})}},65470:(t,e,r)=>{r.d(e,{A:()=>v});var i=r(98587),n=r(58168),o=r(82483),a=r(29765),s=r(49770),d=r(80254),l=r(26855),c=r(30988),p=r(71251),u=r(5024),h=r(52304);function g(t){return(0,h.Ay)("MuiTypography",t)}(0,u.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=r(56723);const x=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,l.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,p.A)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((t=>{let{theme:e,ownerState:r}=t;return(0,n.A)({margin:0},"inherit"===r.variant&&{font:"inherit"},"inherit"!==r.variant&&e.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=o.forwardRef((function(t,e){const r=(0,c.A)({props:t,name:"MuiTypography"}),o=(t=>y[t]||t)(r.color),l=(0,s.A)((0,n.A)({},r,{color:o})),{align:u="inherit",className:h,component:v,gutterBottom:w=!1,noWrap:S=!1,paragraph:j=!1,variant:k="body1",variantMapping:z=m}=l,A=(0,i.A)(l,x),R=(0,n.A)({},l,{align:u,color:o,className:h,component:v,gutterBottom:w,noWrap:S,paragraph:j,variant:k,variantMapping:z}),$=v||(j?"p":z[k]||m[k])||"span",B=(t=>{const{align:e,gutterBottom:r,noWrap:i,paragraph:n,variant:o,classes:a}=t,s={root:["root",o,"inherit"!==t.align&&`align${(0,p.A)(e)}`,r&&"gutterBottom",i&&"noWrap",n&&"paragraph"]};return(0,d.A)(s,g,a)})(R);return(0,f.jsx)(b,(0,n.A)({as:$,ref:e,ownerState:R,className:(0,a.A)(B.root,h)},A))}))},9417:(t,e,r)=>{function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.d(e,{A:()=>i})},63662:(t,e,r)=>{function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}r.d(e,{A:()=>i})},13332:(t,e,r)=>{r.d(e,{n:()=>p});var i=r(82483),n=r(85537),o=r(68116),a=r(14159),s=r(48917),d=class extends a.Q{#t;#e=void 0;#r;#i;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#n()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){const e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,s.f8)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#r,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,s.EN)(e.mutationKey)!==(0,s.EN)(this.options.mutationKey)?this.reset():"pending"===this.#r?.state.status&&this.#r.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#r?.removeObserver(this)}onMutationUpdate(t){this.#n(),this.#o(t)}getCurrentResult(){return this.#e}reset(){this.#r?.removeObserver(this),this.#r=void 0,this.#n(),this.#o()}mutate(t,e){return this.#i=e,this.#r?.removeObserver(this),this.#r=this.#t.getMutationCache().build(this.#t,this.options),this.#r.addObserver(this),this.#r.execute(t)}#n(){const t=this.#r?.state??(0,n.$)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#o(t){o.j.batch((()=>{if(this.#i&&this.hasListeners()){const e=this.#e.variables,r=this.#e.context;"success"===t?.type?(this.#i.onSuccess?.(t.data,e,r),this.#i.onSettled?.(t.data,null,e,r)):"error"===t?.type&&(this.#i.onError?.(t.error,e,r),this.#i.onSettled?.(void 0,t.error,e,r))}this.listeners.forEach((t=>{t(this.#e)}))}))}},l=r(42186),c=r(33857);function p(t,e){const r=(0,l.jE)(e),[n]=i.useState((()=>new d(r,t)));i.useEffect((()=>{n.setOptions(t)}),[n,t]);const a=i.useSyncExternalStore(i.useCallback((t=>n.subscribe(o.j.batchCalls(t))),[n]),(()=>n.getCurrentResult()),(()=>n.getCurrentResult())),s=i.useCallback(((t,e)=>{n.mutate(t,e).catch(c.l)}),[n]);if(a.error&&(0,c.G)(n.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:s,mutateAsync:a.mutate}}},38:(t,e,r)=>{function i(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)t[i]=r[i]}return t}r.d(e,{A:()=>n});var n=function t(e,r){function n(t,n,o){if("undefined"!==typeof document){"number"===typeof(o=i({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var s in o)o[s]&&(a+="; "+s,!0!==o[s]&&(a+="="+o[s].split(";")[0]));return document.cookie=t+"="+e.write(n,t)+a}}return Object.create({set:n,get:function(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var r=document.cookie?document.cookie.split("; "):[],i={},n=0;n<r.length;n++){var o=r[n].split("="),a=o.slice(1).join("=");try{var s=decodeURIComponent(o[0]);if(i[s]=e.read(a,s),t===s)break}catch(d){}}return t?i[t]:i}},remove:function(t,e){n(t,"",i({},e,{expires:-1}))},withAttributes:function(e){return t(this.converter,i({},this.attributes,e))},withConverter:function(e){return t(i({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(e)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);
//# sourceMappingURL=1010.ba65fb37.chunk.js.map