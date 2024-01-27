import Caroussel from "@/components/Caroussel";
import HomeMenu from "@/components/Home/Menu";
import ObrasDestacadas from "@/components/Home/ObrasDestacadas";

export default function Home() {
  return (
    <main className="w-full">
      <HomeMenu />
      <Caroussel />
      <ObrasDestacadas />
    </main>
  );
}
