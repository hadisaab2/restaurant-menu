"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[7756],{77756:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var a=r(82483),i=r(41190),o=r(11222),n=r(93376),s=r(26557),d=r(20694),l=r(82519),c=r(66899),p=r(918),x=r(73817),g=r(8426),f=r(57783),b=r(67399),u=r(84543),h=r(45144),m=r(58765),y=r(38243),S=r(20264),v=r(37253),w=r(56723);const j="https://77.37.51.25",k=()=>({Authorization:`Bearer ${(0,s.getCookie)("accessToken")}`}),z={pageBg:"#f8fafc",accent:"#5eabb1",accentGlow:"rgba(94,171,177,0.22)",cardBg:"#ffffff",cardBorder:"rgba(148,163,184,0.18)",textPrimary:"#0f172a",textSub:"#64748b",shadow:"0 4px 20px rgba(15,23,42,0.07)",radius:"14px"},$=i.Ay.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${z.pageBg};
  box-sizing: border-box;
  padding-bottom: 60px;
`,P=i.Ay.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 4%;
  background: #fff;
  border-bottom: 1px solid ${z.cardBorder};
  box-sizing: border-box;
`,B=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 800;
  color: ${z.textPrimary};
  letter-spacing: -0.4px;
`,A=i.Ay.img`
  height: 32px;
  object-fit: contain;
`,R=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 13px;
  color: ${z.textSub};
`,C=i.Ay.header`
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
`,W=i.Ay.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.6px;
  position: relative;
  background: linear-gradient(120deg, #ffffff, ${z.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${d.L8.sm}px) {
    font-size: 22px;
  }
`,L=i.Ay.p`
  margin: 8px 0 0 0;
  opacity: 0.6;
  font-size: 14px;
  line-height: 1.5;
  position: relative;

  @media (max-width: ${d.L8.sm}px) {
    font-size: 12px;
  }
