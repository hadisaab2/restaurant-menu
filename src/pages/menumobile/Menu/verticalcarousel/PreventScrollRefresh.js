import React, { useEffect } from 'react';

const PreventScrollRefresh = () => {
  useEffect(() => {
    const preventScrollRefresh = (event) => {
      event.preventDefault();
    };

    document.addEventListener('touchmove', preventScrollRefresh, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventScrollRefresh);
    };
  }, []);

  return null;
};

export default PreventScrollRefresh;
