import { useRef, useState, useEffect, useCallback } from "react";
import { useScroll, useTransform, useSpring, useMotionValue, useInView } from "framer-motion";

/* ─── ANIMATION VARIANTS ─────────────────────────────── */

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.07 },
  }),
};

export const fadeBlur = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 },
  }),
};

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.07 },
  }),
};

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.07 },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.07 },
  }),
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/* ─── CUSTOM HOOKS ────────────────────────────────────── */

export function useParallax(speed = 0.5) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);
  return { ref, y };
}

export function useMagnetic(strength = 0.3) {
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });
  const ref = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      x.set(distX * strength);
      y.set(distY * strength);
    },
    [strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, x, y, handleMouseMove, handleMouseLeave };
}

export function useMousePosition(ref) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      setPosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, [ref]);

  return position;
}

export function useCursorGlow(ref) {
  const [style, setStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setStyle({
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(87,0,255,0.06), transparent 40%)`,
      });
    };

    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => {
      setIsHovered(false);
      setStyle({});
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref]);

  return { glowStyle: style, isHovered };
}

export function useCountUp(target, { duration = 1600, delay = 0, started = false } = {}) {
  const [count, setCount] = useState(0);
  const reduced = useRef(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (!started) return;
    if (reduced.current) {
      setCount(target);
      return;
    }

    let raf;
    const startAt = performance.now() + delay;

    function tick(now) {
      if (now < startAt) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min((now - startAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration, delay]);

  return count;
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function useSectionInView(margin = "-80px") {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}
