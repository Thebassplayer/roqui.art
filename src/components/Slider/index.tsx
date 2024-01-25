"use client";
import React, { useEffect, useRef } from "react";

interface SliderProps {
  velocity?: number;
}

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
      className="h-[500px] w-full overflow-hidden flex flex-nowrap text-center"
      id="slider"
      ref={sliderRef}
    >
      <div className="bg-blue-600 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-md">ROQI</h2>
      </div>
      <div className="bg-pink-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-md">ART</h2>
      </div>
      <div className="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-md">SPACE</h2>
      </div>
    </div>
  );
};

export default Slider;
