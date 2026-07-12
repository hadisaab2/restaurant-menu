"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[277],{89993:(e,t,o)=>{o.d(t,{w:()=>l});var i=o(11222),n=o(81132),a=o(27303),r=o(26557);o(34304);const l=e=>{let{onSuccess:t,branch_id:o}=e;const{error:l,isLoading:d,status:s,data:p,refetch:c}=(0,a.I)({queryFn:()=>(async e=>{try{if(console.log(e),null!=e&&void 0!=e){const t=(0,n.yd)(e);return await i.A.get(t,{headers:{Authorization:`Bearer ${(0,r.getCookie)("accessToken")}`}})}}catch(l){throw l}})(o),queryKey:[`branch-${o}`],onSuccess:t,retry:!1,cacheTime:0,staleTime:0,refetchOnMount:!0,refetchOnWindowFocus:!0});return{error:l,isLoading:d,status:s,response:p,refetch:c}}},22139:(e,t,o)=>{o.d(t,{c:()=>a});var i=o(11222),n=o(81132);function a(e){if(null==e||""===e)return;if("all-items"===e)return;const t="string"===typeof e?e.trim():String(e);t&&"all-items"!==t&&i.A.put((0,n.O8)(t)).catch((()=>{}))}},45170:(e,t,o)=>{o.d(t,{E:()=>n});var i=o(11222);const n=e=>{let{onSuccess:t,onError:o}=e;return{handleApiCall:async e=>{try{const o=await(async e=>{try{return await i.A.post("http://localhost:4000/feedback",e)}catch(t){throw t}})(e);return t&&t(o),o}catch(n){throw o&&o(n),n}}}}},88282:(e,t,o)=>{o.d(t,{Nb:()=>d,VL:()=>s,oo:()=>l});var i=o(11222),n=o(81132),a=o(27303),r=o(26557);const l=async e=>{try{const t=(0,n.lA)(e);return await i.A.get(t,{headers:{Authorization:`Bearer ${(0,r.getCookie)("accessToken")}`}})}catch(t){throw t}},d=e=>[`products-${e}`],s=e=>{let{onSuccess:t,productId:o}=e;const{error:i,isLoading:n,status:r,data:s,refetch:p}=(0,a.I)({queryFn:()=>l(o),queryKey:d(o),retry:!1,staleTime:3e5,onSuccess:t,refetchOnWindowFocus:!1});return{error:i,isLoading:n,status:r,response:null===s||void 0===s?void 0:s.data,refetch:p}}},9328:(e,t,o)=>{o.d(t,{w:()=>s});var i=o(11222),n=o(81132),a=o(62205),r=o(22139);const l=new Set;const d=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2?arguments[2]:void 0;try{0===t&&function(e){if(!e||"all-items"===e)return;const t=String(e);l.has(t)||(l.add(t),(0,r.c)(e))}(e);const a=(0,n.cI)(e,t,o);return(await i.A.get(a)).data}catch(a){throw a}},s=(e,t)=>{const o=null!=e?String(e):null;return(0,a.q)({queryKey:["products",o,t||"all"],queryFn:e=>{let{pageParam:i=0}=e;return d(o,i,t)},getNextPageParam:(e,t)=>{if(!(e.length<10))return t.length},keepPreviousData:!0,retry:!1,refetchOnWindowFocus:!1,staleTime:0,enabled:!!o})}},32415:(e,t,o)=>{o.d(t,{u:()=>r});var i=o(11222),n=o(81132),a=o(62205);const r=(e,t)=>(0,a.q)({queryKey:["products-by-restaurant",e,t||"all"],queryFn:o=>{let{pageParam:a=0}=o;return async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2?arguments[2]:void 0;if(!e)return[];const a=(0,n.qw)(e,t,o);return(await i.A.get(a)).data||[]}(e,a,t)},getNextPageParam:(e,t)=>{if(!(e.length<10))return t.length},enabled:!!e,refetchOnWindowFocus:!1,retry:!1})},16104:(e,t,o)=>{o.d(t,{$:()=>l});var i=o(11222),n=o(81132),a=o(27303),r=o(26557);const l=e=>{let{onSuccess:t,productId:o}=e;const{error:l,isLoading:d,status:s,data:p,refetch:c}=(0,a.I)({queryFn:()=>(async e=>{try{const t=(0,n.ry)(e);return await i.A.put(t,{headers:{Authorization:`Bearer ${(0,r.getCookie)("accessToken")}`}})}catch(l){throw l}})(o),retry:!1,queryKey:[`logproducts-${o}`],onSuccess:t,refetchOnWindowFocus:!1});return{error:l,isLoading:d,status:s,response:null===p||void 0===p?void 0:p.data,refetch:c}}},58321:(e,t,o)=>{o.d(t,{o:()=>a});var i=o(11222),n=o(81132);const a=async e=>await i.A.post(n.aU,e)},16106:(e,t,o)=>{o.d(t,{A:()=>s});var i=o(82483),n=o(35238),a=o(71481),r=o(56723);const l={width:"100%",height:"180px",borderRadius:10},d={lat:33.8938,lng:35.5018};function s(e){let{apiKey:t,onLocationConfirm:o,selectedLocation:s,hasError:p,theme:c,activeLanguage:u="en"}=e;const g=(e,t)=>"ar"===u?t:e,{isLoaded:x,loadError:h}=(0,n.KD)({googleMapsApiKey:t}),[m,f]=(0,i.useState)(!1),[v,b]=(0,i.useState)(s?{lat:s.latitude,lng:s.longitude}:null),[y,w]=(0,i.useState)(s?{lat:s.latitude,lng:s.longitude}:d),[$,C]=(0,i.useState)((null===s||void 0===s?void 0:s.address)||""),[k,j]=(0,i.useState)(!1),[A,z]=(0,i.useState)(""),L=(0,i.useRef)(null),S=(null===c||void 0===c?void 0:c.mainColor)||(null===c||void 0===c?void 0:c.maincolor)||"#007bff",P=(0,i.useCallback)(((e,t)=>{var o,i;if(null===(o=window.google)||void 0===o||null===(i=o.maps)||void 0===i||!i.Geocoder)return;(new window.google.maps.Geocoder).geocode({location:{lat:e,lng:t}},((o,i)=>{"OK"===i&&o[0]?C(o[0].formatted_address):C(`${e.toFixed(6)}, ${t.toFixed(6)}`)}))}),[]),T=(0,i.useCallback)((e=>{const t=e.latLng.lat(),o=e.latLng.lng();b({lat:t,lng:o}),P(t,o)}),[P]),I=(0,i.useCallback)((e=>{const t=e.latLng.lat(),o=e.latLng.lng();b({lat:t,lng:o}),P(t,o)}),[P]),F=(0,i.useCallback)((()=>{navigator.geolocation?(j(!0),z(""),navigator.geolocation.getCurrentPosition((e=>{var t,i;const{latitude:n,longitude:a}=e.coords,r={lat:n,lng:a};if(b(r),w(r),j(!1),null!==(t=window.google)&&void 0!==t&&null!==(i=t.maps)&&void 0!==i&&i.Geocoder){(new window.google.maps.Geocoder).geocode({location:r},((e,t)=>{const i="OK"===t&&e[0]?e[0].formatted_address:`${n.toFixed(6)}, ${a.toFixed(6)}`;C(i),o({latitude:n,longitude:a,address:i})}))}else{const e=`${n.toFixed(6)}, ${a.toFixed(6)}`;C(e),o({latitude:n,longitude:a,address:e})}}),(()=>{z(g("Unable to retrieve your location","\u062a\u0639\u0630\u0631 \u062a\u062d\u062f\u064a\u062f \u0645\u0648\u0642\u0639\u0643")),j(!1)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})):z(g("Geolocation is not supported by your browser","\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0644\u0627 \u064a\u062f\u0639\u0645 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0645\u0648\u0642\u0639"))}),[P,g,o]),E=(0,i.useCallback)((()=>{f(!0)}),[]),W=(0,i.useCallback)((()=>{v&&(o({latitude:v.lat,longitude:v.lng,address:$}),f(!1))}),[v,$,o]),q=(0,i.useCallback)((()=>{f(!1),s||(b(null),C(""))}),[s]),D=(0,i.useCallback)((e=>{L.current=e}),[]);return(0,i.useEffect)((()=>{if(null!==s&&void 0!==s&&s.latitude&&null!==s&&void 0!==s&&s.longitude){const e={lat:s.latitude,lng:s.longitude};b(e),w(e),s.address&&C(s.address)}}),[s]),h?(0,r.jsx)("div",{style:{color:"#ff4444",fontSize:13,padding:"8px 0"},children:g("Failed to load Google Maps","\u0641\u0634\u0644 \u062a\u062d\u0645\u064a\u0644 \u062e\u0631\u0627\u0626\u0637 Google")}):(0,r.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:12},children:[(0,r.jsxs)("div",{style:{display:"flex",gap:10},children:[(0,r.jsxs)("button",{type:"button",onClick:F,disabled:k||!x,style:{flex:1,padding:"12px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:k?"not-allowed":"pointer",border:`2px solid ${S}`,background:S,color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",gap:8,opacity:k?.6:1,transition:"all 0.2s ease"},children:[(0,r.jsx)(a.hO$,{}),k?g("Locating...","\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u062f\u064a\u062f..."):g("My Location","\u0645\u0648\u0642\u0639\u064a")]}),(0,r.jsxs)("button",{type:"button",onClick:E,disabled:!x,style:{flex:1,padding:"12px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",border:`2px solid ${(null===c||void 0===c?void 0:c.borderColor)||"rgba(0, 0, 0, 0.1)"}`,background:(null===c||void 0===c?void 0:c.categoryUnActive)||"#ffffff",color:(null===c||void 0===c?void 0:c.popupTextColor)||"#00112b",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"all 0.2s ease"},children:[(0,r.jsx)(a.vq8,{}),g("Pick on Map","\u0627\u062e\u062a\u0631 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629")]})]}),s&&!m&&x&&(0,r.jsxs)("div",{style:{borderRadius:12,overflow:"hidden",border:`2px solid ${(null===c||void 0===c?void 0:c.borderColor)||"rgba(0,0,0,0.1)"}`,position:"relative"},children:[(0,r.jsx)(n.u6,{mapContainerStyle:l,center:{lat:s.latitude,lng:s.longitude},zoom:15,options:{draggable:!1,zoomControl:!1,scrollwheel:!1,disableDoubleClickZoom:!0,streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1},children:(0,r.jsx)(n.pH,{position:{lat:s.latitude,lng:s.longitude}})}),(0,r.jsxs)("div",{style:{padding:"10px 14px",background:(null===c||void 0===c?void 0:c.categoryUnActive)||"#f8f9fa",display:"flex",justifyContent:"space-between",alignItems:"center",gap:8},children:[(0,r.jsxs)("div",{style:{flex:1},children:[(0,r.jsx)("div",{style:{fontSize:12,fontWeight:600,color:(null===c||void 0===c?void 0:c.popupTextColor)||"#00112b",marginBottom:2},children:g("Delivery Location","\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0648\u0635\u064a\u0644")}),(0,r.jsx)("div",{style:{fontSize:11,color:(null===c||void 0===c?void 0:c.popupTextColor)||"#666",lineHeight:1.4},children:s.address||`${s.latitude}, ${s.longitude}`})]}),(0,r.jsxs)("button",{type:"button",onClick:E,style:{padding:"6px 12px",borderRadius:8,border:`1.5px solid ${S}`,background:"transparent",color:S,fontSize:11,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:4,transition:"all 0.2s"},children:[(0,r.jsx)(a.uO9,{size:10}),g("Change","\u062a\u063a\u064a\u064a\u0631")]})]})]}),m&&x&&(0,r.jsxs)("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:99999,background:"#fff",display:"flex",flexDirection:"column",overflow:"hidden"},children:[(0,r.jsxs)("div",{style:{padding:"12px 16px",background:"#fff",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #eee",flexShrink:0},children:[(0,r.jsx)("h3",{style:{margin:0,fontSize:16,fontWeight:600},children:g("Select your location","\u062d\u062f\u062f \u0645\u0648\u0642\u0639\u0643")}),(0,r.jsx)("button",{type:"button",onClick:q,style:{background:"none",border:"none",cursor:"pointer",fontSize:18,color:"#666",padding:4},children:(0,r.jsx)(a.QCr,{})})]}),(0,r.jsxs)("div",{style:{flex:1,position:"relative",minHeight:0},children:[(0,r.jsx)(n.u6,{mapContainerStyle:{width:"100%",height:"100%"},center:y,zoom:15,onClick:T,onLoad:D,options:{streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1,zoomControl:!0},children:v&&(0,r.jsx)(n.pH,{position:v,draggable:!0,onDragEnd:I})}),v&&(0,r.jsxs)("div",{style:{position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",width:"90%",maxWidth:360,background:"#fff",borderRadius:14,boxShadow:"0 8px 32px rgba(0,0,0,0.2)",padding:14,display:"flex",flexDirection:"column",gap:10,zIndex:10},children:[$&&(0,r.jsxs)("div",{style:{fontSize:12,color:"#333",padding:"8px 10px",background:"#f5f5f5",borderRadius:8,display:"flex",alignItems:"flex-start",gap:8,lineHeight:1.4},children:[(0,r.jsx)(a.vq8,{style:{color:S,marginTop:2,flexShrink:0}}),(0,r.jsx)("span",{children:$})]}),(0,r.jsxs)("button",{type:"button",onClick:W,style:{width:"100%",padding:"14px",borderRadius:10,fontSize:15,fontWeight:700,cursor:"pointer",border:"none",background:S,color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",gap:8,boxShadow:`0 4px 16px ${S}50`},children:[(0,r.jsx)(a.CMH,{}),g("Confirm Location","\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0645\u0648\u0642\u0639")]})]}),!v&&(0,r.jsx)("div",{style:{position:"absolute",bottom:30,left:"50%",transform:"translateX(-50%)",background:"#fff",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.15)",padding:"12px 20px",fontSize:13,color:"#666",whiteSpace:"nowrap"},children:g("Tap on the map to place a pin","\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0644\u0648\u0636\u0639 \u062f\u0628\u0648\u0633")})]})]}),A&&(0,r.jsx)("div",{style:{color:"#ff4444",fontSize:13},children:A}),p&&!s&&(0,r.jsx)("div",{style:{color:"#ff4444",fontSize:13},children:g("Please select a location","\u064a\u0631\u062c\u0649 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0645\u0648\u0642\u0639")})]})}},76279:(e,t,o)=>{o.d(t,{A:()=>f});var i=o(82483),n=o(88620),a=o(57526),r=(o(44014),o(41190));r.i7`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`,r.i7`
  from {
    transform: scale(0.95);
    opacity: 0.8;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;const l=r.Ay.div`
  width: 100%;
  position: relative;
  padding: 12px 0 8px 0;
  background: ${e=>e.theme.backgroundColor||"transparent"};
`,d=r.Ay.div`
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin-bottom: 6px;
  position: relative;

  .home-banner-swiper {
    overflow: hidden;
    padding: 0 12px;
  }

  .home-banner-swiper .swiper-wrapper {
    align-items: stretch;
  }

  .home-banner-swiper .swiper-slide {
    height: auto;
    display: flex;
    box-sizing: border-box;
  }
`,s=(r.Ay.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  padding: 10px calc(12.5% - 8px);
  background: transparent;
  box-shadow: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  &:active {
    cursor: grabbing;
  }
  
  @media (max-width: 768px) {
    gap: 12px;
    padding: 8px calc(10% - 6px);
  }
  
  @media (min-width: 1200px) {
    gap: 20px;
    padding: 12px calc(15% - 10px);
  }
`,r.Ay.div`
  width: 100%;
  height: 100%;
  min-height: 260px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${e=>e.theme.categoryUnactive||"#e0e0e0"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

  @media (max-width: 767px) {
    min-height: 240px;
    border-radius: 14px;
  }

  @media (min-width: 768px) {
    min-height: 300px;
  }

  @media (min-width: 1200px) {
    min-height: 340px;
    border-radius: 18px;
  }
`),p=r.Ay.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    transparent 40%,
    rgba(0, 0, 0, 0.35) 100%
  );

  @media (min-width: 1200px) {
    padding: 20px;
  }
`,c=r.Ay.div`
  width: 70%;
  max-width: 100%;
`,u=r.Ay.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  line-height: 1.3;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,g=(r.Ay.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  pointer-events: none;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 0 8px;
  }
  
  @media (min-width: 1200px) {
    padding: 0 32px;
  }
`,r.Ay.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.theme.backgroundColor||"transparent"};
  color: ${e=>e.theme.mainColor||"#1a1a1a"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  font-size: 18px;
  border: solid 1px ${e=>e.theme.mainColor||"#1a1a1a"};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    transform: scale(1.12);
    background: ${e=>e.theme.backgroundColor||"transparent"};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
  
  @media (min-width: 1200px) {
    width: 56px;
    height: 56px;
    font-size: 20px;
  }
`,r.Ay.div`
  display: none;
`,r.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding-bottom: 8px;
  
  @media (max-width: 768px) {
    gap: 8px;
    margin-top: 16px;
    padding-bottom: 6px;
  }
`),x=r.Ay.button`
  width: ${e=>e.$active?"28px":"10px"};
  height: 10px;
  border-radius: 5px;
  border: none;
  background: ${e=>e.$active?e.theme.mainColor||"#007bff":"rgba(0, 0, 0, 0.2)"};
  cursor: pointer;
  padding: 0;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    background: ${e=>e.$active?e.theme.mainColor||"#007bff":"rgba(0, 0, 0, 0.4)"};
    transform: scale(1.15);
  }
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    width: ${e=>e.$active?"24px":"8px"};
    height: 8px;
    border-radius: 4px;
  }
`;var h=o(56723);const m="https://storage.googleapis.com/ecommerce-bucket-testing";function f(e){let{images:t,activeLanguage:o}=e;const r=(0,i.useRef)(null),[f,v]=(0,i.useState)(0),b=(null===t||void 0===t?void 0:t.length)||0;if(!t||0===t.length)return null;return(0,h.jsxs)(l,{className:"m-b10",id:"swiper",children:[(0,h.jsx)(d,{className:"swiper-btn-center-lr1",children:(0,h.jsx)(n.RC,{onSwiper:e=>{r.current=e},onSlideChange:e=>{v(e.realIndex)},modules:[a.Ij],slidesPerView:1.06,spaceBetween:10,loop:!0,loopAdditionalSlides:2,grabCursor:!0,speed:800,autoplay:{delay:3500,disableOnInteraction:!1,pauseOnMouseEnter:!0},className:"home-banner-swiper tag-group recomand-swiper",children:t.map(((e,t)=>{const i=e.url?`${m}/${e.url}`:"",a="ar"===o?e.ar_title:e.en_title;return(0,h.jsx)(n.qr,{children:(0,h.jsx)(s,{className:"card add-banner",style:{backgroundImage:i?`url(${i})`:void 0},children:(0,h.jsx)(p,{className:"card-body",children:(0,h.jsx)(c,{className:"card-info w-70",children:(0,h.jsx)(u,{className:"title mb-2 text-white",children:a||""})})})})},e.id||t)}))})}),b>1&&(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(g,{children:t.map(((e,t)=>(0,h.jsx)(x,{$active:t===f,onClick:()=>(e=>{r.current&&r.current.slideToLoop(e),v(e)})(t),"aria-label":`Go to slide ${t+1}`},t)))})})]})}},58169:(e,t,o)=>{o.d(t,{$D:()=>T,$y:()=>N,A7:()=>x,AL:()=>u,FL:()=>O,FN:()=>g,FW:()=>H,GH:()=>E,Hs:()=>Q,I:()=>c,IP:()=>Z,LO:()=>V,N0:()=>z,Pz:()=>W,Q1:()=>U,T0:()=>te,Tn:()=>A,Uy:()=>B,Z3:()=>C,Zh:()=>s,_V:()=>$,aH:()=>f,bQ:()=>X,eM:()=>M,eo:()=>j,fk:()=>y,gR:()=>q,i8:()=>Y,iF:()=>F,k8:()=>L,kA:()=>J,mK:()=>k,nk:()=>G,pj:()=>_,qm:()=>I,rL:()=>v,tK:()=>D,uF:()=>ee,uL:()=>w,xW:()=>h,zr:()=>K,zs:()=>d});var i=o(41190),n=o(10448);const a=i.i7`
  0% {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
`,r=i.i7`
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
`,l=i.i7`
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
`,d=i.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 299;
  opacity: ${e=>e.CloseAnimation?1:0};
  animation: ${e=>e.CloseAnimation?a:"none"} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  /* Always capture clicks while mounted so closing doesn't let taps pass through to product grid (avoids reopen on 2nd close) */
  pointer-events: auto;
`,s=i.Ay.div`
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
  animation: ${e=>e.CloseAnimation?r:l} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
`,p=i.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,c=(i.i7`
 0% { 
    height:30vh;
    top:0px;
}

 100% { 
    height:70vh;
    top:80px;

    }
`,i.Ay.div`
  width: 100%;
  height: ${e=>e.squareDimension?"55vh":"70vh"};
  margin-top: 5px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  position: relative;
`),u=i.Ay.div`
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
`,g=i.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position:relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
`,x=i.Ay.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  vertical-align: top;
`,h=i.Ay.div`
  height: 100%;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;
`,m=i.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,f=i.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${m} 1s linear infinite; /* Apply animation */
`,v=i.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,b=i.i7`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,y=i.Ay.div`
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
  animation: ${b} 1.2s ease-in-out infinite;
`,w=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;
  margin-top: 12px;
`,$=i.Ay.img`
  height: 100%;
  object-fit: cover;
  border-radius: ${e=>e.$cardSlide?"0":e.CloseAnimation?"40px":"10px"};
  width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"90%":"100%"};
  display: ${e=>e.Loaded?"block":"none"};
  transition: all 0.8s;
  @media (min-width: 1024px) {
    width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"50%":"100%"};
  }
