"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[849],{92733:(e,i,t)=>{t.d(i,{A:()=>c});t(82483);var o=t(76279),n=t(41190);const r=n.Ay.section`
  width: 100%;
  position: relative;
  padding: 0 0 8px;
  margin-bottom: ${e=>"theme1"===e.$variant?"4px":"12px"};
`,a=n.Ay.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(96%, 720px);
  height: 120px;
  background: radial-gradient(
    ellipse 80% 70% at 50% 0%,
    ${e=>e.theme.mainColor||"#2563eb"}22,
    transparent 72%
  );
  pointer-events: none;
  z-index: 0;
`,l=n.Ay.div`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(
    180deg,
    ${e=>e.theme.BoxColor||"rgba(255,255,255,0.6)"} 0%,
    ${e=>e.theme.backgroundColor||"#f8f9fa"} 100%
  );
  box-shadow: none;
  overflow: hidden;

  @media (min-width: 768px) {
    border-radius: 0 0 24px 24px;
    max-width: min(100%, 960px);
  }
`,s=n.Ay.div`
  width: 100%;

  /* Tighten theme3 slider padding inside this frame */
  #swiper {
    padding-top: 0;
    padding-bottom: 28px;
  }
`;var d=t(56723);function c(e){let{images:i,activeLanguage:t="en",variant:n="theme1"}=e;return null!==i&&void 0!==i&&i.length?(0,d.jsxs)(r,{$variant:n,"data-theme12-slider":!0,children:[(0,d.jsx)(a,{"aria-hidden":!0}),(0,d.jsx)(l,{children:(0,d.jsx)(s,{children:(0,d.jsx)(o.A,{images:i,activeLanguage:t})})})]}):null}},65445:(e,i,t)=>{t.d(i,{A:()=>Ge});var o=t(82483),n=t(72929),r=t(58169),a=t(41190),l=t(10448);a.Ay.div`

position: fixed;
height: 100vh;
width: 100%;
align-items: center;
justify-content: center;
top:0;
right: ${e=>e.CloseAnimation?0:"-100%"};
color:${e=>e.theme.textColor};
background-color:${e=>e.theme.backgroundColor};
padding-bottom:150px;

  overflow-x: hidden;
  overflow-y: auto;
  transition: all 1s;
  animation: ${(e,i,t)=>a.i7`
 0% { 
    right: -100%;
    
}
 100% { 
    right: 0;

}
`} 1.1s;
  z-index: 6;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1024px) {
    /* animation: ${e=>{let{x:i,y:t,width:o}=e;return((e,i,t)=>a.i7`
 0% { 
    left: ${e}px;
    top:${i}px;
    width:${t}px;
    height:30vh;
    border-radius: 10px;
    
}
 100% { 
    left: 0;
    top:0;
    width:100%;
    height: 100vh;
    border-radius: 0px;

}
`)(i,t,o)}} 0.8s;
    height: ${e=>e.CloseAnimation?"100vh":"30vh"}; */

    }

`;const s=a.i7`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`,d=(a.i7`
 0% { 
    height:30vh;
    top:0px;
}

 100% { 
    height:70vh;
    top:80px;

    }
`,a.Ay.div`
  width: 100%;
  height: ${e=>e.isNormalCarousel?"auto":e.squareDimension?"55vh":"70vh"};
  min-height: ${e=>e.isNormalCarousel?e.squareDimension?"45vh":"60vh":"unset"};
  margin-top: ${e=>e.isNormalCarousel?"80px":"65px"};
  padding: ${e=>e.isNormalCarousel?"0 5%":"10px 0"};
  transition: all 0.8s;
  display: flex;
  flex-direction: ${e=>e.isNormalCarousel?"column":"row"};
  justify-content: center;
  align-items: center;
  overflow: visible;
  position: relative;
  @media (min-width: 1024px) {
    min-height: ${e=>e.isNormalCarousel?e.squareDimension?"50vh":"65vh":"unset"};
    margin-top: ${e=>e.isNormalCarousel?"90px":"65px"};
  }
`),c=a.Ay.div`
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
`,p=a.Ay.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position:relative;
  transform: ${e=>`translateX(-${100*e.carouselIndex}%)`};
  transition: all 0.2s ease;
`,u=a.Ay.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  vertical-align: top;

`,x=a.Ay.div`
  height: 100%;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;

`,h=a.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,m=a.Ay.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${e=>e.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${h} 1s linear infinite; /* Apply animation */
`,g=a.Ay.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`,f=a.Ay.img`
  height: 100%;
  object-fit: cover;
  border-radius: ${e=>e.$cardSlide?"0":e.CloseAnimation?"40px":"10px"};
  width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"90%":"100%"};
  display: ${e=>e.Loaded?"block":"none"};
  transition: all 0.8s;
  @media (min-width: 1024px) {
    width: ${e=>e.$cardSlide?"100%":e.CloseAnimation?"50%":"100%"};
  }
`,v=a.i7`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`,b=((0,a.Ay)(l.m6W)`
  font-size: 22px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
`,(0,a.Ay)(l.m6W)`
  font-size: 26px;
  padding: 8px;
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  color: ${e=>e.theme.backgroundColor||"#fff"};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  left: 4%;
  top: 45%;
  z-index: 20;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    left: 27%;
  }
`),y=(0,a.Ay)(l.OQo)`
  font-size: 26px;
  padding: 8px;
  background-color: ${e=>e.theme.mainColor||"#007bff"};
  color: ${e=>e.theme.backgroundColor||"#fff"};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 4%;
  top: 45%;
  z-index: 20;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  @media (min-width: 1024px) {
    right: 27%;
  }
`,w=(a.Ay.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${v} 0.8s ease-in-out;
`,a.Ay.div`
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0;
  color: black;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  justify-content: center;
  align-items: center;
`,a.i7`
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
`),j=(a.Ay.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${e=>e.theme.textColor};
  animation: ${w} 1.8s ease-in-out;
`,a.Ay.div`
  width:90%;
  height: 45vh;
  margin-top: 80px;
  display: flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${s} 0.8s;
  @media (min-width: 1024px) {
    height: ${e=>e.CloseAnimation?"70vh":"30vh"};
    }
`,a.i7`
 0% { 
  margin-top: -20px;
  opacity: 0;
}
100% { 
  margin-top: 10px;
  opacity: 1;
}
`),$=a.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,C=a.Ay.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  animation: ${j} 1.8s ease-in-out;

`,A=a.Ay.div`
  width: 90%;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  padding-bottom: 24px;
  color: ${e=>e.theme.textColor};
  @media (min-width: 1024px) {
        width: 50%;
    }
`,k=a.Ay.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${e=>"en"==e.activeLanguage?"0px":null} ;
  margin-right:${e=>"en"==e.activeLanguage?null:"0px"} ;
  text-align:center;
  opacity: 1;
  margin-top: 5px;
`,z=a.Ay.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${e=>"en"==e.activeLanguage?"left":"right"};
  direction: ${e=>"en"==e.activeLanguage?"ltr":"rtl"} ;
  opacity: 0.8;
`,L=a.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.mainColor};
  background: ${e=>e.theme.backgroundColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`,S=a.Ay.div`
display: flex;
flex-direction: row;
gap:8px;
`,I=a.Ay.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${e=>e.discounted?"line-through":"none"};
  word-spacing: 0px;

`,_=a.Ay.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${e=>e.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

`,E=a.i7`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`,F=a.Ay.div`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${E} 0.7s ease-in-out;
  background-color: ${e=>e.theme.backgroundColor};
  z-index: 301;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  box-shadow: 0px -3px 5px rgba(180, 180, 180, 0.1);
  padding-bottom: 10px;
  padding-top: 10px;
  opacity: ${e=>e.CloseAnimation?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.CloseAnimation?"auto":"none"};
  @media (min-width: 1024px) {
    width: 50%;
  }
`,N=a.Ay.button`
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
`,T=a.Ay.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${e=>e.theme.popupbuttonText};
  word-spacing: 1px;

`,D=a.Ay.div`
  display: ${e=>e.CloseAnimation?"flex":"none"};
  flex-direction: row;
  height: 45px;
  color: ${e=>e.theme.mainColor};
  width: 60%;
  z-index: 2000;

`,W=a.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,R=a.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`,X=a.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`,P=a.i7`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`,q=(a.Ay.div`
  display: flex;
 align-items: center;
 justify-content: center;
 height: 27px;
 width: 27px;
 border-radius: 50%;
 position: fixed;
  z-index: 8;
  top: 30px;
  background-color: ${e=>e.theme.mainColor};
  color: ${e=>e.theme.backgroundColor};
  right: 30px;
  display: ${e=>e.CloseAnimation?"flex":"none"};
  animation: ${P} 0.8s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`,a.Ay.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${e=>"en"==e.activeLanguage?"flex-start":"flex-end"};;

`),O=a.Ay.span`
 
  font-size: 13px;
  color:${e=>e.theme.formColor};

`,M=a.Ay.input`
background-color: transparent;
border: 1px solid ${e=>{var i;let t=null===e||void 0===e||null===(i=e.theme)||void 0===i?void 0:i.formColor;if(t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.8)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,i)=>`rgba(${i.split(",").slice(0,3).join(",")}, 0.8)`)):t}};
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

`,K=a.Ay.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 25;
  background: rgba(0, 0, 0, 0.45);
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  backdrop-filter: blur(4px);
  transition: background 0.2s;
  &:active {
    background: rgba(0, 0, 0, 0.65);
  }
`,V=a.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
  user-select: none;
  -webkit-user-drag: none;
`,Y=a.Ay.button`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 10000;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 26px;
  cursor: pointer;
  backdrop-filter: blur(4px);
`,Z=a.Ay.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`;var U=t(88282),J=t(91965),B=t(93376),G=t(34304),H=t.n(G),Q=t(86001),ee=t(81926),ie=t(42751);const te=a.Ay.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display:flex;
`,oe=a.Ay.div`
display: flex;
flex-direction: row;
`,ne=a.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${e=>`translateX(${15*e.carouselIndex}px)`};
`,re=a.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${e=>e.theme.mainColor};
`,ae=a.Ay.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`,le=a.Ay.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${e=>e.theme.mainColor};
`,se=a.Ay.div`
 margin-top: 20px;
 font-size: 12px;
 color:${e=>e.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`,de=a.Ay.span`
position: absolute;
left: 0;

`,ce=a.i7`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`,pe=(0,a.Ay)(ie.Z0P)`
    animation:1.2s ${ce}  linear infinite ;
    position: absolute;
`;var ue=t(56723);function xe(e){let{carouselIndex:i,images:t,CloseAnimation:o,carouselSwiped:n}=e;return(0,ue.jsxs)(te,{CloseAnimation:o,children:[(0,ue.jsxs)(oe,{children:[(0,ue.jsx)(ne,{carouselIndex:i,children:(0,ue.jsx)(re,{})}),t.map((e=>(0,ue.jsx)(ae,{children:(0,ue.jsx)(le,{})})))]}),!n&&(0,ue.jsxs)(se,{children:[(0,ue.jsx)(de,{children:"Swipe"}),(0,ue.jsx)(pe,{})]})]})}a.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,a.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;const he=a.Ay.label`
  font-weight: bold;
  margin-bottom: 10px;
  color:${e=>e.theme.mainColor};
  font-size: 14px;
`,me=(a.Ay.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input[type="checkbox"] {
    margin-right: 8px;
    accent-color: ${e=>e.theme.mainColor}; /* Change this color to your desired checkbox color */
  }
`,a.Ay.select`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  color: ${e=>e.theme.backgroundColor};
  background-color: ${e=>e.theme.mainColor};
  &:active{
    outline: none;
    border: 0px;

  }
  `,a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,a.Ay.label`
  display: flex;
  align-items: center;
  input[type="radio"] {
    margin-right: 8px;
    accent-color:${e=>e.theme.mainColor}; /* Change this color to your desired radio button color */
  }
`,a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var i;let t=null===e||void 0===e||null===(i=e.theme)||void 0===i?void 0:i.formColor;if(H().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,i)=>`rgba(${i.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`),ge=a.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-size: 13px;
 /* font-weight: 200; */

`,fe=a.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,ve=a.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color :${e=>e.theme.formColor};
border: 1px solid ${e=>{let i=e.theme.formColor;if(H().isEmpty(i)&&(i="rgb(0,0,0)"),i.startsWith("#")){return`rgba(${parseInt(i.slice(1,3),16)}, ${parseInt(i.slice(3,5),16)}, ${parseInt(i.slice(5,7),16)}, 0.3)`}return i.startsWith("rgb")?i.replace(/rgba?\(([^)]+)\)/,((e,i)=>`rgba(${i.split(",").slice(0,3).join(",")}, 0.3)`)):i}};
  font-size:10px;

`,be=a.Ay.div`
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
color: ${e=>e.theme.backgroundColor};
background-color: ${e=>e.theme.mainColor};
`,ye=(a.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};

`,a.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);var we=t(71481),je=t(41235);function $e(e){let{component:i,formData:t,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,o.useState)(t[i.key]||[]);return(0,ue.jsxs)(me,{index:r,children:[(0,ue.jsx)(he,{children:i.label}),i.values.map((e=>(0,ue.jsxs)(fe,{children:[s.some((i=>i===e.label))?(0,ue.jsx)(be,{onClick:()=>{(e=>{let t=s.filter((i=>i!==e.label));d(t),n(i.key,t)})(e)},children:(0,ue.jsx)(je.RXm,{size:"15px"})}):(0,ue.jsx)(ve,{onClick:()=>{(e=>{d([...s,e.label]),n(i.key,[...s,e.label])})(e)},children:(0,ue.jsx)(we.OiG,{})}),(0,ue.jsx)(ge,{children:e.label})]}))),(c=a,c in l?(0,ue.jsx)(ye,{children:"This field is required"}):null)]});var c}const Ce=a.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};

  border-top: 1px solid ${e=>{var i;let t=null===e||void 0===e||null===(i=e.theme)||void 0===i?void 0:i.formColor;if(H().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,i)=>`rgba(${i.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`,Ae=a.Ay.div`
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
`,ke=a.Ay.span`
  font-size: 10px;
  transition: transform 0.2s;

  &.up {
    transform: rotate(180deg);
  }
`,ze=a.Ay.ul`
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

`,Le=a.Ay.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;


  &.selected {
    background: ${e=>e.theme.backgroundColor};
    color:${e=>e.theme.mainColor};
  }
`,Se=a.Ay.div`
  display: flex; /* Add display flex */
  flex-wrap: wrap;
`,Ie=a.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  align-items: center;
  border-radius:30px;
  background-color: transparent;

`,_e=a.Ay.div`
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
`,Ee=(a.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  margin-top: 20px;
  font-size: 14px;

`,a.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Fe(e){var i;let{component:t,formData:n,handleChange:r,placeholder:a="Select an option",index:l,componentKey:s,formErrors:d}=e;const[c,p]=(0,o.useState)(!1),[u,x]=(0,o.useState)((null===(i=n[t.key])||void 0===i?void 0:i.value)||""),h=(0,o.useRef)(null),m=e=>{x(e.label),p(!1),r(t.key,e)},g=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return(0,o.useEffect)((()=>(document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g))),[]),(0,ue.jsxs)(Ce,{ref:h,index:l,children:[(0,ue.jsx)(he,{children:t.label}),t.data.values.length>8?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsxs)(Ae,{onClick:()=>p((e=>!e)),children:[u||a,(0,ue.jsx)(ke,{className:c?"up":"",children:"\u25bc"})]}),(0,ue.jsx)(ze,{isOpen:c,children:t.data.values.map(((e,i)=>(0,ue.jsx)(Le,{className:u===e.label?"selected":"",onClick:()=>m(e),children:e.label},i)))})]}):(0,ue.jsx)(ue.Fragment,{children:(0,ue.jsx)(Se,{children:t.data.values.map(((e,i)=>(0,ue.jsx)(Ie,{children:(0,ue.jsx)(_e,{selected:u===e.label,onClick:()=>m(e),children:e.label})})))})}),(f=s,f in d?(0,ue.jsx)(Ee,{children:"This field is required"}):null)]});var f}const Ne=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${e=>0!=e.index?"20px":"10px"};
  padding-top: 20px;
  border-top: 1px solid ${e=>{var i;let t=null===e||void 0===e||null===(i=e.theme)||void 0===i?void 0:i.formColor;if(H().isEmpty(t)&&(t="rgb(0,0,0)"),t.startsWith("#")){return`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, 0.08)`}return t.startsWith("rgb")?t.replace(/rgba?\(([^)]+)\)/,((e,i)=>`rgba(${i.split(",").slice(0,3).join(",")}, 0.08)`)):t}};
`,Te=a.Ay.span`
 /* opacity: 0.8; */
 color: ${e=>e.theme.formColor};
 font-weight: 200;

`,De=a.Ay.div`
   display: flex;
  flex-direction: row;
  gap:10px
`,We=a.Ay.div`
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};

`,Re=a.Ay.div`
width: ${e=>e.selected?"5px":"17px"};
height: ${e=>e.selected?"5px":"17px"};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
background-color: ${e=>e.theme.formColor};
transition: all 0.2s ease-in-out ;
`,Xe=(a.Ay.label`
  font-weight: bold;
  margin-bottom: 5px;
  color:${e=>e.theme.formColor};
  font-size: 14px;

`,a.Ay.label`
  font-weight: bold;
  color:red;
  margin-top: 10px;
  font-size: 10px;

`);function Pe(e){let{component:i,formData:t,handleChange:n,index:r,componentKey:a,formErrors:l}=e;const[s,d]=(0,o.useState)(t[i.key]||"");return(0,ue.jsxs)(Ne,{index:r,children:[(0,ue.jsx)(he,{children:i.label}),i.values.map((e=>(0,ue.jsxs)(De,{children:[(0,ue.jsx)(We,{onClick:()=>{(e=>{d(e),n(i.key,e)})(e)},children:(0,ue.jsx)(Re,{selected:s.label==e.label})}),(0,ue.jsx)(Te,{children:e.label})]}))),(c=a,c in l?(0,ue.jsx)(Xe,{children:"This field is required"}):null)]});var c}function qe(e){let{formSchema:i,onPriceChange:t,basePrice:n,formData:r,setFormData:a,formErrors:l}=e;(0,o.useEffect)((()=>{d(r)}),[r]);const s=(e,i)=>{a((t=>({...t,[e]:i})))},d=e=>{let o=parseFloat(n)||0,r=0;null===i||void 0===i||i.components.forEach((i=>{if(e[i.key])if("selectboxes"===i.type&&i.values)e[i.key].forEach((e=>{const t=i.values.find((i=>i.label===e)),o=!isNaN(Number(t.value));t&&t.value&&o&&(t.value.startsWith("+")?r+=parseFloat(t.value.slice(1)):t.value.startsWith("-")&&(r-=parseFloat(t.value.slice(1))))}));else if("select"===i.type&&i.data&&i.data.values){const t=i.data.values.find((t=>{var o;return t.value===(null===(o=e[i.key])||void 0===o?void 0:o.value)})),n=!isNaN(Number(t.value));t&&n&&(t.value.startsWith("+")?r+=parseFloat(t.value.slice(1)):t.value.startsWith("-")?r-=parseFloat(t.value.slice(1)):o=parseFloat(t.value))}else if("radio"===i.type&&i.values){const t=i.values.find((t=>{var o;return t.value===(null===(o=e[i.key])||void 0===o?void 0:o.value)})),n=!isNaN(Number(t.value));t&&n&&(t.value.startsWith("+")?r+=parseFloat(t.value.slice(1)):t.value.startsWith("-")?r-=parseFloat(t.value.slice(1)):o=parseFloat(t.value))}}));const a=o+r,l=a%1!==0?a.toFixed(2):a.toFixed(0);t(l)};return(0,ue.jsx)("form",{style:{width:"100%"},children:null===i||void 0===i?void 0:i.components.map(((e,i)=>((e,i)=>{switch(e.type){case"selectboxes":return(0,ue.jsx)($e,{component:e,formData:r,handleChange:s,index:i,componentKey:e.key,formErrors:l});case"select":return(0,ue.jsx)(Fe,{component:e,formData:r,handleChange:s,index:i,componentKey:e.key,formErrors:l});case"radio":return(0,ue.jsx)(Pe,{component:e,formData:r,handleChange:s,index:i,componentKey:e.key,formErrors:l});default:return null}})(e,i)))})}var Oe=t(42770),Me=t(73556),Ke=t(22829),Ve=t(1901),Ye=t(16104),Ze=t(18907),Ue=t(58821),Je=t(88620),Be=t(57526);t(44014),t(70045),t(5084);function Ge(e){var i,t,a;let{productId:l,setSearchParams:s,searchParams:h}=e;const{restaurantName:v}=(0,B.g)(),w=window.location.hostname.split(".")[0],j="menugic"!==w&&"localhost"!==w&&"www"!==w?w:v,E=(0,J.d4)((e=>{var i;return null===(i=e.restaurant)||void 0===i?void 0:i[j]}));let P=null;const{response:G,isLoading:te}=(0,U.VL)({productId:l,onSuccess:()=>{}}),{response:oe}=(0,Ye.$)({productId:l});var ne;((0,o.useEffect)((()=>{if(!te&&G){var e;Ee(parseFloat(null===G||void 0===G?void 0:G.en_price)||0),Ne(parseFloat(null===G||void 0===G?void 0:G.en_price)||0);const o=parseFloat(null===G||void 0===G||null===(e=G.category)||void 0===e?void 0:e.discount)||0,n=parseFloat(null===G||void 0===G?void 0:G.discount)||0;if(Re(0===o?n:o),null!==E&&void 0!==E&&E.id&&null!==G&&void 0!==G&&G.id){var i,t;const e=(null===E||void 0===E||null===(i=E.branches)||void 0===i||null===(t=i[0])||void 0===t?void 0:t.id)||null;(0,ee.trackItemView)(E.id,G.id,G.category_id,e,{name:G.en_name,price:parseFloat(G.en_price)||0})}}}),[te]),H().isEmpty(null===G||void 0===G?void 0:G.form_json))||(P=H().isEmpty(JSON.parse(null===G||void 0===G?void 0:G.form_json))?null===G||void 0===G||null===(ne=G.category)||void 0===ne?void 0:ne.form_json:null===G||void 0===G?void 0:G.form_json);const[re,ae]=(0,o.useState)({});(0,o.useEffect)((()=>{if(!H().isEmpty(P)){var e;const i=JSON.parse(P);if(ae(i),2===(null===i||void 0===i?void 0:i.version)&&(null===i||void 0===i||null===(e=i.sizes)||void 0===e?void 0:e.length)>0){const e=parseFloat(null===G||void 0===G?void 0:G.en_price)||0,t=i.sizes.find((i=>"absolute"===i.priceMode&&Number(i.priceModifier)===e));se((()=>({...(0,Me.KE)(),sizeId:t?t.id:i.sizes[0].id})))}}}),[P]);const[le,se]=(0,o.useState)({}),[de,ce]=(0,o.useState)({}),pe=(0,J.wA)(),[he,me]=(0,o.useState)(1),[ge,fe]=(0,o.useState)(!1),ve=(0,o.useRef)(null),[be,ye]=(0,o.useState)(!1),[we,$e]=(0,o.useState)(1),[Ce,Ae]=(0,o.useState)({x:0,y:0}),[ke,ze]=(0,o.useState)(!1),Le=(0,o.useRef)(null),Se=(0,o.useRef)(null),Ie=(0,o.useRef)(0),[_e,Ee]=(0,o.useState)(parseFloat(null===G||void 0===G?void 0:G.en_price)||0),[Fe,Ne]=(0,o.useState)(parseFloat(null===G||void 0===G?void 0:G.en_price)||0),[Te,De]=(0,o.useState)(""),[We,Re]=(0,o.useState)(0),Xe=Boolean(null===G||void 0===G?void 0:G.out_of_stock)||1===Number(null===G||void 0===G?void 0:G.out_of_stock),Pe=e=>{Ne(parseFloat(e)||0)},[Ge,He]=(0,o.useState)(!0),[Qe,ei]=(0,o.useState)(0),ii=()=>{He(!1),ei(0),setTimeout((()=>{const e=new URLSearchParams(h);e.delete("productId"),s(e),document.body.style.overflow="auto"}),800)},[ti,oi]=(0,o.useState)(!1),ni=()=>{fe(!0),ei(Qe+1)},ri=()=>{fe(!0),ei(Qe-1)},ai=(0,o.useRef)(null),[li,si]=(0,o.useState)(null),di=null!==E&&void 0!==E&&E.logoURL?`https://storage.googleapis.com/ecommerce-bucket-testing/${E.logoURL}`:null,ci=()=>{$e(1),Ae({x:0,y:0}),ye(!0)};(0,o.useEffect)((()=>{const e=()=>{ii()};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]);const pi=2===(null===re||void 0===re?void 0:re.version)&&Array.isArray(null===re||void 0===re?void 0:re.sizes);let ui=[...null!==(i=null===G||void 0===G?void 0:G.images)&&void 0!==i?i:[]];const xi=ui.findIndex((e=>e.id===G.new_cover_id));if(xi>0){const[e]=ui.splice(xi,1);ui.unshift(e)}const[hi,mi]=(0,o.useState)({}),gi=e=>{mi((i=>({...i,[e]:!0})))},fi="en"===(null===E||void 0===E?void 0:E.activeLanguage)?null===G||void 0===G?void 0:G.en_description:null===G||void 0===G?void 0:G.ar_description;let vi;switch(null===E||void 0===E?void 0:E.currency){case"dollar":vi="$";break;case"lb":vi="L.L.";break;case"gram":vi="g";break;case"kilogram":vi="kg";break;default:vi=""}const bi=(null===E||void 0===E?void 0:E.product_details_carousel_style)||"normal";return(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(n.z,{CloseAnimation:Ge,onClick:ii}),(0,ue.jsx)(n.Z,{CloseAnimation:Ge,$premiumMobile:!te,children:!te&&(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsxs)(r.Tn,{CloseAnimation:Ge,children:[(0,ue.jsx)(r.k8,{onClick:ii,CloseAnimation:Ge,type:"button",children:(0,ue.jsx)(r.Z3,{})}),(0,ue.jsx)(r.N0,{activeLanguage:null===E||void 0===E?void 0:E.activeLanguage,children:"en"==E.activeLanguage?null===G||void 0===G||null===(t=G.category)||void 0===t?void 0:t.en_category:null===G||void 0===G||null===(a=G.category)||void 0===a?void 0:a.ar_category}),(0,ue.jsx)(r.i8,{onClick:()=>{const e=window.location.href;navigator.clipboard.writeText(e),oi(!0),setTimeout((()=>{oi(!1)}),4e3)},CloseAnimation:Ge,children:ti?(0,ue.jsx)(je.RXm,{}):(0,ue.jsx)(ie.zU_,{})})]}),(0,ue.jsx)(d,{squareDimension:null===G||void 0===G?void 0:G.square_dimension,CloseAnimation:Ge,isNormalCarousel:"normal"===bi,children:1===ui.length?(0,ue.jsx)(p,{carouselIndex:0,children:(0,ue.jsx)(u,{children:(0,ue.jsxs)(x,{children:[!hi[0]&&(0,ue.jsx)(g,{children:(0,ue.jsx)(m,{})}),(0,ue.jsx)(f,{src:ui[0].url?(0,Ue.V)(ui[0].url):di||"",onLoad:()=>gi(0),onError:e=>{di&&e.target.src!==di&&(e.target.src=di)},CloseAnimation:Ge,Loaded:hi[0],alt:"Image 0"}),(0,ue.jsx)(K,{onClick:ci,children:(0,ue.jsx)(Ve.gff,{})})]})})}):"normal"===bi?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(b,{CloseAnimation:Ge,onClick:()=>{fe(!0),0!==Qe&&ri()}}),(0,ue.jsx)(y,{CloseAnimation:Ge,onClick:()=>{fe(!0),ui.length>Qe+1&&ni()}}),(0,ue.jsx)(p,{carouselIndex:Qe,ref:ai,onTouchStart:e=>{si(e.touches[0].clientX)},onTouchMove:e=>{if(li){const i=e.touches[0].clientX-li;i>5?0!==Qe&&ri():i<-5&&G.images.length>Qe+1&&ni(),si(null)}},children:ui.map(((e,i)=>(0,ue.jsx)(u,{children:(0,ue.jsxs)(x,{children:[!hi[i]&&(0,ue.jsx)(g,{children:(0,ue.jsx)(m,{})}),(0,ue.jsx)(f,{src:hi[i]||i===Qe?null!==e&&void 0!==e&&e.url?(0,Ue.V)(e.url):di||"":"",onLoad:()=>gi(i),onError:e=>{di&&e.target.src!==di&&(e.target.src=di)},CloseAnimation:Ge,Loaded:hi[i],alt:`Image ${i}`}),Qe===i&&(0,ue.jsx)(K,{onClick:ci,children:(0,ue.jsx)(Ve.gff,{})})]})},e.id||i)))})]}):"effect-cards"===bi?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(b,{CloseAnimation:Ge,onClick:()=>ve.current&&ve.current.slidePrev()}),(0,ue.jsx)(c,{children:(0,ue.jsx)(Je.RC,{modules:[Be.ZD],effect:"cards",grabCursor:!0,onSwiper:e=>{ve.current=e},onSlideChange:e=>{ei(e.realIndex),fe(!0)},children:ui.map(((e,i)=>(0,ue.jsx)(Je.qr,{children:(0,ue.jsxs)(x,{children:[!hi[i]&&(0,ue.jsx)(g,{children:(0,ue.jsx)(m,{})}),(0,ue.jsx)(f,{src:hi[i]||i===Qe?null!==e&&void 0!==e&&e.url?(0,Ue.V)(e.url):di||"":"",onLoad:()=>gi(i),onError:e=>{di&&e.target.src!==di&&(e.target.src=di)},CloseAnimation:Ge,Loaded:hi[i],$cardSlide:!0,alt:`Image ${i}`}),Qe===i&&(0,ue.jsx)(K,{onClick:ci,children:(0,ue.jsx)(Ve.gff,{})})]})},e.id||i)))},null===G||void 0===G?void 0:G.id)}),(0,ue.jsx)(y,{CloseAnimation:Ge,onClick:()=>ve.current&&ve.current.slideNext()})]}):(0,ue.jsx)(ue.Fragment,{children:(0,ue.jsx)(c,{children:(0,ue.jsx)(Je.RC,{onSwiper:e=>{ve.current=e},onSlideChange:e=>{ei(e.realIndex),fe(!0)},modules:[Be.dK],pagination:{type:"fraction"},className:"product-details-swiper product-details-swiper-fraction",initialSlide:0,children:ui.map(((e,i)=>(0,ue.jsx)(Je.qr,{children:(0,ue.jsxs)(x,{children:[!hi[i]&&(0,ue.jsx)(g,{children:(0,ue.jsx)(m,{})}),(0,ue.jsx)(f,{src:hi[i]||i===Qe?null!==e&&void 0!==e&&e.url?(0,Ue.V)(e.url):di||"":"",onLoad:()=>gi(i),onError:e=>{di&&e.target.src!==di&&(e.target.src=di)},CloseAnimation:Ge,Loaded:hi[i],$cardSlide:!0,alt:`Image ${i}`}),Qe===i&&(0,ue.jsx)(K,{onClick:ci,children:(0,ue.jsx)(Ve.gff,{})})]})},e.id||i)))},null===G||void 0===G?void 0:G.id)})})}),1!==ui.length&&"normal"!==bi&&(0,ue.jsx)(xe,{images:ui,carouselIndex:Qe,CloseAnimation:Ge,carouselSwiped:ge}),(0,ue.jsx)($,{children:(0,ue.jsx)(C,{children:(0,ue.jsxs)(A,{CloseAnimation:Ge,activeLanguage:E.activeLanguage,children:[(0,ue.jsx)(k,{activeLanguage:E.activeLanguage,children:"en"==E.activeLanguage?null===G||void 0===G?void 0:G.en_name:null===G||void 0===G?void 0:G.ar_name}),!H().isEmpty(null===G||void 0===G?void 0:G.en_price)&&(0,ue.jsxs)(S,{children:[(0,ue.jsx)(I,{activeLanguage:E.activeLanguage,discounted:0!=We,children:(0,Ze.T)(Fe,vi)}),0!=We&&(0,ue.jsx)(_,{activeLanguage:E.activeLanguage,children:(0,Ze.T)(Fe*(1-parseFloat(We)/100),vi)})]}),(0,ue.jsx)(z,{activeLanguage:E.activeLanguage,dangerouslySetInnerHTML:{__html:fi}}),Xe&&(0,ue.jsx)(L,{children:"en"===E.activeLanguage?"Out of stock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631 \u062d\u0627\u0644\u064a\u0627\u064b"}),pi&&(0,ue.jsx)(Oe.A,{options:re,formData:le,setFormData:se,formErrors:de,activeLanguage:E.activeLanguage,basePrice:null===G||void 0===G?void 0:G.en_price,onPriceChange:Pe}),!pi&&(null===re||void 0===re?void 0:re.components)&&(0,ue.jsx)(qe,{formSchema:re,onPriceChange:Pe,formData:le,setFormData:se,basePrice:null===G||void 0===G?void 0:G.en_price,formErrors:de}),(0,ue.jsxs)(q,{activeLanguage:E.activeLanguage,children:[(0,ue.jsx)(O,{children:"en"==E.activeLanguage?"Any Special Instuction ?":"\u0623\u064a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629\u061f"}),(0,ue.jsx)(M,{activeLanguage:E.activeLanguage,onChange:e=>De(e.target.value),placeholder:"en"==E.activeLanguage?"Special Instruction":"\u062a\u0639\u0644\u064a\u0645\u0627\u062a \u062e\u0627\u0635\u0629"})]})]})})}),!Xe&&(0,ue.jsxs)(F,{CloseAnimation:Ge,children:[(0,ue.jsxs)(D,{CloseAnimation:Ge,children:[(0,ue.jsx)(W,{onClick:()=>{me(he+1)},children:"+"}),(0,ue.jsx)(X,{children:he}),(0,ue.jsx)(R,{onClick:()=>{he>1&&me(he-1)},children:"-"})]}),(0,ue.jsxs)(N,{onClick:()=>{if(pi){var e;const i={};if((null===(e=re.sizes)||void 0===e?void 0:e.length)>0&&(null===le||void 0===le||!le.sizeId)&&(i.size="Please select a size."),Object.keys(i).length>0)return void ce(i)}else if("{}"!==JSON.stringify(re)){const e=function(e,i){const t={},o=function(e){return e.components.filter((e=>{var i;return null===(i=e.validate)||void 0===i?void 0:i.required})).map((e=>e.key))}(e);return o.forEach((e=>{var o;e in i&&0!==(null===(o=i[e])||void 0===o?void 0:o.length)&&"{}"!==JSON.stringify(i[e])||(t[e]="This field is required.")})),t}(re,le);if(Object.keys(e).length>0)return void ce(e)}let i=Fe*(1-parseFloat(We)/100);if(setTimeout((()=>{const e=new URLSearchParams(h);e.delete("productId"),s(e),document.body.style.overflow="auto"}),800),null!==E&&void 0!==E&&E.id&&null!==G&&void 0!==G&&G.id){var t,o;const e=(null===E||void 0===E||null===(t=E.branches)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.id)||null;(0,ee.trackAddToCart)(E.id,G.id,G.category_id,he,e,{name:G.en_name,price:i})}pe((0,Q.bE)(j,G,he,le,i,Te)),He(!1),me(1)},children:["en"==E.activeLanguage?"Add To Cart":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",Fe>0&&(0,ue.jsx)(T,{children:(0,Ze.T)(he*(Fe*(1-We/100)),vi)})]})]})]})}),be&&(0,ue.jsxs)(V,{onTouchStart:e=>{if(2===e.touches.length){const i=e.touches[0].clientX-e.touches[1].clientX,t=e.touches[0].clientY-e.touches[1].clientY;Se.current=Math.hypot(i,t)}else if(1===e.touches.length){const i=Date.now();i-Ie.current<300&&($e((e=>e>1?1:2.5)),Ae({x:0,y:0})),Ie.current=i,Le.current={x:e.touches[0].clientX,y:e.touches[0].clientY},ze(!0)}},onTouchMove:e=>{if(e.preventDefault(),2===e.touches.length){const i=e.touches[0].clientX-e.touches[1].clientX,t=e.touches[0].clientY-e.touches[1].clientY,o=Math.hypot(i,t);if(Se.current){const e=o/Se.current;$e((i=>Math.min(Math.max(i*e,1),5)))}Se.current=o}else if(1===e.touches.length&&ke&&we>1){const i=e.touches[0].clientX-Le.current.x,t=e.touches[0].clientY-Le.current.y;Ae((e=>({x:e.x+i,y:e.y+t}))),Le.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}},onTouchEnd:()=>{Se.current=null,ze(!1)},children:[(0,ue.jsx)(Y,{onClick:()=>ye(!1),children:(0,ue.jsx)(Ke.$8F,{})}),(0,ue.jsx)(Z,{src:(()=>{const e=ui[Qe];return e?e.url?(0,Ue.V)(e.url):di||"":""})(),style:{transform:`scale(${we}) translate(${Ce.x/we}px, ${Ce.y/we}px)`},alt:"Zoom"})]})]})}},72929:(e,i,t)=>{t.d(i,{Z:()=>s,z:()=>l});var o=t(41190);const n=o.i7`
  0% {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
`,r=o.i7`
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
`,a=o.i7`
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
`,l=o.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 299;
  opacity: ${e=>e.CloseAnimation?1:0};
  animation: ${e=>e.CloseAnimation?n:"none"}
    0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: auto;
`,s=o.Ay.div`
  position: fixed;
  width: 92%;
  height: calc(
    100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px
  );
  max-height: calc(
    100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px
  );
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

  animation: ${e=>e.CloseAnimation?r:a}
    0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: forwards;

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
`}}]);
//# sourceMappingURL=849.e1535a64.chunk.js.map