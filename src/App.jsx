import { CarouselImg } from "./assets/components/Carousel";
import { Description } from "./assets/components/Description";
import { Footer } from "./assets/components/Footer";
import { Garden } from "./assets/components/Garden";
import { HeroImg } from "./assets/components/Hero";
import { Navbar } from "./assets/components/Navbar";
import { Shot } from "./assets/components/Shot";
import { House } from "./assets/components/Villa";

export const App = () => {
  return <div>
<Navbar />
<HeroImg />
<Description />
<House />
<CarouselImg />
<Garden />
<Shot />
<Footer />
  </div>;
};
