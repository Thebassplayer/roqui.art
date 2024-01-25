import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-5 bg-dark">
      <div className="col-span-1 text-light flex items-center justify-center">
        <h2 className="font-medium">Categorias</h2>
      </div>
      <div className="col-span-1 text-light flex items-center justify-center">
        <h2 className="font-medium">Ayuda</h2>
      </div>
      <div className="col-span-1 text-light flex items-center justify-center">
        <h2 className="font-medium">Contactame</h2>
      </div>
      <div className="col-span-2 text-light flex items-center justify-center">
        <h2 className="font-medium">Seguime en mis Redes</h2>
      </div>
    </div>
  );
};

export default Footer;
