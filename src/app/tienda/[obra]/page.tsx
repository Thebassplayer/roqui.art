"use client";
import { CldImage } from "next-cloudinary";

const obra = {
  publicId: "roqui_art/artworks/obras/obra_1/ft5trxizsamw6exwegmo",
  alt: "Obra",
};

const Obra = () => {
  return (
    <div className="-z-10 my-10 grid grid-cols-4 grid-rows-3 gap-10 px-10">
      <div className="center relative col-span-2 row-span-2 flex aspect-square h-full items-center justify-center">
        <CldImage src={obra.publicId} sizes="100vw" alt={obra.alt} fill />
      </div>
      <div className="relative col-span-1 col-start-3 row-span-1 flex aspect-square items-center justify-center">
        <CldImage fill src={obra.publicId} alt={obra.alt} crop="fill" />
      </div>
      <div className="relative col-span-1 col-start-4 row-span-1 flex aspect-square items-center justify-center">
        <CldImage fill src={obra.publicId} alt={obra.alt} crop="fill" />
      </div>
      <div className="relative col-span-1 col-start-3 row-start-2 flex aspect-square items-center justify-center">
        <CldImage fill src={obra.publicId} alt={obra.alt} crop="fill" />
      </div>
      <div className="relative col-span-1 col-start-4 row-start-2 flex aspect-square items-center justify-center">
        <CldImage fill src={obra.publicId} alt={obra.alt} crop="fill" />
      </div>
    </div>
  );
};

export default Obra;
