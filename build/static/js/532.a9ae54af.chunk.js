"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[532],{32532:(e,i,r)=>{r.r(i),r.d(i,{default:()=>ur});var o=r(82483),t=r(99891),n=r(93376),a=r(91965),l=r(17123),s=r(86001),d=r(81926),c=r(18907),p=r(58821),x=r(42770),h=r(45745),m=r(29334),u=r(50074),g=r(67059),f=r(41190);const b=f.i7`from{opacity:0}to{opacity:1}`,y=f.i7`from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}`,v=f.i7`from{transform:translateX(100%)}to{transform:translateX(0)}`,j=f.i7`from{transform:translateX(-100%)}to{transform:translateX(0)}`,w=(f.i7`from{background-position:200% 0}to{background-position:-200% 0}`,f.Ay.div`
  min-height: 100vh;
  background: ${e=>e.theme.backgroundColor||"#FAFAF8"};
  color: ${e=>e.theme.textColor||"#1A1816"};
  font-family: ${e=>e.theme.font||"'DM Sans'"}, system-ui, -apple-system, sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  direction: ${e=>e.$rtl?"rtl":"ltr"};
  padding-bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  @media(min-width:1024px){ padding-bottom: 0; }
`),C=f.Ay.div`
  position: fixed; inset: 0; z-index: 100;
  background: rgba(0,0,0,0.45);
  animation: ${b} 250ms ease;
`,k=f.Ay.header`
  position: sticky; top: 0; z-index: 50;
  height: 56px;
  background: ${e=>e.theme.textColor||"#1A1816"};
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: box-shadow 250ms;
  ${e=>e.$scrolled&&f.AH`box-shadow: 0 4px 16px rgba(0,0,0,0.12);`}
  @media(min-width:1024px){ height: 64px; }
`,A=f.Ay.div`
  max-width: 1200px; margin: 0 auto; height: 100%;
  display: flex; align-items: center; gap: 12px;
  padding: 0 16px;
  @media(min-width:640px){ padding: 0 24px; }
  @media(min-width:1280px){ padding: 0 32px; }
`,$=f.Ay.div`
  width: 34px; height: 34px; border-radius: 8px; overflow: hidden; flex-shrink: 0;
  background: ${e=>e.theme.categoryActive||"#F7F1DC"};
  display: flex; align-items: center; justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; }
  span { font-family: 'Literata', Georgia, serif; font-weight: 700; font-size: 0.875rem; color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,E=f.Ay.span`
  font-family: 'Literata', Georgia, serif;
  font-weight: 700; font-size: 1rem; color: #fff; white-space: nowrap;
  ${e=>e.$rtl&&f.AH`font-family: 'Almarai', 'Segoe UI', sans-serif;`}
  @media(min-width:1024px){ font-size: 1.125rem; }
`,_=f.Ay.div`
  display: none;
  @media(min-width:768px){
    display: flex; align-items: center; flex: 1; max-width: 480px;
    margin-inline-start: auto;
  }
  input {
    width: 100%; height: 36px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.06); padding: 0 16px; font-size: 0.75rem;
    color: #fff; outline: none; font-family: inherit;
    &::placeholder { color: rgba(255,255,255,0.3); }
    &:focus { border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); }
  }
`,z=f.Ay.div`
  display: flex; align-items: center; gap: 6px; margin-inline-start: auto;
  @media(min-width:768px){ margin-inline-start: 12px; }
`,F=f.Ay.button`
  position: relative; display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 8px; border: none; cursor: pointer;
  background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.7);
  transition: background 150ms, color 150ms;
  &:hover { background: rgba(255,255,255,0.1); color: #fff; }
  svg { width: 18px; height: 18px; }
  @media(min-width:768px){
    &.mobile-only { display: none; }
  }
`,D=f.Ay.button`
  height: 32px; padding: 0 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1);
  background: transparent; color: rgba(255,255,255,0.7); font-size: 0.75rem; font-weight: 700;
  letter-spacing: 0.02em; cursor: pointer; transition: all 150ms;
  &:hover { border-color: rgba(255,255,255,0.2); color: #fff; }
`,S=f.Ay.span`
  position: absolute; top: 2px; inset-inline-end: 2px;
  min-width: 16px; height: 16px; border-radius: 999px; padding: 0 4px;
  background: ${e=>e.theme.mainColor||"#9E7C0C"}; color: #fff;
  font-size: 9px; font-weight: 700; display: flex; align-items: center; justify-content: center;
  line-height: 1;
`,T=f.Ay.section`
  padding: 24px 16px 20px;
  max-width: 1200px; margin: 0 auto;
  display: flex; flex-direction: column; align-items: center; text-align: center;
  @media(min-width:640px){ padding: 32px 24px 24px; }
`,N=f.Ay.div`
  width: 72px; height: 72px; border-radius: 16px; overflow: hidden; margin-bottom: 12px;
  background: ${e=>e.theme.categoryActive||"#F7F1DC"};
  display: flex; align-items: center; justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; }
  span { font-family: 'Literata', Georgia, serif; font-weight: 700; font-size: 1.5rem;
    color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
  @media(min-width:1024px){ width: 80px; height: 80px; }
`,B=f.Ay.h1`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1.375rem; margin: 0 0 4px;
  color: ${e=>e.theme.textColor||"#1A1816"};
  @media(min-width:1024px){ font-size: 1.625rem; }
`,L=f.Ay.p`
  font-size: 0.75rem; color: #5C5752; margin: 0 0 12px;
  max-width: 400px;
`,q=f.Ay.div`
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap; justify-content: center;
  font-size: 0.6875rem; color: #918C86; margin-bottom: 16px;
  svg { width: 14px; height: 14px; }
`,H=(f.Ay.span`
  width: 6px; height: 6px; border-radius: 50%;
  background: ${e=>e.$open?"#1B7A3A":"#B5342A"};
`,f.Ay.div`
  display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;
`),I=f.Ay.button`
  display: flex; align-items: center; gap: 6px;
  height: 36px; padding: 0 16px; border-radius: 999px;
  border: 1px solid #E5E2DB; background: ${e=>e.theme.BoxColor||"#fff"}; cursor: pointer;
  font-size: 0.6875rem; font-weight: 600; color: ${e=>e.theme.textColor||"#1A1816"};
  transition: border-color 150ms, background 150ms;
  svg { width: 14px; height: 14px; color: #918C86; }
  &:hover { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,P=f.Ay.nav`
  position: sticky; top: 56px; z-index: 40;
  height: 44px; background: ${e=>e.theme.backgroundColor||"#FAFAF8"};
  border-bottom: 1px solid #F0EDE7;
  @media(min-width:1024px){ top: 64px; display: none; }
`,R=f.Ay.div`
  display: flex; gap: 6px; overflow-x: auto; padding: 6px 16px;
  max-width: 1200px; margin: 0 auto;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`,G=f.Ay.button`
  flex-shrink: 0; scroll-snap-align: start;
  height: 32px; padding: 0 14px; border-radius: 999px; border: 1px solid transparent;
  font-size: 0.6875rem; font-weight: 600; white-space: nowrap; cursor: pointer;
  transition: all 150ms; font-family: inherit;
  background: ${e=>e.$active?e.theme.categoryActive||"#F7F1DC":"transparent"};
  color: ${e=>e.$active?e.theme.categoryActiveText||"#1A1816":e.theme.categoryUnactiveText||"#918C86"};
  border-color: ${e=>e.$active?e.theme.mainColor||"#9E7C0C":"transparent"};
  &:hover {
    background: ${e=>e.$active?void 0:"#F4F2ED"};
  }
`,M=f.Ay.div`
  max-width: 1200px; margin: 0 auto;
  display: flex; gap: 24px;
  padding: 16px 16px 0;
  @media(min-width:640px){ padding: 16px 24px 0; }
  @media(min-width:1280px){ padding: 16px 32px 0; }
`,Y=f.Ay.aside`
  display: none;
  @media(min-width:1024px){
    display: block; flex-shrink: 0; width: 200px;
    position: sticky; top: calc(64px + 16px);
    max-height: calc(100vh - 64px - 32px); overflow-y: auto;
    scrollbar-width: none; &::-webkit-scrollbar { display: none; }
  }
`,O=f.Ay.button`
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
`,V=f.Ay.span`
  font-size: 0.625rem; color: #918C86;
  min-width: 20px; height: 20px; border-radius: 999px;
  background: #F4F2ED; display: flex; align-items: center; justify-content: center;
`,U=f.Ay.div`
  flex: 1; min-width: 0; padding-bottom: 24px;
`,X=f.Ay.section`
  margin-bottom: 32px;
`,Q=f.Ay.h2`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 600; font-size: 1.125rem; margin: 0 0 16px;
  color: ${e=>e.theme.textColor||"#1A1816"};
  @media(min-width:1024px){ font-size: 1.375rem; }
`,W=f.Ay.div`
  display: grid; gap: 12px;
  grid-template-columns: 1fr;
  @media(min-width:480px){ grid-template-columns: repeat(2, 1fr); }
  @media(min-width:1024px){ grid-template-columns: repeat(3, 1fr); }
  @media(min-width:1280px){ gap: 16px; }
`,J=f.Ay.div`
  position: relative; background: ${e=>e.theme.BoxColor||"#fff"};
  border: 1px solid #F0EDE7; border-radius: 14px; overflow: hidden;
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
`,K=f.Ay.div`
  width: 110px; height: 110px; flex-shrink: 0; overflow: hidden;
  background: #F4F2ED;
  @media(min-width:480px){ width: 100%; height: 0; padding-bottom: 65%; }
  img { width: 100%; height: 100%; object-fit: cover; display: block; }
`,Z=f.Ay.span`
  position: absolute; top: 8px; inset-inline-start: 8px; z-index: 2;
  padding: 2px 8px; border-radius: 999px; font-size: 9px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em;
  background: ${e=>"new"===e.$type?"#E8F5EC":"sale"===e.$type?"#FDE8E6":"#F7F1DC"};
  color: ${e=>"new"===e.$type?"#1B7A3A":"sale"===e.$type?"#B5342A":e.theme.mainColor||"#9E7C0C"};
`,ee=f.Ay.div`
  flex: 1; min-width: 0; padding: 12px;
  display: flex; flex-direction: column;
`,ie=f.Ay.h3`
  font-weight: 600; font-size: 0.75rem; margin: 0 0 4px;
  color: ${e=>e.theme.BoxTextColor||"#1A1816"};
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
`,re=f.Ay.p`
  font-size: 0.6875rem; line-height: 1.4; color: #918C86; margin: 0 0 auto;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
`,oe=f.Ay.div`
  display: flex; align-items: center; justify-content: space-between; margin-top: 8px;
`,te=f.Ay.span`
  font-weight: 700; font-size: 0.75rem;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#9E7C0C"};
`,ne=f.Ay.span`
  font-size: 0.625rem; color: #918C86; text-decoration: line-through;
  margin-inline-start: 6px;
`,ae=f.Ay.button`
  width: 32px; height: 32px; border-radius: 8px; border: none; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; display: flex; align-items: center; justify-content: center;
  transition: background 150ms; flex-shrink: 0;
  svg { width: 16px; height: 16px; }
  &:hover { opacity: 0.85; }
  &:active { transform: scale(0.9); }
`,le=f.Ay.span`
  font-size: 0.625rem; font-weight: 600; color: #B5342A;
`,se=f.Ay.footer`
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: rgba(255,255,255,0.7); padding: 48px 16px 24px;
  margin-bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  @media(min-width:640px){ padding: 48px 24px 24px; }
  @media(min-width:1024px){ margin-bottom: 0; }
`,de=f.Ay.div`
  max-width: 1200px; margin: 0 auto;
`,ce=f.Ay.div`
  display: grid; gap: 32px;
  grid-template-columns: 1fr;
  @media(min-width:640px){ grid-template-columns: 2fr 1fr 1fr; }
  @media(min-width:1024px){ grid-template-columns: 2fr 1fr 1fr 1fr; }
`,pe=f.Ay.h4`
  font-size: 0.6875rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: rgba(255,255,255,0.5); margin: 0 0 16px;
`,xe=f.Ay.div`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-size: 1.375rem; font-weight: 700; color: #fff; margin-bottom: 12px;
`,he=f.Ay.p`
  font-size: 0.75rem; color: rgba(255,255,255,0.5); margin: 0 0 6px;
  line-height: 1.5;
`,me=f.Ay.a`
  display: block; font-size: 0.75rem; color: rgba(255,255,255,0.5);
  text-decoration: none; margin-bottom: 8px; transition: color 150ms;
  &:hover { color: rgba(255,255,255,0.9); }
`,ue=f.Ay.div`
  display: flex; gap: 8px; margin-top: 16px;
  a {
    width: 36px; height: 36px; border-radius: 8px; display: flex;
    align-items: center; justify-content: center;
    border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.5);
    text-decoration: none; transition: all 150ms;
    svg { width: 16px; height: 16px; }
    &:hover { background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.3); }
  }
