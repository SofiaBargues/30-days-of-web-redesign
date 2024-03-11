import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Proof } from "./components/Proof";
import { Squares } from "./components/Scuares";
import { Visit } from "./components/Visit";
import "flowbite";

import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Sweep } from "./components/Sweep";

function App() {
  return (
    <div className="h-screen">
      <main>
        <Navbar />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <Hero />
        <Sweep />
        {/* <Squares /> */}
        {/* <Visit /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
