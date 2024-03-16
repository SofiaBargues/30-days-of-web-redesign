import { Circles } from "./components/Circles";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Proof } from "./components/Proof";
import { Squares } from "./components/Scuares";
import { Visit } from "./components/Visit";
import "flowbite";

function App() {
  return (
    <div>
      <main>
        <Navbar />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <Hero />
        {/* <Date /> */}
        <Circles />
        <Proof />
        {/* <Squares /> */}
        {/* <Visit /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
