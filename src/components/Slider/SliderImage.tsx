"use client";
import { CldImage } from "next-cloudinary";

const SliderImage = () => {
  return (
    <CldImage
      width="600"
      height="600"
      src="roqui_art/artworks/featured_artworks/tol0dz87hsycbhh50dca"
      alt="Roy and Raul"
      crop="pad"
      sizes="100vw"
    />
  );
};

export default SliderImage;
