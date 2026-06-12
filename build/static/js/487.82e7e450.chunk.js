/*! For license information please see 487.82e7e450.chunk.js.LICENSE.txt */
(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[487],{89993:(e,t,o)=>{"use strict";o.d(t,{w:()=>l});var i=o(11222),n=o(81132),r=o(27303),a=o(26557);o(34304);const l=e=>{let{onSuccess:t,branch_id:o}=e;const{error:l,isLoading:s,status:d,data:c,refetch:p}=(0,r.I)({queryFn:()=>(async e=>{try{if(console.log(e),null!=e&&void 0!=e){const t=(0,n.yd)(e);return await i.A.get(t,{headers:{Authorization:`Bearer ${(0,a.Ri)("accessToken")}`}})}}catch(l){throw l}})(o),queryKey:[`branch-${o}`],onSuccess:t,retry:!1,cacheTime:0,staleTime:0,refetchOnMount:!0,refetchOnWindowFocus:!0});return{error:l,isLoading:s,status:d,response:c,refetch:p}}},22139:(e,t,o)=>{"use strict";o.d(t,{c:()=>r});var i=o(11222),n=o(81132);function r(e){if(null==e||""===e)return;if("all-items"===e)return;const t="string"===typeof e?e.trim():String(e);t&&"all-items"!==t&&i.A.put((0,n.O8)(t)).catch((()=>{}))}},45170:(e,t,o)=>{"use strict";o.d(t,{E:()=>n});var i=o(11222);const n=e=>{let{onSuccess:t,onError:o}=e;return{handleApiCall:async e=>{try{const o=await(async e=>{try{return await i.A.post("http://localhost:4000/feedback",e)}catch(t){throw t}})(e);return t&&t(o),o}catch(n){throw o&&o(n),n}}}}},88631:(e,t,o)=>{"use strict";o.d(t,{y:()=>a});var i=o(11222),n=o(81132),r=o(27303);const a=(e,t)=>(0,r.I)({queryKey:["bestsellers",e,t||"all"],queryFn:()=>(async(e,t)=>e&&(await i.A.get((0,n.dl)(e,t))).data||[])(e,t),enabled:!!e,refetchOnWindowFocus:!1,retry:!1})},40499:(e,t,o)=>{"use strict";o.d(t,{O:()=>a});var i=o(11222),n=o(81132),r=o(27303);const a=(e,t)=>(0,r.I)({queryKey:["featured-products",e,t||"all"],queryFn:()=>(async(e,t)=>{if(!e)return[];const o=(0,n.b5)(e,t);return(await i.A.get(o)).data||[]})(e,t),enabled:!!e,refetchOnWindowFocus:!1,retry:!1})},88282:(e,t,o)=>{"use strict";o.d(t,{Nb:()=>s,VL:()=>d,oo:()=>l});var i=o(11222),n=o(81132),r=o(27303),a=o(26557);const l=async e=>{try{const t=(0,n.lA)(e);return await i.A.get(t,{headers:{Authorization:`Bearer ${(0,a.Ri)("accessToken")}`}})}catch(t){throw t}},s=e=>[`products-${e}`],d=e=>{let{onSuccess:t,productId:o}=e;const{error:i,isLoading:n,status:a,data:d,refetch:c}=(0,r.I)({queryFn:()=>l(o),queryKey:s(o),retry:!1,staleTime:3e5,onSuccess:t,refetchOnWindowFocus:!1});return{error:i,isLoading:n,status:a,response:null===d||void 0===d?void 0:d.data,refetch:c}}},9328:(e,t,o)=>{"use strict";o.d(t,{w:()=>d});var i=o(11222),n=o(81132),r=o(62205),a=o(22139);const l=new Set;const s=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2?arguments[2]:void 0;try{0===t&&function(e){if(!e||"all-items"===e)return;const t=String(e);l.has(t)||(l.add(t),(0,a.c)(e))}(e);const r=(0,n.cI)(e,t,o);return(await i.A.get(r)).data}catch(r){throw r}},d=(e,t)=>{const o=null!=e?String(e):null;return(0,r.q)({queryKey:["products",o,t||"all"],queryFn:e=>{let{pageParam:i=0}=e;return s(o,i,t)},getNextPageParam:(e,t)=>{if(!(e.length<10))return t.length},keepPreviousData:!0,retry:!1,refetchOnWindowFocus:!1,staleTime:0,enabled:!!o})}},32415:(e,t,o)=>{"use strict";o.d(t,{u:()=>a});var i=o(11222),n=o(81132),r=o(62205);const a=(e,t)=>(0,r.q)({queryKey:["products-by-restaurant",e,t||"all"],queryFn:o=>{let{pageParam:r=0}=o;return async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2?arguments[2]:void 0;if(!e)return[];const r=(0,n.qw)(e,t,o);return(await i.A.get(r)).data||[]}(e,r,t)},getNextPageParam:(e,t)=>{if(!(e.length<10))return t.length},enabled:!!e,refetchOnWindowFocus:!1,retry:!1})},16104:(e,t,o)=>{"use strict";o.d(t,{$:()=>l});var i=o(11222),n=o(81132),r=o(27303),a=o(26557);const l=e=>{let{onSuccess:t,productId:o}=e;const{error:l,isLoading:s,status:d,data:c,refetch:p}=(0,r.I)({queryFn:()=>(async e=>{try{const t=(0,n.ry)(e);return await i.A.put(t,{headers:{Authorization:`Bearer ${(0,a.Ri)("accessToken")}`}})}catch(l){throw l}})(o),retry:!1,queryKey:[`logproducts-${o}`],onSuccess:t,refetchOnWindowFocus:!1});return{error:l,isLoading:s,status:d,response:null===c||void 0===c?void 0:c.data,refetch:p}}},58321:(e,t,o)=>{"use strict";o.d(t,{o:()=>r});var i=o(11222),n=o(81132);const r=async e=>await i.A.post(n.aU,e)},16106:(e,t,o)=>{"use strict";o.d(t,{A:()=>d});var i=o(82483),n=o(35238),r=o(71481),a=o(56723);const l={width:"100%",height:"180px",borderRadius:10},s={lat:33.8938,lng:35.5018};function d(e){let{apiKey:t,onLocationConfirm:o,selectedLocation:d,hasError:c,theme:p,activeLanguage:u="en"}=e;const x=(e,t)=>"ar"===u?t:e,{isLoaded:h,loadError:g}=(0,n.KD)({googleMapsApiKey:t}),[m,f]=(0,i.useState)(!1),[v,b]=(0,i.useState)(d?{lat:d.latitude,lng:d.longitude}:null),[y,w]=(0,i.useState)(d?{lat:d.latitude,lng:d.longitude}:s),[$,j]=(0,i.useState)((null===d||void 0===d?void 0:d.address)||""),[C,k]=(0,i.useState)(!1),[A,L]=(0,i.useState)(""),z=(0,i.useRef)(null),S=(null===p||void 0===p?void 0:p.mainColor)||(null===p||void 0===p?void 0:p.maincolor)||"#007bff",_=(0,i.useCallback)(((e,t)=>{var o,i;if(null===(o=window.google)||void 0===o||null===(i=o.maps)||void 0===i||!i.Geocoder)return;(new window.google.maps.Geocoder).geocode({location:{lat:e,lng:t}},((o,i)=>{"OK"===i&&o[0]?j(o[0].formatted_address):j(`${e.toFixed(6)}, ${t.toFixed(6)}`)}))}),[]),T=(0,i.useCallback)((e=>{const t=e.latLng.lat(),o=e.latLng.lng();b({lat:t,lng:o}),_(t,o)}),[_]),P=(0,i.useCallback)((e=>{const t=e.latLng.lat(),o=e.latLng.lng();b({lat:t,lng:o}),_(t,o)}),[_]),E=(0,i.useCallback)((()=>{navigator.geolocation?(k(!0),L(""),navigator.geolocation.getCurrentPosition((e=>{var t,i;const{latitude:n,longitude:r}=e.coords,a={lat:n,lng:r};if(b(a),w(a),k(!1),null!==(t=window.google)&&void 0!==t&&null!==(i=t.maps)&&void 0!==i&&i.Geocoder){(new window.google.maps.Geocoder).geocode({location:a},((e,t)=>{const i="OK"===t&&e[0]?e[0].formatted_address:`${n.toFixed(6)}, ${r.toFixed(6)}`;j(i),o({latitude:n,longitude:r,address:i})}))}else{const e=`${n.toFixed(6)}, ${r.toFixed(6)}`;j(e),o({latitude:n,longitude:r,address:e})}}),(()=>{L(x("Unable to retrieve your location","\u062a\u0639\u0630\u0631 \u062a\u062d\u062f\u064a\u062f \u0645\u0648\u0642\u0639\u0643")),k(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):L(x("Geolocation is not supported by your browser","\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0644\u0627 \u064a\u062f\u0639\u0645 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0645\u0648\u0642\u0639"))}),[_,x,o]),I=(0,i.useCallback)((()=>{f(!0)}),[]),F=(0,i.useCallback)((()=>{v&&(o({latitude:v.lat,longitude:v.lng,address:$}),f(!1))}),[v,$,o]),N=(0,i.useCallback)((()=>{f(!1),d||(b(null),j(""))}),[d]),B=(0,i.useCallback)((e=>{z.current=e}),[]);return(0,i.useEffect)((()=>{if(null!==d&&void 0!==d&&d.latitude&&null!==d&&void 0!==d&&d.longitude){const e={lat:d.latitude,lng:d.longitude};b(e),w(e),d.address&&j(d.address)}}),[d]),g?(0,a.jsx)("div",{style:{color:"#ff4444",fontSize:13,padding:"8px 0"},children:x("Failed to load Google Maps","\u0641\u0634\u0644 \u062a\u062d\u0645\u064a\u0644 \u062e\u0631\u0627\u0626\u0637 Google")}):(0,a.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:12},children:[(0,a.jsxs)("div",{style:{display:"flex",gap:10},children:[(0,a.jsxs)("button",{type:"button",onClick:E,disabled:C||!h,style:{flex:1,padding:"12px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:C?"not-allowed":"pointer",border:`2px solid ${S}`,background:S,color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",gap:8,opacity:C?.6:1,transition:"all 0.2s ease"},children:[(0,a.jsx)(r.hO$,{}),C?x("Locating...","\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u062f\u064a\u062f..."):x("My Location","\u0645\u0648\u0642\u0639\u064a")]}),(0,a.jsxs)("button",{type:"button",onClick:I,disabled:!h,style:{flex:1,padding:"12px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",border:`2px solid ${(null===p||void 0===p?void 0:p.borderColor)||"rgba(0, 0, 0, 0.1)"}`,background:(null===p||void 0===p?void 0:p.categoryUnActive)||"#ffffff",color:(null===p||void 0===p?void 0:p.popupTextColor)||"#00112b",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"all 0.2s ease"},children:[(0,a.jsx)(r.vq8,{}),x("Pick on Map","\u0627\u062e\u062a\u0631 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629")]})]}),d&&!m&&h&&(0,a.jsxs)("div",{style:{borderRadius:12,overflow:"hidden",border:`2px solid ${(null===p||void 0===p?void 0:p.borderColor)||"rgba(0,0,0,0.1)"}`,position:"relative"},children:[(0,a.jsx)(n.u6,{mapContainerStyle:l,center:{lat:d.latitude,lng:d.longitude},zoom:15,options:{draggable:!1,zoomControl:!1,scrollwheel:!1,disableDoubleClickZoom:!0,streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1},children:(0,a.jsx)(n.pH,{position:{lat:d.latitude,lng:d.longitude}})}),(0,a.jsxs)("div",{style:{padding:"10px 14px",background:(null===p||void 0===p?void 0:p.categoryUnActive)||"#f8f9fa",display:"flex",justifyContent:"space-between",alignItems:"center",gap:8},children:[(0,a.jsxs)("div",{style:{flex:1},children:[(0,a.jsx)("div",{style:{fontSize:12,fontWeight:600,color:(null===p||void 0===p?void 0:p.popupTextColor)||"#00112b",marginBottom:2},children:x("Delivery Location","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644")}),(0,a.jsx)("div",{style:{fontSize:11,color:(null===p||void 0===p?void 0:p.popupTextColor)||"#666",lineHeight:1.4},children:d.address||`${d.latitude}, ${d.longitude}`})]}),(0,a.jsxs)("button",{type:"button",onClick:I,style:{padding:"6px 12px",borderRadius:8,border:`1.5px solid ${S}`,background:"transparent",color:S,fontSize:11,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:4,transition:"all 0.2s"},children:[(0,a.jsx)(r.uO9,{size:10}),x("Change","\u062a\u063a\u064a\u064a\u0631")]})]})]}),m&&h&&(0,a.jsxs)("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:99999,background:"#fff",display:"flex",flexDirection:"column",overflow:"hidden"},children:[(0,a.jsxs)("div",{style:{padding:"12px 16px",background:"#fff",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #eee",flexShrink:0},children:[(0,a.jsx)("h3",{style:{margin:0,fontSize:16,fontWeight:600},children:x("Select your location","\u062d\u062f\u062f \u0645\u0648\u0642\u0639\u0643")}),(0,a.jsx)("button",{type:"button",onClick:N,style:{background:"none",border:"none",cursor:"pointer",fontSize:18,color:"#666",padding:4},children:(0,a.jsx)(r.QCr,{})})]}),(0,a.jsxs)("div",{style:{flex:1,position:"relative",minHeight:0},children:[(0,a.jsx)(n.u6,{mapContainerStyle:{width:"100%",height:"100%"},center:y,zoom:15,onClick:T,onLoad:B,options:{streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1,zoomControl:!0},children:v&&(0,a.jsx)(n.pH,{position:v,draggable:!0,onDragEnd:P})}),v&&(0,a.jsxs)("div",{style:{position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",width:"90%",maxWidth:360,background:"#fff",borderRadius:14,boxShadow:"0 8px 32px rgba(0,0,0,0.2)",padding:14,display:"flex",flexDirection:"column",gap:10,zIndex:10},children:[$&&(0,a.jsxs)("div",{style:{fontSize:12,color:"#333",padding:"8px 10px",background:"#f5f5f5",borderRadius:8,display:"flex",alignItems:"flex-start",gap:8,lineHeight:1.4},children:[(0,a.jsx)(r.vq8,{style:{color:S,marginTop:2,flexShrink:0}}),(0,a.jsx)("span",{children:$})]}),(0,a.jsxs)("button",{type:"button",onClick:F,style:{width:"100%",padding:"14px",borderRadius:10,fontSize:15,fontWeight:700,cursor:"pointer",border:"none",background:S,color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",gap:8,boxShadow:`0 4px 16px ${S}50`},children:[(0,a.jsx)(r.CMH,{}),x("Confirm Location","\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0645\u0648\u0642\u0639")]})]}),!v&&(0,a.jsx)("div",{style:{position:"absolute",bottom:30,left:"50%",transform:"translateX(-50%)",background:"#fff",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.15)",padding:"12px 20px",fontSize:13,color:"#666",whiteSpace:"nowrap"},children:x("Tap on the map to place a pin","\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0644\u0648\u0636\u0639 \u062f\u0628\u0648\u0633")})]})]}),A&&(0,a.jsx)("div",{style:{color:"#ff4444",fontSize:13},children:A}),c&&!d&&(0,a.jsx)("div",{style:{color:"#ff4444",fontSize:13},children:x("Please select a location","\u064a\u0631\u062c\u0649 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0645\u0648\u0642\u0639")})]})}},94707:(e,t,o)=>{"use strict";o.d(t,{A:()=>n,o:()=>r});var i=o(71481);const n=[{value:"star",label:"Star",Icon:i.gt3},{value:"truck",label:"Truck",Icon:i.dv1},{value:"check",label:"Check",Icon:i.CMH},{value:"heart",label:"Heart",Icon:i.Mbv},{value:"gift",label:"Gift",Icon:i.Wp},{value:"leaf",label:"Leaf",Icon:i.sHz},{value:"fire",label:"Fire",Icon:i.Itl},{value:"shield",label:"Shield",Icon:i.SMR},{value:"bolt",label:"Bolt",Icon:i.lHQ},{value:"award",label:"Award",Icon:i.Z0L},{value:"thumbsup",label:"Thumbs Up",Icon:i.gb0},{value:"rocket",label:"Rocket",Icon:i.uoG}];function r(e){const t=n.find((t=>t.value===(e||"").toLowerCase()));return t?t.Icon:i.gt3}},72454:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>Xp});var i=o(82483),n=o(41190),r=o(42751),a=o(22829);const l=n.Ay.div`
min-height: 100vh;
width: 100%;
position: relative;
background-color: ${e=>e.theme.backgroundColor};
font-family: ${e=>`${e.theme.font||"system-ui"}, "Noto Kufi Arabic" !important`};
overflow: visible;
`,s=n.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
height: 100%;
position: relative;
padding-bottom: 70px; /* Space for bottom tab bar */
`,d=n.Ay.div`
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
bottom: 24px;
right: 20px;
width: 56px;
height: 56px;
background: ${e=>e.theme.mainColor||"#007bff"};
border-radius: 50%;
display: flex;
align-items: center;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
justify-content: center;
color: white;
font-size: 22px;
cursor: pointer;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
z-index: 50;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15);
}

&:active {
  transform: scale(1.05);
  transition: all 0.15s ease;
}

@media (min-width: 768px) {
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  font-size: 24px;
}
`,n.Ay.div`
position: fixed;
bottom: 90px;
right: 20px;
width: 56px;
height: 56px;
background: ${e=>e.theme.mainColor||"#007bff"};
border-radius: 50%;
display: flex;
align-items: center;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
justify-content: center;
color: white;
font-size: 22px;
cursor: pointer;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
z-index: 50;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15);
}

&:active {
  transform: scale(1.05);
  transition: all 0.15s ease;
}

@media (min-width: 768px) {
  bottom: 100px;
  right: 30px;
  width: 60px;
  height: 60px;
  font-size: 24px;
}
`,n.Ay.div`
position: absolute;
left: -6px;
top: -6px;
min-width: 22px;
height: 22px;
border-radius: 12px;
font-size: 11px;
font-weight: 700;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
color: ${e=>e.theme.textColor||"#ffffff"};
background: ${e=>e.theme.backgroundColor||"#ff4444"};
padding: 0 6px;
border: 2px solid ${e=>e.theme.mainColor||"#007bff"};
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
`,n.Ay.div`
  position: fixed;
  top: 20px;
  ${e=>"ar"===e.activeLanguage?"left: 20px;":"right: 20px;"}
  z-index: 10000;
  
  @media (min-width: 768px) {
    top: 30px;
    ${e=>"ar"===e.activeLanguage?"left: 30px;":"right: 30px;"}
  }
`,n.Ay.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${e=>e.theme.mainColor||"#333333"};
  font-size: 18px;
  
  &:hover {
    transform: scale(1.1);
    color: ${e=>e.theme.mainColor||"#007bff"};
  }
  
  &:active {
    transform: scale(1);
  }
  
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
`;var c=o(27320);const p=n.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${e=>e.theme.backgroundColor};
`,u=(n.Ay.div`
width: 90%;
display: flex;
align-items: ${e=>"en"==e.activeLanuguage?"flex-start":"flex-end"};
flex-direction: column;
margin-top: 30px;
margin-bottom: 30px;
font-weight: 600;
color:${e=>e.theme.textColor}
`,n.Ay.div`
font-size: 27px;


`,n.Ay.div`
width: 90%;
max-width: 600px;
display: flex;
align-items: center;
margin: 25px auto 0;
color:${e=>e.theme.searchTextColor};
height: 48px;
border-radius: 12px;
overflow: visible;
position: relative;
flex-direction: row;
gap: 10px;

@media (min-width: 768px) {
  height: 52px;
  gap: 12px;
}
`),x=n.Ay.div`
flex: 1;
display: flex;
align-items: center;
color:${e=>e.theme.searchTextColor};
height: 100%;
border-radius: 12px;
overflow: hidden;
position: relative;
background: ${e=>e.theme.searchbackground||"#ffffff"};
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
transition: all 0.3s ease;

&:focus-within {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transform: translateY(-1px);
}
`,h=n.Ay.input`
width: 100%;
height: 100%;
background-color: ${e=>e.theme.searchbackground||"#ffffff"};
border: 1px solid rgba(0, 0, 0, 0.08);
outline: none;
padding-left: ${e=>"en"==e.activeLanguage?"48px":"0px"};
padding-right: ${e=>"en"==e.activeLanguage?"0px":"48px"};
color:${e=>e.theme.searchTextColor||"#333333"};
font-size: 15px;
transition: all 0.3s ease;

&::placeholder{
    color:${e=>e.theme.searchTextColor||"#999999"};
    opacity: 0.6;
}

&:focus {
  border-color: ${e=>e.theme.mainColor||"#007bff"}40;
}

@media (min-width: 768px) {
  font-size: 16px;
}
`,g=(0,n.Ay)(c.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"16px":null};
right: ${e=>"en"==e.activeLanguage?null:"16px"};
font-size: 20px;
color: ${e=>e.theme.searchTextColor||"#999999"};
z-index: 1;
`,m=(n.Ay.div`
width: 90%;
display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 10px;
margin-left: 10px;

font-weight: 600;
color:${e=>e.theme.searchTextColor};
height: 40px;
font-size: 13px;

`,n.Ay.div`
height: 100%;
min-width: 56px;
font-size: 14px;
padding: 0 16px;
border-radius: 12px;
font-weight: 500;
gap: 6px;
flex-direction: row;
display: flex;
align-items: center;
justify-content: center;
background-color:${e=>e.theme.searchbackground||"#ffffff"};
color:${e=>e.theme.searchTextColor||"#333333"};
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.3s ease;
border: 1px solid rgba(0, 0, 0, 0.08);
margin-bottom: 20px;
&:hover {
  background-color: ${e=>e.theme.mainColor||"#007bff"}15;
  color: ${e=>e.theme.mainColor||"#007bff"};
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

&:active {
  transform: translateY(0);
  transition: all 0.15s ease;
}

@media (min-width: 768px) {
  min-width: 64px;
  padding: 0 18px;
  font-size: 15px;
}
`);(0,n.Ay)(a.LZ_)`
color: inherit;
font-size: 18px;
transition: transform 0.3s ease;

${m}:hover & {
  transform: scale(1.1);
}

@media (min-width: 768px) {
  font-size: 20px;
}
`;var f=o(1901);n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;

`,n.Ay.div`
  overflow: scroll;
  width: 90%;
  display: flex;
  align-items: center;
  position:relative;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  height: 100px;
  /* Hide scrollbar in WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
  -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
`,n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  /* transform: ${e=>`translateX(-${100*e.carouselPosition/4}%)`}; */
`,n.Ay.div`
  min-width: calc(100% / 4);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition:all 0.2s ease-in-out;
  color:${e=>e.categoryId==e.activeCategory?e.theme.categoryactive:e.theme.categoryunactive};
  line-height: ${e=>"ar"==e.activeLanuguage?"1.5":"null"};
  font-size: 14px;
`,n.Ay.div`
  width:75%;
  height:100%;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color:${e=>e.isAllItems?e.theme.mainColor:e.categoryId==e.activeCategory?e.theme.categoryActive:e.theme.categoryUnActive};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  transition: 0.2s all ease-in-out;
  color:${e=>e.isAllItems?e.theme.popupbuttonText:e.categoryId==e.activeCategory?"white":"black"};//edit thiss
`,n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;

`,n.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
background-color:${e=>e.isAllItems?e.theme.popupbuttonText:e.categoryId==e.activeCategory?e.theme.categoryActiveIcon:e.theme.categoryUnactiveIcon};
transition: 0.2s all ease-in-out;

`,n.Ay.img`
width:20px;
height:20px;

`,n.Ay.div`
 display: flex;
justify-content: center; 
flex:0.8;
width: 100%;
`,n.Ay.span`
    width: 92%;
    /* overflow: hidden;
    text-overflow: ellipsis; */
    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 12px;
    color: ${e=>e.isAllItems?e.theme.popupbuttonText:"inherit"};
  user-select: none !important;
  -webkit-user-select: none !important;  /* For Safari (iOS) */
  -moz-user-select: none !important;     /* For Firefox */
  -ms-user-select: none !important;      /* For Internet Explorer */
`,(0,n.Ay)(f.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
@media (min-width: 1024px) {
        right: 20px;
    }
`,(0,n.Ay)(f.NaI)`
position: absolute;
font-size: 22px;
left: 0px;
color:${e=>e.theme.textColor};
rotate: calc(180deg);
@media (min-width: 1024px) {
        left: 20px;
    }
`;o(22139);var v=o(56723);n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
position: relative;
`,n.Ay.div`
  overflow: scroll;
  width: 90%;
  display: flex;
  align-items: center;
  position:relative;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  height: 40px;
  /* Hide scrollbar in WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
  -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
`,n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  width: 100%;

`,n.Ay.div`
  display: inline-flex;
  box-sizing: border-box;
  min-width: calc(100% / 4);
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition:all 0.2s ease-in-out;
  color:${e=>e.categoryId==e.activeCategory?e.theme.categoryactive:e.theme.categoryunactive};
  line-height: ${e=>"ar"==e.activeLanuguage?"1.5":"null"};
  font-size: 14px;
  white-space: nowrap; /* Prevent wrapping of text */
  flex-shrink: 0; /* Prevent shrinking of the item */
  height: 100%;
  margin-left: ${e=>0!=e.index&&"8px"};

`,n.Ay.div`
  height:100%;
  width: 100%;

  border-radius: 50px;
  padding-left: 10px; /* Add padding to left and right */
  padding-right: 10px; /* Add padding to left and right */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color:${e=>e.isAllItems?e.theme.mainColor:e.categoryId==e.activeCategory?e.theme.categoryActive:e.theme.categoryUnActive};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  transition: 0.2s all ease-in-out;
  color:${e=>e.isAllItems?e.theme.popupbuttonText:e.categoryId==e.activeCategory?"white":"black"};//edit thiss
`,n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;

`,n.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
background-color:${e=>e.categoryId==e.activeCategory?e.theme.categoryActiveIcon:e.theme.categoryUnactiveIcon};
transition: 0.2s all ease-in-out;

`,n.Ay.img`
width:20px;
height:20px;

`,n.Ay.div`
 display: flex;
justify-content: center; 

width: auto;

`,n.Ay.span`

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 12px;
    color: ${e=>e.isAllItems?e.theme.popupbuttonText:"inherit"};
  user-select: none !important;
  -webkit-user-select: none !important;  /* For Safari (iOS) */
  -moz-user-select: none !important;     /* For Firefox */
  -ms-user-select: none !important;      /* For Internet Explorer */
`,(0,n.Ay)(f.NaI)`
position: absolute;
font-size: 22px;
right: 0px;
color:${e=>e.theme.textColor};
`;var b=o(93376),y=o(91965);function w(e){let{activeCategory:t,setactiveCategory:o,categories:i,setSearchText:n,searchText:r,setshowSidebar:a,showSidebar:l,carouselPosition:s,setcarouselPosition:d,popupHandler:c}=e;const{restaurantName:m}=(0,b.g)(),f=window.location.hostname.split(".")[0],w="menugic"!==f&&"localhost"!==f&&"www"!==f?f:m,$=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[w].activeLanguage}));return(0,v.jsx)(p,{children:(0,v.jsx)(u,{children:(0,v.jsxs)(x,{children:[(0,v.jsx)(g,{activeLanguage:$}),(0,v.jsx)(h,{type:"text",activeLanguage:$,dir:"en"==$?"ltr":"rtl",placeholder:"en"==$?"Search Category":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062d\u062b",onChange:e=>{n(e.target.value)},value:r})]})})})}var $=o(99891),j=o(17123),C=o(11222);const k=n.Ay.div`
 width: 100%;
 padding-bottom: 20px;
 display: flex;
 justify-content: center;
 background-color: ${e=>e.theme.backgroundColor||"#f8f9fa"};
`,A=n.Ay.div`
 flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: 0vh;
  opacity: 1;
  transition:all 0.7s ease-in-out;
`,L=n.Ay.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`,z=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`,S=n.Ay.h3`
  margin: 0 auto;
  width: 95%;
  max-width: 600px;
  font-size: 19px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor};
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  letter-spacing: 0.3px;
  padding: 10px 14px;
  border-radius: 12px;
  background: ${e=>e.theme.BoxColor||e.theme.popupbackgroundColor||e.theme.categoryUnActive};
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.08);
`,_=(n.Ay.button`
  position: fixed;
  bottom: 25px;
  left: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 0;
  background: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText||"#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.18);
  z-index: 60;
  animation: gotoPulse 1.6s ease-in-out infinite;

  @keyframes gotoPulse {
    0% { opacity: 0.7; transform: scale(0.98); }
    50% { opacity: 1; transform: scale(1.05); }
    100% { opacity: 0.7; transform: scale(0.98); }
  }
`,n.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${e=>e.theme.mainColor};
  font-size: 13px;
`),T=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0 20px;
`,P=n.Ay.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.theme.mainColor};
  animation: pulse 0.8s ease-in-out infinite;

  @keyframes pulse {
    0% { opacity: 0.3; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1.1); }
    100% { opacity: 0.3; transform: scale(0.9); }
  }
`,E=(n.Ay.p`
  margin: 6px 0 0 0;
  font-size: 12px;
  color: ${e=>e.theme.textColor};
  opacity: 0.7;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`),I=n.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  background-color: ${e=>e.theme.BoxColor||e.theme.popupbackgroundColor||"#fff"};
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  align-items: center;
  min-height: 100px;
`,F=n.Ay.div`
  width: 80px;
  min-width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.categoryUnactive||"#f0f0f0"};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: ${e=>e.$isLogoFallback?"none":"cover"};
  }
`,N=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,B=n.Ay.h4`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.BoxTextColor||e.theme.textColor||"#333"};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,O=n.Ay.div`
  font-size: 15px;
  font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#007bff"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${e=>"ar"===e.activeLanguage?"row-reverse":"row"};
`,R=n.Ay.span`
  font-size: 14px;
  color: ${e=>e.theme.BoxPriceColor||e.theme.textColor||"#666"};
  text-decoration: line-through;
  opacity: 0.6;
`,D=n.Ay.button`
  position: absolute;
  bottom: 8px;
  right: ${e=>"en"===e.activeLanguage?"8px":"auto"};
  left: ${e=>"en"===e.activeLanguage?"auto":"8px"};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${e=>e.disabled?.5:1};
  pointer-events: ${e=>e.disabled?"none":"auto"};
  z-index: 1;
  transition: transform 0.2s ease, opacity 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,U=n.Ay.div`
  position: absolute;
  bottom: 8px;
  right: ${e=>"en"===e.activeLanguage?"8px":"auto"};
  left: ${e=>"en"===e.activeLanguage?"auto":"8px"};
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 999px;
  background: ${e=>e.theme.backgroundColor};
  color: ${e=>e.theme.mainColor};
  border: 0;
`,q=n.Ay.div`
  position: relative;
  width: 100%;
`,M=n.Ay.div`
    width: ${e=>e.$isFeatured?"100%":"50%"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    @media (min-width: 768px) and (max-width: 1023px) {
        width: ${e=>e.$isFeatured?"100%":"33.333%"};
    }
    @media (min-width: 1024px) {
        width: ${e=>e.$isFeatured?"100%":"20%"};
    }
`,W=n.Ay.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.theme.BoxColor};
    border-radius: 20px;
    position: relative;

    //cjhange loadeeerr wrappperr and this oneee colorrrr

`,Y=n.Ay.img`
  width: 90%;
  height: 100%;
  object-fit: ${e=>e.$isLogoFallback?"none":"cover"};
  border-radius: 10px;
  visibility: ${e=>e.imageLoaded?"visible":"hidden"};
`,H=n.Ay.div`
position: relative;
width:100%;
height: 20vh;
overflow: hidden;
margin-top: 10px;
display: flex;
justify-content: center;
border-radius: 10px;
@media (min-width: 1024px) {
  height: 30vh;
    }


`,X=n.Ay.div`
width:90%;
display: flex;
justify-content: center;
flex-direction: column;
text-align: ${e=>"en"==e.activeLanuguage?"left":"right"};
position: relative;
align-items: ${e=>"en"==e.activeLanuguage?"flex-start":"flex-end"};
gap:5px;
height: 10vh;
margin-top: 5px;

`,V=n.Ay.span`
font-size: ${e=>e.fontSize};
font-weight: 500;
color:${e=>e.theme.BoxTextColor};

display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3em; /* Adjust based on line-height */
  line-height: 1.5em; /* Adjust based on your font size and design */



`,K=n.Ay.div`
  display: flex;
  flex-direction: ${e=>e.$isRtl?"row-reverse":"row"};
  gap: 5px;
  justify-content: ${e=>e.$isRtl?"flex-end":"flex-start"};
  text-align: ${e=>e.$isRtl?"right":"left"};
`,Q=n.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;
text-decoration:${e=>e.discounted?"line-through":"none"};


`,J=n.Ay.span`
color:${e=>e.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;

`,G=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Z=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${G} 1s linear infinite; /* Apply animation */
`,ee=n.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:91%;
height: 20vh;
border-radius: 10px;
overflow: hidden;
top: 10px;
  z-index: 3;
  background-color: ${e=>e.theme.categoryUnactive};

`,te=n.Ay.div`
  position: absolute;
  top: 8px;
  right: 8px;
  left: auto;
  bottom: auto;
  z-index: 4;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 8px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText};
  border-radius: 4px;
  line-height: 1.2;
`,oe=n.Ay.div`
  position: absolute;
  top: 8px;
  left: 8px;
  right: auto;
  font-size: 11px;
  padding: 4px 8px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
  z-index: 2;
`,ie=n.Ay.button`
  position: absolute;
  bottom: 8px;
  left: ${e=>"en"===e.activeLanuguage?"8px":"auto"};
  right: ${e=>"en"===e.activeLanuguage?"auto":"8px"};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0;
  background-color: rgba(255, 255, 255, 0.95);
  color: ${e=>e.$filled?"#e11d48":e.theme.BoxTextColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.2s ease, color 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.08);
    color: ${e=>e.$filled?"#be123c":"#e11d48"};
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(225, 29, 72, 0.35);
  }

  svg {
    fill: none;
    stroke: currentColor;
  }
`,ne=n.Ay.button`
  position: absolute;
  bottom: 8px;
  right: ${e=>"en"===e.activeLanuguage?"8px":"auto"};
  left: ${e=>"en"===e.activeLanuguage?"auto":"8px"};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.popupbuttonText};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${e=>e.disabled?.5:1};
  pointer-events: auto;
  z-index: 1;
  transition: transform 0.2s ease, opacity 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>e.theme.mainColor}40;
  }
`,re=n.Ay.div`
  position: absolute;
  bottom: 8px;
  right: ${e=>"en"===e.activeLanuguage?"8px":"auto"};
  left: ${e=>"en"===e.activeLanuguage?"auto":"8px"};
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 999px;
  background: ${e=>e.theme.backgroundColor};
  color: ${e=>e.theme.mainColor};
  border: 0;
`;var ae=o(42186),le=o(88282),se=o(18907),de=o(58821),ce=o(86001),pe=o(81132),ue=o(70268),xe=o(71481),he=o(73422),ge=o(81926),me=o(2200);const fe=o(34304),ve=a.phF,be=i.forwardRef(((e,t)=>{var o,n,r,a,l;let{plate:s,setactivePlate:d,activePlate:c,index:p,showPopup:u,setSearchParams:x,searchParams:h,activeCategoryId:g,categories:m,disableDetails:f,$isFeatured:w,onAddToCart:$,wishlistIds:j,onWishlistChange:k}=e;const{restaurantName:A}=(0,b.g)(),L=window.location.hostname.split(".")[0],z="menugic"!==L&&"localhost"!==L&&"www"!==L?L:A,S=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[z]})),[_,T]=((0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[z].activeLanguage})),(0,i.useState)(!1)),P=(0,i.useRef)(null),E=(0,ae.jE)(),I=(0,i.useCallback)((()=>{!f&&null!==s&&void 0!==s&&s.id&&E.prefetchQuery({queryKey:(0,le.Nb)(s.id),queryFn:()=>(0,le.oo)(s.id),staleTime:3e5})}),[f,null===s||void 0===s?void 0:s.id,E]),F=()=>{if(!new URLSearchParams(window.location.search).get("productId")&&null===c&&_&&!u){f||d(p);const o=new URLSearchParams(h);if(o.set("productId",null===s||void 0===s?void 0:s.id),"all-items"===g?o.set("categoryId","all-items"):g&&"all-items"!==g&&o.set("categoryId",g),x(o),window.history.pushState({},"",`?${o.toString()}`),null!==S&&void 0!==S&&S.id&&null!==s&&void 0!==s&&s.id){var e,t;const o="all-items"===g?s.category_id:g,i=(null===S||void 0===S||null===(e=S.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,ge.trackItemView)(S.id,s.id,o,i)}document.body.style.overflow="hidden"}},N=(0,y.wA)(),B=(0,ue.wU)(z),O=j&&"function"===typeof j.has&&j.has(s.id),R=(0,me.Q)(null===S||void 0===S?void 0:S.currency),D="all-items"===g?s.category_id:g,U=m.find((e=>e.id==D));let q;q=U&&0!==parseFloat(U.discount||0)?parseFloat(U.discount||0):parseFloat(s.discount||0);let G={};try{G="string"===typeof(null===S||void 0===S?void 0:S.features)?JSON.parse(S.features||"{}"):(null===S||void 0===S?void 0:S.features)||{}}catch(fe){G={}}const be=Boolean(null===s||void 0===s?void 0:s.out_of_stock)||1===Number(null===s||void 0===s?void 0:s.out_of_stock),ye=null!==(o=null===(n=s.images)||void 0===n?void 0:n.findIndex((e=>e.id===s.new_cover_id)))&&void 0!==o?o:-1,we=ye>=0&&(null===(r=s.images)||void 0===r||null===(a=r[ye])||void 0===a?void 0:a.url),$e=null!==S&&void 0!==S&&S.logoURL?(0,de.V)(S.logoURL):null,je=we?(0,de.V)(s.images[ye].url):$e||"",Ce=!fe.isEmpty(null===s||void 0===s?void 0:s.form_json)&&!fe.isEmpty(JSON.parse((null===s||void 0===s?void 0:s.form_json)||"{}")),ke=!fe.isEmpty(null===U||void 0===U?void 0:U.form_json)&&!fe.isEmpty(JSON.parse((null===U||void 0===U?void 0:U.form_json)||"{}")),Ae=Ce||ke,Le=(0,i.useCallback)((e=>{const t=document.getElementById("cart-tab-icon");if(!t)return;const o=(null===e||void 0===e?void 0:e.currentTarget)||(null===e||void 0===e?void 0:e.target),i=o?o.getBoundingClientRect():null,n=t.getBoundingClientRect();if(!i)return;const r=(null===S||void 0===S?void 0:S.mainColor)||(null===S||void 0===S?void 0:S.maincolor)||"#a6ce39",a=i.left+i.width/2,l=i.top+i.height/2,s=n.left+n.width/2,d=n.top+n.height/2,c=document.createElement("div");c.style.cssText=`\n        position: fixed;\n        left: ${a-14}px;\n        top: ${l-14}px;\n        width: 28px; height: 28px;\n        border-radius: 50%;\n        background: ${r};\n        box-shadow: 0 4px 15px ${r}88, 0 2px 6px rgba(0,0,0,0.3);\n        z-index: 99999;\n        pointer-events: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      `,c.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>',document.body.appendChild(c);const p=document.createElement("div");p.style.cssText=`\n        position: fixed;\n        left: ${a-10}px;\n        top: ${l-10}px;\n        width: 20px; height: 20px;\n        border-radius: 50%;\n        background: ${r}55;\n        z-index: 99998;\n        pointer-events: none;\n      `,document.body.appendChild(p);const u=(a+s)/2+(a>s?60:-60),x=Math.min(l,d)-120,h=c.animate([{left:a-14+"px",top:l-14+"px",width:"28px",height:"28px",opacity:1,transform:"scale(1)"},{left:u-12+"px",top:x-12+"px",width:"24px",height:"24px",opacity:1,transform:"scale(1.1)",offset:.35},{left:s-8+"px",top:d-8+"px",width:"16px",height:"16px",opacity:.6,transform:"scale(0.6)"}],{duration:650,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"});p.animate([{left:a-10+"px",top:l-10+"px",width:"20px",height:"20px",opacity:.5},{left:u-8+"px",top:x-8+"px",width:"16px",height:"16px",opacity:.3,offset:.4},{left:s-4+"px",top:d-4+"px",width:"8px",height:"8px",opacity:0}],{duration:700,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"forwards"}),h.onfinish=()=>{c.remove(),p.remove();(t.closest("[data-tab]")||t.parentElement||t).animate([{transform:"scale(1)"},{transform:"scale(1.35)",offset:.25},{transform:"scale(0.85)",offset:.5},{transform:"scale(1.15)",offset:.75},{transform:"scale(1)"}],{duration:500,easing:"ease-out"})}}),[S]),ze=e=>{var t,o;e&&(e.preventDefault(),e.stopPropagation(),null!==(o=e.nativeEvent)&&void 0!==o&&o.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation());if(G&&!1===G.cart)return;if(be)return;if(!0===(null===(t=G)||void 0===t?void 0:t.quick_add_requires_options)&&Ae)return void F();const i=parseFloat((null===s||void 0===s?void 0:s.en_price)||"0")*(1-parseFloat(q)/100);if(N((0,ce.bE)(z,s,1,{},i,"")),null!==S&&void 0!==S&&S.id&&null!==s&&void 0!==s&&s.id){var n,r;const e="all-items"===g?s.category_id:g,t=(null===S||void 0===S||null===(n=S.branches)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.id)||null;(0,ge.trackAddToCart)(S.id,s.id,e,1,t)}Le(e)};return(0,v.jsx)(M,{ref:P,"data-product-container":!0,index:p,activePlate:c,className:"lazy-load",$isFeatured:w,children:(0,v.jsxs)(W,{children:[(s.is_best_seller||s.isBestSeller)&&(0,v.jsx)(oe,{activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,children:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?"Bestseller":"\u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b"}),!_&&(0,v.jsx)(ee,{children:(0,v.jsx)(Z,{})}),(0,v.jsxs)(H,{onClick:F,onMouseEnter:I,onTouchStart:I,children:[s.new&&(0,v.jsx)(te,{children:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?"NEW !":"! \u062c\u062f\u064a\u062f"}),(0,v.jsx)(Y,{ref:t,onLoad:()=>{T(!0)},src:je,imageLoaded:_,$isLogoFallback:!we}),B&&(0,v.jsx)(ie,{type:"button",activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,$filled:O,title:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?O?"Remove from wishlist":"Add to wishlist":O?"\u0625\u0632\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629":"\u0623\u0636\u0641 \u0644\u0644\u0645\u0641\u0636\u0644\u0629",onClick:e=>{var t;e&&(e.preventDefault(),e.stopPropagation(),null!==(t=e.nativeEvent)&&void 0!==t&&t.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation());B&&null!==s&&void 0!==s&&s.id&&(async()=>{try{O?await C.A.delete((0,pe.Vr)(s.id),{headers:{Authorization:`Bearer ${B}`}}):await C.A.post(pe.Vb,{product_id:s.id},{headers:{Authorization:`Bearer ${B}`}}),null===k||void 0===k||k(),he.oR.success("en"===(null===S||void 0===S?void 0:S.activeLanguage)?O?"Removed from wishlist":"Saved to wishlist":O?"\u0623\u064f\u0632\u064a\u0644\u062a \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629":"\u0623\u064f\u0636\u064a\u0641\u062a \u0625\u0644\u0649 \u0627\u0644\u0645\u0641\u0636\u0644\u0629")}catch{he.oR.error("en"===(null===S||void 0===S?void 0:S.activeLanguage)?"Could not update wishlist":"\u062a\u0639\u0630\u0631 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u0641\u0636\u0644\u0629")}})()},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchStart:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:(0,v.jsx)(ve,{size:18})})]}),!1!==(null===(l=G)||void 0===l?void 0:l.cart)&&(be?(0,v.jsx)(re,{activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,children:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,v.jsx)(ne,{type:"button",onClick:ze,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),ze(e)},onTouchStart:e=>{e.stopPropagation()},onPointerDown:e=>{e.stopPropagation()},activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,title:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,v.jsx)(xe._xK,{size:12})})),(0,v.jsxs)(X,{activeLanuguage:null===S||void 0===S?void 0:S.activeLanguage,children:[(0,v.jsx)(V,{fontSize:null===S||void 0===S?void 0:S.font_size,children:"en"===(null===S||void 0===S?void 0:S.activeLanguage)?s.en_name:s.ar_name}),!fe.isEmpty(s.en_price)&&(0,v.jsxs)(K,{$isRtl:"ar"===(null===S||void 0===S?void 0:S.activeLanguage),children:[(0,v.jsx)(Q,{discounted:0!=q,children:(0,se.T)(parseFloat(s.en_price),R)}),(0,v.jsx)(J,{children:0!=q&&(0,se.T)(parseFloat(s.en_price)*(1-parseFloat(q)/100),R)})]})]})]})})})),ye=be;var we=o(10448),$e=o(34304),je=o.n($e);const Ce=n.i7`
  0% {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
`,ke=n.i7`
  0% {
    width: 0%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0px;
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  35% {
    width: 92%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0px;
  }
  65% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.98);
    border-radius: 20px;
    opacity: 1;
  }
  85% {
    transform: translate(-50%, -50%) scale(1.01);
  }
  100% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }
`,Ae=n.i7`
  0% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }
  20% {
    transform: translate(-50%, -50%) scale(0.98);
    opacity: 0.95;
  }
  50% {
    width: 92%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0px;
    opacity: 0.6;
  }
  80% {
    opacity: 0.3;
  }
  100% {
    width: 0%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0px;
    opacity: 0;
  }
`,Le=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 299;
  opacity: ${e=>e.CloseAnimation?1:0};
  animation: ${e=>e.CloseAnimation?Ce:"none"} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  /* Always capture clicks while mounted so closing doesn't let taps pass through to product grid (avoids reopen on 2nd close) */
  pointer-events: auto;
`,ze=n.Ay.div`
  position: fixed;
  width: 92%;
  height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
  max-height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
  align-items: center;
  justify-content: flex-start;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${e=>e.theme.textColor};
  background-color: ${e=>e.theme.backgroundColor};
  padding-bottom: 0;
  overflow-y: ${e=>e.CloseAnimation?"auto":"hidden"};
  overflow-x: hidden;
  z-index: 300;
  border-radius: 24px;
  box-shadow: ${e=>e.CloseAnimation?"0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.05)":"none"};
  display: flex;
  flex-direction: column;
  
  animation: ${e=>e.CloseAnimation?ke:Ae} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: forwards;
  
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mainColor||"#007bff"}40;
    border-radius: 10px;
    &:hover {
      background: ${e=>e.theme.mainColor||"#007bff"}60;
    }
  }
  
  @media (min-width: 768px) {
    width: 88%;
    max-width: 900px;
    height: calc(100vh - 60px);
    max-height: calc(100vh - 60px);
    border-radius: 28px;
    box-shadow: ${e=>e.CloseAnimation?"0 24px 80px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.05)":"none"};
  }
  
  @media (min-width: 1024px) {
    width: 85%;
    max-width: 1000px;
    border-radius: 32px;
    box-shadow: ${e=>e.CloseAnimation?"0 32px 100px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.05)":"none"};
  }
`,Se=n.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,_e=(n.i7`
 0% { 
    height:30vh;
    top:0px;
}

 100% { 
    height:70vh;
    top:80px;

    }
`,n.Ay.div`
  width: 100%;
  height: ${e=>e.squareDimension?"55vh":"70vh"};
  margin-top: 65px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: visible;
  position: relative;
`),Te=n.Ay.div`
  width: 85%;
  height: 100%;
  .swiper {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: none !important;
  }
  .swiper-pagination {
    bottom: 8px;
  }
  .swiper-pagination-fraction {
    color: ${e=>e.theme.textColor||"#333"};
    font-size: 14px;
  }
`,Pe=n.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
`,Ee=n.Ay.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  flex-shrink: 0;
`,Ie=n.Ay.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,Fe=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Ne=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${Fe} 1s linear infinite; /* Apply animation */
`,Be=n.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,Oe=n.Ay.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${e=>e.$cardSlide?"0":e.CloseAnimation?"40px":"10px"};
  width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"90%":"100%"};
  display: ${e=>e.Loaded?"block":"none"};
  transition: all 0.8s;
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"50%":"100%"};
  }
`,Re=(n.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,(0,n.Ay)(we.m6W)`
  font-size: 14px;
  color: ${e=>e.theme.backgroundColor||"#ffffff"};
`),De=(0,n.Ay)(we.m6W)`
  font-size: 26px;
  color: ${e=>e.theme.backgroundColor||"#fff"};
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  border-radius: 50%;
  padding: 8px;
  position:absolute;
  left:4%;
  top:45%;
  z-index:20;
  cursor: pointer;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    left:27%;
  }
`,Ue=(0,n.Ay)(we.OQo)`
  font-size: 26px;
  color: ${e=>e.theme.backgroundColor||"#fff"};
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  border-radius: 50%;
  padding: 8px;
  position:absolute;
  right:4%;
  top:45%;
  z-index:20;
  cursor: pointer;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    right:27%;
  }
`,qe=n.Ay.div`
  position: sticky;
  top: 0;
  width: 100%;
  flex-shrink: 0;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  z-index: 301;
  background-color: ${e=>e.theme.backgroundColor||"#fff"};
  transition: opacity 0.4s ease-in-out;
  
  @media (min-width: 1024px) {
    padding: 20px 40px;
  }
`,Me=n.Ay.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.textColor||"#1a1a1a"};
  margin: 0;
  text-align: center;
  flex: 1;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 20px;
  
  @media (min-width: 768px) {
    font-size: 22px;
    font-weight: 700;
  }
`,We=n.Ay.button`
  position: relative;
  z-index: 302;
  outline: none;
  border: 0;
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
  }
  
  &:active {
    transform: scale(0.95);
  }
`,Ye=(n.Ay.div`
  width: 100%;
  height: 90px;
  position: relative;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
`,n.i7`
 0% { 
    margin-top: -50px;
    opacity: 0;
}
50%{
  margin-top: -50px;
    opacity: 0;
}
 100% { 
    margin-top: 0px;
    opacity: 1;

}
`),He=(n.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${Ye} 1s ease-in-out;
`,n.Ay.div`
  width:90%;
  /* height: ${e=>e.CloseAnimation?"45vh":"25vh"}; */
  height: ${e=>e.squareDimension?"45vh":"60vh"};

  border-radius:40px;
  margin-top: 80px;
  display:flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${Se} 0.4s;
  @media (min-width: 1024px) {
    height: 70vh;
    }
  /* background-color: red; */
`,n.i7`
 0% { 
  margin-left: -70px;
  opacity: 0;
}
50%{
  margin-left: -70px;
  opacity: 0;
}
100% { 
  margin-left: 0;
  opacity: 1;
}
`),Xe=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ve=n.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${He} 0.8s ease-in-out;

`,Ke=n.Ay.div`
  width: 90%;
  display: flex;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};; 
  flex-direction: column;
  /* align-items: center; */
  position: relative;
  margin-top: 20px;
  padding-bottom: 100px;
  color: ${e=>e.theme.textColor};
  opacity: ${e=>e.CloseAnimation?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.CloseAnimation?"auto":"none"};
  @media (min-width: 1024px) {
        width: 50%;
    }
    /* background-color: red; */
`,Qe=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  margin-bottom: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid ${e=>e.theme.mainColor?`${e.theme.mainColor}18`:"rgba(0,0,0,0.06)"};
  flex-wrap: wrap;
  direction: ${e=>"en"===e.activeLanguage?"ltr":"rtl"};
`,Je=n.Ay.span`
  font-size: clamp(1.3rem, 3.8vw, 1.55rem);
  font-weight: 700;
  letter-spacing: ${e=>"en"===e.activeLanguage?"0.02em":"0"};
  line-height: 1.35;
  text-align: ${e=>"en"===e.activeLanguage?"left":"right"};
  color: ${e=>e.theme.textColor};
  flex: 1;
  min-width: 0;
  margin: 0;
`,Ge=n.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,Ze=n.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.popupbackgroundColor};
  background: ${e=>e.theme.mainColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,et=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 10px 18px;
  border-radius: 12px;
  background: ${e=>e.theme.mainColor?`${e.theme.mainColor}14`:"rgba(0,0,0,0.06)"};
  border: 1px solid ${e=>e.theme.mainColor?`${e.theme.mainColor}28`:"rgba(0,0,0,0.08)"};
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
`,tt=n.Ay.span`
  font-size: clamp(0.9rem, 2.2vw, 1rem);
  font-weight: ${e=>e.discounted?"500":"600"};
  color: ${e=>e.discounted?e.theme.textColor?`${e.theme.textColor}88`:"rgba(0,0,0,0.45)":e.theme.mainColor||"inherit"};
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  letter-spacing: 0.02em;
`,ot=n.Ay.span`
  font-size: clamp(1.15rem, 3vw, 1.4rem);
  font-weight: 700;
  color: ${e=>e.theme.mainColor||"inherit"};
  letter-spacing: 0.03em;
`,it=n.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,nt=n.Ay.div`
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${it} 0.7s ease-in-out;
  background-color: ${e=>e.theme.backgroundColor};
  display: flex;
  padding-bottom: max(10px, env(safe-area-inset-bottom));
  padding-top: 16px;
  margin-top: 8px;
  opacity: ${e=>e.CloseAnimation?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.CloseAnimation?"auto":"none"};
  @media (min-width: 1024px) {
    width: 50%;
  }
`,rt=n.Ay.button`
  outline: none;
  border: 0;
  cursor: pointer;
  position: relative;
    width: 90%;
    border-radius: 10px;
    height: 40px;
  color: ${e=>e.theme.popupbuttonText};
  font-weight: 400;
  background-color: ${e=>e.theme.mainColor};
  font-size: 12px;
`,at=n.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,lt=n.Ay.div`
  display: flex;
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;
  opacity: ${e=>e.CloseAnimation?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.CloseAnimation?"auto":"none"};

`,st=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,dt=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,ct=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,pt=(n.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27px;
  width: 27px;
  border-radius: 50%;
  position: relative;
  z-index: 302;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};
  flex-shrink: 0;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (min-width: 1024px) {
    height: 30px;
    width: 30px;
    font-size: 16px;
  }
`),ut=n.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`,xt=n.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,ht=n.Ay.input`
background-color: transparent;
border: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.8)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.8)`)):o}};
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
&:focus{
  outline: none;
}
&::placeholder{
  color:${e=>e.theme.formColor};
  opacity: 0.5;
}
font-size: 13px;
color:${e=>e.theme.formColor};
width: 100%;
padding: 10px;
border-radius: 10px;

`,gt=n.Ay.button`
  position: absolute;
  bottom: 14px;
  right: 25px;
  z-index: 25;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.mainColor||"#007bff"};
  color: ${e=>e.theme.backgroundColor||"#fff"};
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
  &:active {
    transform: scale(0.9);
  }
`,mt=n.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
`,ft=n.Ay.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.15);
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  backdrop-filter: blur(4px);
`,vt=n.Ay.img`
  max-width: none;
  max-height: none;
  transform-origin: center center;
  transform: ${e=>`scale(${e.$scale}) translate(${e.$translateX}px, ${e.$translateY}px)`};
  transition: ${e=>e.$dragging?"none":"transform 0.2s ease"};
  user-select: none;
  -webkit-user-drag: none;
  width: 100vw;
  height: auto;
  object-fit: contain;
`;var bt=o(88620),yt=o(57526);o(44014),o(70045),o(5084);const wt=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
`,$t=n.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
`,jt=n.Ay.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.4s ease-in-out;
  transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,Ct=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,kt=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,At=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,Lt=n.Ay.div`
  margin-top: 20px;
  font-size: 12px;
  color: ${e=>e.theme.mainColor};
  position: relative;
  width: 60px;
  display: flex;
  align-items: center;
`,zt=n.Ay.span`
position: absolute;
left: 0;

`,St=n.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,_t=(0,n.Ay)(r.Z0P)`
    animation:1.2s ${St}  linear infinite ;
    position: absolute;
`;function Tt(e){let{carouselIndex:t,images:o,CloseAnimation:i,carouselSwiped:n}=e;return(0,v.jsxs)(wt,{CloseAnimation:i,children:[(0,v.jsxs)($t,{children:[(0,v.jsx)(jt,{carouselIndex:t,children:(0,v.jsx)(Ct,{})}),o.map((e=>(0,v.jsx)(kt,{children:(0,v.jsx)(At,{})})))]}),!n&&(0,v.jsxs)(Lt,{children:[(0,v.jsx)(zt,{children:"Swipe"}),(0,v.jsx)(_t,{})]})]})}n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const Pt=n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,Et=(n.Ay.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input[type="checkbox"] {
    margin-right: 8px;
    accent-color: ${e=>e.theme.mainColor}; /* Change this color to your desired checkbox color */
  }
`,n.Ay.select`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  color: ${e=>e.theme.backgroundColor};
  background-color: ${e=>e.theme.mainColor};
  &:active{
    outline: none;
    border: 0px;

  }
  `,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,n.Ay.label`
  display: flex;
  align-items: center;
  input[type="radio"] {
    margin-right: 8px;
    accent-color:${e=>e.theme.mainColor}; /* Change this color to your desired radio button color */
  }
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(je().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`),It=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,Ft=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Nt=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let t=e.theme.formColor;if(je().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.1)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.1)`)):t}};
  font-size:10px;

`,Bt=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,Ot=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${e=>e.theme.formColor};

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);var Rt=o(41235);function Dt(e){let{component:t,formData:o,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||[]);return(0,v.jsxs)(Et,{index:r,children:[(0,v.jsx)(Pt,{children:t.label}),t.values.map((e=>(0,v.jsxs)(Ft,{children:[s.some((t=>t===e.label))?(0,v.jsx)(Bt,{onClick:()=>{(e=>{let o=s.filter((t=>t!==e.label));d(o),n(t.key,o)})(e)},children:(0,v.jsx)(Rt.RXm,{size:"15px"})}):(0,v.jsx)(Nt,{onClick:()=>{(e=>{d([...s,e.label]),n(t.key,[...s,e.label])})(e)},children:(0,v.jsx)(xe.OiG,{})}),(0,v.jsx)(It,{children:e.label})]}))),(c=a,c in l?(0,v.jsx)(Ot,{children:"This field is required"}):null)]});var c}const Ut=n.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(je().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,qt=n.Ay.div`
  padding: 7px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color:transparent;
  color:${e=>e.theme.formColor};
  width: 70%;
  border: 1px solid ${e=>e.theme.formColor};

font-size: 13px;
`,Mt=n.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,Wt=n.Ay.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  border-radius: 4px;
  overflow-y: auto;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${e=>e.isOpen?"200px":"0px"};
  transition: 0.2s all ease-in-out;
  background-color:${e=>e.theme.mainColor};
  color:${e=>e.theme.popupbuttonText};
  width: 70%;

`,Yt=n.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,Ht=n.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,Xt=n.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,Vt=n.Ay.div`
  display: flex;
  justify-content: center;
  width: 90%;
  align-items: center;
  border-radius:30px;
  border: 1px solid ${e=>e.theme.mainColor};
  background-color: ${e=>e.selected?e.theme.mainColor:"transparent"};
  font-size: 12px;
  color: ${e=>e.selected?e.theme.popupbackgroundColor:e.theme.formColor};
  height: 40px;
  text-align: center;
  padding: 3px;
  margin-top: 10px;
`,Kt=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${e=>e.theme.formColor};
  margin-bottom: 5px;
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 12px;
  font-size: 10px;

`);function Qt(e){var t;let{component:o,formData:n,handleChange:r,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;console.log(s),console.log(d);const[c,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===(t=n[o.key])||void 0===t?void 0:t.value)||""),h=(0,i.useRef)(null),g=e=>{x(e.label),p(!1),r(o.key,e)},m=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,v.jsxs)(Ut,{ref:h,index:l,children:[(0,v.jsx)(Pt,{children:o.label}),o.data.values.length>8?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(qt,{onClick:()=>p((e=>!e)),children:[u||a,(0,v.jsx)(Mt,{className:c?"up":"",children:"\u25bc"})]}),(0,v.jsx)(Wt,{isOpen:c,children:o.data.values.map(((e,t)=>(0,v.jsx)(Yt,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},t)))})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(Ht,{children:o.data.values.map(((e,t)=>(0,v.jsx)(Xt,{children:(0,v.jsx)(Vt,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,v.jsx)(Kt,{children:"This field is required"}):null)]});var f}const Jt=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 10px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(je().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,Gt=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,Zt=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,eo=n.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,to=n.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,oo=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function io(e){let{component:t,formData:o,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||"");return(0,v.jsxs)(Jt,{index:r,children:[(0,v.jsx)(Pt,{children:t.label}),t.values.map((e=>(0,v.jsxs)(Zt,{children:[(0,v.jsx)(eo,{onClick:()=>{(e=>{d(e),n(t.key,e)})(e)},children:(0,v.jsx)(to,{selected:s.label==e.label})}),(0,v.jsx)(Gt,{children:e.label})]}))),(c=a,c in l?(0,v.jsx)(oo,{children:"This field is required"}):null)]});var c}function no(e){let{formSchema:t,onPriceChange:o,basePrice:n,formData:r,setFormData:a,finalDiscount:l,formErrors:s}=e;(0,i.useEffect)((()=>{c(r)}),[r]);const d=(e,t)=>{a((o=>({...o,[e]:t})))},c=e=>{let i=parseFloat(n)||0,r=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const o=t.values.find((t=>t.label===e)),i=!isNaN(Number(o.value));o&&o.value&&i&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")&&(r-=parseFloat(o.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const o=t.data.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(o.value));o&&n&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?r-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}else if("radio"===t.type&&t.values){const o=t.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(o.value));o&&n&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?r-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}}));const a=i+r,l=a%1!==0?a.toFixed(2):a.toFixed(0);o(l)};return(0,v.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return console.log(e.key),(0,v.jsx)(Dt,{component:e,formData:r,handleChange:d,index:t,componentKey:e.key,formErrors:s});case"select":return console.log(e.key),(0,v.jsx)(Qt,{component:e,formData:r,handleChange:d,index:t,componentKey:e.key,formErrors:s});case"radio":return(0,v.jsx)(io,{component:e,formData:r,handleChange:d,index:t,componentKey:e.key,formErrors:s});default:return null}})(e,t)))})}var ro=o(42770),ao=o(73556),lo=(o(20965),o(16104));const so=o(34304);function co(e){var t,o,n,r,l,s,d,c,p,u,x,h,g,m,w;let{activePlate:$,setactivePlate:j,menu:C,plates:k,productPositions:A,categories:L,activeCategoryId:z,setSearchParams:S,searchParams:_}=e;const{restaurantName:T}=(0,b.g)(),P=window.location.hostname.split(".")[0],E="menugic"!==P&&"localhost"!==P&&"www"!==P?P:T,I=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[E]})),F=L.find((e=>e.id==z)),{response:N}=(0,lo.$)({productId:null===(t=k[$])||void 0===t?void 0:t.id});(0,i.useEffect)((()=>{var e;let t=null;var o,i;so.isEmpty(null===(e=k[$])||void 0===e?void 0:e.form_json)||(t=so.isEmpty(JSON.parse(null===(o=k[$])||void 0===o?void 0:o.form_json))?null===F||void 0===F?void 0:F.form_json:null===(i=k[$])||void 0===i?void 0:i.form_json);if(so.isEmpty(t))O({});else{var n;const e=JSON.parse(t);if(O(e),2===(null===e||void 0===e?void 0:e.version)&&(null===e||void 0===e||null===(n=e.sizes)||void 0===n?void 0:n.length)>0){var r;const t=parseFloat(null===(r=k[$])||void 0===r?void 0:r.en_price)||0,o=e.sizes.find((e=>"absolute"===e.priceMode&&Number(e.priceModifier)===t));G((()=>({...(0,ao.KE)(),sizeId:o?o.id:e.sizes[0].id})))}}}),[I.activeLanguage]),(0,i.useEffect)((()=>{var e;if(null!==(e=k[$])&&void 0!==e&&e.id&&null!==I&&void 0!==I&&I.id){var t,o;const e=(null===I||void 0===I||null===(t=I.branches)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.id)||null;(0,ge.trackItemView)(I.id,k[$].id,k[$].category_id,e)}}),[$,k,null===I||void 0===I?void 0:I.id]);const[B,O]=(0,i.useState)({}),[R,D]=(0,i.useState)(!1),[U,q]=(0,i.useState)(1),[M,W]=(0,i.useState)({x:0,y:0}),[Y,H]=(0,i.useState)(!1),X=(0,i.useRef)(null),V=(0,i.useRef)(null),K=e=>{e.stopPropagation(),q(1),W({x:0,y:0}),D(!0)},Q=()=>{D(!1)},[J,G]=(0,i.useState)({}),[Z,ee]=(0,i.useState)({}),te=(0,y.wA)(),[oe,ie]=(0,i.useState)(1),[ne,re]=(0,i.useState)(!1);let ae;ae=0===parseFloat(F.discount)?parseFloat(k[$].discount):parseFloat(F.discount);const le=(null===(o=k[$])||void 0===o?void 0:o.en_price)||"0",pe=le.includes(".")?parseFloat(le).toFixed(2):parseFloat(le).toFixed(0),[ue,fe]=(0,i.useState)(pe),[ve,be]=(0,i.useState)(""),ye=e=>{fe(e)},[we,$e]=(0,i.useState)(!0),[je,Ce]=(0,i.useState)(0),ke=450,Ae=(0,i.useRef)(!1);(0,i.useEffect)((()=>(document.body.style.overflow=we?"hidden":"auto",()=>{document.body.style.overflow="auto"})),[we]);const Se=e=>{if(e&&(e.preventDefault(),e.stopPropagation()),Ae.current)return;Ae.current=!0,j(null),$e(!1);const t=new URLSearchParams(_);t.delete("productId"),z&&!t.get("categoryId")&&t.set("categoryId",z),window.history.replaceState({},"",`?${t.toString()}`),S(t),setTimeout((()=>{document.body.style.overflow="auto",Ae.current=!1}),ke)},[Fe,Ye]=(0,i.useState)(!1),He=()=>{re(!0),Ce(je+1)},it=()=>{re(!0),Ce(je-1)},wt=(0,i.useRef)(null),$t=(0,i.useRef)(null),[jt,Ct]=(0,i.useState)(null);(0,i.useEffect)((()=>{const e=()=>{j(null);const e=new URLSearchParams(_);e.delete("productId"),z&&!e.get("categoryId")&&e.set("categoryId",z),S(e),$e(!1),setTimeout((()=>{document.body.style.overflow="auto"}),ke)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[z,_,S,j,ke]);const kt=2===(null===B||void 0===B?void 0:B.version)&&Array.isArray(null===B||void 0===B?void 0:B.sizes);const At=null!==I&&void 0!==I&&I.logoURL?(0,de.V)(I.logoURL):null;let Lt=[...null!==(n=null===(r=k[$])||void 0===r?void 0:r.images)&&void 0!==n?n:[]];0===Lt.length&&At&&(Lt=[{id:"fallback-logo",url:I.logoURL,isFallback:!0}]);const zt=Lt.findIndex((e=>{var t;return e.id===(null===(t=k[$])||void 0===t?void 0:t.new_cover_id)}));if(zt>0){const[e]=Lt.splice(zt,1);Lt.unshift(e)}const[St,_t]=(0,i.useState)({}),Pt=e=>{_t((t=>({...t,[e]:!0})))},Et="en"===(null===I||void 0===I?void 0:I.activeLanguage)?null===(l=k[$])||void 0===l?void 0:l.en_description:null===(s=k[$])||void 0===s?void 0:s.ar_description,It=Et?Et.replace(/<br\s*\/?>/gi,""):"",Ft=(0,me.Q)(null===I||void 0===I?void 0:I.currency);let Nt=JSON.parse(I.features);const Bt=Boolean(null===(d=k[$])||void 0===d?void 0:d.out_of_stock)||1===Number(null===(c=k[$])||void 0===c?void 0:c.out_of_stock),Ot=F?"en"===(null===I||void 0===I?void 0:I.activeLanguage)?F.en_category:F.ar_category:"",Dt=(null===I||void 0===I?void 0:I.product_details_carousel_style)||"normal";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Le,{CloseAnimation:we,onClick:Se}),(0,v.jsxs)(ze,{CloseAnimation:we,children:[(0,v.jsxs)(qe,{CloseAnimation:we,children:[(0,v.jsx)(We,{onClick:Se,CloseAnimation:we,children:(0,v.jsx)(Re,{})}),(0,v.jsx)(Me,{activeLanguage:null===I||void 0===I?void 0:I.activeLanguage,children:Ot}),(0,v.jsx)(pt,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),Ye(!0),setTimeout((()=>{Ye(!1)}),4e3)},CloseAnimation:we,children:Fe?(0,v.jsx)(Rt.RXm,{}):(0,v.jsx)(xe.zU_,{})})]}),(0,v.jsx)(_e,{squareDimension:null===(p=k[$])||void 0===p?void 0:p.square_dimension,CloseAnimation:we,children:1===Lt.length?(0,v.jsx)(Pe,{ref:wt,carouselIndex:0,children:(0,v.jsx)(Ee,{children:(0,v.jsxs)(Ie,{children:[!St[0]&&(0,v.jsx)(Be,{children:(0,v.jsx)(Ne,{})}),(0,v.jsx)(Oe,{src:null!==(u=Lt[0])&&void 0!==u&&u.url?(0,de.V)(Lt[0].url):At||"",onLoad:()=>Pt(0),onError:e=>{At&&e.target.src!==At&&(e.target.src=At)},CloseAnimation:we,Loaded:St[0],alt:"Image 0"}),(0,v.jsx)(gt,{onClick:K,children:(0,v.jsx)(f.gff,{})})]})})}):"normal"===Dt?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(De,{CloseAnimation:we,onClick:()=>{re(!0),0!==je&&it()}}),(0,v.jsx)(Ue,{CloseAnimation:we,onClick:()=>{re(!0),Lt.length>je+1&&He()}}),(0,v.jsx)(Pe,{carouselIndex:je,ref:wt,onTouchStart:e=>{Ct(e.touches[0].clientX)},onTouchMove:e=>{if(jt){const n=e.touches[0].clientX-jt;if(n>5)0!==je&&it();else if(n<-5){var t,o,i;(null!==(t=null===(o=k[$])||void 0===o||null===(i=o.images)||void 0===i?void 0:i.length)&&void 0!==t?t:0)>je+1&&He()}Ct(null)}},children:Lt.map(((e,t)=>(0,v.jsx)(Ee,{children:(0,v.jsxs)(Ie,{children:[!St[t]&&(0,v.jsx)(Be,{children:(0,v.jsx)(Ne,{})}),(0,v.jsx)(Oe,{src:St[t]||t===je?e.url?(0,de.V)(e.url):At||"":"",onLoad:()=>Pt(t),onError:e=>{At&&e.target.src!==At&&(e.target.src=At)},CloseAnimation:we,Loaded:St[t],alt:`Image ${t}`}),t===je&&(0,v.jsx)(gt,{onClick:K,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))})]}):"effect-cards"===Dt?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(De,{CloseAnimation:we,onClick:()=>{var e;re(!0),null===(e=$t.current)||void 0===e||e.slidePrev()}}),(0,v.jsx)(Te,{$closeAnimation:we,children:(0,v.jsx)(bt.RC,{onSwiper:e=>{$t.current=e},onSlideChange:e=>{Ce(e.realIndex),re(!0)},modules:[yt.ZD],effect:"cards",grabCursor:!0,className:"product-details-swiper",initialSlide:0,children:Lt.map(((e,t)=>(0,v.jsx)(bt.qr,{children:(0,v.jsxs)(Ie,{children:[!St[t]&&(0,v.jsx)(Be,{children:(0,v.jsx)(Ne,{})}),(0,v.jsx)(Oe,{$cardSlide:!0,src:St[t]||t===je?e.url?(0,de.V)(e.url):At||"":"",onLoad:()=>Pt(t),onError:e=>{At&&e.target.src!==At&&(e.target.src=At)},CloseAnimation:we,Loaded:St[t],alt:`Image ${t}`}),t===je&&(0,v.jsx)(gt,{onClick:K,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))},null===(x=k[$])||void 0===x?void 0:x.id)}),(0,v.jsx)(Ue,{CloseAnimation:we,onClick:()=>{var e;re(!0),null===(e=$t.current)||void 0===e||e.slideNext()}})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(Te,{$closeAnimation:we,$paginationFraction:!0,children:(0,v.jsx)(bt.RC,{onSwiper:e=>{$t.current=e},onSlideChange:e=>{Ce(e.realIndex),re(!0)},modules:[yt.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:Lt.map(((e,t)=>(0,v.jsx)(bt.qr,{children:(0,v.jsxs)(Ie,{children:[!St[t]&&(0,v.jsx)(Be,{children:(0,v.jsx)(Ne,{})}),(0,v.jsx)(Oe,{$cardSlide:!0,src:St[t]||t===je?e.url?(0,de.V)(e.url):At||"":"",onLoad:()=>Pt(t),onError:e=>{At&&e.target.src!==At&&(e.target.src=At)},CloseAnimation:we,Loaded:St[t],alt:`Image ${t}`}),t===je&&(0,v.jsx)(gt,{onClick:K,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))},null===(h=k[$])||void 0===h?void 0:h.id)})})}),1!==Lt.length&&(0,v.jsx)(Tt,{images:Lt,carouselIndex:je,CloseAnimation:we,carouselSwiped:ne}),(0,v.jsx)(Xe,{children:(0,v.jsx)(Ve,{children:(0,v.jsxs)(Ke,{CloseAnimation:we,activeLanguage:I.activeLanguage,children:[(0,v.jsxs)(Qe,{activeLanguage:I.activeLanguage,children:[(0,v.jsx)(Je,{activeLanguage:I.activeLanguage,children:"en"==I.activeLanguage?null===(g=k[$])||void 0===g?void 0:g.en_name:null===(m=k[$])||void 0===m?void 0:m.ar_name}),!so.isEmpty(null===(w=k[$])||void 0===w?void 0:w.en_price)&&(0,v.jsxs)(et,{children:[(0,v.jsx)(tt,{activeLanguage:I.activeLanguage,discounted:0!=ae,children:(0,se.T)(ue,Ft)}),0!=ae&&(0,v.jsx)(ot,{activeLanguage:I.activeLanguage,children:(0,se.T)(ue*(1-parseFloat(ae)/100),Ft)})]})]}),!so.isEmpty(It)&&(0,v.jsx)(Ge,{activeLanguage:I.activeLanguage,dangerouslySetInnerHTML:{__html:It}}),Bt&&(0,v.jsx)(Ze,{children:"en"===I.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),kt&&(0,v.jsx)(ro.A,{options:B,formData:J,setFormData:G,formErrors:Z,activeLanguage:I.activeLanguage,basePrice:pe,onPriceChange:ye}),!kt&&(null===B||void 0===B?void 0:B.components)&&(0,v.jsx)(no,{formSchema:B,onPriceChange:ye,formData:J,setFormData:G,basePrice:pe,formErrors:Z}),(0,v.jsxs)(ut,{activeLanguage:I.activeLanguage,children:[(0,v.jsx)(xt,{children:"en"==I.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,v.jsx)(ht,{activeLanguage:I.activeLanguage,onChange:e=>be(e.target.value),placeholder:"en"==I.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(null===Nt||void 0===Nt?void 0:Nt.cart)&&!Bt&&(0,v.jsxs)(nt,{CloseAnimation:we,children:[(0,v.jsxs)(lt,{CloseAnimation:we,children:[(0,v.jsx)(st,{onClick:()=>{ie(oe+1)},children:"+"}),(0,v.jsx)(ct,{children:oe}),(0,v.jsx)(dt,{onClick:()=>{oe>1&&ie(oe-1)},children:"-"})]}),(0,v.jsxs)(rt,{onClick:()=>{var e;if(kt){var t;const e={};if((null===(t=B.sizes)||void 0===t?void 0:t.length)>0&&(null===J||void 0===J||!J.sizeId)&&(e.size="Please select a size."),Object.keys(e).length>0)return void ee(e)}else if("{}"!==JSON.stringify(B)){const e=function(e,t){const o={},i=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in t&&0!==(null===(i=t[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(t[e])||(o[e]="This field is required.")})),o}(B,J);if(Object.keys(e).length>0)return void ee(e)}let o=ue*(1-parseFloat(ae)/100);if(Ae.current||(Ae.current=!0,$e(!1),j(null),setTimeout((()=>{document.body.style.overflow="auto",Ae.current=!1}),ke)),te((0,ce.bE)(E,k[$],oe,J,o,ve)),null!==I&&void 0!==I&&I.id&&null!==(e=k[$])&&void 0!==e&&e.id){var i,n;const e=(null===I||void 0===I||null===(i=I.branches)||void 0===i||null===(n=i[0])||void 0===n?void 0:n.id)||null;(0,ge.trackAddToCart)(I.id,k[$].id,k[$].category_id,oe,e)}he.oR.success("en"===(null===I||void 0===I?void 0:I.activeLanguage)?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629"),ie(1),ee({})},children:["en"==I.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",(0,v.jsx)(at,{children:(0,se.T)(oe*(ue*(1-parseFloat(ae)/100)),Ft)})]})]})]}),R&&(0,v.jsxs)(mt,{onClick:Q,onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY;V.current=Math.hypot(t,o)}else 1===e.touches.length&&(H(!0),X.current={x:e.touches[0].clientX,y:e.touches[0].clientY})},onTouchMove:e=>{if(2===e.touches.length&&V.current){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(t,o),n=i/V.current;q((e=>Math.min(Math.max(e*n,1),5))),V.current=i}else if(1===e.touches.length&&Y&&U>1){const t=e.touches[0],o=t.clientX-X.current.x,i=t.clientY-X.current.y;W((e=>({x:e.x+o/U,y:e.y+i/U}))),X.current={x:t.clientX,y:t.clientY}}},onTouchEnd:()=>{H(!1),V.current=null,X.current=null},children:[(0,v.jsx)(ft,{onClick:Q,children:(0,v.jsx)(a.$8F,{})}),(0,v.jsx)(vt,{src:(()=>{const e=Lt[je];return e&&e.url?(0,de.V)(e.url):At||""})(),alt:"Zoomed",$scale:U,$translateX:M.x,$translateY:M.y,$dragging:Y,onClick:e=>e.stopPropagation(),onDoubleClick:()=>{U>1?(q(1),W({x:0,y:0})):q(2.5)}})]})]})}var po=o(9328),uo=o(32415);const xo=o(34304);function ho(e){var t,n,r;let{menu:a,activeCategory:l,showPopup:s,searchText:d,carouselPosition:c,setcarouselPosition:p,setactiveCategory:u,categories:x,onAddToCart:h}=e;const[g,m]=(0,i.useState)(null),[f,w]=(0,$.ok)(),{restaurantName:j}=(0,b.g)(),M=window.location.hostname.split(".")[0],W="menugic"!==M&&"localhost"!==M&&"www"!==M?M:j,Y=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[W].activeLanguage})),H=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[W]})),X=(0,y.wA)(),[V,K]=(0,i.useState)((()=>new Set)),Q=(0,i.useCallback)((async()=>{const e=(0,ue.wU)(W);if(e)try{const{data:t}=await C.A.get(pe.Vb,{headers:{Authorization:`Bearer ${e}`}}),o=(Array.isArray(t)?t:[]).map((e=>e.id));K(new Set(o))}catch{K(new Set)}else K(new Set)}),[W]);(0,i.useEffect)((()=>{Q()}),[Q]),(0,i.useEffect)((()=>{const e=e=>{var t;null!==e&&void 0!==e&&null!==(t=e.detail)&&void 0!==t&&t.restaurantName&&e.detail.restaurantName!==W||Q()};return window.addEventListener("menugic-customer-auth",e),()=>window.removeEventListener("menugic-customer-auth",e)}),[W,Q]);const[J,G]=(0,i.useState)([]),[Z,ee]=(0,i.useState)([]),te=(0,i.useRef)(),oe=(0,i.useRef)(),ie=(0,ae.jE)(),ne=(0,i.useCallback)((e=>{e&&ie.prefetchQuery({queryKey:(0,le.Nb)(e),queryFn:()=>(0,le.oo)(e),staleTime:3e5})}),[ie]),re="all-items"===l,ge=l&&!re?String(l):null,fe=(null===H||void 0===H?void 0:H.all_items_style)||"grid",{data:ve,fetchNextPage:be,hasNextPage:we,isFetchingNextPage:$e}=(0,po.w)(ge),{data:je,fetchNextPage:Ce,hasNextPage:ke,isFetchingNextPage:Ae}=(0,uo.u)(re?null===H||void 0===H?void 0:H.id:null),Le=(null===je||void 0===je||null===(t=je.pages)||void 0===t?void 0:t.flat())||[],ze=()=>{const e=null===Z||void 0===Z?void 0:Z.map((e=>{if(e.current){var t;const o=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return{x:o.left,y:o.top,width:o.width}}return null}));G(e)};(0,i.useEffect)((()=>{ze()}),[Z]),(0,i.useEffect)((()=>{var e;if(a&&null!==l&&(null===ve||void 0===ve||null===(e=ve.pages)||void 0===e?void 0:e.flat().length)>0){var t,o;const e=null===ve||void 0===ve||null===(t=ve.pages)||void 0===t||null===(o=t.flat())||void 0===o?void 0:o.filter((e=>e["en"===Y?"en_name":"ar_name"].toLowerCase().includes(d.toLowerCase()))).map((()=>i.createRef()));ee(e)}}),[a,l,d,ve]),(0,i.useEffect)((()=>{const e=()=>{ze()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[Z]),(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&we&&!$e&&be()}),{threshold:.1});return te.current&&e.observe(te.current),()=>{te.current&&e.unobserve(te.current)}}),[we,$e,be]),(0,i.useEffect)((()=>{if(!re)return;let e,t;return t=setTimeout((()=>{e=new IntersectionObserver((e=>{e[0].isIntersecting&&ke&&!Ae&&Ce()}),{threshold:.2}),oe.current&&e.observe(oe.current)}),100),()=>{clearTimeout(t),e&&oe.current&&e.unobserve(oe.current)}}),[Ce,ke,re,Ae,Le]);const Se=(null===ve||void 0===ve||null===(n=ve.pages)||void 0===n||null===(r=n.flat())||void 0===r?void 0:r.filter((e=>!(Boolean(null===e||void 0===e?void 0:e.hide)||1===Number(null===e||void 0===e?void 0:e.hide))&&e["en"===Y?"en_name":"ar_name"].toLowerCase().includes(d.toLowerCase()))))||[],_e=i.useMemo((()=>{if(!re)return[];return(x||[]).filter((e=>!e.isAllItems)).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))).map((e=>{const t=Le.filter((t=>{if(Boolean(null===t||void 0===t?void 0:t.hide)||1===Number(null===t||void 0===t?void 0:t.hide))return!1;if(t.category_id!=e.id)return!1;const o=t["en"===Y?"en_name":"ar_name"]||"";return!d||function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase().includes(d.toLowerCase())}(o)})).sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0)));return{category:e,items:t}})).filter((e=>e.items.length>0))}),[Y,Le,x,re,d]);console.log(Se);const[Te,Pe]=(0,i.useState)(c),[Ee,Ie]=(0,i.useState)(!1),[Fe,Ne]=(0,i.useState)(x.length<4?3:4);(0,i.useRef)(0),(0,i.useRef)(0);return(0,i.useEffect)((()=>{Pe(x.findIndex((e=>e.id==l)))}),[l]),(0,i.useEffect)((()=>{re&&m(null)}),[re]),(0,i.useEffect)((()=>{f.get("productId")||m(null)}),[f]),(0,v.jsx)(k,{activeCategory:l,children:re?(0,v.jsxs)(L,{children:[_e.map((e=>(0,v.jsxs)(z,{children:[(0,v.jsx)(S,{activeLanguage:Y,children:"en"===Y?e.category.en_category:e.category.ar_category}),"list"===fe?(0,v.jsx)(E,{children:e.items.map(((e,t)=>{var i,n,r,a;const s=x.find((t=>t.id==e.category_id));let d;d=s&&0!==parseFloat(s.discount||0)?parseFloat(s.discount||0):parseFloat(e.discount||0);const c=0!==d?parseFloat(e.en_price)*(1-parseFloat(d)/100):parseFloat(e.en_price),p=(0,me.Q)(null===H||void 0===H?void 0:H.currency),u=null!==(i=null===(n=e.images)||void 0===n?void 0:n.findIndex((t=>t.id==e.new_cover_id)))&&void 0!==i?i:0,g=null===(r=e.images)||void 0===r||null===(a=r[u])||void 0===a?void 0:a.url,m=null!==H&&void 0!==H&&H.logoURL?(0,de.V)(H.logoURL):null,b=JSON.parse((null===H||void 0===H?void 0:H.features)||"{}"),y=Boolean(null===e||void 0===e?void 0:e.out_of_stock)||1===Number(null===e||void 0===e?void 0:e.out_of_stock),$=!xo.isEmpty(null===e||void 0===e?void 0:e.form_json)&&!xo.isEmpty(JSON.parse((null===e||void 0===e?void 0:e.form_json)||"{}")),j=!xo.isEmpty(null===s||void 0===s?void 0:s.form_json)&&!xo.isEmpty(JSON.parse((null===s||void 0===s?void 0:s.form_json)||"{}")),C=$||j,k=t=>{if(t.preventDefault(),t.stopPropagation(),null===b||void 0===b||!b.cart||y)return;if(C){const t=new URLSearchParams(f);return t.set("productId",e.id),t.set("categoryId","all-items"),w(t),window.history.pushState({},"",`?${t.toString()}`),void(document.body.style.overflow="hidden")}const i=parseFloat((null===e||void 0===e?void 0:e.en_price)||"0")*(1-parseFloat(d)/100);if(X((0,ce.bE)(W,e,1,{},i,"")),null!==H&&void 0!==H&&H.id&&null!==e&&void 0!==e&&e.id){var n,r;const{trackAddToCart:t}=o(81926),i="all-items"===l?e.category_id:l,a=(null===H||void 0===H||null===(n=H.branches)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.id)||null;t(H.id,e.id,i,1,a)}h&&t.currentTarget&&h(t.currentTarget),he.oR.success("en"===Y?"Added to cart":"\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629")};return(0,v.jsxs)(q,{children:[(0,v.jsxs)(I,{onClick:()=>{const t=new URLSearchParams(f);t.set("productId",e.id),t.set("categoryId","all-items"),w(t),window.history.pushState({},"",`?${t.toString()}`),document.body.style.overflow="hidden"},onMouseEnter:()=>ne(e.id),onTouchStart:()=>ne(e.id),style:{cursor:"pointer"},children:[(0,v.jsx)(F,{$isLogoFallback:!g,children:g?(0,v.jsx)("img",{src:(0,de.V)(g),alt:"en"===Y?e.en_name:e.ar_name,onError:e=>{m&&e.target.src!==m&&(e.target.src=m)}}):m?(0,v.jsx)("img",{src:m,alt:"en"===Y?e.en_name:e.ar_name}):null}),(0,v.jsxs)(N,{activeLanguage:Y,children:[(0,v.jsx)(B,{children:"en"===Y?e.en_name:e.ar_name}),e.en_price&&(0,v.jsxs)(O,{activeLanguage:Y,children:[0!==d&&(0,v.jsx)(R,{children:(0,se.T)(parseFloat(e.en_price),p)}),(0,v.jsx)("span",{children:(0,se.T)(c,p)})]})]})]}),(null===b||void 0===b?void 0:b.cart)&&(y?(0,v.jsx)(U,{activeLanguage:Y,children:"en"===Y?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}):(0,v.jsx)(D,{type:"button",onClick:k,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},onTouchEnd:e=>{e.preventDefault(),e.stopPropagation(),k(e)},activeLanguage:Y,title:"en"===Y?"Add to cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",children:(0,v.jsx)(xe._xK,{size:12})}))]},e.id)}))}):(0,v.jsx)(A,{children:e.items.map(((e,t)=>(0,v.jsx)(ye,{index:t,plate:e,activePlate:null,setactivePlate:m,showPopup:s,setSearchParams:w,searchParams:f,activeCategoryId:l,categories:x,disableDetails:!1,onAddToCart:h,wishlistIds:V,onWishlistChange:Q},e.id)))})]},e.category.id))),ke&&(0,v.jsx)("div",{ref:oe,style:{height:"40px"}}),Ae&&(0,v.jsx)(T,{children:(0,v.jsxs)(_,{children:[(0,v.jsx)(P,{}),"en"===Y?"Loading more...":"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f..."]})})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(A,{activePlate:g,children:[null===a||void 0===a?void 0:a.map(((e,t)=>{if(l==e.id)return(0,v.jsx)(v.Fragment,{children:Se.map(((e,t)=>(0,v.jsx)(ye,{index:t,plate:e,activePlate:g,setactivePlate:m,ref:Z[t],showPopup:s,setSearchParams:w,searchParams:f,activeCategoryId:l,categories:x,onAddToCart:h,wishlistIds:V,onWishlistChange:Q})))})})),(0,v.jsx)("div",{ref:te,style:{height:"20px"}})]}),null!==g&&!f.get("productId")&&g<Se.length&&(0,v.jsx)(co,{menu:null===a||void 0===a?void 0:a.find((e=>e.id===l)),activePlate:g,setactivePlate:m,plates:Se,productPositions:J,activeCategoryId:l,categories:x,setSearchParams:w,searchParams:f})]})})}var go=o(76143);const mo=n.Ay.div`
position: fixed;
bottom: ${e=>"location"==e.showPopup?"0%":"-100%"};
background-color: ${e=>e.theme.popupbackgroundColor};
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 50px;
border-top-left-radius: 50px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 5;
padding-bottom: 12vh;
`,fo=(n.Ay.span`
font-size: 26px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`,n.Ay.span`
font-size: 26px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.mainColor}

`),vo=n.Ay.span`
width: 90%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 8vh;
`,bo=n.Ay.div`
  margin-top: 24px;
width: 90%;
  display: flex;
  flex-direction: column;
`,yo=(n.Ay.div`
display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
  

`,n.Ay.a`
font-size:14px;
 font-weight: 620;
 color:${e=>e.theme.popupTextColor}

`,n.Ay.a`
font-size:14px;
 font-weight: 620;
 color:${e=>e.theme.popupTextColor};
 text-decoration: none;


`,(0,n.Ay)(r.meu)`
font-size: 22px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}
`,(0,n.Ay)(we.IW4)`
font-size: 22px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,n.Ay)(f.gwi)`
font-size: 22px;
opacity: 0.8;
color:${e=>e.theme.popupTextColor}

`,(0,n.Ay)(we.WQq)`
font-size: 18px;
position: absolute;
top: 22px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`),wo=n.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 13px;
font-weight: bold;

`,$o=n.Ay.div`
width: 90%;
margin-top: 10px;

`,jo=n.Ay.div`
margin-top: 8px;
display: flex;
flex-direction: row;
width: 90%;
align-items: center;
gap:8px;
`,Co=n.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 26px;
height: 26px;
border-radius: 50%;
cursor: pointer;
`,ko=(n.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 26px;
height: 26px;
border-radius: 50%;
cursor: pointer;

`,n.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 26px;
height: 26px;
border-radius: 50%;
cursor: pointer;
`),Ao=n.Ay.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${e=>e.theme.popupTextColor};;
width: 26px;
height: 26px;
border-radius: 50%;
cursor: pointer;
`,Lo=(0,n.Ay)(xe.ok6)`
font-size: 16px;
color: ${e=>e.theme.popupTextColor};
`,zo=((0,n.Ay)(we._8j)`
font-size: 16px;
color: ${e=>e.theme.popupTextColor};


`,(0,n.Ay)(xe.ao$)`
font-size: 16px;
color: ${e=>e.theme.popupTextColor};;

`),So=(0,n.Ay)(go.mk3)`
font-size: 16px;
color: ${e=>e.theme.popupTextColor};;

`,_o=n.Ay.pre`
  font-size: 12px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,To=n.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,Po=(0,n.Ay)(f.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 13px;
margin-left: 5px;
margin-right: 5px;

`,Eo=n.Ay.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 90%;
height: 44px;
gap:18px;
margin-top: 22px;
`,Io=n.Ay.button`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
background-color:${e=>e.theme.mainColor} ;
width:${e=>"Call"==e.activeButton?"80%":"50%"};
height: 100%;
border:0;
color: ${e=>e.theme.popupbackgroundColor};
border-radius: 10px;
font-size: 16px;
gap:10px;
position: relative;
&:focus{
  outline: none;
}
/* overflow: hidden; */
transition: all 0.2s ease-in-out;
`,Fo=n.i7`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,No=n.Ay.div`
position: absolute;
width:9%;
height: 50%;
background-color:${e=>"Call"==e.activeButton?e.theme.mainColor:e.theme.popupbackgroundColor} ;
 left: 0;
 z-index: 5;

 `,Bo=n.Ay.div`
position: absolute;
width:1px;
height: 100%;
background-color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 right: 0;
 animation: ${Fo} 0.5s ease-in-out infinite; /* Infinite animation */

 `,Oo=n.i7`
  0% {
opacity: 0;
left: -10%;
  }
  100% {
opacity: 1;
left: 16%;

  }

`,Ro=n.Ay.span`
position: absolute;
 left: 16%;
 color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
 animation: ${Oo} 0.5s ease-in-out;
 z-index: 4;

 `,Do=n.i7`
  0% {
    opacity: 0;
    rotate: calc(180deg);
  }
  1000% {
    opacity: 1;
    rotate: calc(0deg);

  }
 
`,Uo=(0,n.Ay)(we.pte)`
color:${e=>"Call"==e.activeButton?e.theme.popupbackgroundColor:e.theme.mainColor} ;
font-size: 13px;
position: absolute;
right: 5%;
animation: ${Do} 0.7s ease-in-out;

`,qo=n.i7`
  0% {
    max-height: 0px;
  }
  1000% {
    max-height: 300px;


  }
 
`,Mo=n.Ay.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  border-radius: 4px;
  /* overflow-y: auto; */
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 260px;
  background-color:${e=>e.theme.mainColor} ;
  color:${e=>e.theme.popupbackgroundColor};
  width: 100%;
  animation: ${qo} 1s ease-in-out;
  overflow: hidden;

`,Wo=n.Ay.li`
  cursor: pointer;
  transition: background 0.2s;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 15px;

`,Yo=n.Ay.button`
display: flex;
justify-content: center;
flex-direction: row;
gap:15px;
align-items: center;
flex-direction: row;
background-color:transparent ;
width:${e=>"Message"==e.activeButton?"80%":"50%"};
height: 100%;
border:1px solid ${e=>e.theme.mainColor} ;
color: ${e=>e.theme.popupTextColor};
border-radius: 10px;
font-size: 16px;
&:focus{
  outline: none;
};
position: relative;
`,Ho=n.Ay.span`
color: ${e=>e.theme.popupTextColor};
font-size: 16px;
font-weight: bold;

`,Xo=n.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`,Vo=n.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 44px;
`,Ko=n.Ay.div`
  display: flex;
  flex-direction: row;
  width: 13px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${e=>e.theme.mainColor};
`,Qo=(n.Ay.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${e=>e.theme.mainColor};
`,n.Ay.div`
  width: 4px;
  height: 4px;
  position: absolute;
  border-radius: 50%;
  background-color: ${e=>e.theme.popupbackgroundColor};
`,n.Ay.a`
 font-size:13px;
 font-weight: 300;
 flex: 1;
 color: ${e=>e.theme.popupTextColor};
 display: flex;
 align-items: center;
 margin-left: 20px;
 height: 100%;

 `),Jo=n.Ay.div`
 width: 13px;
 height: 40px;
 top: 22px;
 position: absolute;
 left: 0;
 display: flex;
 justify-content: center;
 `,Go=n.Ay.div`
 width: 2px;
 height: 100%;
 background-color: ${e=>e.theme.popupTextColor};
 opacity: 0.5;
 `;var Zo=o(72599),ei=o(67059);function ti(e){var t,o,n,a;let{restaurant:l,showPopup:s,popupHandler:d}=e;const{restaurantName:c}=(0,b.g)(),p=window.location.hostname.split(".")[0],u="menugic"!==p&&"localhost"!==p&&"www"!==p?p:c,x=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[u].activeLanguage})),[h,g]=(0,i.useState)("");return(0,i.useEffect)((()=>{const e=()=>{d(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,v.jsxs)(mo,{showPopup:s,children:[(0,v.jsx)(yo,{onClick:()=>{d(null)}}),(0,v.jsx)(vo,{children:(0,v.jsx)(fo,{children:(m=null===l||void 0===l?void 0:l.name,m.replace(/\b\w/g,(function(e){return e.toUpperCase()})))})}),(0,v.jsxs)(Eo,{children:[(0,v.jsx)(Io,{activeButton:h,onClick:()=>{g("Call"==h?"":"Call")},children:"Call"!==h?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Zo._Xz,{size:"25px"}),"en"==x?"Call Now":"\u0627\u062a\u0635\u0644 \u0627\u0644\u0627\u0646"]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Mo,{activeButton:h,children:null===l||void 0===l||null===(t=l.branches)||void 0===t?void 0:t.flatMap((e=>e.phone_number.split(" ").map(((t,o)=>(0,v.jsx)(Wo,{children:(0,v.jsxs)("a",{href:`tel:${t}`,style:{textDecoration:"none",color:"inherit"},children:[t,"  ",e.location&&(0,v.jsxs)("span",{children:["- ",e.name," "]})]})})))))}),(0,v.jsx)(No,{activeButton:h,children:(0,v.jsx)(Bo,{activeButton:h})}),(0,v.jsx)(Ro,{activeButton:h,children:"en"==x?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,v.jsx)(Uo,{activeButton:h})]})}),(0,v.jsx)(Yo,{activeButton:h,onClick:()=>{g("Message"==h?"":"Message")},children:"Message"!==h?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(xe.EcP,{size:"25px"}),"en"==x?"Message":"\u0631\u0633\u0627\u0644\u0629","            "]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Mo,{activeButton:h,children:null===l||void 0===l||null===(o=l.branches)||void 0===o?void 0:o.map((e=>(0,v.jsx)(Wo,{children:(0,v.jsxs)("a",{href:`https://wa.me/${(0,ei.JW)(null===e||void 0===e?void 0:e.whatsapp_number,null===l||void 0===l?void 0:l.country_code)}`,style:{textDecoration:"none",color:"inherit"},children:[null===e||void 0===e?void 0:e.whatsapp_number,"-",null===e||void 0===e?void 0:e.name]})})))}),(0,v.jsx)(No,{activeButton:h,children:(0,v.jsx)(Bo,{activeButton:h})}),(0,v.jsx)(Ro,{activeButton:h,children:"en"==x?"Choose Number":"\u0627\u062e\u062a\u0631 \u0631\u0642\u0645"}),(0,v.jsx)(Uo,{activeButton:h})]})})]}),(0,v.jsxs)(bo,{children:[(null===l||void 0===l||null===(n=l.branches)||void 0===n?void 0:n.name)&&(0,v.jsx)(Ho,{children:"Branches"}),(0,v.jsx)(Xo,{children:null===l||void 0===l||null===(a=l.branches)||void 0===a?void 0:a.map(((e,t)=>{var o;return e.name&&(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(Vo,{children:[t!==(null===l||void 0===l||null===(o=l.branches)||void 0===o?void 0:o.length)-1&&(0,v.jsx)(Jo,{index:t,children:(0,v.jsx)(Go,{})}),(0,v.jsx)(Ko,{children:(0,v.jsx)(r.sIY,{})}),(0,v.jsx)(Qo,{href:`https://${null===e||void 0===e?void 0:e.mapLink}`,children:e.location})]})})}))})]}),(0,v.jsx)($o,{children:(0,v.jsx)(wo,{children:"en"==x?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"})}),(0,v.jsxs)(jo,{children:[l.socialMedia.find((e=>"Instagram"==e.platform))&&(0,v.jsx)(Co,{href:`https://${l.socialMedia.find((e=>"Instagram"==e.platform)).link}`,children:(0,v.jsx)(zo,{})}),l.socialMedia.find((e=>"Facebook"==e.platform))&&(0,v.jsx)(Ao,{href:`https://${l.socialMedia.find((e=>"Facebook"==e.platform)).link}`,children:(0,v.jsx)(Lo,{})}),l.socialMedia.find((e=>"Tiktok"==e.platform))&&(0,v.jsx)(ko,{href:`https://${l.socialMedia.find((e=>"Tiktok"==e.platform)).link}`,children:(0,v.jsx)(So,{})})]}),(0,v.jsxs)(_o,{children:["Copyright",(0,v.jsx)(Po,{})," ",(new Date).getFullYear()," "," ",(0,v.jsx)(To,{href:"https://www.menugic.com",children:"menugic.com"})]})]});var m}const oi=n.Ay.div`
position: fixed;
bottom: 0;
left: 0;
right: 0;
min-height: 45vh;
max-height: 95vh;
overflow-y: auto;
background-color: ${e=>e.theme.popupbackgroundColor};
width: 100%;
transition: transform 0.8s ease-in-out;
transform: translateY(${e=>"cart"==e.showPopup?"0%":"100%"});
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 1500;
padding-bottom: 20px;
`,ii=((0,n.Ay)(we.WQq)`
font-size: 20px;
position: fixed;
top: 24px;
right: 24px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}
z-index: 20000;
pointer-events: auto;
background: transparent;
border: none;
padding: 4px;
line-height: 1;
width: 36px;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 18px;

&:hover {
  background: rgba(0, 0, 0, 0.05);
}

`,n.Ay.div`
width: 90%;
display: flex;
flex-direction: column;
`,n.Ay.div`
font-size: 25px;
font-weight:600;
margin-top:40px;
color: ${e=>e.theme.popupTextColor};

`,n.Ay.div`
height: 0.25px;
width: 100%;
background-color: ${e=>e.theme.popupTextColor};
opacity: 0.1;
margin-top:10px;

`,n.Ay.div`
max-height: 35vh;
width: 100%;
overflow: scroll;
margin-top: 20px;

`,n.Ay.div`
height: 35vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color:${e=>e.theme.popupTextColor};
font-size: 18px;
`);n.Ay.div`
width: 100%;
display: flex;
flex-direction: row;
height: 11vh;
margin-top: 1vh;
position: relative;

`,n.Ay.div`
flex: 1;
display: flex;
justify-content: center;
`,n.Ay.img`
width: 70%;
height: 100%;
object-fit: cover;
border-radius: 3px;
`,n.Ay.div`
flex: 1;
display: flex;
flex-direction: column;
gap:2px;
`,n.Ay.div`
flex: 1;
display: flex;
align-items: flex-end;
justify-content: flex-end;


`,n.Ay.div`
width: 50%;
display: flex;
flex-direction: row;
height: 20px;
background-color:${e=>e.theme.mainColor};
color:${e=>e.theme.popupbackgroundColor};
border-radius: 20px;
margin-right: 20px;
margin-bottom: 10px;

`,n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,n.Ay.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`,n.Ay.span`
font-size: 13px;
font-weight: 500;
color:${e=>e.theme.popupTextColor};

`,n.Ay.span`
color:${e=>e.theme.popupTextColor};
font-size: 13px;


`,n.Ay.span`
color:${e=>e.theme.popupTextColor};
font-size: 13px;
margin-top: 30px;


`,n.Ay.button`
outline: none;
border: 0;
cursor: pointer;
color: ${e=>e.theme.backgroundColor};
width: 100%;
margin-top: 10px;
background-color: ${e=>e.theme.mainColor};
border-radius: 20px;
padding-top: 8px;
padding-bottom: 8px;

`,(0,n.Ay)(f.pS_)`
font-size: 15px;
position: absolute;
top: 0px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`;var ni=o(29334),ri=o(50074);const ai=n.i7`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,li=n.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,si=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 380px;
  overflow-y: auto;
  padding-bottom: 12px;
  flex: 1;
  min-height: 0;
  padding-right: 4px;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
    border-radius: 4px;
  }
`,di=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  background: ${e=>e.theme.popupbackgroundColor||"#ffffff"};
  border-radius: 14px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  animation: ${ai} 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`,ci=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`,pi=n.Ay.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,ui=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`,xi=n.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,hi=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`,gi=n.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  white-space: nowrap;
`,mi=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}12`};
  padding: 3px 5px;
  border-radius: 20px;
`,fi=n.Ay.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  color: ${e=>e.theme.popupbackgroundColor||"#ffffff"};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  line-height: 1;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.9);
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,vi=n.Ay.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  min-width: 20px;
  text-align: center;
`,bi=n.Ay.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.45;
  transition: opacity 0.2s ease, color 0.2s ease, transform 0.2s ease;

  svg { font-size: 11px; }

  &:hover {
    opacity: 1;
    color: #e53935;
    transform: scale(1.15);
  }
  &:active {
    transform: scale(0.9);
  }
`,yi=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,wi="\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 2px 8px;\n  line-height: 1.5;\n  white-space: nowrap;\n",$i=n.Ay.span`
  ${wi}
  border: 1px solid ${e=>`${e.theme.popupTextColor||"#1a1a1a"}50`};
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  background: transparent;
`,ji=n.Ay.span`
  ${wi}
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}18`};
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}35`};
`,Ci=n.Ay.span`
  ${wi}
  background: transparent;
  color: ${e=>e.theme.popupTextColor||"#999"};
  border: 1px dashed ${e=>`${e.theme.popupTextColor||"#999"}40`};
  opacity: 0.65;
  text-decoration: line-through;
`,ki=n.Ay.div`
  font-size: 10px;
  font-style: italic;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ai=n.Ay.div`
  font-size: 10px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.75;
  line-height: 1.5;
`,Li=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}10`};
  border-radius: 12px;
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  margin-top: 4px;
`,zi=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Si=n.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#1a1a1a"};
  opacity: 0.75;
`,_i=n.Ay.div`
  font-size: 16px;
  font-weight: 800;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
`,Ti=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#999"};
  opacity: 0.6;
  text-align: center;
`,Pi=["Size:","\u0627\u0644\u062d\u062c\u0645:"],Ei=["Add ons:","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a:"],Ii=["Remove:","\u0628\u062f\u0648\u0646:"];function Fi(e){let{restaurant:t,activeLanguage:o}=e;const i=(0,y.wA)(),{restaurantName:n}=(0,b.g)(),r=window.location.hostname.split(".")[0],a="menugic"!==r&&"localhost"!==r&&"www"!==r?r:n,l=(0,y.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,t)=>e+t.price*t.quantity),0),d="ar"===o?"ar":"en",c=e=>{const t=(0,ri.qh)(e,d);if(!t.length)return null;const{sizeLabel:o,addonLabels:i,removalLabels:n,legacyLines:r}=function(e){const t={sizeLabel:null,addonLabels:[],removalLabels:[],legacyLines:[]};let o=null;for(const i of e)"heading"===i.type?o=Pi.includes(i.text)?"size":Ei.includes(i.text)?"addons":Ii.includes(i.text)?"removals":"legacy":"size"===o?t.sizeLabel=i.text:"addons"===o?t.addonLabels.push(i.text):"removals"===o?t.removalLabels.push(i.text):t.legacyLines.push(i.text);return t}(t),a=o||i.length||n.length;return(0,v.jsxs)(v.Fragment,{children:[a&&(0,v.jsxs)(yi,{children:[o&&(0,v.jsx)($i,{children:"ar"===d?`\u0627\u0644\u062d\u062c\u0645: ${o}`:`Size: ${o}`}),i.map((e=>(0,v.jsxs)(ji,{children:["+ ",e]},e))),n.map((e=>(0,v.jsx)(Ci,{children:e},e)))]}),r.map(((e,t)=>(0,v.jsx)(Ai,{children:e},t)))]})},p=(0,me.Q)(null===t||void 0===t?void 0:t.currency);if(0===l.length)return(0,v.jsx)(li,{children:(0,v.jsx)(Ti,{children:"ar"===d?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"})});const u=e=>{var t;const o=null===(t=e.images)||void 0===t?void 0:t[0];return o&&o.url?(0,de.V)(o.url):""};return(0,v.jsx)(li,{children:(0,v.jsxs)(si,{children:[l.map((e=>{const t="ar"===d?e.ar_name:e.en_name,o=(0,se.T)(e.price*e.quantity,p);return(0,v.jsx)(di,{children:(0,v.jsxs)(ci,{children:[(0,v.jsx)(pi,{src:u(e),alt:t}),(0,v.jsxs)(ui,{children:[(0,v.jsx)(xi,{title:t,children:t}),c(e),e.instruction&&(0,v.jsxs)(ki,{children:["\ud83d\udcdd ",e.instruction]})]}),(0,v.jsxs)(hi,{children:[(0,v.jsx)(gi,{children:o}),(0,v.jsxs)(mi,{children:[(0,v.jsx)(fi,{onClick:()=>{return t=e.uniqueId,void((o=e.quantity)>1&&i((0,ce.v)(a,t,o-1)));var t,o},disabled:e.quantity<=1,"aria-label":"decrease quantity",children:"\u2212"}),(0,v.jsx)(vi,{children:e.quantity}),(0,v.jsx)(fi,{onClick:()=>{return t=e.uniqueId,o=e.quantity,i((0,ce.v)(a,t,o+1));var t,o},"aria-label":"increase quantity",children:"+"})]}),(0,v.jsx)(bi,{onClick:()=>{return t=e.uniqueId,i((0,ce.dt)(a,t));var t},"aria-label":"remove item",children:(0,v.jsx)(xe.qbC,{})})]})]})},e.uniqueId)})),(0,v.jsx)(Li,{children:(0,v.jsxs)(zi,{children:[(0,v.jsx)(Si,{children:"ar"===d?"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a":"Total"}),(0,v.jsx)(_i,{children:(0,se.T)(s,p)})]})})]})})}var Ni=o(13491);const Bi=n.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`;n.Ay.div`
  padding: 14px 16px;
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border: 2px solid ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  font-size: 16px;
  transition: all 0.2s ease;

`,n.Ay.ul`
  position: absolute;
  top: 135%;
  left: 0;
  width: 100%;
  max-height: ${e=>e.isOpen?"200px":"0px"};
  overflow-y: auto;
  border-radius: 10px;
  border: none;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: all  0.2s ease-in-out ;
  z-index: 16;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
  background-color:${e=>e.theme.categoryUnActive||"#ffffff"}; 

`,n.Ay.li`
  height: 50px;
  cursor: pointer;
  padding-left: 7px;
  padding-right: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s;
  background-color: ${e=>e.branchName==e.selectedBranch?e.theme.categoryUnActive||"#ffffff":e.disable?"rgba(0, 0, 0, 0.08)":"transparent"};
  color: ${e=>e.branchName==e.selectedBranch?e.theme.popupTextColor||"#00112b":e.disable?"#999":e.theme.popupTextColor||"#00112b"};

`,n.Ay.span`

`,n.Ay.span`
  border: solid ${e=>e.theme.popupTextColor||"#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.open?"rotate(-135deg)":"rotate(45deg)"};
  margin-left: 10px;
  transition: transform 0.3s;

`;function Oi(e){let{deliveryType:t,branches:o,selectedBranch:i,setSelectedBranch:r,setErrors:a,errors:l}=e;const s=(0,n.DP)(),d=(o||[]).map((e=>({value:e.id,label:e.name,branch:e,isDisabled:!e.has_delivery&&"Delivery"===t}))),c={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(null!==l&&void 0!==l&&l.branch?"rgba(255, 68, 68, 0.1)":s.mainColor?`${s.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:s.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==l&&void 0!==l&&l.branch?"#ff4444":s.mainColor||s.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:s.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:s.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:s.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:s.categoryUnActive||"#ffffff",border:`1px solid ${s.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:t.isDisabled?"#999":s.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?s.categoryUnActive||"#ffffff":t.isFocused?s.popupbackgroundColor||"#f5f5f5":"transparent",cursor:t.isDisabled?"not-allowed":"pointer",display:"flex",justifyContent:"space-between"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,v.jsx)(Bi,{children:(0,v.jsx)(Ni.Ay,{value:d.find((e=>{var t;return(null===(t=e.branch)||void 0===t?void 0:t.id)===(null===i||void 0===i?void 0:i.id)})),onChange:e=>{e&&!e.isDisabled&&(r(e.branch),a({...l,branch:""}))},options:d,placeholder:"Select Branch",isOptionDisabled:e=>e.isDisabled,styles:c,formatOptionLabel:e=>(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,v.jsx)("span",{children:e.label}),e.isDisabled&&"Delivery"===t&&(0,v.jsx)("span",{style:{fontSize:12,color:"#999"},children:"No Delivery"})]}),menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})})}const Ri=n.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0;

`,Di=(n.Ay.div`
  padding: 14px 16px;
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border: 2px solid ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  font-size: 16px;
  transition: all 0.2s ease;

`,n.Ay.ul`
  position: absolute;
  top: 130%;
  left: 0;
  width: 100%;
  max-height: ${e=>e.isOpen?"220px":"0px"};
  overflow-y: auto;
  border-radius: 10px;
  border: none;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: all  0.2s ease-in-out ;
  z-index: 10;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
  background-color:${e=>e.theme.categoryUnActive||"#ffffff"}; 

`,n.Ay.li`
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  background-color: ${e=>e.regionName==e.selectedRegion?e.theme.categoryUnActive||"#ffffff":"transparent"};
  color: ${e=>(e.regionName,e.selectedRegion,e.theme.popupTextColor||"#00112b")};
  &:hover {
    background-color: ${e=>e.theme.popupbackgroundColor||"#ffffff"};
  }
`,n.Ay.span`
width: 90%;
`,n.Ay.span`
  border: solid ${e=>e.theme.popupTextColor||"#00112b"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.open?"rotate(-135deg)":"rotate(45deg)"};
  margin-left: 10px;
  transition: transform 0.3s;

`,n.Ay.div`
height: 70px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(0,0,0,0.2);
`),Ui=n.Ay.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`,qi=n.Ay.input`
width: 100%;
  padding-left: 10px;
  border-radius: 5px;
  height: 60%;
  background-color:${e=>e.theme.popupbackgroundColor}; ;
  color: ${e=>e.theme.mainColor};
  border: 0;
  
  &:focus{
    outline: none;
  }
  &::placeholder{
    color: ${e=>e.theme.mainColor};
    font-size: 13px;

  }
`,Mi=(0,n.Ay)(c.Xj1)`
  font-size: 17px;
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.mainColor};

`,Wi=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;n.Ay.div`
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`,n.Ay.div`
  border: 3px solid ${e=>e.theme.popupbackgroundColor};
  border-left-color:${e=>e.theme.popupTextColor};; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${Wi} 1s linear infinite; /* Apply animation */
`;var Yi=o(89993);function Hi(e){var t;let{selectedBranch:o,selectedRegion:r,onRegionChange:a,setErrors:l,errors:s,onRegionsChange:d}=e;const c=(0,n.DP)(),[p,u]=(0,i.useState)(!1),[x,h]=(0,i.useState)(""),{response:g,isLoading:m}=(0,Yi.w)({branch_id:o.id,onSuccess:()=>{}});(0,i.useEffect)((()=>{var e;m||d((null===g||void 0===g||null===(e=g.data)||void 0===e?void 0:e.regions)||[])}),[m,g,d]),(0,i.useEffect)((()=>{a("")}),[o,a]);const f=((null===g||void 0===g||null===(t=g.data)||void 0===t?void 0:t.regions)||[]).map((e=>({value:e.region_name,label:e.region_name}))),b=f.filter((e=>e.label.toLowerCase().includes(x.toLowerCase()))),y={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(null!==s&&void 0!==s&&s.region?"rgba(255, 68, 68, 0.1)":c.mainColor?`${c.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:c.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:null!==s&&void 0!==s&&s.region?"#ff4444":c.mainColor||c.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:c.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:c.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:c.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:c.categoryUnActive||"#ffffff",border:`1px solid ${c.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:c.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?c.categoryUnActive||"#ffffff":t.isFocused?c.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return!m&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Ri,{children:(0,v.jsx)(Ni.Ay,{value:f.find((e=>e.value===r)),onMenuOpen:()=>u(!0),onMenuClose:()=>u(!1),onChange:e=>{a((null===e||void 0===e?void 0:e.value)||""),h(""),l({...s,region:""})},options:b,placeholder:"Select Region",styles:y,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"})}),p&&(0,v.jsx)(Di,{children:(0,v.jsxs)(Ui,{children:[(0,v.jsx)(qi,{placeholder:"Search",value:x,onChange:e=>{h(e.target.value)}}),(0,v.jsx)(Mi,{})]})})]})}const Xi=n.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Vi=n.Ay.div`
  width: 100%;
  
  /* Override SelectWrapper width for BranchSelect and RegionSelect */
  > div[class*="SelectWrapper"],
  div[class*="SelectWrapper"] {
    width: 100% !important;
    max-width: 100% !important;
  }
  
  /* Enhance SelectWrapper styling */
  [class*="SelectWrapper"] {
    height: 44px !important;
    margin-top: 0 !important;
  }
  
  /* Enhance SelectedValue styling */
  [class*="SelectedValue"] {
    padding: 12px 14px !important;
    border-radius: 10px !important;
    border: 2px solid ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"} !important;
    background-color: ${e=>e.theme.categoryUnActive||"#ffffff"} !important;
    color: ${e=>e.theme.popupTextColor||"#00112b"} !important;
    font-size: 14px !important;
    transition: all 0.2s ease !important;
    
    &:hover {
      border-color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"} !important;
      box-shadow: 0 0 0 3px ${e=>e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.1)"} !important;
    }
  }
  
  /* Enhance OptionsList styling */
  [class*="OptionsList"] {
    border-radius: 10px !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) !important;
    border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"} !important;
  }
`,Ki=n.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,Qi=n.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,Ji=(n.Ay.select`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid
    ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 12px;
  padding-right: 36px;

  &:focus {
    box-shadow: 0 0 0 3px
      ${e=>e.hasError?"rgba(255, 68, 68, 0.1)":e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.1)"};
    border-color: ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
  }

  &:hover {
    border-color: ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
  }

  option {
    padding: 10px;
    background: ${e=>e.theme.categoryUnActive||"#ffffff"};
    color: ${e=>e.theme.popupTextColor||"#00112b"};
    font-size: 14px;
  }
`,n.Ay.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`);function Gi(e){var t,o;let{formData:i,updateFormData:r,restaurant:a,errors:l,setErrors:s}=e;const d=(0,n.DP)();let c={};try{c=JSON.parse((null===a||void 0===a?void 0:a.features)||"{}")}catch(x){c={}}const p=[c.delivery_order&&{value:"Delivery",label:"Delivery"},c.takeaway_order&&{value:"TakeAway",label:"Take Away"},c.dinein_order&&{value:"DineIn",label:"Dine In"}].filter(Boolean),u={control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(l.deliveryType?"rgba(255, 68, 68, 0.1)":d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:l.deliveryType?"#ff4444":d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?d.categoryUnActive||"#ffffff":t.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})};return(0,v.jsxs)(Xi,{children:[(0,v.jsx)(Ki,{children:"Select Order Type"}),(0,v.jsx)(Qi,{children:"Choose how you would like to receive your order"}),(0,v.jsxs)(Vi,{children:[(0,v.jsx)(Ni.Ay,{value:p.find((e=>e.value===i.deliveryType)),onChange:e=>{var t;r({deliveryType:(null===e||void 0===e?void 0:e.value)||"",selectedBranch:(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t[0])||null,selectedRegion:""}),s({})},options:p,placeholder:"Select Order Type",isSearchable:!1,styles:u,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed"}),l.deliveryType&&(0,v.jsx)(Ji,{children:l.deliveryType})]}),(null===a||void 0===a||null===(t=a.branches)||void 0===t?void 0:t.length)>0&&!(()=>{var e;return null===a||void 0===a||null===(e=a.branches)||void 0===e?void 0:e.some((e=>e.is_online))})()&&(0,v.jsxs)(Vi,{children:[(0,v.jsx)(Oi,{deliveryType:i.deliveryType,branches:null===a||void 0===a?void 0:a.branches,selectedBranch:i.selectedBranch,setSelectedBranch:e=>r({selectedBranch:e,selectedRegion:""}),setErrors:s,errors:l}),l.branch&&(0,v.jsx)(Ji,{children:l.branch})]}),i.selectedBranch&&"Delivery"===i.deliveryType&&Array.isArray(i.regions)&&i.regions.length>0&&(0,v.jsxs)(Vi,{children:[(0,v.jsx)(Hi,{selectedRegion:i.selectedRegion,onRegionChange:e=>r({selectedRegion:e}),selectedBranch:1===(null===a||void 0===a||null===(o=a.branches)||void 0===o?void 0:o.length)?null===a||void 0===a?void 0:a.branches[0]:i.selectedBranch,setErrors:s,errors:l,onRegionsChange:e=>r({regions:e})}),l.region&&(0,v.jsx)(Ji,{children:l.region})]})]})}var Zi=o(16106);const en=n.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,tn=n.Ay.button`
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid
    ${e=>"current"===e.variant?e.theme.mainColor||e.theme.maincolor||"#007bff":e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  background: ${e=>"current"===e.variant?e.theme.mainColor||e.theme.maincolor||"#007bff":e.theme.categoryUnActive||"#ffffff"};
  color: ${e=>"current"===e.variant?"#ffffff":e.theme.popupTextColor||"#00112b"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  outline: none;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px
      ${e=>"current"===e.variant?"rgba(0, 123, 255, 0.3)":"rgba(0, 0, 0, 0.1)"};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    font-size: 18px;
  }
`,on=n.Ay.div`
  padding: 16px;
  background: ${e=>e.theme.categoryUnActive||"#f8f9fa"};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,nn=n.Ay.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,rn=n.Ay.div`
  font-size: 14px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  word-break: break-all;
`,an=n.Ay.a`
  font-size: 14px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-decoration: none;
  font-weight: 600;
  margin-top: 4px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`,ln=n.Ay.div`
  color: #ff4444;
  font-size: 13px;
  margin-top: -8px;
`;function sn(e){let{onLocationSelect:t,selectedLocation:o,hasError:i,googleMapsApiKey:r,activeLanguage:a="en"}=e;const l=(0,n.DP)();return r?(0,v.jsx)(Zi.A,{apiKey:r,onLocationConfirm:t,selectedLocation:o,hasError:i,theme:l,activeLanguage:a}):(0,v.jsx)(dn,{onLocationSelect:t,selectedLocation:o,hasError:i})}function dn(e){let{onLocationSelect:t,selectedLocation:o,hasError:n}=e;const[r,a]=(0,i.useState)(!1),[l,s]=(0,i.useState)("");return(0,v.jsxs)(en,{children:[(0,v.jsxs)(tn,{type:"button",onClick:()=>{navigator.geolocation?(a(!0),s(""),navigator.geolocation.getCurrentPosition((e=>{const{latitude:o,longitude:i}=e.coords,n={latitude:o,longitude:i,address:`${o.toFixed(6)}, ${i.toFixed(6)}`};t(n),a(!1)}),(()=>{s("Unable to retrieve your location. Please try again."),a(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):s("Geolocation is not supported by your browser")},disabled:r,variant:"current",children:[(0,v.jsx)(xe.hO$,{}),r?"Getting Location...":"Use Current Location"]}),(0,v.jsxs)(tn,{type:"button",onClick:()=>{if(o){const e=`https://www.google.com/maps?q=${o.latitude},${o.longitude}`;window.open(e,"_blank")}else{const e="https://www.google.com/maps/search/?api=1";window.open(e,"_blank")}},variant:"select",children:[(0,v.jsx)(xe.vq8,{}),o?"View on Map":"Select on Map"]}),o&&(0,v.jsxs)(on,{children:[(0,v.jsx)(nn,{children:"Selected Location:"}),(0,v.jsx)(rn,{children:o.address||`${o.latitude}, ${o.longitude}`}),o.latitude&&o.longitude&&(0,v.jsx)(an,{href:`https://www.google.com/maps?q=${o.latitude},${o.longitude}`,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]}),l&&(0,v.jsx)(ln,{children:l}),n&&!o&&(0,v.jsx)(ln,{children:"Please select a location"})]})}const cn=n.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`,pn=n.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 8px;
`,un=n.Ay.p`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.8;
  margin-bottom: 8px;
`,xn=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 0;
  position: relative;
`,hn=n.Ay.label`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
`,gn=n.Ay.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  border: 2px solid
    ${e=>e.hasError?"#ff4444":e.theme.mainColor||"rgba(0, 0, 0, 0.1)"};
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
    box-shadow: 0 0 0 3px
      ${e=>e.hasError?"rgba(255, 68, 68, 0.1)":e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.1)"};
  }

  &::placeholder {
    color: ${e=>e.theme.popupTextColor||"#999"};
    opacity: 0.6;
  }
`,mn=n.Ay.textarea`
  width: 100%;
  min-width: 100%;
  min-height: 80px;
  height: ${e=>18*(e.rows||3)+24+4+"px"};
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.5;
  border: 2px solid
    ${e=>e.hasError?"#ff4444":e.theme.mainColor||"rgba(0, 0, 0, 0.1)"};
  background-color: ${e=>e.theme.categoryUnActive||"#ffffff"};
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  transition: all 0.2s ease;
  outline: none;
  resize: vertical;
  font-family: inherit;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: auto;

  &:focus {
    border-color: ${e=>e.hasError?"#ff4444":e.theme.mainColor||e.theme.maincolor||"#007bff"};
    box-shadow: 0 0 0 3px
      ${e=>e.hasError?"rgba(255, 68, 68, 0.1)":e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.1)"};
  }

  &::placeholder {
    color: ${e=>e.theme.popupTextColor||"#999"};
    opacity: 0.6;
  }

  /* Ensure visibility on Android/Samsung devices */
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    -webkit-appearance: textarea;
    display: block !important;
  }
`,fn=n.Ay.span`
  color: #ff4444;
  font-size: 12px;
  display: block;
`,vn=n.Ay.p`
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${e=>e.theme.popupTextColor||"#666"};
  opacity: 0.85;
`;function bn(e){let{formData:t,updateFormData:o,errors:r,restaurantName:a,restaurant:l,activeLanguage:s="en"}=e;const d=(0,n.DP)(),[c,p]=(0,i.useState)([]),[u,x]=(0,i.useState)(!1),h=(0,i.useRef)(!1),g=(e,t)=>"ar"===s?t:e,m=(0,i.useMemo)((()=>{try{return null!==l&&void 0!==l&&l.features?JSON.parse(l.features):{}}catch{return{}}}),[null===l||void 0===l?void 0:l.features]).google_maps_integrated&&(null===l||void 0===l?void 0:l.google_maps_api_key)||null,f=(0,i.useMemo)((()=>({control:(e,t)=>({...e,minHeight:44,borderRadius:10,borderColor:d.mainColor||d.maincolor||"#007bff",boxShadow:t.isFocused?"0 0 0 3px "+(d.mainColor?`${d.mainColor}20`:"rgba(0, 123, 255, 0.1)"):"none",backgroundColor:d.categoryUnActive||"#ffffff",cursor:"pointer","&:hover":{borderColor:d.mainColor||d.maincolor||"#007bff"}}),valueContainer:e=>({...e,padding:"0 10px"}),input:e=>({...e,margin:0,padding:0}),singleValue:e=>({...e,color:d.popupTextColor||"#00112b",fontSize:14}),placeholder:e=>({...e,color:d.popupTextColor||"#666",fontSize:14}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:d.popupTextColor||"#00112b",padding:6}),menu:e=>({...e,borderRadius:10,zIndex:2e3,backgroundColor:d.categoryUnActive||"#ffffff",border:`1px solid ${d.borderColor||"rgba(0, 0, 0, 0.1)"}`,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"}),option:(e,t)=>({...e,color:d.popupTextColor||"#00112b",fontSize:14,backgroundColor:t.isSelected?d.categoryUnActive||"#ffffff":t.isFocused?d.popupbackgroundColor||"#f5f5f5":"transparent"}),menuPortal:e=>({...e,zIndex:2e3})})),[d]),b=(0,i.useMemo)((()=>[{value:"__manual__",label:0===c.length?g("No saved addresses \u2014 type below","\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u2014 \u0627\u0643\u062a\u0628 \u0623\u062f\u0646\u0627\u0647"):g("Type address manually","\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u062f\u0648\u064a\u0627\u064b")},...c.map((e=>({value:String(e.id),label:`${e.label||g("Address","\u0639\u0646\u0648\u0627\u0646")}${e.is_default?` (${g("default","\u0627\u0641\u062a\u0631\u0627\u0636\u064a")})`:""} \u2014 ${e.full_address.length>56?`${e.full_address.slice(0,56)}\u2026`:e.full_address}`})))]),[c,s]),y=(0,i.useMemo)((()=>{if(null==t.selectedAddressId)return b[0]||null;const e=String(t.selectedAddressId);return b.find((t=>t.value===e))||b[0]||null}),[b,t.selectedAddressId]);(0,i.useEffect)((()=>{if("Delivery"!==t.deliveryType||!a)return void p([]);const e=(0,ue.wU)(a);if(!e)return void p([]);let o=!1;return x(!0),C.A.get(pe.Qf,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{let{data:t}=e;o||p(t.addresses||[])})).catch((()=>{o||p([])})).finally((()=>{o||x(!1)})),()=>{o=!0}}),[t.deliveryType,a]),(0,i.useEffect)((()=>{"Delivery"!==t.deliveryType&&(h.current=!1)}),[t.deliveryType]),(0,i.useEffect)((()=>{if("Delivery"!==t.deliveryType)return;if(!c.length||h.current)return;const e=c.find((e=>e.is_default));e&&!String(t.fullAddress||"").trim()&&(h.current=!0,o({selectedAddressId:e.id,fullAddress:e.full_address}))}),[c,t.deliveryType,t.fullAddress,o]);const w=e=>{const{name:t,value:i}=e.target;o("fullAddress"!==t?{[t]:i}:{[t]:i,selectedAddressId:null})};return(0,v.jsxs)(cn,{children:[(0,v.jsx)(pn,{children:g("Your Information","\u0628\u064a\u0627\u0646\u0627\u062a\u0643")}),(0,v.jsx)(un,{children:g("Please provide your contact details to complete the order","\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628")}),(0,v.jsxs)(xn,{children:[(0,v.jsx)(hn,{children:g("Full Name *","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,v.jsx)(gn,{type:"text",name:"fullName",value:t.fullName,onChange:w,placeholder:g("Enter your full name","\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644"),hasError:!!r.fullName}),r.fullName&&(0,v.jsx)(fn,{children:r.fullName})]}),(0,v.jsxs)(xn,{children:[(0,v.jsx)(hn,{children:g("Phone Number *","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 *")}),(0,v.jsx)(gn,{type:"tel",name:"phoneNumber",value:t.phoneNumber,onChange:w,placeholder:g("Enter your phone number","\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643"),hasError:!!r.phoneNumber}),r.phoneNumber&&(0,v.jsx)(fn,{children:r.phoneNumber})]}),"Delivery"===t.deliveryType&&(0,v.jsxs)(v.Fragment,{children:[(0,ue.wU)(a)&&(0,v.jsxs)(xn,{children:[(0,v.jsxs)(hn,{children:[g("Saved address","\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0641\u0648\u0638"),u?` (${g("loading\u2026","\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026")})`:""]}),(0,v.jsx)(Vi,{children:(0,v.jsx)(Ni.Ay,{value:y,onChange:e=>{if(!e||"__manual__"===e.value)return void o({selectedAddressId:null});const t=parseInt(e.value,10),i=c.find((e=>e.id===t));i&&o({selectedAddressId:t,fullAddress:i.full_address})},options:b,isSearchable:!1,isDisabled:u,styles:f,menuPortalTarget:"undefined"!==typeof document?document.body:null,menuPosition:"fixed",isRtl:"ar"===s})}),(0,v.jsx)(vn,{children:g("Add or edit addresses from the account menu (person icon) \u2192 Addresses.","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062d\u0633\u0627\u0628 (\u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0634\u062e\u0635) \u2190 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646.")})]}),m&&(0,v.jsxs)(xn,{children:[(0,v.jsx)(hn,{children:g("Delivery Location *","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 *")}),(0,v.jsx)(sn,{onLocationSelect:e=>{o({selectedLocation:e,fullAddress:e.address||`${e.latitude}, ${e.longitude}`})},selectedLocation:t.selectedLocation,hasError:!!r.fullAddress&&!t.selectedLocation,googleMapsApiKey:m,activeLanguage:s})]}),(0,v.jsxs)(xn,{children:[(0,v.jsx)(hn,{children:g("Full Address *","\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 *")}),(0,v.jsx)(mn,{name:"fullAddress",value:t.fullAddress,onChange:w,placeholder:g("Enter your delivery address","\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),hasError:!!r.fullAddress,rows:"3"}),r.fullAddress&&(0,v.jsx)(fn,{children:r.fullAddress})]})]}),"DineIn"===t.deliveryType&&(0,v.jsxs)(xn,{children:[(0,v.jsx)(hn,{children:g("Table Number *","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629 *")}),(0,v.jsx)(gn,{type:"number",name:"tableNumber",value:t.tableNumber,onChange:w,placeholder:g("Enter table number","\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629"),hasError:!!r.tableNumber}),r.tableNumber&&(0,v.jsx)(fn,{children:r.tableNumber})]}),(0,v.jsxs)(xn,{children:[(0,v.jsx)(hn,{children:g("Special Notes (Optional)","\u0645\u0644\u0627\u062d\u0638\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}),(0,v.jsx)(mn,{name:"note",value:t.note,onChange:w,placeholder:g("Any special instructions or notes\u2026","\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u2026"),rows:"3"})]})]})}const yn=n.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 440px;
  overflow-y: auto;
  padding-right: 5px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${e=>e.theme.categoryUnActive||"#f5f5f5"};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
    border-radius: 3px;
  }
`,wn=n.Ay.div`
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,$n=n.Ay.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 12px;
`,jn=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  gap: 12px;
`,Cn=n.Ay.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.popupTextColor||"#666"};
  flex: 1;
`,kn=n.Ay.div`
  font-size: 13px;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  text-align: right;
  flex: 1;
  word-break: break-word;
`,An=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,Ln=n.Ay.div`
  padding: 8px 0;
`,zn=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,Sn=n.Ay.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`,_n=n.Ay.div`
  height: 1px;
  background: ${e=>e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};
  margin: 12px 0;
`,Tn=n.Ay.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  text-align: right;
`;function Pn(e){let{formData:t,restaurant:o,activeLanguage:i}=e;const{restaurantName:n}=(0,b.g)(),r=window.location.hostname.split(".")[0],a="menugic"!==r&&"localhost"!==r&&"www"!==r?r:n,l=(0,y.d4)((e=>e.cart[a]||[])),s=l.reduce(((e,t)=>e+t.price*t.quantity),0),d=(0,me.Q)(null===o||void 0===o?void 0:o.currency);return(0,v.jsxs)(yn,{children:[(0,v.jsx)($n,{children:"Review Your Order"}),(0,v.jsxs)(wn,{children:[(0,v.jsx)($n,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Items"}),(0,v.jsx)(An,{children:l.map((e=>{var t,o;return(0,v.jsx)(Ln,{children:(0,v.jsxs)(zn,{children:[(0,v.jsx)(Sn,{src:(0,de.V)(null===(t=e.images)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.url),alt:"en"===i?e.en_name:e.ar_name}),(0,v.jsxs)(kn,{style:{flex:2},children:[e.quantity,"x"," ",(0,v.jsx)("strong",{children:"en"===i?e.en_name:e.ar_name})]}),(0,v.jsx)(kn,{children:(0,se.T)(e.price*e.quantity,d)})]})},e.uniqueId)}))}),(0,v.jsx)(_n,{}),(0,v.jsxs)(jn,{children:[(0,v.jsx)(Cn,{children:"Total:"}),(0,v.jsx)(Tn,{children:(0,se.T)(s,d)})]})]}),(0,v.jsxs)(wn,{children:[(0,v.jsx)($n,{style:{fontSize:"18px",marginBottom:"15px"},children:"Order Details"}),(0,v.jsxs)(jn,{children:[(0,v.jsx)(Cn,{children:"Order Type:"}),(0,v.jsx)(kn,{children:t.deliveryType})]}),t.selectedBranch&&(0,v.jsxs)(jn,{children:[(0,v.jsx)(Cn,{children:"Branch:"}),(0,v.jsx)(kn,{children:t.selectedBranch.name})]}),t.selectedRegion&&(0,v.jsxs)(jn,{children:[(0,v.jsx)(Cn,{children:"Region:"}),(0,v.jsx)(kn,{children:t.selectedRegion})]})]}),(0,v.jsxs)(wn,{children:[(0,v.jsx)($n,{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact Information"}),(0,v.jsxs)(jn,{children:[(0,v.jsx)(Cn,{children:"Name:"}),(0,v.jsx)(kn,{children:t.fullName})]}),(0,v.jsxs)(jn,{children:[(0,v.jsx)(Cn,{children:"Phone:"}),(0,v.jsx)(kn,{children:t.phoneNumber})]}),"Delivery"===t.deliveryType&&t.fullAddress&&(0,v.jsxs)(jn,{children:[(0,v.jsx)(Cn,{children:"Address:"}),(0,v.jsx)(kn,{children:t.fullAddress})]}),"DineIn"===t.deliveryType&&t.tableNumber&&(0,v.jsxs)(jn,{children:[(0,v.jsx)(Cn,{children:"Table Number:"}),(0,v.jsx)(kn,{children:t.tableNumber})]}),t.note&&(0,v.jsxs)(jn,{children:[(0,v.jsx)(Cn,{children:"Notes:"}),(0,v.jsx)(kn,{children:t.note})]})]})]})}const En=n.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  min-height: 60vh;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
      margin-bottom: 50px;
`,In=n.Ay.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#00112b"};
  margin-bottom: 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`,Fn=n.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
      margin-top: 24px;
`,Nn=(0,n.Ay)(In)`
  margin-bottom: 0;
  flex: 1;
`,Bn=n.Ay.button`
  border: none;
  background: transparent;
  color: ${e=>e.theme.mainColor||"#00112b"};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 3px 6px;
  line-height: 1;
  border-radius: 8px;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`,On=n.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${e=>e.theme.mainColor||"rgba(0, 0, 0, 0.1)"};
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`,Rn=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  z-index: 1;
  
  span {
    font-size: 11px;
    color: ${e=>e.active?e.theme.mainColor||e.theme.maincolor||"#007bff":"#999"};
    margin-top: 6px;
    font-weight: ${e=>e.active?"600":"400"};
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 9px;
    }
  }
`,Dn=n.Ay.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  background: ${e=>e.completed||e.active?e.theme.mainColor||e.theme.maincolor||"#007bff":e.theme.categoryUnActive||"#e0e0e0"};
  color: ${e=>e.completed||e.active?"#ffffff":"#999"};
  border: 2px solid
    ${e=>e.active||e.completed?e.theme.mainColor||e.theme.maincolor||"#007bff":"transparent"};
  transition: all 0.3s ease;
  box-shadow: ${e=>e.active||e.completed?"0 4px 12px rgba(0, 123, 255, 0.3)":"none"};
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
`,Un=n.Ay.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  min-height: 260px;
  overflow-y: auto;
  max-height: calc(85vh - 230px);
  
  @media (max-width: 768px) {
    padding: 12px 0;
    min-height: 220px;
    max-height: calc(85vh - 200px);
  }
`,qn=n.Ay.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 16px;
  position: sticky;
  bottom: 0;
  background: ${e=>e.theme.popupbackgroundColor||"#ffffff"};
  z-index: 10;
  
  @media (max-width: 768px) {
    padding-top: 12px;
  }
`,Mn=n.Ay.button`
  flex: ${e=>"primary"===e.variant?"1.5":"1"};
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  ${e=>"primary"===e.variant?`\n    background: ${e.theme.mainColor||e.theme.maincolor||"#007bff"};\n    color: white;\n    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);\n    \n    &:hover:not(:disabled) {\n      transform: translateY(-2px);\n      box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);\n    }\n    \n    &:active:not(:disabled) {\n      transform: translateY(0);\n    }\n    \n    &:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n  `:`\n    background: ${e.theme.categoryUnActive||"#f5f5f5"};\n    color: ${e.theme.textColor||"#333"};\n    border: 1px solid ${e.theme.borderColor||"rgba(0, 0, 0, 0.1)"};\n    \n    &:hover {\n      background: ${e.theme.categoryUnActive||"#e0e0e0"};\n      transform: translateY(-1px);\n    }\n    \n    &:active {\n      background: ${e.theme.categoryUnActive||"#f5f5f5"};\n      color: ${e.theme.textColor||"#333"};\n      transform: translateY(0);\n    }\n  `}
  
  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 13px;
  }
`,Wn=[{id:"cart",label:"Cart",number:1},{id:"orderType",label:"Order Type",number:2},{id:"details",label:"Details",number:3},{id:"review",label:"Review",number:4}];function Yn(e){var t;let{popupHandler:o,restaurant:n}=e;const{restaurantName:r}=(0,b.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:r,s=(0,y.d4)((e=>e.cart[l]||[])),d=(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[l])||void 0===o?void 0:o.activeLanguage)||"en"})),c=(0,y.wA)(),[p,u]=(0,i.useState)(0),[x,h]=(0,i.useState)({deliveryType:"",selectedBranch:(null===n||void 0===n||null===(t=n.branches)||void 0===t?void 0:t[0])||null,selectedRegion:"",regions:[],fullName:"",phoneNumber:"",fullAddress:"",selectedAddressId:null,selectedLocation:null,tableNumber:"",note:""}),[g,m]=(0,i.useState)({}),{handleApiCallAsync:f,isPending:w}=(0,ni.h)({onSuccess:()=>{}});(0,i.useEffect)((()=>{(async()=>{const e=(0,ue.wU)(l);if(e)try{const{data:t}=await C.A.get(pe.EY,{headers:{Authorization:`Bearer ${e}`}});h((e=>({...e,fullName:t.full_name||e.fullName,phoneNumber:t.phone_number||e.phoneNumber})))}catch{}})()}),[l]),(0,i.useEffect)((()=>{if(null!==n&&void 0!==n&&n.features){const e=JSON.parse(n.features),t=Object.entries(e).filter((e=>{let[t,o]=e;return!0===o})).map((e=>{let[t]=e;return"delivery_order"===t?"Delivery":"takeaway_order"===t?"TakeAway":"dinein_order"===t?"DineIn":null})).filter(Boolean);1===t.length&&h((e=>({...e,deliveryType:t[0]})))}}),[n]);const $=e=>{h((t=>({...t,...e})));const t=Object.keys(e);m((e=>{const o={...e};return t.forEach((e=>{o[e]&&delete o[e]})),o}))},j=e=>{const t={};if(1===e){var o;if(x.deliveryType||(t.deliveryType="Order Type is required."),!x.selectedBranch&&(null===n||void 0===n||null===(o=n.branches)||void 0===o?void 0:o.length)>0){var i;(null===n||void 0===n||null===(i=n.branches)||void 0===i?void 0:i.some((e=>e.is_online)))||(t.branch="Branch is required.")}"Delivery"===x.deliveryType&&x.selectedBranch&&Array.isArray(x.regions)&&x.regions.length>0&&!x.selectedRegion&&(t.region="Region is required.")}else 2===e&&(x.fullName||(t.fullName="Full Name is required."),x.phoneNumber||(t.phoneNumber="Phone Number is required."),"Delivery"!==x.deliveryType||x.fullAddress||(t.fullAddress="Full Address is required for delivery."),"DineIn"!==x.deliveryType||x.tableNumber||(t.tableNumber="Table Number is required."));return m(t),0===Object.keys(t).length};return(0,v.jsxs)(En,{children:[(0,v.jsxs)(Fn,{children:[(0,v.jsx)(Nn,{children:Wn[p].label}),(0,v.jsx)(Bn,{onClick:()=>o(null),"aria-label":"Close cart",children:"\u2715"})]}),(0,v.jsx)(On,{children:Wn.map(((e,t)=>(0,v.jsxs)(Rn,{active:t<=p,children:[(0,v.jsx)(Dn,{active:t<=p,completed:t<p,children:t<p?"\u2713":e.number}),(0,v.jsx)("span",{children:e.label})]},e.id)))}),(0,v.jsx)(Un,{children:(()=>{switch(p){case 0:return(0,v.jsx)(Fi,{formData:x,updateFormData:$,restaurant:n,activeLanguage:d});case 1:return(0,v.jsx)(Gi,{formData:x,updateFormData:$,restaurant:n,errors:g,setErrors:m});case 2:return(0,v.jsx)(bn,{formData:x,updateFormData:$,restaurant:n,errors:g,restaurantName:l,activeLanguage:d});case 3:return(0,v.jsx)(Pn,{formData:x,restaurant:n,activeLanguage:d});default:return null}})()}),(0,v.jsxs)(qn,{children:[p>0&&(0,v.jsx)(Mn,{onClick:()=>{p>0&&u(p-1)},variant:"secondary",children:"Back"}),p<Wn.length-1?(0,v.jsx)(Mn,{onClick:()=>{if(j(p)){if(0===p&&null!==n&&void 0!==n&&n.id){var e;const t=(null===(e=x.selectedBranch)||void 0===e?void 0:e.id)||null;(0,ge.trackCheckoutStart)(n.id,t,x.deliveryType||null)}p<Wn.length-1&&u(p+1)}},variant:"primary",children:"Next"}):(0,v.jsx)(Mn,{onClick:async()=>{var e,t,i,r;if(!j(2))return;const a=(0,me.Q)(null===n||void 0===n?void 0:n.currency);let p=0,u="";u+=`*New Order - ${x.deliveryType}*\n`,u+="--------------------\n\n",u+="*Items:*\n",s.forEach(((e,t)=>{const o=("ar"===d?e.ar_name:e.en_name||"").trim(),i=("ar"===d?e.category.ar_category:e.category.en_category||"").trim(),n=e.price*e.quantity;p+=n,u+=`${t+1}. *${o}*\n`,u+=`    ${i}\n`,u+=`    ${e.quantity}x ${e.price} ${a} = *${n} ${a}*\n`,e.formData&&(u+=(0,ri.Ve)(e,"ar"===d?"ar":"en")),e.instruction&&(u+=`    > _${e.instruction}_\n`),u+="\n"})),u+="--------------------\n",u+=`*Total: ${(0,se.T)(p,a)}*\n\n`,u+="*Customer:*\n",u+=`- ${x.fullName}\n`,u+=`- ${x.phoneNumber}\n`,x.selectedRegion&&(u+=`- Region: ${x.selectedRegion}\n`);let h="";"Delivery"===x.deliveryType&&(u+="\n*Delivery Address:*\n",u+=`${x.fullAddress}\n`,x.selectedLocation&&(h=`https://www.google.com/maps?q=${x.selectedLocation.latitude},${x.selectedLocation.longitude}`)),"DineIn"===x.deliveryType&&(u+=`- Table: #${x.tableNumber}\n`),x.note&&(u+=`\n*Note:* _${x.note}_\n`),h&&(u+=`\n${h}\n`);const g=null!==(e=x.selectedBranch)&&void 0!==e&&e.whatsapp_number?(0,ei.JW)(x.selectedBranch.whatsapp_number,null===n||void 0===n?void 0:n.country_code):n.phone_number,m=[...s.map((e=>{var t;return{id:e.id,quantity:e.quantity,branch_id:null===(t=x.selectedBranch)||void 0===t?void 0:t.id,restaurant_id:n.id}}))],v=[...s.map((e=>({product_id:e.id,product_name:"en"===d?e.en_name:e.ar_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];f({products:m,restaurant_id:n.id,branch_id:null===(t=x.selectedBranch)||void 0===t?void 0:t.id,delivery_type:x.deliveryType,customer_name:x.fullName,customer_phone:x.phoneNumber,customer_address:"Delivery"===x.deliveryType?x.fullAddress:null,customer_latitude:(null===(i=x.selectedLocation)||void 0===i?void 0:i.latitude)||null,customer_longitude:(null===(r=x.selectedLocation)||void 0===r?void 0:r.longitude)||null,table_number:"DineIn"===x.deliveryType?x.tableNumber:null,note:x.note,items:v,subtotal:p,total:p,currency:n.currency},l).then((e=>{if(null!==n&&void 0!==n&&n.id){var t,o,i;const r=(null===(t=x.selectedBranch)||void 0===t?void 0:t.id)||null;(0,ge.trackOrderPlaced)(n.id,(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(i=o.order)||void 0===i?void 0:i.id)||null,x.deliveryType,p,r,{items:v,customerName:x.fullName})}})).catch((e=>console.error("Order creation failed:",e))),(0,ei.JT)(g,u),c((0,ce.sX)(l)),o(null)},variant:"primary",disabled:w,children:w?"Submitting...":"Submit Order"})]})]})}function Hn(e){let{restaurant:t,showPopup:o,popupHandler:n=(()=>{})}=e;const{restaurantName:r}=(0,b.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:r,s=(0,y.d4)((e=>e.cart[l]||[])),d=(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[l])||void 0===o?void 0:o.activeLanguage)||"en"})),c=0===s.length;(0,i.useEffect)((()=>{const e=()=>{n(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);return(0,v.jsx)(oi,{showPopup:o,children:c?(0,v.jsx)(ii,{children:"en"===d?"Your cart is empty":"\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0641\u0627\u0631\u063a\u0629"}):(0,v.jsx)(Yn,{popupHandler:n,restaurant:t})})}const Xn=n.Ay.div`
  position: ${e=>e.isPage?"relative":"fixed"};
  bottom: ${e=>e.isPage?"auto":"feedback"===e.showPopup?"0%":"-100%"};
  left: ${e=>e.isPage?"auto":"0"};
  right: ${e=>e.isPage?"auto":"0"};
  min-height: ${e=>e.isPage?"100vh":"70vh"};
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupbackgroundColor)||"#ffffff"}};
  width: 100%;
  transition: ${e=>e.isPage?"none":"all 0.8s ease-in-out"};
  border-top-right-radius: ${e=>e.isPage?"0":"60px"};
  border-top-left-radius: ${e=>e.isPage?"0":"60px"};
  box-shadow: ${e=>e.isPage?"none":"0 -4px 10px rgba(0, 0, 0, 0.2)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1500;
  padding: ${e=>e.isPage?"24px 16px":"16px"};
  padding-bottom: 20px;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: ${e=>e.isPage?"20px 14px":"14px"};
    padding-bottom: 20px;
  }
`,Vn=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;margin-top: 20px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,Kn=(0,n.Ay)(we.WQq)`
  font-size: 20px;
  cursor: pointer;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupTextColor)||"#333333"}};
  flex-shrink: 0;
  background: transparent;
  border: none;
  padding: 4px;
  line-height: 1;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`,Qn=n.Ay.h2`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupTextColor)||"#333333"}};
  text-align: center;
  flex: 1;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,Jn=n.Ay.form`
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom:60px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,Gn=n.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  
  @media (max-width: 280px) {
    flex-direction: column;
    gap: 8px;
  }
`,Zn=n.Ay.label`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupTextColor)||"#333333"}};
  margin-top: 2px;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,er=n.Ay.div`
  display: flex;
  gap: 8px;
  justify-content: ${e=>"ar"===e.activeLanguage?"flex-end":"flex-start"};
  margin-bottom: 6px;
`,tr=n.Ay.div`
  font-size: 32px;
  color: ${e=>{var t;return e.active?(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#ffc107":"#e0e0e0"}};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    filter: ${e=>e.active?"drop-shadow(0 0 3px rgba(255, 193, 7, 0.5))":"none"};
  }
`,or=n.Ay.input`
  flex: 1;
  min-width: 0;
  padding: 10px 14px;
  border: 1px solid ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}}30;
  border-radius: 8px;
  font-size: 14px;
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"#ffffff"}};
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    box-shadow: 0 0 0 3px ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}}15;
  }

  &::placeholder {
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#666666"}}50;
  }
  
  @media (max-width: 320px) {
    width: 100%;
  }
`,ir=n.Ay.textarea`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}}30;
  border-radius: 8px;
  font-size: 14px;
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"#ffffff"}};
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  outline: none;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    box-shadow: 0 0 0 3px ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}}15;
  }

  &::placeholder {
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#666666"}}50;
  }
`,nr=n.Ay.button`
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"#ffffff"}};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}}dd;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}}40;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,rr=n.Ay.div`
  color: #dc3545;
  font-size: 14px;
  padding: 10px;
  background-color: #f8d7da;
  border-radius: 6px;
  text-align: center;
`,ar=n.Ay.div`
  color: #28a745;
  font-size: 14px;
  padding: 10px;
  background-color: #d4edda;
  border-radius: 6px;
  text-align: center;
`;var lr=o(45170);function sr(e){let{showPopup:t,popupHandler:o,restaurant:n,isPage:r=!1,onClose:a}=e;const{restaurantName:l}=(0,b.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[d])||void 0===o?void 0:o.activeLanguage)||"en"})),[p,u]=(0,i.useState)(0),[x,h]=(0,i.useState)(0),[g,m]=(0,i.useState)(""),[f,w]=(0,i.useState)(""),[$,j]=(0,i.useState)(""),[C,k]=(0,i.useState)(""),[A,L]=(0,i.useState)(""),[z,S]=(0,i.useState)(!1),[_,T]=(0,i.useState)(!1),{handleApiCall:P}=(0,lr.E)({onSuccess:()=>{S(!0),T(!1),setTimeout((()=>{r||o(null),u(0),m(""),w(""),j(""),k(""),L(""),S(!1)}),2e3)},onError:e=>{var t,o;L((null===e||void 0===e||null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message)||("en"===c?"Failed to submit feedback":"\u0641\u0634\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062a\u0639\u0644\u064a\u0642")),T(!1)}});(0,i.useEffect)((()=>{if(r)return;const e=()=>{o(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[r,o]);return(0,v.jsxs)(Xn,{showPopup:t,isPage:r,children:[(0,v.jsxs)(Vn,{activeLanguage:c,children:[(0,v.jsx)(Qn,{activeLanguage:c,children:"en"===c?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"}),(0,v.jsx)(Kn,{activeLanguage:c,onClick:()=>{a?a():o(null)}})]}),(0,v.jsxs)(Jn,{onSubmit:async e=>{e.preventDefault(),L(""),0!==p?(T(!0),await P({restaurant_id:null===n||void 0===n?void 0:n.id,rating:p,name:g||null,phone_number:f||null,email:$||null,comments:C||null})):L("en"===c?"Please select a rating":"\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u062a\u0642\u064a\u064a\u0645")},activeLanguage:c,children:[(0,v.jsx)(Zn,{activeLanguage:c,children:"en"===c?"Rating *":"\u0627\u0644\u062a\u0642\u064a\u064a\u0645 *"}),(0,v.jsx)(er,{activeLanguage:c,children:[1,2,3,4,5].map((e=>(0,v.jsx)(tr,{active:e<=(x||p),onClick:()=>u(e),onMouseEnter:()=>h(e),onMouseLeave:()=>h(0),children:(0,v.jsx)(xe.gt3,{})},e)))}),(0,v.jsxs)(Gn,{activeLanguage:c,children:[(0,v.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"4px",minWidth:0},children:[(0,v.jsx)(Zn,{activeLanguage:c,children:"en"===c?"Name":"\u0627\u0644\u0627\u0633\u0645"}),(0,v.jsx)(or,{type:"text",activeLanguage:c,dir:"en"===c?"ltr":"rtl",placeholder:"en"===c?"Your name (optional)":"\u0627\u0633\u0645\u0643 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",value:g,onChange:e=>m(e.target.value)})]}),(0,v.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"4px",minWidth:0},children:[(0,v.jsx)(Zn,{activeLanguage:c,children:"en"===c?"Phone Number":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"}),(0,v.jsx)(or,{type:"tel",activeLanguage:c,dir:"en"===c?"ltr":"rtl",placeholder:"en"===c?"Phone number (optional)":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",value:f,onChange:e=>w(e.target.value)})]})]}),(0,v.jsx)(Zn,{activeLanguage:c,children:"en"===c?"Email":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),(0,v.jsx)(or,{type:"email",activeLanguage:c,dir:"en"===c?"ltr":"rtl",placeholder:"en"===c?"Email (optional)":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",value:$,onChange:e=>j(e.target.value),style:{width:"100%"}}),(0,v.jsx)(Zn,{activeLanguage:c,children:"en"===c?"Comments":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"}),(0,v.jsx)(ir,{activeLanguage:c,dir:"en"===c?"ltr":"rtl",placeholder:"en"===c?"Your comments (optional)":"\u062a\u0639\u0644\u064a\u0642\u0627\u062a\u0643 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",value:C,onChange:e=>k(e.target.value),rows:4}),A&&(0,v.jsx)(rr,{children:A}),z&&(0,v.jsx)(ar,{children:"en"===c?"Thank you for your feedback!":"\u0634\u0643\u0631\u0627\u064b \u0644\u062a\u0639\u0644\u064a\u0642\u0643!"}),(0,v.jsx)(nr,{type:"submit",disabled:_||0===p,activeLanguage:c,children:_?"en"===c?"Submitting...":"\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0631\u0633\u0627\u0644...":"en"===c?"Submit Feedback":"\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062a\u0639\u0644\u064a\u0642"})]})]})}const dr=n.Ay.div`
  position: fixed;
  bottom: ${e=>"contact"===e.showPopup?"0px":"-100%"};
  min-height: 60vh;
  max-height: 90vh;
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupbackgroundColor)||"#ffffff"}};
  width: 100%;
  transition: all 0.8s ease-in-out;
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  overflow-y: auto;
`,cr=(0,n.Ay)(we.WQq)`
  font-size: 24px;
  position: absolute;
  top: 30px;
  right: 20px;
  cursor: pointer;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupTextColor)||"#333333"}};
  z-index: 10;

  &:hover {
    opacity: 0.7;
  }
`,pr=n.Ay.h2`
  font-size: 28px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 30px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupTextColor)||"#333333"}};
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,ur=n.Ay.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,xr=n.Ay.div`
  width: 100%;
`,hr=n.Ay.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupTextColor)||"#333333"}};
  margin-bottom: 20px;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,gr=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,mr=n.Ay.div`
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.categoryUnActive)||"#ffffff"}};
  border-radius: 16px;
  padding: 12px 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${e=>"ar"===e.activeLanguage?"right: 0;":"left: 0;"}
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}} 0%, ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0056b3"}} 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 123, 255, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (min-width: 768px) {
    padding: 24px 28px;
  }
`,fr=n.Ay.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
  margin: 0;
  text-align: left;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  letter-spacing: -0.02em;
  line-height: 1.3;
  flex: 1;
  
  @media (min-width: 768px) {
    font-size: 22px;
  }
`,vr=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: nowrap;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    gap: 16px;
  }
`,br=n.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  text-decoration: none;
  
  background: ${e=>{var t;return e.whatsapp?"rgba(37, 211, 102, 0.12)":e.location||e.map?"rgba(0, 123, 255, 0.12)":null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}12`:"rgba(0, 123, 255, 0.12)"}};
  
  color: ${e=>{var t,o;return e.whatsapp?"#25D366":e.location||e.map?(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff":(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||"#007bff"}};
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    background: ${e=>{var t,o;return e.whatsapp?"rgba(37, 211, 102, 0.2)":e.location||e.map?null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.2)":null!==(o=e.theme)&&void 0!==o&&o.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.2)"}};
    box-shadow: 0 4px 12px ${e=>{var t;return e.whatsapp?"rgba(37, 211, 102, 0.3)":null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}30`:"rgba(0, 123, 255, 0.3)"}};
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  @media (min-width: 768px) {
    width: 52px;
    height: 52px;
    font-size: 22px;
  }
`,yr=(n.Ay.div`
  width: 100%;
`,n.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 100%;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    gap: 20px;
  }
`),wr=n.Ay.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px 16px;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.categoryUnActive)||"#ffffff"}};
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.categoryUnActive)||"#ffffff"}};
  }
`,$r=n.Ay.div`
  font-size: 32px;
  color: ${e=>{var t,o,i,n,r,a;return null!==(t=e.platform)&&void 0!==t&&t.toLowerCase().includes("facebook")?"#1877F2":null!==(o=e.platform)&&void 0!==o&&o.toLowerCase().includes("instagram")?"#E4405F":null!==(i=e.platform)&&void 0!==i&&i.toLowerCase().includes("twitter")?"#1DA1F2":null!==(n=e.platform)&&void 0!==n&&n.toLowerCase().includes("whatsapp")?"#25D366":null!==(r=e.platform)&&void 0!==r&&r.toLowerCase().includes("tiktok")?"#000000":(null===(a=e.theme)||void 0===a?void 0:a.mainColor)||"#007bff"}};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,jr=e=>{const t=(null===e||void 0===e?void 0:e.toLowerCase())||"";return t.includes("facebook")?(0,v.jsx)(xe.iYk,{}):t.includes("instagram")?(0,v.jsx)(xe.ao$,{}):t.includes("tiktok")?(0,v.jsx)(xe.kkU,{}):t.includes("twitter")?(0,v.jsx)(xe.feZ,{}):t.includes("linkedin")?(0,v.jsx)(xe.QEs,{}):t.includes("youtube")?(0,v.jsx)(xe.Vk6,{}):t.includes("whatsapp")?(0,v.jsx)(xe.EcP,{}):(0,v.jsx)(xe.f35,{})};function Cr(e){let{showPopup:t,popupHandler:o,restaurant:n}=e;const{restaurantName:r}=(0,b.g)(),l=window.location.hostname.split(".")[0],s="menugic"!==l&&"localhost"!==l&&"www"!==l?l:r,d=(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[s])||void 0===o?void 0:o.activeLanguage)||"en"})),c=(null===n||void 0===n?void 0:n.branches)||[];let p={},u=!1;if(null!==n&&void 0!==n&&n.social_media)try{p="string"===typeof n.social_media?JSON.parse(n.social_media):n.social_media,u=Object.keys(p).length>0}catch(x){p={}}return!u&&null!==n&&void 0!==n&&n.socialMedia&&Array.isArray(n.socialMedia)&&(n.socialMedia.forEach((e=>{if(e.platform&&e.link){const t=e.platform.toLowerCase();p[t]=e.link.startsWith("http")?e.link:`https://${e.link}`}})),u=Object.keys(p).length>0),(0,i.useEffect)((()=>{const e=()=>{o(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),(0,v.jsxs)(dr,{showPopup:t,children:[(0,v.jsx)(cr,{onClick:()=>{o(null)}}),(0,v.jsx)(pr,{activeLanguage:d,children:"en"===d?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"}),(0,v.jsxs)(ur,{activeLanguage:d,children:[c.length>0&&(0,v.jsxs)(xr,{children:[(0,v.jsx)(hr,{activeLanguage:d,children:"en"===d?"Our Locations":"\u0645\u0648\u0627\u0642\u0639\u0646\u0627"}),(0,v.jsx)(gr,{children:c.map(((e,t)=>(0,v.jsxs)(mr,{activeLanguage:d,children:[(0,v.jsx)(fr,{activeLanguage:d,children:e.name}),(0,v.jsxs)(vr,{activeLanguage:d,children:[e.phone_number&&(0,v.jsx)(br,{as:"a",href:`tel:${e.phone_number.replace(/\s/g,"")}`,phone:!0,activeLanguage:d,children:(0,v.jsx)(xe.Cab,{})}),e.whatsapp_number&&(0,v.jsx)(br,{as:"a",href:`https://wa.me/${(0,ei.JW)(e.whatsapp_number,null===n||void 0===n?void 0:n.country_code)}`,target:"_blank",rel:"noopener noreferrer",whatsapp:!0,activeLanguage:d,children:(0,v.jsx)(xe.EcP,{})}),(e.location||e.mapLink||e.map_link)&&(0,v.jsx)(br,{as:"a",href:e.mapLink||e.map_link?`https://${e.mapLink||e.map_link}`:void 0,target:e.mapLink||e.map_link?"_blank":void 0,rel:e.mapLink||e.map_link?"noopener noreferrer":void 0,location:!0,activeLanguage:d,children:(0,v.jsx)(a.o9J,{})})]})]},t)))})]}),u&&(0,v.jsxs)(xr,{children:[(0,v.jsx)(hr,{activeLanguage:d,children:"en"===d?"Follow Us":"\u062a\u0627\u0628\u0639\u0646\u0627"}),(0,v.jsx)(yr,{children:Object.entries(p).map((e=>{let[t,o]=e;return o?(0,v.jsx)(wr,{href:o.startsWith("http")?o:`https://${o}`,target:"_blank",rel:"noopener noreferrer",platform:t,children:(0,v.jsx)($r,{platform:t,children:jr(t)})},t):null}))})]})]})]})}const kr=n.Ay.div`
  position: ${e=>e.isPage?"relative":"fixed"};
  bottom: ${e=>e.isPage?"auto":"contactForm"===e.showPopup?"0%":"-100%"};
  left: ${e=>e.isPage?"auto":"0"};
  right: ${e=>e.isPage?"auto":"0"};
  min-height: ${e=>e.isPage?"100vh":"70vh"};
  max-height: ${e=>e.isPage?"none":"90vh"};
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupbackgroundColor)||"#ffffff"}};
  width: 100%;
  transition: ${e=>e.isPage?"none":"all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"};
  border-top-right-radius: ${e=>e.isPage?"0":"60px"};
  border-top-left-radius: ${e=>e.isPage?"0":"60px"};
  box-shadow: ${e=>e.isPage?"none":"0 -4px 10px rgba(0, 0, 0, 0.2)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
      margin-bottom: 40px;
  padding: 20px;
  padding-top: ${e=>e.isPage?"32px":"40px"};
  padding-bottom: 40px;
  overflow-y: auto;
  will-change: transform;
`,Ar=(0,n.Ay)(we.WQq)`
  font-size: 24px;
  position: fixed;
  top: 24px;
  ${e=>"ar"===e.activeLanguage?"left: 24px;":"right: 24px;"}
  cursor: pointer;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupTextColor)||"#333333"}};
  z-index: 20000;
  pointer-events: auto;
  background: transparent;
  border: none;
  padding: 4px;
  line-height: 1;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  flex-shrink: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    opacity: 0.7;
  }
`,Lr=(n.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,n.Ay.img`
  max-width: 200px;
  max-height: 100px;
  object-fit: contain;
  
  @media (min-width: 768px) {
    max-width: 250px;
    max-height: 120px;
  }
`,n.Ay.h2`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupTextColor)||"#333333"}};
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`),zr=n.Ay.h3`
  font-size: 14px;
  font-weight: 400;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#666666"}};
  margin-bottom: 5px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`,Sr=(n.Ay.p`
  font-size: 13px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#666666"}};
  margin-bottom: 5px;
  text-align: center;
  line-height: 1.6;
  max-width: 600px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    font-size: 15px;
    margin-bottom: 40px;
  }
`,n.Ay.div`
  width: 99%;
  max-width: 600px;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"#f8f9fa"}};
  border-radius: 12px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    padding: 40px;
  }
`),_r=n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Tr=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: ${e=>e.$fullWidth?"1 1 100%":"1 1 calc(50% - 6px)"};
  min-width: 0;
  
  @media (max-width: 280px) {
    flex: 1 1 100%;
  }
`,Pr=n.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  
  @media (max-width: 280px) {
    flex-direction: column;
    gap: 12px;
  }
`,Er=n.Ay.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0px !important;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupTextColor)||"#333333"}};
  margin-top: 2px;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,Ir=n.Ay.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.borderColor)||"rgba(0, 0, 0, 0.1)"}};
  border-radius: 8px;
  font-size: 15px;
  background: #ffffff;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    box-shadow: 0 0 0 3px ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.2)"}};
  }

  &::placeholder {
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#999999"}};
    opacity: 0.6;
  }
`,Fr=n.Ay.select`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.borderColor)||"rgba(0, 0, 0, 0.1)"}};
  border-radius: 8px;
  font-size: 15px;
  background: #ffffff;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    box-shadow: 0 0 0 3px ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.2)"}};
  }
`,Nr=n.Ay.textarea`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.borderColor)||"rgba(0, 0, 0, 0.1)"}};
  border-radius: 8px;
  font-size: 15px;
  background: #ffffff;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    box-shadow: 0 0 0 3px ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.2)"}};
  }

  &::placeholder {
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#999999"}};
    opacity: 0.6;
  }
`,Br=n.Ay.button`
  width: 100%;
  padding: 16px;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};

  &:hover:not(:disabled) {
    background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0056b3"}};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}40`:"rgba(0, 123, 255, 0.4)"}};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Or=n.Ay.div`
  color: #dc3545;
  font-size: 13px;
  margin-top: -8px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,Rr=n.Ay.div`
  color: #28a745;
  font-size: 14px;
  text-align: center;
  padding: 12px;
  background: #d4edda;
  border-radius: 8px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`;var Dr=o(58321);function Ur(e){let{showPopup:t,popupHandler:o,restaurant:n,isPage:r=!1,onClose:a}=e;const{restaurantName:l}=(0,b.g)(),s=window.location.hostname.split(".")[0],d="menugic"!==s&&"localhost"!==s&&"www"!==s?s:l,c=(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[d])||void 0===o?void 0:o.activeLanguage)||"en"})),[p,u]=(0,i.useState)({name:"",email:"",phone:"",type:"question",subject:"",message:""}),[x,h]=(0,i.useState)({}),[g,m]=(0,i.useState)(!1),[f,w]=(0,i.useState)(!1);(0,i.useEffect)((()=>{if(r)return;const e=()=>{o(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[r,o]);const $=e=>{const{name:t,value:o}=e.target;u((e=>({...e,[t]:o}))),x[t]&&h((e=>({...e,[t]:""})))};return(0,v.jsxs)(kr,{showPopup:t,isPage:r,children:[(0,v.jsx)(Ar,{onClick:()=>{a?a():o(null)},activeLanguage:c}),(0,v.jsx)(Lr,{activeLanguage:c,children:"en"===c?"Contact Us":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"}),(0,v.jsx)(zr,{activeLanguage:c,children:"en"===c?"DO YOU HAVE ANY QUESTION OR SUGGESTION?":"\u0647\u0644 \u0644\u062f\u064a\u0643 \u0623\u064a \u0633\u0624\u0627\u0644 \u0623\u0648 \u0627\u0642\u062a\u0631\u0627\u062d\u061f"}),(0,v.jsx)(Sr,{activeLanguage:c,children:(0,v.jsxs)(_r,{onSubmit:async e=>{if(e.preventDefault(),(()=>{const e={};return p.message&&p.message.trim()||(e.message="en"===c?"Message is required":"\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0645\u0637\u0644\u0648\u0628\u0629"),p.email&&p.email.trim()&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)||(e.email="en"===c?"Please enter a valid email":"\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0635\u062d\u064a\u062d")),h(e),0===Object.keys(e).length})()){m(!0),w(!1);try{await(0,Dr.o)({restaurant_id:null===n||void 0===n?void 0:n.id,type:p.type||"question",subject:p.subject||null,message:p.message,customer_name:p.name||null,customer_email:p.email||null,customer_phone:p.phone||null,channel:"contact_form"}),w(!0),u({name:"",email:"",phone:"",type:"question",subject:"",message:""}),r?setTimeout((()=>{w(!1)}),2e3):setTimeout((()=>{o(null),w(!1)}),2e3)}catch(a){var t,i;h({submit:(null===a||void 0===a||null===(t=a.response)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.message)||("en"===c?"Failed to send message. Please try again.":"\u0641\u0634\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.")})}finally{m(!1)}}},children:[(0,v.jsxs)(Pr,{children:[(0,v.jsxs)(Tr,{children:[(0,v.jsx)(Er,{activeLanguage:c,children:"en"===c?"Type":"\u0627\u0644\u0646\u0648\u0639"}),(0,v.jsxs)(Fr,{name:"type",value:p.type,onChange:$,activeLanguage:c,children:[(0,v.jsx)("option",{value:"question",children:"en"===c?"Question":"\u0633\u0624\u0627\u0644"}),(0,v.jsx)("option",{value:"suggestion",children:"en"===c?"Suggestion":"\u0627\u0642\u062a\u0631\u0627\u062d"})]})]}),(0,v.jsxs)(Tr,{children:[(0,v.jsx)(Er,{activeLanguage:c,children:"en"===c?"Name":"\u0627\u0644\u0627\u0633\u0645"}),(0,v.jsx)(Ir,{type:"text",name:"name",value:p.name,onChange:$,placeholder:"en"===c?"Name":"\u0627\u0644\u0627\u0633\u0645",activeLanguage:c})]})]}),(0,v.jsxs)(Pr,{children:[(0,v.jsxs)(Tr,{children:[(0,v.jsx)(Er,{activeLanguage:c,children:"en"===c?"E-mail":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),(0,v.jsx)(Ir,{type:"email",name:"email",value:p.email,onChange:$,placeholder:"en"===c?"E-mail":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",activeLanguage:c}),x.email&&(0,v.jsx)(Or,{children:x.email})]}),(0,v.jsxs)(Tr,{children:[(0,v.jsx)(Er,{activeLanguage:c,children:"en"===c?"Phone Number":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"}),(0,v.jsx)(Ir,{type:"tel",name:"phone",value:p.phone,onChange:$,placeholder:"en"===c?"Phone Number":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",activeLanguage:c})]})]}),(0,v.jsx)(Pr,{children:(0,v.jsxs)(Tr,{$fullWidth:!0,children:[(0,v.jsx)(Er,{activeLanguage:c,children:"en"===c?"Subject":"\u0627\u0644\u0645\u0648\u0636\u0648\u0639"}),(0,v.jsx)(Ir,{type:"text",name:"subject",value:p.subject,onChange:$,placeholder:"en"===c?"Subject":"\u0627\u0644\u0645\u0648\u0636\u0648\u0639",activeLanguage:c})]})}),(0,v.jsxs)(Tr,{$fullWidth:!0,children:[(0,v.jsxs)(Er,{activeLanguage:c,children:["en"===c?"Message":"\u0627\u0644\u0631\u0633\u0627\u0644\u0629"," *"]}),(0,v.jsx)(Nr,{name:"message",value:p.message,onChange:$,placeholder:"en"===c?"Message":"\u0627\u0644\u0631\u0633\u0627\u0644\u0629",activeLanguage:c,rows:2}),x.message&&(0,v.jsx)(Or,{children:x.message})]}),x.submit&&(0,v.jsx)(Or,{children:x.submit}),f&&(0,v.jsx)(Rr,{children:"en"===c?"Message sent successfully!":"\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0646\u062c\u0627\u062d!"}),(0,v.jsx)(Br,{type:"submit",disabled:g,activeLanguage:c,children:g?"en"===c?"Sending...":"\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0631\u0633\u0627\u0644...":"en"===c?"Send Message":"\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629"})]})})]})}var qr=o(38495),Mr=o(11671);const Wr=n.Ay.div`
height: 100vh;
position: fixed;
width: 100%;
left: ${e=>e.showSidebar?"0":"-100%"};
top:0;
  transition:all  0.5s ease-in-out;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
z-index: 100;
`,Yr=n.Ay.div`
width: 100%;
height: 100%;
  backdrop-filter:${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${e=>e.showSidebar?"blur(5px)":"blur(0px)"};
`,Hr=n.Ay.div`
height: 100vh;
background-color: ${e=>e.theme.sidebarbackground};
width: 80%;
position: absolute;
left: 0;
top:0;
box-shadow: 10px 0 15px -5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-left: 0;
  padding-right: 0;
  overflow-y: auto;
  align-items: stretch;
  @media (min-width: 1024px) {
        width: 25%;
    }
`,Xr=(n.Ay.div`
width: 100%;
  height: 60%; /* 60% of the sidebar height */
  overflow-y: auto;
  margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,n.Ay.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-start;
`,n.Ay.span`
    /* overflow: hidden;
    text-overflow: ellipsis; */
    margin-left:${e=>e.categoryType?"10%":"0%"};

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 13px;
    color: ${e=>e.theme.sidebartext};

`),Vr=n.Ay.div`
width:42px;
height:42px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10%;

`,Kr=n.Ay.img`
width:20px;
height:20px;
`,Qr=(n.Ay.div`
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vh;
`,n.Ay.img`
max-width: 200px;
max-height: 200px;
margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,n.Ay.div`
display: flex;
align-items: center;
font-weight: 600;
height: 35px;
overflow: hidden;
position: relative;
width: 80%;
margin-bottom: 20px;
margin-top: 10px;
margin-right: ${e=>e.showSidebar?"0px":"150px"};
transition: all 0.8s ease-in-out;
opacity: ${e=>e.showSidebar?"1":"0"};

`,n.Ay.input`
width: 100%;
height:100%;
background-color:${e=>e.theme.sidebarsearch};
border: 0;
outline: none;
font-size: 12px;
padding-left: ${e=>"en"==e.activeLanguage?"30px":"0px"};
padding-right: ${e=>"en"==e.activeLanguage?"0px":"30px"};
color:${e=>e.theme.sidebarsearchText};
&::placeholder{
    color:${e=>e.theme.sidebarsearchText};
    opacity: 0.5;
}

`,(0,n.Ay)(c.Xj1)`
position: absolute;
left: ${e=>"en"==e.activeLanguage?"10px":null};
right: ${e=>"en"==e.activeLanguage?null:"10px"};
color:${e=>e.theme.sidebarsearchText};

`,(0,n.Ay)(Mr.IMk)`
position: absolute;
left: 20px;
top: 20px;
color: ${e=>e.theme.sidebarsearch};
font-size: 27px;

`),Jr=(n.Ay.button`
  position: absolute;
  left: 20px;
  top: 60px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: ${e=>e.theme.sidebarsearch||e.theme.sidebartext||"#333333"};
  font-size: 14px;
  font-weight: 500;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  &:hover {
    background: ${e=>e.theme.sidebarsearch||"rgba(0, 0, 0, 0.05)"};
    transform: translateX(${e=>"ar"===e.activeLanguage?"-2px":"2px"});
  }
  
  &:active {
    transform: translateX(0);
  }
  
  @media (min-width: 768px) {
    font-size: 15px;
    padding: 10px 14px;
  }
`,n.Ay.span`
  font-size: 14px;
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 15px;
  }
`,n.Ay.div`
  width: 100%;
  margin-bottom: 0;
  padding: 0 10px;
  border: none;
  border-bottom: none;
`),Gr=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  border-radius: 10px;
  margin: 0;
  opacity: ${e=>e.disabled?.6:1};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.sidebarsearch)||"transparent"}};

  &:hover {
    ${e=>{var t;return e.disabled?"":`\n      background: ${(null===(t=e.theme)||void 0===t?void 0:t.sidebarsearch)||"rgba(0, 0, 0, 0.08)"};\n      transform: translateX(${"ar"===e.activeLanguage?"-2px":"2px"});\n    `}}
  }

  &:active {
    ${e=>e.disabled?"":"\n      transform: translateX(0);\n    "}
  }
`,Zr=n.Ay.div`
  font-size: 20px;
  color: ${e=>{var t,o,i;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||(null===(o=e.theme)||void 0===o?void 0:o.maincolor)||(null===(i=e.theme)||void 0===i?void 0:i.sidebartext)||"#333333"}};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  flex-shrink: 0;
`,ea=n.Ay.span`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.sidebartext)||"#333333"}};
  flex: 1;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,ta=n.Ay.div`
  font-size: 12px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.sidebartext)||"#666666"}};
  margin-${e=>"ar"===e.activeLanguage?"right":"left"}: auto;
  transition: transform 0.3s ease;
  flex-shrink: 0;
`,oa=n.Ay.div`
  width: 100%;
  padding: 8px 0;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  margin-top: 4px;
`,ia=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 10px;
`,na=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${e=>{var t,o;return e.active?((null===(t=e.theme)||void 0===t?void 0:t.mainColor)||(null===(o=e.theme)||void 0===o?void 0:o.maincolor)||"#007bff")+"20":"transparent"}};
  margin: 0 10px;
  
  &:hover {
    background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.sidebarsearch)||"rgba(0, 0, 0, 0.06)"}};
    transform: translateX(${e=>"ar"===e.activeLanguage?"-2px":"2px"});
  }

  &:active {
    transform: translateX(0);
  }
`;function ra(e){let{activeCategory:t,setactiveCategory:o,categories:n,showSidebar:r,setshowSidebar:a,setcarouselPosition:l,onHomeClick:s,onCategoryClick:d,onFeedbackClick:c,onContactClick:p,onBranchesClick:u,branches:x}=e;const{restaurantName:h}=(0,b.g)(),[g,m]=(0,$.ok)(),f=window.location.hostname.split(".")[0],w="menugic"!==f&&"localhost"!==f&&"www"!==f?f:h,j=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[w]})),[C,k]=(0,i.useState)(!0);return(0,v.jsxs)(Wr,{showSidebar:r,children:[(0,v.jsx)(Yr,{onClick:()=>{a(!1)},showSidebar:r}),(0,v.jsxs)(Hr,{children:[(0,v.jsx)(Qr,{}),s&&(0,v.jsx)(Jr,{children:(0,v.jsxs)(Gr,{onClick:s,children:[(0,v.jsx)(Zr,{children:(0,v.jsx)(xe.rQ8,{})}),(0,v.jsx)(ea,{activeLanguage:null===j||void 0===j?void 0:j.activeLanguage,children:"en"===(null===j||void 0===j?void 0:j.activeLanguage)?"Homepage":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})]})}),(0,v.jsxs)(Jr,{children:[(0,v.jsxs)(Gr,{onClick:()=>k(!C),children:[(0,v.jsx)(Zr,{children:(0,v.jsx)(xe.svy,{})}),(0,v.jsx)(ea,{activeLanguage:null===j||void 0===j?void 0:j.activeLanguage,children:"en"===(null===j||void 0===j?void 0:j.activeLanguage)?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a"}),(0,v.jsx)(ta,{activeLanguage:null===j||void 0===j?void 0:j.activeLanguage,children:C?(0,v.jsx)(xe.Ucs,{}):(0,v.jsx)(xe.Vr3,{})})]}),C&&(0,v.jsx)(oa,{children:(0,v.jsx)(ia,{children:null===n||void 0===n?void 0:n.sort(((e,t)=>t.priority-e.priority)).map(((e,i)=>(0,v.jsxs)(na,{onClick:()=>((e,t)=>{d?d(e):(o(e),l(t)),a(!1)})(e.id,i),active:t===e.id,children:["horizantal-withoutIcon"!=j.category_type&&(0,v.jsx)(Vr,{activeCategory:t,categoryId:e.id,children:(0,v.jsx)(Kr,{src:(0,de.V)(e.image_url)})}),(0,v.jsx)(Xr,{categoryType:"horizantal-withoutIcon"==j.category_type,activeCategory:t,categoryId:e.id,children:"en"==(null===j||void 0===j?void 0:j.activeLanguage)?e.en_category:e.ar_category})]},i)))})})]}),(0,v.jsx)(Jr,{children:(0,v.jsxs)(Gr,{disabled:!0,children:[(0,v.jsx)(Zr,{children:(0,v.jsx)(xe.IoZ,{})}),(0,v.jsx)(ea,{activeLanguage:null===j||void 0===j?void 0:j.activeLanguage,children:"en"===(null===j||void 0===j?void 0:j.activeLanguage)?"Orders (Coming Soon)":"\u0627\u0644\u0637\u0644\u0628\u0627\u062a (\u0642\u0631\u064a\u0628\u0627\u064b)"})]})}),(0,v.jsx)(Jr,{children:(0,v.jsxs)(Gr,{onClick:()=>{c&&c(),a(!1)},children:[(0,v.jsx)(Zr,{children:(0,v.jsx)(xe.g5D,{})}),(0,v.jsx)(ea,{activeLanguage:null===j||void 0===j?void 0:j.activeLanguage,children:"en"===(null===j||void 0===j?void 0:j.activeLanguage)?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"})]})}),x&&x.length>0&&(0,v.jsx)(Jr,{children:(0,v.jsxs)(Gr,{onClick:()=>{u&&u(),a(!1)},children:[(0,v.jsx)(Zr,{children:(0,v.jsx)(xe.vq8,{})}),(0,v.jsx)(ea,{activeLanguage:null===j||void 0===j?void 0:j.activeLanguage,children:"en"===(null===j||void 0===j?void 0:j.activeLanguage)?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"})]})}),(0,v.jsx)(Jr,{children:(0,v.jsxs)(Gr,{onClick:()=>{p&&p(),a(!1)},children:[(0,v.jsx)(Zr,{children:(0,v.jsx)(xe.toK,{})}),(0,v.jsx)(ea,{activeLanguage:null===j||void 0===j?void 0:j.activeLanguage,children:"en"===(null===j||void 0===j?void 0:j.activeLanguage)?"Contact Us":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"})]})})]})]})}const aa=n.i7`
  0% {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
`,la=n.i7`
  0% {
    width: 0%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    border-radius: 0px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  40% {
    width: 92%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
  }
  100% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }

  @media (min-width: 768px) {
    40% {
      width: 88%;
      border-radius: 28px;
    }
    100% {
      width: 88%;
      border-radius: 28px;
    }
  }

  @media (min-width: 1024px) {
    40% {
      width: 85%;
      border-radius: 32px;
    }
    100% {
      width: 85%;
      border-radius: 32px;
    }
  }
`,sa=n.i7`
  0% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }
  60% {
    width: 92%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 0.5;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    width: 0%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    border-radius: 0px;
    opacity: 0;
  }

  @media (min-width: 768px) {
    0% {
      width: 88%;
      border-radius: 28px;
    }
    60% {
      width: 88%;
      border-radius: 28px;
    }
  }

  @media (min-width: 1024px) {
    0% {
      width: 85%;
      border-radius: 32px;
    }
    60% {
      width: 85%;
      border-radius: 32px;
    }
  }
`,da=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 299;
  opacity: ${e=>e.CloseAnimation?1:0};
  animation: ${e=>e.CloseAnimation?aa:"none"} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  /* Always capture clicks while mounted so closing doesn't let taps pass through to product grid (avoids reopen on 2nd close) */
  pointer-events: auto;
`,ca=n.Ay.div`
  position: fixed;
  width: 92%;
  height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
  max-height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${e=>e.theme.textColor};
  background-color: ${e=>e.theme.backgroundColor};
  padding-bottom: 0;
  overflow-y: ${e=>e.CloseAnimation?"auto":"hidden"};
  overflow-x: hidden;
  z-index: 300;
  border-radius: 24px;
  box-shadow: ${e=>e.CloseAnimation?"0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.05)":"none"};
  
  /* Animation based on CloseAnimation state - smoother easing */
  animation: ${e=>e.CloseAnimation?la:sa} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: forwards;
  
  /* Smooth scrolling */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mainColor||"#007bff"}40;
    border-radius: 3px;
  }
  
  @media (min-width: 768px) {
    width: 88%;
    border-radius: 28px;
  }
  
  @media (min-width: 1024px) {
    width: 85%;
    border-radius: 32px;
  }
`,pa=n.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,ua=(n.i7`
 0% { 
    height:30vh;
    top:0px;
}

 100% { 
    height:70vh;
    top:80px;

    }
`,n.Ay.div`
  width: 100%;
  height: ${e=>e.squareDimension?"55vh":"70vh"};
  margin-top: 5px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  position: relative;
`),xa=n.Ay.div`
  width: 85%;
  height: 100%;
  .swiper {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: none !important;
  }
  .swiper-pagination {
    bottom: 8px;
  }
  .swiper-pagination-fraction {
    color: ${e=>e.theme.textColor||"#333"};
    font-size: 14px;
  }
`,ha=n.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position:relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
`,ga=n.Ay.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  vertical-align: top;
`,ma=n.Ay.div`
  height: 100%;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;
`,fa=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,va=n.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${fa} 1s linear infinite; /* Apply animation */
`,ba=n.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,ya=n.i7`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,wa=n.Ay.div`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"24px"};
  border-radius: ${e=>e.radius||"8px"};
  background: linear-gradient(
    90deg,
    ${e=>e.theme.textColor?`${e.theme.textColor}0c`:"rgba(0,0,0,0.06)"} 25%,
    ${e=>e.theme.textColor?`${e.theme.textColor}18`:"rgba(0,0,0,0.1)"} 50%,
    ${e=>e.theme.textColor?`${e.theme.textColor}0c`:"rgba(0,0,0,0.06)"} 75%
  );
  background-size: 200% 100%;
  animation: ${ya} 1.2s ease-in-out infinite;
`,$a=n.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;
  margin-top: 12px;
`,ja=n.Ay.img`
  height: 100%;
  object-fit: cover;
  border-radius: ${e=>e.$cardSlide?"0":e.CloseAnimation?"40px":"10px"};
  width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"90%":"100%"};
  display: ${e=>e.Loaded?"block":"none"};
  transition: all 0.8s;
  @media (min-width: 1024px) {
    width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"50%":"100%"};
  }
`,Ca=(n.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,(0,n.Ay)(we.m6W)`
  font-size: 14px;
  color: ${e=>e.theme.backgroundColor||"#ffffff"};
`),ka=(0,n.Ay)(we.m6W)`
  font-size: 26px;
  color: ${e=>e.theme.backgroundColor||"#fff"};
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  border-radius: 50%;
  padding: 8px;
  position:absolute;
  left:4%;
  top:45%;
  z-index:20;
  cursor: pointer;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    left:27%;
  }
`,Aa=(0,n.Ay)(we.OQo)`
  font-size: 26px;
  color: ${e=>e.theme.backgroundColor||"#fff"};
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  border-radius: 50%;
  padding: 8px;
  position:absolute;
  right:4%;
  top:45%;
  z-index:20;
  cursor: pointer;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    right:27%;
  }
`,La=n.Ay.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  z-index: 301;
  background-color: ${e=>e.theme.backgroundColor||"transparent"};
  transition: opacity 0.4s ease-in-out;
  
  @media (min-width: 1024px) {
    padding: 25px 40px;
  }
`,za=n.Ay.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.textColor||"#1a1a1a"};
  margin: 0;
  text-align: center;
  flex: 1;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 20px;
  
  @media (min-width: 768px) {
    font-size: 22px;
    font-weight: 700;
  }
`,Sa=n.Ay.button`
  position: relative;
  z-index: 302;
  outline: none;
  border: 0;
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
  }
  
  &:active {
    transform: scale(0.95);
  }
`,_a=(n.Ay.div`
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
`,n.i7`
 0% { 
    margin-top: -50px;
    opacity: 0;
}
50%{
  margin-top: -50px;
    opacity: 0;
}
 100% { 
    margin-top: 0px;
    opacity: 1;

}
`),Ta=(n.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${_a} 1.8s ease-in-out;
`,n.Ay.div`
  width:90%;
  height: 45vh;
  margin-top: 80px;
  display: flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${pa} 0.8s;
  @media (min-width: 1024px) {
    height: ${e=>e.CloseAnimation?"70vh":"30vh"};
    }
`,n.i7`
 0% { 
  margin-top: -20px;
  opacity: 0;
}
100% { 
  margin-top: 10px;
  opacity: 1;
}
`),Pa=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ea=n.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${Ta} 1.8s ease-in-out;

`,Ia=n.Ay.div`
  width: 90%;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  padding-bottom: 100px;
  color: ${e=>e.theme.textColor};
  opacity: ${e=>e.CloseAnimation?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.CloseAnimation?"auto":"none"};
  @media (min-width: 1024px) {
    width: 50%;
  }
`,Fa=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  margin-bottom: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid ${e=>e.theme.mainColor?`${e.theme.mainColor}18`:"rgba(0,0,0,0.06)"};
  flex-wrap: wrap;
  direction: ${e=>"en"===e.activeLanguage?"ltr":"rtl"};
`,Na=n.Ay.span`
  font-size: clamp(1.3rem, 3.8vw, 1.55rem);
  font-weight: 700;
  letter-spacing: ${e=>"en"===e.activeLanguage?"0.02em":"0"};
  line-height: 1.35;
  text-align: ${e=>"en"===e.activeLanguage?"left":"right"};
  color: ${e=>e.theme.textColor};
  flex: 1;
  min-width: 0;
  margin: 0;
`,Ba=n.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,Oa=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 10px 18px;
  border-radius: 12px;
  background: ${e=>e.theme.mainColor?`${e.theme.mainColor}14`:"rgba(0,0,0,0.06)"};
  border: 1px solid ${e=>e.theme.mainColor?`${e.theme.mainColor}28`:"rgba(0,0,0,0.08)"};
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
`,Ra=n.Ay.span`
  font-size: clamp(0.9rem, 2.2vw, 1rem);
  font-weight: ${e=>e.discounted?"500":"600"};
  color: ${e=>e.discounted?e.theme.textColor?`${e.theme.textColor}88`:"rgba(0,0,0,0.45)":e.theme.mainColor||"inherit"};
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  letter-spacing: 0.02em;
`,Da=n.Ay.span`
  font-size: clamp(1.15rem, 3vw, 1.4rem);
  font-weight: 700;
  color: ${e=>e.theme.mainColor||"inherit"};
  letter-spacing: 0.03em;
`,Ua=n.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,qa=n.Ay.div`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${Ua} 0.7s ease-in-out;
  background-color: ${e=>e.theme.backgroundColor};
  z-index: 301;
  display: flex;
  box-shadow: 0px -3px 5px rgba(180, 180, 180, 0.1);
  padding-bottom: 10px;
  padding-top: 10px;
  opacity: ${e=>e.CloseAnimation?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.CloseAnimation?"auto":"none"};
  @media (min-width: 1024px) {
    width: 50%;
  }
`,Ma=n.Ay.button`
  outline: none;
  border: 0;
  position: relative;
  cursor: pointer;
    width: 90%;
    border-radius: 10px;
    height: 40px;
  color: ${e=>e.theme.popupbuttonText};
  font-weight: 400;
  background-color: ${e=>e.theme.mainColor};
  font-size: 12px;
`,Wa=n.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,Ya=n.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,Ha=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Xa=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Va=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,Ka=(n.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27px;
  width: 27px;
  border-radius: 50%;
  position: relative;
  z-index: 302;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};
  flex-shrink: 0;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (min-width: 1024px) {
    height: 30px;
    width: 30px;
    font-size: 16px;
  }
`),Qa=n.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`,Ja=n.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,Ga=n.Ay.input`
background-color: transparent;
border: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.8)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.8)`)):o}};
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
&:focus{
  outline: none;
}
&::placeholder{
  color:${e=>e.theme.formColor};
  opacity: 0.5;
}
font-size: 13px;
color:${e=>e.theme.formColor};
width: 100%;
padding: 10px;
border-radius: 10px;

`,Za=n.Ay.button`
  position: absolute;
  bottom: 14px;
  right: 14px;
  z-index: 25;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.mainColor||"#007bff"};
  color: ${e=>e.theme.backgroundColor||"#fff"};
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
  &:active {
    transform: scale(0.9);
  }
`,el=n.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
`,tl=n.Ay.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.15);
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  backdrop-filter: blur(4px);
`,ol=n.Ay.img`
  max-width: none;
  max-height: none;
  transform-origin: center center;
  transform: ${e=>`scale(${e.$scale}) translate(${e.$translateX}px, ${e.$translateY}px)`};
  transition: ${e=>e.$dragging?"none":"transform 0.2s ease"};
  user-select: none;
  -webkit-user-drag: none;
  width: 100vw;
  height: auto;
  object-fit: contain;
`,il=n.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
`,nl=n.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
`,rl=n.Ay.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.4s ease-in-out;
  transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,al=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,ll=n.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,sl=n.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,dl=n.Ay.div`
  margin-top: 20px;
  font-size: 12px;
  color: ${e=>e.theme.mainColor};
  position: relative;
  width: 60px;
  display: flex;
  align-items: center;
`,cl=n.Ay.span`
position: absolute;
left: 0;

`,pl=n.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,ul=(0,n.Ay)(r.Z0P)`
    animation:1.2s ${pl}  linear infinite ;
    position: absolute;
`;function xl(e){let{carouselIndex:t,images:o,CloseAnimation:i,carouselSwiped:n}=e;return(0,v.jsxs)(il,{CloseAnimation:i,children:[(0,v.jsxs)(nl,{children:[(0,v.jsx)(rl,{carouselIndex:t,children:(0,v.jsx)(al,{})}),o.map((e=>(0,v.jsx)(ll,{children:(0,v.jsx)(sl,{})})))]}),!n&&(0,v.jsxs)(dl,{children:[(0,v.jsx)(cl,{children:"Swipe"}),(0,v.jsx)(ul,{})]})]})}n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const hl=n.Ay.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,gl=(n.Ay.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input[type="checkbox"] {
    margin-right: 8px;
    accent-color: ${e=>e.theme.mainColor}; /* Change this color to your desired checkbox color */
  }
`,n.Ay.select`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  color: ${e=>e.theme.backgroundColor};
  background-color: ${e=>e.theme.mainColor};
  &:active{
    outline: none;
    border: 0px;

  }
  `,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,n.Ay.label`
  display: flex;
  align-items: center;
  input[type="radio"] {
    margin-right: 8px;
    accent-color:${e=>e.theme.mainColor}; /* Change this color to your desired radio button color */
  }
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(je().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`),ml=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,fl=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,vl=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let t=e.theme.formColor;if(je().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.3)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.3)`)):t}};
  font-size:10px;

`,bl=n.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,yl=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function wl(e){let{component:t,formData:o,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||[]);return(0,v.jsxs)(gl,{index:r,children:[(0,v.jsx)(hl,{children:t.label}),t.values.map((e=>(0,v.jsxs)(fl,{children:[s.some((t=>t===e.label))?(0,v.jsx)(bl,{onClick:()=>{(e=>{let o=s.filter((t=>t!==e.label));d(o),n(t.key,o)})(e)},children:(0,v.jsx)(Rt.RXm,{size:"15px"})}):(0,v.jsx)(vl,{onClick:()=>{(e=>{d([...s,e.label]),n(t.key,[...s,e.label])})(e)},children:(0,v.jsx)(xe.OiG,{})}),(0,v.jsx)(ml,{children:e.label})]}))),(c=a,c in l?(0,v.jsx)(yl,{children:"This field is required"}):null)]});var c}const $l=n.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};

  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(je().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,jl=n.Ay.div`
  padding: 7px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color:transparent;
  color:${e=>e.theme.formColor};
  width: 70%;
  border: 1px solid ${e=>e.theme.formColor};

font-size: 13px;
`,Cl=n.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,kl=n.Ay.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  border-radius: 4px;
  overflow-y: auto;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${e=>e.isOpen?"200px":"0px"};
  transition: 0.2s all ease-in-out;
  background-color:${e=>e.theme.mainColor};
  color:${e=>e.theme.popupbuttonText};
  width: 70%;

`,Al=n.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,Ll=n.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,zl=n.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,Sl=n.Ay.div`
  display: flex;
  justify-content: center;
  width: 90%;
  align-items: center;
  border-radius:30px;
  border: 1px solid ${e=>e.theme.mainColor};
  background-color: ${e=>e.selected?e.theme.mainColor:"transparent"};
  font-size: 12px;
  color: ${e=>e.selected?e.theme.popupbackgroundColor:e.theme.formColor};
  height: 40px;
  text-align: center;
  padding: 3px;
  margin-top: 10px;
`,_l=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  margin-top: 20px;
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Tl(e){var t;let{component:o,formData:n,handleChange:r,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;const[c,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===(t=n[o.key])||void 0===t?void 0:t.value)||""),h=(0,i.useRef)(null),g=e=>{x(e.label),p(!1),r(o.key,e)},m=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m))),[]),(0,v.jsxs)($l,{ref:h,index:l,children:[(0,v.jsx)(hl,{children:o.label}),o.data.values.length>8?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(jl,{onClick:()=>p((e=>!e)),children:[u||a,(0,v.jsx)(Cl,{className:c?"up":"",children:"\u25bc"})]}),(0,v.jsx)(kl,{isOpen:c,children:o.data.values.map(((e,t)=>(0,v.jsx)(Al,{className:u===e.label?"selected":"",onClick:()=>g(e),children:e.label},t)))})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(Ll,{children:o.data.values.map(((e,t)=>(0,v.jsx)(zl,{children:(0,v.jsx)(Sl,{selected:u===e.label,onClick:()=>g(e),children:e.label})})))})}),(f=s,f in d?(0,v.jsx)(_l,{children:"This field is required"}):null)]});var f}const Pl=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var t;let o=null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.formColor;if(je().isEmpty(o)&&(o="rgb(0,0,0)"),o.startsWith("#")){return`rgba(${parseInt(o.slice(1,3),16)}, ${parseInt(o.slice(3,5),16)}, ${parseInt(o.slice(5,7),16)}, 0.08)`}return o.startsWith("rgb")?o.replace(/rgba?\(([^)]+)\)/,((e,t)=>`rgba(${t.split(",").slice(0,3).join(",")}, 0.08)`)):o}};
`,El=n.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,Il=n.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,Fl=n.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,Nl=n.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,Bl=(n.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,n.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Ol(e){let{component:t,formData:o,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,i.useState)(o[t.key]||"");return(0,v.jsxs)(Pl,{index:r,children:[(0,v.jsx)(hl,{children:t.label}),t.values.map((e=>(0,v.jsxs)(Il,{children:[(0,v.jsx)(Fl,{onClick:()=>{(e=>{d(e),n(t.key,e)})(e)},children:(0,v.jsx)(Nl,{selected:s.label==e.label})}),(0,v.jsx)(El,{children:e.label})]}))),(c=a,c in l?(0,v.jsx)(Bl,{children:"This field is required"}):null)]});var c}function Rl(e){let{formSchema:t,onPriceChange:o,basePrice:n,formData:r,setFormData:a,formErrors:l}=e;(0,i.useEffect)((()=>{d(r)}),[r]);const s=(e,t)=>{a((o=>({...o,[e]:t})))},d=e=>{let i=parseFloat(n)||0,r=0;null===t||void 0===t||t.components.forEach((t=>{if(e[t.key])if("selectboxes"===t.type&&t.values)e[t.key].forEach((e=>{const o=t.values.find((t=>t.label===e)),i=!isNaN(Number(o.value));o&&o.value&&i&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")&&(r-=parseFloat(o.value.slice(1))))}));else if("select"===t.type&&t.data&&t.data.values){const o=t.data.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(o.value));o&&n&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?r-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}else if("radio"===t.type&&t.values){const o=t.values.find((o=>{var i;return o.value===(null===(i=e[t.key])||void 0===i?void 0:i.value)})),n=!isNaN(Number(o.value));o&&n&&(o.value.startsWith("+")?r+=parseFloat(o.value.slice(1)):o.value.startsWith("-")?r-=parseFloat(o.value.slice(1)):i=parseFloat(o.value))}}));const a=i+r,l=a%1!==0?a.toFixed(2):a.toFixed(0);o(l)};return(0,v.jsx)("form",{style:{width:"100%"},children:null===t||void 0===t?void 0:t.components.map(((e,t)=>((e,t)=>{switch(e.type){case"selectboxes":return(0,v.jsx)(wl,{component:e,formData:r,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"select":return(0,v.jsx)(Tl,{component:e,formData:r,handleChange:s,index:t,componentKey:e.key,formErrors:l});case"radio":return(0,v.jsx)(Ol,{component:e,formData:r,handleChange:s,index:t,componentKey:e.key,formErrors:l});default:return null}})(e,t)))})}function Dl(e){var t,o,n,l;let{productId:s,setSearchParams:d,searchParams:c}=e;const{restaurantName:p}=(0,b.g)(),u=window.location.hostname.split(".")[0],x="menugic"!==u&&"localhost"!==u&&"www"!==u?u:p,h=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]}));let g=null;const{response:m,isLoading:w}=(0,le.VL)({productId:s,onSuccess:()=>{}}),{response:$}=(0,lo.$)({productId:s});var j;((0,i.useEffect)((()=>{var e,t;null!==m&&void 0!==m&&m.en_price&&!w&&(V(parseFloat(m.en_price)),Q(parseFloat(null===m||void 0===m?void 0:m.en_price)),0===parseFloat(null===m||void 0===m||null===(e=m.category)||void 0===e?void 0:e.discount)?ee(parseFloat(null===m||void 0===m?void 0:m.discount)||0):ee(parseFloat(null===m||void 0===m||null===(t=m.category)||void 0===t?void 0:t.discount)||0))}),[w]),je().isEmpty(null===m||void 0===m?void 0:m.form_json))||(g=je().isEmpty(JSON.parse(null===m||void 0===m?void 0:m.form_json))?null===m||void 0===m||null===(j=m.category)||void 0===j?void 0:j.form_json:null===m||void 0===m?void 0:m.form_json);const[C,k]=(0,i.useState)({});(0,i.useEffect)((()=>{if(!je().isEmpty(g)){var e;const t=JSON.parse(g);if(k(t),2===(null===t||void 0===t?void 0:t.version)&&(null===t||void 0===t||null===(e=t.sizes)||void 0===e?void 0:e.length)>0){const e=parseFloat(null===m||void 0===m?void 0:m.en_price)||0,o=t.sizes.find((t=>"absolute"===t.priceMode&&Number(t.priceModifier)===e));L((()=>({...(0,ao.KE)(),sizeId:o?o.id:t.sizes[0].id})))}}}),[g]);const[A,L]=(0,i.useState)({}),[z,S]=(0,i.useState)({}),[_,T]=(0,i.useState)(!1),[P,E]=(0,i.useState)(1),[I,F]=(0,i.useState)({x:0,y:0}),[N,B]=(0,i.useState)(!1),O=(0,i.useRef)(null),R=(0,i.useRef)(null),D=e=>{e.stopPropagation(),E(1),F({x:0,y:0}),T(!0)},U=()=>{T(!1)},q=(0,y.wA)(),[M,W]=(0,i.useState)(1),[Y,H]=(0,i.useState)(!1),[X,V]=(0,i.useState)(parseFloat(null===m||void 0===m?void 0:m.en_price)||0),[K,Q]=(0,i.useState)(parseFloat(null===m||void 0===m?void 0:m.en_price)||0),[J,G]=(0,i.useState)(""),[Z,ee]=(0,i.useState)(0),te=e=>{Q(parseFloat(e)||0)},[oe,ie]=(0,i.useState)(!0),[ne,re]=(0,i.useState)(0),ae=(0,i.useRef)(!1);(0,i.useEffect)((()=>(document.body.style.overflow=oe?"hidden":"auto",()=>{document.body.style.overflow="auto"})),[oe]);const pe=e=>{if(e&&(e.preventDefault(),e.stopPropagation()),ae.current)return;ae.current=!0,document.body.style.overflow="auto";const t=new URLSearchParams(c);t.delete("productId"),window.history.replaceState({},"",`${window.location.pathname}${t.toString()?`?${t.toString()}`:""}`),d(t),ie(!1),re(0)},[ue,xe]=(0,i.useState)(!1),he=()=>{H(!0),re(ne+1)},ge=()=>{H(!0),re(ne-1)},fe=(0,i.useRef)(null),ve=(0,i.useRef)(null),[be,ye]=(0,i.useState)(null);(0,i.useEffect)((()=>{const e=()=>{pe()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const we=2===(null===C||void 0===C?void 0:C.version)&&Array.isArray(null===C||void 0===C?void 0:C.sizes);const $e=null!==h&&void 0!==h&&h.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${h.logoURL}`:null;let Ce=[...null!==(t=null===m||void 0===m?void 0:m.images)&&void 0!==t?t:[]];0===Ce.length&&$e&&(Ce=[{id:"fallback-logo",url:h.logoURL,isFallback:!0}]);const ke=Ce.findIndex((e=>e.id===(null===m||void 0===m?void 0:m.new_cover_id)));if(ke>0){const[e]=Ce.splice(ke,1);Ce.unshift(e)}const[Ae,Le]=(0,i.useState)({}),ze=e=>{Le((t=>({...t,[e]:!0})))},Se="en"===(null===h||void 0===h?void 0:h.activeLanguage)?null===m||void 0===m?void 0:m.en_description:null===m||void 0===m?void 0:m.ar_description,_e=(0,me.Q)(null===h||void 0===h?void 0:h.currency),Te=(null===h||void 0===h?void 0:h.product_details_carousel_style)||"normal";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(da,{CloseAnimation:oe,onClick:pe}),(0,v.jsxs)(ca,{CloseAnimation:oe,children:[(0,v.jsxs)(La,{CloseAnimation:oe,children:[(0,v.jsx)(Sa,{onClick:pe,CloseAnimation:oe,children:(0,v.jsx)(Ca,{})}),(0,v.jsx)(za,{activeLanguage:null===h||void 0===h?void 0:h.activeLanguage,children:w?"\u2014":"en"===(null===h||void 0===h?void 0:h.activeLanguage)?null===m||void 0===m||null===(o=m.category)||void 0===o?void 0:o.en_category:null===m||void 0===m||null===(n=m.category)||void 0===n?void 0:n.ar_category}),(0,v.jsx)(Ka,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),xe(!0),setTimeout((()=>{xe(!1)}),4e3)},CloseAnimation:oe,style:{visibility:w?"hidden":"visible"},children:ue?(0,v.jsx)(Rt.RXm,{}):(0,v.jsx)(r.zU_,{})})]}),w?(0,v.jsxs)($a,{children:[(0,v.jsx)(wa,{width:"100%",height:"40vh",radius:"16px",style:{maxWidth:"400px",marginBottom:"20px"}}),(0,v.jsx)(wa,{width:"85%",height:"28px",style:{marginBottom:"12px"}}),(0,v.jsx)(wa,{width:"45%",height:"22px",style:{marginBottom:"8px"}}),(0,v.jsx)(wa,{width:"70%",height:"14px",style:{marginBottom:"6px"}}),(0,v.jsx)(wa,{width:"60%",height:"14px"})]}):(0,v.jsxs)(i.Fragment,{children:[(0,v.jsx)(ua,{squareDimension:null===m||void 0===m?void 0:m.square_dimension,CloseAnimation:oe,children:1===Ce.length?(0,v.jsx)(ha,{ref:fe,carouselIndex:0,children:(0,v.jsx)(ga,{children:(0,v.jsxs)(ma,{children:[!Ae[0]&&(0,v.jsx)(ba,{children:(0,v.jsx)(va,{})}),(0,v.jsx)(ja,{src:null!==(l=Ce[0])&&void 0!==l&&l.url?(0,de.V)(Ce[0].url):$e||"",onLoad:()=>ze(0),onError:e=>{$e&&e.target.src!==$e&&(e.target.src=$e)},CloseAnimation:oe,Loaded:Ae[0],alt:"Image 0"}),(0,v.jsx)(Za,{onClick:D,children:(0,v.jsx)(f.gff,{})})]})})}):"normal"===Te?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(ka,{CloseAnimation:oe,onClick:()=>{H(!0),0!==ne&&ge()}}),(0,v.jsx)(Aa,{CloseAnimation:oe,onClick:()=>{H(!0),Ce.length>ne+1&&he()}}),(0,v.jsx)(ha,{carouselIndex:ne,ref:fe,onTouchStart:e=>{ye(e.touches[0].clientX)},onTouchMove:e=>{if(be){const i=e.touches[0].clientX-be;if(i>5)0!==ne&&ge();else if(i<-5){var t,o;(null!==(t=null===m||void 0===m||null===(o=m.images)||void 0===o?void 0:o.length)&&void 0!==t?t:0)>ne+1&&he()}ye(null)}},children:Ce.map(((e,t)=>(0,v.jsx)(ga,{children:(0,v.jsxs)(ma,{children:[!Ae[t]&&(0,v.jsx)(ba,{children:(0,v.jsx)(va,{})}),(0,v.jsx)(ja,{src:Ae[t]||t===ne?null!==e&&void 0!==e&&e.url?(0,de.V)(e.url):$e||"":"",onLoad:()=>ze(t),onError:e=>{$e&&e.target.src!==$e&&(e.target.src=$e)},CloseAnimation:oe,Loaded:Ae[t],alt:`Image ${t}`}),t===ne&&(0,v.jsx)(Za,{onClick:D,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))})]}):"effect-cards"===Te?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(ka,{CloseAnimation:oe,onClick:()=>{var e;H(!0),null===(e=ve.current)||void 0===e||e.slidePrev()}}),(0,v.jsx)(xa,{$closeAnimation:oe,children:(0,v.jsx)(bt.RC,{onSwiper:e=>{ve.current=e},onSlideChange:e=>{re(e.realIndex),H(!0)},modules:[yt.ZD],effect:"cards",grabCursor:!0,className:"product-details-swiper",initialSlide:0,children:Ce.map(((e,t)=>(0,v.jsx)(bt.qr,{children:(0,v.jsxs)(ma,{children:[!Ae[t]&&(0,v.jsx)(ba,{children:(0,v.jsx)(va,{})}),(0,v.jsx)(ja,{$cardSlide:!0,src:Ae[t]||t===ne?null!==e&&void 0!==e&&e.url?(0,de.V)(e.url):$e||"":"",onLoad:()=>ze(t),onError:e=>{$e&&e.target.src!==$e&&(e.target.src=$e)},CloseAnimation:oe,Loaded:Ae[t],alt:`Image ${t}`}),t===ne&&(0,v.jsx)(Za,{onClick:D,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))},null===m||void 0===m?void 0:m.id)}),(0,v.jsx)(Aa,{CloseAnimation:oe,onClick:()=>{var e;H(!0),null===(e=ve.current)||void 0===e||e.slideNext()}})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(xa,{$closeAnimation:oe,$paginationFraction:!0,children:(0,v.jsx)(bt.RC,{onSwiper:e=>{ve.current=e},onSlideChange:e=>{re(e.realIndex),H(!0)},modules:[yt.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:Ce.map(((e,t)=>(0,v.jsx)(bt.qr,{children:(0,v.jsxs)(ma,{children:[!Ae[t]&&(0,v.jsx)(ba,{children:(0,v.jsx)(va,{})}),(0,v.jsx)(ja,{$cardSlide:!0,src:Ae[t]||t===ne?null!==e&&void 0!==e&&e.url?(0,de.V)(e.url):$e||"":"",onLoad:()=>ze(t),onError:e=>{$e&&e.target.src!==$e&&(e.target.src=$e)},CloseAnimation:oe,Loaded:Ae[t],alt:`Image ${t}`}),t===ne&&(0,v.jsx)(Za,{onClick:D,children:(0,v.jsx)(f.gff,{})})]})},e.id||t)))},null===m||void 0===m?void 0:m.id)})})}),1!==Ce.length&&(0,v.jsx)(xl,{images:Ce,carouselIndex:ne,CloseAnimation:oe,carouselSwiped:Y}),(0,v.jsx)(Pa,{children:(0,v.jsx)(Ea,{children:(0,v.jsxs)(Ia,{CloseAnimation:oe,activeLanguage:h.activeLanguage,children:[(0,v.jsxs)(Fa,{activeLanguage:h.activeLanguage,children:[(0,v.jsx)(Na,{activeLanguage:h.activeLanguage,children:"en"==h.activeLanguage?null===m||void 0===m?void 0:m.en_name:null===m||void 0===m?void 0:m.ar_name}),!je().isEmpty(null===m||void 0===m?void 0:m.en_price)&&(0,v.jsxs)(Oa,{children:[(0,v.jsx)(Ra,{activeLanguage:h.activeLanguage,discounted:0!=Z,children:(0,se.T)(K,_e)}),0!=Z&&(0,v.jsx)(Da,{activeLanguage:h.activeLanguage,children:(0,se.T)(K*(1-parseFloat(Z)/100),_e)})]})]}),(0,v.jsx)(Ba,{activeLanguage:h.activeLanguage,dangerouslySetInnerHTML:{__html:Se}}),we&&(0,v.jsx)(ro.A,{options:C,formData:A,setFormData:L,formErrors:z,activeLanguage:h.activeLanguage,basePrice:null===m||void 0===m?void 0:m.en_price,onPriceChange:te}),!we&&(null===C||void 0===C?void 0:C.components)&&(0,v.jsx)(Rl,{formSchema:C,onPriceChange:te,formData:A,setFormData:L,basePrice:null===m||void 0===m?void 0:m.en_price,formErrors:z}),(0,v.jsxs)(Qa,{activeLanguage:h.activeLanguage,children:[(0,v.jsx)(Ja,{children:"en"==h.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,v.jsx)(Ga,{activeLanguage:h.activeLanguage,onChange:e=>G(e.target.value),placeholder:"en"==h.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),(0,v.jsxs)(qa,{CloseAnimation:oe,children:[(0,v.jsxs)(Ya,{CloseAnimation:oe,children:[(0,v.jsx)(Ha,{onClick:()=>{W(M+1)},children:"+"}),(0,v.jsx)(Va,{children:M}),(0,v.jsx)(Xa,{onClick:()=>{M>1&&W(M-1)},children:"-"})]}),(0,v.jsxs)(Ma,{onClick:()=>{if(we){var e;const t={};if((null===(e=C.sizes)||void 0===e?void 0:e.length)>0&&(null===A||void 0===A||!A.sizeId)&&(t.size="Please select a size."),Object.keys(t).length>0)return void S(t)}else if("{}"!==JSON.stringify(C)){const e=function(e,t){const o={},i=function(e){return e.components.filter((e=>{var t;return null===(t=e.validate)||void 0===t?void 0:t.required})).map((e=>e.key))}(e);return i.forEach((e=>{var i;e in t&&0!==(null===(i=t[e])||void 0===i?void 0:i.length)&&"{}"!==JSON.stringify(t[e])||(o[e]="This field is required.")})),o}(C,A);if(Object.keys(e).length>0)return void S(e)}let t=K*(1-parseFloat(Z)/100);setTimeout((()=>{c.delete("productId"),d(c),document.body.style.overflow="auto"}),800),q((0,ce.bE)(x,m,M,A,t,J)),ie(!1),W(1)},children:["en"==h.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",(0,v.jsx)(Wa,{children:(0,se.T)(M*(K*(1-parseFloat(Z)/100)),_e)})]})]})]})]}),_&&(0,v.jsxs)(el,{onClick:U,onTouchStart:e=>{if(2===e.touches.length){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY;R.current=Math.hypot(t,o)}else 1===e.touches.length&&(B(!0),O.current={x:e.touches[0].clientX,y:e.touches[0].clientY})},onTouchMove:e=>{if(2===e.touches.length&&R.current){const t=e.touches[0].clientX-e.touches[1].clientX,o=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(t,o),n=i/R.current;E((e=>Math.min(Math.max(e*n,1),5))),R.current=i}else if(1===e.touches.length&&N&&P>1){const t=e.touches[0],o=t.clientX-O.current.x,i=t.clientY-O.current.y;F((e=>({x:e.x+o/P,y:e.y+i/P}))),O.current={x:t.clientX,y:t.clientY}}},onTouchEnd:()=>{B(!1),R.current=null,O.current=null},children:[(0,v.jsx)(tl,{onClick:U,children:(0,v.jsx)(a.$8F,{})}),(0,v.jsx)(ol,{src:(()=>{const e=Ce[ne];return e&&null!==e&&void 0!==e&&e.url?(0,de.V)(e.url):$e||""})(),alt:"Zoomed",$scale:P,$translateX:I.x,$translateY:I.y,$dragging:N,onClick:e=>e.stopPropagation(),onDoubleClick:()=>{P>1?(E(1),F({x:0,y:0})):E(2.5)}})]})]})}const Ul=n.Ay.div`
position: fixed;
bottom: ${e=>"share"==e.showPopup?"0%":"-100%"};
background-color: ${e=>e.theme.popupbackgroundColor};
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 5;
padding-bottom: 10vh;
`,ql=n.Ay.div`
width: 80%;
display: flex;
flex-direction: column;
padding-top:40px;
`,Ml=n.Ay.pre`
  font-size: 14px;
  text-align: center;
  color: ${e=>e.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`,Wl=(n.Ay.a`
  color: ${e=>e.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`,(0,n.Ay)(f.Pxy)`
color: ${e=>e.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`),Yl=(0,n.Ay)(we.WQq)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${e=>e.theme.popupTextColor}

`,Hl=n.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor}

`,Xl=n.Ay.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${e=>e.theme.popupTextColor};
margin-top: 20px;
`,Vl=n.Ay.div`
display: flex;
flex-direction: row;
gap:15px;
margin-top: 20px;


`,Kl=n.Ay.div`
display: flex;
flex-direction: column;
gap:5px;
align-items: center;
justify-content: center;

`,Ql=n.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #8bffb83d;
`,Jl=(0,n.Ay)(r.EcP)`
font-size: 24px;
color:#51C288;
`,Gl=n.Ay.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background: linear-gradient(45deg, 
    rgba(254, 218, 117, 0.2),  /* Light Yellow */
    rgba(250, 126, 30, 0.2),   /* Orange */
    rgba(214, 41, 118, 0.2),   /* Pink */
    rgba(150, 47, 191, 0.2),   /* Purple */
    rgba(79, 91, 213, 0.2)     /* Blue */
  );

background-size: 300% 300%; /* Creates a smooth animated effect */`,Zl=(0,n.Ay)(r.ao$)`
font-size: 24px;
/* color:#51C288; */
color:#5c595b;



`,es=n.Ay.span`
font-size: 10px;
color:${e=>e.theme.popupTextColor}

`,ts=n.Ay.div`
width: 100%;
margin-top: 20px;
background-color: ${e=>e.theme.mainColor};
display: flex;
align-items: center;
position: relative;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 5px;
border-radius: 5px;

`,os=n.Ay.div`
width: 85%;
overflow: hidden;

`,is=n.Ay.span`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
white-space: nowrap;
`,ns=(0,n.Ay)(r.zU_)`
font-size: 15px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`,rs=(0,n.Ay)(Rt.RXm)`
font-size: 18px;
color:${e=>e.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`;function as(e){let{showPopup:t,popupHandler:o,activeCategory:n}=e;const{restaurantName:r}=(0,b.g)(),a=window.location.hostname.split(".")[0],l="menugic"!==a&&"localhost"!==a&&"www"!==a?a:r;(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[l].activeLanguage}));(0,i.useEffect)((()=>{const e=()=>{o(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const[s,d]=(0,i.useState)(!1);return(0,v.jsxs)(Ul,{showPopup:t,children:[(0,v.jsx)(Yl,{onClick:()=>{o(null)}}),(0,v.jsxs)(ql,{children:[(0,v.jsx)(Hl,{children:"Share Category"}),(0,v.jsxs)(Vl,{children:[(0,v.jsxs)(Kl,{children:[(0,v.jsx)(Ql,{onClick:()=>(e=>{const t=window.location.origin+window.location.pathname,o=`https://api.whatsapp.com/send?text=${encodeURIComponent(t+"?categoryId="+e)}`;window.open(o,"_blank")})(n),children:(0,v.jsx)(Jl,{})}),(0,v.jsx)(es,{children:"Whatsapp"})]}),(0,v.jsxs)(Kl,{children:[(0,v.jsx)(Gl,{onClick:()=>{window.open("https://www.instagram.com/direct/inbox/","_blank")},children:(0,v.jsx)(Zl,{})}),(0,v.jsx)(es,{children:"Instagram"})]})]}),(0,v.jsx)(Xl,{children:"Get Link"}),(0,v.jsxs)(ts,{children:[(0,v.jsx)(os,{children:(0,v.jsx)(is,{children:(e=>{if(e){return window.location.origin+window.location.pathname+"?categoryId="+e}})(n)})}),s?(0,v.jsx)(rs,{}):(0,v.jsx)(ns,{onClick:()=>(e=>{const t=window.location.origin+window.location.pathname;navigator.clipboard.writeText(t+"?categoryId="+e),d(!0),setTimeout((()=>{d(!1)}),4e3)})(n)})]})]}),(0,v.jsxs)(Ml,{children:["Copyright",(0,v.jsx)(Wl,{}),"2024 ",(0,v.jsx)($.N_,{href:"https://www.menugic.com",children:"menugic.com"})]})]})}const ls=n.i7`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`,ss=n.Ay.div`
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
  animation: ${ls} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`,ds=n.Ay.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${e=>e.theme.popupTextColor};;

`,cs=n.Ay.div`
  display: flex;
  gap: 10px;
`,ps=n.Ay.button`
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
`,us=n.Ay.button`
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

`,xs=e=>{let{onInstall:t,onDismiss:o,restaurantName:i,showInstallPopup:n}=e;return(0,v.jsxs)(ss,{showInstallPopup:n,children:[(0,v.jsxs)(ds,{children:["Access ",(0,v.jsx)("b",{children:i})," anytime with one tap ",(0,v.jsx)("b",{children:"Install The App!"})]}),(0,v.jsxs)(cs,{children:[(0,v.jsx)(ps,{onClick:t,children:"Install"}),(0,v.jsx)(us,{onClick:o,children:"Dismiss"})]})]})},hs=n.Ay.div`
  width: 100%;
  padding: 12px 4%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${e=>e.theme.backgroundColor};
  
  @media (min-width: 768px) {
    padding: 16px 5%;
  }
`,gs=n.Ay.div`
  display: grid;
  grid-template-columns: ${e=>e.showOnePerLine?"1fr":"repeat(3, 1fr)"};
  gap: 8px;
  width: 100%;
  
  @media (min-width: 480px) {
    gap: 10px;
  }
  
  @media (min-width: 768px) {
    gap: 12px;
  }
  
  @media (min-width: 1024px) {
    gap: 14px;
  }
`,ms=n.Ay.div`
  display: flex;
  flex-direction: ${e=>e.showOnePerLine?"row":"column"};
  align-items: ${e=>(e.showOnePerLine,"center")};
  justify-content: ${e=>e.showOnePerLine?"flex-start":"center"};
  padding: ${e=>e.showOnePerLine?"12px 16px":"12px 10px"};
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: ${e=>e.showOnePerLine?"auto":"85px"};
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.04);
  gap: ${e=>e.showOnePerLine?"20px":"0"};
  direction: ${e=>e.showOnePerLine&&"ar"===e.activeLanguage?"rtl":"ltr"};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${e=>e.theme.mainColor||"#007bff"}15 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    border-color: ${e=>e.theme.mainColor||"#007bff"}30;
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-4px) scale(1.01);
    transition: all 0.15s ease;
  }
  
  @media (min-width: 768px) {
    padding: ${e=>e.showOnePerLine?"14px 20px":"16px 14px"};
    min-height: ${e=>e.showOnePerLine?"auto":"100px"};
    gap: ${e=>e.showOnePerLine?"16px":"0"};
  }
`,fs=n.Ay.div`
  width: ${e=>e.showOnePerLine?"60px":"65px"};
  height: ${e=>e.showOnePerLine?"60px":"65px"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.categoryActive};
  margin-bottom: ${e=>e.showOnePerLine?"0":"10px"};
  margin-right: ${e=>(e.showOnePerLine&&e.activeLanguage,"0")};
  margin-left: ${e=>(e.showOnePerLine&&e.activeLanguage,"0")};
  flex-shrink: 0;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 1;
  order: ${e=>e.showOnePerLine&&"ar"===e.activeLanguage?"2":"1"};
  
  ${ms}:hover & {
    background: ${e=>e.theme.categoryActiveIcon||e.theme.mainColor||"#007bff"};
    transform: scale(1.1);
    box-shadow: 0 4px 16px ${e=>e.theme.mainColor||"#007bff"}40;
  }
  
  @media (min-width: 768px) {
    width: ${e=>e.showOnePerLine?"70px":"75px"};
    height: ${e=>e.showOnePerLine?"70px":"75px"};
    margin-bottom: ${e=>e.showOnePerLine?"0":"12px"};
  }
`,vs=n.Ay.img`
  width: 42px;
  height: 42px;
  object-fit: contain;
  transition: transform 0.35s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  color: ${e=>e.theme.categoryActiveIcon||"#333333"};
  ${ms}:hover & {
    transform: scale(1.1);
  }
  
  @media (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`,bs=n.Ay.div`
  font-size: ${e=>e.showOnePerLine?"14px":"13px"};
  font-weight: 600;
  color: ${e=>e.theme.categoryActiveText||"#333333"};
  text-align: ${e=>e.showOnePerLine?"ar"===e.activeLanguage?"right":"left":"center"};
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.3;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  letter-spacing: 0.1px;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  flex: 1;
  display: flex;
  align-items: center;
  order: ${e=>e.showOnePerLine&&"ar"===e.activeLanguage?"1":"2"};
  
  ${ms}:hover & {
    color: ${e=>e.theme.mainColor||"#007bff"};
  }
  
  @media (min-width: 768px) {
    font-size: ${e=>e.showOnePerLine?"16px":"14px"};
    line-height: 1.4;
  }
`,ys=e=>{let{category:t,logoURL:o,activeLanguage:n,showOnePerLine:r,onCategoryClick:a}=e;const[l,s]=(0,i.useState)(!1),d=t.image_url?(0,de.V)(t.image_url):null;return(0,v.jsxs)(ms,{onClick:()=>a(t.id),showOnePerLine:r,activeLanguage:n,children:[(0,v.jsx)(fs,{showOnePerLine:r,activeLanguage:n,children:(0,v.jsx)(vs,{src:l||!d?o:d,alt:"en"===n?t.en_category:t.ar_category,onError:()=>s(!0)})}),(0,v.jsx)(bs,{activeLanguage:n,showOnePerLine:r,children:"en"===n?t.en_category:t.ar_category})]})};function ws(e){let{categories:t,onCategoryClick:o}=e;const{restaurantName:i}=(0,b.g)(),n=window.location.hostname.split(".")[0],r="menugic"!==n&&"localhost"!==n&&"www"!==n?n:i,a=(0,y.d4)((e=>{var t,o;return null===(t=e.restaurant)||void 0===t||null===(o=t[r])||void 0===o?void 0:o.activeLanguage})),l=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[r]})),s=((null===t||void 0===t?void 0:t.length)||0)<9,d=null!==l&&void 0!==l&&l.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${l.logoURL}`:null;return(0,v.jsx)(hs,{children:(0,v.jsx)(gs,{showOnePerLine:s,children:null===t||void 0===t?void 0:t.sort(((e,t)=>t.priority-e.priority)).map((e=>(0,v.jsx)(ys,{category:e,logoURL:d,activeLanguage:a,showOnePerLine:s,onCategoryClick:o},e.id)))})})}const $s=n.Ay.div`
  width: 100%;
  background-color: ${e=>e.theme.backgroundColor||e.theme.backgroundcolor||"#F6F5F5"};
  position: relative;
  z-index: 100;
  margin-bottom: 0;
`,js=(n.Ay.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  padding: 12px 5%;
  min-height: 50px;
  
  @media (min-width: 768px) {
    padding: 14px 5%;
    min-height: 60px;
  }
`,n.Ay.div`
  position: absolute;
  left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  @media (min-width: 768px) {
    left: 5%;
  }
`,n.Ay.img`
  max-width: 200px;
  max-height: 60px;
  object-fit: contain;
  
  @media (min-width: 768px) {
    max-width: 250px;
    max-height: 70px;
  }
`,n.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1;
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    gap: 16px;
  }
`),Cs=(n.Ay.div`
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  font-size: 27px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,n.Ay.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${e=>e.theme.mainColor||"#333333"};
  font-size: 18px;
  
  &:hover {
    transform: scale(1.1);
    color: ${e=>e.theme.mainColor||"#007bff"};
  }
  
  &:active {
    transform: scale(1);
  }
  
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
`,n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 0;
  min-height: 44px;
  
  @media (min-width: 768px) {
    padding: 14px 0;
  }
`),ks=n.Ay.div`
  width: 100%;
  padding: 0 5% 14px 5%;
  
  @media (min-width: 768px) {
    padding: 0 5% 16px 5%;
  }
`,As=n.Ay.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (min-width: 768px) {
    height: 52px;
    gap: 12px;
  }
`,Ls=n.Ay.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: ${e=>e.theme.searchbackground||e.theme.backgroundColor||"#ffffff"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:focus-within {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }
`,zs=n.Ay.div`
  position: absolute;
  left: ${e=>"en"===e.activeLanguage?"16px":"auto"};
  right: ${e=>"en"===e.activeLanguage?"auto":"16px"};
  font-size: 20px;
  color: ${e=>e.theme.searchTextColor||"#999999"};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ss=n.Ay.input`
  width: 100%;
  height: 100%;
  background-color: ${e=>e.theme.searchbackground||e.theme.backgroundColor||"#ffffff"};
  border: 1px solid rgba(0, 0, 0, 0.08);
  outline: none;
  padding-left: ${e=>"en"===e.activeLanguage?"48px":"16px"};
  padding-right: ${e=>"en"===e.activeLanguage?"16px":"48px"};
  color: ${e=>e.theme.searchTextColor||e.theme.textColor||"#333333"};
  font-size: 15px;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${e=>e.theme.searchTextColor||"#999999"};
    opacity: 0.6;
  }

  &:focus {
    border-color: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}40`};
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,_s=n.Ay.button`
  background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}20`};
  border: 1px solid ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 44px;
  min-height: 44px;
  flex-shrink: 0;
  
  &:hover {
    background: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}30`};
    border-color: ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}50`};
    transform: translateX(-1px);
    box-shadow: 0 2px 6px ${e=>`${e.theme.mainColor||e.theme.maincolor||"#007bff"}25`};
  }
  
  &:active {
    transform: translateX(0) scale(0.98);
    transition: all 0.1s ease;
  }
  
  @media (min-width: 768px) {
    padding: 11px;
    border-radius: 11px;
  }
`,Ts=n.Ay.div`
  font-size: 20px;
  color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 22px;
  }
`,Ps=n.Ay.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.textColor||e.theme.textcolor||"#1a1a1a"};
  margin: 0;
  flex: 1;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  letter-spacing: -0.2px;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 4px;
  
  @media (min-width: 768px) {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.3px;
    padding: 0 6px;
  }
`,Es=n.Ay.button`
  height: 100%;
  min-width: 64px;
  font-size: 14px;
  padding: 0 16px;
  border-radius: 12px;
  font-weight: 500;
  gap: 6px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.searchbackground||e.theme.backgroundColor||"#ffffff"};
  color: ${e=>e.theme.searchTextColor||e.theme.textColor||"#333333"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.08);
  outline: none;
  -webkit-tap-highlight-color: transparent;
  flex-shrink: 0;
  
  &:hover {
    background-color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"}15;
    color: ${e=>e.theme.mainColor||e.theme.maincolor||"#007bff"};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: translateY(0);
    transition: all 0.15s ease;
  }

  @media (min-width: 768px) {
    min-width: 72px;
    padding: 0 18px;
    font-size: 15px;
  }
`,Is=n.Ay.div`
  color: inherit;
  font-size: 18px;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Es}:hover & {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;function Fs(e){let{categoryId:t,categories:o,onBack:i,searchText:n,setSearchText:r,setshowSidebar:l,showSidebar:s,popupHandler:d}=e;const{restaurantName:p}=(0,b.g)(),u=((0,y.wA)(),window.location.hostname.split(".")[0]),x="menugic"!==u&&"localhost"!==u&&"www"!==u?u:p,h=((0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]})),(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[x])||void 0===o?void 0:o.activeLanguage)||"en"}))),g=null===o||void 0===o?void 0:o.find((e=>e.id==t||e.id===t)),m=g?"en"===h?g.en_category:g.ar_category:"Category";return(0,v.jsxs)($s,{children:[(0,v.jsxs)(Cs,{children:[(0,v.jsx)(_s,{onClick:i,"aria-label":"Back to categories",children:(0,v.jsx)(Ts,{as:a.NEn})}),(0,v.jsx)(Ps,{activeLanguage:h,children:m}),(0,v.jsx)(js,{})]}),(0,v.jsx)(ks,{children:(0,v.jsxs)(As,{children:[(0,v.jsxs)(Ls,{children:[(0,v.jsx)(zs,{activeLanguage:h,children:(0,v.jsx)(c.Xj1,{})}),(0,v.jsx)(Ss,{type:"text",activeLanguage:h,dir:"en"===h?"ltr":"rtl",placeholder:"en"===h?"Search Products":"\u0627\u0644\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",onChange:e=>{r(e.target.value)},value:n||""})]}),(0,v.jsxs)(Es,{onClick:()=>{window.history.pushState({},""),d("share")},activeLanguage:h,children:["en"===h&&(0,v.jsx)(Is,{children:(0,v.jsx)(a.LZ_,{})}),"en"===h?"Share":"\u0646\u0634\u0631","en"!==h&&(0,v.jsx)(Is,{children:(0,v.jsx)(a.LZ_,{})})]})]})})]})}const Ns=n.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Bs=n.Ay.div`
  width: 100%;
  min-height: 100vh;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  animation: ${Ns} 0.5s ease-in;
  position: relative;
  display: flex;
  flex-direction: column;
`,Os=(n.Ay.section`
  width: 100%;
  padding: 32px 48px 0px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  background: ${e=>e.theme.heroSectionBackgroundColor||e.theme.homepageBackgroundColor||e.theme.backgroundColor||"#f8f9fa"};
  
  @media (min-width: 768px) {
    padding: 44px 5%;
  }
`,n.Ay.img`
  max-width: 430px;
  max-height: 320px;
  object-fit: contain;
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    max-width: 520px;
    max-height: 390px;
    margin-bottom: 32px;
  }
`,n.Ay.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 16px 0px;
  margin-bottom: 24px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  position: relative;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.homepageCategoriesBackgroundColor)||"transparent"}};
  
  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  /* Scrollable indicator gradient - right side for LTR, left side for RTL */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    ${e=>"ar"===e.activeLanguage?"left: 0;":"right: 0;"}
    width: 60px;
    
    pointer-events: none;
    z-index: 1;
    opacity: ${e=>e.showScrollIndicator?.6:0};
    transition: opacity 0.3s ease;
  }
  
  /* Show indicator when content is scrollable and hovering */
  &:hover::after {
    opacity: ${e=>e.showScrollIndicator?.9:0};
  }
  
  @media (min-width: 768px) {
    padding: 24px 0px;
    margin-bottom: 32px;
    
    &::after {
      width: 70px;
    }
  }
`,n.Ay.div`
  position: absolute;
  ${e=>"ar"===e.activeLanguage?"left: 20px;":"right: 20px;"}
  top: 95%;
  transform: translateY(-50%);
  font-size: 12px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#666"}};
  opacity: 0.7;
  white-space: nowrap;
  pointer-events: none;
  z-index: 2;
  animation: fadeInOut 2s ease-in-out infinite;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.4;
    }
  }
  
  @media (min-width: 768px) {
    ${e=>"ar"===e.activeLanguage?"left: 30px;":"right: 30px;"}
    font-size: 13px;
  }
`,n.Ay.div`
  display: flex;
  gap: 0px;
  padding: 0;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  align-items: flex-start;
  width: max-content;
  
  @media (min-width: 768px) {
    gap: 15px;
  }
`,n.Ay.button`
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 56px;
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.slidingButtonTextColor||"#ffffff"};
  background: ${e=>e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff"};
  border: none;
  border-radius: 14px;
  padding: 0;
  cursor: ${e=>e.swipeProgress>=.6?"pointer":"default"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  box-shadow: 0 4px 16px ${e=>{const t=e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff";return t?`${t}40`:"rgba(0, 123, 255, 0.4)"}};
  margin: 32px auto;
  overflow: hidden;
  user-select: none;
  display: block;
  
  &:hover {
    ${e=>e.swipeProgress>=.6?`\n      background: ${e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#0056b3"};\n      transform: translateY(-2px);\n      box-shadow: 0 6px 20px ${e=>{const t=e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff";return t?`${t}50`:"rgba(0, 123, 255, 0.5)"}};\n    `:""}
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    max-width: 380px;
    height: 64px;
    font-size: 18px;
    margin: 32px auto;
  }
`,n.Ay.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: ${e=>"ar"===e.activeLanguage?"translate(calc(-50% - 30px), -50%)":"translate(-50%, -50%)"};
  transition: opacity 0.3s ease;
  opacity: ${e=>1-e.swipeProgress};
  white-space: nowrap;
  z-index: 2;
  margin: 0px 20px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  color: ${e=>e.theme.slidingButtonTextColor||"#ffffff"};
  
  @media (min-width: 768px) {
    transform: ${e=>"ar"===e.activeLanguage?"translate(calc(-50% - 35px), -50%)":"translate(-50%, -50%)"};
  }
`,n.Ay.div`
  position: absolute;
  ${e=>{const t=16+240*e.swipeProgress;return"ar"===e.activeLanguage?`right: ${t}px;`:`left: ${t}px;`}}
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  &:hover {
    background: rgba(255, 255, 255, 0.35);
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 22px;
    ${e=>{const t=20+324*e.swipeProgress;return"ar"===e.activeLanguage?`right: ${t}px;`:`left: ${t}px;`}}
  }
`,n.Ay.div`
  position: fixed;
  top: 20px;
  ${e=>"ar"===e.activeLanguage?"left: 20px;":"right: 20px;"}
  z-index: 1000;
  
  @media (min-width: 768px) {
    top: 30px;
    ${e=>"ar"===e.activeLanguage?"left: 30px;":"right: 30px;"}
  }
`,n.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 10px;
  width: 60px;
  height: 25px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,n.Ay.div`
  width: 100%;
  background-color: ${e=>e.theme.languagebackground||"#f0f0f0"};
  opacity: 0.6;
  position: absolute;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
`,n.Ay.div`
  position: absolute;
  background-color: ${e=>e.theme.languagebackground||"#f0f0f0"};
  left: ${e=>"en"===e.activeLanguage?"0px":"32px"};
  transition: all ease-in-out 0.2s;
  height: 100%;
  width: 50%;
  z-index: 2;
  border-radius: 10px;
`,n.Ay.div`
  z-index: 3;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: ${e=>e.activeLanguage===e.language?e.theme.mainColor||"#007bff":e.theme.languageTextColor||"#333333"};
  transition: color 0.2s ease;
  user-select: none;
  
  &:hover {
    color: ${e=>e.theme.mainColor||"#007bff"};
  }
`,n.Ay.section`
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`,n.Ay.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${e=>e.theme.mainColor||"#007bff"};
`,n.Ay.div`
  display: flex;
  width: 100%;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
`,n.Ay.div`
  min-width: 100%;
  width: 100%;
  flex-shrink: 0;
  opacity: ${e=>e.active?1:0};
  transition: opacity 0.5s ease;
  display: ${e=>e.active?"block":"none"};
`,n.Ay.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  display: block;
  
  @media (min-width: 768px) {
    height: 60vh;
  }
  
  @media (min-width: 1024px) {
    height: 70vh;
  }
`,n.Ay.button`
  position: absolute;
  top: 50%;
  ${e=>"prev"===e.direction?"ar"===e.activeLanguage?"right: 20px;":"left: 20px;":"ar"===e.activeLanguage?"left: 20px;":"right: 20px;"}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  color: ${e=>e.theme.mainColor||"#007bff"};
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  &:hover {
    background: #ffffff;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
    font-size: 28px;
    ${e=>"prev"===e.direction?"ar"===e.activeLanguage?"right: 30px;":"left: 30px;":"ar"===e.activeLanguage?"left: 30px;":"right: 30px;"}
  }
`,n.Ay.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
  
  @media (min-width: 768px) {
    bottom: 30px;
    gap: 12px;
  }
`,n.Ay.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.active?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  
  &:hover {
    background: ${e=>e.active?"#ffffff":"rgba(255, 255, 255, 0.8)"};
    transform: scale(1.2);
  }
  
  @media (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`,n.Ay.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.textColor||"#1a1a1a"};
  margin: 0 0 24px 0;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 32px;
  }
`,n.Ay.section`
  width: 100%;
  padding: 20px 0px;
  max-width: 1200px;
  margin: 0 auto;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    padding: 60px 5%;
  }
`,n.Ay.div`
  min-width: 120px;
  width: 120px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  gap: 10px;
  
  &:hover {
    transform: translateY(-4px) scale(1.05);
  }
  
  @media (min-width: 768px) {
    min-width: 160px;
    width: 160px;
    gap: 14px;
  }
`),Rs=(n.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${e=>e.theme.BoxColor||"#ffffff"};
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  flex-direction: ${e=>(e.isEven,"ar"===e.activeLanguage?"row-reverse":"row")};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${e=>e.isEven?"ar"===e.activeLanguage?"right: 0;":"left: 0;":"ar"===e.activeLanguage?"left: 0;":"right: 0;"}
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, ${e=>e.theme.mainColor||"#007bff"} 0%, ${e=>e.theme.mainColor||"#0056b3"} 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (min-width: 768px) {
    padding: 22px 26px;
    gap: 26px;
  }
`,n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,n.Ay.h3`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.textColor||"#1a1a1a"};
  margin: 0;
  line-height: 1.3;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  max-width: 90px;
  text-align: center;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  
  @media (min-width: 768px) {
    font-size: 14px;
    max-width: 120px;
  }
`,n.Ay.p`
  font-size: 13px;
  font-weight: 400;
  color: ${e=>e.theme.textColor||"#666"};
  margin: 6px 0 0 0;
  line-height: 1.5;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 8px;
  }
`,n.Ay.img`
  width: 84px;
  height: 84px;
  border-radius: 16px;    
  padding: 8px;
  object-fit: contain;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid ${e=>e.theme.mainColor||"#007bff"}20;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
  
  ${Os}:hover & {
    transform: scale(1.05) rotate(${e=>e.isEven?"-5deg":"5deg"});
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: ${e=>e.theme.mainColor||"#007bff"}40;
  }
  
  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    border-radius: 22px;
  }
`,n.Ay.button`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  background: ${e=>e.theme.mainColor||"#007bff"};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px ${e=>e.theme.mainColor?`${e.theme.mainColor}30`:"rgba(0, 123, 255, 0.3)"};
  display: block;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${e=>e.theme.mainColor?`${e.theme.mainColor}40`:"rgba(0, 123, 255, 0.4)"};
    background: ${e=>e.theme.mainColor||"#0056b3"};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    padding: 16px 36px;
    font-size: 16px;
    max-width: 440px;
  }
`,n.Ay.section`
  width: 100%;
  padding: 40px 16px;
  background: ${e=>{var t,o,i;return(null===(t=e.theme)||void 0===t?void 0:t.valueCardsSectionBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.homepageBackgroundColor)||(null===(i=e.theme)||void 0===i?void 0:i.backgroundColor)||"#ffffff"}};
  direction: ${e=>"ar"===e.$activeLanguage?"rtl":"ltr"};
  @media (min-width: 768px) {
    padding: 56px 16px;
  }
`),Ds=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`,Us=n.Ay.div`
  text-align: center;
  margin-bottom: 32px;
`,qs=n.Ay.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  margin: 0 0 12px 0;
`,Ms=(n.Ay.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
  margin: 0;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`,n.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`),Ws=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  text-align: left;
  padding: 18px 16px;
  border-radius: 12px;
  background: ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.valueCardBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.backgroundColor)||"#f8f9fa"}};
  border-left: 4px solid ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  direction: ${e=>"ar"===e.$activeLanguage?"rtl":"ltr"};
  &:hover {
    background: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}08`:"rgba(0, 123, 255, 0.04)"}};
    border-left-width: 6px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  }
  @media (min-width: 768px) {
    padding: 20px 20px;
    gap: 18px;
  }
`,Ys=Ws,Hs=n.Ay.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 50%;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  ${Ws}:hover & {
    transform: scale(1.08);
    box-shadow: 0 4px 12px ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}40`:"rgba(0, 123, 255, 0.25)"}};
  }
`,Xs=n.Ay.div`
  flex: 1;
  min-width: 0;
`,Vs=n.Ay.h3`
  font-size: 1.0625rem;
  font-weight: 600;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
  margin: 0 0 6px 0;
`,Ks=n.Ay.p`
  font-size: 13px;
  line-height: 1.5;
  color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?`${e.theme.textColor}99`:"#666"}};
  margin: 0;
`,Qs=n.Ay.section`
  width: 100%;
  padding: 40px 16px;
  background: ${e=>{var t,o,i;return(null===(t=e.theme)||void 0===t?void 0:t.featuredProductsSectionBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.homepageBackgroundColor)||(null===(i=e.theme)||void 0===i?void 0:i.backgroundColor)||"#f8f9fa"}};
  direction: ${e=>"ar"===e.$activeLanguage?"rtl":"ltr"};
  @media (min-width: 768px) {
    padding: 56px 16px;
  }
`,Js=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`,Gs=n.Ay.div`
  background: ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.valueCardBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.backgroundColor)||"#ffffff"}};
  border-radius: 24px;
  border: 1px solid ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}18`:"rgba(0, 123, 255, 0.1)"}};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  padding: 32px 24px;
  @media (min-width: 768px) {
    padding: 48px;
  }
`,Zs=n.Ay.div`
  text-align: center;
`,ed=n.Ay.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
  margin: 0 0 6px 0;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`,td=n.Ay.p`
  font-size: 14px;
  color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?`${e.theme.textColor}99`:"#666"}};
  margin: 0 0 24px 0;
`,od=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 24px;
  @media (min-width: 768px) {
    gap: 16px;
    margin-top: 32px;
  }
`,id=n.Ay.div`
  padding: 16px;
  border-radius: 12px;
  background: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}08`:"rgba(0, 123, 255, 0.04)"}};
`,nd=n.Ay.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  margin: 0;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,rd=n.Ay.p`
  font-size: 11px;
  color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?`${e.theme.textColor}99`:"#666"}};
  margin: 4px 0 0 0;
`,ad=n.Ay.section`
  width: 100%;
  padding: 40px 16px;
  background: ${e=>{var t,o,i;return(null===(t=e.theme)||void 0===t?void 0:t.categoriesSectionBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.homepageBackgroundColor)||(null!==(i=e.theme)&&void 0!==i&&i.mainColor?`${e.theme.mainColor}08`:"rgba(0, 123, 255, 0.04)")}};
  direction: ${e=>"ar"===e.$activeLanguage?"rtl":"ltr"};
  @media (min-width: 768px) {
    padding: 56px 16px;
  }
`,ld=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`,sd=n.Ay.div`
  text-align: center;
  margin-bottom: 28px;
`,dd=n.Ay.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  margin: 0 0 12px 0;
`,cd=(n.Ay.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
  margin: 0;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`,n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 672px;
  margin: 0 auto;
  @media (min-width: 768px) {
    gap: 20px;
  }
`),pd=n.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-radius: 9999px;
  background: ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.BoxColor)||(null===(o=e.theme)||void 0===o?void 0:o.categoryUnActive)||"#ffffff"}};
  border: 1px solid ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.12)"}};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    border-color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}40`:"rgba(0, 123, 255, 0.2)"}};
    transform: translateY(-2px);
  }
`,ud=n.Ay.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?`${e.theme.textColor}99`:"#666"}};
  transition: color 0.3s ease;
  ${pd}:hover & {
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  }
  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    border-radius: 4px;
  }
`,xd=n.Ay.span`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
`,hd=n.Ay.div`
  text-align: center;
  margin-top: 48px;
`,gd=n.Ay.button`
  width: 55%;
  max-width: 280px;
  height: 48px;
  margin: 18px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.slidingButtonTextColor)||"#ffffff"}};
  background: ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.slidingButtonBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||"#007bff"}};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.$activeLanguage?"rtl":"ltr"};
  font-family: inherit;
  box-shadow: 0 4px 16px ${e=>{var t,o;const i=(null===(t=e.theme)||void 0===t?void 0:t.slidingButtonBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||"#007bff";return i?`${i}40`:"rgba(0, 123, 255, 0.4)"}};
  &:hover {
    background: ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.slidingButtonBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||"#0056b3"}};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${e=>{var t,o;const i=(null===(t=e.theme)||void 0===t?void 0:t.slidingButtonBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||"#007bff";return i?`${i}50`:"rgba(0, 123, 255, 0.5)"}};
  }
  &:active {
    transform: translateY(0);
  }
  @media (min-width: 768px) {
    max-width: 320px;
    height: 52px;
    font-size: 16px;
    margin: 24px auto 0;
  }
`,md=(n.Ay.section`
  width: 100%;
  padding: 0px 20px 0px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: ${e=>e.theme.locationsSectionBackgroundColor||e.theme.homepageBackgroundColor||e.theme.backgroundColor||"#f8f9fa"};
  
  @media (min-width: 768px) {
    padding: 24px 5%;
  }
`,n.Ay.div`
  background: ${e=>e.theme.hplocationBackgroundColor||e.theme.categoryUnActive||"#ffffff"};
  border-radius: 12px;
  padding: 8px 16px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${e=>"ar"===e.activeLanguage?"right: 0;":"left: 0;"}
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, ${e=>e.theme.mainColor||"#007bff"} 0%, ${e=>e.theme.mainColor||"#0056b3"} 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 123, 255, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    padding: 14px 20px;
    margin-bottom: 12px;
  }
`,n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`),fd=n.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
`,vd=n.Ay.div`
  position: relative;
  background: #ffffff;
  border-radius: 20px;
  padding: 32px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  animation: ${Ns} 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 40px;
    max-width: 450px;
  }
`,bd=n.Ay.button`
  position: absolute;
  top: 16px;
  ${e=>"ar"===e.activeLanguage?"left: 16px;":"right: 16px;"}
  background: transparent;
  border: none;
  font-size: 32px;
  color: #999;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f0f0f0;
    color: #333;
    transform: rotate(90deg);
  }
`,yd=n.Ay.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.textColor||"#1a1a1a"};
  margin: 0 0 24px 0;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 28px;
  }
`,wd=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,$d=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: center;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,jd=n.Ay.p`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.textColor||"#666"};
  margin: 0;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  text-align: center;
  
  ${e=>e.location&&`\n    font-weight: 400;\n    line-height: 1.6;\n    color: ${e.theme.textColor||"#555"};\n    margin-top: 4px;\n  `}
  
  @media (min-width: 768px) {
    font-size: 15px;
  }
`,Cd=n.Ay.a`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.whatsapp?"#25D366":e.theme.mainColor||"#007bff"};
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  text-align: center;
  
  &:hover {
    color: ${e=>e.whatsapp?"#128C7E":e.theme.mainColor||"#0056b3"};
    text-decoration: underline;
  }
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`,kd=n.Ay.a`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: ${e=>e.theme.mainColor||"#007bff"};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  box-shadow: 0 2px 8px ${e=>e.theme.mainColor?`${e.theme.mainColor}30`:"rgba(0, 123, 255, 0.3)"};
  margin-top: 8px;
  width: 70%;
  max-width: 280px;
  
  &:hover {
    background: ${e=>e.theme.mainColor||"#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${e=>e.theme.mainColor?`${e.theme.mainColor}40`:"rgba(0, 123, 255, 0.4)"};
    text-decoration: none;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    font-size: 17px;
    padding: 16px 36px;
  }
`,Ad=(n.Ay.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.hplocationTextColor||e.theme.textColor||"#1a1a1a"};
  margin: 0;
  text-align: left;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  letter-spacing: -0.02em;
  line-height: 1.3;
  flex: 1;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`,n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: nowrap;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    gap: 12px;
  }
`,n.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  
  background: ${e=>e.whatsapp?"rgba(37, 211, 102, 0.12)":e.location||e.map?"rgba(0, 123, 255, 0.12)":e.theme.mainColor?`${e.theme.mainColor}12`:"rgba(0, 123, 255, 0.12)"};
  
  color: ${e=>e.whatsapp?"#25D366":(e.location||e.map,e.theme.mainColor||"#007bff")};
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    background: ${e=>e.whatsapp?"rgba(37, 211, 102, 0.2)":(e.location||e.map,e.theme.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.2)")};
    box-shadow: 0 4px 12px ${e=>e.whatsapp?"rgba(37, 211, 102, 0.3)":e.theme.mainColor?`${e.theme.mainColor}30`:"rgba(0, 123, 255, 0.3)"};
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  @media (min-width: 768px) {
    width: 52px;
    height: 52px;
    font-size: 22px;
  }
`,n.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 14px;
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  border-radius: 10px;
  transition: all 0.3s ease;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  gap: 10px;
  
  &:hover {
    background: ${e=>e.theme.mainColor?`${e.theme.mainColor}08`:"rgba(0, 123, 255, 0.08)"};
    transform: translateX(${e=>"ar"===e.activeLanguage?"-2px":"2px"});
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    padding: 11px 16px;
    margin-bottom: 12px;
  }
`,n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  font-size: 16px;
  flex-shrink: 0;
  background: ${e=>e.whatsapp?"rgba(37, 211, 102, 0.12)":e.theme.mainColor?`${e.theme.mainColor}12`:"rgba(0, 123, 255, 0.12)"};
  color: ${e=>e.whatsapp?"#25D366":e.theme.mainColor||"#007bff"};
  
  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
`,n.Ay.a`
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.whatsapp?"#25D366":e.theme.mainColor||"#007bff"};
  text-decoration: none;
  transition: all 0.2s ease;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  flex: 1;
  letter-spacing: 0.01em;
  
  &:hover {
    color: ${e=>e.whatsapp?"#128C7E":e.theme.mainColor||"#0056b3"};
    text-decoration: none;
  }
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,n.Ay.section`
  width: 100%;
  padding: 48px 16px 56px;
  background: ${e=>{var t,o,i;return(null===(t=e.theme)||void 0===t?void 0:t.howItWorksSectionBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.homepageBackgroundColor)||(null===(i=e.theme)||void 0===i?void 0:i.backgroundColor)||"#f8f9fa"}};
  direction: ${e=>"ar"===e.$activeLanguage?"rtl":"ltr"};
  @media (min-width: 768px) {
    padding: 72px 16px 80px;
  }
`),Ld=n.Ay.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
`,zd=n.Ay.div`
  text-align: center;
  margin-bottom: 40px;
`,Sd=n.Ay.p`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  margin: 0 0 8px 0;
`,_d=n.Ay.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
  margin: 0;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,Td=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 16px;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
`,Pd=n.Ay.div`
  text-align: center;
`,Ed=n.Ay.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin: 0 auto 12px;
  border-radius: 16px;
  background: ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.howItWorksStepIconBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.backgroundColor)||"#fff"}};
  border: 1px solid ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}20`:"rgba(0, 123, 255, 0.12)"}};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
`,Id=n.Ay.span`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"#fff"}};
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`,Fd=n.Ay.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
  margin: 0 0 4px 0;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`,Nd=n.Ay.p`
  font-size: 12px;
  color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?`${e.theme.textColor}99`:"#666"}};
  margin: 0;
`,Bd=n.Ay.footer`
  width: 100%;
  padding: 40px 16px 20px;
  margin-top: auto;
  background: ${e=>{var t,o,i;return(null===(t=e.theme)||void 0===t?void 0:t.footerSectionBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.homepageBackgroundColor)||(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#1a1a1a"}};
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.footerTextColor)||"#fff"}};
  direction: ${e=>"ar"===e.$activeLanguage?"rtl":"ltr"};
  @media (min-width: 768px) {
    padding: 48px 24px 24px;
  }
`,Od=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`,Rd=n.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 40px;
  }
`,Dd=n.Ay.div``,Ud=n.Ay.span`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: inherit;
  display: inline-block;
`,qd=n.Ay.img`
  max-width: 140px;
  max-height: 56px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
`,Md=n.Ay.span`
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
`,Wd=n.Ay.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.7;
  margin: 12px 0 0 0;
`,Yd=n.Ay.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`,Hd=n.Ay.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,Xd=n.Ay.div``,Vd=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
`,Kd=n.Ay.div`
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  &:last-child {
    border-bottom: none;
  }
`,Qd=n.Ay.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: inherit;
`,Jd=n.Ay.h4`
  font-size: 18px;
  font-weight: 600;
  color: inherit;
  margin: 0 0 16px 0;
`,Gd=n.Ay.a`
  display: block;
  font-size: 14px;
  opacity: 0.7;
  text-decoration: none;
  margin-bottom: 10px;
  transition: opacity 0.2s ease, color 0.2s ease;
  cursor: pointer;
  border: none;
  background: none;
  font: inherit;
  text-align: inherit;
  &:hover {
    opacity: 1;
  }
  &:last-child {
    margin-bottom: 0;
  }
`,Zd=n.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 10px;
  line-height: 1.5;
  a {
    color: inherit;
    text-decoration: none;
  }
  &:last-child {
    margin-bottom: 0;
  }
`,ec=n.Ay.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`,tc=n.Ay.p`
  font-size: 14px;
  opacity: 0.7;
  margin: 0 0 8px 0;
  line-height: 1.5;
  &:last-child {
    margin-bottom: 0;
  }
`,oc=n.Ay.div`
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`,ic=n.Ay.p`
  font-size: 12px;
  opacity: 0.5;
  margin: 0;
`,nc=(n.Ay.section`
  width: 100%;
  padding: 12px;
  max-width: 1200px;
  margin: 6px auto;
  background: ${e=>e.theme.socialSectionBackgroundColor||e.theme.homepageBackgroundColor||e.theme.backgroundColor||"#f8f9fa"};
  
  @media (min-width: 768px) {
    padding: 20px 5%;
  }
`,n.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 100%;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    gap: 16px;
  }
`,n.Ay.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 12px;
  background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    background: ${e=>e.theme.categoryUnActive||"#ffffff"};
  }
  
  span {
    font-size: 12px;
    font-weight: 500;
    color: ${e=>e.theme.textColor||"#1a1a1a"};
    
    @media (min-width: 768px) {
      font-size: 13px;
    }
  }
`,n.Ay.div`
  font-size: 24px;
  color: ${e=>{var t,o,i,n;return null!==(t=e.platform)&&void 0!==t&&t.toLowerCase().includes("facebook")?"#1877F2":null!==(o=e.platform)&&void 0!==o&&o.toLowerCase().includes("instagram")?"#E4405F":null!==(i=e.platform)&&void 0!==i&&i.toLowerCase().includes("twitter")?"#1DA1F2":null!==(n=e.platform)&&void 0!==n&&n.toLowerCase().includes("whatsapp")?"#25D366":e.theme.mainColor||"#007bff"}};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    font-size: 28px;
  }
`,n.Ay.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px 0px 20px;
  background: ${e=>e.theme.welcomeSectionBackgroundColor||e.theme.homepageBackgroundColor||e.theme.backgroundColor||"#f8f9fa"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  min-height: 340px;
  
  @media (min-width: 768px) {
    padding: 56px 20px 48px 20px;
    min-height: 420px;
  }
`),rc=n.Ay.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${e=>e.theme.textColor||"#1a1a1a"};
  margin: 0 0 32px 0;
  text-align: center;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  letter-spacing: -0.02em;
  
  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`,ac=n.Ay.img`
  max-width: 240px;
  max-height: 240px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  
  @media (min-width: 768px) {
    max-width: 320px;
    max-height: 320px;
  }
`,lc=n.Ay.section`
  width: 100%;
  padding: 40px 16px;
  background: ${e=>e.theme.featuredProductsSectionBackgroundColor||e.theme.homepageBackgroundColor||e.theme.backgroundColor||"#f8f9fa"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  
  @media (min-width: 768px) {
    padding: 40px 5%;
  }
`,sc=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 0;
  margin-bottom:50px;
  
  @media (min-width: 768px) {
    gap: 24px;
    margin-top: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,dc=(n.Ay.button`
  width: 50%;
  max-width: 280px;
  height: 48px;
  margin: 24px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.slidingButtonTextColor||"#ffffff"};
  background: ${e=>e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff"};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  box-shadow: 0 4px 16px ${e=>{const t=e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff";return t?`${t}40`:"rgba(0, 123, 255, 0.4)"}};
  
  &:hover {
    background: ${e=>e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${e=>{const t=e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff";return t?`${t}50`:"rgba(0, 123, 255, 0.5)"}};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    max-width: 320px;
    height: 52px;
    font-size: 16px;
  }
`,n.Ay.p`
  width: 100%;
  padding: 24px 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: ${e=>e.theme.textColor||"#333333"};
  background: ${e=>e.theme.backgroundColor||"#f8f9fa"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  margin: 0;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    padding: 32px 5%;
    font-size: 20px;
  }
`,n.Ay.button`
  width: 55%;
  max-width: 280px;
  height: 48px;
  margin: 18px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.slidingButtonTextColor||"#ffffff"};
  background: ${e=>e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff"};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  box-shadow: 0 4px 16px ${e=>{const t=e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff";return t?`${t}40`:"rgba(0, 123, 255, 0.4)"}};
  
  &:hover {
    background: ${e=>e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${e=>{const t=e.theme.slidingButtonBackgroundColor||e.theme.mainColor||"#007bff";return t?`${t}50`:"rgba(0, 123, 255, 0.5)"}};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    max-width: 320px;
    height: 52px;
    font-size: 16px;
    margin: 24px auto 0;
  }
`);var cc=o(94707);const pc=n.Ay.section`
  position: relative;
  min-height: 85vh;
  overflow: hidden;
  background: #111;

  @media (min-width: 768px) {
    min-height: 90vh;
  }
`,uc=n.Ay.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  cursor: ${e=>e.$clickable?"pointer":"default"};
`,xc=n.Ay.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: ${e=>e.$active?1:0};
  transition: opacity 1.2s ease-in-out;
  pointer-events: none;

  & img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
  }
`,hc=n.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  cursor: pointer;
`,gc=n.Ay.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  & img {
    max-width: 100%;
    max-height: calc(100vh - 96px);
    width: auto;
    height: auto;
    object-fit: contain;
  }
`,mc=n.Ay.button`
  position: absolute;
  top: -44px;
  right: 0;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`,fc=n.Ay.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  pointer-events: none;
`,vc=n.Ay.div`
  position: relative;
  height: 100%;
  min-height: 85vh;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 64px;
  max-width: 1280px;
  direction: ${e=>"ar"===e.$activeLanguage?"rtl":"ltr"};
  pointer-events: none;
  & > * {
    pointer-events: auto;
  }

  @media (min-width: 768px) {
    min-height: 90vh;
    padding: 0 24px;
    padding-bottom: 96px;
  }
`,bc=n.Ay.div`
  max-width: 672px;
`,yc=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`,wc=n.Ay.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
`,$c=n.Ay.h1`
  font-size: 2.25rem;
  line-height: 1.05;
  font-weight: 700;
  color: #fff;
  margin: 0 0 20px 0;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 4.5rem;
  }
`,jc=n.Ay.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 32px 0;
  max-width: 28rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`,Cc=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`,kc=n.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-weight: 500;
  font-size: 1rem;
  height: 48px;
  min-height: 48px;
  border-radius: 9999px;
  padding: 0 32px;
  width: 100%;
  gap: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  &:focus-visible {
    outline: 2px solid ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    outline-offset: 2px;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`,Ac="https://storage.googleapis.com/ecommerce-bucket-testing",Lc=5e3;function zc(e){let{images:t=[],activeLanguage:o="en",onShopNow:n,headline:r,subtext:a,badges:l=[],ctaPrimaryText:s}=e;const d=(t||[]).filter((e=>null===e||void 0===e?void 0:e.url)),[c,p]=(0,i.useState)(0),[u,x]=(0,i.useState)(!1),h=d.length>1;(0,i.useEffect)((()=>{if(!h)return;const e=setInterval((()=>{p((e=>(e+1)%d.length))}),Lc);return()=>clearInterval(e)}),[h,d.length]);const g=null!==r&&void 0!==r?r:"en"===o?"Welcome":"\u0645\u0631\u062d\u0628\u0627\u064b",m=null!==a&&void 0!==a?a:"",f=null!==s&&void 0!==s?s:"en"===o?"Shop Now":"\u062a\u0633\u0648\u0642 \u0627\u0644\u0622\u0646",b=e=>{e&&e.stopPropagation(),x(!1)};return(0,v.jsxs)(pc,{children:[(0,v.jsx)(uc,{$clickable:d.length>0,onClick:()=>{d.length>0&&x(!0)},role:d.length>0?"button":void 0,"aria-label":d.length>0?"en"===o?"View hero image":"\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631\u0629":void 0,children:d.length>0?d.map(((e,t)=>{var o;return(0,v.jsx)(xc,{$active:t===c,"aria-hidden":t!==c,children:(0,v.jsx)("img",{src:`${Ac}/${e.url}`,alt:""})},null!==(o=e.id)&&void 0!==o?o:t)})):(0,v.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"}})}),(0,v.jsx)(fc,{}),u&&d.length>0&&(0,v.jsx)(hc,{onClick:b,children:(0,v.jsxs)(gc,{onClick:e=>e.stopPropagation(),children:[(0,v.jsx)(mc,{type:"button",onClick:b,"aria-label":"en"===o?"Close":"\u0625\u063a\u0644\u0627\u0642",children:(0,v.jsx)(we.WQq,{size:28})}),(0,v.jsx)("img",{src:`${Ac}/${d[c].url}`,alt:""})]})}),(0,v.jsx)(vc,{$activeLanguage:o,children:(0,v.jsxs)(bc,{children:[Array.isArray(l)&&l.length>0&&(0,v.jsx)(yc,{children:l.map((e=>{const t=(0,cc.o)(e.icon_type),i="ar"===o?e.ar_text||e.en_text:e.en_text||e.ar_text;return i?(0,v.jsxs)(wc,{children:[(0,v.jsx)(t,{size:12,style:{flexShrink:0}}),i]},e.id):null}))}),(0,v.jsx)($c,{children:g}),m?(0,v.jsx)(jc,{children:m}):null,(0,v.jsx)(Cc,{children:(0,v.jsxs)(kc,{type:"button",onClick:n,children:[f,"ar"===o?(0,v.jsx)(xe._Jj,{size:16}):(0,v.jsx)(xe.X6T,{size:16})]})})]})})]})}var Sc=o(40499),_c=o(88631);const Tc=e=>{let{category:t,activeLanguage:o,onExploreClick:n,logoURL:r}=e;const[a,l]=(0,i.useState)(!1),s="en"===o?t.en_category:t.ar_category,d=t.image_url?(0,de.V)(t.image_url):null,c=d&&!a;return(0,v.jsxs)(pd,{type:"button",onClick:()=>n(t.id),$activeLanguage:o,children:[(0,v.jsx)(ud,{children:c?(0,v.jsx)("img",{src:d,alt:"",onError:()=>l(!0)}):(0,v.jsx)(xe.x7F,{size:20})}),(0,v.jsx)(xd,{children:s})]})};function Pc(e){if(null==e||""===e)return null;const t=String(e).trim();if(!/^\d+$/.test(t))return null;const o=Number(t);return Number.isFinite(o)?o:null}function Ec(e){return null!==Pc(e)}const Ic=1400,Fc=e=>e>=1?1:1-Math.pow(2,-10*e);function Nc(e){let{statItems:t,statsSection:o,activeLanguage:n,StatsSectionWrap:r,StatsSectionContainer:a,StatsSectionCard:l,StatsSectionInner:s,StatsSectionTitle:d,StatsSectionSubtitle:c,StatsSectionGrid:p,StatsStatBox:u,StatsStatValue:x,StatsStatLabel:h}=e;const g=(0,i.useRef)(null),[m,f]=(0,i.useState)(!1),[b,y]=(0,i.useState)((()=>(t||[]).map((e=>{var t;return Ec(e.value)?0:null!==(t=e.value)&&void 0!==t?t:"\u2014"}))));return(0,i.useEffect)((()=>{null!==t&&void 0!==t&&t.length&&y((e=>e.length===t.length?e:t.map((e=>{var t;return Ec(e.value)?0:null!==(t=e.value)&&void 0!==t?t:"\u2014"}))))}),[t]),(0,i.useEffect)((()=>{const e=g.current;if(!e||null===t||void 0===t||!t.length)return;const o=new IntersectionObserver((e=>{const[t]=e;null!==t&&void 0!==t&&t.isIntersecting&&!m&&f(!0)}),{threshold:.2,rootMargin:"0px 0px -50px 0px"});return o.observe(e),()=>o.disconnect()}),[null===t||void 0===t?void 0:t.length,m]),(0,i.useEffect)((()=>{if(!m||null===t||void 0===t||!t.length)return;const e=t.map((e=>Pc(e.value))),o=performance.now();let i;const n=r=>{const a=r-o,l=Math.min(a/Ic,1),s=Fc(l);y(t.map(((t,o)=>{var i;const n=e[o];if(null==n)return null!==(i=t.value)&&void 0!==i?i:"\u2014";return Math.round(n*s)}))),l<1&&(i=requestAnimationFrame(n))};return i=requestAnimationFrame(n),()=>cancelAnimationFrame(i)}),[m,t]),(0,v.jsx)(r,{ref:g,$activeLanguage:n,children:(0,v.jsx)(a,{children:(0,v.jsx)(l,{children:(0,v.jsxs)(s,{children:[((null===o||void 0===o?void 0:o.en_title)||(null===o||void 0===o?void 0:o.ar_title))&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{children:"en"===n?(null===o||void 0===o?void 0:o.en_title)||(null===o||void 0===o?void 0:o.ar_title)||"Trusted by owners":(null===o||void 0===o?void 0:o.ar_title)||(null===o||void 0===o?void 0:o.en_title)||"\u0645\u0648\u062b\u0648\u0642 \u0645\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u0621"}),((null===o||void 0===o?void 0:o.en_subtitle)||(null===o||void 0===o?void 0:o.ar_subtitle))&&(0,v.jsx)(c,{children:"en"===n?(null===o||void 0===o?void 0:o.en_subtitle)||(null===o||void 0===o?void 0:o.ar_subtitle):(null===o||void 0===o?void 0:o.ar_subtitle)||(null===o||void 0===o?void 0:o.en_subtitle)})]}),(0,v.jsx)(p,{children:(t||[]).map(((e,t)=>{var o,i;const r=null!==(o=null!==(i=b[t])&&void 0!==i?i:e.value)&&void 0!==o?o:"\u2014",a="products_count"===e.value_type&&"number"===typeof r?function(e){if(null==e||!Number.isFinite(e))return"\u2014";const t=Number(e);return`${t>=100?100*Math.round(t/100):t>=10?10*Math.round(t/10):Math.round(t)}+`}(r):r;return(0,v.jsxs)(u,{children:[(0,v.jsx)(x,{children:a}),(0,v.jsx)(h,{children:"ar"===n?e.ar_label||e.en_label:e.en_label||e.ar_label||"\u2014"})]},e.id||t)}))})]})})})})}function Bc(e){var t,o,n,r,a,l;let{onExploreClick:s,categories:d,setSearchParams:c,searchParams:p}=e;const{restaurantName:u}=(0,b.g)(),x=window.location.hostname.split(".")[0],h="menugic"!==x&&"localhost"!==x&&"www"!==x?x:u,g=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[h]})),m=(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[h])||void 0===o?void 0:o.activeLanguage)||"en"})),[f,w]=(0,i.useState)((()=>new Set)),$=(0,i.useCallback)((async()=>{const e=(0,ue.wU)(h);if(e)try{const{data:t}=await C.A.get(pe.Vb,{headers:{Authorization:`Bearer ${e}`}}),o=(Array.isArray(t)?t:[]).map((e=>e.id));w(new Set(o))}catch{w(new Set)}else w(new Set)}),[h]);(0,i.useEffect)((()=>{$()}),[$]),(0,i.useEffect)((()=>{const e=e=>{var t;null!==e&&void 0!==e&&null!==(t=e.detail)&&void 0!==t&&t.restaurantName&&e.detail.restaurantName!==h||$()};return window.addEventListener("menugic-customer-auth",e),()=>window.removeEventListener("menugic-customer-auth",e)}),[h,$]);const j=(null===g||void 0===g?void 0:g.branches)||[],k=(null===g||void 0===g?void 0:g.socialMedia)||[],A=(null===g||void 0===g?void 0:g.sliderImages)||[],L=(null===g||void 0===g?void 0:g.has_slider)||!1,z=null!==(t=null===g||void 0===g?void 0:g.id)&&void 0!==t?t:null===g||void 0===g?void 0:g.restaurant_id,{data:S=[],isLoading:_}=(0,Sc.O)(z),{data:T}=(0,_c.y)(z),P=Array.isArray(T)?T:[],E=new Set((S||[]).map((e=>e.id))),I=[...S||[],...P.filter((e=>!E.has(e.id)))],[F,N]=(0,i.useState)(!1),[B,O]=(0,i.useState)(!1),R=(0,i.useRef)(null);(0,i.useEffect)((()=>{console.log("Theme3 HomePage - Slider Debug:",{hasSlider:L,sliderImagesCount:A.length,sliderImages:A,restaurant:g?{has_slider:g.has_slider,sliderImages:g.sliderImages}:null})}),[L,A,g]),(0,i.useEffect)((()=>{O(!1)}),[d]),(0,i.useEffect)((()=>{const e=()=>{if(R.current){const e=R.current,t=e.scrollWidth>e.clientWidth;N(t&&!B)}},t=()=>{R.current&&!B&&(O(!0),N(!1))};e();const o=R.current;return o&&(o.addEventListener("scroll",t),window.addEventListener("resize",e)),()=>{o&&o.removeEventListener("scroll",t),window.removeEventListener("resize",e)}}),[d,B]);const[D,U]=(0,i.useState)(null),[q,M]=(0,i.useState)(null),W=(null===g||void 0===g||g.name,e=>{const t=(null===e||void 0===e?void 0:e.toLowerCase())||"";return t.includes("facebook")?(0,v.jsx)(xe.iYk,{}):t.includes("instagram")?(0,v.jsx)(xe.ao$,{}):t.includes("tiktok")?(0,v.jsx)(xe.kkU,{}):t.includes("whatsapp")?(0,v.jsx)(xe.EcP,{}):(0,v.jsx)(xe.f35,{})}),Y=e=>e?e.replace(/\s/g,""):"",H="en"===m?"View on Map":"\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",X=(null===g||void 0===g||g.business_type,"en"===m?(new Date).getFullYear():(new Date).getFullYear(),()=>{U(null),M(null)});return(0,v.jsxs)(Bs,{children:[L&&A.length>0&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(zc,{images:A,activeLanguage:m,onShopNow:()=>s(),headline:"en"===m?g.en_slogan||g.ar_slogan||"":g.ar_slogan||g.en_slogan||"",subtext:"en"===m?g.en_slogan_subtext||g.ar_slogan_subtext||"":g.ar_slogan_subtext||g.en_slogan_subtext||"",badges:g.badges||[]})}),(!L||0===A.length)&&(0,v.jsxs)(nc,{activeLanguage:m,children:[(0,v.jsx)(rc,{activeLanguage:m,children:"en"===m?"Welcome to":"\u0645\u0631\u062d\u0628\u0627\u064b \u0628\u0643\u0645 \u0641\u064a"}),(null===g||void 0===g?void 0:g.logoURL)&&(0,v.jsx)(ac,{src:`https://storage.googleapis.com/ecommerce-bucket-testing/${g.logoURL}`,alt:(null===g||void 0===g?void 0:g.name)||h,activeLanguage:m})]}),(null===g||void 0===g||null===(o=g.valueCards)||void 0===o?void 0:o.length)>0&&(0,v.jsx)(Rs,{$activeLanguage:m,children:(0,v.jsxs)(Ds,{children:[(0,v.jsx)(Us,{children:(0,v.jsx)(qs,{children:"en"===m?(null===(n=g.valueCardSection)||void 0===n?void 0:n.en_section_label)||"Why Us":(null===(r=g.valueCardSection)||void 0===r?void 0:r.ar_section_label)||"\u0644\u0645\u0627\u0630\u0627 \u0646\u062d\u0646"})}),(0,v.jsx)(Ms,{children:g.valueCards.map((e=>{const t=(0,cc.o)(e.icon_type),o="ar"===m?e.ar_title||e.en_title:e.en_title||e.ar_title,i="ar"===m?e.ar_description||e.en_description:e.en_description||e.ar_description;return(0,v.jsxs)(Ys,{$activeLanguage:m,children:[(0,v.jsx)(Hs,{children:(0,v.jsx)(t,{size:24})}),(0,v.jsxs)(Xs,{children:[(0,v.jsx)(Vs,{children:o||""}),(0,v.jsx)(Ks,{children:i||""})]})]},e.id)}))})]})}),d&&d.length>0&&(0,v.jsx)(ad,{$activeLanguage:m,children:(0,v.jsxs)(ld,{children:[(0,v.jsx)(sd,{children:(0,v.jsx)(dd,{children:"en"===m?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a"})}),(0,v.jsx)(cd,{children:d.sort(((e,t)=>(t.priority||0)-(e.priority||0))).slice(0,6).map((e=>(0,v.jsx)(Tc,{category:e,activeLanguage:m,onExploreClick:s,logoURL:null!==g&&void 0!==g&&g.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${g.logoURL}`:null},e.id)))}),(0,v.jsx)(hd,{children:(0,v.jsxs)(gd,{type:"button",onClick:()=>s(),$activeLanguage:m,children:["en"===m?"Browse All":"\u0639\u0631\u0636 \u0627\u0644\u0643\u0644",(0,v.jsx)(xe.X6T,{size:16,style:"ar"===m?{transform:"rotate(180deg)"}:void 0})]})})]})}),I.length>0&&(0,v.jsxs)(lc,{activeLanguage:m,children:[(0,v.jsx)(sd,{children:(0,v.jsx)(dd,{children:"en"===m?"Top Products":"\u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a"})}),(0,v.jsx)(sc,{children:I.map(((e,t)=>(0,v.jsx)(ye,{plate:e,index:t,activePlate:null,setactivePlate:()=>{},showPopup:null,setSearchParams:c,searchParams:p,activeCategoryId:e.category_id,categories:d,disableDetails:!1,$isFeatured:!0,wishlistIds:f,onWishlistChange:$},e.id)))}),(0,v.jsxs)(dc,{onClick:()=>s(),activeLanguage:m,theme:null!==g&&void 0!==g&&g.theme?"string"===typeof g.theme?JSON.parse(g.theme):g.theme:{},children:["en"===m?"View All Products":"\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a","ar"===m?(0,v.jsx)(xe._Jj,{}):(0,v.jsx)(xe.X6T,{})]})]}),(null===g||void 0===g||null===(a=g.statItems)||void 0===a?void 0:a.length)>0&&(0,v.jsx)(Nc,{statItems:g.statItems,statsSection:null===g||void 0===g?void 0:g.statsSection,activeLanguage:m,StatsSectionWrap:Qs,StatsSectionContainer:Js,StatsSectionCard:Gs,StatsSectionInner:Zs,StatsSectionTitle:ed,StatsSectionSubtitle:td,StatsSectionGrid:od,StatsStatBox:id,StatsStatValue:nd,StatsStatLabel:rd}),D&&q&&(0,v.jsxs)(md,{children:[(0,v.jsx)(fd,{onClick:X}),(0,v.jsxs)(vd,{activeLanguage:m,children:[(0,v.jsx)(bd,{onClick:X,activeLanguage:m,children:"\xd7"}),(0,v.jsx)(yd,{activeLanguage:m,children:D.name}),(0,v.jsxs)(wd,{activeLanguage:m,children:["phone"===q&&D.phone_number&&(0,v.jsxs)($d,{activeLanguage:m,children:[(0,v.jsx)(jd,{activeLanguage:m,children:"en"===m?"Phone Number":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"}),(0,v.jsx)(Cd,{href:`tel:${Y(D.phone_number)}`,activeLanguage:m,children:D.phone_number})]}),"whatsapp"===q&&D.whatsapp_number&&(0,v.jsxs)($d,{activeLanguage:m,children:[(0,v.jsx)(jd,{activeLanguage:m,children:"en"===m?"WhatsApp Number":"\u0631\u0642\u0645 \u0648\u0627\u062a\u0633\u0627\u0628"}),(0,v.jsx)(Cd,{href:`https://wa.me/${Y(D.whatsapp_number)}`,target:"_blank",rel:"noopener noreferrer",activeLanguage:m,whatsapp:!0,children:D.whatsapp_number})]}),"location"===q&&(0,v.jsxs)(v.Fragment,{children:[D.location&&(0,v.jsxs)($d,{activeLanguage:m,children:[(0,v.jsx)(jd,{activeLanguage:m,children:"en"===m?"Location":"\u0627\u0644\u0645\u0648\u0642\u0639"}),(0,v.jsx)(jd,{activeLanguage:m,location:!0,children:D.location})]}),D.mapLink&&(0,v.jsx)(kd,{href:`https://${D.mapLink}`,target:"_blank",rel:"noopener noreferrer",activeLanguage:m,children:H})]})]})]})]}),(0,v.jsx)(Ad,{$activeLanguage:m,children:(0,v.jsxs)(Ld,{children:[(0,v.jsxs)(zd,{children:[(0,v.jsx)(Sd,{children:"en"===m?"How It Works":"\u0643\u064a\u0641 \u064a\u0639\u0645\u0644"}),(0,v.jsx)(_d,{children:"en"===m?"4 simple steps":"\u0664 \u062e\u0637\u0648\u0627\u062a \u0628\u0633\u064a\u0637\u0629"})]}),(0,v.jsxs)(Td,{children:[(0,v.jsxs)(Pd,{children:[(0,v.jsxs)(Ed,{children:[(0,v.jsx)(xe.KSO,{size:22}),(0,v.jsx)(Id,{children:"01"})]}),(0,v.jsx)(Fd,{children:"en"===m?"Browse":"\u062a\u0635\u0641\u062d"}),(0,v.jsx)(Nd,{children:"en"===m?"Explore our menu":"\u0627\u0633\u062a\u0643\u0634\u0641 \u0642\u0627\u0626\u0645\u062a\u0646\u0627"})]}),(0,v.jsxs)(Pd,{children:[(0,v.jsxs)(Ed,{children:[(0,v.jsx)(xe.AsH,{size:22}),(0,v.jsx)(Id,{children:"02"})]}),(0,v.jsx)(Fd,{children:"en"===m?"Order":"\u0627\u0637\u0644\u0628"}),(0,v.jsx)(Nd,{children:"en"===m?"Add items to your cart":"\u0623\u0636\u0641 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629"})]}),(0,v.jsxs)(Pd,{children:[(0,v.jsxs)(Ed,{children:[(0,v.jsx)(xe.dv1,{size:22}),(0,v.jsx)(Id,{children:"03"})]}),(0,v.jsx)(Fd,{children:"en"===m?"Deliver":"\u062a\u0648\u0635\u064a\u0644"}),(0,v.jsx)(Nd,{children:"en"===m?"We deliver to you":"\u0646\u0648\u0635\u0644 \u0637\u0644\u0628\u0643 \u0625\u0644\u064a\u0643"})]}),(0,v.jsxs)(Pd,{children:[(0,v.jsxs)(Ed,{children:[(0,v.jsx)(xe.gb0,{size:22}),(0,v.jsx)(Id,{children:"04"})]}),(0,v.jsx)(Fd,{children:"en"===m?"Enjoy":"\u0627\u0633\u062a\u0645\u062a\u0639"}),(0,v.jsx)(Nd,{children:"en"===m?"Enjoy your order":"\u0627\u0633\u062a\u0645\u062a\u0639 \u0628\u0637\u0644\u0628\u0643"})]})]})]})}),(0,v.jsx)(Bd,{$activeLanguage:m,children:(0,v.jsxs)(Od,{children:[(0,v.jsxs)(Rd,{children:[(0,v.jsxs)(Dd,{children:[null!==g&&void 0!==g&&g.logoURL?(0,v.jsx)(qd,{src:`https://storage.googleapis.com/ecommerce-bucket-testing/${g.logoURL}`,alt:(null===g||void 0===g?void 0:g.name)||h}):(0,v.jsx)(Ud,{children:((null===g||void 0===g?void 0:g.name)||h).length>0?(0,v.jsxs)(v.Fragment,{children:[((null===g||void 0===g?void 0:g.name)||h).slice(0,1),(0,v.jsx)(Md,{children:((null===g||void 0===g?void 0:g.name)||h).slice(1)})]}):(0,v.jsx)(Md,{children:h})}),(0,v.jsx)(Wd,{children:"en"===m?(null===g||void 0===g?void 0:g.en_slogan)||(null===g||void 0===g?void 0:g.ar_slogan)||"Quality food, delivered.":(null===g||void 0===g?void 0:g.ar_slogan)||(null===g||void 0===g?void 0:g.en_slogan)||"\u0637\u0639\u0627\u0645 \u0630\u0648 \u062c\u0648\u062f\u0629\u060c \u0646\u0648\u0635\u0644\u0647 \u0625\u0644\u064a\u0643."})]}),(0,v.jsxs)(Xd,{children:[(0,v.jsx)(Jd,{children:"en"===m?"Shop":"\u062a\u0633\u0648\u0642"}),(0,v.jsx)(Gd,{as:"button",type:"button",onClick:()=>s(),children:"en"===m?"All Products":"\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a"}),(0,v.jsx)(Gd,{as:"button",type:"button",onClick:()=>s(),children:"en"===m?"Browse Categories":"\u062a\u0635\u0641\u062d \u0627\u0644\u0641\u0626\u0627\u062a"})]}),(0,v.jsxs)(Xd,{children:[(0,v.jsx)(Jd,{children:"en"===m?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"}),j.length>0?(0,v.jsx)(Vd,{children:j.map((e=>(0,v.jsxs)(Kd,{children:[(0,v.jsx)(Qd,{children:e.name||("en"===m?"Branch":"\u0641\u0631\u0639")}),e.phone_number&&(0,v.jsxs)(Zd,{children:[(0,v.jsx)(ec,{children:(0,v.jsx)(xe.Cab,{size:14})}),(0,v.jsx)("a",{href:`tel:${Y(e.phone_number)}`,children:e.phone_number})]}),e.whatsapp_number&&(0,v.jsxs)(Zd,{children:[(0,v.jsx)(ec,{children:(0,v.jsx)(xe.EcP,{size:14})}),(0,v.jsx)("a",{href:`https://wa.me/${Y(e.whatsapp_number)}`,target:"_blank",rel:"noopener noreferrer",children:e.whatsapp_number})]}),(e.location||e.address)&&(0,v.jsxs)(Zd,{children:[(0,v.jsx)(ec,{children:(0,v.jsx)(xe.vq8,{size:14})}),(0,v.jsx)("span",{children:e.location||e.address})]}),(e.mapLink||e.map_link)&&(0,v.jsxs)(Zd,{children:[(0,v.jsx)(ec,{children:(0,v.jsx)(xe.vq8,{size:14})}),(0,v.jsx)("a",{href:(e.mapLink||e.map_link||"").startsWith("http")?e.mapLink||e.map_link:`https://${e.mapLink||e.map_link}`,target:"_blank",rel:"noopener noreferrer",children:"en"===m?"View on map":"\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629"})]})]},e.id||e.name)))}):(0,v.jsxs)(Zd,{children:[(0,v.jsx)(ec,{children:(0,v.jsx)(xe.Cab,{size:14})}),(0,v.jsx)("span",{children:"en"===m?"Contact us":"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627"})]})]}),(0,v.jsxs)(Xd,{children:[(0,v.jsx)(Jd,{children:"en"===m?"Working Hours":"\u0623\u0648\u0642\u0627\u062a \u0627\u0644\u0639\u0645\u0644"}),(null===g||void 0===g||null===(l=g.workingHours)||void 0===l?void 0:l.length)>0?g.workingHours.map(((e,t)=>{const o={monday:"Mon",tuesday:"Tue",wednesday:"Wed",thursday:"Thu",friday:"Fri",saturday:"Sat",sunday:"Sun"},i=e.days?e.days.split(",").map((e=>o[e.trim().toLowerCase()]||e.trim())).join(", "):"",n=String(e.start_time||"").slice(0,5),r=String(e.end_time||"").slice(0,5);return(0,v.jsxs)(tc,{children:[i,": ",n," \u2013 ",r]},t)})):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(tc,{children:"en"===m?"Mon \u2013 Fri: 9AM \u2013 8PM":"\u0627\u0644\u0625\u062b\u0646\u064a\u0646 \u2013 \u0627\u0644\u062c\u0645\u0639\u0629: 9 \u0635 \u2013 8 \u0645"}),(0,v.jsx)(tc,{children:"en"===m?"Saturday: 9AM \u2013 6PM":"\u0627\u0644\u0633\u0628\u062a: 9 \u0635 \u2013 6 \u0645"}),(0,v.jsx)(tc,{children:"en"===m?"Sunday: 10AM \u2013 4PM":"\u0627\u0644\u0623\u062d\u062f: 10 \u0635 \u2013 4 \u0645"})]})]}),(0,v.jsxs)(Xd,{children:[(0,v.jsx)(Jd,{children:"en"===m?"Follow us":"\u062a\u0627\u0628\u0639\u0646\u0627"}),k.length>0?(0,v.jsx)(Yd,{children:k.slice(0,6).map(((e,t)=>{const o=e.link||e.url||"",i=o.startsWith("http")?o:`https://${o}`;return(0,v.jsx)(Hd,{href:i,target:"_blank",rel:"noopener noreferrer",children:W(e.platform||e.name)},t)}))}):(0,v.jsx)(tc,{style:{opacity:.7},children:"en"===m?"No social links":"\u0644\u0627 \u062a\u0648\u062c\u062f \u0631\u0648\u0627\u0628\u0637"})]})]}),(0,v.jsx)(oc,{children:(0,v.jsxs)(ic,{children:["\xa9 ",(new Date).getFullYear()," Menugic. ","en"===m?"All rights reserved.":"\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629."]})})]})})]})}const Oc=n.Ay.main`
  width: 100%;
  min-height: 100vh;
  background: ${e=>{var t,o,i;return(null===(t=e.theme)||void 0===t?void 0:t.categoriesSectionBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.homepageBackgroundColor)||(null===(i=e.theme)||void 0===i?void 0:i.backgroundColor)||"#f8f9fa"}};
  direction: ${e=>"ar"===e.$activeLanguage?"rtl":"ltr"};
  padding-bottom: 24px;
`,Rc=n.Ay.section`
  padding: 48px 16px 24px;
  @media (min-width: 768px) {
    padding: 56px 16px 32px;
  }
`,Dc=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
`,Uc=n.Ay.p`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  margin: 0 0 8px 0;
`,qc=n.Ay.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
  margin: 0 0 8px 0;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,Mc=n.Ay.p`
  font-size: 14px;
  color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?`${e.theme.textColor}99`:"#666"}};
  margin: 0 auto;
  max-width: 28rem;
`,Wc=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
`,Yc=n.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid ${e=>{var t;return e.$active?"transparent":null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}20`:"rgba(0,0,0,0.08)"}};
  background: ${e=>{var t,o;return e.$active?(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff":(null===(o=e.theme)||void 0===o?void 0:o.backgroundColor)||"#fff"}};
  color: ${e=>{var t,o;return e.$active?(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"#fff":null!==(o=e.theme)&&void 0!==o&&o.textColor?`${e.theme.textColor}99`:"#666"}};
  box-shadow: ${e=>{var t;return e.$active&&null!==(t=e.theme)&&void 0!==t&&t.mainColor?`0 2px 8px ${e.theme.mainColor}30`:"0 1px 3px rgba(0,0,0,0.06)"}};
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    border-color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}40`:"rgba(0,123,255,0.2)"}};
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
  }
`,Hc=n.Ay.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
`,Xc=n.Ay.section`
  position: sticky;
  top: 56px;
  z-index: 30;
  background: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.backgroundColor?`${e.theme.backgroundColor}cc`:"rgba(255,255,255,0.9)"}};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}18`:"rgba(0,0,0,0.06)"}};
  padding: 12px 16px;
  @media (min-width: 768px) {
    top: 64px;
  }
`,Vc=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
`,Kc=n.Ay.div`
  position: relative;
  flex: 1;
  min-width: 0;
`,Qc=n.Ay.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${e=>"ar"===e.$activeLanguage?"auto":"12px"};
  right: ${e=>"ar"===e.$activeLanguage?"12px":"auto"};
  color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?`${e.theme.textColor}99`:"#999"}};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`,Jc=n.Ay.input`
  width: 100%;
  height: 36px;
  padding: 0 12px 0 36px;
  border-radius: 9999px;
  border: 1px solid ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}20`:"rgba(0,0,0,0.08)"}};
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"#fff"}};
  font-size: 14px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1a1a1a"}};
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  direction: ${e=>"ar"===e.$activeLanguage?"rtl":"ltr"};
  ${e=>"ar"===e.$activeLanguage&&"padding: 0 36px 0 12px;"}
  &:focus {
    border-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    box-shadow: 0 0 0 2px ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}20`:"rgba(0,123,255,0.2)"}};
  }
  &::placeholder {
    color: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.textColor?`${e.theme.textColor}99`:"#999"}};
  }
`,Gc=n.Ay.section`
  padding: 16px;
  @media (min-width: 768px) {
    padding: 24px 16px;
  }
`,Zc=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`;function ep(e){let{categories:t,activeCategory:o,setactiveCategory:i,searchText:n,setSearchText:r,searchParams:a,setSearchParams:l,menu:s,showPopup:d,setcarouselPosition:p,carouselPosition:u,onAddToCart:x}=e;const{restaurantName:h}=(0,b.g)(),g=window.location.hostname.split(".")[0],m="menugic"!==g&&"localhost"!==g&&"www"!==g?g:h,f=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[m]})),w=(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[m])||void 0===o?void 0:o.activeLanguage)||"en"})),$=null!==f&&void 0!==f&&f.theme?"string"===typeof f.theme?JSON.parse(f.theme):f.theme:{},j=(null===$||void 0===$?void 0:$.shopPageTitle)||(null===f||void 0===f?void 0:f.name)||("en"===w?"Shop":"\u062a\u0633\u0648\u0642"),C=(null===$||void 0===$?void 0:$.shopPageSubtitle)||("en"===w?"Browse our menu and place your order.":"\u062a\u0635\u0641\u062d \u0642\u0627\u0626\u0645\u062a\u0646\u0627 \u0648\u0627\u0637\u0644\u0628 \u0645\u0627 \u062a\u0634\u0627\u0621.");return(0,v.jsxs)(Oc,{$activeLanguage:w,theme:$,children:[(0,v.jsx)(Rc,{children:(0,v.jsxs)(Dc,{children:[(0,v.jsx)(Uc,{theme:$,children:"en"===w?"Shop":"\u062a\u0633\u0648\u0642"}),(0,v.jsx)(qc,{theme:$,children:j}),(0,v.jsx)(Mc,{theme:$,children:C}),(0,v.jsx)(Wc,{children:t.map((e=>{const t="all-items"===e.id||e.isAllItems,n=String(o)===String(e.id),r="en"===w?e.en_category||e.ar_category:e.ar_category||e.en_category,s=e.image_url?(0,de.V)(e.image_url):null;return(0,v.jsxs)(Yc,{type:"button",$active:n,theme:$,onClick:()=>{i(e.id);const t=new URLSearchParams(a);t.set("categoryId",String(e.id)),l(t)},children:[(0,v.jsx)(Hc,{children:t?(0,v.jsx)(xe.IoZ,{size:14}):s?(0,v.jsx)("img",{src:s,alt:"",style:{width:14,height:14,objectFit:"cover",borderRadius:4}}):(0,v.jsx)(xe.x7F,{size:14})}),r]},e.id)}))})]})}),(0,v.jsx)(Xc,{theme:$,children:(0,v.jsx)(Vc,{children:(0,v.jsxs)(Kc,{children:[(0,v.jsx)(Qc,{$activeLanguage:w,theme:$,children:(0,v.jsx)(c.Xj1,{size:18})}),(0,v.jsx)(Jc,{type:"text",placeholder:"en"===w?"Search...":"\u0628\u062d\u062b...",value:n,onChange:e=>r(e.target.value),$activeLanguage:w,theme:$})]})})}),(0,v.jsx)(Gc,{children:(0,v.jsx)(Zc,{children:(0,v.jsx)(ho,{menu:s,activeCategory:o,showPopup:d,searchText:n,carouselPosition:u,setcarouselPosition:p,setactiveCategory:i,categories:t,onAddToCart:x})})})]})}const tp=n.Ay.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.navigationBarBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.backgroundColor)||"#ffffff"}};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: opacity 0.4s ease, transform 0.4s ease;
  opacity: ${e=>e.$isProductDetailsOpen?0:1};
  transform: ${e=>e.$isProductDetailsOpen?"translateY(-20px)":"translateY(0)"};
  pointer-events: ${e=>e.$isProductDetailsOpen?"none":"auto"};
`,op=n.Ay.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  gap: 24px;
  position: relative;

  @media (min-width: 969px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 70px;
    gap: 16px;
  }
`,ip=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-inline-start: auto;
  /* dir=rtl on NavContent mirrors layout; row-reverse here fights RTL and leaves icons LTR */

  @media (max-width: 968px) {
    margin-inline-start: 0;
    order: 1;
  }

  @media (min-width: 969px) {
    order: unset;
  }
`,np=n.Ay.div`
  position: relative;
  left: auto;
  top: auto;
  transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 969px) {
    order: 2;
  }

  @media (max-width: 968px) {
    order: unset;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      transform: translate(-50%, -50%) scale(1.05);
    }
  }
`,rp=n.Ay.img`
  height: 60px;
  width: auto;
  max-width: 250px;
  object-fit: contain;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 60px;
    max-width: 200px;
  }
`,ap=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  justify-content: flex-start;

  @media (max-width: 968px) {
    display: none;
  }
`,lp=n.Ay.button`
  padding: 10px 20px;
  background: transparent;
  border: none;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  font-size: 15px;
  font-weight: 500;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  font-family: ${e=>{var t;return`${(null===(t=e.theme)||void 0===t?void 0:t.font)||"system-ui"}, "Noto Kufi Arabic"`}};
  opacity: ${e=>e.disabled?.6:1};

  &:hover {
    ${e=>{var t,o;return e.disabled?"":`\n      background: ${(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}15;\n      color: ${(null===(o=e.theme)||void 0===o?void 0:o.mainColor)||"#007bff"};\n      transform: translateY(-2px);\n    `}}
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    transition: width 0.3s ease;
  }

  &:hover::after {
    ${e=>e.disabled?"":"width: 60%;"}
  }
`,sp=n.Ay.span`
  display: inline-block;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,dp=(n.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 10px;
  width: 50px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,n.Ay.div`
  width: 100%;
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.languagebackground)||"#f0f0f0"}};
  opacity: 0.6;
  position: absolute;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
`,n.Ay.div`
  position: absolute;
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.languagebackground)||"#f0f0f0"}};
  left: ${e=>"en"===e.activeLanguage?"0px":"25px"};
  transition: all ease-in-out 0.2s;
  height: 100%;
  width: 50%;
  z-index: 2;
  border-radius: 10px;
`,n.Ay.div`
  z-index: 3;
  flex: 1;
  height: 100%;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.languageTextColor)||"#333333"}};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
  user-select: none;
`,n.Ay.button`
  display: flex;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||(null===(o=e.theme)||void 0===o?void 0:o.maincolor)||"#007bff"}};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 22px;
  flex-shrink: 0;
  z-index: 2;

  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }

  @media (min-width: 969px) {
    display: none;
    order: unset;
  }

  @media (max-width: 968px) {
    order: 0;
  }

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    font-size: 22px;
  }
`),cp=(n.Ay.div`
  font-size: 24px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
`,n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`),pp=n.Ay.div`
  position: fixed;
  top: 0;
  left: ${e=>"ar"===e.activeLanguage?"auto":"0"};
  right: ${e=>"ar"===e.activeLanguage?"0":"auto"};
  width: 280px;
  max-width: 85vw;
  height: 100%;

  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"#ffffff"}};
  box-shadow: ${e=>"ar"===e.activeLanguage?"-2px 0 20px rgba(0, 0, 0, 0.15)":"2px 0 20px rgba(0, 0, 0, 0.15)"};
  z-index: 5000;
  padding: 0;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 0;
  transform: ${e=>e.isOpen?"translateX(0)":"ar"===e.activeLanguage?"translateX(100%)":"translateX(-100%)"};
  transition: transform 0.3s ease;
  overflow-y: auto;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  border-top-right-radius: ${e=>"ar"===e.activeLanguage?"0":"20px"};
  border-bottom-right-radius: ${e=>"ar"===e.activeLanguage?"0":"20px"};
  border-top-left-radius: ${e=>"ar"===e.activeLanguage?"20px":"0"};
  border-bottom-left-radius: ${e=>"ar"===e.activeLanguage?"20px":"0"};
`,up=(n.Ay.button`
  padding: 16px 20px;
  background: transparent;
  border: none;
  border-radius: 12px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  font-family: ${e=>{var t;return`${(null===(t=e.theme)||void 0===t?void 0:t.font)||"system-ui"}, "Noto Kufi Arabic"`}};
  width: 100%;
  display: flex;
  align-items: center;
  ${e=>"ar"===e.activeLanguage?"justify-content: flex-end;":"justify-content: flex-start;"}

  &:hover {
    background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}}15;
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    transform: translateX(${e=>"ar"===e.activeLanguage?"-4px":"4px"});
  }

  &:active {
    transform: translateX(0);
  }
`,n.Ay.div`
  width: 100%;
  margin-bottom: 4px;
  animation: slideInFromLeft 0.4s ease-out;
  animation-fill-mode: both;
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.15s; }
  &:nth-child(4) { animation-delay: 0.2s; }
  &:nth-child(5) { animation-delay: 0.25s; }
`),xp=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  border-bottom: none;
  opacity: ${e=>e.disabled?.6:1};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  background: transparent;

  &:hover {
    ${e=>{var t;return e.disabled?"":`\n      background: ${(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}10;\n    `}}
  }
`,hp=n.Ay.div`
  font-size: 20px;
  color: ${e=>{var t,o,i;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||(null===(o=e.theme)||void 0===o?void 0:o.maincolor)||(null===(i=e.theme)||void 0===i?void 0:i.textColor)||"#333333"}};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  flex-shrink: 0;
`,gp=n.Ay.span`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  flex: 1;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,mp=n.Ay.div`
  font-size: 12px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#666666"}};
  margin-${e=>"ar"===e.activeLanguage?"right":"left"}: auto;
  transition: transform 0.3s ease;
  flex-shrink: 0;
`,fp=n.Ay.div`
  width: 100%;
  padding: 8px 0;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.backgroundColor)||"rgba(0, 0, 0, 0.02)"}};
`,vp=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0;
`,bp=n.Ay.button`
  width: 100%;
  padding: 12px 24px;
  padding-left: ${e=>"ar"===e.activeLanguage?"24px":"48px"};
  padding-right: ${e=>"ar"===e.activeLanguage?"48px":"24px"};
  border: none;
  background: ${e=>{var t,o;return e.active?((null===(t=e.theme)||void 0===t?void 0:t.mainColor)||(null===(o=e.theme)||void 0===o?void 0:o.maincolor)||"#007bff")+"20":"transparent"}};
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  transition: all 0.3s ease;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  border-bottom: none;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &:hover {
    background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}}15;
    color: ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||(null===(o=e.theme)||void 0===o?void 0:o.maincolor)||"#007bff"}};
  }
`,yp=n.Ay.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 4px;
`,wp=n.Ay.span`
  flex: 1;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,$p=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  margin-bottom: 5px;
  animation: slideInFromLeft 0.3s ease-out;
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,jp=n.Ay.img`
  height: 60px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
`,Cp=n.Ay.button`
  position: absolute;
  top: 20px;
  ${e=>"ar"===e.activeLanguage?"left: 20px;":"right: 20px;"}
  background: transparent;
  border: none;
  font-size: 24px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#333333"}};
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 10;
  
  &:hover {
    background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}}15;
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
    transform: rotate(90deg);
  }
`,kp=(n.Ay.div`
  width: 100%;
  height: 1px;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.borderColor)||"rgba(0, 0, 0, 0.1)"}};
  margin: 4px 0;
`,n.Ay.div`
  width: 100%;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  margin-top: 10px;
`),Ap=n.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
`,Lp=n.Ay.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.boxColor)||"#f8f9fa"}};
  color: ${e=>{var t,o,i,n,r,a;return null!==(t=e.platform)&&void 0!==t&&t.toLowerCase().includes("facebook")?"#1877F2":null!==(o=e.platform)&&void 0!==o&&o.toLowerCase().includes("instagram")?"#E4405F":null!==(i=e.platform)&&void 0!==i&&i.toLowerCase().includes("twitter")?"#1DA1F2":null!==(n=e.platform)&&void 0!==n&&n.toLowerCase().includes("whatsapp")?"#25D366":null!==(r=e.platform)&&void 0!==r&&r.toLowerCase().includes("tiktok")?"#000000":(null===(a=e.theme)||void 0===a?void 0:a.mainColor)||"#007bff"}};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,zp=n.Ay.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Sp=n.Ay.div`
  width: 100%;
  padding: 20px 24px;
  text-align: center;
  font-size: 12px;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#666666"}};
  margin-top: auto;
  margin-bottom: 20px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 13px;
  }
`,_p=n.Ay.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,Tp=n.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#1e293b"}};
  transition: color 0.2s ease, transform 0.15s ease;

  &:hover {
    color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#0f172a"}};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#3b82f6"}}55;
  }

  svg {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }
`,Pp=n.Ay.div`
  position: absolute;
  top: calc(100% + 8px);
  ${e=>e.$rtl?"left: 0;":"right: 0;"}
  min-width: 168px;
  padding: 6px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 12px 40px -12px rgba(15, 23, 42, 0.25);
  z-index: 10060;
`,Ep=n.Ay.button`
  display: block;
  width: 100%;
  text-align: ${e=>e.$rtl?"right":"left"};
  padding: 10px 14px;
  margin: 0;
  border: none;
  border-radius: 8px;
  background: ${e=>{var t;return e.$active?`${(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#3b82f6"}22`:"transparent"}};
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.textColor)||"#0f172a"}};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: ${e=>{var t;return`${(null===(t=e.theme)||void 0===t?void 0:t.font)||"system-ui"}, "Noto Kufi Arabic"`}};

  &:hover {
    background: rgba(15, 23, 42, 0.06);
  }
`;var Ip=o(90997);const Fp=a.phF;function Np(e){let{onProductsClick:t,onSocialMediaClick:o,onBranchesClick:n,onFeedbackClick:l,onOrderClick:s,onHomeClick:d,onCategoryClick:c,onContactClick:p,onContactFormClick:u,onAboutClick:x,categories:h,activeCategory:g,setshowSidebar:m,showSidebar:f,restaurant:w,popupHandler:$,isProductDetailsOpen:C=!1}=e;const{restaurantName:k}=(0,b.g)(),A=window.location.hostname.split(".")[0],L="menugic"!==A&&"localhost"!==A&&"www"!==A?A:k,z=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[L]})),S=w||z,_=(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[L])||void 0===o?void 0:o.activeLanguage)||"en"})),T=(0,y.wA)(),[P,E]=(0,i.useState)(!1),[I,F]=(0,i.useState)(!1),[N,B]=(0,i.useState)(!1),O=(0,i.useRef)(null),R=(0,i.useRef)(null),D=e=>{T((0,j.y)({name:L,activeLanguage:e}))};(0,i.useEffect)((()=>{if(!N)return;const e=e=>{R.current&&!R.current.contains(e.target)&&B(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[N]);const U=()=>{E(!1)},q=e=>{e&&e(),U()};null===S||void 0===S||S.branches;let M={},W=!1;if(null!==S&&void 0!==S&&S.social_media)try{M="string"===typeof S.social_media?JSON.parse(S.social_media):S.social_media,W=Object.keys(M).length>0}catch(Y){M={}}return!W&&null!==S&&void 0!==S&&S.socialMedia&&Array.isArray(S.socialMedia)&&(S.socialMedia.forEach((e=>{if(e.platform&&e.link){const t=e.platform.toLowerCase();M[t]=e.link.startsWith("http")?e.link:`https://${e.link}`}})),W=Object.keys(M).length>0),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(tp,{activeLanguage:_,$isProductDetailsOpen:C,children:(0,v.jsxs)(op,{dir:"ar"===_?"rtl":"ltr",children:[(0,v.jsx)(dp,{onClick:()=>{$&&$(null),E(!P)},activeLanguage:_,$lang:_,children:P?(0,v.jsx)(xe.QCr,{}):(0,v.jsx)(Mr.IMk,{})}),(0,v.jsx)(np,{onClick:()=>{d&&d()},style:{cursor:d?"pointer":"default"},children:(null===S||void 0===S?void 0:S.logoURL)&&(0,v.jsx)(rp,{src:`https://storage.googleapis.com/ecommerce-bucket-testing/${S.logoURL}`,alt:(null===S||void 0===S?void 0:S.name)||"Restaurant Logo"})}),(0,v.jsxs)(ap,{activeLanguage:_,children:[d&&(0,v.jsx)(lp,{onClick:()=>q(d),activeLanguage:_,children:(0,v.jsx)(sp,{activeLanguage:_,children:"en"===_?"Homepage":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})}),(0,v.jsx)(lp,{onClick:()=>q(t),activeLanguage:_,children:(0,v.jsx)(sp,{activeLanguage:_,children:"en"===_?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a"})}),(0,v.jsx)(lp,{onClick:()=>q(l),activeLanguage:_,children:(0,v.jsx)(sp,{activeLanguage:_,children:"en"===_?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"})}),x&&(0,v.jsx)(lp,{onClick:()=>q(x),activeLanguage:_,children:(0,v.jsx)(sp,{activeLanguage:_,children:"en"===_?"About us":"\u0645\u0646 \u0646\u062d\u0646"})}),(0,v.jsx)(lp,{onClick:()=>q(n),activeLanguage:_,children:(0,v.jsx)(sp,{activeLanguage:_,children:"en"===_?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"})}),(0,v.jsx)(lp,{onClick:()=>q(u),activeLanguage:_,children:(0,v.jsx)(sp,{activeLanguage:_,children:"en"===_?"Questions & Suggestions":"\u0623\u0633\u0626\u0644\u0629 \u0648\u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a"})})]}),(0,v.jsxs)(ip,{children:[(0,v.jsx)(Ip.A,{ref:O,restaurant:S,restaurantName:L,activeLanguage:_,popupHandler:$}),"en&ar"===(null===S||void 0===S?void 0:S.languages)&&(0,v.jsxs)(_p,{ref:R,children:[(0,v.jsx)(Tp,{type:"button","aria-label":"en"===_?"Language":"\u0627\u0644\u0644\u063a\u0629","aria-expanded":N,onClick:()=>B((e=>!e)),children:(0,v.jsx)(a.S6y,{"aria-hidden":!0})}),N&&(0,v.jsxs)(Pp,{$rtl:"ar"===_,dir:"ar"===_?"rtl":"ltr",children:[(0,v.jsx)(Ep,{type:"button",$active:"en"===_,$rtl:"ar"===_,onClick:()=>{D("en"),B(!1)},children:"English"}),(0,v.jsx)(Ep,{type:"button",$active:"ar"===_,$rtl:"ar"===_,onClick:()=>{D("ar"),B(!1)},children:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"})]})]})]})]})}),P&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(cp,{onClick:U}),(0,v.jsxs)(pp,{activeLanguage:_,isOpen:P,children:[(0,v.jsx)(Cp,{onClick:U,activeLanguage:_,children:(0,v.jsx)(xe.QCr,{})}),(null===S||void 0===S?void 0:S.logoURL)&&(0,v.jsx)($p,{onClick:()=>{d&&(d(),U())},style:{cursor:d?"pointer":"default"},children:(0,v.jsx)(jp,{src:`https://storage.googleapis.com/ecommerce-bucket-testing/${S.logoURL}`,alt:(null===S||void 0===S?void 0:S.name)||"Restaurant Logo"})}),d&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(up,{children:(0,v.jsxs)(xp,{onClick:()=>q(d),children:[(0,v.jsx)(hp,{children:(0,v.jsx)(xe.rQ8,{})}),(0,v.jsx)(gp,{activeLanguage:_,children:"en"===_?"Homepage":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})]})})}),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(up,{children:[(0,v.jsxs)(xp,{onClick:()=>F(!I),children:[(0,v.jsx)(hp,{children:(0,v.jsx)(xe.svy,{})}),(0,v.jsx)(gp,{activeLanguage:_,children:"en"===_?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a"}),(0,v.jsx)(mp,{activeLanguage:_,children:I?(0,v.jsx)(xe.Ucs,{}):(0,v.jsx)(xe.Vr3,{})})]}),I&&(0,v.jsx)(fp,{children:(0,v.jsx)(vp,{children:null===h||void 0===h?void 0:h.sort(((e,t)=>t.priority-e.priority)).map(((e,t)=>(0,v.jsxs)(bp,{onClick:()=>{return t=e.id,c&&c(t),void U();var t},active:g===e.id,activeLanguage:_,children:["horizantal-withoutIcon"!==(null===S||void 0===S?void 0:S.category_type)&&e.image_url&&(0,v.jsx)(yp,{src:(0,de.V)(e.image_url),alt:"en"===_?e.en_category:e.ar_category}),(0,v.jsx)(wp,{children:"en"===_?e.en_category:e.ar_category})]},t)))})})]})}),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(up,{children:(0,v.jsxs)(xp,{onClick:()=>{l&&l(),U()},children:[(0,v.jsx)(hp,{children:(0,v.jsx)(xe.g5D,{})}),(0,v.jsx)(gp,{activeLanguage:_,children:"en"===_?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"})]})})}),(0,v.jsx)(up,{children:(0,v.jsxs)(xp,{onClick:()=>{var e,t;$&&$(null),null===(e=O.current)||void 0===e||null===(t=e.openOrders)||void 0===t||t.call(e),U()},children:[(0,v.jsx)(hp,{children:(0,v.jsx)(xe.kkc,{})}),(0,v.jsx)(gp,{activeLanguage:_,children:"en"===_?"Orders":"\u0627\u0644\u0637\u0644\u0628\u0627\u062a"})]})}),(0,v.jsx)(up,{children:(0,v.jsxs)(xp,{onClick:()=>{var e,t;$&&$(null),null===(e=O.current)||void 0===e||null===(t=e.openWishlist)||void 0===t||t.call(e),U()},children:[(0,v.jsx)(hp,{children:(0,v.jsx)(Fp,{style:{fill:"none",stroke:"currentColor"}})}),(0,v.jsx)(gp,{activeLanguage:_,children:"en"===_?"Wishlist":"\u0627\u0644\u0645\u0641\u0636\u0644\u0629"})]})}),x&&(0,v.jsx)(up,{children:(0,v.jsxs)(xp,{onClick:()=>{x&&x(),U()},children:[(0,v.jsx)(hp,{children:(0,v.jsx)(xe.__w,{})}),(0,v.jsx)(gp,{activeLanguage:_,children:"en"===_?"About us":"\u0645\u0646 \u0646\u062d\u0646"})]})}),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(up,{children:(0,v.jsxs)(xp,{onClick:()=>{n&&n(),U()},children:[(0,v.jsx)(hp,{children:(0,v.jsx)(xe.toK,{})}),(0,v.jsx)(gp,{activeLanguage:_,children:"en"===_?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639"})]})})}),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(up,{children:(0,v.jsxs)(xp,{onClick:()=>{u&&u(),U()},children:[(0,v.jsx)(hp,{children:(0,v.jsx)(xe.gZZ,{})}),(0,v.jsx)(gp,{activeLanguage:_,children:"en"===_?"Questions & Suggestions":"\u0623\u0633\u0626\u0644\u0629 \u0648\u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a"})]})})}),W&&(0,v.jsx)(kp,{activeLanguage:_,children:(0,v.jsx)(Ap,{children:Object.entries(M).map((e=>{let[t,o]=e;if(!o)return null;return(0,v.jsx)(Lp,{href:o.startsWith("http")?o:`https://${o}`,target:"_blank",rel:"noopener noreferrer",platform:t,children:(0,v.jsx)(zp,{platform:t,children:(e=>{const t=(null===e||void 0===e?void 0:e.toLowerCase())||"";return t.includes("facebook")?(0,v.jsx)(xe.iYk,{}):t.includes("instagram")?(0,v.jsx)(xe.ao$,{}):t.includes("tiktok")?(0,v.jsx)(xe.kkU,{}):t.includes("twitter")?(0,v.jsx)(xe.feZ,{}):t.includes("linkedin")?(0,v.jsx)(xe.QEs,{}):t.includes("youtube")?(0,v.jsx)(xe.Vk6,{}):t.includes("whatsapp")?(0,v.jsx)(r.EcP,{}):(0,v.jsx)(xe.f35,{})})(t)})},t)}))})}),(0,v.jsxs)(Sp,{activeLanguage:_,children:["MENUGIC \xa9 Copyright ",(new Date).getFullYear(),' - All rights reserved. Created by "MENUGIC".']})]})]})]})}const Bp=n.Ay.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  background: ${e=>{var t,o,i;return(null===(t=e.theme)||void 0===t?void 0:t.bottomTabBarBackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.navigationBarBackgroundColor)||(null===(i=e.theme)||void 0===i?void 0:i.backgroundColor)||"#ffffff"}};
  border-top: 1px solid ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}20`:"rgba(0, 0, 0, 0.1)"}};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 0 calc(8px + env(safe-area-inset-bottom));
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.08);
  z-index: 1600;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  opacity: ${e=>e.$isProductDetailsOpen?0:1};
  transform: ${e=>e.$isProductDetailsOpen?"translateY(20px)":"translateY(0)"};
  pointer-events: ${e=>e.$isProductDetailsOpen?"none":"auto"};
  
  /* Safe area for devices with notches */
  padding-bottom: max(8px, env(safe-area-inset-bottom));
`,Op=n.Ay.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 4px;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 12px;
  color: ${e=>{var t,o;return e.$active?(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff":(null===(o=e.theme)||void 0===o?void 0:o.textColor)||"#666666"}};
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  &:active {
    transform: scale(0.95);
    opacity: 0.8;
    outline: none;
    border: none;
  }
  
  &:focus {
    outline: none;
    border: none;
  }
  
  &:hover {
    opacity: 0.8;
    background: ${e=>{var t;return null!==(t=e.theme)&&void 0!==t&&t.mainColor?`${e.theme.mainColor}08`:"rgba(0, 123, 255, 0.08)"}};
  }
`,Rp=n.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>e.$isLanguage&&"ar"===e.$activeLanguage?"20px":"22px"};
  transition: transform 0.2s ease, font-size 0.2s ease;
  
  ${Op}:active & {
    transform: scale(0.9);
  }
`,Dp=n.Ay.span`
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
  line-height: 1.2;
`,Up=n.Ay.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupbuttonText)||"#ffffff"}};
  border-radius: 10px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  padding: 0 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 2px solid ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.popupbackgroundColor)||(null===(o=e.theme)||void 0===o?void 0:o.backgroundColor)||"#ffffff"}};
`;n.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 8px;
  width: 50px;
  height: 24px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.languagebackground)||(null===(o=e.theme)||void 0===o?void 0:o.categoryUnactive)||"rgba(0, 0, 0, 0.05)"}};
  opacity: 0.8;
`,n.Ay.div`
  width: 100%;
  background-color: ${e=>{var t,o;return(null===(t=e.theme)||void 0===t?void 0:t.languagebackground)||(null===(o=e.theme)||void 0===o?void 0:o.categoryUnactive)||"rgba(0, 0, 0, 0.05)"}};
  opacity: 0.6;
  position: absolute;
  height: 100%;
  z-index: 1;
  border-radius: 8px;
`,n.Ay.div`
  position: absolute;
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  left: ${e=>"en"===e.$activeLanguage?"0px":"25px"};
  transition: all ease-in-out 0.2s;
  height: 100%;
  width: 50%;
  z-index: 2;
  border-radius: 8px;
`,n.Ay.div`
  z-index: 3;
  flex: 1;
  height: 100%;
  color: ${e=>{var t,o;return e.$activeLanguage===e.$language?(null===(t=e.theme)||void 0===t?void 0:t.popupbuttonText)||"#ffffff":(null===(o=e.theme)||void 0===o?void 0:o.textColor)||"#666666"}};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;
  user-select: none;
`,n.Ay.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 4px;
  transition: all 0.2s ease;
  position: relative;
`;function qp(e){let{activeView:t,showPopup:o=null,onHomeClick:i,onCategoriesClick:n,onCartClick:r,onContactClick:a,onFeedbackClick:l,onBranchesClick:s,restaurantName:d,branches:c,isProductDetailsOpen:p=!1}=e;(0,y.wA)();const u=(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[d])||void 0===o?void 0:o.activeLanguage)||"en"})),x=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[d]})),h=(0,y.d4)((e=>{var t;return(null===(t=e.cart)||void 0===t?void 0:t[d])||[]})).reduce(((e,t)=>e+t.quantity),0),g=[{id:"home",icon:xe.rQ8,label:"en"===u?"Home":"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",onClick:i,active:!o&&"home"===t},{id:"categories",icon:xe.QJV,label:"en"===u?"Categories":"\u0627\u0644\u0641\u0626\u0627\u062a",onClick:n,active:!o&&("categories"===t||"products"===t)},{id:"cart",icon:xe.AsH,label:"en"===u?"Cart":"\u0627\u0644\u0633\u0644\u0629",onClick:r,active:"cart"===o,badge:h>0?h:null},{id:"branches",icon:xe.vq8,label:"en"===u?"Branches":"\u0627\u0644\u0641\u0631\u0648\u0639",onClick:s,active:"location"===o},{id:"feedback",icon:xe.g5D,label:"en"===u?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a",onClick:l,active:"feedback"===o}].filter((e=>"branches"!==e.id||c&&c.length>0));null===x||void 0===x||x.languages;return(0,v.jsx)(Bp,{"data-tab-bar":!0,$isProductDetailsOpen:p,children:g.map((e=>(0,v.jsxs)(Op,{onClick:e.onClick,$active:e.active,activeLanguage:u,children:[(0,v.jsxs)(Rp,{id:"cart"===e.id?"cart-tab-icon":void 0,$isLanguage:!1,$activeLanguage:u,children:[(0,v.jsx)(e.icon,{"data-icon":e.id}),e.badge&&(0,v.jsx)(Up,{children:e.badge})]}),(0,v.jsx)(Dp,{activeLanguage:u,children:e.label})]},e.id)))})}var Mp=o(99998);const Wp=n.i7`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(
      calc((var(--end-x) - var(--start-x)) * 0.5), 
      calc((var(--end-y) - var(--start-y)) * 0.5 - 30px)
    ) scale(0.7);
    opacity: 0.8;
  }
  100% {
    transform: translate(
      calc(var(--end-x) - var(--start-x)), 
      calc(var(--end-y) - var(--start-y))
    ) scale(0.2);
    opacity: 0;
  }
`,Yp=n.Ay.div`
  position: fixed;
  left: var(--start-x);
  top: var(--start-y);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.mainColor)||"#007bff"}};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 10000;
  pointer-events: none;
  animation: ${Wp} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  
  &::before {
    content: "🛒";
    font-size: 20px;
  }
`;function Hp(e){let{trigger:t,sourceElement:o,onComplete:n}=e;const[r,a]=(0,i.useState)(!1),[l,s]=(0,i.useState)(null);return(0,i.useEffect)((()=>{if(!t||!o)return;const e=o.getBoundingClientRect(),i=e.left+e.width/2,r=e.top+e.height/2,l=document.getElementById("cart-tab-icon");if(!l){const e=document.querySelector("[data-tab-bar]");if(e){e.querySelectorAll("button").forEach((e=>{if(e.querySelector('[data-icon="cart"]')){const t=e.getBoundingClientRect(),o=t.left+t.width/2,n=t.top+t.height/2;return s({startX:i,startY:r,endX:o,endY:n}),void a(!0)}}))}return}const d=l.getBoundingClientRect(),c=d.left+d.width/2,p=d.top+d.height/2;s({startX:i,startY:r,endX:c,endY:p}),a(!0);const u=setTimeout((()=>{a(!1),s(null),n&&n()}),600);return()=>clearTimeout(u)}),[t,o,n]),r&&l?(0,Mp.createPortal)((0,v.jsx)(Yp,{style:{"--start-x":`${l.startX}px`,"--start-y":`${l.startY}px`,"--end-x":`${l.endX}px`,"--end-y":`${l.endY}px`}}),document.body):null}function Xp(){const[e,t]=(0,$.ok)(),o=e.get("productId"),n=e.get("categoryId"),r=e.get("page"),[a,c]=(0,i.useState)(!1),{restaurantName:p}=(0,b.g)(),u=window.location.hostname.split(".")[0],x="menugic"!==u&&"localhost"!==u&&"www"!==u?u:p,h=(0,y.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[x]})),g=(0,y.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[x])||void 0===o?void 0:o.activeLanguage)||"en"}));(0,y.wA)();(0,i.useEffect)((()=>(document.documentElement.setAttribute("dir","ar"===g?"rtl":"ltr"),()=>document.documentElement.removeAttribute("dir"))),[g]);const m=3===Number(null===h||void 0===h?void 0:h.template_id)&&(!0===(null===h||void 0===h?void 0:h.show_all_items_category)||1===(null===h||void 0===h?void 0:h.show_all_items_category)||"1"===(null===h||void 0===h?void 0:h.show_all_items_category)),f={id:"all-items",en_category:"All Items",ar_category:"\u0643\u0644 \u0627\u0644\u0623\u0635\u0646\u0627\u0641",isAllItems:!0,priority:999999},j=[...(null===h||void 0===h?void 0:h.categories)||[]].sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0))),C=m?[f,...j]:j,k=(null!==h&&void 0!==h&&h.theme?"string"===typeof h.theme?JSON.parse(h.theme):h.theme:{}).categoryDisplayMode||"classic",A=4===Number(null===h||void 0===h?void 0:h.template_id)&&"shop"===k,L=A?[f,...j]:C,z=()=>{window.history.pushState({},""),re("feedback")},S=()=>{window.history.pushState({},""),re("contactForm")},[_,T]=(0,i.useState)(null),[P,E]=(0,i.useState)(""),[I,F]=(0,i.useState)(null),[N,B]=(0,i.useState)(null),[O,R]=(0,i.useState)(!0),D=(()=>{if(!n)return 0;const e=C.findIndex((e=>e.id==n));return e>=0?e:0})(),[U,q]=(0,i.useState)(D),[M,W]=(0,i.useState)(n?"products":"home"),Y=(0,i.useRef)(M),H=(0,i.useRef)(_),X=(0,i.useRef)(I),[V,K]=(0,i.useState)(0),[Q,J]=(0,i.useState)(null),G=e=>{K((e=>e+1)),J(e)},[Z,ee]=((0,y.d4)((e=>(e.cart[x]||[]).reduce(((e,t)=>e+t.quantity),0))),(0,i.useState)(n||null)),te=function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(o)oe(o);else if(A){W("products"),ee("all-items"),E("");const o=new URLSearchParams(e);o.set("categoryId","all-items"),t(o),window.scrollTo({top:0,behavior:"smooth"})}else W("categories"),window.scrollTo({top:0,behavior:"smooth"})},oe=o=>{ee(o),W("products"),E("");const i=new URLSearchParams(e);i.set("categoryId",o),t(i)},ie=()=>{if(A)return void ne();W("categories"),ee(null),E("");const o=new URLSearchParams(e);o.delete("categoryId"),t(o),window.scrollTo({top:0,behavior:"smooth"})},ne=()=>{W("home"),ee(null),E(""),t({})},re=e=>{document.body.style.overflow=null==e?"auto":"hidden",T(e)};(0,i.useEffect)((()=>{console.log("\ud83d\udd0d PWA Debug Info:"),console.log("- Protocol:",window.location.protocol),console.log("- Host:",window.location.hostname),console.log("- Navigator:",navigator.userAgent);const e=e=>{e.preventDefault(),console.log("\u2705 Install prompt event captured!"),B(e),R(!0)};return window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",(e=>{console.log("\ud83c\udf89 Application installed successfully!")})),()=>{window.removeEventListener("beforeinstallprompt",e)}}),[]),(0,i.useEffect)((()=>{if(null!==h&&void 0!==h&&h.id){var e,t;const o=(null===h||void 0===h||null===(e=h.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,ge.trackVisit)(h.id,o),(0,ge.trackPageView)(h.id,o)}}),[null===h||void 0===h?void 0:h.id]);let ae=JSON.parse((null===h||void 0===h?void 0:h.features)||"{}");return(0,i.useEffect)((()=>{n&&(ee(n),W("products"))}),[n]),(0,i.useEffect)((()=>{if(A&&"categories"===M){W("products"),ee("all-items"),E("");const o=new URLSearchParams(e);o.set("categoryId","all-items"),t(o)}}),[A,M]),(0,i.useEffect)((()=>{!o&&!n||!_||"feedback"!==_&&"contactForm"!==_||re(null)}),[o,n]),(0,i.useEffect)((()=>{"categories"===M&&window.scrollTo({top:0,behavior:"smooth"})}),[M]),(0,i.useEffect)((()=>{Y.current!==M&&("categories"!==M||n||o||r||window.history.pushState({viewMode:"categories"},"",window.location.href),Y.current=M)}),[M,n,o,r]),(0,i.useEffect)((()=>{H.current!==_&&(_&&window.history.pushState({popup:_},"",window.location.href),H.current=_)}),[_]),(0,i.useEffect)((()=>{X.current!==I&&(I&&(re(null),window.history.pushState({sidebar:!0},"",window.location.href)),X.current=I)}),[I]),(0,i.useEffect)((()=>{const e=()=>{const e=null!==new URLSearchParams(window.location.search).get("productId");c(e)};e();const t=window.history.pushState,o=window.history.replaceState;return window.history.pushState=function(){for(var o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];t.apply(window.history,i),setTimeout(e,0)},window.history.replaceState=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];o.apply(window.history,i),setTimeout(e,0)},window.addEventListener("popstate",e),()=>{window.history.pushState=t,window.history.replaceState=o,window.removeEventListener("popstate",e)}}),[e]),(0,i.useEffect)((()=>{const e=e=>{var t;const o=new URLSearchParams(window.location.search),i=o.get("productId"),n=o.get("categoryId"),r=o.get("page");if(I)return void F(!1);if(_)return void re(null);if(i||r||n)return;const a="categories"===(null===e||void 0===e||null===(t=e.state)||void 0===t?void 0:t.viewMode)?"categories":"home";W(a),ee(null),E("")};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[_]),(0,v.jsxs)(l,{id:"wrapper",children:[(0,v.jsx)(Np,{onProductsClick:()=>{"home"===M?te():"products"===M?ie():W("categories")},onSocialMediaClick:()=>{if("home"!==M)ne(),setTimeout((()=>{const e=document.getElementById("social-media-section");e&&e.scrollIntoView({behavior:"smooth"})}),100);else{const e=document.getElementById("social-media-section");e&&e.scrollIntoView({behavior:"smooth"})}},onBranchesClick:()=>{window.history.pushState({},""),re("location")},onContactFormClick:S,onFeedbackClick:z,onOrderClick:()=>{null!==ae&&void 0!==ae&&ae.cart&&re("cart")},onHomeClick:ne,onCategoryClick:oe,onContactClick:S,categories:C,activeCategory:Z,setshowSidebar:F,showSidebar:I,popupHandler:re,isProductDetailsOpen:a||"about"===_,onAboutClick:!1!==(null===h||void 0===h?void 0:h.show_about_us)?()=>{window.history.pushState({},""),re("about")}:void 0}),(0,v.jsxs)(s,{onClick:()=>{null!=_&&re(null)},children:[(0,v.jsx)(d,{showPopup:_}),"home"===M&&(0,v.jsx)(Bc,{onExploreClick:te,setSearchParams:t,searchParams:e,categories:C}),"categories"===M&&!A&&(0,v.jsx)(w,{categories:C,activeCategory:Z,setactiveCategory:ee,setSearchText:E,searchText:P,setshowSidebar:F,showSidebar:I,carouselPosition:U,setcarouselPosition:q,popupHandler:re}),"products"===M&&Z&&!o&&!A&&(0,v.jsx)(Fs,{categoryId:Z,categories:C,onBack:ie,searchText:P,setSearchText:E,popupHandler:re,setshowSidebar:F,showSidebar:I}),"categories"===M&&!A&&(0,v.jsx)(ws,{categories:P?C.filter((e=>"en"===g?e.en_category.toLowerCase().includes(P.toLowerCase()):e.ar_category.toLowerCase().includes(P.toLowerCase()))):C,onCategoryClick:oe}),"products"===M&&A&&(0,v.jsx)(ep,{categories:L,activeCategory:Z||"all-items",setactiveCategory:ee,searchText:P,setSearchText:E,searchParams:e,setSearchParams:t,menu:(null===h||void 0===h?void 0:h.categories)||[],showPopup:_,setcarouselPosition:q,carouselPosition:U,onAddToCart:G}),"products"===M&&Z&&!A&&(0,v.jsx)(ho,{menu:(null===h||void 0===h?void 0:h.categories)||[],activeCategory:Z,showPopup:_,searchText:P,setactiveCategory:ee,setcarouselPosition:q,carouselPosition:U,categories:C,onAddToCart:G})]}),(0,v.jsx)(ti,{restaurant:h,showPopup:_,popupHandler:re}),(null===ae||void 0===ae?void 0:ae.cart)&&(0,v.jsx)(Hn,{restaurant:h,showPopup:_,popupHandler:re}),(0,v.jsx)(as,{showPopup:_,popupHandler:re,activeCategory:Z}),(0,v.jsx)(Cr,{restaurant:h,showPopup:_,popupHandler:re}),(0,v.jsx)(sr,{restaurant:h,showPopup:_,popupHandler:re,isPage:!1}),(0,v.jsx)(Ur,{restaurant:h,showPopup:_,popupHandler:re,isPage:!1}),(0,v.jsx)(qr.A,{showPopup:_,popupHandler:re}),(0,v.jsx)(ra,{categories:C,activeCategory:Z,setactiveCategory:ee,setshowSidebar:F,showSidebar:I,setcarouselPosition:q,onHomeClick:ne,onCategoryClick:oe,onFeedbackClick:z,onContactClick:S,onBranchesClick:()=>{window.history.pushState({},""),re("location")},branches:(null===h||void 0===h?void 0:h.branches)||[]}),o&&(0,v.jsx)(Dl,{productId:o,searchParams:e,setSearchParams:t}),(null===ae||void 0===ae?void 0:ae.install_app)&&(0,v.jsx)(xs,{showInstallPopup:O,onInstall:async()=>{if(!N)return;N.prompt();"accepted"===(await N.userChoice).outcome?console.log("User accepted the install"):console.log("User dismissed the install"),B(null),R(!1)},restaurantName:x,onDismiss:()=>R(!1)}),(0,v.jsx)(qp,{isProductDetailsOpen:a||"about"===_,activeView:M,showPopup:_,onHomeClick:ne,onCategoriesClick:()=>{if("products"===M)ie();else{W("categories"),ee(null);const o=new URLSearchParams(e);o.delete("categoryId"),t(o),window.scrollTo({top:0,behavior:"smooth"})}},onCartClick:()=>{null!==ae&&void 0!==ae&&ae.cart&&re("cart")},onBranchesClick:()=>{window.history.pushState({},""),re("location")},onContactClick:S,onFeedbackClick:z,restaurantName:x,branches:(null===h||void 0===h?void 0:h.branches)||[]}),(0,v.jsx)(Hp,{trigger:V,sourceElement:Q,onComplete:()=>{J(null)}})]})}},2200:(e,t,o)=>{"use strict";o.d(t,{Q:()=>n});const i={dollar:"$",lb:"L.L.",gram:"g",kilogram:"kg",killogram:"kg",IQD:"IQD",JOD:"JOD",SAR:"SAR",AED:"AED",QAR:"QAR",KWD:"KWD",EGP:"EGP"},n=e=>i[e]||e||""},20965:(e,t,o)=>{"use strict";o(42564).default},34848:e=>{"use strict";function t(e,t){if("function"!==typeof e)throw new TypeError("argument fn must be a function");return e}function o(e,t,o){if(!e||"object"!==typeof e&&"function"!==typeof e)throw new TypeError("argument obj must be object");var i=Object.getOwnPropertyDescriptor(e,t);if(!i)throw new TypeError("must call property on owner object");if(!i.configurable)throw new TypeError("property must be configurable")}e.exports=function(e){if(!e)throw new TypeError("argument namespace is required");function i(e){}return i._file=void 0,i._ignored=!0,i._namespace=e,i._traced=!1,i._warned=Object.create(null),i.function=t,i.property=o,i}},26340:(e,t,o)=>{"use strict";var i,n=o(34848)("http-errors"),r=o(40203),a=o(53910),l=o(61033),s=o(51798);function d(e){return Number(String(e).charAt(0)+"00")}function c(e,t){var o=Object.getOwnPropertyDescriptor(e,"name");o&&o.configurable&&(o.value=t,Object.defineProperty(e,"name",o))}function p(e){return"Error"!==e.substr(-5)?e+"Error":e}e.exports=function e(){for(var t,o,i=500,r={},l=0;l<arguments.length;l++){var s=arguments[l],c=typeof s;if("object"===c&&s instanceof Error)i=(t=s).status||t.statusCode||i;else if("number"===c&&0===l)i=s;else if("string"===c)o=s;else{if("object"!==c)throw new TypeError("argument #"+(l+1)+" unsupported type "+c);r=s}}"number"===typeof i&&(i<400||i>=600)&&n("non-error status code; use only 4xx or 5xx status codes");("number"!==typeof i||!a.message[i]&&(i<400||i>=600))&&(i=500);var p=e[i]||e[d(i)];t||(t=p?new p(o):new Error(o||a.message[i]),Error.captureStackTrace(t,e));p&&t instanceof p&&t.status===i||(t.expose=i<500,t.status=t.statusCode=i);for(var u in r)"status"!==u&&"statusCode"!==u&&(t[u]=r[u]);return t},e.exports.HttpError=function(){function e(){throw new TypeError("cannot construct abstract class")}return l(e,Error),e}(),e.exports.isHttpError=(i=e.exports.HttpError,function(e){return!(!e||"object"!==typeof e)&&(e instanceof i||e instanceof Error&&"boolean"===typeof e.expose&&"number"===typeof e.statusCode&&e.status===e.statusCode)}),function(e,t,o){t.forEach((function(t){var i,n=s(a.message[t]);switch(d(t)){case 400:i=function(e,t,o){var i=p(t);function n(e){var t=null!=e?e:a.message[o],l=new Error(t);return Error.captureStackTrace(l,n),r(l,n.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:t,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(n,e),c(n,i),n.prototype.status=o,n.prototype.statusCode=o,n.prototype.expose=!0,n}(o,n,t);break;case 500:i=function(e,t,o){var i=p(t);function n(e){var t=null!=e?e:a.message[o],l=new Error(t);return Error.captureStackTrace(l,n),r(l,n.prototype),Object.defineProperty(l,"message",{enumerable:!0,configurable:!0,value:t,writable:!0}),Object.defineProperty(l,"name",{enumerable:!1,configurable:!0,value:i,writable:!0}),l}return l(n,e),c(n,i),n.prototype.status=o,n.prototype.statusCode=o,n.prototype.expose=!1,n}(o,n,t)}i&&(e[t]=i,e[n]=i)}))}(e.exports,a.codes,e.exports.HttpError)},61033:e=>{"function"===typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var o=function(){};o.prototype=t.prototype,e.prototype=new o,e.prototype.constructor=e}}},29477:(e,t,o)=>{"use strict";var i=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof o.g)return o.g;throw new Error("unable to locate global object")}();e.exports=t=i.fetch,i.fetch&&(t.default=i.fetch.bind(i)),t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response},40203:e=>{"use strict";e.exports=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){return e.__proto__=t,e}:function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(e,o)||(e[o]=t[o]);return e})},53910:(e,t,o)=>{"use strict";var i=o(17662);function n(e){if(!Object.prototype.hasOwnProperty.call(r.message,e))throw new Error("invalid status code: "+e);return r.message[e]}function r(e){if("number"===typeof e)return n(e);if("string"!==typeof e)throw new TypeError("code must be a number or string");var t=parseInt(e,10);return isNaN(t)?function(e){var t=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(r.code,t))throw new Error('invalid status message: "'+e+'"');return r.code[t]}(e):n(t)}e.exports=r,r.message=i,r.code=function(e){var t={};return Object.keys(e).forEach((function(o){var i=e[o],n=Number(o);t[i.toLowerCase()]=n})),t}(i),r.codes=function(e){return Object.keys(e).map((function(e){return Number(e)}))}(i),r.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},r.empty={204:!0,205:!0,304:!0},r.retry={502:!0,503:!0,504:!0}},51798:e=>{"use strict";e.exports=function(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join("").replace(/[^ _0-9a-z]/gi,"")}},42564:(e,t,o)=>{"use strict";o(29477),o(26340)},17662:e=>{"use strict";e.exports=JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a Teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Too Early","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')}}]);
//# sourceMappingURL=487.82e7e450.chunk.js.map