`,_=i.Ay.div`
  width: 92%;
  max-width: 1400px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  background: ${z.cardBg};
  border-radius: 12px;
  padding: 6px;
  box-shadow: ${z.shadow};
  border: 1px solid ${z.cardBorder};
  box-sizing: border-box;

  @media (max-width: ${d.L8.sm}px) {
    width: 100%;
    margin-top: 14px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`,D=i.Ay.div`
  padding: 10px 24px;
  font-size: 14px;
  font-weight: ${e=>e.$active?"600":"500"};
  color: ${e=>e.$active?z.textPrimary:z.textSub};
  background: ${e=>e.$active?`linear-gradient(135deg, ${z.accentGlow}, rgba(94,171,177,0.08))`:"transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  user-select: none;

  ${e=>e.$active&&`\n    &::after {\n      content: "";\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 24px;\n      height: 2.5px;\n      background: ${z.accent};\n      border-radius: 2px;\n    }\n  `}

  &:hover {
    color: ${z.textPrimary};
    background: ${e=>e.$active?`linear-gradient(135deg, ${z.accentGlow}, rgba(94,171,177,0.08))`:"rgba(15,23,42,0.04)"};
  }

  @media (max-width: ${d.L8.sm}px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`,T=i.Ay.div`
  width: 92%;
  max-width: 1400px;
  margin-top: 16px;
  box-sizing: border-box;

  @media (max-width: ${d.L8.sm}px) {
    width: 100%;
    padding: 0 12px;
    margin-top: 12px;
  }
`,M={statsRow:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:16,marginBottom:24},statCard:{background:"#fff",borderRadius:14,padding:"20px 22px",border:`1px solid ${z.cardBorder}`,boxShadow:z.shadow},statValue:{fontSize:28,fontWeight:800,color:z.textPrimary,margin:0,letterSpacing:"-0.5px"},statLabel:{fontSize:12,color:z.textSub,marginTop:4,fontWeight:500},filterBar:{display:"flex",gap:10,marginBottom:20,flexWrap:"wrap",alignItems:"center"},input:{padding:"9px 14px",borderRadius:10,border:"1px solid rgba(148,163,184,0.25)",fontSize:13,outline:"none",background:"#fff",color:z.textPrimary},select:{padding:"9px 14px",borderRadius:10,border:"1px solid rgba(148,163,184,0.25)",fontSize:13,outline:"none",background:"#fff",color:z.textPrimary,cursor:"pointer"},primaryBtn:{padding:"9px 18px",borderRadius:10,border:"none",fontSize:13,fontWeight:600,cursor:"pointer",background:z.accent,color:"#fff",transition:"all 0.15s"},btn:{padding:"9px 18px",borderRadius:10,border:"none",fontSize:13,fontWeight:600,cursor:"pointer",transition:"all 0.15s"},grid:{display:"grid",gap:18},card:{background:"#fff",borderRadius:14,padding:20,border:`1px solid ${z.cardBorder}`,boxShadow:z.shadow,display:"flex",flexDirection:"column",gap:12},cardHeader:{display:"flex",alignItems:"center",gap:12},initialsCircle:{width:44,height:44,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:16,color:"#fff",flexShrink:0},businessName:{fontSize:15,fontWeight:700,color:z.textPrimary,margin:0},category:{fontSize:12,color:z.textSub,margin:0,textTransform:"capitalize"},badge:{display:"inline-block",padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:600,textTransform:"capitalize"},demoArea:{padding:"10px 12px",borderRadius:10,background:"#f8fafc",fontSize:12,color:z.textSub},demoLink:{color:z.accent,textDecoration:"none",wordBreak:"break-all",fontSize:12},actionsRow:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginTop:"auto"},smallBtn:{padding:"5px 10px",borderRadius:8,border:"1px solid rgba(148,163,184,0.25)",fontSize:11,fontWeight:600,cursor:"pointer",background:"#fff",color:z.textSub,transition:"all 0.15s"},smallBtnPrimary:{padding:"5px 10px",borderRadius:8,border:"none",fontSize:11,fontWeight:600,cursor:"pointer",background:z.accent,color:"#fff"},smallBtnGreen:{padding:"5px 10px",borderRadius:8,border:"none",fontSize:11,fontWeight:600,cursor:"pointer",background:"#10b981",color:"#fff"},toast:{position:"fixed",bottom:24,right:24,padding:"12px 22px",borderRadius:12,fontSize:13,fontWeight:600,color:"#fff",zIndex:9999,boxShadow:"0 8px 30px rgba(0,0,0,0.15)",transition:"all 0.3s",pointerEvents:"none"},loading:{padding:60,textAlign:"center",color:"#94a3b8",fontSize:14},empty:{padding:60,textAlign:"center",color:"#94a3b8",fontSize:14},pager:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:20,fontSize:13,color:z.textSub}},I=e=>{if(!e)return"";const t=Date.now()-new Date(e).getTime(),r=Math.floor(t/6e4);if(r<1)return"just now";if(r<60)return`${r}m ago`;const a=Math.floor(r/60);if(a<24)return`${a}h ago`;const i=Math.floor(a/24);return i<30?`${i}d ago`:new Date(e).toLocaleDateString()};function V(){const e=(0,n.Zp)(),[t,r]=(0,a.useState)("Restaurants"),[i,o]=(0,a.useState)(null),d=JSON.parse((0,s.getCookie)("userInfo")||"{}"),l=d.name||d.username||"Sales User";return(0,w.jsxs)($,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(B,{children:[(0,w.jsx)(A,{src:"/main-logo.png",alt:"Menugic"}),"Sales Dashboard"]}),(0,w.jsxs)(R,{children:[(0,w.jsx)("span",{style:{fontWeight:600,color:z.textPrimary},children:l}),(0,w.jsx)("button",{onClick:()=>{(0,s.Y)("accessToken"),(0,s.Y)("userInfo"),localStorage.removeItem("isLoggedIn"),e("/login")},style:{...M.btn,background:"#f1f5f9",color:z.textSub,border:`1px solid ${z.cardBorder}`},children:"Logout"})]})]}),(0,w.jsxs)(C,{children:[(0,w.jsx)(W,{children:"Sales Dashboard"}),(0,w.jsx)(L,{children:"Manage your prospects, build demos, and track your performance"})]}),(0,w.jsx)(_,{children:["Restaurants","My Prospects","Pipeline","Messages","My Stats"].map((e=>(0,w.jsx)(D,{$active:t===e,onClick:()=>r(e),children:e},e)))}),(0,w.jsxs)(T,{children:["Restaurants"===t&&(0,w.jsx)(S.A,{readOnly:!0,basePath:"/sales/restaurants"}),"My Prospects"===t&&(0,w.jsx)(h.A,{basePath:"/sales/prospects",zonesPath:"/sales/zones",prefill:i,onPrefillConsumed:()=>o(null)}),"Pipeline"===t&&(0,w.jsx)(y.A,{scope:v._i,canDiscover:!1,onSendToProspects:e=>{o(e),r("My Prospects")}}),"Messages"===t&&(0,w.jsx)(m.A,{basePath:"/sales/prospects",canDelete:!1}),"My Stats"===t&&(0,w.jsx)(G,{})]})]})}function G(){const[e,t]=(0,a.useState)(null),[r,i]=(0,a.useState)([]),[n,s]=(0,a.useState)([]),[d,h]=(0,a.useState)(!0),[m,y]=(0,a.useState)(!0);(0,a.useEffect)((()=>{o.A.get(`${j}/sales/stats`,{headers:k()}).then((e=>{let{data:r}=e;return t(r.data||r||{})})).catch((()=>t({}))).finally((()=>h(!1))),o.A.get(`${j}/sales/activity`,{headers:k()}).then((e=>{let{data:t}=e;return i(t.data||t||[])})).catch((()=>i([]))).finally((()=>y(!1))),o.A.get(`${j}/sales/stats/trend?days=30`,{headers:k()}).then((e=>{let{data:t}=e;return s(t.data||[])})).catch((()=>s([])))}),[]);const S={prospect_created:{icon:"+",bg:"#eff6ff",color:"#3b82f6"},demo_built:{icon:"D",bg:"#ecfdf5",color:"#10b981"},message_sent:{icon:"M",bg:"#fffbeb",color:"#f59e0b"},status_changed:{icon:"S",bg:"#f5f3ff",color:"#8b5cf6"},screenshot:{icon:"C",bg:"#fef2f2",color:"#ef4444"},default:{icon:"A",bg:"#f1f5f9",color:"#94a3b8"}};return(0,w.jsxs)("div",{style:{padding:"0 4px"},children:[(0,w.jsxs)("div",{style:{marginBottom:24},children:[(0,w.jsx)("h2",{style:{fontSize:18,fontWeight:700,color:z.textPrimary,marginBottom:4},children:"My Performance"}),(0,w.jsx)("p",{style:{fontSize:13,color:z.textSub,lineHeight:1.5},children:"Track your activity and performance metrics."})]}),d?(0,w.jsx)("div",{style:M.loading,children:"Loading stats..."}):(0,w.jsxs)("div",{style:{...M.statsRow,gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))"},children:[(0,w.jsxs)("div",{style:M.statCard,children:[(0,w.jsx)("p",{style:M.statValue,children:(null===e||void 0===e?void 0:e.total)||0}),(0,w.jsx)("p",{style:M.statLabel,children:"Total Prospects"})]}),(0,w.jsxs)("div",{style:M.statCard,children:[(0,w.jsx)("p",{style:M.statValue,children:(null===e||void 0===e?void 0:e.demos_built)||0}),(0,w.jsx)("p",{style:M.statLabel,children:"Demos Built"})]}),(0,w.jsxs)("div",{style:M.statCard,children:[(0,w.jsx)("p",{style:M.statValue,children:(null===e||void 0===e?void 0:e.messages_sent)||0}),(0,w.jsx)("p",{style:M.statLabel,children:"Messages Sent"})]}),(0,w.jsxs)("div",{style:M.statCard,children:[(0,w.jsx)("p",{style:{...M.statValue,color:"#10b981"},children:(null===e||void 0===e?void 0:e.won)||0}),(0,w.jsx)("p",{style:M.statLabel,children:"Won"})]}),(0,w.jsxs)("div",{style:M.statCard,children:[(0,w.jsxs)("p",{style:{...M.statValue,color:z.accent},children:[(null===e||void 0===e?void 0:e.conversion_rate)||0,"%"]}),(0,w.jsx)("p",{style:M.statLabel,children:"Conversion Rate"})]})]}),n.length>0&&(0,w.jsxs)("div",{style:{background:"white",borderRadius:12,padding:16,marginTop:16,marginBottom:16,border:`1px solid ${z.border}`},children:[(0,w.jsx)("h3",{style:{fontSize:15,fontWeight:700,color:z.textPrimary,marginBottom:12},children:"Activity Trend (Last 30 Days)"}),(0,w.jsx)(l.u,{width:"100%",height:220,children:(0,w.jsxs)(c.E,{data:n,children:[(0,w.jsx)(p.d,{strokeDasharray:"3 3",stroke:"#f1f5f9"}),(0,w.jsx)(x.W,{dataKey:"date",tickFormatter:e=>null===e||void 0===e?void 0:e.slice(5),tick:{fontSize:11}}),(0,w.jsx)(g.h,{allowDecimals:!1,tick:{fontSize:11}}),(0,w.jsx)(f.m,{labelFormatter:e=>`Date: ${e}`}),(0,w.jsx)(b.s,{wrapperStyle:{fontSize:12}}),(0,w.jsx)(u.yP,{dataKey:"demo_built",name:"Demos Built",fill:"#10b981",radius:[4,4,0,0]}),(0,w.jsx)(u.yP,{dataKey:"message_sent",name:"Messages Sent",fill:"#f59e0b",radius:[4,4,0,0]}),(0,w.jsx)(u.yP,{dataKey:"prospect_created",name:"Prospects Created",fill:"#3b82f6",radius:[4,4,0,0]})]})})]}),(0,w.jsxs)("div",{style:{marginTop:8},children:[(0,w.jsx)("h3",{style:{fontSize:15,fontWeight:700,color:z.textPrimary,marginBottom:16},children:"Recent Activity"}),m?(0,w.jsx)("div",{style:M.loading,children:"Loading activity..."}):0===r.length?(0,w.jsx)("div",{style:{background:"#fff",borderRadius:14,padding:"40px 20px",textAlign:"center",color:z.textSub,fontSize:13,border:`1px solid ${z.cardBorder}`,boxShadow:z.shadow},children:"No activity recorded yet. Start by creating prospects or building demos."}):(0,w.jsx)("div",{style:{background:"#fff",borderRadius:14,border:`1px solid ${z.cardBorder}`,boxShadow:z.shadow,overflow:"hidden"},children:r.map(((e,t)=>{var a,i;const o=S[e.action||e.type]||S.default;return(0,w.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 20px",borderBottom:t<r.length-1?"1px solid #f1f5f9":"none"},children:[(0,w.jsx)("div",{style:{width:36,height:36,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",background:o.bg,color:o.color,fontWeight:700,fontSize:14,flexShrink:0},children:o.icon}),(0,w.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,w.jsx)("div",{style:{fontSize:13,color:z.textPrimary,fontWeight:500},children:e.description||e.message||(e.action||"").replace(/_/g," ")||"Activity"}),(e.business_name||(null===(a=e.details)||void 0===a?void 0:a.business_name))&&(0,w.jsx)("div",{style:{fontSize:11,color:z.textSub,marginTop:2},children:e.business_name||(null===(i=e.details)||void 0===i?void 0:i.business_name)})]}),(0,w.jsx)("div",{style:{fontSize:11,color:z.textSub,whiteSpace:"nowrap",flexShrink:0},children:I(e.createdAt||e.created_at||e.timestamp)})]},e.id||t)}))})]})]})}}}]);
//# sourceMappingURL=7756.8dc20f78.chunk.js.map