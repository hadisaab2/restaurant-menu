"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[532],{32532:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Qt});var o=t(82483),r=t(99891),n=t(93376),a=t(91965),l=t(17123),s=t(86001),d=t(81926),c=t(18907),p=t(58821),x=t(42770),h=t(45745),m=t(29334),u=t(50074),g=t(67059),f=t(41190);const b=f.i7`from{opacity:0}to{opacity:1}`,y=f.i7`from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}`,v=f.i7`from{transform:translateX(100%)}to{transform:translateX(0)}`,j=f.i7`from{transform:translateX(-100%)}to{transform:translateX(0)}`,w=(f.i7`from{background-position:200% 0}to{background-position:-200% 0}`,f.i7`from{transform:translateY(12px);opacity:0}to{transform:translateY(0);opacity:1}`),C=(f.i7`0%{transform:scale(1)}50%{transform:scale(1.15)}100%{transform:scale(1)}`,f.Ay.div`
  min-height: 100dvh;
  background: ${e=>e.theme.backgroundColor||"#FAFAF8"};
  color: ${e=>e.theme.textColor||"#1A1816"};
  font-family: ${e=>e.theme.font||"'DM Sans'"}, system-ui, -apple-system, sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  direction: ${e=>e.$rtl?"rtl":"ltr"};
  padding-bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  @media(min-width:1024px){ padding-bottom: 0; }
  *:focus-visible { outline: 2px solid ${e=>e.theme.mainColor||"#9E7C0C"}; outline-offset: 2px; }
`),k=f.Ay.div`
  position: fixed; inset: 0; z-index: 100;
  background: rgba(0,0,0,0.45);
  animation: ${b} 250ms ease;
`,A=f.Ay.header`
  position: sticky; top: 0; z-index: 50;
  height: 56px;
  background: ${e=>e.theme.BoxColor||"#fff"};
  border-bottom: 1px solid #E5E2DB;
  transition: box-shadow 250ms;
  ${e=>e.$scrolled&&f.AH`box-shadow: 0 4px 16px rgba(0,0,0,0.07);`}
  @media(min-width:1024px){ height: 64px; }
`,$=f.Ay.div`
  max-width: 1200px; margin: 0 auto; height: 100%;
  display: flex; align-items: center; gap: 12px;
  padding: 0 16px;
  @media(min-width:640px){ padding: 0 24px; }
  @media(min-width:1280px){ padding: 0 32px; }
`,E=f.Ay.div`
  width: 34px; height: 34px; border-radius: 8px; overflow: hidden; flex-shrink: 0;
  background: ${e=>e.theme.categoryActive||"#F7F1DC"};
  display: flex; align-items: center; justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; }
  span { font-family: 'Literata', Georgia, serif; font-weight: 700; font-size: 0.875rem; color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,_=f.Ay.span`
  font-family: 'Literata', Georgia, serif;
  font-weight: 700; font-size: 1rem; color: ${e=>e.theme.textColor||"#1A1816"}; white-space: nowrap;
  ${e=>e.$rtl&&f.AH`font-family: 'Almarai', 'Segoe UI', sans-serif;`}
  @media(min-width:1024px){ font-size: 1.125rem; }
`,z=f.Ay.div`
  display: none;
  @media(min-width:768px){
    display: flex; align-items: center; flex: 1; max-width: 480px;
    margin-inline-start: auto;
  }
  input {
    width: 100%; height: 36px; border-radius: 999px; border: 1px solid #E5E2DB;
    background: ${e=>e.theme.searchbackground||"#F4F2ED"}; padding: 0 16px; font-size: 0.75rem;
    color: ${e=>e.theme.searchTextColor||"#1A1816"}; outline: none; font-family: inherit;
    &::placeholder { color: #918C86; }
    &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
  }
`,F=f.Ay.div`
  display: flex; align-items: center; gap: 6px; margin-inline-start: auto;
  @media(min-width:768px){ margin-inline-start: 12px; }
`,D=f.Ay.button`
  position: relative; display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 999px; border: none; cursor: pointer;
  background: transparent; color: ${e=>e.theme.textColor||"#1A1816"};
  transition: background 150ms, color 150ms;
  &:hover { background: #F4F2ED; }
  svg { width: 18px; height: 18px; }
  @media(min-width:768px){
    &.mobile-only { display: none; }
  }
  @media(min-width:1024px){ width: 40px; height: 40px; }
`,S=f.Ay.button`
  height: 32px; padding: 0 10px; border-radius: 6px; border: 1px solid #E5E2DB;
  background: transparent; color: #5C5752; font-size: 0.75rem; font-weight: 700;
  letter-spacing: 0.02em; cursor: pointer; transition: all 150ms;
  &:hover { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; color: ${e=>e.theme.textColor||"#1A1816"}; }
`,T=f.Ay.span`
  position: absolute; top: 2px; inset-inline-end: 2px;
  min-width: 16px; height: 16px; border-radius: 999px; padding: 0 4px;
  background: ${e=>e.theme.mainColor||"#9E7C0C"}; color: #fff;
  font-size: 9px; font-weight: 700; display: flex; align-items: center; justify-content: center;
  line-height: 1;
`,B=f.Ay.section`
  padding: 20px 16px 16px;
  max-width: 1200px; margin: 0 auto;
  display: flex; gap: 16px; align-items: flex-start;
  @media(min-width:640px){ padding: 24px 24px 20px; }
`,N=f.Ay.div`
  flex: 1; min-width: 0;
`,L=f.Ay.div`
  width: 64px; height: 64px; border-radius: 10px; overflow: hidden; flex-shrink: 0;
  background: ${e=>e.theme.categoryActive||"#F7F1DC"};
  display: flex; align-items: center; justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; }
  span { font-family: 'Literata', Georgia, serif; font-weight: 700; font-size: 1.5rem;
    color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
  @media(min-width:1024px){ width: 72px; height: 72px; }
`,I=f.Ay.h1`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1.375rem; margin: 0 0 4px;
  color: ${e=>e.theme.textColor||"#1A1816"};
  @media(min-width:1024px){ font-size: 1.625rem; }
`,H=f.Ay.p`
  font-size: 0.75rem; color: #5C5752; margin: 0 0 12px;
`,P=f.Ay.div`
  display: flex; align-items: center; gap: 8px 16px; flex-wrap: wrap;
  font-size: 0.6875rem; color: #5C5752; margin-bottom: 12px;
  svg { width: 14px; height: 14px; }
`,R=(f.Ay.span`
  width: 6px; height: 6px; border-radius: 50%;
  background: ${e=>e.$open?"#1B7A3A":"#B5342A"};
`,f.Ay.div`
  display: flex; gap: 8px; flex-wrap: wrap;
`),q=f.Ay.button`
  display: flex; align-items: center; gap: 6px;
  height: 36px; padding: 0 16px; border-radius: 999px;
  border: 1px solid #E5E2DB; background: ${e=>e.theme.BoxColor||"#fff"}; cursor: pointer;
  font-size: 0.6875rem; font-weight: 600; color: ${e=>e.theme.textColor||"#1A1816"};
  transition: border-color 150ms, background 150ms;
  svg { width: 14px; height: 14px; color: #918C86; }
  &:hover { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,M=f.Ay.nav`
  position: sticky; top: 56px; z-index: 40;
  background: ${e=>e.theme.BoxColor||"#fff"};
  border-bottom: 1px solid #E5E2DB;
  @media(min-width:1024px){ top: 64px; display: none; }
`,G=f.Ay.div`
  overflow-x: auto; -webkit-overflow-scrolling: touch;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
  padding: 0 16px;
  max-width: 1200px; margin: 0 auto;
`,O=f.Ay.div`
  display: flex; gap: 4px; padding: 8px 0;
  width: max-content;
`,Y=f.Ay.button`
  flex-shrink: 0; scroll-snap-align: start;
  padding: 8px 12px; border-radius: 999px; border: none;
  font-size: 0.75rem; font-weight: 500; white-space: nowrap; cursor: pointer;
  transition: all 150ms; font-family: inherit;
  background: ${e=>e.$active?e.theme.textColor||"#1A1816":"transparent"};
  color: ${e=>e.$active?"#fff":e.theme.categoryUnactiveText||"#5C5752"};
  ${e=>e.$active&&"font-weight: 600;"}
  &:hover {
    background: ${e=>e.$active?void 0:"#F4F2ED"};
  }
`,V=f.Ay.div`
  max-width: 1200px; margin: 0 auto;
  display: flex; gap: 24px;
  padding: 16px 16px 0;
  @media(min-width:640px){ padding: 16px 24px 0; }
  @media(min-width:1280px){ padding: 16px 32px 0; }
`,U=f.Ay.aside`
  display: none;
  @media(min-width:1024px){
    display: block; flex-shrink: 0; width: 200px;
    position: sticky; top: calc(64px + 16px);
    max-height: calc(100vh - 64px - 32px); overflow-y: auto;
    scrollbar-width: none; &::-webkit-scrollbar { display: none; }
  }
`,X=f.Ay.button`
  display: flex; align-items: center; justify-content: space-between;
  width: 100%; padding: 10px 12px; border: none; border-radius: 10px;
  cursor: pointer; text-align: start; font-size: 0.75rem; font-weight: 500;
  transition: all 150ms; background: transparent; font-family: inherit;
  color: ${e=>e.$active?e.theme.categoryActiveText||"#1A1816":e.theme.categoryUnactiveText||"#5C5752"};
  ${e=>e.$active&&f.AH`
    background: ${e.theme.categoryActive||"#F7F1DC"};
    font-weight: 600;
    border-inline-start: 3px solid ${e.theme.mainColor||"#9E7C0C"};
  `}
  &:hover { background: ${e=>e.$active?void 0:"#F4F2ED"}; }
`,Q=f.Ay.span`
  font-size: 0.625rem; color: #918C86;
  min-width: 20px; height: 20px; border-radius: 999px;
  background: #F4F2ED; display: flex; align-items: center; justify-content: center;
`,J=f.Ay.div`
  flex: 1; min-width: 0; padding-bottom: 24px;
`,W=f.Ay.section`
  margin-bottom: 32px;
`,K=f.Ay.h2`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 600; font-size: 1.125rem; margin: 0 0 16px;
  color: ${e=>e.theme.textColor||"#1A1816"};
  @media(min-width:1024px){ font-size: 1.375rem; }
`,Z=f.Ay.div`
  display: grid; gap: 12px;
  grid-template-columns: 1fr;
  @media(min-width:480px){ grid-template-columns: repeat(2, 1fr); }
  @media(min-width:1024px){ grid-template-columns: repeat(3, 1fr); }
  @media(min-width:1280px){ gap: 16px; }
`,ee=f.Ay.div`
  position: relative; background: ${e=>e.theme.BoxColor||"#fff"};
  border: 1px solid #F0EDE7; border-radius: 10px; overflow: hidden;
  cursor: pointer; transition: border-color 250ms;
  display: flex; flex-direction: row;
  ${e=>e.$unavailable&&f.AH`opacity: 0.5; pointer-events: none;`}
  @media(min-width:480px){ flex-direction: column; }
  &:hover { border-color: #E5E2DB; }
  &::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0;
    height: 2px; background: ${e=>e.theme.mainColor||"#9E7C0C"};
    opacity: 0; transition: opacity 250ms;
  }
  &:hover::after { opacity: 1; }
`,ie=f.Ay.div`
  width: 110px; height: 110px; flex-shrink: 0; overflow: hidden;
  background: #F4F2ED; position: relative;
  @media(min-width:480px){ width: 100%; height: 0; padding-bottom: 75%; }
  img { width: 100%; height: 100%; object-fit: cover; display: block;
    @media(min-width:480px){ position: absolute; inset: 0; }
  }
`,te=f.Ay.span`
  position: absolute; top: 8px; inset-inline-start: 8px; z-index: 2;
  padding: 2px 8px; border-radius: 999px; font-size: 9px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em;
  background: ${e=>"new"===e.$type?"#E8F5EC":"sale"===e.$type?"#FDE8E6":"best"===e.$type?e.theme.mainColor||"#9E7C0C":"featured"===e.$type?"#1A1816":"#F7F1DC"};
  color: ${e=>"new"===e.$type?"#1B7A3A":"sale"===e.$type?"#B5342A":"best"===e.$type||"featured"===e.$type?"#fff":e.theme.mainColor||"#9E7C0C"};
`,oe=f.Ay.div`
  flex: 1; min-width: 0; padding: 12px;
  display: flex; flex-direction: column;
`,re=f.Ay.h3`
  font-weight: 600; font-size: 0.75rem; margin: 0 0 4px;
  color: ${e=>e.theme.BoxTextColor||"#1A1816"};
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
`,ne=f.Ay.p`
  font-size: 0.6875rem; line-height: 1.4; color: #918C86; margin: 0 0 auto;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
`,ae=f.Ay.div`
  display: flex; align-items: center; justify-content: space-between; margin-top: 8px;
`,le=f.Ay.span`
  font-weight: 700; font-size: 0.75rem;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#9E7C0C"};
`,se=f.Ay.span`
  font-size: 0.625rem; color: #918C86; text-decoration: line-through;
  margin-inline-start: 6px;
`,de=f.Ay.button`
  width: 30px; height: 30px; border-radius: 999px; border: none; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; display: flex; align-items: center; justify-content: center;
  transition: background 150ms; flex-shrink: 0;
  svg { width: 14px; height: 14px; }
  &:hover { opacity: 0.85; }
  &:active { transform: scale(0.9); }
`,ce=f.Ay.span`
  font-size: 0.625rem; font-weight: 600; color: #B5342A;
`,pe=f.Ay.footer`
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: rgba(255,255,255,0.7); padding: 48px 16px 24px;
  margin-bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  @media(min-width:640px){ padding: 48px 24px 24px; }
  @media(min-width:1024px){ margin-bottom: 0; }
`,xe=f.Ay.div`
  max-width: 1200px; margin: 0 auto;
`,he=f.Ay.div`
  display: grid; gap: 32px;
  grid-template-columns: 1fr;
  @media(min-width:640px){ grid-template-columns: 2fr 1fr 1fr; }
  @media(min-width:1024px){ grid-template-columns: 2fr 1fr 1fr 1fr; }
`,me=f.Ay.h4`
  font-size: 0.6875rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: rgba(255,255,255,0.5); margin: 0 0 16px;
`,ue=f.Ay.div`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-size: 1.375rem; font-weight: 700; color: #fff; margin-bottom: 12px;
`,ge=f.Ay.p`
  font-size: 0.75rem; color: rgba(255,255,255,0.5); margin: 0 0 6px;
  line-height: 1.5;
`,fe=f.Ay.a`
  display: block; font-size: 0.75rem; color: rgba(255,255,255,0.5);
  text-decoration: none; margin-bottom: 8px; transition: color 150ms;
  &:hover { color: rgba(255,255,255,0.9); }
`,be=f.Ay.div`
  display: flex; gap: 8px; margin-top: 16px;
  a {
    width: 36px; height: 36px; border-radius: 999px; display: flex;
    align-items: center; justify-content: center;
    border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.5);
    text-decoration: none; transition: all 150ms;
    svg { width: 16px; height: 16px; }
    &:hover { background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.3); }
  }
