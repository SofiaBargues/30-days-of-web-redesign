import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";
import styles from "./style";

function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
      </div>
      <div className="bg-">
        <div className={` ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={``}>
          <div className={`${styles.boxWidth}`}>
            <Billing />
            <Testimonials />
            {/* <CardDeal /> */}
            {/* <Business /> */}
            {/* <Clients /> */}
            {/* <CTA /> */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
