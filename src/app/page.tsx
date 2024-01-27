import Caroussel from "@/components/Caroussel";
import HomeMenu from "@/components/Home/Menu";
import ObrasDestacadas from "@/components/Home/ObrasDestacadas";
import ObrasDisponibles from "@/components/Home/ObrasDisponibles";

export default function Home() {
  return (
    <main className="w-full">
      <HomeMenu />
      <Caroussel />
      <ObrasDestacadas />
      <ObrasDisponibles />
    </main>
  );
}