`,C=(i.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,(0,i.Ay)(n.m6W)`
  font-size: 14px;
  color: ${e=>e.theme.backgroundColor||"#ffffff"};
`),k=(0,i.Ay)(n.m6W)`
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
`,j=(0,i.Ay)(n.OQo)`
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
`,A=i.Ay.div`
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
`,z=i.Ay.h2`
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
`,L=i.Ay.button`
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
`,S=(i.Ay.div`
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
`,i.i7`
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
`),P=(i.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${S} 1.8s ease-in-out;
`,i.Ay.div`
  width:90%;
  height: 45vh;
  margin-top: 80px;
  display: flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${p} 0.8s;
  @media (min-width: 1024px) {
    height: ${e=>e.CloseAnimation?"70vh":"30vh"};
    }
`,i.i7`
 0% { 
  margin-top: -20px;
  opacity: 0;
}
100% { 
  margin-top: 10px;
  opacity: 1;
}
`),T=i.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,I=i.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${P} 1.8s ease-in-out;

`,F=i.Ay.div`
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
`,E=i.Ay.div`
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
`,W=i.Ay.span`
  font-size: clamp(1.3rem, 3.8vw, 1.55rem);
  font-weight: 700;
  letter-spacing: ${e=>"en"===e.activeLanguage?"0.02em":"0"};
  line-height: 1.35;
  text-align: ${e=>"en"===e.activeLanguage?"left":"right"};
  color: ${e=>e.theme.textColor};
  flex: 1;
  min-width: 0;
  margin: 0;
