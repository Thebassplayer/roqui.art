import React from "react";
import RoquiArtLogo from "../RoquiArtLogo/RoquiArtLogo";

const TiendaHeader = () => {
  return (
    <div className="sticky top-0 grid h-[6rem] w-full grid-cols-3 items-center justify-center bg-lightBlue">
      <RoquiArtLogo />
      <div className="flex rounded-full bg-light">
        <input
          type="text"
          placeholder="¿Que estas buscando?"
          className="grow rounded-l-full border-none"
        />
        <button className="px-3">BUSCAR</button>
      </div>
    </div>
  );
};

export default TiendaHeader;
