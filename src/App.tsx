import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Tabs } from "./components/Tabs";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Squares } from "./components/Scuares";
import { HeroCopy } from "./components/HeroCopy";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Tabs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
