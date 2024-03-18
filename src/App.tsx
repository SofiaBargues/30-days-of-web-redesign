import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { TimeLine } from "./components/TimeLine";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <TimeLine />
      </main>
      <Footer />
    </div>
  );
}

export default App;