`,ye=f.Ay.div`
  border-top: 1px solid rgba(255,255,255,0.1); margin-top: 32px; padding-top: 16px;
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px;
  font-size: 0.6875rem; color: rgba(255,255,255,0.3);
  a { color: rgba(255,255,255,0.4); text-decoration: none; &:hover { color: rgba(255,255,255,0.7); } }
`,ve=f.Ay.nav`
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 90;
  height: calc(56px + env(safe-area-inset-bottom, 0px));
  padding-bottom: env(safe-area-inset-bottom, 0px);
  background: ${e=>e.theme.bottomTabBarBackgroundColor||"#fff"};
  border-top: 1px solid #F0EDE7;
  display: flex; align-items: center; justify-content: space-around;
  @media(min-width:1024px){ display: none; }
`,je=f.Ay.button`
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  border: none; background: none; cursor: pointer; position: relative;
  padding: 6px 0; min-width: 48px; font-family: inherit;
  color: ${e=>e.$active?e.theme.textColor||"#1A1816":"#918C86"};
  font-size: 10px; font-weight: ${e=>e.$active?600:500};
  transition: color 150ms;
  svg { width: 20px; height: 20px; }
`,we=f.Ay.span`
  position: absolute; top: 0; inset-inline-end: 2px;
  min-width: 14px; height: 14px; border-radius: 999px; padding: 0 3px;
  background: ${e=>e.theme.mainColor||"#9E7C0C"}; color: #fff;
  font-size: 9px; font-weight: 700; display: flex; align-items: center; justify-content: center;
`,Ce=f.Ay.div`
  position: fixed; z-index: 85;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px) + 8px);
  left: 16px; right: 16px;
  @media(min-width:1024px){ display: none !important; }
`,ke=f.Ay.button`
  width: 100%; height: 52px; border: none; border-radius: 14px; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; display: flex; align-items: center; justify-content: space-between;
  padding: 0 16px 0 12px; animation: ${y} 400ms cubic-bezier(0.16,1,0.3,1);
  font-family: inherit; box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  &:hover { background: #2E2C29; }
`,Ae=f.Ay.span`
  display: flex; align-items: center; justify-content: center;
  width: 24px; height: 24px; border-radius: 999px; background: rgba(255,255,255,0.2);
  font-size: 0.6875rem; font-weight: 700; margin-inline-end: 10px;
`,$e=f.Ay.span`
  font-size: 0.75rem; font-weight: 600;
`,Ee=f.Ay.span`
  font-size: 1rem; font-weight: 700;
`,_e=f.Ay.div`
  position: fixed; inset: 0; z-index: 200;
  background: ${e=>e.theme.backgroundColor||"#FAFAF8"};
  animation: ${b} 200ms ease;
  display: flex; flex-direction: column;
  @media(min-width:768px){ display: none; }
`,ze=f.Ay.div`
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px; border-bottom: 1px solid #F0EDE7;
`,Fe=f.Ay.input`
  flex: 1; height: 40px; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.searchTextColor||"#1A1816"};
  padding: 0 16px; font-size: 0.875rem; outline: none; font-family: inherit;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,De=f.Ay.button`
  border: none; background: none; cursor: pointer; font-family: inherit;
  font-size: 0.75rem; font-weight: 600; color: ${e=>e.theme.mainColor||"#9E7C0C"};
`,Se=f.Ay.div`
  flex: 1; overflow-y: auto; padding: 16px;
`,Te=f.Ay.div`
  display: flex; align-items: center; gap: 12px;
  padding: 10px 0; border-bottom: 1px solid #F0EDE7; cursor: pointer;
  &:last-child { border-bottom: none; }
`,Be=f.Ay.div`
  width: 48px; height: 48px; border-radius: 10px; overflow: hidden; flex-shrink: 0;
  background: #F4F2ED;
  img { width: 100%; height: 100%; object-fit: cover; }
`,Ne=f.Ay.div`
  flex: 1; min-width: 0;
  h4 { font-size: 0.75rem; font-weight: 600; margin: 0 0 2px; color: ${e=>e.theme.textColor||"#1A1816"}; }
  p { font-size: 0.6875rem; color: #918C86; margin: 0; }
`,Le=f.Ay.span`
  font-size: 0.75rem; font-weight: 700; flex-shrink: 0;
  color: ${e=>e.theme.mainColor||"#9E7C0C"};
`,Ie=f.Ay.div`
  text-align: center; padding: 48px 0; color: #918C86; font-size: 0.75rem;
`,He=f.Ay.div`
  position: fixed; inset-inline: 0; bottom: 0; z-index: 110;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  border-radius: 20px 20px 0 0; max-height: 70vh; overflow-y: auto;
  padding: 12px 0 calc(16px + env(safe-area-inset-bottom, 0px));
  animation: ${y} 400ms cubic-bezier(0.16,1,0.3,1);
  box-shadow: 0 -8px 30px rgba(0,0,0,0.1);
  @media(min-width:1024px){ max-width: 480px; margin: 0 auto; }
`,Pe=f.Ay.div`
  width: 36px; height: 4px; border-radius: 999px;
  background: #E5E2DB; margin: 0 auto 16px;
`,Re=f.Ay.button`
  display: flex; align-items: center; gap: 14px; width: 100%;
  padding: 14px 24px; border: none; background: none; cursor: pointer;
  font-size: 0.875rem; font-weight: 500; text-align: start; font-family: inherit;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  transition: background 150ms;
  svg { width: 20px; height: 20px; color: #918C86; }
  &:hover { background: #F4F2ED; }
`,qe=f.Ay.div`
  position: fixed; inset: 0; z-index: 110;
  display: flex; align-items: flex-end; justify-content: center;
  background: rgba(0,0,0,0.45); animation: ${b} 250ms;
  @media(min-width:1024px){ align-items: center; }
`,Me=f.Ay.div`
  position: relative; width: 100%; max-height: 92vh;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  border-radius: 20px 20px 0 0; overflow: hidden;
  display: flex; flex-direction: column;
  animation: ${y} 400ms cubic-bezier(0.16,1,0.3,1);
  @media(min-width:1024px){
    max-width: 560px; max-height: 85vh;
    border-radius: 20px;
  }
`,Ge=f.Ay.button`
  position: absolute; top: 12px; inset-inline-end: 12px; z-index: 5;
  width: 32px; height: 32px; border-radius: 999px;
  background: #fff; border: none; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex; align-items: center; justify-content: center;
  color: #1A1816; transition: background 150ms;
  svg { width: 16px; height: 16px; }
  &:hover { background: #F4F2ED; }
`,Oe=f.Ay.div`
  flex: 1; overflow-y: auto; overscroll-behavior: contain;
`,Ye=f.Ay.div`
  position: relative; width: 100%; height: 280px;
  background: #F4F2ED; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
  @media(min-width:1024px){ height: 320px; }
`,Ve=f.Ay.div`
  width: 100%; padding: 32px 0; text-align: center; background: #F4F2ED;
  font-size: 3rem;
`,Ue=f.Ay.div`
  padding: 20px;
`,Xe=f.Ay.h2`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1.375rem; line-height: 1.25; margin: 0 0 8px;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
`,Qe=f.Ay.div`
  font-size: 0.75rem; color: #5C5752; line-height: 1.6; margin: 0 0 12px;
  p { margin: 0; }
`,Je=f.Ay.div`
  display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
`,We=f.Ay.span`
  font-size: 1.125rem; font-weight: 700;
  color: ${e=>e.theme.mainColor||"#9E7C0C"};
`,Ke=f.Ay.span`
  font-size: 0.875rem; color: #918C86; text-decoration: line-through;
`,Ze=f.Ay.span`
  font-size: 0.6875rem; font-weight: 600; padding: 2px 8px;
  border-radius: 999px; background: #FDE8E6; color: #B5342A;
`,ei=f.Ay.div`
  border-top: 1px solid #F0EDE7; padding-top: 16px; margin-bottom: 16px;
`,ii=f.Ay.label`
  display: block; font-size: 0.6875rem; color: #918C86;
  margin-bottom: 8px; font-weight: 600;
`,ti=f.Ay.textarea`
  width: 100%; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.textColor||"#1A1816"};
  padding: 12px; font-size: 0.75rem; resize: none; outline: none;
  font-family: inherit; box-sizing: border-box;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,oi=f.Ay.div`
  padding: 16px 20px; border-top: 1px solid #F0EDE7;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  display: flex; align-items: center; gap: 12px;
