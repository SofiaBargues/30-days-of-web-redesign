import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Proof } from "./components/Proof";
import { Squares } from "./components/Scuares";
import { Visit } from "./components/Visit";
import "flowbite";

function App() {
  return (
    <div className="h-screen">
      <main>
        <Navbar />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <Hero />
        {/* <Squares /> */}
        {/* <Visit /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
