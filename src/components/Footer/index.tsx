import { InstagramIcon, PinterestIcon } from "@/assets/Icons";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-5 items-start bg-dark px-6 py-12">
      <div className="col-span-1 flex flex-col items-center justify-center text-light">
        <h2 className="mb-8 font-medium">Categorias</h2>
        <ul>
          <li className="my-3">Obras Terminadas</li>
          <li className="my-3">Ceramica</li>
          <li className="my-3">Encarga tu Obra</li>
          <li className="my-3">Productos Disponibles</li>
        </ul>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center text-light">
        <h2 className="mb-8 font-medium">Ayuda</h2>
        <ul>
          <li className="my-3">Como Comprar</li>
          <li className="my-3">Ayuda</li>
          <li className="my-3">Preguntas Frecuentes</li>
          <li className="my-3">Medios de Pago</li>
        </ul>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center text-light">
        <h2 className="mb-8 font-medium">Contactame</h2>
        <ul>
          <li className="my-3">11-3344-9591</li>
          <li className="my-3">rominagquiroga@gmail.com</li>
        </ul>
      </div>
      <div className="col-span-2 flex flex-col items-center justify-center text-light">
        <h2 className="mb-8 font-medium">Seguime en mis Redes</h2>
        <ul className="flex flex-col">
          <li>
            <div className="my-3 flex justify-evenly gap-2">
              <PinterestIcon />
              <InstagramIcon />
            </div>
          </li>
          <li className="my-3">rominagquiroga@gmail.com</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
