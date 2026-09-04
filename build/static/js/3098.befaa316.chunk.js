/*! For license information please see 3098.befaa316.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkrestaurant_menu=self.webpackChunkrestaurant_menu||[]).push([[3098],{32532:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Ki});var r=i(82483),o=i(99891),n=i(93376),a=i(91965),s=i(17123),l=i(86001),d=i(81926),c=i(18907),p=i(58821),h=i(42770),x=i(5633),u=i(45745),m=i(29334),g=i(50074),f=i(67059),b=i(41190);const y=b.i7`from{opacity:0}to{opacity:1}`,v=b.i7`from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}`,j=b.i7`from{transform:translateX(100%)}to{transform:translateX(0)}`,w=b.i7`from{transform:translateX(-100%)}to{transform:translateX(0)}`,C=(b.i7`from{background-position:200% 0}to{background-position:-200% 0}`,b.i7`from{transform:translateY(12px);opacity:0}to{transform:translateY(0);opacity:1}`),k=(b.i7`0%{transform:scale(1)}50%{transform:scale(1.15)}100%{transform:scale(1)}`,b.Ay.div`
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
`),A=b.Ay.div`
  position: fixed; inset: 0; z-index: 100;
  background: rgba(0,0,0,0.45);
  animation: ${y} 250ms ease;
`,$=b.Ay.header`
  position: sticky; top: 0; z-index: 50;
  height: 56px;
  background: ${e=>e.theme.BoxColor||"#fff"};
  border-bottom: 1px solid #E5E2DB;
  transition: box-shadow 250ms;
  ${e=>e.$scrolled&&b.AH`box-shadow: 0 4px 16px rgba(0,0,0,0.07);`}
  @media(min-width:1024px){ height: 64px; }
`,E=b.Ay.div`
  max-width: 1200px; margin: 0 auto; height: 100%;
  display: flex; align-items: center; gap: 12px;
  padding: 0 16px;
  @media(min-width:640px){ padding: 0 24px; }
  @media(min-width:1280px){ padding: 0 32px; }
`,_=b.Ay.div`
  width: 34px; height: 34px; border-radius: 8px; overflow: hidden; flex-shrink: 0;
  background: ${e=>e.theme.categoryActive||"#F7F1DC"};
  display: flex; align-items: center; justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; }
  span { font-family: 'Literata', Georgia, serif; font-weight: 700; font-size: 0.875rem; color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,z=b.Ay.span`
  font-family: 'Literata', Georgia, serif;
  font-weight: 700; font-size: 1rem; color: ${e=>e.theme.textColor||"#1A1816"}; white-space: nowrap;
  ${e=>e.$rtl&&b.AH`font-family: 'Almarai', 'Segoe UI', sans-serif;`}
  @media(min-width:1024px){ font-size: 1.125rem; }
`,F=b.Ay.div`
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
`,D=b.Ay.div`
  display: flex; align-items: center; gap: 6px; margin-inline-start: auto;
  @media(min-width:768px){ margin-inline-start: 12px; }
`,S=b.Ay.button`
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
`,B=b.Ay.button`
  height: 32px; padding: 0 10px; border-radius: 6px; border: 1px solid #E5E2DB;
  background: transparent; color: #5C5752; font-size: 0.75rem; font-weight: 700;
  letter-spacing: 0.02em; cursor: pointer; transition: all 150ms;
  &:hover { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; color: ${e=>e.theme.textColor||"#1A1816"}; }
`,T=b.Ay.span`
  position: absolute; top: 2px; inset-inline-end: 2px;
  min-width: 16px; height: 16px; border-radius: 999px; padding: 0 4px;
  background: ${e=>e.theme.mainColor||"#9E7C0C"}; color: #fff;
  font-size: 9px; font-weight: 700; display: flex; align-items: center; justify-content: center;
  line-height: 1;
`,L=b.Ay.section`
  padding: 20px 16px 16px;
  max-width: 1200px; margin: 0 auto;
  display: flex; gap: 16px; align-items: flex-start;
  @media(min-width:640px){ padding: 24px 24px 20px; }
`,N=b.Ay.div`
  flex: 1; min-width: 0;
`,R=b.Ay.div`
  width: 64px; height: 64px; border-radius: 10px; overflow: hidden; flex-shrink: 0;
  background: ${e=>e.theme.categoryActive||"#F7F1DC"};
  display: flex; align-items: center; justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; }
  span { font-family: 'Literata', Georgia, serif; font-weight: 700; font-size: 1.5rem;
    color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
  @media(min-width:1024px){ width: 72px; height: 72px; }
`,M=b.Ay.h1`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1.375rem; margin: 0 0 4px;
  color: ${e=>e.theme.textColor||"#1A1816"};
  @media(min-width:1024px){ font-size: 1.625rem; }
`,I=b.Ay.p`
  font-size: 0.75rem; color: #5C5752; margin: 0 0 12px;
`,O=b.Ay.div`
  display: flex; align-items: center; gap: 8px 16px; flex-wrap: wrap;
  font-size: 0.6875rem; color: #5C5752; margin-bottom: 12px;
  svg { width: 14px; height: 14px; }
`,H=(b.Ay.span`
  width: 6px; height: 6px; border-radius: 50%;
  background: ${e=>e.$open?"#1B7A3A":"#B5342A"};
`,b.Ay.div`
  display: flex; gap: 8px; flex-wrap: wrap;
`),P=b.Ay.button`
  display: flex; align-items: center; gap: 6px;
  height: 36px; padding: 0 16px; border-radius: 999px;
  border: 1px solid #E5E2DB; background: ${e=>e.theme.BoxColor||"#fff"}; cursor: pointer;
  font-size: 0.6875rem; font-weight: 600; color: ${e=>e.theme.textColor||"#1A1816"};
  transition: border-color 150ms, background 150ms;
  svg { width: 14px; height: 14px; color: #918C86; }
  &:hover { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,q=b.Ay.nav`
  position: sticky; top: 56px; z-index: 40;
  background: ${e=>e.theme.BoxColor||"#fff"};
  border-bottom: 1px solid #E5E2DB;
  @media(min-width:1024px){ top: 64px; display: none; }
`,G=b.Ay.div`
  overflow-x: auto; -webkit-overflow-scrolling: touch;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
  padding: 0 16px;
  max-width: 1200px; margin: 0 auto;
`,U=b.Ay.div`
  display: flex; gap: 4px; padding: 8px 0;
  width: max-content;
`,Y=b.Ay.button`
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
`,V=b.Ay.div`
  max-width: 1200px; margin: 0 auto;
  display: flex; gap: 24px;
  padding: 16px 16px 0;
  @media(min-width:640px){ padding: 16px 24px 0; }
  @media(min-width:1280px){ padding: 16px 32px 0; }
`,Q=b.Ay.aside`
  display: none;
  @media(min-width:1024px){
    display: block; flex-shrink: 0; width: 200px;
    position: sticky; top: calc(64px + 16px);
    max-height: calc(100vh - 64px - 32px); overflow-y: auto;
    scrollbar-width: none; &::-webkit-scrollbar { display: none; }
  }
`,X=b.Ay.button`
  display: flex; align-items: center; justify-content: space-between;
  width: 100%; padding: 10px 12px; border: none; border-radius: 10px;
  cursor: pointer; text-align: start; font-size: 0.75rem; font-weight: 500;
  transition: all 150ms; background: transparent; font-family: inherit;
  color: ${e=>e.$active?e.theme.categoryActiveText||"#1A1816":e.theme.categoryUnactiveText||"#5C5752"};
  ${e=>e.$active&&b.AH`
    background: ${e.theme.categoryActive||"#F7F1DC"};
    font-weight: 600;
    border-inline-start: 3px solid ${e.theme.mainColor||"#9E7C0C"};
  `}
  &:hover { background: ${e=>e.$active?void 0:"#F4F2ED"}; }
`,K=b.Ay.span`
  font-size: 0.625rem; color: #918C86;
  min-width: 20px; height: 20px; border-radius: 999px;
  background: #F4F2ED; display: flex; align-items: center; justify-content: center;
`,J=b.Ay.div`
  flex: 1; min-width: 0; padding-bottom: 24px;
`,W=b.Ay.section`
  margin-bottom: 32px;
`,Z=b.Ay.h2`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 600; font-size: 1.125rem; margin: 0 0 16px;
  color: ${e=>e.theme.textColor||"#1A1816"};
  @media(min-width:1024px){ font-size: 1.375rem; }
`,ee=b.Ay.div`
  display: grid; gap: 12px;
  grid-template-columns: 1fr;
  @media(min-width:480px){ grid-template-columns: repeat(2, 1fr); }
  @media(min-width:1024px){ grid-template-columns: repeat(3, 1fr); }
  @media(min-width:1280px){ gap: 16px; }
`,te=b.Ay.div`
  position: relative; background: ${e=>e.theme.BoxColor||"#fff"};
  border: 1px solid #F0EDE7; border-radius: 10px; overflow: hidden;
  cursor: pointer; transition: border-color 250ms;
  display: flex; flex-direction: row;
  ${e=>e.$unavailable&&b.AH`opacity: 0.5; pointer-events: none;`}
  @media(min-width:480px){ flex-direction: column; }
  &:hover { border-color: #E5E2DB; }
  &::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0;
    height: 2px; background: ${e=>e.theme.mainColor||"#9E7C0C"};
    opacity: 0; transition: opacity 250ms;
  }
  &:hover::after { opacity: 1; }
`,ie=b.Ay.div`
  width: 110px; height: 110px; flex-shrink: 0; overflow: hidden;
  background: #F4F2ED; position: relative;
  @media(min-width:480px){ width: 100%; height: 0; padding-bottom: 75%; }
  img { width: 100%; height: 100%; object-fit: cover; display: block;
    @media(min-width:480px){ position: absolute; inset: 0; }
  }
`,re=b.Ay.span`
  position: absolute; top: 8px; inset-inline-start: 8px; z-index: 2;
  padding: 2px 8px; border-radius: 999px; font-size: 9px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em;
  background: ${e=>"new"===e.$type?"#E8F5EC":"sale"===e.$type?"#FDE8E6":"best"===e.$type?e.theme.mainColor||"#9E7C0C":"featured"===e.$type?"#1A1816":"#F7F1DC"};
  color: ${e=>"new"===e.$type?"#1B7A3A":"sale"===e.$type?"#B5342A":"best"===e.$type||"featured"===e.$type?"#fff":e.theme.mainColor||"#9E7C0C"};
`,oe=b.Ay.div`
  flex: 1; min-width: 0; padding: 12px;
  display: flex; flex-direction: column;
`,ne=b.Ay.h3`
  font-weight: 600; font-size: 0.75rem; margin: 0 0 4px;
  color: ${e=>e.theme.BoxTextColor||"#1A1816"};
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
`,ae=b.Ay.p`
  font-size: 0.6875rem; line-height: 1.4; color: #918C86; margin: 0 0 auto;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
`,se=b.Ay.div`
  display: flex; align-items: center; justify-content: space-between; margin-top: 8px;
`,le=b.Ay.span`
  font-weight: 700; font-size: 0.75rem;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#9E7C0C"};
`,de=b.Ay.span`
  font-size: 0.625rem; color: #918C86; text-decoration: line-through;
  margin-inline-start: 6px;
`,ce=b.Ay.button`
  width: 30px; height: 30px; border-radius: 999px; border: none; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; display: flex; align-items: center; justify-content: center;
  transition: background 150ms; flex-shrink: 0;
  svg { width: 14px; height: 14px; }
  &:hover { opacity: 0.85; }
  &:active { transform: scale(0.9); }
`,pe=b.Ay.span`
  font-size: 0.625rem; font-weight: 600; color: #B5342A;
`,he=b.Ay.footer`
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: rgba(255,255,255,0.7); padding: 48px 16px 24px;
  margin-bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  @media(min-width:640px){ padding: 48px 24px 24px; }
  @media(min-width:1024px){ margin-bottom: 0; }
`,xe=b.Ay.div`
  max-width: 1200px; margin: 0 auto;
`,ue=b.Ay.div`
  display: grid; gap: 32px;
  grid-template-columns: 1fr;
  @media(min-width:640px){ grid-template-columns: 2fr 1fr 1fr; }
  @media(min-width:1024px){ grid-template-columns: 2fr 1fr 1fr 1fr; }
`,me=b.Ay.h4`
  font-size: 0.6875rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: rgba(255,255,255,0.5); margin: 0 0 16px;
`,ge=b.Ay.div`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-size: 1.375rem; font-weight: 700; color: #fff; margin-bottom: 12px;
`,fe=b.Ay.p`
  font-size: 0.75rem; color: rgba(255,255,255,0.5); margin: 0 0 6px;
  line-height: 1.5;
`,be=b.Ay.a`
  display: block; font-size: 0.75rem; color: rgba(255,255,255,0.5);
  text-decoration: none; margin-bottom: 8px; transition: color 150ms;
  &:hover { color: rgba(255,255,255,0.9); }
`,ye=b.Ay.div`
  display: flex; gap: 8px; margin-top: 16px;
  a {
    width: 36px; height: 36px; border-radius: 999px; display: flex;
    align-items: center; justify-content: center;
    border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.5);
    text-decoration: none; transition: all 150ms;
    svg { width: 16px; height: 16px; }
    &:hover { background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.3); }
  }
`,ve=b.Ay.div`
  border-top: 1px solid rgba(255,255,255,0.1); margin-top: 32px; padding-top: 16px;
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px;
  font-size: 0.6875rem; color: rgba(255,255,255,0.3);
  a { color: rgba(255,255,255,0.4); text-decoration: none; &:hover { color: rgba(255,255,255,0.7); } }
`,je=b.Ay.nav`
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 90;
  height: calc(56px + env(safe-area-inset-bottom, 0px));
  padding-bottom: env(safe-area-inset-bottom, 0px);
  background: ${e=>e.theme.bottomTabBarBackgroundColor||"#fff"};
  border-top: 1px solid #F0EDE7;
  display: flex; align-items: center; justify-content: space-around;
  @media(min-width:1024px){ display: none; }
`,we=b.Ay.button`
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  border: none; background: none; cursor: pointer; position: relative;
  padding: 6px 0; min-width: 48px; font-family: inherit;
  color: ${e=>e.$active?e.theme.textColor||"#1A1816":"#918C86"};
  font-size: 10px; font-weight: ${e=>e.$active?600:500};
  transition: color 150ms;
  svg { width: 20px; height: 20px; }
`,Ce=b.Ay.span`
  position: absolute; top: 0; inset-inline-end: 2px;
  min-width: 14px; height: 14px; border-radius: 999px; padding: 0 3px;
  background: ${e=>e.theme.mainColor||"#9E7C0C"}; color: #fff;
  font-size: 9px; font-weight: 700; display: flex; align-items: center; justify-content: center;
`,ke=b.Ay.div`
  position: fixed; z-index: 85;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px) + 8px);
  left: 16px; right: 16px;
  @media(min-width:1024px){ display: none !important; }
`,Ae=b.Ay.button`
  width: 100%; height: 52px; border: none; border-radius: 14px; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; display: flex; align-items: center; justify-content: space-between;
  padding: 0 16px 0 12px; animation: ${v} 400ms cubic-bezier(0.16,1,0.3,1);
  font-family: inherit; box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  &:hover { background: #2E2C29; }
`,$e=b.Ay.span`
  display: flex; align-items: center; justify-content: center;
  width: 24px; height: 24px; border-radius: 999px; background: rgba(255,255,255,0.2);
  font-size: 0.6875rem; font-weight: 700; margin-inline-end: 10px;
`,Ee=b.Ay.span`
  font-size: 0.75rem; font-weight: 600;
`,_e=b.Ay.span`
  font-size: 1rem; font-weight: 700;
`,ze=b.Ay.div`
  position: fixed; inset: 0; z-index: 200;
  background: ${e=>e.theme.backgroundColor||"#FAFAF8"};
  animation: ${y} 200ms ease;
  display: flex; flex-direction: column;
  @media(min-width:768px){ display: none; }
`,Fe=b.Ay.div`
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px; border-bottom: 1px solid #F0EDE7;
`,De=b.Ay.input`
  flex: 1; height: 40px; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.searchTextColor||"#1A1816"};
  padding: 0 16px; font-size: 0.875rem; outline: none; font-family: inherit;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,Se=b.Ay.button`
  border: none; background: none; cursor: pointer; font-family: inherit;
  font-size: 0.75rem; font-weight: 600; color: ${e=>e.theme.mainColor||"#9E7C0C"};
`,Be=b.Ay.div`
  flex: 1; overflow-y: auto; padding: 16px;
`,Te=b.Ay.div`
  display: flex; align-items: center; gap: 12px;
  padding: 10px 0; border-bottom: 1px solid #F0EDE7; cursor: pointer;
  &:last-child { border-bottom: none; }
`,Le=b.Ay.div`
  width: 48px; height: 48px; border-radius: 10px; overflow: hidden; flex-shrink: 0;
  background: #F4F2ED;
  img { width: 100%; height: 100%; object-fit: cover; }
`,Ne=b.Ay.div`
  flex: 1; min-width: 0;
  h4 { font-size: 0.75rem; font-weight: 600; margin: 0 0 2px; color: ${e=>e.theme.textColor||"#1A1816"}; }
  p { font-size: 0.6875rem; color: #918C86; margin: 0; }
`,Re=b.Ay.span`
  font-size: 0.75rem; font-weight: 700; flex-shrink: 0;
  color: ${e=>e.theme.mainColor||"#9E7C0C"};
`,Me=b.Ay.div`
  text-align: center; padding: 48px 0; color: #918C86; font-size: 0.75rem;
`,Ie=b.Ay.div`
  position: fixed; inset-inline: 0; bottom: 0; z-index: 110;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  border-radius: 20px 20px 0 0; max-height: 70vh; overflow-y: auto;
  padding: 12px 0 calc(16px + env(safe-area-inset-bottom, 0px));
  animation: ${v} 400ms cubic-bezier(0.16,1,0.3,1);
  box-shadow: 0 -8px 30px rgba(0,0,0,0.1);
  @media(min-width:1024px){ max-width: 480px; margin: 0 auto; }
`,Oe=b.Ay.div`
  width: 36px; height: 4px; border-radius: 999px;
  background: #E5E2DB; margin: 0 auto 16px;
`,He=b.Ay.button`
  display: flex; align-items: center; gap: 14px; width: 100%;
  padding: 14px 24px; border: none; background: none; cursor: pointer;
  font-size: 0.875rem; font-weight: 500; text-align: start; font-family: inherit;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  transition: background 150ms;
  svg { width: 20px; height: 20px; color: #918C86; }
  &:hover { background: #F4F2ED; }
`,Pe=b.Ay.div`
  position: fixed; inset: 0; z-index: 110;
  display: flex; align-items: flex-end; justify-content: center;
  background: rgba(0,0,0,0.45); animation: ${y} 250ms;
  @media(min-width:1024px){ align-items: center; }
`,qe=b.Ay.div`
  position: relative; width: 100%; max-height: 92vh;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  border-radius: 20px 20px 0 0; overflow: hidden;
  display: flex; flex-direction: column;
  animation: ${v} 400ms cubic-bezier(0.16,1,0.3,1);
  @media(min-width:1024px){
    max-width: 560px; max-height: 85vh;
    border-radius: 20px;
  }
`,Ge=b.Ay.button`
  position: absolute; top: 12px; inset-inline-end: 12px; z-index: 5;
  width: 32px; height: 32px; border-radius: 999px;
  background: #fff; border: none; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex; align-items: center; justify-content: center;
  color: #1A1816; transition: background 150ms;
  svg { width: 16px; height: 16px; }
  &:hover { background: #F4F2ED; }
`,Ue=b.Ay.div`
  flex: 1; overflow-y: auto; overscroll-behavior: contain;
`,Ye=b.Ay.div`
  position: relative; width: 100%; height: 280px;
  background: #F4F2ED; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
  @media(min-width:1024px){ height: 320px; }
`,Ve=b.Ay.div`
  width: 100%; padding: 32px 0; text-align: center; background: #F4F2ED;
  font-size: 3rem;
`,Qe=b.Ay.div`
  padding: 20px;
`,Xe=b.Ay.h2`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1.375rem; line-height: 1.25; margin: 0 0 8px;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
`,Ke=b.Ay.div`
  font-size: 0.75rem; color: #5C5752; line-height: 1.6; margin: 0 0 12px;
  p { margin: 0; }
`,Je=b.Ay.div`
  display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
`,We=b.Ay.span`
  font-size: 1.125rem; font-weight: 700;
  color: ${e=>e.theme.mainColor||"#9E7C0C"};
`,Ze=b.Ay.span`
  font-size: 0.875rem; color: #918C86; text-decoration: line-through;
`,et=b.Ay.span`
  font-size: 0.6875rem; font-weight: 600; padding: 2px 8px;
  border-radius: 999px; background: #FDE8E6; color: #B5342A;
`,tt=b.Ay.div`
  border-top: 1px solid #F0EDE7; padding-top: 16px; margin-bottom: 16px;
`,it=b.Ay.label`
  display: block; font-size: 0.6875rem; color: #918C86;
  margin-bottom: 8px; font-weight: 600;
`,rt=b.Ay.textarea`
  width: 100%; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.textColor||"#1A1816"};
  padding: 12px; font-size: 0.75rem; resize: none; outline: none;
  font-family: inherit; box-sizing: border-box;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,ot=b.Ay.div`
  padding: 16px 20px; border-top: 1px solid #F0EDE7;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  display: flex; align-items: center; gap: 12px;
`,nt=b.Ay.div`
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
`,at=b.Ay.button`
  flex: 1; height: 44px; border: none; border-radius: 999px; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; font-size: 0.75rem; font-weight: 600;
  transition: opacity 150ms; font-family: inherit;
  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,st=b.Ay.div`
  position: fixed; inset: 0; z-index: 110;
  display: flex; justify-content: ${e=>e.$rtl?"flex-start":"flex-end"};
  background: rgba(0,0,0,0.45); animation: ${y} 200ms;
`,lt=b.Ay.div`
  width: 100%; max-width: 420px; height: 100%;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  display: flex; flex-direction: column;
  animation: ${e=>e.$rtl?w:j} 400ms cubic-bezier(0.16,1,0.3,1);
  box-shadow: -20px 0 50px rgba(0,0,0,0.15);
`,dt=b.Ay.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 20px; border-bottom: 1px solid #F0EDE7; flex-shrink: 0;
`,ct=b.Ay.h2`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1.125rem;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
`,pt=b.Ay.button`
  width: 32px; height: 32px; border-radius: 999px; border: none; cursor: pointer;
  background: #F4F2ED; color: #5C5752;
  display: flex; align-items: center; justify-content: center;
  transition: background 150ms;
  svg { width: 16px; height: 16px; }
  &:hover { background: #E5E2DB; }
`,ht=b.Ay.div`
  flex: 1; overflow-y: auto; padding: 0 20px;
`,xt=b.Ay.div`
  text-align: center; padding: 48px 0; color: #918C86; font-size: 0.875rem;
`,ut=b.Ay.div`
  display: flex; gap: 12px; padding: 16px 0;
  border-bottom: 1px solid #F0EDE7;
  &:last-child { border-bottom: none; }
`,mt=b.Ay.div`
  width: 56px; height: 56px; border-radius: 10px; overflow: hidden; flex-shrink: 0;
  background: #F4F2ED;
  img { width: 100%; height: 100%; object-fit: cover; }
`,gt=b.Ay.div`
  flex: 1; min-width: 0;
`,ft=b.Ay.h4`
  font-size: 0.75rem; font-weight: 600; margin: 0 0 2px;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
`,bt=b.Ay.span`
  font-size: 0.6875rem; color: ${e=>e.theme.mainColor||"#9E7C0C"};
`,yt=b.Ay.p`
  font-size: 0.625rem; color: #918C86; margin: 4px 0 0; font-style: italic;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,vt=b.Ay.div`
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
`,jt=b.Ay.span`
  font-size: 0.75rem; font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  align-self: flex-end;
`,wt=b.Ay.button`
  border: none; background: none; cursor: pointer; padding: 0; flex-shrink: 0;
  color: #918C86; transition: color 150ms;
  svg { width: 14px; height: 14px; }
  &:hover { color: #B5342A; }
`,Ct=b.Ay.div`
  padding: 16px 20px; border-top: 1px solid #F0EDE7; flex-shrink: 0;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
`,kt=b.Ay.div`
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;
  span:first-child { font-size: 0.75rem; color: #5C5752; }
  span:last-child { font-size: 1.125rem; font-weight: 700; color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,At=b.Ay.button`
  width: 100%; height: 48px; border: none; border-radius: 999px; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; font-size: 0.875rem; font-weight: 700; font-family: inherit;
  transition: opacity 150ms;
  &:hover { opacity: 0.9; }
`,$t=b.Ay.label`
  display: block; font-size: 0.6875rem; font-weight: 600; color: #918C86;
  margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.04em;
`,Et=b.Ay.input`
  width: 100%; height: 44px; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  padding: 0 16px; font-size: 0.75rem; outline: none; font-family: inherit;
  margin-bottom: 12px; box-sizing: border-box;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,_t=b.Ay.textarea`
  width: 100%; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${e=>e.theme.searchbackground||"#F4F2ED"};
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  padding: 12px 16px; font-size: 0.75rem; outline: none; resize: none; font-family: inherit;
  margin-bottom: 12px; box-sizing: border-box;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,zt=b.Ay.div`
  display: flex; gap: 8px; margin-bottom: 16px;
`,Ft=b.Ay.button`
  flex: 1; height: 40px; border-radius: 10px; border: 1px solid;
  font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 150ms; font-family: inherit;
  background: ${e=>e.$active?e.theme.mainColor||"#9E7C0C":e.theme.popupbackgroundColor||"#fff"};
  color: ${e=>e.$active?"#fff":"#5C5752"};
  border-color: ${e=>e.$active?e.theme.mainColor||"#9E7C0C":"#E5E2DB"};
  &:hover { border-color: ${e=>e.theme.mainColor||"#9E7C0C"}; }
`,Dt=b.Ay.div`
  display: flex; gap: 8px;
`,St=b.Ay.button`
  height: 48px; padding: 0 20px; border-radius: 10px;
  border: 1px solid #E5E2DB; background: ${e=>e.theme.popupbackgroundColor||"#fff"}; cursor: pointer;
  font-size: 0.75rem; font-weight: 600; color: #5C5752; font-family: inherit;
  transition: border-color 150ms;
  &:hover { border-color: #918C86; }
`,Bt=b.Ay.button`
  flex: 1; height: 48px; border: none; border-radius: 10px; cursor: pointer;
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; font-size: 0.875rem; font-weight: 700; font-family: inherit;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  transition: opacity 150ms;
  svg { width: 18px; height: 18px; }
  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,Tt=b.Ay.div`
  position: fixed; inset-inline: 0; bottom: 0; z-index: 110;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  border-radius: 20px 20px 0 0; max-height: 80vh; overflow-y: auto;
  padding: 0 0 calc(16px + env(safe-area-inset-bottom, 0px));
  animation: ${v} 400ms cubic-bezier(0.16,1,0.3,1);
  box-shadow: 0 -8px 30px rgba(0,0,0,0.1);
  @media(min-width:1024px){
    max-width: 480px; inset-inline: auto;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    bottom: auto;
    border-radius: 20px; max-height: 85vh;
  }
`,Lt=b.Ay.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 24px 16px; position: sticky; top: 0; z-index: 2;
  background: ${e=>e.theme.popupbackgroundColor||"#fff"};
  border-bottom: 1px solid #F0EDE7;
`,Nt=b.Ay.h3`
  font-family: ${e=>e.$rtl?"'Almarai', sans-serif":"'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1rem;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  margin: 0;
`,Rt=b.Ay.button`
  width: 32px; height: 32px; border-radius: 999px; border: none; cursor: pointer;
  background: #F4F2ED; color: #5C5752;
  display: flex; align-items: center; justify-content: center;
  svg { width: 16px; height: 16px; }
  &:hover { background: #E5E2DB; }
`,Mt=b.Ay.div`
  padding: 20px 24px;
`,It=b.Ay.button`
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
`,Ot=b.Ay.div`
  background: ${e=>e.theme.textColor||"#1A1816"};
  color: #fff; padding: 8px 16px; font-size: 0.75rem; font-weight: 500;
  text-align: center; letter-spacing: 0.01em;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  strong { color: ${e=>e.theme.categoryActive||"#F7F1DC"}; }
`,Ht=b.Ay.button`
  border: none; background: none; color: rgba(255,255,255,0.5); cursor: pointer;
  padding: 0; display: flex; align-items: center;
  svg { width: 14px; height: 14px; }
  &:hover { color: #fff; }
`,Pt=b.Ay.div`
  position: fixed; z-index: 300;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px) + 60px + 16px);
  left: 16px; right: 16px;
  display: flex; flex-direction: column; gap: 8px; pointer-events: none;
  @media(min-width:768px){ left: auto; right: 24px; bottom: 24px; max-width: 360px; }
`,qt=b.Ay.div`
  background: ${e=>"success"===e.$type?"#1B7A3A":"error"===e.$type?"#B5342A":"#1A1816"};
  color: #fff; padding: 12px 16px; border-radius: 10px; font-size: 0.75rem; font-weight: 500;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  animation: ${C} 300ms ease;
  pointer-events: auto;
`,Gt=(b.Ay.img`
  width: 18px; height: 18px; border-radius: 4px; object-fit: cover;
  margin-inline-end: 4px; flex-shrink: 0;
`,b.Ay.img`
  width: 22px; height: 22px; border-radius: 5px; object-fit: cover;
  margin-inline-end: 6px; flex-shrink: 0;
`),Ut=b.Ay.div`
  display: flex; align-items: baseline; gap: 8px; margin-bottom: 16px;
`,Yt=b.Ay.span`
  font-size: 0.6875rem; color: #918C86; font-weight: 500;
`,Vt=b.Ay.div`
  display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
`,Qt=b.Ay.div`
  flex: 0 0 160px; scroll-snap-align: start;
  background: ${e=>e.theme.BoxColor||"#fff"}; border: 1px solid #F0EDE7;
  border-radius: 10px; overflow: hidden; cursor: pointer;
  transition: border-color 250ms;
  &:hover { border-color: #E5E2DB; }
`,Xt=b.Ay.div`
  width: 100%; height: 120px; background: #F4F2ED; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`,Kt=b.Ay.div`
  padding: 8px 10px;
`,Jt=b.Ay.h4`
  font-size: 0.6875rem; font-weight: 600; margin: 0 0 2px;
  color: ${e=>e.theme.BoxTextColor||"#1A1816"};
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,Wt=b.Ay.span`
  font-size: 0.6875rem; font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#9E7C0C"};
`,Zt=b.Ay.section`
  padding: 0 16px 16px;
  max-width: 1200px; margin: 0 auto;
  @media(min-width:640px){ padding: 0 24px 16px; }
`,ei=b.Ay.div`
  display: flex; gap: 12px; overflow-x: auto;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
`,ti=b.Ay.div`
  flex: 0 0 280px; scroll-snap-align: start; border-radius: 14px;
  overflow: hidden; cursor: pointer; transition: transform 250ms;
  &:hover { transform: translateY(-2px); }
  @media(min-width:640px){ flex: 0 0 320px; }
`,ii=b.Ay.div`
  padding: 20px; min-height: 140px; display: flex; flex-direction: column;
  justify-content: flex-end; color: #fff;
  background: ${e=>e.$bg||"linear-gradient(135deg, #1A1816 0%, #3D3A36 100%)"};
  @media(min-width:640px){ min-height: 160px; }
`,ri=b.Ay.span`
  font-size: 9px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.06em; opacity: 0.8; margin-bottom: 6px;
`,oi=b.Ay.h3`
  font-family: 'Literata', Georgia, serif; font-weight: 700;
  font-size: 1.125rem; margin: 0 0 4px; line-height: 1.2;
`,ni=b.Ay.p`
  font-size: 0.6875rem; opacity: 0.7; margin: 0 0 10px;
`,ai=b.Ay.span`
  display: inline-block; padding: 6px 14px; border-radius: 999px;
  background: rgba(255,255,255,0.2); backdrop-filter: blur(4px);
  font-size: 0.6875rem; font-weight: 600; width: fit-content;
`,si=(b.Ay.div`
  display: flex; gap: 12px; overflow-x: auto; padding: 0 16px 20px;
  max-width: 1200px; margin: 0 auto;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`,b.Ay.div`
  padding: 16px 16px 12px;
  max-width: 1200px; margin: 0 auto;
  @media(min-width:640px){ padding: 16px 24px 12px; }
`,b.Ay.div`
  flex: 0 0 160px; scroll-snap-align: start;
  background: ${e=>e.theme.BoxColor||"#fff"}; border: 1px solid #F0EDE7;
  border-radius: 14px; overflow: hidden; cursor: pointer;
  transition: border-color 250ms;
  &:hover { border-color: #E5E2DB; }
`,b.Ay.div`
  width: 100%; height: 120px; background: #F4F2ED; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`,b.Ay.div`
  padding: 8px 10px;
`,b.Ay.h4`
  font-size: 0.6875rem; font-weight: 600; margin: 0 0 2px;
  color: ${e=>e.theme.BoxTextColor||"#1A1816"};
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,b.Ay.span`
  font-size: 0.6875rem; font-weight: 700;
  color: ${e=>e.theme.BoxPriceColor||e.theme.mainColor||"#9E7C0C"};
`,b.Ay.span`
  font-size: 0.5625rem; color: #918C86; font-weight: 500;
  margin-inline-end: 2px;
`),li=b.Ay.span`
  display: block; font-size: 0.5625rem; color: ${e=>e.theme.mainColor||"#9E7C0C"};
  font-weight: 500; margin-top: 2px;
`,di=b.Ay.span`
  display: inline-flex; align-items: center; gap: 4px;
  &::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: ${e=>e.$open?"#1B7A3A":"#B5342A"};
  }
  color: ${e=>e.$open?"#1B7A3A":"#B5342A"};
  font-weight: 600;
`,ci=b.Ay.div`
  margin-top: 20px; border-top: 1px solid #F0EDE7; padding-top: 16px;
`,pi=b.Ay.h4`
  font-size: 0.6875rem; font-weight: 600; color: #918C86;
  text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 12px;
`,hi=b.Ay.div`
  display: flex; gap: 10px; overflow-x: auto;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
`,xi=b.Ay.div`
  flex: 0 0 120px; cursor: pointer;
`,ui=b.Ay.div`
  width: 100%; height: 80px; border-radius: 10px; overflow: hidden;
  background: #F4F2ED; margin-bottom: 6px;
  img { width: 100%; height: 100%; object-fit: cover; }
`,mi=b.Ay.p`
  font-size: 0.625rem; font-weight: 600; margin: 0 0 2px;
  color: ${e=>e.theme.textColor||"#1A1816"};
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,gi=b.Ay.span`
  font-size: 0.625rem; font-weight: 700;
  color: ${e=>e.theme.mainColor||"#9E7C0C"};
`;b.Ay.button`
  position: absolute; inset-inline-end: 12px; top: 50%; transform: translateY(-50%);
  border: none; background: none; cursor: pointer; color: #918C86; padding: 4px;
  display: flex; align-items: center;
  svg { width: 14px; height: 14px; }
  &:hover { color: ${e=>e.theme.textColor||"#1A1816"}; }
`;var fi=i(56723);const bi="https://storage.googleapis.com/ecommerce-bucket-testing/";function yi(e){let{item:t,restaurantName:i,currencySymbol:o,activeLanguage:n,dispatch:a}=e;const s="ar"===n&&t.ar_name?t.ar_name:t.en_name,d=function(e){var t,i;const r=null===(t=e.images)||void 0===t?void 0:t.findIndex((t=>t.id===e.new_cover_id)),o=r>=0?e.images[r]:null===(i=e.images)||void 0===i?void 0:i[0];return null!==o&&void 0!==o&&o.url?`${bi}${o.url}`:null}(t),p=t.price*t.quantity,h=(0,r.useMemo)((()=>(0,g.qh)(t,n)),[t,n]);return(0,fi.jsxs)(ut,{children:[d&&(0,fi.jsx)(mt,{children:(0,fi.jsx)("img",{src:d,alt:s})}),(0,fi.jsxs)(gt,{children:[(0,fi.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:8},children:[(0,fi.jsx)(ft,{children:s}),(0,fi.jsx)(wt,{onClick:()=>a((0,l.dt)(i,t.uniqueId)),children:(0,fi.jsx)(u.IXo,{})})]}),(0,fi.jsx)(bt,{children:(0,c.T)(t.price,o)}),h.length>0&&(0,fi.jsx)("div",{style:{fontSize:"0.625rem",color:"#918C86",marginTop:4},children:h.filter((e=>"line"===e.type)).map(((e,t)=>(0,fi.jsx)("div",{children:e.text},t)))}),t.instruction&&(0,fi.jsx)(yt,{children:t.instruction}),(0,fi.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:8},children:[(0,fi.jsxs)(vt,{children:[(0,fi.jsx)("button",{onClick:()=>{t.quantity<=1?a((0,l.dt)(i,t.uniqueId)):a((0,l.v)(i,t.uniqueId,t.quantity-1))},children:(0,fi.jsx)(u.QLg,{})}),(0,fi.jsx)("span",{children:t.quantity}),(0,fi.jsx)("button",{onClick:()=>a((0,l.v)(i,t.uniqueId,t.quantity+1)),children:(0,fi.jsx)(u.GGD,{})})]}),(0,fi.jsx)(jt,{children:(0,c.T)(p,o)})]})]})]})}function vi(e){var t,i;let{restaurant:o,restaurantName:n,activeLanguage:s,currencySymbol:p,features:h,cart:x,popupHandler:b,isRtl:y}=e;const v=(0,a.wA)(),{handleApiCallAsync:j}=(0,m.h)({onSuccess:()=>{}}),[w,C]=(0,r.useState)("cart"),[k,A]=(0,r.useState)(""),[$,E]=(0,r.useState)(""),[_,z]=(0,r.useState)(""),[F,D]=(0,r.useState)(""),[S,B]=(0,r.useState)(""),[T,L]=(0,r.useState)(""),N=x.reduce(((e,t)=>e+t.price*t.quantity),0),R=(0,r.useMemo)((()=>{const e=[];return null!==h&&void 0!==h&&h.delivery_order&&e.push({key:"Delivery",label:"ar"===s?"\u062a\u0648\u0635\u064a\u0644":"Delivery"}),null!==h&&void 0!==h&&h.takeaway_order&&e.push({key:"TakeAway",label:"ar"===s?"\u0627\u0633\u062a\u0644\u0627\u0645":"Pickup"}),null!==h&&void 0!==h&&h.dinein_order&&e.push({key:"DineIn",label:"ar"===s?"\u0641\u064a \u0627\u0644\u0645\u0637\u0639\u0645":"Dine-in"}),e}),[h,s]);(0,r.useState)((()=>{1===R.length&&A(R[0].key)}));const M=(null===o||void 0===o||null===(t=o.branches)||void 0===t||null===(i=t[0])||void 0===i?void 0:i.whatsapp_number)||"";return(0,fi.jsx)(st,{$rtl:y,onClick:()=>b(null),children:(0,fi.jsxs)(lt,{$rtl:y,onClick:e=>e.stopPropagation(),children:[(0,fi.jsxs)(dt,{children:[(0,fi.jsx)(ct,{$rtl:y,children:"cart"===w?"ar"===s?"\u0627\u0644\u0633\u0644\u0629":"Your Cart":"ar"===s?"\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628":"Checkout"}),(0,fi.jsx)(pt,{onClick:()=>b(null),children:(0,fi.jsx)(u.yGN,{})})]}),(0,fi.jsx)(ht,{children:"cart"===w?(0,fi.jsx)(fi.Fragment,{children:0===x.length?(0,fi.jsx)(xt,{children:"ar"===s?"\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629":"Your cart is empty"}):x.map((e=>(0,fi.jsx)(yi,{item:e,restaurantName:n,currencySymbol:p,activeLanguage:s,dispatch:v},e.uniqueId)))}):(0,fi.jsxs)("div",{style:{padding:"16px 0"},children:[R.length>1&&(0,fi.jsxs)(fi.Fragment,{children:[(0,fi.jsx)($t,{children:"ar"===s?"\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628":"Order Type"}),(0,fi.jsx)(zt,{children:R.map((e=>(0,fi.jsx)(Ft,{$active:k===e.key,onClick:()=>A(e.key),children:e.label},e.key)))})]}),(0,fi.jsx)(Et,{value:$,onChange:e=>E(e.target.value),placeholder:"ar"===s?"\u0627\u0644\u0627\u0633\u0645":"Your Name"}),(0,fi.jsx)(Et,{value:_,onChange:e=>z(e.target.value),placeholder:"ar"===s?"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641":"Phone Number"}),"Delivery"===k&&(0,fi.jsx)(_t,{value:F,onChange:e=>D(e.target.value),placeholder:"ar"===s?"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644":"Delivery Address",rows:2}),"DineIn"===k&&(0,fi.jsx)(Et,{value:S,onChange:e=>B(e.target.value),placeholder:"ar"===s?"\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0648\u0644\u0629":"Table Number"}),(0,fi.jsx)(_t,{value:T,onChange:e=>L(e.target.value),placeholder:"ar"===s?"\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629":"Order Notes (optional)",rows:2})]})}),x.length>0&&(0,fi.jsxs)(Ct,{children:[(0,fi.jsxs)(kt,{children:[(0,fi.jsx)("span",{children:"ar"===s?"\u0627\u0644\u0645\u062c\u0645\u0648\u0639":"Total"}),(0,fi.jsx)("span",{children:(0,c.T)(N,p)})]}),"cart"===w?(0,fi.jsx)(At,{onClick:()=>C("checkout"),children:"ar"===s?"\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0637\u0644\u0628":"Proceed to Checkout"}):(0,fi.jsxs)(Dt,{children:[(0,fi.jsx)(St,{onClick:()=>C("cart"),children:"ar"===s?"\u0631\u062c\u0648\u0639":"Back"}),(0,fi.jsxs)(Bt,{onClick:async()=>{var e,t;let i=(()=>{let e=`*New Order - ${k}*\n`;return e+="----------------------------\n\n",x.forEach(((t,i)=>{const r="ar"===s&&t.ar_name?t.ar_name:t.en_name,o=t.category?"ar"===s&&t.category.ar_category?t.category.ar_category:t.category.en_category:"",n=t.price*t.quantity;if(e+=`${i+1}. *${(r||"").trim()}*\n`,o&&(e+=`    ${o.trim()}\n`),e+=`    ${t.quantity}x ${(0,c.T)(t.price,p)} = *${(0,c.T)(n,p)}*\n`,t.formData&&Object.keys(t.formData).length>0)try{const i=(0,g.Ve)(t,s);i&&(e+=`    ${i}\n`)}catch(a){}t.instruction&&(e+=`    > _${t.instruction}_\n`),e+="\n"})),e+="----------------------------\n",e+=`*Total: ${(0,c.T)(N,p)}*\n\n`,$&&(e+=`*Name:* ${$}\n`),_&&(e+=`*Phone:* ${_}\n`),"Delivery"===k&&F&&(e+=`*Address:* ${F}\n`),"DineIn"===k&&S&&(e+=`*Table:* ${S}\n`),T&&(e+=`*Notes:* ${T}\n`),e})();const r=[...x.map((e=>{var t,i;return{id:e.id,quantity:e.quantity,branch_id:null===o||void 0===o||null===(t=o.branches)||void 0===t||null===(i=t[0])||void 0===i?void 0:i.id,restaurant_id:null===o||void 0===o?void 0:o.id}}))],a=[...x.map((e=>({product_id:e.id,product_name:"ar"===s&&e.ar_name?e.ar_name:e.en_name,quantity:e.quantity,price:e.price,total_price:e.price*e.quantity,form_data:e.formData||{},instruction:e.instruction||"",product_details:{en_name:e.en_name,ar_name:e.ar_name,en_price:e.en_price,ar_price:e.ar_price,category_id:e.category_id}})))];j({products:r,restaurant_id:null===o||void 0===o?void 0:o.id,branch_id:null===o||void 0===o||null===(e=o.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id,delivery_type:k,customer_name:$,customer_phone:_,customer_address:"Delivery"===k?F:null,customer_latitude:null,customer_longitude:null,table_number:"DineIn"===k?S:null,note:T,items:a,subtotal:N,total:N,currency:null===o||void 0===o?void 0:o.currency},n).then((e=>{if(null!==o&&void 0!==o&&o.id){var t,i,r,n;const s=(null===o||void 0===o||null===(t=o.branches)||void 0===t||null===(i=t[0])||void 0===i?void 0:i.id)||null;(0,d.trackOrderPlaced)(o.id,(null===e||void 0===e||null===(r=e.data)||void 0===r||null===(n=r.order)||void 0===n?void 0:n.id)||null,k,N,s,{items:a,customerName:$})}})).catch((e=>console.error("Order creation failed:",e))),(0,f.JT)(M,i),v((0,l.sX)(n)),b(null)},disabled:!k||!$,children:[(0,fi.jsx)(u.kGk,{}),"ar"===s?"\u0625\u0631\u0633\u0627\u0644 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628":"Send via WhatsApp"]})]})]})]})})}const ji=b.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,wi=b.Ay.div`
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
`,Ci=b.Ay.div`
  flex: 1;
  min-width: 0;
`,ki=b.Ay.h4`
  font-size: 0.8125rem;
  font-weight: 600;
  margin: 0 0 4px;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
`,Ai=b.Ay.p`
  font-size: 0.75rem;
  color: #918c86;
  margin: 0 0 2px;
  &:last-child {
    margin-bottom: 0;
  }
`,$i=b.Ay.a`
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
`,Ei=b.Ay.p`
  text-align: center;
  color: #918c86;
  font-size: 0.8125rem;
  padding: 32px 0;
  margin: 0;
`;function _i(e){let{restaurant:t,activeLanguage:i,popupHandler:r,isRtl:o}=e;const n=(e,t)=>o&&t||e,a=(null===t||void 0===t?void 0:t.branches)||[];return(0,fi.jsxs)(fi.Fragment,{children:[(0,fi.jsx)(A,{onClick:()=>r(null)}),(0,fi.jsxs)(Tt,{children:[(0,fi.jsxs)(Lt,{children:[(0,fi.jsx)(Nt,{$rtl:o,children:n("Branches","\u0627\u0644\u0641\u0631\u0648\u0639")}),(0,fi.jsx)(Rt,{onClick:()=>r(null),children:(0,fi.jsx)(u.yGN,{})})]}),(0,fi.jsx)(Mt,{children:0===a.length?(0,fi.jsx)(Ei,{children:n("No branches available","\u0644\u0627 \u062a\u0648\u062c\u062f \u0641\u0631\u0648\u0639")}):(0,fi.jsx)(ji,{children:a.map((e=>(0,fi.jsxs)(wi,{children:[(0,fi.jsx)(u.HzC,{}),(0,fi.jsxs)(Ci,{children:[(0,fi.jsx)(ki,{children:o&&e.ar_name?e.ar_name:e.name}),e.address&&(0,fi.jsx)(Ai,{children:e.address}),e.phone&&(0,fi.jsxs)($i,{href:`tel:${e.phone}`,children:[(0,fi.jsx)(u.QFc,{}),e.phone]}),e.whatsapp_number&&(0,fi.jsxs)($i,{href:`https://wa.me/${e.whatsapp_number}`,target:"_blank",rel:"noopener noreferrer",children:[(0,fi.jsx)(u.X6_,{}),n("WhatsApp","\u0648\u0627\u062a\u0633\u0627\u0628")]})]})]},e.id)))})})]})]})}var zi=i(11222);const Fi=b.Ay.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
`,Di=b.Ay.button`
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
`,Si=b.Ay.textarea`
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
`,Bi=b.Ay.div`
  text-align: center;
  padding: 32px 0;
`,Ti=b.Ay.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${e=>e.theme.popupTextColor||"#1A1816"};
  margin: 0 0 8px;
`,Li=b.Ay.p`
  font-size: 0.8125rem;
  color: #918c86;
  margin: 0;
`;function Ni(e){let{restaurant:t,restaurantName:i,activeLanguage:o,popupHandler:n,isRtl:a}=e;const s=(e,t)=>a&&t||e,[l,d]=(0,r.useState)(0),[c,p]=(0,r.useState)(""),[h,x]=(0,r.useState)("idle");return(0,fi.jsxs)(fi.Fragment,{children:[(0,fi.jsx)(A,{onClick:()=>n(null)}),(0,fi.jsxs)(Tt,{children:[(0,fi.jsxs)(Lt,{children:[(0,fi.jsx)(Nt,{$rtl:a,children:s("Feedback","\u062a\u0642\u064a\u064a\u0645")}),(0,fi.jsx)(Rt,{onClick:()=>n(null),children:(0,fi.jsx)(u.yGN,{})})]}),(0,fi.jsx)(Mt,{children:"success"===h?(0,fi.jsxs)(Bi,{children:[(0,fi.jsx)(Ti,{children:s("Thank you!","\u0634\u0643\u0631\u0627 \u0644\u0643!")}),(0,fi.jsx)(Li,{children:s("Your feedback has been submitted","\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u062a\u0642\u064a\u064a\u0645\u0643 \u0628\u0646\u062c\u0627\u062d")})]}):(0,fi.jsxs)(fi.Fragment,{children:[(0,fi.jsx)(Fi,{children:[1,2,3,4,5].map((e=>(0,fi.jsx)(Di,{onClick:()=>d(e),$filled:e<=l,children:(0,fi.jsx)(u.usP,{})},e)))}),(0,fi.jsx)(Si,{value:c,onChange:e=>p(e.target.value),placeholder:s("Write your feedback...","\u0623\u0643\u062a\u0628 \u062a\u0639\u0644\u064a\u0642\u0643 \u0647\u0646\u0627..."),rows:3}),(0,fi.jsxs)(It,{onClick:async()=>{if(l){x("sending");try{await zi.A.post("https://77.37.51.25/feedback",{restaurant_id:null===t||void 0===t?void 0:t.id,rating:l,comment:c,restaurant_name:i}),x("success")}catch{x("error")}}},disabled:!l||"sending"===h,children:[(0,fi.jsx)(u.kGk,{}),"sending"===h?s("Sending...","\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0631\u0633\u0627\u0644..."):s("Submit","\u0625\u0631\u0633\u0627\u0644")]})]})})]})]})}const Ri=b.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Mi=b.Ay.a`
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
`,Ii=b.Ay.div`
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
`;function Oi(e){var t;let{restaurant:i,activeLanguage:r,popupHandler:o,isRtl:n}=e;const a=(e,t)=>n&&t||e,s=null===i||void 0===i||null===(t=i.branches)||void 0===t?void 0:t[0];return(0,fi.jsxs)(fi.Fragment,{children:[(0,fi.jsx)(A,{onClick:()=>o(null)}),(0,fi.jsxs)(Tt,{children:[(0,fi.jsxs)(Lt,{children:[(0,fi.jsx)(Nt,{$rtl:n,children:a("Contact","\u062a\u0648\u0627\u0635\u0644")}),(0,fi.jsx)(Rt,{onClick:()=>o(null),children:(0,fi.jsx)(u.yGN,{})})]}),(0,fi.jsx)(Mt,{children:(0,fi.jsxs)(Ri,{children:[(null===s||void 0===s?void 0:s.phone)&&(0,fi.jsxs)(Mi,{href:`tel:${s.phone}`,children:[(0,fi.jsx)(u.QFc,{}),(0,fi.jsx)("span",{children:s.phone})]}),(null===s||void 0===s?void 0:s.whatsapp_number)&&(0,fi.jsxs)(It,{as:"a",href:`https://wa.me/${s.whatsapp_number}`,target:"_blank",rel:"noopener noreferrer",$variant:"whatsapp",children:[(0,fi.jsx)(u.X6_,{}),a("WhatsApp","\u0648\u0627\u062a\u0633\u0627\u0628")]}),(null===s||void 0===s?void 0:s.email)&&(0,fi.jsxs)(Mi,{href:`mailto:${s.email}`,children:[(0,fi.jsx)(u.pHD,{}),(0,fi.jsx)("span",{children:s.email})]}),(null===s||void 0===s?void 0:s.address)&&(0,fi.jsxs)(Ii,{children:[(0,fi.jsx)(u.HzC,{}),(0,fi.jsx)("span",{children:s.address})]})]})})]})]})}const Hi=b.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`,Pi=b.Ay.div`
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
`,qi=b.Ay.button`
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
`,Gi=b.Ay.span`
  font-size: 0.6875rem;
  color: ${e=>e.theme.mainColor||"#9E7C0C"};
  font-weight: 600;
  text-align: center;
  display: block;
  margin-bottom: 12px;
`;function Ui(e){let{restaurant:t,popupHandler:i,isRtl:o}=e;const n=(e,t)=>o&&t||e,[a,s]=(0,r.useState)(!1),l=window.location.href;return(0,fi.jsxs)(fi.Fragment,{children:[(0,fi.jsx)(A,{onClick:()=>i(null)}),(0,fi.jsxs)(Tt,{children:[(0,fi.jsxs)(Lt,{children:[(0,fi.jsx)(Nt,{$rtl:o,children:n("Share","\u0645\u0634\u0627\u0631\u0643\u0629")}),(0,fi.jsx)(Rt,{onClick:()=>i(null),children:(0,fi.jsx)(u.yGN,{})})]}),(0,fi.jsxs)(Mt,{children:[(0,fi.jsxs)(Hi,{children:[(0,fi.jsx)(Pi,{children:l}),(0,fi.jsx)(qi,{onClick:async()=>{try{await navigator.clipboard.writeText(l),s(!0),setTimeout((()=>s(!1)),2e3)}catch{}},children:a?(0,fi.jsx)(u.YrT,{}):(0,fi.jsx)(u.nxz,{})})]}),a&&(0,fi.jsx)(Gi,{children:n("Copied!","\u062a\u0645 \u0627\u0644\u0646\u0633\u062e!")}),navigator.share&&(0,fi.jsxs)(It,{onClick:()=>{navigator.share&&navigator.share({title:null===t||void 0===t?void 0:t.name,url:l})},children:[(0,fi.jsx)(u.Pum,{}),n("Share","\u0645\u0634\u0627\u0631\u0643\u0629")]})]})]})]})}var Yi=i(38495),Vi=i(71481);const Qi="https://storage.googleapis.com/ecommerce-bucket-testing/",Xi="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=DM+Sans:wght@400;500;600;700&family=Literata:opsz,wght@7..72,400;600;700&display=swap";function Ki(){var e,t,i,h,x,m,g,f,b,y,v;const[j,w]=(0,o.ok)(),C=j.get("productId"),{restaurantName:te}=(0,n.g)(),ie=window.location.hostname.split(".")[0],re="menugic"!==ie&&"localhost"!==ie&&"www"!==ie?ie:te,oe=(0,a.d4)((e=>{var t;return null===(t=e.restaurant)||void 0===t?void 0:t[re]})),ne=(0,a.d4)((e=>{var t,i;return(null===(t=e.restaurant)||void 0===t||null===(i=t[re])||void 0===i?void 0:i.activeLanguage)||"en"})),ae=(0,a.wA)(),se=(0,a.d4)((e=>e.cart[re]||[])),le=se.reduce(((e,t)=>e+t.quantity),0),ce="ar"===ne,pe=(0,r.useMemo)((()=>JSON.parse((null===oe||void 0===oe?void 0:oe.features)||"{}")),[null===oe||void 0===oe?void 0:oe.features]),Pe=(0,r.useMemo)((()=>[...(null===oe||void 0===oe?void 0:oe.categories)||[]].sort(((e,t)=>(t.priority||0)-(e.priority||0)||(e.id||0)-(t.id||0)))),[null===oe||void 0===oe?void 0:oe.categories]),qe=(null===oe||void 0===oe||null===(e=oe.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.currency_symbol)||"$",Ge=(0,r.useMemo)((()=>{try{return JSON.parse((null===oe||void 0===oe?void 0:oe.social_media)||"{}")}catch{return{}}}),[null===oe||void 0===oe?void 0:oe.social_media]),Ue=null!==oe&&void 0!==oe&&oe.logoURL?`${Qi}${oe.logoURL}`:null,Ye=(0,r.useMemo)((()=>{const e=[];for(const t of Pe)for(const i of t.products||[])i.is_deleted||(i.is_best_seller||i.featured)&&e.push(i);return e}),[Pe]),Ve=(0,r.useMemo)((()=>{const e=[];for(const t of Pe)for(const i of t.products||[])i.is_deleted||Number(i.discount)>0&&e.push(i);return e}),[Pe]),[Qe,Xe]=(0,r.useState)(null),[Ke,Je]=(0,r.useState)(null),[We,Ze]=(0,r.useState)(!1),[et,tt]=(0,r.useState)(!1),[it,rt]=(0,r.useState)(""),[ot,nt]=(0,r.useState)(""),[at,st]=(0,r.useState)(!0),[lt,dt]=(0,r.useState)("home"),[ct,pt]=(0,r.useState)([]),ht=(0,r.useRef)(0),xt=(0,r.useRef)(!1),ut=(0,r.useRef)(null),mt=(0,r.useRef)(null),gt=(0,r.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";const i=++ht.current;pt((r=>[...r,{id:i,message:e,type:t}])),setTimeout((()=>pt((e=>e.filter((e=>e.id!==i))))),2500)}),[]),ft=(0,r.useMemo)((()=>{var e;if(null===oe||void 0===oe||null===(e=oe.workingHours)||void 0===e||!e.length)return null;const t=new Date,i=t.toLocaleDateString("en-US",{weekday:"long"}),r=60*t.getHours()+t.getMinutes(),o=oe.workingHours.find((e=>{var t;return(null===(t=e.en_day)||void 0===t?void 0:t.toLowerCase())===i.toLowerCase()}));if(null===o||void 0===o||!o.opening_time||null===o||void 0===o||!o.closing_time)return null;const[n,a]=o.opening_time.split(":").map(Number),[s,l]=o.closing_time.split(":").map(Number);return r>=60*n+a&&r<=60*s+l}),[null===oe||void 0===oe?void 0:oe.workingHours]),bt=(0,r.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en_name",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ar_name";return ce&&null!==e&&void 0!==e&&e[i]?e[i]:(null===e||void 0===e?void 0:e[t])||""}),[ce]),yt=(0,r.useCallback)((e=>ce&&null!==e&&void 0!==e&&e.ar_category?e.ar_category:(null===e||void 0===e?void 0:e.en_category)||""),[ce]),vt=(0,r.useCallback)((e=>ce&&null!==e&&void 0!==e&&e.ar_description?e.ar_description:(null===e||void 0===e?void 0:e.en_description)||(null===e||void 0===e?void 0:e.description)||""),[ce]),jt=(0,r.useCallback)(((e,t)=>ce&&t||e),[ce]);(0,r.useEffect)((()=>{if(!document.querySelector(`link[href="${Xi}"]`)){const e=document.createElement("link");e.rel="stylesheet",e.href=Xi,document.head.appendChild(e)}}),[]),(0,r.useEffect)((()=>(document.documentElement.setAttribute("dir",ce?"rtl":"ltr"),()=>document.documentElement.removeAttribute("dir"))),[ce]),(0,r.useEffect)((()=>{if(null!==oe&&void 0!==oe&&oe.id){var e,t;const i=(null===oe||void 0===oe||null===(e=oe.branches)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null;(0,d.trackVisit)(oe.id,i),(0,d.trackPageView)(oe.id,i)}}),[null===oe||void 0===oe?void 0:oe.id]),(0,r.useEffect)((()=>{const e=()=>Ze(window.scrollY>10);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[]),(0,r.useEffect)((()=>{const e=document.querySelectorAll("[data-section]");if(!e.length)return;const t=new IntersectionObserver((e=>{if(!xt.current)for(const i of e)if(i.isIntersecting){var t;const e=Number(i.target.dataset.section);Je(e);const r=null===(t=ut.current)||void 0===t?void 0:t.querySelector(`[data-cat="${e}"]`);null===r||void 0===r||r.scrollIntoView({inline:"center",behavior:"smooth",block:"nearest"});break}}),{rootMargin:"-100px 0px -60% 0px",threshold:0});return e.forEach((e=>t.observe(e))),()=>t.disconnect()}),[Pe]),(0,r.useEffect)((()=>{Pe.length&&!Ke&&Je(Pe[0].id)}),[Pe]);const wt=(0,r.useCallback)((e=>{document.body.style.overflow=null==e?"auto":"hidden",Xe(e)}),[]),Ct=(0,r.useCallback)((e=>{ae((0,s.y)({name:re,activeLanguage:e}))}),[ae,re]),kt=(0,r.useCallback)((e=>{const t=new URLSearchParams(j);t.set("productId",e),w(t)}),[j,w]),At=(0,r.useCallback)((()=>{const e=new URLSearchParams(j);e.delete("productId"),w(e)}),[j,w]);(0,r.useEffect)((()=>{const e=e=>{"Escape"===e.key&&(et?(tt(!1),rt("")):C?At():Qe&&wt(null))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[et,C,Qe,At,wt]);const $t=(0,r.useMemo)((()=>{if(!C)return null;for(const t of Pe){var e;const i=null===(e=t.products)||void 0===e?void 0:e.find((e=>String(e.id)===String(C)));if(i)return i}return null}),[C,Pe]),Et=(0,r.useCallback)((e=>{Je(e),xt.current=!0;const t=document.getElementById(`section-${e}`);if(t){const e=t.getBoundingClientRect().top+window.scrollY-110;window.scrollTo({top:e,behavior:"smooth"})}setTimeout((()=>{xt.current=!1}),800)}),[]),_t=(0,r.useMemo)((()=>{const e=[];for(const t of Pe)for(const i of t.products||[])i.is_deleted||e.push({...i,_catName:yt(t)});return e}),[Pe,yt]),zt=(0,r.useMemo)((()=>{const e=(et?it:ot).trim().toLowerCase();return e?_t.filter((t=>((t.en_name||"").toLowerCase()+" "+(t.ar_name||"").toLowerCase()).includes(e))).slice(0,20):[]}),[et,it,ot,_t]),Ft=(0,r.useCallback)(((e,t)=>{e.stopPropagation(),ae((0,l.bE)(re,t,1,{},parseFloat(t.en_price)||0,"",void 0));const i=ce&&t.ar_name?t.ar_name:t.en_name;gt(ce?`${i} \u0623\u064f\u0636\u064a\u0641 \u0644\u0644\u0633\u0644\u0629`:`${i} added to cart`,"success")}),[ae,re,ce,gt]),Dt=(0,r.useMemo)((()=>((null===oe||void 0===oe?void 0:oe.languages)||"en").split("&")),[null===oe||void 0===oe?void 0:oe.languages]);return oe?(0,fi.jsxs)(k,{$rtl:ce,children:[at&&(oe.en_slogan||oe.ar_slogan)&&(0,fi.jsxs)(Ot,{children:[(0,fi.jsx)("span",{children:ce&&oe.ar_slogan?oe.ar_slogan:oe.en_slogan}),(0,fi.jsx)(Ht,{onClick:()=>st(!1),children:(0,fi.jsx)(u.yGN,{})})]}),(0,fi.jsx)($,{$scrolled:We,children:(0,fi.jsxs)(E,{children:[(0,fi.jsx)(_,{children:Ue?(0,fi.jsx)("img",{src:Ue,alt:""}):(0,fi.jsx)("span",{children:(oe.name||"M")[0]})}),(0,fi.jsx)(z,{$rtl:ce,children:ce&&oe.ar_name?oe.ar_name:oe.name}),(0,fi.jsx)(F,{children:(0,fi.jsx)("input",{value:ot,onChange:e=>nt(e.target.value),placeholder:jt("Search menu...","\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629...")})}),(0,fi.jsxs)(D,{children:[(0,fi.jsx)(S,{className:"mobile-only",onClick:()=>{tt(!0),rt("")},children:(0,fi.jsx)(u.CKj,{})}),Dt.length>1&&(0,fi.jsx)(B,{onClick:()=>Ct(ce?"en":"ar"),children:ce?"EN":"\u0639"}),(null===pe||void 0===pe?void 0:pe.cart)&&(0,fi.jsxs)(S,{onClick:()=>wt("cart"),children:[(0,fi.jsx)(u.iHs,{}),le>0&&(0,fi.jsx)(T,{children:le})]})]})]})}),(0,fi.jsxs)(L,{children:[(0,fi.jsx)(R,{children:Ue?(0,fi.jsx)("img",{src:Ue,alt:""}):(0,fi.jsx)("span",{children:(oe.name||"M")[0]})}),(0,fi.jsxs)(N,{children:[(0,fi.jsx)(M,{$rtl:ce,children:ce&&oe.ar_name?oe.ar_name:oe.name}),(0,fi.jsx)(I,{children:ce&&oe.ar_slogan?oe.ar_slogan:oe.en_slogan||""}),(0,fi.jsxs)(O,{children:[null!==ft&&(0,fi.jsx)(di,{$open:ft,children:ft?jt("Open","\u0645\u0641\u062a\u0648\u062d"):jt("Closed","\u0645\u063a\u0644\u0642")}),(null===(i=oe.branches)||void 0===i?void 0:i[0])&&(0,fi.jsxs)(fi.Fragment,{children:[(0,fi.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,fi.jsx)(u.HzC,{})," ",ce&&oe.branches[0].ar_name?oe.branches[0].ar_name:oe.branches[0].name||oe.branches[0].address||""]}),oe.branches[0].phone&&(0,fi.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,fi.jsx)(u.QFc,{})," ",oe.branches[0].phone]})]})]}),(0,fi.jsxs)(H,{children:[(null===(h=oe.branches)||void 0===h?void 0:h.length)>0&&(0,fi.jsxs)(P,{onClick:()=>wt("location"),children:[(0,fi.jsx)(u.HzC,{})," ",jt("Branches","\u0627\u0644\u0641\u0631\u0648\u0639")]}),(0,fi.jsxs)(P,{onClick:()=>wt("contact"),children:[(0,fi.jsx)(u.S8s,{})," ",jt("Info","\u0645\u0639\u0644\u0648\u0645\u0627\u062a")]}),(0,fi.jsxs)(P,{onClick:()=>wt("share"),children:[(0,fi.jsx)(u.Pum,{})," ",jt("Share","\u0645\u0634\u0627\u0631\u0643\u0629")]})]})]})]}),(0,fi.jsx)(q,{children:(0,fi.jsx)(G,{ref:ut,children:(0,fi.jsxs)(U,{role:"tablist",children:[Ye.length>0&&(0,fi.jsx)(Y,{"data-cat":"best-sellers",$active:"best-sellers"===Ke,onClick:()=>{var e;Je("best-sellers"),dt("menu"),null===(e=document.getElementById("section-best-sellers"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})},role:"tab",children:jt("\ud83d\udd25 Best Sellers","\ud83d\udd25 \u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b")}),Ve.length>0&&(0,fi.jsx)(Y,{"data-cat":"offers",$active:"offers"===Ke,onClick:()=>{var e;Je("offers"),dt("menu"),null===(e=document.getElementById("section-offers"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})},role:"tab",children:jt("\ud83c\udff7\ufe0f Offers","\ud83c\udff7\ufe0f \u0639\u0631\u0648\u0636")}),Pe.map((e=>(0,fi.jsx)(Y,{"data-cat":e.id,$active:Ke===e.id,onClick:()=>{Et(e.id),dt("menu")},role:"tab",children:yt(e)},e.id)))]})})}),Ye.length>0&&!ot.trim()&&(0,fi.jsxs)(Zt,{children:[(0,fi.jsx)(Z,{$rtl:ce,style:{marginBottom:12},children:jt("Today's Specials","\u0639\u0631\u0648\u0636 \u0627\u0644\u064a\u0648\u0645")}),(0,fi.jsx)(ei,{children:Ye.slice(0,4).map(((e,t)=>{const i=["linear-gradient(135deg, #8B4513 0%, #D2691E 100%)","linear-gradient(135deg, #1A1816 0%, #3D3A36 100%)","linear-gradient(135deg, #B5342A 0%, #D4564C 100%)","linear-gradient(135deg, #9E7C0C 0%, #C9A84C 100%)"];return(0,fi.jsx)(ti,{onClick:()=>kt(e.id),children:(0,fi.jsxs)(ii,{$bg:i[t%i.length],children:[(0,fi.jsx)(ri,{children:e.is_best_seller?jt("BEST SELLER","\u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b"):jt("FEATURED","\u0645\u0645\u064a\u0632")}),(0,fi.jsx)(oi,{children:bt(e)}),(0,fi.jsx)(ni,{children:(0,c.T)(parseFloat(e.en_price)||0,qe)}),(0,fi.jsx)(ai,{children:jt("Order Now \u2192","\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646 \u2190")})]})},e.id)}))})]}),(0,fi.jsxs)(V,{children:[(0,fi.jsx)(Q,{children:Pe.map((e=>{const t=(e.products||[]).filter((e=>!e.is_deleted)).length;return(0,fi.jsxs)(X,{$active:Ke===e.id,onClick:()=>Et(e.id),children:[(0,fi.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[e.image_url&&(0,fi.jsx)(Gt,{src:(0,p.V)(e.image_url),alt:"",onError:e=>{e.target.style.display="none"}}),yt(e)]}),(0,fi.jsx)(K,{children:t})]},e.id)}))}),(0,fi.jsxs)(J,{style:{paddingBottom:le>0?80:24},children:[ot.trim()&&zt.length>0&&(0,fi.jsxs)("div",{style:{marginBottom:24},children:[(0,fi.jsx)(Z,{$rtl:ce,children:jt("Search Results","\u0646\u062a\u0627\u0626\u062c \u0627\u0644\u0628\u062d\u062b")}),(0,fi.jsx)(ee,{children:zt.map((e=>(0,fi.jsx)(Wi,{product:e,getName:bt,getDesc:vt,currencySymbol:qe,openProduct:kt,quickAdd:Ft,features:pe,isRtl:ce,loc:jt},e.id)))})]}),!ot.trim()&&Ye.length>0&&(0,fi.jsxs)(W,{id:"section-best-sellers","data-section":"best-sellers",children:[(0,fi.jsxs)(Ut,{children:[(0,fi.jsx)(Z,{$rtl:ce,style:{margin:0},children:jt("\ud83d\udd25 Best Sellers","\ud83d\udd25 \u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b")}),(0,fi.jsxs)(Yt,{children:[Ye.length," ",jt("items","\u0635\u0646\u0641")]})]}),(0,fi.jsx)(Vt,{children:Ye.map((e=>(0,fi.jsxs)(Qt,{onClick:()=>kt(e.id),children:[(0,fi.jsx)(Xt,{children:Ji(e)&&(0,fi.jsx)("img",{src:Ji(e),alt:""})}),(0,fi.jsxs)(Kt,{children:[(0,fi.jsx)(Jt,{children:bt(e)}),(0,fi.jsx)(Wt,{children:(0,c.T)(parseFloat(e.en_price)||0,qe)})]})]},e.id)))})]}),!ot.trim()&&Ve.length>0&&(0,fi.jsxs)(W,{id:"section-offers","data-section":"offers",children:[(0,fi.jsxs)(Ut,{children:[(0,fi.jsx)(Z,{$rtl:ce,style:{margin:0},children:jt("\ud83c\udff7\ufe0f Offers","\ud83c\udff7\ufe0f \u0639\u0631\u0648\u0636")}),(0,fi.jsxs)(Yt,{children:[Ve.length," ",jt("items","\u0635\u0646\u0641")]})]}),(0,fi.jsx)(Vt,{children:Ve.map((e=>{const t=parseFloat(e.en_price)||0,i=Number(e.discount)||0;return(0,fi.jsxs)(Qt,{onClick:()=>kt(e.id),children:[(0,fi.jsx)(Xt,{children:Ji(e)&&(0,fi.jsx)("img",{src:Ji(e),alt:""})}),(0,fi.jsxs)(Kt,{children:[(0,fi.jsx)(Jt,{children:bt(e)}),(0,fi.jsxs)("div",{children:[(0,fi.jsx)(Wt,{children:(0,c.T)(t*(1-i/100),qe)}),(0,fi.jsx)(de,{style:{fontSize:"0.5625rem"},children:(0,c.T)(t,qe)})]})]})]},e.id)}))})]}),!ot.trim()&&Pe.map((e=>{const t=(e.products||[]).filter((e=>!e.is_deleted&&1!==e.is_deleted)).sort(((e,t)=>(t.priority||0)-(e.priority||0)));return t.length?(0,fi.jsxs)(W,{id:`section-${e.id}`,"data-section":e.id,children:[(0,fi.jsxs)(Ut,{children:[(0,fi.jsx)(Z,{$rtl:ce,style:{margin:0},children:yt(e)}),(0,fi.jsxs)(Yt,{children:[t.length," ",jt("items","\u0635\u0646\u0641")]})]}),(0,fi.jsx)(ee,{children:t.map((e=>(0,fi.jsx)(Wi,{product:e,getName:bt,getDesc:vt,currencySymbol:qe,openProduct:kt,quickAdd:Ft,features:pe,isRtl:ce,loc:jt},e.id)))})]},e.id):null}))]})]}),(0,fi.jsx)(he,{children:(0,fi.jsxs)(xe,{children:[(0,fi.jsxs)(ue,{children:[(0,fi.jsxs)("div",{children:[(0,fi.jsx)(ge,{$rtl:ce,children:ce&&oe.ar_name?oe.ar_name:oe.name}),(0,fi.jsx)(fe,{children:ce&&oe.ar_description?oe.ar_description:oe.en_description||""}),(0,fi.jsxs)(ye,{children:[Ge.instagram&&(0,fi.jsx)("a",{href:Ge.instagram,target:"_blank",rel:"noopener noreferrer",children:(0,fi.jsx)(Vi.ao$,{})}),Ge.facebook&&(0,fi.jsx)("a",{href:Ge.facebook,target:"_blank",rel:"noopener noreferrer",children:(0,fi.jsx)(Vi.iYk,{})}),Ge.tiktok&&(0,fi.jsx)("a",{href:Ge.tiktok,target:"_blank",rel:"noopener noreferrer",children:(0,fi.jsx)(Vi.kkU,{})})]})]}),(0,fi.jsxs)("div",{children:[(0,fi.jsx)(me,{children:jt("Contact","\u062a\u0648\u0627\u0635\u0644")}),(null===(x=oe.branches)||void 0===x||null===(m=x[0])||void 0===m?void 0:m.phone)&&(0,fi.jsx)(be,{href:`tel:${oe.branches[0].phone}`,children:oe.branches[0].phone}),(null===(g=oe.branches)||void 0===g||null===(f=g[0])||void 0===f?void 0:f.email)&&(0,fi.jsx)(be,{href:`mailto:${oe.branches[0].email}`,children:oe.branches[0].email}),(null===(b=oe.branches)||void 0===b||null===(y=b[0])||void 0===y?void 0:y.address)&&(0,fi.jsx)(fe,{children:oe.branches[0].address})]}),(null===(v=oe.workingHours)||void 0===v?void 0:v.length)>0&&(0,fi.jsxs)("div",{children:[(0,fi.jsx)(me,{children:jt("Hours","\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644")}),oe.workingHours.map(((e,t)=>(0,fi.jsxs)(fe,{children:[ce&&e.ar_day?e.ar_day:e.en_day,": ",e.opening_time," - ",e.closing_time]},t)))]}),(0,fi.jsxs)("div",{children:[(0,fi.jsx)(me,{children:jt("Legal","\u0642\u0627\u0646\u0648\u0646\u064a")}),(0,fi.jsx)(fe,{children:jt("Privacy Policy","\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629")}),(0,fi.jsx)(fe,{children:jt("Terms of Service","\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629")})]})]}),(0,fi.jsxs)(ve,{children:[(0,fi.jsxs)("span",{children:["\xa9 ",(new Date).getFullYear()," ",oe.name]}),(0,fi.jsxs)("span",{children:["Powered by ",(0,fi.jsx)("a",{href:"https://menugic.com",target:"_blank",rel:"noopener noreferrer",children:"Menugic"})]})]})]})}),(0,fi.jsxs)(je,{children:[(0,fi.jsxs)(we,{$active:"home"===lt,onClick:()=>{dt("home"),window.scrollTo({top:0,behavior:"smooth"})},children:[(0,fi.jsx)(u.V5Y,{}),(0,fi.jsx)("span",{children:jt("Home","\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629")})]}),(0,fi.jsxs)(we,{$active:"menu"===lt,onClick:()=>{dt("menu");const e=document.querySelector("[data-section]");if(e){const t=e.getBoundingClientRect().top+window.scrollY-110;window.scrollTo({top:t,behavior:"smooth"})}},children:[(0,fi.jsx)(u.QPV,{}),(0,fi.jsx)("span",{children:jt("Menu","\u0627\u0644\u0642\u0627\u0626\u0645\u0629")})]}),(0,fi.jsxs)(we,{$active:"search"===lt,onClick:()=>{dt("search"),tt(!0),rt("")},children:[(0,fi.jsx)(u.CKj,{}),(0,fi.jsx)("span",{children:jt("Search","\u0628\u062d\u062b")})]}),(null===pe||void 0===pe?void 0:pe.cart)&&(0,fi.jsxs)(we,{$active:"cart"===lt,onClick:()=>{dt("cart"),wt("cart")},children:[(0,fi.jsx)(u.iHs,{}),le>0&&(0,fi.jsx)(Ce,{children:le}),(0,fi.jsx)("span",{children:jt("Cart","\u0627\u0644\u0633\u0644\u0629")})]}),(0,fi.jsxs)(we,{$active:"more"===lt,onClick:()=>{dt("more"),wt("more")},children:[(0,fi.jsx)(u.$Ri,{}),(0,fi.jsx)("span",{children:jt("More","\u0627\u0644\u0645\u0632\u064a\u062f")})]})]}),(null===pe||void 0===pe?void 0:pe.cart)&&le>0&&(0,fi.jsx)(ke,{children:(0,fi.jsxs)(Ae,{onClick:()=>wt("cart"),children:[(0,fi.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,fi.jsx)($e,{children:le}),(0,fi.jsx)(Ee,{children:jt("View Cart","\u0639\u0631\u0636 \u0627\u0644\u0633\u0644\u0629")})]}),(0,fi.jsx)(_e,{children:(0,c.T)(se.reduce(((e,t)=>e+t.price*t.quantity),0),qe)})]})}),et&&(0,fi.jsxs)(ze,{children:[(0,fi.jsxs)(Fe,{children:[(0,fi.jsx)(De,{ref:mt,value:it,onChange:e=>rt(e.target.value),placeholder:jt("Search menu...","\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629..."),autoFocus:!0}),(0,fi.jsx)(Se,{onClick:()=>{tt(!1),rt("")},children:jt("Cancel","\u0625\u0644\u063a\u0627\u0621")})]}),(0,fi.jsx)(Be,{children:it.trim()?zt.length>0?zt.map((e=>(0,fi.jsxs)(Te,{onClick:()=>{tt(!1),rt(""),kt(e.id)},children:[(0,fi.jsx)(Le,{children:Ji(e)&&(0,fi.jsx)("img",{src:Ji(e),alt:""})}),(0,fi.jsxs)(Ne,{children:[(0,fi.jsx)("h4",{children:bt(e)}),(0,fi.jsx)("p",{children:e._catName})]}),(0,fi.jsx)(Re,{children:(0,c.T)(parseFloat(e.en_price)||0,qe)})]},e.id))):(0,fi.jsx)(Me,{children:jt("No results found","\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0646\u062a\u0627\u0626\u062c")}):(0,fi.jsx)(Me,{children:jt("Type to search...","\u0627\u0643\u062a\u0628 \u0644\u0644\u0628\u062d\u062b...")})})]}),$t&&(0,fi.jsx)(Zi,{product:$t,restaurant:oe,restaurantName:re,activeLanguage:ne,isRtl:ce,currencySymbol:qe,features:pe,onClose:At,getName:bt,getDesc:vt,loc:jt,dispatch:ae,openProduct:kt,categories:Pe,showToast:gt}),"more"===Qe&&(0,fi.jsxs)(fi.Fragment,{children:[(0,fi.jsx)(A,{onClick:()=>wt(null)}),(0,fi.jsxs)(Ie,{children:[(0,fi.jsx)(Oe,{}),(0,fi.jsxs)(He,{onClick:()=>wt("contact"),children:[(0,fi.jsx)(u.QFc,{})," ",jt("Contact","\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627")]}),(0,fi.jsxs)(He,{onClick:()=>wt("location"),children:[(0,fi.jsx)(u.HzC,{})," ",jt("Branches","\u0627\u0644\u0641\u0631\u0648\u0639")]}),(null===pe||void 0===pe?void 0:pe.about_us)&&(0,fi.jsxs)(He,{onClick:()=>wt("about"),children:[(0,fi.jsx)(u.S8s,{})," ",jt("About Us","\u0645\u0646 \u0646\u062d\u0646")]}),(null===pe||void 0===pe?void 0:pe.feedback)&&(0,fi.jsxs)(He,{onClick:()=>wt("feedback"),children:[(0,fi.jsx)(u.mEP,{})," ",jt("Feedback","\u062a\u0642\u064a\u064a\u0645")]}),(0,fi.jsxs)(He,{onClick:()=>wt("share"),children:[(0,fi.jsx)(u.Pum,{})," ",jt("Share","\u0645\u0634\u0627\u0631\u0643\u0629")]})]})]}),Qe&&"more"!==Qe&&(0,fi.jsx)(A,{onClick:()=>wt(null)}),"cart"===Qe&&(0,fi.jsx)(vi,{restaurant:oe,restaurantName:re,activeLanguage:ne,currencySymbol:qe,features:pe,cart:se,popupHandler:wt,isRtl:ce}),"location"===Qe&&(0,fi.jsx)(_i,{restaurant:oe,activeLanguage:ne,popupHandler:wt,isRtl:ce}),"feedback"===Qe&&(0,fi.jsx)(Ni,{restaurant:oe,restaurantName:re,activeLanguage:ne,popupHandler:wt,isRtl:ce}),"contact"===Qe&&(0,fi.jsx)(Oi,{restaurant:oe,activeLanguage:ne,popupHandler:wt,isRtl:ce}),"share"===Qe&&(0,fi.jsx)(Ui,{restaurant:oe,popupHandler:wt,isRtl:ce}),"about"===Qe&&(0,fi.jsx)(Yi.A,{restaurant:oe,showPopup:Qe,popupHandler:wt}),ct.length>0&&(0,fi.jsx)(Pt,{children:ct.map((e=>(0,fi.jsx)(qt,{$type:e.type,children:e.message},e.id)))})]}):null}function Ji(e){var t,i;const r=null===(t=e.images)||void 0===t?void 0:t.findIndex((t=>t.id===e.new_cover_id)),o=r>=0?e.images[r]:null===(i=e.images)||void 0===i?void 0:i[0];return null!==o&&void 0!==o&&o.url?(0,p.V)(o.url):null}function Wi(e){let{product:t,getName:i,getDesc:r,currencySymbol:o,openProduct:n,quickAdd:a,features:s,isRtl:l,loc:d}=e;const p=i(t),h=(x=r(t))?x.replace(/<[^>]*>/g,"").trim():"";var x;const m=Ji(t),g=parseFloat(t.en_price)||0,f=Number(t.discount)||0,b=f>0?g*(1-f/100):g,y=1===t.out_of_stock||!0===t.out_of_stock,v=(()=>{try{const e=JSON.parse(t.form_json||"{}");return e&&Object.keys(e).length>0}catch{return!1}})(),j=(null===s||void 0===s?void 0:s.cart)&&!y&&!v;return(0,fi.jsxs)(te,{$unavailable:y,onClick:()=>!y&&n(t.id),children:[(0,fi.jsx)(ie,{children:m&&(0,fi.jsx)("img",{src:m,alt:p,loading:"lazy"})}),t.is_best_seller&&(0,fi.jsx)(re,{$type:"best",children:d("Best Seller","\u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b")}),!t.is_best_seller&&t.featured&&(0,fi.jsx)(re,{$type:"featured",children:d("Featured","\u0645\u0645\u064a\u0632")}),!t.is_best_seller&&!t.featured&&f>0&&(0,fi.jsxs)(re,{$type:"sale",children:["-",f,"%"]}),!t.is_best_seller&&!t.featured&&!f&&(t.new||t.is_new)&&(0,fi.jsx)(re,{$type:"new",children:d("New","\u062c\u062f\u064a\u062f")}),(0,fi.jsxs)(oe,{children:[(0,fi.jsx)(ne,{children:p}),h&&(0,fi.jsx)(ae,{children:h}),(0,fi.jsxs)(se,{children:[(0,fi.jsxs)("div",{children:[(0,fi.jsxs)("span",{children:[v&&(0,fi.jsx)(si,{children:d("From","\u0645\u0646")}),(0,fi.jsx)(le,{children:(0,c.T)(b,o)})]}),f>0&&(0,fi.jsx)(de,{children:(0,c.T)(g,o)}),v&&(0,fi.jsx)(li,{children:d("Customizable","\u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u062e\u0635\u064a\u0635")})]}),y?(0,fi.jsx)(pe,{children:d("Sold Out","\u0646\u0641\u0630\u062a \u0627\u0644\u0643\u0645\u064a\u0629")}):null!==s&&void 0!==s&&s.cart?(0,fi.jsx)(ce,{onClick:e=>j?a(e,t):void 0,children:(0,fi.jsx)(u.GGD,{})}):null]})]})]})}function Zi(e){let{product:t,restaurant:i,restaurantName:o,activeLanguage:n,isRtl:a,currencySymbol:s,features:p,onClose:m,getName:g,getDesc:f,loc:b,dispatch:y,openProduct:v,categories:j,showToast:w}=e;const[C,k]=(0,r.useState)(1),[A,$]=(0,r.useState)(""),[E,_]=(0,r.useState)({}),[z,F]=(0,r.useState)(0),D=g(t),S=f(t),B=Ji(t),T=parseFloat(t.en_price)||0,L=Number(t.discount)||0,N=L>0?T*(1-L/100):T,R=(0,r.useMemo)((()=>{try{const e=JSON.parse(t.form_json||"{}");if(e&&Object.keys(e).length>0)return e}catch{}return null}),[t.form_json]),M=2===(null===R||void 0===R?void 0:R.version),I=(0,r.useMemo)((()=>{if(!j)return[];for(const e of j){if((e.products||[]).find((e=>e.id===t.id)))return(e.products||[]).filter((e=>e.id!==t.id&&!e.is_deleted)).slice(0,4)}return[]}),[j,t.id]);(0,r.useEffect)((()=>{F(N)}),[N]);const O=z*C;(0,r.useEffect)((()=>{if(null!==i&&void 0!==i&&i.id&&null!==t&&void 0!==t&&t.id){var e,r,o;const n=(null===i||void 0===i||null===(e=i.branches)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.id)||null;(0,d.trackItemView)(i.id,t.id,t.category_id,n,{name:D,price:T,category:(null===(o=t.category)||void 0===o?void 0:o.en_category)||""})}}),[null===t||void 0===t?void 0:t.id]);const H=(0,r.useCallback)((e=>{F(e)}),[]);return(0,fi.jsx)(Pe,{onClick:m,children:(0,fi.jsxs)(qe,{onClick:e=>e.stopPropagation(),children:[(0,fi.jsx)(Ge,{onClick:m,children:(0,fi.jsx)(u.yGN,{})}),(0,fi.jsxs)(Ue,{children:[B?(0,fi.jsx)(Ye,{children:(0,fi.jsx)("img",{src:B,alt:D})}):(0,fi.jsx)(Ve,{children:"\ud83c\udf7d\ufe0f"}),(0,fi.jsxs)(Qe,{children:[(0,fi.jsx)(Xe,{$rtl:a,children:D}),S&&(0,fi.jsx)(Ke,{dangerouslySetInnerHTML:{__html:S}}),(0,fi.jsxs)(Je,{children:[(0,fi.jsx)(We,{children:(0,c.T)(N,s)}),L>0&&(0,fi.jsx)(Ze,{children:(0,c.T)(T,s)}),L>0&&(0,fi.jsxs)(et,{children:["-",L,"%"]})]}),(0,fi.jsx)(x.A,{macros:null===t||void 0===t?void 0:t.macros,activeLanguage:n}),M&&R&&(0,fi.jsx)(tt,{children:(0,fi.jsx)(h.A,{options:R,formData:E,setFormData:_,activeLanguage:n,basePrice:N,onPriceChange:H})}),(0,fi.jsx)(it,{children:b("Special Instructions","\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u062e\u0627\u0635\u0629")}),(0,fi.jsx)(rt,{value:A,onChange:e=>$(e.target.value),placeholder:b("Add your notes here...","\u0623\u0636\u0641 \u0645\u0644\u0627\u062d\u0638\u0627\u062a\u0643 \u0647\u0646\u0627..."),rows:2}),I.length>0&&(0,fi.jsxs)(ci,{children:[(0,fi.jsx)(pi,{children:b("You Might Also Like","\u0642\u062f \u064a\u0639\u062c\u0628\u0643 \u0623\u064a\u0636\u0627\u064b")}),(0,fi.jsx)(hi,{children:I.map((e=>(0,fi.jsxs)(xi,{onClick:()=>{m(),setTimeout((()=>v(e.id)),100)},children:[(0,fi.jsx)(ui,{children:Ji(e)&&(0,fi.jsx)("img",{src:Ji(e),alt:""})}),(0,fi.jsx)(mi,{children:g(e)}),(0,fi.jsx)(gi,{children:(0,c.T)(parseFloat(e.en_price)||0,s)})]},e.id)))})]})]})]}),(null===p||void 0===p?void 0:p.cart)&&(0,fi.jsxs)(ot,{children:[(0,fi.jsxs)(nt,{children:[(0,fi.jsx)("button",{onClick:()=>k(Math.max(1,C-1)),children:(0,fi.jsx)(u.QLg,{})}),(0,fi.jsx)("span",{children:C}),(0,fi.jsx)("button",{onClick:()=>k(C+1),children:(0,fi.jsx)(u.GGD,{})})]}),(0,fi.jsxs)(at,{onClick:()=>{if(null!==i&&void 0!==i&&i.id&&null!==t&&void 0!==t&&t.id){var e,r;const o=(null===i||void 0===i||null===(e=i.branches)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.id)||null;(0,d.trackAddToCart)(i.id,t.id,t.category_id,C,o,{name:D,price:z})}y((0,l.bE)(o,t,C,E,z,A,void 0)),w&&w(a?`${D} \u0623\u064f\u0636\u064a\u0641 \u0644\u0644\u0633\u0644\u0629`:`${D} added to cart`,"success"),m()},children:[b("Add to Cart","\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629")," \u2014 ",(0,c.T)(O,s)]})]})]})})}},13332:(e,t,i)=>{i.d(t,{n:()=>p});var r=i(82483),o=i(85537),n=i(68116),a=i(14159),s=i(48917),l=class extends a.Q{#e;#t=void 0;#i;#r;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#o()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){const t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,s.f8)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#i,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,s.EN)(t.mutationKey)!==(0,s.EN)(this.options.mutationKey)?this.reset():"pending"===this.#i?.state.status&&this.#i.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#i?.removeObserver(this)}onMutationUpdate(e){this.#o(),this.#n(e)}getCurrentResult(){return this.#t}reset(){this.#i?.removeObserver(this),this.#i=void 0,this.#o(),this.#n()}mutate(e,t){return this.#r=t,this.#i?.removeObserver(this),this.#i=this.#e.getMutationCache().build(this.#e,this.options),this.#i.addObserver(this),this.#i.execute(e)}#o(){const e=this.#i?.state??(0,o.$)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#n(e){n.j.batch((()=>{if(this.#r&&this.hasListeners()){const t=this.#t.variables,i=this.#t.context;"success"===e?.type?(this.#r.onSuccess?.(e.data,t,i),this.#r.onSettled?.(e.data,null,t,i)):"error"===e?.type&&(this.#r.onError?.(e.error,t,i),this.#r.onSettled?.(void 0,e.error,t,i))}this.listeners.forEach((e=>{e(this.#t)}))}))}},d=i(42186),c=i(33857);function p(e,t){const i=(0,d.jE)(t),[o]=r.useState((()=>new l(i,e)));r.useEffect((()=>{o.setOptions(e)}),[o,e]);const a=r.useSyncExternalStore(r.useCallback((e=>o.subscribe(n.j.batchCalls(e))),[o]),(()=>o.getCurrentResult()),(()=>o.getCurrentResult())),s=r.useCallback(((e,t)=>{o.mutate(e,t).catch(c.l)}),[o]);if(a.error&&(0,c.G)(o.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:s,mutateAsync:a.mutate}}},38:(e,t,i)=>{function r(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)e[r]=i[r]}return e}i.d(t,{A:()=>o});var o=function e(t,i){function o(e,o,n){if("undefined"!==typeof document){"number"===typeof(n=r({},i,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var s in n)n[s]&&(a+="; "+s,!0!==n[s]&&(a+="="+n[s].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+a}}return Object.create({set:o,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var i=document.cookie?document.cookie.split("; "):[],r={},o=0;o<i.length;o++){var n=i[o].split("="),a=n.slice(1).join("=");try{var s=decodeURIComponent(n[0]);if(r[s]=t.read(a,s),e===s)break}catch(l){}}return e?r[e]:r}},remove:function(e,t){o(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);
//# sourceMappingURL=3098.befaa316.chunk.js.map