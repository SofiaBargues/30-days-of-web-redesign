import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Map } from "./components/Map";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Squares } from "./components/Scuares";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Map /> */}
        <Squares />
      </main>
      <Footer />
    </div>
  );
}

export default App;
