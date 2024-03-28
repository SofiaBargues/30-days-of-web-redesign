import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { TimeLine } from "./components/TimeLine";
import { Navbar } from "./components/Navbar";
import { Squares } from "./components/Squares";
import { Map } from "./components/Map";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <Squares />
        <TimeLine />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default App;
