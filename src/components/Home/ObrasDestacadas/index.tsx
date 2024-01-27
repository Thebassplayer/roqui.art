"use client";
import { Obra } from "@/types";
import { CldImage } from "next-cloudinary";
import React from "react";

const ObrasDestacadasImages: Obra[] = [
  {
    publicId: "/roqui_art/artworks/obras_destacadas/cha7rnpkutr1svefi5h5",
    alt: "una fotografia de la obra",
  },
  {
    publicId: "/roqui_art/artworks/obras_destacadas/huqy1ojszq4iegfm8iu3",
    alt: "una fotografia de la obra",
  },
  {
    publicId: "/roqui_art/artworks/obras_destacadas/r8a3pjqfkdapquc1zk7z",
    alt: "una fotografia de la obra",
  },
];

const ObrasDestacadas = () => {
  return (
    <section className="w-full">
      <h1 className="text-center uppercase md:py-10">Destacadas</h1>
      <div className="grid h-full w-full grid-cols-3 justify-evenly">
        {ObrasDestacadasImages.map((obra) => {
          return (
            <figure
              key={obra.publicId}
              className="mx-auto flex h-full w-full items-center justify-center md:py-10"
            >
              <CldImage
                width="600"
                height="600"
                src={obra.publicId}
                alt={obra.alt}
                crop="pad"
                sizes="100vw"
              />
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default ObrasDestacadas;
