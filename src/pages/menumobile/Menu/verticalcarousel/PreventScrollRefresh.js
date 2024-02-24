import React, { useEffect } from 'react';

const PreventScrollRefresh = () => {
  useEffect(() => {
    const handleTouchMove = (event) => {
      if (event.target.closest('.CarouselContainer')) {
        event.preventDefault();
      }
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null;
};

export default PreventScrollRefresh;