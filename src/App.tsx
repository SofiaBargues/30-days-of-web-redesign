import { CustomersSection } from "./components/CustomersSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Map } from "./components/Map";
import { Navbar } from "./components/Navbar";
import { About, TimeLine } from "./components/About";
import { CustomerCard } from "./components/CustomerCard";
import { customers } from "./constants/data";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <CustomerCard
          img={customers[0].img}
          name={customers[0].name}
          rating={customers[0].rating}
        />
        <CustomerCard
          img={customers[1].img}
          name={customers[1].name}
          rating={customers[1].rating}
        />
        <CustomerCard
          img={customers[2].img}
          name={customers[2].name}
          rating={customers[2].rating}
        />
        <CustomersSection />
        <About />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default App;
