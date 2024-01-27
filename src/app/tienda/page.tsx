import ObrasDisponibles from "@/components/Home/ObrasDisponibles";
import TiendaMenu from "@/components/Tienda/TiendaMenu";
import React from "react";

export default function Tienda() {
  return (
    <main className="relative w-full">
      <TiendaMenu />
      <ObrasDisponibles />
    </main>
  );
}
