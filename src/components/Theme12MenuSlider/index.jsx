import React from "react";
import Slider from "../../pages/theme3/HomePage/Slider";
import {
  SectionRoot,
  SectionGlow,
  SectionFrame,
  SliderSlot,
} from "./styles";

/**
 * Theme 1 & 2: theme3-style promo slider above the menu, with a refined frame.
 */
export default function Theme12MenuSlider({
  images,
  activeLanguage = "en",
  variant = "theme1",
}) {
  if (!images?.length) return null;

  return (
    <SectionRoot $variant={variant} data-theme12-slider>
      <SectionGlow aria-hidden />
      <SectionFrame>
        <SliderSlot>
          <Slider images={images} activeLanguage={activeLanguage} />
        </SliderSlot>
      </SectionFrame>
    </SectionRoot>
  );
}
