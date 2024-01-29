"use client";
import { CldImage } from "next-cloudinary";

const obra = {
  name: "Laberinto Rosa",
  year: "2023",
  material: "Acrílico sobre tela",
  size: "153 x 90 cm",
  price: "150000",
  images: {
    main: {
      publicId: "roqui_art/artworks/obras/obra_1/ft5trxizsamw6exwegmo",
      alt: "Obra",
    },
    all: [
      {
        publicId: "roqui_art/artworks/obras/obra_1/ft5trxizsamw6exwegmo",
        alt: "Obra",
      },
      {
        publicId: "roqui_art/artworks/obras/obra_1/ft5trxizsamw6exwegmo",
        alt: "Obra",
      },
      {
        publicId: "roqui_art/artworks/obras/obra_1/ft5trxizsamw6exwegmo",
        alt: "Obra",
      },
      {
        publicId: "roqui_art/artworks/obras/obra_1/ft5trxizsamw6exwegmo",
        alt: "Obra",
      },
    ],
  },
};

const Obra = () => {
  const { main, all } = obra.images;
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-40 p-40">
      <div className="center relative col-span-2 row-span-2 flex aspect-square h-full items-center justify-center">
        <CldImage src={main.publicId} sizes="100vw" alt={main.alt} fill />
      </div>
      {all.map((artwork, index) => {
        return (
          <div
            key={index}
            className="relative col-span-1 row-span-1 flex aspect-square items-center justify-center"
          >
            <CldImage
              fill
              src={artwork.publicId}
              alt={artwork.alt}
              crop="fill"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Obra;