`,ge=f.Ay.div`
  border-top: 1px solid rgba(255,255,255,0.1); margin-top: 32px; padding-top: 16px;
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px;
  font-size: 0.6875rem; color: rgba(255,255,255,0.3);
  a { color: rgba(255,255,255,0.4); text-decoration: none; &:hover { color: rgba(255,255,255,0.7); } }
`,fe=f.Ay.nav`
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 90;
  height: calc(56px + env(safe-area-inset-bottom, 0px));
  padding-bottom: env(safe-area-inset-bottom, 0px);
  background: ${e=>e.theme.bottomTabBarBackgroundColor||"#fff"};
  border-top: 1px solid #F0EDE7;
  display: flex; align-items: center; justify-content: space-around;
  @media(min-width:1024px){ display: none; }
`,be=f.Ay.button`
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  border: none; background: none; cursor: pointer; position: relative;
  padding: 6px 0; min-width: 48px; font-family: inherit;
  color: ${e=>e.$active?e.theme.textColor||"#1A1816":"#918C86"};
  font-size: 10px; font-weight: ${e=>e.$active?600:500};
  transition: color 150ms;
  svg { width: 20px; height: 20px; }
`,ye=f.Ay.span`
  position: absolute; top: 0; inset-inline-end: 2px;
  min-width: 14px; height: 14px; border-radius: 999px; padding: 0 3px;
  background: ${e=>e.theme.mainColor||"#9E7C0C"}; color: #fff;
  font-size: 9px; font-weight: 700; display: flex; align-items: center; justify-content: center;
`,ve=f.Ay.div`
  position: fixed; z-index: 85;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px) + 8px);
  left: 16px; right: 16px;
  @media(min-width:1024px){ display: none !important; }
`,je=f.Ay.button`
  width: 100%; height: 52px; border: none; border-radius: 14px; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; display: flex; align-items: center; justify-content: space-between;
  padding: 0 20px; animation: ${y} 400ms cubic-bezier(0.16,1,0.3,1);
  font-family: inherit;
`,we=f.Ay.span`
  display: flex; align-items: center; justify-content: center;
  width: 24px; height: 24px; border-radius: 999px; background: rgba(255,255,255,0.2);
  font-size: 0.6875rem; font-weight: 700; margin-inline-end: 10px;
`,Ce=f.Ay.span`
  font-size: 0.75rem; font-weight: 600;
`,ke=f.Ay.span`
  font-size: 0.875rem; font-weight: 700;
`,Ae=f.Ay.div`
  position: fixed; inset: 0; z-index: 200;
  background: ${e=>e.theme.backgroundColor||"#FAFAF8"};
  animation: ${b} 200ms ease;
  display: flex; flex-direction: column;
  @media(min-width:768px){ display: none; }