`,ri=f.Ay.div`
  display: flex; align-items: center; gap: 4px;
  border-radius: 999px; border: 1px solid #E5E2DB; overflow: hidden;
  button {
    width: 36px; height: 40px; border: none; background: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: #5C5752; transition: background 150ms;
    svg { width: 16px; height: 16px; }
    &:hover { background: #F4F2ED; }
  }
  span { width: 28px; text-align: center; font-size: 0.875rem; font-weight: 600;
    color: ${e=>e.theme.textColor||"#1A1816"}; }
`,ni=f.Ay.button`
  flex: 1; height: 44px; border: none; border-radius: 999px; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; font-size: 0.75rem; font-weight: 600;
  transition: opacity 150ms; font-family: inherit;
  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,ai=f.Ay.div`
  position: fixed; inset: 0; z-index: 110;
  display: flex; justify-content: ${e=>e.$rtl?"flex-start":"flex-end"};
  background: rgba(0,0,0,0.45); animation: ${b} 200ms;
`,li=f.Ay.div`
  width: 100%; max-width: 420px; height: 100%;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  display: flex; flex-direction: column;
  animation: ${e=>e.$rtl?j:v} 400ms cubic-bezier(0.16,1,0.3,1);
  box-shadow: -20px 0 50px rgba(0,0,0,0.15);
`,si=f.Ay.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 20px; border-bottom: 1px solid #F0EDE7; flex-shrink: 0;
`,di=f.Ay.h2`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1.125rem;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
`,ci=f.Ay.button`
  width: 32px; height: 32px; border-radius: 999px; border: none; cursor: pointer;
  background: #F4F2ED; color: #5C5752;
  display: flex; align-items: center; justify-content: center;
  transition: background 150ms;
  svg { width: 16px; height: 16px; }
  &:hover { background: #E5E2DB; }
`,pi=f.Ay.div`
  flex: 1; overflow-y: auto; padding: 0 20px;
`,xi=f.Ay.div`
  text-align: center; padding: 48px 0; color: #918C86; font-size: 0.875rem;
`,hi=f.Ay.div`
  display: flex; gap: 12px; padding: 16px 0;
  border-bottom: 1px solid #F0EDE7;
  &:last-child { border-bottom: none; }
`,mi=f.Ay.div`
  width: 56px; height: 56px; border-radius: 10px; overflow: hidden; flex-shrink: 0;
  background: #F4F2ED;
  img { width: 100%; height: 100%; object-fit: cover; }
`,ui=f.Ay.div`
  flex: 1; min-width: 0;
`,gi=f.Ay.h4`
  font-size: 0.75rem; font-weight: 600; margin: 0 0 2px;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
`,fi=f.Ay.span`
  font-size: 0.6875rem; color: ${e=>e.theme.mainColor||"#9E7C0C"};
`,bi=f.Ay.p`
  font-size: 0.625rem; color: #918C86; margin: 4px 0 0; font-style: italic;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,yi=f.Ay.div`
  display: flex; align-items: center; gap: 4px; margin-top: 8px;
  border-radius: 8px; border: 1px solid #E5E2DB; width: fit-content;
  button {
    width: 28px; height: 28px; border: none; background: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: #5C5752; transition: color 150ms;
    svg { width: 12px; height: 12px; }
    &:hover { color: ${e=>e.theme.textColor||"#1A1816"}; }
  }
  span { width: 20px; text-align: center; font-size: 0.6875rem; font-weight: 600;
    color: ${e=>e.theme.popupTextColor||"#1A1816"}; }
`,vi=f.Ay.span`
  font-size: 0.75rem; font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  align-self: flex-end;
`,ji=f.Ay.button`
  border: none; background: none; cursor: pointer; padding: 0; flex-shrink: 0;
  color: #918C86; transition: color 150ms;
  svg { width: 14px; height: 14px; }
  &:hover { color: #B5342A; }
`,wi=f.Ay.div`
  padding: 16px 20px; border-top: 1px solid #F0EDE7; flex-shrink: 0;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
`,Ci=f.Ay.div`
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;
  span:first-child { font-size: 0.75rem; color: #5C5752; }
  span:last-child { font-size: 1.125rem; font-weight: 700; color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,ki=f.Ay.button`
  width: 100%; height: 48px; border: none; border-radius: 999px; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; font-size: 0.875rem; font-weight: 700; font-family: inherit;
  transition: opacity 150ms;
  &:hover { opacity: 0.9; }
`,Ai=f.Ay.label`
  display: block; font-size: 0.6875rem; font-weight: 600; color: #918C86;
  margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.04em;
`,$i=f.Ay.input`
  width: 100%; height: 44px; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  padding: 0 16px; font-size: 0.75rem; outline: none; font-family: inherit;
  margin-bottom: 12px; box-sizing: border-box;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,Ei=f.Ay.textarea`
  width: 100%; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  padding: 12px 16px; font-size: 0.75rem; outline: none; resize: none; font-family: inherit;
  margin-bottom: 12px; box-sizing: border-box;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,_i=f.Ay.div`
  display: flex; gap: 8px; margin-bottom: 16px;
`,zi=f.Ay.button`
  flex: 1; height: 40px; border-radius: 10px; border: 1px solid;
  font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 150ms; font-family: inherit;
  background: ${e=>e.$active?e.theme.mainColor||"#9E7C0C":e.theme.popupbackgroundColor||"#fff"};
  color: ${e=>e.$active?"#fff":"#5C5752"};
  border-color: ${e=>e.$active?e.theme.mainColor||"#9E7C0C":"#E5E2DB"};
  &:hover { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,Fi=f.Ay.div`
  display: flex; gap: 8px;
`,Di=f.Ay.button`
  height: 48px; padding: 0 20px; border-radius: 10px;
  border: 1px solid #E5E2DB; background: ${e=>e.theme.popupbackgroundColor||"#fff"}; cursor: pointer;
  font-size: 0.75rem; font-weight: 600; color: #5C5752; font-family: inherit;
  transition: border-color 150ms;
  &:hover { border-color: #918C86; }
`,Si=f.Ay.button`
  flex: 1; height: 48px; border: none; border-radius: 10px; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; font-size: 0.875rem; font-weight: 700; font-family: inherit;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  transition: opacity 150ms;
  svg { width: 18px; height: 18px; }
  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,Ti=f.Ay.div`
  position: fixed; inset-inline: 0; bottom: 0; z-index: 110;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  border-radius: 20px 20px 0 0; max-height: 80vh; overflow-y: auto;
  padding: 0 0 calc(16px + env(safe-area-inset-bottom, 0px));
  animation: ${y} 400ms cubic-bezier(0.16,1,0.3,1);
  box-shadow: 0 -8px 30px rgba(0,0,0,0.1);
  @media(min-width:1024px){
    max-width: 480px; inset-inline: auto;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    bottom: auto;
    border-radius: 20px; max-height: 85vh;
  }
`,Bi=f.Ay.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 24px 16px; position: sticky; top: 0; z-index: 2;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  border-bottom: 1px solid #F0EDE7;
`,Ni=f.Ay.h3`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1rem;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  margin: 0;
`,Li=f.Ay.button`
  width: 32px; height: 32px; border-radius: 999px; border: none; cursor: pointer;
  background: #F4F2ED; color: #5C5752;
  display: flex; align-items: center; justify-content: center;
  svg { width: 16px; height: 16px; }
  &:hover { background: #E5E2DB; }
`,Ii=f.Ay.div`
  padding: 20px 24px;
`,Hi=f.Ay.button`
  display: flex; align-items: center; justify-content: center; gap: 8px;
  width: 100%; height: 48px; border: none; border-radius: 10px; cursor: pointer;
  font-size: 0.875rem; font-weight: 700; transition: opacity 150ms; font-family: inherit;
  background: ${e=>"whatsapp"===e.$variant?"#25D366":"outline"===e.$variant?e.theme.popupbackgroundColor||"#fff":e.theme.textColor||"#1A1816"};
  color: ${e=>"outline"===e.$variant?e.theme.textColor||"#1A1816":"#fff"};
  border: ${e=>"outline"===e.$variant?"1px solid #E5E2DB":"none"};
  svg { width: 18px; height: 18px; }
  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
  & + & { margin-top: 8px; }
`,Pi=f.Ay.div`
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; padding: 8px 16px; font-size: 0.75rem; font-weight: 500;
  text-align: center; letter-spacing: 0.01em;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  strong { color: ${e=>e.theme.categoryActive||"#F7F1DC"}; }
`,Ri=f.Ay.button`
  border: none; background: none; color: rgba(255,255,255,0.5); cursor: pointer;
  padding: 0; display: flex; align-items: center;
  svg { width: 14px; height: 14px; }
  &:hover { color: #fff; }
`,qi=f.Ay.div`
  position: fixed; z-index: 300;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px) + 60px + 16px);
  left: 16px; right: 16px;
  display: flex; flex-direction: column; gap: 8px; pointer-events: none;
  @media(min-width:768px){ left: auto; right: 24px; bottom: 24px; max-width: 360px; }
`,Mi=f.Ay.div`
  background: ${e=>"success"===e.$type?"#1B7A3A":"error"===e.$type?"#B5342A":"#1A1816"};
  color: #fff; padding: 12px 16px; border-radius: 10px; font-size: 0.75rem; font-weight: 500;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  animation: ${w} 300ms ease;
  pointer-events: auto;
`,Gi=(f.Ay.img`
  width: 18px; height: 18px; border-radius: 4px; object-fit: cover;
  margin-inline-end: 4px; flex-shrink: 0;
`,f.Ay.img`
  width: 22px; height: 22px; border-radius: 5px; object-fit: cover;
  margin-inline-end: 6px; flex-shrink: 0;
`),Oi=f.Ay.div`
  display: flex; align-items: baseline; gap: 8px; margin-bottom: 16px;
`,Yi=f.Ay.span`
  font-size: 0.6875rem; color: #918C86; font-weight: 500;
`,Vi=f.Ay.div`
  display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
`,Ui=f.Ay.div`
  flex: 0 0 160px; scroll-snap-align: start;
  background: ${e=>e.theme.BoxColor||"#fff"}; border: 1px solid #F0EDE7;
  border-radius: 10px; overflow: hidden; cursor: pointer;
  transition: border-color 250ms;
  &:hover { border-color: #E5E2DB; }
`,Xi=f.Ay.div`
  width: 100%; height: 120px; background: #F4F2ED; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`,Qi=f.Ay.div`
  padding: 8px 10px;
`,Ji=f.Ay.h4`
  font-size: 0.6875rem; font-weight: 600; margin: 0 0 2px;
  color: ${e=>e.theme.BoxTextColor||"#1A1816"};
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,Wi=f.Ay.span`
  font-size: 0.6875rem; font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#9E7C0C"};
`,Ki=f.Ay.section`
  padding: 0 16px 16px;
  max-width: 1200px; margin: 0 auto;
  @media(min-width:640px){ padding: 0 24px 16px; }
`,Zi=f.Ay.div`
  display: flex; gap: 12px; overflow-x: auto;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
`,et=f.Ay.div`
  flex: 0 0 280px; scroll-snap-align: start; border-radius: 14px;
  overflow: hidden; cursor: pointer; transition: transform 250ms;
  &:hover { transform: translateY(-2px); }
  @media(min-width:640px){ flex: 0 0 320px; }
`,it=f.Ay.div`
  padding: 20px; min-height: 140px; display: flex; flex-direction: column;
  justify-content: flex-end; color: #fff;
  background: ${e=>e.$bg||"linear-gradient(135deg, #1A1816 0%, #3D3A36 100%)"};
  @media(min-width:640px){ min-height: 160px; }
`,tt=f.Ay.span`
  font-size: 9px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.06em; opacity: 0.8; margin-bottom: 6px;
`,ot=f.Ay.h3`
  font-family: 'Literata', Georgia, serif; font-weight: 700;
  font-size: 1.125rem; margin: 0 0 4px; line-height: 1.2;
`,rt=f.Ay.p`
  font-size: 0.6875rem; opacity: 0.7; margin: 0 0 10px;
`,nt=f.Ay.span`
  display: inline-block; padding: 6px 14px; border-radius: 999px;
  background: rgba(255,255,255,0.2); backdrop-filter: blur(4px);
  font-size: 0.6875rem; font-weight: 600; width: fit-content;
`,at=(f.Ay.div`
  display: flex; gap: 12px; overflow-x: auto; padding: 0 16px 20px;
  max-width: 1200px; margin: 0 auto;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`,f.Ay.div`
  padding: 16px 16px 12px;
  max-width: 1200px; margin: 0 auto;
  @media(min-width:640px){ padding: 16px 24px 12px; }
`,f.Ay.div`
  flex: 0 0 160px; scroll-snap-align: start;
  background: ${e=>e.theme.BoxColor||"#fff"}; border: 1px solid #F0EDE7;
  border-radius: 14px; overflow: hidden; cursor: pointer;
  transition: border-color 250ms;
  &:hover { border-color: #E5E2DB; }
`,f.Ay.div`
  width: 100%; height: 120px; background: #F4F2ED; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`,f.Ay.div`
  padding: 8px 10px;
`,f.Ay.h4`
  font-size: 0.6875rem; font-weight: 600; margin: 0 0 2px;
  color: ${e=>e.theme.BoxTextColor||"#1A1816"};
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,f.Ay.span`
  font-size: 0.6875rem; font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#9E7C0C"};
`,f.Ay.span`
  font-size: 0.5625rem; color: #918C86; font-weight: 500;
  margin-inline-end: 2px;
`),lt=f.Ay.span`
  display: block; font-size: 0.5625rem; color: ${e=>e.theme.mainColor||"#9E7C0C"};
  font-weight: 500; margin-top: 2px;
`,st=f.Ay.span`
  display: inline-flex; align-items: center; gap: 4px;
  &::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: ${e=>e.$open?"#1B7A3A":"#B5342A"};
  }
  color: ${e=>e.$open?"#1B7A3A":"#B5342A"};
  font-weight: 600;
`,dt=f.Ay.div`
  margin-top: 20px; border-top: 1px solid #F0EDE7; padding-top: 16px;
`,ct=f.Ay.h4`
  font-size: 0.6875rem; font-weight: 600; color: #918C86;
  text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 12px;
`,pt=f.Ay.div`
  display: flex; gap: 10px; overflow-x: auto;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
`,xt=f.Ay.div`
  flex: 0 0 120px; cursor: pointer;
`,ht=f.Ay.div`
  width: 100%; height: 80px; border-radius: 10px; overflow: hidden;
  background: #F4F2ED; margin-bottom: 6px;
  img { width: 100%; height: 100%; object-fit: cover; }
`,mt=f.Ay.p`
  font-size: 0.625rem; font-weight: 600; margin: 0 0 2px;
  color: ${e=>e.theme.textColor||"#1A1816"};
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,ut=f.Ay.span`
  font-size: 0.625rem; font-weight: 700;
  color: ${e=>e.theme.mainColor||"#9E7C0C"};
`;f.Ay.button`
  position: absolute; inset-inline-end: 12px; top: 50%; transform: translateY(-50%);
  border: none; background: none; cursor: pointer; color: #918C86; padding: 4px;
  display: flex; align-items: center;
  svg { width: 14px; height: 14px; }
  &:hover { color: ${e=>e.theme.textColor||"#1A1816"}; }
`;var gt=t(56723);const ft="https://storage.googleapis.com/ecommerce-bucket-testing/";function bt(e){let{item:i,restaurantName:t,currencySymbol:r,activeLanguage:n,dispatch:a}=e;const l="ar"===n&&i.ar_name?i.ar_name:i.en_name,d=function(e){var i,t;const o=null===(i=e.images)||void 0===i?void 0:i.findIndex((i=>i.id===e.new_cover_id)),r=o>=0?e.images[o]:null===(t=e.images)||void 0===t?void 0:t[0];return null!==r&&void 0!==r&&r.url?`${ft}${r.url}`:null}(i),p=i.price*i.quantity,x=(0,o.useMemo)((()=>(0,u.qh)(i,n)),[i,n]);return(0,gt.jsxs)(hi,{children:[d&&(0,gt.jsx)(mi,{children:(0,gt.jsx)("img",{src:d,alt:l})}),(0,gt.jsxs)(ui,{children:[(0,gt.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:8},children:[(0,gt.jsx)(gi,{children:l}),(0,gt.jsx)(ji,{onClick:()=>a((0,s.dt)(t,i.uniqueId)),children:(0,gt.jsx)(h.IXo,{})})]}),(0,gt.jsx)(fi,{children:(0,c.T)(i.price,r)}),x.length>0&&(0,gt.jsx)("div",{style:{fontSize:"0.625rem",color:"#918C86",marginTop:4},children:x.filter((e=>"line"===e.type)).map(((e,i)=>(0,gt.jsx)("div",{children:e.text},i)))}),i.instruction&&(0,gt.jsx)(bi,{children:i.instruction}),(0,gt.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:8},children:[(0,gt.jsxs)(yi,{children:[(0,gt.jsx)("button",{onClick:()=>{i.quantity<=1?a((0,s.dt)(t,i.uniqueId)):a((0,s.v)(t,i.uniqueId,i.quantity-1))},children:(0,gt.jsx)(h.QLg,{})}),(0,gt.jsx)("span",{children:i.quantity}),(0,gt.jsx)("button",{onClick:()=>a((0,s.v)(t,i.uniqueId,i.quantity+1)),children:(0,gt.jsx)(h.GGD,{})})]}),(0,gt.jsx)(vi,{children:(0,c.T)(p,r)})]})]})]})}function yt(e){var i,t;let{restaurant:r,restaurantName:n,activeLanguage:l,currencySymbol:p,features:x,cart:f,popupHandler:b,isRtl:y}=e;const v=(0,a.wA)(),{handleApiCallAsync:j}=(0,m.h)({onSuccess:()=>{}}),[w,C]=(0,o.useState)("cart"),[k,A]=(0,o.useState)(""),[$,E]=(0,o.useState)(""),[_,z]=(0,o.useState)(""),[F,D]=(0,o.useState)(""),[S,T]=(0,o.useState)(""),[B,N]=(0,o.useState)(""),L=f.reduce(((e,i)=>e+i.price*i.quantity),0),I=(0,o.useMemo)((()=>{const e=[];return null!==x&&void 0!==x&&x.delivery_order&&e.push({key:"Delivery",label:"ar"===l?"\u062a\u0648\u0635\u064a\u0644":"Delivery"}),null!==x&&void 0!==x&&x.takeaway_order&&e.push({key:"TakeAway",label:"ar"===l?"\u0627\u0633\u062a\u0644\u0627\u0645":"Pickup"}),null!==x&&void 0!==x&&x.dinein_order&&e.push({key:"DineIn",label:"ar"===l?"\u0641\u064a \u0627\u0644\u0645\u0637\u0639\u0645":"Dine-in"}),e}),[x,l]);(0,o.useState)((()=>{1===I.length&&A(I[0].key)}));const H=(null===r||void 0===r||null===(i=r.branches)||void 0===i||null===(t=i[0])||void 0===t?void 0:t.whatsapp_number)||"";return(0,gt.jsx)(ai,{$rtl:y,onClick:()=>b(null),children:(0,gt.jsxs)(li,{$rtl:y,onClick:e=>e.stopPropagation(),children:[(0,gt.jsxs)(si,{children:[(0,gt.jsx)(di,{$rtl:y,children:"cart"===w?"ar"===l?"\u0627\u0644\u0633\u0644\u0629":"Your Cart":"ar"===l?"\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628":"Checkout"}),(0,gt.jsx)(ci,{onClick:()=>b(null),children:(0,gt.jsx)(h.yGN,{})})]}),(0,gt.jsx)(pi,{children:"cart"===w?(0,gt.jsx)(gt.Fragment,{children:0===f.length?(0,gt.jsx)(xi,{children:"ar"===l?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"}):f.map((e=>(0,gt.jsx)(bt,{item:e,restaurantName:n,currencySymbol:p,activeLanguage:l,dispatch:v},e.uniqueId)))}):(0,gt.jsxs)("div",{style:{padding:"16px 0"},children:[I.length>1&&(0,gt.jsxs)(gt.Fragment,{children:[(0,gt.jsx)(Ai,{children:"ar"===l?"\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628":"Order Type"}),(0,gt.jsx)(_i,{children:I.map((e=>(0,gt.jsx)(zi,{$active:k===e.key,onClick:()=>A(e.key),children:e.label},e.key)))})]}),(0,gt.jsx)($i,{value:$,onChange:e=>E(e.target.value),placeholder:"ar"===l?"\u0627\u0644\u0627\u0633\u0645":"Your Name"}),(0,gt.jsx)($i,{value:_,onChange:e=>z(e.target.value),placeholder:"ar"===l?"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641":"Phone Number"}),"Delivery"===k&&(0,gt.jsx)(Ei,{value:F,onChange:e=>D(e.target.value),placeholder:"ar"===l?"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644":"Delivery Address",rows:2}),"DineIn"===k&&(0,gt.jsx)($i,{value:S,onChange:e=>T(e.target.value),placeholder:"ar"===l?"\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629":"Table Number"}),(0,gt.jsx)(Ei,{value:B,onChange:e=>N(e.target.value),placeholder:"ar"===l?"\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629":"Order Notes (optional)",rows:2})]})}),f.length>0&&(0,gt.jsxs)(wi,{children:[(0,gt.jsxs)(Ci,{children:[(0,gt.jsx)("span",{children:"ar"===l?"\u0627\u0644\u0645\u062c\u0645\u0648\u0639":"Total"}),(0,gt.jsx)("span",{children:(0,c.T)(L,p)})]}),"cart"===w?(0,gt.jsx)(ki,{onClick:()=>C("checkout"),children:"ar"===l?"\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0637\u0644\u0628":"Proceed to Checkout"}):(0,gt.jsxs)(Fi,{children:[(0,gt.jsx)(Di,{onClick:()=>C("cart"),children:"ar"===l?"\u0631\u062c\u0648\u0639":"Back"}),(0,gt.jsxs)(Si,{onClick:async()=>{var e,i;let t=(()=>{let e=`*New Order - ${k}*\n`;return e+="----------------------------\n\n",f.forEach(((i,t)=>{const o="ar"===l&&i.ar_name?i.ar_name:i.en_name,r=i.category?"ar"===l&&i.category.ar_category?i.category.ar_category:i.category.en_category:"",n=i.price*i.quantity;if(e+=`${t+1}. *${(o||"").trim()}*\n`,r&&(e+=`    ${r.trim()}\n`),e+=`    ${i.quantity}x ${(0,c.T)(i.price,p)} = *${(0,c.T)(n,p)}*\n`,i.formData&&Object.keys(i.formData).length>0)try{const t=(0,u.Ve)(i,l);t&&(e+=`    ${t}\n`)}catch(a){}i.instruction&&(e+=`    > _${i.instruction}_\n`),e+="\n"})),e+="----------------------------\n",e+=`*Total: ${(0,c.T)(L,p)}*\n\n`,$&&(e+=`*Name:* ${$}\n`),_&&(e+=`*Phone:* ${_}\n`),"Delivery"===k&&F&&(e+=`*Address:* ${F}\n`),"DineIn"===k&&S&&(e+=`*Table:* ${S}\n`),B&&(e+=`*Notes:* ${B}\n`),e})();const o=[...f.map((e=>{var i,t;return{id:e.id,quantity:e.quantity,branch_id:null===r||void 0===r||null===(i=r.branches)||void 0===i||null===(t=i[0])||void 0===t?void 0:t.id,restaurant_id:null===r||void 0===r?void 0:r.id}}))],a=[...f.map((e=>({product_id:e.id,product_name:"ar"===l&&e.ar_name?e.ar_name:e.en_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];j({products:o,restaurant_id:null===r||void 0===r?void 0:r.id,branch_id:null===r||void 0===r||null===(e=r.branches)||void 0===e||null===(i=e[0])||void 0===i?void 0:i.id,delivery_type:k,customer_name:$,customer_phone:_,customer_address:"Delivery"===k?F:null,customer_latitude:null,customer_longitude:null,table_number:"DineIn"===k?S:null,note:B,items:a,subtotal:L,total:L,currency:null===r||void 0===r?void 0:r.currency},n).then((e=>{if(null!==r&&void 0!==r&&r.id){var i,t,o,n;const l=(null===r||void 0===r||null===(i=r.branches)||void 0===i||null===(t=i[0])||void 0===t?void 0:t.id)||null;(0,d.trackOrderPlaced)(r.id,(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(n=o.order)||void 0===n?void 0:n.id)||null,k,L,l,{items:a,customerName:$})}})).catch((e=>console.error("Order creation failed:",e))),(0,g.JT)(H,t),v((0,s.sX)(n)),b(null)},disabled:!k||!$,children:[(0,gt.jsx)(h.kGk,{}),"ar"===l?"\u0625\u0631\u0633\u0627\u0644 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628":"Send via WhatsApp"]})]})]})]})})}const vt=f.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,jt=f.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid #f0ede7;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-top: 2px;
    color: ${e=>e.theme.mainColor||"#9E7C0C"};
  }
`,wt=f.Ay.div`
  flex: 1;
  min-width: 0;
`,Ct=f.Ay.h4`
  font-size: 0.8125rem;
  font-weight: 600;
  margin: 0 0 4px;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
`,kt=f.Ay.p`
  font-size: 0.75rem;
  color: #918c86;
  margin: 0 0 2px;
  &:last-child {
    margin-bottom: 0;
  }
`,At=f.Ay.a`
  font-size: 0.75rem;
  color: #918c86;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  transition: color 150ms;
  svg {
    width: 14px;
    height: 14px;
    margin: 0;
    color: inherit;
  }
  &:hover {
    color: ${e=>e.theme.mainColor||"#9E7C0C"};
  }
`,$t=f.Ay.p`
  text-align: center;
  color: #918c86;
  font-size: 0.8125rem;
  padding: 32px 0;
  margin: 0;
`;function Et(e){let{restaurant:i,activeLanguage:t,popupHandler:o,isRtl:r}=e;const n=(e,i)=>r&&i||e,a=(null===i||void 0===i?void 0:i.branches)||[];return(0,gt.jsxs)(gt.Fragment,{children:[(0,gt.jsx)(k,{onClick:()=>o(null)}),(0,gt.jsxs)(Ti,{children:[(0,gt.jsxs)(Bi,{children:[(0,gt.jsx)(Ni,{$rtl:r,children:n("Branches","\u0627\u0644\u0641\u0631\u0648\u0639")}),(0,gt.jsx)(Li,{onClick:()=>o(null),children:(0,gt.jsx)(h.yGN,{})})]}),(0,gt.jsx)(Ii,{children:0===a.length?(0,gt.jsx)($t,{children:n("No branches available","\u0644\u0627 \u062a\u0648\u062c\u062f \u0641\u0631\u0648\u0639")}):(0,gt.jsx)(vt,{children:a.map((e=>(0,gt.jsxs)(jt,{children:[(0,gt.jsx)(h.HzC,{}),(0,gt.jsxs)(wt,{children:[(0,gt.jsx)(Ct,{children:r&&e.ar_name?e.ar_name:e.name}),e.address&&(0,gt.jsx)(kt,{children:e.address}),e.phone&&(0,gt.jsxs)(At,{href:`tel:${e.phone}`,children:[(0,gt.jsx)(h.QFc,{}),e.phone]}),e.whatsapp_number&&(0,gt.jsxs)(At,{href:`https://wa.me/${e.whatsapp_number}`,target:"_blank",rel:"noopener noreferrer",children:[(0,gt.jsx)(h.X6_,{}),n("WhatsApp","\u0648\u0627\u062a\u0633\u0627\u0628")]})]})]},e.id)))})})]})]})}var _t=t(11222);const zt=f.Ay.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
`,Ft=f.Ay.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: transform 150ms;
  &:hover {
    transform: scale(1.15);
  }
  svg {
    width: 32px;
    height: 32px;
    color: ${e=>e.$filled?e.theme.mainColor||"#9E7C0C":"#E5E2DB"};
    fill: ${e=>e.$filled?e.theme.mainColor||"#9E7C0C":"none"};
    transition: color 150ms, fill 150ms;
  }
`,Dt=f.Ay.textarea`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #e5e2db;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  padding: 12px 16px;
  font-size: 0.8125rem;
  outline: none;
  resize: none;
  font-family: inherit;
  margin-bottom: 16px;
  box-sizing: border-box;
  &::placeholder {
    color: #918c86;
  }
  &:focus {
    border-color: ${e=>e.theme.mainColor||"#9E7C0C"};
  }
`,St=f.Ay.div`
  text-align: center;
  padding: 32px 0;
`,Tt=f.Ay.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  margin: 0 0 8px;
`,Bt=f.Ay.p`
  font-size: 0.8125rem;
  color: #918c86;
  margin: 0;
`;function Nt(e){let{restaurant:i,restaurantName:t,activeLanguage:r,popupHandler:n,isRtl:a}=e;const l=(e,i)=>a&&i||e,[s,d]=(0,o.useState)(0),[c,p]=(0,o.useState)(""),[x,m]=(0,o.useState)("idle");return(0,gt.jsxs)(gt.Fragment,{children:[(0,gt.jsx)(k,{onClick:()=>n(null)}),(0,gt.jsxs)(Ti,{children:[(0,gt.jsxs)(Bi,{children:[(0,gt.jsx)(Ni,{$rtl:a,children:l("Feedback","\u062a\u0642\u064a\u064a\u0645")}),(0,gt.jsx)(Li,{onClick:()=>n(null),children:(0,gt.jsx)(h.yGN,{})})]}),(0,gt.jsx)(Ii,{children:"success"===x?(0,gt.jsxs)(St,{children:[(0,gt.jsx)(Tt,{children:l("Thank you!","\u0634\u0643\u0631\u0627 \u0644\u0643!")}),(0,gt.jsx)(Bt,{children:l("Your feedback has been submitted","\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u062a\u0642\u064a\u064a\u0645\u0643 \u0628\u0646\u062c\u0627\u062d")})]}):(0,gt.jsxs)(gt.Fragment,{children:[(0,gt.jsx)(zt,{children:[1,2,3,4,5].map((e=>(0,gt.jsx)(Ft,{onClick:()=>d(e),$filled:e<=s,children:(0,gt.jsx)(h.usP,{})},e)))}),(0,gt.jsx)(Dt,{value:c,onChange:e=>p(e.target.value),placeholder:l("Write your feedback...","\u0623\u0643\u062a\u0628 \u062a\u0639\u0644\u064a\u0642\u0643 \u0647\u0646\u0627..."),rows:3}),(0,gt.jsxs)(Hi,{onClick:async()=>{if(s){m("sending");try{await _t.A.post("https://77.37.51.25/feedback",{restaurant_id:null===i||void 0===i?void 0:i.id,rating:s,comment:c,restaurant_name:t}),m("success")}catch{m("error")}}},disabled:!s||"sending"===x,children:[(0,gt.jsx)(h.kGk,{}),"sending"===x?l("Sending...","\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0631\u0633\u0627\u0644..."):l("Submit","\u0625\u0631\u0633\u0627\u0644")]})]})})]})]})}const Lt=f.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,It=f.Ay.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid #f0ede7;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  text-decoration: none;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  font-size: 0.8125rem;
  transition: border-color 150ms;
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: ${e=>e.theme.mainColor||"#9E7C0C"};
  }
  &:hover {
    border-color: ${e=>e.theme.mainColor||"#9E7C0C"};
  }
`,Ht=f.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid #f0ede7;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  font-size: 0.8125rem;
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-top: 2px;
    color: ${e=>e.theme.mainColor||"#9E7C0C"};
  }
`;function Pt(e){var i;let{restaurant:t,activeLanguage:o,popupHandler:r,isRtl:n}=e;const a=(e,i)=>n&&i||e,l=null===t||void 0===t||null===(i=t.branches)||void 0===i?void 0:i[0];return(0,gt.jsxs)(gt.Fragment,{children:[(0,gt.jsx)(k,{onClick:()=>r(null)}),(0,gt.jsxs)(Ti,{children:[(0,gt.jsxs)(Bi,{children:[(0,gt.jsx)(Ni,{$rtl:n,children:a("Contact","\u062a\u0648\u0627\u0635\u0644")}),(0,gt.jsx)(Li,{onClick:()=>r(null),children:(0,gt.jsx)(h.yGN,{})})]}),(0,gt.jsx)(Ii,{children:(0,gt.jsxs)(Lt,{children:[(null===l||void 0===l?void 0:l.phone)&&(0,gt.jsxs)(It,{href:`tel:${l.phone}`,children:[(0,gt.jsx)(h.QFc,{}),(0,gt.jsx)("span",{children:l.phone})]}),(null===l||void 0===l?void 0:l.whatsapp_number)&&(0,gt.jsxs)(Hi,{as:"a",href:`https://wa.me/${l.whatsapp_number}`,target:"_blank",rel:"noopener noreferrer",$variant:"whatsapp",children:[(0,gt.jsx)(h.X6_,{}),a("WhatsApp","\u0648\u0627\u062a\u0633\u0627\u0628")]}),(null===l||void 0===l?void 0:l.email)&&(0,gt.jsxs)(It,{href:`mailto:${l.email}`,children:[(0,gt.jsx)(h.pHD,{}),(0,gt.jsx)("span",{children:l.email})]}),(null===l||void 0===l?void 0:l.address)&&(0,gt.jsxs)(Ht,{children:[(0,gt.jsx)(h.HzC,{}),(0,gt.jsx)("span",{children:l.address})]})]})})]})]})}const Rt=f.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`,qt=f.Ay.div`
  flex: 1;
  min-width: 0;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #e5e2db;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  font-size: 0.75rem;
  color: #918c86;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Mt=f.Ay.button`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid #e5e2db;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.mainColor||"#9E7C0C"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 150ms;
  svg {
    width: 18px;
    height: 18px;
  }
  &:hover {
    border-color: ${e=>e.theme.mainColor||"#9E7C0C"};
  }
`,Gt=f.Ay.span`
  font-size: 0.6875rem;
  color: ${e=>e.theme.mainColor||"#9E7C0C"};
  font-weight: 600;
  text-align: center;
  display: block;
  margin-bottom: 12px;
`;function Ot(e){let{restaurant:i,popupHandler:t,isRtl:r}=e;const n=(e,i)=>r&&i||e,[a,l]=(0,o.useState)(!1),s=window.location.href;return(0,gt.jsxs)(gt.Fragment,{children:[(0,gt.jsx)(k,{onClick:()=>t(null)}),(0,gt.jsxs)(Ti,{children:[(0,gt.jsxs)(Bi,{children:[(0,gt.jsx)(Ni,{$rtl:r,children:n("Share","\u0645\u0634\u0627\u0631\u0643\u0629")}),(0,gt.jsx)(Li,{onClick:()=>t(null),children:(0,gt.jsx)(h.yGN,{})})]}),(0,gt.jsxs)(Ii,{children:[(0,gt.jsxs)(Rt,{children:[(0,gt.jsx)(qt,{children:s}),(0,gt.jsx)(Mt,{onClick:async()=>{try{await navigator.clipboard.writeText(s),l(!0),setTimeout((()=>l(!1)),2e3)}catch{}},children:a?(0,gt.jsx)(h.YrT,{}):(0,gt.jsx)(h.nxz,{})})]}),a&&(0,gt.jsx)(Gt,{children:n("Copied!","\u062a\u0645 \u0627\u0644\u0646\u0633\u062e!")}),navigator.share&&(0,gt.jsxs)(Hi,{onClick:()=>{navigator.share&&navigator.share({title:null===i||void 0===i?void 0:i.name,url:s})},children:[(0,gt.jsx)(h.Pum,{}),n("Share","\u0645\u0634\u0627\u0631\u0643\u0629")]})]})]})]})}var Yt=t(38495),Vt=t(71481);const Ut="https://storage.googleapis.com/ecommerce-bucket-testing/",Xt="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=DM+Sans:wght@400;500;600;700&family=Literata:opsz,wght@7..72,400;600;700&display=swap";function Qt(){var e,i,t,x,m,u,g,f,b,y,v;const[j,w]=(0,r.ok)(),ee=j.get("productId"),{restaurantName:ie}=(0,n.g)(),te=window.location.hostname.split(".")[0],oe="menugic"!==te&&"localhost"!==te&&"www"!==te?te:ie,re=(0,a.d4)((e=>{var i;return null===(i=e.restaurant)||void 0===i?void 0:i[oe]})),ne=(0,a.d4)((e=>{var i,t;return(null===(i=e.restaurant)||void 0===i||null===(t=i[oe])||void 0===t?void 0:t.activeLanguage)||"en"})),ae=(0,a.wA)(),le=(0,a.d4)((e=>e.cart[oe]||[])),de=le.reduce(((e,i)=>e+i.quantity),0),ce="ar"===ne,qe=(0,o.useMemo)((()=>JSON.parse((null===re||void 0===re?void 0:re.features)||"{}")),[null===re||void 0===re?void 0:re.features]),Me=(0,o.useMemo)((()=>[...(null===re||void 0===re?void 0:re.categories)||[]].sort(((e,i)=>(i.priority||0)-(e.priority||0)||(e.id||0)-(i.id||0)))),[null===re||void 0===re?void 0:re.categories]),Ge=(null===re||void 0===re||null===(e=re.branches)||void 0===e||null===(i=e[0])||void 0===i?void 0:i.currency_symbol)||"$",Oe=(0,o.useMemo)((()=>{try{return JSON.parse((null===re||void 0===re?void 0:re.social_media)||"{}")}catch{return{}}}),[null===re||void 0===re?void 0:re.social_media]),Ye=null!==re&&void 0!==re&&re.logoURL?`${Ut}${re.logoURL}`:null,Ve=(0,o.useMemo)((()=>{const e=[];for(const i of Me)for(const t of i.products||[])t.is_deleted||(t.is_best_seller||t.featured)&&e.push(t);return e}),[Me]),Ue=(0,o.useMemo)((()=>{const e=[];for(const i of Me)for(const t of i.products||[])t.is_deleted||Number(t.discount)>0&&e.push(t);return e}),[Me]),[Xe,Qe]=(0,o.useState)(null),[Je,We]=(0,o.useState)(null),[Ke,Ze]=(0,o.useState)(!1),[ei,ii]=(0,o.useState)(!1),[ti,oi]=(0,o.useState)(""),[ri,ni]=(0,o.useState)(""),[ai,li]=(0,o.useState)(!0),[si,di]=(0,o.useState)("home"),[ci,pi]=(0,o.useState)([]),xi=(0,o.useRef)(0),hi=(0,o.useRef)(!1),mi=(0,o.useRef)(null),ui=(0,o.useRef)(null),gi=(0,o.useCallback)((function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";const t=++xi.current;pi((o=>[...o,{id:t,message:e,type:i}])),setTimeout((()=>pi((e=>e.filter((e=>e.id!==t))))),2500)}),[]),fi=(0,o.useMemo)((()=>{var e;if(null===re||void 0===re||null===(e=re.workingHours)||void 0===e||!e.length)return null;const i=new Date,t=i.toLocaleDateString("en-US",{weekday:"long"}),o=60*i.getHours()+i.getMinutes(),r=re.workingHours.find((e=>{var i;return(null===(i=e.en_day)||void 0===i?void 0:i.toLowerCase())===t.toLowerCase()}));if(null===r||void 0===r||!r.opening_time||null===r||void 0===r||!r.closing_time)return null;const[n,a]=r.opening_time.split(":").map(Number),[l,s]=r.closing_time.split(":").map(Number);return o>=60*n+a&&o<=60*l+s}),[null===re||void 0===re?void 0:re.workingHours]),bi=(0,o.useCallback)((function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en_name",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ar_name";return ce&&null!==e&&void 0!==e&&e[t]?e[t]:(null===e||void 0===e?void 0:e[i])||""}),[ce]),yi=(0,o.useCallback)((e=>ce&&null!==e&&void 0!==e&&e.ar_category?e.ar_category:(null===e||void 0===e?void 0:e.en_category)||""),[ce]),vi=(0,o.useCallback)((e=>ce&&null!==e&&void 0!==e&&e.ar_description?e.ar_description:(null===e||void 0===e?void 0:e.en_description)||(null===e||void 0===e?void 0:e.description)||""),[ce]),ji=(0,o.useCallback)(((e,i)=>ce&&i||e),[ce]);(0,o.useEffect)((()=>{if(!document.querySelector(`link[href="${Xt}"]`)){const e=document.createElement("link");e.rel="stylesheet",e.href=Xt,document.head.appendChild(e)}}),[]),(0,o.useEffect)((()=>(document.documentElement.setAttribute("dir",ce?"rtl":"ltr"),()=>document.documentElement.removeAttribute("dir"))),[ce]),(0,o.useEffect)((()=>{if(null!==re&&void 0!==re&&re.id){var e,i;const t=(null===re||void 0===re||null===(e=re.branches)||void 0===e||null===(i=e[0])||void 0===i?void 0:i.id)||null;(0,d.trackVisit)(re.id,t),(0,d.trackPageView)(re.id,t)}}),[null===re||void 0===re?void 0:re.id]),(0,o.useEffect)((()=>{const e=()=>Ze(window.scrollY>10);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[]),(0,o.useEffect)((()=>{const e=document.querySelectorAll("[data-section]");if(!e.length)return;const i=new IntersectionObserver((e=>{if(!hi.current)for(const t of e)if(t.isIntersecting){var i;const e=Number(t.target.dataset.section);We(e);const o=null===(i=mi.current)||void 0===i?void 0:i.querySelector(`[data-cat="${e}"]`);null===o||void 0===o||o.scrollIntoView({inline:"center",behavior:"smooth",block:"nearest"});break}}),{rootMargin:"-100px 0px -60% 0px",threshold:0});return e.forEach((e=>i.observe(e))),()=>i.disconnect()}),[Me]),(0,o.useEffect)((()=>{Me.length&&!Je&&We(Me[0].id)}),[Me]);const wi=(0,o.useCallback)((e=>{document.body.style.overflow=null==e?"auto":"hidden",Qe(e)}),[]),Ci=(0,o.useCallback)((e=>{ae((0,l.y)({name:oe,activeLanguage:e}))}),[ae,oe]),ki=(0,o.useCallback)((e=>{const i=new URLSearchParams(j);i.set("productId",e),w(i)}),[j,w]),Ai=(0,o.useCallback)((()=>{const e=new URLSearchParams(j);e.delete("productId"),w(e)}),[j,w]);(0,o.useEffect)((()=>{const e=e=>{"Escape"===e.key&&(ei?(ii(!1),oi("")):ee?Ai():Xe&&wi(null))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[ei,ee,Xe,Ai,wi]);const $i=(0,o.useMemo)((()=>{if(!ee)return null;for(const i of Me){var e;const t=null===(e=i.products)||void 0===e?void 0:e.find((e=>String(e.id)===String(ee)));if(t)return t}return null}),[ee,Me]),Ei=(0,o.useCallback)((e=>{We(e),hi.current=!0;const i=document.getElementById(`section-${e}`);if(i){const e=i.getBoundingClientRect().top+window.scrollY-110;window.scrollTo({top:e,behavior:"smooth"})}setTimeout((()=>{hi.current=!1}),800)}),[]),_i=(0,o.useMemo)((()=>{const e=[];for(const i of Me)for(const t of i.products||[])t.is_deleted||e.push({...t,_catName:yi(i)});return e}),[Me,yi]),zi=(0,o.useMemo)((()=>{const e=(ei?ti:ri).trim().toLowerCase();return e?_i.filter((i=>((i.en_name||"").toLowerCase()+" "+(i.ar_name||"").toLowerCase()).includes(e))).slice(0,20):[]}),[ei,ti,ri,_i]),Fi=(0,o.useCallback)(((e,i)=>{e.stopPropagation(),ae((0,s.bE)(oe,i,1,{},parseFloat(i.en_price)||0,"",void 0));const t=ce&&i.ar_name?i.ar_name:i.en_name;gi(ce?`${t} \u0623\u064f\u0636\u064a\u0641 \u0644\u0644\u0633\u0644\u0629`:`${t} added to cart`,"success")}),[ae,oe,ce,gi]),Di=(0,o.useMemo)((()=>((null===re||void 0===re?void 0:re.languages)||"en").split("&")),[null===re||void 0===re?void 0:re.languages]);return re?(0,gt.jsxs)(C,{$rtl:ce,children:[ai&&(re.en_slogan||re.ar_slogan)&&(0,gt.jsxs)(Pi,{children:[(0,gt.jsx)("span",{children:ce&&re.ar_slogan?re.ar_slogan:re.en_slogan}),(0,gt.jsx)(Ri,{onClick:()=>li(!1),children:(0,gt.jsx)(h.yGN,{})})]}),(0,gt.jsx)(A,{$scrolled:Ke,children:(0,gt.jsxs)($,{children:[(0,gt.jsx)(E,{children:Ye?(0,gt.jsx)("img",{src:Ye,alt:""}):(0,gt.jsx)("span",{children:(re.name||"M")[0]})}),(0,gt.jsx)(_,{$rtl:ce,children:ce&&re.ar_name?re.ar_name:re.name}),(0,gt.jsx)(z,{children:(0,gt.jsx)("input",{value:ri,onChange:e=>ni(e.target.value),placeholder:ji("Search menu...","\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629...")})}),(0,gt.jsxs)(F,{children:[(0,gt.jsx)(D,{className:"mobile-only",onClick:()=>{ii(!0),oi("")},children:(0,gt.jsx)(h.CKj,{})}),Di.length>1&&(0,gt.jsx)(S,{onClick:()=>Ci(ce?"en":"ar"),children:ce?"EN":"\u0639"}),(null===qe||void 0===qe?void 0:qe.cart)&&(0,gt.jsxs)(D,{onClick:()=>wi("cart"),children:[(0,gt.jsx)(h.iHs,{}),de>0&&(0,gt.jsx)(T,{children:de})]})]})]})}),(0,gt.jsxs)(B,{children:[(0,gt.jsx)(L,{children:Ye?(0,gt.jsx)("img",{src:Ye,alt:""}):(0,gt.jsx)("span",{children:(re.name||"M")[0]})}),(0,gt.jsxs)(N,{children:[(0,gt.jsx)(I,{$rtl:ce,children:ce&&re.ar_name?re.ar_name:re.name}),(0,gt.jsx)(H,{children:ce&&re.ar_slogan?re.ar_slogan:re.en_slogan||""}),(0,gt.jsxs)(P,{children:[null!==fi&&(0,gt.jsx)(st,{$open:fi,children:fi?ji("Open","\u0645\u0641\u062a\u0648\u062d"):ji("Closed","\u0645\u063a\u0644\u0642")}),(null===(t=re.branches)||void 0===t?void 0:t[0])&&(0,gt.jsxs)(gt.Fragment,{children:[(0,gt.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,gt.jsx)(h.HzC,{})," ",ce&&re.branches[0].ar_name?re.branches[0].ar_name:re.branches[0].name||re.branches[0].address||""]}),re.branches[0].phone&&(0,gt.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,gt.jsx)(h.QFc,{})," ",re.branches[0].phone]})]})]}),(0,gt.jsxs)(R,{children:[(null===(x=re.branches)||void 0===x?void 0:x.length)>0&&(0,gt.jsxs)(q,{onClick:()=>wi("location"),children:[(0,gt.jsx)(h.HzC,{})," ",ji("Branches","\u0627\u0644\u0641\u0631\u0648\u0639")]}),(0,gt.jsxs)(q,{onClick:()=>wi("contact"),children:[(0,gt.jsx)(h.S8s,{})," ",ji("Info","\u0645\u0639\u0644\u0648\u0645\u0627\u062a")]}),(0,gt.jsxs)(q,{onClick:()=>wi("share"),children:[(0,gt.jsx)(h.Pum,{})," ",ji("Share","\u0645\u0634\u0627\u0631\u0643\u0629")]})]})]})]}),(0,gt.jsx)(M,{children:(0,gt.jsx)(G,{ref:mi,children:(0,gt.jsxs)(O,{role:"tablist",children:[Ve.length>0&&(0,gt.jsx)(Y,{"data-cat":"best-sellers",$active:"best-sellers"===Je,onClick:()=>{var e;We("best-sellers"),di("menu"),null===(e=document.getElementById("section-best-sellers"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})},role:"tab",children:ji("\ud83d\udd25 Best Sellers","\ud83d\udd25 \u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b")}),Ue.length>0&&(0,gt.jsx)(Y,{"data-cat":"offers",$active:"offers"===Je,onClick:()=>{var e;We("offers"),di("menu"),null===(e=document.getElementById("section-offers"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})},role:"tab",children:ji("\ud83c\udff7\ufe0f Offers","\ud83c\udff7\ufe0f \u0639\u0631\u0648\u0636")}),Me.map((e=>(0,gt.jsx)(Y,{"data-cat":e.id,$active:Je===e.id,onClick:()=>{Ei(e.id),di("menu")},role:"tab",children:yi(e)},e.id)))]})})}),Ve.length>0&&!ri.trim()&&(0,gt.jsxs)(Ki,{children:[(0,gt.jsx)(K,{$rtl:ce,style:{marginBottom:12},children:ji("Today's Specials","\u0639\u0631\u0648\u0636 \u0627\u0644\u064a\u0648\u0645")}),(0,gt.jsx)(Zi,{children:Ve.slice(0,4).map(((e,i)=>{const t=["linear-gradient(135deg, #8B4513 0%, #D2691E 100%)","linear-gradient(135deg, #1A1816 0%, #3D3A36 100%)","linear-gradient(135deg, #B5342A 0%, #D4564C 100%)","linear-gradient(135deg, #9E7C0C 0%, #C9A84C 100%)"];return(0,gt.jsx)(et,{onClick:()=>ki(e.id),children:(0,gt.jsxs)(it,{$bg:t[i%t.length],children:[(0,gt.jsx)(tt,{children:e.is_best_seller?ji("BEST SELLER","\u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b"):ji("FEATURED","\u0645\u0645\u064a\u0632")}),(0,gt.jsx)(ot,{children:bi(e)}),(0,gt.jsx)(rt,{children:(0,c.T)(parseFloat(e.en_price)||0,Ge)}),(0,gt.jsx)(nt,{children:ji("Order Now \u2192","\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646 \u2190")})]})},e.id)}))})]}),(0,gt.jsxs)(V,{children:[(0,gt.jsx)(U,{children:Me.map((e=>{const i=(e.products||[]).filter((e=>!e.is_deleted)).length;return(0,gt.jsxs)(X,{$active:Je===e.id,onClick:()=>Ei(e.id),children:[(0,gt.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[e.image_url&&(0,gt.jsx)(Gi,{src:(0,p.V)(e.image_url),alt:"",onError:e=>{e.target.style.display="none"}}),yi(e)]}),(0,gt.jsx)(Q,{children:i})]},e.id)}))}),(0,gt.jsxs)(J,{style:{paddingBottom:de>0?80:24},children:[ri.trim()&&zi.length>0&&(0,gt.jsxs)("div",{style:{marginBottom:24},children:[(0,gt.jsx)(K,{$rtl:ce,children:ji("Search Results","\u0646\u062a\u0627\u0626\u062c \u0627\u0644\u0628\u062d\u062b")}),(0,gt.jsx)(Z,{children:zi.map((e=>(0,gt.jsx)(Wt,{product:e,getName:bi,getDesc:vi,currencySymbol:Ge,openProduct:ki,quickAdd:Fi,features:qe,isRtl:ce,loc:ji},e.id)))})]}),!ri.trim()&&Ve.length>0&&(0,gt.jsxs)(W,{id:"section-best-sellers","data-section":"best-sellers",children:[(0,gt.jsxs)(Oi,{children:[(0,gt.jsx)(K,{$rtl:ce,style:{margin:0},children:ji("\ud83d\udd25 Best Sellers","\ud83d\udd25 \u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b")}),(0,gt.jsxs)(Yi,{children:[Ve.length," ",ji("items","\u0635\u0646\u0641")]})]}),(0,gt.jsx)(Vi,{children:Ve.map((e=>(0,gt.jsxs)(Ui,{onClick:()=>ki(e.id),children:[(0,gt.jsx)(Xi,{children:Jt(e)&&(0,gt.jsx)("img",{src:Jt(e),alt:""})}),(0,gt.jsxs)(Qi,{children:[(0,gt.jsx)(Ji,{children:bi(e)}),(0,gt.jsx)(Wi,{children:(0,c.T)(parseFloat(e.en_price)||0,Ge)})]})]},e.id)))})]}),!ri.trim()&&Ue.length>0&&(0,gt.jsxs)(W,{id:"section-offers","data-section":"offers",children:[(0,gt.jsxs)(Oi,{children:[(0,gt.jsx)(K,{$rtl:ce,style:{margin:0},children:ji("\ud83c\udff7\ufe0f Offers","\ud83c\udff7\ufe0f \u0639\u0631\u0648\u0636")}),(0,gt.jsxs)(Yi,{children:[Ue.length," ",ji("items","\u0635\u0646\u0641")]})]}),(0,gt.jsx)(Vi,{children:Ue.map((e=>{const i=parseFloat(e.en_price)||0,t=Number(e.discount)||0;return(0,gt.jsxs)(Ui,{onClick:()=>ki(e.id),children:[(0,gt.jsx)(Xi,{children:Jt(e)&&(0,gt.jsx)("img",{src:Jt(e),alt:""})}),(0,gt.jsxs)(Qi,{children:[(0,gt.jsx)(Ji,{children:bi(e)}),(0,gt.jsxs)("div",{children:[(0,gt.jsx)(Wi,{children:(0,c.T)(i*(1-t/100),Ge)}),(0,gt.jsx)(se,{style:{fontSize:"0.5625rem"},children:(0,c.T)(i,Ge)})]})]})]},e.id)}))})]}),!ri.trim()&&Me.map((e=>{const i=(e.products||[]).filter((e=>!e.is_deleted&&1!==e.is_deleted)).sort(((e,i)=>(i.priority||0)-(e.priority||0)));return i.length?(0,gt.jsxs)(W,{id:`section-${e.id}`,"data-section":e.id,children:[(0,gt.jsxs)(Oi,{children:[(0,gt.jsx)(K,{$rtl:ce,style:{margin:0},children:yi(e)}),(0,gt.jsxs)(Yi,{children:[i.length," ",ji("items","\u0635\u0646\u0641")]})]}),(0,gt.jsx)(Z,{children:i.map((e=>(0,gt.jsx)(Wt,{product:e,getName:bi,getDesc:vi,currencySymbol:Ge,openProduct:ki,quickAdd:Fi,features:qe,isRtl:ce,loc:ji},e.id)))})]},e.id):null}))]})]}),(0,gt.jsx)(pe,{children:(0,gt.jsxs)(xe,{children:[(0,gt.jsxs)(he,{children:[(0,gt.jsxs)("div",{children:[(0,gt.jsx)(ue,{$rtl:ce,children:ce&&re.ar_name?re.ar_name:re.name}),(0,gt.jsx)(ge,{children:ce&&re.ar_description?re.ar_description:re.en_description||""}),(0,gt.jsxs)(be,{children:[Oe.instagram&&(0,gt.jsx)("a",{href:Oe.instagram,target:"_blank",rel:"noopener noreferrer",children:(0,gt.jsx)(Vt.ao$,{})}),Oe.facebook&&(0,gt.jsx)("a",{href:Oe.facebook,target:"_blank",rel:"noopener noreferrer",children:(0,gt.jsx)(Vt.iYk,{})}),Oe.tiktok&&(0,gt.jsx)("a",{href:Oe.tiktok,target:"_blank",rel:"noopener noreferrer",children:(0,gt.jsx)(Vt.kkU,{})})]})]}),(0,gt.jsxs)("div",{children:[(0,gt.jsx)(me,{children:ji("Contact","\u062a\u0648\u0627\u0635\u0644")}),(null===(m=re.branches)||void 0===m||null===(u=m[0])||void 0===u?void 0:u.phone)&&(0,gt.jsx)(fe,{href:`tel:${re.branches[0].phone}`,children:re.branches[0].phone}),(null===(g=re.branches)||void 0===g||null===(f=g[0])||void 0===f?void 0:f.email)&&(0,gt.jsx)(fe,{href:`mailto:${re.branches[0].email}`,children:re.branches[0].email}),(null===(b=re.branches)||void 0===b||null===(y=b[0])||void 0===y?void 0:y.address)&&(0,gt.jsx)(ge,{children:re.branches[0].address})]}),(null===(v=re.workingHours)||void 0===v?void 0:v.length)>0&&(0,gt.jsxs)("div",{children:[(0,gt.jsx)(me,{children:ji("Hours","\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644")}),re.workingHours.map(((e,i)=>(0,gt.jsxs)(ge,{children:[ce&&e.ar_day?e.ar_day:e.en_day,": ",e.opening_time," - ",e.closing_time]},i)))]}),(0,gt.jsxs)("div",{children:[(0,gt.jsx)(me,{children:ji("Legal","\u0642\u0627\u0646\u0648\u0646\u064a")}),(0,gt.jsx)(ge,{children:ji("Privacy Policy","\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629")}),(0,gt.jsx)(ge,{children:ji("Terms of Service","\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629")})]})]}),(0,gt.jsxs)(ye,{children:[(0,gt.jsxs)("span",{children:["\xa9 ",(new Date).getFullYear()," ",re.name]}),(0,gt.jsxs)("span",{children:["Powered by ",(0,gt.jsx)("a",{href:"https://menugic.com",target:"_blank",rel:"noopener noreferrer",children:"Menugic"})]})]})]})}),(0,gt.jsxs)(ve,{children:[(0,gt.jsxs)(je,{$active:"home"===si,onClick:()=>{di("home"),window.scrollTo({top:0,behavior:"smooth"})},children:[(0,gt.jsx)(h.V5Y,{}),(0,gt.jsx)("span",{children:ji("Home","\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629")})]}),(0,gt.jsxs)(je,{$active:"menu"===si,onClick:()=>{di("menu");const e=document.querySelector("[data-section]");if(e){const i=e.getBoundingClientRect().top+window.scrollY-110;window.scrollTo({top:i,behavior:"smooth"})}},children:[(0,gt.jsx)(h.QPV,{}),(0,gt.jsx)("span",{children:ji("Menu","\u0627\u0644\u0642\u0627\u0626\u0645\u0629")})]}),(0,gt.jsxs)(je,{$active:"search"===si,onClick:()=>{di("search"),ii(!0),oi("")},children:[(0,gt.jsx)(h.CKj,{}),(0,gt.jsx)("span",{children:ji("Search","\u0628\u062d\u062b")})]}),(null===qe||void 0===qe?void 0:qe.cart)&&(0,gt.jsxs)(je,{$active:"cart"===si,onClick:()=>{di("cart"),wi("cart")},children:[(0,gt.jsx)(h.iHs,{}),de>0&&(0,gt.jsx)(we,{children:de}),(0,gt.jsx)("span",{children:ji("Cart","\u0627\u0644\u0633\u0644\u0629")})]}),(0,gt.jsxs)(je,{$active:"more"===si,onClick:()=>{di("more"),wi("more")},children:[(0,gt.jsx)(h.$Ri,{}),(0,gt.jsx)("span",{children:ji("More","\u0627\u0644\u0645\u0632\u064a\u062f")})]})]}),(null===qe||void 0===qe?void 0:qe.cart)&&de>0&&(0,gt.jsx)(Ce,{children:(0,gt.jsxs)(ke,{onClick:()=>wi("cart"),children:[(0,gt.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,gt.jsx)(Ae,{children:de}),(0,gt.jsx)($e,{children:ji("View Cart","\u0639\u0631\u0636 \u0627\u0644\u0633\u0644\u0629")})]}),(0,gt.jsx)(Ee,{children:(0,c.T)(le.reduce(((e,i)=>e+i.price*i.quantity),0),Ge)})]})}),ei&&(0,gt.jsxs)(_e,{children:[(0,gt.jsxs)(ze,{children:[(0,gt.jsx)(Fe,{ref:ui,value:ti,onChange:e=>oi(e.target.value),placeholder:ji("Search menu...","\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629..."),autoFocus:!0}),(0,gt.jsx)(De,{onClick:()=>{ii(!1),oi("")},children:ji("Cancel","\u0625\u0644\u063a\u0627\u0621")})]}),(0,gt.jsx)(Se,{children:ti.trim()?zi.length>0?zi.map((e=>(0,gt.jsxs)(Te,{onClick:()=>{ii(!1),oi(""),ki(e.id)},children:[(0,gt.jsx)(Be,{children:Jt(e)&&(0,gt.jsx)("img",{src:Jt(e),alt:""})}),(0,gt.jsxs)(Ne,{children:[(0,gt.jsx)("h4",{children:bi(e)}),(0,gt.jsx)("p",{children:e._catName})]}),(0,gt.jsx)(Le,{children:(0,c.T)(parseFloat(e.en_price)||0,Ge)})]},e.id))):(0,gt.jsx)(Ie,{children:ji("No results found","\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0646\u062a\u0627\u0626\u062c")}):(0,gt.jsx)(Ie,{children:ji("Type to search...","\u0627\u0643\u062a\u0628 \u0644\u0644\u0628\u062d\u062b...")})})]}),$i&&(0,gt.jsx)(Kt,{product:$i,restaurant:re,restaurantName:oe,activeLanguage:ne,isRtl:ce,currencySymbol:Ge,features:qe,onClose:Ai,getName:bi,getDesc:vi,loc:ji,dispatch:ae,openProduct:ki,categories:Me,showToast:gi}),"more"===Xe&&(0,gt.jsxs)(gt.Fragment,{children:[(0,gt.jsx)(k,{onClick:()=>wi(null)}),(0,gt.jsxs)(He,{children:[(0,gt.jsx)(Pe,{}),(0,gt.jsxs)(Re,{onClick:()=>wi("contact"),children:[(0,gt.jsx)(h.QFc,{})," ",ji("Contact","\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627")]}),(0,gt.jsxs)(Re,{onClick:()=>wi("location"),children:[(0,gt.jsx)(h.HzC,{})," ",ji("Branches","\u0627\u0644\u0641\u0631\u0648\u0639")]}),(null===qe||void 0===qe?void 0:qe.about_us)&&(0,gt.jsxs)(Re,{onClick:()=>wi("about"),children:[(0,gt.jsx)(h.S8s,{})," ",ji("About Us","\u0645\u0646 \u0646\u062d\u0646")]}),(null===qe||void 0===qe?void 0:qe.feedback)&&(0,gt.jsxs)(Re,{onClick:()=>wi("feedback"),children:[(0,gt.jsx)(h.mEP,{})," ",ji("Feedback","\u062a\u0642\u064a\u064a\u0645")]}),(0,gt.jsxs)(Re,{onClick:()=>wi("share"),children:[(0,gt.jsx)(h.Pum,{})," ",ji("Share","\u0645\u0634\u0627\u0631\u0643\u0629")]})]})]}),Xe&&"more"!==Xe&&(0,gt.jsx)(k,{onClick:()=>wi(null)}),"cart"===Xe&&(0,gt.jsx)(yt,{restaurant:re,restaurantName:oe,activeLanguage:ne,currencySymbol:Ge,features:qe,cart:le,popupHandler:wi,isRtl:ce}),"location"===Xe&&(0,gt.jsx)(Et,{restaurant:re,activeLanguage:ne,popupHandler:wi,isRtl:ce}),"feedback"===Xe&&(0,gt.jsx)(Nt,{restaurant:re,restaurantName:oe,activeLanguage:ne,popupHandler:wi,isRtl:ce}),"contact"===Xe&&(0,gt.jsx)(Pt,{restaurant:re,activeLanguage:ne,popupHandler:wi,isRtl:ce}),"share"===Xe&&(0,gt.jsx)(Ot,{restaurant:re,popupHandler:wi,isRtl:ce}),"about"===Xe&&(0,gt.jsx)(Yt.A,{restaurant:re,showPopup:Xe,popupHandler:wi}),ci.length>0&&(0,gt.jsx)(qi,{children:ci.map((e=>(0,gt.jsx)(Mi,{$type:e.type,children:e.message},e.id)))})]}):null}function Jt(e){var i,t;const o=null===(i=e.images)||void 0===i?void 0:i.findIndex((i=>i.id===e.new_cover_id)),r=o>=0?e.images[o]:null===(t=e.images)||void 0===t?void 0:t[0];return null!==r&&void 0!==r&&r.url?(0,p.V)(r.url):null}function Wt(e){let{product:i,getName:t,getDesc:o,currencySymbol:r,openProduct:n,quickAdd:a,features:l,isRtl:s,loc:d}=e;const p=t(i),x=(m=o(i))?m.replace(/<[^>]*>/g,"").trim():"";var m;const u=Jt(i),g=parseFloat(i.en_price)||0,f=Number(i.discount)||0,b=f>0?g*(1-f/100):g,y=1===i.out_of_stock||!0===i.out_of_stock,v=(()=>{try{const e=JSON.parse(i.form_json||"{}");return e&&Object.keys(e).length>0}catch{return!1}})(),j=(null===l||void 0===l?void 0:l.cart)&&!y&&!v;return(0,gt.jsxs)(ee,{$unavailable:y,onClick:()=>!y&&n(i.id),children:[(0,gt.jsx)(ie,{children:u&&(0,gt.jsx)("img",{src:u,alt:p,loading:"lazy"})}),i.is_best_seller&&(0,gt.jsx)(te,{$type:"best",children:d("Best Seller","\u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b")}),!i.is_best_seller&&i.featured&&(0,gt.jsx)(te,{$type:"featured",children:d("Featured","\u0645\u0645\u064a\u0632")}),!i.is_best_seller&&!i.featured&&f>0&&(0,gt.jsxs)(te,{$type:"sale",children:["-",f,"%"]}),!i.is_best_seller&&!i.featured&&!f&&(i.new||i.is_new)&&(0,gt.jsx)(te,{$type:"new",children:d("New","\u062c\u062f\u064a\u062f")}),(0,gt.jsxs)(oe,{children:[(0,gt.jsx)(re,{children:p}),x&&(0,gt.jsx)(ne,{children:x}),(0,gt.jsxs)(ae,{children:[(0,gt.jsxs)("div",{children:[(0,gt.jsxs)("span",{children:[v&&(0,gt.jsx)(at,{children:d("From","\u0645\u0646")}),(0,gt.jsx)(le,{children:(0,c.T)(b,r)})]}),f>0&&(0,gt.jsx)(se,{children:(0,c.T)(g,r)}),v&&(0,gt.jsx)(lt,{children:d("Customizable","\u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u062e\u0635\u064a\u0635")})]}),y?(0,gt.jsx)(ce,{children:d("Sold Out","\u0646\u0641\u0630\u062a \u0627\u0644\u0643\u0645\u064a\u0629")}):null!==l&&void 0!==l&&l.cart?(0,gt.jsx)(de,{onClick:e=>j?a(e,i):void 0,children:(0,gt.jsx)(h.GGD,{})}):null]})]})]})}function Kt(e){let{product:i,restaurant:t,restaurantName:r,activeLanguage:n,isRtl:a,currencySymbol:l,features:p,onClose:m,getName:u,getDesc:g,loc:f,dispatch:b,openProduct:y,categories:v,showToast:j}=e;const[w,C]=(0,o.useState)(1),[k,A]=(0,o.useState)(""),[$,E]=(0,o.useState)({}),[_,z]=(0,o.useState)(0),F=u(i),D=g(i),S=Jt(i),T=parseFloat(i.en_price)||0,B=Number(i.discount)||0,N=B>0?T*(1-B/100):T,L=(0,o.useMemo)((()=>{try{const e=JSON.parse(i.form_json||"{}");if(e&&Object.keys(e).length>0)return e}catch{}return null}),[i.form_json]),I=2===(null===L||void 0===L?void 0:L.version),H=(0,o.useMemo)((()=>{if(!v)return[];for(const e of v){if((e.products||[]).find((e=>e.id===i.id)))return(e.products||[]).filter((e=>e.id!==i.id&&!e.is_deleted)).slice(0,4)}return[]}),[v,i.id]);(0,o.useEffect)((()=>{z(N)}),[N]);const P=_*w;(0,o.useEffect)((()=>{if(null!==t&&void 0!==t&&t.id&&null!==i&&void 0!==i&&i.id){var e,o,r;const n=(null===t||void 0===t||null===(e=t.branches)||void 0===e||null===(o=e[0])||void 0===o?void 0:o.id)||null;(0,d.trackItemView)(t.id,i.id,i.category_id,n,{name:F,price:T,category:(null===(r=i.category)||void 0===r?void 0:r.en_category)||""})}}),[null===i||void 0===i?void 0:i.id]);const R=(0,o.useCallback)((e=>{z(e)}),[]);return(0,gt.jsx)(qe,{onClick:m,children:(0,gt.jsxs)(Me,{onClick:e=>e.stopPropagation(),children:[(0,gt.jsx)(Ge,{onClick:m,children:(0,gt.jsx)(h.yGN,{})}),(0,gt.jsxs)(Oe,{children:[S?(0,gt.jsx)(Ye,{children:(0,gt.jsx)("img",{src:S,alt:F})}):(0,gt.jsx)(Ve,{children:"\ud83c\udf7d\ufe0f"}),(0,gt.jsxs)(Ue,{children:[(0,gt.jsx)(Xe,{$rtl:a,children:F}),D&&(0,gt.jsx)(Qe,{dangerouslySetInnerHTML:{__html:D}}),(0,gt.jsxs)(Je,{children:[(0,gt.jsx)(We,{children:(0,c.T)(N,l)}),B>0&&(0,gt.jsx)(Ke,{children:(0,c.T)(T,l)}),B>0&&(0,gt.jsxs)(Ze,{children:["-",B,"%"]})]}),I&&L&&(0,gt.jsx)(ei,{children:(0,gt.jsx)(x.A,{options:L,formData:$,setFormData:E,activeLanguage:n,basePrice:N,onPriceChange:R})}),(0,gt.jsx)(ii,{children:f("Special Instructions","\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u062e\u0627\u0635\u0629")}),(0,gt.jsx)(ti,{value:k,onChange:e=>A(e.target.value),placeholder:f("Add your notes here...","\u0623\u0636\u0641 \u0645\u0644\u0627\u062d\u0638\u0627\u062a\u0643 \u0647\u0646\u0627..."),rows:2}),H.length>0&&(0,gt.jsxs)(dt,{children:[(0,gt.jsx)(ct,{children:f("You Might Also Like","\u0642\u062f \u064a\u0639\u062c\u0628\u0643 \u0623\u064a\u0636\u0627\u064b")}),(0,gt.jsx)(pt,{children:H.map((e=>(0,gt.jsxs)(xt,{onClick:()=>{m(),setTimeout((()=>y(e.id)),100)},children:[(0,gt.jsx)(ht,{children:Jt(e)&&(0,gt.jsx)("img",{src:Jt(e),alt:""})}),(0,gt.jsx)(mt,{children:u(e)}),(0,gt.jsx)(ut,{children:(0,c.T)(parseFloat(e.en_price)||0,l)})]},e.id)))})]})]})]}),(null===p||void 0===p?void 0:p.cart)&&(0,gt.jsxs)(oi,{children:[(0,gt.jsxs)(ri,{children:[(0,gt.jsx)("button",{onClick:()=>C(Math.max(1,w-1)),children:(0,gt.jsx)(h.QLg,{})}),(0,gt.jsx)("span",{children:w}),(0,gt.jsx)("button",{onClick:()=>C(w+1),children:(0,gt.jsx)(h.GGD,{})})]}),(0,gt.jsxs)(ni,{onClick:()=>{if(null!==t&&void 0!==t&&t.id&&null!==i&&void 0!==i&&i.id){var e,o;const r=(null===t||void 0===t||null===(e=t.branches)||void 0===e||null===(o=e[0])||void 0===o?void 0:o.id)||null;(0,d.trackAddToCart)(t.id,i.id,i.category_id,w,r,{name:F,price:_})}b((0,s.bE)(r,i,w,$,_,k,void 0)),j&&j(a?`${F} \u0623\u064f\u0636\u064a\u0641 \u0644\u0644\u0633\u0644\u0629`:`${F} added to cart`,"success"),m()},children:[f("Add to Cart","\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629")," \u2014 ",(0,c.T)(P,l)]})]})]})})}}}]);
//# sourceMappingURL=532.8a6e70b8.chunk.js.map