/*! For license information please see 1010.a947d4d0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[1010],{77756:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var i=r(82483),n=r(41190),o=r(11222),a=r(93376),s=r(26557),d=r(20694),l=r(82519),c=r(66899),p=r(918),g=r(73817),u=r(8426),h=r(57783),f=r(67399),x=r(84543),b=r(45144),m=r(38243),y=r(37253),v=r(56723);const S="https://77.37.51.25",j=()=>({Authorization:`Bearer ${(0,s.getCookie)("accessToken")}`}),w={pageBg:"#f8fafc",accent:"#5eabb1",accentGlow:"rgba(94,171,177,0.22)",cardBg:"#ffffff",cardBorder:"rgba(148,163,184,0.18)",textPrimary:"#0f172a",textSub:"#64748b",shadow:"0 4px 20px rgba(15,23,42,0.07)",radius:"14px"},k=n.Ay.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${w.pageBg};
  box-sizing: border-box;
  padding-bottom: 60px;
`,z=n.Ay.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 4%;
  background: #fff;
  border-bottom: 1px solid ${w.cardBorder};
  box-sizing: border-box;
`,B=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 800;
  color: ${w.textPrimary};
  letter-spacing: -0.4px;
`,A=n.Ay.img`
  height: 32px;
  object-fit: contain;
`,R=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 13px;
  color: ${w.textSub};
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
`,$=n.Ay.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.6px;
  position: relative;
  background: linear-gradient(120deg, #ffffff, ${w.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${d.L8.sm}px) {
    font-size: 22px;
  }
`,M=n.Ay.p`
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
  background: ${w.cardBg};
  border-radius: 12px;
  padding: 6px;
  box-shadow: ${w.shadow};
  border: 1px solid ${w.cardBorder};
  box-sizing: border-box;

  @media (max-width: ${d.L8.sm}px) {
    width: 100%;
    margin-top: 14px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`,P=n.Ay.div`
  padding: 10px 24px;
  font-size: 14px;
  font-weight: ${e=>e.$active?"600":"500"};
  color: ${e=>e.$active?w.textPrimary:w.textSub};
  background: ${e=>e.$active?`linear-gradient(135deg, ${w.accentGlow}, rgba(94,171,177,0.08))`:"transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  user-select: none;

  ${e=>e.$active&&`\n    &::after {\n      content: "";\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 24px;\n      height: 2.5px;\n      background: ${w.accent};\n      border-radius: 2px;\n    }\n  `}

  &:hover {
    color: ${w.textPrimary};
    background: ${e=>e.$active?`linear-gradient(135deg, ${w.accentGlow}, rgba(94,171,177,0.08))`:"rgba(15,23,42,0.04)"};
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
`,T={statsRow:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:16,marginBottom:24},statCard:{background:"#fff",borderRadius:14,padding:"20px 22px",border:`1px solid ${w.cardBorder}`,boxShadow:w.shadow},statValue:{fontSize:28,fontWeight:800,color:w.textPrimary,margin:0,letterSpacing:"-0.5px"},statLabel:{fontSize:12,color:w.textSub,marginTop:4,fontWeight:500},filterBar:{display:"flex",gap:10,marginBottom:20,flexWrap:"wrap",alignItems:"center"},input:{padding:"9px 14px",borderRadius:10,border:"1px solid rgba(148,163,184,0.25)",fontSize:13,outline:"none",background:"#fff",color:w.textPrimary},select:{padding:"9px 14px",borderRadius:10,border:"1px solid rgba(148,163,184,0.25)",fontSize:13,outline:"none",background:"#fff",color:w.textPrimary,cursor:"pointer"},primaryBtn:{padding:"9px 18px",borderRadius:10,border:"none",fontSize:13,fontWeight:600,cursor:"pointer",background:w.accent,color:"#fff",transition:"all 0.15s"},btn:{padding:"9px 18px",borderRadius:10,border:"none",fontSize:13,fontWeight:600,cursor:"pointer",transition:"all 0.15s"},grid:{display:"grid",gap:18},card:{background:"#fff",borderRadius:14,padding:20,border:`1px solid ${w.cardBorder}`,boxShadow:w.shadow,display:"flex",flexDirection:"column",gap:12},cardHeader:{display:"flex",alignItems:"center",gap:12},initialsCircle:{width:44,height:44,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:16,color:"#fff",flexShrink:0},businessName:{fontSize:15,fontWeight:700,color:w.textPrimary,margin:0},category:{fontSize:12,color:w.textSub,margin:0,textTransform:"capitalize"},badge:{display:"inline-block",padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:600,textTransform:"capitalize"},demoArea:{padding:"10px 12px",borderRadius:10,background:"#f8fafc",fontSize:12,color:w.textSub},demoLink:{color:w.accent,textDecoration:"none",wordBreak:"break-all",fontSize:12},actionsRow:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginTop:"auto"},smallBtn:{padding:"5px 10px",borderRadius:8,border:"1px solid rgba(148,163,184,0.25)",fontSize:11,fontWeight:600,cursor:"pointer",background:"#fff",color:w.textSub,transition:"all 0.15s"},smallBtnPrimary:{padding:"5px 10px",borderRadius:8,border:"none",fontSize:11,fontWeight:600,cursor:"pointer",background:w.accent,color:"#fff"},smallBtnGreen:{padding:"5px 10px",borderRadius:8,border:"none",fontSize:11,fontWeight:600,cursor:"pointer",background:"#10b981",color:"#fff"},toast:{position:"fixed",bottom:24,right:24,padding:"12px 22px",borderRadius:12,fontSize:13,fontWeight:600,color:"#fff",zIndex:9999,boxShadow:"0 8px 30px rgba(0,0,0,0.15)",transition:"all 0.3s",pointerEvents:"none"},loading:{padding:60,textAlign:"center",color:"#94a3b8",fontSize:14},empty:{padding:60,textAlign:"center",color:"#94a3b8",fontSize:14},pager:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:20,fontSize:13,color:w.textSub}},L=[{id:"first",label:"Level 1 -- First Contact",color:"#2D7A4E",bg:"#E8F5EC"},{id:"reminder_1",label:"Level 2 -- Reminder 1",color:"#C67F17",bg:"#FEF3D6"},{id:"reminder_2",label:"Level 3 -- Reminder 2 (Final)",color:"#C44B3F",bg:"#FDECEA"}],O=e=>{if(!e)return"";const t=Date.now()-new Date(e).getTime(),r=Math.floor(t/6e4);if(r<1)return"just now";if(r<60)return`${r}m ago`;const i=Math.floor(r/60);if(i<24)return`${i}h ago`;const n=Math.floor(i/24);return n<30?`${n}d ago`:new Date(e).toLocaleDateString()};function D(){const e=(0,a.Zp)(),[t,r]=(0,i.useState)("My Prospects"),[n,o]=(0,i.useState)(null),d=JSON.parse((0,s.getCookie)("userInfo")||"{}"),l=d.name||d.username||"Sales User";return(0,v.jsxs)(k,{children:[(0,v.jsxs)(z,{children:[(0,v.jsxs)(B,{children:[(0,v.jsx)(A,{src:"/main-logo.png",alt:"Menugic"}),"Sales Dashboard"]}),(0,v.jsxs)(R,{children:[(0,v.jsx)("span",{style:{fontWeight:600,color:w.textPrimary},children:l}),(0,v.jsx)("button",{onClick:()=>{(0,s.Y)("accessToken"),(0,s.Y)("userInfo"),localStorage.removeItem("isLoggedIn"),e("/login")},style:{...T.btn,background:"#f1f5f9",color:w.textSub,border:`1px solid ${w.cardBorder}`},children:"Logout"})]})]}),(0,v.jsxs)(C,{children:[(0,v.jsx)($,{children:"Sales Dashboard"}),(0,v.jsx)(M,{children:"Manage your prospects, build demos, and track your performance"})]}),(0,v.jsx)(W,{children:["My Prospects","Pipeline","Messages","My Stats"].map((e=>(0,v.jsx)(P,{$active:t===e,onClick:()=>r(e),children:e},e)))}),(0,v.jsxs)(_,{children:["My Prospects"===t&&(0,v.jsx)(b.A,{basePath:"/sales/prospects",zonesPath:"/sales/zones",prefill:n,onPrefillConsumed:()=>o(null)}),"Pipeline"===t&&(0,v.jsx)(m.A,{scope:y._i,canDiscover:!1,onSendToProspects:e=>{o(e),r("My Prospects")}}),"Messages"===t&&(0,v.jsx)(E,{}),"My Stats"===t&&(0,v.jsx)(F,{})]})]})}function E(){const[e,t]=(0,i.useState)([]),[r,n]=(0,i.useState)(!0);(0,i.useEffect)((()=>{o.A.get(`${S}/sales/templates`,{headers:j()}).then((e=>{let{data:r}=e;return t(r.data||[])})).catch((e=>console.error("Failed to load templates:",e))).finally((()=>n(!1)))}),[]);const a=e=>(e||"").replace(/\{business_name\}/g,'<span style="color:#5eabb1;font-weight:600">{business_name}</span>').replace(/\{demo_url\}/g,'<span style="color:#5eabb1;font-weight:600">{demo_url}</span>');return r?(0,v.jsx)("div",{style:T.loading,children:"Loading templates..."}):(0,v.jsxs)("div",{style:{padding:"0 4px"},children:[(0,v.jsxs)("div",{style:{marginBottom:24},children:[(0,v.jsx)("h2",{style:{fontSize:18,fontWeight:700,color:w.textPrimary,marginBottom:4},children:"Message Templates"}),(0,v.jsx)("p",{style:{fontSize:13,color:w.textSub,lineHeight:1.5},children:"View the message templates available for prospect outreach. Organized by contact level."})]}),(0,v.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:16},children:L.map((t=>{const r=(i=t.id,e.filter((e=>e.stage===i)));var i;const n=r.filter((e=>"en"===e.language)),o=r.filter((e=>"ar"===e.language));return(0,v.jsxs)("div",{style:{background:"#fff",borderRadius:12,border:`1px solid ${w.cardBorder}`,boxShadow:w.shadow,overflow:"hidden"},children:[(0,v.jsxs)("div",{style:{padding:"14px 16px",borderBottom:"1px solid #f0edea",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,v.jsx)("span",{style:{width:8,height:8,borderRadius:"50%",background:t.color}}),(0,v.jsx)("span",{style:{fontSize:13,fontWeight:700,color:w.textPrimary},children:t.label})]}),(0,v.jsxs)("span",{style:{fontSize:11,color:w.textSub,background:"#f5f3f0",padding:"2px 8px",borderRadius:12},children:[r.length," template",1!==r.length?"s":""]})]}),(0,v.jsxs)("div",{style:{padding:16},children:[n.length>0&&(0,v.jsxs)("div",{style:{marginBottom:12},children:[(0,v.jsx)("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:w.textSub,marginBottom:8},children:"English"}),n.map((e=>(0,v.jsx)(I,{tmpl:e,highlight:a},e.id)))]}),o.length>0&&(0,v.jsxs)("div",{style:{marginBottom:12},children:[(0,v.jsx)("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:w.textSub,marginBottom:8},children:"Arabic"}),o.map((e=>(0,v.jsx)(I,{tmpl:e,highlight:a,isAr:!0},e.id)))]}),0===r.length&&(0,v.jsx)("div",{style:{textAlign:"center",padding:"20px 0",color:"#bbb",fontSize:13},children:"No templates yet"})]})]},t.id)}))}),(0,v.jsxs)("div",{style:{marginTop:24,padding:16,background:"#fff",borderRadius:12,border:`1px solid ${w.cardBorder}`,boxShadow:w.shadow},children:[(0,v.jsx)("div",{style:{fontSize:12,fontWeight:700,color:w.textPrimary,marginBottom:8},children:"Available Placeholders"}),(0,v.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[{tag:"{business_name}",label:"Business Name"},{tag:"{demo_url}",label:"Demo URL"}].map((e=>(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 10px",background:"#f5f3f0",borderRadius:6,fontSize:12},children:[(0,v.jsx)("code",{style:{fontWeight:700,color:w.accent},children:e.tag}),(0,v.jsx)("span",{style:{color:w.textSub},children:e.label})]},e.tag)))})]})]})}function I(e){let{tmpl:t,highlight:r,isAr:n}=e;const[o,a]=(0,i.useState)(!1),s=t.body||"",d=s.length>120?s.substring(0,120)+"...":s;return(0,v.jsxs)("div",{style:{padding:12,borderRadius:8,border:"1px solid #f0edea",marginBottom:8,background:"#fafaf8",direction:n?"rtl":"ltr"},children:[(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:[(0,v.jsx)("span",{style:{fontSize:10,fontWeight:700,padding:"2px 6px",borderRadius:4,background:n?"#f0e8f0":"#e8f0f0",color:n?"#7a5a8a":"#2d6b6b"},children:n?"AR":"EN"}),t.is_default&&(0,v.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"#C8B896"},children:"Default"})]}),(0,v.jsx)("div",{style:{fontSize:12,lineHeight:1.6,color:"#555",whiteSpace:"pre-wrap"},dangerouslySetInnerHTML:{__html:r(o?s:d)}}),s.length>120&&(0,v.jsx)("button",{onClick:()=>a(!o),style:{background:"none",border:"none",fontSize:11,color:w.accent,fontWeight:600,cursor:"pointer",marginTop:4,padding:0},children:o?"Show less":"Show more"})]})}function F(){const[e,t]=(0,i.useState)(null),[r,n]=(0,i.useState)([]),[a,s]=(0,i.useState)([]),[d,b]=(0,i.useState)(!0),[m,y]=(0,i.useState)(!0);(0,i.useEffect)((()=>{o.A.get(`${S}/sales/stats`,{headers:j()}).then((e=>{let{data:r}=e;return t(r.data||r||{})})).catch((()=>t({}))).finally((()=>b(!1))),o.A.get(`${S}/sales/activity`,{headers:j()}).then((e=>{let{data:t}=e;return n(t.data||t||[])})).catch((()=>n([]))).finally((()=>y(!1))),o.A.get(`${S}/sales/stats/trend?days=30`,{headers:j()}).then((e=>{let{data:t}=e;return s(t.data||[])})).catch((()=>s([])))}),[]);const k={prospect_created:{icon:"+",bg:"#eff6ff",color:"#3b82f6"},demo_built:{icon:"D",bg:"#ecfdf5",color:"#10b981"},message_sent:{icon:"M",bg:"#fffbeb",color:"#f59e0b"},status_changed:{icon:"S",bg:"#f5f3ff",color:"#8b5cf6"},screenshot:{icon:"C",bg:"#fef2f2",color:"#ef4444"},default:{icon:"A",bg:"#f1f5f9",color:"#94a3b8"}};return(0,v.jsxs)("div",{style:{padding:"0 4px"},children:[(0,v.jsxs)("div",{style:{marginBottom:24},children:[(0,v.jsx)("h2",{style:{fontSize:18,fontWeight:700,color:w.textPrimary,marginBottom:4},children:"My Performance"}),(0,v.jsx)("p",{style:{fontSize:13,color:w.textSub,lineHeight:1.5},children:"Track your activity and performance metrics."})]}),d?(0,v.jsx)("div",{style:T.loading,children:"Loading stats..."}):(0,v.jsxs)("div",{style:{...T.statsRow,gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))"},children:[(0,v.jsxs)("div",{style:T.statCard,children:[(0,v.jsx)("p",{style:T.statValue,children:(null===e||void 0===e?void 0:e.total)||0}),(0,v.jsx)("p",{style:T.statLabel,children:"Total Prospects"})]}),(0,v.jsxs)("div",{style:T.statCard,children:[(0,v.jsx)("p",{style:T.statValue,children:(null===e||void 0===e?void 0:e.demos_built)||0}),(0,v.jsx)("p",{style:T.statLabel,children:"Demos Built"})]}),(0,v.jsxs)("div",{style:T.statCard,children:[(0,v.jsx)("p",{style:T.statValue,children:(null===e||void 0===e?void 0:e.messages_sent)||0}),(0,v.jsx)("p",{style:T.statLabel,children:"Messages Sent"})]}),(0,v.jsxs)("div",{style:T.statCard,children:[(0,v.jsx)("p",{style:{...T.statValue,color:"#10b981"},children:(null===e||void 0===e?void 0:e.won)||0}),(0,v.jsx)("p",{style:T.statLabel,children:"Won"})]}),(0,v.jsxs)("div",{style:T.statCard,children:[(0,v.jsxs)("p",{style:{...T.statValue,color:w.accent},children:[(null===e||void 0===e?void 0:e.conversion_rate)||0,"%"]}),(0,v.jsx)("p",{style:T.statLabel,children:"Conversion Rate"})]})]}),a.length>0&&(0,v.jsxs)("div",{style:{background:"white",borderRadius:12,padding:16,marginTop:16,marginBottom:16,border:`1px solid ${w.border}`},children:[(0,v.jsx)("h3",{style:{fontSize:15,fontWeight:700,color:w.textPrimary,marginBottom:12},children:"Activity Trend (Last 30 Days)"}),(0,v.jsx)(l.u,{width:"100%",height:220,children:(0,v.jsxs)(c.E,{data:a,children:[(0,v.jsx)(p.d,{strokeDasharray:"3 3",stroke:"#f1f5f9"}),(0,v.jsx)(g.W,{dataKey:"date",tickFormatter:e=>null===e||void 0===e?void 0:e.slice(5),tick:{fontSize:11}}),(0,v.jsx)(u.h,{allowDecimals:!1,tick:{fontSize:11}}),(0,v.jsx)(h.m,{labelFormatter:e=>`Date: ${e}`}),(0,v.jsx)(f.s,{wrapperStyle:{fontSize:12}}),(0,v.jsx)(x.yP,{dataKey:"demo_built",name:"Demos Built",fill:"#10b981",radius:[4,4,0,0]}),(0,v.jsx)(x.yP,{dataKey:"message_sent",name:"Messages Sent",fill:"#f59e0b",radius:[4,4,0,0]}),(0,v.jsx)(x.yP,{dataKey:"prospect_created",name:"Prospects Created",fill:"#3b82f6",radius:[4,4,0,0]})]})})]}),(0,v.jsxs)("div",{style:{marginTop:8},children:[(0,v.jsx)("h3",{style:{fontSize:15,fontWeight:700,color:w.textPrimary,marginBottom:16},children:"Recent Activity"}),m?(0,v.jsx)("div",{style:T.loading,children:"Loading activity..."}):0===r.length?(0,v.jsx)("div",{style:{background:"#fff",borderRadius:14,padding:"40px 20px",textAlign:"center",color:w.textSub,fontSize:13,border:`1px solid ${w.cardBorder}`,boxShadow:w.shadow},children:"No activity recorded yet. Start by creating prospects or building demos."}):(0,v.jsx)("div",{style:{background:"#fff",borderRadius:14,border:`1px solid ${w.cardBorder}`,boxShadow:w.shadow,overflow:"hidden"},children:r.map(((e,t)=>{var i,n;const o=k[e.action||e.type]||k.default;return(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 20px",borderBottom:t<r.length-1?"1px solid #f1f5f9":"none"},children:[(0,v.jsx)("div",{style:{width:36,height:36,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",background:o.bg,color:o.color,fontWeight:700,fontSize:14,flexShrink:0},children:o.icon}),(0,v.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,v.jsx)("div",{style:{fontSize:13,color:w.textPrimary,fontWeight:500},children:e.description||e.message||(e.action||"").replace(/_/g," ")||"Activity"}),(e.business_name||(null===(i=e.details)||void 0===i?void 0:i.business_name))&&(0,v.jsx)("div",{style:{fontSize:11,color:w.textSub,marginTop:2},children:e.business_name||(null===(n=e.details)||void 0===n?void 0:n.business_name)})]}),(0,v.jsx)("div",{style:{fontSize:11,color:w.textSub,whiteSpace:"nowrap",flexShrink:0},children:O(e.createdAt||e.created_at||e.timestamp)})]},e.id||t)}))})]})]})}},65470:(e,t,r)=>{r.d(t,{A:()=>v});var i=r(98587),n=r(58168),o=r(82483),a=r(29765),s=r(49770),d=r(80254),l=r(26855),c=r(30988),p=r(71251),g=r(5024),u=r(52304);function h(e){return(0,u.Ay)("MuiTypography",e)}(0,g.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=r(56723);const x=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,l.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,p.A)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((e=>{let{theme:t,ownerState:r}=e;return(0,n.A)({margin:0},"inherit"===r.variant&&{font:"inherit"},"inherit"!==r.variant&&t.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=o.forwardRef((function(e,t){const r=(0,c.A)({props:e,name:"MuiTypography"}),o=(e=>y[e]||e)(r.color),l=(0,s.A)((0,n.A)({},r,{color:o})),{align:g="inherit",className:u,component:v,gutterBottom:S=!1,noWrap:j=!1,paragraph:w=!1,variant:k="body1",variantMapping:z=m}=l,B=(0,i.A)(l,x),A=(0,n.A)({},l,{align:g,color:o,className:u,component:v,gutterBottom:S,noWrap:j,paragraph:w,variant:k,variantMapping:z}),R=v||(w?"p":z[k]||m[k])||"span",C=(e=>{const{align:t,gutterBottom:r,noWrap:i,paragraph:n,variant:o,classes:a}=e,s={root:["root",o,"inherit"!==e.align&&`align${(0,p.A)(t)}`,r&&"gutterBottom",i&&"noWrap",n&&"paragraph"]};return(0,d.A)(s,h,a)})(A);return(0,f.jsx)(b,(0,n.A)({as:R,ref:t,ownerState:A,className:(0,a.A)(C.root,u)},B))}))},9417:(e,t,r)=>{function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{A:()=>i})},63662:(e,t,r)=>{function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}r.d(t,{A:()=>i})},13332:(e,t,r)=>{r.d(t,{n:()=>p});var i=r(82483),n=r(85537),o=r(68116),a=r(14159),s=r(48917),d=class extends a.Q{#e;#t=void 0;#r;#i;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#n()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){const t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,s.f8)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#r,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,s.EN)(t.mutationKey)!==(0,s.EN)(this.options.mutationKey)?this.reset():"pending"===this.#r?.state.status&&this.#r.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#r?.removeObserver(this)}onMutationUpdate(e){this.#n(),this.#o(e)}getCurrentResult(){return this.#t}reset(){this.#r?.removeObserver(this),this.#r=void 0,this.#n(),this.#o()}mutate(e,t){return this.#i=t,this.#r?.removeObserver(this),this.#r=this.#e.getMutationCache().build(this.#e,this.options),this.#r.addObserver(this),this.#r.execute(e)}#n(){const e=this.#r?.state??(0,n.$)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#o(e){o.j.batch((()=>{if(this.#i&&this.hasListeners()){const t=this.#t.variables,r=this.#t.context;"success"===e?.type?(this.#i.onSuccess?.(e.data,t,r),this.#i.onSettled?.(e.data,null,t,r)):"error"===e?.type&&(this.#i.onError?.(e.error,t,r),this.#i.onSettled?.(void 0,e.error,t,r))}this.listeners.forEach((e=>{e(this.#t)}))}))}},l=r(42186),c=r(33857);function p(e,t){const r=(0,l.jE)(t),[n]=i.useState((()=>new d(r,e)));i.useEffect((()=>{n.setOptions(e)}),[n,e]);const a=i.useSyncExternalStore(i.useCallback((e=>n.subscribe(o.j.batchCalls(e))),[n]),(()=>n.getCurrentResult()),(()=>n.getCurrentResult())),s=i.useCallback(((e,t)=>{n.mutate(e,t).catch(c.l)}),[n]);if(a.error&&(0,c.G)(n.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:s,mutateAsync:a.mutate}}},38:(e,t,r)=>{function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]=r[i]}return e}r.d(t,{A:()=>n});var n=function e(t,r){function n(e,n,o){if("undefined"!==typeof document){"number"===typeof(o=i({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var s in o)o[s]&&(a+="; "+s,!0!==o[s]&&(a+="="+o[s].split(";")[0]));return document.cookie=e+"="+t.write(n,e)+a}}return Object.create({set:n,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],i={},n=0;n<r.length;n++){var o=r[n].split("="),a=o.slice(1).join("=");try{var s=decodeURIComponent(o[0]);if(i[s]=t.read(a,s),e===s)break}catch(d){}}return e?i[e]:i}},remove:function(e,t){n(e,"",i({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,i({},this.attributes,t))},withConverter:function(t){return e(i({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);
//# sourceMappingURL=1010.a947d4d0.chunk.js.map