"use client";
import { CldImage } from "next-cloudinary";

type SliderImageProps = {
  PublicId: string;
};

const SliderImage = ({ PublicId }: SliderImageProps) => {
  return (
    <CldImage
      width="600"
      height="600"
      src={PublicId}
      alt="Roy and Raul"
      crop="pad"
      sizes="100vw"
    />
  );
};

export default SliderImage;
