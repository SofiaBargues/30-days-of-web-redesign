import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  About,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";
import CssGrid from "./components/CssGrid";
import styles from "./style";

function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
      </div>
      <div>
        <div>
          <div>
            <Hero />
          </div>
        </div>

        <div>
          <div>
            <Stats />
            {/* <Business /> */}
            {/* <Billing /> */}
            <About />
            {/* <Testimonials /> */}
            {/* <Clients /> */}
            {/* <CTA /> */}
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
