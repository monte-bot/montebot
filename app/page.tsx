import AboutUs from "./components/about";
import Hero from "./components/hero";
import { MarqueeDemo } from "./components/marquee-partnes";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      {/* <MarqueeDemo /> */}
    </div>
  );
}
