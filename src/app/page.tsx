import HomeMenu from "@/components/Home/Menu";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="w-full">
      <HomeMenu />
      <section className="w-full">
        <Slider />
      </section>
    </main>
  );
}
