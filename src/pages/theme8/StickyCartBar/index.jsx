import React from "react";
import styled from "styled-components";
import { t } from "../i18n";
import { getCurrencySymbol } from "../../../utilities/getCurrencySymbol";

const Bar = styled.div`
  position: fixed;
  bottom: var(--bnav-h);
  left: 0;
  right: 0;
  z-index: 85;
  height: var(--cart-bar-h);
  padding: 0 var(--sp-4);
  background: var(--c-primary);
  border-radius: var(--r-lg) var(--r-lg) 0 0;
  display: ${p => p.$show ? "flex" : "none"};
  align-items: center;
  @media (min-width: 768px) { display: none; }
`;

const Btn = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  color: var(--c-text-inv);
  cursor: pointer;
  font-family: inherit;
`;

const Left = styled.span`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
`;

const Count = styled.span`
  width: 24px;
  height: 24px;
  border-radius: var(--r-full);
  background: rgba(255,255,255,0.2);
  font-size: var(--text-xs);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  font-size: var(--text-base);
  font-weight: 700;
`;

const Total = styled.span`
  font-size: var(--text-base);
  font-weight: 700;
`;

export default function StickyCartBar({ cartCount, cartTotal, currency, onViewCart, activeLanguage }) {
  const sym = getCurrencySymbol(currency);
  return (
    <Bar $show={cartCount > 0}>
      <Btn onClick={onViewCart}>
        <Left>
          <Count>{cartCount}</Count>
          <Label>{t("cart.view", activeLanguage)}</Label>
        </Left>
        <Total>{sym}{cartTotal?.toFixed(2)}</Total>
      </Btn>
    </Bar>
  );
}
