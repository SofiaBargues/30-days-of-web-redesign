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
      <div className="bg-primary w-full overflow-hidden">
        <div className={`bg-slate-800 ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-slate-800 ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Billing />
            <CardDeal />
            <Clients />
            <Testimonials />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
