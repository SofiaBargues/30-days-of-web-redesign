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
import CssGrid from "./components/CssGrid";
import styles from "./style";

function App() {
  return (
    <>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden sticky top-0 z-[9]`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <CssGrid />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
