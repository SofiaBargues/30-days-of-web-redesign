import { Amenities } from "./components/Amenities";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Place } from "./components/Place";
import { Availability } from "./components/Availability";
import { Navbar } from "./components/Navbar";
import { Discount } from "./components/Discount";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Amenities />
        {/* <Discount /> */}
        <Place />
        <Availability />
      </main>
      <Footer />
    </div>
  );
}

export default App;
