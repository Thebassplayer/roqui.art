import Image from "next/image";
import React from "react";

type ObrasDestacadasProps = {
  numberOfPics: number;
};

const numberOfPics = 3;

const ObrasDestacadas = ({ numberOfPics }: ObrasDestacadasProps) => {
  return (
    <section className="h-3/4 w-full">
      <figure>
        <Image></Image>
      </figure>
    </section>
  );
};

export default ObrasDestacadas;
