import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changelanuage } from '../../../redux/restaurant/restaurantActions';
import { IoShareSocialOutline } from 'react-icons/io5';

/* ─── Bar ────────────────────────────────────────────────────── */

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  gap: 10px;
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};
  transition:
    background    0.35s ease,
    box-shadow    0.35s ease,
    backdrop-filter 0.35s ease;

  ${props => props.$scrolled ? css`
    background: var(--theme-header-scrolled-bg, rgba(255, 255, 255, 0.92));
    box-shadow:
      0 1px 0 rgba(0, 0, 0, 0.06),
      0 4px 24px rgba(0, 0, 0, 0.07);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
  ` : css`
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  `}
`;

/* ─── Logo + name ────────────────────────────────────────────── */

const Identity = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

const LogoWrap = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  /* Subtle ring */
  box-shadow: 0 0 0 1.5px rgba(255,255,255,0.5), 0 2px 8px rgba(0,0,0,0.18);
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LogoPlaceholder = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.18);
  border: 1.5px solid rgba(255, 255, 255, 0.22);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.3px;
`;

const Name = styled.span`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.3s ease;
  /* Over hero: white + shadow; scrolled: adaptive text over card bg */
  color: ${props => props.$scrolled
    ? 'var(--theme-header-scrolled-text, var(--theme-card-text, #111))'
    : '#ffffff'
  };
  text-shadow: ${props => props.$scrolled
    ? 'none'
    : '0 1px 6px rgba(0,0,0,0.45)'
  };
`;

/* ─── Actions ────────────────────────────────────────────────── */

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

/* Pill-shaped language toggle */
const LangPill = styled.div`
  display: flex;
  align-items: center;
  border-radius: 22px;
  padding: 3px;
  gap: 2px;
  /* On hero: glass pill; scrolled: language bg */
  background: ${props => props.$scrolled
    ? 'var(--theme-language-bg, #333)'
    : 'rgba(255,255,255,0.15)'
  };
  border: 1px solid ${props => props.$scrolled
    ? 'transparent'
    : 'rgba(255,255,255,0.28)'
  };
  backdrop-filter: ${props => props.$scrolled ? 'none' : 'blur(8px)'};
  -webkit-backdrop-filter: ${props => props.$scrolled ? 'none' : 'blur(8px)'};
  transition: background 0.3s ease;
`;

const LangBtn = styled.button`
  padding: 4px 11px;
  border-radius: 18px;
  border: none;
  font-size: 11.5px;
  font-weight: 700;
  cursor: pointer;
  min-height: 26px;
  letter-spacing: 0.2px;
  color: var(--theme-language-text, #fff);
  background: ${props => props.$active ? 'rgba(255,255,255,0.22)' : 'transparent'};
  transition: background 0.2s ease;
`;

/* Square-round share / icon button — matches lang pill visual weight */
const GlassBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid ${props => props.$scrolled
    ? 'rgba(0,0,0,0.08)'
    : 'rgba(255,255,255,0.28)'
  };
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 17px;
  min-width: 34px;
  transition: background 0.2s ease, border-color 0.3s ease;
  background: ${props => props.$scrolled
    ? 'rgba(0,0,0,0.05)'
    : 'rgba(255,255,255,0.15)'
  };
  color: ${props => props.$scrolled
    ? 'var(--theme-header-scrolled-text, var(--theme-card-text, #333))'
    : '#ffffff'
  };
  backdrop-filter: ${props => props.$scrolled ? 'none' : 'blur(8px)'};
  -webkit-backdrop-filter: ${props => props.$scrolled ? 'none' : 'blur(8px)'};

  &:active { opacity: 0.65; }
`;

/* ─── Component ──────────────────────────────────────────────── */

export default function ElegantHeader({ popupHandler, scrolled = false }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const subdomain = window.location.hostname.split('.')[0];
  const restaurantName =
    subdomain !== 'menugic' && subdomain !== 'localhost' && subdomain !== 'www'
      ? subdomain : paramRestaurantName;

  const dispatch       = useDispatch();
  const restaurant     = useSelector(state => state.restaurant?.[restaurantName]);
  const activeLanguage = restaurant?.activeLanguage || 'en';
  const isRTL          = activeLanguage === 'ar';
  const showLang       = restaurant?.languages === 'en&ar';

  const logoUrl = restaurant?.logoURL
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
    : null;

  const handleLang = lang =>
    dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));

  const initials = (restaurant?.name || '').trim().slice(0, 2).toUpperCase();

  return (
    <Bar $rtl={isRTL} $scrolled={scrolled}>
      <Identity>
        {logoUrl
          ? <LogoWrap><LogoImg src={logoUrl} alt={restaurant?.name || ''} /></LogoWrap>
          : <LogoPlaceholder>{initials || '🍽'}</LogoPlaceholder>
        }
        <Name $scrolled={scrolled}>{restaurant?.name}</Name>
      </Identity>

      <Actions>
        {showLang && (
          <LangPill $scrolled={scrolled}>
            <LangBtn $active={activeLanguage === 'en'} onClick={() => handleLang('en')}>En</LangBtn>
            <LangBtn $active={activeLanguage === 'ar'} onClick={() => handleLang('ar')}>Ar</LangBtn>
          </LangPill>
        )}
        <GlassBtn
          $scrolled={scrolled}
          onClick={() => { window.history.pushState({}, ''); popupHandler('share'); }}
          aria-label="Share"
        >
          <IoShareSocialOutline />
        </GlassBtn>
      </Actions>
    </Bar>
  );
}
