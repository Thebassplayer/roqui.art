import TiendaHeader from "@/components/Tienda/TiendaHeader";
import React from "react";

const Tiendalayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-full w-full">
      <TiendaHeader />
      {children}
    </div>
  );
};

export default Tiendalayout;
