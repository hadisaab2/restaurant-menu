import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FlyingItem } from "./styles";

export default function CartAnimation({ 
  trigger, 
  sourceElement, 
  onComplete 
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (!trigger || !sourceElement) return;

    // Get source position
    const sourceRect = sourceElement.getBoundingClientRect();
    const sourceX = sourceRect.left + sourceRect.width / 2;
    const sourceY = sourceRect.top + sourceRect.height / 2;

    // Get target position (cart icon in tab bar)
    const cartTabIcon = document.getElementById("cart-tab-icon");
    if (!cartTabIcon) {
      // Fallback: find cart tab by data attribute
      const tabBar = document.querySelector('[data-tab-bar]');
      if (tabBar) {
        const tabs = tabBar.querySelectorAll('button');
        tabs.forEach((tab) => {
          const icon = tab.querySelector('[data-icon="cart"]');
          if (icon) {
            const tabRect = tab.getBoundingClientRect();
            const targetX = tabRect.left + tabRect.width / 2;
            const targetY = tabRect.top + tabRect.height / 2;
            
            setAnimationData({
              startX: sourceX,
              startY: sourceY,
              endX: targetX,
              endY: targetY,
            });
            setIsAnimating(true);
            return;
          }
        });
      }
      return;
    }

    const targetRect = cartTabIcon.getBoundingClientRect();
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2;

    setAnimationData({
      startX: sourceX,
      startY: sourceY,
      endX: targetX,
      endY: targetY,
    });
    setIsAnimating(true);

    // Reset after animation completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setAnimationData(null);
      if (onComplete) {
        onComplete();
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [trigger, sourceElement, onComplete]);

  if (!isAnimating || !animationData) return null;

  return createPortal(
    <FlyingItem
      style={{
        '--start-x': `${animationData.startX}px`,
        '--start-y': `${animationData.startY}px`,
        '--end-x': `${animationData.endX}px`,
        '--end-y': `${animationData.endY}px`,
      }}
    />,
    document.body
  );
}
