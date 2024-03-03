import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Squares } from "./components/Scuares";
import { Visit } from "./components/Visit";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Squares />
        <Visit />

        {/* Others */}
      </main>
      <Footer />
    </>
  );
}

export default App;
