import { useState, useEffect, useRef } from "react";

/**
 * Detects browser bottom toolbar height (e.g., Samsung Internet)
 * using the Visual Viewport API and returns extra bottom offset needed.
 * Debounced to prevent jittery re-renders during fast scrolling.
 */
export default function useBrowserBottomOffset() {
  const [offset, setOffset] = useState(0);
  const timerRef = useRef(null);
  const lastOffset = useRef(0);

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    const update = () => {
      const bottom = Math.round(window.innerHeight - vv.height - vv.offsetTop);
      const newOffset = Math.max(0, bottom);

      // Only update if the offset actually changed significantly (> 5px)
      // and debounce to avoid jitter during fast scroll
      if (Math.abs(newOffset - lastOffset.current) > 5) {
        lastOffset.current = newOffset;
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setOffset(newOffset);
        }, 100);
      }
    };

    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return offset;
}
