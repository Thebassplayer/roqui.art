import ObrasDisponibles from "@/components/Home/ObrasDisponibles";
import TiendaHeader from "@/components/Tienda/TiendaHeader";
import TiendaMenu from "@/components/Tienda/TiendaMenu";
import React from "react";

export default function Tienda() {
  return (
    <main className="relative w-full">
      <TiendaHeader />
      <TiendaMenu />
      <ObrasDisponibles />
    </main>
  );
}