`,q=i.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,D=i.Ay.div`
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
`,N=i.Ay.span`
  font-size: clamp(0.9rem, 2.2vw, 1rem);
  font-weight: ${e=>e.discounted?"500":"600"};
  color: ${e=>e.discounted?e.theme.textColor?`${e.theme.textColor}88`:"rgba(0,0,0,0.45)":e.theme.mainColor||"inherit"};
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  letter-spacing: 0.02em;
`,O=i.Ay.span`
  font-size: clamp(1.15rem, 3vw, 1.4rem);
  font-weight: 700;
  color: ${e=>e.theme.mainColor||"inherit"};
  letter-spacing: 0.03em;
`,R=i.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,M=i.Ay.div`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${R} 0.7s ease-in-out;
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
`,_=i.Ay.button`
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
`,K=i.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,G=i.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,H=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,Q=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,U=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,Y=(i.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,i.Ay.div`
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
`),B=i.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`,V=i.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,X=i.Ay.input`
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

`,Z=i.Ay.button`
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
`,J=i.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
`,ee=i.Ay.button`
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
`,te=i.Ay.img`
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
`},5677:(e,t,o)=>{o.d(t,{A:()=>j});var i=o(82483),n=o(41190),a=o(10448);const r=n.Ay.div`
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
`,l=(0,n.Ay)(a.WQq)`
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
`,d=(n.Ay.div`
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
`),s=n.Ay.h3`
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
`,p=(n.Ay.p`
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
`),c=n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,u=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: ${e=>e.$fullWidth?"1 1 100%":"1 1 calc(50% - 6px)"};
  min-width: 0;
  
  @media (max-width: 280px) {
    flex: 1 1 100%;
  }
`,g=n.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  
  @media (max-width: 280px) {
    flex-direction: column;
    gap: 12px;
  }
