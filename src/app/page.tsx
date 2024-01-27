import HomeMenu from "@/components/Home/Menu";
import ObrasDestacadas from "@/components/Home/ObrasDestacadas";
import Slider from "@/components/Home/Slider";

export default function Home() {
  return (
    <main className="w-full">
      <HomeMenu />
      <section className="h-[75vh] w-full">
        <Slider />
      </section>
      <ObrasDestacadas />
    </main>
  );
}
