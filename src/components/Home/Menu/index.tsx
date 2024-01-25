import React from "react";

const HomeMenuButtons = [
  {
    title: "obras terminadas",
    link: "/obras",
  },
  {
    title: "Comprar Ceramica",
    link: "/ceramica",
  },
  {
    title: "Encarga tu obra",
    link: "/encargos",
  },
  {
    title: "Productos Disponibles",
    link: "/productos",
  },
  {
    title: "Contacto",
    link: "/contacto",
  },
];

const HomeMenu = () => {
  return (
    <div className="w-full flex flex-row justify-evenly">
      {HomeMenuButtons.map((button, index) => {
        return (
          <button key={index} className="p-6 uppercase">
            {button.title}
          </button>
        );
      })}
    </div>
  );
};

export default HomeMenu;
