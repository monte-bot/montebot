import AboutUs from "./components/about";
import Hero from "./components/hero";
import { MarqueeDemo } from "./components/marquee-partnes";
import Projects from "./components/projects";
import { Technologys } from "./components/technologys";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Projects />
      <Technologys />
      <MarqueeDemo />
    </div >
  );
}
