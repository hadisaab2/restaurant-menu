import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  SliderContainer,
  SliderTrack,
  SlideCard,
  SlideImage,
  SliderDots,
  Dot,
  SliderArrows,
  ArrowButton,
  SlideOverlay,
} from "./SliderStyles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider({ images, activeLanguage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const autoPlayTimer = useRef(null);

  const totalSlides = images?.length || 0;

  // Calculate scroll position for a given index
  const getScrollPosition = useCallback((index) => {
    if (!trackRef.current) return 0;
    const track = trackRef.current;
    const containerWidth = track.offsetWidth;
    const cardWidth = containerWidth * 0.75; // 75% card width
    const gap = 16;
    return index * (cardWidth + gap);
  }, []);

  // Scroll to specific slide
  const scrollToSlide = useCallback((index, smooth = true) => {
    if (!trackRef.current) return;
    const scrollPosition = getScrollPosition(index);
    trackRef.current.scrollTo({
      left: scrollPosition,
      behavior: smooth ? "smooth" : "auto",
    });
  }, [getScrollPosition]);

  // Reset auto-play timer
  const resetAutoPlay = useCallback(() => {
    if (autoPlayTimer.current) {
      clearTimeout(autoPlayTimer.current);
    }
    setIsAutoPlaying(false);
    autoPlayTimer.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying || !images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        scrollToSlide(next);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images, scrollToSlide]);

  // Initial scroll to first slide
  useEffect(() => {
    if (trackRef.current && images?.length > 0) {
      setTimeout(() => scrollToSlide(0, false), 50);
    }
  }, [images, scrollToSlide]);

  // Handle scroll to update current index
  const handleScroll = useCallback(() => {
    if (!trackRef.current || isDragging.current) return;
    
    const track = trackRef.current;
    const containerWidth = track.offsetWidth;
    const cardWidth = containerWidth * 0.75;
    const gap = 16;
    const scrollLeft = track.scrollLeft;
    
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    const clampedIndex = Math.max(0, Math.min(newIndex, totalSlides - 1));
    
    if (clampedIndex !== currentIndex) {
      setCurrentIndex(clampedIndex);
    }
  }, [currentIndex, totalSlides]);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentIndex(index);
    scrollToSlide(index);
    resetAutoPlay();
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % totalSlides;
    goToSlide(newIndex);
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftStart.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
    trackRef.current.style.scrollBehavior = "auto";
    resetAutoPlay();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    if (!trackRef.current) return;
    isDragging.current = false;
    trackRef.current.style.cursor = "grab";
    trackRef.current.style.scrollBehavior = "smooth";
    
    // Snap to nearest slide
    setTimeout(() => {
      handleScroll();
      const nearestIndex = currentIndex;
      scrollToSlide(nearestIndex);
    }, 50);
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      handleMouseUp();
    }
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - trackRef.current.offsetLeft;
    scrollLeftStart.current = trackRef.current.scrollLeft;
    trackRef.current.style.scrollBehavior = "auto";
    resetAutoPlay();
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleTouchEnd = () => {
    if (!trackRef.current) return;
    isDragging.current = false;
    trackRef.current.style.scrollBehavior = "smooth";
    
    setTimeout(() => {
      handleScroll();
      scrollToSlide(currentIndex);
    }, 50);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, totalSlides]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <SliderContainer>
      <SliderTrack
        ref={trackRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <SlideCard
            key={image.id || index}
            $isActive={index === currentIndex}
            onClick={() => !isDragging.current && goToSlide(index)}
          >
            <SlideImage
              src={`https://storage.googleapis.com/ecommerce-bucket-testing/${image.url}`}
              alt={`Slide ${index + 1}`}
              draggable={false}
            />
            <SlideOverlay $isActive={index === currentIndex} />
          </SlideCard>
        ))}
      </SliderTrack>

      {totalSlides > 1 && (
        <>
          <SliderArrows>
            <ArrowButton
              onClick={goToPrevious}
              $position="left"
              activeLanguage={activeLanguage}
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </ArrowButton>
            <ArrowButton
              onClick={goToNext}
              $position="right"
              activeLanguage={activeLanguage}
              aria-label="Next slide"
            >
              <FaChevronRight />
            </ArrowButton>
          </SliderArrows>

          <SliderDots>
            {images.map((_, index) => (
              <Dot
                key={index}
                $active={index === currentIndex}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </SliderDots>
        </>
      )}
    </SliderContainer>
  );
}
