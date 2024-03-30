import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { TimeLine } from "./components/TimeLine";
import { Navbar } from "./components/Navbar";
import { Squares } from "./components/Squares";
import { Contacto, Map } from "./components/Contacto";
import { Testimonials } from "./components/Testimonials";
import { Poduct } from "./components/Poduct";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Squares />
        <Testimonials />
        {/* <TimeLine /> */}
        {/* <Poduct /> */}

        {/* <Contacto /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