`,$e=f.Ay.div`
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px; border-bottom: 1px solid #F0EDE7;
`,Ee=f.Ay.input`
  flex: 1; height: 40px; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.searchTextColor||"#1A1816"};
  padding: 0 16px; font-size: 0.875rem; outline: none; font-family: inherit;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,_e=f.Ay.button`
  border: none; background: none; cursor: pointer; font-family: inherit;
  font-size: 0.75rem; font-weight: 600; color: ${e=>e.theme.mainColor||"#9E7C0C"};
`,ze=f.Ay.div`
  flex: 1; overflow-y: auto; padding: 16px;
`,Fe=f.Ay.div`
  display: flex; align-items: center; gap: 12px;
  padding: 10px 0; border-bottom: 1px solid #F0EDE7; cursor: pointer;
  &:last-child { border-bottom: none; }
`,De=f.Ay.div`
  width: 48px; height: 48px; border-radius: 10px; overflow: hidden; flex-shrink: 0;
  background: #F4F2ED;
  img { width: 100%; height: 100%; object-fit: cover; }
`,Se=f.Ay.div`
  flex: 1; min-width: 0;
  h4 { font-size: 0.75rem; font-weight: 600; margin: 0 0 2px; color: ${e=>e.theme.textColor||"#1A1816"}; }
  p { font-size: 0.6875rem; color: #918C86; margin: 0; }
`,Te=f.Ay.span`
  font-size: 0.75rem; font-weight: 700; flex-shrink: 0;
  color: ${e=>e.theme.mainColor||"#9E7C0C"};
`,Ne=f.Ay.div`
  text-align: center; padding: 48px 0; color: #918C86; font-size: 0.75rem;
`,Be=f.Ay.div`
  position: fixed; inset-inline: 0; bottom: 0; z-index: 110;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  border-radius: 20px 20px 0 0; max-height: 70vh; overflow-y: auto;
  padding: 12px 0 calc(16px + env(safe-area-inset-bottom, 0px));
  animation: ${y} 400ms cubic-bezier(0.16,1,0.3,1);
  box-shadow: 0 -8px 30px rgba(0,0,0,0.1);
  @media(min-width:1024px){ max-width: 480px; margin: 0 auto; }
`,Le=f.Ay.div`
  width: 36px; height: 4px; border-radius: 999px;
  background: #E5E2DB; margin: 0 auto 16px;
`,qe=f.Ay.button`
  display: flex; align-items: center; gap: 14px; width: 100%;
  padding: 14px 24px; border: none; background: none; cursor: pointer;
  font-size: 0.875rem; font-weight: 500; text-align: start; font-family: inherit;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  transition: background 150ms;
  svg { width: 20px; height: 20px; color: #918C86; }
  &:hover { background: #F4F2ED; }
`,He=f.Ay.div`
  position: fixed; inset: 0; z-index: 110;
  display: flex; align-items: flex-end; justify-content: center;
  background: rgba(0,0,0,0.45); animation: ${b} 250ms;
  @media(min-width:1024px){ align-items: center; }
`,Ie=f.Ay.div`
  position: relative; width: 100%; max-height: 92vh;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  border-radius: 20px 20px 0 0; overflow: hidden;
  display: flex; flex-direction: column;
  animation: ${y} 400ms cubic-bezier(0.16,1,0.3,1);
  @media(min-width:1024px){
    max-width: 560px; max-height: 85vh;
    border-radius: 20px;
  }
`,Pe=f.Ay.button`
  position: absolute; top: 12px; inset-inline-end: 12px; z-index: 5;
  width: 32px; height: 32px; border-radius: 999px;
  background: #fff; border: none; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex; align-items: center; justify-content: center;
  color: #1A1816; transition: background 150ms;
  svg { width: 16px; height: 16px; }
  &:hover { background: #F4F2ED; }
`,Re=f.Ay.div`
  flex: 1; overflow-y: auto; overscroll-behavior: contain;
`,Ge=f.Ay.div`
  position: relative; width: 100%; padding-bottom: 65%;
  background: #F4F2ED; overflow: hidden;
  img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
`,Me=f.Ay.div`
  width: 100%; padding: 32px 0; text-align: center; background: #F4F2ED;
  font-size: 3rem;
`,Ye=f.Ay.div`
  padding: 20px;
`,Oe=f.Ay.h2`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1.375rem; line-height: 1.25; margin: 0 0 8px;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
`,Ve=f.Ay.p`
  font-size: 0.75rem; color: #5C5752; line-height: 1.6; margin: 0 0 12px;
`,Ue=f.Ay.div`
  display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
`,Xe=f.Ay.span`
  font-size: 1.125rem; font-weight: 700;
  color: ${e=>e.theme.mainColor||"#9E7C0C"};
`,Qe=f.Ay.span`
  font-size: 0.875rem; color: #918C86; text-decoration: line-through;
`,We=f.Ay.span`
  font-size: 0.6875rem; font-weight: 600; padding: 2px 8px;
  border-radius: 999px; background: #FDE8E6; color: #B5342A;
`,Je=f.Ay.div`
  border-top: 1px solid #F0EDE7; padding-top: 16px; margin-bottom: 16px;
`,Ke=f.Ay.label`
  display: block; font-size: 0.6875rem; color: #918C86;
  margin-bottom: 8px; font-weight: 600;
`,Ze=f.Ay.textarea`
  width: 100%; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.textColor||"#1A1816"};
  padding: 12px; font-size: 0.75rem; resize: none; outline: none;
  font-family: inherit; box-sizing: border-box;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,ei=f.Ay.div`
  padding: 16px 20px; border-top: 1px solid #F0EDE7;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  display: flex; align-items: center; gap: 12px;
