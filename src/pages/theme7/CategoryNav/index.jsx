import React, { useEffect, useRef } from "react";

export default function CategoryNav({
  categories,
  activeCategory,
  setActiveCategory,
  getCategoryName,
  accentColor,
}) {
  const scrollRef = useRef(null);
  const pillRefs = useRef({});

  // Scroll-spy: detect which category section is in view
  useEffect(() => {
    const observers = [];
    categories.forEach((cat) => {
      const el = document.getElementById(`category-${cat.id}`);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveCategory(cat.id);
          }
        },
        { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [categories, setActiveCategory]);

  // Scroll active pill into view
  useEffect(() => {
    if (activeCategory && pillRefs.current[activeCategory] && scrollRef.current) {
      const pill = pillRefs.current[activeCategory];
      const container = scrollRef.current;
      const pillLeft = pill.offsetLeft;
      const pillWidth = pill.offsetWidth;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        left: pillLeft - containerWidth / 2 + pillWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeCategory]);

  const scrollToCategory = (catId) => {
    setActiveCategory(catId);
    const el = document.getElementById(`category-${catId}`);
    if (el) {
      const offset = 110; // header + nav height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (!categories.length) return null;

  return (
    <div
      id="menu-start"
      className="sticky top-20 z-[100] bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06]"
    >
      <div
        ref={scrollRef}
        className="max-w-7xl mx-auto px-4 flex gap-2 py-3 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              ref={(el) => (pillRefs.current[cat.id] = el)}
              onClick={() => scrollToCategory(cat.id)}
              className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap"
              style={
                isActive
                  ? {
                      backgroundColor: accentColor,
                      color: "#000",
                      borderColor: accentColor,
                    }
                  : {
                      backgroundColor: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.5)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }
              }
            >
              {getCategoryName(cat)}
            </button>
          );
        })}
      </div>
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}
