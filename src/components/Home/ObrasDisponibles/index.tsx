"use client";
import React from "react";
import ObraCard from "./ObraCard";
import { Obra } from "@/types";

const ObrasDisponiblesImages: Obra[] = [
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

const ObrasDisponibles = () => {
  return (
    <section className="w-full">
      <h1 className="text-center uppercase md:py-10">Obras Disponibles</h1>
      <div className="grid h-full w-full grid-cols-3 grid-rows-2 justify-evenly">
        {ObrasDisponiblesImages.map((obra) => (
          <ObraCard obra={obra} key={obra.publicId} />
        ))}
      </div>
    </section>
  );
};

export default ObrasDisponibles;
