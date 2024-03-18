import { Customers } from "./components/Customers";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Map } from "./components/Map";
import { Navbar } from "./components/Navbar";
import { About, TimeLine } from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Customers />
        <About />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default App;
