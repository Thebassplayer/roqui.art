import React from "react";

const TiendaMenuButtons = [
  {
    text: "Pinturas",
  },
  {
    text: "Ceramica",
  },
  {
    text: "Marcos",
  },
  {
    text: "Encarga tu Obra",
  },
];

const TiendaMenu = () => {
  return (
    <div className="flex w-full flex-row justify-evenly">
      {TiendaMenuButtons.map((button, index) => {
        return (
          <button key={index} className="p-6 uppercase">
            {button.text}
          </button>
        );
      })}
    </div>
  );
};

export default TiendaMenu;
