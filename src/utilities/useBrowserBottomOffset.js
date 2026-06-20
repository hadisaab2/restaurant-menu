import { useState, useEffect } from "react";

/**
 * Detects browser bottom toolbar height (e.g., Samsung Internet)
 * using the Visual Viewport API and returns extra bottom offset needed.
 */
export default function useBrowserBottomOffset() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    const update = () => {
      // Bottom toolbar height = total window height - visual viewport height - top offset
      const bottom = Math.round(window.innerHeight - vv.height - vv.offsetTop);
      setOffset(Math.max(0, bottom));
    };

    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, []);

  return offset;
}