`,x=n.Ay.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0px !important;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupTextColor)||"#333333"}};
  margin-top: 2px;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,h=n.Ay.input`
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
`,m=n.Ay.select`
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
`,f=n.Ay.textarea`
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
`,v=n.Ay.button`
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
`,b=n.Ay.div`
  color: #dc3545;
  font-size: 13px;
  margin-top: -8px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,y=n.Ay.div`
  color: #28a745;
  font-size: 14px;
  text-align: center;
  padding: 12px;
  background: #d4edda;
  border-radius: 8px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`;var w=o(93376),$=o(91965),C=o(58321),k=o(56723);function j(e){let{showPopup:t,popupHandler:o,restaurant:n,isPage:a=!1,onClose:j}=e;const{restaurantName:A}=(0,w.g)(),z=window.location.hostname.split(".")[0],L="menugic"!==z&&"localhost"!==z&&"www"!==z?z:A,S=(0,$.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[L])||void 0===o?void 0:o.activeLanguage)||"en"})),[P,T]=(0,i.useState)({name:"",email:"",phone:"",type:"question",subject:"",message:""}),[I,F]=(0,i.useState)({}),[E,W]=(0,i.useState)(!1),[q,D]=(0,i.useState)(!1);(0,i.useEffect)((()=>{if(a)return;const e=()=>{o(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[a,o]);const N=e=>{const{name:t,value:o}=e.target;T((e=>({...e,[t]:o}))),I[t]&&F((e=>({...e,[t]:""})))};return(0,k.jsxs)(r,{showPopup:t,isPage:a,children:[(0,k.jsx)(l,{onClick:()=>{j?j():o(null)},activeLanguage:S}),(0,k.jsx)(d,{activeLanguage:S,children:"en"===S?"Contact Us":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"}),(0,k.jsx)(s,{activeLanguage:S,children:"en"===S?"DO YOU HAVE ANY QUESTION OR SUGGESTION?":"\u0647\u0644 \u0644\u062f\u064a\u0643 \u0623\u064a \u0633\u0624\u0627\u0644 \u0623\u0648 \u0627\u0642\u062a\u0631\u0627\u062d\u061f"}),(0,k.jsx)(p,{activeLanguage:S,children:(0,k.jsxs)(c,{onSubmit:async e=>{if(e.preventDefault(),(()=>{const e={};return P.message&&P.message.trim()||(e.message="en"===S?"Message is required":"\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0645\u0637\u0644\u0648\u0628\u0629"),P.email&&P.email.trim()&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(P.email)||(e.email="en"===S?"Please enter a valid email":"\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0635\u062d\u064a\u062d")),F(e),0===Object.keys(e).length})()){W(!0),D(!1);try{await(0,C.o)({restaurant_id:null===n||void 0===n?void 0:n.id,type:P.type||"question",subject:P.subject||null,message:P.message,customer_name:P.name||null,customer_email:P.email||null,customer_phone:P.phone||null,channel:"contact_form"}),D(!0),T({name:"",email:"",phone:"",type:"question",subject:"",message:""}),a?setTimeout((()=>{D(!1)}),2e3):setTimeout((()=>{o(null),D(!1)}),2e3)}catch(r){var t,i;F({submit:(null===r||void 0===r||null===(t=r.response)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.message)||("en"===S?"Failed to send message. Please try again.":"\u0641\u0634\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.")})}finally{W(!1)}}},children:[(0,k.jsxs)(g,{children:[(0,k.jsxs)(u,{children:[(0,k.jsx)(x,{activeLanguage:S,children:"en"===S?"Type":"\u0627\u0644\u0646\u0648\u0639"}),(0,k.jsxs)(m,{name:"type",value:P.type,onChange:N,activeLanguage:S,children:[(0,k.jsx)("option",{value:"question",children:"en"===S?"Question":"\u0633\u0624\u0627\u0644"}),(0,k.jsx)("option",{value:"suggestion",children:"en"===S?"Suggestion":"\u0627\u0642\u062a\u0631\u0627\u062d"})]})]}),(0,k.jsxs)(u,{children:[(0,k.jsx)(x,{activeLanguage:S,children:"en"===S?"Name":"\u0627\u0644\u0627\u0633\u0645"}),(0,k.jsx)(h,{type:"text",name:"name",value:P.name,onChange:N,placeholder:"en"===S?"Name":"\u0627\u0644\u0627\u0633\u0645",activeLanguage:S})]})]}),(0,k.jsxs)(g,{children:[(0,k.jsxs)(u,{children:[(0,k.jsx)(x,{activeLanguage:S,children:"en"===S?"E-mail":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),(0,k.jsx)(h,{type:"email",name:"email",value:P.email,onChange:N,placeholder:"en"===S?"E-mail":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",activeLanguage:S}),I.email&&(0,k.jsx)(b,{children:I.email})]}),(0,k.jsxs)(u,{children:[(0,k.jsx)(x,{activeLanguage:S,children:"en"===S?"Phone Number":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"}),(0,k.jsx)(h,{type:"tel",name:"phone",value:P.phone,onChange:N,placeholder:"en"===S?"Phone Number":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",activeLanguage:S})]})]}),(0,k.jsx)(g,{children:(0,k.jsxs)(u,{$fullWidth:!0,children:[(0,k.jsx)(x,{activeLanguage:S,children:"en"===S?"Subject":"\u0627\u0644\u0645\u0648\u0636\u0648\u0639"}),(0,k.jsx)(h,{type:"text",name:"subject",value:P.subject,onChange:N,placeholder:"en"===S?"Subject":"\u0627\u0644\u0645\u0648\u0636\u0648\u0639",activeLanguage:S})]})}),(0,k.jsxs)(u,{$fullWidth:!0,children:[(0,k.jsxs)(x,{activeLanguage:S,children:["en"===S?"Message":"\u0627\u0644\u0631\u0633\u0627\u0644\u0629"," *"]}),(0,k.jsx)(f,{name:"message",value:P.message,onChange:N,placeholder:"en"===S?"Message":"\u0627\u0644\u0631\u0633\u0627\u0644\u0629",activeLanguage:S,rows:2}),I.message&&(0,k.jsx)(b,{children:I.message})]}),I.submit&&(0,k.jsx)(b,{children:I.submit}),q&&(0,k.jsx)(y,{children:"en"===S?"Message sent successfully!":"\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0646\u062c\u0627\u062d!"}),(0,k.jsx)(v,{type:"submit",disabled:E,activeLanguage:S,children:E?"en"===S?"Sending...":"\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0631\u0633\u0627\u0644...":"en"===S?"Send Message":"\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629"})]})})]})}},31088:(e,t,o)=>{o.d(t,{A:()=>j});var i=o(82483),n=o(41190),a=o(10448);const r=n.Ay.div`
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
`,l=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;margin-top: 20px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,d=(0,n.Ay)(a.WQq)`
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
`,s=n.Ay.h2`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupTextColor)||"#333333"}};
  text-align: center;
  flex: 1;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,p=n.Ay.form`
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom:60px;
  direction: ${e=>"ar"===e.activeLanguage?"rtl":"ltr"};
`,c=n.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  
  @media (max-width: 280px) {
    flex-direction: column;
    gap: 8px;
  }
`,u=n.Ay.label`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.popupTextColor)||"#333333"}};
  margin-top: 2px;
  text-align: ${e=>"ar"===e.activeLanguage?"right":"left"};
`,g=n.Ay.div`
  display: flex;
  gap: 8px;
  justify-content: ${e=>"ar"===e.activeLanguage?"flex-end":"flex-start"};
  margin-bottom: 6px;
`,x=n.Ay.div`
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
`,h=n.Ay.input`
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
`,m=n.Ay.textarea`
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
`,f=n.Ay.button`
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
`,v=n.Ay.div`
  color: #dc3545;
  font-size: 14px;
  padding: 10px;
  background-color: #f8d7da;
  border-radius: 6px;
  text-align: center;
`,b=n.Ay.div`
  color: #28a745;
  font-size: 14px;
  padding: 10px;
  background-color: #d4edda;
  border-radius: 6px;
  text-align: center;
`;var y=o(71481),w=o(93376),$=o(91965),C=o(45170),k=o(56723);function j(e){let{showPopup:t,popupHandler:o,restaurant:n,isPage:a=!1,onClose:j}=e;const{restaurantName:A}=(0,w.g)(),z=window.location.hostname.split(".")[0],L="menugic"!==z&&"localhost"!==z&&"www"!==z?z:A,S=(0,$.d4)((e=>{var t,o;return(null===(t=e.restaurant)||void 0===t||null===(o=t[L])||void 0===o?void 0:o.activeLanguage)||"en"})),[P,T]=(0,i.useState)(0),[I,F]=(0,i.useState)(0),[E,W]=(0,i.useState)(""),[q,D]=(0,i.useState)(""),[N,O]=(0,i.useState)(""),[R,M]=(0,i.useState)(""),[_,K]=(0,i.useState)(""),[G,H]=(0,i.useState)(!1),[Q,U]=(0,i.useState)(!1),{handleApiCall:Y}=(0,C.E)({onSuccess:()=>{H(!0),U(!1),setTimeout((()=>{a||o(null),T(0),W(""),D(""),O(""),M(""),K(""),H(!1)}),2e3)},onError:e=>{var t,o;K((null===e||void 0===e||null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message)||("en"===S?"Failed to submit feedback":"\u0641\u0634\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062a\u0639\u0644\u064a\u0642")),U(!1)}});(0,i.useEffect)((()=>{if(a)return;const e=()=>{o(null)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[a,o]);return(0,k.jsxs)(r,{showPopup:t,isPage:a,children:[(0,k.jsxs)(l,{activeLanguage:S,children:[(0,k.jsx)(s,{activeLanguage:S,children:"en"===S?"Feedback":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"}),(0,k.jsx)(d,{activeLanguage:S,onClick:()=>{j?j():o(null)}})]}),(0,k.jsxs)(p,{onSubmit:async e=>{e.preventDefault(),K(""),0!==P?(U(!0),await Y({restaurant_id:null===n||void 0===n?void 0:n.id,rating:P,name:E||null,phone_number:q||null,email:N||null,comments:R||null})):K("en"===S?"Please select a rating":"\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u062a\u0642\u064a\u064a\u0645")},activeLanguage:S,children:[(0,k.jsx)(u,{activeLanguage:S,children:"en"===S?"Rating *":"\u0627\u0644\u062a\u0642\u064a\u064a\u0645 *"}),(0,k.jsx)(g,{activeLanguage:S,children:[1,2,3,4,5].map((e=>(0,k.jsx)(x,{active:e<=(I||P),onClick:()=>T(e),onMouseEnter:()=>F(e),onMouseLeave:()=>F(0),children:(0,k.jsx)(y.gt3,{})},e)))}),(0,k.jsxs)(c,{activeLanguage:S,children:[(0,k.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"4px",minWidth:0},children:[(0,k.jsx)(u,{activeLanguage:S,children:"en"===S?"Name":"\u0627\u0644\u0627\u0633\u0645"}),(0,k.jsx)(h,{type:"text",activeLanguage:S,dir:"en"===S?"ltr":"rtl",placeholder:"en"===S?"Your name (optional)":"\u0627\u0633\u0645\u0643 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",value:E,onChange:e=>W(e.target.value)})]}),(0,k.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"4px",minWidth:0},children:[(0,k.jsx)(u,{activeLanguage:S,children:"en"===S?"Phone Number":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"}),(0,k.jsx)(h,{type:"tel",activeLanguage:S,dir:"en"===S?"ltr":"rtl",placeholder:"en"===S?"Phone number (optional)":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",value:q,onChange:e=>D(e.target.value)})]})]}),(0,k.jsx)(u,{activeLanguage:S,children:"en"===S?"Email":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),(0,k.jsx)(h,{type:"email",activeLanguage:S,dir:"en"===S?"ltr":"rtl",placeholder:"en"===S?"Email (optional)":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",value:N,onChange:e=>O(e.target.value),style:{width:"100%"}}),(0,k.jsx)(u,{activeLanguage:S,children:"en"===S?"Comments":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"}),(0,k.jsx)(m,{activeLanguage:S,dir:"en"===S?"ltr":"rtl",placeholder:"en"===S?"Your comments (optional)":"\u062a\u0639\u0644\u064a\u0642\u0627\u062a\u0643 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",value:R,onChange:e=>M(e.target.value),rows:4}),_&&(0,k.jsx)(v,{children:_}),G&&(0,k.jsx)(b,{children:"en"===S?"Thank you for your feedback!":"\u0634\u0643\u0631\u0627\u064b \u0644\u062a\u0639\u0644\u064a\u0642\u0643!"}),(0,k.jsx)(f,{type:"submit",disabled:Q||0===P,activeLanguage:S,children:Q?"en"===S?"Submitting...":"\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0631\u0633\u0627\u0644...":"en"===S?"Submit Feedback":"\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062a\u0639\u0644\u064a\u0642"})]})]})}},2200:(e,t,o)=>{o.d(t,{Q:()=>n});const i={dollar:"$",lb:"L.L.",gram:"g",kilogram:"kg",killogram:"kg",IQD:"IQD",JOD:"JOD",SAR:"SAR",AED:"AED",QAR:"QAR",KWD:"KWD",EGP:"EGP"},n=e=>i[e]||e||""}}]);
//# sourceMappingURL=277.502b559e.chunk.js.map