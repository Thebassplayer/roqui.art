"use client";
import { CldImage } from "next-cloudinary";

type SliderImageProps = {
  publicId: string;
};

const SliderImage = ({ publicId }: SliderImageProps) => {
  return (
    <CldImage
      width="600"
      height="600"
      src={publicId}
      alt="Roy and Raul"
      crop="pad"
      sizes="100vw"
    />
  );
};

export default SliderImage;
