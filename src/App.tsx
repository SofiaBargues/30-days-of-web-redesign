import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Tabs, TimeLine } from "./components/TimeLine";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Squares } from "./components/Scuares";
import { HeroCopy } from "./components/HeroCopy";
import { Music } from "./components/Music";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Music />
        <Squares />
        <TimeLine />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
