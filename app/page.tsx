import AboutUs from "./components/about";
import Hero from "./components/hero";
import { MarqueeDemo } from "./components/marquee-partnes";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Projects />
      {/* <MarqueeDemo /> */}
    </div >
  );
}
