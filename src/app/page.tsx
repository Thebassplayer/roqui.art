import Caroussel from "@/components/Caroussel";
import HomeHeader from "@/components/Home/HomeHeader";
import HomeMenu from "@/components/Home/HomeMenu";
import ObrasDestacadas from "@/components/Home/ObrasDestacadas";
import ObrasDisponibles from "@/components/Home/ObrasDisponibles";

export default function Home() {
  return (
    <main className="w-full">
      <HomeHeader />
      <HomeMenu />
      <Caroussel />
      <ObrasDestacadas />
      <ObrasDisponibles />
    </main>
  );
}