`,ii=f.Ay.div`
  display: flex; align-items: center; gap: 4px;
  border-radius: 10px; border: 1px solid #E5E2DB; overflow: hidden;
  button {
    width: 36px; height: 40px; border: none; background: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: #5C5752; transition: background 150ms;
    svg { width: 16px; height: 16px; }
    &:hover { background: #F4F2ED; }
  }
  span { width: 28px; text-align: center; font-size: 0.875rem; font-weight: 600;
    color: ${e=>e.theme.textColor||"#1A1816"}; }
`,ri=f.Ay.button`
  flex: 1; height: 48px; border: none; border-radius: 10px; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; font-size: 0.875rem; font-weight: 700;
  transition: opacity 150ms; font-family: inherit;
  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,oi=f.Ay.div`
  position: fixed; inset: 0; z-index: 110;
  display: flex; justify-content: ${e=>e.$rtl?"flex-start":"flex-end"};
  background: rgba(0,0,0,0.45); animation: ${b} 200ms;
`,ti=f.Ay.div`
  width: 100%; max-width: 420px; height: 100%;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  display: flex; flex-direction: column;
  animation: ${e=>e.$rtl?j:v} 400ms cubic-bezier(0.16,1,0.3,1);
`,ni=f.Ay.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 20px; border-bottom: 1px solid #F0EDE7; flex-shrink: 0;
`,ai=f.Ay.h2`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1.125rem;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
`,li=f.Ay.button`
  width: 32px; height: 32px; border-radius: 999px; border: none; cursor: pointer;
  background: #F4F2ED; color: #5C5752;
  display: flex; align-items: center; justify-content: center;
  transition: background 150ms;
  svg { width: 16px; height: 16px; }
  &:hover { background: #E5E2DB; }
`,si=f.Ay.div`
  flex: 1; overflow-y: auto; padding: 0 20px;
`,di=f.Ay.div`
  text-align: center; padding: 48px 0; color: #918C86; font-size: 0.875rem;
`,ci=f.Ay.div`
  display: flex; gap: 12px; padding: 16px 0;
  border-bottom: 1px solid #F0EDE7;
  &:last-child { border-bottom: none; }
`,pi=f.Ay.div`
  width: 56px; height: 56px; border-radius: 10px; overflow: hidden; flex-shrink: 0;
  background: #F4F2ED;
  img { width: 100%; height: 100%; object-fit: cover; }
`,xi=f.Ay.div`
  flex: 1; min-width: 0;
`,hi=f.Ay.h4`
  font-size: 0.75rem; font-weight: 600; margin: 0 0 2px;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
`,mi=f.Ay.span`
  font-size: 0.6875rem; color: ${e=>e.theme.mainColor||"#9E7C0C"};
`,ui=f.Ay.p`
  font-size: 0.625rem; color: #918C86; margin: 4px 0 0; font-style: italic;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,gi=f.Ay.div`
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
`,fi=f.Ay.span`
  font-size: 0.75rem; font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  align-self: flex-end;
`,bi=f.Ay.button`
  border: none; background: none; cursor: pointer; padding: 0; flex-shrink: 0;
  color: #918C86; transition: color 150ms;
  svg { width: 14px; height: 14px; }
  &:hover { color: #B5342A; }
`,yi=f.Ay.div`
  padding: 16px 20px; border-top: 1px solid #F0EDE7; flex-shrink: 0;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
`,vi=f.Ay.div`
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;
  span:first-child { font-size: 0.75rem; color: #5C5752; }
  span:last-child { font-size: 1.125rem; font-weight: 700; color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,ji=f.Ay.button`
  width: 100%; height: 48px; border: none; border-radius: 10px; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; font-size: 0.875rem; font-weight: 700; font-family: inherit;
  transition: opacity 150ms;
  &:hover { opacity: 0.9; }
`,wi=f.Ay.label`
  display: block; font-size: 0.6875rem; font-weight: 600; color: #918C86;
  margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.04em;
`,Ci=f.Ay.input`
  width: 100%; height: 44px; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  padding: 0 16px; font-size: 0.75rem; outline: none; font-family: inherit;
  margin-bottom: 12px; box-sizing: border-box;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,ki=f.Ay.textarea`
  width: 100%; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  padding: 12px 16px; font-size: 0.75rem; outline: none; resize: none; font-family: inherit;
  margin-bottom: 12px; box-sizing: border-box;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,Ai=f.Ay.div`
  display: flex; gap: 8px; margin-bottom: 16px;
`,$i=f.Ay.button`
  flex: 1; height: 40px; border-radius: 10px; border: 1px solid;
  font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 150ms; font-family: inherit;
  background: ${e=>e.$active?e.theme.mainColor||"#9E7C0C":e.theme.popupbackgroundColor||"#fff"};
  color: ${e=>e.$active?"#fff":"#5C5752"};
  border-color: ${e=>e.$active?e.theme.mainColor||"#9E7C0C":"#E5E2DB"};
  &:hover { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,Ei=f.Ay.div`
  display: flex; gap: 8px;
`,_i=f.Ay.button`
  height: 48px; padding: 0 20px; border-radius: 10px;
  border: 1px solid #E5E2DB; background: ${e=>e.theme.popupbackgroundColor||"#fff"}; cursor: pointer;
  font-size: 0.75rem; font-weight: 600; color: #5C5752; font-family: inherit;
  transition: border-color 150ms;
  &:hover { border-color: #918C86; }
`,zi=f.Ay.button`
  flex: 1; height: 48px; border: none; border-radius: 10px; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; font-size: 0.875rem; font-weight: 700; font-family: inherit;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  transition: opacity 150ms;
  svg { width: 18px; height: 18px; }
  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,Fi=f.Ay.div`
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
`,Di=f.Ay.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 24px 16px; position: sticky; top: 0; z-index: 2;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  border-bottom: 1px solid #F0EDE7;
`,Si=f.Ay.h3`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1rem;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  margin: 0;
`,Ti=f.Ay.button`
  width: 32px; height: 32px; border-radius: 999px; border: none; cursor: pointer;
  background: #F4F2ED; color: #5C5752;
  display: flex; align-items: center; justify-content: center;
  svg { width: 16px; height: 16px; }
  &:hover { background: #E5E2DB; }
`,Ni=f.Ay.div`
  padding: 20px 24px;
`,Bi=f.Ay.button`
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
`;var Li=r(56723);const qi="https://storage.googleapis.com/ecommerce-bucket-testing/";function Hi(e){let{item:i,restaurantName:r,currencySymbol:o,activeLanguage:t,dispatch:n}=e;const a="ar"===t&&i.ar_name?i.ar_name:i.en_name,l=i.image_url?`${qi}${i.image_url}`:null,d=i.price*i.quantity;return(0,Li.jsxs)(ci,{children:[l&&(0,Li.jsx)(pi,{children:(0,Li.jsx)("img",{src:l,alt:a})}),(0,Li.jsxs)(xi,{children:[(0,Li.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:8},children:[(0,Li.jsx)(hi,{children:a}),(0,Li.jsx)(bi,{onClick:()=>n((0,s.dt)(r,i.uniqueId)),children:(0,Li.jsx)(h.IXo,{})})]}),(0,Li.jsx)(mi,{children:(0,c.T)(i.price,o)}),i.instruction&&(0,Li.jsx)(ui,{children:i.instruction}),(0,Li.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:8},children:[(0,Li.jsxs)(gi,{children:[(0,Li.jsx)("button",{onClick:()=>{i.quantity<=1?n((0,s.dt)(r,i.uniqueId)):n((0,s.v)(r,i.uniqueId,i.quantity-1))},children:(0,Li.jsx)(h.QLg,{})}),(0,Li.jsx)("span",{children:i.quantity}),(0,Li.jsx)("button",{onClick:()=>n((0,s.v)(r,i.uniqueId,i.quantity+1)),children:(0,Li.jsx)(h.GGD,{})})]}),(0,Li.jsx)(fi,{children:(0,c.T)(d,o)})]})]})]})}function Ii(e){var i,r;let{restaurant:t,restaurantName:n,activeLanguage:l,currencySymbol:p,features:x,cart:f,popupHandler:b,isRtl:y}=e;const v=(0,a.wA)(),{handleApiCallAsync:j}=(0,m.h)({onSuccess:()=>{}}),[w,C]=(0,o.useState)("cart"),[k,A]=(0,o.useState)(""),[$,E]=(0,o.useState)(""),[_,z]=(0,o.useState)(""),[F,D]=(0,o.useState)(""),[S,T]=(0,o.useState)(""),[N,B]=(0,o.useState)(""),L=f.reduce(((e,i)=>e+i.price*i.quantity),0),q=(0,o.useMemo)((()=>{const e=[];return null!==x&&void 0!==x&&x.delivery_order&&e.push({key:"Delivery",label:"ar"===l?"\u062a\u0648\u0635\u064a\u0644":"Delivery"}),null!==x&&void 0!==x&&x.takeaway_order&&e.push({key:"TakeAway",label:"ar"===l?"\u0627\u0633\u062a\u0644\u0627\u0645":"Pickup"}),null!==x&&void 0!==x&&x.dinein_order&&e.push({key:"DineIn",label:"ar"===l?"\u0641\u064a \u0627\u0644\u0645\u0637\u0639\u0645":"Dine-in"}),e}),[x,l]);(0,o.useState)((()=>{1===q.length&&A(q[0].key)}));const H=(null===t||void 0===t||null===(i=t.branches)||void 0===i||null===(r=i[0])||void 0===r?void 0:r.whatsapp_number)||"";return(0,Li.jsx)(oi,{$rtl:y,onClick:()=>b(null),children:(0,Li.jsxs)(ti,{$rtl:y,onClick:e=>e.stopPropagation(),children:[(0,Li.jsxs)(ni,{children:[(0,Li.jsx)(ai,{$rtl:y,children:"cart"===w?"ar"===l?"\u0627\u0644\u0633\u0644\u0629":"Your Cart":"ar"===l?"\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628":"Checkout"}),(0,Li.jsx)(li,{onClick:()=>b(null),children:(0,Li.jsx)(h.yGN,{})})]}),(0,Li.jsx)(si,{children:"cart"===w?(0,Li.jsx)(Li.Fragment,{children:0===f.length?(0,Li.jsx)(di,{children:"ar"===l?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"}):f.map((e=>(0,Li.jsx)(Hi,{item:e,restaurantName:n,currencySymbol:p,activeLanguage:l,dispatch:v},e.uniqueId)))}):(0,Li.jsxs)("div",{style:{padding:"16px 0"},children:[q.length>1&&(0,Li.jsxs)(Li.Fragment,{children:[(0,Li.jsx)(wi,{children:"ar"===l?"\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628":"Order Type"}),(0,Li.jsx)(Ai,{children:q.map((e=>(0,Li.jsx)($i,{$active:k===e.key,onClick:()=>A(e.key),children:e.label},e.key)))})]}),(0,Li.jsx)(Ci,{value:$,onChange:e=>E(e.target.value),placeholder:"ar"===l?"\u0627\u0644\u0627\u0633\u0645":"Your Name"}),(0,Li.jsx)(Ci,{value:_,onChange:e=>z(e.target.value),placeholder:"ar"===l?"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641":"Phone Number"}),"Delivery"===k&&(0,Li.jsx)(ki,{value:F,onChange:e=>D(e.target.value),placeholder:"ar"===l?"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644":"Delivery Address",rows:2}),"DineIn"===k&&(0,Li.jsx)(Ci,{value:S,onChange:e=>T(e.target.value),placeholder:"ar"===l?"\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629":"Table Number"}),(0,Li.jsx)(ki,{value:N,onChange:e=>B(e.target.value),placeholder:"ar"===l?"\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629":"Order Notes (optional)",rows:2})]})}),f.length>0&&(0,Li.jsxs)(yi,{children:[(0,Li.jsxs)(vi,{children:[(0,Li.jsx)("span",{children:"ar"===l?"\u0627\u0644\u0645\u062c\u0645\u0648\u0639":"Total"}),(0,Li.jsx)("span",{children:(0,c.T)(L,p)})]}),"cart"===w?(0,Li.jsx)(ji,{onClick:()=>C("checkout"),children:"ar"===l?"\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0637\u0644\u0628":"Proceed to Checkout"}):(0,Li.jsxs)(Ei,{children:[(0,Li.jsx)(_i,{onClick:()=>C("cart"),children:"ar"===l?"\u0631\u062c\u0648\u0639":"Back"}),(0,Li.jsxs)(zi,{onClick:async()=>{var e,i;let r=(()=>{let e=`*New Order - ${k}*\n`;return e+="----------------------------\n\n",f.forEach(((i,r)=>{const o="ar"===l&&i.ar_name?i.ar_name:i.en_name,t=i.category?"ar"===l&&i.category.ar_category?i.category.ar_category:i.category.en_category:"",n=i.price*i.quantity;if(e+=`${r+1}. *${(o||"").trim()}*\n`,t&&(e+=`    ${t.trim()}\n`),e+=`    ${i.quantity}x ${(0,c.T)(i.price,p)} = *${(0,c.T)(n,p)}*\n`,i.formData&&Object.keys(i.formData).length>0)try{const r=(0,u.Ve)(i,l);r&&(e+=`    ${r}\n`)}catch(a){}i.instruction&&(e+=`    > _${i.instruction}_\n`),e+="\n"})),e+="----------------------------\n",e+=`*Total: ${(0,c.T)(L,p)}*\n\n`,$&&(e+=`*Name:* ${$}\n`),_&&(e+=`*Phone:* ${_}\n`),"Delivery"===k&&F&&(e+=`*Address:* ${F}\n`),"DineIn"===k&&S&&(e+=`*Table:* ${S}\n`),N&&(e+=`*Notes:* ${N}\n`),e})();const o=[...f.map((e=>{var i,r;return{id:e.id,quantity:e.quantity,branch_id:null===t||void 0===t||null===(i=t.branches)||void 0===i||null===(r=i[0])||void 0===r?void 0:r.id,restaurant_id:null===t||void 0===t?void 0:t.id}}))],a=[...f.map((e=>({product_id:e.id,product_name:"ar"===l&&e.ar_name?e.ar_name:e.en_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];j({products:o,restaurant_id:null===t||void 0===t?void 0:t.id,branch_id:null===t||void 0===t||null===(e=t.branches)||void 0===e||null===(i=e[0])||void 0===i?void 0:i.id,delivery_type:k,customer_name:$,customer_phone:_,customer_address:"Delivery"===k?F:null,customer_latitude:null,customer_longitude:null,table_number:"DineIn"===k?S:null,note:N,items:a,subtotal:L,total:L,currency:null===t||void 0===t?void 0:t.currency},n).then((e=>{if(null!==t&&void 0!==t&&t.id){var i,r,o,n;const l=(null===t||void 0===t||null===(i=t.branches)||void 0===i||null===(r=i[0])||void 0===r?void 0:r.id)||null;(0,d.trackOrderPlaced)(t.id,(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(n=o.order)||void 0===n?void 0:n.id)||null,k,L,l,{items:a,customerName:$})}})).catch((e=>console.error("Order creation failed:",e))),(0,g.JT)(H,r),v((0,s.sX)(n)),b(null)},disabled:!k||!$,children:[(0,Li.jsx)(h.kGk,{}),"ar"===l?"\u0625\u0631\u0633\u0627\u0644 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628":"Send via WhatsApp"]})]})]})]})})}const Pi=f.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Ri=f.Ay.div`
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
`,Gi=f.Ay.div`
  flex: 1;
  min-width: 0;
`,Mi=f.Ay.h4`
  font-size: 0.8125rem;
  font-weight: 600;
  margin: 0 0 4px;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
`,Yi=f.Ay.p`
  font-size: 0.75rem;
  color: #918c86;
  margin: 0 0 2px;
  &:last-child {
    margin-bottom: 0;
  }
`,Oi=f.Ay.a`
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
`,Vi=f.Ay.p`
  text-align: center;
  color: #918c86;
  font-size: 0.8125rem;
  padding: 32px 0;
  margin: 0;
`;function Ui(e){let{restaurant:i,activeLanguage:r,popupHandler:o,isRtl:t}=e;const n=(e,i)=>t&&i||e,a=(null===i||void 0===i?void 0:i.branches)||[];return(0,Li.jsxs)(Li.Fragment,{children:[(0,Li.jsx)(C,{onClick:()=>o(null)}),(0,Li.jsxs)(Fi,{children:[(0,Li.jsxs)(Di,{children:[(0,Li.jsx)(Si,{$rtl:t,children:n("Branches","\u0627\u0644\u0641\u0631\u0648\u0639")}),(0,Li.jsx)(Ti,{onClick:()=>o(null),children:(0,Li.jsx)(h.yGN,{})})]}),(0,Li.jsx)(Ni,{children:0===a.length?(0,Li.jsx)(Vi,{children:n("No branches available","\u0644\u0627 \u062a\u0648\u062c\u062f \u0641\u0631\u0648\u0639")}):(0,Li.jsx)(Pi,{children:a.map((e=>(0,Li.jsxs)(Ri,{children:[(0,Li.jsx)(h.HzC,{}),(0,Li.jsxs)(Gi,{children:[(0,Li.jsx)(Mi,{children:t&&e.ar_name?e.ar_name:e.name}),e.address&&(0,Li.jsx)(Yi,{children:e.address}),e.phone&&(0,Li.jsxs)(Oi,{href:`tel:${e.phone}`,children:[(0,Li.jsx)(h.QFc,{}),e.phone]}),e.whatsapp_number&&(0,Li.jsxs)(Oi,{href:`https://wa.me/${e.whatsapp_number}`,target:"_blank",rel:"noopener noreferrer",children:[(0,Li.jsx)(h.X6_,{}),n("WhatsApp","\u0648\u0627\u062a\u0633\u0627\u0628")]})]})]},e.id)))})})]})]})}var Xi=r(11222);const Qi=f.Ay.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
`,Wi=f.Ay.button`
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
`,Ji=f.Ay.textarea`
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
`,Ki=f.Ay.div`
  text-align: center;
  padding: 32px 0;
`,Zi=f.Ay.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  margin: 0 0 8px;
`,er=f.Ay.p`
  font-size: 0.8125rem;
  color: #918c86;
  margin: 0;
`;function ir(e){let{restaurant:i,restaurantName:r,activeLanguage:t,popupHandler:n,isRtl:a}=e;const l=(e,i)=>a&&i||e,[s,d]=(0,o.useState)(0),[c,p]=(0,o.useState)(""),[x,m]=(0,o.useState)("idle");return(0,Li.jsxs)(Li.Fragment,{children:[(0,Li.jsx)(C,{onClick:()=>n(null)}),(0,Li.jsxs)(Fi,{children:[(0,Li.jsxs)(Di,{children:[(0,Li.jsx)(Si,{$rtl:a,children:l("Feedback","\u062a\u0642\u064a\u064a\u0645")}),(0,Li.jsx)(Ti,{onClick:()=>n(null),children:(0,Li.jsx)(h.yGN,{})})]}),(0,Li.jsx)(Ni,{children:"success"===x?(0,Li.jsxs)(Ki,{children:[(0,Li.jsx)(Zi,{children:l("Thank you!","\u0634\u0643\u0631\u0627 \u0644\u0643!")}),(0,Li.jsx)(er,{children:l("Your feedback has been submitted","\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u062a\u0642\u064a\u064a\u0645\u0643 \u0628\u0646\u062c\u0627\u062d")})]}):(0,Li.jsxs)(Li.Fragment,{children:[(0,Li.jsx)(Qi,{children:[1,2,3,4,5].map((e=>(0,Li.jsx)(Wi,{onClick:()=>d(e),$filled:e<=s,children:(0,Li.jsx)(h.usP,{})},e)))}),(0,Li.jsx)(Ji,{value:c,onChange:e=>p(e.target.value),placeholder:l("Write your feedback...","\u0623\u0643\u062a\u0628 \u062a\u0639\u0644\u064a\u0642\u0643 \u0647\u0646\u0627..."),rows:3}),(0,Li.jsxs)(Bi,{onClick:async()=>{if(s){m("sending");try{await Xi.A.post("https://77.37.51.25/feedback",{restaurant_id:null===i||void 0===i?void 0:i.id,rating:s,comment:c,restaurant_name:r}),m("success")}catch{m("error")}}},disabled:!s||"sending"===x,children:[(0,Li.jsx)(h.kGk,{}),"sending"===x?l("Sending...","\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0631\u0633\u0627\u0644..."):l("Submit","\u0625\u0631\u0633\u0627\u0644")]})]})})]})]})}const rr=f.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,or=f.Ay.a`
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
`,tr=f.Ay.div`
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
`;function nr(e){var i;let{restaurant:r,activeLanguage:o,popupHandler:t,isRtl:n}=e;const a=(e,i)=>n&&i||e,l=null===r||void 0===r||null===(i=r.branches)||void 0===i?void 0:i[0];return(0,Li.jsxs)(Li.Fragment,{children:[(0,Li.jsx)(C,{onClick:()=>t(null)}),(0,Li.jsxs)(Fi,{children:[(0,Li.jsxs)(Di,{children:[(0,Li.jsx)(Si,{$rtl:n,children:a("Contact","\u062a\u0648\u0627\u0635\u0644")}),(0,Li.jsx)(Ti,{onClick:()=>t(null),children:(0,Li.jsx)(h.yGN,{})})]}),(0,Li.jsx)(Ni,{children:(0,Li.jsxs)(rr,{children:[(null===l||void 0===l?void 0:l.phone)&&(0,Li.jsxs)(or,{href:`tel:${l.phone}`,children:[(0,Li.jsx)(h.QFc,{}),(0,Li.jsx)("span",{children:l.phone})]}),(null===l||void 0===l?void 0:l.whatsapp_number)&&(0,Li.jsxs)(Bi,{as:"a",href:`https://wa.me/${l.whatsapp_number}`,target:"_blank",rel:"noopener noreferrer",$variant:"whatsapp",children:[(0,Li.jsx)(h.X6_,{}),a("WhatsApp","\u0648\u0627\u062a\u0633\u0627\u0628")]}),(null===l||void 0===l?void 0:l.email)&&(0,Li.jsxs)(or,{href:`mailto:${l.email}`,children:[(0,Li.jsx)(h.pHD,{}),(0,Li.jsx)("span",{children:l.email})]}),(null===l||void 0===l?void 0:l.address)&&(0,Li.jsxs)(tr,{children:[(0,Li.jsx)(h.HzC,{}),(0,Li.jsx)("span",{children:l.address})]})]})})]})]})}const ar=f.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`,lr=f.Ay.div`
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
`,sr=f.Ay.button`
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
`,dr=f.Ay.span`
  font-size: 0.6875rem;
  color: ${e=>e.theme.mainColor||"#9E7C0C"};
  font-weight: 600;
  text-align: center;
  display: block;
  margin-bottom: 12px;
`;function cr(e){let{restaurant:i,popupHandler:r,isRtl:t}=e;const n=(e,i)=>t&&i||e,[a,l]=(0,o.useState)(!1),s=window.location.href;return(0,Li.jsxs)(Li.Fragment,{children:[(0,Li.jsx)(C,{onClick:()=>r(null)}),(0,Li.jsxs)(Fi,{children:[(0,Li.jsxs)(Di,{children:[(0,Li.jsx)(Si,{$rtl:t,children:n("Share","\u0645\u0634\u0627\u0631\u0643\u0629")}),(0,Li.jsx)(Ti,{onClick:()=>r(null),children:(0,Li.jsx)(h.yGN,{})})]}),(0,Li.jsxs)(Ni,{children:[(0,Li.jsxs)(ar,{children:[(0,Li.jsx)(lr,{children:s}),(0,Li.jsx)(sr,{onClick:async()=>{try{await navigator.clipboard.writeText(s),l(!0),setTimeout((()=>l(!1)),2e3)}catch{}},children:a?(0,Li.jsx)(h.YrT,{}):(0,Li.jsx)(h.nxz,{})})]}),a&&(0,Li.jsx)(dr,{children:n("Copied!","\u062a\u0645 \u0627\u0644\u0646\u0633\u062e!")}),navigator.share&&(0,Li.jsxs)(Bi,{onClick:()=>{navigator.share&&navigator.share({title:null===i||void 0===i?void 0:i.name,url:s})},children:[(0,Li.jsx)(h.Pum,{}),n("Share","\u0645\u0634\u0627\u0631\u0643\u0629")]})]})]})]})}var pr=r(38495),xr=r(71481);const hr="https://storage.googleapis.com/ecommerce-bucket-testing/",mr="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=DM+Sans:wght@400;500;600;700&family=Literata:opsz,wght@7..72,400;600;700&display=swap";function ur(){var e,i,r,x,m,u,g,f,b,y,v;const[j,J]=(0,t.ok)(),K=j.get("productId"),{restaurantName:Z}=(0,n.g)(),ee=window.location.hostname.split(".")[0],ie="menugic"!==ee&&"localhost"!==ee&&"www"!==ee?ee:Z,re=(0,a.d4)((e=>{var i;return null===(i=e.restaurant)||void 0===i?void 0:i[ie]})),oe=(0,a.d4)((e=>{var i,r;return(null===(i=e.restaurant)||void 0===i||null===(r=i[ie])||void 0===r?void 0:r.activeLanguage)||"en"})),te=(0,a.wA)(),ne=(0,a.d4)((e=>e.cart[ie]||[])),ae=ne.reduce(((e,i)=>e+i.quantity),0),le="ar"===oe,He=(0,o.useMemo)((()=>JSON.parse((null===re||void 0===re?void 0:re.features)||"{}")),[null===re||void 0===re?void 0:re.features]),Ie=(0,o.useMemo)((()=>[...(null===re||void 0===re?void 0:re.categories)||[]].sort(((e,i)=>(i.priority||0)-(e.priority||0)||(e.id||0)-(i.id||0)))),[null===re||void 0===re?void 0:re.categories]),Pe=(null===re||void 0===re||null===(e=re.branches)||void 0===e||null===(i=e[0])||void 0===i?void 0:i.currency_symbol)||"$",Re=(0,o.useMemo)((()=>{try{return JSON.parse((null===re||void 0===re?void 0:re.social_media)||"{}")}catch{return{}}}),[null===re||void 0===re?void 0:re.social_media]),Ge=null!==re&&void 0!==re&&re.logoURL?`${hr}${re.logoURL}`:null,[Me,Ye]=(0,o.useState)(null),[Oe,Ve]=(0,o.useState)(null),[Ue,Xe]=(0,o.useState)(!1),[Qe,We]=(0,o.useState)(!1),[Je,Ke]=(0,o.useState)(""),[Ze,ei]=(0,o.useState)(""),ii=(0,o.useRef)(!1),ri=(0,o.useRef)(null),oi=(0,o.useRef)(null),ti=(0,o.useCallback)((function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en_name",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ar_name";return le&&null!==e&&void 0!==e&&e[r]?e[r]:(null===e||void 0===e?void 0:e[i])||""}),[le]),ni=(0,o.useCallback)((e=>le&&null!==e&&void 0!==e&&e.ar_category?e.ar_category:(null===e||void 0===e?void 0:e.en_category)||""),[le]),ai=(0,o.useCallback)((e=>le&&null!==e&&void 0!==e&&e.ar_description?e.ar_description:(null===e||void 0===e?void 0:e.en_description)||(null===e||void 0===e?void 0:e.description)||""),[le]),li=(0,o.useCallback)(((e,i)=>le&&i||e),[le]);(0,o.useEffect)((()=>{if(!document.querySelector(`link[href="${mr}"]`)){const e=document.createElement("link");e.rel="stylesheet",e.href=mr,document.head.appendChild(e)}}),[]),(0,o.useEffect)((()=>(document.documentElement.setAttribute("dir",le?"rtl":"ltr"),()=>document.documentElement.removeAttribute("dir"))),[le]),(0,o.useEffect)((()=>{if(null!==re&&void 0!==re&&re.id){var e,i;const r=(null===re||void 0===re||null===(e=re.branches)||void 0===e||null===(i=e[0])||void 0===i?void 0:i.id)||null;(0,d.trackVisit)(re.id,r),(0,d.trackPageView)(re.id,r)}}),[null===re||void 0===re?void 0:re.id]),(0,o.useEffect)((()=>{const e=()=>Xe(window.scrollY>10);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[]),(0,o.useEffect)((()=>{const e=document.querySelectorAll("[data-section]");if(!e.length)return;const i=new IntersectionObserver((e=>{if(!ii.current)for(const r of e)if(r.isIntersecting){var i;const e=Number(r.target.dataset.section);Ve(e);const o=null===(i=ri.current)||void 0===i?void 0:i.querySelector(`[data-cat="${e}"]`);null===o||void 0===o||o.scrollIntoView({inline:"center",behavior:"smooth",block:"nearest"});break}}),{rootMargin:"-100px 0px -60% 0px",threshold:0});return e.forEach((e=>i.observe(e))),()=>i.disconnect()}),[Ie]),(0,o.useEffect)((()=>{Ie.length&&!Oe&&Ve(Ie[0].id)}),[Ie]);const si=(0,o.useCallback)((e=>{document.body.style.overflow=null==e?"auto":"hidden",Ye(e)}),[]),di=(0,o.useCallback)((e=>{te((0,l.y)({name:ie,activeLanguage:e}))}),[te,ie]),ci=(0,o.useCallback)((e=>{const i=new URLSearchParams(j);i.set("productId",e),J(i)}),[j,J]),pi=(0,o.useCallback)((()=>{const e=new URLSearchParams(j);e.delete("productId"),J(e)}),[j,J]),xi=(0,o.useMemo)((()=>{if(!K)return null;for(const i of Ie){var e;const r=null===(e=i.products)||void 0===e?void 0:e.find((e=>String(e.id)===String(K)));if(r)return r}return null}),[K,Ie]),hi=(0,o.useCallback)((e=>{Ve(e),ii.current=!0;const i=document.getElementById(`section-${e}`);if(i){const e=i.getBoundingClientRect().top+window.scrollY-110;window.scrollTo({top:e,behavior:"smooth"})}setTimeout((()=>{ii.current=!1}),800)}),[]),mi=(0,o.useMemo)((()=>{const e=[];for(const i of Ie)for(const r of i.products||[])r.is_deleted||e.push({...r,_catName:ni(i)});return e}),[Ie,ni]),ui=(0,o.useMemo)((()=>{const e=(Qe?Je:Ze).trim().toLowerCase();return e?mi.filter((i=>((i.en_name||"").toLowerCase()+" "+(i.ar_name||"").toLowerCase()).includes(e))).slice(0,20):[]}),[Qe,Je,Ze,mi]),gi=(0,o.useCallback)(((e,i)=>{e.stopPropagation(),te((0,s.bE)(ie,i,1,{},Number(i.price)||0,"",void 0))}),[te,ie]),fi=(0,o.useMemo)((()=>((null===re||void 0===re?void 0:re.languages)||"en").split("&")),[null===re||void 0===re?void 0:re.languages]);return re?(0,Li.jsxs)(w,{$rtl:le,children:[(0,Li.jsx)(k,{$scrolled:Ue,children:(0,Li.jsxs)(A,{children:[(0,Li.jsx)($,{children:Ge?(0,Li.jsx)("img",{src:Ge,alt:""}):(0,Li.jsx)("span",{children:(re.name||"M")[0]})}),(0,Li.jsx)(E,{$rtl:le,children:le&&re.ar_name?re.ar_name:re.name}),(0,Li.jsx)(_,{children:(0,Li.jsx)("input",{value:Ze,onChange:e=>ei(e.target.value),placeholder:li("Search menu...","\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629...")})}),(0,Li.jsxs)(z,{children:[(0,Li.jsx)(F,{className:"mobile-only",onClick:()=>{We(!0),Ke("")},children:(0,Li.jsx)(h.CKj,{})}),fi.length>1&&(0,Li.jsx)(D,{onClick:()=>di(le?"en":"ar"),children:le?"EN":"\u0639"}),(null===He||void 0===He?void 0:He.cart)&&(0,Li.jsxs)(F,{onClick:()=>si("cart"),children:[(0,Li.jsx)(h.iHs,{}),ae>0&&(0,Li.jsx)(S,{children:ae})]})]})]})}),(0,Li.jsxs)(T,{children:[(0,Li.jsx)(N,{children:Ge?(0,Li.jsx)("img",{src:Ge,alt:""}):(0,Li.jsx)("span",{children:(re.name||"M")[0]})}),(0,Li.jsx)(B,{$rtl:le,children:le&&re.ar_name?re.ar_name:re.name}),(0,Li.jsx)(L,{children:le&&re.ar_slogan?re.ar_slogan:re.en_slogan||""}),(0,Li.jsx)(q,{children:(null===(r=re.branches)||void 0===r?void 0:r[0])&&(0,Li.jsxs)(Li.Fragment,{children:[(0,Li.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,Li.jsx)(h.HzC,{})," ",le&&re.branches[0].ar_name?re.branches[0].ar_name:re.branches[0].name||re.branches[0].address||""]}),re.branches[0].phone&&(0,Li.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,Li.jsx)(h.QFc,{})," ",re.branches[0].phone]})]})}),(0,Li.jsxs)(H,{children:[(null===(x=re.branches)||void 0===x?void 0:x.length)>0&&(0,Li.jsxs)(I,{onClick:()=>si("location"),children:[(0,Li.jsx)(h.HzC,{})," ",li("Branches","\u0627\u0644\u0641\u0631\u0648\u0639")]}),(0,Li.jsxs)(I,{onClick:()=>si("contact"),children:[(0,Li.jsx)(h.S8s,{})," ",li("Info","\u0645\u0639\u0644\u0648\u0645\u0627\u062a")]}),(0,Li.jsxs)(I,{onClick:()=>si("share"),children:[(0,Li.jsx)(h.Pum,{})," ",li("Share","\u0645\u0634\u0627\u0631\u0643\u0629")]})]})]}),(0,Li.jsx)(P,{children:(0,Li.jsx)(R,{ref:ri,children:Ie.map((e=>(0,Li.jsx)(G,{"data-cat":e.id,$active:Oe===e.id,onClick:()=>hi(e.id),children:ni(e)},e.id)))})}),(0,Li.jsxs)(M,{children:[(0,Li.jsx)(Y,{children:Ie.map((e=>{const i=(e.products||[]).filter((e=>!e.is_deleted)).length;return(0,Li.jsxs)(O,{$active:Oe===e.id,onClick:()=>hi(e.id),children:[(0,Li.jsx)("span",{children:ni(e)}),(0,Li.jsx)(V,{children:i})]},e.id)}))}),(0,Li.jsxs)(U,{style:{paddingBottom:ae>0?80:24},children:[Ze.trim()&&ui.length>0&&(0,Li.jsxs)("div",{style:{marginBottom:24},children:[(0,Li.jsx)(Q,{$rtl:le,children:li("Search Results","\u0646\u062a\u0627\u0626\u062c \u0627\u0644\u0628\u062d\u062b")}),(0,Li.jsx)(W,{children:ui.map((e=>(0,Li.jsx)(gr,{product:e,getName:ti,getDesc:ai,currencySymbol:Pe,openProduct:ci,quickAdd:gi,features:He,isRtl:le,loc:li},e.id)))})]}),!Ze.trim()&&Ie.map((e=>{const i=(e.products||[]).filter((e=>!e.is_deleted&&1!==e.is_deleted)).sort(((e,i)=>(i.priority||0)-(e.priority||0)));return i.length?(0,Li.jsxs)(X,{id:`section-${e.id}`,"data-section":e.id,children:[(0,Li.jsx)(Q,{$rtl:le,children:ni(e)}),(0,Li.jsx)(W,{children:i.map((e=>(0,Li.jsx)(gr,{product:e,getName:ti,getDesc:ai,currencySymbol:Pe,openProduct:ci,quickAdd:gi,features:He,isRtl:le,loc:li},e.id)))})]},e.id):null}))]})]}),(0,Li.jsx)(se,{children:(0,Li.jsxs)(de,{children:[(0,Li.jsxs)(ce,{children:[(0,Li.jsxs)("div",{children:[(0,Li.jsx)(xe,{$rtl:le,children:le&&re.ar_name?re.ar_name:re.name}),(0,Li.jsx)(he,{children:le&&re.ar_description?re.ar_description:re.en_description||""}),(0,Li.jsxs)(ue,{children:[Re.instagram&&(0,Li.jsx)("a",{href:Re.instagram,target:"_blank",rel:"noopener noreferrer",children:(0,Li.jsx)(xr.ao$,{})}),Re.facebook&&(0,Li.jsx)("a",{href:Re.facebook,target:"_blank",rel:"noopener noreferrer",children:(0,Li.jsx)(xr.iYk,{})}),Re.tiktok&&(0,Li.jsx)("a",{href:Re.tiktok,target:"_blank",rel:"noopener noreferrer",children:(0,Li.jsx)(xr.kkU,{})})]})]}),(0,Li.jsxs)("div",{children:[(0,Li.jsx)(pe,{children:li("Contact","\u062a\u0648\u0627\u0635\u0644")}),(null===(m=re.branches)||void 0===m||null===(u=m[0])||void 0===u?void 0:u.phone)&&(0,Li.jsx)(me,{href:`tel:${re.branches[0].phone}`,children:re.branches[0].phone}),(null===(g=re.branches)||void 0===g||null===(f=g[0])||void 0===f?void 0:f.email)&&(0,Li.jsx)(me,{href:`mailto:${re.branches[0].email}`,children:re.branches[0].email}),(null===(b=re.branches)||void 0===b||null===(y=b[0])||void 0===y?void 0:y.address)&&(0,Li.jsx)(he,{children:re.branches[0].address})]}),(null===(v=re.workingHours)||void 0===v?void 0:v.length)>0&&(0,Li.jsxs)("div",{children:[(0,Li.jsx)(pe,{children:li("Hours","\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644")}),re.workingHours.map(((e,i)=>(0,Li.jsxs)(he,{children:[le&&e.ar_day?e.ar_day:e.en_day,": ",e.opening_time," - ",e.closing_time]},i)))]}),(0,Li.jsxs)("div",{children:[(0,Li.jsx)(pe,{children:li("Legal","\u0642\u0627\u0646\u0648\u0646\u064a")}),(0,Li.jsx)(he,{children:li("Privacy Policy","\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629")}),(0,Li.jsx)(he,{children:li("Terms of Service","\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629")})]})]}),(0,Li.jsxs)(ge,{children:[(0,Li.jsxs)("span",{children:["\xa9 ",(new Date).getFullYear()," ",re.name]}),(0,Li.jsxs)("span",{children:["Powered by ",(0,Li.jsx)("a",{href:"https://menugic.com",target:"_blank",rel:"noopener noreferrer",children:"Menugic"})]})]})]})}),(0,Li.jsxs)(fe,{children:[(0,Li.jsxs)(be,{$active:!1,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[(0,Li.jsx)(h.V5Y,{}),(0,Li.jsx)("span",{children:li("Home","\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629")})]}),(0,Li.jsxs)(be,{$active:!1,onClick:()=>{const e=document.querySelector("[data-section]");if(e){const i=e.getBoundingClientRect().top+window.scrollY-110;window.scrollTo({top:i,behavior:"smooth"})}},children:[(0,Li.jsx)(h.QPV,{}),(0,Li.jsx)("span",{children:li("Menu","\u0627\u0644\u0642\u0627\u0626\u0645\u0629")})]}),(0,Li.jsxs)(be,{$active:!1,onClick:()=>{We(!0),Ke("")},children:[(0,Li.jsx)(h.CKj,{}),(0,Li.jsx)("span",{children:li("Search","\u0628\u062d\u062b")})]}),(null===He||void 0===He?void 0:He.cart)&&(0,Li.jsxs)(be,{$active:!1,onClick:()=>si("cart"),children:[(0,Li.jsx)(h.iHs,{}),ae>0&&(0,Li.jsx)(ye,{children:ae}),(0,Li.jsx)("span",{children:li("Cart","\u0627\u0644\u0633\u0644\u0629")})]}),(0,Li.jsxs)(be,{$active:!1,onClick:()=>si("more"),children:[(0,Li.jsx)(h.$Ri,{}),(0,Li.jsx)("span",{children:li("More","\u0627\u0644\u0645\u0632\u064a\u062f")})]})]}),(null===He||void 0===He?void 0:He.cart)&&ae>0&&(0,Li.jsx)(ve,{children:(0,Li.jsxs)(je,{onClick:()=>si("cart"),children:[(0,Li.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,Li.jsx)(we,{children:ae}),(0,Li.jsx)(Ce,{children:li("View Cart","\u0639\u0631\u0636 \u0627\u0644\u0633\u0644\u0629")})]}),(0,Li.jsx)(ke,{children:(0,c.T)(ne.reduce(((e,i)=>e+i.price*i.quantity),0),Pe)})]})}),Qe&&(0,Li.jsxs)(Ae,{children:[(0,Li.jsxs)($e,{children:[(0,Li.jsx)(Ee,{ref:oi,value:Je,onChange:e=>Ke(e.target.value),placeholder:li("Search menu...","\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629..."),autoFocus:!0}),(0,Li.jsx)(_e,{onClick:()=>{We(!1),Ke("")},children:li("Cancel","\u0625\u0644\u063a\u0627\u0621")})]}),(0,Li.jsx)(ze,{children:Je.trim()?ui.length>0?ui.map((e=>(0,Li.jsxs)(Fe,{onClick:()=>{We(!1),Ke(""),ci(e.id)},children:[(0,Li.jsx)(De,{children:e.image_url&&(0,Li.jsx)("img",{src:(0,p.V)(e.image_url),alt:""})}),(0,Li.jsxs)(Se,{children:[(0,Li.jsx)("h4",{children:ti(e)}),(0,Li.jsx)("p",{children:e._catName})]}),(0,Li.jsx)(Te,{children:(0,c.T)(Number(e.price)||0,Pe)})]},e.id))):(0,Li.jsx)(Ne,{children:li("No results found","\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0646\u062a\u0627\u0626\u062c")}):(0,Li.jsx)(Ne,{children:li("Type to search...","\u0627\u0643\u062a\u0628 \u0644\u0644\u0628\u062d\u062b...")})})]}),xi&&(0,Li.jsx)(fr,{product:xi,restaurant:re,restaurantName:ie,activeLanguage:oe,isRtl:le,currencySymbol:Pe,features:He,onClose:pi,getName:ti,getDesc:ai,loc:li,dispatch:te}),"more"===Me&&(0,Li.jsxs)(Li.Fragment,{children:[(0,Li.jsx)(C,{onClick:()=>si(null)}),(0,Li.jsxs)(Be,{children:[(0,Li.jsx)(Le,{}),(0,Li.jsxs)(qe,{onClick:()=>si("contact"),children:[(0,Li.jsx)(h.QFc,{})," ",li("Contact","\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627")]}),(0,Li.jsxs)(qe,{onClick:()=>si("location"),children:[(0,Li.jsx)(h.HzC,{})," ",li("Branches","\u0627\u0644\u0641\u0631\u0648\u0639")]}),(null===He||void 0===He?void 0:He.about_us)&&(0,Li.jsxs)(qe,{onClick:()=>si("about"),children:[(0,Li.jsx)(h.S8s,{})," ",li("About Us","\u0645\u0646 \u0646\u062d\u0646")]}),(null===He||void 0===He?void 0:He.feedback)&&(0,Li.jsxs)(qe,{onClick:()=>si("feedback"),children:[(0,Li.jsx)(h.mEP,{})," ",li("Feedback","\u062a\u0642\u064a\u064a\u0645")]}),(0,Li.jsxs)(qe,{onClick:()=>si("share"),children:[(0,Li.jsx)(h.Pum,{})," ",li("Share","\u0645\u0634\u0627\u0631\u0643\u0629")]})]})]}),Me&&"more"!==Me&&(0,Li.jsx)(C,{onClick:()=>si(null)}),"cart"===Me&&(0,Li.jsx)(Ii,{restaurant:re,restaurantName:ie,activeLanguage:oe,currencySymbol:Pe,features:He,cart:ne,popupHandler:si,isRtl:le}),"location"===Me&&(0,Li.jsx)(Ui,{restaurant:re,activeLanguage:oe,popupHandler:si,isRtl:le}),"feedback"===Me&&(0,Li.jsx)(ir,{restaurant:re,restaurantName:ie,activeLanguage:oe,popupHandler:si,isRtl:le}),"contact"===Me&&(0,Li.jsx)(nr,{restaurant:re,activeLanguage:oe,popupHandler:si,isRtl:le}),"share"===Me&&(0,Li.jsx)(cr,{restaurant:re,popupHandler:si,isRtl:le}),"about"===Me&&(0,Li.jsx)(pr.A,{restaurant:re,showPopup:Me,popupHandler:si})]}):null}function gr(e){var i,r;let{product:o,getName:t,getDesc:n,currencySymbol:a,openProduct:l,quickAdd:s,features:d,isRtl:x,loc:m}=e;const u=t(o),g=n(o),f=o.image_url?(0,p.V)(o.image_url):null,b=Number(o.price)||0,y=Number(o.discount)||0,v=y>0?b*(1-y/100):b,j=!1===o.is_available||0===o.is_available,w=2===(null===(i=o.formSchema)||void 0===i?void 0:i.version)||2===(null===(r=o.form_schema)||void 0===r?void 0:r.version),C=(null===d||void 0===d?void 0:d.cart)&&!j&&!w;return(0,Li.jsxs)(J,{$unavailable:j,onClick:()=>!j&&l(o.id),children:[(0,Li.jsx)(K,{children:f&&(0,Li.jsx)("img",{src:f,alt:u,loading:"lazy"})}),o.is_new&&(0,Li.jsx)(Z,{$type:"new",children:m("New","\u062c\u062f\u064a\u062f")}),y>0&&(0,Li.jsxs)(Z,{$type:"sale",children:["-",y,"%"]}),(0,Li.jsxs)(ee,{children:[(0,Li.jsx)(ie,{children:u}),g&&(0,Li.jsx)(re,{children:g}),(0,Li.jsxs)(oe,{children:[(0,Li.jsxs)("div",{children:[(0,Li.jsx)(te,{children:(0,c.T)(v,a)}),y>0&&(0,Li.jsx)(ne,{children:(0,c.T)(b,a)})]}),j?(0,Li.jsx)(le,{children:m("Sold Out","\u0646\u0641\u0630\u062a \u0627\u0644\u0643\u0645\u064a\u0629")}):null!==d&&void 0!==d&&d.cart?(0,Li.jsx)(ae,{onClick:e=>C?s(e,o):void 0,children:(0,Li.jsx)(h.GGD,{})}):null]})]})]})}function fr(e){var i,r;let{product:t,restaurant:n,restaurantName:a,activeLanguage:l,isRtl:m,currencySymbol:u,features:g,onClose:f,getName:b,getDesc:y,loc:v,dispatch:j}=e;const[w,C]=(0,o.useState)(1),[k,A]=(0,o.useState)(""),[$,E]=(0,o.useState)({}),[_,z]=(0,o.useState)(0),F=b(t),D=y(t),S=t.image_url?(0,p.V)(t.image_url):null,T=Number(t.price)||0,N=Number(t.discount)||0,B=N>0?T*(1-N/100):T,L=B+_,q=L*w,H=2===(null===(i=t.formSchema)||void 0===i?void 0:i.version)||2===(null===(r=t.form_schema)||void 0===r?void 0:r.version),I=t.formSchema||t.form_schema;(0,o.useEffect)((()=>{if(null!==n&&void 0!==n&&n.id&&null!==t&&void 0!==t&&t.id){var e,i,r;const o=(null===n||void 0===n||null===(e=n.branches)||void 0===e||null===(i=e[0])||void 0===i?void 0:i.id)||null;(0,d.trackItemView)(n.id,t.id,t.category_id,o,{name:F,price:T,category:(null===(r=t.category)||void 0===r?void 0:r.en_category)||""})}}),[null===t||void 0===t?void 0:t.id]);return(0,Li.jsx)(He,{onClick:f,children:(0,Li.jsxs)(Ie,{onClick:e=>e.stopPropagation(),children:[(0,Li.jsx)(Pe,{onClick:f,children:(0,Li.jsx)(h.yGN,{})}),(0,Li.jsxs)(Re,{children:[S?(0,Li.jsx)(Ge,{children:(0,Li.jsx)("img",{src:S,alt:F})}):(0,Li.jsx)(Me,{children:"\ud83c\udf7d\ufe0f"}),(0,Li.jsxs)(Ye,{children:[(0,Li.jsx)(Oe,{$rtl:m,children:F}),D&&(0,Li.jsx)(Ve,{children:D}),(0,Li.jsxs)(Ue,{children:[(0,Li.jsx)(Xe,{children:(0,c.T)(B,u)}),N>0&&(0,Li.jsx)(Qe,{children:(0,c.T)(T,u)}),N>0&&(0,Li.jsxs)(We,{children:["-",N,"%"]})]}),H&&I&&(0,Li.jsx)(Je,{children:(0,Li.jsx)(x.A,{formSchema:I,formData:$,setFormData:E,setOptionsPrice:z,currencySymbol:u,activeLanguage:l})}),(0,Li.jsx)(Ke,{children:v("Special Instructions","\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u062e\u0627\u0635\u0629")}),(0,Li.jsx)(Ze,{value:k,onChange:e=>A(e.target.value),placeholder:v("Add your notes here...","\u0623\u0636\u0641 \u0645\u0644\u0627\u062d\u0638\u0627\u062a\u0643 \u0647\u0646\u0627..."),rows:2})]})]}),(null===g||void 0===g?void 0:g.cart)&&(0,Li.jsxs)(ei,{children:[(0,Li.jsxs)(ii,{children:[(0,Li.jsx)("button",{onClick:()=>C(Math.max(1,w-1)),children:(0,Li.jsx)(h.QLg,{})}),(0,Li.jsx)("span",{children:w}),(0,Li.jsx)("button",{onClick:()=>C(w+1),children:(0,Li.jsx)(h.GGD,{})})]}),(0,Li.jsxs)(ri,{onClick:()=>{if(null!==n&&void 0!==n&&n.id&&null!==t&&void 0!==t&&t.id){var e,i;const r=(null===n||void 0===n||null===(e=n.branches)||void 0===e||null===(i=e[0])||void 0===i?void 0:i.id)||null;(0,d.trackAddToCart)(n.id,t.id,t.category_id,w,r,{name:F,price:L})}j((0,s.bE)(a,t,w,$,L,k,void 0)),f()},children:[v("Add to Cart","\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629")," \u2014 ",(0,c.T)(q,u)]})]})]})})}}}]);
//# sourceMappingURL=532.a9ae54af.chunk.js.map