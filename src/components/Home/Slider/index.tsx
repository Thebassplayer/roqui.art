"use client";
import React, { useEffect, useRef } from "react";
import SliderImage from "./SliderImage";

interface SliderProps {
  velocity?: number;
}

const SliderImages = [
  "roqui_art/artworks/featured_artworks/tol0dz87hsycbhh50dca",
];

const Slider: React.FC<SliderProps> = ({ velocity = 2000 }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const moveSlide = () => {
      if (!slider) return;

      const max = slider.scrollWidth - slider.clientWidth;
      const left = slider.clientWidth;

      // Check if the next scroll position is beyond the maximum width
      const nextPosition = slider.scrollLeft + left;
      const shouldReset = nextPosition >= max;

      if (shouldReset) {
        // If the next position is beyond the maximum, reset to the beginning
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Otherwise, scroll to the next position
        slider.scrollBy({ left, behavior: "smooth" });
      }

      setTimeout(moveSlide, velocity);
    };

    // Store the ID returned by setTimeout
    const timeoutId = setTimeout(moveSlide, velocity);

    // Clean up the interval when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [velocity]);

  return (
    <div
      className="flex h-[600px] w-full flex-nowrap overflow-hidden text-center"
      id="slider"
      ref={sliderRef}
    >
      <div className="flex w-full flex-none flex-col items-center justify-center space-y-4 bg-blue-600 text-white">
        <h2 className="max-w-md text-4xl">ROQI</h2>
      </div>
      <div className="flex w-full flex-none flex-col items-center justify-center space-y-4 bg-pink-400 text-white">
        <h2 className="max-w-md text-4xl">ART</h2>
      </div>
      <div className="flex w-full flex-none flex-col items-center justify-center space-y-4">
        <SliderImage PublicId={SliderImages[0]} />
      </div>
    </div>
  );
};

export default Slider;
