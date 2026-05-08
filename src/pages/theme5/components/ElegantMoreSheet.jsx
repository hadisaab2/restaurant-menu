import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changelanuage } from '../../../redux/restaurant/restaurantActions';
import {
  IoLocationOutline,
  IoShareSocialOutline,
  IoDownloadOutline,
  IoCloseOutline,
} from 'react-icons/io5';

const slideUp = keyframes`
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
`;

const Overlay = styled.div`
  display: ${props => props.$open ? 'block' : 'none'};
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1300;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

const Sheet = styled.div`
  display: ${props => props.$open ? 'flex' : 'none'};
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1301;
  background: var(--theme-popup-bg, #fff);
  border-radius: 24px 24px 0 0;
  padding-bottom: calc(16px + env(safe-area-inset-bottom));
  animation: ${slideUp} 0.28s cubic-bezier(0.32, 0.72, 0, 1);
  box-shadow: 0 -8px 40px rgba(0,0,0,0.14);
  max-height: 88vh;
  overflow-y: auto;
`;

const Handle = styled.div`
  width: 40px;
  height: 4px;
  background: rgba(0,0,0,0.12);
  border-radius: 2px;
  margin: 14px auto 4px;
  flex-shrink: 0;
`;

const SheetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px 14px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};
`;

const SheetTitle = styled.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: var(--theme-popup-text, #111);
  letter-spacing: -0.3px;
`;

const CloseBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0,0,0,0.07);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--theme-popup-text, #333);
  font-size: 17px;
  &:active { opacity: 0.6; }
`;

const MenuList = styled.div`
  padding: 8px 0 8px;
`;

const MenuItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--theme-popup-text, #111);
  font-size: 15px;
  font-weight: 500;
  text-align: ${props => props.$rtl ? 'right' : 'left'};
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};
  min-height: 54px;
  transition: background 0.15s;

  &:active { background: rgba(0,0,0,0.04); }
`;

const ItemIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(0,0,0,0.06);
  color: var(--theme-main, #333);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  flex-shrink: 0;
`;

const ItemLabel = styled.div`flex: 1;`;

const ItemTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--theme-popup-text, #111);
`;

const ItemSub = styled.div`
  font-size: 12px;
  color: var(--theme-popup-text, #888);
  opacity: 0.55;
  margin-top: 1px;
`;

const Divider = styled.div`
  height: 1px;
  margin: 0 20px;
  background: rgba(0,0,0,0.06);
`;

const LangSection = styled.div`
  padding: 14px 20px 4px;
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};
`;

const LangSectionLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--theme-popup-text, #888);
  opacity: 0.45;
  margin-bottom: 10px;
`;

const LangBtns = styled.div`
  display: flex;
  gap: 10px;
`;

const LangBtn = styled.button`
  flex: 1;
  padding: 12px;
  border-radius: 14px;
  border: 1.5px solid ${props => props.$active ? 'var(--theme-main, #333)' : 'rgba(0,0,0,0.1)'};
  background: ${props => props.$active ? 'var(--theme-main, #333)' : 'transparent'};
  color: ${props => props.$active ? 'var(--theme-popup-button-text, #fff)' : 'var(--theme-popup-text, #333)'};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  min-height: 48px;
  transition: all 0.18s ease;
`;

export default function ElegantMoreSheet({
  open,
  onClose,
  popupHandler,
  features = {},
  onInstall,
  deferredPrompt,
  activeLanguage = 'en',
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const subdomain = window.location.hostname.split('.')[0];
  const restaurantName =
    subdomain !== 'menugic' && subdomain !== 'localhost' && subdomain !== 'www'
      ? subdomain : paramRestaurantName;

  const dispatch   = useDispatch();
  const restaurant = useSelector(state => state.restaurant?.[restaurantName]);
  const isRTL      = activeLanguage === 'ar';
  const showLang   = restaurant?.languages === 'en&ar';

  useEffect(() => {
    const handlePop = () => { if (open) onClose(); };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, [open, onClose]);

  const handleLang = lang => {
    dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));
    onClose();
  };

  const doAction = action => {
    onClose();
    setTimeout(() => {
      window.history.pushState({}, '');
      popupHandler(action);
    }, 180);
  };

  return (
    <>
      <Overlay $open={open} onClick={onClose} />
      <Sheet $open={open}>
        <Handle />
        <SheetHeader $rtl={isRTL}>
          <SheetTitle>{isRTL ? 'المزيد' : 'More'}</SheetTitle>
          <CloseBtn onClick={onClose}><IoCloseOutline /></CloseBtn>
        </SheetHeader>

        <MenuList>
          <MenuItem $rtl={isRTL} onClick={() => doAction('location')}>
            <ItemIcon><IoLocationOutline /></ItemIcon>
            <ItemLabel>
              <ItemTitle>{isRTL ? 'الفروع والتواصل' : 'Branches & Contact'}</ItemTitle>
              <ItemSub>{isRTL ? 'أرقام الهاتف والمواقع' : 'Phone numbers & locations'}</ItemSub>
            </ItemLabel>
          </MenuItem>

          <Divider />

          <MenuItem $rtl={isRTL} onClick={() => doAction('share')}>
            <ItemIcon><IoShareSocialOutline /></ItemIcon>
            <ItemLabel>
              <ItemTitle>{isRTL ? 'مشاركة القائمة' : 'Share Menu'}</ItemTitle>
              <ItemSub>{isRTL ? 'أرسل رابط القائمة' : 'Send the menu link'}</ItemSub>
            </ItemLabel>
          </MenuItem>

          {features?.install_app && deferredPrompt && (
            <>
              <Divider />
              <MenuItem $rtl={isRTL} onClick={() => { onClose(); onInstall?.(); }}>
                <ItemIcon><IoDownloadOutline /></ItemIcon>
                <ItemLabel>
                  <ItemTitle>{isRTL ? 'تثبيت التطبيق' : 'Install App'}</ItemTitle>
                  <ItemSub>{isRTL ? 'وصول سريع من الشاشة الرئيسية' : 'Quick access from home screen'}</ItemSub>
                </ItemLabel>
              </MenuItem>
            </>
          )}
        </MenuList>

        {showLang && (
          <>
            <Divider />
            <LangSection $rtl={isRTL}>
              <LangSectionLabel>{isRTL ? 'اللغة' : 'Language'}</LangSectionLabel>
              <LangBtns>
                <LangBtn $active={activeLanguage === 'en'} onClick={() => handleLang('en')}>
                  English
                </LangBtn>
                <LangBtn $active={activeLanguage === 'ar'} onClick={() => handleLang('ar')}>
                  العربية
                </LangBtn>
              </LangBtns>
            </LangSection>
          </>
        )}
      </Sheet>
    </>
  );
}
