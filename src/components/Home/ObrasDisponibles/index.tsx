"use client";
import React from "react";
import ObraCard from "./ObraCard";
import { Obra } from "@/types";

const ObrasDisponiblesImages: Obra[] = [
  {
    publicId: "roqui_art/artworks/obras_disponibles/sfitgeqkusfdoycjtczp",
    alt: "una fotografia de la obra",
  },
  {
    publicId: "roqui_art/artworks/obras_disponibles/tbxasmk0m3woigjc9lsg",
    alt: "una fotografia de la obra",
  },
  {
    publicId: "roqui_art/artworks/obras_disponibles/lhtwapazit1tjgoxhqdx",
    alt: "una fotografia de la obra",
  },
  {
    publicId: "roqui_art/artworks/obras_disponibles/pmazjgudu2mmozmfmjlf",
    alt: "una fotografia de la obra",
  },
  {
    publicId: "roqui_art/artworks/obras_disponibles/zi9brxq5mu3djyidenxq",
    alt: "una fotografia de la obra",
  },
  {
    publicId: "roqui_art/artworks/obras_disponibles/itbc16eiybvbrmszallt",
    alt: "una fotografia de la obra",
  },
];

const ObrasDisponibles = () => {
  return (
    <section className="my-10 w-full">
      <h1 className="text-center uppercase md:py-10">Obras Disponibles</h1>
      <div className="grid h-full w-full grid-rows-2 justify-evenly  gap-6 md:grid-cols-3 lg:grid-cols-4">
        {ObrasDisponiblesImages.map((obra) => (
          <ObraCard obra={obra} key={obra.publicId} />
        ))}
      </div>
    </section>
  );
};

export default ObrasDisponibles;
