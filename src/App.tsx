import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { TimeLine } from "./components/TimeLine";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Squares } from "./components/Squares";
import { HeroCopy } from "./components/HeroCopy";
import { Music } from "./components/Music";
import { Map } from "./components/Map";
import { Grid } from "./components/Grid";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Music />
        <Squares />
        <TimeLine />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default App;
