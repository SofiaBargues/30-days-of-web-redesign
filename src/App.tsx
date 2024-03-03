import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { SubNavbar } from "./components/SubNavbar";
import { Squares } from "./components/Scuares";
import { Visit } from "./components/Visit";

function App() {
  return (
    <>
      <Navbar />
      <SubNavbar />
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
